Parse.initialize("SvIXm6lpaiR9e9hnajEicOGVr9tQAfYDMxi5Wzuz", "jZMWX0q6byyuaPl1TK9hftFwoVonZznBwCjINbuN");

var Spider = Parse.Object.extend("Spider");
var count = 1; 
var blue = '#3498db';
var query = new Parse.Query(Spider);

query.find({
  success: function(results) {
    $(results).each(function() {
    	this.get('name')
    	this.get('front')
    	this.get('research')
    	this.get('visual')
    	this.get('interaction')
    	this.get('product')
	});
  },
  error: function(error) {
    console.log("Error: " + error.code + " " + error.message);
  }
});

loadData = function() {
	query.find({
		success: function(results) {
			$('#spiders').html('');

			var frontSum = 0;
			var researchSum = 0;
			var interactionSum = 0;
			var productSum = 0;
			var visualSum = 0;

			$(results).each(function() {
				var element = $('<span id="spider-' + count + '">').html('<article>' +
					'<h3 id="name"></h3><a class="delete" data-name="' + this.get('Name') + '">delete</a>' +
					'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="658px"' +
						 'height="542px" viewBox="0 0 658 542" enable-background="new 0 0 658 542" xml:space="preserve">' +
					'<g id="spiderweb">' +
						'<polygon id="_x31__anel" fill="none" stroke="#110F0F" stroke-miterlimit="10" points="285,365.5 366,365.5 391.667,288 ' +
							'391.75,287.5 325.333,240 259.667,287.667 284.667,365 	"/>' +
						'<polygon id="_x32__anel" fill="none" stroke="#110F0F" stroke-miterlimit="10" points="261.375,399.562 387.878,399.5 ' +
							'428.121,277.847 428.25,277.062 324.122,202.5 221.167,277.323 261.188,399.438 	"/>' +
						'<polygon id="_x33__anel" fill="none" stroke="#110F0F" stroke-miterlimit="10" points="238,431.5 410.256,431.5 465.074,266.37 ' +
							'465.25,265.181 323.408,164.062 183.167,265.442 237.812,431.312 	"/>' +
						'<polygon id="_x34__anel" fill="none" stroke="#110F0F" stroke-miterlimit="10" points="216,463.5 433.231,463.5 502.527,254.53 ' +
							'502.75,253.026 323.446,125.062 146.167,253.356 215.625,463.312 	"/>' +
						'<polygon id="_x35__anel" fill="none" stroke="#110F0F" stroke-miterlimit="10" points="192,494.5 455.272,494.5 538.98,241.074 ' +
							'539.25,239.249 322.652,84.062 108.5,239.65 191.844,493.875 	"/>' +
					'</g>' +
					'<g id="circles">' +
						'<circle id="a1" fill="none" cx="325" cy="240.334" r="12.667"/>' +
						'<circle id="a2" fill="none" cx="324" cy="202.334" r="12.667"/>' +
						'<circle id="a3" fill="none" cx="323" cy="164.334" r="12.667"/>' +
						'<circle id="a4" fill="none" cx="324" cy="125.334" r="12.667"/>' +
						'<circle id="a5" fill="none" cx="323" cy="84.334" r="12.667"/>' +
						'<circle id="b1" fill="none" cx="391" cy="288.334" r="12.667"/>' +
						'<circle id="b2" fill="none" cx="428" cy="277.334" r="12.667"/>' +
						'<circle id="b3" fill="none" cx="465" cy="265.334" r="12.667"/>' +
						'<circle id="b4" fill="none" cx="503" cy="253.334" r="12.667"/>' +
						'<circle id="b5" fill="none" cx="539" cy="239.334" r="12.667"/>' +
						'<circle id="c1" fill="none" cx="366" cy="365.334" r="12.667"/>' +
						'<circle id="c2" fill="none" cx="388" cy="399.334" r="12.667"/>' +
						'<circle id="c3" fill="none" cx="411" cy="431.334" r="12.667"/>' +
						'<circle id="c4" fill="none" cx="434" cy="463.334" r="12.667"/>' +
						'<circle id="c5" fill="none" cx="456" cy="494.334" r="12.667"/>' +
						'<circle id="d1" fill="none" cx="285" cy="365.334" r="12.667"/>' +
						'<circle id="d2" fill="none" cx="262" cy="398.334" r="12.667"/>' +
						'<circle id="d3" fill="none" cx="238" cy="431.334" r="12.667"/>' +
						'<circle id="d4" fill="none" cx="216" cy="462.334" r="12.667"/>' +
						'<circle id="d5" fill="none" cx="192" cy="494.334" r="12.667"/>' +
						'<circle id="e1" fill="none" cx="259" cy="287.334" r="12.667"/>' +
						'<circle id="e2" fill="none" cx="221" cy="277.334" r="12.667"/>' +
						'<circle id="e3" fill="none" cx="183" cy="265.334" r="12.667"/>' +
						'<circle id="e4" fill="none" cx="146" cy="253.334" r="12.667"/>' +
						'<circle id="e5" fill="none" cx="108" cy="239.334" r="12.667"/>' +
					'</g>' +
					'<g id="text">' +
						'<text id="atext" transform="matrix(1 0 0 1 293 44)"><tspan x="0" y="0" font-family="OpenSans" font-size="18">Product </tspan><tspan x="0" y="21.6" font-family="OpenSans" font-size="18">Design</tspan></text>' +
						'<text id="btext" transform="matrix(1 0 0 1 555 242)" font-family="OpenSans" font-size="18">Research</text>' +
						'<text id="ctext" transform="matrix(1 0 0 1 475 503)"><tspan x="0" y="0" font-family="OpenSans" font-size="18">Visual</tspan><tspan x="0" y="21.6" font-family="OpenSans" font-size="18">Design</tspan></text>' +
						'<text id="dtext" transform="matrix(1 0 0 1 152 501)"><tspan x="0" y="21.6" font-family="OpenSans" font-size="18">Front</tspan><tspan x="0" y="41.6" font-family="OpenSans" font-size="18">End</tspan></text>' +
						'<text id="etext" transform="matrix(1 0 0 1 18 229)"><tspan x="-20" y="0" font-family="OpenSans" font-size="18">Interaction</tspan><tspan x="-20" y="21.6" font-family="OpenSans" font-size="18">Design</tspan></text>' +
					'</g>' +
					'</svg>' +
				'</article>');

				$('#spiders').append(element);

				$('#spider-' + count + ' #name').html(this.get('Name'));
				$('#spider-' + count + ' #a' + this.get('product')).css('fill', blue);
				$('#spider-' + count + ' #b' + this.get('research')).css('fill', blue);
				$('#spider-' + count + ' #c' + this.get('visual')).css('fill', blue);
				$('#spider-' + count + ' #d' + this.get('front')).css('fill', blue);
				$('#spider-' + count + ' #e' + this.get('interaction')).css('fill', blue);

				frontSum += this.get('front');
				visualSum += this.get('visual');
				interactionSum += this.get('interaction');
				researchSum += this.get('research');
				productSum += this.get('product');

				count++;
			});

			$('.front').html(frontSum/results.length);
			$('.visual').html(visualSum/results.length);
			$('.product').html(productSum/results.length);
			$('.interaction').html(interactionSum/results.length);
			$('.research').html(researchSum/results.length);
		},
		error: function(error) {
			console.log("Error: " + error.code + " " + error.message);
		}
	});
};

