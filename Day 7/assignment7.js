1) Write a JavaScript program to list the properties of a JavaScript object. 
Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
Sample Output: name,sclass,rollno

Solution:

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
}
console.log(Object.keys(student).join(','));

2) Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property. 
Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 

Solution:
console.log(student);
delete student.rollno;
console.log(student);

3) Write a JavaScript program to get the length of a JavaScript object.  
Sample object : var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 

Solution:
console.log(Object.keys(student).length);

4) Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. 
var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; 

Solution:
var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; 
library.forEach((item, index) => {
   console.log('Book Name : ' + item.title + ' , Author Name: ' + item.author + ' , readingStatus : ' + item['readingStatus']);
})

5) Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. 
Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder. Try To Attempt : Difficult Level Increased 

Solution:



