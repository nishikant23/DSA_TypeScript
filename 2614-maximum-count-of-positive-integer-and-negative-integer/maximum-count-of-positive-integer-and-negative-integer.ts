function maximumCount(nums: number[]): number {
    let n : number = nums.length;
    let l : number = 0;
    let r : number = n-1;
    if((n==1 && nums[0]>0) ||  (n==1 && nums[0]<0)) return 1;
    if((nums[l]<0 && nums[r]<0) || (nums[l]>0 && nums[r]>0)) return n;
    let count : number = getOcc(nums, 0, n-1);
    return count;
};

function getOcc(arr: number[], l: number, r: number): number {
    let pos: number = -1;
    let neg: number = -1;
    while(l<=r){
        let m: number = Math.floor(l+(r-l)/2);

        if(arr[m]==0){
            
            l++;
            r--;
            pos=l;
            neg=r;
        }else if(arr[m]>0){
            pos=m;
            r=m-1;
        }else { //equals to target
            neg=m;
            l=m+1;
        }
    }

    while(arr[pos] == 0){
        pos++;
    }
    while(arr[neg]==0){
        neg--;
    }
    return Math.max((neg+1), (arr.length-pos));
}