function findMin(nums: number[]): number {
    let l: number  = 0, n: number = nums.length, r: number = n-1;
    let m: number  = -1, prev: number = -1, next: number = -1;
    while(l<=r) {
        // console.log("AA")
        m = Math.floor(l+(r-l)/2);
        prev = Math.abs(m-1)%n;  //to avoid 
        next = (m+1)%n; 
        console.log(`BB -> m = ${m}, prev = ${prev}, next = ${next}`)
        if(nums[m]<=nums[prev] && nums[m]<=nums[next]) {
            // let index: number = ((n-1)%m)+1;
            // console.log("min index = ", index)
            return nums[m];
        } 
        else if(nums[m]>=nums[l] && nums[m]<=nums[r]){ //whole sorted array/ no rotation
            r=m-1;
        }else{ //still on Sorted region where min-num not present
            if(nums[l]<=nums[m]) l=m+1;//means, left part is sorted, min-num only found in Unsorted part(right)
            else if(nums[m] <= nums[r]) r=m-1;//means, right part is sorted, min-num only found in Unsorted part(left)
        }
    }
    return -1;
};