const season0 = [
  //
  ['05/28/19', [148, 110, 830, 276, 734]],
  ['05/29/19', [2, 20, 26, 88, 104]],
  ['05/30/19', [3, 121, 122, 136, 155]],
  ['05/31/19', [11, 167, 169, 172, 190]],
  ['06/01/19', [15, 191, 198, 203, 206]],
];

const season1 = [
  //
  ['06/02/19', [219, 226]],
  ['06/03/19', [263, 283]],
  ['06/04/19', [342, 349]],
  ['06/05/19', [371, 575]],
  ['06/06/19', [617, 461]],
  ['06/07/19', [5, 28]],
  ['06/08/19', [21, 104]],
  ['06/09/19', [121, 448]],
  ['06/10/19', [437, 538]],
  ['06/11/19', [31]],
  ['06/12/19', [234, 581]],
  ['06/13/19', [69, 172]],
  ['06/14/19', [70, 151]],
  ['06/15/19', [289, 160]],
];

const myProgressSeason1 = [
  //
  {
    date: '05/28/19',
    list: ['05/28/19', [148, 110, 830, 276, 734]],
    res: [[206, ['48 ms', '99.39 %', '34.9 MB', '73.12 %']]],
  },
  {
    date: '06/02/19',
    list: ['06/02/19', [219, 226]],
    res: [
      [226, ['48 ms', '97.41 %', '33.9 MB', '30.11 %']],
      [219, ['80 ms', '46.32 %', '40 MB', '71.74 %']],
      [220, ['216 ms', '75.34 %', '35.5 MB', '30.18 %']],
      [223, ['124 ms', '92.76 %', '41.6 MB', '85.19 %']],
    ],
  },
  {
    date: '06/03/19',
    list: ['06/03/19', [263, 283]],
    res: [
      [263, ['48 ms', '100.00 %', '35.5 MB', '73.11 %']],
      [283, ['56 ms', '97.80 %', '35.8 MB', '38.40 %']],
    ],
  },
  {
    date: '06/04/19',
    list: ['06/04/19', [342, 349]],
    res: [
      [342, ['72 ms', '85.37 %', '35.5 MB', '73.23 %']],
      [349, ['52 ms', '96.70 %', '34.1 MB', '83.98 %']],
    ],
  },
  {
    date: '06/06/19',
    list: ['06/05/19', [371, 575]],
    res: [
      [575, ['120 ms', '96.48 %', '43.6 MB', '80.19 %']],
      [371, ['60 ms', '27.62 %', '33.7 MB', '86.91 %']],
    ],
  },
  {
    date: '06/06/19',
    list: ['06/06/19', [617, 461]],
    res: [
      [617, ['92 ms', '83.60 %', '40 MB', '96.06 %']],
      [461, ['52 ms', '92.63 %', '34 MB', '21.29 %']],
    ],
  },
  {
    date: '06/08/19',
    list: ['06/07/19', [5, 28]],
    res: [
      [28, ['72 ms', '30.36 %', '35 MB', '46.55 %']],
      [5, ['88 ms', '74.46 %', '35.8 MB', '77.75 %']],
    ],
  },
  {
    date: '06/08/19',
    list: ['06/08/19', [21, 104]],
    res: [
      [36, ['80 ms', '82.08 %', '37.1 MB', '99.41 %']],
      [37, ['112 ms', '46.29 %', '37.8 MB', '38.93 %']],
      [104, ['60 ms', '91.30 %', '36.8 MB', '92.03 %']],
      [21, ['68 ms', '79.15 %', '35.5 MB', '60.61 %']],
    ],
  },
  {
    date: '06/09/19',
    list: ['06/09/19', [121, 448]],
    res: [
      [448, ['96 ms', '96.52 %', '43.8 MB', '75.51 %']],
      [121, ['56 ms', '95.50 %', '35.6 MB', '22.79 %']],
    ],
  },
  {
    date: '06/11/19',
    list: ['06/10/19', [437, 538]],
    res: [
      [538, ['80 ms', '96.63 %', '39.7 MB', '99.60 %']],
      [112, ['60 ms', '95.32 %', '37.3 MB', '49.22 %']],
      [113, ['72 ms', '89.63 %', '38.1 MB', '54.62 %']],
    ],
  },
  {
    date: '06/12/19',
    list: ['06/11/19', [31]],
    res: [
      [437, ['88 ms', '68.12 %', '36.6 MB', '99.27 %']],
      [31, ['60 ms', '96.52 %', '35 MB', '41.43 %']],
      [51, ['60 ms', '98.79 %', '36.4 MB', '88.50 %']],
      [52, ['64 ms', '67.03 %', '34.3 MB', '85.86 %']],
    ],
  },
  {
    date: '06/13/19',
    list: ['06/12/19', [234, 581]],
    res: [
      [234, ['64 ms', '87.77 %', '39.3 MB', '92.13 %']],
      [581, ['68 ms', '94.22 %', '36.6 MB', '96.93 %']],
    ],
  },
  {
    date: '06/13/19',
    list: ['06/13/19', [69, 172]],
    res: [
      [69, ['68 ms', '95.68 %', '35.8 MB', '25.69 %']],
      [172, ['52 ms', '98.28 %', '34 MB', '68.15 %']],
    ],
  },
  {
    date: '06/14/19',
    list: ['06/14/19', [70, 151]],
    res: [
      [70, ['44 ms', '98.96 %', '33.7 MB', '92.74 %']],
      [151, ['56 ms', '89 %', '34.8 MB', '56.38 %']],
    ],
  },
  {
    date: '06/16/19',
    list: ['06/15/19', [289, 160]],
    res: [
      [289, ['52 ms', '96.3 %', '33.7 MB', '94.64 %']],
      [160, ['76 ms', '98.58 %', '42.6 MB', '96.97 %']],
      [104, ['56 ms', '96.21 %', '37 MB', '48.15 %']],
    ],
  },
];

