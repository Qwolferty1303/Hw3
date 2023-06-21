// 1)
const person = {
    name: 'Alex',
    age: 24,
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
};

person.call();


// 2)

const person = {
    name: 'Alex',
    age: 24,
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
};

person.call();


// 3)

const person = {
    name: 'Alex',
    age: 24,
    city: 'Baku',
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
};

for (let key in person) {
    console.log(key);
}


// 4)

const person = {
    name: 'Alex',
    age: 24,
    city: 'Baku',
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
};

for (let key in person) {
    console.log(person[key]);
}


// 5)

const person = {
    name: 'Alex',
    age: 24,
    city: 'Baku',
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
};

const personArray = Object.entries(person);
console.log(personArray);


// 6)

const person = {
    name: 'Alex',
    age: 24,
    city: 'Baku',
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
};

const personString = JSON.stringify(person);
console.log(personString);


// 7)

let obj = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
};

function Person(name, age, isMarried, hasCar, hasJob, job, childs, awards) {
    this.name = name;
    this.age = age;
    this.isMarried = isMarried;
    this.hasCar = hasCar;
    this.hasJob = hasJob;
    this.job = job;
    this.childs = childs;
    this.awards = awards;
}

const person = new Person(
    obj.name,
    obj.age,
    obj.isMarried,
    obj.hasCar,
    obj.hasJob,
    obj.job,
    obj.childs,
    obj.awards
);

console.log(person);

// 8)

// Object
// Array
// String
// Number
// Boolean

// 9)

function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
}

const newPerson = new Person('John', 30, 'Engineer');
console.log(newPerson);
