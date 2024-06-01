function openNav() {
    document.getElementById("sidebar").style.width = "250px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
}

document.getElementById("loginButton").addEventListener("click", function() {
    alert("Login button clicked!");
});
