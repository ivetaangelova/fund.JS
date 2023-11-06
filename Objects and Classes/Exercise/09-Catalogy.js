function createCatalog(input) {
    let catalog = {};
  
    for (let productInfo of input) {
      let [productName, productPrice] = productInfo.split(" : ");
      let initial = productName[0].toUpperCase();
  
      if (!catalog[initial]) {
        catalog[initial] = [];
      }
  
      catalog[initial].push({ name: productName, price: Number(productPrice) });
    }
  
    let sortedCatalog = Object.keys(catalog).sort();
  
    for (let initial of sortedCatalog) {
      console.log(initial);
  
      catalog[initial].sort((a, b) => a.name.localeCompare(b.name)).forEach((product) => {
        console.log(`  ${product.name}: ${product.price}`);
      });
    }
  }
  createCatalog([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ]
    )