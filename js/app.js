function formatamoeda(numero) {
  return numero.toFixed(2).replace(".", ",")
}
function formulario() {
  var quemchamou = localStorage.getItem('tipoanimal');
  //alert(alimentos);
  //console.log(Object.keys(alimentos)); 
  //console.log(alimentos['capim']);
  //return 0;

  var select = document.getElementById('selectEnergia');
  var energia1 = select.options[select.selectedIndex].value;

  var select = document.getElementById('selectEnergia2');
  var energia2 = select.options[select.selectedIndex].value;

  var select = document.getElementById('selectProteina1');
  var proteina1 = select.options[select.selectedIndex].value;

  var select = document.getElementById('selectProteina2');
  var proteina2 = select.options[select.selectedIndex].value;

  var preco1 = inputPreco1.value;
  var preco2 = inputPreco2.value;
  var preco3 = inputPreco3.value;
  var preco4 = inputPreco4.value;
  var porcentopb = inputPb.value;
  var numrebanho = inputRebanho.value;

  console.log(exigencias[quemchamou]);

  const alimentoCalculo = [];

  if (energia1 != 0) {
    if (preco1) {
      alimentos[energia1].custo = parseFloat(preco1); //COMO SETAR O NOVO VALOR NO OBJETO
    }

    alimentoCalculo.push(alimentos[energia1]);
  }
  if (energia2 != 0) {
    if (preco2) {
      alimentos[energia2].custo = parseFloat(preco2);
    }
    alimentoCalculo.push(alimentos[energia2]);
  }
  if (proteina1 != 0) {
    if (preco3) {
      alimentos[proteina1].custo = parseFloat(preco3);
    }
    alimentoCalculo.push(alimentos[proteina1]);
  }
  if (proteina2 != 0) {
    if (preco4) {
      alimentos[proteina2].custo = parseFloat(preco4);
    }
    alimentoCalculo.push(alimentos[proteina2]);
  }

  // if (!porcentopb) {
  //   porcentopb = 0.13;
  // } 
  if (!numrebanho) {
    numrebanho = 1;
  }

  const retorno = {
    alimentos: alimentoCalculo,
    porcentopb,
    numrebanho,
    animal: exigencias[quemchamou]
  }
  //console.log(retorno);
  montaString(retorno);

  return retorno;
}


function montaString(retorno) {
  let stringParaCalculo = `Minimize \n`;
  stringParaCalculo += "obj: ";
  let interacao = 0;
  for (const alim of retorno.alimentos) {
    stringParaCalculo += `+${alim.custo} x${interacao}  `;
    interacao++;
  }
  stringParaCalculo += '\n';
  stringParaCalculo += '\n';

  stringParaCalculo += `Subject To \n`;

  let restricao = 1;
  interacao = 0;
  stringParaCalculo += `Restricao${restricao}: `;
  for (const alimento of retorno.alimentos) {
    stringParaCalculo += `+1 x${interacao}  `;
    interacao++;
  }
  restricao++;
  stringParaCalculo += `= ${retorno.animal.ims}  `;
  stringParaCalculo += '\n';

  for (const nutriente of retorno.animal.nutrientes) {
    interacao = 0;
    stringParaCalculo += `Restricao${restricao}: `;
    for (const alimento of retorno.alimentos) {
      stringParaCalculo += `+${alimento[nutriente]} x${interacao}  `;
      interacao++;
    }
    restricao++;

    if (retorno.porcentagempb && nutriente === "pb") {
      stringParaCalculo += `= ${retorno.porcentopb}  `;
    } else {
      stringParaCalculo += `= ${retorno.animal[nutriente]}  `;
    }
    stringParaCalculo += '\n';
  }
  stringParaCalculo += '\n';
  stringParaCalculo += '\n';

  stringParaCalculo += `Bounds \n`;
  interacao = 0;
  for (const alim of retorno.alimentos) {
    stringParaCalculo += `x${interacao}>=0\n`;
    interacao++;
  }

  stringParaCalculo += '\n';
  stringParaCalculo += '\n';

  stringParaCalculo += `Generals \n`;
  interacao = 0;
  for (const alim of retorno.alimentos) {
    stringParaCalculo += `x${interacao}\n`;
    interacao++;
  }
  stringParaCalculo += '\n';
  stringParaCalculo += '\n';

  stringParaCalculo += `End \n`;

  console.log(stringParaCalculo);
  console.log(solver(stringParaCalculo));
}



