var AppView = Backbone.View.extend({
	el: '#heading',
	initialize: function() {
		console.log('running function so far');
		_.bindAll(
			this,
			'onButtonClick'
		);
		var $button = $('#button');
		$button.on('click', this.onButtonClick);
	},

	onButtonClick: function() {
		var $choice = $('#choice');
		var guess = Math.ceil(Math.random()*100);
		console.log(guess);
		var answer = true;
		var challenge = parseInt($choice.val());
		if (challenge == null) {
			answer = false;
		}
		if (typeof challenge != 'number') {
			alert('You must guess a number! Pick again.');
		}
		while (answer){
			if (challenge == guess){
				confirm('You got it! If you want to pick again refresh the page!');
				answer = false;
			}
			else if (challenge < guess) {
				challenge = prompt('Too low! Guess again?');
			}

			else {
				challenge = prompt('Too high! Guess again?');
			}
		}
	}
});
