
let stockprice = 300;
console.log(stockprice);

stockprice += 500;
console.log(stockprice);

let money = 6000;
console.log(money);

money += 3000;
money *= 3 ;
console.log(money);


let company = "Microsoft's"// Use the correct quotation
console.log(company);

company = 'Microsoft\'s' // Use escape sequences
console.log(company);

const companyName = "Metaa";
const companyRating = 5;

console.log(companyName + " has a customer satisfaction rating of " + companyRating);



let companyNameNew = companyName.substring(0,4);
console.log(companyNameNew.toUpperCase());


const DayOneClosingPrice = "87.14";
const DayTwoClosingPrice = "84.22";


let averagePrice = (parseFloat(DayOneClosingPrice) + parseFloat(DayTwoClosingPrice)) / 2 ;
console.log(averagePrice);


const TSLAClosingPrices = [230.12, 221.45, 225.61, 219.48, 227.52];

// Write your code below

let TSLAAveragePrices = (TSLAClosingPrices[0] + TSLAClosingPrices[1]   + TSLAClosingPrices[2]  + TSLAClosingPrices[3] + TSLAClosingPrices[4])/5;

console.log(TSLAAveragePrices);

const AAPLCurrentBar = {
	open: 81.12,
	high: 82.59,
	low: 80.09,
	close: 84.71
}

const AAPLPrevBar = {
	open: 81.02,
	high: 82.49,
	low: 79.09,
	close: 83.71
}

// Write your code below

let Open = (AAPLPrevBar.open + AAPLPrevBar.close)/2
let Close = (AAPLCurrentBar.open + AAPLCurrentBar.close + AAPLCurrentBar.high + AAPLCurrentBar.low) / 4

let High =Math.max(AAPLCurrentBar.open, AAPLCurrentBar.high, AAPLCurrentBar.low, AAPLCurrentBar.close)
let Low =Math.min(AAPLCurrentBar.open, AAPLCurrentBar.high, AAPLCurrentBar.low, AAPLCurrentBar.close)

console.log(Open)
console.log(Close)
console.log(High)
console.log(Low)


const stockOHLC = {
	open: 81.12,
	high: 82.59,
	low: 80.09,
	close: 84.71,
}


if (stockOHLC.open > stockOHLC.close) {
    console.log("Stock is bearish")
} else if (stockOHLC.high > stockOHLC.open){
    console.log("Stock is bullish")
};
