import React, { useCallback, createElement, useMemo, Fragment, useRef, useEffect } from 'react';
import { useValueFormatter, degreesToRadians, radiansToDegrees, computeArcBoundingBox, useTheme, getLabelGenerator, midAngle, positionFromAngle, absoluteAngleRadians, absoluteAngleDegrees, textPropsByEngine, withContainer, useDimensions, bindDefs, SvgWrapper, ResponsiveWrapper, getRelativeCursor, getHoveredArc } from '@nivo/core';
import { useOrdinalColorScale, useInheritedColor } from '@nivo/colors';
import { useTooltip, BasicTooltip } from '@nivo/tooltip';
import _get from 'lodash/get';
import { pie, arc, line } from 'd3-shape';
import { BoxLegendSvg, renderLegendToCanvas } from '@nivo/legends';

var PieSlice = function PieSlice(_ref) {
  var datum = _ref.datum,
      path = _ref.path,
      borderWidth = _ref.borderWidth,
      borderColor = _ref.borderColor,
      isInteractive = _ref.isInteractive,
      onClick = _ref.onClick,
      onMouseEnter = _ref.onMouseEnter,
      onMouseMove = _ref.onMouseMove,
      onMouseLeave = _ref.onMouseLeave,
      tooltip = _ref.tooltip;

  var _useTooltip = useTooltip(),
      showTooltipFromEvent = _useTooltip.showTooltipFromEvent,
      hideTooltip = _useTooltip.hideTooltip;

  var handleTooltip = useCallback(function (event) {
    return showTooltipFromEvent(createElement(tooltip, {
      datum: datum
    }), event);
  }, [showTooltipFromEvent, datum, tooltip]);
  var handleMouseEnter = useCallback(function (event) {
    onMouseEnter === null || onMouseEnter === void 0 ? void 0 : onMouseEnter(datum, event);
    handleTooltip(event);
  }, [onMouseEnter, handleTooltip, datum]);
  var handleMouseMove = useCallback(function (event) {
    onMouseMove === null || onMouseMove === void 0 ? void 0 : onMouseMove(datum, event);
    handleTooltip(event);
  }, [onMouseMove, handleTooltip, datum]);
  var handleMouseLeave = useCallback(function (event) {
    onMouseLeave === null || onMouseLeave === void 0 ? void 0 : onMouseLeave(datum, event);
    hideTooltip();
  }, [onMouseLeave, hideTooltip, datum]);
  var handleClick = useCallback(function (event) {
    onClick === null || onClick === void 0 ? void 0 : onClick(datum, event);
  }, [onClick, datum]);
  return React.createElement("path", {
    d: path !== null && path !== void 0 ? path : undefined,
    fill: datum.fill || datum.color,
    strokeWidth: borderWidth,
    stroke: borderColor,
    onMouseEnter: isInteractive ? handleMouseEnter : undefined,
    onMouseMove: isInteractive ? handleMouseMove : undefined,
    onMouseLeave: isInteractive ? handleMouseLeave : undefined,
    onClick: isInteractive ? handleClick : undefined
  });
};

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}

var PieTooltip = function PieTooltip(_ref) {
  var datum = _ref.datum;
  return React.createElement(BasicTooltip, {
    id: datum.id,
    value: datum.formattedValue,
    enableChip: true,
    color: datum.color
  });
};

var _window$devicePixelRa;
var defaultProps = {
  id: 'id',
  value: 'value',
  sortByValue: false,
  innerRadius: 0,
  padAngle: 0,
  cornerRadius: 0,
  layers: ['slices', 'radialLabels', 'sliceLabels', 'legends'],
  startAngle: 0,
  endAngle: 360,
  fit: true,
  borderWidth: 0,
  borderColor: {
    from: 'color',
    modifiers: [['darker', 1]]
  },
  radialLabel: 'id',
  enableRadialLabels: true,
  radialLabelsSkipAngle: 0,
  radialLabelsLinkOffset: 0,
  radialLabelsLinkDiagonalLength: 16,
  radialLabelsLinkHorizontalLength: 24,
  radialLabelsLinkStrokeWidth: 1,
  radialLabelsTextXOffset: 6,
  radialLabelsTextColor: {
    theme: 'labels.text.fill'
  },
  radialLabelsLinkColor: {
    theme: 'axis.ticks.line.stroke'
  },
  enableSliceLabels: true,
  sliceLabel: 'formattedValue',
  sliceLabelsSkipAngle: 0,
  sliceLabelsRadiusOffset: 0.5,
  sliceLabelsTextColor: {
    theme: 'labels.text.fill'
  },
  colors: {
    scheme: 'nivo'
  },
  defs: [],
  fill: [],
  isInteractive: true,
  tooltip: PieTooltip,
  legends: [],
  role: 'img',
  pixelRatio: typeof window !== 'undefined' ? (_window$devicePixelRa = window.devicePixelRatio) !== null && _window$devicePixelRa !== void 0 ? _window$devicePixelRa : 1 : 1
};

