const changeWord = require('./changeWord.js')
const checkTypeNumber = require('./checkTypeNumber.js')
const checkEmail = require('./checkEmail.js')
const isValidPassword = require('./isValidPassword.js')
const kalimat1 = "Andini sangat mencintai kamu selamanya"
const myEmail = "111202012870@mhs.dinus.ac.id"
const myPass = "aaNdhik55"

console.log(changeWord("Andini", "boli boli", kalimat1))
console.log(checkTypeNumber({}))
console.log(checkEmail(myEmail))
console.log(isValidPassword(myPass))

