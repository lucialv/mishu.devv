import * as stream from 'stream';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : "undefined" !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

const require$$3 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(stream);

export { getDefaultExportFromCjs as a, commonjsGlobal as c, getDefaultExportFromNamespaceIfNotNamed as g, require$$3 as r };
//# sourceMappingURL=_stream_commonjs-external.mjs.map
