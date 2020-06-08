// script pertama node.js //

// console.log("Hello Rahmat");

// var a = 10;
// console.log(a); // Untuk menampilkan di console

// Pertambahan
// var a = 10;
// var b = 15;
// console.log(a + b);

// Membuat function pertambahan
// function tambah(a, b) {
//   return a + b;
// }
// console.log(tambah(10, 15));

// End script pertama node.js //

// Module node.js //
// Membuat library(Untuk import)

// const fs = require("fs");
// fs.copyFileSync("text.txt", "text2.txt");

// Untuk memberi tahu kalo import berhasil
// console.log("text.txt sudah di copy menjadi text2.txt");

// End Module node.js //

// Module NPM //

// Cara install modul NPM pertama ketikan npm init di console dan enter2 saja sampai selesai

// Cara instal NPM superheroes //

// Buka => https://www.npmjs.com/package/superheroes
// Paste kan npm install superheroes di terminal -> npm i superheroes

//=====================================//
// Menggunakan modul dari luar //
// const hero = require("superheroes");

// const namaHero = hero.random();

// console.log(namaHero);
//=====================================//

// Looping

// const hero = require("superheroes");
// // Untuk membuat perulangan
// for (let i = 0; i < 10; i++) {
//   console.log(hero.random());
// }
// End Looping
// End Menggunakan modul dari luar //

// Menggunakan modul sendiri //
// Untuk mendaftarkan module sendiri harus mendaftarkan fungsi kedalam properti object. dengan menggunakan metod
// export bawaan node.js agar bisa digunakan diluar file

// membuat variable namanya aku dan import modulenya
const aku = require("./module");
// membuat variabel dan memanggil variabel dan metod yang ada di module.js
const Judul = aku.title;
const Penjumlahan = aku.tambah(10, 10);
const Perkalian = aku.kali(10, 20);
// Menampilkan hasil di console
console.log(Judul); // Untuk variable titel
console.log(Penjumlahan); // Untuk penjumlahan
console.log(Perkalian); // Untuk perkalian

// End Menggunakan modul sendiri //

// End Module NPM superheroes //
