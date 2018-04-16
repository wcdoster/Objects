//get directory from local storage
const cities = JSON.parse(localStorage.getItem("citiesDirectory"));

const fragment = document.createDocumentFragment();
//create div for img
const divElement = document.createElement("div");

//get article element from html to append
const article = document.getElementById("cities");

//function with year as the argument to fitler cities by the year visited
const displayCities = (year) =>{
    // loop through the array of objects
    cities.forEach(
        (currentCity) => {
            //if statement used to filter the cities by year visited
            if (year === currentCity["yearVisited"] || !year){
                //create new section element for each city
                const cityElement = document.createElement("section")
                //create continent class for each section to adjust the styling by the continent that the city is on
                cityElement.classList = currentCity["continent"]
                //loop through each property key
                for (key in currentCity){
                    //create name element
                    if(key === "name"){
                        const nameElement = document.createElement("h3")
                        nameElement.textContent = currentCity[key];
                        //append section element
                        cityElement.appendChild(nameElement)
                    //create image element
                    }else if(key === "image") {
                        const imgDiv = document.createElement("div");
                        //div class="img" for styling purposes
                        imgDiv.classList = "img"
                        const imgElement = document.createElement("img");
                        //set src=url
                        imgElement.src = currentCity[key]
                        //append div
                        imgDiv.appendChild(imgElement)
                        //append section element
                        cityElement.appendChild(imgDiv);
                    //create "year visited" p element
                    }else if(key === "yearVisited"){
                        const yearElement = document.createElement("p")
                        yearElement.textContent = "Year Visited: " + currentCity[key];
                        //append the section element
                        cityElement.appendChild(yearElement)
                    //create "attractions" ul element
                    }else if(key === "attractions"){
                        const heading = document.createElement("p")
                        //heading for the ul
                        heading.textContent = "Top 5 Attractions: "
                        //append section with heading
                        cityElement.appendChild(heading);
                        const listElement = document.createElement("ul");
                        //loop through array of attraction and create li elements
                        for (attraction in currentCity["attractions"]){
                            const listItem = document.createElement("li");
                            listItem.textContent = currentCity["attractions"][attraction];
                            //append ul element with li element
                            listElement.appendChild(listItem);
                        }
                        //append section element with ul element
                        cityElement.appendChild(listElement);
                            
                    }
                    //append article with section element
                    fragment.appendChild(cityElement)
                }
            }
        }
    )
    article.appendChild(fragment);
}

displayCities();