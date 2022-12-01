function insertionSort(arr) {
    for(var i = 1; i < arr.length; i++) {
        var currentValue = arr[i];
        for(var j = i - 1; 0 <= j && arr[j] > currentValue; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentValue;
    }

    return arr;
}

function insertionsSort_While(arr = []) {
    let result = [...arr];

    for(let i = 1; i < result.length; i++) {
        let temp = result[i];
        let aux = i - 1;

        while(aux >=0 && result[aux] > temp) {
            result[aux + 1] = result[aux];
            aux--;
        }
        result[aux + 1] = temp;
    }
    return result;
}

describe('두 번째 요소를 이전 원소와 비교하고, 조건이 맞지 않으면', () => {
    it('다음 요소로 계속 이동하고 순서가 잘못된 경우 정렬된 부분(즉, 왼쪽)을 반복하여 요소를 올바른 위치에 배치합니다. ',() => {
        expect(insertionSort([2,1,9,76,4])).toStrictEqual([1,2,4,9,76]);
        expect(insertionsSort_While([2,1,9,76,4])).toStrictEqual([1,2,4,9,76]);
    })
});
