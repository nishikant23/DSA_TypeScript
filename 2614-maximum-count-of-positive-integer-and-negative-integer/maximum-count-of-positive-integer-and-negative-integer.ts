function maximumCount(nums: number[]): number {
    let n : number = nums.length;
    let l : number = 0;
    let r : number = n-1;
    if((n==1 && nums[0]>0) || (n==1 && nums[0]<0)) return 1;   //edge case  //single elem array
    if((nums[l]<0 && nums[r]<0) || (nums[l]>0 && nums[r]>0)) return n; //only -ve/+ve elems in array
    let count : number = getOcc(nums, 0, n-1); //else, if mix of -ve & +ve elems in array
    return count; //max out of total -ve&+ve counts in an array
};
function getOcc(arr: number[], l: number, r: number): number {
    let pos: number = -1;
    let neg: number = -1;
    while(l<=r){
        let m: number = Math.floor(l+(r-l)/2); //to avoid Integer overflow

        if(arr[m]==0){ //if 0 encountered , move l & r towards e/o
            
            l++;
            r--;
            pos=l; 
            neg=r; 
        }else if(arr[m]>0){ //moving left to get 1stOcc. of +ve num.
            pos=m; //+ve num. 1st Occ. index found.
            r=m-1; //move left
        }else {    //moving right to get LastOcc. of -ve num.
            neg=m; //-ve num. last index found
            l=m+1; //move right
        }
    }
    while(arr[pos] == 0){ //blw loop only runs, when arr[pos]/arr[neg] holds 0 value
        pos++; //move right, away from 0-elem, to get 1st +ve num occ.
    }
    while(arr[neg]==0){
        neg--;//move left, away from 0-elem, to get last -ve num occ.
    }
    return Math.max((neg+1), (arr.length-pos)); //max out of total -ve&+ve counts in an array
}