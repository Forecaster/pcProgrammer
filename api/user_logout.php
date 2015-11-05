<?
if (isset($_POST['session_id']))
{
  session_id($_POST['session_id']);
  session_start();
  session_destroy();
}