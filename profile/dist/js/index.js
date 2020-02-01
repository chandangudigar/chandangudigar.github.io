// Selectors

const particleJsConfig = "dist/js/particlesjs-config.json";


window.onload = () => {
  // Displays the particle JS
  particlesJS.load("particles-js", particleJsConfig);

  // Removes the Loading Screen
  setTimeout(() => {
    toggleLoadingScreen();

    // Starts the text animation
    displayText(string);
  }, 500);
};
