import{ describe, it, expect } from 'vitest';
import { multipleXors, xor } from './xor21';

describe('Xor filter', () => {
  it('Xors a number', () => {
    const input = [4,2,8,3,9,4,10]; // 5 doesnt equal 17 after xor.
    const expected = [17,23,29,22,28,17,31];
    expect(multipleXors(input)).toEqual(expected);
  });
});