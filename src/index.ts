//primitive date type


// **** JS ******* TS ********
//    number  ----   any 
//   string   -----  unknown
//   boolean  -----  never
//   null     -----  unum
//   undefined ----  tuple
//   object    ----  



// let age: number = 20

// age = 4

// let nam: string = 'rakib'


// if (age < 50) 
//     age += 10;

// console.log(age);


// ****  any type =>
// let sales = 123_456_789
// let course= 'Typescript'
// let is_published = true

// let frag


// function render(document:any) {
//     console.log(document);

// }

//******  Array ==>
// let numbers: number[] = [1, 2, 3]

// numbers.forEach( n => n.toFixed )

//*****  tuple  ==>
// let user: [number, string] = [1, 'rakib']


//   ******  enums ==>
// const small =1 
// const medium = 2
// const large =3  


// const enum  Size {Small = 1, Medium, Large}
// let mySize : Size = Size.Medium
// console.log(mySize)


// ********* function ==>


// function calculateTax(income: number, taxYear?: number): number{
//     if ((taxYear|| 2022) < 50) 
//         return income*2
//     return income*3
// }
// calculateTax(100)


// function calculateTax(income: number, taxYear=2022): number{
//     if (taxYear < 50) 
//         return income*2
//     return income*3
// }
// calculateTax(100)



//Object ==>
// let employee: {
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void
// } = {
//     id: 1,
//     name: 'rakib',
//     retire: (date: Date) => {
//         console.log(date)
//     }
// }

// employee.id = 2


// Aliases Type==>
// type Employee = {
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void
// }

// let employee:Employee = {
//     id: 1,
//     name: 'rakib',
//     retire: (date: Date) => {
//         console.log(date)
//     }
// }


//Union Types =>
// function kgToLbs(weight:number | string):number {
//Narrowing
//     if (typeof weight === 'number') 
//         return weight * 2.2
//     else
//         return parseInt(weight) *2.2
// }
// kgToLbs(10)
// kgToLbs('10kg')



// Intersection Types =>
// let weight: number & string

// type Draggable={
//     drag:()=> void
// }
// type Resizable={
//     resize:()=> void
// }

// type UiWidget = Draggable & Resizable

// let textBox : UiWidget={
//     drag:()=>{},
//     resize:()=> {}
// }


//Literal types =>

//Literal (exact, specific)
// type Qty = 50 | 100
// let qty:Qty =  100

//Nullable Types =>

// function greet(name:string | null | undefined)  {
//     if (name) 
//         console.log(name.toUpperCase());
//     else
//     console.log('Hola!');
// }
// greet(null)
// greet(undefined)


// Optional Chaining =>
type Customer = {
    birthDay?: Date
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthDay: new Date() }
}

let customer = getCustomer(10)
// if (customer !== null && customer !== undefined)
    // console.log(customer.birthDay);
//Optional property access operator
 console.log(customer?.birthDay?.getFullYear());

//Optional element access operator=>
// customer?.[0]

//Optional Call
// let log: any = null
// log?.('a')