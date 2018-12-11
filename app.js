var phantom = require('phantom');

phantom.create().then(function(ph) {
	ph.createPage().then(function(page) {
		page
			.open('https://github.com/cburgmer/rasterizeHTML.js/blob/master/test/SpecRunner.html')
			.then(function(status) {
				page.render('google.pdf').then(function() {
					console.log('Page Rendered');
					ph.exit();
				});
			});
	});
});
