// const kami = {
//   firstname: "Wira Sukma Saputra",
//   nim: 20210810075,
//   kelas: "TINFC 2021 A",
//   prodi: "Teknik Informatika",
//   age: 20,
// };
// console.log(`Halo, Nama Saya ${kami.firstname} ${kami.age}`);
// console.log(`Saya Berasal dari Prodi ${kami.prodi} ${kami.kelas}`);
// console.log(`Kami adalah mahasiswa ${kami.prodi} ${kami.age}`);

// // materi pengenalan object di javascript

// const uniku = {
//   firstname: "Wira Sukma Saputra",
//   localStorage: "SSD",
//   budaya: "sunda indonesia",
//   nim: 20210810075,
//   isWira: true,
//   "Hello Dunia ": "Saya Wira Sukma Saputra",
// };

// console.log(`halo, nama saya ${uniku.firstname}, ${uniku.budaya}`);
// console.log(`kami, akan menyimpan di penyimpanan ${uniku.localStorage}`);
// console.log(`Salam dari ${uniku["Hello Dunia"]}`);

// const kamu = ["kami", "sedang", "belajar", "bahasa", "pemograman"];
// const dasar = ["dasar", "pemograman", "javascript", "PHP"];

// const alloperator = [...kamu, ...dasar];

// console.log(alloperator);

// const pemograman = ["halo", "Wira", "Sukma", "Saputra", 20, 21.22];

// const satu = pemograman[0];
// const dua = pemograman[1];
// const tiga = pemograman[2];
// const empat = pemograman[3];
// const lima = pemograman[4];

// console.log(satu, dua, tiga, empat, lima);

// const jajan = {
//   firstName: "wira sukma saputra",
//   lastname: "wijaya kusuma",
//   age: 20,
//   isMe: true,
// };

// const { firstName, lastname, age, isMe } = jajan;

// console.log(firstName, lastname, age, isMe);

// const hp = {
//   firstName: "Wira Sukma",
//   lastname: "saputra",
//   nim: "20210810075",
//   isMe: true,
// };

// console.log(`Halo, ${hp.firstName},${hp.lastname}`);
// console.log(`hai, ${hp.isMe}, ${hp.nim}`);

// if (123 === "123") console.log("Dicoding Indonesia");
// else if ("123" == 123) console.log("Bandung Kota");
// else console.log("Front-End Web Developer");

// const language = "Japanese";
// let greeting = "";
// switch (language) {
//   case "English":
//     greeting = "Good Morning!";
//     break;
//   case "French":
//     greeting = "Bonjour!";
//     break;
//   case "Japanese":
//     greeting = "Ohayou Gozaimasu!";
//   default:
//     greeting = "Selamat Pagi!";
// }

// console.log(greeting);
// const profile = {
//   name: "Wira Sukma Saputra",
//   occupation: ["Frontend Developer", "Design", "Student"],
//   education: "Informatics Engineering",
//   showcase: "Wira07",
//   githHub: "https://github.com/Wira07",
//   languages: ["Indonesian", "Sundanese"],
// };

// console.log(`Perkenalkan Nama saya ${profile.name}, Salam Kenal semua`);
// console.log(`Saya Mengambil Jurusan ${profile.education}di universitas kuningan`);

// let mahasiswa = ["Wira", "agum", "fikri"];

// let jumlah = mahasiswa.map((nama) => ({ nama: nama, jumlahhuruf: nama.length }));
// console.table(jumlah);

// let tamu = function (nama) {
//   return `Halo ${nama}`;
// };

// console.log(tamu("Uniku Jaya"));

// let hari = (sejarah) => {
//   return `Halo, ${sejarah}`;
// };
// console.log(hari("Wira Sukma Saputra"));

// let mahasiswa = ["Wira Sukma Saputra", "Wiwi", "Wildan", "triani", "chiara", "eca"];

// let jumlah = mahasiswa.map(function (nama) {
//   return nama.length;
// });
// console.log(jumlah);

//function deklerasion
let wira = function (cucu) {
  return `Halo ${cucu}`;
};
console.log(wira("Wira Sukma Saputra"));

//function Expression

function wira2(nama) {
  return `Halo ${nama}`;
}
console.log(wira2("Wira Sukma Saputra"));