var useNormalizedData = function useNormalizedData(_ref) {
  var data = _ref.data,
      _ref$id = _ref.id,
      id = _ref$id === void 0 ? defaultProps.id : _ref$id,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? defaultProps.value : _ref$value,
      valueFormat = _ref.valueFormat,
      _ref$colors = _ref.colors,
      colors = _ref$colors === void 0 ? defaultProps.colors : _ref$colors;
  var getId = useMemo(function () {
    return typeof id === 'function' ? id : function (d) {
      return _get(d, id);
    };
  }, [id]);
  var getValue = useMemo(function () {
    return typeof value === 'function' ? value : function (d) {
      return _get(d, value);
    };
  }, [value]);
  var formatValue = useValueFormatter(valueFormat);
  var getColor = useOrdinalColorScale(colors, 'id');
  return useMemo(function () {
    return data.map(function (datum) {
      var _datum$label;

      var datumId = getId(datum);
      var datumValue = getValue(datum);
      var normalizedDatum = {
        id: datumId,
        label: (_datum$label = datum.label) !== null && _datum$label !== void 0 ? _datum$label : datumId,
        value: datumValue,
        formattedValue: formatValue(datumValue),
        data: datum
      };
      return _objectSpread2(_objectSpread2({}, normalizedDatum), {}, {
        color: getColor(normalizedDatum)
      });
    });
  }, [data, getId, getValue, formatValue, getColor]);
};
var usePieArcs = function usePieArcs(_ref2) {
  var data = _ref2.data,
      _ref2$startAngle = _ref2.startAngle,
      startAngle = _ref2$startAngle === void 0 ? defaultProps.startAngle : _ref2$startAngle,
      _ref2$endAngle = _ref2.endAngle,
      endAngle = _ref2$endAngle === void 0 ? defaultProps.endAngle : _ref2$endAngle,
      _ref2$padAngle = _ref2.padAngle,
      padAngle = _ref2$padAngle === void 0 ? defaultProps.padAngle : _ref2$padAngle,
      _ref2$sortByValue = _ref2.sortByValue,
      sortByValue = _ref2$sortByValue === void 0 ? defaultProps.sortByValue : _ref2$sortByValue;
  var pie$1 = useMemo(function () {
    var innerPie = pie().value(function (d) {
      return d.value;
    }).padAngle(degreesToRadians(padAngle)).startAngle(degreesToRadians(startAngle)).endAngle(degreesToRadians(endAngle));
    if (sortByValue !== true) innerPie.sortValues(null);
    return innerPie;
  }, [startAngle, endAngle, padAngle, sortByValue]);
  return useMemo(function () {
    return pie$1(data).map(function (arc) {
      var angle = Math.abs(arc.endAngle - arc.startAngle);
      return _objectSpread2(_objectSpread2({}, arc.data), {}, {
        arc: {
          index: arc.index,
          startAngle: arc.startAngle,
          endAngle: arc.endAngle,
          padAngle: arc.padAngle,
          angle: angle,
          angleDeg: radiansToDegrees(angle)
        }
      });
    });
  }, [pie$1, data]);
};
var usePieArcGenerator = function usePieArcGenerator(_ref3) {
  var radius = _ref3.radius,
      innerRadius = _ref3.innerRadius,
      _ref3$cornerRadius = _ref3.cornerRadius,
      cornerRadius = _ref3$cornerRadius === void 0 ? defaultProps.cornerRadius : _ref3$cornerRadius;
  return useMemo(function () {
    return arc().outerRadius(radius).innerRadius(innerRadius).cornerRadius(cornerRadius);
  }, [radius, innerRadius, cornerRadius]);
};
var usePie = function usePie(_ref4) {
  var data = _ref4.data,
      radius = _ref4.radius,
      innerRadius = _ref4.innerRadius,
      _ref4$startAngle = _ref4.startAngle,
      startAngle = _ref4$startAngle === void 0 ? defaultProps.startAngle : _ref4$startAngle,
      _ref4$endAngle = _ref4.endAngle,
      endAngle = _ref4$endAngle === void 0 ? defaultProps.endAngle : _ref4$endAngle,
      _ref4$padAngle = _ref4.padAngle,
      padAngle = _ref4$padAngle === void 0 ? defaultProps.padAngle : _ref4$padAngle,
      _ref4$sortByValue = _ref4.sortByValue,
      sortByValue = _ref4$sortByValue === void 0 ? defaultProps.sortByValue : _ref4$sortByValue,
      _ref4$cornerRadius = _ref4.cornerRadius,
      cornerRadius = _ref4$cornerRadius === void 0 ? defaultProps.cornerRadius : _ref4$cornerRadius;
  var dataWithArc = usePieArcs({
    data: data,
    startAngle: startAngle,
    endAngle: endAngle,
    padAngle: padAngle,
    sortByValue: sortByValue
  });
  var arcGenerator = usePieArcGenerator({
    radius: radius,
    innerRadius: innerRadius,
    cornerRadius: cornerRadius
  });
  return {
    dataWithArc: dataWithArc,
    arcGenerator: arcGenerator
  };
};
var usePieFromBox = function usePieFromBox(_ref5) {
  var data = _ref5.data,
      width = _ref5.width,
      height = _ref5.height,
      _ref5$innerRadius = _ref5.innerRadius,
      innerRadiusRatio = _ref5$innerRadius === void 0 ? defaultProps.innerRadius : _ref5$innerRadius,
      _ref5$startAngle = _ref5.startAngle,
      startAngle = _ref5$startAngle === void 0 ? defaultProps.startAngle : _ref5$startAngle,
      _ref5$endAngle = _ref5.endAngle,
      endAngle = _ref5$endAngle === void 0 ? defaultProps.endAngle : _ref5$endAngle,
      _ref5$padAngle = _ref5.padAngle,
      padAngle = _ref5$padAngle === void 0 ? defaultProps.padAngle : _ref5$padAngle,
      _ref5$sortByValue = _ref5.sortByValue,
      sortByValue = _ref5$sortByValue === void 0 ? defaultProps.sortByValue : _ref5$sortByValue,
      _ref5$cornerRadius = _ref5.cornerRadius,
      cornerRadius = _ref5$cornerRadius === void 0 ? defaultProps.cornerRadius : _ref5$cornerRadius,
      _ref5$fit = _ref5.fit,
      fit = _ref5$fit === void 0 ? defaultProps.fit : _ref5$fit;
  var dataWithArc = usePieArcs({
    data: data,
    startAngle: startAngle,
    endAngle: endAngle,
    padAngle: padAngle,
    sortByValue: sortByValue
  });
  var computedProps = useMemo(function () {
    var radius = Math.min(width, height) / 2;
    var innerRadius = radius * Math.min(innerRadiusRatio, 1);
    var centerX = width / 2;
    var centerY = height / 2;
    var boundingBox;

    if (fit) {
      var _computeArcBoundingBo = computeArcBoundingBox(centerX, centerY, radius, startAngle - 90, endAngle - 90),
          points = _computeArcBoundingBo.points,
          box = _objectWithoutProperties(_computeArcBoundingBo, ["points"]);

      var ratio = Math.min(width / box.width, height / box.height);
      var adjustedBox = {
        width: box.width * ratio,
        height: box.height * ratio
      };
      adjustedBox.x = (width - adjustedBox.width) / 2;
      adjustedBox.y = (height - adjustedBox.height) / 2;
      centerX = (centerX - box.x) / box.width * box.width * ratio + adjustedBox.x;
      centerY = (centerY - box.y) / box.height * box.height * ratio + adjustedBox.y;
      boundingBox = {
        box: box,
        ratio: ratio,
        points: points
      };
      radius = radius * ratio;
      innerRadius = innerRadius * ratio;
    }

    return {
      centerX: centerX,
      centerY: centerY,
      radius: radius,
      innerRadius: innerRadius,
      debug: boundingBox
    };
  }, [width, height, innerRadiusRatio, startAngle, endAngle, fit, cornerRadius]);
  var arcGenerator = usePieArcGenerator({
    radius: computedProps.radius,
    innerRadius: computedProps.innerRadius,
    cornerRadius: cornerRadius
  });
  return _objectSpread2({
    dataWithArc: dataWithArc,
    arcGenerator: arcGenerator
  }, computedProps);
};
var usePieSliceLabels = function usePieSliceLabels(_ref6) {
  var enable = _ref6.enable,
      dataWithArc = _ref6.dataWithArc,
      skipAngle = _ref6.skipAngle,
      radius = _ref6.radius,
      innerRadius = _ref6.innerRadius,
      radiusOffset = _ref6.radiusOffset,
      label = _ref6.label,
      textColor = _ref6.textColor;
  var theme = useTheme();
  var getTextColor = useInheritedColor(textColor, theme);
  var getLabel = useMemo(function () {
    return getLabelGenerator(label);
  }, [label]);
  return useMemo(function () {
    if (!enable) return [];
    return dataWithArc.filter(function (datumWithArc) {
      return skipAngle === 0 || datumWithArc.arc.angleDeg > skipAngle;
    }).map(function (datumWithArc) {
      var angle = midAngle(datumWithArc.arc) - Math.PI / 2;
      var labelRadius = innerRadius + (radius - innerRadius) * radiusOffset;
      var position = positionFromAngle(angle, labelRadius);
      var datumTextColor = getTextColor(datumWithArc);
      return _objectSpread2(_objectSpread2({}, position), {}, {
        label: getLabel(datumWithArc),
        textColor: datumTextColor,
        datum: datumWithArc
      });
    });
  }, [enable, dataWithArc, skipAngle, radius, innerRadius, radiusOffset, getLabel, getTextColor]);
};
var usePieRadialLabels = function usePieRadialLabels(_ref7) {
  var enable = _ref7.enable,
      dataWithArc = _ref7.dataWithArc,
      label = _ref7.label,
      textXOffset = _ref7.textXOffset,
      textColor = _ref7.textColor,
      radius = _ref7.radius,
      skipAngle = _ref7.skipAngle,
      linkOffset = _ref7.linkOffset,
      linkDiagonalLength = _ref7.linkDiagonalLength,
      linkHorizontalLength = _ref7.linkHorizontalLength,
      linkColor = _ref7.linkColor;
  var getLabel = useMemo(function () {
    return getLabelGenerator(label);
  }, [label]);
  var theme = useTheme();
  var getTextColor = useInheritedColor(textColor, theme);
  var getLinkColor = useInheritedColor(linkColor, theme);
  return useMemo(function () {
    if (!enable) return [];
    return dataWithArc.filter(function (datum) {
      return skipAngle === 0 || datum.arc.angleDeg > skipAngle;
    }).map(function (datum) {
      var angle = absoluteAngleRadians(midAngle(datum.arc) - Math.PI / 2);
      var positionA = positionFromAngle(angle, radius + linkOffset);
      var positionB = positionFromAngle(angle, radius + linkOffset + linkDiagonalLength);
      var positionC;
      var labelPosition;
      var textAlign;

      if (absoluteAngleDegrees(radiansToDegrees(angle)) < 90 || absoluteAngleDegrees(radiansToDegrees(angle)) >= 270) {
        positionC = {
          x: positionB.x + linkHorizontalLength,
          y: positionB.y
        };
        labelPosition = {
          x: positionB.x + linkHorizontalLength + textXOffset,
          y: positionB.y
        };
        textAlign = 'left';
      } else {
        positionC = {
          x: positionB.x - linkHorizontalLength,
          y: positionB.y
        };
        labelPosition = {
          x: positionB.x - linkHorizontalLength - textXOffset,
          y: positionB.y
        };
        textAlign = 'right';
      }

      return {
        text: getLabel(datum),
        textColor: getTextColor(datum),
        position: labelPosition,
        align: textAlign,
        line: [positionA, positionB, positionC],
        linkColor: getLinkColor(datum),
        datum: datum
      };
    });
  }, [dataWithArc, skipAngle, radius, linkOffset, linkDiagonalLength, linkHorizontalLength, textXOffset, getLabel, getTextColor, getLinkColor]);
};
var usePieLayerContext = function usePieLayerContext(_ref8) {
  var dataWithArc = _ref8.dataWithArc,
      arcGenerator = _ref8.arcGenerator,
      centerX = _ref8.centerX,
      centerY = _ref8.centerY,
      radius = _ref8.radius,
      innerRadius = _ref8.innerRadius;
  return useMemo(function () {
    return {
      dataWithArc: dataWithArc,
      arcGenerator: arcGenerator,
      centerX: centerX,
      centerY: centerY,
      radius: radius,
      innerRadius: innerRadius
    };
  }, [dataWithArc, arcGenerator, centerX, centerY, radius, innerRadius]);
};

