//ALIMENTOS
const alimentos = {
  capim: {
    nome: "Capim", 
    custo:0.13, //CUSTO BASEADO NA MATERIA SECA 
    ms: 0.15, 
    pb: 0.10, 
    fdn: 0.55, 
    ndt:0.60, 
    cnf: 0.25, 
    cinza:0.04, 
    oleo: 0.02, 
    ca: 0.30, 
    fosforo: 0.20,
  },
  capimelefante: {
    nome: "Capim Elefante", 
    custo:0.15, 
    ms:0.1996, 
    pb:0.0853, 
    fdn:0.7920, 
    ndt:0.5035, 
    cnf:0.1220, 
    cinza:0.0999, 
    oleo:0.0195, 
    ca:0.38, 
    fosforo:0.32,
  },
  carocodealgodao: {
    nome:"Caroço de Algodao", 
    custo:0, 
    ms:0.9064, 
    pb:0, 
    fdn:0, 
    ndt:0, 
    cnf:0, 
    cinza:0, 
    oleo:0, 
    ca:0, 
    fosforo:0,
  },
  cevada: {
    nome:"Cevada", 
    custo:0, 
    ms:0, 
    pb:0, 
    fdn:0, 
    ndt:0, 
    cnf:0, 
    cinza:0, 
    oleo:0, 
    ca:0, 
    fosforo:0,
  },
  farelodealgodao: {
    nome:"Farelo de Algodao", 
    custo:1.11, 
    ms:0.8974, 
    pb:0.3963, 
    fdn:0.3268, 
    ndt:0.6584, 
    cnf:0.1856, 
    cinza:0.0605, 
    oleo:0.0146, 
    ca:0.24, 
    fosforo:0.97,
  },
  farelodesoja :{
    nome:"Farelo de Soja", 
    custo:1.50, 
    ms:89.74, 
    pb:39.63, 
    fdn:32.68, 
    ndt:65.84, 
    cnf:18.56, 
    cinza:6.05, 
    oleo:1.46, 
    ca:0.24, 
    fosforo:0.97,
  },
  milho: {
    nome:"Milho", 
    custo:0.98, 
    ms:87.97, 
    pb:9.02, 
    fdn:13.06, 
    ndt:85.83, 
    cnf:72.25, 
    cinza:1.62, 
    oleo:4.02, 
    ca:0.03, 
    fosforo:0.026,
  },
  poupacitrica: {
    nome:"Poupa Cítrica", 
    custo:0.78, 
    ms:0.8959, 
    pb:0.0717, 
    fdn:0.2613, 
    ndt:0.7346, 
    cnf:0.6129, 
    cinza:0.0650, 
    oleo:0.0259, 
    ca:0.0184, 
    fosforo:0.10,
  },
  sal: {
    nome:"Sal", 
    custo:2.00, 
    ms:0.98, 
    pb:0, 
    fdn:0, 
    ndt:0, 
    cnf:0, 
    cinza:0, 
    oleo:0, 
    ca:0.24, 
    fosforo:0.0710,
  },
  soja: {
    nome:"Soja", 
    custo:0.03, 
    ms:0, 
    pb:0, 
    fdn:0, 
    ndt:0, 
    cnf:0, 
    cinza:0, 
    oleo:0, 
    ca:0, 
    fosforo:0,
  },
  silagemdemilho: {
    nome:"Silagem de Milho",
    custo:0.08,
    ms: 31.15, 
    pb: 7.18, 
    fdn: 53.98, 
    ndt:63.13, 
    cnf: 33.77, 
    cinza: 5.02,
    oleo: 2.79,
    ca: 0.28, 
    fosforo: 0.19,
  },
};


function objectAlimentos(){
  return this.alimentos;
}


