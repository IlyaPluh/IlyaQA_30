let checkAge = () => {
    age = prompt('Enter age');
    // if (typeof age !== 'number') console.log("Enter number");
    if (isNaN(age) === true || age === '') alert("Enter number");
    else if (age < 18) alert(`You don’t have access cause your age is ${age} It’s less then 18`);
    else if (age >=  18 && age < 60) alert('Welcome!');
    else if (age > 60) alert('Keep calm and look Culture channel');
    else alert("Technical work");
}
// checkAge(17);
// checkAge(18);
// checkAge(61);
// checkAge('hello');
// checkAge('2');
