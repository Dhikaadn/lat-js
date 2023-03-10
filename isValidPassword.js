const pass = "Meong2021"
const validPass = new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20}/)
const isValidPass = validPass.test(pass);

console.log(isValidPass)