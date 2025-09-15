// Pure function: xor a number
function xor(x: number): number 
{
  return x ^ 21;
}

export function multipleXors(xs: number[]): number[] 
{
  return xs.map(xor);
}

//src/lib/filters/index.ts
//export * from './xor21';
// Later, export your assigned filter here too, e.g. export * from './modulo3';
