document.getElementById("paragrafo")
.innerHTML = "Hello World! Java Script"

var par = document.getElementById("paragrafo2")
var n1 = 10

function funcaoSoma(num1){
    var x = num1 + 3
    return x
}
 
//par.innerHTML = funcaoSoma(1)

function FunctionADDtitulo(){
    if(par.innerHTML === "<h1> titulo criado no JS </h1>"){
        return par.innerHTML = "apaguei"
    } else {
    return par.innerHTML = "<h1> titulo criado no JS </h1>"
    }
}