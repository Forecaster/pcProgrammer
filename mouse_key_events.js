var widgetContainerStartX = 0;
var widgetContainerStartY = 0;
var startX = 0;
var startY = 0;
var offsetX = 0;
var offsetY = 0;
var dragElement = null;
var oldZIndex = 0;

var button0DownTime;
var button0DownPos;

var shift = 0;
var pan = false;

document.onmousedown = onMouseDown;
document.onmouseup = onMouseUp;

document.onkeydown = onKeyDown;
document.onkeyup = onKeyUp;

document.onmousemove = onMouseMove;
document.oncontextmenu = onContextMenu;

var mousewheelevt=(/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel"; //FF doesn't recognize mousewheel as of FF3.x

if (document.attachEvent) //if IE (and Opera depending on user setting)
  document.attachEvent("on"+mousewheelevt, onMouseWheel);
else if (document.addEventListener) //WC3 browsers
  document.addEventListener(mousewheelevt, onMouseWheel, false);

function extractNumber(value)
{
  var n = parseInt(value);
  
  if (n == null || isNaN(n))
    return 0;
  else
    return n;
}

function getPosition(element)
{
  var xPosition = 0;
  var yPosition = 0;

  xPosition += (element.offsetLeft - element.scrollLeft + window.pageXOffset + element.clientLeft);
  yPosition += (element.offsetTop - element.scrollTop + window.pageYOffset + element.clientTop);

  return { x: xPosition, y: yPosition };
}

function onContextMenu(e)
{
  var target = e.target;

  if (target == null)
    target = e.srcElement;
  if (target.className == "programWidget")
  {
    widgetConfigMenu(e);
    return false;
  }
  else if (target.tagName == "HTML")
  {
    contextMenuShow(e);
    return false;
  }
}

function onKeyDown(e)
{
  if (e.keyCode == 16)
    shift = 1;
  //else
  //  console.log(e.keyCode);
}

function onKeyUp(e)
{
  if (e.keyCode == 16)
    shift = 0;
  //else if (e.keyCode == 13) //Enter key

  //console.log("Released key: " + e.key)
  //console.log(e);
}

function onMouseDown(e)
{
  var target = e.target;

  if (target == null)
    target = e.srcElement;

  //console.log(e.button);
  
  if (e.button == 0)
  {
    if (target.tagName == "HTML")
    {
      pan = true;
      startX = e.clientX;
      startY = e.clientY;
      widgetContainerStartX = extractNumber(widgetContainer.style.left);
      widgetContainerStartY = extractNumber(widgetContainer.style.top);
    }
  }

}

function onMouseUp(e)
{
  var target = e.target;

  if (target == null)
    target = e.srcElement;

  if (target == null)
    target = e.srcElement;

  if (e.button == 0)
  {
    pan = false;
    if (target.tagName == "HTML")
      contextMenuHide();
  }
}

function onMouseWheel(e)
{
  var target = e.target;

  if (target == null)
    target = e.srcElement;

  var detail;

  if (e.detail)
    detail = e.detail;
  else if (e.wheelDelta)
    detail = e.wheelDelta;

  if (detail > 0)
    decreaseScale();
  else
    increaseScale();
  return false;
}

function onMouseMove(e)
{
  if (e == null)
    e = window.event;

  if (pan)
  {
    var changeX = e.clientX - startX;
    var changeY = e.clientY - startY;
    var left = (widgetContainerStartX + changeX) + "px";
    var top = (widgetContainerStartY + changeY) + "px";
    widgetContainer.style.left = left;
    widgetContainer.style.top = top;

    //updateDebugInfo("top: " + widgetContainer.style.top + ", left: " + widgetContainer.style.left + ", x: " + changeX + ", y: " + changeY);
  }

  if (tooltipEnabled == true)
  {
    elements[1].style.top = e.clientY + 10 + "px";
    elements[1].style.left = e.clientX + 10 + "px";
  }

  if (dragElement != null)
  {
    dragElement.style.left = (offsetX + e.clientX - startX) + "px";
    dragElement.style.top = (offsetY + e.clientY - startY) + "px";

    //debug.innerHTML = "X: " + (offsetX + e.clientX - startX) + ", Y:" + (offsetY + e.clientY - startY);
  }
  //else if (activeTooltip != null)
  //{
  //  activeTooltip.style.left = (e.clientX + 10) + "px";
  //  activeTooltip.style.top = (e.clientY) + "px";
  //}
}

function widgetConfigMenu(e)
{
  var target = e.target;

  if (target == null)
    target = e.srcElement;

  if (e.button == 2)
  {
    var pattern = /_([0-9]+)$/g;
    currentWidgetConfigId = pattern.exec(target.id)[1];
    var currentWidgetName = Program.widgets.value[currentWidgetConfigId].name.value;
    var currentWidgetData = widgets.widget[currentWidgetName];

    enableWidgetConfigModules(currentWidgetConfigId, currentWidgetData.confModules, currentWidgetData.confModulesLeft, currentWidgetData.confModulesRight);
    menuOpen("menuWidgetConfig", currentWidgetData.name);
  }
}