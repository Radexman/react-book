const formatting = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

const isAdult = (age) => {
  return age >= 18 ? "Yes" : "No";
};

export { formatting, isAdult };
