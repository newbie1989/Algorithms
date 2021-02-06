const insert = (arr) => {
    const len = arr.length;

    for (let i = 1; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr.splice(i, 1);
                arr.splice(j, 0, temp);
            }
        }
    }
    return arr;
};

const values = [4, 3, 1, 5, 6, 7, 0, -1, 100, 4, -199];

const r = insert(values);
alert(r);
