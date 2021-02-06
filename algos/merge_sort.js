/***
 * Merge Sort
 */

function merge(left, right) {
  // merge two sorted arrays

  let li = 0;
  let ri = 0;

  let arr = [];
  while (li <= left.length - 1 && ri <= right.length - 1) {
    if (left[li] < right[ri]) {
      arr.push(left[li]);
      li++;
    } else {
      arr.push(right[ri]);
      ri++;
    }
  }
  /***
   * There is a chance that one of the arrays will get exhausted before the other. Use splice to
   * get remaining elements from the unfinishe array and concat it to returning array*/

  return arr.concat(left.splice(li)).concat(right.splice(ri));
}

const sort = (arr) => {
  const len = arr.length;
  if (len === 1) {
    return arr;
  }

  const mid = Math.floor((len - 1) / 2);

  const left = arr.slice(0, mid + 1);
  const right = arr.slice(mid + 1, len);

  return merge(sort(left), sort(right));
};

const r = sort([1, 1, 1, 1, 1, 9, 9, 0, 0]);
