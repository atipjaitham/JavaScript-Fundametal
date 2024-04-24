// Retrieve the number of rounds from the user
let round = prompt("จำนวนรอบที่ต้องการเล่น");
let score = 0;

// Loop through each round
for (let i = 0; i < round; i++) {
    // Prompt the user to guess 'หัว' or 'ก้อย'
    let answer = prompt("ทายมาเลย หัว หรือ ก้อย!");

    // Validate the user's input
    if (answer === "หัว" || answer === "ก้อย") {
        // Generate a random result ('หัว' or 'ก้อย')
        let random_answer = Math.random() <= 0.5 ? "หัว" : "ก้อย";

        // Check if the user's guess matches the random result
        if (answer === random_answer) {
            alert("คุณทายถูก");
            // Update the result display with the outcome
            document.getElementById("result").innerHTML += `${answer} XXX ${random_answer} คุณชนะ<br>`;
            score++; // Increment the score for a correct guess
        } else {
            alert("คุณทายผิด");
            // Update the result display with the outcome
            document.getElementById("result").innerHTML += `${answer} XXX ${random_answer} คุณแพ้<br>`;
        }
    } else {
        alert("โปรดพิมพ์แค่ หัว หรือ ก้อย เท่านั้น !");
        i--; // Decrement i to repeat the current round if invalid input
    }
}

// Display the final score and number of rounds played
document.getElementById("score").innerHTML = "คุณได้คะแนน : " + score;
document.getElementById("round").innerHTML = "จำนวนรอบที่เล่น : " + round;
