function Widgets(baseDir)
{
  if (baseDir)
    this.baseDir = baseDir;
  else
    this.baseDir = "progwidgets/";
  
  this.widget = {};
  this.widget["area"]                              = {sprite: "areaPiece.png"                          ,width: 80, height: 44,  name: "Area"                        , desc: "Area type: {0}"};
  this.widget["entityAttack"]                      = {sprite: "attackPiece.png"                        ,width: 80, height: 108, name: "Entity Attack"               , desc: ""};
  this.widget["blockRightClick"]                   = {sprite: "blockRightClickPiece.png"               ,width: 80, height: 108, name: "Right Click Block"           , desc: "Order: {0}\nPlacing direction: {1}"};
  this.widget["comment"]                           = {sprite: "commentPiece.png"                       ,width: 80, height: 64,  name: "Comment"                     , desc: "{0}"};
  this.widget["computerCraft"]                     = {sprite: "computerCraftPiece.png"                 ,width: 80, height: 64,  name: "Computer Control"            , desc: ""};
  this.widget["conditionBlock"]                    = {sprite: "conditionBlockPiece.png"                ,width: 80, height: 152, name: "Condition: Block"            , desc: "{0} >= 1"};
  this.widget["conditionCoordinate"]               = {sprite: "conditionCoordinatePiece.png"           ,width: 80, height: 152, name: "Condition: Coordinate"       , desc: "Condition: \"{0}\""};
  this.widget["droneConditionEntity"]              = {sprite: "conditionDroneEntityPiece.png"          ,width: 80, height: 108, name: "Drone Condition: Entity"     , desc: ""};
  this.widget["conditionDroneEssentia"]            = {sprite: "conditionDroneEssentiaPiece.png"        ,width: 80, height: 108, name: "Drone Condition: Essentia"   , desc: ""};
  this.widget["conditionDroneInventory"]           = {sprite: "conditionDroneInventoryPiece.png"       ,width: 80, height: 108, name: "Drone Condition: Inventory"  , desc: ""};
  this.widget["droneConditionLiquid"]              = {sprite: "conditionDroneLiquidPiece.png"          ,width: 80, height: 108, name: "Drone Condition: Liquid"     , desc: ""};
  this.widget["droneConditionPressure"]            = {sprite: "conditionDronePressurePiece.png"        ,width: 80, height: 64,  name: "Drone Condition: Pressure"   , desc: ""};
  this.widget["conditionDroneRF"]                  = {sprite: "conditionDroneRFPiece.png"              ,width: 80, height: 64,  name: "Drone Condition: RF"         , desc: ""};
  this.widget["conditionEntity"]                   = {sprite: "conditionEntityPiece.png"               ,width: 80, height: 152, name: "Condition: Entity"           , desc: "{0}"};
  this.widget["conditionEssentia"]                 = {sprite: "conditionEssentiaPiece.png"             ,width: 80, height: 152, name: "Condition: Essentia"         , desc: ""};
  this.widget["conditionItem"]                     = {sprite: "conditionItem.png"                      ,width: 80, height: 152, name: "Condition: Item Filter"      , desc: ""};
  this.widget["droneConditionItem"]                = {sprite: "conditionItem.png"                      ,width: 80, height: 152, name: "Drone Condition: Items"      , desc: ""};
  this.widget["conditionItemInventory"]            = {sprite: "conditionItemInventoryPiece.png"        ,width: 80, height: 152, name: "Condition: Items"            , desc: "Accessing sides:\n{0}\n{1}"};
  this.widget["conditionLiquidInventory"]          = {sprite: "conditionLiquidInventoryPiece.png"      ,width: 80, height: 152, name: "Condition: Liquid"           , desc: "Accessing sides:\n{0}\n{1}"};
  this.widget["conditionPressure"]                 = {sprite: "conditionPressurePiece.png"             ,width: 80, height: 108, name: "Condition: Pressure"         , desc: "Accessing sides:\n{0}\n{1}"};
  this.widget["conditionRedstone"]                 = {sprite: "conditionRedstonePiece.png"             ,width: 80, height: 108, name: "Condition: Redstone"         , desc: "Accessing sides:\n{0}\n{1}"};
  this.widget["conditionRF"]                       = {sprite: "conditionRFPiece.png"                   ,width: 80, height: 108, name: "Condition: RF"               , desc: ""};
  this.widget["coordinateOperationMultiplyDivide"] = {sprite: "coordinateOperationMultiplyDivide.png"  ,width: 80, height: 64,  name: "Coordinate Operator"         , desc: "Setting variable: \"{0}\""};
  this.widget["coordinateOperationPlusMinus"]      = {sprite: "coordinateOperationPlusMinus.png"       ,width: 80, height: 64,  name: "Coordinate Operator"         , desc: "Setting variable: \"{0}\""};
  this.widget["coordinateOperator"]                = {sprite: "coordinateOperationPlusMinus.png"       ,width: 80, height: 64,  name: "Coordinate Operator"         , desc: "Setting variable: \"{0}\""};
  this.widget["coordinate"]                        = {sprite: "coordinatePiece.png"                    ,width: 80, height: 44,  name: "Coordinate"                  , desc: "{0}"};
  this.widget["crafting"]                          = {sprite: "craftPiece.png"                         ,width: 80, height: 152, name: "Crafting"                    , desc: ""};
  this.widget["dig"]                               = {sprite: "digPiece.png"                           ,width: 80, height: 108, name: "Dig Area"                    , desc: "Order: {0}"};
  this.widget["emitRedstone"]                      = {sprite: "emitRedstonePiece.png"                  ,width: 80, height: 64,  name: "Emit Redstone"               , desc: "Affecting sides:\n{0}"};
  this.widget["entityExport"]                      = {sprite: "entityExportPiece.png"                  ,width: 80, height: 108, name: "Export Entity"               , desc: ""};
  this.widget["entityImport"]                      = {sprite: "entityImportPiece.png"                  ,width: 80, height: 108, name: "Import Entity"               , desc: ""};
  this.widget["entityRightClick"]                  = {sprite: "entityRightClickPiece.png"              ,width: 80, height: 108, name: "Right Click Entity"          , desc: ""};
  this.widget["essentiaExport"]                    = {sprite: "essentiaExportPiece.png"                ,width: 80, height: 108, name: "essentiaExport.name"         , desc: ""};
  this.widget["essentiaFilter"]                    = {sprite: "essentiaFilterPiece.png"                ,width: 80, height: 44,  name: "essentiaFilter.name"         , desc: ""};
  this.widget["essentiaImport"]                    = {sprite: "essentiaImportPiece.png"                ,width: 80, height: 108, name: "essentiaImport.name"         , desc: ""};
  this.widget["externalProgram"]                   = {sprite: "externalProgramPiece.png"               ,width: 80, height: 64,  name: "External Program"            , desc: ""};
  this.widget["goto"]                              = {sprite: "gotoPiece.png"                          ,width: 80, height: 64,  name: "Go to location"              , desc: "Done when {0}"};
  this.widget["inventoryExport"]                   = {sprite: "inventoryExportPiece.png"               ,width: 80, height: 108, name: "Export to Inventory"         , desc: "Accessing sides:\n{0}"};
  this.widget["inventoryImport"]                   = {sprite: "inventoryImportPiece.png"               ,width: 80, height: 108, name: "Import from Inventory"       , desc: "Accessing sides:\n{0}"};
  this.widget["itemAssign"]                        = {sprite: "itemAssignPiece.png"                    ,width: 80, height: 64,  name: "Item Assignment"             , desc: "Setting variable: \"{0}\""};
  this.widget["dropItem"]                          = {sprite: "itemDropPiece.png"                      ,width: 80, height: 108, name: "Drop Items"                  , desc: ""};
  this.widget["itemFilter"]                        = {sprite: "itemFilterPiece.png"                    ,width: 80, height: 44,  name: "Item Filter"                 , desc: "Current filter:\n{0}\n{1} metadata / damage values\n{2} NBT tags"};
  this.widget["pickupItem"]                        = {sprite: "itemPickPiece.png"                      ,width: 80, height: 108, name: "Pick up Items"               , desc: ""};
  this.widget["jump"]                              = {sprite: "jumpPiece.png"                          ,width: 80, height: 44,  name: "Jump"                        , desc: ""};
  this.widget["label"]                             = {sprite: "labelPiece.png"                         ,width: 80, height: 64,  name: "Label"                       , desc: ""};
  this.widget["liquidExport"]                      = {sprite: "liquidExportPiece.png"                  ,width: 80, height: 108, name: "Export Liquid"               , desc: "Accessing sides:\n{0}"};
  this.widget["liquidFilter"]                      = {sprite: "liquidFilterPiece.png"                  ,width: 80, height: 44,  name: "Liquid Filter"               , desc: "Current filter:\n{0}"};
  this.widget["liquidImport"]                      = {sprite: "liquidImportPiece.png"                  ,width: 80, height: 108, name: "Import Liquid"               , desc: "Accessing sides:\n{0}"};
  this.widget["logistics"]                         = {sprite: "logisticsPiece.png"                     ,width: 80, height: 64,  name: "Logistics"                   , desc: ""};
  this.widget["place"]                             = {sprite: "placePiece.png"                         ,width: 80, height: 108, name: "Place"                       , desc: "Order: {0}\nPlacing direction: {1}"};
  this.widget["rename"]                            = {sprite: "renamePiece.png"                        ,width: 80, height: 64,  name: "Rename Drone"                , desc: ""};
  this.widget["rfExport"]                          = {sprite: "RFExportPiece.png"                      ,width: 80, height: 64,  name: "Export RF"                   , desc: ""};
  this.widget["rfImport"]                          = {sprite: "RFImportPiece.png"                      ,width: 80, height: 64,  name: "Import RF"                   , desc: ""};
  this.widget["standby"]                           = {sprite: "standbyPiece.png"                       ,width: 60, height: 64,  name: "Standby"                     , desc: ""};
  this.widget["start"]                             = {sprite: "startPiece.png"                         ,width: 60, height: 64,  name: "Start"                       , desc: ""};
  this.widget["suicide"]                           = {sprite: "suicidePiece.png"                       ,width: 80, height: 44,  name: "Suicide"                     , desc: ""};
  this.widget["teleport"]                          = {sprite: "teleportPiece.png"                      ,width: 80, height: 64,  name: "Teleport to location"        , desc: "Done when {0}"};
  this.widget["text"]                              = {sprite: "textPiece.png"                          ,width: 80, height: 44,  name: "Text"                        , desc: "Value: {0}"};
  this.widget["wait"]                              = {sprite: "waitPiece.png"                          ,width: 80, height: 64,  name: "Wait"                        , desc: ""};
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
    return "???";
};

