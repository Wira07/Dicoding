// const wira = (sebutan) => {
//   console.log(`Hello ${sebutan}`);
// };

// wira("wira sukma saputra");

const initialMemoryUsage = process.memoryUsage().heapUsed;
const yourName = process.argv[2];
const environment = process.env.NODE_ENV;

for (let i = 0; i <= 10000; i++) {
  // Proses looping ini akan membuat penggunaan memori naik
}

const currentMemoryUsage = process.memoryUsage().heapUsed;
console.log(`Hai, ${"wira sukma saputra"}`);
console.log(`Mode environment: ${"Kampus Fkom"}`);
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);