function solver(source) {

  var lp = glp_create_prob();
  glp_read_lp_from_string(lp, null, source);

  glp_scale_prob(lp, GLP_SF_AUTO);

  //    if (glp_get_num_int(lp) === 0 && glp_get_num_bin(lp) === 0) {

  var smcp = new SMCP({ presolve: GLP_ON });
  var r = glp_simplex(lp, smcp);

  if (r === 0) {
    //Caso tenha encontrado uma solucao otima
    //alert("Solução Ótima encontrada por Simplex");
    var z = glp_get_obj_val(lp);
    var x = [];
    for (var i = 0; i < glp_get_num_cols(lp); i++) {
      x[i] = glp_get_col_prim(lp, i + 1);
    }
    return {
      z: z,
      x: x
    };
  }
  else {
    //Caso tenha acontecido algum erro
    var z = "";
    switch (r) {
      case GLP_EBADB:
        z = "Número de variáveis básicas não é o mesmo que o número de linhas do objeto do problema. ";
        break;

      case GLP_ESING:
        z = "O modelo contém apenas uma matriz base dentro do modelo. ";
        break;

      case GLP_ECOND:
        z = "Número de condições muito grande para a matriz base inicial. ";
        break;

      case GLP_EBOUND:
        z = "Variáveis limitadas reais com limites incorretos. ";
        break;

      case GLP_EFAIL:
        z = "A busca da resposta foi encerrada devido a falha do solver. ";
        break;

      case GLP_EOBJLL:
        z = "A função objetivo que era pra ser maximizada atingiu seu menor valor e continua diminuindo. ";
        break;

      case GLP_EOBJUL:
        z = "A função objetivo que era pra ser minimizada atingiu seu maior valor e continua aumentando. ";
        break;

      case GLP_EITLIM:
        z = "A iteração do simplex excedeu o limite. ";
        break;

      case GLP_ETMLIM:
        z = "O tempo limite foi excedido. ";
        break;

      case GLP_ENOPFS:
        z = "Não existe solução viável primal. ";
        break;

      case GLP_ENODFS:
        z = "Não existe solução viável dual. ";
    }

    return {
      z: z,
      x: []
    };
  }

















}










//FUNÇÃO PARA PREENCHER TABELA CRIADA NO HTML COM A RESPOSTA DO SOLVER
var elementos;

function racao() {
  elementos = formulario();
  alert(elementos[0].nome);
} //TESTAR NA TELA MIKAMIX BOTÃO VOLTAR


//PARA CRIAR TABELA NO HTML 
var quantidademn = 0;

var alimento = null;
var quantidademn = null;

function tabelaracao() {
  //PARA TESTAR BOTÃO SOBRE DA TELA MIKAMIXRAÇÃO
  var a = { nome: "capim", custo: 0.02, ms: 15, pb: 10, fdn: 55, ndt: 60, cnf: 25, cinza: 4, oleo: 2, ca: 0.30, fosforo: 0.20 };
  var b = { nome: "capimelefante", custo: 0.03, ms: 19.96, pb: 8.53, fdn: 79.20, ndt: 50.35, cnf: 12.20, cinza: 9.99, oleo: 1.95, ca: 0.38, fosforo: 0.32 };
  var c = null;
  var d = { nome: "capimelefante", custo: 0.03, ms: 19.96, pb: 8.53, fdn: 79.20, ndt: 50.35, cnf: 12.20, cinza: 9.99, oleo: 1.95, ca: 0.38, fosforo: 0.32 };
  var elementos = [a, b, c, d];
  var corpo_tabela = document.querySelector("tbody");
  //elementos = formulario(); 
  i = -1;
  do {
    i++;
    if (elementos[i] != null) {
      this.alimento = elementos[i].nome;
      this.quantidademn = elementos[i].ms;
      console.log(criar_linha_tabela(corpo_tabela));
    }
  } while (i < 3);
}

function criar_linha_tabela(corpo_tabela) {
  var linha = document.createElement("tr");
  var campo_alimento = document.createElement("td");
  var campo_quantidademn = document.createElement("td");

  var texto_alimento = document.createTextNode(this.alimento);
  var texto_quantidademn = document.createTextNode(this.quantidademn);

  campo_alimento.appendChild(texto_alimento);
  campo_quantidademn.appendChild(texto_quantidademn);
  linha.appendChild(campo_alimento);
  linha.appendChild(campo_quantidademn);
  corpo_tabela.appendChild(linha);
}

function tipoanimal(codigo) {
  // alert(codigo);
  // return codigo;
  localStorage.setItem('tipoanimal', codigo);
}

