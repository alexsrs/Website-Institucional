<?php

	include('classes/Mail.class.php');
	$m = (new Mail($_POST))->sendMail();

?>
