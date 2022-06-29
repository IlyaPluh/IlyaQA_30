const editEnterprise = (id, name) => {
    const fs = require('fs');
    const rawdata = fs.readFileSync('task3.json');
    const enterprises = JSON.parse(rawdata);
    const getEnterprise = (val) =>{
        let enterprise = enterprises.find(el => el.id === val || el.name === val)
        return enterprise ? enterprise : false
    }

    const enterprise = getEnterprise(id)
    if(enterprise) enterprise.name = name;
    //else throw new Error("No id");
    else console.log("No id");
    console.log(enterprises)
}
editEnterprise(5, "Pluh")