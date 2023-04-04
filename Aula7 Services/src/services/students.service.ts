import { Student } from '../models/student.model';


class StudentsService {
    students: Array<Student>  = [
        {
            name : 'Nelson Kobayashi',
            email : 'nelson@gmail.com',
            document: '86504072000',
            password : '123456',
            age : 41,
            phone : '11 56780-5674' 

        },
        {
            name : 'Háruka Kobayashi',
            email : 'haruka@gmail.com',
            document: '48411305007',
            password : '123456',
            age : 9
        },
        {
            name : 'Ethan Kobayashi',
            email : 'ethan@gmail.com',
            document: '68429378090',
            password : '123456',
            age : 3
        },
        {
            name : 'Miyuki Kobayashi',
            email : 'miyuki@gmail.com',
            document: '82101044030',
            password : '123456',
            age : 39
        },
        {
            name : 'Luke Skywalker',
            email : 'luke@gmail.com',
            document: '37991146022',
            password : '123456',
            age : 1
        },
    ];

    getAll() {
        return this.students;
    }

    getByDocument(document: string) {
        const student = this.students.find((student) => student.document === document);
        return student;        
    }

    create(student: Student) {
        this.students.push(student);
    }

    remove(document: string) {
        const studentIndex = this.students.findIndex((student) => student.document === document);
        if (studentIndex === -1) {
            throw new Error('Estudante não encontrado.');
        }
        this.students.splice(studentIndex, 1);
    }

    update(document: string, student: Student) {
        const studentIndex = this.students.findIndex((student) => student.document === document);
        if (studentIndex === -1) {
            throw new Error('Estudante não encontrado.');
        }
        this.students[studentIndex] = student;
    }
}

export default new StudentsService();