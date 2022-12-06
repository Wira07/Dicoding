// const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

// let myFood = "Ice Cream";
// let herFood = "Noodles";

// [myFood, herFood] = favorites;

// console.log(myFood);
// console.log(herFood);

// /* output:
// Seafood
// Salad
// */

// const makeCoffee = (ingredient) => {
//     return new Promise ((resolve, reject) => {
//         if (ingredient) {
//             resolve("Kopi Berhasil dibuat")
//         } else {
//             reject ("Kopi gagal dibuat")
//         }
//     });
// }

// makeCoffee()
// .then(console.log)
// .catch(console.log)

// const sum = (a,b) => {
//     a + b;
// }

// console.log(sum(4,4));

// console.log("Halo Selamat Datang!");
// setTimeout(() => console.log("ada yang bisa bantu?"), 1000);
// console.log("Silahkan Datang kembali");

// function tampilkan(nama) {
//   alert(`Halo` + nama);
// }

// tampilkan(`Wira Sukma Saputra`);

// let wira = function (dasar) {
//   alert(`Halo` + dasar);
// };
// wira(`Wira Sukma Saputra`);

// let wira2 = (dasar) => {
//   alert(`Halo` + dasar);
// };
// wira2(`wira sukma Saputra`);

const dada = function (haha) {
  return `Halo, ${haha}`;
};
console.log(dada("Wira Sukma Saputra"));

const menarik = (jaja) => {
  return `Halo, ${jaja}`;
};
console.log(menarik("Wira Sukma Saputra"));



// arrow function
const huhu = (nama, waktu) => {
  return `Selamat ${nama}, ${waktu}`;
};
console.log(huhu("wira", "8 jam"));

const yuyun = (nana) => {
  `Halo, ${nana}`;
};
console.log("Wira");

const dedi = () => `Wira Sukma Saputra`;
console.log(dedi());

let mahasiswa = ["Wira Sukma Saputra", "Wiwi", "Wildan", "triani", "chiara", "eca"];

let jumlah = mahasiswa.map(function (nama) {
  return nama.length;
});
console.log(jumlah);

// let jumlah = mahasiswa.map((nama) => nama.length);
// console.log(jumlah);
