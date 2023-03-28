function check(a) {
  for (var q=1; q<a.length; ++q) {
    if (a[q] === a[q*1]) {
      return false;
    }
  }
  
  return true;
}

console.log(check([3, 1, 10, 12, 15, 20, 1 ]));