$("#gallery_button").click(function(){
    var len = (localStorage.length -1)/2;
    console.log("longitud: "+len);
    if(len != null){
    if ($( "#images_handler3" ).children().length > 0){
        $( "#images_handler3" ).empty();
    }
    var it = 0;
    var elem= "a";
    var widthApp = (document.getElementById("CameraGallery").clientWidth)/3;
    while(it <= len){
        var index = it.toString();
        var src= localStorage.getItem(index);
        $("#images_handler3").append('<li onclick="javascript:fullSize('+index+')" class="ui-block-'+elem+'"><img src="'+src+'" style="width:'+widthApp+'px"></li>');
        switch(elem){
            case "a":
                elem = "b";
                break;
            case "b":
                elem = "c";
                break;
            case "c":
                elem = "a";      
        }
        it++;
    }}
    
    
    
});
function fullSize(indice){
     $( "#images_handler3" ).empty();
      var src= localStorage.getItem(indice);
      var widthApp = document.getElementById("CameraGallery").clientWidth;
      $("#images_handler3").append('<li class="ui-block-a"><img src="'+src+'" style="width:'+widthApp+'px"></li>');
    
}