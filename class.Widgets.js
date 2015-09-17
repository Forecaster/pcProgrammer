function Widgets(baseDir)
{
  if (baseDir)
    this.baseDir = baseDir;
  else
    this.baseDir = "progwidgets/";
  
  this.widget = {};
  this.widget["area"]                               = {sprite: "areaPiece.png"                          ,width: 80, height: 44,  name: "Area",                         confModules: ["area", "areaType", "extraParameter"], confModulesLeft: [], confModulesRight: [],                desc: "Area type: {0}",                                                   inputsLeft: ["area"], inputsRight: ["area"]};
  this.widget["entityAttack"]                       = {sprite: "attackPiece.png"                        ,width: 80, height: 108, name: "Entity Attack",                confModules: [], confModulesLeft: [], confModulesRight: [],                                                    desc: "",                                                                 inputsLeft: ["area", "text"], inputsRight: ["area", "text"]};
  this.widget["blockRightClick"]                    = {sprite: "blockRightClickPiece.png"               ,width: 80, height: 108, name: "Right Click Block",            confModules: [], confModulesLeft: ["order", "direction"], confModulesRight: ["sneaking", "limitInteractions"], desc: "Order: {0}\nPlacing direction: {1}",                               inputsLeft: ["area", "itemFilter"], inputsRight: ["area", "itemFilter"]};
  this.widget["comment"]                            = {sprite: "commentPiece.png"                       ,width: 80, height: 64,  name: "Comment",                      confModules: ["text"], confModulesLeft: [], confModulesRight: [],                                              desc: "{0}",                                                              inputsLeft: [], inputsRight: []};
  this.widget["computerCraft"]                      = {sprite: "computerCraftPiece.png"                 ,width: 80, height: 64,  name: "Computer Control",             confModules: [], confModulesLeft: [], confModulesRight: [],                                                    desc: "",                                                                 inputsLeft: ["area"], inputsRight: ["area"]};
  this.widget["conditionBlock"]                     = {sprite: "conditionBlockPiece.png"                ,width: 80, height: 152, name: "Condition: Block",             confModules: [], confModulesLeft: ["anyAllBlocks"], confModulesRight: [],                                      desc: "{0} >= 1",                                                         inputsLeft: ["area", "item", "text"], inputsRight: ["area", "item", "text"]};
  this.widget["conditionCoordinate"]                = {sprite: "conditionCoordinatePiece.png"           ,width: 80, height: 152, name: "Condition: Coordinate",        confModules: [], confModulesLeft: ["XYZ"], confModulesRight: ["equalsGreater"],                                desc: "Condition: \"{0}\"",                                               inputsLeft: ["coordinate", "coordinate", "text"], inputsRight: ["coordinate", "coordinate", "text"]};
  this.widget["droneConditionEntity"]               = {sprite: "conditionDroneEntityPiece.png"          ,width: 80, height: 108, name: "Drone Condition: Entity",      confModules: [], confModulesLeft: [], confModulesRight: [],                                                    desc: "",                                                                 inputsLeft: ["text", "text"], inputsRight: ["text", "text"]};
  this.widget["conditionDroneEssentia"]             = {sprite: "conditionDroneEssentiaPiece.png"        ,width: 80, height: 108, name: "Drone Condition: Essentia",    confModules: [], confModulesLeft: [], confModulesRight: [],                                                    desc: "",                                                                 inputsLeft: [], inputsRight: []};
  this.widget["droneConditionItem"]                 = {sprite: "conditionDroneInventoryPiece.png"       ,width: 80, height: 108, name: "Drone Condition: Items",       confModules: [], confModulesLeft: ["equalsGreaterParam"], confModulesRight: [],                                desc: "",                                                                 inputsLeft: ["itemFilter", "text"], inputsRight: ["itemFilter", "text"]};
  this.widget["droneConditionLiquid"]               = {sprite: "conditionDroneLiquidPiece.png"          ,width: 80, height: 108, name: "Drone Condition: Liquid",      confModules: [], confModulesLeft: ["equalsGreaterParam"], confModulesRight: [],                                desc: "",                                                                 inputsLeft: ["fluidFilter", "text"], inputsRight: ["fluidFilter", "text"]};
  this.widget["droneConditionPressure"]             = {sprite: "conditionDronePressurePiece.png"        ,width: 80, height: 64,  name: "Drone Condition: Pressure",    confModules: [], confModulesLeft: ["equalsGreaterParam"], confModulesRight: [],                                desc: "",                                                                 inputsLeft: ["text"], inputsRight: ["text"]};
  this.widget["droneConditionRF"]                   = {sprite: "conditionDroneRFPiece.png"              ,width: 80, height: 64,  name: "Drone Condition: RF",          confModules: [], confModulesLeft: [], confModulesRight: ["equalsGreaterParam"],                                desc: "",                                                                 inputsLeft: [], inputsRight: []};
  this.widget["conditionEntity"]                    = {sprite: "conditionEntityPiece.png"               ,width: 80, height: 152, name: "Condition: Entity",            confModules: [], confModulesLeft: ["equalsGreaterParam"], confModulesRight: [],                                desc: "{0}",                                                              inputsLeft: ["area", "text", "text"], inputsRight: ["area", "text", "text"]};
  this.widget["conditionEssentia"]                  = {sprite: "conditionEssentiaPiece.png"             ,width: 80, height: 152, name: "Condition: Essentia",          confModules: [], confModulesLeft: [], confModulesRight: [],                                                    desc: "",                                                                 inputsLeft: [], inputsRight: []};
  this.widget["conditionItem"]                      = {sprite: "conditionItem.png"                      ,width: 80, height: 152, name: "Drone Condition: Item Filter", confModules: [], confModulesLeft: [], confModulesRight: [],                                                    desc: "",                                                                 inputsLeft: ["itemFilter", "itemFilter", "text"], inputsRight: ["itemFilter", "itemFilter", "text"]};
  this.widget["conditionItemInventory"]             = {sprite: "conditionItemInventoryPiece.png"        ,width: 80, height: 152, name: "Condition: Items",             confModules: [], confModulesLeft: ["sides"], confModulesRight: ["anyAllBlocks", "equalsGreaterParam"],         desc: "Accessing sides:\n{0}\n{1}",                                       inputsLeft: ["area", "itemFilter", "text"], inputsRight: ["area", "itemFilter", "text"]};
  this.widget["conditionLiquidInventory"]           = {sprite: "conditionLiquidInventoryPiece.png"      ,width: 80, height: 152, name: "Condition: Liquid",            confModules: [], confModulesLeft: ["sides"], confModulesRight: ["anyAllBlocks", "equalsGreaterParam"],         desc: "Accessing sides:\n{0}\n{1}",                                       inputsLeft: ["area", "fluidFilter", "text"], inputsRight: ["area", "fluidFilter", "text"]};
  this.widget["conditionRedstone"]                  = {sprite: "conditionRedstonePiece.png"             ,width: 80, height: 108, name: "Condition: Redstone",          confModules: [], confModulesLeft: [], confModulesRight: [],                                                    desc: "Accessing sides:\n{0}\n{1}",                                       inputsLeft: ["area", "text"], inputsRight: ["area", "text"]};
  this.widget["conditionRF"]                        = {sprite: "conditionRFPiece.png"                   ,width: 80, height: 108, name: "Condition: RF",                confModules: [], confModulesLeft: ["sides"], confModulesRight: ["anyAllBlocks", "equalsGreaterParam"],         desc: "{0} >= {1}",                                                       inputsLeft: [], inputsRight: []};
  this.widget["coordinateOperationMultiplyDivide"]  = {sprite: "coordinateOperationMultiplyDivide.png"  ,width: 80, height: 64,  name: "Coordinate Operator",          confModules: [], confModulesLeft: ["operator"], confModulesRight: ["variableName"],                            desc: "Setting variable: \"{0}\"",                                        inputsLeft: ["coordinate"], inputsRight: ["coordinate"]};
  this.widget["coordinateOperationPlusMinus"]       = {sprite: "coordinateOperationPlusMinus.png"       ,width: 80, height: 64,  name: "Coordinate Operator",          confModules: [], confModulesLeft: ["operator"], confModulesRight: ["variableName"],                            desc: "Setting variable: \"{0}\"",                                        inputsLeft: ["coordinate"], inputsRight: ["coordinate"]};
  this.widget["coordinateOperator"]                 = {sprite: "coordinateOperationPlusMinus.png"       ,width: 80, height: 64,  name: "Coordinate Operator",          confModules: [], confModulesLeft: ["operator"], confModulesRight: ["variableName"],                            desc: "Setting variable: \"{0}\"",                                        inputsLeft: ["coordinate"], inputsRight: ["coordinate"]};
  this.widget["coordinate"]                         = {sprite: "coordinatePiece.png"                    ,width: 80, height: 44,  name: "Coordinate",                   confModules: [], confModulesLeft: ["constantVariable"], confModulesRight: ["XYZinput", "variableName"],        desc: "{0}",                                                              inputsLeft: ["coordinate"], inputsRight: ["coordinate"]};
  this.widget["crafting"]                           = {sprite: "craftPiece.png"                         ,width: 80, height: 152, name: "Crafting",                     confModules: [], confModulesLeft: ["useCount"], confModulesRight: [],                                          desc: "",                                                                 inputsLeft: [], inputsRight: ["itemFilter", "itemFilter", "itemFilter"]};
  this.widget["dig"]                                = {sprite: "digPiece.png"                           ,width: 80, height: 108, name: "Dig Area",                     confModules: [], confModulesLeft: ["order", "limitInteractions"], confModulesRight: [],                        desc: "Order: {0}",                                                       inputsLeft: ["area", "itemFilter"], inputsRight: ["area", "itemFilter"]};
  this.widget["emitRedstone"]                       = {sprite: "emitRedstonePiece.png"                  ,width: 80, height: 64,  name: "Emit Redstone",                confModules: [], confModulesLeft: ["sides"], confModulesRight: [],                                             desc: "Affecting sides:\n{0}",                                            inputsLeft: [], inputsRight: ["text"]};
  this.widget["entityExport"]                       = {sprite: "entityExportPiece.png"                  ,width: 80, height: 108, name: "Export Entity",                confModules: [], confModulesLeft: [], confModulesRight: [],                                                    desc: "",                                                                 inputsLeft: ["area", "text"], inputsRight: ["area", "text"]};
  this.widget["entityImport"]                       = {sprite: "entityImportPiece.png"                  ,width: 80, height: 108, name: "Import Entity",                confModules: [], confModulesLeft: [], confModulesRight: [],                                                    desc: "",                                                                 inputsLeft: ["area", "text"], inputsRight: ["area", "text"]};
  this.widget["entityRightClick"]                   = {sprite: "entityRightClickPiece.png"              ,width: 80, height: 108, name: "Right Click Entity",           confModules: [], confModulesLeft: [], confModulesRight: [],                                                    desc: "",                                                                 inputsLeft: ["area", "text"], inputsRight: ["area", "text"]};
  this.widget["essentiaExport"]                     = {sprite: "essentiaExportPiece.png"                ,width: 80, height: 108, name: "essentiaExport.name",          confModules: [], confModulesLeft: [], confModulesRight: [],                                                    desc: "",                                                                 inputsLeft: [], inputsRight: []};
  this.widget["essentiaFilter"]                     = {sprite: "essentiaFilterPiece.png"                ,width: 80, height: 44,  name: "essentiaFilter.name",          confModules: [], confModulesLeft: [], confModulesRight: [],                                                    desc: "",                                                                 inputsLeft: [], inputsRight: []};
  this.widget["essentiaImport"]                     = {sprite: "essentiaImportPiece.png"                ,width: 80, height: 108, name: "essentiaImport.name",          confModules: [], confModulesLeft: [], confModulesRight: [],                                                    desc: "",                                                                 inputsLeft: [], inputsRight: []};
  this.widget["externalProgram"]                    = {sprite: "externalProgramPiece.png"               ,width: 80, height: 64,  name: "External Program",             confModules: [], confModulesLeft: [], confModulesRight: [],                                                    desc: "",                                                                 inputsLeft: ["area"], inputsRight: ["area"]};
  this.widget["goto"]                               = {sprite: "gotoPiece.png"                          ,width: 80, height: 64,  name: "Go to location",               confModules: ["doneWhen"], confModulesLeft: [], confModulesRight: [],                                          desc: "Done when {0}",                                                    inputsLeft: ["area"], inputsRight: ["area"]};
  this.widget["inventoryExport"]                    = {sprite: "inventoryExportPiece.png"               ,width: 80, height: 108, name: "Export to Inventory",          confModules: [], confModulesLeft: ["sides", "useCount"], confModulesRight: [],                                 desc: "Accessing sides:\n{0}",                                            inputsLeft: ["area", "itemFilter"], inputsRight: ["area", "itemFilter"]};
  this.widget["inventoryImport"]                    = {sprite: "inventoryImportPiece.png"               ,width: 80, height: 108, name: "Import from Inventory",        confModules: [], confModulesLeft: ["sides", "useCount"], confModulesRight: [],                                 desc: "Accessing sides:\n{0}",                                            inputsLeft: ["area", "itemFilter"], inputsRight: ["area", "itemFilter"]};
  this.widget["itemAssign"]                         = {sprite: "itemAssignPiece.png"                    ,width: 80, height: 64,  name: "Item Assignment",              confModules: ["variableName"], confModulesLeft: [], confModulesRight: [],                                      desc: "Setting variable: \"{0}\"",                                        inputsLeft: [], inputsRight: ["itemFilter"]};
  this.widget["dropItem"]                           = {sprite: "itemDropPiece.png"                      ,width: 80, height: 108, name: "Drop Items",                   confModules: [], confModulesLeft: ["sides", "dropMethod"], confModulesRight: [],                               desc: "",                                                                 inputsLeft: ["area", "itemFilter"], inputsRight: ["area", "itemFilter"]};
  this.widget["itemFilter"]                         = {sprite: "itemFilterPiece.png"                    ,width: 80, height: 44,  name: "Item Filter",                  confModules: [], confModulesLeft: [], confModulesRight: [],                                                    desc: "Current filter:\n{0}\n{1} metadata / damage values\n{2} NBT tags", inputsLeft: ["itemFilter"], inputsRight: ["itemFilter"]};
  this.widget["pickupItem"]                         = {sprite: "itemPickPiece.png"                      ,width: 80, height: 108, name: "Pick up Items",                confModules: [], confModulesLeft: [], confModulesRight: [],                                                    desc: "",                                                                 inputsLeft: ["area", "itemFilter"], inputsRight: ["area", "itemFilter"]};
  this.widget["jump"]                               = {sprite: "jumpPiece.png"                          ,width: 80, height: 44,  name: "Jump",                         confModules: [], confModulesLeft: [], confModulesRight: [],                                                    desc: "",                                                                 inputsLeft: [], inputsRight: ["text"]};
  this.widget["label"]                              = {sprite: "labelPiece.png"                         ,width: 80, height: 64,  name: "Label",                        confModules: [], confModulesLeft: [], confModulesRight: [],                                                    desc: "",                                                                 inputsLeft: [], inputsRight: ["text"]};
  this.widget["liquidExport"]                       = {sprite: "liquidExportPiece.png"                  ,width: 80, height: 108, name: "Export Liquid",                confModules: [], confModulesLeft: ["sides", "useCount"], confModulesRight: [],                                 desc: "Accessing sides:\n{0}",                                            inputsLeft: ["area", "fluidFilter"], inputsRight: ["area", "fluidFilter"]};
  this.widget["liquidImport"]                       = {sprite: "liquidImportPiece.png"                  ,width: 80, height: 108, name: "Import Liquid",                confModules: [], confModulesLeft: ["sides", "useCount"], confModulesRight: [],                                 desc: "Accessing sides:\n{0}",                                            inputsLeft: ["area", "fluidFilter"], inputsRight: ["area", "fluidFilter"]};
  this.widget["liquidFilter"]                       = {sprite: "liquidFilterPiece.png"                  ,width: 80, height: 44,  name: "Liquid Filter",                confModules: [], confModulesLeft: [], confModulesRight: [],                                                    desc: "Current filter:\n{0}",                                             inputsLeft: ["fluidFilter"], inputsRight: ["fluidFilter"]};
  this.widget["logistics"]                          = {sprite: "logisticsPiece.png"                     ,width: 80, height: 64,  name: "Logistics",                    confModules: [], confModulesLeft: [], confModulesRight: [],                                                    desc: "",                                                                 inputsLeft: ["area"], inputsRight: ["area"]};
  this.widget["place"]                              = {sprite: "placePiece.png"                         ,width: 80, height: 108, name: "Place",                        confModules: [], confModulesLeft: ["order", "direction", "limitInteractions"], confModulesRight: [],           desc: "Order: {0}\nPlacing direction: {1}",                               inputsLeft: ["area", "itemFilter"], inputsRight: ["area", "itemFilter"]};
  this.widget["rename"]                             = {sprite: "renamePiece.png"                        ,width: 80, height: 64,  name: "Rename Drone",                 confModules: [], confModulesLeft: [], confModulesRight: [],                                                    desc: "",                                                                 inputsLeft: [], inputsRight: ["text"]};
  this.widget["rfExport"]                           = {sprite: "RFExportPiece.png"                      ,width: 80, height: 64,  name: "Export RF",                    confModules: [], confModulesLeft: ["sides", "useCount"], confModulesRight: [],                                 desc: "Accessing sides:\n{0}",                                            inputsLeft: ["area"], inputsRight: ["area"]};
  this.widget["rfImport"]                           = {sprite: "RFImportPiece.png"                      ,width: 80, height: 64,  name: "Import RF",                    confModules: [], confModulesLeft: ["sides", "useCount"], confModulesRight: [],                                 desc: "Accessing sides:\n{0}",                                            inputsLeft: ["area"], inputsRight: ["area"]};
  this.widget["standby"]                            = {sprite: "standbyPiece.png"                       ,width: 60, height: 64,  name: "Standby",                      confModules: [], confModulesLeft: [], confModulesRight: [],                                                    desc: "",                                                                 inputsLeft: [], inputsRight: ["text"]};
  this.widget["start"]                              = {sprite: "startPiece.png"                         ,width: 60, height: 64,  name: "Start",                        confModules: [], confModulesLeft: [], confModulesRight: [],                                                    desc: "",                                                                 inputsLeft: [], inputsRight: []};
  this.widget["suicide"]                            = {sprite: "suicidePiece.png"                       ,width: 80, height: 44,  name: "Suicide",                      confModules: [], confModulesLeft: [], confModulesRight: [],                                                    desc: "",                                                                 inputsLeft: [], inputsRight: []};
  this.widget["teleport"]                           = {sprite: "teleportPiece.png"                      ,width: 80, height: 64,  name: "Teleport to location",         confModules: ["doneWhen"], confModulesLeft: [], confModulesRight: [],                                          desc: "Done when {0}",                                                    inputsLeft: ["area"], inputsRight: ["area"]};
  this.widget["text"]                               = {sprite: "textPiece.png"                          ,width: 80, height: 44,  name: "Text",                         confModules: ["text"], confModulesLeft: [], confModulesRight: [],                                              desc: "Value: {0}",                                                       inputsLeft: ["text"], inputsRight: ["text"]};
  this.widget["wait"]                               = {sprite: "waitPiece.png"                          ,width: 80, height: 64,  name: "Wait",                         confModules: [], confModulesLeft: [], confModulesRight: [],                                                    desc: "",                                                                 inputsLeft: [], inputsRight: ["text"]};
}

