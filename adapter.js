const json = require('./input.json')

const newJson = json.records
    .map((record) => {
        return {
            category: record.fields.category,
            address_zipcode: record.fields.address_zipcode
        }
    })
    .reduce((acc, event) => {
        let zipcode = event.address_zipcode;
        let categories = event.category.split(' -> ');
        let category = categories[0];
        
        if(!acc[zipcode]){
            acc[zipcode] = {
                totalAmount: 0,
                event: {}
            }
        }
        acc[zipcode].totalAmount += 1
        
        if(!acc[zipcode].event[category]){
            acc[zipcode].event[category] = 0
        }
        acc[zipcode].event[category] += 1
        
        return acc
    }, {})


//console.log(newJson)
console.log(JSON.stringify(newJson))