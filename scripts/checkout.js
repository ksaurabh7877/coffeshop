var a = document.getElementById("checkout")

a.addEventListener('submit',function(){
    event.preventDefault()

    var b = setTimeout(function(){
        alert("Your order is accepted")
    }, 0)

    var b1 = setTimeout(function(){ 
        alert('Your order is being prepared')
    }, 3000)
    var b2 = setTimeout(function(){ 
        alert('Your order is being packed')
    }, 8000)
    var b3 = setTimeout(function(){ 
        alert('Your order is out for delivery')
    }, 10000)
    var b4 = setTimeout(function(){ 
        alert('Order delivered')
    }, 12000)
});