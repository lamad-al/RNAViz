<?php	
	require_once('RNA.class.php');
	ob_start();
	unlink($id.'.txt');
	session_start();
	$motifPercent = $_POST['motifPercent'];
	if(isset($_SESSION['rnaList']))
	{
		$rnaList = $_SESSION['rnaList'];
	}
	else
	{
		$rnaList = array();
	}

	$id = session_id();
	$fp = fopen("../python/src/results_{$id}.json", 'w');
	fwrite($fp, json_encode($rnaList));
	fclose($fp);
	
	$result = system("python ../python/src/main.py ".$id. " " .$motifPercent, $retval);
	//echo "return value: ",$retval;
	unlink("../python/results_{$id}.json");

	$my_file = $id.'.txt';
	$handle = fopen($my_file, 'w') or die('Cannot open file:  '.$my_file);
	$data = $result;

	fwrite($handle, $data);
	fclose($handle);
	ob_clean();
	echo $id;
?>