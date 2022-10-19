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
			title = splits.length>1?splits[1]:''
			alt = splits.length>3?splits[3]:''
		}
	}
	
	var returnHTML = '<img loading="lazy" src="'+src+'" class="'+classname+'" width="'+width+'" height="'+height+'" title="'+title+'" alt="'+alt+'">';


	return returnHTML;
},{
	async: true,
	ends: false
});