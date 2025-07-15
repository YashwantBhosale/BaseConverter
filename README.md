# BaseConverter
# Overview

This CSS file styles a web application interface, focusing on layout, typography, and element responsiveness. It aims to create a modern, user-friendly experience using a blend of flexbox layout and various visual enhancements.

## Key Features
- **Global Styles**: Resets margins and paddings across all elements and sets a consistent font family and text color.
- **Responsive Design**: Media queries ensure the layout adapts to various screen sizes, enhancing usability on mobile devices.
- **User Interaction**: Styled buttons with hover effects and toast notifications provide feedback on user actions.

# Style Documentation

## Global Styles

```css
* {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    color: white;
}
```

- **Purpose**: Resets the margin and padding for all HTML elements to zero, providing a consistent base. It also sets a default font family and text color.
- **Effects**: This ensures that all elements start from the same baseline, making styling more predictable.

## Headings

```css
h1 {
    text-align: center;
    margin: 25px;
}
```

- **Purpose**: Centers the main heading and provides vertical spacing.
- **Effects**: Enhances the visibility of the heading by making it prominent.

## Container

```css
.container {
    height: 100vh;
    width: 100vw;
    display: flex;
    padding: 50px 0;
    justify-content: center;
}
```

- **Purpose**: Establishes a full view height and width flex container, centering its content both horizontally and vertically.
- **Effects**: Creates a uniform layout that fills the viewport.

## Main Content Area

```css
.main {
    width: 50vw;
    height: fit-content;
    padding: 15px;
    border-radius: 10px;
    background-color: rgba(62, 62, 62, 0.411);
    backdrop-filter: blur(15px);
}
```

- **Purpose**: Styles the primary content area to have rounded corners, padding, and a semi-transparent background with a blurring effect.
- **Effects**: Provides a modern and appealing appearance for the main interface elements.

## Form Styles

```css
#form {
    display: flex;
    flex-direction: column;
    margin: 25px;
}

#form > * {
    margin: 10px;
    padding: 15px;
    background-color: transparent;
    border: 2px solid white;
    border-radius: 7px;
}
```

- **Purpose**: Arranges form elements vertically with space between them and includes a border with rounded corners for each field.
- **Effects**: Enhances usability through clear spacing and consistent styling for input elements.

## Select Dropdown

```css
select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 1px solid black;
    padding: 10px;
    background-color: lightblue;
}

select option {
    padding: 8px;
    border-radius: 0;
    color: black;
    background-color: transparent;
}
```

- **Purpose**: Customizes the appearance of select dropdowns by removing default browser styles and providing custom styling.
- **Effects**: Ensures consistency across browsers and enhances user experience with an aesthetically pleasing dropdown.

## Output and Explanation Sections

```css
#output {
    width: 100%;
    height: 10vh;
    background-color: #f2eee824;
    margin: auto;
    display: flex;
    padding: 19px 0;
    align-items: center;
    justify-content: center;
    word-wrap: break-word;
    font-size: 1.4rem;
    color: white;
    border-radius: 14px 14px 0 0;
}

#explaination {
    width: 100%;
    height: fit-content;
    background-color: #f2eee824;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    overflow: scroll;
    border-radius: 0 0 14px 14px;
}
```

- **Purpose**: Styles the output display and explanation section with background colors, spacing, and alignment.
- **Effects**: Creates a visually distinct area for displaying results and explanations, improving clarity for users.

## Error Toast Notification

```css
#error-toast {
    position: fixed;
    width: 50vw;
    margin-top: 25px;
    z-index: 99;
    background-color: rgb(175, 47, 47);
    color: white;
    display: none;
    flex-direction: column;
    border-radius: 20px;
    border: 2px solid white;
    padding: 25px;
    justify-content: center;
    animation-name: slideDown;
    animation-duration: 0.2s;
}

@keyframes slideDown {
    0% {
        transform: translateY(-100%);
    }
    100% {
        transform: translateY(0%);
    }
}
```

- **Purpose**: Styles a fixed-position error notification toast that slides down into view.
- **Effects**: Provides user feedback for errors in a visually distinct and prominent manner.

## Media Queries

```css
@media (max-width: 800px) {
    .main {
        width: 80vw;
    }
    #error-toast {
        width: 70vw;
    }
    #output {
        font-size: 1rem;
    }
    #explaination p {
        font-size: 1.1rem;
    }

    #explainationTable {
        font-size: 1.1rem;
    }
}
```

- **Purpose**: Adjusts styles for screens smaller than 800 pixels in width, enhancing mobile usability.
- **Effects**: Ensures elements are appropriately sized and readable on smaller devices.

# Notes

- This CSS file facilitates the styling of a responsive web application interface, focusing on modern user experience principles through structured layout and visual feedback mechanisms.
- There is no explicit mention of dependencies or external frameworks; it appears to function independently based on standard CSS capabilities.
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
