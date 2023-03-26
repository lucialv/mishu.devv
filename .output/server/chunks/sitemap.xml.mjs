import { defineEventHandler } from 'h3';
import { r as require$$3$1, g as getDefaultExportFromNamespaceIfNotNamed, c as commonjsGlobal } from './rollup/_stream_commonjs-external.mjs';
import * as fs from 'fs';
import * as readline from 'readline';
import * as url from 'url';
import * as path from 'path';
import * as child_process from 'child_process';
import * as sax from 'sax';
import * as zlib from 'zlib';
import * as util from 'util';
import { s as serverQueryContent } from './node-server.mjs';
import 'stream';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'ohmyfetch';
import 'radix3';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'unstorage/drivers/overlay';
import 'unstorage/drivers/memory';
import 'pathe';
import 'node:url';
import 'ipx';
import 'defu';
import 'remark-emoji';
import 'rehype-slug';
import 'remark-squeeze-paragraphs';
import 'rehype-external-links';
import 'remark-gfm';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'js-yaml';
import 'flat';
import 'unified';
import 'remark-parse';
import 'remark-rehype';
import 'unist-util-visit';
import 'stringify-entities';
import 'parse-entities';
import 'micromark-util-character';
import 'micromark-factory-space';
import 'micromark-factory-whitespace';
import 'micromark-core-commonmark';
import 'mdast-util-to-hast';
import 'detab';
import 'unist-builder';
import 'mdurl';
import 'unist-util-position';
import 'html-tags';
import 'slugify';
import 'shiki-es';

var dist = {};

var sitemapItemStream = {};

var errors = {};

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/*!
 * Sitemap
 * Copyright(c) 2011 Eugene Kalinin
 * MIT Licensed
 */
Object.defineProperty(errors, "__esModule", { value: true });
errors.EmptySitemap = errors.EmptyStream = errors.InvalidVideoPriceCurrency = errors.InvalidVideoResolution = errors.InvalidVideoPriceType = errors.InvalidVideoRestrictionRelationship = errors.InvalidVideoRestriction = errors.InvalidVideoFamilyFriendly = errors.InvalidVideoCategory = errors.InvalidVideoTagCount = errors.InvalidVideoViewCount = errors.InvalidVideoTitle = errors.XMLLintUnavailable = errors.InvalidNewsAccessValue = errors.InvalidNewsFormat = errors.InvalidAttr = errors.InvalidAttrValue = errors.InvalidVideoRating = errors.InvalidVideoDescription = errors.InvalidVideoDuration = errors.InvalidVideoFormat = errors.UndefinedTargetFolder = errors.PriorityInvalidError = errors.ChangeFreqInvalidError = errors.NoConfigError = errors.NoURLError = void 0;
/**
 * URL in SitemapItem does not exist
 */
class NoURLError extends Error {
    constructor(message) {
        super(message || 'URL is required');
        this.name = 'NoURLError';
        Error.captureStackTrace(this, NoURLError);
    }
}
errors.NoURLError = NoURLError;
/**
 * Config was not passed to SitemapItem constructor
 */
class NoConfigError extends Error {
    constructor(message) {
        super(message || 'SitemapItem requires a configuration');
        this.name = 'NoConfigError';
        Error.captureStackTrace(this, NoConfigError);
    }
}
errors.NoConfigError = NoConfigError;
/**
 * changefreq property in sitemap is invalid
 */
class ChangeFreqInvalidError extends Error {
    constructor(url, changefreq) {
        super(`${url}: changefreq "${changefreq}" is invalid`);
        this.name = 'ChangeFreqInvalidError';
        Error.captureStackTrace(this, ChangeFreqInvalidError);
    }
}
errors.ChangeFreqInvalidError = ChangeFreqInvalidError;
/**
 * priority property in sitemap is invalid
 */
class PriorityInvalidError extends Error {
    constructor(url, priority) {
        super(`${url}: priority "${priority}" must be a number between 0 and 1 inclusive`);
        this.name = 'PriorityInvalidError';
        Error.captureStackTrace(this, PriorityInvalidError);
    }
}
errors.PriorityInvalidError = PriorityInvalidError;
/**
 * SitemapIndex target Folder does not exists
 */
class UndefinedTargetFolder extends Error {
    constructor(message) {
        super(message || 'Target folder must exist');
        this.name = 'UndefinedTargetFolder';
        Error.captureStackTrace(this, UndefinedTargetFolder);
    }
}
errors.UndefinedTargetFolder = UndefinedTargetFolder;
class InvalidVideoFormat extends Error {
    constructor(url) {
        super(`${url} video must include thumbnail_loc, title and description fields for videos`);
        this.name = 'InvalidVideoFormat';
        Error.captureStackTrace(this, InvalidVideoFormat);
    }
}
errors.InvalidVideoFormat = InvalidVideoFormat;
class InvalidVideoDuration extends Error {
    constructor(url, duration) {
        super(`${url} duration "${duration}" must be an integer of seconds between 0 and 28800`);
        this.name = 'InvalidVideoDuration';
        Error.captureStackTrace(this, InvalidVideoDuration);
    }
}
errors.InvalidVideoDuration = InvalidVideoDuration;
class InvalidVideoDescription extends Error {
    constructor(url, length) {
        const message = `${url}: video description is too long ${length} vs limit of 2048 characters.`;
        super(message);
        this.name = 'InvalidVideoDescription';
        Error.captureStackTrace(this, InvalidVideoDescription);
    }
}
errors.InvalidVideoDescription = InvalidVideoDescription;
class InvalidVideoRating extends Error {
    constructor(url, title, rating) {
        super(`${url}: video "${title}" rating "${rating}" must be between 0 and 5 inclusive`);
        this.name = 'InvalidVideoRating';
        Error.captureStackTrace(this, InvalidVideoRating);
    }
}
errors.InvalidVideoRating = InvalidVideoRating;
class InvalidAttrValue extends Error {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(key, val, validator) {
        super('"' +
            val +
            '" tested against: ' +
            validator +
            ' is not a valid value for attr: "' +
            key +
            '"');
        this.name = 'InvalidAttrValue';
        Error.captureStackTrace(this, InvalidAttrValue);
    }
}
errors.InvalidAttrValue = InvalidAttrValue;
// InvalidAttr is only thrown when attrbuilder is called incorrectly internally
/* istanbul ignore next */
class InvalidAttr extends Error {
    constructor(key) {
        super('"' + key + '" is malformed');
        this.name = 'InvalidAttr';
        Error.captureStackTrace(this, InvalidAttr);
    }
}
errors.InvalidAttr = InvalidAttr;
class InvalidNewsFormat extends Error {
    constructor(url) {
        super(`${url} News must include publication, publication name, publication language, title, and publication_date for news`);
        this.name = 'InvalidNewsFormat';
        Error.captureStackTrace(this, InvalidNewsFormat);
    }
}
errors.InvalidNewsFormat = InvalidNewsFormat;
class InvalidNewsAccessValue extends Error {
    constructor(url, access) {
        super(`${url} News access "${access}" must be either Registration, Subscription or not be present`);
        this.name = 'InvalidNewsAccessValue';
        Error.captureStackTrace(this, InvalidNewsAccessValue);
    }
}
errors.InvalidNewsAccessValue = InvalidNewsAccessValue;
class XMLLintUnavailable extends Error {
    constructor(message) {
        super(message || 'xmlLint is not installed. XMLLint is required to validate');
        this.name = 'XMLLintUnavailable';
        Error.captureStackTrace(this, XMLLintUnavailable);
    }
}
errors.XMLLintUnavailable = XMLLintUnavailable;
class InvalidVideoTitle extends Error {
    constructor(url, length) {
        super(`${url}: video title is too long ${length} vs 100 character limit`);
        this.name = 'InvalidVideoTitle';
        Error.captureStackTrace(this, InvalidVideoTitle);
    }
}
errors.InvalidVideoTitle = InvalidVideoTitle;
class InvalidVideoViewCount extends Error {
    constructor(url, count) {
        super(`${url}: video view count must be positive, view count was ${count}`);
        this.name = 'InvalidVideoViewCount';
        Error.captureStackTrace(this, InvalidVideoViewCount);
    }
}
errors.InvalidVideoViewCount = InvalidVideoViewCount;
class InvalidVideoTagCount extends Error {
    constructor(url, count) {
        super(`${url}: video can have no more than 32 tags, this has ${count}`);
        this.name = 'InvalidVideoTagCount';
        Error.captureStackTrace(this, InvalidVideoTagCount);
    }
}
errors.InvalidVideoTagCount = InvalidVideoTagCount;
class InvalidVideoCategory extends Error {
    constructor(url, count) {
        super(`${url}: video category can only be 256 characters but was passed ${count}`);
        this.name = 'InvalidVideoCategory';
        Error.captureStackTrace(this, InvalidVideoCategory);
    }
}
errors.InvalidVideoCategory = InvalidVideoCategory;
class InvalidVideoFamilyFriendly extends Error {
    constructor(url, fam) {
        super(`${url}: video family friendly must be yes or no, was passed "${fam}"`);
        this.name = 'InvalidVideoFamilyFriendly';
        Error.captureStackTrace(this, InvalidVideoFamilyFriendly);
    }
}
errors.InvalidVideoFamilyFriendly = InvalidVideoFamilyFriendly;
class InvalidVideoRestriction extends Error {
    constructor(url, code) {
        super(`${url}: video restriction must be one or more two letter country codes. Was passed "${code}"`);
        this.name = 'InvalidVideoRestriction';
        Error.captureStackTrace(this, InvalidVideoRestriction);
    }
}
errors.InvalidVideoRestriction = InvalidVideoRestriction;
class InvalidVideoRestrictionRelationship extends Error {
    constructor(url, val) {
        super(`${url}: video restriction relationship must be either allow or deny. Was passed "${val}"`);
        this.name = 'InvalidVideoRestrictionRelationship';
        Error.captureStackTrace(this, InvalidVideoRestrictionRelationship);
    }
}
errors.InvalidVideoRestrictionRelationship = InvalidVideoRestrictionRelationship;
class InvalidVideoPriceType extends Error {
    constructor(url, priceType, price) {
        super(priceType === undefined && price === ''
            ? `${url}: video priceType is required when price is not provided`
            : `${url}: video price type "${priceType}" is not "rent" or "purchase"`);
        this.name = 'InvalidVideoPriceType';
        Error.captureStackTrace(this, InvalidVideoPriceType);
    }
}
errors.InvalidVideoPriceType = InvalidVideoPriceType;
class InvalidVideoResolution extends Error {
    constructor(url, resolution) {
        super(`${url}: video price resolution "${resolution}" is not hd or sd`);
        this.name = 'InvalidVideoResolution';
        Error.captureStackTrace(this, InvalidVideoResolution);
    }
}
errors.InvalidVideoResolution = InvalidVideoResolution;
class InvalidVideoPriceCurrency extends Error {
    constructor(url, currency) {
        super(`${url}: video price currency "${currency}" must be a three capital letter abbrieviation for the country currency`);
        this.name = 'InvalidVideoPriceCurrency';
        Error.captureStackTrace(this, InvalidVideoPriceCurrency);
    }
}
errors.InvalidVideoPriceCurrency = InvalidVideoPriceCurrency;
class EmptyStream extends Error {
    constructor() {
        super('You have ended the stream before anything was written. streamToPromise MUST be called before ending the stream.');
        this.name = 'EmptyStream';
        Error.captureStackTrace(this, EmptyStream);
    }
}
errors.EmptyStream = EmptyStream;
class EmptySitemap extends Error {
    constructor() {
        super('You ended the stream without writing anything.');
        this.name = 'EmptySitemap';
        Error.captureStackTrace(this, EmptyStream);
    }
}
errors.EmptySitemap = EmptySitemap;

