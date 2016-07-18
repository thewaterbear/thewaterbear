---
---

$(document).ready(function() {
 	

 	//these images are not optimized, mad slow
	var imageArray = [
		{img: 'blocking.jpg', type:"wide", y:'100%'},
		{img: 'lotus.gif', type:"long"},
		{img: 'advent.png'},
		{img: 'glitch.png'},
		{img: 'plus2.png'},
		{img: 'epor4k.jpg', type:"wide",y:'50%'},
		{img: 'waterbeaconfull.jpg', type:"long"},
		{img: 'storm_hd.jpg'},
		{img: 'starfallloop.gif'},
		{img: 'cloudrise5.png'},
		{img: 'hardreset.png'},
		{img: 'fallen.png'},
		{img: 'week2.jpg', type:"wide",y:'100%'},
		{img: 'escape_velocity.gif'},
		{img: 'meetingspot.png', type:"long"},
		{img: 'coolColorMix.png', type:"long"},
		{img: 'humanbotreflection.jpg'},
		{img: 'mt.jpg', type:"wide",y:'90%'},
		{img: 'sunsetWhales.png', type:"long"},
		{img: 'island.gif'},
		{img: 'bots.png'},
		{img: 'gc2.jpg', type:"wide",y:'100%'},
		{img: 'phase.gif'},
	];

	var blocksPerRow = 3;
	var $blockBase = $("<div class='block lazy'></div>");
	var allBlocks = "";
	var idx = 0; //index for images array, not blocks
	var fullCount = 0;
	var baseURL = "http://dl.dropboxusercontent.com/u/255297/portfolio/";
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

		   // $($block).css('background-image', 'url( '+baseURL+imageArray[idx].img+')');

		   if(imageArray[idx].type) {
		   	$($block).html('<div class="'+imageArray[idx].type+' lazy"></div>');
		   	// $($block).children().css('background-image', 'url( '+baseURL+imageArray[idx].img+')');
		   	// $($block).children().css('background-position-y', imageArray[idx].y);
		   $($block).children().attr("data-original", baseURL+imageArray[idx].img);

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