var lineGenerator = line().x(function (d) {
  return d.x;
}).y(function (d) {
  return d.y;
});
var RadialLabel = function RadialLabel(_ref) {
  var _lineGenerator;

  var label = _ref.label,
      linkStrokeWidth = _ref.linkStrokeWidth;
  var theme = useTheme();
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: (_lineGenerator = lineGenerator(label.line)) !== null && _lineGenerator !== void 0 ? _lineGenerator : undefined,
    fill: "none",
    style: {
      fill: 'none',
      stroke: label.linkColor
    },
    strokeWidth: linkStrokeWidth
  }), React.createElement("g", {
    transform: "translate(".concat(label.position.x, ", ").concat(label.position.y, ")")
  }, React.createElement("text", {
    textAnchor: textPropsByEngine.svg.align[label.align],
    dominantBaseline: "central",
    style: _objectSpread2(_objectSpread2({}, theme.labels.text), {}, {
      fill: label.textColor
    })
  }, label.text)));
};

var RadialLabels = function RadialLabels(_ref) {
  var dataWithArc = _ref.dataWithArc,
      label = _ref.label,
      radius = _ref.radius,
      skipAngle = _ref.skipAngle,
      linkOffset = _ref.linkOffset,
      linkDiagonalLength = _ref.linkDiagonalLength,
      linkHorizontalLength = _ref.linkHorizontalLength,
      linkStrokeWidth = _ref.linkStrokeWidth,
      textXOffset = _ref.textXOffset,
      textColor = _ref.textColor,
      linkColor = _ref.linkColor;
  var radialLabels = usePieRadialLabels({
    enable: true,
    dataWithArc: dataWithArc,
    label: label,
    textXOffset: textXOffset,
    textColor: textColor,
    radius: radius,
    skipAngle: skipAngle,
    linkOffset: linkOffset,
    linkDiagonalLength: linkDiagonalLength,
    linkHorizontalLength: linkHorizontalLength,
    linkColor: linkColor
  });
  return React.createElement(React.Fragment, null, radialLabels.map(function (labelData) {
    return React.createElement(RadialLabel, {
      key: labelData.datum.id,
      label: labelData,
      linkStrokeWidth: linkStrokeWidth
    });
  }));
};

