function formatamoeda(numero) {
  return numero.toFixed(2).replace(".", ",")
}

function mudacor(input1, input2, input3) {
  if (input1 == 0) {
    document.getElementById('selectEnergia').style.borderColor = "#FF0F0F";
  }
  if (input2 == 0) {
    document.getElementById('selectProteina1').style.borderColor = "#FF0F0F";
  }
  if (input3 == 0) {
    document.getElementById('selectMineral').style.borderColor = "#FF0F0F";
  }
}

function mudacormateria(tipo) {
  if (tipo == 1) {
    document.getElementById('amn').className = "navegacaomenu";
    document.getElementById('ams').className = "";
  }
  if (tipo == 2) {
    document.getElementById('ams').className = "navegacaomenu";
    document.getElementById('amn').className = "";
  }
}

function mudacorpb() {
  document.getElementById('inputPb').style.borderColor = "#FF0F0F";
}

function resetacor() {
  document.getElementById('selectEnergia').style.borderColor = "#E5E5E5";
  document.getElementById('selectProteina1').style.borderColor = "#E5E5E5";
  document.getElementById('selectMineral').style.borderColor = "#E5E5E5";
}

//MOEDA
function moeda(a, e, r, t) {
  let n = ""
    , h = j = 0
    , u = tamanho2 = 0
    , l = ajd2 = ""
    , o = window.Event ? t.which : t.keyCode;
  if (13 == o || 8 == o)
    return !0;
  if (n = String.fromCharCode(o),
    -1 == "0123456789".indexOf(n))
    return !1;
  for (u = a.value.length,
    h = 0; h < u && ("0" == a.value.charAt(h) || a.value.charAt(h) == r); h++)
    ;
  for (l = ""; h < u; h++)
    -1 != "0123456789".indexOf(a.value.charAt(h)) && (l += a.value.charAt(h));
  if (l += n,
    0 == (u = l.length) && (a.value = ""),
    1 == u && (a.value = "0" + r + "0" + l),
    2 == u && (a.value = "0" + r + l),
    u > 2) {
    for (ajd2 = "",
      j = 0,
      h = u - 3; h >= 0; h--)
      3 == j && (ajd2 += e,
        j = 0),
        ajd2 += l.charAt(h),
        j++;
    for (a.value = "",
      tamanho2 = ajd2.length,
      h = tamanho2 - 1; h >= 0; h--)
      a.value += ajd2.charAt(h);
    a.value += r + l.substr(u - 2, u)
  }
  return !1
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

  var select = document.getElementById('selectMineral');
  var mineral = select.options[select.selectedIndex].value;

  var preco1 = inputPreco1.value;
  var preco2 = inputPreco2.value;
  var preco3 = inputPreco3.value;
  var preco4 = inputPreco4.value;
  var porcentopb = (inputPb.value / 100);
  var numrebanho = inputRebanho.value;

  if ((energia1 == 0) || (proteina1 == 0) || (mineral == 0)) {
    mudacor(energia1, proteina1, mineral);
  } else {
    resetacor();
    const alimentoCalculo = [];

    if (energia1 != 0) {
      if (preco1) {
        alimentos[energia1].custo = parseFloat((preco1) / alimentos[energia1].ms); //COMO SETAR O NOVO VALOR NO OBJETO
      }
      alimentoCalculo.push(alimentos[energia1]);
    }
    if (energia2 != 0) {
      if (preco2) {

        alimentos[energia2].custo = parseFloat((preco2) / alimentos[energia2].ms);
      }
      alimentoCalculo.push(alimentos[energia2]);
    }
    if (proteina1) {
      if (parseFloat(preco3) > 0) {
        alimentos[proteina1].custo = parseFloat((preco3) / alimentos[proteina1].ms);
      }
      alimentoCalculo.push(alimentos[proteina1]);
    }
    if (proteina2 != 0) {
      if (preco4) {
        alimentos[proteina2].custo = parseFloat((preco4) / alimentos[proteina2].ms);
      }
      alimentoCalculo.push(alimentos[proteina2]);
    }
    if (!numrebanho) {
      numrebanho = 1;
    }

    alimentoCalculo.push(alimentos[mineral]);
    const retorno = {
      alimentos: alimentoCalculo,
      porcentopb,
      numrebanho,
      animal: exigencias[quemchamou]
    }
    console.log(retorno.animal);
    //console.log(retorno.animal[mineral]);

    montaString(retorno);
    var ingrediente = JSON.stringify(retorno.alimentos);
    ingredienteretorno(ingrediente);
    nrebanho(retorno.numrebanho);
    return retorno;
  }
}


