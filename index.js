// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

// Buat Set untuk favorite color & favorite restaurant Monica

let favColorMonica = new Set();
let favRestaurantMonica = new Set();

// Add data favorite color

favColorMonica.add("Yellow");
favColorMonica.add("Pink");
favColorMonica.add("White");
favColorMonica.add("Purple");

// Add data favorite restaurant

favRestaurantMonica.add("Bento");
favRestaurantMonica.add("Sushi");
favRestaurantMonica.add("Pancake");
favRestaurantMonica.add("Eggy");
favRestaurantMonica.add("Tempura");
favRestaurantMonica.add("Bento");
favRestaurantMonica.add("Eggy");
favRestaurantMonica.add("Padang");
favRestaurantMonica.add("Tteok");
favRestaurantMonica.add("Sushi");
favRestaurantMonica.add("Sushi");

// Buat Array yg berisi Object untuk education Monica

const educationMonica = [
  { name: "SD 01", city: "Jakarta", graduate: "2016" },
  { name: "SMP 02", city: "Jakarta", graduate: "2019" },
  { name: "SMA 03", city: "Tangerang" },
];

// Data Monica
const firstUser = {
  name: "Monica",
  gender: "Female",
  age: "17",
  email: "monica@dingdong.com",
  favoriteColor: [...favColorMonica],
  isHavePet: "Yes",
  education: educationMonica,
  favoriteRestaurant: [...favRestaurantMonica],
};

// Buat Set untuk favorite color & favorite restaurant Wendy

let favColorWendy = new Set();
let favRestaurantWendy = new Set();

// Add data favorite color

favColorWendy.add("Blue");
favColorWendy.add("Black");
favColorWendy.add("Grey");

// Add data favorite restaurant

favRestaurantWendy.add("Tempura");
favRestaurantWendy.add("Bento");
favRestaurantWendy.add("Sushi");
favRestaurantWendy.add("Pancake");
favRestaurantWendy.add("Padang");
favRestaurantWendy.add("Katsu");
favRestaurantWendy.add("Geprek");
favRestaurantWendy.add("Pancake");
favRestaurantWendy.add("Eggy");

// Buat Array yg berisi Object untuk education Wendy

const educationWendy = [
  { name: "SD 02", city: "Jakarta", graduate: "2010" },
  { name: "SMP 03", city: "Bogor", graduate: "2013" },
  { name: "SMA 01", city: "Surabaya", graduate: "2016" },
  { name: "Universitas Maju", city: "Tangerang" },
];

// Data Wendy
const secondUser = {
  name: "Wendy",
  gender: "Male",
  age: "23",
  email: "wendy@dingdong.com",
  favoriteColor: [...favColorWendy],
  isHavePet: "No",
  education: educationWendy,
  favoriteRestaurant: [...favRestaurantWendy],
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser);
users.push(secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
  console.log(users.length || users.size);
  console.log(users);
}

main();

module.exports = {
  users,
};
