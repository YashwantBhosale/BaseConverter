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

    let fractionString = [];
    let j = 0;
    let letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    while ((Math.floor(fractionalPart) != fractionalPart) && j <= 10) {
        if (base == 16 && Math.floor(fractionalPart * base) >= 10) {
            fractionString.push(letters[Math.floor(fractionalPart * base) - 10]);
        } else {
            fractionString.push(`${Math.floor(fractionalPart * base)}`);
        }
        fractionalPart = (fractionalPart * base) - Math.floor(fractionalPart * base);
        j++;
    }

    let s2 = fractionString.join("");

    if (s2 != '') {
        let returnString = s + '.' + s2;
        return returnString;
    } else {
        return s;
    }
}

let otherBaseToDecimal = (otherBaseString, base) => {
    let decimalNumber = 0;
    let fractionalDecimalPart = 0;
    let splitArray = otherBaseString.split('.');
    let intString = splitArray[0];

    if (base == 16) {
        let strArray = [];
        if (intString) {
            strArray = Array.from(intString);
            console.log(strArray);
        } else {
            strArray = Array.from(otherBaseString);
        }

        let power = 0;

        for (let i = strArray.length - 1; i >= 0; i--) {
            if (Number.parseInt(strArray[i]) || Number.parseInt(strArray[i]) == 0) {
                decimalNumber = decimalNumber + (Number.parseInt(strArray[i])) * (base ** power);
            } else {
                let letters = ['A', 'B', 'C', 'D', 'E', 'F'];
                let index = letters.indexOf(strArray[i]);
                decimalNumber = decimalNumber + (index + 10) * (base ** power);
            }
            power++;
        }
        if (splitArray[1]) {
            let fractionString = splitArray[1];

            let fractArray = Array.from(fractionString);
            let letters = ['A', 'B', 'C', 'D', 'E', 'F'];
            for (let k = 0; k < fractArray.length; k++) {
                if (letters.includes(fractArray[k])) {
                    fractArray[k] = `${10 + letters.indexOf(fractArray[k])}`;
                }
                fractionalDecimalPart += fractArray[k] * (1 / (16 ** (k + 1)));
            }
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
            fractionalDecimalPart = fractionalDecimalPart + Number.parseInt(fractionPart[j]) * (1 / (base ** (j - 1)));
        }
    }

    return decimalNumber + fractionalDecimalPart;
}


const convertBtn = document.getElementById('Convert');
const input = document.getElementById('input');
const output = document.getElementById('output');
const explaination = document.getElementById('explaination');
const errorToast = document.getElementById('error-toast');

let validateInput = (input, base) => {
    if (base == 16)
        return true;

    let digits = [];
    let inputArr = Array.from(input);

    if (inputArr[0] == '.')
        return false;
    for (let i = 0; i < 10; i++) {
        digits.push(`${i}`);
    }
    digits.push('A', 'B', 'C', 'D', 'E', 'F');
    let validation = digits.splice(0, base);
    for (let j = 0; j < inputArr.length; j++) {
        if (!validation.includes(inputArr[j]) && inputArr[j] != '.') {
            console.log('validation failed because : ', inputArr[j]);
            return false;
        }
    }
    return true;
}

