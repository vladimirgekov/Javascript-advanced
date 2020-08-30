function storeCatalogue(input) {
  catalogue = {};
  input.map((data) => {
    catalogue[data.split(" : ")[0]] = Number(data.split(" : ")[1]);
  });

  let letter = "";
  Array.from(Object.keys(catalogue))
    .sort((a, b) => a.localeCompare(b))
    .map((product) => {
      if (product[0] !== letter) {
        letter = product[0];
        console.log(product[0]);
      }
      console.log(`  ${product}: ${catalogue[product]}`);
    });
}
storeCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
