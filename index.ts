const buttonToggle = document.getElementById("hide-skills") as HTMLButtonElement;
const skills = document.getElementById("skills") as HTMLElement;
const resumePage = document.getElementById("contenor") as HTMLElement;
const viewResume = document.getElementById("viewResume") as HTMLButtonElement;


buttonToggle.addEventListener("click", () => {
    if (skills.style.display === "none") {
        skills.style.display = "block"
    } else {
        skills.style.display = "none"
    }
});


viewResume.addEventListener("click",()=> {
    if(resumePage.style.display === "none"){
    resumePage.style.display = "block"
    } else {
        resumePage.style.display = "none"
    }
})