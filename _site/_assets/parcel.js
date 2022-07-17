// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"4KZjZ":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "29272d09679250085207dd77abff9f2e";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
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
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
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
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
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
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"NIh8e":[function(require,module,exports) {
require("./src/_assets/scss/main.scss");
require("./src/_assets/js/main.js");

},{"./src/_assets/scss/main.scss":"DuIhq","./src/_assets/js/main.js":"6Bpqg"}],"DuIhq":[function() {},{}],"6Bpqg":[function(require,module,exports) {
require("./_bootstrap.js");
(function () {
  $(document).ready(function () {
    $('.logo-carousel').slick({
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });
  });
})();

},{"./_bootstrap.js":"6uiQt"}],"6uiQt":[function(require,module,exports) {
require("bootstrap/js/dist/alert");
require("bootstrap/js/dist/button");
require("bootstrap/js/dist/carousel");
require("bootstrap/js/dist/collapse");
require("bootstrap/js/dist/modal");
require("bootstrap/js/dist/popover");
require("bootstrap/js/dist/scrollspy");
require("bootstrap/js/dist/tab");
require("bootstrap/js/dist/toast");
require("bootstrap/js/dist/tooltip");
// Needs manual initialization, code below
// Popovers initialization
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new Popover(popoverTriggerEl);
});
// Tooltips initialization
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new Tooltip(tooltipTriggerEl);
});

},{"bootstrap/js/dist/alert":"1TdZP","bootstrap/js/dist/button":"5az7h","bootstrap/js/dist/carousel":"3u9s4","bootstrap/js/dist/collapse":"VkzX0","bootstrap/js/dist/modal":"3bbx5","bootstrap/js/dist/popover":"6kYkY","bootstrap/js/dist/scrollspy":"HkTDd","bootstrap/js/dist/tab":"mLXwQ","bootstrap/js/dist/toast":"38EYQ","bootstrap/js/dist/tooltip":"5W3M5"}],"1TdZP":[function(require,module,exports) {
var define;
/*!
* Bootstrap alert.js v5.0.0 (https://getbootstrap.com/)
* Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('./dom/data.js'), require('./dom/event-handler.js'), require('./base-component.js')) : typeof define === 'function' && define.amd ? define(['./dom/data', './dom/event-handler', './base-component'], factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Alert = factory(global.Data, global.EventHandler, global.Base));
})(this, function (Data, EventHandler, BaseComponent) {
  "use strict";
  function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && ('default' in e) ? e : {
      'default': e
    };
  }
  var Data__default = /*#__PURE__*/_interopDefaultLegacy(Data);
  var EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  var BaseComponent__default = /*#__PURE__*/_interopDefaultLegacy(BaseComponent);
  /**
  * --------------------------------------------------------------------------
  * Bootstrap (v5.0.0): util/index.js
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  * --------------------------------------------------------------------------
  */
  const MILLISECONDS_MULTIPLIER = 1000;
  const TRANSITION_END = 'transitionend';
  // Shoutout AngusCroll (https://goo.gl/pxwQGp)
  const getSelector = element => {
    let selector = element.getAttribute('data-bs-target');
    if (!selector || selector === '#') {
      let hrefAttr = element.getAttribute('href');
      // The only valid content that could double as a selector are IDs or classes,
      // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
      // `document.querySelector` will rightfully complain it is invalid.
      // See https://github.com/twbs/bootstrap/issues/32273
      if (!hrefAttr || !hrefAttr.includes('#') && !hrefAttr.startsWith('.')) {
        return null;
      }
      // Just in case some CMS puts out a full URL with the anchor appended
      if (hrefAttr.includes('#') && !hrefAttr.startsWith('#')) {
        hrefAttr = `#${hrefAttr.split('#')[1]}`;
      }
      selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : null;
    }
    return selector;
  };
  const getElementFromSelector = element => {
    const selector = getSelector(element);
    return selector ? document.querySelector(selector) : null;
  };
  const getTransitionDurationFromElement = element => {
    if (!element) {
      return 0;
    }
    // Get transition-duration of the element
    let {transitionDuration, transitionDelay} = window.getComputedStyle(element);
    const floatTransitionDuration = Number.parseFloat(transitionDuration);
    const floatTransitionDelay = Number.parseFloat(transitionDelay);
    // Return 0 if element or transition duration is not found
    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    }
    // If multiple durations are defined, take the first
    transitionDuration = transitionDuration.split(',')[0];
    transitionDelay = transitionDelay.split(',')[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
  };
  const triggerTransitionEnd = element => {
    element.dispatchEvent(new Event(TRANSITION_END));
  };
  const emulateTransitionEnd = (element, duration) => {
    let called = false;
    const durationPadding = 5;
    const emulatedDuration = duration + durationPadding;
    function listener() {
      called = true;
      element.removeEventListener(TRANSITION_END, listener);
    }
    element.addEventListener(TRANSITION_END, listener);
    setTimeout(() => {
      if (!called) {
        triggerTransitionEnd(element);
      }
    }, emulatedDuration);
  };
  const getjQuery = () => {
    const {jQuery} = window;
    if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
      return jQuery;
    }
    return null;
  };
  const onDOMContentLoaded = callback => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback);
    } else {
      callback();
    }
  };
  const defineJQueryPlugin = (name, plugin) => {
    onDOMContentLoaded(() => {
      const $ = getjQuery();
      /*istanbul ignore if*/
      if ($) {
        const JQUERY_NO_CONFLICT = $.fn[name];
        $.fn[name] = plugin.jQueryInterface;
        $.fn[name].Constructor = plugin;
        $.fn[name].noConflict = () => {
          $.fn[name] = JQUERY_NO_CONFLICT;
          return plugin.jQueryInterface;
        };
      }
    });
  };
  /**
  * --------------------------------------------------------------------------
  * Bootstrap (v5.0.0): alert.js
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  * --------------------------------------------------------------------------
  */
  /**
  * ------------------------------------------------------------------------
  * Constants
  * ------------------------------------------------------------------------
  */
  const NAME = 'alert';
  const DATA_KEY = 'bs.alert';
  const EVENT_KEY = `.${DATA_KEY}`;
  const DATA_API_KEY = '.data-api';
  const SELECTOR_DISMISS = '[data-bs-dismiss="alert"]';
  const EVENT_CLOSE = `close${EVENT_KEY}`;
  const EVENT_CLOSED = `closed${EVENT_KEY}`;
  const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
  const CLASS_NAME_ALERT = 'alert';
  const CLASS_NAME_FADE = 'fade';
  const CLASS_NAME_SHOW = 'show';
  /**
  * ------------------------------------------------------------------------
  * Class Definition
  * ------------------------------------------------------------------------
  */
  class Alert extends BaseComponent__default['default'] {
    // Getters
    static get DATA_KEY() {
      return DATA_KEY;
    }
    /*Public*/
    close(element) {
      const rootElement = element ? this._getRootElement(element) : this._element;
      const customEvent = this._triggerCloseEvent(rootElement);
      if (customEvent === null || customEvent.defaultPrevented) {
        return;
      }
      this._removeElement(rootElement);
    }
    /*Private*/
    _getRootElement(element) {
      return getElementFromSelector(element) || element.closest(`.${CLASS_NAME_ALERT}`);
    }
    _triggerCloseEvent(element) {
      return EventHandler__default['default'].trigger(element, EVENT_CLOSE);
    }
    _removeElement(element) {
      element.classList.remove(CLASS_NAME_SHOW);
      if (!element.classList.contains(CLASS_NAME_FADE)) {
        this._destroyElement(element);
        return;
      }
      const transitionDuration = getTransitionDurationFromElement(element);
      EventHandler__default['default'].one(element, 'transitionend', () => this._destroyElement(element));
      emulateTransitionEnd(element, transitionDuration);
    }
    _destroyElement(element) {
      if (element.parentNode) {
        element.parentNode.removeChild(element);
      }
      EventHandler__default['default'].trigger(element, EVENT_CLOSED);
    }
    /*Static*/
    static jQueryInterface(config) {
      return this.each(function () {
        let data = Data__default['default'].get(this, DATA_KEY);
        if (!data) {
          data = new Alert(this);
        }
        if (config === 'close') {
          data[config](this);
        }
      });
    }
    static handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }
        alertInstance.close(this);
      };
    }
  }
  /**
  * ------------------------------------------------------------------------
  * Data Api implementation
  * ------------------------------------------------------------------------
  */
  EventHandler__default['default'].on(document, EVENT_CLICK_DATA_API, SELECTOR_DISMISS, Alert.handleDismiss(new Alert()));
  /**
  * ------------------------------------------------------------------------
  * jQuery
  * ------------------------------------------------------------------------
  * add .Alert to jQuery only if jQuery is present
  */
  defineJQueryPlugin(NAME, Alert);
  return Alert;
});

},{"./dom/data.js":"5gDwT","./dom/event-handler.js":"6QkXI","./base-component.js":"pGtcs"}],"5gDwT":[function(require,module,exports) {
var define;
/*!
* Bootstrap data.js v5.0.0 (https://getbootstrap.com/)
* Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Data = factory());
})(this, function () {
  "use strict";
  /**
  * --------------------------------------------------------------------------
  * Bootstrap (v5.0.0): dom/data.js
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  * --------------------------------------------------------------------------
  */
  /**
  * ------------------------------------------------------------------------
  * Constants
  * ------------------------------------------------------------------------
  */
  const elementMap = new Map();
  var data = {
    set(element, key, instance) {
      if (!elementMap.has(element)) {
        elementMap.set(element, new Map());
      }
      const instanceMap = elementMap.get(element);
      // make it clear we only want one instance per element
      // can be removed later when multiple key/instances are fine to be used
      if (!instanceMap.has(key) && instanceMap.size !== 0) {
        // eslint-disable-next-line no-console
        console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
        return;
      }
      instanceMap.set(key, instance);
    },
    get(element, key) {
      if (elementMap.has(element)) {
        return elementMap.get(element).get(key) || null;
      }
      return null;
    },
    remove(element, key) {
      if (!elementMap.has(element)) {
        return;
      }
      const instanceMap = elementMap.get(element);
      instanceMap.delete(key);
      // free up element references if there are no instances left for an element
      if (instanceMap.size === 0) {
        elementMap.delete(element);
      }
    }
  };
  return data;
});

},{}],"6QkXI":[function(require,module,exports) {
var define;
/*!
* Bootstrap event-handler.js v5.0.0 (https://getbootstrap.com/)
* Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.EventHandler = factory());
})(this, function () {
  "use strict";
  /**
  * --------------------------------------------------------------------------
  * Bootstrap (v5.0.0): util/index.js
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  * --------------------------------------------------------------------------
  */
  const getjQuery = () => {
    const {jQuery} = window;
    if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
      return jQuery;
    }
    return null;
  };
  /**
  * --------------------------------------------------------------------------
  * Bootstrap (v5.0.0): dom/event-handler.js
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  * --------------------------------------------------------------------------
  */
  /**
  * ------------------------------------------------------------------------
  * Constants
  * ------------------------------------------------------------------------
  */
  const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
  const stripNameRegex = /\..*/;
  const stripUidRegex = /::\d+$/;
  const eventRegistry = {};
  // Events storage
  let uidEvent = 1;
  const customEvents = {
    mouseenter: 'mouseover',
    mouseleave: 'mouseout'
  };
  const customEventsRegex = /^(mouseenter|mouseleave)/i;
  const nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);
  /**
  * ------------------------------------------------------------------------
  * Private methods
  * ------------------------------------------------------------------------
  */
  function getUidEvent(element, uid) {
    return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
  }
  function getEvent(element) {
    const uid = getUidEvent(element);
    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || ({});
    return eventRegistry[uid];
  }
  function bootstrapHandler(element, fn) {
    return function handler(event) {
      event.delegateTarget = element;
      if (handler.oneOff) {
        EventHandler.off(element, event.type, fn);
      }
      return fn.apply(element, [event]);
    };
  }
  function bootstrapDelegationHandler(element, selector, fn) {
    return function handler(event) {
      const domElements = element.querySelectorAll(selector);
      for (let {target} = event; target && target !== this; target = target.parentNode) {
        for (let i = domElements.length; i--; ) {
          if (domElements[i] === target) {
            event.delegateTarget = target;
            if (handler.oneOff) {
              // eslint-disable-next-line unicorn/consistent-destructuring
              EventHandler.off(element, event.type, selector, fn);
            }
            return fn.apply(target, [event]);
          }
        }
      }
      // To please ESLint
      return null;
    };
  }
  function findHandler(events, handler, delegationSelector = null) {
    const uidEventList = Object.keys(events);
    for (let i = 0, len = uidEventList.length; i < len; i++) {
      const event = events[uidEventList[i]];
      if (event.originalHandler === handler && event.delegationSelector === delegationSelector) {
        return event;
      }
    }
    return null;
  }
  function normalizeParams(originalTypeEvent, handler, delegationFn) {
    const delegation = typeof handler === 'string';
    const originalHandler = delegation ? delegationFn : handler;
    let typeEvent = getTypeEvent(originalTypeEvent);
    const isNative = nativeEvents.has(typeEvent);
    if (!isNative) {
      typeEvent = originalTypeEvent;
    }
    return [delegation, originalHandler, typeEvent];
  }
  function addHandler(element, originalTypeEvent, handler, delegationFn, oneOff) {
    if (typeof originalTypeEvent !== 'string' || !element) {
      return;
    }
    if (!handler) {
      handler = delegationFn;
      delegationFn = null;
    }
    // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
    // this prevents the handler from being dispatched the same way as mouseover or mouseout does
    if (customEventsRegex.test(originalTypeEvent)) {
      const wrapFn = fn => {
        return function (event) {
          if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
            return fn.call(this, event);
          }
        };
      };
      if (delegationFn) {
        delegationFn = wrapFn(delegationFn);
      } else {
        handler = wrapFn(handler);
      }
    }
    const [delegation, originalHandler, typeEvent] = normalizeParams(originalTypeEvent, handler, delegationFn);
    const events = getEvent(element);
    const handlers = events[typeEvent] || (events[typeEvent] = {});
    const previousFn = findHandler(handlers, originalHandler, delegation ? handler : null);
    if (previousFn) {
      previousFn.oneOff = previousFn.oneOff && oneOff;
      return;
    }
    const uid = getUidEvent(originalHandler, originalTypeEvent.replace(namespaceRegex, ''));
    const fn = delegation ? bootstrapDelegationHandler(element, handler, delegationFn) : bootstrapHandler(element, handler);
    fn.delegationSelector = delegation ? handler : null;
    fn.originalHandler = originalHandler;
    fn.oneOff = oneOff;
    fn.uidEvent = uid;
    handlers[uid] = fn;
    element.addEventListener(typeEvent, fn, delegation);
  }
  function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    const fn = findHandler(events[typeEvent], handler, delegationSelector);
    if (!fn) {
      return;
    }
    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
    delete events[typeEvent][fn.uidEvent];
  }
  function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    const storeElementEvent = events[typeEvent] || ({});
    Object.keys(storeElementEvent).forEach(handlerKey => {
      if (handlerKey.includes(namespace)) {
        const event = storeElementEvent[handlerKey];
        removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
      }
    });
  }
  function getTypeEvent(event) {
    // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
    event = event.replace(stripNameRegex, '');
    return customEvents[event] || event;
  }
  const EventHandler = {
    on(element, event, handler, delegationFn) {
      addHandler(element, event, handler, delegationFn, false);
    },
    one(element, event, handler, delegationFn) {
      addHandler(element, event, handler, delegationFn, true);
    },
    off(element, originalTypeEvent, handler, delegationFn) {
      if (typeof originalTypeEvent !== 'string' || !element) {
        return;
      }
      const [delegation, originalHandler, typeEvent] = normalizeParams(originalTypeEvent, handler, delegationFn);
      const inNamespace = typeEvent !== originalTypeEvent;
      const events = getEvent(element);
      const isNamespace = originalTypeEvent.startsWith('.');
      if (typeof originalHandler !== 'undefined') {
        // Simplest case: handler is passed, remove that listener ONLY.
        if (!events || !events[typeEvent]) {
          return;
        }
        removeHandler(element, events, typeEvent, originalHandler, delegation ? handler : null);
        return;
      }
      if (isNamespace) {
        Object.keys(events).forEach(elementEvent => {
          removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        });
      }
      const storeElementEvent = events[typeEvent] || ({});
      Object.keys(storeElementEvent).forEach(keyHandlers => {
        const handlerKey = keyHandlers.replace(stripUidRegex, '');
        if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
          const event = storeElementEvent[keyHandlers];
          removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
        }
      });
    },
    trigger(element, event, args) {
      if (typeof event !== 'string' || !element) {
        return null;
      }
      const $ = getjQuery();
      const typeEvent = getTypeEvent(event);
      const inNamespace = event !== typeEvent;
      const isNative = nativeEvents.has(typeEvent);
      let jQueryEvent;
      let bubbles = true;
      let nativeDispatch = true;
      let defaultPrevented = false;
      let evt = null;
      if (inNamespace && $) {
        jQueryEvent = $.Event(event, args);
        $(element).trigger(jQueryEvent);
        bubbles = !jQueryEvent.isPropagationStopped();
        nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
        defaultPrevented = jQueryEvent.isDefaultPrevented();
      }
      if (isNative) {
        evt = document.createEvent('HTMLEvents');
        evt.initEvent(typeEvent, bubbles, true);
      } else {
        evt = new CustomEvent(event, {
          bubbles,
          cancelable: true
        });
      }
      // merge custom information in our event
      if (typeof args !== 'undefined') {
        Object.keys(args).forEach(key => {
          Object.defineProperty(evt, key, {
            get() {
              return args[key];
            }
          });
        });
      }
      if (defaultPrevented) {
        evt.preventDefault();
      }
      if (nativeDispatch) {
        element.dispatchEvent(evt);
      }
      if (evt.defaultPrevented && typeof jQueryEvent !== 'undefined') {
        jQueryEvent.preventDefault();
      }
      return evt;
    }
  };
  return EventHandler;
});

},{}],"pGtcs":[function(require,module,exports) {
var define;
/*!
* Bootstrap base-component.js v5.0.0 (https://getbootstrap.com/)
* Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('./dom/data.js'), require('./dom/event-handler.js')) : typeof define === 'function' && define.amd ? define(['./dom/data', './dom/event-handler'], factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Base = factory(global.Data, global.EventHandler));
})(this, function (Data, EventHandler) {
  "use strict";
  function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && ('default' in e) ? e : {
      'default': e
    };
  }
  var Data__default = /*#__PURE__*/_interopDefaultLegacy(Data);
  var EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  /**
  * --------------------------------------------------------------------------
  * Bootstrap (v5.0.0): base-component.js
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  * --------------------------------------------------------------------------
  */
  /**
  * ------------------------------------------------------------------------
  * Constants
  * ------------------------------------------------------------------------
  */
  const VERSION = '5.0.0';
  class BaseComponent {
    constructor(element) {
      element = typeof element === 'string' ? document.querySelector(element) : element;
      if (!element) {
        return;
      }
      this._element = element;
      Data__default['default'].set(this._element, this.constructor.DATA_KEY, this);
    }
    dispose() {
      Data__default['default'].remove(this._element, this.constructor.DATA_KEY);
      EventHandler__default['default'].off(this._element, `.${this.constructor.DATA_KEY}`);
      this._element = null;
    }
    /** Static*/
    static getInstance(element) {
      return Data__default['default'].get(element, this.DATA_KEY);
    }
    static get VERSION() {
      return VERSION;
    }
  }
  return BaseComponent;
});

},{"./dom/data.js":"5gDwT","./dom/event-handler.js":"6QkXI"}],"5az7h":[function(require,module,exports) {
var define;
/*!
* Bootstrap button.js v5.0.0 (https://getbootstrap.com/)
* Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('./dom/data.js'), require('./dom/event-handler.js'), require('./base-component.js')) : typeof define === 'function' && define.amd ? define(['./dom/data', './dom/event-handler', './base-component'], factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Button = factory(global.Data, global.EventHandler, global.Base));
})(this, function (Data, EventHandler, BaseComponent) {
  "use strict";
  function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && ('default' in e) ? e : {
      'default': e
    };
  }
  var Data__default = /*#__PURE__*/_interopDefaultLegacy(Data);
  var EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  var BaseComponent__default = /*#__PURE__*/_interopDefaultLegacy(BaseComponent);
  /**
  * --------------------------------------------------------------------------
  * Bootstrap (v5.0.0): util/index.js
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  * --------------------------------------------------------------------------
  */
  const getjQuery = () => {
    const {jQuery} = window;
    if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
      return jQuery;
    }
    return null;
  };
  const onDOMContentLoaded = callback => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback);
    } else {
      callback();
    }
  };
  const defineJQueryPlugin = (name, plugin) => {
    onDOMContentLoaded(() => {
      const $ = getjQuery();
      /*istanbul ignore if*/
      if ($) {
        const JQUERY_NO_CONFLICT = $.fn[name];
        $.fn[name] = plugin.jQueryInterface;
        $.fn[name].Constructor = plugin;
        $.fn[name].noConflict = () => {
          $.fn[name] = JQUERY_NO_CONFLICT;
          return plugin.jQueryInterface;
        };
      }
    });
  };
  /**
  * --------------------------------------------------------------------------
  * Bootstrap (v5.0.0): button.js
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  * --------------------------------------------------------------------------
  */
  /**
  * ------------------------------------------------------------------------
  * Constants
  * ------------------------------------------------------------------------
  */
  const NAME = 'button';
  const DATA_KEY = 'bs.button';
  const EVENT_KEY = `.${DATA_KEY}`;
  const DATA_API_KEY = '.data-api';
  const CLASS_NAME_ACTIVE = 'active';
  const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="button"]';
  const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
  /**
  * ------------------------------------------------------------------------
  * Class Definition
  * ------------------------------------------------------------------------
  */
  class Button extends BaseComponent__default['default'] {
    // Getters
    static get DATA_KEY() {
      return DATA_KEY;
    }
    /*Public*/
    toggle() {
      // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
      this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE));
    }
    /*Static*/
    static jQueryInterface(config) {
      return this.each(function () {
        let data = Data__default['default'].get(this, DATA_KEY);
        if (!data) {
          data = new Button(this);
        }
        if (config === 'toggle') {
          data[config]();
        }
      });
    }
  }
  /**
  * ------------------------------------------------------------------------
  * Data Api implementation
  * ------------------------------------------------------------------------
  */
  EventHandler__default['default'].on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, event => {
    event.preventDefault();
    const button = event.target.closest(SELECTOR_DATA_TOGGLE);
    let data = Data__default['default'].get(button, DATA_KEY);
    if (!data) {
      data = new Button(button);
    }
    data.toggle();
  });
  /**
  * ------------------------------------------------------------------------
  * jQuery
  * ------------------------------------------------------------------------
  * add .Button to jQuery only if jQuery is present
  */
  defineJQueryPlugin(NAME, Button);
  return Button;
});

},{"./dom/data.js":"5gDwT","./dom/event-handler.js":"6QkXI","./base-component.js":"pGtcs"}],"3u9s4":[function(require,module,exports) {
var define;
/*!
* Bootstrap carousel.js v5.0.0 (https://getbootstrap.com/)
* Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('./dom/data.js'), require('./dom/event-handler.js'), require('./dom/manipulator.js'), require('./dom/selector-engine.js'), require('./base-component.js')) : typeof define === 'function' && define.amd ? define(['./dom/data', './dom/event-handler', './dom/manipulator', './dom/selector-engine', './base-component'], factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Carousel = factory(global.Data, global.EventHandler, global.Manipulator, global.SelectorEngine, global.Base));
})(this, function (Data, EventHandler, Manipulator, SelectorEngine, BaseComponent) {
  "use strict";
  function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && ('default' in e) ? e : {
      'default': e
    };
  }
  var Data__default = /*#__PURE__*/_interopDefaultLegacy(Data);
  var EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  var Manipulator__default = /*#__PURE__*/_interopDefaultLegacy(Manipulator);
  var SelectorEngine__default = /*#__PURE__*/_interopDefaultLegacy(SelectorEngine);
  var BaseComponent__default = /*#__PURE__*/_interopDefaultLegacy(BaseComponent);
  /**
  * --------------------------------------------------------------------------
  * Bootstrap (v5.0.0): util/index.js
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  * --------------------------------------------------------------------------
  */
  const MILLISECONDS_MULTIPLIER = 1000;
  const TRANSITION_END = 'transitionend';
  // Shoutout AngusCroll (https://goo.gl/pxwQGp)
  const toType = obj => {
    if (obj === null || obj === undefined) {
      return `${obj}`;
    }
    return ({}).toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  };
  const getSelector = element => {
    let selector = element.getAttribute('data-bs-target');
    if (!selector || selector === '#') {
      let hrefAttr = element.getAttribute('href');
      // The only valid content that could double as a selector are IDs or classes,
      // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
      // `document.querySelector` will rightfully complain it is invalid.
      // See https://github.com/twbs/bootstrap/issues/32273
      if (!hrefAttr || !hrefAttr.includes('#') && !hrefAttr.startsWith('.')) {
        return null;
      }
      // Just in case some CMS puts out a full URL with the anchor appended
      if (hrefAttr.includes('#') && !hrefAttr.startsWith('#')) {
        hrefAttr = `#${hrefAttr.split('#')[1]}`;
      }
      selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : null;
    }
    return selector;
  };
  const getElementFromSelector = element => {
    const selector = getSelector(element);
    return selector ? document.querySelector(selector) : null;
  };
  const getTransitionDurationFromElement = element => {
    if (!element) {
      return 0;
    }
    // Get transition-duration of the element
    let {transitionDuration, transitionDelay} = window.getComputedStyle(element);
    const floatTransitionDuration = Number.parseFloat(transitionDuration);
    const floatTransitionDelay = Number.parseFloat(transitionDelay);
    // Return 0 if element or transition duration is not found
    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    }
    // If multiple durations are defined, take the first
    transitionDuration = transitionDuration.split(',')[0];
    transitionDelay = transitionDelay.split(',')[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
  };
  const triggerTransitionEnd = element => {
    element.dispatchEvent(new Event(TRANSITION_END));
  };
  const isElement = obj => (obj[0] || obj).nodeType;
  const emulateTransitionEnd = (element, duration) => {
    let called = false;
    const durationPadding = 5;
    const emulatedDuration = duration + durationPadding;
    function listener() {
      called = true;
      element.removeEventListener(TRANSITION_END, listener);
    }
    element.addEventListener(TRANSITION_END, listener);
    setTimeout(() => {
      if (!called) {
        triggerTransitionEnd(element);
      }
    }, emulatedDuration);
  };
  const typeCheckConfig = (componentName, config, configTypes) => {
    Object.keys(configTypes).forEach(property => {
      const expectedTypes = configTypes[property];
      const value = config[property];
      const valueType = value && isElement(value) ? 'element' : toType(value);
      if (!new RegExp(expectedTypes).test(valueType)) {
        throw new TypeError(`${componentName.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
      }
    });
  };
  const isVisible = element => {
    if (!element) {
      return false;
    }
    if (element.style && element.parentNode && element.parentNode.style) {
      const elementStyle = getComputedStyle(element);
      const parentNodeStyle = getComputedStyle(element.parentNode);
      return elementStyle.display !== 'none' && parentNodeStyle.display !== 'none' && elementStyle.visibility !== 'hidden';
    }
    return false;
  };
  const reflow = element => element.offsetHeight;
  const getjQuery = () => {
    const {jQuery} = window;
    if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
      return jQuery;
    }
    return null;
  };
  const onDOMContentLoaded = callback => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback);
    } else {
      callback();
    }
  };
  const isRTL = () => document.documentElement.dir === 'rtl';
  const defineJQueryPlugin = (name, plugin) => {
    onDOMContentLoaded(() => {
      const $ = getjQuery();
      /*istanbul ignore if*/
      if ($) {
        const JQUERY_NO_CONFLICT = $.fn[name];
        $.fn[name] = plugin.jQueryInterface;
        $.fn[name].Constructor = plugin;
        $.fn[name].noConflict = () => {
          $.fn[name] = JQUERY_NO_CONFLICT;
          return plugin.jQueryInterface;
        };
      }
    });
  };
  /**
  * --------------------------------------------------------------------------
  * Bootstrap (v5.0.0): carousel.js
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  * --------------------------------------------------------------------------
  */
  /**
  * ------------------------------------------------------------------------
  * Constants
  * ------------------------------------------------------------------------
  */
  const NAME = 'carousel';
  const DATA_KEY = 'bs.carousel';
  const EVENT_KEY = `.${DATA_KEY}`;
  const DATA_API_KEY = '.data-api';
  const ARROW_LEFT_KEY = 'ArrowLeft';
  const ARROW_RIGHT_KEY = 'ArrowRight';
  const TOUCHEVENT_COMPAT_WAIT = 500;
  // Time for mouse compat events to fire after touch
  const SWIPE_THRESHOLD = 40;
  const Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  };
  const DefaultType = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  };
  const ORDER_NEXT = 'next';
  const ORDER_PREV = 'prev';
  const DIRECTION_LEFT = 'left';
  const DIRECTION_RIGHT = 'right';
  const EVENT_SLIDE = `slide${EVENT_KEY}`;
  const EVENT_SLID = `slid${EVENT_KEY}`;
  const EVENT_KEYDOWN = `keydown${EVENT_KEY}`;
  const EVENT_MOUSEENTER = `mouseenter${EVENT_KEY}`;
  const EVENT_MOUSELEAVE = `mouseleave${EVENT_KEY}`;
  const EVENT_TOUCHSTART = `touchstart${EVENT_KEY}`;
  const EVENT_TOUCHMOVE = `touchmove${EVENT_KEY}`;
  const EVENT_TOUCHEND = `touchend${EVENT_KEY}`;
  const EVENT_POINTERDOWN = `pointerdown${EVENT_KEY}`;
  const EVENT_POINTERUP = `pointerup${EVENT_KEY}`;
  const EVENT_DRAG_START = `dragstart${EVENT_KEY}`;
  const EVENT_LOAD_DATA_API = `load${EVENT_KEY}${DATA_API_KEY}`;
  const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
  const CLASS_NAME_CAROUSEL = 'carousel';
  const CLASS_NAME_ACTIVE = 'active';
  const CLASS_NAME_SLIDE = 'slide';
  const CLASS_NAME_END = 'carousel-item-end';
  const CLASS_NAME_START = 'carousel-item-start';
  const CLASS_NAME_NEXT = 'carousel-item-next';
  const CLASS_NAME_PREV = 'carousel-item-prev';
  const CLASS_NAME_POINTER_EVENT = 'pointer-event';
  const SELECTOR_ACTIVE = '.active';
  const SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
  const SELECTOR_ITEM = '.carousel-item';
  const SELECTOR_ITEM_IMG = '.carousel-item img';
  const SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
  const SELECTOR_INDICATORS = '.carousel-indicators';
  const SELECTOR_INDICATOR = '[data-bs-target]';
  const SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
  const SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
  const POINTER_TYPE_TOUCH = 'touch';
  const POINTER_TYPE_PEN = 'pen';
  /**
  * ------------------------------------------------------------------------
  * Class Definition
  * ------------------------------------------------------------------------
  */
  class Carousel extends BaseComponent__default['default'] {
    constructor(element, config) {
      super(element);
      this._items = null;
      this._interval = null;
      this._activeElement = null;
      this._isPaused = false;
      this._isSliding = false;
      this.touchTimeout = null;
      this.touchStartX = 0;
      this.touchDeltaX = 0;
      this._config = this._getConfig(config);
      this._indicatorsElement = SelectorEngine__default['default'].findOne(SELECTOR_INDICATORS, this._element);
      this._touchSupported = ('ontouchstart' in document.documentElement) || navigator.maxTouchPoints > 0;
      this._pointerEvent = Boolean(window.PointerEvent);
      this._addEventListeners();
    }
    /*Getters*/
    static get Default() {
      return Default;
    }
    static get DATA_KEY() {
      return DATA_KEY;
    }
    /*Public*/
    next() {
      if (!this._isSliding) {
        this._slide(ORDER_NEXT);
      }
    }
    nextWhenVisible() {
      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if (!document.hidden && isVisible(this._element)) {
        this.next();
      }
    }
    prev() {
      if (!this._isSliding) {
        this._slide(ORDER_PREV);
      }
    }
    pause(event) {
      if (!event) {
        this._isPaused = true;
      }
      if (SelectorEngine__default['default'].findOne(SELECTOR_NEXT_PREV, this._element)) {
        triggerTransitionEnd(this._element);
        this.cycle(true);
      }
      clearInterval(this._interval);
      this._interval = null;
    }
    cycle(event) {
      if (!event) {
        this._isPaused = false;
      }
      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }
      if (this._config && this._config.interval && !this._isPaused) {
        this._updateInterval();
        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    }
    to(index) {
      this._activeElement = SelectorEngine__default['default'].findOne(SELECTOR_ACTIVE_ITEM, this._element);
      const activeIndex = this._getItemIndex(this._activeElement);
      if (index > this._items.length - 1 || index < 0) {
        return;
      }
      if (this._isSliding) {
        EventHandler__default['default'].one(this._element, EVENT_SLID, () => this.to(index));
        return;
      }
      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }
      const order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;
      this._slide(order, this._items[index]);
    }
    dispose() {
      this._items = null;
      this._config = null;
      this._interval = null;
      this._isPaused = null;
      this._isSliding = null;
      this._activeElement = null;
      this._indicatorsElement = null;
      super.dispose();
    }
    /*Private*/
    _getConfig(config) {
      config = {
        ...Default,
        ...config
      };
      typeCheckConfig(NAME, config, DefaultType);
      return config;
    }
    _handleSwipe() {
      const absDeltax = Math.abs(this.touchDeltaX);
      if (absDeltax <= SWIPE_THRESHOLD) {
        return;
      }
      const direction = absDeltax / this.touchDeltaX;
      this.touchDeltaX = 0;
      if (!direction) {
        return;
      }
      this._slide(direction > 0 ? DIRECTION_RIGHT : DIRECTION_LEFT);
    }
    _addEventListeners() {
      if (this._config.keyboard) {
        EventHandler__default['default'].on(this._element, EVENT_KEYDOWN, event => this._keydown(event));
      }
      if (this._config.pause === 'hover') {
        EventHandler__default['default'].on(this._element, EVENT_MOUSEENTER, event => this.pause(event));
        EventHandler__default['default'].on(this._element, EVENT_MOUSELEAVE, event => this.cycle(event));
      }
      if (this._config.touch && this._touchSupported) {
        this._addTouchEventListeners();
      }
    }
    _addTouchEventListeners() {
      const start = event => {
        if (this._pointerEvent && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH)) {
          this.touchStartX = event.clientX;
        } else if (!this._pointerEvent) {
          this.touchStartX = event.touches[0].clientX;
        }
      };
      const move = event => {
        // ensure swiping with one touch and not pinching
        this.touchDeltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this.touchStartX;
      };
      const end = event => {
        if (this._pointerEvent && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH)) {
          this.touchDeltaX = event.clientX - this.touchStartX;
        }
        this._handleSwipe();
        if (this._config.pause === 'hover') {
          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          this.pause();
          if (this.touchTimeout) {
            clearTimeout(this.touchTimeout);
          }
          this.touchTimeout = setTimeout(event => this.cycle(event), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
        }
      };
      SelectorEngine__default['default'].find(SELECTOR_ITEM_IMG, this._element).forEach(itemImg => {
        EventHandler__default['default'].on(itemImg, EVENT_DRAG_START, e => e.preventDefault());
      });
      if (this._pointerEvent) {
        EventHandler__default['default'].on(this._element, EVENT_POINTERDOWN, event => start(event));
        EventHandler__default['default'].on(this._element, EVENT_POINTERUP, event => end(event));
        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        EventHandler__default['default'].on(this._element, EVENT_TOUCHSTART, event => start(event));
        EventHandler__default['default'].on(this._element, EVENT_TOUCHMOVE, event => move(event));
        EventHandler__default['default'].on(this._element, EVENT_TOUCHEND, event => end(event));
      }
    }
    _keydown(event) {
      if ((/input|textarea/i).test(event.target.tagName)) {
        return;
      }
      if (event.key === ARROW_LEFT_KEY) {
        event.preventDefault();
        this._slide(DIRECTION_RIGHT);
      } else if (event.key === ARROW_RIGHT_KEY) {
        event.preventDefault();
        this._slide(DIRECTION_LEFT);
      }
    }
    _getItemIndex(element) {
      this._items = element && element.parentNode ? SelectorEngine__default['default'].find(SELECTOR_ITEM, element.parentNode) : [];
      return this._items.indexOf(element);
    }
    _getItemByOrder(order, activeElement) {
      const isNext = order === ORDER_NEXT;
      const isPrev = order === ORDER_PREV;
      const activeIndex = this._getItemIndex(activeElement);
      const lastItemIndex = this._items.length - 1;
      const isGoingToWrap = isPrev && activeIndex === 0 || isNext && activeIndex === lastItemIndex;
      if (isGoingToWrap && !this._config.wrap) {
        return activeElement;
      }
      const delta = isPrev ? -1 : 1;
      const itemIndex = (activeIndex + delta) % this._items.length;
      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    }
    _triggerSlideEvent(relatedTarget, eventDirectionName) {
      const targetIndex = this._getItemIndex(relatedTarget);
      const fromIndex = this._getItemIndex(SelectorEngine__default['default'].findOne(SELECTOR_ACTIVE_ITEM, this._element));
      return EventHandler__default['default'].trigger(this._element, EVENT_SLIDE, {
        relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
    }
    _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        const activeIndicator = SelectorEngine__default['default'].findOne(SELECTOR_ACTIVE, this._indicatorsElement);
        activeIndicator.classList.remove(CLASS_NAME_ACTIVE);
        activeIndicator.removeAttribute('aria-current');
        const indicators = SelectorEngine__default['default'].find(SELECTOR_INDICATOR, this._indicatorsElement);
        for (let i = 0; i < indicators.length; i++) {
          if (Number.parseInt(indicators[i].getAttribute('data-bs-slide-to'), 10) === this._getItemIndex(element)) {
            indicators[i].classList.add(CLASS_NAME_ACTIVE);
            indicators[i].setAttribute('aria-current', 'true');
            break;
          }
        }
      }
    }
    _updateInterval() {
      const element = this._activeElement || SelectorEngine__default['default'].findOne(SELECTOR_ACTIVE_ITEM, this._element);
      if (!element) {
        return;
      }
      const elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);
      if (elementInterval) {
        this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
        this._config.interval = elementInterval;
      } else {
        this._config.interval = this._config.defaultInterval || this._config.interval;
      }
    }
    _slide(directionOrOrder, element) {
      const order = this._directionToOrder(directionOrOrder);
      const activeElement = SelectorEngine__default['default'].findOne(SELECTOR_ACTIVE_ITEM, this._element);
      const activeElementIndex = this._getItemIndex(activeElement);
      const nextElement = element || this._getItemByOrder(order, activeElement);
      const nextElementIndex = this._getItemIndex(nextElement);
      const isCycling = Boolean(this._interval);
      const isNext = order === ORDER_NEXT;
      const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
      const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
      const eventDirectionName = this._orderToDirection(order);
      if (nextElement && nextElement.classList.contains(CLASS_NAME_ACTIVE)) {
        this._isSliding = false;
        return;
      }
      const slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);
      if (slideEvent.defaultPrevented) {
        return;
      }
      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        return;
      }
      this._isSliding = true;
      if (isCycling) {
        this.pause();
      }
      this._setActiveIndicatorElement(nextElement);
      this._activeElement = nextElement;
      if (this._element.classList.contains(CLASS_NAME_SLIDE)) {
        nextElement.classList.add(orderClassName);
        reflow(nextElement);
        activeElement.classList.add(directionalClassName);
        nextElement.classList.add(directionalClassName);
        const transitionDuration = getTransitionDurationFromElement(activeElement);
        EventHandler__default['default'].one(activeElement, 'transitionend', () => {
          nextElement.classList.remove(directionalClassName, orderClassName);
          nextElement.classList.add(CLASS_NAME_ACTIVE);
          activeElement.classList.remove(CLASS_NAME_ACTIVE, orderClassName, directionalClassName);
          this._isSliding = false;
          setTimeout(() => {
            EventHandler__default['default'].trigger(this._element, EVENT_SLID, {
              relatedTarget: nextElement,
              direction: eventDirectionName,
              from: activeElementIndex,
              to: nextElementIndex
            });
          }, 0);
        });
        emulateTransitionEnd(activeElement, transitionDuration);
      } else {
        activeElement.classList.remove(CLASS_NAME_ACTIVE);
        nextElement.classList.add(CLASS_NAME_ACTIVE);
        this._isSliding = false;
        EventHandler__default['default'].trigger(this._element, EVENT_SLID, {
          relatedTarget: nextElement,
          direction: eventDirectionName,
          from: activeElementIndex,
          to: nextElementIndex
        });
      }
      if (isCycling) {
        this.cycle();
      }
    }
    _directionToOrder(direction) {
      if (![DIRECTION_RIGHT, DIRECTION_LEFT].includes(direction)) {
        return direction;
      }
      if (isRTL()) {
        return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
      }
      return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
    }
    _orderToDirection(order) {
      if (![ORDER_NEXT, ORDER_PREV].includes(order)) {
        return order;
      }
      if (isRTL()) {
        return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
      }
      return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
    }
    /*Static*/
    static carouselInterface(element, config) {
      let data = Data__default['default'].get(element, DATA_KEY);
      let _config = {
        ...Default,
        ...Manipulator__default['default'].getDataAttributes(element)
      };
      if (typeof config === 'object') {
        _config = {
          ..._config,
          ...config
        };
      }
      const action = typeof config === 'string' ? config : _config.slide;
      if (!data) {
        data = new Carousel(element, _config);
      }
      if (typeof config === 'number') {
        data.to(config);
      } else if (typeof action === 'string') {
        if (typeof data[action] === 'undefined') {
          throw new TypeError(`No method named "${action}"`);
        }
        data[action]();
      } else if (_config.interval && _config.ride) {
        data.pause();
        data.cycle();
      }
    }
    static jQueryInterface(config) {
      return this.each(function () {
        Carousel.carouselInterface(this, config);
      });
    }
    static dataApiClickHandler(event) {
      const target = getElementFromSelector(this);
      if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
        return;
      }
      const config = {
        ...Manipulator__default['default'].getDataAttributes(target),
        ...Manipulator__default['default'].getDataAttributes(this)
      };
      const slideIndex = this.getAttribute('data-bs-slide-to');
      if (slideIndex) {
        config.interval = false;
      }
      Carousel.carouselInterface(target, config);
      if (slideIndex) {
        Data__default['default'].get(target, DATA_KEY).to(slideIndex);
      }
      event.preventDefault();
    }
  }
  /**
  * ------------------------------------------------------------------------
  * Data Api implementation
  * ------------------------------------------------------------------------
  */
  EventHandler__default['default'].on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_SLIDE, Carousel.dataApiClickHandler);
  EventHandler__default['default'].on(window, EVENT_LOAD_DATA_API, () => {
    const carousels = SelectorEngine__default['default'].find(SELECTOR_DATA_RIDE);
    for (let i = 0, len = carousels.length; i < len; i++) {
      Carousel.carouselInterface(carousels[i], Data__default['default'].get(carousels[i], DATA_KEY));
    }
  });
  /**
  * ------------------------------------------------------------------------
  * jQuery
  * ------------------------------------------------------------------------
  * add .Carousel to jQuery only if jQuery is present
  */
  defineJQueryPlugin(NAME, Carousel);
  return Carousel;
});

},{"./dom/data.js":"5gDwT","./dom/event-handler.js":"6QkXI","./dom/manipulator.js":"60SIB","./dom/selector-engine.js":"5cZzE","./base-component.js":"pGtcs"}],"60SIB":[function(require,module,exports) {
var define;
/*!
* Bootstrap manipulator.js v5.0.0 (https://getbootstrap.com/)
* Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Manipulator = factory());
})(this, function () {
  "use strict";
  /**
  * --------------------------------------------------------------------------
  * Bootstrap (v5.0.0): dom/manipulator.js
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  * --------------------------------------------------------------------------
  */
  function normalizeData(val) {
    if (val === 'true') {
      return true;
    }
    if (val === 'false') {
      return false;
    }
    if (val === Number(val).toString()) {
      return Number(val);
    }
    if (val === '' || val === 'null') {
      return null;
    }
    return val;
  }
  function normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, chr => `-${chr.toLowerCase()}`);
  }
  const Manipulator = {
    setDataAttribute(element, key, value) {
      element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
    },
    removeDataAttribute(element, key) {
      element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
    },
    getDataAttributes(element) {
      if (!element) {
        return {};
      }
      const attributes = {};
      Object.keys(element.dataset).filter(key => key.startsWith('bs')).forEach(key => {
        let pureKey = key.replace(/^bs/, '');
        pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
        attributes[pureKey] = normalizeData(element.dataset[key]);
      });
      return attributes;
    },
    getDataAttribute(element, key) {
      return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
    },
    offset(element) {
      const rect = element.getBoundingClientRect();
      return {
        top: rect.top + document.body.scrollTop,
        left: rect.left + document.body.scrollLeft
      };
    },
    position(element) {
      return {
        top: element.offsetTop,
        left: element.offsetLeft
      };
    }
  };
  return Manipulator;
});

},{}],"5cZzE":[function(require,module,exports) {
var define;
/*!
* Bootstrap selector-engine.js v5.0.0 (https://getbootstrap.com/)
* Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.SelectorEngine = factory());
})(this, function () {
  "use strict";
  /**
  * --------------------------------------------------------------------------
  * Bootstrap (v5.0.0): dom/selector-engine.js
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  * --------------------------------------------------------------------------
  */
  /**
  * ------------------------------------------------------------------------
  * Constants
  * ------------------------------------------------------------------------
  */
  const NODE_TEXT = 3;
  const SelectorEngine = {
    find(selector, element = document.documentElement) {
      return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
    },
    findOne(selector, element = document.documentElement) {
      return Element.prototype.querySelector.call(element, selector);
    },
    children(element, selector) {
      return [].concat(...element.children).filter(child => child.matches(selector));
    },
    parents(element, selector) {
      const parents = [];
      let ancestor = element.parentNode;
      while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== NODE_TEXT) {
        if (ancestor.matches(selector)) {
          parents.push(ancestor);
        }
        ancestor = ancestor.parentNode;
      }
      return parents;
    },
    prev(element, selector) {
      let previous = element.previousElementSibling;
      while (previous) {
        if (previous.matches(selector)) {
          return [previous];
        }
        previous = previous.previousElementSibling;
      }
      return [];
    },
    next(element, selector) {
      let next = element.nextElementSibling;
      while (next) {
        if (next.matches(selector)) {
          return [next];
        }
        next = next.nextElementSibling;
      }
      return [];
    }
  };
  return SelectorEngine;
});

},{}],"VkzX0":[function(require,module,exports) {
var define;
/*!
* Bootstrap collapse.js v5.0.0 (https://getbootstrap.com/)
* Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('./dom/data.js'), require('./dom/event-handler.js'), require('./dom/manipulator.js'), require('./dom/selector-engine.js'), require('./base-component.js')) : typeof define === 'function' && define.amd ? define(['./dom/data', './dom/event-handler', './dom/manipulator', './dom/selector-engine', './base-component'], factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Collapse = factory(global.Data, global.EventHandler, global.Manipulator, global.SelectorEngine, global.Base));
})(this, function (Data, EventHandler, Manipulator, SelectorEngine, BaseComponent) {
  "use strict";
  function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && ('default' in e) ? e : {
      'default': e
    };
  }
  var Data__default = /*#__PURE__*/_interopDefaultLegacy(Data);
  var EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  var Manipulator__default = /*#__PURE__*/_interopDefaultLegacy(Manipulator);
  var SelectorEngine__default = /*#__PURE__*/_interopDefaultLegacy(SelectorEngine);
  var BaseComponent__default = /*#__PURE__*/_interopDefaultLegacy(BaseComponent);
  /**
  * --------------------------------------------------------------------------
  * Bootstrap (v5.0.0): util/index.js
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  * --------------------------------------------------------------------------
  */
  const MILLISECONDS_MULTIPLIER = 1000;
  const TRANSITION_END = 'transitionend';
  // Shoutout AngusCroll (https://goo.gl/pxwQGp)
  const toType = obj => {
    if (obj === null || obj === undefined) {
      return `${obj}`;
    }
    return ({}).toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  };
  const getSelector = element => {
    let selector = element.getAttribute('data-bs-target');
    if (!selector || selector === '#') {
      let hrefAttr = element.getAttribute('href');
      // The only valid content that could double as a selector are IDs or classes,
      // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
      // `document.querySelector` will rightfully complain it is invalid.
      // See https://github.com/twbs/bootstrap/issues/32273
      if (!hrefAttr || !hrefAttr.includes('#') && !hrefAttr.startsWith('.')) {
        return null;
      }
      // Just in case some CMS puts out a full URL with the anchor appended
      if (hrefAttr.includes('#') && !hrefAttr.startsWith('#')) {
        hrefAttr = `#${hrefAttr.split('#')[1]}`;
      }
      selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : null;
    }
    return selector;
  };
  const getSelectorFromElement = element => {
    const selector = getSelector(element);
    if (selector) {
      return document.querySelector(selector) ? selector : null;
    }
    return null;
  };
  const getElementFromSelector = element => {
    const selector = getSelector(element);
    return selector ? document.querySelector(selector) : null;
  };
  const getTransitionDurationFromElement = element => {
    if (!element) {
      return 0;
    }
    // Get transition-duration of the element
    let {transitionDuration, transitionDelay} = window.getComputedStyle(element);
    const floatTransitionDuration = Number.parseFloat(transitionDuration);
    const floatTransitionDelay = Number.parseFloat(transitionDelay);
    // Return 0 if element or transition duration is not found
    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    }
    // If multiple durations are defined, take the first
    transitionDuration = transitionDuration.split(',')[0];
    transitionDelay = transitionDelay.split(',')[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
  };
  const triggerTransitionEnd = element => {
    element.dispatchEvent(new Event(TRANSITION_END));
  };
  const isElement = obj => (obj[0] || obj).nodeType;
  const emulateTransitionEnd = (element, duration) => {
    let called = false;
    const durationPadding = 5;
    const emulatedDuration = duration + durationPadding;
    function listener() {
      called = true;
      element.removeEventListener(TRANSITION_END, listener);
    }
    element.addEventListener(TRANSITION_END, listener);
    setTimeout(() => {
      if (!called) {
        triggerTransitionEnd(element);
      }
    }, emulatedDuration);
  };
  const typeCheckConfig = (componentName, config, configTypes) => {
    Object.keys(configTypes).forEach(property => {
      const expectedTypes = configTypes[property];
      const value = config[property];
      const valueType = value && isElement(value) ? 'element' : toType(value);
      if (!new RegExp(expectedTypes).test(valueType)) {
        throw new TypeError(`${componentName.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
      }
    });
  };
  const reflow = element => element.offsetHeight;
  const getjQuery = () => {
    const {jQuery} = window;
    if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
      return jQuery;
    }
    return null;
  };
  const onDOMContentLoaded = callback => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback);
    } else {
      callback();
    }
  };
  const defineJQueryPlugin = (name, plugin) => {
    onDOMContentLoaded(() => {
      const $ = getjQuery();
      /*istanbul ignore if*/
      if ($) {
        const JQUERY_NO_CONFLICT = $.fn[name];
        $.fn[name] = plugin.jQueryInterface;
        $.fn[name].Constructor = plugin;
        $.fn[name].noConflict = () => {
          $.fn[name] = JQUERY_NO_CONFLICT;
          return plugin.jQueryInterface;
        };
      }
    });
  };
  /**
  * --------------------------------------------------------------------------
  * Bootstrap (v5.0.0): collapse.js
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  * --------------------------------------------------------------------------
  */
  /**
  * ------------------------------------------------------------------------
  * Constants
  * ------------------------------------------------------------------------
  */
  const NAME = 'collapse';
  const DATA_KEY = 'bs.collapse';
  const EVENT_KEY = `.${DATA_KEY}`;
  const DATA_API_KEY = '.data-api';
  const Default = {
    toggle: true,
    parent: ''
  };
  const DefaultType = {
    toggle: 'boolean',
    parent: '(string|element)'
  };
  const EVENT_SHOW = `show${EVENT_KEY}`;
  const EVENT_SHOWN = `shown${EVENT_KEY}`;
  const EVENT_HIDE = `hide${EVENT_KEY}`;
  const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
  const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
  const CLASS_NAME_SHOW = 'show';
  const CLASS_NAME_COLLAPSE = 'collapse';
  const CLASS_NAME_COLLAPSING = 'collapsing';
  const CLASS_NAME_COLLAPSED = 'collapsed';
  const WIDTH = 'width';
  const HEIGHT = 'height';
  const SELECTOR_ACTIVES = '.show, .collapsing';
  const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="collapse"]';
  /**
  * ------------------------------------------------------------------------
  * Class Definition
  * ------------------------------------------------------------------------
  */
  class Collapse extends BaseComponent__default['default'] {
    constructor(element, config) {
      super(element);
      this._isTransitioning = false;
      this._config = this._getConfig(config);
      this._triggerArray = SelectorEngine__default['default'].find(`${SELECTOR_DATA_TOGGLE}[href="#${this._element.id}"],` + `${SELECTOR_DATA_TOGGLE}[data-bs-target="#${this._element.id}"]`);
      const toggleList = SelectorEngine__default['default'].find(SELECTOR_DATA_TOGGLE);
      for (let i = 0, len = toggleList.length; i < len; i++) {
        const elem = toggleList[i];
        const selector = getSelectorFromElement(elem);
        const filterElement = SelectorEngine__default['default'].find(selector).filter(foundElem => foundElem === this._element);
        if (selector !== null && filterElement.length) {
          this._selector = selector;
          this._triggerArray.push(elem);
        }
      }
      this._parent = this._config.parent ? this._getParent() : null;
      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }
      if (this._config.toggle) {
        this.toggle();
      }
    }
    /*Getters*/
    static get Default() {
      return Default;
    }
    static get DATA_KEY() {
      return DATA_KEY;
    }
    /*Public*/
    toggle() {
      if (this._element.classList.contains(CLASS_NAME_SHOW)) {
        this.hide();
      } else {
        this.show();
      }
    }
    show() {
      if (this._isTransitioning || this._element.classList.contains(CLASS_NAME_SHOW)) {
        return;
      }
      let actives;
      let activesData;
      if (this._parent) {
        actives = SelectorEngine__default['default'].find(SELECTOR_ACTIVES, this._parent).filter(elem => {
          if (typeof this._config.parent === 'string') {
            return elem.getAttribute('data-bs-parent') === this._config.parent;
          }
          return elem.classList.contains(CLASS_NAME_COLLAPSE);
        });
        if (actives.length === 0) {
          actives = null;
        }
      }
      const container = SelectorEngine__default['default'].findOne(this._selector);
      if (actives) {
        const tempActiveData = actives.find(elem => container !== elem);
        activesData = tempActiveData ? Data__default['default'].get(tempActiveData, DATA_KEY) : null;
        if (activesData && activesData._isTransitioning) {
          return;
        }
      }
      const startEvent = EventHandler__default['default'].trigger(this._element, EVENT_SHOW);
      if (startEvent.defaultPrevented) {
        return;
      }
      if (actives) {
        actives.forEach(elemActive => {
          if (container !== elemActive) {
            Collapse.collapseInterface(elemActive, 'hide');
          }
          if (!activesData) {
            Data__default['default'].set(elemActive, DATA_KEY, null);
          }
        });
      }
      const dimension = this._getDimension();
      this._element.classList.remove(CLASS_NAME_COLLAPSE);
      this._element.classList.add(CLASS_NAME_COLLAPSING);
      this._element.style[dimension] = 0;
      if (this._triggerArray.length) {
        this._triggerArray.forEach(element => {
          element.classList.remove(CLASS_NAME_COLLAPSED);
          element.setAttribute('aria-expanded', true);
        });
      }
      this.setTransitioning(true);
      const complete = () => {
        this._element.classList.remove(CLASS_NAME_COLLAPSING);
        this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW);
        this._element.style[dimension] = '';
        this.setTransitioning(false);
        EventHandler__default['default'].trigger(this._element, EVENT_SHOWN);
      };
      const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      const scrollSize = `scroll${capitalizedDimension}`;
      const transitionDuration = getTransitionDurationFromElement(this._element);
      EventHandler__default['default'].one(this._element, 'transitionend', complete);
      emulateTransitionEnd(this._element, transitionDuration);
      this._element.style[dimension] = `${this._element[scrollSize]}px`;
    }
    hide() {
      if (this._isTransitioning || !this._element.classList.contains(CLASS_NAME_SHOW)) {
        return;
      }
      const startEvent = EventHandler__default['default'].trigger(this._element, EVENT_HIDE);
      if (startEvent.defaultPrevented) {
        return;
      }
      const dimension = this._getDimension();
      this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
      reflow(this._element);
      this._element.classList.add(CLASS_NAME_COLLAPSING);
      this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW);
      const triggerArrayLength = this._triggerArray.length;
      if (triggerArrayLength > 0) {
        for (let i = 0; i < triggerArrayLength; i++) {
          const trigger = this._triggerArray[i];
          const elem = getElementFromSelector(trigger);
          if (elem && !elem.classList.contains(CLASS_NAME_SHOW)) {
            trigger.classList.add(CLASS_NAME_COLLAPSED);
            trigger.setAttribute('aria-expanded', false);
          }
        }
      }
      this.setTransitioning(true);
      const complete = () => {
        this.setTransitioning(false);
        this._element.classList.remove(CLASS_NAME_COLLAPSING);
        this._element.classList.add(CLASS_NAME_COLLAPSE);
        EventHandler__default['default'].trigger(this._element, EVENT_HIDDEN);
      };
      this._element.style[dimension] = '';
      const transitionDuration = getTransitionDurationFromElement(this._element);
      EventHandler__default['default'].one(this._element, 'transitionend', complete);
      emulateTransitionEnd(this._element, transitionDuration);
    }
    setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    }
    dispose() {
      super.dispose();
      this._config = null;
      this._parent = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    }
    /*Private*/
    _getConfig(config) {
      config = {
        ...Default,
        ...config
      };
      config.toggle = Boolean(config.toggle);
      // Coerce string values
      typeCheckConfig(NAME, config, DefaultType);
      return config;
    }
    _getDimension() {
      return this._element.classList.contains(WIDTH) ? WIDTH : HEIGHT;
    }
    _getParent() {
      let {parent} = this._config;
      if (isElement(parent)) {
        // it's a jQuery object
        if (typeof parent.jquery !== 'undefined' || typeof parent[0] !== 'undefined') {
          parent = parent[0];
        }
      } else {
        parent = SelectorEngine__default['default'].findOne(parent);
      }
      const selector = `${SELECTOR_DATA_TOGGLE}[data-bs-parent="${parent}"]`;
      SelectorEngine__default['default'].find(selector, parent).forEach(element => {
        const selected = getElementFromSelector(element);
        this._addAriaAndCollapsedClass(selected, [element]);
      });
      return parent;
    }
    _addAriaAndCollapsedClass(element, triggerArray) {
      if (!element || !triggerArray.length) {
        return;
      }
      const isOpen = element.classList.contains(CLASS_NAME_SHOW);
      triggerArray.forEach(elem => {
        if (isOpen) {
          elem.classList.remove(CLASS_NAME_COLLAPSED);
        } else {
          elem.classList.add(CLASS_NAME_COLLAPSED);
        }
        elem.setAttribute('aria-expanded', isOpen);
      });
    }
    /*Static*/
    static collapseInterface(element, config) {
      let data = Data__default['default'].get(element, DATA_KEY);
      const _config = {
        ...Default,
        ...Manipulator__default['default'].getDataAttributes(element),
        ...typeof config === 'object' && config ? config : {}
      };
      if (!data && _config.toggle && typeof config === 'string' && (/show|hide/).test(config)) {
        _config.toggle = false;
      }
      if (!data) {
        data = new Collapse(element, _config);
      }
      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      }
    }
    static jQueryInterface(config) {
      return this.each(function () {
        Collapse.collapseInterface(this, config);
      });
    }
  }
  /**
  * ------------------------------------------------------------------------
  * Data Api implementation
  * ------------------------------------------------------------------------
  */
  EventHandler__default['default'].on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') {
      event.preventDefault();
    }
    const triggerData = Manipulator__default['default'].getDataAttributes(this);
    const selector = getSelectorFromElement(this);
    const selectorElements = SelectorEngine__default['default'].find(selector);
    selectorElements.forEach(element => {
      const data = Data__default['default'].get(element, DATA_KEY);
      let config;
      if (data) {
        // update parent attribute
        if (data._parent === null && typeof triggerData.parent === 'string') {
          data._config.parent = triggerData.parent;
          data._parent = data._getParent();
        }
        config = 'toggle';
      } else {
        config = triggerData;
      }
      Collapse.collapseInterface(element, config);
    });
  });
  /**
  * ------------------------------------------------------------------------
  * jQuery
  * ------------------------------------------------------------------------
  * add .Collapse to jQuery only if jQuery is present
  */
  defineJQueryPlugin(NAME, Collapse);
  return Collapse;
});

},{"./dom/data.js":"5gDwT","./dom/event-handler.js":"6QkXI","./dom/manipulator.js":"60SIB","./dom/selector-engine.js":"5cZzE","./base-component.js":"pGtcs"}],"3bbx5":[function(require,module,exports) {
var define;
/*!
* Bootstrap modal.js v5.0.0 (https://getbootstrap.com/)
* Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('./dom/event-handler.js'), require('./dom/manipulator.js'), require('./dom/selector-engine.js'), require('./base-component.js')) : typeof define === 'function' && define.amd ? define(['./dom/event-handler', './dom/manipulator', './dom/selector-engine', './base-component'], factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Modal = factory(global.EventHandler, global.Manipulator, global.SelectorEngine, global.Base));
})(this, function (EventHandler, Manipulator, SelectorEngine, BaseComponent) {
  "use strict";
  function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && ('default' in e) ? e : {
      'default': e
    };
  }
  var EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  var Manipulator__default = /*#__PURE__*/_interopDefaultLegacy(Manipulator);
  var SelectorEngine__default = /*#__PURE__*/_interopDefaultLegacy(SelectorEngine);
  var BaseComponent__default = /*#__PURE__*/_interopDefaultLegacy(BaseComponent);
  /**
  * --------------------------------------------------------------------------
  * Bootstrap (v5.0.0): util/index.js
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  * --------------------------------------------------------------------------
  */
  const MILLISECONDS_MULTIPLIER = 1000;
  const TRANSITION_END = 'transitionend';
  // Shoutout AngusCroll (https://goo.gl/pxwQGp)
  const toType = obj => {
    if (obj === null || obj === undefined) {
      return `${obj}`;
    }
    return ({}).toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  };
  const getSelector = element => {
    let selector = element.getAttribute('data-bs-target');
    if (!selector || selector === '#') {
      let hrefAttr = element.getAttribute('href');
      // The only valid content that could double as a selector are IDs or classes,
      // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
      // `document.querySelector` will rightfully complain it is invalid.
      // See https://github.com/twbs/bootstrap/issues/32273
      if (!hrefAttr || !hrefAttr.includes('#') && !hrefAttr.startsWith('.')) {
        return null;
      }
      // Just in case some CMS puts out a full URL with the anchor appended
      if (hrefAttr.includes('#') && !hrefAttr.startsWith('#')) {
        hrefAttr = `#${hrefAttr.split('#')[1]}`;
      }
      selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : null;
    }
    return selector;
  };
  const getElementFromSelector = element => {
    const selector = getSelector(element);
    return selector ? document.querySelector(selector) : null;
  };
  const getTransitionDurationFromElement = element => {
    if (!element) {
      return 0;
    }
    // Get transition-duration of the element
    let {transitionDuration, transitionDelay} = window.getComputedStyle(element);
    const floatTransitionDuration = Number.parseFloat(transitionDuration);
    const floatTransitionDelay = Number.parseFloat(transitionDelay);
    // Return 0 if element or transition duration is not found
    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    }
    // If multiple durations are defined, take the first
    transitionDuration = transitionDuration.split(',')[0];
    transitionDelay = transitionDelay.split(',')[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
  };
  const triggerTransitionEnd = element => {
    element.dispatchEvent(new Event(TRANSITION_END));
  };
  const isElement = obj => (obj[0] || obj).nodeType;
  const emulateTransitionEnd = (element, duration) => {
    let called = false;
    const durationPadding = 5;
    const emulatedDuration = duration + durationPadding;
    function listener() {
      called = true;
      element.removeEventListener(TRANSITION_END, listener);
    }
    element.addEventListener(TRANSITION_END, listener);
    setTimeout(() => {
      if (!called) {
        triggerTransitionEnd(element);
      }
    }, emulatedDuration);
  };
  const typeCheckConfig = (componentName, config, configTypes) => {
    Object.keys(configTypes).forEach(property => {
      const expectedTypes = configTypes[property];
      const value = config[property];
      const valueType = value && isElement(value) ? 'element' : toType(value);
      if (!new RegExp(expectedTypes).test(valueType)) {
        throw new TypeError(`${componentName.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
      }
    });
  };
  const isVisible = element => {
    if (!element) {
      return false;
    }
    if (element.style && element.parentNode && element.parentNode.style) {
      const elementStyle = getComputedStyle(element);
      const parentNodeStyle = getComputedStyle(element.parentNode);
      return elementStyle.display !== 'none' && parentNodeStyle.display !== 'none' && elementStyle.visibility !== 'hidden';
    }
    return false;
  };
  const reflow = element => element.offsetHeight;
  const getjQuery = () => {
    const {jQuery} = window;
    if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
      return jQuery;
    }
    return null;
  };
  const onDOMContentLoaded = callback => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback);
    } else {
      callback();
    }
  };
  const isRTL = () => document.documentElement.dir === 'rtl';
  const defineJQueryPlugin = (name, plugin) => {
    onDOMContentLoaded(() => {
      const $ = getjQuery();
      /*istanbul ignore if*/
      if ($) {
        const JQUERY_NO_CONFLICT = $.fn[name];
        $.fn[name] = plugin.jQueryInterface;
        $.fn[name].Constructor = plugin;
        $.fn[name].noConflict = () => {
          $.fn[name] = JQUERY_NO_CONFLICT;
          return plugin.jQueryInterface;
        };
      }
    });
  };
  const execute = callback => {
    if (typeof callback === 'function') {
      callback();
    }
  };
  /**
  * --------------------------------------------------------------------------
  * Bootstrap (v5.0.0): util/scrollBar.js
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  * --------------------------------------------------------------------------
  */
  const SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
  const SELECTOR_STICKY_CONTENT = '.sticky-top';
  const getWidth = () => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
    const documentWidth = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - documentWidth);
  };
  const hide = (width = getWidth()) => {
    _disableOverFlow();
    // give padding to element to balances the hidden scrollbar width
    _setElementAttributes('body', 'paddingRight', calculatedValue => calculatedValue + width);
    // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements, to keep shown fullwidth
    _setElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight', calculatedValue => calculatedValue + width);
    _setElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight', calculatedValue => calculatedValue - width);
  };
  const _disableOverFlow = () => {
    const actualValue = document.body.style.overflow;
    if (actualValue) {
      Manipulator__default['default'].setDataAttribute(document.body, 'overflow', actualValue);
    }
    document.body.style.overflow = 'hidden';
  };
  const _setElementAttributes = (selector, styleProp, callback) => {
    const scrollbarWidth = getWidth();
    SelectorEngine__default['default'].find(selector).forEach(element => {
      if (element !== document.body && window.innerWidth > element.clientWidth + scrollbarWidth) {
        return;
      }
      const actualValue = element.style[styleProp];
      const calculatedValue = window.getComputedStyle(element)[styleProp];
      Manipulator__default['default'].setDataAttribute(element, styleProp, actualValue);
      element.style[styleProp] = `${callback(Number.parseFloat(calculatedValue))}px`;
    });
  };
  const reset = () => {
    _resetElementAttributes('body', 'overflow');
    _resetElementAttributes('body', 'paddingRight');
    _resetElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight');
    _resetElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight');
  };
  const _resetElementAttributes = (selector, styleProp) => {
    SelectorEngine__default['default'].find(selector).forEach(element => {
      const value = Manipulator__default['default'].getDataAttribute(element, styleProp);
      if (typeof value === 'undefined') {
        element.style.removeProperty(styleProp);
      } else {
        Manipulator__default['default'].removeDataAttribute(element, styleProp);
        element.style[styleProp] = value;
      }
    });
  };
  /**
  * --------------------------------------------------------------------------
  * Bootstrap (v5.0.0): util/backdrop.js
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  * --------------------------------------------------------------------------
  */
  const Default$1 = {
    isVisible: true,
    // if false, we use the backdrop helper without adding any element to the dom
    isAnimated: false,
    rootElement: document.body,
    // give the choice to place backdrop under different elements
    clickCallback: null
  };
  const DefaultType$1 = {
    isVisible: 'boolean',
    isAnimated: 'boolean',
    rootElement: 'element',
    clickCallback: '(function|null)'
  };
  const NAME$1 = 'backdrop';
  const CLASS_NAME_BACKDROP = 'modal-backdrop';
  const CLASS_NAME_FADE$1 = 'fade';
  const CLASS_NAME_SHOW$1 = 'show';
  const EVENT_MOUSEDOWN = `mousedown.bs.${NAME$1}`;
  class Backdrop {
    constructor(config) {
      this._config = this._getConfig(config);
      this._isAppended = false;
      this._element = null;
    }
    show(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }
      this._append();
      if (this._config.isAnimated) {
        reflow(this._getElement());
      }
      this._getElement().classList.add(CLASS_NAME_SHOW$1);
      this._emulateAnimation(() => {
        execute(callback);
      });
    }
    hide(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }
      this._getElement().classList.remove(CLASS_NAME_SHOW$1);
      this._emulateAnimation(() => {
        this.dispose();
        execute(callback);
      });
    }
    /*Private*/
    _getElement() {
      if (!this._element) {
        const backdrop = document.createElement('div');
        backdrop.className = CLASS_NAME_BACKDROP;
        if (this._config.isAnimated) {
          backdrop.classList.add(CLASS_NAME_FADE$1);
        }
        this._element = backdrop;
      }
      return this._element;
    }
    _getConfig(config) {
      config = {
        ...Default$1,
        ...typeof config === 'object' ? config : {}
      };
      typeCheckConfig(NAME$1, config, DefaultType$1);
      return config;
    }
    _append() {
      if (this._isAppended) {
        return;
      }
      this._config.rootElement.appendChild(this._getElement());
      EventHandler__default['default'].on(this._getElement(), EVENT_MOUSEDOWN, () => {
        execute(this._config.clickCallback);
      });
      this._isAppended = true;
    }
    dispose() {
      if (!this._isAppended) {
        return;
      }
      EventHandler__default['default'].off(this._element, EVENT_MOUSEDOWN);
      this._getElement().parentNode.removeChild(this._element);
      this._isAppended = false;
    }
    _emulateAnimation(callback) {
      if (!this._config.isAnimated) {
        execute(callback);
        return;
      }
      const backdropTransitionDuration = getTransitionDurationFromElement(this._getElement());
      EventHandler__default['default'].one(this._getElement(), 'transitionend', () => execute(callback));
      emulateTransitionEnd(this._getElement(), backdropTransitionDuration);
    }
  }
  /**
  * --------------------------------------------------------------------------
  * Bootstrap (v5.0.0): modal.js
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  * --------------------------------------------------------------------------
  */
  /**
  * ------------------------------------------------------------------------
  * Constants
  * ------------------------------------------------------------------------
  */
  const NAME = 'modal';
  const DATA_KEY = 'bs.modal';
  const EVENT_KEY = `.${DATA_KEY}`;
  const DATA_API_KEY = '.data-api';
  const ESCAPE_KEY = 'Escape';
  const Default = {
    backdrop: true,
    keyboard: true,
    focus: true
  };
  const DefaultType = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean'
  };
  const EVENT_HIDE = `hide${EVENT_KEY}`;
  const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY}`;
  const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
  const EVENT_SHOW = `show${EVENT_KEY}`;
  const EVENT_SHOWN = `shown${EVENT_KEY}`;
  const EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
  const EVENT_RESIZE = `resize${EVENT_KEY}`;
  const EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY}`;
  const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY}`;
  const EVENT_MOUSEUP_DISMISS = `mouseup.dismiss${EVENT_KEY}`;
  const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY}`;
  const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
  const CLASS_NAME_OPEN = 'modal-open';
  const CLASS_NAME_FADE = 'fade';
  const CLASS_NAME_SHOW = 'show';
  const CLASS_NAME_STATIC = 'modal-static';
  const SELECTOR_DIALOG = '.modal-dialog';
  const SELECTOR_MODAL_BODY = '.modal-body';
  const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="modal"]';
  const SELECTOR_DATA_DISMISS = '[data-bs-dismiss="modal"]';
  /**
  * ------------------------------------------------------------------------
  * Class Definition
  * ------------------------------------------------------------------------
  */
  class Modal extends BaseComponent__default['default'] {
    constructor(element, config) {
      super(element);
      this._config = this._getConfig(config);
      this._dialog = SelectorEngine__default['default'].findOne(SELECTOR_DIALOG, this._element);
      this._backdrop = this._initializeBackDrop();
      this._isShown = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning = false;
    }
    /*Getters*/
    static get Default() {
      return Default;
    }
    static get DATA_KEY() {
      return DATA_KEY;
    }
    /*Public*/
    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }
    show(relatedTarget) {
      if (this._isShown || this._isTransitioning) {
        return;
      }
      if (this._isAnimated()) {
        this._isTransitioning = true;
      }
      const showEvent = EventHandler__default['default'].trigger(this._element, EVENT_SHOW, {
        relatedTarget
      });
      if (this._isShown || showEvent.defaultPrevented) {
        return;
      }
      this._isShown = true;
      hide();
      document.body.classList.add(CLASS_NAME_OPEN);
      this._adjustDialog();
      this._setEscapeEvent();
      this._setResizeEvent();
      EventHandler__default['default'].on(this._element, EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, event => this.hide(event));
      EventHandler__default['default'].on(this._dialog, EVENT_MOUSEDOWN_DISMISS, () => {
        EventHandler__default['default'].one(this._element, EVENT_MOUSEUP_DISMISS, event => {
          if (event.target === this._element) {
            this._ignoreBackdropClick = true;
          }
        });
      });
      this._showBackdrop(() => this._showElement(relatedTarget));
    }
    hide(event) {
      if (event) {
        event.preventDefault();
      }
      if (!this._isShown || this._isTransitioning) {
        return;
      }
      const hideEvent = EventHandler__default['default'].trigger(this._element, EVENT_HIDE);
      if (hideEvent.defaultPrevented) {
        return;
      }
      this._isShown = false;
      const isAnimated = this._isAnimated();
      if (isAnimated) {
        this._isTransitioning = true;
      }
      this._setEscapeEvent();
      this._setResizeEvent();
      EventHandler__default['default'].off(document, EVENT_FOCUSIN);
      this._element.classList.remove(CLASS_NAME_SHOW);
      EventHandler__default['default'].off(this._element, EVENT_CLICK_DISMISS);
      EventHandler__default['default'].off(this._dialog, EVENT_MOUSEDOWN_DISMISS);
      if (isAnimated) {
        const transitionDuration = getTransitionDurationFromElement(this._element);
        EventHandler__default['default'].one(this._element, 'transitionend', event => this._hideModal(event));
        emulateTransitionEnd(this._element, transitionDuration);
      } else {
        this._hideModal();
      }
    }
    dispose() {
      [window, this._dialog].forEach(htmlElement => EventHandler__default['default'].off(htmlElement, EVENT_KEY));
      super.dispose();
      /**
      * `document` has 2 events `EVENT_FOCUSIN` and `EVENT_CLICK_DATA_API`
      * Do not move `document` in `htmlElements` array
      * It will remove `EVENT_CLICK_DATA_API` event that should remain
      */
      EventHandler__default['default'].off(document, EVENT_FOCUSIN);
      this._config = null;
      this._dialog = null;
      this._backdrop.dispose();
      this._backdrop = null;
      this._isShown = null;
      this._ignoreBackdropClick = null;
      this._isTransitioning = null;
    }
    handleUpdate() {
      this._adjustDialog();
    }
    /*Private*/
    _initializeBackDrop() {
      return new Backdrop({
        isVisible: Boolean(this._config.backdrop),
        // 'static' option will be translated to true, and booleans will keep their value
        isAnimated: this._isAnimated()
      });
    }
    _getConfig(config) {
      config = {
        ...Default,
        ...Manipulator__default['default'].getDataAttributes(this._element),
        ...config
      };
      typeCheckConfig(NAME, config, DefaultType);
      return config;
    }
    _showElement(relatedTarget) {
      const isAnimated = this._isAnimated();
      const modalBody = SelectorEngine__default['default'].findOne(SELECTOR_MODAL_BODY, this._dialog);
      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      }
      this._element.style.display = 'block';
      this._element.removeAttribute('aria-hidden');
      this._element.setAttribute('aria-modal', true);
      this._element.setAttribute('role', 'dialog');
      this._element.scrollTop = 0;
      if (modalBody) {
        modalBody.scrollTop = 0;
      }
      if (isAnimated) {
        reflow(this._element);
      }
      this._element.classList.add(CLASS_NAME_SHOW);
      if (this._config.focus) {
        this._enforceFocus();
      }
      const transitionComplete = () => {
        if (this._config.focus) {
          this._element.focus();
        }
        this._isTransitioning = false;
        EventHandler__default['default'].trigger(this._element, EVENT_SHOWN, {
          relatedTarget
        });
      };
      if (isAnimated) {
        const transitionDuration = getTransitionDurationFromElement(this._dialog);
        EventHandler__default['default'].one(this._dialog, 'transitionend', transitionComplete);
        emulateTransitionEnd(this._dialog, transitionDuration);
      } else {
        transitionComplete();
      }
    }
    _enforceFocus() {
      EventHandler__default['default'].off(document, EVENT_FOCUSIN);
      // guard against infinite focus loop
      EventHandler__default['default'].on(document, EVENT_FOCUSIN, event => {
        if (document !== event.target && this._element !== event.target && !this._element.contains(event.target)) {
          this._element.focus();
        }
      });
    }
    _setEscapeEvent() {
      if (this._isShown) {
        EventHandler__default['default'].on(this._element, EVENT_KEYDOWN_DISMISS, event => {
          if (this._config.keyboard && event.key === ESCAPE_KEY) {
            event.preventDefault();
            this.hide();
          } else if (!this._config.keyboard && event.key === ESCAPE_KEY) {
            this._triggerBackdropTransition();
          }
        });
      } else {
        EventHandler__default['default'].off(this._element, EVENT_KEYDOWN_DISMISS);
      }
    }
    _setResizeEvent() {
      if (this._isShown) {
        EventHandler__default['default'].on(window, EVENT_RESIZE, () => this._adjustDialog());
      } else {
        EventHandler__default['default'].off(window, EVENT_RESIZE);
      }
    }
    _hideModal() {
      this._element.style.display = 'none';
      this._element.setAttribute('aria-hidden', true);
      this._element.removeAttribute('aria-modal');
      this._element.removeAttribute('role');
      this._isTransitioning = false;
      this._backdrop.hide(() => {
        document.body.classList.remove(CLASS_NAME_OPEN);
        this._resetAdjustments();
        reset();
        EventHandler__default['default'].trigger(this._element, EVENT_HIDDEN);
      });
    }
    _showBackdrop(callback) {
      EventHandler__default['default'].on(this._element, EVENT_CLICK_DISMISS, event => {
        if (this._ignoreBackdropClick) {
          this._ignoreBackdropClick = false;
          return;
        }
        if (event.target !== event.currentTarget) {
          return;
        }
        if (this._config.backdrop === true) {
          this.hide();
        } else if (this._config.backdrop === 'static') {
          this._triggerBackdropTransition();
        }
      });
      this._backdrop.show(callback);
    }
    _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_FADE);
    }
    _triggerBackdropTransition() {
      const hideEvent = EventHandler__default['default'].trigger(this._element, EVENT_HIDE_PREVENTED);
      if (hideEvent.defaultPrevented) {
        return;
      }
      const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
      if (!isModalOverflowing) {
        this._element.style.overflowY = 'hidden';
      }
      this._element.classList.add(CLASS_NAME_STATIC);
      const modalTransitionDuration = getTransitionDurationFromElement(this._dialog);
      EventHandler__default['default'].off(this._element, 'transitionend');
      EventHandler__default['default'].one(this._element, 'transitionend', () => {
        this._element.classList.remove(CLASS_NAME_STATIC);
        if (!isModalOverflowing) {
          EventHandler__default['default'].one(this._element, 'transitionend', () => {
            this._element.style.overflowY = '';
          });
          emulateTransitionEnd(this._element, modalTransitionDuration);
        }
      });
      emulateTransitionEnd(this._element, modalTransitionDuration);
      this._element.focus();
    }
    /*----------------------------------------------------------------------*/
    /*the following methods are used to handle overflowing modals*/
    /*----------------------------------------------------------------------*/
    _adjustDialog() {
      const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
      const scrollbarWidth = getWidth();
      const isBodyOverflowing = scrollbarWidth > 0;
      if (!isBodyOverflowing && isModalOverflowing && !isRTL() || isBodyOverflowing && !isModalOverflowing && isRTL()) {
        this._element.style.paddingLeft = `${scrollbarWidth}px`;
      }
      if (isBodyOverflowing && !isModalOverflowing && !isRTL() || !isBodyOverflowing && isModalOverflowing && isRTL()) {
        this._element.style.paddingRight = `${scrollbarWidth}px`;
      }
    }
    _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    }
    /*Static*/
    static jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        const data = Modal.getInstance(this) || new Modal(this, typeof config === 'object' ? config : {});
        if (typeof config !== 'string') {
          return;
        }
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](relatedTarget);
      });
    }
  }
  /**
  * ------------------------------------------------------------------------
  * Data Api implementation
  * ------------------------------------------------------------------------
  */
  EventHandler__default['default'].on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    const target = getElementFromSelector(this);
    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }
    EventHandler__default['default'].one(target, EVENT_SHOW, showEvent => {
      if (showEvent.defaultPrevented) {
        // only register focus restorer if modal will actually get shown
        return;
      }
      EventHandler__default['default'].one(target, EVENT_HIDDEN, () => {
        if (isVisible(this)) {
          this.focus();
        }
      });
    });
    const data = Modal.getInstance(target) || new Modal(target);
    data.toggle(this);
  });
  /**
  * ------------------------------------------------------------------------
  * jQuery
  * ------------------------------------------------------------------------
  * add .Modal to jQuery only if jQuery is present
  */
  defineJQueryPlugin(NAME, Modal);
  return Modal;
});

},{"./dom/event-handler.js":"6QkXI","./dom/manipulator.js":"60SIB","./dom/selector-engine.js":"5cZzE","./base-component.js":"pGtcs"}],"6kYkY":[function(require,module,exports) {
var define;
/*!
* Bootstrap popover.js v5.0.0 (https://getbootstrap.com/)
* Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('./dom/data.js'), require('./dom/selector-engine.js'), require('./tooltip.js')) : typeof define === 'function' && define.amd ? define(['./dom/data', './dom/selector-engine', './tooltip'], factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Popover = factory(global.Data, global.SelectorEngine, global.Tooltip));
})(this, function (Data, SelectorEngine, Tooltip) {
  "use strict";
  function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && ('default' in e) ? e : {
      'default': e
    };
  }
  var Data__default = /*#__PURE__*/_interopDefaultLegacy(Data);
  var SelectorEngine__default = /*#__PURE__*/_interopDefaultLegacy(SelectorEngine);
  var Tooltip__default = /*#__PURE__*/_interopDefaultLegacy(Tooltip);
  /**
  * --------------------------------------------------------------------------
  * Bootstrap (v5.0.0): util/index.js
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  * --------------------------------------------------------------------------
  */
  const getjQuery = () => {
    const {jQuery} = window;
    if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
      return jQuery;
    }
    return null;
  };
  const onDOMContentLoaded = callback => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback);
    } else {
      callback();
    }
  };
  const defineJQueryPlugin = (name, plugin) => {
    onDOMContentLoaded(() => {
      const $ = getjQuery();
      /*istanbul ignore if*/
      if ($) {
        const JQUERY_NO_CONFLICT = $.fn[name];
        $.fn[name] = plugin.jQueryInterface;
        $.fn[name].Constructor = plugin;
        $.fn[name].noConflict = () => {
          $.fn[name] = JQUERY_NO_CONFLICT;
          return plugin.jQueryInterface;
        };
      }
    });
  };
  /**
  * --------------------------------------------------------------------------
  * Bootstrap (v5.0.0): popover.js
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  * --------------------------------------------------------------------------
  */
  /**
  * ------------------------------------------------------------------------
  * Constants
  * ------------------------------------------------------------------------
  */
  const NAME = 'popover';
  const DATA_KEY = 'bs.popover';
  const EVENT_KEY = `.${DATA_KEY}`;
  const CLASS_PREFIX = 'bs-popover';
  const BSCLS_PREFIX_REGEX = new RegExp(`(^|\\s)${CLASS_PREFIX}\\S+`, 'g');
  const Default = {
    ...Tooltip__default['default'].Default,
    placement: 'right',
    offset: [0, 8],
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div>' + '</div>'
  };
  const DefaultType = {
    ...Tooltip__default['default'].DefaultType,
    content: '(string|element|function)'
  };
  const Event = {
    HIDE: `hide${EVENT_KEY}`,
    HIDDEN: `hidden${EVENT_KEY}`,
    SHOW: `show${EVENT_KEY}`,
    SHOWN: `shown${EVENT_KEY}`,
    INSERTED: `inserted${EVENT_KEY}`,
    CLICK: `click${EVENT_KEY}`,
    FOCUSIN: `focusin${EVENT_KEY}`,
    FOCUSOUT: `focusout${EVENT_KEY}`,
    MOUSEENTER: `mouseenter${EVENT_KEY}`,
    MOUSELEAVE: `mouseleave${EVENT_KEY}`
  };
  const CLASS_NAME_FADE = 'fade';
  const CLASS_NAME_SHOW = 'show';
  const SELECTOR_TITLE = '.popover-header';
  const SELECTOR_CONTENT = '.popover-body';
  /**
  * ------------------------------------------------------------------------
  * Class Definition
  * ------------------------------------------------------------------------
  */
  class Popover extends Tooltip__default['default'] {
    // Getters
    static get Default() {
      return Default;
    }
    static get NAME() {
      return NAME;
    }
    static get DATA_KEY() {
      return DATA_KEY;
    }
    static get Event() {
      return Event;
    }
    static get EVENT_KEY() {
      return EVENT_KEY;
    }
    static get DefaultType() {
      return DefaultType;
    }
    /*Overrides*/
    isWithContent() {
      return this.getTitle() || this._getContent();
    }
    setContent() {
      const tip = this.getTipElement();
      // we use append for html objects to maintain js events
      this.setElementContent(SelectorEngine__default['default'].findOne(SELECTOR_TITLE, tip), this.getTitle());
      let content = this._getContent();
      if (typeof content === 'function') {
        content = content.call(this._element);
      }
      this.setElementContent(SelectorEngine__default['default'].findOne(SELECTOR_CONTENT, tip), content);
      tip.classList.remove(CLASS_NAME_FADE, CLASS_NAME_SHOW);
    }
    /*Private*/
    _addAttachmentClass(attachment) {
      this.getTipElement().classList.add(`${CLASS_PREFIX}-${this.updateAttachment(attachment)}`);
    }
    _getContent() {
      return this._element.getAttribute('data-bs-content') || this.config.content;
    }
    _cleanTipClass() {
      const tip = this.getTipElement();
      const tabClass = tip.getAttribute('class').match(BSCLS_PREFIX_REGEX);
      if (tabClass !== null && tabClass.length > 0) {
        tabClass.map(token => token.trim()).forEach(tClass => tip.classList.remove(tClass));
      }
    }
    /*Static*/
    static jQueryInterface(config) {
      return this.each(function () {
        let data = Data__default['default'].get(this, DATA_KEY);
        const _config = typeof config === 'object' ? config : null;
        if (!data && (/dispose|hide/).test(config)) {
          return;
        }
        if (!data) {
          data = new Popover(this, _config);
          Data__default['default'].set(this, DATA_KEY, data);
        }
        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config]();
        }
      });
    }
  }
  /**
  * ------------------------------------------------------------------------
  * jQuery
  * ------------------------------------------------------------------------
  * add .Popover to jQuery only if jQuery is present
  */
  defineJQueryPlugin(NAME, Popover);
  return Popover;
});

},{"./dom/data.js":"5gDwT","./dom/selector-engine.js":"5cZzE","./tooltip.js":"5W3M5"}],"5W3M5":[function(require,module,exports) {
var define;
/*!
* Bootstrap tooltip.js v5.0.0 (https://getbootstrap.com/)
* Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@popperjs/core'), require('./dom/data.js'), require('./dom/event-handler.js'), require('./dom/manipulator.js'), require('./dom/selector-engine.js'), require('./base-component.js')) : typeof define === 'function' && define.amd ? define(['@popperjs/core', './dom/data', './dom/event-handler', './dom/manipulator', './dom/selector-engine', './base-component'], factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Tooltip = factory(global.Popper, global.Data, global.EventHandler, global.Manipulator, global.SelectorEngine, global.Base));
})(this, function (Popper, Data, EventHandler, Manipulator, SelectorEngine, BaseComponent) {
  "use strict";
  function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && ('default' in e) ? e : {
      'default': e
    };
  }
  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () {
              return e[k];
            }
          });
        }
      });
    }
    n['default'] = e;
    return Object.freeze(n);
  }
  var Popper__namespace = /*#__PURE__*/_interopNamespace(Popper);
  var Data__default = /*#__PURE__*/_interopDefaultLegacy(Data);
  var EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  var Manipulator__default = /*#__PURE__*/_interopDefaultLegacy(Manipulator);
  var SelectorEngine__default = /*#__PURE__*/_interopDefaultLegacy(SelectorEngine);
  var BaseComponent__default = /*#__PURE__*/_interopDefaultLegacy(BaseComponent);
  /**
  * --------------------------------------------------------------------------
  * Bootstrap (v5.0.0): util/index.js
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  * --------------------------------------------------------------------------
  */
  const MAX_UID = 1000000;
  const MILLISECONDS_MULTIPLIER = 1000;
  const TRANSITION_END = 'transitionend';
  // Shoutout AngusCroll (https://goo.gl/pxwQGp)
  const toType = obj => {
    if (obj === null || obj === undefined) {
      return `${obj}`;
    }
    return ({}).toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  };
  /**
  * --------------------------------------------------------------------------
  * Public Util Api
  * --------------------------------------------------------------------------
  */
  const getUID = prefix => {
    do {
      prefix += Math.floor(Math.random() * MAX_UID);
    } while (document.getElementById(prefix));
    return prefix;
  };
  const getTransitionDurationFromElement = element => {
    if (!element) {
      return 0;
    }
    // Get transition-duration of the element
    let {transitionDuration, transitionDelay} = window.getComputedStyle(element);
    const floatTransitionDuration = Number.parseFloat(transitionDuration);
    const floatTransitionDelay = Number.parseFloat(transitionDelay);
    // Return 0 if element or transition duration is not found
    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    }
    // If multiple durations are defined, take the first
    transitionDuration = transitionDuration.split(',')[0];
    transitionDelay = transitionDelay.split(',')[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
  };
  const triggerTransitionEnd = element => {
    element.dispatchEvent(new Event(TRANSITION_END));
  };
  const isElement = obj => (obj[0] || obj).nodeType;
  const emulateTransitionEnd = (element, duration) => {
    let called = false;
    const durationPadding = 5;
    const emulatedDuration = duration + durationPadding;
    function listener() {
      called = true;
      element.removeEventListener(TRANSITION_END, listener);
    }
    element.addEventListener(TRANSITION_END, listener);
    setTimeout(() => {
      if (!called) {
        triggerTransitionEnd(element);
      }
    }, emulatedDuration);
  };
  const typeCheckConfig = (componentName, config, configTypes) => {
    Object.keys(configTypes).forEach(property => {
      const expectedTypes = configTypes[property];
      const value = config[property];
      const valueType = value && isElement(value) ? 'element' : toType(value);
      if (!new RegExp(expectedTypes).test(valueType)) {
        throw new TypeError(`${componentName.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
      }
    });
  };
  const findShadowRoot = element => {
    if (!document.documentElement.attachShadow) {
      return null;
    }
    // Can find the shadow root otherwise it'll return the document
    if (typeof element.getRootNode === 'function') {
      const root = element.getRootNode();
      return root instanceof ShadowRoot ? root : null;
    }
    if (element instanceof ShadowRoot) {
      return element;
    }
    // when we don't find a shadow root
    if (!element.parentNode) {
      return null;
    }
    return findShadowRoot(element.parentNode);
  };
  const noop = () => {};
  const getjQuery = () => {
    const {jQuery} = window;
    if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
      return jQuery;
    }
    return null;
  };
  const onDOMContentLoaded = callback => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback);
    } else {
      callback();
    }
  };
  const isRTL = () => document.documentElement.dir === 'rtl';
  const defineJQueryPlugin = (name, plugin) => {
    onDOMContentLoaded(() => {
      const $ = getjQuery();
      /*istanbul ignore if*/
      if ($) {
        const JQUERY_NO_CONFLICT = $.fn[name];
        $.fn[name] = plugin.jQueryInterface;
        $.fn[name].Constructor = plugin;
        $.fn[name].noConflict = () => {
          $.fn[name] = JQUERY_NO_CONFLICT;
          return plugin.jQueryInterface;
        };
      }
    });
  };
  /**
  * --------------------------------------------------------------------------
  * Bootstrap (v5.0.0): util/sanitizer.js
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  * --------------------------------------------------------------------------
  */
  const uriAttrs = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);
  const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  /**
  * A pattern that recognizes a commonly useful subset of URLs that are safe.
  *
  * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
  */
  const SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i;
  /**
  * A pattern that matches safe data URLs. Only matches image, video and audio types.
  *
  * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
  */
  const DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
  const allowedAttribute = (attr, allowedAttributeList) => {
    const attrName = attr.nodeName.toLowerCase();
    if (allowedAttributeList.includes(attrName)) {
      if (uriAttrs.has(attrName)) {
        return Boolean(SAFE_URL_PATTERN.test(attr.nodeValue) || DATA_URL_PATTERN.test(attr.nodeValue));
      }
      return true;
    }
    const regExp = allowedAttributeList.filter(attrRegex => attrRegex instanceof RegExp);
    // Check if a regular expression validates the attribute.
    for (let i = 0, len = regExp.length; i < len; i++) {
      if (regExp[i].test(attrName)) {
        return true;
      }
    }
    return false;
  };
  const DefaultAllowlist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  function sanitizeHtml(unsafeHtml, allowList, sanitizeFn) {
    if (!unsafeHtml.length) {
      return unsafeHtml;
    }
    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml);
    }
    const domParser = new window.DOMParser();
    const createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    const allowlistKeys = Object.keys(allowList);
    const elements = [].concat(...createdDocument.body.querySelectorAll('*'));
    for (let i = 0, len = elements.length; i < len; i++) {
      const el = elements[i];
      const elName = el.nodeName.toLowerCase();
      if (!allowlistKeys.includes(elName)) {
        el.parentNode.removeChild(el);
        continue;
      }
      const attributeList = [].concat(...el.attributes);
      const allowedAttributes = [].concat(allowList['*'] || [], allowList[elName] || []);
      attributeList.forEach(attr => {
        if (!allowedAttribute(attr, allowedAttributes)) {
          el.removeAttribute(attr.nodeName);
        }
      });
    }
    return createdDocument.body.innerHTML;
  }
  /**
  * --------------------------------------------------------------------------
  * Bootstrap (v5.0.0): tooltip.js
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  * --------------------------------------------------------------------------
  */
  /**
  * ------------------------------------------------------------------------
  * Constants
  * ------------------------------------------------------------------------
  */
  const NAME = 'tooltip';
  const DATA_KEY = 'bs.tooltip';
  const EVENT_KEY = `.${DATA_KEY}`;
  const CLASS_PREFIX = 'bs-tooltip';
  const BSCLS_PREFIX_REGEX = new RegExp(`(^|\\s)${CLASS_PREFIX}\\S+`, 'g');
  const DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);
  const DefaultType = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(array|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacements: 'array',
    boundary: '(string|element)',
    customClass: '(string|function)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    allowList: 'object',
    popperConfig: '(null|object|function)'
  };
  const AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: isRTL() ? 'left' : 'right',
    BOTTOM: 'bottom',
    LEFT: isRTL() ? 'right' : 'left'
  };
  const Default = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: [0, 0],
    container: false,
    fallbackPlacements: ['top', 'right', 'bottom', 'left'],
    boundary: 'clippingParents',
    customClass: '',
    sanitize: true,
    sanitizeFn: null,
    allowList: DefaultAllowlist,
    popperConfig: null
  };
  const Event$1 = {
    HIDE: `hide${EVENT_KEY}`,
    HIDDEN: `hidden${EVENT_KEY}`,
    SHOW: `show${EVENT_KEY}`,
    SHOWN: `shown${EVENT_KEY}`,
    INSERTED: `inserted${EVENT_KEY}`,
    CLICK: `click${EVENT_KEY}`,
    FOCUSIN: `focusin${EVENT_KEY}`,
    FOCUSOUT: `focusout${EVENT_KEY}`,
    MOUSEENTER: `mouseenter${EVENT_KEY}`,
    MOUSELEAVE: `mouseleave${EVENT_KEY}`
  };
  const CLASS_NAME_FADE = 'fade';
  const CLASS_NAME_MODAL = 'modal';
  const CLASS_NAME_SHOW = 'show';
  const HOVER_STATE_SHOW = 'show';
  const HOVER_STATE_OUT = 'out';
  const SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
  const TRIGGER_HOVER = 'hover';
  const TRIGGER_FOCUS = 'focus';
  const TRIGGER_CLICK = 'click';
  const TRIGGER_MANUAL = 'manual';
  /**
  * ------------------------------------------------------------------------
  * Class Definition
  * ------------------------------------------------------------------------
  */
  class Tooltip extends BaseComponent__default['default'] {
    constructor(element, config) {
      if (typeof Popper__namespace === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
      }
      super(element);
      // private
      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._popper = null;
      // Protected
      this.config = this._getConfig(config);
      this.tip = null;
      this._setListeners();
    }
    /*Getters*/
    static get Default() {
      return Default;
    }
    static get NAME() {
      return NAME;
    }
    static get DATA_KEY() {
      return DATA_KEY;
    }
    static get Event() {
      return Event$1;
    }
    static get EVENT_KEY() {
      return EVENT_KEY;
    }
    static get DefaultType() {
      return DefaultType;
    }
    /*Public*/
    enable() {
      this._isEnabled = true;
    }
    disable() {
      this._isEnabled = false;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle(event) {
      if (!this._isEnabled) {
        return;
      }
      if (event) {
        const context = this._initializeOnDelegatedTarget(event);
        context._activeTrigger.click = !context._activeTrigger.click;
        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {
        if (this.getTipElement().classList.contains(CLASS_NAME_SHOW)) {
          this._leave(null, this);
          return;
        }
        this._enter(null, this);
      }
    }
    dispose() {
      clearTimeout(this._timeout);
      EventHandler__default['default'].off(this._element.closest(`.${CLASS_NAME_MODAL}`), 'hide.bs.modal', this._hideModalHandler);
      if (this.tip && this.tip.parentNode) {
        this.tip.parentNode.removeChild(this.tip);
      }
      this._isEnabled = null;
      this._timeout = null;
      this._hoverState = null;
      this._activeTrigger = null;
      if (this._popper) {
        this._popper.destroy();
      }
      this._popper = null;
      this.config = null;
      this.tip = null;
      super.dispose();
    }
    show() {
      if (this._element.style.display === 'none') {
        throw new Error('Please use show on visible elements');
      }
      if (!(this.isWithContent() && this._isEnabled)) {
        return;
      }
      const showEvent = EventHandler__default['default'].trigger(this._element, this.constructor.Event.SHOW);
      const shadowRoot = findShadowRoot(this._element);
      const isInTheDom = shadowRoot === null ? this._element.ownerDocument.documentElement.contains(this._element) : shadowRoot.contains(this._element);
      if (showEvent.defaultPrevented || !isInTheDom) {
        return;
      }
      const tip = this.getTipElement();
      const tipId = getUID(this.constructor.NAME);
      tip.setAttribute('id', tipId);
      this._element.setAttribute('aria-describedby', tipId);
      this.setContent();
      if (this.config.animation) {
        tip.classList.add(CLASS_NAME_FADE);
      }
      const placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this._element) : this.config.placement;
      const attachment = this._getAttachment(placement);
      this._addAttachmentClass(attachment);
      const container = this._getContainer();
      Data__default['default'].set(tip, this.constructor.DATA_KEY, this);
      if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
        container.appendChild(tip);
        EventHandler__default['default'].trigger(this._element, this.constructor.Event.INSERTED);
      }
      if (this._popper) {
        this._popper.update();
      } else {
        this._popper = Popper__namespace.createPopper(this._element, tip, this._getPopperConfig(attachment));
      }
      tip.classList.add(CLASS_NAME_SHOW);
      const customClass = typeof this.config.customClass === 'function' ? this.config.customClass() : this.config.customClass;
      if (customClass) {
        tip.classList.add(...customClass.split(' '));
      }
      // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
      if (('ontouchstart' in document.documentElement)) {
        [].concat(...document.body.children).forEach(element => {
          EventHandler__default['default'].on(element, 'mouseover', noop);
        });
      }
      const complete = () => {
        const prevHoverState = this._hoverState;
        this._hoverState = null;
        EventHandler__default['default'].trigger(this._element, this.constructor.Event.SHOWN);
        if (prevHoverState === HOVER_STATE_OUT) {
          this._leave(null, this);
        }
      };
      if (this.tip.classList.contains(CLASS_NAME_FADE)) {
        const transitionDuration = getTransitionDurationFromElement(this.tip);
        EventHandler__default['default'].one(this.tip, 'transitionend', complete);
        emulateTransitionEnd(this.tip, transitionDuration);
      } else {
        complete();
      }
    }
    hide() {
      if (!this._popper) {
        return;
      }
      const tip = this.getTipElement();
      const complete = () => {
        if (this._isWithActiveTrigger()) {
          return;
        }
        if (this._hoverState !== HOVER_STATE_SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }
        this._cleanTipClass();
        this._element.removeAttribute('aria-describedby');
        EventHandler__default['default'].trigger(this._element, this.constructor.Event.HIDDEN);
        if (this._popper) {
          this._popper.destroy();
          this._popper = null;
        }
      };
      const hideEvent = EventHandler__default['default'].trigger(this._element, this.constructor.Event.HIDE);
      if (hideEvent.defaultPrevented) {
        return;
      }
      tip.classList.remove(CLASS_NAME_SHOW);
      // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support
      if (('ontouchstart' in document.documentElement)) {
        [].concat(...document.body.children).forEach(element => EventHandler__default['default'].off(element, 'mouseover', noop));
      }
      this._activeTrigger[TRIGGER_CLICK] = false;
      this._activeTrigger[TRIGGER_FOCUS] = false;
      this._activeTrigger[TRIGGER_HOVER] = false;
      if (this.tip.classList.contains(CLASS_NAME_FADE)) {
        const transitionDuration = getTransitionDurationFromElement(tip);
        EventHandler__default['default'].one(tip, 'transitionend', complete);
        emulateTransitionEnd(tip, transitionDuration);
      } else {
        complete();
      }
      this._hoverState = '';
    }
    update() {
      if (this._popper !== null) {
        this._popper.update();
      }
    }
    /*Protected*/
    isWithContent() {
      return Boolean(this.getTitle());
    }
    getTipElement() {
      if (this.tip) {
        return this.tip;
      }
      const element = document.createElement('div');
      element.innerHTML = this.config.template;
      this.tip = element.children[0];
      return this.tip;
    }
    setContent() {
      const tip = this.getTipElement();
      this.setElementContent(SelectorEngine__default['default'].findOne(SELECTOR_TOOLTIP_INNER, tip), this.getTitle());
      tip.classList.remove(CLASS_NAME_FADE, CLASS_NAME_SHOW);
    }
    setElementContent(element, content) {
      if (element === null) {
        return;
      }
      if (typeof content === 'object' && isElement(content)) {
        if (content.jquery) {
          content = content[0];
        }
        // content is a DOM node or a jQuery
        if (this.config.html) {
          if (content.parentNode !== element) {
            element.innerHTML = '';
            element.appendChild(content);
          }
        } else {
          element.textContent = content.textContent;
        }
        return;
      }
      if (this.config.html) {
        if (this.config.sanitize) {
          content = sanitizeHtml(content, this.config.allowList, this.config.sanitizeFn);
        }
        element.innerHTML = content;
      } else {
        element.textContent = content;
      }
    }
    getTitle() {
      let title = this._element.getAttribute('data-bs-original-title');
      if (!title) {
        title = typeof this.config.title === 'function' ? this.config.title.call(this._element) : this.config.title;
      }
      return title;
    }
    updateAttachment(attachment) {
      if (attachment === 'right') {
        return 'end';
      }
      if (attachment === 'left') {
        return 'start';
      }
      return attachment;
    }
    /*Private*/
    _initializeOnDelegatedTarget(event, context) {
      const dataKey = this.constructor.DATA_KEY;
      context = context || Data__default['default'].get(event.delegateTarget, dataKey);
      if (!context) {
        context = new this.constructor(event.delegateTarget, this._getDelegateConfig());
        Data__default['default'].set(event.delegateTarget, dataKey, context);
      }
      return context;
    }
    _getOffset() {
      const {offset} = this.config;
      if (typeof offset === 'string') {
        return offset.split(',').map(val => Number.parseInt(val, 10));
      }
      if (typeof offset === 'function') {
        return popperData => offset(popperData, this._element);
      }
      return offset;
    }
    _getPopperConfig(attachment) {
      const defaultBsPopperConfig = {
        placement: attachment,
        modifiers: [{
          name: 'flip',
          options: {
            fallbackPlacements: this.config.fallbackPlacements
          }
        }, {
          name: 'offset',
          options: {
            offset: this._getOffset()
          }
        }, {
          name: 'preventOverflow',
          options: {
            boundary: this.config.boundary
          }
        }, {
          name: 'arrow',
          options: {
            element: `.${this.constructor.NAME}-arrow`
          }
        }, {
          name: 'onChange',
          enabled: true,
          phase: 'afterWrite',
          fn: data => this._handlePopperPlacementChange(data)
        }],
        onFirstUpdate: data => {
          if (data.options.placement !== data.placement) {
            this._handlePopperPlacementChange(data);
          }
        }
      };
      return {
        ...defaultBsPopperConfig,
        ...typeof this.config.popperConfig === 'function' ? this.config.popperConfig(defaultBsPopperConfig) : this.config.popperConfig
      };
    }
    _addAttachmentClass(attachment) {
      this.getTipElement().classList.add(`${CLASS_PREFIX}-${this.updateAttachment(attachment)}`);
    }
    _getContainer() {
      if (this.config.container === false) {
        return document.body;
      }
      if (isElement(this.config.container)) {
        return this.config.container;
      }
      return SelectorEngine__default['default'].findOne(this.config.container);
    }
    _getAttachment(placement) {
      return AttachmentMap[placement.toUpperCase()];
    }
    _setListeners() {
      const triggers = this.config.trigger.split(' ');
      triggers.forEach(trigger => {
        if (trigger === 'click') {
          EventHandler__default['default'].on(this._element, this.constructor.Event.CLICK, this.config.selector, event => this.toggle(event));
        } else if (trigger !== TRIGGER_MANUAL) {
          const eventIn = trigger === TRIGGER_HOVER ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN;
          const eventOut = trigger === TRIGGER_HOVER ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
          EventHandler__default['default'].on(this._element, eventIn, this.config.selector, event => this._enter(event));
          EventHandler__default['default'].on(this._element, eventOut, this.config.selector, event => this._leave(event));
        }
      });
      this._hideModalHandler = () => {
        if (this._element) {
          this.hide();
        }
      };
      EventHandler__default['default'].on(this._element.closest(`.${CLASS_NAME_MODAL}`), 'hide.bs.modal', this._hideModalHandler);
      if (this.config.selector) {
        this.config = {
          ...this.config,
          trigger: 'manual',
          selector: ''
        };
      } else {
        this._fixTitle();
      }
    }
    _fixTitle() {
      const title = this._element.getAttribute('title');
      const originalTitleType = typeof this._element.getAttribute('data-bs-original-title');
      if (title || originalTitleType !== 'string') {
        this._element.setAttribute('data-bs-original-title', title || '');
        if (title && !this._element.getAttribute('aria-label') && !this._element.textContent) {
          this._element.setAttribute('aria-label', title);
        }
        this._element.setAttribute('title', '');
      }
    }
    _enter(event, context) {
      context = this._initializeOnDelegatedTarget(event, context);
      if (event) {
        context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
      }
      if (context.getTipElement().classList.contains(CLASS_NAME_SHOW) || context._hoverState === HOVER_STATE_SHOW) {
        context._hoverState = HOVER_STATE_SHOW;
        return;
      }
      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_SHOW;
      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return;
      }
      context._timeout = setTimeout(() => {
        if (context._hoverState === HOVER_STATE_SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    }
    _leave(event, context) {
      context = this._initializeOnDelegatedTarget(event, context);
      if (event) {
        context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
      }
      if (context._isWithActiveTrigger()) {
        return;
      }
      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_OUT;
      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return;
      }
      context._timeout = setTimeout(() => {
        if (context._hoverState === HOVER_STATE_OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    }
    _isWithActiveTrigger() {
      for (const trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }
      return false;
    }
    _getConfig(config) {
      const dataAttributes = Manipulator__default['default'].getDataAttributes(this._element);
      Object.keys(dataAttributes).forEach(dataAttr => {
        if (DISALLOWED_ATTRIBUTES.has(dataAttr)) {
          delete dataAttributes[dataAttr];
        }
      });
      if (config && typeof config.container === 'object' && config.container.jquery) {
        config.container = config.container[0];
      }
      config = {
        ...this.constructor.Default,
        ...dataAttributes,
        ...typeof config === 'object' && config ? config : {}
      };
      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }
      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }
      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }
      typeCheckConfig(NAME, config, this.constructor.DefaultType);
      if (config.sanitize) {
        config.template = sanitizeHtml(config.template, config.allowList, config.sanitizeFn);
      }
      return config;
    }
    _getDelegateConfig() {
      const config = {};
      if (this.config) {
        for (const key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key];
          }
        }
      }
      return config;
    }
    _cleanTipClass() {
      const tip = this.getTipElement();
      const tabClass = tip.getAttribute('class').match(BSCLS_PREFIX_REGEX);
      if (tabClass !== null && tabClass.length > 0) {
        tabClass.map(token => token.trim()).forEach(tClass => tip.classList.remove(tClass));
      }
    }
    _handlePopperPlacementChange(popperData) {
      const {state} = popperData;
      if (!state) {
        return;
      }
      this.tip = state.elements.popper;
      this._cleanTipClass();
      this._addAttachmentClass(this._getAttachment(state.placement));
    }
    /*Static*/
    static jQueryInterface(config) {
      return this.each(function () {
        let data = Data__default['default'].get(this, DATA_KEY);
        const _config = typeof config === 'object' && config;
        if (!data && (/dispose|hide/).test(config)) {
          return;
        }
        if (!data) {
          data = new Tooltip(this, _config);
        }
        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config]();
        }
      });
    }
  }
  /**
  * ------------------------------------------------------------------------
  * jQuery
  * ------------------------------------------------------------------------
  * add .Tooltip to jQuery only if jQuery is present
  */
  defineJQueryPlugin(NAME, Tooltip);
  return Tooltip;
});

},{"@popperjs/core":"3b7Fs","./dom/data.js":"5gDwT","./dom/event-handler.js":"6QkXI","./dom/manipulator.js":"60SIB","./dom/selector-engine.js":"5cZzE","./base-component.js":"pGtcs"}],"3b7Fs":[function(require,module,exports) {
/**
* @popperjs/core v2.9.2 - MIT License
*/
"use strict";
Object.defineProperty(exports, '__esModule', {
  value: true
});
function getBoundingClientRect(element) {
  var rect = element.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    x: rect.left,
    y: rect.top
  };
}
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}
function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}
function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return (/auto|scroll|overlay|hidden/).test(overflow + overflowY + overflowX);
}
// Composite means it takes into account transforms as well as layout.
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement);
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
// means it doesn't take into account transforms.
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}
function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || (// DOM Element detected
    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}
