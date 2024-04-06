function count_triplets(target, numbers) {
    
    let result = 0;
    // sort the array
    numbers.sort((a, b) => a - b);
    // iterate over the array
    for (let i = 0; i < numbers.length - 2; i++) {
        
        let left = i+1,
            right = numbers.length - 1;

        while (left < right) {
            let sum = numbers[i] + numbers[left] + numbers[right];
            if (sum < target) {
                result += right - left;
                left++
            } else {
                right--;
            }
        }
    }
    return result;
}