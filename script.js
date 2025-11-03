function calculateGrade(name, age, marks) {
    let grade;
    if (marks < 0 || marks > 100) {
        return "Error: Marks must be between 0 and 100.";
    }
    if (marks >= 90) {
        grade = "A";
    } else if (marks >= 75) {
        grade = 'B';
    } else {
        grade = 'C';
    }
    const output = `Name: ${name}
Age: ${age}
Grade: ${grade}`;

    return output;
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('gradeForm');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const age = parseInt(document.getElementById('age').value);
        const marks = parseInt(document.getElementById('marks').value);

        const result = calculateGrade(name, age, marks);

        resultDiv.innerHTML = '<pre>' + result + '</pre>';
    });
});