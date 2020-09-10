var list = [
	{"desc":"rice", "amount":"1", "value":"5.40", "discount":"2", "subTotal":"1.99"},
	{"desc":"beer", "amount":"12", "value":"1.99", "discount":"10", "subTotal":"1.99"},
	{"desc":"meat", "amount":"1", "value":"15.00", "discount":"12", "subTotal":"1.99"}
];


//somando total
function getTotal(list){
	var total = 0;
	for(var key in list){
		total += list[key].value * list[key].amount;
	}
	document.getElementById("totalValue").innerHTML = formatValue(total);
}

//criando a tabela
function setList(list){
	var table = '<thead><tr><td>Description</td><td>Amount</td><td>Value</td><td>Discount</td><td>SubTotal</td><td>Action</td></tr></thead><tbody>';
	for(var key in list){
		table += '<tr><td>'
			+ formatDesc(list[key].desc) +
		'</td><td>'
			+ formatAmount(list[key].amount) +
		'</td><td>'
			+ formatValue(list[key].value) +
		'</td><td>'
			+ formatDiscount(list[key].discount) +
		'</td><td>'
			+ subTotal(list[key].subTotal) +
		'</td><td><button class="btn btn-default" onclick="setUpdate('+key+');">Edit</button> <button class="btn btn-default" onclick="deleteData('+key+');">Delete</button></td></tr>';
	}
	table += '</tbody>';

	document.getElementById('listTable').innerHTML = table;
	getTotal(list);
	saveListStorage(list);
}

//formatando o nome do produto
function formatDesc(desc){
	var str = desc.toLowerCase();
	str = str.charAt(0).toUpperCase() + str.slice(1);
	return str;
}

//formatando a quantidade
function formatAmount(amount){
	return parseInt(amount);
}

//formatando o preço
function formatValue(value){
	var str = parseFloat(value).toFixed(2) + "";
	str = str.replace(".",",");
	str = "$ " + str;
	return str;
}

//formatando o desconto
function formatDiscount(discount){
	var str = parseFloat(discount).toFixed(2) + "";
	str = str.replace(".",",");
	str = str + "%";
	return str;
}

//formatando o desconto
st = function subTotal(value, amount, discount){
	var total = value * amount;
	var discountOfValue = total * (discount / 100);
	var subTotal = total - discountOfValue;
	var str = parseFloat(subTotal).toFixed(2) + "";
	str = str.replace(".",",");
	str = "$ " + str;
	return str;
}

console.log(subTotal(2,2,2));

//adicionar novo produto
function addData(){
	if(!validation()){
		return;
	}
	var desc = document.getElementById("desc").value;
	var amount = document.getElementById("amount").value;
	var value = document.getElementById("value").value;
	var discount = document.getElementById("discount").value;
	var subTotal = document.getElementById("subTotal").inn;

	list.unshift({"desc":desc , "amount":amount , "value":value , "discount":discount, "subTotal":subTotal });
	setList(list);
}

//botões de editar
function setUpdate(id){
	var obj = list[id];
	document.getElementById("desc").value = obj.desc;
	document.getElementById("amount").value = obj.amount;
	document.getElementById("value").value = obj.value;
	document.getElementById("discount").value = obj.discount;
	// document.getElementById("subTotal").value = obj.subTotal;

	document.getElementById("btnUpdate").style.display = "inline-block";
	document.getElementById("btnAdd").style.display = "none";

	document.getElementById("inputIDUpdate").innerHTML = '<input id="idUpdate" type="hidden" value="'+id+'">';
}

//limpa os campos de editar
function resetForm(){
	document.getElementById("desc").value = "";
	document.getElementById("amount").value = "";
	document.getElementById("value").value = "";
	document.getElementById("discount").value = "";
	// document.getElementById("subTotal").value = "";
	document.getElementById("btnUpdate").style.display = "none";
	document.getElementById("btnAdd").style.display = "inline-block";
	
	document.getElementById("inputIDUpdate").innerHTML = "";
	document.getElementById("errors").style.display = "none";
}

//atualizando os dados
function updateData(){
	if(!validation()){
		return;
	}
	var id = document.getElementById("idUpdate").value;
	var desc = document.getElementById("desc").value;
	var amount = document.getElementById("amount").value;
	var value = document.getElementById("value").value;
	var discount = document.getElementById("discount").value;
	var subTotal = document.getElementById("subTotal").value;

	list[id] = {"desc":desc, "amount":amount, "value":value, "discount":discount, "subTotal":subTotal};
	resetForm();
	setList(list);
}

//deletando os dados
function deleteData(id){
	if(confirm("Delete this item?")){
		if(id === list.length - 1){
			list.pop();
		}else if(id === 0){
			list.shift();
		}else{
			var arrAuxIni = list.slice(0,id);
			var arrAuxEnd = list.slice(id + 1);
			list = arrAuxIni.concat(arrAuxEnd);
		}
		setList(list);
	}
}

//validando e mostrando erros
function validation(){
	var desc = document.getElementById("desc").value;
	var amount = document.getElementById("amount").value;
	var value = document.getElementById("value").value;
	var discount = document.getElementById("discount").value;
	
	var errors = "";
	document.getElementById("errors").style.display = "none";

	if(desc === ""){
		errors += '<p>Fill out description</p>';
	}
	if(amount === ""){
		errors += '<p>Fill out a quantity</p>';
	}else if(amount != parseInt(amount)){
		errors += '<p>Fill out a valid amount</p>';
	}
	if(value === ""){
		errors += '<p>Fill out a value</p>';
	}else if(value != parseFloat(value)){
		errors += '<p>Fill out a valid value</p>';
	}
	if(discount === ""){
		errors += '<p>Fill out a discount</p>';
	}else if(discount != parseFloat(discount)){
		errors += '<p>Fill out a valid discount</p>';
	}

	if(errors != ""){
		document.getElementById("errors").style.display = "block";
		document.getElementById("errors").innerHTML = "<h3>Error:</h3>" + errors;
		return 0;
	}else{
		return 1;
	}
}

//deletando lista
function deleteList(){
	if (confirm("Delete this list?")){
		list = [];
		setList(list);
	}
}

//salvando em storage
function saveListStorage(list){
	var jsonStr = JSON.stringify(list);
	localStorage.setItem("list",jsonStr);
}

//verifica se já tem algo salvo
function initListStorage(){
	var testList = localStorage.getItem("list");
	if(testList){
		list = JSON.parse(testList);
	}
	setList(list);
}

initListStorage();