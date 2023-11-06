function createObjectsFromTable (tableData){
for (let row of tableData){
    let [townName, latitude, longitude] = row.split(` | `);
    latitude= parseFloat(latitude).toFixed(2);
    longitude=parseFloat(longitude).toFixed(2);
    
   let townObj= {town: townName, latitude: latitude, longitude: longitude}
   console.log(townObj);
}
}
createObjectsFromTable(['Plovdiv | 136.45 | 812.575']);

// createObjectsFromTable(['Sofia | 42.696552 | 23.32601',
// 'Beijing | 39.913818 | 116.363625']);