function getInfoPenjualan(dataPenjualanNovel){
    let totalKeuntungan = 0
    let totalSisa = 0
    let totalModal = 0
    let maks = 0
    let produk
    let penulis
    dataPenjualanNovel.forEach(total=>{
        //totalKeuntungan
        untung = (total.hargaJual - total.hargaBeli)*total.totalTerjual
        totalKeuntungan += untung
        //totalModal
        sisa = (total.hargaJual - total.hargaBeli)*total.sisaStok
        totalSisa += sisa
        totalModal = totalKeuntungan + totalSisa
        //produkBukuTerlaris
        if(total.totalTerjual>maks){
            maks = total.totalTerjual
            produk = total.namaProduk 
        }

        //penulisTerlaris
        
    });
    return produk
}

module.exports = getInfoPenjualan