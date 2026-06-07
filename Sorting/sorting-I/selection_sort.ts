const array = [7, 3, 6, 1, 8, 4, 2, 5, 9];

function selection_sort(arr: number[]) {
  for (let i: number = 0; i <= arr.length - 1; i++) {
    let mini = i;
    for (let j = i; j <= arr.length - 1; j++) {
      if (arr[j]! < arr[mini]!) {
        mini = j;
      }
    }
    let temp: number = arr[i]!;
    arr[i] = arr[mini]!;
    arr[mini] = temp;
  }
  console.log(arr);
}

selection_sort(array);
