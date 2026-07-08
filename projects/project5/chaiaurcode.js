const start=document.getElementById('start')
const stop=document.getElementById('stop')

let random=function(){
    let hex='0123456789ABCDEF'
    let colorcode='#'
    for( let i=0;i<6;i++){
        colorcode+=hex[Math.floor(Math.random()*16)]
    }
    return colorcode
}
let intervalid;

let startchanging = function(){
   const bgcchange=function(){
    document.body.style.backgroundColor=random()
   }
   intervalid=setInterval(bgcchange,1000)

}
let stopchanging = function(){
    clearInterval(intervalid)
    intervalid=null

}
start.addEventListener('click',startchanging)
stop.addEventListener('click',stopchanging)