
$("#search").click(function(){
//$(document).ready(function(){
	var url1="http://api.giphy.com/v1/gifs/search?";
	var q="q="+$("#inp").val();
	var key="&api_key=dc6zaTOxFJmzC";
$("#gifdiv").empty();
	var url=url1+q+key;
	console.log(url);
	 $.getJSON(url,function(giphy){
		for(i=0;i<giphy.data.length;i++){
			console.log(giphy.data[i].images.fixed_height.url);
			url=giphy.data[i].images.fixed_height.url;
			console.log(url);
      $('<img class="col-md-4" src="'+url+'" />').appendTo('#gifdiv');
		
//$("#gifdiv").append(div);
		}
		console.log($("#inp").val());
		$("#inp").val("");
		console.log($("#inp").val());
	},'jsonp');
});

