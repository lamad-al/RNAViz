function inputSubmit()
{
	console.log("input submited");

	var textarea = $("#inputTextArea");

	$.ajax({
	url:'../php/insertRNA.php',
	type: 'POST',
	data: {
		'input': textarea.val()
	},
	success: StandardPhpCallback(updateRNAList),
	error: StandardError()
	});
}

function inputClear() {

	console.log("input cleared");

	$("#inputTextArea").val("");
}

function inputHide()
{
	$("#inputPanel").hide();
}

function inputShowHide()
{
	var inputPanel = $("#inputPanel")

	if(inputPanel.is(":visible"))
	{
		inputPanel.hide();
	}
	else
	{
		inputPanel.show();
	}
}