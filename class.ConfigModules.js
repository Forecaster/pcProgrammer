function ConfigModules()
{
  this.modules = {}; //input types: 0: none, 1: checkbox, 2: radio, 3: text
  this.modules["area"]                = {elementId: "menuModule:area",                fields: [{name: "coord1Variable", type: 8}, {name: "coord2Variable", type: 8}, {name: "x1", type: 3}, {name: "y1", type: 3}, {name: "z1", type: 3}, {name: "x2", type: 3}, {name: "y2", type: 3}, {name: "z2", type: 3}]};
  this.modules["areaType"]            = {elementId: "menuModule:areaType",            fields: [{name: "type", type: 3}]};
  this.modules["extraParameter"]      = {elementId: "menuModule:extraParameter",      fields: [{name: "typeInfo", type: 3}]};
  this.modules["order"]               = {elementId: "menuModule:order",               fields: [{name: "order", type: 3}]};
  this.modules["direction"]           = {elementId: "menuModule:direction",           fields: [{name: "dir", type: 3}]};
  this.modules["sneaking"]            = {elementId: "menuModule:sneaking",            fields: [{name: "sneaking", type: 1}]};
  this.modules["dropMethod"]          = {elementId: "menuModule:dropMethod",          fields: [{name: "dropStraight", type: 1}]};
  this.modules["sides"]               = {elementId: "menuModule:sides",               fields: [{name: "DOWN", type: 1}, {name: "EAST", type: 1}, {name: "NORTH", type: 1}, {name: "SOUTH", type: 1}, {name: "UP", type: 1}, {name: "WEST", type: 1}]};
  this.modules["doneWhen"]            = {elementId: "menuModule:doneWhen",            fields: [{name: "doneWhenDeparting", type: 1}]};
  this.modules["text"]                = {elementId: "menuModule:text",                fields: [{name: "string", type: 8}]};
  this.modules["useCount"]            = {elementId: "menuModule:useCount",            fields: [{name: "useCount", type: 1}, {name: "count", type: 3}]};
  this.modules["limitInteractions"]   = {elementId: "menuModule:limitInteractions",   fields: [{name: "useMaxActions", type: 1}, {name: "maxActions", type: 3}]};
  this.modules["anyAllBlocks"]        = {elementId: "menuModule:anyAllBlocks",        fields: [{name: "isAndFunction", type: 1}]};
  this.modules["equalsGreater"]       = {elementId: "menuModule:equalsGreater",       fields: [{name: "operator", type: 1}]};
  this.modules["equalsGreaterParam"]  = {elementId: "menuModule:equalsGreaterParam",  fields: [{name: "operator", type: 1}, {name: "count", type: 3}]};
  this.modules["XYZ"]                 = {elementId: "menuModule:XYZ",                 fields: [{name: "checkX", type: 1}, {name: "checkY", type: 1}, {name: "checkZ", type: 1}]};
  this.modules["operator"]            = {elementId: "menuModule:operator",            fields: [{name: "multiplyDivide", type: 1}]};
  this.modules["variableName"]        = {elementId: "menuModule:variableName",        fields: [{name: "variable", type: 8}]};
  this.modules["constantVariable"]    = {elementId: "menuModule:constantVariable",    fields: [{name: "useVariable", type: 1}]};
  this.modules["XYZinput"]            = {elementId: "menuModule:XYZinput",            fields: [{name: "posX", type: 3}, {name: "posY", type: 3}, {name: "posZ", type: 3}]};
}

/**
 * @param module {String}
 * @returns {String}
 */
ConfigModules.prototype.getElementId = function(module)
{
  return this.modules[module].elementId;
};

/**
 * @param module {String}
 * @returns {String}
 */
ConfigModules.prototype.getFields = function(module)
{
  return this.modules[module].fields;
};

/**
 * @param modules {Array}
 * @param widgetId {Number}
 */
