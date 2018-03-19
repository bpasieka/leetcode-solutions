/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = (coins, amount) => {
    if (amount === 0) {
        return 0;
    }

    coins.sort((a, b) => {return a - b});

    const changeMap = {};
    for (const coin of coins) {
        for (let i = coin; i <= amount; i++) {
            const prevChange = i - coin;

            if (prevChange === 0) {
                changeMap[i] = 1;
            }

            if (changeMap[prevChange] !== undefined) {
                const newValue = changeMap[prevChange] + 1;

                if (changeMap[i] === undefined || changeMap[i] > newValue) {
                    changeMap[i] = newValue;
                }
            }
        }
    }

    return changeMap[amount] || -1;
};