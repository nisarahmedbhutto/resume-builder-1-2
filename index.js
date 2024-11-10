var buttonToggle = document.getElementById("hide-skills");
var skills = document.getElementById("skills");
var resumePage = document.getElementById("contenor");
var viewResume = document.getElementById("viewResume");
buttonToggle.addEventListener("click", function () {
    if (skills.style.display === "none") {
        skills.style.display = "block";
    }
    else {
        skills.style.display = "none";
    }
});
viewResume.addEventListener("click", function () {
    if (resumePage.style.display === "none") {
        resumePage.style.display = "block";
    }
    else {
        resumePage.style.display = "none";
    }
});