Widgets.prototype.getSprite = function(name, altTexture)
{
  if (name == "coordinateOperator")
    if (altTexture)
      return this.baseDir + "coordinateOperationMultiplyDivide.png";
    else
      return this.baseDir + "coordinateOperationPlusMinus.png";

  if (this.widget[name])
    return this.baseDir + this.widget[name].sprite;
  else
    return false
};

Widgets.prototype.getSize = function(name)
{
  if (this.widget[name])
    return {width: this.widget[name].width, height: this.widget[name].height};
  else
    return false;
};

Widgets.prototype.getName = function(name)
{
  if (this.widget[name])
    return this.widget[name].name;
  else
    return false;
};

/**
 *
 * @param id {Number}
 */
Widgets.prototype.getTooltip = function(id)
{
  if (id != undefined && id != null)
  {
    if (typeof Program.widgets.value[id] == "undefined" || typeof Program.widgets.value[id].name.value == "undefined")
      return false;

    var name = Program.widgets.value[id].name.value;
    var widgetArray = Program.widgets.value;
    var thisWidget = widgetArray[id];

    var tooltip = this.widget[name].desc;

    var arguments = [];
    var data1;
    var data2;
    var data3;

    switch (name)
    {
      case "area"                                 : arguments = [this.getAreaType(widgetArray[id].type.value)]; break;
      case "blockRightClick"                      : arguments = [this.getOrder(thisWidget.order.value), this.getSingleDirection(thisWidget.dir.value)]; break;
      case "comment"                              : arguments = [(typeof thisWidget.string != "undefined") ? thisWidget.string.value : ""]; break;
      case "conditionBlock"                       : arguments = [((thisWidget.isAndFunction.value == 1) ? "All" : "Any")]; break;
      case "conditionRF"                          : arguments = [((thisWidget.isAndFunction.value == 1) ? "All" : "Any"), thisWidget.count.value]; break;
      case "conditionCoordinate"                  : data1 = (thisWidget.operator.value == 0) ? "=" : ">="; data2 = ""; data2 += (thisWidget.checkX.value == 1) ? "x1 "+data1+" x2 and " : ""; data2 += (thisWidget.checkY.value == 1) ? "y1 "+data1+" y2 and " : ""; data2 += (thisWidget.checkZ.value == 1) ? "z1 "+data1+" z2 and " : ""; arguments = [data2.substring(0, (data2.length - 5))];  break;
      case "conditionEntity"                      : arguments = ["Any " + ((thisWidget.operator.value == 0) ? "= " : ">= ") + thisWidget.count.value]; break;
      case "conditionItemInventory"               : arguments = [this.getMultiDirections(thisWidget), ((thisWidget.isAndFunction.value == 1) ? "All " : "Any ") + ((thisWidget.operator.value == 0) ? "= " : ">= ") + thisWidget.count.value]; break;
      case "conditionLiquidInventory"             : arguments = [this.getMultiDirections(thisWidget), ((thisWidget.isAndFunction.value == 1) ? "All " : "Any ") + ((thisWidget.operator.value == 0) ? "= " : ">= ") + thisWidget.count.value]; break;
      case "conditionPressure"                    : arguments = [this.getMultiDirections(thisWidget), ((thisWidget.isAndFunction.value == 1) ? "All " : "Any ") + ((thisWidget.operator.value == 0) ? "= " : ">= ") + thisWidget.count.value]; break;
      case "conditionRedstone"                    : arguments = [this.getMultiDirections(thisWidget), ((thisWidget.isAndFunction.value == 1) ? "All " : "Any ") + ((thisWidget.operator.value == 0) ? "= " : ">= ") + thisWidget.count.value]; break;
      case "coordinateOperator"                   : arguments = [thisWidget.variable.value]; break;
      case "coordinate"                           : if (thisWidget.useVariable.value == 1) data1 = "XYZ: \"" + thisWidget.variable.value + "\""; else data1 = "X: " + thisWidget.posX.value + ", Y: " + thisWidget.posY.value + ", Z: " + thisWidget.posZ.value; arguments = [data1]; break;
      case "dig"                                  : arguments = [this.getOrder(thisWidget.order.value)]; break;
      case "emitRedstone"                         : arguments = [this.getMultiDirections(thisWidget)]; break;
      case "goto"                                 : if (thisWidget.doneWhenDeparting.value == 1) data1 = "departing"; else data1 = "arrived"; arguments = [data1]; break;
      case "inventoryExport"                      : arguments = [this.getMultiDirections(thisWidget)]; break;
      case "inventoryImport"                      : arguments = [this.getMultiDirections(thisWidget)]; break;
      case "rfExport"                             : arguments = [this.getMultiDirections(thisWidget)]; break;
      case "rfImport"                             : arguments = [this.getMultiDirections(thisWidget)]; break;
      case "itemAssign"                           : arguments = [thisWidget.variable.value]; break;
      case "itemFilter"                           : data1 = (thisWidget.useMetadata.value == 0) ? "Ignoring" : "Using"; data2 = (thisWidget.useNBT.value == 0) ? "Ignoring" : "Using"; arguments = [(typeof thisWidget.id != "undefined") ? thisWidget.id.value + ":" + thisWidget.specificMeta.value : "Not set", data1, data2]; break;
      case "liquidExport"                         : arguments = [this.getMultiDirections(thisWidget)]; break;
      case "liquidFilter"                         : arguments = [(typeof thisWidget.fluid != "undefined") ? thisWidget.fluid.value : "Not set"]; break;
      case "liquidImport"                         : arguments = [this.getMultiDirections(thisWidget)]; break;
      case "place"                                : arguments = [this.getOrder(thisWidget.order.value), this.getSingleDirection(thisWidget.dir.value)]; break;
      case "teleport"                             : if (thisWidget.doneWhenDeparting.value == 1) data1 = "Departing"; else data1 = "Arrived"; arguments = [data1]; break;
      case "text"                                 : arguments = [thisWidget.string.value]; break;
    }
    return tooltip.insert.apply(tooltip, arguments);
  }

  return false;
};

