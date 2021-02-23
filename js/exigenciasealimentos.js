//ALIMENTOS
const alimentos = {
  canadeacucar: {
    nome: "Cana de Açúcar",
    custo: 0.31, //CUSTO BASEADO NA MATERIA SECA 
    ms: 0.2886,
    pb: 0.280,
    fdn: 0.5351,
    ndt: 0.6280,
    cnf: 0.4361,
    cinza: 0.0314,
    oleo: 0.0153,
    ca: 0.0024,
    fosforo: 0.0008,
    nivelpratico: {
      bufalobezerro: "",
      bufaloleitepreparto: "",
      bufaloleitelactacao: "",
      bufalocorte: "",

      bovinobezerro: "",
      bovinoleitepreparto: "",
      bovinoleitelactacao: "",
      bovinocorte: "",

      cabrito: "",
      cabraleitepreparto: "",
      cabraleitelactacao: "",
      caprinocorte: "0.3",

      cordeiro: "",
      ovelhaleitepreparto: "",
      ovelhaleitelactacao: "",
      ovinocorte: "",

      leitao: "",
      matrizgestacao: "",
      matrizlactacao: "",
      terminacao: "",

      pintinho: "",
      codorna: "",
    },
  },
  canadeacucarbagaco: {
    nome: "Cana de Acúcar BAGAÇO",
    custo: 0.10,
    ms: 0.5717,
    pb: 0.0214,
    fdn: 0.8522,
    ndt: 0.4289,
    cnf: 0.0675,
    cinza: 0.0430,
    oleo: 0.0119,
    ca: 0.0021,
    fosforo: 0.0006,
  },
  capim: {
    nome: "Capim",
    custo: 0.13, //CUSTO BASEADO NA MATERIA SECA 
    ms: 0.15,
    pb: 0.10,
    fdn: 0.55,
    ndt: 0.60,
    cnf: 0.25,
    cinza: 0.04,
    oleo: 0.02,
    ca: 0.0030,
    fosforo: 0.0020,
  },
  capimbraquiariabrizantha: {
    nome: "Capim Brachiaria Brizantha",
    custo: 0.09,
    ms: 0.3409,
    pb: 0.0691,
    fdn: 0.7057,
    ndt: 0.5102,
    cnf: 0.1493,
    cinza: 0.0704,
    oleo: 0.0196,
    ca: 0.0031,
    fosforo: 0.0011,
  },
  capimelefante: {
    nome: "Capim Elefante",
    custo: 0.15,
    ms: 0.1996,
    pb: 0.0853,
    fdn: 0.7920,
    ndt: 0.5035,
    cnf: 0.1220,
    cinza: 0.0999,
    oleo: 0.0195,
    ca: 0.0038,
    fosforo: 0.0032,
  },
  capimtifton: {
    nome: "Capim Tífton",
    custo: 0.11,
    ms: 0.1842,
    pb: 0.0951,
    fdn: 0.7253,
    ndt: 0,
    cnf: 0,
    cinza: 0.1038,
    oleo: 0,
    ca: 0.0025,
    fosforo: 0.0022,
  },
  carocodealgodao: {
    nome: "Caroço de Algodão",
    custo: 1.58,
    ms: 0.9064,
    pb: 0.2314,
    fdn: 0.4604,
    ndt: 0.8146,
    cnf: 0.1081,
    cinza: 0.0436,
    oleo: 0.1924,
    ca: 0.0027,
    fosforo: 0.0075,
  },
  cascadesoja: {
    nome: "Casca de Soja",
    custo: 0.13,
    ms: 0.9010,
    pb: 0.1259,
    fdn: 0.6645,
    ndt: 0.6858,
    cnf: 0.1601,
    cinza: 0.515,
    oleo: 0.0223,
    ca: 0.0052,
    fosforo: 0.0016,
  },
  farelodealgodao: {
    nome: "Farelo de Algodao",
    custo: 1.45,
    ms: 0.8974,
    pb: 0.3963,
    fdn: 0.3268,
    ndt: 0.6584,
    cnf: 0.1856,
    cinza: 0.0605,
    oleo: 0.0146,
    ca: 0.0024,
    fosforo: 0.0097,
  },
  farelodeamendoim: {
    nome: "Farelo de Amendoim",
    custo: 1.57,
    ms: 0.8941,
    pb: 0.5674,
    fdn: 0.1308,
    ndt: 0,
    cnf: 0.3162,
    cinza: 0.0506,
    oleo: 0.0128,
    ca: 0.0018,
    fosforo: 0.0062,
  },
  farelodebiscoito: {
    nome: "Farelo de Biscoito",
    custo: 0.68,
    ms: 0.9085,
    pb: 0.0893,
    fdn: 0.0570,
    ndt: 0.8960,
    cnf: 0.6420,
    cinza: 0,
    oleo: 0.1740,
    ca: 0,
    fosforo: 0,
  },
  farelodesoja: {
    nome: "Farelo de Soja",
    custo: 0.95,
    ms: 0.8864,
    pb: 0.4879,
    fdn: 0.1478,
    ndt: 0.8116,
    cnf: 0.2756,
    cinza: 0.0648,
    oleo: 0.0194,
    ca: 0.0034,
    fosforo: 0.0059,
  },
  farelodetrigo: {
    nome: "Farelo de Trigo",
    custo: 1.68,
    ms: 0.8764,
    pb: 0.1668,
    fdn: 0.4222,
    ndt: 0.7093,
    cnf: 0.3270,
    cinza: 0.0559,
    oleo: 0.0356,
    ca: 0.0017,
    fosforo: 0.0101,
  },
  fenocapimbraquiariabrizantha: {
    nome: "Feno Capim Brizantha",
    custo: 0.40,
    ms: 0.8799,
    pb: 0.0419,
    fdn: 0.8030,
    ndt: 0.4030,
    cnf: 0.1036,
    cinza: 0.0527,
    oleo: 0.0122,
    ca: 0.0033,
    fosforo: 0.0011,
  },
  fenocapimalfafa: {
    nome: "Feno Capim Alfafa",
    custo: 1.35,
    ms: 0.8764,
    pb: 0.1765,
    fdn: 0.6144,
    ndt: 0,
    cnf: 0,
    cinza: 0.0672,
    oleo: 0,
    ca: 0.0074,
    fosforo: 0.0025,
  },
  fenocapimtifton: {
    nome: "Feno Capim Tífton",
    custo: 0.67,
    ms: 0.8952,
    pb: 0.0910,
    fdn: 0.7759,
    ndt: 0.5241,
    cnf: 0.0736,
    cinza: 0.0711,
    oleo: 0.0182,
    ca: 0.0048,
    fosforo: 0.0018,
  },
  leiteempo: {
    nome: "Leite em Pó",
    custo: 3.70,
    ms: 0.9466,
    pb: 0.2577,
    fdn: 0.0024,
    ndt: 0,
    cnf: 0,
    cinza: 0.0589,
    oleo: 0.2641,
    ca: 0.0092,
    fosforo: 0.0063,
  },
  leitesoroempo: {
    nome: "Leite SORO em Pó",
    custo: 3.30,
    ms: 0.9684,
    pb: 0.1086,
    fdn: 0,
    ndt: 0,
    cnf: 0,
    cinza: 0.0914,
    oleo: 0.0144,
    ca: 0.0039,
    fosforo: 0.0056,
  },
  melaco: {
    nome: "Melaço",
    custo: 1.59,
    ms: 0.7547,
    pb: 0.0350,
    fdn: 0.0007,
    ndt: 0.6962,
    cnf: 0.7332,
    cinza: 0.0913,
    oleo: 0.0144,
    ca: 0.0082,
    fosforo: 0.0007,
  },
  milhofuba: {
    nome: "Milho Fubá",
    custo: 0.66,
    ms: 0.8796,
    pb: 0.0901,
    fdn: 0.1305,
    ndt: 0.8611,
    cnf: 0.7232,
    cinza: 0.0162,
    oleo: 0.0402,
    ca: 0.003,
    fosforo: 0.0026,
  },
  milhopalhaesabugo: {
    nome: "Palha e Sabugo de Milho",
    custo: 0.13,
    ms: 0.9014,
    pb: 0.0290,
    fdn: 0.9610,
    ndt: 0,
    cnf: 0,
    cinza: 0.0135,
    oleo: 0,
    ca: 0.0015,
    fosforo: 0.0009,
  },
  polpacitrica: {
    nome: "Polpa Cítrica",
    custo: 0.78,
    ms: 0.8959,
    pb: 0.0717,
    fdn: 0.2613,
    ndt: 0.7346,
    cnf: 0.6129,
    cinza: 0.0650,
    oleo: 0.0259,
    ca: 0.0184,
    fosforo: 0.0010,
    nivelpratico: 0,
  },
  residuodecervejaria: {
    nome: "Resíduo de Cervejaria (Cevada)",
    custo: 0.57,
    ms: 0.2640,
    pb: 0.3345,
    fdn: 0.3310,
    ndt: 0.5800,
    cnf: 0.1920,
    cinza: 0,
    oleo: 0.0920,
    ca: 0,
    fosforo: 0,
  },
  residuodecervejariaumido: {
    nome: "Resíduo de Cervejaria (Úmido)",
    custo: 0.67,
    ms: 0.2228,
    pb: 0.2559,
    fdn: 0.5813,
    ndt: 0.7612,
    cnf: 0.1764,
    cinza: 0.570,
    oleo: 0.0632,
    ca: 0.0033,
    fosforo: 0.0078,
  },
  residuoumidodedestilaria: {
    nome: "Residuo Úmido de Destilaria, Milho WDG",
    custo: 0.53,
    ms: 0.3180,
    pb: 0.3200,
    fdn: 0.4817,
    ndt: 0.9300,
    cnf: 0.1600,
    cinza: 0.0517,
    oleo: 0.0667,
    ca: 0.0005,
    fosforo: 0.0035,
  },
  silagemcana: {
    nome: "Silagem Cana de Açúcar",
    custo: 0.23,
    ms: 0.2568,
    pb: 0.0347,
    fdn: 0.6639,
    ndt: 0.5423,
    cnf: 0.2448,
    cinza: 0.0405,
    oleo: 0.0170,
    ca: 0.0030,
    fosforo: 0.0005,
  },
  silagemcapimmarandu: {
    nome: "Silagem Capim Marandu",
    custo: 0.28,
    ms: 0.2127,
    pb: 0.0491,
    fdn: 0.8174,
    ndt: 0,
    cnf: 0,
    cinza: 0,
    oleo: 0,
    ca: 0,
    fosforo: 0,
  },
  silagemcapimcapiacu: {
    nome: "Silagem Capim Capiaçu",
    custo: 0.33,
    ms: 0.1800,
    pb: 0.0530,
    fdn: 0.7220,
    ndt: 0.4680,
    cnf: 0,
    cinza: 0,
    oleo: 0.0260,
    ca: 0.0004,
    fosforo: 0.0001,
  },
  silagemcapimnapier: {
    nome: "Silagem Capim Napier",
    custo: 0.26,
    ms: 0.2349,
    pb: 0.0503,
    fdn: 0.7606,
    ndt: 0.4874,
    cnf: 0,
    cinza: 0.0959,
    oleo: 0.0220,
    ca: 0.0038,
    fosforo: 0.0008,
  },
  silagemmilho: {
    nome: "Silagem de Milho",
    custo: 0.09,
    ms: 0.3117,
    pb: 0.0718,
    fdn: 0.5398,
    ndt: 0.6384,
    cnf: 0.3366,
    cinza: 0.0501,
    oleo: 0.0286,
    ca: 0.0028,
    fosforo: 0.0019,
  },
  silagemmilhoreidratado: {
    nome: "Silagem de Milho Grão Reidratado",
    custo: 0.15,
    ms: 0.6576,
    pb: 0.0931,
    fdn: 0.0805,
    ndt: 0,
    cnf: 0.7629,
    cinza: 0.0137,
    oleo: 0.0467,
    ca: 0,
    fosforo: 0,
  },
  silagemresiduocervejaria: {
    nome: "Silagem Resíduo de Cervejaria",
    custo: 0.63,
    ms: 0.2540,
    pb: 0.2433,
    fdn: 0.5972,
    ndt: 0,
    cnf: 0,
    cinza: 0.0550,
    oleo: 0,
    ca: 0,
    fosforo: 0,
  },
  silagemsorgo: {
    nome: "Silagem Sorgo",
    custo: 0.40,
    ms: 0.2971,
    pb: 0.0646,
    fdn: 0.5794,
    ndt: 0.5872,
    cnf: 0.2384,
    cinza: 0.0603,
    oleo: 0.0255,
    ca: 0.0033,
    fosforo: 0.0019,
  },
  sojagrao: {
    nome: "Soja Grão",
    custo: 2.75,
    ms: 0.9092,
    pb: 0.3847,
    fdn: 0.1963,
    ndt: 0.9053,
    cnf: 0.2512,
    cinza: 0.0509,
    oleo: 0.1891,
    ca: 0.0032,
    fosforo: 0.0053,
  },
  sal: {
    nome: "Sal",
    custo: 1.33,
    ms: 0.98,
    pb: 0,
    fdn: 0,
    ndt: 0,
    cnf: 0,
    cinza: 0.9465,
    oleo: 0,
    ca: 0.000025,
    fosforo: 0.0030,
  },
  ureia: {
    nome: "Uréia",
    custo: 1.00,
    ms: 0.9788,
    pb: 2.8192,
    fdn: 0,
    ndt: 0,
    cnf: 0,
    cinza: 0.0021,
    oleo: 0,
    ca: 0,
    fosforo: 0,
  },
};


