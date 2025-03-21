

document.getElementById("btn").onclick = function () {
    let email = document.getElementById("gmail").value.trim(); // Lấy giá trị từ ô input

    if (email.includes("@") && email.endsWith(".com")) {
        document.getElementById("true").style.display = "block";
        document.getElementById("false").style.display = "none";
    } else {
        document.getElementById("true").style.display = "none";
        document.getElementById("false").style.display = "block";
    }
};