var sliceStyle = {
  pointerEvents: 'none'
};
var SliceLabels = function SliceLabels(_ref) {
  var dataWithArc = _ref.dataWithArc,
      labelAccessor = _ref.label,
      radius = _ref.radius,
      innerRadius = _ref.innerRadius,
      radiusOffset = _ref.radiusOffset,
      skipAngle = _ref.skipAngle,
      textColor = _ref.textColor;
  var theme = useTheme();
  var labels = usePieSliceLabels({
    enable: true,
    dataWithArc: dataWithArc,
    skipAngle: skipAngle,
    radius: radius,
    innerRadius: innerRadius,
    radiusOffset: radiusOffset,
    label: labelAccessor,
    textColor: textColor
  });
  return React.createElement(React.Fragment, null, labels.map(function (label) {
    return React.createElement("g", {
      key: label.datum.id,
      transform: "translate(".concat(label.x, ", ").concat(label.y, ")"),
      style: sliceStyle
    }, React.createElement("text", {
      textAnchor: "middle",
      dominantBaseline: "central",
      style: _objectSpread2(_objectSpread2({}, theme.labels.text), {}, {
        fill: label.textColor
      })
    }, label.label));
  }));
};

var PieLegends = function PieLegends(_ref) {
  var width = _ref.width,
      height = _ref.height,
      legends = _ref.legends,
      dataWithArc = _ref.dataWithArc;
  return React.createElement(React.Fragment, null, legends.map(function (legend, i) {
    return React.createElement(BoxLegendSvg, Object.assign({
      key: i
    }, legend, {
      containerWidth: width,
      containerHeight: height,
      data: dataWithArc
    }));
  }));
};

