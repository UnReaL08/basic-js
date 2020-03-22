module.exports = class DepthCalculator {
    calculateDepth(arr) {
        count = 0;
        arr.forEach(item => {
            if (Array.isArray(item)) {
                count = Math.max(this.calculateDepth(item), count);
            };
        });
        return count + 1;
    }; 
};