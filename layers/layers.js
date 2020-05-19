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
var format_Parcelle50_entier_0 = new ol.format.GeoJSON();
var features_Parcelle50_entier_0 = format_Parcelle50_entier_0.readFeatures(json_Parcelle50_entier_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcelle50_entier_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Parcelle50_entier_0.addFeatures(features_Parcelle50_entier_0);var lyr_Parcelle50_entier_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Parcelle50_entier_0, 
                style: style_Parcelle50_entier_0,
                title: '<img src="styles/legend/Parcelle50_entier_0.png" /> Parcelle50_entier'
            });var format_Annee_plantation_1 = new ol.format.GeoJSON();
var features_Annee_plantation_1 = format_Annee_plantation_1.readFeatures(json_Annee_plantation_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Annee_plantation_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Annee_plantation_1.addFeatures(features_Annee_plantation_1);var lyr_Annee_plantation_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Annee_plantation_1, 
                style: style_Annee_plantation_1,
    title: 'Annee_plantation<br />\
    <img src="styles/legend/Annee_plantation_1_0.png" />  1947 - 1964 <br />\
    <img src="styles/legend/Annee_plantation_1_1.png" />  1964 - 1982 <br />\
    <img src="styles/legend/Annee_plantation_1_2.png" />  1982 - 1999 <br />\
    <img src="styles/legend/Annee_plantation_1_3.png" />  1999 - 2016 <br />'
        });var format_pourcent_plant_2 = new ol.format.GeoJSON();
var features_pourcent_plant_2 = format_pourcent_plant_2.readFeatures(json_pourcent_plant_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pourcent_plant_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_pourcent_plant_2.addFeatures(features_pourcent_plant_2);var lyr_pourcent_plant_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pourcent_plant_2, 
                style: style_pourcent_plant_2,
    title: 'pourcent_plant<br />\
    <img src="styles/legend/pourcent_plant_2_0.png" />  2 - 25 <br />\
    <img src="styles/legend/pourcent_plant_2_1.png" />  25 - 48 <br />\
    <img src="styles/legend/pourcent_plant_2_2.png" />  48 - 71 <br />\
    <img src="styles/legend/pourcent_plant_2_3.png" />  71 - 95 <br />'
        });var format_densit_verger_3 = new ol.format.GeoJSON();
var features_densit_verger_3 = format_densit_verger_3.readFeatures(json_densit_verger_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_densit_verger_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_densit_verger_3.addFeatures(features_densit_verger_3);var lyr_densit_verger_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_densit_verger_3, 
                style: style_densit_verger_3,
    title: 'densité_verger<br />\
    <img src="styles/legend/densit_verger_3_0.png" />  83 - 312 <br />\
    <img src="styles/legend/densit_verger_3_1.png" />  312 - 542 <br />\
    <img src="styles/legend/densit_verger_3_2.png" />  542 - 771 <br />\
    <img src="styles/legend/densit_verger_3_3.png" />  771 - 1000 <br />'
        });var format_Nb_Variete_4 = new ol.format.GeoJSON();
var features_Nb_Variete_4 = format_Nb_Variete_4.readFeatures(json_Nb_Variete_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nb_Variete_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Nb_Variete_4.addFeatures(features_Nb_Variete_4);var lyr_Nb_Variete_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nb_Variete_4, 
                style: style_Nb_Variete_4,
    title: 'Nb_Variete<br />\
    <img src="styles/legend/Nb_Variete_4_0.png" />  1 - 9 <br />\
    <img src="styles/legend/Nb_Variete_4_1.png" />  9 - 18 <br />\
    <img src="styles/legend/Nb_Variete_4_2.png" />  18 - 26 <br />\
    <img src="styles/legend/Nb_Variete_4_3.png" />  26 - 34 <br />'
        });

