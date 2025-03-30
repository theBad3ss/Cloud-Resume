document.addEventListener("DOMContentLoaded", function () {
  fetch(
    "https://8v0q71t57e.execute-api.us-east-1.amazonaws.com/dev/visitor_count"
  )
    .then((response) => response.json())
    .then((data) => {
      let visitor_count = data.updated_total_count;
      console.log(visitor_count);
      document.querySelector(
        "#footer"
      ).innerHTML = `This resume caught the eye of ${visitor_count} curious minds!`;
    })
    .catch((error) => {
      console.log("Error:", error);
    });
});

let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("theme-switch");

const enableDarkmode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
};

const disableDarkmode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", null);
};

if (darkmode === "active") enableDarkmode();

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});
