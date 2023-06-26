document.addEventListener("DOMContentLoaded", function () {
    var colorPicker = document.getElementById("colorPicker");
    var changeColorBtn = document.getElementById("changeColorBtn");
  
    changeColorBtn.addEventListener("click", function () {
      var selectedColor = colorPicker.value;
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { color: selectedColor });
      });
    });
  });