const bubble = (arr) => {
    const len = arr.length;
    if (len <= 1) {
        return arr;
    }

    let i = 0;

    for (; i < len - 1; i++) {
        let j = 0;
        for (; j < len - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
};

const values = [10, 1, -1, 1, 1, 2, 0, 7, 1, 8];
const r = bubble(values);
alert(r);
