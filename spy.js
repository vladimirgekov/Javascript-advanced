function Spy(target, method) {
  let originalFunc = target[method];

  let result = { count: 0 };

  target[method] = function () {
    result.count++;
    return originalFunc.apply(this, arguments);
  };

  return result;
}
