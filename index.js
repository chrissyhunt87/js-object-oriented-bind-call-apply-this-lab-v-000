function justInvoke(fn) {
  return fn();
}

function setThisWithCall(fn, thisValue, arg) {
  return thisValue.call(fn, arg);
}