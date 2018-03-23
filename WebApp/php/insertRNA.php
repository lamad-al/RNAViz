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
	if(isset($_SESSION['autoId']))
	{
		$autoId = $_SESSION['autoId'];
	}
	else
	{
		$autoId = 1;
	}

	//Separation des elements
	$input = $_POST["input"];
	$rnaStringList = array_filter(explode(">",$input));
	foreach ($rnaStringList as $rnaString) 
	{
		$elements = array_filter(explode("\n", $rnaString,2));
		$header = $elements[0];
		$others = $elements[1];

		$others = preg_replace('/\s+/', '', $others);
		$size = strlen($others);

		$sequence = substr($others, 0, $size / 2);
		$structure = substr($others, $size / 2);
		$rnaList[] = new RNA($autoId,$header,$sequence,$structure);

		$autoId = $autoId + 1;
	}

	$_SESSION['rnaList'] = $rnaList;
	$_SESSION['autoId'] = $autoId;

	var_dump($rnaList);
?>