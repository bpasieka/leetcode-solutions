<?php
declare(strict_types=1);

/**
 * @param int[] $nums
 * @param int $target
 * @return int[]
 */
function twoSum(array $nums, int $target): array
{
    foreach ($nums as $key1 => $num1) {
        foreach ($nums as $key2 => $num2) {
            if (($num1 + $num2) === $target) {
                return [$key1, $key2];
            }
        }
    }

    return [];
}

var_dump(twoSum([2, 7, 11, 15], 9));
