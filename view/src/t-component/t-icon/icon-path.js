/**
 * svg原图<p/>
 * @author xingchen
 * v1.2.4引入password图标<p/>
 * v1.2.5.引入 search,user图标
 * v1.2.6 引入 add,subtract图标
 **/
// 密码
const passwordSvg = "M780.8 354.58H665.6v-42.89c0-72.31-19.85-193.3-153.6-193.3-138.87 0-153.6 135.05-153.6 193.3v42.89H243.2v-42.89C243.2 122.25 348.79 0 512 0s268.8 122.25 268.8 311.69v42.89z m-192 314.84c0-43.52-34.58-78.65-76.8-78.65s-76.8 35.13-76.8 78.65c0 29.46 15.4 54.47 38.44 67.82v89.64c0 21.74 17.25 39.7 38.4 39.7s38.4-17.96 38.4-39.7v-89.64c23-13.35 38.36-38.36 38.36-67.82zM896 512v393.61c0 65.26-51.87 118.39-115.2 118.39H243.2c-63.291 0-115.2-53.13-115.2-118.39V512c0-65.22 51.87-118.39 115.2-118.39h537.6c63.33 0 115.2 53.17 115.2 118.39z";
//  用户
const userSvg = "M164.655 68.977l0 0 0 0zM866.321 769.149q0 59.804-36.377 94.437t-96.684 34.632l-435.544 0q-60.293 0-96.684-34.632t-36.377-94.437q0-26.414 1.744-51.573t6.977-54.321 13.2-54.069 21.432-48.586 30.892-40.367 42.614-26.665 55.563-9.963q4.479 0 20.931 10.717t37.131 23.916 53.819 23.916 66.531 10.717 66.531-10.717 53.819-23.916 37.131-23.916 20.931-10.717q30.405 0 55.563 9.963t42.614 26.665 30.893 40.367 21.432 48.586 13.2 54.069 6.977 54.321 1.744 51.573zM706.846 324.131q0 79.242-56.065 135.292t-135.293 56.065-135.293-56.065-56.065-135.292 56.065-135.293 135.293-56.065 135.293 56.065 56.065 135.293z";
//  查找
const searchSvg = "M406.277148 812.545762A403.793968 403.793968 0 0 1 0.008533 406.36248 403.793968 403.793968 0 0 1 406.277148 0.008533a403.793968 403.793968 0 0 1 406.268614 406.268615 403.793968 403.793968 0 0 1-406.183282 406.268614z m0-696.484863a287.400272 287.400272 0 0 0-290.130916 290.216249c0 162.558645 127.657603 290.216248 290.130916 290.216248 162.558645 0 290.216248-127.657603 290.216248-290.130916 0-162.558645-127.657603-290.301581-290.130916-290.301581z m545.275456 890.701911L778.754044 834.561579a55.466204 55.466204 0 0 1 0-80.38333c23.039808-23.039808 57.59952-23.039808 80.639328 0l172.79856 172.286564a55.466204 55.466204 0 0 1 0 80.38333 55.807535 55.807535 0 0 1-80.639328 0z";
//  加
const add = "M822.044444 408.651852H615.348148V201.955556c0-57.07757-46.270578-103.348148-103.348148-103.348149s-103.348148 46.270578-103.348148 103.348149v206.696296H201.955556c-57.07757 0-103.348148 46.270578-103.348149 103.348148s46.270578 103.348148 103.348149 103.348148h206.696296v206.696296c0 57.07757 46.270578 103.348148 103.348148 103.348149s103.348148-46.270578 103.348148-103.348149V615.348148h206.696296c57.07757 0 103.348148-46.270578 103.348149-103.348148s-46.270578-103.348148-103.348149-103.348148z";
//  减
const subtract="M2.556804 611.076155 2.556804 412.923845l1022.721598 0 0 196.873908L2.556804 609.797753z";

export default {
    passwordSvg, userSvg, searchSvg, add, subtract,
}