export default function mergeSort(array){

    if(array.length < 2){
        return array
    }

    let half = Math.ceil(array.length / 2);

    let firstHalf = mergeSort(array.slice(0,half))
    let secondHalf = mergeSort(array.slice(half))

    return merge(firstHalf, secondHalf)
}

export function merge(left,right){
    let finalArr = []

    while(left.length > 0 && right.length > 0){
        let singleArray = left[0] < right[0] ? left : right;
        let mergeElement = singleArray.shift()
        finalArr.push(mergeElement)
    }
    return finalArr.concat(left,right)
}
