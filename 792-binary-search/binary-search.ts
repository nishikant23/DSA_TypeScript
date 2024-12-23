function search(nums: number[], target: number): number {
    let l: number = 0;
    let n : number = nums.length;
    let r: number = n-1;

    while(l<=r) {
        let m : number = Math.floor(l+(r-l)/2);
        console.log("m=",m);
        if(target==nums[m]) return m;
        else if(target<nums[m]) r=m-1;
        else l=m+1;
    }
    return -1;
};