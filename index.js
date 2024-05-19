// handle the dropdown
const selectBox = document.getElementsByClassName("selectBox")[0];
let expanded = false;
selectBox.addEventListener("click", () => {
  let checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
});
