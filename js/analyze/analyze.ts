const season0 = [
  ['05/28/19', [148, 110, 830, 276, 734]],
  ['05/29/19', [2, 20, 26, 88, 104]],
  ['05/30/19', [3, 121, 122, 136, 155]],
  ['05/31/19', [11, 167, 169, 172, 190]],
  ['06/01/19', [15, 191, 198, 203, 206]],
];

const season1 = [
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

  [155],
  [20],
  [739],
  [150],

  [200, ['60 ms', '90.61 %', '37.5 MB', '74.19 %']],
  [133, ['60 ms', '80.17 %', '35.5 MB', '100 %']],
  [494],
  [94],

  [232],
  [225],
  [394],
  [733],
  [542],
  [841],
];

parseAccepted(`
47/47 cases passed (60 ms)
Your runtime beats 90.61 % of javascript submissions
Your memory usage beats 74.19 % of javascript submissions (37.5 MB)
`);