var types = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.IndexTagNames = exports.TagNames = exports.ErrorLevel = exports.isAllowDeny = exports.EnumAllowDeny = exports.isValidYesNo = exports.EnumYesNo = exports.isValidChangeFreq = exports.CHANGEFREQ = exports.isResolution = exports.isPriceType = exports.validators = exports.EnumChangefreq = void 0;
	/**
	 * How frequently the page is likely to change. This value provides general
	 * information to search engines and may not correlate exactly to how often they crawl the page. Please note that the
	 * value of this tag is considered a hint and not a command. See
	 * <https://www.sitemaps.org/protocol.html#xmlTagDefinitions> for the acceptable
	 * values
	 */
	var EnumChangefreq;
	(function (EnumChangefreq) {
	    EnumChangefreq["DAILY"] = "daily";
	    EnumChangefreq["MONTHLY"] = "monthly";
	    EnumChangefreq["ALWAYS"] = "always";
	    EnumChangefreq["HOURLY"] = "hourly";
	    EnumChangefreq["WEEKLY"] = "weekly";
	    EnumChangefreq["YEARLY"] = "yearly";
	    EnumChangefreq["NEVER"] = "never";
	})(EnumChangefreq = exports.EnumChangefreq || (exports.EnumChangefreq = {}));
	const allowDeny = /^(?:allow|deny)$/;
	exports.validators = {
	    'price:currency': /^[A-Z]{3}$/,
	    'price:type': /^(?:rent|purchase|RENT|PURCHASE)$/,
	    'price:resolution': /^(?:HD|hd|sd|SD)$/,
	    'platform:relationship': allowDeny,
	    'restriction:relationship': allowDeny,
	    restriction: /^([A-Z]{2}( +[A-Z]{2})*)?$/,
	    platform: /^((web|mobile|tv)( (web|mobile|tv))*)?$/,
	    language: /^zh-cn|zh-tw|([a-z]{2,3})$/,
	    genres: /^(PressRelease|Satire|Blog|OpEd|Opinion|UserGenerated)(, *(PressRelease|Satire|Blog|OpEd|Opinion|UserGenerated))*$/,
	    stock_tickers: /^(\w+:\w+(, *\w+:\w+){0,4})?$/,
	};
	function isPriceType(pt) {
	    return exports.validators['price:type'].test(pt);
	}
	exports.isPriceType = isPriceType;
	function isResolution(res) {
	    return exports.validators['price:resolution'].test(res);
	}
	exports.isResolution = isResolution;
	exports.CHANGEFREQ = Object.values(EnumChangefreq);
	function isValidChangeFreq(freq) {
	    return exports.CHANGEFREQ.includes(freq);
	}
	exports.isValidChangeFreq = isValidChangeFreq;
	(function (EnumYesNo) {
	    EnumYesNo["YES"] = "YES";
	    EnumYesNo["NO"] = "NO";
	    EnumYesNo["Yes"] = "Yes";
	    EnumYesNo["No"] = "No";
	    EnumYesNo["yes"] = "yes";
	    EnumYesNo["no"] = "no";
	})(exports.EnumYesNo || (exports.EnumYesNo = {}));
	function isValidYesNo(yn) {
	    return /^YES|NO|[Yy]es|[Nn]o$/.test(yn);
	}
	exports.isValidYesNo = isValidYesNo;
	(function (EnumAllowDeny) {
	    EnumAllowDeny["ALLOW"] = "allow";
	    EnumAllowDeny["DENY"] = "deny";
	})(exports.EnumAllowDeny || (exports.EnumAllowDeny = {}));
	function isAllowDeny(ad) {
	    return allowDeny.test(ad);
	}
	exports.isAllowDeny = isAllowDeny;
	(function (ErrorLevel) {
	    /**
	     * Validation will be skipped and nothing logged or thrown.
	     */
	    ErrorLevel["SILENT"] = "silent";
	    /**
	     * If an invalid value is encountered, a console.warn will be called with details
	     */
	    ErrorLevel["WARN"] = "warn";
	    /**
	     * An Error will be thrown on encountering invalid data.
	     */
	    ErrorLevel["THROW"] = "throw";
	})(exports.ErrorLevel || (exports.ErrorLevel = {}));
	(function (TagNames) {
	    TagNames["url"] = "url";
	    TagNames["loc"] = "loc";
	    TagNames["urlset"] = "urlset";
	    TagNames["lastmod"] = "lastmod";
	    TagNames["changefreq"] = "changefreq";
	    TagNames["priority"] = "priority";
	    TagNames["video:thumbnail_loc"] = "video:thumbnail_loc";
	    TagNames["video:video"] = "video:video";
	    TagNames["video:title"] = "video:title";
	    TagNames["video:description"] = "video:description";
	    TagNames["video:tag"] = "video:tag";
	    TagNames["video:duration"] = "video:duration";
	    TagNames["video:player_loc"] = "video:player_loc";
	    TagNames["video:content_loc"] = "video:content_loc";
	    TagNames["image:image"] = "image:image";
	    TagNames["image:loc"] = "image:loc";
	    TagNames["image:geo_location"] = "image:geo_location";
	    TagNames["image:license"] = "image:license";
	    TagNames["image:title"] = "image:title";
	    TagNames["image:caption"] = "image:caption";
	    TagNames["video:requires_subscription"] = "video:requires_subscription";
	    TagNames["video:publication_date"] = "video:publication_date";
	    TagNames["video:id"] = "video:id";
	    TagNames["video:restriction"] = "video:restriction";
	    TagNames["video:family_friendly"] = "video:family_friendly";
	    TagNames["video:view_count"] = "video:view_count";
	    TagNames["video:uploader"] = "video:uploader";
	    TagNames["video:expiration_date"] = "video:expiration_date";
	    TagNames["video:platform"] = "video:platform";
	    TagNames["video:price"] = "video:price";
	    TagNames["video:rating"] = "video:rating";
	    TagNames["video:category"] = "video:category";
	    TagNames["video:live"] = "video:live";
	    TagNames["video:gallery_loc"] = "video:gallery_loc";
	    TagNames["news:news"] = "news:news";
	    TagNames["news:publication"] = "news:publication";
	    TagNames["news:name"] = "news:name";
	    TagNames["news:access"] = "news:access";
	    TagNames["news:genres"] = "news:genres";
	    TagNames["news:publication_date"] = "news:publication_date";
	    TagNames["news:title"] = "news:title";
	    TagNames["news:keywords"] = "news:keywords";
	    TagNames["news:stock_tickers"] = "news:stock_tickers";
	    TagNames["news:language"] = "news:language";
	    TagNames["mobile:mobile"] = "mobile:mobile";
	    TagNames["xhtml:link"] = "xhtml:link";
	    TagNames["expires"] = "expires";
	})(exports.TagNames || (exports.TagNames = {}));
	(function (IndexTagNames) {
	    IndexTagNames["sitemap"] = "sitemap";
	    IndexTagNames["sitemapindex"] = "sitemapindex";
	    IndexTagNames["loc"] = "loc";
	    IndexTagNames["lastmod"] = "lastmod";
	})(exports.IndexTagNames || (exports.IndexTagNames = {}));
} (types));

var sitemapXml = {};

Object.defineProperty(sitemapXml, "__esModule", { value: true });
sitemapXml.element = sitemapXml.ctag = sitemapXml.otag = sitemapXml.text = void 0;
const invalidXMLUnicodeRegex = 
// eslint-disable-next-line no-control-regex
/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F-\u0084\u0086-\u009F\uD800-\uDFFF\uFDD0-\uFDDF\u{1FFFE}-\u{1FFFF}\u{2FFFE}-\u{2FFFF}\u{3FFFE}-\u{3FFFF}\u{4FFFE}-\u{4FFFF}\u{5FFFE}-\u{5FFFF}\u{6FFFE}-\u{6FFFF}\u{7FFFE}-\u{7FFFF}\u{8FFFE}-\u{8FFFF}\u{9FFFE}-\u{9FFFF}\u{AFFFE}-\u{AFFFF}\u{BFFFE}-\u{BFFFF}\u{CFFFE}-\u{CFFFF}\u{DFFFE}-\u{DFFFF}\u{EFFFE}-\u{EFFFF}\u{FFFFE}-\u{FFFFF}\u{10FFFE}-\u{10FFFF}]/gu;
const amp = /&/g;
const lt = /</g;
const apos = /'/g;
const quot = /"/g;
function text(txt) {
    return txt
        .replace(amp, '&amp;')
        .replace(lt, '&lt;')
        .replace(invalidXMLUnicodeRegex, '');
}
sitemapXml.text = text;
function otag(nodeName, attrs, selfClose = false) {
    let attrstr = '';
    for (const k in attrs) {
        const val = attrs[k]
            .replace(amp, '&amp;')
            .replace(lt, '&lt;')
            .replace(apos, '&apos;')
            .replace(quot, '&quot;')
            .replace(invalidXMLUnicodeRegex, '');
        attrstr += ` ${k}="${val}"`;
    }
    return `<${nodeName}${attrstr}${selfClose ? '/' : ''}>`;
}
sitemapXml.otag = otag;
function ctag(nodeName) {
    return `</${nodeName}>`;
}
sitemapXml.ctag = ctag;
function element(nodeName, attrs, innerText) {
    if (typeof attrs === 'string') {
        return otag(nodeName) + text(attrs) + ctag(nodeName);
    }
    else if (innerText) {
        return otag(nodeName, attrs) + text(innerText) + ctag(nodeName);
    }
    else {
        return otag(nodeName, attrs, true);
    }
}
sitemapXml.element = element;

