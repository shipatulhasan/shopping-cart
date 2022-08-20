// This is for increase quantity of product

document.getElementById('btn-phone-plus').addEventListener('click',function(){
    const increase = updateQuantityValue('phone-number-field',true)

    getTotal('phone-price-total',increase, 1219)

    calculate()
})

// This is for decrease quantity of product
document.getElementById('btn-phone-minus').addEventListener('click',function(){
    const decrease = updateQuantityValue('phone-number-field',false)

    getTotal('phone-price-total',decrease, 1219)

    calculate()
})