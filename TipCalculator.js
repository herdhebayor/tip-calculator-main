const billInput = document.getElementById("bill")
const personsInput = document.getElementById('persons')
const button = document.querySelectorAll('#btn')
const tipAmt = document.getElementById('tipAmt');
const personsAmt = document. getElementById('personsAmt')
var billErr = document.querySelector('.billError')
var personsErr = document.querySelector('.personsError')
const resetBtn = document.getElementById('reset')
const custom = document.getElementById("custom-btn")
const errMsg = document.querySelector(".customErr")




billInput.value = 0
personsInput.value = 0
billInput.addEventListener('click',()=>{
  billInput.value = ' '
})
personsInput.addEventListener('click',()=>{
  personsInput.value = ' '
})


//CUSTOM INPUT

//SHOW IF THERE IS ERROR WHEN ENTER IS PRESSED OR CALCULATE
custom.addEventListener('keypress',(e)=>{
  
  if(e.keyCode === 13){
    let customVal= custom.innerHTML
    custom.blur()
    if(customVal == ' ' ){
    custom.innerHTML = 'Custom'
    }
    if(!customVal.match(/\d+/)){
      custom.classList.add('errorBorder')
      errMsg.innerHTML = "inavlid input type. Numbers only"
      errMsg.classList.add("show")
      setInterval(()=>{
        errMsg.classList.remove('show')
      }, 5000 )
    
    }else{
      custom.classList.remove('errorBorder')
      checkError(custom)
    }
  }
  
})


custom.addEventListener('click',()=>{
  custom.innerHTML = ' '
  custom.focus()
})
custom.addEventListener('blur',()=>{
  if(custom.innerHTML == ''){
    custom.innerHTML = 'Custom'
  }
})


//SELECT TIP PERCENTAGE
button.forEach(btn =>{
  btn.addEventListener('click', (e)=>{
    let target = e.target
   checkError(target)
  })
})





function checkError(element){
  let tip, total
  if(billInput.value == '' || billInput.value == 0){
    billErr.innerHTML ="input can't be empty"
    billInput.classList.add('errorBorder')
  }
  else if(!billInput.value.match(/\d+/)){
    billErr .innerHTML = "Only type of Number is allowed"
    billInput.classList.add('errorBorder')
  }
  else if(personsInput.value == '' || personsInput.value == 0){
    personsErr.innerHTML ="input can't be empty"
    personsInput.classList.add('errorBorder')
  }
  else if(!personsInput.value.match(/\d+/)){
    personsErr .innerHTML = "Only type of Number is allowed"
    personsInput.classList.add('errorBorder')
  }
  else{
    billErr.innerHTML =' '
    personsErr.innerHTML =' '
    personsInput.classList.remove('errorBorder')
    billInput.classList.remove('errorBorder')
    
    let val = element.innerHTML.match(/\d+/) *0.01
    element.classList.add('active');
    tip = billInput.value * val;
    tipAmt.innerHTML = tip.toFixed(2)
    total = tip/ personsInput.value
    personsAmt.innerHTML = total.toFixed(2)
    resetBtn.classList.add('active')
  }
}
//RESET
resetBtn.addEventListener('click', function(){
  if(this.className.includes('active')){
    window.location.reload()
  }
})


