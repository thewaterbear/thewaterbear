$(document).ready(function() {
 	

 	//these images are not optimized, mad slow
	var imageArray = [
		{img: 'redwide.jpg', type:"wide", y:'50%'},
		{img: 'ifileavethishere.gif', type:"long"},
		{img: 'green1.jpg'},
		{img: 'yellow1.jpg'},
		{img: 'red1.jpg'},
		{img: 'storm_hd.jpg', type:"wide",y:'50%'},
		{img: 'blocking.jpg', type:"wide", y:'100%'},
		{img: 'lotus.gif', type:"long"},
		{img: 'harvest.gif'},
		{img: 'treefriday.png'},
		{img: 'escape_velocity.gif'},
		{img: 'firstlight.jpg',type:'wide',y:'30%'},
		{img: 'starfallloop.gif'},
		{img: 'magic.jpg'},
		{img: 'treees2.gif'},
		{img: '3am.gif'},
		{img: 'twide.png', type:"wide",y:'100%'},
		{img: 'windsblank.jpg', type: 'long'},
		{img: 'terminal.png'},
		{img: 'island.gif'},
		{img: 'phasecenterdribbble.gif'},
		{img: 'seam.gif'},


	];

	var blocksPerRow = 3;
	var $blockBase = $("<div class='block lazy'></div>");
	var allBlocks = "";
	var idx = 0; //index for images array, not blocks
	var fullCount = 0;
	// var baseURL = "http://dl.dropboxusercontent.com/u/255297/portfolio/";
	var baseURL = "http://s3.amazonaws.com/waterbear/portfolio/";
	for(var i = 0; i < imageArray.length; i++) {
		fullCount++;
		if(imageArray[i].type == "long" || imageArray[i].type == "wide") {
			fullCount++;
		} 
	}
	var gridCheck = new Array(fullCount);
	gridCheck.fill(true);


	//builds the grid
	for(var i = 0; i < fullCount; i++) {
	   if(gridCheck[i]==true) {
		   $block = $blockBase.clone(true);
		   if(imageArray[idx].type) {
		   		$($block).html('<div class="'+imageArray[idx].type+' lazy"></div>');
		   		// $($block).children().css('background-image', 'url( '+baseURL+imageArray[idx].img+')');
		   		$($block).children().attr("data-original", baseURL+imageArray[idx].img);
		   		$($block).children().css('background-position-y', imageArray[idx].y);

		   	if(imageArray[idx].type == "wide") {
				gridCheck[i+1] = false;
		   	}
		   	if(imageArray[idx].type == "long") {
		   		gridCheck[i+blocksPerRow] = false;
		   	}
		   } else {
		   	$($block).attr("data-original", baseURL+imageArray[idx].img);
		   }
		   $(".grid").append($block);
		   idx++;
		} else {
		   $block = $blockBase.clone(true);
		   $block.addClass('spacer');
		   $(".grid").append($block);
		}
	}

	$("div.lazy").lazyload({
		effect:"fadeIn"
	});
      
	$(window).bind("load", function() {
		console.log("all loaded");
		// now we grab gifs?
		// var $image = $("img").first();
		// var $downloadingImage = $("<img>");
		// $downloadingImage.load(function(){
		//   $image.attr("src", $(this).attr("src"));	
		// });
		// $downloadingImage.attr("src", "http://an.image/to/aynchrounously/download.jpg");


	});
	 // var $longs= $(".l");
	 // for(var i = 0; i < $longs.length; i++) {
		//    	var bg = $($longs[i]).css('background-image');
	 // 		$($longs[i]).html('<div class="long"></div>');
		//    	$($longs[i]).children().css('background-image', bg);
		//    	// $($longs[i]).children().css('background-position-y', imageArray[idx].y);
	 // }


	 // var $wides= $(".w");
	 // for(var i = 0; i < $wides.length; i++) {
		//    	var bg = $($wides[i]).css('background-image');
	 // 		$($wides[i]).html('<div class="wide"></div>');
		//    	$($wides[i]).children().css('background-image', bg);
		//    	// $($longs[i]).children().css('background-position-y', imageArray[idx].y);
	 // }


	 // $("img").unveil();
	//Do this all in 1 HTML() call for performance

	//row wrap for future responsiveness? Is this needed?	
	// var divs = $(".block");
	// for(var i = 0; i < imageArray.length; i+=blocksPerRow) {
	//    divs.slice(i, i+blocksPerRow).wrapAll("<div class='row'></div>");
	// }


});




function chng() {
	$(".wide").toggleClass("blockcut_w");
	$(".long").toggleClass("blockcut_l");
}

