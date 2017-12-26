function Button(text) {
	this.text = text || 'hello';
}
	Button.prototype = {
		create: function(){
			var self = this;
			this.$element = $('<button>');
			this.$element.text(this.text);
			$('body').append(this.$element);
			this.$element.click(function(){
				alert(self.text);
			});
		}
	};
var btn1 = new Button('hello');
var btn2 = new Button('witaj');

btn1.create();
btn2.create();

