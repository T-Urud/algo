function quickSort(array) {
  if (array.length === 1) {
    return array;
  }

  const pivot = array[array.length - 1];
  let arrLeft = [];
  let arrRight = [];

  for (let i = 0; i < array.length - 1; i++) {
    array[i] < pivot ? arrLeft.push(array[i]) : arrRight.push(array[i]);
  }

  if (arrLeft.length > 0 && arrRight.length > 0) {
    return [...quickSort(arrLeft), pivot, ...quickSort(arrRight)];
  } else if (arrLeft.length > 0) {
    return [...quickSort(arrLeft), pivot];
  } else {
    return [pivot, ...quickSort(arrRight)];
  }
}

console.log(
  quickSort([1, 8, 88, 565, 962, 2, 144, 324, 55, 20, 12, 75, 64, 9999, 203])
);

// attention à pas faire boucle infini
