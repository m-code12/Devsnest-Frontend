var inpfirst = document.querySelector(".first");
var inpsecond = document.querySelector(".second");
var btnadd = document.querySelector(".btn-add");
var btnsub = document.querySelector(".btn-sub");
var btnmul = document.querySelector(".btn-mul");
var btndivide = document.querySelector(".btn-divide");

btnadd.addEventListener("click", function add(){
	const c = +inpfirst.value + +inpsecond.value;
	alert("The Addition of "+inpfirst.value+" and "+inpsecond.value+" is "+c);
})

btnadd.addEventListener("mouseover", function changec(){
	btnadd.style.backgroundColor= "#EE82EE";
})
btnadd.addEventListener("mouseout", function changec(){
	btnadd.style.backgroundColor= "#00BFFF";
})

btnsub.addEventListener("click", function add(){
	const c = +inpfirst.value - +inpsecond.value;
	alert("The Subtraction of "+inpfirst.value+" and "+inpsecond.value+" is "+c);
})

btnsub.addEventListener("mouseover", function changec(){
	btnsub.style.backgroundColor= "#EE82EE";
})
btnsub.addEventListener("mouseout", function changec(){
	btnsub.style.backgroundColor= "#FF0000";
})

btnmul.addEventListener("click", function add(){
	const c = +inpfirst.value * +inpsecond.value;
	alert("The Multiplication of "+inpfirst.value+" and "+inpsecond.value+" is "+c);
})

btnmul.addEventListener("mouseover", function changec(){
	btnmul.style.backgroundColor= "#EE82EE";
})
btnmul.addEventListener("mouseout", function changec(){
	btnmul.style.backgroundColor= "#FFD700";
})

btndivide.addEventListener("click", function add(){
	const c = +inpfirst.value / +inpsecond.value;
	alert("The Multiplication of "+inpfirst.value+" and "+inpsecond.value+" is "+c);
})

btndivide.addEventListener("mouseover", function changec(){
	btndivide.style.backgroundColor= "#EE82EE";
})
btndivide.addEventListener("mouseout", function changec(){
	btndivide.style.backgroundColor= "#7FFF00";
})

