const obj1 ={};
console.log(obj1);



const employee={
    firstName:"Hakan",
    lastName:"Girgin",
    birthDate:1992,
    isInstructor:true,
    languages:["C#","C++","Html"],
    education:{
        highschool:"ANKU",
        master:"IKCU"
    },
    getAge:function(){
        return 2024-this.birthDate
    },
    ".luckyNumber":36
}

console.log(employee);
console.log(employee.firstName);
console.log(employee.languages[0]);
console.log(employee.education.master);
console.log(employee.getAge());
console.log(employee["isInstructor"]);
