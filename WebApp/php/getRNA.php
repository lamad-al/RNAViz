<?php
	require_once('RNA.class.php');

	session_start();
	if(isset($_SESSION['rnaList']))
	{
		$rnaList = $_SESSION['rnaList'];
	}
	else
	{
		$rnaList = array();
	}

	echo json_encode($rnaList);
?>