//ANIMAIS
const exigencias = {
  bufalobezerro: {
    nome:"Bufalo Bezerro", 
    ims: 1.77,
    pb:0.1280, 
    exigenciaanimal:["pb","fdn"],
    fdn: 0.98, 
    ndt:0.85,
    mineral:0.0255,
    tiporestricao:{
      pb:"=",
      fdn:"<=",
    },
    tolerancia:0.05,
  },
  bufaloleitepreparto: {
    nome:"Bufala em pré-parto", 
    ims:0, 
    pb:0, 
    fdnf: 0, 
    ndt:0,
  },
  bufaloleitelactacao: {
    nome:"Bufala em Lactação", 
    ims:0, 
    pb:0, 
    fdnf: 0, 
    ndt:0,
  },
  bufaloleiteseca: {
    nome:"Bufala em Lactação", 
    ims:0, 
    pb:0, 
    fdnf: 0, 
    ndt:0,
  },
  bufalocorte: {
    nme:"Búfalo de Corte",
    ims:0, 
    pb:0, 
    fdnf: 0, 
    ndt:0,
  },
  bovinobezerro: {
    nome:"Bezerro", 
    ims:0, 
    pb:0, 
    fdnf: 0, 
    ndt:0,
  },
  bovinoleitepreparto: {
    nome:"Vaca Pré-Parto", 
    ims:0, 
    pb:0, 
    fdnf: 0, 
    ndt:0,
  },
  bovinoleitelactacao: {
    nome:"Vaca em Lactação", 
    ims:0, 
    pb:0, 
    fdnf: 0, 
    ndt:0,
  },
  bovinoleiteseca: {
    nome:"Vaca Seca", 
    ims:0, 
    pb:0, 
    fdnf: 0, 
    ndt:0,
  },
  bovinocorte: {
    nome:"Bovino de Corte", 
    ims:0, 
    pb:0, 
    fdnf: 0, 
    ndt:0,
  },
  cabrito: {
    nome:"Cabrito", 
    ims:0, 
    pb:0, 
    fdnf: 0, 
    ndt:0,
  },
  
  cabraleitepreparto: {
    nome:"Cabra Pré-Parto",
    ims:0,
    pb:0,
    fdnf: 0,
    ndt:0,
  },
  cabraleitelactacao: {
    nome:"Cabra em Lactação", 
    ims:0, 
    pb:0, 
    fdnf: 0, 
    ndt:0,
  },
  cabraleiteseca: {
    nome:"Cabra Seca", 
    ims:0, 
    pb:0, 
    fdnf: 0, 
    ndt:0,
  },
  carneirocorte: {
    nome:"Carneiro de Corte", 
    ims: 1.77,
    pb:0.1280, 
    exigenciaanimal:["pb","fdn"],
    fdn: 1.15, 
    ndt:0.94,
    mineral:0.025,
    tiporestricao:{
      pb:"=",
      fdn:"<=",
    },
    tolerancia:0.05,
  },
  cordeiro: {
    nome:"Cordeiro", 
    ims:0, 
    pb:0, 
    fdnf: 0, 
    ndt:0,
  },
  ovelhaleitepreparto: {
    nome:"Ovelha Pré-Parto", 
    ims:0, 
    pb:0, 
    fdnf: 0, 
    ndt:0,
  },
  ovelhaleitelactacao: {
    nome:"Ovelha Lactação", 
    ims:0, 
    pb:0, 
    fdnf: 0, 
    ndt:0,
  },
  ovelhaleiteseca: {
    nome:"Ovelha Seca", 
    ims:0, 
    pb:0, 
    fdnf: 0, 
    ndt:0,
  },
  ovinocorte: {
    nome:"Ovino Corte", 
    ims:0, 
    pb:0, 
    fdnf: 0, 
    ndt:0,
  }, 
  leitao: {
    nome:"Leitão", 
    ims:0, 
    pb:0, 
    fdnf: 0, 
    ndt:0,
  },
  matrizgestacao: {
    nome:"Matriz Gestação", 
    ims:0, 
    pb:0, 
    fdnf: 0, 
    ndt:0,
  },
  matrizlactacao: {
    nome:"Matriz Lactação", 
    ims:0, 
    pb:0, 
    fdnf: 0, 
    ndt:0,
  },
  matrizmantenca: {
    nome:"Matriz Mantença", 
    ims:0, 
    pb:0, 
    fdnf: 0, 
    ndt:0,
  },
  suinoterminacao: {
    nome:"Suino Terminação", 
    ims:0, 
    pb:0, 
    fdnf: 0, 
    ndt:0,
  },
  pintinho: {
    nome:"Codorna Pintinho", 
    ims:0, 
    pb:0, 
    fdnf: 0, 
    ndt:0,
  },
  codorna: {
    nome:"Codorna", 
    ims:0, 
    pb:0, 
    fdnf: 0, 
    ndt:0,
  },
};

function objectExigencias(){
  return this.exigencias;
}

//bufalobezerro
//bufaloleitepreparto
//bufaloleitelactacao
//bufalocorte

//bovinobezerro
//bovinoleitepreparto
//bovinoleitelactacao
//bovinocorte

//cabrito
//cabraleitepreparto
//cabraleitelactacao
//caprinocorte

//cordeiro
//ovelhaleitepreparto
//ovelhaleitelactacao
//ovinocorte

//leitao
//matrizgestacao
//matrizlactacao
//terminacao

//pintinho
//codorna
