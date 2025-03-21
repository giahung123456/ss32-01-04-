let clickNumber=document.getElementById(`nut`)
// let text=document.getElementById(`text`)
let num=document.getElementById(`number`)
let number=0
clickNumber.onclick=function(){
    
    num.innerText=number++
}