const myProgress2 = [
  //
  {
    date: '06/16/19',
    card: 'array-and-string',
    res: [
      [724, ['72 ms', '92.04 %', '37.6 MB', '68.16 %']],
      [747, ['52 ms', '94.52 %', '33.9 MB', '40 %']],
      [66, ['48 ms', '98.1 %', '33.9 MB', '23.27 %']],
      [498, ['88 ms', '91.38 %', '42.2 MB', '74.82 %']],
      [54, ['40 ms', '99.86 %', '33.8 MB', '40.15 %']],
      [59, ['52 ms', '92.84 %', '33.9 MB', '37.5 %']],
      [118, ['52 ms', '88.56 %', '33.9 MB', '32.64 %']],
      [119, ['52 ms', '90.9 %', '33.9 MB', '52.55 %']],
    ],
  },
  {
    date: '06/17/19',
    card: 'array-and-string',
    res: [
      [67, ['68 ms', '77.74 %', '35.6 MB', '77.54 %']],
      [28],
      [14, ['60 ms', '80.58 %', '34.8 MB', '69.43 %']],
    ],
  },
  {
    date: '06/18/19',
    card: 'array-and-string',
    res: [
      [344, ['104 ms', '98.39 %', '46.9 MB', '33.19 %']],
      [561, ['120 ms', '71.05 %', '38.9 MB', '82.46 %']],
      [167, ['48 ms', '98.71 %', '35.3 MB', '30.62 %']],
      [27, ['52 ms', '92.49 %', '33.6 MB', '98.62 %']],
      [485, ['64 ms', '90.45 %', '37 MB', '47.14 %']],
      [209, ['60 ms', '81.95 %', '35.5 MB', '71.47 %']],
    ],
  },
  {
    date: '06/18/19',
    card: 'array-and-string',
    res: [
      [189, ['68 ms', '87.19 %', '35.4 MB', '37.3 %']],
      [119],
      [151],
      [557, ['64 ms', '99.01 %', '41.9 MB', '80.95 %']],
      [26, ['68 ms', '92.59 %', '36.7 MB', '99.17 %']],
      [283],
      [80, ['68 ms', '84.38 %', '35.4 MB', '100 %']],
      [83, ['68 ms', '80.78 %', '35.7 MB', '50.13 %']],
      [82, ['60 ms', '91.86 %', '35.7 MB', '83.87 %']],
    ],
  },
];

