function checkEmail(email){
    const emailRegex = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    const isValidEmail = emailRegex.test(email)
    const emailRegex2 = new RegExp(/[A-Z0-9]/gi)
    const isErrorEmail = emailRegex2.test(email)
    const emailRegex3 = new RegExp(/@/)
    const isAddEmail = emailRegex3.test(email)

    let validation
    if(email==null){
        validation = "ERROR: Your parameters is empty"
    }else if(isErrorEmail==true && isAddEmail==false && typeof(email)!="number"){
        validation = "ERROR: Your email not complete"
    }else if(typeof(email)=="number"){
        validation = "ERROR: Your email contains a number"
    }else if (isValidEmail==true){
        validation = "VALID"
    }else if(isValidEmail==false){
        validation = "INVALID"
    }
    return validation
}

module.exports = checkEmail