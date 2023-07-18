//Arrow function is useful when you use anonymous function means without function name.

// document.addEventListener("click", () => console.log('click'))

let user = () => name //This is the arrow function


class Person{
    constructor(name){
        this.name = name
    }

    printNameArrow() {
        setTimeout(()=>{
            console.log('Arrow: ' + this.name)

        },100)
    }
    printNameFunction(){
        setTimeout(function(){
            console.log('Function: ' + this.name)
        },100)
    }
}

let person = new Person('Krishna')
person.printNameArrow()//Krishna
person.printNameFunction()//undefined