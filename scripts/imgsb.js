'use strict';


hexo.extend.tag.register('imgsb', function(args, content){

	var classname = ""
	var src = ""
	var width = ""
	var height = ""
	var title = ""
	var alt = ""

	classname = args[0]
	src = args[1]
	if(args.length>3){


		width = args[2]
		height = args[3]
		if(args.length>4){

			var titleAlt = args[4]
			var splits = titleAlt.split('"')
			// console.log('splits',splits)
			title = splits.length>1?splits[1]:''
			alt = splits.length>3?splits[3]:''
		}
	}
	
	// console.log("args!", args)
	var returnHTML = '<div style="display: flex;justify-content: center;"><figure style="display: flex;flex-direction: column;align-content: center;justify-content: center;align-items: flex-start;"><img loading="lazy" src="'+src+'" class="'+classname+'" width="'+width+'" height="'+height+'" title="'+title+'" alt="'+alt+'"><figcaption style="font-size: 0.75rem">'+title+'</figcaption></figure></div>';


	return returnHTML;
},{
	async: true,
	ends: false
});