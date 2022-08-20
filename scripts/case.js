// create listener

// This is for increase quantity of product
document.getElementById('btn-case-plus').addEventListener('click',function(){
    const increasePlus = updateQuantityValue('case-number-flied',true)
    getTotal('case-price-total',increasePlus,59)

    calculate()
    
})



// This is for decrease quantity of product
document.getElementById('btn-case-minus').addEventListener('click',function(){
    const decreasePlus = updateQuantityValue('case-number-flied',false)
    getTotal('case-price-total',decreasePlus,59)

    
    calculate()

     
})
