import products from "./data.js";
import  {bat,bowl,ar} from "./data.js";

console.log(products);

let productCategories=products.map(
    (prod)=>{
        return prod.category;
    }
)

let uniqueCategories= new Set(productCategories);
console.log(uniqueCategories)

let allCategoreis=[...uniqueCategories,"All"]

console.log(allCategoreis)


let x=[...new Set(products.map((prod)=>prod.category)),"All"];

console.log(x)

let cars=["BMW","Audi","Mercedes"];

let [a,...x1]=cars
console.log(x1)


let numbers=[1,2,3,4,5,6]

let [q,w,...f]=numbers

console.log(q) //1
console.log(w) //2
console.log(f) //[3,4,5,6]

console.log(typeof q)//number
console.log(typeof w)//number
console.log(typeof f)//object


let newNumbers=[...numbers,7]
console.log(newNumbers)


let student={
    rno:1,
    sname:"Alice",
    per:78.5
}

console.log(student)

student={...student,grade:'A'}
console.log(student)