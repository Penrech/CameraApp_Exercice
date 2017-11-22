if(!localStorage.getItem("counter")){
    localStorage.setItem("counter","0");
}

console.log(localStorage.getItem("counter"));
function movePic(file){ 
    window.resolveLocalFileSystemURL(file, resolveOnSuccess, resOnError); 
} 

//Callback function when the file system uri has been resolved
function resolveOnSuccess(entry){ 
    var d = new Date();
    var n = d.getTime();
    //new file name
    var newFileName = n + ".jpg";
    var myFolderApp = "CameraApp";

    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSys) {      
    //The folder is created if doesn't exist
    fileSys.root.getDirectory( myFolderApp,
                    {create:true, exclusive: false},
                    function(directory) {
                        entry.moveTo(directory, newFileName,  successMove, resOnError);
                    },
                    resOnError);
                    },
    resOnError);
}

//Callback function when the file has been moved successfully - inserting the complete path
function successMove(entry) {
    //I do my insert with "entry.toURL" as for the path
    console.log(entry.toURL());
    var widthApp = document.getElementById("CameraSave").clientWidth;
    $("#images_handler2").empty();
    $("#images_handler2").append('<li><img src="'+entry.toURL()+'" style="width:'+widthApp+'px"></li>');
    var it = localStorage.getItem("counter");
    var sum= (it * 1) + 1;
    var sumS = sum.toString();
    var index = it.toString();
    console.log(index);
    localStorage.setItem(index,entry.toURL());
    var feedback = localStorage.getItem(index);
    console.log(feedback);
    localStorage.setItem("counter",sumS);
}

function resOnError(error) {
    alert(error.code);
}




function setOptions2(srcType) {
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

$("#camera_button2").click(function(){
    
    var srcType2 = Camera.PictureSourceType.CAMERA;
    var options = setOptions2(srcType2);
    options.targetWidth = 1080;
    
   
navigator.camera.getPicture(onSuccess, onFail,options);

function onSuccess(imageURI) {
    console.log("Onsuccess entry");
    console.log(imageURI);
    movePic(imageURI);
    
       
}

function onFail(message) {
    alert('Failed because: ' + message);
}
});
