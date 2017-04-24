var Carousel_Module = (function () {

	var carousel = {
		img0 : "<li><img src='http://i.dailymail.co.uk/i/pix/2012/05/13/article-2143724-131258BE000005DC-295_964x610.jpg'></li>",
		img1 : "<li><img src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRfSo0urmBy1hwOygK8dPzEmFS6tMOvY6LcsbsTuNTtw6ZwPT88Gw'></li>",
		img2 : "<li><img src='data:image/jpeg;base64,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'></li>",
		img3 : "<li><img src='http://i.eurosport.com/2015/12/12/1750545-37009066-2560-1440.jpg?w=1050'></li>",
		img4 : "<li><img src='http://images.performgroup.com/di/library/GOAL/bf/da/leroy-sane-manchester-city_6ssj2op9swly141f30oisnyad.jpg?t=-1429260542&w=620&h=430'></li>",
		current_slide : 0

//initialization function, appends the images to the slider using a for 
//loop then hides all but the first
	};

	carousel.init = function () {
		var img_array = [carousel.img0, carousel.img1, carousel.img2, carousel.img3, carousel.img4];
		var stop = img_array.length;
		$('#slider').append(img_array[0]);
		for(count = 1; count < stop - 1; count++){
			$('#slider').append(img_array[count]);
			$('#slider li').last().hide();
        }
        carousel.next();
        //carousel.previous();
	}
	
	carousel.next = function() {
		$('#slider').click(function (){
			//if not last 
			$('#slider li:visible').hide().next().show();
			//else
			//hide the last one and show the first one.
		});
	};

	carousel.previous = function () {
		$('#slider').click(function (){
			alert('I works');
		});
	}

	return carousel;
})();

//Carousel_Module.publicMethod();
$(document).ready(function () {
	page = Carousel_Module;
	page.init();
});

