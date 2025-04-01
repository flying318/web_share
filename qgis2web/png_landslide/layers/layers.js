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
var format_maskpng_1 = new ol.format.GeoJSON();
var features_maskpng_1 = format_maskpng_1.readFeatures(json_maskpng_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_maskpng_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_maskpng_1.addFeatures(features_maskpng_1);
var lyr_maskpng_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_maskpng_1, 
                style: style_maskpng_1,
                popuplayertitle: 'mask — png',
                interactive: true,
                title: '<img src="styles/legend/maskpng_1.png" /> mask — png'
            });
var format_PNGlandslide_2 = new ol.format.GeoJSON();
var features_PNGlandslide_2 = format_PNGlandslide_2.readFeatures(json_PNGlandslide_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PNGlandslide_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PNGlandslide_2.addFeatures(features_PNGlandslide_2);
var lyr_PNGlandslide_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PNGlandslide_2, 
                style: style_PNGlandslide_2,
                popuplayertitle: 'PNG landslide',
                interactive: true,
    title: 'PNG landslide<br />\
    <img src="styles/legend/PNGlandslide_2_0.png" /> 1<br />\
    <img src="styles/legend/PNGlandslide_2_1.png" /> 2<br />\
    <img src="styles/legend/PNGlandslide_2_2.png" /> 3<br />\
    <img src="styles/legend/PNGlandslide_2_3.png" /> 4<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_maskpng_1.setVisible(true);lyr_PNGlandslide_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_maskpng_1,lyr_PNGlandslide_2];
lyr_maskpng_1.set('fieldAliases', {});
lyr_PNGlandslide_2.set('fieldAliases', {'fid': 'fid', 'value': 'value', 'classification': 'classification', });
lyr_maskpng_1.set('fieldImages', {});
lyr_PNGlandslide_2.set('fieldImages', {'fid': 'TextEdit', 'value': 'TextEdit', 'classification': '', });
lyr_maskpng_1.set('fieldLabels', {});
lyr_PNGlandslide_2.set('fieldLabels', {'fid': 'hidden field', 'value': 'hidden field', 'classification': 'inline label - visible with data', });
lyr_PNGlandslide_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});