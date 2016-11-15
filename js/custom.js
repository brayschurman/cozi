$(document).ready(function() {
    var count = 0;
    $(".playSound").on("click", function() {
        count++;
        $(".logoPlaying").toggle();
        var x = $(".sound").get(0);
        if (count % 2 != 0) {
            x.play();
        } else {
            x.pause();
        }
    });

    $(".selection").on("click", function() {
    	var text = $(".selection").html();
    	$(".songTitle").text(text);
    });
});
