const array = [7, 3, 6, 1, 8, 4, 2, 5, 9];

merge_sort(array, 0, array.length - 1);

console.log(array);

function merge_sort(arr: number[], low: number, high: number) {
  if (low >= high) return;

  let mid = Math.floor((low + high) / 2);

  merge_sort(arr, low, mid);
  merge_sort(arr, mid + 1, high);

  merge(arr, low, mid, high);
}

function merge(arr: number[], low: number, mid: number, high: number) {
  let left = low;
  let right = mid + 1;
  let tempArray: number[] = [];

  while (left <= mid && right <= high) {
    if (arr[left]! <= arr[right]!) {
      tempArray.push(arr[left]!);
      left++;
    } else {
      tempArray.push(arr[right]!);
      right++;
    }
  }

  while (left <= mid) {
    tempArray.push(arr[left]!);
    left++;
  }

  while (right <= high) {
    tempArray.push(arr[right]!);
    right++;
  }

  for (let i = low; i <= high; i++) {
    arr[i] = tempArray[i - low]!;
  }
}
