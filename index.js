const fromBase = document.getElementById("fromBase");
const toBase = document.getElementById("toBase");
let evaluateBase = () => {
    let base1 = fromBase.value;
    let base2 = toBase.value;
    let returnArray = [];

    if (base1 == 'Binary') {
        returnArray.push(2);
    } else if (base1 == 'Octal') {
        returnArray.push(8);
    } else if (base1 == 'Decimal') {
        returnArray.push(10);
    } else {
        returnArray.push(16);
    }
    if (base2 == 'Binary') {
        returnArray.push(2);
    } else if (base2 == 'Octal') {
        returnArray.push(8);
    } else if (base2 == 'Decimal') {
        returnArray.push(10);
    } else {
        returnArray.push(16);
    }
    return returnArray;
}

let decimalToOtherBase = (decimalNumber, base) => {
    let otherBaseString = [];
    let fractionalPart = decimalNumber - Math.floor(decimalNumber);
    console.log("fractional part in decimal to other base : ", fractionalPart);
    while (Math.floor(decimalNumber) > 0) {
        let digitString = `${Math.floor(decimalNumber % base)}`;
        if (base == 16 && digitString >= 10) {
            let letters = ['A', 'B', 'C', 'D', 'E', 'F'];
            digitString = letters[Number.parseInt(digitString) - 10];
        }
        console.log(digitString);
        otherBaseString.unshift(digitString);
        decimalNumber = decimalNumber / base;
    }
    let s = otherBaseString.join("");
    console.log(s);

    let fractionString = [];
    let  j = 0;
    console.log("base : ", base, "fractional part ", fractionalPart);
    while((Math.floor(fractionalPart) != fractionalPart) && j <= 10){
        console.log('to be unshifted = ', Math.floor(fractionalPart * base), fractionalPart * base);
        fractionString.push(`${Math.floor(fractionalPart * base)}`);
        console.log('fractionstring after unshifting ; ', fractionString);
        fractionalPart = (fractionalPart * base) - Math.floor(fractionalPart * base);
        j++;
    }   
    
    console.log(fractionString);

    let s2 = fractionString.join("");

    console.log('return string : ', s + '.' + s2);
    if(s2 != ''){
        let returnString = s + '.' + s2;
        return returnString;
    }else{
        return s;
    }
}

let otherBaseToDecimal = (otherBaseString, base) => {
    let decimalNumber = 0;
    let fractionalDecimalPart = 0;
    if (base == 16) {
        let strArray = Array.from(otherBaseString);
        console.log(strArray);

        let power = 0;
        for (let i = strArray.length - 1; i >= 0; i--) {
            if (Number.parseInt(strArray[i])) {
                decimalNumber = decimalNumber + (Number.parseInt(strArray[i])) * (base ** power);
            } else {
                let letters = ['A', 'B', 'C', 'D', 'E', 'F'];
                let index = letters.indexOf(strArray[i]);
                // console.log(index);

                decimalNumber = decimalNumber + (index + 10) * (base ** power);
            }
            power++;
        }
    } else {
        let intPart = Number.parseInt(otherBaseString);
        let temp = Number.parseFloat(otherBaseString);

        let fractionPart = temp - intPart;
        fractionPart = Array.from(fractionPart.toFixed(4));
        console.log(temp, intPart, fractionPart);
        let otherBaseNumber = Number.parseInt(otherBaseString);
        let i = 0;
        while (otherBaseNumber > 0) {
            decimalNumber = decimalNumber + (otherBaseNumber % 10) * (base ** i);
            i++;
            otherBaseNumber = Math.floor(otherBaseNumber / 10);
        }
       
        for (let j = 2; j < fractionPart.length; j++) {
            fractionalDecimalPart = fractionalDecimalPart + Number.parseInt(fractionPart[j]) * (1 / (base ** (j-1)));
            console.log(Number.parseInt(fractionPart[j]), (1 / (base ** (j))));
        }
        console.log("fractional decimal part : ", fractionalDecimalPart);
    }

    console.log("number returned by other base to decimal ", decimalNumber+fractionalDecimalPart);
    return decimalNumber+fractionalDecimalPart;
}


const convertBtn = document.getElementById('Convert');
const input = document.getElementById('input');
const output = document.getElementById('output');
const explaination = document.getElementById('explaination');

let validateInput = (input, base) => {
    if(base == 16)
        return true;

    let digits = [];
    let inputArr = Array.from(input);

    if(inputArr[0] == '.')
        return false;
    for(let i=0; i < 10; i++){
        digits.push(`${i}`);
    }
    digits.push('A', 'B', 'C', 'D', 'E', 'F');
    let validation = digits.splice(0, base);
    console.log("validation : ", validation);
    for(let j = 0; j < inputArr.length; j++){
        if(!validation.includes(inputArr[j]) && inputArr[j]!='.'){
            console.log('validation failed because : ', inputArr[j]);
            return false;
        }
    } 
    return true;
}


convertBtn.addEventListener("click", () => {
    let bases = evaluateBase();
    console.log(bases);

    
    let numberString = input.value;
if(validateInput(numberString, bases[0])){
    let outputNumber = 0;
    // if(bases[0] != 10){
        outputNumber = decimalToOtherBase(otherBaseToDecimal(numberString, bases[0]), bases[1]);
    // }else{
    //     outputNumber = decimalToOtherBase(Number.parseFloat(numberString), bases[1]);
    // }
    output.innerHTML = `${outputNumber}`;
}else{
    alert('Please enter valid number...');
}
})
