// popup.js
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('myButton').addEventListener('click', function () {
    // Отримуємо активну вкладку
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (tabs && tabs.length > 0) {
        const activeTab = tabs[0];
        
        // Отримуємо фактичний URL поточної активної вкладки
        const currentUrl = activeTab.url;

        // Виконуємо JavaScript-код на активній вкладці для зміни фонового зображення
        chrome.tabs.executeScript(activeTab.id, {
          file:"content.js"
        });
      } else {
        alert('Поточна вкладка не знайдена.');
      }
    });
  });
});