const explain = (inputString, base1, base2) => {

    if (base1 < base2) {
        let intPart = Number.parseInt(inputString);
        let explainationTable = document.createElement('table');
        explainationTable.setAttribute('class', 'explainationTable');

        let newRow = explainationTable.insertRow();
        let cell2 = newRow.insertCell();
        cell2.innerText = `${base1}`;
        let cell1 = newRow.insertCell();
        cell1.innerText = `${intPart}`;
        let cell3 = newRow.insertCell();
        cell3.innerText = ``;
        let temp = intPart;
        intPart = Math.floor(intPart / base1);
        while (temp > 0) {
            newRow = explainationTable.insertRow();
            cell2 = newRow.insertCell();
            cell2.innerText = `${base1}`;
            cell1 = newRow.insertCell();
            cell1.innerText = `${intPart}`;
            cell3 = newRow.insertCell();
            cell3.innerText = `${Math.floor(temp % base1)}`;
            temp = intPart;
            intPart = Math.floor(intPart / base1);
        }

        explaination.appendChild(explainationTable);

        if (Number.parseInt(inputString) != Number.parseFloat(inputString)) {
            let floatPart = Number.parseFloat(inputString) - Number.parseInt(inputString);
            let fractionTable = document.createElement('table');
            let j = 0;

            while (Math.floor(floatPart) != floatPart && j <= 10) {
                let newRow = fractionTable.insertRow();
                let cell1 = newRow.insertCell();
                cell1.innerHTML = `<span>${floatPart.toFixed(4)}</span> </span>&#215;<span> <span>${base1}</span> = <span>${(floatPart * base1).toFixed(4)}</span>`;
                let cell2 = newRow.insertCell();
                cell2.innerHTML = `${Math.floor(floatPart * base1)}`;
                floatPart = (floatPart * base1) - Math.floor(floatPart * base1);
                j++;
            }
            fractionTable.classList.add('explainationTable');
            explaination.appendChild(fractionTable);
        }

    } else {
        explaination.style['flexDirection'] = 'column';
        let intPart = Number.parseInt(inputString);
        let i = 0;

        additionArray = [];

        while (intPart > 0) {
            let newLine = document.createElement('p');
            newLine.innerHTML = `<span>${Math.floor(intPart % 10)}</span><span>&#215;</span><span>${base2}<sup>${i}</sup></span> = <span>${Math.floor(intPart % 10) * (base2 ** i)}</span>`;
            additionArray.push(Math.floor(intPart % 10) * (base2 ** i));
            i++;
            intPart = Math.floor(intPart / 10);
            explaination.appendChild(newLine);
        }
        if (Number.parseInt(inputString) != Number.parseFloat(inputString)) {
            let floatPart = Number.parseFloat(inputString) - Number.parseInt(inputString);

            let floatString = Array.from(floatPart.toFixed(4));
            console.log(floatString);



            for (let k = 2; k < floatString.length; k++) {
                let newLine = document.createElement('p');
                newLine.innerHTML = `<span>${floatString[k]}</span> <span>&#215;</span> ${base2} <sup>-${k - 1}</sup><span> </span> = <span>${Number.parseInt(floatString[k]) * (1 / (base2 ** (k - 1)))}</span>`;
                additionArray.push(Number.parseInt(floatString[k]) * (1 / (base2 ** (k - 1))));
                explaination.appendChild(newLine);
            }
        }

        let newLine = document.createElement('p');
        let sum = 0;
        for (let j = 0; j < additionArray.length; j++) {
            newLine.innerHTML = newLine.innerHTML + `<span>${additionArray[j]}</span>`;
            if (j != additionArray.length - 1)
                newLine.innerHTML += `+`;
            sum = sum + additionArray[j];
        }
        newLine.innerHTML = newLine.innerHTML + `= ${sum}`
        explaination.appendChild(newLine);
        return;
    }
}

const swapBtn = document.getElementById('swap');

swapBtn.addEventListener("click", () => {
    let temp = fromBase.value;
    fromBase.value = toBase.value;
    toBase.value = temp;
    if (output.innerHTML) {
        let temp = input.value;
        input.value = output.innerHTML;
        output.innerHTML = `${temp}`;
        explaination.innerHTML = ``;
    }
});

const resetBtn = document.getElementById('reset');

resetBtn.addEventListener('click', () => {
    input.value = '';
    fromBase.value = 'Binary';
    toBase.value = 'Binary';
    output.innerHTML = ``;
    explaination.innerHTML = ``;
})

convertBtn.addEventListener("click", () => {
    if (input.value.trim() == "") {
        document.querySelector('#error-toast span').innerHTML = "invalid input!";
        errorToast.style.display = 'block';
        setTimeout(() => {
            errorToast.style.display = 'none';
        }, 2000);
    }
    if (document.getElementById('explaination')) {
        document.getElementById('explaination').innerHTML = ``;
    }
    let bases = evaluateBase();
    console.log(bases);


    let numberString = input.value;
    if (validateInput(numberString, bases[0])) {
        let outputNumber = 0;
        if (bases[1] === 10) {
            outputNumber = otherBaseToDecimal(numberString, bases[0]);
        } else {
            outputNumber = decimalToOtherBase(otherBaseToDecimal(numberString, bases[0]), bases[1]);
        }
        if (isNaN(outputNumber)) {
            document.querySelector('#error-toast span').innerHTML = "Opps! something went wrong.. Please check your input!";
            errorToast.style.display = 'block';
            setTimeout(() => {
                errorToast.style.display = 'none';
            }, 2000);
        } else {

            output.innerHTML = `  ${outputNumber}`;
            if (output.offsetWidth < output.scrollWidth) {
                output.style.justifyContent = "start";
                output.style.overflow = "scroll";
            }
            if (bases[0] == 16 || bases[1] == 16) {
                document.getElementById('explaination').innerHTML = '<p>Oops! Explaination Not available</p>';
            }
            else if (bases[1] == 8 && bases[0] != 10) {
                explain(numberString, 10, bases[0]);
                explain(`${otherBaseToDecimal(numberString, bases[0])}`, bases[1], 10);
            }
            else if (bases[0] == 8) {
                explain(numberString, 10, bases[0]);
                if (bases[1] != 10) {
                    explain(`${otherBaseToDecimal(numberString, bases[0])}`, bases[1], 10);
                }
            }
            else if (bases[0] != 16 && bases[0] != 16) {
                explain(numberString, bases[1], bases[0]);
            }



        }
    } else {
        document.querySelector('#error-toast span').innerHTML = "Please enter a valid number ..";
        errorToast.style.display = 'block';
        setTimeout(() => {
            errorToast.style.display = 'none';
        }, 2000);
    }
})
