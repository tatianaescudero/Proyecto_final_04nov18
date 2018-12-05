$.ajax({
	url: 'https://randomuser.me/api/?results=1',
	type: 'GET',
	dataType: 'json',
})
.done(function(data) {
	console.log(data);

	data.results.forEach(function(profile){
		// $('body').append('<img src="'+ profile.picture.large +'">')
		var html = '<div class="user">'
		html += '<img src="'+ profile.picture.large +'" class="user__picture" alt="">'
		html += '<h4 class="user__name">'+ profile.name.first + ' ' + profile.name.last +'</h4>'
		html += '</div>'

		$('.profile').append(html)
	})

})
.fail(function(error) {
	// console.log(error);
})
.always(function(data) {
	// console.log(data);
});


window.addEventListener("load", function(event) {
    lazyload();
});