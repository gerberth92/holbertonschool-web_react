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
var table = document.createElement('table');
var tbody = document.createElement('tbody');
for (var _i = 0, studentsList_1 = studentsList; _i < studentsList_1.length; _i++) {
    var e = studentsList_1[_i];
    var row = document.createElement('tr');
    var celda1 = document.createElement('td');
    celda1.textContent = e.firstName;
    var celda2 = document.createElement('td');
    celda2.textContent = e.location;
    row.appendChild(celda1);
    row.appendChild(celda2);
    tbody.appendChild(row);
}
table.appendChild(tbody);
document.body.appendChild(table);