Object.defineProperty(sitemapItemStream, "__esModule", { value: true });
sitemapItemStream.SitemapItemStream = void 0;
const stream_1$3 = require$$3$1;
const errors_1$2 = errors;
const types_1$3 = types;
const sitemap_xml_1 = sitemapXml;
function attrBuilder(conf, keys) {
    if (typeof keys === 'string') {
        keys = [keys];
    }
    const iv = {};
    return keys.reduce((attrs, key) => {
        // eslint-disable-next-line
        if (conf[key] !== undefined) {
            const keyAr = key.split(':');
            if (keyAr.length !== 2) {
                throw new errors_1$2.InvalidAttr(key);
            }
            attrs[keyAr[1]] = conf[key];
        }
        return attrs;
    }, iv);
}
/**
 * Takes a stream of SitemapItemOptions and spits out xml for each
 * @example
 * // writes <url><loc>https://example.com</loc><url><url><loc>https://example.com/2</loc><url>
 * const smis = new SitemapItemStream({level: 'warn'})
 * smis.pipe(writestream)
 * smis.write({url: 'https://example.com', img: [], video: [], links: []})
 * smis.write({url: 'https://example.com/2', img: [], video: [], links: []})
 * smis.end()
 * @param level - Error level
 */
class SitemapItemStream extends stream_1$3.Transform {
    constructor(opts = { level: types_1$3.ErrorLevel.WARN }) {
        opts.objectMode = true;
        super(opts);
        this.level = opts.level || types_1$3.ErrorLevel.WARN;
    }
    _transform(item, encoding, callback) {
        this.push((0, sitemap_xml_1.otag)(types_1$3.TagNames.url));
        this.push((0, sitemap_xml_1.element)(types_1$3.TagNames.loc, item.url));
        if (item.lastmod) {
            this.push((0, sitemap_xml_1.element)(types_1$3.TagNames.lastmod, item.lastmod));
        }
        if (item.changefreq) {
            this.push((0, sitemap_xml_1.element)(types_1$3.TagNames.changefreq, item.changefreq));
        }
        if (item.priority !== undefined && item.priority !== null) {
            if (item.fullPrecisionPriority) {
                this.push((0, sitemap_xml_1.element)(types_1$3.TagNames.priority, item.priority.toString()));
            }
            else {
                this.push((0, sitemap_xml_1.element)(types_1$3.TagNames.priority, item.priority.toFixed(1)));
            }
        }
        item.video.forEach((video) => {
            this.push((0, sitemap_xml_1.otag)(types_1$3.TagNames['video:video']));
            this.push((0, sitemap_xml_1.element)(types_1$3.TagNames['video:thumbnail_loc'], video.thumbnail_loc));
            this.push((0, sitemap_xml_1.element)(types_1$3.TagNames['video:title'], video.title));
            this.push((0, sitemap_xml_1.element)(types_1$3.TagNames['video:description'], video.description));
            if (video.content_loc) {
                this.push((0, sitemap_xml_1.element)(types_1$3.TagNames['video:content_loc'], video.content_loc));
            }
            if (video.player_loc) {
                this.push((0, sitemap_xml_1.element)(types_1$3.TagNames['video:player_loc'], attrBuilder(video, [
                    'player_loc:autoplay',
                    'player_loc:allow_embed',
                ]), video.player_loc));
            }
            if (video.duration) {
                this.push((0, sitemap_xml_1.element)(types_1$3.TagNames['video:duration'], video.duration.toString()));
            }
            if (video.expiration_date) {
                this.push((0, sitemap_xml_1.element)(types_1$3.TagNames['video:expiration_date'], video.expiration_date));
            }
            if (video.rating !== undefined) {
                this.push((0, sitemap_xml_1.element)(types_1$3.TagNames['video:rating'], video.rating.toString()));
            }
            if (video.view_count !== undefined) {
                this.push((0, sitemap_xml_1.element)(types_1$3.TagNames['video:view_count'], video.view_count.toString()));
            }
            if (video.publication_date) {
                this.push((0, sitemap_xml_1.element)(types_1$3.TagNames['video:publication_date'], video.publication_date));
            }
            for (const tag of video.tag) {
                this.push((0, sitemap_xml_1.element)(types_1$3.TagNames['video:tag'], tag));
            }
            if (video.category) {
                this.push((0, sitemap_xml_1.element)(types_1$3.TagNames['video:category'], video.category));
            }
            if (video.family_friendly) {
                this.push((0, sitemap_xml_1.element)(types_1$3.TagNames['video:family_friendly'], video.family_friendly));
            }
            if (video.restriction) {
                this.push((0, sitemap_xml_1.element)(types_1$3.TagNames['video:restriction'], attrBuilder(video, 'restriction:relationship'), video.restriction));
            }
            if (video.gallery_loc) {
                this.push((0, sitemap_xml_1.element)(types_1$3.TagNames['video:gallery_loc'], { title: video['gallery_loc:title'] }, video.gallery_loc));
            }
            if (video.price) {
                this.push((0, sitemap_xml_1.element)(types_1$3.TagNames['video:price'], attrBuilder(video, [
                    'price:resolution',
                    'price:currency',
                    'price:type',
                ]), video.price));
            }
            if (video.requires_subscription) {
                this.push((0, sitemap_xml_1.element)(types_1$3.TagNames['video:requires_subscription'], video.requires_subscription));
            }
            if (video.uploader) {
                this.push((0, sitemap_xml_1.element)(types_1$3.TagNames['video:uploader'], attrBuilder(video, 'uploader:info'), video.uploader));
            }
            if (video.platform) {
                this.push((0, sitemap_xml_1.element)(types_1$3.TagNames['video:platform'], attrBuilder(video, 'platform:relationship'), video.platform));
            }
            if (video.live) {
                this.push((0, sitemap_xml_1.element)(types_1$3.TagNames['video:live'], video.live));
            }
            if (video.id) {
                this.push((0, sitemap_xml_1.element)(types_1$3.TagNames['video:id'], { type: 'url' }, video.id));
            }
            this.push((0, sitemap_xml_1.ctag)(types_1$3.TagNames['video:video']));
        });
        item.links.forEach((link) => {
            this.push((0, sitemap_xml_1.element)(types_1$3.TagNames['xhtml:link'], {
                rel: 'alternate',
                hreflang: link.lang || link.hreflang,
                href: link.url,
            }));
        });
        if (item.expires) {
            this.push((0, sitemap_xml_1.element)(types_1$3.TagNames.expires, new Date(item.expires).toISOString()));
        }
        if (item.androidLink) {
            this.push((0, sitemap_xml_1.element)(types_1$3.TagNames['xhtml:link'], {
                rel: 'alternate',
                href: item.androidLink,
            }));
        }
        if (item.ampLink) {
            this.push((0, sitemap_xml_1.element)(types_1$3.TagNames['xhtml:link'], {
                rel: 'amphtml',
                href: item.ampLink,
            }));
        }
        if (item.news) {
            this.push((0, sitemap_xml_1.otag)(types_1$3.TagNames['news:news']));
            this.push((0, sitemap_xml_1.otag)(types_1$3.TagNames['news:publication']));
            this.push((0, sitemap_xml_1.element)(types_1$3.TagNames['news:name'], item.news.publication.name));
            this.push((0, sitemap_xml_1.element)(types_1$3.TagNames['news:language'], item.news.publication.language));
            this.push((0, sitemap_xml_1.ctag)(types_1$3.TagNames['news:publication']));
            if (item.news.access) {
                this.push((0, sitemap_xml_1.element)(types_1$3.TagNames['news:access'], item.news.access));
            }
            if (item.news.genres) {
                this.push((0, sitemap_xml_1.element)(types_1$3.TagNames['news:genres'], item.news.genres));
            }
            this.push((0, sitemap_xml_1.element)(types_1$3.TagNames['news:publication_date'], item.news.publication_date));
            this.push((0, sitemap_xml_1.element)(types_1$3.TagNames['news:title'], item.news.title));
            if (item.news.keywords) {
                this.push((0, sitemap_xml_1.element)(types_1$3.TagNames['news:keywords'], item.news.keywords));
            }
            if (item.news.stock_tickers) {
                this.push((0, sitemap_xml_1.element)(types_1$3.TagNames['news:stock_tickers'], item.news.stock_tickers));
            }
            this.push((0, sitemap_xml_1.ctag)(types_1$3.TagNames['news:news']));
        }
        // Image handling
        item.img.forEach((image) => {
            this.push((0, sitemap_xml_1.otag)(types_1$3.TagNames['image:image']));
            this.push((0, sitemap_xml_1.element)(types_1$3.TagNames['image:loc'], image.url));
            if (image.caption) {
                this.push((0, sitemap_xml_1.element)(types_1$3.TagNames['image:caption'], image.caption));
            }
            if (image.geoLocation) {
                this.push((0, sitemap_xml_1.element)(types_1$3.TagNames['image:geo_location'], image.geoLocation));
            }
            if (image.title) {
                this.push((0, sitemap_xml_1.element)(types_1$3.TagNames['image:title'], image.title));
            }
            if (image.license) {
                this.push((0, sitemap_xml_1.element)(types_1$3.TagNames['image:license'], image.license));
            }
            this.push((0, sitemap_xml_1.ctag)(types_1$3.TagNames['image:image']));
        });
        this.push((0, sitemap_xml_1.ctag)(types_1$3.TagNames.url));
        callback();
    }
}
sitemapItemStream.SitemapItemStream = SitemapItemStream;

var sitemapIndexStream = {};

var sitemapStream = {};

var utils = {};

const require$$2$1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(fs);

const require$$2 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(readline);

const require$$6 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(url);

Object.defineProperty(utils, "__esModule", { value: true });
utils.normalizeURL = utils.chunk = utils.lineSeparatedURLsToSitemapOptions = utils.ReadlineStream = utils.mergeStreams = utils.validateSMIOptions = void 0;
/*!
 * Sitemap
 * Copyright(c) 2011 Eugene Kalinin
 * MIT Licensed
 */
