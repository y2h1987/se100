//const p = Promise.resolve({ id: 1, name: 'Alice' });

//Sp.then(value=> console.log(value));
// Chaining the functions
fetchData()
    .then((data) => processData(data))
    .then((processedData) => displayData(processedData));


    
    p.then(value => {}, error => {console.log(error);})