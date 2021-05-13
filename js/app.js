function formatamoeda(numero) {
  return numero.toFixed(2).replace(".", ",")
}

function mudacor(input1, input2, input3, input4, chave) {
  if (input1 == 0) {
    document.getElementById('select1').style.borderColor = "#FF0F0F";
  }
  if (input2 == 0) {
    if (chave == "ruminante") {
      document.getElementById('select3').style.borderColor = "#FF0F0F";
    } else {
      document.getElementById('select2').style.borderColor = "#FF0F0F";
    }
  }
  if (input3 == 0) {
    if (chave == "ruminante") {
      document.getElementById('selectMineral').style.borderColor = "#FF0F0F";
    }
    if (input4 != 0) {
      document.getElementById('select3').style.borderColor = "#FF0F0F";
    }
  } else {
    if (input4 == 0) {
      document.getElementById('select4').style.borderColor = "#FF0F0F";
    }
  }
  if (input4 == 0) {
    if (input3 != 0) {
      document.getElementById('select4').style.borderColor = "#FF0F0F";
    }
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
  document.getElementById('select1').style.borderColor = "#E5E5E5";
  document.getElementById('select2').style.borderColor = "#E5E5E5";
  document.getElementById('select3').style.borderColor = "#E5E5E5";
  if (document.getElementById('selectMineral')) {
    document.getElementById('selectMineral').style.borderColor = "#E5E5E5";
  } else {
    document.getElementById('select4').style.borderColor = "#E5E5E5";
  }
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

  var select = document.getElementById('select1');
  var energia1 = select.options[select.selectedIndex].value;

  var select = document.getElementById('select2');
  var energia2 = select.options[select.selectedIndex].value;

  var select = document.getElementById('select3');
  var proteina1 = select.options[select.selectedIndex].value;

  var select = document.getElementById('select4');
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
    resetacor();
    mudacor(energia1, proteina1, mineral, 1, "ruminante");
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

    montaString(retorno, 0);
    var ingrediente = JSON.stringify(retorno.alimentos);
    ingredienteretorno(ingrediente);
    nrebanho(retorno.numrebanho);

    return retorno;
  }
}


var b = 0;
function montaString(retorno, bound) {
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
  if (bound <= 2) {
    tolerancia = retorno.animal.tolerancia || 0.10;
  } else {
    if (bound > 2 && bound < 6) {
      tolerancia = tolerancia + 0.0166666666666666666666666666666;
    } else {
      window.location.href = "./repick.html";
      return 0;
    }
  }
  //alert(tolerancia);
  for (const exigencia of retorno.animal.exigenciaanimal) { //verificar a quantidade de restrições
    interacao = 0;
    if (retorno.animal.tiporestricao[exigencia] === "=") {

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
        if (bound == 1) {
          stringParaCalculo += `x${interacao}>=0\n`;
        } else {
          stringParaCalculo += `x${interacao}>=0.05\n`;
        }

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
    b++;
    console.log(b);
    montaString(retorno, b);
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
      custo = 0;
      for (const itenstabela of retornoingrediente) {
        this.alimento = itenstabela.nome;
        if (materia === 1) { //MN = 1
          this.quantidademn = parseFloat(((retornoqtd.x[int] / itenstabela.ms) * totalanimal)).toFixed(3);
          this.precoracao = itenstabela.custo * quantidademn;
          custo = custo + precoracao;
          mudacormateria(1);
        } else { //MS <> 1 
          this.quantidademn = parseFloat((retornoqtd.x[int] * totalanimal)).toFixed(3);
          this.precoracao = itenstabela.custo / itenstabela.ms * quantidademn;
          custo = custo + precoracao;
          mudacormateria(2);
        }
        criar_linha_tabela(corpo_tabela);
        int++;
      }
    }
    chamada = materia;
  }
  custodieta(custo);
  rastreio = 0;
  key = true;
}

