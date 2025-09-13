// ==== Поріг появи підписів ====
// 14 → ~9.55 м/px, 15 → ~4.78, 16 → ~2.39, 17 → ~1.19
var LABELS_MIN_ZOOM = 15;
var LABELS_MAX_RES  = 50000 / Math.pow(2, LABELS_MIN_ZOOM);

// пороги (пікселі екрана)
var REPEAT_BASE_PX        = 3000; // інтервал повтору на довгих лініях
var MIN_LEN_FOR_REPEAT_PX = 5000; // повтор лише якщо лінія довша за це

var style__2 = function(feature, resolution){
  var name = feature.get("street_name");
  var labelText = name != null ? String(name).trim() : "";

  // лінія — без змін
  var stroke = new ol.style.Stroke({
    color: 'rgba(255,226,185,1.0)',
    lineDash: null, lineCap: 'square', lineJoin: 'bevel',
    width: 7.6
  });

  // 1) довжина в пікселях поточного масштабу
  var lenPx = 0, geom = feature.getGeometry();
  if (geom) {
    if (geom.getType() === 'MultiLineString') {
      geom.getLineStrings().forEach(function(ls){ lenPx += ls.getLength() / resolution; });
    } else { // LineString
      lenPx = geom.getLength() / resolution;
    }
  }

  // 2) керуємо повтором: коротким лініям — без повторів
  var repeatPx = (lenPx >= MIN_LEN_FOR_REPEAT_PX) ? REPEAT_BASE_PX : 1e9;

  // 3) показувати текст лише коли достатньо наближено
  var showLabels = (resolution <= LABELS_MAX_RES);

var textStyle = (labelText && showLabels)
  ? new ol.style.Text({
      text: labelText,
      font: "19.5px 'Cascadia Code SemiBold', sans-serif", // ← PX = фіксований розмір
      scale: 1,                                           // ← не масштабуємо текст
      placement: 'line',
      overflow: true,
      maxAngle: Math.PI / 9,
      // repeat: repeatPx,  // (опційно поверни, якщо треба повторення)
      padding: [2,2,2,2],
      fill:   new ol.style.Fill({ color: "#000" }),
      stroke: new ol.style.Stroke({ color: "#fff", width: 3 })
    })
  : null;

  return [ new ol.style.Style({ stroke: stroke, text: textStyle }) ];
};
