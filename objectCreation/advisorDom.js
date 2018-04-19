
const advisorDiv = document.getElementById("advisor");
const fragment = document.createDocumentFragment();

const appendParent = (element, text, parent) => {
    const appendElement = document.createElement(element);
    appendElement.textContent = text;
    parent.appendChild(appendElement);
}

appendParent("h1", morganChase.name, fragment);
appendParent("h2", morganChase.company, fragment);
appendParent("h3", morganChase.specialty, fragment);

appendParent("h3", "Portfolio", fragment)

const listElement = document.createElement("ul")
for (stock in morganChase.portfolio) {
    if(stock === "cash") {
        let stockInformation = stock + ": " + morganChase.portfolio.cash.valuation;
        appendParent("li", stockInformation, listElement);
    } else {
        let stockInformation = stock + ": " + morganChase.portfolio[stock].shares + " shares";
        appendParent("li", stockInformation, listElement);
    }
}
fragment.appendChild(listElement);

advisorDiv.appendChild(fragment)