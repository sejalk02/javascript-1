var marks;
var grade;


marks = prompt("Enter the marks of the student....");


marks = parseFloat(marks);


if (isNaN(marks) || marks < 0 || marks > 100) {
    grade = 'Invalid input. Please enter a number between 0 and 100.';
} else {
    
    if (marks >= 90) {
        grade = 'A+';
    } else if (marks >= 80 && marks < 90) {
        grade = 'A';
    } else if (marks >= 70 && marks < 80) {
        grade = 'B';
    } else if (marks >= 60 && marks < 70) {
        grade = 'C';
    } else if (marks >= 50 && marks < 60) {
        grade = 'D';
    } else {
        grade = 'Fail';
    }
}


console.log("Grade = " + grade);


alert("Your Grade is: " + grade);