const myProgress3 = [
  //
  {
    data: '07/11/19',
    cate: 'greedy',
    res: [
      [455, ['80 ms', '93.64 %', '37.1 MB', '98.55 %']],
      [435, ['68 ms', '77.71 %', '36.2 MB', '41.67 %']],
      [134, ['52 ms', '94.79 %', '33.8 MB', '93.01 %']],
      [122, ['56 ms', '86.65 %', '35.4 MB', '44.89 %']],
    ],
  },
];

// 1 ['56 ms', '98.41 %', '35 MB', '42.45 %']
// 20 ['56 ms', '84.27 %', '34 MB', '57.31 %']

import { parseAccepted } from '../helper/parse-accepted';

const queueAndStack = [
  //
  [622, ['100 ms', '86.04 %', '41.3 MB', '86.56 %']],
  [200, ['56 ms', '97.43 %', '37.6 MB', '41.94 %']],
  [752, ['124 ms', '94.29 %', '42.3 MB', '100 %']],
  [279, ['68 ms', '97.17 %', '35.8 MB', '100 %']],

  [155, ['112 ms', '50.69 %', '44.6 MB', '25 %']],
  [20, ['52 ms', '86.84 %', '33.9 MB', '63.33 %']],
  [739, ['128 ms', '96.53 %', '42.4 MB', '77.78 %']],
  [150, ['64 ms', '74.06 %', '36.4 MB', '100 %']],

  [200, ['60 ms', '90.61 %', '37.5 MB', '74.19 %']],
  [133, ['48 ms', '99.42 %', '35.6 MB', '100 %']],
  [494, ['188 ms', '71.81 %', '39.5 MB', '100 %']],
  [94, ['52 ms', '80.34 %', '33.7 MB', '87.5 %']],

  [232, ['48 ms', '90.58 %', '32.7 MB', '100 %']],
  [225, ['48 ms', '90.81 %', '33.9 MB', '50 %']],
  [394, ['48 ms', '88.89 %', '33.8 MB', '83.33 %']],
  [733, ['68 ms', '95.48 %', '37.5 MB', '50 %']],
  [542, ['200 ms', '60.76 %', '64.4 MB', '100 %']],
  [841, ['56 ms', '86.69 %', '35.4 MB', '100 %']],
];

const recursion = [
  //
  [344, ['104 ms', '98.39 %', '46.9 MB', '33.19 %']],
  [24, ['52 ms', '80.94 %', '33.7 MB', '89.47 %']],

  [206, ['48 ms', '98.66 %', '34.9 MB', '73.91 %']],
  [700, ['72 ms', '92.19 %', '42.7 MB', '6.25 %']],
  [119, ['44 ms', '98.06 %', '33.8 MB', '70 %']],

  [118, ['48 ms', '92.35 %', '33.7 MB', '100 %']],
  [119, ['44 ms', '98.06 %', '33.8 MB', '70 %']],
  [206, ['48 ms', '98.66 %', '34.9 MB', '73.91 %']],

  [509, ['48 ms', '92.72 %', '33.8 MB', '100 %']],
  [70, ['52 ms', '72.67 %', '33.7 MB', '92 %']],

  [104, ['56 ms', '93.09 %', '37.2 MB', '28.13 %']],
  [50, ['52 ms', '93.37 %', '33.9 MB', '52.94 %']],

  [21, ['60 ms', '86.75 %', '35.5 MB', '79.49 %']],
  [779, ['48 ms', '88.36 %', '33.8 MB', '100 %']],
  [95, ['72 ms', '79.12 %', '37.9 MB', '66.67 %']],
];

const recursion2 = [
  //
  [912],
  [98],
  [240],

  [52],
  [37],
  [77],

  [100],
  [22],
  [94],
  [102],

  [84],
  [46],
  [17],
  [218],
];

const linkedList = [
  //
  [707, ['112 ms', '91.6 %', '42 MB', '100 %']],

  [141, ['60 ms', '93.12 %', '36.3 MB', '100 %']],
  [142, ['60 ms', '95.65 %', '36.5 MB', '56.25 %']],
  [160, ['80 ms', '89.7 %', '42.6 MB', '100 %']],
  [19, ['52 ms', '95.38 %', '34 MB', '81.82 %']],

  [206, ''],
  [203, ['60 ms', '99.36 %', '36.9 MB', '62.5 %']],
  [328, ['64 ms', '83.74 %', '36.2 MB', '100 %']],
  [234, ['56 ms', '94.77 %', '39.1 MB', '100 %']],

  [21, ''],
  [2, ['108 ms', '88.84 %', '38.5 MB', '44.44 %']],
  [430, ['52 ms', '89.91 %', '34.1 MB', '100 %']],
  [138, ['52 ms', '90.58 %', '35.7 MB', '100 %']],
  [61, ['56 ms', '97.98 %', '35.7 MB', '100 %']],
];

const binarySearch = [
  //
  [704, ['52 ms', '95.49 %', '36.7 MB', '92.86 %']],

  [69, ['64 ms', '94.8 %', '35.8 MB', '33.33 %']],
  [374, ['52 ms', '73.49 %', '33.6 MB', '100 %']],
  [33, ['52 ms', '88.13 %', '33 MB', '100 %']],

  [278, ['48 ms', '88.25 %', '33.7 MB', '76.92 %']],
  [162, ['48 ms', '92.04 %', '34.1 MB', '75 %']],
  [153, ['48 ms', '94.33 %', '33.8 MB', '87.5 %']],

  [34, ['52 ms', '87.87 %', '35.1 MB', '30 %']],
  [658, ['88 ms', '88.12 %', '40.4 MB', '100 %']],
  // [162],

  // [50],
  [367, ['44 ms', '98.21 %', '33.7 MB', '75 %']],
  [744, ['60 ms', '82.59 %', '36.2 MB', '100 %']],

  // [153],
  [154, ['52 ms', '89.47 %', '33.8 MB', '100 %']],
  [349, ['48 ms', '97.78 %', '34.1 MB', '92.31 %']],
  [350, ['48 ms', '98.49 %', '35.3 MB', '55.56 %']],
  // [167,],

  [287, ['56 ms', '80.02 %', '35.3 MB', '85.71 %']],
  [4],
  [719],
  [410],
];

const binaryTree = [
  //
  [144],
  [94],
  [145],
  [102],

  [104],
  [101],
  [112],

  [106],
  [105],
  [116],
  [117],
  [236],
  [297],
];

const binarySearchTree = [
  //
  [98],
  [173],

  [700],
  [701],
  [450],

  [703],
  [235],
  [220],

  [110],
  [108],
];

const NaryTree = [
  //
  [589],
  [590],
  [429],
  [559],
];

const Trie = [
  //
  [208],

  [677],
  [648],
  [211],

  [421],
  [212],
  [336],
];

const hashTable = [
  //
  [705],
  [706],

  [217],
  [136],
  [349],
  [202],

  [1],
  [205],
  [599],
  [387],
  [350],
  [219],

  [49],
  [36],
  [652],

  [771],
  [3],
  [454],
  [347],
  [380],
];

const others2 = [
  //
  [121, ['56 ms', '86.44 %', '35.5 MB', '51.85 %']],
  [37, ['72 ms', '91.64 %', '37.7 MB', '100 %']],
];

const easy = [
  //
  // [26],
  [122, ['52 ms', '93.42 %', '35.6 MB', '28.57 %']],
  // [189],
  [217, ['56 ms', '97.28 %', '40 MB', '88.24 %']],
  [136, ['56 ms', '83.18 %', '35.3 MB', '88.46 %']],
  // [350],
  // [66],
  // [283],
  [1, ['52 ms', '92.7 %', '35 MB', '28.1 %']],
  [36, ['68 ms', '93.89 %', '37.6 MB', '93.33 %']],
  [48],

  [344],
  [7],
  [387],
  [242],
  [125],
  [8],
  [28],
  [38],
  [14],

  [237],
  [19],
  [206],
  [21],
  [234],
  [141],

  [104],
  [98],
  [101],
  [102],
  [108],

  [88],
  [278],

  [70],
  [121],
  [53],
  [198],

  [384],
  [155],

  [412],
  [204],
  [326],
  [13],

  [191],
  [461],
  [190],
  [118],
  [20],
  [268],
];

const medium = [
  //
  [15],
  [73],
  [49],
  [3],
  [5],
  [334],

  [2],
  [328],
  [160],

  [94],
  [103],
  [105],
  [116],
  [230],
  [200],

  [17],
  [22],
  [46],
  [78],
  [79],

  [75],
  [347],
  [215],
  [162],
  [34],
  [56],
  [33],
  [240],

  [55],
  [62],
  [322],
  [300],

  [297],
  [380],

  [202],
  [172],
  [171],
  [50],
  [69],
  [29],
  [166],

  [371],
  [150],
  [169],
  [621],
];

const hard = [
  //
  [238],
  [54],
  [454],
  [11],
  [289],
  [41],
  [128],
  [287],
  [227],
  [239],
  [76],

  [23],
  [148],
  [138],

  [127],
  [130],
  [236],
  [124],
  [547],
  [207],
  [210],
  [329],
  [315],

  [131],
  [212],
  [301],
  [44],
  [10],

  [324],
  [378],
  [4],

  [152],
  [309],
  [279],
  [139],
  [140],
  [312],

  [146],
  [208],
  [341],
  [295],

  [179],
  [149],

  [406],
  [42],
  [218],
  [84],
];

const top = [
  //
  [136],
  [169],
  [240],
  [88],
  [887],

  [125],
  [131],
  [139],
  [140],
  [208],
  [212],
  [242],
  [387],
  [344],

  [152],
  [169],
  [189],
  [217],
  [283],
  [384],
  [350],
  [334],
  [240],
  [238],

  [155],
  [215],
  [295],
  [378],
  [347],
  [239],
  [227],
  [341],
  [150],

  [138],
  [141],
  [148],
  [160],
  [206],
  [234],
  [237],
  [328],

  [171],
  [454],
  [380],

  [230],
  [236],
  [297],
  [218],

  [179],
  [324],
  [162],
  [287],
  [315],

  [395],
  [124],
  [128],
  [198],
  [279],
  [300],
  [322],
  [329],

  [127],
  [200],
  [207],
  [210],

  [136],
  [149],
  [166],
  [172],
  [190],
  [191],
  [204],
  [268],
  [326],

  [202],
  [],
  [],
  [],
  [],
];

const tencent = [
  //
  [1],
  [4],
  [5],
  [8],
  [14],
  [15],
  [16],
  [20],
  [26],
  [11],
  [43],
  [344],
  [557],
  [238],
  [217],
  [54],
  [59],
  [88],

  [206],
  [2],
  [21],
  [23],
  [61],
  [141],
  [142],
  [160],
  [237],

  [7],
  [9],
  [136],
  [169],
  [231],

  [148],
  [33],
  [215],
  [230],
  [104],
  [124],
  [235],
  [236],

  [22],
  [78],
  [46],
  [89],

  [70],
  [53],
  [121],
  [122],
  [62],
  [78],

  [146],
  [155],

  [292],
];

const byteDance = [
  //
  [3],
  [14],
  [567],
  [43],
  [151],
  [71],
  [93],

  [15],
  [695],
  [33],
  [674],
  [215],
  [128],
  [60],
  [547],
  [56],
  [42],

  [21],
  [206],
  [2],
  [148],
  [142],
  [160],
  [23],
  [236],
  [103],

  [121],
  [122],
  [221],
  [53],
  [120],
  [354],

  [155],
  [146],
  [432],

  [69],
  [393],
  [176],
];

const Teambition = [
  //
  [23],
  [68],
  [97],
  [145],
  [165],
  [297],
  [432],
  [662],
  [899],
  [907],

  [218],
  [410],
  [514],
  [546],
  [629],
  [679],
  [777],
  [899],
  [940],
  [960],
];

const others = [
  //
  [92, ['48 ms', '95.02 %', '33.7 MB', '57.14 %']],
  [331, ['48 ms', '94.03 %', '34.9 MB', '100 %']],
  [539, ['84 ms', '85.42 %', '38.7 MB', '100 %']],
];
