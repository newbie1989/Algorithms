const selSort = (arr) => {
    const len = arr.length;

    for (let i = 0; i < len; i++) {
        let minI = i;
        for (let j = minI + 1; j < len; j++) {
            if (arr[j] < arr[minI]) {
                minI = j;
            }
        }

        [arr[i], arr[minI]] = [arr[minI], arr[i]];
    }

    return arr;
};

const values = [4, 3, 1, 5, 6, 7, 0, -1, 100];

const r = selSort(values);
alert(r);
