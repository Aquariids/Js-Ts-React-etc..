// мое решение не верное!!!!  я даже задачу не понял, я ебалн тупой блять, но все равно оставлю как напоминание


const input1 = [1,2,2,1];
const input2 = [2,2];
// output: [2,2]

const input3 = [4,9,5];
const input4 = [9,4,9,8,4];

// output: [4,9] or [9,4]

const intersect = function (nums1, nums2) {
    let result = []; 
    
    let noDuplicateArgument1 = Array.from(new Set(nums1));
    let noDuplicateArgument2 = Array.from(new Set(nums2));

    noDuplicateArgument1.forEach(element => {
        noDuplicateArgument2.forEach(e => {
            if (element === e && noDuplicateArgument1.length && noDuplicateArgument2.length <= 2) {
                result.push(element,e);
                
            } else if (element === e) {
                result.push(e);
            }
        });
        
    });

return result;
    
};



console.log(intersect(input1,input2));
console.log(intersect(input3,input4));