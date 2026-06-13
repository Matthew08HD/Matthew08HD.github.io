const checkbox = document.getElementById("task1");
const today = new Date().toDateString();
const savedDate = localStorage.getItem("checkDate");
const savedState = localStorage.getItem("checkState");

if (savedDate === today) {

    checkbox.checked = savedState === "true";
} 

else {
    checkbox.checked = false;
    localStorage.setItem("checkDate", today);
    localStorage.setItem("checkState", "false");

}

checkbox.addEventListener("change", () => {
    localStorage.setItem("checkState", checkbox.checked);
    localStorage.setItem("checkDate", today);
    
});
