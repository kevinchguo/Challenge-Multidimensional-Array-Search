function locate(array, target) {
  // do work here
  let empArr = [];

  let returnArr = element => {
    element.forEach(arr => {
      if (typeof arr === "object") {
        returnArr(arr);
        return;
      } else {
        empArr.push(arr);
      }
    });
    return empArr;
  };

  return returnArr(array).includes(target);
}

module.exports = locate;
