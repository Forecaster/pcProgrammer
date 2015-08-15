<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>PneumaticCraft Program Viewer</title>
  <link rel="stylesheet" href="styles.css"/>
  <script src="class.Widgets.js"></script>
  <script src="functions.js"></script>
  <script src="functions_buttons.js"></script>
  <script src="mouse_key_events.js"></script>
  <script src="prototypes.js"></script>

  <script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
</head>

<?
require_once "Program.php";
require_once "krumo/class.krumo.php";

$p = "";
if ($_GET['load'])
  $p = $_GET['load'];
?>

<body style="overflow: hidden;">
<div id="messageBox" class="messageBox"></div>
<div id="debugInfoBox" class="debugInfoBox"></div>
<div id="widgetTooltip" class="widgetTooltip" style="top: -1000px; left: -1000px;">
  <div id="widgetTooltipTitle"></div>
  <div id="widgetTooltipText"></div>
</div>
<div>
  <div id="" class="widgetSettingsDialogue">

  </div>
</div>
<div id="menuLoadProgram" class="menu" style="margin-top: -60px; margin-left: -205px; height: 120px; width: 400px;">
  <div class="buttonBack" title="Back: to previous menu" onclick="menuBack()"></div>
  <div class="menuTitle">Load Program</div>
  <div>
    <input type="text" name="programUrl" id="programUrl" placeholder="Enter url to pastebin here" style="width: 100%; margin-bottom: 10px;"/>
  </div>
  <div class="menuButton" style="margin-left: 36%;" onclick="loadUrl();">Load</div>
  <div class="menuButton" onclick="menuClose()">Cancel</div>
</div>
<div id="menuAbout" class="menu" style="margin-top: -125px; margin-left: -205px; height: 250px; width: 400px;">
  <div class="buttonBack" title="Back: to previous menu" onclick="menuBack()"></div>
  <div class="menuTitle">About</div>
  <div>This is an application made by <a href="https://www.youtube.com/user/forecaster71">Forecaster</a> for the Minecraft mod <a href="http://minecraft.curseforge.com/mc-mods/224125-pneumaticcraft">PneumaticCraft</a> by <a href="http://www.twitter.com/MineMaarten">MineMaarten</a>.</div>
  <div class="paragraph">The application uses assets from the mod with permission from the author.</div>
  <div class="paragraph">The application allows you to view programs made with the mod (for drones and Programmable Controllers) outside of the game. Programs can be exported to pastebin from within the game, and imported into the application from pastebin.</div>
</div>
<div id="menuGit" class="menu" style="margin-top: -75px; margin-left: -205px; height: 150px; width: 400px;">
  <div class="buttonBack" title="Back: to previous menu" onclick="menuBack()"></div>
  <div class="menuTitle">Bug Reports</div>
  <div>If you have found a bug or have a feature request feel free to submit a ticket on the <a href="https://github.com/Forecaster/pcProgrammer/issues">Github issue tracker</a></div>
  <div class="paragraph">Please describe your issue/suggestion with as much detail as possible!</div>
</div>
<div class="mainMenu">
  <div style="display: inline; margin-right: 15px;">PneumaticCraft Program Viewer</div>
  <div class="mainMenuItem" onclick="menuOpen('menuLoadProgram')">Load Program</div>
  <div class="mainMenuItem" onclick="menuOpen('menuAbout')">About</div>
  <div class="mainMenuItem" onclick="menuOpen('menuGit')">Bug Reports</div>
</div>
<div class="zoomBar" id="zoomBar">

</div>
<div id="widgetContainer" class="widgetContainer"></div>
</body>
</html>

<script language="JavaScript">
  //Settings
  //timeout in seconds * 1000 to make it milliseconds
  var messageTimeout = 150 * 1000;

  var defaultSpriteScale = 0.25;
  var currentScale = 1;
  var scaleStep = 1;
  var maxScale = 4;
  var minScale = 1;

  var tooltipEnabled = false;

  var widgets = new Widgets();
  var elements = [document.getElementById("programUrl"), document.getElementById("widgetTooltip")];
  var widgetContainer = document.getElementById("widgetContainer");

  var widgetList = [];
  var menuHistory = [];
  var currentMenu = null;

  var Program = {};

  var urlCode = "<? echo $p;?>";

  centerWidgetContainer();

  setInterval(killMessages, 2000);

  if (urlCode != "")
    loadProgram(urlCode);
  else
    menuOpen("menuLoadProgram");
</script>