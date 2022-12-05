//#region one
const a = 5
const b = 6

const add = (num1: number, num2: number) => {
    return num1 + num2
}

console.log(add(a, b))

//#endregion

// //#region two
let message = "hello";
message = "world";

let phone: string;
phone = "234234"
// //#endregion

//#region three
interface Student {
    firstName: string;
    lastName: string;
    roll: number;
    department: DepartmentType;
}

const selim: Student = {
    firstName: 'selim',
    lastName: 'bhai',
    roll: 23423,
    department: 'ICE'
}

type DepartmentType = 'EEE' | 'CSE' | 'ICE';
//#endregion

//#region four
const subtract = (num1: number, num2: number): number => {
    return num1 + num2
}
 
//#endregion

