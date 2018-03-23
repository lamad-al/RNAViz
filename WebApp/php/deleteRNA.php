<?php

	require_once('RNA.class.php');
	session_start();
	if(isset($_SESSION['rnaList']) && isset($_POST['idsToDelete'])) {
		$rnaList = $_SESSION['rnaList'];
		$idsToDelete = $_POST['idsToDelete'];
		echo "Les deux listes";
		var_dump($idsToDelete);

		$newRNAList = array();


		foreach ($rnaList as $key => $RNA) {
			if(!in_array($RNA->id, $idsToDelete)) {
				$newRNAList[] = new RNA($RNA->id,$RNA->header,$RNA->sequence,$RNA->structure);
			}
		}

		$_SESSION['rnaList'] = $newRNAList;
	}
?>