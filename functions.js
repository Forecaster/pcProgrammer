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
  var titleTarget = document.getElementById(id + "Title");

  if (typeof title != "undefined")
    titleTarget.innerHTML = title;

  var children = target.childNodes;

  for (var i = 0; i < children.length; i++)
  {
    if (children[i].tagName == "DIV")
    {
      var subChild = children[i].childNodes;
      for (var z = 0; z < subChild.length; z++)
      {
        if (subChild[z].tagName == "INPUT")
        {
          subChild[z].focus();
          z = subChild.length;
        }
      }
    }
    else if (children[i].tagName == "INPUT")
    {
      children[i].focus();
      i = children.length;
    }
  }

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

  var updates = 0;

  if (typeof center != "undefined" && center.length > 0)
  {
    //console.log(center);
    for (i = 0; i < center.length; i++)
    {
      widgetConfigModuleContainer.center.appendChild(modules.getModule(center[i]));
    }
    modules.updateConfigFields(center, widgetId);
    updates += 1;
  }

  if (typeof left != "undefined" && left.length > 0)
  {
    //console.log(left);
    for (i = 0; i < left.length; i++)
    {
      widgetConfigModuleContainer.left.appendChild(modules.getModule(left[i]));
    }
    modules.updateConfigFields(left, widgetId);
    updates += 1;
  }

  if (typeof right != "undefined" && right.length > 0)
  {
    //console.log(right);
    for (i = 0; i < right.length; i++)
    {
      widgetConfigModuleContainer.right.appendChild(modules.getModule(right[i]));
    }
    modules.updateConfigFields(right, widgetId);
    updates += 1;
  }

  return updates != 0;


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
  if (typeof url == "undefined" || url == "" || url == "<? echo $p;?>")
  {
    console.log("Url not set");
    return false;
  }

  $.post("get.program.php", {url: url})
      .done(function (payload)
      {
        payload = payload.split(";");
        var test = payload[0];
        var content = payload[1];

        if (test == "true")
        {
          parseProgramFromJson(content);
        }
        else
        {
          console.warn(content);
          console.log("Test returned " + test + " for url \"" + url + "\"");
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
 * Attempts to parse a json string into a program object
 * @param program {String}
 */
function parseProgramFromJson(program)
{
  var successes = 0;
  var failures = 0;
  widgetContainer.innerHTML = "<svg id=\"lineContainer\"></svg>";
  Program.json = program;

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

  console.log("Program.widgets.value:");
  console.log(Program.widgets.value);
  updateWidgetPositionList();
  redrawWidgetConnections();
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
    redrawWidgetConnections();
  }
}

function decreaseScale()
{
  var newScale = currentScale - scaleStep;

  if (newScale >= minScale)
  {
    setWidgetScale(newScale);
    currentScale = newScale;
    redrawWidgetConnections();
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
  var displayName = widgets.getName(name);
  if (displayName == false)
    return false;

  elements[1].children[0].innerHTML = displayName;
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

function getWidgetCurrentSize(widgetId)
{
  var element = document.getElementById("widget_"+widgetId);

  return {width: parseInt(element.style.width), height: parseInt(element.style.height)};
}

function getWidgetPos(widgetId)
{
  var widgetArray = Program.widgets.value;
  var thisWidget = widgetArray[widgetId];

  return {x: thisWidget.x.value * currentScale, y: thisWidget.y.value * currentScale};
}

/**
 * @param widgetId {Number}
 * @param [widgetName] {String}
 * @returns {{x: Number, y: Number}}
 */
function getWidgetCenterPos(widgetId, widgetName)
{
  if (typeof widgetId != "number" || widgetId == null)
    throw new Error("First parameter widgetId must be a number");

  var widgetArray = Program.widgets.value;
  var thisWidget = widgetArray[widgetId];

  if (typeof widgetName == "undefined" || widgetName == null)
    widgetName = thisWidget.name.value;

  return {x: (getWidgetPos(widgetId).x + (getWidgetCurrentSize(widgetId).width * 0.5)), y: (getWidgetPos(widgetId).y + (getWidgetCurrentSize(widgetId).height * 0.5))};
}

/**
 *
 * @param x1 {Number}
 * @param y1 {Number}
 * @param x2 {Number}
 * @param y2 {Number}
 * @param [container] {Element}
 * @returns {boolean}
 */
function drawLine(x1, y1, x2, y2, container)
{
  if (typeof x1 == "undefined" || typeof y1 == "undefined" || typeof x2 == "undefined" || typeof y2 == "undefined")
    return false;
  if (typeof container == "undefined")
    container = document.getElementById("lineContainer");

  var line = "<line x1=\"{0}\" y1=\"{1}\" x2=\"{2}\" y2=\"{3}\" class=\"lineConnection\"></line>";

  container.innerHTML += line.insert(x1, y1, x2, y2);
  return true;
}

/**
 *
 * @param originWidgetId {Number}
 * @param targetWidgetIds {Number|Array}
 * @param [replace] {boolean}
 */
function addLinesToWidget(originWidgetId, targetWidgetIds, replace)
{
  if (typeof replace == "undefined")
    replace = false;

  if (typeof targetWidgetIds == "number")
    targetWidgetIds = [targetWidgetIds];

  var element = document.getElementById("widget_" + originWidgetId);
  var container = document.getElementById("lineContainer");
  var widgetArray = Program.widgets.value;

  if (replace)
    container.innerHTML = "";

  var lineStart = getWidgetCenterPos(originWidgetId);

  for (var i = 0; i < targetWidgetIds.length; i++)
  {
    var targetWidgetId = targetWidgetIds[i];
    var lineEnd = getWidgetCenterPos(targetWidgetId);

    //console.log("LineStart: x:" + lineStart.x + " y:" + lineStart.y + ", LineEnd: x:" + lineEnd.x + " y:" + lineEnd.y);

    drawLine(lineStart.x, lineStart.y, lineEnd.x, lineEnd.y, container);
  }
}

function clearLines()
{
  document.getElementById("lineContainer").innerHTML = "";
}

function updateWidgetPositionList()
{
  widgetPositionList = [];
  var widgetArray = Program.widgets.value;

  for (var i = 0; i < widgetArray.length; i++)
  {
    var widget = widgetArray[i];
    var x = widget.x.value;
    var y = widget.y.value;
    var id = i;

    if (typeof widgetPositionList[y] == "undefined")
      widgetPositionList[y] = [];

    widgetPositionList[y][x] = id;
  }
}

function redrawWidgetConnections()
{
  var widgetArray = Program.widgets.value;
  var parents = [];
  clearLines();

  for (var i = 0; i < widgetArray.length; i++)
  {
    var widget = widgetArray[i];
    if (widgets.widgetIsValidLineRoot(i) != false)
    {
      parents.push({arguments: widgets.getArguments(i), id: i});
    }
  }

  for (var c = 0; c < parents.length; c++)
  {
    var thisArguments = parents[c];

    var widgetType = widgets.widgetIsValidLineRoot(thisArguments.id);
    if (widgetType != false)
    {
      if (thisArguments.arguments.argumentsFound > 0)
      {
        if (widgetType == "label")
        {
          var argument = thisArguments.arguments.right.level1[0];
          var targetArguments = findTextWidgetByString(widgetArray[argument].string.value);
          for (var o = 0; o < targetArguments.length; o++)
          {
            var target = widgets.getParentOfArgument(targetArguments[o]);
            if (widgets.widgetIsValidLineTarget(target))
              if (target != false)
              {
                console.log("Draw line between " + thisArguments.id + " and " + target);
                addLinesToWidget(thisArguments.id, target);
              }
          }
        }
      }
    }
  }
}

/**
 * Attempts to locate a text piece by it's string value. Returns widget id on success or false on failure
 * @param string {String}
 * @returns {Array}
 */
function findTextWidgetByString(string)
{
  var widgetArray = Program.widgets.value;
  var widgets = [];

  for (var i = 0; i < widgetArray.length; i++)
  {
    var thisWidget = widgetArray[i];
    if (typeof thisWidget != "undefined" && thisWidget.name != "undefined" && thisWidget.name.value == "text")
    {
      if (typeof thisWidget.string != "undefined" && thisWidget.string.value == string)
        widgets.push(i);
    }
  }
  return widgets;
}

function focusOnTextWidgetWithContent(string)
{
  if (typeof string != "undefined" && string != "")
  {
    var widgets = findTextWidgetByString(string);

    if (widgets.length > 0)
    {
      focusOnWidgetPos(widgets[0]);
      highlightFocus();
    }
    else
      addMessage("No matching widgets found.");
  }
}