$(document).ready(function() {
    var focusCount = 0;
    var relaxCount;
    var soundArray = ["songFocus", "songRelax"];
    var buttonColorArray = ["playSongFocus", "playSongRelax"];

    $(".playSound").on("click", function() {
        stopAllSongs();
        changeAllColorsToNormal();
        console.log(this);
        var whatButton = $(this).attr("id");
        switch (whatButton) {
            case "playSongFocus":
                var x = $(".songFocus").get(0);
                console.log(focusCount);
                x.play();
                // if (focusCount % 2 != 0) {
                //     x.play();
                // } else {
                //     x.pause();
                // }
                break;
            case "playSongRelax":
                var g = $(".songRelax").get(0);
                g.play();
                break;
            default:
                //
        }

    });

    $(".selection").on("click", function() {
        var text = $(".selection").html();
        $(".songTitle").text(text);
    });

    function stopAllSongs() {
        $.each(soundArray, function(index, value) {
            var findSoundClass = document.getElementsByClassName(value);
            var pauseSoundClass = $(findSoundClass).get(0);
            pauseSoundClass.pause();
        })
    }
    function changeAllColorsToNormal(){
        $.each(buttonColorArray, function(index, value){
            var button = document.getElementById(value);
            $(button).removeClass("mdl-button--accent");
            console.log(button);
        })
    }
});
