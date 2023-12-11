const timePrint=document.querySelector(".time")

setInterval(()=>{
    const currTime=new Date().toLocaleTimeString();
    timePrint.innerHTML=`<h2>${currTime}</h2>`
},1000)


