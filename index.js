const fromBase = document.getElementById("fromBase");
const toBase = document.getElementById("toBase");
let evaluateBase = () => {
    let base1 = fromBase.value;
    let base2 = toBase.value;
    let returnArray = [];
    
    if(base1 == 'Binary'){
        returnArray.push(2);
    }else if(base1 == 'Octal'){
        returnArray.push(8);
    }else if(base1 == 'Decimal'){
        returnArray.push(10);
    }else{
        returnArray.push(16);
    }
    if(base2 == 'Binary'){
        returnArray.push(2);
    }else if(base2 == 'Octal'){
        returnArray.push(8);
    }else if(base2 == 'Decimal'){
        returnArray.push(10);
    }else{
        returnArray.push(16);
    }
    return returnArray;
}

let decimalToOtherBase = (decimalNumber, base) => {
    let otherBaseString = [];
    while(Math.floor(decimalNumber) > 0){
        otherBaseString.unshift(`${Math.floor(decimalNumber%base)}`);
        decimalNumber = decimalNumber / base; 
    }
    let s = otherBaseString.join("");
    console.log(s);
    return s;
}

let otherBaseToDecimal = (otherBaseString, base) => {
    let decimalNumber = 0;
    let otherBaseNumber = Number.parseInt(otherBaseString);
    let i = 0;
    while(otherBaseNumber > 0){
        decimalNumber = decimalNumber + (otherBaseNumber%10) * (base ** i);
        i++;
        otherBaseNumber = Math.floor(otherBaseNumber/10);
    }
    return decimalNumber;
}


const convertBtn = document.getElementById('Convert');
const input = document.getElementById('input');
const output = document.getElementById('output');
const explaination = document.getElementById('explaination');

convertBtn.addEventListener("click", () => {
    let bases = evaluateBase();
    console.log(bases);

    let numberString = input.value;

    let outputNumber = decimalToOtherBase(otherBaseToDecimal(numberString, bases[0]), bases[1]);
    output.innerHTML = `${outputNumber}`;
})
