// a. City name
// b. Year you visited
// c. Image of city
// d. List of top 5 attractions
const CitiesDirectory = [
    {
        name: "London",
        continent: "europe",
        image: "https://cdn.londonandpartners.com/visit/general-london/areas/westminster-st-james/100347-433x298-bigben433.jpg",
        yearVisited: "2007",
        attractions: ["Tower of London", "Westminster Abbey", "Tower Bridge", "Big Ben", "Buckingham Palace"]
    },
    {
        name: "Chicago",
        continent: "northAmerica",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/07/72/27/a3/chicago.jpg",
        yearVisited: "2013",
        attractions: ["Millenium Park", "The Bean", "Wrigley Field", "Willis Tower", "Navy Pier"]
    },
    {
        name: "Paris",
        image: "https://lonelyplanetimages.imgix.net/mastheads/GettyImages-500759045_super.jpg?sharp=10&vib=20&w=1200",
        continent: "europe",
        yearVisited: "2014",
        attractions: ["Eiffel Tower", "Le Louvre", "Arc du Triomphe", "Champs Elysse", "Notre Dame"]
    },
    {
        name: "Florence",
        image: "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Italy/Florence/Florence%20edit-xlarge.jpg",
        continent: "europe",
        yearVisited: "2014",
        attractions: ["Florence Cathedral", "Uffizi Gallery", "Michaelangelo's David", "Ponte Vecchio", "Galleria dell'Accademia"]
    },
    {
        name: "Venice",
        image: "https://www.telegraph.co.uk/content/dam/Travel/2017/July/Venice-II-travel-Getty.jpg?imwidth=450",
        continent: "europe",
        yearVisited: "2014",
        attractions: ["Grand Canal", "Piazza San Marco", "St. Marks Basillica", "Rialto Bridge", "Doge's Palace"]
    },
    {
        name: "Prague",
        image: "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Czech%20Republic/Prague/Prague%20city-xlarge.jpg",
        continent: "europe",
        yearVisited: "2014",
        attractions: ["Charles Bridge", "Prague Castle", "St. Vitus Cathedral", "Old Town Square", "Astronomical Clock"]
    },
    {
        name: "Berlin",
        image: "https://www.visitberlin.de/system/files/styles/visitberlin_bleed_header_visitberlin_mobile_1x/private/image/iStock_000074120341_Double_DL_PPT_0.jpg?h=a66ba266&itok=2YXS5_33",
        continent: "europe",
        yearVisited: "2014",
        attractions: ["Brandenburg Gate", "Reichstag Building", "Berlin Wall", "Olympic Stadium", "Holocaust Memorial"]
    },
    {
        name: "Barcelona",
        image: "https://www.flightmate.ie/pictures/destination/spain/barcelona/fly-to-barcelona-1.jpg",
        continent: "europe",
        yearVisited: "2014",
        attractions: ["La Sagrada Familia", "Park Guell", "Gothic Quarter", "La Rambla", "Museau Picasso"]
    },
    {
        name: "Dublin",
        image: "https://www.nationalgeographic.com/content/dam/travel/2017-digital/dublin/river-bridge-dublin-ireland.jpg",
        continent: "europe",
        yearVisited: "2017",
        attractions: ["Guiness Storehouse", "Temple Bar", "Christchurch Cathedral", "Dublin Castle", "Kilmainham Gaol"]
    },
    {
        name: "New York",
        image: "https://travel.usnews.com/static-travel/images/destinations/44/empire_state_building_getty_zsolt_hlinka.jpg",
        continent: "northAmerica",
        yearVisited: "2017",
        attractions: ["Empire State Building", "Statue of Liberty", "Central Park", "Rockafeller Center", "Brooklyn Bridge"]
    }
]

const store = (directoryName, directory) => {
    const directoryString = JSON.stringify(directory);
    localStorage.setItem(directoryName, directoryString);
}

store("citiesDirectory", CitiesDirectory);