//1.write a program to reverse each word in a string
// let str = "Hello world"
// let a = str.split(" ")
// let b = a.reverse(" ")
// let c = b.join("")
// console.log("Reverse of a string:"+c)

//2.write a program to return the length of largest word in a string
// let str = prompt("Enter a string")
// let a = str.split(" ")
// big = a[0].length
// for(i=1;i<a.length;i++){
//     if(big<a[i].length){
//         big = a[i].length
//     }
// }
// console.log(big)

//3.write a program to return largest number from each array inside an array
// let arr = [[1,3,2],[4,6,5],[8,7]]
// let k = []
// let large = arr[0][0]
// for(i=0;i<arr.length;i++){
//     for(j=0;j<arr[i].length;j++){
//          if(large<arr[i][j]){
//             large = arr[i][j]
//          }
//     }
//     k.push(large)
//     large=0
// }
// console.log(k)

//4.write a program to find factorial of a number using recursion function
// function factorial(x){
//     if(x==0){
//         return 1
//     }
//     else{
//          return x*factorial(x-1)
//     }
// }
// let num = parseFloat(prompt("Enter a number:"))
// if(num>=0){
//     result = factorial(num)
//     console.log("Factorial of " +num+ ":" +result)
// }

//5.write program to add an element in an array at a specified index number
// let arr = [1,2,3,4,5,6]
// arr[3] = "a"
// console.log(arr)

//6.write a program to print this pattern
// let num = 5
// string = ""
// for(i=1;i<=num;i++){
//     for(j=1;j<=i;j++){
//         string += j
//     }
//     string += "\n"
// }
// console.log(string)