function objectAlimentos() {
  return this.alimentos;
}


//ANIMAIS
const exigencias = {
  bufalobezerro: {
    nome: "Bufalo Bezerro",
    ims: 1.77,
    pb: 0.1280,
    exigenciaanimal: ["pb", "fdn"],
    fdn: 0.98,
    ndt: 0.85,
    mineral: 0.0255,
    tiporestricao: {
      pb: "=",
      fdn: "<=",
    },
    tolerancia: 0.05,
  },
  bufaloleitepreparto: {
    nome: "Bufala em pré-parto",
    ims: 0,
    pb: 0,
    fdnf: 0,
    ndt: 0,
  },
  bufaloleitelactacao: {
    nome: "Bufala em Lactação",
    ims: 0,
    pb: 0,
    fdnf: 0,
    ndt: 0,
  },
  bufaloleiteseca: {
    nome: "Bufala em Lactação",
    ims: 0,
    pb: 0,
    fdnf: 0,
    ndt: 0,
  },
  bufalocorte: {
    nome: "Búfalo de Corte",
    ims: 0,
    pb: 0,
    fdnf: 0,
    ndt: 0,
  },
  bovinobezerro: {
    nome: "Bezerro",
    ims: 0,
    pb: 0,
    fdnf: 0,
    ndt: 0,
  },
  bovinoleitepreparto: {
    nome: "Vaca Pré-Parto",
    ims: 0,
    pb: 0,
    fdnf: 0,
    ndt: 0,
  },
  bovinoleitelactacao: {
    nome: "Vaca em Lactação",
    ims: 0,
    pb: 0,
    fdnf: 0,
    ndt: 0,
  },
  bovinoleiteseca: {
    nome: "Vaca Seca",
    ims: 0,
    pb: 0,
    fdnf: 0,
    ndt: 0,
  },
  bovinocorte: {
    nome: "Bovino de Corte",
    ims: 0,
    pb: 0,
    fdnf: 0,
    ndt: 0,
  },





  cabrito: {
    nome: "Cabrito",
    peso: 25,
    ims: 0.80,
    exigenciaanimal: ["ims", "pb", "fdn"],
    pb: 0.17125,
    fdn: ((25 * 1.15) / 100), //1.15 = ingestão de FDN de forragem, pré determinado professor Rafael
    ndt: 0.70,
    sal: 0.025,
    ureia: (0.01 * 0.80), //1% da IMS
    tiporestricao: {
      ims: "=",
      pb: "=",
      fdn: "="
    },
    tolerancia: 0.15,
  },

  cabraleitepreparto: {
    nome: "Cabra Pré-Parto",
    peso: 50,
    ims: 2.70,
    exigenciaanimal: ["ims", "pb", "fdn"],
    pb: 0.72774,
    fdn: ((50 * 1.15) / 100), //1.15 = ingestão de FDN de forragem, pré determinado professor Rafael
    ndt: 1.43,
    sal: 0.025,
    ureia: (0.01 * 2.70), //1% da IMS
    tiporestricao: {
      ims: "=",
      pb: "=",
      fdn: "="
    },
    tolerancia: 0.15,
  },
  cabraleitelactacao: {
    nome: "Cabra em Lactação",
    peso: 50,
    ims: 1.85,
    exigenciaanimal: ["ims", "pb", "fdn"],
    pb: 0.109729,
    fdn: ((50 * 1.15) / 100), //1.15 = ingestão de FDN de forragem, pré determinado professor Rafael
    ndt: 1.23,
    sal: 0.025,
    ureia: (0.01 * 1.85), //1% da IMS
    tiporestricao: {
      ims: "=",
      pb: "=",
      fdn: "="
    },
    tolerancia: 0.15,
  },

  cabraleiteseca: {
    nome: "Cabra Seca",
    peso: 50,
    ims: 1.85,
    exigenciaanimal: ["ims", "pb", "fdn"],
    pb: 0.109729,
    fdn: ((50 * 1.15) / 100), //1.15 = ingestão de FDN de forragem, pré determinado professor Rafael
    ndt: 1.23,
    sal: 0.025,
    ureia: (0.01 * 1.85), //1% da IMS
    tiporestricao: {
      ims: "=",
      pb: "=",
      fdn: "="
    },
    tolerancia: 0.15,
  },
  bodeleite: {
    nome: "Bode Reprodutor Leite",
    peso: 100,
    ims: 2.28,
    exigenciaanimal: ["ims", "pb", "fdn"],
    pb: 0.3615789,
    fdn: ((100 * 1.15) / 100), //1.15 = ingestão de FDN de forragem, pré determinado professor Rafael
    ndt: 1.21,
    sal: 0.025,
    ureia: (0.01 * 2.28), //1% da IMS
    tiporestricao: {
      ims: "=",
      pb: "=",
      fdn: "="
    },
    tolerancia: 0.15,
  },






  cordeiro: {
    nome: "Cordeiro",
    peso: 20,
    ims: 0.61,
    exigenciaanimal: ["ims", "pb", "fdn"],
    pb: 0.2540,
    fdn: ((20 * 1.15) / 100), //1.15 = ingestão de FDN de forragem, pré determinado professor Rafael
    ndt: 0.48,
    sal: 0.025,
    ureia: (0.01 * 0.61), //1% da IMS
    tiporestricao: {
      ims: "=",
      pb: "=",
      fdn: "="
    },
    tolerancia: 0.15,
  },
  ovelhaleitepreparto: {
    nome: "Ovelha Pré-Parto",
    peso: 50,
    ims: 1.75,
    exigenciaanimal: ["ims", "pb", "fdn"],
    pb: 0.121714,
    fdn: ((50 * 1.15) / 100), //1.15 = ingestão de FDN de forragem, pré determinado professor Rafael
    ndt: 0.93,
    sal: 0.025,
    ureia: (0.01 * 1.75), //1% da IMS
    tiporestricao: {
      ims: "=",
      pb: "=",
      fdn: "="
    },
    tolerancia: 0.15,
  },
  ovelhaleitelactacao: {
    nome: "Ovelha Lactação",
    peso: 50,
    ims: 1.72,
    exigenciaanimal: ["ims", "pb", "fdn"],
    pb: 0.11162,
    fdn: ((50 * 1.15) / 100), //1.15 = ingestão de FDN de forragem, pré determinado professor Rafael
    ndt: 0.91,
    sal: 0.025,
    ureia: (0.01 * 1.72), //1% da IMS
    tiporestricao: {
      ims: "=",
      pb: "=",
      fdn: "="
    },
    tolerancia: 0.15,
  },
  ovelhaleiteseca: {
    nome: "Ovelha Seca",
    peso: 50,
    ims: 0.91,
    exigenciaanimal: ["ims", "pb", "fdn"],
    pb: 0.7582,
    fdn: ((50 * 1.15) / 100), //1.15 = ingestão de FDN de forragem, pré determinado professor Rafael
    ndt: 0.49,
    sal: 0.025,
    ureia: (0.01 * 0.91), //1% da IMS
    tiporestricao: {
      ims: "=",
      pb: "=",
      fdn: "="
    },
    tolerancia: 0.15,
  },
  carneiroleite: {
    nome: "Carneiro Reprodutor Leite",
    peso: 125,
    ims: 2.30,
    exigenciaanimal: ["ims", "pb", "fdn"],
    pb: 0.70869,
    fdn: ((125 * 1.15) / 100), //1.15 = ingestão de FDN de forragem, pré determinado professor Rafael
    ndt: 1.22,
    sal: 0.025,
    ureia: (0.01 * 2.30), //1% da IMS
    tiporestricao: {
      ims: "=",
      pb: "=",
      fdn: "="
    },
    tolerancia: 0.15,
  },


  leitao: {
    nome: "Leitão",
    ims: 0,
    pb: 0,
    fdnf: 0,
    ndt: 0,
  },
  matrizgestacao: {
    nome: "Matriz Gestação",
    ims: 0,
    pb: 0,
    fdnf: 0,
    ndt: 0,
  },
  matrizlactacao: {
    nome: "Matriz Lactação",
    ims: 0,
    pb: 0,
    fdnf: 0,
    ndt: 0,
  },
  matrizmantenca: {
    nome: "Matriz Mantença",
    ims: 0,
    pb: 0,
    fdnf: 0,
    ndt: 0,
  },
  suinoterminacao: {
    nome: "Suino Terminação",
    ims: 0,
    pb: 0,
    fdnf: 0,
    ndt: 0,
  },
  galinha: {
    nome: "Galinha Poedeira",
    ims: 0,
    pb: 0,
    fdnf: 0,
    ndt: 0,
  },
  codorna: {
    nome: "Codorna",
    ims: 0,
    pb: 0,
    fdnf: 0,
    ndt: 0,
  },
};

function objectExigencias() {
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
