const candidateInformation = Object.create({}, {
    name: {
        enumerable: true,
        writable: true,
        value: "Elizabeth Sanger"},
    district: {
        enumerable: true,
        writable: true,
        value:"TN-5"
    },
    biography: {
        enumerable: true,
        writable: true,
        value:"This is a brief paragraph going over Elizabeth's life."
    },
    missionStatement: {
        enumerable: true,
        writable: true,
        value: "I am a communist"
    },
    donationPage: {
        enumerable: true,
        writable: true,
        value:"gofundme.com/elizabeth-sanger"
    },
    voterRegistration: {
        enumerable: true,
        writable: true,
        value:"url"
    }
})

function changeInformation(property, value) { 
    candidateInformation[property] = value;
}

changeInformation("donationPage", "ben")
console.log(candidateInformation.donationPage)

const platform = Object.create({},{
    taxes: {
        enumerable: true,
        writable: true,
        value:"Government controls all money."
    },
    jobs: {
        enumerable: true,
        writable: true,
        value:"Mandatory communal labor."
    },
    infrastructure: {
        enumerable: true,
        writable: true,
        value:"Invest heavily in major infrastructure projects."
    },
    healthCare: {
        enumerable: true,
        writable: true,
        value:"Universal Healthcare."
    },
    crimeAndPunishment: {
        enumerable: true,
        writable: true,
        value:"Destroy the prison-industrial complex."
    }
})

//ADVANCED CHALLENGE

// Use document.createElement() to build an <article> element representing
//  Elizabeth. The id property of the element should be her congressional 
//  district, and its content should be her platform data. Once the element 
//  has been created, insert it into the DOM.

//create article element 
const eliArticle = document.createElement("article");
//set the articles id
eliArticle.setAttribute("id", candidateInformation.district);
//get the dom element we want to append on the html file
const body = document.getElementById("try");
//iterate through the object and create a text node for every property
for (property in platform) {
    let textNode = document.createTextNode(platform[property] + " ");
    //add text node to the article
    eliArticle.appendChild(textNode);
    // add the article to the body
    body.appendChild(eliArticle);
}



const changePlatform = (property, value) => platform[property] = value;
changePlatform("crimeAndPunishment", "none")
console.log(platform.crimeAndPunishment)

const calendar = Object.create({},{
    april6:{ 
        enumerable: true,
        writable: true,
        value: {
            date: "April 6",
            dayOfWeek: "Friday",
            activity: "Rally"
        }
    },
    april7: { 
        enumerable: true,
        writable: true,
        value: {
            date: "April 7",
            dayOfWeek: "Saturday",
            activity: "Meet with donors"
        }
    },
    april8: { 
        enumerable: true,
        writable: true,
        value: {
            date: "April 8",
            dayOfWeek: "Sunday",
            activity: "Church"
        }
    }
})

const changeCalendar = (day, property, value) => {
    calendar[day][property] = value;
}

changeCalendar("april6", "activity", "sleep");
console.log(calendar.april6.activity);


const volunteers = Object.create({},{
    cole:{
        enumerable: true,
        writable: true,
        value: {
            name: "Cole",
            address: "3302 Overlook Dr.",
            email: "wcdoster@gmail.com",
            availability: {
                monday: "available",
                tuesday: "not available",
                wednesday: "not available",
                thursday: "available",
                friday: "available",
                saturday: "not available",
                sunday: "not available"
            },
            activities: {
                rallies: "no",
                calling: "yes",
                streetPreaching: "yes"
            }
        }
    },
    will: { 
        enumerable: true,
        writable: true,
        value: {
            name: "Will",
            address: "3302 Underlook Dr.",
            email: "willdoster@gmail.com",
            availability: {
                monday: "not available",
                tuesday: "available",
                wednesday: "not available",
                thursday: " not available",
                friday: "not available",
                saturday: "available",
                sunday: "not available"
            },
            activities: {
                rallies: "yes",
                calling: "no",
                streetPreaching: "yes"
            }
        }   
    }
})


const changeVolunteer = (volunteer, property, value) => {
    if (property in volunteers[volunteer]["availability"]){
        volunteers[volunteer]["availability"][property] = value;
    }else if (property in volunteers[volunteer]["activities"]){
        volunteers[volunteer]["activities"][property] = value;
    }else{
        volunteers[volunteer][property] = value;
    }
}

changeVolunteer("cole", "saturday", "NEVER!!!!!");
console.log(volunteers.cole.availability.saturday);
changeVolunteer("will", "name", "BEN");
console.log(volunteers.will.name);
changeVolunteer("cole", "rallies", "hell yeah");
console.log(volunteers.cole.activities);



const images= Object.create({},{
    headShot: {
        enumerable: true,
        writable: true,
        value:"url",
    },
    familyPicture: {
        enumerable: true,
        writable: true,
        value:"url"
    },
    constituentPicture: {
        enumerable: true,
        writable: true,
        value:"url"
    }
})

const changeImage = (property, value) => {
    images[property] = value;
}

changeImage('headShot', "new url")
console.log(images.headShot);