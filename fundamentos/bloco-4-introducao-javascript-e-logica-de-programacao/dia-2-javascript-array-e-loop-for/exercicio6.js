let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resto = 0;
for(let index = 0; index < numbers.length; index += 1){

    if(numbers[index] % 2 !== 0) {
        resto  += 1;
    }
}
if(resto === 0){
    console.log("nenhum valor impar encontrado");
}else{
    console.log(resto);
}

//referência sobre numeros impares:
//https://www.blogcyberini.com/2018/03/verificar-numero-par-impar.html