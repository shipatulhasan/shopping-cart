
function updateQuantityValue(fieldId,isIncrease){
        const numberField = document.getElementById(fieldId)
        const previousNumber = parseInt(numberField.value)
        let newNumber

        if(isIncrease){

            newNumber = previousNumber + 1 
        }else{

            newNumber = previousNumber - 1
        }
          // validation 
          if(newNumber < 0 || isNaN(newNumber)){
            alert('please provide a valid number')
            return 0
        }
        numberField.value = newNumber

      

        return newNumber
    }
// For setting inner text

    function setValue(id, value){
        const getElement =  document.getElementById(id)
        getElement.innerText = value
    }


function getTotal(filedId,quantity,price){

    const newTotal = quantity * price
    setValue(filedId,newTotal)
}

function getElementValue(id){
    const currentElement = document.getElementById(id)
    const currentTotal = parseInt(currentElement.innerText)
    return currentTotal
}



function calculate(){

    // subtotal calculation

    const getPhoneTotal = getElementValue('phone-price-total')
    const getCaseTotal = getElementValue('case-price-total')
    const subtotal = getPhoneTotal + getCaseTotal

    // tex calculation
    const tex = parseInt((subtotal * 0.1).toFixed(2))

    // totalAmmount calculation

    const totalAmmount = subtotal + tex


    setValue('subtotal', subtotal)
    setValue('tex-total', tex)
    setValue('total', totalAmmount)
    

}

let count = 0;console.log(parseInt("count"+ 1));
console.log(Math.pow(4, 0.5)+"spiderman"+"987"+Math.sqrt(9))
function generatePin(){ 
    return Math.floor(Math.random()*90000) + 10000; 
}
const pin=generatePin()
console.log(pin)

function vanish(id){
    const element = document.getElementById(id)
    element.style.display = 'none'
}