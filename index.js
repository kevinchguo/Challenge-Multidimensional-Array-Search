function locate(array, target) {
  // do work here
  let includesArray = array.join();

  if (includesArray.includes(target)) {
    return true;
  } else {
    return false;
  }
}

module.exports = locate;
