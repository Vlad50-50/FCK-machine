const inputElement = document.getElementById("inp");
const submitButton = document.getElementById("submit"); // Добавляем получение кнопки

// Загрузка данных из localStorage
let jsonData = JSON.parse(localStorage.getItem('data')) || [];

insertAndClearText();

function generateUniqueRandomPassword(length) {
    let isUnique = false;
    let newPassword;

    while (!isUnique) {
        newPassword = generateRandomPassword(length);

        // Проверяем уникальность пароля
        if (!jsonData.includes(newPassword)) {
            isUnique = true;
        }
    }

    // Добавляем новый пароль в данные
    jsonData.push(newPassword);

    // Сохраняем обновленные данные в localStorage
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
    
    // Нажимаем кнопку submit
    if (submitButton) {
        submitButton.click();
    }

    setTimeout(() => {
        inputElement.value = "";
        setTimeout(insertAndClearText, 500);
    }, 500);
}
