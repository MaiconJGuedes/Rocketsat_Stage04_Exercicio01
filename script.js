alert('Vamos somar dois números')

let n1 = prompt('Insira o primeiro número')
let n2 = prompt('Insira o segundo número')

n1 = Number(n1)
n2 = Number(n2)

const sum = n1 + n2
const evenOrOdd = sum % 2 === 0? 'par':'impar';
const sub = n1 - n2
const multi = n1 * n2
const div = n1 / n2
const restDiv = n1 % n2
const equal = n1 === n2 ? 'Iguais' : 'diferentes'


alert(`Os dois números inseridos são: ` + equal) 
alert(`A soma de ${n1} e ${n2} é igual a: `+ sum)
alert(`A soma dos dois números ${n1} e ${n2} é ${evenOrOdd}`)
alert(`A subtração de ${n1} e ${n2} é igual a: `+ sub)
alert(`A Multiplicação de ${n1} e ${n2} é igual a: `+ multi)
alert(`A Divisão de ${n1} e ${n2} é igual a: `+ div)
alert(`O Resto do divisão de ${n1} e ${n2} é igual a: `+ restDiv)