var Pie = function Pie(_ref) {
  var data = _ref.data,
      _ref$id = _ref.id,
      id = _ref$id === void 0 ? defaultProps.id : _ref$id,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? defaultProps.value : _ref$value,
      valueFormat = _ref.valueFormat,
      _ref$sortByValue = _ref.sortByValue,
      sortByValue = _ref$sortByValue === void 0 ? defaultProps.sortByValue : _ref$sortByValue,
      _ref$layers = _ref.layers,
      layers = _ref$layers === void 0 ? defaultProps.layers : _ref$layers,
      _ref$startAngle = _ref.startAngle,
      startAngle = _ref$startAngle === void 0 ? defaultProps.startAngle : _ref$startAngle,
      _ref$endAngle = _ref.endAngle,
      endAngle = _ref$endAngle === void 0 ? defaultProps.endAngle : _ref$endAngle,
      _ref$padAngle = _ref.padAngle,
      padAngle = _ref$padAngle === void 0 ? defaultProps.padAngle : _ref$padAngle,
      _ref$fit = _ref.fit,
      fit = _ref$fit === void 0 ? defaultProps.fit : _ref$fit,
      _ref$innerRadius = _ref.innerRadius,
      innerRadiusRatio = _ref$innerRadius === void 0 ? defaultProps.innerRadius : _ref$innerRadius,
      _ref$cornerRadius = _ref.cornerRadius,
      cornerRadius = _ref$cornerRadius === void 0 ? defaultProps.cornerRadius : _ref$cornerRadius,
      width = _ref.width,
      height = _ref.height,
      partialMargin = _ref.margin,
      _ref$colors = _ref.colors,
      colors = _ref$colors === void 0 ? defaultProps.colors : _ref$colors,
      _ref$borderWidth = _ref.borderWidth,
      borderWidth = _ref$borderWidth === void 0 ? defaultProps.borderWidth : _ref$borderWidth,
      _ref$borderColor = _ref.borderColor,
      _borderColor = _ref$borderColor === void 0 ? defaultProps.borderColor : _ref$borderColor,
      _ref$radialLabel = _ref.radialLabel,
      radialLabel = _ref$radialLabel === void 0 ? defaultProps.radialLabel : _ref$radialLabel,
      _ref$enableRadialLabe = _ref.enableRadialLabels,
      enableRadialLabels = _ref$enableRadialLabe === void 0 ? defaultProps.enableRadialLabels : _ref$enableRadialLabe,
      _ref$radialLabelsSkip = _ref.radialLabelsSkipAngle,
      radialLabelsSkipAngle = _ref$radialLabelsSkip === void 0 ? defaultProps.radialLabelsSkipAngle : _ref$radialLabelsSkip,
      _ref$radialLabelsLink = _ref.radialLabelsLinkOffset,
      radialLabelsLinkOffset = _ref$radialLabelsLink === void 0 ? defaultProps.radialLabelsLinkOffset : _ref$radialLabelsLink,
      _ref$radialLabelsLink2 = _ref.radialLabelsLinkDiagonalLength,
      radialLabelsLinkDiagonalLength = _ref$radialLabelsLink2 === void 0 ? defaultProps.radialLabelsLinkDiagonalLength : _ref$radialLabelsLink2,
      _ref$radialLabelsLink3 = _ref.radialLabelsLinkHorizontalLength,
      radialLabelsLinkHorizontalLength = _ref$radialLabelsLink3 === void 0 ? defaultProps.radialLabelsLinkHorizontalLength : _ref$radialLabelsLink3,
      _ref$radialLabelsLink4 = _ref.radialLabelsLinkStrokeWidth,
      radialLabelsLinkStrokeWidth = _ref$radialLabelsLink4 === void 0 ? defaultProps.radialLabelsLinkStrokeWidth : _ref$radialLabelsLink4,
      _ref$radialLabelsText = _ref.radialLabelsTextXOffset,
      radialLabelsTextXOffset = _ref$radialLabelsText === void 0 ? defaultProps.radialLabelsTextXOffset : _ref$radialLabelsText,
      _ref$radialLabelsText2 = _ref.radialLabelsTextColor,
      radialLabelsTextColor = _ref$radialLabelsText2 === void 0 ? defaultProps.radialLabelsTextColor : _ref$radialLabelsText2,
      _ref$radialLabelsLink5 = _ref.radialLabelsLinkColor,
      radialLabelsLinkColor = _ref$radialLabelsLink5 === void 0 ? defaultProps.radialLabelsLinkColor : _ref$radialLabelsLink5,
      _ref$sliceLabel = _ref.sliceLabel,
      sliceLabel = _ref$sliceLabel === void 0 ? defaultProps.sliceLabel : _ref$sliceLabel,
      _ref$enableSliceLabel = _ref.enableSliceLabels,
      enableSliceLabels = _ref$enableSliceLabel === void 0 ? defaultProps.enableSliceLabels : _ref$enableSliceLabel,
      _ref$sliceLabelsSkipA = _ref.sliceLabelsSkipAngle,
      sliceLabelsSkipAngle = _ref$sliceLabelsSkipA === void 0 ? defaultProps.sliceLabelsSkipAngle : _ref$sliceLabelsSkipA,
      _ref$sliceLabelsTextC = _ref.sliceLabelsTextColor,
      sliceLabelsTextColor = _ref$sliceLabelsTextC === void 0 ? defaultProps.sliceLabelsTextColor : _ref$sliceLabelsTextC,
      _ref$sliceLabelsRadiu = _ref.sliceLabelsRadiusOffset,
      sliceLabelsRadiusOffset = _ref$sliceLabelsRadiu === void 0 ? defaultProps.sliceLabelsRadiusOffset : _ref$sliceLabelsRadiu,
      _ref$defs = _ref.defs,
      defs = _ref$defs === void 0 ? defaultProps.defs : _ref$defs,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? defaultProps.fill : _ref$fill,
      _ref$isInteractive = _ref.isInteractive,
      isInteractive = _ref$isInteractive === void 0 ? defaultProps.isInteractive : _ref$isInteractive,
      onClick = _ref.onClick,
      onMouseEnter = _ref.onMouseEnter,
      onMouseMove = _ref.onMouseMove,
      onMouseLeave = _ref.onMouseLeave,
      _ref$tooltip = _ref.tooltip,
      tooltip = _ref$tooltip === void 0 ? defaultProps.tooltip : _ref$tooltip,
      _ref$legends = _ref.legends,
      legends = _ref$legends === void 0 ? defaultProps.legends : _ref$legends,
      _ref$role = _ref.role,
      role = _ref$role === void 0 ? defaultProps.role : _ref$role;

  var theme = useTheme();

  var _useDimensions = useDimensions(width, height, partialMargin),
      outerWidth = _useDimensions.outerWidth,
      outerHeight = _useDimensions.outerHeight,
      margin = _useDimensions.margin,
      innerWidth = _useDimensions.innerWidth,
      innerHeight = _useDimensions.innerHeight;

  var normalizedData = useNormalizedData({
    data: data,
    id: id,
    value: value,
    valueFormat: valueFormat,
    colors: colors
  });

  var _usePieFromBox = usePieFromBox({
    data: normalizedData,
    width: innerWidth,
    height: innerHeight,
    fit: fit,
    innerRadius: innerRadiusRatio,
    startAngle: startAngle,
    endAngle: endAngle,
    padAngle: padAngle,
    sortByValue: sortByValue,
    cornerRadius: cornerRadius
  }),
      dataWithArc = _usePieFromBox.dataWithArc,
      arcGenerator = _usePieFromBox.arcGenerator,
      centerX = _usePieFromBox.centerX,
      centerY = _usePieFromBox.centerY,
      radius = _usePieFromBox.radius,
      innerRadius = _usePieFromBox.innerRadius;

  var borderColor = useInheritedColor(_borderColor, theme);
  var boundDefs = bindDefs(defs, dataWithArc, fill);
  var layerById = {
    slices: null,
    radialLabels: null,
    sliceLabels: null,
    legends: null
  };

  if (layers.includes('slices')) {
    layerById.slices = React.createElement("g", {
      key: "slices",
      transform: "translate(".concat(centerX, ",").concat(centerY, ")")
    }, dataWithArc.map(function (datumWithArc) {
      var _arcGenerator;

      return React.createElement(PieSlice, {
        key: datumWithArc.id,
        datum: datumWithArc,
        path: (_arcGenerator = arcGenerator(datumWithArc.arc)) !== null && _arcGenerator !== void 0 ? _arcGenerator : undefined,
        borderWidth: borderWidth,
        borderColor: borderColor(datumWithArc),
        tooltip: tooltip,
        isInteractive: isInteractive,
        onClick: onClick,
        onMouseEnter: onMouseEnter,
        onMouseMove: onMouseMove,
        onMouseLeave: onMouseLeave
      });
    }));
  }

  if (enableRadialLabels && layers.includes('radialLabels')) {
    layerById.radialLabels = React.createElement("g", {
      key: "radialLabels",
      transform: "translate(".concat(centerX, ",").concat(centerY, ")")
    }, React.createElement(RadialLabels, {
      dataWithArc: dataWithArc,
      radius: radius,
      label: radialLabel,
      skipAngle: radialLabelsSkipAngle,
      linkOffset: radialLabelsLinkOffset,
      linkDiagonalLength: radialLabelsLinkDiagonalLength,
      linkHorizontalLength: radialLabelsLinkHorizontalLength,
      linkStrokeWidth: radialLabelsLinkStrokeWidth,
      textXOffset: radialLabelsTextXOffset,
      textColor: radialLabelsTextColor,
      linkColor: radialLabelsLinkColor
    }));
  }

  if (enableSliceLabels && layers.includes('sliceLabels')) {
    layerById.sliceLabels = React.createElement("g", {
      key: "sliceLabels",
      transform: "translate(".concat(centerX, ",").concat(centerY, ")")
    }, React.createElement(SliceLabels, {
      dataWithArc: dataWithArc,
      label: sliceLabel,
      radius: radius,
      innerRadius: innerRadius,
      radiusOffset: sliceLabelsRadiusOffset,
      skipAngle: sliceLabelsSkipAngle,
      textColor: sliceLabelsTextColor
    }));
  }

  if (legends.length > 0 && layers.includes('legends')) {
    layerById.legends = React.createElement(PieLegends, {
      key: "legends",
      width: innerWidth,
      height: innerHeight,
      dataWithArc: dataWithArc,
      legends: legends
    });
  }

  var layerContext = usePieLayerContext({
    dataWithArc: dataWithArc,
    arcGenerator: arcGenerator,
    centerX: centerX,
    centerY: centerY,
    radius: radius,
    innerRadius: innerRadius
  });
  return React.createElement(SvgWrapper, {
    width: outerWidth,
    height: outerHeight,
    margin: margin,
    defs: boundDefs,
    role: role
  }, layers.map(function (layer, i) {
    if (layerById[layer] !== undefined) {
      return layerById[layer];
    }

    if (typeof layer === 'function') {
      return React.createElement(Fragment, {
        key: i
      }, createElement(layer, layerContext));
    }

    return null;
  }));
};

