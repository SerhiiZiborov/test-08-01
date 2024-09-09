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

localStorage.clear();
console.log(localStorage);

// localStorage.setItem("ui-theme", "light");
// localStorage.setItem("notif-level", "mute");

// console.log(localStorage);
// // Storage {notif-level: 'mute', ui-theme: 'light', length: 2}

// localStorage.clear();
// console.log(localStorage); // Storage {length: 0}

// localStorage.setItem("ui-theme", "light");
// localStorage.setItem("notif-level", "mute");

// console.log(localStorage);
// // Storage {notif-level: 'mute', ui-theme: 'light', length: 2}

// localStorage.clear();
// console.log(localStorage); // Storage {length: 0}
