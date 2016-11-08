
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

$(document).ready(function() {
	var note_1 = $('#note1')[0];
	var note_2 = $('#note2')[0];
	var note_3 = $('#note3')[0];
	var note_4 = $('#note4')[0];

	$("#yellow").click(function() {
		note_1.play();
	})

	$("#green").click(function() {
		note_2.play();
	})

	$("#red").click(function() {
		note_3.play();
	})

	$("#blue").click(function() {
		note_4.play();
	})

});