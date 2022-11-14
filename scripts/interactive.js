
const eventSelectors = document.querySelectorAll(".select__head");
const eventOptions = document.querySelectorAll(".select__option");

// Set an event listener for each custom select
eventSelectors.forEach(elem => {
    elem.addEventListener("click", function() {
        const parentOfChild = elem.parentNode;
        const childStyle = parentOfChild.lastChild;
        if (childStyle.style.display === "none")
            childStyle.style.display = "block";
            else {
                childStyle.style.display = "none"; 
            }
    })  
});
// Do the same for the options
eventOptions.forEach(elem => {
    elem.addEventListener("click", function() {
        // Get the value of the option
        const getText = this.innerText;
        // Get his parent (Now we are going to the top of the DOM-tree)
        const parentOfChild = elem.parentNode;
        // Go up to the option wrapper and find his parent
        const childOfParrent = parentOfChild.closest(".select__option-wrapper").parentNode;
        // In the main wrapper, we find the desired div, where the selected value will be inserted
        const wrapperInsert = childOfParrent.getElementsByClassName("select__head")[0];
        wrapperInsert.textContent = getText;
        this.parentNode.style.display = "none";
    })  
});