ol.proj.get("EPSG:2154").setExtent([344633.066266, 6929547.339425, 392324.176565, 6959035.266426]);
var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_Vergers_Cotentin_AOC_0 = new ol.format.GeoJSON();
var features_Vergers_Cotentin_AOC_0 = format_Vergers_Cotentin_AOC_0.readFeatures(json_Vergers_Cotentin_AOC_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Vergers_Cotentin_AOC_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Vergers_Cotentin_AOC_0.addFeatures(features_Vergers_Cotentin_AOC_0);var lyr_Vergers_Cotentin_AOC_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vergers_Cotentin_AOC_0, 
                style: style_Vergers_Cotentin_AOC_0,
    title: 'Vergers_Cotentin_AOC<br />\
    <img src="styles/legend/Vergers_Cotentin_AOC_0_0.png" /> Pourcentage de surface plantée par verger<br />\
    <img src="styles/legend/Vergers_Cotentin_AOC_0_1.png" />  2% - 21% <br />\
    <img src="styles/legend/Vergers_Cotentin_AOC_0_2.png" />  21% - 45% <br />\
    <img src="styles/legend/Vergers_Cotentin_AOC_0_3.png" />  45% - 69% <br />\
    <img src="styles/legend/Vergers_Cotentin_AOC_0_4.png" />  69% - 95% <br />'
        });var format_Parcelles_Cotentin_AOC_1 = new ol.format.GeoJSON();
var features_Parcelles_Cotentin_AOC_1 = format_Parcelles_Cotentin_AOC_1.readFeatures(json_Parcelles_Cotentin_AOC_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Parcelles_Cotentin_AOC_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Parcelles_Cotentin_AOC_1.addFeatures(features_Parcelles_Cotentin_AOC_1);var lyr_Parcelles_Cotentin_AOC_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Parcelles_Cotentin_AOC_1, 
                style: style_Parcelles_Cotentin_AOC_1,
                title: '<img src="styles/legend/Parcelles_Cotentin_AOC_1.png" /> Parcelles_Cotentin_AOC'
            });

lyr_Vergers_Cotentin_AOC_0.setVisible(true);lyr_Parcelles_Cotentin_AOC_1.setVisible(true);
var layersList = [baseLayer,lyr_Vergers_Cotentin_AOC_0,lyr_Parcelles_Cotentin_AOC_1];
lyr_Vergers_Cotentin_AOC_0.set('fieldAliases', {'IDU': 'IDU', 'NOM_COM': 'NOM_COM', 'INAO': 'INAO', 'RA': 'RA', 'RE': 'RE', 'NOM_VERGER': 'NOM_VERGER', 'ID_VERGER': 'ID_VERGER', 'MO': 'MO', 'AR': 'AR', 'AO': 'AO', 'CP': 'CP', 'SURFACE_HA': 'SURFACE_HA', 'SURF_PLANT': 'SURF_PLANT', 'N_SURFPLAN': 'N_SURFPLAN', });
lyr_Parcelles_Cotentin_AOC_1.set('fieldAliases', {'IDU': 'IDU', 'NOM_COM': 'NOM_COM', 'INAO': 'INAO', 'NOM_VERGER': 'NOM_VERGER', 'ID_VERGER': 'ID_VERGER', 'MO': 'MO', 'AR': 'AR', 'AO': 'AO', 'CP': 'CP', 'INSEE': 'INSEE', 'Surafce_Ha': 'Surafce_Ha', });
lyr_Vergers_Cotentin_AOC_0.set('fieldImages', {'IDU': 'TextEdit', 'NOM_COM': 'TextEdit', 'INAO': 'TextEdit', 'RA': 'TextEdit', 'RE': 'TextEdit', 'NOM_VERGER': 'TextEdit', 'ID_VERGER': 'TextEdit', 'MO': 'TextEdit', 'AR': 'TextEdit', 'AO': 'TextEdit', 'CP': 'TextEdit', 'SURFACE_HA': 'TextEdit', 'SURF_PLANT': 'TextEdit', 'N_SURFPLAN': 'TextEdit', });
lyr_Parcelles_Cotentin_AOC_1.set('fieldImages', {'IDU': 'TextEdit', 'NOM_COM': 'TextEdit', 'INAO': 'TextEdit', 'NOM_VERGER': 'TextEdit', 'ID_VERGER': 'TextEdit', 'MO': 'TextEdit', 'AR': 'TextEdit', 'AO': 'TextEdit', 'CP': 'TextEdit', 'INSEE': 'TextEdit', 'Surafce_Ha': 'TextEdit', });
lyr_Vergers_Cotentin_AOC_0.set('fieldLabels', {'IDU': 'header label', 'NOM_COM': 'header label', 'INAO': 'header label', 'RA': 'header label', 'RE': 'header label', 'NOM_VERGER': 'header label', 'ID_VERGER': 'header label', 'MO': 'header label', 'AR': 'header label', 'AO': 'header label', 'CP': 'header label', 'SURFACE_HA': 'header label', 'SURF_PLANT': 'header label', 'N_SURFPLAN': 'header label', });
lyr_Parcelles_Cotentin_AOC_1.set('fieldLabels', {'IDU': 'header label', 'NOM_COM': 'header label', 'INAO': 'header label', 'NOM_VERGER': 'header label', 'ID_VERGER': 'header label', 'MO': 'header label', 'AR': 'header label', 'AO': 'header label', 'CP': 'header label', 'INSEE': 'header label', 'Surafce_Ha': 'header label', });
lyr_Parcelles_Cotentin_AOC_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});