function Widgets(baseDir)
{
  if (baseDir)
    this.baseDir = baseDir;
  else
    this.baseDir = "progwidgets/";
  
  this.widget = {};
  this.widget["area"]                              = {sprite: "areaPiece.png"                          ,width: 80, height: 44,  name: "Area"                        , desc: "Area type: {0}"};
  this.widget["entityAttack"]                      = {sprite: "attackPiece.png"                        ,width: 80, height: 108, name: "Entity Attack"               };
  this.widget["blockRightClick"]                   = {sprite: "blockRightClickPiece.png"               ,width: 80, height: 108, name: "Right Click Block"           , desc: "Order: {0}\nPlacing direction: {1}"};
  this.widget["comment"]                           = {sprite: "commentPiece.png"                       ,width: 80, height: 64,  name: "Comment"                     };
  this.widget["computerCraft"]                     = {sprite: "computerCraftPiece.png"                 ,width: 80, height: 64,  name: "Computer Control"            };
  this.widget["conditionBlock"]                    = {sprite: "conditionBlockPiece.png"                ,width: 80, height: 152, name: "Condition: Block"            , desc: "Accessing sides:\n{0}\n{1}"};
  this.widget["conditionCoordinate"]               = {sprite: "conditionCoordinatePiece.png"           ,width: 80, height: 152, name: "Condition: Coordinate"       , desc: "Condition: \"{0}\""};
  this.widget["droneConditionEntity"]              = {sprite: "conditionDroneEntityPiece.png"          ,width: 80, height: 108, name: "Drone Condition: Entity"     };
  this.widget["conditionDroneEssentia"]            = {sprite: "conditionDroneEssentiaPiece.png"        ,width: 80, height: 108, name: "Drone Condition: Essentia"   };
  this.widget["conditionDroneInventory"]           = {sprite: "conditionDroneInventoryPiece.png"       ,width: 80, height: 108, name: "Drone Condition: Inventory"  };
  this.widget["droneConditionLiquid"]              = {sprite: "conditionDroneLiquidPiece.png"          ,width: 80, height: 108, name: "Drone Condition: Liquid"     };
  this.widget["droneConditionPressure"]            = {sprite: "conditionDronePressurePiece.png"        ,width: 80, height: 64,  name: "Drone Condition: Pressure"   };
  this.widget["conditionDroneRF"]                  = {sprite: "conditionDroneRFPiece.png"              ,width: 80, height: 64,  name: "Drone Condition: RF"         };
  this.widget["conditionEntity"]                   = {sprite: "conditionEntityPiece.png"               ,width: 80, height: 152, name: "Condition: Entity"           , desc: "{1}"};
  this.widget["conditionEssentia"]                 = {sprite: "conditionEssentiaPiece.png"             ,width: 80, height: 152, name: "Condition: Essentia"         };
  this.widget["conditionItem"]                     = {sprite: "conditionItem.png"                      ,width: 80, height: 152, name: "Condition: Item Filter"      };
  this.widget["droneConditionItem"]                = {sprite: "conditionItem.png"                      ,width: 80, height: 152, name: "Drone Condition: Items"      };
  this.widget["conditionItemInventory"]            = {sprite: "conditionItemInventoryPiece.png"        ,width: 80, height: 152, name: "Condition: Items"            , desc: "Accessing sides:\n{0}\n{1}"};
  this.widget["conditionLiquidInventory"]          = {sprite: "conditionLiquidInventoryPiece.png"      ,width: 80, height: 152, name: "Condition: Liquid"           , desc: "Accessing sides:\n{0}\n{1}"};
  this.widget["conditionPressure"]                 = {sprite: "conditionPressurePiece.png"             ,width: 80, height: 108, name: "Condition: Pressure"         , desc: "Accessing sides:\n{0}\n{1}"};
  this.widget["conditionRedstone"]                 = {sprite: "conditionRedstonePiece.png"             ,width: 80, height: 108, name: "Condition: Redstone"         , desc: "Accessing sides:\n{0}\n{1}"};
  this.widget["conditionRF"]                       = {sprite: "conditionRFPiece.png"                   ,width: 80, height: 108, name: "Condition: RF"               };
  this.widget["coordinateOperationMultiplyDivide"] = {sprite: "coordinateOperationMultiplyDivide.png"  ,width: 80, height: 64,  name: "Coordinate Operator"         , desc: "Setting variable: \"{0}\""};
  this.widget["coordinateOperationPlusMinus"]      = {sprite: "coordinateOperationPlusMinus.png"       ,width: 80, height: 64,  name: "Coordinate Operator"         , desc: "Setting variable: \"{0}\""};
  this.widget["coordinate"]                        = {sprite: "coordinatePiece.png"                    ,width: 80, height: 44,  name: "Coordinate"                  , desc: "X: {0}, Y: {1}, Z: {2}"};
  this.widget["crafting"]                          = {sprite: "craftPiece.png"                         ,width: 80, height: 152, name: "Crafting"                    };
  this.widget["dig"]                               = {sprite: "digPiece.png"                           ,width: 80, height: 108, name: "Dig Area"                    , desc: "Order: {0}"};
  this.widget["emitRedstone"]                      = {sprite: "emitRedstonePiece.png"                  ,width: 80, height: 64,  name: "Emit Redstone"               , desc: "Affecting sides:\n{0}"};
  this.widget["entityExport"]                      = {sprite: "entityExportPiece.png"                  ,width: 80, height: 108, name: "Export Entity"               };
  this.widget["entityImport"]                      = {sprite: "entityImportPiece.png"                  ,width: 80, height: 108, name: "Import Entity"               };
  this.widget["entityRightClick"]                  = {sprite: "entityRightClickPiece.png"              ,width: 80, height: 108, name: "Right Click Entity"          };
  this.widget["essentiaExport"]                    = {sprite: "essentiaExportPiece.png"                ,width: 80, height: 108, name: "essentiaExport.name"         };
  this.widget["essentiaFilter"]                    = {sprite: "essentiaFilterPiece.png"                ,width: 80, height: 44,  name: "essentiaFilter.name"         };
  this.widget["essentiaImport"]                    = {sprite: "essentiaImportPiece.png"                ,width: 80, height: 108, name: "essentiaImport.name"         };
  this.widget["externalProgram"]                   = {sprite: "externalProgramPiece.png"               ,width: 80, height: 64,  name: "External Program"            };
  this.widget["goto"]                              = {sprite: "gotoPiece.png"                          ,width: 80, height: 64,  name: "Go to location"              , desc: "Done when {0}"};
  this.widget["inventoryExport"]                   = {sprite: "inventoryExportPiece.png"               ,width: 80, height: 108, name: "Export to Inventory"         , desc: "Accessing sides:\n{0}"};
  this.widget["inventoryImport"]                   = {sprite: "inventoryImportPiece.png"               ,width: 80, height: 108, name: "Import from Inventory"       , desc: "Accessing sides:\n{0}"};
  this.widget["itemAssign"]                        = {sprite: "itemAssignPiece.png"                    ,width: 80, height: 64,  name: "Item Assignment"             , desc: "Setting variable: \"{0}\""};
  this.widget["dropItem"]                          = {sprite: "itemDropPiece.png"                      ,width: 80, height: 108, name: "Drop Items"                  };
  this.widget["itemFilter"]                        = {sprite: "itemFilterPiece.png"                    ,width: 80, height: 44,  name: "Item Filter"                 , desc: "Current filter:\n{0}\n{1} metadata / damage values\n{2} NBT tags"};
  this.widget["pickupItem"]                        = {sprite: "itemPickPiece.png"                      ,width: 80, height: 108, name: "Pick up Items"               };
  this.widget["jump"]                              = {sprite: "jumpPiece.png"                          ,width: 80, height: 44,  name: "Jump"                        };
  this.widget["label"]                             = {sprite: "labelPiece.png"                         ,width: 80, height: 64,  name: "Label"                       };
  this.widget["liquidExport"]                      = {sprite: "liquidExportPiece.png"                  ,width: 80, height: 108, name: "Export Liquid"               , desc: "Accessing sides:\n{0}"};
  this.widget["liquidFilter"]                      = {sprite: "liquidFilterPiece.png"                  ,width: 80, height: 44,  name: "Liquid Filter"               , desc: "Current filter:\n{0}"};
  this.widget["liquidImport"]                      = {sprite: "liquidImportPiece.png"                  ,width: 80, height: 108, name: "Import Liquid"               , desc: "Accessing sides:\n{0}"};
  this.widget["logistics"]                         = {sprite: "logisticsPiece.png"                     ,width: 80, height: 64,  name: "Logistics"                   };
  this.widget["place"]                             = {sprite: "placePiece.png"                         ,width: 80, height: 108, name: "Place"                       , desc: "Order: {0}\nPlacing direction: {1}"};
  this.widget["rename"]                            = {sprite: "renamePiece.png"                        ,width: 80, height: 64,  name: "Rename Drone"                };
  this.widget["RFExport"]                          = {sprite: "RFExportPiece.png"                      ,width: 80, height: 64,  name: "Export RF"                   };
  this.widget["RFImport"]                          = {sprite: "RFImportPiece.png"                      ,width: 80, height: 64,  name: "Import RF"                   };
  this.widget["standby"]                           = {sprite: "standbyPiece.png"                       ,width: 60, height: 64,  name: "Standby"                     };
  this.widget["start"]                             = {sprite: "startPiece.png"                         ,width: 60, height: 64,  name: "Start"                       };
  this.widget["suicide"]                           = {sprite: "suicidePiece.png"                       ,width: 80, height: 44,  name: "Suicide"                     };
  this.widget["teleport"]                          = {sprite: "teleportPiece.png"                      ,width: 80, height: 64,  name: "Teleport to location"        , desc: "Done when {0}"};
  this.widget["text"]                              = {sprite: "textPiece.png"                          ,width: 80, height: 44,  name: "Text"                        , desc: "Value: {0}"};
  this.widget["wait"]                              = {sprite: "waitPiece.png"                          ,width: 80, height: 64,  name: "Wait"                        };
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
  if (name == "coordinateOperator")
    name = "coordinateOperationMultiplyDivide";

  if (this.widget[name])
    return {width: this.widget[name].width, height: this.widget[name].height};
  else
    return false;
};

Widgets.prototype.getName = function(name)
{
  if (name == "coordinateOperator")
    name = "coordinateOperationMultiplyDivide";

  if (this.widget[name])
    return this.widget[name].name;
  else
    return "???";
};