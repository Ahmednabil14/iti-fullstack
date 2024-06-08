// get all images using document default collection
let imagesDefaultCollection = document.images;
console.log(imagesDefaultCollection);

// get all images using document methods
let imagesMethodCollection = document.getElementsByTagName('img');
console.log(imagesMethodCollection);

// get options of city select element
let cityElement = document.getElementById("city");
let allOptions = cityElement.options;
console.log(allOptions)


// Find all rows(tds) for second table in page.
let tableTwoRows = document.getElementsByTagName("table")[1].getElementsByTagName("tr");
console.log(tableTwoRows)

// Find all elements that contain class name fontBlue and BGrey.
let classElements = document.getElementsByClassName('fontBlue BGrey');
console.log(classElements)
