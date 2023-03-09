//variables
let tip
let bill = 275
let total

//logic
if(bill >= 50 && bill <= 300){
    tip = 0.15 * bill
    total = bill + tip
}else{
    tip = 0.2 * bill
    total = bill + tip
}

//output
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`)