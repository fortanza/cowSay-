const studentInfo = require('./information')

const cowsay = require("cowsay");
console.log(cowsay.say({
    text : `Hello I am ${studentInfo.student} from ${studentInfo.campus}!`,
    e : "oO",
    T : "U "
}));