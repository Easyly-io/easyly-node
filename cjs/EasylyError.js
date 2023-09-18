"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

/**
 * EasylyError is the base error from which all other more specific Easyly errors derive.
 * Specifically for errors returned from Easyly's REST API.
 */
class EasylyError extends Error {
    constructor(raw = {},response) {

        super(raw.message);
        this.type = this.constructor.name;
        this.raw = raw;
        this.code = raw.code;
        this.param = raw.param;
        this.headers = raw.headers;
        this.status = raw.status;

        this.message = raw.message || response?.message || raw.statusText || "Unknown Error";
        this.details = response?.message || raw.statusText || "Unknown Error";
    }
}
exports.EasylyError = EasylyError;