const expense = {
    dateCreated: {
        enumerable: true,
        writable: false,
        value: "01/01/2017"
    },
    location: {
        enumerable: true,
        writable: false,
        value: "Bob's Burgers"
    },
    dollarAmount: {
        enumerable: true,
        writable: false,
        value: 14.34
    },
    purpose: {
        enumerable: true,
        writable: false,
        value: "Lunch with very important client"
    },
    code: {
        enumerable: false,
        writable: true,
        value: "1001A"
    }
}

console.log(expense);