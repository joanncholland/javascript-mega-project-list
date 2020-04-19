// Merge sort

/**
 * Sort an array of numbers in ascending order, 
 * using the merge sort divide and conquer algorithm.
 * 
 * @param {Array} arr - The array to be sorted.
 * @param {int} startIndex - The starting index of a sub-section of the array.
 * @param {int} endIndex - The ending index of a sub-section of the array.
 */

function mergeSort(arr, startIndex, endIndex) {

    let arrLength = arr.length

    if (arrLength == 1) {
        return arr
    } else {
        // find middle index of arr
        let middleIndex = Math.floor(arrLength/2)
        let leftArray = arr.slice(startIndex, middleIndex)
        let rightArray = arr.slice(middleIndex)

        // mergesort recursion
        return merge (
            mergeSort(leftArray),
            mergeSort(rightArray)
        )
    }

}

/**
 * Merge two subarrays into a single new array.
 * 
 * @param {Array} leftArray - The left array to be merged.
 * @param {Array} rightArray - The right array to be merged.
 */
function merge(leftArray, rightArray) {

    let newArray = []
    let leftIndex = 0
    let rightIndex = 0

    while(leftArray.length > leftIndex && rightArray.length > rightIndex) {
        if(leftArray[leftIndex] < rightArray[rightIndex]) {
            newArray.push(leftArray[leftIndex])
            leftIndex++
        } else {
            newArray.push(rightArray[rightIndex])
            rightIndex++
        }
    }

    return newArray.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex))

}

const mergeArr = [4, 2, 5, 3, 1]
console.log(mergeSort(mergeArr))

// Bubble sort
function bubbleSort(arr) {
    let len = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (arr[i] > arr[i + 1]) {
                let tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
};

const bubbleArr = [4, 2, 5, 3, 1]
console.log(bubbleSort(bubbleArr))

// OTHER SORTING ALGORITHMS TO IMPLEMENT LATER?
// selection sort
// insertion sort
// quicksort
// heap sort
// bucket sort
// counting sort
// radix sort
// shell sort