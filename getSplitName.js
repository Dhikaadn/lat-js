function getSplitName(personName){
    const splitSpace = personName.split(" ")
    let firstName = splitSpace[0]
    let middleName = splitSpace[1]
    let lastName = splitSpace[2]
    const fullName = {
        firstName: firstName,
        middleName: middleName,
        lastName: lastName
    }
    if(fullName.middleName == undefined && fullName.lastName == undefined){
        fullName.middleName = null
        fullName.lastName = null
        return fullName
    }else if(fullName.middleName == middleName && fullName.lastName == undefined){
        fullName.middleName = null
        fullName.lastName = middleName
        return fullName
    } else if(splitSpace.length>3){
        return "ERROR: This function is only for 3 characters name"
    } else{
        return fullName
    }
}

module.exports = getSplitName