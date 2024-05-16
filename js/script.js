

document.addEventListener('DOMContentLoaded', function() {   
 
//parcourir les cardes...............................................................................
var products=document.querySelectorAll('.card');
var totalPriceElement = document.querySelector('.total');

products.forEach(product => {

    let price=product.querySelector('.unit-price');
    let unitPrice = parseFloat(price.textContent.replace("$", ""));
    var qt=product.querySelector('.quantity');
    var quantityC = parseInt(qt.textContent);   

    function updateTotalPrice() {             
        if (quantityC > 0) {
            var totalprice = quantityC * unitPrice;
            totalPriceElement.textContent = totalprice;
        } else {
            totalPriceElement.textContent = 0;
        }
    }

      function updateTotal() {
        var total = 0;

        products.forEach(product => {
            //refaire le calcul pour tout les cards
            var quantity = parseInt(product.querySelector('.quantity').textContent);
            var price = parseFloat(product.querySelector('.unit-price').textContent.replace("$", ""));
            total += quantity * price;
        });

        totalPriceElement.textContent = total.toFixed(2);
    }      
    //calculer le nombre des articles...........................................................  
    var plusButton = product.querySelector('.fa-plus-circle');
    plusButton.addEventListener('click', function() {                
        // modi1 var currentval=parseFloat(totalPriceElement.textContent);
            quantityC++;
            qt.textContent= quantityC;

            updateTotalPrice();
            updateTotal();             
        
    });
    //minimiser le nombre des articles.........................................................
    var minusButton = product.querySelector('.fa-minus-circle');
    minusButton.addEventListener('click', function() {
        if (quantityC> 0) {
            --quantityC;
            qt.textContent= quantityC;
            
        
            }else{quantityC=0;}
            updateTotalPrice();
            updateTotal(); 
    });

    //supprimer un article........................................................
    var suppButton = product.querySelector('.fa-trash-alt');
    //(event)=>{} ;
    suppButton.addEventListener('click', function(event) {
        var item=event.target.closest('.card');
        item.remove();
    });
    //liker........................................................
    var loveButton = product.querySelector('.fa-heart');    
    loveButton.addEventListener('click', function() {
        loveButton.style.color = 'red';

});


});
});