function montaString(retorno) {

  var stringParaCalculo = `Minimize \n`;
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
  var cont = 0;


  for (const exigencia of retorno.animal.exigenciaanimal) { //verificar a quantidade de restrições
    interacao = 0;
    if (retorno.animal.tiporestricao[exigencia] === "=") {
      let tolerancia = retorno.animal.tolerancia || 0.10;
      for (const [sinal, tol] of [['>=', -tolerancia], ['<=', +tolerancia]]) {
        stringParaCalculo += `Restricao${restricao}: `;
        interacao = 0;
        for (const alimento of retorno.alimentos) { //vericar as exigencias de cada animal
          if (cont <= 1) {
            stringParaCalculo += `+1 x${interacao}  `;
            interacao++;
          } else {
            stringParaCalculo += `+${alimento[exigencia]} x${interacao}  `;
            interacao++;
          }
        }
        restricao++;
        if (retorno.porcentopb && exigencia === "pb") { //verificar se preencheu o % de PB
          stringParaCalculo += `${sinal} ${retorno.porcentopb * (1 + tol)}  `;
        } else {
          stringParaCalculo += `${sinal} ${retorno.animal[exigencia] * (1 + tol)}  `;

        }
        stringParaCalculo += '\n';
        // stringParaCalculo += `Restricao${restricao}: `;
        cont++;
      }
    } else {
      stringParaCalculo += `Restricao${restricao}: `;
      for (const alimento of retorno.alimentos) { //vericar as exigencias de cada animal
        stringParaCalculo += `+${alimento[exigencia]} x${interacao}  `;
        interacao++;
      }
      restricao++;

      if (retorno.porcentopb && exigencia === "pb") { //verificar se preencheu o % de PB
        stringParaCalculo += `${retorno.animal.tiporestricao[exigencia]} ${retorno.porcentopb}  `;
      } else {
        stringParaCalculo += `${retorno.animal.tiporestricao[exigencia]} ${retorno.animal[exigencia]}  `;
      }
      stringParaCalculo += '\n';
      cont++;
    }
  }
  stringParaCalculo += '\n';
  stringParaCalculo += '\n';


  stringParaCalculo += `Bounds \n`;
  interacao = 0;
  for (const alim of retorno.alimentos) { // RESTRIÇOES 
    if ((retorno.alimentos.length - 1) == interacao) { //SAL É O ULTIMO ELEMENTO DO VETOR
      stringParaCalculo += `x${interacao}=${retorno.animal.sal}\n`;
      //console.log(retorno.animal.mineral);
    } else {

      if (retorno.alimentos[interacao].nome == "Uréia") {
        console.log(retorno.alimentos[interacao].nome);
        stringParaCalculo += `x${interacao}>=0\n`;
        stringParaCalculo += `x${interacao}<=${(retorno.animal.ims) * 0.01}\n`;

      } else {
        stringParaCalculo += `x${interacao}>=0.05\n`;
      }


    }
    interacao++;
  }

  stringParaCalculo += '\n';
  stringParaCalculo += '\n';

  stringParaCalculo += `Generals \n`;
  interacao = 0;
  for (const alim of retorno.alimentos) { // VARIÁVEIS
    stringParaCalculo += `x${interacao}\n`;
    interacao++;
  }
  stringParaCalculo += '\n';
  stringParaCalculo += '\n';
  stringParaCalculo += `End \n`;

  //AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAGAR
  console.log(stringParaCalculo);

  resultado = solver(stringParaCalculo); //CHAMA O SOLVER

  console.log(resultado); // RESPOSTA DO SOLVER

  if (resultado.z == "Não existe solução viável primal. ") {
    alert("AJUSTA A PROTEÍNA AÍ VAI");
    mudacorpb();
  } else {
    var resultadoaux = JSON.stringify(resultado);
    atravessaretorno(resultadoaux);
    window.location.href = "./resultadoracao.html";
  }

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


var alimento = null;
var quantidademn = null;
var rastreio = 0;
var chamada = 7;
var key = false;
var animais = 1;

function tabelaracao(materia) {
  if (chamada == materia) {
    rastreio = 1;
  } else {
    //alert("ENTREI");
    // OBJETO COM DUAS CHAVES: Z QUE É O MENOR PREÇO ENCONTRADO COM AS COMBINAÇÕES DE X1 X2 X3 X4|| //
    //E A SEGUNDA CHAVE DO OBJETO: X QUE É UM VETOR DO TAMANHO DO NUMERO DE INREDIENTES SELECIONADOS, 
    //SENDO A POSICAO 0 A 3 A QUANTIDADE EM KG DOS INGREDIENTES//
    if (rastreio === 0) {
      //alert(rastreio);

      deleta_linha_tabela(key);
      var resultadosolver = window.localStorage.getItem('obj')
      var retornoqtd = JSON.parse(resultadosolver);

      var ingredientes = window.localStorage.getItem('objingrediente')
      var retornoingrediente = JSON.parse(ingredientes);

      var rebanho = window.localStorage.getItem('totalanimal')
      var totalanimal = JSON.parse(rebanho);

      var corpo_tabela = document.querySelector("tbody");

      let int = 0;
      for (const itenstabela of retornoingrediente) {
        //console.log(itenstabela.ms);
        this.alimento = itenstabela.nome;
        if (materia === 1) {
          this.quantidademn = parseFloat(((retornoqtd.x[int] / itenstabela.ms) * totalanimal)).toFixed(3);
          mudacormateria(1);
        } else {
          this.quantidademn = parseFloat((retornoqtd.x[int] * totalanimal)).toFixed(3);
          mudacormateria(2);
        }
        criar_linha_tabela(corpo_tabela);
        int++;
      }
    }
    chamada = materia;
  }
  rastreio = 0;
  key = true;
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

function deleta_linha_tabela(key) {
  if (key) {
    var linhas = document.getElementById("tableracao").rows;
    for (i = linhas.length - 1; i >= 1;) {
      document.getElementById("tableracao").deleteRow(i);
      i--;
    }
  }
}

function totalrebanho() {
  var rebanho = window.localStorage.getItem('totalanimal')
  var totalanimal = JSON.parse(rebanho);
  if (totalanimal == 1) {
    return (totalanimal + " animal");
  } else {
    return (totalanimal + " animais");
  }
}
function quemchama() {
  var quemchamou = localStorage.getItem('tipoanimal');
  return (exigencias[quemchamou].nome);
}

function tipoanimal(codigo) {
  localStorage.setItem('tipoanimal', codigo);
}

function atravessaretorno(solucaosolver) {
  localStorage.setItem('obj', solucaosolver);
}

function ingredienteretorno(ingrediente) {
  localStorage.setItem('objingrediente', ingrediente);
}

function nrebanho(nanimal) {
  localStorage.setItem('totalanimal', nanimal);
}

function combobox(elemento) {
  const alimentosselect = document.getElementById(elemento);

  for (listaalimento in alimentos) {
    option = new Option(alimentos[listaalimento].nome, listaalimento);
    if (elemento != "selectMineral") {
      if (option.value != "sal") {
        alimentosselect.options[alimentosselect.options.length] = option;
      }
    } else {
      if (option.value == "sal") {
        alimentosselect.options[alimentosselect.options.length] = option;
      }
    }
  };
}