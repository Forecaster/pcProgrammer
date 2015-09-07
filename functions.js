//<editor-fold desc="Menu Functions">
function enableOverlay()
{
  document.getElementById("overlay").style.visibility = "visible";
}

function disableOverlay()
{
  document.getElementById("overlay").style.visibility = "collapse";
}

function showMenu(id, title)
{
  var target = document.getElementById(id);
  var titletarget = document.getElementById(id + "Title");

  if (typeof title != "undefined")
    titletarget.innerHTML = title;

  target.style.left = "50%";
}

function hideMenu(id)
{
  var target = document.getElementById(id);
  target.style.left = "-1000px";
}

function menuOpen(id, title)
{
  menuClose();
  currentMenu = id;
  enableOverlay();
  showMenu(id, title);
}

function menuClose()
{
  if (currentMenu != null)
  {
    menuHistory.push(currentMenu);
    hideMenu(currentMenu);
    currentMenu = null;
  }
}

function menuExit()
{
  if (currentMenu != null)
  {
    menuHistory = [];
    hideMenu(currentMenu);
    currentMenu = null;
    disableOverlay();
  }
}

function menuBack()
{
  if (currentMenu != null)
  {
    hideMenu(currentMenu);
    if (menuHistory.length > 0)
    {
      var prevMenu = menuHistory.pop();
      currentMenu = prevMenu;
      showMenu(prevMenu);
    }
    else
      disableOverlay();
  }
}

/**
 * @param widgetId {Number}
 * @param center {Array}
 * @param left {Array}
 * @param right {Array}
 */
function enableWidgetConfigModules(widgetId, center, left, right)
{
  var i;
  widgetConfigModuleContainer.center.innerHTML = "";
  widgetConfigModuleContainer.left.innerHTML = "";
  widgetConfigModuleContainer.right.innerHTML = "";

  if (typeof center != "undefined" && center.length > 0)
  {
    console.log(center);
    for (i = 0; i < center.length; i++)
    {
      widgetConfigModuleContainer.center.appendChild(modules.getModule(center[i]));
    }
    modules.updateConfigFields(center, widgetId);
  }

  if (typeof left != "undefined" && left.length > 0)
  {
    console.log(left);
    for (i = 0; i < left.length; i++)
    {
      widgetConfigModuleContainer.left.appendChild(modules.getModule(left[i]));
    }
    modules.updateConfigFields(left, widgetId);
  }

  if (typeof right != "undefined" && right.length > 0)
  {
    console.log(right);
    for (i = 0; i < right.length; i++)
    {
      widgetConfigModuleContainer.right.appendChild(modules.getModule(right[i]));
    }
    modules.updateConfigFields(right, widgetId);
  }
}
//</editor-fold>

//<editor-fold desc="Context Menu Functions">
function contextMenuShow(e)
{
  var element = document.getElementById("contextMenu");

  element.style.top = e.clientY + "px";
  element.style.left = e.clientX + "px";
}

function contextMenuHide()
{
  var element = document.getElementById("contextMenu");

  element.style.top = "-1000px";
  element.style.left = "-1000px";
}
//</editor-fold>

//<editor-fold desc="Message Functions">
function addMessage(message)
{
  var time = new Date().getTime();
  var container = document.getElementById("messageBox");
  var div = document.createElement("div");

  div.className = "message";
  div.innerHTML = message;
  div.setAttribute("data-expires", time + messageTimeout);
  container.appendChild(div);
}

function killMessages()
{
  var target = document.getElementById("messageBox");

  for (var i = 0; i < target.children.length; i++)
  {
    var value = target.children[i];
    var time = new Date().getTime();
    if (value.getAttribute("data-expires") < time)
      target.removeChild(value);
  }
}

//</editor-fold>

function applicationReset()
{
  lastStartFocused = 0;
  lastWidgetFocused = 0;
  centerWidgetContainer();
}

/**
 *
 * @param url {String}
 */
