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
    let temp = _combination(array, i + 1, size - 1);
    temp.forEach(arr => arr.unshift(currentElement));

    result = result.concat(temp);
  }

  return result;
}
