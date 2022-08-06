function calcular(){
    var r1=window.document.getElementById("re1")
    var r2=window.document.getElementById("re2")
    var r3=window.document.getElementById("re3")
    var req=window.document.getElementById("req")
    var ra =Number.parseInt(r1.value)
    var rb =Number.parseInt(r2.value)
    var rc =Number.parseInt(r3.value)
    var rp1 =(1/ra+1/rb+1/rc)
    var res=1/rp1
    var rp2=(ra*rb)/(ra+rb)
    
if(rp2==(ra*rb)/(ra+rb) && rp2<1000){
    req.innerHTML= `Valor equivalente: ${rp2.toFixed(2)} &Omega;`
}
else{
    req.innerHTML= `Valor equivalente: ${res.toFixed(2)} K&Omega;`
}

if   (rp1==(1/ra+1/rb+1/rc) && rp1<1000){
    req.innerHTML= `Valor equivalente: ${res.toFixed(2)} &Omega;`
}
else{
    req.innerHTML= `Valor equivalente: ${res.toFixed(2)} K&Omega;`
}
}
document.write(Date());


