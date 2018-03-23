function switchNav() {
	/* Hamburger menu on and off
	var menu = $("#menu");

	if(menu.width() == 0)
	{
		menu.width("343px");
	}
	else
	{
		menu.width(0);
	}
	*/
}

function switchListSelection(id) {
	var listItem = $("#arnlist" + id);
	var classs = listItem[0].classList;

	if(jQuery.inArray("rnaSelected",classs) == -1)
	{
		listItem.addClass("rnaSelected");
	}
	else
	{
		listItem.removeClass("rnaSelected");
	}
}

function getSelectedList() {
	var selectedList = $(".rnaSelected");

	console.log(selectedList);

	return selectedList;
}

function deleteSequence(){
	var attributes = ($(".rnaSelected").map(function(){return $(this).attr("id");}).get()).toString();

	var pattern = /\d+/g; 
	var ids = attributes.match(pattern);

	$.ajax({
		url:'../php/deleteRNA.php',
		type: 'POST',
		data: {
			'idsToDelete': ids
		},
		success: StandardPhpCallback(updateRNAList),
		error: StandardError()
	});
}

function clearList(){
	$.ajax({
		url:'../php/clearList.php',
		type: 'POST',
		data: {},
		success: StandardPhpCallback(updateRNAList),
		error: StandardError()
	});
}

function selectAll() {
    $('#rnaList li').each(function(index, el){
        if(!$(this).hasClass('rnaSelected')){
            $(this).addClass('rnaSelected');
        }
    }); 
}

function clearSelection(){
    $('#rnaList li').each(function(index, el){
        if($(this).hasClass('rnaSelected')){
            $(this).removeClass('rnaSelected');
        }
    }); 
}

$(document).keyup(function(e) {
     if (e.keyCode == 27) { // escape key maps to keycode `27`
        var inputPanel = $("#inputPanel")

		if(inputPanel.is(":visible"))
		{
			inputPanel.hide();
		}
    }
});
/* Beginning of document ready */
/*
//Hamburger menu on and off
$( document ).ready(function() {
    $("#menuShowHide").on( "click", function() {
	 	if ($('#hamburgerImage').attr('src') == '../images/HamburgerClosed.png'){
			$('#hamburgerImage').attr('src', '../images/HamburgerOpen.png');
			$(".sidenav").css("border-bottom", "3px solid black");
			$(".sidenav").css("border-right", "3px solid black");
		} 
		else {
			$('#hamburgerImage').attr('src', '../images/HamburgerClosed.png');
			$(".sidenav").css("border", "none");
		}
	});

});
*/
/* End of Document ready*/