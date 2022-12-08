const Person = {
    firstName: "Tarpan",
    lastName: "",
    id: 112,
    fullName: function() {
        return this.firstName +" "+ this.lastName;
    }
}

Person.lastName = "Das"; // Assigning value

console.log(Person.fullName());

/*
the this keyword refers to an object.

In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.

NOTE: We can declare String, Number, Boolean, etc. as objects, however, we should not do so.
They complicate our code and slows down our execution speed.
*/