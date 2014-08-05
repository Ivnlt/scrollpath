$(document).ready(init);

function init(){


	$.fn.scrollPath("getPath")

	.moveTo(400, 400, {name:"seccion1"})

	.lineTo(1040, 400)
	.lineTo(1040, 1120, {name:"seccion2"})
	.lineTo(420, 2100,  {name:"seccion3",
						rotate: Math.PI/2})
	.lineTo(2200, 2800,  {name:"seccion4",
						rotate: 0})

	.lineTo(2000, 320)
	.arc(1808, 390, 200, 0, -Math.PI/2, true)

	.lineTo(1040, 400)

	$("#container").scrollPath({
			drawPath:false,
			scrollBar:true,
			wrapAround:true,

		});

	$("nav").find("a").each(function(){
		var target = $(this).attr("href").replace("#", "");
		$(this).click(function(e){
			e.preventDefault();
			$.fn.scrollPath("scrollTo", target, 1000,"easeInOutSine");
		})

	});
}
