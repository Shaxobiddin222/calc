function insert(num) {
	document.form.textview.value = document.form.textview.value + num;
 }
 function clean() {
	document.form.textview.value = "";
 }
 function back() {
	var exp = document.form.textview.value;
	document.form.textview.value = exp.substring(0,exp.length-1);
 }
 function equal() {
	var exp = document.form.textview.value;
	if(exp) {
	   document.form.textview.value = eval(exp);
	}
 }








function equal(){
	let exp = document.form.textview.value;
	try{
		if(exp){//если значение exp не пустое
			document.form.textview.value = eval(exp);/*то значению input присвоить ответ из решения примера*/

		}
		/*метод eval выполняет JavaScript код, представленный строкой, т.е. введенный из кнопок*/
	}
	catch(err){/*если в уравнении есть ошибка, то input присвоить значение "Error!"*/

		document.form.textview.value = "Error!";
	}
}