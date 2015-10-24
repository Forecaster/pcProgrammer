function Widgets(baseDir)
{
  if (baseDir)
    this.baseDir = baseDir;
  else
    this.baseDir = "progwidgets/";

  this.widgetArgumentOffsetX = 15; //The width of widgets that take arguments minus the overlap
  this.widgetArgumentOffsetY = 11; //The height of argument widgets
  this.maxArgumentLevel = 3;
  
  this.widget = {};
  this.widget["area"]                               = {sprite: "areaPiece.png"                          ,width: 80, height: 44,  name: "Area",                         confModules: ["area", "areaType", "extraParameter"], confModulesLeft: [], confModulesRight: [],                desc: "Area type: {0}",                                                   argumentsLeft: ["area"], argumentsRight: ["area"]};
  this.widget["entityAttack"]                       = {sprite: "attackPiece.png"                        ,width: 80, height: 108, name: "Entity Attack",                confModules: [], confModulesLeft: [], confModulesRight: [],                                                    desc: "",                                                                 argumentsLeft: ["area", "text"], argumentsRight: ["area", "text"]};
  this.widget["blockRightClick"]                    = {sprite: "blockRightClickPiece.png"               ,width: 80, height: 108, name: "Right Click Block",            confModules: [], confModulesLeft: ["order", "direction"], confModulesRight: ["sneaking", "limitInteractions"], desc: "Order: {0}\nPlacing direction: {1}",                               argumentsLeft: ["area", "itemFilter"], argumentsRight: ["area", "itemFilter"]};
  this.widget["comment"]                            = {sprite: "commentPiece.png"                       ,width: 80, height: 64,  name: "Comment",                      confModules: ["text"], confModulesLeft: [], confModulesRight: [],                                              desc: "{0}",                                                              argumentsLeft: [], argumentsRight: []};
  this.widget["computerCraft"]                      = {sprite: "computerCraftPiece.png"                 ,width: 80, height: 64,  name: "Computer Control",             confModules: [], confModulesLeft: [], confModulesRight: [],                                                    desc: "",                                                                 argumentsLeft: ["area"], argumentsRight: ["area"]};
  this.widget["conditionBlock"]                     = {sprite: "conditionBlockPiece.png"                ,width: 80, height: 152, name: "Condition: Block",             confModules: [], confModulesLeft: ["anyAllBlocks"], confModulesRight: [],                                      desc: "{0} >= 1",                                                         argumentsLeft: ["area", "item", "text"], argumentsRight: ["area", "item", "text"]};
  this.widget["conditionCoordinate"]                = {sprite: "conditionCoordinatePiece.png"           ,width: 80, height: 152, name: "Condition: Coordinate",        confModules: [], confModulesLeft: ["XYZ"], confModulesRight: ["equalsGreater"],                                desc: "Condition: \"{0}\"",                                               argumentsLeft: ["coordinate", "coordinate", "text"], argumentsRight: ["coordinate", "coordinate", "text"]};
  this.widget["droneConditionEntity"]               = {sprite: "conditionDroneEntityPiece.png"          ,width: 80, height: 108, name: "Drone Condition: Entity",      confModules: [], confModulesLeft: [], confModulesRight: [],                                                    desc: "",                                                                 argumentsLeft: ["text", "text"], argumentsRight: ["text", "text"]};
  this.widget["conditionDroneEssentia"]             = {sprite: "conditionDroneEssentiaPiece.png"        ,width: 80, height: 108, name: "Drone Condition: Essentia",    confModules: [], confModulesLeft: [], confModulesRight: [],                                                    desc: "",                                                                 argumentsLeft: [], argumentsRight: []};
  this.widget["droneConditionItem"]                 = {sprite: "conditionDroneInventoryPiece.png"       ,width: 80, height: 108, name: "Drone Condition: Items",       confModules: [], confModulesLeft: ["equalsGreaterParam"], confModulesRight: [],                                desc: "",                                                                 argumentsLeft: ["itemFilter", "text"], argumentsRight: ["itemFilter", "text"]};
  this.widget["droneConditionLiquid"]               = {sprite: "conditionDroneLiquidPiece.png"          ,width: 80, height: 108, name: "Drone Condition: Liquid",      confModules: [], confModulesLeft: ["equalsGreaterParam"], confModulesRight: [],                                desc: "",                                                                 argumentsLeft: ["fluidFilter", "text"], argumentsRight: ["fluidFilter", "text"]};
  this.widget["droneConditionPressure"]             = {sprite: "conditionDronePressurePiece.png"        ,width: 80, height: 64,  name: "Drone Condition: Pressure",    confModules: [], confModulesLeft: ["equalsGreaterParam"], confModulesRight: [],                                desc: "",                                                                 argumentsLeft: ["text"], argumentsRight: ["text"]};
  this.widget["droneConditionRF"]                   = {sprite: "conditionDroneRFPiece.png"              ,width: 80, height: 64,  name: "Drone Condition: RF",          confModules: [], confModulesLeft: [], confModulesRight: ["equalsGreaterParam"],                                desc: "",                                                                 argumentsLeft: [], argumentsRight: []};
  this.widget["conditionEntity"]                    = {sprite: "conditionEntityPiece.png"               ,width: 80, height: 152, name: "Condition: Entity",            confModules: [], confModulesLeft: ["equalsGreaterParam"], confModulesRight: [],                                desc: "{0}",                                                              argumentsLeft: ["area", "text", "text"], argumentsRight: ["area", "text", "text"]};
  this.widget["conditionEssentia"]                  = {sprite: "conditionEssentiaPiece.png"             ,width: 80, height: 152, name: "Condition: Essentia",          confModules: [], confModulesLeft: [], confModulesRight: [],                                                    desc: "",                                                                 argumentsLeft: [], argumentsRight: []};
  this.widget["conditionItem"]                      = {sprite: "conditionItem.png"                      ,width: 80, height: 152, name: "Drone Condition: Item Filter", confModules: [], confModulesLeft: [], confModulesRight: [],                                                    desc: "",                                                                 argumentsLeft: ["itemFilter", "itemFilter", "text"], argumentsRight: ["itemFilter", "itemFilter", "text"]};
  this.widget["conditionItemInventory"]             = {sprite: "conditionItemInventoryPiece.png"        ,width: 80, height: 152, name: "Condition: Items",             confModules: [], confModulesLeft: ["sides"], confModulesRight: ["anyAllBlocks", "equalsGreaterParam"],         desc: "Accessing sides:\n{0}\n{1}",                                       argumentsLeft: ["area", "itemFilter", "text"], argumentsRight: ["area", "itemFilter", "text"]};
  this.widget["conditionLiquidInventory"]           = {sprite: "conditionLiquidInventoryPiece.png"      ,width: 80, height: 152, name: "Condition: Liquid",            confModules: [], confModulesLeft: ["sides"], confModulesRight: ["anyAllBlocks", "equalsGreaterParam"],         desc: "Accessing sides:\n{0}\n{1}",                                       argumentsLeft: ["area", "fluidFilter", "text"], argumentsRight: ["area", "fluidFilter", "text"]};
  this.widget["conditionPressure"]                  = {sprite: "conditionPressurePiece.png"             ,width: 80, height: 108, name: "Condition: Pressure",          confModules: [], confModulesLeft: ["sides"], confModulesRight: ["anyAllBlocks", "equalsGreaterParam"],         desc: "Accessing sides:\n{0}\n{1}",                                       argumentsLeft: ["area", "text"], argumentsRight: ["area", "text"]};
  this.widget["conditionRedstone"]                  = {sprite: "conditionRedstonePiece.png"             ,width: 80, height: 108, name: "Condition: Redstone",          confModules: [], confModulesLeft: [], confModulesRight: [],                                                    desc: "Accessing sides:\n{0}\n{1}",                                       argumentsLeft: ["area", "text"], argumentsRight: ["area", "text"]};
  this.widget["conditionRF"]                        = {sprite: "conditionRFPiece.png"                   ,width: 80, height: 108, name: "Condition: RF",                confModules: [], confModulesLeft: ["sides"], confModulesRight: ["anyAllBlocks", "equalsGreaterParam"],         desc: "{0} >= {1}",                                                       argumentsLeft: [], argumentsRight: []};
  this.widget["coordinateOperationMultiplyDivide"]  = {sprite: "coordinateOperationMultiplyDivide.png"  ,width: 80, height: 64,  name: "Coordinate Operator",          confModules: [], confModulesLeft: ["operator"], confModulesRight: ["variableName"],                            desc: "Setting variable: \"{0}\"",                                        argumentsLeft: ["coordinate"], argumentsRight: ["coordinate"]};
  this.widget["coordinateOperationPlusMinus"]       = {sprite: "coordinateOperationPlusMinus.png"       ,width: 80, height: 64,  name: "Coordinate Operator",          confModules: [], confModulesLeft: ["operator"], confModulesRight: ["variableName"],                            desc: "Setting variable: \"{0}\"",                                        argumentsLeft: ["coordinate"], argumentsRight: ["coordinate"]};
  this.widget["coordinateOperator"]                 = {sprite: "coordinateOperationPlusMinus.png"       ,width: 80, height: 64,  name: "Coordinate Operator",          confModules: [], confModulesLeft: ["operator"], confModulesRight: ["variableName"],                            desc: "Setting variable: \"{0}\"",                                        argumentsLeft: ["coordinate"], argumentsRight: ["coordinate"]};
  this.widget["coordinate"]                         = {sprite: "coordinatePiece.png"                    ,width: 80, height: 44,  name: "Coordinate",                   confModules: [], confModulesLeft: ["constantVariable"], confModulesRight: ["XYZinput", "variableName"],        desc: "{0}",                                                              argumentsLeft: ["coordinate"], argumentsRight: ["coordinate"]};
  this.widget["crafting"]                           = {sprite: "craftPiece.png"                         ,width: 80, height: 152, name: "Crafting",                     confModules: [], confModulesLeft: ["useCount"], confModulesRight: [],                                          desc: "",                                                                 argumentsLeft: [], argumentsRight: ["itemFilter", "itemFilter", "itemFilter"]};
  this.widget["dig"]                                = {sprite: "digPiece.png"                           ,width: 80, height: 108, name: "Dig Area",                     confModules: [], confModulesLeft: ["order", "limitInteractions"], confModulesRight: [],                        desc: "Order: {0}",                                                       argumentsLeft: ["area", "itemFilter"], argumentsRight: ["area", "itemFilter"]};
  this.widget["emitRedstone"]                       = {sprite: "emitRedstonePiece.png"                  ,width: 80, height: 64,  name: "Emit Redstone",                confModules: [], confModulesLeft: ["sides"], confModulesRight: [],                                             desc: "Affecting sides:\n{0}",                                            argumentsLeft: [], argumentsRight: ["text"]};
  this.widget["entityExport"]                       = {sprite: "entityExportPiece.png"                  ,width: 80, height: 108, name: "Export Entity",                confModules: [], confModulesLeft: [], confModulesRight: [],                                                    desc: "",                                                                 argumentsLeft: ["area", "text"], argumentsRight: ["area", "text"]};
  this.widget["entityImport"]                       = {sprite: "entityImportPiece.png"                  ,width: 80, height: 108, name: "Import Entity",                confModules: [], confModulesLeft: [], confModulesRight: [],                                                    desc: "",                                                                 argumentsLeft: ["area", "text"], argumentsRight: ["area", "text"]};
  this.widget["entityRightClick"]                   = {sprite: "entityRightClickPiece.png"              ,width: 80, height: 108, name: "Right Click Entity",           confModules: [], confModulesLeft: [], confModulesRight: [],                                                    desc: "",                                                                 argumentsLeft: ["area", "text"], argumentsRight: ["area", "text"]};
  this.widget["essentiaExport"]                     = {sprite: "essentiaExportPiece.png"                ,width: 80, height: 108, name: "essentiaExport.name",          confModules: [], confModulesLeft: [], confModulesRight: [],                                                    desc: "",                                                                 argumentsLeft: [], argumentsRight: []};
  this.widget["essentiaFilter"]                     = {sprite: "essentiaFilterPiece.png"                ,width: 80, height: 44,  name: "essentiaFilter.name",          confModules: [], confModulesLeft: [], confModulesRight: [],                                                    desc: "",                                                                 argumentsLeft: [], argumentsRight: []};
  this.widget["essentiaImport"]                     = {sprite: "essentiaImportPiece.png"                ,width: 80, height: 108, name: "essentiaImport.name",          confModules: [], confModulesLeft: [], confModulesRight: [],                                                    desc: "",                                                                 argumentsLeft: [], argumentsRight: []};
  this.widget["externalProgram"]                    = {sprite: "externalProgramPiece.png"               ,width: 80, height: 64,  name: "External Program",             confModules: [], confModulesLeft: [], confModulesRight: [],                                                    desc: "",                                                                 argumentsLeft: ["area"], argumentsRight: ["area"]};
  this.widget["goto"]                               = {sprite: "gotoPiece.png"                          ,width: 80, height: 64,  name: "Go to location",               confModules: ["doneWhen"], confModulesLeft: [], confModulesRight: [],                                          desc: "Done when {0}",                                                    argumentsLeft: ["area"], argumentsRight: ["area"]};
  this.widget["inventoryExport"]                    = {sprite: "inventoryExportPiece.png"               ,width: 80, height: 108, name: "Export to Inventory",          confModules: [], confModulesLeft: ["sides", "useCount"], confModulesRight: [],                                 desc: "Accessing sides:\n{0}",                                            argumentsLeft: ["area", "itemFilter"], argumentsRight: ["area", "itemFilter"]};
  this.widget["inventoryImport"]                    = {sprite: "inventoryImportPiece.png"               ,width: 80, height: 108, name: "Import from Inventory",        confModules: [], confModulesLeft: ["sides", "useCount"], confModulesRight: [],                                 desc: "Accessing sides:\n{0}",                                            argumentsLeft: ["area", "itemFilter"], argumentsRight: ["area", "itemFilter"]};
  this.widget["itemAssign"]                         = {sprite: "itemAssignPiece.png"                    ,width: 80, height: 64,  name: "Item Assignment",              confModules: ["variableName"], confModulesLeft: [], confModulesRight: [],                                      desc: "Setting variable: \"{0}\"",                                        argumentsLeft: [], argumentsRight: ["itemFilter"]};
  this.widget["dropItem"]                           = {sprite: "itemDropPiece.png"                      ,width: 80, height: 108, name: "Drop Items",                   confModules: [], confModulesLeft: ["sides", "dropMethod"], confModulesRight: [],                               desc: "",                                                                 argumentsLeft: ["area", "itemFilter"], argumentsRight: ["area", "itemFilter"]};
  this.widget["itemFilter"]                         = {sprite: "itemFilterPiece.png"                    ,width: 80, height: 44,  name: "Item Filter",                  confModules: [], confModulesLeft: [], confModulesRight: [],                                                    desc: "Current filter:\n{0}\n{1} metadata / damage values\n{2} NBT tags", argumentsLeft: ["itemFilter"], argumentsRight: ["itemFilter"]};
  this.widget["pickupItem"]                         = {sprite: "itemPickPiece.png"                      ,width: 80, height: 108, name: "Pick up Items",                confModules: [], confModulesLeft: [], confModulesRight: [],                                                    desc: "",                                                                 argumentsLeft: ["area", "itemFilter"], argumentsRight: ["area", "itemFilter"]};
  this.widget["jump"]                               = {sprite: "jumpPiece.png"                          ,width: 80, height: 44,  name: "Jump",                         confModules: [], confModulesLeft: [], confModulesRight: [],                                                    desc: "",                                                                 argumentsLeft: [], argumentsRight: ["text"]};
  this.widget["label"]                              = {sprite: "labelPiece.png"                         ,width: 80, height: 64,  name: "Label",                        confModules: [], confModulesLeft: [], confModulesRight: [],                                                    desc: "",                                                                 argumentsLeft: [], argumentsRight: ["text"]};
  this.widget["liquidExport"]                       = {sprite: "liquidExportPiece.png"                  ,width: 80, height: 108, name: "Export Liquid",                confModules: [], confModulesLeft: ["sides", "useCount"], confModulesRight: [],                                 desc: "Accessing sides:\n{0}",                                            argumentsLeft: ["area", "fluidFilter"], argumentsRight: ["area", "fluidFilter"]};
  this.widget["liquidImport"]                       = {sprite: "liquidImportPiece.png"                  ,width: 80, height: 108, name: "Import Liquid",                confModules: [], confModulesLeft: ["sides", "useCount"], confModulesRight: [],                                 desc: "Accessing sides:\n{0}",                                            argumentsLeft: ["area", "fluidFilter"], argumentsRight: ["area", "fluidFilter"]};
  this.widget["liquidFilter"]                       = {sprite: "liquidFilterPiece.png"                  ,width: 80, height: 44,  name: "Liquid Filter",                confModules: [], confModulesLeft: [], confModulesRight: [],                                                    desc: "Current filter:\n{0}",                                             argumentsLeft: ["fluidFilter"], argumentsRight: ["fluidFilter"]};
  this.widget["logistics"]                          = {sprite: "logisticsPiece.png"                     ,width: 80, height: 64,  name: "Logistics",                    confModules: [], confModulesLeft: [], confModulesRight: [],                                                    desc: "",                                                                 argumentsLeft: ["area"], argumentsRight: ["area"]};
  this.widget["place"]                              = {sprite: "placePiece.png"                         ,width: 80, height: 108, name: "Place",                        confModules: [], confModulesLeft: ["order", "direction", "limitInteractions"], confModulesRight: [],           desc: "Order: {0}\nPlacing direction: {1}",                               argumentsLeft: ["area", "itemFilter"], argumentsRight: ["area", "itemFilter"]};
  this.widget["rename"]                             = {sprite: "renamePiece.png"                        ,width: 80, height: 64,  name: "Rename Drone",                 confModules: [], confModulesLeft: [], confModulesRight: [],                                                    desc: "",                                                                 argumentsLeft: [], argumentsRight: ["text"]};
  this.widget["rfExport"]                           = {sprite: "RFExportPiece.png"                      ,width: 80, height: 64,  name: "Export RF",                    confModules: [], confModulesLeft: ["sides", "useCount"], confModulesRight: [],                                 desc: "Accessing sides:\n{0}",                                            argumentsLeft: ["area"], argumentsRight: ["area"]};
  this.widget["rfImport"]                           = {sprite: "RFImportPiece.png"                      ,width: 80, height: 64,  name: "Import RF",                    confModules: [], confModulesLeft: ["sides", "useCount"], confModulesRight: [],                                 desc: "Accessing sides:\n{0}",                                            argumentsLeft: ["area"], argumentsRight: ["area"]};
  this.widget["standby"]                            = {sprite: "standbyPiece.png"                       ,width: 60, height: 64,  name: "Standby",                      confModules: [], confModulesLeft: [], confModulesRight: [],                                                    desc: "",                                                                 argumentsLeft: [], argumentsRight: ["text"]};
  this.widget["start"]                              = {sprite: "startPiece.png"                         ,width: 60, height: 64,  name: "Start",                        confModules: [], confModulesLeft: [], confModulesRight: [],                                                    desc: "",                                                                 argumentsLeft: [], argumentsRight: []};
  this.widget["suicide"]                            = {sprite: "suicidePiece.png"                       ,width: 80, height: 44,  name: "Suicide",                      confModules: [], confModulesLeft: [], confModulesRight: [],                                                    desc: "",                                                                 argumentsLeft: [], argumentsRight: []};
  this.widget["teleport"]                           = {sprite: "teleportPiece.png"                      ,width: 80, height: 64,  name: "Teleport to location",         confModules: ["doneWhen"], confModulesLeft: [], confModulesRight: [],                                          desc: "Done when {0}",                                                    argumentsLeft: ["area"], argumentsRight: ["area"]};
  this.widget["text"]                               = {sprite: "textPiece.png"                          ,width: 80, height: 44,  name: "Text",                         confModules: ["text"], confModulesLeft: [], confModulesRight: [],                                              desc: "Value: {0}",                                                       argumentsLeft: ["text"], argumentsRight: ["text"]};
  this.widget["wait"]                               = {sprite: "waitPiece.png"                          ,width: 80, height: 64,  name: "Wait",                         confModules: [], confModulesLeft: [], confModulesRight: [],                                                    desc: "",                                                                 argumentsLeft: [], argumentsRight: ["text"]};
  this.widget["forEachCoordinate"]                  = {sprite: "forEachCoordinate.png"                  ,width: 80, height: 108,  name: "For Each Coordinate",         confModules: ["variableName"], confModulesLeft: [], confModulesRight: [],                                      desc: "",                                                                 argumentsLeft: ["area"], argumentsRight: ["area", "text"]};
  this.widget["forEachItem"]                        = {sprite: "forEachItem.png"                        ,width: 80, height: 108,  name: "For Each Item",               confModules: ["variableName"], confModulesLeft: [], confModulesRight: [],                                      desc: "",                                                                 argumentsLeft: [], argumentsRight: ["itemFilter", "text"]};

  this.argumentOffsetX = 15;
  this.argumentOffsetY = 44;
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
 *
 * @param parentWidgetId {Number}
 * @returns {Object}
 */
Widgets.prototype.getArguments = function(parentWidgetId)
{
  var argumentsFound = 0;

  var argumentsLeftLevel1 = [];
  var argumentsLeftLevel2 = [];
  var argumentsLeftLevel3 = [];
  var argumentsRightLevel1 = [];
  var argumentsRightLevel2 = [];
  var argumentsRightLevel3 = [];

  var widgetArray = Program.widgets.value;
  var parentWidget = widgetArray[parentWidgetId];

  var currentYLevel;
  var currentXLevel;
  var currentYPosition;
  var currentXPosition;
  var foundArgument = true;

  //This will be doing the left side, so x will be lower than the parent
  for (currentYLevel = 0; currentYLevel < this.maxArgumentLevel; currentYLevel++)
  {
    currentYPosition = parentWidget.y.value + (this.widgetArgumentOffsetY * currentYLevel);

    foundArgument = true;
    currentXLevel = 1;
    while (foundArgument)
    {
      currentXPosition = parentWidget.x.value - (this.widgetArgumentOffsetX * currentXLevel);
      if (typeof widgetPositionList[currentYPosition] != "undefined" && typeof widgetPositionList[currentYPosition][currentXPosition] != "undefined")
      {
        argumentsFound++;
        currentXLevel++;
        if (currentYLevel == 0)
          argumentsLeftLevel1.push(widgetPositionList[currentYPosition][currentXPosition]);
        else if (currentYLevel == 1)
          argumentsLeftLevel2.push(widgetPositionList[currentYPosition][currentXPosition]);
        else if (currentYLevel == 2)
          argumentsLeftLevel3.push(widgetPositionList[currentYPosition][currentXPosition]);
      }
      else
        foundArgument = false;
    }
  }

  //This will be doing the right side, so x will be lower than the parent
  for (currentYLevel = 0; currentYLevel < this.maxArgumentLevel; currentYLevel++)
  {
    currentYPosition = parentWidget.y.value + (this.widgetArgumentOffsetY * currentYLevel);

    foundArgument = true;
    currentXLevel = 1;
    while (foundArgument)
    {
      currentXPosition = parentWidget.x.value + (this.widgetArgumentOffsetX * currentXLevel);
      if (typeof widgetPositionList[currentYPosition] != "undefined" && typeof widgetPositionList[currentYPosition][currentXPosition] != "undefined")
      {
        argumentsFound++;
        currentXLevel++;
        if (currentYLevel == 0)
          argumentsRightLevel1.push(widgetPositionList[currentYPosition][currentXPosition]);
        else if (currentYLevel == 1)
          argumentsRightLevel2.push(widgetPositionList[currentYPosition][currentXPosition]);
        else if (currentYLevel == 2)
          argumentsRightLevel3.push(widgetPositionList[currentYPosition][currentXPosition]);
      }
      else
        foundArgument = false;
    }
  }

  return {argumentsFound: argumentsFound, left: {level1: argumentsLeftLevel1, level2: argumentsLeftLevel2, level3: argumentsLeftLevel3}, right: {level1: argumentsRightLevel1, level2: argumentsRightLevel2, level3: argumentsRightLevel3}};
};

/**
 * Looks for a possible parent widget for the given widget
 * @param widgetId {Number}
 * @return {Number|boolean}
 */
Widgets.prototype.getParentOfArgument = function(widgetId)
{
  var possibleParentPositions = [];
  var thisWidget = Program.widgets.value[widgetId];

  console.log("Widget " + widgetId + " at x" + thisWidget.x.value + " y" + thisWidget.y.value);

  possibleParentPositions.push({x: (thisWidget.x.value - widgets.widgetArgumentOffsetX), y: (thisWidget.y.value)});
  possibleParentPositions.push({x: (thisWidget.x.value - widgets.widgetArgumentOffsetX), y: (thisWidget.y.value - widgets.widgetArgumentOffsetY)});
  possibleParentPositions.push({x: (thisWidget.x.value - widgets.widgetArgumentOffsetX), y: (thisWidget.y.value - (widgets.widgetArgumentOffsetY * 2))});
  possibleParentPositions.push({x: (thisWidget.x.value + widgets.widgetArgumentOffsetX), y: (thisWidget.y.value)});
  possibleParentPositions.push({x: (thisWidget.x.value + widgets.widgetArgumentOffsetX), y: (thisWidget.y.value - widgets.widgetArgumentOffsetY)});
  possibleParentPositions.push({x: (thisWidget.x.value + widgets.widgetArgumentOffsetX), y: (thisWidget.y.value - (widgets.widgetArgumentOffsetY * 2))});

  console.log(possibleParentPositions);

  for (var i = 0; i < possibleParentPositions.length; i++)
  {
    var x = possibleParentPositions[i].x;
    var y = possibleParentPositions[i].y;
    console.log("Scan for widget at x" + x + " y" + y);
    if (widgetPositionList[y] != undefined && widgetPositionList[y] != null)
      if (widgetPositionList[y][x] != undefined && widgetPositionList[y][x] != null)
        return widgetPositionList[y][x];
  }
  return false;
};

/**
 * Returns the level the text argument will be at for the widget, or false if widget is not valid line root
 * @param widgetId {Number}
 * @returns {Number|Boolean}
 */
Widgets.prototype.widgetIsValidLineRoot = function(widgetId)
{
  var thisWidget = Program.widgets.value[widgetId];

  switch (thisWidget.name.value)
  {
    case "label":
      return 1;
    case "conditionBlock":
      return 3;
    case "conditionCoordinate":
      return 3;
    case "droneConditionEntity":
      return 2;
    case "conditionDroneEssentia":
      return 2;
    case "droneConditionItem":
      return 2;
    case "droneConditionLiquid":
      return 2;
    case "droneConditionPressure":
      return 1;
    case "droneConditionRF":
      return 1;
    case "conditionEntity":
      return 3;
    case "conditionEssentia":
      return 3;
    case "conditionItem":
      return 3;
    case "conditionItemInventory":
      return 3;
    case "conditionLiquidInventory":
      return 3;
    case "conditionPressure":
      return 2;
    case "conditionRedstone":
      return 2;
    case "conditionRF":
      return 2;
    default:
      return false;
  }
};