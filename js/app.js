function formatamoeda(numero) {
  return numero.toFixed(2).replace(".", ",")
}

//FUNÇÃO PARA PEGAR DADOS USUÁRIO
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

  if (energia1 != 0) {
    if (preco1) {
      alimentos[energia1].custo = parseFloat(preco1); //COMO SETAR O NOVO VALOR NO OBJETO
    }
    var alimentocomposicao1 = alimentos[energia1];
  }
  if (energia2 != 0) {
    if (preco2) {
      alimentos[energia2].custo = parseFloat(preco2);
    }
    var alimentocomposicao2 = alimentos[energia2];
  }
  if (proteina1 != 0) {
    if (preco3) {
      alimentos[proteina1].custo = parseFloat(preco3);
    }
    var alimentocomposicao3 = alimentos[proteina1];
  }
  if (proteina2 != 0) {
    if (preco4) {
      alimentos[proteina2].custo = parseFloat(preco4);
    }
    var alimentocomposicao4 = alimentos[proteina2];
  }

  if (!porcentopb) {
    porcentopb = 18;
  }
  if (!numrebanho) {
    numrebanho = 1;
  }
  var elemento = [alimentocomposicao1, alimentocomposicao2, alimentocomposicao3, alimentocomposicao4, porcentopb, numrebanho];
  //console.log(elemento);
  return elemento;
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

function tipoanimal(codigo){
  // alert(codigo);
  // return codigo;
  localStorage.setItem('tipoanimal',codigo);
}

