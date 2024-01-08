// An array of objects representing images, where each object has 'height' and 'width' properties.
var images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 },
  ];
  
  // An empty array to store the calculated areas.
  var areas = [];
  
  // Using the forEach method to iterate over each element (image object) in the 'images' array.
  images.forEach(function (image) {
    // For each image, calculate the area (height * width) and push it into the 'areas' array.
    areas.push(image.height * image.width);
  });
  
  // At this point, the 'areas' array contains the calculated areas for each image.