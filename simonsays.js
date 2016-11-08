
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
/*	var note_1 = $('#note_1')[0];
	var note_2 = $('#note_2')[0];
	var note_3 = $('#note_3')[0];
	var note_4 = $('#note_4')[0];*/

	var note_1 = new Audio("sounds/note1.wav");
	var note_2 = new Audio("sounds/note2.wav");
	var note_3 = new Audio("sounds/note3.wav");
	var note_4 = new Audio("sounds/note4.wav");	

	$("#yellow").mousedown(function() {
		note_1.play();
		note_1.currentTime = 0;
	})

	$("#green").mousedown(function() {
		note_2.play();
		note_2.currentTime = 0;
	})

	$("#red").mousedown(function() {
		note_3.play();
		note_3.currentTime = 0;
	})

	$("#blue").mousedown(function() {
		note_4.play();
		note_4.currentTime = 0;
	})

	

	function get_random_next() {
		return Math.floor(Math.random() * 4);
	}

	function add_to_sequence(next) {
		sequence.push(next);
	}

	var sequence = [];



	



});