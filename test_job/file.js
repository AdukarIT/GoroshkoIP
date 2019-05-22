$(function () {
	burgerMenu();

	let $imgs = $('.img');

	$(window).on('scroll', function () {
		console.log('event scroll');
		$imgs.each(function (index, elem) {
			console.log('index == ' + index);
			console.log(elem);
			let $elem = $(elem);
			let windowTop = $(window).scrollTop();
			let windowBottom = windowTop + $(window).height();
			let imgTop = $elem.offset().top;
			let imgBottom = imgTop + $elem.height();


			console.log('Top: ' + windowTop + '  ' + imgTop);
			console.log('Bottom:' + windowBottom + '  ' + imgBottom);



			if (windowTop <= imgTop && imgBottom <= windowBottom) {


				if ((index % 2) == 0) {
					$elem.addClass('img_shift_left');
				}
				else {
					$elem.addClass('img_shift_right');
				}

				var intervalID = window.setTimeout(function () {

					if ((index % 2) == 0) {
						$elem.addClass('animate_left');
					}
					else {
						$elem.addClass('animate_right');
					}
				}, 100);

			}
			else {
				if ($elem.hasClass('animate_left') || $elem.hasClass('animate_right')) {
					if ((index % 2) == 0) {
						$elem.removeClass('animate_left img_shift_left');
					}
					else {
						$elem.removeClass('animate_right img_shift_right');
					}
				}
			}

		});

	});


	function burgerMenu() {
		if (window.innerWidth < 768) {
			$('.burger_menu').removeClass('none');
			$('.burger_menu_img').on('click', function () {
				$('.burger_menu').addClass('none');
				$('.menu').addClass('menu_animate');
			});
		}

		if (window.innerWidth > 768) {
			$('.burger_menu').addClass('none');
		}
	}

	/* Это должно происходить для экрана по-меньше */

	$(window).on('resize', function () {
		burgerMenu();
	});



});


google.maps.event.addDomListener(window, 'load', initialize);
let geocoder;
let map;

function initialize() {

	geocoder = new google.maps.Geocoder();

	let center = new google.maps.LatLng(53.9021648, 27.5499173);
	let myOptions = {
		zoom: 14,
		center: center
	};
	map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);


}