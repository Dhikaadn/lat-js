//variables
const ptDolphins = [97, 112, 101]
const ptKoalas = [109, 95, 106]

let avgDolphins
let avgKoalas
let sumDolphins = 0
let sumKoalas = 0

//calculate avg dolphins
ptDolphins.forEach(function(item){
    sumDolphins += item
    avgDolphins = sumDolphins/ptDolphins.length
})

//calculate avg koalas
ptKoalas.forEach(function(item){
    sumKoalas += item
    avgKoalas = sumKoalas/ptKoalas.length
})

//compare avg dolphins Team and avg koalas Team
let final
if (avgDolphins>avgKoalas){
    if((avgDolphins >= 100) || (avgKoalas >= 100)){
        final = `dolphins Team vs koalas Team(Bonus1)\n Points:\n Avg dolphins Team: ${avgDolphins}\n Avg koalas Team: ${avgKoalas}\n The Winner: dolphins Team` 
    }else if((avgDolphins < 100) || (avgKoalas < 100)){
        final = `dolphins Team vs koalas Team\n Points:\n Avg dolphins Team: ${avgDolphins}\n Avg koalas Team: ${avgKoalas}\n The Winner: dolphins Team` 
    }

}else if(avgDolphins<avgKoalas){
    if((avgDolphins >= 100) || (avgKoalas >= 100)){
        final = `dolphins Team vs koalas Team(Bonus1)\n Points:\n Avg dolphins Team: ${avgDolphins}\n Avg koalas Team: ${avgKoalas}\n The Winner: koalas Team` 
    }else if((avgDolphins < 100) || (avgKoalas < 100)){
        final = `dolphins Team vs koalas Team\n Points:\n Avg dolphins Team: ${avgDolphins}\n Avg koalas Team: ${avgKoalas}\n The Winner: koalas Team` 
    }
    
}else if(avgDolphins==avgKoalas){
    if((avgDolphins >= 100) || (avgKoalas >= 100)){
        final = `dolphins Team vs koalas Team(Bonus2)\n Points:\n Avg dolphins Team: ${avgDolphins}\n Avg koalas Team: ${avgKoalas}\n The Winner: Draw match` 
    }else if((avgDolphins < 100) || (avgKoalas < 100)){
        final = `dolphins Team vs koalas Team\n Points:\n Avg dolphins Team: ${avgDolphins}\n Avg koalas Team: ${avgKoalas}\n The Winner: Draw match` 
    }
}else{
    final = "Error input"
}
//output
console.log(final)


