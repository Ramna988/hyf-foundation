function getFullName(firstName, surname, useFormalName, isFemale) {
    if (useFormalName === true) {
        if (isFemale === true) {
            return "Lady " + firstName + " " + surname;
        } else {
            return "Lord " + firstName + " " + surname;
        }
    } else {
        return firstName + " " + surname;
    }
}

const fullName1 = getFullName("Manish", "Kasana", true, false); 
const fullName2 = getFullName("Ramna", "Mavi", true, true);   
const fullName3 = getFullName("abc", "ultra", false);           

console.log(fullName1); 
console.log(fullName2); 
console.log(fullName3); 
