function getNumberPromise(number) {

    return new Promise((resolve, reject) => {
        // Simulate an asynchronous operation using setTimeout

        setTimeout(() => {
            if (number === 10) { 
                reject("Error: Number is 10"); // Reject the promise with an error message
            } else {
                resolve(number) }  // Resolve the promise with the number
        }, 2000); // Wait for 2 seconds before resolving the promise


    } )
}; 



getNumberPromise(13).then((value) => {
    console.log(value); // Should log 10 after 2 seconds
});


function fetchData()  {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data Retrieved"); 
        }, 2000);
    });
};


function processData(data) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data = data + " and processed"; 
            resolve(data);
        }, 1000);
    });
}

function displayData(data) {
    // Write your code here
    console.log (data); 
}

// Chaining the functions
fetchData()
    .then((data) => processData(data))
    .then((processedData) => displayData(processedData));


fetch('https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=demo').then(
response => response.json()
).then(
  data => console.log(data['Symbol'])
);


const p2 = new Promise(resolve => setTimeout(() => { data = data + " Hello" ; resolve(data), 1000})); 
