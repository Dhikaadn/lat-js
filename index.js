const changeWord = require('./changeWord.js')
const checkTypeNumber = require('./checkTypeNumber.js')
const checkEmail = require('./checkEmail.js')
const isValidPassword = require('./isValidPassword.js')
const getSplitName = require('./getSplitName.js')
const getAngkaTerbesarKedua = require('./getAngkaTerbesarKedua.js')
const getTotalPenjualan = require('./getTotalPenjualan.js')
const getInfoPenjualan = require('./getInfoPenjualan.js')
const kalimat1 = "Andini sangat mencintai kamu selamanya"
const myEmail = "111202012870@mhs.dinus.ac.id"
const myPass = "aaNdhik55"
const myName = "andhika pratama dian putra"
const myList = [100, 60, 75, 40, 50, 40, 200, 75, 40, 50]
const dataPenjualanPakAldi = [
    {
      namaProduct : 'Sepatu Futsal Nike Vapor Academy 8',
      hargaSatuan: 760000,
      kategori : "Sepatu Sport",
      totalTerjual : 90
    },
    {
      namaProduct : 'Sepatu Warrior Tristan Black Brown High',
      hargaSatuan: 960000,
      kategori : "Sepatu Sneaker",
      totalTerjual : 37
    },
    {
      namaProduct : 'Sepatu Warrior Tristan Maroon High ',
      kategori : "Sepatu Sneaker",
      hargaSatuan: 360000,
      totalTerjual : 90
    },
    {
      namaProduct : 'Sepatu Warrior Rainbow Tosca Corduroy',
      hargaSatuan: 120000,
      kategori : "Sepatu Sneaker",
      totalTerjual : 90
    }
]

const dataPenjualanNovel = [
  {
    idProduct: 'BOOK002421',
    namaProduk: 'Pulang - Pergi',
    penulis: 'Tere Liye',
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17
  },
  {
    idProduct: 'BOOK002351',
    namaProduk: 'Selamat Tinggal',
    penulis: 'Tere Liye',
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20
  },
  {
    idProduct: 'BOOK002941',
    namaProduk: 'Garis Waktu',
    penulis: 'Fiersa Besari',
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5
  },
  {
    idProduct: 'BOOK002941',
    namaProduk: 'Laskar Pelangi',
    penulis: 'Andrea Hirata',
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56
  }
];



console.log(changeWord("Andini", "boli boli", kalimat1))
console.log(checkTypeNumber({}))
console.log(checkEmail(myEmail))
console.log(isValidPassword(myPass))
console.log(getSplitName(myName))
console.log(getAngkaTerbesarKedua(myList))
console.log(getTotalPenjualan(dataPenjualanPakAldi))
console.log(getInfoPenjualan(dataPenjualanNovel))