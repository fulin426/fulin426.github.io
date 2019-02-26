$('.profile-about').on('click', function(event) {
	event.preventDefault();
	let jump = $(this).attr("href");
	console.log(jump);
	let new_position = $(jump).offset();;
	$('html, body').stop().animate({ scrollTop: new_position.top - 10 }, 500);
});

$('.projects-nav').on('click', function(event) {
	event.preventDefault();
	let jump = $(this).attr("href");
	let new_position = $(jump).offset();;
	$('html, body').stop().animate({ scrollTop: new_position.top - 10 }, 500);
});

$('.contact').on('click', function(event) {
	event.preventDefault();
	let jump = $(this).attr("href");
	let new_position = $(jump).offset();;
	$('html, body').stop().animate({ scrollTop: new_position.top - 10 }, 650);
});
