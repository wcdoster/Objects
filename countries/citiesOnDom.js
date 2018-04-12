const cities = JSON.parse(localStorage.getItem("citiesDirectory"));

const divElement = document.createElement("div");

const article = document.getElementById("cities");

const displayCities = (year) =>{
    cities.forEach(
        (currentCity) => {
            if (year === currentCity["yearVisited"] || !year){
                const cityElement = document.createElement("section")
                cityElement.classList = currentCity["continent"]
                for (key in currentCity){
                    if(key === "name"){
                        const nameElement = document.createElement("h3")
                        nameElement.textContent = currentCity[key];
                        cityElement.appendChild(nameElement)
                    }else if(key === "image") {
                        const imgDiv = document.createElement("div");
                        imgDiv.classList = "img"
                        const imgElement = document.createElement("img");
                        imgElement.src = currentCity[key]
                        imgDiv.appendChild(imgElement)
                        cityElement.appendChild(imgDiv);
                    }else if(key === "yearVisited"){
                        const yearElement = document.createElement("p")
                        yearElement.textContent = "Year Visited: " + currentCity[key];
                        cityElement.appendChild(yearElement)
                    }else if(key === "attractions"){
                        const heading = document.createElement("p")
                        heading.textContent = "Top 5 Attractions: "
                        cityElement.appendChild(heading);
                        const listElement = document.createElement("ul");
                        for (attraction in currentCity["attractions"]){
                            const listItem = document.createElement("li");
                            listItem.textContent = currentCity["attractions"][attraction];
                            listElement.appendChild(listItem);
                        }
                        cityElement.appendChild(listElement);
                            
                    }
                    article.appendChild(cityElement)
                }
            }
        }
    )
}

displayCities();