// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix || !matrix.length) {
        return [];
    }

    return matrix
        .map((item, index) => {
            return item.sort((a, b) => (index % 2 === 0 ? a - b : b - a));
        })
        .flat();
};