const fs_1 = require$$2$1;
const stream_1$2 = require$$3$1;
const readline_1 = require$$2;
const url_1 = require$$6;
const types_1$2 = types;
const errors_1$1 = errors;
const types_2 = types;
function validate(subject, name, url, level) {
    Object.keys(subject).forEach((key) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const val = subject[key];
        if (types_2.validators[key] && !types_2.validators[key].test(val)) {
            if (level === types_1$2.ErrorLevel.THROW) {
                throw new errors_1$1.InvalidAttrValue(key, val, types_2.validators[key]);
            }
            else {
                console.warn(`${url}: ${name} key ${key} has invalid value: ${val}`);
            }
        }
    });
}
function handleError(error, level) {
    if (level === types_1$2.ErrorLevel.THROW) {
        throw error;
    }
    else if (level === types_1$2.ErrorLevel.WARN) {
        console.warn(error.name, error.message);
    }
}
/**
 * Verifies all data passed in will comply with sitemap spec.
 * @param conf Options to validate
 * @param level logging level
 * @param errorHandler error handling func
 */
function validateSMIOptions(conf, level = types_1$2.ErrorLevel.WARN, errorHandler = handleError) {
    if (!conf) {
        throw new errors_1$1.NoConfigError();
    }
    if (level === types_1$2.ErrorLevel.SILENT) {
        return conf;
    }
    const { url, changefreq, priority, news, video } = conf;
    if (!url) {
        errorHandler(new errors_1$1.NoURLError(), level);
    }
    if (changefreq) {
        if (!(0, types_1$2.isValidChangeFreq)(changefreq)) {
            errorHandler(new errors_1$1.ChangeFreqInvalidError(url, changefreq), level);
        }
    }
    if (priority) {
        if (!(priority >= 0.0 && priority <= 1.0)) {
            errorHandler(new errors_1$1.PriorityInvalidError(url, priority), level);
        }
    }
    if (news) {
        if (news.access &&
            news.access !== 'Registration' &&
            news.access !== 'Subscription') {
            errorHandler(new errors_1$1.InvalidNewsAccessValue(url, news.access), level);
        }
        if (!news.publication ||
            !news.publication.name ||
            !news.publication.language ||
            !news.publication_date ||
            !news.title) {
            errorHandler(new errors_1$1.InvalidNewsFormat(url), level);
        }
        validate(news, 'news', url, level);
        validate(news.publication, 'publication', url, level);
    }
    if (video) {
        video.forEach((vid) => {
            var _a;
            if (vid.duration !== undefined) {
                if (vid.duration < 0 || vid.duration > 28800) {
                    errorHandler(new errors_1$1.InvalidVideoDuration(url, vid.duration), level);
                }
            }
            if (vid.rating !== undefined && (vid.rating < 0 || vid.rating > 5)) {
                errorHandler(new errors_1$1.InvalidVideoRating(url, vid.title, vid.rating), level);
            }
            if (typeof vid !== 'object' ||
                !vid.thumbnail_loc ||
                !vid.title ||
                !vid.description) {
                // has to be an object and include required categories https://support.google.com/webmasters/answer/80471?hl=en&ref_topic=4581190
                errorHandler(new errors_1$1.InvalidVideoFormat(url), level);
            }
            if (vid.title.length > 100) {
                errorHandler(new errors_1$1.InvalidVideoTitle(url, vid.title.length), level);
            }
            if (vid.description.length > 2048) {
                errorHandler(new errors_1$1.InvalidVideoDescription(url, vid.description.length), level);
            }
            if (vid.view_count !== undefined && vid.view_count < 0) {
                errorHandler(new errors_1$1.InvalidVideoViewCount(url, vid.view_count), level);
            }
            if (vid.tag.length > 32) {
                errorHandler(new errors_1$1.InvalidVideoTagCount(url, vid.tag.length), level);
            }
            if (vid.category !== undefined && ((_a = vid.category) === null || _a === void 0 ? void 0 : _a.length) > 256) {
                errorHandler(new errors_1$1.InvalidVideoCategory(url, vid.category.length), level);
            }
            if (vid.family_friendly !== undefined &&
                !(0, types_1$2.isValidYesNo)(vid.family_friendly)) {
                errorHandler(new errors_1$1.InvalidVideoFamilyFriendly(url, vid.family_friendly), level);
            }
            if (vid.restriction) {
                if (!types_2.validators.restriction.test(vid.restriction)) {
                    errorHandler(new errors_1$1.InvalidVideoRestriction(url, vid.restriction), level);
                }
                if (!vid['restriction:relationship'] ||
                    !(0, types_1$2.isAllowDeny)(vid['restriction:relationship'])) {
                    errorHandler(new errors_1$1.InvalidVideoRestrictionRelationship(url, vid['restriction:relationship']), level);
                }
            }
            // TODO price element should be unbounded
            if ((vid.price === '' && vid['price:type'] === undefined) ||
                (vid['price:type'] !== undefined && !(0, types_1$2.isPriceType)(vid['price:type']))) {
                errorHandler(new errors_1$1.InvalidVideoPriceType(url, vid['price:type'], vid.price), level);
            }
            if (vid['price:resolution'] !== undefined &&
                !(0, types_1$2.isResolution)(vid['price:resolution'])) {
                errorHandler(new errors_1$1.InvalidVideoResolution(url, vid['price:resolution']), level);
            }
            if (vid['price:currency'] !== undefined &&
                !types_2.validators['price:currency'].test(vid['price:currency'])) {
                errorHandler(new errors_1$1.InvalidVideoPriceCurrency(url, vid['price:currency']), level);
            }
            validate(vid, 'video', url, level);
        });
    }
    return conf;
}
utils.validateSMIOptions = validateSMIOptions;
/**
 * Combines multiple streams into one
 * @param streams the streams to combine
 */
function mergeStreams(streams, options) {
    let pass = new stream_1$2.PassThrough(options);
    let waiting = streams.length;
    for (const stream of streams) {
        pass = stream.pipe(pass, { end: false });
        stream.once('end', () => --waiting === 0 && pass.emit('end'));
    }
    return pass;
}
utils.mergeStreams = mergeStreams;
/**
 * Wraps node's ReadLine in a stream
 */
class ReadlineStream extends stream_1$2.Readable {
    constructor(options) {
        if (options.autoDestroy === undefined) {
            options.autoDestroy = true;
        }
        options.objectMode = true;
        super(options);
        this._source = (0, readline_1.createInterface)({
            input: options.input,
            terminal: false,
            crlfDelay: Infinity,
        });
        // Every time there's data, push it into the internal buffer.
        this._source.on('line', (chunk) => {
            // If push() returns false, then stop reading from source.
            if (!this.push(chunk))
                this._source.pause();
        });
        // When the source ends, push the EOF-signaling `null` chunk.
        this._source.on('close', () => {
            this.push(null);
        });
    }
    // _read() will be called when the stream wants to pull more data in.
    // The advisory size argument is ignored in this case.
    _read(size) {
        this._source.resume();
    }
}
utils.ReadlineStream = ReadlineStream;
/**
 * Takes a stream likely from fs.createReadStream('./path') and returns a stream
 * of sitemap items
 * @param stream a stream of line separated urls.
 * @param opts.isJSON is the stream line separated JSON. leave undefined to guess
 */
function lineSeparatedURLsToSitemapOptions(stream, { isJSON } = {}) {
    return new ReadlineStream({ input: stream }).pipe(new stream_1$2.Transform({
        objectMode: true,
        // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
        transform: (line, encoding, cb) => {
            if (isJSON || (isJSON === undefined && line[0] === '{')) {
                cb(null, JSON.parse(line));
            }
            else {
                cb(null, line);
            }
        },
    }));
}
utils.lineSeparatedURLsToSitemapOptions = lineSeparatedURLsToSitemapOptions;
/**
 * Based on lodash's implementation of chunk.
 *
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 *
 * Based on Underscore.js, copyright Jeremy Ashkenas,
 * DocumentCloud and Investigative Reporters & Editors <http://underscorejs.org/>
 *
 * This software consists of voluntary contributions made by many
 * individuals. For exact contribution history, see the revision history
 * available at https://github.com/lodash/lodash
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
function chunk(array, size = 1) {
    size = Math.max(Math.trunc(size), 0);
    const length = array ? array.length : 0;
    if (!length || size < 1) {
        return [];
    }
    const result = Array(Math.ceil(length / size));
    let index = 0, resIndex = 0;
    while (index < length) {
        result[resIndex++] = array.slice(index, (index += size));
    }
    return result;
}
utils.chunk = chunk;
function boolToYESNO(bool) {
    if (bool === undefined) {
        return bool;
    }
    if (typeof bool === 'boolean') {
        return bool ? types_1$2.EnumYesNo.yes : types_1$2.EnumYesNo.no;
    }
    return bool;
}
/**
 * Converts the passed in sitemap entry into one capable of being consumed by SitemapItem
 * @param {string | SitemapItemLoose} elem the string or object to be converted
 * @param {string} hostname
 * @returns SitemapItemOptions a strict sitemap item option
 */
