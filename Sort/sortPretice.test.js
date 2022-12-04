function bubbleSort(arr, end = arr.length - 1) {
    for(let i = 0; i <= end; i++) {
        for(let j = i + 1; j <= end; j++) {
            if(arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

function selectSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let min = i;
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[min] > arr[j]) {
                min = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;
}

function insertSort(arr) {
    for(var i = 1; i < arr.length; i++) {
        let currentValue = arr[i];
        let position = i - 1;

        while(position >= 0) {
            if (arr[position] > currentValue) {
                arr[position + 1] = arr[position];
                position = position - 1;
            } else {
                break;
            }
        }
        arr[position + 1] = currentValue;
    }
    return arr;
}

describe('서로 인접한 두 원소의 대소를 비교하고, 조건이 맞지 않다면', () => {
    it('자리를 교환하며 정렬한다', () => {
        expect(bubbleSort([1,2,3,6,5,7])).toStrictEqual([1,2,3,5,6,7]);
        expect(selectSort([1,2,3,6,5,7])).toStrictEqual([1,2,3,5,6,7]);
        expect(insertSort([4,2,7,1,3])).toStrictEqual([1,2,3,4,7]);
    });
  });
