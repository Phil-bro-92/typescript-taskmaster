let name: string;
let lastName: any; //Any type - not recommended as goes again TS
let personName: unknown; //Any type (use instead of any)
let age: number | string; //Union - can be both a number or a string
let isStudent: boolean;
let hobbies: string[]; //Array of strings
let role: [number, string]; //Tuple

let lotsOfPeople: Person[]; //Array of Person objects

let printName: (name: string) => never; //Does not return anything (void returns undefined)

// type Person = {
//     name: string;
//     age?: number; //optional property
// };

interface Person {
    name: string;
    age: number;
}

interface Guy extends Person {
    profession: string;
}

type X = {
    a: string;
    b: number;
};

type Y = X & {
    //contains X properties also
    c: string;
    d: number;
};

export {};
