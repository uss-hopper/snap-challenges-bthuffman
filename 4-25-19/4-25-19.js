//See replit for several challenges that were completed already.
function inArray(array1, array2) {
	var i, j, result = [];

	outer: for (j = 0; j < array1.length; j++) {
		for (i = 0; i < array2.length; i++) {
			//see if the second array's current index includes the current index of the first array. If it doesn't go to the next index of the second array to compare again. Once go through the length of the second array then go up to the first for loop and increase i by 1 (that is now do the same comparison but with the next index of array1)
			if (array2[i].includes(array1[j])) {
				//push the current index in the first array that is included n the second array.

				result.push(array1[j]);
				//without outer then would have a duplicate, if continue wasn't here would have many duplicates
				continue outer;
			}
		}
	}
	return result.sort();
}



a1 = ["arp", "live", "strong"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
console.log(inArray(a1,a2));