lyr_Parcelle50_entier_0.setVisible(true);lyr_Annee_plantation_1.setVisible(true);lyr_pourcent_plant_2.setVisible(true);lyr_densit_verger_3.setVisible(true);lyr_Nb_Variete_4.setVisible(true);
var layersList = [baseLayer,lyr_Parcelle50_entier_0,lyr_Annee_plantation_1,lyr_pourcent_plant_2,lyr_densit_verger_3,lyr_Nb_Variete_4];
lyr_Parcelle50_entier_0.set('fieldAliases', {'IDU': 'IDU', 'NOM_COM': 'NOM_COM', 'INAO': 'INAO', 'NOM_VERGER': 'NOM_VERGER', 'ID_VERGER': 'ID_VERGER', 'MO': 'MO', 'AR': 'AR', 'AO': 'AO', 'CP': 'CP', 'INSEE': 'INSEE', 'Surafce_Ha': 'Surafce_Ha', });
lyr_Annee_plantation_1.set('fieldAliases', {'IDU': 'IDU', 'NOM_COM': 'NOM_COM', 'INAO': 'INAO', 'NOM_VERGER': 'NOM_VERGER', 'CP': 'CP', 'IDVERGER': 'IDVERGER', 'TYPE_AOC': 'TYPE_AOC', 'MODCULTURE': 'MODCULTURE', 'ARBREISOLE': 'ARBREISOLE', 'SURFVERGER': 'SURFVERGER', 'SURFPLANT': 'SURFPLANT', 'P_SURFPLAN': 'P_SURFPLAN', 'TOTALARBRE': 'TOTALARBRE', 'NB_ARBRES': 'NB_ARBRES', 'VERGERDENS': 'VERGERDENS', 'ANNEE': 'ANNEE', });
lyr_pourcent_plant_2.set('fieldAliases', {'NOM_COM': 'NOM_COM', 'INAO': 'INAO', 'NON_VERGER': 'NON_VERGER', 'IDVERGER': 'IDVERGER', 'TYPEAOC': 'TYPEAOC', 'MODECULTUR': 'MODECULTUR', 'ARBREISOLE': 'ARBREISOLE', 'SURFPARCEL': 'SURFPARCEL', 'SURFVERGER': 'SURFVERGER', 'P_SURFPLAN': 'P_SURFPLAN', });
lyr_densit_verger_3.set('fieldAliases', {'IDU': 'IDU', 'NOM_COM': 'NOM_COM', 'INAO': 'INAO', 'NOM_VERGER': 'NOM_VERGER', 'CP': 'CP', 'IDVERGER': 'IDVERGER', 'TYPE_AOC': 'TYPE_AOC', 'MODCULTURE': 'MODCULTURE', 'ARBREISOLE': 'ARBREISOLE', 'SURFVERGER': 'SURFVERGER', 'SURFPLANT': 'SURFPLANT', 'P_SURFPLAN': 'P_SURFPLAN', 'TOTALARBRE': 'TOTALARBRE', 'NB_ARBRES': 'NB_ARBRES', 'VERGERDENS': 'VERGERDENS', 'ANNEE': 'ANNEE', });
lyr_Nb_Variete_4.set('fieldAliases', {'IDU': 'IDU', 'NOM_COM': 'NOM_COM', 'INAO': 'INAO', 'NOM_VERGER': 'NOM_VERGER', 'CP': 'CP', 'IDVERGER': 'IDVERGER', 'TYPE_AOC': 'TYPE_AOC', 'MODCULTURE': 'MODCULTURE', 'ARBREISOLE': 'ARBREISOLE', 'SURFVERGER': 'SURFVERGER', 'SURFPLANT': 'SURFPLANT', 'P_SURFPLAN': 'P_SURFPLAN', 'TOTALARBRE': 'TOTALARBRE', 'NB_ARBRES': 'NB_ARBRES', 'VERGERDENS': 'VERGERDENS', 'ANNEE': 'ANNEE', });
lyr_Parcelle50_entier_0.set('fieldImages', {'IDU': 'TextEdit', 'NOM_COM': 'TextEdit', 'INAO': 'TextEdit', 'NOM_VERGER': 'TextEdit', 'ID_VERGER': 'TextEdit', 'MO': 'TextEdit', 'AR': 'TextEdit', 'AO': 'TextEdit', 'CP': 'TextEdit', 'INSEE': 'TextEdit', 'Surafce_Ha': 'TextEdit', });
lyr_Annee_plantation_1.set('fieldImages', {'IDU': 'TextEdit', 'NOM_COM': 'TextEdit', 'INAO': 'TextEdit', 'NOM_VERGER': 'TextEdit', 'CP': 'TextEdit', 'IDVERGER': 'TextEdit', 'TYPE_AOC': 'TextEdit', 'MODCULTURE': 'TextEdit', 'ARBREISOLE': 'TextEdit', 'SURFVERGER': 'TextEdit', 'SURFPLANT': 'TextEdit', 'P_SURFPLAN': 'TextEdit', 'TOTALARBRE': 'TextEdit', 'NB_ARBRES': 'TextEdit', 'VERGERDENS': 'TextEdit', 'ANNEE': 'TextEdit', });
lyr_pourcent_plant_2.set('fieldImages', {'NOM_COM': 'TextEdit', 'INAO': 'TextEdit', 'NON_VERGER': 'TextEdit', 'IDVERGER': 'TextEdit', 'TYPEAOC': 'TextEdit', 'MODECULTUR': 'TextEdit', 'ARBREISOLE': 'TextEdit', 'SURFPARCEL': 'TextEdit', 'SURFVERGER': 'TextEdit', 'P_SURFPLAN': 'TextEdit', });
lyr_densit_verger_3.set('fieldImages', {'IDU': 'TextEdit', 'NOM_COM': 'TextEdit', 'INAO': 'TextEdit', 'NOM_VERGER': 'TextEdit', 'CP': 'TextEdit', 'IDVERGER': 'TextEdit', 'TYPE_AOC': 'TextEdit', 'MODCULTURE': 'TextEdit', 'ARBREISOLE': 'TextEdit', 'SURFVERGER': 'TextEdit', 'SURFPLANT': 'TextEdit', 'P_SURFPLAN': 'TextEdit', 'TOTALARBRE': 'TextEdit', 'NB_ARBRES': 'TextEdit', 'VERGERDENS': 'TextEdit', 'ANNEE': 'TextEdit', });
lyr_Nb_Variete_4.set('fieldImages', {'IDU': 'TextEdit', 'NOM_COM': 'TextEdit', 'INAO': 'TextEdit', 'NOM_VERGER': 'TextEdit', 'CP': 'TextEdit', 'IDVERGER': 'TextEdit', 'TYPE_AOC': 'TextEdit', 'MODCULTURE': 'TextEdit', 'ARBREISOLE': 'TextEdit', 'SURFVERGER': 'TextEdit', 'SURFPLANT': 'TextEdit', 'P_SURFPLAN': 'TextEdit', 'TOTALARBRE': 'TextEdit', 'NB_ARBRES': 'TextEdit', 'VERGERDENS': 'TextEdit', 'ANNEE': 'TextEdit', });
lyr_Parcelle50_entier_0.set('fieldLabels', {'IDU': 'header label', 'NOM_COM': 'header label', 'INAO': 'header label', 'NOM_VERGER': 'header label', 'ID_VERGER': 'header label', 'MO': 'header label', 'AR': 'header label', 'AO': 'header label', 'CP': 'header label', 'INSEE': 'header label', 'Surafce_Ha': 'header label', });
lyr_Annee_plantation_1.set('fieldLabels', {'IDU': 'header label', 'NOM_COM': 'header label', 'INAO': 'header label', 'NOM_VERGER': 'header label', 'CP': 'header label', 'IDVERGER': 'header label', 'TYPE_AOC': 'header label', 'MODCULTURE': 'header label', 'ARBREISOLE': 'header label', 'SURFVERGER': 'header label', 'SURFPLANT': 'header label', 'P_SURFPLAN': 'header label', 'TOTALARBRE': 'header label', 'NB_ARBRES': 'header label', 'VERGERDENS': 'header label', 'ANNEE': 'header label', });
lyr_pourcent_plant_2.set('fieldLabels', {'NOM_COM': 'header label', 'INAO': 'header label', 'NON_VERGER': 'header label', 'IDVERGER': 'header label', 'TYPEAOC': 'header label', 'MODECULTUR': 'header label', 'ARBREISOLE': 'header label', 'SURFPARCEL': 'header label', 'SURFVERGER': 'header label', 'P_SURFPLAN': 'header label', });
lyr_densit_verger_3.set('fieldLabels', {'IDU': 'header label', 'NOM_COM': 'header label', 'INAO': 'header label', 'NOM_VERGER': 'header label', 'CP': 'header label', 'IDVERGER': 'header label', 'TYPE_AOC': 'header label', 'MODCULTURE': 'header label', 'ARBREISOLE': 'header label', 'SURFVERGER': 'header label', 'SURFPLANT': 'header label', 'P_SURFPLAN': 'header label', 'TOTALARBRE': 'header label', 'NB_ARBRES': 'header label', 'VERGERDENS': 'header label', 'ANNEE': 'header label', });
lyr_Nb_Variete_4.set('fieldLabels', {'IDU': 'header label', 'NOM_COM': 'header label', 'INAO': 'header label', 'NOM_VERGER': 'header label', 'CP': 'header label', 'IDVERGER': 'header label', 'TYPE_AOC': 'header label', 'MODCULTURE': 'header label', 'ARBREISOLE': 'header label', 'SURFVERGER': 'header label', 'SURFPLANT': 'header label', 'P_SURFPLAN': 'header label', 'TOTALARBRE': 'header label', 'NB_ARBRES': 'header label', 'VERGERDENS': 'header label', 'ANNEE': 'header label', });
lyr_Nb_Variete_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});