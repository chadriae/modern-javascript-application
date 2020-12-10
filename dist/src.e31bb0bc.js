// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/showdate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showDate = void 0;

// Show the date
var showDate = function showDate() {
  var date = new Date();
  var dateDay = date.getDate();
  var dateMonth = date.getMonth() + 1;
  var dateYear = date.getFullYear();
  var weekDay = date.getDay();
  var dayWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  document.querySelector("#date").innerHTML = "".concat(dayWeek[weekDay - 1], "<br>").concat(months[dateMonth - 1], " ").concat(dateDay, "<br>").concat(dateYear);
  var newContent = document.createElement("p");
  var weekDay1 = document.getElementById('weekDayOne');
  var weekDay2 = document.getElementById('weekDayTwo');
  var weekDay3 = document.getElementById('weekDayThree');
  var weekDay4 = document.getElementById('weekDayFour');
  var weekDays = [weekDay1, weekDay2, weekDay3, weekDay4];
  var i = 0;
  weekDays.forEach(function (dayOfTheWeek) {
    var j = (weekDay + i) % 7;
    dayOfTheWeek.textContent = "".concat(dayWeek[j]);
    i++;
  });
};

exports.showDate = showDate;
},{}],"js/displayclock.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.displayClock = void 0;

// Live clock
var displayClock = function displayClock() {
  var time = new Date();

  var timeClock = function timeClock(standIn) {
    if (standIn < 10) {
      standIn = '0' + standIn;
    }

    return standIn;
  };

  var hours = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();
  timeNow.innerHTML = timeClock(hours) + ":" + timeClock(minutes) + ":" + timeClock(seconds);
};

exports.displayClock = displayClock;
setInterval(displayClock, 1000);
},{}],"js/animations.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addAnimation = void 0;

// Animations
var addAnimation = function addAnimation(weather, index) {
  var imgTemp0 = document.querySelector("#imgTemp0");
  var imgTemp1 = document.querySelector("#imgDayOne");
  var imgTemp2 = document.querySelector("#imgDayTwo");
  var imgTemp3 = document.querySelector("#imgDayThree");
  var imgTemp4 = document.querySelector("#imgDayFour");
  var imgTemp = [imgTemp0, imgTemp1, imgTemp2, imgTemp3, imgTemp4];

  switch (weather) {
    case "clouds":
      imgTemp[index].innerHTML = "<lottie-player src=\"https://assets1.lottiefiles.com/packages/lf20_KUFdS6.json\"  background=\"transparent\"  speed=\"1\"  style=\"width: 120px; height: 120px;\"  loop  autoplay></lottie-player>";
      return;

    case "rain":
      imgTemp[index].innerHTML = "<lottie-player src=\"https://assets6.lottiefiles.com/private_files/lf30_9s6k5U.json\"  background=\"transparent\"  speed=\"1\"  style=\"width: 120px; height: 120px;\"  loop  autoplay></lottie-player>";
      return;

    case "sun":
      imgTemp[index].innerHTML = "<lottie-player src=\"https://assets4.lottiefiles.com/private_files/lf30_Um0Z9o.json\"  background=\"transparent\"  speed=\"1\"  style=\"width: 120px; height: 120px;\"  loop  autoplay></lottie-player>";
      return;

    case "storm":
      imgTemp[index].innerHTML = "<lottie-player src=\"https://assets6.lottiefiles.com/private_files/lf30_LPtaP2.json\"  background=\"transparent\"  speed=\"1\"  style=\"width: 120px; height: 120px;\"  loop  autoplay></lottie-player>";
      return;

    case "snow":
      imgTemp[index].innerHTML = "<lottie-player src=\"https://assets6.lottiefiles.com/private_files/lf30_kZXVCH.json\"  background=\"transparent\"  speed=\"1\"  style=\"width: 120px; height: 120px;\"  loop  autoplay></lottie-player>";
      return;
  }
};

exports.addAnimation = addAnimation;
},{}],"js/showtemperature.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showTemperature = void 0;

var _animations = require("./animations.js");

// Function to show temperature according to city
var daysCount = 5;

