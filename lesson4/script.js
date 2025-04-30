
const MSFTStockClosingPrices = [254.12, 253.12, 256.97, 257.52, 258.93];
const AAPLStockClosingPrices = [256.45, 255.25, 259.10, 260.75, 261.88];


// Write your code below
function getBetween(price) {
	
	
	let count = 0;
    for (let key in price) {
        if (price[key] >= 254 && price[key] <= 257) {
            count = count + 1;
        }   }

    return count;
};


const StockDailyPerformance = [3.1, 2.4, 1.1, 2.8, 4.5, 2.7]


const sortPerformanceInAscOrder = (arr) =>{
    let sortedArray = arr.sort((a, b) => a - b);
    return sortedArray; 
}


console.log(sortPerformanceInAscOrder(StockDailyPerformance));





console.log("Closing price of MSFT between 254 to 257: " + getBetween(MSFTStockClosingPrices))
console.log("Closing price of AAPL between 254 to 257: " + getBetween(AAPLStockClosingPrices))