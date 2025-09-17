const toggleButton = document.getElementById("toggle-button");
const photoContainer = document.getElementById("photo-container");

toggleButton.addEventListener("click", function () {
  if (photoContainer.style.display === "none") {
    photoContainer.style.display = "block";
    toggleButton.textContent = "Hide Photo";
  } else {
    photoContainer.style.display = "none";
    toggleButton.textContent = "Show Photo";
  }
});