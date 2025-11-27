
        const btn = document.getElementById("themeSwitch");
        btn.addEventListener("click", () => {
            document.body.classList.toggle("darkmode");
            if(document.body.classList.contains("darkmode")){
                btn.textContent = "Switch to Light Mode";
            } else {
                btn.textContent = "Switch to Dark Mode";
            }
        });
