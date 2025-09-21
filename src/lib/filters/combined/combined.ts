import { multipleXors as myMultipleXors } from '$lib/filters/xor21';
//Import peers package filter
import { largestNumbers as peerLargestNumbers } from 'peer-filter-c00286807/src/lib/filters/biggestWithSameDigits.ts';

export function combinedFilter(xs: number[]): number[] {
    return peerLargestNumbers(xs);
}