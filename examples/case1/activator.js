module.exports = {
	start: function(ctx) {
		console.log('hello, plexi!');
		
		require('./main.js');
		
		try {
			ctx.require('d');
		} catch(e) {
			console.log('this case is error', e.message);
		}
	}
};