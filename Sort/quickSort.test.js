function pivot(arr, start = 0, end=arr.length + 1) {
    function swap(arr, idx1, idx2) {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    };

    let pivot = arr[start];
    let swapIdx = start;

    for(let i = start + 1; i <= end; i++) {
        if(pivot > arr[i]) {
            swapIdx++;
            swap(arr,swapIdx,i);
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1){
    if(left < right){
        // 범위 내 원소들을 분활하고 피벗의 인덱스를 가져온다.
        let pivotIndex = pivot(arr, left, right);
    
        // 피벗 왼쪽에 대해 quickSort 함수를 재귀적으로 호출한다.
        quickSort(arr,left,pivotIndex-1);
    
        // 피벗 오른쪽에 대해 quickSort 함수를 재귀적으로 호출한다.
        quickSort(arr,pivotIndex+1,right);
    }
    return arr;
}

describe('범위 내 원소들을 분활하고, 피벗의 인덱스를 가져온다면', () => {
    it('피벗 인덱스 기준으로 수가 작으면 왼쪽, 크면 오른쪽으로 이동한다. ',() => {
        // expect(quickSort([4,8,2,1,5,7,6,3])).toStrictEqual([1,2,3,4,5,6,7,8]);
        expect(pivot(0)).toStrictEqual([0,5,2,1,6,3]);
    })
});


