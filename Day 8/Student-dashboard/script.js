
console.log("Student Marks Dashboard");


const students = [
    { name: "Arun", maths: 85, science: 90, english: 80 },
    { name: "Bala", maths: 70, science: 75, english: 65 },
    { name: "Charan", maths: 95, science: 92, english: 88 },
    { name: "Deepa", maths: 45, science: 55, english: 60 },
    { name: "Eswar", maths: 30, science: 35, english: 50 },
    { name: "Farah", maths: 80, science: 85, english: 90 }
];


const total = s => s.maths + s.science + s.english;

const average = s => Number((total(s) / 3).toFixed(2));

const grade = avg =>
    avg >= 90 ? "A+" :
    avg >= 80 ? "A" :
    avg >= 70 ? "B" :
    avg >= 50 ? "C" : "Fail";


console.log(total(students[0]));
console.log(average(students[0]));
console.log(grade(average(students[0])));


const report = students.map(s => ({
    name: s.name,
    total: total(s),
    average: average(s),
    grade: grade(average(s))
}));

console.table(report);


const passed = students.filter(s =>
    [s.maths, s.science, s.english].every(mark => mark >= 40)
);

const failedCount = students.length - passed.length;

console.log("Passed Students:", passed);
console.log("Failed Students:", failedCount);


const classAverage = (
    report.reduce((sum, s) => sum + s.average, 0) /
    report.length
).toFixed(2);

const topper = report.reduce((best, s) =>
    s.total > best.total ? s : best
);

const subjectAverage = students.reduce((result, s) => {
    result.maths += s.maths;
    result.science += s.science;
    result.english += s.english;

    return result;
}, { maths: 0, science: 0, english: 0 });

console.log(`Class Average: ${classAverage}`);
console.log(`Topper: ${topper.name}`);
console.log(`Maths Average: ${(subjectAverage.maths / students.length).toFixed(2)}`);
console.log(`Science Average: ${(subjectAverage.science / students.length).toFixed(2)}`);
console.log(`English Average: ${(subjectAverage.english / students.length).toFixed(2)}`);


const sortedReport = [...report]
    .sort((a, b) => b.total - a.total)
    .map((s, i) => ({
        ...s,
        rank: i + 1
    }));


function showTable(list) {
    const rows = list.map((s, i) => `
        <tr>
            <td>${s.rank ?? "-"}</td>
            <td>${s.name}</td>
            <td>${s.total}</td>
            <td>${s.average}</td>
            <td>${s.grade}</td>
        </tr>
    `).join("");

    document.getElementById("board").innerHTML = rows;
}


document.getElementById("allBtn").addEventListener("click", function () {
    showTable(report);
});


document.getElementById("passedBtn").addEventListener("click", function () {
    const passedReport = report.filter(s =>
        students.find(student => student.name === s.name) &&
        students.find(student => student.name === s.name)
            .maths >= 40 &&
        students.find(student => student.name === s.name)
            .science >= 40 &&
        students.find(student => student.name === s.name)
            .english >= 40
    );

    showTable(passedReport);
});


document.getElementById("sortBtn").addEventListener("click", function () {
    showTable(sortedReport);
});

showTable(report);


document.getElementById("json").textContent =
    JSON.stringify(report, null, 2);


document.getElementById("parseBtn").addEventListener("click", function () {

    const jsonInput = document.getElementById("jsonInput").value;
    const message = document.getElementById("jsonMessage");

    try {
        const parsedData = JSON.parse(jsonInput);

        message.textContent = "Valid JSON!";
        console.log(parsedData);

    } catch (error) {
        message.textContent = "Invalid JSON! Please check your input.";
    }

});
