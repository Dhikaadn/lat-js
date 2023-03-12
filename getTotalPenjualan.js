function getTotalPenjualan(dataPenjualan){
    let totalAllPenjualan = 0
    dataPenjualan.forEach(total=>{
        totalAllPenjualan = totalAllPenjualan + total.totalTerjual
    });
    return totalAllPenjualan
}
module.exports = getTotalPenjualan