var Pie$1 = withContainer(Pie);

var ResponsivePie = function ResponsivePie(props) {
  return React.createElement(ResponsiveWrapper, null, function (_ref) {
    var width = _ref.width,
        height = _ref.height;
    return React.createElement(Pie$1, Object.assign({
      width: width,
      height: height
    }, props));
  });
};

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

var drawSliceLabels = function drawSliceLabels(ctx, labels, theme) {
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = "".concat(theme.labels.text.fontSize, "px ").concat(theme.labels.text.fontFamily);
  labels.forEach(function (label) {
    ctx.save();
    ctx.translate(label.x, label.y);
    ctx.fillStyle = label.textColor;
    ctx.fillText("".concat(label.label), 0, 0);
    ctx.restore();
  });
};

var drawRadialLabels = function drawRadialLabels(ctx, labels, theme, linkStrokeWidth) {
  ctx.textBaseline = 'middle';
  ctx.font = "".concat(theme.labels.text.fontSize, "px ").concat(theme.labels.text.fontFamily);
  labels.forEach(function (label) {
    ctx.save();
    ctx.translate(label.position.x, label.position.y);
    ctx.fillStyle = label.textColor;
    ctx.textAlign = textPropsByEngine.canvas.align[label.align];
    ctx.fillText("".concat(label.text), 0, 0);
    ctx.restore();
    ctx.beginPath();
    ctx.strokeStyle = label.linkColor;
    ctx.lineWidth = linkStrokeWidth;
    label.line.forEach(function (point, index) {
      if (index === 0) ctx.moveTo(point.x, point.y);else ctx.lineTo(point.x, point.y);
    });
    if (linkStrokeWidth > 0) ctx.stroke();
  });
};

