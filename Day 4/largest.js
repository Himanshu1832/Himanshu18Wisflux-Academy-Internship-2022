const maximum = (x, y, z) =>
 {
  max = 0;
  if (x > y)
  {
    max = x;
  } else
  {
    max = y;
  }
  if (z > max) 
  {
    max = z;
  }
  return max;
}

console.log(maximum(1,0,-1));
console.log(maximum(09,-13,-30));
console.log(maximum(10,51,4));
