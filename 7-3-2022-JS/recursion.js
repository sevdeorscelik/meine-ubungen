//özyineleme fonksiyonlari, parametre degeri kadar tekrarlar

//örnek
const countdown = (num) => {
    console.log(num);
    if (num > 0) {
        countdown(num - 1);
    } else {
        console.log('blast off');
    }
}
countdown(10);


//recursive fonksiyon bir stringteki karakterlerin sirasini tersine cevirir:
function reverseString(str) {
    if (str === '') {
        return '';
    } else {
        return reverseString(str.substring(1)) + str.charAt(0);
    }
}
console.log(reverseString("live"))


//gercek hayattan recursive örnegi:

const flightCollections = [
    [
        {
            airport: "berlin"
        },
        {
            airport: "paris"
        },
        {
            airport: "hamburg"
        },
        {
            airport: "london"
        }
    ],
    [
        {
            airport: "paris"
        }
    ],
    [
        {
            airport: "paris"
        },
        {
            airport: "hamburg"
        },
        {
            airport: "london"
        }
    ],
    [
        {
            airport: "hamburg"
        },
        {
            airport: "bordeux"
        },
        {
            airport: "paris"
        }
    ],
    [
        {
            airport: "hamburg"
        },
        {
            airport: "london"
        },
        {
            airport: "paris"
        }
    ]
];
 
const commonDestinations = [];
 
const compareFlights = (currentIndex, currentAirport = null) => {
    const flights1 = flightCollections[currentIndex];
    const flights2 = flightCollections[currentIndex + 1];
    const atEnd = flightCollections.length - currentIndex === 2;
 
    const airportsAreTheSame = (currentAirport, flight1, flight2) => {
        return (currentAirport === null || flight1.airport === currentAirport) && flight1.airport === flight2.airport;
    };
 
    if (!atEnd) {
        flights1.forEach((flight1) => {
            flights2.forEach(flight2 => {
                if (airportsAreTheSame(currentAirport, flight1, flight2)) {
                    compareFlights(currentIndex + 1, flight1.airport);
                }
            });
        });
    } else {
        flights1.forEach((flight1) => {
            flights2.forEach(flight2 => {
                if (airportsAreTheSame(currentAirport, flight1, flight2)) {
                    commonDestinations.push({ airport: flight1.airport });
                }
            });
        });
    }
}
 
compareFlights(0);
console.log(commonDestinations);