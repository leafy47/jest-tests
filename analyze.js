function analyze (array) {
    const max = () => {
        return Math.max(...array)
    };

    const min = () => {
        return Math.min(...array)
    };

    const average = () => {
        const sum = array.reduce((acc, val) => acc + val, 0);
        return sum / array.length;
    };

    const length = () => {
        return array.length;
    }

    return {
        average: average(),
        min: min(),
        max: max(),
        length: length()
    }
}

module.exports = analyze;