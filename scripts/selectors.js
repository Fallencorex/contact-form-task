import elementCreator from "./functions.js"

class Selectors {
    constructor() { }
    // Method that will find all elements with the select tag on the page, hide them,
    // and create a custom select according to the layout, in place of the standard select.
    createSelectors(takenSelectors) {
        let counter = takenSelectors.length;
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
            const newSelector = elementCreator("div", "select-wrapper__select");
            // Select should not overlap each other
            newSelector.style.zIndex = counter;
            const headSelector = elementCreator("div", "select__head");
            const shapeImage = elementCreator("img", "", "", "./resources/images/shape.png");
            const pickArea = elementCreator("div");
            pickArea.textContent = defValueOfSelect;
            const optionWrapper = elementCreator("div", "select__option-wrapper");
            optionWrapper.style.display = "none";
            newSelector.appendChild(headSelector);
            newSelector.appendChild(shapeImage);
            headSelector.appendChild(pickArea);
            newSelector.appendChild(optionWrapper);
            // Creating a options
            for (let i = 1; i < totalOptions; i++) {
                const option = document.createElement("div");
                option.className = "select__option";
                option.textContent = "Option " + i;
                optionWrapper.appendChild(option);
            }
            const appendSelector = document.getElementsByClassName(nameOfParent);
            appendSelector[0].appendChild(newSelector);
            totalOptions = 0;
            counter--;
        }
    }
}

const select1 = new Selectors();
select1.createSelectors(document.getElementsByTagName("select"));

