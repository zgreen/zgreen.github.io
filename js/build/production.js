$(function(){
		// Get the window hiehgt
		var winHeight = $(window).height();
		// Apply window height to each step, to fill window
		$('.step').css('height', winHeight);
		// On arrow clicks
		$(document).on('click', '.arrow', function(event){
			// Trigger step click event
			$(this).trigger('step-click');
			// Get the steps...
			var steps = $('#wrap-steps').children();
			// and count them
			var stepsNum = steps.length;
			// The clicked step
			var step = $(this).parent();
			// The next step
			var nextStep = step.next();
			// Animate scroll
			$('body,html').animate({
				scrollTop: $(nextStep).offset().top
			},500);
			// The clicked step ID
			var stepID = step.attr('id');
			// Create an array from the stepID
			var stepNumArr = stepID.split("-");
			// Get the number from that array
			var stepNum = stepNumArr[1];
			// Set newStep class, adding 1 each time 
			var newStep = 'step-'+(parseInt(stepNum)+1);
			for (var i = 2; i < stepsNum; i++) {
				$('html').removeClass('step-'+[i]);
			}
			$('html').addClass(newStep);
		});
		// Reset
		$('#reset').on('click', function(){
			$('body,html').animate({
				scrollTop: $('body').offset().top
			},500);
			var steps = $('#wrap-steps').children();
			var stepsNum = steps.length;
			for (var i = 1; i < stepsNum; i++) {
				$('html').removeClass('step-'+[i]);
			}
			$('#license-text').removeClass('active');
		});
		// Toggle classes for animation
		$(document).on('scroll', function(){
			$('#reset').css('opacity', '1');
		});
		$(document).on('step-click', function(){
			$('#reset').css('opacity', '1');
		});
		// Past Work Portfolio
		function slideControls() {
			var slideWrap = $('#wrap-slides');
			var slides = slideWrap.children('.slide');
			var firstSlide = slides.first();
			var lastSlide = slides.last();
			var prev = $('.prev', slideWrap);
			var next = $('.next', slideWrap);
			if (firstSlide.hasClass('active')) {
				prev.addClass('hidden');
				next.removeClass('hidden');
			}
			else {
				prev.removeClass('hidden');
				next.removeClass('hidden');
			}
			if (lastSlide.hasClass('active')) {
				prev.removeClass('hidden');
				next.addClass('hidden');
			}
		}
		$(document).on('click', '#view-portfolio', function(){
			$('.pane').toggleClass('hidden');
			if($(this).text() == 'View Portfolio') {
				$(this).text('Hide Portfolio');
			}
			else {
				$(this).text('View Portfolio');
			}
			slideControls();
		});

		$('#wrap-slides').on('click', 'a.slide-control', function(){
			slideControls();
			var activeSlide = $('.slide.active');
			if ($(this).hasClass('next')) {
				var nextSlide = activeSlide.next();
				activeSlide.removeClass('active');
				nextSlide.addClass('active');
			}
			if ($(this).hasClass('prev')) {
				var prevSlide = activeSlide.prev();
				activeSlide.removeClass('active');
				prevSlide.addClass('active');
			}
			slideControls();
		});
		$(document).on('click', '#license-info', function(){
			$('#license-text').addClass('active');
		});

		$('nav').on('click', 'a', function(){
			var step = $(this).data('step');
			var domStep = $('div#'+step);
			var numSteps = $('.step').length;
			for (var i = 1; i < numSteps; i++) {
				$('html').removeClass('step-'+[i]);
			}

			$('html').addClass(step);
			$('body,html').animate({
				scrollTop: $(domStep).offset().top
			},500);
		});
});