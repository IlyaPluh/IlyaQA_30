const editDepartment = (id, name) => {
    const fs = require('fs');
    const rawdata = fs.readFileSync('task3.json');
    const enterprises = JSON.parse(rawdata);
    const getDepartment = (val) => {
        let department;
        enterprises.forEach((company) => {
            const dept = company.departments.find((el) => {
                return el.id == val || el.name == val;
            });
            if (dept) department = dept;
        });
        return department ? department : false
    }

    const department = getDepartment(id)
    if(department) department.name = name
    else console.log("No id")
    console.log(enterprises[0])
}
editDepartment(2, "inc")
