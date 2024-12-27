function search(nums: number[], target: number): number {
    let n: number  = nums.length;
    let pivot : number = getPivot(nums, 0, n-1);
    if(target == nums[0]) return 0; //early findings
    if(target == nums[1]) return 1; //early findings
    if(target == nums[n-1]) return n-1; //early findings
    if(pivot == -1) { //whole sorted array w/o rotaion
        return getTarget(nums, 0, n-1, target); //like General Binary Search
    }else{ //had rotation , then 1st find min-number index
        if(target == nums[pivot]) return pivot; 
        else if((target < nums[0] && target>nums[n-1]) || target<nums[pivot]){  // target not presen , by chking with min-numINDEX, oth-Indx & lastindex
            return -1;
        }else if(target >= nums[pivot] && target<=nums[n-1]) return getTarget(nums, pivot, n-1, target); //target lies leftSide of pivot-min-num postion
        else if(target >= nums[0] && target<=nums[pivot-1]) return getTarget(nums, 0, pivot-1, target ); //target lies rightSide of pivot-min-num postion
    } 
    return -1; //num , not present
};

const getPivot = (arr: number[], l: number, r: number) => {
    while(l<=r) {
        let m: number =  Math.floor(l+ (r-l)/2);
        let prev: number = Math.abs((m-1)%arr.length);
        let next: number = (m+1)%arr.length;

        if(arr[m] <= arr[prev] && arr[m] <= arr[next]){
            return m;
        }else if(arr[l]<=arr[m] && arr[m]<=arr[r]) r=m-1;
        else {
            if(arr[l]<=arr[m]) l=m+1;
            else if(arr[m]<=arr[r]) r=m-1;
        }
    }
    return -1;
}
const getTarget = (arr: number[], l: number, r: number, target: number) => {
    while(l<=r) {
        let m: number =  Math.floor(l+ (r-l)/2)

        if(arr[m] == target){
            return m;
        }else if(target<arr[m]) r=m-1;
        else l=m+1;
    }
    return -1;
}
