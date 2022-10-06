const tamu = prompt('Siapakah Anda?');
alert('Selamat datang ' + tamu + '!');
let pesan = 'Halo user!';
alert(pesan);

let nama = Number(prompt("Masukan Sebuah Angka"))
console.log(typeof nama)
const firstname = document.createElement('p')
console.log(firstname)

const hajar = document.createElement('h1')
console.log(hajar)

const firstName = document.createElement('p')
firstname.innerText = 'wira sukma saputra'

const newElement = document.createElement('img');
newElement.setAttribute('src', 'https://picsum.photos/200/300');

const gambar = document.getElementById('gambar');
gambar.setAttribute('width', 300)
gambar.setAttribute('height', 215)

const buttons = document.querySelectorAll('.button');
const playButton = buttons[3];

const dicoding = document.getElementById('dicodingLink')
dicoding.innerText = "Belajar Programming dicoding";