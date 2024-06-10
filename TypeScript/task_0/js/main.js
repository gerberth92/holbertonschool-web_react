var student1 = {
    firstName: '',
    lastName: '',
    age: 0,
    location: '',
};
var student2 = {
    firstName: '',
    lastName: '',
    age: 0,
    location: '',
};
var studentsList = [student1, student2];
for (var _i = 0, studentsList_1 = studentsList; _i < studentsList_1.length; _i++) {
    var estudiante = studentsList_1[_i];
    var li = document.createElement('li');
    li.textContent = estudiante.firstName + estudiante.location;
}
