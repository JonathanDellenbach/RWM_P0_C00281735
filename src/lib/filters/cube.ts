// Pure function: cube a single integer
export function cube(x: number): number {
  return Math.pow(x, 3);
}

// Map over a sequence
export function cubes(xs: number[]): number[] {
  return xs.map((value) => cube(value));
}

//src/lib/filters/index.ts
//export * from './cube';
// Later, export your assigned filter here too, e.g. export * from './modulo3';
