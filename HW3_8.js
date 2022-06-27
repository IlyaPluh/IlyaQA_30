const deleteDepartment = (id) => {
    const fs = require('fs');
    const rawdata = fs.readFileSync('task3.json');
    const enterprises = JSON.parse(rawdata);
    
}
deleteDepartment(7)