function reliableMultiply(a, b) {
  for (;;) {
    let result = primitiveMultiply(a, b)
    if (result) return result;
  }
};

function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
};

console.log(reliableMultiply(8, 8));