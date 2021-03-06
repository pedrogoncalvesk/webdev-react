window.v = function(t) {
    function e(r) {
        if (n[r]) return n[r].exports;
        var i = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports
    }
    var n = {};
    return e.m = t, e.c = n, e.d = function(t, n, r) {
        e.o(t, n) || Object.defineProperty(t, n, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, e.n = function(t) {
        var n = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return e.d(n, "a", n), n
    }, e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e(e.s = 37)
}([function(t, e, n) {
    "use strict";
    t.exports = n(45)
}, function(t, e, n) {
    "use strict";
    var r = function() {};
    t.exports = r
}, function(t, e, n) {
    t.exports = n(58)()
}, function(t, e, n) {
    "use strict";
    t.exports = function(t, e, n, r, i, o, a, s) {
        if (!t) {
            var u;
            if (void 0 === e) u = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
            else {
                var c = [n, r, i, o, a, s],
                    l = 0;
                (u = new Error(e.replace(/%s/g, function() {
                    return c[l++]
                }))).name = "Invariant Violation"
            }
            throw u.framesToPop = 1, u
        }
    }
}, function(t, e, n) {
    "use strict";
    e.__esModule = !0;
    e.addLeadingSlash = function(t) {
        return "/" === t.charAt(0) ? t : "/" + t
    }, e.stripLeadingSlash = function(t) {
        return "/" === t.charAt(0) ? t.substr(1) : t
    };
    var r = e.hasBasename = function(t, e) {
        return new RegExp("^" + e + "(\\/|\\?|#|$)", "i").test(t)
    };
    e.stripBasename = function(t, e) {
        return r(t, e) ? t.substr(e.length) : t
    }, e.stripTrailingSlash = function(t) {
        return "/" === t.charAt(t.length - 1) ? t.slice(0, -1) : t
    }, e.parsePath = function(t) {
        var e = t || "/",
            n = "",
            r = "",
            i = e.indexOf("#"); - 1 !== i && (r = e.substr(i), e = e.substr(0, i));
        var o = e.indexOf("?");
        return -1 !== o && (n = e.substr(o), e = e.substr(0, o)), {
            pathname: e,
            search: "?" === n ? "" : n,
            hash: "#" === r ? "" : r
        }
    }, e.createPath = function(t) {
        var e = t.pathname,
            n = t.search,
            r = t.hash,
            i = e || "/";
        return n && "?" !== n && (i += "?" === n.charAt(0) ? n : "?" + n), r && "#" !== r && (i += "#" === r.charAt(0) ? r : "#" + r), i
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), n.d(e, "addLeadingSlash", function() {
        return r
    }), n.d(e, "stripLeadingSlash", function() {
        return i
    }), n.d(e, "hasBasename", function() {
        return o
    }), n.d(e, "stripBasename", function() {
        return a
    }), n.d(e, "stripTrailingSlash", function() {
        return s
    }), n.d(e, "parsePath", function() {
        return u
    }), n.d(e, "createPath", function() {
        return c
    });
    var r = function(t) {
            return "/" === t.charAt(0) ? t : "/" + t
        },
        i = function(t) {
            return "/" === t.charAt(0) ? t.substr(1) : t
        },
        o = function(t, e) {
            return new RegExp("^" + e + "(\\/|\\?|#|$)", "i").test(t)
        },
        a = function(t, e) {
            return o(t, e) ? t.substr(e.length) : t
        },
        s = function(t) {
            return "/" === t.charAt(t.length - 1) ? t.slice(0, -1) : t
        },
        u = function(t) {
            var e = t || "/",
                n = "",
                r = "",
                i = e.indexOf("#"); - 1 !== i && (r = e.substr(i), e = e.substr(0, i));
            var o = e.indexOf("?");
            return -1 !== o && (n = e.substr(o), e = e.substr(0, o)), {
                pathname: e,
                search: "?" === n ? "" : n,
                hash: "#" === r ? "" : r
            }
        },
        c = function(t) {
            var e = t.pathname,
                n = t.search,
                r = t.hash,
                i = e || "/";
            return n && "?" !== n && (i += "?" === n.charAt(0) ? n : "?" + n), r && "#" !== r && (i += "#" === r.charAt(0) ? r : "#" + r), i
        }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return function() {
            return t
        }
    }
    var i = function() {};
    i.thatReturns = r, i.thatReturnsFalse = r(!1), i.thatReturnsTrue = r(!0), i.thatReturnsNull = r(null), i.thatReturnsThis = function() {
        return this
    }, i.thatReturnsArgument = function(t) {
        return t
    }, t.exports = i
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), n.d(e, "createLocation", function() {
        return s
    }), n.d(e, "locationsAreEqual", function() {
        return u
    });
    var r = n(30),
        i = n(31),
        o = n(5),
        a = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        },
        s = function(t, e, n, i) {
            var s = void 0;
            "string" == typeof t ? (s = Object(o.parsePath)(t)).state = e : (void 0 === (s = a({}, t)).pathname && (s.pathname = ""), s.search ? "?" !== s.search.charAt(0) && (s.search = "?" + s.search) : s.search = "", s.hash ? "#" !== s.hash.charAt(0) && (s.hash = "#" + s.hash) : s.hash = "", void 0 !== e && void 0 === s.state && (s.state = e));
            try {
                s.pathname = decodeURI(s.pathname)
            } catch (t) {
                throw t instanceof URIError ? new URIError('Pathname "' + s.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.') : t
            }
            return n && (s.key = n), i ? s.pathname ? "/" !== s.pathname.charAt(0) && (s.pathname = Object(r.default)(s.pathname, i.pathname)) : s.pathname = i.pathname : s.pathname || (s.pathname = "/"), s
        },
        u = function(t, e) {
            return t.pathname === e.pathname && t.search === e.search && t.hash === e.hash && t.key === e.key && Object(i.default)(t.state, e.state)
        }
}, function(t, e, n) {
    "use strict";
    var r = function(t) {};
    t.exports = function(t, e, n, i, o, a, s, u) {
        if (r(e), !t) {
            var c;
            if (void 0 === e) c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
            else {
                var l = [n, i, o, a, s, u],
                    f = 0;
                (c = new Error(e.replace(/%s/g, function() {
                    return l[f++]
                }))).name = "Invariant Violation"
            }
            throw c.framesToPop = 1, c
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t) {
        "undefined" != typeof console && "function" == typeof console.error && console.error(t);
        try {
            throw new Error(t)
        } catch (t) {}
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(64),
        i = n(69),
        o = n(71),
        a = "[object Object]",
        s = Function.prototype,
        u = Object.prototype,
        c = s.toString,
        l = u.hasOwnProperty,
        f = c.call(Object);
    e.default = function(t) {
        if (!Object(o.default)(t) || Object(r.default)(t) != a) return !1;
        var e = Object(i.default)(t);
        if (null === e) return !0;
        var n = l.call(e, "constructor") && e.constructor;
        return "function" == typeof n && n instanceof n && c.call(n) == f
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.__esModule = !0, e.locationsAreEqual = e.createLocation = void 0;
    var i = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        },
        o = r(n(30)),
        a = r(n(31)),
        s = n(4);
    e.createLocation = function(t, e, n, r) {
        var a = void 0;
        "string" == typeof t ? (a = (0, s.parsePath)(t)).state = e : (void 0 === (a = i({}, t)).pathname && (a.pathname = ""), a.search ? "?" !== a.search.charAt(0) && (a.search = "?" + a.search) : a.search = "", a.hash ? "#" !== a.hash.charAt(0) && (a.hash = "#" + a.hash) : a.hash = "", void 0 !== e && void 0 === a.state && (a.state = e));
        try {
            a.pathname = decodeURI(a.pathname)
        } catch (t) {
            throw t instanceof URIError ? new URIError('Pathname "' + a.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.') : t
        }
        return n && (a.key = n), r ? a.pathname ? "/" !== a.pathname.charAt(0) && (a.pathname = (0, o.default)(a.pathname, r.pathname)) : a.pathname = r.pathname : a.pathname || (a.pathname = "/"), a
    }, e.locationsAreEqual = function(t, e) {
        return t.pathname === e.pathname && t.search === e.search && t.hash === e.hash && t.key === e.key && (0, a.default)(t.state, e.state)
    }
}, function(t, e, n) {
    "use strict";
    e.__esModule = !0;
    var r = function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }(n(1));
    e.default = function() {
        var t = null,
            e = [];
        return {
            setPrompt: function(e) {
                return (0, r.default)(null == t, "A history supports only one prompt at a time"), t = e,
                    function() {
                        t === e && (t = null)
                    }
            },
            confirmTransitionTo: function(e, n, i, o) {
                if (null != t) {
                    var a = "function" == typeof t ? t(e, n) : t;
                    "string" == typeof a ? "function" == typeof i ? i(a, o) : ((0, r.default)(!1, "A history needs a getUserConfirmation function in order to use a prompt message"), o(!0)) : o(!1 !== a)
                } else o(!0)
            },
            appendListener: function(t) {
                var n = !0,
                    r = function() {
                        n && t.apply(void 0, arguments)
                    };
                return e.push(r),
                    function() {
                        n = !1, e = e.filter(function(t) {
                            return t !== r
                        })
                    }
            },
            notifyListeners: function() {
                for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                e.forEach(function(t) {
                    return t.apply(void 0, n)
                })
            }
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(14);
    e.default = r.default
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = n(1),
        s = n.n(a),
        u = n(3),
        c = n.n(u),
        l = n(0),
        f = n.n(l),
        h = n(2),
        p = n.n(h),
        d = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        },
        m = function(t) {
            function e() {
                var n, o, a;
                r(this, e);
                for (var s = arguments.length, u = Array(s), c = 0; c < s; c++) u[c] = arguments[c];
                return n = o = i(this, t.call.apply(t, [this].concat(u))), o.state = {
                    match: o.computeMatch(o.props.history.location.pathname)
                }, a = n, i(o, a)
            }
            return o(e, t), e.prototype.getChildContext = function() {
                return {
                    router: d({}, this.context.router, {
                        history: this.props.history,
                        route: {
                            location: this.props.history.location,
                            match: this.state.match
                        }
                    })
                }
            }, e.prototype.computeMatch = function(t) {
                return {
                    path: "/",
                    url: "/",
                    params: {},
                    isExact: "/" === t
                }
            }, e.prototype.componentWillMount = function() {
                var t = this,
                    e = this.props,
                    n = e.children,
                    r = e.history;
                c()(null == n || 1 === f.a.Children.count(n), "A <Router> may have only one child element"), this.unlisten = r.listen(function() {
                    t.setState({
                        match: t.computeMatch(r.location.pathname)
                    })
                })
            }, e.prototype.componentWillReceiveProps = function(t) {
                s()(this.props.history === t.history, "You cannot change <Router history>")
            }, e.prototype.componentWillUnmount = function() {
                this.unlisten()
            }, e.prototype.render = function() {
                var t = this.props.children;
                return t ? f.a.Children.only(t) : null
            }, e
        }(f.a.Component);
    m.propTypes = {
        history: p.a.object.isRequired,
        children: p.a.node
    }, m.contextTypes = {
        router: p.a.object
    }, m.childContextTypes = {
        router: p.a.object.isRequired
    }, e.default = m
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(92),
        i = n.n(r),
        o = {},
        a = 0,
        s = function(t, e) {
            var n = "" + e.end + e.strict + e.sensitive,
                r = o[n] || (o[n] = {});
            if (r[t]) return r[t];
            var s = [],
                u = {
                    re: i()(t, s, e),
                    keys: s
                };
            return a < 1e4 && (r[t] = u, a++), u
        };
    e.default = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        "string" == typeof e && (e = {
            path: e
        });
        var n = e,
            r = n.path,
            i = void 0 === r ? "/" : r,
            o = n.exact,
            a = void 0 !== o && o,
            u = n.strict,
            c = void 0 !== u && u,
            l = n.sensitive,
            f = s(i, {
                end: a,
                strict: c,
                sensitive: void 0 !== l && l
            }),
            h = f.re,
            p = f.keys,
            d = h.exec(t);
        if (!d) return null;
        var m = d[0],
            v = d.slice(1),
            y = t === m;
        return a && !y ? null : {
            path: i,
            url: "/" === i && "" === m ? "/" : m,
            isExact: y,
            params: p.reduce(function(t, e, n) {
                return t[e.name] = v[n], t
            }, {})
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(1),
        i = n.n(r);
    e.default = function() {
        var t = null,
            e = [];
        return {
            setPrompt: function(e) {
                return i()(null == t, "A history supports only one prompt at a time"), t = e,
                    function() {
                        t === e && (t = null)
                    }
            },
            confirmTransitionTo: function(e, n, r, o) {
                if (null != t) {
                    var a = "function" == typeof t ? t(e, n) : t;
                    "string" == typeof a ? "function" == typeof r ? r(a, o) : (i()(!1, "A history needs a getUserConfirmation function in order to use a prompt message"), o(!0)) : o(!1 !== a)
                } else o(!0)
            },
            appendListener: function(t) {
                var n = !0,
                    r = function() {
                        n && t.apply(void 0, arguments)
                    };
                return e.push(r),
                    function() {
                        n = !1, e = e.filter(function(t) {
                            return t !== r
                        })
                    }
            },
            notifyListeners: function() {
                for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                e.forEach(function(t) {
                    return t.apply(void 0, n)
                })
            }
        }
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(t)
    }
    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */
    var i = Object.getOwnPropertySymbols,
        o = Object.prototype.hasOwnProperty,
        a = Object.prototype.propertyIsEnumerable;
    t.exports = function() {
        try {
            if (!Object.assign) return !1;
            var t = new String("abc");
            if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
            for (var e = {}, n = 0; n < 10; n++) e["_" + String.fromCharCode(n)] = n;
            if ("0123456789" !== Object.getOwnPropertyNames(e).map(function(t) {
                    return e[t]
                }).join("")) return !1;
            var r = {};
            return "abcdefghijklmnopqrst".split("").forEach(function(t) {
                r[t] = t
            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
        } catch (t) {
            return !1
        }
    }() ? Object.assign : function(t, e) {
        for (var n, s, u = r(t), c = 1; c < arguments.length; c++) {
            n = Object(arguments[c]);
            for (var l in n) o.call(n, l) && (u[l] = n[l]);
            if (i) {
                s = i(n);
                for (var f = 0; f < s.length; f++) a.call(n, s[f]) && (u[s[f]] = n[s[f]])
            }
        }
        return u
    }
}, function(t, e, n) {
    "use strict";
    var r = {};
    t.exports = r
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), n.d(e, "subscriptionShape", function() {
        return o
    }), n.d(e, "storeShape", function() {
        return a
    });
    var r = n(2),
        i = n.n(r),
        o = i.a.shape({
            trySubscribe: i.a.func.isRequired,
            tryUnsubscribe: i.a.func.isRequired,
            notifyNestedSubs: i.a.func.isRequired,
            isSubscribed: i.a.func.isRequired
        }),
        a = i.a.shape({
            subscribe: i.a.func.isRequired,
            dispatch: i.a.func.isRequired,
            getState: i.a.func.isRequired
        })
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function a(t, e) {
        var n = {};
        for (var r in t) e.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
        return n
    }

    function s() {}

    function u(t, e) {
        var n = {
            run: function(r) {
                try {
                    var i = t(e.getState(), r);
                    (i !== n.props || n.error) && (n.shouldComponentUpdate = !0, n.props = i, n.error = null)
                } catch (t) {
                    n.shouldComponentUpdate = !0, n.error = t
                }
            }
        };
        return n
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t) {
        var e, n, c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            f = c.getDisplayName,
            b = void 0 === f ? function(t) {
                return "ConnectAdvanced(" + t + ")"
            } : f,
            w = c.methodName,
            _ = void 0 === w ? "connectAdvanced" : w,
            E = c.renderCountProp,
            T = void 0 === E ? void 0 : E,
            S = c.shouldHandleStateChanges,
            P = void 0 === S || S,
            C = c.storeKey,
            O = void 0 === C ? "store" : C,
            k = c.withRef,
            x = void 0 !== k && k,
            I = a(c, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef"]),
            A = O + "Subscription",
            N = y++,
            M = (e = {}, e[O] = m.storeShape, e[A] = m.subscriptionShape, e),
            R = (n = {}, n[A] = m.subscriptionShape, n);
        return function(e) {
            h()("function" == typeof e, "You must pass a component to the function returned by connect. Instead received " + JSON.stringify(e));
            var n = e.displayName || e.name || "Component",
                a = b(n),
                c = v({}, I, {
                    getDisplayName: b,
                    methodName: _,
                    renderCountProp: T,
                    shouldHandleStateChanges: P,
                    storeKey: O,
                    withRef: x,
                    displayName: a,
                    wrappedComponentName: n,
                    WrappedComponent: e
                }),
                f = function(n) {
                    function l(t, e) {
                        r(this, l);
                        var o = i(this, n.call(this, t, e));
                        return o.version = N, o.state = {}, o.renderCount = 0, o.store = t[O] || e[O], o.propsMode = Boolean(t[O]), o.setWrappedInstance = o.setWrappedInstance.bind(o), h()(o.store, 'Could not find "' + O + '" in either the context or props of "' + a + '". Either wrap the root component in a <Provider>, or explicitly pass "' + O + '" as a prop to "' + a + '".'), o.initSelector(), o.initSubscription(), o
                    }
                    return o(l, n), l.prototype.getChildContext = function() {
                        var t, e = this.propsMode ? null : this.subscription;
                        return t = {}, t[A] = e || this.context[A], t
                    }, l.prototype.componentDidMount = function() {
                        P && (this.subscription.trySubscribe(), this.selector.run(this.props), this.selector.shouldComponentUpdate && this.forceUpdate())
                    }, l.prototype.componentWillReceiveProps = function(t) {
                        this.selector.run(t)
                    }, l.prototype.shouldComponentUpdate = function() {
                        return this.selector.shouldComponentUpdate
                    }, l.prototype.componentWillUnmount = function() {
                        this.subscription && this.subscription.tryUnsubscribe(), this.subscription = null, this.notifyNestedSubs = s, this.store = null, this.selector.run = s, this.selector.shouldComponentUpdate = !1
                    }, l.prototype.getWrappedInstance = function() {
                        return h()(x, "To access the wrapped instance, you need to specify { withRef: true } in the options argument of the " + _ + "() call."), this.wrappedInstance
                    }, l.prototype.setWrappedInstance = function(t) {
                        this.wrappedInstance = t
                    }, l.prototype.initSelector = function() {
                        var e = t(this.store.dispatch, c);
                        this.selector = u(e, this.store), this.selector.run(this.props)
                    }, l.prototype.initSubscription = function() {
                        if (P) {
                            var t = (this.propsMode ? this.props : this.context)[A];
                            this.subscription = new d.default(this.store, t, this.onStateChange.bind(this)), this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription)
                        }
                    }, l.prototype.onStateChange = function() {
                        this.selector.run(this.props), this.selector.shouldComponentUpdate ? (this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate, this.setState(g)) : this.notifyNestedSubs()
                    }, l.prototype.notifyNestedSubsOnComponentDidUpdate = function() {
                        this.componentDidUpdate = void 0, this.notifyNestedSubs()
                    }, l.prototype.isSubscribed = function() {
                        return Boolean(this.subscription) && this.subscription.isSubscribed()
                    }, l.prototype.addExtraProps = function(t) {
                        if (!(x || T || this.propsMode && this.subscription)) return t;
                        var e = v({}, t);
                        return x && (e.ref = this.setWrappedInstance), T && (e[T] = this.renderCount++), this.propsMode && this.subscription && (e[A] = this.subscription), e
                    }, l.prototype.render = function() {
                        var t = this.selector;
                        if (t.shouldComponentUpdate = !1, t.error) throw t.error;
                        return Object(p.createElement)(e, this.addExtraProps(t.props))
                    }, l
                }(p.Component);
            return f.WrappedComponent = e, f.displayName = a, f.childContextTypes = R, f.contextTypes = M, f.propTypes = M, l()(f, e)
        }
    };
    var c = n(21),
        l = n.n(c),
        f = n(3),
        h = n.n(f),
        p = n(0),
        d = (n.n(p), n(60)),
        m = n(19),
        v = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        },
        y = 0,
        g = {}
}, function(t, e, n) {
    "use strict";
    var r = {
            childContextTypes: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0
        },
        i = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0
        },
        o = Object.defineProperty,
        a = Object.getOwnPropertyNames,
        s = Object.getOwnPropertySymbols,
        u = Object.getOwnPropertyDescriptor,
        c = Object.getPrototypeOf,
        l = c && c(Object);
    t.exports = function t(e, n, f) {
        if ("string" != typeof n) {
            if (l) {
                var h = c(n);
                h && h !== l && t(e, h, f)
            }
            var p = a(n);
            s && (p = p.concat(s(n)));
            for (var d = 0; d < p.length; ++d) {
                var m = p[d];
                if (!(r[m] || i[m] || f && f[m])) {
                    var v = u(n, m);
                    try {
                        o(e, m, v)
                    } catch (t) {}
                }
            }
            return e
        }
        return e
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(23),
        i = n(76),
        o = n(77),
        a = n(78),
        s = n(27);
    n(26);
    n.d(e, "createStore", function() {
        return r.default
    }), n.d(e, "combineReducers", function() {
        return i.default
    }), n.d(e, "bindActionCreators", function() {
        return o.default
    }), n.d(e, "applyMiddleware", function() {
        return a.default
    }), n.d(e, "compose", function() {
        return s.default
    })
}, function(t, e, n) {
    "use strict";

    function r(t, e, n) {
        function o() {
            m === d && (m = d.slice())
        }

        function u() {
            return p
        }

        function c(t) {
            if ("function" != typeof t) throw new Error("Expected listener to be a function.");
            var e = !0;
            return o(), m.push(t),
                function() {
                    if (e) {
                        e = !1, o();
                        var n = m.indexOf(t);
                        m.splice(n, 1)
                    }
                }
        }

        function l(t) {
            if (!Object(i.default)(t)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
            if (void 0 === t.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
            if (v) throw new Error("Reducers may not dispatch actions.");
            try {
                v = !0, p = h(p, t)
            } finally {
                v = !1
            }
            for (var e = d = m, n = 0; n < e.length; n++)(0, e[n])();
            return t
        }
        var f;
        if ("function" == typeof e && void 0 === n && (n = e, e = void 0), void 0 !== n) {
            if ("function" != typeof n) throw new Error("Expected the enhancer to be a function.");
            return n(r)(t, e)
        }
        if ("function" != typeof t) throw new Error("Expected the reducer to be a function.");
        var h = t,
            p = e,
            d = [],
            m = d,
            v = !1;
        return l({
            type: s.INIT
        }), f = {
            dispatch: l,
            subscribe: c,
            getState: u,
            replaceReducer: function(t) {
                if ("function" != typeof t) throw new Error("Expected the nextReducer to be a function.");
                h = t, l({
                    type: s.INIT
                })
            }
        }, f[a.a] = function() {
            var t, e = c;
            return t = {
                subscribe: function(t) {
                    function n() {
                        t.next && t.next(u())
                    }
                    if ("object" != typeof t) throw new TypeError("Expected the observer to be an object.");
                    return n(), {
                        unsubscribe: e(n)
                    }
                }
            }, t[a.a] = function() {
                return this
            }, t
        }, f
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), n.d(e, "ActionTypes", function() {
        return s
    }), e.default = r;
    var i = n(10),
        o = n(72),
        a = n.n(o),
        s = {
            INIT: "@@redux/INIT"
        }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(65).default.Symbol;
    e.default = r
}, function(t, e) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t) {
        "undefined" != typeof console && "function" == typeof console.error && console.error(t);
        try {
            throw new Error(t)
        } catch (t) {}
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return 0 === e.length ? function(t) {
            return t
        } : 1 === e.length ? e[0] : e.reduce(function(t, e) {
            return function() {
                return t(e.apply(void 0, arguments))
            }
        })
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return null !== t.dependsOnOwnProps && void 0 !== t.dependsOnOwnProps ? Boolean(t.dependsOnOwnProps) : 1 !== t.length
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.wrapMapToPropsConstant = function(t) {
        return function(e, n) {
            function r() {
                return i
            }
            var i = t(e, n);
            return r.dependsOnOwnProps = !1, r
        }
    }, e.getDependsOnOwnProps = r, e.wrapMapToPropsFunc = function(t, e) {
        return function(e, n) {
            n.displayName;
            var i = function(t, e) {
                return i.dependsOnOwnProps ? i.mapToProps(t, e) : i.mapToProps(t)
            };
            return i.dependsOnOwnProps = !0, i.mapToProps = function(e, n) {
                i.mapToProps = t, i.dependsOnOwnProps = r(t);
                var o = i(e, n);
                return "function" == typeof o && (i.mapToProps = o, i.dependsOnOwnProps = r(o), o = i(e, n)), o
            }, i
        }
    };
    n(29)
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t, e, n) {
        Object(r.default)(t) || Object(i.default)(n + "() in " + e + " must return a plain object. Instead received " + t + ".")
    };
    var r = n(10),
        i = n(9)
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return "/" === t.charAt(0)
    }

    function i(t, e) {
        for (var n = e, r = n + 1, i = t.length; r < i; n += 1, r += 1) t[n] = t[r];
        t.pop()
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = t && t.split("/") || [],
            o = e && e.split("/") || [],
            a = t && r(t),
            s = e && r(e),
            u = a || s;
        if (t && r(t) ? o = n : n.length && (o.pop(), o = o.concat(n)), !o.length) return "/";
        var c = void 0;
        if (o.length) {
            var l = o[o.length - 1];
            c = "." === l || ".." === l || "" === l
        } else c = !1;
        for (var f = 0, h = o.length; h >= 0; h--) {
            var p = o[h];
            "." === p ? i(o, h) : ".." === p ? (i(o, h), f++) : f && (i(o, h), f--)
        }
        if (!u)
            for (; f--; f) o.unshift("..");
        !u || "" === o[0] || o[0] && r(o[0]) || o.unshift("");
        var d = o.join("/");
        return c && "/" !== d.substr(-1) && (d += "/"), d
    }
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        if (t === e) return !0;
        if (null == t || null == e) return !1;
        if (Array.isArray(t)) return Array.isArray(e) && t.length === e.length && t.every(function(t, n) {
            return r(t, e[n])
        });
        var n = void 0 === t ? "undefined" : i(t);
        if (n !== (void 0 === e ? "undefined" : i(e))) return !1;
        if ("object" === n) {
            var o = t.valueOf(),
                a = e.valueOf();
            if (o !== t || a !== e) return r(o, a);
            var s = Object.keys(t),
                u = Object.keys(e);
            return s.length === u.length && s.every(function(n) {
                return r(t[n], e[n])
            })
        }
        return !1
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    e.default = r
}, function(t, e, n) {
    "use strict";
    e.__esModule = !0;
    e.canUseDOM = !("undefined" == typeof window || !window.document || !window.document.createElement), e.addEventListener = function(t, e, n) {
        return t.addEventListener ? t.addEventListener(e, n, !1) : t.attachEvent("on" + e, n)
    }, e.removeEventListener = function(t, e, n) {
        return t.removeEventListener ? t.removeEventListener(e, n, !1) : t.detachEvent("on" + e, n)
    }, e.getConfirmation = function(t, e) {
        return e(window.confirm(t))
    }, e.supportsHistory = function() {
        var t = window.navigator.userAgent;
        return (-1 === t.indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone")) && (window.history && "pushState" in window.history)
    }, e.supportsPopStateOnHashChange = function() {
        return -1 === window.navigator.userAgent.indexOf("Trident")
    }, e.supportsGoWithoutReloadUsingHash = function() {
        return -1 === window.navigator.userAgent.indexOf("Firefox")
    }, e.isExtraneousPopstateEvent = function(t) {
        return void 0 === t.state && -1 === navigator.userAgent.indexOf("CriOS")
    }
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        var n = {};
        for (var r in t) e.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
        return n
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function a(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(0),
        u = n.n(s),
        c = n(2),
        l = n.n(c),
        f = n(3),
        h = n.n(f),
        p = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        },
        d = function(t) {
            return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey)
        },
        m = function(t) {
            function e() {
                var n, r, a;
                i(this, e);
                for (var s = arguments.length, u = Array(s), c = 0; c < s; c++) u[c] = arguments[c];
                return n = r = o(this, t.call.apply(t, [this].concat(u))), r.handleClick = function(t) {
                    if (r.props.onClick && r.props.onClick(t), !t.defaultPrevented && 0 === t.button && !r.props.target && !d(t)) {
                        t.preventDefault();
                        var e = r.context.router.history,
                            n = r.props,
                            i = n.replace,
                            o = n.to;
                        i ? e.replace(o) : e.push(o)
                    }
                }, a = n, o(r, a)
            }
            return a(e, t), e.prototype.render = function() {
                var t = this.props,
                    e = (t.replace, t.to),
                    n = t.innerRef,
                    i = r(t, ["replace", "to", "innerRef"]);
                h()(this.context.router, "You should not use <Link> outside a <Router>");
                var o = this.context.router.history.createHref("string" == typeof e ? {
                    pathname: e
                } : e);
                return u.a.createElement("a", p({}, i, {
                    onClick: this.handleClick,
                    href: o,
                    ref: n
                }))
            }, e
        }(u.a.Component);
    m.propTypes = {
        onClick: l.a.func,
        target: l.a.string,
        replace: l.a.bool,
        to: l.a.oneOfType([l.a.string, l.a.object]).isRequired,
        innerRef: l.a.oneOfType([l.a.string, l.a.func])
    }, m.defaultProps = {
        replace: !1
    }, m.contextTypes = {
        router: l.a.shape({
            history: l.a.shape({
                push: l.a.func.isRequired,
                replace: l.a.func.isRequired,
                createHref: l.a.func.isRequired
            }).isRequired
        }).isRequired
    }, e.default = m
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(35);
    e.default = r.default
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = n(1),
        s = n.n(a),
        u = n(3),
        c = n.n(u),
        l = n(0),
        f = n.n(l),
        h = n(2),
        p = n.n(h),
        d = n(15),
        m = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        },
        v = function(t) {
            return 0 === f.a.Children.count(t)
        },
        y = function(t) {
            function e() {
                var n, o, a;
                r(this, e);
                for (var s = arguments.length, u = Array(s), c = 0; c < s; c++) u[c] = arguments[c];
                return n = o = i(this, t.call.apply(t, [this].concat(u))), o.state = {
                    match: o.computeMatch(o.props, o.context.router)
                }, a = n, i(o, a)
            }
            return o(e, t), e.prototype.getChildContext = function() {
                return {
                    router: m({}, this.context.router, {
                        route: {
                            location: this.props.location || this.context.router.route.location,
                            match: this.state.match
                        }
                    })
                }
            }, e.prototype.computeMatch = function(t, e) {
                var n = t.computedMatch,
                    r = t.location,
                    i = t.path,
                    o = t.strict,
                    a = t.exact,
                    s = t.sensitive;
                if (n) return n;
                c()(e, "You should not use <Route> or withRouter() outside a <Router>");
                var u = e.route,
                    l = (r || u.location).pathname;
                return i ? Object(d.default)(l, {
                    path: i,
                    strict: o,
                    exact: a,
                    sensitive: s
                }) : u.match
            }, e.prototype.componentWillMount = function() {
                s()(!(this.props.component && this.props.render), "You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored"), s()(!(this.props.component && this.props.children && !v(this.props.children)), "You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored"), s()(!(this.props.render && this.props.children && !v(this.props.children)), "You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored")
            }, e.prototype.componentWillReceiveProps = function(t, e) {
                s()(!(t.location && !this.props.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.'), s()(!(!t.location && this.props.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.'), this.setState({
                    match: this.computeMatch(t, e.router)
                })
            }, e.prototype.render = function() {
                var t = this.state.match,
                    e = this.props,
                    n = e.children,
                    r = e.component,
                    i = e.render,
                    o = this.context.router,
                    a = o.history,
                    s = o.route,
                    u = o.staticContext,
                    c = {
                        match: t,
                        location: this.props.location || s.location,
                        history: a,
                        staticContext: u
                    };
                return r ? t ? f.a.createElement(r, c) : null : i ? t ? i(c) : null : n ? "function" == typeof n ? n(c) : v(n) ? null : f.a.Children.only(n) : null
            }, e
        }(f.a.Component);
    y.propTypes = {
        computedMatch: p.a.object,
        path: p.a.string,
        exact: p.a.bool,
        strict: p.a.bool,
        sensitive: p.a.bool,
        component: p.a.func,
        render: p.a.func,
        children: p.a.oneOfType([p.a.func, p.a.node]),
        location: p.a.object
    }, y.contextTypes = {
        router: p.a.shape({
            history: p.a.object.isRequired,
            route: p.a.object.isRequired,
            staticContext: p.a.object
        })
    }, y.childContextTypes = {
        router: p.a.object.isRequired
    }, e.default = y
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), n.d(e, "canUseDOM", function() {
        return r
    }), n.d(e, "addEventListener", function() {
        return i
    }), n.d(e, "removeEventListener", function() {
        return o
    }), n.d(e, "getConfirmation", function() {
        return a
    }), n.d(e, "supportsHistory", function() {
        return s
    }), n.d(e, "supportsPopStateOnHashChange", function() {
        return u
    }), n.d(e, "supportsGoWithoutReloadUsingHash", function() {
        return c
    }), n.d(e, "isExtraneousPopstateEvent", function() {
        return l
    });
    var r = !("undefined" == typeof window || !window.document || !window.document.createElement),
        i = function(t, e, n) {
            return t.addEventListener ? t.addEventListener(e, n, !1) : t.attachEvent("on" + e, n)
        },
        o = function(t, e, n) {
            return t.removeEventListener ? t.removeEventListener(e, n, !1) : t.detachEvent("on" + e, n)
        },
        a = function(t, e) {
            return e(window.confirm(t))
        },
        s = function() {
            var t = window.navigator.userAgent;
            return (-1 === t.indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone")) && (window.history && "pushState" in window.history)
        },
        u = function() {
            return -1 === window.navigator.userAgent.indexOf("Trident")
        },
        c = function() {
            return -1 === window.navigator.userAgent.indexOf("Firefox")
        },
        l = function(t) {
            return void 0 === t.state && -1 === navigator.userAgent.indexOf("CriOS")
        }
}, function(t, e, n) {
    t.exports = n
}, function(t, e, n) {
    n(39), n(44), n(0), n(46), n(56), n(83), n(22), n(109), n(110), n(111)
}, function(t, e, n) {
    function r(t, e, n) {
        n = n || {};
        var r = s(t) + "=" + s(e);
        null == e && (n.maxage = -1), n.maxage && (n.expires = new Date(+new Date + n.maxage)), n.path && (r += "; path=" + n.path), n.domain && (r += "; domain=" + n.domain), n.expires && (r += "; expires=" + n.expires.toUTCString()), n.secure && (r += "; secure"), document.cookie = r
    }

    function i() {
        var t;
        try {
            t = document.cookie
        } catch (t) {
            return "undefined" != typeof console && "function" == typeof console.error && console.error(t.stack || t), {}
        }
        return a(t)
    }

    function o(t) {
        return i()[t]
    }

    function a(t) {
        var e, n = {},
            r = t.split(/ *; */);
        if ("" == r[0]) return n;
        for (var i = 0; i < r.length; ++i) n[u((e = r[i].split("="))[0])] = u(e[1]);
        return n
    }

    function s(t) {
        try {
            return encodeURIComponent(t)
        } catch (e) {
            c("error `encode(%o)` - %o", t, e)
        }
    }

    function u(t) {
        try {
            return decodeURIComponent(t)
        } catch (e) {
            c("error `decode(%o)` - %o", t, e)
        }
    }
    var c = n(40)("cookie");
    t.exports = function(t, e, n) {
        switch (arguments.length) {
            case 3:
            case 2:
                return r(t, e, n);
            case 1:
                return o(t);
            default:
                return i()
        }
    }
}, function(t, e, n) {
    (function(r) {
        function i() {
            var t;
            try {
                t = e.storage.debug
            } catch (t) {}
            return "env" in (void 0 === r ? {} : r) && (t = r.env.DEBUG), t
        }(e = t.exports = n(42)).log = function() {
            return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
        }, e.formatArgs = function() {
            var t = arguments,
                n = this.useColors;
            if (t[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + t[0] + (n ? "%c " : " ") + "+" + e.humanize(this.diff), !n) return t;
            var r = "color: " + this.color,
                i = 0,
                o = 0;
            return (t = [t[0], r, "color: inherit"].concat(Array.prototype.slice.call(t, 1)))[0].replace(/%[a-z%]/g, function(t) {
                "%%" !== t && (i++, "%c" === t && (o = i))
            }), t.splice(o, 0, r), t
        }, e.save = function(t) {
            try {
                null == t ? e.storage.removeItem("debug") : e.storage.debug = t
            } catch (t) {}
        }, e.load = i, e.useColors = function() {
            return "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31
        }, e.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
            try {
                return window.localStorage
            } catch (t) {}
        }(), e.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], e.formatters.j = function(t) {
            return JSON.stringify(t)
        }, e.enable(i())
    }).call(e, n(41))
}, function(t, e) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }

    function r() {
        throw new Error("clearTimeout has not been defined")
    }

    function i(t) {
        if (l === setTimeout) return setTimeout(t, 0);
        if ((l === n || !l) && setTimeout) return l = setTimeout, setTimeout(t, 0);
        try {
            return l(t, 0)
        } catch (e) {
            try {
                return l.call(null, t, 0)
            } catch (e) {
                return l.call(this, t, 0)
            }
        }
    }

    function o(t) {
        if (f === clearTimeout) return clearTimeout(t);
        if ((f === r || !f) && clearTimeout) return f = clearTimeout, clearTimeout(t);
        try {
            return f(t)
        } catch (e) {
            try {
                return f.call(null, t)
            } catch (e) {
                return f.call(this, t)
            }
        }
    }

    function a() {
        m && p && (m = !1, p.length ? d = p.concat(d) : v = -1, d.length && s())
    }

    function s() {
        if (!m) {
            var t = i(a);
            m = !0;
            for (var e = d.length; e;) {
                for (p = d, d = []; ++v < e;) p && p[v].run();
                v = -1, e = d.length
            }
            p = null, m = !1, o(t)
        }
    }

    function u(t, e) {
        this.fun = t, this.array = e
    }

    function c() {}
    var l, f, h = t.exports = {};
    ! function() {
        try {
            l = "function" == typeof setTimeout ? setTimeout : n
        } catch (t) {
            l = n
        }
        try {
            f = "function" == typeof clearTimeout ? clearTimeout : r
        } catch (t) {
            f = r
        }
    }();
    var p, d = [],
        m = !1,
        v = -1;
    h.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        d.push(new u(t, e)), 1 !== d.length || m || i(s)
    }, u.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, h.title = "browser", h.browser = !0, h.env = {}, h.argv = [], h.version = "", h.versions = {}, h.on = c, h.addListener = c, h.once = c, h.off = c, h.removeListener = c, h.removeAllListeners = c, h.emit = c, h.binding = function(t) {
        throw new Error("process.binding is not supported")
    }, h.cwd = function() {
        return "/"
    }, h.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    }, h.umask = function() {
        return 0
    }
}, function(t, e, n) {
    function r() {
        return e.colors[a++ % e.colors.length]
    }

    function i(t) {
        function n() {}

        function i() {
            var t = i,
                n = +new Date,
                a = n - (o || n);
            t.diff = a, t.prev = o, t.curr = n, o = n, null == t.useColors && (t.useColors = e.useColors()), null == t.color && t.useColors && (t.color = r());
            for (var s = new Array(arguments.length), u = 0; u < s.length; u++) s[u] = arguments[u];
            s[0] = e.coerce(s[0]), "string" != typeof s[0] && (s = ["%o"].concat(s));
            var c = 0;
            s[0] = s[0].replace(/%([a-z%])/g, function(n, r) {
                if ("%%" === n) return n;
                c++;
                var i = e.formatters[r];
                if ("function" == typeof i) {
                    var o = s[c];
                    n = i.call(t, o), s.splice(c, 1), c--
                }
                return n
            }), s = e.formatArgs.apply(t, s), (i.log || e.log || console.log.bind(console)).apply(t, s)
        }
        n.enabled = !1, i.enabled = !0;
        var a = e.enabled(t) ? i : n;
        return a.namespace = t, a
    }(e = t.exports = i.debug = i).coerce = function(t) {
        return t instanceof Error ? t.stack || t.message : t
    }, e.disable = function() {
        e.enable("")
    }, e.enable = function(t) {
        e.save(t);
        for (var n = (t || "").split(/[\s,]+/), r = n.length, i = 0; i < r; i++) n[i] && ("-" === (t = n[i].replace(/[\\^$+?.()|[\]{}]/g, "\\$&").replace(/\*/g, ".*?"))[0] ? e.skips.push(new RegExp("^" + t.substr(1) + "$")) : e.names.push(new RegExp("^" + t + "$")))
    }, e.enabled = function(t) {
        var n, r;
        for (n = 0, r = e.skips.length; n < r; n++)
            if (e.skips[n].test(t)) return !1;
        for (n = 0, r = e.names.length; n < r; n++)
            if (e.names[n].test(t)) return !0;
        return !1
    }, e.humanize = n(43), e.names = [], e.skips = [], e.formatters = {};
    var o, a = 0
}, function(t, e) {
    function n(t) {
        if (!((t = String(t)).length > 1e4)) {
            var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);
            if (e) {
                var n = parseFloat(e[1]);
                switch ((e[2] || "ms").toLowerCase()) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                        return n * l;
                    case "days":
                    case "day":
                    case "d":
                        return n * c;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                        return n * u;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                        return n * s;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                        return n * a;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                        return n;
                    default:
                        return
                }
            }
        }
    }

    function r(t) {
        return t >= c ? Math.round(t / c) + "d" : t >= u ? Math.round(t / u) + "h" : t >= s ? Math.round(t / s) + "m" : t >= a ? Math.round(t / a) + "s" : t + "ms"
    }

    function i(t) {
        return o(t, c, "day") || o(t, u, "hour") || o(t, s, "minute") || o(t, a, "second") || t + " ms"
    }

    function o(t, e, n) {
        if (!(t < e)) return t < 1.5 * e ? Math.floor(t / e) + " " + n : Math.ceil(t / e) + " " + n + "s"
    }
    var a = 1e3,
        s = 60 * a,
        u = 60 * s,
        c = 24 * u,
        l = 365.25 * c;
    t.exports = function(t, e) {
        e = e || {};
        var o = typeof t;
        if ("string" === o && t.length > 0) return n(t);
        if ("number" === o && !1 === isNaN(t)) return e.long ? i(t) : r(t);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t))
    }
}, function(t, e, n) {
    ! function(e, n) {
        t.exports = n()
    }(0, function() {
        "use strict";

        function t(t, e) {
            e && (t.prototype = Object.create(e.prototype)), t.prototype.constructor = t
        }

        function e(t) {
            return o(t) ? t : x(t)
        }

        function n(t) {
            return a(t) ? t : I(t)
        }

        function r(t) {
            return s(t) ? t : A(t)
        }

        function i(t) {
            return o(t) && !u(t) ? t : N(t)
        }

        function o(t) {
            return !(!t || !t[cn])
        }

        function a(t) {
            return !(!t || !t[ln])
        }

        function s(t) {
            return !(!t || !t[fn])
        }

        function u(t) {
            return a(t) || s(t)
        }

        function c(t) {
            return !(!t || !t[hn])
        }

        function l(t) {
            return t.value = !1, t
        }

        function f(t) {
            t && (t.value = !0)
        }

        function h() {}

        function p(t, e) {
            e = e || 0;
            for (var n = Math.max(0, t.length - e), r = new Array(n), i = 0; i < n; i++) r[i] = t[i + e];
            return r
        }

        function d(t) {
            return void 0 === t.size && (t.size = t.__iterate(v)), t.size
        }

        function m(t, e) {
            if ("number" != typeof e) {
                var n = e >>> 0;
                if ("" + n !== e || 4294967295 === n) return NaN;
                e = n
            }
            return e < 0 ? d(t) + e : e
        }

        function v() {
            return !0
        }

        function y(t, e, n) {
            return (0 === t || void 0 !== n && t <= -n) && (void 0 === e || void 0 !== n && e >= n)
        }

        function g(t, e) {
            return w(t, e, 0)
        }

        function b(t, e) {
            return w(t, e, e)
        }

        function w(t, e, n) {
            return void 0 === t ? n : t < 0 ? Math.max(0, e + t) : void 0 === e ? t : Math.min(e, t)
        }

        function _(t) {
            this.next = t
        }

        function E(t, e, n, r) {
            var i = 0 === t ? e : 1 === t ? n : [e, n];
            return r ? r.value = i : r = {
                value: i,
                done: !1
            }, r
        }

        function T() {
            return {
                value: void 0,
                done: !0
            }
        }

        function S(t) {
            return !!O(t)
        }

        function P(t) {
            return t && "function" == typeof t.next
        }

        function C(t) {
            var e = O(t);
            return e && e.call(t)
        }

        function O(t) {
            var e = t && (En && t[En] || t[Tn]);
            if ("function" == typeof e) return e
        }

        function k(t) {
            return t && "number" == typeof t.length
        }

        function x(t) {
            return null === t || void 0 === t ? U() : o(t) ? t.toSeq() : B(t)
        }

        function I(t) {
            return null === t || void 0 === t ? U().toKeyedSeq() : o(t) ? a(t) ? t.toSeq() : t.fromEntrySeq() : F(t)
        }

        function A(t) {
            return null === t || void 0 === t ? U() : o(t) ? a(t) ? t.entrySeq() : t.toIndexedSeq() : H(t)
        }

        function N(t) {
            return (null === t || void 0 === t ? U() : o(t) ? a(t) ? t.entrySeq() : t : H(t)).toSetSeq()
        }

        function M(t) {
            this._array = t, this.size = t.length
        }

        function R(t) {
            var e = Object.keys(t);
            this._object = t, this._keys = e, this.size = e.length
        }

        function D(t) {
            this._iterable = t, this.size = t.length || t.size
        }

        function j(t) {
            this._iterator = t, this._iteratorCache = []
        }

        function L(t) {
            return !(!t || !t[Pn])
        }

        function U() {
            return Cn || (Cn = new M([]))
        }

        function F(t) {
            var e = Array.isArray(t) ? new M(t).fromEntrySeq() : P(t) ? new j(t).fromEntrySeq() : S(t) ? new D(t).fromEntrySeq() : "object" == typeof t ? new R(t) : void 0;
            if (!e) throw new TypeError("Expected Array or iterable object of [k, v] entries, or keyed object: " + t);
            return e
        }

        function H(t) {
            var e = z(t);
            if (!e) throw new TypeError("Expected Array or iterable object of values: " + t);
            return e
        }

        function B(t) {
            var e = z(t) || "object" == typeof t && new R(t);
            if (!e) throw new TypeError("Expected Array or iterable object of values, or keyed object: " + t);
            return e
        }

        function z(t) {
            return k(t) ? new M(t) : P(t) ? new j(t) : S(t) ? new D(t) : void 0
        }

        function q(t, e, n, r) {
            var i = t._cache;
            if (i) {
                for (var o = i.length - 1, a = 0; a <= o; a++) {
                    var s = i[n ? o - a : a];
                    if (!1 === e(s[1], r ? s[0] : a, t)) return a + 1
                }
                return a
            }
            return t.__iterateUncached(e, n)
        }

        function V(t, e, n, r) {
            var i = t._cache;
            if (i) {
                var o = i.length - 1,
                    a = 0;
                return new _(function() {
                    var t = i[n ? o - a : a];
                    return a++ > o ? T() : E(e, r ? t[0] : a - 1, t[1])
                })
            }
            return t.__iteratorUncached(e, n)
        }

        function W(t, e) {
            return e ? K(e, t, "", {
                "": t
            }) : Y(t)
        }

        function K(t, e, n, r) {
            return Array.isArray(e) ? t.call(r, n, A(e).map(function(n, r) {
                return K(t, n, r, e)
            })) : G(e) ? t.call(r, n, I(e).map(function(n, r) {
                return K(t, n, r, e)
            })) : e
        }

        function Y(t) {
            return Array.isArray(t) ? A(t).map(Y).toList() : G(t) ? I(t).map(Y).toMap() : t
        }

        function G(t) {
            return t && (t.constructor === Object || void 0 === t.constructor)
        }

        function $(t, e) {
            if (t === e || t !== t && e !== e) return !0;
            if (!t || !e) return !1;
            if ("function" == typeof t.valueOf && "function" == typeof e.valueOf) {
                if (t = t.valueOf(), e = e.valueOf(), t === e || t !== t && e !== e) return !0;
                if (!t || !e) return !1
            }
            return !("function" != typeof t.equals || "function" != typeof e.equals || !t.equals(e))
        }

        function X(t, e) {
            if (t === e) return !0;
            if (!o(e) || void 0 !== t.size && void 0 !== e.size && t.size !== e.size || void 0 !== t.__hash && void 0 !== e.__hash && t.__hash !== e.__hash || a(t) !== a(e) || s(t) !== s(e) || c(t) !== c(e)) return !1;
            if (0 === t.size && 0 === e.size) return !0;
            var n = !u(t);
            if (c(t)) {
                var r = t.entries();
                return e.every(function(t, e) {
                    var i = r.next().value;
                    return i && $(i[1], t) && (n || $(i[0], e))
                }) && r.next().done
            }
            var i = !1;
            if (void 0 === t.size)
                if (void 0 === e.size) "function" == typeof t.cacheResult && t.cacheResult();
                else {
                    i = !0;
                    var l = t;
                    t = e, e = l
                }
            var f = !0,
                h = e.__iterate(function(e, r) {
                    if (n ? !t.has(e) : i ? !$(e, t.get(r, vn)) : !$(t.get(r, vn), e)) return f = !1, !1
                });
            return f && t.size === h
        }

        function J(t, e) {
            if (!(this instanceof J)) return new J(t, e);
            if (this._value = t, this.size = void 0 === e ? 1 / 0 : Math.max(0, e), 0 === this.size) {
                if (On) return On;
                On = this
            }
        }

        function Q(t, e) {
            if (!t) throw new Error(e)
        }

        function Z(t, e, n) {
            if (!(this instanceof Z)) return new Z(t, e, n);
            if (Q(0 !== n, "Cannot step a Range by 0"), t = t || 0, void 0 === e && (e = 1 / 0), n = void 0 === n ? 1 : Math.abs(n), e < t && (n = -n), this._start = t, this._end = e, this._step = n, this.size = Math.max(0, Math.ceil((e - t) / n - 1) + 1), 0 === this.size) {
                if (kn) return kn;
                kn = this
            }
        }

        function tt() {
            throw TypeError("Abstract")
        }

        function et() {}

        function nt() {}

        function rt() {}

        function it(t) {
            return t >>> 1 & 1073741824 | 3221225471 & t
        }

        function ot(t) {
            if (!1 === t || null === t || void 0 === t) return 0;
            if ("function" == typeof t.valueOf && (!1 === (t = t.valueOf()) || null === t || void 0 === t)) return 0;
            if (!0 === t) return 1;
            var e = typeof t;
            if ("number" === e) {
                if (t !== t || t === 1 / 0) return 0;
                var n = 0 | t;
                for (n !== t && (n ^= 4294967295 * t); t > 4294967295;) n ^= t /= 4294967295;
                return it(n)
            }
            if ("string" === e) return t.length > jn ? at(t) : st(t);
            if ("function" == typeof t.hashCode) return t.hashCode();
            if ("object" === e) return ut(t);
            if ("function" == typeof t.toString) return st(t.toString());
            throw new Error("Value type " + e + " cannot be hashed.")
        }

        function at(t) {
            var e = Fn[t];
            return void 0 === e && (e = st(t), Un === Ln && (Un = 0, Fn = {}), Un++, Fn[t] = e), e
        }

        function st(t) {
            for (var e = 0, n = 0; n < t.length; n++) e = 31 * e + t.charCodeAt(n) | 0;
            return it(e)
        }

        function ut(t) {
            var e;
            if (Mn && void 0 !== (e = xn.get(t))) return e;
            if (void 0 !== (e = t[Dn])) return e;
            if (!Nn) {
                if (void 0 !== (e = t.propertyIsEnumerable && t.propertyIsEnumerable[Dn])) return e;
                if (void 0 !== (e = ct(t))) return e
            }
            if (e = ++Rn, 1073741824 & Rn && (Rn = 0), Mn) xn.set(t, e);
            else {
                if (void 0 !== An && !1 === An(t)) throw new Error("Non-extensible objects are not allowed as keys.");
                if (Nn) Object.defineProperty(t, Dn, {
                    enumerable: !1,
                    configurable: !1,
                    writable: !1,
                    value: e
                });
                else if (void 0 !== t.propertyIsEnumerable && t.propertyIsEnumerable === t.constructor.prototype.propertyIsEnumerable) t.propertyIsEnumerable = function() {
                    return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments)
                }, t.propertyIsEnumerable[Dn] = e;
                else {
                    if (void 0 === t.nodeType) throw new Error("Unable to set a non-enumerable property on object.");
                    t[Dn] = e
                }
            }
            return e
        }

        function ct(t) {
            if (t && t.nodeType > 0) switch (t.nodeType) {
                case 1:
                    return t.uniqueID;
                case 9:
                    return t.documentElement && t.documentElement.uniqueID
            }
        }

        function lt(t) {
            Q(t !== 1 / 0, "Cannot perform this action with an infinite size.")
        }

        function ft(t) {
            return null === t || void 0 === t ? Et() : ht(t) && !c(t) ? t : Et().withMutations(function(e) {
                var r = n(t);
                lt(r.size), r.forEach(function(t, n) {
                    return e.set(n, t)
                })
            })
        }

        function ht(t) {
            return !(!t || !t[Hn])
        }

        function pt(t, e) {
            this.ownerID = t, this.entries = e
        }

        function dt(t, e, n) {
            this.ownerID = t, this.bitmap = e, this.nodes = n
        }

        function mt(t, e, n) {
            this.ownerID = t, this.count = e, this.nodes = n
        }

        function vt(t, e, n) {
            this.ownerID = t, this.keyHash = e, this.entries = n
        }

        function yt(t, e, n) {
            this.ownerID = t, this.keyHash = e, this.entry = n
        }

        function gt(t, e, n) {
            this._type = e, this._reverse = n, this._stack = t._root && wt(t._root)
        }

        function bt(t, e) {
            return E(t, e[0], e[1])
        }

        function wt(t, e) {
            return {
                node: t,
                index: 0,
                __prev: e
            }
        }

        function _t(t, e, n, r) {
            var i = Object.create(Bn);
            return i.size = t, i._root = e, i.__ownerID = n, i.__hash = r, i.__altered = !1, i
        }

        function Et() {
            return zn || (zn = _t(0))
        }

        function Tt(t, e, n) {
            var r, i;
            if (t._root) {
                var o = l(yn),
                    a = l(gn);
                if (r = St(t._root, t.__ownerID, 0, void 0, e, n, o, a), !a.value) return t;
                i = t.size + (o.value ? n === vn ? -1 : 1 : 0)
            } else {
                if (n === vn) return t;
                i = 1, r = new pt(t.__ownerID, [
                    [e, n]
                ])
            }
            return t.__ownerID ? (t.size = i, t._root = r, t.__hash = void 0, t.__altered = !0, t) : r ? _t(i, r) : Et()
        }

        function St(t, e, n, r, i, o, a, s) {
            return t ? t.update(e, n, r, i, o, a, s) : o === vn ? t : (f(s), f(a), new yt(e, r, [i, o]))
        }

        function Pt(t) {
            return t.constructor === yt || t.constructor === vt
        }

        function Ct(t, e, n, r, i) {
            if (t.keyHash === r) return new vt(e, r, [t.entry, i]);
            var o, a = (0 === n ? t.keyHash : t.keyHash >>> n) & mn,
                s = (0 === n ? r : r >>> n) & mn;
            return new dt(e, 1 << a | 1 << s, a === s ? [Ct(t, e, n + pn, r, i)] : (o = new yt(e, r, i), a < s ? [t, o] : [o, t]))
        }

        function Ot(t, e, n, r) {
            t || (t = new h);
            for (var i = new yt(t, ot(n), [n, r]), o = 0; o < e.length; o++) {
                var a = e[o];
                i = i.update(t, 0, void 0, a[0], a[1])
            }
            return i
        }

        function kt(t, e, n, r) {
            for (var i = 0, o = 0, a = new Array(n), s = 0, u = 1, c = e.length; s < c; s++, u <<= 1) {
                var l = e[s];
                void 0 !== l && s !== r && (i |= u, a[o++] = l)
            }
            return new dt(t, i, a)
        }

        function xt(t, e, n, r, i) {
            for (var o = 0, a = new Array(dn), s = 0; 0 !== n; s++, n >>>= 1) a[s] = 1 & n ? e[o++] : void 0;
            return a[r] = i, new mt(t, o + 1, a)
        }

        function It(t, e, r) {
            for (var i = [], a = 0; a < r.length; a++) {
                var s = r[a],
                    u = n(s);
                o(s) || (u = u.map(function(t) {
                    return W(t)
                })), i.push(u)
            }
            return Mt(t, e, i)
        }

        function At(t, e, n) {
            return t && t.mergeDeep && o(e) ? t.mergeDeep(e) : $(t, e) ? t : e
        }

        function Nt(t) {
            return function(e, n, r) {
                if (e && e.mergeDeepWith && o(n)) return e.mergeDeepWith(t, n);
                var i = t(e, n, r);
                return $(e, i) ? e : i
            }
        }

        function Mt(t, e, n) {
            return 0 === (n = n.filter(function(t) {
                return 0 !== t.size
            })).length ? t : 0 !== t.size || t.__ownerID || 1 !== n.length ? t.withMutations(function(t) {
                for (var r = e ? function(n, r) {
                        t.update(r, vn, function(t) {
                            return t === vn ? n : e(t, n, r)
                        })
                    } : function(e, n) {
                        t.set(n, e)
                    }, i = 0; i < n.length; i++) n[i].forEach(r)
            }) : t.constructor(n[0])
        }

        function Rt(t, e, n, r) {
            var i = t === vn,
                o = e.next();
            if (o.done) {
                var a = i ? n : t,
                    s = r(a);
                return s === a ? t : s
            }
            Q(i || t && t.set, "invalid keyPath");
            var u = o.value,
                c = i ? vn : t.get(u, vn),
                l = Rt(c, e, n, r);
            return l === c ? t : l === vn ? t.remove(u) : (i ? Et() : t).set(u, l)
        }

        function Dt(t) {
            return t -= t >> 1 & 1431655765, t = (858993459 & t) + (t >> 2 & 858993459), t = t + (t >> 4) & 252645135, t += t >> 8, 127 & (t += t >> 16)
        }

        function jt(t, e, n, r) {
            var i = r ? t : p(t);
            return i[e] = n, i
        }

        function Lt(t, e, n, r) {
            var i = t.length + 1;
            if (r && e + 1 === i) return t[e] = n, t;
            for (var o = new Array(i), a = 0, s = 0; s < i; s++) s === e ? (o[s] = n, a = -1) : o[s] = t[s + a];
            return o
        }

        function Ut(t, e, n) {
            var r = t.length - 1;
            if (n && e === r) return t.pop(), t;
            for (var i = new Array(r), o = 0, a = 0; a < r; a++) a === e && (o = 1), i[a] = t[a + o];
            return i
        }

        function Ft(t) {
            var e = Vt();
            if (null === t || void 0 === t) return e;
            if (Ht(t)) return t;
            var n = r(t),
                i = n.size;
            return 0 === i ? e : (lt(i), i > 0 && i < dn ? qt(0, i, pn, null, new Bt(n.toArray())) : e.withMutations(function(t) {
                t.setSize(i), n.forEach(function(e, n) {
                    return t.set(n, e)
                })
            }))
        }

        function Ht(t) {
            return !(!t || !t[Kn])
        }

        function Bt(t, e) {
            this.array = t, this.ownerID = e
        }

        function zt(t, e) {
            function n(t, e, n) {
                return 0 === e ? r(t, n) : i(t, e, n)
            }

            function r(t, n) {
                var r = n === s ? u && u.array : t && t.array,
                    i = n > o ? 0 : o - n,
                    c = a - n;
                return c > dn && (c = dn),
                    function() {
                        if (i === c) return $n;
                        var t = e ? --c : i++;
                        return r && r[t]
                    }
            }

            function i(t, r, i) {
                var s, u = t && t.array,
                    c = i > o ? 0 : o - i >> r,
                    l = 1 + (a - i >> r);
                return l > dn && (l = dn),
                    function() {
                        for (;;) {
                            if (s) {
                                var t = s();
                                if (t !== $n) return t;
                                s = null
                            }
                            if (c === l) return $n;
                            var o = e ? --l : c++;
                            s = n(u && u[o], r - pn, i + (o << r))
                        }
                    }
            }
            var o = t._origin,
                a = t._capacity,
                s = Jt(a),
                u = t._tail;
            return n(t._root, t._level, 0)
        }

        function qt(t, e, n, r, i, o, a) {
            var s = Object.create(Yn);
            return s.size = e - t, s._origin = t, s._capacity = e, s._level = n, s._root = r, s._tail = i, s.__ownerID = o, s.__hash = a, s.__altered = !1, s
        }

        function Vt() {
            return Gn || (Gn = qt(0, 0, pn))
        }

        function Wt(t, e, n) {
            if ((e = m(t, e)) !== e) return t;
            if (e >= t.size || e < 0) return t.withMutations(function(t) {
                e < 0 ? $t(t, e).set(0, n) : $t(t, 0, e + 1).set(e, n)
            });
            e += t._origin;
            var r = t._tail,
                i = t._root,
                o = l(gn);
            return e >= Jt(t._capacity) ? r = Kt(r, t.__ownerID, 0, e, n, o) : i = Kt(i, t.__ownerID, t._level, e, n, o), o.value ? t.__ownerID ? (t._root = i, t._tail = r, t.__hash = void 0, t.__altered = !0, t) : qt(t._origin, t._capacity, t._level, i, r) : t
        }

        function Kt(t, e, n, r, i, o) {
            var a = r >>> n & mn,
                s = t && a < t.array.length;
            if (!s && void 0 === i) return t;
            var u;
            if (n > 0) {
                var c = t && t.array[a],
                    l = Kt(c, e, n - pn, r, i, o);
                return l === c ? t : (u = Yt(t, e), u.array[a] = l, u)
            }
            return s && t.array[a] === i ? t : (f(o), u = Yt(t, e), void 0 === i && a === u.array.length - 1 ? u.array.pop() : u.array[a] = i, u)
        }

        function Yt(t, e) {
            return e && t && e === t.ownerID ? t : new Bt(t ? t.array.slice() : [], e)
        }

        function Gt(t, e) {
            if (e >= Jt(t._capacity)) return t._tail;
            if (e < 1 << t._level + pn) {
                for (var n = t._root, r = t._level; n && r > 0;) n = n.array[e >>> r & mn], r -= pn;
                return n
            }
        }

        function $t(t, e, n) {
            void 0 !== e && (e |= 0), void 0 !== n && (n |= 0);
            var r = t.__ownerID || new h,
                i = t._origin,
                o = t._capacity,
                a = i + e,
                s = void 0 === n ? o : n < 0 ? o + n : i + n;
            if (a === i && s === o) return t;
            if (a >= s) return t.clear();
            for (var u = t._level, c = t._root, l = 0; a + l < 0;) c = new Bt(c && c.array.length ? [void 0, c] : [], r), l += 1 << (u += pn);
            l && (a += l, i += l, s += l, o += l);
            for (var f = Jt(o), p = Jt(s); p >= 1 << u + pn;) c = new Bt(c && c.array.length ? [c] : [], r), u += pn;
            var d = t._tail,
                m = p < f ? Gt(t, s - 1) : p > f ? new Bt([], r) : d;
            if (d && p > f && a < o && d.array.length) {
                for (var v = c = Yt(c, r), y = u; y > pn; y -= pn) {
                    var g = f >>> y & mn;
                    v = v.array[g] = Yt(v.array[g], r)
                }
                v.array[f >>> pn & mn] = d
            }
            if (s < o && (m = m && m.removeAfter(r, 0, s)), a >= p) a -= p, s -= p, u = pn, c = null, m = m && m.removeBefore(r, 0, a);
            else if (a > i || p < f) {
                for (l = 0; c;) {
                    var b = a >>> u & mn;
                    if (b !== p >>> u & mn) break;
                    b && (l += (1 << u) * b), u -= pn, c = c.array[b]
                }
                c && a > i && (c = c.removeBefore(r, u, a - l)), c && p < f && (c = c.removeAfter(r, u, p - l)), l && (a -= l, s -= l)
            }
            return t.__ownerID ? (t.size = s - a, t._origin = a, t._capacity = s, t._level = u, t._root = c, t._tail = m, t.__hash = void 0, t.__altered = !0, t) : qt(a, s, u, c, m)
        }

        function Xt(t, e, n) {
            for (var i = [], a = 0, s = 0; s < n.length; s++) {
                var u = n[s],
                    c = r(u);
                c.size > a && (a = c.size), o(u) || (c = c.map(function(t) {
                    return W(t)
                })), i.push(c)
            }
            return a > t.size && (t = t.setSize(a)), Mt(t, e, i)
        }

        function Jt(t) {
            return t < dn ? 0 : t - 1 >>> pn << pn
        }

        function Qt(t) {
            return null === t || void 0 === t ? ee() : Zt(t) ? t : ee().withMutations(function(e) {
                var r = n(t);
                lt(r.size), r.forEach(function(t, n) {
                    return e.set(n, t)
                })
            })
        }

        function Zt(t) {
            return ht(t) && c(t)
        }

        function te(t, e, n, r) {
            var i = Object.create(Qt.prototype);
            return i.size = t ? t.size : 0, i._map = t, i._list = e, i.__ownerID = n, i.__hash = r, i
        }

        function ee() {
            return Xn || (Xn = te(Et(), Vt()))
        }

        function ne(t, e, n) {
            var r, i, o = t._map,
                a = t._list,
                s = o.get(e),
                u = void 0 !== s;
            if (n === vn) {
                if (!u) return t;
                a.size >= dn && a.size >= 2 * o.size ? (r = (i = a.filter(function(t, e) {
                    return void 0 !== t && s !== e
                })).toKeyedSeq().map(function(t) {
                    return t[0]
                }).flip().toMap(), t.__ownerID && (r.__ownerID = i.__ownerID = t.__ownerID)) : (r = o.remove(e), i = s === a.size - 1 ? a.pop() : a.set(s, void 0))
            } else if (u) {
                if (n === a.get(s)[1]) return t;
                r = o, i = a.set(s, [e, n])
            } else r = o.set(e, a.size), i = a.set(a.size, [e, n]);
            return t.__ownerID ? (t.size = r.size, t._map = r, t._list = i, t.__hash = void 0, t) : te(r, i)
        }

        function re(t, e) {
            this._iter = t, this._useKeys = e, this.size = t.size
        }

        function ie(t) {
            this._iter = t, this.size = t.size
        }

        function oe(t) {
            this._iter = t, this.size = t.size
        }

        function ae(t) {
            this._iter = t, this.size = t.size
        }

        function se(t) {
            var e = ke(t);
            return e._iter = t, e.size = t.size, e.flip = function() {
                return t
            }, e.reverse = function() {
                var e = t.reverse.apply(this);
                return e.flip = function() {
                    return t.reverse()
                }, e
            }, e.has = function(e) {
                return t.includes(e)
            }, e.includes = function(e) {
                return t.has(e)
            }, e.cacheResult = xe, e.__iterateUncached = function(e, n) {
                var r = this;
                return t.__iterate(function(t, n) {
                    return !1 !== e(n, t, r)
                }, n)
            }, e.__iteratorUncached = function(e, n) {
                if (e === _n) {
                    var r = t.__iterator(e, n);
                    return new _(function() {
                        var t = r.next();
                        if (!t.done) {
                            var e = t.value[0];
                            t.value[0] = t.value[1], t.value[1] = e
                        }
                        return t
                    })
                }
                return t.__iterator(e === wn ? bn : wn, n)
            }, e
        }

        function ue(t, e, n) {
            var r = ke(t);
            return r.size = t.size, r.has = function(e) {
                return t.has(e)
            }, r.get = function(r, i) {
                var o = t.get(r, vn);
                return o === vn ? i : e.call(n, o, r, t)
            }, r.__iterateUncached = function(r, i) {
                var o = this;
                return t.__iterate(function(t, i, a) {
                    return !1 !== r(e.call(n, t, i, a), i, o)
                }, i)
            }, r.__iteratorUncached = function(r, i) {
                var o = t.__iterator(_n, i);
                return new _(function() {
                    var i = o.next();
                    if (i.done) return i;
                    var a = i.value,
                        s = a[0];
                    return E(r, s, e.call(n, a[1], s, t), i)
                })
            }, r
        }

        function ce(t, e) {
            var n = ke(t);
            return n._iter = t, n.size = t.size, n.reverse = function() {
                return t
            }, t.flip && (n.flip = function() {
                var e = se(t);
                return e.reverse = function() {
                    return t.flip()
                }, e
            }), n.get = function(n, r) {
                return t.get(e ? n : -1 - n, r)
            }, n.has = function(n) {
                return t.has(e ? n : -1 - n)
            }, n.includes = function(e) {
                return t.includes(e)
            }, n.cacheResult = xe, n.__iterate = function(e, n) {
                var r = this;
                return t.__iterate(function(t, n) {
                    return e(t, n, r)
                }, !n)
            }, n.__iterator = function(e, n) {
                return t.__iterator(e, !n)
            }, n
        }

        function le(t, e, n, r) {
            var i = ke(t);
            return r && (i.has = function(r) {
                var i = t.get(r, vn);
                return i !== vn && !!e.call(n, i, r, t)
            }, i.get = function(r, i) {
                var o = t.get(r, vn);
                return o !== vn && e.call(n, o, r, t) ? o : i
            }), i.__iterateUncached = function(i, o) {
                var a = this,
                    s = 0;
                return t.__iterate(function(t, o, u) {
                    if (e.call(n, t, o, u)) return s++, i(t, r ? o : s - 1, a)
                }, o), s
            }, i.__iteratorUncached = function(i, o) {
                var a = t.__iterator(_n, o),
                    s = 0;
                return new _(function() {
                    for (;;) {
                        var o = a.next();
                        if (o.done) return o;
                        var u = o.value,
                            c = u[0],
                            l = u[1];
                        if (e.call(n, l, c, t)) return E(i, r ? c : s++, l, o)
                    }
                })
            }, i
        }

        function fe(t, e, n) {
            var r = ft().asMutable();
            return t.__iterate(function(i, o) {
                r.update(e.call(n, i, o, t), 0, function(t) {
                    return t + 1
                })
            }), r.asImmutable()
        }

        function he(t, e, n) {
            var r = a(t),
                i = (c(t) ? Qt() : ft()).asMutable();
            t.__iterate(function(o, a) {
                i.update(e.call(n, o, a, t), function(t) {
                    return (t = t || []).push(r ? [a, o] : o), t
                })
            });
            var o = Oe(t);
            return i.map(function(e) {
                return Se(t, o(e))
            })
        }

        function pe(t, e, n, r) {
            var i = t.size;
            if (void 0 !== e && (e |= 0), void 0 !== n && (n === 1 / 0 ? n = i : n |= 0), y(e, n, i)) return t;
            var o = g(e, i),
                a = b(n, i);
            if (o !== o || a !== a) return pe(t.toSeq().cacheResult(), e, n, r);
            var s, u = a - o;
            u === u && (s = u < 0 ? 0 : u);
            var c = ke(t);
            return c.size = 0 === s ? s : t.size && s || void 0, !r && L(t) && s >= 0 && (c.get = function(e, n) {
                return (e = m(this, e)) >= 0 && e < s ? t.get(e + o, n) : n
            }), c.__iterateUncached = function(e, n) {
                var i = this;
                if (0 === s) return 0;
                if (n) return this.cacheResult().__iterate(e, n);
                var a = 0,
                    u = !0,
                    c = 0;
                return t.__iterate(function(t, n) {
                    if (!u || !(u = a++ < o)) return c++, !1 !== e(t, r ? n : c - 1, i) && c !== s
                }), c
            }, c.__iteratorUncached = function(e, n) {
                if (0 !== s && n) return this.cacheResult().__iterator(e, n);
                var i = 0 !== s && t.__iterator(e, n),
                    a = 0,
                    u = 0;
                return new _(function() {
                    for (; a++ < o;) i.next();
                    if (++u > s) return T();
                    var t = i.next();
                    return r || e === wn ? t : e === bn ? E(e, u - 1, void 0, t) : E(e, u - 1, t.value[1], t)
                })
            }, c
        }

        function de(t, e, n) {
            var r = ke(t);
            return r.__iterateUncached = function(r, i) {
                var o = this;
                if (i) return this.cacheResult().__iterate(r, i);
                var a = 0;
                return t.__iterate(function(t, i, s) {
                    return e.call(n, t, i, s) && ++a && r(t, i, o)
                }), a
            }, r.__iteratorUncached = function(r, i) {
                var o = this;
                if (i) return this.cacheResult().__iterator(r, i);
                var a = t.__iterator(_n, i),
                    s = !0;
                return new _(function() {
                    if (!s) return T();
                    var t = a.next();
                    if (t.done) return t;
                    var i = t.value,
                        u = i[0],
                        c = i[1];
                    return e.call(n, c, u, o) ? r === _n ? t : E(r, u, c, t) : (s = !1, T())
                })
            }, r
        }

        function me(t, e, n, r) {
            var i = ke(t);
            return i.__iterateUncached = function(i, o) {
                var a = this;
                if (o) return this.cacheResult().__iterate(i, o);
                var s = !0,
                    u = 0;
                return t.__iterate(function(t, o, c) {
                    if (!s || !(s = e.call(n, t, o, c))) return u++, i(t, r ? o : u - 1, a)
                }), u
            }, i.__iteratorUncached = function(i, o) {
                var a = this;
                if (o) return this.cacheResult().__iterator(i, o);
                var s = t.__iterator(_n, o),
                    u = !0,
                    c = 0;
                return new _(function() {
                    var t, o, l;
                    do {
                        if ((t = s.next()).done) return r || i === wn ? t : i === bn ? E(i, c++, void 0, t) : E(i, c++, t.value[1], t);
                        var f = t.value;
                        o = f[0], l = f[1], u && (u = e.call(n, l, o, a))
                    } while (u);
                    return i === _n ? t : E(i, o, l, t)
                })
            }, i
        }

        function ve(t, e) {
            var r = a(t),
                i = [t].concat(e).map(function(t) {
                    return o(t) ? r && (t = n(t)) : t = r ? F(t) : H(Array.isArray(t) ? t : [t]), t
                }).filter(function(t) {
                    return 0 !== t.size
                });
            if (0 === i.length) return t;
            if (1 === i.length) {
                var u = i[0];
                if (u === t || r && a(u) || s(t) && s(u)) return u
            }
            var c = new M(i);
            return r ? c = c.toKeyedSeq() : s(t) || (c = c.toSetSeq()), c = c.flatten(!0), c.size = i.reduce(function(t, e) {
                if (void 0 !== t) {
                    var n = e.size;
                    if (void 0 !== n) return t + n
                }
            }, 0), c
        }

        function ye(t, e, n) {
            var r = ke(t);
            return r.__iterateUncached = function(r, i) {
                function a(t, c) {
                    var l = this;
                    t.__iterate(function(t, i) {
                        return (!e || c < e) && o(t) ? a(t, c + 1) : !1 === r(t, n ? i : s++, l) && (u = !0), !u
                    }, i)
                }
                var s = 0,
                    u = !1;
                return a(t, 0), s
            }, r.__iteratorUncached = function(r, i) {
                var a = t.__iterator(r, i),
                    s = [],
                    u = 0;
                return new _(function() {
                    for (; a;) {
                        var t = a.next();
                        if (!1 === t.done) {
                            var c = t.value;
                            if (r === _n && (c = c[1]), e && !(s.length < e) || !o(c)) return n ? t : E(r, u++, c, t);
                            s.push(a), a = c.__iterator(r, i)
                        } else a = s.pop()
                    }
                    return T()
                })
            }, r
        }

        function ge(t, e, n) {
            var r = Oe(t);
            return t.toSeq().map(function(i, o) {
                return r(e.call(n, i, o, t))
            }).flatten(!0)
        }

        function be(t, e) {
            var n = ke(t);
            return n.size = t.size && 2 * t.size - 1, n.__iterateUncached = function(n, r) {
                var i = this,
                    o = 0;
                return t.__iterate(function(t, r) {
                    return (!o || !1 !== n(e, o++, i)) && !1 !== n(t, o++, i)
                }, r), o
            }, n.__iteratorUncached = function(n, r) {
                var i, o = t.__iterator(wn, r),
                    a = 0;
                return new _(function() {
                    return (!i || a % 2) && (i = o.next()).done ? i : a % 2 ? E(n, a++, e) : E(n, a++, i.value, i)
                })
            }, n
        }

        function we(t, e, n) {
            e || (e = Ie);
            var r = a(t),
                i = 0,
                o = t.toSeq().map(function(e, r) {
                    return [r, e, i++, n ? n(e, r, t) : e]
                }).toArray();
            return o.sort(function(t, n) {
                return e(t[3], n[3]) || t[2] - n[2]
            }).forEach(r ? function(t, e) {
                o[e].length = 2
            } : function(t, e) {
                o[e] = t[1]
            }), r ? I(o) : s(t) ? A(o) : N(o)
        }

        function _e(t, e, n) {
            if (e || (e = Ie), n) {
                var r = t.toSeq().map(function(e, r) {
                    return [e, n(e, r, t)]
                }).reduce(function(t, n) {
                    return Ee(e, t[1], n[1]) ? n : t
                });
                return r && r[0]
            }
            return t.reduce(function(t, n) {
                return Ee(e, t, n) ? n : t
            })
        }

        function Ee(t, e, n) {
            var r = t(n, e);
            return 0 === r && n !== e && (void 0 === n || null === n || n !== n) || r > 0
        }

        function Te(t, n, r) {
            var i = ke(t);
            return i.size = new M(r).map(function(t) {
                return t.size
            }).min(), i.__iterate = function(t, e) {
                for (var n, r = this.__iterator(wn, e), i = 0; !(n = r.next()).done && !1 !== t(n.value, i++, this););
                return i
            }, i.__iteratorUncached = function(t, i) {
                var o = r.map(function(t) {
                        return t = e(t), C(i ? t.reverse() : t)
                    }),
                    a = 0,
                    s = !1;
                return new _(function() {
                    var e;
                    return s || (e = o.map(function(t) {
                        return t.next()
                    }), s = e.some(function(t) {
                        return t.done
                    })), s ? T() : E(t, a++, n.apply(null, e.map(function(t) {
                        return t.value
                    })))
                })
            }, i
        }

        function Se(t, e) {
            return L(t) ? e : t.constructor(e)
        }

        function Pe(t) {
            if (t !== Object(t)) throw new TypeError("Expected [K, V] tuple: " + t)
        }

        function Ce(t) {
            return lt(t.size), d(t)
        }

        function Oe(t) {
            return a(t) ? n : s(t) ? r : i
        }

        function ke(t) {
            return Object.create((a(t) ? I : s(t) ? A : N).prototype)
        }

        function xe() {
            return this._iter.cacheResult ? (this._iter.cacheResult(), this.size = this._iter.size, this) : x.prototype.cacheResult.call(this)
        }

        function Ie(t, e) {
            return t > e ? 1 : t < e ? -1 : 0
        }

        function Ae(t) {
            var n = C(t);
            if (!n) {
                if (!k(t)) throw new TypeError("Expected iterable or array-like: " + t);
                n = C(e(t))
            }
            return n
        }

        function Ne(t, e) {
            var n, r = function(o) {
                    if (o instanceof r) return o;
                    if (!(this instanceof r)) return new r(o);
                    if (!n) {
                        n = !0;
                        var a = Object.keys(t);
                        De(i, a), i.size = a.length, i._name = e, i._keys = a, i._defaultValues = t
                    }
                    this._map = ft(o)
                },
                i = r.prototype = Object.create(Jn);
            return i.constructor = r, r
        }

        function Me(t, e, n) {
            var r = Object.create(Object.getPrototypeOf(t));
            return r._map = e, r.__ownerID = n, r
        }

        function Re(t) {
            return t._name || t.constructor.name || "Record"
        }

        function De(t, e) {
            try {
                e.forEach(je.bind(void 0, t))
            } catch (t) {}
        }

        function je(t, e) {
            Object.defineProperty(t, e, {
                get: function() {
                    return this.get(e)
                },
                set: function(t) {
                    Q(this.__ownerID, "Cannot set on an immutable record."), this.set(e, t)
                }
            })
        }

        function Le(t) {
            return null === t || void 0 === t ? Be() : Ue(t) && !c(t) ? t : Be().withMutations(function(e) {
                var n = i(t);
                lt(n.size), n.forEach(function(t) {
                    return e.add(t)
                })
            })
        }

        function Ue(t) {
            return !(!t || !t[Qn])
        }

        function Fe(t, e) {
            return t.__ownerID ? (t.size = e.size, t._map = e, t) : e === t._map ? t : 0 === e.size ? t.__empty() : t.__make(e)
        }

        function He(t, e) {
            var n = Object.create(Zn);
            return n.size = t ? t.size : 0, n._map = t, n.__ownerID = e, n
        }

        function Be() {
            return tr || (tr = He(Et()))
        }

        function ze(t) {
            return null === t || void 0 === t ? We() : qe(t) ? t : We().withMutations(function(e) {
                var n = i(t);
                lt(n.size), n.forEach(function(t) {
                    return e.add(t)
                })
            })
        }

        function qe(t) {
            return Ue(t) && c(t)
        }

        function Ve(t, e) {
            var n = Object.create(er);
            return n.size = t ? t.size : 0, n._map = t, n.__ownerID = e, n
        }

        function We() {
            return nr || (nr = Ve(ee()))
        }

        function Ke(t) {
            return null === t || void 0 === t ? $e() : Ye(t) ? t : $e().unshiftAll(t)
        }

        function Ye(t) {
            return !(!t || !t[rr])
        }

        function Ge(t, e, n, r) {
            var i = Object.create(ir);
            return i.size = t, i._head = e, i.__ownerID = n, i.__hash = r, i.__altered = !1, i
        }

        function $e() {
            return or || (or = Ge(0))
        }

        function Xe(t, e) {
            var n = function(n) {
                t.prototype[n] = e[n]
            };
            return Object.keys(e).forEach(n), Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(e).forEach(n), t
        }

        function Je(t, e) {
            return e
        }

        function Qe(t, e) {
            return [e, t]
        }

        function Ze(t) {
            return function() {
                return !t.apply(this, arguments)
            }
        }

        function tn(t) {
            return function() {
                return -t.apply(this, arguments)
            }
        }

        function en(t) {
            return "string" == typeof t ? JSON.stringify(t) : String(t)
        }

        function nn() {
            return p(arguments)
        }

        function rn(t, e) {
            return t < e ? 1 : t > e ? -1 : 0
        }

        function on(t) {
            if (t.size === 1 / 0) return 0;
            var e = c(t),
                n = a(t),
                r = e ? 1 : 0;
            return an(t.__iterate(n ? e ? function(t, e) {
                r = 31 * r + sn(ot(t), ot(e)) | 0
            } : function(t, e) {
                r = r + sn(ot(t), ot(e)) | 0
            } : e ? function(t) {
                r = 31 * r + ot(t) | 0
            } : function(t) {
                r = r + ot(t) | 0
            }), r)
        }

        function an(t, e) {
            return e = In(e, 3432918353), e = In(e << 15 | e >>> -15, 461845907), e = In(e << 13 | e >>> -13, 5), e = (e + 3864292196 | 0) ^ t, e = In(e ^ e >>> 16, 2246822507), e = In(e ^ e >>> 13, 3266489909), e = it(e ^ e >>> 16)
        }

        function sn(t, e) {
            return t ^ e + 2654435769 + (t << 6) + (t >> 2) | 0
        }
        var un = Array.prototype.slice;
        t(n, e), t(r, e), t(i, e), e.isIterable = o, e.isKeyed = a, e.isIndexed = s, e.isAssociative = u, e.isOrdered = c, e.Keyed = n, e.Indexed = r, e.Set = i;
        var cn = "@@__IMMUTABLE_ITERABLE__@@",
            ln = "@@__IMMUTABLE_KEYED__@@",
            fn = "@@__IMMUTABLE_INDEXED__@@",
            hn = "@@__IMMUTABLE_ORDERED__@@",
            pn = 5,
            dn = 1 << pn,
            mn = dn - 1,
            vn = {},
            yn = {
                value: !1
            },
            gn = {
                value: !1
            },
            bn = 0,
            wn = 1,
            _n = 2,
            En = "function" == typeof Symbol && Symbol.iterator,
            Tn = "@@iterator",
            Sn = En || Tn;
        _.prototype.toString = function() {
            return "[Iterator]"
        }, _.KEYS = bn, _.VALUES = wn, _.ENTRIES = _n, _.prototype.inspect = _.prototype.toSource = function() {
            return this.toString()
        }, _.prototype[Sn] = function() {
            return this
        }, t(x, e), x.of = function() {
            return x(arguments)
        }, x.prototype.toSeq = function() {
            return this
        }, x.prototype.toString = function() {
            return this.__toString("Seq {", "}")
        }, x.prototype.cacheResult = function() {
            return !this._cache && this.__iterateUncached && (this._cache = this.entrySeq().toArray(), this.size = this._cache.length), this
        }, x.prototype.__iterate = function(t, e) {
            return q(this, t, e, !0)
        }, x.prototype.__iterator = function(t, e) {
            return V(this, t, e, !0)
        }, t(I, x), I.prototype.toKeyedSeq = function() {
            return this
        }, t(A, x), A.of = function() {
            return A(arguments)
        }, A.prototype.toIndexedSeq = function() {
            return this
        }, A.prototype.toString = function() {
            return this.__toString("Seq [", "]")
        }, A.prototype.__iterate = function(t, e) {
            return q(this, t, e, !1)
        }, A.prototype.__iterator = function(t, e) {
            return V(this, t, e, !1)
        }, t(N, x), N.of = function() {
            return N(arguments)
        }, N.prototype.toSetSeq = function() {
            return this
        }, x.isSeq = L, x.Keyed = I, x.Set = N, x.Indexed = A;
        var Pn = "@@__IMMUTABLE_SEQ__@@";
        x.prototype[Pn] = !0, t(M, A), M.prototype.get = function(t, e) {
            return this.has(t) ? this._array[m(this, t)] : e
        }, M.prototype.__iterate = function(t, e) {
            for (var n = this._array, r = n.length - 1, i = 0; i <= r; i++)
                if (!1 === t(n[e ? r - i : i], i, this)) return i + 1;
            return i
        }, M.prototype.__iterator = function(t, e) {
            var n = this._array,
                r = n.length - 1,
                i = 0;
            return new _(function() {
                return i > r ? T() : E(t, i, n[e ? r - i++ : i++])
            })
        }, t(R, I), R.prototype.get = function(t, e) {
            return void 0 === e || this.has(t) ? this._object[t] : e
        }, R.prototype.has = function(t) {
            return this._object.hasOwnProperty(t)
        }, R.prototype.__iterate = function(t, e) {
            for (var n = this._object, r = this._keys, i = r.length - 1, o = 0; o <= i; o++) {
                var a = r[e ? i - o : o];
                if (!1 === t(n[a], a, this)) return o + 1
            }
            return o
        }, R.prototype.__iterator = function(t, e) {
            var n = this._object,
                r = this._keys,
                i = r.length - 1,
                o = 0;
            return new _(function() {
                var a = r[e ? i - o : o];
                return o++ > i ? T() : E(t, a, n[a])
            })
        }, R.prototype[hn] = !0, t(D, A), D.prototype.__iterateUncached = function(t, e) {
            if (e) return this.cacheResult().__iterate(t, e);
            var n = C(this._iterable),
                r = 0;
            if (P(n))
                for (var i; !(i = n.next()).done && !1 !== t(i.value, r++, this););
            return r
        }, D.prototype.__iteratorUncached = function(t, e) {
            if (e) return this.cacheResult().__iterator(t, e);
            var n = C(this._iterable);
            if (!P(n)) return new _(T);
            var r = 0;
            return new _(function() {
                var e = n.next();
                return e.done ? e : E(t, r++, e.value)
            })
        }, t(j, A), j.prototype.__iterateUncached = function(t, e) {
            if (e) return this.cacheResult().__iterate(t, e);
            for (var n = this._iterator, r = this._iteratorCache, i = 0; i < r.length;)
                if (!1 === t(r[i], i++, this)) return i;
            for (var o; !(o = n.next()).done;) {
                var a = o.value;
                if (r[i] = a, !1 === t(a, i++, this)) break
            }
            return i
        }, j.prototype.__iteratorUncached = function(t, e) {
            if (e) return this.cacheResult().__iterator(t, e);
            var n = this._iterator,
                r = this._iteratorCache,
                i = 0;
            return new _(function() {
                if (i >= r.length) {
                    var e = n.next();
                    if (e.done) return e;
                    r[i] = e.value
                }
                return E(t, i, r[i++])
            })
        };
        var Cn;
        t(J, A), J.prototype.toString = function() {
            return 0 === this.size ? "Repeat []" : "Repeat [ " + this._value + " " + this.size + " times ]"
        }, J.prototype.get = function(t, e) {
            return this.has(t) ? this._value : e
        }, J.prototype.includes = function(t) {
            return $(this._value, t)
        }, J.prototype.slice = function(t, e) {
            var n = this.size;
            return y(t, e, n) ? this : new J(this._value, b(e, n) - g(t, n))
        }, J.prototype.reverse = function() {
            return this
        }, J.prototype.indexOf = function(t) {
            return $(this._value, t) ? 0 : -1
        }, J.prototype.lastIndexOf = function(t) {
            return $(this._value, t) ? this.size : -1
        }, J.prototype.__iterate = function(t, e) {
            for (var n = 0; n < this.size; n++)
                if (!1 === t(this._value, n, this)) return n + 1;
            return n
        }, J.prototype.__iterator = function(t, e) {
            var n = this,
                r = 0;
            return new _(function() {
                return r < n.size ? E(t, r++, n._value) : T()
            })
        }, J.prototype.equals = function(t) {
            return t instanceof J ? $(this._value, t._value) : X(t)
        };
        var On;
        t(Z, A), Z.prototype.toString = function() {
            return 0 === this.size ? "Range []" : "Range [ " + this._start + "..." + this._end + (1 !== this._step ? " by " + this._step : "") + " ]"
        }, Z.prototype.get = function(t, e) {
            return this.has(t) ? this._start + m(this, t) * this._step : e
        }, Z.prototype.includes = function(t) {
            var e = (t - this._start) / this._step;
            return e >= 0 && e < this.size && e === Math.floor(e)
        }, Z.prototype.slice = function(t, e) {
            return y(t, e, this.size) ? this : (t = g(t, this.size), (e = b(e, this.size)) <= t ? new Z(0, 0) : new Z(this.get(t, this._end), this.get(e, this._end), this._step))
        }, Z.prototype.indexOf = function(t) {
            var e = t - this._start;
            if (e % this._step == 0) {
                var n = e / this._step;
                if (n >= 0 && n < this.size) return n
            }
            return -1
        }, Z.prototype.lastIndexOf = function(t) {
            return this.indexOf(t)
        }, Z.prototype.__iterate = function(t, e) {
            for (var n = this.size - 1, r = this._step, i = e ? this._start + n * r : this._start, o = 0; o <= n; o++) {
                if (!1 === t(i, o, this)) return o + 1;
                i += e ? -r : r
            }
            return o
        }, Z.prototype.__iterator = function(t, e) {
            var n = this.size - 1,
                r = this._step,
                i = e ? this._start + n * r : this._start,
                o = 0;
            return new _(function() {
                var a = i;
                return i += e ? -r : r, o > n ? T() : E(t, o++, a)
            })
        }, Z.prototype.equals = function(t) {
            return t instanceof Z ? this._start === t._start && this._end === t._end && this._step === t._step : X(this, t)
        };
        var kn;
        t(tt, e), t(et, tt), t(nt, tt), t(rt, tt), tt.Keyed = et, tt.Indexed = nt, tt.Set = rt;
        var xn, In = "function" == typeof Math.imul && -2 === Math.imul(4294967295, 2) ? Math.imul : function(t, e) {
                var n = 65535 & (t |= 0),
                    r = 65535 & (e |= 0);
                return n * r + ((t >>> 16) * r + n * (e >>> 16) << 16 >>> 0) | 0
            },
            An = Object.isExtensible,
            Nn = function() {
                try {
                    return Object.defineProperty({}, "@", {}), !0
                } catch (t) {
                    return !1
                }
            }(),
            Mn = "function" == typeof WeakMap;
        Mn && (xn = new WeakMap);
        var Rn = 0,
            Dn = "__immutablehash__";
        "function" == typeof Symbol && (Dn = Symbol(Dn));
        var jn = 16,
            Ln = 255,
            Un = 0,
            Fn = {};
        t(ft, et), ft.of = function() {
            var t = un.call(arguments, 0);
            return Et().withMutations(function(e) {
                for (var n = 0; n < t.length; n += 2) {
                    if (n + 1 >= t.length) throw new Error("Missing value for key: " + t[n]);
                    e.set(t[n], t[n + 1])
                }
            })
        }, ft.prototype.toString = function() {
            return this.__toString("Map {", "}")
        }, ft.prototype.get = function(t, e) {
            return this._root ? this._root.get(0, void 0, t, e) : e
        }, ft.prototype.set = function(t, e) {
            return Tt(this, t, e)
        }, ft.prototype.setIn = function(t, e) {
            return this.updateIn(t, vn, function() {
                return e
            })
        }, ft.prototype.remove = function(t) {
            return Tt(this, t, vn)
        }, ft.prototype.deleteIn = function(t) {
            return this.updateIn(t, function() {
                return vn
            })
        }, ft.prototype.update = function(t, e, n) {
            return 1 === arguments.length ? t(this) : this.updateIn([t], e, n)
        }, ft.prototype.updateIn = function(t, e, n) {
            n || (n = e, e = void 0);
            var r = Rt(this, Ae(t), e, n);
            return r === vn ? void 0 : r
        }, ft.prototype.clear = function() {
            return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._root = null, this.__hash = void 0, this.__altered = !0, this) : Et()
        }, ft.prototype.merge = function() {
            return It(this, void 0, arguments)
        }, ft.prototype.mergeWith = function(t) {
            return It(this, t, un.call(arguments, 1))
        }, ft.prototype.mergeIn = function(t) {
            var e = un.call(arguments, 1);
            return this.updateIn(t, Et(), function(t) {
                return "function" == typeof t.merge ? t.merge.apply(t, e) : e[e.length - 1]
            })
        }, ft.prototype.mergeDeep = function() {
            return It(this, At, arguments)
        }, ft.prototype.mergeDeepWith = function(t) {
            var e = un.call(arguments, 1);
            return It(this, Nt(t), e)
        }, ft.prototype.mergeDeepIn = function(t) {
            var e = un.call(arguments, 1);
            return this.updateIn(t, Et(), function(t) {
                return "function" == typeof t.mergeDeep ? t.mergeDeep.apply(t, e) : e[e.length - 1]
            })
        }, ft.prototype.sort = function(t) {
            return Qt(we(this, t))
        }, ft.prototype.sortBy = function(t, e) {
            return Qt(we(this, e, t))
        }, ft.prototype.withMutations = function(t) {
            var e = this.asMutable();
            return t(e), e.wasAltered() ? e.__ensureOwner(this.__ownerID) : this
        }, ft.prototype.asMutable = function() {
            return this.__ownerID ? this : this.__ensureOwner(new h)
        }, ft.prototype.asImmutable = function() {
            return this.__ensureOwner()
        }, ft.prototype.wasAltered = function() {
            return this.__altered
        }, ft.prototype.__iterator = function(t, e) {
            return new gt(this, t, e)
        }, ft.prototype.__iterate = function(t, e) {
            var n = this,
                r = 0;
            return this._root && this._root.iterate(function(e) {
                return r++, t(e[1], e[0], n)
            }, e), r
        }, ft.prototype.__ensureOwner = function(t) {
            return t === this.__ownerID ? this : t ? _t(this.size, this._root, t, this.__hash) : (this.__ownerID = t, this.__altered = !1, this)
        }, ft.isMap = ht;
        var Hn = "@@__IMMUTABLE_MAP__@@",
            Bn = ft.prototype;
        Bn[Hn] = !0, Bn.delete = Bn.remove, Bn.removeIn = Bn.deleteIn, pt.prototype.get = function(t, e, n, r) {
            for (var i = this.entries, o = 0, a = i.length; o < a; o++)
                if ($(n, i[o][0])) return i[o][1];
            return r
        }, pt.prototype.update = function(t, e, n, r, i, o, a) {
            for (var s = i === vn, u = this.entries, c = 0, l = u.length; c < l && !$(r, u[c][0]); c++);
            var h = c < l;
            if (h ? u[c][1] === i : s) return this;
            if (f(a), (s || !h) && f(o), !s || 1 !== u.length) {
                if (!h && !s && u.length >= qn) return Ot(t, u, r, i);
                var d = t && t === this.ownerID,
                    m = d ? u : p(u);
                return h ? s ? c === l - 1 ? m.pop() : m[c] = m.pop() : m[c] = [r, i] : m.push([r, i]), d ? (this.entries = m, this) : new pt(t, m)
            }
        }, dt.prototype.get = function(t, e, n, r) {
            void 0 === e && (e = ot(n));
            var i = 1 << ((0 === t ? e : e >>> t) & mn),
                o = this.bitmap;
            return 0 == (o & i) ? r : this.nodes[Dt(o & i - 1)].get(t + pn, e, n, r)
        }, dt.prototype.update = function(t, e, n, r, i, o, a) {
            void 0 === n && (n = ot(r));
            var s = (0 === e ? n : n >>> e) & mn,
                u = 1 << s,
                c = this.bitmap,
                l = 0 != (c & u);
            if (!l && i === vn) return this;
            var f = Dt(c & u - 1),
                h = this.nodes,
                p = l ? h[f] : void 0,
                d = St(p, t, e + pn, n, r, i, o, a);
            if (d === p) return this;
            if (!l && d && h.length >= Vn) return xt(t, h, c, s, d);
            if (l && !d && 2 === h.length && Pt(h[1 ^ f])) return h[1 ^ f];
            if (l && d && 1 === h.length && Pt(d)) return d;
            var m = t && t === this.ownerID,
                v = l ? d ? c : c ^ u : c | u,
                y = l ? d ? jt(h, f, d, m) : Ut(h, f, m) : Lt(h, f, d, m);
            return m ? (this.bitmap = v, this.nodes = y, this) : new dt(t, v, y)
        }, mt.prototype.get = function(t, e, n, r) {
            void 0 === e && (e = ot(n));
            var i = (0 === t ? e : e >>> t) & mn,
                o = this.nodes[i];
            return o ? o.get(t + pn, e, n, r) : r
        }, mt.prototype.update = function(t, e, n, r, i, o, a) {
            void 0 === n && (n = ot(r));
            var s = (0 === e ? n : n >>> e) & mn,
                u = i === vn,
                c = this.nodes,
                l = c[s];
            if (u && !l) return this;
            var f = St(l, t, e + pn, n, r, i, o, a);
            if (f === l) return this;
            var h = this.count;
            if (l) {
                if (!f && --h < Wn) return kt(t, c, h, s)
            } else h++;
            var p = t && t === this.ownerID,
                d = jt(c, s, f, p);
            return p ? (this.count = h, this.nodes = d, this) : new mt(t, h, d)
        }, vt.prototype.get = function(t, e, n, r) {
            for (var i = this.entries, o = 0, a = i.length; o < a; o++)
                if ($(n, i[o][0])) return i[o][1];
            return r
        }, vt.prototype.update = function(t, e, n, r, i, o, a) {
            void 0 === n && (n = ot(r));
            var s = i === vn;
            if (n !== this.keyHash) return s ? this : (f(a), f(o), Ct(this, t, e, n, [r, i]));
            for (var u = this.entries, c = 0, l = u.length; c < l && !$(r, u[c][0]); c++);
            var h = c < l;
            if (h ? u[c][1] === i : s) return this;
            if (f(a), (s || !h) && f(o), s && 2 === l) return new yt(t, this.keyHash, u[1 ^ c]);
            var d = t && t === this.ownerID,
                m = d ? u : p(u);
            return h ? s ? c === l - 1 ? m.pop() : m[c] = m.pop() : m[c] = [r, i] : m.push([r, i]), d ? (this.entries = m, this) : new vt(t, this.keyHash, m)
        }, yt.prototype.get = function(t, e, n, r) {
            return $(n, this.entry[0]) ? this.entry[1] : r
        }, yt.prototype.update = function(t, e, n, r, i, o, a) {
            var s = i === vn,
                u = $(r, this.entry[0]);
            return (u ? i === this.entry[1] : s) ? this : (f(a), s ? void f(o) : u ? t && t === this.ownerID ? (this.entry[1] = i, this) : new yt(t, this.keyHash, [r, i]) : (f(o), Ct(this, t, e, ot(r), [r, i])))
        }, pt.prototype.iterate = vt.prototype.iterate = function(t, e) {
            for (var n = this.entries, r = 0, i = n.length - 1; r <= i; r++)
                if (!1 === t(n[e ? i - r : r])) return !1
        }, dt.prototype.iterate = mt.prototype.iterate = function(t, e) {
            for (var n = this.nodes, r = 0, i = n.length - 1; r <= i; r++) {
                var o = n[e ? i - r : r];
                if (o && !1 === o.iterate(t, e)) return !1
            }
        }, yt.prototype.iterate = function(t, e) {
            return t(this.entry)
        }, t(gt, _), gt.prototype.next = function() {
            for (var t = this._type, e = this._stack; e;) {
                var n, r = e.node,
                    i = e.index++;
                if (r.entry) {
                    if (0 === i) return bt(t, r.entry)
                } else if (r.entries) {
                    if (n = r.entries.length - 1, i <= n) return bt(t, r.entries[this._reverse ? n - i : i])
                } else if (n = r.nodes.length - 1, i <= n) {
                    var o = r.nodes[this._reverse ? n - i : i];
                    if (o) {
                        if (o.entry) return bt(t, o.entry);
                        e = this._stack = wt(o, e)
                    }
                    continue
                }
                e = this._stack = this._stack.__prev
            }
            return T()
        };
        var zn, qn = dn / 4,
            Vn = dn / 2,
            Wn = dn / 4;
        t(Ft, nt), Ft.of = function() {
            return this(arguments)
        }, Ft.prototype.toString = function() {
            return this.__toString("List [", "]")
        }, Ft.prototype.get = function(t, e) {
            if ((t = m(this, t)) >= 0 && t < this.size) {
                var n = Gt(this, t += this._origin);
                return n && n.array[t & mn]
            }
            return e
        }, Ft.prototype.set = function(t, e) {
            return Wt(this, t, e)
        }, Ft.prototype.remove = function(t) {
            return this.has(t) ? 0 === t ? this.shift() : t === this.size - 1 ? this.pop() : this.splice(t, 1) : this
        }, Ft.prototype.insert = function(t, e) {
            return this.splice(t, 0, e)
        }, Ft.prototype.clear = function() {
            return 0 === this.size ? this : this.__ownerID ? (this.size = this._origin = this._capacity = 0, this._level = pn, this._root = this._tail = null, this.__hash = void 0, this.__altered = !0, this) : Vt()
        }, Ft.prototype.push = function() {
            var t = arguments,
                e = this.size;
            return this.withMutations(function(n) {
                $t(n, 0, e + t.length);
                for (var r = 0; r < t.length; r++) n.set(e + r, t[r])
            })
        }, Ft.prototype.pop = function() {
            return $t(this, 0, -1)
        }, Ft.prototype.unshift = function() {
            var t = arguments;
            return this.withMutations(function(e) {
                $t(e, -t.length);
                for (var n = 0; n < t.length; n++) e.set(n, t[n])
            })
        }, Ft.prototype.shift = function() {
            return $t(this, 1)
        }, Ft.prototype.merge = function() {
            return Xt(this, void 0, arguments)
        }, Ft.prototype.mergeWith = function(t) {
            return Xt(this, t, un.call(arguments, 1))
        }, Ft.prototype.mergeDeep = function() {
            return Xt(this, At, arguments)
        }, Ft.prototype.mergeDeepWith = function(t) {
            var e = un.call(arguments, 1);
            return Xt(this, Nt(t), e)
        }, Ft.prototype.setSize = function(t) {
            return $t(this, 0, t)
        }, Ft.prototype.slice = function(t, e) {
            var n = this.size;
            return y(t, e, n) ? this : $t(this, g(t, n), b(e, n))
        }, Ft.prototype.__iterator = function(t, e) {
            var n = 0,
                r = zt(this, e);
            return new _(function() {
                var e = r();
                return e === $n ? T() : E(t, n++, e)
            })
        }, Ft.prototype.__iterate = function(t, e) {
            for (var n, r = 0, i = zt(this, e);
                (n = i()) !== $n && !1 !== t(n, r++, this););
            return r
        }, Ft.prototype.__ensureOwner = function(t) {
            return t === this.__ownerID ? this : t ? qt(this._origin, this._capacity, this._level, this._root, this._tail, t, this.__hash) : (this.__ownerID = t, this)
        }, Ft.isList = Ht;
        var Kn = "@@__IMMUTABLE_LIST__@@",
            Yn = Ft.prototype;
        Yn[Kn] = !0, Yn.delete = Yn.remove, Yn.setIn = Bn.setIn, Yn.deleteIn = Yn.removeIn = Bn.removeIn, Yn.update = Bn.update, Yn.updateIn = Bn.updateIn, Yn.mergeIn = Bn.mergeIn, Yn.mergeDeepIn = Bn.mergeDeepIn, Yn.withMutations = Bn.withMutations, Yn.asMutable = Bn.asMutable, Yn.asImmutable = Bn.asImmutable, Yn.wasAltered = Bn.wasAltered, Bt.prototype.removeBefore = function(t, e, n) {
            if (n === e ? 1 << e : 0 === this.array.length) return this;
            var r = n >>> e & mn;
            if (r >= this.array.length) return new Bt([], t);
            var i, o = 0 === r;
            if (e > 0) {
                var a = this.array[r];
                if ((i = a && a.removeBefore(t, e - pn, n)) === a && o) return this
            }
            if (o && !i) return this;
            var s = Yt(this, t);
            if (!o)
                for (var u = 0; u < r; u++) s.array[u] = void 0;
            return i && (s.array[r] = i), s
        }, Bt.prototype.removeAfter = function(t, e, n) {
            if (n === (e ? 1 << e : 0) || 0 === this.array.length) return this;
            var r = n - 1 >>> e & mn;
            if (r >= this.array.length) return this;
            var i;
            if (e > 0) {
                var o = this.array[r];
                if ((i = o && o.removeAfter(t, e - pn, n)) === o && r === this.array.length - 1) return this
            }
            var a = Yt(this, t);
            return a.array.splice(r + 1), i && (a.array[r] = i), a
        };
        var Gn, $n = {};
        t(Qt, ft), Qt.of = function() {
            return this(arguments)
        }, Qt.prototype.toString = function() {
            return this.__toString("OrderedMap {", "}")
        }, Qt.prototype.get = function(t, e) {
            var n = this._map.get(t);
            return void 0 !== n ? this._list.get(n)[1] : e
        }, Qt.prototype.clear = function() {
            return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._map.clear(), this._list.clear(), this) : ee()
        }, Qt.prototype.set = function(t, e) {
            return ne(this, t, e)
        }, Qt.prototype.remove = function(t) {
            return ne(this, t, vn)
        }, Qt.prototype.wasAltered = function() {
            return this._map.wasAltered() || this._list.wasAltered()
        }, Qt.prototype.__iterate = function(t, e) {
            var n = this;
            return this._list.__iterate(function(e) {
                return e && t(e[1], e[0], n)
            }, e)
        }, Qt.prototype.__iterator = function(t, e) {
            return this._list.fromEntrySeq().__iterator(t, e)
        }, Qt.prototype.__ensureOwner = function(t) {
            if (t === this.__ownerID) return this;
            var e = this._map.__ensureOwner(t),
                n = this._list.__ensureOwner(t);
            return t ? te(e, n, t, this.__hash) : (this.__ownerID = t, this._map = e, this._list = n, this)
        }, Qt.isOrderedMap = Zt, Qt.prototype[hn] = !0, Qt.prototype.delete = Qt.prototype.remove;
        var Xn;
        t(re, I), re.prototype.get = function(t, e) {
            return this._iter.get(t, e)
        }, re.prototype.has = function(t) {
            return this._iter.has(t)
        }, re.prototype.valueSeq = function() {
            return this._iter.valueSeq()
        }, re.prototype.reverse = function() {
            var t = this,
                e = ce(this, !0);
            return this._useKeys || (e.valueSeq = function() {
                return t._iter.toSeq().reverse()
            }), e
        }, re.prototype.map = function(t, e) {
            var n = this,
                r = ue(this, t, e);
            return this._useKeys || (r.valueSeq = function() {
                return n._iter.toSeq().map(t, e)
            }), r
        }, re.prototype.__iterate = function(t, e) {
            var n, r = this;
            return this._iter.__iterate(this._useKeys ? function(e, n) {
                return t(e, n, r)
            } : (n = e ? Ce(this) : 0, function(i) {
                return t(i, e ? --n : n++, r)
            }), e)
        }, re.prototype.__iterator = function(t, e) {
            if (this._useKeys) return this._iter.__iterator(t, e);
            var n = this._iter.__iterator(wn, e),
                r = e ? Ce(this) : 0;
            return new _(function() {
                var i = n.next();
                return i.done ? i : E(t, e ? --r : r++, i.value, i)
            })
        }, re.prototype[hn] = !0, t(ie, A), ie.prototype.includes = function(t) {
            return this._iter.includes(t)
        }, ie.prototype.__iterate = function(t, e) {
            var n = this,
                r = 0;
            return this._iter.__iterate(function(e) {
                return t(e, r++, n)
            }, e)
        }, ie.prototype.__iterator = function(t, e) {
            var n = this._iter.__iterator(wn, e),
                r = 0;
            return new _(function() {
                var e = n.next();
                return e.done ? e : E(t, r++, e.value, e)
            })
        }, t(oe, N), oe.prototype.has = function(t) {
            return this._iter.includes(t)
        }, oe.prototype.__iterate = function(t, e) {
            var n = this;
            return this._iter.__iterate(function(e) {
                return t(e, e, n)
            }, e)
        }, oe.prototype.__iterator = function(t, e) {
            var n = this._iter.__iterator(wn, e);
            return new _(function() {
                var e = n.next();
                return e.done ? e : E(t, e.value, e.value, e)
            })
        }, t(ae, I), ae.prototype.entrySeq = function() {
            return this._iter.toSeq()
        }, ae.prototype.__iterate = function(t, e) {
            var n = this;
            return this._iter.__iterate(function(e) {
                if (e) {
                    Pe(e);
                    var r = o(e);
                    return t(r ? e.get(1) : e[1], r ? e.get(0) : e[0], n)
                }
            }, e)
        }, ae.prototype.__iterator = function(t, e) {
            var n = this._iter.__iterator(wn, e);
            return new _(function() {
                for (;;) {
                    var e = n.next();
                    if (e.done) return e;
                    var r = e.value;
                    if (r) {
                        Pe(r);
                        var i = o(r);
                        return E(t, i ? r.get(0) : r[0], i ? r.get(1) : r[1], e)
                    }
                }
            })
        }, ie.prototype.cacheResult = re.prototype.cacheResult = oe.prototype.cacheResult = ae.prototype.cacheResult = xe, t(Ne, et), Ne.prototype.toString = function() {
            return this.__toString(Re(this) + " {", "}")
        }, Ne.prototype.has = function(t) {
            return this._defaultValues.hasOwnProperty(t)
        }, Ne.prototype.get = function(t, e) {
            if (!this.has(t)) return e;
            var n = this._defaultValues[t];
            return this._map ? this._map.get(t, n) : n
        }, Ne.prototype.clear = function() {
            if (this.__ownerID) return this._map && this._map.clear(), this;
            var t = this.constructor;
            return t._empty || (t._empty = Me(this, Et()))
        }, Ne.prototype.set = function(t, e) {
            if (!this.has(t)) throw new Error('Cannot set unknown key "' + t + '" on ' + Re(this));
            if (this._map && !this._map.has(t) && e === this._defaultValues[t]) return this;
            var n = this._map && this._map.set(t, e);
            return this.__ownerID || n === this._map ? this : Me(this, n)
        }, Ne.prototype.remove = function(t) {
            if (!this.has(t)) return this;
            var e = this._map && this._map.remove(t);
            return this.__ownerID || e === this._map ? this : Me(this, e)
        }, Ne.prototype.wasAltered = function() {
            return this._map.wasAltered()
        }, Ne.prototype.__iterator = function(t, e) {
            var r = this;
            return n(this._defaultValues).map(function(t, e) {
                return r.get(e)
            }).__iterator(t, e)
        }, Ne.prototype.__iterate = function(t, e) {
            var r = this;
            return n(this._defaultValues).map(function(t, e) {
                return r.get(e)
            }).__iterate(t, e)
        }, Ne.prototype.__ensureOwner = function(t) {
            if (t === this.__ownerID) return this;
            var e = this._map && this._map.__ensureOwner(t);
            return t ? Me(this, e, t) : (this.__ownerID = t, this._map = e, this)
        };
        var Jn = Ne.prototype;
        Jn.delete = Jn.remove, Jn.deleteIn = Jn.removeIn = Bn.removeIn, Jn.merge = Bn.merge, Jn.mergeWith = Bn.mergeWith, Jn.mergeIn = Bn.mergeIn, Jn.mergeDeep = Bn.mergeDeep, Jn.mergeDeepWith = Bn.mergeDeepWith, Jn.mergeDeepIn = Bn.mergeDeepIn, Jn.setIn = Bn.setIn, Jn.update = Bn.update, Jn.updateIn = Bn.updateIn, Jn.withMutations = Bn.withMutations, Jn.asMutable = Bn.asMutable, Jn.asImmutable = Bn.asImmutable, t(Le, rt), Le.of = function() {
            return this(arguments)
        }, Le.fromKeys = function(t) {
            return this(n(t).keySeq())
        }, Le.prototype.toString = function() {
            return this.__toString("Set {", "}")
        }, Le.prototype.has = function(t) {
            return this._map.has(t)
        }, Le.prototype.add = function(t) {
            return Fe(this, this._map.set(t, !0))
        }, Le.prototype.remove = function(t) {
            return Fe(this, this._map.remove(t))
        }, Le.prototype.clear = function() {
            return Fe(this, this._map.clear())
        }, Le.prototype.union = function() {
            var t = un.call(arguments, 0);
            return 0 === (t = t.filter(function(t) {
                return 0 !== t.size
            })).length ? this : 0 !== this.size || this.__ownerID || 1 !== t.length ? this.withMutations(function(e) {
                for (var n = 0; n < t.length; n++) i(t[n]).forEach(function(t) {
                    return e.add(t)
                })
            }) : this.constructor(t[0])
        }, Le.prototype.intersect = function() {
            var t = un.call(arguments, 0);
            if (0 === t.length) return this;
            t = t.map(function(t) {
                return i(t)
            });
            var e = this;
            return this.withMutations(function(n) {
                e.forEach(function(e) {
                    t.every(function(t) {
                        return t.includes(e)
                    }) || n.remove(e)
                })
            })
        }, Le.prototype.subtract = function() {
            var t = un.call(arguments, 0);
            if (0 === t.length) return this;
            t = t.map(function(t) {
                return i(t)
            });
            var e = this;
            return this.withMutations(function(n) {
                e.forEach(function(e) {
                    t.some(function(t) {
                        return t.includes(e)
                    }) && n.remove(e)
                })
            })
        }, Le.prototype.merge = function() {
            return this.union.apply(this, arguments)
        }, Le.prototype.mergeWith = function(t) {
            var e = un.call(arguments, 1);
            return this.union.apply(this, e)
        }, Le.prototype.sort = function(t) {
            return ze(we(this, t))
        }, Le.prototype.sortBy = function(t, e) {
            return ze(we(this, e, t))
        }, Le.prototype.wasAltered = function() {
            return this._map.wasAltered()
        }, Le.prototype.__iterate = function(t, e) {
            var n = this;
            return this._map.__iterate(function(e, r) {
                return t(r, r, n)
            }, e)
        }, Le.prototype.__iterator = function(t, e) {
            return this._map.map(function(t, e) {
                return e
            }).__iterator(t, e)
        }, Le.prototype.__ensureOwner = function(t) {
            if (t === this.__ownerID) return this;
            var e = this._map.__ensureOwner(t);
            return t ? this.__make(e, t) : (this.__ownerID = t, this._map = e, this)
        }, Le.isSet = Ue;
        var Qn = "@@__IMMUTABLE_SET__@@",
            Zn = Le.prototype;
        Zn[Qn] = !0, Zn.delete = Zn.remove, Zn.mergeDeep = Zn.merge, Zn.mergeDeepWith = Zn.mergeWith, Zn.withMutations = Bn.withMutations, Zn.asMutable = Bn.asMutable, Zn.asImmutable = Bn.asImmutable, Zn.__empty = Be, Zn.__make = He;
        var tr;
        t(ze, Le), ze.of = function() {
            return this(arguments)
        }, ze.fromKeys = function(t) {
            return this(n(t).keySeq())
        }, ze.prototype.toString = function() {
            return this.__toString("OrderedSet {", "}")
        }, ze.isOrderedSet = qe;
        var er = ze.prototype;
        er[hn] = !0, er.__empty = We, er.__make = Ve;
        var nr;
        t(Ke, nt), Ke.of = function() {
            return this(arguments)
        }, Ke.prototype.toString = function() {
            return this.__toString("Stack [", "]")
        }, Ke.prototype.get = function(t, e) {
            var n = this._head;
            for (t = m(this, t); n && t--;) n = n.next;
            return n ? n.value : e
        }, Ke.prototype.peek = function() {
            return this._head && this._head.value
        }, Ke.prototype.push = function() {
            if (0 === arguments.length) return this;
            for (var t = this.size + arguments.length, e = this._head, n = arguments.length - 1; n >= 0; n--) e = {
                value: arguments[n],
                next: e
            };
            return this.__ownerID ? (this.size = t, this._head = e, this.__hash = void 0, this.__altered = !0, this) : Ge(t, e)
        }, Ke.prototype.pushAll = function(t) {
            if (0 === (t = r(t)).size) return this;
            lt(t.size);
            var e = this.size,
                n = this._head;
            return t.reverse().forEach(function(t) {
                e++, n = {
                    value: t,
                    next: n
                }
            }), this.__ownerID ? (this.size = e, this._head = n, this.__hash = void 0, this.__altered = !0, this) : Ge(e, n)
        }, Ke.prototype.pop = function() {
            return this.slice(1)
        }, Ke.prototype.unshift = function() {
            return this.push.apply(this, arguments)
        }, Ke.prototype.unshiftAll = function(t) {
            return this.pushAll(t)
        }, Ke.prototype.shift = function() {
            return this.pop.apply(this, arguments)
        }, Ke.prototype.clear = function() {
            return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._head = void 0, this.__hash = void 0, this.__altered = !0, this) : $e()
        }, Ke.prototype.slice = function(t, e) {
            if (y(t, e, this.size)) return this;
            var n = g(t, this.size);
            if (b(e, this.size) !== this.size) return nt.prototype.slice.call(this, t, e);
            for (var r = this.size - n, i = this._head; n--;) i = i.next;
            return this.__ownerID ? (this.size = r, this._head = i, this.__hash = void 0, this.__altered = !0, this) : Ge(r, i)
        }, Ke.prototype.__ensureOwner = function(t) {
            return t === this.__ownerID ? this : t ? Ge(this.size, this._head, t, this.__hash) : (this.__ownerID = t, this.__altered = !1, this)
        }, Ke.prototype.__iterate = function(t, e) {
            if (e) return this.reverse().__iterate(t);
            for (var n = 0, r = this._head; r && !1 !== t(r.value, n++, this);) r = r.next;
            return n
        }, Ke.prototype.__iterator = function(t, e) {
            if (e) return this.reverse().__iterator(t);
            var n = 0,
                r = this._head;
            return new _(function() {
                if (r) {
                    var e = r.value;
                    return r = r.next, E(t, n++, e)
                }
                return T()
            })
        }, Ke.isStack = Ye;
        var rr = "@@__IMMUTABLE_STACK__@@",
            ir = Ke.prototype;
        ir[rr] = !0, ir.withMutations = Bn.withMutations, ir.asMutable = Bn.asMutable, ir.asImmutable = Bn.asImmutable, ir.wasAltered = Bn.wasAltered;
        var or;
        e.Iterator = _, Xe(e, {
            toArray: function() {
                lt(this.size);
                var t = new Array(this.size || 0);
                return this.valueSeq().__iterate(function(e, n) {
                    t[n] = e
                }), t
            },
            toIndexedSeq: function() {
                return new ie(this)
            },
            toJS: function() {
                return this.toSeq().map(function(t) {
                    return t && "function" == typeof t.toJS ? t.toJS() : t
                }).__toJS()
            },
            toJSON: function() {
                return this.toSeq().map(function(t) {
                    return t && "function" == typeof t.toJSON ? t.toJSON() : t
                }).__toJS()
            },
            toKeyedSeq: function() {
                return new re(this, !0)
            },
            toMap: function() {
                return ft(this.toKeyedSeq())
            },
            toObject: function() {
                lt(this.size);
                var t = {};
                return this.__iterate(function(e, n) {
                    t[n] = e
                }), t
            },
            toOrderedMap: function() {
                return Qt(this.toKeyedSeq())
            },
            toOrderedSet: function() {
                return ze(a(this) ? this.valueSeq() : this)
            },
            toSet: function() {
                return Le(a(this) ? this.valueSeq() : this)
            },
            toSetSeq: function() {
                return new oe(this)
            },
            toSeq: function() {
                return s(this) ? this.toIndexedSeq() : a(this) ? this.toKeyedSeq() : this.toSetSeq()
            },
            toStack: function() {
                return Ke(a(this) ? this.valueSeq() : this)
            },
            toList: function() {
                return Ft(a(this) ? this.valueSeq() : this)
            },
            toString: function() {
                return "[Iterable]"
            },
            __toString: function(t, e) {
                return 0 === this.size ? t + e : t + " " + this.toSeq().map(this.__toStringMapper).join(", ") + " " + e
            },
            concat: function() {
                return Se(this, ve(this, un.call(arguments, 0)))
            },
            includes: function(t) {
                return this.some(function(e) {
                    return $(e, t)
                })
            },
            entries: function() {
                return this.__iterator(_n)
            },
            every: function(t, e) {
                lt(this.size);
                var n = !0;
                return this.__iterate(function(r, i, o) {
                    if (!t.call(e, r, i, o)) return n = !1, !1
                }), n
            },
            filter: function(t, e) {
                return Se(this, le(this, t, e, !0))
            },
            find: function(t, e, n) {
                var r = this.findEntry(t, e);
                return r ? r[1] : n
            },
            forEach: function(t, e) {
                return lt(this.size), this.__iterate(e ? t.bind(e) : t)
            },
            join: function(t) {
                lt(this.size), t = void 0 !== t ? "" + t : ",";
                var e = "",
                    n = !0;
                return this.__iterate(function(r) {
                    n ? n = !1 : e += t, e += null !== r && void 0 !== r ? r.toString() : ""
                }), e
            },
            keys: function() {
                return this.__iterator(bn)
            },
            map: function(t, e) {
                return Se(this, ue(this, t, e))
            },
            reduce: function(t, e, n) {
                lt(this.size);
                var r, i;
                return arguments.length < 2 ? i = !0 : r = e, this.__iterate(function(e, o, a) {
                    i ? (i = !1, r = e) : r = t.call(n, r, e, o, a)
                }), r
            },
            reduceRight: function(t, e, n) {
                var r = this.toKeyedSeq().reverse();
                return r.reduce.apply(r, arguments)
            },
            reverse: function() {
                return Se(this, ce(this, !0))
            },
            slice: function(t, e) {
                return Se(this, pe(this, t, e, !0))
            },
            some: function(t, e) {
                return !this.every(Ze(t), e)
            },
            sort: function(t) {
                return Se(this, we(this, t))
            },
            values: function() {
                return this.__iterator(wn)
            },
            butLast: function() {
                return this.slice(0, -1)
            },
            isEmpty: function() {
                return void 0 !== this.size ? 0 === this.size : !this.some(function() {
                    return !0
                })
            },
            count: function(t, e) {
                return d(t ? this.toSeq().filter(t, e) : this)
            },
            countBy: function(t, e) {
                return fe(this, t, e)
            },
            equals: function(t) {
                return X(this, t)
            },
            entrySeq: function() {
                var t = this;
                if (t._cache) return new M(t._cache);
                var e = t.toSeq().map(Qe).toIndexedSeq();
                return e.fromEntrySeq = function() {
                    return t.toSeq()
                }, e
            },
            filterNot: function(t, e) {
                return this.filter(Ze(t), e)
            },
            findEntry: function(t, e, n) {
                var r = n;
                return this.__iterate(function(n, i, o) {
                    if (t.call(e, n, i, o)) return r = [i, n], !1
                }), r
            },
            findKey: function(t, e) {
                var n = this.findEntry(t, e);
                return n && n[0]
            },
            findLast: function(t, e, n) {
                return this.toKeyedSeq().reverse().find(t, e, n)
            },
            findLastEntry: function(t, e, n) {
                return this.toKeyedSeq().reverse().findEntry(t, e, n)
            },
            findLastKey: function(t, e) {
                return this.toKeyedSeq().reverse().findKey(t, e)
            },
            first: function() {
                return this.find(v)
            },
            flatMap: function(t, e) {
                return Se(this, ge(this, t, e))
            },
            flatten: function(t) {
                return Se(this, ye(this, t, !0))
            },
            fromEntrySeq: function() {
                return new ae(this)
            },
            get: function(t, e) {
                return this.find(function(e, n) {
                    return $(n, t)
                }, void 0, e)
            },
            getIn: function(t, e) {
                for (var n, r = this, i = Ae(t); !(n = i.next()).done;) {
                    var o = n.value;
                    if ((r = r && r.get ? r.get(o, vn) : vn) === vn) return e
                }
                return r
            },
            groupBy: function(t, e) {
                return he(this, t, e)
            },
            has: function(t) {
                return this.get(t, vn) !== vn
            },
            hasIn: function(t) {
                return this.getIn(t, vn) !== vn
            },
            isSubset: function(t) {
                return t = "function" == typeof t.includes ? t : e(t), this.every(function(e) {
                    return t.includes(e)
                })
            },
            isSuperset: function(t) {
                return (t = "function" == typeof t.isSubset ? t : e(t)).isSubset(this)
            },
            keyOf: function(t) {
                return this.findKey(function(e) {
                    return $(e, t)
                })
            },
            keySeq: function() {
                return this.toSeq().map(Je).toIndexedSeq()
            },
            last: function() {
                return this.toSeq().reverse().first()
            },
            lastKeyOf: function(t) {
                return this.toKeyedSeq().reverse().keyOf(t)
            },
            max: function(t) {
                return _e(this, t)
            },
            maxBy: function(t, e) {
                return _e(this, e, t)
            },
            min: function(t) {
                return _e(this, t ? tn(t) : rn)
            },
            minBy: function(t, e) {
                return _e(this, e ? tn(e) : rn, t)
            },
            rest: function() {
                return this.slice(1)
            },
            skip: function(t) {
                return this.slice(Math.max(0, t))
            },
            skipLast: function(t) {
                return Se(this, this.toSeq().reverse().skip(t).reverse())
            },
            skipWhile: function(t, e) {
                return Se(this, me(this, t, e, !0))
            },
            skipUntil: function(t, e) {
                return this.skipWhile(Ze(t), e)
            },
            sortBy: function(t, e) {
                return Se(this, we(this, e, t))
            },
            take: function(t) {
                return this.slice(0, Math.max(0, t))
            },
            takeLast: function(t) {
                return Se(this, this.toSeq().reverse().take(t).reverse())
            },
            takeWhile: function(t, e) {
                return Se(this, de(this, t, e))
            },
            takeUntil: function(t, e) {
                return this.takeWhile(Ze(t), e)
            },
            valueSeq: function() {
                return this.toIndexedSeq()
            },
            hashCode: function() {
                return this.__hash || (this.__hash = on(this))
            }
        });
        var ar = e.prototype;
        ar[cn] = !0, ar[Sn] = ar.values, ar.__toJS = ar.toArray, ar.__toStringMapper = en, ar.inspect = ar.toSource = function() {
            return this.toString()
        }, ar.chain = ar.flatMap, ar.contains = ar.includes, Xe(n, {
            flip: function() {
                return Se(this, se(this))
            },
            mapEntries: function(t, e) {
                var n = this,
                    r = 0;
                return Se(this, this.toSeq().map(function(i, o) {
                    return t.call(e, [o, i], r++, n)
                }).fromEntrySeq())
            },
            mapKeys: function(t, e) {
                var n = this;
                return Se(this, this.toSeq().flip().map(function(r, i) {
                    return t.call(e, r, i, n)
                }).flip())
            }
        });
        var sr = n.prototype;
        return sr[ln] = !0, sr[Sn] = ar.entries, sr.__toJS = ar.toObject, sr.__toStringMapper = function(t, e) {
            return JSON.stringify(e) + ": " + en(t)
        }, Xe(r, {
            toKeyedSeq: function() {
                return new re(this, !1)
            },
            filter: function(t, e) {
                return Se(this, le(this, t, e, !1))
            },
            findIndex: function(t, e) {
                var n = this.findEntry(t, e);
                return n ? n[0] : -1
            },
            indexOf: function(t) {
                var e = this.keyOf(t);
                return void 0 === e ? -1 : e
            },
            lastIndexOf: function(t) {
                var e = this.lastKeyOf(t);
                return void 0 === e ? -1 : e
            },
            reverse: function() {
                return Se(this, ce(this, !1))
            },
            slice: function(t, e) {
                return Se(this, pe(this, t, e, !1))
            },
            splice: function(t, e) {
                var n = arguments.length;
                if (e = Math.max(0 | e, 0), 0 === n || 2 === n && !e) return this;
                t = g(t, t < 0 ? this.count() : this.size);
                var r = this.slice(0, t);
                return Se(this, 1 === n ? r : r.concat(p(arguments, 2), this.slice(t + e)))
            },
            findLastIndex: function(t, e) {
                var n = this.findLastEntry(t, e);
                return n ? n[0] : -1
            },
            first: function() {
                return this.get(0)
            },
            flatten: function(t) {
                return Se(this, ye(this, t, !1))
            },
            get: function(t, e) {
                return (t = m(this, t)) < 0 || this.size === 1 / 0 || void 0 !== this.size && t > this.size ? e : this.find(function(e, n) {
                    return n === t
                }, void 0, e)
            },
            has: function(t) {
                return (t = m(this, t)) >= 0 && (void 0 !== this.size ? this.size === 1 / 0 || t < this.size : -1 !== this.indexOf(t))
            },
            interpose: function(t) {
                return Se(this, be(this, t))
            },
            interleave: function() {
                var t = [this].concat(p(arguments)),
                    e = Te(this.toSeq(), A.of, t),
                    n = e.flatten(!0);
                return e.size && (n.size = e.size * t.length), Se(this, n)
            },
            keySeq: function() {
                return Z(0, this.size)
            },
            last: function() {
                return this.get(-1)
            },
            skipWhile: function(t, e) {
                return Se(this, me(this, t, e, !1))
            },
            zip: function() {
                return Se(this, Te(this, nn, [this].concat(p(arguments))))
            },
            zipWith: function(t) {
                var e = p(arguments);
                return e[0] = this, Se(this, Te(this, t, e))
            }
        }), r.prototype[fn] = !0, r.prototype[hn] = !0, Xe(i, {
            get: function(t, e) {
                return this.has(t) ? t : e
            },
            includes: function(t) {
                return this.has(t)
            },
            keySeq: function() {
                return this.valueSeq()
            }
        }), i.prototype.has = ar.includes, i.prototype.contains = i.prototype.includes, Xe(I, n.prototype), Xe(A, r.prototype), Xe(N, i.prototype), Xe(et, n.prototype), Xe(nt, r.prototype), Xe(rt, i.prototype), {
            Iterable: e,
            Seq: x,
            Collection: tt,
            Map: ft,
            OrderedMap: Qt,
            List: Ft,
            Stack: Ke,
            Set: Le,
            OrderedSet: ze,
            Record: Ne,
            Range: Z,
            Repeat: J,
            is: $,
            fromJS: W
        }
    })
}, function(t, e, n) {
    "use strict";

    function r(t) {
        for (var e = arguments.length - 1, n = "Minified React error #" + t + "; visit http://facebook.github.io/react/docs/error-decoder.html?invariant=" + t, r = 0; r < e; r++) n += "&args[]=" + encodeURIComponent(arguments[r + 1]);
        throw e = Error(n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."), e.name = "Invariant Violation", e.framesToPop = 1, e
    }

    function i(t, e, n) {
        this.props = t, this.context = e, this.refs = g, this.updater = n || w
    }

    function o(t, e, n) {
        this.props = t, this.context = e, this.refs = g, this.updater = n || w
    }

    function a() {}

    function s(t, e, n) {
        this.props = t, this.context = e, this.refs = g, this.updater = n || w
    }

    function u(t, e, n, r, i, o, a) {
        return {
            $$typeof: C,
            type: t,
            key: e,
            ref: n,
            props: a,
            _owner: o
        }
    }

    function c(t) {
        var e = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + ("" + t).replace(/[=:]/g, function(t) {
            return e[t]
        })
    }

    function l(t, e, n, r) {
        if (A.length) {
            var i = A.pop();
            return i.result = t, i.keyPrefix = e, i.func = n, i.context = r, i.count = 0, i
        }
        return {
            result: t,
            keyPrefix: e,
            func: n,
            context: r,
            count: 0
        }
    }

    function f(t) {
        t.result = null, t.keyPrefix = null, t.func = null, t.context = null, t.count = 0, 10 > A.length && A.push(t)
    }

    function h(t, e, n, i) {
        var o = typeof t;
        if ("undefined" !== o && "boolean" !== o || (t = null), null === t || "string" === o || "number" === o || "object" === o && t.$$typeof === x) return n(i, t, "" === e ? "." + p(t, 0) : e), 1;
        var a = 0;
        if (e = "" === e ? "." : e + ":", Array.isArray(t))
            for (var s = 0; s < t.length; s++) {
                var u = e + p(o = t[s], s);
                a += h(o, u, n, i)
            } else if ("function" == typeof(u = k && t[k] || t["@@iterator"]))
                for (t = u.call(t), s = 0; !(o = t.next()).done;) o = o.value, u = e + p(o, s++), a += h(o, u, n, i);
            else "object" === o && (n = "" + t, r("31", "[object Object]" === n ? "object with keys {" + Object.keys(t).join(", ") + "}" : n, ""));
        return a
    }

    function p(t, e) {
        return "object" == typeof t && null !== t && null != t.key ? c(t.key) : e.toString(36)
    }

    function d(t, e) {
        t.func.call(t.context, e, t.count++)
    }

    function m(t, e, n) {
        var r = t.result,
            i = t.keyPrefix;
        t = t.func.call(t.context, e, t.count++), Array.isArray(t) ? v(t, r, n, b.thatReturnsArgument) : null != t && (u.isValidElement(t) && (t = u.cloneAndReplaceKey(t, i + (!t.key || e && e.key === t.key ? "" : ("" + t.key).replace(I, "$&/") + "/") + n)), r.push(t))
    }

    function v(t, e, n, r, i) {
        var o = "";
        null != n && (o = ("" + n).replace(I, "$&/") + "/"), e = l(e, o, r, i), null == t || h(t, "", m, e), f(e)
    }
    var y = n(17),
        g = n(18);
    n(8);
    var b = n(6),
        w = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        };
    i.prototype.isReactComponent = {}, i.prototype.setState = function(t, e) {
        "object" != typeof t && "function" != typeof t && null != t && r("85"), this.updater.enqueueSetState(this, t, e, "setState")
    }, i.prototype.forceUpdate = function(t) {
        this.updater.enqueueForceUpdate(this, t, "forceUpdate")
    }, a.prototype = i.prototype;
    var _ = o.prototype = new a;
    _.constructor = o, y(_, i.prototype), _.isPureReactComponent = !0;
    var E = s.prototype = new a;
    E.constructor = s, y(E, i.prototype), E.unstable_isAsyncReactComponent = !0, E.render = function() {
        return this.props.children
    };
    var T = {
            Component: i,
            PureComponent: o,
            AsyncComponent: s
        },
        S = {
            current: null
        },
        P = Object.prototype.hasOwnProperty,
        C = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
        O = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };
    u.createElement = function(t, e, n) {
        var r, i = {},
            o = null,
            a = null,
            s = null,
            c = null;
        if (null != e)
            for (r in void 0 !== e.ref && (a = e.ref), void 0 !== e.key && (o = "" + e.key), s = void 0 === e.__self ? null : e.__self, c = void 0 === e.__source ? null : e.__source, e) P.call(e, r) && !O.hasOwnProperty(r) && (i[r] = e[r]);
        var l = arguments.length - 2;
        if (1 === l) i.children = n;
        else if (1 < l) {
            for (var f = Array(l), h = 0; h < l; h++) f[h] = arguments[h + 2];
            i.children = f
        }
        if (t && t.defaultProps)
            for (r in l = t.defaultProps) void 0 === i[r] && (i[r] = l[r]);
        return u(t, o, a, s, c, S.current, i)
    }, u.createFactory = function(t) {
        var e = u.createElement.bind(null, t);
        return e.type = t, e
    }, u.cloneAndReplaceKey = function(t, e) {
        return u(t.type, e, t.ref, t._self, t._source, t._owner, t.props)
    }, u.cloneElement = function(t, e, n) {
        var r = y({}, t.props),
            i = t.key,
            o = t.ref,
            a = t._self,
            s = t._source,
            c = t._owner;
        if (null != e) {
            if (void 0 !== e.ref && (o = e.ref, c = S.current), void 0 !== e.key && (i = "" + e.key), t.type && t.type.defaultProps) var l = t.type.defaultProps;
            for (f in e) P.call(e, f) && !O.hasOwnProperty(f) && (r[f] = void 0 === e[f] && void 0 !== l ? l[f] : e[f])
        }
        var f = arguments.length - 2;
        if (1 === f) r.children = n;
        else if (1 < f) {
            l = Array(f);
            for (var h = 0; h < f; h++) l[h] = arguments[h + 2];
            r.children = l
        }
        return u(t.type, i, o, a, s, c, r)
    }, u.isValidElement = function(t) {
        return "object" == typeof t && null !== t && t.$$typeof === C
    };
    var k = "function" == typeof Symbol && Symbol.iterator,
        x = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
        I = /\/+/g,
        A = [],
        N = {
            forEach: function(t, e, n) {
                if (null == t) return t;
                e = l(null, null, e, n), null == t || h(t, "", d, e), f(e)
            },
            map: function(t, e, n) {
                if (null == t) return t;
                var r = [];
                return v(t, r, null, e, n), r
            },
            count: function(t) {
                return null == t ? 0 : h(t, "", b.thatReturnsNull, null)
            },
            toArray: function(t) {
                var e = [];
                return v(t, e, null, b.thatReturnsArgument), e
            }
        };
    t.exports = {
        Children: {
            map: N.map,
            forEach: N.forEach,
            count: N.count,
            toArray: N.toArray,
            only: function(t) {
                return u.isValidElement(t) || r("143"), t
            }
        },
        Component: T.Component,
        PureComponent: T.PureComponent,
        unstable_AsyncComponent: T.AsyncComponent,
        createElement: u.createElement,
        cloneElement: u.cloneElement,
        isValidElement: u.isValidElement,
        createFactory: u.createFactory,
        version: "16.0.0",
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
            ReactCurrentOwner: S,
            assign: y
        }
    }
}, function(t, e, n) {
    "use strict";

    function r() {
        if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)
        } catch (t) {
            console.error(t)
        }
    }
    r(), t.exports = n(47)
}, function(t, e, n) {
    "use strict";

    function r(t) {
        for (var e = arguments.length - 1, n = "Minified React error #" + t + "; visit http://facebook.github.io/react/docs/error-decoder.html?invariant=" + t, r = 0; r < e; r++) n += "&args[]=" + encodeURIComponent(arguments[r + 1]);
        throw e = Error(n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."), e.name = "Invariant Violation", e.framesToPop = 1, e
    }

    function i(t) {
        switch (t) {
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml"
        }
    }

    function o() {
        if (ke)
            for (var t in xe) {
                var e = xe[t],
                    n = ke.indexOf(t);
                if (-1 < n || r("96", t), !Ie.plugins[n]) {
                    e.extractEvents || r("97", t), Ie.plugins[n] = e, n = e.eventTypes;
                    for (var i in n) {
                        var o = void 0,
                            s = n[i],
                            u = e,
                            c = i;
                        Ie.eventNameDispatchConfigs.hasOwnProperty(c) && r("99", c), Ie.eventNameDispatchConfigs[c] = s;
                        var l = s.phasedRegistrationNames;
                        if (l) {
                            for (o in l) l.hasOwnProperty(o) && a(l[o], u, c);
                            o = !0
                        } else s.registrationName ? (a(s.registrationName, u, c), o = !0) : o = !1;
                        o || r("98", i, t)
                    }
                }
            }
    }

    function a(t, e, n) {
        Ie.registrationNameModules[t] && r("100", t), Ie.registrationNameModules[t] = e, Ie.registrationNameDependencies[t] = e.eventTypes[n].dependencies
    }

    function s(t, e) {
        return (t & e) === e
    }

    function u(t) {
        for (var e; e = t._renderedComponent;) t = e;
        return t
    }

    function c(t, e) {
        (t = u(t))._hostNode = e, e[We] = t
    }

    function l(t, e) {
        if (!(t._flags & qe.hasCachedChildNodes)) {
            var n = t._renderedChildren;
            e = e.firstChild;
            var i;
            t: for (i in n)
                if (n.hasOwnProperty(i)) {
                    var o = n[i],
                        a = u(o)._domID;
                    if (0 !== a) {
                        for (; null !== e; e = e.nextSibling) {
                            var s = e,
                                l = a;
                            if (s.nodeType === He && s.getAttribute(ze) === "" + l || s.nodeType === Be && s.nodeValue === " react-text: " + l + " " || s.nodeType === Be && s.nodeValue === " react-empty: " + l + " ") {
                                c(o, e);
                                continue t
                            }
                        }
                        r("32", a)
                    }
                }
            t._flags |= qe.hasCachedChildNodes
        }
    }

    function f(t) {
        if (t[We]) return t[We];
        for (var e = []; !t[We];) {
            if (e.push(t), !t.parentNode) return null;
            t = t.parentNode
        }
        var n = t[We];
        if (n.tag === Ue || n.tag === Fe) return n;
        for (; t && (n = t[We]); t = e.pop()) {
            var r = n;
            e.length && l(n, t)
        }
        return r
    }

    function h(t) {
        if ("function" == typeof t.getName) return t.getName();
        if ("number" == typeof t.tag) {
            if ("string" == typeof(t = t.type)) return t;
            if ("function" == typeof t) return t.displayName || t.name
        }
        return null
    }

    function p(t) {
        var e = t;
        if (t.alternate)
            for (; e.return;) e = e.return;
        else {
            if ((e.effectTag & nn) !== en) return 1;
            for (; e.return;)
                if (((e = e.return).effectTag & nn) !== en) return 1
        }
        return e.tag === Qe ? 2 : 3
    }

    function d(t) {
        2 !== p(t) && r("188")
    }

    function m(t) {
        var e = t.alternate;
        if (!e) return 3 === (e = p(t)) && r("188"), 1 === e ? null : t;
        for (var n = t, i = e;;) {
            var o = n.return,
                a = o ? o.alternate : null;
            if (!o || !a) break;
            if (o.child === a.child) {
                for (var s = o.child; s;) {
                    if (s === n) return d(o), t;
                    if (s === i) return d(o), e;
                    s = s.sibling
                }
                r("188")
            }
            if (n.return !== i.return) n = o, i = a;
            else {
                s = !1;
                for (var u = o.child; u;) {
                    if (u === n) {
                        s = !0, n = o, i = a;
                        break
                    }
                    if (u === i) {
                        s = !0, i = o, n = a;
                        break
                    }
                    u = u.sibling
                }
                if (!s) {
                    for (u = a.child; u;) {
                        if (u === n) {
                            s = !0, n = a, i = o;
                            break
                        }
                        if (u === i) {
                            s = !0, i = a, n = o;
                            break
                        }
                        u = u.sibling
                    }
                    s || r("189")
                }
            }
            n.alternate !== i && r("190")
        }
        return n.tag !== Qe && r("188"), n.stateNode.current === n ? t : e
    }

    function v(t, e, n, r, i, o, a, s, u) {
        on._hasCaughtError = !1, on._caughtError = null;
        var c = Array.prototype.slice.call(arguments, 3);
        try {
            e.apply(n, c)
        } catch (t) {
            on._caughtError = t, on._hasCaughtError = !0
        }
    }

    function y() {
        if (on._hasRethrowError) {
            var t = on._rethrowError;
            throw on._rethrowError = null, on._hasRethrowError = !1, t
        }
    }

    function g(t, e, n, r) {
        e = t.type || "unknown-event", t.currentTarget = sn.getNodeFromInstance(r), an.invokeGuardedCallbackAndCatchFirstError(e, n, void 0, t), t.currentTarget = null
    }

    function b(t) {
        if (t = un.getInstanceFromNode(t))
            if ("number" == typeof t.tag) {
                cn && "function" == typeof cn.restoreControlledState || r("194");
                var e = un.getFiberCurrentPropsFromNode(t.stateNode);
                cn.restoreControlledState(t.stateNode, t.type, e)
            } else "function" != typeof t.restoreControlledState && r("195"), t.restoreControlledState()
    }

    function w(t, e, n, r, i, o) {
        return t(e, n, r, i, o)
    }

    function _(t, e) {
        return t(e)
    }

    function E(t, e) {
        return _(t, e)
    }

    function T(t) {
        return (t = t.target || t.srcElement || window).correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === mn ? t.parentNode : t
    }

    function S(t) {
        var e = t.targetInst;
        do {
            if (!e) {
                t.ancestors.push(e);
                break
            }
            var n = e;
            if ("number" == typeof n.tag) {
                for (; n.return;) n = n.return;
                n = n.tag !== vn ? null : n.stateNode.containerInfo
            } else {
                for (; n._hostParent;) n = n._hostParent;
                n = Ye.getNodeFromInstance(n).parentNode
            }
            if (!n) break;
            t.ancestors.push(e), e = Ye.getClosestInstanceFromNode(n)
        } while (e);
        for (n = 0; n < t.ancestors.length; n++) e = t.ancestors[n], gn._handleTopLevel(t.topLevelType, e, t.nativeEvent, T(t.nativeEvent))
    }

    function P(t, e) {
        return null == e && r("30"), null == t ? e : Array.isArray(t) ? Array.isArray(e) ? (t.push.apply(t, e), t) : (t.push(e), t) : Array.isArray(e) ? [t].concat(e) : [t, e]
    }

    function C(t, e, n) {
        Array.isArray(t) ? t.forEach(e, n) : t && e.call(n, t)
    }

    function O(t, e) {
        t && (un.executeDispatchesInOrder(t, e), t.isPersistent() || t.constructor.release(t))
    }

    function k(t) {
        return O(t, !0)
    }

    function x(t) {
        return O(t, !1)
    }

    function I(t, e, n) {
        switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
                return !(!n.disabled || "button" !== e && "input" !== e && "select" !== e && "textarea" !== e);
            default:
                return !1
        }
    }

    function A(t, e) {
        if (!ve.canUseDOM || e && !("addEventListener" in document)) return !1;
        var n = (e = "on" + t) in document;
        return n || ((n = document.createElement("div")).setAttribute(e, "return;"), n = "function" == typeof n[e]), !n && Ce && "wheel" === t && (n = document.implementation.hasFeature("Events.wheel", "3.0")), n
    }

    function N(t, e) {
        var n = {};
        return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n["ms" + t] = "MS" + e, n["O" + t] = "o" + e.toLowerCase(), n
    }

    function M(t) {
        if (Tn[t]) return Tn[t];
        if (!En[t]) return t;
        var e, n = En[t];
        for (e in n)
            if (n.hasOwnProperty(e) && e in Sn) return Tn[t] = n[e];
        return ""
    }

    function R(t) {
        return Object.prototype.hasOwnProperty.call(t, kn) || (t[kn] = On++, Cn[t[kn]] = {}), Cn[t[kn]]
    }

    function D(t) {
        return !!Hn.hasOwnProperty(t) || !Fn.hasOwnProperty(t) && (Un.test(t) ? Hn[t] = !0 : (Fn[t] = !0, !1))
    }

    function j() {
        return null
    }

    function L(t) {
        var e = "";
        return me.Children.forEach(t, function(t) {
            null == t || "string" != typeof t && "number" != typeof t || (e += t)
        }), e
    }

    function U(t, e, n) {
        if (t = t.options, e) {
            e = {};
            for (var r = 0; r < n.length; r++) e["$" + n[r]] = !0;
            for (n = 0; n < t.length; n++) r = e.hasOwnProperty("$" + t[n].value), t[n].selected !== r && (t[n].selected = r)
        } else {
            for (n = "" + n, e = null, r = 0; r < t.length; r++) {
                if (t[r].value === n) return void(t[r].selected = !0);
                null !== e || t[r].disabled || (e = t[r])
            }
            null !== e && (e.selected = !0)
        }
    }

    function F(t, e) {
        e && (Qn[t] && (null != e.children || null != e.dangerouslySetInnerHTML) && r("137", t, ""), null != e.dangerouslySetInnerHTML && (null != e.children && r("60"), "object" == typeof e.dangerouslySetInnerHTML && "__html" in e.dangerouslySetInnerHTML || r("61")), null != e.style && "object" != typeof e.style && r("62", ""))
    }

    function H(t) {
        var e = t.type;
        return (t = t.nodeName) && "input" === t.toLowerCase() && ("checkbox" === e || "radio" === e)
    }

    function B(t) {
        var e = H(t) ? "checked" : "value",
            n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
            r = "" + t[e];
        if (!t.hasOwnProperty(e) && "function" == typeof n.get && "function" == typeof n.set) return Object.defineProperty(t, e, {
            enumerable: n.enumerable,
            configurable: !0,
            get: function() {
                return n.get.call(this)
            },
            set: function(t) {
                r = "" + t, n.set.call(this, t)
            }
        }), {
            getValue: function() {
                return r
            },
            setValue: function(t) {
                r = "" + t
            },
            stopTracking: function() {
                t._valueTracker = null, delete t[e]
            }
        }
    }

    function z(t, e) {
        if (-1 === t.indexOf("-")) return "string" == typeof e.is;
        switch (t) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }

    function q(t, e) {
        if (e) {
            var n = t.firstChild;
            if (n && n === t.lastChild && n.nodeType === rr) return void(n.nodeValue = e)
        }
        t.textContent = e
    }

    function V(t, e) {
        sr(e, t.nodeType === or || t.nodeType === ar ? t : t.ownerDocument)
    }

    function W(t, e) {
        return t !== Nr && t !== Ar || e !== Nr && e !== Ar ? t === Ir && e !== Ir ? -255 : t !== Ir && e === Ir ? 255 : t - e : 0
    }

    function K() {
        return {
            first: null,
            last: null,
            hasForceUpdate: !1,
            callbackList: null
        }
    }

    function Y(t, e, n, r) {
        null !== n ? n.next = e : (e.next = t.first, t.first = e), null !== r ? e.next = r : t.last = e
    }

    function G(t, e) {
        e = e.priorityLevel;
        var n = null;
        if (null !== t.last && 0 >= W(t.last.priorityLevel, e)) n = t.last;
        else
            for (t = t.first; null !== t && 0 >= W(t.priorityLevel, e);) n = t, t = t.next;
        return n
    }

    function $(t, e) {
        var n = t.alternate,
            r = t.updateQueue;
        null === r && (r = t.updateQueue = K()), null !== n ? null === (t = n.updateQueue) && (t = n.updateQueue = K()) : t = null;
        var i = Dr = r;
        n = jr = t !== r ? t : null;
        var o = G(i, e),
            a = null !== o ? o.next : i.first;
        return null === n ? (Y(i, e, o, a), null) : (r = G(n, e), t = null !== r ? r.next : n.first, Y(i, e, o, a), a === t && null !== a || o === r && null !== o ? (null === r && (n.first = e), null === t && (n.last = null), null) : (e = {
            priorityLevel: e.priorityLevel,
            partialState: e.partialState,
            callback: e.callback,
            isReplace: e.isReplace,
            isForced: e.isForced,
            isTopLevelUnmount: e.isTopLevelUnmount,
            next: null
        }, Y(n, e, r, t), e))
    }

    function X(t, e, n, r) {
        return "function" == typeof(t = t.partialState) ? t.call(e, n, r) : t
    }

    function J(t, e, n) {
        (t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext = e, t.__reactInternalMemoizedMaskedChildContext = n
    }

    function Q(t) {
        return t.tag === zr && null != t.type.childContextTypes
    }

    function Z(t, e) {
        var n = t.stateNode,
            i = t.type.childContextTypes;
        if ("function" != typeof n.getChildContext) return e;
        n = n.getChildContext();
        for (var o in n) o in i || r("108", h(t) || "Unknown", o);
        return ye({}, e, n)
    }

    function tt(t, e, n) {
        this.tag = t, this.key = e, this.stateNode = this.type = null, this.sibling = this.child = this.return = null, this.index = 0, this.memoizedState = this.updateQueue = this.memoizedProps = this.pendingProps = this.ref = null, this.internalContextTag = n, this.effectTag = ci, this.lastEffect = this.firstEffect = this.nextEffect = null, this.pendingWorkPriority = si, this.alternate = null
    }

    function et(t, e, n) {
        var i = void 0;
        return "function" == typeof t ? (i = t.prototype && t.prototype.isReactComponent ? new tt(Zr, e, n) : new tt(Qr, e, n), i.type = t) : "string" == typeof t ? (i = new tt(ei, e, n), i.type = t) : "object" == typeof t && null !== t && "number" == typeof t.tag ? i = t : r("130", null == t ? t : typeof t, ""), i
    }

    function nt(t) {
        return null === t || void 0 === t ? null : "function" == typeof(t = Hi && t[Hi] || t["@@iterator"]) ? t : null
    }

    function rt(t, e) {
        var n = e.ref;
        if (null !== n && "function" != typeof n) {
            if (e._owner) {
                var i = void 0;
                (e = e._owner) && ("number" == typeof e.tag ? (e.tag !== Ai && r("110"), i = e.stateNode) : i = e.getPublicInstance()), i || r("147", n);
                var o = "" + n;
                return null !== t && null !== t.ref && t.ref._stringRef === o ? t.ref : (t = function(t) {
                    var e = i.refs === we ? i.refs = {} : i.refs;
                    null === t ? delete e[o] : e[o] = t
                }, t._stringRef = o, t)
            }
            "string" != typeof n && r("148"), e._owner || r("149", n)
        }
        return n
    }

    function it(t, e) {
        "textarea" !== t.type && r("31", "[object Object]" === Object.prototype.toString.call(e) ? "object with keys {" + Object.keys(e).join(", ") + "}" : e, "")
    }

    function ot(t, e) {
        function n(n, r) {
            if (e) {
                if (!t) {
                    if (null === r.alternate) return;
                    r = r.alternate
                }
                var i = n.lastEffect;
                null !== i ? (i.nextEffect = r, n.lastEffect = r) : n.firstEffect = n.lastEffect = r, r.nextEffect = null, r.effectTag = Fi
            }
        }

        function i(t, r) {
            if (!e) return null;
            for (; null !== r;) n(t, r), r = r.sibling;
            return null
        }

        function o(t, e) {
            for (t = new Map; null !== e;) null !== e.key ? t.set(e.key, e) : t.set(e.index, e), e = e.sibling;
            return t
        }

        function a(e, n) {
            return t ? (e = Ei(e, n), e.index = 0, e.sibling = null, e) : (e.pendingWorkPriority = n, e.effectTag = Li, e.index = 0, e.sibling = null, e)
        }

        function s(t, n, r) {
            return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.effectTag = Ui, n) : r : (t.effectTag = Ui, n) : n
        }

        function u(t) {
            return e && null === t.alternate && (t.effectTag = Ui), t
        }

        function c(t, e, n, r) {
            return null === e || e.tag !== Ni ? (n = Pi(n, t.internalContextTag, r), n.return = t, n) : (e = a(e, r), e.pendingProps = n, e.return = t, e)
        }

        function l(t, e, n, r) {
            return null === e || e.type !== n.type ? (r = Ti(n, t.internalContextTag, r), r.ref = rt(e, n), r.return = t, r) : (r = a(e, r), r.ref = rt(e, n), r.pendingProps = n.props, r.return = t, r)
        }

        function f(t, e, n, r) {
            return null === e || e.tag !== Ri ? (n = Ci(n, t.internalContextTag, r), n.return = t, n) : (e = a(e, r), e.pendingProps = n, e.return = t, e)
        }

        function h(t, e, n, r) {
            return null === e || e.tag !== Di ? (e = Oi(n, t.internalContextTag, r), e.type = n.value, e.return = t, e) : (e = a(e, r), e.type = n.value, e.return = t, e)
        }

        function p(t, e, n, r) {
            return null === e || e.tag !== Mi || e.stateNode.containerInfo !== n.containerInfo || e.stateNode.implementation !== n.implementation ? (n = ki(n, t.internalContextTag, r), n.return = t, n) : (e = a(e, r), e.pendingProps = n.children || [], e.return = t, e)
        }

        function d(t, e, n, r) {
            return null === e || e.tag !== ji ? (n = Si(n, t.internalContextTag, r), n.return = t, n) : (e = a(e, r), e.pendingProps = n, e.return = t, e)
        }

        function m(t, e, n) {
            if ("string" == typeof e || "number" == typeof e) return e = Pi("" + e, t.internalContextTag, n), e.return = t, e;
            if ("object" == typeof e && null !== e) {
                switch (e.$$typeof) {
                    case Bi:
                        return n = Ti(e, t.internalContextTag, n), n.ref = rt(null, e), n.return = t, n;
                    case bi:
                        return e = Ci(e, t.internalContextTag, n), e.return = t, e;
                    case wi:
                        return n = Oi(e, t.internalContextTag, n), n.type = e.value, n.return = t, n;
                    case _i:
                        return e = ki(e, t.internalContextTag, n), e.return = t, e
                }
                if (xi(e) || nt(e)) return e = Si(e, t.internalContextTag, n), e.return = t, e;
                it(t, e)
            }
            return null
        }

        function v(t, e, n, r) {
            var i = null !== e ? e.key : null;
            if ("string" == typeof n || "number" == typeof n) return null !== i ? null : c(t, e, "" + n, r);
            if ("object" == typeof n && null !== n) {
                switch (n.$$typeof) {
                    case Bi:
                        return n.key === i ? l(t, e, n, r) : null;
                    case bi:
                        return n.key === i ? f(t, e, n, r) : null;
                    case wi:
                        return null === i ? h(t, e, n, r) : null;
                    case _i:
                        return n.key === i ? p(t, e, n, r) : null
                }
                if (xi(n) || nt(n)) return null !== i ? null : d(t, e, n, r);
                it(t, n)
            }
            return null
        }

        function y(t, e, n, r, i) {
            if ("string" == typeof r || "number" == typeof r) return t = t.get(n) || null, c(e, t, "" + r, i);
            if ("object" == typeof r && null !== r) {
                switch (r.$$typeof) {
                    case Bi:
                        return t = t.get(null === r.key ? n : r.key) || null, l(e, t, r, i);
                    case bi:
                        return t = t.get(null === r.key ? n : r.key) || null, f(e, t, r, i);
                    case wi:
                        return t = t.get(n) || null, h(e, t, r, i);
                    case _i:
                        return t = t.get(null === r.key ? n : r.key) || null, p(e, t, r, i)
                }
                if (xi(r) || nt(r)) return t = t.get(n) || null, d(e, t, r, i);
                it(e, r)
            }
            return null
        }

        function g(t, r, a, u) {
            for (var c = null, l = null, f = r, h = r = 0, p = null; null !== f && h < a.length; h++) {
                f.index > h ? (p = f, f = null) : p = f.sibling;
                var d = v(t, f, a[h], u);
                if (null === d) {
                    null === f && (f = p);
                    break
                }
                e && f && null === d.alternate && n(t, f), r = s(d, r, h), null === l ? c = d : l.sibling = d, l = d, f = p
            }
            if (h === a.length) return i(t, f), c;
            if (null === f) {
                for (; h < a.length; h++)(f = m(t, a[h], u)) && (r = s(f, r, h), null === l ? c = f : l.sibling = f, l = f);
                return c
            }
            for (f = o(t, f); h < a.length; h++)(p = y(f, t, h, a[h], u)) && (e && null !== p.alternate && f.delete(null === p.key ? h : p.key), r = s(p, r, h), null === l ? c = p : l.sibling = p, l = p);
            return e && f.forEach(function(e) {
                return n(t, e)
            }), c
        }

        function b(t, a, u, c) {
            var l = nt(u);
            "function" != typeof l && r("150"), null == (u = l.call(u)) && r("151");
            for (var f = l = null, h = a, p = a = 0, d = null, g = u.next(); null !== h && !g.done; p++, g = u.next()) {
                h.index > p ? (d = h, h = null) : d = h.sibling;
                var b = v(t, h, g.value, c);
                if (null === b) {
                    h || (h = d);
                    break
                }
                e && h && null === b.alternate && n(t, h), a = s(b, a, p), null === f ? l = b : f.sibling = b, f = b, h = d
            }
            if (g.done) return i(t, h), l;
            if (null === h) {
                for (; !g.done; p++, g = u.next()) null !== (g = m(t, g.value, c)) && (a = s(g, a, p), null === f ? l = g : f.sibling = g, f = g);
                return l
            }
            for (h = o(t, h); !g.done; p++, g = u.next()) null !== (g = y(h, t, p, g.value, c)) && (e && null !== g.alternate && h.delete(null === g.key ? p : g.key), a = s(g, a, p), null === f ? l = g : f.sibling = g, f = g);
            return e && h.forEach(function(e) {
                return n(t, e)
            }), l
        }
        return function(t, e, o, s) {
            var c = "object" == typeof o && null !== o;
            if (c) switch (o.$$typeof) {
                case Bi:
                    t: {
                        var l = o.key;
                        for (c = e; null !== c;) {
                            if (c.key === l) {
                                if (c.type === o.type) {
                                    i(t, c.sibling), (e = a(c, s)).ref = rt(c, o), e.pendingProps = o.props, e.return = t, t = e;
                                    break t
                                }
                                i(t, c);
                                break
                            }
                            n(t, c), c = c.sibling
                        }(s = Ti(o, t.internalContextTag, s)).ref = rt(e, o),
                        s.return = t,
                        t = s
                    }
                    return u(t);
                case bi:
                    t: {
                        for (c = o.key; null !== e;) {
                            if (e.key === c) {
                                if (e.tag === Ri) {
                                    i(t, e.sibling), (e = a(e, s)).pendingProps = o, e.return = t, t = e;
                                    break t
                                }
                                i(t, e);
                                break
                            }
                            n(t, e), e = e.sibling
                        }(o = Ci(o, t.internalContextTag, s)).return = t,
                        t = o
                    }
                    return u(t);
                case wi:
                    t: {
                        if (null !== e) {
                            if (e.tag === Di) {
                                i(t, e.sibling), (e = a(e, s)).type = o.value, e.return = t, t = e;
                                break t
                            }
                            i(t, e)
                        }(e = Oi(o, t.internalContextTag, s)).type = o.value,
                        e.return = t,
                        t = e
                    }
                    return u(t);
                case _i:
                    t: {
                        for (c = o.key; null !== e;) {
                            if (e.key === c) {
                                if (e.tag === Mi && e.stateNode.containerInfo === o.containerInfo && e.stateNode.implementation === o.implementation) {
                                    i(t, e.sibling), (e = a(e, s)).pendingProps = o.children || [], e.return = t, t = e;
                                    break t
                                }
                                i(t, e);
                                break
                            }
                            n(t, e), e = e.sibling
                        }(o = ki(o, t.internalContextTag, s)).return = t,
                        t = o
                    }
                    return u(t)
            }
            if ("string" == typeof o || "number" == typeof o) return o = "" + o, null !== e && e.tag === Ni ? (i(t, e.sibling), e = a(e, s), e.pendingProps = o, e.return = t, t = e) : (i(t, e), o = Pi(o, t.internalContextTag, s), o.return = t, t = o), u(t);
            if (xi(o)) return g(t, e, o, s);
            if (nt(o)) return b(t, e, o, s);
            if (c && it(t, o), void 0 === o) switch (t.tag) {
                case Ai:
                case Ii:
                    r("152", (o = t.type).displayName || o.name || "Component")
            }
            return i(t, e)
        }
    }

    function at(t, e, n, i) {
        function o(t, e) {
            e.updater = a, t.stateNode = e, Ge.set(e, t)
        }
        var a = {
            isMounted: to,
            enqueueSetState: function(n, r, i) {
                n = Ge.get(n);
                var o = e(n, !1);
                $i(n, r, void 0 === i ? null : i, o), t(n, o)
            },
            enqueueReplaceState: function(n, r, i) {
                n = Ge.get(n);
                var o = e(n, !1);
                Xi(n, r, void 0 === i ? null : i, o), t(n, o)
            },
            enqueueForceUpdate: function(n, r) {
                n = Ge.get(n);
                var i = e(n, !1);
                Ji(n, void 0 === r ? null : r, i), t(n, i)
            }
        };
        return {
            adoptClassInstance: o,
            constructClassInstance: function(t, e) {
                var n = t.type,
                    r = Yi(t),
                    i = Gi(t),
                    a = i ? Ki(t, r) : we;
                return e = new n(e, a), o(t, e), i && Wi(t, r, a), e
            },
            mountClassInstance: function(t, e) {
                var n = t.alternate,
                    i = t.stateNode,
                    o = i.state || null,
                    s = t.pendingProps;
                s || r("158");
                var u = Yi(t);
                i.props = s, i.state = o, i.refs = we, i.context = Ki(t, u), Or.enableAsyncSubtreeAPI && null != t.type && null != t.type.prototype && !0 === t.type.prototype.unstable_isAsyncReactComponent && (t.internalContextTag |= Vi), "function" == typeof i.componentWillMount && (u = i.state, i.componentWillMount(), u !== i.state && a.enqueueReplaceState(i, i.state, null), null !== (u = t.updateQueue) && (i.state = Qi(n, t, u, i, o, s, e))), "function" == typeof i.componentDidMount && (t.effectTag |= qi)
            },
            updateClassInstance: function(t, e, o) {
                var s = e.stateNode;
                s.props = e.memoizedProps, s.state = e.memoizedState;
                var u = e.memoizedProps,
                    c = e.pendingProps;
                c || null == (c = u) && r("159");
                var l = s.context,
                    f = Yi(e);
                if (f = Ki(e, f), "function" != typeof s.componentWillReceiveProps || u === c && l === f || (l = s.state, s.componentWillReceiveProps(c, f), s.state !== l && a.enqueueReplaceState(s, s.state, null)), l = e.memoizedState, o = null !== e.updateQueue ? Qi(t, e, e.updateQueue, s, l, c, o) : l, !(u !== c || l !== o || Zi() || null !== e.updateQueue && e.updateQueue.hasForceUpdate)) return "function" != typeof s.componentDidUpdate || u === t.memoizedProps && l === t.memoizedState || (e.effectTag |= qi), !1;
                var h = c;
                if (null === u || null !== e.updateQueue && e.updateQueue.hasForceUpdate) h = !0;
                else {
                    var p = e.stateNode,
                        d = e.type;
                    h = "function" == typeof p.shouldComponentUpdate ? p.shouldComponentUpdate(h, o, f) : !d.prototype || !d.prototype.isPureReactComponent || (!_e(u, h) || !_e(l, o))
                }
                return h ? ("function" == typeof s.componentWillUpdate && s.componentWillUpdate(c, o, f), "function" == typeof s.componentDidUpdate && (e.effectTag |= qi)) : ("function" != typeof s.componentDidUpdate || u === t.memoizedProps && l === t.memoizedState || (e.effectTag |= qi), n(e, c), i(e, o)), s.props = c, s.state = o, s.context = f, h
            }
        }
    }

    function st(t, e, n, i, o) {
        function a(t, e, n) {
            s(t, e, n, e.pendingWorkPriority)
        }

        function s(t, e, n, r) {
            e.child = null === t ? eo(e, e.child, n, r) : t.child === e.child ? no(e, e.child, n, r) : ro(e, e.child, n, r)
        }

        function u(t, e) {
            var n = e.ref;
            null === n || t && t.ref === n || (e.effectTag |= Io)
        }

        function c(t, e, n, r) {
            if (u(t, e), !n) return r && fo(e, !1), f(t, e);
            n = e.stateNode, Ao.current = e;
            var i = n.render();
            return e.effectTag |= Co, a(t, e, i), e.memoizedState = n.state, e.memoizedProps = n.props, r && fo(e, !0), e.child
        }

        function l(t) {
            var e = t.stateNode;
            e.pendingContext ? lo(t, e.pendingContext, e.pendingContext !== e.context) : e.context && lo(t, e.context, !1), y(t, e.containerInfo)
        }

        function f(t, e) {
            return io(t, e), e.child
        }

        function h(t, e) {
            switch (e.tag) {
                case vo:
                    l(e);
                    break;
                case mo:
                    co(e);
                    break;
                case bo:
                    y(e, e.stateNode.containerInfo)
            }
            return null
        }
        var p = t.shouldSetTextContent,
            d = t.useSyncScheduling,
            m = t.shouldDeprioritizeSubtree,
            v = e.pushHostContext,
            y = e.pushHostContainer,
            g = n.enterHydrationState,
            b = n.resetHydrationState,
            w = n.tryToClaimNextHydratableInstance,
            _ = (t = at(i, o, function(t, e) {
                t.memoizedProps = e
            }, function(t, e) {
                t.memoizedState = e
            })).adoptClassInstance,
            E = t.constructClassInstance,
            T = t.mountClassInstance,
            S = t.updateClassInstance;
        return {
            beginWork: function(t, e, n) {
                if (e.pendingWorkPriority === So || e.pendingWorkPriority > n) return h(0, e);
                switch (e.tag) {
                    case ho:
                        null !== t && r("155");
                        var i = e.type,
                            o = e.pendingProps,
                            s = so(e);
                        return s = ao(e, s), i = i(o, s), e.effectTag |= Co, "object" == typeof i && null !== i && "function" == typeof i.render ? (e.tag = mo, o = co(e), _(e, i), T(e, n), e = c(t, e, !0, o)) : (e.tag = po, a(t, e, i), e.memoizedProps = o, e = e.child), e;
                    case po:
                        t: {
                            if (o = e.type, n = e.pendingProps, i = e.memoizedProps, uo()) null === n && (n = i);
                            else if (null === n || i === n) {
                                e = f(t, e);
                                break t
                            }
                            i = so(e),
                            o = o(n, i = ao(e, i)),
                            e.effectTag |= Co,
                            a(t, e, o),
                            e.memoizedProps = n,
                            e = e.child
                        }
                        return e;
                    case mo:
                        return o = co(e), i = void 0, null === t ? e.stateNode ? r("153") : (E(e, e.pendingProps), T(e, n), i = !0) : i = S(t, e, n), c(t, e, i, o);
                    case vo:
                        return l(e), null !== (i = e.updateQueue) ? (o = e.memoizedState, i = oo(t, e, i, null, o, null, n), o === i ? (b(), e = f(t, e)) : (o = i.element, null !== t && null !== t.child || !g(e) ? (b(), a(t, e, o)) : (e.effectTag |= Oo, e.child = eo(e, e.child, o, n)), e.memoizedState = i, e = e.child)) : (b(), e = f(t, e)), e;
                    case yo:
                        v(e), null === t && w(e), o = e.type;
                        var P = e.memoizedProps;
                        return null === (i = e.pendingProps) && null === (i = P) && r("154"), s = null !== t ? t.memoizedProps : null, uo() || null !== i && P !== i ? (P = i.children, p(o, i) ? P = null : s && p(o, s) && (e.effectTag |= ko), u(t, e), n !== Po && !d && m(o, i) ? (e.pendingWorkPriority = Po, e = null) : (a(t, e, P), e.memoizedProps = i, e = e.child)) : e = f(t, e), e;
                    case go:
                        return null === t && w(e), null === (t = e.pendingProps) && (t = e.memoizedProps), e.memoizedProps = t, null;
                    case _o:
                        e.tag = wo;
                    case wo:
                        return n = e.pendingProps, uo() ? null === n && null === (n = t && t.memoizedProps) && r("154") : null !== n && e.memoizedProps !== n || (n = e.memoizedProps), o = n.children, i = e.pendingWorkPriority, e.stateNode = null === t ? eo(e, e.stateNode, o, i) : t.child === e.child ? no(e, e.stateNode, o, i) : ro(e, e.stateNode, o, i), e.memoizedProps = n, e.stateNode;
                    case Eo:
                        return null;
                    case bo:
                        t: {
                            if (y(e, e.stateNode.containerInfo), n = e.pendingWorkPriority, o = e.pendingProps, uo()) null === o && null == (o = t && t.memoizedProps) && r("154");
                            else if (null === o || e.memoizedProps === o) {
                                e = f(t, e);
                                break t
                            }
                            null === t ? e.child = ro(e, e.child, o, n) : a(t, e, o),
                            e.memoizedProps = o,
                            e = e.child
                        }
                        return e;
                    case To:
                        t: {
                            if (n = e.pendingProps, uo()) null === n && (n = e.memoizedProps);
                            else if (null === n || e.memoizedProps === n) {
                                e = f(t, e);
                                break t
                            }
                            a(t, e, n),
                            e.memoizedProps = n,
                            e = e.child
                        }
                        return e;
                    default:
                        r("156")
                }
            },
            beginFailedWork: function(t, e, n) {
                switch (e.tag) {
                    case mo:
                        co(e);
                        break;
                    case vo:
                        l(e);
                        break;
                    default:
                        r("157")
                }
                return e.effectTag |= xo, null === t ? e.child = null : e.child !== t.child && (e.child = t.child), e.pendingWorkPriority === So || e.pendingWorkPriority > n ? h(0, e) : (e.firstEffect = null, e.lastEffect = null, s(t, e, null, n), e.tag === mo && (t = e.stateNode, e.memoizedProps = t.props, e.memoizedState = t.state), e.child)
            }
        }
    }

    function ut(t, e, n) {
        var i = t.createInstance,
            o = t.createTextInstance,
            a = t.appendInitialChild,
            s = t.finalizeInitialChildren,
            u = t.prepareUpdate,
            c = e.getRootHostContainer,
            l = e.popHostContext,
            f = e.getHostContext,
            h = e.popHostContainer,
            p = n.prepareToHydrateHostInstance,
            d = n.prepareToHydrateHostTextInstance,
            m = n.popHydrationState;
        return {
            completeWork: function(t, e, n) {
                var v = e.pendingProps;
                switch (null === v ? v = e.memoizedProps : e.pendingWorkPriority === $o && n !== $o || (e.pendingProps = null), e.tag) {
                    case jo:
                        return null;
                    case Lo:
                        return Mo(e), null;
                    case Uo:
                        return h(e), Ro(e), (v = e.stateNode).pendingContext && (v.context = v.pendingContext, v.pendingContext = null), null !== t && null !== t.child || (m(e), e.effectTag &= ~Ko), null;
                    case Fo:
                        l(e), n = c();
                        var y = e.type;
                        if (null !== t && null != e.stateNode) {
                            var g = t.memoizedProps,
                                b = e.stateNode,
                                w = f();
                            v = u(b, y, g, v, n, w), (e.updateQueue = v) && (e.effectTag |= Go), t.ref !== e.ref && (e.effectTag |= Yo)
                        } else {
                            if (!v) return null === e.stateNode && r("166"), null;
                            if (t = f(), m(e)) p(e, n, t) && (e.effectTag |= Go);
                            else {
                                t = i(y, v, n, t, e);
                                t: for (g = e.child; null !== g;) {
                                    if (g.tag === Fo || g.tag === Ho) a(t, g.stateNode);
                                    else if (g.tag !== Bo && null !== g.child) {
                                        g = g.child;
                                        continue
                                    }
                                    if (g === e) break t;
                                    for (; null === g.sibling;) {
                                        if (null === g.return || g.return === e) break t;
                                        g = g.return
                                    }
                                    g = g.sibling
                                }
                                s(t, y, v, n) && (e.effectTag |= Go), e.stateNode = t
                            }
                            null !== e.ref && (e.effectTag |= Yo)
                        }
                        return null;
                    case Ho:
                        if (t && null != e.stateNode) t.memoizedProps !== v && (e.effectTag |= Go);
                        else {
                            if ("string" != typeof v) return null === e.stateNode && r("166"), null;
                            t = c(), n = f(), m(e) ? d(e) && (e.effectTag |= Go) : e.stateNode = o(v, t, n, e)
                        }
                        return null;
                    case zo:
                        (v = e.memoizedProps) || r("165"), e.tag = qo, n = [];
                        t: for ((y = e.stateNode) && (y.return = e); null !== y;) {
                            if (y.tag === Fo || y.tag === Ho || y.tag === Bo) r("164");
                            else if (y.tag === Vo) n.push(y.type);
                            else if (null !== y.child) {
                                y.child.return = y, y = y.child;
                                continue
                            }
                            for (; null === y.sibling;) {
                                if (null === y.return || y.return === e) break t;
                                y = y.return
                            }
                            y.sibling.return = y.return, y = y.sibling
                        }
                        return y = v.handler, v = y(v.props, n), e.child = No(e, null !== t ? t.child : null, v, e.pendingWorkPriority), e.child;
                    case qo:
                        return e.tag = zo, null;
                    case Vo:
                    case Wo:
                        return null;
                    case Bo:
                        return e.effectTag |= Go, h(e), null;
                    case Do:
                        r("167");
                    default:
                        r("156")
                }
            }
        }
    }

    function ct(t) {
        return function(e) {
            try {
                return t(e)
            } catch (t) {}
        }
    }

    function lt(t, e) {
        function n(t) {
            var n = t.ref;
            if (null !== n) try {
                n(null)
            } catch (n) {
                e(t, n)
            }
        }

        function i(t) {
            return t.tag === ea || t.tag === ta || t.tag === ra
        }

        function o(t) {
            for (var e = t;;)
                if (s(e), null !== e.child && e.tag !== ra) e.child.return = e, e = e.child;
                else {
                    if (e === t) break;
                    for (; null === e.sibling;) {
                        if (null === e.return || e.return === t) return;
                        e = e.return
                    }
                    e.sibling.return = e.return, e = e.sibling
                }
        }

        function a(t) {
            for (var e = t, n = !1, i = void 0, a = void 0;;) {
                if (!n) {
                    n = e.return;
                    t: for (;;) {
                        switch (null === n && r("160"), n.tag) {
                            case ea:
                                i = n.stateNode, a = !1;
                                break t;
                            case ta:
                            case ra:
                                i = n.stateNode.containerInfo, a = !0;
                                break t
                        }
                        n = n.return
                    }
                    n = !0
                }
                if (e.tag === ea || e.tag === na) o(e), a ? y(i, e.stateNode) : v(i, e.stateNode);
                else if (e.tag === ra ? i = e.stateNode.containerInfo : s(e), null !== e.child) {
                    e.child.return = e, e = e.child;
                    continue
                }
                if (e === t) break;
                for (; null === e.sibling;) {
                    if (null === e.return || e.return === t) return;
                    (e = e.return).tag === ra && (n = !1)
                }
                e.sibling.return = e.return, e = e.sibling
            }
        }

        function s(t) {
            switch ("function" == typeof aa && aa(t), t.tag) {
                case Zo:
                    n(t);
                    var r = t.stateNode;
                    if ("function" == typeof r.componentWillUnmount) try {
                        r.props = t.memoizedProps, r.state = t.memoizedState, r.componentWillUnmount()
                    } catch (n) {
                        e(t, n)
                    }
                    break;
                case ea:
                    n(t);
                    break;
                case ia:
                    o(t.stateNode);
                    break;
                case ra:
                    a(t)
            }
        }
        var u = t.commitMount,
            c = t.commitUpdate,
            l = t.resetTextContent,
            f = t.commitTextUpdate,
            h = t.appendChild,
            p = t.appendChildToContainer,
            d = t.insertBefore,
            m = t.insertInContainerBefore,
            v = t.removeChild,
            y = t.removeChildFromContainer,
            g = t.getPublicInstance;
        return {
            commitPlacement: function(t) {
                t: {
                    for (var e = t.return; null !== e;) {
                        if (i(e)) {
                            var n = e;
                            break t
                        }
                        e = e.return
                    }
                    r("160"),
                    n = void 0
                }
                var o = e = void 0;
                switch (n.tag) {
                    case ea:
                        e = n.stateNode, o = !1;
                        break;
                    case ta:
                    case ra:
                        e = n.stateNode.containerInfo, o = !0;
                        break;
                    default:
                        r("161")
                }
                n.effectTag & la && (l(e), n.effectTag &= ~la);t: e: for (n = t;;) {
                    for (; null === n.sibling;) {
                        if (null === n.return || i(n.return)) {
                            n = null;
                            break t
                        }
                        n = n.return
                    }
                    for (n.sibling.return = n.return, n = n.sibling; n.tag !== ea && n.tag !== na;) {
                        if (n.effectTag & sa) continue e;
                        if (null === n.child || n.tag === ra) continue e;
                        n.child.return = n, n = n.child
                    }
                    if (!(n.effectTag & sa)) {
                        n = n.stateNode;
                        break t
                    }
                }
                for (var a = t;;) {
                    if (a.tag === ea || a.tag === na) n ? o ? m(e, a.stateNode, n) : d(e, a.stateNode, n) : o ? p(e, a.stateNode) : h(e, a.stateNode);
                    else if (a.tag !== ra && null !== a.child) {
                        a.child.return = a, a = a.child;
                        continue
                    }
                    if (a === t) break;
                    for (; null === a.sibling;) {
                        if (null === a.return || a.return === t) return;
                        a = a.return
                    }
                    a.sibling.return = a.return, a = a.sibling
                }
            },
            commitDeletion: function(t) {
                a(t), t.return = null, t.child = null, t.alternate && (t.alternate.child = null, t.alternate.return = null)
            },
            commitWork: function(t, e) {
                switch (e.tag) {
                    case Zo:
                        break;
                    case ea:
                        var n = e.stateNode;
                        if (null != n) {
                            var i = e.memoizedProps;
                            t = null !== t ? t.memoizedProps : i;
                            var o = e.type,
                                a = e.updateQueue;
                            e.updateQueue = null, null !== a && c(n, a, o, t, i, e)
                        }
                        break;
                    case na:
                        null === e.stateNode && r("162"), n = e.memoizedProps, f(e.stateNode, null !== t ? t.memoizedProps : n, n);
                        break;
                    case ta:
                    case ra:
                        break;
                    default:
                        r("163")
                }
            },
            commitLifeCycles: function(t, e) {
                switch (e.tag) {
                    case Zo:
                        var n = e.stateNode;
                        if (e.effectTag & ua)
                            if (null === t) n.props = e.memoizedProps, n.state = e.memoizedState, n.componentDidMount();
                            else {
                                var i = t.memoizedProps;
                                t = t.memoizedState, n.props = e.memoizedProps, n.state = e.memoizedState, n.componentDidUpdate(i, t)
                            }
                        e.effectTag & ca && null !== e.updateQueue && oa(e, e.updateQueue, n);
                        break;
                    case ta:
                        null !== (t = e.updateQueue) && oa(e, t, e.child && e.child.stateNode);
                        break;
                    case ea:
                        n = e.stateNode, null === t && e.effectTag & ua && u(n, e.type, e.memoizedProps, e);
                        break;
                    case na:
                    case ra:
                        break;
                    default:
                        r("163")
                }
            },
            commitAttachRef: function(t) {
                var e = t.ref;
                if (null !== e) {
                    var n = t.stateNode;
                    switch (t.tag) {
                        case ea:
                            e(g(n));
                            break;
                        default:
                            e(n)
                    }
                }
            },
            commitDetachRef: function(t) {
                null !== (t = t.ref) && t(null)
            }
        }
    }

    function ft(t) {
        function e(t) {
            return t === da && r("174"), t
        }
        var n = t.getChildHostContext,
            i = t.getRootHostContext,
            o = fa(da),
            a = fa(da),
            s = fa(da);
        return {
            getHostContext: function() {
                return e(o.current)
            },
            getRootHostContainer: function() {
                return e(s.current)
            },
            popHostContainer: function(t) {
                ha(o, t), ha(a, t), ha(s, t)
            },
            popHostContext: function(t) {
                a.current === t && (ha(o, t), ha(a, t))
            },
            pushHostContainer: function(t, e) {
                pa(s, e, t), e = i(e), pa(a, t, t), pa(o, e, t)
            },
            pushHostContext: function(t) {
                var r = e(s.current),
                    i = e(o.current);
                i !== (r = n(i, t.type, r)) && (pa(a, t, t), pa(o, r, t))
            },
            resetHostContainer: function() {
                o.current = da, s.current = da
            }
        }
    }

    function ht(t) {
        function e(t, e) {
            var n = wa();
            n.stateNode = e, n.return = t, n.effectTag = ga, null !== t.lastEffect ? (t.lastEffect.nextEffect = n, t.lastEffect = n) : t.firstEffect = t.lastEffect = n
        }

        function n(t, e) {
            switch (t.tag) {
                case ma:
                    return a(e, t.type, t.pendingProps);
                case va:
                    return s(e, t.pendingProps);
                default:
                    return !1
            }
        }

        function i(t) {
            for (t = t.return; null !== t && t.tag !== ma && t.tag !== ya;) t = t.return;
            d = t
        }
        var o = t.shouldSetTextContent,
            a = t.canHydrateInstance,
            s = t.canHydrateTextInstance,
            u = t.getNextHydratableSibling,
            c = t.getFirstHydratableChild,
            l = t.hydrateInstance,
            f = t.hydrateTextInstance,
            h = t.didNotHydrateInstance,
            p = t.didNotFindHydratableInstance;
        if (t = t.didNotFindHydratableTextInstance, !(a && s && u && c && l && f && h && p && t)) return {
            enterHydrationState: function() {
                return !1
            },
            resetHydrationState: function() {},
            tryToClaimNextHydratableInstance: function() {},
            prepareToHydrateHostInstance: function() {
                r("175")
            },
            prepareToHydrateHostTextInstance: function() {
                r("176")
            },
            popHydrationState: function() {
                return !1
            }
        };
        var d = null,
            m = null,
            v = !1;
        return {
            enterHydrationState: function(t) {
                return m = c(t.stateNode.containerInfo), d = t, v = !0
            },
            resetHydrationState: function() {
                m = d = null, v = !1
            },
            tryToClaimNextHydratableInstance: function(t) {
                if (v) {
                    var r = m;
                    if (r) {
                        if (!n(t, r)) {
                            if (!(r = u(r)) || !n(t, r)) return t.effectTag |= ba, v = !1, void(d = t);
                            e(d, m)
                        }
                        t.stateNode = r, d = t, m = c(r)
                    } else t.effectTag |= ba, v = !1, d = t
                }
            },
            prepareToHydrateHostInstance: function(t, e, n) {
                return e = l(t.stateNode, t.type, t.memoizedProps, e, n, t), t.updateQueue = e, null !== e
            },
            prepareToHydrateHostTextInstance: function(t) {
                return f(t.stateNode, t.memoizedProps, t)
            },
            popHydrationState: function(t) {
                if (t !== d) return !1;
                if (!v) return i(t), v = !0, !1;
                var n = t.type;
                if (t.tag !== ma || "head" !== n && "body" !== n && !o(n, t.memoizedProps))
                    for (n = m; n;) e(t, n), n = u(n);
                return i(t), m = d ? u(t.stateNode) : null, !0
            }
        }
    }

    function pt(t) {
        function e() {
            for (; null !== K && K.current.pendingWorkPriority === Oa;) {
                K.isScheduled = !1;
                var t = K.nextScheduledRoot;
                if (K.nextScheduledRoot = null, K === Y) return Y = K = null, q = Oa, null;
                K = t
            }
            t = K;
            for (var e = null, n = Oa; null !== t;) t.current.pendingWorkPriority !== Oa && (n === Oa || n > t.current.pendingWorkPriority) && (n = t.current.pendingWorkPriority, e = t), t = t.nextScheduledRoot;
            null !== e ? (q = n, Ea(), Ga(), E(), z = Sa(e.current, n), e !== it && (rt = 0, it = e)) : (q = Oa, it = z = null)
        }

        function n(n) {
            tt = !0, W = null;
            var i = n.stateNode;
            if (i.current === n && r("177"), q !== ka && q !== xa || rt++, Ta.current = null, n.effectTag > Ra)
                if (null !== n.lastEffect) {
                    n.lastEffect.nextEffect = n;
                    var o = n.firstEffect
                } else o = n;
            else o = n.firstEffect;
            for (D(), V = o; null !== V;) {
                var a = !1,
                    s = void 0;
                try {
                    for (; null !== V;) {
                        var u = V.effectTag;
                        if (u & Fa && t.resetTextContent(V.stateNode), u & za) {
                            var c = V.alternate;
                            null !== c && N(c)
                        }
                        switch (u & ~(Ha | Ba | Fa | za | Ra)) {
                            case Da:
                                O(V), V.effectTag &= ~Da;
                                break;
                            case La:
                                O(V), V.effectTag &= ~Da, x(V.alternate, V);
                                break;
                            case ja:
                                x(V.alternate, V);
                                break;
                            case Ua:
                                et = !0, k(V), et = !1
                        }
                        V = V.nextEffect
                    }
                } catch (t) {
                    a = !0, s = t
                }
                a && (null === V && r("178"), f(V, s), null !== V && (V = V.nextEffect))
            }
            for (j(), i.current = n, V = o; null !== V;) {
                i = !1, o = void 0;
                try {
                    for (; null !== V;) {
                        var l = V.effectTag;
                        if (l & (ja | Ha) && I(V.alternate, V), l & za && A(V), l & Ba) switch (a = V, s = void 0, null !== $ && (s = $.get(a), $.delete(a), null == s && null !== a.alternate && (a = a.alternate, s = $.get(a), $.delete(a))), null == s && r("184"), a.tag) {
                            case Ka:
                                a.stateNode.componentDidCatch(s.error, {
                                    componentStack: s.componentStack
                                });
                                break;
                            case qa:
                                null === Q && (Q = s.error);
                                break;
                            default:
                                r("157")
                        }
                        var h = V.nextEffect;
                        V.nextEffect = null, V = h
                    }
                } catch (t) {
                    i = !0, o = t
                }
                i && (null === V && r("178"), f(V, o), null !== V && (V = V.nextEffect))
            }
            tt = !1, "function" == typeof Ca && Ca(n.stateNode), J && (J.forEach(y), J = null), e()
        }

        function i(t) {
            for (;;) {
                var e = C(t.alternate, t, q),
                    n = t.return,
                    r = t.sibling,
                    i = t;
                if (!(i.pendingWorkPriority !== Oa && i.pendingWorkPriority > q)) {
                    for (var o = Ya(i), a = i.child; null !== a;) o = Pa(o, a.pendingWorkPriority), a = a.sibling;
                    i.pendingWorkPriority = o
                }
                if (null !== e) return e;
                if (null !== n && (null === n.firstEffect && (n.firstEffect = t.firstEffect), null !== t.lastEffect && (null !== n.lastEffect && (n.lastEffect.nextEffect = t.firstEffect), n.lastEffect = t.lastEffect), t.effectTag > Ra && (null !== n.lastEffect ? n.lastEffect.nextEffect = t : n.firstEffect = t, n.lastEffect = t)), null !== r) return r;
                if (null === n) {
                    W = t;
                    break
                }
                t = n
            }
            return null
        }

        function o(t) {
            var e = S(t.alternate, t, q);
            return null === e && (e = i(t)), Ta.current = null, e
        }

        function a(t) {
            var e = P(t.alternate, t, q);
            return null === e && (e = i(t)), Ta.current = null, e
        }

        function s(t) {
            l(Na, t)
        }

        function u() {
            if (null !== $ && 0 < $.size && q === xa)
                for (; null !== z;) {
                    var t = z;
                    if (null === (z = null !== $ && ($.has(t) || null !== t.alternate && $.has(t.alternate)) ? a(z) : o(z)) && (null === W && r("179"), L = xa, n(W), L = q, null === $ || 0 === $.size || q !== xa)) break
                }
        }

        function c(t, i) {
            if (null !== W ? (L = xa, n(W), u()) : null === z && e(), !(q === Oa || q > t)) {
                L = q;
                t: for (;;) {
                    if (q <= xa)
                        for (; null !== z && !(null === (z = o(z)) && (null === W && r("179"), L = xa, n(W), L = q, u(), q === Oa || q > t || q > xa)););
                    else if (null !== i)
                        for (; null !== z && !F;)
                            if (1 < i.timeRemaining()) {
                                if (null === (z = o(z)))
                                    if (null === W && r("179"), 1 < i.timeRemaining()) {
                                        if (L = xa, n(W), L = q, u(), q === Oa || q > t || q < Ia) break
                                    } else F = !0
                            } else F = !0;
                    switch (q) {
                        case ka:
                        case xa:
                            if (q <= t) continue t;
                            break t;
                        case Ia:
                        case Aa:
                        case Na:
                            if (null === i) break t;
                            if (!F && q <= t) continue t;
                            break t;
                        case Oa:
                            break t;
                        default:
                            r("181")
                    }
                }
            }
        }

        function l(t, e) {
            U && r("182"), U = !0;
            var n = L,
                i = !1,
                o = null;
            try {
                c(t, e)
            } catch (t) {
                i = !0, o = t
            }
            for (; i;) {
                if (Z) {
                    Q = o;
                    break
                }
                var u = z;
                if (null === u) Z = !0;
                else {
                    var l = f(u, o);
                    if (null === l && r("183"), !Z) {
                        try {
                            i = l, o = t, l = e;
                            for (var h = i; null !== u;) {
                                switch (u.tag) {
                                    case Ka:
                                        _a(u);
                                        break;
                                    case Va:
                                        _(u);
                                        break;
                                    case qa:
                                        w(u);
                                        break;
                                    case Wa:
                                        w(u)
                                }
                                if (u === h || u.alternate === h) break;
                                u = u.return
                            }
                            z = a(i), c(o, l)
                        } catch (t) {
                            i = !0, o = t;
                            continue
                        }
                        break
                    }
                }
            }
            if (L = n, null !== e && (G = !1), q > xa && !G && (M(s), G = !0), t = Q, Z = F = U = !1, it = X = $ = Q = null, rt = 0, null !== t) throw t
        }

        function f(t, e) {
            var n = Ta.current = null,
                r = !1,
                i = !1,
                o = null;
            if (t.tag === qa) n = t, p(t) && (Z = !0);
            else
                for (var a = t.return; null !== a && null === n;) {
                    if (a.tag === Ka ? "function" == typeof a.stateNode.componentDidCatch && (r = !0, o = h(a), n = a, i = !0) : a.tag === qa && (n = a), p(a)) {
                        if (et || null !== J && (J.has(a) || null !== a.alternate && J.has(a.alternate))) return null;
                        n = null, i = !1
                    }
                    a = a.return
                }
            if (null !== n) {
                null === X && (X = new Set), X.add(n);
                var s = "";
                a = t;
                do {
                    t: switch (a.tag) {
                        case hi:
                        case pi:
                        case di:
                        case mi:
                            var u = a._debugOwner,
                                c = a._debugSource,
                                l = h(a),
                                f = null;
                            u && (f = h(u)), u = c, l = "\n    in " + (l || "Unknown") + (u ? " (at " + u.fileName.replace(/^.*[\\\/]/, "") + ":" + u.lineNumber + ")" : f ? " (created by " + f + ")" : "");
                            break t;
                        default:
                            l = ""
                    }
                    s += l,
                    a = a.return
                } while (a);
                a = s, t = h(t), null === $ && ($ = new Map), e = {
                    componentName: t,
                    componentStack: a,
                    error: e,
                    errorBoundary: r ? n.stateNode : null,
                    errorBoundaryFound: r,
                    errorBoundaryName: o,
                    willRetry: i
                }, $.set(n, e);
                try {
                    console.error(e.error)
                } catch (t) {
                    console.error(t)
                }
                return tt ? (null === J && (J = new Set), J.add(n)) : y(n), n
            }
            return null === Q && (Q = e), null
        }

        function p(t) {
            return null !== X && (X.has(t) || null !== t.alternate && X.has(t.alternate))
        }

        function d(t, e) {
            return m(t, e, !1)
        }

        function m(t, e) {
            rt > nt && (Z = !0, r("185")), !U && e <= q && (z = null);
            for (var n = !0; null !== t && n;) {
                if (n = !1, (t.pendingWorkPriority === Oa || t.pendingWorkPriority > e) && (n = !0, t.pendingWorkPriority = e), null !== t.alternate && (t.alternate.pendingWorkPriority === Oa || t.alternate.pendingWorkPriority > e) && (n = !0, t.alternate.pendingWorkPriority = e), null === t.return) {
                    if (t.tag !== qa) break;
                    var i = t.stateNode;
                    if (e === Oa || i.isScheduled || (i.isScheduled = !0, Y ? Y.nextScheduledRoot = i : K = i, Y = i), !U) switch (e) {
                        case ka:
                            B ? l(ka, null) : l(xa, null);
                            break;
                        case xa:
                            H || r("186");
                            break;
                        default:
                            G || (M(s), G = !0)
                    }
                }
                t = t.return
            }
        }

        function v(t, e) {
            var n = L;
            return n === Oa && (n = !R || t.internalContextTag & Ma || e ? Aa : ka), n === ka && (U || H) ? xa : n
        }

        function y(t) {
            m(t, xa, !0)
        }
        var g = ft(t),
            b = ht(t),
            w = g.popHostContainer,
            _ = g.popHostContext,
            E = g.resetHostContainer,
            T = st(t, g, b, d, v),
            S = T.beginWork,
            P = T.beginFailedWork,
            C = ut(t, g, b).completeWork,
            O = (g = lt(t, f)).commitPlacement,
            k = g.commitDeletion,
            x = g.commitWork,
            I = g.commitLifeCycles,
            A = g.commitAttachRef,
            N = g.commitDetachRef,
            M = t.scheduleDeferredCallback,
            R = t.useSyncScheduling,
            D = t.prepareForCommit,
            j = t.resetAfterCommit,
            L = Oa,
            U = !1,
            F = !1,
            H = !1,
            B = !1,
            z = null,
            q = Oa,
            V = null,
            W = null,
            K = null,
            Y = null,
            G = !1,
            $ = null,
            X = null,
            J = null,
            Q = null,
            Z = !1,
            tt = !1,
            et = !1,
            nt = 1e3,
            rt = 0,
            it = null;
        return {
            scheduleUpdate: d,
            getPriorityContext: v,
            batchedUpdates: function(t, e) {
                var n = H;
                H = !0;
                try {
                    return t(e)
                } finally {
                    H = n, U || H || l(xa, null)
                }
            },
            unbatchedUpdates: function(t) {
                var e = B,
                    n = H;
                B = H, H = !1;
                try {
                    return t()
                } finally {
                    H = n, B = e
                }
            },
            flushSync: function(t) {
                var e = H,
                    n = L;
                H = !0, L = ka;
                try {
                    return t()
                } finally {
                    H = e, L = n, U && r("187"), l(xa, null)
                }
            },
            deferredUpdates: function(t) {
                var e = L;
                L = Aa;
                try {
                    return t()
                } finally {
                    L = e
                }
            }
        }
    }

    function dt() {
        r("196")
    }

    function mt(t) {
        return t ? "number" == typeof(t = Ge.get(t)).tag ? dt(t) : t._processChildContext(t._context) : we
    }

    function vt(t) {
        for (; t && t.firstChild;) t = t.firstChild;
        return t
    }

    function yt(t, e) {
        var n = vt(t);
        t = 0;
        for (var r; n;) {
            if (n.nodeType === ns) {
                if (r = t + n.textContent.length, t <= e && r >= e) return {
                    node: n,
                    offset: e - t
                };
                t = r
            }
            t: {
                for (; n;) {
                    if (n.nextSibling) {
                        n = n.nextSibling;
                        break t
                    }
                    n = n.parentNode
                }
                n = void 0
            }
            n = vt(n)
        }
    }

    function gt() {
        return !rs && ve.canUseDOM && (rs = "textContent" in document.documentElement ? "textContent" : "innerText"), rs
    }

    function bt() {
        r("211")
    }

    function wt() {
        r("212")
    }

    function _t(t) {
        if (null == t) return null;
        if (t.nodeType === us) return t;
        var e = Ge.get(t);
        if (e) return "number" == typeof e.tag ? bt(e) : wt(e);
        "function" == typeof t.render ? r("188") : r("213", Object.keys(t))
    }

    function Et(t) {
        if (void 0 !== t._hostParent) return t._hostParent;
        if ("number" == typeof t.tag) {
            do {
                t = t.return
            } while (t && t.tag !== cs);
            if (t) return t
        }
        return null
    }

    function Tt(t, e) {
        for (var n = 0, r = t; r; r = Et(r)) n++;
        r = 0;
        for (var i = e; i; i = Et(i)) r++;
        for (; 0 < n - r;) t = Et(t), n--;
        for (; 0 < r - n;) e = Et(e), r--;
        for (; n--;) {
            if (t === e || t === e.alternate) return t;
            t = Et(t), e = Et(e)
        }
        return null
    }

    function St(t, e, n) {
        (e = fs(t, n.dispatchConfig.phasedRegistrationNames[e])) && (n._dispatchListeners = P(n._dispatchListeners, e), n._dispatchInstances = P(n._dispatchInstances, t))
    }

    function Pt(t) {
        t && t.dispatchConfig.phasedRegistrationNames && ls.traverseTwoPhase(t._targetInst, St, t)
    }

    function Ct(t) {
        if (t && t.dispatchConfig.phasedRegistrationNames) {
            var e = t._targetInst;
            e = e ? ls.getParentInstance(e) : null, ls.traverseTwoPhase(e, St, t)
        }
    }

    function Ot(t, e, n) {
        t && n && n.dispatchConfig.registrationName && (e = fs(t, n.dispatchConfig.registrationName)) && (n._dispatchListeners = P(n._dispatchListeners, e), n._dispatchInstances = P(n._dispatchInstances, t))
    }

    function kt(t) {
        t && t.dispatchConfig.registrationName && Ot(t._targetInst, null, t)
    }

    function xt(t, e, n, r) {
        this.dispatchConfig = t, this._targetInst = e, this.nativeEvent = n, t = this.constructor.Interface;
        for (var i in t) t.hasOwnProperty(i) && ((e = t[i]) ? this[i] = e(n) : "target" === i ? this.target = r : this[i] = n[i]);
        return this.isDefaultPrevented = (null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue) ? be.thatReturnsTrue : be.thatReturnsFalse, this.isPropagationStopped = be.thatReturnsFalse, this
    }

    function It(t, e, n, r) {
        if (this.eventPool.length) {
            var i = this.eventPool.pop();
            return this.call(i, t, e, n, r), i
        }
        return new this(t, e, n, r)
    }

    function At(t) {
        t instanceof this || r("223"), t.destructor(), 10 > this.eventPool.length && this.eventPool.push(t)
    }

    function Nt(t) {
        t.eventPool = [], t.getPooled = It, t.release = At
    }

    function Mt(t, e, n, r) {
        return xt.call(this, t, e, n, r)
    }

    function Rt(t, e, n, r) {
        return xt.call(this, t, e, n, r)
    }

    function Dt(t, e) {
        switch (t) {
            case "topKeyUp":
                return -1 !== gs.indexOf(e.keyCode);
            case "topKeyDown":
                return 229 !== e.keyCode;
            case "topKeyPress":
            case "topMouseDown":
            case "topBlur":
                return !0;
            default:
                return !1
        }
    }

    function jt(t) {
        return "object" == typeof(t = t.detail) && "data" in t ? t.data : null
    }

    function Lt(t, e) {
        switch (t) {
            case "topCompositionEnd":
                return jt(e);
            case "topKeyPress":
                return 32 !== e.which ? null : (Os = !0, Ps);
            case "topTextInput":
                return (t = e.data) === Ps && Os ? null : t;
            default:
                return null
        }
    }

    function Ut(t, e) {
        if (ks) return "topCompositionEnd" === t || !bs && Dt(t, e) ? (t = ms.getData(), ms.reset(), ks = !1, t) : null;
        switch (t) {
            case "topPaste":
                return null;
            case "topKeyPress":
                if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
                    if (e.char && 1 < e.char.length) return e.char;
                    if (e.which) return String.fromCharCode(e.which)
                }
                return null;
            case "topCompositionEnd":
                return Ss ? null : e.data;
            default:
                return null
        }
    }

    function Ft(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return "input" === e ? !!Is[t.type] : "textarea" === e
    }

    function Ht(t, e, n) {
        return t = xt.getPooled(As.change, t, e, n), t.type = "change", hn.enqueueStateRestore(n), hs.accumulateTwoPhaseDispatches(t), t
    }

    function Bt(t) {
        _n.enqueueEvents(t), _n.processEventQueue(!1)
    }

    function zt(t) {
        var e = Ye.getNodeFromInstance(t);
        if (Zn.updateValueIfChanged(e)) return t
    }

    function qt(t, e) {
        if ("topChange" === t) return e
    }

    function Vt() {
        Ns && (Ns.detachEvent("onpropertychange", Wt), Ms = Ns = null)
    }

    function Wt(t) {
        "value" === t.propertyName && zt(Ms) && (t = Ht(Ms, t, T(t)), dn.batchedUpdates(Bt, t))
    }

    function Kt(t, e, n) {
        "topFocus" === t ? (Vt(), Ns = e, Ms = n, Ns.attachEvent("onpropertychange", Wt)) : "topBlur" === t && Vt()
    }

    function Yt(t) {
        if ("topSelectionChange" === t || "topKeyUp" === t || "topKeyDown" === t) return zt(Ms)
    }

    function Gt(t, e) {
        if ("topClick" === t) return zt(e)
    }

    function $t(t, e) {
        if ("topInput" === t || "topChange" === t) return zt(e)
    }

    function Xt(t, e, n, r) {
        return xt.call(this, t, e, n, r)
    }

    function Jt(t) {
        var e = this.nativeEvent;
        return e.getModifierState ? e.getModifierState(t) : !!(t = js[t]) && !!e[t]
    }

    function Qt() {
        return Jt
    }

    function Zt(t, e, n, r) {
        return xt.call(this, t, e, n, r)
    }

    function te(t, e) {
        if (Ws || null == zs || zs !== Se()) return null;
        var n = zs;
        return "selectionStart" in n && ss.hasSelectionCapabilities(n) ? n = {
            start: n.selectionStart,
            end: n.selectionEnd
        } : window.getSelection ? (n = window.getSelection(), n = {
            anchorNode: n.anchorNode,
            anchorOffset: n.anchorOffset,
            focusNode: n.focusNode,
            focusOffset: n.focusOffset
        }) : n = void 0, Vs && _e(Vs, n) ? null : (Vs = n, t = xt.getPooled(Bs.select, qs, t, e), t.type = "select", t.target = zs, hs.accumulateTwoPhaseDispatches(t), t)
    }

    function ee(t, e, n, r) {
        return xt.call(this, t, e, n, r)
    }

    function ne(t, e, n, r) {
        return xt.call(this, t, e, n, r)
    }

    function re(t, e, n, r) {
        return xt.call(this, t, e, n, r)
    }

    function ie(t) {
        var e = t.keyCode;
        return "charCode" in t ? 0 === (t = t.charCode) && 13 === e && (t = 13) : t = e, 32 <= t || 13 === t ? t : 0
    }

    function oe(t, e, n, r) {
        return xt.call(this, t, e, n, r)
    }

    function ae(t, e, n, r) {
        return xt.call(this, t, e, n, r)
    }

    function se(t, e, n, r) {
        return xt.call(this, t, e, n, r)
    }

    function ue(t, e, n, r) {
        return xt.call(this, t, e, n, r)
    }

    function ce(t, e, n, r) {
        return xt.call(this, t, e, n, r)
    }

    function le(t) {
        return t[1].toUpperCase()
    }

    function fe(t) {
        return !(!t || t.nodeType !== lu && t.nodeType !== pu && t.nodeType !== du && (t.nodeType !== hu || " react-mount-point-unstable " !== t.nodeValue))
    }

    function he(t) {
        return !(!(t = t ? t.nodeType === pu ? t.documentElement : t.firstChild : null) || t.nodeType !== lu || !t.hasAttribute(mu))
    }

    function pe(t, e, n, i, o) {
        fe(n) || r("200");
        var a = n._reactRootContainer;
        if (a) Nu.updateContainer(e, a, t, o);
        else {
            if (!i && !he(n))
                for (i = void 0; i = n.lastChild;) n.removeChild(i);
            var s = Nu.createContainer(n);
            a = n._reactRootContainer = s, Nu.unbatchedUpdates(function() {
                Nu.updateContainer(e, s, t, o)
            })
        }
        return Nu.getPublicRootInstance(a)
    }

    function de(t, e) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        return fe(e) || r("200"), gi.createPortal(t, e, null, n)
    }
    var me = n(0);
    n(8);
    var ve = n(48),
        ye = n(17),
        ge = n(49),
        be = n(6),
        we = n(18),
        _e = n(50),
        Ee = n(51),
        Te = n(54),
        Se = n(55);
    me || r("227");
    var Pe, Ce, Oe = {
            Namespaces: {
                html: "http://www.w3.org/1999/xhtml",
                mathml: "http://www.w3.org/1998/Math/MathML",
                svg: "http://www.w3.org/2000/svg"
            },
            getIntrinsicNamespace: i,
            getChildNamespace: function(t, e) {
                return null == t || "http://www.w3.org/1999/xhtml" === t ? i(e) : "http://www.w3.org/2000/svg" === t && "foreignObject" === e ? "http://www.w3.org/1999/xhtml" : t
            }
        },
        ke = null,
        xe = {},
        Ie = {
            plugins: [],
            eventNameDispatchConfigs: {},
            registrationNameModules: {},
            registrationNameDependencies: {},
            possibleRegistrationNames: null,
            injectEventPluginOrder: function(t) {
                ke && r("101"), ke = Array.prototype.slice.call(t), o()
            },
            injectEventPluginsByName: function(t) {
                var e, n = !1;
                for (e in t)
                    if (t.hasOwnProperty(e)) {
                        var i = t[e];
                        xe.hasOwnProperty(e) && xe[e] === i || (xe[e] && r("102", e), xe[e] = i, n = !0)
                    }
                n && o()
            }
        },
        Ae = Ie,
        Ne = {
            children: !0,
            dangerouslySetInnerHTML: !0,
            autoFocus: !0,
            defaultValue: !0,
            defaultChecked: !0,
            innerHTML: !0,
            suppressContentEditableWarning: !0,
            style: !0
        },
        Me = {
            MUST_USE_PROPERTY: 1,
            HAS_BOOLEAN_VALUE: 4,
            HAS_NUMERIC_VALUE: 8,
            HAS_POSITIVE_NUMERIC_VALUE: 24,
            HAS_OVERLOADED_BOOLEAN_VALUE: 32,
            HAS_STRING_BOOLEAN_VALUE: 64,
            injectDOMPropertyConfig: function(t) {
                var e = Me,
                    n = t.Properties || {},
                    i = t.DOMAttributeNamespaces || {},
                    o = t.DOMAttributeNames || {};
                t = t.DOMMutationMethods || {};
                for (var a in n) {
                    Re.properties.hasOwnProperty(a) && r("48", a);
                    var u = a.toLowerCase(),
                        c = n[a];
                    1 >= (u = {
                        attributeName: u,
                        attributeNamespace: null,
                        propertyName: a,
                        mutationMethod: null,
                        mustUseProperty: s(c, e.MUST_USE_PROPERTY),
                        hasBooleanValue: s(c, e.HAS_BOOLEAN_VALUE),
                        hasNumericValue: s(c, e.HAS_NUMERIC_VALUE),
                        hasPositiveNumericValue: s(c, e.HAS_POSITIVE_NUMERIC_VALUE),
                        hasOverloadedBooleanValue: s(c, e.HAS_OVERLOADED_BOOLEAN_VALUE),
                        hasStringBooleanValue: s(c, e.HAS_STRING_BOOLEAN_VALUE)
                    }).hasBooleanValue + u.hasNumericValue + u.hasOverloadedBooleanValue || r("50", a), o.hasOwnProperty(a) && (u.attributeName = o[a]), i.hasOwnProperty(a) && (u.attributeNamespace = i[a]), t.hasOwnProperty(a) && (u.mutationMethod = t[a]), Re.properties[a] = u
                }
            }
        },
        Re = {
            ID_ATTRIBUTE_NAME: "data-reactid",
            ROOT_ATTRIBUTE_NAME: "data-reactroot",
            ATTRIBUTE_NAME_START_CHAR: ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",
            ATTRIBUTE_NAME_CHAR: ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",
            properties: {},
            shouldSetAttribute: function(t, e) {
                if (Re.isReservedProp(t) || !("o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1])) return !1;
                if (null === e) return !0;
                switch (typeof e) {
                    case "boolean":
                        return Re.shouldAttributeAcceptBooleanValue(t);
                    case "undefined":
                    case "number":
                    case "string":
                    case "object":
                        return !0;
                    default:
                        return !1
                }
            },
            getPropertyInfo: function(t) {
                return Re.properties.hasOwnProperty(t) ? Re.properties[t] : null
            },
            shouldAttributeAcceptBooleanValue: function(t) {
                if (Re.isReservedProp(t)) return !0;
                var e = Re.getPropertyInfo(t);
                return e ? e.hasBooleanValue || e.hasStringBooleanValue || e.hasOverloadedBooleanValue : "data-" === (t = t.toLowerCase().slice(0, 5)) || "aria-" === t
            },
            isReservedProp: function(t) {
                return Ne.hasOwnProperty(t)
            },
            injection: Me
        },
        De = Re,
        je = {
            IndeterminateComponent: 0,
            FunctionalComponent: 1,
            ClassComponent: 2,
            HostRoot: 3,
            HostPortal: 4,
            HostComponent: 5,
            HostText: 6,
            CoroutineComponent: 7,
            CoroutineHandlerPhase: 8,
            YieldComponent: 9,
            Fragment: 10
        },
        Le = {
            ELEMENT_NODE: 1,
            TEXT_NODE: 3,
            COMMENT_NODE: 8,
            DOCUMENT_NODE: 9,
            DOCUMENT_FRAGMENT_NODE: 11
        },
        Ue = je.HostComponent,
        Fe = je.HostText,
        He = Le.ELEMENT_NODE,
        Be = Le.COMMENT_NODE,
        ze = De.ID_ATTRIBUTE_NAME,
        qe = {
            hasCachedChildNodes: 1
        },
        Ve = Math.random().toString(36).slice(2),
        We = "__reactInternalInstance$" + Ve,
        Ke = "__reactEventHandlers$" + Ve,
        Ye = {
            getClosestInstanceFromNode: f,
            getInstanceFromNode: function(t) {
                var e = t[We];
                return e ? e.tag === Ue || e.tag === Fe ? e : e._hostNode === t ? e : null : null != (e = f(t)) && e._hostNode === t ? e : null
            },
            getNodeFromInstance: function(t) {
                if (t.tag === Ue || t.tag === Fe) return t.stateNode;
                if (void 0 === t._hostNode && r("33"), t._hostNode) return t._hostNode;
                for (var e = []; !t._hostNode;) e.push(t), t._hostParent || r("34"), t = t._hostParent;
                for (; e.length; t = e.pop()) l(t, t._hostNode);
                return t._hostNode
            },
            precacheChildNodes: l,
            precacheNode: c,
            uncacheNode: function(t) {
                var e = t._hostNode;
                e && (delete e[We], t._hostNode = null)
            },
            precacheFiberNode: function(t, e) {
                e[We] = t
            },
            getFiberCurrentPropsFromNode: function(t) {
                return t[Ke] || null
            },
            updateFiberProps: function(t, e) {
                t[Ke] = e
            }
        },
        Ge = {
            remove: function(t) {
                t._reactInternalFiber = void 0
            },
            get: function(t) {
                return t._reactInternalFiber
            },
            has: function(t) {
                return void 0 !== t._reactInternalFiber
            },
            set: function(t, e) {
                t._reactInternalFiber = e
            }
        },
        $e = {
            ReactCurrentOwner: me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
        },
        Xe = {
            NoEffect: 0,
            PerformedWork: 1,
            Placement: 2,
            Update: 4,
            PlacementAndUpdate: 6,
            Deletion: 8,
            ContentReset: 16,
            Callback: 32,
            Err: 64,
            Ref: 128
        },
        Je = je.HostComponent,
        Qe = je.HostRoot,
        Ze = je.HostPortal,
        tn = je.HostText,
        en = Xe.NoEffect,
        nn = Xe.Placement,
        rn = {
            isFiberMounted: function(t) {
                return 2 === p(t)
            },
            isMounted: function(t) {
                return !!(t = Ge.get(t)) && 2 === p(t)
            },
            findCurrentFiberUsingSlowPath: m,
            findCurrentHostFiber: function(t) {
                if (!(t = m(t))) return null;
                for (var e = t;;) {
                    if (e.tag === Je || e.tag === tn) return e;
                    if (e.child) e.child.return = e, e = e.child;
                    else {
                        if (e === t) break;
                        for (; !e.sibling;) {
                            if (!e.return || e.return === t) return null;
                            e = e.return
                        }
                        e.sibling.return = e.return, e = e.sibling
                    }
                }
                return null
            },
            findCurrentHostFiberWithNoPortals: function(t) {
                if (!(t = m(t))) return null;
                for (var e = t;;) {
                    if (e.tag === Je || e.tag === tn) return e;
                    if (e.child && e.tag !== Ze) e.child.return = e, e = e.child;
                    else {
                        if (e === t) break;
                        for (; !e.sibling;) {
                            if (!e.return || e.return === t) return null;
                            e = e.return
                        }
                        e.sibling.return = e.return, e = e.sibling
                    }
                }
                return null
            }
        },
        on = {
            _caughtError: null,
            _hasCaughtError: !1,
            _rethrowError: null,
            _hasRethrowError: !1,
            injection: {
                injectErrorUtils: function(t) {
                    "function" != typeof t.invokeGuardedCallback && r("197"), v = t.invokeGuardedCallback
                }
            },
            invokeGuardedCallback: function(t, e, n, r, i, o, a, s, u) {
                v.apply(on, arguments)
            },
            invokeGuardedCallbackAndCatchFirstError: function(t, e, n, r, i, o, a, s, u) {
                if (on.invokeGuardedCallback.apply(this, arguments), on.hasCaughtError()) {
                    var c = on.clearCaughtError();
                    on._hasRethrowError || (on._hasRethrowError = !0, on._rethrowError = c)
                }
            },
            rethrowCaughtError: function() {
                return y.apply(on, arguments)
            },
            hasCaughtError: function() {
                return on._hasCaughtError
            },
            clearCaughtError: function() {
                if (on._hasCaughtError) {
                    var t = on._caughtError;
                    return on._caughtError = null, on._hasCaughtError = !1, t
                }
                r("198")
            }
        },
        an = on,
        sn = {
            isEndish: function(t) {
                return "topMouseUp" === t || "topTouchEnd" === t || "topTouchCancel" === t
            },
            isMoveish: function(t) {
                return "topMouseMove" === t || "topTouchMove" === t
            },
            isStartish: function(t) {
                return "topMouseDown" === t || "topTouchStart" === t
            },
            executeDirectDispatch: function(t) {
                var e = t._dispatchListeners,
                    n = t._dispatchInstances;
                return Array.isArray(e) && r("103"), t.currentTarget = e ? sn.getNodeFromInstance(n) : null, e = e ? e(t) : null, t.currentTarget = null, t._dispatchListeners = null, t._dispatchInstances = null, e
            },
            executeDispatchesInOrder: function(t, e) {
                var n = t._dispatchListeners,
                    r = t._dispatchInstances;
                if (Array.isArray(n))
                    for (var i = 0; i < n.length && !t.isPropagationStopped(); i++) g(t, e, n[i], r[i]);
                else n && g(t, e, n, r);
                t._dispatchListeners = null, t._dispatchInstances = null
            },
            executeDispatchesInOrderStopAtTrue: function(t) {
                t: {
                    var e = t._dispatchListeners,
                        n = t._dispatchInstances;
                    if (Array.isArray(e)) {
                        for (var r = 0; r < e.length && !t.isPropagationStopped(); r++)
                            if (e[r](t, n[r])) {
                                e = n[r];
                                break t
                            }
                    } else if (e && e(t, n)) {
                        e = n;
                        break t
                    }
                    e = null
                }
                return t._dispatchInstances = null,
                t._dispatchListeners = null,
                e
            },
            hasDispatches: function(t) {
                return !!t._dispatchListeners
            },
            getFiberCurrentPropsFromNode: function(t) {
                return Pe.getFiberCurrentPropsFromNode(t)
            },
            getInstanceFromNode: function(t) {
                return Pe.getInstanceFromNode(t)
            },
            getNodeFromInstance: function(t) {
                return Pe.getNodeFromInstance(t)
            },
            injection: {
                injectComponentTree: function(t) {
                    Pe = t
                }
            }
        },
        un = sn,
        cn = null,
        ln = null,
        fn = null,
        hn = {
            injection: {
                injectFiberControlledHostComponent: function(t) {
                    cn = t
                }
            },
            enqueueStateRestore: function(t) {
                ln ? fn ? fn.push(t) : fn = [t] : ln = t
            },
            restoreStateIfNeeded: function() {
                if (ln) {
                    var t = ln,
                        e = fn;
                    if (fn = ln = null, b(t), e)
                        for (t = 0; t < e.length; t++) b(e[t])
                }
            }
        },
        pn = !1,
        dn = {
            batchedUpdates: function(t, e) {
                if (pn) return w(E, t, e);
                pn = !0;
                try {
                    return w(E, t, e)
                } finally {
                    pn = !1, hn.restoreStateIfNeeded()
                }
            },
            injection: {
                injectStackBatchedUpdates: function(t) {
                    w = t
                },
                injectFiberBatchedUpdates: function(t) {
                    _ = t
                }
            }
        },
        mn = Le.TEXT_NODE,
        vn = je.HostRoot,
        yn = [],
        gn = {
            _enabled: !0,
            _handleTopLevel: null,
            setHandleTopLevel: function(t) {
                gn._handleTopLevel = t
            },
            setEnabled: function(t) {
                gn._enabled = !!t
            },
            isEnabled: function() {
                return gn._enabled
            },
            trapBubbledEvent: function(t, e, n) {
                return n ? ge.listen(n, e, gn.dispatchEvent.bind(null, t)) : null
            },
            trapCapturedEvent: function(t, e, n) {
                return n ? ge.capture(n, e, gn.dispatchEvent.bind(null, t)) : null
            },
            dispatchEvent: function(t, e) {
                if (gn._enabled) {
                    var n = T(e);
                    if (null === (n = Ye.getClosestInstanceFromNode(n)) || "number" != typeof n.tag || rn.isFiberMounted(n) || (n = null), yn.length) {
                        var r = yn.pop();
                        r.topLevelType = t, r.nativeEvent = e, r.targetInst = n, t = r
                    } else t = {
                        topLevelType: t,
                        nativeEvent: e,
                        targetInst: n,
                        ancestors: []
                    };
                    try {
                        dn.batchedUpdates(S, t)
                    } finally {
                        t.topLevelType = null, t.nativeEvent = null, t.targetInst = null, t.ancestors.length = 0, 10 > yn.length && yn.push(t)
                    }
                }
            }
        },
        bn = gn,
        wn = null,
        _n = {
            injection: {
                injectEventPluginOrder: Ae.injectEventPluginOrder,
                injectEventPluginsByName: Ae.injectEventPluginsByName
            },
            getListener: function(t, e) {
                if ("number" == typeof t.tag) {
                    var n = t.stateNode;
                    if (!n) return null;
                    var i = un.getFiberCurrentPropsFromNode(n);
                    if (!i) return null;
                    if (n = i[e], I(e, t.type, i)) return null
                } else {
                    if ("string" == typeof(i = t._currentElement) || "number" == typeof i || !t._rootNodeID) return null;
                    if (t = i.props, n = t[e], I(e, i.type, t)) return null
                }
                return n && "function" != typeof n && r("231", e, typeof n), n
            },
            extractEvents: function(t, e, n, r) {
                for (var i, o = Ae.plugins, a = 0; a < o.length; a++) {
                    var s = o[a];
                    s && (s = s.extractEvents(t, e, n, r)) && (i = P(i, s))
                }
                return i
            },
            enqueueEvents: function(t) {
                t && (wn = P(wn, t))
            },
            processEventQueue: function(t) {
                var e = wn;
                wn = null, t ? C(e, k) : C(e, x), wn && r("95"), an.rethrowCaughtError()
            }
        };
    ve.canUseDOM && (Ce = document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature("", ""));
    var En = {
            animationend: N("Animation", "AnimationEnd"),
            animationiteration: N("Animation", "AnimationIteration"),
            animationstart: N("Animation", "AnimationStart"),
            transitionend: N("Transition", "TransitionEnd")
        },
        Tn = {},
        Sn = {};
    ve.canUseDOM && (Sn = document.createElement("div").style, "AnimationEvent" in window || (delete En.animationend.animation, delete En.animationiteration.animation, delete En.animationstart.animation), "TransitionEvent" in window || delete En.transitionend.transition);
    var Pn = {
            topAbort: "abort",
            topAnimationEnd: M("animationend") || "animationend",
            topAnimationIteration: M("animationiteration") || "animationiteration",
            topAnimationStart: M("animationstart") || "animationstart",
            topBlur: "blur",
            topCancel: "cancel",
            topCanPlay: "canplay",
            topCanPlayThrough: "canplaythrough",
            topChange: "change",
            topClick: "click",
            topClose: "close",
            topCompositionEnd: "compositionend",
            topCompositionStart: "compositionstart",
            topCompositionUpdate: "compositionupdate",
            topContextMenu: "contextmenu",
            topCopy: "copy",
            topCut: "cut",
            topDoubleClick: "dblclick",
            topDrag: "drag",
            topDragEnd: "dragend",
            topDragEnter: "dragenter",
            topDragExit: "dragexit",
            topDragLeave: "dragleave",
            topDragOver: "dragover",
            topDragStart: "dragstart",
            topDrop: "drop",
            topDurationChange: "durationchange",
            topEmptied: "emptied",
            topEncrypted: "encrypted",
            topEnded: "ended",
            topError: "error",
            topFocus: "focus",
            topInput: "input",
            topKeyDown: "keydown",
            topKeyPress: "keypress",
            topKeyUp: "keyup",
            topLoadedData: "loadeddata",
            topLoad: "load",
            topLoadedMetadata: "loadedmetadata",
            topLoadStart: "loadstart",
            topMouseDown: "mousedown",
            topMouseMove: "mousemove",
            topMouseOut: "mouseout",
            topMouseOver: "mouseover",
            topMouseUp: "mouseup",
            topPaste: "paste",
            topPause: "pause",
            topPlay: "play",
            topPlaying: "playing",
            topProgress: "progress",
            topRateChange: "ratechange",
            topScroll: "scroll",
            topSeeked: "seeked",
            topSeeking: "seeking",
            topSelectionChange: "selectionchange",
            topStalled: "stalled",
            topSuspend: "suspend",
            topTextInput: "textInput",
            topTimeUpdate: "timeupdate",
            topToggle: "toggle",
            topTouchCancel: "touchcancel",
            topTouchEnd: "touchend",
            topTouchMove: "touchmove",
            topTouchStart: "touchstart",
            topTransitionEnd: M("transitionend") || "transitionend",
            topVolumeChange: "volumechange",
            topWaiting: "waiting",
            topWheel: "wheel"
        },
        Cn = {},
        On = 0,
        kn = "_reactListenersID" + ("" + Math.random()).slice(2),
        xn = ye({}, {
            handleTopLevel: function(t, e, n, r) {
                t = _n.extractEvents(t, e, n, r), _n.enqueueEvents(t), _n.processEventQueue(!1)
            }
        }, {
            setEnabled: function(t) {
                bn && bn.setEnabled(t)
            },
            isEnabled: function() {
                return !(!bn || !bn.isEnabled())
            },
            listenTo: function(t, e) {
                var n = R(e);
                t = Ae.registrationNameDependencies[t];
                for (var r = 0; r < t.length; r++) {
                    var i = t[r];
                    n.hasOwnProperty(i) && n[i] || ("topWheel" === i ? A("wheel") ? bn.trapBubbledEvent("topWheel", "wheel", e) : A("mousewheel") ? bn.trapBubbledEvent("topWheel", "mousewheel", e) : bn.trapBubbledEvent("topWheel", "DOMMouseScroll", e) : "topScroll" === i ? bn.trapCapturedEvent("topScroll", "scroll", e) : "topFocus" === i || "topBlur" === i ? (bn.trapCapturedEvent("topFocus", "focus", e), bn.trapCapturedEvent("topBlur", "blur", e), n.topBlur = !0, n.topFocus = !0) : "topCancel" === i ? (A("cancel", !0) && bn.trapCapturedEvent("topCancel", "cancel", e), n.topCancel = !0) : "topClose" === i ? (A("close", !0) && bn.trapCapturedEvent("topClose", "close", e), n.topClose = !0) : Pn.hasOwnProperty(i) && bn.trapBubbledEvent(i, Pn[i], e), n[i] = !0)
                }
            },
            isListeningToAllDependencies: function(t, e) {
                e = R(e), t = Ae.registrationNameDependencies[t];
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    if (!e.hasOwnProperty(r) || !e[r]) return !1
                }
                return !0
            },
            trapBubbledEvent: function(t, e, n) {
                return bn.trapBubbledEvent(t, e, n)
            },
            trapCapturedEvent: function(t, e, n) {
                return bn.trapCapturedEvent(t, e, n)
            }
        }),
        In = {
            animationIterationCount: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        },
        An = ["Webkit", "ms", "Moz", "O"];
    Object.keys(In).forEach(function(t) {
        An.forEach(function(e) {
            e = e + t.charAt(0).toUpperCase() + t.substring(1), In[e] = In[t]
        })
    });
    var Nn = {
            isUnitlessNumber: In,
            shorthandPropertyExpansions: {
                background: {
                    backgroundAttachment: !0,
                    backgroundColor: !0,
                    backgroundImage: !0,
                    backgroundPositionX: !0,
                    backgroundPositionY: !0,
                    backgroundRepeat: !0
                },
                backgroundPosition: {
                    backgroundPositionX: !0,
                    backgroundPositionY: !0
                },
                border: {
                    borderWidth: !0,
                    borderStyle: !0,
                    borderColor: !0
                },
                borderBottom: {
                    borderBottomWidth: !0,
                    borderBottomStyle: !0,
                    borderBottomColor: !0
                },
                borderLeft: {
                    borderLeftWidth: !0,
                    borderLeftStyle: !0,
                    borderLeftColor: !0
                },
                borderRight: {
                    borderRightWidth: !0,
                    borderRightStyle: !0,
                    borderRightColor: !0
                },
                borderTop: {
                    borderTopWidth: !0,
                    borderTopStyle: !0,
                    borderTopColor: !0
                },
                font: {
                    fontStyle: !0,
                    fontVariant: !0,
                    fontWeight: !0,
                    fontSize: !0,
                    lineHeight: !0,
                    fontFamily: !0
                },
                outline: {
                    outlineWidth: !0,
                    outlineStyle: !0,
                    outlineColor: !0
                }
            }
        },
        Mn = Nn.isUnitlessNumber,
        Rn = !1;
    if (ve.canUseDOM) {
        var Dn = document.createElement("div").style;
        try {
            Dn.font = ""
        } catch (t) {
            Rn = !0
        }
    }
    var jn, Ln = {
            createDangerousStringForStyles: function() {},
            setValueForStyles: function(t, e) {
                t = t.style;
                for (var n in e)
                    if (e.hasOwnProperty(n)) {
                        var r = 0 === n.indexOf("--"),
                            i = n,
                            o = e[n];
                        if (i = null == o || "boolean" == typeof o || "" === o ? "" : r || "number" != typeof o || 0 === o || Mn.hasOwnProperty(i) && Mn[i] ? ("" + o).trim() : o + "px", "float" === n && (n = "cssFloat"), r) t.setProperty(n, i);
                        else if (i) t[n] = i;
                        else if (r = Rn && Nn.shorthandPropertyExpansions[n])
                            for (var a in r) t[a] = "";
                        else t[n] = ""
                    }
            }
        },
        Un = new RegExp("^[" + De.ATTRIBUTE_NAME_START_CHAR + "][" + De.ATTRIBUTE_NAME_CHAR + "]*$"),
        Fn = {},
        Hn = {},
        Bn = {
            setAttributeForID: function(t, e) {
                t.setAttribute(De.ID_ATTRIBUTE_NAME, e)
            },
            setAttributeForRoot: function(t) {
                t.setAttribute(De.ROOT_ATTRIBUTE_NAME, "")
            },
            getValueForProperty: function() {},
            getValueForAttribute: function() {},
            setValueForProperty: function(t, e, n) {
                var r = De.getPropertyInfo(e);
                if (r && De.shouldSetAttribute(e, n)) {
                    var i = r.mutationMethod;
                    i ? i(t, n) : null == n || r.hasBooleanValue && !n || r.hasNumericValue && isNaN(n) || r.hasPositiveNumericValue && 1 > n || r.hasOverloadedBooleanValue && !1 === n ? Bn.deleteValueForProperty(t, e) : r.mustUseProperty ? t[r.propertyName] = n : (e = r.attributeName, (i = r.attributeNamespace) ? t.setAttributeNS(i, e, "" + n) : r.hasBooleanValue || r.hasOverloadedBooleanValue && !0 === n ? t.setAttribute(e, "") : t.setAttribute(e, "" + n))
                } else Bn.setValueForAttribute(t, e, De.shouldSetAttribute(e, n) ? n : null)
            },
            setValueForAttribute: function(t, e, n) {
                D(e) && (null == n ? t.removeAttribute(e) : t.setAttribute(e, "" + n))
            },
            deleteValueForAttribute: function(t, e) {
                t.removeAttribute(e)
            },
            deleteValueForProperty: function(t, e) {
                var n = De.getPropertyInfo(e);
                n ? (e = n.mutationMethod) ? e(t, void 0) : n.mustUseProperty ? t[n.propertyName] = !n.hasBooleanValue && "" : t.removeAttribute(n.attributeName) : t.removeAttribute(e)
            }
        },
        zn = Bn,
        qn = $e.ReactDebugCurrentFrame,
        Vn = {
            current: null,
            phase: null,
            resetCurrentFiber: function() {
                qn.getCurrentStack = null, Vn.current = null, Vn.phase = null
            },
            setCurrentFiber: function(t, e) {
                qn.getCurrentStack = j, Vn.current = t, Vn.phase = e
            },
            getCurrentFiberOwnerName: function() {
                return null
            },
            getCurrentFiberStackAddendum: j
        },
        Wn = Vn,
        Kn = {
            getHostProps: function(t, e) {
                var n = e.value,
                    r = e.checked;
                return ye({
                    type: void 0,
                    step: void 0,
                    min: void 0,
                    max: void 0
                }, e, {
                    defaultChecked: void 0,
                    defaultValue: void 0,
                    value: null != n ? n : t._wrapperState.initialValue,
                    checked: null != r ? r : t._wrapperState.initialChecked
                })
            },
            initWrapperState: function(t, e) {
                var n = e.defaultValue;
                t._wrapperState = {
                    initialChecked: null != e.checked ? e.checked : e.defaultChecked,
                    initialValue: null != e.value ? e.value : n,
                    controlled: "checkbox" === e.type || "radio" === e.type ? null != e.checked : null != e.value
                }
            },
            updateWrapper: function(t, e) {
                var n = e.checked;
                null != n && zn.setValueForProperty(t, "checked", n || !1), null != (n = e.value) ? 0 === n && "" === t.value ? t.value = "0" : "number" === e.type ? (n != (e = parseFloat(t.value) || 0) || n == e && t.value != n) && (t.value = "" + n) : t.value !== "" + n && (t.value = "" + n) : (null == e.value && null != e.defaultValue && t.defaultValue !== "" + e.defaultValue && (t.defaultValue = "" + e.defaultValue), null == e.checked && null != e.defaultChecked && (t.defaultChecked = !!e.defaultChecked))
            },
            postMountWrapper: function(t, e) {
                switch (e.type) {
                    case "submit":
                    case "reset":
                        break;
                    case "color":
                    case "date":
                    case "datetime":
                    case "datetime-local":
                    case "month":
                    case "time":
                    case "week":
                        t.value = "", t.value = t.defaultValue;
                        break;
                    default:
                        t.value = t.value
                }
                "" !== (e = t.name) && (t.name = ""), t.defaultChecked = !t.defaultChecked, t.defaultChecked = !t.defaultChecked, "" !== e && (t.name = e)
            },
            restoreControlledState: function(t, e) {
                Kn.updateWrapper(t, e);
                var n = e.name;
                if ("radio" === e.type && null != n) {
                    for (e = t; e.parentNode;) e = e.parentNode;
                    for (n = e.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), e = 0; e < n.length; e++) {
                        var i = n[e];
                        if (i !== t && i.form === t.form) {
                            var o = Ye.getFiberCurrentPropsFromNode(i);
                            o || r("90"), Kn.updateWrapper(i, o)
                        }
                    }
                }
            }
        },
        Yn = Kn,
        Gn = {
            validateProps: function() {},
            postMountWrapper: function(t, e) {
                null != e.value && t.setAttribute("value", e.value)
            },
            getHostProps: function(t, e) {
                return t = ye({
                    children: void 0
                }, e), (e = L(e.children)) && (t.children = e), t
            }
        },
        $n = {
            getHostProps: function(t, e) {
                return ye({}, e, {
                    value: void 0
                })
            },
            initWrapperState: function(t, e) {
                var n = e.value;
                t._wrapperState = {
                    initialValue: null != n ? n : e.defaultValue,
                    wasMultiple: !!e.multiple
                }
            },
            postMountWrapper: function(t, e) {
                t.multiple = !!e.multiple;
                var n = e.value;
                null != n ? U(t, !!e.multiple, n) : null != e.defaultValue && U(t, !!e.multiple, e.defaultValue)
            },
            postUpdateWrapper: function(t, e) {
                t._wrapperState.initialValue = void 0;
                var n = t._wrapperState.wasMultiple;
                t._wrapperState.wasMultiple = !!e.multiple;
                var r = e.value;
                null != r ? U(t, !!e.multiple, r) : n !== !!e.multiple && (null != e.defaultValue ? U(t, !!e.multiple, e.defaultValue) : U(t, !!e.multiple, e.multiple ? [] : ""))
            },
            restoreControlledState: function(t, e) {
                var n = e.value;
                null != n && U(t, !!e.multiple, n)
            }
        },
        Xn = {
            getHostProps: function(t, e) {
                return null != e.dangerouslySetInnerHTML && r("91"), ye({}, e, {
                    value: void 0,
                    defaultValue: void 0,
                    children: "" + t._wrapperState.initialValue
                })
            },
            initWrapperState: function(t, e) {
                var n = e.value,
                    i = n;
                null == n && (n = e.defaultValue, null != (e = e.children) && (null != n && r("92"), Array.isArray(e) && (1 >= e.length || r("93"), e = e[0]), n = "" + e), null == n && (n = ""), i = n), t._wrapperState = {
                    initialValue: "" + i
                }
            },
            updateWrapper: function(t, e) {
                var n = e.value;
                null != n && ((n = "" + n) !== t.value && (t.value = n), null == e.defaultValue && (t.defaultValue = n)), null != e.defaultValue && (t.defaultValue = e.defaultValue)
            },
            postMountWrapper: function(t) {
                var e = t.textContent;
                e === t._wrapperState.initialValue && (t.value = e)
            },
            restoreControlledState: function(t, e) {
                Xn.updateWrapper(t, e)
            }
        },
        Jn = Xn,
        Qn = ye({
            menuitem: !0
        }, {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0
        }),
        Zn = {
            _getTrackerFromNode: function(t) {
                return t._valueTracker
            },
            track: function(t) {
                t._valueTracker || (t._valueTracker = B(t))
            },
            updateValueIfChanged: function(t) {
                if (!t) return !1;
                var e = t._valueTracker;
                if (!e) return !0;
                var n = e.getValue(),
                    r = "";
                return t && (r = H(t) ? t.checked ? "true" : "false" : t.value), (t = r) !== n && (e.setValue(t), !0)
            },
            stopTracking: function(t) {
                (t = t._valueTracker) && t.stopTracking()
            }
        },
        tr = Oe.Namespaces,
        er = function(t) {
            return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, n, r, i) {
                MSApp.execUnsafeLocalFunction(function() {
                    return t(e, n)
                })
            } : t
        }(function(t, e) {
            if (t.namespaceURI !== tr.svg || "innerHTML" in t) t.innerHTML = e;
            else
                for (jn = jn || document.createElement("div"), jn.innerHTML = "<svg>" + e + "</svg>", e = jn.firstChild; e.firstChild;) t.appendChild(e.firstChild)
        }),
        nr = /["'&<>]/,
        rr = Le.TEXT_NODE;
    ve.canUseDOM && ("textContent" in document.documentElement || (q = function(t, e) {
        if (t.nodeType === rr) t.nodeValue = e;
        else {
            if ("boolean" == typeof e || "number" == typeof e) e = "" + e;
            else {
                e = "" + e;
                var n = nr.exec(e);
                if (n) {
                    var r, i = "",
                        o = 0;
                    for (r = n.index; r < e.length; r++) {
                        switch (e.charCodeAt(r)) {
                            case 34:
                                n = "&quot;";
                                break;
                            case 38:
                                n = "&amp;";
                                break;
                            case 39:
                                n = "&#x27;";
                                break;
                            case 60:
                                n = "&lt;";
                                break;
                            case 62:
                                n = "&gt;";
                                break;
                            default:
                                continue
                        }
                        o !== r && (i += e.substring(o, r)), o = r + 1, i += n
                    }
                    e = o !== r ? i + e.substring(o, r) : i
                }
            }
            er(t, e)
        }
    }));
    var ir = q,
        or = (Wn.getCurrentFiberOwnerName, Le.DOCUMENT_NODE),
        ar = Le.DOCUMENT_FRAGMENT_NODE,
        sr = xn.listenTo,
        ur = Ae.registrationNameModules,
        cr = Oe.Namespaces.html,
        lr = Oe.getIntrinsicNamespace,
        fr = {
            topAbort: "abort",
            topCanPlay: "canplay",
            topCanPlayThrough: "canplaythrough",
            topDurationChange: "durationchange",
            topEmptied: "emptied",
            topEncrypted: "encrypted",
            topEnded: "ended",
            topError: "error",
            topLoadedData: "loadeddata",
            topLoadedMetadata: "loadedmetadata",
            topLoadStart: "loadstart",
            topPause: "pause",
            topPlay: "play",
            topPlaying: "playing",
            topProgress: "progress",
            topRateChange: "ratechange",
            topSeeked: "seeked",
            topSeeking: "seeking",
            topStalled: "stalled",
            topSuspend: "suspend",
            topTimeUpdate: "timeupdate",
            topVolumeChange: "volumechange",
            topWaiting: "waiting"
        },
        hr = {
            createElement: function(t, e, n, r) {
                return n = n.nodeType === or ? n : n.ownerDocument, r === cr && (r = lr(t)), r === cr ? "script" === t ? (t = n.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild)) : t = "string" == typeof e.is ? n.createElement(t, {
                    is: e.is
                }) : n.createElement(t) : t = n.createElementNS(r, t), t
            },
            createTextNode: function(t, e) {
                return (e.nodeType === or ? e : e.ownerDocument).createTextNode(t)
            },
            setInitialProperties: function(t, e, n, r) {
                var i = z(e, n);
                switch (e) {
                    case "iframe":
                    case "object":
                        xn.trapBubbledEvent("topLoad", "load", t);
                        var o = n;
                        break;
                    case "video":
                    case "audio":
                        for (o in fr) fr.hasOwnProperty(o) && xn.trapBubbledEvent(o, fr[o], t);
                        o = n;
                        break;
                    case "source":
                        xn.trapBubbledEvent("topError", "error", t), o = n;
                        break;
                    case "img":
                    case "image":
                        xn.trapBubbledEvent("topError", "error", t), xn.trapBubbledEvent("topLoad", "load", t), o = n;
                        break;
                    case "form":
                        xn.trapBubbledEvent("topReset", "reset", t), xn.trapBubbledEvent("topSubmit", "submit", t), o = n;
                        break;
                    case "details":
                        xn.trapBubbledEvent("topToggle", "toggle", t), o = n;
                        break;
                    case "input":
                        Yn.initWrapperState(t, n), o = Yn.getHostProps(t, n), xn.trapBubbledEvent("topInvalid", "invalid", t), V(r, "onChange");
                        break;
                    case "option":
                        Gn.validateProps(t, n), o = Gn.getHostProps(t, n);
                        break;
                    case "select":
                        $n.initWrapperState(t, n), o = $n.getHostProps(t, n), xn.trapBubbledEvent("topInvalid", "invalid", t), V(r, "onChange");
                        break;
                    case "textarea":
                        Jn.initWrapperState(t, n), o = Jn.getHostProps(t, n), xn.trapBubbledEvent("topInvalid", "invalid", t), V(r, "onChange");
                        break;
                    default:
                        o = n
                }
                F(e, o);
                var a, s = o;
                for (a in s)
                    if (s.hasOwnProperty(a)) {
                        var u = s[a];
                        "style" === a ? Ln.setValueForStyles(t, u) : "dangerouslySetInnerHTML" === a ? null != (u = u ? u.__html : void 0) && er(t, u) : "children" === a ? "string" == typeof u ? ir(t, u) : "number" == typeof u && ir(t, "" + u) : "suppressContentEditableWarning" !== a && (ur.hasOwnProperty(a) ? null != u && V(r, a) : i ? zn.setValueForAttribute(t, a, u) : null != u && zn.setValueForProperty(t, a, u))
                    }
                switch (e) {
                    case "input":
                        Zn.track(t), Yn.postMountWrapper(t, n);
                        break;
                    case "textarea":
                        Zn.track(t), Jn.postMountWrapper(t, n);
                        break;
                    case "option":
                        Gn.postMountWrapper(t, n);
                        break;
                    case "select":
                        $n.postMountWrapper(t, n);
                        break;
                    default:
                        "function" == typeof o.onClick && (t.onclick = be)
                }
            },
            diffProperties: function(t, e, n, r, i) {
                var o = null;
                switch (e) {
                    case "input":
                        n = Yn.getHostProps(t, n), r = Yn.getHostProps(t, r), o = [];
                        break;
                    case "option":
                        n = Gn.getHostProps(t, n), r = Gn.getHostProps(t, r), o = [];
                        break;
                    case "select":
                        n = $n.getHostProps(t, n), r = $n.getHostProps(t, r), o = [];
                        break;
                    case "textarea":
                        n = Jn.getHostProps(t, n), r = Jn.getHostProps(t, r), o = [];
                        break;
                    default:
                        "function" != typeof n.onClick && "function" == typeof r.onClick && (t.onclick = be)
                }
                F(e, r);
                var a, s;
                t = null;
                for (a in n)
                    if (!r.hasOwnProperty(a) && n.hasOwnProperty(a) && null != n[a])
                        if ("style" === a)
                            for (s in e = n[a]) e.hasOwnProperty(s) && (t || (t = {}), t[s] = "");
                        else "dangerouslySetInnerHTML" !== a && "children" !== a && "suppressContentEditableWarning" !== a && (ur.hasOwnProperty(a) ? o || (o = []) : (o = o || []).push(a, null));
                for (a in r) {
                    var u = r[a];
                    if (e = null != n ? n[a] : void 0, r.hasOwnProperty(a) && u !== e && (null != u || null != e))
                        if ("style" === a)
                            if (e) {
                                for (s in e) !e.hasOwnProperty(s) || u && u.hasOwnProperty(s) || (t || (t = {}), t[s] = "");
                                for (s in u) u.hasOwnProperty(s) && e[s] !== u[s] && (t || (t = {}), t[s] = u[s])
                            } else t || (o || (o = []), o.push(a, t)), t = u;
                    else "dangerouslySetInnerHTML" === a ? (u = u ? u.__html : void 0, e = e ? e.__html : void 0, null != u && e !== u && (o = o || []).push(a, "" + u)) : "children" === a ? e === u || "string" != typeof u && "number" != typeof u || (o = o || []).push(a, "" + u) : "suppressContentEditableWarning" !== a && (ur.hasOwnProperty(a) ? (null != u && V(i, a), o || e === u || (o = [])) : (o = o || []).push(a, u))
                }
                return t && (o = o || []).push("style", t), o
            },
            updateProperties: function(t, e, n, r, i) {
                z(n, r), r = z(n, i);
                for (var o = 0; o < e.length; o += 2) {
                    var a = e[o],
                        s = e[o + 1];
                    "style" === a ? Ln.setValueForStyles(t, s) : "dangerouslySetInnerHTML" === a ? er(t, s) : "children" === a ? ir(t, s) : r ? null != s ? zn.setValueForAttribute(t, a, s) : zn.deleteValueForAttribute(t, a) : null != s ? zn.setValueForProperty(t, a, s) : zn.deleteValueForProperty(t, a)
                }
                switch (n) {
                    case "input":
                        Yn.updateWrapper(t, i), Zn.updateValueIfChanged(t);
                        break;
                    case "textarea":
                        Jn.updateWrapper(t, i);
                        break;
                    case "select":
                        $n.postUpdateWrapper(t, i)
                }
            },
            diffHydratedProperties: function(t, e, n, r, i) {
                switch (e) {
                    case "iframe":
                    case "object":
                        xn.trapBubbledEvent("topLoad", "load", t);
                        break;
                    case "video":
                    case "audio":
                        for (var o in fr) fr.hasOwnProperty(o) && xn.trapBubbledEvent(o, fr[o], t);
                        break;
                    case "source":
                        xn.trapBubbledEvent("topError", "error", t);
                        break;
                    case "img":
                    case "image":
                        xn.trapBubbledEvent("topError", "error", t), xn.trapBubbledEvent("topLoad", "load", t);
                        break;
                    case "form":
                        xn.trapBubbledEvent("topReset", "reset", t), xn.trapBubbledEvent("topSubmit", "submit", t);
                        break;
                    case "details":
                        xn.trapBubbledEvent("topToggle", "toggle", t);
                        break;
                    case "input":
                        Yn.initWrapperState(t, n), xn.trapBubbledEvent("topInvalid", "invalid", t), V(i, "onChange");
                        break;
                    case "option":
                        Gn.validateProps(t, n);
                        break;
                    case "select":
                        $n.initWrapperState(t, n), xn.trapBubbledEvent("topInvalid", "invalid", t), V(i, "onChange");
                        break;
                    case "textarea":
                        Jn.initWrapperState(t, n), xn.trapBubbledEvent("topInvalid", "invalid", t), V(i, "onChange")
                }
                F(e, n), r = null;
                for (var a in n) n.hasOwnProperty(a) && (o = n[a], "children" === a ? "string" == typeof o ? t.textContent !== o && (r = ["children", o]) : "number" == typeof o && t.textContent !== "" + o && (r = ["children", "" + o]) : ur.hasOwnProperty(a) && null != o && V(i, a));
                switch (e) {
                    case "input":
                        Zn.track(t), Yn.postMountWrapper(t, n);
                        break;
                    case "textarea":
                        Zn.track(t), Jn.postMountWrapper(t, n);
                        break;
                    case "select":
                    case "option":
                        break;
                    default:
                        "function" == typeof n.onClick && (t.onclick = be)
                }
                return r
            },
            diffHydratedText: function(t, e) {
                return t.nodeValue !== e
            },
            warnForDeletedHydratableElement: function() {},
            warnForDeletedHydratableText: function() {},
            warnForInsertedHydratedElement: function() {},
            warnForInsertedHydratedText: function() {},
            restoreControlledState: function(t, e, n) {
                switch (e) {
                    case "input":
                        Yn.restoreControlledState(t, n);
                        break;
                    case "textarea":
                        Jn.restoreControlledState(t, n);
                        break;
                    case "select":
                        $n.restoreControlledState(t, n)
                }
            }
        },
        pr = void 0;
    if (ve.canUseDOM)
        if ("function" != typeof requestIdleCallback) {
            var dr = null,
                mr = null,
                vr = !1,
                yr = !1,
                gr = 0,
                br = 33,
                wr = 33,
                _r = {
                    timeRemaining: "object" == typeof performance && "function" == typeof performance.now ? function() {
                        return gr - performance.now()
                    } : function() {
                        return gr - Date.now()
                    }
                },
                Er = "__reactIdleCallback$" + Math.random().toString(36).slice(2);
            window.addEventListener("message", function(t) {
                t.source === window && t.data === Er && (vr = !1, t = mr, mr = null, null !== t && t(_r))
            }, !1);
            var Tr = function(t) {
                yr = !1;
                var e = t - gr + wr;
                e < wr && br < wr ? (8 > e && (e = 8), wr = e < br ? br : e) : br = e, gr = t + wr, vr || (vr = !0, window.postMessage(Er, "*")), e = dr, dr = null, null !== e && e(t)
            };
            pr = function(t) {
                return mr = t, yr || (yr = !0, requestAnimationFrame(Tr)), 0
            }
        } else pr = requestIdleCallback;
    else pr = function(t) {
        return setTimeout(function() {
            t({
                timeRemaining: function() {
                    return 1 / 0
                }
            })
        }), 0
    };
    var Sr, Pr, Cr = {
            rIC: pr
        },
        Or = {
            enableAsyncSubtreeAPI: !0
        },
        kr = {
            NoWork: 0,
            SynchronousPriority: 1,
            TaskPriority: 2,
            HighPriority: 3,
            LowPriority: 4,
            OffscreenPriority: 5
        },
        xr = Xe.Callback,
        Ir = kr.NoWork,
        Ar = kr.SynchronousPriority,
        Nr = kr.TaskPriority,
        Mr = je.ClassComponent,
        Rr = je.HostRoot,
        Dr = void 0,
        jr = void 0,
        Lr = {
            addUpdate: function(t, e, n, r) {
                $(t, {
                    priorityLevel: r,
                    partialState: e,
                    callback: n,
                    isReplace: !1,
                    isForced: !1,
                    isTopLevelUnmount: !1,
                    next: null
                })
            },
            addReplaceUpdate: function(t, e, n, r) {
                $(t, {
                    priorityLevel: r,
                    partialState: e,
                    callback: n,
                    isReplace: !0,
                    isForced: !1,
                    isTopLevelUnmount: !1,
                    next: null
                })
            },
            addForceUpdate: function(t, e, n) {
                $(t, {
                    priorityLevel: n,
                    partialState: null,
                    callback: e,
                    isReplace: !1,
                    isForced: !0,
                    isTopLevelUnmount: !1,
                    next: null
                })
            },
            getUpdatePriority: function(t) {
                var e = t.updateQueue;
                return null === e || t.tag !== Mr && t.tag !== Rr ? Ir : null !== e.first ? e.first.priorityLevel : Ir
            },
            addTopLevelUpdate: function(t, e, n, r) {
                var i = null === e.element;
                t = $(t, e = {
                    priorityLevel: r,
                    partialState: e,
                    callback: n,
                    isReplace: !1,
                    isForced: !1,
                    isTopLevelUnmount: i,
                    next: null
                }), i && (i = Dr, n = jr, null !== i && null !== e.next && (e.next = null, i.last = e), null !== n && null !== t && null !== t.next && (t.next = null, n.last = e))
            },
            beginUpdateQueue: function(t, e, n, r, i, o, a) {
                null !== t && t.updateQueue === n && (n = e.updateQueue = {
                    first: n.first,
                    last: n.last,
                    callbackList: null,
                    hasForceUpdate: !1
                }), t = n.callbackList;
                for (var s = n.hasForceUpdate, u = !0, c = n.first; null !== c && 0 >= W(c.priorityLevel, a);) {
                    n.first = c.next, null === n.first && (n.last = null);
                    var l;
                    c.isReplace ? (i = X(c, r, i, o), u = !0) : (l = X(c, r, i, o)) && (i = u ? ye({}, i, l) : ye(i, l), u = !1), c.isForced && (s = !0), null === c.callback || c.isTopLevelUnmount && null !== c.next || ((t = null !== t ? t : []).push(c.callback), e.effectTag |= xr), c = c.next
                }
                return n.callbackList = t, n.hasForceUpdate = s, null !== n.first || null !== t || s || (e.updateQueue = null), i
            },
            commitCallbacks: function(t, e, n) {
                if (null !== (t = e.callbackList))
                    for (e.callbackList = null, e = 0; e < t.length; e++) {
                        var i = t[e];
                        "function" != typeof i && r("191", i), i.call(n)
                    }
            }
        },
        Ur = [],
        Fr = -1,
        Hr = {
            createCursor: function(t) {
                return {
                    current: t
                }
            },
            isEmpty: function() {
                return -1 === Fr
            },
            pop: function(t) {
                0 > Fr || (t.current = Ur[Fr], Ur[Fr] = null, Fr--)
            },
            push: function(t, e) {
                Ur[++Fr] = t.current, t.current = e
            },
            reset: function() {
                for (; - 1 < Fr;) Ur[Fr] = null, Fr--
            }
        },
        Br = rn.isFiberMounted,
        zr = je.ClassComponent,
        qr = je.HostRoot,
        Vr = Hr.createCursor,
        Wr = Hr.pop,
        Kr = Hr.push,
        Yr = Vr(we),
        Gr = Vr(!1),
        $r = we,
        Xr = {
            getUnmaskedContext: function(t) {
                return Q(t) ? $r : Yr.current
            },
            cacheContext: J,
            getMaskedContext: function(t, e) {
                var n = t.type.contextTypes;
                if (!n) return we;
                var r = t.stateNode;
                if (r && r.__reactInternalMemoizedUnmaskedChildContext === e) return r.__reactInternalMemoizedMaskedChildContext;
                var i, o = {};
                for (i in n) o[i] = e[i];
                return r && J(t, e, o), o
            },
            hasContextChanged: function() {
                return Gr.current
            },
            isContextConsumer: function(t) {
                return t.tag === zr && null != t.type.contextTypes
            },
            isContextProvider: Q,
            popContextProvider: function(t) {
                Q(t) && (Wr(Gr, t), Wr(Yr, t))
            },
            popTopLevelContextObject: function(t) {
                Wr(Gr, t), Wr(Yr, t)
            },
            pushTopLevelContextObject: function(t, e, n) {
                null != Yr.cursor && r("168"), Kr(Yr, e, t), Kr(Gr, n, t)
            },
            processChildContext: Z,
            pushContextProvider: function(t) {
                if (!Q(t)) return !1;
                var e = t.stateNode;
                return e = e && e.__reactInternalMemoizedMergedChildContext || we, $r = Yr.current, Kr(Yr, e, t), Kr(Gr, Gr.current, t), !0
            },
            invalidateContextProvider: function(t, e) {
                var n = t.stateNode;
                if (n || r("169"), e) {
                    var i = Z(t, $r);
                    n.__reactInternalMemoizedMergedChildContext = i, Wr(Gr, t), Wr(Yr, t), Kr(Yr, i, t)
                } else Wr(Gr, t);
                Kr(Gr, e, t)
            },
            resetContext: function() {
                $r = we, Yr.current = we, Gr.current = !1
            },
            findCurrentUnmaskedContext: function(t) {
                for (Br(t) && t.tag === zr ? void 0 : r("170"); t.tag !== qr;) {
                    if (Q(t)) return t.stateNode.__reactInternalMemoizedMergedChildContext;
                    (t = t.return) || r("171")
                }
                return t.stateNode.context
            }
        },
        Jr = {
            NoContext: 0,
            AsyncUpdates: 1
        },
        Qr = je.IndeterminateComponent,
        Zr = je.ClassComponent,
        ti = je.HostRoot,
        ei = je.HostComponent,
        ni = je.HostText,
        ri = je.HostPortal,
        ii = je.CoroutineComponent,
        oi = je.YieldComponent,
        ai = je.Fragment,
        si = kr.NoWork,
        ui = Jr.NoContext,
        ci = Xe.NoEffect,
        li = {
            createWorkInProgress: function(t, e) {
                var n = t.alternate;
                return null === n ? (n = new tt(t.tag, t.key, t.internalContextTag), n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.effectTag = ci, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null), n.pendingWorkPriority = e, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n
            },
            createHostRootFiber: function() {
                return new tt(ti, null, ui)
            },
            createFiberFromElement: function(t, e, n) {
                return e = et(t.type, t.key, e), e.pendingProps = t.props, e.pendingWorkPriority = n, e
            },
            createFiberFromFragment: function(t, e, n) {
                return e = new tt(ai, null, e), e.pendingProps = t, e.pendingWorkPriority = n, e
            },
            createFiberFromText: function(t, e, n) {
                return e = new tt(ni, null, e), e.pendingProps = t, e.pendingWorkPriority = n, e
            },
            createFiberFromElementType: et,
            createFiberFromHostInstanceForDeletion: function() {
                var t = new tt(ei, null, ui);
                return t.type = "DELETED", t
            },
            createFiberFromCoroutine: function(t, e, n) {
                return e = new tt(ii, t.key, e), e.type = t.handler, e.pendingProps = t, e.pendingWorkPriority = n, e
            },
            createFiberFromYield: function(t, e) {
                return new tt(oi, null, e)
            },
            createFiberFromPortal: function(t, e, n) {
                return e = new tt(ri, t.key, e), e.pendingProps = t.children || [], e.pendingWorkPriority = n, e.stateNode = {
                    containerInfo: t.containerInfo,
                    implementation: t.implementation
                }, e
            },
            largerPriority: function(t, e) {
                return t !== si && (e === si || e > t) ? t : e
            }
        },
        fi = li.createHostRootFiber,
        hi = je.IndeterminateComponent,
        pi = je.FunctionalComponent,
        di = je.ClassComponent,
        mi = je.HostComponent;
    "function" == typeof Symbol && Symbol.for ? (Sr = Symbol.for("react.coroutine"), Pr = Symbol.for("react.yield")) : (Sr = 60104, Pr = 60105);
    var vi = {
            createCoroutine: function(t, e, n) {
                var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                return {
                    $$typeof: Sr,
                    key: null == r ? null : "" + r,
                    children: t,
                    handler: e,
                    props: n
                }
            },
            createYield: function(t) {
                return {
                    $$typeof: Pr,
                    value: t
                }
            },
            isCoroutine: function(t) {
                return "object" == typeof t && null !== t && t.$$typeof === Sr
            },
            isYield: function(t) {
                return "object" == typeof t && null !== t && t.$$typeof === Pr
            },
            REACT_YIELD_TYPE: Pr,
            REACT_COROUTINE_TYPE: Sr
        },
        yi = "function" == typeof Symbol && Symbol.for && Symbol.for("react.portal") || 60106,
        gi = {
            createPortal: function(t, e, n) {
                var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                return {
                    $$typeof: yi,
                    key: null == r ? null : "" + r,
                    children: t,
                    containerInfo: e,
                    implementation: n
                }
            },
            isPortal: function(t) {
                return "object" == typeof t && null !== t && t.$$typeof === yi
            },
            REACT_PORTAL_TYPE: yi
        },
        bi = vi.REACT_COROUTINE_TYPE,
        wi = vi.REACT_YIELD_TYPE,
        _i = gi.REACT_PORTAL_TYPE,
        Ei = li.createWorkInProgress,
        Ti = li.createFiberFromElement,
        Si = li.createFiberFromFragment,
        Pi = li.createFiberFromText,
        Ci = li.createFiberFromCoroutine,
        Oi = li.createFiberFromYield,
        ki = li.createFiberFromPortal,
        xi = Array.isArray,
        Ii = je.FunctionalComponent,
        Ai = je.ClassComponent,
        Ni = je.HostText,
        Mi = je.HostPortal,
        Ri = je.CoroutineComponent,
        Di = je.YieldComponent,
        ji = je.Fragment,
        Li = Xe.NoEffect,
        Ui = Xe.Placement,
        Fi = Xe.Deletion,
        Hi = "function" == typeof Symbol && Symbol.iterator,
        Bi = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
        zi = {
            reconcileChildFibers: ot(!0, !0),
            reconcileChildFibersInPlace: ot(!1, !0),
            mountChildFibersInPlace: ot(!1, !1),
            cloneChildFibers: function(t, e) {
                if (null !== t && e.child !== t.child && r("153"), null !== e.child) {
                    t = e.child;
                    var n = Ei(t, t.pendingWorkPriority);
                    for (n.pendingProps = t.pendingProps, e.child = n, n.return = e; null !== t.sibling;) t = t.sibling, n = n.sibling = Ei(t, t.pendingWorkPriority), n.pendingProps = t.pendingProps, n.return = e;
                    n.sibling = null
                }
            }
        },
        qi = Xe.Update,
        Vi = Jr.AsyncUpdates,
        Wi = Xr.cacheContext,
        Ki = Xr.getMaskedContext,
        Yi = Xr.getUnmaskedContext,
        Gi = Xr.isContextConsumer,
        $i = Lr.addUpdate,
        Xi = Lr.addReplaceUpdate,
        Ji = Lr.addForceUpdate,
        Qi = Lr.beginUpdateQueue,
        Zi = Xr.hasContextChanged,
        to = rn.isMounted,
        eo = zi.mountChildFibersInPlace,
        no = zi.reconcileChildFibers,
        ro = zi.reconcileChildFibersInPlace,
        io = zi.cloneChildFibers,
        oo = Lr.beginUpdateQueue,
        ao = Xr.getMaskedContext,
        so = Xr.getUnmaskedContext,
        uo = Xr.hasContextChanged,
        co = Xr.pushContextProvider,
        lo = Xr.pushTopLevelContextObject,
        fo = Xr.invalidateContextProvider,
        ho = je.IndeterminateComponent,
        po = je.FunctionalComponent,
        mo = je.ClassComponent,
        vo = je.HostRoot,
        yo = je.HostComponent,
        go = je.HostText,
        bo = je.HostPortal,
        wo = je.CoroutineComponent,
        _o = je.CoroutineHandlerPhase,
        Eo = je.YieldComponent,
        To = je.Fragment,
        So = kr.NoWork,
        Po = kr.OffscreenPriority,
        Co = Xe.PerformedWork,
        Oo = Xe.Placement,
        ko = Xe.ContentReset,
        xo = Xe.Err,
        Io = Xe.Ref,
        Ao = $e.ReactCurrentOwner,
        No = zi.reconcileChildFibers,
        Mo = Xr.popContextProvider,
        Ro = Xr.popTopLevelContextObject,
        Do = je.IndeterminateComponent,
        jo = je.FunctionalComponent,
        Lo = je.ClassComponent,
        Uo = je.HostRoot,
        Fo = je.HostComponent,
        Ho = je.HostText,
        Bo = je.HostPortal,
        zo = je.CoroutineComponent,
        qo = je.CoroutineHandlerPhase,
        Vo = je.YieldComponent,
        Wo = je.Fragment,
        Ko = Xe.Placement,
        Yo = Xe.Ref,
        Go = Xe.Update,
        $o = kr.OffscreenPriority,
        Xo = null,
        Jo = null,
        Qo = {
            injectInternals: function(t) {
                if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
                var e = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                if (!e.supportsFiber) return !0;
                try {
                    var n = e.inject(t);
                    Xo = ct(function(t) {
                        return e.onCommitFiberRoot(n, t)
                    }), Jo = ct(function(t) {
                        return e.onCommitFiberUnmount(n, t)
                    })
                } catch (t) {}
                return !0
            },
            onCommitRoot: function(t) {
                "function" == typeof Xo && Xo(t)
            },
            onCommitUnmount: function(t) {
                "function" == typeof Jo && Jo(t)
            }
        },
        Zo = je.ClassComponent,
        ta = je.HostRoot,
        ea = je.HostComponent,
        na = je.HostText,
        ra = je.HostPortal,
        ia = je.CoroutineComponent,
        oa = Lr.commitCallbacks,
        aa = Qo.onCommitUnmount,
        sa = Xe.Placement,
        ua = Xe.Update,
        ca = Xe.Callback,
        la = Xe.ContentReset,
        fa = Hr.createCursor,
        ha = Hr.pop,
        pa = Hr.push,
        da = {},
        ma = je.HostComponent,
        va = je.HostText,
        ya = je.HostRoot,
        ga = Xe.Deletion,
        ba = Xe.Placement,
        wa = li.createFiberFromHostInstanceForDeletion,
        _a = Xr.popContextProvider,
        Ea = Hr.reset,
        Ta = $e.ReactCurrentOwner,
        Sa = li.createWorkInProgress,
        Pa = li.largerPriority,
        Ca = Qo.onCommitRoot,
        Oa = kr.NoWork,
        ka = kr.SynchronousPriority,
        xa = kr.TaskPriority,
        Ia = kr.HighPriority,
        Aa = kr.LowPriority,
        Na = kr.OffscreenPriority,
        Ma = Jr.AsyncUpdates,
        Ra = Xe.PerformedWork,
        Da = Xe.Placement,
        ja = Xe.Update,
        La = Xe.PlacementAndUpdate,
        Ua = Xe.Deletion,
        Fa = Xe.ContentReset,
        Ha = Xe.Callback,
        Ba = Xe.Err,
        za = Xe.Ref,
        qa = je.HostRoot,
        Va = je.HostComponent,
        Wa = je.HostPortal,
        Ka = je.ClassComponent,
        Ya = Lr.getUpdatePriority,
        Ga = Xr.resetContext;
    mt._injectFiber = function(t) {
        dt = t
    };
    var $a = Lr.addTopLevelUpdate,
        Xa = Xr.findCurrentUnmaskedContext,
        Ja = Xr.isContextProvider,
        Qa = Xr.processChildContext,
        Za = je.HostComponent,
        ts = rn.findCurrentHostFiber,
        es = rn.findCurrentHostFiberWithNoPortals;
    mt._injectFiber(function(t) {
        var e = Xa(t);
        return Ja(t) ? Qa(t, e, !1) : e
    });
    var ns = Le.TEXT_NODE,
        rs = null,
        is = {
            getOffsets: function(t) {
                var e = window.getSelection && window.getSelection();
                if (!e || 0 === e.rangeCount) return null;
                var n = e.anchorNode,
                    r = e.anchorOffset,
                    i = e.focusNode,
                    o = e.focusOffset,
                    a = e.getRangeAt(0);
                try {
                    a.startContainer.nodeType, a.endContainer.nodeType
                } catch (t) {
                    return null
                }
                e = e.anchorNode === e.focusNode && e.anchorOffset === e.focusOffset ? 0 : a.toString().length;
                var s = a.cloneRange();
                return s.selectNodeContents(t), s.setEnd(a.startContainer, a.startOffset), t = s.startContainer === s.endContainer && s.startOffset === s.endOffset ? 0 : s.toString().length, a = t + e, (e = document.createRange()).setStart(n, r), e.setEnd(i, o), n = e.collapsed, {
                    start: n ? a : t,
                    end: n ? t : a
                }
            },
            setOffsets: function(t, e) {
                if (window.getSelection) {
                    var n = window.getSelection(),
                        r = t[gt()].length,
                        i = Math.min(e.start, r);
                    if (e = void 0 === e.end ? i : Math.min(e.end, r), !n.extend && i > e && (r = e, e = i, i = r), r = yt(t, i), t = yt(t, e), r && t) {
                        var o = document.createRange();
                        o.setStart(r.node, r.offset), n.removeAllRanges(), i > e ? (n.addRange(o), n.extend(t.node, t.offset)) : (o.setEnd(t.node, t.offset), n.addRange(o))
                    }
                }
            }
        },
        os = Le.ELEMENT_NODE,
        as = {
            hasSelectionCapabilities: function(t) {
                var e = t && t.nodeName && t.nodeName.toLowerCase();
                return e && ("input" === e && "text" === t.type || "textarea" === e || "true" === t.contentEditable)
            },
            getSelectionInformation: function() {
                var t = Se();
                return {
                    focusedElem: t,
                    selectionRange: as.hasSelectionCapabilities(t) ? as.getSelection(t) : null
                }
            },
            restoreSelection: function(t) {
                var e = Se(),
                    n = t.focusedElem;
                if (t = t.selectionRange, e !== n && Ee(document.documentElement, n)) {
                    for (as.hasSelectionCapabilities(n) && as.setSelection(n, t), e = [], t = n; t = t.parentNode;) t.nodeType === os && e.push({
                        element: t,
                        left: t.scrollLeft,
                        top: t.scrollTop
                    });
                    for (Te(n), n = 0; n < e.length; n++) t = e[n], t.element.scrollLeft = t.left, t.element.scrollTop = t.top
                }
            },
            getSelection: function(t) {
                return ("selectionStart" in t ? {
                    start: t.selectionStart,
                    end: t.selectionEnd
                } : is.getOffsets(t)) || {
                    start: 0,
                    end: 0
                }
            },
            setSelection: function(t, e) {
                var n = e.start,
                    r = e.end;
                void 0 === r && (r = n), "selectionStart" in t ? (t.selectionStart = n, t.selectionEnd = Math.min(r, t.value.length)) : is.setOffsets(t, e)
            }
        },
        ss = as,
        us = Le.ELEMENT_NODE;
    _t._injectFiber = function(t) {
        bt = t
    }, _t._injectStack = function(t) {
        wt = t
    };
    var cs = je.HostComponent,
        ls = {
            isAncestor: function(t, e) {
                for (; e;) {
                    if (t === e || t === e.alternate) return !0;
                    e = Et(e)
                }
                return !1
            },
            getLowestCommonAncestor: Tt,
            getParentInstance: function(t) {
                return Et(t)
            },
            traverseTwoPhase: function(t, e, n) {
                for (var r = []; t;) r.push(t), t = Et(t);
                for (t = r.length; 0 < t--;) e(r[t], "captured", n);
                for (t = 0; t < r.length; t++) e(r[t], "bubbled", n)
            },
            traverseEnterLeave: function(t, e, n, r, i) {
                for (var o = t && e ? Tt(t, e) : null, a = []; t && t !== o;) a.push(t), t = Et(t);
                for (t = []; e && e !== o;) t.push(e), e = Et(e);
                for (e = 0; e < a.length; e++) n(a[e], "bubbled", r);
                for (e = t.length; 0 < e--;) n(t[e], "captured", i)
            }
        },
        fs = _n.getListener,
        hs = {
            accumulateTwoPhaseDispatches: function(t) {
                C(t, Pt)
            },
            accumulateTwoPhaseDispatchesSkipTarget: function(t) {
                C(t, Ct)
            },
            accumulateDirectDispatches: function(t) {
                C(t, kt)
            },
            accumulateEnterLeaveDispatches: function(t, e, n, r) {
                ls.traverseEnterLeave(n, r, Ot, t, e)
            }
        },
        ps = {
            _root: null,
            _startText: null,
            _fallbackText: null
        },
        ds = {
            initialize: function(t) {
                return ps._root = t, ps._startText = ds.getText(), !0
            },
            reset: function() {
                ps._root = null, ps._startText = null, ps._fallbackText = null
            },
            getData: function() {
                if (ps._fallbackText) return ps._fallbackText;
                var t, e, n = ps._startText,
                    r = n.length,
                    i = ds.getText(),
                    o = i.length;
                for (t = 0; t < r && n[t] === i[t]; t++);
                var a = r - t;
                for (e = 1; e <= a && n[r - e] === i[o - e]; e++);
                return ps._fallbackText = i.slice(t, 1 < e ? 1 - e : void 0), ps._fallbackText
            },
            getText: function() {
                return "value" in ps._root ? ps._root.value : ps._root[gt()]
            }
        },
        ms = ds,
        vs = "dispatchConfig _targetInst nativeEvent isDefaultPrevented isPropagationStopped _dispatchListeners _dispatchInstances".split(" "),
        ys = {
            type: null,
            target: null,
            currentTarget: be.thatReturnsNull,
            eventPhase: null,
            bubbles: null,
            cancelable: null,
            timeStamp: function(t) {
                return t.timeStamp || Date.now()
            },
            defaultPrevented: null,
            isTrusted: null
        };
    ye(xt.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var t = this.nativeEvent;
            t && (t.preventDefault ? t.preventDefault() : "unknown" != typeof t.returnValue && (t.returnValue = !1), this.isDefaultPrevented = be.thatReturnsTrue)
        },
        stopPropagation: function() {
            var t = this.nativeEvent;
            t && (t.stopPropagation ? t.stopPropagation() : "unknown" != typeof t.cancelBubble && (t.cancelBubble = !0), this.isPropagationStopped = be.thatReturnsTrue)
        },
        persist: function() {
            this.isPersistent = be.thatReturnsTrue
        },
        isPersistent: be.thatReturnsFalse,
        destructor: function() {
            var t, e = this.constructor.Interface;
            for (t in e) this[t] = null;
            for (e = 0; e < vs.length; e++) this[vs[e]] = null
        }
    }), xt.Interface = ys, xt.augmentClass = function(t, e) {
        function n() {}
        n.prototype = this.prototype;
        var r = new n;
        ye(r, t.prototype), t.prototype = r, t.prototype.constructor = t, t.Interface = ye({}, this.Interface, e), t.augmentClass = this.augmentClass, Nt(t)
    }, Nt(xt), xt.augmentClass(Mt, {
        data: null
    }), xt.augmentClass(Rt, {
        data: null
    });
    var gs = [9, 13, 27, 32],
        bs = ve.canUseDOM && "CompositionEvent" in window,
        ws = null;
    ve.canUseDOM && "documentMode" in document && (ws = document.documentMode);
    var _s;
    if (_s = ve.canUseDOM && "TextEvent" in window && !ws) {
        var Es = window.opera;
        _s = !("object" == typeof Es && "function" == typeof Es.version && 12 >= parseInt(Es.version(), 10))
    }
    var Ts = _s,
        Ss = ve.canUseDOM && (!bs || ws && 8 < ws && 11 >= ws),
        Ps = String.fromCharCode(32),
        Cs = {
            beforeInput: {
                phasedRegistrationNames: {
                    bubbled: "onBeforeInput",
                    captured: "onBeforeInputCapture"
                },
                dependencies: ["topCompositionEnd", "topKeyPress", "topTextInput", "topPaste"]
            },
            compositionEnd: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionEnd",
                    captured: "onCompositionEndCapture"
                },
                dependencies: "topBlur topCompositionEnd topKeyDown topKeyPress topKeyUp topMouseDown".split(" ")
            },
            compositionStart: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionStart",
                    captured: "onCompositionStartCapture"
                },
                dependencies: "topBlur topCompositionStart topKeyDown topKeyPress topKeyUp topMouseDown".split(" ")
            },
            compositionUpdate: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionUpdate",
                    captured: "onCompositionUpdateCapture"
                },
                dependencies: "topBlur topCompositionUpdate topKeyDown topKeyPress topKeyUp topMouseDown".split(" ")
            }
        },
        Os = !1,
        ks = !1,
        xs = {
            eventTypes: Cs,
            extractEvents: function(t, e, n, r) {
                var i;
                if (bs) t: {
                    switch (t) {
                        case "topCompositionStart":
                            var o = Cs.compositionStart;
                            break t;
                        case "topCompositionEnd":
                            o = Cs.compositionEnd;
                            break t;
                        case "topCompositionUpdate":
                            o = Cs.compositionUpdate;
                            break t
                    }
                    o = void 0
                }
                else ks ? Dt(t, n) && (o = Cs.compositionEnd) : "topKeyDown" === t && 229 === n.keyCode && (o = Cs.compositionStart);
                return o ? (Ss && (ks || o !== Cs.compositionStart ? o === Cs.compositionEnd && ks && (i = ms.getData()) : ks = ms.initialize(r)), o = Mt.getPooled(o, e, n, r), i ? o.data = i : null !== (i = jt(n)) && (o.data = i), hs.accumulateTwoPhaseDispatches(o), i = o) : i = null, (t = Ts ? Lt(t, n) : Ut(t, n)) ? (e = Rt.getPooled(Cs.beforeInput, e, n, r), e.data = t, hs.accumulateTwoPhaseDispatches(e)) : e = null, [i, e]
            }
        },
        Is = {
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0
        },
        As = {
            change: {
                phasedRegistrationNames: {
                    bubbled: "onChange",
                    captured: "onChangeCapture"
                },
                dependencies: "topBlur topChange topClick topFocus topInput topKeyDown topKeyUp topSelectionChange".split(" ")
            }
        },
        Ns = null,
        Ms = null,
        Rs = !1;
    ve.canUseDOM && (Rs = A("input") && (!document.documentMode || 9 < document.documentMode));
    var Ds = {
        eventTypes: As,
        _isInputEventSupported: Rs,
        extractEvents: function(t, e, n, r) {
            var i = e ? Ye.getNodeFromInstance(e) : window,
                o = i.nodeName && i.nodeName.toLowerCase();
            if ("select" === o || "input" === o && "file" === i.type) var a = qt;
            else if (Ft(i))
                if (Rs) a = $t;
                else {
                    a = Yt;
                    var s = Kt
                }
            else !(o = i.nodeName) || "input" !== o.toLowerCase() || "checkbox" !== i.type && "radio" !== i.type || (a = Gt);
            if (a && (a = a(t, e))) return Ht(a, n, r);
            s && s(t, i, e), "topBlur" === t && null != e && (t = e._wrapperState || i._wrapperState) && t.controlled && "number" === i.type && (t = "" + i.value, i.getAttribute("value") !== t && i.setAttribute("value", t))
        }
    };
    xt.augmentClass(Xt, {
        view: function(t) {
            return t.view ? t.view : (t = T(t)).window === t ? t : (t = t.ownerDocument) ? t.defaultView || t.parentWindow : window
        },
        detail: function(t) {
            return t.detail || 0
        }
    });
    var js = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    Xt.augmentClass(Zt, {
        screenX: null,
        screenY: null,
        clientX: null,
        clientY: null,
        pageX: null,
        pageY: null,
        ctrlKey: null,
        shiftKey: null,
        altKey: null,
        metaKey: null,
        getModifierState: Qt,
        button: null,
        buttons: null,
        relatedTarget: function(t) {
            return t.relatedTarget || (t.fromElement === t.srcElement ? t.toElement : t.fromElement)
        }
    });
    var Ls = {
            mouseEnter: {
                registrationName: "onMouseEnter",
                dependencies: ["topMouseOut", "topMouseOver"]
            },
            mouseLeave: {
                registrationName: "onMouseLeave",
                dependencies: ["topMouseOut", "topMouseOver"]
            }
        },
        Us = {
            eventTypes: Ls,
            extractEvents: function(t, e, n, r) {
                if ("topMouseOver" === t && (n.relatedTarget || n.fromElement) || "topMouseOut" !== t && "topMouseOver" !== t) return null;
                var i = r.window === r ? r : (i = r.ownerDocument) ? i.defaultView || i.parentWindow : window;
                if ("topMouseOut" === t ? (t = e, e = (e = n.relatedTarget || n.toElement) ? Ye.getClosestInstanceFromNode(e) : null) : t = null, t === e) return null;
                var o = null == t ? i : Ye.getNodeFromInstance(t);
                i = null == e ? i : Ye.getNodeFromInstance(e);
                var a = Zt.getPooled(Ls.mouseLeave, t, n, r);
                return a.type = "mouseleave", a.target = o, a.relatedTarget = i, n = Zt.getPooled(Ls.mouseEnter, e, n, r), n.type = "mouseenter", n.target = i, n.relatedTarget = o, hs.accumulateEnterLeaveDispatches(a, n, t, e), [a, n]
            }
        },
        Fs = Le.DOCUMENT_NODE,
        Hs = ve.canUseDOM && "documentMode" in document && 11 >= document.documentMode,
        Bs = {
            select: {
                phasedRegistrationNames: {
                    bubbled: "onSelect",
                    captured: "onSelectCapture"
                },
                dependencies: "topBlur topContextMenu topFocus topKeyDown topKeyUp topMouseDown topMouseUp topSelectionChange".split(" ")
            }
        },
        zs = null,
        qs = null,
        Vs = null,
        Ws = !1,
        Ks = xn.isListeningToAllDependencies,
        Ys = {
            eventTypes: Bs,
            extractEvents: function(t, e, n, r) {
                var i = r.window === r ? r.document : r.nodeType === Fs ? r : r.ownerDocument;
                if (!i || !Ks("onSelect", i)) return null;
                switch (i = e ? Ye.getNodeFromInstance(e) : window, t) {
                    case "topFocus":
                        (Ft(i) || "true" === i.contentEditable) && (zs = i, qs = e, Vs = null);
                        break;
                    case "topBlur":
                        Vs = qs = zs = null;
                        break;
                    case "topMouseDown":
                        Ws = !0;
                        break;
                    case "topContextMenu":
                    case "topMouseUp":
                        return Ws = !1, te(n, r);
                    case "topSelectionChange":
                        if (Hs) break;
                    case "topKeyDown":
                    case "topKeyUp":
                        return te(n, r)
                }
                return null
            }
        };
    xt.augmentClass(ee, {
        animationName: null,
        elapsedTime: null,
        pseudoElement: null
    }), xt.augmentClass(ne, {
        clipboardData: function(t) {
            return "clipboardData" in t ? t.clipboardData : window.clipboardData
        }
    }), Xt.augmentClass(re, {
        relatedTarget: null
    });
    var Gs = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        $s = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        };
    Xt.augmentClass(oe, {
        key: function(t) {
            if (t.key) {
                var e = Gs[t.key] || t.key;
                if ("Unidentified" !== e) return e
            }
            return "keypress" === t.type ? 13 === (t = ie(t)) ? "Enter" : String.fromCharCode(t) : "keydown" === t.type || "keyup" === t.type ? $s[t.keyCode] || "Unidentified" : ""
        },
        location: null,
        ctrlKey: null,
        shiftKey: null,
        altKey: null,
        metaKey: null,
        repeat: null,
        locale: null,
        getModifierState: Qt,
        charCode: function(t) {
            return "keypress" === t.type ? ie(t) : 0
        },
        keyCode: function(t) {
            return "keydown" === t.type || "keyup" === t.type ? t.keyCode : 0
        },
        which: function(t) {
            return "keypress" === t.type ? ie(t) : "keydown" === t.type || "keyup" === t.type ? t.keyCode : 0
        }
    }), Zt.augmentClass(ae, {
        dataTransfer: null
    }), Xt.augmentClass(se, {
        touches: null,
        targetTouches: null,
        changedTouches: null,
        altKey: null,
        metaKey: null,
        ctrlKey: null,
        shiftKey: null,
        getModifierState: Qt
    }), xt.augmentClass(ue, {
        propertyName: null,
        elapsedTime: null,
        pseudoElement: null
    }), Zt.augmentClass(ce, {
        deltaX: function(t) {
            return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0
        },
        deltaY: function(t) {
            return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0
        },
        deltaZ: null,
        deltaMode: null
    });
    var Xs = {},
        Js = {};
    "abort animationEnd animationIteration animationStart blur cancel canPlay canPlayThrough click close contextMenu copy cut doubleClick drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error focus input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing progress rateChange reset scroll seeked seeking stalled submit suspend timeUpdate toggle touchCancel touchEnd touchMove touchStart transitionEnd volumeChange waiting wheel".split(" ").forEach(function(t) {
        var e = t[0].toUpperCase() + t.slice(1),
            n = "on" + e;
        n = {
            phasedRegistrationNames: {
                bubbled: n,
                captured: n + "Capture"
            },
            dependencies: [e = "top" + e]
        }, Xs[t] = n, Js[e] = n
    });
    var Qs = {
        eventTypes: Xs,
        extractEvents: function(t, e, n, i) {
            var o = Js[t];
            if (!o) return null;
            switch (t) {
                case "topAbort":
                case "topCancel":
                case "topCanPlay":
                case "topCanPlayThrough":
                case "topClose":
                case "topDurationChange":
                case "topEmptied":
                case "topEncrypted":
                case "topEnded":
                case "topError":
                case "topInput":
                case "topInvalid":
                case "topLoad":
                case "topLoadedData":
                case "topLoadedMetadata":
                case "topLoadStart":
                case "topPause":
                case "topPlay":
                case "topPlaying":
                case "topProgress":
                case "topRateChange":
                case "topReset":
                case "topSeeked":
                case "topSeeking":
                case "topStalled":
                case "topSubmit":
                case "topSuspend":
                case "topTimeUpdate":
                case "topToggle":
                case "topVolumeChange":
                case "topWaiting":
                    var a = xt;
                    break;
                case "topKeyPress":
                    if (0 === ie(n)) return null;
                case "topKeyDown":
                case "topKeyUp":
                    a = oe;
                    break;
                case "topBlur":
                case "topFocus":
                    a = re;
                    break;
                case "topClick":
                    if (2 === n.button) return null;
                case "topDoubleClick":
                case "topMouseDown":
                case "topMouseMove":
                case "topMouseUp":
                case "topMouseOut":
                case "topMouseOver":
                case "topContextMenu":
                    a = Zt;
                    break;
                case "topDrag":
                case "topDragEnd":
                case "topDragEnter":
                case "topDragExit":
                case "topDragLeave":
                case "topDragOver":
                case "topDragStart":
                case "topDrop":
                    a = ae;
                    break;
                case "topTouchCancel":
                case "topTouchEnd":
                case "topTouchMove":
                case "topTouchStart":
                    a = se;
                    break;
                case "topAnimationEnd":
                case "topAnimationIteration":
                case "topAnimationStart":
                    a = ee;
                    break;
                case "topTransitionEnd":
                    a = ue;
                    break;
                case "topScroll":
                    a = Xt;
                    break;
                case "topWheel":
                    a = ce;
                    break;
                case "topCopy":
                case "topCut":
                case "topPaste":
                    a = ne
            }
            return a || r("86", t), t = a.getPooled(o, e, n, i), hs.accumulateTwoPhaseDispatches(t), t
        }
    };
    bn.setHandleTopLevel(xn.handleTopLevel), _n.injection.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin TapEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")), un.injection.injectComponentTree(Ye), _n.injection.injectEventPluginsByName({
        SimpleEventPlugin: Qs,
        EnterLeaveEventPlugin: Us,
        ChangeEventPlugin: Ds,
        SelectEventPlugin: Ys,
        BeforeInputEventPlugin: xs
    });
    var Zs = De.injection.MUST_USE_PROPERTY,
        tu = De.injection.HAS_BOOLEAN_VALUE,
        eu = De.injection.HAS_NUMERIC_VALUE,
        nu = De.injection.HAS_POSITIVE_NUMERIC_VALUE,
        ru = De.injection.HAS_STRING_BOOLEAN_VALUE,
        iu = {
            Properties: {
                allowFullScreen: tu,
                allowTransparency: ru,
                async: tu,
                autoPlay: tu,
                capture: tu,
                checked: Zs | tu,
                cols: nu,
                contentEditable: ru,
                controls: tu,
                default: tu,
                defer: tu,
                disabled: tu,
                download: De.injection.HAS_OVERLOADED_BOOLEAN_VALUE,
                draggable: ru,
                formNoValidate: tu,
                hidden: tu,
                loop: tu,
                multiple: Zs | tu,
                muted: Zs | tu,
                noValidate: tu,
                open: tu,
                playsInline: tu,
                readOnly: tu,
                required: tu,
                reversed: tu,
                rows: nu,
                rowSpan: eu,
                scoped: tu,
                seamless: tu,
                selected: Zs | tu,
                size: nu,
                start: eu,
                span: nu,
                spellCheck: ru,
                style: 0,
                itemScope: tu,
                acceptCharset: 0,
                className: 0,
                htmlFor: 0,
                httpEquiv: 0,
                value: ru
            },
            DOMAttributeNames: {
                acceptCharset: "accept-charset",
                className: "class",
                htmlFor: "for",
                httpEquiv: "http-equiv"
            },
            DOMMutationMethods: {
                value: function(t, e) {
                    if (null == e) return t.removeAttribute("value");
                    "number" !== t.type || !1 === t.hasAttribute("value") ? t.setAttribute("value", "" + e) : t.validity && !t.validity.badInput && t.ownerDocument.activeElement !== t && t.setAttribute("value", "" + e)
                }
            }
        },
        ou = De.injection.HAS_STRING_BOOLEAN_VALUE,
        au = {
            xlink: "http://www.w3.org/1999/xlink",
            xml: "http://www.w3.org/XML/1998/namespace"
        },
        su = {
            Properties: {
                autoReverse: ou,
                externalResourcesRequired: ou,
                preserveAlpha: ou
            },
            DOMAttributeNames: {
                autoReverse: "autoReverse",
                externalResourcesRequired: "externalResourcesRequired",
                preserveAlpha: "preserveAlpha"
            },
            DOMAttributeNamespaces: {
                xlinkActuate: au.xlink,
                xlinkArcrole: au.xlink,
                xlinkHref: au.xlink,
                xlinkRole: au.xlink,
                xlinkShow: au.xlink,
                xlinkTitle: au.xlink,
                xlinkType: au.xlink,
                xmlBase: au.xml,
                xmlLang: au.xml,
                xmlSpace: au.xml
            }
        },
        uu = /[\-\:]([a-z])/g;
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode x-height xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type xml:base xmlns:xlink xml:lang xml:space".split(" ").forEach(function(t) {
        var e = t.replace(uu, le);
        su.Properties[e] = 0, su.DOMAttributeNames[e] = t
    }), De.injection.injectDOMPropertyConfig(iu), De.injection.injectDOMPropertyConfig(su);
    var cu = Qo.injectInternals,
        lu = Le.ELEMENT_NODE,
        fu = Le.TEXT_NODE,
        hu = Le.COMMENT_NODE,
        pu = Le.DOCUMENT_NODE,
        du = Le.DOCUMENT_FRAGMENT_NODE,
        mu = De.ROOT_ATTRIBUTE_NAME,
        vu = Oe.getChildNamespace,
        yu = hr.createElement,
        gu = hr.createTextNode,
        bu = hr.setInitialProperties,
        wu = hr.diffProperties,
        _u = hr.updateProperties,
        Eu = hr.diffHydratedProperties,
        Tu = hr.diffHydratedText,
        Su = hr.warnForDeletedHydratableElement,
        Pu = hr.warnForDeletedHydratableText,
        Cu = hr.warnForInsertedHydratedElement,
        Ou = hr.warnForInsertedHydratedText,
        ku = Ye.precacheFiberNode,
        xu = Ye.updateFiberProps;
    hn.injection.injectFiberControlledHostComponent(hr), _t._injectFiber(function(t) {
        return Nu.findHostInstance(t)
    });
    var Iu = null,
        Au = null,
        Nu = function(t) {
            var e = t.getPublicInstance,
                n = (t = pt(t)).scheduleUpdate,
                r = t.getPriorityContext;
            return {
                createContainer: function(t) {
                    var e = fi();
                    return t = {
                        current: e,
                        containerInfo: t,
                        isScheduled: !1,
                        nextScheduledRoot: null,
                        context: null,
                        pendingContext: null
                    }, e.stateNode = t
                },
                updateContainer: function(t, e, i, o) {
                    var a = e.current;
                    i = mt(i), null === e.context ? e.context = i : e.pendingContext = i, e = o, o = r(a, Or.enableAsyncSubtreeAPI && null != t && null != t.type && null != t.type.prototype && !0 === t.type.prototype.unstable_isAsyncReactComponent), $a(a, t = {
                        element: t
                    }, void 0 === e ? null : e, o), n(a, o)
                },
                batchedUpdates: t.batchedUpdates,
                unbatchedUpdates: t.unbatchedUpdates,
                deferredUpdates: t.deferredUpdates,
                flushSync: t.flushSync,
                getPublicRootInstance: function(t) {
                    if (!(t = t.current).child) return null;
                    switch (t.child.tag) {
                        case Za:
                            return e(t.child.stateNode);
                        default:
                            return t.child.stateNode
                    }
                },
                findHostInstance: function(t) {
                    return null === (t = ts(t)) ? null : t.stateNode
                },
                findHostInstanceWithNoPortals: function(t) {
                    return null === (t = es(t)) ? null : t.stateNode
                }
            }
        }({
            getRootHostContext: function(t) {
                if (t.nodeType === pu) t = (t = t.documentElement) ? t.namespaceURI : vu(null, "");
                else {
                    var e = t.nodeType === hu ? t.parentNode : t;
                    t = e.namespaceURI || null, e = e.tagName, t = vu(t, e)
                }
                return t
            },
            getChildHostContext: function(t, e) {
                return vu(t, e)
            },
            getPublicInstance: function(t) {
                return t
            },
            prepareForCommit: function() {
                Iu = xn.isEnabled(), Au = ss.getSelectionInformation(), xn.setEnabled(!1)
            },
            resetAfterCommit: function() {
                ss.restoreSelection(Au), Au = null, xn.setEnabled(Iu), Iu = null
            },
            createInstance: function(t, e, n, r, i) {
                return t = yu(t, e, n, r), ku(i, t), xu(t, e), t
            },
            appendInitialChild: function(t, e) {
                t.appendChild(e)
            },
            finalizeInitialChildren: function(t, e, n, r) {
                bu(t, e, n, r);
                t: {
                    switch (e) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            t = !!n.autoFocus;
                            break t
                    }
                    t = !1
                }
                return t
            },
            prepareUpdate: function(t, e, n, r, i) {
                return wu(t, e, n, r, i)
            },
            commitMount: function(t) {
                t.focus()
            },
            commitUpdate: function(t, e, n, r, i) {
                xu(t, i), _u(t, e, n, r, i)
            },
            shouldSetTextContent: function(t, e) {
                return "textarea" === t || "string" == typeof e.children || "number" == typeof e.children || "object" == typeof e.dangerouslySetInnerHTML && null !== e.dangerouslySetInnerHTML && "string" == typeof e.dangerouslySetInnerHTML.__html
            },
            resetTextContent: function(t) {
                t.textContent = ""
            },
            shouldDeprioritizeSubtree: function(t, e) {
                return !!e.hidden
            },
            createTextInstance: function(t, e, n, r) {
                return t = gu(t, e), ku(r, t), t
            },
            commitTextUpdate: function(t, e, n) {
                t.nodeValue = n
            },
            appendChild: function(t, e) {
                t.appendChild(e)
            },
            appendChildToContainer: function(t, e) {
                t.nodeType === hu ? t.parentNode.insertBefore(e, t) : t.appendChild(e)
            },
            insertBefore: function(t, e, n) {
                t.insertBefore(e, n)
            },
            insertInContainerBefore: function(t, e, n) {
                t.nodeType === hu ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n)
            },
            removeChild: function(t, e) {
                t.removeChild(e)
            },
            removeChildFromContainer: function(t, e) {
                t.nodeType === hu ? t.parentNode.removeChild(e) : t.removeChild(e)
            },
            canHydrateInstance: function(t, e) {
                return t.nodeType === lu && e === t.nodeName.toLowerCase()
            },
            canHydrateTextInstance: function(t, e) {
                return "" !== e && t.nodeType === fu
            },
            getNextHydratableSibling: function(t) {
                for (t = t.nextSibling; t && t.nodeType !== lu && t.nodeType !== fu;) t = t.nextSibling;
                return t
            },
            getFirstHydratableChild: function(t) {
                for (t = t.firstChild; t && t.nodeType !== lu && t.nodeType !== fu;) t = t.nextSibling;
                return t
            },
            hydrateInstance: function(t, e, n, r, i, o) {
                return ku(o, t), xu(t, n), Eu(t, e, n, i, r)
            },
            hydrateTextInstance: function(t, e, n) {
                return ku(n, t), Tu(t, e)
            },
            didNotHydrateInstance: function(t, e) {
                1 === e.nodeType ? Su(t, e) : Pu(t, e)
            },
            didNotFindHydratableInstance: function(t, e, n) {
                Cu(t, e, n)
            },
            didNotFindHydratableTextInstance: function(t, e) {
                Ou(t, e)
            },
            scheduleDeferredCallback: Cr.rIC,
            useSyncScheduling: !0
        });
    dn.injection.injectFiberBatchedUpdates(Nu.batchedUpdates);
    var Mu = {
        createPortal: de,
        hydrate: function(t, e, n) {
            return pe(null, t, e, !0, n)
        },
        render: function(t, e, n) {
            return pe(null, t, e, !1, n)
        },
        unstable_renderSubtreeIntoContainer: function(t, e, n, i) {
            return null != t && Ge.has(t) || r("38"), pe(t, e, n, !1, i)
        },
        unmountComponentAtNode: function(t) {
            return fe(t) || r("40"), !!t._reactRootContainer && (Nu.unbatchedUpdates(function() {
                pe(null, null, t, !1, function() {
                    t._reactRootContainer = null
                })
            }), !0)
        },
        findDOMNode: _t,
        unstable_createPortal: de,
        unstable_batchedUpdates: dn.batchedUpdates,
        unstable_deferredUpdates: Nu.deferredUpdates,
        flushSync: Nu.flushSync,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
            EventPluginHub: _n,
            EventPluginRegistry: Ae,
            EventPropagators: hs,
            ReactControlledComponent: hn,
            ReactDOMComponentTree: Ye,
            ReactDOMEventListener: bn
        }
    };
    cu({
        findFiberByHostInstance: Ye.getClosestInstanceFromNode,
        findHostInstanceByFiber: Nu.findHostInstance,
        bundleType: 0,
        version: "16.0.0",
        rendererPackageName: "react-dom"
    }), t.exports = Mu
}, function(t, e, n) {
    "use strict";
    var r = !("undefined" == typeof window || !window.document || !window.document.createElement),
        i = {
            canUseDOM: r,
            canUseWorkers: "undefined" != typeof Worker,
            canUseEventListeners: r && !(!window.addEventListener && !window.attachEvent),
            canUseViewport: r && !!window.screen,
            isInWorker: !r
        };
    t.exports = i
}, function(t, e, n) {
    "use strict";
    var r = n(6),
        i = {
            listen: function(t, e, n) {
                return t.addEventListener ? (t.addEventListener(e, n, !1), {
                    remove: function() {
                        t.removeEventListener(e, n, !1)
                    }
                }) : t.attachEvent ? (t.attachEvent("on" + e, n), {
                    remove: function() {
                        t.detachEvent("on" + e, n)
                    }
                }) : void 0
            },
            capture: function(t, e, n) {
                return t.addEventListener ? (t.addEventListener(e, n, !0), {
                    remove: function() {
                        t.removeEventListener(e, n, !0)
                    }
                }) : {
                    remove: r
                }
            },
            registerDefault: function() {}
        };
    t.exports = i
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        return t === e ? 0 !== t || 0 !== e || 1 / t == 1 / e : t !== t && e !== e
    }
    var i = Object.prototype.hasOwnProperty;
    t.exports = function(t, e) {
        if (r(t, e)) return !0;
        if ("object" != typeof t || null === t || "object" != typeof e || null === e) return !1;
        var n = Object.keys(t),
            o = Object.keys(e);
        if (n.length !== o.length) return !1;
        for (var a = 0; a < n.length; a++)
            if (!i.call(e, n[a]) || !r(t[n[a]], e[n[a]])) return !1;
        return !0
    }
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        return !(!t || !e) && (t === e || !i(t) && (i(e) ? r(t, e.parentNode) : "contains" in t ? t.contains(e) : !!t.compareDocumentPosition && !!(16 & t.compareDocumentPosition(e))))
    }
    var i = n(52);
    t.exports = r
}, function(t, e, n) {
    "use strict";
    var r = n(53);
    t.exports = function(t) {
        return r(t) && 3 == t.nodeType
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        var e = (t ? t.ownerDocument || t : document).defaultView || window;
        return !(!t || !("function" == typeof e.Node ? t instanceof e.Node : "object" == typeof t && "number" == typeof t.nodeType && "string" == typeof t.nodeName))
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        try {
            t.focus()
        } catch (t) {}
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        if (void 0 === (t = t || ("undefined" != typeof document ? document : void 0))) return null;
        try {
            return t.activeElement || t.body
        } catch (e) {
            return t.body
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(57),
        i = n(20),
        o = n(61);
    n.d(e, "Provider", function() {
        return r.default
    }), n.d(e, "createProvider", function() {
        return r.createProvider
    }), n.d(e, "connectAdvanced", function() {
        return i.default
    }), n.d(e, "connect", function() {
        return o.default
    })
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function a() {
        var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "store",
            n = arguments[1] || e + "Subscription",
            a = function(t) {
                function a(n, o) {
                    r(this, a);
                    var s = i(this, t.call(this, n, o));
                    return s[e] = n.store, s
                }
                return o(a, t), a.prototype.getChildContext = function() {
                    var t;
                    return t = {}, t[e] = this[e], t[n] = null, t
                }, a.prototype.render = function() {
                    return s.Children.only(this.props.children)
                }, a
            }(s.Component);
        return a.propTypes = {
            store: l.storeShape.isRequired,
            children: c.a.element.isRequired
        }, a.childContextTypes = (t = {}, t[e] = l.storeShape.isRequired, t[n] = l.subscriptionShape, t), a
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.createProvider = a;
    var s = n(0),
        u = (n.n(s), n(2)),
        c = n.n(u),
        l = n(19);
    n(9);
    e.default = a()
}, function(t, e, n) {
    "use strict";
    var r = n(6),
        i = n(8),
        o = n(59);
    t.exports = function() {
        function t(t, e, n, r, a, s) {
            s !== o && i(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")
        }

        function e() {
            return t
        }
        t.isRequired = t;
        var n = {
            array: t,
            bool: t,
            func: t,
            number: t,
            object: t,
            string: t,
            symbol: t,
            any: t,
            arrayOf: e,
            element: t,
            instanceOf: e,
            node: t,
            objectOf: e,
            oneOf: e,
            oneOfType: e,
            shape: e,
            exact: e
        };
        return n.checkPropTypes = r, n.PropTypes = n, n
    }
}, function(t, e, n) {
    "use strict";
    t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i() {
        var t = [],
            e = [];
        return {
            clear: function() {
                e = o, t = o
            },
            notify: function() {
                for (var n = t = e, r = 0; r < n.length; r++) n[r]()
            },
            get: function() {
                return e
            },
            subscribe: function(n) {
                var r = !0;
                return e === t && (e = t.slice()), e.push(n),
                    function() {
                        r && t !== o && (r = !1, e === t && (e = t.slice()), e.splice(e.indexOf(n), 1))
                    }
            }
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), n.d(e, "default", function() {
        return s
    });
    var o = null,
        a = {
            notify: function() {}
        },
        s = function() {
            function t(e, n, i) {
                r(this, t), this.store = e, this.parentSub = n, this.onStateChange = i, this.unsubscribe = null, this.listeners = a
            }
            return t.prototype.addNestedSub = function(t) {
                return this.trySubscribe(), this.listeners.subscribe(t)
            }, t.prototype.notifyNestedSubs = function() {
                this.listeners.notify()
            }, t.prototype.isSubscribed = function() {
                return Boolean(this.unsubscribe)
            }, t.prototype.trySubscribe = function() {
                this.unsubscribe || (this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange), this.listeners = i())
            }, t.prototype.tryUnsubscribe = function() {
                this.unsubscribe && (this.unsubscribe(), this.unsubscribe = null, this.listeners.clear(), this.listeners = a)
            }, t
        }()
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        var n = {};
        for (var r in t) e.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
        return n
    }

    function i(t, e, n) {
        for (var r = e.length - 1; r >= 0; r--) {
            var i = e[r](t);
            if (i) return i
        }
        return function(e, r) {
            throw new Error("Invalid value of type " + typeof t + " for " + n + " argument when connecting component " + r.wrappedComponentName + ".")
        }
    }

    function o(t, e) {
        return t === e
    }

    function a() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = t.connectHOC,
            n = void 0 === e ? s.default : e,
            a = t.mapStateToPropsFactories,
            d = void 0 === a ? l.default : a,
            m = t.mapDispatchToPropsFactories,
            v = void 0 === m ? c.default : m,
            y = t.mergePropsFactories,
            g = void 0 === y ? f.default : y,
            b = t.selectorFactory,
            w = void 0 === b ? h.default : b;
        return function(t, e, a) {
            var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                c = s.pure,
                l = void 0 === c || c,
                f = s.areStatesEqual,
                h = void 0 === f ? o : f,
                m = s.areOwnPropsEqual,
                y = void 0 === m ? u.default : m,
                b = s.areStatePropsEqual,
                _ = void 0 === b ? u.default : b,
                E = s.areMergedPropsEqual,
                T = void 0 === E ? u.default : E,
                S = r(s, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]),
                P = i(t, d, "mapStateToProps"),
                C = i(e, v, "mapDispatchToProps"),
                O = i(a, g, "mergeProps");
            return n(w, p({
                methodName: "connect",
                getDisplayName: function(t) {
                    return "Connect(" + t + ")"
                },
                shouldHandleStateChanges: Boolean(t),
                initMapStateToProps: P,
                initMapDispatchToProps: C,
                initMergeProps: O,
                pure: l,
                areStatesEqual: h,
                areOwnPropsEqual: y,
                areStatePropsEqual: _,
                areMergedPropsEqual: T
            }, S))
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.createConnect = a;
    var s = n(20),
        u = n(62),
        c = n(63),
        l = n(79),
        f = n(80),
        h = n(81),
        p = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        };
    e.default = a()
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        return t === e ? 0 !== t || 0 !== e || 1 / t == 1 / e : t !== t && e !== e
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t, e) {
        if (r(t, e)) return !0;
        if ("object" != typeof t || null === t || "object" != typeof e || null === e) return !1;
        var n = Object.keys(t),
            o = Object.keys(e);
        if (n.length !== o.length) return !1;
        for (var a = 0; a < n.length; a++)
            if (!i.call(e, n[a]) || !r(t[n[a]], e[n[a]])) return !1;
        return !0
    };
    var i = Object.prototype.hasOwnProperty
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return "function" == typeof t ? Object(s.wrapMapToPropsFunc)(t, "mapDispatchToProps") : void 0
    }

    function i(t) {
        return t ? void 0 : Object(s.wrapMapToPropsConstant)(function(t) {
            return {
                dispatch: t
            }
        })
    }

    function o(t) {
        return t && "object" == typeof t ? Object(s.wrapMapToPropsConstant)(function(e) {
            return Object(a.bindActionCreators)(t, e)
        }) : void 0
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.whenMapDispatchToPropsIsFunction = r, e.whenMapDispatchToPropsIsMissing = i, e.whenMapDispatchToPropsIsObject = o;
    var a = n(22),
        s = n(28);
    e.default = [r, i, o]
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(24),
        i = n(67),
        o = n(68),
        a = "[object Null]",
        s = "[object Undefined]",
        u = r.default ? r.default.toStringTag : void 0;
    e.default = function(t) {
        return null == t ? void 0 === t ? s : a : (t = Object(t), u && u in t ? Object(i.default)(t) : Object(o.default)(t))
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(66),
        i = "object" == typeof self && self && self.Object === Object && self,
        o = r.default || i || Function("return this")();
    e.default = o
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t) {
            var n = "object" == typeof t && t && t.Object === Object && t;
            e.default = n
        }.call(e, n(25))
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(24),
        i = Object.prototype,
        o = i.hasOwnProperty,
        a = i.toString,
        s = r.default ? r.default.toStringTag : void 0;
    e.default = function(t) {
        var e = o.call(t, s),
            n = t[s];
        try {
            t[s] = void 0;
            var r = !0
        } catch (t) {}
        var i = a.call(t);
        return r && (e ? t[s] = n : delete t[s]), i
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = Object.prototype.toString;
    e.default = function(t) {
        return r.call(t)
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(70),
        i = Object(r.default)(Object.getPrototypeOf, Object);
    e.default = i
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t, e) {
        return function(n) {
            return t(e(n))
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t) {
        return null != t && "object" == typeof t
    }
}, function(t, e, n) {
    t.exports = n(73)
}, function(t, e, n) {
    "use strict";
    (function(t, r) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i, o = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(n(75));
        i = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : r;
        var a = (0, o.default)(i);
        e.default = a
    }).call(e, n(25), n(74)(t))
}, function(t, e) {
    t.exports = function(t) {
        return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function() {
                return t.l
            }
        }), Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function() {
                return t.i
            }
        }), t.webpackPolyfill = 1), t
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t) {
        var e, n = t.Symbol;
        return "function" == typeof n ? n.observable ? e = n.observable : (e = n("observable"), n.observable = e) : e = "@@observable", e
    }
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        var n = e && e.type;
        return "Given action " + (n && '"' + n.toString() + '"' || "an action") + ', reducer "' + t + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
    }

    function i(t) {
        Object.keys(t).forEach(function(e) {
            var n = t[e];
            if (void 0 === n(void 0, {
                    type: o.ActionTypes.INIT
                })) throw new Error('Reducer "' + e + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
            if (void 0 === n(void 0, {
                    type: "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".")
                })) throw new Error('Reducer "' + e + "\" returned undefined when probed with a random type. Don't try to handle " + o.ActionTypes.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')
        })
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t) {
        for (var e = Object.keys(t), n = {}, o = 0; o < e.length; o++) {
            var a = e[o];
            "function" == typeof t[a] && (n[a] = t[a])
        }
        var s = Object.keys(n),
            u = void 0;
        try {
            i(n)
        } catch (t) {
            u = t
        }
        return function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                e = arguments[1];
            if (u) throw u;
            for (var i = !1, o = {}, a = 0; a < s.length; a++) {
                var c = s[a],
                    l = n[c],
                    f = t[c],
                    h = l(f, e);
                if (void 0 === h) {
                    var p = r(c, e);
                    throw new Error(p)
                }
                o[c] = h, i = i || h !== f
            }
            return i ? o : t
        }
    };
    var o = n(23);
    n(10), n(26)
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        return function() {
            return e(t.apply(void 0, arguments))
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t, e) {
        if ("function" == typeof t) return r(t, e);
        if ("object" != typeof t || null === t) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === t ? "null" : typeof t) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
        for (var n = Object.keys(t), i = {}, o = 0; o < n.length; o++) {
            var a = n[o],
                s = t[a];
            "function" == typeof s && (i[a] = r(s, e))
        }
        return i
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return function(t) {
            return function(n, o, a) {
                var s = t(n, o, a),
                    u = s.dispatch,
                    c = [],
                    l = {
                        getState: s.getState,
                        dispatch: function(t) {
                            return u(t)
                        }
                    };
                return c = e.map(function(t) {
                    return t(l)
                }), u = r.default.apply(void 0, c)(s.dispatch), i({}, s, {
                    dispatch: u
                })
            }
        }
    };
    var r = n(27),
        i = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return "function" == typeof t ? Object(o.wrapMapToPropsFunc)(t, "mapStateToProps") : void 0
    }

    function i(t) {
        return t ? void 0 : Object(o.wrapMapToPropsConstant)(function() {
            return {}
        })
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.whenMapStateToPropsIsFunction = r, e.whenMapStateToPropsIsMissing = i;
    var o = n(28);
    e.default = [r, i]
}, function(t, e, n) {
    "use strict";

    function r(t, e, n) {
        return s({}, n, t, e)
    }

    function i(t) {
        return function(e, n) {
            n.displayName;
            var r = n.pure,
                i = n.areMergedPropsEqual,
                o = !1,
                a = void 0;
            return function(e, n, s) {
                var u = t(e, n, s);
                return o ? r && i(u, a) || (a = u) : (o = !0, a = u), a
            }
        }
    }

    function o(t) {
        return "function" == typeof t ? i(t) : void 0
    }

    function a(t) {
        return t ? void 0 : function() {
            return r
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.defaultMergeProps = r, e.wrapMergePropsFunc = i, e.whenMergePropsIsFunction = o, e.whenMergePropsIsOmitted = a;
    n(29);
    var s = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
        }
        return t
    };
    e.default = [o, a]
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        var n = {};
        for (var r in t) e.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
        return n
    }

    function i(t, e, n, r) {
        return function(i, o) {
            return n(t(i, o), e(r, o), o)
        }
    }

    function o(t, e, n, r, i) {
        function o(i, o) {
            return d = i, m = o, v = t(d, m), y = e(r, m), g = n(v, y, m), p = !0, g
        }

        function a() {
            return v = t(d, m), e.dependsOnOwnProps && (y = e(r, m)), g = n(v, y, m)
        }

        function s() {
            return t.dependsOnOwnProps && (v = t(d, m)), e.dependsOnOwnProps && (y = e(r, m)), g = n(v, y, m)
        }

        function u() {
            var e = t(d, m),
                r = !h(e, v);
            return v = e, r && (g = n(v, y, m)), g
        }

        function c(t, e) {
            var n = !f(e, m),
                r = !l(t, d);
            return d = t, m = e, n && r ? a() : n ? s() : r ? u() : g
        }
        var l = i.areStatesEqual,
            f = i.areOwnPropsEqual,
            h = i.areStatePropsEqual,
            p = !1,
            d = void 0,
            m = void 0,
            v = void 0,
            y = void 0,
            g = void 0;
        return function(t, e) {
            return p ? c(t, e) : o(t, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.impureFinalPropsSelectorFactory = i, e.pureFinalPropsSelectorFactory = o, e.default = function(t, e) {
        var n = e.initMapStateToProps,
            a = e.initMapDispatchToProps,
            s = e.initMergeProps,
            u = r(e, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]),
            c = n(t, u),
            l = a(t, u),
            f = s(t, u);
        return (u.pure ? o : i)(c, l, f, t, u)
    };
    n(82)
}, function(t, e, n) {
    "use strict";

    function r(t, e, n) {
        if (!t) throw new Error("Unexpected value for " + e + " in " + n + ".");
        "mapStateToProps" !== e && "mapDispatchToProps" !== e || t.hasOwnProperty("dependsOnOwnProps") || Object(i.default)("The selector for " + e + " of " + n + " did not specify a value for dependsOnOwnProps.")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t, e, n, i) {
        r(t, "mapStateToProps", i), r(e, "mapDispatchToProps", i), r(n, "mergeProps", i)
    };
    var i = n(9)
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(84);
    n.d(e, "BrowserRouter", function() {
        return r.default
    });
    var i = n(86);
    n.d(e, "HashRouter", function() {
        return i.default
    });
    var o = n(33);
    n.d(e, "Link", function() {
        return o.default
    });
    var a = n(88);
    n.d(e, "MemoryRouter", function() {
        return a.default
    });
    var s = n(91);
    n.d(e, "NavLink", function() {
        return s.default
    });
    var u = n(94);
    n.d(e, "Prompt", function() {
        return u.default
    });
    var c = n(96);
    n.d(e, "Redirect", function() {
        return c.default
    });
    var l = n(34);
    n.d(e, "Route", function() {
        return l.default
    });
    var f = n(13);
    n.d(e, "Router", function() {
        return f.default
    });
    var h = n(102);
    n.d(e, "StaticRouter", function() {
        return h.default
    });
    var p = n(104);
    n.d(e, "Switch", function() {
        return p.default
    });
    var d = n(106);
    n.d(e, "matchPath", function() {
        return d.default
    });
    var m = n(107);
    n.d(e, "withRouter", function() {
        return m.default
    })
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = n(1),
        s = n.n(a),
        u = n(0),
        c = n.n(u),
        l = n(2),
        f = n.n(l),
        h = n(85),
        p = n.n(h),
        d = n(13),
        m = function(t) {
            function e() {
                var n, o, a;
                r(this, e);
                for (var s = arguments.length, u = Array(s), c = 0; c < s; c++) u[c] = arguments[c];
                return n = o = i(this, t.call.apply(t, [this].concat(u))), o.history = p()(o.props), a = n, i(o, a)
            }
            return o(e, t), e.prototype.componentWillMount = function() {
                s()(!this.props.history, "<BrowserRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { BrowserRouter as Router }`.")
            }, e.prototype.render = function() {
                return c.a.createElement(d.default, {
                    history: this.history,
                    children: this.props.children
                })
            }, e
        }(c.a.Component);
    m.propTypes = {
        basename: f.a.string,
        forceRefresh: f.a.bool,
        getUserConfirmation: f.a.func,
        keyLength: f.a.number,
        children: f.a.node
    }, e.default = m
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.__esModule = !0;
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        o = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        },
        a = r(n(1)),
        s = r(n(3)),
        u = n(11),
        c = n(4),
        l = r(n(12)),
        f = n(32),
        h = function() {
            try {
                return window.history.state || {}
            } catch (t) {
                return {}
            }
        };
    e.default = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        (0, s.default)(f.canUseDOM, "Browser history needs a DOM");
        var e = window.history,
            n = (0, f.supportsHistory)(),
            r = !(0, f.supportsPopStateOnHashChange)(),
            p = t.forceRefresh,
            d = void 0 !== p && p,
            m = t.getUserConfirmation,
            v = void 0 === m ? f.getConfirmation : m,
            y = t.keyLength,
            g = void 0 === y ? 6 : y,
            b = t.basename ? (0, c.stripTrailingSlash)((0, c.addLeadingSlash)(t.basename)) : "",
            w = function(t) {
                var e = t || {},
                    n = e.key,
                    r = e.state,
                    i = window.location,
                    o = i.pathname + i.search + i.hash;
                return (0, a.default)(!b || (0, c.hasBasename)(o, b), 'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "' + o + '" to begin with "' + b + '".'), b && (o = (0, c.stripBasename)(o, b)), (0, u.createLocation)(o, r, n)
            },
            _ = function() {
                return Math.random().toString(36).substr(2, g)
            },
            E = (0, l.default)(),
            T = function(t) {
                o(j, t), j.length = e.length, E.notifyListeners(j.location, j.action)
            },
            S = function(t) {
                (0, f.isExtraneousPopstateEvent)(t) || O(w(t.state))
            },
            P = function() {
                O(w(h()))
            },
            C = !1,
            O = function(t) {
                C ? (C = !1, T()) : E.confirmTransitionTo(t, "POP", v, function(e) {
                    e ? T({
                        action: "POP",
                        location: t
                    }) : k(t)
                })
            },
            k = function(t) {
                var e = j.location,
                    n = I.indexOf(e.key); - 1 === n && (n = 0);
                var r = I.indexOf(t.key); - 1 === r && (r = 0);
                var i = n - r;
                i && (C = !0, N(i))
            },
            x = w(h()),
            I = [x.key],
            A = function(t) {
                return b + (0, c.createPath)(t)
            },
            N = function(t) {
                e.go(t)
            },
            M = 0,
            R = function(t) {
                1 === (M += t) ? ((0, f.addEventListener)(window, "popstate", S), r && (0, f.addEventListener)(window, "hashchange", P)) : 0 === M && ((0, f.removeEventListener)(window, "popstate", S), r && (0, f.removeEventListener)(window, "hashchange", P))
            },
            D = !1,
            j = {
                length: e.length,
                action: "POP",
                location: x,
                createHref: A,
                push: function(t, r) {
                    (0, a.default)(!("object" === (void 0 === t ? "undefined" : i(t)) && void 0 !== t.state && void 0 !== r), "You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");
                    var o = (0, u.createLocation)(t, r, _(), j.location);
                    E.confirmTransitionTo(o, "PUSH", v, function(t) {
                        if (t) {
                            var r = A(o),
                                i = o.key,
                                s = o.state;
                            if (n)
                                if (e.pushState({
                                        key: i,
                                        state: s
                                    }, null, r), d) window.location.href = r;
                                else {
                                    var u = I.indexOf(j.location.key),
                                        c = I.slice(0, -1 === u ? 0 : u + 1);
                                    c.push(o.key), I = c, T({
                                        action: "PUSH",
                                        location: o
                                    })
                                }
                            else(0, a.default)(void 0 === s, "Browser history cannot push state in browsers that do not support HTML5 history"), window.location.href = r
                        }
                    })
                },
                replace: function(t, r) {
                    (0, a.default)(!("object" === (void 0 === t ? "undefined" : i(t)) && void 0 !== t.state && void 0 !== r), "You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");
                    var o = (0, u.createLocation)(t, r, _(), j.location);
                    E.confirmTransitionTo(o, "REPLACE", v, function(t) {
                        if (t) {
                            var r = A(o),
                                i = o.key,
                                s = o.state;
                            if (n)
                                if (e.replaceState({
                                        key: i,
                                        state: s
                                    }, null, r), d) window.location.replace(r);
                                else {
                                    var u = I.indexOf(j.location.key); - 1 !== u && (I[u] = o.key), T({
                                        action: "REPLACE",
                                        location: o
                                    })
                                }
                            else(0, a.default)(void 0 === s, "Browser history cannot replace state in browsers that do not support HTML5 history"), window.location.replace(r)
                        }
                    })
                },
                go: N,
                goBack: function() {
                    return N(-1)
                },
                goForward: function() {
                    return N(1)
                },
                block: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        e = E.setPrompt(t);
                    return D || (R(1), D = !0),
                        function() {
                            return D && (D = !1, R(-1)), e()
                        }
                },
                listen: function(t) {
                    var e = E.appendListener(t);
                    return R(1),
                        function() {
                            R(-1), e()
                        }
                }
            };
        return j
    }
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = n(1),
        s = n.n(a),
        u = n(0),
        c = n.n(u),
        l = n(2),
        f = n.n(l),
        h = n(87),
        p = n.n(h),
        d = n(13),
        m = function(t) {
            function e() {
                var n, o, a;
                r(this, e);
                for (var s = arguments.length, u = Array(s), c = 0; c < s; c++) u[c] = arguments[c];
                return n = o = i(this, t.call.apply(t, [this].concat(u))), o.history = p()(o.props), a = n, i(o, a)
            }
            return o(e, t), e.prototype.componentWillMount = function() {
                s()(!this.props.history, "<HashRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { HashRouter as Router }`.")
            }, e.prototype.render = function() {
                return c.a.createElement(d.default, {
                    history: this.history,
                    children: this.props.children
                })
            }, e
        }(c.a.Component);
    m.propTypes = {
        basename: f.a.string,
        getUserConfirmation: f.a.func,
        hashType: f.a.oneOf(["hashbang", "noslash", "slash"]),
        children: f.a.node
    }, e.default = m
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.__esModule = !0;
    var i = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        },
        o = r(n(1)),
        a = r(n(3)),
        s = n(11),
        u = n(4),
        c = r(n(12)),
        l = n(32),
        f = {
            hashbang: {
                encodePath: function(t) {
                    return "!" === t.charAt(0) ? t : "!/" + (0, u.stripLeadingSlash)(t)
                },
                decodePath: function(t) {
                    return "!" === t.charAt(0) ? t.substr(1) : t
                }
            },
            noslash: {
                encodePath: u.stripLeadingSlash,
                decodePath: u.addLeadingSlash
            },
            slash: {
                encodePath: u.addLeadingSlash,
                decodePath: u.addLeadingSlash
            }
        },
        h = function() {
            var t = window.location.href,
                e = t.indexOf("#");
            return -1 === e ? "" : t.substring(e + 1)
        },
        p = function(t) {
            return window.location.hash = t
        },
        d = function(t) {
            var e = window.location.href.indexOf("#");
            window.location.replace(window.location.href.slice(0, e >= 0 ? e : 0) + "#" + t)
        };
    e.default = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        (0, a.default)(l.canUseDOM, "Hash history needs a DOM");
        var e = window.history,
            n = (0, l.supportsGoWithoutReloadUsingHash)(),
            r = t.getUserConfirmation,
            m = void 0 === r ? l.getConfirmation : r,
            v = t.hashType,
            y = void 0 === v ? "slash" : v,
            g = t.basename ? (0, u.stripTrailingSlash)((0, u.addLeadingSlash)(t.basename)) : "",
            b = f[y],
            w = b.encodePath,
            _ = b.decodePath,
            E = function() {
                var t = _(h());
                return (0, o.default)(!g || (0, u.hasBasename)(t, g), 'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "' + t + '" to begin with "' + g + '".'), g && (t = (0, u.stripBasename)(t, g)), (0, s.createLocation)(t)
            },
            T = (0, c.default)(),
            S = function(t) {
                i(U, t), U.length = e.length, T.notifyListeners(U.location, U.action)
            },
            P = !1,
            C = null,
            O = function() {
                var t = h(),
                    e = w(t);
                if (t !== e) d(e);
                else {
                    var n = E(),
                        r = U.location;
                    if (!P && (0, s.locationsAreEqual)(r, n)) return;
                    if (C === (0, u.createPath)(n)) return;
                    C = null, k(n)
                }
            },
            k = function(t) {
                P ? (P = !1, S()) : T.confirmTransitionTo(t, "POP", m, function(e) {
                    e ? S({
                        action: "POP",
                        location: t
                    }) : x(t)
                })
            },
            x = function(t) {
                var e = U.location,
                    n = M.lastIndexOf((0, u.createPath)(e)); - 1 === n && (n = 0);
                var r = M.lastIndexOf((0, u.createPath)(t)); - 1 === r && (r = 0);
                var i = n - r;
                i && (P = !0, R(i))
            },
            I = h(),
            A = w(I);
        I !== A && d(A);
        var N = E(),
            M = [(0, u.createPath)(N)],
            R = function(t) {
                (0, o.default)(n, "Hash history go(n) causes a full page reload in this browser"), e.go(t)
            },
            D = 0,
            j = function(t) {
                1 === (D += t) ? (0, l.addEventListener)(window, "hashchange", O) : 0 === D && (0, l.removeEventListener)(window, "hashchange", O)
            },
            L = !1,
            U = {
                length: e.length,
                action: "POP",
                location: N,
                createHref: function(t) {
                    return "#" + w(g + (0, u.createPath)(t))
                },
                push: function(t, e) {
                    (0, o.default)(void 0 === e, "Hash history cannot push state; it is ignored");
                    var n = (0, s.createLocation)(t, void 0, void 0, U.location);
                    T.confirmTransitionTo(n, "PUSH", m, function(t) {
                        if (t) {
                            var e = (0, u.createPath)(n),
                                r = w(g + e);
                            if (h() !== r) {
                                C = e, p(r);
                                var i = M.lastIndexOf((0, u.createPath)(U.location)),
                                    a = M.slice(0, -1 === i ? 0 : i + 1);
                                a.push(e), M = a, S({
                                    action: "PUSH",
                                    location: n
                                })
                            } else(0, o.default)(!1, "Hash history cannot PUSH the same path; a new entry will not be added to the history stack"), S()
                        }
                    })
                },
                replace: function(t, e) {
                    (0, o.default)(void 0 === e, "Hash history cannot replace state; it is ignored");
                    var n = (0, s.createLocation)(t, void 0, void 0, U.location);
                    T.confirmTransitionTo(n, "REPLACE", m, function(t) {
                        if (t) {
                            var e = (0, u.createPath)(n),
                                r = w(g + e);
                            h() !== r && (C = e, d(r));
                            var i = M.indexOf((0, u.createPath)(U.location)); - 1 !== i && (M[i] = e), S({
                                action: "REPLACE",
                                location: n
                            })
                        }
                    })
                },
                go: R,
                goBack: function() {
                    return R(-1)
                },
                goForward: function() {
                    return R(1)
                },
                block: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        e = T.setPrompt(t);
                    return L || (j(1), L = !0),
                        function() {
                            return L && (L = !1, j(-1)), e()
                        }
                },
                listen: function(t) {
                    var e = T.appendListener(t);
                    return j(1),
                        function() {
                            j(-1), e()
                        }
                }
            };
        return U
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(89);
    e.default = r.default
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = n(1),
        s = n.n(a),
        u = n(0),
        c = n.n(u),
        l = n(2),
        f = n.n(l),
        h = n(90),
        p = n.n(h),
        d = n(14),
        m = function(t) {
            function e() {
                var n, o, a;
                r(this, e);
                for (var s = arguments.length, u = Array(s), c = 0; c < s; c++) u[c] = arguments[c];
                return n = o = i(this, t.call.apply(t, [this].concat(u))), o.history = p()(o.props), a = n, i(o, a)
            }
            return o(e, t), e.prototype.componentWillMount = function() {
                s()(!this.props.history, "<MemoryRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { MemoryRouter as Router }`.")
            }, e.prototype.render = function() {
                return c.a.createElement(d.default, {
                    history: this.history,
                    children: this.props.children
                })
            }, e
        }(c.a.Component);
    m.propTypes = {
        initialEntries: f.a.array,
        initialIndex: f.a.number,
        getUserConfirmation: f.a.func,
        keyLength: f.a.number,
        children: f.a.node
    }, e.default = m
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.__esModule = !0;
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        o = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        },
        a = r(n(1)),
        s = n(4),
        u = n(11),
        c = r(n(12)),
        l = function(t, e, n) {
            return Math.min(Math.max(t, e), n)
        };
    e.default = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = t.getUserConfirmation,
            n = t.initialEntries,
            r = void 0 === n ? ["/"] : n,
            f = t.initialIndex,
            h = void 0 === f ? 0 : f,
            p = t.keyLength,
            d = void 0 === p ? 6 : p,
            m = (0, c.default)(),
            v = function(t) {
                o(E, t), E.length = E.entries.length, m.notifyListeners(E.location, E.action)
            },
            y = function() {
                return Math.random().toString(36).substr(2, d)
            },
            g = l(h, 0, r.length - 1),
            b = r.map(function(t) {
                return "string" == typeof t ? (0, u.createLocation)(t, void 0, y()) : (0, u.createLocation)(t, void 0, t.key || y())
            }),
            w = s.createPath,
            _ = function(t) {
                var n = l(E.index + t, 0, E.entries.length - 1),
                    r = E.entries[n];
                m.confirmTransitionTo(r, "POP", e, function(t) {
                    t ? v({
                        action: "POP",
                        location: r,
                        index: n
                    }) : v()
                })
            },
            E = {
                length: b.length,
                action: "POP",
                location: b[g],
                index: g,
                entries: b,
                createHref: w,
                push: function(t, n) {
                    (0, a.default)(!("object" === (void 0 === t ? "undefined" : i(t)) && void 0 !== t.state && void 0 !== n), "You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");
                    var r = (0, u.createLocation)(t, n, y(), E.location);
                    m.confirmTransitionTo(r, "PUSH", e, function(t) {
                        if (t) {
                            var e = E.index + 1,
                                n = E.entries.slice(0);
                            n.length > e ? n.splice(e, n.length - e, r) : n.push(r), v({
                                action: "PUSH",
                                location: r,
                                index: e,
                                entries: n
                            })
                        }
                    })
                },
                replace: function(t, n) {
                    (0, a.default)(!("object" === (void 0 === t ? "undefined" : i(t)) && void 0 !== t.state && void 0 !== n), "You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");
                    var r = (0, u.createLocation)(t, n, y(), E.location);
                    m.confirmTransitionTo(r, "REPLACE", e, function(t) {
                        t && (E.entries[E.index] = r, v({
                            action: "REPLACE",
                            location: r
                        }))
                    })
                },
                go: _,
                goBack: function() {
                    return _(-1)
                },
                goForward: function() {
                    return _(1)
                },
                canGo: function(t) {
                    var e = E.index + t;
                    return e >= 0 && e < E.entries.length
                },
                block: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return m.setPrompt(t)
                },
                listen: function(t) {
                    return m.appendListener(t)
                }
            };
        return E
    }
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        var n = {};
        for (var r in t) e.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
        return n
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(0),
        o = n.n(i),
        a = n(2),
        s = n.n(a),
        u = n(34),
        c = n(33),
        l = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        },
        f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        h = function(t) {
            var e = t.to,
                n = t.exact,
                i = t.strict,
                a = t.location,
                s = t.activeClassName,
                h = t.className,
                p = t.activeStyle,
                d = t.style,
                m = t.isActive,
                v = t.ariaCurrent,
                y = r(t, ["to", "exact", "strict", "location", "activeClassName", "className", "activeStyle", "style", "isActive", "ariaCurrent"]);
            return o.a.createElement(u.default, {
                path: "object" === (void 0 === e ? "undefined" : f(e)) ? e.pathname : e,
                exact: n,
                strict: i,
                location: a,
                children: function(t) {
                    var n = t.location,
                        r = t.match,
                        i = !!(m ? m(r, n) : r);
                    return o.a.createElement(c.default, l({
                        to: e,
                        className: i ? [h, s].filter(function(t) {
                            return t
                        }).join(" ") : h,
                        style: i ? l({}, d, p) : d,
                        "aria-current": i && v
                    }, y))
                }
            })
        };
    h.propTypes = {
        to: c.default.propTypes.to,
        exact: s.a.bool,
        strict: s.a.bool,
        location: s.a.object,
        activeClassName: s.a.string,
        className: s.a.string,
        activeStyle: s.a.object,
        style: s.a.object,
        isActive: s.a.func,
        ariaCurrent: s.a.oneOf(["page", "step", "location", "true"])
    }, h.defaultProps = {
        activeClassName: "active",
        ariaCurrent: "true"
    }, e.default = h
}, function(t, e, n) {
    function r(t, e) {
        for (var n, r = [], i = 0, o = 0, a = "", c = e && e.delimiter || "/"; null != (n = y.exec(t));) {
            var l = n[0],
                f = n[1],
                h = n.index;
            if (a += t.slice(o, h), o = h + l.length, f) a += f[1];
            else {
                var p = t[o],
                    d = n[2],
                    m = n[3],
                    v = n[4],
                    g = n[5],
                    b = n[6],
                    w = n[7];
                a && (r.push(a), a = "");
                var _ = null != d && null != p && p !== d,
                    E = "+" === b || "*" === b,
                    T = "?" === b || "*" === b,
                    S = n[2] || c,
                    P = v || g;
                r.push({
                    name: m || i++,
                    prefix: d || "",
                    delimiter: S,
                    optional: T,
                    repeat: E,
                    partial: _,
                    asterisk: !!w,
                    pattern: P ? u(P) : w ? ".*" : "[^" + s(S) + "]+?"
                })
            }
        }
        return o < t.length && (a += t.substr(o)), a && r.push(a), r
    }

    function i(t) {
        return encodeURI(t).replace(/[\/?#]/g, function(t) {
            return "%" + t.charCodeAt(0).toString(16).toUpperCase()
        })
    }

    function o(t) {
        return encodeURI(t).replace(/[?#]/g, function(t) {
            return "%" + t.charCodeAt(0).toString(16).toUpperCase()
        })
    }

    function a(t) {
        for (var e = new Array(t.length), n = 0; n < t.length; n++) "object" == typeof t[n] && (e[n] = new RegExp("^(?:" + t[n].pattern + ")$"));
        return function(n, r) {
            for (var a = "", s = n || {}, u = (r || {}).pretty ? i : encodeURIComponent, c = 0; c < t.length; c++) {
                var l = t[c];
                if ("string" != typeof l) {
                    var f, h = s[l.name];
                    if (null == h) {
                        if (l.optional) {
                            l.partial && (a += l.prefix);
                            continue
                        }
                        throw new TypeError('Expected "' + l.name + '" to be defined')
                    }
                    if (v(h)) {
                        if (!l.repeat) throw new TypeError('Expected "' + l.name + '" to not repeat, but received `' + JSON.stringify(h) + "`");
                        if (0 === h.length) {
                            if (l.optional) continue;
                            throw new TypeError('Expected "' + l.name + '" to not be empty')
                        }
                        for (var p = 0; p < h.length; p++) {
                            if (f = u(h[p]), !e[c].test(f)) throw new TypeError('Expected all "' + l.name + '" to match "' + l.pattern + '", but received `' + JSON.stringify(f) + "`");
                            a += (0 === p ? l.prefix : l.delimiter) + f
                        }
                    } else {
                        if (f = l.asterisk ? o(h) : u(h), !e[c].test(f)) throw new TypeError('Expected "' + l.name + '" to match "' + l.pattern + '", but received "' + f + '"');
                        a += l.prefix + f
                    }
                } else a += l
            }
            return a
        }
    }

    function s(t) {
        return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1")
    }

    function u(t) {
        return t.replace(/([=!:$\/()])/g, "\\$1")
    }

    function c(t, e) {
        return t.keys = e, t
    }

    function l(t) {
        return t.sensitive ? "" : "i"
    }

    function f(t, e) {
        var n = t.source.match(/\((?!\?)/g);
        if (n)
            for (var r = 0; r < n.length; r++) e.push({
                name: r,
                prefix: null,
                delimiter: null,
                optional: !1,
                repeat: !1,
                partial: !1,
                asterisk: !1,
                pattern: null
            });
        return c(t, e)
    }

    function h(t, e, n) {
        for (var r = [], i = 0; i < t.length; i++) r.push(m(t[i], e, n).source);
        return c(new RegExp("(?:" + r.join("|") + ")", l(n)), e)
    }

    function p(t, e, n) {
        return d(r(t, n), e, n)
    }

    function d(t, e, n) {
        v(e) || (n = e || n, e = []);
        for (var r = (n = n || {}).strict, i = !1 !== n.end, o = "", a = 0; a < t.length; a++) {
            var u = t[a];
            if ("string" == typeof u) o += s(u);
            else {
                var f = s(u.prefix),
                    h = "(?:" + u.pattern + ")";
                e.push(u), u.repeat && (h += "(?:" + f + h + ")*"), o += h = u.optional ? u.partial ? f + "(" + h + ")?" : "(?:" + f + "(" + h + "))?" : f + "(" + h + ")"
            }
        }
        var p = s(n.delimiter || "/"),
            d = o.slice(-p.length) === p;
        return r || (o = (d ? o.slice(0, -p.length) : o) + "(?:" + p + "(?=$))?"), o += i ? "$" : r && d ? "" : "(?=" + p + "|$)", c(new RegExp("^" + o, l(n)), e)
    }

    function m(t, e, n) {
        return v(e) || (n = e || n, e = []), n = n || {}, t instanceof RegExp ? f(t, e) : v(t) ? h(t, e, n) : p(t, e, n)
    }
    var v = n(93);
    t.exports = m, t.exports.parse = r, t.exports.compile = function(t, e) {
        return a(r(t, e))
    }, t.exports.tokensToFunction = a, t.exports.tokensToRegExp = d;
    var y = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g")
}, function(t, e) {
    t.exports = Array.isArray || function(t) {
        return "[object Array]" == Object.prototype.toString.call(t)
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(95);
    e.default = r.default
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = n(0),
        s = n.n(a),
        u = n(2),
        c = n.n(u),
        l = n(3),
        f = n.n(l),
        h = function(t) {
            function e() {
                return r(this, e), i(this, t.apply(this, arguments))
            }
            return o(e, t), e.prototype.enable = function(t) {
                this.unblock && this.unblock(), this.unblock = this.context.router.history.block(t)
            }, e.prototype.disable = function() {
                this.unblock && (this.unblock(), this.unblock = null)
            }, e.prototype.componentWillMount = function() {
                f()(this.context.router, "You should not use <Prompt> outside a <Router>"), this.props.when && this.enable(this.props.message)
            }, e.prototype.componentWillReceiveProps = function(t) {
                t.when ? this.props.when && this.props.message === t.message || this.enable(t.message) : this.disable()
            }, e.prototype.componentWillUnmount = function() {
                this.disable()
            }, e.prototype.render = function() {
                return null
            }, e
        }(s.a.Component);
    h.propTypes = {
        when: c.a.bool,
        message: c.a.oneOfType([c.a.func, c.a.string]).isRequired
    }, h.defaultProps = {
        when: !0
    }, h.contextTypes = {
        router: c.a.shape({
            history: c.a.shape({
                block: c.a.func.isRequired
            }).isRequired
        }).isRequired
    }, e.default = h
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(97);
    e.default = r.default
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = n(0),
        s = n.n(a),
        u = n(2),
        c = n.n(u),
        l = n(1),
        f = n.n(l),
        h = n(3),
        p = n.n(h),
        d = n(98),
        m = function(t) {
            function e() {
                return r(this, e), i(this, t.apply(this, arguments))
            }
            return o(e, t), e.prototype.isStatic = function() {
                return this.context.router && this.context.router.staticContext
            }, e.prototype.componentWillMount = function() {
                p()(this.context.router, "You should not use <Redirect> outside a <Router>"), this.isStatic() && this.perform()
            }, e.prototype.componentDidMount = function() {
                this.isStatic() || this.perform()
            }, e.prototype.componentDidUpdate = function(t) {
                var e = Object(d.createLocation)(t.to),
                    n = Object(d.createLocation)(this.props.to);
                Object(d.locationsAreEqual)(e, n) ? f()(!1, "You tried to redirect to the same route you're currently on: \"" + n.pathname + n.search + '"') : this.perform()
            }, e.prototype.perform = function() {
                var t = this.context.router.history,
                    e = this.props,
                    n = e.push,
                    r = e.to;
                n ? t.push(r) : t.replace(r)
            }, e.prototype.render = function() {
                return null
            }, e
        }(s.a.Component);
    m.propTypes = {
        push: c.a.bool,
        from: c.a.string,
        to: c.a.oneOfType([c.a.string, c.a.object]).isRequired
    }, m.defaultProps = {
        push: !1
    }, m.contextTypes = {
        router: c.a.shape({
            history: c.a.shape({
                push: c.a.func.isRequired,
                replace: c.a.func.isRequired
            }).isRequired,
            staticContext: c.a.object
        }).isRequired
    }, e.default = m
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(99);
    n.d(e, "createBrowserHistory", function() {
        return r.default
    });
    var i = n(100);
    n.d(e, "createHashHistory", function() {
        return i.default
    });
    var o = n(101);
    n.d(e, "createMemoryHistory", function() {
        return o.default
    });
    var a = n(7);
    n.d(e, "createLocation", function() {
        return a.createLocation
    }), n.d(e, "locationsAreEqual", function() {
        return a.locationsAreEqual
    });
    var s = n(5);
    n.d(e, "parsePath", function() {
        return s.parsePath
    }), n.d(e, "createPath", function() {
        return s.createPath
    })
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(1),
        i = n.n(r),
        o = n(3),
        a = n.n(o),
        s = n(7),
        u = n(5),
        c = n(16),
        l = n(36),
        f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        h = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        },
        p = function() {
            try {
                return window.history.state || {}
            } catch (t) {
                return {}
            }
        };
    e.default = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        a()(l.canUseDOM, "Browser history needs a DOM");
        var e = window.history,
            n = Object(l.supportsHistory)(),
            r = !Object(l.supportsPopStateOnHashChange)(),
            o = t.forceRefresh,
            d = void 0 !== o && o,
            m = t.getUserConfirmation,
            v = void 0 === m ? l.getConfirmation : m,
            y = t.keyLength,
            g = void 0 === y ? 6 : y,
            b = t.basename ? Object(u.stripTrailingSlash)(Object(u.addLeadingSlash)(t.basename)) : "",
            w = function(t) {
                var e = t || {},
                    n = e.key,
                    r = e.state,
                    o = window.location,
                    a = o.pathname + o.search + o.hash;
                return i()(!b || Object(u.hasBasename)(a, b), 'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "' + a + '" to begin with "' + b + '".'), b && (a = Object(u.stripBasename)(a, b)), Object(s.createLocation)(a, r, n)
            },
            _ = function() {
                return Math.random().toString(36).substr(2, g)
            },
            E = Object(c.default)(),
            T = function(t) {
                h(j, t), j.length = e.length, E.notifyListeners(j.location, j.action)
            },
            S = function(t) {
                Object(l.isExtraneousPopstateEvent)(t) || O(w(t.state))
            },
            P = function() {
                O(w(p()))
            },
            C = !1,
            O = function(t) {
                C ? (C = !1, T()) : E.confirmTransitionTo(t, "POP", v, function(e) {
                    e ? T({
                        action: "POP",
                        location: t
                    }) : k(t)
                })
            },
            k = function(t) {
                var e = j.location,
                    n = I.indexOf(e.key); - 1 === n && (n = 0);
                var r = I.indexOf(t.key); - 1 === r && (r = 0);
                var i = n - r;
                i && (C = !0, N(i))
            },
            x = w(p()),
            I = [x.key],
            A = function(t) {
                return b + Object(u.createPath)(t)
            },
            N = function(t) {
                e.go(t)
            },
            M = 0,
            R = function(t) {
                1 === (M += t) ? (Object(l.addEventListener)(window, "popstate", S), r && Object(l.addEventListener)(window, "hashchange", P)) : 0 === M && (Object(l.removeEventListener)(window, "popstate", S), r && Object(l.removeEventListener)(window, "hashchange", P))
            },
            D = !1,
            j = {
                length: e.length,
                action: "POP",
                location: x,
                createHref: A,
                push: function(t, r) {
                    i()(!("object" === (void 0 === t ? "undefined" : f(t)) && void 0 !== t.state && void 0 !== r), "You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");
                    var o = Object(s.createLocation)(t, r, _(), j.location);
                    E.confirmTransitionTo(o, "PUSH", v, function(t) {
                        if (t) {
                            var r = A(o),
                                a = o.key,
                                s = o.state;
                            if (n)
                                if (e.pushState({
                                        key: a,
                                        state: s
                                    }, null, r), d) window.location.href = r;
                                else {
                                    var u = I.indexOf(j.location.key),
                                        c = I.slice(0, -1 === u ? 0 : u + 1);
                                    c.push(o.key), I = c, T({
                                        action: "PUSH",
                                        location: o
                                    })
                                }
                            else i()(void 0 === s, "Browser history cannot push state in browsers that do not support HTML5 history"), window.location.href = r
                        }
                    })
                },
                replace: function(t, r) {
                    i()(!("object" === (void 0 === t ? "undefined" : f(t)) && void 0 !== t.state && void 0 !== r), "You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");
                    var o = Object(s.createLocation)(t, r, _(), j.location);
                    E.confirmTransitionTo(o, "REPLACE", v, function(t) {
                        if (t) {
                            var r = A(o),
                                a = o.key,
                                s = o.state;
                            if (n)
                                if (e.replaceState({
                                        key: a,
                                        state: s
                                    }, null, r), d) window.location.replace(r);
                                else {
                                    var u = I.indexOf(j.location.key); - 1 !== u && (I[u] = o.key), T({
                                        action: "REPLACE",
                                        location: o
                                    })
                                }
                            else i()(void 0 === s, "Browser history cannot replace state in browsers that do not support HTML5 history"), window.location.replace(r)
                        }
                    })
                },
                go: N,
                goBack: function() {
                    return N(-1)
                },
                goForward: function() {
                    return N(1)
                },
                block: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        e = E.setPrompt(t);
                    return D || (R(1), D = !0),
                        function() {
                            return D && (D = !1, R(-1)), e()
                        }
                },
                listen: function(t) {
                    var e = E.appendListener(t);
                    return R(1),
                        function() {
                            R(-1), e()
                        }
                }
            };
        return j
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(1),
        i = n.n(r),
        o = n(3),
        a = n.n(o),
        s = n(7),
        u = n(5),
        c = n(16),
        l = n(36),
        f = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        },
        h = {
            hashbang: {
                encodePath: function(t) {
                    return "!" === t.charAt(0) ? t : "!/" + Object(u.stripLeadingSlash)(t)
                },
                decodePath: function(t) {
                    return "!" === t.charAt(0) ? t.substr(1) : t
                }
            },
            noslash: {
                encodePath: u.stripLeadingSlash,
                decodePath: u.addLeadingSlash
            },
            slash: {
                encodePath: u.addLeadingSlash,
                decodePath: u.addLeadingSlash
            }
        },
        p = function() {
            var t = window.location.href,
                e = t.indexOf("#");
            return -1 === e ? "" : t.substring(e + 1)
        },
        d = function(t) {
            return window.location.hash = t
        },
        m = function(t) {
            var e = window.location.href.indexOf("#");
            window.location.replace(window.location.href.slice(0, e >= 0 ? e : 0) + "#" + t)
        };
    e.default = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        a()(l.canUseDOM, "Hash history needs a DOM");
        var e = window.history,
            n = Object(l.supportsGoWithoutReloadUsingHash)(),
            r = t.getUserConfirmation,
            o = void 0 === r ? l.getConfirmation : r,
            v = t.hashType,
            y = void 0 === v ? "slash" : v,
            g = t.basename ? Object(u.stripTrailingSlash)(Object(u.addLeadingSlash)(t.basename)) : "",
            b = h[y],
            w = b.encodePath,
            _ = b.decodePath,
            E = function() {
                var t = _(p());
                return i()(!g || Object(u.hasBasename)(t, g), 'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "' + t + '" to begin with "' + g + '".'), g && (t = Object(u.stripBasename)(t, g)), Object(s.createLocation)(t)
            },
            T = Object(c.default)(),
            S = function(t) {
                f(U, t), U.length = e.length, T.notifyListeners(U.location, U.action)
            },
            P = !1,
            C = null,
            O = function() {
                var t = p(),
                    e = w(t);
                if (t !== e) m(e);
                else {
                    var n = E(),
                        r = U.location;
                    if (!P && Object(s.locationsAreEqual)(r, n)) return;
                    if (C === Object(u.createPath)(n)) return;
                    C = null, k(n)
                }
            },
            k = function(t) {
                P ? (P = !1, S()) : T.confirmTransitionTo(t, "POP", o, function(e) {
                    e ? S({
                        action: "POP",
                        location: t
                    }) : x(t)
                })
            },
            x = function(t) {
                var e = U.location,
                    n = M.lastIndexOf(Object(u.createPath)(e)); - 1 === n && (n = 0);
                var r = M.lastIndexOf(Object(u.createPath)(t)); - 1 === r && (r = 0);
                var i = n - r;
                i && (P = !0, R(i))
            },
            I = p(),
            A = w(I);
        I !== A && m(A);
        var N = E(),
            M = [Object(u.createPath)(N)],
            R = function(t) {
                i()(n, "Hash history go(n) causes a full page reload in this browser"), e.go(t)
            },
            D = 0,
            j = function(t) {
                1 === (D += t) ? Object(l.addEventListener)(window, "hashchange", O) : 0 === D && Object(l.removeEventListener)(window, "hashchange", O)
            },
            L = !1,
            U = {
                length: e.length,
                action: "POP",
                location: N,
                createHref: function(t) {
                    return "#" + w(g + Object(u.createPath)(t))
                },
                push: function(t, e) {
                    i()(void 0 === e, "Hash history cannot push state; it is ignored");
                    var n = Object(s.createLocation)(t, void 0, void 0, U.location);
                    T.confirmTransitionTo(n, "PUSH", o, function(t) {
                        if (t) {
                            var e = Object(u.createPath)(n),
                                r = w(g + e);
                            if (p() !== r) {
                                C = e, d(r);
                                var o = M.lastIndexOf(Object(u.createPath)(U.location)),
                                    a = M.slice(0, -1 === o ? 0 : o + 1);
                                a.push(e), M = a, S({
                                    action: "PUSH",
                                    location: n
                                })
                            } else i()(!1, "Hash history cannot PUSH the same path; a new entry will not be added to the history stack"), S()
                        }
                    })
                },
                replace: function(t, e) {
                    i()(void 0 === e, "Hash history cannot replace state; it is ignored");
                    var n = Object(s.createLocation)(t, void 0, void 0, U.location);
                    T.confirmTransitionTo(n, "REPLACE", o, function(t) {
                        if (t) {
                            var e = Object(u.createPath)(n),
                                r = w(g + e);
                            p() !== r && (C = e, m(r));
                            var i = M.indexOf(Object(u.createPath)(U.location)); - 1 !== i && (M[i] = e), S({
                                action: "REPLACE",
                                location: n
                            })
                        }
                    })
                },
                go: R,
                goBack: function() {
                    return R(-1)
                },
                goForward: function() {
                    return R(1)
                },
                block: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        e = T.setPrompt(t);
                    return L || (j(1), L = !0),
                        function() {
                            return L && (L = !1, j(-1)), e()
                        }
                },
                listen: function(t) {
                    var e = T.appendListener(t);
                    return j(1),
                        function() {
                            j(-1), e()
                        }
                }
            };
        return U
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(1),
        i = n.n(r),
        o = n(5),
        a = n(7),
        s = n(16),
        u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        c = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        },
        l = function(t, e, n) {
            return Math.min(Math.max(t, e), n)
        };
    e.default = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = t.getUserConfirmation,
            n = t.initialEntries,
            r = void 0 === n ? ["/"] : n,
            f = t.initialIndex,
            h = void 0 === f ? 0 : f,
            p = t.keyLength,
            d = void 0 === p ? 6 : p,
            m = Object(s.default)(),
            v = function(t) {
                c(E, t), E.length = E.entries.length, m.notifyListeners(E.location, E.action)
            },
            y = function() {
                return Math.random().toString(36).substr(2, d)
            },
            g = l(h, 0, r.length - 1),
            b = r.map(function(t) {
                return "string" == typeof t ? Object(a.createLocation)(t, void 0, y()) : Object(a.createLocation)(t, void 0, t.key || y())
            }),
            w = o.createPath,
            _ = function(t) {
                var n = l(E.index + t, 0, E.entries.length - 1),
                    r = E.entries[n];
                m.confirmTransitionTo(r, "POP", e, function(t) {
                    t ? v({
                        action: "POP",
                        location: r,
                        index: n
                    }) : v()
                })
            },
            E = {
                length: b.length,
                action: "POP",
                location: b[g],
                index: g,
                entries: b,
                createHref: w,
                push: function(t, n) {
                    i()(!("object" === (void 0 === t ? "undefined" : u(t)) && void 0 !== t.state && void 0 !== n), "You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");
                    var r = Object(a.createLocation)(t, n, y(), E.location);
                    m.confirmTransitionTo(r, "PUSH", e, function(t) {
                        if (t) {
                            var e = E.index + 1,
                                n = E.entries.slice(0);
                            n.length > e ? n.splice(e, n.length - e, r) : n.push(r), v({
                                action: "PUSH",
                                location: r,
                                index: e,
                                entries: n
                            })
                        }
                    })
                },
                replace: function(t, n) {
                    i()(!("object" === (void 0 === t ? "undefined" : u(t)) && void 0 !== t.state && void 0 !== n), "You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");
                    var r = Object(a.createLocation)(t, n, y(), E.location);
                    m.confirmTransitionTo(r, "REPLACE", e, function(t) {
                        t && (E.entries[E.index] = r, v({
                            action: "REPLACE",
                            location: r
                        }))
                    })
                },
                go: _,
                goBack: function() {
                    return _(-1)
                },
                goForward: function() {
                    return _(1)
                },
                canGo: function(t) {
                    var e = E.index + t;
                    return e >= 0 && e < E.entries.length
                },
                block: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return m.setPrompt(t)
                },
                listen: function(t) {
                    return m.appendListener(t)
                }
            };
        return E
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(103);
    e.default = r.default
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        var n = {};
        for (var r in t) e.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
        return n
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function a(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(1),
        u = n.n(s),
        c = n(3),
        l = n.n(c),
        f = n(0),
        h = n.n(f),
        p = n(2),
        d = n.n(p),
        m = n(4),
        v = (n.n(m), n(14)),
        y = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        },
        g = function(t) {
            var e = t.pathname,
                n = void 0 === e ? "/" : e,
                r = t.search,
                i = void 0 === r ? "" : r,
                o = t.hash,
                a = void 0 === o ? "" : o;
            return {
                pathname: n,
                search: "?" === i ? "" : i,
                hash: "#" === a ? "" : a
            }
        },
        b = function(t, e) {
            return t ? y({}, e, {
                pathname: Object(m.addLeadingSlash)(t) + e.pathname
            }) : e
        },
        w = function(t, e) {
            if (!t) return e;
            var n = Object(m.addLeadingSlash)(t);
            return 0 !== e.pathname.indexOf(n) ? e : y({}, e, {
                pathname: e.pathname.substr(n.length)
            })
        },
        _ = function(t) {
            return "string" == typeof t ? Object(m.parsePath)(t) : g(t)
        },
        E = function(t) {
            return "string" == typeof t ? t : Object(m.createPath)(t)
        },
        T = function(t) {
            return function() {
                l()(!1, "You cannot %s with <StaticRouter>", t)
            }
        },
        S = function() {},
        P = function(t) {
            function e() {
                var n, r, a;
                i(this, e);
                for (var s = arguments.length, u = Array(s), c = 0; c < s; c++) u[c] = arguments[c];
                return n = r = o(this, t.call.apply(t, [this].concat(u))), r.createHref = function(t) {
                    return Object(m.addLeadingSlash)(r.props.basename + E(t))
                }, r.handlePush = function(t) {
                    var e = r.props,
                        n = e.basename,
                        i = e.context;
                    i.action = "PUSH", i.location = b(n, _(t)), i.url = E(i.location)
                }, r.handleReplace = function(t) {
                    var e = r.props,
                        n = e.basename,
                        i = e.context;
                    i.action = "REPLACE", i.location = b(n, _(t)), i.url = E(i.location)
                }, r.handleListen = function() {
                    return S
                }, r.handleBlock = function() {
                    return S
                }, a = n, o(r, a)
            }
            return a(e, t), e.prototype.getChildContext = function() {
                return {
                    router: {
                        staticContext: this.props.context
                    }
                }
            }, e.prototype.componentWillMount = function() {
                u()(!this.props.history, "<StaticRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { StaticRouter as Router }`.")
            }, e.prototype.render = function() {
                var t = this.props,
                    e = t.basename,
                    n = (t.context, t.location),
                    i = r(t, ["basename", "context", "location"]),
                    o = {
                        createHref: this.createHref,
                        action: "POP",
                        location: w(e, _(n)),
                        push: this.handlePush,
                        replace: this.handleReplace,
                        go: T("go"),
                        goBack: T("goBack"),
                        goForward: T("goForward"),
                        listen: this.handleListen,
                        block: this.handleBlock
                    };
                return h.a.createElement(v.default, y({}, i, {
                    history: o
                }))
            }, e
        }(h.a.Component);
    P.propTypes = {
        basename: d.a.string,
        context: d.a.object.isRequired,
        location: d.a.oneOfType([d.a.string, d.a.object])
    }, P.defaultProps = {
        basename: "",
        location: "/"
    }, P.childContextTypes = {
        router: d.a.object.isRequired
    }, e.default = P
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(105);
    e.default = r.default
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = n(0),
        s = n.n(a),
        u = n(2),
        c = n.n(u),
        l = n(1),
        f = n.n(l),
        h = n(3),
        p = n.n(h),
        d = n(15),
        m = function(t) {
            function e() {
                return r(this, e), i(this, t.apply(this, arguments))
            }
            return o(e, t), e.prototype.componentWillMount = function() {
                p()(this.context.router, "You should not use <Switch> outside a <Router>")
            }, e.prototype.componentWillReceiveProps = function(t) {
                f()(!(t.location && !this.props.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.'), f()(!(!t.location && this.props.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.')
            }, e.prototype.render = function() {
                var t = this.context.router.route,
                    e = this.props.children,
                    n = this.props.location || t.location,
                    r = void 0,
                    i = void 0;
                return s.a.Children.forEach(e, function(e) {
                    if (s.a.isValidElement(e)) {
                        var o = e.props,
                            a = o.path,
                            u = o.exact,
                            c = o.strict,
                            l = o.sensitive,
                            f = o.from,
                            h = a || f;
                        null == r && (i = e, r = h ? Object(d.default)(n.pathname, {
                            path: h,
                            exact: u,
                            strict: c,
                            sensitive: l
                        }) : t.match)
                    }
                }), r ? s.a.cloneElement(i, {
                    location: n,
                    computedMatch: r
                }) : null
            }, e
        }(s.a.Component);
    m.contextTypes = {
        router: c.a.shape({
            route: c.a.object.isRequired
        }).isRequired
    }, m.propTypes = {
        children: c.a.node,
        location: c.a.object
    }, e.default = m
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(15);
    e.default = r.default
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(108);
    e.default = r.default
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        var n = {};
        for (var r in t) e.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
        return n
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(0),
        o = n.n(i),
        a = n(2),
        s = n.n(a),
        u = n(21),
        c = n.n(u),
        l = n(35),
        f = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        };
    e.default = function(t) {
        var e = function(e) {
            var n = e.wrappedComponentRef,
                i = r(e, ["wrappedComponentRef"]);
            return o.a.createElement(l.default, {
                render: function(e) {
                    return o.a.createElement(t, f({}, i, e, {
                        ref: n
                    }))
                }
            })
        };
        return e.displayName = "withRouter(" + (t.displayName || t.name) + ")", e.WrappedComponent = t, e.propTypes = {
            wrappedComponentRef: s.a.func
        }, c()(e, t)
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return function(e) {
            var n = e.dispatch,
                r = e.getState;
            return function(e) {
                return function(i) {
                    return "function" == typeof i ? i(n, r, t) : e(i)
                }
            }
        }
    }
    e.__esModule = !0;
    var i = r();
    i.withExtraArgument = r, e.default = i
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        return t === e
    }

    function i(t, e, n) {
        if (null === e || null === n || e.length !== n.length) return !1;
        for (var r = e.length, i = 0; i < r; i++)
            if (!t(e[i], n[i])) return !1;
        return !0
    }

    function o(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r,
            n = null,
            o = null;
        return function() {
            return i(e, n, arguments) || (o = t.apply(null, arguments)), n = arguments, o
        }
    }

    function a(t) {
        var e = Array.isArray(t[0]) ? t[0] : t;
        if (!e.every(function(t) {
                return "function" == typeof t
            })) {
            var n = e.map(function(t) {
                return typeof t
            }).join(", ");
            throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: [" + n + "]")
        }
        return e
    }

    function s(t) {
        for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
        return function() {
            for (var e = arguments.length, r = Array(e), i = 0; i < e; i++) r[i] = arguments[i];
            var s = 0,
                u = r.pop(),
                c = a(r),
                l = t.apply(void 0, [function() {
                    return s++, u.apply(null, arguments)
                }].concat(n)),
                f = o(function() {
                    for (var t = [], e = c.length, n = 0; n < e; n++) t.push(c[n].apply(null, arguments));
                    return l.apply(null, t)
                });
            return f.resultFunc = u, f.recomputations = function() {
                return s
            }, f.resetRecomputations = function() {
                return s = 0
            }, f
        }
    }
    e.__esModule = !0, e.defaultMemoize = o, e.createSelectorCreator = s, e.createStructuredSelector = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u;
        if ("object" != typeof t) throw new Error("createStructuredSelector expects first argument to be an object where each property is a selector, instead received a " + typeof t);
        var n = Object.keys(t);
        return e(n.map(function(e) {
            return t[e]
        }), function() {
            for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
            return e.reduce(function(t, e, r) {
                return t[n[r]] = e, t
            }, {})
        })
    };
    var u = e.createSelector = s(o)
}, function(t, e, n) {
    var r;
    ! function() {
        var i = {};
        (function(t) {
            function e(t, e) {
                var n = t.split("."),
                    r = Fa;
                n[0] in r || !r.execScript || r.execScript("var " + n[0]);
                for (var i; n.length && (i = n.shift());) n.length || void 0 === e ? r = r[i] ? r[i] : r[i] = {} : r[i] = e
            }

            function n(t) {
                function e() {}
                var n = ye;
                e.prototype = n.prototype, t.Ze = n.prototype, t.prototype = new e, t.prototype.constructor = t, t.Xe = function(t, e, r) {
                    return n.prototype[e].apply(t, Array.prototype.slice.call(arguments, 2))
                }
            }

            function r(t) {
                this.c = Math.exp(Math.log(.5) / t), this.b = this.a = 0
            }

            function i(t, e, n) {
                var r = Math.pow(t.c, e);
                n = n * (1 - r) + r * t.a, isNaN(n) || (t.a = n, t.b += e)
            }

            function o(t) {
                return t.a / (1 - Math.pow(t.c, t.b))
            }

            function a() {
                this.b = new r(2), this.c = new r(5), this.a = 0
            }

            function s() {}

            function u(t, e, n, r) {
                this.severity = t, this.category = e, this.code = n, this.data = Array.prototype.slice.call(arguments, 3), this.handled = !1
            }

            function c(t) {
                var e;
                t instanceof c ? (l(this, t.ca), this.Ba = t.Ba, this.ha = t.ha, f(this, t.Ia), this.$ = t.$, h(this, y(t.a)), this.ua = t.ua) : t && (e = String(t).match(Ha)) ? (l(this, e[1] || "", !0), this.Ba = p(e[2] || ""), this.ha = p(e[3] || "", !0), f(this, e[4]), this.$ = p(e[5] || "", !0), h(this, e[6] || "", !0), this.ua = p(e[7] || "")) : this.a = new v(null)
            }

            function l(t, e, n) {
                t.ca = n ? p(e, !0) : e, t.ca && (t.ca = t.ca.replace(/:$/, ""))
            }

            function f(t, e) {
                if (e) {
                    if (e = Number(e), isNaN(e) || 0 > e) throw Error("Bad port number " + e);
                    t.Ia = e
                } else t.Ia = null
            }

            function h(t, e, n) {
                e instanceof v ? t.a = e : (n || (e = d(e, Va)), t.a = new v(e))
            }

            function p(t, e) {
                return t ? e ? decodeURI(t) : decodeURIComponent(t) : ""
            }

            function d(t, e, n) {
                return "string" == typeof t ? (t = encodeURI(t).replace(e, m), n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), t) : null
            }

            function m(t) {
                return "%" + ((t = t.charCodeAt(0)) >> 4 & 15).toString(16) + (15 & t).toString(16)
            }

            function v(t) {
                this.b = t || null
            }

            function y(t) {
                var e = new v;
                if (e.b = t.b, t.a) {
                    var n, r = {};
                    for (n in t.a) r[n] = t.a[n].concat();
                    e.a = r, e.c = t.c
                }
                return e
            }

            function g() {
                var t, e, n = new Promise(function(n, r) {
                    t = n, e = r
                });
                return n.resolve = t, n.reject = e, n
            }

            function b(t, e) {
                var n = _();
                this.i = null == t.maxAttempts ? n.maxAttempts : t.maxAttempts, this.f = null == t.baseDelay ? n.baseDelay : t.baseDelay, this.h = null == t.fuzzFactor ? n.fuzzFactor : t.fuzzFactor, this.g = null == t.backoffFactor ? n.backoffFactor : t.backoffFactor, this.a = 0, this.b = this.f, (this.c = e || !1) && (this.a = 1)
            }

            function w(e) {
                if (e.a >= e.i) {
                    if (!e.c) return Promise.reject();
                    e.a = 1, e.b = e.f
                }
                var n = new g;
                return e.a ? (t.setTimeout(n.resolve, e.b * (1 + (2 * Math.random() - 1) * e.h)), e.b *= e.g) : n.resolve(), e.a++, n
            }

            function _() {
                return {
                    maxAttempts: 2,
                    baseDelay: 1e3,
                    backoffFactor: 2,
                    fuzzFactor: .5,
                    timeout: 0
                }
            }

            function E(t, e, n, r, i) {
                var o, a = i in r;
                for (o in e) {
                    var s = i + "." + o,
                        u = a ? r[i] : n[o];
                    (a || o in t) && (void 0 === e[o] ? void 0 === u || a ? delete t[o] : t[o] = u : u.constructor == Object && e[o] && e[o].constructor == Object ? (t[o] || (t[o] = u), E(t[o], e[o], u, r, s)) : typeof e[o] == typeof u && null != e[o] && e[o].constructor == u.constructor && (t[o] = e[o]))
                }
            }

            function T(t) {
                return JSON.parse(JSON.stringify(t))
            }

            function S(t, e) {
                return t.reduce(function(t, e, n) {
                    return e.catch(t.bind(null, n))
                }.bind(null, e), Promise.reject())
            }

            function P(t, e) {
                return t.concat(e)
            }

            function C() {}

            function O(t) {
                return null != t
            }

            function k(t, e, n) {
                return n.indexOf(t) == e
            }

            function x(t) {
                this.f = !1, this.a = [], this.b = [], this.c = [], this.g = t || null
            }

            function I(t, e) {
                return {
                    uris: t,
                    method: "GET",
                    body: null,
                    headers: {},
                    allowCrossSiteCredentials: !1,
                    retryParameters: e
                }
            }

            function A(t, e, n, r, i, o) {
                if (t.f) return Promise.reject();
                var a = new c(n.uris[i]),
                    s = a.ca;
                if (s || (s = location.protocol, s = s.slice(0, -1), l(a, s), n.uris[i] = a.toString()), !(s = Ka[s])) return Promise.reject(new u(2, 1, 1e3, a));
                var f = Date.now();
                return s(n.uris[i], n, e).then(function(t) {
                    void 0 == t.timeMs && (t.timeMs = Date.now() - f);
                    var n = Date.now(),
                        r = Promise.resolve();
                    return this.c.forEach(function(n) {
                        r = r.then(function() {
                            return Promise.resolve(n(e, t))
                        }.bind(this))
                    }), (r = r.catch(function(t) {
                        var e = 2;
                        throw t instanceof u && (e = t.severity), new u(e, 1, 1007, t)
                    })).then(function() {
                        return t.timeMs += Date.now() - n, t.timeMs += o, t
                    })
                }.bind(t)).catch(function(t) {
                    if (t && 1 == t.severity) return i = (i + 1) % n.uris.length, w(r).then(function() {
                        return A(this, e, n, r, i, o)
                    }.bind(this), function() {
                        throw t
                    });
                    throw t
                }.bind(t))
            }

            function N(t, e) {
                for (var n = [], r = 0; r < t.length; ++r) {
                    for (var i = !1, o = 0; o < n.length && !(i = e ? e(t[r], n[o]) : t[r] === n[o]); ++o);
                    i || n.push(t[r])
                }
                return n
            }

            function M(t, e, n) {
                for (var r = 0; r < t.length; ++r)
                    if (n(t[r], e)) return r;
                return -1
            }

            function R(t, e) {
                var n = t.indexOf(e); - 1 < n && t.splice(n, 1)
            }

            function D() {
                this.a = {}
            }

            function j() {
                this.a = new D
            }

            function L(t, e, n, r) {
                t.a && (e = new H(e, n, r), t.a.push(n, e))
            }

            function U(t, e, n, r) {
                L(t, e, n, function(t) {
                    this.la(e, n), r(t)
                }.bind(t))
            }

            function F(t) {
                if (t.a) {
                    var e, n = t.a,
                        r = [];
                    for (e in n.a) r.push.apply(r, n.a[e]);
                    for (n = 0; n < r.length; ++n) r[n].la();
                    t.a.a = {}
                }
            }

            function H(t, e, n) {
                this.target = t, this.type = e, this.a = n, this.target.addEventListener(e, n, !1)
            }

            function B(t, e) {
                if (!e.length) return t;
                var n = e.map(function(t) {
                    return new c(t)
                });
                return t.map(function(t) {
                    return new c(t)
                }).map(function(t) {
                    return n.map(t.resolve.bind(t))
                }).reduce(P, []).map(function(t) {
                    return t.toString()
                })
            }

            function z(t, e) {
                return {
                    keySystem: t,
                    licenseServerUri: "",
                    distinctiveIdentifierRequired: !1,
                    persistentStateRequired: !1,
                    audioRobustness: "",
                    videoRobustness: "",
                    serverCertificate: null,
                    initData: e || [],
                    keyIds: []
                }
            }

            function q(t) {
                return !t || !Object.keys(t).length
            }

            function V(t) {
                return Object.keys(t).map(function(e) {
                    return t[e]
                })
            }

            function W(t, e) {
                return Object.keys(t).reduce(function(n, r) {
                    return n[r] = e(t[r], r), n
                }, {})
            }

            function K(t, e) {
                return Object.keys(t).every(function(n) {
                    return e(n, t[n])
                })
            }

            function Y(t, e) {
                Object.keys(t).forEach(function(n) {
                    e(n, t[n])
                })
            }

            function G(t, e) {
                var n = t;
                return e && (n += '; codecs="' + e + '"'), n
            }

            function $(t) {
                if (!t) return "";
                239 == (t = new Uint8Array(t))[0] && 187 == t[1] && 191 == t[2] && (t = t.subarray(3)), t = escape(Z(t));
                try {
                    return decodeURIComponent(t)
                } catch (t) {
                    throw new u(2, 2, 2004)
                }
            }

            function X(t, e, n) {
                if (!t) return "";
                if (!n && t.byteLength % 2) throw new u(2, 2, 2004);
                if (t instanceof ArrayBuffer) var r = t;
                else(n = new Uint8Array(t.byteLength)).set(new Uint8Array(t)), r = n.buffer;
                t = Math.floor(t.byteLength / 2), n = new Uint16Array(t), r = new DataView(r);
                for (var i = 0; i < t; i++) n[i] = r.getUint16(2 * i, e);
                return Z(n)
            }

            function J(t) {
                var e = new Uint8Array(t);
                if (239 == e[0] && 187 == e[1] && 191 == e[2]) return $(e);
                if (254 == e[0] && 255 == e[1]) return X(e.subarray(2), !1);
                if (255 == e[0] && 254 == e[1]) return X(e.subarray(2), !0);
                var n = function(t, e) {
                    return t.byteLength <= e || 32 <= t[e] && 126 >= t[e]
                }.bind(null, e);
                if (!e[0] && !e[2]) return X(t, !1);
                if (!e[1] && !e[3]) return X(t, !0);
                if (n(0) && n(1) && n(2) && n(3)) return $(t);
                throw new u(2, 2, 2003)
            }

            function Q(t) {
                t = unescape(encodeURIComponent(t));
                for (var e = new Uint8Array(t.length), n = 0; n < t.length; ++n) e[n] = t.charCodeAt(n);
                return e.buffer
            }

            function Z(t) {
                for (var e = "", n = 0; n < t.length; n += 16e3) e += String.fromCharCode.apply(null, t.subarray(n, n + 16e3));
                return e
            }

            function tt(t) {
                this.a = null, this.b = function() {
                    this.a = null, t()
                }.bind(this)
            }

            function et(t) {
                t.cancel(), t.a = setTimeout(t.b, 500)
            }

            function nt(e, n) {
                var r = void 0 == n || n,
                    i = t.btoa(String.fromCharCode.apply(null, e)).replace(/\+/g, "-").replace(/\//g, "_");
                return r ? i : i.replace(/=*$/, "")
            }

            function rt(e) {
                e = t.atob(e.replace(/-/g, "+").replace(/_/g, "/"));
                for (var n = new Uint8Array(e.length), r = 0; r < e.length; ++r) n[r] = e.charCodeAt(r);
                return n
            }

            function it(e) {
                for (var n = new Uint8Array(e.length / 2), r = 0; r < e.length; r += 2) n[r / 2] = t.parseInt(e.substr(r, 2), 16);
                return n
            }

            function ot(t) {
                for (var e = "", n = 0; n < t.length; ++n) {
                    var r = t[n].toString(16);
                    1 == r.length && (r = "0" + r), e += r
                }
                return e
            }

            function at(t, e) {
                if (!t && !e) return !0;
                if (!t || !e || t.length != e.length) return !1;
                for (var n = 0; n < t.length; ++n)
                    if (t[n] != e[n]) return !1;
                return !0
            }

            function st(t, e, n, r) {
                this.l = this.j = this.s = null, this.D = !1, this.b = null, this.f = new j, this.a = [], this.m = [], this.i = new g, this.ga = t, this.h = null, this.g = function(t) {
                    this.i.reject(t), e(t)
                }.bind(this), this.w = {}, this.sa = n, this.na = r, this.B = new tt(this.Td.bind(this)), this.fa = this.c = !1, this.C = [], this.O = !1, this.I = setInterval(this.Sd.bind(this), 1e3), this.i.catch(function() {})
            }

            function ut(t, e) {
                if (!t.j) return U(t.f, e, "encrypted", function() {
                    this.g(new u(2, 6, 6010))
                }.bind(t)), Promise.resolve();
                t.l = e, U(t.f, t.l, "play", t.zd.bind(t));
                var n = (n = t.l.setMediaKeys(t.j)).catch(function(t) {
                        return Promise.reject(new u(2, 6, 6003, t.message))
                    }),
                    r = null;
                return t.b.serverCertificate && t.b.serverCertificate.length && (r = t.j.setServerCertificate(t.b.serverCertificate).then(function() {}).catch(function(t) {
                    return Promise.reject(new u(2, 6, 6004, t.message))
                })), Promise.all([n, r]).then(function() {
                    if (this.c) return Promise.reject();
                    lt(this), this.b.initData.length || this.m.length || L(this.f, this.l, "encrypted", this.pd.bind(this))
                }.bind(t)).catch(function(t) {
                    return this.c ? Promise.resolve() : Promise.reject(t)
                }.bind(t))
            }

            function ct(t, e) {
                return Promise.all(e.map(function(t) {
                    return gt(this, t).then(function(t) {
                        if (t) {
                            for (var e = new g, n = 0; n < this.a.length; n++)
                                if (this.a[n].da == t) {
                                    this.a[n].ma = e;
                                    break
                                }
                            return Promise.all([t.remove(), e])
                        }
                    }.bind(this))
                }.bind(t)))
            }

            function lt(t) {
                var e = t.b ? t.b.initData : [];
                return e.forEach(function(t) {
                    bt(this, t.initDataType, t.initData)
                }.bind(t)), t.m.forEach(function(t) {
                    gt(this, t)
                }.bind(t)), e.length || t.m.length || t.i.resolve(), t.i
            }

            function ft(t) {
                return t.a.map(function(t) {
                    return t.da.sessionId
                })
            }

            function ht(e, n, r, i, o) {
                var a = mt(e);
                n.periods.forEach(function(e) {
                    e.variants.forEach(function(e) {
                        a && (e.drmInfos = [a]), e.drmInfos.forEach(function(n) {
                            dt(this, n), t.cast && t.cast.__platform__ && "com.microsoft.playready" == n.keySystem && (n.keySystem = "com.chromecast.playready");
                            var a = i[n.keySystem];
                            a || (a = {
                                audioCapabilities: [],
                                videoCapabilities: [],
                                distinctiveIdentifier: "optional",
                                persistentState: r ? "required" : "optional",
                                sessionTypes: [r ? "persistent-license" : "temporary"],
                                label: n.keySystem,
                                drmInfos: []
                            }, i[n.keySystem] = a, o.push(n.keySystem)), a.drmInfos.push(n), n.distinctiveIdentifierRequired && (a.distinctiveIdentifier = "required"), n.persistentStateRequired && (a.persistentState = "required");
                            var s = [];
                            e.video && s.push(e.video), e.audio && s.push(e.audio), s.forEach(function(t) {
                                ("video" == t.type ? a.videoCapabilities : a.audioCapabilities).push({
                                    robustness: ("video" == t.type ? n.videoRobustness : n.audioRobustness) || "",
                                    contentType: G(t.mimeType, t.codecs)
                                })
                            }.bind(this))
                        }.bind(this))
                    }.bind(this))
                }.bind(e))
            }

            function pt(t, e, n) {
                if (1 == n.length && "" == n[0]) return Promise.reject(new u(2, 6, 6e3));
                var r = new g,
                    i = r;
                return [!0, !1].forEach(function(t) {
                    n.forEach(function(n) {
                        var r = e[n];
                        r.drmInfos.some(function(t) {
                            return !!t.licenseServerUri
                        }) == t && (r.audioCapabilities.length || delete r.audioCapabilities, r.videoCapabilities.length || delete r.videoCapabilities, i = i.catch(function() {
                            return this.c ? Promise.reject() : navigator.requestMediaKeySystemAccess(n, [r])
                        }.bind(this)))
                    }.bind(this))
                }.bind(t)), i = i.catch(function() {
                    return Promise.reject(new u(2, 6, 6001))
                }), i = i.then(function(t) {
                    if (this.c) return Promise.reject();
                    var n = 0 <= navigator.userAgent.indexOf("Edge/"),
                        r = t.getConfiguration();
                    return this.s = (r.audioCapabilities || []).concat(r.videoCapabilities || []).map(function(t) {
                        return t.contentType
                    }), n && (this.s = null), n = e[t.keySystem], vt(this, t.keySystem, n, n.drmInfos), this.b.licenseServerUri ? t.createMediaKeys() : Promise.reject(new u(2, 6, 6012))
                }.bind(t)).then(function(t) {
                    if (this.c) return Promise.reject();
                    this.j = t, this.D = !0
                }.bind(t)).catch(function(t) {
                    return this.c ? Promise.resolve() : (this.s = this.b = null, t instanceof u ? Promise.reject(t) : Promise.reject(new u(2, 6, 6002, t.message)))
                }.bind(t)), r.reject(), i
            }

            function dt(t, e) {
                var n = e.keySystem;
                if (n) {
                    if (!e.licenseServerUri) {
                        var r = t.h.servers[n];
                        r && (e.licenseServerUri = r)
                    }
                    e.keyIds || (e.keyIds = []), (n = t.h.advanced[n]) && (e.distinctiveIdentifierRequired || (e.distinctiveIdentifierRequired = n.distinctiveIdentifierRequired), e.persistentStateRequired || (e.persistentStateRequired = n.persistentStateRequired), e.videoRobustness || (e.videoRobustness = n.videoRobustness), e.audioRobustness || (e.audioRobustness = n.audioRobustness), e.serverCertificate || (e.serverCertificate = n.serverCertificate))
                }
            }

            function mt(e) {
                if (q(e.h.clearKeys)) return null;
                var n, r = [],
                    i = [];
                for (n in e.h.clearKeys) {
                    var o = e.h.clearKeys[n],
                        a = it(n),
                        o = it(o),
                        a = {
                            kty: "oct",
                            kid: nt(a, !1),
                            k: nt(o, !1)
                        };
                    r.push(a), i.push(a.kid)
                }
                return e = JSON.stringify({
                    keys: r
                }), i = JSON.stringify({
                    kids: i
                }), i = [{
                    initData: new Uint8Array(Q(i)),
                    initDataType: "keyids"
                }], {
                    keySystem: "org.w3.clearkey",
                    licenseServerUri: "data:application/json;base64," + t.btoa(e),
                    distinctiveIdentifierRequired: !1,
                    persistentStateRequired: !1,
                    audioRobustness: "",
                    videoRobustness: "",
                    serverCertificate: null,
                    initData: i,
                    keyIds: []
                }
            }

            function vt(t, e, n, r) {
                var i = [],
                    o = [],
                    a = [],
                    s = [];
                yt(r, i, o, a, s), t.b = {
                    keySystem: e,
                    licenseServerUri: i[0],
                    distinctiveIdentifierRequired: "required" == n.distinctiveIdentifier,
                    persistentStateRequired: "required" == n.persistentState,
                    audioRobustness: n.audioCapabilities ? n.audioCapabilities[0].robustness : "",
                    videoRobustness: n.videoCapabilities ? n.videoCapabilities[0].robustness : "",
                    serverCertificate: o[0],
                    initData: a,
                    keyIds: s
                }
            }

            function yt(t, e, n, r, i) {
                function o(t, e) {
                    return !(!t.keyId || t.keyId != e.keyId) || t.initDataType == e.initDataType && at(t.initData, e.initData)
                }
                t.forEach(function(t) {
                    if (-1 == e.indexOf(t.licenseServerUri) && e.push(t.licenseServerUri), t.serverCertificate && -1 == M(n, t.serverCertificate, at) && n.push(t.serverCertificate), t.initData && t.initData.forEach(function(t) {
                            -1 == M(r, t, o) && r.push(t)
                        }), t.keyIds)
                        for (var a = 0; a < t.keyIds.length; ++a) - 1 == i.indexOf(t.keyIds[a]) && i.push(t.keyIds[a])
                })
            }

            function gt(t, e) {
                try {
                    var n = t.j.createSession("persistent-license")
                } catch (e) {
                    var r = new u(2, 6, 6005, e.message);
                    return t.g(r), Promise.reject(r)
                }
                L(t.f, n, "message", t.pc.bind(t)), L(t.f, n, "keystatuseschange", t.jc.bind(t));
                var i = {
                    initData: null,
                    da: n,
                    loaded: !1,
                    Eb: 1 / 0,
                    ma: null
                };
                return t.a.push(i), n.load(e).then(function(t) {
                    if (!this.c) {
                        if (t) return i.loaded = !0, this.a.every(function(t) {
                            return t.loaded
                        }) && this.i.resolve(), n;
                        this.a.splice(this.a.indexOf(i), 1), this.g(new u(2, 6, 6013))
                    }
                }.bind(t), function(t) {
                    this.c || (this.a.splice(this.a.indexOf(i), 1), this.g(new u(2, 6, 6005, t.message)))
                }.bind(t))
            }

            function bt(t, e, n) {
                try {
                    var r = t.fa ? t.j.createSession("persistent-license") : t.j.createSession()
                } catch (e) {
                    return void t.g(new u(2, 6, 6005, e.message))
                }
                L(t.f, r, "message", t.pc.bind(t)), L(t.f, r, "keystatuseschange", t.jc.bind(t)), t.a.push({
                    initData: n,
                    da: r,
                    loaded: !1,
                    Eb: 1 / 0,
                    ma: null
                }), r.generateRequest(e, n.buffer).catch(function(t) {
                    if (!this.c) {
                        for (var e = 0; e < this.a.length; ++e)
                            if (this.a[e].da == r) {
                                this.a.splice(e, 1);
                                break
                            }
                        this.g(new u(2, 6, 6006, t.message))
                    }
                }.bind(t))
            }

            function wt(t, e) {
                for (var n, r = e.target, i = 0; i < t.a.length; i++)
                    if (t.a[i].da == r) {
                        n = t.a[i];
                        break
                    }(i = I([t.b.licenseServerUri], t.h.retryParameters)).body = e.message, i.method = "POST", "com.microsoft.playready" != t.b.keySystem && "com.chromecast.playready" != t.b.keySystem || _t(i), t.ga.request(2, i).then(function(t) {
                    return this.c ? Promise.reject() : r.update(t.data).then(function() {
                        n && (n.ma && n.ma.resolve(), setTimeout(function() {
                            n.loaded = !0, this.a.every(function(t) {
                                return t.loaded
                            }) && this.i.resolve()
                        }.bind(this), 5e3))
                    }.bind(this))
                }.bind(t), function(t) {
                    if (this.c) return Promise.resolve();
                    t = new u(2, 6, 6007, t), this.g(t), n && n.ma && n.ma.reject(t)
                }.bind(t)).catch(function(t) {
                    if (this.c) return Promise.resolve();
                    t = new u(2, 6, 6008, t.message), this.g(t), n && n.ma && n.ma.reject(t)
                }.bind(t))
            }

            function _t(t) {
                var e = X(t.body, !0, !0);
                if (-1 == e.indexOf("PlayReadyKeyMessage")) t.headers["Content-Type"] = "text/xml; charset=utf-8";
                else {
                    for (var n = (e = (new DOMParser).parseFromString(e, "application/xml")).getElementsByTagName("HttpHeader"), r = 0; r < n.length; ++r) t.headers[n[r].querySelector("name").textContent] = n[r].querySelector("value").textContent;
                    t.body = rt(e.querySelector("Challenge").textContent).buffer
                }
            }

            function Et() {
                var t = [],
                    e = [{
                        contentType: 'video/mp4; codecs="avc1.42E01E"'
                    }, {
                        contentType: 'video/webm; codecs="vp8"'
                    }],
                    n = [{
                        videoCapabilities: e,
                        persistentState: "required",
                        sessionTypes: ["persistent-license"]
                    }, {
                        videoCapabilities: e
                    }],
                    r = {};
                return "org.w3.clearkey com.widevine.alpha com.microsoft.playready com.apple.fps.2_0 com.apple.fps.1_0 com.apple.fps com.adobe.primetime".split(" ").forEach(function(e) {
                    var i = navigator.requestMediaKeySystemAccess(e, n).then(function(t) {
                        var n = !!(n = t.getConfiguration().sessionTypes) && 0 <= n.indexOf("persistent-license");
                        return 0 <= navigator.userAgent.indexOf("Tizen 3") && (n = !1), r[e] = {
                            persistentState: n
                        }, t.createMediaKeys()
                    }).catch(function() {
                        r[e] = null
                    });
                    t.push(i)
                }), Promise.all(t).then(function() {
                    return r
                })
            }

            function Tt(t, e) {
                var n = t.keySystem();
                return !e.drmInfos.length || e.drmInfos.some(function(t) {
                    return t.keySystem == n
                })
            }

            function St(t, e) {
                if (!t.length) return e;
                if (!e.length) return t;
                for (var n = [], r = 0; r < t.length; r++)
                    for (o = 0; o < e.length; o++)
                        if (t[r].keySystem == e[o].keySystem) {
                            var i = t[r],
                                o = e[o],
                                a = (a = (a = []).concat(i.initData || [])).concat(o.initData || []),
                                s = (s = (s = []).concat(i.keyIds)).concat(o.keyIds);
                            n.push({
                                keySystem: i.keySystem,
                                licenseServerUri: i.licenseServerUri || o.licenseServerUri,
                                distinctiveIdentifierRequired: i.distinctiveIdentifierRequired || o.distinctiveIdentifierRequired,
                                persistentStateRequired: i.persistentStateRequired || o.persistentStateRequired,
                                videoRobustness: i.videoRobustness || o.videoRobustness,
                                audioRobustness: i.audioRobustness || o.audioRobustness,
                                serverCertificate: i.serverCertificate || o.serverCertificate,
                                initData: a,
                                keyIds: s
                            });
                            break
                        }
                return n
            }

            function Pt(t) {
                return !t || 1 == t.length && 1e-6 > t.end(0) - t.start(0) ? null : t.length ? t.end(t.length - 1) : null
            }

            function Ct(t, e) {
                return !(!t || !t.length || 1 == t.length && 1e-6 > t.end(0) - t.start(0)) && (e >= t.start(0) && e <= t.end(t.length - 1))
            }

            function Ot(t, e) {
                if (!t || !t.length || 1 == t.length && 1e-6 > t.end(0) - t.start(0)) return 0;
                for (var n = 0, r = t.length - 1; 0 <= r && t.end(r) > e; --r) n += t.end(r) - Math.max(t.start(r), e);
                return n
            }

            function kt(t) {
                this.f = null, this.c = t, this.h = 0, this.g = 1 / 0, this.a = this.b = null
            }

            function xt(t, e) {
                $a[t] = e.length ? At.bind(null, e) : e
            }

            function It(t, e, n, r) {
                return Promise.resolve().then(function() {
                    if (this.f && this.c)
                        if (null == n || null == r) this.f.parseInit(e);
                        else {
                            var t = this.f.parseMedia(e, {
                                periodStart: this.h,
                                segmentStart: n,
                                segmentEnd: r
                            }).filter(function(t) {
                                return t.startTime < this.g
                            }.bind(this));
                            this.c.append(t), null == this.b && (this.b = n), this.a = Math.min(r, this.g)
                        }
                }.bind(t))
            }

            function At(t) {
                this.Ra = t
            }

            function Nt(t, e, n) {
                this.g = t, this.f = e, this.j = n, this.c = {}, this.a = null, this.b = {}, this.h = new j, this.i = !1
            }

            function Mt() {
                var t = {};
                return 'video/mp4; codecs="avc1.42E01E",video/mp4; codecs="avc3.42E01E",video/mp4; codecs="hev1.1.6.L93.90",video/mp4; codecs="hvc1.1.6.L93.90",video/mp4; codecs="hev1.2.4.L153.B0"; eotf="smpte2084",video/mp4; codecs="hvc1.2.4.L153.B0"; eotf="smpte2084",video/mp4; codecs="vp9",video/mp4; codecs="vp09.00.10.08",audio/mp4; codecs="mp4a.40.2",audio/mp4; codecs="ac-3",audio/mp4; codecs="ec-3",audio/mp4; codecs="opus",audio/mp4; codecs="flac",video/webm; codecs="vp8",video/webm; codecs="vp9",video/webm; codecs="av1",audio/webm; codecs="vorbis",audio/webm; codecs="opus",video/mp2t; codecs="avc1.42E01E",video/mp2t; codecs="avc3.42E01E",video/mp2t; codecs="hvc1.1.6.L93.90",video/mp2t; codecs="mp4a.40.2",video/mp2t; codecs="ac-3",video/mp2t; codecs="ec-3",video/mp2t; codecs="mp4a.40.2",text/vtt,application/mp4; codecs="wvtt",application/ttml+xml,application/mp4; codecs="stpp"'.split(",").forEach(function(e) {
                    t[e] = !!$a[e] || MediaSource.isTypeSupported(e);
                    var n = e.split(";")[0];
                    t[n] = t[n] || t[e]
                }), t
            }

            function Rt(t, e) {
                t.a || (t.a = new kt(t.j)), t.a.f = new $a[e]
            }

            function Dt(t, e) {
                if ("text" == e) var n = t.a.b;
                else n = jt(t, e), n = !n || 1 == n.length && 1e-6 > n.end(0) - n.start(0) ? null : 1 == n.length && 0 > n.start(0) ? 0 : n.length ? n.start(0) : null;
                return n
            }

            function jt(t, e) {
                try {
                    return t.c[e].buffered
                } catch (t) {
                    return null
                }
            }

            function Lt(t, e, n, r, i) {
                return "text" == e ? It(t.a, n, r, i) : Ht(t, e, t.ve.bind(t, e, n))
            }

            function Ut(t, e) {
                return "text" == e ? t.a.remove(0, 1 / 0) : Ht(t, e, t.vc.bind(t, e, 0, t.f.duration))
            }

            function Ft(t, e, n, r) {
                return "text" == e ? (t.a.h = n, null != r && (t.a.g = r), Promise.resolve()) : (null == r && (r = 1 / 0), Promise.all([Ht(t, e, t.Kc.bind(t, e)), Ht(t, e, t.ke.bind(t, e, n)), Ht(t, e, t.he.bind(t, e, r))]))
            }

            function Ht(t, e, n) {
                if (t.i) return Promise.reject();
                if (n = {
                        start: n,
                        p: new g
                    }, t.b[e].push(n), 1 == t.b[e].length) try {
                    n.start()
                } catch (r) {
                    "QuotaExceededError" == r.name ? n.p.reject(new u(2, 3, 3017, e)) : n.p.reject(new u(2, 3, 3015, r)), zt(t, e)
                }
                return n.p
            }

            function Bt(t, e) {
                if (t.i) return Promise.reject();
                var n, r = [];
                for (n in t.c) {
                    var i = new g,
                        o = {
                            start: function(t) {
                                t.resolve()
                            }.bind(null, i),
                            p: i
                        };
                    t.b[n].push(o), r.push(i), 1 == t.b[n].length && o.start()
                }
                return Promise.all(r).then(function() {
                    var t;
                    try {
                        e()
                    } catch (t) {
                        var n = Promise.reject(new u(2, 3, 3015, t))
                    }
                    for (t in this.c) zt(this, t);
                    return n
                }.bind(t), function() {
                    return Promise.reject()
                }.bind(t))
            }

            function zt(t, e) {
                t.b[e].shift();
                var n = t.b[e][0];
                if (n) try {
                    n.start()
                } catch (r) {
                    n.p.reject(new u(2, 3, 3015, r)), zt(t, e)
                }
            }

            function qt(t, e, n) {
                return n == e || t >= Xa && n == e.split("-")[0] || t >= Ja && n.split("-")[0] == e.split("-")[0]
            }

            function Vt(t) {
                t = t.toLowerCase().split("-");
                var e = Qa[t[0]];
                return e && (t[0] = e), t.join("-")
            }

            function Wt(t, e, n) {
                var r = t.video;
                return !(r && (r.width < e.minWidth || r.width > e.maxWidth || r.width > n.width || r.height < e.minHeight || r.height > e.maxHeight || r.height > n.height || r.width * r.height < e.minPixels || r.width * r.height > e.maxPixels) || t.bandwidth < e.minBandwidth || t.bandwidth > e.maxBandwidth)
            }

            function Kt(t, e, n) {
                var r = !1;
                return t.variants.forEach(function(t) {
                    var i = t.allowedByApplication;
                    t.allowedByApplication = Wt(t, e, n), i != t.allowedByApplication && (r = !0)
                }), r
            }

            function Yt(t, e, n) {
                var r = e.video,
                    i = e.audio;
                for (e = 0; e < n.variants.length; ++e) {
                    var o = n.variants[e],
                        a = t,
                        s = i,
                        u = r;
                    (a && a.D && !Tt(a, o) ? 0 : Gt(o.audio, a, s) && Gt(o.video, a, u)) || (n.variants.splice(e, 1), --e)
                }
                for (e = 0; e < n.textStreams.length; ++e) t = n.textStreams[e], $a[G(t.mimeType, t.codecs)] || (n.textStreams.splice(e, 1), --e)
            }

            function Gt(t, e, n) {
                if (!t) return !0;
                var r = null;
                e && e.D && (r = e.s), e = G(t.mimeType, t.codecs);
                var i, o = t.mimeType;
                for (i in Ga) {
                    var a = t[i],
                        s = Ga[i];
                    a && (o += "; " + s + '="' + a + '"')
                }
                return !(!$a[G(t.mimeType, t.codecs)] && !MediaSource.isTypeSupported(o) || r && t.encrypted && 0 > r.indexOf(e) || n && (t.mimeType != n.mimeType || t.codecs.split(".")[0] != n.codecs.split(".")[0]))
            }

            function $t(t, e, n) {
                var r = null;
                return Zt(t.variants).map(function(t) {
                    var i;
                    i = t.video && t.audio ? n == t.video.id && e == t.audio.id : t.video && n == t.video.id || t.audio && e == t.audio.id;
                    var o = "";
                    t.video && (o += t.video.codecs), t.audio && ("" != o && (o += ", "), o += t.audio.codecs, r = t.audio.label);
                    var a = t.audio ? t.audio.codecs : null,
                        s = t.video ? t.video.codecs : null,
                        u = null;
                    t.video ? u = t.video.mimeType : t.audio && (u = t.audio.mimeType);
                    var c = null;
                    t.audio ? c = t.audio.kind : t.video && (c = t.video.kind);
                    var l = N((t.audio ? t.audio.roles : []).concat(t.video ? t.video.roles : []));
                    return {
                        id: t.id,
                        active: i,
                        type: "variant",
                        bandwidth: t.bandwidth,
                        language: t.language,
                        label: r,
                        kind: c || null,
                        width: t.video ? t.video.width : null,
                        height: t.video ? t.video.height : null,
                        frameRate: t.video ? t.video.frameRate : void 0,
                        mimeType: u,
                        codecs: o,
                        audioCodec: a,
                        videoCodec: s,
                        primary: t.primary,
                        roles: l,
                        videoId: t.video ? t.video.id : null,
                        audioId: t.audio ? t.audio.id : null,
                        channelsCount: t.audio ? t.audio.channelsCount : null,
                        audioBandwidth: t.audio && t.audio.bandwidth ? t.audio.bandwidth : null,
                        videoBandwidth: t.video && t.video.bandwidth ? t.video.bandwidth : null
                    }
                })
            }

            function Xt(t, e) {
                return t.textStreams.map(function(t) {
                    return {
                        id: t.id,
                        active: e == t.id,
                        type: "text",
                        language: t.language,
                        label: t.label,
                        kind: t.kind,
                        mimeType: t.mimeType,
                        codecs: t.codecs || null,
                        audioCodec: null,
                        videoCodec: null,
                        primary: t.primary,
                        roles: t.roles,
                        channelsCount: null,
                        audioBandwidth: null,
                        videoBandwidth: null
                    }
                })
            }

            function Jt(t, e) {
                for (var n = 0; n < t.variants.length; n++)
                    if (t.variants[n].id == e.id) return t.variants[n];
                return null
            }

            function Qt(t, e) {
                for (var n = 0; n < t.textStreams.length; n++)
                    if (t.textStreams[n].id == e.id) return t.textStreams[n];
                return null
            }

            function Zt(t) {
                return t.filter(function(t) {
                    return t.allowedByApplication && t.allowedByKeySystem
                })
            }

            function te(t, e, n, r) {
                var i = Zt(t.variants);
                (a = i.filter(function(t) {
                    return t.primary
                })).length || (a = i);
                var o = a.length ? a[0].language : "",
                    a = a.filter(function(t) {
                        return t.language == o
                    });
                if (e) {
                    var s = Vt(e);
                    [Ja, Xa, 0].forEach(function(t) {
                        var e = !1;
                        i.forEach(function(n) {
                            s = Vt(s);
                            var i = Vt(n.language);
                            qt(t, s, i) && (e ? a.push(n) : (a = [n], e = !0), r && (r.audio = !0))
                        })
                    })
                }
                return n && (t = ne(a, n)).length ? t : (t = a.map(function(t) {
                    return (t.audio ? t.audio.roles : []).concat(t.video ? t.video.roles : [])
                }).reduce(P, [])).length ? ne(a, t[0]) : a
            }

            function ee(t, e, n, r) {
                var i = t.textStreams;
                (a = i.filter(function(t) {
                    return t.primary
                })).length || (a = i);
                var o = a.length ? a[0].language : "",
                    a = a.filter(function(t) {
                        return t.language == o
                    });
                if (e) {
                    var s = Vt(e);
                    [Ja, Xa, 0].forEach(function(t) {
                        var e = !1;
                        i.forEach(function(n) {
                            var i = Vt(n.language);
                            qt(t, s, i) && (e ? a.push(n) : (a = [n], e = !0), r && (r.text = !0))
                        })
                    })
                }
                return n && (t = re(a, n)).length ? t : (t = a.map(function(t) {
                    return t.roles
                }).reduce(P, [])).length ? re(a, t[0]) : a
            }

            function ne(t, e) {
                return t.filter(function(t) {
                    return t.audio && 0 <= t.audio.roles.indexOf(e) || t.video && 0 <= t.video.roles.indexOf(e)
                })
            }

            function re(t, e) {
                return t.filter(function(t) {
                    return 0 <= t.roles.indexOf(e)
                })
            }

            function ie(t, e, n) {
                for (var r = 0; r < n.length; r++)
                    if (n[r].audio == t && n[r].video == e) return n[r];
                return null
            }

            function oe(t, e, n) {
                function r(t, e) {
                    return null == t ? null == e : e.id == t
                }
                for (var i = 0; i < n.length; i++)
                    if (r(t, n[i].audio) && r(e, n[i].video)) return n[i];
                return null
            }

            function ae(t, e) {
                for (var n = t.periods.length - 1; 0 < n; --n)
                    if (e + Ya >= t.periods[n].startTime) return n;
                return 0
            }

            function se(t, e) {
                for (var n = 0; n < t.periods.length; ++n) {
                    var r = t.periods[n];
                    if ("text" == e.type) {
                        for (var i = 0; i < r.textStreams.length; ++i)
                            if (r.textStreams[i] == e) return n
                    } else
                        for (i = 0; i < r.variants.length; ++i) {
                            var o = r.variants[i];
                            if (o.audio == e || o.video == e || o.video && o.video.trickModeVideo == e) return n
                        }
                }
                return -1
            }

            function ue() {
                this.h = null, this.c = !1, this.b = new a, this.g = [], this.i = !1, this.a = this.f = null
            }

            function ce(t, e) {
                return e.filter(function(e) {
                    return Wt(e, t, {
                        width: 1 / 0,
                        height: 1 / 0
                    })
                }).sort(function(t, e) {
                    return t.bandwidth - e.bandwidth
                })
            }

            function le(e, n) {
                var r, i = n || {};
                for (r in i) this[r] = i[r];
                this.defaultPrevented = this.cancelable = this.bubbles = !1, this.timeStamp = t.performance && t.performance.now ? t.performance.now() : Date.now(), this.type = e, this.isTrusted = !1, this.target = this.currentTarget = null, this.a = !1
            }

            function fe(t) {
                return JSON.stringify(t, function(t, e) {
                    if ("manager" != t && "function" != typeof e) {
                        if (e instanceof Event || e instanceof le) {
                            var n, r = {};
                            for (n in e) {
                                var i = e[n];
                                i && "object" == typeof i || n in Event || (r[n] = i)
                            }
                            return r
                        }
                        if (e instanceof TimeRanges)
                            for (r = {
                                    __type__: "TimeRanges",
                                    length: e.length,
                                    start: [],
                                    end: []
                                }, n = 0; n < e.length; ++n) r.start.push(e.start(n)), r.end.push(e.end(n));
                        else r = "number" == typeof e ? isNaN(e) ? "NaN" : isFinite(e) ? e : 0 > e ? "-Infinity" : "Infinity" : e;
                        return r
                    }
                })
            }

            function he(t) {
                return JSON.parse(t, function(t, e) {
                    return "NaN" == e ? NaN : "-Infinity" == e ? -1 / 0 : "Infinity" == e ? 1 / 0 : e && "object" == typeof e && "TimeRanges" == e.__type__ ? pe(e) : e
                })
            }

            function pe(t) {
                return {
                    length: t.length,
                    start: function(e) {
                        return t.start[e]
                    },
                    end: function(e) {
                        return t.end[e]
                    }
                }
            }

            function de(t, e, n, r, i, o) {
                this.D = t, this.h = e, this.I = n, this.l = !1, this.B = r, this.C = i, this.s = o, this.c = this.i = !1, this.w = "", this.a = this.j = null, this.b = {
                    video: {},
                    player: {}
                }, this.m = 0, this.f = {}, this.g = null
            }

            function me(t) {
                for (var e in t.f) {
                    var n = t.f[e];
                    delete t.f[e], n.reject(new u(1, 7, 7e3))
                }
            }

            function ve(t, e) {
                var n = fe(e);
                t.a.sendMessage("urn:x-cast:com.google.shaka.v2", n, function() {}, s)
            }

            function ye() {
                this.ub = new D, this.Za = this
            }

            function ge(t, e, n) {
                ye.call(this), this.c = t, this.b = e, this.i = this.g = this.f = this.j = this.h = null, this.a = new de(n, this.qe.bind(this), this.re.bind(this), this.se.bind(this), this.te.bind(this), this.bc.bind(this)), be(this)
            }

            function be(t) {
                t.a.init(), t.i = new j, Za.forEach(function(t) {
                    L(this.i, this.c, t, this.He.bind(this))
                }.bind(t)), rs.forEach(function(t) {
                    L(this.i, this.b, t, this.Rd.bind(this))
                }.bind(t)), t.h = {};
                for (var e in t.c) Object.defineProperty(t.h, e, {
                    configurable: !1,
                    enumerable: !0,
                    get: t.Ge.bind(t, e),
                    set: t.Ie.bind(t, e)
                });
                t.j = {};
                for (e in t.b) Object.defineProperty(t.j, e, {
                    configurable: !1,
                    enumerable: !0,
                    get: t.Qd.bind(t, e)
                });
                t.f = new ye, t.f.Za = t.h, t.g = new ye, t.g.Za = t.j
            }

            function we(t, e, n, r) {
                ye.call(this), this.a = t, this.b = e, this.j = {
                    video: t,
                    player: e
                }, this.l = n || function() {}, this.m = r || function(t) {
                    return t
                }, this.i = !1, this.f = !0, this.h = this.g = this.c = null, _e(this)
            }

            function _e(e) {
                var n = cast.receiver.CastReceiverManager.getInstance();
                n.onSenderConnected = e.oc.bind(e), n.onSenderDisconnected = e.oc.bind(e), n.onSystemVolumeChanged = e.Sc.bind(e), e.g = n.getCastMessageBus("urn:x-cast:com.google.cast.media"), e.g.onMessage = e.rd.bind(e), e.c = n.getCastMessageBus("urn:x-cast:com.google.shaka.v2"), e.c.onMessage = e.Ed.bind(e), n.start(), Za.forEach(function(t) {
                    this.a.addEventListener(t, this.rc.bind(this, "video"))
                }.bind(e)), rs.forEach(function(t) {
                    this.b.addEventListener(t, this.rc.bind(this, "player"))
                }.bind(e)), cast.__platform__ && cast.__platform__.canDisplayType('video/mp4; codecs="avc1.640028"; width=3840; height=2160') ? e.b.Pb(3840, 2160) : e.b.Pb(1920, 1080), e.b.addEventListener("loading", function() {
                    this.f = !1, Ee(this)
                }.bind(e)), e.a.addEventListener("playing", function() {
                    this.f = !1, Ee(this)
                }.bind(e)), e.a.addEventListener("pause", function() {
                    Ee(this)
                }.bind(e)), e.b.addEventListener("unloading", function() {
                    this.f = !0, Ee(this)
                }.bind(e)), e.a.addEventListener("ended", function() {
                    t.setTimeout(function() {
                        this.a && this.a.ended && (this.f = !0, Ee(this))
                    }.bind(this), 5e3)
                }.bind(e))
            }

            function Ee(t) {
                Promise.resolve().then(function() {
                    this.dispatchEvent(new le("caststatuschanged")), Pe(this, 0)
                }.bind(t))
            }

            function Te(t, e, n) {
                for (var r in e.player) t.b[r](e.player[r]);
                t.l(n), n = Promise.resolve();
                var i = t.a.autoplay;
                e.manifest && (t.a.autoplay = !1, (n = t.b.load(e.manifest, e.startTime)).catch(function(t) {
                    this.b.dispatchEvent(new le("error", {
                        detail: t
                    }))
                }.bind(t))), n.then(function() {
                    var t;
                    for (t in e.video) {
                        var n = e.video[t];
                        this.a[t] = n
                    }
                    for (t in e.playerAfterLoad) n = e.playerAfterLoad[t], this.b[t](n);
                    this.a.autoplay = i, e.manifest && (this.a.play(), Pe(this, 0))
                }.bind(t))
            }

            function Se(t, e, n, r) {
                t.i && (t = fe(e), r ? n.getCastChannel(r).send(t) : n.broadcast(t))
            }

            function Pe(t, e, n) {
                var r = fs,
                    r = {
                        mediaSessionId: 0,
                        playbackRate: t.a.playbackRate,
                        playerState: t.f ? r.IDLE : t.b.Na ? r.Gc : t.a.paused ? r.Hc : r.Ic,
                        currentTime: t.a.currentTime,
                        supportedMediaCommands: 15,
                        volume: {
                            level: t.a.volume,
                            muted: t.a.muted
                        }
                    };
                n && (r.media = n), Se(t, {
                    requestId: e,
                    type: "MEDIA_STATUS",
                    status: [r]
                }, t.g)
            }

            function Ce(t, e) {
                var n = Oe(t, e);
                return 1 != n.length ? null : n[0]
            }

            function Oe(t, e) {
                return Array.prototype.filter.call(t.childNodes, function(t) {
                    return t.tagName == e
                })
            }

            function ke(t) {
                var e = t.firstChild;
                return e && e.nodeType == Node.TEXT_NODE ? t.textContent.trim() : null
            }

            function xe(t, e, n, r) {
                var i = null;
                return null != (t = t.getAttribute(e)) && (i = n(t)), null == i ? void 0 != r ? r : null : i
            }

            function Ie(t) {
                return t ? (/^\d+\-\d+\-\d+T\d+:\d+:\d+(\.\d+)?$/.test(t) && (t += "Z"), t = Date.parse(t), isNaN(t) ? null : Math.floor(t / 1e3)) : null
            }

            function Ae(t) {
                return t && (t = /^P(?:([0-9]*)Y)?(?:([0-9]*)M)?(?:([0-9]*)D)?(?:T(?:([0-9]*)H)?(?:([0-9]*)M)?(?:([0-9.]*)S)?)?$/.exec(t)) ? (t = 31536e3 * Number(t[1] || null) + 2592e3 * Number(t[2] || null) + 86400 * Number(t[3] || null) + 3600 * Number(t[4] || null) + 60 * Number(t[5] || null) + Number(t[6] || null), isFinite(t) ? t : null) : null
            }

            function Ne(t) {
                var e = /([0-9]+)-([0-9]+)/.exec(t);
                return e ? (t = Number(e[1]), isFinite(t) ? (e = Number(e[2]), isFinite(e) ? {
                    start: t,
                    end: e
                } : null) : null) : null
            }

            function Me(t) {
                return (t = Number(t)) % 1 ? null : t
            }

            function Re(t) {
                return !((t = Number(t)) % 1) && 0 < t ? t : null
            }

            function De(t) {
                return !((t = Number(t)) % 1) && 0 <= t ? t : null
            }

            function je(t) {
                var e;
                return t = (e = t.match(/^(\d+)\/(\d+)$/)) ? Number(e[1] / e[2]) : Number(t), isNaN(t) ? null : t
            }

            function Le(t, e, n) {
                var r = null,
                    i = [],
                    o = [],
                    a = (t = He(t)).map(function(t) {
                        return t.keyId
                    }).filter(O);
                if (a.length && 1 < a.filter(k).length) throw new u(2, 4, 4010);
                n || (o = t.filter(function(t) {
                    return "urn:mpeg:dash:mp4protection:2011" != t.yc || (r = t.init || r, !1)
                })).length && ((i = Fe(r, e, o)).length || (i = [z("", r)])), !t.length || !n && o.length || (i = V(hs).map(function(t) {
                    return z(t, r)
                }));
                var s = a[0] || null;
                return s && i.forEach(function(t) {
                    t.initData.forEach(function(t) {
                        t.keyId = s
                    })
                }), {
                    Yb: s,
                    Ye: r,
                    drmInfos: i,
                    $b: !0
                }
            }

            function Ue(t, e, n, r) {
                var i = Le(t, e, r);
                if (n.$b) t = 1 == n.drmInfos.length && !n.drmInfos[0].keySystem, e = !i.drmInfos.length, (!n.drmInfos.length || t && !e) && (n.drmInfos = i.drmInfos), n.$b = !1;
                else if (0 < i.drmInfos.length && (n.drmInfos = n.drmInfos.filter(function(t) {
                        return i.drmInfos.some(function(e) {
                            return e.keySystem == t.keySystem
                        })
                    }), !n.drmInfos.length)) throw new u(2, 4, 4008);
                return i.Yb || n.Yb
            }

            function Fe(t, e, n) {
                return n.map(function(n) {
                    var r = hs[n.yc];
                    return r ? [z(r, n.init || t)] : e(n.node) || []
                }).reduce(P, [])
            }

            function He(t) {
                return t.map(function(t) {
                    var e = t.getAttribute("schemeIdUri"),
                        n = t.getAttribute("cenc:default_KID"),
                        r = Oe(t, "cenc:pssh").map(ke);
                    if (!e) return null;
                    if (e = e.toLowerCase(), n && 0 <= (n = n.replace(/-/g, "").toLowerCase()).indexOf(" ")) throw new u(2, 4, 4009);
                    var i = [];
                    try {
                        i = r.map(function(t) {
                            return {
                                initDataType: "cenc",
                                initData: rt(t),
                                keyId: null
                            }
                        })
                    } catch (t) {
                        throw new u(2, 4, 4007)
                    }
                    return {
                        node: t,
                        yc: e,
                        keyId: n,
                        init: 0 < i.length ? i : null
                    }
                }).filter(O)
            }

            function Be(e, n, r, i, o) {
                null != o && (o = Math.round(o));
                var a = {
                    RepresentationID: n,
                    Number: r,
                    Bandwidth: i,
                    Time: o
                };
                return e.replace(/\$(RepresentationID|Number|Bandwidth|Time)?(?:%0([0-9]+)d)?\$/g, function(e, n, r) {
                    if ("$$" == e) return "$";
                    var i = a[n];
                    return null == i ? e : ("RepresentationID" == n && r && (r = void 0), e = i.toString(), r = t.parseInt(r, 10) || 1, Array(Math.max(0, r - e.length) + 1).join("0") + e)
                })
            }

            function ze(t, e) {
                var n = qe(t, e, "timescale"),
                    r = 1;
                n && (r = Re(n) || 1), (n = Re((n = qe(t, e, "duration")) || "")) && (n /= r);
                var i = qe(t, e, "startNumber"),
                    o = qe(t, e, "presentationTimeOffset"),
                    a = De(i || "");
                null != i && null != a || (a = 1);
                i = null;
                if (c = Ve(t, e, "SegmentTimeline")) {
                    for (var i = r, s = Number(o), u = t.S.duration || 1 / 0, c = Oe(c, "S"), l = [], f = 0, h = 0; h < c.length; ++h) {
                        var p = xe(m = c[h], "t", De),
                            d = xe(m, "d", De),
                            m = xe(m, "r", Me);
                        if (null != p && (p -= s), !d) break;
                        if (p = null != p ? p : f, 0 > (m = m || 0))
                            if (h + 1 < c.length) {
                                if (null == (m = xe(c[h + 1], "t", De))) break;
                                if (p >= m) break;
                                m = Math.ceil((m - p) / d) - 1
                            } else {
                                if (1 / 0 == u) break;
                                if (p / i >= u) break;
                                m = Math.ceil((u * i - p) / d) - 1
                            }
                        0 < l.length && p != f && (l[l.length - 1].end = p / i);
                        for (var v = 0; v <= m; ++v) f = p + d, l.push({
                            start: p / i,
                            end: f / i,
                            Ee: p
                        }), p = f
                    }
                    i = l
                }
                return {
                    timescale: r,
                    P: n,
                    za: a,
                    presentationTimeOffset: Number(o) / r || 0,
                    Ub: Number(o),
                    H: i
                }
            }

            function qe(t, e, n) {
                return [e(t.A), e(t.U), e(t.W)].filter(O).map(function(t) {
                    return t.getAttribute(n)
                }).reduce(function(t, e) {
                    return t || e
                })
            }

            function Ve(t, e, n) {
                return [e(t.A), e(t.U), e(t.W)].filter(O).map(function(t) {
                    return Ce(t, n)
                }).reduce(function(t, e) {
                    return t || e
                })
            }

            function We(t, e) {
                var n = new DOMParser;
                try {
                    var r = $(t),
                        i = n.parseFromString(r, "text/xml")
                } catch (t) {}
                if (i && i.documentElement.tagName == e) var o = i.documentElement;
                return o && 0 < o.getElementsByTagName("parsererror").length ? null : o
            }

            function Ke(t, e, n, r, i, o) {
                for (var a = t.getAttribute("xlink:href"), s = t.getAttribute("xlink:actuate") || "onRequest", c = 0; c < t.attributes.length; c++) {
                    var l = t.attributes[c].nodeName; - 1 != l.indexOf("xlink:") && (t.removeAttribute(l), --c)
                }
                if (5 <= o) return Promise.reject(new u(2, 4, 4028));
                if ("onLoad" != s) return Promise.reject(new u(2, 4, 4027));
                var f = B([r], [a]);
                return i.request(0, I(f, e)).then(function(r) {
                    if (!(r = We(r.data, t.tagName))) return Promise.reject(new u(2, 4, 4001, a));
                    for (; t.childNodes.length;) t.removeChild(t.childNodes[0]);
                    for (; r.childNodes.length;) {
                        var s = r.childNodes[0];
                        r.removeChild(s), t.appendChild(s)
                    }
                    for (s = 0; s < r.attributes.length; s++) {
                        var c = r.attributes[s].nodeName,
                            l = r.getAttribute(c);
                        t.setAttribute(c, l)
                    }
                    return Ye(t, e, n, f[0], i, o + 1)
                }.bind(t))
            }

            function Ye(t, e, n, r, i, o) {
                if (o = o || 0, t.getAttribute("xlink:href")) {
                    u = Ke(t, e, n, r, i, o);
                    return n && (u = u.catch(function() {
                        return Ye(t, e, n, r, i, o)
                    })), u
                }
                for (u = 0; u < t.childNodes.length; u++) {
                    var a = t.childNodes[u];
                    a instanceof Element && "urn:mpeg:dash:resolve-to-zero:2013" == a.getAttribute("xlink:href") && (t.removeChild(a), --u)
                }
                for (var s = [], u = 0; u < t.childNodes.length; u++)(a = t.childNodes[u]).nodeType == Node.ELEMENT_NODE && (a = Ye(a, e, n, r, i, o), s.push(a));
                return Promise.all(s).then(function() {
                    return t
                })
            }

            function Ge(t, e, n) {
                this.a = t, this.V = e, this.K = n
            }

            function $e(t, e, n, r, i, o) {
                this.position = t, this.startTime = e, this.endTime = n, this.a = r, this.V = i, this.K = o
            }

            function Xe(t, e) {
                this.L = t, this.a = e == ps, this.v = 0
            }

            function Je() {
                throw new u(2, 3, 3e3)
            }

            function Qe() {
                this.b = [], this.a = []
            }

            function Ze(t) {
                for (; t.u.ba();) t.Ra.nb(t.start, t.u)
            }

            function tn(t) {
                for (var e = t.u.F(); 0 < e; --e) t.Ra.nb(t.start, t.u)
            }

            function en(t) {
                return function(e) {
                    t(e.u.Ja(e.u.L.byteLength - e.u.v))
                }
            }

            function nn(t) {
                for (var e = 0, n = 0; n < t.length; n++) e = e << 8 | t.charCodeAt(n);
                return e
            }

            function rn(t, e, n, r) {
                var i, o = (new Qe).aa("sidx", function(t) {
                    i = on(e, r, n, t)
                });
                if (t && o.parse(t), i) return i;
                throw new u(2, 3, 3004)
            }

            function on(t, e, n, r) {
                var i = [];
                r.u.J(4);
                var o = r.u.F();
                if (!o) throw new u(2, 3, 3005);
                if (r.version) var a = r.u.Ta(),
                    s = r.u.Ta();
                else a = r.u.F(), s = r.u.F();
                r.u.J(2);
                var c = r.u.tc();
                for (e = a - e, t = t + r.size + s, s = 0; s < c; s++) {
                    a = (2147483648 & (l = r.u.F())) >>> 31;
                    var l = 2147483647 & l,
                        f = r.u.F();
                    if (r.u.J(4), 1 == a) throw new u(2, 3, 3006);
                    i.push(new $e(i.length, e / o, (e + f) / o, function() {
                        return n
                    }, t, t + l - 1)), e += f, t += l
                }
                return i
            }

            function an(t) {
                this.a = t
            }

            function sn(t, e) {
                if (t.a.length) {
                    var n = t.a[t.a.length - 1];
                    n.startTime > e || (t.a[t.a.length - 1] = new $e(n.position, n.startTime, e, n.a, n.V, n.K))
                }
            }

            function un(t) {
                this.b = t, this.a = new Xe(t, 0), ds || (ds = [new Uint8Array([255]), new Uint8Array([127, 255]), new Uint8Array([63, 255, 255]), new Uint8Array([31, 255, 255, 255]), new Uint8Array([15, 255, 255, 255, 255]), new Uint8Array([7, 255, 255, 255, 255, 255]), new Uint8Array([3, 255, 255, 255, 255, 255, 255]), new Uint8Array([1, 255, 255, 255, 255, 255, 255, 255])])
            }

            function cn(t) {
                var e = ln(t);
                if (7 < e.length) throw new u(2, 3, 3002);
                for (var n = 0, r = 0; r < e.length; r++) n = 256 * n + e[r];
                e = n, n = ln(t);
                t: {
                    for (r = 0; r < ds.length; r++)
                        if (at(n, ds[r])) {
                            r = !0;
                            break t
                        }
                    r = !1
                }
                if (r) n = t.b.byteLength - t.a.v;
                else {
                    if (8 == n.length && 224 & n[1]) throw new u(2, 3, 3001);
                    for (var r = n[0] & (1 << 8 - n.length) - 1, i = 1; i < n.length; i++) r = 256 * r + n[i];
                    n = r
                }
                return n = t.a.v + n <= t.b.byteLength ? n : t.b.byteLength - t.a.v, r = new DataView(t.b.buffer, t.b.byteOffset + t.a.v, n), t.a.J(n), new fn(e, r)
            }

            function ln(t) {
                var e, n = t.a.Jb();
                for (e = 1; 8 >= e && !(n & 1 << 8 - e); e++);
                if (8 < e) throw new u(2, 3, 3002);
                var r = new Uint8Array(e);
                for (r[0] = n, n = 1; n < e; n++) r[n] = t.a.Jb();
                return r
            }

            function fn(t, e) {
                this.id = t, this.a = e
            }

            function hn(t) {
                if (8 < t.a.byteLength) throw new u(2, 3, 3002);
                if (8 == t.a.byteLength && 224 & t.a.getUint8(0)) throw new u(2, 3, 3001);
                for (var e = 0, n = 0; n < t.a.byteLength; n++) var r = t.a.getUint8(n),
                    e = 256 * e + r;
                return e
            }

            function pn() {}

            function dn(t, e, n, r, i, o) {
                function a() {
                    return i
                }
                var s = [];
                t = new un(t.a);
                for (var u = -1, c = -1; t.ba();) {
                    var l = cn(t);
                    if (187 == l.id) {
                        var f = mn(l);
                        f && (l = n * (f.Fe - o), f = e + f.Wd, 0 <= u && s.push(new $e(s.length, u, l, a, c, f - 1)), u = l, c = f)
                    }
                }
                return 0 <= u && s.push(new $e(s.length, u, r, a, c, null)), s
            }

            function mn(t) {
                if (179 != (t = cn(e = new un(t.a))).id) throw new u(2, 3, 3013);
                if (t = hn(t), 183 != (e = cn(e)).id) throw new u(2, 3, 3012);
                for (var e = new un(e.a), n = 0; e.ba();) {
                    var r = cn(e);
                    if (241 == r.id) {
                        n = hn(r);
                        break
                    }
                }
                return {
                    Fe: t,
                    Wd: n
                }
            }

            function vn(t, e) {
                var n = Ve(t, e, "Initialization");
                if (!n) return null;
                var r = t.A.X;
                (i = n.getAttribute("sourceURL")) && (r = B(t.A.X, [i]));
                var i = 0,
                    o = null;
                return (n = xe(n, "range", Ne)) && (i = n.start, o = n.end), new Ge(function() {
                    return r
                }, i, o)
            }

            function yn(t, e) {
                var n = qe(t, bn, "presentationTimeOffset"),
                    r = vn(t, bn),
                    i = Number(n),
                    o = t.A.contentType,
                    a = t.A.mimeType.split("/")[1];
                if ("text" != o && "mp4" != a && "webm" != a) throw new u(2, 4, 4006);
                if ("webm" == a && !r) throw new u(2, 4, 4005);
                var o = Ve(t, bn, "RepresentationIndex"),
                    s = qe(t, bn, "indexRange"),
                    c = t.A.X,
                    s = Ne(s || "");
                if (o) {
                    var l = o.getAttribute("sourceURL");
                    l && (c = B(t.A.X, [l])), s = xe(o, "range", Ne, s)
                }
                if (!s) throw new u(2, 4, 4002);
                return i = gn(t, e, r, c, s.start, s.end, a, i), {
                    createSegmentIndex: i.createSegmentIndex,
                    findSegmentPosition: i.findSegmentPosition,
                    getSegmentReference: i.getSegmentReference,
                    initSegmentReference: r,
                    presentationTimeOffset: Number(n) || 0
                }
            }

            function gn(t, e, n, r, i, o, a, s) {
                var u = t.presentationTimeline,
                    c = !t.Ca || !t.S.yb,
                    l = t.S.duration,
                    f = e,
                    h = null;
                return {
                    createSegmentIndex: function() {
                        var t = [f(r, i, o), "webm" == a ? f(n.a(), n.V, n.K) : null];
                        return f = null, Promise.all(t).then(function(t) {
                            var e = t[0];
                            t = t[1] || null, e = "mp4" == a ? rn(e, i, r, s) : (new pn).parse(e, t, r, s), u.Ga(0, e), h = new an(e), c && sn(h, l)
                        })
                    },
                    findSegmentPosition: function(t) {
                        return h.find(t)
                    },
                    getSegmentReference: function(t) {
                        return h.get(t)
                    }
                }
            }

            function bn(t) {
                return t.Ua
            }

            function wn(t, e) {
                var n = vn(t, _n),
                    r = Tn(t),
                    i = ze(t, _n),
                    o = i.za;
                o || (o = 1);
                var a = 0;
                if (i.P ? a = i.P * (o - 1) : i.H && 0 < i.H.length && (a = i.H[0].start), !(r = {
                        P: i.P,
                        startTime: a,
                        za: o,
                        presentationTimeOffset: i.presentationTimeOffset,
                        H: i.H,
                        Fa: r
                    }).P && !r.H && 1 < r.Fa.length) throw new u(2, 4, 4002);
                if (!r.P && !t.S.duration && !r.H && 1 == r.Fa.length) throw new u(2, 4, 4002);
                if (r.H && !r.H.length) throw new u(2, 4, 4002);
                return o = i = null, t.W.id && t.A.id && (o = t.W.id + "," + t.A.id, i = e[o]), a = En(t.S.duration, r.za, t.A.X, r), i ? (i.lb(a), i.wb(t.presentationTimeline.ia() - t.S.start)) : (t.presentationTimeline.Ga(0, a), i = new an(a), o && t.Ca && (e[o] = i)), t.Ca && t.S.yb || sn(i, t.S.duration), {
                    createSegmentIndex: Promise.resolve.bind(Promise),
                    findSegmentPosition: i.find.bind(i),
                    getSegmentReference: i.get.bind(i),
                    initSegmentReference: n,
                    presentationTimeOffset: r.presentationTimeOffset
                }
            }

            function _n(t) {
                return t.pa
            }

            function En(t, e, n, r) {
                var i = r.Fa.length;
                r.H && r.H.length != r.Fa.length && (i = Math.min(r.H.length, r.Fa.length));
                for (var o = [], a = r.startTime, s = 0; s < i; s++) {
                    var u = r.Fa[s],
                        c = B(n, [u.md]),
                        l = null != r.P ? a + r.P : r.H ? r.H[s].end : a + t;
                    o.push(new $e(s + e, a, l, function(t) {
                        return t
                    }.bind(null, c), u.start, u.end)), a = l
                }
                return o
            }

            function Tn(t) {
                return [t.A.pa, t.U.pa, t.W.pa].filter(O).map(function(t) {
                    return Oe(t, "SegmentURL")
                }).reduce(function(t, e) {
                    return 0 < t.length ? t : e
                }).map(function(e) {
                    e.getAttribute("indexRange") && !t.ec && (t.ec = !0);
                    var n = e.getAttribute("media");
                    return e = xe(e, "mediaRange", Ne, {
                        start: 0,
                        end: null
                    }), {
                        md: n,
                        start: e.start,
                        end: e.end
                    }
                })
            }

            function Sn(t, e, n, r) {
                var i = kn(t),
                    o = ze(t, Pn),
                    a = qe(t, Pn, "media"),
                    s = qe(t, Pn, "index");
                if (o = {
                        P: o.P,
                        timescale: o.timescale,
                        za: o.za,
                        presentationTimeOffset: o.presentationTimeOffset,
                        Ub: o.Ub,
                        H: o.H,
                        Bb: a,
                        Qa: s
                    }, a = 0 + (o.Qa ? 1 : 0), a += o.H ? 1 : 0, !(a += o.P ? 1 : 0)) throw new u(2, 4, 4002);
                if (1 != a && (o.Qa && (o.H = null), o.P = null), !o.Qa && !o.Bb) throw new u(2, 4, 4002);
                if (o.Qa) {
                    if ("mp4" != (n = t.A.mimeType.split("/")[1]) && "webm" != n) throw new u(2, 4, 4006);
                    if ("webm" == n && !i) throw new u(2, 4, 4005);
                    r = Be(o.Qa, t.A.id, null, t.bandwidth || null, null), t = gn(t, e, i, r = B(t.A.X, [r]), 0, null, n, o.presentationTimeOffset)
                } else o.P ? (r || t.presentationTimeline.Cb(o.P), t = Cn(t, o)) : (r = e = null, t.W.id && t.A.id && (r = t.W.id + "," + t.A.id, e = n[r]), a = On(t, o), e ? (e.lb(a), e.wb(t.presentationTimeline.ia() - t.S.start)) : (t.presentationTimeline.Ga(0, a), e = new an(a), r && t.Ca && (n[r] = e)), t.Ca && t.S.yb || sn(e, t.S.duration), t = {
                    createSegmentIndex: Promise.resolve.bind(Promise),
                    findSegmentPosition: e.find.bind(e),
                    getSegmentReference: e.get.bind(e)
                });
                return {
                    createSegmentIndex: t.createSegmentIndex,
                    findSegmentPosition: t.findSegmentPosition,
                    getSegmentReference: t.getSegmentReference,
                    initSegmentReference: i,
                    presentationTimeOffset: o.presentationTimeOffset
                }
            }

            function Pn(t) {
                return t.Va
            }

            function Cn(t, e) {
                var n = t.S.duration,
                    r = e.P,
                    i = e.za,
                    o = e.timescale,
                    a = e.Bb,
                    s = t.bandwidth || null,
                    u = t.A.id,
                    c = t.A.X;
                return {
                    createSegmentIndex: Promise.resolve.bind(Promise),
                    findSegmentPosition: function(t) {
                        return 0 > t || n && t >= n ? null : Math.floor(t / r)
                    },
                    getSegmentReference: function(t) {
                        var e = t * r;
                        return 0 > e || n && e >= n ? null : new $e(t, e, e + r, function() {
                            var n = Be(a, u, t + i, s, e * o);
                            return B(c, [n])
                        }, 0, null)
                    }
                }
            }

            function On(t, e) {
                for (var n = [], r = 0; r < e.H.length; r++) {
                    var i = r + e.za;
                    n.push(new $e(i, e.H[r].start, e.H[r].end, function(t, e, n, r, i, o) {
                        return t = Be(t, e, i, n, o), B(r, [t]).map(function(t) {
                            return t.toString()
                        })
                    }.bind(null, e.Bb, t.A.id, t.bandwidth || null, t.A.X, i, e.H[r].Ee + e.Ub), 0, null))
                }
                return n
            }

            function kn(t) {
                var e = qe(t, Pn, "initialization");
                if (!e) return null;
                var n = t.A.id,
                    r = t.bandwidth || null,
                    i = t.A.X;
                return new Ge(function() {
                    var t = Be(e, n, null, r, null);
                    return B(i, [t])
                }, 0, null)
            }

            function xn() {
                var t, e = {};
                for (t in ms) e[t] = !0;
                for (t in vs) e[t] = !0;
                return ["application/dash+xml", "application/x-mpegurl", "application/vnd.apple.mpegurl", "application/vnd.ms-sstr+xml"].forEach(function(t) {
                    e[t] = !!ms[t]
                }), ["mpd", "m3u8", "ism"].forEach(function(t) {
                    e[t] = !!vs[t]
                }), e
            }

            function In(t, e, n, r) {
                var i = r;
                return i || 1 < (r = new c(t).$.split("/").pop().split(".")).length && (r = r.pop().toLowerCase(), i = vs[r]), i ? Promise.resolve(i) : (n = I([t], n), n.method = "HEAD", e.request(0, n).then(function(e) {
                    return (e = e.headers["content-type"]) && (e = e.toLowerCase()), (i = ms[e]) ? i : Promise.reject(new u(2, 4, 4e3, t))
                }, function(t) {
                    return t.severity = 2, Promise.reject(t)
                }))
            }

            function An(t, e) {
                this.c = t, this.j = e, this.f = this.a = 1 / 0, this.b = 1, this.i = 0, this.h = !0, this.g = 0
            }

            function Nn() {
                this.a = this.b = null, this.g = [], this.c = null, this.i = [], this.h = 1, this.j = {}, this.l = 0, this.f = null
            }

            function Mn(t) {
                return t.a.networkingEngine.request(0, I(t.g, t.b.retryParameters)).then(function(t) {
                    if (this.a) return Rn(this, t.data, t.uri)
                }.bind(t))
            }

            function Rn(t, e, n) {
                if (!(e = We(e, "MPD"))) throw new u(2, 4, 4001, n);
                return Ye(e, t.b.retryParameters, t.b.dash.xlinkFailGracefully, n, t.a.networkingEngine).then(function(t) {
                    return Dn(this, t, n)
                }.bind(t))
            }

            function Dn(t, e, n) {
                n = [n], 0 < (o = Oe(e, "Location").map(ke).filter(O)).length && (n = t.g = o), n = B(n, o = Oe(e, "BaseURL").map(ke));
                var r = xe(e, "minBufferTime", Ae);
                t.l = xe(e, "minimumUpdatePeriod", Ae, -1);
                var i = xe(e, "availabilityStartTime", Ie),
                    o = xe(e, "timeShiftBufferDepth", Ae),
                    a = xe(e, "suggestedPresentationDelay", Ae),
                    s = xe(e, "maxSegmentDuration", Ae),
                    u = e.getAttribute("type") || "static";
                if (t.c) var c = t.c.presentationTimeline;
                else {
                    var l = Math.max(10, 1.5 * r);
                    c = new An(i, null != a ? a : l)
                }
                var a = (i = jn(t, {
                        Ca: "static" != u,
                        presentationTimeline: c,
                        W: null,
                        S: null,
                        U: null,
                        A: null,
                        bandwidth: 0,
                        ec: !1
                    }, n, e)).duration,
                    f = i.periods;
                return c.ob("static" == u), c.ea(a || 1 / 0), c.Dc(null != o ? o : 1 / 0), c.Cb(s || 1), t.c ? Promise.resolve() : (e = Oe(e, "UTCTiming"), Wn(t, n, e, c.R()).then(function(t) {
                    this.a && (c.Bc(t), this.c = {
                        presentationTimeline: c,
                        periods: f,
                        offlineSessionIds: [],
                        minBufferTime: r || 0
                    })
                }.bind(t)))
            }

            function jn(t, e, n, r) {
                var i = xe(r, "mediaPresentationDuration", Ae),
                    o = [],
                    a = 0;
                r = Oe(r, "Period");
                for (var s = 0; s < r.length; s++) {
                    var u = r[s],
                        a = xe(u, "start", Ae, a),
                        c = xe(u, "duration", Ae),
                        l = null;
                    if (s != r.length - 1) {
                        var f = xe(r[s + 1], "start", Ae);
                        null != f && (l = f - a)
                    } else null != i && (l = i - a);
                    if (null == l && (l = c), u = Ln(t, e, n, {
                            start: a,
                            duration: l,
                            node: u,
                            yb: null == l || s == r.length - 1
                        }), o.push(u), c = e.W.id, -1 == t.i.indexOf(c) && (t.i.push(c), t.c && (t.a.filterNewPeriod(u), t.c.periods.push(u))), null == l) {
                        a = null;
                        break
                    }
                    a += l
                }
                return t.c || t.a.filterAllPeriods(o), null != i ? {
                    periods: o,
                    duration: i
                } : {
                    periods: o,
                    duration: a
                }
            }

            function Ln(t, e, n, r) {
                e.W = Bn(r.node, null, n), e.S = r, e.W.id || (e.W.id = "__shaka_period_" + r.start), Oe(r.node, "EventStream").forEach(t.Od.bind(t, r.start, r.duration));
                var i = (n = Oe(r.node, "AdaptationSet").map(t.Md.bind(t, e)).filter(O)).map(function(t) {
                        return t.Yd
                    }).reduce(P, []),
                    o = i.filter(k);
                if (e.Ca && i.length != o.length) throw new u(2, 4, 4018);
                var a = n.filter(function(t) {
                    return !t.Tb
                });
                if (n.filter(function(t) {
                        return t.Tb
                    }).forEach(function(t) {
                        var e = t.streams[0],
                            n = t.Tb;
                        a.forEach(function(t) {
                            t.id == n && t.streams.forEach(function(t) {
                                t.trickModeVideo = e
                            })
                        })
                    }), i = Un(a, "video"), o = Un(a, "audio"), !i.length && !o.length) throw new u(2, 4, 4004);
                for (o.length || (o = [null]), i.length || (i = [null]), e = [], n = 0; n < o.length; n++)
                    for (var s = 0; s < i.length; s++) Fn(t, o[n], i[s], e);
                for (t = Un(a, "text"), i = [], n = 0; n < t.length; n++) i.push.apply(i, t[n].streams);
                return {
                    startTime: r.start,
                    textStreams: i,
                    variants: e
                }
            }

            function Un(t, e) {
                return t.filter(function(t) {
                    return t.contentType == e
                })
            }

            function Fn(t, e, n, r) {
                if (e || n)
                    if (e && n) {
                        var i = e.drmInfos,
                            o = n.drmInfos;
                        if (i.length && o.length ? 0 < St(i, o).length : 1)
                            for (var a = St(e.drmInfos, n.drmInfos), i = 0; i < e.streams.length; i++)
                                for (var s = 0; s < n.streams.length; s++) o = (n.streams[s].bandwidth || 0) + (e.streams[i].bandwidth || 0), o = {
                                    id: t.h++,
                                    language: e.language,
                                    primary: e.Ab || n.Ab,
                                    audio: e.streams[i],
                                    video: n.streams[s],
                                    bandwidth: o,
                                    drmInfos: a,
                                    allowedByApplication: !0,
                                    allowedByKeySystem: !0
                                }, r.push(o)
                    } else
                        for (a = e || n, i = 0; i < a.streams.length; i++) o = a.streams[i].bandwidth || 0, o = {
                            id: t.h++,
                            language: a.language || "und",
                            primary: a.Ab,
                            audio: e ? a.streams[i] : null,
                            video: n ? a.streams[i] : null,
                            bandwidth: o,
                            drmInfos: a.drmInfos,
                            allowedByApplication: !0,
                            allowedByKeySystem: !0
                        }, r.push(o)
            }

            function Hn(e, n) {
                0 > e.l || (e.f = t.setTimeout(e.ue.bind(e), 1e3 * Math.max(Math.max(3, e.l) - n, 0)))
            }

            function Bn(t, e, n) {
                e = e || {
                    contentType: "",
                    mimeType: "",
                    codecs: "",
                    containsEmsgBoxes: !1,
                    frameRate: void 0,
                    Db: null
                }, n = n || e.X;
                var r = Oe(t, "BaseURL").map(ke),
                    i = t.getAttribute("contentType") || e.contentType,
                    o = t.getAttribute("mimeType") || e.mimeType,
                    a = t.getAttribute("codecs") || e.codecs,
                    s = xe(t, "frameRate", je) || e.frameRate,
                    u = !!Oe(t, "InbandEventStream").length,
                    c = zn(c = Oe(t, "AudioChannelConfiguration")) || e.Db;
                return i || (i = Kn(o, a)), {
                    X: B(n, r),
                    Ua: Ce(t, "SegmentBase") || e.Ua,
                    pa: Ce(t, "SegmentList") || e.pa,
                    Va: Ce(t, "SegmentTemplate") || e.Va,
                    width: xe(t, "width", De) || e.width,
                    height: xe(t, "height", De) || e.height,
                    contentType: i,
                    mimeType: o,
                    codecs: a,
                    frameRate: s,
                    containsEmsgBoxes: u || e.containsEmsgBoxes,
                    id: t.getAttribute("id"),
                    Db: c
                }
            }

            function zn(t) {
                for (var e = 0; e < t.length; ++e) {
                    var n = t[e],
                        r = n.getAttribute("schemeIdUri");
                    if (r && (n = n.getAttribute("value"))) switch (r) {
                        case "urn:mpeg:dash:outputChannelPositionList:2012":
                            return n.trim().split(/ +/).length;
                        case "urn:mpeg:dash:23003:3:audio_channel_configuration:2011":
                        case "urn:dts:dash:audio_channel_configuration:2012":
                            if (!(r = parseInt(n, 10))) continue;
                            return r;
                        case "tag:dolby.com,2014:dash:audio_channel_configuration:2011":
                        case "urn:dolby:dash:audio_channel_configuration:2011":
                            if (r = parseInt(n, 16)) {
                                for (t = 0; r;) 1 & r && ++t, r >>= 1;
                                return t
                            }
                    }
                }
                return null
            }

            function qn(t) {
                var e = 0 + (t.Ua ? 1 : 0);
                return e += t.pa ? 1 : 0, (e += t.Va ? 1 : 0) ? (1 != e && (t.Ua && (t.pa = null), t.Va = null), !0) : "text" == t.contentType || "application" == t.contentType
            }

            function Vn(t, e, n, r) {
                return e = B(e, [n]), e = I(e, t.b.retryParameters), e.method = r, t.a.networkingEngine.request(0, e).then(function(t) {
                    if ("HEAD" == r) {
                        if (!t.headers || !t.headers.date) return 0;
                        t = t.headers.date
                    } else t = $(t.data);
                    return t = Date.parse(t), isNaN(t) ? 0 : t - Date.now()
                })
            }

            function Wn(t, e, n, r) {
                n = n.map(function(t) {
                    return {
                        scheme: t.getAttribute("schemeIdUri"),
                        value: t.getAttribute("value")
                    }
                });
                var i = t.b.dash.clockSyncUri;
                return r && !n.length && i && n.push({
                    scheme: "urn:mpeg:dash:utc:http-head:2014",
                    value: i
                }), S(n, function(t) {
                    var n = t.value;
                    switch (t.scheme) {
                        case "urn:mpeg:dash:utc:http-head:2014":
                        case "urn:mpeg:dash:utc:http-head:2012":
                            return Vn(this, e, n, "HEAD");
                        case "urn:mpeg:dash:utc:http-xsdate:2014":
                        case "urn:mpeg:dash:utc:http-iso:2014":
                        case "urn:mpeg:dash:utc:http-xsdate:2012":
                        case "urn:mpeg:dash:utc:http-iso:2012":
                            return Vn(this, e, n, "GET");
                        case "urn:mpeg:dash:utc:direct:2014":
                        case "urn:mpeg:dash:utc:direct:2012":
                            return t = Date.parse(n), isNaN(t) ? 0 : t - Date.now();
                        case "urn:mpeg:dash:utc:http-ntp:2014":
                        case "urn:mpeg:dash:utc:ntp:2014":
                        case "urn:mpeg:dash:utc:sntp:2014":
                        default:
                            return Promise.reject()
                    }
                }.bind(t)).catch(function() {
                    return 0
                })
            }

            function Kn(t, e) {
                return $a[G(t, e)] ? "text" : t.split("/")[0]
            }

            function Yn(t, e, n, r) {
                this.uri = t, this.type = e, this.T = n, this.segments = r || null
            }

            function Gn(t, e, n, r) {
                this.id = t, this.name = e, this.a = n, this.value = r || null
            }

            function $n(t, e) {
                this.name = t, this.value = e
            }

            function Xn(t, e, n) {
                return n = n || null, (t = t.getAttribute(e)) ? t.value : n
            }

            function Jn(t, e) {
                this.T = e, this.uri = t
            }

            function Qn(t, e) {
                return t.filter(function(t) {
                    return t.name == e
                })
            }

            function Zn(t, e) {
                var n = Qn(t, e);
                return n.length ? n[0] : null
            }

            function tr(t, e, n) {
                return t.filter(function(t) {
                    var r = t.getAttribute("TYPE");
                    return t = t.getAttribute("GROUP-ID"), r.value == e && t.value == n
                })
            }

            function er(t) {
                this.b = t, this.a = 0
            }

            function nr(t, e) {
                e.lastIndex = t.a;
                var n = (n = e.exec(t.b)) ? {
                    position: n.index,
                    length: n[0].length,
                    ae: n
                } : null;
                return t.a != t.b.length && n && n.position == t.a ? (t.a += n.length, n.ae) : null
            }

            function rr(t) {
                return t.a == t.b.length ? null : (t = nr(t, /[^ \t\n]*/gm)) ? t[0] : null
            }

            function ir() {
                this.a = 0
            }

            function or(t, e, n) {
                var r = (e = (e = $(e)).replace(/\r\n|\r(?=[^\n]|$)/gm, "\n").trim()).split(/\n+/m);
                if (!/^#EXTM3U($|[ \t\n])/m.test(r[0])) throw new u(2, 4, 4015);
                e = 0;
                for (var i = [], o = 1; o < r.length;)
                    if (/^#(?!EXT)/m.test(r[o])) o += 1;
                    else {
                        var a = r[o];
                        if (a = sr(t.a++, a), 0 <= ys.indexOf(a.name)) e = 1;
                        else if (0 <= gs.indexOf(a.name)) {
                            if (1 != e) throw new u(2, 4, 4017);
                            return r = r.splice(o, r.length - o), t = ar(t, r, i), new Yn(n, e, i, t)
                        }
                        i.push(a), o += 1, "EXT-X-STREAM-INF" == a.name && (a.a.push(new $n("URI", r[o])), o += 1)
                    }
                return new Yn(n, e, i)
            }

            function ar(t, e, n) {
                var r = [],
                    i = [];
                return e.forEach(function(t) {
                    /^(#EXT)/.test(t) ? (t = sr(this.a++, t), 0 <= ys.indexOf(t.name) ? n.push(t) : i.push(t)) : /^#(?!EXT)/m.test(t) || (r.push(new Jn(t.trim(), i)), i = [])
                }.bind(t)), r
            }

            function sr(t, e) {
                if (!(i = e.match(/^#(EXT[^:]*)(?::(.*))?$/))) throw new u(2, 4, 4016);
                var n = i[1],
                    r = i[2],
                    i = [];
                if (r && 0 <= r.indexOf("="))
                    for (var o, r = new er(r), a = /([^=]+)=(?:"([^"]*)"|([^",]*))(?:,|$)/g; o = nr(r, a);) i.push(new $n(o[1], o[2] || o[3]));
                else if (r) return new Gn(t, n, i, r);
                return new Gn(t, n, i)
            }

            function ur(t) {
                return new Promise(function(e) {
                    var n = ur.parse(t);
                    e({
                        uri: t,
                        data: n.data,
                        headers: {
                            "content-type": n.contentType
                        }
                    })
                })
            }

            function cr() {
                this.h = this.b = null, this.D = 1, this.g = {}, this.C = {}, this.j = {}, this.s = {}, this.a = null, this.m = "", this.w = new ir, this.i = this.c = null, this.f = !1, this.B = null, this.l = 0
            }

            function lr(t, e, n) {
                Nr(t, n).then(function(t) {
                    if (1 != (t = or(this.w, t.data, t.uri)).type) throw new u(2, 4, 4017);
                    for (var n = Sr(this, t, (n = Zn(t.T, "EXT-X-MEDIA-SEQUENCE")) ? Number(n.value) : 0), r = e.zb, i = [], o = r.endTime, a = 0; a < n.length; a++) {
                        var s = n[a];
                        if (s.position > r.position) {
                            var c = s.endTime - s.startTime,
                                l = o,
                                f = o + c,
                                o = o + c;
                            i.push(new $e(s.position, l, f, s.a, s.V, s.K))
                        }
                    }
                    n = i, e.ce.lb(n), n.length && (e.zb = n[n.length - 1]), Zn(t.T, "EXT-X-ENDLIST") && (t = e.zb.endTime, Rr(this, !1), this.a.ea(t))
                }.bind(t))
            }

            function fr(t, e, n) {
                if (0 != (e = or(t.w, e, n)).type) throw new u(2, 4, 4022);
                return hr(t, e).then(function(t) {
                    this.b.filterAllPeriods([t]), this.f && this.a.Cc(3 * this.l), this.B = {
                        presentationTimeline: this.a,
                        periods: [t],
                        offlineSessionIds: [],
                        minBufferTime: 0
                    }
                }.bind(t))
            }

            function hr(t, e) {
                var n = e.T,
                    r = Qn(e.T, "EXT-X-MEDIA").filter(function(t) {
                        return "SUBTITLES" == Ir(t, "TYPE")
                    }.bind(t)).map(function(t) {
                        return vr(this, t, e)
                    }.bind(t));
                return Promise.all(r).then(function(t) {
                    var r = Qn(n, "EXT-X-STREAM-INF").map(function(t) {
                        return pr(this, t, e)
                    }.bind(this));
                    return Promise.all(r).then(function(e) {
                        return e = e.reduce(P, []), this.f || Pr(this, e), {
                            startTime: 0,
                            variants: e,
                            textStreams: t
                        }
                    }.bind(this))
                }.bind(t))
            }

            function pr(t, e, n) {
                var r = Xn(e, "CODECS", "avc1.42E01E,mp4a.40.2").split(","),
                    i = e.getAttribute("RESOLUTION"),
                    o = null,
                    a = null,
                    s = Xn(e, "FRAME-RATE"),
                    u = Number(Ir(e, "BANDWIDTH"));
                if (i) var c = i.value.split("x"),
                    o = c[0],
                    a = c[1];
                var l = xr(t, n);
                n = Qn(n.T, "EXT-X-MEDIA");
                var f = Xn(e, "AUDIO"),
                    h = Xn(e, "VIDEO");
                if (f ? n = tr(n, "AUDIO", f) : h && (n = tr(n, "VIDEO", h)), c = Cr("text", r)) {
                    var p = Xn(e, "SUBTITLES");
                    p && (p = tr(n, "SUBTITLES", p)).length && (t.g[p[0].id].stream.codecs = c), r.splice(r.indexOf(c), 1)
                }
                n = n.map(function(t) {
                    return yr(this, t, r, l)
                }.bind(t));
                var d = [],
                    m = [];
                return Promise.all(n).then(function(t) {
                    if (f ? d = t : h && (m = t), d.length || m.length)
                        if (d.length)
                            if (Ir(e, "URI") == d[0].Mb) {
                                t = "audio";
                                var n = !0
                            } else t = "video";
                    else t = "audio";
                    else n = !1, 1 == r.length ? (t = Cr("video", r), t = i || s || t ? "video" : "audio") : (t = "video", r = [r.join(",")]);
                    return n ? Promise.resolve() : br(this, e, r, t, l)
                }.bind(t)).then(function(t) {
                    return t && ("audio" == t.stream.type ? d = [t] : m = [t]), dr(this, d, m, u, o, a, s)
                }.bind(t))
            }

            function dr(t, e, n, r, i, o, a) {
                n.forEach(function(t) {
                    (t = t.stream) && (t.width = Number(i) || void 0, t.height = Number(o) || void 0, t.frameRate = Number(a) || void 0)
                }.bind(t)), e.length || (e = [null]), n.length || (n = [null]);
                for (var s = [], u = 0; u < e.length; u++)
                    for (var c = 0; c < n.length; c++) {
                        var l = e[u] ? e[u].stream : null,
                            f = n[c] ? n[c].stream : null,
                            h = e[u] ? e[u].drmInfos : null,
                            p = n[c] ? n[c].drmInfos : null;
                        if (l && f) {
                            if (!(h.length && p.length ? 0 < St(h, p).length : 1)) continue;
                            var d = St(h, p)
                        } else l ? d = h : f && (d = p);
                        h = (n[u] ? n[u].Mb : "") + " - " + (e[u] ? e[u].Mb : ""), t.C[h] || (l = mr(t, l, f, r, d), s.push(l), t.C[h] = l)
                    }
                return s
            }

            function mr(t, e, n, r, i) {
                return {
                    id: t.D++,
                    language: e ? e.language : "und",
                    primary: !!e && e.primary || !!n && n.primary,
                    audio: e,
                    video: n,
                    bandwidth: r,
                    drmInfos: i,
                    allowedByApplication: !0,
                    allowedByKeySystem: !0
                }
            }

            function vr(t, e, n) {
                return Ir(e, "TYPE"), n = xr(t, n), yr(t, e, [], n).then(function(t) {
                    return t.stream
                })
            }

            function yr(t, e, n, r) {
                if (t.g[e.id]) return Promise.resolve().then(function() {
                    return this.g[e.id]
                }.bind(t));
                var i = Ir(e, "TYPE").toLowerCase();
                "subtitles" == i && (i = "text");
                var o = Vt(Xn(e, "LANGUAGE", "und")),
                    a = Xn(e, "NAME"),
                    s = e.getAttribute("DEFAULT"),
                    u = e.getAttribute("AUTOSELECT"),
                    c = Xn(e, "CHANNELS"),
                    c = "audio" == i ? gr(c) : null,
                    l = Ir(e, "URI");
                return wr(t, l = B([t.m], [l])[0], n, i, r, o, !!s || !!u, a, c).then(function(t) {
                    return this.g[e.id] = t, this.s[l] = t
                }.bind(t))
            }

            function gr(t) {
                return t ? (t = t.split("/")[0], parseInt(t, 10)) : null
            }

            function br(t, e, n, r, i) {
                var o = Ir(e, "URI");
                return wr(t, o = B([t.m], [o])[0], n, r, i, "und", !1, null, null).then(function(t) {
                    return this.s[o] = t
                }.bind(t))
            }

            function wr(t, e, n, r, i, o, a, s, c) {
                var l = e;
                return e = B([t.m], [e])[0], Nr(t, e).then(function(t) {
                    if (1 != (t = or(this.w, t.data, t.uri)).type) throw new u(2, 4, 4017);
                    var e = Sr(this, t, (p = Zn(t.T, "EXT-X-MEDIA-SEQUENCE")) ? Number(p.value) : 0),
                        f = new an(e);
                    _r(this, t), this.a || Er(this, e[e.length - 1].endTime), i = xr(this, t) || i;
                    var h = null;
                    if ("text" != r && (h = Tr(t)), this.a.Ga(0, e), !this.f) {
                        var p = e[e.length - 1].endTime - e[0].startTime,
                            d = this.a.Y();
                        (1 / 0 == d || d < p) && this.a.ea(p)
                    }
                    var m = Or(r, n),
                        v = void 0;
                    "text" == r && (v = "subtitle");
                    var y = [];
                    t.segments.forEach(function(t) {
                        t = Qn(t.T, "EXT-X-KEY"), y.push.apply(y, t)
                    });
                    var g = !1,
                        b = [],
                        w = null;
                    if (y.forEach(function(t) {
                            if ("NONE" != Ir(t, "METHOD")) {
                                g = !0;
                                var e = Ir(t, "KEYFORMAT");
                                (t = (e = _s[e]) ? e(t) : null) && (t.keyIds.length && (w = t.keyIds[0]), b.push(t))
                            }
                        }), g && !b.length) throw new u(2, 4, 4026);
                    return kr(this, r, m, e[0].a()[0]).then(function(t) {
                        return t = {
                            id: this.D++,
                            createSegmentIndex: Promise.resolve.bind(Promise),
                            findSegmentPosition: f.find.bind(f),
                            getSegmentReference: f.get.bind(f),
                            initSegmentReference: h,
                            presentationTimeOffset: i || 0,
                            mimeType: t,
                            codecs: m,
                            kind: v,
                            encrypted: g,
                            keyId: w,
                            language: o,
                            label: s || null,
                            type: r,
                            primary: a,
                            trickModeVideo: null,
                            containsEmsgBoxes: !1,
                            frameRate: void 0,
                            width: void 0,
                            height: void 0,
                            bandwidth: void 0,
                            roles: [],
                            channelsCount: c
                        }, this.j[t.id] = f, {
                            stream: t,
                            ce: f,
                            drmInfos: b,
                            Mb: l,
                            zb: e[e.length - 1]
                        }
                    }.bind(this))
                }.bind(t))
            }

            function _r(t, e) {
                var n = Zn(e.T, "EXT-X-PLAYLIST-TYPE");
                if (Zn(e.T, "EXT-X-ENDLIST") || n && "VOD" == n.value) Rr(t, !1);
                else {
                    if (!n) throw new u(2, 4, 4029);
                    n = Ar(e.T, "EXT-X-TARGETDURATION"), n = Number(n.value), t.c ? t.c > n && (t.c = n) : (Rr(t, !0), t.c = n), t.l = Math.max(n, t.l)
                }
            }

            function Er(t, e) {
                var n = null,
                    r = 0;
                t.f && (n = Date.now() / 1e3 - e, r = 3 * t.l), t.a = new An(n, r), t.a.ob(!t.f)
            }

            function Tr(t) {
                var e = Qn(t.T, "EXT-X-MAP");
                if (!e.length) return null;
                if (1 < e.length) throw new u(2, 4, 4020);
                var n = Ir(e = e[0], "URI"),
                    r = B([t.uri], [n])[0];
                return t = 0, n = null, (e = Xn(e, "BYTERANGE")) && (t = e.split("@"), e = Number(t[0]), t = Number(t[1]), n = t + e - 1), new Ge(function() {
                    return [r]
                }, t, n)
            }

            function Sr(t, e, n) {
                var r = e.segments,
                    i = [];
                return r.forEach(function(t) {
                    var o, a = t.T,
                        s = B([e.uri], [t.uri])[0],
                        u = Ar(a, "EXTINF").value.split(","),
                        u = Number(u[0]),
                        u = (o = (t = r.indexOf(t)) ? i[t - 1].endTime : 0) + u,
                        c = 0,
                        l = null;
                    (a = Zn(a, "EXT-X-BYTERANGE")) && (a = a.value.split("@"), l = Number(a[0]), c = a[1] ? Number(a[1]) : i[t - 1].K + 1, l = c + l - 1, t == r.length - 1 && (l = null)), i.push(new $e(n + t, o, u, function() {
                        return [s]
                    }, c, l))
                }.bind(t)), i
            }

            function Pr(t, e) {
                e.forEach(function(t) {
                    var e = this.a.Y(),
                        n = t.video;
                    t = t.audio, n && this.j[n.id] && sn(this.j[n.id], e), t && this.j[t.id] && sn(this.j[t.id], e)
                }.bind(t))
            }

            function Cr(t, e) {
                for (var n = bs[t], r = 0; r < n.length; r++)
                    for (var i = 0; i < e.length; i++)
                        if (n[r].test(e[i].trim())) return e[i].trim();
                return "text" == t ? "" : null
            }

            function Or(t, e) {
                if (1 == e.length) return e[0];
                var n = Cr(t, e);
                if (null != n) return n;
                throw new u(2, 4, 4025, e)
            }

            function kr(t, e, n, r) {
                var i = r.split("."),
                    o = i[i.length - 1];
                return (i = ws[e][o]) ? Promise.resolve(i) : "text" == e ? n && "vtt" != n ? Promise.resolve("application/mp4") : Promise.resolve("text/vtt") : (e = I([r], t.h.retryParameters), e.method = "HEAD", t.b.networkingEngine.request(1, e).then(function(t) {
                    if (!(t = t.headers["content-type"])) throw new u(2, 4, 4021, o);
                    return t.split(";")[0]
                }))
            }

            function xr(t, e) {
                var n = Zn(e.T, "EXT-X-START");
                return n ? Number(Ir(n, "TIME-OFFSET")) : t.h.hls.defaultTimeOffset
            }

            function Ir(t, e) {
                var n = t.getAttribute(e);
                if (!n) throw new u(2, 4, 4023, e);
                return n.value
            }

            function Ar(t, e) {
                var n = Zn(t, e);
                if (!n) throw new u(2, 4, 4024, e);
                return n
            }

            function Nr(t, e) {
                return t.b.networkingEngine.request(0, I([e], t.h.retryParameters))
            }

            function Mr(e, n) {
                null != e.c && null != n && (e.i = t.setTimeout(e.I.bind(e), 1e3 * n))
            }

            function Rr(e, n) {
                e.f = n, e.a && e.a.ob(!n), n || null == e.i || (t.clearTimeout(e.i), e.i = null, e.c = null)
            }

            function Dr(t, e, n, r, i, o) {
                this.a = t, this.c = e, this.l = n, this.B = r, this.I = i, this.D = o, this.b = new j, this.h = !1, this.g = 1, this.j = this.f = null, this.C = t.readyState, this.i = !1, this.w = this.O = -1, this.m = this.s = !1, 0 < t.readyState ? this.kc() : U(this.b, t, "loadedmetadata", this.kc.bind(this)), e = this.mc.bind(this), L(this.b, t, "ratechange", this.Ad.bind(this)), L(this.b, t, "waiting", e), this.j = setInterval(e, 250)
            }

            function jr(t, e) {
                0 < t.a.readyState ? t.a.currentTime = zr(t, e) : t.B = e
            }

            function Lr(t) {
                return 0 < t.a.readyState ? zr(t, t.a.currentTime) : Ur(t)
            }

            function Ur(t) {
                return t.B ? zr(t, t.B) : (t = t.c.presentationTimeline, 1 / 0 > t.Y() ? t.ia() : t.kb())
            }

            function Fr(e, n) {
                null != e.f && (t.clearInterval(e.f), e.f = null), e.g = n, e.a.playbackRate = e.h || 0 > n ? 0 : n, !e.h && 0 > n && (e.f = t.setInterval(function() {
                    this.a.currentTime += n / 4
                }.bind(e), 250))
            }

            function Hr(t, e) {
                var n = Ct.bind(null, t.a.buffered),
                    r = 1 * Math.max(t.c.minBufferTime || 0, t.l.rebufferingGoal),
                    i = t.c.presentationTimeline,
                    o = i.va(),
                    a = i.Da(r),
                    s = i.Da(5),
                    r = i.Da(r + 5);
                return e > o ? o : e < i.Da(0) ? n(s) ? s : r : e >= a || n(e) ? e : r
            }

            function Br(t, e, n) {
                t.a.currentTime = n;
                var r = 0,
                    i = function() {
                        !this.a || 10 <= r++ || this.a.currentTime != e || (this.a.currentTime = n, setTimeout(i, 100))
                    }.bind(t);
                setTimeout(i, 100)
            }

            function zr(t, e) {
                var n = t.c.presentationTimeline.ia();
                return e < n ? n : (n = t.c.presentationTimeline.va(), e > n ? n : e)
            }

            function qr(t, e, n, r, i, o, a) {
                this.a = t, this.B = e, this.g = n, this.w = r, this.l = i, this.h = o, this.C = a, this.c = [], this.j = new j, this.b = !1, this.i = -1, this.f = null, Wr(this)
            }

            function Vr(t) {
                var e = T(t);
                return e.eventElement = t.eventElement, e
            }

            function Wr(e) {
                Kr(e), e.f = t.setTimeout(e.D.bind(e), 250)
            }

            function Kr(e) {
                e.f && (t.clearTimeout(e.f), e.f = null)
            }

            function Yr(t, e) {
                this.a = e, this.b = t, this.h = null, this.i = 1, this.m = Promise.resolve(), this.g = [], this.j = {}, this.c = {}, this.s = !1, this.w = null, this.f = this.l = !1
            }

            function Gr(t) {
                return t.b.periods[ae(t.b, Lr(t.a.Sa))]
            }

            function $r(t) {
                var e = t.c.video || t.c.audio;
                return e ? t.b.periods[e.xa] : null
            }

            function Xr(t) {
                return W(t.c, function(t) {
                    return t.oa || t.stream
                })
            }

            function Jr(t, e) {
                var n = t.c.video;
                if (n) {
                    var r = n.stream;
                    if (r)
                        if (e) {
                            var i = r.trickModeVideo;
                            if (i) {
                                var o = n.oa;
                                o || (Zr(t, i, !1), n.oa = r)
                            }
                        } else(o = n.oa) && (n.oa = null, Zr(t, o, !0))
                }
            }

            function Qr(t, e, n) {
                e.video && Zr(t, e.video, n), e.audio && Zr(t, e.audio, n)
            }

            function Zr(t, e, n) {
                var r = t.c[e.type];
                if (!r && "text" == e.type && t.h.ignoreTextStreamFailures) ni(t, {
                    text: e
                });
                else if (r) {
                    var i = se(t.b, e);
                    n && i != r.xa ? ei(t) : (r.oa && (e.trickModeVideo ? (r.oa = e, e = e.trickModeVideo) : r.oa = null), (i = t.g[i]) && i.Ka && (i = t.j[e.id]) && i.Ka && r.stream != e && ("text" == e.type && Rt(t.a.M, G(e.mimeType, e.codecs)), r.stream = e, r.mb = !0, n && (r.ta ? r.sb = !0 : r.ya ? (r.ra = !0, r.sb = !0) : (bi(r), yi(t, r, !0)))))
                }
            }

            function ti(t) {
                var e = Lr(t.a.Sa);
                Object.keys(t.c).every(function(t) {
                    var n = this.a.M;
                    return "text" == t ? (t = n.a, t = e >= t.b && e < t.a) : (t = jt(n, t), t = Ct(t, e)), t
                }.bind(t)) || ei(t)
            }

            function ei(t) {
                for (var e in t.c) {
                    var n = t.c[e];
                    n.ta || n.ra || (n.ya ? n.ra = !0 : null == Dt(t.a.M, e) ? null == n.qa && gi(t, n, 0) : (bi(n), yi(t, n, !1)))
                }
            }

            function ni(t, e, n) {
                var r = ae(t.b, Lr(t.a.Sa)),
                    i = {},
                    o = [];
                return e.variant && e.variant.audio && (i.audio = e.variant.audio, o.push(e.variant.audio)), e.variant && e.variant.video && (i.video = e.variant.video, o.push(e.variant.video)), e.text && (i.text = e.text, o.push(e.text)), t.a.M.init(i), oi(t), ii(t, o).then(function() {
                    if (!this.f)
                        for (var t in i) {
                            var e = i[t];
                            this.c[t] || (this.c[t] = {
                                stream: e,
                                type: t,
                                Ea: null,
                                ja: null,
                                oa: null,
                                mb: !0,
                                xa: r,
                                endOfStream: !1,
                                ya: !1,
                                qa: null,
                                ra: !1,
                                sb: !1,
                                ta: !1,
                                Lb: !1,
                                Pa: !1,
                                wc: n || 0
                            }, gi(this, this.c[t], 0))
                        }
                }.bind(t))
            }

            function ri(t, e) {
                var n = t.g[e];
                if (n) return n.N;
                n = {
                    N: new g,
                    Ka: !1
                }, t.g[e] = n;
                var r = t.b.periods[e].variants.map(function(t) {
                    var e = [];
                    return t.audio && e.push(t.audio), t.video && e.push(t.video), t.video && t.video.trickModeVideo && e.push(t.video.trickModeVideo), e
                }).reduce(P, []).filter(k);
                return r.push.apply(r, t.b.periods[e].textStreams), t.m = t.m.then(function() {
                    if (!this.f) return ii(this, r)
                }.bind(t)).then(function() {
                    this.f || (this.g[e].N.resolve(), this.g[e].Ka = !0)
                }.bind(t)).catch(function(t) {
                    this.f || (this.g[e].N.reject(), delete this.g[e], this.a.onError(t))
                }.bind(t)), n.N
            }

            function ii(t, e) {
                e.map(function(t) {
                    return t.id
                }).filter(k);
                for (var n = [], r = 0; r < e.length; ++r) {
                    var i = e[r],
                        o = t.j[i.id];
                    o ? n.push(o.N) : (t.j[i.id] = {
                        N: new g,
                        Ka: !1
                    }, n.push(i.createSegmentIndex()))
                }
                return Promise.all(n).then(function() {
                    if (!this.f)
                        for (var t = 0; t < e.length; ++t) {
                            var n = this.j[e[t].id];
                            n.Ka || (n.N.resolve(), n.Ka = !0)
                        }
                }.bind(t)).catch(function(t) {
                    if (!this.f) return this.j[i.id].N.reject(), delete this.j[i.id], Promise.reject(t)
                }.bind(t))
            }

            function oi(t) {
                var e = t.b.presentationTimeline.Y();
                1 / 0 > e ? t.a.M.ea(e) : t.a.M.ea(Math.pow(2, 32))
            }

            function ai(t, e) {
                var n = Lr(t.a.Sa),
                    r = e.Ea && e.ja ? t.b.periods[se(t.b, e.Ea)].startTime + e.ja.endTime : Math.max(n, e.wc),
                    i = se(t.b, e.stream),
                    o = ae(t.b, r),
                    a = t.a.M,
                    s = e.type;
                return "text" == s ? (a = a.a, a = null == a.a || a.a < n ? 0 : a.a - Math.max(n, a.b)) : (a = jt(a, s), a = Ot(a, n)), s = Math.max(t.i * Math.max(t.b.minBufferTime || 0, t.h.rebufferingGoal), t.i * t.h.bufferingGoal), r >= t.b.presentationTimeline.Y() ? (e.endOfStream = !0, null) : (e.endOfStream = !1, e.xa = o, o != i ? null : a >= s ? .5 : (r = t.a.M, o = e.type, r = "text" == o ? r.a.a : Pt(jt(r, o)), e.ja && e.stream == e.Ea ? (o = e.ja.position + 1, r = si(t, e, i, o)) : null == (o = e.ja ? e.stream.findSegmentPosition(Math.max(0, t.b.periods[se(t.b, e.Ea)].startTime + e.ja.endTime - t.b.periods[i].startTime)) : e.stream.findSegmentPosition(Math.max(0, (r || n) - t.b.periods[i].startTime))) ? r = null : (a = null, null == r && (a = si(t, e, i, Math.max(0, o - 1))), r = a || si(t, e, i, o)), r ? (e.wc = 0, ui(t, e, n, i, r), null) : 1))
            }

            function si(t, e, n, r) {
                return n = t.b.periods[n], (e = e.stream.getSegmentReference(r)) ? (t = t.b.presentationTimeline, r = t.va(), n.startTime + e.endTime < t.ia() || n.startTime + e.startTime > r ? null : e) : null
            }

            function ui(t, e, n, r, i) {
                var o = t.b.periods[r],
                    a = e.stream,
                    s = t.b.periods[r + 1],
                    u = null,
                    u = s ? s.startTime : t.b.presentationTimeline.Y();
                r = li(t, e, r, u), e.ya = !0, e.mb = !1, s = vi(t, i), Promise.all([r, s]).then(function(t) {
                    if (!this.f && !this.l) return fi(this, e, n, o, a, i, t[1])
                }.bind(t)).then(function() {
                    this.f || this.l || (e.ya = !1, e.Lb = !1, e.ra || this.a.Fb(), gi(this, e, 0), pi(this, a))
                }.bind(t)).catch(function(t) {
                    this.f || this.l || (e.ya = !1, "text" == e.type && this.h.ignoreTextStreamFailures ? delete this.c.text : 3017 == t.code ? ci(this, e, t) : (e.Pa = !0, t.severity = 2, wi(this, t)))
                }.bind(t))
            }

            function ci(t, e, n) {
                if (!V(t.c).some(function(t) {
                        return t != e && t.Lb
                    })) {
                    var r = Math.round(100 * t.i);
                    if (20 < r) t.i -= .2;
                    else {
                        if (!(4 < r)) return e.Pa = !0, t.l = !0, void t.a.onError(n);
                        t.i -= .04
                    }
                    e.Lb = !0
                }
                gi(t, e, 4)
            }

            function li(t, e, n, r) {
                return e.mb ? (n = Ft(t.a.M, e.type, t.b.periods[n].startTime - e.stream.presentationTimeOffset, r), e.stream.initSegmentReference ? (t = vi(t, e.stream.initSegmentReference).then(function(t) {
                    if (!this.f) return Lt(this.a.M, e.type, t, null, null)
                }.bind(t)).catch(function(t) {
                    return e.mb = !0, Promise.reject(t)
                }), Promise.all([n, t])) : n) : Promise.resolve()
            }

            function fi(t, e, n, r, i, o, a) {
                return i.containsEmsgBoxes && (new Qe).aa("emsg", t.Nd.bind(t, r, o)).parse(a), hi(t, e, n).then(function() {
                    if (!this.f) return Lt(this.a.M, e.type, a, o.startTime + r.startTime, o.endTime + r.startTime)
                }.bind(t)).then(function() {
                    if (!this.f) return e.Ea = i, e.ja = o, Promise.resolve()
                }.bind(t))
            }

            function hi(t, e, n) {
                var r = Dt(t.a.M, e.type);
                return null == r ? Promise.resolve() : 0 >= (n = n - r - t.h.bufferBehind) ? Promise.resolve() : t.a.M.remove(e.type, r, r + n).then(function() {}.bind(t))
            }

            function pi(t, e) {
                if (!t.s && (t.s = V(t.c).every(function(t) {
                        return "text" == t.type || !t.ra && !t.ta && t.ja
                    }), t.s)) {
                    var n = se(t.b, e);
                    for (t.g[n] || ri(t, n).then(function() {
                            this.a.fc()
                        }.bind(t)).catch(C), n = 0; n < t.b.periods.length; ++n) ri(t, n).catch(C);
                    t.a.Fd && t.a.Fd()
                }
            }

            function di(t, e) {
                if (e.xa != se(t.b, e.stream)) {
                    var n = e.xa,
                        r = V(t.c);
                    r.every(function(t) {
                        return t.xa == n
                    }) && r.every(mi) && ri(t, n).then(function() {
                        if (!this.f && r.every(function(t) {
                                var e = se(this.b, t.stream);
                                return mi(t) && t.xa == n && e != n
                            }.bind(this))) {
                            var t = this.b.periods[n],
                                e = this.a.gc(t),
                                i = {};
                            e.variant && e.variant.video && (i.video = e.variant.video), e.variant && e.variant.audio && (i.audio = e.variant.audio), e.text && (i.text = e.text);
                            for (var o in this.c)
                                if (!i[o] && "text" != o) return void this.a.onError(new u(2, 5, 5005));
                            for (o in i)
                                if (!this.c[o]) {
                                    if ("text" != o) return void this.a.onError(new u(2, 5, 5005));
                                    ni(this, {
                                        text: i.text
                                    }, t.startTime), delete i[o]
                                }
                            for (o in this.c)(t = i[o]) ? (Zr(this, t, !1), gi(this, this.c[o], 0)) : delete this.c[o];
                            this.a.fc()
                        }
                    }.bind(t)).catch(C)
                }
            }

            function mi(t) {
                return !t.ya && null == t.qa && !t.ra && !t.ta
            }

            function vi(t, e) {
                var n = I(e.a(), t.h.retryParameters);
                if (e.V || null != e.K) {
                    var r = "bytes=" + e.V + "-";
                    null != e.K && (r += e.K), n.headers.Range = r
                }
                return t.a.nd.request(1, n).then(function(t) {
                    return t.data
                })
            }

            function yi(t, e, n) {
                e.ra = !1, e.sb = !1, e.ta = !0, Ut(t.a.M, e.type).then(function() {
                    if (!this.f && n) {
                        var t = this.a.M,
                            r = e.type;
                        return "text" == r ? Promise.resolve() : Ht(t, r, t.Tc.bind(t, r))
                    }
                }.bind(t)).then(function() {
                    this.f || (e.Ea = null, e.ja = null, e.ta = !1, e.endOfStream = !1, gi(this, e, 0))
                }.bind(t))
            }

            function gi(e, n, r) {
                n.qa = t.setTimeout(e.xe.bind(e, n), 1e3 * r)
            }

            function bi(e) {
                null != e.qa && (t.clearTimeout(e.qa), e.qa = null)
            }

            function wi(t, e) {
                w(t.w).then(function() {
                    this.a.onError(e), e.handled || this.h.failureCallback(e)
                }.bind(t))
            }

            function _i(t, e) {
                return new Promise(function(n, r) {
                    var i = new XMLHttpRequest;
                    i.open(e.method, t, !0), i.responseType = "arraybuffer", i.timeout = e.retryParameters.timeout, i.withCredentials = e.allowCrossSiteCredentials, i.onload = function(e) {
                        var i = (e = e.target).getAllResponseHeaders().split("\r\n").reduce(function(t, e) {
                            var n = e.split(": ");
                            return t[n[0].toLowerCase()] = n.slice(1).join(": "), t
                        }, {});
                        if (200 <= e.status && 299 >= e.status && 202 != e.status) e.responseURL && (t = e.responseURL), n({
                            uri: t,
                            data: e.response,
                            headers: i,
                            fromCache: !!i["x-shaka-from-cache"]
                        });
                        else {
                            var o = null;
                            try {
                                o = J(e.response)
                            } catch (t) {}
                            r(new u(401 == e.status || 403 == e.status ? 2 : 1, 1, 1001, t, e.status, o, i))
                        }
                    }, i.onerror = function() {
                        r(new u(1, 1, 1002, t))
                    }, i.ontimeout = function() {
                        r(new u(1, 1, 1003, t))
                    };
                    for (var o in e.headers) i.setRequestHeader(o, e.headers[o]);
                    i.send(e.body)
                })
            }

            function Ei() {
                this.a = null, this.b = [], this.c = {}
            }

            function Ti(t, e, n) {
                return Ci(t, e, "readwrite", function(t) {
                    t.put(n)
                })
            }

            function Si(t, e, n) {
                return Ci(t, "segment", "readwrite", function(t) {
                    for (var r = 0; r < e.length; r++) t.delete(e[r]).onsuccess = n || function() {}
                })
            }

            function Pi(t, e) {
                var n = 0;
                return Ci(t, e, "readonly", function(t) {
                    t.openCursor(null, "prev").onsuccess = function(t) {
                        (t = t.target.result) && (n = t.key + 1)
                    }
                }).then(function() {
                    return n
                })
            }

            function Ci(t, e, n, r) {
                var i = {
                    transaction: t.a.transaction([e], n),
                    N: new g
                };
                return i.transaction.oncomplete = function() {
                    this.b.splice(this.b.indexOf(i), 1), i.N.resolve()
                }.bind(t), i.transaction.onabort = function(t) {
                    this.b.splice(this.b.indexOf(i), 1), ki(i.transaction, i.N, t)
                }.bind(t), i.transaction.onerror = function(t) {
                    t.preventDefault()
                }.bind(t), e = i.transaction.objectStore(e), r(e), t.b.push(i), i.N
            }

            function Oi(e, n, r) {
                var i = t.indexedDB.open("shaka_offline_db", 1),
                    o = !1,
                    a = new g;
                return i.onupgradeneeded = function(t) {
                    o = !0, t = t.target.result;
                    for (var e in n) t.createObjectStore(e, {
                        keyPath: n[e]
                    })
                }, i.onsuccess = function(t) {
                    r && !o ? (t.target.result.close(), setTimeout(function() {
                        Oi(this, n, r - 1).then(a.resolve, a.reject)
                    }.bind(this), 1e3)) : (this.a = t.target.result, a.resolve())
                }.bind(e), i.onerror = ki.bind(null, i, a), a
            }

            function ki(t, e, n) {
                t.error ? e.reject(new u(2, 9, 9001, t.error)) : e.reject(new u(2, 9, 9002)), n.preventDefault()
            }

            function xi(t) {
                var e = $t(n = Ii(t.periods[0], [], new An(null, 0)), null, null),
                    n = Xt(n, null);
                return e.push.apply(e, n), {
                    offlineUri: "offline:" + t.key,
                    originalManifestUri: t.originalManifestUri,
                    duration: t.duration,
                    size: t.size,
                    expiration: void 0 == t.expiration ? 1 / 0 : t.expiration,
                    tracks: e,
                    appMetadata: t.appMetadata
                }
            }

            function Ii(t, e, n) {
                var r = t.streams.filter(function(t) {
                    return "text" == t.contentType
                });
                return e = Ni(t.streams.filter(function(t) {
                    return "audio" == t.contentType
                }), t.streams.filter(function(t) {
                    return "video" == t.contentType
                }), e), r = r.map(Ri), t.streams.forEach(function(t) {
                    t = Ai(t), n.Ga(0, t)
                }), {
                    startTime: t.startTime,
                    variants: e,
                    textStreams: r
                }
            }

            function Ai(t) {
                return t.segments.map(function(t, e) {
                    return new $e(e, t.startTime, t.endTime, function() {
                        return [t.uri]
                    }, 0, null)
                })
            }

            function Ni(t, e, n) {
                var r = [];
                if (!t.length && !e.length) return r;
                t.length ? e.length || (e = [null]) : t = [null];
                for (var i = 0, o = 0; o < t.length; o++)
                    for (var a = 0; a < e.length; a++)
                        if (Mi(t[o], e[a])) {
                            var s = t[o],
                                u = e[a],
                                c = n;
                            s = {
                                id: i++,
                                language: s ? s.language : "",
                                primary: !!s && s.primary || !!u && u.primary,
                                audio: Ri(s),
                                video: Ri(u),
                                bandwidth: 0,
                                drmInfos: c,
                                allowedByApplication: !0,
                                allowedByKeySystem: !0
                            }, r.push(s)
                        }
                return r
            }

            function Mi(t, e) {
                if (!(t && e && t.variantIds && e.variantIds)) return !0;
                for (var n = 0; n < t.variantIds.length; n++)
                    if (e.variantIds.some(function(e) {
                            return e == t.variantIds[n]
                        })) return !0;
                return !1
            }

            function Ri(t) {
                if (!t) return null;
                var e = new an(e = Ai(t));
                return {
                    id: t.id,
                    createSegmentIndex: Promise.resolve.bind(Promise),
                    findSegmentPosition: e.find.bind(e),
                    getSegmentReference: e.get.bind(e),
                    initSegmentReference: t.initSegmentUri ? new Ge(function() {
                        return [t.initSegmentUri]
                    }, 0, null) : null,
                    presentationTimeOffset: t.presentationTimeOffset,
                    mimeType: t.mimeType,
                    codecs: t.codecs,
                    width: t.width || void 0,
                    height: t.height || void 0,
                    frameRate: t.frameRate || void 0,
                    kind: t.kind,
                    encrypted: t.encrypted,
                    keyId: t.keyId,
                    language: t.language,
                    label: t.label || null,
                    type: t.contentType,
                    primary: t.primary,
                    trickModeVideo: null,
                    containsEmsgBoxes: !1,
                    roles: [],
                    channelsCount: null
                }
            }

            function Di() {
                return t.indexedDB ? new Ei : null
            }

            function ji(t, e, n, r) {
                this.b = {}, this.l = [], this.m = r, this.j = t, this.s = e, this.w = n, this.i = this.a = null, this.f = this.g = this.h = this.c = 0
            }

            function Li(t, e, n, r, i) {
                t.b[e] = t.b[e] || [], t.b[e].push({
                    uris: n.a(),
                    V: n.V,
                    K: n.K,
                    Xb: r,
                    Nb: i
                })
            }

            function Ui(t, e) {
                t.c = 0, t.h = 0, t.g = 0, t.f = 0, V(t.b).forEach(function(t) {
                    t.forEach(function(t) {
                        null != t.K ? this.c += t.K - t.V + 1 : this.g += t.Xb
                    }.bind(this))
                }.bind(t)), t.a = e, t.a.size = t.c;
                var n = V(t.b).map(function(t) {
                    var e = 0,
                        n = function() {
                            return this.m ? e >= t.length ? Promise.resolve() : Fi(this, t[e++]).then(n) : Promise.reject(new u(2, 9, 9002))
                        }.bind(this);
                    return n()
                }.bind(t));
                return t.b = {}, t.i = Promise.all(n).then(function() {
                    return Ti(this.j, "manifest", e)
                }.bind(t)).then(function() {
                    this.l = []
                }.bind(t)), t.i
            }

            function Fi(t, e) {
                var n = I(e.uris, t.w);
                (e.V || null != e.K) && (n.headers.Range = "bytes=" + e.V + "-" + (null == e.K ? "" : e.K));
                var r;
                return t.s.request(1, n).then(function(t) {
                    return this.a ? (r = t.data.byteLength, this.l.push(e.Nb.key), e.Nb.data = t.data, Ti(this.j, "segment", e.Nb)) : Promise.reject(new u(2, 9, 9002))
                }.bind(t)).then(function() {
                    if (!this.a) return Promise.reject(new u(2, 9, 9002));
                    null == e.K ? (this.a.size += r, this.f += e.Xb) : this.h += r;
                    var t = (this.h + this.f) / (this.c + this.g),
                        n = xi(this.a);
                    this.m.progressCallback(n, t)
                }.bind(t))
            }

            function Hi() {
                this.a = -1
            }

            function Bi(t) {
                var e = new An(null, 0);
                e.ea(t.duration);
                var n = t.drmInfo ? [t.drmInfo] : [];
                return {
                    presentationTimeline: e,
                    minBufferTime: 10,
                    offlineSessionIds: t.sessionIds,
                    periods: t.periods.map(function(t) {
                        return Ii(t, n, e)
                    })
                }
            }

            function zi(t) {
                if (/^offline:([0-9]+)$/.exec(t)) {
                    var e = {
                        uri: t,
                        data: new ArrayBuffer(0),
                        headers: {
                            "content-type": "application/x-offline-manifest"
                        }
                    };
                    return Promise.resolve(e)
                }
                if (e = /^offline:[0-9]+\/[0-9]+\/([0-9]+)$/.exec(t)) {
                    var n = Number(e[1]),
                        r = Di();
                    return r ? r.init(Es).then(function() {
                        return r.get("segment", n)
                    }).then(function(e) {
                        return r.o().then(function() {
                            if (!e) throw new u(2, 9, 9003, n);
                            return {
                                uri: t,
                                data: e.data,
                                headers: {}
                            }
                        })
                    }) : Promise.reject(new u(2, 9, 9e3))
                }
                return Promise.reject(new u(2, 1, 9004, t))
            }

            function qi(t) {
                this.a = null;
                for (var e = 0; e < t.textTracks.length; ++e) {
                    var n = t.textTracks[e];
                    n.mode = "disabled", "Shaka Player TextTrack" == n.label && (this.a = n)
                }
                this.a || (this.a = t.addTextTrack("subtitles", "Shaka Player TextTrack")), this.a.mode = "hidden"
            }

            function Vi(t) {
                if (t.startTime >= t.endTime) return null;
                var e = new VTTCue(t.startTime, t.endTime, t.l);
                e.lineAlign = t.h, e.positionAlign = t.i, e.size = t.size;
                try {
                    e.align = t.f
                } catch (t) {}
                return "center" == t.f && "center" != e.align && (e.position = "auto", e.align = "middle"), t.b == Us ? e.vertical = "lr" : t.b == Fs && (e.vertical = "rl"), t.g == Bs && (e.snapToLines = !1), null != t.c && (e.line = t.c), null != t.position && (e.position = t.position), e
            }

            function Wi(t, e) {
                for (var n = t.a.cues, r = [], i = 0; i < n.length; ++i) e(n[i]) && r.push(n[i]);
                for (i = 0; i < r.length; ++i) t.a.removeCue(r[i])
            }

            function Ki() {
                this.a = Promise.resolve(), this.b = this.c = this.f = !1, this.i = new Promise(function(t) {
                    this.g = t
                }.bind(this))
            }

            function Yi(t) {
                return t.f || (t.a = t.a.then(function(t) {
                    return this.c = !0, Promise.resolve(t)
                }.bind(t), function(t) {
                    return this.c = !0, this.b ? (this.g(), Promise.reject(this.h)) : Promise.reject(t)
                }.bind(t))), t.f = !0, t.a
            }

            function Gi(t, e) {
                ye.call(this), this.I = !1, this.f = t, this.gb = !1, this.w = null, this.m = new j, this.g = this.fb = this.b = this.l = this.a = this.B = this.h = this.cb = this.Ma = this.O = this.j = this.s = null, this.Jc = 1e9, this.ab = [], this.Na = !1, this.ga = !0, this.sa = this.Oa = this.D = null, this.Vb = !1, this.fa = null, this.eb = [], this.C = {}, this.c = oo(this), this.bb = {
                    width: 1 / 0,
                    height: 1 / 0
                }, this.i = ao(), this.$a = 0, this.na = this.c.preferredAudioLanguage, this.Xa = this.c.preferredTextLanguage, this.tb = this.Ya = "", this.Wb = !0, e && e(this), this.s = new x(this.pe.bind(this)), this.cb = Xi(this), L(this.m, this.f, "error", this.Hd.bind(this))
            }

            function $i(t) {
                function e(t) {
                    return (t.video ? t.video.codecs.split(".")[0] : "") + "-" + (t.audio ? t.audio.codecs.split(".")[0] : "")
                }
                var n = {};
                t.b.periods.forEach(function(t) {
                    t.variants.forEach(function(t) {
                        var r = e(t);
                        r in n || (n[r] = []), n[r].push(t)
                    })
                });
                var r = null,
                    i = 1 / 0;
                Y(n, function(t, e) {
                    var n = 0,
                        o = 0;
                    e.forEach(function(t) {
                        n += t.bandwidth || 0, ++o
                    });
                    var a = n / o;
                    a < i && (r = t, i = a)
                }), t.b.periods.forEach(function(t) {
                    t.variants = t.variants.filter(function(t) {
                        return e(t) == r
                    })
                })
            }

            function Xi(e) {
                e.O = new MediaSource;
                var n = new g;
                return L(e.m, e.O, "sourceopen", n.resolve), e.f.src = t.URL.createObjectURL(e.O), n
            }

            function Ji(t) {
                if (t.l && t.l.configure(t.c.manifest), t.j && t.j.configure(t.c.drm), t.a) {
                    t.a.configure(t.c.streaming);
                    try {
                        t.b.periods.forEach(t.hb.bind(t))
                    } catch (e) {
                        t.La(e)
                    }
                    fo(t, Gr(t.a))
                }
                t.g && (Qi(t), t.c.abr.enabled && !t.ga ? t.g.enable() : t.g.disable())
            }

            function Qi(t) {
                t.g.configure ? t.g.configure(t.c.abr) : (t.g.setDefaultEstimate(t.c.abr.defaultBandwidthEstimate), t.g.setRestrictions(t.c.abr.restrictions))
            }

            function Zi(t, e, n) {
                e.video && eo(t, e.video), e.audio && eo(t, e.audio);
                var r = $r(t.a),
                    i = Xr(t.a);
                e != ie(i.audio, i.video, r ? r.variants : []) && t.i.switchHistory.push({
                    timestamp: Date.now() / 1e3,
                    id: e.id,
                    type: "variant",
                    fromAdaptation: n,
                    bandwidth: e.bandwidth
                })
            }

            function to(t, e, n) {
                eo(t, e), t.i.switchHistory.push({
                    timestamp: Date.now() / 1e3,
                    id: e.id,
                    type: "text",
                    fromAdaptation: n,
                    bandwidth: null
                })
            }

            function eo(t, e) {
                var n = se(t.b, e);
                t.C[n] || (t.C[n] = {}), t.C[n][e.type] = e.id
            }

            function no(t) {
                t.m && (t.m.la(t.O, "sourceopen"), t.m.la(t.f, "loadeddata"), t.m.la(t.f, "playing"), t.m.la(t.f, "pause"), t.m.la(t.f, "ended")), t.f && (t.f.removeAttribute("src"), t.f.load());
                var e = Promise.all([t.g ? t.g.stop() : null, t.j ? t.j.o() : null, t.Ma ? t.Ma.o() : null, t.h ? t.h.o() : null, t.B ? t.B.o() : null, t.a ? t.a.o() : null, t.l ? t.l.stop() : null, t.w ? t.w.o() : null]);
                return t.j = null, t.Ma = null, t.h = null, t.B = null, t.a = null, t.l = null, t.w = null, t.b = null, t.fb = null, t.cb = null, t.O = null, t.eb = [], t.C = {}, t.i = ao(), e
            }

            function ro(t) {
                return t.l ? no(t).then(function() {
                    this.I || (this.Ec(!1), this.cb = Xi(this))
                }.bind(t)) : Promise.resolve()
            }

            function io() {
                return {
                    ".drm.servers": "",
                    ".drm.clearKeys": "",
                    ".drm.advanced": {
                        distinctiveIdentifierRequired: !1,
                        persistentStateRequired: !1,
                        videoRobustness: "",
                        audioRobustness: "",
                        serverCertificate: new Uint8Array(0)
                    }
                }
            }

            function oo(t) {
                return {
                    drm: {
                        retryParameters: _(),
                        servers: {},
                        clearKeys: {},
                        advanced: {},
                        delayLicenseRequestUntilPlayed: !1
                    },
                    manifest: {
                        retryParameters: _(),
                        dash: {
                            customScheme: function(t) {
                                if (t) return null
                            },
                            clockSyncUri: "",
                            ignoreDrmInfo: !1,
                            xlinkFailGracefully: !1
                        },
                        hls: {
                            defaultTimeOffset: 0
                        }
                    },
                    streaming: {
                        retryParameters: _(),
                        failureCallback: t.Qc.bind(t),
                        rebufferingGoal: 2,
                        bufferingGoal: 10,
                        bufferBehind: 30,
                        ignoreTextStreamFailures: !1,
                        startAtSegmentBoundary: !1,
                        smallGapLimit: .5,
                        jumpLargeGaps: !1
                    },
                    abrFactory: ue,
                    textDisplayFactory: function(t) {
                        return new qi(t)
                    }.bind(null, t.f),
                    abr: {
                        enabled: !0,
                        defaultBandwidthEstimate: 5e5,
                        switchInterval: 8,
                        bandwidthUpgradeTarget: .85,
                        bandwidthDowngradeTarget: .95,
                        restrictions: {
                            minWidth: 0,
                            maxWidth: 1 / 0,
                            minHeight: 0,
                            maxHeight: 1 / 0,
                            minPixels: 0,
                            maxPixels: 1 / 0,
                            minBandwidth: 0,
                            maxBandwidth: 1 / 0
                        }
                    },
                    preferredAudioLanguage: "",
                    preferredTextLanguage: "",
                    restrictions: {
                        minWidth: 0,
                        maxWidth: 1 / 0,
                        minHeight: 0,
                        maxHeight: 1 / 0,
                        minPixels: 0,
                        maxPixels: 1 / 0,
                        minBandwidth: 0,
                        maxBandwidth: 1 / 0
                    },
                    playRangeStart: 0,
                    playRangeEnd: 1 / 0
                }
            }

            function ao() {
                return {
                    width: NaN,
                    height: NaN,
                    streamBandwidth: NaN,
                    decodedFrames: NaN,
                    droppedFrames: NaN,
                    estimatedBandwidth: NaN,
                    loadLatency: NaN,
                    playTime: 0,
                    bufferingTime: 0,
                    switchHistory: [],
                    stateHistory: []
                }
            }

            function so(t, e, n) {
                t.ga ? (t.sa = e, t.Vb = n || !1) : Qr(t.a, e, n || !1)
            }

            function uo(t) {
                if (t.b) {
                    var e = Date.now() / 1e3;
                    t.Na ? t.i.bufferingTime += e - t.$a : t.i.playTime += e - t.$a, t.$a = e
                }
            }

            function co(t, e) {
                function n(t, e) {
                    if (!t) return null;
                    var n = t.findSegmentPosition(e - i.startTime);
                    return null == n ? null : (n = t.getSegmentReference(n)) ? n.startTime + i.startTime : null
                }
                var r = Xr(t.a),
                    i = Gr(t.a),
                    o = n(r.video, e),
                    r = n(r.audio, e);
                return null != o && null != r ? Math.max(o, r) : null != o ? o : null != r ? r : e
            }

            function lo(t, e) {
                if (!e || !e.length) return t.La(new u(2, 4, 4012)), null;
                if (t.g.setVariants(e), t.g.chooseStreams) {
                    var n = t.g.chooseStreams(["video", "audio"]);
                    return ie(n.audio, n.video, e)
                }
                return t.g.chooseVariant()
            }

            function fo(t, e) {
                var n = te(e, t.na, t.Ya),
                    r = ee(e, t.Xa, t.tb);
                (n = lo(t, n)) && (Zi(t, n, !0), so(t, n, !0)), (r = r[0]) && (to(t, r, !0), t.ga ? t.fa = r : Zr(t.a, r, !0)), ho(t)
            }

            function ho(t) {
                Promise.resolve().then(function() {
                    this.I || this.dispatchEvent(new le("adaptation"))
                }.bind(t))
            }

            function po(t) {
                Promise.resolve().then(function() {
                    this.I || this.dispatchEvent(new le("trackschanged"))
                }.bind(t))
            }

            function mo(t) {
                t.dispatchEvent(new le("texttrackvisibility"))
            }

            function vo(t) {
                if (!t || t.constructor != Gi) throw new u(2, 9, 9008);
                this.a = Di(), this.g = t, this.b = bo(this), this.c = null, this.s = !1, this.j = null, this.h = -1, this.l = 0, this.f = null, this.i = new ji(this.a, t.s, t.getConfiguration().streaming.retryParameters, this.b)
            }

            function yo() {
                return !!t.indexedDB
            }

            function go(t, e, n, r) {
                function i() {}
                var o, a, s, u = t.g.s,
                    c = t.g.getConfiguration();
                return In(e, u, c.manifest.retryParameters, r).then(function(t) {
                    return So(this), (s = new t).configure(c.manifest), s.start(e, {
                        networkingEngine: u,
                        filterAllPeriods: this.m.bind(this),
                        filterNewPeriod: this.w.bind(this),
                        onTimelineRegionAdded: function() {},
                        onEvent: function() {},
                        onError: n
                    })
                }.bind(t)).then(function(t) {
                    return So(this), o = t, (a = new st(u, n, i, function() {})).configure(c.drm), a.init(o, this.b.usePersistentLicense || !1)
                }.bind(t)).then(function() {
                    return So(this), Eo(o)
                }.bind(t)).then(function() {
                    return So(this), lt(a)
                }.bind(t)).then(function() {
                    return So(this), s.stop()
                }.bind(t)).then(function() {
                    return So(this), {
                        manifest: o,
                        Rc: a
                    }
                }.bind(t)).catch(function(t) {
                    if (s) return s.stop().then(function() {
                        throw t
                    });
                    throw t
                })
            }

            function bo(t) {
                return {
                    trackSelectionCallback: t.B.bind(t),
                    progressCallback: function(t, e) {
                        if (t || e) return null
                    },
                    usePersistentLicense: !0
                }
            }

            function wo(t) {
                return t.a ? t.a.a ? Promise.resolve() : t.a.init(Es) : Promise.reject(new u(2, 9, 9e3))
            }

            function _o(t) {
                var e = t.c ? t.c.o() : Promise.resolve();
                return t.c = null, t.f = null, t.s = !1, t.j = null, t.h = -1, e
            }

            function Eo(t) {
                var e = t.periods.map(function(t) {
                    return t.variants
                }).reduce(P, []).map(function(t) {
                    var e = [];
                    return t.audio && e.push(t.audio), t.video && e.push(t.video), e
                }).reduce(P, []).filter(k);
                return t = t.periods.map(function(t) {
                    return t.textStreams
                }).reduce(P, []), e.push.apply(e, t), Promise.all(e.map(function(t) {
                    return t.createSegmentIndex()
                }))
            }

            function To(t, e, n, r, i) {
                for (var o = [], a = t.f.presentationTimeline.ia(), s = a, u = n.findSegmentPosition(a), c = null != u ? n.getSegmentReference(u) : null; c;) s = t.a.c.segment++, Li(t.i, n.type, c, (c.endTime - c.startTime) * r / 8, {
                    key: s,
                    data: null,
                    manifestKey: t.h,
                    streamNumber: n.id,
                    segmentNumber: s
                }), o.push({
                    startTime: c.startTime,
                    endTime: c.endTime,
                    uri: "offline:" + t.h + "/" + n.id + "/" + s
                }), s = c.endTime + e.startTime, c = n.getSegmentReference(++u);
                return t.l = Math.max(t.l, s - a), e = null, n.initSegmentReference && (s = t.a.c.segment++, e = "offline:" + t.h + "/" + n.id + "/" + s, Li(t.i, n.contentType, n.initSegmentReference, 0, {
                    key: s,
                    data: null,
                    manifestKey: t.h,
                    streamNumber: n.id,
                    segmentNumber: -1
                })), t = [], null != i && t.push(i), {
                    id: n.id,
                    primary: n.primary,
                    presentationTimeOffset: n.presentationTimeOffset || 0,
                    contentType: n.type,
                    mimeType: n.mimeType,
                    codecs: n.codecs,
                    frameRate: n.frameRate,
                    kind: n.kind,
                    language: n.language,
                    label: n.label,
                    width: n.width || null,
                    height: n.height || null,
                    initSegmentUri: e,
                    encrypted: n.encrypted,
                    keyId: n.keyId,
                    segments: o,
                    variantIds: t
                }
            }

            function So(t) {
                if (!t.g) throw new u(2, 9, 9002)
            }

            function Po(t) {
                Ss.push(t)
            }

            function Co(t) {
                var e = t.type.replace(/^(webkit|moz|MS)/, "").toLowerCase();
                if ("function" == typeof Event) var n = new Event(e, t);
                else(n = document.createEvent("Event")).initEvent(e, t.bubbles, t.cancelable);
                t.target.dispatchEvent(n)
            }

            function Oo(t, e, n) {
                if ("input" == t) switch (this.type) {
                    case "range":
                        t = "change"
                }
                Ps.call(this, t, e, n)
            }

            function ko(t) {
                this.f = [], this.b = [], this.a = [], (new Qe).aa("pssh", this.c.bind(this)).parse(t.buffer)
            }

            function xo(t, e) {
                try {
                    var n = new Io(t, e);
                    return Promise.resolve(n)
                } catch (t) {
                    return Promise.reject(t)
                }
            }

            function Io(t, e) {
                this.keySystem = t;
                for (var n = !1, r = 0; r < e.length; ++r) {
                    var i = e[r],
                        o = {
                            audioCapabilities: [],
                            videoCapabilities: [],
                            persistentState: "optional",
                            distinctiveIdentifier: "optional",
                            initDataTypes: i.initDataTypes,
                            sessionTypes: ["temporary"],
                            label: i.label
                        },
                        a = !1;
                    if (i.audioCapabilities)
                        for (var s = 0; s < i.audioCapabilities.length; ++s) {
                            var u = i.audioCapabilities[s];
                            if (u.contentType) {
                                a = !0;
                                var c = u.contentType.split(";")[0];
                                MSMediaKeys.isTypeSupported(this.keySystem, c) && (o.audioCapabilities.push(u), n = !0)
                            }
                        }
                    if (i.videoCapabilities)
                        for (s = 0; s < i.videoCapabilities.length; ++s)(u = i.videoCapabilities[s]).contentType && (a = !0, c = u.contentType.split(";")[0], MSMediaKeys.isTypeSupported(this.keySystem, c) && (o.videoCapabilities.push(u), n = !0));
                    if (a || (n = MSMediaKeys.isTypeSupported(this.keySystem, "video/mp4")), "required" == i.persistentState && (n = !1), n) return void(this.a = o)
                }
                throw i = Error("Unsupported keySystem"), i.name = "NotSupportedError", i.code = DOMException.NOT_SUPPORTED_ERR, i
            }

            function Ao(t) {
                var e = this.mediaKeys;
                return e && e != t && Mo(e, null), delete this.mediaKeys, (this.mediaKeys = t) ? Mo(t, this) : Promise.resolve()
            }

            function No(t) {
                this.a = new MSMediaKeys(t), this.b = new j
            }

            function Mo(t, e) {
                function n() {
                    e.msSetMediaKeys(r.a), e.removeEventListener("loadedmetadata", n)
                }
                if (F(t.b), !e) return Promise.resolve();
                L(t.b, e, "msneedkey", Do);
                var r = t;
                try {
                    return 1 <= e.readyState ? e.msSetMediaKeys(t.a) : e.addEventListener("loadedmetadata", n), Promise.resolve()
                } catch (t) {
                    return Promise.reject(t)
                }
            }

            function Ro(t) {
                ye.call(this), this.c = null, this.g = t, this.b = this.a = null, this.f = new j, this.sessionId = "", this.expiration = NaN, this.closed = new g, this.keyStatuses = new Uo
            }

            function Do(t) {
                var e = document.createEvent("CustomEvent");
                e.initCustomEvent("encrypted", !1, !1, null), e.initDataType = "cenc";
                var n = t.initData;
                if (n) {
                    var r = new ko(n);
                    if (1 >= r.a.length) t = n;
                    else {
                        var i = [];
                        for (t = 0; t < r.a.length; t++) i.push(n.subarray(r.a[t].start, r.a[t].end + 1));
                        for (n = N(i, jo), t = r = 0; t < n.length; t++) r += n[t].length;
                        for (r = new Uint8Array(r), t = i = 0; t < n.length; t++) r.set(n[t], i), i += n[t].length;
                        t = r
                    }
                } else t = n;
                e.initData = t, this.dispatchEvent(e)
            }

            function jo(t, e) {
                return at(t, e)
            }

            function Lo(t, e) {
                var n = t.keyStatuses;
                n.size = void 0 == e ? 0 : 1, n.a = e, t.dispatchEvent(new le("keystatuseschange"))
            }

            function Uo() {
                this.size = 0, this.a = void 0
            }

            function Fo() {
                return Promise.reject(Error("The key system specified is not supported."))
            }

            function Ho(t) {
                return t ? Promise.reject(Error("MediaKeys not supported.")) : Promise.resolve()
            }

            function Bo() {
                throw new TypeError("Illegal constructor.")
            }

            function zo() {
                throw new TypeError("Illegal constructor.")
            }

            function qo(e) {
                Os = e, ks = new Uint8Array([0]).buffer, navigator.requestMediaKeySystemAccess = Wo, delete HTMLMediaElement.prototype.mediaKeys, HTMLMediaElement.prototype.mediaKeys = null, HTMLMediaElement.prototype.setMediaKeys = Ko, t.MediaKeys = Go, t.MediaKeySystemAccess = Yo
            }

            function Vo(t) {
                var e = Os;
                return e ? e + t.charAt(0).toUpperCase() + t.slice(1) : t
            }

            function Wo(t, e) {
                try {
                    var n = new Yo(t, e);
                    return Promise.resolve(n)
                } catch (t) {
                    return Promise.reject(t)
                }
            }

            function Ko(t) {
                var e = this.mediaKeys;
                return e && e != t && $o(e, null), delete this.mediaKeys, (this.mediaKeys = t) && $o(t, this), Promise.resolve()
            }

            function Yo(t, e) {
                this.a = this.keySystem = t;
                var n = !1;
                "org.w3.clearkey" == t && (this.a = "webkit-org.w3.clearkey", n = !1);
                for (var r = !1, i = document.getElementsByTagName("video"), o = i.length ? i[0] : document.createElement("video"), a = 0; a < e.length; ++a) {
                    var s = {
                            audioCapabilities: [],
                            videoCapabilities: [],
                            persistentState: "optional",
                            distinctiveIdentifier: "optional",
                            initDataTypes: (i = e[a]).initDataTypes,
                            sessionTypes: ["temporary"],
                            label: i.label
                        },
                        u = !1;
                    if (i.audioCapabilities)
                        for (var c = 0; c < i.audioCapabilities.length; ++c) {
                            var l = i.audioCapabilities[c];
                            if (l.contentType) {
                                var u = !0,
                                    f = l.contentType.split(";")[0];
                                o.canPlayType(f, this.a) && (s.audioCapabilities.push(l), r = !0)
                            }
                        }
                    if (i.videoCapabilities)
                        for (c = 0; c < i.videoCapabilities.length; ++c)(l = i.videoCapabilities[c]).contentType && (u = !0, o.canPlayType(l.contentType, this.a) && (s.videoCapabilities.push(l), r = !0));
                    if (u || (r = o.canPlayType("video/mp4", this.a) || o.canPlayType("video/webm", this.a)), "required" == i.persistentState && (n ? (s.persistentState = "required", s.sessionTypes = ["persistent-license"]) : r = !1), r) return void(this.b = s)
                }
                throw n = "Unsupported keySystem", "org.w3.clearkey" != t && "com.widevine.alpha" != t || (n = "None of the requested configurations were supported."), n = Error(n), n.name = "NotSupportedError", n.code = DOMException.NOT_SUPPORTED_ERR, n
            }

            function Go(t) {
                this.g = t, this.b = null, this.a = new j, this.c = [], this.f = {}
            }

            function $o(t, e) {
                t.b = e, F(t.a);
                var n = Os;
                e && (L(t.a, e, n + "needkey", t.Ld.bind(t)), L(t.a, e, n + "keymessage", t.Kd.bind(t)), L(t.a, e, n + "keyadded", t.Id.bind(t)), L(t.a, e, n + "keyerror", t.Jd.bind(t)))
            }

            function Xo(t, e) {
                var n = t.f[e];
                return n || ((n = t.c.shift()) ? (n.sessionId = e, t.f[e] = n) : null)
            }

            function Jo(t, e, n) {
                ye.call(this), this.f = t, this.h = !1, this.a = this.b = null, this.c = e, this.g = n, this.sessionId = "", this.expiration = NaN, this.closed = new g, this.keyStatuses = new ta
            }

            function Qo(t, e, n) {
                if (t.h) return Promise.reject(Error("The session is already initialized."));
                t.h = !0;
                try {
                    if ("persistent-license" == t.g)
                        if (n) var r = new Uint8Array(Q("LOAD_SESSION|" + n));
                        else {
                            var i = Q("PERSISTENT|"),
                                o = new Uint8Array(i.byteLength + e.byteLength);
                            o.set(new Uint8Array(i), 0), o.set(new Uint8Array(e), i.byteLength), r = o
                        }
                    else r = new Uint8Array(e)
                } catch (t) {
                    return Promise.reject(t)
                }
                t.b = new g;
                var a = Vo("generateKeyRequest");
                try {
                    t.f[a](t.c, r)
                } catch (e) {
                    if ("InvalidStateError" != e.name) return t.b = null, Promise.reject(e);
                    setTimeout(function() {
                        try {
                            this.f[a](this.c, r)
                        } catch (t) {
                            this.b.reject(t), this.b = null
                        }
                    }.bind(t), 10)
                }
                return t.b
            }

            function Zo(t, e) {
                var n = t.keyStatuses;
                n.size = void 0 == e ? 0 : 1, n.a = e, t.dispatchEvent(new le("keystatuseschange"))
            }

            function ta() {
                this.size = 0, this.a = void 0
            }

            function ea() {
                var t = MediaSource.prototype.addSourceBuffer;
                MediaSource.prototype.addSourceBuffer = function() {
                    var e = t.apply(this, arguments);
                    return e.abort = function() {}, e
                }
            }

            function na() {
                var t = MediaSource.prototype.endOfStream;
                MediaSource.prototype.endOfStream = function() {
                    for (var e, n = 0, r = 0; r < this.sourceBuffers.length; ++r) e = this.sourceBuffers[r], e = e.buffered.end(e.buffered.length - 1), n = Math.max(n, e);
                    if (!isNaN(this.duration) && n < this.duration)
                        for (this.dc = !0, r = 0; r < this.sourceBuffers.length; ++r) e = this.sourceBuffers[r], e.Zb = !1;
                    return t.apply(this, arguments)
                };
                var e = !1,
                    n = MediaSource.prototype.addSourceBuffer;
                MediaSource.prototype.addSourceBuffer = function() {
                    var t = n.apply(this, arguments);
                    return t.mediaSource_ = this, t.addEventListener("updateend", ra, !1), e || (this.addEventListener("sourceclose", ia, !1), e = !0), t
                }
            }

            function ra(t) {
                var e = t.target,
                    n = e.mediaSource_;
                if (n.dc) {
                    for (t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation(), e.Zb = !0, t = 0; t < n.sourceBuffers.length; ++t)
                        if (0 == n.sourceBuffers[t].Zb) return;
                    n.dc = !1
                }
            }

            function ia(t) {
                t = t.target;
                for (var e = 0; e < t.sourceBuffers.length; ++e) t.sourceBuffers[e].removeEventListener("updateend", ra, !1);
                t.removeEventListener("sourceclose", ia, !1)
            }

            function oa() {
                var t = MediaSource.isTypeSupported,
                    e = /^dv(?:he|av)\./;
                MediaSource.isTypeSupported = function(n) {
                    for (var r, i, o = n.split(/ *; */), a = o[0], s = {}, u = 1; u < o.length; ++u) r = o[u].split("="), i = r[0], r = r[1].replace(/"(.*)"/, "$1"), s[i] = r;
                    if (!(r = s.codecs)) return t(n);
                    var c = !1,
                        l = !1;
                    n = r.split(",").filter(function(t) {
                        return e.test(t) ? (l = !0, !1) : (/^(hev|hvc)1\.2/.test(t) && (c = !0), !0)
                    }), l && (c = !1), s.codecs = n.join(","), c && (s.eotf = "smpte2084");
                    for (i in s) r = s[i], a += "; " + i + '="' + r + '"';
                    return cast.__platform__.canDisplayType(a)
                }
            }

            function aa(t) {
                if (this.c = [], this.b = [], this.Aa = xs, t) try {
                    t(this.ka.bind(this), this.a.bind(this))
                } catch (t) {
                    this.a(t)
                }
            }

            function sa(t) {
                var e = new aa;
                return e.ka(void 0), e.then(function() {
                    return t
                })
            }

            function ua(t) {
                var e = new aa;
                return e.a(t), e
            }

            function ca(t) {
                function e(t, e, n) {
                    t.Aa == xs && (i[e] = n, ++r == i.length && t.ka(i))
                }
                var n = new aa;
                if (!t.length) return n.ka([]), n;
                for (var r = 0, i = Array(t.length), o = n.a.bind(n), a = 0; a < t.length; ++a) t[a] && t[a].then ? t[a].then(e.bind(null, n, a), o) : e(n, a, t[a]);
                return n
            }

            function la(t) {
                for (var e = new aa, n = e.ka.bind(e), r = e.a.bind(e), i = 0; i < t.length; ++i) t[i] && t[i].then ? t[i].then(n, r) : n(t[i]);
                return e
            }

            function fa(t, e, n) {
                As.push(function() {
                    if (n && "function" == typeof n) {
                        try {
                            var t = n(this.rb)
                        } catch (t) {
                            return void e.a(t)
                        }
                        try {
                            var r = t && t.then
                        } catch (t) {
                            return void e.a(t)
                        }
                        t instanceof aa ? t == e ? e.a(new TypeError("Chaining cycle detected")) : t.then(e.ka.bind(e), e.a.bind(e)) : r ? ha(t, r, e) : e.ka(t)
                    } else 1 == this.Aa ? e.ka(this.rb) : e.a(this.rb)
                }.bind(t)), null == Is && (Is = da(pa))
            }

            function ha(t, e, n) {
                try {
                    var r = !1;
                    e.call(t, function(t) {
                        if (!r) {
                            r = !0;
                            try {
                                var e = t && t.then
                            } catch (t) {
                                return void n.a(t)
                            }
                            e ? ha(t, e, n) : n.ka(t)
                        }
                    }, n.a.bind(n))
                } catch (t) {
                    n.a(t)
                }
            }

            function pa() {
                for (; As.length;) {
                    null != Is && (ma(Is), Is = null);
                    var t = As;
                    As = [];
                    for (var e = 0; e < t.length; ++e) t[e]()
                }
            }

            function da() {
                return 0
            }

            function ma() {}

            function va() {
                return {
                    droppedVideoFrames: this.webkitDroppedFrameCount,
                    totalVideoFrames: this.webkitDecodedFrameCount,
                    corruptedVideoFrames: 0,
                    creationTime: NaN,
                    totalFrameDelay: 0
                }
            }

            function ya(e, n, r) {
                return new t.TextTrackCue(e, n, r)
            }

            function ga(e, n, r) {
                return new t.TextTrackCue(e + "-" + n + "-" + r, e, n, r)
            }

            function ba(t, e, n) {
                this.startTime = t, this.endTime = e, this.l = n, this.position = null, this.i = Ns, this.size = 100, this.f = Ms, this.b = Ls, this.g = Hs, this.c = null, this.I = "", this.h = zs, this.j = Ds, this.B = this.m = this.s = "", this.D = Vs, this.C = Ws, this.w = "", this.a = [], this.O = !0, this.id = ""
            }

            function wa() {}

            function _a(t) {
                var e = [];
                if (!t) return e;
                for (var n = t.childNodes, r = 0; r < n.length; r++) {
                    var i = "span" == n[r].nodeName && "p" == t.nodeName;
                    n[r].nodeType != Node.ELEMENT_NODE || "br" == n[r].nodeName || i || (i = _a(n[r]), e = e.concat(i))
                }
                return e.length || e.push(t), e
            }

            function Ea(t, e) {
                for (var n = t.childNodes, r = 0; r < n.length; r++)
                    if ("br" == n[r].nodeName && 0 < r) n[r - 1].textContent += "\n";
                    else if (0 < n[r].childNodes.length) Ea(n[r], e);
                else if (e) {
                    var i = (i = n[r].textContent.trim()).replace(/\s+/g, " ");
                    n[r].textContent = i
                }
            }

            function Ta(t, e) {
                for (var n = e.split(" "), r = 0; r < n.length; r++) switch (n[r]) {
                    case "underline":
                        0 > t.a.indexOf("underline") && t.a.push("underline");
                        break;
                    case "noUnderline":
                        0 <= t.a.indexOf("underline") && R(t.a, "underline");
                        break;
                    case "lineThrough":
                        0 > t.a.indexOf("lineThrough") && t.a.push("lineThrough");
                        break;
                    case "noLineThrough":
                        0 <= t.a.indexOf("lineThrough") && R(t.a, "lineThrough");
                        break;
                    case "overline":
                        0 > t.a.indexOf("overline") && t.a.push("overline");
                        break;
                    case "noOverline":
                        0 <= t.a.indexOf("overline") && R(t.a, "overline")
                }
            }

            function Sa(t, e, n, r) {
                return (t = Ca(t, n, r)) ? t : Pa(e, n, r)
            }

            function Pa(t, e, n) {
                for (var r = _a(t), i = 0; i < r.length; i++) {
                    var o = r[i].getAttribute(n);
                    if (o) return o
                }
                return (t = Oa(t, "style", e)) ? t.getAttribute(n) : null
            }

            function Ca(t, e, n) {
                return (t = Oa(t, "style", e)) ? t.getAttribute(n) : null
            }

            function Oa(t, e, n) {
                if (!t || 1 > n.length) return null;
                var r = null,
                    i = t;
                for (t = null; i && !(t = i.getAttribute(e)) && (i = i.parentNode) instanceof Element;);
                if (e = t)
                    for (t = 0; t < n.length; t++)
                        if (n[t].getAttribute("xml:id") == e) {
                            r = n[t];
                            break
                        }
                return r
            }

            function ka(t, e) {
                n = null;
                if (Ys.test(t)) var n = Ys.exec(t),
                    r = Number(n[1]),
                    i = Number(n[2]),
                    o = Number(n[3]),
                    a = Number(n[4]),
                    a = a + (Number(n[5]) || 0) / e.b,
                    o = o + a / e.frameRate,
                    n = o + 60 * i + 3600 * r;
                else Gs.test(t) ? n = xa(Gs, t) : $s.test(t) ? n = xa($s, t) : Xs.test(t) ? (n = Xs.exec(t), n = Number(n[1]) / e.frameRate) : Js.test(t) ? (n = Js.exec(t), n = Number(n[1]) / e.a) : Qs.test(t) && (n = xa(Qs, t));
                return n
            }

            function xa(t, e) {
                var n = t.exec(e);
                return n && "" != n[0] ? (Number(n[4]) || 0) / 1e3 + (Number(n[3]) || 0) + 60 * (Number(n[2]) || 0) + 3600 * (Number(n[1]) || 0) : null
            }

            function Ia(t, e, n, r) {
                this.frameRate = Number(t) || 30, this.b = Number(e) || 1, this.a = Number(r), this.a || (this.a = t ? this.frameRate * this.b : 1), n && (t = /^(\d+) (\d+)$/g.exec(n)) && (this.frameRate *= t[1] / t[2])
            }

            function Aa() {
                this.a = new wa
            }

            function Na() {}

            function Ma(t, e) {
                var n;
                (n = /^align:(start|middle|center|end|left|right)$/.exec(e)) ? (n = n[1], t.f = "middle" == n ? Ms : Rs[n.toUpperCase()]) : (n = /^vertical:(lr|rl)$/.exec(e)) ? t.b = "lr" == n[1] ? Us : Fs: (n = /^size:([\d\.]+)%$/.exec(e)) ? t.size = Number(n[1]) : (n = /^position:([\d\.]+)%(?:,(line-left|line-right|center|start|end))?$/.exec(e)) ? (t.position = Number(n[1]), n[2] && (n = n[2], t.i = "line-left" == n || "start" == n ? "line-left" : "line-right" == n || "end" == n ? "line-right" : "center")) : (n = /^line:([\d\.]+)%(?:,(start|end|center))?$/.exec(e)) ? (t.g = Bs, t.c = Number(n[1]), n[2] && (t.h = qs[n[2].toUpperCase()])) : (n = /^line:(-?\d+)(?:,(start|end|center))?$/.exec(e)) && (t.g = Hs, t.c = Number(n[1]), n[2] && (t.h = qs[n[2].toUpperCase()]))
            }

            function Ra(t) {
                if (!(t = nr(t, /(?:(\d{1,}):)?(\d{2}):(\d{2})\.(\d{3})/g))) return null;
                var e = Number(t[2]),
                    n = Number(t[3]);
                return 59 < e || 59 < n ? null : Number(t[4]) / 1e3 + n + 60 * e + 3600 * (Number(t[1]) || 0)
            }

            function Da() {
                this.a = null
            }

            function ja(t, e, n) {
                var r, i, o;
                return (new Qe).G("payl", en(function(t) {
                    r = $(t)
                })).G("iden", en(function(t) {
                    i = $(t)
                })).G("sttg", en(function(t) {
                    o = $(t)
                })).parse(t), r ? La(r, i, o, e, n) : null
            }

            function La(t, e, n, r, i) {
                if (t = new ba(r, i, t), e && (t.id = e), n)
                    for (e = new er(n), n = rr(e); n;) Ma(t, n), nr(e, /[ \t]+/gm), n = rr(e);
                return t
            }
            var Ua, Fa = this;
            Fa.Le = !0, a.prototype.getBandwidthEstimate = function(t) {
                return 128e3 > this.a ? t : Math.min(o(this.b), o(this.c))
            }, e("shaka.util.Error", u), u.prototype.toString = function() {
                return "shaka.util.Error " + JSON.stringify(this, null, "  ")
            }, u.Severity = {
                RECOVERABLE: 1,
                CRITICAL: 2
            }, u.Category = {
                NETWORK: 1,
                TEXT: 2,
                MEDIA: 3,
                MANIFEST: 4,
                STREAMING: 5,
                DRM: 6,
                PLAYER: 7,
                CAST: 8,
                STORAGE: 9
            }, u.Code = {
                UNSUPPORTED_SCHEME: 1e3,
                BAD_HTTP_STATUS: 1001,
                HTTP_ERROR: 1002,
                TIMEOUT: 1003,
                MALFORMED_DATA_URI: 1004,
                UNKNOWN_DATA_URI_ENCODING: 1005,
                REQUEST_FILTER_ERROR: 1006,
                RESPONSE_FILTER_ERROR: 1007,
                INVALID_TEXT_HEADER: 2e3,
                INVALID_TEXT_CUE: 2001,
                UNABLE_TO_DETECT_ENCODING: 2003,
                BAD_ENCODING: 2004,
                INVALID_XML: 2005,
                INVALID_MP4_TTML: 2007,
                INVALID_MP4_VTT: 2008,
                BUFFER_READ_OUT_OF_BOUNDS: 3e3,
                JS_INTEGER_OVERFLOW: 3001,
                EBML_OVERFLOW: 3002,
                EBML_BAD_FLOATING_POINT_SIZE: 3003,
                MP4_SIDX_WRONG_BOX_TYPE: 3004,
                MP4_SIDX_INVALID_TIMESCALE: 3005,
                MP4_SIDX_TYPE_NOT_SUPPORTED: 3006,
                WEBM_CUES_ELEMENT_MISSING: 3007,
                WEBM_EBML_HEADER_ELEMENT_MISSING: 3008,
                WEBM_SEGMENT_ELEMENT_MISSING: 3009,
                WEBM_INFO_ELEMENT_MISSING: 3010,
                WEBM_DURATION_ELEMENT_MISSING: 3011,
                WEBM_CUE_TRACK_POSITIONS_ELEMENT_MISSING: 3012,
                WEBM_CUE_TIME_ELEMENT_MISSING: 3013,
                MEDIA_SOURCE_OPERATION_FAILED: 3014,
                MEDIA_SOURCE_OPERATION_THREW: 3015,
                VIDEO_ERROR: 3016,
                QUOTA_EXCEEDED_ERROR: 3017,
                UNABLE_TO_GUESS_MANIFEST_TYPE: 4e3,
                DASH_INVALID_XML: 4001,
                DASH_NO_SEGMENT_INFO: 4002,
                DASH_EMPTY_ADAPTATION_SET: 4003,
                DASH_EMPTY_PERIOD: 4004,
                DASH_WEBM_MISSING_INIT: 4005,
                DASH_UNSUPPORTED_CONTAINER: 4006,
                DASH_PSSH_BAD_ENCODING: 4007,
                DASH_NO_COMMON_KEY_SYSTEM: 4008,
                DASH_MULTIPLE_KEY_IDS_NOT_SUPPORTED: 4009,
                DASH_CONFLICTING_KEY_IDS: 4010,
                UNPLAYABLE_PERIOD: 4011,
                RESTRICTIONS_CANNOT_BE_MET: 4012,
                NO_PERIODS: 4014,
                HLS_PLAYLIST_HEADER_MISSING: 4015,
                INVALID_HLS_TAG: 4016,
                HLS_INVALID_PLAYLIST_HIERARCHY: 4017,
                DASH_DUPLICATE_REPRESENTATION_ID: 4018,
                HLS_MULTIPLE_MEDIA_INIT_SECTIONS_FOUND: 4020,
                HLS_COULD_NOT_GUESS_MIME_TYPE: 4021,
                HLS_MASTER_PLAYLIST_NOT_PROVIDED: 4022,
                HLS_REQUIRED_ATTRIBUTE_MISSING: 4023,
                HLS_REQUIRED_TAG_MISSING: 4024,
                HLS_COULD_NOT_GUESS_CODECS: 4025,
                HLS_KEYFORMATS_NOT_SUPPORTED: 4026,
                DASH_UNSUPPORTED_XLINK_ACTUATE: 4027,
                DASH_XLINK_DEPTH_LIMIT: 4028,
                HLS_LIVE_CONTENT_NOT_SUPPORTED: 4029,
                INVALID_STREAMS_CHOSEN: 5005,
                NO_RECOGNIZED_KEY_SYSTEMS: 6e3,
                REQUESTED_KEY_SYSTEM_CONFIG_UNAVAILABLE: 6001,
                FAILED_TO_CREATE_CDM: 6002,
                FAILED_TO_ATTACH_TO_VIDEO: 6003,
                INVALID_SERVER_CERTIFICATE: 6004,
                FAILED_TO_CREATE_SESSION: 6005,
                FAILED_TO_GENERATE_LICENSE_REQUEST: 6006,
                LICENSE_REQUEST_FAILED: 6007,
                LICENSE_RESPONSE_REJECTED: 6008,
                ENCRYPTED_CONTENT_WITHOUT_DRM_INFO: 6010,
                NO_LICENSE_SERVER_GIVEN: 6012,
                OFFLINE_SESSION_REMOVED: 6013,
                EXPIRED: 6014,
                LOAD_INTERRUPTED: 7e3,
                CAST_API_UNAVAILABLE: 8e3,
                NO_CAST_RECEIVERS: 8001,
                ALREADY_CASTING: 8002,
                UNEXPECTED_CAST_ERROR: 8003,
                CAST_CANCELED_BY_USER: 8004,
                CAST_CONNECTION_TIMED_OUT: 8005,
                CAST_RECEIVER_APP_UNAVAILABLE: 8006,
                STORAGE_NOT_SUPPORTED: 9e3,
                INDEXED_DB_ERROR: 9001,
                OPERATION_ABORTED: 9002,
                REQUESTED_ITEM_NOT_FOUND: 9003,
                MALFORMED_OFFLINE_URI: 9004,
                CANNOT_STORE_LIVE_OFFLINE: 9005,
                STORE_ALREADY_IN_PROGRESS: 9006,
                NO_INIT_DATA_FOR_OFFLINE: 9007,
                LOCAL_PLAYER_INSTANCE_REQUIRED: 9008,
                CONTENT_UNSUPPORTED_BY_BROWSER: 9009
            };
            var Ha = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;
            (Ua = c.prototype).ca = "", Ua.Ba = "", Ua.ha = "", Ua.Ia = null, Ua.$ = "", Ua.ua = "", Ua.toString = function() {
                var t = [],
                    e = this.ca;
                if (e && t.push(d(e, Ba, !0), ":"), e = this.ha) {
                    t.push("//");
                    var n = this.Ba;
                    n && t.push(d(n, Ba, !0), "@"), t.push(encodeURIComponent(e).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), null != (e = this.Ia) && t.push(":", String(e))
                }
                return (e = this.$) && (this.ha && "/" != e.charAt(0) && t.push("/"), t.push(d(e, "/" == e.charAt(0) ? qa : za, !0))), (e = this.a.toString()) && t.push("?", e), (e = this.ua) && t.push("#", d(e, Wa)), t.join("")
            }, Ua.resolve = function(t) {
                var e = new c(this);
                "data" === e.ca && (e = new c);
                var n = !!t.ca;
                n ? l(e, t.ca) : n = !!t.Ba, n ? e.Ba = t.Ba : n = !!t.ha, n ? e.ha = t.ha : n = null != t.Ia;
                i = t.$;
                if (n) f(e, t.Ia);
                else if (n = !!t.$)
                    if ("/" != i.charAt(0) && (this.ha && !this.$ ? i = "/" + i : -1 != (r = e.$.lastIndexOf("/")) && (i = e.$.substr(0, r + 1) + i)), ".." == i || "." == i) i = "";
                    else if (-1 != i.indexOf("./") || -1 != i.indexOf("/.")) {
                    for (var r = !i.lastIndexOf("/", 0), i = i.split("/"), o = [], a = 0; a < i.length;) {
                        var s = i[a++];
                        "." == s ? r && a == i.length && o.push("") : ".." == s ? ((1 < o.length || 1 == o.length && "" != o[0]) && o.pop(), r && a == i.length && o.push("")) : (o.push(s), r = !0)
                    }
                    i = o.join("/")
                }
                return n ? e.$ = i : n = "" !== t.a.toString(), n ? h(e, y(t.a)) : n = !!t.ua, n && (e.ua = t.ua), e
            };
            var Ba = /[#\/\?@]/g,
                za = /[\#\?:]/g,
                qa = /[\#\?]/g,
                Va = /[\#\?@]/g,
                Wa = /#/g;
            v.prototype.a = null, v.prototype.c = null, v.prototype.toString = function() {
                if (this.b) return this.b;
                if (!this.a) return "";
                var t, e = [];
                for (t in this.a)
                    for (var n = encodeURIComponent(t), r = this.a[t], i = 0; i < r.length; i++) {
                        var o = n;
                        "" !== r[i] && (o += "=" + encodeURIComponent(r[i])), e.push(o)
                    }
                return this.b = e.join("&")
            }, e("shaka.net.NetworkingEngine", x), x.RequestType = {
                MANIFEST: 0,
                SEGMENT: 1,
                LICENSE: 2,
                APP: 3
            };
            var Ka = {};
            x.registerScheme = function(t, e) {
                Ka[t] = e
            }, x.unregisterScheme = function(t) {
                delete Ka[t]
            }, x.prototype.Ud = function(t) {
                this.b.push(t)
            }, x.prototype.registerRequestFilter = x.prototype.Ud, x.prototype.Ce = function(t) {
                var e = this.b;
                0 <= (t = e.indexOf(t)) && e.splice(t, 1)
            }, x.prototype.unregisterRequestFilter = x.prototype.Ce, x.prototype.Oc = function() {
                this.b = []
            }, x.prototype.clearAllRequestFilters = x.prototype.Oc, x.prototype.Vd = function(t) {
                this.c.push(t)
            }, x.prototype.registerResponseFilter = x.prototype.Vd, x.prototype.De = function(t) {
                var e = this.c;
                0 <= (t = e.indexOf(t)) && e.splice(t, 1)
            }, x.prototype.unregisterResponseFilter = x.prototype.De, x.prototype.Pc = function() {
                this.c = []
            }, x.prototype.clearAllResponseFilters = x.prototype.Pc, x.prototype.o = function() {
                this.f = !0, this.b = [], this.c = [];
                for (var t = [], e = 0; e < this.a.length; ++e) t.push(this.a[e].catch(C));
                return Promise.all(t)
            }, x.prototype.destroy = x.prototype.o, x.prototype.request = function(t, e) {
                if (this.f) return Promise.reject();
                e.method = e.method || "GET", e.headers = e.headers || {}, e.retryParameters = e.retryParameters ? T(e.retryParameters) : _(), e.uris = T(e.uris);
                var n = Date.now(),
                    r = Promise.resolve();
                return this.b.forEach(function(n) {
                    r = r.then(n.bind(null, t, e))
                }), r = r.catch(function(t) {
                    throw new u(2, 1, 1006, t)
                }), r = r.then(function() {
                    var r = Date.now() - n,
                        i = new b(e.retryParameters);
                    return w(i).then(function() {
                        return A(this, t, e, i, 0, r)
                    }.bind(this))
                }.bind(this)), this.a.push(r), r.then(function(e) {
                    return 0 <= this.a.indexOf(r) && this.a.splice(this.a.indexOf(r), 1), this.g && !e.fromCache && 1 == t && this.g(e.timeMs, e.data.byteLength), e
                }.bind(this)).catch(function(t) {
                    return t && (t.severity = 2), 0 <= this.a.indexOf(r) && this.a.splice(this.a.indexOf(r), 1), Promise.reject(t)
                }.bind(this))
            }, x.prototype.request = x.prototype.request, D.prototype.push = function(t, e) {
                this.a.hasOwnProperty(t) ? this.a[t].push(e) : this.a[t] = [e]
            }, D.prototype.get = function(t) {
                return (t = this.a[t]) ? t.slice() : null
            }, D.prototype.remove = function(t, e) {
                var n = this.a[t];
                if (n)
                    for (var r = 0; r < n.length; ++r) n[r] == e && (n.splice(r, 1), --r)
            }, j.prototype.o = function() {
                return F(this), this.a = null, Promise.resolve()
            }, j.prototype.la = function(t, e) {
                if (this.a)
                    for (var n = this.a.get(e) || [], r = 0; r < n.length; ++r) {
                        var i = n[r];
                        i.target == t && (i.la(), this.a.remove(e, i))
                    }
            }, H.prototype.la = function() {
                this.target.removeEventListener(this.type, this.a, !1), this.a = this.target = null
            };
            var Ya = 1 / 15,
                Ga = {
                    codecs: "codecs",
                    frameRate: "framerate",
                    bandwidth: "bitrate",
                    width: "width",
                    height: "height",
                    channelsCount: "channels"
                };
            e("shaka.util.StringUtils.fromUTF8", $), e("shaka.util.StringUtils.fromUTF16", X), e("shaka.util.StringUtils.fromBytesAutoDetect", J), e("shaka.util.StringUtils.toUTF8", Q), tt.prototype.cancel = function() {
                null != this.a && (clearTimeout(this.a), this.a = null)
            }, e("shaka.util.Uint8ArrayUtils.toBase64", nt), e("shaka.util.Uint8ArrayUtils.fromBase64", rt), e("shaka.util.Uint8ArrayUtils.fromHex", it), e("shaka.util.Uint8ArrayUtils.toHex", ot), e("shaka.util.Uint8ArrayUtils.equal", at), e("shaka.util.Uint8ArrayUtils.concat", function(t) {
                for (var e = 0, n = 0; n < arguments.length; ++n) e += arguments[n].length;
                for (var e = new Uint8Array(e), r = 0, n = 0; n < arguments.length; ++n) e.set(arguments[n], r), r += arguments[n].length;
                return e
            }), (Ua = st.prototype).o = function() {
                this.c = !0;
                var t = this.a.map(function(t) {
                    return (t.da.close() || Promise.resolve()).catch(C)
                });
                return this.i.reject(), this.f && t.push(this.f.o()), this.l && t.push(this.l.setMediaKeys(null).catch(C)), this.I && (clearInterval(this.I), this.I = null), this.B && this.B.cancel(), this.f = this.l = this.j = this.s = this.b = this.B = null, this.a = [], this.m = [], this.na = this.g = this.h = this.ga = null, Promise.all(t)
            }, Ua.configure = function(t) {
                this.h = t
            }, Ua.init = function(t, e) {
                var n = {},
                    r = [];
                return this.fa = e, this.m = t.offlineSessionIds, ht(this, t, e || 0 < t.offlineSessionIds.length, n, r), r.length ? pt(this, n, r) : (this.D = !0, Promise.resolve())
            }, Ua.keySystem = function() {
                return this.b ? this.b.keySystem : ""
            }, Ua.jb = function() {
                var t = this.a.map(function(t) {
                    return t = t.da.expiration, isNaN(t) ? 1 / 0 : t
                });
                return Math.min.apply(Math, t)
            }, Ua.pd = function(t) {
                for (var e = new Uint8Array(t.initData), n = 0; n < this.a.length; ++n)
                    if (at(e, this.a[n].initData)) return;
                bt(this, t.initDataType, e)
            }, Ua.pc = function(t) {
                this.h.delayLicenseRequestUntilPlayed && this.l.paused && !this.O ? this.C.push(t) : wt(this, t)
            }, Ua.jc = function(t) {
                t = t.target;
                var e;
                for (e = 0; e < this.a.length && this.a[e].da != t; ++e);
                if (e != this.a.length) {
                    var n = !1;
                    t.keyStatuses.forEach(function(t, r) {
                        if ("string" == typeof r) {
                            var i = r;
                            r = t, t = i
                        }
                        if ("com.microsoft.playready" == this.b.keySystem && 16 == r.byteLength) {
                            var o = (i = new DataView(r)).getUint32(0, !0),
                                a = i.getUint16(4, !0),
                                s = i.getUint16(6, !0);
                            i.setUint32(0, o, !1), i.setUint16(4, a, !1), i.setUint16(6, s, !1)
                        }
                        "com.microsoft.playready" == this.b.keySystem && "status-pending" == t && (t = "usable"), "status-pending" != t && (this.a[e].loaded = !0, this.a.every(function(t) {
                            return t.loaded
                        }) && this.i.resolve()), "expired" == t && (n = !0), i = ot(new Uint8Array(r)), this.w[i] = t
                    }.bind(this));
                    var r = t.expiration - Date.now();
                    (0 > r || n && 1e3 > r) && !this.a[e].ma && (this.a.splice(e, 1), t.close()), et(this.B)
                }
            }, Ua.Td = function() {
                !q(this.w) && K(this.w, function(t, e) {
                    return "expired" == e
                }) && this.g(new u(2, 6, 6014)), this.sa(this.w)
            }, Ua.zd = function() {
                for (var t = 0; t < this.C.length; t++) wt(this, this.C[t]);
                this.O = !0, this.C = []
            }, Ua.Sd = function() {
                this.a.forEach(function(t) {
                    var e = t.Eb,
                        n = t.da.expiration;
                    isNaN(n) && (n = 1 / 0), n != e && (this.na(t.da.sessionId, n), t.Eb = n)
                }.bind(this))
            };
            var $a = {};
            e("shaka.text.TextEngine.registerParser", xt), e("shaka.text.TextEngine.unregisterParser", function(t) {
                delete $a[t]
            }), kt.prototype.o = function() {
                return this.c = this.f = null, Promise.resolve()
            }, kt.prototype.ie = function(t) {
                this.c = t
            }, kt.prototype.setDisplayer = kt.prototype.ie, kt.prototype.remove = function(t, e) {
                return Promise.resolve().then(function() {
                    !this.c || !this.c.remove(t, e) || null == this.b || e <= this.b || t >= this.a || (t <= this.b && e >= this.a ? this.b = this.a = null : t <= this.b && e < this.a ? this.b = e : t > this.b && e >= this.a && (this.a = t))
                }.bind(this))
            }, At.prototype.parseInit = function(t) {
                this.Ra(t, 0, null, null)
            }, At.prototype.parseMedia = function(t, e) {
                return this.Ra(t, e.periodStart, e.segmentStart, e.segmentEnd)
            }, (Ua = Nt.prototype).o = function() {
                this.i = !0;
                var t, e = [];
                for (t in this.b) {
                    var n = this.b[t],
                        r = n[0];
                    for (this.b[t] = n.slice(0, 1), r && e.push(r.p.catch(C)), r = 1; r < n.length; ++r) n[r].p.catch(C), n[r].p.reject()
                }
                return this.a && e.push(this.a.o()), Promise.all(e).then(function() {
                    this.h.o(), this.j = this.a = this.f = this.g = this.h = null, this.c = {}, this.b = {}
                }.bind(this))
            }, Ua.init = function(t) {
                for (var e in t) {
                    var n = G((n = t[e]).mimeType, n.codecs);
                    "text" == e ? Rt(this, n) : (n = this.f.addSourceBuffer(n), L(this.h, n, "error", this.we.bind(this, e)), L(this.h, n, "updateend", this.Ha.bind(this, e)), this.c[e] = n, this.b[e] = [])
                }
            }, Ua.remove = function(t, e, n) {
                return "text" == t ? this.a.remove(e, n) : Ht(this, t, this.vc.bind(this, t, e, n))
            }, Ua.endOfStream = function(t) {
                return Bt(this, function() {
                    t ? this.f.endOfStream(t) : this.f.endOfStream()
                }.bind(this))
            }, Ua.ea = function(t) {
                return Bt(this, function() {
                    this.f.duration = t
                }.bind(this))
            }, Ua.Y = function() {
                return this.f.duration
            }, Ua.ve = function(t, e) {
                this.c[t].appendBuffer(e)
            }, Ua.vc = function(t, e, n) {
                n <= e ? this.Ha(t) : this.c[t].remove(e, n)
            }, Ua.Kc = function(t) {
                var e = this.c[t].appendWindowEnd;
                this.c[t].abort(), this.c[t].appendWindowEnd = e, this.Ha(t)
            }, Ua.Tc = function(t) {
                this.g.currentTime -= .001, this.Ha(t)
            }, Ua.ke = function(t, e) {
                this.c[t].timestampOffset = e, this.Ha(t)
            }, Ua.he = function(t, e) {
                this.c[t].appendWindowEnd = e + .04, this.Ha(t)
            }, Ua.we = function(t) {
                this.b[t][0].p.reject(new u(2, 3, 3014, this.g.error ? this.g.error.code : 0))
            }, Ua.Ha = function(t) {
                var e = this.b[t][0];
                e && (e.p.resolve(), zt(this, t))
            };
            var Xa = 1,
                Ja = 2,
                Qa = {
                    aar: "aa",
                    abk: "ab",
                    afr: "af",
                    aka: "ak",
                    alb: "sq",
                    amh: "am",
                    ara: "ar",
                    arg: "an",
                    arm: "hy",
                    asm: "as",
                    ava: "av",
                    ave: "ae",
                    aym: "ay",
                    aze: "az",
                    bak: "ba",
                    bam: "bm",
                    baq: "eu",
                    bel: "be",
                    ben: "bn",
                    bih: "bh",
                    bis: "bi",
                    bod: "bo",
                    bos: "bs",
                    bre: "br",
                    bul: "bg",
                    bur: "my",
                    cat: "ca",
                    ces: "cs",
                    cha: "ch",
                    che: "ce",
                    chi: "zh",
                    chu: "cu",
                    chv: "cv",
                    cor: "kw",
                    cos: "co",
                    cre: "cr",
                    cym: "cy",
                    cze: "cs",
                    dan: "da",
                    deu: "de",
                    div: "dv",
                    dut: "nl",
                    dzo: "dz",
                    ell: "el",
                    eng: "en",
                    epo: "eo",
                    est: "et",
                    eus: "eu",
                    ewe: "ee",
                    fao: "fo",
                    fas: "fa",
                    fij: "fj",
                    fin: "fi",
                    fra: "fr",
                    fre: "fr",
                    fry: "fy",
                    ful: "ff",
                    geo: "ka",
                    ger: "de",
                    gla: "gd",
                    gle: "ga",
                    glg: "gl",
                    glv: "gv",
                    gre: "el",
                    grn: "gn",
                    guj: "gu",
                    hat: "ht",
                    hau: "ha",
                    heb: "he",
                    her: "hz",
                    hin: "hi",
                    hmo: "ho",
                    hrv: "hr",
                    hun: "hu",
                    hye: "hy",
                    ibo: "ig",
                    ice: "is",
                    ido: "io",
                    iii: "ii",
                    iku: "iu",
                    ile: "ie",
                    ina: "ia",
                    ind: "id",
                    ipk: "ik",
                    isl: "is",
                    ita: "it",
                    jav: "jv",
                    jpn: "ja",
                    kal: "kl",
                    kan: "kn",
                    kas: "ks",
                    kat: "ka",
                    kau: "kr",
                    kaz: "kk",
                    khm: "km",
                    kik: "ki",
                    kin: "rw",
                    kir: "ky",
                    kom: "kv",
                    kon: "kg",
                    kor: "ko",
                    kua: "kj",
                    kur: "ku",
                    lao: "lo",
                    lat: "la",
                    lav: "lv",
                    lim: "li",
                    lin: "ln",
                    lit: "lt",
                    ltz: "lb",
                    lub: "lu",
                    lug: "lg",
                    mac: "mk",
                    mah: "mh",
                    mal: "ml",
                    mao: "mi",
                    mar: "mr",
                    may: "ms",
                    mkd: "mk",
                    mlg: "mg",
                    mlt: "mt",
                    mon: "mn",
                    mri: "mi",
                    msa: "ms",
                    mya: "my",
                    nau: "na",
                    nav: "nv",
                    nbl: "nr",
                    nde: "nd",
                    ndo: "ng",
                    nep: "ne",
                    nld: "nl",
                    nno: "nn",
                    nob: "nb",
                    nor: "no",
                    nya: "ny",
                    oci: "oc",
                    oji: "oj",
                    ori: "or",
                    orm: "om",
                    oss: "os",
                    pan: "pa",
                    per: "fa",
                    pli: "pi",
                    pol: "pl",
                    por: "pt",
                    pus: "ps",
                    que: "qu",
                    roh: "rm",
                    ron: "ro",
                    rum: "ro",
                    run: "rn",
                    rus: "ru",
                    sag: "sg",
                    san: "sa",
                    sin: "si",
                    slk: "sk",
                    slo: "sk",
                    slv: "sl",
                    sme: "se",
                    smo: "sm",
                    sna: "sn",
                    snd: "sd",
                    som: "so",
                    sot: "st",
                    spa: "es",
                    sqi: "sq",
                    srd: "sc",
                    srp: "sr",
                    ssw: "ss",
                    sun: "su",
                    swa: "sw",
                    swe: "sv",
                    tah: "ty",
                    tam: "ta",
                    tat: "tt",
                    tel: "te",
                    tgk: "tg",
                    tgl: "tl",
                    tha: "th",
                    tib: "bo",
                    tir: "ti",
                    ton: "to",
                    tsn: "tn",
                    tso: "ts",
                    tuk: "tk",
                    tur: "tr",
                    twi: "tw",
                    uig: "ug",
                    ukr: "uk",
                    urd: "ur",
                    uzb: "uz",
                    ven: "ve",
                    vie: "vi",
                    vol: "vo",
                    wel: "cy",
                    wln: "wa",
                    wol: "wo",
                    xho: "xh",
                    yid: "yi",
                    yor: "yo",
                    zha: "za",
                    zho: "zh",
                    zul: "zu"
                };
            e("shaka.abr.SimpleAbrManager", ue), ue.prototype.stop = function() {
                this.h = null, this.c = !1, this.g = [], this.f = null
            }, ue.prototype.stop = ue.prototype.stop, ue.prototype.init = function(t) {
                this.h = t
            }, ue.prototype.init = ue.prototype.init, ue.prototype.chooseVariant = function() {
                var t = ce(this.a.restrictions, this.g),
                    e = this.b.getBandwidthEstimate(this.a.defaultBandwidthEstimate);
                if (this.g.length && !t.length) throw new u(2, 4, 4012);
                for (var n = t[0] || null, r = 0; r < t.length; ++r) {
                    var i = t[r],
                        o = (t[r + 1] || {
                            bandwidth: 1 / 0
                        }).bandwidth / this.a.bandwidthUpgradeTarget;
                    e >= i.bandwidth / this.a.bandwidthDowngradeTarget && e <= o && (n = i)
                }
                return this.f = Date.now(), n
            }, ue.prototype.chooseVariant = ue.prototype.chooseVariant, ue.prototype.enable = function() {
                this.c = !0
            }, ue.prototype.enable = ue.prototype.enable, ue.prototype.disable = function() {
                this.c = !1
            }, ue.prototype.disable = ue.prototype.disable, ue.prototype.segmentDownloaded = function(t, e) {
                var n = this.b;
                if (!(16e3 > e)) {
                    var r = 8e3 * e / t,
                        o = t / 1e3;
                    n.a += e, i(n.b, o, r), i(n.c, o, r)
                }
                if (null != this.f && this.c) t: {
                    if (this.i) {
                        if (Date.now() - this.f < 1e3 * this.a.switchInterval) break t
                    } else {
                        if (!(128e3 <= this.b.a)) break t;
                        this.i = !0
                    }
                    n = this.chooseVariant(),
                    this.b.getBandwidthEstimate(this.a.defaultBandwidthEstimate),
                    this.h(n)
                }
            }, ue.prototype.segmentDownloaded = ue.prototype.segmentDownloaded, ue.prototype.getBandwidthEstimate = function() {
                return this.b.getBandwidthEstimate(this.a.defaultBandwidthEstimate)
            }, ue.prototype.getBandwidthEstimate = ue.prototype.getBandwidthEstimate, ue.prototype.setVariants = function(t) {
                this.g = t
            }, ue.prototype.setVariants = ue.prototype.setVariants, ue.prototype.configure = function(t) {
                this.a = t
            }, ue.prototype.configure = ue.prototype.configure, le.prototype.preventDefault = function() {
                this.cancelable && (this.defaultPrevented = !0)
            }, le.prototype.stopImmediatePropagation = function() {
                this.a = !0
            }, le.prototype.stopPropagation = function() {};
            var Za = "ended play playing pause pausing ratechange seeked seeking timeupdate volumechange".split(" "),
                ts = "buffered currentTime duration ended loop muted paused playbackRate seeking videoHeight videoWidth volume".split(" "),
                es = ["loop", "playbackRate"],
                ns = ["pause", "play"],
                rs = "adaptation buffering emsg error loading unloading texttrackvisibility timelineregionadded timelineregionenter timelineregionexit trackschanged".split(" "),
                is = "drmInfo getAudioLanguages getConfiguration getExpiration getManifestUri getPlaybackRate getTextLanguages getTextTracks getStats getVariantTracks isAudioOnly isBuffering isInProgress isLive isTextTrackVisible keySystem seekRange".split(" "),
                os = ["getPlayheadTimeAsDate", "getPresentationStartTimeAsDate"],
                as = [
                    ["getConfiguration", "configure"]
                ],
                ss = [
                    ["isTextTrackVisible", "setTextTrackVisibility"]
                ],
                us = "addTextTrack cancelTrickPlay configure resetConfiguration retryStreaming selectAudioLanguage selectTextLanguage selectTextTrack selectVariantTrack setTextTrackVisibility trickPlay".split(" "),
                cs = ["load", "unload"],
                ls = !1;
            (Ua = de.prototype).o = function() {
                return me(this), this.a && (this.a.leave(function() {}, function() {}), this.a = null), this.C = this.B = this.h = null, this.c = this.i = !1, this.g = this.f = this.b = this.j = null, Promise.resolve()
            }, Ua.Z = function() {
                return this.c
            }, Ua.Kb = function() {
                return this.w
            }, Ua.init = function() {
                if (t.chrome && chrome.cast && chrome.cast.isAvailable) {
                    delete t.__onGCastApiAvailable, this.i = !0, this.h();
                    var e = new chrome.cast.SessionRequest(this.D),
                        e = new chrome.cast.ApiConfig(e, this.qd.bind(this), this.Bd.bind(this), "origin_scoped");
                    chrome.cast.initialize(e, function() {}, function() {}), ls && setTimeout(this.h.bind(this), 20)
                } else t.__onGCastApiAvailable = function(t) {
                    t && this.init()
                }.bind(this)
            }, Ua.Ob = function(t) {
                this.j = t, this.c && ve(this, {
                    type: "appData",
                    appData: this.j
                })
            }, Ua.cast = function(t) {
                return this.i ? ls ? this.c ? Promise.reject(new u(1, 8, 8002)) : (this.g = new g, chrome.cast.requestSession(this.Gb.bind(this, t), this.hc.bind(this)), this.g) : Promise.reject(new u(1, 8, 8001)) : Promise.reject(new u(1, 8, 8e3))
            }, Ua.ib = function() {
                this.c && (me(this), this.a && (this.a.stop(function() {}, function() {}), this.a = null))
            }, Ua.get = function(t, e) {
                if ("video" == t) {
                    if (0 <= ns.indexOf(e)) return this.uc.bind(this, t, e)
                } else if ("player" == t) {
                    if (0 <= os.indexOf(e) && !this.get("player", "isLive")()) return function() {};
                    if (0 <= us.indexOf(e)) return this.uc.bind(this, t, e);
                    if (0 <= cs.indexOf(e)) return this.Xd.bind(this, t, e);
                    if (0 <= is.indexOf(e)) return this.qc.bind(this, t, e)
                }
                return this.qc(t, e)
            }, Ua.set = function(t, e, n) {
                this.b[t][e] = n, ve(this, {
                    type: "set",
                    targetName: t,
                    property: e,
                    value: n
                })
            }, Ua.Gb = function(t, e) {
                this.a = e, this.a.addUpdateListener(this.ic.bind(this)), this.a.addMessageListener("urn:x-cast:com.google.shaka.v2", this.vd.bind(this)), this.ic(), ve(this, {
                    type: "init",
                    initState: t,
                    appData: this.j
                }), this.g.resolve()
            }, Ua.hc = function(t) {
                var e = 8003;
                switch (t.code) {
                    case "cancel":
                        e = 8004;
                        break;
                    case "timeout":
                        e = 8005;
                        break;
                    case "receiver_unavailable":
                        e = 8006
                }
                this.g.reject(new u(2, 8, e, t))
            }, Ua.qc = function(t, e) {
                return this.b[t][e]
            }, Ua.uc = function(t, e) {
                ve(this, {
                    type: "call",
                    targetName: t,
                    methodName: e,
                    args: Array.prototype.slice.call(arguments, 2)
                })
            }, Ua.Xd = function(t, e) {
                var n = Array.prototype.slice.call(arguments, 2),
                    r = new g,
                    i = this.m.toString();
                return this.m++, this.f[i] = r, ve(this, {
                    type: "asyncCall",
                    targetName: t,
                    methodName: e,
                    args: n,
                    id: i
                }), r
            }, Ua.qd = function(t) {
                var e = this.s();
                this.g = new g, this.l = !0, this.Gb(e, t)
            }, Ua.Bd = function(t) {
                ls = "available" == t, this.h()
            }, Ua.ic = function() {
                var t = !!this.a && "connected" == this.a.status;
                if (this.c && !t) {
                    this.C();
                    for (var e in this.b) this.b[e] = {};
                    me(this)
                }
                this.w = (this.c = t) ? this.a.receiver.friendlyName : "", this.h()
            }, Ua.vd = function(t, e) {
                switch ((i = he(e)).type) {
                    case "event":
                        var n = i.targetName,
                            r = i.event;
                        this.B(n, new le(r.type, r));
                        break;
                    case "update":
                        r = i.update;
                        for (n in r) {
                            var i = this.b[n] || {};
                            for (o in r[n]) i[o] = r[n][o]
                        }
                        this.l && (this.I(), this.l = !1);
                        break;
                    case "asyncComplete":
                        n = i.id;
                        var o = i.error;
                        if (i = this.f[n], delete this.f[n], i)
                            if (o) {
                                n = new u(o.severity, o.category, o.code);
                                for (r in o) n[r] = o[r];
                                i.reject(n)
                            } else i.resolve()
                }
            }, ye.prototype.addEventListener = function(t, e) {
                this.ub.push(t, e)
            }, ye.prototype.removeEventListener = function(t, e) {
                this.ub.remove(t, e)
            }, ye.prototype.dispatchEvent = function(t) {
                for (var e = this.ub.get(t.type) || [], n = 0; n < e.length; ++n) {
                    t.target = this.Za, t.currentTarget = this.Za;
                    var r = e[n];
                    try {
                        r.handleEvent ? r.handleEvent(t) : r.call(this, t)
                    } catch (t) {}
                    if (t.a) break
                }
                return t.defaultPrevented
            }, n(ge), e("shaka.cast.CastProxy", ge), ge.prototype.o = function(t) {
                return t && this.a && this.a.ib(), t = [this.i ? this.i.o() : null, this.b ? this.b.o() : null, this.a ? this.a.o() : null], this.a = this.i = this.j = this.h = this.b = this.c = null, Promise.all(t)
            }, ge.prototype.destroy = ge.prototype.o, ge.prototype.gd = function() {
                return this.h
            }, ge.prototype.getVideo = ge.prototype.gd, ge.prototype.Yc = function() {
                return this.j
            }, ge.prototype.getPlayer = ge.prototype.Yc, ge.prototype.Lc = function() {
                return !!this.a && (this.a.i && ls)
            }, ge.prototype.canCast = ge.prototype.Lc, ge.prototype.Z = function() {
                return !!this.a && this.a.Z()
            }, ge.prototype.isCasting = ge.prototype.Z, ge.prototype.Kb = function() {
                return this.a ? this.a.Kb() : ""
            }, ge.prototype.receiverName = ge.prototype.Kb, ge.prototype.cast = function() {
                var t = this.bc();
                return this.a.cast(t).then(function() {
                    return this.b.qb()
                }.bind(this))
            }, ge.prototype.cast = ge.prototype.cast, ge.prototype.Ob = function(t) {
                this.a.Ob(t)
            }, ge.prototype.setAppData = ge.prototype.Ob, ge.prototype.ze = function() {
                var t = this.a;
                if (t.c) {
                    var e = t.s();
                    chrome.cast.requestSession(t.Gb.bind(t, e), t.hc.bind(t))
                }
            }, ge.prototype.suggestDisconnect = ge.prototype.ze, ge.prototype.ib = function() {
                this.a.ib()
            }, ge.prototype.forceDisconnect = ge.prototype.ib, (Ua = ge.prototype).bc = function() {
                var t = {
                    video: {},
                    player: {},
                    playerAfterLoad: {},
                    manifest: this.b.fb,
                    startTime: null
                };
                return this.c.pause(), es.forEach(function(e) {
                    t.video[e] = this.c[e]
                }.bind(this)), this.c.ended || (t.startTime = this.c.currentTime), as.forEach(function(e) {
                    var n = e[1];
                    e = this.b[e[0]](), t.player[n] = e
                }.bind(this)), ss.forEach(function(e) {
                    var n = e[1];
                    e = this.b[e[0]](), t.playerAfterLoad[n] = e
                }.bind(this)), t
            }, Ua.qe = function() {
                this.dispatchEvent(new le("caststatuschanged"))
            }, Ua.re = function() {
                this.f.dispatchEvent(new le(this.h.paused ? "pause" : "play"))
            }, Ua.te = function() {
                as.forEach(function(t) {
                    var e = t[1];
                    t = this.a.get("player", t[0])(), this.b[e](t)
                }.bind(this));
                var t = this.a.get("player", "getManifestUri")(),
                    e = this.a.get("video", "ended"),
                    n = Promise.resolve(),
                    r = this.c.autoplay,
                    i = null;
                e || (i = this.a.get("video", "currentTime")), t && (this.c.autoplay = !1, (n = this.b.load(t, i)).catch(function(t) {
                    this.b.dispatchEvent(new le("error", {
                        detail: t
                    }))
                }.bind(this)));
                var o = {};
                es.forEach(function(t) {
                    o[t] = this.a.get("video", t)
                }.bind(this)), n.then(function() {
                    es.forEach(function(t) {
                        this.c[t] = o[t]
                    }.bind(this)), ss.forEach(function(t) {
                        var e = t[1];
                        t = this.a.get("player", t[0])(), this.b[e](t)
                    }.bind(this)), this.c.autoplay = r, t && this.c.play()
                }.bind(this))
            }, Ua.Ge = function(t) {
                if ("addEventListener" == t) return this.f.addEventListener.bind(this.f);
                if ("removeEventListener" == t) return this.f.removeEventListener.bind(this.f);
                if (this.a.Z() && !Object.keys(this.a.b.video).length) {
                    var e = this.c[t];
                    if ("function" != typeof e) return e
                }
                return this.a.Z() ? this.a.get("video", t) : ("function" == typeof(e = this.c[t]) && (e = e.bind(this.c)), e)
            }, Ua.Ie = function(t, e) {
                this.a.Z() ? this.a.set("video", t, e) : this.c[t] = e
            }, Ua.He = function(t) {
                this.a.Z() || this.f.dispatchEvent(new le(t.type, t))
            }, Ua.Qd = function(t) {
                return "addEventListener" == t ? this.g.addEventListener.bind(this.g) : "removeEventListener" == t ? this.g.removeEventListener.bind(this.g) : "getMediaElement" == t ? function() {
                    return this.h
                }.bind(this) : "getNetworkingEngine" == t ? this.b.cc.bind(this.b) : this.a.Z() && !Object.keys(this.a.b.video).length && 0 <= is.indexOf(t) || !this.a.Z() ? (t = this.b[t]).bind(this.b) : this.a.get("player", t)
            }, Ua.Rd = function(t) {
                this.a.Z() || this.g.dispatchEvent(t)
            }, Ua.se = function(t, e) {
                this.a.Z() && ("video" == t ? this.f.dispatchEvent(e) : "player" == t && this.g.dispatchEvent(e))
            }, n(we), e("shaka.cast.CastReceiver", we), we.prototype.isConnected = function() {
                return this.i
            }, we.prototype.isConnected = we.prototype.isConnected, we.prototype.kd = function() {
                return this.f
            }, we.prototype.isIdle = we.prototype.kd, we.prototype.o = function() {
                var e = this.b ? this.b.o() : Promise.resolve();
                return null != this.h && t.clearTimeout(this.h), this.l = this.j = this.b = this.a = null, this.i = !1, this.f = !0, this.h = this.g = this.c = null, e.then(function() {
                    cast.receiver.CastReceiverManager.getInstance().stop()
                })
            }, we.prototype.destroy = we.prototype.o, (Ua = we.prototype).oc = function() {
                this.i = !!cast.receiver.CastReceiverManager.getInstance().getSenders().length, Ee(this)
            }, Ua.rc = function(t, e) {
                this.Hb(), Se(this, {
                    type: "event",
                    targetName: t,
                    event: e
                }, this.c)
            }, Ua.Hb = function() {
                null != this.h && t.clearTimeout(this.h), this.h = t.setTimeout(this.Hb.bind(this), 500);
                var e = {
                    video: {},
                    player: {}
                };
                ts.forEach(function(t) {
                    e.video[t] = this.a[t]
                }.bind(this));
                var n = is;
                this.b.R() && (n = n.concat(os)), n.forEach(function(t) {
                    e.player[t] = this.b[t]()
                }.bind(this)), (n = cast.receiver.CastReceiverManager.getInstance().getSystemVolume()) && (e.video.volume = n.level, e.video.muted = n.muted), Se(this, {
                    type: "update",
                    update: e
                }, this.c)
            }, Ua.Sc = function() {
                var t = cast.receiver.CastReceiverManager.getInstance().getSystemVolume();
                t && Se(this, {
                    type: "update",
                    update: {
                        video: {
                            volume: t.level,
                            muted: t.muted
                        }
                    }
                }, this.c), Se(this, {
                    type: "event",
                    targetName: "video",
                    event: {
                        type: "volumechange"
                    }
                }, this.c)
            }, Ua.Ed = function(t) {
                var e = he(t.data);
                switch (e.type) {
                    case "init":
                        Te(this, e.initState, e.appData), this.Hb();
                        break;
                    case "appData":
                        this.l(e.appData);
                        break;
                    case "set":
                        var n = e.targetName,
                            r = e.property,
                            i = e.value;
                        if ("video" == n) {
                            if (e = cast.receiver.CastReceiverManager.getInstance(), "volume" == r) {
                                e.setSystemVolumeLevel(i);
                                break
                            }
                            if ("muted" == r) {
                                e.setSystemVolumeMuted(i);
                                break
                            }
                        }
                        this.j[n][r] = i;
                        break;
                    case "call":
                        n = e.targetName, r = e.methodName, i = e.args, (n = this.j[n])[r].apply(n, i);
                        break;
                    case "asyncCall":
                        n = e.targetName, r = e.methodName, i = e.args, e = e.id, t = t.senderId, (n = this.j[n])[r].apply(n, i).then(this.zc.bind(this, t, e, null), this.zc.bind(this, t, e))
                }
            }, Ua.rd = function(t) {
                var e = he(t.data);
                switch (e.type) {
                    case "PLAY":
                        this.a.play(), Pe(this, 0);
                        break;
                    case "PAUSE":
                        this.a.pause(), Pe(this, 0);
                        break;
                    case "SEEK":
                        t = e.currentTime;
                        n = e.resumeState;
                        null != t && (this.a.currentTime = Number(t)), n && "PLAYBACK_START" == n ? (this.a.play(), Pe(this, 0)) : n && "PLAYBACK_PAUSE" == n && (this.a.pause(), Pe(this, 0));
                        break;
                    case "STOP":
                        this.b.qb().then(function() {
                            Pe(this, 0)
                        }.bind(this));
                        break;
                    case "GET_STATUS":
                        Pe(this, Number(e.requestId));
                        break;
                    case "VOLUME":
                        t = (n = e.volume).level;
                        var n = n.muted,
                            r = this.a.volume,
                            i = this.a.muted;
                        null != t && (this.a.volume = Number(t)), null != n && (this.a.muted = n), r == this.a.volume && i == this.a.muted || Pe(this, 0);
                        break;
                    case "LOAD":
                        n = e.media.contentId, t = e.currentTime;
                        var o = this.m(n);
                        this.a.autoplay = !0, this.b.load(o, t).then(function() {
                            Pe(this, 0, {
                                contentId: o,
                                streamType: this.b.R() ? "LIVE" : "BUFFERED",
                                contentType: ""
                            })
                        }.bind(this)).catch(function(t) {
                            var n = "LOAD_FAILED";
                            7 == t.category && 7e3 == t.code && (n = "LOAD_CANCELLED"), Se(this, {
                                requestId: Number(e.requestId),
                                type: n
                            }, this.g)
                        }.bind(this));
                        break;
                    default:
                        Se(this, {
                            requestId: Number(e.requestId),
                            type: "INVALID_REQUEST",
                            reason: "INVALID_COMMAND"
                        }, this.g)
                }
            }, Ua.zc = function(t, e, n) {
                Se(this, {
                    type: "asyncComplete",
                    id: e,
                    error: n
                }, this.c, t)
            };
            var fs = {
                    IDLE: "IDLE",
                    Ic: "PLAYING",
                    Gc: "BUFFERING",
                    Hc: "PAUSED"
                },
                hs = {
                    "urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b": "org.w3.clearkey",
                    "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed": "com.widevine.alpha",
                    "urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95": "com.microsoft.playready",
                    "urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb": "com.adobe.primetime"
                };
            e("shaka.media.InitSegmentReference", Ge), e("shaka.media.SegmentReference", $e), e("shaka.util.DataViewReader", Xe);
            var ps = 1;
            Xe.Endianness = {
                Je: 0,
                Qe: ps
            }, Xe.prototype.ba = function() {
                return this.v < this.L.byteLength
            }, Xe.prototype.hasMoreData = Xe.prototype.ba, Xe.prototype.$c = function() {
                return this.v
            }, Xe.prototype.getPosition = Xe.prototype.$c, Xe.prototype.Vc = function() {
                return this.L.byteLength
            }, Xe.prototype.getLength = Xe.prototype.Vc, Xe.prototype.Jb = function() {
                try {
                    var t = this.L.getUint8(this.v)
                } catch (t) {
                    Je()
                }
                return this.v += 1, t
            }, Xe.prototype.readUint8 = Xe.prototype.Jb, Xe.prototype.tc = function() {
                try {
                    var t = this.L.getUint16(this.v, this.a)
                } catch (t) {
                    Je()
                }
                return this.v += 2, t
            }, Xe.prototype.readUint16 = Xe.prototype.tc, Xe.prototype.F = function() {
                try {
                    var t = this.L.getUint32(this.v, this.a)
                } catch (t) {
                    Je()
                }
                return this.v += 4, t
            }, Xe.prototype.readUint32 = Xe.prototype.F, Xe.prototype.sc = function() {
                try {
                    var t = this.L.getInt32(this.v, this.a)
                } catch (t) {
                    Je()
                }
                return this.v += 4, t
            }, Xe.prototype.readInt32 = Xe.prototype.sc, Xe.prototype.Ta = function() {
                try {
                    if (this.a) var t = this.L.getUint32(this.v, !0),
                        e = this.L.getUint32(this.v + 4, !0);
                    else e = this.L.getUint32(this.v, !1), t = this.L.getUint32(this.v + 4, !1)
                } catch (t) {
                    Je()
                }
                if (2097151 < e) throw new u(2, 3, 3001);
                return this.v += 8, e * Math.pow(2, 32) + t
            }, Xe.prototype.readUint64 = Xe.prototype.Ta, Xe.prototype.Ja = function(t) {
                this.v + t > this.L.byteLength && Je();
                var e = this.L.buffer.slice(this.v, this.v + t);
                return this.v += t, new Uint8Array(e)
            }, Xe.prototype.readBytes = Xe.prototype.Ja, Xe.prototype.J = function(t) {
                this.v + t > this.L.byteLength && Je(), this.v += t
            }, Xe.prototype.skip = Xe.prototype.J, Xe.prototype.Ib = function() {
                for (var t = this.v; this.ba() && this.L.getUint8(this.v);) this.v += 1;
                return t = this.L.buffer.slice(t, this.v), this.v += 1, $(t)
            }, Xe.prototype.readTerminatedString = Xe.prototype.Ib, e("shaka.util.Mp4Parser", Qe), Qe.prototype.G = function(t, e) {
                var n = nn(t);
                return this.b[n] = 0, this.a[n] = e, this
            }, Qe.prototype.box = Qe.prototype.G, Qe.prototype.aa = function(t, e) {
                var n = nn(t);
                return this.b[n] = 1, this.a[n] = e, this
            }, Qe.prototype.fullBox = Qe.prototype.aa, Qe.prototype.parse = function(t) {
                for (t = new Xe(new DataView(t), 0); t.ba();) this.nb(0, t)
            }, Qe.prototype.parse = Qe.prototype.parse, Qe.prototype.nb = function(t, e) {
                var n = e.v,
                    r = e.F(),
                    i = e.F();
                switch (r) {
                    case 0:
                        r = e.L.byteLength - n;
                        break;
                    case 1:
                        r = e.Ta()
                }
                var o = this.a[i];
                if (o) {
                    var a = null,
                        s = null;
                    1 == this.b[i] && (s = e.F(), a = s >>> 24, s &= 16777215), i = 0 < (i = n + r - e.v) ? e.Ja(i).buffer : new ArrayBuffer(0), o({
                        Ra: this,
                        version: a,
                        ac: s,
                        u: i = new Xe(new DataView(i), 0),
                        size: r,
                        start: n + t
                    })
                } else e.J(n + r - e.v)
            }, Qe.prototype.parseNext = Qe.prototype.nb, Qe.children = Ze, Qe.sampleDescription = tn, Qe.allData = en, e("shaka.media.SegmentIndex", an), an.prototype.o = function() {
                return this.a = null, Promise.resolve()
            }, an.prototype.destroy = an.prototype.o, an.prototype.find = function(t) {
                for (var e = this.a.length - 1; 0 <= e; --e) {
                    var n = this.a[e];
                    if (t >= n.startTime && t < n.endTime) return n.position
                }
                return this.a.length && t < this.a[0].startTime ? this.a[0].position : null
            }, an.prototype.find = an.prototype.find, an.prototype.get = function(t) {
                return this.a.length ? 0 > (t -= this.a[0].position) || t >= this.a.length ? null : this.a[t] : null
            }, an.prototype.get = an.prototype.get, an.prototype.lb = function(t) {
                for (var e, n, r, i = [], o = e = 0; e < this.a.length && o < t.length;) n = this.a[e], r = t[o], n.startTime < r.startTime ? (i.push(n), e++) : (n.startTime > r.startTime || (.1 < Math.abs(n.endTime - r.endTime) ? (r = new $e(n.position, r.startTime, r.endTime, r.a, r.V, r.K), i.push(r)) : i.push(n), e++), o++);
                for (; e < this.a.length;) i.push(this.a[e++]);
                if (i.length)
                    for (e = i[i.length - 1].position + 1; o < t.length;) r = t[o++], r = new $e(e++, r.startTime, r.endTime, r.a, r.V, r.K), i.push(r);
                else i = t;
                this.a = i
            }, an.prototype.merge = an.prototype.lb, an.prototype.wb = function(t) {
                for (var e = 0; e < this.a.length && !(this.a[e].endTime > t); ++e);
                this.a.splice(0, e)
            }, an.prototype.evict = an.prototype.wb;
            var ds;
            un.prototype.ba = function() {
                return this.a.ba()
            }, pn.prototype.parse = function(t, e, n, r) {
                var i;
                if (e = new un(new DataView(e)), 440786851 != cn(e).id) throw new u(2, 3, 3008);
                var o = cn(e);
                if (408125543 != o.id) throw new u(2, 3, 3009);
                for (e = o.a.byteOffset, o = new un(o.a), i = null; o.ba();) {
                    var a = cn(o);
                    if (357149030 == a.id) {
                        i = a;
                        break
                    }
                }
                if (!i) throw new u(2, 3, 3010);
                for (o = new un(i.a), i = 1e6, a = null; o.ba();) {
                    var s = cn(o);
                    if (2807729 == s.id) i = hn(s);
                    else if (17545 == s.id)
                        if (4 == (a = s).a.byteLength) a = a.a.getFloat32(0);
                        else {
                            if (8 != a.a.byteLength) throw new u(2, 3, 3003);
                            a = a.a.getFloat64(0)
                        }
                }
                if (null == a) throw new u(2, 3, 3011);
                if (o = i / 1e9, i = a * o, 475249515 != (t = cn(new un(new DataView(t)))).id) throw new u(2, 3, 3007);
                return dn(t, e, o, i, n, r)
            };
            var ms = {},
                vs = {};
            e("shaka.media.ManifestParser.registerParserByExtension", function(t, e) {
                vs[t] = e
            }), e("shaka.media.ManifestParser.registerParserByMime", function(t, e) {
                ms[t] = e
            }), e("shaka.media.PresentationTimeline", An), An.prototype.Y = function() {
                return this.a
            }, An.prototype.getDuration = An.prototype.Y, An.prototype.ea = function(t) {
                this.a = t
            }, An.prototype.setDuration = An.prototype.ea, An.prototype.ad = function() {
                return this.c
            }, An.prototype.getPresentationStartTime = An.prototype.ad, An.prototype.Bc = function(t) {
                this.i = t
            }, An.prototype.setClockOffset = An.prototype.Bc, An.prototype.ob = function(t) {
                this.h = t
            }, An.prototype.setStatic = An.prototype.ob, An.prototype.cd = function() {
                return this.f
            }, An.prototype.getSegmentAvailabilityDuration = An.prototype.cd, An.prototype.Dc = function(t) {
                this.f = t
            }, An.prototype.setSegmentAvailabilityDuration = An.prototype.Dc, An.prototype.Cc = function(t) {
                this.j = t
            }, An.prototype.setDelay = An.prototype.Cc, An.prototype.Ga = function(t, e) {
                e.length && (this.b = e.reduce(function(t, e) {
                    return Math.max(t, e.endTime - e.startTime)
                }, this.b))
            }, An.prototype.notifySegments = An.prototype.Ga, An.prototype.Cb = function(t) {
                this.b = Math.max(this.b, t)
            }, An.prototype.notifyMaxSegmentDuration = An.prototype.Cb, An.prototype.R = function() {
                return 1 / 0 == this.a && !this.h
            }, An.prototype.isLive = An.prototype.R, An.prototype.wa = function() {
                return 1 / 0 != this.a && !this.h
            }, An.prototype.isInProgress = An.prototype.wa, An.prototype.ia = function() {
                return this.Da(0)
            }, An.prototype.getSegmentAvailabilityStart = An.prototype.ia, An.prototype.Da = function(t) {
                if (1 / 0 == this.f) return this.g;
                var e = this.va();
                return Math.max(this.g, Math.min(e - this.f + t, e))
            }, An.prototype.getSafeAvailabilityStart = An.prototype.Da, An.prototype.Ac = function(t) {
                this.g = t
            }, An.prototype.setAvailabilityStart = An.prototype.Ac, An.prototype.va = function() {
                return this.R() || this.wa() ? Math.min(Math.max(0, (Date.now() + this.i) / 1e3 - this.b - this.c), this.a) : this.a
            }, An.prototype.getSegmentAvailabilityEnd = An.prototype.va, An.prototype.kb = function() {
                return Math.max(0, this.va() - (this.R() || this.wa() ? this.j : 0))
            }, An.prototype.getSeekRangeEnd = An.prototype.kb, e("shaka.dash.DashParser", Nn), (Ua = Nn.prototype).configure = function(t) {
                this.b = t
            }, Ua.start = function(t, e) {
                return this.g = [t], this.a = e, Mn(this).then(function() {
                    return this.a && Hn(this, 0), this.c
                }.bind(this))
            }, Ua.stop = function() {
                return this.b = this.a = null, this.g = [], this.c = null, this.i = [], this.j = {}, null != this.f && (t.clearTimeout(this.f), this.f = null), Promise.resolve()
            }, Ua.update = function() {
                Mn(this).catch(function(t) {
                    this.a && this.a.onError(t)
                }.bind(this))
            }, Ua.onExpirationUpdated = function() {}, Ua.Md = function(t, e) {
                t.U = Bn(e, t.W, null);
                var n = !1,
                    r = (l = Oe(e, "Role")).map(function(t) {
                        return t.getAttribute("value")
                    }).filter(O),
                    i = void 0;
                "text" == t.U.contentType && (i = "subtitle");
                for (var o = 0; o < l.length; o++)
                    if (null == (f = l[o].getAttribute("schemeIdUri")) || "urn:mpeg:dash:role:2011" == f) switch (f = l[o].getAttribute("value")) {
                        case "main":
                            n = !0;
                            break;
                        case "caption":
                        case "subtitle":
                            i = f
                    }
                var a = null,
                    s = !1;
                if (Oe(e, "EssentialProperty").forEach(function(t) {
                        "http://dashif.org/guidelines/trickmode" == t.getAttribute("schemeIdUri") ? a = t.getAttribute("value") : s = !0
                    }), s) return null;
                var c = Le(l = Oe(e, "ContentProtection"), this.b.dash.customScheme, this.b.dash.ignoreDrmInfo),
                    l = Vt(e.getAttribute("lang") || "und"),
                    f = e.getAttribute("label");
                if (!(r = (o = Oe(e, "Representation")).map(this.Pd.bind(this, t, c, i, l, f, n, r)).filter(function(t) {
                        return !!t
                    })).length) throw new u(2, 4, 4003);
                return t.U.contentType && "application" != t.U.contentType || (t.U.contentType = Kn(r[0].mimeType, r[0].codecs), r.forEach(function(e) {
                    e.type = t.U.contentType
                })), r.forEach(function(t) {
                    c.drmInfos.forEach(function(e) {
                        t.keyId && e.keyIds.push(t.keyId)
                    })
                }), i = o.map(function(t) {
                    return t.getAttribute("id")
                }).filter(O), {
                    id: t.U.id || "__fake__" + this.h++,
                    contentType: t.U.contentType,
                    language: l,
                    Ab: n,
                    streams: r,
                    drmInfos: c.drmInfos,
                    Tb: a,
                    Yd: i
                }
            }, Ua.Pd = function(t, e, n, r, i, o, a, s) {
                if (t.A = Bn(s, t.U, null), !qn(t.A)) return null;
                t.bandwidth = xe(s, "bandwidth", Re) || 0;
                var u = this.Zd.bind(this);
                if (t.A.Ua) u = yn(t, u);
                else if (t.A.pa) u = wn(t, this.j);
                else if (t.A.Va) u = Sn(t, u, this.j, !!this.c);
                else {
                    var c = t.A.X,
                        l = t.S.duration || 0;
                    u = {
                        createSegmentIndex: Promise.resolve.bind(Promise),
                        findSegmentPosition: function(t) {
                            return 0 <= t && t < l ? 1 : null
                        },
                        getSegmentReference: function(t) {
                            return 1 != t ? null : new $e(1, 0, l, function() {
                                return c
                            }, 0, null)
                        },
                        initSegmentReference: null,
                        presentationTimeOffset: 0
                    }
                }
                return s = Oe(s, "ContentProtection"), s = Ue(s, this.b.dash.customScheme, e, this.b.dash.ignoreDrmInfo), {
                    id: this.h++,
                    createSegmentIndex: u.createSegmentIndex,
                    findSegmentPosition: u.findSegmentPosition,
                    getSegmentReference: u.getSegmentReference,
                    initSegmentReference: u.initSegmentReference,
                    presentationTimeOffset: u.presentationTimeOffset,
                    mimeType: t.A.mimeType,
                    codecs: t.A.codecs,
                    frameRate: t.A.frameRate,
                    bandwidth: t.bandwidth,
                    width: t.A.width,
                    height: t.A.height,
                    kind: n,
                    encrypted: 0 < e.drmInfos.length,
                    keyId: s,
                    language: r,
                    label: i,
                    type: t.U.contentType,
                    primary: o,
                    trickModeVideo: null,
                    containsEmsgBoxes: t.A.containsEmsgBoxes,
                    roles: a,
                    channelsCount: t.A.Db
                }
            }, Ua.ue = function() {
                this.f = null;
                var t = Date.now();
                Mn(this).then(function() {
                    this.a && Hn(this, (Date.now() - t) / 1e3)
                }.bind(this)).catch(function(t) {
                    this.a && (t.severity = 1, this.a.onError(t), Hn(this, 0))
                }.bind(this))
            }, Ua.Od = function(t, e, n) {
                var r = n.getAttribute("schemeIdUri") || "",
                    i = n.getAttribute("value") || "",
                    o = xe(n, "timescale", De) || 1;
                Oe(n, "Event").forEach(function(n) {
                    var a = xe(n, "presentationTime", De) || 0,
                        s = xe(n, "duration", De) || 0,
                        s = (a = a / o + t) + s / o;
                    null != e && (a = Math.min(a, t + e), s = Math.min(s, t + e)), n = {
                        schemeIdUri: r,
                        value: i,
                        startTime: a,
                        endTime: s,
                        id: n.getAttribute("id") || "",
                        eventElement: n
                    }, this.a.onTimelineRegionAdded(n)
                }.bind(this))
            }, Ua.Zd = function(t, e, n) {
                return t = I(t, this.b.retryParameters), null != e && (t.headers.Range = "bytes=" + e + "-" + (null != n ? n : "")), this.a.networkingEngine.request(1, t).then(function(t) {
                    return t.data
                })
            }, vs.mpd = Nn, ms["application/dash+xml"] = Nn, Gn.prototype.toString = function() {
                return this.value ? "#" + this.name + ":" + this.value : 0 < this.a.length ? "#" + this.name + ":" + this.a.map(function(t) {
                    return t.name + '="' + t.value + '"'
                }).join(",") : "#" + this.name
            }, Gn.prototype.getAttribute = function(t) {
                var e = this.a.filter(function(e) {
                    return e.name == t
                });
                return e.length ? e[0] : null
            };
            var ys = "EXT-X-TARGETDURATION EXT-X-MEDIA-SEQUENCE EXT-X-DISCONTINUITY-SEQUENCE EXT-X-PLAYLIST-TYPE EXT-X-MAP EXT-X-I-FRAMES-ONLY EXT-X-ENDLIST".split(" "),
                gs = "EXTINF EXT-X-BYTERANGE EXT-X-DISCONTINUITY EXT-X-PROGRAM-DATE-TIME EXT-X-KEY EXT-X-DATERANGE".split(" ");
            e("shaka.net.DataUriPlugin", ur), ur.parse = function(e) {
                if (2 > (r = e.split(":")).length || "data" != r[0]) throw new u(2, 1, 1004, e);
                if (2 > (r = r.slice(1).join(":").split(",")).length) throw new u(2, 1, 1004, e);
                var n = r[0],
                    r = t.decodeURIComponent(r.slice(1).join(",")),
                    i = null;
                if (1 < (n = n.split(";")).length && (i = n[1]), "base64" == i) e = rt(r).buffer;
                else {
                    if (i) throw new u(2, 1, 1005, e);
                    e = Q(r)
                }
                return {
                    data: e,
                    contentType: n[0]
                }
            }, Ka.data = ur, e("shaka.hls.HlsParser", cr), (Ua = cr.prototype).configure = function(t) {
                this.h = t
            }, Ua.start = function(t, e) {
                return this.b = e, this.m = t, Nr(this, t).then(function(e) {
                    return fr(this, e.data, t).then(function() {
                        return Mr(this, this.c), this.B
                    }.bind(this))
                }.bind(this))
            }, Ua.stop = function() {
                return this.h = this.b = null, this.g = {}, this.C = {}, this.B = null, Promise.resolve()
            }, Ua.update = function() {
                if (this.f) {
                    for (var t = [], e = Object.keys(this.s), n = 0; n < e.length; n++) {
                        var r = e[n];
                        t.push(lr(this, this.s[r], r))
                    }
                    return Promise.all(t)
                }
            }, Ua.onExpirationUpdated = function() {};
            var bs = {
                    audio: [/^vorbis$/, /^opus$/, /^flac$/, /^mp4a/, /^[ae]c-3$/],
                    video: [/^avc/, /^hev/, /^hvc/, /^vp0?[89]/, /^av1$/],
                    text: [/^vtt$/, /^wvtt/, /^stpp/]
                },
                ws = {
                    audio: {
                        mp4: "audio/mp4",
                        m4s: "audio/mp4",
                        m4i: "audio/mp4",
                        m4a: "audio/mp4",
                        ts: "video/mp2t"
                    },
                    video: {
                        mp4: "video/mp4",
                        m4s: "video/mp4",
                        m4i: "video/mp4",
                        m4v: "video/mp4",
                        ts: "video/mp2t"
                    },
                    text: {
                        mp4: "application/mp4",
                        m4s: "application/mp4",
                        m4i: "application/mp4",
                        vtt: "text/vtt",
                        ttml: "application/ttml+xml"
                    }
                };
            cr.prototype.I = function() {
                this.b && (this.i = null, this.update().then(function() {
                    Mr(this, this.c)
                }.bind(this)).catch(function(t) {
                    this.b && (t.severity = 1, this.b.onError(t), Mr(this, 0))
                }.bind(this)))
            };
            var _s = {
                "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed": function(t) {
                    if ("SAMPLE-AES-CENC" != Ir(t, "METHOD")) return null;
                    var e = Ir(t, "URI"),
                        e = ur.parse(e),
                        e = z("com.widevine.alpha", [{
                            initDataType: "cenc",
                            initData: e = new Uint8Array(e.data)
                        }]);
                    return (t = Xn(t, "KEYID")) && (e.keyIds = [t.substr(2).toLowerCase()]), e
                }
            };
            vs.m3u8 = cr, ms["application/x-mpegurl"] = cr, ms["application/vnd.apple.mpegurl"] = cr, (Ua = Dr.prototype).o = function() {
                var e = this.b.o();
                return this.b = null, null != this.f && (t.clearInterval(this.f), this.f = null), null != this.j && (t.clearInterval(this.j), this.j = null), this.D = this.I = this.l = this.c = this.a = null, e
            }, Ua.xb = function() {
                return this.g
            }, Ua.Fb = function() {
                this.m = !0, this.mc()
            }, Ua.Ad = function() {
                var t = this.h || 0 > this.g ? 0 : this.g;
                this.a.playbackRate && this.a.playbackRate != t && Fr(this, this.a.playbackRate)
            }, Ua.kc = function() {
                var t = Ur(this);
                .001 > Math.abs(this.a.currentTime - t) ? (L(this.b, this.a, "seeking", this.nc.bind(this)), L(this.b, this.a, "playing", this.lc.bind(this))) : (U(this.b, this.a, "seeking", this.Cd.bind(this)), this.a.currentTime = t)
            }, Ua.Cd = function() {
                L(this.b, this.a, "seeking", this.nc.bind(this)), L(this.b, this.a, "playing", this.lc.bind(this))
            }, Ua.mc = function() {
                if (this.a.readyState) {
                    this.a.readyState != this.C && (this.i = !1, this.C = this.a.readyState);
                    var t = this.l.smallGapLimit,
                        e = this.a.currentTime,
                        n = this.a.buffered;
                    if (e < this.c.presentationTimeline.ia()) n = Hr(this, e), Br(this, e, n);
                    else {
                        t: {
                            if (n && n.length && !(1 == n.length && 1e-6 > n.end(0) - n.start(0))) {
                                var r = .1;
                                /(Edge\/|Trident\/|Tizen)/.test(navigator.userAgent) && (r = .5);
                                for (var i = 0; i < n.length; i++)
                                    if (n.start(i) > e && (!i || n.end(i - 1) - e <= r)) {
                                        r = i;
                                        break t
                                    }
                            }
                            r = null
                        }
                        if (null == r) {
                            if (3 > this.a.readyState && 0 < this.a.playbackRate)
                                if (this.w != e) this.w = e, this.O = Date.now(), this.s = !1;
                                else if (!this.s && this.O < Date.now() - 1e3)
                                for (r = 0; r < n.length; r++)
                                    if (e >= n.start(r) && e < n.end(r) - .5) {
                                        this.a.currentTime += .1, this.w = this.a.currentTime, this.s = !0;
                                        break
                                    }
                        } else if ((r || this.m) && !((i = n.start(r)) >= this.c.presentationTimeline.kb())) {
                            var o = i - e,
                                a = !1;
                            (t = o <= t) || this.i || (this.i = !0, o = new le("largegap", {
                                currentTime: e,
                                gapSize: o
                            }), o.cancelable = !0, this.D(o), this.l.jumpLargeGaps && !o.defaultPrevented && (a = !0)), (t || a) && (r && n.end(r - 1), Br(this, e, i))
                        }
                    }
                }
            }, Ua.nc = function() {
                this.m = !1;
                var t = this.a.currentTime,
                    e = Hr(this, t);
                .001 < Math.abs(e - t) ? Br(this, t, e) : (this.i = !1, this.I())
            }, Ua.lc = function() {
                var t = this.a.currentTime,
                    e = Hr(this, t);
                .001 < Math.abs(e - t) && Br(this, t, e)
            }, qr.prototype.o = function() {
                var t = this.j ? this.j.o() : Promise.resolve();
                return this.j = null, Kr(this), this.C = this.h = this.l = this.w = this.g = this.B = this.a = null, this.c = [], t
            }, qr.prototype.s = function(t) {
                if (!this.c.some(function(e) {
                        return e.info.schemeIdUri == t.schemeIdUri && e.info.startTime == t.startTime && e.info.endTime == t.endTime
                    })) {
                    var e = {
                        info: t,
                        status: 1
                    };
                    this.c.push(e);
                    var n = new le("timelineregionadded", {
                        detail: Vr(t)
                    });
                    this.h(n), this.m(!0, e)
                }
            }, qr.prototype.m = function(t, e) {
                var n = e.info.startTime > this.a.currentTime ? 1 : e.info.endTime < this.a.currentTime ? 3 : 2,
                    r = 2 == e.status,
                    i = 2 == n;
                n != e.status && ((!t || r || i) && (r || this.h(new le("timelineregionenter", {
                    detail: Vr(e.info)
                })), i || this.h(new le("timelineregionexit", {
                    detail: Vr(e.info)
                }))), e.status = n)
            }, qr.prototype.D = function() {
                this.f = null, Wr(this), (t = ae(this.g, this.a.currentTime)) != this.i && (-1 != this.i && this.C(), this.i = t);
                var t = Ot(this.a.buffered, this.a.currentTime),
                    e = Pt(this.a.buffered),
                    n = this.g.presentationTimeline,
                    r = n.va(),
                    i = "ended" == this.B.readyState,
                    e = n.R() && e >= r || this.a.ended || i;
                this.b ? (n = 1 * Math.max(this.g.minBufferTime || 0, this.w.rebufferingGoal), (e || t >= n) && 0 != this.b && (this.b = !1, this.l(!1))) : !e && .5 > t && 1 != this.b && (this.b = !0, this.l(!0)), this.c.forEach(this.m.bind(this, !1))
            }, (Ua = Yr.prototype).o = function() {
                for (var t in this.c) bi(this.c[t]);
                return this.h = this.c = this.j = this.g = this.m = this.b = this.a = null, this.f = !0, Promise.resolve()
            }, Ua.configure = function(t) {
                this.h = t, this.w = new b({
                    maxAttempts: Math.max(t.retryParameters.maxAttempts, 2),
                    baseDelay: t.retryParameters.baseDelay,
                    backoffFactor: t.retryParameters.backoffFactor,
                    fuzzFactor: t.retryParameters.fuzzFactor,
                    timeout: 0
                }, !0)
            }, Ua.init = function() {
                var t = this.a.gc(this.b.periods[ae(this.b, Lr(this.a.Sa))]);
                return t.variant || t.text ? ni(this, t).then(function() {
                    this.a && this.a.sd && this.a.sd()
                }.bind(this)) : Promise.reject(new u(2, 5, 5005))
            }, Ua.xe = function(t) {
                if (!this.f && !t.ya && null != t.qa && !t.ta)
                    if (t.qa = null, t.ra) yi(this, t, t.sb);
                    else {
                        try {
                            var e = ai(this, t);
                            null != e && (gi(this, t, e), t.Pa = !1)
                        } catch (t) {
                            return void wi(this, t)
                        }
                        e = V(this.c), di(this, t), e.every(function(t) {
                            return t.endOfStream
                        }) && this.a.M.endOfStream().then(function() {
                            this.b.presentationTimeline.ea(this.a.M.Y())
                        }.bind(this))
                    }
            }, Ua.Nd = function(t, e, n) {
                var r = n.u.Ib(),
                    i = n.u.Ib(),
                    o = n.u.F(),
                    a = n.u.F(),
                    s = n.u.F(),
                    u = n.u.F();
                n = n.u.Ja(n.u.L.byteLength - n.u.v), t = t.startTime + e.startTime + a / o, "urn:mpeg:dash:event:2012" == r ? this.a.td() : this.a.onEvent(new le("emsg", {
                    detail: {
                        startTime: t,
                        endTime: t + s / o,
                        schemeIdUri: r,
                        value: i,
                        timescale: o,
                        presentationTimeDelta: a,
                        eventDuration: s,
                        id: u,
                        messageData: n
                    }
                }))
            }, e("shaka.net.HttpPlugin", _i), Ka.http = _i, Ka.https = _i, (Ua = Ei.prototype).init = function(t, e) {
                return Oi(this, t, e).then(function() {
                    var e = Object.keys(t);
                    return Promise.all(e.map(function(t) {
                        return Pi(this, t).then(function(e) {
                            this.c[t] = e
                        }.bind(this))
                    }.bind(this)))
                }.bind(this))
            }, Ua.o = function() {
                return Promise.all(this.b.map(function(t) {
                    try {
                        t.transaction.abort()
                    } catch (t) {}
                    return t.N.catch(C)
                })).then(function() {
                    this.a && (this.a.close(), this.a = null)
                }.bind(this))
            }, Ua.get = function(t, e) {
                var n;
                return Ci(this, t, "readonly", function(t) {
                    n = t.get(e)
                }).then(function() {
                    return n.result
                })
            }, Ua.forEach = function(t, e) {
                return Ci(this, t, "readonly", function(t) {
                    t.openCursor().onsuccess = function(t) {
                        (t = t.target.result) && (e(t.value), t.continue())
                    }
                })
            }, Ua.remove = function(t, e) {
                return Ci(this, t, "readwrite", function(t) {
                    t.delete(e)
                })
            };
            var Es = {
                manifest: "key",
                segment: "key"
            };
            ji.prototype.o = function() {
                var t = this.j,
                    e = this.l,
                    n = this.i || Promise.resolve();
                return e.length && (n = n.then(function() {
                    return Si(t, e)
                })), this.b = {}, this.l = [], this.i = this.a = this.w = this.s = this.j = this.m = null, n
            }, (Ua = Hi.prototype).configure = function() {}, Ua.start = function(t) {
                var e = /^offline:([0-9]+)$/.exec(t);
                if (!e) return Promise.reject(new u(2, 1, 9004, t));
                var n = Number(e[1]),
                    r = Di();
                return this.a = n, r ? r.init(Es).then(function() {
                    return r.get("manifest", n)
                }).then(function(t) {
                    if (!t) throw new u(2, 9, 9003, n);
                    return Bi(t)
                }).then(function(t) {
                    return r.o().then(function() {
                        return t
                    })
                }, function(t) {
                    return r.o().then(function() {
                        throw t
                    })
                }) : Promise.reject(new u(2, 9, 9e3))
            }, Ua.stop = function() {
                return Promise.resolve()
            }, Ua.update = function() {}, Ua.onExpirationUpdated = function(t, e) {
                var n = Di();
                n.init(Es).then(function() {
                    return n.get("manifest", this.a)
                }.bind(this)).then(function(r) {
                    if (r && !(0 > r.sessionIds.indexOf(t)) && (void 0 == r.expiration || r.expiration > e)) return r.expiration = e, Ti(n, "manifest", r)
                }).catch(function() {}).then(function() {
                    return n.o()
                })
            }, ms["application/x-offline-manifest"] = Hi, e("shaka.offline.OfflineScheme", zi), Ka.offline = zi, e("shaka.text.SimpleTextDisplayer", qi), qi.prototype.remove = function(t, e) {
                return !!this.a && (Wi(this, function(n) {
                    return !(n.startTime >= e || n.endTime <= t)
                }), !0)
            }, qi.prototype.remove = qi.prototype.remove, qi.prototype.append = function(t) {
                for (var e = [], n = 0; n < t.length; n++) {
                    var r = Vi(t[n]);
                    r && e.push(r)
                }
                e.slice().sort(function(t, n) {
                    return t.startTime != n.startTime ? t.startTime - n.startTime : t.endTime != n.endTime ? t.endTime - n.startTime : e.indexOf(n) - e.indexOf(t)
                }).forEach(function(t) {
                    this.a.addCue(t)
                }.bind(this))
            }, qi.prototype.append = qi.prototype.append, qi.prototype.o = function() {
                return this.a && Wi(this, function() {
                    return !0
                }), this.a = null, Promise.resolve()
            }, qi.prototype.destroy = qi.prototype.o, qi.prototype.isTextVisible = function() {
                return "showing" == this.a.mode
            }, qi.prototype.isTextVisible = qi.prototype.isTextVisible, qi.prototype.setTextVisibility = function(t) {
                this.a.mode = t ? "showing" : "hidden"
            }, qi.prototype.setTextVisibility = qi.prototype.setTextVisibility, Ki.prototype.then = function(t) {
                return this.a = this.a.then(t).then(function(t) {
                    return this.b ? (this.g(), Promise.reject(this.h)) : Promise.resolve(t)
                }.bind(this)), this
            }, Ki.prototype.cancel = function(t) {
                return this.c ? Promise.resolve() : (this.b = !0, this.h = t, this.i)
            }, n(Gi), e("shaka.Player", Gi), Gi.prototype.o = function() {
                this.I = !0;
                var t = Promise.resolve();
                return this.D && (t = this.D.cancel(new u(2, 7, 7e3))), t.then(function() {
                    var t = Promise.all([this.Oa, no(this), this.m ? this.m.o() : null, this.s ? this.s.o() : null]);
                    return this.f = null, this.gb = !1, this.c = this.s = this.g = this.m = null, t
                }.bind(this))
            }, Gi.prototype.destroy = Gi.prototype.o, Gi.version = "v2.2.1";
            var Ts = {};
            Gi.registerSupportPlugin = function(t, e) {
                Ts[t] = e
            }, Gi.isBrowserSupported = function() {
                return !!(t.Promise && t.Uint8Array && Array.prototype.forEach && t.MediaSource && MediaSource.isTypeSupported && t.MediaKeys && t.navigator && t.navigator.requestMediaKeySystemAccess && t.MediaKeySystemAccess && t.MediaKeySystemAccess.prototype.getConfiguration)
            }, Gi.probeSupport = function() {
                return Et().then(function(t) {
                    t = {
                        manifest: xn(),
                        media: Mt(),
                        drm: t
                    };
                    for (var e in Ts) t[e] = Ts[e]();
                    return t
                })
            }, Gi.prototype.load = function(t, e, n) {
                var r = this.qb(),
                    i = new Ki;
                this.D = i, this.dispatchEvent(new le("loading"));
                var o = Date.now();
                return Yi(i.then(function() {
                    return r
                }).then(function() {
                    return this.i = {
                        width: NaN,
                        height: NaN,
                        streamBandwidth: NaN,
                        decodedFrames: NaN,
                        droppedFrames: NaN,
                        estimatedBandwidth: NaN,
                        loadLatency: NaN,
                        playTime: 0,
                        bufferingTime: 0,
                        switchHistory: [],
                        stateHistory: []
                    }, L(this.m, this.f, "playing", this.Wa.bind(this)), L(this.m, this.f, "pause", this.Wa.bind(this)), L(this.m, this.f, "ended", this.Wa.bind(this)), this.g = new this.c.abrFactory, Qi(this), this.w = new this.c.textDisplayFactory, this.w.setTextVisibility(this.gb), In(t, this.s, this.c.manifest.retryParameters, n)
                }.bind(this)).then(function(e) {
                    return this.l = new e, this.l.configure(this.c.manifest), e = {
                        networkingEngine: this.s,
                        filterNewPeriod: this.hb.bind(this),
                        filterAllPeriods: this.Qb.bind(this),
                        onTimelineRegionAdded: this.Gd.bind(this),
                        onEvent: this.pb.bind(this),
                        onError: this.La.bind(this)
                    }, 2 < this.l.start.length ? this.l.start(t, this.s, e.filterNewPeriod, e.onError, e.onEvent) : this.l.start(t, e)
                }.bind(this)).then(function(e) {
                    if (e.periods.some(function(t) {
                            return t.variants.some(function(t) {
                                return t.video && t.audio
                            })
                        }) && e.periods.forEach(function(t) {
                            t.variants = t.variants.filter(function(t) {
                                return t.video && t.audio
                            })
                        }), 0 == e.periods.length) throw new u(2, 4, 4014);
                    return this.b = e, this.fb = t, this.j = new st(this.s, this.La.bind(this), this.ne.bind(this), this.me.bind(this)), this.j.configure(this.c.drm), this.j.init(e, !1)
                }.bind(this)).then(function() {
                    this.Qb(this.b.periods), this.$a = Date.now() / 1e3, this.na = this.c.preferredAudioLanguage, this.Xa = this.c.preferredTextLanguage;
                    var t = this.b.presentationTimeline.Y(),
                        e = this.c.playRangeEnd,
                        n = this.c.playRangeStart;
                    return 0 < n && (this.R() || this.b.presentationTimeline.Ac(n)), e < t && (this.R() || this.b.presentationTimeline.ea(e)), Promise.all([ut(this.j, this.f), this.cb])
                }.bind(this)).then(function() {
                    return this.g.chooseStreams ? this.g.init(this.Ae.bind(this)) : this.g.init(this.Fc.bind(this)), this.h = new Dr(this.f, this.b, this.c.streaming, e || this.c.playRangeStart || null, this.oe.bind(this), this.pb.bind(this)), this.B = new qr(this.f, this.O, this.b, this.c.streaming, this.Ec.bind(this), this.pb.bind(this), this.le.bind(this)), this.Ma = new Nt(this.f, this.O, this.w), this.a = new Yr(this.b, {
                        Sa: this.h,
                        M: this.Ma,
                        nd: this.s,
                        gc: this.od.bind(this),
                        fc: this.Mc.bind(this),
                        onError: this.La.bind(this),
                        onEvent: this.pb.bind(this),
                        td: this.ud.bind(this),
                        Fb: this.Dd.bind(this),
                        filterNewPeriod: this.hb.bind(this),
                        filterAllPeriods: this.Qb.bind(this)
                    }), this.a.configure(this.c.streaming), $i(this), this.a.init()
                }.bind(this)).then(function() {
                    if (this.c.streaming.startAtSegmentBoundary) {
                        var t = co(this, Lr(this.h));
                        jr(this.h, t)
                    }
                    this.b.periods.forEach(this.hb.bind(this)), po(this), ho(this);
                    var e = te(t = Gr(this.a), this.na, this.Ya);
                    this.g.setVariants(e), t.variants.some(function(t) {
                        return t.primary
                    }), this.eb.forEach(this.B.s.bind(this.B)), this.eb = [], U(this.m, this.f, "loadeddata", function() {
                        this.i.loadLatency = (Date.now() - o) / 1e3
                    }.bind(this)), this.D = null
                }.bind(this))).catch(function(t) {
                    return this.D == i && (this.D = null, this.dispatchEvent(new le("unloading"))), Promise.reject(t)
                }.bind(this))
            }, Gi.prototype.load = Gi.prototype.load, Gi.prototype.configure = function(t) {
                if (t.abr && t.abr.manager) {
                    var e = t.abr.manager;
                    delete t.abr.manager, t.abrFactory = function() {
                        return e
                    }
                }
                t.streaming && null != t.streaming.infiniteRetriesForLiveStreams && (this.Wb = !!t.streaming.infiniteRetriesForLiveStreams, delete t.streaming.infiniteRetriesForLiveStreams), E(this.c, t, oo(this), io(), ""), Ji(this)
            }, Gi.prototype.configure = Gi.prototype.configure, Gi.prototype.getConfiguration = function() {
                var t = oo(this);
                return E(t, this.c, oo(this), io(), ""), t
            }, Gi.prototype.getConfiguration = Gi.prototype.getConfiguration, Gi.prototype.$d = function() {
                this.c = oo(this), Ji(this)
            }, Gi.prototype.resetConfiguration = Gi.prototype.$d, Gi.prototype.Xc = function() {
                return this.f
            }, Gi.prototype.getMediaElement = Gi.prototype.Xc, Gi.prototype.cc = function() {
                return this.s
            }, Gi.prototype.getNetworkingEngine = Gi.prototype.cc, Gi.prototype.Wc = function() {
                return this.fb
            }, Gi.prototype.getManifestUri = Gi.prototype.Wc, Gi.prototype.R = function() {
                return !!this.b && this.b.presentationTimeline.R()
            }, Gi.prototype.isLive = Gi.prototype.R, Gi.prototype.wa = function() {
                return !!this.b && this.b.presentationTimeline.wa()
            }, Gi.prototype.isInProgress = Gi.prototype.wa, Gi.prototype.hd = function() {
                if (!this.b || !this.b.periods.length) return !1;
                var t = this.b.periods[0].variants;
                return !!t.length && !t[0].video
            }, Gi.prototype.isAudioOnly = Gi.prototype.hd, Gi.prototype.be = function() {
                var t = 0,
                    e = 0;
                return this.b && (e = this.b.presentationTimeline, t = e.ia(), e = e.kb()), {
                    start: t,
                    end: e
                }
            }, Gi.prototype.seekRange = Gi.prototype.be, Gi.prototype.keySystem = function() {
                return this.j ? this.j.keySystem() : ""
            }, Gi.prototype.keySystem = Gi.prototype.keySystem, Gi.prototype.drmInfo = function() {
                return this.j ? this.j.b : null
            }, Gi.prototype.drmInfo = Gi.prototype.drmInfo, Gi.prototype.jb = function() {
                return this.j ? this.j.jb() : 1 / 0
            }, Gi.prototype.getExpiration = Gi.prototype.jb, Gi.prototype.jd = function() {
                return this.Na
            }, Gi.prototype.isBuffering = Gi.prototype.jd, Gi.prototype.qb = function() {
                if (this.I) return Promise.resolve();
                this.dispatchEvent(new le("unloading"));
                var t = Promise.resolve();
                return this.D && (t = this.D.cancel(new u(2, 7, 7e3))), t.then(function() {
                    return this.Oa || (this.Oa = ro(this).then(function() {
                        this.Oa = null
                    }.bind(this))), this.Oa
                }.bind(this))
            }, Gi.prototype.unload = Gi.prototype.qb, Gi.prototype.xb = function() {
                return this.h ? this.h.xb() : 0
            }, Gi.prototype.getPlaybackRate = Gi.prototype.xb, Gi.prototype.Be = function(t) {
                this.h && Fr(this.h, t), this.a && Jr(this.a, 1 != t)
            }, Gi.prototype.trickPlay = Gi.prototype.Be, Gi.prototype.Nc = function() {
                this.h && Fr(this.h, 1), this.a && Jr(this.a, !1)
            }, Gi.prototype.cancelTrickPlay = Gi.prototype.Nc, Gi.prototype.fd = function() {
                if (!this.b) return [];
                var t = ae(this.b, Lr(this.h)),
                    e = this.C[t] || {};
                return $t(this.b.periods[t], e.audio, e.video)
            }, Gi.prototype.getVariantTracks = Gi.prototype.fd, Gi.prototype.ed = function() {
                if (!this.b) return [];
                var t = ae(this.b, Lr(this.h));
                return Xt(this.b.periods[t], (this.C[t] || {}).text).filter(function(t) {
                    return 0 > this.ab.indexOf(t.id)
                }.bind(this))
            }, Gi.prototype.getTextTracks = Gi.prototype.ed, Gi.prototype.fe = function(t) {
                this.a && (t = Qt(Gr(this.a), t)) && (to(this, t, !1), this.ga ? this.fa = t : Zr(this.a, t, !0))
            }, Gi.prototype.selectTextTrack = Gi.prototype.fe, Gi.prototype.ge = function(t, e) {
                if (this.a) {
                    var n = Jt(Gr(this.a), t);
                    n && n.allowedByApplication && n.allowedByKeySystem && (Zi(this, n, !1), so(this, n, e))
                }
            }, Gi.prototype.selectVariantTrack = Gi.prototype.ge, Gi.prototype.Uc = function() {
                return this.a ? Zt(Gr(this.a).variants).map(function(t) {
                    return t.language
                }).filter(k) : []
            }, Gi.prototype.getAudioLanguages = Gi.prototype.Uc, Gi.prototype.dd = function() {
                return this.a ? Gr(this.a).textStreams.map(function(t) {
                    return t.language
                }).filter(k) : []
            }, Gi.prototype.getTextLanguages = Gi.prototype.dd, Gi.prototype.de = function(t, e) {
                if (this.a) {
                    var n = Gr(this.a);
                    this.na = t, this.Ya = e || "", fo(this, n)
                }
            }, Gi.prototype.selectAudioLanguage = Gi.prototype.de, Gi.prototype.ee = function(t, e) {
                if (this.a) {
                    var n = Gr(this.a);
                    this.Xa = t, this.tb = e || "", fo(this, n)
                }
            }, Gi.prototype.selectTextLanguage = Gi.prototype.ee, Gi.prototype.ld = function() {
                return this.w ? this.w.isTextVisible() : this.gb
            }, Gi.prototype.isTextTrackVisible = Gi.prototype.ld, Gi.prototype.je = function(t) {
                this.w ? this.w.setTextVisibility(t) : this.gb = t, mo(this)
            }, Gi.prototype.setTextTrackVisibility = Gi.prototype.je, Gi.prototype.Zc = function() {
                return this.b ? new Date(1e3 * this.b.presentationTimeline.c + 1e3 * this.f.currentTime) : null
            }, Gi.prototype.getPlayheadTimeAsDate = Gi.prototype.Zc, Gi.prototype.bd = function() {
                return this.b ? new Date(1e3 * this.b.presentationTimeline.c) : null
            }, Gi.prototype.getPresentationStartTimeAsDate = Gi.prototype.bd, Gi.prototype.getStats = function() {
                uo(this), this.Wa();
                var t = null,
                    e = null,
                    n = (n = this.f) && n.getVideoPlaybackQuality ? n.getVideoPlaybackQuality() : {};
                return this.h && this.b && (t = ae(this.b, Lr(this.h)), e = this.C[t], e = oe(e.audio, e.video, this.b.periods[t].variants), t = e.video || {}), t || (t = {}), e || (e = {}), {
                    width: t.width || 0,
                    height: t.height || 0,
                    streamBandwidth: e.bandwidth || 0,
                    decodedFrames: Number(n.totalVideoFrames),
                    droppedFrames: Number(n.droppedVideoFrames),
                    estimatedBandwidth: this.g ? this.g.getBandwidthEstimate() : NaN,
                    loadLatency: this.i.loadLatency,
                    playTime: this.i.playTime,
                    bufferingTime: this.i.bufferingTime,
                    switchHistory: T(this.i.switchHistory),
                    stateHistory: T(this.i.stateHistory)
                }
            }, Gi.prototype.getStats = Gi.prototype.getStats, Gi.prototype.addTextTrack = function(t, e, n, r, i, o) {
                if (!this.a) return Promise.reject();
                for (var a, s = Gr(this.a), u = 0; u < this.b.periods.length; u++)
                    if (this.b.periods[u] == s) {
                        if (u == this.b.periods.length - 1) {
                            if (a = this.b.presentationTimeline.Y() - s.startTime, 1 / 0 == a) return Promise.reject()
                        } else a = this.b.periods[u + 1].startTime - s.startTime;
                        break
                    }
                var c = {
                    id: this.Jc++,
                    createSegmentIndex: Promise.resolve.bind(Promise),
                    findSegmentPosition: function() {
                        return 1
                    },
                    getSegmentReference: function(e) {
                        return 1 != e ? null : new $e(1, 0, a, function() {
                            return [t]
                        }, 0, null)
                    },
                    initSegmentReference: null,
                    presentationTimeOffset: 0,
                    mimeType: r,
                    codecs: i || "",
                    kind: n,
                    encrypted: !1,
                    keyId: null,
                    language: e,
                    label: o || null,
                    type: "text",
                    primary: !1,
                    trickModeVideo: null,
                    containsEmsgBoxes: !1,
                    roles: [],
                    channelsCount: null
                };
                return this.ab.push(c.id), s.textStreams.push(c), ni(this.a, {
                    text: c
                }).then(function() {
                    if (!this.I) {
                        var t = this.b.periods.indexOf(s),
                            r = Xr(this.a);
                        return r.text && (this.C[t].text = r.text.id), this.ab.splice(this.ab.indexOf(c.id), 1), fo(this, s), po(this), {
                            id: c.id,
                            active: !1,
                            type: "text",
                            bandwidth: 0,
                            language: e,
                            label: o || null,
                            kind: n,
                            width: null,
                            height: null
                        }
                    }
                }.bind(this))
            }, Gi.prototype.addTextTrack = Gi.prototype.addTextTrack, Gi.prototype.Pb = function(t, e) {
                this.bb.width = t, this.bb.height = e
            }, Gi.prototype.setMaxHardwareResolution = Gi.prototype.Pb, Gi.prototype.xc = function() {
                if (this.a) {
                    var t = this.a;
                    if (t.f) t = !1;
                    else if (t.l) t = !1;
                    else {
                        for (var e in t.c) {
                            var n = t.c[e];
                            n.Pa && (n.Pa = !1, gi(t, n, .1))
                        }
                        t = !0
                    }
                } else t = !1;
                return t
            }, Gi.prototype.retryStreaming = Gi.prototype.xc, (Ua = Gi.prototype).Qc = function(t) {
                var e = [1001, 1002, 1003];
                this.R() && this.Wb && 0 <= e.indexOf(t.code) && (t.severity = 1, this.xc())
            }, Ua.Qb = function(t) {
                var e = this.a ? Xr(this.a) : {};
                t.forEach(function(t) {
                    Yt(this.j, e, t)
                }.bind(this));
                var n = 0;
                if (t.forEach(function(t) {
                        0 < Zt(t.variants).length && n++
                    }.bind(this)), !n) throw new u(2, 4, 9009);
                if (n < t.length) throw new u(2, 4, 4011);
                t.forEach(function(t) {
                    if (Kt(t, this.c.restrictions, this.bb) && this.a && Gr(this.a) == t && po(this), 1 > Zt(t.variants).length) throw new u(2, 4, 4012)
                }.bind(this))
            }, Ua.hb = function(t) {
                var e = this.a ? Xr(this.a) : {};
                if (Yt(this.j, e, t), e = 0 < Zt(t.variants).length, Kt(t, this.c.restrictions, this.bb) && this.a && Gr(this.a) == t && po(this), t = 1 > Zt(t.variants).length, !e) throw new u(2, 4, 4011);
                if (t) throw new u(2, 4, 4012)
            }, Ua.pe = function(t, e) {
                this.g && this.g.segmentDownloaded(t, e)
            }, Ua.Ec = function(t) {
                if (uo(this), this.Na = t, this.Wa(), this.h) {
                    var e = this.h;
                    t != e.h && (e.h = t, Fr(e, e.g))
                }
                this.dispatchEvent(new le("buffering", {
                    buffering: t
                }))
            }, Ua.le = function() {
                po(this)
            }, Ua.Wa = function() {
                if (!this.I) {
                    var t = this.Na ? "buffering" : this.f.ended ? "ended" : this.f.paused ? "paused" : "playing",
                        e = Date.now() / 1e3;
                    if (this.i.stateHistory.length) {
                        var n = this.i.stateHistory[this.i.stateHistory.length - 1];
                        if (n.duration = e - n.timestamp, t == n.state) return
                    }
                    this.i.stateHistory.push({
                        timestamp: e,
                        state: t,
                        duration: 0
                    })
                }
            }, Ua.oe = function() {
                if (this.B) {
                    var t = this.B;
                    t.c.forEach(t.m.bind(t, !0))
                }
                this.a && ti(this.a)
            }, Ua.od = function(t) {
                this.ga = !0, this.g.disable();
                var e = {
                        audio: !1,
                        text: !1
                    },
                    n = te(t, this.na, this.Ya, e);
                return t = ee(t, this.Xa, this.tb, e), n = lo(this, n), t = t[0] || null, this.fa = this.sa = null, n && Zi(this, n, !0), t && (to(this, t, !0), !$r(this.a) && n && n.audio && e.text && t.language != n.audio.language && (this.w.setTextVisibility(!0), mo(this))), {
                    variant: n,
                    text: t
                }
            }, Ua.Mc = function() {
                this.ga = !1, this.c.abr.enabled && this.g.enable(), this.sa && (Qr(this.a, this.sa, this.Vb), this.sa = null), this.fa && (Zr(this.a, this.fa, !0), this.fa = null)
            }, Ua.ud = function() {
                this.l && this.l.update && this.l.update()
            }, Ua.Dd = function() {
                this.h && this.h.Fb()
            }, Ua.Fc = function(t, e) {
                Zi(this, t, !0), this.a && (Qr(this.a, t, e || !1), ho(this))
            }, Ua.Ae = function(t, e) {
                if (this.a) {
                    var n = $r(this.a);
                    (n = ie(t.audio, t.video, n ? n.variants : [])) && this.Fc(n, e)
                }
            }, Ua.La = function(t) {
                if (!this.I) {
                    var e = new le("error", {
                        detail: t
                    });
                    this.dispatchEvent(e), e.defaultPrevented && (t.handled = !0)
                }
            }, Ua.Gd = function(t) {
                this.B ? this.B.s(t) : this.eb.push(t)
            }, Ua.pb = function(t) {
                this.dispatchEvent(t)
            }, Ua.Hd = function() {
                if (this.f.error) {
                    var t = this.f.error.code;
                    if (1 != t) {
                        var e = this.f.error.msExtendedCode;
                        e && (0 > e && (e += Math.pow(2, 32)), e = e.toString(16)), this.La(new u(2, 3, 3016, t, e, this.f.error.message))
                    }
                }
            }, Ua.ne = function(t) {
                var e = ["output-restricted", "internal-error"],
                    n = Gr(this.a),
                    r = !1,
                    i = 1 == Object.keys(t).length && "00" == Object.keys(t)[0];
                n.variants.forEach(function(n) {
                    var o = [];
                    n.audio && o.push(n.audio), n.video && o.push(n.video), o.forEach(function(o) {
                        var a = n.allowedByKeySystem;
                        o.keyId && (o = t[i ? "00" : o.keyId], n.allowedByKeySystem = !!o && 0 > e.indexOf(o)), a != n.allowedByKeySystem && (r = !0)
                    })
                });
                var o = Xr(this.a);
                (o = ie(o.audio, o.video, n.variants)) && !o.allowedByKeySystem && fo(this, n), r && po(this)
            }, Ua.me = function(t, e) {
                this.l && this.l.onExpirationUpdated && this.l.onExpirationUpdated(t, e), this.dispatchEvent(new le("expirationupdated"))
            }, e("shaka.offline.Storage", vo), vo.support = yo, vo.prototype.o = function() {
                var t = this.a,
                    e = this.i ? this.i.o().catch(function() {}).then(function() {
                        if (t) return t.o()
                    }) : Promise.resolve();
                return this.b = this.g = this.i = this.a = null, e
            }, vo.prototype.destroy = vo.prototype.o, vo.prototype.configure = function(t) {
                E(this.b, t, bo(this), {}, "")
            }, vo.prototype.configure = vo.prototype.configure, vo.prototype.ye = function(t, e, n) {
                function r(t) {
                    o = t
                }
                if (this.s) return Promise.reject(new u(2, 9, 9006));
                this.s = !0;
                var i, o = null;
                return wo(this).then(function() {
                    return So(this), go(this, t, r, n)
                }.bind(this)).then(function(n) {
                    if (So(this), this.f = n.manifest, this.c = n.Rc, this.f.presentationTimeline.R() || this.f.presentationTimeline.wa()) throw new u(2, 9, 9005, t);
                    this.m(this.f.periods), this.h = this.a.c.manifest++, this.l = 0, n = e || {};
                    var r = this.f.periods.map(this.C.bind(this)),
                        o = this.c.b,
                        a = ft(this.c);
                    if (o) {
                        if (!a.length) throw new u(2, 9, 9007, t);
                        o.initData = []
                    }
                    return i = {
                        key: this.h,
                        originalManifestUri: t,
                        duration: this.l,
                        size: 0,
                        expiration: this.c.jb(),
                        periods: r,
                        sessionIds: this.b.usePersistentLicense ? a : [],
                        drmInfo: o,
                        appMetadata: n
                    }, Ui(this.i, i)
                }.bind(this)).then(function() {
                    if (So(this), o) throw o;
                    return _o(this)
                }.bind(this)).then(function() {
                    return xi(i)
                }.bind(this)).catch(function(t) {
                    return _o(this).catch(C).then(function() {
                        throw t
                    })
                }.bind(this))
            }, vo.prototype.store = vo.prototype.ye, vo.prototype.remove = function(t) {
                function e(t) {
                    6013 != t.code && (a = t)
                }
                var n = t.offlineUri,
                    r = /^offline:([0-9]+)$/.exec(n);
                if (!r) return Promise.reject(new u(2, 9, 9004, n));
                var i, o, a = null,
                    s = Number(r[1]);
                return wo(this).then(function() {
                    return So(this), this.a.get("manifest", s)
                }.bind(this)).then(function(t) {
                    if (So(this), !t) throw new u(2, 9, 9003, n);
                    return i = t, t = Bi(i), (o = new st(this.g.s, e, function() {}, function() {})).configure(this.g.getConfiguration().drm), o.init(t, this.b.usePersistentLicense || !1)
                }.bind(this)).then(function() {
                    return ct(o, i.sessionIds)
                }.bind(this)).then(function() {
                    return o.o()
                }.bind(this)).then(function() {
                    if (So(this), a) throw a;
                    var e = i.periods.map(function(t) {
                            return t.streams.map(function(t) {
                                var e = t.segments.map(function(t) {
                                    return t = /^offline:[0-9]+\/[0-9]+\/([0-9]+)$/.exec(t.uri), Number(t[1])
                                });
                                return t.initSegmentUri && (t = /^offline:[0-9]+\/[0-9]+\/([0-9]+)$/.exec(t.initSegmentUri), e.push(Number(t[1]))), e
                            }).reduce(P, [])
                        }).reduce(P, []),
                        n = 0,
                        r = e.length,
                        o = this.b.progressCallback;
                    return Si(this.a, e, function() {
                        o(t, ++n / r)
                    })
                }.bind(this)).then(function() {
                    return So(this), this.b.progressCallback(t, 1), this.a.remove("manifest", s)
                }.bind(this))
            }, vo.prototype.remove = vo.prototype.remove, vo.prototype.list = function() {
                var t = [];
                return wo(this).then(function() {
                    return So(this), this.a.forEach("manifest", function(e) {
                        t.push(xi(e))
                    })
                }.bind(this)).then(function() {
                    return t
                })
            }, vo.prototype.list = vo.prototype.list, vo.prototype.B = function(t) {
                for (var e, n = [], r = Vt(this.g.getConfiguration().preferredAudioLanguage), i = [0, Xa, Ja], o = t.filter(function(t) {
                        return "variant" == t.type
                    }), i = i.map(function(t) {
                        return o.filter(function(e) {
                            return e = Vt(e.language), qt(t, r, e)
                        })
                    }), a = 0; a < i.length; a++)
                    if (i[a].length) {
                        e = i[a];
                        break
                    }
                e || (i = o.filter(function(t) {
                    return t.primary
                })).length && (e = i), e || (e = o, o.map(function(t) {
                    return t.language
                }).filter(k));
                var s = e.filter(function(t) {
                    return t.height && 480 >= t.height
                });
                return s.length && (s.sort(function(t, e) {
                    return e.height - t.height
                }), e = s.filter(function(t) {
                    return t.height == s[0].height
                })), e.sort(function(t, e) {
                    return t.bandwidth - e.bandwidth
                }), e.length && n.push(e[Math.floor(e.length / 2)]), n.push.apply(n, t.filter(function(t) {
                    return "text" == t.type
                })), n
            }, vo.prototype.m = function(t) {
                t.forEach(this.w.bind(this))
            }, vo.prototype.w = function(t) {
                var e = {};
                if (this.j) {
                    var n = this.j.filter(function(t) {
                            return "variant" == t.type
                        }),
                        r = null;
                    n.length && (r = Jt(t, n[0])), r && (r.video && (e.video = r.video), r.audio && (e.audio = r.audio))
                }
                Yt(this.c, e, t), Kt(t, this.g.getConfiguration().restrictions, {
                    width: 1 / 0,
                    height: 1 / 0
                })
            }, vo.prototype.C = function(t) {
                var e, n, r = $t(t, null, null),
                    i = Xt(t, null),
                    r = this.b.trackSelectionCallback(r.concat(i));
                for (this.j || (this.j = r, this.m(this.f.periods)), i = r.length - 1; 0 < i; --i) {
                    var o = !1;
                    for (n = i - 1; 0 <= n; --n)
                        if (r[i].type == r[n].type && r[i].kind == r[n].kind && r[i].language == r[n].language) {
                            o = !0;
                            break
                        }
                    if (o) break
                }
                for (o = [], i = 0; i < r.length; i++)(e = Jt(t, r[i])) ? (e.audio && ((n = o.filter(function(t) {
                    return t.id == e.audio.id
                })[0]) ? n.variantIds.push(e.id) : (n = e.video ? e.bandwidth / 2 : e.bandwidth, o.push(To(this, t, e.audio, n, e.id)))), e.video && ((n = o.filter(function(t) {
                    return t.id == e.video.id
                })[0]) ? n.variantIds.push(e.id) : (n = e.audio ? e.bandwidth / 2 : e.bandwidth, o.push(To(this, t, e.video, n, e.id))))) : o.push(To(this, t, Qt(t, r[i]), 0));
                return {
                    startTime: t.startTime,
                    streams: o
                }
            }, Ts.offline = yo, e("shaka.polyfill.installAll", function() {
                for (var t = 0; t < Ss.length; ++t) Ss[t]()
            });
            var Ss = [];
            e("shaka.polyfill.register", Po), Po(function() {
                if (t.Document) {
                    var e = Element.prototype;
                    e.requestFullscreen = e.requestFullscreen || e.mozRequestFullScreen || e.msRequestFullscreen || e.webkitRequestFullscreen, (e = Document.prototype).exitFullscreen = e.exitFullscreen || e.mozCancelFullScreen || e.msExitFullscreen || e.webkitExitFullscreen, "fullscreenElement" in document || (Object.defineProperty(document, "fullscreenElement", {
                        get: function() {
                            return document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement
                        }
                    }), Object.defineProperty(document, "fullscreenEnabled", {
                        get: function() {
                            return document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitFullscreenEnabled
                        }
                    })), document.addEventListener("webkitfullscreenchange", Co), document.addEventListener("webkitfullscreenerror", Co), document.addEventListener("mozfullscreenchange", Co), document.addEventListener("mozfullscreenerror", Co), document.addEventListener("MSFullscreenChange", Co), document.addEventListener("MSFullscreenError", Co)
                }
            }), Po(function() {
                var e = navigator.userAgent;
                e && 0 <= e.indexOf("CrKey") && delete t.indexedDB
            });
            var Ps;
            Po(function() {
                0 > navigator.userAgent.indexOf("Trident/") || HTMLInputElement.prototype.addEventListener == Oo || (Ps = HTMLInputElement.prototype.addEventListener, HTMLInputElement.prototype.addEventListener = Oo)
            }), Po(function() {
                if (4503599627370497 != Math.round(4503599627370497)) {
                    var t = Math.round;
                    Math.round = function(e) {
                        var n = e;
                        return 4503599627370496 >= e && (n = t(e)), n
                    }
                }
            }), ko.prototype.c = function(t) {
                if (!(1 < t.version)) {
                    var e = ot(t.u.Ja(16)),
                        n = [];
                    if (0 < t.version)
                        for (var r = t.u.F(), i = 0; i < r; ++i) {
                            var o = ot(t.u.Ja(16));
                            n.push(o)
                        }
                    r = t.u.F(), t.u.J(r), this.b.push.apply(this.b, n), this.f.push(e), this.a.push({
                        start: t.start,
                        end: t.start + t.size - 1
                    })
                }
            }, Io.prototype.createMediaKeys = function() {
                var t = new No(this.keySystem);
                return Promise.resolve(t)
            }, Io.prototype.getConfiguration = function() {
                return this.a
            }, No.prototype.createSession = function(t) {
                if ("temporary" != (t || "temporary")) throw new TypeError("Session type " + t + " is unsupported on this platform.");
                return new Ro(this.a)
            }, No.prototype.setServerCertificate = function() {
                return Promise.resolve(!1)
            }, n(Ro), (Ua = Ro.prototype).generateRequest = function(t, e) {
                this.a = new g;
                try {
                    this.c = this.g.createSession("video/mp4", new Uint8Array(e), null), L(this.f, this.c, "mskeymessage", this.yd.bind(this)), L(this.f, this.c, "mskeyadded", this.wd.bind(this)), L(this.f, this.c, "mskeyerror", this.xd.bind(this)), Lo(this, "status-pending")
                } catch (t) {
                    this.a.reject(t)
                }
                return this.a
            }, Ua.load = function() {
                return Promise.reject(Error("MediaKeySession.load not yet supported"))
            }, Ua.update = function(t) {
                this.b = new g;
                try {
                    this.c.update(new Uint8Array(t))
                } catch (t) {
                    this.b.reject(t)
                }
                return this.b
            }, Ua.close = function() {
                try {
                    this.c.close(), this.closed.resolve(), F(this.f)
                } catch (t) {
                    this.closed.reject(t)
                }
                return this.closed
            }, Ua.remove = function() {
                return Promise.reject(Error("MediaKeySession.remove is only applicable for persistent licenses, which are not supported on this platform"))
            }, Ua.yd = function(t) {
                this.a && (this.a.resolve(), this.a = null), this.dispatchEvent(new le("message", {
                    messageType: void 0 == this.keyStatuses.a ? "licenserequest" : "licenserenewal",
                    message: t.message.buffer
                }))
            }, Ua.wd = function() {
                this.a ? (Lo(this, "usable"), this.a.resolve(), this.a = null) : this.b && (Lo(this, "usable"), this.b.resolve(), this.b = null)
            }, Ua.xd = function() {
                var t = Error("EME PatchedMediaKeysMs key error");
                if (t.errorCode = this.c.error, this.a) this.a.reject(t), this.a = null;
                else if (this.b) this.b.reject(t), this.b = null;
                else switch (this.c.error.code) {
                    case MSMediaKeyError.MS_MEDIA_KEYERR_OUTPUT:
                    case MSMediaKeyError.MS_MEDIA_KEYERR_HARDWARECHANGE:
                        Lo(this, "output-not-allowed");
                    default:
                        Lo(this, "internal-error")
                }
            };
            var Cs;
            (Ua = Uo.prototype).forEach = function(t) {
                this.a && t(this.a, Cs)
            }, Ua.get = function(t) {
                if (this.has(t)) return this.a
            }, Ua.has = function(t) {
                var e = Cs;
                return !(!this.a || !at(new Uint8Array(t), new Uint8Array(e)))
            }, Ua.entries = function() {}, Ua.keys = function() {}, Ua.values = function() {}, Bo.prototype.createSession = function() {}, Bo.prototype.setServerCertificate = function() {}, zo.prototype.getConfiguration = function() {}, zo.prototype.createMediaKeys = function() {};
            var Os = "";
            Yo.prototype.createMediaKeys = function() {
                var t = new Go(this.a);
                return Promise.resolve(t)
            }, Yo.prototype.getConfiguration = function() {
                return this.b
            }, (Ua = Go.prototype).createSession = function(t) {
                var e = t || "temporary";
                if ("temporary" != e && "persistent-license" != e) throw new TypeError("Session type " + t + " is unsupported on this platform.");
                return (t = this.b || document.createElement("video")).src || (t.src = "about:blank"), e = new Jo(t, this.g, e), this.c.push(e), e
            }, Ua.setServerCertificate = function() {
                return Promise.resolve(!1)
            }, Ua.Ld = function(t) {
                var e = document.createEvent("CustomEvent");
                e.initCustomEvent("encrypted", !1, !1, null), e.initDataType = "webm", e.initData = t.initData, this.b.dispatchEvent(e)
            }, Ua.Kd = function(t) {
                var e = Xo(this, t.sessionId);
                e && (t = new le("message", {
                    messageType: void 0 == e.keyStatuses.a ? "licenserequest" : "licenserenewal",
                    message: t.message
                }), e.b && (e.b.resolve(), e.b = null), e.dispatchEvent(t))
            }, Ua.Id = function(t) {
                (t = Xo(this, t.sessionId)) && (Zo(t, "usable"), t.a && t.a.resolve(), t.a = null)
            }, Ua.Jd = function(t) {
                var e = Xo(this, t.sessionId);
                if (e) {
                    var n = Error("EME v0.1b key error");
                    n.errorCode = t.errorCode, n.errorCode.systemCode = t.systemCode, !t.sessionId && e.b ? (n.method = "generateRequest", 45 == t.systemCode && (n.message = "Unsupported session type."), e.b.reject(n), e.b = null) : t.sessionId && e.a ? (n.method = "update", e.a.reject(n), e.a = null) : (n = t.systemCode, t.errorCode.code == MediaKeyError.MEDIA_KEYERR_OUTPUT ? Zo(e, "output-restricted") : 1 == n ? Zo(e, "expired") : Zo(e, "internal-error"))
                }
            }, n(Jo), (Ua = Jo.prototype).Rb = function(t, e) {
                if (this.a) this.a.then(this.Rb.bind(this, t, e)).catch(this.Rb.bind(this, t, e));
                else {
                    if (this.a = t, "webkit-org.w3.clearkey" == this.c) {
                        var n = $(e),
                            r = JSON.parse(n);
                        "oct" != r.keys[0].kty && (this.a.reject(Error("Response is not a valid JSON Web Key Set.")), this.a = null), n = rt(r.keys[0].k), r = rt(r.keys[0].kid)
                    } else n = new Uint8Array(e), r = null;
                    var i = Vo("addKey");
                    try {
                        this.f[i](this.c, n, r, this.sessionId)
                    } catch (t) {
                        this.a.reject(t), this.a = null
                    }
                }
            }, Ua.generateRequest = function(t, e) {
                return Qo(this, e, null)
            }, Ua.load = function(t) {
                return "persistent-license" == this.g ? Qo(this, null, t) : Promise.reject(Error("Not a persistent session."))
            }, Ua.update = function(t) {
                var e = new g;
                return this.Rb(e, t), e
            }, Ua.close = function() {
                if ("persistent-license" != this.g) {
                    if (!this.sessionId) return this.closed.reject(Error("The session is not callable.")), this.closed;
                    var t = Vo("cancelKeyRequest");
                    try {
                        this.f[t](this.c, this.sessionId)
                    } catch (t) {}
                }
                return this.closed.resolve(), this.closed
            }, Ua.remove = function() {
                return "persistent-license" != this.g ? Promise.reject(Error("Not a persistent session.")) : this.close()
            };
            var ks;
            (Ua = ta.prototype).forEach = function(t) {
                this.a && t(this.a, ks)
            }, Ua.get = function(t) {
                if (this.has(t)) return this.a
            }, Ua.has = function(t) {
                var e = ks;
                return !(!this.a || !at(new Uint8Array(t), new Uint8Array(e)))
            }, Ua.entries = function() {}, Ua.keys = function() {}, Ua.values = function() {}, Po(function() {
                !t.HTMLVideoElement || navigator.requestMediaKeySystemAccess && MediaKeySystemAccess.prototype.getConfiguration || (HTMLMediaElement.prototype.webkitGenerateKeyRequest ? qo("webkit") : HTMLMediaElement.prototype.generateKeyRequest ? qo("") : t.MSMediaKeys ? (Cs = new Uint8Array([0]).buffer, delete HTMLMediaElement.prototype.mediaKeys, HTMLMediaElement.prototype.mediaKeys = null, HTMLMediaElement.prototype.setMediaKeys = Ao, t.MediaKeys = No, t.MediaKeySystemAccess = Io, navigator.requestMediaKeySystemAccess = xo) : (navigator.requestMediaKeySystemAccess = Fo, delete HTMLMediaElement.prototype.mediaKeys, HTMLMediaElement.prototype.mediaKeys = null, HTMLMediaElement.prototype.setMediaKeys = Ho, t.MediaKeys = Bo, t.MediaKeySystemAccess = zo))
            }), Po(function() {
                if (t.MediaSource)
                    if (t.cast && cast.__platform__ && cast.__platform__.canDisplayType) oa();
                    else if (navigator.vendor && 0 <= navigator.vendor.indexOf("Apple")) {
                    var e = navigator.appVersion;
                    0 <= e.indexOf("Version/8") ? t.MediaSource = null : 0 <= e.indexOf("Version/9") ? ea() : 0 <= e.indexOf("Version/10") && (ea(), na())
                }
            });
            var xs = 0;
            aa.prototype.then = function(t, e) {
                var n = new aa;
                switch (this.Aa) {
                    casforme 1: fa(this, n, t);
                    break;
                    case 2:
                        fa(this, n, e);
                        break;
                    case xs:
                        this.c.push({
                            N: n,
                            vb: t
                        }), this.b.push({
                            N: n,
                            vb: e
                        })
                }
                return n
            }, aa.prototype.catch = function(t) {
                return this.then(void 0, t)
            }, aa.prototype.ka = function(t) {
                if (this.Aa == xs) {
                    for (this.rb = t, this.Aa = 1, t = 0; t < this.c.length; ++t) fa(this, this.c[t].N, this.c[t].vb);
                    this.c = [], this.b = []
                }
            }, aa.prototype.a = function(t) {
                if (this.Aa == xs) {
                    for (this.rb = t, this.Aa = 2, t = 0; t < this.b.length; ++t) fa(this, this.b[t].N, this.b[t].vb);
                    this.c = [], this.b = []
                }
            };
            var Is = null,
                As = [];
            Po(function(e) {
                t.setImmediate ? (da = function(e) {
                    return t.setImmediate(e)
                }, ma = function(e) {
                    return t.clearImmediate(e)
                }) : (da = function(e) {
                    return t.setTimeout(e, 0)
                }, ma = function(e) {
                    return t.clearTimeout(e)
                }), t.Promise && !e || (t.Promise = aa, t.Promise.resolve = sa, t.Promise.reject = ua, t.Promise.all = ca, t.Promise.race = la, t.Promise.prototype.then = aa.prototype.then, t.Promise.prototype.catch = aa.prototype.catch)
            }), Po(function() {
                if (t.HTMLMediaElement) {
                    var e = HTMLMediaElement.prototype.play;
                    HTMLMediaElement.prototype.play = function() {
                        var t = e.apply(this, arguments);
                        return t && t.catch(function() {}), t
                    }
                }
            }), Po(function() {
                if (t.HTMLVideoElement) {
                    var e = HTMLVideoElement.prototype;
                    !e.getVideoPlaybackQuality && "webkitDroppedFrameCount" in e && (e.getVideoPlaybackQuality = va)
                }
            }), Po(function() {
                if (!t.VTTCue && t.TextTrackCue) {
                    var e = TextTrackCue.length;
                    if (3 == e) t.VTTCue = ya;
                    else if (6 == e) t.VTTCue = ga;
                    else {
                        try {
                            var n = !!ya(1, 2, "")
                        } catch (t) {
                            n = !1
                        }
                        n && (t.VTTCue = ya)
                    }
                }
            }), e("shaka.text.Cue", ba);
            var Ns = "auto";
            ba.positionAlign = {
                LEFT: "line-left",
                RIGHT: "line-right",
                CENTER: "center",
                AUTO: Ns
            };
            var Ms = "center",
                Rs = {
                    LEFT: "left",
                    RIGHT: "right",
                    CENTER: Ms,
                    START: "start",
                    END: "end"
                };
            ba.textAlign = Rs;
            var Ds = "before",
                js = {
                    BEFORE: Ds,
                    CENTER: "center",
                    AFTER: "after"
                };
            ba.displayAlign = js;
            var Ls = 0,
                Us = 2,
                Fs = 3;
            ba.writingDirection = {
                Me: Ls,
                Ne: 1,
                Ve: Us,
                We: Fs
            };
            var Hs = 0,
                Bs = 1;
            ba.lineInterpretation = {
                Oe: Hs,
                Te: Bs
            };
            var zs = "center",
                qs = {
                    CENTER: zs,
                    START: "start",
                    END: "end"
                };
            ba.lineAlign = qs;
            var Vs = 400;
            ba.fontWeight = {
                Re: Vs,
                Ke: 700
            };
            var Ws = "normal",
                Ks = {
                    NORMAL: Ws,
                    ITALIC: "italic",
                    OBLIQUE: "oblique"
                };
            ba.fontStyle = Ks, ba.textDecoration = {
                Ue: "underline",
                Pe: "lineThrough",
                Se: "overline"
            }, wa.prototype.parseInit = function() {}, wa.prototype.parseMedia = function(t, e) {
                var n = $(t),
                    r = [],
                    i = new DOMParser,
                    o = null;
                try {
                    o = i.parseFromString(n, "text/xml")
                } catch (t) {
                    throw new u(2, 2, 2005)
                }
                if (o) {
                    var a = o.getElementsByTagName("tt")[0];
                    if (!a) throw new u(2, 2, 2005);
                    i = a.getAttribute("ttp:frameRate"), o = a.getAttribute("ttp:subFrameRate");
                    var s = a.getAttribute("ttp:frameRateMultiplier"),
                        c = a.getAttribute("ttp:tickRate");
                    if ("default" != (n = a.getAttribute("xml:space") || "default") && "preserve" != n) throw new u(2, 2, 2005);
                    for (n = "default" == n, i = new Ia(i, o, s, c), o = _a(a.getElementsByTagName("styling")[0]), s = _a(a.getElementsByTagName("layout")[0]), a = _a(a.getElementsByTagName("body")[0]), c = 0; c < a.length; c++) {
                        var l = a[c],
                            f = e.periodStart,
                            h = i,
                            p = o,
                            d = s,
                            m = n;
                        if (l.hasAttribute("begin") || l.hasAttribute("end") || !/^\s*$/.test(l.textContent)) {
                            Ea(l, m);
                            var m = ka(l.getAttribute("begin"), h),
                                v = ka(l.getAttribute("end"), h),
                                h = ka(l.getAttribute("dur"), h),
                                y = l.textContent;
                            if (null == v && null != h && (v = m + h), null == m || null == v) throw new u(2, 2, 2001);
                            f = new ba(m + f, v + f, y), m = Oa(l, "region", d), d = f, (v = Sa(l, m, p, "tts:extent")) && (v = Zs.exec(v)) && (d.size = Number(v[1])), "rtl" == Sa(l, m, p, "tts:direction") && (d.b = 1), "tb" == (v = Sa(l, m, p, "tts:writingMode")) || "tblr" == v ? d.b = Us : "tbrl" == v ? d.b = Fs : "rltb" == v || "rl" == v ? d.b = 1 : v && (d.b = Ls), (v = Sa(l, m, p, "tts:origin")) && (v = Zs.exec(v)) && (d.b == Ls || 1 == d.b ? (d.position = Number(v[1]), d.c = Number(v[2])) : (d.position = Number(v[2]), d.c = Number(v[1])), d.g = Bs), (v = Sa(l, m, p, "tts:textAlign")) && (d.i = nu[v], d.h = eu[v], d.f = Rs[v.toUpperCase()]), (v = Sa(l, m, p, "tts:displayAlign")) && (d.j = js[v.toUpperCase()]), (v = Sa(l, m, p, "tts:color")) && (d.s = v), (v = Sa(l, m, p, "tts:backgroundColor")) && (d.m = v), (v = Sa(l, m, p, "tts:fontFamily")) && (d.w = v), (v = Sa(l, m, p, "tts:fontWeight")) && "bold" == v && (d.D = 700), (v = Sa(l, m, p, "tts:wrapOption")) && "noWrap" == v && (d.O = !1), (v = Sa(l, m, p, "tts:lineHeight")) && v.match(tu) && (d.I = v), (v = Sa(l, m, p, "tts:fontSize")) && v.match(tu) && (d.B = v), (v = Sa(l, m, p, "tts:fontStyle")) && (d.C = Ks[v.toUpperCase()]), (m = Pa(m, p, "tts:textDecoration")) && Ta(d, m), (l = Ca(l, p, "tts:textDecoration")) && Ta(d, l)
                        } else f = null;
                        f && r.push(f)
                    }
                }
                return r
            };
            var Ys = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,
                Gs = /^(?:(\d{2,}):)?(\d{2}):(\d{2})$/,
                $s = /^(?:(\d{2,}):)?(\d{2}):(\d{2}\.\d{2,})$/,
                Xs = /^(\d*\.?\d*)f$/,
                Js = /^(\d*\.?\d*)t$/,
                Qs = /^(?:(\d*\.?\d*)h)?(?:(\d*\.?\d*)m)?(?:(\d*\.?\d*)s)?(?:(\d*\.?\d*)ms)?$/,
                Zs = /^(\d{1,2}|100)% (\d{1,2}|100)%$/,
                tu = /^(\d+px|\d+em)$/,
                eu = {
                    left: "start",
                    center: "center",
                    right: "end",
                    start: "start",
                    end: "end"
                },
                nu = {
                    left: "line-left",
                    center: "center",
                    right: "line-right"
                };
            xt("application/ttml+xml", wa), Aa.prototype.parseInit = function(t) {
                var e = !1;
                if ((new Qe).G("moov", Ze).G("trak", Ze).G("mdia", Ze).G("minf", Ze).G("stbl", Ze).aa("stsd", tn).G("stpp", function() {
                        e = !0
                    }).parse(t), !e) throw new u(2, 2, 2007)
            }, Aa.prototype.parseMedia = function(t, e) {
                var n = !1,
                    r = [];
                if ((new Qe).G("mdat", en(function(t) {
                        n = !0, r = this.a.parseMedia(t.buffer, e)
                    }.bind(this))).parse(t), !n) throw new u(2, 2, 2007);
                return r
            }, xt('application/mp4; codecs="stpp"', Aa), xt('application/mp4; codecs="stpp.TTML.im1t"', Aa), Na.prototype.parseInit = function() {}, Na.prototype.parseMedia = function(t, e) {
                var n = (n = (n = $(t)).replace(/\r\n|\r(?=[^\n]|$)/gm, "\n")).split(/\n{2,}/m);
                if (!/^WEBVTT($|[ \t\n])/m.test(n[0])) throw new u(2, 2, 2e3);
                var r = e.segmentStart;
                if (0 <= n[0].indexOf("X-TIMESTAMP-MAP")) {
                    var i = n[0].match(/LOCAL:((?:(\d{1,}):)?(\d{2}):(\d{2})\.(\d{3}))/m),
                        o = n[0].match(/MPEGTS:(\d+)/m);
                    i && o && (r = Ra(new er(i[1])), r = e.periodStart + (Number(o[1]) / 9e4 - r))
                }
                for (o = [], i = 1; i < n.length; i++) {
                    var a = n[i].split("\n"),
                        s = r;
                    if (1 == a.length && !a[0] || /^NOTE($|[ \t])/.test(a[0])) var c = null;
                    else {
                        c = null, 0 > a[0].indexOf("--\x3e") && (c = a[0], a.splice(0, 1));
                        var l = new er(a[0]),
                            f = Ra(l),
                            h = nr(l, /[ \t]+--\x3e[ \t]+/g),
                            p = Ra(l);
                        if (null == f || !h || null == p) throw new u(2, 2, 2001);
                        for (a = new ba(f + s, p + s, a.slice(1).join("\n").trim()), nr(l, /[ \t]+/gm), s = rr(l); s;) Ma(a, s), nr(l, /[ \t]+/gm), s = rr(l);
                        null != c && (a.id = c), c = a
                    }
                    c && o.push(c)
                }
                return o
            }, xt("text/vtt", Na), xt('text/vtt; codecs="vtt"', Na), Da.prototype.parseInit = function(t) {
                var e = !1;
                if ((new Qe).G("moov", Ze).G("trak", Ze).G("mdia", Ze).aa("mdhd", function(t) {
                        0 == t.version ? (t.u.J(4), t.u.J(4), this.a = t.u.F(), t.u.J(4)) : (t.u.J(8), t.u.J(8), this.a = t.u.F(), t.u.J(8)), t.u.J(4)
                    }.bind(this)).G("minf", Ze).G("stbl", Ze).aa("stsd", tn).G("wvtt", function() {
                        e = !0
                    }).parse(t), !this.a) throw new u(2, 2, 2008);
                if (!e) throw new u(2, 2, 2008)
            }, Da.prototype.parseMedia = function(t, e) {
                var n = 0,
                    r = [],
                    i = [],
                    o = [],
                    a = !1,
                    s = !1,
                    c = !1,
                    l = null;
                if ((new Qe).G("moof", Ze).G("traf", Ze).aa("tfdt", function(t) {
                        a = !0, n = t.version ? t.u.Ta() : t.u.F()
                    }).aa("tfhd", function(t) {
                        var e = t.ac;
                        (t = t.u).J(4), 1 & e && t.J(8), 2 & e && t.J(4), l = 8 & e ? t.F() : null
                    }).aa("trun", function(t) {
                        s = !0;
                        var e = t.version,
                            n = t.ac,
                            i = (t = t.u).F();
                        1 & n && t.J(4), 4 & n && t.J(4);
                        for (var o = [], a = 0; a < i; a++) {
                            var u = {
                                duration: null,
                                Sb: null
                            };
                            256 & n && (u.duration = t.F()), 512 & n && t.J(4), 1024 & n && t.J(4), 2048 & n && (u.Sb = e ? t.sc() : t.F()), o.push(u)
                        }
                        r = o
                    }).G("vtte", function() {
                        i.push(null)
                    }).G("vttc", en(function(t) {
                        i.push(t.buffer)
                    })).G("mdat", function(t) {
                        c = !0, Ze(t)
                    }).parse(t), !c && !a && !s) throw new u(2, 2, 2008);
                for (var f = n, h = 0; h < r.length; h++) {
                    var p = r[h],
                        d = i[h],
                        m = p.duration || l;
                    m && (p = p.Sb ? n + p.Sb : f, f = p + m, d && o.push(ja(d, e.periodStart + p / this.a, e.periodStart + f / this.a)))
                }
                return o.filter(O)
            }, xt('application/mp4; codecs="wvtt"', Da)
        }).call(i, this), void 0 !== t && t.exports ? t.exports = i.shaka : void 0 !== (r = function() {
            return i.shaka
        }.call(e, n, e, t)) && (t.exports = r)
    }()
}]);
