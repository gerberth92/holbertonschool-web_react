interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: '',
  lastName: '',
  age: 0,
  location: '',
};

const student2: Student = {
  firstName: '',
  lastName: '',
  age: 0,
  location: '',
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

for (const e of studentsList) {
  const row = document.createElement('tr');
  const celda1 = document.createElement('td');
  celda1.textContent = e.firstName;
  const celda2 = document.createElement('td');
  celda2.textContent = e.location;
  row.appendChild(celda1);
  row.appendChild(celda2);
  tbody.appendChild(row);
}
table.appendChild(tbody);

document.body.appendChild(table);
