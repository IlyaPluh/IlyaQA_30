const deleteDepartment = (id) => {
    const fs = require('fs');
    const rawdata = fs.readFileSync('task3.json');
    const enterprises = JSON.parse(rawdata);
    let index = enterprises.findIndex(el => el.id === id);
    enterprises.splice(index, 1);
    console.log(enterprises[2])
}
deleteDepartment(9);