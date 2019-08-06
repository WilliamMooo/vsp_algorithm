function maxInThree(val1, val2, val3) {
    let max = val1
    if (max < val2) max = val2
    if (max < val3) max = val3
    return max
}

function maxSubSeq(seq, left, right) {
    if (left == right) return seq[left] //The sequence can not be divided
    else {
        let center = parseInt((left+right)/2)
        let maxLeftSum = maxSubSeq(seq, left, center) //The left half of the sequence
        let maxRightSum = maxSubSeq(seq, center, right) //The right half of the sequence

        //Across the left and right half of the sequence
        //The left half of the subsequence contains the last element
        let maxLeftBorderSum = seq[center]
        let leftBorderSum = seq[center]
        for (let i = center - 1; i >= left; i--) {
            leftBorderSum += seq[i]
            if (leftBorderSum > maxLeftBorderSum) {
                maxLeftBorderSum = leftBorderSum
            }
        }

        //The right half of the subsequence contains the last element
        let maxRightBorderSum = seq[center+1]
        let rightBorderSum = seq[center+1]
        for (let i = center+2; i <= right; i++) {
            rightBorderSum += seq[i]
            if (rightBorderSum > maxRightBorderSum) {
                maxRightBorderSum = rightBorderSum
            }
        }
        
        return maxInThree(maxLeftSum, maxRightSum, maxLeftBorderSum+maxRightBorderSum)
    }
}