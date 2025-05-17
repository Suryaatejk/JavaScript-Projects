# 🔐 Random Password Generator

This is a **Random Password Generator** built using **HTML**, **CSS**, and **JavaScript**.  
It generates a secure, 12-character password every time the user clicks the **Generate Password** button.

## 🛠️ Features
- Random 12-character password generation
- Includes:
  - Uppercase letters (A–Z)
  - Lowercase letters (a–z)
  - Numbers (0–9)
  - Special characters (!@#$%^&*)
- Copy-to-clipboard functionality
- Simple and clean UI

## 📷 Screenshot
![Main UI](./Main.png)

## 🖼️ Icons Used
- `copy.png`: Copy icon beside the input field
- `generate.png`: Icon on the Generate Password button

## 📁 Files Included
- `index.html` – Structure of the password generator
- `styles.css` – Styling for layout and design
- `script.js` – JavaScript logic to generate and copy passwords
- `Main.png`, `copy.png`, `generate.png` – Images used in the UI
- `README.md` – Project description

## 🚀 How to Run
1. Download or clone this repository.
2. Navigate to the `RandomPassword` folder.
3. Open `index.html` in a browser.
4. Click **Generate Password** to get a secure password.
5. Click the copy icon to copy the password to the clipboard.

## 💡 JavaScript Logic (Overview)
The script:
- Ensures inclusion of at least one character from each category.
- Fills the remaining characters randomly from the combined set.
- Updates the input field and allows copying to clipboard using `navigator.clipboard.writeText()`.

```js
function createpass() {
    let pass = "";
    pass += upper[Math.floor(Math.random() * upper.length)];
    pass += lower[Math.floor(Math.random() * lower.length)];
    pass += num[Math.floor(Math.random() * num.length)];
    pass += char[Math.floor(Math.random() * char.length)];

    while (pass.length < length) {
        pass += all[Math.floor(Math.random() * all.length)];
    }
    passBox.value = pass;
}

