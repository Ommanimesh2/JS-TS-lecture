// types vs interfaces


//interfaces are essentially a means of describing the shapes of data, like an object.
// types are definitions of data types, like primitive, intersection, union, tuple, or different types

  interface Person {
    name: string,

  }

  const john: Person = {
    name: "John",
    
  }

interface User {
    id: number;
    name: string;
    age: number;
    email?: string;
  }
  
const user1: User = {
    id: 1,
    name: 'John Smith',
    age: 30,
    email: 'john@example.com'
  };
//   interface Person {
//     name: string
//   }
  
//   interface Person {
//     age: number
//   }
  
//   const john: Person = {
//     name: "John",
//     age: 26,
//   }


interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    categories: string[];
    tags: string[];
    images: {
      alt: string;
    }[];
    relatedProducts?: Product[];
    reviews: {
      user: string;
      text: string;
      rating: number;
    }[];
    availableColors: {
      name: string;
      hex: string;
    }[];
    dimensions?: {
      width: number;
      height: number;
      depth: number;
    };
  }


const product: Product = {
    id: 1,
    name: 'Fancy Sofa',
    description: 'A fancy sofa made of high-quality materials',
    price: 999.99,
    categories: ['Furniture', 'Living Room'],
    tags: ['Sofa', 'Luxury', 'Comfortable'],
    images: [
      { url: 'https://example.com/images/sofa1.jpg', alt: 'Fancy Sofa' },
      { url: 'https://example.com/images/sofa2.jpg', alt: 'Fancy Sofa Angle View' },
    ],
    relatedProducts: [
      {
        id: 2,
        name: 'Fancy Armchair',
        description: 'A fancy armchair made of high-quality materials',
        price: 499.99,
        categories: ['Furniture', 'Living Room'],
        tags: ['Armchair', 'Luxury', 'Comfortable'],
        images: [
          { url: 'https://example.com/images/armchair1.jpg', alt: 'Fancy Armchair' },
          { url: 'https://example.com/images/armchair2.jpg', alt: 'Fancy Armchair Angle View' },
        ],
        reviews: [
          { user: 'Jane', text: 'This armchair is so comfortable!', rating: 5 },
          { user: 'Bob', text: 'Great value for the price', rating: 4 },
        ],
        availableColors: [
          { name: 'Black', hex: '#000000' },
          { name: 'White', hex: '#FFFFFF' },
        ],
        dimensions: { width: 100, height: 90, depth: 80 },
      },
      {
        id: 3,
        name: 'Fancy Ottoman',
        description: 'A fancy ottoman made of high-quality materials',
        price: 199.99,
        categories: ['Furniture', 'Living Room'],
        tags: ['Ottoman', 'Luxury', 'Comfortable'],
        images: [
          { url: 'https://example.com/images/ottoman1.jpg', alt: 'Fancy Ottoman' },
          { url: 'https://example.com/images/ottoman2.jpg', alt: 'Fancy Ottoman Angle View' },
        ],
        reviews: [
          { user: 'Alice', text: 'Love this ottoman!', rating: 5 },
          { user: 'Charlie', text: 'Great addition to my living room', rating: 4 },
        ],
        availableColors: [
          { name: 'Red', hex: '#FF0000' },
          { name: 'Green', hex: '#00FF00' },
        ],
        dimensions: { width: 80, height: 40, depth: 80 },
      },
    ],
    reviews: [
      { user: 'John', text: 'This sofa is amazing!', rating: 5 },
      { user: 'Emily', text: 'So comfortable!', rating: 5 },
      { user: 'David', text: 'Great quality for the price', rating: 4 },
    ],
    availableColors: [
      { name: 'Brown', hex: '#A52A2A' },
      { name: 'Beige', hex: '#F5F5DC' },
    ],
  };





const btn : Element | null = document.querySelector('.btn')

btn?.addEventListener('click', (e)=>{
    handleClick(e)
})

const handleClick=(e:MouseEvent)=>{
  console.log(e.target)
}


const myValue: string = "jsfsadf";
let myVariable: number = 1;
// let sum:number = myValue+myVariable


// let myBoolean: boolean = true;

// console.log(myVariable);

let myValues: string[] = [1, 2, 3];
// let myValues2: Array<string> = ["a"];


// const data: Record<number, string> = {
//   10: "megan",
//   20: "lori",
// };

// data[5] = "joe";

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// myValues.forEach((a) => console.log(a));
// const multipliedValues = myValues.map((a) => a * 10);


// function addNumbers(a: number, b: number): number {
//     return a + b;
//   }
    
// const addStrings = (str1: string, str2: string = ""): string =>
//     `${str1} ${str2}`;
  
const format = (title: string, param: string | number): string =>
    `${title} ${param}`;
  
// const printFormat = (title: string, param: string | number): void => {
//     console.log(format(title, param));
//   };
  
const fetchData = (url: string): Promise<string> =>
    Promise.resolve(`Data from ${url}`);
  
//   function introduce(salutation: string, ...names: string[]): string {
//     return `${salutation} ${names.join(" ")}`;
//   }
  
function getName(user: { first: string; last: string }): string {
    return `${user?.first ?? "first"} ${user?.last ?? "last"}`;
  }