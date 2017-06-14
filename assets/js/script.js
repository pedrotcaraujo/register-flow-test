(function() {
	var $typing = $('.typing');
	var scope = {}
	var initialHeigth = $('.messages').innerHeight();

	function checkScroll() {
		console.log($('.messages').innerHeight(), innerHeight);
		if($('.messages').height > initialHeigth) {
			$('.messages').show();
		}
	}


	function typemessage(messages, index) {
		$typing.show();
		setTimeout(function() {
			$(messages.get(index)).fadeIn();
			$('.messages').scrollTop(500);
			$typing.hide();
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
		var userName = $this.find('input').val()
		scope['userName'] = userName;
		$('#greetings').next().find('p').fadeIn()
		bindScopes('userName')
		nextStep('#documentations')

	})

	$(document).on('submit', '#documentations-form form', function(e) {
		e.preventDefault();
		$this = $(this)
		var document = $this.find('input').val()
		scope['document'] = document;
		$('#documentations').next().find('p').fadeIn()
		bindScopes('document')
		nextStep('#address-cep')
	})
})()