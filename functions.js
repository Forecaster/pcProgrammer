//<editor-fold desc="Menu Functions">
function showMenu(id)
{
  var target = document.getElementById(id);
  target.style.left = "50%";
}

function hideMenu(id)
{
  var target = document.getElementById(id);
  target.style.left = "-1000px";
}

function menuOpen(id)
{
  if (currentMenu != null)
  {
    hideMenu(currentMenu);
    //TODO change history system to add menus when closed instead of when opened
  }

  menuHistory.push(id);
  currentMenu = id;
  showMenu(id);
}

function menuClose()
{
  if (currentMenu != null)
  {
    hideMenu(currentMenu);
    currentMenu = null;
    menuHistory = [];
  }
}

function menuBack()
{
  if (currentMenu != null)
  {
    hideMenu(currentMenu);
    menuHistory.pop();
    if (menuHistory.length > 0)
    {
      var prevMenu = menuHistory.lastChild;
      currentMenu = prevMenu;
      showMenu(prevMenu);
    }
  }
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
          Program.json = content;

          Program.widgets = JSON.parse(Program.json).widgets;

          var widgets = Program.widgets.value;

          for (var i = 0; i < widgets.length; i++)
          {
            var object = widgets[i];

            var altTexture = false;
            if (object["multiplyDivide"])
              altTexture = object["multiplyDivide"].value;

            var result = createWidget(object.name.value, altTexture, object.x.value, object.y.value, defaultSpriteScale);

            if (result)
              successes++;
            else
            {
              failures++;
              console.warn("Failed to create piece \"" + object.name.value + "\"");
            }
          }
          if (failures > 0)
            addMessage("The program was loaded! Failed to load " + failures + " pieces!");
          else
            addMessage("The program was loaded!");

          centerWidgetContainer();
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
 * @param altTexture {Boolean}
 * @param x {Number}
 * @param y {Number}
 * @param defaultSpriteScale {Number}
 * @returns {boolean}
 */
function createWidget(name, altTexture, x, y, defaultSpriteScale)
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
  div.id = "widget_" + widgetList.length;
  div.onmouseover = enableWidgetTooltip;
  div.onmouseout  = disableWidgetTooltip;

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
    case 1  : return "number";
    case 2  : return "number";
    case 3  : return "number";
    case 4  : return "number";
    case 5  : return "number";
    case 6  : return "number";
    case 7  : return "object";
    case 8  : return "string";
    case 9  : return "object";
    case 10 : return false;
    case 11 : return false;
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

function enableWidgetTooltip(e)
{
  var name = e.target.getAttribute("data-widget-name");
  elements[1].children[0].innerHTML = widgets.getName(name);
  elements[1].children[1].innerHTML = "This is a tooltip!";

  tooltipEnabled = true;
  updateDebugInfo("Tooltip: true");
}

function disableWidgetTooltip()
{
  tooltipEnabled = false;
  elements[1].style.top = "-1000px";
  elements[1].style.left = "-1000px";
  updateDebugInfo("Tooltip: false");
}