function criar_linha_tabela(corpo_tabela) {
  var linha = document.createElement("tr");
  var campo_alimento = document.createElement("td");
  var campo_quantidademn = document.createElement("td");

  var texto_alimento = document.createTextNode(this.alimento);
  var texto_quantidademn = document.createTextNode(this.quantidademn);
  console.log(texto_alimento);
  console.log(texto_quantidademn);

  campo_alimento.appendChild(texto_alimento);
  campo_quantidademn.appendChild(texto_quantidademn);
  linha.appendChild(campo_alimento);
  linha.appendChild(campo_quantidademn);
  corpo_tabela.appendChild(linha);

}

function deleta_linha_tabela(key) {
  if (key) {
    var linhas = document.getElementById("tableracao").rows;
    for (i = linhas.length - 2; i >= 1;) { //-2 pra não excluir a ultima linha do preço da ração
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
function nrebanho(nanimal) {
  localStorage.setItem('totalanimal', nanimal);
}


function precodieta(nanimal) {

  var preco = window.localStorage.getItem('valordieta');
  var precofinal = JSON.parse(preco);
  return parseFloat(precofinal).toFixed(2);
}
function custodieta(custo) {
  localStorage.setItem('valordieta', custo);
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


function combobox(elemento) {
  const alimentosselect = document.getElementById(elemento);
  for (listaalimento in alimentos) {
    if (!alimentos[listaalimento].espaco) {


      option = new Option(alimentos[listaalimento].nome, listaalimento);
      if (elemento != "selectMineral") {
        if (option.value != "sal" && option.value) {
          if (elemento == "select3") { //PARA SELECIONAR APENAS OS ALIMENTOS ALTERNATIVOS NO 3º SELECT, OU SEJA, OS QUE POSSUEM NIVEL PRÁTICO PREENCHIDOS
            if (alimentos[listaalimento].nivelpraticosuino != 0) {
              alimentosselect.options[alimentosselect.options.length] = option;
            }
          } else {
            alimentosselect.options[alimentosselect.options.length] = option;
          }
        }
      } else {
        if (option.value == "sal") {
          alimentosselect.options[alimentosselect.options.length] = option;
        }
      }
    }
  };

}

function tabelaalimentos() {

  var corpo_tabela = document.querySelector("tbody");

  let int = 0;
  for (itenstabela in alimentos) {
    this.alimento = alimentos[itenstabela].nome;
    this.alimentoms = alimentos[itenstabela].ms;
    this.alimentopb = alimentos[itenstabela].pb;
    this.alimentofdn = alimentos[itenstabela].fdn;
    this.alimentocnf = alimentos[itenstabela].cnf;
    this.alimentocinza = alimentos[itenstabela].cinza;
    this.alimentooleo = alimentos[itenstabela].oleo;
    this.alimentoca = alimentos[itenstabela].ca;
    this.alimentofosforo = alimentos[itenstabela].fosforo;
    criar_linha_tabela_alimento(corpo_tabela);
    int++;
  }
}


function criar_linha_tabela_alimento(corpo_tabela) {
  var linha = document.createElement("tr");

  var campo_alimento = document.createElement("td");
  var campo_atributos = document.createElement("td");

  var texto_alimento = document.createTextNode(this.alimento);
  var texto_atributos = document.createTextNode(`MS: ${this.alimentoms}; \n PB: ${this.alimentopb}; FDN: ${this.alimentofdn}; CNF: ${this.alimentocnf}; Cinza: ${this.alimentocinza}; Óleo: ${this.alimentooleo}; Cálcio: ${this.alimentoca}; Fósforo: ${this.alimentofosforo};`);

  console.log(texto_alimento);
  console.log(texto_atributos);

  campo_alimento.appendChild(texto_alimento);
  campo_atributos.appendChild(texto_atributos);
  linha.appendChild(campo_alimento);
  linha.appendChild(campo_atributos);
  corpo_tabela.appendChild(linha);

}

function tabelaanimal() {

  var corpo_tabela = document.querySelector("tbody");

  let int = 0;
  for (itenstabela in exigencias) {
    this.animalnome = exigencias[itenstabela].nome;
    this.animalims = exigencias[itenstabela].ims;
    this.animalpb = exigencias[itenstabela].pb;
    this.animalfdn = exigencias[itenstabela].fdn;
    this.animalndt = exigencias[itenstabela].ndt;
    this.animalmineral = exigencias[itenstabela].mineral;
    criar_linha_tabela_animal(corpo_tabela);
    int++;
  }
}


function criar_linha_tabela_animal(corpo_tabela) {
  var linha = document.createElement("tr");

  var campo_animal = document.createElement("td");
  var campo_atributos = document.createElement("td");

  var texto_animal = document.createTextNode(this.animalnome);
  var texto_atributos = document.createTextNode(`MS: ${this.animalims}; \n PB: ${this.animalpb}; FDN: ${this.animalfdn}; NDT: ${this.animalndt}; Mineral: ${this.animalmineral};`);

  console.log(texto_animal);
  console.log(texto_atributos);

  campo_animal.appendChild(texto_animal);
  campo_atributos.appendChild(texto_atributos);
  linha.appendChild(campo_animal);
  linha.appendChild(campo_atributos);
  corpo_tabela.appendChild(linha);

}



function formularionr() {

  var alimento1 = 0;
  var alimento2 = 0;
  var alimento3 = 0;
  var nivel1 = 0;
  var quemchamou = localStorage.getItem('tipoanimal');


  var select = document.getElementById('select1');
  alimento1 = select.options[select.selectedIndex].value;

  var select = document.getElementById('select2');
  alimento2 = select.options[select.selectedIndex].value;

  var select = document.getElementById('select3');
  alimento3 = select.options[select.selectedIndex].value;

  var select = document.getElementById('select4');
  nivel1 = (select.options[select.selectedIndex].value / 1);



  var preco1 = inputPreco1.value;
  var preco2 = inputPreco2.value;
  var preco3 = inputPreco3.value;

  var porcentopb = (inputPb.value / 1);
  var espaco = (inputEspaco.value / 1);

  if (!porcentopb) {
    porcentopb = 18;
  }
  exigencias[quemchamou].pb = porcentopb;
  if (!espaco) {
    espaco = 3;
  }

  if (((alimento1 == 0) || (alimento2 == 0)) || ((alimento3 == 0) && (nivel1 != 0)) || ((alimento3 != 0) && (nivel1 == 0))) {
    resetacor();
    mudacor(alimento1, alimento2, alimento3, nivel1, "naoruminante");
  } else {
    resetacor();
  }

  if (((alimento1 != 0) && (alimento2 != 0)) && (((alimento3 != 0) && (nivel1 != 0)) || ((alimento3 == 0) && (nivel1 == 0)))) {
    const alimentoCalculo = [];
    if (preco1) {
      alimentos[alimento1].custo = parseFloat((preco1) / alimentos[alimento1].ms); //COMO SETAR O NOVO VALOR NO OBJETO
    }
    alimentoCalculo.push(alimentos[alimento1]);
    if (alimento2 != 0) {
      if (preco2) {
        alimentos[alimento2].custo = parseFloat((preco2) / alimentos[alimento2].ms);
      }
      alimentoCalculo.push(alimentos[alimento2]);
    }

    if (alimento3 != 0) {
      if (preco3) {
        alimentos[alimento3].custo = parseFloat((preco3) / alimentos[alimento3].ms);
      }
      alimentoCalculo.push(alimentos[alimento3]);
    }

    //alimentoCalculo.push(alimentos[mineral]);
    const retorno = {
      animal: exigencias[quemchamou],
      alimentos: alimentoCalculo,
      nivel1,
      porcentopb,
      espaco
    }
    quadradodepearson(retorno);

    //return retorno;
  }
}

function quadradodepearson(objeto) {
  ajustepbpearson = (objeto.porcentopb * 100) / (100 - objeto.espaco);
  var pbalimento1 = 0;
  pbalimento1 = objeto.alimentos[0].pb;
  pbalimento2 = objeto.alimentos[1].pb;
  if (objeto.alimentos[2].pb) {
    pbalimento3 = objeto.alimentos[2].pb;
  } else {
    objeto.alimentos[2] = 0;
  }

  var yms = 1;
  var xms = 100 - objeto.nivel1 - objeto.espaco; //-yms
  var partex = (pbalimento1 * (xms));
  var esp = 0;

  partex = (objeto.animal.pb - (pbalimento3 * objeto.nivel1)) - partex;
  var partey = pbalimento2 - pbalimento1;

  yms = (partex / partey); // partes de alimento 2 RESPOSTAAAAAAAAAAAAS
  xms = (xms - yms); // partes de alimento 1
  zms = (objeto.nivel1); // partes de alimento 3 - alternativo
  esp = objeto.espaco;

  console.log(objeto);

  var pbxms = xms * pbalimento1; //QUANTIDADE % DE PB INGREDIENTE 1
  var pbyms = yms * pbalimento2; // QUANTIDADE % DE PB INGREDIENTE 2 
  var pbzms = zms * pbalimento3; // QUANTIDADE % DE PB INGREDIENTE 3

  console.log("partes de alimento 1 2 e 3 + espaço");
  console.log(xms);
  console.log(yms);
  console.log(zms);
  console.log(esp);

  console.log("QUANTIDADE % DE PB dos alimentos 1 2 e 3");
  console.log(pbxms);
  console.log(pbyms);
  console.log(pbzms);


  var sodioexigencia = objeto.animal.sal * 100; //exigencia de sal do animal * 100 pois a dieta sai em 100% e não em 1
  var sodioalimentos = (objeto.alimentos[0].na * xms) + (objeto.alimentos[1].na * yms) + (objeto.alimentos[2].na * zms); //SÓDIO JÁ DISPONIVEL NOS ALIMENTOS/INGREDIENTES
  var sodiodemanda = sodioexigencia - sodioalimentos;
  var salracao = 0;
  if (sodiodemanda > 0) {
    salracao = ((sodiodemanda) / alimentos.sal.na);
  }
  console.log("QUANTIDADE DE SAL PARA COMPLETAR O SÓDIO QUE FALTA");
  console.log(salracao); //RESPOSTA SODIOOOOOOOOOOOOOOOOOO

  var fosforoexigencia = objeto.animal.fosforo * 100; //exigencia de fosforo do animal * 100 pois a dieta sai em 100% e não em 1
  var fosforoalimentos = (objeto.alimentos[0].fosforo * xms) + (objeto.alimentos[1].fosforo * yms) + (objeto.alimentos[2].fosforo * zms); //FOSFORO JÁ DISPONIVEL NOS ALIMENTOS/INGREDIENTES
  var fosforodemanda = fosforoexigencia - fosforoalimentos;
  var fosfororacao = 0;
  if (fosforodemanda > 0) {
    fosfororacao = ((fosforodemanda) / alimentos.fbicalcico.fosforo);
  }

  console.log("QUANTIDADE DE F. BICÁLCICO PARA COMPLETAR O FÓSFORO QUE FALTA");
  console.log(fosfororacao); //RESPOSTA FOSFOROOOOOOOOOOO


  var caexigencia = objeto.animal.ca * 100; //exigencia de cálcio do animal * 100 pois a dieta sai em 100% e não em 1
  var caalimentos = (objeto.alimentos[0].ca * xms) + (objeto.alimentos[1].ca * yms) + (objeto.alimentos[2].ca * zms) + (fosfororacao * alimentos.fbicalcico.ca); //CÁLCIO JÁ DISPONIVEL NOS ALIMENTOS/INGREDIENTES
  var cademanda = caexigencia - caalimentos;
  var caracao = 0;
  if (cademanda > 0) {
    caracao = ((cademanda) / alimentos.calcario.ca);
  }

  console.log("QUANTIDADE DE CALCÁRIO PARA COMPLETAR O CÁLCIO QUE FALTA");
  console.log(caracao); //RESPOSTA CÁLCIO


  var emexigencia = objeto.animal.em; //ENERGIA METABOLIZÁVEL DO ANIMAL
  var emalimentos = ((objeto.alimentos[0].em * xms) / 100) + ((objeto.alimentos[1].em * yms) / 100) + ((objeto.alimentos[2].em * zms) / 100); //ENERGIA JÁ DISPONIVEL NOS ALIMENTOS/INGREDIENTES
  var emdemanda = emexigencia - emalimentos;
  var emracao = 0;
  if (emdemanda > 0) {
    emracao = ((emdemanda) / alimentos.oleo.em * 100);
  }

  console.log("ENERGIA METABOLIZAVEL");
  console.log(emexigencia);

  console.log("ENERGIA METABOLIZÁVEL DISPONIVEL NO ALIMENTO 1 ");
  console.log(objeto.alimentos[0].em);
  console.log("ENERGIA METABOLIZÁVEL DISPONIVEL NO ALIMENTO 2 ");
  console.log(objeto.alimentos[1].em);
  console.log("ENERGIA METABOLIZÁVEL DISPONIVEL NO ALIMENTO 3 ");
  console.log(objeto.alimentos[2].em);


  console.log("ENERGIA METABOLIZÁVEL DISPONIVEL NO ALIMENTO 1 X QUANTIDADE DE PARTES DE ALIMENTO 1");
  console.log(objeto.alimentos[0].em * xms);
  console.log("ENERGIA METABOLIZÁVEL DISPONIVEL NO ALIMENTO 2 X QUANTIDADE DE PARTES DE ALIMENTO 2");
  console.log(objeto.alimentos[1].em * yms);
  console.log("ENERGIA METABOLIZÁVEL DISPONIVEL NO ALIMENTO 3 X QUANTIDADE DE PARTES DE ALIMENTO 3");
  console.log(objeto.alimentos[2].em * zms);



  console.log("ENERGIA METABOLIZÁVEL JÁ DISPONIVEL NOS 3 ALIMENTOS/INGREDIENTES");
  console.log(emalimentos);
  console.log("ENERGIA METABOLIZÁVEL QUE FALTA COMPLETAR");
  console.log(emdemanda);

  console.log("QUANTIDADE DE OLEO PARA COMPLETAR A ENERGIA METABOLIZÁVEL QUE FALTA");

  console.log(emracao); //RESPOSTA ENERGIA METABOLIZÁVEL 



  var lisexigencia = objeto.animal.lis; //EXIGENCIA DE LISINA DO ANIMAL
  var lisalimentos = (objeto.alimentos[0].lis * xms) + (objeto.alimentos[1].lis * yms) + (objeto.alimentos[2].lis * zms); //LISINA JÁ DISPONIVEL NOS ALIMENTOS/INGREDIENTES
  var lisdemanda = lisexigencia - lisalimentos;
  var lisracao = 0;
  if (lisdemanda > 0) {
    lisracao = ((lisdemanda) / alimentos.lisina.lis);
  }

  console.log("EXIGENCIA DE LISINA ");
  console.log(lisexigencia);

  console.log("LISINA DISPONIVEL NO ALIMENTO 1 ");
  console.log(objeto.alimentos[0].lis);
  console.log("LISINA DISPONIVEL NO ALIMENTO 2 ");
  console.log(objeto.alimentos[1].lis);
  console.log("LISINA DISPONIVEL NO ALIMENTO 3 ");
  console.log(objeto.alimentos[2].lis);


  console.log("LISINA DISPONIVEL NO ALIMENTO 1 X QUANTIDADE DE PARTES DE ALIMENTO 1");
  console.log(objeto.alimentos[0].lis * xms);
  console.log("LISINA DISPONIVEL NO ALIMENTO 2 X QUANTIDADE DE PARTES DE ALIMENTO 2");
  console.log(objeto.alimentos[1].lis * yms);
  console.log("LISINA DISPONIVEL NO ALIMENTO 3 X QUANTIDADE DE PARTES DE ALIMENTO 3");
  console.log(objeto.alimentos[2].lis * zms);



  console.log("LISINA JÁ DISPONIVEL NOS 3 ALIMENTOS/INGREDIENTES");
  console.log(lisalimentos);
  console.log("LISINA QUE FALTA COMPLETAR");
  console.log(lisdemanda);

  console.log("QUANTIDADE DE L-LisHCl PARA COMPLETAR A LISINA QUE FALTA");

  console.log(lisracao); //RESPOSTA ENERGIA METABOLIZÁVEL 

  var metcistexigencia = objeto.animal.metcist; //EXIGENCIA DE MET+CIST DO ANIMAL
  var metcistalimentos = (objeto.alimentos[0].metcist * xms) + (objeto.alimentos[1].metcist * yms) + (objeto.alimentos[2].metcist * zms); // MET+CIST  JÁ DISPONIVEL NOS ALIMENTOS/INGREDIENTES
  var metcistdemanda = metcistexigencia - metcistalimentos;
  var metcistracao = 0;
  if (metcistdemanda > 0) {
    metcistracao = ((metcistdemanda) / alimentos.metioninacistina.metcist);
  }

  console.log("EXIGENCIA DE  MET+CIST ");
  console.log(metcistexigencia);

  console.log(" MET+CIST  DISPONIVEL NO ALIMENTO 1 ");
  console.log(objeto.alimentos[0].metcist);
  console.log(" MET+CIST  DISPONIVEL NO ALIMENTO 2 ");
  console.log(objeto.alimentos[1].metcist);
  console.log(" MET+CIST  DISPONIVEL NO ALIMENTO 3 ");
  console.log(objeto.alimentos[2].metcist);


  console.log(" MET+CIST  DISPONIVEL NO ALIMENTO 1 X QUANTIDADE DE PARTES DE ALIMENTO 1");
  console.log(objeto.alimentos[0].metcist * xms);
  console.log(" MET+CIST  DISPONIVEL NO ALIMENTO 2 X QUANTIDADE DE PARTES DE ALIMENTO 2");
  console.log(objeto.alimentos[1].metcist * yms);
  console.log(" MET+CIST  DISPONIVEL NO ALIMENTO 3 X QUANTIDADE DE PARTES DE ALIMENTO 3");
  console.log(objeto.alimentos[2].metcist * zms);



  console.log(" MET+CIST  JÁ DISPONIVEL NOS 3 ALIMENTOS/INGREDIENTES");
  console.log(metcistalimentos);
  console.log(" MET+CIST  QUE FALTA COMPLETAR");
  console.log(metcistdemanda);

  console.log("QUANTIDADE DE DL-Met PARA COMPLETAR A MET+CIST QUE FALTA");

  console.log(metcistracao); //RESPOSTA MET+CIST  EM KG

  var metexigencia = objeto.animal.met; //EXIGENCIA DE MET DO ANIMAL
  var metalimentos = (objeto.alimentos[0].met * xms) + (objeto.alimentos[1].met * yms) + (objeto.alimentos[2].met * zms) + (metcistracao * alimentos.metioninacistina.met); // MET  JÁ DISPONIVEL NOS ALIMENTOS/INGREDIENTES
  var metdemanda = metexigencia - metalimentos;
  var metracao = 0;
  if (metdemanda > 0) {
    metracao = ((metdemanda) / alimentos.metioninacistina.met);
  } 

  console.log("EXIGENCIA DE MET ");
  console.log(metexigencia);

  console.log(" MET DISPONIVEL NO ALIMENTO 1 ");
  console.log(objeto.alimentos[0].met);
  console.log(" MET DISPONIVEL NO ALIMENTO 2 ");
  console.log(objeto.alimentos[1].met);
  console.log(" MET DISPONIVEL NO ALIMENTO 3 ");
  console.log(objeto.alimentos[2].met);


  console.log(" MET DISPONIVEL NO ALIMENTO 1 X QUANTIDADE DE PARTES DE ALIMENTO 1");
  console.log(objeto.alimentos[0].met * xms);
  console.log(" MET DISPONIVEL NO ALIMENTO 2 X QUANTIDADE DE PARTES DE ALIMENTO 2");
  console.log(objeto.alimentos[1].met * yms);
  console.log(" MET DISPONIVEL NO ALIMENTO 3 X QUANTIDADE DE PARTES DE ALIMENTO 3");
  console.log(objeto.alimentos[2].met * zms);



  console.log(" MET JÁ DISPONIVEL NOS 3 ALIMENTOS/INGREDIENTES");
  console.log(metalimentos);
  console.log(" MET QUE FALTA COMPLETAR");
  console.log(metdemanda);

  console.log("QUANTIDADE DE DL-Met PARA COMPLETAR A MET QUE FALTA");

  console.log(metracao); //RESPOSTA MET  





  var tripexigencia = objeto.animal.trip; //EXIGENCIA DE TRIP DO ANIMAL
  var tripalimentos = (objeto.alimentos[0].trip * xms) + (objeto.alimentos[1].trip * yms) + (objeto.alimentos[2].trip * zms); // Treonina JÁ DISPONIVEL NOS ALIMENTOS/INGREDIENTES
  var tripdemanda = tripexigencia - tripalimentos;
  var tripracao = 0;
  if (tripdemanda > 0) {
    tripracao = ((tripdemanda) / alimentos.triptofano.trip);
  } 

  console.log("EXIGENCIA DE TRIP ");
  console.log(tripexigencia);

  console.log("TRIP NO ALIMENTO 1 ");
  console.log(objeto.alimentos[0].trip);
  console.log("TRIP NO ALIMENTO 2 ");
  console.log(objeto.alimentos[1].trip);
  console.log("TRIP NO ALIMENTO 3 ");
  console.log(objeto.alimentos[2].trip);


  console.log(" TRIP DISPONIVEL NO ALIMENTO 1 X QUANTIDADE DE PARTES DE ALIMENTO 1");
  console.log(objeto.alimentos[0].trip * xms);
  console.log(" TRIP DISPONIVEL NO ALIMENTO 2 X QUANTIDADE DE PARTES DE ALIMENTO 2");
  console.log(objeto.alimentos[1].trip * yms);
  console.log(" TRIP DISPONIVEL NO ALIMENTO 3 X QUANTIDADE DE PARTES DE ALIMENTO 3");
  console.log(objeto.alimentos[2].trip * zms);



  console.log(" TRIP JÁ DISPONIVEL NOS 3 ALIMENTOS/INGREDIENTES");
  console.log(tripalimentos);
  console.log(" TRIP QUE FALTA COMPLETAR");
  console.log(tripdemanda);

  console.log("QUANTIDADE DE L-Trip PARA COMPLETAR A TRIP QUE FALTA");

  console.log(tripracao); //RESPOSTA TRIP

  
  var treexigencia = objeto.animal.tre; //EXIGENCIA DE TREO DO ANIMAL
  var trealimentos = (objeto.alimentos[0].tre * xms) + (objeto.alimentos[1].tre * yms) + (objeto.alimentos[2].tre * zms); // Treonina JÁ DISPONIVEL NOS ALIMENTOS/INGREDIENTES
  var tredemanda = treexigencia - trealimentos;
  var treracao = 0;
  if (tredemanda > 0) {
    treracao = ((tredemanda) / alimentos.treonina.tre);
  } 

  console.log("EXIGENCIA DE Treonina Digestível ");
  console.log(treexigencia);

  console.log(" Treonina DISPONIVEL NO ALIMENTO 1 ");
  console.log(objeto.alimentos[0].tre);
  console.log(" Treonina DISPONIVEL NO ALIMENTO 2 ");
  console.log(objeto.alimentos[1].tre);
  console.log(" Treonina DISPONIVEL NO ALIMENTO 3 ");
  console.log(objeto.alimentos[2].tre);


  console.log(" Treonina DISPONIVEL NO ALIMENTO 1 X QUANTIDADE DE PARTES DE ALIMENTO 1");
  console.log(objeto.alimentos[0].tre * xms);
  console.log(" Treonina DISPONIVEL NO ALIMENTO 2 X QUANTIDADE DE PARTES DE ALIMENTO 2");
  console.log(objeto.alimentos[1].tre * yms);
  console.log(" Treonina DISPONIVEL NO ALIMENTO 3 X QUANTIDADE DE PARTES DE ALIMENTO 3");
  console.log(objeto.alimentos[2].tre * zms);



  console.log(" Treonina JÁ DISPONIVEL NOS 3 ALIMENTOS/INGREDIENTES");
  console.log(trealimentos);
  console.log(" Treonina QUE FALTA COMPLETAR");
  console.log(tredemanda);

  console.log("QUANTIDADE DE Treonina Digestível PARA COMPLETAR A Treonina QUE FALTA");

  console.log(treracao); //RESPOSTA TREO  




  
  var isolexigencia = objeto.animal.isol; //EXIGENCIA DE ISOLEUCINA DO ANIMAL
  var isolalimentos = (objeto.alimentos[0].isol * xms) + (objeto.alimentos[1].isol * yms) + (objeto.alimentos[2].isol * zms); // ISOLEUCINA JÁ DISPONIVEL NOS ALIMENTOS/INGREDIENTES
  var isoldemanda = isolexigencia - isolalimentos;
  var isolracao = 0;
  if (isoldemanda > 0) {
    isolracao = ((isoldemanda) / alimentos.isoleucina.isol);
  } 

  console.log("EXIGENCIA DE ISOLEUCINA ");
  console.log(isolexigencia);

  console.log(" ISOLEUCINA DISPONIVEL NO ALIMENTO 1 ");
  console.log(objeto.alimentos[0].isol);
  console.log(" ISOLEUCINA DISPONIVEL NO ALIMENTO 2 ");
  console.log(objeto.alimentos[1].isol);
  console.log(" ISOLEUCINA DISPONIVEL NO ALIMENTO 3 ");
  console.log(objeto.alimentos[2].isol);


  console.log(" ISOLEUCINA DISPONIVEL NO ALIMENTO 1 X QUANTIDADE DE PARTES DE ALIMENTO 1");
  console.log(objeto.alimentos[0].isol * xms);
  console.log(" ISOLEUCINA DISPONIVEL NO ALIMENTO 2 X QUANTIDADE DE PARTES DE ALIMENTO 2");
  console.log(objeto.alimentos[1].isol * yms);
  console.log(" ISOLEUCINA DISPONIVEL NO ALIMENTO 3 X QUANTIDADE DE PARTES DE ALIMENTO 3");
  console.log(objeto.alimentos[2].isol * zms);



  console.log(" ISOLEUCINA JÁ DISPONIVEL NOS 3 ALIMENTOS/INGREDIENTES");
  console.log(isolalimentos);
  console.log(" ISOLEUCINA QUE FALTA COMPLETAR");
  console.log(isoldemanda);

  console.log("QUANTIDADE DE L-Isol. PARA COMPLETAR A ISOLEUCINA QUE FALTA");

  console.log(isolracao); //RESPOSTA ISOLEUCINA  



}


function comboboxnivelpratico(elemento, alimento) {
  var quemchamou = localStorage.getItem('tipoanimal');
  var tipoanimal = exigencias[quemchamou].tipo;
  const alimentosselect = document.getElementById(elemento);
  var nivelpratico = [];

  for (i = 5; i >= 1; i--) {
    alimentosselect.options[i] = null;
  }
  if (alimento != 0) {
    if (tipoanimal == "ave") {
      var nivel = ((alimentos[alimento].nivelpraticoave) * 100 / 5);
    } else {
      var nivel = ((alimentos[alimento].nivelpraticosuino) * 100 / 5);
    }

    nivelpratico[1] = nivel;

    for (var count = 2; count < 6; count++) {
      nivelpratico[count] = nivel + nivelpratico[count - 1];
    }
    for (var count = 1; count < 6; count++) {
      option = new Option(nivelpratico[count].toFixed(2));
      alimentosselect.options[alimentosselect.options.length] = option;
    };

  }
}
