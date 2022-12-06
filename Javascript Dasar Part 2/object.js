const user = {
  firstName: "Luke",
  lastName: "Skywalker",
  age: 19,
  isJedi: true,
};

console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur saya ${user.age} tahun`);

/* output
Halo, nama saya Luke Skywalker
Umur saya 19 tahun
*/

const wira = {
  nama_lengkap: "Wira Sukma Saputra",
  nim: "20210810075",
  Kelas: "Tinfc 2021 A",
  Umur: 20,
  isWira: true,
};

console.log(`Halo, nama saya ${wira.nama_lengkap} ${wira.nim}`);

const darah = {
  firstName: "Luke",
  lastName: "Skywalker",
  age: 19,
  isJedi: true,
  "home world": "Tattooine",
};
console.log(`Halo, nama saya ${darah.firstName} ${darah.lastName}`);
console.log(`Umur saya ${darah.age} tahun`);
console.log(`Saya berasal dari ${darah["home world"]}`);
/* output
Halo, nama saya Luke Skywalker
Umur saya 19 tahun
Saya berasal dari Tattooine
*/

const gagah = {
  pertama: "Wira Sukma Saputra",
  Terakhir: "Kami Sedang Belajar Javascript",
  Umur: 20,
  isWira: true,
};

console.log(`Kami, sedang belajar ${gagah.pertama} ${gagah.Umur}`);