function loadProgram(url)
{
  $.post("get.program.php", {url: url})
      .done(function (payload)
      {
        payload = payload.split(";");
        var test = payload[0];
        var content = payload[1];
        var successes = 0;
        var failures = 0;

        if (test == "true")
        {
          widgetContainer.innerHTML = "";
          Program.json = content;

          Program.widgets = JSON.parse(Program.json).widgets;

          var widgets = Program.widgets.value;

          for (var i = 0; i < widgets.length; i++)
          {
            var object = widgets[i];

            var altTexture = false;
            if (object["multiplyDivide"])
              altTexture = object["multiplyDivide"].value;

            var result = createWidget(object.name.value, i, altTexture, object.x.value, object.y.value, defaultSpriteScale);

            if (result)
              successes++;
            else
            {
              failures++;
              console.warn("Failed to create piece \"" + object.name.value + "\"");
            }
          }
          if (failures > 0)
          {
            addMessage("The program was loaded! Failed to load " + failures + " pieces!");
          }
          else
          {
            addMessage("The program was loaded!");
            applicationReset();
          }

          console.log(Program.widgets);
        }
        else
        {
          console.warn(content);
          addMessage("An error occurred!");
        }
      })
      .fail(function (payload)
      {
        console.warn("An error prevented the request from being sent (" + payload.status + ")");
        addMessage("An error prevented the request from being sent (" + payload.status + ")");
      });
}

/**
 *
 * @param name {String}
 * @param id {Number}
 * @param altTexture {Boolean}
 * @param x {Number}
 * @param y {Number}
 * @param defaultSpriteScale {Number}
 * @returns {boolean}
 */
function createWidget(name, id, altTexture, x, y, defaultSpriteScale)
{
  var container = document.getElementById("widgetContainer");
  var div = document.createElement("div");

  var sprite = widgets.getSprite(name, altTexture);
  if (!sprite)
    return false;

  var size = widgets.getSize(name);
  if (!size)
    return false;

  div.className = "programWidget";
  div.style.backgroundImage = "url('" + sprite + "')";
  div.style.top = y + "px";
  div.style.left = x + "px";
  div.style.height = size.height * defaultSpriteScale + "px";
  div.style.width = size.width * defaultSpriteScale + "px";
  div.id = "widget_" + id;
  div.onmouseover = enableWidgetTooltip;
  div.onmouseout = disableWidgetTooltip;
  //div.onmouseup = widgetConfigMenu;

  div.setAttribute("data-widget-name", name);
  div.setAttribute("data-base-x", x);
  div.setAttribute("data-base-y", y);
  div.setAttribute("data-base-height", (size.height * defaultSpriteScale).toString());
  div.setAttribute("data-base-width", (size.width * defaultSpriteScale).toString());

  container.appendChild(div);
  return true;
}

//<editor-fold desc="Zoom functions">
/**
 *
 * @param scale {Number}
 */
function setWidgetScale(scale)
{
  var widgets = document.getElementsByClassName("programWidget");

  for (var i = 0; i < widgets.length; i++)
  {
    var object = widgets[i];

    var x = parseInt(object.getAttribute("data-base-x"));
    var y = parseInt(object.getAttribute("data-base-y"));
    var height = parseInt(object.getAttribute("data-base-height"));
    var width = parseInt(object.getAttribute("data-base-width"));

    var new_height = height * scale;
    var new_width = width * scale;

    var new_x = x * scale;
    var new_y = y * scale;

    object.style.left = new_x + "px";
    object.style.top = new_y + "px";
    object.style.height = new_height + "px";
    object.style.width = new_width + "px";
  }
}

function increaseScale()
{
  var newScale = currentScale + scaleStep;

  if (newScale <= maxScale)
  {
    setWidgetScale(newScale);
    currentScale = newScale;
  }
}

function decreaseScale()
{
  var newScale = currentScale - scaleStep;

  if (newScale >= minScale)
  {
    setWidgetScale(newScale);
    currentScale = newScale;
  }
}

//</editor-fold>

/**
 *
 * @param type {Number}
 * @returns {String|boolean}
 */
function convertDataType(type)
{
  switch (type)
  {
    case 1  :
      return "number";
    case 2  :
      return "number";
    case 3  :
      return "number";
    case 4  :
      return "number";
    case 5  :
      return "number";
    case 6  :
      return "number";
    case 7  :
      return "object";
    case 8  :
      return "string";
    case 9  :
      return "object";
    case 10 :
      return false;
    case 11 :
      return false;
  }
}

function updateDebugInfo(text)
{
  var element = document.getElementById("debugInfoBox");

  element.innerHTML = text;
}

