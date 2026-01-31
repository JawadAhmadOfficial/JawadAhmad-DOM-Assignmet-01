// Task 1: Change heading text automatically
document.getElementById("mainHeading").innerText =
    "Welcome to JavaScript DOM";

// Task 2: Paragraph text change
function changeParagraph() {
    document.getElementById("para").innerText =
        "Paragraph text changed successfully!";
}

// Task 3: Background color toggle
let isBlue = false;
function changeBackground() {
    if (isBlue) {
        document.body.style.background =
            "linear-gradient(135deg, #667eea, #764ba2)";
    } else {
        document.body.style.background =
            "linear-gradient(135deg, #74ebd5, #9face6)";
    }
    isBlue = !isBlue;
}

// Task 4: Alert message
function showAlert() {
    alert("DOM is working perfectly!");
}

// Task 5: Input text validation + update
function updateText() {
    let input = document.getElementById("userInput").value;

    if (input === "") {
        alert("Please enter some text!");
    } else {
        document.getElementById("displayText").innerText = input;
        document.getElementById("userInput").value = "";
    }
}
