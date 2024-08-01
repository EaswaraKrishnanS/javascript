function changecolor() {
    if (document.body.style.backgroundColor === "white" && document.body.style.color === "black") {
        document.body.style.color = "white";
        document.body.style.backgroundColor = "black";
    } else {
        document.body.style.color = "black";
        document.body.style.backgroundColor = "white";
    }
}
