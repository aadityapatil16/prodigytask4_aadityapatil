let logData = "";

document.getElementById("typingArea").addEventListener("keydown", function (event) {
    let key = event.key;
    logData += key + " ";
    document.getElementById("log").textContent = logData;
});

function downloadLog() {
    const blob = new Blob([logData], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "keystroke_log.txt";
    link.click();
}
