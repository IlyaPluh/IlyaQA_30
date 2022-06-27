const addEnterprise = (name) => {
    const fs = require('fs');
    const rawdata = fs.readFileSync('task3.json');
    const enterprises = JSON.parse(rawdata);
    enterprises.push(name);
    enterprises.forEach(el => console.log(el))
}
addEnterprise("Предприятие 4");
