const passwordfield = document.querySelector(".password");
const passwordLength = document.getElementById("password-length");
const passwordLengthArea = document.getElementById("password-length-area");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const symbolCheckbox = document.getElementById("symbols");
const numberCheckbox = document.getElementById("numbers");
const generateBtn = document.querySelector(".generate-button");

const generatePassword = () => {
  const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  const numberCharacters = "0123456789";
  const symbolCharacters = "!@#$%^&{}[]?*()<>_-+/|.,";

  let chacterPool = "";

  if (lowercaseCheckbox.checked) {
    chacterPool += lowercaseCharacters;
  }

  if (uppercaseCheckbox.checked) {
    chacterPool += uppercaseCharacters;
  }

  if (numberCheckbox.checked) {
    chacterPool += numberCharacters;
  }

  if (symbolCheckbox.checked) {
    chacterPool += symbolCharacters;
  }

  if (chacterPool.length === 0) {
    passwordfield.textContent = "Select At least 1 checkbox";
    return
  }

  const length = Number(passwordLength.value)
  let password = ""
  for(let i = 0; i <    length; i++) {
    const j = Math.floor(Math.random() * chacterPool.length)

    password += chacterPool[j]
  }

  passwordfield.textContent = password
};

passwordLength.addEventListener("input", (e) => {
  const length = e.target.value.padStart(2, "0");
  passwordLengthArea.textContent = `Password Length: ${length}`;
});

generateBtn.addEventListener("click", () => {
  generatePassword();
});
