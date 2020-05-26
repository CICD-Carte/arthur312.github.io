var size = 0;
var placement = 'point';
function categories_NombredAOC_5(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {case '2':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(252,252,252,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case '3':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(0,0,0,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;}};

var style_NombredAOC_5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("NBR_AOC");
    var labelText = "";
    size = 0;
    var labelFont = "16.9px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("TYPE_AOC") !== null && resolution > 0 && resolution < 7) {
        labelText = String(feature.get("TYPE_AOC"));
    }
    
var style = categories_NombredAOC_5(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
};
