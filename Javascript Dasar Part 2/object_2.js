const spaceship = {
  name: "Millenium Falcon",
  manufacturer: "Corellian Engineering Corporation",
  maxSpeed: 1200,
  color: "Light gray"
};

spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;
console.log(spaceship);

/* output
{
  name: 'Millenium Falcon',
  manufacturer: 'Corellian Engineering Corporation',
  maxSpeed: 1300,
  color: 'Glossy red'
}
 */

const daerah = {
  pertama: "saya sedang di uniku",
  kedua: "saya lagi belajar javascript",
  ketiga: "kamu adalah aku yang sedang belajar bahasa inggris",
  isAge: 20,
  "Hai, Selanat datang ": "di negara indonesia"
};

console.log(` mahasiswa uniku ${daerah.pertama} ${daerah.isAge}`)
console.log(` mahasiswa unisa ${daerah.kedua}`)
console.log(`saya sedang ${daerah["Hai, Selamat datang"]}`)

const spaceship = {
  name: "Millenium Falcon",
  manufacturer: "Corellian Engineering Corporation",
  maxSpeed: 1200,
  color: "Light gray"
};

spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;

delete spaceship.manufacturer;

console.log(spaceship);

/* output
{ name: 'Millenium Falcon', maxSpeed: 1300, color: 'Glossy red' }
*/