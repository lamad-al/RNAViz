
/* Start of document ready */
$( document ).ready(function() {
	console.log("ready");

	dragElement(document.getElementById("inputPanel"));

	$.ajax({
		url:'SideMenu.phtml',
		type: 'GET',
		success: StandardLoad("menu-content-wrapper"),
		error: StandardError()
		});

//will be moved + callback function added
	$.ajax({
		url:'Input.phtml',
		type: 'GET',
		success: StandardLoad("input-content-wrapper"),
		error: StandardError()
		});

	updateRNAList();

});
/* End of Document ready */

function updateRNAList() {
	$.ajax({
	url:'RNAList.phtml',
	type: 'GET',
	success: StandardLoad("rnaList-content-wrapper"),
	error: StandardError()
	});
}

function startAnalysis(){
	// Si un arbre est dejs present
	if($("svg").length > 0) {
		if(confirm('Are you sure you want to overwrite the current tree with this new data?')) {
			console.log("yes");
			$("svg").remove();
			drawTree();
		}
		else {
			console.log("no");
			return;
		}
	}
	else {
		//Dessine l'arbre
		drawTree();
	}
}

function drawTree() {
	var analysisType = $("#analType").find(":selected").text();	
	var motifPercentString = $("#analThresh").find(":selected").text();

	var motifPercent = parseInt(motifPercentString);

	if(analysisType.localeCompare("Global Analysis")){ //If dropdown = Global Analysis

		$.ajax({
			url:'../php/callPython.php',
			type: 'POST',
			data: {"motifPercent": motifPercent},
	        success: function(id) {
            drawGlobalTree(id);
        	},
			error: StandardError()
		});
	}
	else{
		console.log("Erreur type d'analyse");
		return; // Log Erreur ou message interface disant de choisir une analyse ou des seuqences
	}
}

