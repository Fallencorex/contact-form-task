
class Selectors {
    constructor() { }
    // Method that will find all elements with the select tag on the page, hide them,
    // and create a custom select according to the layout, in place of the standard select.
    createSelectors(takenSelectors) {
        // Go through all the selects, hide them, and count the number of their options.
        for (let elem of takenSelectors) {
            const nameOfParent = elem.parentNode.className;
            const defValueOfSelect = elem.value;
            let totalOptions = 0;
            elem.style.display = "none";
            [...elem.options].forEach(() => {
                totalOptions++;
            });
            // Creating a custom select
            const newSelector = document.createElement("div");
            newSelector.className = "entry-wrapper__select";
            newSelector.textContent = defValueOfSelect;
            for (let i = 1; i < totalOptions; i++) {
                const option = document.createElement("div");
                option.className = "select__option";
                option.textContent = "Option " + i;
                // option.style.display = "none";
                newSelector.appendChild(option);
            }
            const appendSelector = document.getElementsByClassName(nameOfParent);
            appendSelector[0].appendChild(newSelector);
            totalOptions = 0;
        }
    }
}

const select1 = new Selectors();

select1.createSelectors(document.getElementsByTagName("select"));