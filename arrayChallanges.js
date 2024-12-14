
let teaFlavors = ["green tea","black tea","oolong tea"];

let firstTea = teaFlavors[0];

//

let cities = ["london","Tokyo","paris","New York"]
let favoriteCity = cities[2];

//

let teaTypes = ["herbal tea","white tea","masala chai"]
teaTypes[1] = "jasmine tea"

//

let cityVisited = ["Mumbai","Sydney"]
cityVisited.push("Berlin");
// console.log(cityVisited);

//

let teaOrders = ["chai","iced tea","matcha","early greay"]
teaOrders.pop(3);
// console.log(teaOrders);

// 

let popularTeas = ["green tea","oolang tea","chai"]

let softCopyTeas = popularTeas;
// console.log(softCopyTeas);

//

let topCities = ["Berlin","Singapore","New York"]
let hardCopyCities = [...topCities];
// console.log(topCities);

//

let europeanCities = ["paris","Rome"]
let asianCities = ["Tokyo","Bangkok"]
let worldCities = europeanCities.concat(asianCities);
// console.log(typeof(worldCities));

//

let teaMenu = ["Masala tea","oolong tea","green tea","earl grey"]
let menuLength = teaMenu.length;
// console.log(menuLength);

//

cityBucketList = ["kyoto","london","cape town","vancover"];
let isLondonInlist = cityBucketList.includes("london");
console.log(isLondonInlist);









