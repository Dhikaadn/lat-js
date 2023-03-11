function isValidPassword(givenPassword){
    const passRegex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
    const isValidPass = passRegex.test(givenPassword)
    let validPass
    if(givenPassword == null){
        validPass = "ERROR: Your parameters is empty"
    }else if(typeof(givenPassword)=="number"){
        validPass = "ERROR: Your type password is a number"
    }else if(isValidPass==true){
        validPass = true
    }else if(isValidPass==false){
        validPass = false
    }
    return validPass
}

module.exports = isValidPassword