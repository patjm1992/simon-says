
/**
 * ENCODING:
 *
 *	Yellow: 0
 *	Green:  1
 *  Red:    2
 *  Blue:   3
 */

/**
 * Given the length of a sequence, return a r
 *

function get_random_next() {
	return Math.floor(Math.random() * 4);
}

function add_to_sequence(next) {
	sequence.push(next);
}

var sequence = [];


for (var i = 0; i < 10; i++) {
	add_to_sequence(get_random_next());
}*/

$(function(){
    var birdhover     = $('#yellow');
        var birdaudio = birdhover.find('audio')[0];

    birdhover.hover(function(){
       birdaudio.play();
    }, function(){
       birdaudio.stop();
    });
});