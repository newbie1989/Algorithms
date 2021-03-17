// Binary Search
const binary = (arr, left, right, k) => {
    let len = arr.length;

    if (len === 0 || left > right) {
        return -1;
    }

    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === k) {
        return mid;
    } else if (k > arr[mid]) {
        left = mid + 1;
        return binary(arr, left, right, k);
    } else if (k < arr[mid]) {
        right = mid - 1;
        return binary(arr, left, right, k);
    }
};

const values = [1, 2, 3, 4, 5, 6, 7, 9];
const r = binary(values, 0, values.length - 1, 9);
alert(r);
