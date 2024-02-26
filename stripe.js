
  var stripe = Stripe('your_publishable_key');

  
  var elements = stripe.elements();

  
  var card = elements.create('card');

  
  card.mount('#card-element');

 
  var form = document.getElementById('payment-form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    
    stripe.createToken(card).then(function(result) {
      if (result.error) {
        
        console.error(result.error.message);
      } else {
      
        stripeTokenHandler(result.token);
      }
    });
  });

 
  function stripeTokenHandler(token) {
    
    var form = document.getElementById('payment-form');
    var hiddenInput = document.createElement('input');
    hiddenInput.setAttribute('type', 'hidden');
    hiddenInput.setAttribute('name', 'stripeToken');
    hiddenInput.setAttribute('value', token.id);
    form.appendChild(hiddenInput);

 form.submit();
  }