/**
 * Send negative type to receive type array
 * @param type {Number}
 * @returns {String|Object}
 */
Widgets.prototype.getAreaType = function(type)
{
  var areaType = [
    "Filled",
    "Frame",
    "Walls",
    "Sphere",
    "Line",
    "X-Wall",
    "Y-Wall",
    "Z-Wall",
    "X-Cylinder",
    "Y-Cylinder",
    "Z-Cylinder",
    "X-Pyramid",
    "Y-Pyramid",
    "Z-Pyramid",
    "Grid",
    "Random"
  ];

  if (type < 0)
    return areaType;
  else if (type >= areaType)
    return "Unknown Type";
  else
    return areaType[type];
};

/**
 * Send negative direction to receive direction array
 * @param direction {Number}
 * @returns {String|Object}
 */
Widgets.prototype.getSingleDirection = function(direction)
{
  var directions = [
    "Bottom",
    "Top",
    "North",
    "South",
    "West",
    "East"
  ];

  if (direction < 0)
    return directions;
  else if (direction >= directions.length)
    return "Unknown Direction";
  else
    return directions[direction];
};

Widgets.prototype.getMultiDirections = function(target)
{
  var string = "";
  var eval = 0;
  if (target.DOWN.value == 1) {string += "Bottom, "; eval++;}
  if (target.UP.value == 1) {string += "Top, "; eval++;}
  if (target.NORTH.value == 1) {string += "North, "; eval++;}
  if (target.SOUTH.value == 1) {string += "South, "; eval++;}
  if (target.WEST.value == 1) {string += "West, "; eval++;}
  if (target.EAST.value == 1) {string += "East, "; eval++;}

  if (eval == 6)
    return "All Sides";
  else
    return string.substring(0, (string.length - 2));
};

Widgets.prototype.getOrder = function(order)
{
  switch (order)
  {
    case 0: return "Closest";
    case 1: return "Low to High";
    case 2: return "High to Low";
  }
};

/**
 * @param parentPosition {Position}
 * @param argumentNumber {Number}
 * @param widgetId {Number}
 */
Widgets.prototype.getArgumentPosition = function(parentPosition, argumentNumber, widgetId)
{
  if (typeof parentPosition == "undefined" || typeof argumentNumber == "undefined" || typeof widgetId == "undefined")
    throw new Error("Not enough arguments");

  if (typeof parentPosition != "POSITION")
    throw new TypeError("parentPosition must be instance of Position");
  if (typeof argumentNumber != "NUMBER")
    throw new TypeError("argumentNumber must be number");
  if (typeof widgetId != "NUMBER")
    throw new TypeError("widgetId must be number");

  
};