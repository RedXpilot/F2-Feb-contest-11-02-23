/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  arr.map(({id, name, age, marks})=>{
    if(marks>50)
    {
        console.log(`Id:${id}, Name:${name}, Age:${age}, Marks:${marks}`);
    }
  });
}

function PrintStudentsbyForEach() {
  arr.forEach(elements => {
    if(elements.marks>50)
    console.log(elements)
  });
}

function addData() {
  arr.push({id:4,name:"susan",age:"20",marks:45});
  console.log(arr);
}

function removeFailedStudent() {
  arr.forEach(elements => {
    if(elements.marks<50)
    arr.pop(elements);
  });

  console.log(arr);
}

function concatenateArray() {
  let brr = [
    { id: 4, name: "tute", age: "19", marks: 60 },
    { id: 5, name: "mate", age: "20", marks: 75 },
    { id: 6, name: "ramen", age: "21", marks: 45 },
  ];

  let crr = arr.concat(brr);

  console.log(crr);
}
