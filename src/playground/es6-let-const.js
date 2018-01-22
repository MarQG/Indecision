var nameVar = "Ferenc";
console.log('nameVar', nameVar);

let nameLet = "Ferenc";
nameLet = "Jen";
console.log('nameLet', nameLet);

const nameConst = "Ferenc";
console.log("nameConst", nameConst);

function getPetName(){
    let petName = "Miko";
    return petName;
}

const petName = getPetName();
console.log(petName);

//block level scoping

const fullName = "Ferenc Gutierrez";
let firstName
if(fullName){
    firstName = fullName.split(" ")[0];
    console.log(firstName);
}

console.log(firstName);