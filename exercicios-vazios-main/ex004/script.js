var btn = document.getElementById("btn")

function DarkMode(){
    var body = document.querySelector("body")
    body.classList.toggle("dark-mode")

    if (body.classList.contains("dark-mode")) {
        btn.innerHTML = "Light mode"
    }
    else{
        btn.innerHTML = "Dark Mode"
    }
   
}



btn.addEventListener("click", DarkMode);
