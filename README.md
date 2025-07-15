# BaseConverter
# Overview

This project is a base conversion utility that allows users to convert numbers between different numerical bases, including Binary, Octal, Decimal, and Hexadecimal. The application also provides detailed explanations of the conversion process for educational purposes. It is designed for anyone who needs to understand and perform base conversions, such as students learning about number systems or developers working on related projects.

# Development Setup

This section will be included if deployment or environment setup files are available. Based on the provided code, no specific deployment files (like a Dockerfile or environment configurations) are present. Instructions are therefore not included.

# Function/Class Documentation

## evaluateBase

- **Purpose:** Evaluates the selected bases from the user interface and returns their corresponding numeric values.
- **Parameters:** None.
- **Return Type:** `Array<number>` - An array containing two numeric values representing the bases selected by the user for conversion.
- **Inline Comments:**
    - Uses the `fromBase` and `toBase` HTML elements to determine the selected bases. Assumes valid inputs.
- **Snippet:**
```javascript
let evaluateBase = () => {
    let base1 = fromBase.value;
    let base2 = toBase.value;
    let returnArray = [];
    // Logic to determine base numeric values...
    return returnArray;
}
```

## decimalToOtherBase

- **Purpose:** Converts a decimal number to a specified base.
- **Parameters:**
    - `decimalNumber` (`number`): The decimal number to convert.
    - `base` (`number`): The base to convert the decimal number to (e.g., Binary, Octal, Hexadecimal).
- **Return Type:** `string` - A string representation of the number in the new base.
- **Inline Comments:**
    - Handles the integer and fractional parts of the decimal number.
    - Uses letters A-F for Hexadecimal conversion.
- **Snippet:**
```javascript
let decimalToOtherBase = (decimalNumber, base) => {
    let otherBaseString = [];
    // Logic for conversion...
    return returnString;
}
```

## otherBaseToDecimal

- **Purpose:** Converts a number from another base (Binary, Octal, Hexadecimal) to decimal.
- **Parameters:**
    - `otherBaseString` (`string`): The string representation of the number in the original base.
    - `base` (`number`): The base of the provided number.
- **Return Type:** `number` - The decimal equivalent of the input number.
- **Inline Comments:**
    - Deals with both integer and fractional parts based on input base.
    - Assumes valid input format.
- **Snippet:**
```javascript
let otherBaseToDecimal = (otherBaseString, base) => {
    let decimalNumber = 0;
    // Logic for conversion...
    return decimalNumber + fractionalDecimalPart;
}
```

## validateInput

- **Purpose:** Validates the input number conforming to the specified base.
- **Parameters:**
    - `input` (`string`): The input string representing the number.
    - `base` (`number`): The base against which to validate the input.
- **Return Type:** `boolean` - Returns true if the input is valid, else false.
- **Inline Comments:**
    - Ensures characters in the input match the valid range for the selected base.
- **Snippet:**
```javascript
let validateInput = (input, base) => {
    if (base == 16)
        return true;
    // Logic to validate input...
    return true;
}
```

## explain

- **Purpose:** Generates a detailed explanation of the conversion process from one base to another, displaying the steps taken.
- **Parameters:**
    - `inputString` (`string`): The number being converted.
    - `base1` (`number`): The base of the input number.
    - `base2` (`number`): The target base for conversion.
- **Return Type:** `void` - This function generates HTML content rather than returning a value.
- **Inline Comments:**
    - Constructs an explanation table for both integer and fractional parts of the conversion.
- **Snippet:**
```javascript
const explain = (inputString, base1, base2) => {
    // Logic to explain the conversion process...
}
```

## Event Listeners

### Convert Button Event Listener

- **Purpose:** Triggers the base conversion process when the convert button is clicked. Validates inputs, performs conversions, and displays the result or an error message.
- **Inline Comments:**
    - Handles various validation and output scenarios.
- **Snippet:**
```javascript
convertBtn.addEventListener("click", () => {
    // Logic to validate input and perform conversion...
});
```

### Swap Button Event Listener

- **Purpose:** Swaps the selected fromBase and toBase input values for user convenience.
- **Inline Comments:**
    - Updates the input values accordingly.
- **Snippet:**
```javascript
swapBtn.addEventListener("click", () => {
    // Logic to swap base selections...
});
```

### Reset Button Event Listener

- **Purpose:** Resets all fields to their default states when clicked.
- **Inline Comments:**
    - Clears input fields and explanation area.
- **Snippet:**
```javascript
resetBtn.addEventListener('click', () => {
    // Logic to reset the application state...
});
```

# Dependencies

- No explicit dependencies were provided in the code snippet, but the following are inferred:
    - **DOM Manipulation:** The script assumes a DOM environment to interact with via `document.getElementById()`.
    - **Event Handling:** Utilizes native JavaScript event listeners for user interaction.

# Notes

- This documentation assumes the input elements are correctly defined in the HTML structure, particularly the IDs associated with each user interface element referenced in the JavaScript code.
- The implementation assumes that there are no additional error handling or edge cases that might affect input beyond what is written in `validateInput`.
- It also assumes that the use of console logs for debug information is intended for development purposes and not a part of the final product output.
## 🤝 Contributing

We welcome contributions from the community! If you'd like to help improve this project, follow the steps below to get started:

### 🛠️ Setup Instructions

1. **Fork this repository** and clone it locally:

   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_FORK.git
   cd YOUR_FORK

   ```

2. Follow the instructions above to run the project locally

## 🙌 How to Contribute

- Create a new branch for your feature or bug fix:

```bash
git checkout -b feature/your-feature-name
```

- Make your changes and ensure everything works as expected.

- Commit your changes with a clear message:

```bash
git commit -m "Add your message here"
```

- Push your branch to your fork:

```bash
git push origin feature/your-feature-name
```

- Open a Pull Request from your branch to the main branch of the original repository.

- Describe your PR clearly — mention what you changed, why you did it, and any issues it closes.

- Any Improvements in UI/UX or color-schemes are encouraged as designing is not our forte.

## 💡 Tips for Contributing

- Make sure your code follows the project's coding standards.

- Add tests for new features or bug fixes.

- Document your code where necessary.

- Create clear, descriptive commit messages.
