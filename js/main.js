$(document).ready(init)

function init(){


	$.fn.scrollPath("getPath")

	.moveTo(400, 400, {name:"seccion1"})

	.lineTo(1040, 400)
	.lineTo(1040, 1120, {name:"seccion2"})

	$("#container").scrollPath({
			drawPath:true,
			scrollBar:true,
			wrapAround:true,

		});
}
