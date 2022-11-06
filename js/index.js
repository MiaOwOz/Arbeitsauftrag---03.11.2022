let isDarkMode;

function switchTheme() {
    document.querySelector('body').style.background = (isDarkMode ? "white" : "black");
    document.querySelector('body').style.color = (isDarkMode ? "black" : "white");
    isDarkMode = !isDarkMode;
}