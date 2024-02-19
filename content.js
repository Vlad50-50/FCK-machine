const inputElement = document.getElementById("inp");
const submitButton = document.getElementById("submit");

let jsonData = JSON.parse(localStorage.getItem('data')) || [];

insertAndClearText();

function generateUniqueRandomPassword(length) {
    let isUnique = false;
    let newPassword;

    while (!isUnique) {
        newPassword = generateRandomPassword(length);
        if (!jsonData.includes(newPassword)) {
            isUnique = true;
        }
    }
    jsonData.push(newPassword);
    localStorage.setItem('data', JSON.stringify(jsonData));

    return newPassword;
}

function generateRandomPassword(length) {
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+";
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
}

function insertAndClearText() {
    const newPassword = generateUniqueRandomPassword(8);
    inputElement.value = newPassword;
    console.log(newPassword);
    
    if (submitButton) {
        submitButton.click();
        console.log("I'm clicked");
    }

    setTimeout(() => {
        inputElement.value = "";
        setTimeout(insertAndClearText, 50);
    }, 50);
}
