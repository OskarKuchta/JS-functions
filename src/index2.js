// Finding Nemo
const findNemo = (a) => {
    if(a.match(/nemo/gi)) {
        return `I found Nemo at ${a.split(' ').indexOf("Nemo") + 1}!`;
    }
    else {
        return "I can't find Nemo :(";
    }
}
console.log(findNemo("I am finding Nemo !"));
console.log(findNemo("Nemo is me"));
console.log(findNemo("I Nemo am"));
console.log(findNemo("Don't have nem o"));

// 25-Mile Marathon
const marathonDistance = (a) => {
    let absolute = a.map((element) => Math.abs(element));
    let count = absolute.reduce((item, sum) => item + sum);
    return count >= 25 ? true : false;
}
console.log(marathonDistance([1, 2, 3, 4]));
console.log(marathonDistance([1, 9, 5, 8, 2]));
console.log(marathonDistance([-6, 15, 4]));

// Move Capital Letters to the Front
capToFront = (a) => {
    return (a.match(/[A-Z]/g) + a.match(/[a-z]/g)).replaceAll(",", "");
}
console.log(capToFront("hApPy"));
console.log(capToFront("moveMENT"));
console.log(capToFront("shOrtCAKE"));