function setOptions(srcType) {
    var options = {
        // Some common settings are 20, 50, and 100
        quality: 100,
        destinationType: Camera.DestinationType.FILE_URI,
        // In this app, dynamically set the picture source, Camera or photo gallery
        sourceType: srcType,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE,
        allowEdit: false,
        correctOrientation: true  //Corrects Android orientation quirks
    }
    return options;
}



$("#camera_button").click(function(){
    
    var srcType = Camera.PictureSourceType.CAMERA;
    var options = setOptions(srcType);
    var widthApp = document.getElementById("CameraApp").clientWidth;
    options.targetWidth = 1080;
   
navigator.camera.getPicture(onSuccess, onFail,options);

function onSuccess(imageURI) {
        $("#images_handler").empty();
        $("#images_handler").append('<li><img src="'+imageURI+'" style="width:'+widthApp+'px"></li>');

}
function onFail(message) {
    alert('Failed because: ' + message);
}
});