ConfigModules.prototype.updateConfigFields = function(modules, widgetId)
{
  var thisWidget = Program.widgets.value[widgetId];
  var elements;
  var i;
  for (var moduleIndex = 0; moduleIndex < modules.length; moduleIndex++)
  {
    console.log("Attempting update for " + modules[moduleIndex]);
    if (modules[moduleIndex] == "area")
    {
      if (typeof thisWidget["coord1Variable"].value == "string" && thisWidget["coord1Variable"].value != "")
        document.getElementById("input_point_0").value = thisWidget["coord1Variable"].value;
      else if (typeof thisWidget["x1"].value != "undefined" && typeof thisWidget["y1"].value != "undefined" && typeof thisWidget["z1"].value != "undefined")
        document.getElementById("input_point_0").value = thisWidget["x1"].value + ", " + thisWidget["y1"].value + ", " + thisWidget["z1"].value;
      else
        document.getElementById("input_point_0").value = "Error";

      if (typeof thisWidget["coord1Variable"].value == "string" && thisWidget["coord2Variable"].value != "")
        document.getElementById("input_point_1").value = thisWidget["coord2Variable"].value;
      else if (typeof thisWidget["x2"].value != "undefined" && typeof thisWidget["y2"].value != "undefined" && typeof thisWidget["z2"].value != "undefined")
        document.getElementById("input_point_1").value = thisWidget["x2"].value + ", " + thisWidget["y2"].value + ", " + thisWidget["z2"].value;
      else
        document.getElementById("input_point_1").value = "Error";
    }
    else if (modules[moduleIndex] == "areaType")
    {
      elements = document.getElementsByClassName("input_areaType");
      
      for (i = 0; i < elements.length; i++)
      {
        if (i == thisWidget.type.value)
        {
          elements[i].checked = "1";
          i = 9999999999;
        }
      }
    }
    else if (modules[moduleIndex] == "extraParameter")
    {
      if (typeof thisWidget.typeInfo.value == "number")
        document.getElementById("input_extraParameter").value = thisWidget.typeInfo.value;
      else
        document.getElementById("input_extraParameter").value = "0";
    }
    else if (modules[moduleIndex] == "order")
    {
      elements = document.getElementsByClassName("input_order");

      for (i = 0; i < elements.length; i++)
      {
        if (i == thisWidget.order.value)
        {
          elements[i].checked = "1";
          i = 9999999999;
        }
      }
    }
    else if (modules[moduleIndex] == "direction")
    {
      elements = document.getElementsByClassName("input_direction");

      for (i = 0; i < elements.length; i++)
      {
        if (i == thisWidget.dir.value)
        {
          elements[i].checked = "1";
          i = 9999999999;
        }
      }
    }
    else if (modules[moduleIndex] == "sneaking")
    {
      if (typeof thisWidget.sneaking != "undefined" && thisWidget.sneaking.value == 1)
        document.getElementById("input_sneaking").setAttribute("checked", "1");
    }
    else if (modules[moduleIndex] == "dropMethod")
    {
      if (typeof thisWidget.dropStraight != "undefined" && thisWidget.dropStraight.value == 1)
        document.getElementById("input_dropMethod_1").setAttribute("checked", "1");
      else
        document.getElementById("input_dropMethod_0").setAttribute("checked", "1");
    }
    else if (modules[moduleIndex] == "sides")
    {
      if (typeof thisWidget.DOWN.value != "undefined" && thisWidget.DOWN.value == 1)
        document.getElementById("input_sides_0").setAttribute("checked", "1");
      if (typeof thisWidget.UP.value != "undefined" && thisWidget.UP.value == 1)
        document.getElementById("input_sides_1").setAttribute("checked", "1");
      if (typeof thisWidget.NORTH.value != "undefined" && thisWidget.NORTH.value == 1)
        document.getElementById("input_sides_2").setAttribute("checked", "1");
      if (typeof thisWidget.SOUTH.value != "undefined" && thisWidget.SOUTH.value == 1)
        document.getElementById("input_sides_3").setAttribute("checked", "1");
      if (typeof thisWidget.WEST.value != "undefined" && thisWidget.WEST.value == 1)
        document.getElementById("input_sides_4").setAttribute("checked", "1");
      if (typeof thisWidget.EAST.value != "undefined" && thisWidget.EAST.value == 1)
        document.getElementById("input_sides_5").setAttribute("checked", "1");
    }
    else if (modules[moduleIndex] == "doneWhen")
    {
      if (typeof thisWidget.doneWhenDeparting != "undefined" && thisWidget.doneWhenDeparting.value == 1)
        document.getElementById("input_doneWhen_1").setAttribute("checked", "1");
      else
        document.getElementById("input_doneWhen_0").setAttribute("checked", "1");
    }
    else if (modules[moduleIndex] == "doneWhen")
    {
      if (typeof thisWidget.text != "undefined" && thisWidget.text.value != "")
        document.getElementById("input_text").value = thisWidget.text.value;
      else
        document.getElementById("input_text").value = "";
    }
    else if (modules[moduleIndex] == "text")
    {
      if (typeof thisWidget.string != "undefined")
        document.getElementById("input_text").value = thisWidget.string.value;
      else
        document.getElementById("input_text").value = "";
    }
    else if (modules[moduleIndex] == "useCount")
    {
      if (typeof thisWidget.useCount != "undefined" && thisWidget.useCount.value == 1)
        document.getElementById("input_useCount_0").setAttribute("checked", "1");

      if (typeof thisWidget.count != "undefined")
        document.getElementById("input_useCount_1").value = thisWidget.count.value;
      else
        document.getElementById("input_useCount_1").value = "1";
    }
    else if (modules[moduleIndex] == "limitInteractions")
    {
      if (typeof thisWidget.useMaxActions != "undefined" && thisWidget.useMaxActions.value == 1)
        document.getElementById("input_limitInteractions_0").setAttribute("checked", "1");

      if (typeof thisWidget.maxActions != "undefined")
        document.getElementById("input_limitInteractions_1").value = thisWidget.maxActions.value;
      else
        document.getElementById("input_limitInteractions_1").value = "1";
    }
    else if (modules[moduleIndex] == "anyAllBlocks")
    {
      if (typeof thisWidget.isAndFunction != "undefined" && thisWidget.isAndFunction.value == 1)
        document.getElementById("input_anyAllBlocks_1").setAttribute("checked", "1");
      else
        document.getElementById("input_anyAllBlocks_0").setAttribute("checked", "1");
    }
    else if (modules[moduleIndex] == "equalsGreater")
    {
      if (typeof thisWidget.operator != "undefined" && thisWidget.operator.value == 1)
        document.getElementById("input_equalsGreater_1").setAttribute("checked", "1");
      else
        document.getElementById("input_equalsGreater_0").setAttribute("checked", "1");
    }
    else if (modules[moduleIndex] == "equalsGreaterParam")
    {
      if (typeof thisWidget.operator != "undefined" && thisWidget.operator.value == 1)
        document.getElementById("input_equalsGreaterParam_1").setAttribute("checked", "1");
      else
        document.getElementById("input_equalsGreaterParam_0").setAttribute("checked", "1");

      if (typeof thisWidget.count != "undefined")
        document.getElementById("input_equalsGreaterParam_2").value = thisWidget.count.value;
      else
        document.getElementById("input_equalsGreaterParam_2").value = "1";
    }
    else if (modules[moduleIndex] == "XYZ")
    {
      if (typeof thisWidget.checkX != "undefined" && thisWidget.checkX.value == 1)
        document.getElementById("input_XYZ_0").setAttribute("checked", "1");
      if (typeof thisWidget.checkY != "undefined" && thisWidget.checkY.value == 1)
        document.getElementById("input_XYZ_1").setAttribute("checked", "1");
      if (typeof thisWidget.checkZ != "undefined" && thisWidget.checkZ.value == 1)
        document.getElementById("input_XYZ_2").setAttribute("checked", "1");
    }
    else if (modules[moduleIndex] == "operator")
    {
      if (typeof thisWidget.multiplyDivide != "undefined" && thisWidget.multiplyDivide.value == 1)
        document.getElementById("input_operator_1").setAttribute("checked", "1");
      else
        document.getElementById("input_operator_0").setAttribute("checked", "1");
    }
    else if (modules[moduleIndex] == "variableName")
    {
      if (typeof thisWidget.variable != "undefined")
        document.getElementById("input_variableName").value = thisWidget.variable.value;
      else
        document.getElementById("input_variableName").value = "";
    }
    else if (modules[moduleIndex] == "constantVariable")
    {
      if (typeof thisWidget.useVariable != "undefined" && thisWidget.useVariable.value == 1)
        document.getElementById("input_constantVariable_1").setAttribute("checked", "1");
      else
        document.getElementById("input_constantVariable_0").setAttribute("checked", "1");
    }
    else if (modules[moduleIndex] == "XYZinput")
    {
      if (typeof thisWidget.posX != "undefined")
        document.getElementById("input_XYZinput_0").value = thisWidget.posX.value;
      else
        document.getElementById("input_XYZinput_0").value = "0";

      if (typeof thisWidget.posX != "undefined")
        document.getElementById("input_XYZinput_1").value = thisWidget.posY.value;
      else
        document.getElementById("input_XYZinput_1").value = "0";

      if (typeof thisWidget.posX != "undefined")
        document.getElementById("input_XYZinput_2").value = thisWidget.posZ.value;
      else
        document.getElementById("input_XYZinput_2").value = "0";
    }
    else
      console.warn("Unknown module \"" + modules[moduleIndex] + "\"");
  }
};

