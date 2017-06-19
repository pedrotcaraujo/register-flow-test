(function() {
	var scope = {}

	function typemessage(messages, index) {
		$(messages.get(index)).addClass('loading');
		$(messages.get(index)).fadeIn('slow', function() {
			$('.messages').scrollTop($('.messages')[0].scrollHeight);
		});
		setTimeout(function() {
			$(messages.get(index)).removeClass('loading');
			$(messages.get(index)).find('.text').fadeIn('slow', function() {
				$('.messages').scrollTop($('.messages')[0].scrollHeight);
			});
			if(messages.get(++index)) {
				typemessage(messages, index)
			}
		}, 1500)
	}

	function nextStep(el) {
		$('.text-type-field').hide();
		typemessage($(el).find('p'), 0)
		$(el +'-form').show();
	}

	function bindScopes(key) {
		var binds = $('.messages').find('[data-bind="'+key+'"]');
		binds.text(scope[key]);
	}

	nextStep('#greetings');


	$(document).on('submit', '#greetings-form form', function(e) {
		e.preventDefault();
		$this = $(this)
		var value = $this.find('input').val()
		scope['userName'] = value;
		$('#greetings').next().find('p').fadeIn()
		bindScopes('userName')
		nextStep('#documentations')

	})

	$(document).on('submit', '#documentations-form form', function(e) {
		e.preventDefault();
		$this = $(this)
		var value = $this.find('input').val()
		scope['document'] = value;
		$('#documentations').next().find('p').fadeIn()
		bindScopes('document')
		nextStep('#address-cep')
	})

	$(document).on('submit', '#address-cep-form form', function(e) {
		e.preventDefault();
		$this = $(this)
		var value = $this.find('input').val()
		scope['cep'] = value;
		$('#address-cep').next().find('p').fadeIn()
		bindScopes('cep')
		nextStep('#address-cep-confirm')
	})

	$(document).on('submit', '#address-cep-confirm-form form', function(e) {
		e.preventDefault();
		$this = $(this)
		var value = $this.find('input').val()
		scope['cepConfirm'] = value;
		$('#address-cep-confirm').next().find('p').fadeIn()
		bindScopes('cepConfirm')
		nextStep('#address-additional')
	})

	$(document).on('submit', '#address-additional-form form', function(e) {
		e.preventDefault();
		$this = $(this)
		var value = $this.find('input').val()
		scope['address'] = value;
		$('#address-additional').next().find('p').fadeIn()
		bindScopes('address')
		nextStep('#email')
	})

	$(document).on('submit', '#email-form form', function(e) {
		e.preventDefault();
		$this = $(this)
		var value = $this.find('input').val()
		scope['email'] = value;
		$('#email').next().find('p').fadeIn()
		bindScopes('email')
		nextStep('#email-confirm')
	})

	$(document).on('submit', '#email-confirm-form form', function(e) {
		e.preventDefault();
		$this = $(this)
		var value = $this.find('input').val()
		scope['emailConfirm'] = value;
		$('#email-confirm').next().find('p').fadeIn()
		bindScopes('emailConfirm')
		nextStep('#phone')
	})

	$(document).on('submit', '#phone-form form', function(e) {
		e.preventDefault();
		$this = $(this)
		var value = $this.find('input').val()
		scope['phone'] = value;
		$('#phone').next().find('p').fadeIn()
		bindScopes('phone')
		nextStep('#payment-method')
	})

	$(document).on('submit', '#payment-method-form form', function(e) {
		e.preventDefault();
		$this = $(this)
		var value = $this.find('input').val()
		scope['paymentMethod'] = value;
		$('#payment-method').next().find('p').fadeIn()
		bindScopes('paymentMethod')
		nextStep('#payment-register')
	})

	$(document).on('submit', '#payment-register-form form', function(e) {
		e.preventDefault();
		$this = $(this)
		var value = $this.find('input').val()
		scope['creditCard'] = value;
		$('#payment-register').next().find('p').fadeIn()
		bindScopes('creditCard')
		nextStep('#pick-address')
	})

	$(document).on('submit', '#pick-address-form form', function(e) {
		e.preventDefault();
		$this = $(this)
		var value = $this.find('input').val()
		scope['deliveryAddress'] = value;
		$('#pick-address').next().find('p').fadeIn()
		bindScopes('deliveryAddress')
		nextStep('#done')
	})
})()