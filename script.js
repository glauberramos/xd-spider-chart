Parse.initialize("SvIXm6lpaiR9e9hnajEicOGVr9tQAfYDMxi5Wzuz", "jZMWX0q6byyuaPl1TK9hftFwoVonZznBwCjINbuN");

var Spider = Parse.Object.extend("Spider");

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

$(function () {
	var blue = '#3498db';

	query.find({
		success: function(results) {
			$(results).each(function() {
				// $('#a' + this.get('name')).css('fill', blue);
				$('#a' + this.get('product')).css('fill', blue);
				$('#b' + this.get('research')).css('fill', blue);
				$('#c' + this.get('visual')).css('fill', blue);
				$('#d' + this.get('front')).css('fill', blue);
				$('#e' + this.get('interaction')).css('fill', blue);
			});
		},
		error: function(error) {
			console.log("Error: " + error.code + " " + error.message);
		}
	});
});