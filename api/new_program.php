<?
require_once "krumo/class.krumo.php";
require_once "inc_common_functions.php";
require_once "../inc_connect.php";
require_once "../inc_constants.php";

session_id($_POST['token']);
session_start();

echo "Your username is ".$_SESSION['username']."!";