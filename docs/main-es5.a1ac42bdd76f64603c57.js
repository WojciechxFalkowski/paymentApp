function _defineProperty(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function _slicedToArray(e, t) {
  return (
    _arrayWithHoles(e) ||
    _iterableToArrayLimit(e, t) ||
    _unsupportedIterableToArray(e, t) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(
    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function _iterableToArrayLimit(e, t) {
  if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
    var n = [],
      r = !0,
      i = !1,
      a = void 0;
    try {
      for (
        var o, s = e[Symbol.iterator]();
        !(r = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t);
        r = !0
      );
    } catch (u) {
      (i = !0), (a = u);
    } finally {
      try {
        r || null == s.return || s.return();
      } finally {
        if (i) throw a;
      }
    }
    return n;
  }
}
function _arrayWithHoles(e) {
  if (Array.isArray(e)) return e;
}
function _createForOfIteratorHelper(e, t) {
  var n;
  if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
    if (
      Array.isArray(e) ||
      (n = _unsupportedIterableToArray(e)) ||
      (t && e && "number" == typeof e.length)
    ) {
      n && (e = n);
      var r = 0,
        i = function () {};
      return {
        s: i,
        n: function () {
          return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
        },
        e: function (e) {
          throw e;
        },
        f: i,
      };
    }
    throw new TypeError(
      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
  var a,
    o = !0,
    s = !1;
  return {
    s: function () {
      n = e[Symbol.iterator]();
    },
    n: function () {
      var e = n.next();
      return (o = e.done), e;
    },
    e: function (e) {
      (s = !0), (a = e);
    },
    f: function () {
      try {
        o || null == n.return || n.return();
      } finally {
        if (s) throw a;
      }
    },
  };
}
function _toConsumableArray(e) {
  return (
    _arrayWithoutHoles(e) ||
    _iterableToArray(e) ||
    _unsupportedIterableToArray(e) ||
    _nonIterableSpread()
  );
}
function _nonIterableSpread() {
  throw new TypeError(
    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function _unsupportedIterableToArray(e, t) {
  if (e) {
    if ("string" == typeof e) return _arrayLikeToArray(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return (
      "Object" === n && e.constructor && (n = e.constructor.name),
      "Map" === n || "Set" === n
        ? Array.from(e)
        : "Arguments" === n ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        ? _arrayLikeToArray(e, t)
        : void 0
    );
  }
}
function _iterableToArray(e) {
  if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
    return Array.from(e);
}
function _arrayWithoutHoles(e) {
  if (Array.isArray(e)) return _arrayLikeToArray(e);
}
function _arrayLikeToArray(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function _construct(e, t, n) {
  return (_construct = _isNativeReflectConstruct()
    ? Reflect.construct
    : function (e, t, n) {
        var r = [null];
        r.push.apply(r, t);
        var i = new (Function.bind.apply(e, r))();
        return n && _setPrototypeOf(i, n.prototype), i;
      }).apply(null, arguments);
}
function _get(e, t, n) {
  return (_get =
    "undefined" != typeof Reflect && Reflect.get
      ? Reflect.get
      : function (e, t, n) {
          var r = _superPropBase(e, t);
          if (r) {
            var i = Object.getOwnPropertyDescriptor(r, t);
            return i.get ? i.get.call(n) : i.value;
          }
        })(e, t, n || e);
}
function _superPropBase(e, t) {
  for (
    ;
    !Object.prototype.hasOwnProperty.call(e, t) &&
    null !== (e = _getPrototypeOf(e));

  );
  return e;
}
function _inherits(e, t) {
  if ("function" != typeof t && null !== t)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && _setPrototypeOf(e, t);
}
function _setPrototypeOf(e, t) {
  return (_setPrototypeOf =
    Object.setPrototypeOf ||
    function (e, t) {
      return (e.__proto__ = t), e;
    })(e, t);
}
function _createSuper(e) {
  var t = _isNativeReflectConstruct();
  return function () {
    var n,
      r = _getPrototypeOf(e);
    if (t) {
      var i = _getPrototypeOf(this).constructor;
      n = Reflect.construct(r, arguments, i);
    } else n = r.apply(this, arguments);
    return _possibleConstructorReturn(this, n);
  };
}
function _possibleConstructorReturn(e, t) {
  return !t || ("object" != typeof t && "function" != typeof t)
    ? _assertThisInitialized(e)
    : t;
}
function _assertThisInitialized(e) {
  if (void 0 === e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function _isNativeReflectConstruct() {
  if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
  if (Reflect.construct.sham) return !1;
  if ("function" == typeof Proxy) return !0;
  try {
    return (
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {})),
      !0
    );
  } catch (e) {
    return !1;
  }
}
function _getPrototypeOf(e) {
  return (_getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
}
function _classCallCheck(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function _createClass(e, t, n) {
  return (
    t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
  );
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    0: function (e, t, n) {
      e.exports = n("zUnb");
    },
    zUnb: function (e, t, n) {
      "use strict";
      function r(e) {
        return "function" == typeof e;
      }
      n.r(t);
      var i = !1,
        a = {
          Promise: void 0,
          set useDeprecatedSynchronousErrorHandling(e) {
            if (e) {
              var t = new Error();
              console.warn(
                "DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" +
                  t.stack
              );
            } else
              i &&
                console.log(
                  "RxJS: Back to a better error behavior. Thank you. <3"
                );
            i = e;
          },
          get useDeprecatedSynchronousErrorHandling() {
            return i;
          },
        };
      function o(e) {
        setTimeout(function () {
          throw e;
        }, 0);
      }
      var s = {
          closed: !0,
          next: function (e) {},
          error: function (e) {
            if (a.useDeprecatedSynchronousErrorHandling) throw e;
            o(e);
          },
          complete: function () {},
        },
        u =
          Array.isArray ||
          function (e) {
            return e && "number" == typeof e.length;
          };
      function l(e) {
        return null !== e && "object" == typeof e;
      }
      var c,
        h = (function () {
          function e(e) {
            return (
              Error.call(this),
              (this.message = e
                ? ""
                    .concat(
                      e.length,
                      " errors occurred during unsubscription:\n"
                    )
                    .concat(
                      e
                        .map(function (e, t) {
                          return "".concat(t + 1, ") ").concat(e.toString());
                        })
                        .join("\n  ")
                    )
                : ""),
              (this.name = "UnsubscriptionError"),
              (this.errors = e),
              this
            );
          }
          return (e.prototype = Object.create(Error.prototype)), e;
        })(),
        f =
          (((c = (function () {
            function e(t) {
              _classCallCheck(this, e),
                (this.closed = !1),
                (this._parentOrParents = null),
                (this._subscriptions = null),
                t && (this._unsubscribe = t);
            }
            return (
              _createClass(e, [
                {
                  key: "unsubscribe",
                  value: function () {
                    var t;
                    if (!this.closed) {
                      var n = this._parentOrParents,
                        i = this._unsubscribe,
                        a = this._subscriptions;
                      if (
                        ((this.closed = !0),
                        (this._parentOrParents = null),
                        (this._subscriptions = null),
                        n instanceof e)
                      )
                        n.remove(this);
                      else if (null !== n)
                        for (var o = 0; o < n.length; ++o) n[o].remove(this);
                      if (r(i))
                        try {
                          i.call(this);
                        } catch (v) {
                          t = v instanceof h ? d(v.errors) : [v];
                        }
                      if (u(a))
                        for (var s = -1, c = a.length; ++s < c; ) {
                          var f = a[s];
                          if (l(f))
                            try {
                              f.unsubscribe();
                            } catch (v) {
                              (t = t || []),
                                v instanceof h
                                  ? (t = t.concat(d(v.errors)))
                                  : t.push(v);
                            }
                        }
                      if (t) throw new h(t);
                    }
                  },
                },
                {
                  key: "add",
                  value: function (t) {
                    var n = t;
                    if (!t) return e.EMPTY;
                    switch (typeof t) {
                      case "function":
                        n = new e(t);
                      case "object":
                        if (
                          n === this ||
                          n.closed ||
                          "function" != typeof n.unsubscribe
                        )
                          return n;
                        if (this.closed) return n.unsubscribe(), n;
                        if (!(n instanceof e)) {
                          var r = n;
                          (n = new e())._subscriptions = [r];
                        }
                        break;
                      default:
                        throw new Error(
                          "unrecognized teardown " +
                            t +
                            " added to Subscription."
                        );
                    }
                    var i = n._parentOrParents;
                    if (null === i) n._parentOrParents = this;
                    else if (i instanceof e) {
                      if (i === this) return n;
                      n._parentOrParents = [i, this];
                    } else {
                      if (-1 !== i.indexOf(this)) return n;
                      i.push(this);
                    }
                    var a = this._subscriptions;
                    return (
                      null === a ? (this._subscriptions = [n]) : a.push(n), n
                    );
                  },
                },
                {
                  key: "remove",
                  value: function (e) {
                    var t = this._subscriptions;
                    if (t) {
                      var n = t.indexOf(e);
                      -1 !== n && t.splice(n, 1);
                    }
                  },
                },
              ]),
              e
            );
          })()).EMPTY = (function (e) {
            return (e.closed = !0), e;
          })(new c())),
          c);
      function d(e) {
        return e.reduce(function (e, t) {
          return e.concat(t instanceof h ? t.errors : t);
        }, []);
      }
      var v =
          "function" == typeof Symbol
            ? Symbol("rxSubscriber")
            : "@@rxSubscriber_" + Math.random(),
        p = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r, i) {
            var a;
            switch (
              (_classCallCheck(this, n),
              ((a = t.call(this)).syncErrorValue = null),
              (a.syncErrorThrown = !1),
              (a.syncErrorThrowable = !1),
              (a.isStopped = !1),
              arguments.length)
            ) {
              case 0:
                a.destination = s;
                break;
              case 1:
                if (!e) {
                  a.destination = s;
                  break;
                }
                if ("object" == typeof e) {
                  e instanceof n
                    ? ((a.syncErrorThrowable = e.syncErrorThrowable),
                      (a.destination = e),
                      e.add(_assertThisInitialized(a)))
                    : ((a.syncErrorThrowable = !0),
                      (a.destination = new y(_assertThisInitialized(a), e)));
                  break;
                }
              default:
                (a.syncErrorThrowable = !0),
                  (a.destination = new y(_assertThisInitialized(a), e, r, i));
            }
            return a;
          }
          return (
            _createClass(
              n,
              [
                {
                  key: v,
                  value: function () {
                    return this;
                  },
                },
                {
                  key: "next",
                  value: function (e) {
                    this.isStopped || this._next(e);
                  },
                },
                {
                  key: "error",
                  value: function (e) {
                    this.isStopped || ((this.isStopped = !0), this._error(e));
                  },
                },
                {
                  key: "complete",
                  value: function () {
                    this.isStopped || ((this.isStopped = !0), this._complete());
                  },
                },
                {
                  key: "unsubscribe",
                  value: function () {
                    this.closed ||
                      ((this.isStopped = !0),
                      _get(
                        _getPrototypeOf(n.prototype),
                        "unsubscribe",
                        this
                      ).call(this));
                  },
                },
                {
                  key: "_next",
                  value: function (e) {
                    this.destination.next(e);
                  },
                },
                {
                  key: "_error",
                  value: function (e) {
                    this.destination.error(e), this.unsubscribe();
                  },
                },
                {
                  key: "_complete",
                  value: function () {
                    this.destination.complete(), this.unsubscribe();
                  },
                },
                {
                  key: "_unsubscribeAndRecycle",
                  value: function () {
                    var e = this._parentOrParents;
                    return (
                      (this._parentOrParents = null),
                      this.unsubscribe(),
                      (this.closed = !1),
                      (this.isStopped = !1),
                      (this._parentOrParents = e),
                      this
                    );
                  },
                },
              ],
              [
                {
                  key: "create",
                  value: function (e, t, r) {
                    var i = new n(e, t, r);
                    return (i.syncErrorThrowable = !1), i;
                  },
                },
              ]
            ),
            n
          );
        })(f),
        y = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, i, a, o) {
            var u, l;
            _classCallCheck(this, n),
              ((u = t.call(this))._parentSubscriber = e);
            var c = _assertThisInitialized(u);
            return (
              r(i)
                ? (l = i)
                : i &&
                  ((l = i.next),
                  (a = i.error),
                  (o = i.complete),
                  i !== s &&
                    (r((c = Object.create(i)).unsubscribe) &&
                      u.add(c.unsubscribe.bind(c)),
                    (c.unsubscribe = u.unsubscribe.bind(
                      _assertThisInitialized(u)
                    )))),
              (u._context = c),
              (u._next = l),
              (u._error = a),
              (u._complete = o),
              u
            );
          }
          return (
            _createClass(n, [
              {
                key: "next",
                value: function (e) {
                  if (!this.isStopped && this._next) {
                    var t = this._parentSubscriber;
                    a.useDeprecatedSynchronousErrorHandling &&
                    t.syncErrorThrowable
                      ? this.__tryOrSetError(t, this._next, e) &&
                        this.unsubscribe()
                      : this.__tryOrUnsub(this._next, e);
                  }
                },
              },
              {
                key: "error",
                value: function (e) {
                  if (!this.isStopped) {
                    var t = this._parentSubscriber,
                      n = a.useDeprecatedSynchronousErrorHandling;
                    if (this._error)
                      n && t.syncErrorThrowable
                        ? (this.__tryOrSetError(t, this._error, e),
                          this.unsubscribe())
                        : (this.__tryOrUnsub(this._error, e),
                          this.unsubscribe());
                    else if (t.syncErrorThrowable)
                      n
                        ? ((t.syncErrorValue = e), (t.syncErrorThrown = !0))
                        : o(e),
                        this.unsubscribe();
                    else {
                      if ((this.unsubscribe(), n)) throw e;
                      o(e);
                    }
                  }
                },
              },
              {
                key: "complete",
                value: function () {
                  var e = this;
                  if (!this.isStopped) {
                    var t = this._parentSubscriber;
                    if (this._complete) {
                      var n = function () {
                        return e._complete.call(e._context);
                      };
                      a.useDeprecatedSynchronousErrorHandling &&
                      t.syncErrorThrowable
                        ? (this.__tryOrSetError(t, n), this.unsubscribe())
                        : (this.__tryOrUnsub(n), this.unsubscribe());
                    } else this.unsubscribe();
                  }
                },
              },
              {
                key: "__tryOrUnsub",
                value: function (e, t) {
                  try {
                    e.call(this._context, t);
                  } catch (n) {
                    if (
                      (this.unsubscribe(),
                      a.useDeprecatedSynchronousErrorHandling)
                    )
                      throw n;
                    o(n);
                  }
                },
              },
              {
                key: "__tryOrSetError",
                value: function (e, t, n) {
                  if (!a.useDeprecatedSynchronousErrorHandling)
                    throw new Error("bad call");
                  try {
                    t.call(this._context, n);
                  } catch (r) {
                    return a.useDeprecatedSynchronousErrorHandling
                      ? ((e.syncErrorValue = r), (e.syncErrorThrown = !0), !0)
                      : (o(r), !0);
                  }
                  return !1;
                },
              },
              {
                key: "_unsubscribe",
                value: function () {
                  var e = this._parentSubscriber;
                  (this._context = null),
                    (this._parentSubscriber = null),
                    e.unsubscribe();
                },
              },
            ]),
            n
          );
        })(p),
        g =
          ("function" == typeof Symbol && Symbol.observable) || "@@observable";
      function m(e) {
        return e;
      }
      function _() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return k(t);
      }
      function k(e) {
        return 0 === e.length
          ? m
          : 1 === e.length
          ? e[0]
          : function (t) {
              return e.reduce(function (e, t) {
                return t(e);
              }, t);
            };
      }
      var C,
        w =
          (((C = (function () {
            function e(t) {
              _classCallCheck(this, e),
                (this._isScalar = !1),
                t && (this._subscribe = t);
            }
            return (
              _createClass(e, [
                {
                  key: "lift",
                  value: function (t) {
                    var n = new e();
                    return (n.source = this), (n.operator = t), n;
                  },
                },
                {
                  key: "subscribe",
                  value: function (e, t, n) {
                    var r = this.operator,
                      i = (function (e, t, n) {
                        if (e) {
                          if (e instanceof p) return e;
                          if (e[v]) return e[v]();
                        }
                        return e || t || n ? new p(e, t, n) : new p(s);
                      })(e, t, n);
                    if (
                      (i.add(
                        r
                          ? r.call(i, this.source)
                          : this.source ||
                            (a.useDeprecatedSynchronousErrorHandling &&
                              !i.syncErrorThrowable)
                          ? this._subscribe(i)
                          : this._trySubscribe(i)
                      ),
                      a.useDeprecatedSynchronousErrorHandling &&
                        i.syncErrorThrowable &&
                        ((i.syncErrorThrowable = !1), i.syncErrorThrown))
                    )
                      throw i.syncErrorValue;
                    return i;
                  },
                },
                {
                  key: "_trySubscribe",
                  value: function (e) {
                    try {
                      return this._subscribe(e);
                    } catch (t) {
                      a.useDeprecatedSynchronousErrorHandling &&
                        ((e.syncErrorThrown = !0), (e.syncErrorValue = t)),
                        (function (e) {
                          for (; e; ) {
                            var t = e,
                              n = t.closed,
                              r = t.destination,
                              i = t.isStopped;
                            if (n || i) return !1;
                            e = r && r instanceof p ? r : null;
                          }
                          return !0;
                        })(e)
                          ? e.error(t)
                          : console.warn(t);
                    }
                  },
                },
                {
                  key: "forEach",
                  value: function (e, t) {
                    var n = this;
                    return new (t = b(t))(function (t, r) {
                      var i;
                      i = n.subscribe(
                        function (t) {
                          try {
                            e(t);
                          } catch (n) {
                            r(n), i && i.unsubscribe();
                          }
                        },
                        r,
                        t
                      );
                    });
                  },
                },
                {
                  key: "_subscribe",
                  value: function (e) {
                    var t = this.source;
                    return t && t.subscribe(e);
                  },
                },
                {
                  key: g,
                  value: function () {
                    return this;
                  },
                },
                {
                  key: "pipe",
                  value: function () {
                    for (
                      var e = arguments.length, t = new Array(e), n = 0;
                      n < e;
                      n++
                    )
                      t[n] = arguments[n];
                    return 0 === t.length ? this : k(t)(this);
                  },
                },
                {
                  key: "toPromise",
                  value: function (e) {
                    var t = this;
                    return new (e = b(e))(function (e, n) {
                      var r;
                      t.subscribe(
                        function (e) {
                          return (r = e);
                        },
                        function (e) {
                          return n(e);
                        },
                        function () {
                          return e(r);
                        }
                      );
                    });
                  },
                },
              ]),
              e
            );
          })()).create = function (e) {
            return new C(e);
          }),
          C);
      function b(e) {
        if ((e || (e = a.Promise || Promise), !e))
          throw new Error("no Promise impl found");
        return e;
      }
      var S,
        E = (function () {
          function e() {
            return (
              Error.call(this),
              (this.message = "object unsubscribed"),
              (this.name = "ObjectUnsubscribedError"),
              this
            );
          }
          return (e.prototype = Object.create(Error.prototype)), e;
        })(),
        T = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r) {
            var i;
            return (
              _classCallCheck(this, n),
              ((i = t.call(this)).subject = e),
              (i.subscriber = r),
              (i.closed = !1),
              i
            );
          }
          return (
            _createClass(n, [
              {
                key: "unsubscribe",
                value: function () {
                  if (!this.closed) {
                    this.closed = !0;
                    var e = this.subject,
                      t = e.observers;
                    if (
                      ((this.subject = null),
                      t && 0 !== t.length && !e.isStopped && !e.closed)
                    ) {
                      var n = t.indexOf(this.subscriber);
                      -1 !== n && t.splice(n, 1);
                    }
                  }
                },
              },
            ]),
            n
          );
        })(f),
        x = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e) {
            var r;
            return (
              _classCallCheck(this, n),
              ((r = t.call(this, e)).destination = e),
              r
            );
          }
          return n;
        })(p),
        P =
          (((S = (function (e) {
            _inherits(n, e);
            var t = _createSuper(n);
            function n() {
              var e;
              return (
                _classCallCheck(this, n),
                ((e = t.call(this)).observers = []),
                (e.closed = !1),
                (e.isStopped = !1),
                (e.hasError = !1),
                (e.thrownError = null),
                e
              );
            }
            return (
              _createClass(n, [
                {
                  key: v,
                  value: function () {
                    return new x(this);
                  },
                },
                {
                  key: "lift",
                  value: function (e) {
                    var t = new O(this, this);
                    return (t.operator = e), t;
                  },
                },
                {
                  key: "next",
                  value: function (e) {
                    if (this.closed) throw new E();
                    if (!this.isStopped)
                      for (
                        var t = this.observers,
                          n = t.length,
                          r = t.slice(),
                          i = 0;
                        i < n;
                        i++
                      )
                        r[i].next(e);
                  },
                },
                {
                  key: "error",
                  value: function (e) {
                    if (this.closed) throw new E();
                    (this.hasError = !0),
                      (this.thrownError = e),
                      (this.isStopped = !0);
                    for (
                      var t = this.observers,
                        n = t.length,
                        r = t.slice(),
                        i = 0;
                      i < n;
                      i++
                    )
                      r[i].error(e);
                    this.observers.length = 0;
                  },
                },
                {
                  key: "complete",
                  value: function () {
                    if (this.closed) throw new E();
                    this.isStopped = !0;
                    for (
                      var e = this.observers,
                        t = e.length,
                        n = e.slice(),
                        r = 0;
                      r < t;
                      r++
                    )
                      n[r].complete();
                    this.observers.length = 0;
                  },
                },
                {
                  key: "unsubscribe",
                  value: function () {
                    (this.isStopped = !0),
                      (this.closed = !0),
                      (this.observers = null);
                  },
                },
                {
                  key: "_trySubscribe",
                  value: function (e) {
                    if (this.closed) throw new E();
                    return _get(
                      _getPrototypeOf(n.prototype),
                      "_trySubscribe",
                      this
                    ).call(this, e);
                  },
                },
                {
                  key: "_subscribe",
                  value: function (e) {
                    if (this.closed) throw new E();
                    return this.hasError
                      ? (e.error(this.thrownError), f.EMPTY)
                      : this.isStopped
                      ? (e.complete(), f.EMPTY)
                      : (this.observers.push(e), new T(this, e));
                  },
                },
                {
                  key: "asObservable",
                  value: function () {
                    var e = new w();
                    return (e.source = this), e;
                  },
                },
              ]),
              n
            );
          })(w)).create = function (e, t) {
            return new O(e, t);
          }),
          S),
        O = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r) {
            var i;
            return (
              _classCallCheck(this, n),
              ((i = t.call(this)).destination = e),
              (i.source = r),
              i
            );
          }
          return (
            _createClass(n, [
              {
                key: "next",
                value: function (e) {
                  var t = this.destination;
                  t && t.next && t.next(e);
                },
              },
              {
                key: "error",
                value: function (e) {
                  var t = this.destination;
                  t && t.error && this.destination.error(e);
                },
              },
              {
                key: "complete",
                value: function () {
                  var e = this.destination;
                  e && e.complete && this.destination.complete();
                },
              },
              {
                key: "_subscribe",
                value: function (e) {
                  return this.source ? this.source.subscribe(e) : f.EMPTY;
                },
              },
            ]),
            n
          );
        })(P);
      function A(e) {
        return e && "function" == typeof e.schedule;
      }
      var I = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r, i) {
            var a;
            return (
              _classCallCheck(this, n),
              ((a = t.call(this)).parent = e),
              (a.outerValue = r),
              (a.outerIndex = i),
              (a.index = 0),
              a
            );
          }
          return (
            _createClass(n, [
              {
                key: "_next",
                value: function (e) {
                  this.parent.notifyNext(
                    this.outerValue,
                    e,
                    this.outerIndex,
                    this.index++,
                    this
                  );
                },
              },
              {
                key: "_error",
                value: function (e) {
                  this.parent.notifyError(e, this), this.unsubscribe();
                },
              },
              {
                key: "_complete",
                value: function () {
                  this.parent.notifyComplete(this), this.unsubscribe();
                },
              },
            ]),
            n
          );
        })(p),
        R = function (e) {
          return function (t) {
            for (var n = 0, r = e.length; n < r && !t.closed; n++) t.next(e[n]);
            t.complete();
          };
        };
      var D =
          "function" == typeof Symbol && Symbol.iterator
            ? Symbol.iterator
            : "@@iterator",
        M = function (e) {
          return e && "number" == typeof e.length && "function" != typeof e;
        };
      function N(e) {
        return (
          !!e && "function" != typeof e.subscribe && "function" == typeof e.then
        );
      }
      var F = function (e) {
        if (e && "function" == typeof e[g])
          return (
            (r = e),
            function (e) {
              var t = r[g]();
              if ("function" != typeof t.subscribe)
                throw new TypeError(
                  "Provided object does not correctly implement Symbol.observable"
                );
              return t.subscribe(e);
            }
          );
        if (M(e)) return R(e);
        if (N(e))
          return (
            (n = e),
            function (e) {
              return (
                n
                  .then(
                    function (t) {
                      e.closed || (e.next(t), e.complete());
                    },
                    function (t) {
                      return e.error(t);
                    }
                  )
                  .then(null, o),
                e
              );
            }
          );
        if (e && "function" == typeof e[D])
          return (
            (t = e),
            function (e) {
              for (var n = t[D](); ; ) {
                var r = n.next();
                if (r.done) {
                  e.complete();
                  break;
                }
                if ((e.next(r.value), e.closed)) break;
              }
              return (
                "function" == typeof n.return &&
                  e.add(function () {
                    n.return && n.return();
                  }),
                e
              );
            }
          );
        var t,
          n,
          r,
          i = l(e) ? "an invalid object" : "'".concat(e, "'");
        throw new TypeError(
          "You provided ".concat(
            i,
            " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable."
          )
        );
      };
      function j(e, t, n, r) {
        var i =
          arguments.length > 4 && void 0 !== arguments[4]
            ? arguments[4]
            : new I(e, n, r);
        if (!i.closed) return t instanceof w ? t.subscribe(i) : F(t)(i);
      }
      var L = (function (e) {
        _inherits(n, e);
        var t = _createSuper(n);
        function n() {
          return _classCallCheck(this, n), t.apply(this, arguments);
        }
        return (
          _createClass(n, [
            {
              key: "notifyNext",
              value: function (e, t, n, r, i) {
                this.destination.next(t);
              },
            },
            {
              key: "notifyError",
              value: function (e, t) {
                this.destination.error(e);
              },
            },
            {
              key: "notifyComplete",
              value: function (e) {
                this.destination.complete();
              },
            },
          ]),
          n
        );
      })(p);
      function U(e, t) {
        return function (n) {
          if ("function" != typeof e)
            throw new TypeError(
              "argument is not a function. Are you looking for `mapTo()`?"
            );
          return n.lift(new H(e, t));
        };
      }
      var H = (function () {
          function e(t, n) {
            _classCallCheck(this, e), (this.project = t), (this.thisArg = n);
          }
          return (
            _createClass(e, [
              {
                key: "call",
                value: function (e, t) {
                  return t.subscribe(new V(e, this.project, this.thisArg));
                },
              },
            ]),
            e
          );
        })(),
        V = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r, i) {
            var a;
            return (
              _classCallCheck(this, n),
              ((a = t.call(this, e)).project = r),
              (a.count = 0),
              (a.thisArg = i || _assertThisInitialized(a)),
              a
            );
          }
          return (
            _createClass(n, [
              {
                key: "_next",
                value: function (e) {
                  var t;
                  try {
                    t = this.project.call(this.thisArg, e, this.count++);
                  } catch (n) {
                    return void this.destination.error(n);
                  }
                  this.destination.next(t);
                },
              },
            ]),
            n
          );
        })(p);
      function z(e, t) {
        return new w(function (n) {
          var r = new f(),
            i = 0;
          return (
            r.add(
              t.schedule(function () {
                i !== e.length
                  ? (n.next(e[i++]), n.closed || r.add(this.schedule()))
                  : n.complete();
              })
            ),
            r
          );
        });
      }
      function B(e, t) {
        return t
          ? (function (e, t) {
              if (null != e) {
                if (
                  (function (e) {
                    return e && "function" == typeof e[g];
                  })(e)
                )
                  return (function (e, t) {
                    return new w(function (n) {
                      var r = new f();
                      return (
                        r.add(
                          t.schedule(function () {
                            var i = e[g]();
                            r.add(
                              i.subscribe({
                                next: function (e) {
                                  r.add(
                                    t.schedule(function () {
                                      return n.next(e);
                                    })
                                  );
                                },
                                error: function (e) {
                                  r.add(
                                    t.schedule(function () {
                                      return n.error(e);
                                    })
                                  );
                                },
                                complete: function () {
                                  r.add(
                                    t.schedule(function () {
                                      return n.complete();
                                    })
                                  );
                                },
                              })
                            );
                          })
                        ),
                        r
                      );
                    });
                  })(e, t);
                if (N(e))
                  return (function (e, t) {
                    return new w(function (n) {
                      var r = new f();
                      return (
                        r.add(
                          t.schedule(function () {
                            return e.then(
                              function (e) {
                                r.add(
                                  t.schedule(function () {
                                    n.next(e),
                                      r.add(
                                        t.schedule(function () {
                                          return n.complete();
                                        })
                                      );
                                  })
                                );
                              },
                              function (e) {
                                r.add(
                                  t.schedule(function () {
                                    return n.error(e);
                                  })
                                );
                              }
                            );
                          })
                        ),
                        r
                      );
                    });
                  })(e, t);
                if (M(e)) return z(e, t);
                if (
                  (function (e) {
                    return e && "function" == typeof e[D];
                  })(e) ||
                  "string" == typeof e
                )
                  return (function (e, t) {
                    if (!e) throw new Error("Iterable cannot be null");
                    return new w(function (n) {
                      var r,
                        i = new f();
                      return (
                        i.add(function () {
                          r && "function" == typeof r.return && r.return();
                        }),
                        i.add(
                          t.schedule(function () {
                            (r = e[D]()),
                              i.add(
                                t.schedule(function () {
                                  if (!n.closed) {
                                    var e, t;
                                    try {
                                      var i = r.next();
                                      (e = i.value), (t = i.done);
                                    } catch (a) {
                                      return void n.error(a);
                                    }
                                    t
                                      ? n.complete()
                                      : (n.next(e), this.schedule());
                                  }
                                })
                              );
                          })
                        ),
                        i
                      );
                    });
                  })(e, t);
              }
              throw new TypeError(
                ((null !== e && typeof e) || e) + " is not observable"
              );
            })(e, t)
          : e instanceof w
          ? e
          : new w(F(e));
      }
      function q(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : Number.POSITIVE_INFINITY;
        return "function" == typeof t
          ? function (r) {
              return r.pipe(
                q(function (n, r) {
                  return B(e(n, r)).pipe(
                    U(function (e, i) {
                      return t(n, e, r, i);
                    })
                  );
                }, n)
              );
            }
          : ("number" == typeof t && (n = t),
            function (t) {
              return t.lift(new G(e, n));
            });
      }
      var G = (function () {
          function e(t) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : Number.POSITIVE_INFINITY;
            _classCallCheck(this, e), (this.project = t), (this.concurrent = n);
          }
          return (
            _createClass(e, [
              {
                key: "call",
                value: function (e, t) {
                  return t.subscribe(new W(e, this.project, this.concurrent));
                },
              },
            ]),
            e
          );
        })(),
        W = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r) {
            var i,
              a =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : Number.POSITIVE_INFINITY;
            return (
              _classCallCheck(this, n),
              ((i = t.call(this, e)).project = r),
              (i.concurrent = a),
              (i.hasCompleted = !1),
              (i.buffer = []),
              (i.active = 0),
              (i.index = 0),
              i
            );
          }
          return (
            _createClass(n, [
              {
                key: "_next",
                value: function (e) {
                  this.active < this.concurrent
                    ? this._tryNext(e)
                    : this.buffer.push(e);
                },
              },
              {
                key: "_tryNext",
                value: function (e) {
                  var t,
                    n = this.index++;
                  try {
                    t = this.project(e, n);
                  } catch (r) {
                    return void this.destination.error(r);
                  }
                  this.active++, this._innerSub(t, e, n);
                },
              },
              {
                key: "_innerSub",
                value: function (e, t, n) {
                  var r = new I(this, t, n),
                    i = this.destination;
                  i.add(r);
                  var a = j(this, e, void 0, void 0, r);
                  a !== r && i.add(a);
                },
              },
              {
                key: "_complete",
                value: function () {
                  (this.hasCompleted = !0),
                    0 === this.active &&
                      0 === this.buffer.length &&
                      this.destination.complete(),
                    this.unsubscribe();
                },
              },
              {
                key: "notifyNext",
                value: function (e, t, n, r, i) {
                  this.destination.next(t);
                },
              },
              {
                key: "notifyComplete",
                value: function (e) {
                  var t = this.buffer;
                  this.remove(e),
                    this.active--,
                    t.length > 0
                      ? this._next(t.shift())
                      : 0 === this.active &&
                        this.hasCompleted &&
                        this.destination.complete();
                },
              },
            ]),
            n
          );
        })(L);
      function K() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : Number.POSITIVE_INFINITY;
        return q(m, e);
      }
      function Z(e, t) {
        return t ? z(e, t) : new w(R(e));
      }
      function Q() {
        return function (e) {
          return e.lift(new Y(e));
        };
      }
      var $,
        Y = (function () {
          function e(t) {
            _classCallCheck(this, e), (this.connectable = t);
          }
          return (
            _createClass(e, [
              {
                key: "call",
                value: function (e, t) {
                  var n = this.connectable;
                  n._refCount++;
                  var r = new J(e, n),
                    i = t.subscribe(r);
                  return r.closed || (r.connection = n.connect()), i;
                },
              },
            ]),
            e
          );
        })(),
        J = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r) {
            var i;
            return (
              _classCallCheck(this, n),
              ((i = t.call(this, e)).connectable = r),
              i
            );
          }
          return (
            _createClass(n, [
              {
                key: "_unsubscribe",
                value: function () {
                  var e = this.connectable;
                  if (e) {
                    this.connectable = null;
                    var t = e._refCount;
                    if (t <= 0) this.connection = null;
                    else if (((e._refCount = t - 1), t > 1))
                      this.connection = null;
                    else {
                      var n = this.connection,
                        r = e._connection;
                      (this.connection = null),
                        !r || (n && r !== n) || r.unsubscribe();
                    }
                  } else this.connection = null;
                },
              },
            ]),
            n
          );
        })(p),
        X = {
          operator: { value: null },
          _refCount: { value: 0, writable: !0 },
          _subject: { value: null, writable: !0 },
          _connection: { value: null, writable: !0 },
          _subscribe: {
            value: ($ = (function (e) {
              _inherits(n, e);
              var t = _createSuper(n);
              function n(e, r) {
                var i;
                return (
                  _classCallCheck(this, n),
                  ((i = t.call(this)).source = e),
                  (i.subjectFactory = r),
                  (i._refCount = 0),
                  (i._isComplete = !1),
                  i
                );
              }
              return (
                _createClass(n, [
                  {
                    key: "_subscribe",
                    value: function (e) {
                      return this.getSubject().subscribe(e);
                    },
                  },
                  {
                    key: "getSubject",
                    value: function () {
                      var e = this._subject;
                      return (
                        (e && !e.isStopped) ||
                          (this._subject = this.subjectFactory()),
                        this._subject
                      );
                    },
                  },
                  {
                    key: "connect",
                    value: function () {
                      var e = this._connection;
                      return (
                        e ||
                          ((this._isComplete = !1),
                          (e = this._connection = new f()).add(
                            this.source.subscribe(
                              new ee(this.getSubject(), this)
                            )
                          ),
                          e.closed &&
                            ((this._connection = null), (e = f.EMPTY))),
                        e
                      );
                    },
                  },
                  {
                    key: "refCount",
                    value: function () {
                      return Q()(this);
                    },
                  },
                ]),
                n
              );
            })(w).prototype)._subscribe,
          },
          _isComplete: { value: $._isComplete, writable: !0 },
          getSubject: { value: $.getSubject },
          connect: { value: $.connect },
          refCount: { value: $.refCount },
        },
        ee = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r) {
            var i;
            return (
              _classCallCheck(this, n),
              ((i = t.call(this, e)).connectable = r),
              i
            );
          }
          return (
            _createClass(n, [
              {
                key: "_error",
                value: function (e) {
                  this._unsubscribe(),
                    _get(_getPrototypeOf(n.prototype), "_error", this).call(
                      this,
                      e
                    );
                },
              },
              {
                key: "_complete",
                value: function () {
                  (this.connectable._isComplete = !0),
                    this._unsubscribe(),
                    _get(_getPrototypeOf(n.prototype), "_complete", this).call(
                      this
                    );
                },
              },
              {
                key: "_unsubscribe",
                value: function () {
                  var e = this.connectable;
                  if (e) {
                    this.connectable = null;
                    var t = e._connection;
                    (e._refCount = 0),
                      (e._subject = null),
                      (e._connection = null),
                      t && t.unsubscribe();
                  }
                },
              },
            ]),
            n
          );
        })(x);
      function te() {
        return new P();
      }
      function ne(e) {
        return { toString: e }.toString();
      }
      function re(e, t, n) {
        return ne(function () {
          var r = (function (e) {
            return function () {
              if (e) {
                var t = e.apply(void 0, arguments);
                for (var n in t) this[n] = t[n];
              }
            };
          })(t);
          function i() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            if (this instanceof i) return r.apply(this, t), this;
            var a = _construct(i, t);
            return (o.annotation = a), o;
            function o(e, t, n) {
              for (
                var r = e.hasOwnProperty("__parameters__")
                  ? e.__parameters__
                  : Object.defineProperty(e, "__parameters__", { value: [] })
                      .__parameters__;
                r.length <= n;

              )
                r.push(null);
              return (r[n] = r[n] || []).push(a), e;
            }
          }
          return (
            n && (i.prototype = Object.create(n.prototype)),
            (i.prototype.ngMetadataName = e),
            (i.annotationCls = i),
            i
          );
        });
      }
      var ie = re("Inject", function (e) {
          return { token: e };
        }),
        ae = re("Optional"),
        oe = re("Self"),
        se = re("SkipSelf"),
        ue = (function (e) {
          return (
            (e[(e.Default = 0)] = "Default"),
            (e[(e.Host = 1)] = "Host"),
            (e[(e.Self = 2)] = "Self"),
            (e[(e.SkipSelf = 4)] = "SkipSelf"),
            (e[(e.Optional = 8)] = "Optional"),
            e
          );
        })({});
      function le(e) {
        for (var t in e) if (e[t] === le) return t;
        throw Error("Could not find renamed property on target object.");
      }
      function ce(e) {
        return {
          token: e.token,
          providedIn: e.providedIn || null,
          factory: e.factory,
          value: void 0,
        };
      }
      function he(e) {
        return {
          factory: e.factory,
          providers: e.providers || [],
          imports: e.imports || [],
        };
      }
      function fe(e) {
        return de(e, e[pe]) || de(e, e[me]);
      }
      function de(e, t) {
        return t && t.token === e ? t : null;
      }
      function ve(e) {
        return e && (e.hasOwnProperty(ye) || e.hasOwnProperty(_e))
          ? e[ye]
          : null;
      }
      var pe = le({ ɵprov: le }),
        ye = le({ ɵinj: le }),
        ge = le({ ɵprovFallback: le }),
        me = le({ ngInjectableDef: le }),
        _e = le({ ngInjectorDef: le });
      function ke(e) {
        if ("string" == typeof e) return e;
        if (Array.isArray(e)) return "[" + e.map(ke).join(", ") + "]";
        if (null == e) return "" + e;
        if (e.overriddenName) return "" + e.overriddenName;
        if (e.name) return "" + e.name;
        var t = e.toString();
        if (null == t) return "" + t;
        var n = t.indexOf("\n");
        return -1 === n ? t : t.substring(0, n);
      }
      function Ce(e, t) {
        return null == e || "" === e
          ? null === t
            ? ""
            : t
          : null == t || "" === t
          ? e
          : e + " " + t;
      }
      var we = le({ __forward_ref__: le });
      function be(e) {
        return (
          (e.__forward_ref__ = be),
          (e.toString = function () {
            return ke(this());
          }),
          e
        );
      }
      function Se(e) {
        return "function" == typeof (t = e) &&
          t.hasOwnProperty(we) &&
          t.__forward_ref__ === be
          ? e()
          : e;
        var t;
      }
      var Ee,
        Te = "undefined" != typeof globalThis && globalThis,
        xe = "undefined" != typeof window && window,
        Pe =
          "undefined" != typeof self &&
          "undefined" != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          self,
        Oe = "undefined" != typeof global && global,
        Ae = Te || Oe || xe || Pe,
        Ie = le({ ɵcmp: le }),
        Re = le({ ɵdir: le }),
        De = le({ ɵpipe: le }),
        Me = le({ ɵmod: le }),
        Ne = le({ ɵloc: le }),
        Fe = le({ ɵfac: le }),
        je = le({ __NG_ELEMENT_ID__: le }),
        Le = (function () {
          function e(t, n) {
            _classCallCheck(this, e),
              (this._desc = t),
              (this.ngMetadataName = "InjectionToken"),
              (this.ɵprov = void 0),
              "number" == typeof n
                ? (this.__NG_ELEMENT_ID__ = n)
                : void 0 !== n &&
                  (this.ɵprov = ce({
                    token: this,
                    providedIn: n.providedIn || "root",
                    factory: n.factory,
                  }));
          }
          return (
            _createClass(e, [
              {
                key: "toString",
                value: function () {
                  return "InjectionToken " + this._desc;
                },
              },
            ]),
            e
          );
        })(),
        Ue = new Le("INJECTOR", -1),
        He = {},
        Ve = /\n/gm,
        ze = le({ provide: String, useValue: le }),
        Be = void 0;
      function qe(e) {
        var t = Be;
        return (Be = e), t;
      }
      function Ge(e) {
        var t = Ee;
        return (Ee = e), t;
      }
      function We(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : ue.Default;
        if (void 0 === Be)
          throw new Error("inject() must be called from an injection context");
        return null === Be
          ? Ze(e, void 0, t)
          : Be.get(e, t & ue.Optional ? null : void 0, t);
      }
      function Ke(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : ue.Default;
        return (Ee || We)(Se(e), t);
      }
      function Ze(e, t, n) {
        var r = fe(e);
        if (r && "root" == r.providedIn)
          return void 0 === r.value ? (r.value = r.factory()) : r.value;
        if (n & ue.Optional) return null;
        if (void 0 !== t) return t;
        throw new Error("Injector: NOT_FOUND [".concat(ke(e), "]"));
      }
      function Qe(e) {
        for (var t = [], n = 0; n < e.length; n++) {
          var r = Se(e[n]);
          if (Array.isArray(r)) {
            if (0 === r.length)
              throw new Error("Arguments array must have arguments.");
            for (var i = void 0, a = ue.Default, o = 0; o < r.length; o++) {
              var s = r[o];
              s instanceof ae || "Optional" === s.ngMetadataName || s === ae
                ? (a |= ue.Optional)
                : s instanceof se || "SkipSelf" === s.ngMetadataName || s === se
                ? (a |= ue.SkipSelf)
                : s instanceof oe || "Self" === s.ngMetadataName || s === oe
                ? (a |= ue.Self)
                : (i = s instanceof ie || s === ie ? s.token : s);
            }
            t.push(Ke(i, a));
          } else t.push(Ke(r));
        }
        return t;
      }
      var $e = (function () {
          function e() {
            _classCallCheck(this, e);
          }
          return (
            _createClass(e, [
              {
                key: "get",
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : He;
                  if (t === He) {
                    var n = new Error(
                      "NullInjectorError: No provider for ".concat(ke(e), "!")
                    );
                    throw ((n.name = "NullInjectorError"), n);
                  }
                  return t;
                },
              },
            ]),
            e
          );
        })(),
        Ye = function e() {
          _classCallCheck(this, e);
        },
        Je = function e() {
          _classCallCheck(this, e);
        };
      function Xe(e, t) {
        e.forEach(function (e) {
          return Array.isArray(e) ? Xe(e, t) : t(e);
        });
      }
      function et(e, t, n) {
        t >= e.length ? e.push(n) : e.splice(t, 0, n);
      }
      function tt(e, t) {
        return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
      }
      var nt = (function () {
          var e = { OnPush: 0, Default: 1 };
          return (e[e.OnPush] = "OnPush"), (e[e.Default] = "Default"), e;
        })(),
        rt = (function () {
          var e = { Emulated: 0, Native: 1, None: 2, ShadowDom: 3 };
          return (
            (e[e.Emulated] = "Emulated"),
            (e[e.Native] = "Native"),
            (e[e.None] = "None"),
            (e[e.ShadowDom] = "ShadowDom"),
            e
          );
        })(),
        it = {},
        at = [],
        ot = 0;
      function st(e) {
        return ne(function () {
          var t = e.type,
            n = t.prototype,
            r = {},
            i = {
              type: t,
              providersResolver: null,
              decls: e.decls,
              vars: e.vars,
              factory: null,
              template: e.template || null,
              consts: e.consts || null,
              ngContentSelectors: e.ngContentSelectors,
              hostBindings: e.hostBindings || null,
              hostVars: e.hostVars || 0,
              hostAttrs: e.hostAttrs || null,
              contentQueries: e.contentQueries || null,
              declaredInputs: r,
              inputs: null,
              outputs: null,
              exportAs: e.exportAs || null,
              onChanges: null,
              onInit: n.ngOnInit || null,
              doCheck: n.ngDoCheck || null,
              afterContentInit: n.ngAfterContentInit || null,
              afterContentChecked: n.ngAfterContentChecked || null,
              afterViewInit: n.ngAfterViewInit || null,
              afterViewChecked: n.ngAfterViewChecked || null,
              onDestroy: n.ngOnDestroy || null,
              onPush: e.changeDetection === nt.OnPush,
              directiveDefs: null,
              pipeDefs: null,
              selectors: e.selectors || at,
              viewQuery: e.viewQuery || null,
              features: e.features || null,
              data: e.data || {},
              encapsulation: e.encapsulation || rt.Emulated,
              id: "c",
              styles: e.styles || at,
              _: null,
              setInput: null,
              schemas: e.schemas || null,
              tView: null,
            },
            a = e.directives,
            o = e.features,
            s = e.pipes;
          return (
            (i.id += ot++),
            (i.inputs = ft(e.inputs, r)),
            (i.outputs = ft(e.outputs)),
            o &&
              o.forEach(function (e) {
                return e(i);
              }),
            (i.directiveDefs = a
              ? function () {
                  return ("function" == typeof a ? a() : a).map(ut);
                }
              : null),
            (i.pipeDefs = s
              ? function () {
                  return ("function" == typeof s ? s() : s).map(lt);
                }
              : null),
            i
          );
        });
      }
      function ut(e) {
        return (
          pt(e) ||
          (function (e) {
            return e[Re] || null;
          })(e)
        );
      }
      function lt(e) {
        return (function (e) {
          return e[De] || null;
        })(e);
      }
      var ct = {};
      function ht(e) {
        var t = {
          type: e.type,
          bootstrap: e.bootstrap || at,
          declarations: e.declarations || at,
          imports: e.imports || at,
          exports: e.exports || at,
          transitiveCompileScopes: null,
          schemas: e.schemas || null,
          id: e.id || null,
        };
        return (
          null != e.id &&
            ne(function () {
              ct[e.id] = e.type;
            }),
          t
        );
      }
      function ft(e, t) {
        if (null == e) return it;
        var n = {};
        for (var r in e)
          if (e.hasOwnProperty(r)) {
            var i = e[r],
              a = i;
            Array.isArray(i) && ((a = i[1]), (i = i[0])),
              (n[i] = r),
              t && (t[i] = a);
          }
        return n;
      }
      var dt = st;
      function vt(e) {
        return {
          type: e.type,
          name: e.name,
          factory: null,
          pure: !1 !== e.pure,
          onDestroy: e.type.prototype.ngOnDestroy || null,
        };
      }
      function pt(e) {
        return e[Ie] || null;
      }
      function yt(e, t) {
        return e.hasOwnProperty(Fe) ? e[Fe] : null;
      }
      function gt(e, t) {
        var n = e[Me] || null;
        if (!n && !0 === t)
          throw new Error(
            "Type ".concat(ke(e), " does not have '\u0275mod' property.")
          );
        return n;
      }
      function mt(e) {
        return Array.isArray(e) && "object" == typeof e[1];
      }
      function _t(e) {
        return Array.isArray(e) && !0 === e[1];
      }
      function kt(e) {
        return 0 != (8 & e.flags);
      }
      function Ct(e) {
        return 2 == (2 & e.flags);
      }
      function wt(e) {
        return 1 == (1 & e.flags);
      }
      function bt(e) {
        return null !== e.template;
      }
      function St(e) {
        return 0 != (512 & e[2]);
      }
      var Et = void 0;
      function Tt(e) {
        return !!e.listen;
      }
      var xt = {
        createRenderer: function (e, t) {
          return void 0 !== Et
            ? Et
            : "undefined" != typeof document
            ? document
            : void 0;
        },
      };
      function Pt(e) {
        for (; Array.isArray(e); ) e = e[0];
        return e;
      }
      function Ot(e, t) {
        return Pt(t[e.index]);
      }
      function At(e, t) {
        return e.data[t + 20];
      }
      function It(e, t) {
        return e[t + 20];
      }
      function Rt(e, t) {
        var n = t[e];
        return mt(n) ? n : n[0];
      }
      function Dt(e) {
        var t = (function (e) {
          return e.__ngContext__ || null;
        })(e);
        return t ? (Array.isArray(t) ? t : t.lView) : null;
      }
      function Mt(e) {
        return 128 == (128 & e[2]);
      }
      function Nt(e, t) {
        return null === e || null == t ? null : e[t];
      }
      function Ft(e) {
        e[18] = 0;
      }
      function jt(e, t) {
        e[5] += t;
        for (
          var n = e, r = e[3];
          null !== r && ((1 === t && 1 === n[5]) || (-1 === t && 0 === n[5]));

        )
          (r[5] += t), (n = r), (r = r[3]);
      }
      var Lt = {
        lFrame: nn(null),
        bindingsEnabled: !0,
        checkNoChangesMode: !1,
      };
      function Ut() {
        return Lt.bindingsEnabled;
      }
      function Ht() {
        return Lt.lFrame.lView;
      }
      function Vt() {
        return Lt.lFrame.tView;
      }
      function zt() {
        return Lt.lFrame.previousOrParentTNode;
      }
      function Bt(e, t) {
        (Lt.lFrame.previousOrParentTNode = e), (Lt.lFrame.isParent = t);
      }
      function qt() {
        return Lt.lFrame.isParent;
      }
      function Gt() {
        return Lt.checkNoChangesMode;
      }
      function Wt(e) {
        Lt.checkNoChangesMode = e;
      }
      function Kt() {
        var e = Lt.lFrame,
          t = e.bindingRootIndex;
        return (
          -1 === t && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t
        );
      }
      function Zt() {
        return Lt.lFrame.bindingIndex;
      }
      function Qt() {
        return Lt.lFrame.bindingIndex++;
      }
      function $t(e, t) {
        var n = Lt.lFrame;
        (n.bindingIndex = n.bindingRootIndex = e), Yt(t);
      }
      function Yt(e) {
        Lt.lFrame.currentDirectiveIndex = e;
      }
      function Jt(e) {
        Lt.lFrame.currentQueryIndex = e;
      }
      function Xt(e, t) {
        var n = tn();
        (Lt.lFrame = n), (n.previousOrParentTNode = t), (n.lView = e);
      }
      function en(e, t) {
        var n = tn(),
          r = e[1];
        (Lt.lFrame = n),
          (n.previousOrParentTNode = t),
          (n.lView = e),
          (n.tView = r),
          (n.contextLView = e),
          (n.bindingIndex = r.bindingStartIndex);
      }
      function tn() {
        var e = Lt.lFrame,
          t = null === e ? null : e.child;
        return null === t ? nn(e) : t;
      }
      function nn(e) {
        var t = {
          previousOrParentTNode: null,
          isParent: !0,
          lView: null,
          tView: null,
          selectedIndex: 0,
          contextLView: null,
          elementDepthCount: 0,
          currentNamespace: null,
          currentSanitizer: null,
          currentDirectiveIndex: -1,
          bindingRootIndex: -1,
          bindingIndex: -1,
          currentQueryIndex: 0,
          parent: e,
          child: null,
        };
        return null !== e && (e.child = t), t;
      }
      function rn() {
        var e = Lt.lFrame;
        return (
          (Lt.lFrame = e.parent),
          (e.previousOrParentTNode = null),
          (e.lView = null),
          e
        );
      }
      var an = rn;
      function on() {
        var e = rn();
        (e.isParent = !0),
          (e.tView = null),
          (e.selectedIndex = 0),
          (e.contextLView = null),
          (e.elementDepthCount = 0),
          (e.currentDirectiveIndex = -1),
          (e.currentNamespace = null),
          (e.currentSanitizer = null),
          (e.bindingRootIndex = -1),
          (e.bindingIndex = -1),
          (e.currentQueryIndex = 0);
      }
      function sn() {
        return Lt.lFrame.selectedIndex;
      }
      function un(e) {
        Lt.lFrame.selectedIndex = e;
      }
      function ln() {
        var e = Lt.lFrame;
        return At(e.tView, e.selectedIndex);
      }
      function cn() {
        Lt.lFrame.currentNamespace = "http://www.w3.org/2000/svg";
      }
      function hn() {
        Lt.lFrame.currentNamespace = null;
      }
      function fn(e, t) {
        for (var n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
          var i = e.data[n];
          i.afterContentInit &&
            (e.contentHooks || (e.contentHooks = [])).push(
              -n,
              i.afterContentInit
            ),
            i.afterContentChecked &&
              ((e.contentHooks || (e.contentHooks = [])).push(
                n,
                i.afterContentChecked
              ),
              (e.contentCheckHooks || (e.contentCheckHooks = [])).push(
                n,
                i.afterContentChecked
              )),
            i.afterViewInit &&
              (e.viewHooks || (e.viewHooks = [])).push(-n, i.afterViewInit),
            i.afterViewChecked &&
              ((e.viewHooks || (e.viewHooks = [])).push(n, i.afterViewChecked),
              (e.viewCheckHooks || (e.viewCheckHooks = [])).push(
                n,
                i.afterViewChecked
              )),
            null != i.onDestroy &&
              (e.destroyHooks || (e.destroyHooks = [])).push(n, i.onDestroy);
        }
      }
      function dn(e, t, n) {
        yn(e, t, 3, n);
      }
      function vn(e, t, n, r) {
        (3 & e[2]) === n && yn(e, t, n, r);
      }
      function pn(e, t) {
        var n = e[2];
        (3 & n) === t && ((n &= 2047), (n += 1), (e[2] = n));
      }
      function yn(e, t, n, r) {
        for (
          var i = null != r ? r : -1,
            a = 0,
            o = void 0 !== r ? 65535 & e[18] : 0;
          o < t.length;
          o++
        )
          if ("number" == typeof t[o + 1]) {
            if (((a = t[o]), null != r && a >= r)) break;
          } else
            t[o] < 0 && (e[18] += 65536),
              (a < i || -1 == i) &&
                (gn(e, n, t, o), (e[18] = (4294901760 & e[18]) + o + 2)),
              o++;
      }
      function gn(e, t, n, r) {
        var i = n[r] < 0,
          a = n[r + 1],
          o = e[i ? -n[r] : n[r]];
        i
          ? e[2] >> 11 < e[18] >> 16 &&
            (3 & e[2]) === t &&
            ((e[2] += 2048), a.call(o))
          : a.call(o);
      }
      var mn = function e(t, n, r) {
        _classCallCheck(this, e),
          (this.factory = t),
          (this.resolving = !1),
          (this.canSeeViewProviders = n),
          (this.injectImpl = r);
      };
      function _n(e, t, n) {
        for (var r = Tt(e), i = 0; i < n.length; ) {
          var a = n[i];
          if ("number" == typeof a) {
            if (0 !== a) break;
            i++;
            var o = n[i++],
              s = n[i++],
              u = n[i++];
            r ? e.setAttribute(t, s, u, o) : t.setAttributeNS(o, s, u);
          } else {
            var l = a,
              c = n[++i];
            Cn(l)
              ? r && e.setProperty(t, l, c)
              : r
              ? e.setAttribute(t, l, c)
              : t.setAttribute(l, c),
              i++;
          }
        }
        return i;
      }
      function kn(e) {
        return 3 === e || 4 === e || 6 === e;
      }
      function Cn(e) {
        return 64 === e.charCodeAt(0);
      }
      function wn(e, t) {
        if (null === t || 0 === t.length);
        else if (null === e || 0 === e.length) e = t.slice();
        else
          for (var n = -1, r = 0; r < t.length; r++) {
            var i = t[r];
            "number" == typeof i
              ? (n = i)
              : 0 === n ||
                bn(e, n, i, null, -1 === n || 2 === n ? t[++r] : null);
          }
        return e;
      }
      function bn(e, t, n, r, i) {
        var a = 0,
          o = e.length;
        if (-1 === t) o = -1;
        else
          for (; a < e.length; ) {
            var s = e[a++];
            if ("number" == typeof s) {
              if (s === t) {
                o = -1;
                break;
              }
              if (s > t) {
                o = a - 1;
                break;
              }
            }
          }
        for (; a < e.length; ) {
          var u = e[a];
          if ("number" == typeof u) break;
          if (u === n) {
            if (null === r) return void (null !== i && (e[a + 1] = i));
            if (r === e[a + 1]) return void (e[a + 2] = i);
          }
          a++, null !== r && a++, null !== i && a++;
        }
        -1 !== o && (e.splice(o, 0, t), (a = o + 1)),
          e.splice(a++, 0, n),
          null !== r && e.splice(a++, 0, r),
          null !== i && e.splice(a++, 0, i);
      }
      function Sn(e) {
        return -1 !== e;
      }
      function En(e) {
        return 32767 & e;
      }
      function Tn(e) {
        return e >> 16;
      }
      function xn(e, t) {
        for (var n = Tn(e), r = t; n > 0; ) (r = r[15]), n--;
        return r;
      }
      function Pn(e) {
        return "string" == typeof e ? e : null == e ? "" : "" + e;
      }
      function On(e) {
        return "function" == typeof e
          ? e.name || e.toString()
          : "object" == typeof e && null != e && "function" == typeof e.type
          ? e.type.name || e.type.toString()
          : Pn(e);
      }
      var An = (
        ("undefined" != typeof requestAnimationFrame &&
          requestAnimationFrame) ||
        setTimeout
      ).bind(Ae);
      function In(e) {
        return e instanceof Function ? e() : e;
      }
      var Rn = !0;
      function Dn(e) {
        var t = Rn;
        return (Rn = e), t;
      }
      var Mn = 0;
      function Nn(e, t) {
        var n = jn(e, t);
        if (-1 !== n) return n;
        var r = t[1];
        r.firstCreatePass &&
          ((e.injectorIndex = t.length),
          Fn(r.data, e),
          Fn(t, null),
          Fn(r.blueprint, null));
        var i = Ln(e, t),
          a = e.injectorIndex;
        if (Sn(i))
          for (var o = En(i), s = xn(i, t), u = s[1].data, l = 0; l < 8; l++)
            t[a + l] = s[o + l] | u[o + l];
        return (t[a + 8] = i), a;
      }
      function Fn(e, t) {
        e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
      }
      function jn(e, t) {
        return -1 === e.injectorIndex ||
          (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
          null == t[e.injectorIndex + 8]
          ? -1
          : e.injectorIndex;
      }
      function Ln(e, t) {
        if (e.parent && -1 !== e.parent.injectorIndex)
          return e.parent.injectorIndex;
        for (var n = t[6], r = 1; n && -1 === n.injectorIndex; )
          (n = (t = t[15]) ? t[6] : null), r++;
        return n ? n.injectorIndex | (r << 16) : -1;
      }
      function Un(e, t, n) {
        !(function (e, t, n) {
          var r = "string" != typeof n ? n[je] : n.charCodeAt(0) || 0;
          null == r && (r = n[je] = Mn++);
          var i = 255 & r,
            a = 1 << i,
            o = 64 & i,
            s = 32 & i,
            u = t.data;
          128 & i
            ? o
              ? s
                ? (u[e + 7] |= a)
                : (u[e + 6] |= a)
              : s
              ? (u[e + 5] |= a)
              : (u[e + 4] |= a)
            : o
            ? s
              ? (u[e + 3] |= a)
              : (u[e + 2] |= a)
            : s
            ? (u[e + 1] |= a)
            : (u[e] |= a);
        })(e, t, n);
      }
      function Hn(e, t, n) {
        var r =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : ue.Default,
          i = arguments.length > 4 ? arguments[4] : void 0;
        if (null !== e) {
          var a = (function (e) {
            if ("string" == typeof e) return e.charCodeAt(0) || 0;
            var t = e[je];
            return "number" == typeof t && t > 0 ? 255 & t : t;
          })(n);
          if ("function" == typeof a) {
            Xt(t, e);
            try {
              var o = a();
              if (null != o || r & ue.Optional) return o;
              throw new Error("No provider for ".concat(On(n), "!"));
            } finally {
              an();
            }
          } else if ("number" == typeof a) {
            if (-1 === a) return new Wn(e, t);
            var s = null,
              u = jn(e, t),
              l = -1,
              c = r & ue.Host ? t[16][6] : null;
            for (
              (-1 === u || r & ue.SkipSelf) &&
              ((l = -1 === u ? Ln(e, t) : t[u + 8]),
              Gn(r, !1) ? ((s = t[1]), (u = En(l)), (t = xn(l, t))) : (u = -1));
              -1 !== u;

            ) {
              l = t[u + 8];
              var h = t[1];
              if (qn(a, u, h.data)) {
                var f = zn(u, t, n, s, r, c);
                if (f !== Vn) return f;
              }
              Gn(r, t[1].data[u + 8] === c) && qn(a, u, t)
                ? ((s = h), (u = En(l)), (t = xn(l, t)))
                : (u = -1);
            }
          }
        }
        if (
          (r & ue.Optional && void 0 === i && (i = null),
          0 == (r & (ue.Self | ue.Host)))
        ) {
          var d = t[9],
            v = Ge(void 0);
          try {
            return d ? d.get(n, i, r & ue.Optional) : Ze(n, i, r & ue.Optional);
          } finally {
            Ge(v);
          }
        }
        if (r & ue.Optional) return i;
        throw new Error("NodeInjector: NOT_FOUND [".concat(On(n), "]"));
      }
      var Vn = {};
      function zn(e, t, n, r, i, a) {
        var o = t[1],
          s = o.data[e + 8],
          u = (function (e, t, n, r, i) {
            for (
              var a = e.providerIndexes,
                o = t.data,
                s = 65535 & a,
                u = e.directiveStart,
                l = a >> 16,
                c = i ? s + l : e.directiveEnd,
                h = r ? s : s + l;
              h < c;
              h++
            ) {
              var f = o[h];
              if ((h < u && n === f) || (h >= u && f.type === n)) return h;
            }
            if (i) {
              var d = o[u];
              if (d && bt(d) && d.type === n) return u;
            }
            return null;
          })(
            s,
            o,
            n,
            null == r ? Ct(s) && Rn : r != o && 3 === s.type,
            i & ue.Host && a === s
          );
        return null !== u ? Bn(t, o, u, s) : Vn;
      }
      function Bn(e, t, n, r) {
        var i = e[n],
          a = t.data;
        if (i instanceof mn) {
          var o = i;
          if (o.resolving) throw new Error("Circular dep for " + On(a[n]));
          var s,
            u = Dn(o.canSeeViewProviders);
          (o.resolving = !0), o.injectImpl && (s = Ge(o.injectImpl)), Xt(e, r);
          try {
            (i = e[n] = o.factory(void 0, a, e, r)),
              t.firstCreatePass &&
                n >= r.directiveStart &&
                (function (e, t, n) {
                  var r = t.onChanges,
                    i = t.onInit,
                    a = t.doCheck;
                  r &&
                    ((n.preOrderHooks || (n.preOrderHooks = [])).push(e, r),
                    (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(
                      e,
                      r
                    )),
                    i &&
                      (n.preOrderHooks || (n.preOrderHooks = [])).push(-e, i),
                    a &&
                      ((n.preOrderHooks || (n.preOrderHooks = [])).push(e, a),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(e, a));
                })(n, a[n], t);
          } finally {
            o.injectImpl && Ge(s), Dn(u), (o.resolving = !1), an();
          }
        }
        return i;
      }
      function qn(e, t, n) {
        var r = 64 & e,
          i = 32 & e;
        return !!(
          (128 & e
            ? r
              ? i
                ? n[t + 7]
                : n[t + 6]
              : i
              ? n[t + 5]
              : n[t + 4]
            : r
            ? i
              ? n[t + 3]
              : n[t + 2]
            : i
            ? n[t + 1]
            : n[t]) &
          (1 << e)
        );
      }
      function Gn(e, t) {
        return !(e & ue.Self || (e & ue.Host && t));
      }
      var Wn = (function () {
        function e(t, n) {
          _classCallCheck(this, e), (this._tNode = t), (this._lView = n);
        }
        return (
          _createClass(e, [
            {
              key: "get",
              value: function (e, t) {
                return Hn(this._tNode, this._lView, e, void 0, t);
              },
            },
          ]),
          e
        );
      })();
      function Kn(e) {
        return e.ngDebugContext;
      }
      function Zn(e) {
        return e.ngOriginalError;
      }
      function Qn(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        e.error.apply(e, n);
      }
      var $n = (function () {
          function e() {
            _classCallCheck(this, e), (this._console = console);
          }
          return (
            _createClass(e, [
              {
                key: "handleError",
                value: function (e) {
                  var t = this._findOriginalError(e),
                    n = this._findContext(e),
                    r = (function (e) {
                      return e.ngErrorLogger || Qn;
                    })(e);
                  r(this._console, "ERROR", e),
                    t && r(this._console, "ORIGINAL ERROR", t),
                    n && r(this._console, "ERROR CONTEXT", n);
                },
              },
              {
                key: "_findContext",
                value: function (e) {
                  return e ? (Kn(e) ? Kn(e) : this._findContext(Zn(e))) : null;
                },
              },
              {
                key: "_findOriginalError",
                value: function (e) {
                  for (var t = Zn(e); t && Zn(t); ) t = Zn(t);
                  return t;
                },
              },
            ]),
            e
          );
        })(),
        Yn = (function () {
          function e(t) {
            _classCallCheck(this, e),
              (this.changingThisBreaksApplicationSecurity = t);
          }
          return (
            _createClass(e, [
              {
                key: "toString",
                value: function () {
                  return (
                    "SafeValue must use [property]=binding: " +
                    this.changingThisBreaksApplicationSecurity +
                    " (see http://g.co/ng/security#xss)"
                  );
                },
              },
            ]),
            e
          );
        })(),
        Jn = !0,
        Xn = !1;
      function er() {
        return (Xn = !0), Jn;
      }
      var tr = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        nr = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i,
        rr = (function () {
          var e = {
            NONE: 0,
            HTML: 1,
            STYLE: 2,
            SCRIPT: 3,
            URL: 4,
            RESOURCE_URL: 5,
          };
          return (
            (e[e.NONE] = "NONE"),
            (e[e.HTML] = "HTML"),
            (e[e.STYLE] = "STYLE"),
            (e[e.SCRIPT] = "SCRIPT"),
            (e[e.URL] = "URL"),
            (e[e.RESOURCE_URL] = "RESOURCE_URL"),
            e
          );
        })();
      function ir(e) {
        var t,
          n,
          r,
          i = (t = Ht()) && t[12];
        return i
          ? i.sanitize(rr.URL, e) || ""
          : (function (e, t) {
              var n = (function (e) {
                return (e instanceof Yn && e.getTypeName()) || null;
              })(e);
              if (null != n && "URL" !== n) {
                if ("ResourceURL" === n) return !0;
                throw new Error(
                  "Required a safe "
                    .concat("URL", ", got a ")
                    .concat(n, " (see http://g.co/ng/security#xss)")
                );
              }
              return "URL" === n;
            })(e)
          ? (r = e) instanceof Yn
            ? r.changingThisBreaksApplicationSecurity
            : r
          : ((n = Pn(e)),
            (n = String(n)).match(tr) || n.match(nr)
              ? n
              : (er() &&
                  console.warn(
                    "WARNING: sanitizing unsafe URL value ".concat(
                      n,
                      " (see http://g.co/ng/security#xss)"
                    )
                  ),
                "unsafe:" + n));
      }
      function ar(e, t) {
        e.__ngContext__ = t;
      }
      function or(e) {
        throw new Error(
          "Multiple components match node with tagname " + e.tagName
        );
      }
      function sr() {
        throw new Error("Cannot mix multi providers and regular providers");
      }
      function ur(e, t, n) {
        for (var r = e.length; ; ) {
          var i = e.indexOf(t, n);
          if (-1 === i) return i;
          if (0 === i || e.charCodeAt(i - 1) <= 32) {
            var a = t.length;
            if (i + a === r || e.charCodeAt(i + a) <= 32) return i;
          }
          n = i + 1;
        }
      }
      function lr(e, t, n) {
        for (var r = 0; r < e.length; ) {
          var i = e[r++];
          if (n && "class" === i) {
            if (-1 !== ur((i = e[r]).toLowerCase(), t, 0)) return !0;
          } else if (1 === i) {
            for (; r < e.length && "string" == typeof (i = e[r++]); )
              if (i.toLowerCase() === t) return !0;
            return !1;
          }
        }
        return !1;
      }
      function cr(e) {
        return 0 === e.type && "ng-template" !== e.tagName;
      }
      function hr(e, t, n) {
        return t === (0 !== e.type || n ? e.tagName : "ng-template");
      }
      function fr(e, t, n) {
        for (
          var r = 4,
            i = e.attrs || [],
            a = (function (e) {
              for (var t = 0; t < e.length; t++) if (kn(e[t])) return t;
              return e.length;
            })(i),
            o = !1,
            s = 0;
          s < t.length;
          s++
        ) {
          var u = t[s];
          if ("number" != typeof u) {
            if (!o)
              if (4 & r) {
                if (
                  ((r = 2 | (1 & r)),
                  ("" !== u && !hr(e, u, n)) || ("" === u && 1 === t.length))
                ) {
                  if (dr(r)) return !1;
                  o = !0;
                }
              } else {
                var l = 8 & r ? u : t[++s];
                if (8 & r && null !== e.attrs) {
                  if (!lr(e.attrs, l, n)) {
                    if (dr(r)) return !1;
                    o = !0;
                  }
                  continue;
                }
                var c = vr(8 & r ? "class" : u, i, cr(e), n);
                if (-1 === c) {
                  if (dr(r)) return !1;
                  o = !0;
                  continue;
                }
                if ("" !== l) {
                  var h;
                  h = c > a ? "" : i[c + 1].toLowerCase();
                  var f = 8 & r ? h : null;
                  if ((f && -1 !== ur(f, l, 0)) || (2 & r && l !== h)) {
                    if (dr(r)) return !1;
                    o = !0;
                  }
                }
              }
          } else {
            if (!o && !dr(r) && !dr(u)) return !1;
            if (o && dr(u)) continue;
            (o = !1), (r = u | (1 & r));
          }
        }
        return dr(r) || o;
      }
      function dr(e) {
        return 0 == (1 & e);
      }
      function vr(e, t, n, r) {
        if (null === t) return -1;
        var i = 0;
        if (r || !n) {
          for (var a = !1; i < t.length; ) {
            var o = t[i];
            if (o === e) return i;
            if (3 === o || 6 === o) a = !0;
            else {
              if (1 === o || 2 === o) {
                for (var s = t[++i]; "string" == typeof s; ) s = t[++i];
                continue;
              }
              if (4 === o) break;
              if (0 === o) {
                i += 4;
                continue;
              }
            }
            i += a ? 1 : 2;
          }
          return -1;
        }
        return (function (e, t) {
          var n = e.indexOf(4);
          if (n > -1)
            for (n++; n < e.length; ) {
              var r = e[n];
              if ("number" == typeof r) return -1;
              if (r === t) return n;
              n++;
            }
          return -1;
        })(t, e);
      }
      function pr(e, t) {
        for (
          var n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = 0;
          r < t.length;
          r++
        )
          if (fr(e, t[r], n)) return !0;
        return !1;
      }
      function yr(e, t) {
        return e ? ":not(" + t.trim() + ")" : t;
      }
      function gr(e) {
        for (var t = e[0], n = 1, r = 2, i = "", a = !1; n < e.length; ) {
          var o = e[n];
          if ("string" == typeof o)
            if (2 & r) {
              var s = e[++n];
              i += "[" + o + (s.length > 0 ? '="' + s + '"' : "") + "]";
            } else 8 & r ? (i += "." + o) : 4 & r && (i += " " + o);
          else
            "" === i || dr(o) || ((t += yr(a, i)), (i = "")),
              (r = o),
              (a = a || !dr(r));
          n++;
        }
        return "" !== i && (t += yr(a, i)), t;
      }
      var mr = {};
      function _r(e) {
        var t = e[3];
        return _t(t) ? t[3] : t;
      }
      function kr(e) {
        return wr(e[13]);
      }
      function Cr(e) {
        return wr(e[4]);
      }
      function wr(e) {
        for (; null !== e && !_t(e); ) e = e[4];
        return e;
      }
      function br(e) {
        Sr(Vt(), Ht(), sn() + e, Gt());
      }
      function Sr(e, t, n, r) {
        if (!r)
          if (3 == (3 & t[2])) {
            var i = e.preOrderCheckHooks;
            null !== i && dn(t, i, n);
          } else {
            var a = e.preOrderHooks;
            null !== a && vn(t, a, 0, n);
          }
        un(n);
      }
      function Er(e, t) {
        var n = e.contentQueries;
        if (null !== n)
          for (var r = 0; r < n.length; r += 2) {
            var i = n[r],
              a = n[r + 1];
            if (-1 !== a) {
              var o = e.data[a];
              Jt(i), o.contentQueries(2, t[a], a);
            }
          }
      }
      function Tr(e, t, n) {
        return Tt(t)
          ? t.createElement(e, n)
          : null === n
          ? t.createElement(e)
          : t.createElementNS(n, e);
      }
      function xr(e, t, n, r, i, a, o, s, u, l) {
        var c = t.blueprint.slice();
        return (
          (c[0] = i),
          (c[2] = 140 | r),
          Ft(c),
          (c[3] = c[15] = e),
          (c[8] = n),
          (c[10] = o || (e && e[10])),
          (c[11] = s || (e && e[11])),
          (c[12] = u || (e && e[12]) || null),
          (c[9] = l || (e && e[9]) || null),
          (c[6] = a),
          (c[16] = 2 == t.type ? e[16] : c),
          c
        );
      }
      function Pr(e, t, n, r, i, a) {
        var o = n + 20,
          s =
            e.data[o] ||
            (function (e, t, n, r, i, a) {
              var o = zt(),
                s = qt(),
                u = s ? o : o && o.parent,
                l = (e.data[n] = jr(0, u && u !== t ? u : null, r, n, i, a));
              return (
                null === e.firstChild && (e.firstChild = l),
                o &&
                  (!s || null != o.child || (null === l.parent && 2 !== o.type)
                    ? s || (o.next = l)
                    : (o.child = l)),
                l
              );
            })(e, t, o, r, i, a);
        return Bt(s, !0), s;
      }
      function Or(e, t, n) {
        en(t, t[6]);
        try {
          var r = e.viewQuery;
          null !== r && ai(1, r, n);
          var i = e.template;
          null !== i && Rr(e, t, i, 1, n),
            e.firstCreatePass && (e.firstCreatePass = !1),
            e.staticContentQueries && Er(e, t),
            e.staticViewQueries && ai(2, e.viewQuery, n);
          var a = e.components;
          null !== a &&
            (function (e, t) {
              for (var n = 0; n < t.length; n++) ei(e, t[n]);
            })(t, a);
        } catch (o) {
          throw (e.firstCreatePass && (e.incompleteFirstPass = !0), o);
        } finally {
          (t[2] &= -5), on();
        }
      }
      function Ar(e, t, n, r) {
        var i = t[2];
        if (256 != (256 & i)) {
          en(t, t[6]);
          var a = Gt();
          try {
            Ft(t),
              (Lt.lFrame.bindingIndex = e.bindingStartIndex),
              null !== n && Rr(e, t, n, 2, r);
            var o = 3 == (3 & i);
            if (!a)
              if (o) {
                var s = e.preOrderCheckHooks;
                null !== s && dn(t, s, null);
              } else {
                var u = e.preOrderHooks;
                null !== u && vn(t, u, 0, null), pn(t, 0);
              }
            if (
              ((function (e) {
                for (var t = kr(e); null !== t; t = Cr(t))
                  if (t[2])
                    for (var n = t[9], r = 0; r < n.length; r++) {
                      var i = n[r],
                        a = i[3];
                      0 == (1024 & i[2]) && jt(a, 1), (i[2] |= 1024);
                    }
              })(t),
              (function (e) {
                for (var t = kr(e); null !== t; t = Cr(t))
                  for (var n = 10; n < t.length; n++) {
                    var r = t[n],
                      i = r[1];
                    Mt(r) && Ar(i, r, i.template, r[8]);
                  }
              })(t),
              null !== e.contentQueries && Er(e, t),
              !a)
            )
              if (o) {
                var l = e.contentCheckHooks;
                null !== l && dn(t, l);
              } else {
                var c = e.contentHooks;
                null !== c && vn(t, c, 1), pn(t, 1);
              }
            !(function (e, t) {
              try {
                var n = e.expandoInstructions;
                if (null !== n)
                  for (
                    var r = e.expandoStartIndex, i = -1, a = 0;
                    a < n.length;
                    a++
                  ) {
                    var o = n[a];
                    "number" == typeof o
                      ? o <= 0
                        ? (un(0 - o), (i = r += 9 + n[++a]))
                        : (r += o)
                      : (null !== o && ($t(r, i), o(2, t[i])), i++);
                  }
              } finally {
                un(-1);
              }
            })(e, t);
            var h = e.components;
            null !== h &&
              (function (e, t) {
                for (var n = 0; n < t.length; n++) Xr(e, t[n]);
              })(t, h);
            var f = e.viewQuery;
            if ((null !== f && ai(2, f, r), !a))
              if (o) {
                var d = e.viewCheckHooks;
                null !== d && dn(t, d);
              } else {
                var v = e.viewHooks;
                null !== v && vn(t, v, 2), pn(t, 2);
              }
            !0 === e.firstUpdatePass && (e.firstUpdatePass = !1),
              a || (t[2] &= -73),
              1024 & t[2] && ((t[2] &= -1025), jt(t[3], -1));
          } finally {
            on();
          }
        }
      }
      function Ir(e, t, n, r) {
        var i = t[10],
          a = !Gt(),
          o = 4 == (4 & t[2]);
        try {
          a && !o && i.begin && i.begin(), o && Or(e, t, r), Ar(e, t, n, r);
        } finally {
          a && !o && i.end && i.end();
        }
      }
      function Rr(e, t, n, r, i) {
        var a = sn();
        try {
          un(-1), 2 & r && t.length > 20 && Sr(e, t, 0, Gt()), n(r, i);
        } finally {
          un(a);
        }
      }
      function Dr(e, t, n) {
        Ut() &&
          ((function (e, t, n, r) {
            var i = n.directiveStart,
              a = n.directiveEnd;
            e.firstCreatePass || Nn(n, t), ar(r, t);
            for (var o = n.initialInputs, s = i; s < a; s++) {
              var u = e.data[s],
                l = bt(u);
              l && Qr(t, n, u);
              var c = Bn(t, e, s, n);
              ar(c, t),
                null !== o && $r(0, s - i, c, u, 0, o),
                l && (Rt(n.index, t)[8] = c);
            }
          })(e, t, n, Ot(n, t)),
          128 == (128 & n.flags) &&
            (function (e, t, n) {
              var r = n.directiveStart,
                i = n.directiveEnd,
                a = e.expandoInstructions,
                o = e.firstCreatePass,
                s = n.index - 20,
                u = Lt.lFrame.currentDirectiveIndex;
              try {
                un(s);
                for (var l = r; l < i; l++) {
                  var c = e.data[l],
                    h = t[l];
                  Yt(l),
                    null !== c.hostBindings ||
                    0 !== c.hostVars ||
                    null !== c.hostAttrs
                      ? Br(c, h)
                      : o && a.push(null);
                }
              } finally {
                un(-1), Yt(u);
              }
            })(e, t, n));
      }
      function Mr(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ot,
          r = t.localNames;
        if (null !== r)
          for (var i = t.index + 1, a = 0; a < r.length; a += 2) {
            var o = r[a + 1],
              s = -1 === o ? n(t, e) : e[o];
            e[i++] = s;
          }
      }
      function Nr(e) {
        var t = e.tView;
        return null === t || t.incompleteFirstPass
          ? (e.tView = Fr(
              1,
              -1,
              e.template,
              e.decls,
              e.vars,
              e.directiveDefs,
              e.pipeDefs,
              e.viewQuery,
              e.schemas,
              e.consts
            ))
          : t;
      }
      function Fr(e, t, n, r, i, a, o, s, u, l) {
        var c = 20 + r,
          h = c + i,
          f = (function (e, t) {
            for (var n = [], r = 0; r < t; r++) n.push(r < e ? null : mr);
            return n;
          })(c, h);
        return (f[1] = {
          type: e,
          id: t,
          blueprint: f,
          template: n,
          queries: null,
          viewQuery: s,
          node: null,
          data: f.slice().fill(null, c),
          bindingStartIndex: c,
          expandoStartIndex: h,
          expandoInstructions: null,
          firstCreatePass: !0,
          firstUpdatePass: !0,
          staticViewQueries: !1,
          staticContentQueries: !1,
          preOrderHooks: null,
          preOrderCheckHooks: null,
          contentHooks: null,
          contentCheckHooks: null,
          viewHooks: null,
          viewCheckHooks: null,
          destroyHooks: null,
          cleanup: null,
          contentQueries: null,
          components: null,
          directiveRegistry: "function" == typeof a ? a() : a,
          pipeRegistry: "function" == typeof o ? o() : o,
          firstChild: null,
          schemas: u,
          consts: l,
          incompleteFirstPass: !1,
        });
      }
      function jr(e, t, n, r, i, a) {
        return {
          type: n,
          index: r,
          injectorIndex: t ? t.injectorIndex : -1,
          directiveStart: -1,
          directiveEnd: -1,
          directiveStylingLast: -1,
          propertyBindings: null,
          flags: 0,
          providerIndexes: 0,
          tagName: i,
          attrs: a,
          mergedAttrs: null,
          localNames: null,
          initialInputs: void 0,
          inputs: null,
          outputs: null,
          tViews: null,
          next: null,
          projectionNext: null,
          child: null,
          parent: t,
          projection: null,
          styles: null,
          stylesWithoutHost: null,
          residualStyles: void 0,
          classes: null,
          classesWithoutHost: null,
          residualClasses: void 0,
          classBindings: 0,
          styleBindings: 0,
        };
      }
      function Lr(e, t, n) {
        for (var r in e)
          if (e.hasOwnProperty(r)) {
            var i = e[r];
            (n = null === n ? {} : n).hasOwnProperty(r)
              ? n[r].push(t, i)
              : (n[r] = [t, i]);
          }
        return n;
      }
      function Ur(e, t, n, r, i, a, o, s) {
        var u,
          l,
          c = Ot(t, n),
          h = t.inputs;
        !s && null != h && (u = h[r])
          ? (li(e, n, u, r, i),
            Ct(t) &&
              (function (e, t) {
                var n = Rt(t, e);
                16 & n[2] || (n[2] |= 64);
              })(n, t.index))
          : 3 === t.type &&
            ((r =
              "class" === (l = r)
                ? "className"
                : "for" === l
                ? "htmlFor"
                : "formaction" === l
                ? "formAction"
                : "innerHtml" === l
                ? "innerHTML"
                : "readonly" === l
                ? "readOnly"
                : "tabindex" === l
                ? "tabIndex"
                : l),
            (i = null != o ? o(i, t.tagName || "", r) : i),
            Tt(a)
              ? a.setProperty(c, r, i)
              : Cn(r) || (c.setProperty ? c.setProperty(r, i) : (c[r] = i)));
      }
      function Hr(e, t, n, r) {
        var i = !1;
        if (Ut()) {
          var a = (function (e, t, n) {
              var r = e.directiveRegistry,
                i = null;
              if (r)
                for (var a = 0; a < r.length; a++) {
                  var o = r[a];
                  pr(n, o.selectors, !1) &&
                    (i || (i = []),
                    Un(Nn(n, t), e, o.type),
                    bt(o)
                      ? (2 & n.flags && or(n), Gr(e, n), i.unshift(o))
                      : i.push(o));
                }
              return i;
            })(e, t, n),
            o = null === r ? null : { "": -1 };
          if (null !== a) {
            var s = 0;
            (i = !0), Kr(n, e.data.length, a.length);
            for (var u = 0; u < a.length; u++) {
              var l = a[u];
              l.providersResolver && l.providersResolver(l);
            }
            qr(e, n, a.length);
            for (var c = !1, h = !1, f = 0; f < a.length; f++) {
              var d = a[f];
              (n.mergedAttrs = wn(n.mergedAttrs, d.hostAttrs)),
                Zr(e, t, d),
                Wr(e.data.length - 1, d, o),
                null !== d.contentQueries && (n.flags |= 8),
                (null === d.hostBindings &&
                  null === d.hostAttrs &&
                  0 === d.hostVars) ||
                  (n.flags |= 128),
                !c &&
                  (d.onChanges || d.onInit || d.doCheck) &&
                  ((e.preOrderHooks || (e.preOrderHooks = [])).push(
                    n.index - 20
                  ),
                  (c = !0)),
                h ||
                  (!d.onChanges && !d.doCheck) ||
                  ((e.preOrderCheckHooks || (e.preOrderCheckHooks = [])).push(
                    n.index - 20
                  ),
                  (h = !0)),
                Vr(e, d),
                (s += d.hostVars);
            }
            !(function (e, t) {
              for (
                var n = t.directiveEnd,
                  r = e.data,
                  i = t.attrs,
                  a = [],
                  o = null,
                  s = null,
                  u = t.directiveStart;
                u < n;
                u++
              ) {
                var l = r[u],
                  c = l.inputs,
                  h = null === i || cr(t) ? null : Yr(c, i);
                a.push(h), (o = Lr(c, u, o)), (s = Lr(l.outputs, u, s));
              }
              null !== o &&
                (o.hasOwnProperty("class") && (t.flags |= 16),
                o.hasOwnProperty("style") && (t.flags |= 32)),
                (t.initialInputs = a),
                (t.inputs = o),
                (t.outputs = s);
            })(e, n),
              zr(e, t, s);
          }
          o &&
            (function (e, t, n) {
              if (t)
                for (var r = (e.localNames = []), i = 0; i < t.length; i += 2) {
                  var a = n[t[i + 1]];
                  if (null == a)
                    throw new Error(
                      "Export of name '".concat(t[i + 1], "' not found!")
                    );
                  r.push(t[i], a);
                }
            })(n, r, o);
        }
        return (n.mergedAttrs = wn(n.mergedAttrs, n.attrs)), i;
      }
      function Vr(e, t) {
        var n = e.expandoInstructions;
        n.push(t.hostBindings), 0 !== t.hostVars && n.push(t.hostVars);
      }
      function zr(e, t, n) {
        for (var r = 0; r < n; r++)
          t.push(mr), e.blueprint.push(mr), e.data.push(null);
      }
      function Br(e, t) {
        null !== e.hostBindings && e.hostBindings(1, t);
      }
      function qr(e, t, n) {
        var r = 20 - t.index,
          i = e.data.length - (65535 & t.providerIndexes);
        (e.expandoInstructions || (e.expandoInstructions = [])).push(r, i, n);
      }
      function Gr(e, t) {
        (t.flags |= 2), (e.components || (e.components = [])).push(t.index);
      }
      function Wr(e, t, n) {
        if (n) {
          if (t.exportAs)
            for (var r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
          bt(t) && (n[""] = e);
        }
      }
      function Kr(e, t, n) {
        (e.flags |= 1),
          (e.directiveStart = t),
          (e.directiveEnd = t + n),
          (e.providerIndexes = t);
      }
      function Zr(e, t, n) {
        e.data.push(n);
        var r = n.factory || (n.factory = yt(n.type)),
          i = new mn(r, bt(n), null);
        e.blueprint.push(i), t.push(i);
      }
      function Qr(e, t, n) {
        var r = Ot(t, e),
          i = Nr(n),
          a = e[10],
          o = ti(
            e,
            xr(e, i, null, n.onPush ? 64 : 16, r, t, a, a.createRenderer(r, n))
          );
        e[t.index] = o;
      }
      function $r(e, t, n, r, i, a) {
        var o = a[t];
        if (null !== o)
          for (var s = r.setInput, u = 0; u < o.length; ) {
            var l = o[u++],
              c = o[u++],
              h = o[u++];
            null !== s ? r.setInput(n, h, l, c) : (n[c] = h);
          }
      }
      function Yr(e, t) {
        for (var n = null, r = 0; r < t.length; ) {
          var i = t[r];
          if (0 !== i)
            if (5 !== i) {
              if ("number" == typeof i) break;
              e.hasOwnProperty(i) &&
                (null === n && (n = []), n.push(i, e[i], t[r + 1])),
                (r += 2);
            } else r += 2;
          else r += 4;
        }
        return n;
      }
      function Jr(e, t, n, r) {
        return new Array(e, !0, !1, t, null, 0, r, n, null, null);
      }
      function Xr(e, t) {
        var n = Rt(t, e);
        if (Mt(n)) {
          var r = n[1];
          80 & n[2]
            ? Ar(r, n, r.template, n[8])
            : n[5] > 0 &&
              (function e(t) {
                for (var n = kr(t); null !== n; n = Cr(n))
                  for (var r = 10; r < n.length; r++) {
                    var i = n[r];
                    if (1024 & i[2]) {
                      var a = i[1];
                      Ar(a, i, a.template, i[8]);
                    } else i[5] > 0 && e(i);
                  }
                var o = t[1].components;
                if (null !== o)
                  for (var s = 0; s < o.length; s++) {
                    var u = Rt(o[s], t);
                    Mt(u) && u[5] > 0 && e(u);
                  }
              })(n);
        }
      }
      function ei(e, t) {
        var n = Rt(t, e),
          r = n[1];
        !(function (e, t) {
          for (var n = t.length; n < e.blueprint.length; n++)
            t.push(e.blueprint[n]);
        })(r, n),
          Or(r, n, n[8]);
      }
      function ti(e, t) {
        return e[13] ? (e[14][4] = t) : (e[13] = t), (e[14] = t), t;
      }
      function ni(e) {
        for (; e; ) {
          e[2] |= 64;
          var t = _r(e);
          if (St(e) && !t) return e;
          e = t;
        }
        return null;
      }
      function ri(e, t, n) {
        var r = t[10];
        r.begin && r.begin();
        try {
          Ar(e, t, e.template, n);
        } catch (i) {
          throw (ui(t, i), i);
        } finally {
          r.end && r.end();
        }
      }
      function ii(e) {
        !(function (e) {
          for (var t = 0; t < e.components.length; t++) {
            var n = e.components[t],
              r = Dt(n),
              i = r[1];
            Ir(i, r, i.template, n);
          }
        })(e[8]);
      }
      function ai(e, t, n) {
        Jt(0), t(e, n);
      }
      var oi = Promise.resolve(null);
      function si(e) {
        return e[7] || (e[7] = []);
      }
      function ui(e, t) {
        var n = e[9],
          r = n ? n.get($n, null) : null;
        r && r.handleError(t);
      }
      function li(e, t, n, r, i) {
        for (var a = 0; a < n.length; ) {
          var o = n[a++],
            s = n[a++],
            u = t[o],
            l = e.data[o];
          null !== l.setInput ? l.setInput(u, i, r, s) : (u[s] = i);
        }
      }
      function ci(e, t, n) {
        var r = (function (e, t) {
            return Pt(t[e + 20]);
          })(t, e),
          i = e[11];
        Tt(i) ? i.setValue(r, n) : (r.textContent = n);
      }
      function hi(e, t) {
        var n = t[3];
        return -1 === e.index ? (_t(n) ? n : null) : n;
      }
      function fi(e, t) {
        var n = hi(e, t);
        return n ? bi(t[11], n[7]) : null;
      }
      function di(e, t, n, r, i) {
        if (null != r) {
          var a,
            o = !1;
          _t(r) ? (a = r) : mt(r) && ((o = !0), (r = r[0]));
          var s = Pt(r);
          0 === e && null !== n
            ? null == i
              ? Ci(t, n, s)
              : ki(t, n, s, i || null)
            : 1 === e && null !== n
            ? ki(t, n, s, i || null)
            : 2 === e
            ? (function (e, t, n) {
                var r = bi(e, t);
                r &&
                  (function (e, t, n, r) {
                    Tt(e) ? e.removeChild(t, n, r) : t.removeChild(n);
                  })(e, r, t, n);
              })(t, s, o)
            : 3 === e && t.destroyNode(s),
            null != a &&
              (function (e, t, n, r, i) {
                var a = n[7];
                a !== Pt(n) && di(t, e, r, a, i);
                for (var o = 10; o < n.length; o++) {
                  var s = n[o];
                  xi(s[1], s, e, t, r, a);
                }
              })(t, e, a, n, i);
        }
      }
      function vi(e, t, n, r) {
        var i = fi(e.node, t);
        i && xi(e, t, t[11], n ? 1 : 2, i, r);
      }
      function pi(e, t) {
        var n = e[9],
          r = n.indexOf(t);
        1024 & t[2] && jt(t[3], -1), n.splice(r, 1);
      }
      function yi(e, t) {
        if (!(e.length <= 10)) {
          var n = 10 + t,
            r = e[n];
          if (r) {
            var i = r[17];
            null !== i && i !== e && pi(i, r), t > 0 && (e[n - 1][4] = r[4]);
            var a = tt(e, 10 + t);
            vi(r[1], r, !1, null);
            var o = a[19];
            null !== o && o.detachView(a[1]),
              (r[3] = null),
              (r[4] = null),
              (r[2] &= -129);
          }
          return r;
        }
      }
      function gi(e, t) {
        if (!(256 & t[2])) {
          var n = t[11];
          Tt(n) && n.destroyNode && xi(e, t, n, 3, null, null),
            (function (e) {
              var t = e[13];
              if (!t) return _i(e[1], e);
              for (; t; ) {
                var n = null;
                if (mt(t)) n = t[13];
                else {
                  var r = t[10];
                  r && (n = r);
                }
                if (!n) {
                  for (; t && !t[4] && t !== e; )
                    mt(t) && _i(t[1], t), (t = mi(t, e));
                  null === t && (t = e), mt(t) && _i(t[1], t), (n = t && t[4]);
                }
                t = n;
              }
            })(t);
        }
      }
      function mi(e, t) {
        var n;
        return mt(e) && (n = e[6]) && 2 === n.type
          ? hi(n, e)
          : e[3] === t
          ? null
          : e[3];
      }
      function _i(e, t) {
        if (!(256 & t[2])) {
          (t[2] &= -129),
            (t[2] |= 256),
            (function (e, t) {
              var n;
              if (null != e && null != (n = e.destroyHooks))
                for (var r = 0; r < n.length; r += 2) {
                  var i = t[n[r]];
                  if (!(i instanceof mn)) {
                    var a = n[r + 1];
                    if (Array.isArray(a))
                      for (var o = 0; o < a.length; o += 2)
                        a[o + 1].call(i[a[o]]);
                    else a.call(i);
                  }
                }
            })(e, t),
            (function (e, t) {
              var n = e.cleanup;
              if (null !== n) {
                for (var r = t[7], i = 0; i < n.length - 1; i += 2)
                  if ("string" == typeof n[i]) {
                    var a = n[i + 1],
                      o = "function" == typeof a ? a(t) : Pt(t[a]),
                      s = r[n[i + 2]],
                      u = n[i + 3];
                    "boolean" == typeof u
                      ? o.removeEventListener(n[i], s, u)
                      : u >= 0
                      ? r[u]()
                      : r[-u].unsubscribe(),
                      (i += 2);
                  } else n[i].call(r[n[i + 1]]);
                t[7] = null;
              }
            })(e, t);
          var n = t[6];
          n && 3 === n.type && Tt(t[11]) && t[11].destroy();
          var r = t[17];
          if (null !== r && _t(t[3])) {
            r !== t[3] && pi(r, t);
            var i = t[19];
            null !== i && i.detachView(e);
          }
        }
      }
      function ki(e, t, n, r) {
        Tt(e) ? e.insertBefore(t, n, r) : t.insertBefore(n, r, !0);
      }
      function Ci(e, t, n) {
        Tt(e) ? e.appendChild(t, n) : t.appendChild(n);
      }
      function wi(e, t, n, r) {
        null !== r ? ki(e, t, n, r) : Ci(e, t, n);
      }
      function bi(e, t) {
        return Tt(e) ? e.parentNode(t) : t.parentNode;
      }
      function Si(e, t, n, r) {
        var i = (function (e, t, n) {
          for (var r = t.parent; null != r && (4 === r.type || 5 === r.type); )
            r = (t = r).parent;
          if (null == r) {
            var i = n[6];
            return 2 === i.type ? fi(i, n) : n[0];
          }
          if (t && 5 === t.type && 4 & t.flags) return Ot(t, n).parentNode;
          if (2 & r.flags) {
            var a = e.data,
              o = a[a[r.index].directiveStart].encapsulation;
            if (o !== rt.ShadowDom && o !== rt.Native) return null;
          }
          return Ot(r, n);
        })(e, r, t);
        if (null != i) {
          var a = t[11],
            o = (function (e, t) {
              if (2 === e.type) {
                var n = hi(e, t);
                return null === n ? null : Ei(n.indexOf(t, 10) - 10, n);
              }
              return 4 === e.type || 5 === e.type ? Ot(e, t) : null;
            })(r.parent || t[6], t);
          if (Array.isArray(n))
            for (var s = 0; s < n.length; s++) wi(a, i, n[s], o);
          else wi(a, i, n, o);
        }
      }
      function Ei(e, t) {
        var n = 10 + e + 1;
        if (n < t.length) {
          var r = t[n],
            i = r[1].firstChild;
          if (null !== i)
            return (function e(t, n) {
              if (null !== n) {
                var r = n.type;
                if (3 === r) return Ot(n, t);
                if (0 === r) return Ei(-1, t[n.index]);
                if (4 === r || 5 === r) {
                  var i = n.child;
                  if (null !== i) return e(t, i);
                  var a = t[n.index];
                  return _t(a) ? Ei(-1, a) : Pt(a);
                }
                var o = t[16],
                  s = o[6],
                  u = _r(o),
                  l = s.projection[n.projection];
                return null != l ? e(u, l) : e(t, n.next);
              }
              return null;
            })(r, i);
        }
        return t[7];
      }
      function Ti(e, t, n, r, i, a, o) {
        for (; null != n; ) {
          var s = r[n.index],
            u = n.type;
          o && 0 === t && (s && ar(Pt(s), r), (n.flags |= 4)),
            64 != (64 & n.flags) &&
              (4 === u || 5 === u
                ? (Ti(e, t, n.child, r, i, a, !1), di(t, e, i, s, a))
                : 1 === u
                ? Pi(e, t, r, n, i, a)
                : di(t, e, i, s, a)),
            (n = o ? n.projectionNext : n.next);
        }
      }
      function xi(e, t, n, r, i, a) {
        Ti(n, r, e.node.child, t, i, a, !1);
      }
      function Pi(e, t, n, r, i, a) {
        var o = n[16],
          s = o[6].projection[r.projection];
        if (Array.isArray(s))
          for (var u = 0; u < s.length; u++) di(t, e, i, s[u], a);
        else Ti(e, t, s, o[3], i, a, !0);
      }
      function Oi(e, t, n) {
        Tt(e) ? e.setAttribute(t, "style", n) : (t.style.cssText = n);
      }
      function Ai(e, t, n) {
        Tt(e)
          ? "" === n
            ? e.removeAttribute(t, "class")
            : e.setAttribute(t, "class", n)
          : (t.className = n);
      }
      var Ii,
        Ri,
        Di,
        Mi = (function () {
          function e(t, n) {
            _classCallCheck(this, e),
              (this._lView = t),
              (this._cdRefInjectingView = n),
              (this._appRef = null),
              (this._viewContainerRef = null);
          }
          return (
            _createClass(e, [
              {
                key: "destroy",
                value: function () {
                  if (this._appRef) this._appRef.detachView(this);
                  else if (this._viewContainerRef) {
                    var e = this._viewContainerRef.indexOf(this);
                    e > -1 && this._viewContainerRef.detach(e),
                      (this._viewContainerRef = null);
                  }
                  gi(this._lView[1], this._lView);
                },
              },
              {
                key: "onDestroy",
                value: function (e) {
                  var t, n, r;
                  (t = this._lView[1]),
                    (r = e),
                    si((n = this._lView)).push(r),
                    t.firstCreatePass &&
                      (function (e) {
                        return e.cleanup || (e.cleanup = []);
                      })(t).push(n[7].length - 1, null);
                },
              },
              {
                key: "markForCheck",
                value: function () {
                  ni(this._cdRefInjectingView || this._lView);
                },
              },
              {
                key: "detach",
                value: function () {
                  this._lView[2] &= -129;
                },
              },
              {
                key: "reattach",
                value: function () {
                  this._lView[2] |= 128;
                },
              },
              {
                key: "detectChanges",
                value: function () {
                  ri(this._lView[1], this._lView, this.context);
                },
              },
              {
                key: "checkNoChanges",
                value: function () {
                  !(function (e, t, n) {
                    Wt(!0);
                    try {
                      ri(e, t, n);
                    } finally {
                      Wt(!1);
                    }
                  })(this._lView[1], this._lView, this.context);
                },
              },
              {
                key: "attachToViewContainerRef",
                value: function (e) {
                  if (this._appRef)
                    throw new Error(
                      "This view is already attached directly to the ApplicationRef!"
                    );
                  this._viewContainerRef = e;
                },
              },
              {
                key: "detachFromAppRef",
                value: function () {
                  var e;
                  (this._appRef = null),
                    xi(this._lView[1], (e = this._lView), e[11], 2, null, null);
                },
              },
              {
                key: "attachToAppRef",
                value: function (e) {
                  if (this._viewContainerRef)
                    throw new Error(
                      "This view is already attached to a ViewContainer!"
                    );
                  this._appRef = e;
                },
              },
              {
                key: "rootNodes",
                get: function () {
                  var e = this._lView;
                  return null == e[0]
                    ? (function e(t, n, r, i) {
                        for (
                          var a =
                            arguments.length > 4 &&
                            void 0 !== arguments[4] &&
                            arguments[4];
                          null !== r;

                        ) {
                          var o = n[r.index];
                          if ((null !== o && i.push(Pt(o)), _t(o)))
                            for (var s = 10; s < o.length; s++) {
                              var u = o[s],
                                l = u[1].firstChild;
                              null !== l && e(u[1], u, l, i);
                            }
                          var c = r.type;
                          if (4 === c || 5 === c) e(t, n, r.child, i);
                          else if (1 === c) {
                            var h = n[16],
                              f = h[6].projection[r.projection];
                            if (Array.isArray(f))
                              i.push.apply(i, _toConsumableArray(f));
                            else {
                              var d = _r(h);
                              e(d[1], d, f, i, !0);
                            }
                          }
                          r = a ? r.projectionNext : r.next;
                        }
                        return i;
                      })(e[1], e, e[6].child, [])
                    : [];
                },
              },
              {
                key: "context",
                get: function () {
                  return this._lView[8];
                },
              },
              {
                key: "destroyed",
                get: function () {
                  return 256 == (256 & this._lView[2]);
                },
              },
            ]),
            e
          );
        })(),
        Ni = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e) {
            var r;
            return (
              _classCallCheck(this, n), ((r = t.call(this, e))._view = e), r
            );
          }
          return (
            _createClass(n, [
              {
                key: "detectChanges",
                value: function () {
                  ii(this._view);
                },
              },
              {
                key: "checkNoChanges",
                value: function () {
                  !(function (e) {
                    Wt(!0);
                    try {
                      ii(e);
                    } finally {
                      Wt(!1);
                    }
                  })(this._view);
                },
              },
              {
                key: "context",
                get: function () {
                  return null;
                },
              },
            ]),
            n
          );
        })(Mi);
      function Fi(e, t, n) {
        return (
          Ii ||
            (Ii = (function (e) {
              _inherits(n, e);
              var t = _createSuper(n);
              function n() {
                return _classCallCheck(this, n), t.apply(this, arguments);
              }
              return n;
            })(e)),
          new Ii(Ot(t, n))
        );
      }
      var ji = (function () {
          var e = function e() {
            _classCallCheck(this, e);
          };
          return (
            (e.__NG_ELEMENT_ID__ = function () {
              return Li();
            }),
            e
          );
        })(),
        Li = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return (function (e, t, n) {
            if (!n && Ct(e)) {
              var r = Rt(e.index, t);
              return new Mi(r, r);
            }
            return 3 === e.type || 0 === e.type || 4 === e.type || 5 === e.type
              ? new Mi(t[16], t)
              : null;
          })(zt(), Ht(), e);
        },
        Ui = new Le("Set Injector scope."),
        Hi = {},
        Vi = {},
        zi = [],
        Bi = void 0;
      function qi() {
        return void 0 === Bi && (Bi = new $e()), Bi;
      }
      function Gi(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null,
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : null,
          r = arguments.length > 3 ? arguments[3] : void 0;
        return new Wi(e, n, t || qi(), r);
      }
      var Wi = (function () {
        function e(t, n, r) {
          var i = this,
            a =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : null;
          _classCallCheck(this, e),
            (this.parent = r),
            (this.records = new Map()),
            (this.injectorDefTypes = new Set()),
            (this.onDestroy = new Set()),
            (this._destroyed = !1);
          var o = [];
          n &&
            Xe(n, function (e) {
              return i.processProvider(e, t, n);
            }),
            Xe([t], function (e) {
              return i.processInjectorType(e, [], o);
            }),
            this.records.set(Ue, Qi(void 0, this));
          var s = this.records.get(Ui);
          (this.scope = null != s ? s.value : null),
            (this.source = a || ("object" == typeof t ? null : ke(t)));
        }
        return (
          _createClass(e, [
            {
              key: "destroy",
              value: function () {
                this.assertNotDestroyed(), (this._destroyed = !0);
                try {
                  this.onDestroy.forEach(function (e) {
                    return e.ngOnDestroy();
                  });
                } finally {
                  this.records.clear(),
                    this.onDestroy.clear(),
                    this.injectorDefTypes.clear();
                }
              },
            },
            {
              key: "get",
              value: function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : He,
                  n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : ue.Default;
                this.assertNotDestroyed();
                var r,
                  i = qe(this);
                try {
                  if (!(n & ue.SkipSelf)) {
                    var a = this.records.get(e);
                    if (void 0 === a) {
                      var o =
                        ("function" == typeof (r = e) ||
                          ("object" == typeof r && r instanceof Le)) &&
                        fe(e);
                      (a =
                        o && this.injectableDefInScope(o)
                          ? Qi(Ki(e), Hi)
                          : null),
                        this.records.set(e, a);
                    }
                    if (null != a) return this.hydrate(e, a);
                  }
                  return (n & ue.Self ? qi() : this.parent).get(
                    e,
                    (t = n & ue.Optional && t === He ? null : t)
                  );
                } catch (s) {
                  if ("NullInjectorError" === s.name) {
                    if (
                      ((s.ngTempTokenPath = s.ngTempTokenPath || []).unshift(
                        ke(e)
                      ),
                      i)
                    )
                      throw s;
                    return (function (e, t, n, r) {
                      var i = e.ngTempTokenPath;
                      throw (
                        (t.__source && i.unshift(t.__source),
                        (e.message = (function (e, t, n) {
                          var r =
                            arguments.length > 3 && void 0 !== arguments[3]
                              ? arguments[3]
                              : null;
                          e =
                            e && "\n" === e.charAt(0) && "\u0275" == e.charAt(1)
                              ? e.substr(2)
                              : e;
                          var i = ke(t);
                          if (Array.isArray(t)) i = t.map(ke).join(" -> ");
                          else if ("object" == typeof t) {
                            var a = [];
                            for (var o in t)
                              if (t.hasOwnProperty(o)) {
                                var s = t[o];
                                a.push(
                                  o +
                                    ":" +
                                    ("string" == typeof s
                                      ? JSON.stringify(s)
                                      : ke(s))
                                );
                              }
                            i = "{".concat(a.join(", "), "}");
                          }
                          return ""
                            .concat(n)
                            .concat(r ? "(" + r + ")" : "", "[")
                            .concat(i, "]: ")
                            .concat(e.replace(Ve, "\n  "));
                        })("\n" + e.message, i, "R3InjectorError", r)),
                        (e.ngTokenPath = i),
                        (e.ngTempTokenPath = null),
                        e)
                      );
                    })(s, e, 0, this.source);
                  }
                  throw s;
                } finally {
                  qe(i);
                }
              },
            },
            {
              key: "_resolveInjectorDefTypes",
              value: function () {
                var e = this;
                this.injectorDefTypes.forEach(function (t) {
                  return e.get(t);
                });
              },
            },
            {
              key: "toString",
              value: function () {
                var e = [];
                return (
                  this.records.forEach(function (t, n) {
                    return e.push(ke(n));
                  }),
                  "R3Injector[".concat(e.join(", "), "]")
                );
              },
            },
            {
              key: "assertNotDestroyed",
              value: function () {
                if (this._destroyed)
                  throw new Error("Injector has already been destroyed.");
              },
            },
            {
              key: "processInjectorType",
              value: function (e, t, n) {
                var r = this;
                if (!(e = Se(e))) return !1;
                var i = ve(e),
                  a = (null == i && e.ngModule) || void 0,
                  o = void 0 === a ? e : a,
                  s = -1 !== n.indexOf(o);
                if ((void 0 !== a && (i = ve(a)), null == i)) return !1;
                if (null != i.imports && !s) {
                  var u;
                  n.push(o);
                  try {
                    Xe(i.imports, function (e) {
                      r.processInjectorType(e, t, n) &&
                        (void 0 === u && (u = []), u.push(e));
                    });
                  } finally {
                  }
                  if (void 0 !== u)
                    for (
                      var l = function (e) {
                          var t = u[e],
                            n = t.ngModule,
                            i = t.providers;
                          Xe(i, function (e) {
                            return r.processProvider(e, n, i || zi);
                          });
                        },
                        c = 0;
                      c < u.length;
                      c++
                    )
                      l(c);
                }
                this.injectorDefTypes.add(o),
                  this.records.set(o, Qi(i.factory, Hi));
                var h = i.providers;
                if (null != h && !s) {
                  var f = e;
                  Xe(h, function (e) {
                    return r.processProvider(e, f, h);
                  });
                }
                return void 0 !== a && void 0 !== e.providers;
              },
            },
            {
              key: "processProvider",
              value: function (e, t, n) {
                var r = Yi((e = Se(e))) ? e : Se(e && e.provide),
                  i = (function (e, t, n) {
                    return $i(e) ? Qi(void 0, e.useValue) : Qi(Zi(e, t, n), Hi);
                  })(e, t, n);
                if (Yi(e) || !0 !== e.multi) {
                  var a = this.records.get(r);
                  a && void 0 !== a.multi && sr();
                } else {
                  var o = this.records.get(r);
                  o
                    ? void 0 === o.multi && sr()
                    : (((o = Qi(void 0, Hi, !0)).factory = function () {
                        return Qe(o.multi);
                      }),
                      this.records.set(r, o)),
                    (r = e),
                    o.multi.push(e);
                }
                this.records.set(r, i);
              },
            },
            {
              key: "hydrate",
              value: function (e, t) {
                var n;
                return (
                  t.value === Vi
                    ? (function (e) {
                        throw new Error(
                          "Cannot instantiate cyclic dependency! " + e
                        );
                      })(ke(e))
                    : t.value === Hi &&
                      ((t.value = Vi), (t.value = t.factory())),
                  "object" == typeof t.value &&
                    t.value &&
                    null !== (n = t.value) &&
                    "object" == typeof n &&
                    "function" == typeof n.ngOnDestroy &&
                    this.onDestroy.add(t.value),
                  t.value
                );
              },
            },
            {
              key: "injectableDefInScope",
              value: function (e) {
                return (
                  !!e.providedIn &&
                  ("string" == typeof e.providedIn
                    ? "any" === e.providedIn || e.providedIn === this.scope
                    : this.injectorDefTypes.has(e.providedIn))
                );
              },
            },
            {
              key: "destroyed",
              get: function () {
                return this._destroyed;
              },
            },
          ]),
          e
        );
      })();
      function Ki(e) {
        var t = fe(e),
          n = null !== t ? t.factory : yt(e);
        if (null !== n) return n;
        var r = ve(e);
        if (null !== r) return r.factory;
        if (e instanceof Le)
          throw new Error(
            "Token ".concat(ke(e), " is missing a \u0275prov definition.")
          );
        if (e instanceof Function)
          return (function (e) {
            var t = e.length;
            if (t > 0) {
              var n = (function (e, t) {
                for (var n = [], r = 0; r < e; r++) n.push("?");
                return n;
              })(t);
              throw new Error(
                "Can't resolve all parameters for "
                  .concat(ke(e), ": (")
                  .concat(n.join(", "), ").")
              );
            }
            var r = (function (e) {
              var t = e && (e[pe] || e[me] || (e[ge] && e[ge]()));
              if (t) {
                var n = (function (e) {
                  if (e.hasOwnProperty("name")) return e.name;
                  var t = ("" + e).match(/^function\s*([^\s(]+)/);
                  return null === t ? "" : t[1];
                })(e);
                return (
                  console.warn(
                    'DEPRECATED: DI is instantiating a token "'
                      .concat(
                        n,
                        '" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in v10. Please add @Injectable() to the "'
                      )
                      .concat(n, '" class.')
                  ),
                  t
                );
              }
              return null;
            })(e);
            return null !== r
              ? function () {
                  return r.factory(e);
                }
              : function () {
                  return new e();
                };
          })(e);
        throw new Error("unreachable");
      }
      function Zi(e, t, n) {
        var r,
          i = void 0;
        if (Yi(e)) {
          var a = Se(e);
          return yt(a) || Ki(a);
        }
        if ($i(e))
          i = function () {
            return Se(e.useValue);
          };
        else if ((r = e) && r.useFactory)
          i = function () {
            return e.useFactory.apply(e, _toConsumableArray(Qe(e.deps || [])));
          };
        else if (
          (function (e) {
            return !(!e || !e.useExisting);
          })(e)
        )
          i = function () {
            return Ke(Se(e.useExisting));
          };
        else {
          var o = Se(e && (e.useClass || e.provide));
          if (
            (o ||
              (function (e, t, n) {
                var r = "";
                throw (
                  (e &&
                    t &&
                    (r = " - only instances of Provider and Type are allowed, got: [".concat(
                      t
                        .map(function (e) {
                          return e == n ? "?" + n + "?" : "...";
                        })
                        .join(", "),
                      "]"
                    )),
                  new Error(
                    "Invalid provider for the NgModule '".concat(ke(e), "'") + r
                  ))
                );
              })(t, n, e),
            !(function (e) {
              return !!e.deps;
            })(e))
          )
            return yt(o) || Ki(o);
          i = function () {
            return _construct(o, _toConsumableArray(Qe(e.deps)));
          };
        }
        return i;
      }
      function Qi(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return { factory: e, value: t, multi: n ? [] : void 0 };
      }
      function $i(e) {
        return null !== e && "object" == typeof e && ze in e;
      }
      function Yi(e) {
        return "function" == typeof e;
      }
      var Ji = function (e, t, n) {
          return (function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null,
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : null,
              r = arguments.length > 3 ? arguments[3] : void 0,
              i = Gi(e, t, n, r);
            return i._resolveInjectorDefTypes(), i;
          })({ name: n }, t, e, n);
        },
        Xi = (function () {
          var e = (function () {
            function e() {
              _classCallCheck(this, e);
            }
            return (
              _createClass(e, null, [
                {
                  key: "create",
                  value: function (e, t) {
                    return Array.isArray(e)
                      ? Ji(e, t, "")
                      : Ji(e.providers, e.parent, e.name || "");
                  },
                },
              ]),
              e
            );
          })();
          return (
            (e.THROW_IF_NOT_FOUND = He),
            (e.NULL = new $e()),
            (e.ɵprov = ce({
              token: e,
              providedIn: "any",
              factory: function () {
                return Ke(Ue);
              },
            })),
            (e.__NG_ELEMENT_ID__ = -1),
            e
          );
        })(),
        ea = new Le("AnalyzeForEntryComponents"),
        ta = new Map(),
        na = new Set();
      function ra(e) {
        return "string" == typeof e ? e : e.text();
      }
      function ia(e, t, n) {
        var r = n ? e.styles : null,
          i = n ? e.classes : null,
          a = 0;
        if (null !== t)
          for (var o = 0; o < t.length; o++) {
            var s = t[o];
            "number" == typeof s
              ? (a = s)
              : 1 == a
              ? (i = Ce(i, s))
              : 2 == a && (r = Ce(r, s + ": " + t[++o] + ";"));
          }
        n ? (e.styles = r) : (e.stylesWithoutHost = r),
          n ? (e.classes = i) : (e.classesWithoutHost = i);
      }
      var aa = null;
      function oa() {
        if (!aa) {
          var e = Ae.Symbol;
          if (e && e.iterator) aa = e.iterator;
          else
            for (
              var t = Object.getOwnPropertyNames(Map.prototype), n = 0;
              n < t.length;
              ++n
            ) {
              var r = t[n];
              "entries" !== r &&
                "size" !== r &&
                Map.prototype[r] === Map.prototype.entries &&
                (aa = r);
            }
        }
        return aa;
      }
      function sa(e, t) {
        return (
          e === t ||
          ("number" == typeof e && "number" == typeof t && isNaN(e) && isNaN(t))
        );
      }
      var ua = (function () {
        function e(t) {
          _classCallCheck(this, e), (this.wrapped = t);
        }
        return (
          _createClass(e, null, [
            {
              key: "wrap",
              value: function (t) {
                return new e(t);
              },
            },
            {
              key: "unwrap",
              value: function (t) {
                return e.isWrapped(t) ? t.wrapped : t;
              },
            },
            {
              key: "isWrapped",
              value: function (t) {
                return t instanceof e;
              },
            },
          ]),
          e
        );
      })();
      function la(e) {
        return (
          !!ca(e) && (Array.isArray(e) || (!(e instanceof Map) && oa() in e))
        );
      }
      function ca(e) {
        return null !== e && ("function" == typeof e || "object" == typeof e);
      }
      function ha(e, t, n) {
        return (e[t] = n);
      }
      function fa(e, t, n) {
        return !Object.is(e[t], n) && ((e[t] = n), !0);
      }
      function da(e, t, n, r) {
        var i = fa(e, t, n);
        return fa(e, t + 1, r) || i;
      }
      function va(e, t, n, r) {
        return fa(e, Qt(), n) ? t + Pn(n) + r : mr;
      }
      function pa(e, t, n, r, i, a, o, s) {
        var u = Ht(),
          l = Vt(),
          c = e + 20,
          h = l.firstCreatePass
            ? (function (e, t, n, r, i, a, o, s, u) {
                var l = t.consts,
                  c = Pr(t, n[6], e, 0, o || null, Nt(l, s));
                Hr(t, n, c, Nt(l, u)), fn(t, c);
                var h = (c.tViews = Fr(
                    2,
                    -1,
                    r,
                    i,
                    a,
                    t.directiveRegistry,
                    t.pipeRegistry,
                    null,
                    t.schemas,
                    l
                  )),
                  f = jr(0, null, 2, -1, null, null);
                return (
                  (f.injectorIndex = c.injectorIndex),
                  (h.node = f),
                  null !== t.queries &&
                    (t.queries.template(t, c),
                    (h.queries = t.queries.embeddedTView(c))),
                  c
                );
              })(e, l, u, t, n, r, i, a, o)
            : l.data[c];
        Bt(h, !1);
        var f = u[11].createComment("");
        Si(l, u, f, h),
          ar(f, u),
          ti(u, (u[c] = Jr(f, u, f, h))),
          wt(h) && Dr(l, u, h),
          null != o && Mr(u, h, s);
      }
      function ya(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : ue.Default,
          n = Ht();
        return null == n ? Ke(e, t) : Hn(zt(), n, Se(e), t);
      }
      function ga(e) {
        return (function (e, t) {
          if ("class" === t) return e.classes;
          if ("style" === t) return e.styles;
          var n = e.attrs;
          if (n)
            for (var r = n.length, i = 0; i < r; ) {
              var a = n[i];
              if (kn(a)) break;
              if (0 === a) i += 2;
              else if ("number" == typeof a)
                for (i++; i < r && "string" == typeof n[i]; ) i++;
              else {
                if (a === t) return n[i + 1];
                i += 2;
              }
            }
          return null;
        })(zt(), e);
      }
      function ma() {
        throw new Error("invalid");
      }
      function _a(e, t, n) {
        var r = Ht();
        return fa(r, Qt(), t) && Ur(Vt(), ln(), r, e, t, r[11], n, !1), _a;
      }
      function ka(e, t, n, r, i) {
        var a = i ? "class" : "style";
        li(e, n, t.inputs[a], a, r);
      }
      function Ca(e, t, n, r) {
        var i = Ht(),
          a = Vt(),
          o = 20 + e,
          s = i[11],
          u = (i[o] = Tr(t, s, Lt.lFrame.currentNamespace)),
          l = a.firstCreatePass
            ? (function (e, t, n, r, i, a, o) {
                var s = t.consts,
                  u = Nt(s, a),
                  l = Pr(t, n[6], e, 3, i, u);
                return (
                  Hr(t, n, l, Nt(s, o)),
                  null !== l.attrs && ia(l, l.attrs, !1),
                  null !== l.mergedAttrs && ia(l, l.mergedAttrs, !0),
                  null !== t.queries && t.queries.elementStart(t, l),
                  l
                );
              })(e, a, i, 0, t, n, r)
            : a.data[o];
        Bt(l, !0);
        var c = l.mergedAttrs;
        null !== c && _n(s, u, c);
        var h = l.classes;
        null !== h && Ai(s, u, h);
        var f = l.styles;
        null !== f && Oi(s, u, f),
          Si(a, i, u, l),
          0 === Lt.lFrame.elementDepthCount && ar(u, i),
          Lt.lFrame.elementDepthCount++,
          wt(l) &&
            (Dr(a, i, l),
            (function (e, t, n) {
              if (kt(t))
                for (var r = t.directiveEnd, i = t.directiveStart; i < r; i++) {
                  var a = e.data[i];
                  a.contentQueries && a.contentQueries(1, n[i], i);
                }
            })(a, l, i)),
          null !== r && Mr(i, l);
      }
      function wa() {
        var e = zt();
        qt() ? (Lt.lFrame.isParent = !1) : Bt((e = e.parent), !1);
        var t = e;
        Lt.lFrame.elementDepthCount--;
        var n = Vt();
        n.firstCreatePass && (fn(n, e), kt(e) && n.queries.elementEnd(e)),
          null != t.classesWithoutHost &&
            (function (e) {
              return 0 != (16 & e.flags);
            })(t) &&
            ka(n, t, Ht(), t.classesWithoutHost, !0),
          null != t.stylesWithoutHost &&
            (function (e) {
              return 0 != (32 & e.flags);
            })(t) &&
            ka(n, t, Ht(), t.stylesWithoutHost, !1);
      }
      function ba(e, t, n, r) {
        Ca(e, t, n, r), wa();
      }
      function Sa(e) {
        return !!e && "function" == typeof e.then;
      }
      function Ea(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          r = arguments.length > 3 ? arguments[3] : void 0,
          i = Ht(),
          a = Vt(),
          o = zt();
        return (
          (function (e, t, n, r, i, a) {
            var o =
                arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
              s = arguments.length > 7 ? arguments[7] : void 0,
              u = wt(r),
              l = e.firstCreatePass && (e.cleanup || (e.cleanup = [])),
              c = si(t),
              h = !0;
            if (3 === r.type) {
              var f = Ot(r, t),
                d = s ? s(f) : it,
                v = d.target || f,
                p = c.length,
                y = s
                  ? function (e) {
                      return s(Pt(e[r.index])).target;
                    }
                  : r.index;
              if (Tt(n)) {
                var g = null;
                if (
                  (!s &&
                    u &&
                    (g = (function (e, t, n, r) {
                      var i = e.cleanup;
                      if (null != i)
                        for (var a = 0; a < i.length - 1; a += 2) {
                          var o = i[a];
                          if (o === n && i[a + 1] === r) {
                            var s = t[7],
                              u = i[a + 2];
                            return s.length > u ? s[u] : null;
                          }
                          "string" == typeof o && (a += 2);
                        }
                      return null;
                    })(e, t, i, r.index)),
                  null !== g)
                )
                  ((g.__ngLastListenerFn__ || g).__ngNextListenerFn__ = a),
                    (g.__ngLastListenerFn__ = a),
                    (h = !1);
                else {
                  a = xa(r, t, a, !1);
                  var m = n.listen(d.name || v, i, a);
                  c.push(a, m), l && l.push(i, y, p, p + 1);
                }
              } else
                (a = xa(r, t, a, !0)),
                  v.addEventListener(i, a, o),
                  c.push(a),
                  l && l.push(i, y, p, o);
            }
            var _,
              k = r.outputs;
            if (h && null !== k && (_ = k[i])) {
              var C = _.length;
              if (C)
                for (var w = 0; w < C; w += 2) {
                  var b = t[_[w]][_[w + 1]].subscribe(a),
                    S = c.length;
                  c.push(a, b), l && l.push(i, r.index, S, -(S + 1));
                }
            }
          })(a, i, i[11], o, e, t, n, r),
          Ea
        );
      }
      function Ta(e, t, n) {
        try {
          return !1 !== t(n);
        } catch (r) {
          return ui(e, r), !1;
        }
      }
      function xa(e, t, n, r) {
        return function i(a) {
          if (a === Function) return n;
          var o = 2 & e.flags ? Rt(e.index, t) : t;
          0 == (32 & t[2]) && ni(o);
          for (var s = Ta(t, n, a), u = i.__ngNextListenerFn__; u; )
            (s = Ta(t, u, a) && s), (u = u.__ngNextListenerFn__);
          return r && !1 === s && (a.preventDefault(), (a.returnValue = !1)), s;
        };
      }
      function Pa(e, t, n) {
        return Oa(e, "", t, "", n), Pa;
      }
      function Oa(e, t, n, r, i) {
        var a = Ht(),
          o = va(a, t, n, r);
        return o !== mr && Ur(Vt(), ln(), a, e, o, a[11], i, !1), Oa;
      }
      function Aa(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          n = Ht(),
          r = Vt(),
          i = e + 20,
          a = r.firstCreatePass ? Pr(r, n[6], e, 3, null, null) : r.data[i],
          o = (n[i] = (function (e, t) {
            return Tt(t) ? t.createText(e) : t.createTextNode(e);
          })(t, n[11]));
        Si(r, n, o, a), Bt(a, !1);
      }
      function Ia(e) {
        return Ra("", e, ""), Ia;
      }
      function Ra(e, t, n) {
        var r = Ht(),
          i = va(r, e, t, n);
        return i !== mr && ci(r, sn(), i), Ra;
      }
      function Da(e, t, n, r, i) {
        var a = Ht(),
          o = (function (e, t, n, r, i, a) {
            var o,
              s = da(e, Zt(), n, i);
            return (
              ((o = Lt.lFrame).bindingIndex = o.bindingIndex + 2),
              s ? t + Pn(n) + r + Pn(i) + a : mr
            );
          })(a, e, t, n, r, i);
        return o !== mr && ci(a, sn(), o), Da;
      }
      function Ma(e, t) {
        var n = Dt(e)[1],
          r = n.data.length - 1;
        fn(n, { directiveStart: r, directiveEnd: r + 1 });
      }
      function Na(e, t, n, r, i) {
        if (((e = Se(e)), Array.isArray(e)))
          for (var a = 0; a < e.length; a++) Na(e[a], t, n, r, i);
        else {
          var o = Vt(),
            s = Ht(),
            u = Yi(e) ? e : Se(e.provide),
            l = Zi(e),
            c = zt(),
            h = 65535 & c.providerIndexes,
            f = c.directiveStart,
            d = c.providerIndexes >> 16;
          if (Yi(e) || !e.multi) {
            var v = new mn(l, i, ya),
              p = La(u, t, i ? h : h + d, f);
            -1 === p
              ? (Un(Nn(c, s), o, u),
                Fa(o, e, t.length),
                t.push(u),
                c.directiveStart++,
                c.directiveEnd++,
                i && (c.providerIndexes += 65536),
                n.push(v),
                s.push(v))
              : ((n[p] = v), (s[p] = v));
          } else {
            var y = La(u, t, h + d, f),
              g = La(u, t, h, h + d),
              m = y >= 0 && n[y],
              _ = g >= 0 && n[g];
            if ((i && !_) || (!i && !m)) {
              Un(Nn(c, s), o, u);
              var k = (function (e, t, n, r, i) {
                var a = new mn(e, n, ya);
                return (
                  (a.multi = []),
                  (a.index = t),
                  (a.componentProviders = 0),
                  ja(a, i, r && !n),
                  a
                );
              })(i ? Ha : Ua, n.length, i, r, l);
              !i && _ && (n[g].providerFactory = k),
                Fa(o, e, t.length, 0),
                t.push(u),
                c.directiveStart++,
                c.directiveEnd++,
                i && (c.providerIndexes += 65536),
                n.push(k),
                s.push(k);
            } else Fa(o, e, y > -1 ? y : g, ja(n[i ? g : y], l, !i && r));
            !i && r && _ && n[g].componentProviders++;
          }
        }
      }
      function Fa(e, t, n, r) {
        var i = Yi(t);
        if (i || t.useClass) {
          var a = (t.useClass || t).prototype.ngOnDestroy;
          if (a) {
            var o = e.destroyHooks || (e.destroyHooks = []);
            if (!i && t.multi) {
              var s = o.indexOf(n);
              -1 === s ? o.push(n, [r, a]) : o[s + 1].push(r, a);
            } else o.push(n, a);
          }
        }
      }
      function ja(e, t, n) {
        return n && e.componentProviders++, e.multi.push(t) - 1;
      }
      function La(e, t, n, r) {
        for (var i = n; i < r; i++) if (t[i] === e) return i;
        return -1;
      }
      function Ua(e, t, n, r) {
        return Va(this.multi, []);
      }
      function Ha(e, t, n, r) {
        var i,
          a = this.multi;
        if (this.providerFactory) {
          var o = this.providerFactory.componentProviders,
            s = Bn(n, n[1], this.providerFactory.index, r);
          Va(a, (i = s.slice(0, o)));
          for (var u = o; u < s.length; u++) i.push(s[u]);
        } else Va(a, (i = []));
        return i;
      }
      function Va(e, t) {
        for (var n = 0; n < e.length; n++) t.push((0, e[n])());
        return t;
      }
      function za(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        return function (n) {
          n.providersResolver = function (n, r) {
            return (function (e, t, n) {
              var r = Vt();
              if (r.firstCreatePass) {
                var i = bt(e);
                Na(n, r.data, r.blueprint, i, !0),
                  Na(t, r.data, r.blueprint, i, !1);
              }
            })(n, r ? r(e) : e, t);
          };
        };
      }
      var Ba = function e() {
          _classCallCheck(this, e);
        },
        qa = (function () {
          function e() {
            _classCallCheck(this, e);
          }
          return (
            _createClass(e, [
              {
                key: "resolveComponentFactory",
                value: function (e) {
                  throw (function (e) {
                    var t = Error(
                      "No component factory found for ".concat(
                        ke(e),
                        ". Did you add it to @NgModule.entryComponents?"
                      )
                    );
                    return (t.ngComponent = e), t;
                  })(e);
                },
              },
            ]),
            e
          );
        })(),
        Ga = (function () {
          var e = function e() {
            _classCallCheck(this, e);
          };
          return (e.NULL = new qa()), e;
        })(),
        Wa = (function () {
          var e = function e(t) {
            _classCallCheck(this, e), (this.nativeElement = t);
          };
          return (
            (e.__NG_ELEMENT_ID__ = function () {
              return Ka(e);
            }),
            e
          );
        })(),
        Ka = function (e) {
          return Fi(e, zt(), Ht());
        },
        Za = function e() {
          _classCallCheck(this, e);
        },
        Qa = (function () {
          var e = { Important: 1, DashCase: 2 };
          return (
            (e[e.Important] = "Important"), (e[e.DashCase] = "DashCase"), e
          );
        })(),
        $a = (function () {
          var e = function e() {
            _classCallCheck(this, e);
          };
          return (
            (e.__NG_ELEMENT_ID__ = function () {
              return Ya();
            }),
            e
          );
        })(),
        Ya = function () {
          var e = Ht(),
            t = Rt(zt().index, e);
          return (function (e) {
            var t = e[11];
            if (Tt(t)) return t;
            throw new Error(
              "Cannot inject Renderer2 when the application uses Renderer3!"
            );
          })(mt(t) ? t : e);
        },
        Ja = (function () {
          var e = function e() {
            _classCallCheck(this, e);
          };
          return (
            (e.ɵprov = ce({
              token: e,
              providedIn: "root",
              factory: function () {
                return null;
              },
            })),
            e
          );
        })(),
        Xa = new (function e(t) {
          _classCallCheck(this, e),
            (this.full = t),
            (this.major = t.split(".")[0]),
            (this.minor = t.split(".")[1]),
            (this.patch = t.split(".").slice(2).join("."));
        })("9.1.11"),
        eo = (function () {
          function e() {
            _classCallCheck(this, e);
          }
          return (
            _createClass(e, [
              {
                key: "supports",
                value: function (e) {
                  return la(e);
                },
              },
              {
                key: "create",
                value: function (e) {
                  return new no(e);
                },
              },
            ]),
            e
          );
        })(),
        to = function (e, t) {
          return t;
        },
        no = (function () {
          function e(t) {
            _classCallCheck(this, e),
              (this.length = 0),
              (this._linkedRecords = null),
              (this._unlinkedRecords = null),
              (this._previousItHead = null),
              (this._itHead = null),
              (this._itTail = null),
              (this._additionsHead = null),
              (this._additionsTail = null),
              (this._movesHead = null),
              (this._movesTail = null),
              (this._removalsHead = null),
              (this._removalsTail = null),
              (this._identityChangesHead = null),
              (this._identityChangesTail = null),
              (this._trackByFn = t || to);
          }
          return (
            _createClass(e, [
              {
                key: "forEachItem",
                value: function (e) {
                  var t;
                  for (t = this._itHead; null !== t; t = t._next) e(t);
                },
              },
              {
                key: "forEachOperation",
                value: function (e) {
                  for (
                    var t = this._itHead,
                      n = this._removalsHead,
                      r = 0,
                      i = null;
                    t || n;

                  ) {
                    var a = !n || (t && t.currentIndex < oo(n, r, i)) ? t : n,
                      o = oo(a, r, i),
                      s = a.currentIndex;
                    if (a === n) r--, (n = n._nextRemoved);
                    else if (((t = t._next), null == a.previousIndex)) r++;
                    else {
                      i || (i = []);
                      var u = o - r,
                        l = s - r;
                      if (u != l) {
                        for (var c = 0; c < u; c++) {
                          var h = c < i.length ? i[c] : (i[c] = 0),
                            f = h + c;
                          l <= f && f < u && (i[c] = h + 1);
                        }
                        i[a.previousIndex] = l - u;
                      }
                    }
                    o !== s && e(a, o, s);
                  }
                },
              },
              {
                key: "forEachPreviousItem",
                value: function (e) {
                  var t;
                  for (
                    t = this._previousItHead;
                    null !== t;
                    t = t._nextPrevious
                  )
                    e(t);
                },
              },
              {
                key: "forEachAddedItem",
                value: function (e) {
                  var t;
                  for (t = this._additionsHead; null !== t; t = t._nextAdded)
                    e(t);
                },
              },
              {
                key: "forEachMovedItem",
                value: function (e) {
                  var t;
                  for (t = this._movesHead; null !== t; t = t._nextMoved) e(t);
                },
              },
              {
                key: "forEachRemovedItem",
                value: function (e) {
                  var t;
                  for (t = this._removalsHead; null !== t; t = t._nextRemoved)
                    e(t);
                },
              },
              {
                key: "forEachIdentityChange",
                value: function (e) {
                  var t;
                  for (
                    t = this._identityChangesHead;
                    null !== t;
                    t = t._nextIdentityChange
                  )
                    e(t);
                },
              },
              {
                key: "diff",
                value: function (e) {
                  if ((null == e && (e = []), !la(e)))
                    throw new Error(
                      "Error trying to diff '".concat(
                        ke(e),
                        "'. Only arrays and iterables are allowed"
                      )
                    );
                  return this.check(e) ? this : null;
                },
              },
              { key: "onDestroy", value: function () {} },
              {
                key: "check",
                value: function (e) {
                  var t = this;
                  this._reset();
                  var n,
                    r,
                    i,
                    a = this._itHead,
                    o = !1;
                  if (Array.isArray(e)) {
                    this.length = e.length;
                    for (var s = 0; s < this.length; s++)
                      (r = e[s]),
                        (i = this._trackByFn(s, r)),
                        null !== a && sa(a.trackById, i)
                          ? (o && (a = this._verifyReinsertion(a, r, i, s)),
                            sa(a.item, r) || this._addIdentityChange(a, r))
                          : ((a = this._mismatch(a, r, i, s)), (o = !0)),
                        (a = a._next);
                  } else
                    (n = 0),
                      (function (e, t) {
                        if (Array.isArray(e))
                          for (var n = 0; n < e.length; n++) t(e[n]);
                        else
                          for (var r, i = e[oa()](); !(r = i.next()).done; )
                            t(r.value);
                      })(e, function (e) {
                        (i = t._trackByFn(n, e)),
                          null !== a && sa(a.trackById, i)
                            ? (o && (a = t._verifyReinsertion(a, e, i, n)),
                              sa(a.item, e) || t._addIdentityChange(a, e))
                            : ((a = t._mismatch(a, e, i, n)), (o = !0)),
                          (a = a._next),
                          n++;
                      }),
                      (this.length = n);
                  return this._truncate(a), (this.collection = e), this.isDirty;
                },
              },
              {
                key: "_reset",
                value: function () {
                  if (this.isDirty) {
                    var e, t;
                    for (
                      e = this._previousItHead = this._itHead;
                      null !== e;
                      e = e._next
                    )
                      e._nextPrevious = e._next;
                    for (e = this._additionsHead; null !== e; e = e._nextAdded)
                      e.previousIndex = e.currentIndex;
                    for (
                      this._additionsHead = this._additionsTail = null,
                        e = this._movesHead;
                      null !== e;
                      e = t
                    )
                      (e.previousIndex = e.currentIndex), (t = e._nextMoved);
                    (this._movesHead = this._movesTail = null),
                      (this._removalsHead = this._removalsTail = null),
                      (this._identityChangesHead = this._identityChangesTail = null);
                  }
                },
              },
              {
                key: "_mismatch",
                value: function (e, t, n, r) {
                  var i;
                  return (
                    null === e
                      ? (i = this._itTail)
                      : ((i = e._prev), this._remove(e)),
                    null !==
                    (e =
                      null === this._linkedRecords
                        ? null
                        : this._linkedRecords.get(n, r))
                      ? (sa(e.item, t) || this._addIdentityChange(e, t),
                        this._moveAfter(e, i, r))
                      : null !==
                        (e =
                          null === this._unlinkedRecords
                            ? null
                            : this._unlinkedRecords.get(n, null))
                      ? (sa(e.item, t) || this._addIdentityChange(e, t),
                        this._reinsertAfter(e, i, r))
                      : (e = this._addAfter(new ro(t, n), i, r)),
                    e
                  );
                },
              },
              {
                key: "_verifyReinsertion",
                value: function (e, t, n, r) {
                  var i =
                    null === this._unlinkedRecords
                      ? null
                      : this._unlinkedRecords.get(n, null);
                  return (
                    null !== i
                      ? (e = this._reinsertAfter(i, e._prev, r))
                      : e.currentIndex != r &&
                        ((e.currentIndex = r), this._addToMoves(e, r)),
                    e
                  );
                },
              },
              {
                key: "_truncate",
                value: function (e) {
                  for (; null !== e; ) {
                    var t = e._next;
                    this._addToRemovals(this._unlink(e)), (e = t);
                  }
                  null !== this._unlinkedRecords &&
                    this._unlinkedRecords.clear(),
                    null !== this._additionsTail &&
                      (this._additionsTail._nextAdded = null),
                    null !== this._movesTail &&
                      (this._movesTail._nextMoved = null),
                    null !== this._itTail && (this._itTail._next = null),
                    null !== this._removalsTail &&
                      (this._removalsTail._nextRemoved = null),
                    null !== this._identityChangesTail &&
                      (this._identityChangesTail._nextIdentityChange = null);
                },
              },
              {
                key: "_reinsertAfter",
                value: function (e, t, n) {
                  null !== this._unlinkedRecords &&
                    this._unlinkedRecords.remove(e);
                  var r = e._prevRemoved,
                    i = e._nextRemoved;
                  return (
                    null === r
                      ? (this._removalsHead = i)
                      : (r._nextRemoved = i),
                    null === i
                      ? (this._removalsTail = r)
                      : (i._prevRemoved = r),
                    this._insertAfter(e, t, n),
                    this._addToMoves(e, n),
                    e
                  );
                },
              },
              {
                key: "_moveAfter",
                value: function (e, t, n) {
                  return (
                    this._unlink(e),
                    this._insertAfter(e, t, n),
                    this._addToMoves(e, n),
                    e
                  );
                },
              },
              {
                key: "_addAfter",
                value: function (e, t, n) {
                  return (
                    this._insertAfter(e, t, n),
                    (this._additionsTail =
                      null === this._additionsTail
                        ? (this._additionsHead = e)
                        : (this._additionsTail._nextAdded = e)),
                    e
                  );
                },
              },
              {
                key: "_insertAfter",
                value: function (e, t, n) {
                  var r = null === t ? this._itHead : t._next;
                  return (
                    (e._next = r),
                    (e._prev = t),
                    null === r ? (this._itTail = e) : (r._prev = e),
                    null === t ? (this._itHead = e) : (t._next = e),
                    null === this._linkedRecords &&
                      (this._linkedRecords = new ao()),
                    this._linkedRecords.put(e),
                    (e.currentIndex = n),
                    e
                  );
                },
              },
              {
                key: "_remove",
                value: function (e) {
                  return this._addToRemovals(this._unlink(e));
                },
              },
              {
                key: "_unlink",
                value: function (e) {
                  null !== this._linkedRecords && this._linkedRecords.remove(e);
                  var t = e._prev,
                    n = e._next;
                  return (
                    null === t ? (this._itHead = n) : (t._next = n),
                    null === n ? (this._itTail = t) : (n._prev = t),
                    e
                  );
                },
              },
              {
                key: "_addToMoves",
                value: function (e, t) {
                  return (
                    e.previousIndex === t ||
                      (this._movesTail =
                        null === this._movesTail
                          ? (this._movesHead = e)
                          : (this._movesTail._nextMoved = e)),
                    e
                  );
                },
              },
              {
                key: "_addToRemovals",
                value: function (e) {
                  return (
                    null === this._unlinkedRecords &&
                      (this._unlinkedRecords = new ao()),
                    this._unlinkedRecords.put(e),
                    (e.currentIndex = null),
                    (e._nextRemoved = null),
                    null === this._removalsTail
                      ? ((this._removalsTail = this._removalsHead = e),
                        (e._prevRemoved = null))
                      : ((e._prevRemoved = this._removalsTail),
                        (this._removalsTail = this._removalsTail._nextRemoved = e)),
                    e
                  );
                },
              },
              {
                key: "_addIdentityChange",
                value: function (e, t) {
                  return (
                    (e.item = t),
                    (this._identityChangesTail =
                      null === this._identityChangesTail
                        ? (this._identityChangesHead = e)
                        : (this._identityChangesTail._nextIdentityChange = e)),
                    e
                  );
                },
              },
              {
                key: "isDirty",
                get: function () {
                  return (
                    null !== this._additionsHead ||
                    null !== this._movesHead ||
                    null !== this._removalsHead ||
                    null !== this._identityChangesHead
                  );
                },
              },
            ]),
            e
          );
        })(),
        ro = function e(t, n) {
          _classCallCheck(this, e),
            (this.item = t),
            (this.trackById = n),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        },
        io = (function () {
          function e() {
            _classCallCheck(this, e), (this._head = null), (this._tail = null);
          }
          return (
            _createClass(e, [
              {
                key: "add",
                value: function (e) {
                  null === this._head
                    ? ((this._head = this._tail = e),
                      (e._nextDup = null),
                      (e._prevDup = null))
                    : ((this._tail._nextDup = e),
                      (e._prevDup = this._tail),
                      (e._nextDup = null),
                      (this._tail = e));
                },
              },
              {
                key: "get",
                value: function (e, t) {
                  var n;
                  for (n = this._head; null !== n; n = n._nextDup)
                    if (
                      (null === t || t <= n.currentIndex) &&
                      sa(n.trackById, e)
                    )
                      return n;
                  return null;
                },
              },
              {
                key: "remove",
                value: function (e) {
                  var t = e._prevDup,
                    n = e._nextDup;
                  return (
                    null === t ? (this._head = n) : (t._nextDup = n),
                    null === n ? (this._tail = t) : (n._prevDup = t),
                    null === this._head
                  );
                },
              },
            ]),
            e
          );
        })(),
        ao = (function () {
          function e() {
            _classCallCheck(this, e), (this.map = new Map());
          }
          return (
            _createClass(e, [
              {
                key: "put",
                value: function (e) {
                  var t = e.trackById,
                    n = this.map.get(t);
                  n || ((n = new io()), this.map.set(t, n)), n.add(e);
                },
              },
              {
                key: "get",
                value: function (e, t) {
                  var n = this.map.get(e);
                  return n ? n.get(e, t) : null;
                },
              },
              {
                key: "remove",
                value: function (e) {
                  var t = e.trackById;
                  return this.map.get(t).remove(e) && this.map.delete(t), e;
                },
              },
              {
                key: "clear",
                value: function () {
                  this.map.clear();
                },
              },
              {
                key: "isEmpty",
                get: function () {
                  return 0 === this.map.size;
                },
              },
            ]),
            e
          );
        })();
      function oo(e, t, n) {
        var r = e.previousIndex;
        if (null === r) return r;
        var i = 0;
        return n && r < n.length && (i = n[r]), r + t + i;
      }
      var so = (function () {
          function e() {
            _classCallCheck(this, e);
          }
          return (
            _createClass(e, [
              {
                key: "supports",
                value: function (e) {
                  return e instanceof Map || ca(e);
                },
              },
              {
                key: "create",
                value: function () {
                  return new uo();
                },
              },
            ]),
            e
          );
        })(),
        uo = (function () {
          function e() {
            _classCallCheck(this, e),
              (this._records = new Map()),
              (this._mapHead = null),
              (this._appendAfter = null),
              (this._previousMapHead = null),
              (this._changesHead = null),
              (this._changesTail = null),
              (this._additionsHead = null),
              (this._additionsTail = null),
              (this._removalsHead = null),
              (this._removalsTail = null);
          }
          return (
            _createClass(e, [
              {
                key: "forEachItem",
                value: function (e) {
                  var t;
                  for (t = this._mapHead; null !== t; t = t._next) e(t);
                },
              },
              {
                key: "forEachPreviousItem",
                value: function (e) {
                  var t;
                  for (
                    t = this._previousMapHead;
                    null !== t;
                    t = t._nextPrevious
                  )
                    e(t);
                },
              },
              {
                key: "forEachChangedItem",
                value: function (e) {
                  var t;
                  for (t = this._changesHead; null !== t; t = t._nextChanged)
                    e(t);
                },
              },
              {
                key: "forEachAddedItem",
                value: function (e) {
                  var t;
                  for (t = this._additionsHead; null !== t; t = t._nextAdded)
                    e(t);
                },
              },
              {
                key: "forEachRemovedItem",
                value: function (e) {
                  var t;
                  for (t = this._removalsHead; null !== t; t = t._nextRemoved)
                    e(t);
                },
              },
              {
                key: "diff",
                value: function (e) {
                  if (e) {
                    if (!(e instanceof Map || ca(e)))
                      throw new Error(
                        "Error trying to diff '".concat(
                          ke(e),
                          "'. Only maps and objects are allowed"
                        )
                      );
                  } else e = new Map();
                  return this.check(e) ? this : null;
                },
              },
              { key: "onDestroy", value: function () {} },
              {
                key: "check",
                value: function (e) {
                  var t = this;
                  this._reset();
                  var n = this._mapHead;
                  if (
                    ((this._appendAfter = null),
                    this._forEach(e, function (e, r) {
                      if (n && n.key === r)
                        t._maybeAddToChanges(n, e),
                          (t._appendAfter = n),
                          (n = n._next);
                      else {
                        var i = t._getOrCreateRecordForKey(r, e);
                        n = t._insertBeforeOrAppend(n, i);
                      }
                    }),
                    n)
                  ) {
                    n._prev && (n._prev._next = null), (this._removalsHead = n);
                    for (var r = n; null !== r; r = r._nextRemoved)
                      r === this._mapHead && (this._mapHead = null),
                        this._records.delete(r.key),
                        (r._nextRemoved = r._next),
                        (r.previousValue = r.currentValue),
                        (r.currentValue = null),
                        (r._prev = null),
                        (r._next = null);
                  }
                  return (
                    this._changesTail &&
                      (this._changesTail._nextChanged = null),
                    this._additionsTail &&
                      (this._additionsTail._nextAdded = null),
                    this.isDirty
                  );
                },
              },
              {
                key: "_insertBeforeOrAppend",
                value: function (e, t) {
                  if (e) {
                    var n = e._prev;
                    return (
                      (t._next = e),
                      (t._prev = n),
                      (e._prev = t),
                      n && (n._next = t),
                      e === this._mapHead && (this._mapHead = t),
                      (this._appendAfter = e),
                      e
                    );
                  }
                  return (
                    this._appendAfter
                      ? ((this._appendAfter._next = t),
                        (t._prev = this._appendAfter))
                      : (this._mapHead = t),
                    (this._appendAfter = t),
                    null
                  );
                },
              },
              {
                key: "_getOrCreateRecordForKey",
                value: function (e, t) {
                  if (this._records.has(e)) {
                    var n = this._records.get(e);
                    this._maybeAddToChanges(n, t);
                    var r = n._prev,
                      i = n._next;
                    return (
                      r && (r._next = i),
                      i && (i._prev = r),
                      (n._next = null),
                      (n._prev = null),
                      n
                    );
                  }
                  var a = new lo(e);
                  return (
                    this._records.set(e, a),
                    (a.currentValue = t),
                    this._addToAdditions(a),
                    a
                  );
                },
              },
              {
                key: "_reset",
                value: function () {
                  if (this.isDirty) {
                    var e;
                    for (
                      this._previousMapHead = this._mapHead,
                        e = this._previousMapHead;
                      null !== e;
                      e = e._next
                    )
                      e._nextPrevious = e._next;
                    for (e = this._changesHead; null !== e; e = e._nextChanged)
                      e.previousValue = e.currentValue;
                    for (e = this._additionsHead; null != e; e = e._nextAdded)
                      e.previousValue = e.currentValue;
                    (this._changesHead = this._changesTail = null),
                      (this._additionsHead = this._additionsTail = null),
                      (this._removalsHead = null);
                  }
                },
              },
              {
                key: "_maybeAddToChanges",
                value: function (e, t) {
                  sa(t, e.currentValue) ||
                    ((e.previousValue = e.currentValue),
                    (e.currentValue = t),
                    this._addToChanges(e));
                },
              },
              {
                key: "_addToAdditions",
                value: function (e) {
                  null === this._additionsHead
                    ? (this._additionsHead = this._additionsTail = e)
                    : ((this._additionsTail._nextAdded = e),
                      (this._additionsTail = e));
                },
              },
              {
                key: "_addToChanges",
                value: function (e) {
                  null === this._changesHead
                    ? (this._changesHead = this._changesTail = e)
                    : ((this._changesTail._nextChanged = e),
                      (this._changesTail = e));
                },
              },
              {
                key: "_forEach",
                value: function (e, t) {
                  e instanceof Map
                    ? e.forEach(t)
                    : Object.keys(e).forEach(function (n) {
                        return t(e[n], n);
                      });
                },
              },
              {
                key: "isDirty",
                get: function () {
                  return (
                    null !== this._additionsHead ||
                    null !== this._changesHead ||
                    null !== this._removalsHead
                  );
                },
              },
            ]),
            e
          );
        })(),
        lo = function e(t) {
          _classCallCheck(this, e),
            (this.key = t),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        },
        co = (function () {
          var e = (function () {
            function e(t) {
              _classCallCheck(this, e), (this.factories = t);
            }
            return (
              _createClass(
                e,
                [
                  {
                    key: "find",
                    value: function (e) {
                      var t,
                        n = this.factories.find(function (t) {
                          return t.supports(e);
                        });
                      if (null != n) return n;
                      throw new Error(
                        "Cannot find a differ supporting object '"
                          .concat(e, "' of type '")
                          .concat((t = e).name || typeof t, "'")
                      );
                    },
                  },
                ],
                [
                  {
                    key: "create",
                    value: function (t, n) {
                      if (null != n) {
                        var r = n.factories.slice();
                        t = t.concat(r);
                      }
                      return new e(t);
                    },
                  },
                  {
                    key: "extend",
                    value: function (t) {
                      return {
                        provide: e,
                        useFactory: function (n) {
                          if (!n)
                            throw new Error(
                              "Cannot extend IterableDiffers without a parent injector"
                            );
                          return e.create(t, n);
                        },
                        deps: [[e, new se(), new ae()]],
                      };
                    },
                  },
                ]
              ),
              e
            );
          })();
          return (
            (e.ɵprov = ce({
              token: e,
              providedIn: "root",
              factory: function () {
                return new e([new eo()]);
              },
            })),
            e
          );
        })(),
        ho = (function () {
          var e = (function () {
            function e(t) {
              _classCallCheck(this, e), (this.factories = t);
            }
            return (
              _createClass(
                e,
                [
                  {
                    key: "find",
                    value: function (e) {
                      var t = this.factories.find(function (t) {
                        return t.supports(e);
                      });
                      if (t) return t;
                      throw new Error(
                        "Cannot find a differ supporting object '".concat(
                          e,
                          "'"
                        )
                      );
                    },
                  },
                ],
                [
                  {
                    key: "create",
                    value: function (t, n) {
                      if (n) {
                        var r = n.factories.slice();
                        t = t.concat(r);
                      }
                      return new e(t);
                    },
                  },
                  {
                    key: "extend",
                    value: function (t) {
                      return {
                        provide: e,
                        useFactory: function (n) {
                          if (!n)
                            throw new Error(
                              "Cannot extend KeyValueDiffers without a parent injector"
                            );
                          return e.create(t, n);
                        },
                        deps: [[e, new se(), new ae()]],
                      };
                    },
                  },
                ]
              ),
              e
            );
          })();
          return (
            (e.ɵprov = ce({
              token: e,
              providedIn: "root",
              factory: function () {
                return new e([new so()]);
              },
            })),
            e
          );
        })(),
        fo = [new so()],
        vo = new co([new eo()]),
        po = new ho(fo),
        yo = (function () {
          var e = function e() {
            _classCallCheck(this, e);
          };
          return (
            (e.__NG_ELEMENT_ID__ = function () {
              return go(e, Wa);
            }),
            e
          );
        })(),
        go = function (e, t) {
          return (function (e, t, n, r) {
            return (
              Ri ||
                (Ri = (function (e) {
                  _inherits(n, e);
                  var t = _createSuper(n);
                  function n(e, r, i) {
                    var a;
                    return (
                      _classCallCheck(this, n),
                      ((a = t.call(this))._declarationView = e),
                      (a._declarationTContainer = r),
                      (a.elementRef = i),
                      a
                    );
                  }
                  return (
                    _createClass(n, [
                      {
                        key: "createEmbeddedView",
                        value: function (e) {
                          var t = this._declarationTContainer.tViews,
                            n = xr(
                              this._declarationView,
                              t,
                              e,
                              16,
                              null,
                              t.node
                            );
                          n[17] = this._declarationView[
                            this._declarationTContainer.index
                          ];
                          var r = this._declarationView[19];
                          return (
                            null !== r && (n[19] = r.createEmbeddedView(t)),
                            Or(t, n, e),
                            new Mi(n)
                          );
                        },
                      },
                    ]),
                    n
                  );
                })(e)),
              0 === n.type ? new Ri(r, n, Fi(t, n, r)) : null
            );
          })(e, t, zt(), Ht());
        },
        mo = (function () {
          var e = function e() {
            _classCallCheck(this, e);
          };
          return (
            (e.__NG_ELEMENT_ID__ = function () {
              return _o(e, Wa);
            }),
            e
          );
        })(),
        _o = function (e, t) {
          return (function (e, t, n, r) {
            var i;
            Di ||
              (Di = (function (e) {
                _inherits(r, e);
                var n = _createSuper(r);
                function r(e, t, i) {
                  var a;
                  return (
                    _classCallCheck(this, r),
                    ((a = n.call(this))._lContainer = e),
                    (a._hostTNode = t),
                    (a._hostView = i),
                    a
                  );
                }
                return (
                  _createClass(r, [
                    {
                      key: "clear",
                      value: function () {
                        for (; this.length > 0; ) this.remove(this.length - 1);
                      },
                    },
                    {
                      key: "get",
                      value: function (e) {
                        return (
                          (null !== this._lContainer[8] &&
                            this._lContainer[8][e]) ||
                          null
                        );
                      },
                    },
                    {
                      key: "createEmbeddedView",
                      value: function (e, t, n) {
                        var r = e.createEmbeddedView(t || {});
                        return this.insert(r, n), r;
                      },
                    },
                    {
                      key: "createComponent",
                      value: function (e, t, n, r, i) {
                        var a = n || this.parentInjector;
                        if (!i && null == e.ngModule && a) {
                          var o = a.get(Ye, null);
                          o && (i = o);
                        }
                        var s = e.create(a, r, void 0, i);
                        return this.insert(s.hostView, t), s;
                      },
                    },
                    {
                      key: "insert",
                      value: function (e, t) {
                        var n = e._lView,
                          r = n[1];
                        if (e.destroyed)
                          throw new Error(
                            "Cannot insert a destroyed View in a ViewContainer!"
                          );
                        if ((this.allocateContainerIfNeeded(), _t(n[3]))) {
                          var i = this.indexOf(e);
                          if (-1 !== i) this.detach(i);
                          else {
                            var a = n[3],
                              o = new Di(a, a[6], a[3]);
                            o.detach(o.indexOf(e));
                          }
                        }
                        var s = this._adjustIndex(t);
                        return (
                          (function (e, t, n, r) {
                            var i = 10 + r,
                              a = n.length;
                            r > 0 && (n[i - 1][4] = t),
                              r < a - 10
                                ? ((t[4] = n[i]), et(n, 10 + r, t))
                                : (n.push(t), (t[4] = null)),
                              (t[3] = n);
                            var o = t[17];
                            null !== o &&
                              n !== o &&
                              (function (e, t) {
                                var n = e[9];
                                t[16] !== t[3][3][16] && (e[2] = !0),
                                  null === n ? (e[9] = [t]) : n.push(t);
                              })(o, t);
                            var s = t[19];
                            null !== s && s.insertView(e), (t[2] |= 128);
                          })(r, n, this._lContainer, s),
                          vi(r, n, !0, Ei(s, this._lContainer)),
                          e.attachToViewContainerRef(this),
                          et(this._lContainer[8], s, e),
                          e
                        );
                      },
                    },
                    {
                      key: "move",
                      value: function (e, t) {
                        if (e.destroyed)
                          throw new Error(
                            "Cannot move a destroyed View in a ViewContainer!"
                          );
                        return this.insert(e, t);
                      },
                    },
                    {
                      key: "indexOf",
                      value: function (e) {
                        var t = this._lContainer[8];
                        return null !== t ? t.indexOf(e) : -1;
                      },
                    },
                    {
                      key: "remove",
                      value: function (e) {
                        this.allocateContainerIfNeeded();
                        var t = this._adjustIndex(e, -1);
                        !(function (e, t) {
                          var n = yi(e, t);
                          n && gi(n[1], n);
                        })(this._lContainer, t),
                          tt(this._lContainer[8], t);
                      },
                    },
                    {
                      key: "detach",
                      value: function (e) {
                        this.allocateContainerIfNeeded();
                        var t = this._adjustIndex(e, -1),
                          n = yi(this._lContainer, t);
                        return n && null != tt(this._lContainer[8], t)
                          ? new Mi(n)
                          : null;
                      },
                    },
                    {
                      key: "_adjustIndex",
                      value: function (e) {
                        var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : 0;
                        return null == e ? this.length + t : e;
                      },
                    },
                    {
                      key: "allocateContainerIfNeeded",
                      value: function () {
                        null === this._lContainer[8] &&
                          (this._lContainer[8] = []);
                      },
                    },
                    {
                      key: "element",
                      get: function () {
                        return Fi(t, this._hostTNode, this._hostView);
                      },
                    },
                    {
                      key: "injector",
                      get: function () {
                        return new Wn(this._hostTNode, this._hostView);
                      },
                    },
                    {
                      key: "parentInjector",
                      get: function () {
                        var e = Ln(this._hostTNode, this._hostView),
                          t = xn(e, this._hostView),
                          n = (function (e, t, n) {
                            if (n.parent && -1 !== n.parent.injectorIndex) {
                              for (
                                var r = n.parent.injectorIndex, i = n.parent;
                                null != i.parent && r == i.parent.injectorIndex;

                              )
                                i = i.parent;
                              return i;
                            }
                            for (var a = Tn(e), o = t, s = t[6]; a > 1; )
                              (s = (o = o[15])[6]), a--;
                            return s;
                          })(e, this._hostView, this._hostTNode);
                        return Sn(e) && null != n
                          ? new Wn(n, t)
                          : new Wn(null, this._hostView);
                      },
                    },
                    {
                      key: "length",
                      get: function () {
                        return this._lContainer.length - 10;
                      },
                    },
                  ]),
                  r
                );
              })(e));
            var a = r[n.index];
            if (_t(a)) i = a;
            else {
              var o;
              if (4 === n.type) o = Pt(a);
              else if (((o = r[11].createComment("")), St(r))) {
                var s = r[11],
                  u = Ot(n, r);
                ki(
                  s,
                  bi(s, u),
                  o,
                  (function (e, t) {
                    return Tt(e) ? e.nextSibling(t) : t.nextSibling;
                  })(s, u)
                );
              } else Si(r[1], r, o, n);
              (r[n.index] = i = Jr(a, r, o, n)), ti(r, i);
            }
            return new Di(i, n, r);
          })(e, t, zt(), Ht());
        },
        ko = {},
        Co = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e) {
            var r;
            return (
              _classCallCheck(this, n), ((r = t.call(this)).ngModule = e), r
            );
          }
          return (
            _createClass(n, [
              {
                key: "resolveComponentFactory",
                value: function (e) {
                  var t = pt(e);
                  return new So(t, this.ngModule);
                },
              },
            ]),
            n
          );
        })(Ga);
      function wo(e) {
        var t = [];
        for (var n in e)
          e.hasOwnProperty(n) && t.push({ propName: e[n], templateName: n });
        return t;
      }
      var bo = new Le("SCHEDULER_TOKEN", {
          providedIn: "root",
          factory: function () {
            return An;
          },
        }),
        So = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r) {
            var i;
            return (
              _classCallCheck(this, n),
              ((i = t.call(this)).componentDef = e),
              (i.ngModule = r),
              (i.componentType = e.type),
              (i.selector = e.selectors.map(gr).join(",")),
              (i.ngContentSelectors = e.ngContentSelectors
                ? e.ngContentSelectors
                : []),
              (i.isBoundToModule = !!r),
              i
            );
          }
          return (
            _createClass(n, [
              {
                key: "create",
                value: function (e, t, n, r) {
                  var i,
                    a,
                    o = (r = r || this.ngModule)
                      ? (function (e, t) {
                          return {
                            get: function (n, r, i) {
                              var a = e.get(n, ko, i);
                              return a !== ko || r === ko ? a : t.get(n, r, i);
                            },
                          };
                        })(e, r.injector)
                      : e,
                    s = o.get(Za, xt),
                    u = o.get(Ja, null),
                    l = s.createRenderer(null, this.componentDef),
                    c = this.componentDef.selectors[0][0] || "div",
                    h = n
                      ? (function (e, t, n) {
                          if (Tt(e))
                            return e.selectRootElement(t, n === rt.ShadowDom);
                          var r = "string" == typeof t ? e.querySelector(t) : t;
                          return (r.textContent = ""), r;
                        })(l, n, this.componentDef.encapsulation)
                      : Tr(
                          c,
                          s.createRenderer(null, this.componentDef),
                          (function (e) {
                            var t = e.toLowerCase();
                            return "svg" === t
                              ? "http://www.w3.org/2000/svg"
                              : "math" === t
                              ? "http://www.w3.org/1998/MathML/"
                              : null;
                          })(c)
                        ),
                    f = this.componentDef.onPush ? 576 : 528,
                    d =
                      "string" == typeof n &&
                      /^#root-ng-internal-isolated-\d+/.test(n),
                    v = {
                      components: [],
                      scheduler: An,
                      clean: oi,
                      playerHandler: null,
                      flags: 0,
                    },
                    p = Fr(0, -1, null, 1, 0, null, null, null, null, null),
                    y = xr(null, p, v, f, null, null, s, l, u, o);
                  en(y, null);
                  try {
                    var g = (function (e, t, n, r, i, a) {
                      var o = n[1];
                      n[20] = e;
                      var s = Pr(o, null, 0, 3, null, null),
                        u = (s.mergedAttrs = t.hostAttrs);
                      null !== u &&
                        (ia(s, u, !0),
                        null !== e &&
                          (_n(i, e, u),
                          null !== s.classes && Ai(i, e, s.classes),
                          null !== s.styles && Oi(i, e, s.styles)));
                      var l = r.createRenderer(e, t),
                        c = xr(
                          n,
                          Nr(t),
                          null,
                          t.onPush ? 64 : 16,
                          n[20],
                          s,
                          r,
                          l,
                          void 0
                        );
                      return (
                        o.firstCreatePass &&
                          (Un(Nn(s, n), o, t.type),
                          Gr(o, s),
                          Kr(s, n.length, 1)),
                        ti(n, c),
                        (n[20] = c)
                      );
                    })(h, this.componentDef, y, s, l);
                    if (h)
                      if (n) _n(l, h, ["ng-version", Xa.full]);
                      else {
                        var m = (function (e) {
                            for (
                              var t = [], n = [], r = 1, i = 2;
                              r < e.length;

                            ) {
                              var a = e[r];
                              if ("string" == typeof a)
                                2 === i
                                  ? "" !== a && t.push(a, e[++r])
                                  : 8 === i && n.push(a);
                              else {
                                if (!dr(i)) break;
                                i = a;
                              }
                              r++;
                            }
                            return { attrs: t, classes: n };
                          })(this.componentDef.selectors[0]),
                          _ = m.attrs,
                          k = m.classes;
                        _ && _n(l, h, _),
                          k && k.length > 0 && Ai(l, h, k.join(" "));
                      }
                    if (((a = At(p, 0)), void 0 !== t))
                      for (
                        var C = (a.projection = []), w = 0;
                        w < this.ngContentSelectors.length;
                        w++
                      ) {
                        var b = t[w];
                        C.push(null != b ? Array.from(b) : null);
                      }
                    (i = (function (e, t, n, r, i) {
                      var a = n[1],
                        o = (function (e, t, n) {
                          var r = zt();
                          e.firstCreatePass &&
                            (n.providersResolver && n.providersResolver(n),
                            qr(e, r, 1),
                            Zr(e, t, n));
                          var i = Bn(t, e, t.length - 1, r);
                          ar(i, t);
                          var a = Ot(r, t);
                          return a && ar(a, t), i;
                        })(a, n, t);
                      r.components.push(o),
                        (e[8] = o),
                        i &&
                          i.forEach(function (e) {
                            return e(o, t);
                          }),
                        t.contentQueries &&
                          t.contentQueries(1, o, n.length - 1);
                      var s = zt();
                      if (
                        a.firstCreatePass &&
                        (null !== t.hostBindings || null !== t.hostAttrs)
                      ) {
                        un(s.index - 20);
                        var u = n[1];
                        Vr(u, t), zr(u, n, t.hostVars), Br(t, o);
                      }
                      return o;
                    })(g, this.componentDef, y, v, [Ma])),
                      Or(p, y, null);
                  } finally {
                    on();
                  }
                  var S = new Eo(this.componentType, i, Fi(Wa, a, y), y, a);
                  return (n && !d) || (p.node.child = a), S;
                },
              },
              {
                key: "inputs",
                get: function () {
                  return wo(this.componentDef.inputs);
                },
              },
              {
                key: "outputs",
                get: function () {
                  return wo(this.componentDef.outputs);
                },
              },
            ]),
            n
          );
        })(Ba),
        Eo = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r, i, a, o) {
            var s, u, l, c;
            return (
              _classCallCheck(this, n),
              ((s = t.call(this)).location = i),
              (s._rootLView = a),
              (s._tNode = o),
              (s.destroyCbs = []),
              (s.instance = r),
              (s.hostView = s.changeDetectorRef = new Ni(a)),
              (u = a[1]),
              (l = a),
              null == (c = u.node) &&
                (u.node = c = jr(0, null, 2, -1, null, null)),
              (l[6] = c),
              (s.componentType = e),
              s
            );
          }
          return (
            _createClass(n, [
              {
                key: "destroy",
                value: function () {
                  this.destroyCbs &&
                    (this.destroyCbs.forEach(function (e) {
                      return e();
                    }),
                    (this.destroyCbs = null),
                    !this.hostView.destroyed && this.hostView.destroy());
                },
              },
              {
                key: "onDestroy",
                value: function (e) {
                  this.destroyCbs && this.destroyCbs.push(e);
                },
              },
              {
                key: "injector",
                get: function () {
                  return new Wn(this._tNode, this._rootLView);
                },
              },
            ]),
            n
          );
        })(
          (function () {
            return function e() {
              _classCallCheck(this, e);
            };
          })()
        ),
        To = void 0,
        xo = [
          "en",
          [["a", "p"], ["AM", "PM"], To],
          [["AM", "PM"], To, To],
          [
            ["S", "M", "T", "W", "T", "F", "S"],
            ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
          ],
          To,
          [
            ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
            [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
          ],
          To,
          [
            ["B", "A"],
            ["BC", "AD"],
            ["Before Christ", "Anno Domini"],
          ],
          0,
          [6, 0],
          ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
          ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
          ["{1}, {0}", To, "{1} 'at' {0}", To],
          [
            ".",
            ",",
            ";",
            "%",
            "+",
            "-",
            "E",
            "\xd7",
            "\u2030",
            "\u221e",
            "NaN",
            ":",
          ],
          ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"],
          "USD",
          "$",
          "US Dollar",
          {},
          "ltr",
          function (e) {
            var t = Math.floor(Math.abs(e)),
              n = e.toString().replace(/^[^.]*\.?/, "").length;
            return 1 === t && 0 === n ? 1 : 5;
          },
        ],
        Po = {};
      function Oo(e) {
        var t = (function (e) {
            return e.toLowerCase().replace(/_/g, "-");
          })(e),
          n = Ao(t);
        if (n) return n;
        var r = t.split("-")[0];
        if ((n = Ao(r))) return n;
        if ("en" === r) return xo;
        throw new Error('Missing locale data for the locale "'.concat(e, '".'));
      }
      function Ao(e) {
        return (
          e in Po ||
            (Po[e] =
              Ae.ng &&
              Ae.ng.common &&
              Ae.ng.common.locales &&
              Ae.ng.common.locales[e]),
          Po[e]
        );
      }
      var Io = (function () {
        var e = {
          LocaleId: 0,
          DayPeriodsFormat: 1,
          DayPeriodsStandalone: 2,
          DaysFormat: 3,
          DaysStandalone: 4,
          MonthsFormat: 5,
          MonthsStandalone: 6,
          Eras: 7,
          FirstDayOfWeek: 8,
          WeekendRange: 9,
          DateFormat: 10,
          TimeFormat: 11,
          DateTimeFormat: 12,
          NumberSymbols: 13,
          NumberFormats: 14,
          CurrencyCode: 15,
          CurrencySymbol: 16,
          CurrencyName: 17,
          Currencies: 18,
          Directionality: 19,
          PluralCase: 20,
          ExtraData: 21,
        };
        return (
          (e[e.LocaleId] = "LocaleId"),
          (e[e.DayPeriodsFormat] = "DayPeriodsFormat"),
          (e[e.DayPeriodsStandalone] = "DayPeriodsStandalone"),
          (e[e.DaysFormat] = "DaysFormat"),
          (e[e.DaysStandalone] = "DaysStandalone"),
          (e[e.MonthsFormat] = "MonthsFormat"),
          (e[e.MonthsStandalone] = "MonthsStandalone"),
          (e[e.Eras] = "Eras"),
          (e[e.FirstDayOfWeek] = "FirstDayOfWeek"),
          (e[e.WeekendRange] = "WeekendRange"),
          (e[e.DateFormat] = "DateFormat"),
          (e[e.TimeFormat] = "TimeFormat"),
          (e[e.DateTimeFormat] = "DateTimeFormat"),
          (e[e.NumberSymbols] = "NumberSymbols"),
          (e[e.NumberFormats] = "NumberFormats"),
          (e[e.CurrencyCode] = "CurrencyCode"),
          (e[e.CurrencySymbol] = "CurrencySymbol"),
          (e[e.CurrencyName] = "CurrencyName"),
          (e[e.Currencies] = "Currencies"),
          (e[e.Directionality] = "Directionality"),
          (e[e.PluralCase] = "PluralCase"),
          (e[e.ExtraData] = "ExtraData"),
          e
        );
      })();
      function Ro(e) {
        var t;
        null == (t = e) &&
          (function (e, t, n, r) {
            throw new Error(
              "ASSERTION ERROR: Expected localeId to be defined" +
                " [Expected=> null != ".concat(t, " <=Actual]")
            );
          })(0, t),
          "string" == typeof e && e.toLowerCase().replace(/_/g, "-");
      }
      var Do = new Map(),
        Mo = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r) {
            var i;
            _classCallCheck(this, n),
              ((i = t.call(this))._parent = r),
              (i._bootstrapComponents = []),
              (i.injector = _assertThisInitialized(i)),
              (i.destroyCbs = []),
              (i.componentFactoryResolver = new Co(_assertThisInitialized(i)));
            var a = gt(e),
              o = e[Ne] || null;
            return (
              o && Ro(o),
              (i._bootstrapComponents = In(a.bootstrap)),
              (i._r3Injector = Gi(
                e,
                r,
                [
                  { provide: Ye, useValue: _assertThisInitialized(i) },
                  { provide: Ga, useValue: i.componentFactoryResolver },
                ],
                ke(e)
              )),
              i._r3Injector._resolveInjectorDefTypes(),
              (i.instance = i.get(e)),
              i
            );
          }
          return (
            _createClass(n, [
              {
                key: "get",
                value: function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : Xi.THROW_IF_NOT_FOUND,
                    n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : ue.Default;
                  return e === Xi || e === Ye || e === Ue
                    ? this
                    : this._r3Injector.get(e, t, n);
                },
              },
              {
                key: "destroy",
                value: function () {
                  var e = this._r3Injector;
                  !e.destroyed && e.destroy(),
                    this.destroyCbs.forEach(function (e) {
                      return e();
                    }),
                    (this.destroyCbs = null);
                },
              },
              {
                key: "onDestroy",
                value: function (e) {
                  this.destroyCbs.push(e);
                },
              },
            ]),
            n
          );
        })(Ye),
        No = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e) {
            var r;
            return (
              _classCallCheck(this, n),
              ((r = t.call(this)).moduleType = e),
              null !== gt(e) &&
                (function e(t) {
                  if (null !== t.ɵmod.id) {
                    var n = t.ɵmod.id;
                    (function (e, t, n) {
                      if (t && t !== n)
                        throw new Error(
                          "Duplicate module registered for "
                            .concat(e, " - ")
                            .concat(ke(t), " vs ")
                            .concat(ke(t.name))
                        );
                    })(n, Do.get(n), t),
                      Do.set(n, t);
                  }
                  var r = t.ɵmod.imports;
                  r instanceof Function && (r = r()),
                    r &&
                      r.forEach(function (t) {
                        return e(t);
                      });
                })(e),
              r
            );
          }
          return (
            _createClass(n, [
              {
                key: "create",
                value: function (e) {
                  return new Mo(this.moduleType, e);
                },
              },
            ]),
            n
          );
        })(Je);
      function Fo(e, t) {
        var n = e[t];
        return n === mr ? void 0 : n;
      }
      function jo(e, t) {
        var n,
          r = Vt(),
          i = e + 20;
        r.firstCreatePass
          ? ((n = (function (e, t) {
              if (t)
                for (var n = t.length - 1; n >= 0; n--) {
                  var r = t[n];
                  if (e === r.name) return r;
                }
              throw new Error("The pipe '".concat(e, "' could not be found!"));
            })(t, r.pipeRegistry)),
            (r.data[i] = n),
            n.onDestroy &&
              (r.destroyHooks || (r.destroyHooks = [])).push(i, n.onDestroy))
          : (n = r.data[i]);
        var a = n.factory || (n.factory = yt(n.type)),
          o = Ge(ya),
          s = Dn(!1),
          u = a();
        return (
          Dn(s),
          Ge(o),
          (function (e, t, n, r) {
            var i = n + 20;
            i >= e.data.length && ((e.data[i] = null), (e.blueprint[i] = null)),
              (t[i] = r);
          })(r, Ht(), e, u),
          u
        );
      }
      function Lo(e, t, n) {
        var r = Ht(),
          i = It(r, e);
        return Ho(
          r,
          Uo(r, e)
            ? (function (e, t, n, r, i, a) {
                var o = t + n;
                return fa(e, o, i)
                  ? ha(e, o + 1, a ? r.call(a, i) : r(i))
                  : Fo(e, o + 1);
              })(r, Kt(), t, i.transform, n, i)
            : i.transform(n)
        );
      }
      function Uo(e, t) {
        return e[1].data[t + 20].pure;
      }
      function Ho(e, t) {
        return ua.isWrapped(t) && ((t = ua.unwrap(t)), (e[Zt()] = mr)), t;
      }
      var Vo = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n() {
            var e,
              r =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return (
              _classCallCheck(this, n), ((e = t.call(this)).__isAsync = r), e
            );
          }
          return (
            _createClass(n, [
              {
                key: "emit",
                value: function (e) {
                  _get(_getPrototypeOf(n.prototype), "next", this).call(
                    this,
                    e
                  );
                },
              },
              {
                key: "subscribe",
                value: function (e, t, r) {
                  var i,
                    a = function (e) {
                      return null;
                    },
                    o = function () {
                      return null;
                    };
                  e && "object" == typeof e
                    ? ((i = this.__isAsync
                        ? function (t) {
                            setTimeout(function () {
                              return e.next(t);
                            });
                          }
                        : function (t) {
                            e.next(t);
                          }),
                      e.error &&
                        (a = this.__isAsync
                          ? function (t) {
                              setTimeout(function () {
                                return e.error(t);
                              });
                            }
                          : function (t) {
                              e.error(t);
                            }),
                      e.complete &&
                        (o = this.__isAsync
                          ? function () {
                              setTimeout(function () {
                                return e.complete();
                              });
                            }
                          : function () {
                              e.complete();
                            }))
                    : ((i = this.__isAsync
                        ? function (t) {
                            setTimeout(function () {
                              return e(t);
                            });
                          }
                        : function (t) {
                            e(t);
                          }),
                      t &&
                        (a = this.__isAsync
                          ? function (e) {
                              setTimeout(function () {
                                return t(e);
                              });
                            }
                          : function (e) {
                              t(e);
                            }),
                      r &&
                        (o = this.__isAsync
                          ? function () {
                              setTimeout(function () {
                                return r();
                              });
                            }
                          : function () {
                              r();
                            }));
                  var s = _get(
                    _getPrototypeOf(n.prototype),
                    "subscribe",
                    this
                  ).call(this, i, a, o);
                  return e instanceof f && e.add(s), s;
                },
              },
            ]),
            n
          );
        })(P),
        zo = new Le("Application Initializer"),
        Bo = (function () {
          var e = (function () {
            function e(t) {
              var n = this;
              _classCallCheck(this, e),
                (this.appInits = t),
                (this.initialized = !1),
                (this.done = !1),
                (this.donePromise = new Promise(function (e, t) {
                  (n.resolve = e), (n.reject = t);
                }));
            }
            return (
              _createClass(e, [
                {
                  key: "runInitializers",
                  value: function () {
                    var e = this;
                    if (!this.initialized) {
                      var t = [],
                        n = function () {
                          (e.done = !0), e.resolve();
                        };
                      if (this.appInits)
                        for (var r = 0; r < this.appInits.length; r++) {
                          var i = this.appInits[r]();
                          Sa(i) && t.push(i);
                        }
                      Promise.all(t)
                        .then(function () {
                          n();
                        })
                        .catch(function (t) {
                          e.reject(t);
                        }),
                        0 === t.length && n(),
                        (this.initialized = !0);
                    }
                  },
                },
              ]),
              e
            );
          })();
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(Ke(zo, 8));
            }),
            (e.ɵprov = ce({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        qo = new Le("AppId"),
        Go = {
          provide: qo,
          useFactory: function () {
            return "".concat(Wo()).concat(Wo()).concat(Wo());
          },
          deps: [],
        };
      function Wo() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      var Ko = new Le("Platform Initializer"),
        Zo = new Le("Platform ID"),
        Qo = new Le("appBootstrapListener"),
        $o = (function () {
          var e = (function () {
            function e() {
              _classCallCheck(this, e);
            }
            return (
              _createClass(e, [
                {
                  key: "log",
                  value: function (e) {
                    console.log(e);
                  },
                },
                {
                  key: "warn",
                  value: function (e) {
                    console.warn(e);
                  },
                },
              ]),
              e
            );
          })();
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵprov = ce({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        Yo = new Le("LocaleId"),
        Jo = new Le("DefaultCurrencyCode"),
        Xo = function e(t, n) {
          _classCallCheck(this, e),
            (this.ngModuleFactory = t),
            (this.componentFactories = n);
        },
        es = function (e) {
          return new No(e);
        },
        ts = es,
        ns = function (e) {
          return Promise.resolve(es(e));
        },
        rs = function (e) {
          var t = es(e),
            n = In(gt(e).declarations).reduce(function (e, t) {
              var n = pt(t);
              return n && e.push(new So(n)), e;
            }, []);
          return new Xo(t, n);
        },
        is = rs,
        as = function (e) {
          return Promise.resolve(rs(e));
        },
        os = (function () {
          var e = (function () {
            function e() {
              _classCallCheck(this, e),
                (this.compileModuleSync = ts),
                (this.compileModuleAsync = ns),
                (this.compileModuleAndAllComponentsSync = is),
                (this.compileModuleAndAllComponentsAsync = as);
            }
            return (
              _createClass(e, [
                { key: "clearCache", value: function () {} },
                { key: "clearCacheFor", value: function (e) {} },
                { key: "getModuleId", value: function (e) {} },
              ]),
              e
            );
          })();
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵprov = ce({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        ss = new Le("compilerOptions"),
        us = Promise.resolve(0);
      function ls(e) {
        "undefined" == typeof Zone
          ? us.then(function () {
              e && e.apply(null, null);
            })
          : Zone.current.scheduleMicroTask("scheduleMicrotask", e);
      }
      var cs = (function () {
        function e(t) {
          var n,
            r,
            i = t.enableLongStackTrace,
            a = void 0 !== i && i,
            o = t.shouldCoalesceEventChangeDetection,
            s = void 0 !== o && o;
          if (
            (_classCallCheck(this, e),
            (this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Vo(!1)),
            (this.onMicrotaskEmpty = new Vo(!1)),
            (this.onStable = new Vo(!1)),
            (this.onError = new Vo(!1)),
            "undefined" == typeof Zone)
          )
            throw new Error("In this configuration Angular requires Zone.js");
          Zone.assertZonePatched(),
            (this._nesting = 0),
            (this._outer = this._inner = Zone.current),
            Zone.wtfZoneSpec &&
              (this._inner = this._inner.fork(Zone.wtfZoneSpec)),
            Zone.TaskTrackingZoneSpec &&
              (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec())),
            a &&
              Zone.longStackTraceZoneSpec &&
              (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)),
            (this.shouldCoalesceEventChangeDetection = s),
            (this.lastRequestAnimationFrameId = -1),
            (this.nativeRequestAnimationFrame = (function () {
              var e = Ae.requestAnimationFrame,
                t = Ae.cancelAnimationFrame;
              if ("undefined" != typeof Zone && e && t) {
                var n = e[Zone.__symbol__("OriginalDelegate")];
                n && (e = n);
                var r = t[Zone.__symbol__("OriginalDelegate")];
                r && (t = r);
              }
              return {
                nativeRequestAnimationFrame: e,
                nativeCancelAnimationFrame: t,
              };
            })().nativeRequestAnimationFrame),
            (r =
              !!(n = this).shouldCoalesceEventChangeDetection &&
              n.nativeRequestAnimationFrame &&
              function () {
                !(function (e) {
                  -1 === e.lastRequestAnimationFrameId &&
                    ((e.lastRequestAnimationFrameId = e.nativeRequestAnimationFrame.call(
                      Ae,
                      function () {
                        (e.lastRequestAnimationFrameId = -1), vs(e), ds(e);
                      }
                    )),
                    vs(e));
                })(n);
              }),
            (n._inner = n._inner.fork({
              name: "angular",
              properties: { isAngularZone: !0, maybeDelayChangeDetection: r },
              onInvokeTask: function (e, t, i, a, o, s) {
                try {
                  return ps(n), e.invokeTask(i, a, o, s);
                } finally {
                  r && "eventTask" === a.type && r(), ys(n);
                }
              },
              onInvoke: function (e, t, r, i, a, o, s) {
                try {
                  return ps(n), e.invoke(r, i, a, o, s);
                } finally {
                  ys(n);
                }
              },
              onHasTask: function (e, t, r, i) {
                e.hasTask(r, i),
                  t === r &&
                    ("microTask" == i.change
                      ? ((n._hasPendingMicrotasks = i.microTask), vs(n), ds(n))
                      : "macroTask" == i.change &&
                        (n.hasPendingMacrotasks = i.macroTask));
              },
              onHandleError: function (e, t, r, i) {
                return (
                  e.handleError(r, i),
                  n.runOutsideAngular(function () {
                    return n.onError.emit(i);
                  }),
                  !1
                );
              },
            }));
        }
        return (
          _createClass(
            e,
            [
              {
                key: "run",
                value: function (e, t, n) {
                  return this._inner.run(e, t, n);
                },
              },
              {
                key: "runTask",
                value: function (e, t, n, r) {
                  var i = this._inner,
                    a = i.scheduleEventTask("NgZoneEvent: " + r, e, fs, hs, hs);
                  try {
                    return i.runTask(a, t, n);
                  } finally {
                    i.cancelTask(a);
                  }
                },
              },
              {
                key: "runGuarded",
                value: function (e, t, n) {
                  return this._inner.runGuarded(e, t, n);
                },
              },
              {
                key: "runOutsideAngular",
                value: function (e) {
                  return this._outer.run(e);
                },
              },
            ],
            [
              {
                key: "isInAngularZone",
                value: function () {
                  return !0 === Zone.current.get("isAngularZone");
                },
              },
              {
                key: "assertInAngularZone",
                value: function () {
                  if (!e.isInAngularZone())
                    throw new Error(
                      "Expected to be in Angular Zone, but it is not!"
                    );
                },
              },
              {
                key: "assertNotInAngularZone",
                value: function () {
                  if (e.isInAngularZone())
                    throw new Error(
                      "Expected to not be in Angular Zone, but it is!"
                    );
                },
              },
            ]
          ),
          e
        );
      })();
      function hs() {}
      var fs = {};
      function ds(e) {
        if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable)
          try {
            e._nesting++, e.onMicrotaskEmpty.emit(null);
          } finally {
            if ((e._nesting--, !e.hasPendingMicrotasks))
              try {
                e.runOutsideAngular(function () {
                  return e.onStable.emit(null);
                });
              } finally {
                e.isStable = !0;
              }
          }
      }
      function vs(e) {
        e.hasPendingMicrotasks = !!(
          e._hasPendingMicrotasks ||
          (e.shouldCoalesceEventChangeDetection &&
            -1 !== e.lastRequestAnimationFrameId)
        );
      }
      function ps(e) {
        e._nesting++,
          e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
      }
      function ys(e) {
        e._nesting--, ds(e);
      }
      var gs,
        ms = (function () {
          function e() {
            _classCallCheck(this, e),
              (this.hasPendingMicrotasks = !1),
              (this.hasPendingMacrotasks = !1),
              (this.isStable = !0),
              (this.onUnstable = new Vo()),
              (this.onMicrotaskEmpty = new Vo()),
              (this.onStable = new Vo()),
              (this.onError = new Vo());
          }
          return (
            _createClass(e, [
              {
                key: "run",
                value: function (e, t, n) {
                  return e.apply(t, n);
                },
              },
              {
                key: "runGuarded",
                value: function (e, t, n) {
                  return e.apply(t, n);
                },
              },
              {
                key: "runOutsideAngular",
                value: function (e) {
                  return e();
                },
              },
              {
                key: "runTask",
                value: function (e, t, n, r) {
                  return e.apply(t, n);
                },
              },
            ]),
            e
          );
        })(),
        _s = (function () {
          var e = (function () {
            function e(t) {
              var n = this;
              _classCallCheck(this, e),
                (this._ngZone = t),
                (this._pendingCount = 0),
                (this._isZoneStable = !0),
                (this._didWork = !1),
                (this._callbacks = []),
                (this.taskTrackingZone = null),
                this._watchAngularEvents(),
                t.run(function () {
                  n.taskTrackingZone =
                    "undefined" == typeof Zone
                      ? null
                      : Zone.current.get("TaskTrackingZone");
                });
            }
            return (
              _createClass(e, [
                {
                  key: "_watchAngularEvents",
                  value: function () {
                    var e = this;
                    this._ngZone.onUnstable.subscribe({
                      next: function () {
                        (e._didWork = !0), (e._isZoneStable = !1);
                      },
                    }),
                      this._ngZone.runOutsideAngular(function () {
                        e._ngZone.onStable.subscribe({
                          next: function () {
                            cs.assertNotInAngularZone(),
                              ls(function () {
                                (e._isZoneStable = !0),
                                  e._runCallbacksIfReady();
                              });
                          },
                        });
                      });
                  },
                },
                {
                  key: "increasePendingRequestCount",
                  value: function () {
                    return (
                      (this._pendingCount += 1),
                      (this._didWork = !0),
                      this._pendingCount
                    );
                  },
                },
                {
                  key: "decreasePendingRequestCount",
                  value: function () {
                    if (((this._pendingCount -= 1), this._pendingCount < 0))
                      throw new Error("pending async requests below zero");
                    return this._runCallbacksIfReady(), this._pendingCount;
                  },
                },
                {
                  key: "isStable",
                  value: function () {
                    return (
                      this._isZoneStable &&
                      0 === this._pendingCount &&
                      !this._ngZone.hasPendingMacrotasks
                    );
                  },
                },
                {
                  key: "_runCallbacksIfReady",
                  value: function () {
                    var e = this;
                    if (this.isStable())
                      ls(function () {
                        for (; 0 !== e._callbacks.length; ) {
                          var t = e._callbacks.pop();
                          clearTimeout(t.timeoutId), t.doneCb(e._didWork);
                        }
                        e._didWork = !1;
                      });
                    else {
                      var t = this.getPendingTasks();
                      (this._callbacks = this._callbacks.filter(function (e) {
                        return (
                          !e.updateCb ||
                          !e.updateCb(t) ||
                          (clearTimeout(e.timeoutId), !1)
                        );
                      })),
                        (this._didWork = !0);
                    }
                  },
                },
                {
                  key: "getPendingTasks",
                  value: function () {
                    return this.taskTrackingZone
                      ? this.taskTrackingZone.macroTasks.map(function (e) {
                          return {
                            source: e.source,
                            creationLocation: e.creationLocation,
                            data: e.data,
                          };
                        })
                      : [];
                  },
                },
                {
                  key: "addCallback",
                  value: function (e, t, n) {
                    var r = this,
                      i = -1;
                    t &&
                      t > 0 &&
                      (i = setTimeout(function () {
                        (r._callbacks = r._callbacks.filter(function (e) {
                          return e.timeoutId !== i;
                        })),
                          e(r._didWork, r.getPendingTasks());
                      }, t)),
                      this._callbacks.push({
                        doneCb: e,
                        timeoutId: i,
                        updateCb: n,
                      });
                  },
                },
                {
                  key: "whenStable",
                  value: function (e, t, n) {
                    if (n && !this.taskTrackingZone)
                      throw new Error(
                        'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?'
                      );
                    this.addCallback(e, t, n), this._runCallbacksIfReady();
                  },
                },
                {
                  key: "getPendingRequestCount",
                  value: function () {
                    return this._pendingCount;
                  },
                },
                {
                  key: "findProviders",
                  value: function (e, t, n) {
                    return [];
                  },
                },
              ]),
              e
            );
          })();
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(Ke(cs));
            }),
            (e.ɵprov = ce({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        ks = (function () {
          var e = (function () {
            function e() {
              _classCallCheck(this, e),
                (this._applications = new Map()),
                Cs.addToWindow(this);
            }
            return (
              _createClass(e, [
                {
                  key: "registerApplication",
                  value: function (e, t) {
                    this._applications.set(e, t);
                  },
                },
                {
                  key: "unregisterApplication",
                  value: function (e) {
                    this._applications.delete(e);
                  },
                },
                {
                  key: "unregisterAllApplications",
                  value: function () {
                    this._applications.clear();
                  },
                },
                {
                  key: "getTestability",
                  value: function (e) {
                    return this._applications.get(e) || null;
                  },
                },
                {
                  key: "getAllTestabilities",
                  value: function () {
                    return Array.from(this._applications.values());
                  },
                },
                {
                  key: "getAllRootElements",
                  value: function () {
                    return Array.from(this._applications.keys());
                  },
                },
                {
                  key: "findTestabilityInTree",
                  value: function (e) {
                    var t =
                      !(arguments.length > 1 && void 0 !== arguments[1]) ||
                      arguments[1];
                    return Cs.findTestabilityInTree(this, e, t);
                  },
                },
              ]),
              e
            );
          })();
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵprov = ce({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        Cs = new ((function () {
          function e() {
            _classCallCheck(this, e);
          }
          return (
            _createClass(e, [
              { key: "addToWindow", value: function (e) {} },
              {
                key: "findTestabilityInTree",
                value: function (e, t, n) {
                  return null;
                },
              },
            ]),
            e
          );
        })())(),
        ws = function (e, t, n) {
          var r = e.get(ss, []).concat(t),
            i = new No(n);
          if (0 === ta.size) return Promise.resolve(i);
          var a,
            o,
            s =
              ((a = r.map(function (e) {
                return e.providers;
              })),
              (o = []),
              a.forEach(function (e) {
                return e && o.push.apply(o, _toConsumableArray(e));
              }),
              o);
          if (0 === s.length) return Promise.resolve(i);
          var u = (function () {
              var e = Ae.ng;
              if (!e || !e.ɵcompilerFacade)
                throw new Error(
                  "Angular JIT compilation failed: '@angular/compiler' not loaded!\n  - JIT compilation is discouraged for production use-cases! Consider AOT mode instead.\n  - Did you bootstrap using '@angular/platform-browser-dynamic' or '@angular/platform-server'?\n  - Alternatively provide the compiler with 'import \"@angular/compiler\";' before bootstrapping."
                );
              return e.ɵcompilerFacade;
            })(),
            l = Xi.create({ providers: s }).get(u.ResourceLoader);
          return (function (e) {
            var t = [],
              n = new Map();
            function r(e) {
              var t = n.get(e);
              if (!t) {
                var r = (function (e) {
                  return Promise.resolve(l.get(e));
                })(e);
                n.set(e, (t = r.then(ra)));
              }
              return t;
            }
            return (
              ta.forEach(function (e, n) {
                var i = [];
                e.templateUrl &&
                  i.push(
                    r(e.templateUrl).then(function (t) {
                      e.template = t;
                    })
                  );
                var a = e.styleUrls,
                  o = e.styles || (e.styles = []),
                  s = e.styles.length;
                a &&
                  a.forEach(function (t, n) {
                    o.push(""),
                      i.push(
                        r(t).then(function (r) {
                          (o[s + n] = r),
                            a.splice(a.indexOf(t), 1),
                            0 == a.length && (e.styleUrls = void 0);
                        })
                      );
                  });
                var u = Promise.all(i).then(function () {
                  return (function (e) {
                    na.delete(e);
                  })(n);
                });
                t.push(u);
              }),
              (ta = new Map()),
              Promise.all(t).then(function () {})
            );
          })().then(function () {
            return i;
          });
        },
        bs = new Le("AllowMultipleToken"),
        Ss = function e(t, n) {
          _classCallCheck(this, e), (this.name = t), (this.token = n);
        };
      function Es(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          r = "Platform: " + t,
          i = new Le(r);
        return function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            a = Ts();
          if (!a || a.injector.get(bs, !1))
            if (e) e(n.concat(t).concat({ provide: i, useValue: !0 }));
            else {
              var o = n
                .concat(t)
                .concat(
                  { provide: i, useValue: !0 },
                  { provide: Ui, useValue: "platform" }
                );
              !(function (e) {
                if (gs && !gs.destroyed && !gs.injector.get(bs, !1))
                  throw new Error(
                    "There can be only one platform. Destroy the previous one to create a new one."
                  );
                gs = e.get(xs);
                var t = e.get(Ko, null);
                t &&
                  t.forEach(function (e) {
                    return e();
                  });
              })(Xi.create({ providers: o, name: r }));
            }
          return (function (e) {
            var t = Ts();
            if (!t) throw new Error("No platform exists!");
            if (!t.injector.get(e, null))
              throw new Error(
                "A platform with a different configuration has been created. Please destroy it first."
              );
            return t;
          })(i);
        };
      }
      function Ts() {
        return gs && !gs.destroyed ? gs : null;
      }
      var xs = (function () {
        var e = (function () {
          function e(t) {
            _classCallCheck(this, e),
              (this._injector = t),
              (this._modules = []),
              (this._destroyListeners = []),
              (this._destroyed = !1);
          }
          return (
            _createClass(e, [
              {
                key: "bootstrapModuleFactory",
                value: function (e, t) {
                  var n,
                    r,
                    i = this,
                    a =
                      ((n = t ? t.ngZone : void 0),
                      (r = (t && t.ngZoneEventCoalescing) || !1),
                      "noop" === n
                        ? new ms()
                        : ("zone.js" === n ? void 0 : n) ||
                          new cs({
                            enableLongStackTrace: er(),
                            shouldCoalesceEventChangeDetection: r,
                          })),
                    o = [{ provide: cs, useValue: a }];
                  return a.run(function () {
                    var t = Xi.create({
                        providers: o,
                        parent: i.injector,
                        name: e.moduleType.name,
                      }),
                      n = e.create(t),
                      r = n.injector.get($n, null);
                    if (!r)
                      throw new Error(
                        "No ErrorHandler. Is platform module (BrowserModule) included?"
                      );
                    return (
                      n.onDestroy(function () {
                        return Is(i._modules, n);
                      }),
                      a.runOutsideAngular(function () {
                        return a.onError.subscribe({
                          next: function (e) {
                            r.handleError(e);
                          },
                        });
                      }),
                      (function (e, t, r) {
                        try {
                          var a =
                            ((o = n.injector.get(Bo)).runInitializers(),
                            o.donePromise.then(function () {
                              return (
                                Ro(n.injector.get(Yo, "en-US") || "en-US"),
                                i._moduleDoBootstrap(n),
                                n
                              );
                            }));
                          return Sa(a)
                            ? a.catch(function (n) {
                                throw (
                                  (t.runOutsideAngular(function () {
                                    return e.handleError(n);
                                  }),
                                  n)
                                );
                              })
                            : a;
                        } catch (s) {
                          throw (
                            (t.runOutsideAngular(function () {
                              return e.handleError(s);
                            }),
                            s)
                          );
                        }
                        var o;
                      })(r, a)
                    );
                  });
                },
              },
              {
                key: "bootstrapModule",
                value: function (e) {
                  var t = this,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : [],
                    r = Ps({}, n);
                  return ws(this.injector, r, e).then(function (e) {
                    return t.bootstrapModuleFactory(e, r);
                  });
                },
              },
              {
                key: "_moduleDoBootstrap",
                value: function (e) {
                  var t = e.injector.get(As);
                  if (e._bootstrapComponents.length > 0)
                    e._bootstrapComponents.forEach(function (e) {
                      return t.bootstrap(e);
                    });
                  else {
                    if (!e.instance.ngDoBootstrap)
                      throw new Error(
                        "The module ".concat(
                          ke(e.instance.constructor),
                          ' was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.'
                        )
                      );
                    e.instance.ngDoBootstrap(t);
                  }
                  this._modules.push(e);
                },
              },
              {
                key: "onDestroy",
                value: function (e) {
                  this._destroyListeners.push(e);
                },
              },
              {
                key: "destroy",
                value: function () {
                  if (this._destroyed)
                    throw new Error("The platform has already been destroyed!");
                  this._modules.slice().forEach(function (e) {
                    return e.destroy();
                  }),
                    this._destroyListeners.forEach(function (e) {
                      return e();
                    }),
                    (this._destroyed = !0);
                },
              },
              {
                key: "injector",
                get: function () {
                  return this._injector;
                },
              },
              {
                key: "destroyed",
                get: function () {
                  return this._destroyed;
                },
              },
            ]),
            e
          );
        })();
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(Ke(Xi));
          }),
          (e.ɵprov = ce({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      function Ps(e, t) {
        return Array.isArray(t)
          ? t.reduce(Ps, e)
          : Object.assign(Object.assign({}, e), t);
      }
      var Os,
        As =
          (((Os = (function () {
            function e(t, n, r, i, a, o) {
              var s = this;
              _classCallCheck(this, e),
                (this._zone = t),
                (this._console = n),
                (this._injector = r),
                (this._exceptionHandler = i),
                (this._componentFactoryResolver = a),
                (this._initStatus = o),
                (this._bootstrapListeners = []),
                (this._views = []),
                (this._runningTick = !1),
                (this._enforceNoNewChanges = !1),
                (this._stable = !0),
                (this.componentTypes = []),
                (this.components = []),
                (this._enforceNoNewChanges = er()),
                this._zone.onMicrotaskEmpty.subscribe({
                  next: function () {
                    s._zone.run(function () {
                      s.tick();
                    });
                  },
                });
              var u = new w(function (e) {
                  (s._stable =
                    s._zone.isStable &&
                    !s._zone.hasPendingMacrotasks &&
                    !s._zone.hasPendingMicrotasks),
                    s._zone.runOutsideAngular(function () {
                      e.next(s._stable), e.complete();
                    });
                }),
                l = new w(function (e) {
                  var t;
                  s._zone.runOutsideAngular(function () {
                    t = s._zone.onStable.subscribe(function () {
                      cs.assertNotInAngularZone(),
                        ls(function () {
                          s._stable ||
                            s._zone.hasPendingMacrotasks ||
                            s._zone.hasPendingMicrotasks ||
                            ((s._stable = !0), e.next(!0));
                        });
                    });
                  });
                  var n = s._zone.onUnstable.subscribe(function () {
                    cs.assertInAngularZone(),
                      s._stable &&
                        ((s._stable = !1),
                        s._zone.runOutsideAngular(function () {
                          e.next(!1);
                        }));
                  });
                  return function () {
                    t.unsubscribe(), n.unsubscribe();
                  };
                });
              this.isStable = (function () {
                for (
                  var e = arguments.length, t = new Array(e), n = 0;
                  n < e;
                  n++
                )
                  t[n] = arguments[n];
                var r = Number.POSITIVE_INFINITY,
                  i = null,
                  a = t[t.length - 1];
                return (
                  A(a)
                    ? ((i = t.pop()),
                      t.length > 1 &&
                        "number" == typeof t[t.length - 1] &&
                        (r = t.pop()))
                    : "number" == typeof a && (r = t.pop()),
                  null === i && 1 === t.length && t[0] instanceof w
                    ? t[0]
                    : K(r)(Z(t, i))
                );
              })(
                u,
                l.pipe(function (e) {
                  return Q()(
                    ((t = te),
                    function (e) {
                      var n;
                      n =
                        "function" == typeof t
                          ? t
                          : function () {
                              return t;
                            };
                      var r = Object.create(e, X);
                      return (r.source = e), (r.subjectFactory = n), r;
                    })(e)
                  );
                  var t;
                })
              );
            }
            return (
              _createClass(e, [
                {
                  key: "bootstrap",
                  value: function (e, t) {
                    var n,
                      r = this;
                    if (!this._initStatus.done)
                      throw new Error(
                        "Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module."
                      );
                    (n =
                      e instanceof Ba
                        ? e
                        : this._componentFactoryResolver.resolveComponentFactory(
                            e
                          )),
                      this.componentTypes.push(n.componentType);
                    var i = n.isBoundToModule ? void 0 : this._injector.get(Ye),
                      a = n.create(Xi.NULL, [], t || n.selector, i);
                    a.onDestroy(function () {
                      r._unloadComponent(a);
                    });
                    var o = a.injector.get(_s, null);
                    return (
                      o &&
                        a.injector
                          .get(ks)
                          .registerApplication(a.location.nativeElement, o),
                      this._loadComponent(a),
                      er() &&
                        this._console.log(
                          "Angular is running in the development mode. Call enableProdMode() to enable the production mode."
                        ),
                      a
                    );
                  },
                },
                {
                  key: "tick",
                  value: function () {
                    var e = this;
                    if (this._runningTick)
                      throw new Error(
                        "ApplicationRef.tick is called recursively"
                      );
                    try {
                      this._runningTick = !0;
                      var t,
                        n = _createForOfIteratorHelper(this._views);
                      try {
                        for (n.s(); !(t = n.n()).done; )
                          t.value.detectChanges();
                      } catch (a) {
                        n.e(a);
                      } finally {
                        n.f();
                      }
                      if (this._enforceNoNewChanges) {
                        var r,
                          i = _createForOfIteratorHelper(this._views);
                        try {
                          for (i.s(); !(r = i.n()).done; )
                            r.value.checkNoChanges();
                        } catch (a) {
                          i.e(a);
                        } finally {
                          i.f();
                        }
                      }
                    } catch (o) {
                      this._zone.runOutsideAngular(function () {
                        return e._exceptionHandler.handleError(o);
                      });
                    } finally {
                      this._runningTick = !1;
                    }
                  },
                },
                {
                  key: "attachView",
                  value: function (e) {
                    var t = e;
                    this._views.push(t), t.attachToAppRef(this);
                  },
                },
                {
                  key: "detachView",
                  value: function (e) {
                    var t = e;
                    Is(this._views, t), t.detachFromAppRef();
                  },
                },
                {
                  key: "_loadComponent",
                  value: function (e) {
                    this.attachView(e.hostView),
                      this.tick(),
                      this.components.push(e),
                      this._injector
                        .get(Qo, [])
                        .concat(this._bootstrapListeners)
                        .forEach(function (t) {
                          return t(e);
                        });
                  },
                },
                {
                  key: "_unloadComponent",
                  value: function (e) {
                    this.detachView(e.hostView), Is(this.components, e);
                  },
                },
                {
                  key: "ngOnDestroy",
                  value: function () {
                    this._views.slice().forEach(function (e) {
                      return e.destroy();
                    });
                  },
                },
                {
                  key: "viewCount",
                  get: function () {
                    return this._views.length;
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || Os)(
              Ke(cs),
              Ke($o),
              Ke(Xi),
              Ke($n),
              Ke(Ga),
              Ke(Bo)
            );
          }),
          (Os.ɵprov = ce({ token: Os, factory: Os.ɵfac })),
          Os);
      function Is(e, t) {
        var n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      var Rs = function e() {
          _classCallCheck(this, e);
        },
        Ds = function e() {
          _classCallCheck(this, e);
        },
        Ms = { factoryPathPrefix: "", factoryPathSuffix: ".ngfactory" },
        Ns = (function () {
          var e = (function () {
            function e(t, n) {
              _classCallCheck(this, e),
                (this._compiler = t),
                (this._config = n || Ms);
            }
            return (
              _createClass(e, [
                {
                  key: "load",
                  value: function (e) {
                    return this.loadAndCompile(e);
                  },
                },
                {
                  key: "loadAndCompile",
                  value: function (e) {
                    var t = this,
                      r = _slicedToArray(e.split("#"), 2),
                      i = r[0],
                      a = r[1];
                    return (
                      void 0 === a && (a = "default"),
                      n("zn8P")(i)
                        .then(function (e) {
                          return e[a];
                        })
                        .then(function (e) {
                          return Fs(e, i, a);
                        })
                        .then(function (e) {
                          return t._compiler.compileModuleAsync(e);
                        })
                    );
                  },
                },
                {
                  key: "loadFactory",
                  value: function (e) {
                    var t = _slicedToArray(e.split("#"), 2),
                      r = t[0],
                      i = t[1],
                      a = "NgFactory";
                    return (
                      void 0 === i && ((i = "default"), (a = "")),
                      n("zn8P")(
                        this._config.factoryPathPrefix +
                          r +
                          this._config.factoryPathSuffix
                      )
                        .then(function (e) {
                          return e[i + a];
                        })
                        .then(function (e) {
                          return Fs(e, r, i);
                        })
                    );
                  },
                },
              ]),
              e
            );
          })();
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(Ke(os), Ke(Ds, 8));
            }),
            (e.ɵprov = ce({ token: e, factory: e.ɵfac })),
            e
          );
        })();
      function Fs(e, t, n) {
        if (!e)
          throw new Error("Cannot find '".concat(n, "' in '").concat(t, "'"));
        return e;
      }
      var js = Es(null, "core", [
          { provide: Zo, useValue: "unknown" },
          { provide: xs, deps: [Xi] },
          { provide: ks, deps: [] },
          { provide: $o, deps: [] },
        ]),
        Ls = [
          { provide: As, useClass: As, deps: [cs, $o, Xi, $n, Ga, Bo] },
          {
            provide: bo,
            deps: [cs],
            useFactory: function (e) {
              var t = [];
              return (
                e.onStable.subscribe(function () {
                  for (; t.length; ) t.pop()();
                }),
                function (e) {
                  t.push(e);
                }
              );
            },
          },
          { provide: Bo, useClass: Bo, deps: [[new ae(), zo]] },
          { provide: os, useClass: os, deps: [] },
          Go,
          {
            provide: co,
            useFactory: function () {
              return vo;
            },
            deps: [],
          },
          {
            provide: ho,
            useFactory: function () {
              return po;
            },
            deps: [],
          },
          {
            provide: Yo,
            useFactory: function (e) {
              return (
                Ro(
                  (e =
                    e ||
                    ("undefined" != typeof $localize && $localize.locale) ||
                    "en-US")
                ),
                e
              );
            },
            deps: [[new ie(Yo), new ae(), new se()]],
          },
          { provide: Jo, useValue: "USD" },
        ],
        Us = (function () {
          var e = function e(t) {
            _classCallCheck(this, e);
          };
          return (
            (e.ɵmod = ht({ type: e })),
            (e.ɵinj = he({
              factory: function (t) {
                return new (t || e)(Ke(As));
              },
              providers: Ls,
            })),
            e
          );
        })(),
        Hs = null;
      function Vs() {
        return Hs;
      }
      var zs,
        Bs = new Le("DocumentToken"),
        qs =
          (((zs = function e() {
            _classCallCheck(this, e);
          }).ɵfac = function (e) {
            return new (e || zs)();
          }),
          (zs.ɵprov = ce({ factory: Gs, token: zs, providedIn: "platform" })),
          zs);
      function Gs() {
        return Ke(Zs);
      }
      var Ws,
        Ks = new Le("Location Initialized"),
        Zs =
          (((Ws = (function (e) {
            _inherits(n, e);
            var t = _createSuper(n);
            function n(e) {
              var r;
              return (
                _classCallCheck(this, n),
                ((r = t.call(this))._doc = e),
                r._init(),
                r
              );
            }
            return (
              _createClass(n, [
                {
                  key: "_init",
                  value: function () {
                    (this.location = Vs().getLocation()),
                      (this._history = Vs().getHistory());
                  },
                },
                {
                  key: "getBaseHrefFromDOM",
                  value: function () {
                    return Vs().getBaseHref(this._doc);
                  },
                },
                {
                  key: "onPopState",
                  value: function (e) {
                    Vs()
                      .getGlobalEventTarget(this._doc, "window")
                      .addEventListener("popstate", e, !1);
                  },
                },
                {
                  key: "onHashChange",
                  value: function (e) {
                    Vs()
                      .getGlobalEventTarget(this._doc, "window")
                      .addEventListener("hashchange", e, !1);
                  },
                },
                {
                  key: "pushState",
                  value: function (e, t, n) {
                    Qs()
                      ? this._history.pushState(e, t, n)
                      : (this.location.hash = n);
                  },
                },
                {
                  key: "replaceState",
                  value: function (e, t, n) {
                    Qs()
                      ? this._history.replaceState(e, t, n)
                      : (this.location.hash = n);
                  },
                },
                {
                  key: "forward",
                  value: function () {
                    this._history.forward();
                  },
                },
                {
                  key: "back",
                  value: function () {
                    this._history.back();
                  },
                },
                {
                  key: "getState",
                  value: function () {
                    return this._history.state;
                  },
                },
                {
                  key: "href",
                  get: function () {
                    return this.location.href;
                  },
                },
                {
                  key: "protocol",
                  get: function () {
                    return this.location.protocol;
                  },
                },
                {
                  key: "hostname",
                  get: function () {
                    return this.location.hostname;
                  },
                },
                {
                  key: "port",
                  get: function () {
                    return this.location.port;
                  },
                },
                {
                  key: "pathname",
                  get: function () {
                    return this.location.pathname;
                  },
                  set: function (e) {
                    this.location.pathname = e;
                  },
                },
                {
                  key: "search",
                  get: function () {
                    return this.location.search;
                  },
                },
                {
                  key: "hash",
                  get: function () {
                    return this.location.hash;
                  },
                },
              ]),
              n
            );
          })(qs)).ɵfac = function (e) {
            return new (e || Ws)(Ke(Bs));
          }),
          (Ws.ɵprov = ce({ factory: $s, token: Ws, providedIn: "platform" })),
          Ws);
      function Qs() {
        return !!window.history.pushState;
      }
      function $s() {
        return new Zs(Ke(Bs));
      }
      function Ys(e, t) {
        if (0 == e.length) return t;
        if (0 == t.length) return e;
        var n = 0;
        return (
          e.endsWith("/") && n++,
          t.startsWith("/") && n++,
          2 == n ? e + t.substring(1) : 1 == n ? e + t : e + "/" + t
        );
      }
      function Js(e) {
        var t = e.match(/#|\?|$/),
          n = (t && t.index) || e.length;
        return e.slice(0, n - ("/" === e[n - 1] ? 1 : 0)) + e.slice(n);
      }
      function Xs(e) {
        return e && "?" !== e[0] ? "?" + e : e;
      }
      var eu,
        tu =
          (((eu = function e() {
            _classCallCheck(this, e);
          }).ɵfac = function (e) {
            return new (e || eu)();
          }),
          (eu.ɵprov = ce({ factory: nu, token: eu, providedIn: "root" })),
          eu);
      function nu(e) {
        var t = Ke(Bs).location;
        return new su(Ke(qs), (t && t.origin) || "");
      }
      var ru,
        iu,
        au,
        ou = new Le("appBaseHref"),
        su =
          (((au = (function (e) {
            _inherits(n, e);
            var t = _createSuper(n);
            function n(e, r) {
              var i;
              if (
                (_classCallCheck(this, n),
                ((i = t.call(this))._platformLocation = e),
                null == r && (r = i._platformLocation.getBaseHrefFromDOM()),
                null == r)
              )
                throw new Error(
                  "No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document."
                );
              return (i._baseHref = r), _possibleConstructorReturn(i);
            }
            return (
              _createClass(n, [
                {
                  key: "onPopState",
                  value: function (e) {
                    this._platformLocation.onPopState(e),
                      this._platformLocation.onHashChange(e);
                  },
                },
                {
                  key: "getBaseHref",
                  value: function () {
                    return this._baseHref;
                  },
                },
                {
                  key: "prepareExternalUrl",
                  value: function (e) {
                    return Ys(this._baseHref, e);
                  },
                },
                {
                  key: "path",
                  value: function () {
                    var e =
                        arguments.length > 0 &&
                        void 0 !== arguments[0] &&
                        arguments[0],
                      t =
                        this._platformLocation.pathname +
                        Xs(this._platformLocation.search),
                      n = this._platformLocation.hash;
                    return n && e ? "".concat(t).concat(n) : t;
                  },
                },
                {
                  key: "pushState",
                  value: function (e, t, n, r) {
                    var i = this.prepareExternalUrl(n + Xs(r));
                    this._platformLocation.pushState(e, t, i);
                  },
                },
                {
                  key: "replaceState",
                  value: function (e, t, n, r) {
                    var i = this.prepareExternalUrl(n + Xs(r));
                    this._platformLocation.replaceState(e, t, i);
                  },
                },
                {
                  key: "forward",
                  value: function () {
                    this._platformLocation.forward();
                  },
                },
                {
                  key: "back",
                  value: function () {
                    this._platformLocation.back();
                  },
                },
              ]),
              n
            );
          })(tu)).ɵfac = function (e) {
            return new (e || au)(Ke(qs), Ke(ou, 8));
          }),
          (au.ɵprov = ce({ token: au, factory: au.ɵfac })),
          au),
        uu =
          (((iu = (function (e) {
            _inherits(n, e);
            var t = _createSuper(n);
            function n(e, r) {
              var i;
              return (
                _classCallCheck(this, n),
                ((i = t.call(this))._platformLocation = e),
                (i._baseHref = ""),
                null != r && (i._baseHref = r),
                i
              );
            }
            return (
              _createClass(n, [
                {
                  key: "onPopState",
                  value: function (e) {
                    this._platformLocation.onPopState(e),
                      this._platformLocation.onHashChange(e);
                  },
                },
                {
                  key: "getBaseHref",
                  value: function () {
                    return this._baseHref;
                  },
                },
                {
                  key: "path",
                  value: function () {
                    arguments.length > 0 &&
                      void 0 !== arguments[0] &&
                      arguments[0];
                    var e = this._platformLocation.hash;
                    return (
                      null == e && (e = "#"), e.length > 0 ? e.substring(1) : e
                    );
                  },
                },
                {
                  key: "prepareExternalUrl",
                  value: function (e) {
                    var t = Ys(this._baseHref, e);
                    return t.length > 0 ? "#" + t : t;
                  },
                },
                {
                  key: "pushState",
                  value: function (e, t, n, r) {
                    var i = this.prepareExternalUrl(n + Xs(r));
                    0 == i.length && (i = this._platformLocation.pathname),
                      this._platformLocation.pushState(e, t, i);
                  },
                },
                {
                  key: "replaceState",
                  value: function (e, t, n, r) {
                    var i = this.prepareExternalUrl(n + Xs(r));
                    0 == i.length && (i = this._platformLocation.pathname),
                      this._platformLocation.replaceState(e, t, i);
                  },
                },
                {
                  key: "forward",
                  value: function () {
                    this._platformLocation.forward();
                  },
                },
                {
                  key: "back",
                  value: function () {
                    this._platformLocation.back();
                  },
                },
              ]),
              n
            );
          })(tu)).ɵfac = function (e) {
            return new (e || iu)(Ke(qs), Ke(ou, 8));
          }),
          (iu.ɵprov = ce({ token: iu, factory: iu.ɵfac })),
          iu),
        lu =
          (((ru = (function () {
            function e(t, n) {
              var r = this;
              _classCallCheck(this, e),
                (this._subject = new Vo()),
                (this._urlChangeListeners = []),
                (this._platformStrategy = t);
              var i = this._platformStrategy.getBaseHref();
              (this._platformLocation = n),
                (this._baseHref = Js(hu(i))),
                this._platformStrategy.onPopState(function (e) {
                  r._subject.emit({
                    url: r.path(!0),
                    pop: !0,
                    state: e.state,
                    type: e.type,
                  });
                });
            }
            return (
              _createClass(e, [
                {
                  key: "path",
                  value: function () {
                    var e =
                      arguments.length > 0 &&
                      void 0 !== arguments[0] &&
                      arguments[0];
                    return this.normalize(this._platformStrategy.path(e));
                  },
                },
                {
                  key: "getState",
                  value: function () {
                    return this._platformLocation.getState();
                  },
                },
                {
                  key: "isCurrentPathEqualTo",
                  value: function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "";
                    return this.path() == this.normalize(e + Xs(t));
                  },
                },
                {
                  key: "normalize",
                  value: function (t) {
                    return e.stripTrailingSlash(
                      (function (e, t) {
                        return e && t.startsWith(e) ? t.substring(e.length) : t;
                      })(this._baseHref, hu(t))
                    );
                  },
                },
                {
                  key: "prepareExternalUrl",
                  value: function (e) {
                    return (
                      e && "/" !== e[0] && (e = "/" + e),
                      this._platformStrategy.prepareExternalUrl(e)
                    );
                  },
                },
                {
                  key: "go",
                  value: function (e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : "",
                      n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : null;
                    this._platformStrategy.pushState(n, "", e, t),
                      this._notifyUrlChangeListeners(
                        this.prepareExternalUrl(e + Xs(t)),
                        n
                      );
                  },
                },
                {
                  key: "replaceState",
                  value: function (e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : "",
                      n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : null;
                    this._platformStrategy.replaceState(n, "", e, t),
                      this._notifyUrlChangeListeners(
                        this.prepareExternalUrl(e + Xs(t)),
                        n
                      );
                  },
                },
                {
                  key: "forward",
                  value: function () {
                    this._platformStrategy.forward();
                  },
                },
                {
                  key: "back",
                  value: function () {
                    this._platformStrategy.back();
                  },
                },
                {
                  key: "onUrlChange",
                  value: function (e) {
                    var t = this;
                    this._urlChangeListeners.push(e),
                      this.subscribe(function (e) {
                        t._notifyUrlChangeListeners(e.url, e.state);
                      });
                  },
                },
                {
                  key: "_notifyUrlChangeListeners",
                  value: function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : "",
                      t = arguments.length > 1 ? arguments[1] : void 0;
                    this._urlChangeListeners.forEach(function (n) {
                      return n(e, t);
                    });
                  },
                },
                {
                  key: "subscribe",
                  value: function (e, t, n) {
                    return this._subject.subscribe({
                      next: e,
                      error: t,
                      complete: n,
                    });
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || ru)(Ke(tu), Ke(qs));
          }),
          (ru.normalizeQueryParams = Xs),
          (ru.joinWithSlash = Ys),
          (ru.stripTrailingSlash = Js),
          (ru.ɵprov = ce({ factory: cu, token: ru, providedIn: "root" })),
          ru);
      function cu() {
        return new lu(Ke(tu), Ke(qs));
      }
      function hu(e) {
        return e.replace(/\/index.html$/, "");
      }
      var fu = {
          ADP: [void 0, void 0, 0],
          AFN: [void 0, void 0, 0],
          ALL: [void 0, void 0, 0],
          AMD: [void 0, void 0, 2],
          AOA: [void 0, "Kz"],
          ARS: [void 0, "$"],
          AUD: ["A$", "$"],
          BAM: [void 0, "KM"],
          BBD: [void 0, "$"],
          BDT: [void 0, "\u09f3"],
          BHD: [void 0, void 0, 3],
          BIF: [void 0, void 0, 0],
          BMD: [void 0, "$"],
          BND: [void 0, "$"],
          BOB: [void 0, "Bs"],
          BRL: ["R$"],
          BSD: [void 0, "$"],
          BWP: [void 0, "P"],
          BYN: [void 0, "\u0440.", 2],
          BYR: [void 0, void 0, 0],
          BZD: [void 0, "$"],
          CAD: ["CA$", "$", 2],
          CHF: [void 0, void 0, 2],
          CLF: [void 0, void 0, 4],
          CLP: [void 0, "$", 0],
          CNY: ["CN\xa5", "\xa5"],
          COP: [void 0, "$", 2],
          CRC: [void 0, "\u20a1", 2],
          CUC: [void 0, "$"],
          CUP: [void 0, "$"],
          CZK: [void 0, "K\u010d", 2],
          DJF: [void 0, void 0, 0],
          DKK: [void 0, "kr", 2],
          DOP: [void 0, "$"],
          EGP: [void 0, "E\xa3"],
          ESP: [void 0, "\u20a7", 0],
          EUR: ["\u20ac"],
          FJD: [void 0, "$"],
          FKP: [void 0, "\xa3"],
          GBP: ["\xa3"],
          GEL: [void 0, "\u20be"],
          GIP: [void 0, "\xa3"],
          GNF: [void 0, "FG", 0],
          GTQ: [void 0, "Q"],
          GYD: [void 0, "$", 2],
          HKD: ["HK$", "$"],
          HNL: [void 0, "L"],
          HRK: [void 0, "kn"],
          HUF: [void 0, "Ft", 2],
          IDR: [void 0, "Rp", 2],
          ILS: ["\u20aa"],
          INR: ["\u20b9"],
          IQD: [void 0, void 0, 0],
          IRR: [void 0, void 0, 0],
          ISK: [void 0, "kr", 0],
          ITL: [void 0, void 0, 0],
          JMD: [void 0, "$"],
          JOD: [void 0, void 0, 3],
          JPY: ["\xa5", void 0, 0],
          KHR: [void 0, "\u17db"],
          KMF: [void 0, "CF", 0],
          KPW: [void 0, "\u20a9", 0],
          KRW: ["\u20a9", void 0, 0],
          KWD: [void 0, void 0, 3],
          KYD: [void 0, "$"],
          KZT: [void 0, "\u20b8"],
          LAK: [void 0, "\u20ad", 0],
          LBP: [void 0, "L\xa3", 0],
          LKR: [void 0, "Rs"],
          LRD: [void 0, "$"],
          LTL: [void 0, "Lt"],
          LUF: [void 0, void 0, 0],
          LVL: [void 0, "Ls"],
          LYD: [void 0, void 0, 3],
          MGA: [void 0, "Ar", 0],
          MGF: [void 0, void 0, 0],
          MMK: [void 0, "K", 0],
          MNT: [void 0, "\u20ae", 2],
          MRO: [void 0, void 0, 0],
          MUR: [void 0, "Rs", 2],
          MXN: ["MX$", "$"],
          MYR: [void 0, "RM"],
          NAD: [void 0, "$"],
          NGN: [void 0, "\u20a6"],
          NIO: [void 0, "C$"],
          NOK: [void 0, "kr", 2],
          NPR: [void 0, "Rs"],
          NZD: ["NZ$", "$"],
          OMR: [void 0, void 0, 3],
          PHP: [void 0, "\u20b1"],
          PKR: [void 0, "Rs", 2],
          PLN: [void 0, "z\u0142"],
          PYG: [void 0, "\u20b2", 0],
          RON: [void 0, "lei"],
          RSD: [void 0, void 0, 0],
          RUB: [void 0, "\u20bd"],
          RUR: [void 0, "\u0440."],
          RWF: [void 0, "RF", 0],
          SBD: [void 0, "$"],
          SEK: [void 0, "kr", 2],
          SGD: [void 0, "$"],
          SHP: [void 0, "\xa3"],
          SLL: [void 0, void 0, 0],
          SOS: [void 0, void 0, 0],
          SRD: [void 0, "$"],
          SSP: [void 0, "\xa3"],
          STD: [void 0, void 0, 0],
          STN: [void 0, "Db"],
          SYP: [void 0, "\xa3", 0],
          THB: [void 0, "\u0e3f"],
          TMM: [void 0, void 0, 0],
          TND: [void 0, void 0, 3],
          TOP: [void 0, "T$"],
          TRL: [void 0, void 0, 0],
          TRY: [void 0, "\u20ba"],
          TTD: [void 0, "$"],
          TWD: ["NT$", "$", 2],
          TZS: [void 0, void 0, 2],
          UAH: [void 0, "\u20b4"],
          UGX: [void 0, void 0, 0],
          USD: ["$"],
          UYI: [void 0, void 0, 0],
          UYU: [void 0, "$"],
          UYW: [void 0, void 0, 4],
          UZS: [void 0, void 0, 2],
          VEF: [void 0, "Bs", 2],
          VND: ["\u20ab", void 0, 0],
          VUV: [void 0, void 0, 0],
          XAF: ["FCFA", void 0, 0],
          XCD: ["EC$", "$"],
          XOF: ["CFA", void 0, 0],
          XPF: ["CFPF", void 0, 0],
          XXX: ["\xa4"],
          YER: [void 0, void 0, 0],
          ZAR: [void 0, "R"],
          ZMK: [void 0, void 0, 0],
          ZMW: [void 0, "ZK"],
          ZWD: [void 0, void 0, 0],
        },
        du = (function () {
          var e = { Decimal: 0, Percent: 1, Currency: 2, Scientific: 3 };
          return (
            (e[e.Decimal] = "Decimal"),
            (e[e.Percent] = "Percent"),
            (e[e.Currency] = "Currency"),
            (e[e.Scientific] = "Scientific"),
            e
          );
        })(),
        vu = (function () {
          var e = { Zero: 0, One: 1, Two: 2, Few: 3, Many: 4, Other: 5 };
          return (
            (e[e.Zero] = "Zero"),
            (e[e.One] = "One"),
            (e[e.Two] = "Two"),
            (e[e.Few] = "Few"),
            (e[e.Many] = "Many"),
            (e[e.Other] = "Other"),
            e
          );
        })(),
        pu = (function () {
          var e = { Format: 0, Standalone: 1 };
          return (e[e.Format] = "Format"), (e[e.Standalone] = "Standalone"), e;
        })(),
        yu = (function () {
          var e = { Narrow: 0, Abbreviated: 1, Wide: 2, Short: 3 };
          return (
            (e[e.Narrow] = "Narrow"),
            (e[e.Abbreviated] = "Abbreviated"),
            (e[e.Wide] = "Wide"),
            (e[e.Short] = "Short"),
            e
          );
        })(),
        gu = (function () {
          var e = { Short: 0, Medium: 1, Long: 2, Full: 3 };
          return (
            (e[e.Short] = "Short"),
            (e[e.Medium] = "Medium"),
            (e[e.Long] = "Long"),
            (e[e.Full] = "Full"),
            e
          );
        })(),
        mu = (function () {
          var e = {
            Decimal: 0,
            Group: 1,
            List: 2,
            PercentSign: 3,
            PlusSign: 4,
            MinusSign: 5,
            Exponential: 6,
            SuperscriptingExponent: 7,
            PerMille: 8,
            Infinity: 9,
            NaN: 10,
            TimeSeparator: 11,
            CurrencyDecimal: 12,
            CurrencyGroup: 13,
          };
          return (
            (e[e.Decimal] = "Decimal"),
            (e[e.Group] = "Group"),
            (e[e.List] = "List"),
            (e[e.PercentSign] = "PercentSign"),
            (e[e.PlusSign] = "PlusSign"),
            (e[e.MinusSign] = "MinusSign"),
            (e[e.Exponential] = "Exponential"),
            (e[e.SuperscriptingExponent] = "SuperscriptingExponent"),
            (e[e.PerMille] = "PerMille"),
            (e[e.Infinity] = "Infinity"),
            (e[e.NaN] = "NaN"),
            (e[e.TimeSeparator] = "TimeSeparator"),
            (e[e.CurrencyDecimal] = "CurrencyDecimal"),
            (e[e.CurrencyGroup] = "CurrencyGroup"),
            e
          );
        })();
      function _u(e, t) {
        return Su(Oo(e)[Io.DateFormat], t);
      }
      function ku(e, t) {
        return Su(Oo(e)[Io.TimeFormat], t);
      }
      function Cu(e, t) {
        return Su(Oo(e)[Io.DateTimeFormat], t);
      }
      function wu(e, t) {
        var n = Oo(e),
          r = n[Io.NumberSymbols][t];
        if (void 0 === r) {
          if (t === mu.CurrencyDecimal) return n[Io.NumberSymbols][mu.Decimal];
          if (t === mu.CurrencyGroup) return n[Io.NumberSymbols][mu.Group];
        }
        return r;
      }
      function bu(e) {
        if (!e[Io.ExtraData])
          throw new Error(
            'Missing extra locale data for the locale "'.concat(
              e[Io.LocaleId],
              '". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.'
            )
          );
      }
      function Su(e, t) {
        for (var n = t; n > -1; n--) if (void 0 !== e[n]) return e[n];
        throw new Error("Locale data API: locale data undefined");
      }
      function Eu(e) {
        var t = _slicedToArray(e.split(":"), 2);
        return { hours: +t[0], minutes: +t[1] };
      }
      var Tu = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,
        xu = {},
        Pu = /((?:[^GyMLwWdEabBhHmsSzZO']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,
        Ou = (function () {
          var e = { Short: 0, ShortGMT: 1, Long: 2, Extended: 3 };
          return (
            (e[e.Short] = "Short"),
            (e[e.ShortGMT] = "ShortGMT"),
            (e[e.Long] = "Long"),
            (e[e.Extended] = "Extended"),
            e
          );
        })(),
        Au = (function () {
          var e = {
            FullYear: 0,
            Month: 1,
            Date: 2,
            Hours: 3,
            Minutes: 4,
            Seconds: 5,
            FractionalSeconds: 6,
            Day: 7,
          };
          return (
            (e[e.FullYear] = "FullYear"),
            (e[e.Month] = "Month"),
            (e[e.Date] = "Date"),
            (e[e.Hours] = "Hours"),
            (e[e.Minutes] = "Minutes"),
            (e[e.Seconds] = "Seconds"),
            (e[e.FractionalSeconds] = "FractionalSeconds"),
            (e[e.Day] = "Day"),
            e
          );
        })(),
        Iu = (function () {
          var e = { DayPeriods: 0, Days: 1, Months: 2, Eras: 3 };
          return (
            (e[e.DayPeriods] = "DayPeriods"),
            (e[e.Days] = "Days"),
            (e[e.Months] = "Months"),
            (e[e.Eras] = "Eras"),
            e
          );
        })();
      function Ru(e, t) {
        return (
          t &&
            (e = e.replace(/\{([^}]+)}/g, function (e, n) {
              return null != t && n in t ? t[n] : e;
            })),
          e
        );
      }
      function Du(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "-",
          r = arguments.length > 3 ? arguments[3] : void 0,
          i = arguments.length > 4 ? arguments[4] : void 0,
          a = "";
        (e < 0 || (i && e <= 0)) && (i ? (e = 1 - e) : ((e = -e), (a = n)));
        for (var o = String(e); o.length < t; ) o = "0" + o;
        return r && (o = o.substr(o.length - t)), a + o;
      }
      function Mu(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        return function (a, o) {
          var s,
            u = (function (e, t) {
              switch (e) {
                case Au.FullYear:
                  return t.getFullYear();
                case Au.Month:
                  return t.getMonth();
                case Au.Date:
                  return t.getDate();
                case Au.Hours:
                  return t.getHours();
                case Au.Minutes:
                  return t.getMinutes();
                case Au.Seconds:
                  return t.getSeconds();
                case Au.FractionalSeconds:
                  return t.getMilliseconds();
                case Au.Day:
                  return t.getDay();
                default:
                  throw new Error('Unknown DateType value "'.concat(e, '".'));
              }
            })(e, a);
          if (((n > 0 || u > -n) && (u += n), e === Au.Hours))
            0 === u && -12 === n && (u = 12);
          else if (e === Au.FractionalSeconds)
            return (s = t), Du(u, 3).substr(0, s);
          var l = wu(o, mu.MinusSign);
          return Du(u, t, l, r, i);
        };
      }
      function Nu(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : pu.Format,
          r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        return function (i, a) {
          return (function (e, t, n, r, i, a) {
            switch (n) {
              case Iu.Months:
                return (function (e, t, n) {
                  var r = Oo(e),
                    i = Su([r[Io.MonthsFormat], r[Io.MonthsStandalone]], t);
                  return Su(i, n);
                })(t, i, r)[e.getMonth()];
              case Iu.Days:
                return (function (e, t, n) {
                  var r = Oo(e),
                    i = Su([r[Io.DaysFormat], r[Io.DaysStandalone]], t);
                  return Su(i, n);
                })(t, i, r)[e.getDay()];
              case Iu.DayPeriods:
                var o = e.getHours(),
                  s = e.getMinutes();
                if (a) {
                  var u,
                    l = (function (e) {
                      var t = Oo(e);
                      return (
                        bu(t),
                        (t[Io.ExtraData][2] || []).map(function (e) {
                          return "string" == typeof e
                            ? Eu(e)
                            : [Eu(e[0]), Eu(e[1])];
                        })
                      );
                    })(t),
                    c = (function (e, t, n) {
                      var r = Oo(e);
                      bu(r);
                      var i =
                        Su([r[Io.ExtraData][0], r[Io.ExtraData][1]], t) || [];
                      return Su(i, n) || [];
                    })(t, i, r);
                  if (
                    (l.forEach(function (e, t) {
                      if (Array.isArray(e)) {
                        var n = e[0],
                          r = n.hours,
                          i = n.minutes,
                          a = e[1],
                          l = a.hours,
                          h = a.minutes;
                        o >= r &&
                          s >= i &&
                          (o < l || (o === l && s < h)) &&
                          (u = c[t]);
                      } else {
                        var f = e.hours,
                          d = e.minutes;
                        f === o && d === s && (u = c[t]);
                      }
                    }),
                    u)
                  )
                    return u;
                }
                return (function (e, t, n) {
                  var r = Oo(e),
                    i = Su(
                      [r[Io.DayPeriodsFormat], r[Io.DayPeriodsStandalone]],
                      t
                    );
                  return Su(i, n);
                })(t, i, r)[o < 12 ? 0 : 1];
              case Iu.Eras:
                return (function (e, t) {
                  return Su(Oo(e)[Io.Eras], t);
                })(t, r)[e.getFullYear() <= 0 ? 0 : 1];
              default:
                throw new Error("unexpected translation type " + n);
            }
          })(i, a, e, t, n, r);
        };
      }
      function Fu(e) {
        return function (t, n, r) {
          var i = -1 * r,
            a = wu(n, mu.MinusSign),
            o = i > 0 ? Math.floor(i / 60) : Math.ceil(i / 60);
          switch (e) {
            case Ou.Short:
              return (
                (i >= 0 ? "+" : "") + Du(o, 2, a) + Du(Math.abs(i % 60), 2, a)
              );
            case Ou.ShortGMT:
              return "GMT" + (i >= 0 ? "+" : "") + Du(o, 1, a);
            case Ou.Long:
              return (
                "GMT" +
                (i >= 0 ? "+" : "") +
                Du(o, 2, a) +
                ":" +
                Du(Math.abs(i % 60), 2, a)
              );
            case Ou.Extended:
              return 0 === r
                ? "Z"
                : (i >= 0 ? "+" : "") +
                    Du(o, 2, a) +
                    ":" +
                    Du(Math.abs(i % 60), 2, a);
            default:
              throw new Error('Unknown zone width "'.concat(e, '"'));
          }
        };
      }
      function ju(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return function (n, r) {
          var i, a, o, s;
          if (t) {
            var u = new Date(n.getFullYear(), n.getMonth(), 1).getDay() - 1,
              l = n.getDate();
            i = 1 + Math.floor((l + u) / 7);
          } else {
            var c =
                ((a = n.getFullYear()),
                (o = new Date(a, 0, 1).getDay()),
                new Date(a, 0, 1 + (o <= 4 ? 4 : 11) - o)),
              h =
                ((s = n),
                new Date(
                  s.getFullYear(),
                  s.getMonth(),
                  s.getDate() + (4 - s.getDay())
                )).getTime() - c.getTime();
            i = 1 + Math.round(h / 6048e5);
          }
          return Du(i, e, wu(r, mu.MinusSign));
        };
      }
      var Lu = {};
      function Uu(e, t) {
        e = e.replace(/:/g, "");
        var n = Date.parse("Jan 01, 1970 00:00:00 " + e) / 6e4;
        return isNaN(n) ? t : n;
      }
      function Hu(e) {
        return e instanceof Date && !isNaN(e.valueOf());
      }
      var Vu = /^(\d+)?\.((\d+)(-(\d+))?)?$/;
      function zu(e) {
        var t = parseInt(e);
        if (isNaN(t))
          throw new Error("Invalid integer literal when parsing " + e);
        return t;
      }
      var Bu,
        qu,
        Gu,
        Wu = function e() {
          _classCallCheck(this, e);
        },
        Ku =
          (((qu = (function (e) {
            _inherits(n, e);
            var t = _createSuper(n);
            function n(e) {
              var r;
              return (
                _classCallCheck(this, n), ((r = t.call(this)).locale = e), r
              );
            }
            return (
              _createClass(n, [
                {
                  key: "getPluralCategory",
                  value: function (e, t) {
                    switch (
                      (function (e) {
                        return Oo(e)[Io.PluralCase];
                      })(t || this.locale)(e)
                    ) {
                      case vu.Zero:
                        return "zero";
                      case vu.One:
                        return "one";
                      case vu.Two:
                        return "two";
                      case vu.Few:
                        return "few";
                      case vu.Many:
                        return "many";
                      default:
                        return "other";
                    }
                  },
                },
              ]),
              n
            );
          })(Wu)).ɵfac = function (e) {
            return new (e || qu)(Ke(Yo));
          }),
          (qu.ɵprov = ce({ token: qu, factory: qu.ɵfac })),
          qu),
        Zu =
          (((Bu = (function () {
            function e(t, n, r, i) {
              _classCallCheck(this, e),
                (this._iterableDiffers = t),
                (this._keyValueDiffers = n),
                (this._ngEl = r),
                (this._renderer = i),
                (this._iterableDiffer = null),
                (this._keyValueDiffer = null),
                (this._initialClasses = []),
                (this._rawClass = null);
            }
            return (
              _createClass(e, [
                {
                  key: "ngDoCheck",
                  value: function () {
                    if (this._iterableDiffer) {
                      var e = this._iterableDiffer.diff(this._rawClass);
                      e && this._applyIterableChanges(e);
                    } else if (this._keyValueDiffer) {
                      var t = this._keyValueDiffer.diff(this._rawClass);
                      t && this._applyKeyValueChanges(t);
                    }
                  },
                },
                {
                  key: "_applyKeyValueChanges",
                  value: function (e) {
                    var t = this;
                    e.forEachAddedItem(function (e) {
                      return t._toggleClass(e.key, e.currentValue);
                    }),
                      e.forEachChangedItem(function (e) {
                        return t._toggleClass(e.key, e.currentValue);
                      }),
                      e.forEachRemovedItem(function (e) {
                        e.previousValue && t._toggleClass(e.key, !1);
                      });
                  },
                },
                {
                  key: "_applyIterableChanges",
                  value: function (e) {
                    var t = this;
                    e.forEachAddedItem(function (e) {
                      if ("string" != typeof e.item)
                        throw new Error(
                          "NgClass can only toggle CSS classes expressed as strings, got " +
                            ke(e.item)
                        );
                      t._toggleClass(e.item, !0);
                    }),
                      e.forEachRemovedItem(function (e) {
                        return t._toggleClass(e.item, !1);
                      });
                  },
                },
                {
                  key: "_applyClasses",
                  value: function (e) {
                    var t = this;
                    e &&
                      (Array.isArray(e) || e instanceof Set
                        ? e.forEach(function (e) {
                            return t._toggleClass(e, !0);
                          })
                        : Object.keys(e).forEach(function (n) {
                            return t._toggleClass(n, !!e[n]);
                          }));
                  },
                },
                {
                  key: "_removeClasses",
                  value: function (e) {
                    var t = this;
                    e &&
                      (Array.isArray(e) || e instanceof Set
                        ? e.forEach(function (e) {
                            return t._toggleClass(e, !1);
                          })
                        : Object.keys(e).forEach(function (e) {
                            return t._toggleClass(e, !1);
                          }));
                  },
                },
                {
                  key: "_toggleClass",
                  value: function (e, t) {
                    var n = this;
                    (e = e.trim()) &&
                      e.split(/\s+/g).forEach(function (e) {
                        t
                          ? n._renderer.addClass(n._ngEl.nativeElement, e)
                          : n._renderer.removeClass(n._ngEl.nativeElement, e);
                      });
                  },
                },
                {
                  key: "klass",
                  set: function (e) {
                    this._removeClasses(this._initialClasses),
                      (this._initialClasses =
                        "string" == typeof e ? e.split(/\s+/) : []),
                      this._applyClasses(this._initialClasses),
                      this._applyClasses(this._rawClass);
                  },
                },
                {
                  key: "ngClass",
                  set: function (e) {
                    this._removeClasses(this._rawClass),
                      this._applyClasses(this._initialClasses),
                      (this._iterableDiffer = null),
                      (this._keyValueDiffer = null),
                      (this._rawClass =
                        "string" == typeof e ? e.split(/\s+/) : e),
                      this._rawClass &&
                        (la(this._rawClass)
                          ? (this._iterableDiffer = this._iterableDiffers
                              .find(this._rawClass)
                              .create())
                          : (this._keyValueDiffer = this._keyValueDiffers
                              .find(this._rawClass)
                              .create()));
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || Bu)(ya(co), ya(ho), ya(Wa), ya($a));
          }),
          (Bu.ɵdir = dt({
            type: Bu,
            selectors: [["", "ngClass", ""]],
            inputs: { klass: ["class", "klass"], ngClass: "ngClass" },
          })),
          Bu),
        Qu = (function () {
          function e(t, n, r, i) {
            _classCallCheck(this, e),
              (this.$implicit = t),
              (this.ngForOf = n),
              (this.index = r),
              (this.count = i);
          }
          return (
            _createClass(e, [
              {
                key: "first",
                get: function () {
                  return 0 === this.index;
                },
              },
              {
                key: "last",
                get: function () {
                  return this.index === this.count - 1;
                },
              },
              {
                key: "even",
                get: function () {
                  return this.index % 2 == 0;
                },
              },
              {
                key: "odd",
                get: function () {
                  return !this.even;
                },
              },
            ]),
            e
          );
        })(),
        $u =
          (((Gu = (function () {
            function e(t, n, r) {
              _classCallCheck(this, e),
                (this._viewContainer = t),
                (this._template = n),
                (this._differs = r),
                (this._ngForOf = null),
                (this._ngForOfDirty = !0),
                (this._differ = null);
            }
            return (
              _createClass(
                e,
                [
                  {
                    key: "ngDoCheck",
                    value: function () {
                      if (this._ngForOfDirty) {
                        this._ngForOfDirty = !1;
                        var e = this._ngForOf;
                        if (!this._differ && e)
                          try {
                            this._differ = this._differs
                              .find(e)
                              .create(this.ngForTrackBy);
                          } catch (r) {
                            throw new Error(
                              "Cannot find a differ supporting object '"
                                .concat(e, "' of type '")
                                .concat(
                                  (t = e).name || typeof t,
                                  "'. NgFor only supports binding to Iterables such as Arrays."
                                )
                            );
                          }
                      }
                      var t;
                      if (this._differ) {
                        var n = this._differ.diff(this._ngForOf);
                        n && this._applyChanges(n);
                      }
                    },
                  },
                  {
                    key: "_applyChanges",
                    value: function (e) {
                      var t = this,
                        n = [];
                      e.forEachOperation(function (e, r, i) {
                        if (null == e.previousIndex) {
                          var a = t._viewContainer.createEmbeddedView(
                              t._template,
                              new Qu(null, t._ngForOf, -1, -1),
                              null === i ? void 0 : i
                            ),
                            o = new Yu(e, a);
                          n.push(o);
                        } else if (null == i)
                          t._viewContainer.remove(null === r ? void 0 : r);
                        else if (null !== r) {
                          var s = t._viewContainer.get(r);
                          t._viewContainer.move(s, i);
                          var u = new Yu(e, s);
                          n.push(u);
                        }
                      });
                      for (var r = 0; r < n.length; r++)
                        this._perViewChange(n[r].view, n[r].record);
                      for (
                        var i = 0, a = this._viewContainer.length;
                        i < a;
                        i++
                      ) {
                        var o = this._viewContainer.get(i);
                        (o.context.index = i),
                          (o.context.count = a),
                          (o.context.ngForOf = this._ngForOf);
                      }
                      e.forEachIdentityChange(function (e) {
                        t._viewContainer.get(e.currentIndex).context.$implicit =
                          e.item;
                      });
                    },
                  },
                  {
                    key: "_perViewChange",
                    value: function (e, t) {
                      e.context.$implicit = t.item;
                    },
                  },
                  {
                    key: "ngForOf",
                    set: function (e) {
                      (this._ngForOf = e), (this._ngForOfDirty = !0);
                    },
                  },
                  {
                    key: "ngForTrackBy",
                    set: function (e) {
                      er() &&
                        null != e &&
                        "function" != typeof e &&
                        console &&
                        console.warn &&
                        console.warn(
                          "trackBy must be a function, but received ".concat(
                            JSON.stringify(e),
                            ". See https://angular.io/api/common/NgForOf#change-propagation for more information."
                          )
                        ),
                        (this._trackByFn = e);
                    },
                    get: function () {
                      return this._trackByFn;
                    },
                  },
                  {
                    key: "ngForTemplate",
                    set: function (e) {
                      e && (this._template = e);
                    },
                  },
                ],
                [
                  {
                    key: "ngTemplateContextGuard",
                    value: function (e, t) {
                      return !0;
                    },
                  },
                ]
              ),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || Gu)(ya(mo), ya(yo), ya(co));
          }),
          (Gu.ɵdir = dt({
            type: Gu,
            selectors: [["", "ngFor", "", "ngForOf", ""]],
            inputs: {
              ngForOf: "ngForOf",
              ngForTrackBy: "ngForTrackBy",
              ngForTemplate: "ngForTemplate",
            },
          })),
          Gu),
        Yu = function e(t, n) {
          _classCallCheck(this, e), (this.record = t), (this.view = n);
        };
      function Ju(e, t) {
        return Error(
          "InvalidPipeArgument: '".concat(t, "' for pipe '").concat(ke(e), "'")
        );
      }
      var Xu,
        el,
        tl,
        nl,
        rl,
        il,
        al,
        ol,
        sl,
        ul =
          (((rl = (function () {
            function e() {
              _classCallCheck(this, e);
            }
            return (
              _createClass(e, [
                {
                  key: "transform",
                  value: function (t) {
                    if (!t) return t;
                    if ("string" != typeof t) throw Ju(e, t);
                    return t.toUpperCase();
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || rl)();
          }),
          (rl.ɵpipe = vt({ name: "uppercase", type: rl, pure: !0 })),
          rl),
        ll =
          (((nl = (function () {
            function e(t) {
              _classCallCheck(this, e), (this.locale = t);
            }
            return (
              _createClass(e, [
                {
                  key: "transform",
                  value: function (t) {
                    var n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : "mediumDate",
                      r = arguments.length > 2 ? arguments[2] : void 0,
                      i = arguments.length > 3 ? arguments[3] : void 0;
                    if (null == t || "" === t || t != t) return null;
                    try {
                      return (function (e, t, n, r) {
                        var i = (function (e) {
                          if (Hu(e)) return e;
                          if ("number" == typeof e && !isNaN(e))
                            return new Date(e);
                          if ("string" == typeof e) {
                            e = e.trim();
                            var t,
                              n = parseFloat(e);
                            if (!isNaN(e - n)) return new Date(n);
                            if (/^(\d{4}-\d{1,2}-\d{1,2})$/.test(e)) {
                              var r = _slicedToArray(
                                  e.split("-").map(function (e) {
                                    return +e;
                                  }),
                                  3
                                ),
                                i = r[0],
                                a = r[1],
                                o = r[2];
                              return new Date(i, a - 1, o);
                            }
                            if ((t = e.match(Tu)))
                              return (function (e) {
                                var t = new Date(0),
                                  n = 0,
                                  r = 0,
                                  i = e[8] ? t.setUTCFullYear : t.setFullYear,
                                  a = e[8] ? t.setUTCHours : t.setHours;
                                e[9] &&
                                  ((n = Number(e[9] + e[10])),
                                  (r = Number(e[9] + e[11]))),
                                  i.call(
                                    t,
                                    Number(e[1]),
                                    Number(e[2]) - 1,
                                    Number(e[3])
                                  );
                                var o = Number(e[4] || 0) - n,
                                  s = Number(e[5] || 0) - r,
                                  u = Number(e[6] || 0),
                                  l = Math.round(
                                    1e3 * parseFloat("0." + (e[7] || 0))
                                  );
                                return a.call(t, o, s, u, l), t;
                              })(t);
                          }
                          var s = new Date(e);
                          if (!Hu(s))
                            throw new Error(
                              'Unable to convert "'.concat(e, '" into a date')
                            );
                          return s;
                        })(e);
                        t =
                          (function e(t, n) {
                            var r = (function (e) {
                              return Oo(e)[Io.LocaleId];
                            })(t);
                            if (((xu[r] = xu[r] || {}), xu[r][n]))
                              return xu[r][n];
                            var i = "";
                            switch (n) {
                              case "shortDate":
                                i = _u(t, gu.Short);
                                break;
                              case "mediumDate":
                                i = _u(t, gu.Medium);
                                break;
                              case "longDate":
                                i = _u(t, gu.Long);
                                break;
                              case "fullDate":
                                i = _u(t, gu.Full);
                                break;
                              case "shortTime":
                                i = ku(t, gu.Short);
                                break;
                              case "mediumTime":
                                i = ku(t, gu.Medium);
                                break;
                              case "longTime":
                                i = ku(t, gu.Long);
                                break;
                              case "fullTime":
                                i = ku(t, gu.Full);
                                break;
                              case "short":
                                var a = e(t, "shortTime"),
                                  o = e(t, "shortDate");
                                i = Ru(Cu(t, gu.Short), [a, o]);
                                break;
                              case "medium":
                                var s = e(t, "mediumTime"),
                                  u = e(t, "mediumDate");
                                i = Ru(Cu(t, gu.Medium), [s, u]);
                                break;
                              case "long":
                                var l = e(t, "longTime"),
                                  c = e(t, "longDate");
                                i = Ru(Cu(t, gu.Long), [l, c]);
                                break;
                              case "full":
                                var h = e(t, "fullTime"),
                                  f = e(t, "fullDate");
                                i = Ru(Cu(t, gu.Full), [h, f]);
                            }
                            return i && (xu[r][n] = i), i;
                          })(n, t) || t;
                        for (var a, o = []; t; ) {
                          if (!(a = Pu.exec(t))) {
                            o.push(t);
                            break;
                          }
                          var s = (o = o.concat(a.slice(1))).pop();
                          if (!s) break;
                          t = s;
                        }
                        var u = i.getTimezoneOffset();
                        r &&
                          ((u = Uu(r, u)),
                          (i = (function (e, t, n) {
                            var r = e.getTimezoneOffset();
                            return (function (e, t) {
                              return (
                                (e = new Date(e.getTime())).setMinutes(
                                  e.getMinutes() + t
                                ),
                                e
                              );
                            })(e, -1 * (Uu(t, r) - r));
                          })(i, r)));
                        var l = "";
                        return (
                          o.forEach(function (e) {
                            var t = (function (e) {
                              if (Lu[e]) return Lu[e];
                              var t;
                              switch (e) {
                                case "G":
                                case "GG":
                                case "GGG":
                                  t = Nu(Iu.Eras, yu.Abbreviated);
                                  break;
                                case "GGGG":
                                  t = Nu(Iu.Eras, yu.Wide);
                                  break;
                                case "GGGGG":
                                  t = Nu(Iu.Eras, yu.Narrow);
                                  break;
                                case "y":
                                  t = Mu(Au.FullYear, 1, 0, !1, !0);
                                  break;
                                case "yy":
                                  t = Mu(Au.FullYear, 2, 0, !0, !0);
                                  break;
                                case "yyy":
                                  t = Mu(Au.FullYear, 3, 0, !1, !0);
                                  break;
                                case "yyyy":
                                  t = Mu(Au.FullYear, 4, 0, !1, !0);
                                  break;
                                case "M":
                                case "L":
                                  t = Mu(Au.Month, 1, 1);
                                  break;
                                case "MM":
                                case "LL":
                                  t = Mu(Au.Month, 2, 1);
                                  break;
                                case "MMM":
                                  t = Nu(Iu.Months, yu.Abbreviated);
                                  break;
                                case "MMMM":
                                  t = Nu(Iu.Months, yu.Wide);
                                  break;
                                case "MMMMM":
                                  t = Nu(Iu.Months, yu.Narrow);
                                  break;
                                case "LLL":
                                  t = Nu(
                                    Iu.Months,
                                    yu.Abbreviated,
                                    pu.Standalone
                                  );
                                  break;
                                case "LLLL":
                                  t = Nu(Iu.Months, yu.Wide, pu.Standalone);
                                  break;
                                case "LLLLL":
                                  t = Nu(Iu.Months, yu.Narrow, pu.Standalone);
                                  break;
                                case "w":
                                  t = ju(1);
                                  break;
                                case "ww":
                                  t = ju(2);
                                  break;
                                case "W":
                                  t = ju(1, !0);
                                  break;
                                case "d":
                                  t = Mu(Au.Date, 1);
                                  break;
                                case "dd":
                                  t = Mu(Au.Date, 2);
                                  break;
                                case "E":
                                case "EE":
                                case "EEE":
                                  t = Nu(Iu.Days, yu.Abbreviated);
                                  break;
                                case "EEEE":
                                  t = Nu(Iu.Days, yu.Wide);
                                  break;
                                case "EEEEE":
                                  t = Nu(Iu.Days, yu.Narrow);
                                  break;
                                case "EEEEEE":
                                  t = Nu(Iu.Days, yu.Short);
                                  break;
                                case "a":
                                case "aa":
                                case "aaa":
                                  t = Nu(Iu.DayPeriods, yu.Abbreviated);
                                  break;
                                case "aaaa":
                                  t = Nu(Iu.DayPeriods, yu.Wide);
                                  break;
                                case "aaaaa":
                                  t = Nu(Iu.DayPeriods, yu.Narrow);
                                  break;
                                case "b":
                                case "bb":
                                case "bbb":
                                  t = Nu(
                                    Iu.DayPeriods,
                                    yu.Abbreviated,
                                    pu.Standalone,
                                    !0
                                  );
                                  break;
                                case "bbbb":
                                  t = Nu(
                                    Iu.DayPeriods,
                                    yu.Wide,
                                    pu.Standalone,
                                    !0
                                  );
                                  break;
                                case "bbbbb":
                                  t = Nu(
                                    Iu.DayPeriods,
                                    yu.Narrow,
                                    pu.Standalone,
                                    !0
                                  );
                                  break;
                                case "B":
                                case "BB":
                                case "BBB":
                                  t = Nu(
                                    Iu.DayPeriods,
                                    yu.Abbreviated,
                                    pu.Format,
                                    !0
                                  );
                                  break;
                                case "BBBB":
                                  t = Nu(Iu.DayPeriods, yu.Wide, pu.Format, !0);
                                  break;
                                case "BBBBB":
                                  t = Nu(
                                    Iu.DayPeriods,
                                    yu.Narrow,
                                    pu.Format,
                                    !0
                                  );
                                  break;
                                case "h":
                                  t = Mu(Au.Hours, 1, -12);
                                  break;
                                case "hh":
                                  t = Mu(Au.Hours, 2, -12);
                                  break;
                                case "H":
                                  t = Mu(Au.Hours, 1);
                                  break;
                                case "HH":
                                  t = Mu(Au.Hours, 2);
                                  break;
                                case "m":
                                  t = Mu(Au.Minutes, 1);
                                  break;
                                case "mm":
                                  t = Mu(Au.Minutes, 2);
                                  break;
                                case "s":
                                  t = Mu(Au.Seconds, 1);
                                  break;
                                case "ss":
                                  t = Mu(Au.Seconds, 2);
                                  break;
                                case "S":
                                  t = Mu(Au.FractionalSeconds, 1);
                                  break;
                                case "SS":
                                  t = Mu(Au.FractionalSeconds, 2);
                                  break;
                                case "SSS":
                                  t = Mu(Au.FractionalSeconds, 3);
                                  break;
                                case "Z":
                                case "ZZ":
                                case "ZZZ":
                                  t = Fu(Ou.Short);
                                  break;
                                case "ZZZZZ":
                                  t = Fu(Ou.Extended);
                                  break;
                                case "O":
                                case "OO":
                                case "OOO":
                                case "z":
                                case "zz":
                                case "zzz":
                                  t = Fu(Ou.ShortGMT);
                                  break;
                                case "OOOO":
                                case "ZZZZ":
                                case "zzzz":
                                  t = Fu(Ou.Long);
                                  break;
                                default:
                                  return null;
                              }
                              return (Lu[e] = t), t;
                            })(e);
                            l += t
                              ? t(i, n, u)
                              : "''" === e
                              ? "'"
                              : e.replace(/(^'|'$)/g, "").replace(/''/g, "'");
                          }),
                          l
                        );
                      })(t, n, i || this.locale, r);
                    } catch (a) {
                      throw Ju(e, a.message);
                    }
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || nl)(ya(Yo));
          }),
          (nl.ɵpipe = vt({ name: "date", type: nl, pure: !0 })),
          nl),
        cl =
          (((tl = (function () {
            function e(t) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "USD";
              _classCallCheck(this, e),
                (this._locale = t),
                (this._defaultCurrencyCode = n);
            }
            return (
              _createClass(e, [
                {
                  key: "transform",
                  value: function (t, n) {
                    var r =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : "symbol",
                      i = arguments.length > 3 ? arguments[3] : void 0,
                      a = arguments.length > 4 ? arguments[4] : void 0;
                    if (
                      (function (e) {
                        return null == e || "" === e || e != e;
                      })(t)
                    )
                      return null;
                    (a = a || this._locale),
                      "boolean" == typeof r &&
                        (console &&
                          console.warn &&
                          console.warn(
                            'Warning: the currency pipe has been changed in Angular v5. The symbolDisplay option (third parameter) is now a string instead of a boolean. The accepted values are "code", "symbol" or "symbol-narrow".'
                          ),
                        (r = r ? "symbol" : "code"));
                    var o = n || this._defaultCurrencyCode;
                    "code" !== r &&
                      (o =
                        "symbol" === r || "symbol-narrow" === r
                          ? (function (e, t) {
                              var n =
                                  arguments.length > 2 &&
                                  void 0 !== arguments[2]
                                    ? arguments[2]
                                    : "en",
                                r =
                                  (function (e) {
                                    return Oo(e)[Io.Currencies];
                                  })(n)[e] ||
                                  fu[e] ||
                                  [],
                                i = r[1];
                              return "narrow" === t && "string" == typeof i
                                ? i
                                : r[0] || e;
                            })(o, "symbol" === r ? "wide" : "narrow", a)
                          : r);
                    try {
                      return (function (e, t, n, r, i) {
                        var a = (function (e) {
                          var t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : "-",
                            n = {
                              minInt: 1,
                              minFrac: 0,
                              maxFrac: 0,
                              posPre: "",
                              posSuf: "",
                              negPre: "",
                              negSuf: "",
                              gSize: 0,
                              lgSize: 0,
                            },
                            r = e.split(";"),
                            i = r[0],
                            a = r[1],
                            o =
                              -1 !== i.indexOf(".")
                                ? i.split(".")
                                : [
                                    i.substring(0, i.lastIndexOf("0") + 1),
                                    i.substring(i.lastIndexOf("0") + 1),
                                  ],
                            s = o[0],
                            u = o[1] || "";
                          n.posPre = s.substr(0, s.indexOf("#"));
                          for (var l = 0; l < u.length; l++) {
                            var c = u.charAt(l);
                            "0" === c
                              ? (n.minFrac = n.maxFrac = l + 1)
                              : "#" === c
                              ? (n.maxFrac = l + 1)
                              : (n.posSuf += c);
                          }
                          var h = s.split(",");
                          if (
                            ((n.gSize = h[1] ? h[1].length : 0),
                            (n.lgSize =
                              h[2] || h[1] ? (h[2] || h[1]).length : 0),
                            a)
                          ) {
                            var f =
                                i.length - n.posPre.length - n.posSuf.length,
                              d = a.indexOf("#");
                            (n.negPre = a.substr(0, d).replace(/'/g, "")),
                              (n.negSuf = a.substr(d + f).replace(/'/g, ""));
                          } else
                            (n.negPre = t + n.posPre), (n.negSuf = n.posSuf);
                          return n;
                        })(
                          (function (e, t) {
                            return Oo(e)[Io.NumberFormats][t];
                          })(t, du.Currency),
                          wu(t, mu.MinusSign)
                        );
                        return (
                          (a.minFrac = (function (e) {
                            var t,
                              n = fu[e];
                            return (
                              n && (t = n[2]), "number" == typeof t ? t : 2
                            );
                          })(r)),
                          (a.maxFrac = a.minFrac),
                          (function (e, t, n, r, i, a) {
                            var o =
                                arguments.length > 6 &&
                                void 0 !== arguments[6] &&
                                arguments[6],
                              s = "",
                              u = !1;
                            if (isFinite(e)) {
                              var l = (function (e) {
                                var t,
                                  n,
                                  r,
                                  i,
                                  a,
                                  o = Math.abs(e) + "",
                                  s = 0;
                                for (
                                  (n = o.indexOf(".")) > -1 &&
                                    (o = o.replace(".", "")),
                                    (r = o.search(/e/i)) > 0
                                      ? (n < 0 && (n = r),
                                        (n += +o.slice(r + 1)),
                                        (o = o.substring(0, r)))
                                      : n < 0 && (n = o.length),
                                    r = 0;
                                  "0" === o.charAt(r);
                                  r++
                                );
                                if (r === (a = o.length)) (t = [0]), (n = 1);
                                else {
                                  for (a--; "0" === o.charAt(a); ) a--;
                                  for (n -= r, t = [], i = 0; r <= a; r++, i++)
                                    t[i] = Number(o.charAt(r));
                                }
                                return (
                                  n > 22 &&
                                    ((t = t.splice(0, 21)),
                                    (s = n - 1),
                                    (n = 1)),
                                  { digits: t, exponent: s, integerLen: n }
                                );
                              })(e);
                              o &&
                                (l = (function (e) {
                                  if (0 === e.digits[0]) return e;
                                  var t = e.digits.length - e.integerLen;
                                  return (
                                    e.exponent
                                      ? (e.exponent += 2)
                                      : (0 === t
                                          ? e.digits.push(0, 0)
                                          : 1 === t && e.digits.push(0),
                                        (e.integerLen += 2)),
                                    e
                                  );
                                })(l));
                              var c = t.minInt,
                                h = t.minFrac,
                                f = t.maxFrac;
                              if (a) {
                                var d = a.match(Vu);
                                if (null === d)
                                  throw new Error(
                                    a + " is not a valid digit info"
                                  );
                                var v = d[1],
                                  p = d[3],
                                  y = d[5];
                                null != v && (c = zu(v)),
                                  null != p && (h = zu(p)),
                                  null != y
                                    ? (f = zu(y))
                                    : null != p && h > f && (f = h);
                              }
                              !(function (e, t, n) {
                                if (t > n)
                                  throw new Error(
                                    "The minimum number of digits after fraction ("
                                      .concat(
                                        t,
                                        ") is higher than the maximum ("
                                      )
                                      .concat(n, ").")
                                  );
                                var r = e.digits,
                                  i = r.length - e.integerLen,
                                  a = Math.min(Math.max(t, i), n),
                                  o = a + e.integerLen,
                                  s = r[o];
                                if (o > 0) {
                                  r.splice(Math.max(e.integerLen, o));
                                  for (var u = o; u < r.length; u++) r[u] = 0;
                                } else {
                                  (i = Math.max(0, i)),
                                    (e.integerLen = 1),
                                    (r.length = Math.max(1, (o = a + 1))),
                                    (r[0] = 0);
                                  for (var l = 1; l < o; l++) r[l] = 0;
                                }
                                if (s >= 5)
                                  if (o - 1 < 0) {
                                    for (var c = 0; c > o; c--)
                                      r.unshift(0), e.integerLen++;
                                    r.unshift(1), e.integerLen++;
                                  } else r[o - 1]++;
                                for (; i < Math.max(0, a); i++) r.push(0);
                                var h = 0 !== a,
                                  f = t + e.integerLen,
                                  d = r.reduceRight(function (e, t, n, r) {
                                    return (
                                      (r[n] = (t += e) < 10 ? t : t - 10),
                                      h &&
                                        (0 === r[n] && n >= f
                                          ? r.pop()
                                          : (h = !1)),
                                      t >= 10 ? 1 : 0
                                    );
                                  }, 0);
                                d && (r.unshift(d), e.integerLen++);
                              })(l, h, f);
                              var g = l.digits,
                                m = l.integerLen,
                                _ = l.exponent,
                                k = [];
                              for (
                                u = g.every(function (e) {
                                  return !e;
                                });
                                m < c;
                                m++
                              )
                                g.unshift(0);
                              for (; m < 0; m++) g.unshift(0);
                              m > 0
                                ? (k = g.splice(m, g.length))
                                : ((k = g), (g = [0]));
                              var C = [];
                              for (
                                g.length >= t.lgSize &&
                                C.unshift(
                                  g.splice(-t.lgSize, g.length).join("")
                                );
                                g.length > t.gSize;

                              )
                                C.unshift(
                                  g.splice(-t.gSize, g.length).join("")
                                );
                              g.length && C.unshift(g.join("")),
                                (s = C.join(wu(n, r))),
                                k.length && (s += wu(n, i) + k.join("")),
                                _ && (s += wu(n, mu.Exponential) + "+" + _);
                            } else s = wu(n, mu.Infinity);
                            return (s =
                              e < 0 && !u
                                ? t.negPre + s + t.negSuf
                                : t.posPre + s + t.posSuf);
                          })(e, a, t, mu.CurrencyGroup, mu.CurrencyDecimal, i)
                            .replace("\xa4", n)
                            .replace("\xa4", "")
                            .trim()
                        );
                      })(
                        (function (e) {
                          if (
                            "string" == typeof e &&
                            !isNaN(Number(e) - parseFloat(e))
                          )
                            return Number(e);
                          if ("number" != typeof e)
                            throw new Error(e + " is not a number");
                          return e;
                        })(t),
                        a,
                        o,
                        n,
                        i
                      );
                    } catch (s) {
                      throw Ju(e, s.message);
                    }
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || tl)(ya(Yo), ya(Jo));
          }),
          (tl.ɵpipe = vt({ name: "currency", type: tl, pure: !0 })),
          tl),
        hl =
          (((el = function e() {
            _classCallCheck(this, e);
          }).ɵmod = ht({ type: el })),
          (el.ɵinj = he({
            factory: function (e) {
              return new (e || el)();
            },
            providers: [{ provide: Wu, useClass: Ku }],
          })),
          el),
        fl =
          (((Xu = function e() {
            _classCallCheck(this, e);
          }).ɵprov = ce({
            token: Xu,
            providedIn: "root",
            factory: function () {
              return new dl(Ke(Bs), window, Ke($n));
            },
          })),
          Xu),
        dl = (function () {
          function e(t, n, r) {
            _classCallCheck(this, e),
              (this.document = t),
              (this.window = n),
              (this.errorHandler = r),
              (this.offset = function () {
                return [0, 0];
              });
          }
          return (
            _createClass(e, [
              {
                key: "setOffset",
                value: function (e) {
                  this.offset = Array.isArray(e)
                    ? function () {
                        return e;
                      }
                    : e;
                },
              },
              {
                key: "getScrollPosition",
                value: function () {
                  return this.supportScrollRestoration()
                    ? [this.window.scrollX, this.window.scrollY]
                    : [0, 0];
                },
              },
              {
                key: "scrollToPosition",
                value: function (e) {
                  this.supportScrollRestoration() &&
                    this.window.scrollTo(e[0], e[1]);
                },
              },
              {
                key: "scrollToAnchor",
                value: function (e) {
                  if (this.supportScrollRestoration()) {
                    e =
                      this.window.CSS && this.window.CSS.escape
                        ? this.window.CSS.escape(e)
                        : e.replace(/(\"|\'\ |:|\.|\[|\]|,|=)/g, "\\$1");
                    try {
                      var t = this.document.querySelector("#" + e);
                      if (t) return void this.scrollToElement(t);
                      var n = this.document.querySelector(
                        "[name='".concat(e, "']")
                      );
                      if (n) return void this.scrollToElement(n);
                    } catch (r) {
                      this.errorHandler.handleError(r);
                    }
                  }
                },
              },
              {
                key: "setHistoryScrollRestoration",
                value: function (e) {
                  if (this.supportScrollRestoration()) {
                    var t = this.window.history;
                    t && t.scrollRestoration && (t.scrollRestoration = e);
                  }
                },
              },
              {
                key: "scrollToElement",
                value: function (e) {
                  var t = e.getBoundingClientRect(),
                    n = t.left + this.window.pageXOffset,
                    r = t.top + this.window.pageYOffset,
                    i = this.offset();
                  this.window.scrollTo(n - i[0], r - i[1]);
                },
              },
              {
                key: "supportScrollRestoration",
                value: function () {
                  try {
                    return !!this.window && !!this.window.scrollTo;
                  } catch (e) {
                    return !1;
                  }
                },
              },
            ]),
            e
          );
        })(),
        vl = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n() {
            return _classCallCheck(this, n), t.apply(this, arguments);
          }
          return (
            _createClass(
              n,
              [
                {
                  key: "getProperty",
                  value: function (e, t) {
                    return e[t];
                  },
                },
                {
                  key: "log",
                  value: function (e) {
                    window.console &&
                      window.console.log &&
                      window.console.log(e);
                  },
                },
                {
                  key: "logGroup",
                  value: function (e) {
                    window.console &&
                      window.console.group &&
                      window.console.group(e);
                  },
                },
                {
                  key: "logGroupEnd",
                  value: function () {
                    window.console &&
                      window.console.groupEnd &&
                      window.console.groupEnd();
                  },
                },
                {
                  key: "onAndCancel",
                  value: function (e, t, n) {
                    return (
                      e.addEventListener(t, n, !1),
                      function () {
                        e.removeEventListener(t, n, !1);
                      }
                    );
                  },
                },
                {
                  key: "dispatchEvent",
                  value: function (e, t) {
                    e.dispatchEvent(t);
                  },
                },
                {
                  key: "remove",
                  value: function (e) {
                    return e.parentNode && e.parentNode.removeChild(e), e;
                  },
                },
                {
                  key: "getValue",
                  value: function (e) {
                    return e.value;
                  },
                },
                {
                  key: "createElement",
                  value: function (e, t) {
                    return (t = t || this.getDefaultDocument()).createElement(
                      e
                    );
                  },
                },
                {
                  key: "createHtmlDocument",
                  value: function () {
                    return document.implementation.createHTMLDocument(
                      "fakeTitle"
                    );
                  },
                },
                {
                  key: "getDefaultDocument",
                  value: function () {
                    return document;
                  },
                },
                {
                  key: "isElementNode",
                  value: function (e) {
                    return e.nodeType === Node.ELEMENT_NODE;
                  },
                },
                {
                  key: "isShadowRoot",
                  value: function (e) {
                    return e instanceof DocumentFragment;
                  },
                },
                {
                  key: "getGlobalEventTarget",
                  value: function (e, t) {
                    return "window" === t
                      ? window
                      : "document" === t
                      ? e
                      : "body" === t
                      ? e.body
                      : null;
                  },
                },
                {
                  key: "getHistory",
                  value: function () {
                    return window.history;
                  },
                },
                {
                  key: "getLocation",
                  value: function () {
                    return window.location;
                  },
                },
                {
                  key: "getBaseHref",
                  value: function (e) {
                    var t,
                      n =
                        pl || (pl = document.querySelector("base"))
                          ? pl.getAttribute("href")
                          : null;
                    return null == n
                      ? null
                      : ((t = n),
                        il || (il = document.createElement("a")),
                        il.setAttribute("href", t),
                        "/" === il.pathname.charAt(0)
                          ? il.pathname
                          : "/" + il.pathname);
                  },
                },
                {
                  key: "resetBaseElement",
                  value: function () {
                    pl = null;
                  },
                },
                {
                  key: "getUserAgent",
                  value: function () {
                    return window.navigator.userAgent;
                  },
                },
                {
                  key: "performanceNow",
                  value: function () {
                    return window.performance && window.performance.now
                      ? window.performance.now()
                      : new Date().getTime();
                  },
                },
                {
                  key: "supportsCookies",
                  value: function () {
                    return !0;
                  },
                },
                {
                  key: "getCookie",
                  value: function (e) {
                    return (function (e, t) {
                      t = encodeURIComponent(t);
                      var n,
                        r = _createForOfIteratorHelper(e.split(";"));
                      try {
                        for (r.s(); !(n = r.n()).done; ) {
                          var i = n.value,
                            a = i.indexOf("="),
                            o = _slicedToArray(
                              -1 == a
                                ? [i, ""]
                                : [i.slice(0, a), i.slice(a + 1)],
                              2
                            ),
                            s = o[0],
                            u = o[1];
                          if (s.trim() === t) return decodeURIComponent(u);
                        }
                      } catch (l) {
                        r.e(l);
                      } finally {
                        r.f();
                      }
                      return null;
                    })(document.cookie, e);
                  },
                },
              ],
              [
                {
                  key: "makeCurrent",
                  value: function () {
                    var e;
                    (e = new n()), Hs || (Hs = e);
                  },
                },
              ]
            ),
            n
          );
        })(
          (function (e) {
            _inherits(n, e);
            var t = _createSuper(n);
            function n() {
              return _classCallCheck(this, n), t.call(this);
            }
            return (
              _createClass(n, [
                {
                  key: "supportsDOMEvents",
                  value: function () {
                    return !0;
                  },
                },
              ]),
              n
            );
          })(
            (function () {
              return function e() {
                _classCallCheck(this, e);
              };
            })()
          )
        ),
        pl = null,
        yl = new Le("TRANSITION_ID"),
        gl = [
          {
            provide: zo,
            useFactory: function (e, t, n) {
              return function () {
                n.get(Bo).donePromise.then(function () {
                  var n = Vs();
                  Array.prototype.slice
                    .apply(t.querySelectorAll("style[ng-transition]"))
                    .filter(function (t) {
                      return t.getAttribute("ng-transition") === e;
                    })
                    .forEach(function (e) {
                      return n.remove(e);
                    });
                });
              };
            },
            deps: [yl, Bs, Xi],
            multi: !0,
          },
        ],
        ml = (function () {
          function e() {
            _classCallCheck(this, e);
          }
          return (
            _createClass(
              e,
              [
                {
                  key: "addToWindow",
                  value: function (e) {
                    (Ae.getAngularTestability = function (t) {
                      var n =
                          !(arguments.length > 1 && void 0 !== arguments[1]) ||
                          arguments[1],
                        r = e.findTestabilityInTree(t, n);
                      if (null == r)
                        throw new Error(
                          "Could not find testability for element."
                        );
                      return r;
                    }),
                      (Ae.getAllAngularTestabilities = function () {
                        return e.getAllTestabilities();
                      }),
                      (Ae.getAllAngularRootElements = function () {
                        return e.getAllRootElements();
                      }),
                      Ae.frameworkStabilizers || (Ae.frameworkStabilizers = []),
                      Ae.frameworkStabilizers.push(function (e) {
                        var t = Ae.getAllAngularTestabilities(),
                          n = t.length,
                          r = !1,
                          i = function (t) {
                            (r = r || t), 0 == --n && e(r);
                          };
                        t.forEach(function (e) {
                          e.whenStable(i);
                        });
                      });
                  },
                },
                {
                  key: "findTestabilityInTree",
                  value: function (e, t, n) {
                    if (null == t) return null;
                    var r = e.getTestability(t);
                    return null != r
                      ? r
                      : n
                      ? Vs().isShadowRoot(t)
                        ? this.findTestabilityInTree(e, t.host, !0)
                        : this.findTestabilityInTree(e, t.parentElement, !0)
                      : null;
                  },
                },
              ],
              [
                {
                  key: "init",
                  value: function () {
                    var t;
                    (t = new e()), (Cs = t);
                  },
                },
              ]
            ),
            e
          );
        })(),
        _l = new Le("EventManagerPlugins"),
        kl =
          (((al = (function () {
            function e(t, n) {
              var r = this;
              _classCallCheck(this, e),
                (this._zone = n),
                (this._eventNameToPlugin = new Map()),
                t.forEach(function (e) {
                  return (e.manager = r);
                }),
                (this._plugins = t.slice().reverse());
            }
            return (
              _createClass(e, [
                {
                  key: "addEventListener",
                  value: function (e, t, n) {
                    return this._findPluginFor(t).addEventListener(e, t, n);
                  },
                },
                {
                  key: "addGlobalEventListener",
                  value: function (e, t, n) {
                    return this._findPluginFor(t).addGlobalEventListener(
                      e,
                      t,
                      n
                    );
                  },
                },
                {
                  key: "getZone",
                  value: function () {
                    return this._zone;
                  },
                },
                {
                  key: "_findPluginFor",
                  value: function (e) {
                    var t = this._eventNameToPlugin.get(e);
                    if (t) return t;
                    for (var n = this._plugins, r = 0; r < n.length; r++) {
                      var i = n[r];
                      if (i.supports(e))
                        return this._eventNameToPlugin.set(e, i), i;
                    }
                    throw new Error(
                      "No event manager plugin found for event " + e
                    );
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || al)(Ke(_l), Ke(cs));
          }),
          (al.ɵprov = ce({ token: al, factory: al.ɵfac })),
          al),
        Cl = (function () {
          function e(t) {
            _classCallCheck(this, e), (this._doc = t);
          }
          return (
            _createClass(e, [
              {
                key: "addGlobalEventListener",
                value: function (e, t, n) {
                  var r = Vs().getGlobalEventTarget(this._doc, e);
                  if (!r)
                    throw new Error(
                      "Unsupported event target "
                        .concat(r, " for event ")
                        .concat(t)
                    );
                  return this.addEventListener(r, t, n);
                },
              },
            ]),
            e
          );
        })(),
        wl =
          (((sl = (function () {
            function e() {
              _classCallCheck(this, e), (this._stylesSet = new Set());
            }
            return (
              _createClass(e, [
                {
                  key: "addStyles",
                  value: function (e) {
                    var t = this,
                      n = new Set();
                    e.forEach(function (e) {
                      t._stylesSet.has(e) || (t._stylesSet.add(e), n.add(e));
                    }),
                      this.onStylesAdded(n);
                  },
                },
                { key: "onStylesAdded", value: function (e) {} },
                {
                  key: "getAllStyles",
                  value: function () {
                    return Array.from(this._stylesSet);
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || sl)();
          }),
          (sl.ɵprov = ce({ token: sl, factory: sl.ɵfac })),
          sl),
        bl =
          (((ol = (function (e) {
            _inherits(n, e);
            var t = _createSuper(n);
            function n(e) {
              var r;
              return (
                _classCallCheck(this, n),
                ((r = t.call(this))._doc = e),
                (r._hostNodes = new Set()),
                (r._styleNodes = new Set()),
                r._hostNodes.add(e.head),
                r
              );
            }
            return (
              _createClass(n, [
                {
                  key: "_addStylesToHost",
                  value: function (e, t) {
                    var n = this;
                    e.forEach(function (e) {
                      var r = n._doc.createElement("style");
                      (r.textContent = e), n._styleNodes.add(t.appendChild(r));
                    });
                  },
                },
                {
                  key: "addHost",
                  value: function (e) {
                    this._addStylesToHost(this._stylesSet, e),
                      this._hostNodes.add(e);
                  },
                },
                {
                  key: "removeHost",
                  value: function (e) {
                    this._hostNodes.delete(e);
                  },
                },
                {
                  key: "onStylesAdded",
                  value: function (e) {
                    var t = this;
                    this._hostNodes.forEach(function (n) {
                      return t._addStylesToHost(e, n);
                    });
                  },
                },
                {
                  key: "ngOnDestroy",
                  value: function () {
                    this._styleNodes.forEach(function (e) {
                      return Vs().remove(e);
                    });
                  },
                },
              ]),
              n
            );
          })(wl)).ɵfac = function (e) {
            return new (e || ol)(Ke(Bs));
          }),
          (ol.ɵprov = ce({ token: ol, factory: ol.ɵfac })),
          ol),
        Sl = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: "http://www.w3.org/1999/xhtml",
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/",
        },
        El = /%COMP%/g;
      function Tl(e, t, n) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          Array.isArray(i) ? Tl(e, i, n) : ((i = i.replace(El, e)), n.push(i));
        }
        return n;
      }
      function xl(e) {
        return function (t) {
          if ("__ngUnwrap__" === t) return e;
          !1 === e(t) && (t.preventDefault(), (t.returnValue = !1));
        };
      }
      var Pl,
        Ol,
        Al,
        Il,
        Rl =
          (((Pl = (function () {
            function e(t, n, r) {
              _classCallCheck(this, e),
                (this.eventManager = t),
                (this.sharedStylesHost = n),
                (this.appId = r),
                (this.rendererByCompId = new Map()),
                (this.defaultRenderer = new Dl(t));
            }
            return (
              _createClass(e, [
                {
                  key: "createRenderer",
                  value: function (e, t) {
                    if (!e || !t) return this.defaultRenderer;
                    switch (t.encapsulation) {
                      case rt.Emulated:
                        var n = this.rendererByCompId.get(t.id);
                        return (
                          n ||
                            ((n = new Ml(
                              this.eventManager,
                              this.sharedStylesHost,
                              t,
                              this.appId
                            )),
                            this.rendererByCompId.set(t.id, n)),
                          n.applyToHost(e),
                          n
                        );
                      case rt.Native:
                      case rt.ShadowDom:
                        return new Nl(
                          this.eventManager,
                          this.sharedStylesHost,
                          e,
                          t
                        );
                      default:
                        if (!this.rendererByCompId.has(t.id)) {
                          var r = Tl(t.id, t.styles, []);
                          this.sharedStylesHost.addStyles(r),
                            this.rendererByCompId.set(
                              t.id,
                              this.defaultRenderer
                            );
                        }
                        return this.defaultRenderer;
                    }
                  },
                },
                { key: "begin", value: function () {} },
                { key: "end", value: function () {} },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || Pl)(Ke(kl), Ke(bl), Ke(qo));
          }),
          (Pl.ɵprov = ce({ token: Pl, factory: Pl.ɵfac })),
          Pl),
        Dl = (function () {
          function e(t) {
            _classCallCheck(this, e),
              (this.eventManager = t),
              (this.data = Object.create(null));
          }
          return (
            _createClass(e, [
              { key: "destroy", value: function () {} },
              {
                key: "createElement",
                value: function (e, t) {
                  return t
                    ? document.createElementNS(Sl[t] || t, e)
                    : document.createElement(e);
                },
              },
              {
                key: "createComment",
                value: function (e) {
                  return document.createComment(e);
                },
              },
              {
                key: "createText",
                value: function (e) {
                  return document.createTextNode(e);
                },
              },
              {
                key: "appendChild",
                value: function (e, t) {
                  e.appendChild(t);
                },
              },
              {
                key: "insertBefore",
                value: function (e, t, n) {
                  e && e.insertBefore(t, n);
                },
              },
              {
                key: "removeChild",
                value: function (e, t) {
                  e && e.removeChild(t);
                },
              },
              {
                key: "selectRootElement",
                value: function (e, t) {
                  var n = "string" == typeof e ? document.querySelector(e) : e;
                  if (!n)
                    throw new Error(
                      'The selector "'.concat(e, '" did not match any elements')
                    );
                  return t || (n.textContent = ""), n;
                },
              },
              {
                key: "parentNode",
                value: function (e) {
                  return e.parentNode;
                },
              },
              {
                key: "nextSibling",
                value: function (e) {
                  return e.nextSibling;
                },
              },
              {
                key: "setAttribute",
                value: function (e, t, n, r) {
                  if (r) {
                    t = r + ":" + t;
                    var i = Sl[r];
                    i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n);
                  } else e.setAttribute(t, n);
                },
              },
              {
                key: "removeAttribute",
                value: function (e, t, n) {
                  if (n) {
                    var r = Sl[n];
                    r
                      ? e.removeAttributeNS(r, t)
                      : e.removeAttribute("".concat(n, ":").concat(t));
                  } else e.removeAttribute(t);
                },
              },
              {
                key: "addClass",
                value: function (e, t) {
                  e.classList.add(t);
                },
              },
              {
                key: "removeClass",
                value: function (e, t) {
                  e.classList.remove(t);
                },
              },
              {
                key: "setStyle",
                value: function (e, t, n, r) {
                  r & Qa.DashCase
                    ? e.style.setProperty(
                        t,
                        n,
                        r & Qa.Important ? "important" : ""
                      )
                    : (e.style[t] = n);
                },
              },
              {
                key: "removeStyle",
                value: function (e, t, n) {
                  n & Qa.DashCase
                    ? e.style.removeProperty(t)
                    : (e.style[t] = "");
                },
              },
              {
                key: "setProperty",
                value: function (e, t, n) {
                  e[t] = n;
                },
              },
              {
                key: "setValue",
                value: function (e, t) {
                  e.nodeValue = t;
                },
              },
              {
                key: "listen",
                value: function (e, t, n) {
                  return "string" == typeof e
                    ? this.eventManager.addGlobalEventListener(e, t, xl(n))
                    : this.eventManager.addEventListener(e, t, xl(n));
                },
              },
            ]),
            e
          );
        })(),
        Ml = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r, i, a) {
            var o;
            _classCallCheck(this, n), ((o = t.call(this, e)).component = i);
            var s,
              u = Tl(a + "-" + i.id, i.styles, []);
            return (
              r.addStyles(u),
              (o.contentAttr = "_ngcontent-%COMP%".replace(El, a + "-" + i.id)),
              (o.hostAttr =
                ((s = a + "-" + i.id), "_nghost-%COMP%".replace(El, s))),
              o
            );
          }
          return (
            _createClass(n, [
              {
                key: "applyToHost",
                value: function (e) {
                  _get(_getPrototypeOf(n.prototype), "setAttribute", this).call(
                    this,
                    e,
                    this.hostAttr,
                    ""
                  );
                },
              },
              {
                key: "createElement",
                value: function (e, t) {
                  var r = _get(
                    _getPrototypeOf(n.prototype),
                    "createElement",
                    this
                  ).call(this, e, t);
                  return (
                    _get(
                      _getPrototypeOf(n.prototype),
                      "setAttribute",
                      this
                    ).call(this, r, this.contentAttr, ""),
                    r
                  );
                },
              },
            ]),
            n
          );
        })(Dl),
        Nl = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r, i, a) {
            var o;
            _classCallCheck(this, n),
              ((o = t.call(this, e)).sharedStylesHost = r),
              (o.hostEl = i),
              (o.component = a),
              (o.shadowRoot =
                a.encapsulation === rt.ShadowDom
                  ? i.attachShadow({ mode: "open" })
                  : i.createShadowRoot()),
              o.sharedStylesHost.addHost(o.shadowRoot);
            for (var s = Tl(a.id, a.styles, []), u = 0; u < s.length; u++) {
              var l = document.createElement("style");
              (l.textContent = s[u]), o.shadowRoot.appendChild(l);
            }
            return o;
          }
          return (
            _createClass(n, [
              {
                key: "nodeOrShadowRoot",
                value: function (e) {
                  return e === this.hostEl ? this.shadowRoot : e;
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.sharedStylesHost.removeHost(this.shadowRoot);
                },
              },
              {
                key: "appendChild",
                value: function (e, t) {
                  return _get(
                    _getPrototypeOf(n.prototype),
                    "appendChild",
                    this
                  ).call(this, this.nodeOrShadowRoot(e), t);
                },
              },
              {
                key: "insertBefore",
                value: function (e, t, r) {
                  return _get(
                    _getPrototypeOf(n.prototype),
                    "insertBefore",
                    this
                  ).call(this, this.nodeOrShadowRoot(e), t, r);
                },
              },
              {
                key: "removeChild",
                value: function (e, t) {
                  return _get(
                    _getPrototypeOf(n.prototype),
                    "removeChild",
                    this
                  ).call(this, this.nodeOrShadowRoot(e), t);
                },
              },
              {
                key: "parentNode",
                value: function (e) {
                  return this.nodeOrShadowRoot(
                    _get(_getPrototypeOf(n.prototype), "parentNode", this).call(
                      this,
                      this.nodeOrShadowRoot(e)
                    )
                  );
                },
              },
            ]),
            n
          );
        })(Dl),
        Fl =
          (((Ol = (function (e) {
            _inherits(n, e);
            var t = _createSuper(n);
            function n(e) {
              return _classCallCheck(this, n), t.call(this, e);
            }
            return (
              _createClass(n, [
                {
                  key: "supports",
                  value: function (e) {
                    return !0;
                  },
                },
                {
                  key: "addEventListener",
                  value: function (e, t, n) {
                    var r = this;
                    return (
                      e.addEventListener(t, n, !1),
                      function () {
                        return r.removeEventListener(e, t, n);
                      }
                    );
                  },
                },
                {
                  key: "removeEventListener",
                  value: function (e, t, n) {
                    return e.removeEventListener(t, n);
                  },
                },
              ]),
              n
            );
          })(Cl)).ɵfac = function (e) {
            return new (e || Ol)(Ke(Bs));
          }),
          (Ol.ɵprov = ce({ token: Ol, factory: Ol.ɵfac })),
          Ol),
        jl = ["alt", "control", "meta", "shift"],
        Ll = {
          "\b": "Backspace",
          "\t": "Tab",
          "\x7f": "Delete",
          "\x1b": "Escape",
          Del: "Delete",
          Esc: "Escape",
          Left: "ArrowLeft",
          Right: "ArrowRight",
          Up: "ArrowUp",
          Down: "ArrowDown",
          Menu: "ContextMenu",
          Scroll: "ScrollLock",
          Win: "OS",
        },
        Ul = {
          A: "1",
          B: "2",
          C: "3",
          D: "4",
          E: "5",
          F: "6",
          G: "7",
          H: "8",
          I: "9",
          J: "*",
          K: "+",
          M: "-",
          N: ".",
          O: "/",
          "`": "0",
          "\x90": "NumLock",
        },
        Hl = {
          alt: function (e) {
            return e.altKey;
          },
          control: function (e) {
            return e.ctrlKey;
          },
          meta: function (e) {
            return e.metaKey;
          },
          shift: function (e) {
            return e.shiftKey;
          },
        },
        Vl =
          (((Al = (function (e) {
            _inherits(n, e);
            var t = _createSuper(n);
            function n(e) {
              return _classCallCheck(this, n), t.call(this, e);
            }
            return (
              _createClass(
                n,
                [
                  {
                    key: "supports",
                    value: function (e) {
                      return null != n.parseEventName(e);
                    },
                  },
                  {
                    key: "addEventListener",
                    value: function (e, t, r) {
                      var i = n.parseEventName(t),
                        a = n.eventCallback(
                          i.fullKey,
                          r,
                          this.manager.getZone()
                        );
                      return this.manager
                        .getZone()
                        .runOutsideAngular(function () {
                          return Vs().onAndCancel(e, i.domEventName, a);
                        });
                    },
                  },
                ],
                [
                  {
                    key: "parseEventName",
                    value: function (e) {
                      var t = e.toLowerCase().split("."),
                        r = t.shift();
                      if (0 === t.length || ("keydown" !== r && "keyup" !== r))
                        return null;
                      var i = n._normalizeKey(t.pop()),
                        a = "";
                      if (
                        (jl.forEach(function (e) {
                          var n = t.indexOf(e);
                          n > -1 && (t.splice(n, 1), (a += e + "."));
                        }),
                        (a += i),
                        0 != t.length || 0 === i.length)
                      )
                        return null;
                      var o = {};
                      return (o.domEventName = r), (o.fullKey = a), o;
                    },
                  },
                  {
                    key: "getEventFullKey",
                    value: function (e) {
                      var t = "",
                        n = (function (e) {
                          var t = e.key;
                          if (null == t) {
                            if (null == (t = e.keyIdentifier))
                              return "Unidentified";
                            t.startsWith("U+") &&
                              ((t = String.fromCharCode(
                                parseInt(t.substring(2), 16)
                              )),
                              3 === e.location &&
                                Ul.hasOwnProperty(t) &&
                                (t = Ul[t]));
                          }
                          return Ll[t] || t;
                        })(e);
                      return (
                        " " === (n = n.toLowerCase())
                          ? (n = "space")
                          : "." === n && (n = "dot"),
                        jl.forEach(function (r) {
                          r != n && (0, Hl[r])(e) && (t += r + ".");
                        }),
                        (t += n)
                      );
                    },
                  },
                  {
                    key: "eventCallback",
                    value: function (e, t, r) {
                      return function (i) {
                        n.getEventFullKey(i) === e &&
                          r.runGuarded(function () {
                            return t(i);
                          });
                      };
                    },
                  },
                  {
                    key: "_normalizeKey",
                    value: function (e) {
                      switch (e) {
                        case "esc":
                          return "escape";
                        default:
                          return e;
                      }
                    },
                  },
                ]
              ),
              n
            );
          })(Cl)).ɵfac = function (e) {
            return new (e || Al)(Ke(Bs));
          }),
          (Al.ɵprov = ce({ token: Al, factory: Al.ɵfac })),
          Al),
        zl = Es(js, "browser", [
          { provide: Zo, useValue: "browser" },
          {
            provide: Ko,
            useValue: function () {
              vl.makeCurrent(), ml.init();
            },
            multi: !0,
          },
          {
            provide: Bs,
            useFactory: function () {
              return (
                (function (e) {
                  Et = e;
                })(document),
                document
              );
            },
            deps: [],
          },
        ]),
        Bl = [
          [],
          { provide: Ui, useValue: "root" },
          {
            provide: $n,
            useFactory: function () {
              return new $n();
            },
            deps: [],
          },
          { provide: _l, useClass: Fl, multi: !0, deps: [Bs, cs, Zo] },
          { provide: _l, useClass: Vl, multi: !0, deps: [Bs] },
          [],
          { provide: Rl, useClass: Rl, deps: [kl, bl, qo] },
          { provide: Za, useExisting: Rl },
          { provide: wl, useExisting: bl },
          { provide: bl, useClass: bl, deps: [Bs] },
          { provide: _s, useClass: _s, deps: [cs] },
          { provide: kl, useClass: kl, deps: [_l, cs] },
          [],
        ],
        ql =
          (((Il = (function () {
            function e(t) {
              if ((_classCallCheck(this, e), t))
                throw new Error(
                  "BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead."
                );
            }
            return (
              _createClass(e, null, [
                {
                  key: "withServerTransition",
                  value: function (t) {
                    return {
                      ngModule: e,
                      providers: [
                        { provide: qo, useValue: t.appId },
                        { provide: yl, useExisting: qo },
                        gl,
                      ],
                    };
                  },
                },
              ]),
              e
            );
          })()).ɵmod = ht({ type: Il })),
          (Il.ɵinj = he({
            factory: function (e) {
              return new (e || Il)(Ke(Il, 12));
            },
            providers: Bl,
            imports: [hl, Us],
          })),
          Il);
      "undefined" != typeof window && window;
      var Gl,
        Wl,
        Kl = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e) {
            var r;
            return _classCallCheck(this, n), ((r = t.call(this))._value = e), r;
          }
          return (
            _createClass(n, [
              {
                key: "_subscribe",
                value: function (e) {
                  var t = _get(
                    _getPrototypeOf(n.prototype),
                    "_subscribe",
                    this
                  ).call(this, e);
                  return t && !t.closed && e.next(this._value), t;
                },
              },
              {
                key: "getValue",
                value: function () {
                  if (this.hasError) throw this.thrownError;
                  if (this.closed) throw new E();
                  return this._value;
                },
              },
              {
                key: "next",
                value: function (e) {
                  _get(_getPrototypeOf(n.prototype), "next", this).call(
                    this,
                    (this._value = e)
                  );
                },
              },
              {
                key: "value",
                get: function () {
                  return this.getValue();
                },
              },
            ]),
            n
          );
        })(P),
        Zl =
          (((Wl = (function () {
            function e() {
              _classCallCheck(this, e), (this.inputVal = new Kl([]));
            }
            return (
              _createClass(e, [
                {
                  key: "addValue",
                  value: function (e) {
                    this.inputVal.next(e);
                  },
                },
                {
                  key: "getValue",
                  value: function () {
                    return this.inputVal.asObservable();
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || Wl)();
          }),
          (Wl.ɵprov = ce({ token: Wl, factory: Wl.ɵfac, providedIn: "root" })),
          Wl),
        Ql =
          (((Gl = (function () {
            function e() {
              _classCallCheck(this, e),
                (this.transactions = [
                  {
                    transaction: "Payment from Molly Sanders",
                    amount: 52e4,
                    status: "Success",
                    date: new Date(2020, 4, 5),
                  },
                  {
                    transaction: "Payment to Doug Mann",
                    amount: 19500,
                    status: "Processing",
                    date: new Date(2020, 3, 28),
                  },
                  {
                    transaction: "Payment to Erica Frost",
                    amount: 8750,
                    status: "Success",
                    date: new Date(2020, 3, 9),
                  },
                  {
                    transaction: "Added from account ****5555",
                    amount: 300,
                    status: "Failed",
                    date: new Date(2020, 2, 15),
                  },
                  {
                    transaction: "Payment from Hank Douglas",
                    amount: 2e4,
                    status: "Success",
                    date: new Date(2020, 1, 19),
                  },
                  {
                    transaction: "Payment from Hank Chase",
                    amount: 7250,
                    status: "Success",
                    date: new Date(2020, 1, 5),
                  },
                  {
                    transaction: "Payment to Molly Sanders",
                    amount: 475,
                    status: "Success",
                    date: new Date(2020, 0, 26),
                  },
                ]);
            }
            return (
              _createClass(e, [
                {
                  key: "getTransactions",
                  value: function () {
                    return this.transactions;
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || Gl)();
          }),
          (Gl.ɵprov = ce({ token: Gl, factory: Gl.ɵfac, providedIn: "root" })),
          Gl);
      function $l() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        var r = t[t.length - 1];
        return A(r) ? (t.pop(), z(t, r)) : Z(t);
      }
      var Yl = (function () {
          function e() {
            return (
              Error.call(this),
              (this.message = "no elements in sequence"),
              (this.name = "EmptyError"),
              this
            );
          }
          return (e.prototype = Object.create(Error.prototype)), e;
        })(),
        Jl = {},
        Xl = (function () {
          function e(t) {
            _classCallCheck(this, e), (this.resultSelector = t);
          }
          return (
            _createClass(e, [
              {
                key: "call",
                value: function (e, t) {
                  return t.subscribe(new ec(e, this.resultSelector));
                },
              },
            ]),
            e
          );
        })(),
        ec = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r) {
            var i;
            return (
              _classCallCheck(this, n),
              ((i = t.call(this, e)).resultSelector = r),
              (i.active = 0),
              (i.values = []),
              (i.observables = []),
              i
            );
          }
          return (
            _createClass(n, [
              {
                key: "_next",
                value: function (e) {
                  this.values.push(Jl), this.observables.push(e);
                },
              },
              {
                key: "_complete",
                value: function () {
                  var e = this.observables,
                    t = e.length;
                  if (0 === t) this.destination.complete();
                  else {
                    (this.active = t), (this.toRespond = t);
                    for (var n = 0; n < t; n++) {
                      var r = e[n];
                      this.add(j(this, r, r, n));
                    }
                  }
                },
              },
              {
                key: "notifyComplete",
                value: function (e) {
                  0 == (this.active -= 1) && this.destination.complete();
                },
              },
              {
                key: "notifyNext",
                value: function (e, t, n, r, i) {
                  var a = this.values,
                    o = this.toRespond
                      ? a[n] === Jl
                        ? --this.toRespond
                        : this.toRespond
                      : 0;
                  (a[n] = t),
                    0 === o &&
                      (this.resultSelector
                        ? this._tryResultSelector(a)
                        : this.destination.next(a.slice()));
                },
              },
              {
                key: "_tryResultSelector",
                value: function (e) {
                  var t;
                  try {
                    t = this.resultSelector.apply(this, e);
                  } catch (n) {
                    return void this.destination.error(n);
                  }
                  this.destination.next(t);
                },
              },
            ]),
            n
          );
        })(L),
        tc = new w(function (e) {
          return e.complete();
        });
      function nc(e) {
        return e
          ? (function (e) {
              return new w(function (t) {
                return e.schedule(function () {
                  return t.complete();
                });
              });
            })(e)
          : tc;
      }
      function rc(e) {
        return new w(function (t) {
          var n;
          try {
            n = e();
          } catch (r) {
            return void t.error(r);
          }
          return (n ? B(n) : nc()).subscribe(t);
        });
      }
      function ic() {
        return K(1);
      }
      function ac(e, t) {
        return function (n) {
          return n.lift(new oc(e, t));
        };
      }
      var oc = (function () {
          function e(t, n) {
            _classCallCheck(this, e), (this.predicate = t), (this.thisArg = n);
          }
          return (
            _createClass(e, [
              {
                key: "call",
                value: function (e, t) {
                  return t.subscribe(new sc(e, this.predicate, this.thisArg));
                },
              },
            ]),
            e
          );
        })(),
        sc = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r, i) {
            var a;
            return (
              _classCallCheck(this, n),
              ((a = t.call(this, e)).predicate = r),
              (a.thisArg = i),
              (a.count = 0),
              a
            );
          }
          return (
            _createClass(n, [
              {
                key: "_next",
                value: function (e) {
                  var t;
                  try {
                    t = this.predicate.call(this.thisArg, e, this.count++);
                  } catch (n) {
                    return void this.destination.error(n);
                  }
                  t && this.destination.next(e);
                },
              },
            ]),
            n
          );
        })(p),
        uc = (function () {
          function e() {
            return (
              Error.call(this),
              (this.message = "argument out of range"),
              (this.name = "ArgumentOutOfRangeError"),
              this
            );
          }
          return (e.prototype = Object.create(Error.prototype)), e;
        })();
      function lc(e) {
        return function (t) {
          return 0 === e ? nc() : t.lift(new cc(e));
        };
      }
      var cc = (function () {
          function e(t) {
            if ((_classCallCheck(this, e), (this.total = t), this.total < 0))
              throw new uc();
          }
          return (
            _createClass(e, [
              {
                key: "call",
                value: function (e, t) {
                  return t.subscribe(new hc(e, this.total));
                },
              },
            ]),
            e
          );
        })(),
        hc = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r) {
            var i;
            return (
              _classCallCheck(this, n),
              ((i = t.call(this, e)).total = r),
              (i.ring = new Array()),
              (i.count = 0),
              i
            );
          }
          return (
            _createClass(n, [
              {
                key: "_next",
                value: function (e) {
                  var t = this.ring,
                    n = this.total,
                    r = this.count++;
                  t.length < n ? t.push(e) : (t[r % n] = e);
                },
              },
              {
                key: "_complete",
                value: function () {
                  var e = this.destination,
                    t = this.count;
                  if (t > 0)
                    for (
                      var n =
                          this.count >= this.total ? this.total : this.count,
                        r = this.ring,
                        i = 0;
                      i < n;
                      i++
                    ) {
                      var a = t++ % n;
                      e.next(r[a]);
                    }
                  e.complete();
                },
              },
            ]),
            n
          );
        })(p);
      function fc() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pc;
        return function (t) {
          return t.lift(new dc(e));
        };
      }
      var dc = (function () {
          function e(t) {
            _classCallCheck(this, e), (this.errorFactory = t);
          }
          return (
            _createClass(e, [
              {
                key: "call",
                value: function (e, t) {
                  return t.subscribe(new vc(e, this.errorFactory));
                },
              },
            ]),
            e
          );
        })(),
        vc = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r) {
            var i;
            return (
              _classCallCheck(this, n),
              ((i = t.call(this, e)).errorFactory = r),
              (i.hasValue = !1),
              i
            );
          }
          return (
            _createClass(n, [
              {
                key: "_next",
                value: function (e) {
                  (this.hasValue = !0), this.destination.next(e);
                },
              },
              {
                key: "_complete",
                value: function () {
                  if (this.hasValue) return this.destination.complete();
                  var e;
                  try {
                    e = this.errorFactory();
                  } catch (t) {
                    e = t;
                  }
                  this.destination.error(e);
                },
              },
            ]),
            n
          );
        })(p);
      function pc() {
        return new Yl();
      }
      function yc() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return function (t) {
          return t.lift(new gc(e));
        };
      }
      var gc = (function () {
          function e(t) {
            _classCallCheck(this, e), (this.defaultValue = t);
          }
          return (
            _createClass(e, [
              {
                key: "call",
                value: function (e, t) {
                  return t.subscribe(new mc(e, this.defaultValue));
                },
              },
            ]),
            e
          );
        })(),
        mc = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r) {
            var i;
            return (
              _classCallCheck(this, n),
              ((i = t.call(this, e)).defaultValue = r),
              (i.isEmpty = !0),
              i
            );
          }
          return (
            _createClass(n, [
              {
                key: "_next",
                value: function (e) {
                  (this.isEmpty = !1), this.destination.next(e);
                },
              },
              {
                key: "_complete",
                value: function () {
                  this.isEmpty && this.destination.next(this.defaultValue),
                    this.destination.complete();
                },
              },
            ]),
            n
          );
        })(p);
      function _c(e, t) {
        var n = arguments.length >= 2;
        return function (r) {
          return r.pipe(
            e
              ? ac(function (t, n) {
                  return e(t, n, r);
                })
              : m,
            lc(1),
            n
              ? yc(t)
              : fc(function () {
                  return new Yl();
                })
          );
        };
      }
      function kc(e) {
        return function (t) {
          var n = new Cc(e),
            r = t.lift(n);
          return (n.caught = r);
        };
      }
      var Cc = (function () {
          function e(t) {
            _classCallCheck(this, e), (this.selector = t);
          }
          return (
            _createClass(e, [
              {
                key: "call",
                value: function (e, t) {
                  return t.subscribe(new wc(e, this.selector, this.caught));
                },
              },
            ]),
            e
          );
        })(),
        wc = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r, i) {
            var a;
            return (
              _classCallCheck(this, n),
              ((a = t.call(this, e)).selector = r),
              (a.caught = i),
              a
            );
          }
          return (
            _createClass(n, [
              {
                key: "error",
                value: function (e) {
                  if (!this.isStopped) {
                    var t;
                    try {
                      t = this.selector(e, this.caught);
                    } catch (a) {
                      return void _get(
                        _getPrototypeOf(n.prototype),
                        "error",
                        this
                      ).call(this, a);
                    }
                    this._unsubscribeAndRecycle();
                    var r = new I(this, void 0, void 0);
                    this.add(r);
                    var i = j(this, t, void 0, void 0, r);
                    i !== r && this.add(i);
                  }
                },
              },
            ]),
            n
          );
        })(L);
      function bc(e) {
        return function (t) {
          return 0 === e ? nc() : t.lift(new Sc(e));
        };
      }
      var Sc = (function () {
          function e(t) {
            if ((_classCallCheck(this, e), (this.total = t), this.total < 0))
              throw new uc();
          }
          return (
            _createClass(e, [
              {
                key: "call",
                value: function (e, t) {
                  return t.subscribe(new Ec(e, this.total));
                },
              },
            ]),
            e
          );
        })(),
        Ec = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r) {
            var i;
            return (
              _classCallCheck(this, n),
              ((i = t.call(this, e)).total = r),
              (i.count = 0),
              i
            );
          }
          return (
            _createClass(n, [
              {
                key: "_next",
                value: function (e) {
                  var t = this.total,
                    n = ++this.count;
                  n <= t &&
                    (this.destination.next(e),
                    n === t &&
                      (this.destination.complete(), this.unsubscribe()));
                },
              },
            ]),
            n
          );
        })(p);
      function Tc(e, t) {
        var n = arguments.length >= 2;
        return function (r) {
          return r.pipe(
            e
              ? ac(function (t, n) {
                  return e(t, n, r);
                })
              : m,
            bc(1),
            n
              ? yc(t)
              : fc(function () {
                  return new Yl();
                })
          );
        };
      }
      var xc = (function () {
          function e(t, n, r) {
            _classCallCheck(this, e),
              (this.predicate = t),
              (this.thisArg = n),
              (this.source = r);
          }
          return (
            _createClass(e, [
              {
                key: "call",
                value: function (e, t) {
                  return t.subscribe(
                    new Pc(e, this.predicate, this.thisArg, this.source)
                  );
                },
              },
            ]),
            e
          );
        })(),
        Pc = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r, i, a) {
            var o;
            return (
              _classCallCheck(this, n),
              ((o = t.call(this, e)).predicate = r),
              (o.thisArg = i),
              (o.source = a),
              (o.index = 0),
              (o.thisArg = i || _assertThisInitialized(o)),
              o
            );
          }
          return (
            _createClass(n, [
              {
                key: "notifyComplete",
                value: function (e) {
                  this.destination.next(e), this.destination.complete();
                },
              },
              {
                key: "_next",
                value: function (e) {
                  var t = !1;
                  try {
                    t = this.predicate.call(
                      this.thisArg,
                      e,
                      this.index++,
                      this.source
                    );
                  } catch (n) {
                    return void this.destination.error(n);
                  }
                  t || this.notifyComplete(!1);
                },
              },
              {
                key: "_complete",
                value: function () {
                  this.notifyComplete(!0);
                },
              },
            ]),
            n
          );
        })(p);
      function Oc(e, t) {
        return "function" == typeof t
          ? function (n) {
              return n.pipe(
                Oc(function (n, r) {
                  return B(e(n, r)).pipe(
                    U(function (e, i) {
                      return t(n, e, r, i);
                    })
                  );
                })
              );
            }
          : function (t) {
              return t.lift(new Ac(e));
            };
      }
      var Ac = (function () {
          function e(t) {
            _classCallCheck(this, e), (this.project = t);
          }
          return (
            _createClass(e, [
              {
                key: "call",
                value: function (e, t) {
                  return t.subscribe(new Ic(e, this.project));
                },
              },
            ]),
            e
          );
        })(),
        Ic = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r) {
            var i;
            return (
              _classCallCheck(this, n),
              ((i = t.call(this, e)).project = r),
              (i.index = 0),
              i
            );
          }
          return (
            _createClass(n, [
              {
                key: "_next",
                value: function (e) {
                  var t,
                    n = this.index++;
                  try {
                    t = this.project(e, n);
                  } catch (r) {
                    return void this.destination.error(r);
                  }
                  this._innerSub(t, e, n);
                },
              },
              {
                key: "_innerSub",
                value: function (e, t, n) {
                  var r = this.innerSubscription;
                  r && r.unsubscribe();
                  var i = new I(this, t, n),
                    a = this.destination;
                  a.add(i),
                    (this.innerSubscription = j(this, e, void 0, void 0, i)),
                    this.innerSubscription !== i &&
                      a.add(this.innerSubscription);
                },
              },
              {
                key: "_complete",
                value: function () {
                  var e = this.innerSubscription;
                  (e && !e.closed) ||
                    _get(_getPrototypeOf(n.prototype), "_complete", this).call(
                      this
                    ),
                    this.unsubscribe();
                },
              },
              {
                key: "_unsubscribe",
                value: function () {
                  this.innerSubscription = null;
                },
              },
              {
                key: "notifyComplete",
                value: function (e) {
                  this.destination.remove(e),
                    (this.innerSubscription = null),
                    this.isStopped &&
                      _get(
                        _getPrototypeOf(n.prototype),
                        "_complete",
                        this
                      ).call(this);
                },
              },
              {
                key: "notifyNext",
                value: function (e, t, n, r, i) {
                  this.destination.next(t);
                },
              },
            ]),
            n
          );
        })(L);
      function Rc() {
        return ic()($l.apply(void 0, arguments));
      }
      function Dc(e, t) {
        var n = !1;
        return (
          arguments.length >= 2 && (n = !0),
          function (r) {
            return r.lift(new Mc(e, t, n));
          }
        );
      }
      var Mc = (function () {
          function e(t, n) {
            var r =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            _classCallCheck(this, e),
              (this.accumulator = t),
              (this.seed = n),
              (this.hasSeed = r);
          }
          return (
            _createClass(e, [
              {
                key: "call",
                value: function (e, t) {
                  return t.subscribe(
                    new Nc(e, this.accumulator, this.seed, this.hasSeed)
                  );
                },
              },
            ]),
            e
          );
        })(),
        Nc = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r, i, a) {
            var o;
            return (
              _classCallCheck(this, n),
              ((o = t.call(this, e)).accumulator = r),
              (o._seed = i),
              (o.hasSeed = a),
              (o.index = 0),
              o
            );
          }
          return (
            _createClass(n, [
              {
                key: "_next",
                value: function (e) {
                  if (this.hasSeed) return this._tryNext(e);
                  (this.seed = e), this.destination.next(e);
                },
              },
              {
                key: "_tryNext",
                value: function (e) {
                  var t,
                    n = this.index++;
                  try {
                    t = this.accumulator(this.seed, e, n);
                  } catch (r) {
                    this.destination.error(r);
                  }
                  (this.seed = t), this.destination.next(t);
                },
              },
              {
                key: "seed",
                get: function () {
                  return this._seed;
                },
                set: function (e) {
                  (this.hasSeed = !0), (this._seed = e);
                },
              },
            ]),
            n
          );
        })(p);
      function Fc(e, t) {
        return q(e, t, 1);
      }
      function jc() {}
      function Lc(e, t, n) {
        return function (r) {
          return r.lift(new Hc(e, t, n));
        };
      }
      var Uc,
        Hc = (function () {
          function e(t, n, r) {
            _classCallCheck(this, e),
              (this.nextOrObserver = t),
              (this.error = n),
              (this.complete = r);
          }
          return (
            _createClass(e, [
              {
                key: "call",
                value: function (e, t) {
                  return t.subscribe(
                    new Vc(e, this.nextOrObserver, this.error, this.complete)
                  );
                },
              },
            ]),
            e
          );
        })(),
        Vc = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, i, a, o) {
            var s;
            return (
              _classCallCheck(this, n),
              ((s = t.call(this, e))._tapNext = jc),
              (s._tapError = jc),
              (s._tapComplete = jc),
              (s._tapError = a || jc),
              (s._tapComplete = o || jc),
              r(i)
                ? ((s._context = _assertThisInitialized(s)), (s._tapNext = i))
                : i &&
                  ((s._context = i),
                  (s._tapNext = i.next || jc),
                  (s._tapError = i.error || jc),
                  (s._tapComplete = i.complete || jc)),
              s
            );
          }
          return (
            _createClass(n, [
              {
                key: "_next",
                value: function (e) {
                  try {
                    this._tapNext.call(this._context, e);
                  } catch (t) {
                    return void this.destination.error(t);
                  }
                  this.destination.next(e);
                },
              },
              {
                key: "_error",
                value: function (e) {
                  try {
                    this._tapError.call(this._context, e);
                  } catch (e) {
                    return void this.destination.error(e);
                  }
                  this.destination.error(e);
                },
              },
              {
                key: "_complete",
                value: function () {
                  try {
                    this._tapComplete.call(this._context);
                  } catch (e) {
                    return void this.destination.error(e);
                  }
                  return this.destination.complete();
                },
              },
            ]),
            n
          );
        })(p),
        zc = (function () {
          function e(t) {
            _classCallCheck(this, e), (this.callback = t);
          }
          return (
            _createClass(e, [
              {
                key: "call",
                value: function (e, t) {
                  return t.subscribe(new Bc(e, this.callback));
                },
              },
            ]),
            e
          );
        })(),
        Bc = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r) {
            var i;
            return (
              _classCallCheck(this, n), (i = t.call(this, e)).add(new f(r)), i
            );
          }
          return n;
        })(p),
        qc = function e(t, n) {
          _classCallCheck(this, e), (this.id = t), (this.url = n);
        },
        Gc = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r) {
            var i,
              a =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : "imperative",
              o =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
            return (
              _classCallCheck(this, n),
              ((i = t.call(this, e, r)).navigationTrigger = a),
              (i.restoredState = o),
              i
            );
          }
          return (
            _createClass(n, [
              {
                key: "toString",
                value: function () {
                  return "NavigationStart(id: "
                    .concat(this.id, ", url: '")
                    .concat(this.url, "')");
                },
              },
            ]),
            n
          );
        })(qc),
        Wc = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r, i) {
            var a;
            return (
              _classCallCheck(this, n),
              ((a = t.call(this, e, r)).urlAfterRedirects = i),
              a
            );
          }
          return (
            _createClass(n, [
              {
                key: "toString",
                value: function () {
                  return "NavigationEnd(id: "
                    .concat(this.id, ", url: '")
                    .concat(this.url, "', urlAfterRedirects: '")
                    .concat(this.urlAfterRedirects, "')");
                },
              },
            ]),
            n
          );
        })(qc),
        Kc = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r, i) {
            var a;
            return (
              _classCallCheck(this, n), ((a = t.call(this, e, r)).reason = i), a
            );
          }
          return (
            _createClass(n, [
              {
                key: "toString",
                value: function () {
                  return "NavigationCancel(id: "
                    .concat(this.id, ", url: '")
                    .concat(this.url, "')");
                },
              },
            ]),
            n
          );
        })(qc),
        Zc = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r, i) {
            var a;
            return (
              _classCallCheck(this, n), ((a = t.call(this, e, r)).error = i), a
            );
          }
          return (
            _createClass(n, [
              {
                key: "toString",
                value: function () {
                  return "NavigationError(id: "
                    .concat(this.id, ", url: '")
                    .concat(this.url, "', error: ")
                    .concat(this.error, ")");
                },
              },
            ]),
            n
          );
        })(qc),
        Qc = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r, i, a) {
            var o;
            return (
              _classCallCheck(this, n),
              ((o = t.call(this, e, r)).urlAfterRedirects = i),
              (o.state = a),
              o
            );
          }
          return (
            _createClass(n, [
              {
                key: "toString",
                value: function () {
                  return "RoutesRecognized(id: "
                    .concat(this.id, ", url: '")
                    .concat(this.url, "', urlAfterRedirects: '")
                    .concat(this.urlAfterRedirects, "', state: ")
                    .concat(this.state, ")");
                },
              },
            ]),
            n
          );
        })(qc),
        $c = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r, i, a) {
            var o;
            return (
              _classCallCheck(this, n),
              ((o = t.call(this, e, r)).urlAfterRedirects = i),
              (o.state = a),
              o
            );
          }
          return (
            _createClass(n, [
              {
                key: "toString",
                value: function () {
                  return "GuardsCheckStart(id: "
                    .concat(this.id, ", url: '")
                    .concat(this.url, "', urlAfterRedirects: '")
                    .concat(this.urlAfterRedirects, "', state: ")
                    .concat(this.state, ")");
                },
              },
            ]),
            n
          );
        })(qc),
        Yc = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r, i, a, o) {
            var s;
            return (
              _classCallCheck(this, n),
              ((s = t.call(this, e, r)).urlAfterRedirects = i),
              (s.state = a),
              (s.shouldActivate = o),
              s
            );
          }
          return (
            _createClass(n, [
              {
                key: "toString",
                value: function () {
                  return "GuardsCheckEnd(id: "
                    .concat(this.id, ", url: '")
                    .concat(this.url, "', urlAfterRedirects: '")
                    .concat(this.urlAfterRedirects, "', state: ")
                    .concat(this.state, ", shouldActivate: ")
                    .concat(this.shouldActivate, ")");
                },
              },
            ]),
            n
          );
        })(qc),
        Jc = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r, i, a) {
            var o;
            return (
              _classCallCheck(this, n),
              ((o = t.call(this, e, r)).urlAfterRedirects = i),
              (o.state = a),
              o
            );
          }
          return (
            _createClass(n, [
              {
                key: "toString",
                value: function () {
                  return "ResolveStart(id: "
                    .concat(this.id, ", url: '")
                    .concat(this.url, "', urlAfterRedirects: '")
                    .concat(this.urlAfterRedirects, "', state: ")
                    .concat(this.state, ")");
                },
              },
            ]),
            n
          );
        })(qc),
        Xc = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r, i, a) {
            var o;
            return (
              _classCallCheck(this, n),
              ((o = t.call(this, e, r)).urlAfterRedirects = i),
              (o.state = a),
              o
            );
          }
          return (
            _createClass(n, [
              {
                key: "toString",
                value: function () {
                  return "ResolveEnd(id: "
                    .concat(this.id, ", url: '")
                    .concat(this.url, "', urlAfterRedirects: '")
                    .concat(this.urlAfterRedirects, "', state: ")
                    .concat(this.state, ")");
                },
              },
            ]),
            n
          );
        })(qc),
        eh = (function () {
          function e(t) {
            _classCallCheck(this, e), (this.route = t);
          }
          return (
            _createClass(e, [
              {
                key: "toString",
                value: function () {
                  return "RouteConfigLoadStart(path: ".concat(
                    this.route.path,
                    ")"
                  );
                },
              },
            ]),
            e
          );
        })(),
        th = (function () {
          function e(t) {
            _classCallCheck(this, e), (this.route = t);
          }
          return (
            _createClass(e, [
              {
                key: "toString",
                value: function () {
                  return "RouteConfigLoadEnd(path: ".concat(
                    this.route.path,
                    ")"
                  );
                },
              },
            ]),
            e
          );
        })(),
        nh = (function () {
          function e(t) {
            _classCallCheck(this, e), (this.snapshot = t);
          }
          return (
            _createClass(e, [
              {
                key: "toString",
                value: function () {
                  return "ChildActivationStart(path: '".concat(
                    (this.snapshot.routeConfig &&
                      this.snapshot.routeConfig.path) ||
                      "",
                    "')"
                  );
                },
              },
            ]),
            e
          );
        })(),
        rh = (function () {
          function e(t) {
            _classCallCheck(this, e), (this.snapshot = t);
          }
          return (
            _createClass(e, [
              {
                key: "toString",
                value: function () {
                  return "ChildActivationEnd(path: '".concat(
                    (this.snapshot.routeConfig &&
                      this.snapshot.routeConfig.path) ||
                      "",
                    "')"
                  );
                },
              },
            ]),
            e
          );
        })(),
        ih = (function () {
          function e(t) {
            _classCallCheck(this, e), (this.snapshot = t);
          }
          return (
            _createClass(e, [
              {
                key: "toString",
                value: function () {
                  return "ActivationStart(path: '".concat(
                    (this.snapshot.routeConfig &&
                      this.snapshot.routeConfig.path) ||
                      "",
                    "')"
                  );
                },
              },
            ]),
            e
          );
        })(),
        ah = (function () {
          function e(t) {
            _classCallCheck(this, e), (this.snapshot = t);
          }
          return (
            _createClass(e, [
              {
                key: "toString",
                value: function () {
                  return "ActivationEnd(path: '".concat(
                    (this.snapshot.routeConfig &&
                      this.snapshot.routeConfig.path) ||
                      "",
                    "')"
                  );
                },
              },
            ]),
            e
          );
        })(),
        oh = (function () {
          function e(t, n, r) {
            _classCallCheck(this, e),
              (this.routerEvent = t),
              (this.position = n),
              (this.anchor = r);
          }
          return (
            _createClass(e, [
              {
                key: "toString",
                value: function () {
                  return "Scroll(anchor: '"
                    .concat(this.anchor, "', position: '")
                    .concat(
                      this.position
                        ? ""
                            .concat(this.position[0], ", ")
                            .concat(this.position[1])
                        : null,
                      "')"
                    );
                },
              },
            ]),
            e
          );
        })(),
        sh =
          (((Uc = function e() {
            _classCallCheck(this, e);
          }).ɵfac = function (e) {
            return new (e || Uc)();
          }),
          (Uc.ɵcmp = st({
            type: Uc,
            selectors: [["ng-component"]],
            decls: 1,
            vars: 0,
            template: function (e, t) {
              1 & e && ba(0, "router-outlet");
            },
            directives: function () {
              return [pd];
            },
            encapsulation: 2,
          })),
          Uc),
        uh = (function () {
          function e(t) {
            _classCallCheck(this, e), (this.params = t || {});
          }
          return (
            _createClass(e, [
              {
                key: "has",
                value: function (e) {
                  return this.params.hasOwnProperty(e);
                },
              },
              {
                key: "get",
                value: function (e) {
                  if (this.has(e)) {
                    var t = this.params[e];
                    return Array.isArray(t) ? t[0] : t;
                  }
                  return null;
                },
              },
              {
                key: "getAll",
                value: function (e) {
                  if (this.has(e)) {
                    var t = this.params[e];
                    return Array.isArray(t) ? t : [t];
                  }
                  return [];
                },
              },
              {
                key: "keys",
                get: function () {
                  return Object.keys(this.params);
                },
              },
            ]),
            e
          );
        })();
      function lh(e) {
        return new uh(e);
      }
      function ch(e) {
        var t = Error("NavigationCancelingError: " + e);
        return (t.ngNavigationCancelingError = !0), t;
      }
      function hh(e, t, n) {
        var r = n.path.split("/");
        if (r.length > e.length) return null;
        if ("full" === n.pathMatch && (t.hasChildren() || r.length < e.length))
          return null;
        for (var i = {}, a = 0; a < r.length; a++) {
          var o = r[a],
            s = e[a];
          if (o.startsWith(":")) i[o.substring(1)] = s;
          else if (o !== s.path) return null;
        }
        return { consumed: e.slice(0, r.length), posParams: i };
      }
      var fh = function e(t, n) {
        _classCallCheck(this, e), (this.routes = t), (this.module = n);
      };
      function dh(e) {
        for (
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "",
            n = 0;
          n < e.length;
          n++
        ) {
          var r = e[n];
          vh(r, ph(t, r));
        }
      }
      function vh(e, t) {
        if (!e)
          throw new Error(
            "\n      Invalid configuration of route '".concat(
              t,
              "': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    "
            )
          );
        if (Array.isArray(e))
          throw new Error(
            "Invalid configuration of route '".concat(
              t,
              "': Array cannot be specified"
            )
          );
        if (
          !e.component &&
          !e.children &&
          !e.loadChildren &&
          e.outlet &&
          "primary" !== e.outlet
        )
          throw new Error(
            "Invalid configuration of route '".concat(
              t,
              "': a componentless route without children or loadChildren cannot have a named outlet set"
            )
          );
        if (e.redirectTo && e.children)
          throw new Error(
            "Invalid configuration of route '".concat(
              t,
              "': redirectTo and children cannot be used together"
            )
          );
        if (e.redirectTo && e.loadChildren)
          throw new Error(
            "Invalid configuration of route '".concat(
              t,
              "': redirectTo and loadChildren cannot be used together"
            )
          );
        if (e.children && e.loadChildren)
          throw new Error(
            "Invalid configuration of route '".concat(
              t,
              "': children and loadChildren cannot be used together"
            )
          );
        if (e.redirectTo && e.component)
          throw new Error(
            "Invalid configuration of route '".concat(
              t,
              "': redirectTo and component cannot be used together"
            )
          );
        if (e.path && e.matcher)
          throw new Error(
            "Invalid configuration of route '".concat(
              t,
              "': path and matcher cannot be used together"
            )
          );
        if (
          void 0 === e.redirectTo &&
          !e.component &&
          !e.children &&
          !e.loadChildren
        )
          throw new Error(
            "Invalid configuration of route '".concat(
              t,
              "'. One of the following must be provided: component, redirectTo, children or loadChildren"
            )
          );
        if (void 0 === e.path && void 0 === e.matcher)
          throw new Error(
            "Invalid configuration of route '".concat(
              t,
              "': routes must have either a path or a matcher specified"
            )
          );
        if ("string" == typeof e.path && "/" === e.path.charAt(0))
          throw new Error(
            "Invalid configuration of route '".concat(
              t,
              "': path cannot start with a slash"
            )
          );
        if ("" === e.path && void 0 !== e.redirectTo && void 0 === e.pathMatch)
          throw new Error(
            "Invalid configuration of route '{path: \""
              .concat(t, '", redirectTo: "')
              .concat(
                e.redirectTo,
                "\"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'."
              )
          );
        if (
          void 0 !== e.pathMatch &&
          "full" !== e.pathMatch &&
          "prefix" !== e.pathMatch
        )
          throw new Error(
            "Invalid configuration of route '".concat(
              t,
              "': pathMatch can only be set to 'prefix' or 'full'"
            )
          );
        e.children && dh(e.children, t);
      }
      function ph(e, t) {
        return t
          ? e || t.path
            ? e && !t.path
              ? e + "/"
              : !e && t.path
              ? t.path
              : "".concat(e, "/").concat(t.path)
            : ""
          : e;
      }
      function yh(e) {
        var t = e.children && e.children.map(yh),
          n = t
            ? Object.assign(Object.assign({}, e), { children: t })
            : Object.assign({}, e);
        return (
          !n.component &&
            (t || n.loadChildren) &&
            n.outlet &&
            "primary" !== n.outlet &&
            (n.component = sh),
          n
        );
      }
      function gh(e, t) {
        var n,
          r = Object.keys(e),
          i = Object.keys(t);
        if (!r || !i || r.length != i.length) return !1;
        for (var a = 0; a < r.length; a++)
          if (!mh(e[(n = r[a])], t[n])) return !1;
        return !0;
      }
      function mh(e, t) {
        return Array.isArray(e) && Array.isArray(t)
          ? e.length == t.length &&
              e.every(function (e) {
                return t.indexOf(e) > -1;
              })
          : e === t;
      }
      function _h(e) {
        return Array.prototype.concat.apply([], e);
      }
      function kh(e) {
        return e.length > 0 ? e[e.length - 1] : null;
      }
      function Ch(e, t) {
        for (var n in e) e.hasOwnProperty(n) && t(e[n], n);
      }
      function wh(e) {
        return (t = e) && "function" == typeof t.subscribe
          ? e
          : Sa(e)
          ? B(Promise.resolve(e))
          : $l(e);
        var t;
      }
      function bh(e, t, n) {
        return n
          ? (function (e, t) {
              return gh(e, t);
            })(e.queryParams, t.queryParams) &&
              (function e(t, n) {
                if (!xh(t.segments, n.segments)) return !1;
                if (t.numberOfChildren !== n.numberOfChildren) return !1;
                for (var r in n.children) {
                  if (!t.children[r]) return !1;
                  if (!e(t.children[r], n.children[r])) return !1;
                }
                return !0;
              })(e.root, t.root)
          : (function (e, t) {
              return (
                Object.keys(t).length <= Object.keys(e).length &&
                Object.keys(t).every(function (n) {
                  return mh(e[n], t[n]);
                })
              );
            })(e.queryParams, t.queryParams) &&
              (function e(t, n) {
                return (function t(n, r, i) {
                  if (n.segments.length > i.length)
                    return (
                      !!xh(n.segments.slice(0, i.length), i) && !r.hasChildren()
                    );
                  if (n.segments.length === i.length) {
                    if (!xh(n.segments, i)) return !1;
                    for (var a in r.children) {
                      if (!n.children[a]) return !1;
                      if (!e(n.children[a], r.children[a])) return !1;
                    }
                    return !0;
                  }
                  var o = i.slice(0, n.segments.length),
                    s = i.slice(n.segments.length);
                  return (
                    !!xh(n.segments, o) &&
                    !!n.children.primary &&
                    t(n.children.primary, r, s)
                  );
                })(t, n, n.segments);
              })(e.root, t.root);
      }
      var Sh = (function () {
          function e(t, n, r) {
            _classCallCheck(this, e),
              (this.root = t),
              (this.queryParams = n),
              (this.fragment = r);
          }
          return (
            _createClass(e, [
              {
                key: "toString",
                value: function () {
                  return Ih.serialize(this);
                },
              },
              {
                key: "queryParamMap",
                get: function () {
                  return (
                    this._queryParamMap ||
                      (this._queryParamMap = lh(this.queryParams)),
                    this._queryParamMap
                  );
                },
              },
            ]),
            e
          );
        })(),
        Eh = (function () {
          function e(t, n) {
            var r = this;
            _classCallCheck(this, e),
              (this.segments = t),
              (this.children = n),
              (this.parent = null),
              Ch(n, function (e, t) {
                return (e.parent = r);
              });
          }
          return (
            _createClass(e, [
              {
                key: "hasChildren",
                value: function () {
                  return this.numberOfChildren > 0;
                },
              },
              {
                key: "toString",
                value: function () {
                  return Rh(this);
                },
              },
              {
                key: "numberOfChildren",
                get: function () {
                  return Object.keys(this.children).length;
                },
              },
            ]),
            e
          );
        })(),
        Th = (function () {
          function e(t, n) {
            _classCallCheck(this, e), (this.path = t), (this.parameters = n);
          }
          return (
            _createClass(e, [
              {
                key: "toString",
                value: function () {
                  return Lh(this);
                },
              },
              {
                key: "parameterMap",
                get: function () {
                  return (
                    this._parameterMap ||
                      (this._parameterMap = lh(this.parameters)),
                    this._parameterMap
                  );
                },
              },
            ]),
            e
          );
        })();
      function xh(e, t) {
        return (
          e.length === t.length &&
          e.every(function (e, n) {
            return e.path === t[n].path;
          })
        );
      }
      function Ph(e, t) {
        var n = [];
        return (
          Ch(e.children, function (e, r) {
            "primary" === r && (n = n.concat(t(e, r)));
          }),
          Ch(e.children, function (e, r) {
            "primary" !== r && (n = n.concat(t(e, r)));
          }),
          n
        );
      }
      var Oh = function e() {
          _classCallCheck(this, e);
        },
        Ah = (function () {
          function e() {
            _classCallCheck(this, e);
          }
          return (
            _createClass(e, [
              {
                key: "parse",
                value: function (e) {
                  var t = new Bh(e);
                  return new Sh(
                    t.parseRootSegment(),
                    t.parseQueryParams(),
                    t.parseFragment()
                  );
                },
              },
              {
                key: "serialize",
                value: function (e) {
                  return ""
                    .concat(
                      "/" +
                        (function e(t, n) {
                          if (!t.hasChildren()) return Rh(t);
                          if (n) {
                            var r = t.children.primary
                                ? e(t.children.primary, !1)
                                : "",
                              i = [];
                            return (
                              Ch(t.children, function (t, n) {
                                "primary" !== n &&
                                  i.push("".concat(n, ":").concat(e(t, !1)));
                              }),
                              i.length > 0
                                ? "".concat(r, "(").concat(i.join("//"), ")")
                                : r
                            );
                          }
                          var a = Ph(t, function (n, r) {
                            return "primary" === r
                              ? [e(t.children.primary, !1)]
                              : ["".concat(r, ":").concat(e(n, !1))];
                          });
                          return ""
                            .concat(Rh(t), "/(")
                            .concat(a.join("//"), ")");
                        })(e.root, !0)
                    )
                    .concat(
                      ((t = e.queryParams),
                      (n = Object.keys(t).map(function (e) {
                        var n = t[e];
                        return Array.isArray(n)
                          ? n
                              .map(function (t) {
                                return "".concat(Mh(e), "=").concat(Mh(t));
                              })
                              .join("&")
                          : "".concat(Mh(e), "=").concat(Mh(n));
                      })),
                      n.length ? "?" + n.join("&") : "")
                    )
                    .concat(
                      "string" == typeof e.fragment
                        ? "#" + encodeURI(e.fragment)
                        : ""
                    );
                  var t, n;
                },
              },
            ]),
            e
          );
        })(),
        Ih = new Ah();
      function Rh(e) {
        return e.segments
          .map(function (e) {
            return Lh(e);
          })
          .join("/");
      }
      function Dh(e) {
        return encodeURIComponent(e)
          .replace(/%40/g, "@")
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",");
      }
      function Mh(e) {
        return Dh(e).replace(/%3B/gi, ";");
      }
      function Nh(e) {
        return Dh(e)
          .replace(/\(/g, "%28")
          .replace(/\)/g, "%29")
          .replace(/%26/gi, "&");
      }
      function Fh(e) {
        return decodeURIComponent(e);
      }
      function jh(e) {
        return Fh(e.replace(/\+/g, "%20"));
      }
      function Lh(e) {
        return "".concat(Nh(e.path)).concat(
          ((t = e.parameters),
          Object.keys(t)
            .map(function (e) {
              return ";".concat(Nh(e), "=").concat(Nh(t[e]));
            })
            .join(""))
        );
        var t;
      }
      var Uh = /^[^\/()?;=#]+/;
      function Hh(e) {
        var t = e.match(Uh);
        return t ? t[0] : "";
      }
      var Vh = /^[^=?&#]+/,
        zh = /^[^?&#]+/,
        Bh = (function () {
          function e(t) {
            _classCallCheck(this, e), (this.url = t), (this.remaining = t);
          }
          return (
            _createClass(e, [
              {
                key: "parseRootSegment",
                value: function () {
                  return (
                    this.consumeOptional("/"),
                    "" === this.remaining ||
                    this.peekStartsWith("?") ||
                    this.peekStartsWith("#")
                      ? new Eh([], {})
                      : new Eh([], this.parseChildren())
                  );
                },
              },
              {
                key: "parseQueryParams",
                value: function () {
                  var e = {};
                  if (this.consumeOptional("?"))
                    do {
                      this.parseQueryParam(e);
                    } while (this.consumeOptional("&"));
                  return e;
                },
              },
              {
                key: "parseFragment",
                value: function () {
                  return this.consumeOptional("#")
                    ? decodeURIComponent(this.remaining)
                    : null;
                },
              },
              {
                key: "parseChildren",
                value: function () {
                  if ("" === this.remaining) return {};
                  this.consumeOptional("/");
                  var e = [];
                  for (
                    this.peekStartsWith("(") || e.push(this.parseSegment());
                    this.peekStartsWith("/") &&
                    !this.peekStartsWith("//") &&
                    !this.peekStartsWith("/(");

                  )
                    this.capture("/"), e.push(this.parseSegment());
                  var t = {};
                  this.peekStartsWith("/(") &&
                    (this.capture("/"), (t = this.parseParens(!0)));
                  var n = {};
                  return (
                    this.peekStartsWith("(") && (n = this.parseParens(!1)),
                    (e.length > 0 || Object.keys(t).length > 0) &&
                      (n.primary = new Eh(e, t)),
                    n
                  );
                },
              },
              {
                key: "parseSegment",
                value: function () {
                  var e = Hh(this.remaining);
                  if ("" === e && this.peekStartsWith(";"))
                    throw new Error(
                      "Empty path url segment cannot have parameters: '".concat(
                        this.remaining,
                        "'."
                      )
                    );
                  return (
                    this.capture(e), new Th(Fh(e), this.parseMatrixParams())
                  );
                },
              },
              {
                key: "parseMatrixParams",
                value: function () {
                  for (var e = {}; this.consumeOptional(";"); )
                    this.parseParam(e);
                  return e;
                },
              },
              {
                key: "parseParam",
                value: function (e) {
                  var t = Hh(this.remaining);
                  if (t) {
                    this.capture(t);
                    var n = "";
                    if (this.consumeOptional("=")) {
                      var r = Hh(this.remaining);
                      r && ((n = r), this.capture(n));
                    }
                    e[Fh(t)] = Fh(n);
                  }
                },
              },
              {
                key: "parseQueryParam",
                value: function (e) {
                  var t = (function (e) {
                    var t = e.match(Vh);
                    return t ? t[0] : "";
                  })(this.remaining);
                  if (t) {
                    this.capture(t);
                    var n = "";
                    if (this.consumeOptional("=")) {
                      var r = (function (e) {
                        var t = e.match(zh);
                        return t ? t[0] : "";
                      })(this.remaining);
                      r && ((n = r), this.capture(n));
                    }
                    var i = jh(t),
                      a = jh(n);
                    if (e.hasOwnProperty(i)) {
                      var o = e[i];
                      Array.isArray(o) || ((o = [o]), (e[i] = o)), o.push(a);
                    } else e[i] = a;
                  }
                },
              },
              {
                key: "parseParens",
                value: function (e) {
                  var t = {};
                  for (
                    this.capture("(");
                    !this.consumeOptional(")") && this.remaining.length > 0;

                  ) {
                    var n = Hh(this.remaining),
                      r = this.remaining[n.length];
                    if ("/" !== r && ")" !== r && ";" !== r)
                      throw new Error(
                        "Cannot parse url '".concat(this.url, "'")
                      );
                    var i = void 0;
                    n.indexOf(":") > -1
                      ? ((i = n.substr(0, n.indexOf(":"))),
                        this.capture(i),
                        this.capture(":"))
                      : e && (i = "primary");
                    var a = this.parseChildren();
                    (t[i] =
                      1 === Object.keys(a).length ? a.primary : new Eh([], a)),
                      this.consumeOptional("//");
                  }
                  return t;
                },
              },
              {
                key: "peekStartsWith",
                value: function (e) {
                  return this.remaining.startsWith(e);
                },
              },
              {
                key: "consumeOptional",
                value: function (e) {
                  return (
                    !!this.peekStartsWith(e) &&
                    ((this.remaining = this.remaining.substring(e.length)), !0)
                  );
                },
              },
              {
                key: "capture",
                value: function (e) {
                  if (!this.consumeOptional(e))
                    throw new Error('Expected "'.concat(e, '".'));
                },
              },
            ]),
            e
          );
        })(),
        qh = (function () {
          function e(t) {
            _classCallCheck(this, e), (this._root = t);
          }
          return (
            _createClass(e, [
              {
                key: "parent",
                value: function (e) {
                  var t = this.pathFromRoot(e);
                  return t.length > 1 ? t[t.length - 2] : null;
                },
              },
              {
                key: "children",
                value: function (e) {
                  var t = Gh(e, this._root);
                  return t
                    ? t.children.map(function (e) {
                        return e.value;
                      })
                    : [];
                },
              },
              {
                key: "firstChild",
                value: function (e) {
                  var t = Gh(e, this._root);
                  return t && t.children.length > 0
                    ? t.children[0].value
                    : null;
                },
              },
              {
                key: "siblings",
                value: function (e) {
                  var t = Wh(e, this._root);
                  return t.length < 2
                    ? []
                    : t[t.length - 2].children
                        .map(function (e) {
                          return e.value;
                        })
                        .filter(function (t) {
                          return t !== e;
                        });
                },
              },
              {
                key: "pathFromRoot",
                value: function (e) {
                  return Wh(e, this._root).map(function (e) {
                    return e.value;
                  });
                },
              },
              {
                key: "root",
                get: function () {
                  return this._root.value;
                },
              },
            ]),
            e
          );
        })();
      function Gh(e, t) {
        if (e === t.value) return t;
        var n,
          r = _createForOfIteratorHelper(t.children);
        try {
          for (r.s(); !(n = r.n()).done; ) {
            var i = Gh(e, n.value);
            if (i) return i;
          }
        } catch (a) {
          r.e(a);
        } finally {
          r.f();
        }
        return null;
      }
      function Wh(e, t) {
        if (e === t.value) return [t];
        var n,
          r = _createForOfIteratorHelper(t.children);
        try {
          for (r.s(); !(n = r.n()).done; ) {
            var i = Wh(e, n.value);
            if (i.length) return i.unshift(t), i;
          }
        } catch (a) {
          r.e(a);
        } finally {
          r.f();
        }
        return [];
      }
      var Kh = (function () {
        function e(t, n) {
          _classCallCheck(this, e), (this.value = t), (this.children = n);
        }
        return (
          _createClass(e, [
            {
              key: "toString",
              value: function () {
                return "TreeNode(".concat(this.value, ")");
              },
            },
          ]),
          e
        );
      })();
      function Zh(e) {
        var t = {};
        return (
          e &&
            e.children.forEach(function (e) {
              return (t[e.value.outlet] = e);
            }),
          t
        );
      }
      var Qh = (function (e) {
        _inherits(n, e);
        var t = _createSuper(n);
        function n(e, r) {
          var i;
          return (
            _classCallCheck(this, n),
            ((i = t.call(this, e)).snapshot = r),
            tf(_assertThisInitialized(i), e),
            i
          );
        }
        return (
          _createClass(n, [
            {
              key: "toString",
              value: function () {
                return this.snapshot.toString();
              },
            },
          ]),
          n
        );
      })(qh);
      function $h(e, t) {
        var n = (function (e, t) {
            var n = new Xh(
              [],
              {},
              {},
              "",
              {},
              "primary",
              t,
              null,
              e.root,
              -1,
              {}
            );
            return new ef("", new Kh(n, []));
          })(e, t),
          r = new Kl([new Th("", {})]),
          i = new Kl({}),
          a = new Kl({}),
          o = new Kl({}),
          s = new Kl(""),
          u = new Yh(r, i, o, s, a, "primary", t, n.root);
        return (u.snapshot = n.root), new Qh(new Kh(u, []), n);
      }
      var Yh = (function () {
        function e(t, n, r, i, a, o, s, u) {
          _classCallCheck(this, e),
            (this.url = t),
            (this.params = n),
            (this.queryParams = r),
            (this.fragment = i),
            (this.data = a),
            (this.outlet = o),
            (this.component = s),
            (this._futureSnapshot = u);
        }
        return (
          _createClass(e, [
            {
              key: "toString",
              value: function () {
                return this.snapshot
                  ? this.snapshot.toString()
                  : "Future(".concat(this._futureSnapshot, ")");
              },
            },
            {
              key: "routeConfig",
              get: function () {
                return this._futureSnapshot.routeConfig;
              },
            },
            {
              key: "root",
              get: function () {
                return this._routerState.root;
              },
            },
            {
              key: "parent",
              get: function () {
                return this._routerState.parent(this);
              },
            },
            {
              key: "firstChild",
              get: function () {
                return this._routerState.firstChild(this);
              },
            },
            {
              key: "children",
              get: function () {
                return this._routerState.children(this);
              },
            },
            {
              key: "pathFromRoot",
              get: function () {
                return this._routerState.pathFromRoot(this);
              },
            },
            {
              key: "paramMap",
              get: function () {
                return (
                  this._paramMap ||
                    (this._paramMap = this.params.pipe(
                      U(function (e) {
                        return lh(e);
                      })
                    )),
                  this._paramMap
                );
              },
            },
            {
              key: "queryParamMap",
              get: function () {
                return (
                  this._queryParamMap ||
                    (this._queryParamMap = this.queryParams.pipe(
                      U(function (e) {
                        return lh(e);
                      })
                    )),
                  this._queryParamMap
                );
              },
            },
          ]),
          e
        );
      })();
      function Jh(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "emptyOnly",
          n = e.pathFromRoot,
          r = 0;
        if ("always" !== t)
          for (r = n.length - 1; r >= 1; ) {
            var i = n[r],
              a = n[r - 1];
            if (i.routeConfig && "" === i.routeConfig.path) r--;
            else {
              if (a.component) break;
              r--;
            }
          }
        return (function (e) {
          return e.reduce(
            function (e, t) {
              return {
                params: Object.assign(Object.assign({}, e.params), t.params),
                data: Object.assign(Object.assign({}, e.data), t.data),
                resolve: Object.assign(
                  Object.assign({}, e.resolve),
                  t._resolvedData
                ),
              };
            },
            { params: {}, data: {}, resolve: {} }
          );
        })(n.slice(r));
      }
      var Xh = (function () {
          function e(t, n, r, i, a, o, s, u, l, c, h) {
            _classCallCheck(this, e),
              (this.url = t),
              (this.params = n),
              (this.queryParams = r),
              (this.fragment = i),
              (this.data = a),
              (this.outlet = o),
              (this.component = s),
              (this.routeConfig = u),
              (this._urlSegment = l),
              (this._lastPathIndex = c),
              (this._resolve = h);
          }
          return (
            _createClass(e, [
              {
                key: "toString",
                value: function () {
                  return "Route(url:'"
                    .concat(
                      this.url
                        .map(function (e) {
                          return e.toString();
                        })
                        .join("/"),
                      "', path:'"
                    )
                    .concat(
                      this.routeConfig ? this.routeConfig.path : "",
                      "')"
                    );
                },
              },
              {
                key: "root",
                get: function () {
                  return this._routerState.root;
                },
              },
              {
                key: "parent",
                get: function () {
                  return this._routerState.parent(this);
                },
              },
              {
                key: "firstChild",
                get: function () {
                  return this._routerState.firstChild(this);
                },
              },
              {
                key: "children",
                get: function () {
                  return this._routerState.children(this);
                },
              },
              {
                key: "pathFromRoot",
                get: function () {
                  return this._routerState.pathFromRoot(this);
                },
              },
              {
                key: "paramMap",
                get: function () {
                  return (
                    this._paramMap || (this._paramMap = lh(this.params)),
                    this._paramMap
                  );
                },
              },
              {
                key: "queryParamMap",
                get: function () {
                  return (
                    this._queryParamMap ||
                      (this._queryParamMap = lh(this.queryParams)),
                    this._queryParamMap
                  );
                },
              },
            ]),
            e
          );
        })(),
        ef = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r) {
            var i;
            return (
              _classCallCheck(this, n),
              ((i = t.call(this, r)).url = e),
              tf(_assertThisInitialized(i), r),
              i
            );
          }
          return (
            _createClass(n, [
              {
                key: "toString",
                value: function () {
                  return nf(this._root);
                },
              },
            ]),
            n
          );
        })(qh);
      function tf(e, t) {
        (t.value._routerState = e),
          t.children.forEach(function (t) {
            return tf(e, t);
          });
      }
      function nf(e) {
        var t =
          e.children.length > 0
            ? " { ".concat(e.children.map(nf).join(", "), " } ")
            : "";
        return "".concat(e.value).concat(t);
      }
      function rf(e) {
        if (e.snapshot) {
          var t = e.snapshot,
            n = e._futureSnapshot;
          (e.snapshot = n),
            gh(t.queryParams, n.queryParams) ||
              e.queryParams.next(n.queryParams),
            t.fragment !== n.fragment && e.fragment.next(n.fragment),
            gh(t.params, n.params) || e.params.next(n.params),
            (function (e, t) {
              if (e.length !== t.length) return !1;
              for (var n = 0; n < e.length; ++n) if (!gh(e[n], t[n])) return !1;
              return !0;
            })(t.url, n.url) || e.url.next(n.url),
            gh(t.data, n.data) || e.data.next(n.data);
        } else
          (e.snapshot = e._futureSnapshot), e.data.next(e._futureSnapshot.data);
      }
      function af(e, t) {
        var n, r;
        return (
          gh(e.params, t.params) &&
          xh((n = e.url), (r = t.url)) &&
          n.every(function (e, t) {
            return gh(e.parameters, r[t].parameters);
          }) &&
          !(!e.parent != !t.parent) &&
          (!e.parent || af(e.parent, t.parent))
        );
      }
      function of(e) {
        return (
          "object" == typeof e && null != e && !e.outlets && !e.segmentPath
        );
      }
      function sf(e, t, n, r, i) {
        var a = {};
        return (
          r &&
            Ch(r, function (e, t) {
              a[t] = Array.isArray(e)
                ? e.map(function (e) {
                    return "" + e;
                  })
                : "" + e;
            }),
          new Sh(
            n.root === e
              ? t
              : (function e(t, n, r) {
                  var i = {};
                  return (
                    Ch(t.children, function (t, a) {
                      i[a] = t === n ? r : e(t, n, r);
                    }),
                    new Eh(t.segments, i)
                  );
                })(n.root, e, t),
            a,
            i
          )
        );
      }
      var uf = (function () {
          function e(t, n, r) {
            if (
              (_classCallCheck(this, e),
              (this.isAbsolute = t),
              (this.numberOfDoubleDots = n),
              (this.commands = r),
              t && r.length > 0 && of(r[0]))
            )
              throw new Error("Root segment cannot have matrix parameters");
            var i = r.find(function (e) {
              return "object" == typeof e && null != e && e.outlets;
            });
            if (i && i !== kh(r))
              throw new Error("{outlets:{}} has to be the last command");
          }
          return (
            _createClass(e, [
              {
                key: "toRoot",
                value: function () {
                  return (
                    this.isAbsolute &&
                    1 === this.commands.length &&
                    "/" == this.commands[0]
                  );
                },
              },
            ]),
            e
          );
        })(),
        lf = function e(t, n, r) {
          _classCallCheck(this, e),
            (this.segmentGroup = t),
            (this.processChildren = n),
            (this.index = r);
        };
      function cf(e) {
        return "object" == typeof e && null != e && e.outlets
          ? e.outlets.primary
          : "" + e;
      }
      function hf(e, t, n) {
        if (
          (e || (e = new Eh([], {})),
          0 === e.segments.length && e.hasChildren())
        )
          return ff(e, t, n);
        var r = (function (e, t, n) {
            for (
              var r = 0,
                i = t,
                a = { match: !1, pathIndex: 0, commandIndex: 0 };
              i < e.segments.length;

            ) {
              if (r >= n.length) return a;
              var o = e.segments[i],
                s = cf(n[r]),
                u = r < n.length - 1 ? n[r + 1] : null;
              if (i > 0 && void 0 === s) break;
              if (s && u && "object" == typeof u && void 0 === u.outlets) {
                if (!yf(s, u, o)) return a;
                r += 2;
              } else {
                if (!yf(s, {}, o)) return a;
                r++;
              }
              i++;
            }
            return { match: !0, pathIndex: i, commandIndex: r };
          })(e, t, n),
          i = n.slice(r.commandIndex);
        if (r.match && r.pathIndex < e.segments.length) {
          var a = new Eh(e.segments.slice(0, r.pathIndex), {});
          return (
            (a.children.primary = new Eh(
              e.segments.slice(r.pathIndex),
              e.children
            )),
            ff(a, 0, i)
          );
        }
        return r.match && 0 === i.length
          ? new Eh(e.segments, {})
          : r.match && !e.hasChildren()
          ? df(e, t, n)
          : r.match
          ? ff(e, 0, i)
          : df(e, t, n);
      }
      function ff(e, t, n) {
        if (0 === n.length) return new Eh(e.segments, {});
        var r = (function (e) {
            return "object" != typeof e[0] || void 0 === e[0].outlets
              ? { primary: e }
              : e[0].outlets;
          })(n),
          i = {};
        return (
          Ch(r, function (n, r) {
            null !== n && (i[r] = hf(e.children[r], t, n));
          }),
          Ch(e.children, function (e, t) {
            void 0 === r[t] && (i[t] = e);
          }),
          new Eh(e.segments, i)
        );
      }
      function df(e, t, n) {
        for (var r = e.segments.slice(0, t), i = 0; i < n.length; ) {
          if ("object" == typeof n[i] && void 0 !== n[i].outlets) {
            var a = vf(n[i].outlets);
            return new Eh(r, a);
          }
          if (0 === i && of(n[0]))
            r.push(new Th(e.segments[t].path, n[0])), i++;
          else {
            var o = cf(n[i]),
              s = i < n.length - 1 ? n[i + 1] : null;
            o && s && of(s)
              ? (r.push(new Th(o, pf(s))), (i += 2))
              : (r.push(new Th(o, {})), i++);
          }
        }
        return new Eh(r, {});
      }
      function vf(e) {
        var t = {};
        return (
          Ch(e, function (e, n) {
            null !== e && (t[n] = df(new Eh([], {}), 0, e));
          }),
          t
        );
      }
      function pf(e) {
        var t = {};
        return (
          Ch(e, function (e, n) {
            return (t[n] = "" + e);
          }),
          t
        );
      }
      function yf(e, t, n) {
        return e == n.path && gh(t, n.parameters);
      }
      var gf = (function () {
        function e(t, n, r, i) {
          _classCallCheck(this, e),
            (this.routeReuseStrategy = t),
            (this.futureState = n),
            (this.currState = r),
            (this.forwardEvent = i);
        }
        return (
          _createClass(e, [
            {
              key: "activate",
              value: function (e) {
                var t = this.futureState._root,
                  n = this.currState ? this.currState._root : null;
                this.deactivateChildRoutes(t, n, e),
                  rf(this.futureState.root),
                  this.activateChildRoutes(t, n, e);
              },
            },
            {
              key: "deactivateChildRoutes",
              value: function (e, t, n) {
                var r = this,
                  i = Zh(t);
                e.children.forEach(function (e) {
                  var t = e.value.outlet;
                  r.deactivateRoutes(e, i[t], n), delete i[t];
                }),
                  Ch(i, function (e, t) {
                    r.deactivateRouteAndItsChildren(e, n);
                  });
              },
            },
            {
              key: "deactivateRoutes",
              value: function (e, t, n) {
                var r = e.value,
                  i = t ? t.value : null;
                if (r === i)
                  if (r.component) {
                    var a = n.getContext(r.outlet);
                    a && this.deactivateChildRoutes(e, t, a.children);
                  } else this.deactivateChildRoutes(e, t, n);
                else i && this.deactivateRouteAndItsChildren(t, n);
              },
            },
            {
              key: "deactivateRouteAndItsChildren",
              value: function (e, t) {
                this.routeReuseStrategy.shouldDetach(e.value.snapshot)
                  ? this.detachAndStoreRouteSubtree(e, t)
                  : this.deactivateRouteAndOutlet(e, t);
              },
            },
            {
              key: "detachAndStoreRouteSubtree",
              value: function (e, t) {
                var n = t.getContext(e.value.outlet);
                if (n && n.outlet) {
                  var r = n.outlet.detach(),
                    i = n.children.onOutletDeactivated();
                  this.routeReuseStrategy.store(e.value.snapshot, {
                    componentRef: r,
                    route: e,
                    contexts: i,
                  });
                }
              },
            },
            {
              key: "deactivateRouteAndOutlet",
              value: function (e, t) {
                var n = this,
                  r = t.getContext(e.value.outlet);
                if (r) {
                  var i = Zh(e),
                    a = e.value.component ? r.children : t;
                  Ch(i, function (e, t) {
                    return n.deactivateRouteAndItsChildren(e, a);
                  }),
                    r.outlet &&
                      (r.outlet.deactivate(), r.children.onOutletDeactivated());
                }
              },
            },
            {
              key: "activateChildRoutes",
              value: function (e, t, n) {
                var r = this,
                  i = Zh(t);
                e.children.forEach(function (e) {
                  r.activateRoutes(e, i[e.value.outlet], n),
                    r.forwardEvent(new ah(e.value.snapshot));
                }),
                  e.children.length &&
                    this.forwardEvent(new rh(e.value.snapshot));
              },
            },
            {
              key: "activateRoutes",
              value: function (e, t, n) {
                var r = e.value,
                  i = t ? t.value : null;
                if ((rf(r), r === i))
                  if (r.component) {
                    var a = n.getOrCreateContext(r.outlet);
                    this.activateChildRoutes(e, t, a.children);
                  } else this.activateChildRoutes(e, t, n);
                else if (r.component) {
                  var o = n.getOrCreateContext(r.outlet);
                  if (this.routeReuseStrategy.shouldAttach(r.snapshot)) {
                    var s = this.routeReuseStrategy.retrieve(r.snapshot);
                    this.routeReuseStrategy.store(r.snapshot, null),
                      o.children.onOutletReAttached(s.contexts),
                      (o.attachRef = s.componentRef),
                      (o.route = s.route.value),
                      o.outlet &&
                        o.outlet.attach(s.componentRef, s.route.value),
                      mf(s.route);
                  } else {
                    var u = (function (e) {
                        for (var t = e.parent; t; t = t.parent) {
                          var n = t.routeConfig;
                          if (n && n._loadedConfig) return n._loadedConfig;
                          if (n && n.component) return null;
                        }
                        return null;
                      })(r.snapshot),
                      l = u ? u.module.componentFactoryResolver : null;
                    (o.attachRef = null),
                      (o.route = r),
                      (o.resolver = l),
                      o.outlet && o.outlet.activateWith(r, l),
                      this.activateChildRoutes(e, null, o.children);
                  }
                } else this.activateChildRoutes(e, null, n);
              },
            },
          ]),
          e
        );
      })();
      function mf(e) {
        rf(e.value), e.children.forEach(mf);
      }
      function _f(e) {
        return "function" == typeof e;
      }
      function kf(e) {
        return e instanceof Sh;
      }
      var Cf = function e(t) {
          _classCallCheck(this, e), (this.segmentGroup = t || null);
        },
        wf = function e(t) {
          _classCallCheck(this, e), (this.urlTree = t);
        };
      function bf(e) {
        return new w(function (t) {
          return t.error(new Cf(e));
        });
      }
      function Sf(e) {
        return new w(function (t) {
          return t.error(new wf(e));
        });
      }
      function Ef(e) {
        return new w(function (t) {
          return t.error(
            new Error(
              "Only absolute redirects can have named outlets. redirectTo: '".concat(
                e,
                "'"
              )
            )
          );
        });
      }
      var Tf = (function () {
        function e(t, n, r, i, a) {
          _classCallCheck(this, e),
            (this.configLoader = n),
            (this.urlSerializer = r),
            (this.urlTree = i),
            (this.config = a),
            (this.allowRedirects = !0),
            (this.ngModule = t.get(Ye));
        }
        return (
          _createClass(e, [
            {
              key: "apply",
              value: function () {
                var e = this;
                return this.expandSegmentGroup(
                  this.ngModule,
                  this.config,
                  this.urlTree.root,
                  "primary"
                )
                  .pipe(
                    U(function (t) {
                      return e.createUrlTree(
                        t,
                        e.urlTree.queryParams,
                        e.urlTree.fragment
                      );
                    })
                  )
                  .pipe(
                    kc(function (t) {
                      if (t instanceof wf)
                        return (e.allowRedirects = !1), e.match(t.urlTree);
                      if (t instanceof Cf) throw e.noMatchError(t);
                      throw t;
                    })
                  );
              },
            },
            {
              key: "match",
              value: function (e) {
                var t = this;
                return this.expandSegmentGroup(
                  this.ngModule,
                  this.config,
                  e.root,
                  "primary"
                )
                  .pipe(
                    U(function (n) {
                      return t.createUrlTree(n, e.queryParams, e.fragment);
                    })
                  )
                  .pipe(
                    kc(function (e) {
                      if (e instanceof Cf) throw t.noMatchError(e);
                      throw e;
                    })
                  );
              },
            },
            {
              key: "noMatchError",
              value: function (e) {
                return new Error(
                  "Cannot match any routes. URL Segment: '".concat(
                    e.segmentGroup,
                    "'"
                  )
                );
              },
            },
            {
              key: "createUrlTree",
              value: function (e, t, n) {
                var r = e.segments.length > 0 ? new Eh([], { primary: e }) : e;
                return new Sh(r, t, n);
              },
            },
            {
              key: "expandSegmentGroup",
              value: function (e, t, n, r) {
                return 0 === n.segments.length && n.hasChildren()
                  ? this.expandChildren(e, t, n).pipe(
                      U(function (e) {
                        return new Eh([], e);
                      })
                    )
                  : this.expandSegment(e, n, t, n.segments, r, !0);
              },
            },
            {
              key: "expandChildren",
              value: function (e, t, n) {
                var r = this;
                return (function (n, i) {
                  if (0 === Object.keys(n).length) return $l({});
                  var a = [],
                    o = [],
                    s = {};
                  return (
                    Ch(n, function (n, i) {
                      var u,
                        l,
                        c = ((u = i),
                        (l = n),
                        r.expandSegmentGroup(e, t, l, u)).pipe(
                          U(function (e) {
                            return (s[i] = e);
                          })
                        );
                      "primary" === i ? a.push(c) : o.push(c);
                    }),
                    $l.apply(null, a.concat(o)).pipe(
                      ic(),
                      _c(),
                      U(function () {
                        return s;
                      })
                    )
                  );
                })(n.children);
              },
            },
            {
              key: "expandSegment",
              value: function (e, t, n, r, i, a) {
                var o = this;
                return $l.apply(void 0, _toConsumableArray(n)).pipe(
                  U(function (s) {
                    return o
                      .expandSegmentAgainstRoute(e, t, n, s, r, i, a)
                      .pipe(
                        kc(function (e) {
                          if (e instanceof Cf) return $l(null);
                          throw e;
                        })
                      );
                  }),
                  ic(),
                  Tc(function (e) {
                    return !!e;
                  }),
                  kc(function (e, n) {
                    if (e instanceof Yl || "EmptyError" === e.name) {
                      if (o.noLeftoversInUrl(t, r, i))
                        return $l(new Eh([], {}));
                      throw new Cf(t);
                    }
                    throw e;
                  })
                );
              },
            },
            {
              key: "noLeftoversInUrl",
              value: function (e, t, n) {
                return 0 === t.length && !e.children[n];
              },
            },
            {
              key: "expandSegmentAgainstRoute",
              value: function (e, t, n, r, i, a, o) {
                return Af(r) !== a
                  ? bf(t)
                  : void 0 === r.redirectTo
                  ? this.matchSegmentAgainstRoute(e, t, r, i)
                  : o && this.allowRedirects
                  ? this.expandSegmentAgainstRouteUsingRedirect(
                      e,
                      t,
                      n,
                      r,
                      i,
                      a
                    )
                  : bf(t);
              },
            },
            {
              key: "expandSegmentAgainstRouteUsingRedirect",
              value: function (e, t, n, r, i, a) {
                return "**" === r.path
                  ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(
                      e,
                      n,
                      r,
                      a
                    )
                  : this.expandRegularSegmentAgainstRouteUsingRedirect(
                      e,
                      t,
                      n,
                      r,
                      i,
                      a
                    );
              },
            },
            {
              key: "expandWildCardWithParamsAgainstRouteUsingRedirect",
              value: function (e, t, n, r) {
                var i = this,
                  a = this.applyRedirectCommands([], n.redirectTo, {});
                return n.redirectTo.startsWith("/")
                  ? Sf(a)
                  : this.lineralizeSegments(n, a).pipe(
                      q(function (n) {
                        var a = new Eh(n, {});
                        return i.expandSegment(e, a, t, n, r, !1);
                      })
                    );
              },
            },
            {
              key: "expandRegularSegmentAgainstRouteUsingRedirect",
              value: function (e, t, n, r, i, a) {
                var o = this,
                  s = xf(t, r, i),
                  u = s.matched,
                  l = s.consumedSegments,
                  c = s.lastChild,
                  h = s.positionalParamSegments;
                if (!u) return bf(t);
                var f = this.applyRedirectCommands(l, r.redirectTo, h);
                return r.redirectTo.startsWith("/")
                  ? Sf(f)
                  : this.lineralizeSegments(r, f).pipe(
                      q(function (r) {
                        return o.expandSegment(
                          e,
                          t,
                          n,
                          r.concat(i.slice(c)),
                          a,
                          !1
                        );
                      })
                    );
              },
            },
            {
              key: "matchSegmentAgainstRoute",
              value: function (e, t, n, r) {
                var i = this;
                if ("**" === n.path)
                  return n.loadChildren
                    ? this.configLoader.load(e.injector, n).pipe(
                        U(function (e) {
                          return (n._loadedConfig = e), new Eh(r, {});
                        })
                      )
                    : $l(new Eh(r, {}));
                var a = xf(t, n, r),
                  o = a.matched,
                  s = a.consumedSegments,
                  u = a.lastChild;
                if (!o) return bf(t);
                var l = r.slice(u);
                return this.getChildConfig(e, n, r).pipe(
                  q(function (e) {
                    var n = e.module,
                      r = e.routes,
                      a = (function (e, t, n, r) {
                        return n.length > 0 &&
                          (function (e, t, n) {
                            return n.some(function (n) {
                              return Of(e, t, n) && "primary" !== Af(n);
                            });
                          })(e, n, r)
                          ? {
                              segmentGroup: Pf(
                                new Eh(
                                  t,
                                  (function (e, t) {
                                    var n = {};
                                    n.primary = t;
                                    var r,
                                      i = _createForOfIteratorHelper(e);
                                    try {
                                      for (i.s(); !(r = i.n()).done; ) {
                                        var a = r.value;
                                        "" === a.path &&
                                          "primary" !== Af(a) &&
                                          (n[Af(a)] = new Eh([], {}));
                                      }
                                    } catch (o) {
                                      i.e(o);
                                    } finally {
                                      i.f();
                                    }
                                    return n;
                                  })(r, new Eh(n, e.children))
                                )
                              ),
                              slicedSegments: [],
                            }
                          : 0 === n.length &&
                            (function (e, t, n) {
                              return n.some(function (n) {
                                return Of(e, t, n);
                              });
                            })(e, n, r)
                          ? {
                              segmentGroup: Pf(
                                new Eh(
                                  e.segments,
                                  (function (e, t, n, r) {
                                    var i,
                                      a = {},
                                      o = _createForOfIteratorHelper(n);
                                    try {
                                      for (o.s(); !(i = o.n()).done; ) {
                                        var s = i.value;
                                        Of(e, t, s) &&
                                          !r[Af(s)] &&
                                          (a[Af(s)] = new Eh([], {}));
                                      }
                                    } catch (u) {
                                      o.e(u);
                                    } finally {
                                      o.f();
                                    }
                                    return Object.assign(
                                      Object.assign({}, r),
                                      a
                                    );
                                  })(e, n, r, e.children)
                                )
                              ),
                              slicedSegments: n,
                            }
                          : { segmentGroup: e, slicedSegments: n };
                      })(t, s, l, r),
                      o = a.segmentGroup,
                      u = a.slicedSegments;
                    return 0 === u.length && o.hasChildren()
                      ? i.expandChildren(n, r, o).pipe(
                          U(function (e) {
                            return new Eh(s, e);
                          })
                        )
                      : 0 === r.length && 0 === u.length
                      ? $l(new Eh(s, {}))
                      : i.expandSegment(n, o, r, u, "primary", !0).pipe(
                          U(function (e) {
                            return new Eh(s.concat(e.segments), e.children);
                          })
                        );
                  })
                );
              },
            },
            {
              key: "getChildConfig",
              value: function (e, t, n) {
                var r = this;
                return t.children
                  ? $l(new fh(t.children, e))
                  : t.loadChildren
                  ? void 0 !== t._loadedConfig
                    ? $l(t._loadedConfig)
                    : (function (e, t, n) {
                        var r,
                          i = t.canLoad;
                        return i && 0 !== i.length
                          ? B(i)
                              .pipe(
                                U(function (r) {
                                  var i,
                                    a = e.get(r);
                                  if (
                                    (function (e) {
                                      return e && _f(e.canLoad);
                                    })(a)
                                  )
                                    i = a.canLoad(t, n);
                                  else {
                                    if (!_f(a))
                                      throw new Error("Invalid CanLoad guard");
                                    i = a(t, n);
                                  }
                                  return wh(i);
                                })
                              )
                              .pipe(
                                ic(),
                                ((r = function (e) {
                                  return !0 === e;
                                }),
                                function (e) {
                                  return e.lift(new xc(r, void 0, e));
                                })
                              )
                          : $l(!0);
                      })(e.injector, t, n).pipe(
                        q(function (n) {
                          return n
                            ? r.configLoader.load(e.injector, t).pipe(
                                U(function (e) {
                                  return (t._loadedConfig = e), e;
                                })
                              )
                            : (function (e) {
                                return new w(function (t) {
                                  return t.error(
                                    ch(
                                      "Cannot load children because the guard of the route \"path: '".concat(
                                        e.path,
                                        "'\" returned false"
                                      )
                                    )
                                  );
                                });
                              })(t);
                        })
                      )
                  : $l(new fh([], e));
              },
            },
            {
              key: "lineralizeSegments",
              value: function (e, t) {
                for (var n = [], r = t.root; ; ) {
                  if (((n = n.concat(r.segments)), 0 === r.numberOfChildren))
                    return $l(n);
                  if (r.numberOfChildren > 1 || !r.children.primary)
                    return Ef(e.redirectTo);
                  r = r.children.primary;
                }
              },
            },
            {
              key: "applyRedirectCommands",
              value: function (e, t, n) {
                return this.applyRedirectCreatreUrlTree(
                  t,
                  this.urlSerializer.parse(t),
                  e,
                  n
                );
              },
            },
            {
              key: "applyRedirectCreatreUrlTree",
              value: function (e, t, n, r) {
                var i = this.createSegmentGroup(e, t.root, n, r);
                return new Sh(
                  i,
                  this.createQueryParams(
                    t.queryParams,
                    this.urlTree.queryParams
                  ),
                  t.fragment
                );
              },
            },
            {
              key: "createQueryParams",
              value: function (e, t) {
                var n = {};
                return (
                  Ch(e, function (e, r) {
                    if ("string" == typeof e && e.startsWith(":")) {
                      var i = e.substring(1);
                      n[r] = t[i];
                    } else n[r] = e;
                  }),
                  n
                );
              },
            },
            {
              key: "createSegmentGroup",
              value: function (e, t, n, r) {
                var i = this,
                  a = this.createSegments(e, t.segments, n, r),
                  o = {};
                return (
                  Ch(t.children, function (t, a) {
                    o[a] = i.createSegmentGroup(e, t, n, r);
                  }),
                  new Eh(a, o)
                );
              },
            },
            {
              key: "createSegments",
              value: function (e, t, n, r) {
                var i = this;
                return t.map(function (t) {
                  return t.path.startsWith(":")
                    ? i.findPosParam(e, t, r)
                    : i.findOrReturn(t, n);
                });
              },
            },
            {
              key: "findPosParam",
              value: function (e, t, n) {
                var r = n[t.path.substring(1)];
                if (!r)
                  throw new Error(
                    "Cannot redirect to '"
                      .concat(e, "'. Cannot find '")
                      .concat(t.path, "'.")
                  );
                return r;
              },
            },
            {
              key: "findOrReturn",
              value: function (e, t) {
                var n,
                  r = 0,
                  i = _createForOfIteratorHelper(t);
                try {
                  for (i.s(); !(n = i.n()).done; ) {
                    var a = n.value;
                    if (a.path === e.path) return t.splice(r), a;
                    r++;
                  }
                } catch (o) {
                  i.e(o);
                } finally {
                  i.f();
                }
                return e;
              },
            },
          ]),
          e
        );
      })();
      function xf(e, t, n) {
        if ("" === t.path)
          return "full" === t.pathMatch && (e.hasChildren() || n.length > 0)
            ? {
                matched: !1,
                consumedSegments: [],
                lastChild: 0,
                positionalParamSegments: {},
              }
            : {
                matched: !0,
                consumedSegments: [],
                lastChild: 0,
                positionalParamSegments: {},
              };
        var r = (t.matcher || hh)(n, e, t);
        return r
          ? {
              matched: !0,
              consumedSegments: r.consumed,
              lastChild: r.consumed.length,
              positionalParamSegments: r.posParams,
            }
          : {
              matched: !1,
              consumedSegments: [],
              lastChild: 0,
              positionalParamSegments: {},
            };
      }
      function Pf(e) {
        if (1 === e.numberOfChildren && e.children.primary) {
          var t = e.children.primary;
          return new Eh(e.segments.concat(t.segments), t.children);
        }
        return e;
      }
      function Of(e, t, n) {
        return (
          (!(e.hasChildren() || t.length > 0) || "full" !== n.pathMatch) &&
          "" === n.path &&
          void 0 !== n.redirectTo
        );
      }
      function Af(e) {
        return e.outlet || "primary";
      }
      var If = function e(t) {
          _classCallCheck(this, e),
            (this.path = t),
            (this.route = this.path[this.path.length - 1]);
        },
        Rf = function e(t, n) {
          _classCallCheck(this, e), (this.component = t), (this.route = n);
        };
      function Df(e, t, n) {
        var r = (function (e) {
          if (!e) return null;
          for (var t = e.parent; t; t = t.parent) {
            var n = t.routeConfig;
            if (n && n._loadedConfig) return n._loadedConfig;
          }
          return null;
        })(t);
        return (r ? r.module.injector : n).get(e);
      }
      function Mf(e, t, n) {
        var r = Zh(e),
          i = e.value;
        Ch(r, function (e, r) {
          Mf(e, i.component ? (t ? t.children.getContext(r) : null) : t, n);
        }),
          n.canDeactivateChecks.push(
            new Rf(
              i.component && t && t.outlet && t.outlet.isActivated
                ? t.outlet.component
                : null,
              i
            )
          );
      }
      var Nf = Symbol("INITIAL_VALUE");
      function Ff() {
        return Oc(function (e) {
          return function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            var r = null,
              i = null;
            return (
              A(t[t.length - 1]) && (i = t.pop()),
              "function" == typeof t[t.length - 1] && (r = t.pop()),
              1 === t.length && u(t[0]) && (t = t[0]),
              Z(t, i).lift(new Xl(r))
            );
          }
            .apply(
              void 0,
              _toConsumableArray(
                e.map(function (e) {
                  return e.pipe(
                    bc(1),
                    (function () {
                      for (
                        var e = arguments.length, t = new Array(e), n = 0;
                        n < e;
                        n++
                      )
                        t[n] = arguments[n];
                      var r = t[t.length - 1];
                      return A(r)
                        ? (t.pop(),
                          function (e) {
                            return Rc(t, e, r);
                          })
                        : function (e) {
                            return Rc(t, e);
                          };
                    })(Nf)
                  );
                })
              )
            )
            .pipe(
              Dc(function (e, t) {
                var n = !1;
                return t.reduce(function (e, r, i) {
                  if (e !== Nf) return e;
                  if ((r === Nf && (n = !0), !n)) {
                    if (!1 === r) return r;
                    if (i === t.length - 1 || kf(r)) return r;
                  }
                  return e;
                }, e);
              }, Nf),
              ac(function (e) {
                return e !== Nf;
              }),
              U(function (e) {
                return kf(e) ? e : !0 === e;
              }),
              bc(1)
            );
        });
      }
      function jf(e, t) {
        return null !== e && t && t(new ih(e)), $l(!0);
      }
      function Lf(e, t) {
        return null !== e && t && t(new nh(e)), $l(!0);
      }
      function Uf(e, t, n) {
        var r = t.routeConfig ? t.routeConfig.canActivate : null;
        return r && 0 !== r.length
          ? $l(
              r.map(function (r) {
                return rc(function () {
                  var i,
                    a = Df(r, t, n);
                  if (
                    (function (e) {
                      return e && _f(e.canActivate);
                    })(a)
                  )
                    i = wh(a.canActivate(t, e));
                  else {
                    if (!_f(a)) throw new Error("Invalid CanActivate guard");
                    i = wh(a(t, e));
                  }
                  return i.pipe(Tc());
                });
              })
            ).pipe(Ff())
          : $l(!0);
      }
      function Hf(e, t, n) {
        var r = t[t.length - 1],
          i = t
            .slice(0, t.length - 1)
            .reverse()
            .map(function (e) {
              return (function (e) {
                var t = e.routeConfig ? e.routeConfig.canActivateChild : null;
                return t && 0 !== t.length ? { node: e, guards: t } : null;
              })(e);
            })
            .filter(function (e) {
              return null !== e;
            })
            .map(function (t) {
              return rc(function () {
                return $l(
                  t.guards.map(function (i) {
                    var a,
                      o = Df(i, t.node, n);
                    if (
                      (function (e) {
                        return e && _f(e.canActivateChild);
                      })(o)
                    )
                      a = wh(o.canActivateChild(r, e));
                    else {
                      if (!_f(o))
                        throw new Error("Invalid CanActivateChild guard");
                      a = wh(o(r, e));
                    }
                    return a.pipe(Tc());
                  })
                ).pipe(Ff());
              });
            });
        return $l(i).pipe(Ff());
      }
      var Vf = function e() {
          _classCallCheck(this, e);
        },
        zf = (function () {
          function e(t, n, r, i, a, o) {
            _classCallCheck(this, e),
              (this.rootComponentType = t),
              (this.config = n),
              (this.urlTree = r),
              (this.url = i),
              (this.paramsInheritanceStrategy = a),
              (this.relativeLinkResolution = o);
          }
          return (
            _createClass(e, [
              {
                key: "recognize",
                value: function () {
                  try {
                    var e = Gf(
                        this.urlTree.root,
                        [],
                        [],
                        this.config,
                        this.relativeLinkResolution
                      ).segmentGroup,
                      t = this.processSegmentGroup(this.config, e, "primary"),
                      n = new Xh(
                        [],
                        Object.freeze({}),
                        Object.freeze(
                          Object.assign({}, this.urlTree.queryParams)
                        ),
                        this.urlTree.fragment,
                        {},
                        "primary",
                        this.rootComponentType,
                        null,
                        this.urlTree.root,
                        -1,
                        {}
                      ),
                      r = new Kh(n, t),
                      i = new ef(this.url, r);
                    return this.inheritParamsAndData(i._root), $l(i);
                  } catch (a) {
                    return new w(function (e) {
                      return e.error(a);
                    });
                  }
                },
              },
              {
                key: "inheritParamsAndData",
                value: function (e) {
                  var t = this,
                    n = e.value,
                    r = Jh(n, this.paramsInheritanceStrategy);
                  (n.params = Object.freeze(r.params)),
                    (n.data = Object.freeze(r.data)),
                    e.children.forEach(function (e) {
                      return t.inheritParamsAndData(e);
                    });
                },
              },
              {
                key: "processSegmentGroup",
                value: function (e, t, n) {
                  return 0 === t.segments.length && t.hasChildren()
                    ? this.processChildren(e, t)
                    : this.processSegment(e, t, t.segments, n);
                },
              },
              {
                key: "processChildren",
                value: function (e, t) {
                  var n,
                    r = this,
                    i = Ph(t, function (t, n) {
                      return r.processSegmentGroup(e, t, n);
                    });
                  return (
                    (n = {}),
                    i.forEach(function (e) {
                      var t = n[e.value.outlet];
                      if (t) {
                        var r = t.url
                            .map(function (e) {
                              return e.toString();
                            })
                            .join("/"),
                          i = e.value.url
                            .map(function (e) {
                              return e.toString();
                            })
                            .join("/");
                        throw new Error(
                          "Two segments cannot have the same outlet name: '"
                            .concat(r, "' and '")
                            .concat(i, "'.")
                        );
                      }
                      n[e.value.outlet] = e.value;
                    }),
                    i.sort(function (e, t) {
                      return "primary" === e.value.outlet
                        ? -1
                        : "primary" === t.value.outlet
                        ? 1
                        : e.value.outlet.localeCompare(t.value.outlet);
                    }),
                    i
                  );
                },
              },
              {
                key: "processSegment",
                value: function (e, t, n, r) {
                  var i,
                    a = _createForOfIteratorHelper(e);
                  try {
                    for (a.s(); !(i = a.n()).done; ) {
                      var o = i.value;
                      try {
                        return this.processSegmentAgainstRoute(o, t, n, r);
                      } catch (s) {
                        if (!(s instanceof Vf)) throw s;
                      }
                    }
                  } catch (u) {
                    a.e(u);
                  } finally {
                    a.f();
                  }
                  if (this.noLeftoversInUrl(t, n, r)) return [];
                  throw new Vf();
                },
              },
              {
                key: "noLeftoversInUrl",
                value: function (e, t, n) {
                  return 0 === t.length && !e.children[n];
                },
              },
              {
                key: "processSegmentAgainstRoute",
                value: function (e, t, n, r) {
                  if (e.redirectTo) throw new Vf();
                  if ((e.outlet || "primary") !== r) throw new Vf();
                  var i,
                    a = [],
                    o = [];
                  if ("**" === e.path) {
                    var s = n.length > 0 ? kh(n).parameters : {};
                    i = new Xh(
                      n,
                      s,
                      Object.freeze(
                        Object.assign({}, this.urlTree.queryParams)
                      ),
                      this.urlTree.fragment,
                      Zf(e),
                      r,
                      e.component,
                      e,
                      Bf(t),
                      qf(t) + n.length,
                      Qf(e)
                    );
                  } else {
                    var u = (function (e, t, n) {
                      if ("" === t.path) {
                        if (
                          "full" === t.pathMatch &&
                          (e.hasChildren() || n.length > 0)
                        )
                          throw new Vf();
                        return {
                          consumedSegments: [],
                          lastChild: 0,
                          parameters: {},
                        };
                      }
                      var r = (t.matcher || hh)(n, e, t);
                      if (!r) throw new Vf();
                      var i = {};
                      Ch(r.posParams, function (e, t) {
                        i[t] = e.path;
                      });
                      var a =
                        r.consumed.length > 0
                          ? Object.assign(
                              Object.assign({}, i),
                              r.consumed[r.consumed.length - 1].parameters
                            )
                          : i;
                      return {
                        consumedSegments: r.consumed,
                        lastChild: r.consumed.length,
                        parameters: a,
                      };
                    })(t, e, n);
                    (a = u.consumedSegments),
                      (o = n.slice(u.lastChild)),
                      (i = new Xh(
                        a,
                        u.parameters,
                        Object.freeze(
                          Object.assign({}, this.urlTree.queryParams)
                        ),
                        this.urlTree.fragment,
                        Zf(e),
                        r,
                        e.component,
                        e,
                        Bf(t),
                        qf(t) + a.length,
                        Qf(e)
                      ));
                  }
                  var l = (function (e) {
                      return e.children
                        ? e.children
                        : e.loadChildren
                        ? e._loadedConfig.routes
                        : [];
                    })(e),
                    c = Gf(t, a, o, l, this.relativeLinkResolution),
                    h = c.segmentGroup,
                    f = c.slicedSegments;
                  if (0 === f.length && h.hasChildren()) {
                    var d = this.processChildren(l, h);
                    return [new Kh(i, d)];
                  }
                  if (0 === l.length && 0 === f.length) return [new Kh(i, [])];
                  var v = this.processSegment(l, h, f, "primary");
                  return [new Kh(i, v)];
                },
              },
            ]),
            e
          );
        })();
      function Bf(e) {
        for (var t = e; t._sourceSegment; ) t = t._sourceSegment;
        return t;
      }
      function qf(e) {
        for (
          var t = e, n = t._segmentIndexShift ? t._segmentIndexShift : 0;
          t._sourceSegment;

        )
          n += (t = t._sourceSegment)._segmentIndexShift
            ? t._segmentIndexShift
            : 0;
        return n - 1;
      }
      function Gf(e, t, n, r, i) {
        if (
          n.length > 0 &&
          (function (e, t, n) {
            return n.some(function (n) {
              return Wf(e, t, n) && "primary" !== Kf(n);
            });
          })(e, n, r)
        ) {
          var a = new Eh(
            t,
            (function (e, t, n, r) {
              var i = {};
              (i.primary = r),
                (r._sourceSegment = e),
                (r._segmentIndexShift = t.length);
              var a,
                o = _createForOfIteratorHelper(n);
              try {
                for (o.s(); !(a = o.n()).done; ) {
                  var s = a.value;
                  if ("" === s.path && "primary" !== Kf(s)) {
                    var u = new Eh([], {});
                    (u._sourceSegment = e),
                      (u._segmentIndexShift = t.length),
                      (i[Kf(s)] = u);
                  }
                }
              } catch (l) {
                o.e(l);
              } finally {
                o.f();
              }
              return i;
            })(e, t, r, new Eh(n, e.children))
          );
          return (
            (a._sourceSegment = e),
            (a._segmentIndexShift = t.length),
            { segmentGroup: a, slicedSegments: [] }
          );
        }
        if (
          0 === n.length &&
          (function (e, t, n) {
            return n.some(function (n) {
              return Wf(e, t, n);
            });
          })(e, n, r)
        ) {
          var o = new Eh(
            e.segments,
            (function (e, t, n, r, i, a) {
              var o,
                s = {},
                u = _createForOfIteratorHelper(r);
              try {
                for (u.s(); !(o = u.n()).done; ) {
                  var l = o.value;
                  if (Wf(e, n, l) && !i[Kf(l)]) {
                    var c = new Eh([], {});
                    (c._sourceSegment = e),
                      (c._segmentIndexShift =
                        "legacy" === a ? e.segments.length : t.length),
                      (s[Kf(l)] = c);
                  }
                }
              } catch (h) {
                u.e(h);
              } finally {
                u.f();
              }
              return Object.assign(Object.assign({}, i), s);
            })(e, t, n, r, e.children, i)
          );
          return (
            (o._sourceSegment = e),
            (o._segmentIndexShift = t.length),
            { segmentGroup: o, slicedSegments: n }
          );
        }
        var s = new Eh(e.segments, e.children);
        return (
          (s._sourceSegment = e),
          (s._segmentIndexShift = t.length),
          { segmentGroup: s, slicedSegments: n }
        );
      }
      function Wf(e, t, n) {
        return (
          (!(e.hasChildren() || t.length > 0) || "full" !== n.pathMatch) &&
          "" === n.path &&
          void 0 === n.redirectTo
        );
      }
      function Kf(e) {
        return e.outlet || "primary";
      }
      function Zf(e) {
        return e.data || {};
      }
      function Qf(e) {
        return e.resolve || {};
      }
      function $f(e, t, n, r) {
        var i = Df(e, t, r);
        return wh(i.resolve ? i.resolve(t, n) : i(t, n));
      }
      function Yf(e) {
        return function (t) {
          return t.pipe(
            Oc(function (t) {
              var n = e(t);
              return n
                ? B(n).pipe(
                    U(function () {
                      return t;
                    })
                  )
                : B([t]);
            })
          );
        };
      }
      var Jf = (function () {
          function e() {
            _classCallCheck(this, e);
          }
          return (
            _createClass(e, [
              {
                key: "shouldDetach",
                value: function (e) {
                  return !1;
                },
              },
              { key: "store", value: function (e, t) {} },
              {
                key: "shouldAttach",
                value: function (e) {
                  return !1;
                },
              },
              {
                key: "retrieve",
                value: function (e) {
                  return null;
                },
              },
              {
                key: "shouldReuseRoute",
                value: function (e, t) {
                  return e.routeConfig === t.routeConfig;
                },
              },
            ]),
            e
          );
        })(),
        Xf = new Le("ROUTES"),
        ed = (function () {
          function e(t, n, r, i) {
            _classCallCheck(this, e),
              (this.loader = t),
              (this.compiler = n),
              (this.onLoadStartListener = r),
              (this.onLoadEndListener = i);
          }
          return (
            _createClass(e, [
              {
                key: "load",
                value: function (e, t) {
                  var n = this;
                  return (
                    this.onLoadStartListener && this.onLoadStartListener(t),
                    this.loadModuleFactory(t.loadChildren).pipe(
                      U(function (r) {
                        n.onLoadEndListener && n.onLoadEndListener(t);
                        var i = r.create(e);
                        return new fh(_h(i.injector.get(Xf)).map(yh), i);
                      })
                    )
                  );
                },
              },
              {
                key: "loadModuleFactory",
                value: function (e) {
                  var t = this;
                  return "string" == typeof e
                    ? B(this.loader.load(e))
                    : wh(e()).pipe(
                        q(function (e) {
                          return e instanceof Je
                            ? $l(e)
                            : B(t.compiler.compileModuleAsync(e));
                        })
                      );
                },
              },
            ]),
            e
          );
        })(),
        td = (function () {
          function e() {
            _classCallCheck(this, e);
          }
          return (
            _createClass(e, [
              {
                key: "shouldProcessUrl",
                value: function (e) {
                  return !0;
                },
              },
              {
                key: "extract",
                value: function (e) {
                  return e;
                },
              },
              {
                key: "merge",
                value: function (e, t) {
                  return e;
                },
              },
            ]),
            e
          );
        })();
      function nd(e) {
        throw e;
      }
      function rd(e, t, n) {
        return t.parse("/");
      }
      function id(e, t) {
        return $l(null);
      }
      var ad,
        od,
        sd =
          (((od = (function () {
            function e(t, n, r, i, a, o, s, u) {
              var l = this;
              _classCallCheck(this, e),
                (this.rootComponentType = t),
                (this.urlSerializer = n),
                (this.rootContexts = r),
                (this.location = i),
                (this.config = u),
                (this.lastSuccessfulNavigation = null),
                (this.currentNavigation = null),
                (this.navigationId = 0),
                (this.isNgZoneEnabled = !1),
                (this.events = new P()),
                (this.errorHandler = nd),
                (this.malformedUriErrorHandler = rd),
                (this.navigated = !1),
                (this.lastSuccessfulId = -1),
                (this.hooks = {
                  beforePreactivation: id,
                  afterPreactivation: id,
                }),
                (this.urlHandlingStrategy = new td()),
                (this.routeReuseStrategy = new Jf()),
                (this.onSameUrlNavigation = "ignore"),
                (this.paramsInheritanceStrategy = "emptyOnly"),
                (this.urlUpdateStrategy = "deferred"),
                (this.relativeLinkResolution = "legacy"),
                (this.ngModule = a.get(Ye)),
                (this.console = a.get($o));
              var c = a.get(cs);
              (this.isNgZoneEnabled = c instanceof cs),
                this.resetConfig(u),
                (this.currentUrlTree = new Sh(new Eh([], {}), {}, null)),
                (this.rawUrlTree = this.currentUrlTree),
                (this.browserUrlTree = this.currentUrlTree),
                (this.configLoader = new ed(
                  o,
                  s,
                  function (e) {
                    return l.triggerEvent(new eh(e));
                  },
                  function (e) {
                    return l.triggerEvent(new th(e));
                  }
                )),
                (this.routerState = $h(
                  this.currentUrlTree,
                  this.rootComponentType
                )),
                (this.transitions = new Kl({
                  id: 0,
                  currentUrlTree: this.currentUrlTree,
                  currentRawUrl: this.currentUrlTree,
                  extractedUrl: this.urlHandlingStrategy.extract(
                    this.currentUrlTree
                  ),
                  urlAfterRedirects: this.urlHandlingStrategy.extract(
                    this.currentUrlTree
                  ),
                  rawUrl: this.currentUrlTree,
                  extras: {},
                  resolve: null,
                  reject: null,
                  promise: Promise.resolve(!0),
                  source: "imperative",
                  restoredState: null,
                  currentSnapshot: this.routerState.snapshot,
                  targetSnapshot: null,
                  currentRouterState: this.routerState,
                  targetRouterState: null,
                  guards: { canActivateChecks: [], canDeactivateChecks: [] },
                  guardsResult: null,
                })),
                (this.navigations = this.setupNavigations(this.transitions)),
                this.processNavigations();
            }
            return (
              _createClass(e, [
                {
                  key: "setupNavigations",
                  value: function (e) {
                    var t = this,
                      n = this.events;
                    return e.pipe(
                      ac(function (e) {
                        return 0 !== e.id;
                      }),
                      U(function (e) {
                        return Object.assign(Object.assign({}, e), {
                          extractedUrl: t.urlHandlingStrategy.extract(e.rawUrl),
                        });
                      }),
                      Oc(function (e) {
                        var r,
                          i,
                          a,
                          o,
                          s = !1,
                          u = !1;
                        return $l(e).pipe(
                          Lc(function (e) {
                            t.currentNavigation = {
                              id: e.id,
                              initialUrl: e.currentRawUrl,
                              extractedUrl: e.extractedUrl,
                              trigger: e.source,
                              extras: e.extras,
                              previousNavigation: t.lastSuccessfulNavigation
                                ? Object.assign(
                                    Object.assign(
                                      {},
                                      t.lastSuccessfulNavigation
                                    ),
                                    { previousNavigation: null }
                                  )
                                : null,
                            };
                          }),
                          Oc(function (e) {
                            var r,
                              i,
                              a,
                              o,
                              s =
                                !t.navigated ||
                                e.extractedUrl.toString() !==
                                  t.browserUrlTree.toString();
                            if (
                              ("reload" === t.onSameUrlNavigation || s) &&
                              t.urlHandlingStrategy.shouldProcessUrl(e.rawUrl)
                            )
                              return $l(e).pipe(
                                Oc(function (e) {
                                  var r = t.transitions.getValue();
                                  return (
                                    n.next(
                                      new Gc(
                                        e.id,
                                        t.serializeUrl(e.extractedUrl),
                                        e.source,
                                        e.restoredState
                                      )
                                    ),
                                    r !== t.transitions.getValue() ? tc : [e]
                                  );
                                }),
                                Oc(function (e) {
                                  return Promise.resolve(e);
                                }),
                                ((r = t.ngModule.injector),
                                (i = t.configLoader),
                                (a = t.urlSerializer),
                                (o = t.config),
                                function (e) {
                                  return e.pipe(
                                    Oc(function (e) {
                                      return (function (e, t, n, r, i) {
                                        return new Tf(e, t, n, r, i).apply();
                                      })(r, i, a, e.extractedUrl, o).pipe(
                                        U(function (t) {
                                          return Object.assign(
                                            Object.assign({}, e),
                                            { urlAfterRedirects: t }
                                          );
                                        })
                                      );
                                    })
                                  );
                                }),
                                Lc(function (e) {
                                  t.currentNavigation = Object.assign(
                                    Object.assign({}, t.currentNavigation),
                                    { finalUrl: e.urlAfterRedirects }
                                  );
                                }),
                                (function (e, n, r, i, a) {
                                  return function (r) {
                                    return r.pipe(
                                      q(function (r) {
                                        return (function (e, t, n, r) {
                                          var i =
                                              arguments.length > 4 &&
                                              void 0 !== arguments[4]
                                                ? arguments[4]
                                                : "emptyOnly",
                                            a =
                                              arguments.length > 5 &&
                                              void 0 !== arguments[5]
                                                ? arguments[5]
                                                : "legacy";
                                          return new zf(
                                            e,
                                            t,
                                            n,
                                            r,
                                            i,
                                            a
                                          ).recognize();
                                        })(
                                          e,
                                          n,
                                          r.urlAfterRedirects,
                                          ((o = r.urlAfterRedirects),
                                          t.serializeUrl(o)),
                                          i,
                                          a
                                        ).pipe(
                                          U(function (e) {
                                            return Object.assign(
                                              Object.assign({}, r),
                                              { targetSnapshot: e }
                                            );
                                          })
                                        );
                                        var o;
                                      })
                                    );
                                  };
                                })(
                                  t.rootComponentType,
                                  t.config,
                                  0,
                                  t.paramsInheritanceStrategy,
                                  t.relativeLinkResolution
                                ),
                                Lc(function (e) {
                                  "eager" === t.urlUpdateStrategy &&
                                    (e.extras.skipLocationChange ||
                                      t.setBrowserUrl(
                                        e.urlAfterRedirects,
                                        !!e.extras.replaceUrl,
                                        e.id,
                                        e.extras.state
                                      ),
                                    (t.browserUrlTree = e.urlAfterRedirects));
                                }),
                                Lc(function (e) {
                                  var r = new Qc(
                                    e.id,
                                    t.serializeUrl(e.extractedUrl),
                                    t.serializeUrl(e.urlAfterRedirects),
                                    e.targetSnapshot
                                  );
                                  n.next(r);
                                })
                              );
                            if (
                              s &&
                              t.rawUrlTree &&
                              t.urlHandlingStrategy.shouldProcessUrl(
                                t.rawUrlTree
                              )
                            ) {
                              var u = e.id,
                                l = e.extractedUrl,
                                c = e.source,
                                h = e.restoredState,
                                f = e.extras,
                                d = new Gc(u, t.serializeUrl(l), c, h);
                              n.next(d);
                              var v = $h(l, t.rootComponentType).snapshot;
                              return $l(
                                Object.assign(Object.assign({}, e), {
                                  targetSnapshot: v,
                                  urlAfterRedirects: l,
                                  extras: Object.assign(Object.assign({}, f), {
                                    skipLocationChange: !1,
                                    replaceUrl: !1,
                                  }),
                                })
                              );
                            }
                            return (
                              (t.rawUrlTree = e.rawUrl),
                              (t.browserUrlTree = e.urlAfterRedirects),
                              e.resolve(null),
                              tc
                            );
                          }),
                          Yf(function (e) {
                            var n = e.targetSnapshot,
                              r = e.id,
                              i = e.extractedUrl,
                              a = e.rawUrl,
                              o = e.extras,
                              s = o.skipLocationChange,
                              u = o.replaceUrl;
                            return t.hooks.beforePreactivation(n, {
                              navigationId: r,
                              appliedUrlTree: i,
                              rawUrlTree: a,
                              skipLocationChange: !!s,
                              replaceUrl: !!u,
                            });
                          }),
                          Lc(function (e) {
                            var n = new $c(
                              e.id,
                              t.serializeUrl(e.extractedUrl),
                              t.serializeUrl(e.urlAfterRedirects),
                              e.targetSnapshot
                            );
                            t.triggerEvent(n);
                          }),
                          U(function (e) {
                            return Object.assign(Object.assign({}, e), {
                              guards:
                                ((n = e.targetSnapshot),
                                (r = e.currentSnapshot),
                                (i = t.rootContexts),
                                (a = n._root),
                                (function e(t, n, r, i) {
                                  var a =
                                      arguments.length > 4 &&
                                      void 0 !== arguments[4]
                                        ? arguments[4]
                                        : {
                                            canDeactivateChecks: [],
                                            canActivateChecks: [],
                                          },
                                    o = Zh(n);
                                  return (
                                    t.children.forEach(function (t) {
                                      !(function (t, n, r, i) {
                                        var a =
                                            arguments.length > 4 &&
                                            void 0 !== arguments[4]
                                              ? arguments[4]
                                              : {
                                                  canDeactivateChecks: [],
                                                  canActivateChecks: [],
                                                },
                                          o = t.value,
                                          s = n ? n.value : null,
                                          u = r
                                            ? r.getContext(t.value.outlet)
                                            : null;
                                        if (
                                          s &&
                                          o.routeConfig === s.routeConfig
                                        ) {
                                          var l = (function (e, t, n) {
                                            if ("function" == typeof n)
                                              return n(e, t);
                                            switch (n) {
                                              case "pathParamsChange":
                                                return !xh(e.url, t.url);
                                              case "pathParamsOrQueryParamsChange":
                                                return (
                                                  !xh(e.url, t.url) ||
                                                  !gh(
                                                    e.queryParams,
                                                    t.queryParams
                                                  )
                                                );
                                              case "always":
                                                return !0;
                                              case "paramsOrQueryParamsChange":
                                                return (
                                                  !af(e, t) ||
                                                  !gh(
                                                    e.queryParams,
                                                    t.queryParams
                                                  )
                                                );
                                              case "paramsChange":
                                              default:
                                                return !af(e, t);
                                            }
                                          })(
                                            s,
                                            o,
                                            o.routeConfig.runGuardsAndResolvers
                                          );
                                          l
                                            ? a.canActivateChecks.push(
                                                new If(i)
                                              )
                                            : ((o.data = s.data),
                                              (o._resolvedData =
                                                s._resolvedData)),
                                            e(
                                              t,
                                              n,
                                              o.component
                                                ? u
                                                  ? u.children
                                                  : null
                                                : r,
                                              i,
                                              a
                                            ),
                                            l &&
                                              a.canDeactivateChecks.push(
                                                new Rf(
                                                  (u &&
                                                    u.outlet &&
                                                    u.outlet.component) ||
                                                    null,
                                                  s
                                                )
                                              );
                                        } else
                                          s && Mf(n, u, a),
                                            a.canActivateChecks.push(new If(i)),
                                            e(
                                              t,
                                              null,
                                              o.component
                                                ? u
                                                  ? u.children
                                                  : null
                                                : r,
                                              i,
                                              a
                                            );
                                      })(
                                        t,
                                        o[t.value.outlet],
                                        r,
                                        i.concat([t.value]),
                                        a
                                      ),
                                        delete o[t.value.outlet];
                                    }),
                                    Ch(o, function (e, t) {
                                      return Mf(e, r.getContext(t), a);
                                    }),
                                    a
                                  );
                                })(a, r ? r._root : null, i, [a.value])),
                            });
                            var n, r, i, a;
                          }),
                          (function (e, t) {
                            return function (n) {
                              return n.pipe(
                                q(function (n) {
                                  var r = n.targetSnapshot,
                                    i = n.currentSnapshot,
                                    a = n.guards,
                                    o = a.canActivateChecks,
                                    s = a.canDeactivateChecks;
                                  return 0 === s.length && 0 === o.length
                                    ? $l(
                                        Object.assign(Object.assign({}, n), {
                                          guardsResult: !0,
                                        })
                                      )
                                    : (function (e, t, n, r) {
                                        return B(e).pipe(
                                          q(function (e) {
                                            return (function (e, t, n, r, i) {
                                              var a =
                                                t && t.routeConfig
                                                  ? t.routeConfig.canDeactivate
                                                  : null;
                                              return a && 0 !== a.length
                                                ? $l(
                                                    a.map(function (a) {
                                                      var o,
                                                        s = Df(a, t, i);
                                                      if (
                                                        (function (e) {
                                                          return (
                                                            e &&
                                                            _f(e.canDeactivate)
                                                          );
                                                        })(s)
                                                      )
                                                        o = wh(
                                                          s.canDeactivate(
                                                            e,
                                                            t,
                                                            n,
                                                            r
                                                          )
                                                        );
                                                      else {
                                                        if (!_f(s))
                                                          throw new Error(
                                                            "Invalid CanDeactivate guard"
                                                          );
                                                        o = wh(s(e, t, n, r));
                                                      }
                                                      return o.pipe(Tc());
                                                    })
                                                  ).pipe(Ff())
                                                : $l(!0);
                                            })(e.component, e.route, n, t, r);
                                          }),
                                          Tc(function (e) {
                                            return !0 !== e;
                                          }, !0)
                                        );
                                      })(s, r, i, e).pipe(
                                        q(function (n) {
                                          return n && "boolean" == typeof n
                                            ? (function (e, t, n, r) {
                                                return B(t).pipe(
                                                  Fc(function (t) {
                                                    return B([
                                                      Lf(t.route.parent, r),
                                                      jf(t.route, r),
                                                      Hf(e, t.path, n),
                                                      Uf(e, t.route, n),
                                                    ]).pipe(
                                                      ic(),
                                                      Tc(function (e) {
                                                        return !0 !== e;
                                                      }, !0)
                                                    );
                                                  }),
                                                  Tc(function (e) {
                                                    return !0 !== e;
                                                  }, !0)
                                                );
                                              })(r, o, e, t)
                                            : $l(n);
                                        }),
                                        U(function (e) {
                                          return Object.assign(
                                            Object.assign({}, n),
                                            { guardsResult: e }
                                          );
                                        })
                                      );
                                })
                              );
                            };
                          })(t.ngModule.injector, function (e) {
                            return t.triggerEvent(e);
                          }),
                          Lc(function (e) {
                            if (kf(e.guardsResult)) {
                              var n = ch(
                                'Redirecting to "'.concat(
                                  t.serializeUrl(e.guardsResult),
                                  '"'
                                )
                              );
                              throw ((n.url = e.guardsResult), n);
                            }
                          }),
                          Lc(function (e) {
                            var n = new Yc(
                              e.id,
                              t.serializeUrl(e.extractedUrl),
                              t.serializeUrl(e.urlAfterRedirects),
                              e.targetSnapshot,
                              !!e.guardsResult
                            );
                            t.triggerEvent(n);
                          }),
                          ac(function (e) {
                            if (!e.guardsResult) {
                              t.resetUrlToCurrentUrlTree();
                              var r = new Kc(
                                e.id,
                                t.serializeUrl(e.extractedUrl),
                                ""
                              );
                              return n.next(r), e.resolve(!1), !1;
                            }
                            return !0;
                          }),
                          Yf(function (e) {
                            if (e.guards.canActivateChecks.length)
                              return $l(e).pipe(
                                Lc(function (e) {
                                  var n = new Jc(
                                    e.id,
                                    t.serializeUrl(e.extractedUrl),
                                    t.serializeUrl(e.urlAfterRedirects),
                                    e.targetSnapshot
                                  );
                                  t.triggerEvent(n);
                                }),
                                ((n = t.paramsInheritanceStrategy),
                                (r = t.ngModule.injector),
                                function (e) {
                                  return e.pipe(
                                    q(function (e) {
                                      var t = e.targetSnapshot,
                                        i = e.guards.canActivateChecks;
                                      return i.length
                                        ? B(i).pipe(
                                            Fc(function (e) {
                                              return (function (e, t, n, r) {
                                                return (function (e, t, n, r) {
                                                  var i = Object.keys(e);
                                                  if (0 === i.length)
                                                    return $l({});
                                                  if (1 === i.length) {
                                                    var a = i[0];
                                                    return $f(
                                                      e[a],
                                                      t,
                                                      n,
                                                      r
                                                    ).pipe(
                                                      U(function (e) {
                                                        return _defineProperty(
                                                          {},
                                                          a,
                                                          e
                                                        );
                                                      })
                                                    );
                                                  }
                                                  var o = {};
                                                  return B(i)
                                                    .pipe(
                                                      q(function (i) {
                                                        return $f(
                                                          e[i],
                                                          t,
                                                          n,
                                                          r
                                                        ).pipe(
                                                          U(function (e) {
                                                            return (
                                                              (o[i] = e), e
                                                            );
                                                          })
                                                        );
                                                      })
                                                    )
                                                    .pipe(
                                                      _c(),
                                                      U(function () {
                                                        return o;
                                                      })
                                                    );
                                                })(e._resolve, e, t, r).pipe(
                                                  U(function (t) {
                                                    return (
                                                      (e._resolvedData = t),
                                                      (e.data = Object.assign(
                                                        Object.assign(
                                                          {},
                                                          e.data
                                                        ),
                                                        Jh(e, n).resolve
                                                      )),
                                                      null
                                                    );
                                                  })
                                                );
                                              })(e.route, t, n, r);
                                            }),
                                            (function (e, t) {
                                              return arguments.length >= 2
                                                ? function (n) {
                                                    return _(
                                                      Dc(e, t),
                                                      lc(1),
                                                      yc(t)
                                                    )(n);
                                                  }
                                                : function (t) {
                                                    return _(
                                                      Dc(function (t, n, r) {
                                                        return e(t, n, r + 1);
                                                      }),
                                                      lc(1)
                                                    )(t);
                                                  };
                                            })(function (e, t) {
                                              return e;
                                            }),
                                            U(function (t) {
                                              return e;
                                            })
                                          )
                                        : $l(e);
                                    })
                                  );
                                }),
                                Lc(function (e) {
                                  var n = new Xc(
                                    e.id,
                                    t.serializeUrl(e.extractedUrl),
                                    t.serializeUrl(e.urlAfterRedirects),
                                    e.targetSnapshot
                                  );
                                  t.triggerEvent(n);
                                })
                              );
                            var n, r;
                          }),
                          Yf(function (e) {
                            var n = e.targetSnapshot,
                              r = e.id,
                              i = e.extractedUrl,
                              a = e.rawUrl,
                              o = e.extras,
                              s = o.skipLocationChange,
                              u = o.replaceUrl;
                            return t.hooks.afterPreactivation(n, {
                              navigationId: r,
                              appliedUrlTree: i,
                              rawUrlTree: a,
                              skipLocationChange: !!s,
                              replaceUrl: !!u,
                            });
                          }),
                          U(function (e) {
                            var n = (function (e, t, n) {
                              var r = (function e(t, n, r) {
                                if (
                                  r &&
                                  t.shouldReuseRoute(n.value, r.value.snapshot)
                                ) {
                                  var i = r.value;
                                  i._futureSnapshot = n.value;
                                  var a = (function (t, n, r) {
                                    return n.children.map(function (n) {
                                      var i,
                                        a = _createForOfIteratorHelper(
                                          r.children
                                        );
                                      try {
                                        for (a.s(); !(i = a.n()).done; ) {
                                          var o = i.value;
                                          if (
                                            t.shouldReuseRoute(
                                              o.value.snapshot,
                                              n.value
                                            )
                                          )
                                            return e(t, n, o);
                                        }
                                      } catch (s) {
                                        a.e(s);
                                      } finally {
                                        a.f();
                                      }
                                      return e(t, n);
                                    });
                                  })(t, n, r);
                                  return new Kh(i, a);
                                }
                                var o = t.retrieve(n.value);
                                if (o) {
                                  var s = o.route;
                                  return (
                                    (function e(t, n) {
                                      if (
                                        t.value.routeConfig !==
                                        n.value.routeConfig
                                      )
                                        throw new Error(
                                          "Cannot reattach ActivatedRouteSnapshot created from a different route"
                                        );
                                      if (
                                        t.children.length !== n.children.length
                                      )
                                        throw new Error(
                                          "Cannot reattach ActivatedRouteSnapshot with a different number of children"
                                        );
                                      n.value._futureSnapshot = t.value;
                                      for (
                                        var r = 0;
                                        r < t.children.length;
                                        ++r
                                      )
                                        e(t.children[r], n.children[r]);
                                    })(n, s),
                                    s
                                  );
                                }
                                var u,
                                  l = new Yh(
                                    new Kl((u = n.value).url),
                                    new Kl(u.params),
                                    new Kl(u.queryParams),
                                    new Kl(u.fragment),
                                    new Kl(u.data),
                                    u.outlet,
                                    u.component,
                                    u
                                  ),
                                  c = n.children.map(function (n) {
                                    return e(t, n);
                                  });
                                return new Kh(l, c);
                              })(e, t._root, n ? n._root : void 0);
                              return new Qh(r, t);
                            })(
                              t.routeReuseStrategy,
                              e.targetSnapshot,
                              e.currentRouterState
                            );
                            return Object.assign(Object.assign({}, e), {
                              targetRouterState: n,
                            });
                          }),
                          Lc(function (e) {
                            (t.currentUrlTree = e.urlAfterRedirects),
                              (t.rawUrlTree = t.urlHandlingStrategy.merge(
                                t.currentUrlTree,
                                e.rawUrl
                              )),
                              (t.routerState = e.targetRouterState),
                              "deferred" === t.urlUpdateStrategy &&
                                (e.extras.skipLocationChange ||
                                  t.setBrowserUrl(
                                    t.rawUrlTree,
                                    !!e.extras.replaceUrl,
                                    e.id,
                                    e.extras.state
                                  ),
                                (t.browserUrlTree = e.urlAfterRedirects));
                          }),
                          ((i = t.rootContexts),
                          (a = t.routeReuseStrategy),
                          (o = function (e) {
                            return t.triggerEvent(e);
                          }),
                          U(function (e) {
                            return (
                              new gf(
                                a,
                                e.targetRouterState,
                                e.currentRouterState,
                                o
                              ).activate(i),
                              e
                            );
                          })),
                          Lc({
                            next: function () {
                              s = !0;
                            },
                            complete: function () {
                              s = !0;
                            },
                          }),
                          ((r = function () {
                            if (!s && !u) {
                              t.resetUrlToCurrentUrlTree();
                              var r = new Kc(
                                e.id,
                                t.serializeUrl(e.extractedUrl),
                                "Navigation ID "
                                  .concat(
                                    e.id,
                                    " is not equal to the current navigation id "
                                  )
                                  .concat(t.navigationId)
                              );
                              n.next(r), e.resolve(!1);
                            }
                            t.currentNavigation = null;
                          }),
                          function (e) {
                            return e.lift(new zc(r));
                          }),
                          kc(function (r) {
                            if (
                              ((u = !0),
                              (s = r) && s.ngNavigationCancelingError)
                            ) {
                              var i = kf(r.url);
                              i ||
                                ((t.navigated = !0),
                                t.resetStateAndUrl(
                                  e.currentRouterState,
                                  e.currentUrlTree,
                                  e.rawUrl
                                ));
                              var a = new Kc(
                                e.id,
                                t.serializeUrl(e.extractedUrl),
                                r.message
                              );
                              n.next(a),
                                i
                                  ? setTimeout(function () {
                                      var n = t.urlHandlingStrategy.merge(
                                        r.url,
                                        t.rawUrlTree
                                      );
                                      return t.scheduleNavigation(
                                        n,
                                        "imperative",
                                        null,
                                        {
                                          skipLocationChange:
                                            e.extras.skipLocationChange,
                                          replaceUrl:
                                            "eager" === t.urlUpdateStrategy,
                                        },
                                        {
                                          resolve: e.resolve,
                                          reject: e.reject,
                                          promise: e.promise,
                                        }
                                      );
                                    }, 0)
                                  : e.resolve(!1);
                            } else {
                              t.resetStateAndUrl(
                                e.currentRouterState,
                                e.currentUrlTree,
                                e.rawUrl
                              );
                              var o = new Zc(
                                e.id,
                                t.serializeUrl(e.extractedUrl),
                                r
                              );
                              n.next(o);
                              try {
                                e.resolve(t.errorHandler(r));
                              } catch (l) {
                                e.reject(l);
                              }
                            }
                            var s;
                            return tc;
                          })
                        );
                      })
                    );
                  },
                },
                {
                  key: "resetRootComponentType",
                  value: function (e) {
                    (this.rootComponentType = e),
                      (this.routerState.root.component = this.rootComponentType);
                  },
                },
                {
                  key: "getTransition",
                  value: function () {
                    var e = this.transitions.value;
                    return (e.urlAfterRedirects = this.browserUrlTree), e;
                  },
                },
                {
                  key: "setTransition",
                  value: function (e) {
                    this.transitions.next(
                      Object.assign(Object.assign({}, this.getTransition()), e)
                    );
                  },
                },
                {
                  key: "initialNavigation",
                  value: function () {
                    this.setUpLocationChangeListener(),
                      0 === this.navigationId &&
                        this.navigateByUrl(this.location.path(!0), {
                          replaceUrl: !0,
                        });
                  },
                },
                {
                  key: "setUpLocationChangeListener",
                  value: function () {
                    var e = this;
                    this.locationSubscription ||
                      (this.locationSubscription = this.location.subscribe(
                        function (t) {
                          var n = e.parseUrl(t.url),
                            r =
                              "popstate" === t.type ? "popstate" : "hashchange",
                            i =
                              t.state && t.state.navigationId ? t.state : null;
                          setTimeout(function () {
                            e.scheduleNavigation(n, r, i, { replaceUrl: !0 });
                          }, 0);
                        }
                      ));
                  },
                },
                {
                  key: "getCurrentNavigation",
                  value: function () {
                    return this.currentNavigation;
                  },
                },
                {
                  key: "triggerEvent",
                  value: function (e) {
                    this.events.next(e);
                  },
                },
                {
                  key: "resetConfig",
                  value: function (e) {
                    dh(e),
                      (this.config = e.map(yh)),
                      (this.navigated = !1),
                      (this.lastSuccessfulId = -1);
                  },
                },
                {
                  key: "ngOnDestroy",
                  value: function () {
                    this.dispose();
                  },
                },
                {
                  key: "dispose",
                  value: function () {
                    this.locationSubscription &&
                      (this.locationSubscription.unsubscribe(),
                      (this.locationSubscription = null));
                  },
                },
                {
                  key: "createUrlTree",
                  value: function (e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      n = t.relativeTo,
                      r = t.queryParams,
                      i = t.fragment,
                      a = t.preserveQueryParams,
                      o = t.queryParamsHandling,
                      s = t.preserveFragment;
                    er() &&
                      a &&
                      console &&
                      console.warn &&
                      console.warn(
                        "preserveQueryParams is deprecated, use queryParamsHandling instead."
                      );
                    var u = n || this.routerState.root,
                      l = s ? this.currentUrlTree.fragment : i,
                      c = null;
                    if (o)
                      switch (o) {
                        case "merge":
                          c = Object.assign(
                            Object.assign({}, this.currentUrlTree.queryParams),
                            r
                          );
                          break;
                        case "preserve":
                          c = this.currentUrlTree.queryParams;
                          break;
                        default:
                          c = r || null;
                      }
                    else c = a ? this.currentUrlTree.queryParams : r || null;
                    return (
                      null !== c && (c = this.removeEmptyProps(c)),
                      (function (e, t, n, r, i) {
                        if (0 === n.length) return sf(t.root, t.root, t, r, i);
                        var a = (function (e) {
                          if (
                            "string" == typeof e[0] &&
                            1 === e.length &&
                            "/" === e[0]
                          )
                            return new uf(!0, 0, e);
                          var t = 0,
                            n = !1,
                            r = e.reduce(function (e, r, i) {
                              if ("object" == typeof r && null != r) {
                                if (r.outlets) {
                                  var a = {};
                                  return (
                                    Ch(r.outlets, function (e, t) {
                                      a[t] =
                                        "string" == typeof e ? e.split("/") : e;
                                    }),
                                    [].concat(_toConsumableArray(e), [
                                      { outlets: a },
                                    ])
                                  );
                                }
                                if (r.segmentPath)
                                  return [].concat(_toConsumableArray(e), [
                                    r.segmentPath,
                                  ]);
                              }
                              return "string" != typeof r
                                ? [].concat(_toConsumableArray(e), [r])
                                : 0 === i
                                ? (r.split("/").forEach(function (r, i) {
                                    (0 == i && "." === r) ||
                                      (0 == i && "" === r
                                        ? (n = !0)
                                        : ".." === r
                                        ? t++
                                        : "" != r && e.push(r));
                                  }),
                                  e)
                                : [].concat(_toConsumableArray(e), [r]);
                            }, []);
                          return new uf(n, t, r);
                        })(n);
                        if (a.toRoot())
                          return sf(t.root, new Eh([], {}), t, r, i);
                        var o = (function (e, t, n) {
                            if (e.isAbsolute) return new lf(t.root, !0, 0);
                            if (-1 === n.snapshot._lastPathIndex)
                              return new lf(n.snapshot._urlSegment, !0, 0);
                            var r = of(e.commands[0]) ? 0 : 1;
                            return (function (e, t, n) {
                              for (var r = e, i = t, a = n; a > i; ) {
                                if (((a -= i), !(r = r.parent)))
                                  throw new Error("Invalid number of '../'");
                                i = r.segments.length;
                              }
                              return new lf(r, !1, i - a);
                            })(
                              n.snapshot._urlSegment,
                              n.snapshot._lastPathIndex + r,
                              e.numberOfDoubleDots
                            );
                          })(a, t, e),
                          s = o.processChildren
                            ? ff(o.segmentGroup, o.index, a.commands)
                            : hf(o.segmentGroup, o.index, a.commands);
                        return sf(o.segmentGroup, s, t, r, i);
                      })(u, this.currentUrlTree, e, c, l)
                    );
                  },
                },
                {
                  key: "navigateByUrl",
                  value: function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : { skipLocationChange: !1 };
                    er() &&
                      this.isNgZoneEnabled &&
                      !cs.isInAngularZone() &&
                      this.console.warn(
                        "Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?"
                      );
                    var n = kf(e) ? e : this.parseUrl(e),
                      r = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
                    return this.scheduleNavigation(r, "imperative", null, t);
                  },
                },
                {
                  key: "navigate",
                  value: function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : { skipLocationChange: !1 };
                    return (
                      (function (e) {
                        for (var t = 0; t < e.length; t++) {
                          var n = e[t];
                          if (null == n)
                            throw new Error(
                              "The requested path contains "
                                .concat(n, " segment at index ")
                                .concat(t)
                            );
                        }
                      })(e),
                      this.navigateByUrl(this.createUrlTree(e, t), t)
                    );
                  },
                },
                {
                  key: "serializeUrl",
                  value: function (e) {
                    return this.urlSerializer.serialize(e);
                  },
                },
                {
                  key: "parseUrl",
                  value: function (e) {
                    var t;
                    try {
                      t = this.urlSerializer.parse(e);
                    } catch (n) {
                      t = this.malformedUriErrorHandler(
                        n,
                        this.urlSerializer,
                        e
                      );
                    }
                    return t;
                  },
                },
                {
                  key: "isActive",
                  value: function (e, t) {
                    if (kf(e)) return bh(this.currentUrlTree, e, t);
                    var n = this.parseUrl(e);
                    return bh(this.currentUrlTree, n, t);
                  },
                },
                {
                  key: "removeEmptyProps",
                  value: function (e) {
                    return Object.keys(e).reduce(function (t, n) {
                      var r = e[n];
                      return null != r && (t[n] = r), t;
                    }, {});
                  },
                },
                {
                  key: "processNavigations",
                  value: function () {
                    var e = this;
                    this.navigations.subscribe(
                      function (t) {
                        (e.navigated = !0),
                          (e.lastSuccessfulId = t.id),
                          e.events.next(
                            new Wc(
                              t.id,
                              e.serializeUrl(t.extractedUrl),
                              e.serializeUrl(e.currentUrlTree)
                            )
                          ),
                          (e.lastSuccessfulNavigation = e.currentNavigation),
                          (e.currentNavigation = null),
                          t.resolve(!0);
                      },
                      function (t) {
                        e.console.warn("Unhandled Navigation Error: ");
                      }
                    );
                  },
                },
                {
                  key: "scheduleNavigation",
                  value: function (e, t, n, r, i) {
                    var a,
                      o,
                      s,
                      u = this.getTransition();
                    if (
                      u &&
                      "imperative" !== t &&
                      "imperative" === u.source &&
                      u.rawUrl.toString() === e.toString()
                    )
                      return Promise.resolve(!0);
                    if (
                      u &&
                      "hashchange" == t &&
                      "popstate" === u.source &&
                      u.rawUrl.toString() === e.toString()
                    )
                      return Promise.resolve(!0);
                    if (
                      u &&
                      "popstate" == t &&
                      "hashchange" === u.source &&
                      u.rawUrl.toString() === e.toString()
                    )
                      return Promise.resolve(!0);
                    i
                      ? ((a = i.resolve), (o = i.reject), (s = i.promise))
                      : (s = new Promise(function (e, t) {
                          (a = e), (o = t);
                        }));
                    var l = ++this.navigationId;
                    return (
                      this.setTransition({
                        id: l,
                        source: t,
                        restoredState: n,
                        currentUrlTree: this.currentUrlTree,
                        currentRawUrl: this.rawUrlTree,
                        rawUrl: e,
                        extras: r,
                        resolve: a,
                        reject: o,
                        promise: s,
                        currentSnapshot: this.routerState.snapshot,
                        currentRouterState: this.routerState,
                      }),
                      s.catch(function (e) {
                        return Promise.reject(e);
                      })
                    );
                  },
                },
                {
                  key: "setBrowserUrl",
                  value: function (e, t, n, r) {
                    var i = this.urlSerializer.serialize(e);
                    (r = r || {}),
                      this.location.isCurrentPathEqualTo(i) || t
                        ? this.location.replaceState(
                            i,
                            "",
                            Object.assign(Object.assign({}, r), {
                              navigationId: n,
                            })
                          )
                        : this.location.go(
                            i,
                            "",
                            Object.assign(Object.assign({}, r), {
                              navigationId: n,
                            })
                          );
                  },
                },
                {
                  key: "resetStateAndUrl",
                  value: function (e, t, n) {
                    (this.routerState = e),
                      (this.currentUrlTree = t),
                      (this.rawUrlTree = this.urlHandlingStrategy.merge(
                        this.currentUrlTree,
                        n
                      )),
                      this.resetUrlToCurrentUrlTree();
                  },
                },
                {
                  key: "resetUrlToCurrentUrlTree",
                  value: function () {
                    this.location.replaceState(
                      this.urlSerializer.serialize(this.rawUrlTree),
                      "",
                      { navigationId: this.lastSuccessfulId }
                    );
                  },
                },
                {
                  key: "url",
                  get: function () {
                    return this.serializeUrl(this.currentUrlTree);
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            ma();
          }),
          (od.ɵdir = dt({ type: od })),
          od),
        ud =
          (((ad = (function () {
            function e(t, n, r, i, a) {
              _classCallCheck(this, e),
                (this.router = t),
                (this.route = n),
                (this.commands = []),
                null == r && i.setAttribute(a.nativeElement, "tabindex", "0");
            }
            return (
              _createClass(e, [
                {
                  key: "onClick",
                  value: function () {
                    var e = {
                      skipLocationChange: ld(this.skipLocationChange),
                      replaceUrl: ld(this.replaceUrl),
                      state: this.state,
                    };
                    return this.router.navigateByUrl(this.urlTree, e), !0;
                  },
                },
                {
                  key: "routerLink",
                  set: function (e) {
                    this.commands =
                      null != e ? (Array.isArray(e) ? e : [e]) : [];
                  },
                },
                {
                  key: "preserveQueryParams",
                  set: function (e) {
                    er() &&
                      console &&
                      console.warn &&
                      console.warn(
                        "preserveQueryParams is deprecated!, use queryParamsHandling instead."
                      ),
                      (this.preserve = e);
                  },
                },
                {
                  key: "urlTree",
                  get: function () {
                    return this.router.createUrlTree(this.commands, {
                      relativeTo: this.route,
                      queryParams: this.queryParams,
                      fragment: this.fragment,
                      preserveQueryParams: ld(this.preserve),
                      queryParamsHandling: this.queryParamsHandling,
                      preserveFragment: ld(this.preserveFragment),
                    });
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || ad)(
              ya(sd),
              ya(Yh),
              ga("tabindex"),
              ya($a),
              ya(Wa)
            );
          }),
          (ad.ɵdir = dt({
            type: ad,
            selectors: [["", "routerLink", "", 5, "a", 5, "area"]],
            hostBindings: function (e, t) {
              1 & e &&
                Ea("click", function () {
                  return t.onClick();
                });
            },
            inputs: {
              routerLink: "routerLink",
              preserveQueryParams: "preserveQueryParams",
              queryParams: "queryParams",
              fragment: "fragment",
              queryParamsHandling: "queryParamsHandling",
              preserveFragment: "preserveFragment",
              skipLocationChange: "skipLocationChange",
              replaceUrl: "replaceUrl",
              state: "state",
            },
          })),
          ad);
      function ld(e) {
        return "" === e || !!e;
      }
      var cd,
        hd,
        fd,
        dd = function e() {
          _classCallCheck(this, e),
            (this.outlet = null),
            (this.route = null),
            (this.resolver = null),
            (this.children = new vd()),
            (this.attachRef = null);
        },
        vd = (function () {
          function e() {
            _classCallCheck(this, e), (this.contexts = new Map());
          }
          return (
            _createClass(e, [
              {
                key: "onChildOutletCreated",
                value: function (e, t) {
                  var n = this.getOrCreateContext(e);
                  (n.outlet = t), this.contexts.set(e, n);
                },
              },
              {
                key: "onChildOutletDestroyed",
                value: function (e) {
                  var t = this.getContext(e);
                  t && (t.outlet = null);
                },
              },
              {
                key: "onOutletDeactivated",
                value: function () {
                  var e = this.contexts;
                  return (this.contexts = new Map()), e;
                },
              },
              {
                key: "onOutletReAttached",
                value: function (e) {
                  this.contexts = e;
                },
              },
              {
                key: "getOrCreateContext",
                value: function (e) {
                  var t = this.getContext(e);
                  return t || ((t = new dd()), this.contexts.set(e, t)), t;
                },
              },
              {
                key: "getContext",
                value: function (e) {
                  return this.contexts.get(e) || null;
                },
              },
            ]),
            e
          );
        })(),
        pd =
          (((cd = (function () {
            function e(t, n, r, i, a) {
              _classCallCheck(this, e),
                (this.parentContexts = t),
                (this.location = n),
                (this.resolver = r),
                (this.changeDetector = a),
                (this.activated = null),
                (this._activatedRoute = null),
                (this.activateEvents = new Vo()),
                (this.deactivateEvents = new Vo()),
                (this.name = i || "primary"),
                t.onChildOutletCreated(this.name, this);
            }
            return (
              _createClass(e, [
                {
                  key: "ngOnDestroy",
                  value: function () {
                    this.parentContexts.onChildOutletDestroyed(this.name);
                  },
                },
                {
                  key: "ngOnInit",
                  value: function () {
                    if (!this.activated) {
                      var e = this.parentContexts.getContext(this.name);
                      e &&
                        e.route &&
                        (e.attachRef
                          ? this.attach(e.attachRef, e.route)
                          : this.activateWith(e.route, e.resolver || null));
                    }
                  },
                },
                {
                  key: "detach",
                  value: function () {
                    if (!this.activated)
                      throw new Error("Outlet is not activated");
                    this.location.detach();
                    var e = this.activated;
                    return (
                      (this.activated = null), (this._activatedRoute = null), e
                    );
                  },
                },
                {
                  key: "attach",
                  value: function (e, t) {
                    (this.activated = e),
                      (this._activatedRoute = t),
                      this.location.insert(e.hostView);
                  },
                },
                {
                  key: "deactivate",
                  value: function () {
                    if (this.activated) {
                      var e = this.component;
                      this.activated.destroy(),
                        (this.activated = null),
                        (this._activatedRoute = null),
                        this.deactivateEvents.emit(e);
                    }
                  },
                },
                {
                  key: "activateWith",
                  value: function (e, t) {
                    if (this.isActivated)
                      throw new Error(
                        "Cannot activate an already activated outlet"
                      );
                    this._activatedRoute = e;
                    var n = (t = t || this.resolver).resolveComponentFactory(
                        e._futureSnapshot.routeConfig.component
                      ),
                      r = this.parentContexts.getOrCreateContext(this.name)
                        .children,
                      i = new yd(e, r, this.location.injector);
                    (this.activated = this.location.createComponent(
                      n,
                      this.location.length,
                      i
                    )),
                      this.changeDetector.markForCheck(),
                      this.activateEvents.emit(this.activated.instance);
                  },
                },
                {
                  key: "isActivated",
                  get: function () {
                    return !!this.activated;
                  },
                },
                {
                  key: "component",
                  get: function () {
                    if (!this.activated)
                      throw new Error("Outlet is not activated");
                    return this.activated.instance;
                  },
                },
                {
                  key: "activatedRoute",
                  get: function () {
                    if (!this.activated)
                      throw new Error("Outlet is not activated");
                    return this._activatedRoute;
                  },
                },
                {
                  key: "activatedRouteData",
                  get: function () {
                    return this._activatedRoute
                      ? this._activatedRoute.snapshot.data
                      : {};
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || cd)(ya(vd), ya(mo), ya(Ga), ga("name"), ya(ji));
          }),
          (cd.ɵdir = dt({
            type: cd,
            selectors: [["router-outlet"]],
            outputs: {
              activateEvents: "activate",
              deactivateEvents: "deactivate",
            },
            exportAs: ["outlet"],
          })),
          cd),
        yd = (function () {
          function e(t, n, r) {
            _classCallCheck(this, e),
              (this.route = t),
              (this.childContexts = n),
              (this.parent = r);
          }
          return (
            _createClass(e, [
              {
                key: "get",
                value: function (e, t) {
                  return e === Yh
                    ? this.route
                    : e === vd
                    ? this.childContexts
                    : this.parent.get(e, t);
                },
              },
            ]),
            e
          );
        })(),
        gd = function e() {
          _classCallCheck(this, e);
        },
        md = (function () {
          function e() {
            _classCallCheck(this, e);
          }
          return (
            _createClass(e, [
              {
                key: "preload",
                value: function (e, t) {
                  return $l(null);
                },
              },
            ]),
            e
          );
        })(),
        _d =
          (((fd = (function () {
            function e(t, n, r, i, a) {
              _classCallCheck(this, e),
                (this.router = t),
                (this.injector = i),
                (this.preloadingStrategy = a),
                (this.loader = new ed(
                  n,
                  r,
                  function (e) {
                    return t.triggerEvent(new eh(e));
                  },
                  function (e) {
                    return t.triggerEvent(new th(e));
                  }
                ));
            }
            return (
              _createClass(e, [
                {
                  key: "setUpPreloading",
                  value: function () {
                    var e = this;
                    this.subscription = this.router.events
                      .pipe(
                        ac(function (e) {
                          return e instanceof Wc;
                        }),
                        Fc(function () {
                          return e.preload();
                        })
                      )
                      .subscribe(function () {});
                  },
                },
                {
                  key: "preload",
                  value: function () {
                    var e = this.injector.get(Ye);
                    return this.processRoutes(e, this.router.config);
                  },
                },
                {
                  key: "ngOnDestroy",
                  value: function () {
                    this.subscription.unsubscribe();
                  },
                },
                {
                  key: "processRoutes",
                  value: function (e, t) {
                    var n,
                      r = [],
                      i = _createForOfIteratorHelper(t);
                    try {
                      for (i.s(); !(n = i.n()).done; ) {
                        var a = n.value;
                        if (a.loadChildren && !a.canLoad && a._loadedConfig) {
                          var o = a._loadedConfig;
                          r.push(this.processRoutes(o.module, o.routes));
                        } else
                          a.loadChildren && !a.canLoad
                            ? r.push(this.preloadConfig(e, a))
                            : a.children &&
                              r.push(this.processRoutes(e, a.children));
                      }
                    } catch (s) {
                      i.e(s);
                    } finally {
                      i.f();
                    }
                    return B(r).pipe(
                      K(),
                      U(function (e) {})
                    );
                  },
                },
                {
                  key: "preloadConfig",
                  value: function (e, t) {
                    var n = this;
                    return this.preloadingStrategy.preload(t, function () {
                      return n.loader.load(e.injector, t).pipe(
                        q(function (e) {
                          return (
                            (t._loadedConfig = e),
                            n.processRoutes(e.module, e.routes)
                          );
                        })
                      );
                    });
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || fd)(Ke(sd), Ke(Rs), Ke(os), Ke(Xi), Ke(gd));
          }),
          (fd.ɵprov = ce({ token: fd, factory: fd.ɵfac })),
          fd),
        kd =
          (((hd = (function () {
            function e(t, n) {
              var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
              _classCallCheck(this, e),
                (this.router = t),
                (this.viewportScroller = n),
                (this.options = r),
                (this.lastId = 0),
                (this.lastSource = "imperative"),
                (this.restoredId = 0),
                (this.store = {}),
                (r.scrollPositionRestoration =
                  r.scrollPositionRestoration || "disabled"),
                (r.anchorScrolling = r.anchorScrolling || "disabled");
            }
            return (
              _createClass(e, [
                {
                  key: "init",
                  value: function () {
                    "disabled" !== this.options.scrollPositionRestoration &&
                      this.viewportScroller.setHistoryScrollRestoration(
                        "manual"
                      ),
                      (this.routerEventsSubscription = this.createScrollEvents()),
                      (this.scrollEventsSubscription = this.consumeScrollEvents());
                  },
                },
                {
                  key: "createScrollEvents",
                  value: function () {
                    var e = this;
                    return this.router.events.subscribe(function (t) {
                      t instanceof Gc
                        ? ((e.store[
                            e.lastId
                          ] = e.viewportScroller.getScrollPosition()),
                          (e.lastSource = t.navigationTrigger),
                          (e.restoredId = t.restoredState
                            ? t.restoredState.navigationId
                            : 0))
                        : t instanceof Wc &&
                          ((e.lastId = t.id),
                          e.scheduleScrollEvent(
                            t,
                            e.router.parseUrl(t.urlAfterRedirects).fragment
                          ));
                    });
                  },
                },
                {
                  key: "consumeScrollEvents",
                  value: function () {
                    var e = this;
                    return this.router.events.subscribe(function (t) {
                      t instanceof oh &&
                        (t.position
                          ? "top" === e.options.scrollPositionRestoration
                            ? e.viewportScroller.scrollToPosition([0, 0])
                            : "enabled" ===
                                e.options.scrollPositionRestoration &&
                              e.viewportScroller.scrollToPosition(t.position)
                          : t.anchor && "enabled" === e.options.anchorScrolling
                          ? e.viewportScroller.scrollToAnchor(t.anchor)
                          : "disabled" !==
                              e.options.scrollPositionRestoration &&
                            e.viewportScroller.scrollToPosition([0, 0]));
                    });
                  },
                },
                {
                  key: "scheduleScrollEvent",
                  value: function (e, t) {
                    this.router.triggerEvent(
                      new oh(
                        e,
                        "popstate" === this.lastSource
                          ? this.store[this.restoredId]
                          : null,
                        t
                      )
                    );
                  },
                },
                {
                  key: "ngOnDestroy",
                  value: function () {
                    this.routerEventsSubscription &&
                      this.routerEventsSubscription.unsubscribe(),
                      this.scrollEventsSubscription &&
                        this.scrollEventsSubscription.unsubscribe();
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            ma();
          }),
          (hd.ɵdir = dt({ type: hd })),
          hd),
        Cd = new Le("ROUTER_CONFIGURATION"),
        wd = new Le("ROUTER_FORROOT_GUARD"),
        bd = [
          lu,
          { provide: Oh, useClass: Ah },
          {
            provide: sd,
            useFactory: function (e, t, n, r, i, a, o) {
              var s =
                  arguments.length > 7 && void 0 !== arguments[7]
                    ? arguments[7]
                    : {},
                u = arguments.length > 8 ? arguments[8] : void 0,
                l = arguments.length > 9 ? arguments[9] : void 0,
                c = new sd(null, e, t, n, r, i, a, _h(o));
              if (
                (u && (c.urlHandlingStrategy = u),
                l && (c.routeReuseStrategy = l),
                s.errorHandler && (c.errorHandler = s.errorHandler),
                s.malformedUriErrorHandler &&
                  (c.malformedUriErrorHandler = s.malformedUriErrorHandler),
                s.enableTracing)
              ) {
                var h = Vs();
                c.events.subscribe(function (e) {
                  h.logGroup("Router Event: " + e.constructor.name),
                    h.log(e.toString()),
                    h.log(e),
                    h.logGroupEnd();
                });
              }
              return (
                s.onSameUrlNavigation &&
                  (c.onSameUrlNavigation = s.onSameUrlNavigation),
                s.paramsInheritanceStrategy &&
                  (c.paramsInheritanceStrategy = s.paramsInheritanceStrategy),
                s.urlUpdateStrategy &&
                  (c.urlUpdateStrategy = s.urlUpdateStrategy),
                s.relativeLinkResolution &&
                  (c.relativeLinkResolution = s.relativeLinkResolution),
                c
              );
            },
            deps: [
              Oh,
              vd,
              lu,
              Xi,
              Rs,
              os,
              Xf,
              Cd,
              [
                (function () {
                  return function e() {
                    _classCallCheck(this, e);
                  };
                })(),
                new ae(),
              ],
              [
                (function () {
                  return function e() {
                    _classCallCheck(this, e);
                  };
                })(),
                new ae(),
              ],
            ],
          },
          vd,
          {
            provide: Yh,
            useFactory: function (e) {
              return e.routerState.root;
            },
            deps: [sd],
          },
          { provide: Rs, useClass: Ns },
          _d,
          md,
          (function () {
            function e() {
              _classCallCheck(this, e);
            }
            return (
              _createClass(e, [
                {
                  key: "preload",
                  value: function (e, t) {
                    return t().pipe(
                      kc(function () {
                        return $l(null);
                      })
                    );
                  },
                },
              ]),
              e
            );
          })(),
          { provide: Cd, useValue: { enableTracing: !1 } },
        ];
      function Sd() {
        return new Ss("Router", sd);
      }
      var Ed,
        Td =
          (((Ed = (function () {
            function e(t, n) {
              _classCallCheck(this, e);
            }
            return (
              _createClass(e, null, [
                {
                  key: "forRoot",
                  value: function (t, n) {
                    return {
                      ngModule: e,
                      providers: [
                        bd,
                        Ad(t),
                        {
                          provide: wd,
                          useFactory: Od,
                          deps: [[sd, new ae(), new se()]],
                        },
                        { provide: Cd, useValue: n || {} },
                        {
                          provide: tu,
                          useFactory: Pd,
                          deps: [qs, [new ie(ou), new ae()], Cd],
                        },
                        { provide: kd, useFactory: xd, deps: [sd, fl, Cd] },
                        {
                          provide: gd,
                          useExisting:
                            n && n.preloadingStrategy
                              ? n.preloadingStrategy
                              : md,
                        },
                        { provide: Ss, multi: !0, useFactory: Sd },
                        [
                          Rd,
                          {
                            provide: zo,
                            multi: !0,
                            useFactory: Dd,
                            deps: [Rd],
                          },
                          { provide: Nd, useFactory: Md, deps: [Rd] },
                          { provide: Qo, multi: !0, useExisting: Nd },
                        ],
                      ],
                    };
                  },
                },
                {
                  key: "forChild",
                  value: function (t) {
                    return { ngModule: e, providers: [Ad(t)] };
                  },
                },
              ]),
              e
            );
          })()).ɵmod = ht({ type: Ed })),
          (Ed.ɵinj = he({
            factory: function (e) {
              return new (e || Ed)(Ke(wd, 8), Ke(sd, 8));
            },
          })),
          Ed);
      function xd(e, t, n) {
        return n.scrollOffset && t.setOffset(n.scrollOffset), new kd(e, t, n);
      }
      function Pd(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return n.useHash ? new uu(e, t) : new su(e, t);
      }
      function Od(e) {
        if (e)
          throw new Error(
            "RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead."
          );
        return "guarded";
      }
      function Ad(e) {
        return [
          { provide: ea, multi: !0, useValue: e },
          { provide: Xf, multi: !0, useValue: e },
        ];
      }
      var Id,
        Rd =
          (((Id = (function () {
            function e(t) {
              _classCallCheck(this, e),
                (this.injector = t),
                (this.initNavigation = !1),
                (this.resultOfPreactivationDone = new P());
            }
            return (
              _createClass(e, [
                {
                  key: "appInitializer",
                  value: function () {
                    var e = this;
                    return this.injector
                      .get(Ks, Promise.resolve(null))
                      .then(function () {
                        var t = null,
                          n = new Promise(function (e) {
                            return (t = e);
                          }),
                          r = e.injector.get(sd),
                          i = e.injector.get(Cd);
                        if (e.isLegacyDisabled(i) || e.isLegacyEnabled(i))
                          t(!0);
                        else if ("disabled" === i.initialNavigation)
                          r.setUpLocationChangeListener(), t(!0);
                        else {
                          if ("enabled" !== i.initialNavigation)
                            throw new Error(
                              "Invalid initialNavigation options: '".concat(
                                i.initialNavigation,
                                "'"
                              )
                            );
                          (r.hooks.afterPreactivation = function () {
                            return e.initNavigation
                              ? $l(null)
                              : ((e.initNavigation = !0),
                                t(!0),
                                e.resultOfPreactivationDone);
                          }),
                            r.initialNavigation();
                        }
                        return n;
                      });
                  },
                },
                {
                  key: "bootstrapListener",
                  value: function (e) {
                    var t = this.injector.get(Cd),
                      n = this.injector.get(_d),
                      r = this.injector.get(kd),
                      i = this.injector.get(sd),
                      a = this.injector.get(As);
                    e === a.components[0] &&
                      (this.isLegacyEnabled(t)
                        ? i.initialNavigation()
                        : this.isLegacyDisabled(t) &&
                          i.setUpLocationChangeListener(),
                      n.setUpPreloading(),
                      r.init(),
                      i.resetRootComponentType(a.componentTypes[0]),
                      this.resultOfPreactivationDone.next(null),
                      this.resultOfPreactivationDone.complete());
                  },
                },
                {
                  key: "isLegacyEnabled",
                  value: function (e) {
                    return (
                      "legacy_enabled" === e.initialNavigation ||
                      !0 === e.initialNavigation ||
                      void 0 === e.initialNavigation
                    );
                  },
                },
                {
                  key: "isLegacyDisabled",
                  value: function (e) {
                    return (
                      "legacy_disabled" === e.initialNavigation ||
                      !1 === e.initialNavigation
                    );
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || Id)(Ke(Xi));
          }),
          (Id.ɵprov = ce({ token: Id, factory: Id.ɵfac })),
          Id);
      function Dd(e) {
        return e.appInitializer.bind(e);
      }
      function Md(e) {
        return e.bootstrapListener.bind(e);
      }
      var Nd = new Le("Router Initializer");
      function Fd(e, t) {
        if (1 & e) {
          var n = Ht();
          Ca(0, "li", 4),
            Ea("click", function () {
              Lt.lFrame.contextLView = n;
              var e = t.$implicit;
              return (function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 1;
                return (function (e) {
                  return (Lt.lFrame.contextLView = (function (e, t) {
                    for (; e > 0; ) (t = t[15]), e--;
                    return t;
                  })(e, Lt.lFrame.contextLView))[8];
                })(e);
              })().select(e);
            }),
            Ca(1, "p", 5),
            ba(2, "img", 6),
            Aa(3),
            wa(),
            wa();
        }
        if (2 & e) {
          var r = t.$implicit;
          Pa("routerLink", r.url),
            br(2),
            Pa("src", r.icon, ir),
            br(1),
            Ia(r.name);
        }
      }
      var jd,
        Ld,
        Ud,
        Hd =
          (((Ud = (function () {
            function e() {
              _classCallCheck(this, e),
                (this.eventA = new Vo()),
                (this.menu = [
                  {
                    name: "Home",
                    url: "/",
                    icon: "./../../assets/images/menu-icons/recipents.png",
                  },
                  {
                    name: "History",
                    url: "/history",
                    icon: "./../../assets/images/menu-icons/history.png",
                  },
                  {
                    name: "Balances",
                    url: "/balances",
                    icon: "./../../assets/images/menu-icons/balances.png",
                  },
                  {
                    name: "Cards",
                    url: "/cards",
                    icon: "./../../assets/images/menu-icons/cards.png",
                  },
                  {
                    name: "Recipents",
                    url: "/recipents",
                    icon: "./../../assets/images/menu-icons/recipents.png",
                  },
                  {
                    name: "Raports",
                    url: "/raports",
                    icon: "./../../assets/images/menu-icons/raports.png",
                  },
                  {
                    name: "Settings",
                    url: "/settings",
                    icon: "./../../assets/images/menu-icons/settings.png",
                  },
                  {
                    name: "Help",
                    url: "/help",
                    icon: "./../../assets/images/menu-icons/help.png",
                  },
                  {
                    name: "Privacy",
                    url: "/privacy",
                    icon: "./../../assets/images/menu-icons/privacy.png",
                  },
                ]);
            }
            return (
              _createClass(e, [
                { key: "ngOnInit", value: function () {} },
                {
                  key: "select",
                  value: function (e) {
                    this.eventA.emit(e);
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || Ud)();
          }),
          (Ud.ɵcmp = st({
            type: Ud,
            selectors: [["app-menu"]],
            outputs: { eventA: "eventA" },
            decls: 4,
            vars: 1,
            consts: [
              [1, "menu"],
              ["src", "./../../assets/images/logo2.png", "alt", "", 1, "logo"],
              [1, "menu__ul"],
              [
                "class",
                "menu__li",
                3,
                "routerLink",
                "click",
                4,
                "ngFor",
                "ngForOf",
              ],
              [1, "menu__li", 3, "routerLink", "click"],
              [1, "menu__p"],
              ["alt", "", 1, "menu__icon", 3, "src"],
            ],
            template: function (e, t) {
              1 & e &&
                (Ca(0, "div", 0),
                ba(1, "img", 1),
                Ca(2, "ul", 2),
                pa(3, Fd, 4, 3, "li", 3),
                wa(),
                wa()),
                2 & e && (br(3), _a("ngForOf", t.menu));
            },
            directives: [$u, ud],
            styles: [
              ".menu__ul[_ngcontent-%COMP%]{display:flex;flex-direction:column;-webkit-padding-start:0;padding-inline-start:0;justify-content:space-between;overflow:hidden}.menu__ul[_ngcontent-%COMP%]:focus{outline:1px solid #05505c}.menu__li[_ngcontent-%COMP%]{list-style-type:none;padding:1vh 5vw;width:100px;margin:5px auto;cursor:pointer}.menu__li[_ngcontent-%COMP%]:focus, .menu__li[_ngcontent-%COMP%]:hover{background-color:#05505c}.menu__li[_ngcontent-%COMP%]:focus{outline:1px solid #05505c}.menu__p[_ngcontent-%COMP%]{color:#fff;text-decoration:none;-webkit-margin-before:0;margin-block-start:0;-webkit-margin-after:0;margin-block-end:0}.menu__icon[_ngcontent-%COMP%]{transform:translateY(20%);padding-right:5px}@media (min-width:500px){.menu__ul[_ngcontent-%COMP%]{-webkit-margin-before:unset;margin-block-start:unset;-webkit-margin-after:unset;margin-block-end:unset}}",
            ],
          })),
          Ud),
        Vd =
          (((Ld = (function () {
            function e() {
              _classCallCheck(this, e),
                (this.person = {
                  name: "Emilia",
                  surname: "Birch",
                  street: "Duke street Studio",
                });
            }
            return (
              _createClass(e, [{ key: "ngOnInit", value: function () {} }]), e
            );
          })()).ɵfac = function (e) {
            return new (e || Ld)();
          }),
          (Ld.ɵcmp = st({
            type: Ld,
            selectors: [["app-person"]],
            decls: 14,
            vars: 3,
            consts: [
              [1, "app-person"],
              [1, "app-personality"],
              ["src", "./../../assets/images/face.jpg", "alt", "", 1, "face"],
              [1, "person"],
              [1, "name"],
              [1, "street"],
              ["src", "./../../assets/images/localisation.png", "alt", ""],
              [1, "main__buttons"],
              [1, "main__button", "add-money"],
              [1, "main__button", "send-money"],
            ],
            template: function (e, t) {
              1 & e &&
                (Ca(0, "div", 0),
                Ca(1, "div", 1),
                ba(2, "img", 2),
                Ca(3, "div", 3),
                Ca(4, "p", 4),
                Aa(5),
                wa(),
                Ca(6, "p", 5),
                ba(7, "img", 6),
                Aa(8),
                wa(),
                wa(),
                wa(),
                Ca(9, "div", 7),
                Ca(10, "button", 8),
                Aa(11, "Add money"),
                wa(),
                Ca(12, "button", 9),
                Aa(13, "Send money"),
                wa(),
                wa(),
                wa()),
                2 & e &&
                  (br(5),
                  Da(
                    "Good Morning, ",
                    t.person.name,
                    " ",
                    t.person.surname,
                    ""
                  ),
                  br(3),
                  Ra(" ", t.person.street, ""));
            },
            styles: [
              ".app-person[_ngcontent-%COMP%]{margin-bottom:1vh}.app-personality[_ngcontent-%COMP%]{display:flex;padding-top:1vh;align-items:center;justify-content:center}.face[_ngcontent-%COMP%]{width:52px;height:52px;display:inline-block;border-radius:50%;margin-right:2vw}.name[_ngcontent-%COMP%]{font-weight:700}.main__buttons[_ngcontent-%COMP%]{text-align:right}.main__button[_ngcontent-%COMP%]{padding:5px 10px;border-width:2px;border-style:solid;cursor:pointer}.add-money[_ngcontent-%COMP%]{margin-right:3vw;background-color:#fff;border-color:#ddd}.add-money[_ngcontent-%COMP%]:hover{outline:1px solid #036672}.add-money[_ngcontent-%COMP%]:hover, .send-money[_ngcontent-%COMP%]{color:#fff;background-color:#036672;border-color:#036672}@media (min-width:1024px){.app-person[_ngcontent-%COMP%]{display:flex;justify-content:space-around}.main__buttons[_ngcontent-%COMP%]{align-self:center}.add-money[_ngcontent-%COMP%]{margin-right:1vw}}",
            ],
          })),
          Ld),
        zd =
          (((jd = (function () {
            function e(t, n) {
              _classCallCheck(this, e),
                (this.inputService = t),
                (this.recentActivityService = n),
                (this.title = "paymentApp"),
                (this.status = !1),
                (this.transactions = []),
                (this.newTransactions = []),
                (this.values = "");
            }
            return (
              _createClass(e, [
                {
                  key: "ngOnInit",
                  value: function () {
                    (this.transactions = this.recentActivityService.getTransactions()),
                      this.inputService.addValue(
                        this.recentActivityService.getTransactions()
                      );
                  },
                },
                {
                  key: "hamburgerActive",
                  value: function () {
                    this.status = !this.status;
                  },
                },
                {
                  key: "selected",
                  value: function (e) {
                    this.hamburgerActive();
                  },
                },
                {
                  key: "onKey",
                  value: function (e) {
                    var t = this;
                    (this.newTransactions = []),
                      (this.values = e.target.value),
                      this.transactions.map(function (e) {
                        e.transaction
                          .toLowerCase()
                          .includes(t.values.toLowerCase()) &&
                          t.newTransactions.push(e);
                      }),
                      this.inputService.addValue(this.newTransactions);
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || jd)(ya(Zl), ya(Ql));
          }),
          (jd.ɵcmp = st({
            type: jd,
            selectors: [["app-root"]],
            features: [za([])],
            decls: 13,
            vars: 2,
            consts: [
              [1, "container"],
              [1, "mobile-menu"],
              [1, "hamburger", "hamburger--arrow", 3, "ngClass", "click"],
              [1, "hamburger-box"],
              [1, "hamburger-inner"],
              [1, "menu", 3, "ngClass", "eventA"],
              [1, "main"],
              ["for", "", 1, "main__label", "label"],
              [
                "src",
                "../assets/images/search.png",
                "alt",
                "",
                1,
                "label__img",
              ],
              [
                "placeholder",
                "Search transaction",
                1,
                "label__input",
                3,
                "input",
              ],
              [1, "app-section"],
              [1, "active-page"],
            ],
            template: function (e, t) {
              1 & e &&
                (Ca(0, "div", 0),
                Ca(1, "div", 1),
                Ca(2, "div", 2),
                Ea("click", function () {
                  return t.hamburgerActive();
                }),
                Ca(3, "div", 3),
                ba(4, "div", 4),
                wa(),
                wa(),
                wa(),
                Ca(5, "app-menu", 5),
                Ea("eventA", function (e) {
                  return t.selected(e);
                }),
                wa(),
                Ca(6, "div", 6),
                Ca(7, "label", 7),
                ba(8, "img", 8),
                Ca(9, "input", 9),
                Ea("input", function (e) {
                  return t.onKey(e);
                }),
                wa(),
                wa(),
                ba(10, "app-person", 10),
                Ca(11, "div", 11),
                ba(12, "router-outlet"),
                wa(),
                wa(),
                wa()),
                2 & e &&
                  (br(2),
                  _a("ngClass", t.status ? "is-active" : ""),
                  br(3),
                  _a("ngClass", t.status ? "menu--is-active" : ""));
            },
            directives: [Zu, Hd, Vd, pd],
            styles: [
              '.container[_ngcontent-%COMP%]{display:flex}.mobile-menu[_ngcontent-%COMP%]{position:fixed;top:0;right:0;z-index:2;transform:scale(.7)}.hamburger[_ngcontent-%COMP%]{padding:15px;display:inline-block;cursor:pointer;transition-property:opacity,-webkit-filter;transition-property:opacity,filter;transition-property:opacity,filter,-webkit-filter;transition-duration:.15s;transition-timing-function:linear;font:inherit;color:inherit;text-transform:none;background-color:transparent;border:0;margin:0;overflow:visible}.hamburger.is-active[_ngcontent-%COMP%]:hover, .hamburger[_ngcontent-%COMP%]:hover{opacity:.7}.hamburger.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%], .hamburger.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]:after, .hamburger.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]:before{background-color:#000}.hamburger-box[_ngcontent-%COMP%]{width:40px;height:24px;display:inline-block;position:relative}.hamburger-inner[_ngcontent-%COMP%]{display:block;top:50%;margin-top:-2px}.hamburger-inner[_ngcontent-%COMP%], .hamburger-inner[_ngcontent-%COMP%]:after, .hamburger-inner[_ngcontent-%COMP%]:before{width:40px;height:4px;background-color:#000;border-radius:4px;position:absolute;transition-property:transform;transition-duration:.15s;transition-timing-function:ease}.hamburger-inner[_ngcontent-%COMP%]:after, .hamburger-inner[_ngcontent-%COMP%]:before{content:"";display:block}.hamburger-inner[_ngcontent-%COMP%]:before{top:-10px}.hamburger-inner[_ngcontent-%COMP%]:after{bottom:-10px}.hamburger--arrow.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]:before{transform:translate3d(-8px,0,0) rotate(-45deg) scaleX(.7)}.hamburger--arrow.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]:after{transform:translate3d(-8px,0,0) rotate(45deg) scaleX(.7)}.menu[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:#036672;transform:translateX(-100%);transition:.5s;z-index:1}.menu--is-active[_ngcontent-%COMP%]{transform:translateX(0)}.main[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;align-items:center;width:100%;margin:0 auto}.label[_ngcontent-%COMP%]{padding-top:2vh}.label__img[_ngcontent-%COMP%]{transform:translateY(20%)}.label__input[_ngcontent-%COMP%]{padding-left:1vw;margin-left:1vw;border:none;font-size:1rem;font-family:Arial,Helvetica,sans-serif;color:#a5a5a5}.active-page[_ngcontent-%COMP%]{background-color:#f1f5f9;width:100%}@media (min-width:500px){.menu[_ngcontent-%COMP%]{width:35vw}}@media (min-width:768px){.mobile-menu[_ngcontent-%COMP%]{display:none;height:auto}.menu[_ngcontent-%COMP%]{position:unset;top:unset;left:unset;max-width:220px;height:unset;transform:unset;min-height:100vh}.main[_ngcontent-%COMP%]{justify-content:unset}.label__input[_ngcontent-%COMP%]{font-size:1.1rem}}@media (min-width:1024px){.menu[_ngcontent-%COMP%]{max-width:300px}.main[_ngcontent-%COMP%]{max-width:1700px}.active-page[_ngcontent-%COMP%], .app-section[_ngcontent-%COMP%], .main[_ngcontent-%COMP%]{width:100%}}',
            ],
          })),
          jd),
        Bd = function e() {
          _classCallCheck(this, e);
        };
      function qd(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return { type: 2, steps: e, options: t };
      }
      function Gd(e) {
        return { type: 6, styles: e, offset: null };
      }
      function Wd(e) {
        Promise.resolve(null).then(e);
      }
      var Kd = (function () {
          function e() {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0;
            _classCallCheck(this, e),
              (this._onDoneFns = []),
              (this._onStartFns = []),
              (this._onDestroyFns = []),
              (this._started = !1),
              (this._destroyed = !1),
              (this._finished = !1),
              (this.parentPlayer = null),
              (this.totalTime = t + n);
          }
          return (
            _createClass(e, [
              {
                key: "_onFinish",
                value: function () {
                  this._finished ||
                    ((this._finished = !0),
                    this._onDoneFns.forEach(function (e) {
                      return e();
                    }),
                    (this._onDoneFns = []));
                },
              },
              {
                key: "onStart",
                value: function (e) {
                  this._onStartFns.push(e);
                },
              },
              {
                key: "onDone",
                value: function (e) {
                  this._onDoneFns.push(e);
                },
              },
              {
                key: "onDestroy",
                value: function (e) {
                  this._onDestroyFns.push(e);
                },
              },
              {
                key: "hasStarted",
                value: function () {
                  return this._started;
                },
              },
              { key: "init", value: function () {} },
              {
                key: "play",
                value: function () {
                  this.hasStarted() ||
                    (this._onStart(), this.triggerMicrotask()),
                    (this._started = !0);
                },
              },
              {
                key: "triggerMicrotask",
                value: function () {
                  var e = this;
                  Wd(function () {
                    return e._onFinish();
                  });
                },
              },
              {
                key: "_onStart",
                value: function () {
                  this._onStartFns.forEach(function (e) {
                    return e();
                  }),
                    (this._onStartFns = []);
                },
              },
              { key: "pause", value: function () {} },
              { key: "restart", value: function () {} },
              {
                key: "finish",
                value: function () {
                  this._onFinish();
                },
              },
              {
                key: "destroy",
                value: function () {
                  this._destroyed ||
                    ((this._destroyed = !0),
                    this.hasStarted() || this._onStart(),
                    this.finish(),
                    this._onDestroyFns.forEach(function (e) {
                      return e();
                    }),
                    (this._onDestroyFns = []));
                },
              },
              { key: "reset", value: function () {} },
              { key: "setPosition", value: function (e) {} },
              {
                key: "getPosition",
                value: function () {
                  return 0;
                },
              },
              {
                key: "triggerCallback",
                value: function (e) {
                  var t = "start" == e ? this._onStartFns : this._onDoneFns;
                  t.forEach(function (e) {
                    return e();
                  }),
                    (t.length = 0);
                },
              },
            ]),
            e
          );
        })(),
        Zd = (function () {
          function e(t) {
            var n = this;
            _classCallCheck(this, e),
              (this._onDoneFns = []),
              (this._onStartFns = []),
              (this._finished = !1),
              (this._started = !1),
              (this._destroyed = !1),
              (this._onDestroyFns = []),
              (this.parentPlayer = null),
              (this.totalTime = 0),
              (this.players = t);
            var r = 0,
              i = 0,
              a = 0,
              o = this.players.length;
            0 == o
              ? Wd(function () {
                  return n._onFinish();
                })
              : this.players.forEach(function (e) {
                  e.onDone(function () {
                    ++r == o && n._onFinish();
                  }),
                    e.onDestroy(function () {
                      ++i == o && n._onDestroy();
                    }),
                    e.onStart(function () {
                      ++a == o && n._onStart();
                    });
                }),
              (this.totalTime = this.players.reduce(function (e, t) {
                return Math.max(e, t.totalTime);
              }, 0));
          }
          return (
            _createClass(e, [
              {
                key: "_onFinish",
                value: function () {
                  this._finished ||
                    ((this._finished = !0),
                    this._onDoneFns.forEach(function (e) {
                      return e();
                    }),
                    (this._onDoneFns = []));
                },
              },
              {
                key: "init",
                value: function () {
                  this.players.forEach(function (e) {
                    return e.init();
                  });
                },
              },
              {
                key: "onStart",
                value: function (e) {
                  this._onStartFns.push(e);
                },
              },
              {
                key: "_onStart",
                value: function () {
                  this.hasStarted() ||
                    ((this._started = !0),
                    this._onStartFns.forEach(function (e) {
                      return e();
                    }),
                    (this._onStartFns = []));
                },
              },
              {
                key: "onDone",
                value: function (e) {
                  this._onDoneFns.push(e);
                },
              },
              {
                key: "onDestroy",
                value: function (e) {
                  this._onDestroyFns.push(e);
                },
              },
              {
                key: "hasStarted",
                value: function () {
                  return this._started;
                },
              },
              {
                key: "play",
                value: function () {
                  this.parentPlayer || this.init(),
                    this._onStart(),
                    this.players.forEach(function (e) {
                      return e.play();
                    });
                },
              },
              {
                key: "pause",
                value: function () {
                  this.players.forEach(function (e) {
                    return e.pause();
                  });
                },
              },
              {
                key: "restart",
                value: function () {
                  this.players.forEach(function (e) {
                    return e.restart();
                  });
                },
              },
              {
                key: "finish",
                value: function () {
                  this._onFinish(),
                    this.players.forEach(function (e) {
                      return e.finish();
                    });
                },
              },
              {
                key: "destroy",
                value: function () {
                  this._onDestroy();
                },
              },
              {
                key: "_onDestroy",
                value: function () {
                  this._destroyed ||
                    ((this._destroyed = !0),
                    this._onFinish(),
                    this.players.forEach(function (e) {
                      return e.destroy();
                    }),
                    this._onDestroyFns.forEach(function (e) {
                      return e();
                    }),
                    (this._onDestroyFns = []));
                },
              },
              {
                key: "reset",
                value: function () {
                  this.players.forEach(function (e) {
                    return e.reset();
                  }),
                    (this._destroyed = !1),
                    (this._finished = !1),
                    (this._started = !1);
                },
              },
              {
                key: "setPosition",
                value: function (e) {
                  var t = e * this.totalTime;
                  this.players.forEach(function (e) {
                    var n = e.totalTime ? Math.min(1, t / e.totalTime) : 1;
                    e.setPosition(n);
                  });
                },
              },
              {
                key: "getPosition",
                value: function () {
                  var e = 0;
                  return (
                    this.players.forEach(function (t) {
                      var n = t.getPosition();
                      e = Math.min(n, e);
                    }),
                    e
                  );
                },
              },
              {
                key: "beforeDestroy",
                value: function () {
                  this.players.forEach(function (e) {
                    e.beforeDestroy && e.beforeDestroy();
                  });
                },
              },
              {
                key: "triggerCallback",
                value: function (e) {
                  var t = "start" == e ? this._onStartFns : this._onDoneFns;
                  t.forEach(function (e) {
                    return e();
                  }),
                    (t.length = 0);
                },
              },
            ]),
            e
          );
        })();
      function Qd() {
        return (
          "undefined" != typeof process &&
          "[object process]" === {}.toString.call(process)
        );
      }
      function $d(e) {
        switch (e.length) {
          case 0:
            return new Kd();
          case 1:
            return e[0];
          default:
            return new Zd(e);
        }
      }
      function Yd(e, t, n, r) {
        var i =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
          a =
            arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
          o = [],
          s = [],
          u = -1,
          l = null;
        if (
          (r.forEach(function (e) {
            var n = e.offset,
              r = n == u,
              c = (r && l) || {};
            Object.keys(e).forEach(function (n) {
              var r = n,
                s = e[n];
              if ("offset" !== n)
                switch (((r = t.normalizePropertyName(r, o)), s)) {
                  case "!":
                    s = i[n];
                    break;
                  case "*":
                    s = a[n];
                    break;
                  default:
                    s = t.normalizeStyleValue(n, r, s, o);
                }
              c[r] = s;
            }),
              r || s.push(c),
              (l = c),
              (u = n);
          }),
          o.length)
        ) {
          var c = "\n - ";
          throw new Error(
            "Unable to animate due to the following errors:"
              .concat(c)
              .concat(o.join(c))
          );
        }
        return s;
      }
      function Jd(e, t, n, r) {
        switch (t) {
          case "start":
            e.onStart(function () {
              return r(n && Xd(n, "start", e));
            });
            break;
          case "done":
            e.onDone(function () {
              return r(n && Xd(n, "done", e));
            });
            break;
          case "destroy":
            e.onDestroy(function () {
              return r(n && Xd(n, "destroy", e));
            });
        }
      }
      function Xd(e, t, n) {
        var r = n.totalTime,
          i = ev(
            e.element,
            e.triggerName,
            e.fromState,
            e.toState,
            t || e.phaseName,
            null == r ? e.totalTime : r,
            !!n.disabled
          ),
          a = e._data;
        return null != a && (i._data = a), i;
      }
      function ev(e, t, n, r) {
        var i =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
          a =
            arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          o = arguments.length > 6 ? arguments[6] : void 0;
        return {
          element: e,
          triggerName: t,
          fromState: n,
          toState: r,
          phaseName: i,
          totalTime: a,
          disabled: !!o,
        };
      }
      function tv(e, t, n) {
        var r;
        return (
          e instanceof Map
            ? (r = e.get(t)) || e.set(t, (r = n))
            : (r = e[t]) || (r = e[t] = n),
          r
        );
      }
      function nv(e) {
        var t = e.indexOf(":");
        return [e.substring(1, t), e.substr(t + 1)];
      }
      var rv = function (e, t) {
          return !1;
        },
        iv = function (e, t) {
          return !1;
        },
        av = function (e, t, n) {
          return [];
        },
        ov = Qd();
      (ov || "undefined" != typeof Element) &&
        ((rv = function (e, t) {
          return e.contains(t);
        }),
        (iv = (function () {
          if (ov || Element.prototype.matches)
            return function (e, t) {
              return e.matches(t);
            };
          var e = Element.prototype,
            t =
              e.matchesSelector ||
              e.mozMatchesSelector ||
              e.msMatchesSelector ||
              e.oMatchesSelector ||
              e.webkitMatchesSelector;
          return t
            ? function (e, n) {
                return t.apply(e, [n]);
              }
            : iv;
        })()),
        (av = function (e, t, n) {
          var r = [];
          if (n) r.push.apply(r, _toConsumableArray(e.querySelectorAll(t)));
          else {
            var i = e.querySelector(t);
            i && r.push(i);
          }
          return r;
        }));
      var sv = null,
        uv = !1;
      function lv(e) {
        sv ||
          ((sv = ("undefined" != typeof document ? document.body : null) || {}),
          (uv = !!sv.style && "WebkitAppearance" in sv.style));
        var t = !0;
        return (
          sv.style &&
            !(function (e) {
              return "ebkit" == e.substring(1, 6);
            })(e) &&
            !(t = e in sv.style) &&
            uv &&
            (t =
              "Webkit" + e.charAt(0).toUpperCase() + e.substr(1) in sv.style),
          t
        );
      }
      var cv = iv,
        hv = rv,
        fv = av;
      function dv(e) {
        var t = {};
        return (
          Object.keys(e).forEach(function (n) {
            var r = n.replace(/([a-z])([A-Z])/g, "$1-$2");
            t[r] = e[n];
          }),
          t
        );
      }
      var vv,
        pv =
          (((vv = (function () {
            function e() {
              _classCallCheck(this, e);
            }
            return (
              _createClass(e, [
                {
                  key: "validateStyleProperty",
                  value: function (e) {
                    return lv(e);
                  },
                },
                {
                  key: "matchesElement",
                  value: function (e, t) {
                    return cv(e, t);
                  },
                },
                {
                  key: "containsElement",
                  value: function (e, t) {
                    return hv(e, t);
                  },
                },
                {
                  key: "query",
                  value: function (e, t, n) {
                    return fv(e, t, n);
                  },
                },
                {
                  key: "computeStyle",
                  value: function (e, t, n) {
                    return n || "";
                  },
                },
                {
                  key: "animate",
                  value: function (e, t, n, r, i) {
                    return (
                      arguments.length > 5 &&
                        void 0 !== arguments[5] &&
                        arguments[5],
                      arguments.length > 6 && arguments[6],
                      new Kd(n, r)
                    );
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || vv)();
          }),
          (vv.ɵprov = ce({ token: vv, factory: vv.ɵfac })),
          vv),
        yv = (function () {
          var e = function e() {
            _classCallCheck(this, e);
          };
          return (e.NOOP = new pv()), e;
        })();
      function gv(e) {
        if ("number" == typeof e) return e;
        var t = e.match(/^(-?[\.\d]+)(m?s)/);
        return !t || t.length < 2 ? 0 : mv(parseFloat(t[1]), t[2]);
      }
      function mv(e, t) {
        switch (t) {
          case "s":
            return 1e3 * e;
          default:
            return e;
        }
      }
      function _v(e, t, n) {
        return e.hasOwnProperty("duration")
          ? e
          : (function (e, t, n) {
              var r,
                i = 0,
                a = "";
              if ("string" == typeof e) {
                var o = e.match(
                  /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i
                );
                if (null === o)
                  return (
                    t.push(
                      'The provided timing value "'.concat(e, '" is invalid.')
                    ),
                    { duration: 0, delay: 0, easing: "" }
                  );
                r = mv(parseFloat(o[1]), o[2]);
                var s = o[3];
                null != s && (i = mv(parseFloat(s), o[4]));
                var u = o[5];
                u && (a = u);
              } else r = e;
              if (!n) {
                var l = !1,
                  c = t.length;
                r < 0 &&
                  (t.push(
                    "Duration values below 0 are not allowed for this animation step."
                  ),
                  (l = !0)),
                  i < 0 &&
                    (t.push(
                      "Delay values below 0 are not allowed for this animation step."
                    ),
                    (l = !0)),
                  l &&
                    t.splice(
                      c,
                      0,
                      'The provided timing value "'.concat(e, '" is invalid.')
                    );
              }
              return { duration: r, delay: i, easing: a };
            })(e, t, n);
      }
      function kv(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (
          Object.keys(e).forEach(function (n) {
            t[n] = e[n];
          }),
          t
        );
      }
      function Cv(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (t) for (var r in e) n[r] = e[r];
        else kv(e, n);
        return n;
      }
      function wv(e, t, n) {
        return n ? t + ":" + n + ";" : "";
      }
      function bv(e) {
        for (var t = "", n = 0; n < e.style.length; n++) {
          var r = e.style.item(n);
          t += wv(0, r, e.style.getPropertyValue(r));
        }
        for (var i in e.style)
          e.style.hasOwnProperty(i) &&
            !i.startsWith("_") &&
            (t += wv(
              0,
              i.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
              e.style[i]
            ));
        e.setAttribute("style", t);
      }
      function Sv(e, t, n) {
        e.style &&
          (Object.keys(t).forEach(function (r) {
            var i = Rv(r);
            n && !n.hasOwnProperty(r) && (n[r] = e.style[i]),
              (e.style[i] = t[r]);
          }),
          Qd() && bv(e));
      }
      function Ev(e, t) {
        e.style &&
          (Object.keys(t).forEach(function (t) {
            var n = Rv(t);
            e.style[n] = "";
          }),
          Qd() && bv(e));
      }
      function Tv(e) {
        return Array.isArray(e) ? (1 == e.length ? e[0] : qd(e)) : e;
      }
      var xv = new RegExp("{{\\s*(.+?)\\s*}}", "g");
      function Pv(e) {
        var t = [];
        if ("string" == typeof e) {
          for (var n; (n = xv.exec(e)); ) t.push(n[1]);
          xv.lastIndex = 0;
        }
        return t;
      }
      function Ov(e, t, n) {
        var r = e.toString(),
          i = r.replace(xv, function (e, r) {
            var i = t[r];
            return (
              t.hasOwnProperty(r) ||
                (n.push("Please provide a value for the animation param " + r),
                (i = "")),
              i.toString()
            );
          });
        return i == r ? e : i;
      }
      function Av(e) {
        for (var t = [], n = e.next(); !n.done; )
          t.push(n.value), (n = e.next());
        return t;
      }
      var Iv = /-+([a-z0-9])/g;
      function Rv(e) {
        return e.replace(Iv, function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return t[1].toUpperCase();
        });
      }
      function Dv(e, t) {
        return 0 === e || 0 === t;
      }
      function Mv(e, t, n) {
        var r = Object.keys(n);
        if (r.length && t.length) {
          var i = t[0],
            a = [];
          if (
            (r.forEach(function (e) {
              i.hasOwnProperty(e) || a.push(e), (i[e] = n[e]);
            }),
            a.length)
          )
            for (
              var o = function () {
                  var n = t[s];
                  a.forEach(function (t) {
                    n[t] = Fv(e, t);
                  });
                },
                s = 1;
              s < t.length;
              s++
            )
              o();
        }
        return t;
      }
      function Nv(e, t, n) {
        switch (t.type) {
          case 7:
            return e.visitTrigger(t, n);
          case 0:
            return e.visitState(t, n);
          case 1:
            return e.visitTransition(t, n);
          case 2:
            return e.visitSequence(t, n);
          case 3:
            return e.visitGroup(t, n);
          case 4:
            return e.visitAnimate(t, n);
          case 5:
            return e.visitKeyframes(t, n);
          case 6:
            return e.visitStyle(t, n);
          case 8:
            return e.visitReference(t, n);
          case 9:
            return e.visitAnimateChild(t, n);
          case 10:
            return e.visitAnimateRef(t, n);
          case 11:
            return e.visitQuery(t, n);
          case 12:
            return e.visitStagger(t, n);
          default:
            throw new Error(
              "Unable to resolve animation metadata node #" + t.type
            );
        }
      }
      function Fv(e, t) {
        return window.getComputedStyle(e)[t];
      }
      var jv = new Set(["true", "1"]),
        Lv = new Set(["false", "0"]);
      function Uv(e, t) {
        var n = jv.has(e) || Lv.has(e),
          r = jv.has(t) || Lv.has(t);
        return function (i, a) {
          var o = "*" == e || e == i,
            s = "*" == t || t == a;
          return (
            !o && n && "boolean" == typeof i && (o = i ? jv.has(e) : Lv.has(e)),
            !s && r && "boolean" == typeof a && (s = a ? jv.has(t) : Lv.has(t)),
            o && s
          );
        };
      }
      var Hv = new RegExp("s*:selfs*,?", "g");
      function Vv(e, t, n) {
        return new zv(e).build(t, n);
      }
      var zv = (function () {
          function e(t) {
            _classCallCheck(this, e), (this._driver = t);
          }
          return (
            _createClass(e, [
              {
                key: "build",
                value: function (e, t) {
                  var n = new Bv(t);
                  return (
                    this._resetContextStyleTimingState(n), Nv(this, Tv(e), n)
                  );
                },
              },
              {
                key: "_resetContextStyleTimingState",
                value: function (e) {
                  (e.currentQuerySelector = ""),
                    (e.collectedStyles = {}),
                    (e.collectedStyles[""] = {}),
                    (e.currentTime = 0);
                },
              },
              {
                key: "visitTrigger",
                value: function (e, t) {
                  var n = this,
                    r = (t.queryCount = 0),
                    i = (t.depCount = 0),
                    a = [],
                    o = [];
                  return (
                    "@" == e.name.charAt(0) &&
                      t.errors.push(
                        "animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))"
                      ),
                    e.definitions.forEach(function (e) {
                      if ((n._resetContextStyleTimingState(t), 0 == e.type)) {
                        var s = e,
                          u = s.name;
                        u
                          .toString()
                          .split(/\s*,\s*/)
                          .forEach(function (e) {
                            (s.name = e), a.push(n.visitState(s, t));
                          }),
                          (s.name = u);
                      } else if (1 == e.type) {
                        var l = n.visitTransition(e, t);
                        (r += l.queryCount), (i += l.depCount), o.push(l);
                      } else
                        t.errors.push(
                          "only state() and transition() definitions can sit inside of a trigger()"
                        );
                    }),
                    {
                      type: 7,
                      name: e.name,
                      states: a,
                      transitions: o,
                      queryCount: r,
                      depCount: i,
                      options: null,
                    }
                  );
                },
              },
              {
                key: "visitState",
                value: function (e, t) {
                  var n = this.visitStyle(e.styles, t),
                    r = (e.options && e.options.params) || null;
                  if (n.containsDynamicStyles) {
                    var i = new Set(),
                      a = r || {};
                    if (
                      (n.styles.forEach(function (e) {
                        if (qv(e)) {
                          var t = e;
                          Object.keys(t).forEach(function (e) {
                            Pv(t[e]).forEach(function (e) {
                              a.hasOwnProperty(e) || i.add(e);
                            });
                          });
                        }
                      }),
                      i.size)
                    ) {
                      var o = Av(i.values());
                      t.errors.push(
                        'state("'
                          .concat(
                            e.name,
                            '", ...) must define default values for all the following style substitutions: '
                          )
                          .concat(o.join(", "))
                      );
                    }
                  }
                  return {
                    type: 0,
                    name: e.name,
                    style: n,
                    options: r ? { params: r } : null,
                  };
                },
              },
              {
                key: "visitTransition",
                value: function (e, t) {
                  (t.queryCount = 0), (t.depCount = 0);
                  var n,
                    r,
                    i,
                    a = Nv(this, Tv(e.animation), t);
                  return {
                    type: 1,
                    matchers:
                      ((n = e.expr),
                      (r = t.errors),
                      (i = []),
                      "string" == typeof n
                        ? n.split(/\s*,\s*/).forEach(function (e) {
                            return (function (e, t, n) {
                              if (":" == e[0]) {
                                var r = (function (e, t) {
                                  switch (e) {
                                    case ":enter":
                                      return "void => *";
                                    case ":leave":
                                      return "* => void";
                                    case ":increment":
                                      return function (e, t) {
                                        return parseFloat(t) > parseFloat(e);
                                      };
                                    case ":decrement":
                                      return function (e, t) {
                                        return parseFloat(t) < parseFloat(e);
                                      };
                                    default:
                                      return (
                                        t.push(
                                          'The transition alias value "'.concat(
                                            e,
                                            '" is not supported'
                                          )
                                        ),
                                        "* => *"
                                      );
                                  }
                                })(e, n);
                                if ("function" == typeof r)
                                  return void t.push(r);
                                e = r;
                              }
                              var i = e.match(
                                /^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/
                              );
                              if (null == i || i.length < 4)
                                return (
                                  n.push(
                                    'The provided transition expression "'.concat(
                                      e,
                                      '" is not supported'
                                    )
                                  ),
                                  t
                                );
                              var a = i[1],
                                o = i[2],
                                s = i[3];
                              t.push(Uv(a, s)),
                                "<" != o[0] ||
                                  ("*" == a && "*" == s) ||
                                  t.push(Uv(s, a));
                            })(e, i, r);
                          })
                        : i.push(n),
                      i),
                    animation: a,
                    queryCount: t.queryCount,
                    depCount: t.depCount,
                    options: Gv(e.options),
                  };
                },
              },
              {
                key: "visitSequence",
                value: function (e, t) {
                  var n = this;
                  return {
                    type: 2,
                    steps: e.steps.map(function (e) {
                      return Nv(n, e, t);
                    }),
                    options: Gv(e.options),
                  };
                },
              },
              {
                key: "visitGroup",
                value: function (e, t) {
                  var n = this,
                    r = t.currentTime,
                    i = 0,
                    a = e.steps.map(function (e) {
                      t.currentTime = r;
                      var a = Nv(n, e, t);
                      return (i = Math.max(i, t.currentTime)), a;
                    });
                  return (
                    (t.currentTime = i),
                    { type: 3, steps: a, options: Gv(e.options) }
                  );
                },
              },
              {
                key: "visitAnimate",
                value: function (e, t) {
                  var n,
                    r = (function (e, t) {
                      var n = null;
                      if (e.hasOwnProperty("duration")) n = e;
                      else if ("number" == typeof e)
                        return Wv(_v(e, t).duration, 0, "");
                      var r = e;
                      if (
                        r.split(/\s+/).some(function (e) {
                          return "{" == e.charAt(0) && "{" == e.charAt(1);
                        })
                      ) {
                        var i = Wv(0, 0, "");
                        return (i.dynamic = !0), (i.strValue = r), i;
                      }
                      return Wv(
                        (n = n || _v(r, t)).duration,
                        n.delay,
                        n.easing
                      );
                    })(e.timings, t.errors);
                  t.currentAnimateTimings = r;
                  var i = e.styles ? e.styles : Gd({});
                  if (5 == i.type) n = this.visitKeyframes(i, t);
                  else {
                    var a = e.styles,
                      o = !1;
                    if (!a) {
                      o = !0;
                      var s = {};
                      r.easing && (s.easing = r.easing), (a = Gd(s));
                    }
                    t.currentTime += r.duration + r.delay;
                    var u = this.visitStyle(a, t);
                    (u.isEmptyStep = o), (n = u);
                  }
                  return (
                    (t.currentAnimateTimings = null),
                    { type: 4, timings: r, style: n, options: null }
                  );
                },
              },
              {
                key: "visitStyle",
                value: function (e, t) {
                  var n = this._makeStyleAst(e, t);
                  return this._validateStyleAst(n, t), n;
                },
              },
              {
                key: "_makeStyleAst",
                value: function (e, t) {
                  var n = [];
                  Array.isArray(e.styles)
                    ? e.styles.forEach(function (e) {
                        "string" == typeof e
                          ? "*" == e
                            ? n.push(e)
                            : t.errors.push(
                                "The provided style string value ".concat(
                                  e,
                                  " is not allowed."
                                )
                              )
                          : n.push(e);
                      })
                    : n.push(e.styles);
                  var r = !1,
                    i = null;
                  return (
                    n.forEach(function (e) {
                      if (qv(e)) {
                        var t = e,
                          n = t.easing;
                        if ((n && ((i = n), delete t.easing), !r))
                          for (var a in t)
                            if (t[a].toString().indexOf("{{") >= 0) {
                              r = !0;
                              break;
                            }
                      }
                    }),
                    {
                      type: 6,
                      styles: n,
                      easing: i,
                      offset: e.offset,
                      containsDynamicStyles: r,
                      options: null,
                    }
                  );
                },
              },
              {
                key: "_validateStyleAst",
                value: function (e, t) {
                  var n = this,
                    r = t.currentAnimateTimings,
                    i = t.currentTime,
                    a = t.currentTime;
                  r && a > 0 && (a -= r.duration + r.delay),
                    e.styles.forEach(function (e) {
                      "string" != typeof e &&
                        Object.keys(e).forEach(function (r) {
                          if (n._driver.validateStyleProperty(r)) {
                            var o,
                              s,
                              u,
                              l,
                              c,
                              h = t.collectedStyles[t.currentQuerySelector],
                              f = h[r],
                              d = !0;
                            f &&
                              (a != i &&
                                a >= f.startTime &&
                                i <= f.endTime &&
                                (t.errors.push(
                                  'The CSS property "'
                                    .concat(
                                      r,
                                      '" that exists between the times of "'
                                    )
                                    .concat(f.startTime, 'ms" and "')
                                    .concat(
                                      f.endTime,
                                      'ms" is also being animated in a parallel animation between the times of "'
                                    )
                                    .concat(a, 'ms" and "')
                                    .concat(i, 'ms"')
                                ),
                                (d = !1)),
                              (a = f.startTime)),
                              d && (h[r] = { startTime: a, endTime: i }),
                              t.options &&
                                ((o = e[r]),
                                (s = t.options),
                                (u = t.errors),
                                (l = s.params || {}),
                                (c = Pv(o)).length &&
                                  c.forEach(function (e) {
                                    l.hasOwnProperty(e) ||
                                      u.push(
                                        "Unable to resolve the local animation param ".concat(
                                          e,
                                          " in the given list of values"
                                        )
                                      );
                                  }));
                          } else
                            t.errors.push(
                              'The provided animation property "'.concat(
                                r,
                                '" is not a supported CSS property for animations'
                              )
                            );
                        });
                    });
                },
              },
              {
                key: "visitKeyframes",
                value: function (e, t) {
                  var n = this,
                    r = { type: 5, styles: [], options: null };
                  if (!t.currentAnimateTimings)
                    return (
                      t.errors.push(
                        "keyframes() must be placed inside of a call to animate()"
                      ),
                      r
                    );
                  var i = 0,
                    a = [],
                    o = !1,
                    s = !1,
                    u = 0,
                    l = e.steps.map(function (e) {
                      var r = n._makeStyleAst(e, t),
                        l =
                          null != r.offset
                            ? r.offset
                            : (function (e) {
                                if ("string" == typeof e) return null;
                                var t = null;
                                if (Array.isArray(e))
                                  e.forEach(function (e) {
                                    if (qv(e) && e.hasOwnProperty("offset")) {
                                      var n = e;
                                      (t = parseFloat(n.offset)),
                                        delete n.offset;
                                    }
                                  });
                                else if (qv(e) && e.hasOwnProperty("offset")) {
                                  var n = e;
                                  (t = parseFloat(n.offset)), delete n.offset;
                                }
                                return t;
                              })(r.styles),
                        c = 0;
                      return (
                        null != l && (i++, (c = r.offset = l)),
                        (s = s || c < 0 || c > 1),
                        (o = o || c < u),
                        (u = c),
                        a.push(c),
                        r
                      );
                    });
                  s &&
                    t.errors.push(
                      "Please ensure that all keyframe offsets are between 0 and 1"
                    ),
                    o &&
                      t.errors.push(
                        "Please ensure that all keyframe offsets are in order"
                      );
                  var c = e.steps.length,
                    h = 0;
                  i > 0 && i < c
                    ? t.errors.push(
                        "Not all style() steps within the declared keyframes() contain offsets"
                      )
                    : 0 == i && (h = 1 / (c - 1));
                  var f = c - 1,
                    d = t.currentTime,
                    v = t.currentAnimateTimings,
                    p = v.duration;
                  return (
                    l.forEach(function (e, i) {
                      var o = h > 0 ? (i == f ? 1 : h * i) : a[i],
                        s = o * p;
                      (t.currentTime = d + v.delay + s),
                        (v.duration = s),
                        n._validateStyleAst(e, t),
                        (e.offset = o),
                        r.styles.push(e);
                    }),
                    r
                  );
                },
              },
              {
                key: "visitReference",
                value: function (e, t) {
                  return {
                    type: 8,
                    animation: Nv(this, Tv(e.animation), t),
                    options: Gv(e.options),
                  };
                },
              },
              {
                key: "visitAnimateChild",
                value: function (e, t) {
                  return t.depCount++, { type: 9, options: Gv(e.options) };
                },
              },
              {
                key: "visitAnimateRef",
                value: function (e, t) {
                  return {
                    type: 10,
                    animation: this.visitReference(e.animation, t),
                    options: Gv(e.options),
                  };
                },
              },
              {
                key: "visitQuery",
                value: function (e, t) {
                  var n = t.currentQuerySelector,
                    r = e.options || {};
                  t.queryCount++, (t.currentQuery = e);
                  var i = _slicedToArray(
                      (function (e) {
                        var t = !!e.split(/\s*,\s*/).find(function (e) {
                          return ":self" == e;
                        });
                        return (
                          t && (e = e.replace(Hv, "")),
                          [
                            (e = e
                              .replace(/@\*/g, ".ng-trigger")
                              .replace(/@\w+/g, function (e) {
                                return ".ng-trigger-" + e.substr(1);
                              })
                              .replace(/:animating/g, ".ng-animating")),
                            t,
                          ]
                        );
                      })(e.selector),
                      2
                    ),
                    a = i[0],
                    o = i[1];
                  (t.currentQuerySelector = n.length ? n + " " + a : a),
                    tv(t.collectedStyles, t.currentQuerySelector, {});
                  var s = Nv(this, Tv(e.animation), t);
                  return (
                    (t.currentQuery = null),
                    (t.currentQuerySelector = n),
                    {
                      type: 11,
                      selector: a,
                      limit: r.limit || 0,
                      optional: !!r.optional,
                      includeSelf: o,
                      animation: s,
                      originalSelector: e.selector,
                      options: Gv(e.options),
                    }
                  );
                },
              },
              {
                key: "visitStagger",
                value: function (e, t) {
                  t.currentQuery ||
                    t.errors.push(
                      "stagger() can only be used inside of query()"
                    );
                  var n =
                    "full" === e.timings
                      ? { duration: 0, delay: 0, easing: "full" }
                      : _v(e.timings, t.errors, !0);
                  return {
                    type: 12,
                    animation: Nv(this, Tv(e.animation), t),
                    timings: n,
                    options: null,
                  };
                },
              },
            ]),
            e
          );
        })(),
        Bv = function e(t) {
          _classCallCheck(this, e),
            (this.errors = t),
            (this.queryCount = 0),
            (this.depCount = 0),
            (this.currentTransition = null),
            (this.currentQuery = null),
            (this.currentQuerySelector = null),
            (this.currentAnimateTimings = null),
            (this.currentTime = 0),
            (this.collectedStyles = {}),
            (this.options = null);
        };
      function qv(e) {
        return !Array.isArray(e) && "object" == typeof e;
      }
      function Gv(e) {
        var t;
        return (
          e
            ? (e = kv(e)).params && (e.params = (t = e.params) ? kv(t) : null)
            : (e = {}),
          e
        );
      }
      function Wv(e, t, n) {
        return { duration: e, delay: t, easing: n };
      }
      function Kv(e, t, n, r, i, a) {
        var o =
            arguments.length > 6 && void 0 !== arguments[6]
              ? arguments[6]
              : null,
          s = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        return {
          type: 1,
          element: e,
          keyframes: t,
          preStyleProps: n,
          postStyleProps: r,
          duration: i,
          delay: a,
          totalTime: i + a,
          easing: o,
          subTimeline: s,
        };
      }
      var Zv = (function () {
          function e() {
            _classCallCheck(this, e), (this._map = new Map());
          }
          return (
            _createClass(e, [
              {
                key: "consume",
                value: function (e) {
                  var t = this._map.get(e);
                  return t ? this._map.delete(e) : (t = []), t;
                },
              },
              {
                key: "append",
                value: function (e, t) {
                  var n,
                    r = this._map.get(e);
                  r || this._map.set(e, (r = [])),
                    (n = r).push.apply(n, _toConsumableArray(t));
                },
              },
              {
                key: "has",
                value: function (e) {
                  return this._map.has(e);
                },
              },
              {
                key: "clear",
                value: function () {
                  this._map.clear();
                },
              },
            ]),
            e
          );
        })(),
        Qv = new RegExp(":enter", "g"),
        $v = new RegExp(":leave", "g");
      function Yv(e, t, n, r, i) {
        var a =
            arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
          o =
            arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {},
          s = arguments.length > 7 ? arguments[7] : void 0,
          u = arguments.length > 8 ? arguments[8] : void 0,
          l =
            arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : [];
        return new Jv().buildKeyframes(e, t, n, r, i, a, o, s, u, l);
      }
      var Jv = (function () {
          function e() {
            _classCallCheck(this, e);
          }
          return (
            _createClass(e, [
              {
                key: "buildKeyframes",
                value: function (e, t, n, r, i, a, o, s, u) {
                  var l =
                    arguments.length > 9 && void 0 !== arguments[9]
                      ? arguments[9]
                      : [];
                  u = u || new Zv();
                  var c = new ep(e, t, u, r, i, l, []);
                  (c.options = s),
                    c.currentTimeline.setStyles([a], null, c.errors, s),
                    Nv(this, n, c);
                  var h = c.timelines.filter(function (e) {
                    return e.containsAnimation();
                  });
                  if (h.length && Object.keys(o).length) {
                    var f = h[h.length - 1];
                    f.allowOnlyTimelineStyles() ||
                      f.setStyles([o], null, c.errors, s);
                  }
                  return h.length
                    ? h.map(function (e) {
                        return e.buildKeyframes();
                      })
                    : [Kv(t, [], [], [], 0, 0, "", !1)];
                },
              },
              { key: "visitTrigger", value: function (e, t) {} },
              { key: "visitState", value: function (e, t) {} },
              { key: "visitTransition", value: function (e, t) {} },
              {
                key: "visitAnimateChild",
                value: function (e, t) {
                  var n = t.subInstructions.consume(t.element);
                  if (n) {
                    var r = t.createSubContext(e.options),
                      i = t.currentTimeline.currentTime,
                      a = this._visitSubInstructions(n, r, r.options);
                    i != a && t.transformIntoNewTimeline(a);
                  }
                  t.previousNode = e;
                },
              },
              {
                key: "visitAnimateRef",
                value: function (e, t) {
                  var n = t.createSubContext(e.options);
                  n.transformIntoNewTimeline(),
                    this.visitReference(e.animation, n),
                    t.transformIntoNewTimeline(n.currentTimeline.currentTime),
                    (t.previousNode = e);
                },
              },
              {
                key: "_visitSubInstructions",
                value: function (e, t, n) {
                  var r = t.currentTimeline.currentTime,
                    i = null != n.duration ? gv(n.duration) : null,
                    a = null != n.delay ? gv(n.delay) : null;
                  return (
                    0 !== i &&
                      e.forEach(function (e) {
                        var n = t.appendInstructionToTimeline(e, i, a);
                        r = Math.max(r, n.duration + n.delay);
                      }),
                    r
                  );
                },
              },
              {
                key: "visitReference",
                value: function (e, t) {
                  t.updateOptions(e.options, !0),
                    Nv(this, e.animation, t),
                    (t.previousNode = e);
                },
              },
              {
                key: "visitSequence",
                value: function (e, t) {
                  var n = this,
                    r = t.subContextCount,
                    i = t,
                    a = e.options;
                  if (
                    a &&
                    (a.params || a.delay) &&
                    ((i = t.createSubContext(a)).transformIntoNewTimeline(),
                    null != a.delay)
                  ) {
                    6 == i.previousNode.type &&
                      (i.currentTimeline.snapshotCurrentStyles(),
                      (i.previousNode = Xv));
                    var o = gv(a.delay);
                    i.delayNextStep(o);
                  }
                  e.steps.length &&
                    (e.steps.forEach(function (e) {
                      return Nv(n, e, i);
                    }),
                    i.currentTimeline.applyStylesToKeyframe(),
                    i.subContextCount > r && i.transformIntoNewTimeline()),
                    (t.previousNode = e);
                },
              },
              {
                key: "visitGroup",
                value: function (e, t) {
                  var n = this,
                    r = [],
                    i = t.currentTimeline.currentTime,
                    a = e.options && e.options.delay ? gv(e.options.delay) : 0;
                  e.steps.forEach(function (o) {
                    var s = t.createSubContext(e.options);
                    a && s.delayNextStep(a),
                      Nv(n, o, s),
                      (i = Math.max(i, s.currentTimeline.currentTime)),
                      r.push(s.currentTimeline);
                  }),
                    r.forEach(function (e) {
                      return t.currentTimeline.mergeTimelineCollectedStyles(e);
                    }),
                    t.transformIntoNewTimeline(i),
                    (t.previousNode = e);
                },
              },
              {
                key: "_visitTiming",
                value: function (e, t) {
                  if (e.dynamic) {
                    var n = e.strValue;
                    return _v(
                      t.params ? Ov(n, t.params, t.errors) : n,
                      t.errors
                    );
                  }
                  return {
                    duration: e.duration,
                    delay: e.delay,
                    easing: e.easing,
                  };
                },
              },
              {
                key: "visitAnimate",
                value: function (e, t) {
                  var n = (t.currentAnimateTimings = this._visitTiming(
                      e.timings,
                      t
                    )),
                    r = t.currentTimeline;
                  n.delay &&
                    (t.incrementTime(n.delay), r.snapshotCurrentStyles());
                  var i = e.style;
                  5 == i.type
                    ? this.visitKeyframes(i, t)
                    : (t.incrementTime(n.duration),
                      this.visitStyle(i, t),
                      r.applyStylesToKeyframe()),
                    (t.currentAnimateTimings = null),
                    (t.previousNode = e);
                },
              },
              {
                key: "visitStyle",
                value: function (e, t) {
                  var n = t.currentTimeline,
                    r = t.currentAnimateTimings;
                  !r &&
                    n.getCurrentStyleProperties().length &&
                    n.forwardFrame();
                  var i = (r && r.easing) || e.easing;
                  e.isEmptyStep
                    ? n.applyEmptyStep(i)
                    : n.setStyles(e.styles, i, t.errors, t.options),
                    (t.previousNode = e);
                },
              },
              {
                key: "visitKeyframes",
                value: function (e, t) {
                  var n = t.currentAnimateTimings,
                    r = t.currentTimeline.duration,
                    i = n.duration,
                    a = t.createSubContext().currentTimeline;
                  (a.easing = n.easing),
                    e.styles.forEach(function (e) {
                      a.forwardTime((e.offset || 0) * i),
                        a.setStyles(e.styles, e.easing, t.errors, t.options),
                        a.applyStylesToKeyframe();
                    }),
                    t.currentTimeline.mergeTimelineCollectedStyles(a),
                    t.transformIntoNewTimeline(r + i),
                    (t.previousNode = e);
                },
              },
              {
                key: "visitQuery",
                value: function (e, t) {
                  var n = this,
                    r = t.currentTimeline.currentTime,
                    i = e.options || {},
                    a = i.delay ? gv(i.delay) : 0;
                  a &&
                    (6 === t.previousNode.type ||
                      (0 == r &&
                        t.currentTimeline.getCurrentStyleProperties()
                          .length)) &&
                    (t.currentTimeline.snapshotCurrentStyles(),
                    (t.previousNode = Xv));
                  var o = r,
                    s = t.invokeQuery(
                      e.selector,
                      e.originalSelector,
                      e.limit,
                      e.includeSelf,
                      !!i.optional,
                      t.errors
                    );
                  t.currentQueryTotal = s.length;
                  var u = null;
                  s.forEach(function (r, i) {
                    t.currentQueryIndex = i;
                    var s = t.createSubContext(e.options, r);
                    a && s.delayNextStep(a),
                      r === t.element && (u = s.currentTimeline),
                      Nv(n, e.animation, s),
                      s.currentTimeline.applyStylesToKeyframe(),
                      (o = Math.max(o, s.currentTimeline.currentTime));
                  }),
                    (t.currentQueryIndex = 0),
                    (t.currentQueryTotal = 0),
                    t.transformIntoNewTimeline(o),
                    u &&
                      (t.currentTimeline.mergeTimelineCollectedStyles(u),
                      t.currentTimeline.snapshotCurrentStyles()),
                    (t.previousNode = e);
                },
              },
              {
                key: "visitStagger",
                value: function (e, t) {
                  var n = t.parentContext,
                    r = t.currentTimeline,
                    i = e.timings,
                    a = Math.abs(i.duration),
                    o = a * (t.currentQueryTotal - 1),
                    s = a * t.currentQueryIndex;
                  switch (i.duration < 0 ? "reverse" : i.easing) {
                    case "reverse":
                      s = o - s;
                      break;
                    case "full":
                      s = n.currentStaggerTime;
                  }
                  var u = t.currentTimeline;
                  s && u.delayNextStep(s);
                  var l = u.currentTime;
                  Nv(this, e.animation, t),
                    (t.previousNode = e),
                    (n.currentStaggerTime =
                      r.currentTime -
                      l +
                      (r.startTime - n.currentTimeline.startTime));
                },
              },
            ]),
            e
          );
        })(),
        Xv = {},
        ep = (function () {
          function e(t, n, r, i, a, o, s, u) {
            _classCallCheck(this, e),
              (this._driver = t),
              (this.element = n),
              (this.subInstructions = r),
              (this._enterClassName = i),
              (this._leaveClassName = a),
              (this.errors = o),
              (this.timelines = s),
              (this.parentContext = null),
              (this.currentAnimateTimings = null),
              (this.previousNode = Xv),
              (this.subContextCount = 0),
              (this.options = {}),
              (this.currentQueryIndex = 0),
              (this.currentQueryTotal = 0),
              (this.currentStaggerTime = 0),
              (this.currentTimeline = u || new tp(this._driver, n, 0)),
              s.push(this.currentTimeline);
          }
          return (
            _createClass(e, [
              {
                key: "updateOptions",
                value: function (e, t) {
                  var n = this;
                  if (e) {
                    var r = e,
                      i = this.options;
                    null != r.duration && (i.duration = gv(r.duration)),
                      null != r.delay && (i.delay = gv(r.delay));
                    var a = r.params;
                    if (a) {
                      var o = i.params;
                      o || (o = this.options.params = {}),
                        Object.keys(a).forEach(function (e) {
                          (t && o.hasOwnProperty(e)) ||
                            (o[e] = Ov(a[e], o, n.errors));
                        });
                    }
                  }
                },
              },
              {
                key: "_copyOptions",
                value: function () {
                  var e = {};
                  if (this.options) {
                    var t = this.options.params;
                    if (t) {
                      var n = (e.params = {});
                      Object.keys(t).forEach(function (e) {
                        n[e] = t[e];
                      });
                    }
                  }
                  return e;
                },
              },
              {
                key: "createSubContext",
                value: function () {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null,
                    n = arguments.length > 1 ? arguments[1] : void 0,
                    r = arguments.length > 2 ? arguments[2] : void 0,
                    i = n || this.element,
                    a = new e(
                      this._driver,
                      i,
                      this.subInstructions,
                      this._enterClassName,
                      this._leaveClassName,
                      this.errors,
                      this.timelines,
                      this.currentTimeline.fork(i, r || 0)
                    );
                  return (
                    (a.previousNode = this.previousNode),
                    (a.currentAnimateTimings = this.currentAnimateTimings),
                    (a.options = this._copyOptions()),
                    a.updateOptions(t),
                    (a.currentQueryIndex = this.currentQueryIndex),
                    (a.currentQueryTotal = this.currentQueryTotal),
                    (a.parentContext = this),
                    this.subContextCount++,
                    a
                  );
                },
              },
              {
                key: "transformIntoNewTimeline",
                value: function (e) {
                  return (
                    (this.previousNode = Xv),
                    (this.currentTimeline = this.currentTimeline.fork(
                      this.element,
                      e
                    )),
                    this.timelines.push(this.currentTimeline),
                    this.currentTimeline
                  );
                },
              },
              {
                key: "appendInstructionToTimeline",
                value: function (e, t, n) {
                  var r = {
                      duration: null != t ? t : e.duration,
                      delay:
                        this.currentTimeline.currentTime +
                        (null != n ? n : 0) +
                        e.delay,
                      easing: "",
                    },
                    i = new np(
                      this._driver,
                      e.element,
                      e.keyframes,
                      e.preStyleProps,
                      e.postStyleProps,
                      r,
                      e.stretchStartingKeyframe
                    );
                  return this.timelines.push(i), r;
                },
              },
              {
                key: "incrementTime",
                value: function (e) {
                  this.currentTimeline.forwardTime(
                    this.currentTimeline.duration + e
                  );
                },
              },
              {
                key: "delayNextStep",
                value: function (e) {
                  e > 0 && this.currentTimeline.delayNextStep(e);
                },
              },
              {
                key: "invokeQuery",
                value: function (e, t, n, r, i, a) {
                  var o = [];
                  if ((r && o.push(this.element), e.length > 0)) {
                    e = (e = e.replace(Qv, "." + this._enterClassName)).replace(
                      $v,
                      "." + this._leaveClassName
                    );
                    var s = this._driver.query(this.element, e, 1 != n);
                    0 !== n &&
                      (s =
                        n < 0
                          ? s.slice(s.length + n, s.length)
                          : s.slice(0, n)),
                      o.push.apply(o, _toConsumableArray(s));
                  }
                  return (
                    i ||
                      0 != o.length ||
                      a.push(
                        '`query("'
                          .concat(
                            t,
                            '")` returned zero elements. (Use `query("'
                          )
                          .concat(
                            t,
                            '", { optional: true })` if you wish to allow this.)'
                          )
                      ),
                    o
                  );
                },
              },
              {
                key: "params",
                get: function () {
                  return this.options.params;
                },
              },
            ]),
            e
          );
        })(),
        tp = (function () {
          function e(t, n, r, i) {
            _classCallCheck(this, e),
              (this._driver = t),
              (this.element = n),
              (this.startTime = r),
              (this._elementTimelineStylesLookup = i),
              (this.duration = 0),
              (this._previousKeyframe = {}),
              (this._currentKeyframe = {}),
              (this._keyframes = new Map()),
              (this._styleSummary = {}),
              (this._pendingStyles = {}),
              (this._backFill = {}),
              (this._currentEmptyStepKeyframe = null),
              this._elementTimelineStylesLookup ||
                (this._elementTimelineStylesLookup = new Map()),
              (this._localTimelineStyles = Object.create(this._backFill, {})),
              (this._globalTimelineStyles = this._elementTimelineStylesLookup.get(
                n
              )),
              this._globalTimelineStyles ||
                ((this._globalTimelineStyles = this._localTimelineStyles),
                this._elementTimelineStylesLookup.set(
                  n,
                  this._localTimelineStyles
                )),
              this._loadKeyframe();
          }
          return (
            _createClass(e, [
              {
                key: "containsAnimation",
                value: function () {
                  switch (this._keyframes.size) {
                    case 0:
                      return !1;
                    case 1:
                      return this.getCurrentStyleProperties().length > 0;
                    default:
                      return !0;
                  }
                },
              },
              {
                key: "getCurrentStyleProperties",
                value: function () {
                  return Object.keys(this._currentKeyframe);
                },
              },
              {
                key: "delayNextStep",
                value: function (e) {
                  var t =
                    1 == this._keyframes.size &&
                    Object.keys(this._pendingStyles).length;
                  this.duration || t
                    ? (this.forwardTime(this.currentTime + e),
                      t && this.snapshotCurrentStyles())
                    : (this.startTime += e);
                },
              },
              {
                key: "fork",
                value: function (t, n) {
                  return (
                    this.applyStylesToKeyframe(),
                    new e(
                      this._driver,
                      t,
                      n || this.currentTime,
                      this._elementTimelineStylesLookup
                    )
                  );
                },
              },
              {
                key: "_loadKeyframe",
                value: function () {
                  this._currentKeyframe &&
                    (this._previousKeyframe = this._currentKeyframe),
                    (this._currentKeyframe = this._keyframes.get(
                      this.duration
                    )),
                    this._currentKeyframe ||
                      ((this._currentKeyframe = Object.create(
                        this._backFill,
                        {}
                      )),
                      this._keyframes.set(
                        this.duration,
                        this._currentKeyframe
                      ));
                },
              },
              {
                key: "forwardFrame",
                value: function () {
                  (this.duration += 1), this._loadKeyframe();
                },
              },
              {
                key: "forwardTime",
                value: function (e) {
                  this.applyStylesToKeyframe(),
                    (this.duration = e),
                    this._loadKeyframe();
                },
              },
              {
                key: "_updateStyle",
                value: function (e, t) {
                  (this._localTimelineStyles[e] = t),
                    (this._globalTimelineStyles[e] = t),
                    (this._styleSummary[e] = {
                      time: this.currentTime,
                      value: t,
                    });
                },
              },
              {
                key: "allowOnlyTimelineStyles",
                value: function () {
                  return (
                    this._currentEmptyStepKeyframe !== this._currentKeyframe
                  );
                },
              },
              {
                key: "applyEmptyStep",
                value: function (e) {
                  var t = this;
                  e && (this._previousKeyframe.easing = e),
                    Object.keys(this._globalTimelineStyles).forEach(function (
                      e
                    ) {
                      (t._backFill[e] = t._globalTimelineStyles[e] || "*"),
                        (t._currentKeyframe[e] = "*");
                    }),
                    (this._currentEmptyStepKeyframe = this._currentKeyframe);
                },
              },
              {
                key: "setStyles",
                value: function (e, t, n, r) {
                  var i = this;
                  t && (this._previousKeyframe.easing = t);
                  var a = (r && r.params) || {},
                    o = (function (e, t) {
                      var n,
                        r = {};
                      return (
                        e.forEach(function (e) {
                          "*" === e
                            ? (n = n || Object.keys(t)).forEach(function (e) {
                                r[e] = "*";
                              })
                            : Cv(e, !1, r);
                        }),
                        r
                      );
                    })(e, this._globalTimelineStyles);
                  Object.keys(o).forEach(function (e) {
                    var t = Ov(o[e], a, n);
                    (i._pendingStyles[e] = t),
                      i._localTimelineStyles.hasOwnProperty(e) ||
                        (i._backFill[
                          e
                        ] = i._globalTimelineStyles.hasOwnProperty(e)
                          ? i._globalTimelineStyles[e]
                          : "*"),
                      i._updateStyle(e, t);
                  });
                },
              },
              {
                key: "applyStylesToKeyframe",
                value: function () {
                  var e = this,
                    t = this._pendingStyles,
                    n = Object.keys(t);
                  0 != n.length &&
                    ((this._pendingStyles = {}),
                    n.forEach(function (n) {
                      e._currentKeyframe[n] = t[n];
                    }),
                    Object.keys(this._localTimelineStyles).forEach(function (
                      t
                    ) {
                      e._currentKeyframe.hasOwnProperty(t) ||
                        (e._currentKeyframe[t] = e._localTimelineStyles[t]);
                    }));
                },
              },
              {
                key: "snapshotCurrentStyles",
                value: function () {
                  var e = this;
                  Object.keys(this._localTimelineStyles).forEach(function (t) {
                    var n = e._localTimelineStyles[t];
                    (e._pendingStyles[t] = n), e._updateStyle(t, n);
                  });
                },
              },
              {
                key: "getFinalKeyframe",
                value: function () {
                  return this._keyframes.get(this.duration);
                },
              },
              {
                key: "mergeTimelineCollectedStyles",
                value: function (e) {
                  var t = this;
                  Object.keys(e._styleSummary).forEach(function (n) {
                    var r = t._styleSummary[n],
                      i = e._styleSummary[n];
                    (!r || i.time > r.time) && t._updateStyle(n, i.value);
                  });
                },
              },
              {
                key: "buildKeyframes",
                value: function () {
                  var e = this;
                  this.applyStylesToKeyframe();
                  var t = new Set(),
                    n = new Set(),
                    r = 1 === this._keyframes.size && 0 === this.duration,
                    i = [];
                  this._keyframes.forEach(function (a, o) {
                    var s = Cv(a, !0);
                    Object.keys(s).forEach(function (e) {
                      var r = s[e];
                      "!" == r ? t.add(e) : "*" == r && n.add(e);
                    }),
                      r || (s.offset = o / e.duration),
                      i.push(s);
                  });
                  var a = t.size ? Av(t.values()) : [],
                    o = n.size ? Av(n.values()) : [];
                  if (r) {
                    var s = i[0],
                      u = kv(s);
                    (s.offset = 0), (u.offset = 1), (i = [s, u]);
                  }
                  return Kv(
                    this.element,
                    i,
                    a,
                    o,
                    this.duration,
                    this.startTime,
                    this.easing,
                    !1
                  );
                },
              },
              {
                key: "currentTime",
                get: function () {
                  return this.startTime + this.duration;
                },
              },
              {
                key: "properties",
                get: function () {
                  var e = [];
                  for (var t in this._currentKeyframe) e.push(t);
                  return e;
                },
              },
            ]),
            e
          );
        })(),
        np = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r, i, a, o, s) {
            var u,
              l =
                arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            return (
              _classCallCheck(this, n),
              ((u = t.call(this, e, r, s.delay)).element = r),
              (u.keyframes = i),
              (u.preStyleProps = a),
              (u.postStyleProps = o),
              (u._stretchStartingKeyframe = l),
              (u.timings = {
                duration: s.duration,
                delay: s.delay,
                easing: s.easing,
              }),
              u
            );
          }
          return (
            _createClass(n, [
              {
                key: "containsAnimation",
                value: function () {
                  return this.keyframes.length > 1;
                },
              },
              {
                key: "buildKeyframes",
                value: function () {
                  var e = this.keyframes,
                    t = this.timings,
                    n = t.delay,
                    r = t.duration,
                    i = t.easing;
                  if (this._stretchStartingKeyframe && n) {
                    var a = [],
                      o = r + n,
                      s = n / o,
                      u = Cv(e[0], !1);
                    (u.offset = 0), a.push(u);
                    var l = Cv(e[0], !1);
                    (l.offset = rp(s)), a.push(l);
                    for (var c = e.length - 1, h = 1; h <= c; h++) {
                      var f = Cv(e[h], !1);
                      (f.offset = rp((n + f.offset * r) / o)), a.push(f);
                    }
                    (r = o), (n = 0), (i = ""), (e = a);
                  }
                  return Kv(
                    this.element,
                    e,
                    this.preStyleProps,
                    this.postStyleProps,
                    r,
                    n,
                    i,
                    !0
                  );
                },
              },
            ]),
            n
          );
        })(tp);
      function rp(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
          n = Math.pow(10, t - 1);
        return Math.round(e * n) / n;
      }
      var ip = function e() {
          _classCallCheck(this, e);
        },
        ap = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n() {
            return _classCallCheck(this, n), t.apply(this, arguments);
          }
          return (
            _createClass(n, [
              {
                key: "normalizePropertyName",
                value: function (e, t) {
                  return Rv(e);
                },
              },
              {
                key: "normalizeStyleValue",
                value: function (e, t, n, r) {
                  var i = "",
                    a = n.toString().trim();
                  if (op[t] && 0 !== n && "0" !== n)
                    if ("number" == typeof n) i = "px";
                    else {
                      var o = n.match(/^[+-]?[\d\.]+([a-z]*)$/);
                      o &&
                        0 == o[1].length &&
                        r.push(
                          "Please provide a CSS unit value for "
                            .concat(e, ":")
                            .concat(n)
                        );
                    }
                  return a + i;
                },
              },
            ]),
            n
          );
        })(ip),
        op = (function (e) {
          var t = {};
          return (
            e.forEach(function (e) {
              return (t[e] = !0);
            }),
            t
          );
        })(
          "width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective".split(
            ","
          )
        );
      function sp(e, t, n, r, i, a, o, s, u, l, c, h, f) {
        return {
          type: 0,
          element: e,
          triggerName: t,
          isRemovalTransition: i,
          fromState: n,
          fromStyles: a,
          toState: r,
          toStyles: o,
          timelines: s,
          queriedElements: u,
          preStyleProps: l,
          postStyleProps: c,
          totalTime: h,
          errors: f,
        };
      }
      var up = {},
        lp = (function () {
          function e(t, n, r) {
            _classCallCheck(this, e),
              (this._triggerName = t),
              (this.ast = n),
              (this._stateStyles = r);
          }
          return (
            _createClass(e, [
              {
                key: "match",
                value: function (e, t, n, r) {
                  return (function (e, t, n, r, i) {
                    return e.some(function (e) {
                      return e(t, n, r, i);
                    });
                  })(this.ast.matchers, e, t, n, r);
                },
              },
              {
                key: "buildStyles",
                value: function (e, t, n) {
                  var r = this._stateStyles["*"],
                    i = this._stateStyles[e],
                    a = r ? r.buildStyles(t, n) : {};
                  return i ? i.buildStyles(t, n) : a;
                },
              },
              {
                key: "build",
                value: function (e, t, n, r, i, a, o, s, u, l) {
                  var c = [],
                    h = (this.ast.options && this.ast.options.params) || up,
                    f = this.buildStyles(n, (o && o.params) || up, c),
                    d = (s && s.params) || up,
                    v = this.buildStyles(r, d, c),
                    p = new Set(),
                    y = new Map(),
                    g = new Map(),
                    m = "void" === r,
                    _ = { params: Object.assign(Object.assign({}, h), d) },
                    k = l
                      ? []
                      : Yv(e, t, this.ast.animation, i, a, f, v, _, u, c),
                    C = 0;
                  if (
                    (k.forEach(function (e) {
                      C = Math.max(e.duration + e.delay, C);
                    }),
                    c.length)
                  )
                    return sp(
                      t,
                      this._triggerName,
                      n,
                      r,
                      m,
                      f,
                      v,
                      [],
                      [],
                      y,
                      g,
                      C,
                      c
                    );
                  k.forEach(function (e) {
                    var n = e.element,
                      r = tv(y, n, {});
                    e.preStyleProps.forEach(function (e) {
                      return (r[e] = !0);
                    });
                    var i = tv(g, n, {});
                    e.postStyleProps.forEach(function (e) {
                      return (i[e] = !0);
                    }),
                      n !== t && p.add(n);
                  });
                  var w = Av(p.values());
                  return sp(t, this._triggerName, n, r, m, f, v, k, w, y, g, C);
                },
              },
            ]),
            e
          );
        })(),
        cp = (function () {
          function e(t, n) {
            _classCallCheck(this, e),
              (this.styles = t),
              (this.defaultParams = n);
          }
          return (
            _createClass(e, [
              {
                key: "buildStyles",
                value: function (e, t) {
                  var n = {},
                    r = kv(this.defaultParams);
                  return (
                    Object.keys(e).forEach(function (t) {
                      var n = e[t];
                      null != n && (r[t] = n);
                    }),
                    this.styles.styles.forEach(function (e) {
                      if ("string" != typeof e) {
                        var i = e;
                        Object.keys(i).forEach(function (e) {
                          var a = i[e];
                          a.length > 1 && (a = Ov(a, r, t)), (n[e] = a);
                        });
                      }
                    }),
                    n
                  );
                },
              },
            ]),
            e
          );
        })(),
        hp = (function () {
          function e(t, n) {
            var r = this;
            _classCallCheck(this, e),
              (this.name = t),
              (this.ast = n),
              (this.transitionFactories = []),
              (this.states = {}),
              n.states.forEach(function (e) {
                r.states[e.name] = new cp(
                  e.style,
                  (e.options && e.options.params) || {}
                );
              }),
              fp(this.states, "true", "1"),
              fp(this.states, "false", "0"),
              n.transitions.forEach(function (e) {
                r.transitionFactories.push(new lp(t, e, r.states));
              }),
              (this.fallbackTransition = new lp(
                t,
                {
                  type: 1,
                  animation: { type: 2, steps: [], options: null },
                  matchers: [
                    function (e, t) {
                      return !0;
                    },
                  ],
                  options: null,
                  queryCount: 0,
                  depCount: 0,
                },
                this.states
              ));
          }
          return (
            _createClass(e, [
              {
                key: "matchTransition",
                value: function (e, t, n, r) {
                  return (
                    this.transitionFactories.find(function (i) {
                      return i.match(e, t, n, r);
                    }) || null
                  );
                },
              },
              {
                key: "matchStyles",
                value: function (e, t, n) {
                  return this.fallbackTransition.buildStyles(e, t, n);
                },
              },
              {
                key: "containsQueries",
                get: function () {
                  return this.ast.queryCount > 0;
                },
              },
            ]),
            e
          );
        })();
      function fp(e, t, n) {
        e.hasOwnProperty(t)
          ? e.hasOwnProperty(n) || (e[n] = e[t])
          : e.hasOwnProperty(n) && (e[t] = e[n]);
      }
      var dp = new Zv(),
        vp = (function () {
          function e(t, n, r) {
            _classCallCheck(this, e),
              (this.bodyNode = t),
              (this._driver = n),
              (this._normalizer = r),
              (this._animations = {}),
              (this._playersById = {}),
              (this.players = []);
          }
          return (
            _createClass(e, [
              {
                key: "register",
                value: function (e, t) {
                  var n = [],
                    r = Vv(this._driver, t, n);
                  if (n.length)
                    throw new Error(
                      "Unable to build the animation due to the following errors: " +
                        n.join("\n")
                    );
                  this._animations[e] = r;
                },
              },
              {
                key: "_buildPlayer",
                value: function (e, t, n) {
                  var r = e.element,
                    i = Yd(0, this._normalizer, 0, e.keyframes, t, n);
                  return this._driver.animate(
                    r,
                    i,
                    e.duration,
                    e.delay,
                    e.easing,
                    [],
                    !0
                  );
                },
              },
              {
                key: "create",
                value: function (e, t) {
                  var n,
                    r = this,
                    i =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {},
                    a = [],
                    o = this._animations[e],
                    s = new Map();
                  if (
                    (o
                      ? (n = Yv(
                          this._driver,
                          t,
                          o,
                          "ng-enter",
                          "ng-leave",
                          {},
                          {},
                          i,
                          dp,
                          a
                        )).forEach(function (e) {
                          var t = tv(s, e.element, {});
                          e.postStyleProps.forEach(function (e) {
                            return (t[e] = null);
                          });
                        })
                      : (a.push(
                          "The requested animation doesn't exist or has already been destroyed"
                        ),
                        (n = [])),
                    a.length)
                  )
                    throw new Error(
                      "Unable to create the animation due to the following errors: " +
                        a.join("\n")
                    );
                  s.forEach(function (e, t) {
                    Object.keys(e).forEach(function (n) {
                      e[n] = r._driver.computeStyle(t, n, "*");
                    });
                  });
                  var u = $d(
                    n.map(function (e) {
                      var t = s.get(e.element);
                      return r._buildPlayer(e, {}, t);
                    })
                  );
                  return (
                    (this._playersById[e] = u),
                    u.onDestroy(function () {
                      return r.destroy(e);
                    }),
                    this.players.push(u),
                    u
                  );
                },
              },
              {
                key: "destroy",
                value: function (e) {
                  var t = this._getPlayer(e);
                  t.destroy(), delete this._playersById[e];
                  var n = this.players.indexOf(t);
                  n >= 0 && this.players.splice(n, 1);
                },
              },
              {
                key: "_getPlayer",
                value: function (e) {
                  var t = this._playersById[e];
                  if (!t)
                    throw new Error(
                      "Unable to find the timeline player referenced by " + e
                    );
                  return t;
                },
              },
              {
                key: "listen",
                value: function (e, t, n, r) {
                  var i = ev(t, "", "", "");
                  return Jd(this._getPlayer(e), n, i, r), function () {};
                },
              },
              {
                key: "command",
                value: function (e, t, n, r) {
                  if ("register" != n)
                    if ("create" != n) {
                      var i = this._getPlayer(e);
                      switch (n) {
                        case "play":
                          i.play();
                          break;
                        case "pause":
                          i.pause();
                          break;
                        case "reset":
                          i.reset();
                          break;
                        case "restart":
                          i.restart();
                          break;
                        case "finish":
                          i.finish();
                          break;
                        case "init":
                          i.init();
                          break;
                        case "setPosition":
                          i.setPosition(parseFloat(r[0]));
                          break;
                        case "destroy":
                          this.destroy(e);
                      }
                    } else this.create(e, t, r[0] || {});
                  else this.register(e, r[0]);
                },
              },
            ]),
            e
          );
        })(),
        pp = [],
        yp = {
          namespaceId: "",
          setForRemoval: !1,
          setForMove: !1,
          hasAnimation: !1,
          removedBeforeQueried: !1,
        },
        gp = {
          namespaceId: "",
          setForMove: !1,
          setForRemoval: !1,
          hasAnimation: !1,
          removedBeforeQueried: !0,
        },
        mp = (function () {
          function e(t) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "";
            _classCallCheck(this, e), (this.namespaceId = n);
            var r,
              i = t && t.hasOwnProperty("value");
            if (((this.value = null != (r = i ? t.value : t) ? r : null), i)) {
              var a = kv(t);
              delete a.value, (this.options = a);
            } else this.options = {};
            this.options.params || (this.options.params = {});
          }
          return (
            _createClass(e, [
              {
                key: "absorbOptions",
                value: function (e) {
                  var t = e.params;
                  if (t) {
                    var n = this.options.params;
                    Object.keys(t).forEach(function (e) {
                      null == n[e] && (n[e] = t[e]);
                    });
                  }
                },
              },
              {
                key: "params",
                get: function () {
                  return this.options.params;
                },
              },
            ]),
            e
          );
        })(),
        _p = new mp("void"),
        kp = (function () {
          function e(t, n, r) {
            _classCallCheck(this, e),
              (this.id = t),
              (this.hostElement = n),
              (this._engine = r),
              (this.players = []),
              (this._triggers = {}),
              (this._queue = []),
              (this._elementListeners = new Map()),
              (this._hostClassName = "ng-tns-" + t),
              xp(n, this._hostClassName);
          }
          return (
            _createClass(e, [
              {
                key: "listen",
                value: function (e, t, n, r) {
                  var i,
                    a = this;
                  if (!this._triggers.hasOwnProperty(t))
                    throw new Error(
                      'Unable to listen on the animation trigger event "'
                        .concat(n, '" because the animation trigger "')
                        .concat(t, "\" doesn't exist!")
                    );
                  if (null == n || 0 == n.length)
                    throw new Error(
                      'Unable to listen on the animation trigger "'.concat(
                        t,
                        '" because the provided event is undefined!'
                      )
                    );
                  if ("start" != (i = n) && "done" != i)
                    throw new Error(
                      'The provided animation trigger event "'
                        .concat(n, '" for the animation trigger "')
                        .concat(t, '" is not supported!')
                    );
                  var o = tv(this._elementListeners, e, []),
                    s = { name: t, phase: n, callback: r };
                  o.push(s);
                  var u = tv(this._engine.statesByElement, e, {});
                  return (
                    u.hasOwnProperty(t) ||
                      (xp(e, "ng-trigger"),
                      xp(e, "ng-trigger-" + t),
                      (u[t] = _p)),
                    function () {
                      a._engine.afterFlush(function () {
                        var e = o.indexOf(s);
                        e >= 0 && o.splice(e, 1), a._triggers[t] || delete u[t];
                      });
                    }
                  );
                },
              },
              {
                key: "register",
                value: function (e, t) {
                  return !this._triggers[e] && ((this._triggers[e] = t), !0);
                },
              },
              {
                key: "_getTrigger",
                value: function (e) {
                  var t = this._triggers[e];
                  if (!t)
                    throw new Error(
                      'The provided animation trigger "'.concat(
                        e,
                        '" has not been registered!'
                      )
                    );
                  return t;
                },
              },
              {
                key: "trigger",
                value: function (e, t, n) {
                  var r = this,
                    i =
                      !(arguments.length > 3 && void 0 !== arguments[3]) ||
                      arguments[3],
                    a = this._getTrigger(t),
                    o = new wp(this.id, t, e),
                    s = this._engine.statesByElement.get(e);
                  s ||
                    (xp(e, "ng-trigger"),
                    xp(e, "ng-trigger-" + t),
                    this._engine.statesByElement.set(e, (s = {})));
                  var u = s[t],
                    l = new mp(n, this.id);
                  if (
                    (!(n && n.hasOwnProperty("value")) &&
                      u &&
                      l.absorbOptions(u.options),
                    (s[t] = l),
                    u || (u = _p),
                    "void" === l.value || u.value !== l.value)
                  ) {
                    var c = tv(this._engine.playersByElement, e, []);
                    c.forEach(function (e) {
                      e.namespaceId == r.id &&
                        e.triggerName == t &&
                        e.queued &&
                        e.destroy();
                    });
                    var h = a.matchTransition(u.value, l.value, e, l.params),
                      f = !1;
                    if (!h) {
                      if (!i) return;
                      (h = a.fallbackTransition), (f = !0);
                    }
                    return (
                      this._engine.totalQueuedPlayers++,
                      this._queue.push({
                        element: e,
                        triggerName: t,
                        transition: h,
                        fromState: u,
                        toState: l,
                        player: o,
                        isFallbackTransition: f,
                      }),
                      f ||
                        (xp(e, "ng-animate-queued"),
                        o.onStart(function () {
                          Pp(e, "ng-animate-queued");
                        })),
                      o.onDone(function () {
                        var t = r.players.indexOf(o);
                        t >= 0 && r.players.splice(t, 1);
                        var n = r._engine.playersByElement.get(e);
                        if (n) {
                          var i = n.indexOf(o);
                          i >= 0 && n.splice(i, 1);
                        }
                      }),
                      this.players.push(o),
                      c.push(o),
                      o
                    );
                  }
                  if (
                    !(function (e, t) {
                      var n = Object.keys(e),
                        r = Object.keys(t);
                      if (n.length != r.length) return !1;
                      for (var i = 0; i < n.length; i++) {
                        var a = n[i];
                        if (!t.hasOwnProperty(a) || e[a] !== t[a]) return !1;
                      }
                      return !0;
                    })(u.params, l.params)
                  ) {
                    var d = [],
                      v = a.matchStyles(u.value, u.params, d),
                      p = a.matchStyles(l.value, l.params, d);
                    d.length
                      ? this._engine.reportError(d)
                      : this._engine.afterFlush(function () {
                          Ev(e, v), Sv(e, p);
                        });
                  }
                },
              },
              {
                key: "deregister",
                value: function (e) {
                  var t = this;
                  delete this._triggers[e],
                    this._engine.statesByElement.forEach(function (t, n) {
                      delete t[e];
                    }),
                    this._elementListeners.forEach(function (n, r) {
                      t._elementListeners.set(
                        r,
                        n.filter(function (t) {
                          return t.name != e;
                        })
                      );
                    });
                },
              },
              {
                key: "clearElementCache",
                value: function (e) {
                  this._engine.statesByElement.delete(e),
                    this._elementListeners.delete(e);
                  var t = this._engine.playersByElement.get(e);
                  t &&
                    (t.forEach(function (e) {
                      return e.destroy();
                    }),
                    this._engine.playersByElement.delete(e));
                },
              },
              {
                key: "_signalRemovalForInnerTriggers",
                value: function (e, t) {
                  var n = this,
                    r = this._engine.driver.query(e, ".ng-trigger", !0);
                  r.forEach(function (e) {
                    if (!e.__ng_removed) {
                      var r = n._engine.fetchNamespacesByElement(e);
                      r.size
                        ? r.forEach(function (n) {
                            return n.triggerLeaveAnimation(e, t, !1, !0);
                          })
                        : n.clearElementCache(e);
                    }
                  }),
                    this._engine.afterFlushAnimationsDone(function () {
                      return r.forEach(function (e) {
                        return n.clearElementCache(e);
                      });
                    });
                },
              },
              {
                key: "triggerLeaveAnimation",
                value: function (e, t, n, r) {
                  var i = this,
                    a = this._engine.statesByElement.get(e);
                  if (a) {
                    var o = [];
                    if (
                      (Object.keys(a).forEach(function (t) {
                        if (i._triggers[t]) {
                          var n = i.trigger(e, t, "void", r);
                          n && o.push(n);
                        }
                      }),
                      o.length)
                    )
                      return (
                        this._engine.markElementAsRemoved(this.id, e, !0, t),
                        n &&
                          $d(o).onDone(function () {
                            return i._engine.processLeaveNode(e);
                          }),
                        !0
                      );
                  }
                  return !1;
                },
              },
              {
                key: "prepareLeaveAnimationListeners",
                value: function (e) {
                  var t = this,
                    n = this._elementListeners.get(e);
                  if (n) {
                    var r = new Set();
                    n.forEach(function (n) {
                      var i = n.name;
                      if (!r.has(i)) {
                        r.add(i);
                        var a = t._triggers[i].fallbackTransition,
                          o = t._engine.statesByElement.get(e)[i] || _p,
                          s = new mp("void"),
                          u = new wp(t.id, i, e);
                        t._engine.totalQueuedPlayers++,
                          t._queue.push({
                            element: e,
                            triggerName: i,
                            transition: a,
                            fromState: o,
                            toState: s,
                            player: u,
                            isFallbackTransition: !0,
                          });
                      }
                    });
                  }
                },
              },
              {
                key: "removeNode",
                value: function (e, t) {
                  var n = this,
                    r = this._engine;
                  if (
                    (e.childElementCount &&
                      this._signalRemovalForInnerTriggers(e, t),
                    !this.triggerLeaveAnimation(e, t, !0))
                  ) {
                    var i = !1;
                    if (r.totalAnimations) {
                      var a = r.players.length
                        ? r.playersByQueriedElement.get(e)
                        : [];
                      if (a && a.length) i = !0;
                      else
                        for (var o = e; (o = o.parentNode); )
                          if (r.statesByElement.get(o)) {
                            i = !0;
                            break;
                          }
                    }
                    if ((this.prepareLeaveAnimationListeners(e), i))
                      r.markElementAsRemoved(this.id, e, !1, t);
                    else {
                      var s = e.__ng_removed;
                      (s && s !== yp) ||
                        (r.afterFlush(function () {
                          return n.clearElementCache(e);
                        }),
                        r.destroyInnerAnimations(e),
                        r._onRemovalComplete(e, t));
                    }
                  }
                },
              },
              {
                key: "insertNode",
                value: function (e, t) {
                  xp(e, this._hostClassName);
                },
              },
              {
                key: "drainQueuedTransitions",
                value: function (e) {
                  var t = this,
                    n = [];
                  return (
                    this._queue.forEach(function (r) {
                      var i = r.player;
                      if (!i.destroyed) {
                        var a = r.element,
                          o = t._elementListeners.get(a);
                        o &&
                          o.forEach(function (t) {
                            if (t.name == r.triggerName) {
                              var n = ev(
                                a,
                                r.triggerName,
                                r.fromState.value,
                                r.toState.value
                              );
                              (n._data = e),
                                Jd(r.player, t.phase, n, t.callback);
                            }
                          }),
                          i.markedForDestroy
                            ? t._engine.afterFlush(function () {
                                i.destroy();
                              })
                            : n.push(r);
                      }
                    }),
                    (this._queue = []),
                    n.sort(function (e, n) {
                      var r = e.transition.ast.depCount,
                        i = n.transition.ast.depCount;
                      return 0 == r || 0 == i
                        ? r - i
                        : t._engine.driver.containsElement(e.element, n.element)
                        ? 1
                        : -1;
                    })
                  );
                },
              },
              {
                key: "destroy",
                value: function (e) {
                  this.players.forEach(function (e) {
                    return e.destroy();
                  }),
                    this._signalRemovalForInnerTriggers(this.hostElement, e);
                },
              },
              {
                key: "elementContainsData",
                value: function (e) {
                  var t = !1;
                  return (
                    this._elementListeners.has(e) && (t = !0),
                    (t =
                      !!this._queue.find(function (t) {
                        return t.element === e;
                      }) || t)
                  );
                },
              },
            ]),
            e
          );
        })(),
        Cp = (function () {
          function e(t, n, r) {
            _classCallCheck(this, e),
              (this.bodyNode = t),
              (this.driver = n),
              (this._normalizer = r),
              (this.players = []),
              (this.newHostElements = new Map()),
              (this.playersByElement = new Map()),
              (this.playersByQueriedElement = new Map()),
              (this.statesByElement = new Map()),
              (this.disabledNodes = new Set()),
              (this.totalAnimations = 0),
              (this.totalQueuedPlayers = 0),
              (this._namespaceLookup = {}),
              (this._namespaceList = []),
              (this._flushFns = []),
              (this._whenQuietFns = []),
              (this.namespacesByHostElement = new Map()),
              (this.collectedEnterElements = []),
              (this.collectedLeaveElements = []),
              (this.onRemovalComplete = function (e, t) {});
          }
          return (
            _createClass(e, [
              {
                key: "_onRemovalComplete",
                value: function (e, t) {
                  this.onRemovalComplete(e, t);
                },
              },
              {
                key: "createNamespace",
                value: function (e, t) {
                  var n = new kp(e, t, this);
                  return (
                    t.parentNode
                      ? this._balanceNamespaceList(n, t)
                      : (this.newHostElements.set(t, n),
                        this.collectEnterElement(t)),
                    (this._namespaceLookup[e] = n)
                  );
                },
              },
              {
                key: "_balanceNamespaceList",
                value: function (e, t) {
                  var n = this._namespaceList.length - 1;
                  if (n >= 0) {
                    for (var r = !1, i = n; i >= 0; i--)
                      if (
                        this.driver.containsElement(
                          this._namespaceList[i].hostElement,
                          t
                        )
                      ) {
                        this._namespaceList.splice(i + 1, 0, e), (r = !0);
                        break;
                      }
                    r || this._namespaceList.splice(0, 0, e);
                  } else this._namespaceList.push(e);
                  return this.namespacesByHostElement.set(t, e), e;
                },
              },
              {
                key: "register",
                value: function (e, t) {
                  var n = this._namespaceLookup[e];
                  return n || (n = this.createNamespace(e, t)), n;
                },
              },
              {
                key: "registerTrigger",
                value: function (e, t, n) {
                  var r = this._namespaceLookup[e];
                  r && r.register(t, n) && this.totalAnimations++;
                },
              },
              {
                key: "destroy",
                value: function (e, t) {
                  var n = this;
                  if (e) {
                    var r = this._fetchNamespace(e);
                    this.afterFlush(function () {
                      n.namespacesByHostElement.delete(r.hostElement),
                        delete n._namespaceLookup[e];
                      var t = n._namespaceList.indexOf(r);
                      t >= 0 && n._namespaceList.splice(t, 1);
                    }),
                      this.afterFlushAnimationsDone(function () {
                        return r.destroy(t);
                      });
                  }
                },
              },
              {
                key: "_fetchNamespace",
                value: function (e) {
                  return this._namespaceLookup[e];
                },
              },
              {
                key: "fetchNamespacesByElement",
                value: function (e) {
                  var t = new Set(),
                    n = this.statesByElement.get(e);
                  if (n)
                    for (var r = Object.keys(n), i = 0; i < r.length; i++) {
                      var a = n[r[i]].namespaceId;
                      if (a) {
                        var o = this._fetchNamespace(a);
                        o && t.add(o);
                      }
                    }
                  return t;
                },
              },
              {
                key: "trigger",
                value: function (e, t, n, r) {
                  if (bp(t)) {
                    var i = this._fetchNamespace(e);
                    if (i) return i.trigger(t, n, r), !0;
                  }
                  return !1;
                },
              },
              {
                key: "insertNode",
                value: function (e, t, n, r) {
                  if (bp(t)) {
                    var i = t.__ng_removed;
                    if (i && i.setForRemoval) {
                      (i.setForRemoval = !1), (i.setForMove = !0);
                      var a = this.collectedLeaveElements.indexOf(t);
                      a >= 0 && this.collectedLeaveElements.splice(a, 1);
                    }
                    if (e) {
                      var o = this._fetchNamespace(e);
                      o && o.insertNode(t, n);
                    }
                    r && this.collectEnterElement(t);
                  }
                },
              },
              {
                key: "collectEnterElement",
                value: function (e) {
                  this.collectedEnterElements.push(e);
                },
              },
              {
                key: "markElementAsDisabled",
                value: function (e, t) {
                  t
                    ? this.disabledNodes.has(e) ||
                      (this.disabledNodes.add(e), xp(e, "ng-animate-disabled"))
                    : this.disabledNodes.has(e) &&
                      (this.disabledNodes.delete(e),
                      Pp(e, "ng-animate-disabled"));
                },
              },
              {
                key: "removeNode",
                value: function (e, t, n, r) {
                  if (bp(t)) {
                    var i = e ? this._fetchNamespace(e) : null;
                    if (
                      (i
                        ? i.removeNode(t, r)
                        : this.markElementAsRemoved(e, t, !1, r),
                      n)
                    ) {
                      var a = this.namespacesByHostElement.get(t);
                      a && a.id !== e && a.removeNode(t, r);
                    }
                  } else this._onRemovalComplete(t, r);
                },
              },
              {
                key: "markElementAsRemoved",
                value: function (e, t, n, r) {
                  this.collectedLeaveElements.push(t),
                    (t.__ng_removed = {
                      namespaceId: e,
                      setForRemoval: r,
                      hasAnimation: n,
                      removedBeforeQueried: !1,
                    });
                },
              },
              {
                key: "listen",
                value: function (e, t, n, r, i) {
                  return bp(t)
                    ? this._fetchNamespace(e).listen(t, n, r, i)
                    : function () {};
                },
              },
              {
                key: "_buildInstruction",
                value: function (e, t, n, r, i) {
                  return e.transition.build(
                    this.driver,
                    e.element,
                    e.fromState.value,
                    e.toState.value,
                    n,
                    r,
                    e.fromState.options,
                    e.toState.options,
                    t,
                    i
                  );
                },
              },
              {
                key: "destroyInnerAnimations",
                value: function (e) {
                  var t = this,
                    n = this.driver.query(e, ".ng-trigger", !0);
                  n.forEach(function (e) {
                    return t.destroyActiveAnimationsForElement(e);
                  }),
                    0 != this.playersByQueriedElement.size &&
                      (n = this.driver.query(e, ".ng-animating", !0)).forEach(
                        function (e) {
                          return t.finishActiveQueriedAnimationOnElement(e);
                        }
                      );
                },
              },
              {
                key: "destroyActiveAnimationsForElement",
                value: function (e) {
                  var t = this.playersByElement.get(e);
                  t &&
                    t.forEach(function (e) {
                      e.queued ? (e.markedForDestroy = !0) : e.destroy();
                    });
                },
              },
              {
                key: "finishActiveQueriedAnimationOnElement",
                value: function (e) {
                  var t = this.playersByQueriedElement.get(e);
                  t &&
                    t.forEach(function (e) {
                      return e.finish();
                    });
                },
              },
              {
                key: "whenRenderingDone",
                value: function () {
                  var e = this;
                  return new Promise(function (t) {
                    if (e.players.length)
                      return $d(e.players).onDone(function () {
                        return t();
                      });
                    t();
                  });
                },
              },
              {
                key: "processLeaveNode",
                value: function (e) {
                  var t = this,
                    n = e.__ng_removed;
                  if (n && n.setForRemoval) {
                    if (((e.__ng_removed = yp), n.namespaceId)) {
                      this.destroyInnerAnimations(e);
                      var r = this._fetchNamespace(n.namespaceId);
                      r && r.clearElementCache(e);
                    }
                    this._onRemovalComplete(e, n.setForRemoval);
                  }
                  this.driver.matchesElement(e, ".ng-animate-disabled") &&
                    this.markElementAsDisabled(e, !1),
                    this.driver
                      .query(e, ".ng-animate-disabled", !0)
                      .forEach(function (e) {
                        t.markElementAsDisabled(e, !1);
                      });
                },
              },
              {
                key: "flush",
                value: function () {
                  var e = this,
                    t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : -1,
                    n = [];
                  if (
                    (this.newHostElements.size &&
                      (this.newHostElements.forEach(function (t, n) {
                        return e._balanceNamespaceList(t, n);
                      }),
                      this.newHostElements.clear()),
                    this.totalAnimations && this.collectedEnterElements.length)
                  )
                    for (var r = 0; r < this.collectedEnterElements.length; r++)
                      xp(this.collectedEnterElements[r], "ng-star-inserted");
                  if (
                    this._namespaceList.length &&
                    (this.totalQueuedPlayers ||
                      this.collectedLeaveElements.length)
                  ) {
                    var i = [];
                    try {
                      n = this._flushAnimations(i, t);
                    } finally {
                      for (var a = 0; a < i.length; a++) i[a]();
                    }
                  } else
                    for (var o = 0; o < this.collectedLeaveElements.length; o++)
                      this.processLeaveNode(this.collectedLeaveElements[o]);
                  if (
                    ((this.totalQueuedPlayers = 0),
                    (this.collectedEnterElements.length = 0),
                    (this.collectedLeaveElements.length = 0),
                    this._flushFns.forEach(function (e) {
                      return e();
                    }),
                    (this._flushFns = []),
                    this._whenQuietFns.length)
                  ) {
                    var s = this._whenQuietFns;
                    (this._whenQuietFns = []),
                      n.length
                        ? $d(n).onDone(function () {
                            s.forEach(function (e) {
                              return e();
                            });
                          })
                        : s.forEach(function (e) {
                            return e();
                          });
                  }
                },
              },
              {
                key: "reportError",
                value: function (e) {
                  throw new Error(
                    "Unable to process animations due to the following failed trigger transitions\n " +
                      e.join("\n")
                  );
                },
              },
              {
                key: "_flushAnimations",
                value: function (e, t) {
                  var n = this,
                    r = new Zv(),
                    i = [],
                    a = new Map(),
                    o = [],
                    s = new Map(),
                    u = new Map(),
                    l = new Map(),
                    c = new Set();
                  this.disabledNodes.forEach(function (e) {
                    c.add(e);
                    for (
                      var t = n.driver.query(e, ".ng-animate-queued", !0),
                        r = 0;
                      r < t.length;
                      r++
                    )
                      c.add(t[r]);
                  });
                  var h = this.bodyNode,
                    f = Array.from(this.statesByElement.keys()),
                    d = Tp(f, this.collectedEnterElements),
                    v = new Map(),
                    p = 0;
                  d.forEach(function (e, t) {
                    var n = "ng-enter" + p++;
                    v.set(t, n),
                      e.forEach(function (e) {
                        return xp(e, n);
                      });
                  });
                  for (
                    var y = [], g = new Set(), m = new Set(), _ = 0;
                    _ < this.collectedLeaveElements.length;
                    _++
                  ) {
                    var k = this.collectedLeaveElements[_],
                      C = k.__ng_removed;
                    C &&
                      C.setForRemoval &&
                      (y.push(k),
                      g.add(k),
                      C.hasAnimation
                        ? this.driver
                            .query(k, ".ng-star-inserted", !0)
                            .forEach(function (e) {
                              return g.add(e);
                            })
                        : m.add(k));
                  }
                  var w = new Map(),
                    b = Tp(f, Array.from(g));
                  b.forEach(function (e, t) {
                    var n = "ng-leave" + p++;
                    w.set(t, n),
                      e.forEach(function (e) {
                        return xp(e, n);
                      });
                  }),
                    e.push(function () {
                      d.forEach(function (e, t) {
                        var n = v.get(t);
                        e.forEach(function (e) {
                          return Pp(e, n);
                        });
                      }),
                        b.forEach(function (e, t) {
                          var n = w.get(t);
                          e.forEach(function (e) {
                            return Pp(e, n);
                          });
                        }),
                        y.forEach(function (e) {
                          n.processLeaveNode(e);
                        });
                    });
                  for (
                    var S = [], E = [], T = this._namespaceList.length - 1;
                    T >= 0;
                    T--
                  )
                    this._namespaceList[T].drainQueuedTransitions(t).forEach(
                      function (e) {
                        var t = e.player,
                          a = e.element;
                        if ((S.push(t), n.collectedEnterElements.length)) {
                          var c = a.__ng_removed;
                          if (c && c.setForMove) return void t.destroy();
                        }
                        var f = !h || !n.driver.containsElement(h, a),
                          d = w.get(a),
                          p = v.get(a),
                          y = n._buildInstruction(e, r, p, d, f);
                        if (y.errors && y.errors.length) E.push(y);
                        else {
                          if (f)
                            return (
                              t.onStart(function () {
                                return Ev(a, y.fromStyles);
                              }),
                              t.onDestroy(function () {
                                return Sv(a, y.toStyles);
                              }),
                              void i.push(t)
                            );
                          if (e.isFallbackTransition)
                            return (
                              t.onStart(function () {
                                return Ev(a, y.fromStyles);
                              }),
                              t.onDestroy(function () {
                                return Sv(a, y.toStyles);
                              }),
                              void i.push(t)
                            );
                          y.timelines.forEach(function (e) {
                            return (e.stretchStartingKeyframe = !0);
                          }),
                            r.append(a, y.timelines),
                            o.push({ instruction: y, player: t, element: a }),
                            y.queriedElements.forEach(function (e) {
                              return tv(s, e, []).push(t);
                            }),
                            y.preStyleProps.forEach(function (e, t) {
                              var n = Object.keys(e);
                              if (n.length) {
                                var r = u.get(t);
                                r || u.set(t, (r = new Set())),
                                  n.forEach(function (e) {
                                    return r.add(e);
                                  });
                              }
                            }),
                            y.postStyleProps.forEach(function (e, t) {
                              var n = Object.keys(e),
                                r = l.get(t);
                              r || l.set(t, (r = new Set())),
                                n.forEach(function (e) {
                                  return r.add(e);
                                });
                            });
                        }
                      }
                    );
                  if (E.length) {
                    var x = [];
                    E.forEach(function (e) {
                      x.push(
                        "@".concat(e.triggerName, " has failed due to:\n")
                      ),
                        e.errors.forEach(function (e) {
                          return x.push("- ".concat(e, "\n"));
                        });
                    }),
                      S.forEach(function (e) {
                        return e.destroy();
                      }),
                      this.reportError(x);
                  }
                  var P = new Map(),
                    O = new Map();
                  o.forEach(function (e) {
                    var t = e.element;
                    r.has(t) &&
                      (O.set(t, t),
                      n._beforeAnimationBuild(
                        e.player.namespaceId,
                        e.instruction,
                        P
                      ));
                  }),
                    i.forEach(function (e) {
                      var t = e.element;
                      n._getPreviousPlayers(
                        t,
                        !1,
                        e.namespaceId,
                        e.triggerName,
                        null
                      ).forEach(function (e) {
                        tv(P, t, []).push(e), e.destroy();
                      });
                    });
                  var A = y.filter(function (e) {
                      return Ap(e, u, l);
                    }),
                    I = new Map();
                  Ep(I, this.driver, m, l, "*").forEach(function (e) {
                    Ap(e, u, l) && A.push(e);
                  });
                  var R = new Map();
                  d.forEach(function (e, t) {
                    Ep(R, n.driver, new Set(e), u, "!");
                  }),
                    A.forEach(function (e) {
                      var t = I.get(e),
                        n = R.get(e);
                      I.set(e, Object.assign(Object.assign({}, t), n));
                    });
                  var D = [],
                    M = [],
                    N = {};
                  o.forEach(function (e) {
                    var t = e.element,
                      o = e.player,
                      s = e.instruction;
                    if (r.has(t)) {
                      if (c.has(t))
                        return (
                          o.onDestroy(function () {
                            return Sv(t, s.toStyles);
                          }),
                          (o.disabled = !0),
                          o.overrideTotalTime(s.totalTime),
                          void i.push(o)
                        );
                      var u = N;
                      if (O.size > 1) {
                        for (var l = t, h = []; (l = l.parentNode); ) {
                          var f = O.get(l);
                          if (f) {
                            u = f;
                            break;
                          }
                          h.push(l);
                        }
                        h.forEach(function (e) {
                          return O.set(e, u);
                        });
                      }
                      var d = n._buildAnimation(o.namespaceId, s, P, a, R, I);
                      if ((o.setRealPlayer(d), u === N)) D.push(o);
                      else {
                        var v = n.playersByElement.get(u);
                        v && v.length && (o.parentPlayer = $d(v)), i.push(o);
                      }
                    } else
                      Ev(t, s.fromStyles),
                        o.onDestroy(function () {
                          return Sv(t, s.toStyles);
                        }),
                        M.push(o),
                        c.has(t) && i.push(o);
                  }),
                    M.forEach(function (e) {
                      var t = a.get(e.element);
                      if (t && t.length) {
                        var n = $d(t);
                        e.setRealPlayer(n);
                      }
                    }),
                    i.forEach(function (e) {
                      e.parentPlayer
                        ? e.syncPlayerEvents(e.parentPlayer)
                        : e.destroy();
                    });
                  for (var F = 0; F < y.length; F++) {
                    var j = y[F],
                      L = j.__ng_removed;
                    if ((Pp(j, "ng-leave"), !L || !L.hasAnimation)) {
                      var U = [];
                      if (s.size) {
                        var H = s.get(j);
                        H && H.length && U.push.apply(U, _toConsumableArray(H));
                        for (
                          var V = this.driver.query(j, ".ng-animating", !0),
                            z = 0;
                          z < V.length;
                          z++
                        ) {
                          var B = s.get(V[z]);
                          B &&
                            B.length &&
                            U.push.apply(U, _toConsumableArray(B));
                        }
                      }
                      var q = U.filter(function (e) {
                        return !e.destroyed;
                      });
                      q.length ? Op(this, j, q) : this.processLeaveNode(j);
                    }
                  }
                  return (
                    (y.length = 0),
                    D.forEach(function (e) {
                      n.players.push(e),
                        e.onDone(function () {
                          e.destroy();
                          var t = n.players.indexOf(e);
                          n.players.splice(t, 1);
                        }),
                        e.play();
                    }),
                    D
                  );
                },
              },
              {
                key: "elementContainsData",
                value: function (e, t) {
                  var n = !1,
                    r = t.__ng_removed;
                  return (
                    r && r.setForRemoval && (n = !0),
                    this.playersByElement.has(t) && (n = !0),
                    this.playersByQueriedElement.has(t) && (n = !0),
                    this.statesByElement.has(t) && (n = !0),
                    this._fetchNamespace(e).elementContainsData(t) || n
                  );
                },
              },
              {
                key: "afterFlush",
                value: function (e) {
                  this._flushFns.push(e);
                },
              },
              {
                key: "afterFlushAnimationsDone",
                value: function (e) {
                  this._whenQuietFns.push(e);
                },
              },
              {
                key: "_getPreviousPlayers",
                value: function (e, t, n, r, i) {
                  var a = [];
                  if (t) {
                    var o = this.playersByQueriedElement.get(e);
                    o && (a = o);
                  } else {
                    var s = this.playersByElement.get(e);
                    if (s) {
                      var u = !i || "void" == i;
                      s.forEach(function (e) {
                        e.queued || ((u || e.triggerName == r) && a.push(e));
                      });
                    }
                  }
                  return (
                    (n || r) &&
                      (a = a.filter(function (e) {
                        return !(
                          (n && n != e.namespaceId) ||
                          (r && r != e.triggerName)
                        );
                      })),
                    a
                  );
                },
              },
              {
                key: "_beforeAnimationBuild",
                value: function (e, t, n) {
                  var r,
                    i = this,
                    a = t.element,
                    o = t.isRemovalTransition ? void 0 : e,
                    s = t.isRemovalTransition ? void 0 : t.triggerName,
                    u = _createForOfIteratorHelper(t.timelines);
                  try {
                    var l = function () {
                      var e = r.value.element,
                        u = e !== a,
                        l = tv(n, e, []);
                      i._getPreviousPlayers(e, u, o, s, t.toState).forEach(
                        function (e) {
                          var t = e.getRealPlayer();
                          t.beforeDestroy && t.beforeDestroy(),
                            e.destroy(),
                            l.push(e);
                        }
                      );
                    };
                    for (u.s(); !(r = u.n()).done; ) l();
                  } catch (c) {
                    u.e(c);
                  } finally {
                    u.f();
                  }
                  Ev(a, t.fromStyles);
                },
              },
              {
                key: "_buildAnimation",
                value: function (e, t, n, r, i, a) {
                  var o = this,
                    s = t.triggerName,
                    u = t.element,
                    l = [],
                    c = new Set(),
                    h = new Set(),
                    f = t.timelines.map(function (t) {
                      var f = t.element;
                      c.add(f);
                      var d = f.__ng_removed;
                      if (d && d.removedBeforeQueried)
                        return new Kd(t.duration, t.delay);
                      var v,
                        p,
                        y = f !== u,
                        g = ((v = (n.get(f) || pp).map(function (e) {
                          return e.getRealPlayer();
                        })),
                        (p = []),
                        (function e(t, n) {
                          for (var r = 0; r < t.length; r++) {
                            var i = t[r];
                            i instanceof Zd ? e(i.players, n) : n.push(i);
                          }
                        })(v, p),
                        p).filter(function (e) {
                          return !!e.element && e.element === f;
                        }),
                        m = i.get(f),
                        _ = a.get(f),
                        k = Yd(0, o._normalizer, 0, t.keyframes, m, _),
                        C = o._buildPlayer(t, k, g);
                      if ((t.subTimeline && r && h.add(f), y)) {
                        var w = new wp(e, s, f);
                        w.setRealPlayer(C), l.push(w);
                      }
                      return C;
                    });
                  l.forEach(function (e) {
                    tv(o.playersByQueriedElement, e.element, []).push(e),
                      e.onDone(function () {
                        return (function (e, t, n) {
                          var r;
                          if (e instanceof Map) {
                            if ((r = e.get(t))) {
                              if (r.length) {
                                var i = r.indexOf(n);
                                r.splice(i, 1);
                              }
                              0 == r.length && e.delete(t);
                            }
                          } else if ((r = e[t])) {
                            if (r.length) {
                              var a = r.indexOf(n);
                              r.splice(a, 1);
                            }
                            0 == r.length && delete e[t];
                          }
                          return r;
                        })(o.playersByQueriedElement, e.element, e);
                      });
                  }),
                    c.forEach(function (e) {
                      return xp(e, "ng-animating");
                    });
                  var d = $d(f);
                  return (
                    d.onDestroy(function () {
                      c.forEach(function (e) {
                        return Pp(e, "ng-animating");
                      }),
                        Sv(u, t.toStyles);
                    }),
                    h.forEach(function (e) {
                      tv(r, e, []).push(d);
                    }),
                    d
                  );
                },
              },
              {
                key: "_buildPlayer",
                value: function (e, t, n) {
                  return t.length > 0
                    ? this.driver.animate(
                        e.element,
                        t,
                        e.duration,
                        e.delay,
                        e.easing,
                        n
                      )
                    : new Kd(e.duration, e.delay);
                },
              },
              {
                key: "queuedPlayers",
                get: function () {
                  var e = [];
                  return (
                    this._namespaceList.forEach(function (t) {
                      t.players.forEach(function (t) {
                        t.queued && e.push(t);
                      });
                    }),
                    e
                  );
                },
              },
            ]),
            e
          );
        })(),
        wp = (function () {
          function e(t, n, r) {
            _classCallCheck(this, e),
              (this.namespaceId = t),
              (this.triggerName = n),
              (this.element = r),
              (this._player = new Kd()),
              (this._containsRealPlayer = !1),
              (this._queuedCallbacks = {}),
              (this.destroyed = !1),
              (this.markedForDestroy = !1),
              (this.disabled = !1),
              (this.queued = !0),
              (this.totalTime = 0);
          }
          return (
            _createClass(e, [
              {
                key: "setRealPlayer",
                value: function (e) {
                  var t = this;
                  this._containsRealPlayer ||
                    ((this._player = e),
                    Object.keys(this._queuedCallbacks).forEach(function (n) {
                      t._queuedCallbacks[n].forEach(function (t) {
                        return Jd(e, n, void 0, t);
                      });
                    }),
                    (this._queuedCallbacks = {}),
                    (this._containsRealPlayer = !0),
                    this.overrideTotalTime(e.totalTime),
                    (this.queued = !1));
                },
              },
              {
                key: "getRealPlayer",
                value: function () {
                  return this._player;
                },
              },
              {
                key: "overrideTotalTime",
                value: function (e) {
                  this.totalTime = e;
                },
              },
              {
                key: "syncPlayerEvents",
                value: function (e) {
                  var t = this,
                    n = this._player;
                  n.triggerCallback &&
                    e.onStart(function () {
                      return n.triggerCallback("start");
                    }),
                    e.onDone(function () {
                      return t.finish();
                    }),
                    e.onDestroy(function () {
                      return t.destroy();
                    });
                },
              },
              {
                key: "_queueEvent",
                value: function (e, t) {
                  tv(this._queuedCallbacks, e, []).push(t);
                },
              },
              {
                key: "onDone",
                value: function (e) {
                  this.queued && this._queueEvent("done", e),
                    this._player.onDone(e);
                },
              },
              {
                key: "onStart",
                value: function (e) {
                  this.queued && this._queueEvent("start", e),
                    this._player.onStart(e);
                },
              },
              {
                key: "onDestroy",
                value: function (e) {
                  this.queued && this._queueEvent("destroy", e),
                    this._player.onDestroy(e);
                },
              },
              {
                key: "init",
                value: function () {
                  this._player.init();
                },
              },
              {
                key: "hasStarted",
                value: function () {
                  return !this.queued && this._player.hasStarted();
                },
              },
              {
                key: "play",
                value: function () {
                  !this.queued && this._player.play();
                },
              },
              {
                key: "pause",
                value: function () {
                  !this.queued && this._player.pause();
                },
              },
              {
                key: "restart",
                value: function () {
                  !this.queued && this._player.restart();
                },
              },
              {
                key: "finish",
                value: function () {
                  this._player.finish();
                },
              },
              {
                key: "destroy",
                value: function () {
                  (this.destroyed = !0), this._player.destroy();
                },
              },
              {
                key: "reset",
                value: function () {
                  !this.queued && this._player.reset();
                },
              },
              {
                key: "setPosition",
                value: function (e) {
                  this.queued || this._player.setPosition(e);
                },
              },
              {
                key: "getPosition",
                value: function () {
                  return this.queued ? 0 : this._player.getPosition();
                },
              },
              {
                key: "triggerCallback",
                value: function (e) {
                  var t = this._player;
                  t.triggerCallback && t.triggerCallback(e);
                },
              },
            ]),
            e
          );
        })();
      function bp(e) {
        return e && 1 === e.nodeType;
      }
      function Sp(e, t) {
        var n = e.style.display;
        return (e.style.display = null != t ? t : "none"), n;
      }
      function Ep(e, t, n, r, i) {
        var a = [];
        n.forEach(function (e) {
          return a.push(Sp(e));
        });
        var o = [];
        r.forEach(function (n, r) {
          var a = {};
          n.forEach(function (e) {
            var n = (a[e] = t.computeStyle(r, e, i));
            (n && 0 != n.length) || ((r.__ng_removed = gp), o.push(r));
          }),
            e.set(r, a);
        });
        var s = 0;
        return (
          n.forEach(function (e) {
            return Sp(e, a[s++]);
          }),
          o
        );
      }
      function Tp(e, t) {
        var n = new Map();
        if (
          (e.forEach(function (e) {
            return n.set(e, []);
          }),
          0 == t.length)
        )
          return n;
        var r = new Set(t),
          i = new Map();
        return (
          t.forEach(function (e) {
            var t = (function e(t) {
              if (!t) return 1;
              var a = i.get(t);
              if (a) return a;
              var o = t.parentNode;
              return (a = n.has(o) ? o : r.has(o) ? 1 : e(o)), i.set(t, a), a;
            })(e);
            1 !== t && n.get(t).push(e);
          }),
          n
        );
      }
      function xp(e, t) {
        if (e.classList) e.classList.add(t);
        else {
          var n = e.$$classes;
          n || (n = e.$$classes = {}), (n[t] = !0);
        }
      }
      function Pp(e, t) {
        if (e.classList) e.classList.remove(t);
        else {
          var n = e.$$classes;
          n && delete n[t];
        }
      }
      function Op(e, t, n) {
        $d(n).onDone(function () {
          return e.processLeaveNode(t);
        });
      }
      function Ap(e, t, n) {
        var r = n.get(e);
        if (!r) return !1;
        var i = t.get(e);
        return (
          i
            ? r.forEach(function (e) {
                return i.add(e);
              })
            : t.set(e, r),
          n.delete(e),
          !0
        );
      }
      var Ip = (function () {
        function e(t, n, r) {
          var i = this;
          _classCallCheck(this, e),
            (this.bodyNode = t),
            (this._driver = n),
            (this._triggerCache = {}),
            (this.onRemovalComplete = function (e, t) {}),
            (this._transitionEngine = new Cp(t, n, r)),
            (this._timelineEngine = new vp(t, n, r)),
            (this._transitionEngine.onRemovalComplete = function (e, t) {
              return i.onRemovalComplete(e, t);
            });
        }
        return (
          _createClass(e, [
            {
              key: "registerTrigger",
              value: function (e, t, n, r, i) {
                var a = e + "-" + r,
                  o = this._triggerCache[a];
                if (!o) {
                  var s = [],
                    u = Vv(this._driver, i, s);
                  if (s.length)
                    throw new Error(
                      'The animation trigger "'
                        .concat(
                          r,
                          '" has failed to build due to the following errors:\n - '
                        )
                        .concat(s.join("\n - "))
                    );
                  (o = (function (e, t) {
                    return new hp(e, t);
                  })(r, u)),
                    (this._triggerCache[a] = o);
                }
                this._transitionEngine.registerTrigger(t, r, o);
              },
            },
            {
              key: "register",
              value: function (e, t) {
                this._transitionEngine.register(e, t);
              },
            },
            {
              key: "destroy",
              value: function (e, t) {
                this._transitionEngine.destroy(e, t);
              },
            },
            {
              key: "onInsert",
              value: function (e, t, n, r) {
                this._transitionEngine.insertNode(e, t, n, r);
              },
            },
            {
              key: "onRemove",
              value: function (e, t, n, r) {
                this._transitionEngine.removeNode(e, t, r || !1, n);
              },
            },
            {
              key: "disableAnimations",
              value: function (e, t) {
                this._transitionEngine.markElementAsDisabled(e, t);
              },
            },
            {
              key: "process",
              value: function (e, t, n, r) {
                if ("@" == n.charAt(0)) {
                  var i = _slicedToArray(nv(n), 2),
                    a = i[0],
                    o = i[1];
                  this._timelineEngine.command(a, t, o, r);
                } else this._transitionEngine.trigger(e, t, n, r);
              },
            },
            {
              key: "listen",
              value: function (e, t, n, r, i) {
                if ("@" == n.charAt(0)) {
                  var a = _slicedToArray(nv(n), 2),
                    o = a[0],
                    s = a[1];
                  return this._timelineEngine.listen(o, t, s, i);
                }
                return this._transitionEngine.listen(e, t, n, r, i);
              },
            },
            {
              key: "flush",
              value: function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : -1;
                this._transitionEngine.flush(e);
              },
            },
            {
              key: "whenRenderingDone",
              value: function () {
                return this._transitionEngine.whenRenderingDone();
              },
            },
            {
              key: "players",
              get: function () {
                return this._transitionEngine.players.concat(
                  this._timelineEngine.players
                );
              },
            },
          ]),
          e
        );
      })();
      function Rp(e, t) {
        var n = null,
          r = null;
        return (
          Array.isArray(t) && t.length
            ? ((n = Mp(t[0])), t.length > 1 && (r = Mp(t[t.length - 1])))
            : t && (n = Mp(t)),
          n || r ? new Dp(e, n, r) : null
        );
      }
      var Dp = (function () {
        var e = (function () {
          function e(t, n, r) {
            _classCallCheck(this, e),
              (this._element = t),
              (this._startStyles = n),
              (this._endStyles = r),
              (this._state = 0);
            var i = e.initialStylesByElement.get(t);
            i || e.initialStylesByElement.set(t, (i = {})),
              (this._initialStyles = i);
          }
          return (
            _createClass(e, [
              {
                key: "start",
                value: function () {
                  this._state < 1 &&
                    (this._startStyles &&
                      Sv(this._element, this._startStyles, this._initialStyles),
                    (this._state = 1));
                },
              },
              {
                key: "finish",
                value: function () {
                  this.start(),
                    this._state < 2 &&
                      (Sv(this._element, this._initialStyles),
                      this._endStyles &&
                        (Sv(this._element, this._endStyles),
                        (this._endStyles = null)),
                      (this._state = 1));
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.finish(),
                    this._state < 3 &&
                      (e.initialStylesByElement.delete(this._element),
                      this._startStyles &&
                        (Ev(this._element, this._startStyles),
                        (this._endStyles = null)),
                      this._endStyles &&
                        (Ev(this._element, this._endStyles),
                        (this._endStyles = null)),
                      Sv(this._element, this._initialStyles),
                      (this._state = 3));
                },
              },
            ]),
            e
          );
        })();
        return (e.initialStylesByElement = new WeakMap()), e;
      })();
      function Mp(e) {
        for (var t = null, n = Object.keys(e), r = 0; r < n.length; r++) {
          var i = n[r];
          Np(i) && ((t = t || {})[i] = e[i]);
        }
        return t;
      }
      function Np(e) {
        return "display" === e || "position" === e;
      }
      var Fp = (function () {
        function e(t, n, r, i, a, o, s) {
          var u = this;
          _classCallCheck(this, e),
            (this._element = t),
            (this._name = n),
            (this._duration = r),
            (this._delay = i),
            (this._easing = a),
            (this._fillMode = o),
            (this._onDoneFn = s),
            (this._finished = !1),
            (this._destroyed = !1),
            (this._startTime = 0),
            (this._position = 0),
            (this._eventFn = function (e) {
              return u._handleCallback(e);
            });
        }
        return (
          _createClass(e, [
            {
              key: "apply",
              value: function () {
                var e, t, n;
                (e = this._element),
                  (t = ""
                    .concat(this._duration, "ms ")
                    .concat(this._easing, " ")
                    .concat(this._delay, "ms 1 normal ")
                    .concat(this._fillMode, " ")
                    .concat(this._name)),
                  (n = zp(e, "").trim()).length &&
                    ((function (e, t) {
                      for (var n = 0; n < e.length; n++) e.charAt(n);
                    })(n),
                    (t = "".concat(n, ", ").concat(t))),
                  Vp(e, "", t),
                  Hp(this._element, this._eventFn, !1),
                  (this._startTime = Date.now());
              },
            },
            {
              key: "pause",
              value: function () {
                jp(this._element, this._name, "paused");
              },
            },
            {
              key: "resume",
              value: function () {
                jp(this._element, this._name, "running");
              },
            },
            {
              key: "setPosition",
              value: function (e) {
                var t = Lp(this._element, this._name);
                (this._position = e * this._duration),
                  Vp(
                    this._element,
                    "Delay",
                    "-".concat(this._position, "ms"),
                    t
                  );
              },
            },
            {
              key: "getPosition",
              value: function () {
                return this._position;
              },
            },
            {
              key: "_handleCallback",
              value: function (e) {
                var t = e._ngTestManualTimestamp || Date.now(),
                  n = 1e3 * parseFloat(e.elapsedTime.toFixed(3));
                e.animationName == this._name &&
                  Math.max(t - this._startTime, 0) >= this._delay &&
                  n >= this._duration &&
                  this.finish();
              },
            },
            {
              key: "finish",
              value: function () {
                this._finished ||
                  ((this._finished = !0),
                  this._onDoneFn(),
                  Hp(this._element, this._eventFn, !0));
              },
            },
            {
              key: "destroy",
              value: function () {
                var e, t, n, r;
                this._destroyed ||
                  ((this._destroyed = !0),
                  this.finish(),
                  (e = this._element),
                  (t = this._name),
                  (n = zp(e, "").split(",")),
                  (r = Up(n, t)) >= 0 &&
                    (n.splice(r, 1), Vp(e, "", n.join(","))));
              },
            },
          ]),
          e
        );
      })();
      function jp(e, t, n) {
        Vp(e, "PlayState", n, Lp(e, t));
      }
      function Lp(e, t) {
        var n = zp(e, "");
        return n.indexOf(",") > 0 ? Up(n.split(","), t) : Up([n], t);
      }
      function Up(e, t) {
        for (var n = 0; n < e.length; n++) if (e[n].indexOf(t) >= 0) return n;
        return -1;
      }
      function Hp(e, t, n) {
        n
          ? e.removeEventListener("animationend", t)
          : e.addEventListener("animationend", t);
      }
      function Vp(e, t, n, r) {
        var i = "animation" + t;
        if (null != r) {
          var a = e.style[i];
          if (a.length) {
            var o = a.split(",");
            (o[r] = n), (n = o.join(","));
          }
        }
        e.style[i] = n;
      }
      function zp(e, t) {
        return e.style["animation" + t];
      }
      var Bp = (function () {
          function e(t, n, r, i, a, o, s, u) {
            _classCallCheck(this, e),
              (this.element = t),
              (this.keyframes = n),
              (this.animationName = r),
              (this._duration = i),
              (this._delay = a),
              (this._finalStyles = s),
              (this._specialStyles = u),
              (this._onDoneFns = []),
              (this._onStartFns = []),
              (this._onDestroyFns = []),
              (this._started = !1),
              (this.currentSnapshot = {}),
              (this._state = 0),
              (this.easing = o || "linear"),
              (this.totalTime = i + a),
              this._buildStyler();
          }
          return (
            _createClass(e, [
              {
                key: "onStart",
                value: function (e) {
                  this._onStartFns.push(e);
                },
              },
              {
                key: "onDone",
                value: function (e) {
                  this._onDoneFns.push(e);
                },
              },
              {
                key: "onDestroy",
                value: function (e) {
                  this._onDestroyFns.push(e);
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.init(),
                    this._state >= 4 ||
                      ((this._state = 4),
                      this._styler.destroy(),
                      this._flushStartFns(),
                      this._flushDoneFns(),
                      this._specialStyles && this._specialStyles.destroy(),
                      this._onDestroyFns.forEach(function (e) {
                        return e();
                      }),
                      (this._onDestroyFns = []));
                },
              },
              {
                key: "_flushDoneFns",
                value: function () {
                  this._onDoneFns.forEach(function (e) {
                    return e();
                  }),
                    (this._onDoneFns = []);
                },
              },
              {
                key: "_flushStartFns",
                value: function () {
                  this._onStartFns.forEach(function (e) {
                    return e();
                  }),
                    (this._onStartFns = []);
                },
              },
              {
                key: "finish",
                value: function () {
                  this.init(),
                    this._state >= 3 ||
                      ((this._state = 3),
                      this._styler.finish(),
                      this._flushStartFns(),
                      this._specialStyles && this._specialStyles.finish(),
                      this._flushDoneFns());
                },
              },
              {
                key: "setPosition",
                value: function (e) {
                  this._styler.setPosition(e);
                },
              },
              {
                key: "getPosition",
                value: function () {
                  return this._styler.getPosition();
                },
              },
              {
                key: "hasStarted",
                value: function () {
                  return this._state >= 2;
                },
              },
              {
                key: "init",
                value: function () {
                  this._state >= 1 ||
                    ((this._state = 1),
                    this._styler.apply(),
                    this._delay && this._styler.pause());
                },
              },
              {
                key: "play",
                value: function () {
                  this.init(),
                    this.hasStarted() ||
                      (this._flushStartFns(),
                      (this._state = 2),
                      this._specialStyles && this._specialStyles.start()),
                    this._styler.resume();
                },
              },
              {
                key: "pause",
                value: function () {
                  this.init(), this._styler.pause();
                },
              },
              {
                key: "restart",
                value: function () {
                  this.reset(), this.play();
                },
              },
              {
                key: "reset",
                value: function () {
                  this._styler.destroy(),
                    this._buildStyler(),
                    this._styler.apply();
                },
              },
              {
                key: "_buildStyler",
                value: function () {
                  var e = this;
                  this._styler = new Fp(
                    this.element,
                    this.animationName,
                    this._duration,
                    this._delay,
                    this.easing,
                    "forwards",
                    function () {
                      return e.finish();
                    }
                  );
                },
              },
              {
                key: "triggerCallback",
                value: function (e) {
                  var t = "start" == e ? this._onStartFns : this._onDoneFns;
                  t.forEach(function (e) {
                    return e();
                  }),
                    (t.length = 0);
                },
              },
              {
                key: "beforeDestroy",
                value: function () {
                  var e = this;
                  this.init();
                  var t = {};
                  if (this.hasStarted()) {
                    var n = this._state >= 3;
                    Object.keys(this._finalStyles).forEach(function (r) {
                      "offset" != r &&
                        (t[r] = n ? e._finalStyles[r] : Fv(e.element, r));
                    });
                  }
                  this.currentSnapshot = t;
                },
              },
            ]),
            e
          );
        })(),
        qp = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r) {
            var i;
            return (
              _classCallCheck(this, n),
              ((i = t.call(this)).element = e),
              (i._startingStyles = {}),
              (i.__initialized = !1),
              (i._styles = dv(r)),
              i
            );
          }
          return (
            _createClass(n, [
              {
                key: "init",
                value: function () {
                  var e = this;
                  !this.__initialized &&
                    this._startingStyles &&
                    ((this.__initialized = !0),
                    Object.keys(this._styles).forEach(function (t) {
                      e._startingStyles[t] = e.element.style[t];
                    }),
                    _get(_getPrototypeOf(n.prototype), "init", this).call(
                      this
                    ));
                },
              },
              {
                key: "play",
                value: function () {
                  var e = this;
                  this._startingStyles &&
                    (this.init(),
                    Object.keys(this._styles).forEach(function (t) {
                      return e.element.style.setProperty(t, e._styles[t]);
                    }),
                    _get(_getPrototypeOf(n.prototype), "play", this).call(
                      this
                    ));
                },
              },
              {
                key: "destroy",
                value: function () {
                  var e = this;
                  this._startingStyles &&
                    (Object.keys(this._startingStyles).forEach(function (t) {
                      var n = e._startingStyles[t];
                      n
                        ? e.element.style.setProperty(t, n)
                        : e.element.style.removeProperty(t);
                    }),
                    (this._startingStyles = null),
                    _get(_getPrototypeOf(n.prototype), "destroy", this).call(
                      this
                    ));
                },
              },
            ]),
            n
          );
        })(Kd),
        Gp = (function () {
          function e() {
            _classCallCheck(this, e),
              (this._count = 0),
              (this._head = document.querySelector("head")),
              (this._warningIssued = !1);
          }
          return (
            _createClass(e, [
              {
                key: "validateStyleProperty",
                value: function (e) {
                  return lv(e);
                },
              },
              {
                key: "matchesElement",
                value: function (e, t) {
                  return cv(e, t);
                },
              },
              {
                key: "containsElement",
                value: function (e, t) {
                  return hv(e, t);
                },
              },
              {
                key: "query",
                value: function (e, t, n) {
                  return fv(e, t, n);
                },
              },
              {
                key: "computeStyle",
                value: function (e, t, n) {
                  return window.getComputedStyle(e)[t];
                },
              },
              {
                key: "buildKeyframeElement",
                value: function (e, t, n) {
                  n = n.map(function (e) {
                    return dv(e);
                  });
                  var r = "@keyframes ".concat(t, " {\n"),
                    i = "";
                  n.forEach(function (e) {
                    i = " ";
                    var t = parseFloat(e.offset);
                    (r += "".concat(i).concat(100 * t, "% {\n")),
                      (i += " "),
                      Object.keys(e).forEach(function (t) {
                        var n = e[t];
                        switch (t) {
                          case "offset":
                            return;
                          case "easing":
                            return void (
                              n &&
                              (r += ""
                                .concat(i, "animation-timing-function: ")
                                .concat(n, ";\n"))
                            );
                          default:
                            return void (r += ""
                              .concat(i)
                              .concat(t, ": ")
                              .concat(n, ";\n"));
                        }
                      }),
                      (r += i + "}\n");
                  }),
                    (r += "}\n");
                  var a = document.createElement("style");
                  return (a.innerHTML = r), a;
                },
              },
              {
                key: "animate",
                value: function (e, t, n, r, i) {
                  var a =
                      arguments.length > 5 && void 0 !== arguments[5]
                        ? arguments[5]
                        : [],
                    o = arguments.length > 6 ? arguments[6] : void 0;
                  o && this._notifyFaultyScrubber();
                  var s = a.filter(function (e) {
                      return e instanceof Bp;
                    }),
                    u = {};
                  Dv(n, r) &&
                    s.forEach(function (e) {
                      var t = e.currentSnapshot;
                      Object.keys(t).forEach(function (e) {
                        return (u[e] = t[e]);
                      });
                    });
                  var l = (function (e) {
                    var t = {};
                    return (
                      e &&
                        (Array.isArray(e) ? e : [e]).forEach(function (e) {
                          Object.keys(e).forEach(function (n) {
                            "offset" != n && "easing" != n && (t[n] = e[n]);
                          });
                        }),
                      t
                    );
                  })((t = Mv(e, t, u)));
                  if (0 == n) return new qp(e, l);
                  var c = "gen_css_kf_" + this._count++,
                    h = this.buildKeyframeElement(e, c, t);
                  document.querySelector("head").appendChild(h);
                  var f = Rp(e, t),
                    d = new Bp(e, t, c, n, r, i, l, f);
                  return (
                    d.onDestroy(function () {
                      var e;
                      (e = h).parentNode.removeChild(e);
                    }),
                    d
                  );
                },
              },
              {
                key: "_notifyFaultyScrubber",
                value: function () {
                  this._warningIssued ||
                    (console.warn(
                      "@angular/animations: please load the web-animations.js polyfill to allow programmatic access...\n",
                      "  visit http://bit.ly/IWukam to learn more about using the web-animation-js polyfill."
                    ),
                    (this._warningIssued = !0));
                },
              },
            ]),
            e
          );
        })(),
        Wp = (function () {
          function e(t, n, r, i) {
            _classCallCheck(this, e),
              (this.element = t),
              (this.keyframes = n),
              (this.options = r),
              (this._specialStyles = i),
              (this._onDoneFns = []),
              (this._onStartFns = []),
              (this._onDestroyFns = []),
              (this._initialized = !1),
              (this._finished = !1),
              (this._started = !1),
              (this._destroyed = !1),
              (this.time = 0),
              (this.parentPlayer = null),
              (this.currentSnapshot = {}),
              (this._duration = r.duration),
              (this._delay = r.delay || 0),
              (this.time = this._duration + this._delay);
          }
          return (
            _createClass(e, [
              {
                key: "_onFinish",
                value: function () {
                  this._finished ||
                    ((this._finished = !0),
                    this._onDoneFns.forEach(function (e) {
                      return e();
                    }),
                    (this._onDoneFns = []));
                },
              },
              {
                key: "init",
                value: function () {
                  this._buildPlayer(), this._preparePlayerBeforeStart();
                },
              },
              {
                key: "_buildPlayer",
                value: function () {
                  var e = this;
                  if (!this._initialized) {
                    this._initialized = !0;
                    var t = this.keyframes;
                    (this.domPlayer = this._triggerWebAnimation(
                      this.element,
                      t,
                      this.options
                    )),
                      (this._finalKeyframe = t.length ? t[t.length - 1] : {}),
                      this.domPlayer.addEventListener("finish", function () {
                        return e._onFinish();
                      });
                  }
                },
              },
              {
                key: "_preparePlayerBeforeStart",
                value: function () {
                  this._delay
                    ? this._resetDomPlayerState()
                    : this.domPlayer.pause();
                },
              },
              {
                key: "_triggerWebAnimation",
                value: function (e, t, n) {
                  return e.animate(t, n);
                },
              },
              {
                key: "onStart",
                value: function (e) {
                  this._onStartFns.push(e);
                },
              },
              {
                key: "onDone",
                value: function (e) {
                  this._onDoneFns.push(e);
                },
              },
              {
                key: "onDestroy",
                value: function (e) {
                  this._onDestroyFns.push(e);
                },
              },
              {
                key: "play",
                value: function () {
                  this._buildPlayer(),
                    this.hasStarted() ||
                      (this._onStartFns.forEach(function (e) {
                        return e();
                      }),
                      (this._onStartFns = []),
                      (this._started = !0),
                      this._specialStyles && this._specialStyles.start()),
                    this.domPlayer.play();
                },
              },
              {
                key: "pause",
                value: function () {
                  this.init(), this.domPlayer.pause();
                },
              },
              {
                key: "finish",
                value: function () {
                  this.init(),
                    this._specialStyles && this._specialStyles.finish(),
                    this._onFinish(),
                    this.domPlayer.finish();
                },
              },
              {
                key: "reset",
                value: function () {
                  this._resetDomPlayerState(),
                    (this._destroyed = !1),
                    (this._finished = !1),
                    (this._started = !1);
                },
              },
              {
                key: "_resetDomPlayerState",
                value: function () {
                  this.domPlayer && this.domPlayer.cancel();
                },
              },
              {
                key: "restart",
                value: function () {
                  this.reset(), this.play();
                },
              },
              {
                key: "hasStarted",
                value: function () {
                  return this._started;
                },
              },
              {
                key: "destroy",
                value: function () {
                  this._destroyed ||
                    ((this._destroyed = !0),
                    this._resetDomPlayerState(),
                    this._onFinish(),
                    this._specialStyles && this._specialStyles.destroy(),
                    this._onDestroyFns.forEach(function (e) {
                      return e();
                    }),
                    (this._onDestroyFns = []));
                },
              },
              {
                key: "setPosition",
                value: function (e) {
                  this.domPlayer.currentTime = e * this.time;
                },
              },
              {
                key: "getPosition",
                value: function () {
                  return this.domPlayer.currentTime / this.time;
                },
              },
              {
                key: "beforeDestroy",
                value: function () {
                  var e = this,
                    t = {};
                  this.hasStarted() &&
                    Object.keys(this._finalKeyframe).forEach(function (n) {
                      "offset" != n &&
                        (t[n] = e._finished
                          ? e._finalKeyframe[n]
                          : Fv(e.element, n));
                    }),
                    (this.currentSnapshot = t);
                },
              },
              {
                key: "triggerCallback",
                value: function (e) {
                  var t = "start" == e ? this._onStartFns : this._onDoneFns;
                  t.forEach(function (e) {
                    return e();
                  }),
                    (t.length = 0);
                },
              },
              {
                key: "totalTime",
                get: function () {
                  return this._delay + this._duration;
                },
              },
            ]),
            e
          );
        })(),
        Kp = (function () {
          function e() {
            _classCallCheck(this, e),
              (this._isNativeImpl = /\{\s*\[native\s+code\]\s*\}/.test(
                Zp().toString()
              )),
              (this._cssKeyframesDriver = new Gp());
          }
          return (
            _createClass(e, [
              {
                key: "validateStyleProperty",
                value: function (e) {
                  return lv(e);
                },
              },
              {
                key: "matchesElement",
                value: function (e, t) {
                  return cv(e, t);
                },
              },
              {
                key: "containsElement",
                value: function (e, t) {
                  return hv(e, t);
                },
              },
              {
                key: "query",
                value: function (e, t, n) {
                  return fv(e, t, n);
                },
              },
              {
                key: "computeStyle",
                value: function (e, t, n) {
                  return window.getComputedStyle(e)[t];
                },
              },
              {
                key: "overrideWebAnimationsSupport",
                value: function (e) {
                  this._isNativeImpl = e;
                },
              },
              {
                key: "animate",
                value: function (e, t, n, r, i) {
                  var a =
                      arguments.length > 5 && void 0 !== arguments[5]
                        ? arguments[5]
                        : [],
                    o = arguments.length > 6 ? arguments[6] : void 0;
                  if (!o && !this._isNativeImpl)
                    return this._cssKeyframesDriver.animate(e, t, n, r, i, a);
                  var s = {
                    duration: n,
                    delay: r,
                    fill: 0 == r ? "both" : "forwards",
                  };
                  i && (s.easing = i);
                  var u = {},
                    l = a.filter(function (e) {
                      return e instanceof Wp;
                    });
                  Dv(n, r) &&
                    l.forEach(function (e) {
                      var t = e.currentSnapshot;
                      Object.keys(t).forEach(function (e) {
                        return (u[e] = t[e]);
                      });
                    });
                  var c = Rp(
                    e,
                    (t = Mv(
                      e,
                      (t = t.map(function (e) {
                        return Cv(e, !1);
                      })),
                      u
                    ))
                  );
                  return new Wp(e, t, s, c);
                },
              },
            ]),
            e
          );
        })();
      function Zp() {
        return (
          ("undefined" != typeof window &&
            void 0 !== window.document &&
            Element.prototype.animate) ||
          {}
        );
      }
      var Qp,
        $p =
          (((Qp = (function (e) {
            _inherits(n, e);
            var t = _createSuper(n);
            function n(e, r) {
              var i;
              return (
                _classCallCheck(this, n),
                ((i = t.call(this))._nextAnimationId = 0),
                (i._renderer = e.createRenderer(r.body, {
                  id: "0",
                  encapsulation: rt.None,
                  styles: [],
                  data: { animation: [] },
                })),
                i
              );
            }
            return (
              _createClass(n, [
                {
                  key: "build",
                  value: function (e) {
                    var t = this._nextAnimationId.toString();
                    this._nextAnimationId++;
                    var n = Array.isArray(e) ? qd(e) : e;
                    return (
                      Xp(this._renderer, null, t, "register", [n]),
                      new Yp(t, this._renderer)
                    );
                  },
                },
              ]),
              n
            );
          })(Bd)).ɵfac = function (e) {
            return new (e || Qp)(Ke(Za), Ke(Bs));
          }),
          (Qp.ɵprov = ce({ token: Qp, factory: Qp.ɵfac })),
          Qp),
        Yp = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r) {
            var i;
            return (
              _classCallCheck(this, n),
              ((i = t.call(this))._id = e),
              (i._renderer = r),
              i
            );
          }
          return (
            _createClass(n, [
              {
                key: "create",
                value: function (e, t) {
                  return new Jp(this._id, e, t || {}, this._renderer);
                },
              },
            ]),
            n
          );
        })(
          (function () {
            return function e() {
              _classCallCheck(this, e);
            };
          })()
        ),
        Jp = (function () {
          function e(t, n, r, i) {
            _classCallCheck(this, e),
              (this.id = t),
              (this.element = n),
              (this._renderer = i),
              (this.parentPlayer = null),
              (this._started = !1),
              (this.totalTime = 0),
              this._command("create", r);
          }
          return (
            _createClass(e, [
              {
                key: "_listen",
                value: function (e, t) {
                  return this._renderer.listen(
                    this.element,
                    "@@".concat(this.id, ":").concat(e),
                    t
                  );
                },
              },
              {
                key: "_command",
                value: function (e) {
                  for (
                    var t = arguments.length,
                      n = new Array(t > 1 ? t - 1 : 0),
                      r = 1;
                    r < t;
                    r++
                  )
                    n[r - 1] = arguments[r];
                  return Xp(this._renderer, this.element, this.id, e, n);
                },
              },
              {
                key: "onDone",
                value: function (e) {
                  this._listen("done", e);
                },
              },
              {
                key: "onStart",
                value: function (e) {
                  this._listen("start", e);
                },
              },
              {
                key: "onDestroy",
                value: function (e) {
                  this._listen("destroy", e);
                },
              },
              {
                key: "init",
                value: function () {
                  this._command("init");
                },
              },
              {
                key: "hasStarted",
                value: function () {
                  return this._started;
                },
              },
              {
                key: "play",
                value: function () {
                  this._command("play"), (this._started = !0);
                },
              },
              {
                key: "pause",
                value: function () {
                  this._command("pause");
                },
              },
              {
                key: "restart",
                value: function () {
                  this._command("restart");
                },
              },
              {
                key: "finish",
                value: function () {
                  this._command("finish");
                },
              },
              {
                key: "destroy",
                value: function () {
                  this._command("destroy");
                },
              },
              {
                key: "reset",
                value: function () {
                  this._command("reset");
                },
              },
              {
                key: "setPosition",
                value: function (e) {
                  this._command("setPosition", e);
                },
              },
              {
                key: "getPosition",
                value: function () {
                  return 0;
                },
              },
            ]),
            e
          );
        })();
      function Xp(e, t, n, r, i) {
        return e.setProperty(t, "@@".concat(n, ":").concat(r), i);
      }
      var ey,
        ty,
        ny,
        ry,
        iy =
          (((ey = (function () {
            function e(t, n, r) {
              _classCallCheck(this, e),
                (this.delegate = t),
                (this.engine = n),
                (this._zone = r),
                (this._currentId = 0),
                (this._microtaskId = 1),
                (this._animationCallbacksBuffer = []),
                (this._rendererCache = new Map()),
                (this._cdRecurDepth = 0),
                (this.promise = Promise.resolve(0)),
                (n.onRemovalComplete = function (e, t) {
                  t && t.parentNode(e) && t.removeChild(e.parentNode, e);
                });
            }
            return (
              _createClass(e, [
                {
                  key: "createRenderer",
                  value: function (e, t) {
                    var n = this,
                      r = this.delegate.createRenderer(e, t);
                    if (!(e && t && t.data && t.data.animation)) {
                      var i = this._rendererCache.get(r);
                      return (
                        i ||
                          ((i = new ay("", r, this.engine)),
                          this._rendererCache.set(r, i)),
                        i
                      );
                    }
                    var a = t.id,
                      o = t.id + "-" + this._currentId;
                    return (
                      this._currentId++,
                      this.engine.register(o, e),
                      t.data.animation.forEach(function t(r) {
                        Array.isArray(r)
                          ? r.forEach(t)
                          : n.engine.registerTrigger(a, o, e, r.name, r);
                      }),
                      new oy(this, o, r, this.engine)
                    );
                  },
                },
                {
                  key: "begin",
                  value: function () {
                    this._cdRecurDepth++,
                      this.delegate.begin && this.delegate.begin();
                  },
                },
                {
                  key: "_scheduleCountTask",
                  value: function () {
                    var e = this;
                    this.promise.then(function () {
                      e._microtaskId++;
                    });
                  },
                },
                {
                  key: "scheduleListenerCallback",
                  value: function (e, t, n) {
                    var r = this;
                    e >= 0 && e < this._microtaskId
                      ? this._zone.run(function () {
                          return t(n);
                        })
                      : (0 == this._animationCallbacksBuffer.length &&
                          Promise.resolve(null).then(function () {
                            r._zone.run(function () {
                              r._animationCallbacksBuffer.forEach(function (e) {
                                var t = _slicedToArray(e, 2);
                                (0, t[0])(t[1]);
                              }),
                                (r._animationCallbacksBuffer = []);
                            });
                          }),
                        this._animationCallbacksBuffer.push([t, n]));
                  },
                },
                {
                  key: "end",
                  value: function () {
                    var e = this;
                    this._cdRecurDepth--,
                      0 == this._cdRecurDepth &&
                        this._zone.runOutsideAngular(function () {
                          e._scheduleCountTask(),
                            e.engine.flush(e._microtaskId);
                        }),
                      this.delegate.end && this.delegate.end();
                  },
                },
                {
                  key: "whenRenderingDone",
                  value: function () {
                    return this.engine.whenRenderingDone();
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || ey)(Ke(Za), Ke(Ip), Ke(cs));
          }),
          (ey.ɵprov = ce({ token: ey, factory: ey.ɵfac })),
          ey),
        ay = (function () {
          function e(t, n, r) {
            _classCallCheck(this, e),
              (this.namespaceId = t),
              (this.delegate = n),
              (this.engine = r),
              (this.destroyNode = this.delegate.destroyNode
                ? function (e) {
                    return n.destroyNode(e);
                  }
                : null);
          }
          return (
            _createClass(e, [
              {
                key: "destroy",
                value: function () {
                  this.engine.destroy(this.namespaceId, this.delegate),
                    this.delegate.destroy();
                },
              },
              {
                key: "createElement",
                value: function (e, t) {
                  return this.delegate.createElement(e, t);
                },
              },
              {
                key: "createComment",
                value: function (e) {
                  return this.delegate.createComment(e);
                },
              },
              {
                key: "createText",
                value: function (e) {
                  return this.delegate.createText(e);
                },
              },
              {
                key: "appendChild",
                value: function (e, t) {
                  this.delegate.appendChild(e, t),
                    this.engine.onInsert(this.namespaceId, t, e, !1);
                },
              },
              {
                key: "insertBefore",
                value: function (e, t, n) {
                  this.delegate.insertBefore(e, t, n),
                    this.engine.onInsert(this.namespaceId, t, e, !0);
                },
              },
              {
                key: "removeChild",
                value: function (e, t, n) {
                  this.engine.onRemove(this.namespaceId, t, this.delegate, n);
                },
              },
              {
                key: "selectRootElement",
                value: function (e, t) {
                  return this.delegate.selectRootElement(e, t);
                },
              },
              {
                key: "parentNode",
                value: function (e) {
                  return this.delegate.parentNode(e);
                },
              },
              {
                key: "nextSibling",
                value: function (e) {
                  return this.delegate.nextSibling(e);
                },
              },
              {
                key: "setAttribute",
                value: function (e, t, n, r) {
                  this.delegate.setAttribute(e, t, n, r);
                },
              },
              {
                key: "removeAttribute",
                value: function (e, t, n) {
                  this.delegate.removeAttribute(e, t, n);
                },
              },
              {
                key: "addClass",
                value: function (e, t) {
                  this.delegate.addClass(e, t);
                },
              },
              {
                key: "removeClass",
                value: function (e, t) {
                  this.delegate.removeClass(e, t);
                },
              },
              {
                key: "setStyle",
                value: function (e, t, n, r) {
                  this.delegate.setStyle(e, t, n, r);
                },
              },
              {
                key: "removeStyle",
                value: function (e, t, n) {
                  this.delegate.removeStyle(e, t, n);
                },
              },
              {
                key: "setProperty",
                value: function (e, t, n) {
                  "@" == t.charAt(0) && "@.disabled" == t
                    ? this.disableAnimations(e, !!n)
                    : this.delegate.setProperty(e, t, n);
                },
              },
              {
                key: "setValue",
                value: function (e, t) {
                  this.delegate.setValue(e, t);
                },
              },
              {
                key: "listen",
                value: function (e, t, n) {
                  return this.delegate.listen(e, t, n);
                },
              },
              {
                key: "disableAnimations",
                value: function (e, t) {
                  this.engine.disableAnimations(e, t);
                },
              },
              {
                key: "data",
                get: function () {
                  return this.delegate.data;
                },
              },
            ]),
            e
          );
        })(),
        oy = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r, i, a) {
            var o;
            return (
              _classCallCheck(this, n),
              ((o = t.call(this, r, i, a)).factory = e),
              (o.namespaceId = r),
              o
            );
          }
          return (
            _createClass(n, [
              {
                key: "setProperty",
                value: function (e, t, n) {
                  "@" == t.charAt(0)
                    ? "." == t.charAt(1) && "@.disabled" == t
                      ? this.disableAnimations(e, (n = void 0 === n || !!n))
                      : this.engine.process(this.namespaceId, e, t.substr(1), n)
                    : this.delegate.setProperty(e, t, n);
                },
              },
              {
                key: "listen",
                value: function (e, t, n) {
                  var r,
                    i,
                    a = this;
                  if ("@" == t.charAt(0)) {
                    var o,
                      s = (function (e) {
                        switch (e) {
                          case "body":
                            return document.body;
                          case "document":
                            return document;
                          case "window":
                            return window;
                          default:
                            return e;
                        }
                      })(e),
                      u = t.substr(1),
                      l = "";
                    return (
                      "@" != u.charAt(0) &&
                        ((i = (r = u).indexOf(".")),
                        (u = (o = _slicedToArray(
                          [r.substring(0, i), r.substr(i + 1)],
                          2
                        ))[0]),
                        (l = o[1])),
                      this.engine.listen(this.namespaceId, s, u, l, function (
                        e
                      ) {
                        a.factory.scheduleListenerCallback(e._data || -1, n, e);
                      })
                    );
                  }
                  return this.delegate.listen(e, t, n);
                },
              },
            ]),
            n
          );
        })(ay),
        sy =
          (((ty = (function (e) {
            _inherits(n, e);
            var t = _createSuper(n);
            function n(e, r, i) {
              return _classCallCheck(this, n), t.call(this, e.body, r, i);
            }
            return n;
          })(Ip)).ɵfac = function (e) {
            return new (e || ty)(Ke(Bs), Ke(yv), Ke(ip));
          }),
          (ty.ɵprov = ce({ token: ty, factory: ty.ɵfac })),
          ty),
        uy = [
          {
            provide: yv,
            useFactory: function () {
              return "function" == typeof Zp() ? new Kp() : new Gp();
            },
          },
          {
            provide: new Le("AnimationModuleType"),
            useValue: "BrowserAnimations",
          },
          { provide: Bd, useClass: $p },
          {
            provide: ip,
            useFactory: function () {
              return new ap();
            },
          },
          { provide: Ip, useClass: sy },
          {
            provide: Za,
            useFactory: function (e, t, n) {
              return new iy(e, t, n);
            },
            deps: [Rl, Ip, cs],
          },
        ],
        ly =
          (((ry = function e() {
            _classCallCheck(this, e);
          }).ɵmod = ht({ type: ry })),
          (ry.ɵinj = he({
            factory: function (e) {
              return new (e || ry)();
            },
            providers: uy,
            imports: [ql],
          })),
          ry),
        cy =
          (((ny = (function () {
            function e() {
              _classCallCheck(this, e),
                (this.accountBalance = 30659.45),
                (this.pending = -19500),
                (this.processed = 28750),
                (this.status = !1);
            }
            return (
              _createClass(e, [
                { key: "ngOnInit", value: function () {} },
                {
                  key: "clickedTitle",
                  value: function () {
                    this.status = !this.status;
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || ny)();
          }),
          (ny.ɵcmp = st({
            type: ny,
            selectors: [["app-overview"]],
            decls: 38,
            vars: 11,
            consts: [
              [1, "overview__title", "title", 3, "click"],
              [
                "src",
                "./../../assets/images/rectangle.png",
                "alt",
                "",
                1,
                "title__img",
                3,
                "ngClass",
              ],
              [1, "overview", 3, "ngClass"],
              [1, "overview__block"],
              [1, "overview__account", "card"],
              [1, "card__div"],
              [
                "src",
                "./../../assets/images/overview/accountBalance.png",
                1,
                "card__img",
              ],
              [1, "card__information", "information"],
              [1, "card__title"],
              [1, "card__money"],
              ["href", "#", 1, "card__a"],
              [1, "overview__pending", "card"],
              [
                "src",
                "./../../assets/images/overview/pending.png",
                1,
                "card__img",
              ],
              [1, "overview__processed", "card"],
              [
                "src",
                "./../../assets/images/overview/processed.png",
                1,
                "card__img",
              ],
              ["href", "", 1, "card__a"],
            ],
            template: function (e, t) {
              1 & e &&
                (Ca(0, "h4", 0),
                Ea("click", function () {
                  return t.clickedTitle();
                }),
                Aa(1, "Overview "),
                ba(2, "img", 1),
                wa(),
                Ca(3, "div", 2),
                Ca(4, "div", 3),
                Ca(5, "div", 4),
                Ca(6, "div", 5),
                ba(7, "img", 6),
                Ca(8, "div", 7),
                Ca(9, "p", 8),
                Aa(10, "Account Balance"),
                wa(),
                Ca(11, "p", 9),
                Aa(12),
                jo(13, "currency"),
                wa(),
                wa(),
                wa(),
                Ca(14, "a", 10),
                Aa(15, "Viev all"),
                wa(),
                wa(),
                Ca(16, "div", 11),
                Ca(17, "div", 5),
                ba(18, "img", 12),
                Ca(19, "div", 7),
                Ca(20, "p", 8),
                Aa(21, "Account Balance"),
                wa(),
                Ca(22, "p", 9),
                Aa(23),
                jo(24, "currency"),
                wa(),
                wa(),
                wa(),
                Ca(25, "a", 10),
                Aa(26, "Viev all"),
                wa(),
                wa(),
                Ca(27, "div", 13),
                Ca(28, "div", 5),
                ba(29, "img", 14),
                Ca(30, "div", 7),
                Ca(31, "p", 8),
                Aa(32, "Account Balance"),
                wa(),
                Ca(33, "p", 9),
                Aa(34),
                jo(35, "currency"),
                wa(),
                wa(),
                wa(),
                Ca(36, "a", 15),
                Aa(37, "Viev all"),
                wa(),
                wa(),
                wa(),
                wa()),
                2 & e &&
                  (br(2),
                  _a("ngClass", t.status ? "title__img--active" : ""),
                  br(1),
                  _a("ngClass", t.status ? "card--hide" : ""),
                  br(9),
                  Ia(Lo(13, 5, t.accountBalance)),
                  br(11),
                  Ia(Lo(24, 7, t.pending)),
                  br(11),
                  Ia(Lo(35, 9, t.processed)));
            },
            directives: [Zu],
            pipes: [cl],
            styles: [
              ".overview[_ngcontent-%COMP%]{font-size:.9rem;overflow:hidden}.overview__title[_ngcontent-%COMP%]{-webkit-margin-before:.7em;margin-block-start:.7em;-webkit-margin-after:.7em;margin-block-end:.7em;text-align:center;cursor:pointer}.title__img[_ngcontent-%COMP%]{width:10px;height:10px}.title__img--active[_ngcontent-%COMP%]{transform:rotate(180deg)}.card[_ngcontent-%COMP%]{background-color:#fff;padding:2vh 10vw;margin:1vh 0;border-radius:5px}.card[_ngcontent-%COMP%], .overview__block[_ngcontent-%COMP%]{display:flex;flex-direction:column}.overview__block[_ngcontent-%COMP%]{align-items:center}.card--hide[_ngcontent-%COMP%]{visibility:hidden;max-height:0;transition:1.5s}.card__div[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap}.card__img[_ngcontent-%COMP%]{width:22px;height:22px;padding-right:2vw}.card__money[_ngcontent-%COMP%]{font-weight:700}.card__a[_ngcontent-%COMP%]{color:#036672;text-decoration:none}@media (min-width:500px){.overview__block[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around}.card[_ngcontent-%COMP%]{padding:2vh 2vw;margin:0 1vw 1vh 0}}@media (min-width:768px){.overview[_ngcontent-%COMP%]{font-size:1rem}.card[_ngcontent-%COMP%]{margin:0 0 1vh}}@media (min-width:1024px){.card[_ngcontent-%COMP%]{padding:2vh 2vw;margin:0 1vw 1vh}}",
            ],
          })),
          ny);
      function hy(e, t) {
        if (
          (1 & e &&
            (cn(),
            hn(),
            Ca(0, "tr", 3),
            Ca(1, "td", 12),
            Aa(2),
            wa(),
            Ca(3, "td", 12),
            Aa(4),
            jo(5, "currency"),
            Ca(6, "span"),
            Aa(7, "USD"),
            wa(),
            wa(),
            Ca(8, "td", 12),
            Ca(9, "p", 13),
            Aa(10),
            wa(),
            wa(),
            Ca(11, "td", 12),
            Aa(12),
            jo(13, "date"),
            wa(),
            wa()),
          2 & e)
        ) {
          var n = t.$implicit;
          br(2),
            Ia(n.transaction),
            br(2),
            Ra("", Lo(5, 5, n.amount), " "),
            br(5),
            _a(
              "ngClass",
              "Success" == n.status
                ? "recent-activity__p--green"
                : "Processing" == n.status
                ? "recent-activity__p--yellow"
                : ""
            ),
            br(1),
            Ra(" ", n.status, ""),
            br(2),
            Ia(
              ((r = n.date),
              (i = "MMM dd, yyyy"),
              (a = Ht()),
              (o = It(a, 13)),
              Ho(
                a,
                Uo(a, 13)
                  ? (function (e, t, n, r, i, a, o) {
                      var s = t + 7;
                      return da(e, s, i, a)
                        ? ha(e, s + 2, o ? r.call(o, i, a) : r(i, a))
                        : Fo(e, s + 2);
                    })(a, Kt(), 0, o.transform, r, i, o)
                  : o.transform(r, i)
              ))
            );
        }
        var r, i, a, o;
      }
      var fy,
        dy,
        vy,
        py =
          (((vy = (function () {
            function e(t) {
              var n = this;
              _classCallCheck(this, e),
                (this.inputService = t),
                (this.transactions = []),
                (this.sortTransactions = []),
                (this.status = !1),
                (this.flag = ""),
                (this.state = ""),
                (this.states = {
                  transaction: 0,
                  amount: 0,
                  status: 0,
                  date: 0,
                }),
                this.inputService.getValue().subscribe(function (e) {
                  n.transactions = e;
                });
            }
            return (
              _createClass(e, [
                { key: "ngOnInit", value: function () {} },
                { key: "ngDoCheck", value: function () {} },
                {
                  key: "onClickTransaction",
                  value: function (e) {
                    if (
                      ((e = e.toLowerCase()),
                      (this.flag = this.flag.toLowerCase()),
                      this.flag === e)
                    )
                      this.transactions.reverse();
                    else {
                      (this.states = {
                        transaction: 0,
                        amount: 0,
                        status: 0,
                        date: 0,
                      }),
                        (this.status = !this.status),
                        (this.flag = e);
                      for (var t = 0; t < this.transactions.length - 1; t++)
                        for (var n = 0; n < this.transactions.length - 1; n++)
                          if (
                            this.transactions[n][e] >=
                            this.transactions[n + 1][e]
                          );
                          else {
                            var r = this.transactions[n];
                            (this.transactions[n] = this.transactions[n + 1]),
                              (this.transactions[n + 1] = r);
                          }
                    }
                    this.states[e]++;
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || vy)(ya(Zl));
          }),
          (vy.ɵcmp = st({
            type: vy,
            selectors: [["app-recent-activity"]],
            features: [za([])],
            decls: 36,
            vars: 21,
            consts: [
              [1, "recent-activity"],
              [1, "recent-activity__h4"],
              [1, "recent-activity__table"],
              [1, "recent-activity__tr"],
              [1, "recent-activity__th", 3, "click"],
              ["box", ""],
              [1, "recent-activity__div"],
              [
                "xmlns",
                "http://www.w3.org/2000/svg",
                "height",
                "24",
                "viewBox",
                "0 0 24 24",
                "width",
                "24",
                1,
                "recent-activity__svg",
                3,
                "ngClass",
              ],
              ["d", "M0 0h24v24H0V0z", "fill", "none"],
              ["d", "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"],
              [
                "d",
                "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",
                3,
                "ngClass",
              ],
              ["class", "recent-activity__tr", 4, "ngFor", "ngForOf"],
              [1, "recent-activity__td"],
              [3, "ngClass"],
            ],
            template: function (e, t) {
              1 & e &&
                (ba(0, "app-overview"),
                Ca(1, "div", 0),
                Ca(2, "h4", 1),
                Aa(3),
                wa(),
                Ca(4, "table", 2),
                Ca(5, "tr", 3),
                Ca(6, "th", 4, 5),
                Ea("click", function () {
                  return t.onClickTransaction("Transaction");
                }),
                Aa(8),
                jo(9, "uppercase"),
                Ca(10, "div", 6),
                cn(),
                Ca(11, "svg", 7),
                ba(12, "path", 8),
                ba(13, "path", 9),
                wa(),
                wa(),
                wa(),
                hn(),
                Ca(14, "th", 4),
                Ea("click", function () {
                  return t.onClickTransaction("Amount");
                }),
                Aa(15),
                jo(16, "uppercase"),
                Ca(17, "div", 6),
                cn(),
                Ca(18, "svg", 7),
                ba(19, "path", 8),
                ba(20, "path", 10),
                wa(),
                wa(),
                wa(),
                hn(),
                Ca(21, "th", 4),
                Ea("click", function () {
                  return t.onClickTransaction("Status");
                }),
                Aa(22),
                jo(23, "uppercase"),
                Ca(24, "div", 6),
                cn(),
                Ca(25, "svg", 7),
                ba(26, "path", 8),
                ba(27, "path", 10),
                wa(),
                wa(),
                wa(),
                hn(),
                Ca(28, "th", 4),
                Ea("click", function () {
                  return t.onClickTransaction("Date");
                }),
                Aa(29),
                jo(30, "uppercase"),
                Ca(31, "div", 6),
                cn(),
                Ca(32, "svg", 7),
                ba(33, "path", 8),
                ba(34, "path", 10),
                wa(),
                wa(),
                wa(),
                wa(),
                pa(35, hy, 14, 10, "tr", 11),
                wa(),
                wa()),
                2 & e &&
                  (br(3),
                  Ra("Recent activity (", t.transactions.length, ")"),
                  br(5),
                  Ra("", Lo(9, 13, "Transaction"), " "),
                  br(3),
                  _a(
                    "ngClass",
                    0 !== t.states.transaction
                      ? t.states.transaction % 2 == 0
                        ? "recent-activity__svg--color"
                        : "recent-activity__svg--active-color"
                      : ""
                  ),
                  br(4),
                  Ra("", Lo(16, 15, "Amount"), " "),
                  br(3),
                  _a(
                    "ngClass",
                    0 !== t.states.amount
                      ? t.states.amount % 2 == 0
                        ? "recent-activity__svg--color"
                        : "recent-activity__svg--active-color"
                      : ""
                  ),
                  br(2),
                  _a(
                    "ngClass",
                    t.status ? "recent-activity__path--active" : ""
                  ),
                  br(2),
                  Ra("", Lo(23, 17, "Status"), " "),
                  br(3),
                  _a(
                    "ngClass",
                    0 !== t.states.status
                      ? t.states.status % 2 == 0
                        ? "recent-activity__svg--color"
                        : "recent-activity__svg--active-color"
                      : ""
                  ),
                  br(2),
                  _a(
                    "ngClass",
                    t.status ? "recent-activity__path--active" : ""
                  ),
                  br(2),
                  Ra("", Lo(30, 19, "Date"), " "),
                  br(3),
                  _a(
                    "ngClass",
                    0 !== t.states.date
                      ? t.states.date % 2 == 0
                        ? "recent-activity__svg--color"
                        : "recent-activity__svg--active-color"
                      : ""
                  ),
                  br(2),
                  _a(
                    "ngClass",
                    t.status ? "recent-activity__path--active" : ""
                  ),
                  br(1),
                  _a("ngForOf", t.transactions));
            },
            directives: [cy, Zu, $u],
            pipes: [ul, cl, ll],
            styles: [
              ".recent-activity__h4[_ngcontent-%COMP%]{text-align:center}.recent-activity__table[_ngcontent-%COMP%]{font-size:.85rem;text-align:center;border-collapse:collapse;margin:0 auto}tr[_ngcontent-%COMP%]:first-child{border-bottom:1px solid #868686}.recent-activity__tr[_ngcontent-%COMP%]:first-child{margin-bottom:1vh}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{width:6em;padding:2px}tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child, tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child{width:10em}.recent-activity__th[_ngcontent-%COMP%]{color:#868686;font-weight:400;cursor:pointer}.recent-activity__div[_ngcontent-%COMP%]{display:inline-block}.recent-activity__svg[_ngcontent-%COMP%]{width:15px;height:15px;fill:#868686}.recent-activity__svg--color[_ngcontent-%COMP%]{fill:#000}.recent-activity__svg--active-color[_ngcontent-%COMP%]{fill:#000;transform:rotate(180deg)}.recent-activity__td[_ngcontent-%COMP%]:first-child, .recent-activity__td[_ngcontent-%COMP%]:nth-child(2)   span[_ngcontent-%COMP%]{color:#868686}.recent-activity__p--yellow[_ngcontent-%COMP%]{background-color:rgba(234,243,106,.5);box-shadow:0 0 10px 2px #eaf36a;color:#036672}.recent-activity__p--green[_ngcontent-%COMP%]{background-color:rgba(154,248,125,.753);box-shadow:0 0 10px 2px #9af87d;color:#036672}.recent-activity__td[_ngcontent-%COMP%]:nth-child(4){color:#868686}@media (min-width:500px){.recent-activity__table[_ngcontent-%COMP%]{width:100%}}@media (min-width:768px){.recent-activity__table[_ngcontent-%COMP%]{font-size:1rem}}@media (min-width:1024px){.recent-activity__table[_ngcontent-%COMP%]{width:100%}}",
            ],
          })),
          vy),
        yy =
          (((dy = (function () {
            function e() {
              _classCallCheck(this, e);
            }
            return (
              _createClass(e, [{ key: "ngOnInit", value: function () {} }]), e
            );
          })()).ɵfac = function (e) {
            return new (e || dy)();
          }),
          (dy.ɵcmp = st({
            type: dy,
            selectors: [["app-history"]],
            decls: 2,
            vars: 0,
            template: function (e, t) {
              1 & e && (Ca(0, "p"), Aa(1, "history works!"), wa());
            },
            styles: [""],
          })),
          dy),
        gy =
          (((fy = function e() {
            _classCallCheck(this, e);
          }).ɵmod = ht({ type: fy, bootstrap: [zd] })),
          (fy.ɵinj = he({
            factory: function (e) {
              return new (e || fy)();
            },
            providers: [Ql, Zl],
            imports: [
              [
                ql,
                ly,
                Td.forRoot([
                  { path: "", redirectTo: "/home", pathMatch: "full" },
                  { path: "home", component: py },
                  { path: "history", component: yy },
                  { path: "balances", component: yy },
                  { path: "cards", component: yy },
                  { path: "recipents", component: yy },
                  { path: "raports", component: yy },
                  { path: "settings", component: yy },
                  { path: "help", component: yy },
                  { path: "privacy", component: yy },
                ]),
              ],
            ],
          })),
          fy);
      (function () {
        if (Xn)
          throw new Error("Cannot enable prod mode after platform setup.");
        Jn = !1;
      })(),
        zl()
          .bootstrapModule(gy)
          .catch(function (e) {
            return console.error(e);
          });
    },
    zn8P: function (e, t) {
      function n(e) {
        return Promise.resolve().then(function () {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        });
      }
      (n.keys = function () {
        return [];
      }),
        (n.resolve = n),
        (e.exports = n),
        (n.id = "zn8P");
    },
  },
  [[0, 0]],
]);
