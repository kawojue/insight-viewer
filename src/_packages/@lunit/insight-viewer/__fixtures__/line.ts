import { Contour } from '@lunit/insight-viewer';

export function labelFunction(contour: Contour): string {
  return `Annotation(${contour.id})`;
}

export const categoryColors = {
  normal: '#3366cc',
  abnormal: '#dc3912',
} as const;

export const initialContours: Omit<Contour, 'id'>[] = [
  {
    polygon: [
      [127.14666666666668, 18.96],
      [127.14666666666668, 18.96],
      [123.73333333333333, 19.813333333333333],
      [120.32000000000001, 21.519999999999996],
      [116.90666666666668, 24.08],
      [112.64, 28.346666666666664],
      [108.37333333333333, 32.61333333333333],
      [105.81333333333335, 36.879999999999995],
      [104.10666666666667, 42],
      [104.10666666666667, 47.97333333333333],
      [104.10666666666667, 57.36],
      [105.81333333333335, 63.33333333333333],
      [108.37333333333333, 69.30666666666667],
      [110.08000000000001, 76.13333333333334],
      [111.78666666666668, 82.10666666666667],
      [113.49333333333334, 88.93333333333332],
      [115.2, 94.90666666666668],
      [115.2, 100.02666666666669],
      [116.05333333333334, 106.85333333333334],
      [116.05333333333334, 112.82666666666667],
      [116.05333333333334, 118.8],
      [116.05333333333334, 123.06666666666668],
      [116.05333333333334, 127.33333333333333],
      [116.05333333333334, 132.45333333333332],
      [115.2, 134.16000000000003],
      [113.49333333333334, 138.42666666666668],
      [110.93333333333334, 143.54666666666668],
      [108.37333333333333, 146.95999999999998],
      [105.81333333333335, 150.37333333333333],
      [102.4, 153.7866666666667],
      [98.13333333333334, 157.2],
      [93.86666666666667, 158.9066666666667],
      [89.60000000000001, 160.61333333333334],
      [84.48, 161.4666666666667],
      [78.50666666666667, 161.4666666666667],
      [73.38666666666667, 159.76],
      [67.41333333333334, 155.49333333333334],
      [62.29333333333334, 148.66666666666669],
      [57.17333333333334, 141.84000000000003],
      [54.61333333333334, 135.01333333333332],
      [52.053333333333335, 127.33333333333333],
      [52.053333333333335, 120.50666666666667],
      [51.2, 112.82666666666667],
      [51.2, 106.85333333333334],
      [52.90666666666667, 100.02666666666669],
      [57.17333333333334, 90.64],
      [60.58666666666667, 84.66666666666667],
      [64.85333333333334, 79.54666666666667],
      [69.12, 75.28],
      [73.38666666666667, 71.86666666666667],
      [78.50666666666667, 69.30666666666667],
      [83.62666666666667, 67.60000000000001],
      [88.74666666666667, 66.74666666666667],
      [93.86666666666667, 66.74666666666667],
      [100.69333333333334, 66.74666666666667],
      [106.66666666666667, 66.74666666666667],
      [110.93333333333334, 66.74666666666667],
      [116.90666666666668, 67.60000000000001],
      [121.17333333333335, 67.60000000000001],
      [123.73333333333333, 67.60000000000001],
      [128, 66.74666666666667],
      [132.26666666666668, 64.18666666666667],
      [134.82666666666668, 61.626666666666665],
      [138.24, 58.21333333333334],
      [139.9466666666667, 55.653333333333336],
      [143.36, 53.093333333333334],
      [145.06666666666666, 49.68000000000001],
      [147.62666666666667, 46.266666666666666],
      [150.18666666666667, 43.70666666666666],
      [151.89333333333335, 42],
      [153.60000000000002, 40.29333333333334],
      [154.45333333333335, 38.58666666666667],
    ],
    label: labelFunction,
    dataAttrs: {
      'data-category': 'normal',
    },
  },
  {
    polygon: [
      [416.4266666666667, 108.56000000000002],
      [414.72, 106.85333333333334],
      [408.74666666666667, 102.58666666666666],
      [401.0666666666667, 97.46666666666668],
      [392.53333333333336, 91.49333333333333],
      [384.85333333333335, 86.37333333333335],
      [378.88000000000005, 84.66666666666667],
      [372.9066666666667, 82.96000000000001],
      [367.7866666666667, 82.96000000000001],
      [361.81333333333333, 82.10666666666667],
      [355.84000000000003, 82.96000000000001],
      [349.0133333333334, 85.52],
      [342.18666666666667, 87.22666666666667],
      [335.36, 90.64],
      [328.53333333333336, 96.61333333333333],
      [320.85333333333335, 105.14666666666666],
      [319.1466666666667, 108.56000000000002],
      [313.17333333333335, 117.94666666666667],
      [310.61333333333334, 124.77333333333333],
      [309.76000000000005, 131.60000000000002],
      [308.9066666666667, 137.57333333333332],
      [308.05333333333334, 143.54666666666668],
      [308.05333333333334, 149.51999999999998],
      [309.76000000000005, 154.64],
      [313.17333333333335, 158.9066666666667],
      [317.44, 162.32],
      [323.41333333333336, 164.88],
      [328.53333333333336, 166.5866666666667],
      [334.50666666666666, 166.5866666666667],
      [340.48, 167.44],
      [347.3066666666667, 164.88],
      [349.0133333333334, 164.0266666666667],
      [354.1333333333334, 159.76],
      [356.6933333333333, 155.49333333333334],
      [359.25333333333333, 151.2266666666667],
      [360.96000000000004, 145.25333333333333],
      [362.6666666666667, 139.28000000000003],
      [362.6666666666667, 134.16000000000003],
      [362.6666666666667, 129.04000000000002],
      [362.6666666666667, 123.92],
      [360.1066666666667, 119.65333333333335],
      [358.40000000000003, 114.53333333333335],
      [355.84000000000003, 109.41333333333334],
      [354.1333333333334, 104.29333333333334],
      [352.4266666666667, 99.17333333333333],
      [350.72, 94.05333333333333],
      [349.0133333333334, 88.93333333333332],
      [348.16, 82.96000000000001],
      [347.3066666666667, 75.28],
      [347.3066666666667, 66.74666666666667],
      [347.3066666666667, 61.626666666666665],
      [348.16, 56.506666666666675],
      [349.0133333333334, 53.093333333333334],
      [351.5733333333334, 49.68000000000001],
      [354.9866666666667, 46.266666666666666],
      [359.25333333333333, 42.85333333333334],
      [366.08000000000004, 39.44],
      [372.9066666666667, 36.02666666666667],
      [378.88000000000005, 32.61333333333333],
      [386.56, 30.053333333333327],
      [393.3866666666667, 28.346666666666664],
      [399.36, 27.49333333333334],
      [403.62666666666667, 26.64],
      [407.8933333333334, 26.64],
      [412.16, 26.64],
      [417.28000000000003, 27.49333333333334],
      [420.6933333333334, 29.200000000000003],
      [424.96000000000004, 31.760000000000005],
      [429.2266666666667, 34.31999999999999],
      [433.49333333333334, 37.733333333333334],
      [436.9066666666667, 42.85333333333334],
      [439.4666666666667, 47.120000000000005],
      [442.88000000000005, 51.38666666666667],
      [444.5866666666667, 55.653333333333336],
      [447.1466666666667, 60.77333333333334],
      [448.85333333333335, 65.89333333333333],
      [450.56, 71.01333333333334],
      [453.12, 77.84],
      [454.8266666666667, 82.10666666666667],
      [455.68, 87.22666666666667],
      [456.53333333333336, 91.49333333333333],
      [457.3866666666667, 96.61333333333333],
      [458.24, 100.88000000000001],
      [458.24, 105.14666666666666],
      [456.53333333333336, 111.97333333333334],
      [455.68, 116.24],
      [453.97333333333336, 118.8],
      [452.2666666666667, 121.36],
      [450.56, 123.92],
      [448.85333333333335, 126.48],
      [447.1466666666667, 129.04000000000002],
      [444.5866666666667, 130.74666666666667],
      [442.88000000000005, 131.60000000000002],
      [440.32000000000005, 132.45333333333332],
      [437.76000000000005, 133.30666666666667],
      [435.20000000000005, 134.16000000000003],
      [430.93333333333334, 134.16000000000003],
      [427.52000000000004, 134.16000000000003],
      [423.2533333333334, 134.16000000000003],
      [418.1333333333334, 135.01333333333332],
      [416.4266666666667, 135.01333333333332],
      [412.16, 136.72000000000003],
      [410.4533333333334, 138.42666666666668],
      [407.8933333333334, 139.28000000000003],
      [406.18666666666667, 141.84000000000003],
      [405.33333333333337, 143.54666666666668],
      [403.62666666666667, 146.10666666666668],
      [402.77333333333337, 149.51999999999998],
      [401.92, 152.07999999999998],
      [401.92, 156.3466666666667],
      [401.92, 159.76],
      [401.92, 164.0266666666667],
      [401.92, 167.44],
      [401.92, 172.56],
      [401.92, 176.82666666666665],
      [404.48, 181.09333333333336],
      [406.18666666666667, 183.65333333333336],
      [408.74666666666667, 186.21333333333337],
      [412.16, 189.62666666666667],
      [415.5733333333334, 190.48000000000002],
      [418.9866666666667, 192.18666666666667],
      [422.40000000000003, 193.04000000000002],
      [424.96000000000004, 193.89333333333332],
      [426.6666666666667, 193.89333333333332],
      [429.2266666666667, 193.89333333333332],
      [431.7866666666667, 192.18666666666667],
      [434.3466666666667, 189.62666666666667],
      [436.05333333333334, 187.92000000000002],
      [437.76000000000005, 186.21333333333337],
      [440.32000000000005, 184.50666666666666],
      [442.0266666666667, 183.65333333333336],
      [442.88000000000005, 182.8],
      [443.73333333333335, 181.94666666666666],
    ],
    label: labelFunction,
    dataAttrs: {
      'data-category': 'abnormal',
    },
  },
  {
    polygon: [
      [287.5733333333333, 409.7866666666667],
      [286.72, 411.49333333333334],
      [285.8666666666667, 412.3466666666667],
      [279.8933333333334, 420.88],
      [272.21333333333337, 431.12],
      [263.68, 441.36],
      [253.44000000000003, 451.6],
      [244.9066666666667, 458.4266666666667],
      [234.66666666666669, 465.25333333333333],
      [226.98666666666668, 467.81333333333333],
      [216.74666666666667, 470.3733333333334],
      [207.36, 471.22666666666663],
      [197.97333333333336, 470.3733333333334],
      [186.88000000000002, 468.6666666666667],
      [177.49333333333334, 465.25333333333333],
      [165.54666666666668, 457.5733333333333],
      [154.45333333333335, 447.33333333333337],
      [144.21333333333334, 437.09333333333336],
      [133.12, 420.88],
      [125.44000000000001, 408.08],
      [120.32000000000001, 396.9866666666667],
      [114.34666666666668, 381.62666666666667],
      [111.78666666666668, 373.09333333333336],
      [111.78666666666668, 362],
      [111.78666666666668, 350.9066666666667],
      [114.34666666666668, 338.96],
      [116.05333333333334, 327.8666666666667],
      [120.32000000000001, 317.62666666666667],
      [126.29333333333334, 308.24],
      [135.68, 294.58666666666664],
      [141.65333333333334, 286.9066666666667],
      [149.33333333333334, 278.37333333333333],
      [156.16, 272.4],
      [163.84, 268.1333333333333],
      [174.08, 263.8666666666667],
      [183.46666666666667, 261.3066666666667],
      [193.70666666666668, 259.6],
      [203.9466666666667, 257.8933333333333],
      [218.45333333333335, 257.04],
      [226.98666666666668, 257.8933333333333],
      [235.52, 258.74666666666667],
      [243.20000000000002, 260.4533333333333],
      [250.02666666666667, 263.0133333333333],
      [256, 267.28],
      [262.8266666666667, 272.4],
      [267.94666666666666, 279.2266666666667],
      [271.36, 285.2],
      [273.92, 290.32],
      [276.48, 296.29333333333335],
      [278.18666666666667, 303.12],
      [278.18666666666667, 309.94666666666666],
      [279.04, 316.7733333333333],
      [279.04, 325.3066666666667],
      [278.18666666666667, 336.4],
      [277.33333333333337, 344.08],
      [276.48, 351.76],
      [273.92, 357.73333333333335],
      [271.36, 362],
      [269.65333333333336, 366.26666666666665],
      [267.09333333333336, 370.53333333333336],
      [264.53333333333336, 374.8],
      [261.97333333333336, 377.36],
      [257.7066666666667, 379.92],
      [254.29333333333335, 382.48],
      [250.02666666666667, 385.04],
      [245.76000000000002, 386.74666666666667],
      [240.64000000000001, 389.3066666666667],
      [235.52, 391.8666666666667],
      [228.69333333333336, 394.4266666666667],
      [216.74666666666667, 397.84000000000003],
      [212.48000000000002, 399.5466666666667],
      [203.09333333333333, 401.25333333333333],
      [188.58666666666667, 402.1066666666667],
      [180.90666666666667, 402.96000000000004],
      [175.7866666666667, 402.96000000000004],
      [171.52, 402.1066666666667],
      [167.25333333333333, 401.25333333333333],
      [164.69333333333336, 398.6933333333333],
      [162.13333333333335, 396.1333333333333],
      [160.42666666666668, 393.5733333333333],
      [158.72, 389.3066666666667],
      [157.86666666666667, 385.04],
      [156.16, 379.92],
      [156.16, 373.94666666666666],
      [156.16, 367.97333333333336],
      [156.16, 362],
      [158.72, 356.0266666666667],
      [162.13333333333335, 348.3466666666667],
      [165.54666666666668, 341.52],
      [172.37333333333333, 330.4266666666667],
      [176.64000000000001, 325.3066666666667],
      [180.90666666666667, 321.8933333333333],
      [185.17333333333335, 317.62666666666667],
      [188.58666666666667, 315.92],
      [192, 313.36],
      [195.41333333333336, 311.65333333333336],
      [198.82666666666668, 310.8],
      [201.38666666666668, 310.8],
      [203.9466666666667, 310.8],
      [206.5066666666667, 311.65333333333336],
      [209.0666666666667, 312.50666666666666],
      [210.77333333333334, 313.36],
      [211.6266666666667, 315.06666666666666],
      [213.33333333333334, 315.92],
      [214.18666666666667, 318.48],
      [215.04000000000002, 320.18666666666667],
      [215.89333333333335, 321.04],
      [216.74666666666667, 321.8933333333333],
      [216.74666666666667, 323.6],
      [217.60000000000002, 324.4533333333333],
      [217.60000000000002, 325.3066666666667],
      [217.60000000000002, 327.0133333333333],
      [217.60000000000002, 328.72],
      [217.60000000000002, 329.5733333333333],
      [217.60000000000002, 330.4266666666667],
      [217.60000000000002, 330.4266666666667],
    ],
    label: labelFunction,
    dataAttrs: {
      'data-category': 'normal',
    },
  },
  {
    polygon: [
      [411.3066666666667, 360.29333333333335],
      [411.3066666666667, 360.29333333333335],
      [407.04, 362],
      [403.62666666666667, 364.56],
      [400.21333333333337, 367.97333333333336],
      [398.5066666666667, 370.53333333333336],
      [395.9466666666667, 373.94666666666666],
      [393.3866666666667, 377.36],
      [392.53333333333336, 379.92],
      [391.68, 382.48],
      [390.8266666666667, 385.8933333333333],
      [390.8266666666667, 389.3066666666667],
      [390.8266666666667, 391.8666666666667],
      [390.8266666666667, 395.28000000000003],
      [390.8266666666667, 397.84000000000003],
      [392.53333333333336, 401.25333333333333],
      [394.24, 403.81333333333333],
      [396.8, 406.37333333333333],
      [399.36, 408.08],
      [402.77333333333337, 409.7866666666667],
      [406.18666666666667, 411.49333333333334],
      [410.4533333333334, 411.49333333333334],
      [413.8666666666667, 412.3466666666667],
      [417.28000000000003, 412.3466666666667],
      [424.1066666666667, 411.49333333333334],
      [426.6666666666667, 409.7866666666667],
      [430.08000000000004, 408.08],
      [432.64000000000004, 405.52],
      [435.20000000000005, 402.96000000000004],
      [436.9066666666667, 400.40000000000003],
      [438.61333333333334, 397.84000000000003],
      [440.32000000000005, 395.28000000000003],
      [442.88000000000005, 391.8666666666667],
      [443.73333333333335, 388.4533333333333],
      [445.44000000000005, 385.8933333333333],
      [446.29333333333335, 383.3333333333333],
      [446.29333333333335, 380.77333333333337],
      [446.29333333333335, 379.06666666666666],
      [446.29333333333335, 376.50666666666666],
      [446.29333333333335, 374.8],
      [446.29333333333335, 373.09333333333336],
      [445.44000000000005, 371.38666666666666],
      [444.5866666666667, 369.68],
      [444.5866666666667, 368.82666666666665],
      [443.73333333333335, 367.97333333333336],
      [442.88000000000005, 367.12],
      [442.0266666666667, 365.41333333333336],
      [441.17333333333335, 364.56],
      [440.32000000000005, 363.70666666666665],
      [439.4666666666667, 362.85333333333335],
      [438.61333333333334, 361.14666666666665],
      [437.76000000000005, 360.29333333333335],
      [436.9066666666667, 359.44],
      [436.9066666666667, 358.5866666666667],
      [436.05333333333334, 358.5866666666667],
      [436.05333333333334, 357.73333333333335],
      [436.05333333333334, 357.73333333333335],
      [435.20000000000005, 356.88],
      [435.20000000000005, 356.88],
      [435.20000000000005, 356.88],
      [434.3466666666667, 356.88],
      [434.3466666666667, 356.88],
      [434.3466666666667, 356.88],
    ],
    label: labelFunction,
    dataAttrs: {
      'data-category': 'normal',
    },
  },
  {
    polygon: [
      [358.40000000000003, 435.38666666666666],
      [358.40000000000003, 437.09333333333336],
      [356.6933333333333, 440.50666666666666],
      [354.9866666666667, 445.62666666666667],
      [352.4266666666667, 450.74666666666667],
      [350.72, 454.16],
      [349.0133333333334, 456.72],
      [347.3066666666667, 458.4266666666667],
      [345.6, 460.1333333333333],
      [343.8933333333334, 460.9866666666667],
      [340.48, 461.84000000000003],
      [337.06666666666666, 462.6933333333333],
      [333.65333333333336, 463.5466666666667],
      [329.3866666666667, 463.5466666666667],
      [325.97333333333336, 463.5466666666667],
      [321.7066666666667, 462.6933333333333],
      [318.29333333333335, 461.84000000000003],
      [314.88, 460.1333333333333],
      [312.32, 458.4266666666667],
      [309.76000000000005, 456.72],
      [307.20000000000005, 453.3066666666667],
      [305.49333333333334, 450.74666666666667],
      [303.7866666666667, 448.18666666666667],
      [302.08000000000004, 443.06666666666666],
      [302.08000000000004, 438.8],
      [302.08000000000004, 435.38666666666666],
      [302.08000000000004, 431.97333333333336],
      [302.08000000000004, 428.56],
      [302.93333333333334, 426],
      [304.64000000000004, 423.44],
      [306.3466666666667, 420.0266666666667],
      [308.05333333333334, 418.32],
      [310.61333333333334, 415.76],
      [313.17333333333335, 414.05333333333334],
      [315.73333333333335, 412.3466666666667],
      [317.44, 411.49333333333334],
      [320, 410.64],
      [322.56, 409.7866666666667],
      [325.97333333333336, 408.93333333333334],
      [326.8266666666667, 408.93333333333334],
      [329.3866666666667, 408.93333333333334],
      [331.9466666666667, 408.93333333333334],
      [333.65333333333336, 408.93333333333334],
      [335.36, 408.93333333333334],
      [337.06666666666666, 409.7866666666667],
      [337.92, 410.64],
      [338.77333333333337, 411.49333333333334],
      [338.77333333333337, 411.49333333333334],
      [339.62666666666667, 412.3466666666667],
      [339.62666666666667, 413.2],
      [340.48, 413.2],
      [340.48, 414.05333333333334],
    ],
    label: labelFunction,
    dataAttrs: {
      'data-category': 'abnormal',
    },
  },
  {
    polygon: [
      [350.72, 490.8533333333333],
      [351.5733333333334, 491.70666666666665],
      [354.1333333333334, 494.2666666666667],
      [356.6933333333333, 496.82666666666665],
      [360.1066666666667, 499.3866666666667],
      [364.37333333333333, 501.94666666666666],
      [368.64000000000004, 505.36000000000007],
      [372.05333333333334, 506.2133333333333],
      [375.4666666666667, 507.92],
      [379.73333333333335, 508.77333333333337],
      [384, 509.6266666666667],
      [387.41333333333336, 509.6266666666667],
      [391.68, 509.6266666666667],
      [395.9466666666667, 509.6266666666667],
      [399.36, 508.77333333333337],
      [401.92, 507.92],
      [404.48, 506.2133333333333],
      [407.04, 503.65333333333336],
      [408.74666666666667, 501.94666666666666],
      [410.4533333333334, 501.0933333333333],
      [413.0133333333334, 496.82666666666665],
      [415.5733333333334, 494.2666666666667],
      [417.28000000000003, 490.8533333333333],
      [418.9866666666667, 488.29333333333335],
      [419.84000000000003, 485.7333333333333],
      [420.6933333333334, 483.17333333333335],
      [421.5466666666667, 479.76000000000005],
      [422.40000000000003, 476.34666666666664],
      [422.40000000000003, 473.7866666666667],
      [422.40000000000003, 470.3733333333334],
      [422.40000000000003, 467.81333333333333],
      [422.40000000000003, 464.40000000000003],
      [422.40000000000003, 461.84000000000003],
      [423.2533333333334, 459.28000000000003],
      [423.2533333333334, 456.72],
      [423.2533333333334, 455.0133333333333],
      [423.2533333333334, 454.16],
      [423.2533333333334, 453.3066666666667],
      [423.2533333333334, 453.3066666666667],
      [423.2533333333334, 453.3066666666667],
      [423.2533333333334, 452.4533333333333],
      [423.2533333333334, 452.4533333333333],
    ],
    label: labelFunction,
    dataAttrs: {
      'data-category': 'abnormal',
    },
  },
];