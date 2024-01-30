// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
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
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
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
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"4rkIz":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lqZg":[function(require,module,exports) {
var _redom = require("redom");
const ROW_CELL_COUNT = 6;
function getStartRowCellIndexesArray(rowCellCount) {
    const arr = [];
    for(let i = 0; i < rowCellCount; i++)arr.push(i * rowCellCount);
    return arr;
}
const startRowCellIndexes = getStartRowCellIndexesArray(ROW_CELL_COUNT);
function createGrid(container, elCount) {
    let createdElCount = 0;
    while(createdElCount < elCount){
        container.append((0, _redom.el)(".grid-element"));
        createdElCount++;
    }
}
function createAudioEl(file) {
    const audioEl = (0, _redom.el)("audio.audio-element", {
        controls: true
    });
    audioEl.src = URL.createObjectURL(file);
    audioEl.load();
    const context = new AudioContext();
    const src = context.createMediaElementSource(audioEl);
    const analyser = context.createAnalyser();
    src.connect(analyser);
    analyser.connect(context.destination);
    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    audioEl.addEventListener("play", renderFrame);
    function renderFrame() {
        if (!audioEl.paused) requestAnimationFrame(renderFrame);
        analyser.getByteFrequencyData(dataArray);
        const gridCells = document.querySelectorAll(".grid-element");
        gridCells.forEach((cell)=>cell.style.backgroundColor = "transparent");
        for(let i = 0; i < ROW_CELL_COUNT; i++){
            const columnHeight = Math.ceil(dataArray[i] / (256 / ROW_CELL_COUNT));
            const activeRowCellIndexes = startRowCellIndexes.map((value, index, array)=>array[array.length - 1 - index]).slice(0, columnHeight);
            activeRowCellIndexes.forEach((ind)=>{
                gridCells[ind + i].style.backgroundColor = "red";
            });
        }
    }
    return audioEl;
}
function getContentEls() {
    const gridContainer = (0, _redom.el)(".grid-container", {
        style: `grid-template-columns: repeat(${ROW_CELL_COUNT}, 50px)`
    });
    createGrid(gridContainer, Math.pow(ROW_CELL_COUNT, 2));
    const addFileInput = (0, _redom.el)("input.add-file-input", {
        type: "file",
        accept: "audio/*",
        onchange () {
            const file = addFileInput.files[0];
            if (file) {
                const audioEl = createAudioEl(file);
                gridContainer.after(audioEl);
            }
        }
    });
    return [
        gridContainer,
        addFileInput
    ];
}
const contentEl = (0, _redom.el)(".content", getContentEls());
(0, _redom.setChildren)(document.querySelector(".container"), [
    contentEl
]);

},{"redom":"gT5MM"}],"gT5MM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "el", ()=>(0, _htmlJs.el));
parcelHelpers.export(exports, "h", ()=>(0, _htmlJs.h));
parcelHelpers.export(exports, "html", ()=>(0, _htmlJs.html));
parcelHelpers.export(exports, "list", ()=>(0, _listJs.list));
parcelHelpers.export(exports, "List", ()=>(0, _listJs.List));
parcelHelpers.export(exports, "listPool", ()=>(0, _listpoolJs.listPool));
parcelHelpers.export(exports, "ListPool", ()=>(0, _listpoolJs.ListPool));
parcelHelpers.export(exports, "mount", ()=>(0, _mountJs.mount));
parcelHelpers.export(exports, "unmount", ()=>(0, _unmountJs.unmount));
parcelHelpers.export(exports, "place", ()=>(0, _placeJs.place));
parcelHelpers.export(exports, "Place", ()=>(0, _placeJs.Place));
parcelHelpers.export(exports, "router", ()=>(0, _routerJs.router));
parcelHelpers.export(exports, "Router", ()=>(0, _routerJs.Router));
parcelHelpers.export(exports, "setAttr", ()=>(0, _setattrJs.setAttr));
parcelHelpers.export(exports, "setXlink", ()=>(0, _setattrJs.setXlink));
parcelHelpers.export(exports, "setData", ()=>(0, _setattrJs.setData));
parcelHelpers.export(exports, "setStyle", ()=>(0, _setstyleJs.setStyle));
parcelHelpers.export(exports, "setChildren", ()=>(0, _setchildrenJs.setChildren));
parcelHelpers.export(exports, "s", ()=>(0, _svgJs.s));
parcelHelpers.export(exports, "svg", ()=>(0, _svgJs.svg));
parcelHelpers.export(exports, "text", ()=>(0, _textJs.text));
parcelHelpers.export(exports, "viewFactory", ()=>(0, _viewFactoryJs.viewFactory));
var _htmlJs = require("./html.js");
var _listJs = require("./list.js");
var _listpoolJs = require("./listpool.js");
var _mountJs = require("./mount.js");
var _unmountJs = require("./unmount.js");
var _placeJs = require("./place.js");
var _routerJs = require("./router.js");
var _setattrJs = require("./setattr.js");
var _setstyleJs = require("./setstyle.js");
var _setchildrenJs = require("./setchildren.js");
var _svgJs = require("./svg.js");
var _textJs = require("./text.js");
var _viewFactoryJs = require("./view-factory.js");

},{"./html.js":"hjTCY","./list.js":false,"./listpool.js":false,"./mount.js":false,"./unmount.js":false,"./place.js":false,"./router.js":false,"./setattr.js":false,"./setstyle.js":false,"./setchildren.js":"hM3Vg","./svg.js":false,"./text.js":false,"./view-factory.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hjTCY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "html", ()=>html);
parcelHelpers.export(exports, "el", ()=>el);
parcelHelpers.export(exports, "h", ()=>h);
var _createElementJs = require("./create-element.js");
var _utilJs = require("./util.js");
function html(query, ...args) {
    let element;
    const type = typeof query;
    if (type === "string") element = (0, _createElementJs.createElement)(query);
    else if (type === "function") {
        const Query = query;
        element = new Query(...args);
    } else throw new Error("At least one argument required");
    (0, _utilJs.parseArgumentsInternal)((0, _utilJs.getEl)(element), args, true);
    return element;
}
const el = html;
const h = html;
html.extend = function extendHtml(...args) {
    return html.bind(this, ...args);
};

},{"./create-element.js":"7ApSd","./util.js":"84GoL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7ApSd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createElement", ()=>createElement);
function createElement(query, ns) {
    const { tag, id, className } = parse(query);
    const element = ns ? document.createElementNS(ns, tag) : document.createElement(tag);
    if (id) element.id = id;
    if (className) {
        if (ns) element.setAttribute("class", className);
        else element.className = className;
    }
    return element;
}
function parse(query) {
    const chunks = query.split(/([.#])/);
    let className = "";
    let id = "";
    for(let i = 1; i < chunks.length; i += 2)switch(chunks[i]){
        case ".":
            className += ` ${chunks[i + 1]}`;
            break;
        case "#":
            id = chunks[i + 1];
    }
    return {
        className: className.trim(),
        tag: chunks[0] || "div",
        id
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"84GoL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parseArguments", ()=>parseArguments);
parcelHelpers.export(exports, "parseArgumentsInternal", ()=>parseArgumentsInternal);
parcelHelpers.export(exports, "ensureEl", ()=>ensureEl);
parcelHelpers.export(exports, "getEl", ()=>getEl);
parcelHelpers.export(exports, "isNode", ()=>isNode);
var _htmlJs = require("./html.js");
var _mountJs = require("./mount.js");
var _setattrJs = require("./setattr.js");
var _textJs = require("./text.js");
function parseArguments(element, args) {
    parseArgumentsInternal(element, args);
}
function parseArgumentsInternal(element, args, initial) {
    for (const arg of args){
        if (arg !== 0 && !arg) continue;
        const type = typeof arg;
        if (type === "function") arg(element);
        else if (type === "string" || type === "number") element.appendChild((0, _textJs.text)(arg));
        else if (isNode(getEl(arg))) (0, _mountJs.mount)(element, arg);
        else if (arg.length) parseArgumentsInternal(element, arg, initial);
        else if (type === "object") (0, _setattrJs.setAttrInternal)(element, arg, null, initial);
    }
}
function ensureEl(parent) {
    return typeof parent === "string" ? (0, _htmlJs.html)(parent) : getEl(parent);
}
function getEl(parent) {
    return parent.nodeType && parent || !parent.el && parent || getEl(parent.el);
}
function isNode(arg) {
    return arg && arg.nodeType;
}

},{"./html.js":"hjTCY","./mount.js":"5qTJ0","./setattr.js":"ljeoO","./text.js":"9AiUK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5qTJ0":[function(require,module,exports) {
/* global Node, ShadowRoot */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mount", ()=>mount);
parcelHelpers.export(exports, "trigger", ()=>trigger);
var _utilJs = require("./util.js");
var _unmountJs = require("./unmount.js");
const hookNames = [
    "onmount",
    "onremount",
    "onunmount"
];
const shadowRootAvailable = typeof window !== "undefined" && "ShadowRoot" in window;
function mount(parent, child, before, replace) {
    const parentEl = (0, _utilJs.getEl)(parent);
    const childEl = (0, _utilJs.getEl)(child);
    if (child === childEl && childEl.__redom_view) // try to look up the view if not provided
    child = childEl.__redom_view;
    if (child !== childEl) childEl.__redom_view = child;
    const wasMounted = childEl.__redom_mounted;
    const oldParent = childEl.parentNode;
    if (wasMounted && oldParent !== parentEl) (0, _unmountJs.doUnmount)(child, childEl, oldParent);
    if (before != null) {
        if (replace) {
            const beforeEl = (0, _utilJs.getEl)(before);
            if (beforeEl.__redom_mounted) trigger(beforeEl, "onunmount");
            parentEl.replaceChild(childEl, beforeEl);
        } else parentEl.insertBefore(childEl, (0, _utilJs.getEl)(before));
    } else parentEl.appendChild(childEl);
    doMount(child, childEl, parentEl, oldParent);
    return child;
}
function trigger(el, eventName) {
    if (eventName === "onmount" || eventName === "onremount") el.__redom_mounted = true;
    else if (eventName === "onunmount") el.__redom_mounted = false;
    const hooks = el.__redom_lifecycle;
    if (!hooks) return;
    const view = el.__redom_view;
    let hookCount = 0;
    view && view[eventName] && view[eventName]();
    for(const hook in hooks)if (hook) hookCount++;
    if (hookCount) {
        let traverse = el.firstChild;
        while(traverse){
            const next = traverse.nextSibling;
            trigger(traverse, eventName);
            traverse = next;
        }
    }
}
function doMount(child, childEl, parentEl, oldParent) {
    const hooks = childEl.__redom_lifecycle || (childEl.__redom_lifecycle = {});
    const remount = parentEl === oldParent;
    let hooksFound = false;
    for (const hookName of hookNames){
        if (!remount) {
            if (child !== childEl) {
                if (hookName in child) hooks[hookName] = (hooks[hookName] || 0) + 1;
            }
        }
        if (hooks[hookName]) hooksFound = true;
    }
    if (!hooksFound) {
        childEl.__redom_lifecycle = {};
        return;
    }
    let traverse = parentEl;
    let triggered = false;
    if (remount || traverse && traverse.__redom_mounted) {
        trigger(childEl, remount ? "onremount" : "onmount");
        triggered = true;
    }
    while(traverse){
        const parent = traverse.parentNode;
        const parentHooks = traverse.__redom_lifecycle || (traverse.__redom_lifecycle = {});
        for(const hook in hooks)parentHooks[hook] = (parentHooks[hook] || 0) + hooks[hook];
        if (triggered) break;
        else {
            if (traverse.nodeType === Node.DOCUMENT_NODE || shadowRootAvailable && traverse instanceof ShadowRoot || parent && parent.__redom_mounted) {
                trigger(traverse, remount ? "onremount" : "onmount");
                triggered = true;
            }
            traverse = parent;
        }
    }
}

},{"./util.js":"84GoL","./unmount.js":"irGDu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"irGDu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "unmount", ()=>unmount);
parcelHelpers.export(exports, "doUnmount", ()=>doUnmount);
var _utilJs = require("./util.js");
var _mountJs = require("./mount.js");
function unmount(parent, child) {
    const parentEl = (0, _utilJs.getEl)(parent);
    const childEl = (0, _utilJs.getEl)(child);
    if (child === childEl && childEl.__redom_view) // try to look up the view if not provided
    child = childEl.__redom_view;
    if (childEl.parentNode) {
        doUnmount(child, childEl, parentEl);
        parentEl.removeChild(childEl);
    }
    return child;
}
function doUnmount(child, childEl, parentEl) {
    const hooks = childEl.__redom_lifecycle;
    if (hooksAreEmpty(hooks)) {
        childEl.__redom_lifecycle = {};
        return;
    }
    let traverse = parentEl;
    if (childEl.__redom_mounted) (0, _mountJs.trigger)(childEl, "onunmount");
    while(traverse){
        const parentHooks = traverse.__redom_lifecycle || {};
        for(const hook in hooks)if (parentHooks[hook]) parentHooks[hook] -= hooks[hook];
        if (hooksAreEmpty(parentHooks)) traverse.__redom_lifecycle = null;
        traverse = traverse.parentNode;
    }
}
function hooksAreEmpty(hooks) {
    if (hooks == null) return true;
    for(const key in hooks){
        if (hooks[key]) return false;
    }
    return true;
}

},{"./util.js":"84GoL","./mount.js":"5qTJ0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ljeoO":[function(require,module,exports) {
/* global SVGElement */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setAttr", ()=>setAttr);
parcelHelpers.export(exports, "setAttrInternal", ()=>setAttrInternal);
parcelHelpers.export(exports, "setXlink", ()=>setXlink);
parcelHelpers.export(exports, "setData", ()=>setData);
var _setstyleJs = require("./setstyle.js");
var _utilJs = require("./util.js");
const xlinkns = "http://www.w3.org/1999/xlink";
function setAttr(view, arg1, arg2) {
    setAttrInternal(view, arg1, arg2);
}
function setAttrInternal(view, arg1, arg2, initial) {
    const el = (0, _utilJs.getEl)(view);
    const isObj = typeof arg1 === "object";
    if (isObj) for(const key in arg1)setAttrInternal(el, key, arg1[key], initial);
    else {
        const isSVG = el instanceof SVGElement;
        const isFunc = typeof arg2 === "function";
        if (arg1 === "style" && typeof arg2 === "object") (0, _setstyleJs.setStyle)(el, arg2);
        else if (isSVG && isFunc) el[arg1] = arg2;
        else if (arg1 === "dataset") setData(el, arg2);
        else if (!isSVG && (arg1 in el || isFunc) && arg1 !== "list") el[arg1] = arg2;
        else {
            if (isSVG && arg1 === "xlink") {
                setXlink(el, arg2);
                return;
            }
            if (initial && arg1 === "class") arg2 = el.className + " " + arg2;
            if (arg2 == null) el.removeAttribute(arg1);
            else el.setAttribute(arg1, arg2);
        }
    }
}
function setXlink(el, arg1, arg2) {
    if (typeof arg1 === "object") for(const key in arg1)setXlink(el, key, arg1[key]);
    else if (arg2 != null) el.setAttributeNS(xlinkns, arg1, arg2);
    else el.removeAttributeNS(xlinkns, arg1, arg2);
}
function setData(el, arg1, arg2) {
    if (typeof arg1 === "object") for(const key in arg1)setData(el, key, arg1[key]);
    else if (arg2 != null) el.dataset[arg1] = arg2;
    else delete el.dataset[arg1];
}

},{"./setstyle.js":"5PSeC","./util.js":"84GoL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5PSeC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setStyle", ()=>setStyle);
var _utilJs = require("./util.js");
function setStyle(view, arg1, arg2) {
    const el = (0, _utilJs.getEl)(view);
    if (typeof arg1 === "object") for(const key in arg1)setStyleValue(el, key, arg1[key]);
    else setStyleValue(el, arg1, arg2);
}
function setStyleValue(el, key, value) {
    el.style[key] = value == null ? "" : value;
}

},{"./util.js":"84GoL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9AiUK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "text", ()=>text);
function text(str) {
    return document.createTextNode(str != null ? str : "");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hM3Vg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setChildren", ()=>setChildren);
var _mountJs = require("./mount.js");
var _unmountJs = require("./unmount.js");
var _utilJs = require("./util.js");
function setChildren(parent, ...children) {
    const parentEl = (0, _utilJs.getEl)(parent);
    let current = traverse(parent, children, parentEl.firstChild);
    while(current){
        const next = current.nextSibling;
        (0, _unmountJs.unmount)(parent, current);
        current = next;
    }
}
function traverse(parent, children, _current) {
    let current = _current;
    const childEls = Array(children.length);
    for(let i = 0; i < children.length; i++)childEls[i] = children[i] && (0, _utilJs.getEl)(children[i]);
    for(let i = 0; i < children.length; i++){
        const child = children[i];
        if (!child) continue;
        const childEl = childEls[i];
        if (childEl === current) {
            current = current.nextSibling;
            continue;
        }
        if ((0, _utilJs.isNode)(childEl)) {
            const next = current && current.nextSibling;
            const exists = child.__redom_index != null;
            const replace = exists && next === childEls[i + 1];
            (0, _mountJs.mount)(parent, child, current, replace);
            if (replace) current = next;
            continue;
        }
        if (child.length != null) current = traverse(parent, child, current);
    }
    return current;
}

},{"./mount.js":"5qTJ0","./unmount.js":"irGDu","./util.js":"84GoL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["4rkIz","8lqZg"], "8lqZg", "parcelRequired34f")

//# sourceMappingURL=index.975ef6c8.js.map