function normalizeURL(elem, hostname, lastmodDateOnly = false) {
    // SitemapItem
    // create object with url property
    let smi = {
        img: [],
        video: [],
        links: [],
        url: '',
    };
    let smiLoose;
    if (typeof elem === 'string') {
        smi.url = elem;
        smiLoose = { url: elem };
    }
    else {
        smiLoose = elem;
    }
    smi.url = new url_1.URL(smiLoose.url, hostname).toString();
    let img = [];
    if (smiLoose.img) {
        if (typeof smiLoose.img === 'string') {
            // string -> array of objects
            smiLoose.img = [{ url: smiLoose.img }];
        }
        else if (!Array.isArray(smiLoose.img)) {
            // object -> array of objects
            smiLoose.img = [smiLoose.img];
        }
        img = smiLoose.img.map((el) => (typeof el === 'string' ? { url: el } : el));
    }
    // prepend hostname to all image urls
    smi.img = img.map((el) => ({
        ...el,
        url: new url_1.URL(el.url, hostname).toString(),
    }));
    let links = [];
    if (smiLoose.links) {
        links = smiLoose.links;
    }
    smi.links = links.map((link) => {
        return { ...link, url: new url_1.URL(link.url, hostname).toString() };
    });
    if (smiLoose.video) {
        if (!Array.isArray(smiLoose.video)) {
            // make it an array
            smiLoose.video = [smiLoose.video];
        }
        smi.video = smiLoose.video.map((video) => {
            const nv = {
                ...video,
                family_friendly: boolToYESNO(video.family_friendly),
                live: boolToYESNO(video.live),
                requires_subscription: boolToYESNO(video.requires_subscription),
                tag: [],
                rating: undefined,
            };
            if (video.tag !== undefined) {
                nv.tag = !Array.isArray(video.tag) ? [video.tag] : video.tag;
            }
            if (video.rating !== undefined) {
                if (typeof video.rating === 'string') {
                    nv.rating = parseFloat(video.rating);
                }
                else {
                    nv.rating = video.rating;
                }
            }
            if (typeof video.view_count === 'string') {
                nv.view_count = parseInt(video.view_count, 10);
            }
            else if (typeof video.view_count === 'number') {
                nv.view_count = video.view_count;
            }
            return nv;
        });
    }
    // If given a file to use for last modified date
    if (smiLoose.lastmodfile) {
        const { mtime } = (0, fs_1.statSync)(smiLoose.lastmodfile);
        smi.lastmod = new Date(mtime).toISOString();
        // The date of last modification (YYYY-MM-DD)
    }
    else if (smiLoose.lastmodISO) {
        smi.lastmod = new Date(smiLoose.lastmodISO).toISOString();
    }
    else if (smiLoose.lastmod) {
        smi.lastmod = new Date(smiLoose.lastmod).toISOString();
    }
    if (lastmodDateOnly && smi.lastmod) {
        smi.lastmod = smi.lastmod.slice(0, 10);
    }
    delete smiLoose.lastmodfile;
    delete smiLoose.lastmodISO;
    smi = { ...smiLoose, ...smi };
    return smi;
}
utils.normalizeURL = normalizeURL;

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.streamToPromise = exports.SitemapStream = exports.closetag = exports.stylesheetInclude = void 0;
	const stream_1 = require$$3$1;
	const types_1 = types;
	const utils_1 = utils;
	const sitemap_item_stream_1 = sitemapItemStream;
	const errors_1 = errors;
	const xmlDec = '<?xml version="1.0" encoding="UTF-8"?>';
	const stylesheetInclude = (url) => {
	    return `<?xml-stylesheet type="text/xsl" href="${url}"?>`;
	};
	exports.stylesheetInclude = stylesheetInclude;
	const urlsetTagStart = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"';
	const getURLSetNs = ({ news, video, image, xhtml, custom }, xslURL) => {
	    let ns = xmlDec;
	    if (xslURL) {
	        ns += (0, exports.stylesheetInclude)(xslURL);
	    }
	    ns += urlsetTagStart;
	    if (news) {
	        ns += ' xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"';
	    }
	    if (xhtml) {
	        ns += ' xmlns:xhtml="http://www.w3.org/1999/xhtml"';
	    }
	    if (image) {
	        ns += ' xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"';
	    }
	    if (video) {
	        ns += ' xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"';
	    }
	    if (custom) {
	        ns += ' ' + custom.join(' ');
	    }
	    return ns + '>';
	};
	exports.closetag = '</urlset>';
	const defaultXMLNS = {
	    news: true,
	    xhtml: true,
	    image: true,
	    video: true,
	};
	const defaultStreamOpts = {
	    xmlns: defaultXMLNS,
	};
	/**
	 * A [Transform](https://nodejs.org/api/stream.html#stream_implementing_a_transform_stream)
	 * for turning a
	 * [Readable stream](https://nodejs.org/api/stream.html#stream_readable_streams)
	 * of either [SitemapItemOptions](#sitemap-item-options) or url strings into a
	 * Sitemap. The readable stream it transforms **must** be in object mode.
	 */
	class SitemapStream extends stream_1.Transform {
	    constructor(opts = defaultStreamOpts) {
	        opts.objectMode = true;
	        super(opts);
	        this.hasHeadOutput = false;
	        this.hostname = opts.hostname;
	        this.level = opts.level || types_1.ErrorLevel.WARN;
	        this.errorHandler = opts.errorHandler;
	        this.smiStream = new sitemap_item_stream_1.SitemapItemStream({ level: opts.level });
	        this.smiStream.on('data', (data) => this.push(data));
	        this.lastmodDateOnly = opts.lastmodDateOnly || false;
	        this.xmlNS = opts.xmlns || defaultXMLNS;
	        this.xslUrl = opts.xslUrl;
	    }
	    _transform(item, encoding, callback) {
	        if (!this.hasHeadOutput) {
	            this.hasHeadOutput = true;
	            this.push(getURLSetNs(this.xmlNS, this.xslUrl));
	        }
	        this.smiStream.write((0, utils_1.validateSMIOptions)((0, utils_1.normalizeURL)(item, this.hostname, this.lastmodDateOnly), this.level, this.errorHandler));
	        callback();
	    }
	    _flush(cb) {
	        if (!this.hasHeadOutput) {
	            cb(new errors_1.EmptySitemap());
	        }
	        else {
	            this.push(exports.closetag);
	            cb();
	        }
	    }
	}
	exports.SitemapStream = SitemapStream;
	/**
	 * Takes a stream returns a promise that resolves when stream emits finish
	 * @param stream what you want wrapped in a promise
	 */
	function streamToPromise(stream) {
	    return new Promise((resolve, reject) => {
	        const drain = [];
	        stream
	            .pipe(new stream_1.Writable({
	            write(chunk, enc, next) {
	                drain.push(chunk);
	                next();
	            },
	        }))
	            .on('error', reject)
	            .on('finish', () => {
	            if (!drain.length) {
	                reject(new errors_1.EmptyStream());
	            }
	            else {
	                resolve(Buffer.concat(drain));
	            }
	        });
	    });
	}
	exports.streamToPromise = streamToPromise;
} (sitemapStream));

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.SitemapAndIndexStream = exports.SitemapIndexStream = exports.IndexTagNames = void 0;
	const stream_1 = require$$3$1;
	const types_1 = types;
	const sitemap_stream_1 = sitemapStream;
	const sitemap_xml_1 = sitemapXml;
	var IndexTagNames;
	(function (IndexTagNames) {
	    IndexTagNames["sitemap"] = "sitemap";
	    IndexTagNames["loc"] = "loc";
	    IndexTagNames["lastmod"] = "lastmod";
	})(IndexTagNames = exports.IndexTagNames || (exports.IndexTagNames = {}));
	const xmlDec = '<?xml version="1.0" encoding="UTF-8"?>';
	const sitemapIndexTagStart = '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
	const closetag = '</sitemapindex>';
	const defaultStreamOpts = {};
	class SitemapIndexStream extends stream_1.Transform {
	    constructor(opts = defaultStreamOpts) {
	        var _a;
	        opts.objectMode = true;
	        super(opts);
	        this.hasHeadOutput = false;
	        this.lastmodDateOnly = opts.lastmodDateOnly || false;
	        this.level = (_a = opts.level) !== null && _a !== void 0 ? _a : types_1.ErrorLevel.WARN;
	        this.xslUrl = opts.xslUrl;
	    }
	    _transform(item, encoding, callback) {
	        if (!this.hasHeadOutput) {
	            this.hasHeadOutput = true;
	            let stylesheet = '';
	            if (this.xslUrl) {
	                stylesheet = (0, sitemap_stream_1.stylesheetInclude)(this.xslUrl);
	            }
	            this.push(xmlDec + stylesheet + sitemapIndexTagStart);
	        }
	        this.push((0, sitemap_xml_1.otag)(IndexTagNames.sitemap));
	        if (typeof item === 'string') {
	            this.push((0, sitemap_xml_1.element)(IndexTagNames.loc, item));
	        }
	        else {
	            this.push((0, sitemap_xml_1.element)(IndexTagNames.loc, item.url));
	            if (item.lastmod) {
	                const lastmod = new Date(item.lastmod).toISOString();
	                this.push((0, sitemap_xml_1.element)(IndexTagNames.lastmod, this.lastmodDateOnly ? lastmod.slice(0, 10) : lastmod));
	            }
	        }
	        this.push((0, sitemap_xml_1.ctag)(IndexTagNames.sitemap));
	        callback();
	    }
	    _flush(cb) {
	        this.push(closetag);
	        cb();
	    }
	}
	exports.SitemapIndexStream = SitemapIndexStream;
	// const defaultSIStreamOpts: SitemapAndIndexStreamOptions = {};
	class SitemapAndIndexStream extends SitemapIndexStream {
	    constructor(opts) {
	        var _a;
	        opts.objectMode = true;
	        super(opts);
	        this.i = 0;
	        this.getSitemapStream = opts.getSitemapStream;
	        [this.idxItem, this.currentSitemap, this.currentSitemapPipeline] =
	            this.getSitemapStream(0);
	        this.limit = (_a = opts.limit) !== null && _a !== void 0 ? _a : 45000;
	    }
	    _writeSMI(item) {
	        this.currentSitemap.write(item);
	        this.i++;
	    }
	    _transform(item, encoding, callback) {
	        var _a;
	        if (this.i === 0) {
	            this._writeSMI(item);
	            super._transform(this.idxItem, encoding, callback);
	        }
	        else if (this.i % this.limit === 0) {
	            const onFinish = () => {
	                const [idxItem, currentSitemap, currentSitemapPipeline] = this.getSitemapStream(this.i / this.limit);
	                this.currentSitemap = currentSitemap;
	                this.currentSitemapPipeline = currentSitemapPipeline;
	                this._writeSMI(item);
	                // push to index stream
	                super._transform(idxItem, encoding, callback);
	            };
	            (_a = this.currentSitemapPipeline) === null || _a === void 0 ? void 0 : _a.on('finish', onFinish);
	            this.currentSitemap.end(!this.currentSitemapPipeline ? onFinish : undefined);
	        }
	        else {
	            this._writeSMI(item);
	            callback();
	        }
	    }
	    _flush(cb) {
	        var _a;
	        const onFinish = () => super._flush(cb);
	        (_a = this.currentSitemapPipeline) === null || _a === void 0 ? void 0 : _a.on('finish', onFinish);
	        this.currentSitemap.end(!this.currentSitemapPipeline ? onFinish : undefined);
	    }
	}
	exports.SitemapAndIndexStream = SitemapAndIndexStream;
} (sitemapIndexStream));

var xmllint = {};

const require$$3 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(path);

const require$$1$1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(child_process);

Object.defineProperty(xmllint, "__esModule", { value: true });
xmllint.xmlLint = void 0;
const path_1 = require$$3;
const child_process_1 = require$$1$1;
const errors_1 = errors;
/**
 * Verify the passed in xml is valid. Requires xmllib be installed
 * @param xml what you want validated
 * @return {Promise<void>} resolves on valid rejects [error stderr]
 */
