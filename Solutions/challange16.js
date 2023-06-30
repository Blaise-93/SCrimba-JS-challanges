const userData = require('./data')   //using nodes


function transformData(data){
    return data.map(({name, dob }/* destructure the object */) => {
        const fullname = `${name.first} ${name.last}`
        const dateOfBirth = new Date(dob.date).toDateString()
        return {  
                fullName: fullname, 
                birthday: dateOfBirth
        }
    } )
}

console.log(transformData(userData));
