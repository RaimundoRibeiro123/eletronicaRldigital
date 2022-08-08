function calcular(){
    let r1=window.document.getElementById("re1")
    let r2=window.document.getElementById("re2")
    let r3=window.document.getElementById("re3")
    let req=window.document.getElementById("req")
    let ra =Number.parseInt(r1.value)
    let rb =Number.parseInt(r2.value)
    let rc =Number.parseInt(r3.value)
    let rp1 =1/ra+1/rb
    let veq1=1/rp1
    let rp2=1/ra+1/rb+1/rc
    let veq2=1/rp2

if (rp1==(1/ra+1/rb) && (veq1>=1000)){
    req.innerHTML= `Valor equivalente: ${veq1.toFixed()} k&Omega;`
}
else if (veq1<1000){
    req.innerHTML= `Valor equivalente: ${veq1.toFixed()} &Omega;` 
}
if (rp2 == (1/ra+1/rb+1/rc) && (veq2>=1000)){
   req.innerHTML= `Valor equivalente: ${veq2.toFixed()} k&Omega;`
}
else if(veq2<1000){
    req.innerHTML= `Valor equivalente: ${veq2.toFixed()} &Omega;`
}
}

document.write(Date());