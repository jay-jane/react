
class Person {
    constructor(name, age) {
        this.name = name; //필드
        this.age = age;
    }
    getInfo = () => {
        return `이름 : ${this.name}, 나이 : ${this.age}`;
    }
}

//default 구문은 반드시 하나
export default Person;
