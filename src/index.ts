
// **********************************************
// ******************* BÖLÜM 1 ******************
// **********************************************
const kardesPayi = (name?: string) => {
  name
    ? console.log(`Bir Tane ${name} için, bir de benim için`)
    : console.log(`Bir Tane senin için bir tane benim için`);
};
kardesPayi("emre");
kardesPayi();



// **********************************************
// ******************* BÖLÜM 2 ******************
// **********************************************
function isLeapYear(year: number): boolean {

  return (year % 4 == 0 && year % 100 !== 0) || year % 400 === 0;
}
const leapYear24 = isLeapYear(2024); 
const leapYear21 = isLeapYear(2021); 
const leapYear20 = isLeapYear(2020); 
const leapYear19 = isLeapYear(2019); 
console.log(leapYear24, leapYear21, leapYear20, leapYear19);


// OBJELER 
// SORU 1 Çözümü;
interface Movie {
  title: string;
  originalTitle?: string;
  director: string;
  releaseYear: number;
  boxOffice: {
    budget: number;
    grossUS: number;
    grossWorldwide: number;
  };
}

const dune: Movie = {
  title: "Dune",
  originalTitle: "Dune Part One",
  director: "Denis Villeneuve",
  releaseYear: 2021,
  boxOffice: {
    budget: 165000000,
    grossUS: 108327830,
    grossWorldwide: 400671789,
  },
};

const cats: Movie = {
  title: "Cats",
  director: "Tom Hooper",
  releaseYear: 2019,
  boxOffice: {
    budget: 95000000,
    grossUS: 27166770,
    grossWorldwide: 73833348,
  },
};


// SORU 2;
function getProfit(movie: Movie) {
  return movie.boxOffice.grossWorldwide - movie.boxOffice.budget;
}
const profitDune = getProfit(dune);
const profitCats = getProfit(cats);
console.log(`profitDune:${profitDune},| profitCats:${profitCats}`);

//Arrayler
// **********************************************
// ******************* BÖLÜM 1 ******************
// **********************************************
const ages: string[] = [];



// **********************************************
// ******************* BÖLÜM 2 ******************
// **********************************************
const gameBoard: string[][] = [
  ["Fahrettin", "Emre", "Uçar"],
  ["Sude", "Ayla", "Yıldız"],
];


// **********************************************
// ******************* BÖLÜM 3 ******************
// **********************************************
type Product = {
  name: string;
  price: number;
};

// **********************************************
// ******************* BÖLÜM 4 ******************
// **********************************************
const getTotal = (array: Product[]): number => {

  return array.reduce((totalPrice, product) => totalPrice + product.price, 0);
};

const products: Product[] = [
  { name: "product1", price: 350},
  { name: "product2", price: 450 },
  { name: "product3", price: 550 },
];

const total = getTotal(products);
console.log("Ürünlerin Toplam Fiyatı:" + total);

// UNİONLAR 
// **********************************************
// ******************* BÖLÜM 1 ******************
// **********************************************
let highScore: number | boolean;
highScore = 1;
highScore = true;

// **********************************************
// ******************* BÖLÜM 2 ******************
// **********************************************

let stuff: number[] | string[];
stuff = ["Fahrettin", "Emre", "Uçar"];
stuff = [0, 1, 2,];

// **********************************************
// ******************* BÖLÜM 3 ******************
// **********************************************


type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

// **********************************************
// ******************* BÖLÜM 4 ******************
// **********************************************
type SkiSchoolStudent = {
  name: string;
  age: number;
  sport: "ski" | "snowboard";
  level: SkillLevel;
};

// **********************************************
// ******************* BÖLÜM 5 ******************
// **********************************************

type RGB = {
  r: number;
  g: number;
  b: number;
};
type HSL = {
  h: number;
  s: number;
  l: number;
};

let colors: (RGB | HSL)[] = [];

// **********************************************
// ******************* BÖLÜM 6 ******************
// **********************************************

const greet = (name: string | string[]) => {

  if (Array.isArray(name)) {
    name.forEach((isim) => {
      console.log(`Merhaba ${isim}`);
    });
  } else {
    console.log(`Merhaba ${name}`);
  }
};
greet("Emre");
greet(["Sude", "Ayla", "Yıldız"]);
