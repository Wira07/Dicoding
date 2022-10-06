const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

console.log(...favorites);

/* output
Seafood Salad Nugget Soup
*/

const kami = ["kami", "sedang", "hari", "ayah"]
console.log(...kami);

const dasar = ["321", 77, 21, true, false, "kakak saya"]
console.log(dasar[1], dasar[6], dasar[4]);

const object = {
    firstname: "wira sukma saputra",
    lastname: "wijaya kusuma",
    nim: 20210810075,
    isMarried: true,
    nilai: 23.9,
};

console.log(`Halo ${object.firstname}`)
console.log(`Hai, ${object.lastname}`)

const favorite = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

const allFavorite = [favorite, others];

console.log(allFavorite);

/* output
[
  [ 'Seafood', 'Salad', 'Nugget', 'Soup' ],
  [ 'Cake', 'Pie', 'Donut' ]
]
*/

const favorit = ["Seafood", "Salad", "Nugget", "Soup"];
const other = ["Cake", "Pie", "Donut"];

const allFavorit = [...favorit, ...other];

console.log(allFavorit);

/* output
[ 'Seafood', 'Salad', 'Nugget', 'Soup', 'Cake', 'Pie', 'Donut' ]
*/

const obj1 = {
    firstName: 'Obi-Wan',
    age: 30
};
const obj2 = {
    lastName: 'Kenobi',
    gender: 'M'
};

const newObj = {
    ...obj1,
    ...obj2
};

console.log(newObj);

/* output
{ firstName: 'Obi-Wan', age: 30, lastName: 'Kenobi', gender: 'M' }
*/