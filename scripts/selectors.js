
class Selectors {
    constructor() { }
    // Method that will find all elements with the select tag on the page, hide them,
    // and create a custom select according to the layout, in place of the standard select.
    createSelectors(takenSelectors) {
        let counter = takenSelectors.length;
        
        // Go through all the selects, hide them, and count the number of their options.
        for (let elem of takenSelectors) {
            console.log(counter);
            const nameOfParent = elem.parentNode.className;
            const defValueOfSelect = elem.value;
            let totalOptions = 0;
            elem.style.display = "none";
            [...elem.options].forEach(() => {
                totalOptions++;
            });
            // Creating a custom select
            const newSelector = document.createElement("div");
            newSelector.className = "select-wrapper__select";
            // Select should not overlap each other
            newSelector.style.zIndex = counter;
            
            const headSelector = document.createElement("div");
            headSelector.className = "select__head";
            newSelector.appendChild(headSelector);

            const shapeImage = document.createElement("img");
            shapeImage.src = "./resources/images/shape.png";
            newSelector.appendChild(shapeImage);

            const pickArea = document.createElement("div");
            pickArea.textContent = defValueOfSelect;
            headSelector.appendChild(pickArea);

            const optionWrapper = document.createElement("div");
            optionWrapper.className = "select__option-wrapper";
            newSelector.appendChild(optionWrapper);
            optionWrapper.style.display = "none";

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

