let age = 24;
export const person = {
    name: "Oskar",
    age: 24,
    height: 176
}
export const car = {
    type: "sedan",
    model: "Audi",
    year: 2023,
    wash: function()  {
        return this.model + " is washing...";
    }
}
export default age;