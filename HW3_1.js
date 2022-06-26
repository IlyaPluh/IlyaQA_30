    const task3_1 = () => {
      const fs = require('fs');
      const rawdata = fs.readFileSync('task3.json');
      const enterprises = JSON.parse(rawdata);

    let allemployees = 0;
    enterprises.filter(el => console.log(`${el.name} (${el.departments.reduce((count, person) => allemployees = count + person.employees_count, 0) === 0 ? 'нет' : allemployees} сотрудников)${el.departments.map(el => `\n- ${el.name} (${el.employees_count === 0 ? 'нет' : el.employees_count} сотрудников)`)}`));
  }
  task3_1();
  