$(document).ready(function(){       
    var words = [
        'bigger.',
        'better.',
        'bolder.'
        ], i = 0;
    setInterval(function(){
        $('#change').fadeOut(function(){
            $(this).html(words[i=(i+1)%words.length]).fadeIn();
        });
        // 2 seconds
    }, 2000);
        
})();