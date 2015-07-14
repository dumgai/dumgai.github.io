/*
	Arcana by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel.breakpoints({
		wide: '(max-width: 1680px)',
		normal: '(max-width: 1280px)',
		narrow: '(max-width: 980px)',
		narrower: '(max-width: 840px)',
		mobile: '(max-width: 736px)',
		mobilep: '(max-width: 480px)'
	});
    
    
     
        var sizes = [
[940, 750, 700],
[600, 550, 950],
[515, 430, 800],
[0, 250, 1750]
],
        url = '//tools.runetki.co/din_new6.php?code=f17da9cb7f646ee4e1959c054a45295a&bid=28469&w={width}&h={height}&linkdest=model&modelnick=&clickurl=http%3A%2F%2Frunetki.com%2Froom%2F&refresh=1&logo=black&bbgcolor=ffffff&btextcolor=CCCCCC&mbordercolor=ffffff&mhovercolor=ff0000&mbordertype=solid&shad=0&bfontfamily=Arial&mtextalign=center&id=24537&server=runetki.com&langs=ru&campaign=654228&size=350x750&modelname=1&modelicon=1&modelinfo=1&selgeoheader=1&mediagroup=1&mediatype=1&skins=custom&category=11,12,13,14,15,2,3,4,6,7,8,10&srv=0';

    $( window ).resize(adjust_iframe);
    
    function adjust_iframe() {
        var w = $(window).width();
        sizes.some(function (s){
            if (w > s[0]) {
    var src = url.replace("{width}", s[1])
            .replace("{height}", s[2]);
if (src != $("#adv").attr("src")) {
    $("#adv").width(s[1]);
    $("#adv").height(s[2]);
    $("#adv").attr("src", src);                
}
                
    return true;
            }
        });

}

	$(function() {

        adjust_iframe();
        
		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on narrower.
			skel.on('+narrower -narrower', function() {
				$.prioritize(
					'.important\\28 narrower\\29',
					skel.breakpoint('narrower').active
				);
			});


	});

})(jQuery);