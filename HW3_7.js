const deleteEnterprise = (id) => {
    const fs = require('fs');
    const rawdata = fs.readFileSync('task3.json');
    const enterprises = JSON.parse(rawdata);
    enterprises.forEach(el => {
        let index = el.departments.findIndex(dep => dep.id === id && dep.employees_count === 0);
        if(index !== -1) {
            el.departments.splice(index, 1);
        }
    })
    console.log(enterprises[2])
}
deleteEnterprise(10);