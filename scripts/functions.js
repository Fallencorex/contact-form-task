// Don’t repeat yourself
const elementCreator = (elementType, className, textContent, imgSrc) => {
    const createElement = document.createElement(elementType);
    if (className)
    createElement.className = className;
    if (textContent)
    createElement.textContent = textContent;
    if (elementType === "img")
    createElement.src = imgSrc;
    return createElement;
  }

  export default elementCreator;