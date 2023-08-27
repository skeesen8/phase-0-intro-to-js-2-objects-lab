const employee = {  
    name: "bob",  
    streetAddress: "1111 st"  
}

function updateEmployeeWithKeyAndValue(employee, key, value)
{
const newEmployee = {...employee};
newEmployee[key] = value;
return newEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)
{employee.name = "Sam"
employee.streetAddress = "12 Broadway"
return employee
}
function deleteFromEmployeeByKey(employee,key)
    {const newClone = {...employee}
    delete newClone[key];
    return newClone
}

function destructivelyDeleteFromEmployeeByKey(employee,key){
    const newCloneOne = destructivelyDeleteFromEmployeeByKey[employee,key]
    delete employee.name
    delete employee.streetAddress
    return employee

    
}


// function deleteFromEmployeeByKey(employee, key,) {
//     const newwEmployee ={...employee};
//     newwEmployee [key] = "undefined"
// }