function centerWidgetContainer()
{
  widgetContainer.style.top = window.innerHeight * .5 + "px";
  widgetContainer.style.left = window.innerWidth * .5 + "px";
}

function getWindowCenter()
{
  return {height: window.innerHeight * .5, width: window.innerWidth * .5};
}

function enableWidgetTooltip(e)
{
  var name = e.target.getAttribute("data-widget-name");
  elements[1].children[0].innerHTML = widgets.getName(name);
  var tooltip = widgets.getTooltip(parseInt(e.target.id.substring(7)));

  if (typeof tooltip == "string")
    elements[1].children[1].innerHTML = tooltip.nl2br();
  else
    elements[1].children[1].innerHTML = "";

  tooltipEnabled = true;
}

function disableWidgetTooltip()
{
  tooltipEnabled = false;
  elements[1].style.top = "-1000px";
  elements[1].style.left = "-1000px";
}

function focusOnWidgetPos(widgetId)
{
  var newX;
  var newY;
  var widget = document.getElementById("widget_" + widgetId);
  var thisWidget = Program.widgets.value[widgetId];

  var screenCenterX = getWindowCenter().width;
  var screenCenterY = getWindowCenter().height;

  var widgetX = parseInt(widget.style.left);
  var widgetY = parseInt(widget.style.top);

  var widgetSize = widgets.getSize(thisWidget.name.value);

  console.log(widgetSize);
  if (typeof widgetSize != "undefined" && widgetSize != false)
  {
    newX = screenCenterX + (widgetX * -1) - (widgetSize.width * (currentScale * defaultSpriteScale * 0.5));
    newY = screenCenterY + (widgetY * -1) - (widgetSize.height * (currentScale * defaultSpriteScale * 0.5));
  }
  else
  {
    newX = screenCenterX + (widgetX * -1);
    newY = screenCenterY + (widgetY * -1);
  }

  widgetContainer.style.top = newY + "px";
  widgetContainer.style.left = newX + "px";
}

function focusFirstStart()
{
  var widgets = Program.widgets.value;

  for (var i = 0; i < widgets.length; i++)
  {
    if (widgets[i].name.value == "start")
    {
      lastWidgetFocused = i;
      focusOnWidgetPos(i);
      highlightFocus();
      return true;
    }
  }
  addMessage("No start piece found.");
  return false;
}

function focusNextStart()
{
  var widgets = Program.widgets.value;

  for (var i = lastStartFocused + 1; i < widgets.length; i++)
  {
    if (widgets[i].name.value == "start")
    {
      lastWidgetFocused = i;
      focusOnWidgetPos(i);
      highlightFocus();
      return true;
    }
  }
  lastWidgetFocused = 0;
  focusFirstStart();
}

function focusFirstLabel()
{
  var widgets = Program.widgets.value;

  for (var i = 0; i < widgets.length; i++)
  {
    if (widgets[i].name.value == "label")
    {
      lastWidgetFocused = i;
      focusOnWidgetPos(i);
      highlightFocus();
      return true;
    }
  }
  addMessage("No label piece found.");
  return false;
}

function focusNextLabel()
{
  var widgets = Program.widgets.value;

  for (var i = lastWidgetFocused + 1; i < widgets.length; i++)
  {
    if (widgets[i].name.value == "label")
    {
      lastWidgetFocused = i;
      focusOnWidgetPos(i);
      highlightFocus();
      return true;
    }
  }
  lastWidgetFocused = 0;
  focusFirstLabel();
}

function focusFirstWidget()
{
  var widgets = Program.widgets.value;

  lastWidgetFocused = 0;
  focusOnWidgetPos(lastWidgetFocused);
  highlightFocus();
  return true;
}

function focusNextWidget()
{
  var widgets = Program.widgets.value;

  var i = lastWidgetFocused + 1;
  if (i < widgets.length)
  {
    lastWidgetFocused = i;
    focusOnWidgetPos(i);
    highlightFocus();
    return true;
  }
  focusFirstWidget();
}

function highlightFocus()
{
  var element = document.getElementById("focusIndicator");

  var tmp = element.style.transitionDuration;
  element.style.visibility = "visible";
  element.style.transitionDuration = "0s";
  element.style.backgroundColor = "red";

  setTimeout(function (element) {element.style.transitionDuration = null; element.style.backgroundColor = "transparent"; element.style.visibility = "collapse"}, 1000, element);
}