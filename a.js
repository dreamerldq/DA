
// const arr = [[1,2],[3,4],[5,6]]
// function zhuanhuan(arr){
//     let arr1 = []
//     arr.forEach(item => {
//         arr1.push(...item)
//     });
//     return arr1;
// }

// let arr = [[1,2,3],[2,3,4,5],[6,5,4,3],[[18,9,0],[9,10,20]],{asads:"sa"}]
// function zhuanhuan(arr){
//     let arr1 = []
//     function innerzhuanhuan(arr){
//         arr.forEach(item => {
//             if(Array.isArray(item)){
//                 innerzhuanhuan(item)
//             }else{
//                 arr1.push(item)
//             }
//         });
//     }
//     innerzhuanhuan(arr)
//     return arr1;
// }
// console.log(zhuanhuan(arr))
function gongyue(a,b){
    let max,min;
    if(a>b){
        max = a;
        min = b;
    }else{
        max =b;
        min=a;
    }
    for(let i =min;i>0;i--){
        console.log(i)
        if(max%i==0&&min%i==0){
            return i
        }
    }
}
console.log(gongyue(27,9))
