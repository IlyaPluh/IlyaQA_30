     const getEnterpriseName = (enter) => {
        const fs = require('fs');
        const rawdata = fs.readFileSync('task3.json');
        const enterprises = JSON.parse(rawdata);
        enterprises.map(el => {
            for (let {id} of el.departments) if (id === enter) console.log(el.name)
            for (let {name} of el.departments) if (name === enter) console.log(el.name)
            if (el.id === enter) console.log(el.name)
            }) 
    }
    getEnterpriseName(3);
    getEnterpriseName('Отдел маркетинга')