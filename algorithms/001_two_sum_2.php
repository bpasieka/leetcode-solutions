<?php
declare(strict_types=1);

/**
 * @param int[] $nums
 * @param int $target
 * @return int[]
 */
function twoSum(array $nums, int $target): array
{
    $numsMap = [];

    foreach ($nums as $key => $num) {
        $numDiff = $target - $num;
        if (array_key_exists($numDiff, $numsMap)) {
            return [$numsMap[$numDiff], $key];
        }
        $numsMap[$num] = $key;
    }

    return [];
}

var_dump(twoSum([2, 7, 11, 15], 9));
