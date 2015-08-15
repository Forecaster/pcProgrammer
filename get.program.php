<?
require_once "Program.php";
require_once "inc_functions.php";
require_once "krumo/class.krumo.php";

global $programs;

if (isset($_GET['url']))
{
  $_POST['url'] = $_GET['url'];
  $debug = 1;
}
else
  $debug = 0;

if (isset($_POST['url']))
{
  $url = $_POST['url'];

  $dis_program = new Program($url);

  if (!$dis_program->extract_code())
    die("false;extractFail");
  if (!$dis_program->import())
    die("false;importFail");

  echo "true;".$dis_program->getJson();
  array_push($programs, $dis_program);
}
else
  echo "false;noData";