// 1) add
// : Named Import
import { add } from "./mathModule.js";
console.log(add(1,2));


// 2) substract
// : Default Import
import substract from "./mathModule.js";
console.log(substract(1,2));


// 3) multiply 
// : Named Import (as 구문: mp)
import { multiply as mp } from "./mathModule.js"; 
console.log(mp (1,2));


// 4) divide
// : 모듈 전체 가져오기 (as 구문 : math)
import * as mathModuleAll from "./mathModule.js"
console.log(mathModuleAll.divide(1,2));

