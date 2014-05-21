$(document).on('ready', function(){

	var resultScript = $('#result');
	var resultTemplate = resultScript.html();
	var renderResultTemplate = Handlebars.compile(resultTemplate);




	$(document).on('click', ".btn-large",function(){
		$.ajax('/search', {
			data: {lang: $('.language').val()},
			success: function(data){
					$('#results').append(renderResultTemplate(data))
			}
		})
		// console.log('submit')
		// $.get('/search', function(data) {
		// 	$('#results').append(renderResultTemplate(data))
		// })

	});
})