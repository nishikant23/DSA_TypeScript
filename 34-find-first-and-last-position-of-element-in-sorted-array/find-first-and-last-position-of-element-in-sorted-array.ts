function searchRange(nums: number[], target: number): number[] {
    let res : number[] = [];
    res.push(get1stOcc(nums, target, 0, nums.length-1))
    res.push(getLastOcc(nums, target, 0, nums.length-1))
    return res;
};

const get1stOcc = (arr: number[], target: number, l: number, r: number): number => {
    let foundIndex : number = -1;
    while(l<=r) {
        let m: number = Math.floor(l + (r-l)/2);
        if(arr[m] == target){
            foundIndex = m;
            r=m-1;
        }
        else if(arr[m]>target)  r=m-1;
        else l=m+1
    }
    return foundIndex;
}
const getLastOcc = (arr: number[], target: number, l: number, r: number): number => {
    let foundIndex : number = -1;
    while(l<=r) {
        let m: number = Math.floor(l + (r-l)/2);
        if(arr[m] == target){
            foundIndex = m;
            l=m+1;
        }
        else if(arr[m]>target)  r=m-1;
        else l=m+1
    }
    return foundIndex;
}
