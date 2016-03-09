var arr = [23, 4, 34, 78, 90, 55, 89, 6, 87, 44, 47];


for (var i = 0, ln = arr.length; i < ln; i++) {
	// assume first number is sorted
	if (i === 0) {
		continue;
	}

	insertionSort(arr, arr[i], i-1);
	console.log('State of the array: ', arr);
}

function insertionSort(arr, currentNumber, lastNumber) {
	for (var j = lastNumber; j >= 0; j--) {
		if (currentNumber < arr[j]) {
			arr[j+1] = arr[j];
			arr[j] = currentNumber;
		}
	}
}