function xmlLint(xml) {
    const args = [
        '--schema',
        (0, path_1.resolve)(__dirname, '..', '..', 'schema', 'all.xsd'),
        '--noout',
        '-',
    ];
    if (typeof xml === 'string') {
        args[args.length - 1] = xml;
    }
    return new Promise((resolve, reject) => {
        (0, child_process_1.execFile)('which', ['xmllint'], (error, stdout, stderr) => {
            if (error) {
                reject([new errors_1.XMLLintUnavailable()]);
                return;
            }
            const xmllint = (0, child_process_1.execFile)('xmllint', args, (error, stdout, stderr) => {
                if (error) {
                    reject([error, stderr]);
                }
                resolve();
            });
            if (xmllint.stdout) {
                xmllint.stdout.unpipe();
                if (typeof xml !== 'string' && xml && xmllint.stdin) {
                    xml.pipe(xmllint.stdin);
                }
            }
        });
    });
}
xmllint.xmlLint = xmlLint;

var sitemapParser = {};

const require$$0 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(sax);

var __importDefault$1 = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(sitemapParser, "__esModule", { value: true });
sitemapParser.ObjectStreamToJSON = sitemapParser.parseSitemap = sitemapParser.XMLToSitemapItemStream = void 0;
const sax_1$1 = __importDefault$1(require$$0);
const stream_1$1 = require$$3$1;
const types_1$1 = types;
function isValidTagName$1(tagName) {
    // This only works because the enum name and value are the same
    return tagName in types_1$1.TagNames;
}
function tagTemplate$1() {
    return {
        img: [],
        video: [],
        links: [],
        url: '',
    };
}
function videoTemplate() {
    return {
        tag: [],
        thumbnail_loc: '',
        title: '',
        description: '',
    };
}
const imageTemplate = {
    url: '',
};
const linkTemplate = {
    lang: '',
    url: '',
};
function newsTemplate() {
    return {
        publication: { name: '', language: '' },
        publication_date: '',
        title: '',
    };
}
const defaultLogger$1 = (level, ...message) => console[level](...message);
const defaultStreamOpts$1 = {
    logger: defaultLogger$1,
};
// TODO does this need to end with `options`
/**
 * Takes a stream of xml and transforms it into a stream of SitemapItems
 * Use this to parse existing sitemaps into config options compatible with this library
 */
class XMLToSitemapItemStream extends stream_1$1.Transform {
    constructor(opts = defaultStreamOpts$1) {
        var _a;
        opts.objectMode = true;
        super(opts);
        this.error = null;
        this.saxStream = sax_1$1.default.createStream(true, {
            xmlns: true,
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            strictEntities: true,
            trim: true,
        });
        this.level = opts.level || types_1$1.ErrorLevel.WARN;
        if (this.level !== types_1$1.ErrorLevel.SILENT && opts.logger !== false) {
            this.logger = (_a = opts.logger) !== null && _a !== void 0 ? _a : defaultLogger$1;
        }
        else {
            this.logger = () => undefined;
        }
        let currentItem = tagTemplate$1();
        let currentTag;
        let currentVideo = videoTemplate();
        let currentImage = { ...imageTemplate };
        let currentLink = { ...linkTemplate };
        let dontpushCurrentLink = false;
        this.saxStream.on('opentagstart', (tag) => {
            currentTag = tag.name;
            if (currentTag.startsWith('news:') && !currentItem.news) {
                currentItem.news = newsTemplate();
            }
        });
        this.saxStream.on('opentag', (tag) => {
            if (isValidTagName$1(tag.name)) {
                if (tag.name === 'xhtml:link') {
                    if (typeof tag.attributes.rel === 'string' ||
                        typeof tag.attributes.href === 'string') {
                        return;
                    }
                    if (tag.attributes.rel.value === 'alternate' &&
                        tag.attributes.hreflang) {
                        currentLink.url = tag.attributes.href.value;
                        if (typeof tag.attributes.hreflang === 'string')
                            return;
                        currentLink.lang = tag.attributes.hreflang.value;
                    }
                    else if (tag.attributes.rel.value === 'alternate') {
                        dontpushCurrentLink = true;
                        currentItem.androidLink = tag.attributes.href.value;
                    }
                    else if (tag.attributes.rel.value === 'amphtml') {
                        dontpushCurrentLink = true;
                        currentItem.ampLink = tag.attributes.href.value;
                    }
                    else {
                        this.logger('log', 'unhandled attr for xhtml:link', tag.attributes);
                        this.err(`unhandled attr for xhtml:link ${tag.attributes}`);
                    }
                }
            }
            else {
                this.logger('warn', 'unhandled tag', tag.name);
                this.err(`unhandled tag: ${tag.name}`);
            }
        });
        this.saxStream.on('text', (text) => {
            switch (currentTag) {
                case 'mobile:mobile':
                    break;
                case types_1$1.TagNames.loc:
                    currentItem.url = text;
                    break;
                case types_1$1.TagNames.changefreq:
                    if ((0, types_1$1.isValidChangeFreq)(text)) {
                        currentItem.changefreq = text;
                    }
                    break;
                case types_1$1.TagNames.priority:
                    currentItem.priority = parseFloat(text);
                    break;
                case types_1$1.TagNames.lastmod:
                    currentItem.lastmod = text;
                    break;
                case types_1$1.TagNames['video:thumbnail_loc']:
                    currentVideo.thumbnail_loc = text;
                    break;
                case types_1$1.TagNames['video:tag']:
                    currentVideo.tag.push(text);
                    break;
                case types_1$1.TagNames['video:duration']:
                    currentVideo.duration = parseInt(text, 10);
                    break;
                case types_1$1.TagNames['video:player_loc']:
                    currentVideo.player_loc = text;
                    break;
                case types_1$1.TagNames['video:content_loc']:
                    currentVideo.content_loc = text;
                    break;
                case types_1$1.TagNames['video:requires_subscription']:
                    if ((0, types_1$1.isValidYesNo)(text)) {
                        currentVideo.requires_subscription = text;
                    }
                    break;
                case types_1$1.TagNames['video:publication_date']:
                    currentVideo.publication_date = text;
                    break;
                case types_1$1.TagNames['video:id']:
                    currentVideo.id = text;
                    break;
                case types_1$1.TagNames['video:restriction']:
                    currentVideo.restriction = text;
                    break;
                case types_1$1.TagNames['video:view_count']:
                    currentVideo.view_count = parseInt(text, 10);
                    break;
                case types_1$1.TagNames['video:uploader']:
                    currentVideo.uploader = text;
                    break;
                case types_1$1.TagNames['video:family_friendly']:
                    if ((0, types_1$1.isValidYesNo)(text)) {
                        currentVideo.family_friendly = text;
                    }
                    break;
                case types_1$1.TagNames['video:expiration_date']:
                    currentVideo.expiration_date = text;
                    break;
                case types_1$1.TagNames['video:platform']:
                    currentVideo.platform = text;
                    break;
                case types_1$1.TagNames['video:price']:
                    currentVideo.price = text;
                    break;
                case types_1$1.TagNames['video:rating']:
                    currentVideo.rating = parseFloat(text);
                    break;
                case types_1$1.TagNames['video:category']:
                    currentVideo.category = text;
                    break;
                case types_1$1.TagNames['video:live']:
                    if ((0, types_1$1.isValidYesNo)(text)) {
                        currentVideo.live = text;
                    }
                    break;
                case types_1$1.TagNames['video:gallery_loc']:
                    currentVideo.gallery_loc = text;
                    break;
                case types_1$1.TagNames['image:loc']:
                    currentImage.url = text;
                    break;
                case types_1$1.TagNames['image:geo_location']:
                    currentImage.geoLocation = text;
                    break;
                case types_1$1.TagNames['image:license']:
                    currentImage.license = text;
                    break;
                case types_1$1.TagNames['news:access']:
                    if (!currentItem.news) {
                        currentItem.news = newsTemplate();
                    }
                    currentItem.news.access = text;
                    break;
                case types_1$1.TagNames['news:genres']:
                    if (!currentItem.news) {
                        currentItem.news = newsTemplate();
                    }
                    currentItem.news.genres = text;
                    break;
                case types_1$1.TagNames['news:publication_date']:
                    if (!currentItem.news) {
                        currentItem.news = newsTemplate();
                    }
                    currentItem.news.publication_date = text;
                    break;
                case types_1$1.TagNames['news:keywords']:
                    if (!currentItem.news) {
                        currentItem.news = newsTemplate();
                    }
                    currentItem.news.keywords = text;
                    break;
                case types_1$1.TagNames['news:stock_tickers']:
                    if (!currentItem.news) {
                        currentItem.news = newsTemplate();
                    }
                    currentItem.news.stock_tickers = text;
                    break;
                case types_1$1.TagNames['news:language']:
                    if (!currentItem.news) {
                        currentItem.news = newsTemplate();
                    }
                    currentItem.news.publication.language = text;
                    break;
                case types_1$1.TagNames['video:title']:
                    currentVideo.title += text;
                    break;
                case types_1$1.TagNames['video:description']:
                    currentVideo.description += text;
                    break;
                case types_1$1.TagNames['news:name']:
                    if (!currentItem.news) {
                        currentItem.news = newsTemplate();
                    }
                    currentItem.news.publication.name += text;
                    break;
                case types_1$1.TagNames['news:title']:
                    if (!currentItem.news) {
                        currentItem.news = newsTemplate();
                    }
                    currentItem.news.title += text;
                    break;
                case types_1$1.TagNames['image:caption']:
                    if (!currentImage.caption) {
                        currentImage.caption = text;
                    }
                    else {
                        currentImage.caption += text;
                    }
                    break;
                case types_1$1.TagNames['image:title']:
                    if (!currentImage.title) {
                        currentImage.title = text;
                    }
                    else {
                        currentImage.title += text;
                    }
                    break;
                default:
                    this.logger('log', 'unhandled text for tag:', currentTag, `'${text}'`);
                    this.err(`unhandled text for tag: ${currentTag} '${text}'`);
                    break;
            }
        });
        this.saxStream.on('cdata', (text) => {
            switch (currentTag) {
                case types_1$1.TagNames['video:title']:
                    currentVideo.title += text;
                    break;
                case types_1$1.TagNames['video:description']:
                    currentVideo.description += text;
                    break;
                case types_1$1.TagNames['news:name']:
                    if (!currentItem.news) {
                        currentItem.news = newsTemplate();
                    }
                    currentItem.news.publication.name += text;
                    break;
                case types_1$1.TagNames['news:title']:
                    if (!currentItem.news) {
                        currentItem.news = newsTemplate();
                    }
                    currentItem.news.title += text;
                    break;
                case types_1$1.TagNames['image:caption']:
                    if (!currentImage.caption) {
                        currentImage.caption = text;
                    }
                    else {
                        currentImage.caption += text;
                    }
                    break;
                case types_1$1.TagNames['image:title']:
                    if (!currentImage.title) {
                        currentImage.title = text;
                    }
                    else {
                        currentImage.title += text;
                    }
                    break;
                default:
                    this.logger('log', 'unhandled cdata for tag:', currentTag);
                    this.err(`unhandled cdata for tag: ${currentTag}`);
                    break;
            }
        });
        this.saxStream.on('attribute', (attr) => {
            switch (currentTag) {
                case types_1$1.TagNames['urlset']:
                case types_1$1.TagNames['xhtml:link']:
                case types_1$1.TagNames['video:id']:
                    break;
                case types_1$1.TagNames['video:restriction']:
                    if (attr.name === 'relationship' && (0, types_1$1.isAllowDeny)(attr.value)) {
                        currentVideo['restriction:relationship'] = attr.value;
                    }
                    else {
                        this.logger('log', 'unhandled attr', currentTag, attr.name);
                        this.err(`unhandled attr: ${currentTag} ${attr.name}`);
                    }
                    break;
                case types_1$1.TagNames['video:price']:
                    if (attr.name === 'type' && (0, types_1$1.isPriceType)(attr.value)) {
                        currentVideo['price:type'] = attr.value;
                    }
                    else if (attr.name === 'currency') {
                        currentVideo['price:currency'] = attr.value;
                    }
                    else if (attr.name === 'resolution' && (0, types_1$1.isResolution)(attr.value)) {
                        currentVideo['price:resolution'] = attr.value;
                    }
                    else {
                        this.logger('log', 'unhandled attr for video:price', attr.name);
                        this.err(`unhandled attr: ${currentTag} ${attr.name}`);
                    }
                    break;
                case types_1$1.TagNames['video:player_loc']:
                    if (attr.name === 'autoplay') {
                        currentVideo['player_loc:autoplay'] = attr.value;
                    }
                    else if (attr.name === 'allow_embed' && (0, types_1$1.isValidYesNo)(attr.value)) {
                        currentVideo['player_loc:allow_embed'] = attr.value;
                    }
                    else {
                        this.logger('log', 'unhandled attr for video:player_loc', attr.name);
                        this.err(`unhandled attr: ${currentTag} ${attr.name}`);
                    }
                    break;
                case types_1$1.TagNames['video:platform']:
                    if (attr.name === 'relationship' && (0, types_1$1.isAllowDeny)(attr.value)) {
                        currentVideo['platform:relationship'] = attr.value;
                    }
                    else {
                        this.logger('log', 'unhandled attr for video:platform', attr.name, attr.value);
                        this.err(`unhandled attr: ${currentTag} ${attr.name} ${attr.value}`);
                    }
                    break;
                case types_1$1.TagNames['video:gallery_loc']:
                    if (attr.name === 'title') {
                        currentVideo['gallery_loc:title'] = attr.value;
                    }
                    else {
                        this.logger('log', 'unhandled attr for video:galler_loc', attr.name);
                        this.err(`unhandled attr: ${currentTag} ${attr.name}`);
                    }
                    break;
                case types_1$1.TagNames['video:uploader']:
                    if (attr.name === 'info') {
                        currentVideo['uploader:info'] = attr.value;
                    }
                    else {
                        this.logger('log', 'unhandled attr for video:uploader', attr.name);
                        this.err(`unhandled attr: ${currentTag} ${attr.name}`);
                    }
                    break;
                default:
                    this.logger('log', 'unhandled attr', currentTag, attr.name);
                    this.err(`unhandled attr: ${currentTag} ${attr.name}`);
            }
        });
        this.saxStream.on('closetag', (tag) => {
            switch (tag) {
                case types_1$1.TagNames.url:
                    this.push(currentItem);
                    currentItem = tagTemplate$1();
                    break;
                case types_1$1.TagNames['video:video']:
                    currentItem.video.push(currentVideo);
                    currentVideo = videoTemplate();
                    break;
                case types_1$1.TagNames['image:image']:
                    currentItem.img.push(currentImage);
                    currentImage = { ...imageTemplate };
                    break;
                case types_1$1.TagNames['xhtml:link']:
                    if (!dontpushCurrentLink) {
                        currentItem.links.push(currentLink);
                    }
                    currentLink = { ...linkTemplate };
                    break;
            }
        });
    }
    _transform(data, encoding, callback) {
        try {
            // correcting the type here can be done without making it a breaking change
            // TODO fix this
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            this.saxStream.write(data, encoding);
            callback(this.level === types_1$1.ErrorLevel.THROW ? this.error : null);
        }
        catch (error) {
            callback(error);
        }
    }
    err(msg) {
        if (!this.error)
            this.error = new Error(msg);
    }
}
sitemapParser.XMLToSitemapItemStream = XMLToSitemapItemStream;
/**
  Read xml and resolve with the configuration that would produce it or reject with
  an error
  ```
  const { createReadStream } = require('fs')
  const { parseSitemap, createSitemap } = require('sitemap')
  parseSitemap(createReadStream('./example.xml')).then(
    // produces the same xml
    // you can, of course, more practically modify it or store it
    (xmlConfig) => console.log(createSitemap(xmlConfig).toString()),
    (err) => console.log(err)
  )
  ```
  @param {Readable} xml what to parse
  @return {Promise<SitemapItem[]>} resolves with list of sitemap items that can be fed into a SitemapStream. Rejects with an Error object.
 */
