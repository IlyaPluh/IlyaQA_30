const moveEmployees = (currentid, newid) => {
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
    const getEnterpriseByDepartment = (val) => {
        let enterprise;
        enterprises.forEach(ent => {
            let department;
            if(ent.departments) {
                department = ent.departments.find(dept => {return dept.id === val || dept.name === val})
            }
            if (department) enterprise = ent;
        })
        return enterprise ? enterprise.name : 'Нет организации с id или именем'
    }

    const current = getDepartment(currentid)
    const newdept = getDepartment(newid)
    if (current && newdept && getEnterpriseByDepartment(currentid) === getEnterpriseByDepartment(newid)) {
        newdept.employees_count += current.employees_count
        current.employees_count = 0
    }
    console.log(enterprises[0])
}
moveEmployees(2, 3)