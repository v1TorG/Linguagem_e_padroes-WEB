document.getElementById("paragrafo")
.innerHTML = "Hello World! Java Script"

var par = document.getElementById("paragrafo2")
var n1 = 10

function funcaoSoma(num1){
    var x = num1 + 3
    return x
}

par.innerHTML = funcaoSoma(1)