function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}
/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}
function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === 'fixed') {
    return null;
  }
  return element.offsetParent;
}
// `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block
function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  var isIE = navigator.userAgent.indexOf('Trident') !== -1;
  if (isIE && isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = getComputedStyle(element);
    if (elementCss.position === 'fixed') {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode);
    // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static')) {
    return window;
  }
  return offsetParent || getContainingBlock(element) || window;
}
var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
// modifiers that need to read the DOM
var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead';
// pure-logic modifiers
var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain';
// modifier with the purpose to write to the DOM (or write into a framework state)
var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  });
  // On visiting object, check for its dependencies and visit them recursively
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers);
  // order based on phase
  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }
    return pending;
  };
}
function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  return [].concat(args).reduce(function (p, c) {
    return p.replace(/%s/, c);
  }, str);
}
var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
function validateModifiers(modifiers) {
  modifiers.forEach(function (modifier) {
    Object.keys(modifier).forEach(function (key) {
      switch (key) {
        case 'name':
          if (typeof modifier.name !== 'string') {
            console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
          }
          break;
        case 'enabled':
          if (typeof modifier.enabled !== 'boolean') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
          }
        case 'phase':
          if (modifierPhases.indexOf(modifier.phase) < 0) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
          }
          break;
        case 'fn':
          if (typeof modifier.fn !== 'function') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
          }
          break;
        case 'effect':
          if (typeof modifier.effect !== 'function') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
          }
          break;
        case 'requires':
          if (!Array.isArray(modifier.requires)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
          }
          break;
        case 'requiresIfExists':
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
          }
          break;
        case 'options':
        case 'data':
          break;
        default:
          console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
            return "\"" + s + "\"";
          }).join(', ') + "; but \"" + key + "\" was provided.");
      }
      modifier.requires && modifier.requires.forEach(function (requirement) {
        if (modifiers.find(function (mod) {
          return mod.name === requirement;
        }) == null) {
          console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}
function uniqueBy(arr, fn) {
  var identifiers = new Set();
  return arr.filter(function (item) {
    var identifier = fn(item);
    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}
function getBasePlacement(placement) {
  return placement.split('-')[0];
}
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {});
  // IE11 does not support Object.values
  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}
function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent
    if (!(/^((?!chrome|android).)*safari/i).test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}
var max = Math.max;
var min = Math.min;
var round = Math.round;
// of the `<html>` and `<body>` rect bounds if horizontally scrollable
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle(body || html).direction === 'rtl') {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  // First, attempt with faster native method
  if (parent.contains(child)) {
    return true;
      // then fallback to custom implementation with Shadow DOM support
} else // then fallback to custom implementation with Shadow DOM support
  if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      // $FlowFixMe[prop-missing]: need a better way to handle this...
      next = next.parentNode || next.host;
    } while (next);
  }
  // Give up, the result is false
  return false;
}
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
// A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`
function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414
  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
}
// Gets the maximum area that the element is visible in due to any number of
// clipping parents
function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
function getVariation(placement) {
  return placement.split('-')[1];
}
function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}
function computeOffsets(_ref) {
  var reference = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;
    }
  }
  return offsets;
}
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var referenceElement = state.elements.reference;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(referenceElement);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  // Offsets can be applied only to the popper element
  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }
  return overflowOffsets;
}
var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(options) {
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        };
        // Orders the modifiers based on their dependencies and `phase`
        // properties
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers)));
        // Strip out disabled modifiers
        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        });
        // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason
        if ("development" !== "production") {
          var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
            var name = _ref.name;
            return name;
          });
          validateModifiers(modifiers);
          if (getBasePlacement(state.options.placement) === auto) {
            var flipModifier = state.orderedModifiers.find(function (_ref2) {
              var name = _ref2.name;
              return name === 'flip';
            });
            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
            }
          }
          var _getComputedStyle = getComputedStyle(popper), marginTop = _getComputedStyle.marginTop, marginRight = _getComputedStyle.marginRight, marginBottom = _getComputedStyle.marginBottom, marginLeft = _getComputedStyle.marginLeft;
          // We no longer take into account `margins` on the popper, and it can
          // cause bugs with positioning, so we'll warn the consumer
          if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
          }
        }
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference = _state$elements.reference, popper = _state$elements.popper;
        // Don't proceed if `reference` or `popper` are not valid elements
        // anymore
        if (!areValidElements(reference, popper)) {
          if ("development" !== "production") {
            console.error(INVALID_ELEMENT_ERROR);
          }
          return;
        }
        // Store the reference and popper rects to be read by modifiers
        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        };
        // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect
        state.reset = false;
        state.placement = state.options.placement;
        // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`
        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if ("development" !== "production") {
            __debug_loops__ += 1;
            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference, popper)) {
      if ("development" !== "production") {
        console.error(INVALID_ELEMENT_ERROR);
      }
      return instance;
    }
    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    });
    // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.
    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name, _ref3$options = _ref3.options, options = _ref3$options === void 0 ? {} : _ref3$options, effect = _ref3.effect;
        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });
          var noopFn = function noopFn() {};
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var passive = {
  passive: true
};
function effect$2(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }
  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }
  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }
    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
}
// eslint-disable-next-line import/no-unused-modules
var eventListeners = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect$2,
  data: {}
};
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
}
// eslint-disable-next-line import/no-unused-modules
var popperOffsets$1 = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
};
var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
};
// Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.
function roundOffsetsByDPR(_ref) {
  var x = _ref.x, y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(round(x * dpr) / dpr) || 0,
    y: round(round(y * dpr) / dpr) || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets;
  var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets, _ref3$x = _ref3.x, x = _ref3$x === void 0 ? 0 : _ref3$x, _ref3$y = _ref3.y, y = _ref3$y === void 0 ? 0 : _ref3$y;
  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';
    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);
      if (getComputedStyle(offsetParent).position !== 'static') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    }
    // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it
    offsetParent = offsetParent;
    if (placement === top) {
      sideY = bottom;
      // $FlowFixMe[prop-missing]
      y -= offsetParent[heightProp] - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left) {
      sideX = right;
      // $FlowFixMe[prop-missing]
      x -= offsetParent[widthProp] - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}
