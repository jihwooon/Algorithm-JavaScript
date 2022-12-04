class Student {
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = [];
    }

    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    markLate() {
        this.tardies += 1;
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
    }
    addScore(score) {
        this.scores.push(score);
        return this.scores;
    }
    calculateAverage() {
        const sum = this.scores.reduce(function (a, b) { return a + b; });
        return sum/this.scores.length;
    }
    static EnrollStudents() {
        return 'ENROLLING STUDENTS!';
    }
}

describe('Student class', () => {
    it('firstStudent 변수가 일치하면 통과한다.', () => {
        let firstStudent = new Student("Colt", "Steele",1);

        expect(firstStudent.firstName).toEqual('Colt');
        expect(firstStudent.lastName).toEqual('Steele');
        expect(firstStudent.fullName()).toBe('Your full name is Colt Steele');
        expect(firstStudent.markLate()).toBe('Colt Steele has been late 1 times');

    });

    it('secondStudent 변수가 일치하면 통과한다.', () => {
        let secondStudent = new Student("Blue", "Steele",2);

        expect(secondStudent.firstName).toEqual('Blue');
        expect(secondStudent.lastName).toEqual('Steele');
        expect(secondStudent.fullName()).toBe('Your full name is Blue Steele');
        expect(secondStudent.markLate()).toBe('Blue Steele has been late 1 times');
        expect(Student.EnrollStudents()).toBe('ENROLLING STUDENTS!');
    });
});
