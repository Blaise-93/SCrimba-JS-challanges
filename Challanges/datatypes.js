

const allowedToPlay = (age) => {
  //return typeof age
  //return Object.prototype.toString.call([])
  return Object.prototype.toString(age)
}
//console.log(allowedToPlay(studentAge))

'use strict'
let ages = [];
let studentAges = 25
console.log(studentAges) // it won't execute because because it is nt hoisted.


var global = {}

global.connectionString = 'Turing Test is today.'
global.logDir = 'd:\Logs'

//closures 
var myGlobal = (function() {
    var connectionString = 'Test'
    function GetConnection() {
        return connectionString
    }
    return {
        GetConnection
    }
})()
var str = myGlobal.GetConnection()
console.log(str)

let age = [30]
function student(age){
    var age = age[22]
    function mapStudent(){
        return age.map(age => age)
    }
    return mapStudent
}(age)


console.log(student(age))


function simpleFunc(){
    var x = 0
    x++
}

const closureFunc = (() => {
    let num = 0
    function incrementNum() {
        return num++
    }
    return incrementNum
})()


console.log(closureFunc())
console.log(closureFunc())
console.log(closureFunc())
console.log(closureFunc())


//class object

function Person(age, name) {
    this.age = age
    this.name = name

    this.greet = function(){
        return `Good afternoon, ${this.name}, you are ${this.age} years.`
    }
}

let studentName = new  Person(22, "Blaise Ejikeme")
console.log(studentName.greet()) // Good afternoon, Blaise Ejikeme



var Config = {
    start: function(){
        console.log(`Listening to port 5000`)
    },
    update: function(){
        console.log("Update Application every 6 months.") 
    }
}

Config.start() //Listening to port 5000
Config.update() //Update Application every 6 months.


var student = {
    name : "",
    age: '',
    studentId: '',
    studentInfo: function(){
        return `${this.name} whose student ID number is ${this.studentId} celebrated his ${this.age} birthday today.`
    }

}


let Blaise = Object.create(student)

Blaise.name = "Blaise"
Blaise.age = 25
Blaise.studentId = 3456765430
console.log(Blaise.studentInfo())



