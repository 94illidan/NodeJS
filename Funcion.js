var N1 = 3;
var N3 = 2;
var N2 = 1;

function add(N1, N2){
	var resultado;
	if (N1 % 2 != 0){
		resultado = 'no es par';
	}else{
		resultado = 'numero es par';
	}
return resultado;
}


console.log(add(N1,N2));