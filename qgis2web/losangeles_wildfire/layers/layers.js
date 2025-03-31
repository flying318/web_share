var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_mask_1 = new ol.format.GeoJSON();
var features_mask_1 = format_mask_1.readFeatures(json_mask_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mask_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mask_1.addFeatures(features_mask_1);
var lyr_mask_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mask_1, 
                style: style_mask_1,
                popuplayertitle: 'mask',
                interactive: false,
                title: '<img src="styles/legend/mask_1.png" /> mask'
            });
var format_Losangeleswildfire_2 = new ol.format.GeoJSON();
var features_Losangeleswildfire_2 = format_Losangeleswildfire_2.readFeatures(json_Losangeleswildfire_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Losangeleswildfire_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Losangeleswildfire_2.addFeatures(features_Losangeleswildfire_2);
var lyr_Losangeleswildfire_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Losangeleswildfire_2, 
                style: style_Losangeleswildfire_2,
                popuplayertitle: 'Losangeles wildfire',
                interactive: true,
    title: 'Losangeles wildfire<br />\
    <img src="styles/legend/Losangeleswildfire_2_0.png" /> 1<br />\
    <img src="styles/legend/Losangeleswildfire_2_1.png" /> 2<br />\
    <img src="styles/legend/Losangeleswildfire_2_2.png" /> 3<br />\
    <img src="styles/legend/Losangeleswildfire_2_3.png" /> 4<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_mask_1.setVisible(true);lyr_Losangeleswildfire_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_mask_1,lyr_Losangeleswildfire_2];
lyr_mask_1.set('fieldAliases', {'value': 'value', });
lyr_Losangeleswildfire_2.set('fieldAliases', {'fid': 'fid', 'value': 'value', 'classification': 'classification', });
lyr_mask_1.set('fieldImages', {'value': 'TextEdit', });
lyr_Losangeleswildfire_2.set('fieldImages', {'fid': 'Range', 'value': 'TextEdit', 'classification': '', });
lyr_mask_1.set('fieldLabels', {'value': 'no label', });
lyr_Losangeleswildfire_2.set('fieldLabels', {'fid': 'hidden field', 'value': 'hidden field', 'classification': 'inline label - visible with data', });
lyr_Losangeleswildfire_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});