/**
 * @param module {String}
 * @returns {Element}
 */
ConfigModules.prototype.getModule = function(module)
{
  var element = document.createElement("div");
  element.className = "menuModule";
  if (module == "area")
  {
    element.id = "menuModule:area";
    element.innerHTML = "" +
      "<label for=\"input_point_0\">Point 1</label><input type=\"text\" name=\"input_point\" id=\"input_point_0\" placeholder=\"x,y,z or variable_name\"/>" +
      "<label for=\"input_point_1\">Point 2</label><input type=\"text\" name=\"input_point\" id=\"input_point_1\" placeholder=\"x,y,z or variable_name\"/>";
  }
  else if (module == "areaType")
  {
    element.id = "menuModule:areaType";
    element.innerHTML = "" +
      "<div>Area Type:</div>" +
      "<div class=\"menuModule\">" +
      "<div><input type=\"radio\" name=\"input_areaType\" id=\"input_areaType_0\" class=\"input_areaType\"/><label for=\"input_areaType_0\">Filled</label></div>" +
      "<div><input type=\"radio\" name=\"input_areaType\" id=\"input_areaType_1\" class=\"input_areaType\"/><label for=\"input_areaType_1\">Frame</label></div>" +
      "<div><input type=\"radio\" name=\"input_areaType\" id=\"input_areaType_2\" class=\"input_areaType\"/><label for=\"input_areaType_2\">Walls</label></div>" +
      "<div><input type=\"radio\" name=\"input_areaType\" id=\"input_areaType_3\" class=\"input_areaType\"/><label for=\"input_areaType_3\">Sphere</label></div>" +
      "<div><input type=\"radio\" name=\"input_areaType\" id=\"input_areaType_4\" class=\"input_areaType\"/><label for=\"input_areaType_4\">Line</label></div>" +
      "<div><input type=\"radio\" name=\"input_areaType\" id=\"input_areaType_5\" class=\"input_areaType\"/><label for=\"input_areaType_5\">X-Wall</label></div>" +
      "<div><input type=\"radio\" name=\"input_areaType\" id=\"input_areaType_6\" class=\"input_areaType\"/><label for=\"input_areaType_6\">Y-Wall</label></div>" +
      "</div>" +
      "<div class=\"menuModule\">" +
      "<div><input type=\"radio\" name=\"input_areaType\" id=\"input_areaType_7\" class=\"input_areaType\"/><label for=\"input_areaType_7\">Z-Wall</label></div>" +
      "<div><input type=\"radio\" name=\"input_areaType\" id=\"input_areaType_8\" class=\"input_areaType\"/><label for=\"input_areaType_8\">Y-Wall</label></div>" +
      "<div><input type=\"radio\" name=\"input_areaType\" id=\"input_areaType_9\" class=\"input_areaType\"/><label for=\"input_areaType_9\">X-Cylinder</label></div>" +
      "<div><input type=\"radio\" name=\"input_areaType\" id=\"input_areaType_10\" class=\"input_areaType\"/><label for=\"input_areaType_10\">Y-Cylinder</label></div>" +
      "<div><input type=\"radio\" name=\"input_areaType\" id=\"input_areaType_11\" class=\"input_areaType\"/><label for=\"input_areaType_1\">Z-Cylinder</label></div>" +
      "<div><input type=\"radio\" name=\"input_areaType\" id=\"input_areaType_12\" class=\"input_areaType\"/><label for=\"input_areaType_12\">X-Pyramid</label></div>" +
      "<div><input type=\"radio\" name=\"input_areaType\" id=\"input_areaType_13\" class=\"input_areaType\"/><label for=\"input_areaType_13\">Y-Pyramid</label></div>" +
      "</div>" +
      "<div class=\"menuModule\">" +
      "<div><input type=\"radio\" name=\"input_areaType\" id=\"input_areaType_14\" class=\"input_areaType\"/><label for=\"input_areaType_14\">Z-Pyramid</label></div>" +
      "<div><input type=\"radio\" name=\"input_areaType\" id=\"input_areaType_15\" class=\"input_areaType\"/><label for=\"input_areaType_15\">Grid</label></div>" +
      "<div><input type=\"radio\" name=\"input_areaType\" id=\"input_areaType_16\" class=\"input_areaType\"/><label for=\"input_areaType_16\">Random</label></div>" +
      "</div>";
  }
  else if (module == "extraParameter")
  {
    element.id = "menuModule:extraParameter";
    element.innerHTML = "" +
      "<div>Extra Parameter:</div>" +
      "<div><input type=\"text\" name=\"input_extraParameter\" id=\"input_extraParameter\"/></div>";
  }
  else if (module == "order")
  {
    element.id = "menuModule:order";
    element.innerHTML = "" +
      "<div>Order:</div>" +
      "<div><input type=\"radio\" name=\"input_order\" id=\"input_order_1\" class=\"input_order\"/><label for=\"input_order_0\">Closets</label></div>" +
      "<div><input type=\"radio\" name=\"input_order\" id=\"input_order_2\" class=\"input_order\"/><label for=\"input_order_1\">Low to high</label></div>" +
      "<div><input type=\"radio\" name=\"input_order\" id=\"input_order_3\" class=\"input_order\"/><label for=\"input_order_2\">High to low</label></div>";
  }
  else if (module == "direction")
  {
    element.id = "menuModule:direction";
    element.innerHTML = "" +
      "<div><input type=\"radio\" name=\"input_direction\" id=\"input_direction_0\" class=\"input_direction\"/><label for=\"input_direction_0\">Bottom</label></div>" +
      "<div><input type=\"radio\" name=\"input_direction\" id=\"input_direction_1\" class=\"input_direction\"/><label for=\"input_direction_1\">Top</label></div>" +
      "<div><input type=\"radio\" name=\"input_direction\" id=\"input_direction_2\" class=\"input_direction\"/><label for=\"input_direction_2\">North</label></div>" +
      "<div><input type=\"radio\" name=\"input_direction\" id=\"input_direction_3\" class=\"input_direction\"/><label for=\"input_direction_3\">South</label></div>" +
      "<div><input type=\"radio\" name=\"input_direction\" id=\"input_direction_4\" class=\"input_direction\"/><label for=\"input_direction_4\">West</label></div>" +
      "<div><input type=\"radio\" name=\"input_direction\" id=\"input_direction_5\" class=\"input_direction\"/><label for=\"input_direction_5\">East</label></div>";
  }
  else if (module == "sneaking")
  {
    element.id = "menuModule:direction";
    element.innerHTML = "<div><input type=\"checkbox\" name=\"input_sneaking\" id=\"input_sneaking\"/><label for=\"input_sneaking\">Sneaking</label></div>";
  }
  else if (module == "dropMethod")
  {
    element.id = "menuModule:dropMethod";
    element.innerHTML = "" +
      "<div>Drop Method:</div>" +
      "<div><input type=\"radio\" name=\"input_dropMethod\" id=\"input_dropMethod_0\" class=\"input_dropMethod\"/><label for=\"input_dropMethod_0\">Random</label></div>" +
      "<div><input type=\"radio\" name=\"input_dropMethod\" id=\"input_dropMethod_1\" class=\"input_dropMethod\"/><label for=\"input_dropMethod_1\">Straight</label></div>";
  }
  else if (module == "sides")
  {
    element.id = "menuModule:sides";
    element.innerHTML = "" +
      "<div>Sides:</div>" +
      "<div><input type=\"checkbox\" name=\"input_sides\" id=\"input_sides_0\"/><label for=\"input_sides_0\">Bottom</label></div>" +
      "<div><input type=\"checkbox\" name=\"input_sides\" id=\"input_sides_1\"/><label for=\"input_sides_1\">Top</label></div>" +
      "<div><input type=\"checkbox\" name=\"input_sides\" id=\"input_sides_2\"/><label for=\"input_sides_2\">North</label></div>" +
      "<div><input type=\"checkbox\" name=\"input_sides\" id=\"input_sides_3\"/><label for=\"input_sides_3\">South</label></div>" +
      "<div><input type=\"checkbox\" name=\"input_sides\" id=\"input_sides_4\"/><label for=\"input_sides_4\">West</label></div>" +
      "<div><input type=\"checkbox\" name=\"input_sides\" id=\"input_sides_5\"/><label for=\"input_sides_5\">East</label></div>";
  }
  else if (module == "doneWhen")
  {
    element.id = "menuModule:doneWhen";
    element.innerHTML = "" +
      "<div>Move to the next puzzle piece when arrived or right away?</div>" +
      "<div><input type=\"radio\" name=\"input_doneWhen\" id=\"input_doneWhen_0\"/><label for=\"input_doneWhen_0\">Done when arrived</label></div>" +
      "<div><input type=\"radio\" name=\"input_doneWhen\" id=\"input_doneWhen_1\"/><label for=\"input_doneWhen_1\">Done when departing</label></div>";
  }
  else if (module == "text")
  {
    element.id = "menuModule:text";
    element.style.textAlign = "center";
    element.innerHTML = "<input type=\"text\" name=\"input_text\" id=\"input_text\" style=\"width: 100%;\"/>";
  }
  else if (module == "useCount")
  {
    element.id = "menuModule:useCount";
    element.innerHTML = "" +
      "<div><input type=\"checkbox\" name=\"input_useCount\" id=\"input_useCount_0\"/><label for=\"input_useCount_0\">Use count</label></div>" +
      "<div><input type=\"text\" name=\"input_useCount\" id=\"input_useCount_1\"/></div>";
  }
  else if (module == "limitInteractions")
  {
    element.id = "menuModule:limitInteractions";
    element.innerHTML = "" +
      "<div data-title=\"When checked, only the specified amount of blocks\nwill be interacted with until the next puzzle\npiece is executed\"><input type=\"checkbox\" name=\"input_limitInteractions\" id=\"input_limitInteractions_0\"/><label for=\"input_limitInteractions_0\">Limit block interactions</label></div>" +
      "<div><input type=\"text\" name=\"input_limitInteractions\" id=\"input_limitInteractions_1\"/></div>";
  }
  else if (module == "anyAllBlocks")
  {
    element.id = "menuModule:anyAllBlocks";
    element.innerHTML = "" +
      "<div><input type=\"radio\" name=\"input_anyAllBlocks\" id=\"input_anyAllBlocks_0\"/><label for=\"input_anyAllBlocks_0\">Any block</label></div>" +
      "<div><input type=\"radio\" name=\"input_anyAllBlocks\" id=\"input_anyAllBlocks_1\"/><label for=\"input_anyAllBlocks_1\">All blocks</label></div>";
  }
  else if (module == "equalsGreater")
  {
    element.id = "menuModule:equalsGreater";
    element.innerHTML = "" +
      "<div><input type=\"radio\" name=\"input_equalsGreater\" id=\"input_equalsGreater_0\"/><label for=\"input_equalsGreater_0\">=</label></div>" +
      "<div><input type=\"radio\" name=\"input_equalsGreater\" id=\"input_equalsGreater_1\"/><label for=\"input_equalsGreater_1\">>=</label></div>";
  }
  else if (module == "equalsGreaterParam")
  {
    element.id = "menuModule:equalsGreaterParam";
    element.innerHTML = "" +
      "<div><input type=\"radio\" name=\"input_equalsGreaterParam\" id=\"input_equalsGreaterParam_0\"/><label for=\"input_equalsGreaterParam_0\">=</label></div>" +
      "<div><input type=\"radio\" name=\"input_equalsGreaterParam\" id=\"input_equalsGreaterParam_1\"/><label for=\"input_equalsGreaterParam_1\">>=</label></div>" +
      "<div><input type=\"text\" name=\"input_equalsGreaterParam\" id=\"input_equalsGreaterParam_2\"/></div>";
  }
  else if (module == "XYZ")
  {
    element.id = "menuModule:XYZ";
    element.innerHTML = "" +
      "<div><input type=\"checkbox\" name=\"input_XYZ\" id=\"input_XYZ_0\"/><label for=\"input_XYZ_0\">X</label></div>" +
      "<div><input type=\"checkbox\" name=\"input_XYZ\" id=\"input_XYZ_1\"/><label for=\"input_XYZ_1\">Y</label></div>" +
      "<div><input type=\"checkbox\" name=\"input_XYZ\" id=\"input_XYZ_2\"/><label for=\"input_XYZ_2\">Z</label></div>";
  }
  else if (module == "operator")
  {
    element.id = "menuModule:operator";
    element.innerHTML = "" +
      "<div><input type=\"radio\" name=\"input_operator\" id=\"input_operator_0\"/><label for=\"input_operator_0\">+ -</label></div>" +
      "<div><input type=\"radio\" name=\"input_operator\" id=\"input_operator_1\"/><label for=\"input_operator_1\">* /</label></div>";
  }
  else if (module == "variableName")
  {
    element.id = "menuModule:variableName";
    element.innerHTML = "<div>Variable name:</div>" +
        "<div><input type=\"text\" name=\"input_variableName\" id=\"input_variableName\"/></div>"
  }
  else if (module == "constantVariable")
  {
    element.id = "menuModule:constantVariable";
    element.innerHTML = "" +
  "<div><input type=\"radio\" name=\"input_constantVariable\" id=\"input_constantVariable_0\"/><label for=\"input_constantVariable_0\">Constant</label></div>" +
  "<div><input type=\"radio\" name=\"input_constantVariable\" id=\"input_constantVariable_1\"/><label for=\"input_constantVariable_1\">Variable</label></div>";
  }
  else if (module == "XYZinput")
  {
    element.id = "menuModule:XYZinput";
    element.innerHTML = "" +
      "<div><label for=\"input_XYZinput_0\">X:</label><input type=\"text\" name=\"input_XYZinput\" id=\"input_XYZinput_0\"/></div>" +
      "<div><label for=\"input_XYZinput_1\">Y:</label><input type=\"text\" name=\"input_XYZinput\" id=\"input_XYZinput_1\"/></div>" +
      "<div><label for=\"input_XYZinput_2\">Z:</label><input type=\"text\" name=\"input_XYZinput\" id=\"input_XYZinput_2\"/></div>";
  }

  return element;
};