$(document).on('click', '.delete', function() {
	var name = $(this).attr('data-name');

	console.log(name);

	var queryDelete = new Parse.Query(Spider);
  	queryDelete.equalTo("Name", name);

	var result = confirm("Are you sure you want to delete spider chart for " + name + ' ?');
	if (result === true) {
	    queryDelete.find({
			success: function(spider) {
		    	spider[0].destroy({
		    		success: function() {
		    			loadData();
		    		}
		    	});
			}
		});
	}
});

$(function () {
	$('#add-spider').click(function() {
		var name = $('#name-input').val();
		var front = $('#front-input').val();
		var product = $('#product-input').val();
		var visual = $('#visual-input').val();
		var interaction = $('#interaction-input').val();
		var research = $('#research-input').val();

		var spider = new Spider();
		spider.set('Name', name);
		spider.set('front', parseInt(front));
		spider.set('product', parseInt(product));
		spider.set('visual', parseInt(visual));
		spider.set('interaction', parseInt(interaction));
		spider.set('research', parseInt(research));
		spider.save({
    		success: function() {
    			loadData();

    			window.location.hash = '';

    			$('#name-input').val('');
				$('#front-input').val('');
				$('#product-input').val('');
				$('#visual-input').val('');
				$('#interaction-input').val('');
				$('#research-input').val('');
    		}
    	})
	});

	loadData();
});