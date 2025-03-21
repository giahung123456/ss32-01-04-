let input = document.getElementById("input");
let nut = document.getElementById("nut");
let subject = document.getElementById("subject");

nut.onclick = function () {
    if (input.value !== "") {
        let li = document.createElement("li");
        li.innerHTML = `<i>${input.value}</i>`;
        subject.appendChild(li);
        input.value = "";
    } else {
        alert("Không được để trống!");
    }
};
