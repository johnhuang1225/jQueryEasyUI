$(function(){

	$('#box').tree({
		url:'tree.json',
		animate:true,
		checkbox:true,
		lines:true,
		formatter:function(node){
			return '[' + node.text + ']';
		}
	});


});