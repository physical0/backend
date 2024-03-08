let students = [
    { name: 'John', score: 80 },
    { name: 'Jane', score: 95 },
    { name: 'Doe', score: 75 },
    { name: 'Alice', score: 90 }
];

function sortstudentsByScoreDescending() {
    students.sort((a, b) => b.score - a.score);
}

sortstudentsByScoreDescending();

console.log("Students sorted by score (descending):", students);
