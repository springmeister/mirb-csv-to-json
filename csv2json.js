const fs = require('fs')
const path = require('path')
const csv = require('csvtojson')
const csvPath = path.join(__dirname, 'customer-data.csv')


const createJsonFromCsv = (fileName='csv2json.json') => {

    const jsonFile = path.join(__dirname, fileName);

    csv()
    .fromFile(csvPath)
    .then((jsonObj) => {
        fs.writeFileSync(jsonFile, JSON.stringify(jsonObj, null, '\t'));
    });

}

createJsonFromCsv(process.argv[2]);



