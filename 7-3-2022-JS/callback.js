//CALLBACK

//basic callback example

function messageDisplayer(message) {
    console.log(`****${message}****`);
}
 
function calculator(num1, num2, callback) {
    let sum = num1 + num2;
    callback(sum);
}
 
calculator(5, 5, messageDisplayer);  // ****10****


//kendi örnegim:

const esittir = (aufgabeNum) => {
    console.log(`=============== Aufgabe ${aufgabeNum} ==========`);
}


const görev = (nummer, callback) => {
    callback(nummer)
}

görev(3, esittir)
görev(25, esittir)


//bir callback fonksiyonunu, yüksek derceli fonksiyona cevirebiliriz
//örnek :

const caller = func => {
    console.log("I accept a function and then call it.")
    console.log("I have no idea what I'm going to say.")
    func();
    console.log('---');
}
 
const giveStatus = () => {
    console.log("All systems are running.")
}
 
const giveWeatherReport = () => {
    console.log("Tomorrow will be sunny.")
}
 
const giveLunchMenu = () => {
    console.log('Today we have soup.');
}
 
caller(giveStatus);  // I accept a function and then call it.
                     // I have no idea what I'm going to say.
                     // All systems are running.
                     // ---

caller(giveWeatherReport);
caller(giveLunchMenu);



// program akisini hareketli tutmak icin
//örnek****anlamadim :

const getDataFromDistantServer = callback => {
    setTimeout(() => {
        callback([
            {
                id: 1,
                firstName: 'Harald',
                lastName: 'Stadthoven'
            },
            {
                id: 2,
                firstName: 'Claudia',
                lastName: 'Berkson'
            }
        ]);
    }, 5000);
};
 
const getData = () => {
    console.log(`retrieving data...`);
    getDataFromDistantServer(records => {
        console.log(`I received ${records.length} records: ${records.map(m=> `${m.firstName} ${m.lastName}`).join(', ')}`);
    });
    console.log(`this may take awhile so giving control back to you...`);
}
 
// application
console.log('first task');
getData();
console.log('second task');
getData();
console.log('third task');
 

//
const datenHolen = () => {
    setTimeout(() => {
        console.log(`Merhaba Semih`);
        
    }, 2000);
    return 'DATEN'
}

const datenZeigen = (callbackFuncs) => {
    let ergebnis = callbackFuncs();
    console.log(ergebnis);
}

datenZeigen(datenHolen)



////////////////////////////
7u
const esittir = (aufgabeNum) => {
    console.log(`=============== Aufgabe ${aufgabeNum} ==========`);
}


const görev = (nummer, sevde) => {
    sevde(nummer)
}

görev(3, esittir)
görev(25, esittir)

