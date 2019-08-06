function walkBottomHourGlass(arr) {
    let path = []
    const n = arr.length
    let dp = arr
    //use dynamic promraming get arrary dp
    for (let i = n-1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[i][j] > arr[i][j+1]) dp[i-1][j] += arr[i][j]
            else dp[i-1][j] += arr[i][j+1]
        }
    }
    //use array dp to find the optimal path
    //The maximum value in each level of dp corresponds to the position of each step
    let maxInDp = []
    for (let i = 0; i < n; i++) {
        let tempMax = dp[i][0]
        maxInDp[i] = [tempMax, 0]
        for (let j = 0; j < i; j++) {
            if (tempMax < dp[i][j]) {
                tempMax = dp[i][j]
                maxInDp[i] = [tempMax, j]
            }
        }
    }
    for (let i = 0; i < n-1; i++) {
        if ( maxInDp[i][1] < maxInDp[i+1][1] ) path.push('R')
        else path.push('L')
    }
    return path
}

// we can use the same way to deal with top hourglass
function walkTopHourGlass(arr) {
    let path = []
    const n = arr.length
    let dp = arr
    for (let i = 0; i < n-1; i++) {
        for (let j = 0; j < n-1-i; j++) {
            if (arr[i][j] > arr[i][j+1]) dp[i+1][j] += arr[i][j]
            else dp[i+1][j] += arr[i][j+1]
        }
    }
    let maxInDp = []
    for (let i = 0; i < n; i++) {
        let tempMax = dp[i][0]
        maxInDp[i] = [tempMax, 0]
        for (let j = 0; j < n-i; j++) {
            if (tempMax < dp[i][j]) {
                tempMax = dp[i][j]
                maxInDp[i] = [tempMax, j]
            }
        }
    }
    for (let i = 0; i < n-1; i++) {
        if ( maxInDp[i][1] < maxInDp[i+1][1] ) path.push('R')
        else path.push('L')
    }
    // return path array and initial number's index
    return [path, maxInDp[0][1]]
}


function walkHourGlass(bottomHourGlass, TopHourGlass) {
    let path_1 = walkBottomHourGlass(bottomHourGlass)
    let path_2 = walkTopHourGlass(TopHourGlass)
    let initial = path_2[1].toString() + ','
    let step = path_2[0].concat(path_1).toString()
    let path = initial + step
    return path
}

const topHourGlass = [
    [19, 7, 10, 4, 16],
    [2, 18, 9, 5],
    [10, 6, 8],
    [12, 15],
    [9]
]

const bottomHourGlass = [
    [9],
    [12, 15],
    [10, 6, 8],
    [2, 18, 9, 5],
    [19, 7, 10, 4, 16]
]

walkHourGlass(bottomHourGlass, topHourGlass)