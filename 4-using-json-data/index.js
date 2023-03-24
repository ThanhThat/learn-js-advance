/**
 * link tutorial: https://www.w3schools.com/js/js_json.asp
 *
 *  Convert  json to string: JSON.parse(dataJson);
 *  Convert Object to JSON: JSON.stringify(Object);
 */

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => console.log(data));
