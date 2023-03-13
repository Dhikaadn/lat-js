function getAngkaTerbesarKedua(dataNumbers){
    let nilaiMaks
    for(let i=0; i<dataNumbers.length; i++){
        if(i == 0){ 
            nilaiMaks = dataNumbers[i]
        }else{
            if(dataNumbers[i] > nilaiMaks)
                {
                    nilaiMaks = dataNumbers[i];
                }
        }                     
    }
    dataNumbers.splice(dataNumbers.indexOf(nilaiMaks), 1)
    
    let nilaiMaksSecond
    for(let i = 0; i<dataNumbers.length; i++){
        if(i == 0){
            nilaiMaksSecond = dataNumbers[i]
        }else{
            if(dataNumbers[i]>nilaiMaksSecond){
                nilaiMaksSecond = dataNumbers[i]
            }
        }
    }
    return nilaiMaksSecond;
}

module.exports = getAngkaTerbesarKedua