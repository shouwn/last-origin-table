export function combination (array, size) {
  return _combination(array, 0, size);
}

function _combination (array, index, size) {
  let result = [];

  if (size === 0 || array.length < size) {
    return [[]];
  }

  for (let i = index; i < array.length && array.length - i >= size; i++) {
    let currentElement = array[i];

    _combination(array, i + 1, size - 1).forEach(arr => {
      arr.push(currentElement);
      result.push(arr);
    });
  }

  return result;
}
