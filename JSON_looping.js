let responseJSON = [{
    "_id": {
      "$oid": "5968dd23fc13ae04d9000001"
    },
    "product_name": "sildenafil citrate",
    "supplier": "Wisozk Inc",
    "quantity": 261,
    "unit_cost": "$10.47"
  }, {
    "_id": {
      "$oid": "5968dd23fc13ae04d9000002"
    },
    "product_name": "Mountain Juniperus ashei",
    "supplier": "Keebler-Hilpert",
    "quantity": 292,
    "unit_cost": "$8.74"
  }, {
    "_id": {
      "$oid": "5968dd23fc13ae04d9000003"
    },
    "product_name": "Dextromathorphan HBr",
    "supplier": "Schmitt-Weissnat",
    "quantity": 211,
    "unit_cost": "$20.53"
  }]

  //Normal  for loop
  for( let i = 0; i < responseJSON.length; i++){
       console.log(" Item "+i, responseJSON[i]);
  }

  //forEach()
  responseJSON.forEach((record) => {
      console.log(" Record : ", record);
  });

  //for of
  for(const product of responseJSON){
      console.log(" Product : ", product);
  }

  //for of  using keys 
  responseJSON.forEach((record) => {

    for (const key of Object.keys(record) ){
        console.log("Key : ", key, " Value : ", record[key]);
    }
  })

  //for in 
  responseJSON.forEach((product) => {
      console.log(" Product ", product);
      for(const key in product){
          console.log("Key : ", key, "Value : ", product[key]);
      }
  })

