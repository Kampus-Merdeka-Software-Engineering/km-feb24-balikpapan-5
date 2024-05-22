// handle the dropdown
function toggleCheckboxes(selectBoxId, checkboxesId) {
    const selectBox = document.getElementById(selectBoxId);
    let expanded = false;
  
    selectBox.addEventListener("click", () => {
      const checkboxes = document.getElementById(checkboxesId);
      if (!checkboxes) {
        console.error(`Element with ID ${checkboxesId} not found`);
        return;
      }
  
      console.log(`Toggling ${checkboxesId}, expanded: ${expanded}`);
  
      if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
      } else {
        checkboxes.style.display = "none";
        expanded = false;
      }
    });
  }
  
  toggleCheckboxes("selectBoxYear", "checkboxesYear");
  toggleCheckboxes("selectBoxCountry", "checkboxesCountry");
  toggleCheckboxes("selectBoxProductCategory", "checkboxesProductCategory");
  toggleCheckboxes("selectBoxSubCategory", "checkboxesSubCategory");
  toggleCheckboxes("selectBoxProduct", "checkboxesProduct");
  