/**
 *
 * @param id {Number}
 */
Widgets.prototype.getTooltip = function(id)
{
  if (id != undefined && id != null)
  {
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
 * Send -1 to receive number of types (Remember to account for starting at 0)
 * @param type
 * @returns {String|Number}
 */
Widgets.prototype.getAreaType = function(type)
{
  switch (type)
  {
    case -1: return 19;
    case  0: return "Filled";
    case  1: return "Frame";
    case  2: return "Walls";
    case  3: return "Sphere";
    case  4: return "Line";
    case  5: return "X-Wall";
    case  6: return "Y-Wall";
    case  7: return "Y-Wall";
    case  8: return "Y-Wall";
    case  9: return "Y-Wall";
    case 10: return "Z-Wall";
    case 11: return "X-Cylinder";
    case 12: return "Y-Cylinder";
    case 13: return "Z-Cylinder";
    case 14: return "X-Pyramid";
    case 15: return "Y-Pyramid";
    case 16: return "Z-Pyramid";
    case 17: return "Grid";
    case 18: return "Random";
    default: return "Unknown Type";
  }
};

/**
 * @param direction {Number}
 * @returns {String}
 */
Widgets.prototype.getSingleDirection = function(direction)
{
  switch (direction)
  {
    case  0: return "Bottom";
    case  1: return "Top";
    case  2: return "North";
    case  3: return "South";
    case  4: return "West";
    case  5: return "East";
  }
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