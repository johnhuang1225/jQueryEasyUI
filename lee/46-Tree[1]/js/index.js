$(function(){

	$('#box').tree({
		url:'org.json',
		animate:true,
		checkbox:true,
		lines:true,
		// formatter:function(node){
		// 	return '[' + node.text + ']';
		// }
	});

	// use method
	var data = [{"id":"1","parentid":"","text":"Apple"},{"id":"2","parentid":"1","text":"IT"},{"id":"3","parentid":"1","text":"HR"},{"id":"4","parentid":"2","text":"ap"},{"id":"5","parentid":"2","text":"info"}];	

	$('#tree2').tree({
		// line:true
	});
	$('#tree2').tree('loadData',data);


});