const addDepartment = (id, name) => {
    const fs = require('fs');
    const rawdata = fs.readFileSync('task3.json');
    const enterprises = JSON.parse(rawdata);
    console.log(enterprises.find(el => el.id === id ? el.departments.push(`name: ${name}`) : console.log()))
    //enterprises.push(name);
    //enterprises.forEach(el => console.log(el))
}
addDepartment(9, "Отдел маркетинга");