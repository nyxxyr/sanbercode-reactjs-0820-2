// Soal 1
const filterBookPromise = (colorful, amountOfPage) => {
    return new Promise((resolve, reject) => {
        let books = [
            {name: 'Shinchan', totalPage: 50, isColorful: true},
            {name: 'Kalkulus', totalPage: 250, isColorful: false},
            {name: 'Doraemon', totalPage: 40, isColorful: true},
            {name: 'Algoritma', totalPage: 300, isColorful: false},
        ]
        if(amountOfPage > 0){
            resolve(books.filter(x => x.totalPage >= amountOfPage && x.isColorful == colorful))
        }else{
            let reason = new Error("Maaf parameter salah")
            reject(reason)
        }
    })
}
const filteredBooks = filterBookPromise(true, 20)
filteredBooks.then((fulfilled => {
    console.log(fulfilled)
})).catch(error => {
    console.log(error)
})


// Soal 2
class BangunDatar {
    constructor(){
        this._nama = ''
    }
    get nama(){
        return this._nama
    }
    set nama(nama){
        this._nama = nama
    }
    luas(){
        return ''
    }
    keliling(){
        return ''
    }
}

class Lingkaran extends BangunDatar{
    constructor(){
        super()
        this._rad = 0
        this._pi = this._rad % 7 == 0 ? 22/7 : 3.14
    }
    get radius(){
        return this._rad
    }
    set radius(rad){
        this._rad = rad
    }
    luas(){
        return (this._pi*this.radius*this.radius)
    }
    keliling(){
        return (2*(this._pi*this.radius))
    }
}

class Persegi extends BangunDatar{
    constructor(){
        super()
        this._panjang = 0
        this._lebar = 0
    }
    get len(){
        return this._panjang
    }
    set len(len){
        this._panjang = len
    }
    get wid(){
        return this._lebar
    }
    set wid(wid){
        this._lebar = wid
    }
    luas(){
        return (this.len*this.wid)
    }
    keliling(){
        return 2*(this.len+this.wid)
    }
}

const shape1 = new BangunDatar()
shape1.nama = 'tak berbentuk'
console.log(`Luas Bangun ${shape1.nama} : ${shape1.luas()}`) 
console.log(`Keliling Bangun ${shape1.nama} : ${shape1.keliling()}`) 

const shape2 = new Lingkaran()
shape2.nama = 'roda'
shape2.radius = 7
console.log(`Luas Bangun ${shape2.nama} : ${shape2.luas()}`)
console.log(`Keliling Bangun ${shape2.nama} : ${shape2.keliling()}`)

const shape3 = new Persegi()
shape3.nama = 'kertas'
shape3.len = 4
shape3.wid = 5
console.log(`Luas Bangun ${shape3.nama} : ${shape3.luas()}`)
console.log(`Keliling Bangun ${shape3.nama} : ${shape3.keliling()}`)

// Soal 4
// volume balok dan volume kubus punya fungsi yang sama
const volume = (...size) => {
    let total = 1
    size.map(el => {
        total = total*el
    })
    return `Volume Balok/Kubus tersebut adalah ${total}`
}
console.log(volume(2, 3, 2))

// Soal 5
let warna = ['biru', 'merah', 'kuning', 'hijau']
let dataBukuTambahan = {
    penulis: 'John Doe',
    tahunTerbit: 2020
}
let buku = {
    nama: 'Pemrograman dasar',
    jumlahHalaman: 172,
    warnaSampul: ['Hitam']
}

let completedData = {
    ...dataBukuTambahan,
    ...buku,
    warnaSampul: [...buku.warnaSampul, ...warna]   
}
console.log(completedData)
