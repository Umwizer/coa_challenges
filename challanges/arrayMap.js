function subarrayWithSum(arrayNumber, target) {
    let startIndex = 0;
    let sum = 0; 
    for (let endIndex = 0; endIndex < arrayNumber.length; endIndex++) {
        sum += arrayNumber[endIndex];
        while (sum > target && startIndex <= endIndex) {
            sum -= arrayNumber[startIndex];
            startIndex++;
        }
        if (sum === target) {
            return true;
        }
    }
    return false;
}
const arrayNumber = [4,7];
const target = 14;
console.log(subarrayWithSum(arrayNumber, target));
