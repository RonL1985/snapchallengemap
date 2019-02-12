// Durations

var tasks = [

	{

		'name'     : 'Write for Envato Tuts+',

		'duration' : 120

	},

	{

		'name'     : 'Work out',

		'duration' : 60

	},

	{

		'name'     : 'Procrastinate on Duolingo',

		'duration' : 240

	}


];
var map = function (array, callback) {

	var new_array = [];

	array.forEach(function (element, index, array) {
		new_array.push(callback(element));
	});

	return new_array;

};

var task_names = map(tasks, function (task) {

	return task.name;

	var total = [1, 2, 3, 4, 5].reduce(function (previous, current, index) {
		var val = previous + current;
		console.log("The previous value is " + previous +
			"; the current value is " + current +
			", and the current iteration is " + (index + 1));
		return val;
	}, 0);

	console.log("The loop is done, and the final value is " + total + ".");

});