var showTemperature = function showTemperature(currentCity) {
  fetch("https://api.weatherbit.io/v2.0/forecast/daily?city=".concat(currentCity, "&key=cbe1db44a04a412ebe4a95a03cba00cd&days=").concat(daysCount)).then(function (response) {
    return response.json();
  }).then(function (data) {
    var tempDayZero = data["data"]["0"]["temp"];
    temperatureDayZero.innerHTML = "".concat(tempDayZero, "\xB0C");
    var descriptions = [];

    for (var i = 0; i < daysCount; i++) {
      var j = void 0;
      j = data["data"][i]["weather"]["description"];
      descriptions.push(j);
    }

    var descriptionDaysHtml = [document.querySelector("#descrDayZero"), document.querySelector("#descrDayOne"), document.querySelector("#descrDayTwo"), document.querySelector("#descrDayThree"), document.querySelector("#descrDayFour")];

    for (var _i = 0; _i < daysCount; _i++) {
      descriptionDaysHtml[_i].innerHTML = descriptions[_i];
    }

    var minTemps = [];

    for (var _i2 = 0; _i2 < daysCount; _i2++) {
      var _j = void 0;

      _j = data["data"][_i2]["min_temp"];
      minTemps.push(_j);
    }

    var maxTemps = [];

    for (var _i3 = 0; _i3 < daysCount; _i3++) {
      var _j2 = void 0;

      _j2 = data["data"][_i3]["max_temp"];
      maxTemps.push(_j2);
    }

    var minMaxTempsHtml = [document.querySelector("#temperatureDayOne"), document.querySelector("#temperatureDayTwo"), document.querySelector("#temperatureDayThree"), document.querySelector("#temperatureDayFour")];

    for (var _i4 = 0; _i4 < minMaxTempsHtml.length; _i4++) {
      minMaxTempsHtml[_i4].innerHTML = "min ".concat(minTemps[_i4], "\xB0C<br>max ").concat(maxTemps[_i4], "\xB0C");
    }

    descriptions.forEach(function (element, index) {
      if (element.includes("sun")) {
        (0, _animations.addAnimation)("sun", index);
      }

      if (element.includes("Clear Sky")) {
        (0, _animations.addAnimation)("sun", index);
      }

      if (element.includes("rain")) {
        (0, _animations.addAnimation)("rain", index);
      }

      if (element.includes("drizzle")) {
        (0, _animations.addAnimation)("rain", index);
      }

      if (element.includes("clouds")) {
        (0, _animations.addAnimation)("clouds", index);
      }

      if (element.includes("storm")) {
        (0, _animations.addAnimation)("storm", index);
      }

      if (element.includes("snow")) {
        (0, _animations.addAnimation)("snow", index);
      }
    });
  });
};

exports.showTemperature = showTemperature;
},{"./animations.js":"js/animations.js"}],"js/changebackground.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeBackground = void 0;

// Function to change background according to city
var changeBackground = function changeBackground(currentCity) {
  fetch("https://api.unsplash.com/search/photos/?query=".concat(currentCity, "&client_id=00WYi-JstJlyoIEg8SJDxYOS-9RB4Hr7_yfu5gpIO2g")).then(function (response) {
    return response.json();
  }).then(function (data) {
    var randomNumber = Math.floor(Math.random() * 5);
    var imgUrl = data["results"][randomNumber]["urls"]["full"];
    document.body.style.backgroundImage = "url(".concat(imgUrl, ")");
  });
};

exports.changeBackground = changeBackground;
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _showdate = require("./js/showdate.js");

var _displayclock = require("./js/displayclock.js");

var _showtemperature = require("./js/showtemperature.js");

var _changebackground = require("./js/changebackground.js");

// TODO line graph chart.js
// TODO show last 5 searches
var currentCity = document.querySelector("#autocomplete");
var cityLocation = document.querySelector(".location");
var cityCoordinates = document.querySelector(".coordinates"); // Use enter key for submitting

currentCity.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    event.preventDefault();
    document.querySelector("#run").click();
  }
}); // Function to change HTML with current city

var cityHTML = function cityHTML(currentCity) {
  cityLocation.innerHTML = "".concat(currentCity);
}; // Executions for location of user


window.addEventListener("load", function () {
  var getLocation = function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      cityCoordinates.innerHTML = "Geolocation is not supported by this browser.";
    }
  };

  var showPosition = function showPosition(position) {
    // Show place name based on coordinates
    fetch("https://api.opencagedata.com/geocode/v1/json?q=".concat(position.coords.latitude, "+").concat(position.coords.longitude, "&key=0dc9b14ba9a846f19428714fed4f54cc")).then(function (response) {
      return response.json();
    }).then(function (data) {
      var currentCity = data["results"]["0"]["components"]["city"];
      var currentCountry = data["results"]["0"]["components"]["country"];
      cityHTML(currentCity, currentCountry);
      (0, _changebackground.changeBackground)(currentCity);
      (0, _showtemperature.showTemperature)(currentCity);
    });
  };

  getLocation();
  (0, _displayclock.displayClock)();
  (0, _showdate.showDate)();
}); // Executions after click or enter

document.querySelector("#run").addEventListener("click", function () {
  cityHTML(currentCity.value);
  (0, _changebackground.changeBackground)(currentCity.value);
  (0, _showtemperature.showTemperature)(currentCity.value);
  (0, _displayclock.displayClock)();
  (0, _showdate.showDate)();
  (0, _showtemperature.showTemperature)(currentCity);
});
},{"./js/showdate.js":"js/showdate.js","./js/displayclock.js":"js/displayclock.js","./js/showtemperature.js":"js/showtemperature.js","./js/changebackground.js":"js/changebackground.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58720" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map