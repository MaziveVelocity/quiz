var userData = document.getElementById("name");

var json = localStorage.getItem("localKey");
var localData = JSON.parse(json);

userData.innerHTML = `${localData.name}: <span> ${localData.scoreValue}<span/>`;