var PieCanvas = function PieCanvas(_ref) {
  var data = _ref.data,
      _ref$id = _ref.id,
      id = _ref$id === void 0 ? defaultProps.id : _ref$id,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? defaultProps.value : _ref$value,
      valueFormat = _ref.valueFormat,
      _ref$sortByValue = _ref.sortByValue,
      sortByValue = _ref$sortByValue === void 0 ? defaultProps.sortByValue : _ref$sortByValue,
      _ref$startAngle = _ref.startAngle,
      startAngle = _ref$startAngle === void 0 ? defaultProps.startAngle : _ref$startAngle,
      _ref$endAngle = _ref.endAngle,
      endAngle = _ref$endAngle === void 0 ? defaultProps.endAngle : _ref$endAngle,
      _ref$padAngle = _ref.padAngle,
      padAngle = _ref$padAngle === void 0 ? defaultProps.padAngle : _ref$padAngle,
      _ref$fit = _ref.fit,
      fit = _ref$fit === void 0 ? defaultProps.fit : _ref$fit,
      _ref$innerRadius = _ref.innerRadius,
      innerRadiusRatio = _ref$innerRadius === void 0 ? defaultProps.innerRadius : _ref$innerRadius,
      _ref$cornerRadius = _ref.cornerRadius,
      cornerRadius = _ref$cornerRadius === void 0 ? defaultProps.cornerRadius : _ref$cornerRadius,
      width = _ref.width,
      height = _ref.height,
      partialMargin = _ref.margin,
      _ref$pixelRatio = _ref.pixelRatio,
      pixelRatio = _ref$pixelRatio === void 0 ? 1 : _ref$pixelRatio,
      _ref$colors = _ref.colors,
      colors = _ref$colors === void 0 ? defaultProps.colors : _ref$colors,
      _ref$borderWidth = _ref.borderWidth,
      borderWidth = _ref$borderWidth === void 0 ? defaultProps.borderWidth : _ref$borderWidth,
      _ref$borderColor = _ref.borderColor,
      borderColor = _ref$borderColor === void 0 ? defaultProps.borderColor : _ref$borderColor,
      _ref$radialLabel = _ref.radialLabel,
      radialLabel = _ref$radialLabel === void 0 ? defaultProps.radialLabel : _ref$radialLabel,
      _ref$enableRadialLabe = _ref.enableRadialLabels,
      enableRadialLabels = _ref$enableRadialLabe === void 0 ? defaultProps.enableRadialLabels : _ref$enableRadialLabe,
      _ref$radialLabelsSkip = _ref.radialLabelsSkipAngle,
      radialLabelsSkipAngle = _ref$radialLabelsSkip === void 0 ? defaultProps.radialLabelsSkipAngle : _ref$radialLabelsSkip,
      _ref$radialLabelsLink = _ref.radialLabelsLinkOffset,
      radialLabelsLinkOffset = _ref$radialLabelsLink === void 0 ? defaultProps.radialLabelsLinkOffset : _ref$radialLabelsLink,
      _ref$radialLabelsLink2 = _ref.radialLabelsLinkDiagonalLength,
      radialLabelsLinkDiagonalLength = _ref$radialLabelsLink2 === void 0 ? defaultProps.radialLabelsLinkDiagonalLength : _ref$radialLabelsLink2,
      _ref$radialLabelsLink3 = _ref.radialLabelsLinkHorizontalLength,
      radialLabelsLinkHorizontalLength = _ref$radialLabelsLink3 === void 0 ? defaultProps.radialLabelsLinkHorizontalLength : _ref$radialLabelsLink3,
      _ref$radialLabelsLink4 = _ref.radialLabelsLinkStrokeWidth,
      radialLabelsLinkStrokeWidth = _ref$radialLabelsLink4 === void 0 ? defaultProps.radialLabelsLinkStrokeWidth : _ref$radialLabelsLink4,
      _ref$radialLabelsText = _ref.radialLabelsTextXOffset,
      radialLabelsTextXOffset = _ref$radialLabelsText === void 0 ? defaultProps.radialLabelsTextXOffset : _ref$radialLabelsText,
      _ref$radialLabelsText2 = _ref.radialLabelsTextColor,
      radialLabelsTextColor = _ref$radialLabelsText2 === void 0 ? defaultProps.radialLabelsTextColor : _ref$radialLabelsText2,
      _ref$radialLabelsLink5 = _ref.radialLabelsLinkColor,
      radialLabelsLinkColor = _ref$radialLabelsLink5 === void 0 ? defaultProps.radialLabelsLinkColor : _ref$radialLabelsLink5,
      _ref$sliceLabel = _ref.sliceLabel,
      sliceLabel = _ref$sliceLabel === void 0 ? defaultProps.sliceLabel : _ref$sliceLabel,
      _ref$enableSliceLabel = _ref.enableSliceLabels,
      enableSliceLabels = _ref$enableSliceLabel === void 0 ? defaultProps.enableSliceLabels : _ref$enableSliceLabel,
      _ref$sliceLabelsSkipA = _ref.sliceLabelsSkipAngle,
      sliceLabelsSkipAngle = _ref$sliceLabelsSkipA === void 0 ? defaultProps.sliceLabelsSkipAngle : _ref$sliceLabelsSkipA,
      _ref$sliceLabelsTextC = _ref.sliceLabelsTextColor,
      sliceLabelsTextColor = _ref$sliceLabelsTextC === void 0 ? defaultProps.sliceLabelsTextColor : _ref$sliceLabelsTextC,
      _ref$sliceLabelsRadiu = _ref.sliceLabelsRadiusOffset,
      sliceLabelsRadiusOffset = _ref$sliceLabelsRadiu === void 0 ? defaultProps.sliceLabelsRadiusOffset : _ref$sliceLabelsRadiu,
      _ref$isInteractive = _ref.isInteractive,
      isInteractive = _ref$isInteractive === void 0 ? defaultProps.isInteractive : _ref$isInteractive,
      onClick = _ref.onClick,
      onMouseMove = _ref.onMouseMove,
      _ref$tooltip = _ref.tooltip,
      tooltip = _ref$tooltip === void 0 ? defaultProps.tooltip : _ref$tooltip,
      _ref$legends = _ref.legends,
      legends = _ref$legends === void 0 ? defaultProps.legends : _ref$legends;
  var canvasEl = useRef(null);
  var theme = useTheme();

  var _useDimensions = useDimensions(width, height, partialMargin),
      margin = _useDimensions.margin,
      innerWidth = _useDimensions.innerWidth,
      innerHeight = _useDimensions.innerHeight,
      outerWidth = _useDimensions.outerWidth,
      outerHeight = _useDimensions.outerHeight;

  var normalizedData = useNormalizedData({
    data: data,
    id: id,
    value: value,
    valueFormat: valueFormat,
    colors: colors
  });

  var _usePieFromBox = usePieFromBox({
    data: normalizedData,
    width: innerWidth,
    height: innerHeight,
    fit: fit,
    innerRadius: innerRadiusRatio,
    startAngle: startAngle,
    endAngle: endAngle,
    padAngle: padAngle,
    sortByValue: sortByValue,
    cornerRadius: cornerRadius
  }),
      dataWithArc = _usePieFromBox.dataWithArc,
      arcGenerator = _usePieFromBox.arcGenerator,
      centerX = _usePieFromBox.centerX,
      centerY = _usePieFromBox.centerY,
      radius = _usePieFromBox.radius,
      innerRadius = _usePieFromBox.innerRadius;

  var getBorderColor = useInheritedColor(borderColor, theme);
  var radialLabels = usePieRadialLabels({
    enable: enableRadialLabels,
    dataWithArc: dataWithArc,
    label: radialLabel,
    textXOffset: radialLabelsTextXOffset,
    textColor: radialLabelsTextColor,
    radius: radius,
    skipAngle: radialLabelsSkipAngle,
    linkOffset: radialLabelsLinkOffset,
    linkDiagonalLength: radialLabelsLinkDiagonalLength,
    linkHorizontalLength: radialLabelsLinkHorizontalLength,
    linkColor: radialLabelsLinkColor
  });
  var sliceLabels = usePieSliceLabels({
    enable: enableSliceLabels,
    dataWithArc: dataWithArc,
    label: sliceLabel,
    radius: radius,
    innerRadius: innerRadius,
    radiusOffset: sliceLabelsRadiusOffset,
    skipAngle: sliceLabelsSkipAngle,
    textColor: sliceLabelsTextColor
  });
  useEffect(function () {
    if (!canvasEl.current) return;
    canvasEl.current.width = outerWidth * pixelRatio;
    canvasEl.current.height = outerHeight * pixelRatio;
    var ctx = canvasEl.current.getContext('2d');
    ctx.scale(pixelRatio, pixelRatio);
    ctx.fillStyle = theme.background;
    ctx.fillRect(0, 0, outerWidth, outerHeight);
    ctx.save();
    ctx.translate(margin.left, margin.top);
    arcGenerator.context(ctx);
    ctx.save();
    ctx.translate(centerX, centerY);
    dataWithArc.forEach(function (arc) {
      ctx.beginPath();
      ctx.fillStyle = arc.color;
      ctx.strokeStyle = getBorderColor(arc);
      ctx.lineWidth = borderWidth;
      arcGenerator(arc.arc);
      ctx.fill();

      if (borderWidth > 0) {
        ctx.stroke();
      }
    });

    if (enableRadialLabels === true) {
      drawRadialLabels(ctx, radialLabels, theme, radialLabelsLinkStrokeWidth);
    }

    if (enableSliceLabels === true) {
      drawSliceLabels(ctx, sliceLabels, theme);
    }

    ctx.restore();
    legends.forEach(function (legend) {
      renderLegendToCanvas(ctx, _objectSpread2(_objectSpread2({}, legend), {}, {
        data: dataWithArc,
        containerWidth: innerWidth,
        containerHeight: innerHeight,
        theme: theme
      }));
    });
  }, [canvasEl, innerWidth, innerHeight, outerWidth, outerHeight, margin.top, margin.left, pixelRatio, centerX, centerY, arcGenerator, dataWithArc, getBorderColor, enableRadialLabels, radialLabels, enableSliceLabels, sliceLabels, legends, theme]);
  var arcs = useMemo(function () {
    return dataWithArc.map(function (datum) {
      return _objectSpread2({
        id: datum.id
      }, datum.arc);
    });
  }, [dataWithArc]);

  var getArcFromMouse = function getArcFromMouse(event) {
    var _getRelativeCursor = getRelativeCursor(canvasEl.current, event),
        _getRelativeCursor2 = _slicedToArray(_getRelativeCursor, 2),
        x = _getRelativeCursor2[0],
        y = _getRelativeCursor2[1];

    var hoveredArc = getHoveredArc(margin.left + centerX, margin.top + centerY, radius, innerRadius, arcs, x, y);
    if (!hoveredArc) return null;
    return dataWithArc.find(function (datum) {
      return datum.id === hoveredArc.id;
    });
  };

  var _useTooltip = useTooltip(),
      showTooltipFromEvent = _useTooltip.showTooltipFromEvent,
      hideTooltip = _useTooltip.hideTooltip;

  var handleMouseHover = function handleMouseHover(event) {
    var datum = getArcFromMouse(event);

    if (datum) {
      onMouseMove === null || onMouseMove === void 0 ? void 0 : onMouseMove(datum, event);
      showTooltipFromEvent(createElement(tooltip, {
        datum: datum
      }), event);
    } else {
      hideTooltip();
    }
  };

  var handleMouseLeave = function handleMouseLeave() {
    hideTooltip();
  };

  var handleClick = function handleClick(event) {
    if (!onClick) return;
    var arc = getArcFromMouse(event);

    if (arc) {
      onClick(arc, event);
    }
  };

  return React.createElement("canvas", {
    ref: canvasEl,
    width: outerWidth * pixelRatio,
    height: outerHeight * pixelRatio,
    style: {
      width: outerWidth,
      height: outerHeight,
      cursor: isInteractive ? 'auto' : 'normal'
    },
    onMouseEnter: isInteractive ? handleMouseHover : undefined,
    onMouseMove: isInteractive ? handleMouseHover : undefined,
    onMouseLeave: isInteractive ? handleMouseLeave : undefined,
    onClick: isInteractive ? handleClick : undefined
  });
};

var PieCanvas$1 = withContainer(PieCanvas);

var ResponsivePieCanvas = function ResponsivePieCanvas(props) {
  return React.createElement(ResponsiveWrapper, null, function (_ref) {
    var width = _ref.width,
        height = _ref.height;
    return React.createElement(PieCanvas$1, Object.assign({
      width: width,
      height: height
    }, props));
  });
};

export { Pie$1 as Pie, PieCanvas$1 as PieCanvas, ResponsivePie, ResponsivePieCanvas, defaultProps, useNormalizedData, usePie, usePieArcGenerator, usePieArcs, usePieFromBox, usePieLayerContext, usePieRadialLabels, usePieSliceLabels };
//# sourceMappingURL=nivo-pie.es.js.map
