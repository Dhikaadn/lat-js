function getInfoPenjualan(dataPenjualanNovel){
    //variable
    let totalUntung = 0
    let totalSisa = 0
    let totalModalPros = 0
    let persenUntung
    let maks = 0
    let produk
    let penulis = []
    let maksTerjual = 0
    let maksPenulis

    //logic
    dataPenjualanNovel.forEach(total=>{
	
        //totalKeuntungan
        untung = (total.hargaJual - total.hargaBeli)*total.totalTerjual
        totalUntung += untung
        //totalModal
        sisa = (total.hargaJual - total.hargaBeli)*total.sisaStok
        totalSisa += sisa
        totalModalPros = totalUntung + totalSisa
        //persentase
        persenUntung = Math.round(totalUntung*100/totalModalPros)
        //produkBukuTerlaris
        if(total.totalTerjual>maks){
            maks = total.totalTerjual
            produk = total.namaProduk 
        }

        //penulisTerlaris
        let countPenulis = 0
        let countTerjual = 0
        dataPenjualanNovel.forEach(totalChild=>{
            if(totalChild.penulis==total.penulis){
                countPenulis++
            }
        })

        dataPenjualanNovel.forEach(totalChild=>{
            if(totalChild.penulis==total.penulis){
                countTerjual += totalChild.totalTerjual
            }
        })
        
        if(countTerjual>maksTerjual){
            maksTerjual = countTerjual
            maksPenulis = total.penulis
        }

        penulis.push(countTerjual) 
    });
     //konversi rupiah
     const konversiRP = (numberKonversi) =>{
        let number_string = numberKonversi.toString(),
        strSisa = number_string.length % 3,
        rupiah 	= number_string.substr(0, strSisa),
        ribuan 	= number_string.substr(strSisa).match(/\d{3}/g);
         
     if (ribuan) {
         separator = strSisa ? '.' : '';
         rupiah += separator + ribuan.join('.');
     }
     let rupiahFix = `Rp. ${rupiah}`
     return rupiahFix
     }
     
    let objFinal = {
        totalKeuntungan: konversiRP(totalUntung),
        totalModal: konversiRP(totalModalPros),
        persentaseKeuntungan: `${persenUntung}%`,
        produkBukuTerlaris: produk,
        penulisTerlaris: maksPenulis

    }
    return objFinal
}

module.exports = getInfoPenjualan