async function parseSitemap(xml) {
    const urls = [];
    return new Promise((resolve, reject) => {
        xml
            .pipe(new XMLToSitemapItemStream())
            .on('data', (smi) => urls.push(smi))
            .on('end', () => {
            resolve(urls);
        })
            .on('error', (error) => {
            reject(error);
        });
    });
}
sitemapParser.parseSitemap = parseSitemap;
const defaultObjectStreamOpts$1 = {
    lineSeparated: false,
};
/**
 * A Transform that converts a stream of objects into a JSON Array or a line
 * separated stringified JSON
 * @param [lineSeparated=false] whether to separate entries by a new line or comma
 */
class ObjectStreamToJSON extends stream_1$1.Transform {
    constructor(opts = defaultObjectStreamOpts$1) {
        opts.writableObjectMode = true;
        super(opts);
        this.lineSeparated = opts.lineSeparated;
        this.firstWritten = false;
    }
    _transform(chunk, encoding, cb) {
        if (!this.firstWritten) {
            this.firstWritten = true;
            if (!this.lineSeparated) {
                this.push('[');
            }
        }
        else if (this.lineSeparated) {
            this.push('\n');
        }
        else {
            this.push(',');
        }
        if (chunk) {
            this.push(JSON.stringify(chunk));
        }
        cb();
    }
    _flush(cb) {
        if (!this.lineSeparated) {
            this.push(']');
        }
        cb();
    }
}
sitemapParser.ObjectStreamToJSON = ObjectStreamToJSON;

var sitemapIndexParser = {};

var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(sitemapIndexParser, "__esModule", { value: true });
sitemapIndexParser.IndexObjectStreamToJSON = sitemapIndexParser.parseSitemapIndex = sitemapIndexParser.XMLToSitemapIndexStream = void 0;
const sax_1 = __importDefault(require$$0);
const stream_1 = require$$3$1;
const types_1 = types;
function isValidTagName(tagName) {
    // This only works because the enum name and value are the same
    return tagName in types_1.IndexTagNames;
}
function tagTemplate() {
    return {
        url: '',
    };
}
const defaultLogger = (level, ...message) => console[level](...message);
const defaultStreamOpts = {
    logger: defaultLogger,
};
// TODO does this need to end with `options`
/**
 * Takes a stream of xml and transforms it into a stream of IndexItems
 * Use this to parse existing sitemap indices into config options compatible with this library
 */
class XMLToSitemapIndexStream extends stream_1.Transform {
    constructor(opts = defaultStreamOpts) {
        var _a;
        opts.objectMode = true;
        super(opts);
        this.saxStream = sax_1.default.createStream(true, {
            xmlns: true,
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            strictEntities: true,
            trim: true,
        });
        this.level = opts.level || types_1.ErrorLevel.WARN;
        if (this.level !== types_1.ErrorLevel.SILENT && opts.logger !== false) {
            this.logger = (_a = opts.logger) !== null && _a !== void 0 ? _a : defaultLogger;
        }
        else {
            this.logger = () => undefined;
        }
        let currentItem = tagTemplate();
        let currentTag;
        this.saxStream.on('opentagstart', (tag) => {
            currentTag = tag.name;
        });
        this.saxStream.on('opentag', (tag) => {
            if (!isValidTagName(tag.name)) {
                this.logger('warn', 'unhandled tag', tag.name);
            }
        });
        this.saxStream.on('text', (text) => {
            switch (currentTag) {
                case types_1.IndexTagNames.loc:
                    currentItem.url = text;
                    break;
                case types_1.IndexTagNames.lastmod:
                    currentItem.lastmod = text;
                    break;
                default:
                    this.logger('log', 'unhandled text for tag:', currentTag, `'${text}'`);
                    break;
            }
        });
        this.saxStream.on('cdata', (_text) => {
            switch (currentTag) {
                default:
                    this.logger('log', 'unhandled cdata for tag:', currentTag);
                    break;
            }
        });
        this.saxStream.on('attribute', (attr) => {
            switch (currentTag) {
                case types_1.IndexTagNames.sitemapindex:
                    break;
                default:
                    this.logger('log', 'unhandled attr', currentTag, attr.name);
            }
        });
        this.saxStream.on('closetag', (tag) => {
            switch (tag) {
                case types_1.IndexTagNames.sitemap:
                    this.push(currentItem);
                    currentItem = tagTemplate();
                    break;
            }
        });
    }
    _transform(data, encoding, callback) {
        try {
            // correcting the type here can be done without making it a breaking change
            // TODO fix this
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            this.saxStream.write(data, encoding);
            callback();
        }
        catch (error) {
            callback(error);
        }
    }
}
sitemapIndexParser.XMLToSitemapIndexStream = XMLToSitemapIndexStream;
/**
  Read xml and resolve with the configuration that would produce it or reject with
  an error
  ```
  const { createReadStream } = require('fs')
  const { parseSitemapIndex, createSitemap } = require('sitemap')
  parseSitemapIndex(createReadStream('./example-index.xml')).then(
    // produces the same xml
    // you can, of course, more practically modify it or store it
    (xmlConfig) => console.log(createSitemap(xmlConfig).toString()),
    (err) => console.log(err)
  )
  ```
  @param {Readable} xml what to parse
  @return {Promise<IndexItem[]>} resolves with list of index items that can be fed into a SitemapIndexStream. Rejects with an Error object.
 */
