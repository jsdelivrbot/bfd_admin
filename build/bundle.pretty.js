module.exports = function(e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return e[r].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "", t(0)
}([function(e, t, n) {
    "use strict";
    var r = n(6),
        o = n(63),
        i = n(8);
    e.exports = r.createServer(function(e, t, n) {
        return i.info("Starting Delegated Administration Extension - Version:", t("CLIENT_VERSION")), o(t, n)
    })
}, function(e, t, n) {
    const r = n(38),
        o = n(2),
        i = n(61),
        s = e.exports = {};
    s.ArgumentError = o.ArgumentError, s.ForbiddenError = o.ForbiddenError, s.HookTokenError = o.HookTokenError, s.ManagementApiError = o.ManagementApiError, s.NotFoundError = o.NotFoundError, s.UnauthorizedError = o.UnauthorizedError, s.ValidationError = o.ValidationError, s.managementApi = n(48), s.FileStorageContext = i.FileStorageContext, s.WebtaskStorageContext = i.WebtaskStorageContext, s.BlobRecordProvider = n(58), s.config = n(49), s.configProvider = n(20), s.createServer = n(59).createServer, s.validateHookToken = n(57), s.createExpressServer = function(e) {
        return r.fromExpress(s.createServer(e))
    }, s.createHapiServer = function(e) {
        return r.fromHapi(s.createServer(e))
    }
}, function(e, t, n) {
    e.exports.ArgumentError = n(50), e.exports.ForbiddenError = n(51), e.exports.HookTokenError = n(52), e.exports.ManagementApiError = n(53), e.exports.NotFoundError = n(54), e.exports.UnauthorizedError = n(55), e.exports.ValidationError = n(56)
}, function(e, t) {
    e.exports = require("express")
}, function(e, t) {
    e.exports = require("bluebird")
}, function(e, t) {
    e.exports = require("lodash")
}, function(e, t, n) {
    const r = n(46),
        o = n(47),
        i = n(41);
    e.exports.createServer = r.createServer, e.exports.urlHelpers = o, e.exports.middlewares = i
}, function(e, t, n) {
    "use strict";
    e.exports = n(1).config()
}, function(e, t, n) {
    "use strict";
    var r = n(130);
    r.emitErrs = !0;
    var o = new r.Logger({
        transports: [new r.transports.Console({
            timestamp: !0,
            level: "debug",
            handleExceptions: !0,
            json: !1,
            colorize: !0
        })],
        exitOnError: !1
    });
    e.exports = o, e.exports.stream = {
        write: function(e) {
            o.info(e.replace(/\n$/, ""))
        }
    }
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.USER_ACCESS_LEVEL = 1, t.ADMIN_ACCESS_LEVEL = 2, t.USER_ROLE_NAME = "Delegated Admin - User", t.ADMIN_ROLE_NAME = "Delegated Admin - Administrator", t.VALID_SCRIPTS = ["access", "filter", "create", "memberships", "settings"]
}, function(e, t, n) {
    e.exports = !n(13)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.verifyUserAccess = t.hasAccessLevel = t.getUserAccessLevel = void 0;
    var o = n(65),
        i = r(o),
        s = n(66),
        u = r(s),
        a = n(67),
        c = r(a);
    t.getUserAccessLevel = i["default"], t.hasAccessLevel = u["default"], t.verifyUserAccess = c["default"]
}, function(e, t) {
    var n = e.exports = {
        version: "2.4.0"
    };
    "number" == typeof __e && (__e = n)
}, function(e, t) {
    e.exports = function(e) {
        try {
            return !!e()
        } catch (t) {
            return !0
        }
    }
}, function(e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function(e, t) {
    e.exports = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.JwksClient = void 0;
    var i = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        u = n(19),
        a = r(u),
        c = n(37),
        l = r(c),
        f = n(27),
        d = (r(f), n(28)),
        p = r(d),
        h = n(30),
        g = r(h),
        v = n(114),
        m = n(116);
    t.JwksClient = function() {
        function e(t) {
            var n = this;
            o(this, e), this.getSigningKey = function(e, t) {
                n.logger("Fetching signing key for '" + e + "'"), n.getSigningKeys(function(r, o) {
                    if (r) return t(r);
                    var i = o.find(function(t) {
                        return t.kid === e
                    });
                    return i ? t(null, i) : (n.logger("Unable to find a signing key that matches '" + e + "'"), t(new g["default"]("Unable to find a signing key that matches '" + e + "'")))
                })
            }, this.options = i({
                rateLimit: !1,
                cache: !1,
                strictSsl: !0
            }, t), this.logger = (0, a["default"])("jwks"), this.options.rateLimit && (this.getSigningKey = (0, m.rateLimitSigningKey)(this, t)), this.options.cache && (this.getSigningKey = (0, m.cacheSigningKey)(this, t))
        }
        return s(e, [{
            key: "getKeys",
            value: function(e) {
                var t = this;
                this.logger("Fetching keys from '" + this.options.jwksUri + "'"), (0, l["default"])({
                    json: !0,
                    uri: this.options.jwksUri,
                    strictSSL: this.options.strictSsl
                }, function(n, r) {
                    return n || r.statusCode < 200 || r.statusCode >= 300 ? (t.logger("Failure:", r && r.body || n), e(r ? new p["default"](r.body && (r.body.message || r.body) || r.statusMessage || "Http Error " + r.statusCode) : n)) : (t.logger("Keys:", r.body.keys), e(null, r.body.keys))
                })
            }
        }, {
            key: "getSigningKeys",
            value: function(e) {
                var t = this;
                this.getKeys(function(n, r) {
                    if (n) return e(n);
                    if (!r || !r.length) return e(new p["default"]("The JWKS endpoint did not contain any keys"));
                    var o = r.filter(function(e) {
                        return "sig" === e.use && "RSA" === e.kty && e.kid && (e.x5c && e.x5c.length || e.n && e.e)
                    }).map(function(e) {
                        return e.x5c && e.x5c.length ? {
                            kid: e.kid,
                            nbf: e.nbf,
                            publicKey: (0, v.certToPEM)(e.x5c[0])
                        } : {
                            kid: e.kid,
                            nbf: e.nbf,
                            rsaPublicKey: (0, v.rsaPublicKeyToPEM)(e.n, e.e)
                        }
                    });
                    return o.length ? (t.logger("Signing Keys:", o), e(null, o)) : e(new p["default"]("The JWKS endpoint did not contain any signing keys"))
                })
            }
        }]), e
    }()
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.SigningKeyNotFoundError = t.JwksRateLimitError = t.JwksError = t.ArgumentError = void 0;
    var o = n(27),
        i = r(o),
        s = n(28),
        u = r(s),
        a = n(29),
        c = r(a),
        l = n(30),
        f = r(l);
    t.ArgumentError = i["default"], t.JwksError = u["default"], t.JwksRateLimitError = c["default"], t.SigningKeyNotFoundError = f["default"]
}, function(e, t, n) {
    const r = n(124),
        o = n(5),
        i = ["max", "maxAge", "length", "dispose", "stale"];
    e.exports = function(e) {
        const t = new r(o.pick(e, i)),
            n = e.load,
            s = e.hash,
            u = e.bypass,
            a = e.itemMaxAge,
            c = new Map;
        if (e.disable) return n;
        const l = function() {
            const e = o.toArray(arguments),
                r = e.slice(0, -1),
                i = e.slice(-1).pop(),
                l = this;
            var f;
            if (u && u.apply(l, r)) return n.apply(l, e);
            f = 0 !== r.length || s ? s.apply(l, r) : "_";
            var d = t.get(f);
            return d ? i.apply(null, [null].concat(d)) : void(c.get(f) ? c.get(f).push(i) : (c.set(f, []), n.apply(l, r.concat(function(e) {
                const n = o.toArray(arguments);
                if (!e) {
                    const s = n.slice(1);
                    a ? t.set(f, s, a.apply(l, r.concat(s))) : t.set(f, s)
                }
                c.get(f).forEach(function(e) {
                    e.apply(null, n)
                }), c["delete"](f), i.apply(null, n)
            }))))
        };
        return l.keys = t.keys.bind(t), l
    }, e.exports.sync = function(e) {
        const t = new r(o.pick(e, i)),
            n = e.load,
            s = e.hash,
            u = e.disable,
            a = e.bypass,
            c = this,
            l = e.itemMaxAge;
        if (u) return n;
        const f = function() {
            var e = o.toArray(arguments);
            if (a && a.apply(c, arguments)) return n.apply(c, arguments);
            var r = s.apply(c, e),
                i = t.get(r);
            if (i) return i;
            const u = n.apply(c, e);
            return l ? t.set(r, u, l.apply(c, e.concat([u]))) : t.set(r, u), u
        };
        return f.keys = t.keys.bind(t), f
    }
}, function(e, t) {
    e.exports = require("debug")
}, function(e, t, n) {
    const r = n(5),
        o = n(2).ArgumentError;
    e.exports.fromWebtaskContext = function(e) {
        if (null === e || void 0 === e) throw new o("Must provide a webtask context");
        const t = r.assign({}, {
            NODE_ENV: "production",
            CLIENT_VERSION: "2.0.0"
        }, e.params, e.secrets, {
            NODE_ENV: "production",
            HOSTING_ENV: "webtask"
        });
        return function(e) {
            return t[e]
        }
    }
}, function(e, t) {
    e.exports = function(e) {
        if (void 0 == e) throw TypeError("Can't call method on  " + e);
        return e
    }
}, function(e, t, n) {
    var r = n(14),
        o = n(12),
        i = n(89),
        s = n(93),
        u = "prototype",
        a = function(e, t, n) {
            var c, l, f, d = e & a.F,
                p = e & a.G,
                h = e & a.S,
                g = e & a.P,
                v = e & a.B,
                m = e & a.W,
                y = p ? o : o[t] || (o[t] = {}),
                x = y[u],
                E = p ? r : h ? r[t] : (r[t] || {})[u];
            p && (n = t);
            for (c in n) l = !d && E && void 0 !== E[c], l && c in y || (f = l ? E[c] : n[c], y[c] = p && "function" != typeof E[c] ? n[c] : v && l ? i(f, r) : m && E[c] == f ? function(e) {
                var t = function(t, n, r) {
                    if (this instanceof e) {
                        switch (arguments.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t);
                            case 2:
                                return new e(t, n)
                        }
                        return new e(t, n, r)
                    }
                    return e.apply(this, arguments)
                };
                return t[u] = e[u], t
            }(f) : g && "function" == typeof f ? i(Function.call, f) : f, g && ((y.virtual || (y.virtual = {}))[c] = f, e & a.R && x && !x[c] && s(x, c, f)))
        };
    a.F = 1, a.G = 2, a.S = 4, a.P = 8, a.B = 16, a.W = 32, a.U = 64, a.R = 128, e.exports = a
}, function(e, t, n) {
    var r = n(88);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
        return "String" == r(e) ? e.split("") : Object(e)
    }
}, function(e, t, n) {
    var r = n(86),
        o = n(94),
        i = n(106),
        s = Object.defineProperty;
    t.f = n(10) ? Object.defineProperty : function(e, t, n) {
        if (r(e), t = i(t, !0), r(n), o) try {
            return s(e, t, n)
        } catch (u) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (e[t] = n.value), e
    }
}, function(e, t) {
    var n = Math.ceil,
        r = Math.floor;
    e.exports = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
    }
}, function(e, t, n) {
    var r = n(23),
        o = n(21);
    e.exports = function(e) {
        return r(o(e))
    }
}, function(e, t) {
    "use strict";

    function n(e) {
        Error.call(this, e), Error.captureStackTrace(this, this.constructor), this.name = "ArgumentError", this.message = e
    }
    n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, e.exports = n
}, function(e, t) {
    "use strict";

    function n(e) {
        Error.call(this, e), Error.captureStackTrace(this, this.constructor), this.name = "JwksError", this.message = e
    }
    n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, e.exports = n
}, function(e, t) {
    "use strict";

    function n(e) {
        Error.call(this, e), Error.captureStackTrace(this, this.constructor), this.name = "JwksRateLimitError", this.message = e
    }
    n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, e.exports = n
}, function(e, t) {
    "use strict";

    function n(e) {
        Error.call(this, e), Error.captureStackTrace(this, this.constructor), this.name = "SigningKeyNotFoundError", this.message = e
    }
    n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, e.exports = n
}, function(e, t) {
    var n = function(e, t, n, r) {
        if (this.bucketSize = e, this.tokensPerInterval = t, "string" == typeof n) switch (n) {
            case "sec":
            case "second":
                this.interval = 1e3;
                break;
            case "min":
            case "minute":
                this.interval = 6e4;
                break;
            case "hr":
            case "hour":
                this.interval = 36e5;
                break;
            case "day":
                this.interval = 864e5
        } else this.interval = n;
        this.parentBucket = r, this.content = 0, this.lastDrip = +new Date
    };
    n.prototype = {
        bucketSize: 1,
        tokensPerInterval: 1,
        interval: 1e3,
        parentBucket: null,
        content: 0,
        lastDrip: 0,
        removeTokens: function(e, t) {
            function n() {
                var n = Math.ceil((e - r.content) * (r.interval / r.tokensPerInterval));
                return setTimeout(function() {
                    r.removeTokens(e, t)
                }, n), !1
            }
            var r = this;
            return this.bucketSize ? e > this.bucketSize ? (process.nextTick(t.bind(null, "Requested tokens " + e + " exceeds bucket size " + this.bucketSize, null)), !1) : (this.drip(), e > this.content ? n() : this.parentBucket ? this.parentBucket.removeTokens(e, function(o, i) {
                return o ? t(o, null) : e > r.content ? n() : (r.content -= e, void t(null, Math.min(i, r.content)))
            }) : (this.content -= e, process.nextTick(t.bind(null, null, this.content)), !0)) : (process.nextTick(t.bind(null, null, e, Number.POSITIVE_INFINITY)), !0)
        },
        tryRemoveTokens: function(e) {
            return !(this.bucketSize && (e > this.bucketSize || (this.drip(), e > this.content || this.parentBucket && !this.parent.tryRemoveTokens(e) || (this.content -= e, 0))))
        },
        drip: function() {
            if (!this.tokensPerInterval) return void(this.content = this.bucketSize);
            var e = +new Date,
                t = Math.max(e - this.lastDrip, 0);
            this.lastDrip = e;
            var n = t * (this.tokensPerInterval / this.interval);
            this.content = Math.min(this.content + n, this.bucketSize)
        }
    }, e.exports = n
}, function(e, t) {
    e.exports = require("auth0@2.1.0")
}, function(e, t) {
    e.exports = require("fs")
}, function(e, t) {
    e.exports = require("jsonwebtoken")
}, function(e, t) {
    e.exports = require("ms")
}, function(e, t) {
    e.exports = require("path")
}, function(e, t) {
    e.exports = require("request")
}, function(e, t) {
    e.exports = require("webtask-tools")
}, function(e, t, n) {
    const r = n(123),
        o = n(111),
        i = n(1).UnauthorizedError;
    e.exports = function(e, t) {
        return r({
            secret: o.expressJwtSecret({
                cache: !0,
                rateLimit: !0,
                jwksRequestsPerMinute: 5,
                jwksUri: "https://" + e + "/.well-known/jwks.json",
                handleSigningKeyError: function(e, t) {
                    return t(e instanceof o.SigningKeyNotFoundError ? new i("A token was provided with an invalid kid") : e)
                }
            }),
            audience: t,
            issuer: "https://" + e + "/",
            algorithms: ["RS256"]
        })
    }
}, function(e, t, n) {
    e.exports = function(e) {
        return function(t, n, r, o) {
            return e && e(t), t && t.status ? (r.status(t.status), r.json({
                error: t.code || t.name,
                message: t.message || t.name
            })) : (r.status(t.status || 500), r.json({
                error: "InternalServerError",
                message: t.message || t.name
            }))
        }
    }
}, function(e, t, n) {
    e.exports.authenticateUser = n(39), e.exports.requireUser = n(43), e.exports.errorHandler = n(40), e.exports.managementApiClient = n(42), e.exports.validateHookToken = n(44), e.exports.webtaskConfig = n(45)
}, function(e, t, n) {
    const r = n(1);
    e.exports = function(e) {
        return function(t, n, o) {
            const i = t;
            r.managementApi.getClient(e).then(function(e) {
                return i.auth0 = e, o(), null
            })["catch"](function(e) {
                o(e)
            })
        }
    }
}, function(e, t, n) {
    const r = n(1).UnauthorizedError;
    e.exports = function(e, t, n) {
        return e.user ? n() : n(new r("Authentication required for this endpoint."))
    }
}, function(e, t, n) {
    const r = n(1);
    e.exports = function(e, t, n) {
        if (null === e || void 0 === e) throw new r.ArgumentError("Must provide the domain");
        if ("string" != typeof e || 0 === e.length) throw new r.ArgumentError("The provided domain is invalid: " + e);
        if (null === t || void 0 === t) throw new r.ArgumentError("Must provide the webtaskUrl");
        if ("string" != typeof t || 0 === t.length) throw new r.ArgumentError("The provided webtaskUrl is invalid: " + t);
        if (null === n || void 0 === n) throw new r.ArgumentError("Must provide the extensionSecret");
        if ("string" != typeof n || 0 === n.length) throw new r.ArgumentError("The provided extensionSecret is invalid: " + n);
        return function(o) {
            if (null === o || void 0 === o) throw new r.ArgumentError("Must provide the hookPath");
            if ("string" != typeof o || 0 === o.length) throw new r.ArgumentError("The provided hookPath is invalid: " + o);
            return function(i, s, u) {
                if (i.headers.authorization && "Bearer" === i.headers.authorization.split(" ")[0]) {
                    const a = i.headers.authorization.split(" ")[1];
                    try {
                        if (r.validateHookToken(e, t, o, n, a)) return u()
                    } catch (c) {
                        return u(c)
                    }
                }
                return u(new r.HookTokenError("Hook token missing for the call to: " + o))
            }
        }
    }
}, function(e, t, n) {
    const r = n(1);
    e.exports = function(e) {
        return function(t, n, o) {
            return t.webtaskContext && e.setProvider(r.configProvider.fromWebtaskContext(t.webtaskContext)), o()
        }
    }
}, function(e, t, n) {
    const r = n(1),
        o = n(38);
    e.exports.createServer = function(e) {
        return o.fromExpress(r.createServer(e))
    }
}, function(e, t, n) {
    const r = n(128),
        o = function(e, t) {
            var n = r.parse(e).pathname || "";
            return n = n.replace(t, "").replace(/^\/|\/$/g, ""), n.startsWith("/") || (n = "/" + n), n.endsWith("/") || (n += "/"), n
        };
    e.exports.getBasePath = function(e) {
        return o(e.originalUrl || "", e.path)
    }, e.exports.getBaseUrl = function(e) {
        const t = r.parse(e.originalUrl || "").pathname || "";
        return r.format({
            protocol: "https",
            host: e.get("host"),
            pathname: t.replace(e.path, "")
        })
    }
}, function(e, t, n) {
    const r = n(35),
        o = n(34),
        i = n(32),
        s = n(4),
        u = n(18),
        a = n(127),
        c = n(2).ArgumentError,
        l = n(2).ManagementApiError,
        f = function(e, t, n) {
            return new s(function(r, o) {
                a.post("https://" + e + "/oauth/token").send({
                    audience: "https://" + e + "/api/v2/",
                    client_id: t,
                    client_secret: n,
                    grant_type: "client_credentials"
                }).set("Accept", "application/json").end(function(e, n) {
                    return e && 401 === e.status ? o(new l("unauthorized", "Invalid credentials for " + t, e.status)) : e && n && n.body && n.body.error ? o(new l(n.body.error, n.body.error_description || n.body.error, e.status)) : e ? o(e) : n.ok && n.body.access_token ? r(n.body.access_token) : o(new l("unknown_error", "Unknown error from Management Api or no access token was provided: " + (n.text || n.status)))
                })
            })
        },
        d = s.promisify(u({
            load: function(e, t, n, r) {
                f(e, t, n).then(function(e) {
                    return r(null, e)
                })["catch"](function(e) {
                    return r(e)
                })
            },
            hash: function(e, t, n) {
                return e + "-" + t + "-" + n
            },
            itemMaxAge: function(e, t, n, r) {
                try {
                    const i = o.decode(r),
                        s = new Date(0);
                    s.setUTCSeconds(i.exp);
                    const u = (new Date).valueOf();
                    return s.valueOf() - u - 1e4
                } catch (a) {
                    return 1e3
                }
            },
            max: 100,
            maxAge: r("1h")
        }));
    e.exports.getAccessToken = f, e.exports.getAccessTokenCached = d, e.exports.getClient = function(e) {
        if (null === e || void 0 === e) throw new c("An options object must be provided");
        if (null === e.domain || void 0 === e.domain) throw new c("An options object must contain the domain");
        if ("string" != typeof e.domain || 0 === e.domain.length) throw new c("The provided domain is invalid: " + e.domain);
        if (e.accessToken) {
            if ("string" != typeof e.accessToken || 0 === e.accessToken.length) throw new c("The provided accessToken is invalid");
            return s.resolve(new i.ManagementClient({
                domain: e.domain,
                token: e.accessToken
            }))
        }
        if (null === e.clientId || void 0 === e.clientId) throw new c("An options object must contain the clientId");
        if ("string" != typeof e.clientId || 0 === e.clientId.length) throw new c("The provided clientId is invalid: " + e.clientId);
        if (null === e.clientSecret || void 0 === e.clientSecret) throw new c("An options object must contain the clientSecret");
        if ("string" != typeof e.clientSecret || 0 === e.clientSecret.length) throw new c("The provided clientSecret is invalid");
        return d(e.domain, e.clientId, e.clientSecret).then(function(t) {
            return new i.ManagementClient({
                domain: e.domain,
                token: t
            })
        })
    }
}, function(e, t) {
    e.exports = function() {
        var e = null;
        const t = function(t) {
            if (!e) throw new Error("A configuration provider has not been set");
            return e(t)
        };
        return t.setProvider = function(t) {
            e = t
        }, t
    }
}, function(e, t) {
    function n(e) {
        Error.call(this, e), Error.captureStackTrace(this, this.constructor), this.name = "ArgumentError", this.message = e, this.status = 400
    }
    n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, e.exports = n
}, function(e, t) {
    function n(e) {
        Error.call(this, e), Error.captureStackTrace(this, this.constructor), this.name = "ForbiddenError", this.message = e, this.status = 403
    }
    n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, e.exports = n
}, function(e, t) {
    function n(e, t) {
        Error.call(this, e), Error.captureStackTrace(this, this.constructor), this.name = "HookTokenError", this.message = e, this.status = 401, this.innerError = t
    }
    n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, e.exports = n
}, function(e, t) {
    function n(e, t, n) {
        Error.call(this, t), Error.captureStackTrace(this, this.constructor), this.name = "ManagementApiError", this.code = e, this.message = t, this.status = n || 400
    }
    n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, e.exports = n
}, function(e, t) {
    function n(e) {
        Error.call(this, e), Error.captureStackTrace(this, this.constructor), this.name = "NotFoundError", this.message = e, this.status = 404
    }
    n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, e.exports = n
}, function(e, t) {
    function n(e) {
        Error.call(this, e), Error.captureStackTrace(this, this.constructor), this.name = "UnauthorizedError", this.message = e, this.status = 401
    }
    n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, e.exports = n
}, function(e, t) {
    function n(e) {
        Error.call(this, e), Error.captureStackTrace(this, this.constructor), this.name = "ValidationError", this.message = e, this.status = 400
    }
    n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, e.exports = n
}, function(e, t, n) {
    const r = n(34),
        o = n(2).HookTokenError;
    e.exports = function(e, t, n, i, s) {
        if (!s) throw new o("Hook token missing");
        try {
            return r.verify(s, i, {
                audience: t + n,
                issuer: "https://" + e
            }), !0
        } catch (u) {
            throw new o("Invalid hook token", u)
        }
    }
}, function(e, t, n) {
    function r(e) {
        if (null === e || void 0 === e) throw new s("Must provide a storage context");
        this.storageContext = e
    }
    const o = n(5),
        i = n(126),
        s = n(2).ArgumentError,
        u = n(2).NotFoundError,
        a = n(2).ValidationError,
        c = function(e, t) {
            return e.read(t).then(function(e) {
                return e[t] = e[t] || [], e
            })
        };
    r.prototype.getAll = function(e) {
        return c(this.storageContext, e).then(function(t) {
            return t[e]
        })
    }, r.prototype.get = function(e, t) {
        return this.getAll(e).then(function(n) {
            const r = o.find(n, function(e) {
                return e._id === t
            });
            return r ? r : Promise.reject(new u("The record " + t + " in " + e + " does not exist."))
        })
    }, r.prototype.create = function(e, t) {
        const n = this.storageContext;
        return c(n, e).then(function(r) {
            t._id || (t._id = i.v4());
            const s = o.findIndex(r[e], function(e) {
                return e._id === t._id
            });
            return s > -1 ? Promise.reject(new a("The record " + t._id + " in " + e + " already exists.")) : (r[e].push(t), n.write(r).then(function() {
                return t
            }))
        })
    }, r.prototype.update = function(e, t, n, r) {
        const i = this.storageContext;
        return c(i, e).then(function(s) {
            const a = o.findIndex(s[e], function(e) {
                return e._id === t
            });
            if (a < 0 && !r) throw new u("The record " + t + " in " + e + " does not exist.");
            const c = o.extend({
                _id: t
            }, a < 0 ? {} : s[e][a], n);
            return a < 0 ? s[e].push(c) : s[e][a] = c, i.write(s).then(function() {
                return c
            })
        })
    }, r.prototype["delete"] = function(e, t) {
        const n = this.storageContext;
        return c(n, e).then(function(r) {
            const i = o.findIndex(r[e], function(e) {
                return e._id === t
            });
            return !(i < 0) && (r[e].splice(i, 1), n.write(r).then(function() {
                return !0
            }))
        })
    }, e.exports = r
}, function(e, t, n) {
    const r = n(20);
    e.exports.createServer = function(e) {
        var t = null;
        return function(n, o) {
            if (!t) {
                const i = r.fromWebtaskContext(n.webtaskContext);
                t = e(n, i, n.webtaskContext.storage)
            }
            return t(n, o)
        }
    }
}, function(e, t, n) {
    function r(e, t) {
        if (null === e || void 0 === e) throw new u("Must provide the path to the file");
        if ("string" != typeof e || 0 === e.length) throw new u("The provided path is invalid: " + e);
        t = t || {
            mergeWrites: !0
        }, this.path = e, this.mergeWrites = t.mergeWrites, this.defaultData = t.defaultData || {}
    }
    const o = n(5),
        i = n(33),
        s = n(4),
        u = n(2).ArgumentError;
    r.prototype.read = function() {
        const e = this;
        return new s(function(t, n) {
            i.readFile(e.path, "utf8", function(r, o) {
                if (r) return "ENOENT" === r.code ? t(e.defaultData) : n(r);
                try {
                    return t(o && o.length ? JSON.parse(o) : e.defaultData)
                } catch (i) {
                    return n(i)
                }
            })
        })
    }, r.prototype.write = function(e) {
        const t = this;
        var n = s.resolve(e);
        return t.mergeWrites && (n = n.then(function(e) {
            return t.read().then(function(t) {
                return o.extend({}, t, e)
            })
        })), n.then(function(e) {
            return new s(function(n, r) {
                try {
                    return i.writeFile(t.path, JSON.stringify(e, null, 2), "utf8", function(e) {
                        return e ? r(e) : n()
                    })
                } catch (o) {
                    return r(o)
                }
            })
        })
    }, e.exports = r
}, function(e, t, n) {
    e.exports.FileStorageContext = n(60), e.exports.WebtaskStorageContext = n(62)
}, function(e, t, n) {
    function r(e, t) {
        if (null === e || void 0 === e) throw new i("Must provide the Webtask storage object");
        t = t || {
            force: 1
        }, this.storage = e, this.options = t, this.defaultData = t.defaultData || {}
    }
    const o = n(4),
        i = n(2).ArgumentError;
    r.prototype.read = function() {
        const e = this;
        return new o(function(t, n) {
            e.storage.get(function(r, o) {
                return r ? n(r) : t(o || e.defaultData)
            })
        })
    }, r.prototype.write = function(e) {
        const t = this;
        return new o(function(n, r) {
            t.storage.set(e, t.options, function(e) {
                return e ? r(e) : n()
            })
        })
    }, e.exports = r
}, function(e, t, n) {
    (function(t) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var i = n(36),
            s = o(i),
            u = n(125),
            a = o(u),
            c = n(3),
            l = o(c),
            f = n(121),
            d = o(f),
            p = n(1),
            h = r(p),
            g = n(6),
            v = n(69),
            m = o(v),
            y = n(72),
            x = o(y),
            E = n(75),
            k = o(E),
            w = n(73),
            _ = o(w),
            b = n(7),
            S = o(b),
            A = n(8),
            T = o(A);
        e.exports = function(e, n) {
            S["default"].setProvider(e);
            var r = n ? new h.WebtaskStorageContext(n, {
                    force: 1
                }) : new h.FileStorageContext(s["default"].join(t, "./data.json"), {
                    mergeWrites: !0
                }),
                o = new l["default"];
            return o.use(function(e, t, n) {
                e.webtaskContext && S["default"].setProvider(h.configProvider.fromWebtaskContext(e.webtaskContext)), n()
            }), o.use((0, a["default"])(":method :url :status :response-time ms - :res[content-length]", {
                stream: T["default"].stream
            })), o.use(d["default"].json()), o.use(d["default"].urlencoded({
                extended: !1
            })), o.use("/api", (0, m["default"])(r)), o.use("/app", l["default"]["static"](s["default"].join(t, "../dist"))), o.use("/meta", (0, k["default"])()), o.use("/.extensions", (0, x["default"])()), o.get("*", (0, _["default"])()), o.use(g.middlewares.errorHandler(T["default"].error)), o
        }
    }).call(t, "/")
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(1);
    t["default"] = function(e, t) {
        var n = new r.ValidationError(e.message || ""),
            o = t + "-script error";
        return e.stack && (o = e.stack.replace(/SAFE_EVAL_\d+/, t + "-script error").replace("evalmachine.<anonymous>", "line")), n.stack = o.split("\n").slice(0, 2).join(" "), n
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function o(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t["default"] = e, t
    }
    var i = n(9),
        s = o(i),
        u = n(5),
        a = r(u),
        c = function(e) {
            var t = [e.roles, e.app_metadata && e.app_metadata.roles, e.app_metadata && e.app_metadata.authorization && e.app_metadata.authorization.roles];
            return (0, a["default"])(t).flatten().filter(function(e) {
                return e
            }).uniq().value()
        },
        l = function(e) {
            var t = 0;
            if (!e) return t;
            var n = Array.isArray(e) ? e : e.replace(", ", ",", "g").split(",");
            return n.indexOf(s.USER_ROLE_NAME) >= 0 && (t = s.USER_ACCESS_LEVEL), n.indexOf(s.ADMIN_ROLE_NAME) >= 0 && (t = s.ADMIN_ACCESS_LEVEL), t
        };
    e.exports = function(e, t, n) {
        var r = c(e.user);
        e.user.role = l(r), n()
    }
}, function(e, t, n) {
    "use strict";
    var r = n(1);
    e.exports = function(e) {
        return function(t, n, o) {
            t.user && t.user.role >= e ? o() : o(new r.ForbiddenError("Forbidden! Sorry, you have no permissions to do this."))
        }
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    var o = n(4),
        i = r(o),
        s = n(1);
    e.exports = function(e, t) {
        return function(n, r, o) {
            return n.auth0.users.get({
                id: n.params.id
            }).then(function(r) {
                if (!r) return i["default"].reject(new s.NotFoundError("User not found: " + n.params.id));
                var o = {
                    request: {
                        user: n.user
                    },
                    payload: {
                        user: r,
                        action: e
                    }
                };
                return t.execute("access", o)
            }).then(o)["catch"](o)
        }
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(80),
        i = r(o),
        s = n(81),
        u = r(s),
        a = n(4),
        c = r(a),
        l = n(120),
        f = r(l),
        d = n(18),
        p = r(d),
        h = n(1),
        g = n(8),
        v = r(g),
        m = n(64),
        y = r(m),
        x = function() {
            function e(t) {
                var n = this,
                    r = arguments.length <= 1 || void 0 === arguments[1] ? 1e4 : arguments[1];
                if ((0, i["default"])(this, e), null === t || void 0 === t) throw new h.ArgumentError("Must provide a storage object.");
                this.log = v["default"].debug.bind(v["default"]), this.storage = t, this.getCached = c["default"].promisify((0, p["default"])({
                    load: function(e, t) {
                        n.get(e).then(function(e) {
                            return t(null, e), null
                        })["catch"](t)
                    },
                    hash: function(e) {
                        return e
                    },
                    max: 100,
                    maxAge: r
                }))
            }
            return (0, u["default"])(e, [{
                key: "get",
                value: function(e) {
                    return this.storage.read().then(function(t) {
                        return t && t.scripts ? t.scripts[e] : null
                    })
                }
            }, {
                key: "save",
                value: function(e, t) {
                    var n = this;
                    return this.storage.read().then(function(n) {
                        return n.scripts || (n.scripts = {}), n.scripts[e] = t, n
                    }).then(function(e) {
                        return n.storage.write(e)
                    })
                }
            }, {
                key: "execute",
                value: function(e, t) {
                    var n = this;
                    return this.getCached(e).then(function(r) {
                        return r ? new c["default"](function(o, i) {
                            try {
                                var s = (0, f["default"])(r);
                                t.log = n.log, s(t, function(t, n) {
                                    t ? i((0, y["default"])(t, e)) : o(n)
                                })
                            } catch (u) {
                                i((0, y["default"])(u, e))
                            }
                        }) : null
                    })
                }
            }]), e
        }();
    t["default"] = x
}, function(e, t, n) {
    "use strict";

    function r(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t["default"] = e, t
    }

    function o(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(3),
        s = n(6),
        u = n(11),
        a = n(7),
        c = o(a),
        l = n(9),
        f = r(l),
        d = n(68),
        p = o(d),
        h = n(70),
        g = o(h),
        v = n(71),
        m = o(v),
        y = n(76),
        x = o(y),
        E = n(74),
        k = o(E),
        w = n(77),
        _ = o(w);
    t["default"] = function(e) {
        var t = new p["default"](e),
            n = s.middlewares.managementApiClient({
                domain: (0, c["default"])("AUTH0_DOMAIN"),
                clientId: (0, c["default"])("AUTH0_CLIENT_ID"),
                clientSecret: (0, c["default"])("AUTH0_CLIENT_SECRET")
            }),
            r = (0, i.Router)();
        return r.use(s.middlewares.authenticateUser((0, c["default"])("AUTH0_DOMAIN"), (0, c["default"])("EXTENSION_CLIENT_ID"))), r.use(u.getUserAccessLevel), r.use((0, u.hasAccessLevel)(f.USER_ACCESS_LEVEL)), r.use("/applications", n, (0, g["default"])()), r.use("/connections", n, (0, m["default"])(t)), r.use("/scripts", (0, u.hasAccessLevel)(f.ADMIN_ACCESS_LEVEL), (0, x["default"])(e, t)), r.use("/users", n, (0, _["default"])(e, t)), r.use("/logs", n, (0, k["default"])(t)), r.get("/settings", function(e, n, r) {
            var o = {
                request: {
                    user: e.user
                }
            };
            t.execute("settings", o).then(function(e) {
                return n.json({
                    settings: e || {}
                })
            })["catch"](r)
        }), r.get("/me", function(e, n, r) {
            var o = {
                request: {
                    user: e.user
                }
            };
            t.execute("memberships", o).then(function(t) {
                return n.json({
                    memberships: t || [],
                    role: e.user.role || 0
                })
            })["catch"](r)
        }), r
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(5),
        i = r(o),
        s = n(3);
    t["default"] = function() {
        var e = (0, s.Router)();
        return e.get("/", function(e, t, n) {
            e.auth0.clients.getAll({
                fields: "client_id,name,callbacks,global"
            }).then(function(e) {
                return i["default"].chain(e).filter({
                    global: !1
                }).sortBy(function(e) {
                    return e.name.toLowerCase()
                }).value()
            }).then(function(e) {
                return t.json(e)
            })["catch"](n)
        }), e
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(5),
        i = r(o),
        s = n(3);
    t["default"] = function(e) {
        var t = (0, s.Router)();
        return t.get("/", function(t, n, r) {
            t.auth0.connections.getAll({
                fields: "id,name,strategy,enabled_clients,options"
            }).then(function(n) {
                var r = {
                    request: {
                        user: t.user
                    }
                };
                return e.execute("settings", r).then(function(e) {
                    var t = i["default"].chain(n).filter(function(e) {
                        return "auth0" === e.strategy
                    }).sortBy(function(e) {
                        return e.name.toLowerCase()
                    }).value();
                    return e && e.connections && Array.isArray(e.connections) && e.connections.length && (t = t.filter(function(t) {
                        return e.connections.indexOf(t.name) >= 0
                    })), t
                })
            }).then(function(e) {
                return n.json(e)
            })["catch"](r)
        }), t
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(3),
        i = n(7),
        s = r(i),
        u = n(8),
        a = r(u),
        c = n(6);
    t["default"] = function() {
        var e = c.middlewares.validateHookToken((0, s["default"])("AUTH0_DOMAIN"), (0, s["default"])("WT_URL"), (0, s["default"])("EXTENSION_SECRET")),
            t = (0, o.Router)();
        return t.use("/on-uninstall", e("/.extensions/on-uninstall")), t.use(c.middlewares.managementApiClient({
            domain: (0, s["default"])("AUTH0_DOMAIN"),
            clientId: (0, s["default"])("AUTH0_CLIENT_ID"),
            clientSecret: (0, s["default"])("AUTH0_CLIENT_SECRET")
        })), t["delete"]("/on-uninstall", function(e, t) {
            a["default"].debug("Uninstall running..."), e.auth0.clients["delete"]({
                client_id: (0, s["default"])("AUTH0_CLIENT_ID")
            }).then(function() {
                a["default"].debug("Deleted client: " + (0, s["default"])("AUTH0_CLIENT_ID")), t.sendStatus(204)
            })["catch"](function(e) {
                a["default"].debug("Error deleting client: " + (0, s["default"])("AUTH0_CLIENT_ID")), a["default"].error(e), t.sendStatus(204)
            })
        }), t
    }
}, function(e, t, n) {
    (function(e) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(82),
            i = r(o),
            s = n(33),
            u = r(s),
            a = n(122),
            c = r(a),
            l = n(36),
            f = r(l),
            d = n(6),
            p = n(7),
            h = r(p);
        t["default"] = function() {
            var t = '\n  <!DOCTYPE html>\n  <html lang="en">\n  <head>\n    <title><%= config.TITLE %></title>\n    <meta charset="UTF-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <link rel="shortcut icon" href="https://cdn.auth0.com/styleguide/4.6.13/lib/logos/img/favicon.png">\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <link rel="stylesheet" type="text/css" href="https://cdn.auth0.com/styles/zocial.min.css" />\n    <link rel="stylesheet" type="text/css" href="https://cdn.auth0.com/manage/v0.3.1672/css/index.min.css" />\n    <link rel="stylesheet" type="text/css" href="https://cdn.auth0.com/styleguide/4.6.13/index.min.css" />\n    <% if (assets.style) { %><link rel="stylesheet" type="text/css" href="/app/<%= assets.style %>" /><% } %>\n    <% if (assets.version) { %><link rel="stylesheet" type="text/css" href="//cdn.auth0.com/extensions/auth0-delegated-admin/assets/auth0-delegated-admin.ui.<%= assets.version %>.css" /><% } %>\n    <% if (assets.customCss) { %><link rel="stylesheet" type="text/css" href="<%= assets.customCss %>" /><% } %>\n  </head>\n  <body>\n    <div id="app"></div>\n    <script type="text/javascript" src="//cdn.auth0.com/js/lock-9.2.min.js"></script>\n    <script type="text/javascript" src="//cdn.auth0.com/manage/v0.3.1672/js/bundle.js"></script>\n    <script type="text/javascript">window.config = <%- JSON.stringify(config) %>;</script>\n    <% if (assets.vendors) { %><script type="text/javascript" src="/app/<%= assets.vendors %>"></script><% } %>\n    <% if (assets.app) { %><script type="text/javascript" src="/app/<%= assets.app %>"></script><% } %>\n    <% if (assets.version) { %>\n    <script type="text/javascript" src="//cdn.auth0.com/extensions/auth0-delegated-admin/assets/auth0-delegated-admin.ui.vendors.<%= assets.version %>.js"></script>\n    <script type="text/javascript" src="//cdn.auth0.com/extensions/auth0-delegated-admin/assets/auth0-delegated-admin.ui.<%= assets.version %>.js"></script>\n    <% } %>\n  </body>\n  </html>\n  ';
            return function(n, r, o) {
                if (0 === n.url.indexOf("/api")) return o();
                var s = {
                        AUTH0_DOMAIN: (0, h["default"])("AUTH0_DOMAIN"),
                        AUTH0_CLIENT_ID: (0, h["default"])("EXTENSION_CLIENT_ID"),
                        BASE_URL: d.urlHelpers.getBaseUrl(n),
                        BASE_PATH: d.urlHelpers.getBasePath(n),
                        TITLE: (0, h["default"])("TITLE")
                    },
                    a = (0, h["default"])("CLIENT_VERSION");
                return a ? r.send(c["default"].render(t, {
                    config: s,
                    assets: {
                        customCss: (0, h["default"])("CUSTOM_CSS"),
                        version: a
                    }
                })) : u["default"].readFile(f["default"].join(e, "../../dist/manifest.json"), "utf8", function(e, n) {
                    var o = {
                        config: s,
                        assets: {
                            customCss: (0, h["default"])("CUSTOM_CSS"),
                            app: "bundle.js"
                        }
                    };
                    !e && n && (o.assets = (0, i["default"])({
                        customCss: (0, h["default"])("CUSTOM_CSS")
                    }, JSON.parse(n))), r.send(c["default"].render(t, o))
                })
            }
        }
    }).call(t, "/")
}, function(e, t, n) {
    "use strict";

    function r(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t["default"] = e, t
    }

    function o(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(4),
        s = o(i),
        u = n(3),
        a = n(1),
        c = n(11),
        l = n(9),
        f = r(l);
    t["default"] = function(e) {
        var t = (0, u.Router)();
        return t.get("/", (0, c.hasAccessLevel)(f.ADMIN_ACCESS_LEVEL), function(e, t, n) {
            e.auth0.logs.getAll({
                q: "NOT type: sapi AND NOT type:fapi",
                include_totals: !0,
                sort: "date:-1",
                per_page: 20,
                page: e.query.page || 0,
                fields: "type,date,client_name,user_name,description,connection"
            }).then(function(e) {
                return t.json(e)
            })["catch"](n)
        }), t.get("/:id", function(t, n, r) {
            t.auth0.logs.get({
                id: t.params.id
            }).then(function(n) {
                return !n || "fapi" !== n.type && "sapi" !== n.type ? t.user.role === f.ADMIN_ACCESS_LEVEL ? n : t.auth0.users.get({
                    id: n.user_id
                }).then(function(r) {
                    if (!r) throw new a.NotFoundError("User not found: " + t.params.id);
                    var o = {
                        request: {
                            user: t.user
                        },
                        payload: {
                            user: r
                        }
                    };
                    return e.execute("access", o).then(function() {
                        return n
                    })
                }) : s["default"].reject(new Error("Invalid log record."))
            }).then(function(e) {
                return n.json({
                    log: e
                })
            })["catch"](r)
        }), t
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(3),
        i = r(o),
        s = n(110),
        u = r(s);
    t["default"] = function() {
        var e = i["default"].Router();
        return e.get("/", function(e, t) {
            t.status(200).send(u["default"])
        }), e
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t["default"] = e, t
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(3),
        i = n(1),
        s = n(9),
        u = r(s);
    t["default"] = function(e, t) {
        var n = (0, o.Router)();
        return n.get("/:name", function(e, n, r) {
            return u.VALID_SCRIPTS.indexOf(e.params.name) < 0 ? r(new i.ValidationError("Invalid script name: " + e.params.name)) : t.get(e.params.name).then(function(e) {
                return n.json({
                    script: e
                })
            })["catch"](r)
        }), n.post("/:name", function(e, n, r) {
            return u.VALID_SCRIPTS.indexOf(e.params.name) < 0 ? r(new i.ValidationError("Invalid script name: " + e.params.name)) : t.save(e.params.name, e.body.script).then(function() {
                return n.status(200).send()
            })["catch"](r)
        }), n
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(32),
        i = r(o),
        s = n(37),
        u = r(s),
        a = n(4),
        c = r(a),
        l = n(3),
        f = n(1),
        d = n(8),
        p = (r(d), n(7)),
        h = r(p),
        g = n(11);
    t["default"] = function(e, t) {
        var n = (0, l.Router)();
        return n.post("/", function(e, n, r) {
            if (!e.body.email || 0 === e.body.email.length) return r(new f.ValidationError("The email address is required."));
            if (e.body.password !== e.body.repeatPassword) return r(new f.ValidationError("The passwords do not match."));
            var o = {
                request: {
                    user: e.user
                },
                payload: {
                    email: e.body.email,
                    username: e.body.username,
                    connection: e.body.connection,
                    memberships: e.body.memberships,
                    password: e.body.password
                }
            };
            return t.execute("create", o).then(function(t) {
                return e.auth0.users.create(t || o.payload)
            }).then(function() {
                return n.status(201).send()
            })["catch"](r)
        }), n.get("/", function(e, n, r) {
            var o = {
                request: {
                    user: e.user
                },
                payload: {
                    search: e.query.search
                }
            };
            t.execute("filter", o).then(function(t) {
                var n = {
                    sort: "last_login:-1",
                    q: e.query.search && t ? "(" + e.query.search + ") AND " + t : e.query.search || t,
                    per_page: e.query.per_page || 100,
                    page: e.query.page || 0,
                    include_totals: !0,
                    fields: "user_id,name,email,identities,picture,last_login,logins_count,multifactor,blocked,app_metadata",
                    search_engine: "v2"
                };
                return e.auth0.users.getAll(n)
            }).then(function(n) {
                return c["default"].map(n.users, function(n) {
                    return t.execute("access", {
                        request: {
                            user: e.user
                        },
                        payload: {
                            user: n,
                            action: "read:user"
                        }
                    })
                }).then(function() {
                    return n
                })
            }).then(function(e) {
                return n.json(e)
            })["catch"](r)
        }), n.get("/:id", (0, g.verifyUserAccess)("read:user", t), function(e, n, r) {
            e.auth0.users.get({
                id: e.params.id
            }).then(function(e) {
                var n = {
                    request: {
                        user: e
                    }
                };
                return t.execute("memberships", n).then(function(t) {
                    return {
                        user: e,
                        memberships: t
                    }
                })
            }).then(function(e) {
                return n.json(e)
            })["catch"](r)
        }), n["delete"]("/:id", (0, g.verifyUserAccess)("delete:user", t), function(e, t, n) {
            e.auth0.users["delete"]({
                id: e.params.id
            }).then(function() {
                return t.sendStatus(204)
            })["catch"](n)
        }), n.post("/:id/password-reset", (0, g.verifyUserAccess)("reset:password", t), function(e, t, n) {
            var r = new i["default"].AuthenticationClient({
                domain: (0, h["default"])("AUTH0_DOMAIN"),
                clientId: (0, h["default"])("AUTH0_CLIENT_ID")
            });
            e.auth0.users.get({
                id: e.params.id,
                fields: "email"
            }).then(function(t) {
                return {
                    email: t.email,
                    connection: e.body.connection,
                    client_id: e.body.clientId
                }
            }).then(function(e) {
                return r.requestChangePasswordEmail(e)
            }).then(function() {
                return t.sendStatus(204)
            })["catch"](n)
        }), n.put("/:id/change-password", (0, g.verifyUserAccess)("change:password", t), function(e, t, n) {
            return e.body.password !== e.body.confirmPassword ? n(new f.ArgumentError("Passwords don't match")) : e.auth0.users.update({
                id: e.params.id
            }, {
                password: e.body.password,
                connection: e.body.connection,
                verify_password: !1
            }).then(function() {
                return t.sendStatus(204)
            })["catch"](n)
        }), n.put("/:id/change-username", (0, g.verifyUserAccess)("change:username", t), function(e, t, n) {
            return e.auth0.users.update({
                id: e.params.id
            }, {
                username: e.body.username
            }).then(function() {
                return t.sendStatus(204)
            })["catch"](n)
        }), n.put("/:id/change-email", (0, g.verifyUserAccess)("change:email", t), function(e, t, n) {
            return e.auth0.users.update({
                id: e.params.id
            }, {
                email: e.body.email
            }).then(function() {
                return t.sendStatus(204)
            })["catch"](n)
        }), n.get("/:id/devices", (0, g.verifyUserAccess)("read:devices", t), function(e, t, n) {
            e.auth0.deviceCredentials.getAll({
                user_id: e.params.id
            }).then(function(e) {
                return t.json({
                    devices: e
                })
            })["catch"](n)
        }), n.get("/:id/logs", (0, g.verifyUserAccess)("read:logs", t), function(e, t, n) {
            f.managementApi.getAccessTokenCached((0, h["default"])("AUTH0_DOMAIN"), (0, h["default"])("AUTH0_CLIENT_ID"), (0, h["default"])("AUTH0_CLIENT_SECRET")).then(function(r) {
                var o = {
                    uri: "https://" + (0, h["default"])("AUTH0_DOMAIN") + "/api/v2/users/" + encodeURIComponent(e.params.id) + "/logs",
                    qs: {
                        include_totals: !0
                    },
                    headers: {
                        authorization: "Bearer " + r
                    },
                    json: !0
                };
                return u["default"].get(o, function(e, r, o) {
                    return e ? n(e) : r.statusCode < 200 || r.statusCode >= 300 ? n(new Error(o && (o.error || o.message || o.code) || "Request Error: " + r.statusCode)) : t.json(o)
                }), u["default"].get(o)
            })["catch"](n)
        }), n["delete"]("/:id/multifactor/:provider", (0, g.verifyUserAccess)("remove:multifactor-provider", t), function(e, t, n) {
            e.auth0.users.deleteMultifactorProvider({
                id: e.params.id,
                provider: e.params.provider
            }).then(function() {
                return t.sendStatus(204)
            })["catch"](n)
        }), n.put("/:id/block", (0, g.verifyUserAccess)("block:user", t), function(e, t, n) {
            e.auth0.users.update({
                id: e.params.id
            }, {
                blocked: !0
            }).then(function() {
                return t.sendStatus(204)
            })["catch"](n)
        }), n.put("/:id/unblock", (0, g.verifyUserAccess)("unblock:user", t), function(e, t, n) {
            e.auth0.users.update({
                id: e.params.id
            }, {
                blocked: !1
            }).then(function() {
                return t.sendStatus(204)
            })["catch"](n)
        }), n.post("/:id/send-verification-email", (0, g.verifyUserAccess)("send:verification-email", t), function(e, t, n) {
            var r = {
                user_id: e.params.id
            };
            e.auth0.jobs.verifyEmail(r).then(function() {
                return t.status(204).send()
            })["catch"](n)
        }), n
    }
}, function(e, t, n) {
    e.exports = {
        "default": n(83),
        __esModule: !0
    }
}, function(e, t, n) {
    e.exports = {
        "default": n(84),
        __esModule: !0
    }
}, function(e, t) {
    "use strict";
    t.__esModule = !0, t["default"] = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    t.__esModule = !0;
    var o = n(79),
        i = r(o);
    t["default"] = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0, i["default"])(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }()
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    t.__esModule = !0;
    var o = n(78),
        i = r(o);
    t["default"] = i["default"] || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
}, function(e, t, n) {
    n(108), e.exports = n(12).Object.assign
}, function(e, t, n) {
    n(109);
    var r = n(12).Object;
    e.exports = function(e, t, n) {
        return r.defineProperty(e, t, n)
    }
}, function(e, t) {
    e.exports = function(e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e
    }
}, function(e, t, n) {
    var r = n(15);
    e.exports = function(e) {
        if (!r(e)) throw TypeError(e + " is not an object!");
        return e
    }
}, function(e, t, n) {
    var r = n(26),
        o = n(104),
        i = n(103);
    e.exports = function(e) {
        return function(t, n, s) {
            var u, a = r(t),
                c = o(a.length),
                l = i(s, c);
            if (e && n != n) {
                for (; c > l;)
                    if (u = a[l++], u != u) return !0
            } else
                for (; c > l; l++)
                    if ((e || l in a) && a[l] === n) return e || l || 0;
            return !e && -1
        }
    }
}, function(e, t) {
    var n = {}.toString;
    e.exports = function(e) {
        return n.call(e).slice(8, -1)
    }
}, function(e, t, n) {
    var r = n(85);
    e.exports = function(e, t, n) {
        if (r(e), void 0 === t) return e;
        switch (n) {
            case 1:
                return function(n) {
                    return e.call(t, n)
                };
            case 2:
                return function(n, r) {
                    return e.call(t, n, r)
                };
            case 3:
                return function(n, r, o) {
                    return e.call(t, n, r, o)
                }
        }
        return function() {
            return e.apply(t, arguments)
        }
    }
}, function(e, t, n) {
    var r = n(15),
        o = n(14).document,
        i = r(o) && r(o.createElement);
    e.exports = function(e) {
        return i ? o.createElement(e) : {}
    }
}, function(e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function(e, t) {
        return n.call(e, t)
    }
}, function(e, t, n) {
    var r = n(24),
        o = n(100);
    e.exports = n(10) ? function(e, t, n) {
        return r.f(e, t, o(1, n))
    } : function(e, t, n) {
        return e[t] = n, e
    }
}, function(e, t, n) {
    e.exports = !n(10) && !n(13)(function() {
        return 7 != Object.defineProperty(n(90)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(e, t, n) {
    "use strict";
    var r = n(98),
        o = n(96),
        i = n(99),
        s = n(105),
        u = n(23),
        a = Object.assign;
    e.exports = !a || n(13)(function() {
        var e = {},
            t = {},
            n = Symbol(),
            r = "abcdefghijklmnopqrst";
        return e[n] = 7, r.split("").forEach(function(e) {
            t[e] = e
        }), 7 != a({}, e)[n] || Object.keys(a({}, t)).join("") != r
    }) ? function(e, t) {
        for (var n = s(e), a = arguments.length, c = 1, l = o.f, f = i.f; a > c;)
            for (var d, p = u(arguments[c++]), h = l ? r(p).concat(l(p)) : r(p), g = h.length, v = 0; g > v;) f.call(p, d = h[v++]) && (n[d] = p[d]);
        return n
    } : a
}, function(e, t) {
    t.f = Object.getOwnPropertySymbols
}, function(e, t, n) {
    var r = n(92),
        o = n(26),
        i = n(87)(!1),
        s = n(101)("IE_PROTO");
    e.exports = function(e, t) {
        var n, u = o(e),
            a = 0,
            c = [];
        for (n in u) n != s && r(u, n) && c.push(n);
        for (; t.length > a;) r(u, n = t[a++]) && (~i(c, n) || c.push(n));
        return c
    }
}, function(e, t, n) {
    var r = n(97),
        o = n(91);
    e.exports = Object.keys || function(e) {
        return r(e, o)
    }
}, function(e, t) {
    t.f = {}.propertyIsEnumerable
}, function(e, t) {
    e.exports = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
}, function(e, t, n) {
    var r = n(102)("keys"),
        o = n(107);
    e.exports = function(e) {
        return r[e] || (r[e] = o(e))
    }
}, function(e, t, n) {
    var r = n(14),
        o = "__core-js_shared__",
        i = r[o] || (r[o] = {});
    e.exports = function(e) {
        return i[e] || (i[e] = {})
    }
}, function(e, t, n) {
    var r = n(25),
        o = Math.max,
        i = Math.min;
    e.exports = function(e, t) {
        return e = r(e), e < 0 ? o(e + t, 0) : i(e, t)
    }
}, function(e, t, n) {
    var r = n(25),
        o = Math.min;
    e.exports = function(e) {
        return e > 0 ? o(r(e), 9007199254740991) : 0
    }
}, function(e, t, n) {
    var r = n(21);
    e.exports = function(e) {
        return Object(r(e))
    }
}, function(e, t, n) {
    var r = n(15);
    e.exports = function(e, t) {
        if (!r(e)) return e;
        var n, o;
        if (t && "function" == typeof(n = e.toString) && !r(o = n.call(e))) return o;
        if ("function" == typeof(n = e.valueOf) && !r(o = n.call(e))) return o;
        if (!t && "function" == typeof(n = e.toString) && !r(o = n.call(e))) return o;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(e, t) {
    var n = 0,
        r = Math.random();
    e.exports = function(e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
    }
}, function(e, t, n) {
    var r = n(22);
    r(r.S + r.F, "Object", {
        assign: n(95)
    })
}, function(e, t, n) {
    var r = n(22);
    r(r.S + r.F * !n(10), "Object", {
        defineProperty: n(24).f
    })
}, function(e, t) {
    e.exports = {
        title: "Delegated Administration Dashboard",
        name: "auth0-delegated-admin",
        version: "2.0.0",
        author: "auth0",
        description: "This extension allows non-dashboard administrators to manage (a subset of) users.",
        type: "application",
        logoUrl: "https://cdn.auth0.com/extensions/auth0-delegated-admin/assets/logo.svg",
        initialUrlPath: "/",
        docsUrl: "https://auth0.com/docs/extensions/delegated-admin",
        repository: "https://github.com/auth0-extensions/auth0-delegated-administration-extension",
        keywords: ["auth0", "extension"],
        auth0: {
            createClient: !0,
            onUninstallPath: "/.extensions/on-uninstall",
            scopes: "read:clients delete:clients read:connections read:users update:users delete:users create:users read:logs read:device_credentials update:device_credentials delete:device_credentials"
        },
        secrets: {
            EXTENSION_CLIENT_ID: {
                description: "Client ID of the application you created in the Auth0 Dashboard",
                required: !0
            },
            TITLE: {
                description: "Custom title for the dashboard",
                example: "Fabrikam User Management",
                required: !1
            },
            CUSTOM_CSS: {
                description: "A CSS file containing custom styles for the extension",
                example: "https://cdn.fabrikam.com/static/extensions/theme/fabrikam.css",
                required: !1
            }
        }
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t["default"] = e, t
    }
    var o = n(16),
        i = n(17),
        s = r(i),
        u = n(113),
        a = n(112);
    e.exports = function(e) {
        return new o.JwksClient(e)
    }, e.exports.ArgumentError = s.ArgumentError, e.exports.JwksError = s.JwksError, e.exports.JwksRateLimitError = s.JwksRateLimitError, e.exports.SigningKeyNotFoundError = s.SigningKeyNotFoundError, e.exports.expressJwtSecret = a.expressJwtSecret, e.exports.hapiJwt2Key = u.hapiJwt2Key
}, function(e, t, n) {
    "use strict";
    var r = n(17),
        o = n(16),
        i = function(e, t) {
            return e && "SigningKeyNotFoundError" === e.name ? t(null) : e ? t(e) : void 0
        };
    e.exports.expressJwtSecret = function(e) {
        if (null === e || void 0 === e) throw new r.ArgumentError("An options object must be provided when initializing expressJwtSecret");
        var t = new o.JwksClient(e),
            n = e.handleSigningKeyError || i;
        return function(e, r, o, i) {
            return r && "RS256" === r.alg ? void t.getSigningKey(r.kid, function(e, t) {
                return e ? n(e, function(e) {
                    return i(e, null)
                }) : i(null, t.publicKey || t.rsaPublicKey)
            }) : i(null, null)
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = n(17),
        o = n(16),
        i = function(e, t) {
            return e && "SigningKeyNotFoundError" === e.name ? t(null, null, null) : e ? t(e, null, null) : void 0
        };
    e.exports.hapiJwt2Key = function(e) {
        if (null === e || void 0 === e) throw new r.ArgumentError("An options object must be provided when initializing expressJwtSecret");
        var t = new o.JwksClient(e),
            n = e.handleSigningKeyError || i;
        return function(e, r) {
            return e && e.header ? "RS256" !== e.header.alg ? r(null, null, null) : void t.getSigningKey(e.header.kid, function(e, t) {
                return e ? n(e, function(e) {
                    return r(e, null, null)
                }) : r(null, t.publicKey || t.rsaPublicKey, t)
            }) : r(null, null, null)
        }
    }
}, function(e, t) {
    "use strict";

    function n(e) {
        return e = e.match(/.{1,64}/g).join("\n"), e = "-----BEGIN CERTIFICATE-----\n" + e + "\n-----END CERTIFICATE-----\n"
    }

    function r(e) {
        var t = e[0];
        return t < "0" || t > "7" ? "00" + e : e
    }

    function o(e) {
        var t = e.toString(16);
        return t.length % 2 ? "0" + t : t
    }

    function i(e) {
        if (e <= 127) return o(e);
        var t = o(e),
            n = 128 + t.length / 2;
        return o(n) + t
    }

    function s(e, t) {
        var n = new Buffer(e, "base64"),
            o = new Buffer(t, "base64"),
            s = r(n.toString("hex")),
            u = r(o.toString("hex")),
            a = s.length / 2,
            c = u.length / 2,
            l = i(a),
            f = i(c),
            d = "30" + i(a + c + l.length / 2 + f.length / 2 + 2) + "02" + l + s + "02" + f + u,
            p = new Buffer(d, "hex").toString("base64"),
            h = "-----BEGIN RSA PUBLIC KEY-----\n";
        return h += "" + p.match(/.{1,64}/g).join("\n"), h += "\n-----END RSA PUBLIC KEY-----\n"
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.certToPEM = n, t.rsaPublicKeyToPEM = s
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t["default"] = function(e) {
        var t = arguments.length <= 1 || void 0 === arguments[1] ? options : arguments[1],
            n = t.cacheMaxEntries,
            r = void 0 === n ? 5 : n,
            o = t.cacheMaxAge,
            s = void 0 === o ? (0, i["default"])("10h") : o,
            a = (0, u["default"])("jwks"),
            l = e.getSigningKey;
        return a("Configured caching of singing keys. Max: " + r + " / Age: " + s), (0, c["default"])({
            load: function(e, t) {
                l(e, function(n, r) {
                    return n ? t(n) : (a("Caching signing key for '" + e + "':", r), t(null, r))
                })
            },
            hash: function(e) {
                return e
            },
            maxAge: s,
            max: r
        })
    };
    var o = n(35),
        i = r(o),
        s = n(19),
        u = r(s),
        a = n(18),
        c = r(a)
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.rateLimitSigningKey = t.cacheSigningKey = void 0;
    var o = n(115),
        i = r(o),
        s = n(117),
        u = r(s);
    t.cacheSigningKey = i["default"], t.rateLimitSigningKey = u["default"]
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t["default"] = function(e) {
        var t = arguments.length <= 1 || void 0 === arguments[1] ? options : arguments[1],
            n = t.jwksRequestsPerMinute,
            r = void 0 === n ? 10 : n,
            o = (0, i["default"])("jwks"),
            u = e.getSigningKey,
            c = new s.RateLimiter(r, "minute", (!0));
        return o("Configured rate limiting to JWKS endpoint at " + r + "/minute"),
            function(e, t) {
                c.removeTokens(1, function(n, r) {
                    return n ? t(n) : (o("Requests to the JWKS endpoint available for the next minute:", r), r < 0 ? (o("Too many requests to the JWKS endpoint"), t(new a["default"]("Too many requests to the JWKS endpoint"))) : u(e, t))
                })
            }
    };
    var o = n(19),
        i = r(o),
        s = n(118),
        u = n(29),
        a = r(u)
}, function(e, t, n) {
    t.RateLimiter = n(119), t.TokenBucket = n(31)
}, function(e, t, n) {
    var r = n(31),
        o = function(e, t, n) {
            this.tokenBucket = new r(e, e, t, null), this.tokenBucket.content = e, this.curIntervalStart = +new Date, this.tokensThisInterval = 0, this.fireImmediately = n
        };
    o.prototype = {
        tokenBucket: null,
        curIntervalStart: 0,
        tokensThisInterval: 0,
        fireImmediately: !1,
        removeTokens: function(e, t) {
            function n(n, o) {
                return n ? t(n, null) : (r.tokensThisInterval += e, void t(null, o))
            }
            if (e > this.tokenBucket.bucketSize) return process.nextTick(t.bind(null, "Requested tokens " + e + " exceeds maximum tokens per interval " + this.tokenBucket.bucketSize, null)), !1;
            var r = this,
                o = Date.now();
            if (o - this.curIntervalStart >= this.tokenBucket.interval && (this.curIntervalStart = o, this.tokensThisInterval = 0), e > this.tokenBucket.tokensPerInterval - this.tokensThisInterval) {
                if (this.fireImmediately) process.nextTick(t.bind(null, null, -1));
                else {
                    var i = Math.ceil(this.curIntervalStart + this.tokenBucket.interval - o);
                    setTimeout(function() {
                        r.tokenBucket.removeTokens(e, n)
                    }, i)
                }
                return !1
            }
            return this.tokenBucket.removeTokens(e, n)
        },
        tryRemoveTokens: function(e) {
            if (e > this.tokenBucket.bucketSize) return !1;
            var t = Date.now();
            return t - this.curIntervalStart >= this.tokenBucket.interval && (this.curIntervalStart = t, this.tokensThisInterval = 0), !(e > this.tokenBucket.tokensPerInterval - this.tokensThisInterval) && this.tokenBucket.tryRemoveTokens(e)
        },
        getTokensRemaining: function() {
            return this.tokenBucket.drip(), this.tokenBucket.content
        }
    }, e.exports = o
}, function(e, t, n) {
    var r = n(129);
    e.exports = function(e, t, n) {
        var o = {},
            i = "SAFE_EVAL_" + Math.floor(1e6 * Math.random());
        return o[i] = {}, e = i + "=" + e, t && Object.keys(t).forEach(function(e) {
            o[e] = t[e]
        }), r.runInNewContext(e, o, n), o[i]
    }
}, function(e, t) {
    e.exports = require("body-parser")
}, function(e, t) {
    e.exports = require("ejs")
}, function(e, t) {
    e.exports = require("express-jwt")
}, function(e, t) {
    e.exports = require("lru-cache")
}, function(e, t) {
    e.exports = require("morgan")
}, function(e, t) {
    e.exports = require("node-uuid")
}, function(e, t) {
    e.exports = require("superagent")
}, function(e, t) {
    e.exports = require("url")
}, function(e, t) {
    e.exports = require("vm")
}, function(e, t) {
    e.exports = require("winston")
}]);