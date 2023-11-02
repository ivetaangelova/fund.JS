function personInfo(firstName, lastName, age) {
    class Person{
        constructor(firstName,LastName,age){
            this.firstName= firstName;
            this.lastName=lastNameastName;
            this.age=age;

        }
    }
    age= Number(age);
    let myPerson= new Person(firstName, lastName, age);
    return myPerson
}
personInfo("Peter",
"Pan",
"20")