# Password Generator

This is a simple password generator built using **React**. The application allows users to generate random passwords based on specified length and whether numbers and special characters are allowed. The generated password can be copied to the clipboard with the click of a button.

## Features

- Generate a random password of a specified length.
- Option to include numbers in the password.
- Option to include special characters in the password.
- Ability to copy the generated password to the clipboard.
- Slider to adjust password length between 6 and 25 characters.

## Technologies Used

- **React**: For creating a dynamic, component-based UI.
- **useState**: For managing the state of the application (password, length, numberAllowed, character).
- **useEffect**: To trigger password generation whenever the options change.
- **useCallback**: To optimize the functions for password generation and clipboard copy.
- **useRef**: For referencing the input field to select the password text on copy.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/password-generator.git
