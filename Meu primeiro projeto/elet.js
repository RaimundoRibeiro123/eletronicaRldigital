function calcular(){
    var r1=window.document.getElementById("re1")
    var r2=window.document.getElementById("re2")
    var r3=window.document.getElementById("re3")
    var req=window.document.getElementById("req")
    var ra =Number.parseInt(r1.value)
    var rb =Number.parseInt(r2.value)
    var rc =Number.parseInt(r3.value)
    var rp1 =(1/ra+1/rb)
    var res1=1/rp1
    var rp2=(1/ra+1/rb+1/rc)
    var res2=1/rp2
    
if ((rp1==1/ra+1/rb && res1>=1000)){
    req.innerHTML= `Valor equivalente: ${res1.toFixed(1)} k&Omega;`
}
else{
   req.innerHTML= `Valor equivalente: ${res1.toFixed(1)} &Omega;`
}

if  (rp2 == 1/ra+1/rb+1/rc && res2>=1000){
   req.innerHTML= `Valor equivalente: ${res2.toFixed(1)} k&Omega;`
}
else {
    req.innerHTML= `Valor equivalente: ${res2.toFixed(1)} &Omega;`
}
}
document.write(Date());


