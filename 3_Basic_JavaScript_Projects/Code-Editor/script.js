function run()
{
    var a = document.getElementById("code").value;
    var b = document.getElementById("code_result");
    b.innerHTML = a;

    var c = document.getElementById("code_box");
    c.style.display = "none";
    c.setAttribute("class", "animate__animated animate__slideInLeft")

    var d = document.getElementById("code_result_box");
    d.style.display = "block";
    d.setAttribute("class", "animate__animated animate__slideInRight")

    var e = document.getElementById("run_btn");
    e.style.display = "none";

    var f = document.getElementById("return_btn");
    f.style.display = "block";
}

function back()
{
    var d = document.getElementById("code_result_box");
    d.style.display = "none";

    var c = document.getElementById("code_box");
    c.style.display = "block"

    var e = document.getElementById("run_btn");
    e.style.display = "block";

    var f = document.getElementById("return_btn");
    f.style.display = "none";
}


