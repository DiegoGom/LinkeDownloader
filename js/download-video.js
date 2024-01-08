/*By Lair_nula*/

var ul_class_append="classroom-body__nav-actions";
var id_download_button="dwn-vde"+getRandomInt(99999)+"";
var subtitle_class="classroom-nav__subtitle";

$(".vd-wnk2i").remove();

setTimeout(function (){
	 if(player_exist()==1){

	 	console.log("se obtendran datos");
	 	add_button();

	 	$("#"+id_download_button).click(function(){
	 		let url=$(this).attr("data-video");
	 		let name=$(this).attr("data-name");
	 		download_video(url,name);
	 	});
	 }

},1000);




/*Verify exist player*/
function player_exist(){
	let element = $("video");
	
		if(typeof(element) != 'undefined' && element != null){
        	return 1;
    	} else{
        	return 0;
    	}
}

/*Add button and obtain data video*/
function add_button(){

	const videoElement = document.querySelector('video');
	const url_video = videoElement.src;
	let obtain_name_video=$("."+subtitle_class).text();
	let name1 = encodeURIComponent(obtain_name_video);
	let name2 = name1.replace(/%0A/g, "");
	let name3 = name2.replace(/%20%20/g, "");
	let name4 = name3.replace(/%20/g, " ");
	let name_video=name4;
	$("."+ul_class_append).append("<li class='vd-wnk2i'><button id='"+id_download_button+"' data-name='"+name_video+"' data-video='"+url_video+"'>Download</buton></li>");
}

/*Random numbers*/
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

/*Function download videos*/
function download_video(url,name){
    
		fetch(url)
			.then(resp => resp.blob())
			.then(blob => {
	    		const url = window.URL.createObjectURL(blob);
	    		const b = document.createElement('a');
	    		b.style.display = 'none';
	    		b.href = url;
	    		b.setAttribute("download", ""+name+".mp4")
	    		b.download = ""+name+".mp4"; // the file name
	    		document.body.appendChild(b);
	    		b.click();
	    		window.URL.revokeObjectURL(url);
			});
}
