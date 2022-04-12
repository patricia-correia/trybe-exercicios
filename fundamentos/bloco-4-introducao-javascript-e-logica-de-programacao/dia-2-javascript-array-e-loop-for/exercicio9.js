let numbers = [];
let divisao = 0;
for(let index = 1; index <= 25; index+= 1){
    numbers.push(index);
}
for(let index1 = 0; index1 < numbers.length; index1 += 1){
    console.log(numbers[index1] / 2);
}

//Divisião do valor total
/*for(let index1 = 0; index1 < numbers.length; index1 += 1){
    divisao += numbers[index1] 
}
 divisao / 2
 console.log (divisao)*/