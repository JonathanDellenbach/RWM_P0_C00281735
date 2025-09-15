import{ describe, it, expect } from 'vitest';
import { xor } from './xor21';

describe('Xor filter', () => {
  it('Xors a number', () => {
    const input = 4;
    const expected = 17;
    expect(xor(input)).toEqual(expected);
  });
});