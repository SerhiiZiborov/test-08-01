// localStorage.setItem("test-key", "test-value");
// console.log(localStorage);

const settings = {
  theme: "dark",
  isAuthenticated: true,
  options: [1, 2, 3, 4],
};

localStorage.setItem("settings", JSON.stringify(settings));

const savedSettings = localStorage.getItem("settings");
console.log(savedSettings);

const parseSettings = JSON.parse(savedSettings);
console.log(parseSettings);
