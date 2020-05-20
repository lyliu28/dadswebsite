<?php
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['fname']) && empty($_POST['email'])) die();

if ($_POST)
	{

	// set response code - 200 OK

	http_response_code(200);
	$subject = $_POST['fname'];
	$to = "aidyl889@gmail.com";
	$from = $_POST['email'];

	// data

	$msg = $_POST['number'] . $_POST['message'];

	// Headers removed
	$headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
	$headers.= "From: <" . $from . ">";
	$sent = mail($to, $subject, $msg);


	if ($sent) {

?><html>
<head>
<title>Thank You</title>
</head>
<body>
<h1>Thank You</h1>
<p>Thank you for your feedback.</p>
</body>
</html>
<?php

} else {

?><html>
<head>
<title>Something went wrong</title>
</head>
<body>
<h1>Something went wrong</h1>
<p>We could not send your feedback. Please try again.</p>
</body>
</html>
<?php
}


	// echo json_encode( $_POST );

	// echojson_encode(array(
	// 	"sent" => true
	// ));
	// }
  // else
	// {
	//
	// // tell the user about error
	//
	// echojson_encode(["sent" => false, "message" => "Something went wrong"]);
	// }



?>
