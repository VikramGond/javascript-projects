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

  let characterPool = "";

  if (lowercaseCheckbox.checked) {
    characterPool += lowercaseCharacters;
  }

  if (uppercaseCheckbox.checked) {
    characterPool += uppercaseCharacters;
  }

  if (numberCheckbox.checked) {
    characterPool += numberCharacters;
  }

  if (symbolCheckbox.checked) {
    characterPool += symbolCharacters;
  }

  if (characterPool.length === 0) {
    passwordfield.textContent = "Select At least 1 checkbox";
    return;
  }

  const length = Number(passwordLength.value);
  let password = "";
  for (let i = 0; i < length; i++) {
    const j = Math.floor(Math.random() * characterPool.length);

    password += characterPool[j];
  }

  passwordfield.innerHTML = `<p>${password}</p>
                             <i class="fa-regular fa-clipboard" style="color: rgb(12, 16, 58);"></i>                          
  `;
};

passwordLength.addEventListener("input", (e) => {
  const length = e.target.value.padStart(2, "0");
  passwordLengthArea.textContent = `Password Length: ${length}`;
});

generateBtn.addEventListener("click", generatePassword);
