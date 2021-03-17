// Binary search to get first occurence of an element
function occur(arr) {
    const index = binary(arr, 0, arr.length - 1, 55);
    return index;
}

function binary(arr, start, end, k) {
    /* let start = 0;
    let end = arr.length -1; */

    if (arr.length === 1 || start > end) {
        return -1;
    }
    let mid = Math.floor(start + (end - start) / 2);
    debugger;

    if (arr[mid] === k) {
        if (arr[mid - 1] !== undefined && arr[mid - 1] === k) {
            return binary(arr, 0, mid - 1, k);
        } else {
            return mid;
        }
    } else if (arr[mid] < k) {
        return binary(arr, mid + 1, end, k);
    } else {
        return binary(arr, start, mid - 1, k);
    }
}

let r = occur([1, 2, 2, 4, 4, 4, 5, 5, 5, 6]);

alert(r);

//---------------------------------------------------------------------------------------------
/***
 * Find all occurences of a number
 */

// Binary search to get first occurence of an element
function occur(arr, k) {
    const index1 = binary(arr, 0, arr.length - 1, k, 'FIRST');

    if (index1 === -1) {
        return -1;
    }
    const index2 = binary(arr, 0, arr.length - 1, k, 'LAST');
    // debugger
    let occurences = index2 - index1 + 1;
    return occurences;
}

function binary(arr, start, end, k, mode) {
    /* let start = 0;
      let end = arr.length -1; */

    if (arr.length === 1 || start > end) {
        return -1;
    }
    let mid = Math.floor(start + (end - start) / 2);
    /* debugger */ if (arr[mid] === k) {
        if (mode == 'FIRST') {
            if (arr[mid - 1] !== undefined && arr[mid - 1] === k) {
                return binary(arr, 0, mid - 1, k, mode);
            } else {
                return mid;
            }
        }
        if (mode == 'LAST') {
            if (arr[mid + 1] !== undefined && arr[mid + 1] === k) {
                return binary(arr, mid + 1, end, k, mode);
            } else {
                return mid;
            }
        }
    } else if (arr[mid] < k) {
        return binary(arr, mid + 1, end, k, mode);
    } else {
        return binary(arr, start, mid - 1, k, mode);
    }
}

let r = occur([1, 2, 2, 2, 4, 5, 6, 6], 6);

alert(r);