async function parseSitemapIndex(xml) {
    const urls = [];
    return new Promise((resolve, reject) => {
        xml
            .pipe(new XMLToSitemapIndexStream())
            .on('data', (smi) => urls.push(smi))
            .on('end', () => {
            resolve(urls);
        })
            .on('error', (error) => {
            reject(error);
        });
    });
}
sitemapIndexParser.parseSitemapIndex = parseSitemapIndex;
const defaultObjectStreamOpts = {
    lineSeparated: false,
};
/**
 * A Transform that converts a stream of objects into a JSON Array or a line
 * separated stringified JSON
 * @param [lineSeparated=false] whether to separate entries by a new line or comma
 */
class IndexObjectStreamToJSON extends stream_1.Transform {
    constructor(opts = defaultObjectStreamOpts) {
        opts.writableObjectMode = true;
        super(opts);
        this.lineSeparated = opts.lineSeparated;
        this.firstWritten = false;
    }
    _transform(chunk, encoding, cb) {
        if (!this.firstWritten) {
            this.firstWritten = true;
            if (!this.lineSeparated) {
                this.push('[');
            }
        }
        else if (this.lineSeparated) {
            this.push('\n');
        }
        else {
            this.push(',');
        }
        if (chunk) {
            this.push(JSON.stringify(chunk));
        }
        cb();
    }
    _flush(cb) {
        if (!this.lineSeparated) {
            this.push(']');
        }
        cb();
    }
}
sitemapIndexParser.IndexObjectStreamToJSON = IndexObjectStreamToJSON;

var sitemapSimple = {};

const require$$1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(zlib);

const require$$5 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(util);

var hasRequiredSitemapSimple;

function requireSitemapSimple () {
	if (hasRequiredSitemapSimple) return sitemapSimple;
	hasRequiredSitemapSimple = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.simpleSitemapAndIndex = void 0;
		const index_1 = requireDist();
		const zlib_1 = require$$1;
		const fs_1 = require$$2$1;
		const path_1 = require$$3;
		const stream_1 = require$$3$1;
		const util_1 = require$$5;
		const url_1 = require$$6;
		const pipeline = (0, util_1.promisify)(stream_1.pipeline);
		/**
		 *
		 * @param {object} options -
		 * @param {string} options.hostname - The hostname for all URLs
		 * @param {string} [options.sitemapHostname] - The hostname for the sitemaps if different than hostname
		 * @param {SitemapItemLoose[] | string | Readable | string[]} options.sourceData - The urls you want to make a sitemap out of.
		 * @param {string} options.destinationDir - where to write the sitemaps and index
		 * @param {string} [options.publicBasePath] - where the sitemaps are relative to the hostname. Defaults to root.
		 * @param {number} [options.limit] - how many URLs to write before switching to a new file. Defaults to 50k
		 * @param {boolean} [options.gzip] - whether to compress the written files. Defaults to true
		 * @returns {Promise<void>} an empty promise that resolves when everything is done
		 */
		const simpleSitemapAndIndex = async ({ hostname, sitemapHostname = hostname, // if different
		/**
		 * Pass a line separated list of sitemap items or a stream or an array
		 */
		sourceData, destinationDir, limit = 50000, gzip = true, publicBasePath = './', }) => {
		    await fs_1.promises.mkdir(destinationDir, { recursive: true });
		    const sitemapAndIndexStream = new index_1.SitemapAndIndexStream({
		        limit,
		        getSitemapStream: (i) => {
		            const sitemapStream = new index_1.SitemapStream({
		                hostname,
		            });
		            const path = `./sitemap-${i}.xml`;
		            const writePath = (0, path_1.resolve)(destinationDir, path + (gzip ? '.gz' : ''));
		            if (!publicBasePath.endsWith('/')) {
		                publicBasePath += '/';
		            }
		            const publicPath = (0, path_1.normalize)(publicBasePath + path);
		            let pipeline;
		            if (gzip) {
		                pipeline = sitemapStream
		                    .pipe((0, zlib_1.createGzip)()) // compress the output of the sitemap
		                    .pipe((0, fs_1.createWriteStream)(writePath)); // write it to sitemap-NUMBER.xml
		            }
		            else {
		                pipeline = sitemapStream.pipe((0, fs_1.createWriteStream)(writePath)); // write it to sitemap-NUMBER.xml
		            }
		            return [
		                new url_1.URL(`${publicPath}${gzip ? '.gz' : ''}`, sitemapHostname).toString(),
		                sitemapStream,
		                pipeline,
		            ];
		        },
		    });
		    let src;
		    if (typeof sourceData === 'string') {
		        src = (0, index_1.lineSeparatedURLsToSitemapOptions)((0, fs_1.createReadStream)(sourceData));
		    }
		    else if (sourceData instanceof stream_1.Readable) {
		        src = sourceData;
		    }
		    else if (Array.isArray(sourceData)) {
		        src = stream_1.Readable.from(sourceData);
		    }
		    else {
		        throw new Error("unhandled source type. You've passed in data that is not supported");
		    }
		    const writePath = (0, path_1.resolve)(destinationDir, `./sitemap-index.xml${gzip ? '.gz' : ''}`);
		    if (gzip) {
		        return pipeline(src, sitemapAndIndexStream, (0, zlib_1.createGzip)(), (0, fs_1.createWriteStream)(writePath));
		    }
		    else {
		        return pipeline(src, sitemapAndIndexStream, (0, fs_1.createWriteStream)(writePath));
		    }
		};
		exports.simpleSitemapAndIndex = simpleSitemapAndIndex;
		exports.default = exports.simpleSitemapAndIndex;
} (sitemapSimple));
	return sitemapSimple;
}

var hasRequiredDist;

function requireDist () {
	if (hasRequiredDist) return dist;
	hasRequiredDist = 1;
	(function (exports) {
		var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
		}) : (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    o[k2] = m[k];
		}));
		var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
		    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
		};
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.simpleSitemapAndIndex = exports.IndexObjectStreamToJSON = exports.XMLToSitemapIndexStream = exports.parseSitemapIndex = exports.ObjectStreamToJSON = exports.XMLToSitemapItemStream = exports.parseSitemap = exports.xmlLint = exports.ReadlineStream = exports.normalizeURL = exports.validateSMIOptions = exports.mergeStreams = exports.lineSeparatedURLsToSitemapOptions = exports.SitemapStream = exports.streamToPromise = exports.SitemapAndIndexStream = exports.SitemapIndexStream = exports.IndexTagNames = exports.SitemapItemStream = void 0;
		/*!
		 * Sitemap
		 * Copyright(c) 2011 Eugene Kalinin
		 * MIT Licensed
		 */
		var sitemap_item_stream_1 = sitemapItemStream;
		Object.defineProperty(exports, "SitemapItemStream", { enumerable: true, get: function () { return sitemap_item_stream_1.SitemapItemStream; } });
		var sitemap_index_stream_1 = sitemapIndexStream;
		Object.defineProperty(exports, "IndexTagNames", { enumerable: true, get: function () { return sitemap_index_stream_1.IndexTagNames; } });
		Object.defineProperty(exports, "SitemapIndexStream", { enumerable: true, get: function () { return sitemap_index_stream_1.SitemapIndexStream; } });
		Object.defineProperty(exports, "SitemapAndIndexStream", { enumerable: true, get: function () { return sitemap_index_stream_1.SitemapAndIndexStream; } });
		var sitemap_stream_1 = sitemapStream;
		Object.defineProperty(exports, "streamToPromise", { enumerable: true, get: function () { return sitemap_stream_1.streamToPromise; } });
		Object.defineProperty(exports, "SitemapStream", { enumerable: true, get: function () { return sitemap_stream_1.SitemapStream; } });
		__exportStar(errors, exports);
		__exportStar(types, exports);
		var utils_1 = utils;
		Object.defineProperty(exports, "lineSeparatedURLsToSitemapOptions", { enumerable: true, get: function () { return utils_1.lineSeparatedURLsToSitemapOptions; } });
		Object.defineProperty(exports, "mergeStreams", { enumerable: true, get: function () { return utils_1.mergeStreams; } });
		Object.defineProperty(exports, "validateSMIOptions", { enumerable: true, get: function () { return utils_1.validateSMIOptions; } });
		Object.defineProperty(exports, "normalizeURL", { enumerable: true, get: function () { return utils_1.normalizeURL; } });
		Object.defineProperty(exports, "ReadlineStream", { enumerable: true, get: function () { return utils_1.ReadlineStream; } });
		var xmllint_1 = xmllint;
		Object.defineProperty(exports, "xmlLint", { enumerable: true, get: function () { return xmllint_1.xmlLint; } });
		var sitemap_parser_1 = sitemapParser;
		Object.defineProperty(exports, "parseSitemap", { enumerable: true, get: function () { return sitemap_parser_1.parseSitemap; } });
		Object.defineProperty(exports, "XMLToSitemapItemStream", { enumerable: true, get: function () { return sitemap_parser_1.XMLToSitemapItemStream; } });
		Object.defineProperty(exports, "ObjectStreamToJSON", { enumerable: true, get: function () { return sitemap_parser_1.ObjectStreamToJSON; } });
		var sitemap_index_parser_1 = sitemapIndexParser;
		Object.defineProperty(exports, "parseSitemapIndex", { enumerable: true, get: function () { return sitemap_index_parser_1.parseSitemapIndex; } });
		Object.defineProperty(exports, "XMLToSitemapIndexStream", { enumerable: true, get: function () { return sitemap_index_parser_1.XMLToSitemapIndexStream; } });
		Object.defineProperty(exports, "IndexObjectStreamToJSON", { enumerable: true, get: function () { return sitemap_index_parser_1.IndexObjectStreamToJSON; } });
		var sitemap_simple_1 = requireSitemapSimple();
		Object.defineProperty(exports, "simpleSitemapAndIndex", { enumerable: true, get: function () { return sitemap_simple_1.simpleSitemapAndIndex; } });
} (dist));
	return dist;
}

var distExports = requireDist();

const sitemap_xml = defineEventHandler(async (event) => {
  const visible = await serverQueryContent(event).where({ visibility: 1 }).only("_path").find();
  const limited = await serverQueryContent(event).where({ visibility: 2 }).only("_path").find();
  const posts = visible.concat(limited);
  posts.push(
    {
      _path: "/"
    }
  );
  const sitemap = new distExports.SitemapStream({
    hostname: `https://${process.env.domain}`
  });
  for (const post of posts) {
    sitemap.write({
      url: post._path,
      changefreq: "weekly"
    });
  }
  sitemap.end();
  return distExports.streamToPromise(sitemap);
});

export { sitemap_xml as default };
//# sourceMappingURL=sitemap.xml.mjs.map
