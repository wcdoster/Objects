const morganChase = Object.create({}, {
    company: {
        writable: true,
        enumerable: true,
        value: "JP Morgan Chase"
    },
    specialty: {
        writable: true,
        enumerable: true,
        value: "Credit Cards"
    },
    name: {
        writable: false,
        enumerable: true,
        value: "Morgan Chase"
    },
    portfolio: {
        writable: true,
        enumerable: false,
        value: {
            cash: {
                valuation: 230000,
            },
            DOW: {
                shares: 5200,
                valuation: 430000
            },
            NASDAQ: {
                shares: 6000,
                valuation: 500000
            },
            GOOG: {
                shares: 6400,
                valuation: 410000
            }
        }
    },
    worth: {
        writable: false,
        enumerable: true,
        value: function () {
            let total = 0
            for (stock in this.portfolio) {
                total += this.portfolio[stock].valuation
            }
            return total;
        }
    },
    purchase: {
        writable: false,
        enumerable: false,
        value: function (ticker, quantity, price) {
            this.portfolio[ticker].shares += quantity;
            this.portfolio[ticker].valuation += price;
            this.portfolio.cash.valuation -= price;
        }
    },
    sell: {
        writable: false,
        enumerable: false,
        value: function (ticker, quantity, price) {
            this.portfolio[ticker].shares -= quantity;
            this.portfolio[ticker].valuation -= price;
            this.portfolio.cash.valuation += price;
        }
    }
})
