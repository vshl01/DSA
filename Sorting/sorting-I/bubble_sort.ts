function bubble_sort(arr: number[]) {
  let n = arr.length;

  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      if (arr[j]! > arr[j + 1]!) {
        let temp = arr[j];
        arr[j] = arr[j + 1]!;
        arr[j + 1] = temp!;
      }
    }
  }
  console.log(arr);
}
const array = [7, 3, 6, 1, 8, 4, 2, 5, 9];
bubble_sort(array);