function computeStyles(_ref4) {
  var state = _ref4.state, options = _ref4.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  if ("development" !== "production") {
    var transitionProperty = getComputedStyle(state.elements.popper).transitionProperty || '';
    if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
    }
  }
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
}
// eslint-disable-next-line import/no-unused-modules
var computeStyles$1 = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
};
// and applies them to the HTMLElements such as popper and arrow
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || ({});
    var attributes = state.attributes[name] || ({});
    var element = state.elements[name];
    // arrow is optional + virtual elements
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];
      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}
function effect$1(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || ({});
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      // Set all values to an empty string to unset them
      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {});
      // arrow is optional + virtual elements
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
// eslint-disable-next-line import/no-unused-modules
var applyStyles$1 = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect$1,
  requires: ['computeStyles']
};
function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
// eslint-disable-next-line import/no-unused-modules
var offset$1 = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
};
var hash$1 = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash$1[matched];
  });
}
var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
    if ("development" !== "production") {
      console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
    }
  }
  // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...
  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];
  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);
        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break") break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
// eslint-disable-next-line import/no-unused-modules
var flip$1 = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};
function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets) {
    return;
  }
  if (checkMainAxis || checkAltAxis) {
    var mainSide = mainAxis === 'y' ? top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min$1 = popperOffsets[mainAxis] + overflow[mainSide];
    var max$1 = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;
    if (checkMainAxis) {
      var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
      popperOffsets[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset;
    }
    if (checkAltAxis) {
      var _mainSide = mainAxis === 'x' ? top : left;
      var _altSide = mainAxis === 'x' ? bottom : right;
      var _offset = popperOffsets[altAxis];
      var _min = _offset + overflow[_mainSide];
      var _max = _offset - overflow[_altSide];
      var _preventedOffset = within(tether ? min(_min, tetherMin) : _min, _offset, tether ? max(_max, tetherMax) : _max);
      popperOffsets[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
  }
  state.modifiersData[name] = data;
}
// eslint-disable-next-line import/no-unused-modules
var preventOverflow$1 = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
};
var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';
  if (!arrowElement || !popperOffsets) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds
  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max);
  // Prevents breaking syntax highlighting...
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}
function effect(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;
  if (arrowElement == null) {
    return;
  }
  // CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if ("development" !== "production") {
    if (!isHTMLElement(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    if ("development" !== "production") {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
    }
    return;
  }
  state.elements.arrow = arrowElement;
}
// eslint-disable-next-line import/no-unused-modules
var arrow$1 = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
}
// eslint-disable-next-line import/no-unused-modules
var hide$1 = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
};
var defaultModifiers$1 = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];
var createPopper$1 = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers$1
});
// eslint-disable-next-line import/no-unused-modules
var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
});
// eslint-disable-next-line import/no-unused-modules
exports.applyStyles = applyStyles$1;
exports.arrow = arrow$1;
exports.computeStyles = computeStyles$1;
exports.createPopper = createPopper;
exports.createPopperLite = createPopper$1;
exports.defaultModifiers = defaultModifiers;
exports.detectOverflow = detectOverflow;
exports.eventListeners = eventListeners;
exports.flip = flip$1;
exports.hide = hide$1;
exports.offset = offset$1;
exports.popperGenerator = popperGenerator;
exports.popperOffsets = popperOffsets$1;
exports.preventOverflow = preventOverflow$1;

},{}],"HkTDd":[function(require,module,exports) {
var define;
/*!
* Bootstrap scrollspy.js v5.0.0 (https://getbootstrap.com/)
* Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('./dom/event-handler.js'), require('./dom/manipulator.js'), require('./dom/selector-engine.js'), require('./base-component.js')) : typeof define === 'function' && define.amd ? define(['./dom/event-handler', './dom/manipulator', './dom/selector-engine', './base-component'], factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.ScrollSpy = factory(global.EventHandler, global.Manipulator, global.SelectorEngine, global.Base));
})(this, function (EventHandler, Manipulator, SelectorEngine, BaseComponent) {
  "use strict";
  function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && ('default' in e) ? e : {
      'default': e
    };
  }
  var EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  var Manipulator__default = /*#__PURE__*/_interopDefaultLegacy(Manipulator);
  var SelectorEngine__default = /*#__PURE__*/_interopDefaultLegacy(SelectorEngine);
  var BaseComponent__default = /*#__PURE__*/_interopDefaultLegacy(BaseComponent);
  /**
  * --------------------------------------------------------------------------
  * Bootstrap (v5.0.0): util/index.js
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  * --------------------------------------------------------------------------
  */
  const MAX_UID = 1000000;
  const toType = obj => {
    if (obj === null || obj === undefined) {
      return `${obj}`;
    }
    return ({}).toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  };
  /**
  * --------------------------------------------------------------------------
  * Public Util Api
  * --------------------------------------------------------------------------
  */
  const getUID = prefix => {
    do {
      prefix += Math.floor(Math.random() * MAX_UID);
    } while (document.getElementById(prefix));
    return prefix;
  };
  const getSelector = element => {
    let selector = element.getAttribute('data-bs-target');
    if (!selector || selector === '#') {
      let hrefAttr = element.getAttribute('href');
      // The only valid content that could double as a selector are IDs or classes,
      // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
      // `document.querySelector` will rightfully complain it is invalid.
      // See https://github.com/twbs/bootstrap/issues/32273
      if (!hrefAttr || !hrefAttr.includes('#') && !hrefAttr.startsWith('.')) {
        return null;
      }
      // Just in case some CMS puts out a full URL with the anchor appended
      if (hrefAttr.includes('#') && !hrefAttr.startsWith('#')) {
        hrefAttr = `#${hrefAttr.split('#')[1]}`;
      }
      selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : null;
    }
    return selector;
  };
  const getSelectorFromElement = element => {
    const selector = getSelector(element);
    if (selector) {
      return document.querySelector(selector) ? selector : null;
    }
    return null;
  };
  const isElement = obj => (obj[0] || obj).nodeType;
  const typeCheckConfig = (componentName, config, configTypes) => {
    Object.keys(configTypes).forEach(property => {
      const expectedTypes = configTypes[property];
      const value = config[property];
      const valueType = value && isElement(value) ? 'element' : toType(value);
      if (!new RegExp(expectedTypes).test(valueType)) {
        throw new TypeError(`${componentName.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
      }
    });
  };
  const getjQuery = () => {
    const {jQuery} = window;
    if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
      return jQuery;
    }
    return null;
  };
  const onDOMContentLoaded = callback => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback);
    } else {
      callback();
    }
  };
  const defineJQueryPlugin = (name, plugin) => {
    onDOMContentLoaded(() => {
      const $ = getjQuery();
      /*istanbul ignore if*/
      if ($) {
        const JQUERY_NO_CONFLICT = $.fn[name];
        $.fn[name] = plugin.jQueryInterface;
        $.fn[name].Constructor = plugin;
        $.fn[name].noConflict = () => {
          $.fn[name] = JQUERY_NO_CONFLICT;
          return plugin.jQueryInterface;
        };
      }
    });
  };
  /**
  * --------------------------------------------------------------------------
  * Bootstrap (v5.0.0): scrollspy.js
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  * --------------------------------------------------------------------------
  */
  /**
  * ------------------------------------------------------------------------
  * Constants
  * ------------------------------------------------------------------------
  */
  const NAME = 'scrollspy';
  const DATA_KEY = 'bs.scrollspy';
  const EVENT_KEY = `.${DATA_KEY}`;
  const DATA_API_KEY = '.data-api';
  const Default = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  const DefaultType = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  const EVENT_ACTIVATE = `activate${EVENT_KEY}`;
  const EVENT_SCROLL = `scroll${EVENT_KEY}`;
  const EVENT_LOAD_DATA_API = `load${EVENT_KEY}${DATA_API_KEY}`;
  const CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
  const CLASS_NAME_ACTIVE = 'active';
  const SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
  const SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
  const SELECTOR_NAV_LINKS = '.nav-link';
  const SELECTOR_NAV_ITEMS = '.nav-item';
  const SELECTOR_LIST_ITEMS = '.list-group-item';
  const SELECTOR_DROPDOWN = '.dropdown';
  const SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
  const METHOD_OFFSET = 'offset';
  const METHOD_POSITION = 'position';
  /**
  * ------------------------------------------------------------------------
  * Class Definition
  * ------------------------------------------------------------------------
  */
  class ScrollSpy extends BaseComponent__default['default'] {
    constructor(element, config) {
      super(element);
      this._scrollElement = this._element.tagName === 'BODY' ? window : this._element;
      this._config = this._getConfig(config);
      this._selector = `${this._config.target} ${SELECTOR_NAV_LINKS}, ${this._config.target} ${SELECTOR_LIST_ITEMS}, ${this._config.target} .${CLASS_NAME_DROPDOWN_ITEM}`;
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;
      EventHandler__default['default'].on(this._scrollElement, EVENT_SCROLL, () => this._process());
      this.refresh();
      this._process();
    }
    /*Getters*/
    static get Default() {
      return Default;
    }
    static get DATA_KEY() {
      return DATA_KEY;
    }
    /*Public*/
    refresh() {
      const autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
      const offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
      const offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();
      const targets = SelectorEngine__default['default'].find(this._selector);
      targets.map(element => {
        const targetSelector = getSelectorFromElement(element);
        const target = targetSelector ? SelectorEngine__default['default'].findOne(targetSelector) : null;
        if (target) {
          const targetBCR = target.getBoundingClientRect();
          if (targetBCR.width || targetBCR.height) {
            return [Manipulator__default['default'][offsetMethod](target).top + offsetBase, targetSelector];
          }
        }
        return null;
      }).filter(item => item).sort((a, b) => a[0] - b[0]).forEach(item => {
        this._offsets.push(item[0]);
        this._targets.push(item[1]);
      });
    }
    dispose() {
      super.dispose();
      EventHandler__default['default'].off(this._scrollElement, EVENT_KEY);
      this._scrollElement = null;
      this._config = null;
      this._selector = null;
      this._offsets = null;
      this._targets = null;
      this._activeTarget = null;
      this._scrollHeight = null;
    }
    /*Private*/
    _getConfig(config) {
      config = {
        ...Default,
        ...Manipulator__default['default'].getDataAttributes(this._element),
        ...typeof config === 'object' && config ? config : {}
      };
      if (typeof config.target !== 'string' && isElement(config.target)) {
        let {id} = config.target;
        if (!id) {
          id = getUID(NAME);
          config.target.id = id;
        }
        config.target = `#${id}`;
      }
      typeCheckConfig(NAME, config, DefaultType);
      return config;
    }
    _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }
    _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }
    _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }
    _process() {
      const scrollTop = this._getScrollTop() + this._config.offset;
      const scrollHeight = this._getScrollHeight();
      const maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();
      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }
      if (scrollTop >= maxScroll) {
        const target = this._targets[this._targets.length - 1];
        if (this._activeTarget !== target) {
          this._activate(target);
        }
        return;
      }
      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;
        this._clear();
        return;
      }
      for (let i = this._offsets.length; i--; ) {
        const isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);
        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    }
    _activate(target) {
      this._activeTarget = target;
      this._clear();
      const queries = this._selector.split(',').map(selector => `${selector}[data-bs-target="${target}"],${selector}[href="${target}"]`);
      const link = SelectorEngine__default['default'].findOne(queries.join(','));
      if (link.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
        SelectorEngine__default['default'].findOne(SELECTOR_DROPDOWN_TOGGLE, link.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE);
        link.classList.add(CLASS_NAME_ACTIVE);
      } else {
        // Set triggered link as active
        link.classList.add(CLASS_NAME_ACTIVE);
        SelectorEngine__default['default'].parents(link, SELECTOR_NAV_LIST_GROUP).forEach(listGroup => {
          // Set triggered links parents as active
          // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
          SelectorEngine__default['default'].prev(listGroup, `${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`).forEach(item => item.classList.add(CLASS_NAME_ACTIVE));
          // Handle special case when .nav-link is inside .nav-item
          SelectorEngine__default['default'].prev(listGroup, SELECTOR_NAV_ITEMS).forEach(navItem => {
            SelectorEngine__default['default'].children(navItem, SELECTOR_NAV_LINKS).forEach(item => item.classList.add(CLASS_NAME_ACTIVE));
          });
        });
      }
      EventHandler__default['default'].trigger(this._scrollElement, EVENT_ACTIVATE, {
        relatedTarget: target
      });
    }
    _clear() {
      SelectorEngine__default['default'].find(this._selector).filter(node => node.classList.contains(CLASS_NAME_ACTIVE)).forEach(node => node.classList.remove(CLASS_NAME_ACTIVE));
    }
    /*Static*/
    static jQueryInterface(config) {
      return this.each(function () {
        const data = ScrollSpy.getInstance(this) || new ScrollSpy(this, typeof config === 'object' ? config : {});
        if (typeof config !== 'string') {
          return;
        }
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  }
  /**
  * ------------------------------------------------------------------------
  * Data Api implementation
  * ------------------------------------------------------------------------
  */
  EventHandler__default['default'].on(window, EVENT_LOAD_DATA_API, () => {
    SelectorEngine__default['default'].find(SELECTOR_DATA_SPY).forEach(spy => new ScrollSpy(spy));
  });
  /**
  * ------------------------------------------------------------------------
  * jQuery
  * ------------------------------------------------------------------------
  * add .ScrollSpy to jQuery only if jQuery is present
  */
  defineJQueryPlugin(NAME, ScrollSpy);
  return ScrollSpy;
});

},{"./dom/event-handler.js":"6QkXI","./dom/manipulator.js":"60SIB","./dom/selector-engine.js":"5cZzE","./base-component.js":"pGtcs"}],"mLXwQ":[function(require,module,exports) {
var define;
/*!
* Bootstrap tab.js v5.0.0 (https://getbootstrap.com/)
* Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('./dom/data.js'), require('./dom/event-handler.js'), require('./dom/selector-engine.js'), require('./base-component.js')) : typeof define === 'function' && define.amd ? define(['./dom/data', './dom/event-handler', './dom/selector-engine', './base-component'], factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Tab = factory(global.Data, global.EventHandler, global.SelectorEngine, global.Base));
})(this, function (Data, EventHandler, SelectorEngine, BaseComponent) {
  "use strict";
  function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && ('default' in e) ? e : {
      'default': e
    };
  }
  var Data__default = /*#__PURE__*/_interopDefaultLegacy(Data);
  var EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  var SelectorEngine__default = /*#__PURE__*/_interopDefaultLegacy(SelectorEngine);
  var BaseComponent__default = /*#__PURE__*/_interopDefaultLegacy(BaseComponent);
  /**
  * --------------------------------------------------------------------------
  * Bootstrap (v5.0.0): util/index.js
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  * --------------------------------------------------------------------------
  */
  const MILLISECONDS_MULTIPLIER = 1000;
  const TRANSITION_END = 'transitionend';
  // Shoutout AngusCroll (https://goo.gl/pxwQGp)
  const getSelector = element => {
    let selector = element.getAttribute('data-bs-target');
    if (!selector || selector === '#') {
      let hrefAttr = element.getAttribute('href');
      // The only valid content that could double as a selector are IDs or classes,
      // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
      // `document.querySelector` will rightfully complain it is invalid.
      // See https://github.com/twbs/bootstrap/issues/32273
      if (!hrefAttr || !hrefAttr.includes('#') && !hrefAttr.startsWith('.')) {
        return null;
      }
      // Just in case some CMS puts out a full URL with the anchor appended
      if (hrefAttr.includes('#') && !hrefAttr.startsWith('#')) {
        hrefAttr = `#${hrefAttr.split('#')[1]}`;
      }
      selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : null;
    }
    return selector;
  };
  const getElementFromSelector = element => {
    const selector = getSelector(element);
    return selector ? document.querySelector(selector) : null;
  };
  const getTransitionDurationFromElement = element => {
    if (!element) {
      return 0;
    }
    // Get transition-duration of the element
    let {transitionDuration, transitionDelay} = window.getComputedStyle(element);
    const floatTransitionDuration = Number.parseFloat(transitionDuration);
    const floatTransitionDelay = Number.parseFloat(transitionDelay);
    // Return 0 if element or transition duration is not found
    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    }
    // If multiple durations are defined, take the first
    transitionDuration = transitionDuration.split(',')[0];
    transitionDelay = transitionDelay.split(',')[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
  };
  const triggerTransitionEnd = element => {
    element.dispatchEvent(new Event(TRANSITION_END));
  };
  const emulateTransitionEnd = (element, duration) => {
    let called = false;
    const durationPadding = 5;
    const emulatedDuration = duration + durationPadding;
    function listener() {
      called = true;
      element.removeEventListener(TRANSITION_END, listener);
    }
    element.addEventListener(TRANSITION_END, listener);
    setTimeout(() => {
      if (!called) {
        triggerTransitionEnd(element);
      }
    }, emulatedDuration);
  };
  const isDisabled = element => {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      return true;
    }
    if (element.classList.contains('disabled')) {
      return true;
    }
    if (typeof element.disabled !== 'undefined') {
      return element.disabled;
    }
    return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
  };
  const reflow = element => element.offsetHeight;
  const getjQuery = () => {
    const {jQuery} = window;
    if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
      return jQuery;
    }
    return null;
  };
  const onDOMContentLoaded = callback => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback);
    } else {
      callback();
    }
  };
  const defineJQueryPlugin = (name, plugin) => {
    onDOMContentLoaded(() => {
      const $ = getjQuery();
      /*istanbul ignore if*/
      if ($) {
        const JQUERY_NO_CONFLICT = $.fn[name];
        $.fn[name] = plugin.jQueryInterface;
        $.fn[name].Constructor = plugin;
        $.fn[name].noConflict = () => {
          $.fn[name] = JQUERY_NO_CONFLICT;
          return plugin.jQueryInterface;
        };
      }
    });
  };
  /**
  * --------------------------------------------------------------------------
  * Bootstrap (v5.0.0): tab.js
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  * --------------------------------------------------------------------------
  */
  /**
  * ------------------------------------------------------------------------
  * Constants
  * ------------------------------------------------------------------------
  */
  const NAME = 'tab';
  const DATA_KEY = 'bs.tab';
  const EVENT_KEY = `.${DATA_KEY}`;
  const DATA_API_KEY = '.data-api';
  const EVENT_HIDE = `hide${EVENT_KEY}`;
  const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
  const EVENT_SHOW = `show${EVENT_KEY}`;
  const EVENT_SHOWN = `shown${EVENT_KEY}`;
  const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
  const CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
  const CLASS_NAME_ACTIVE = 'active';
  const CLASS_NAME_FADE = 'fade';
  const CLASS_NAME_SHOW = 'show';
  const SELECTOR_DROPDOWN = '.dropdown';
  const SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
  const SELECTOR_ACTIVE = '.active';
  const SELECTOR_ACTIVE_UL = ':scope > li > .active';
  const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
  const SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
  const SELECTOR_DROPDOWN_ACTIVE_CHILD = ':scope > .dropdown-menu .active';
  /**
  * ------------------------------------------------------------------------
  * Class Definition
  * ------------------------------------------------------------------------
  */
  class Tab extends BaseComponent__default['default'] {
    // Getters
    static get DATA_KEY() {
      return DATA_KEY;
    }
    /*Public*/
    show() {
      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(CLASS_NAME_ACTIVE)) {
        return;
      }
      let previous;
      const target = getElementFromSelector(this._element);
      const listElement = this._element.closest(SELECTOR_NAV_LIST_GROUP);
      if (listElement) {
        const itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE;
        previous = SelectorEngine__default['default'].find(itemSelector, listElement);
        previous = previous[previous.length - 1];
      }
      const hideEvent = previous ? EventHandler__default['default'].trigger(previous, EVENT_HIDE, {
        relatedTarget: this._element
      }) : null;
      const showEvent = EventHandler__default['default'].trigger(this._element, EVENT_SHOW, {
        relatedTarget: previous
      });
      if (showEvent.defaultPrevented || hideEvent !== null && hideEvent.defaultPrevented) {
        return;
      }
      this._activate(this._element, listElement);
      const complete = () => {
        EventHandler__default['default'].trigger(previous, EVENT_HIDDEN, {
          relatedTarget: this._element
        });
        EventHandler__default['default'].trigger(this._element, EVENT_SHOWN, {
          relatedTarget: previous
        });
      };
      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    }
    /*Private*/
    _activate(element, container, callback) {
      const activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? SelectorEngine__default['default'].find(SELECTOR_ACTIVE_UL, container) : SelectorEngine__default['default'].children(container, SELECTOR_ACTIVE);
      const active = activeElements[0];
      const isTransitioning = callback && active && active.classList.contains(CLASS_NAME_FADE);
      const complete = () => this._transitionComplete(element, active, callback);
      if (active && isTransitioning) {
        const transitionDuration = getTransitionDurationFromElement(active);
        active.classList.remove(CLASS_NAME_SHOW);
        EventHandler__default['default'].one(active, 'transitionend', complete);
        emulateTransitionEnd(active, transitionDuration);
      } else {
        complete();
      }
    }
    _transitionComplete(element, active, callback) {
      if (active) {
        active.classList.remove(CLASS_NAME_ACTIVE);
        const dropdownChild = SelectorEngine__default['default'].findOne(SELECTOR_DROPDOWN_ACTIVE_CHILD, active.parentNode);
        if (dropdownChild) {
          dropdownChild.classList.remove(CLASS_NAME_ACTIVE);
        }
        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
      }
      element.classList.add(CLASS_NAME_ACTIVE);
      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
      }
      reflow(element);
      if (element.classList.contains(CLASS_NAME_FADE)) {
        element.classList.add(CLASS_NAME_SHOW);
      }
      let parent = element.parentNode;
      if (parent && parent.nodeName === 'LI') {
        parent = parent.parentNode;
      }
      if (parent && parent.classList.contains(CLASS_NAME_DROPDOWN_MENU)) {
        const dropdownElement = element.closest(SELECTOR_DROPDOWN);
        if (dropdownElement) {
          SelectorEngine__default['default'].find(SELECTOR_DROPDOWN_TOGGLE, dropdownElement).forEach(dropdown => dropdown.classList.add(CLASS_NAME_ACTIVE));
        }
        element.setAttribute('aria-expanded', true);
      }
      if (callback) {
        callback();
      }
    }
    /*Static*/
    static jQueryInterface(config) {
      return this.each(function () {
        const data = Data__default['default'].get(this, DATA_KEY) || new Tab(this);
        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config]();
        }
      });
    }
  }
  /**
  * ------------------------------------------------------------------------
  * Data Api implementation
  * ------------------------------------------------------------------------
  */
  EventHandler__default['default'].on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }
    if (isDisabled(this)) {
      return;
    }
    const data = Data__default['default'].get(this, DATA_KEY) || new Tab(this);
    data.show();
  });
  /**
  * ------------------------------------------------------------------------
  * jQuery
  * ------------------------------------------------------------------------
  * add .Tab to jQuery only if jQuery is present
  */
  defineJQueryPlugin(NAME, Tab);
  return Tab;
});

},{"./dom/data.js":"5gDwT","./dom/event-handler.js":"6QkXI","./dom/selector-engine.js":"5cZzE","./base-component.js":"pGtcs"}],"38EYQ":[function(require,module,exports) {
var define;
/*!
* Bootstrap toast.js v5.0.0 (https://getbootstrap.com/)
* Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('./dom/data.js'), require('./dom/event-handler.js'), require('./dom/manipulator.js'), require('./base-component.js')) : typeof define === 'function' && define.amd ? define(['./dom/data', './dom/event-handler', './dom/manipulator', './base-component'], factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Toast = factory(global.Data, global.EventHandler, global.Manipulator, global.Base));
})(this, function (Data, EventHandler, Manipulator, BaseComponent) {
  "use strict";
  function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && ('default' in e) ? e : {
      'default': e
    };
  }
  var Data__default = /*#__PURE__*/_interopDefaultLegacy(Data);
  var EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  var Manipulator__default = /*#__PURE__*/_interopDefaultLegacy(Manipulator);
  var BaseComponent__default = /*#__PURE__*/_interopDefaultLegacy(BaseComponent);
  /**
  * --------------------------------------------------------------------------
  * Bootstrap (v5.0.0): util/index.js
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  * --------------------------------------------------------------------------
  */
  const MILLISECONDS_MULTIPLIER = 1000;
  const TRANSITION_END = 'transitionend';
  // Shoutout AngusCroll (https://goo.gl/pxwQGp)
  const toType = obj => {
    if (obj === null || obj === undefined) {
      return `${obj}`;
    }
    return ({}).toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  };
  const getTransitionDurationFromElement = element => {
    if (!element) {
      return 0;
    }
    // Get transition-duration of the element
    let {transitionDuration, transitionDelay} = window.getComputedStyle(element);
    const floatTransitionDuration = Number.parseFloat(transitionDuration);
    const floatTransitionDelay = Number.parseFloat(transitionDelay);
    // Return 0 if element or transition duration is not found
    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    }
    // If multiple durations are defined, take the first
    transitionDuration = transitionDuration.split(',')[0];
    transitionDelay = transitionDelay.split(',')[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
  };
  const triggerTransitionEnd = element => {
    element.dispatchEvent(new Event(TRANSITION_END));
  };
  const isElement = obj => (obj[0] || obj).nodeType;
  const emulateTransitionEnd = (element, duration) => {
    let called = false;
    const durationPadding = 5;
    const emulatedDuration = duration + durationPadding;
    function listener() {
      called = true;
      element.removeEventListener(TRANSITION_END, listener);
    }
    element.addEventListener(TRANSITION_END, listener);
    setTimeout(() => {
      if (!called) {
        triggerTransitionEnd(element);
      }
    }, emulatedDuration);
  };
  const typeCheckConfig = (componentName, config, configTypes) => {
    Object.keys(configTypes).forEach(property => {
      const expectedTypes = configTypes[property];
      const value = config[property];
      const valueType = value && isElement(value) ? 'element' : toType(value);
      if (!new RegExp(expectedTypes).test(valueType)) {
        throw new TypeError(`${componentName.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
      }
    });
  };
  const reflow = element => element.offsetHeight;
  const getjQuery = () => {
    const {jQuery} = window;
    if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
      return jQuery;
    }
    return null;
  };
  const onDOMContentLoaded = callback => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback);
    } else {
      callback();
    }
  };
  const defineJQueryPlugin = (name, plugin) => {
    onDOMContentLoaded(() => {
      const $ = getjQuery();
      /*istanbul ignore if*/
      if ($) {
        const JQUERY_NO_CONFLICT = $.fn[name];
        $.fn[name] = plugin.jQueryInterface;
        $.fn[name].Constructor = plugin;
        $.fn[name].noConflict = () => {
          $.fn[name] = JQUERY_NO_CONFLICT;
          return plugin.jQueryInterface;
        };
      }
    });
  };
  /**
  * --------------------------------------------------------------------------
  * Bootstrap (v5.0.0): toast.js
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  * --------------------------------------------------------------------------
  */
  /**
  * ------------------------------------------------------------------------
  * Constants
  * ------------------------------------------------------------------------
  */
  const NAME = 'toast';
  const DATA_KEY = 'bs.toast';
  const EVENT_KEY = `.${DATA_KEY}`;
  const EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY}`;
  const EVENT_HIDE = `hide${EVENT_KEY}`;
  const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
  const EVENT_SHOW = `show${EVENT_KEY}`;
  const EVENT_SHOWN = `shown${EVENT_KEY}`;
  const CLASS_NAME_FADE = 'fade';
  const CLASS_NAME_HIDE = 'hide';
  const CLASS_NAME_SHOW = 'show';
  const CLASS_NAME_SHOWING = 'showing';
  const DefaultType = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  const Default = {
    animation: true,
    autohide: true,
    delay: 5000
  };
  const SELECTOR_DATA_DISMISS = '[data-bs-dismiss="toast"]';
  /**
  * ------------------------------------------------------------------------
  * Class Definition
  * ------------------------------------------------------------------------
  */
  class Toast extends BaseComponent__default['default'] {
    constructor(element, config) {
      super(element);
      this._config = this._getConfig(config);
      this._timeout = null;
      this._setListeners();
    }
    /*Getters*/
    static get DefaultType() {
      return DefaultType;
    }
    static get Default() {
      return Default;
    }
    static get DATA_KEY() {
      return DATA_KEY;
    }
    /*Public*/
    show() {
      const showEvent = EventHandler__default['default'].trigger(this._element, EVENT_SHOW);
      if (showEvent.defaultPrevented) {
        return;
      }
      this._clearTimeout();
      if (this._config.animation) {
        this._element.classList.add(CLASS_NAME_FADE);
      }
      const complete = () => {
        this._element.classList.remove(CLASS_NAME_SHOWING);
        this._element.classList.add(CLASS_NAME_SHOW);
        EventHandler__default['default'].trigger(this._element, EVENT_SHOWN);
        if (this._config.autohide) {
          this._timeout = setTimeout(() => {
            this.hide();
          }, this._config.delay);
        }
      };
      this._element.classList.remove(CLASS_NAME_HIDE);
      reflow(this._element);
      this._element.classList.add(CLASS_NAME_SHOWING);
      if (this._config.animation) {
        const transitionDuration = getTransitionDurationFromElement(this._element);
        EventHandler__default['default'].one(this._element, 'transitionend', complete);
        emulateTransitionEnd(this._element, transitionDuration);
      } else {
        complete();
      }
    }
    hide() {
      if (!this._element.classList.contains(CLASS_NAME_SHOW)) {
        return;
      }
      const hideEvent = EventHandler__default['default'].trigger(this._element, EVENT_HIDE);
      if (hideEvent.defaultPrevented) {
        return;
      }
      const complete = () => {
        this._element.classList.add(CLASS_NAME_HIDE);
        EventHandler__default['default'].trigger(this._element, EVENT_HIDDEN);
      };
      this._element.classList.remove(CLASS_NAME_SHOW);
      if (this._config.animation) {
        const transitionDuration = getTransitionDurationFromElement(this._element);
        EventHandler__default['default'].one(this._element, 'transitionend', complete);
        emulateTransitionEnd(this._element, transitionDuration);
      } else {
        complete();
      }
    }
    dispose() {
      this._clearTimeout();
      if (this._element.classList.contains(CLASS_NAME_SHOW)) {
        this._element.classList.remove(CLASS_NAME_SHOW);
      }
      super.dispose();
      this._config = null;
    }
    /*Private*/
    _getConfig(config) {
      config = {
        ...Default,
        ...Manipulator__default['default'].getDataAttributes(this._element),
        ...typeof config === 'object' && config ? config : {}
      };
      typeCheckConfig(NAME, config, this.constructor.DefaultType);
      return config;
    }
    _setListeners() {
      EventHandler__default['default'].on(this._element, EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, () => this.hide());
    }
    _clearTimeout() {
      clearTimeout(this._timeout);
      this._timeout = null;
    }
    /*Static*/
    static jQueryInterface(config) {
      return this.each(function () {
        let data = Data__default['default'].get(this, DATA_KEY);
        const _config = typeof config === 'object' && config;
        if (!data) {
          data = new Toast(this, _config);
        }
        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config](this);
        }
      });
    }
  }
  /**
  * ------------------------------------------------------------------------
  * jQuery
  * ------------------------------------------------------------------------
  * add .Toast to jQuery only if jQuery is present
  */
  defineJQueryPlugin(NAME, Toast);
  return Toast;
});

},{"./dom/data.js":"5gDwT","./dom/event-handler.js":"6QkXI","./dom/manipulator.js":"60SIB","./base-component.js":"pGtcs"}]},["4KZjZ","NIh8e"], "NIh8e", "parcelRequire9aa7")

//# sourceMappingURL=parcel.js.map
