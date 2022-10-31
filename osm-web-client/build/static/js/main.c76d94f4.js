/*! For license information please see main.c76d94f4.js.LICENSE.txt */
!(function () {
  var e = {
      7472: function (e) {
        e.exports = "object" == typeof self ? self.FormData : window.FormData;
      },
      888: function (e, t, n) {
        "use strict";
        var a = n(9047);
        function r() {}
        function i() {}
        (i.resetWarningCache = r),
          (e.exports = function () {
            function e(e, t, n, r, i, s) {
              if (s !== a) {
                var o = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                );
                throw ((o.name = "Invariant Violation"), o);
              }
            }
            function t() {
              return e;
            }
            e.isRequired = e;
            var n = {
              array: e,
              bigint: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              elementType: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
              exact: t,
              checkPropTypes: i,
              resetWarningCache: r,
            };
            return (n.PropTypes = n), n;
          });
      },
      2007: function (e, t, n) {
        e.exports = n(888)();
      },
      9047: function (e) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      },
      4463: function (e, t, n) {
        "use strict";
        var a = n(2791),
          r = n(5296);
        function i(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var s = new Set(),
          o = {};
        function l(e, t) {
          c(e, t), c(e + "Capture", t);
        }
        function c(e, t) {
          for (o[e] = t, e = 0; e < t.length; e++) s.add(t[e]);
        }
        var u = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          m = {},
          p = {};
        function h(e, t, n, a, r, i, s) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = a),
            (this.attributeNamespace = r),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = i),
            (this.removeEmptyString = s);
        }
        var g = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            g[e] = new h(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            g[t] = new h(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              g[e] = new h(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            g[e] = new h(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              g[e] = new h(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            g[e] = new h(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            g[e] = new h(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            g[e] = new h(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            g[e] = new h(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var v = /[\-:]([a-z])/g;
        function b(e) {
          return e[1].toUpperCase();
        }
        function x(e, t, n, a) {
          var r = g.hasOwnProperty(t) ? g[t] : null;
          (null !== r
            ? 0 !== r.type
            : a ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, a) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, a) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !a &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, a)
              )
                return !0;
              if (a) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, r, a) && (n = null),
            a || null === r
              ? (function (e) {
                  return (
                    !!d.call(p, e) ||
                    (!d.call(m, e) &&
                      (f.test(e) ? (p[e] = !0) : ((m[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : r.mustUseProperty
              ? (e[r.propertyName] = null === n ? 3 !== r.type && "" : n)
              : ((t = r.attributeName),
                (a = r.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (r = r.type) || (4 === r && !0 === n)
                        ? ""
                        : "" + n),
                    a ? e.setAttributeNS(a, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(v, b);
            g[t] = new h(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(v, b);
              g[t] = new h(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(v, b);
            g[t] = new h(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            g[e] = new h(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new h(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            g[e] = new h(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var j = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          y = Symbol.for("react.element"),
          A = Symbol.for("react.portal"),
          w = Symbol.for("react.fragment"),
          k = Symbol.for("react.strict_mode"),
          S = Symbol.for("react.profiler"),
          N = Symbol.for("react.provider"),
          z = Symbol.for("react.context"),
          C = Symbol.for("react.forward_ref"),
          E = Symbol.for("react.suspense"),
          P = Symbol.for("react.suspense_list"),
          O = Symbol.for("react.memo"),
          M = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var _ = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var T = Symbol.iterator;
        function D(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (T && e[T]) || e["@@iterator"])
            ? e
            : null;
        }
        var L,
          F = Object.assign;
        function R(e) {
          if (void 0 === L)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              L = (t && t[1]) || "";
            }
          return "\n" + L + e;
        }
        var I = !1;
        function B(e, t) {
          if (!e || I) return "";
          I = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (c) {
                  var a = c;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (c) {
                  a = c;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (c) {
                a = c;
              }
              e();
            }
          } catch (c) {
            if (c && a && "string" === typeof c.stack) {
              for (
                var r = c.stack.split("\n"),
                  i = a.stack.split("\n"),
                  s = r.length - 1,
                  o = i.length - 1;
                1 <= s && 0 <= o && r[s] !== i[o];

              )
                o--;
              for (; 1 <= s && 0 <= o; s--, o--)
                if (r[s] !== i[o]) {
                  if (1 !== s || 1 !== o)
                    do {
                      if ((s--, 0 > --o || r[s] !== i[o])) {
                        var l = "\n" + r[s].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            l.includes("<anonymous>") &&
                            (l = l.replace("<anonymous>", e.displayName)),
                          l
                        );
                      }
                    } while (1 <= s && 0 <= o);
                  break;
                }
            }
          } finally {
            (I = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? R(e) : "";
        }
        function V(e) {
          switch (e.tag) {
            case 5:
              return R(e.type);
            case 16:
              return R("Lazy");
            case 13:
              return R("Suspense");
            case 19:
              return R("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = B(e.type, !1));
            case 11:
              return (e = B(e.type.render, !1));
            case 1:
              return (e = B(e.type, !0));
            default:
              return "";
          }
        }
        function U(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case w:
              return "Fragment";
            case A:
              return "Portal";
            case S:
              return "Profiler";
            case k:
              return "StrictMode";
            case E:
              return "Suspense";
            case P:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case z:
                return (e.displayName || "Context") + ".Consumer";
              case N:
                return (e._context.displayName || "Context") + ".Provider";
              case C:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case O:
                return null !== (t = e.displayName || null)
                  ? t
                  : U(e.type) || "Memo";
              case M:
                (t = e._payload), (e = e._init);
                try {
                  return U(e(t));
                } catch (n) {}
            }
          return null;
        }
        function H(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return U(t);
            case 8:
              return t === k ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function q(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function W(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function Y(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = W(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                a = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var r = n.get,
                  i = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return r.call(this);
                    },
                    set: function (e) {
                      (a = "" + e), i.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return a;
                    },
                    setValue: function (e) {
                      a = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function Q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            a = "";
          return (
            e && (a = W(e) ? (e.checked ? "true" : "false") : e.value),
            (e = a) !== n && (t.setValue(e), !0)
          );
        }
        function G(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function X(e, t) {
          var n = t.checked;
          return F({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function $(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            a = null != t.checked ? t.checked : t.defaultChecked;
          (n = q(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: a,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function K(e, t) {
          null != (t = t.checked) && x(e, "checked", t, !1);
        }
        function Z(e, t) {
          K(e, t);
          var n = q(t.value),
            a = t.type;
          if (null != n)
            "number" === a
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === a || "reset" === a)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, q(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function J(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var a = t.type;
            if (
              !(
                ("submit" !== a && "reset" !== a) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && G(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, a) {
          if (((e = e.options), t)) {
            t = {};
            for (var r = 0; r < n.length; r++) t["$" + n[r]] = !0;
            for (n = 0; n < e.length; n++)
              (r = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== r && (e[n].selected = r),
                r && a && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + q(n), t = null, r = 0; r < e.length; r++) {
              if (e[r].value === n)
                return (
                  (e[r].selected = !0), void (a && (e[r].defaultSelected = !0))
                );
              null !== t || e[r].disabled || (t = e[r]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function ae(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(i(91));
          return F({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function re(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(i(92));
              if (te(n)) {
                if (1 < n.length) throw Error(i(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: q(n) };
        }
        function ie(e, t) {
          var n = q(t.value),
            a = q(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != a && (e.defaultValue = "" + a);
        }
        function se(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function oe(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function le(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? oe(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ce,
          ue,
          de =
            ((ue = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ce = ce || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ce.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, a) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ue(e, t);
                  });
                }
              : ue);
        function fe(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var me = {
            animationIterationCount: !0,
            aspectRatio: !0,
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
            gridArea: !0,
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
            strokeWidth: !0,
          },
          pe = ["Webkit", "ms", "Moz", "O"];
        function he(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (me.hasOwnProperty(e) && me[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ge(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var a = 0 === n.indexOf("--"),
                r = he(n, t[n], a);
              "float" === n && (n = "cssFloat"),
                a ? e.setProperty(n, r) : (e[n] = r);
            }
        }
        Object.keys(me).forEach(function (e) {
          pe.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (me[t] = me[e]);
          });
        });
        var ve = F(
          { menuitem: !0 },
          {
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
            wbr: !0,
          }
        );
        function be(e, t) {
          if (t) {
            if (
              ve[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(i(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(i(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(i(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(i(62));
          }
        }
        function xe(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
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
              return !0;
          }
        }
        var je = null;
        function ye(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Ae = null,
          we = null,
          ke = null;
        function Se(e) {
          if ((e = xr(e))) {
            if ("function" !== typeof Ae) throw Error(i(280));
            var t = e.stateNode;
            t && ((t = yr(t)), Ae(e.stateNode, e.type, t));
          }
        }
        function Ne(e) {
          we ? (ke ? ke.push(e) : (ke = [e])) : (we = e);
        }
        function ze() {
          if (we) {
            var e = we,
              t = ke;
            if (((ke = we = null), Se(e), t))
              for (e = 0; e < t.length; e++) Se(t[e]);
          }
        }
        function Ce(e, t) {
          return e(t);
        }
        function Ee() {}
        var Pe = !1;
        function Oe(e, t, n) {
          if (Pe) return e(t, n);
          Pe = !0;
          try {
            return Ce(e, t, n);
          } finally {
            (Pe = !1), (null !== we || null !== ke) && (Ee(), ze());
          }
        }
        function Me(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var a = yr(n);
          if (null === a) return null;
          n = a[t];
          e: switch (t) {
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
            case "onMouseEnter":
              (a = !a.disabled) ||
                (a = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !a);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(i(231, t, typeof n));
          return n;
        }
        var _e = !1;
        if (u)
          try {
            var Te = {};
            Object.defineProperty(Te, "passive", {
              get: function () {
                _e = !0;
              },
            }),
              window.addEventListener("test", Te, Te),
              window.removeEventListener("test", Te, Te);
          } catch (ue) {
            _e = !1;
          }
        function De(e, t, n, a, r, i, s, o, l) {
          var c = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, c);
          } catch (u) {
            this.onError(u);
          }
        }
        var Le = !1,
          Fe = null,
          Re = !1,
          Ie = null,
          Be = {
            onError: function (e) {
              (Le = !0), (Fe = e);
            },
          };
        function Ve(e, t, n, a, r, i, s, o, l) {
          (Le = !1), (Fe = null), De.apply(Be, arguments);
        }
        function Ue(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function He(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function qe(e) {
          if (Ue(e) !== e) throw Error(i(188));
        }
        function We(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Ue(e))) throw Error(i(188));
                return t !== e ? null : e;
              }
              for (var n = e, a = t; ; ) {
                var r = n.return;
                if (null === r) break;
                var s = r.alternate;
                if (null === s) {
                  if (null !== (a = r.return)) {
                    n = a;
                    continue;
                  }
                  break;
                }
                if (r.child === s.child) {
                  for (s = r.child; s; ) {
                    if (s === n) return qe(r), e;
                    if (s === a) return qe(r), t;
                    s = s.sibling;
                  }
                  throw Error(i(188));
                }
                if (n.return !== a.return) (n = r), (a = s);
                else {
                  for (var o = !1, l = r.child; l; ) {
                    if (l === n) {
                      (o = !0), (n = r), (a = s);
                      break;
                    }
                    if (l === a) {
                      (o = !0), (a = r), (n = s);
                      break;
                    }
                    l = l.sibling;
                  }
                  if (!o) {
                    for (l = s.child; l; ) {
                      if (l === n) {
                        (o = !0), (n = s), (a = r);
                        break;
                      }
                      if (l === a) {
                        (o = !0), (a = s), (n = r);
                        break;
                      }
                      l = l.sibling;
                    }
                    if (!o) throw Error(i(189));
                  }
                }
                if (n.alternate !== a) throw Error(i(190));
              }
              if (3 !== n.tag) throw Error(i(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Ye(e)
            : null;
        }
        function Ye(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Ye(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Qe = r.unstable_scheduleCallback,
          Ge = r.unstable_cancelCallback,
          Xe = r.unstable_shouldYield,
          $e = r.unstable_requestPaint,
          Ke = r.unstable_now,
          Ze = r.unstable_getCurrentPriorityLevel,
          Je = r.unstable_ImmediatePriority,
          et = r.unstable_UserBlockingPriority,
          tt = r.unstable_NormalPriority,
          nt = r.unstable_LowPriority,
          at = r.unstable_IdlePriority,
          rt = null,
          it = null;
        var st = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === (e >>>= 0) ? 32 : (31 - ((ot(e) / lt) | 0)) | 0;
              },
          ot = Math.log,
          lt = Math.LN2;
        var ct = 64,
          ut = 4194304;
        function dt(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function ft(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var a = 0,
            r = e.suspendedLanes,
            i = e.pingedLanes,
            s = 268435455 & n;
          if (0 !== s) {
            var o = s & ~r;
            0 !== o ? (a = dt(o)) : 0 !== (i &= s) && (a = dt(i));
          } else 0 !== (s = n & ~r) ? (a = dt(s)) : 0 !== i && (a = dt(i));
          if (0 === a) return 0;
          if (
            0 !== t &&
            t !== a &&
            0 === (t & r) &&
            ((r = a & -a) >= (i = t & -t) || (16 === r && 0 !== (4194240 & i)))
          )
            return t;
          if ((0 !== (4 & a) && (a |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= a; 0 < t; )
              (r = 1 << (n = 31 - st(t))), (a |= e[n]), (t &= ~r);
          return a;
        }
        function mt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function pt(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function ht() {
          var e = ct;
          return 0 === (4194240 & (ct <<= 1)) && (ct = 64), e;
        }
        function gt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function vt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - st(t))] = n);
        }
        function bt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var a = 31 - st(n),
              r = 1 << a;
            (r & t) | (e[a] & t) && (e[a] |= t), (n &= ~r);
          }
        }
        var xt = 0;
        function jt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var yt,
          At,
          wt,
          kt,
          St,
          Nt = !1,
          zt = [],
          Ct = null,
          Et = null,
          Pt = null,
          Ot = new Map(),
          Mt = new Map(),
          _t = [],
          Tt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function Dt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Ct = null;
              break;
            case "dragenter":
            case "dragleave":
              Et = null;
              break;
            case "mouseover":
            case "mouseout":
              Pt = null;
              break;
            case "pointerover":
            case "pointerout":
              Ot.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Mt.delete(t.pointerId);
          }
        }
        function Lt(e, t, n, a, r, i) {
          return null === e || e.nativeEvent !== i
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: a,
                nativeEvent: i,
                targetContainers: [r],
              }),
              null !== t && null !== (t = xr(t)) && At(t),
              e)
            : ((e.eventSystemFlags |= a),
              (t = e.targetContainers),
              null !== r && -1 === t.indexOf(r) && t.push(r),
              e);
        }
        function Ft(e) {
          var t = br(e.target);
          if (null !== t) {
            var n = Ue(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = He(n)))
                  return (
                    (e.blockedOn = t),
                    void St(e.priority, function () {
                      wt(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Rt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Xt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = xr(n)) && At(t), (e.blockedOn = n), !1;
            var a = new (n = e.nativeEvent).constructor(n.type, n);
            (je = a), n.target.dispatchEvent(a), (je = null), t.shift();
          }
          return !0;
        }
        function It(e, t, n) {
          Rt(e) && n.delete(t);
        }
        function Bt() {
          (Nt = !1),
            null !== Ct && Rt(Ct) && (Ct = null),
            null !== Et && Rt(Et) && (Et = null),
            null !== Pt && Rt(Pt) && (Pt = null),
            Ot.forEach(It),
            Mt.forEach(It);
        }
        function Vt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Nt ||
              ((Nt = !0),
              r.unstable_scheduleCallback(r.unstable_NormalPriority, Bt)));
        }
        function Ut(e) {
          function t(t) {
            return Vt(t, e);
          }
          if (0 < zt.length) {
            Vt(zt[0], e);
            for (var n = 1; n < zt.length; n++) {
              var a = zt[n];
              a.blockedOn === e && (a.blockedOn = null);
            }
          }
          for (
            null !== Ct && Vt(Ct, e),
              null !== Et && Vt(Et, e),
              null !== Pt && Vt(Pt, e),
              Ot.forEach(t),
              Mt.forEach(t),
              n = 0;
            n < _t.length;
            n++
          )
            (a = _t[n]).blockedOn === e && (a.blockedOn = null);
          for (; 0 < _t.length && null === (n = _t[0]).blockedOn; )
            Ft(n), null === n.blockedOn && _t.shift();
        }
        var Ht = j.ReactCurrentBatchConfig,
          qt = !0;
        function Wt(e, t, n, a) {
          var r = xt,
            i = Ht.transition;
          Ht.transition = null;
          try {
            (xt = 1), Qt(e, t, n, a);
          } finally {
            (xt = r), (Ht.transition = i);
          }
        }
        function Yt(e, t, n, a) {
          var r = xt,
            i = Ht.transition;
          Ht.transition = null;
          try {
            (xt = 4), Qt(e, t, n, a);
          } finally {
            (xt = r), (Ht.transition = i);
          }
        }
        function Qt(e, t, n, a) {
          if (qt) {
            var r = Xt(e, t, n, a);
            if (null === r) qa(e, t, a, Gt, n), Dt(e, a);
            else if (
              (function (e, t, n, a, r) {
                switch (t) {
                  case "focusin":
                    return (Ct = Lt(Ct, e, t, n, a, r)), !0;
                  case "dragenter":
                    return (Et = Lt(Et, e, t, n, a, r)), !0;
                  case "mouseover":
                    return (Pt = Lt(Pt, e, t, n, a, r)), !0;
                  case "pointerover":
                    var i = r.pointerId;
                    return Ot.set(i, Lt(Ot.get(i) || null, e, t, n, a, r)), !0;
                  case "gotpointercapture":
                    return (
                      (i = r.pointerId),
                      Mt.set(i, Lt(Mt.get(i) || null, e, t, n, a, r)),
                      !0
                    );
                }
                return !1;
              })(r, e, t, n, a)
            )
              a.stopPropagation();
            else if ((Dt(e, a), 4 & t && -1 < Tt.indexOf(e))) {
              for (; null !== r; ) {
                var i = xr(r);
                if (
                  (null !== i && yt(i),
                  null === (i = Xt(e, t, n, a)) && qa(e, t, a, Gt, n),
                  i === r)
                )
                  break;
                r = i;
              }
              null !== r && a.stopPropagation();
            } else qa(e, t, a, null, n);
          }
        }
        var Gt = null;
        function Xt(e, t, n, a) {
          if (((Gt = null), null !== (e = br((e = ye(a))))))
            if (null === (t = Ue(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = He(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Gt = e), null;
        }
        function $t(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Ze()) {
                case Je:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case at:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Kt = null,
          Zt = null,
          Jt = null;
        function en() {
          if (Jt) return Jt;
          var e,
            t,
            n = Zt,
            a = n.length,
            r = "value" in Kt ? Kt.value : Kt.textContent,
            i = r.length;
          for (e = 0; e < a && n[e] === r[e]; e++);
          var s = a - e;
          for (t = 1; t <= s && n[a - t] === r[i - t]; t++);
          return (Jt = r.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function an() {
          return !1;
        }
        function rn(e) {
          function t(t, n, a, r, i) {
            for (var s in ((this._reactName = t),
            (this._targetInst = a),
            (this.type = n),
            (this.nativeEvent = r),
            (this.target = i),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(s) && ((t = e[s]), (this[s] = t ? t(r) : r[s]));
            return (
              (this.isDefaultPrevented = (
                null != r.defaultPrevented
                  ? r.defaultPrevented
                  : !1 === r.returnValue
              )
                ? nn
                : an),
              (this.isPropagationStopped = an),
              this
            );
          }
          return (
            F(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var sn,
          on,
          ln,
          cn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          un = rn(cn),
          dn = F({}, cn, { view: 0, detail: 0 }),
          fn = rn(dn),
          mn = F({}, dn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Sn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== ln &&
                    (ln && "mousemove" === e.type
                      ? ((sn = e.screenX - ln.screenX),
                        (on = e.screenY - ln.screenY))
                      : (on = sn = 0),
                    (ln = e)),
                  sn);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : on;
            },
          }),
          pn = rn(mn),
          hn = rn(F({}, mn, { dataTransfer: 0 })),
          gn = rn(F({}, dn, { relatedTarget: 0 })),
          vn = rn(
            F({}, cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          bn = F({}, cn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          xn = rn(bn),
          jn = rn(F({}, cn, { data: 0 })),
          yn = {
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
            MozPrintableKey: "Unidentified",
          },
          An = {
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
            224: "Meta",
          },
          wn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function kn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = wn[e]) && !!t[e];
        }
        function Sn() {
          return kn;
        }
        var Nn = F({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = yn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? An[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Sn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          zn = rn(Nn),
          Cn = rn(
            F({}, mn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          En = rn(
            F({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Sn,
            })
          ),
          Pn = rn(
            F({}, cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          On = F({}, mn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Mn = rn(On),
          _n = [9, 13, 27, 32],
          Tn = u && "CompositionEvent" in window,
          Dn = null;
        u && "documentMode" in document && (Dn = document.documentMode);
        var Ln = u && "TextEvent" in window && !Dn,
          Fn = u && (!Tn || (Dn && 8 < Dn && 11 >= Dn)),
          Rn = String.fromCharCode(32),
          In = !1;
        function Bn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== _n.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Vn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Un = !1;
        var Hn = {
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
          week: !0,
        };
        function qn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Hn[e.type] : "textarea" === t;
        }
        function Wn(e, t, n, a) {
          Ne(a),
            0 < (t = Ya(t, "onChange")).length &&
              ((n = new un("onChange", "change", null, n, a)),
              e.push({ event: n, listeners: t }));
        }
        var Yn = null,
          Qn = null;
        function Gn(e) {
          Ra(e, 0);
        }
        function Xn(e) {
          if (Q(jr(e))) return e;
        }
        function $n(e, t) {
          if ("change" === e) return t;
        }
        var Kn = !1;
        if (u) {
          var Zn;
          if (u) {
            var Jn = "oninput" in document;
            if (!Jn) {
              var ea = document.createElement("div");
              ea.setAttribute("oninput", "return;"),
                (Jn = "function" === typeof ea.oninput);
            }
            Zn = Jn;
          } else Zn = !1;
          Kn = Zn && (!document.documentMode || 9 < document.documentMode);
        }
        function ta() {
          Yn && (Yn.detachEvent("onpropertychange", na), (Qn = Yn = null));
        }
        function na(e) {
          if ("value" === e.propertyName && Xn(Qn)) {
            var t = [];
            Wn(t, Qn, e, ye(e)), Oe(Gn, t);
          }
        }
        function aa(e, t, n) {
          "focusin" === e
            ? (ta(), (Qn = n), (Yn = t).attachEvent("onpropertychange", na))
            : "focusout" === e && ta();
        }
        function ra(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Xn(Qn);
        }
        function ia(e, t) {
          if ("click" === e) return Xn(t);
        }
        function sa(e, t) {
          if ("input" === e || "change" === e) return Xn(t);
        }
        var oa =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function la(e, t) {
          if (oa(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            a = Object.keys(t);
          if (n.length !== a.length) return !1;
          for (a = 0; a < n.length; a++) {
            var r = n[a];
            if (!d.call(t, r) || !oa(e[r], t[r])) return !1;
          }
          return !0;
        }
        function ca(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function ua(e, t) {
          var n,
            a = ca(e);
          for (e = 0; a; ) {
            if (3 === a.nodeType) {
              if (((n = e + a.textContent.length), e <= t && n >= t))
                return { node: a, offset: t - e };
              e = n;
            }
            e: {
              for (; a; ) {
                if (a.nextSibling) {
                  a = a.nextSibling;
                  break e;
                }
                a = a.parentNode;
              }
              a = void 0;
            }
            a = ca(a);
          }
        }
        function da(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? da(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function fa() {
          for (var e = window, t = G(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (a) {
              n = !1;
            }
            if (!n) break;
            t = G((e = t.contentWindow).document);
          }
          return t;
        }
        function ma(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function pa(e) {
          var t = fa(),
            n = e.focusedElem,
            a = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            da(n.ownerDocument.documentElement, n)
          ) {
            if (null !== a && ma(n))
              if (
                ((t = a.start),
                void 0 === (e = a.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var r = n.textContent.length,
                  i = Math.min(a.start, r);
                (a = void 0 === a.end ? i : Math.min(a.end, r)),
                  !e.extend && i > a && ((r = a), (a = i), (i = r)),
                  (r = ua(n, i));
                var s = ua(n, a);
                r &&
                  s &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== r.node ||
                    e.anchorOffset !== r.offset ||
                    e.focusNode !== s.node ||
                    e.focusOffset !== s.offset) &&
                  ((t = t.createRange()).setStart(r.node, r.offset),
                  e.removeAllRanges(),
                  i > a
                    ? (e.addRange(t), e.extend(s.node, s.offset))
                    : (t.setEnd(s.node, s.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var ha = u && "documentMode" in document && 11 >= document.documentMode,
          ga = null,
          va = null,
          ba = null,
          xa = !1;
        function ja(e, t, n) {
          var a =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          xa ||
            null == ga ||
            ga !== G(a) ||
            ("selectionStart" in (a = ga) && ma(a)
              ? (a = { start: a.selectionStart, end: a.selectionEnd })
              : (a = {
                  anchorNode: (a = (
                    (a.ownerDocument && a.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: a.anchorOffset,
                  focusNode: a.focusNode,
                  focusOffset: a.focusOffset,
                }),
            (ba && la(ba, a)) ||
              ((ba = a),
              0 < (a = Ya(va, "onSelect")).length &&
                ((t = new un("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: a }),
                (t.target = ga))));
        }
        function ya(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var Aa = {
            animationend: ya("Animation", "AnimationEnd"),
            animationiteration: ya("Animation", "AnimationIteration"),
            animationstart: ya("Animation", "AnimationStart"),
            transitionend: ya("Transition", "TransitionEnd"),
          },
          wa = {},
          ka = {};
        function Sa(e) {
          if (wa[e]) return wa[e];
          if (!Aa[e]) return e;
          var t,
            n = Aa[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in ka) return (wa[e] = n[t]);
          return e;
        }
        u &&
          ((ka = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete Aa.animationend.animation,
            delete Aa.animationiteration.animation,
            delete Aa.animationstart.animation),
          "TransitionEvent" in window || delete Aa.transitionend.transition);
        var Na = Sa("animationend"),
          za = Sa("animationiteration"),
          Ca = Sa("animationstart"),
          Ea = Sa("transitionend"),
          Pa = new Map(),
          Oa =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Ma(e, t) {
          Pa.set(e, t), l(t, [e]);
        }
        for (var _a = 0; _a < Oa.length; _a++) {
          var Ta = Oa[_a];
          Ma(Ta.toLowerCase(), "on" + (Ta[0].toUpperCase() + Ta.slice(1)));
        }
        Ma(Na, "onAnimationEnd"),
          Ma(za, "onAnimationIteration"),
          Ma(Ca, "onAnimationStart"),
          Ma("dblclick", "onDoubleClick"),
          Ma("focusin", "onFocus"),
          Ma("focusout", "onBlur"),
          Ma(Ea, "onTransitionEnd"),
          c("onMouseEnter", ["mouseout", "mouseover"]),
          c("onMouseLeave", ["mouseout", "mouseover"]),
          c("onPointerEnter", ["pointerout", "pointerover"]),
          c("onPointerLeave", ["pointerout", "pointerover"]),
          l(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          l(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          l("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          l(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          l(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          l(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Da =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          La = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Da)
          );
        function Fa(e, t, n) {
          var a = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, a, r, s, o, l, c) {
              if ((Ve.apply(this, arguments), Le)) {
                if (!Le) throw Error(i(198));
                var u = Fe;
                (Le = !1), (Fe = null), Re || ((Re = !0), (Ie = u));
              }
            })(a, t, void 0, e),
            (e.currentTarget = null);
        }
        function Ra(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var a = e[n],
              r = a.event;
            a = a.listeners;
            e: {
              var i = void 0;
              if (t)
                for (var s = a.length - 1; 0 <= s; s--) {
                  var o = a[s],
                    l = o.instance,
                    c = o.currentTarget;
                  if (((o = o.listener), l !== i && r.isPropagationStopped()))
                    break e;
                  Fa(r, o, c), (i = l);
                }
              else
                for (s = 0; s < a.length; s++) {
                  if (
                    ((l = (o = a[s]).instance),
                    (c = o.currentTarget),
                    (o = o.listener),
                    l !== i && r.isPropagationStopped())
                  )
                    break e;
                  Fa(r, o, c), (i = l);
                }
            }
          }
          if (Re) throw ((e = Ie), (Re = !1), (Ie = null), e);
        }
        function Ia(e, t) {
          var n = t[hr];
          void 0 === n && (n = t[hr] = new Set());
          var a = e + "__bubble";
          n.has(a) || (Ha(t, e, 2, !1), n.add(a));
        }
        function Ba(e, t, n) {
          var a = 0;
          t && (a |= 4), Ha(n, e, a, t);
        }
        var Va = "_reactListening" + Math.random().toString(36).slice(2);
        function Ua(e) {
          if (!e[Va]) {
            (e[Va] = !0),
              s.forEach(function (t) {
                "selectionchange" !== t &&
                  (La.has(t) || Ba(t, !1, e), Ba(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Va] || ((t[Va] = !0), Ba("selectionchange", !1, t));
          }
        }
        function Ha(e, t, n, a) {
          switch ($t(t)) {
            case 1:
              var r = Wt;
              break;
            case 4:
              r = Yt;
              break;
            default:
              r = Qt;
          }
          (n = r.bind(null, t, n, e)),
            (r = void 0),
            !_e ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (r = !0),
            a
              ? void 0 !== r
                ? e.addEventListener(t, n, { capture: !0, passive: r })
                : e.addEventListener(t, n, !0)
              : void 0 !== r
              ? e.addEventListener(t, n, { passive: r })
              : e.addEventListener(t, n, !1);
        }
        function qa(e, t, n, a, r) {
          var i = a;
          if (0 === (1 & t) && 0 === (2 & t) && null !== a)
            e: for (;;) {
              if (null === a) return;
              var s = a.tag;
              if (3 === s || 4 === s) {
                var o = a.stateNode.containerInfo;
                if (o === r || (8 === o.nodeType && o.parentNode === r)) break;
                if (4 === s)
                  for (s = a.return; null !== s; ) {
                    var l = s.tag;
                    if (
                      (3 === l || 4 === l) &&
                      ((l = s.stateNode.containerInfo) === r ||
                        (8 === l.nodeType && l.parentNode === r))
                    )
                      return;
                    s = s.return;
                  }
                for (; null !== o; ) {
                  if (null === (s = br(o))) return;
                  if (5 === (l = s.tag) || 6 === l) {
                    a = i = s;
                    continue e;
                  }
                  o = o.parentNode;
                }
              }
              a = a.return;
            }
          Oe(function () {
            var a = i,
              r = ye(n),
              s = [];
            e: {
              var o = Pa.get(e);
              if (void 0 !== o) {
                var l = un,
                  c = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    l = zn;
                    break;
                  case "focusin":
                    (c = "focus"), (l = gn);
                    break;
                  case "focusout":
                    (c = "blur"), (l = gn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    l = gn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    l = pn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    l = hn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    l = En;
                    break;
                  case Na:
                  case za:
                  case Ca:
                    l = vn;
                    break;
                  case Ea:
                    l = Pn;
                    break;
                  case "scroll":
                    l = fn;
                    break;
                  case "wheel":
                    l = Mn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    l = xn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    l = Cn;
                }
                var u = 0 !== (4 & t),
                  d = !u && "scroll" === e,
                  f = u ? (null !== o ? o + "Capture" : null) : o;
                u = [];
                for (var m, p = a; null !== p; ) {
                  var h = (m = p).stateNode;
                  if (
                    (5 === m.tag &&
                      null !== h &&
                      ((m = h),
                      null !== f &&
                        null != (h = Me(p, f)) &&
                        u.push(Wa(p, h, m))),
                    d)
                  )
                    break;
                  p = p.return;
                }
                0 < u.length &&
                  ((o = new l(o, c, null, n, r)),
                  s.push({ event: o, listeners: u }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((l = "mouseout" === e || "pointerout" === e),
                (!(o = "mouseover" === e || "pointerover" === e) ||
                  n === je ||
                  !(c = n.relatedTarget || n.fromElement) ||
                  (!br(c) && !c[pr])) &&
                  (l || o) &&
                  ((o =
                    r.window === r
                      ? r
                      : (o = r.ownerDocument)
                      ? o.defaultView || o.parentWindow
                      : window),
                  l
                    ? ((l = a),
                      null !==
                        (c = (c = n.relatedTarget || n.toElement)
                          ? br(c)
                          : null) &&
                        (c !== (d = Ue(c)) || (5 !== c.tag && 6 !== c.tag)) &&
                        (c = null))
                    : ((l = null), (c = a)),
                  l !== c))
              ) {
                if (
                  ((u = pn),
                  (h = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (p = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((u = Cn),
                    (h = "onPointerLeave"),
                    (f = "onPointerEnter"),
                    (p = "pointer")),
                  (d = null == l ? o : jr(l)),
                  (m = null == c ? o : jr(c)),
                  ((o = new u(h, p + "leave", l, n, r)).target = d),
                  (o.relatedTarget = m),
                  (h = null),
                  br(r) === a &&
                    (((u = new u(f, p + "enter", c, n, r)).target = m),
                    (u.relatedTarget = d),
                    (h = u)),
                  (d = h),
                  l && c)
                )
                  e: {
                    for (f = c, p = 0, m = u = l; m; m = Qa(m)) p++;
                    for (m = 0, h = f; h; h = Qa(h)) m++;
                    for (; 0 < p - m; ) (u = Qa(u)), p--;
                    for (; 0 < m - p; ) (f = Qa(f)), m--;
                    for (; p--; ) {
                      if (u === f || (null !== f && u === f.alternate)) break e;
                      (u = Qa(u)), (f = Qa(f));
                    }
                    u = null;
                  }
                else u = null;
                null !== l && Ga(s, o, l, u, !1),
                  null !== c && null !== d && Ga(s, d, c, u, !0);
              }
              if (
                "select" ===
                  (l =
                    (o = a ? jr(a) : window).nodeName &&
                    o.nodeName.toLowerCase()) ||
                ("input" === l && "file" === o.type)
              )
                var g = $n;
              else if (qn(o))
                if (Kn) g = sa;
                else {
                  g = ra;
                  var v = aa;
                }
              else
                (l = o.nodeName) &&
                  "input" === l.toLowerCase() &&
                  ("checkbox" === o.type || "radio" === o.type) &&
                  (g = ia);
              switch (
                (g && (g = g(e, a))
                  ? Wn(s, g, n, r)
                  : (v && v(e, o, a),
                    "focusout" === e &&
                      (v = o._wrapperState) &&
                      v.controlled &&
                      "number" === o.type &&
                      ee(o, "number", o.value)),
                (v = a ? jr(a) : window),
                e)
              ) {
                case "focusin":
                  (qn(v) || "true" === v.contentEditable) &&
                    ((ga = v), (va = a), (ba = null));
                  break;
                case "focusout":
                  ba = va = ga = null;
                  break;
                case "mousedown":
                  xa = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (xa = !1), ja(s, n, r);
                  break;
                case "selectionchange":
                  if (ha) break;
                case "keydown":
                case "keyup":
                  ja(s, n, r);
              }
              var b;
              if (Tn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var x = "onCompositionStart";
                      break e;
                    case "compositionend":
                      x = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      x = "onCompositionUpdate";
                      break e;
                  }
                  x = void 0;
                }
              else
                Un
                  ? Bn(e, n) && (x = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (x = "onCompositionStart");
              x &&
                (Fn &&
                  "ko" !== n.locale &&
                  (Un || "onCompositionStart" !== x
                    ? "onCompositionEnd" === x && Un && (b = en())
                    : ((Zt = "value" in (Kt = r) ? Kt.value : Kt.textContent),
                      (Un = !0))),
                0 < (v = Ya(a, x)).length &&
                  ((x = new jn(x, e, null, n, r)),
                  s.push({ event: x, listeners: v }),
                  b ? (x.data = b) : null !== (b = Vn(n)) && (x.data = b))),
                (b = Ln
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Vn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((In = !0), Rn);
                        case "textInput":
                          return (e = t.data) === Rn && In ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Un)
                        return "compositionend" === e || (!Tn && Bn(e, t))
                          ? ((e = en()), (Jt = Zt = Kt = null), (Un = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Fn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (a = Ya(a, "onBeforeInput")).length &&
                  ((r = new jn("onBeforeInput", "beforeinput", null, n, r)),
                  s.push({ event: r, listeners: a }),
                  (r.data = b));
            }
            Ra(s, t);
          });
        }
        function Wa(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Ya(e, t) {
          for (var n = t + "Capture", a = []; null !== e; ) {
            var r = e,
              i = r.stateNode;
            5 === r.tag &&
              null !== i &&
              ((r = i),
              null != (i = Me(e, n)) && a.unshift(Wa(e, i, r)),
              null != (i = Me(e, t)) && a.push(Wa(e, i, r))),
              (e = e.return);
          }
          return a;
        }
        function Qa(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Ga(e, t, n, a, r) {
          for (var i = t._reactName, s = []; null !== n && n !== a; ) {
            var o = n,
              l = o.alternate,
              c = o.stateNode;
            if (null !== l && l === a) break;
            5 === o.tag &&
              null !== c &&
              ((o = c),
              r
                ? null != (l = Me(n, i)) && s.unshift(Wa(n, l, o))
                : r || (null != (l = Me(n, i)) && s.push(Wa(n, l, o)))),
              (n = n.return);
          }
          0 !== s.length && e.push({ event: t, listeners: s });
        }
        var Xa = /\r\n?/g,
          $a = /\u0000|\uFFFD/g;
        function Ka(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Xa, "\n")
            .replace($a, "");
        }
        function Za(e, t, n) {
          if (((t = Ka(t)), Ka(e) !== t && n)) throw Error(i(425));
        }
        function Ja() {}
        var er = null,
          tr = null;
        function nr(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ar = "function" === typeof setTimeout ? setTimeout : void 0,
          rr = "function" === typeof clearTimeout ? clearTimeout : void 0,
          ir = "function" === typeof Promise ? Promise : void 0,
          sr =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof ir
              ? function (e) {
                  return ir.resolve(null).then(e).catch(or);
                }
              : ar;
        function or(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function lr(e, t) {
          var n = t,
            a = 0;
          do {
            var r = n.nextSibling;
            if ((e.removeChild(n), r && 8 === r.nodeType))
              if ("/$" === (n = r.data)) {
                if (0 === a) return e.removeChild(r), void Ut(t);
                a--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || a++;
            n = r;
          } while (n);
          Ut(t);
        }
        function cr(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ur(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var dr = Math.random().toString(36).slice(2),
          fr = "__reactFiber$" + dr,
          mr = "__reactProps$" + dr,
          pr = "__reactContainer$" + dr,
          hr = "__reactEvents$" + dr,
          gr = "__reactListeners$" + dr,
          vr = "__reactHandles$" + dr;
        function br(e) {
          var t = e[fr];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[pr] || n[fr])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ur(e); null !== e; ) {
                  if ((n = e[fr])) return n;
                  e = ur(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function xr(e) {
          return !(e = e[fr] || e[pr]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function jr(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(i(33));
        }
        function yr(e) {
          return e[mr] || null;
        }
        var Ar = [],
          wr = -1;
        function kr(e) {
          return { current: e };
        }
        function Sr(e) {
          0 > wr || ((e.current = Ar[wr]), (Ar[wr] = null), wr--);
        }
        function Nr(e, t) {
          wr++, (Ar[wr] = e.current), (e.current = t);
        }
        var zr = {},
          Cr = kr(zr),
          Er = kr(!1),
          Pr = zr;
        function Or(e, t) {
          var n = e.type.contextTypes;
          if (!n) return zr;
          var a = e.stateNode;
          if (a && a.__reactInternalMemoizedUnmaskedChildContext === t)
            return a.__reactInternalMemoizedMaskedChildContext;
          var r,
            i = {};
          for (r in n) i[r] = t[r];
          return (
            a &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            i
          );
        }
        function Mr(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function _r() {
          Sr(Er), Sr(Cr);
        }
        function Tr(e, t, n) {
          if (Cr.current !== zr) throw Error(i(168));
          Nr(Cr, t), Nr(Er, n);
        }
        function Dr(e, t, n) {
          var a = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof a.getChildContext)
          )
            return n;
          for (var r in (a = a.getChildContext()))
            if (!(r in t)) throw Error(i(108, H(e) || "Unknown", r));
          return F({}, n, a);
        }
        function Lr(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              zr),
            (Pr = Cr.current),
            Nr(Cr, e),
            Nr(Er, Er.current),
            !0
          );
        }
        function Fr(e, t, n) {
          var a = e.stateNode;
          if (!a) throw Error(i(169));
          n
            ? ((e = Dr(e, t, Pr)),
              (a.__reactInternalMemoizedMergedChildContext = e),
              Sr(Er),
              Sr(Cr),
              Nr(Cr, e))
            : Sr(Er),
            Nr(Er, n);
        }
        var Rr = null,
          Ir = !1,
          Br = !1;
        function Vr(e) {
          null === Rr ? (Rr = [e]) : Rr.push(e);
        }
        function Ur() {
          if (!Br && null !== Rr) {
            Br = !0;
            var e = 0,
              t = xt;
            try {
              var n = Rr;
              for (xt = 1; e < n.length; e++) {
                var a = n[e];
                do {
                  a = a(!0);
                } while (null !== a);
              }
              (Rr = null), (Ir = !1);
            } catch (r) {
              throw (null !== Rr && (Rr = Rr.slice(e + 1)), Qe(Je, Ur), r);
            } finally {
              (xt = t), (Br = !1);
            }
          }
          return null;
        }
        var Hr = [],
          qr = 0,
          Wr = null,
          Yr = 0,
          Qr = [],
          Gr = 0,
          Xr = null,
          $r = 1,
          Kr = "";
        function Zr(e, t) {
          (Hr[qr++] = Yr), (Hr[qr++] = Wr), (Wr = e), (Yr = t);
        }
        function Jr(e, t, n) {
          (Qr[Gr++] = $r), (Qr[Gr++] = Kr), (Qr[Gr++] = Xr), (Xr = e);
          var a = $r;
          e = Kr;
          var r = 32 - st(a) - 1;
          (a &= ~(1 << r)), (n += 1);
          var i = 32 - st(t) + r;
          if (30 < i) {
            var s = r - (r % 5);
            (i = (a & ((1 << s) - 1)).toString(32)),
              (a >>= s),
              (r -= s),
              ($r = (1 << (32 - st(t) + r)) | (n << r) | a),
              (Kr = i + e);
          } else ($r = (1 << i) | (n << r) | a), (Kr = e);
        }
        function ei(e) {
          null !== e.return && (Zr(e, 1), Jr(e, 1, 0));
        }
        function ti(e) {
          for (; e === Wr; )
            (Wr = Hr[--qr]), (Hr[qr] = null), (Yr = Hr[--qr]), (Hr[qr] = null);
          for (; e === Xr; )
            (Xr = Qr[--Gr]),
              (Qr[Gr] = null),
              (Kr = Qr[--Gr]),
              (Qr[Gr] = null),
              ($r = Qr[--Gr]),
              (Qr[Gr] = null);
        }
        var ni = null,
          ai = null,
          ri = !1,
          ii = null;
        function si(e, t) {
          var n = Oc(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function oi(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (ni = e), (ai = cr(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (ni = e), (ai = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Xr ? { id: $r, overflow: Kr } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Oc(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (ni = e),
                (ai = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function li(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function ci(e) {
          if (ri) {
            var t = ai;
            if (t) {
              var n = t;
              if (!oi(e, t)) {
                if (li(e)) throw Error(i(418));
                t = cr(n.nextSibling);
                var a = ni;
                t && oi(e, t)
                  ? si(a, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ri = !1), (ni = e));
              }
            } else {
              if (li(e)) throw Error(i(418));
              (e.flags = (-4097 & e.flags) | 2), (ri = !1), (ni = e);
            }
          }
        }
        function ui(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          ni = e;
        }
        function di(e) {
          if (e !== ni) return !1;
          if (!ri) return ui(e), (ri = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !nr(e.type, e.memoizedProps)),
            t && (t = ai))
          ) {
            if (li(e)) throw (fi(), Error(i(418)));
            for (; t; ) si(e, t), (t = cr(t.nextSibling));
          }
          if ((ui(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(i(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ai = cr(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ai = null;
            }
          } else ai = ni ? cr(e.stateNode.nextSibling) : null;
          return !0;
        }
        function fi() {
          for (var e = ai; e; ) e = cr(e.nextSibling);
        }
        function mi() {
          (ai = ni = null), (ri = !1);
        }
        function pi(e) {
          null === ii ? (ii = [e]) : ii.push(e);
        }
        var hi = j.ReactCurrentBatchConfig;
        function gi(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = F({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var vi = kr(null),
          bi = null,
          xi = null,
          ji = null;
        function yi() {
          ji = xi = bi = null;
        }
        function Ai(e) {
          var t = vi.current;
          Sr(vi), (e._currentValue = t);
        }
        function wi(e, t, n) {
          for (; null !== e; ) {
            var a = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== a && (a.childLanes |= t))
                : null !== a && (a.childLanes & t) !== t && (a.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function ki(e, t) {
          (bi = e),
            (ji = xi = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (jo = !0), (e.firstContext = null));
        }
        function Si(e) {
          var t = e._currentValue;
          if (ji !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === xi)
            ) {
              if (null === bi) throw Error(i(308));
              (xi = e), (bi.dependencies = { lanes: 0, firstContext: e });
            } else xi = xi.next = e;
          return t;
        }
        var Ni = null;
        function zi(e) {
          null === Ni ? (Ni = [e]) : Ni.push(e);
        }
        function Ci(e, t, n, a) {
          var r = t.interleaved;
          return (
            null === r
              ? ((n.next = n), zi(t))
              : ((n.next = r.next), (r.next = n)),
            (t.interleaved = n),
            Ei(e, a)
          );
        }
        function Ei(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Pi = !1;
        function Oi(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Mi(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function _i(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Ti(e, t, n) {
          var a = e.updateQueue;
          if (null === a) return null;
          if (((a = a.shared), 0 !== (2 & Cl))) {
            var r = a.pending;
            return (
              null === r ? (t.next = t) : ((t.next = r.next), (r.next = t)),
              (a.pending = t),
              Ei(e, n)
            );
          }
          return (
            null === (r = a.interleaved)
              ? ((t.next = t), zi(a))
              : ((t.next = r.next), (r.next = t)),
            (a.interleaved = t),
            Ei(e, n)
          );
        }
        function Di(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var a = t.lanes;
            (n |= a &= e.pendingLanes), (t.lanes = n), bt(e, n);
          }
        }
        function Li(e, t) {
          var n = e.updateQueue,
            a = e.alternate;
          if (null !== a && n === (a = a.updateQueue)) {
            var r = null,
              i = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var s = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === i ? (r = i = s) : (i = i.next = s), (n = n.next);
              } while (null !== n);
              null === i ? (r = i = t) : (i = i.next = t);
            } else r = i = t;
            return (
              (n = {
                baseState: a.baseState,
                firstBaseUpdate: r,
                lastBaseUpdate: i,
                shared: a.shared,
                effects: a.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Fi(e, t, n, a) {
          var r = e.updateQueue;
          Pi = !1;
          var i = r.firstBaseUpdate,
            s = r.lastBaseUpdate,
            o = r.shared.pending;
          if (null !== o) {
            r.shared.pending = null;
            var l = o,
              c = l.next;
            (l.next = null), null === s ? (i = c) : (s.next = c), (s = l);
            var u = e.alternate;
            null !== u &&
              (o = (u = u.updateQueue).lastBaseUpdate) !== s &&
              (null === o ? (u.firstBaseUpdate = c) : (o.next = c),
              (u.lastBaseUpdate = l));
          }
          if (null !== i) {
            var d = r.baseState;
            for (s = 0, u = c = l = null, o = i; ; ) {
              var f = o.lane,
                m = o.eventTime;
              if ((a & f) === f) {
                null !== u &&
                  (u = u.next =
                    {
                      eventTime: m,
                      lane: 0,
                      tag: o.tag,
                      payload: o.payload,
                      callback: o.callback,
                      next: null,
                    });
                e: {
                  var p = e,
                    h = o;
                  switch (((f = t), (m = n), h.tag)) {
                    case 1:
                      if ("function" === typeof (p = h.payload)) {
                        d = p.call(m, d, f);
                        break e;
                      }
                      d = p;
                      break e;
                    case 3:
                      p.flags = (-65537 & p.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (f =
                            "function" === typeof (p = h.payload)
                              ? p.call(m, d, f)
                              : p) ||
                        void 0 === f
                      )
                        break e;
                      d = F({}, d, f);
                      break e;
                    case 2:
                      Pi = !0;
                  }
                }
                null !== o.callback &&
                  0 !== o.lane &&
                  ((e.flags |= 64),
                  null === (f = r.effects) ? (r.effects = [o]) : f.push(o));
              } else
                (m = {
                  eventTime: m,
                  lane: f,
                  tag: o.tag,
                  payload: o.payload,
                  callback: o.callback,
                  next: null,
                }),
                  null === u ? ((c = u = m), (l = d)) : (u = u.next = m),
                  (s |= f);
              if (null === (o = o.next)) {
                if (null === (o = r.shared.pending)) break;
                (o = (f = o).next),
                  (f.next = null),
                  (r.lastBaseUpdate = f),
                  (r.shared.pending = null);
              }
            }
            if (
              (null === u && (l = d),
              (r.baseState = l),
              (r.firstBaseUpdate = c),
              (r.lastBaseUpdate = u),
              null !== (t = r.shared.interleaved))
            ) {
              r = t;
              do {
                (s |= r.lane), (r = r.next);
              } while (r !== t);
            } else null === i && (r.shared.lanes = 0);
            (Ll |= s), (e.lanes = s), (e.memoizedState = d);
          }
        }
        function Ri(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var a = e[t],
                r = a.callback;
              if (null !== r) {
                if (((a.callback = null), (a = n), "function" !== typeof r))
                  throw Error(i(191, r));
                r.call(a);
              }
            }
        }
        var Ii = new a.Component().refs;
        function Bi(e, t, n, a) {
          (n =
            null === (n = n(a, (t = e.memoizedState))) || void 0 === n
              ? t
              : F({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Vi = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Ue(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var a = ec(),
              r = tc(e),
              i = _i(a, r);
            (i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              null !== (t = Ti(e, i, r)) && (nc(t, e, r, a), Di(t, e, r));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var a = ec(),
              r = tc(e),
              i = _i(a, r);
            (i.tag = 1),
              (i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              null !== (t = Ti(e, i, r)) && (nc(t, e, r, a), Di(t, e, r));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = ec(),
              a = tc(e),
              r = _i(n, a);
            (r.tag = 2),
              void 0 !== t && null !== t && (r.callback = t),
              null !== (t = Ti(e, r, a)) && (nc(t, e, a, n), Di(t, e, a));
          },
        };
        function Ui(e, t, n, a, r, i, s) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(a, i, s)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !la(n, a) ||
                !la(r, i);
        }
        function Hi(e, t, n) {
          var a = !1,
            r = zr,
            i = t.contextType;
          return (
            "object" === typeof i && null !== i
              ? (i = Si(i))
              : ((r = Mr(t) ? Pr : Cr.current),
                (i = (a = null !== (a = t.contextTypes) && void 0 !== a)
                  ? Or(e, r)
                  : zr)),
            (t = new t(n, i)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Vi),
            (e.stateNode = t),
            (t._reactInternals = e),
            a &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                r),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            t
          );
        }
        function qi(e, t, n, a) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, a),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, a),
            t.state !== e && Vi.enqueueReplaceState(t, t.state, null);
        }
        function Wi(e, t, n, a) {
          var r = e.stateNode;
          (r.props = n), (r.state = e.memoizedState), (r.refs = Ii), Oi(e);
          var i = t.contextType;
          "object" === typeof i && null !== i
            ? (r.context = Si(i))
            : ((i = Mr(t) ? Pr : Cr.current), (r.context = Or(e, i))),
            (r.state = e.memoizedState),
            "function" === typeof (i = t.getDerivedStateFromProps) &&
              (Bi(e, t, i, n), (r.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof r.getSnapshotBeforeUpdate ||
              ("function" !== typeof r.UNSAFE_componentWillMount &&
                "function" !== typeof r.componentWillMount) ||
              ((t = r.state),
              "function" === typeof r.componentWillMount &&
                r.componentWillMount(),
              "function" === typeof r.UNSAFE_componentWillMount &&
                r.UNSAFE_componentWillMount(),
              t !== r.state && Vi.enqueueReplaceState(r, r.state, null),
              Fi(e, n, r, a),
              (r.state = e.memoizedState)),
            "function" === typeof r.componentDidMount && (e.flags |= 4194308);
        }
        function Yi(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(i(309));
                var a = n.stateNode;
              }
              if (!a) throw Error(i(147, e));
              var r = a,
                s = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === s
                ? t.ref
                : ((t = function (e) {
                    var t = r.refs;
                    t === Ii && (t = r.refs = {}),
                      null === e ? delete t[s] : (t[s] = e);
                  }),
                  (t._stringRef = s),
                  t);
            }
            if ("string" !== typeof e) throw Error(i(284));
            if (!n._owner) throw Error(i(290, e));
          }
          return e;
        }
        function Qi(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              i(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Gi(e) {
          return (0, e._init)(e._payload);
        }
        function Xi(e) {
          function t(t, n) {
            if (e) {
              var a = t.deletions;
              null === a ? ((t.deletions = [n]), (t.flags |= 16)) : a.push(n);
            }
          }
          function n(n, a) {
            if (!e) return null;
            for (; null !== a; ) t(n, a), (a = a.sibling);
            return null;
          }
          function a(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function r(e, t) {
            return ((e = _c(e, t)).index = 0), (e.sibling = null), e;
          }
          function s(t, n, a) {
            return (
              (t.index = a),
              e
                ? null !== (a = t.alternate)
                  ? (a = a.index) < n
                    ? ((t.flags |= 2), n)
                    : a
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function o(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function l(e, t, n, a) {
            return null === t || 6 !== t.tag
              ? (((t = Fc(n, e.mode, a)).return = e), t)
              : (((t = r(t, n)).return = e), t);
          }
          function c(e, t, n, a) {
            var i = n.type;
            return i === w
              ? d(e, t, n.props.children, a, n.key)
              : null !== t &&
                (t.elementType === i ||
                  ("object" === typeof i &&
                    null !== i &&
                    i.$$typeof === M &&
                    Gi(i) === t.type))
              ? (((a = r(t, n.props)).ref = Yi(e, t, n)), (a.return = e), a)
              : (((a = Tc(n.type, n.key, n.props, null, e.mode, a)).ref = Yi(
                  e,
                  t,
                  n
                )),
                (a.return = e),
                a);
          }
          function u(e, t, n, a) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Rc(n, e.mode, a)).return = e), t)
              : (((t = r(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, a, i) {
            return null === t || 7 !== t.tag
              ? (((t = Dc(n, e.mode, a, i)).return = e), t)
              : (((t = r(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Fc("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case y:
                  return (
                    ((n = Tc(t.type, t.key, t.props, null, e.mode, n)).ref = Yi(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case A:
                  return ((t = Rc(t, e.mode, n)).return = e), t;
                case M:
                  return f(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || D(t))
                return ((t = Dc(t, e.mode, n, null)).return = e), t;
              Qi(e, t);
            }
            return null;
          }
          function m(e, t, n, a) {
            var r = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== r ? null : l(e, t, "" + n, a);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case y:
                  return n.key === r ? c(e, t, n, a) : null;
                case A:
                  return n.key === r ? u(e, t, n, a) : null;
                case M:
                  return m(e, t, (r = n._init)(n._payload), a);
              }
              if (te(n) || D(n)) return null !== r ? null : d(e, t, n, a, null);
              Qi(e, n);
            }
            return null;
          }
          function p(e, t, n, a, r) {
            if (("string" === typeof a && "" !== a) || "number" === typeof a)
              return l(t, (e = e.get(n) || null), "" + a, r);
            if ("object" === typeof a && null !== a) {
              switch (a.$$typeof) {
                case y:
                  return c(
                    t,
                    (e = e.get(null === a.key ? n : a.key) || null),
                    a,
                    r
                  );
                case A:
                  return u(
                    t,
                    (e = e.get(null === a.key ? n : a.key) || null),
                    a,
                    r
                  );
                case M:
                  return p(e, t, n, (0, a._init)(a._payload), r);
              }
              if (te(a) || D(a))
                return d(t, (e = e.get(n) || null), a, r, null);
              Qi(t, a);
            }
            return null;
          }
          function h(r, i, o, l) {
            for (
              var c = null, u = null, d = i, h = (i = 0), g = null;
              null !== d && h < o.length;
              h++
            ) {
              d.index > h ? ((g = d), (d = null)) : (g = d.sibling);
              var v = m(r, d, o[h], l);
              if (null === v) {
                null === d && (d = g);
                break;
              }
              e && d && null === v.alternate && t(r, d),
                (i = s(v, i, h)),
                null === u ? (c = v) : (u.sibling = v),
                (u = v),
                (d = g);
            }
            if (h === o.length) return n(r, d), ri && Zr(r, h), c;
            if (null === d) {
              for (; h < o.length; h++)
                null !== (d = f(r, o[h], l)) &&
                  ((i = s(d, i, h)),
                  null === u ? (c = d) : (u.sibling = d),
                  (u = d));
              return ri && Zr(r, h), c;
            }
            for (d = a(r, d); h < o.length; h++)
              null !== (g = p(d, r, h, o[h], l)) &&
                (e &&
                  null !== g.alternate &&
                  d.delete(null === g.key ? h : g.key),
                (i = s(g, i, h)),
                null === u ? (c = g) : (u.sibling = g),
                (u = g));
            return (
              e &&
                d.forEach(function (e) {
                  return t(r, e);
                }),
              ri && Zr(r, h),
              c
            );
          }
          function g(r, o, l, c) {
            var u = D(l);
            if ("function" !== typeof u) throw Error(i(150));
            if (null == (l = u.call(l))) throw Error(i(151));
            for (
              var d = (u = null), h = o, g = (o = 0), v = null, b = l.next();
              null !== h && !b.done;
              g++, b = l.next()
            ) {
              h.index > g ? ((v = h), (h = null)) : (v = h.sibling);
              var x = m(r, h, b.value, c);
              if (null === x) {
                null === h && (h = v);
                break;
              }
              e && h && null === x.alternate && t(r, h),
                (o = s(x, o, g)),
                null === d ? (u = x) : (d.sibling = x),
                (d = x),
                (h = v);
            }
            if (b.done) return n(r, h), ri && Zr(r, g), u;
            if (null === h) {
              for (; !b.done; g++, b = l.next())
                null !== (b = f(r, b.value, c)) &&
                  ((o = s(b, o, g)),
                  null === d ? (u = b) : (d.sibling = b),
                  (d = b));
              return ri && Zr(r, g), u;
            }
            for (h = a(r, h); !b.done; g++, b = l.next())
              null !== (b = p(h, r, g, b.value, c)) &&
                (e &&
                  null !== b.alternate &&
                  h.delete(null === b.key ? g : b.key),
                (o = s(b, o, g)),
                null === d ? (u = b) : (d.sibling = b),
                (d = b));
            return (
              e &&
                h.forEach(function (e) {
                  return t(r, e);
                }),
              ri && Zr(r, g),
              u
            );
          }
          return function e(a, i, s, l) {
            if (
              ("object" === typeof s &&
                null !== s &&
                s.type === w &&
                null === s.key &&
                (s = s.props.children),
              "object" === typeof s && null !== s)
            ) {
              switch (s.$$typeof) {
                case y:
                  e: {
                    for (var c = s.key, u = i; null !== u; ) {
                      if (u.key === c) {
                        if ((c = s.type) === w) {
                          if (7 === u.tag) {
                            n(a, u.sibling),
                              ((i = r(u, s.props.children)).return = a),
                              (a = i);
                            break e;
                          }
                        } else if (
                          u.elementType === c ||
                          ("object" === typeof c &&
                            null !== c &&
                            c.$$typeof === M &&
                            Gi(c) === u.type)
                        ) {
                          n(a, u.sibling),
                            ((i = r(u, s.props)).ref = Yi(a, u, s)),
                            (i.return = a),
                            (a = i);
                          break e;
                        }
                        n(a, u);
                        break;
                      }
                      t(a, u), (u = u.sibling);
                    }
                    s.type === w
                      ? (((i = Dc(s.props.children, a.mode, l, s.key)).return =
                          a),
                        (a = i))
                      : (((l = Tc(
                          s.type,
                          s.key,
                          s.props,
                          null,
                          a.mode,
                          l
                        )).ref = Yi(a, i, s)),
                        (l.return = a),
                        (a = l));
                  }
                  return o(a);
                case A:
                  e: {
                    for (u = s.key; null !== i; ) {
                      if (i.key === u) {
                        if (
                          4 === i.tag &&
                          i.stateNode.containerInfo === s.containerInfo &&
                          i.stateNode.implementation === s.implementation
                        ) {
                          n(a, i.sibling),
                            ((i = r(i, s.children || [])).return = a),
                            (a = i);
                          break e;
                        }
                        n(a, i);
                        break;
                      }
                      t(a, i), (i = i.sibling);
                    }
                    ((i = Rc(s, a.mode, l)).return = a), (a = i);
                  }
                  return o(a);
                case M:
                  return e(a, i, (u = s._init)(s._payload), l);
              }
              if (te(s)) return h(a, i, s, l);
              if (D(s)) return g(a, i, s, l);
              Qi(a, s);
            }
            return ("string" === typeof s && "" !== s) || "number" === typeof s
              ? ((s = "" + s),
                null !== i && 6 === i.tag
                  ? (n(a, i.sibling), ((i = r(i, s)).return = a), (a = i))
                  : (n(a, i), ((i = Fc(s, a.mode, l)).return = a), (a = i)),
                o(a))
              : n(a, i);
          };
        }
        var $i = Xi(!0),
          Ki = Xi(!1),
          Zi = {},
          Ji = kr(Zi),
          es = kr(Zi),
          ts = kr(Zi);
        function ns(e) {
          if (e === Zi) throw Error(i(174));
          return e;
        }
        function as(e, t) {
          switch ((Nr(ts, t), Nr(es, e), Nr(Ji, Zi), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : le(null, "");
              break;
            default:
              t = le(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Sr(Ji), Nr(Ji, t);
        }
        function rs() {
          Sr(Ji), Sr(es), Sr(ts);
        }
        function is(e) {
          ns(ts.current);
          var t = ns(Ji.current),
            n = le(t, e.type);
          t !== n && (Nr(es, e), Nr(Ji, n));
        }
        function ss(e) {
          es.current === e && (Sr(Ji), Sr(es));
        }
        var os = kr(0);
        function ls(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var cs = [];
        function us() {
          for (var e = 0; e < cs.length; e++)
            cs[e]._workInProgressVersionPrimary = null;
          cs.length = 0;
        }
        var ds = j.ReactCurrentDispatcher,
          fs = j.ReactCurrentBatchConfig,
          ms = 0,
          ps = null,
          hs = null,
          gs = null,
          vs = !1,
          bs = !1,
          xs = 0,
          js = 0;
        function ys() {
          throw Error(i(321));
        }
        function As(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!oa(e[n], t[n])) return !1;
          return !0;
        }
        function ws(e, t, n, a, r, s) {
          if (
            ((ms = s),
            (ps = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (ds.current = null === e || null === e.memoizedState ? so : oo),
            (e = n(a, r)),
            bs)
          ) {
            s = 0;
            do {
              if (((bs = !1), (xs = 0), 25 <= s)) throw Error(i(301));
              (s += 1),
                (gs = hs = null),
                (t.updateQueue = null),
                (ds.current = lo),
                (e = n(a, r));
            } while (bs);
          }
          if (
            ((ds.current = io),
            (t = null !== hs && null !== hs.next),
            (ms = 0),
            (gs = hs = ps = null),
            (vs = !1),
            t)
          )
            throw Error(i(300));
          return e;
        }
        function ks() {
          var e = 0 !== xs;
          return (xs = 0), e;
        }
        function Ss() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === gs ? (ps.memoizedState = gs = e) : (gs = gs.next = e), gs
          );
        }
        function Ns() {
          if (null === hs) {
            var e = ps.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = hs.next;
          var t = null === gs ? ps.memoizedState : gs.next;
          if (null !== t) (gs = t), (hs = e);
          else {
            if (null === e) throw Error(i(310));
            (e = {
              memoizedState: (hs = e).memoizedState,
              baseState: hs.baseState,
              baseQueue: hs.baseQueue,
              queue: hs.queue,
              next: null,
            }),
              null === gs ? (ps.memoizedState = gs = e) : (gs = gs.next = e);
          }
          return gs;
        }
        function zs(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function Cs(e) {
          var t = Ns(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var a = hs,
            r = a.baseQueue,
            s = n.pending;
          if (null !== s) {
            if (null !== r) {
              var o = r.next;
              (r.next = s.next), (s.next = o);
            }
            (a.baseQueue = r = s), (n.pending = null);
          }
          if (null !== r) {
            (s = r.next), (a = a.baseState);
            var l = (o = null),
              c = null,
              u = s;
            do {
              var d = u.lane;
              if ((ms & d) === d)
                null !== c &&
                  (c = c.next =
                    {
                      lane: 0,
                      action: u.action,
                      hasEagerState: u.hasEagerState,
                      eagerState: u.eagerState,
                      next: null,
                    }),
                  (a = u.hasEagerState ? u.eagerState : e(a, u.action));
              else {
                var f = {
                  lane: d,
                  action: u.action,
                  hasEagerState: u.hasEagerState,
                  eagerState: u.eagerState,
                  next: null,
                };
                null === c ? ((l = c = f), (o = a)) : (c = c.next = f),
                  (ps.lanes |= d),
                  (Ll |= d);
              }
              u = u.next;
            } while (null !== u && u !== s);
            null === c ? (o = a) : (c.next = l),
              oa(a, t.memoizedState) || (jo = !0),
              (t.memoizedState = a),
              (t.baseState = o),
              (t.baseQueue = c),
              (n.lastRenderedState = a);
          }
          if (null !== (e = n.interleaved)) {
            r = e;
            do {
              (s = r.lane), (ps.lanes |= s), (Ll |= s), (r = r.next);
            } while (r !== e);
          } else null === r && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Es(e) {
          var t = Ns(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var a = n.dispatch,
            r = n.pending,
            s = t.memoizedState;
          if (null !== r) {
            n.pending = null;
            var o = (r = r.next);
            do {
              (s = e(s, o.action)), (o = o.next);
            } while (o !== r);
            oa(s, t.memoizedState) || (jo = !0),
              (t.memoizedState = s),
              null === t.baseQueue && (t.baseState = s),
              (n.lastRenderedState = s);
          }
          return [s, a];
        }
        function Ps() {}
        function Os(e, t) {
          var n = ps,
            a = Ns(),
            r = t(),
            s = !oa(a.memoizedState, r);
          if (
            (s && ((a.memoizedState = r), (jo = !0)),
            (a = a.queue),
            Hs(Ts.bind(null, n, a, e), [e]),
            a.getSnapshot !== t ||
              s ||
              (null !== gs && 1 & gs.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Rs(9, _s.bind(null, n, a, r, t), void 0, null),
              null === El)
            )
              throw Error(i(349));
            0 !== (30 & ms) || Ms(n, t, r);
          }
          return r;
        }
        function Ms(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = ps.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (ps.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function _s(e, t, n, a) {
          (t.value = n), (t.getSnapshot = a), Ds(t) && Ls(e);
        }
        function Ts(e, t, n) {
          return n(function () {
            Ds(t) && Ls(e);
          });
        }
        function Ds(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !oa(e, n);
          } catch (a) {
            return !0;
          }
        }
        function Ls(e) {
          var t = Ei(e, 1);
          null !== t && nc(t, e, 1, -1);
        }
        function Fs(e) {
          var t = Ss();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: zs,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = to.bind(null, ps, e)),
            [t.memoizedState, e]
          );
        }
        function Rs(e, t, n, a) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: a, next: null }),
            null === (t = ps.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (ps.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((a = n.next), (n.next = e), (e.next = a), (t.lastEffect = e)),
            e
          );
        }
        function Is() {
          return Ns().memoizedState;
        }
        function Bs(e, t, n, a) {
          var r = Ss();
          (ps.flags |= e),
            (r.memoizedState = Rs(1 | t, n, void 0, void 0 === a ? null : a));
        }
        function Vs(e, t, n, a) {
          var r = Ns();
          a = void 0 === a ? null : a;
          var i = void 0;
          if (null !== hs) {
            var s = hs.memoizedState;
            if (((i = s.destroy), null !== a && As(a, s.deps)))
              return void (r.memoizedState = Rs(t, n, i, a));
          }
          (ps.flags |= e), (r.memoizedState = Rs(1 | t, n, i, a));
        }
        function Us(e, t) {
          return Bs(8390656, 8, e, t);
        }
        function Hs(e, t) {
          return Vs(2048, 8, e, t);
        }
        function qs(e, t) {
          return Vs(4, 2, e, t);
        }
        function Ws(e, t) {
          return Vs(4, 4, e, t);
        }
        function Ys(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Qs(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Vs(4, 4, Ys.bind(null, t, e), n)
          );
        }
        function Gs() {}
        function Xs(e, t) {
          var n = Ns();
          t = void 0 === t ? null : t;
          var a = n.memoizedState;
          return null !== a && null !== t && As(t, a[1])
            ? a[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function $s(e, t) {
          var n = Ns();
          t = void 0 === t ? null : t;
          var a = n.memoizedState;
          return null !== a && null !== t && As(t, a[1])
            ? a[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Ks(e, t, n) {
          return 0 === (21 & ms)
            ? (e.baseState && ((e.baseState = !1), (jo = !0)),
              (e.memoizedState = n))
            : (oa(n, t) ||
                ((n = ht()), (ps.lanes |= n), (Ll |= n), (e.baseState = !0)),
              t);
        }
        function Zs(e, t) {
          var n = xt;
          (xt = 0 !== n && 4 > n ? n : 4), e(!0);
          var a = fs.transition;
          fs.transition = {};
          try {
            e(!1), t();
          } finally {
            (xt = n), (fs.transition = a);
          }
        }
        function Js() {
          return Ns().memoizedState;
        }
        function eo(e, t, n) {
          var a = tc(e);
          if (
            ((n = {
              lane: a,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            no(e))
          )
            ao(t, n);
          else if (null !== (n = Ci(e, t, n, a))) {
            nc(n, e, a, ec()), ro(n, t, a);
          }
        }
        function to(e, t, n) {
          var a = tc(e),
            r = {
              lane: a,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (no(e)) ao(t, r);
          else {
            var i = e.alternate;
            if (
              0 === e.lanes &&
              (null === i || 0 === i.lanes) &&
              null !== (i = t.lastRenderedReducer)
            )
              try {
                var s = t.lastRenderedState,
                  o = i(s, n);
                if (((r.hasEagerState = !0), (r.eagerState = o), oa(o, s))) {
                  var l = t.interleaved;
                  return (
                    null === l
                      ? ((r.next = r), zi(t))
                      : ((r.next = l.next), (l.next = r)),
                    void (t.interleaved = r)
                  );
                }
              } catch (c) {}
            null !== (n = Ci(e, t, r, a)) &&
              (nc(n, e, a, (r = ec())), ro(n, t, a));
          }
        }
        function no(e) {
          var t = e.alternate;
          return e === ps || (null !== t && t === ps);
        }
        function ao(e, t) {
          bs = vs = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function ro(e, t, n) {
          if (0 !== (4194240 & n)) {
            var a = t.lanes;
            (n |= a &= e.pendingLanes), (t.lanes = n), bt(e, n);
          }
        }
        var io = {
            readContext: Si,
            useCallback: ys,
            useContext: ys,
            useEffect: ys,
            useImperativeHandle: ys,
            useInsertionEffect: ys,
            useLayoutEffect: ys,
            useMemo: ys,
            useReducer: ys,
            useRef: ys,
            useState: ys,
            useDebugValue: ys,
            useDeferredValue: ys,
            useTransition: ys,
            useMutableSource: ys,
            useSyncExternalStore: ys,
            useId: ys,
            unstable_isNewReconciler: !1,
          },
          so = {
            readContext: Si,
            useCallback: function (e, t) {
              return (Ss().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Si,
            useEffect: Us,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Bs(4194308, 4, Ys.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Bs(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Bs(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Ss();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var a = Ss();
              return (
                (t = void 0 !== n ? n(t) : t),
                (a.memoizedState = a.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (a.queue = e),
                (e = e.dispatch = eo.bind(null, ps, e)),
                [a.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Ss().memoizedState = e);
            },
            useState: Fs,
            useDebugValue: Gs,
            useDeferredValue: function (e) {
              return (Ss().memoizedState = e);
            },
            useTransition: function () {
              var e = Fs(!1),
                t = e[0];
              return (
                (e = Zs.bind(null, e[1])), (Ss().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var a = ps,
                r = Ss();
              if (ri) {
                if (void 0 === n) throw Error(i(407));
                n = n();
              } else {
                if (((n = t()), null === El)) throw Error(i(349));
                0 !== (30 & ms) || Ms(a, t, n);
              }
              r.memoizedState = n;
              var s = { value: n, getSnapshot: t };
              return (
                (r.queue = s),
                Us(Ts.bind(null, a, s, e), [e]),
                (a.flags |= 2048),
                Rs(9, _s.bind(null, a, s, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Ss(),
                t = El.identifierPrefix;
              if (ri) {
                var n = Kr;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = ($r & ~(1 << (32 - st($r) - 1))).toString(32) + n)),
                  0 < (n = xs++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = js++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          oo = {
            readContext: Si,
            useCallback: Xs,
            useContext: Si,
            useEffect: Hs,
            useImperativeHandle: Qs,
            useInsertionEffect: qs,
            useLayoutEffect: Ws,
            useMemo: $s,
            useReducer: Cs,
            useRef: Is,
            useState: function () {
              return Cs(zs);
            },
            useDebugValue: Gs,
            useDeferredValue: function (e) {
              return Ks(Ns(), hs.memoizedState, e);
            },
            useTransition: function () {
              return [Cs(zs)[0], Ns().memoizedState];
            },
            useMutableSource: Ps,
            useSyncExternalStore: Os,
            useId: Js,
            unstable_isNewReconciler: !1,
          },
          lo = {
            readContext: Si,
            useCallback: Xs,
            useContext: Si,
            useEffect: Hs,
            useImperativeHandle: Qs,
            useInsertionEffect: qs,
            useLayoutEffect: Ws,
            useMemo: $s,
            useReducer: Es,
            useRef: Is,
            useState: function () {
              return Es(zs);
            },
            useDebugValue: Gs,
            useDeferredValue: function (e) {
              var t = Ns();
              return null === hs
                ? (t.memoizedState = e)
                : Ks(t, hs.memoizedState, e);
            },
            useTransition: function () {
              return [Es(zs)[0], Ns().memoizedState];
            },
            useMutableSource: Ps,
            useSyncExternalStore: Os,
            useId: Js,
            unstable_isNewReconciler: !1,
          };
        function co(e, t) {
          try {
            var n = "",
              a = t;
            do {
              (n += V(a)), (a = a.return);
            } while (a);
            var r = n;
          } catch (i) {
            r = "\nError generating stack: " + i.message + "\n" + i.stack;
          }
          return { value: e, source: t, stack: r, digest: null };
        }
        function uo(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function fo(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var mo = "function" === typeof WeakMap ? WeakMap : Map;
        function po(e, t, n) {
          ((n = _i(-1, n)).tag = 3), (n.payload = { element: null });
          var a = t.value;
          return (
            (n.callback = function () {
              ql || ((ql = !0), (Wl = a)), fo(0, t);
            }),
            n
          );
        }
        function ho(e, t, n) {
          (n = _i(-1, n)).tag = 3;
          var a = e.type.getDerivedStateFromError;
          if ("function" === typeof a) {
            var r = t.value;
            (n.payload = function () {
              return a(r);
            }),
              (n.callback = function () {
                fo(0, t);
              });
          }
          var i = e.stateNode;
          return (
            null !== i &&
              "function" === typeof i.componentDidCatch &&
              (n.callback = function () {
                fo(0, t),
                  "function" !== typeof a &&
                    (null === Yl ? (Yl = new Set([this])) : Yl.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function go(e, t, n) {
          var a = e.pingCache;
          if (null === a) {
            a = e.pingCache = new mo();
            var r = new Set();
            a.set(t, r);
          } else void 0 === (r = a.get(t)) && ((r = new Set()), a.set(t, r));
          r.has(n) || (r.add(n), (e = Sc.bind(null, e, t, n)), t.then(e, e));
        }
        function vo(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function bo(e, t, n, a, r) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = _i(-1, 1)).tag = 2), Ti(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = r), e);
        }
        var xo = j.ReactCurrentOwner,
          jo = !1;
        function yo(e, t, n, a) {
          t.child = null === e ? Ki(t, null, n, a) : $i(t, e.child, n, a);
        }
        function Ao(e, t, n, a, r) {
          n = n.render;
          var i = t.ref;
          return (
            ki(t, r),
            (a = ws(e, t, n, a, i, r)),
            (n = ks()),
            null === e || jo
              ? (ri && n && ei(t), (t.flags |= 1), yo(e, t, a, r), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~r),
                qo(e, t, r))
          );
        }
        function wo(e, t, n, a, r) {
          if (null === e) {
            var i = n.type;
            return "function" !== typeof i ||
              Mc(i) ||
              void 0 !== i.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Tc(n.type, null, a, t, t.mode, r)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = i), ko(e, t, i, a, r));
          }
          if (((i = e.child), 0 === (e.lanes & r))) {
            var s = i.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : la)(s, a) &&
              e.ref === t.ref
            )
              return qo(e, t, r);
          }
          return (
            (t.flags |= 1),
            ((e = _c(i, a)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function ko(e, t, n, a, r) {
          if (null !== e) {
            var i = e.memoizedProps;
            if (la(i, a) && e.ref === t.ref) {
              if (((jo = !1), (t.pendingProps = a = i), 0 === (e.lanes & r)))
                return (t.lanes = e.lanes), qo(e, t, r);
              0 !== (131072 & e.flags) && (jo = !0);
            }
          }
          return zo(e, t, n, a, r);
        }
        function So(e, t, n) {
          var a = t.pendingProps,
            r = a.children,
            i = null !== e ? e.memoizedState : null;
          if ("hidden" === a.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Nr(_l, Ml),
                (Ml |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== i ? i.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Nr(_l, Ml),
                  (Ml |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (a = null !== i ? i.baseLanes : n),
                Nr(_l, Ml),
                (Ml |= a);
            }
          else
            null !== i
              ? ((a = i.baseLanes | n), (t.memoizedState = null))
              : (a = n),
              Nr(_l, Ml),
              (Ml |= a);
          return yo(e, t, r, n), t.child;
        }
        function No(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function zo(e, t, n, a, r) {
          var i = Mr(n) ? Pr : Cr.current;
          return (
            (i = Or(t, i)),
            ki(t, r),
            (n = ws(e, t, n, a, i, r)),
            (a = ks()),
            null === e || jo
              ? (ri && a && ei(t), (t.flags |= 1), yo(e, t, n, r), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~r),
                qo(e, t, r))
          );
        }
        function Co(e, t, n, a, r) {
          if (Mr(n)) {
            var i = !0;
            Lr(t);
          } else i = !1;
          if ((ki(t, r), null === t.stateNode))
            Ho(e, t), Hi(t, n, a), Wi(t, n, a, r), (a = !0);
          else if (null === e) {
            var s = t.stateNode,
              o = t.memoizedProps;
            s.props = o;
            var l = s.context,
              c = n.contextType;
            "object" === typeof c && null !== c
              ? (c = Si(c))
              : (c = Or(t, (c = Mr(n) ? Pr : Cr.current)));
            var u = n.getDerivedStateFromProps,
              d =
                "function" === typeof u ||
                "function" === typeof s.getSnapshotBeforeUpdate;
            d ||
              ("function" !== typeof s.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof s.componentWillReceiveProps) ||
              ((o !== a || l !== c) && qi(t, s, a, c)),
              (Pi = !1);
            var f = t.memoizedState;
            (s.state = f),
              Fi(t, a, s, r),
              (l = t.memoizedState),
              o !== a || f !== l || Er.current || Pi
                ? ("function" === typeof u &&
                    (Bi(t, n, u, a), (l = t.memoizedState)),
                  (o = Pi || Ui(t, n, o, a, f, l, c))
                    ? (d ||
                        ("function" !== typeof s.UNSAFE_componentWillMount &&
                          "function" !== typeof s.componentWillMount) ||
                        ("function" === typeof s.componentWillMount &&
                          s.componentWillMount(),
                        "function" === typeof s.UNSAFE_componentWillMount &&
                          s.UNSAFE_componentWillMount()),
                      "function" === typeof s.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof s.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = a),
                      (t.memoizedState = l)),
                  (s.props = a),
                  (s.state = l),
                  (s.context = c),
                  (a = o))
                : ("function" === typeof s.componentDidMount &&
                    (t.flags |= 4194308),
                  (a = !1));
          } else {
            (s = t.stateNode),
              Mi(e, t),
              (o = t.memoizedProps),
              (c = t.type === t.elementType ? o : gi(t.type, o)),
              (s.props = c),
              (d = t.pendingProps),
              (f = s.context),
              "object" === typeof (l = n.contextType) && null !== l
                ? (l = Si(l))
                : (l = Or(t, (l = Mr(n) ? Pr : Cr.current)));
            var m = n.getDerivedStateFromProps;
            (u =
              "function" === typeof m ||
              "function" === typeof s.getSnapshotBeforeUpdate) ||
              ("function" !== typeof s.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof s.componentWillReceiveProps) ||
              ((o !== d || f !== l) && qi(t, s, a, l)),
              (Pi = !1),
              (f = t.memoizedState),
              (s.state = f),
              Fi(t, a, s, r);
            var p = t.memoizedState;
            o !== d || f !== p || Er.current || Pi
              ? ("function" === typeof m &&
                  (Bi(t, n, m, a), (p = t.memoizedState)),
                (c = Pi || Ui(t, n, c, a, f, p, l) || !1)
                  ? (u ||
                      ("function" !== typeof s.UNSAFE_componentWillUpdate &&
                        "function" !== typeof s.componentWillUpdate) ||
                      ("function" === typeof s.componentWillUpdate &&
                        s.componentWillUpdate(a, p, l),
                      "function" === typeof s.UNSAFE_componentWillUpdate &&
                        s.UNSAFE_componentWillUpdate(a, p, l)),
                    "function" === typeof s.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof s.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof s.componentDidUpdate ||
                      (o === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof s.getSnapshotBeforeUpdate ||
                      (o === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = a),
                    (t.memoizedState = p)),
                (s.props = a),
                (s.state = p),
                (s.context = l),
                (a = c))
              : ("function" !== typeof s.componentDidUpdate ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof s.getSnapshotBeforeUpdate ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (a = !1));
          }
          return Eo(e, t, n, a, i, r);
        }
        function Eo(e, t, n, a, r, i) {
          No(e, t);
          var s = 0 !== (128 & t.flags);
          if (!a && !s) return r && Fr(t, n, !1), qo(e, t, i);
          (a = t.stateNode), (xo.current = t);
          var o =
            s && "function" !== typeof n.getDerivedStateFromError
              ? null
              : a.render();
          return (
            (t.flags |= 1),
            null !== e && s
              ? ((t.child = $i(t, e.child, null, i)),
                (t.child = $i(t, null, o, i)))
              : yo(e, t, o, i),
            (t.memoizedState = a.state),
            r && Fr(t, n, !0),
            t.child
          );
        }
        function Po(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Tr(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Tr(0, t.context, !1),
            as(e, t.containerInfo);
        }
        function Oo(e, t, n, a, r) {
          return mi(), pi(r), (t.flags |= 256), yo(e, t, n, a), t.child;
        }
        var Mo,
          _o,
          To,
          Do = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Lo(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Fo(e, t, n) {
          var a,
            r = t.pendingProps,
            s = os.current,
            o = !1,
            l = 0 !== (128 & t.flags);
          if (
            ((a = l) ||
              (a = (null === e || null !== e.memoizedState) && 0 !== (2 & s)),
            a
              ? ((o = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (s |= 1),
            Nr(os, 1 & s),
            null === e)
          )
            return (
              ci(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((l = r.children),
                  (e = r.fallback),
                  o
                    ? ((r = t.mode),
                      (o = t.child),
                      (l = { mode: "hidden", children: l }),
                      0 === (1 & r) && null !== o
                        ? ((o.childLanes = 0), (o.pendingProps = l))
                        : (o = Lc(l, r, 0, null)),
                      (e = Dc(e, r, n, null)),
                      (o.return = t),
                      (e.return = t),
                      (o.sibling = e),
                      (t.child = o),
                      (t.child.memoizedState = Lo(n)),
                      (t.memoizedState = Do),
                      e)
                    : Ro(t, l))
            );
          if (null !== (s = e.memoizedState) && null !== (a = s.dehydrated))
            return (function (e, t, n, a, r, s, o) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Io(e, t, o, (a = uo(Error(i(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((s = a.fallback),
                    (r = t.mode),
                    (a = Lc(
                      { mode: "visible", children: a.children },
                      r,
                      0,
                      null
                    )),
                    ((s = Dc(s, r, o, null)).flags |= 2),
                    (a.return = t),
                    (s.return = t),
                    (a.sibling = s),
                    (t.child = a),
                    0 !== (1 & t.mode) && $i(t, e.child, null, o),
                    (t.child.memoizedState = Lo(o)),
                    (t.memoizedState = Do),
                    s);
              if (0 === (1 & t.mode)) return Io(e, t, o, null);
              if ("$!" === r.data) {
                if ((a = r.nextSibling && r.nextSibling.dataset))
                  var l = a.dgst;
                return (
                  (a = l), Io(e, t, o, (a = uo((s = Error(i(419))), a, void 0)))
                );
              }
              if (((l = 0 !== (o & e.childLanes)), jo || l)) {
                if (null !== (a = El)) {
                  switch (o & -o) {
                    case 4:
                      r = 2;
                      break;
                    case 16:
                      r = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      r = 32;
                      break;
                    case 536870912:
                      r = 268435456;
                      break;
                    default:
                      r = 0;
                  }
                  0 !== (r = 0 !== (r & (a.suspendedLanes | o)) ? 0 : r) &&
                    r !== s.retryLane &&
                    ((s.retryLane = r), Ei(e, r), nc(a, e, r, -1));
                }
                return hc(), Io(e, t, o, (a = uo(Error(i(421)))));
              }
              return "$?" === r.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = zc.bind(null, e)),
                  (r._reactRetry = t),
                  null)
                : ((e = s.treeContext),
                  (ai = cr(r.nextSibling)),
                  (ni = t),
                  (ri = !0),
                  (ii = null),
                  null !== e &&
                    ((Qr[Gr++] = $r),
                    (Qr[Gr++] = Kr),
                    (Qr[Gr++] = Xr),
                    ($r = e.id),
                    (Kr = e.overflow),
                    (Xr = t)),
                  ((t = Ro(t, a.children)).flags |= 4096),
                  t);
            })(e, t, l, r, a, s, n);
          if (o) {
            (o = r.fallback), (l = t.mode), (a = (s = e.child).sibling);
            var c = { mode: "hidden", children: r.children };
            return (
              0 === (1 & l) && t.child !== s
                ? (((r = t.child).childLanes = 0),
                  (r.pendingProps = c),
                  (t.deletions = null))
                : ((r = _c(s, c)).subtreeFlags = 14680064 & s.subtreeFlags),
              null !== a
                ? (o = _c(a, o))
                : ((o = Dc(o, l, n, null)).flags |= 2),
              (o.return = t),
              (r.return = t),
              (r.sibling = o),
              (t.child = r),
              (r = o),
              (o = t.child),
              (l =
                null === (l = e.child.memoizedState)
                  ? Lo(n)
                  : {
                      baseLanes: l.baseLanes | n,
                      cachePool: null,
                      transitions: l.transitions,
                    }),
              (o.memoizedState = l),
              (o.childLanes = e.childLanes & ~n),
              (t.memoizedState = Do),
              r
            );
          }
          return (
            (e = (o = e.child).sibling),
            (r = _c(o, { mode: "visible", children: r.children })),
            0 === (1 & t.mode) && (r.lanes = n),
            (r.return = t),
            (r.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = r),
            (t.memoizedState = null),
            r
          );
        }
        function Ro(e, t) {
          return (
            ((t = Lc(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Io(e, t, n, a) {
          return (
            null !== a && pi(a),
            $i(t, e.child, null, n),
            ((e = Ro(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Bo(e, t, n) {
          e.lanes |= t;
          var a = e.alternate;
          null !== a && (a.lanes |= t), wi(e.return, t, n);
        }
        function Vo(e, t, n, a, r) {
          var i = e.memoizedState;
          null === i
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: a,
                tail: n,
                tailMode: r,
              })
            : ((i.isBackwards = t),
              (i.rendering = null),
              (i.renderingStartTime = 0),
              (i.last = a),
              (i.tail = n),
              (i.tailMode = r));
        }
        function Uo(e, t, n) {
          var a = t.pendingProps,
            r = a.revealOrder,
            i = a.tail;
          if ((yo(e, t, a.children, n), 0 !== (2 & (a = os.current))))
            (a = (1 & a) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Bo(e, n, t);
                else if (19 === e.tag) Bo(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            a &= 1;
          }
          if ((Nr(os, a), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (r) {
              case "forwards":
                for (n = t.child, r = null; null !== n; )
                  null !== (e = n.alternate) && null === ls(e) && (r = n),
                    (n = n.sibling);
                null === (n = r)
                  ? ((r = t.child), (t.child = null))
                  : ((r = n.sibling), (n.sibling = null)),
                  Vo(t, !1, r, n, i);
                break;
              case "backwards":
                for (n = null, r = t.child, t.child = null; null !== r; ) {
                  if (null !== (e = r.alternate) && null === ls(e)) {
                    t.child = r;
                    break;
                  }
                  (e = r.sibling), (r.sibling = n), (n = r), (r = e);
                }
                Vo(t, !0, n, null, i);
                break;
              case "together":
                Vo(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Ho(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function qo(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Ll |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(i(153));
          if (null !== t.child) {
            for (
              n = _c((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = _c(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Wo(e, t) {
          if (!ri)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var a = null; null !== n; )
                  null !== n.alternate && (a = n), (n = n.sibling);
                null === a
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (a.sibling = null);
            }
        }
        function Yo(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            a = 0;
          if (t)
            for (var r = e.child; null !== r; )
              (n |= r.lanes | r.childLanes),
                (a |= 14680064 & r.subtreeFlags),
                (a |= 14680064 & r.flags),
                (r.return = e),
                (r = r.sibling);
          else
            for (r = e.child; null !== r; )
              (n |= r.lanes | r.childLanes),
                (a |= r.subtreeFlags),
                (a |= r.flags),
                (r.return = e),
                (r = r.sibling);
          return (e.subtreeFlags |= a), (e.childLanes = n), t;
        }
        function Qo(e, t, n) {
          var a = t.pendingProps;
          switch ((ti(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Yo(t), null;
            case 1:
            case 17:
              return Mr(t.type) && _r(), Yo(t), null;
            case 3:
              return (
                (a = t.stateNode),
                rs(),
                Sr(Er),
                Sr(Cr),
                us(),
                a.pendingContext &&
                  ((a.context = a.pendingContext), (a.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (di(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ii && (sc(ii), (ii = null)))),
                Yo(t),
                null
              );
            case 5:
              ss(t);
              var r = ns(ts.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                _o(e, t, n, a),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!a) {
                  if (null === t.stateNode) throw Error(i(166));
                  return Yo(t), null;
                }
                if (((e = ns(Ji.current)), di(t))) {
                  (a = t.stateNode), (n = t.type);
                  var s = t.memoizedProps;
                  switch (
                    ((a[fr] = t), (a[mr] = s), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Ia("cancel", a), Ia("close", a);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Ia("load", a);
                      break;
                    case "video":
                    case "audio":
                      for (r = 0; r < Da.length; r++) Ia(Da[r], a);
                      break;
                    case "source":
                      Ia("error", a);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Ia("error", a), Ia("load", a);
                      break;
                    case "details":
                      Ia("toggle", a);
                      break;
                    case "input":
                      $(a, s), Ia("invalid", a);
                      break;
                    case "select":
                      (a._wrapperState = { wasMultiple: !!s.multiple }),
                        Ia("invalid", a);
                      break;
                    case "textarea":
                      re(a, s), Ia("invalid", a);
                  }
                  for (var l in (be(n, s), (r = null), s))
                    if (s.hasOwnProperty(l)) {
                      var c = s[l];
                      "children" === l
                        ? "string" === typeof c
                          ? a.textContent !== c &&
                            (!0 !== s.suppressHydrationWarning &&
                              Za(a.textContent, c, e),
                            (r = ["children", c]))
                          : "number" === typeof c &&
                            a.textContent !== "" + c &&
                            (!0 !== s.suppressHydrationWarning &&
                              Za(a.textContent, c, e),
                            (r = ["children", "" + c]))
                        : o.hasOwnProperty(l) &&
                          null != c &&
                          "onScroll" === l &&
                          Ia("scroll", a);
                    }
                  switch (n) {
                    case "input":
                      Y(a), J(a, s, !0);
                      break;
                    case "textarea":
                      Y(a), se(a);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof s.onClick && (a.onclick = Ja);
                  }
                  (a = r), (t.updateQueue = a), null !== a && (t.flags |= 4);
                } else {
                  (l = 9 === r.nodeType ? r : r.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = oe(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = l.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof a.is
                        ? (e = l.createElement(n, { is: a.is }))
                        : ((e = l.createElement(n)),
                          "select" === n &&
                            ((l = e),
                            a.multiple
                              ? (l.multiple = !0)
                              : a.size && (l.size = a.size)))
                      : (e = l.createElementNS(e, n)),
                    (e[fr] = t),
                    (e[mr] = a),
                    Mo(e, t),
                    (t.stateNode = e);
                  e: {
                    switch (((l = xe(n, a)), n)) {
                      case "dialog":
                        Ia("cancel", e), Ia("close", e), (r = a);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Ia("load", e), (r = a);
                        break;
                      case "video":
                      case "audio":
                        for (r = 0; r < Da.length; r++) Ia(Da[r], e);
                        r = a;
                        break;
                      case "source":
                        Ia("error", e), (r = a);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Ia("error", e), Ia("load", e), (r = a);
                        break;
                      case "details":
                        Ia("toggle", e), (r = a);
                        break;
                      case "input":
                        $(e, a), (r = X(e, a)), Ia("invalid", e);
                        break;
                      case "option":
                      default:
                        r = a;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!a.multiple }),
                          (r = F({}, a, { value: void 0 })),
                          Ia("invalid", e);
                        break;
                      case "textarea":
                        re(e, a), (r = ae(e, a)), Ia("invalid", e);
                    }
                    for (s in (be(n, r), (c = r)))
                      if (c.hasOwnProperty(s)) {
                        var u = c[s];
                        "style" === s
                          ? ge(e, u)
                          : "dangerouslySetInnerHTML" === s
                          ? null != (u = u ? u.__html : void 0) && de(e, u)
                          : "children" === s
                          ? "string" === typeof u
                            ? ("textarea" !== n || "" !== u) && fe(e, u)
                            : "number" === typeof u && fe(e, "" + u)
                          : "suppressContentEditableWarning" !== s &&
                            "suppressHydrationWarning" !== s &&
                            "autoFocus" !== s &&
                            (o.hasOwnProperty(s)
                              ? null != u && "onScroll" === s && Ia("scroll", e)
                              : null != u && x(e, s, u, l));
                      }
                    switch (n) {
                      case "input":
                        Y(e), J(e, a, !1);
                        break;
                      case "textarea":
                        Y(e), se(e);
                        break;
                      case "option":
                        null != a.value &&
                          e.setAttribute("value", "" + q(a.value));
                        break;
                      case "select":
                        (e.multiple = !!a.multiple),
                          null != (s = a.value)
                            ? ne(e, !!a.multiple, s, !1)
                            : null != a.defaultValue &&
                              ne(e, !!a.multiple, a.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof r.onClick && (e.onclick = Ja);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        a = !!a.autoFocus;
                        break e;
                      case "img":
                        a = !0;
                        break e;
                      default:
                        a = !1;
                    }
                  }
                  a && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Yo(t), null;
            case 6:
              if (e && null != t.stateNode) To(0, t, e.memoizedProps, a);
              else {
                if ("string" !== typeof a && null === t.stateNode)
                  throw Error(i(166));
                if (((n = ns(ts.current)), ns(Ji.current), di(t))) {
                  if (
                    ((a = t.stateNode),
                    (n = t.memoizedProps),
                    (a[fr] = t),
                    (s = a.nodeValue !== n) && null !== (e = ni))
                  )
                    switch (e.tag) {
                      case 3:
                        Za(a.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Za(a.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  s && (t.flags |= 4);
                } else
                  ((a = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    a
                  ))[fr] = t),
                    (t.stateNode = a);
              }
              return Yo(t), null;
            case 13:
              if (
                (Sr(os),
                (a = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ri &&
                  null !== ai &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  fi(), mi(), (t.flags |= 98560), (s = !1);
                else if (((s = di(t)), null !== a && null !== a.dehydrated)) {
                  if (null === e) {
                    if (!s) throw Error(i(318));
                    if (
                      !(s =
                        null !== (s = t.memoizedState) ? s.dehydrated : null)
                    )
                      throw Error(i(317));
                    s[fr] = t;
                  } else
                    mi(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Yo(t), (s = !1);
                } else null !== ii && (sc(ii), (ii = null)), (s = !0);
                if (!s) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((a = null !== a) !==
                    (null !== e && null !== e.memoizedState) &&
                    a &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & os.current)
                        ? 0 === Tl && (Tl = 3)
                        : hc())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Yo(t),
                  null);
            case 4:
              return (
                rs(), null === e && Ua(t.stateNode.containerInfo), Yo(t), null
              );
            case 10:
              return Ai(t.type._context), Yo(t), null;
            case 19:
              if ((Sr(os), null === (s = t.memoizedState))) return Yo(t), null;
              if (((a = 0 !== (128 & t.flags)), null === (l = s.rendering)))
                if (a) Wo(s, !1);
                else {
                  if (0 !== Tl || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (l = ls(e))) {
                        for (
                          t.flags |= 128,
                            Wo(s, !1),
                            null !== (a = l.updateQueue) &&
                              ((t.updateQueue = a), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            a = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = a),
                            ((s = n).flags &= 14680066),
                            null === (l = s.alternate)
                              ? ((s.childLanes = 0),
                                (s.lanes = e),
                                (s.child = null),
                                (s.subtreeFlags = 0),
                                (s.memoizedProps = null),
                                (s.memoizedState = null),
                                (s.updateQueue = null),
                                (s.dependencies = null),
                                (s.stateNode = null))
                              : ((s.childLanes = l.childLanes),
                                (s.lanes = l.lanes),
                                (s.child = l.child),
                                (s.subtreeFlags = 0),
                                (s.deletions = null),
                                (s.memoizedProps = l.memoizedProps),
                                (s.memoizedState = l.memoizedState),
                                (s.updateQueue = l.updateQueue),
                                (s.type = l.type),
                                (e = l.dependencies),
                                (s.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Nr(os, (1 & os.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== s.tail &&
                    Ke() > Ul &&
                    ((t.flags |= 128),
                    (a = !0),
                    Wo(s, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!a)
                  if (null !== (e = ls(l))) {
                    if (
                      ((t.flags |= 128),
                      (a = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Wo(s, !0),
                      null === s.tail &&
                        "hidden" === s.tailMode &&
                        !l.alternate &&
                        !ri)
                    )
                      return Yo(t), null;
                  } else
                    2 * Ke() - s.renderingStartTime > Ul &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (a = !0),
                      Wo(s, !1),
                      (t.lanes = 4194304));
                s.isBackwards
                  ? ((l.sibling = t.child), (t.child = l))
                  : (null !== (n = s.last) ? (n.sibling = l) : (t.child = l),
                    (s.last = l));
              }
              return null !== s.tail
                ? ((t = s.tail),
                  (s.rendering = t),
                  (s.tail = t.sibling),
                  (s.renderingStartTime = Ke()),
                  (t.sibling = null),
                  (n = os.current),
                  Nr(os, a ? (1 & n) | 2 : 1 & n),
                  t)
                : (Yo(t), null);
            case 22:
            case 23:
              return (
                dc(),
                (a = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== a &&
                  (t.flags |= 8192),
                a && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Ml) &&
                    (Yo(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Yo(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(i(156, t.tag));
        }
        function Go(e, t) {
          switch ((ti(t), t.tag)) {
            case 1:
              return (
                Mr(t.type) && _r(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                rs(),
                Sr(Er),
                Sr(Cr),
                us(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return ss(t), null;
            case 13:
              if (
                (Sr(os),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(i(340));
                mi();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Sr(os), null;
            case 4:
              return rs(), null;
            case 10:
              return Ai(t.type._context), null;
            case 22:
            case 23:
              return dc(), null;
            default:
              return null;
          }
        }
        (Mo = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (_o = function (e, t, n, a) {
            var r = e.memoizedProps;
            if (r !== a) {
              (e = t.stateNode), ns(Ji.current);
              var i,
                s = null;
              switch (n) {
                case "input":
                  (r = X(e, r)), (a = X(e, a)), (s = []);
                  break;
                case "select":
                  (r = F({}, r, { value: void 0 })),
                    (a = F({}, a, { value: void 0 })),
                    (s = []);
                  break;
                case "textarea":
                  (r = ae(e, r)), (a = ae(e, a)), (s = []);
                  break;
                default:
                  "function" !== typeof r.onClick &&
                    "function" === typeof a.onClick &&
                    (e.onclick = Ja);
              }
              for (u in (be(n, a), (n = null), r))
                if (!a.hasOwnProperty(u) && r.hasOwnProperty(u) && null != r[u])
                  if ("style" === u) {
                    var l = r[u];
                    for (i in l)
                      l.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== u &&
                      "children" !== u &&
                      "suppressContentEditableWarning" !== u &&
                      "suppressHydrationWarning" !== u &&
                      "autoFocus" !== u &&
                      (o.hasOwnProperty(u)
                        ? s || (s = [])
                        : (s = s || []).push(u, null));
              for (u in a) {
                var c = a[u];
                if (
                  ((l = null != r ? r[u] : void 0),
                  a.hasOwnProperty(u) && c !== l && (null != c || null != l))
                )
                  if ("style" === u)
                    if (l) {
                      for (i in l)
                        !l.hasOwnProperty(i) ||
                          (c && c.hasOwnProperty(i)) ||
                          (n || (n = {}), (n[i] = ""));
                      for (i in c)
                        c.hasOwnProperty(i) &&
                          l[i] !== c[i] &&
                          (n || (n = {}), (n[i] = c[i]));
                    } else n || (s || (s = []), s.push(u, n)), (n = c);
                  else
                    "dangerouslySetInnerHTML" === u
                      ? ((c = c ? c.__html : void 0),
                        (l = l ? l.__html : void 0),
                        null != c && l !== c && (s = s || []).push(u, c))
                      : "children" === u
                      ? ("string" !== typeof c && "number" !== typeof c) ||
                        (s = s || []).push(u, "" + c)
                      : "suppressContentEditableWarning" !== u &&
                        "suppressHydrationWarning" !== u &&
                        (o.hasOwnProperty(u)
                          ? (null != c && "onScroll" === u && Ia("scroll", e),
                            s || l === c || (s = []))
                          : (s = s || []).push(u, c));
              }
              n && (s = s || []).push("style", n);
              var u = s;
              (t.updateQueue = u) && (t.flags |= 4);
            }
          }),
          (To = function (e, t, n, a) {
            n !== a && (t.flags |= 4);
          });
        var Xo = !1,
          $o = !1,
          Ko = "function" === typeof WeakSet ? WeakSet : Set,
          Zo = null;
        function Jo(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (a) {
                kc(e, t, a);
              }
            else n.current = null;
        }
        function el(e, t, n) {
          try {
            n();
          } catch (a) {
            kc(e, t, a);
          }
        }
        var tl = !1;
        function nl(e, t, n) {
          var a = t.updateQueue;
          if (null !== (a = null !== a ? a.lastEffect : null)) {
            var r = (a = a.next);
            do {
              if ((r.tag & e) === e) {
                var i = r.destroy;
                (r.destroy = void 0), void 0 !== i && el(t, n, i);
              }
              r = r.next;
            } while (r !== a);
          }
        }
        function al(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var a = n.create;
                n.destroy = a();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function rl(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function il(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), il(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[fr],
              delete t[mr],
              delete t[hr],
              delete t[gr],
              delete t[vr]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function sl(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function ol(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || sl(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function ll(e, t, n) {
          var a = e.tag;
          if (5 === a || 6 === a)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Ja));
          else if (4 !== a && null !== (e = e.child))
            for (ll(e, t, n), e = e.sibling; null !== e; )
              ll(e, t, n), (e = e.sibling);
        }
        function cl(e, t, n) {
          var a = e.tag;
          if (5 === a || 6 === a)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== a && null !== (e = e.child))
            for (cl(e, t, n), e = e.sibling; null !== e; )
              cl(e, t, n), (e = e.sibling);
        }
        var ul = null,
          dl = !1;
        function fl(e, t, n) {
          for (n = n.child; null !== n; ) ml(e, t, n), (n = n.sibling);
        }
        function ml(e, t, n) {
          if (it && "function" === typeof it.onCommitFiberUnmount)
            try {
              it.onCommitFiberUnmount(rt, n);
            } catch (o) {}
          switch (n.tag) {
            case 5:
              $o || Jo(n, t);
            case 6:
              var a = ul,
                r = dl;
              (ul = null),
                fl(e, t, n),
                (dl = r),
                null !== (ul = a) &&
                  (dl
                    ? ((e = ul),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : ul.removeChild(n.stateNode));
              break;
            case 18:
              null !== ul &&
                (dl
                  ? ((e = ul),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? lr(e.parentNode, n)
                      : 1 === e.nodeType && lr(e, n),
                    Ut(e))
                  : lr(ul, n.stateNode));
              break;
            case 4:
              (a = ul),
                (r = dl),
                (ul = n.stateNode.containerInfo),
                (dl = !0),
                fl(e, t, n),
                (ul = a),
                (dl = r);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !$o &&
                null !== (a = n.updateQueue) &&
                null !== (a = a.lastEffect)
              ) {
                r = a = a.next;
                do {
                  var i = r,
                    s = i.destroy;
                  (i = i.tag),
                    void 0 !== s &&
                      (0 !== (2 & i) || 0 !== (4 & i)) &&
                      el(n, t, s),
                    (r = r.next);
                } while (r !== a);
              }
              fl(e, t, n);
              break;
            case 1:
              if (
                !$o &&
                (Jo(n, t),
                "function" === typeof (a = n.stateNode).componentWillUnmount)
              )
                try {
                  (a.props = n.memoizedProps),
                    (a.state = n.memoizedState),
                    a.componentWillUnmount();
                } catch (o) {
                  kc(n, t, o);
                }
              fl(e, t, n);
              break;
            case 21:
              fl(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? (($o = (a = $o) || null !== n.memoizedState),
                  fl(e, t, n),
                  ($o = a))
                : fl(e, t, n);
              break;
            default:
              fl(e, t, n);
          }
        }
        function pl(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Ko()),
              t.forEach(function (t) {
                var a = Cc.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(a, a));
              });
          }
        }
        function hl(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var a = 0; a < n.length; a++) {
              var r = n[a];
              try {
                var s = e,
                  o = t,
                  l = o;
                e: for (; null !== l; ) {
                  switch (l.tag) {
                    case 5:
                      (ul = l.stateNode), (dl = !1);
                      break e;
                    case 3:
                    case 4:
                      (ul = l.stateNode.containerInfo), (dl = !0);
                      break e;
                  }
                  l = l.return;
                }
                if (null === ul) throw Error(i(160));
                ml(s, o, r), (ul = null), (dl = !1);
                var c = r.alternate;
                null !== c && (c.return = null), (r.return = null);
              } catch (u) {
                kc(r, t, u);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) gl(t, e), (t = t.sibling);
        }
        function gl(e, t) {
          var n = e.alternate,
            a = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((hl(t, e), vl(e), 4 & a)) {
                try {
                  nl(3, e, e.return), al(3, e);
                } catch (g) {
                  kc(e, e.return, g);
                }
                try {
                  nl(5, e, e.return);
                } catch (g) {
                  kc(e, e.return, g);
                }
              }
              break;
            case 1:
              hl(t, e), vl(e), 512 & a && null !== n && Jo(n, n.return);
              break;
            case 5:
              if (
                (hl(t, e),
                vl(e),
                512 & a && null !== n && Jo(n, n.return),
                32 & e.flags)
              ) {
                var r = e.stateNode;
                try {
                  fe(r, "");
                } catch (g) {
                  kc(e, e.return, g);
                }
              }
              if (4 & a && null != (r = e.stateNode)) {
                var s = e.memoizedProps,
                  o = null !== n ? n.memoizedProps : s,
                  l = e.type,
                  c = e.updateQueue;
                if (((e.updateQueue = null), null !== c))
                  try {
                    "input" === l &&
                      "radio" === s.type &&
                      null != s.name &&
                      K(r, s),
                      xe(l, o);
                    var u = xe(l, s);
                    for (o = 0; o < c.length; o += 2) {
                      var d = c[o],
                        f = c[o + 1];
                      "style" === d
                        ? ge(r, f)
                        : "dangerouslySetInnerHTML" === d
                        ? de(r, f)
                        : "children" === d
                        ? fe(r, f)
                        : x(r, d, f, u);
                    }
                    switch (l) {
                      case "input":
                        Z(r, s);
                        break;
                      case "textarea":
                        ie(r, s);
                        break;
                      case "select":
                        var m = r._wrapperState.wasMultiple;
                        r._wrapperState.wasMultiple = !!s.multiple;
                        var p = s.value;
                        null != p
                          ? ne(r, !!s.multiple, p, !1)
                          : m !== !!s.multiple &&
                            (null != s.defaultValue
                              ? ne(r, !!s.multiple, s.defaultValue, !0)
                              : ne(r, !!s.multiple, s.multiple ? [] : "", !1));
                    }
                    r[mr] = s;
                  } catch (g) {
                    kc(e, e.return, g);
                  }
              }
              break;
            case 6:
              if ((hl(t, e), vl(e), 4 & a)) {
                if (null === e.stateNode) throw Error(i(162));
                (r = e.stateNode), (s = e.memoizedProps);
                try {
                  r.nodeValue = s;
                } catch (g) {
                  kc(e, e.return, g);
                }
              }
              break;
            case 3:
              if (
                (hl(t, e),
                vl(e),
                4 & a && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Ut(t.containerInfo);
                } catch (g) {
                  kc(e, e.return, g);
                }
              break;
            case 4:
            default:
              hl(t, e), vl(e);
              break;
            case 13:
              hl(t, e),
                vl(e),
                8192 & (r = e.child).flags &&
                  ((s = null !== r.memoizedState),
                  (r.stateNode.isHidden = s),
                  !s ||
                    (null !== r.alternate &&
                      null !== r.alternate.memoizedState) ||
                    (Vl = Ke())),
                4 & a && pl(e);
              break;
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? (($o = (u = $o) || d), hl(t, e), ($o = u))
                  : hl(t, e),
                vl(e),
                8192 & a)
              ) {
                if (
                  ((u = null !== e.memoizedState),
                  (e.stateNode.isHidden = u) && !d && 0 !== (1 & e.mode))
                )
                  for (Zo = e, d = e.child; null !== d; ) {
                    for (f = Zo = d; null !== Zo; ) {
                      switch (((p = (m = Zo).child), m.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          nl(4, m, m.return);
                          break;
                        case 1:
                          Jo(m, m.return);
                          var h = m.stateNode;
                          if ("function" === typeof h.componentWillUnmount) {
                            (a = m), (n = m.return);
                            try {
                              (t = a),
                                (h.props = t.memoizedProps),
                                (h.state = t.memoizedState),
                                h.componentWillUnmount();
                            } catch (g) {
                              kc(a, n, g);
                            }
                          }
                          break;
                        case 5:
                          Jo(m, m.return);
                          break;
                        case 22:
                          if (null !== m.memoizedState) {
                            yl(f);
                            continue;
                          }
                      }
                      null !== p ? ((p.return = m), (Zo = p)) : yl(f);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === d) {
                      d = f;
                      try {
                        (r = f.stateNode),
                          u
                            ? "function" === typeof (s = r.style).setProperty
                              ? s.setProperty("display", "none", "important")
                              : (s.display = "none")
                            : ((l = f.stateNode),
                              (o =
                                void 0 !== (c = f.memoizedProps.style) &&
                                null !== c &&
                                c.hasOwnProperty("display")
                                  ? c.display
                                  : null),
                              (l.style.display = he("display", o)));
                      } catch (g) {
                        kc(e, e.return, g);
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === d)
                      try {
                        f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                      } catch (g) {
                        kc(e, e.return, g);
                      }
                  } else if (
                    ((22 !== f.tag && 23 !== f.tag) ||
                      null === f.memoizedState ||
                      f === e) &&
                    null !== f.child
                  ) {
                    (f.child.return = f), (f = f.child);
                    continue;
                  }
                  if (f === e) break e;
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === e) break e;
                    d === f && (d = null), (f = f.return);
                  }
                  d === f && (d = null),
                    (f.sibling.return = f.return),
                    (f = f.sibling);
                }
              }
              break;
            case 19:
              hl(t, e), vl(e), 4 & a && pl(e);
            case 21:
          }
        }
        function vl(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (sl(n)) {
                    var a = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(i(160));
              }
              switch (a.tag) {
                case 5:
                  var r = a.stateNode;
                  32 & a.flags && (fe(r, ""), (a.flags &= -33)),
                    cl(e, ol(e), r);
                  break;
                case 3:
                case 4:
                  var s = a.stateNode.containerInfo;
                  ll(e, ol(e), s);
                  break;
                default:
                  throw Error(i(161));
              }
            } catch (o) {
              kc(e, e.return, o);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function bl(e, t, n) {
          (Zo = e), xl(e, t, n);
        }
        function xl(e, t, n) {
          for (var a = 0 !== (1 & e.mode); null !== Zo; ) {
            var r = Zo,
              i = r.child;
            if (22 === r.tag && a) {
              var s = null !== r.memoizedState || Xo;
              if (!s) {
                var o = r.alternate,
                  l = (null !== o && null !== o.memoizedState) || $o;
                o = Xo;
                var c = $o;
                if (((Xo = s), ($o = l) && !c))
                  for (Zo = r; null !== Zo; )
                    (l = (s = Zo).child),
                      22 === s.tag && null !== s.memoizedState
                        ? Al(r)
                        : null !== l
                        ? ((l.return = s), (Zo = l))
                        : Al(r);
                for (; null !== i; ) (Zo = i), xl(i, t, n), (i = i.sibling);
                (Zo = r), (Xo = o), ($o = c);
              }
              jl(e);
            } else
              0 !== (8772 & r.subtreeFlags) && null !== i
                ? ((i.return = r), (Zo = i))
                : jl(e);
          }
        }
        function jl(e) {
          for (; null !== Zo; ) {
            var t = Zo;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      $o || al(5, t);
                      break;
                    case 1:
                      var a = t.stateNode;
                      if (4 & t.flags && !$o)
                        if (null === n) a.componentDidMount();
                        else {
                          var r =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : gi(t.type, n.memoizedProps);
                          a.componentDidUpdate(
                            r,
                            n.memoizedState,
                            a.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var s = t.updateQueue;
                      null !== s && Ri(t, s, a);
                      break;
                    case 3:
                      var o = t.updateQueue;
                      if (null !== o) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Ri(t, o, n);
                      }
                      break;
                    case 5:
                      var l = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = l;
                        var c = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            c.autoFocus && n.focus();
                            break;
                          case "img":
                            c.src && (n.src = c.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var u = t.alternate;
                        if (null !== u) {
                          var d = u.memoizedState;
                          if (null !== d) {
                            var f = d.dehydrated;
                            null !== f && Ut(f);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(i(163));
                  }
                $o || (512 & t.flags && rl(t));
              } catch (m) {
                kc(t, t.return, m);
              }
            }
            if (t === e) {
              Zo = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Zo = n);
              break;
            }
            Zo = t.return;
          }
        }
        function yl(e) {
          for (; null !== Zo; ) {
            var t = Zo;
            if (t === e) {
              Zo = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Zo = n);
              break;
            }
            Zo = t.return;
          }
        }
        function Al(e) {
          for (; null !== Zo; ) {
            var t = Zo;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    al(4, t);
                  } catch (l) {
                    kc(t, n, l);
                  }
                  break;
                case 1:
                  var a = t.stateNode;
                  if ("function" === typeof a.componentDidMount) {
                    var r = t.return;
                    try {
                      a.componentDidMount();
                    } catch (l) {
                      kc(t, r, l);
                    }
                  }
                  var i = t.return;
                  try {
                    rl(t);
                  } catch (l) {
                    kc(t, i, l);
                  }
                  break;
                case 5:
                  var s = t.return;
                  try {
                    rl(t);
                  } catch (l) {
                    kc(t, s, l);
                  }
              }
            } catch (l) {
              kc(t, t.return, l);
            }
            if (t === e) {
              Zo = null;
              break;
            }
            var o = t.sibling;
            if (null !== o) {
              (o.return = t.return), (Zo = o);
              break;
            }
            Zo = t.return;
          }
        }
        var wl,
          kl = Math.ceil,
          Sl = j.ReactCurrentDispatcher,
          Nl = j.ReactCurrentOwner,
          zl = j.ReactCurrentBatchConfig,
          Cl = 0,
          El = null,
          Pl = null,
          Ol = 0,
          Ml = 0,
          _l = kr(0),
          Tl = 0,
          Dl = null,
          Ll = 0,
          Fl = 0,
          Rl = 0,
          Il = null,
          Bl = null,
          Vl = 0,
          Ul = 1 / 0,
          Hl = null,
          ql = !1,
          Wl = null,
          Yl = null,
          Ql = !1,
          Gl = null,
          Xl = 0,
          $l = 0,
          Kl = null,
          Zl = -1,
          Jl = 0;
        function ec() {
          return 0 !== (6 & Cl) ? Ke() : -1 !== Zl ? Zl : (Zl = Ke());
        }
        function tc(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Cl) && 0 !== Ol
            ? Ol & -Ol
            : null !== hi.transition
            ? (0 === Jl && (Jl = ht()), Jl)
            : 0 !== (e = xt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : $t(e.type));
        }
        function nc(e, t, n, a) {
          if (50 < $l) throw (($l = 0), (Kl = null), Error(i(185)));
          vt(e, n, a),
            (0 !== (2 & Cl) && e === El) ||
              (e === El && (0 === (2 & Cl) && (Fl |= n), 4 === Tl && oc(e, Ol)),
              ac(e, a),
              1 === n &&
                0 === Cl &&
                0 === (1 & t.mode) &&
                ((Ul = Ke() + 500), Ir && Ur()));
        }
        function ac(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                a = e.pingedLanes,
                r = e.expirationTimes,
                i = e.pendingLanes;
              0 < i;

            ) {
              var s = 31 - st(i),
                o = 1 << s,
                l = r[s];
              -1 === l
                ? (0 !== (o & n) && 0 === (o & a)) || (r[s] = mt(o, t))
                : l <= t && (e.expiredLanes |= o),
                (i &= ~o);
            }
          })(e, t);
          var a = ft(e, e === El ? Ol : 0);
          if (0 === a)
            null !== n && Ge(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = a & -a), e.callbackPriority !== t)) {
            if ((null != n && Ge(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Ir = !0), Vr(e);
                  })(lc.bind(null, e))
                : Vr(lc.bind(null, e)),
                sr(function () {
                  0 === (6 & Cl) && Ur();
                }),
                (n = null);
            else {
              switch (jt(a)) {
                case 1:
                  n = Je;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = at;
              }
              n = Ec(n, rc.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function rc(e, t) {
          if (((Zl = -1), (Jl = 0), 0 !== (6 & Cl))) throw Error(i(327));
          var n = e.callbackNode;
          if (Ac() && e.callbackNode !== n) return null;
          var a = ft(e, e === El ? Ol : 0);
          if (0 === a) return null;
          if (0 !== (30 & a) || 0 !== (a & e.expiredLanes) || t) t = gc(e, a);
          else {
            t = a;
            var r = Cl;
            Cl |= 2;
            var s = pc();
            for (
              (El === e && Ol === t) ||
              ((Hl = null), (Ul = Ke() + 500), fc(e, t));
              ;

            )
              try {
                bc();
                break;
              } catch (l) {
                mc(e, l);
              }
            yi(),
              (Sl.current = s),
              (Cl = r),
              null !== Pl ? (t = 0) : ((El = null), (Ol = 0), (t = Tl));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (r = pt(e)) && ((a = r), (t = ic(e, r))),
              1 === t)
            )
              throw ((n = Dl), fc(e, 0), oc(e, a), ac(e, Ke()), n);
            if (6 === t) oc(e, a);
            else {
              if (
                ((r = e.current.alternate),
                0 === (30 & a) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var a = 0; a < n.length; a++) {
                            var r = n[a],
                              i = r.getSnapshot;
                            r = r.value;
                            try {
                              if (!oa(i(), r)) return !1;
                            } catch (o) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(r) &&
                  (2 === (t = gc(e, a)) &&
                    0 !== (s = pt(e)) &&
                    ((a = s), (t = ic(e, s))),
                  1 === t))
              )
                throw ((n = Dl), fc(e, 0), oc(e, a), ac(e, Ke()), n);
              switch (((e.finishedWork = r), (e.finishedLanes = a), t)) {
                case 0:
                case 1:
                  throw Error(i(345));
                case 2:
                case 5:
                  yc(e, Bl, Hl);
                  break;
                case 3:
                  if (
                    (oc(e, a),
                    (130023424 & a) === a && 10 < (t = Vl + 500 - Ke()))
                  ) {
                    if (0 !== ft(e, 0)) break;
                    if (((r = e.suspendedLanes) & a) !== a) {
                      ec(), (e.pingedLanes |= e.suspendedLanes & r);
                      break;
                    }
                    e.timeoutHandle = ar(yc.bind(null, e, Bl, Hl), t);
                    break;
                  }
                  yc(e, Bl, Hl);
                  break;
                case 4:
                  if ((oc(e, a), (4194240 & a) === a)) break;
                  for (t = e.eventTimes, r = -1; 0 < a; ) {
                    var o = 31 - st(a);
                    (s = 1 << o), (o = t[o]) > r && (r = o), (a &= ~s);
                  }
                  if (
                    ((a = r),
                    10 <
                      (a =
                        (120 > (a = Ke() - a)
                          ? 120
                          : 480 > a
                          ? 480
                          : 1080 > a
                          ? 1080
                          : 1920 > a
                          ? 1920
                          : 3e3 > a
                          ? 3e3
                          : 4320 > a
                          ? 4320
                          : 1960 * kl(a / 1960)) - a))
                  ) {
                    e.timeoutHandle = ar(yc.bind(null, e, Bl, Hl), a);
                    break;
                  }
                  yc(e, Bl, Hl);
                  break;
                default:
                  throw Error(i(329));
              }
            }
          }
          return ac(e, Ke()), e.callbackNode === n ? rc.bind(null, e) : null;
        }
        function ic(e, t) {
          var n = Il;
          return (
            e.current.memoizedState.isDehydrated && (fc(e, t).flags |= 256),
            2 !== (e = gc(e, t)) && ((t = Bl), (Bl = n), null !== t && sc(t)),
            e
          );
        }
        function sc(e) {
          null === Bl ? (Bl = e) : Bl.push.apply(Bl, e);
        }
        function oc(e, t) {
          for (
            t &= ~Rl,
              t &= ~Fl,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - st(t),
              a = 1 << n;
            (e[n] = -1), (t &= ~a);
          }
        }
        function lc(e) {
          if (0 !== (6 & Cl)) throw Error(i(327));
          Ac();
          var t = ft(e, 0);
          if (0 === (1 & t)) return ac(e, Ke()), null;
          var n = gc(e, t);
          if (0 !== e.tag && 2 === n) {
            var a = pt(e);
            0 !== a && ((t = a), (n = ic(e, a)));
          }
          if (1 === n) throw ((n = Dl), fc(e, 0), oc(e, t), ac(e, Ke()), n);
          if (6 === n) throw Error(i(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            yc(e, Bl, Hl),
            ac(e, Ke()),
            null
          );
        }
        function cc(e, t) {
          var n = Cl;
          Cl |= 1;
          try {
            return e(t);
          } finally {
            0 === (Cl = n) && ((Ul = Ke() + 500), Ir && Ur());
          }
        }
        function uc(e) {
          null !== Gl && 0 === Gl.tag && 0 === (6 & Cl) && Ac();
          var t = Cl;
          Cl |= 1;
          var n = zl.transition,
            a = xt;
          try {
            if (((zl.transition = null), (xt = 1), e)) return e();
          } finally {
            (xt = a), (zl.transition = n), 0 === (6 & (Cl = t)) && Ur();
          }
        }
        function dc() {
          (Ml = _l.current), Sr(_l);
        }
        function fc(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), rr(n)), null !== Pl))
            for (n = Pl.return; null !== n; ) {
              var a = n;
              switch ((ti(a), a.tag)) {
                case 1:
                  null !== (a = a.type.childContextTypes) &&
                    void 0 !== a &&
                    _r();
                  break;
                case 3:
                  rs(), Sr(Er), Sr(Cr), us();
                  break;
                case 5:
                  ss(a);
                  break;
                case 4:
                  rs();
                  break;
                case 13:
                case 19:
                  Sr(os);
                  break;
                case 10:
                  Ai(a.type._context);
                  break;
                case 22:
                case 23:
                  dc();
              }
              n = n.return;
            }
          if (
            ((El = e),
            (Pl = e = _c(e.current, null)),
            (Ol = Ml = t),
            (Tl = 0),
            (Dl = null),
            (Rl = Fl = Ll = 0),
            (Bl = Il = null),
            null !== Ni)
          ) {
            for (t = 0; t < Ni.length; t++)
              if (null !== (a = (n = Ni[t]).interleaved)) {
                n.interleaved = null;
                var r = a.next,
                  i = n.pending;
                if (null !== i) {
                  var s = i.next;
                  (i.next = r), (a.next = s);
                }
                n.pending = a;
              }
            Ni = null;
          }
          return e;
        }
        function mc(e, t) {
          for (;;) {
            var n = Pl;
            try {
              if ((yi(), (ds.current = io), vs)) {
                for (var a = ps.memoizedState; null !== a; ) {
                  var r = a.queue;
                  null !== r && (r.pending = null), (a = a.next);
                }
                vs = !1;
              }
              if (
                ((ms = 0),
                (gs = hs = ps = null),
                (bs = !1),
                (xs = 0),
                (Nl.current = null),
                null === n || null === n.return)
              ) {
                (Tl = 1), (Dl = t), (Pl = null);
                break;
              }
              e: {
                var s = e,
                  o = n.return,
                  l = n,
                  c = t;
                if (
                  ((t = Ol),
                  (l.flags |= 32768),
                  null !== c &&
                    "object" === typeof c &&
                    "function" === typeof c.then)
                ) {
                  var u = c,
                    d = l,
                    f = d.tag;
                  if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                    var m = d.alternate;
                    m
                      ? ((d.updateQueue = m.updateQueue),
                        (d.memoizedState = m.memoizedState),
                        (d.lanes = m.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var p = vo(o);
                  if (null !== p) {
                    (p.flags &= -257),
                      bo(p, o, l, 0, t),
                      1 & p.mode && go(s, u, t),
                      (c = u);
                    var h = (t = p).updateQueue;
                    if (null === h) {
                      var g = new Set();
                      g.add(c), (t.updateQueue = g);
                    } else h.add(c);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    go(s, u, t), hc();
                    break e;
                  }
                  c = Error(i(426));
                } else if (ri && 1 & l.mode) {
                  var v = vo(o);
                  if (null !== v) {
                    0 === (65536 & v.flags) && (v.flags |= 256),
                      bo(v, o, l, 0, t),
                      pi(co(c, l));
                    break e;
                  }
                }
                (s = c = co(c, l)),
                  4 !== Tl && (Tl = 2),
                  null === Il ? (Il = [s]) : Il.push(s),
                  (s = o);
                do {
                  switch (s.tag) {
                    case 3:
                      (s.flags |= 65536),
                        (t &= -t),
                        (s.lanes |= t),
                        Li(s, po(0, c, t));
                      break e;
                    case 1:
                      l = c;
                      var b = s.type,
                        x = s.stateNode;
                      if (
                        0 === (128 & s.flags) &&
                        ("function" === typeof b.getDerivedStateFromError ||
                          (null !== x &&
                            "function" === typeof x.componentDidCatch &&
                            (null === Yl || !Yl.has(x))))
                      ) {
                        (s.flags |= 65536),
                          (t &= -t),
                          (s.lanes |= t),
                          Li(s, ho(s, l, t));
                        break e;
                      }
                  }
                  s = s.return;
                } while (null !== s);
              }
              jc(n);
            } catch (j) {
              (t = j), Pl === n && null !== n && (Pl = n = n.return);
              continue;
            }
            break;
          }
        }
        function pc() {
          var e = Sl.current;
          return (Sl.current = io), null === e ? io : e;
        }
        function hc() {
          (0 !== Tl && 3 !== Tl && 2 !== Tl) || (Tl = 4),
            null === El ||
              (0 === (268435455 & Ll) && 0 === (268435455 & Fl)) ||
              oc(El, Ol);
        }
        function gc(e, t) {
          var n = Cl;
          Cl |= 2;
          var a = pc();
          for ((El === e && Ol === t) || ((Hl = null), fc(e, t)); ; )
            try {
              vc();
              break;
            } catch (r) {
              mc(e, r);
            }
          if ((yi(), (Cl = n), (Sl.current = a), null !== Pl))
            throw Error(i(261));
          return (El = null), (Ol = 0), Tl;
        }
        function vc() {
          for (; null !== Pl; ) xc(Pl);
        }
        function bc() {
          for (; null !== Pl && !Xe(); ) xc(Pl);
        }
        function xc(e) {
          var t = wl(e.alternate, e, Ml);
          (e.memoizedProps = e.pendingProps),
            null === t ? jc(e) : (Pl = t),
            (Nl.current = null);
        }
        function jc(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Qo(n, t, Ml))) return void (Pl = n);
            } else {
              if (null !== (n = Go(n, t)))
                return (n.flags &= 32767), void (Pl = n);
              if (null === e) return (Tl = 6), void (Pl = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Pl = t);
            Pl = t = e;
          } while (null !== t);
          0 === Tl && (Tl = 5);
        }
        function yc(e, t, n) {
          var a = xt,
            r = zl.transition;
          try {
            (zl.transition = null),
              (xt = 1),
              (function (e, t, n, a) {
                do {
                  Ac();
                } while (null !== Gl);
                if (0 !== (6 & Cl)) throw Error(i(327));
                n = e.finishedWork;
                var r = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(i(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var s = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var a = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var r = 31 - st(n),
                        i = 1 << r;
                      (t[r] = 0), (a[r] = -1), (e[r] = -1), (n &= ~i);
                    }
                  })(e, s),
                  e === El && ((Pl = El = null), (Ol = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Ql ||
                    ((Ql = !0),
                    Ec(tt, function () {
                      return Ac(), null;
                    })),
                  (s = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || s)
                ) {
                  (s = zl.transition), (zl.transition = null);
                  var o = xt;
                  xt = 1;
                  var l = Cl;
                  (Cl |= 4),
                    (Nl.current = null),
                    (function (e, t) {
                      if (((er = qt), ma((e = fa())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var a =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (a && 0 !== a.rangeCount) {
                              n = a.anchorNode;
                              var r = a.anchorOffset,
                                s = a.focusNode;
                              a = a.focusOffset;
                              try {
                                n.nodeType, s.nodeType;
                              } catch (y) {
                                n = null;
                                break e;
                              }
                              var o = 0,
                                l = -1,
                                c = -1,
                                u = 0,
                                d = 0,
                                f = e,
                                m = null;
                              t: for (;;) {
                                for (
                                  var p;
                                  f !== n ||
                                    (0 !== r && 3 !== f.nodeType) ||
                                    (l = o + r),
                                    f !== s ||
                                      (0 !== a && 3 !== f.nodeType) ||
                                      (c = o + a),
                                    3 === f.nodeType &&
                                      (o += f.nodeValue.length),
                                    null !== (p = f.firstChild);

                                )
                                  (m = f), (f = p);
                                for (;;) {
                                  if (f === e) break t;
                                  if (
                                    (m === n && ++u === r && (l = o),
                                    m === s && ++d === a && (c = o),
                                    null !== (p = f.nextSibling))
                                  )
                                    break;
                                  m = (f = m).parentNode;
                                }
                                f = p;
                              }
                              n =
                                -1 === l || -1 === c
                                  ? null
                                  : { start: l, end: c };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        tr = { focusedElem: e, selectionRange: n },
                          qt = !1,
                          Zo = t;
                        null !== Zo;

                      )
                        if (
                          ((e = (t = Zo).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Zo = e);
                        else
                          for (; null !== Zo; ) {
                            t = Zo;
                            try {
                              var h = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== h) {
                                      var g = h.memoizedProps,
                                        v = h.memoizedState,
                                        b = t.stateNode,
                                        x = b.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? g
                                            : gi(t.type, g),
                                          v
                                        );
                                      b.__reactInternalSnapshotBeforeUpdate = x;
                                    }
                                    break;
                                  case 3:
                                    var j = t.stateNode.containerInfo;
                                    1 === j.nodeType
                                      ? (j.textContent = "")
                                      : 9 === j.nodeType &&
                                        j.documentElement &&
                                        j.removeChild(j.documentElement);
                                    break;
                                  default:
                                    throw Error(i(163));
                                }
                            } catch (y) {
                              kc(t, t.return, y);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Zo = e);
                              break;
                            }
                            Zo = t.return;
                          }
                      (h = tl), (tl = !1);
                    })(e, n),
                    gl(n, e),
                    pa(tr),
                    (qt = !!er),
                    (tr = er = null),
                    (e.current = n),
                    bl(n, e, r),
                    $e(),
                    (Cl = l),
                    (xt = o),
                    (zl.transition = s);
                } else e.current = n;
                if (
                  (Ql && ((Ql = !1), (Gl = e), (Xl = r)),
                  0 === (s = e.pendingLanes) && (Yl = null),
                  (function (e) {
                    if (it && "function" === typeof it.onCommitFiberRoot)
                      try {
                        it.onCommitFiberRoot(
                          rt,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  ac(e, Ke()),
                  null !== t)
                )
                  for (a = e.onRecoverableError, n = 0; n < t.length; n++)
                    a((r = t[n]).value, {
                      componentStack: r.stack,
                      digest: r.digest,
                    });
                if (ql) throw ((ql = !1), (e = Wl), (Wl = null), e);
                0 !== (1 & Xl) && 0 !== e.tag && Ac(),
                  0 !== (1 & (s = e.pendingLanes))
                    ? e === Kl
                      ? $l++
                      : (($l = 0), (Kl = e))
                    : ($l = 0),
                  Ur();
              })(e, t, n, a);
          } finally {
            (zl.transition = r), (xt = a);
          }
          return null;
        }
        function Ac() {
          if (null !== Gl) {
            var e = jt(Xl),
              t = zl.transition,
              n = xt;
            try {
              if (((zl.transition = null), (xt = 16 > e ? 16 : e), null === Gl))
                var a = !1;
              else {
                if (((e = Gl), (Gl = null), (Xl = 0), 0 !== (6 & Cl)))
                  throw Error(i(331));
                var r = Cl;
                for (Cl |= 4, Zo = e.current; null !== Zo; ) {
                  var s = Zo,
                    o = s.child;
                  if (0 !== (16 & Zo.flags)) {
                    var l = s.deletions;
                    if (null !== l) {
                      for (var c = 0; c < l.length; c++) {
                        var u = l[c];
                        for (Zo = u; null !== Zo; ) {
                          var d = Zo;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              nl(8, d, s);
                          }
                          var f = d.child;
                          if (null !== f) (f.return = d), (Zo = f);
                          else
                            for (; null !== Zo; ) {
                              var m = (d = Zo).sibling,
                                p = d.return;
                              if ((il(d), d === u)) {
                                Zo = null;
                                break;
                              }
                              if (null !== m) {
                                (m.return = p), (Zo = m);
                                break;
                              }
                              Zo = p;
                            }
                        }
                      }
                      var h = s.alternate;
                      if (null !== h) {
                        var g = h.child;
                        if (null !== g) {
                          h.child = null;
                          do {
                            var v = g.sibling;
                            (g.sibling = null), (g = v);
                          } while (null !== g);
                        }
                      }
                      Zo = s;
                    }
                  }
                  if (0 !== (2064 & s.subtreeFlags) && null !== o)
                    (o.return = s), (Zo = o);
                  else
                    e: for (; null !== Zo; ) {
                      if (0 !== (2048 & (s = Zo).flags))
                        switch (s.tag) {
                          case 0:
                          case 11:
                          case 15:
                            nl(9, s, s.return);
                        }
                      var b = s.sibling;
                      if (null !== b) {
                        (b.return = s.return), (Zo = b);
                        break e;
                      }
                      Zo = s.return;
                    }
                }
                var x = e.current;
                for (Zo = x; null !== Zo; ) {
                  var j = (o = Zo).child;
                  if (0 !== (2064 & o.subtreeFlags) && null !== j)
                    (j.return = o), (Zo = j);
                  else
                    e: for (o = x; null !== Zo; ) {
                      if (0 !== (2048 & (l = Zo).flags))
                        try {
                          switch (l.tag) {
                            case 0:
                            case 11:
                            case 15:
                              al(9, l);
                          }
                        } catch (A) {
                          kc(l, l.return, A);
                        }
                      if (l === o) {
                        Zo = null;
                        break e;
                      }
                      var y = l.sibling;
                      if (null !== y) {
                        (y.return = l.return), (Zo = y);
                        break e;
                      }
                      Zo = l.return;
                    }
                }
                if (
                  ((Cl = r),
                  Ur(),
                  it && "function" === typeof it.onPostCommitFiberRoot)
                )
                  try {
                    it.onPostCommitFiberRoot(rt, e);
                  } catch (A) {}
                a = !0;
              }
              return a;
            } finally {
              (xt = n), (zl.transition = t);
            }
          }
          return !1;
        }
        function wc(e, t, n) {
          (e = Ti(e, (t = po(0, (t = co(n, t)), 1)), 1)),
            (t = ec()),
            null !== e && (vt(e, 1, t), ac(e, t));
        }
        function kc(e, t, n) {
          if (3 === e.tag) wc(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                wc(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var a = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof a.componentDidCatch &&
                    (null === Yl || !Yl.has(a)))
                ) {
                  (t = Ti(t, (e = ho(t, (e = co(n, e)), 1)), 1)),
                    (e = ec()),
                    null !== t && (vt(t, 1, e), ac(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Sc(e, t, n) {
          var a = e.pingCache;
          null !== a && a.delete(t),
            (t = ec()),
            (e.pingedLanes |= e.suspendedLanes & n),
            El === e &&
              (Ol & n) === n &&
              (4 === Tl ||
              (3 === Tl && (130023424 & Ol) === Ol && 500 > Ke() - Vl)
                ? fc(e, 0)
                : (Rl |= n)),
            ac(e, t);
        }
        function Nc(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ut), 0 === (130023424 & (ut <<= 1)) && (ut = 4194304)));
          var n = ec();
          null !== (e = Ei(e, t)) && (vt(e, t, n), ac(e, n));
        }
        function zc(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Nc(e, n);
        }
        function Cc(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var a = e.stateNode,
                r = e.memoizedState;
              null !== r && (n = r.retryLane);
              break;
            case 19:
              a = e.stateNode;
              break;
            default:
              throw Error(i(314));
          }
          null !== a && a.delete(t), Nc(e, n);
        }
        function Ec(e, t) {
          return Qe(e, t);
        }
        function Pc(e, t, n, a) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = a),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Oc(e, t, n, a) {
          return new Pc(e, t, n, a);
        }
        function Mc(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function _c(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Oc(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Tc(e, t, n, a, r, s) {
          var o = 2;
          if (((a = e), "function" === typeof e)) Mc(e) && (o = 1);
          else if ("string" === typeof e) o = 5;
          else
            e: switch (e) {
              case w:
                return Dc(n.children, r, s, t);
              case k:
                (o = 8), (r |= 8);
                break;
              case S:
                return (
                  ((e = Oc(12, n, t, 2 | r)).elementType = S), (e.lanes = s), e
                );
              case E:
                return (
                  ((e = Oc(13, n, t, r)).elementType = E), (e.lanes = s), e
                );
              case P:
                return (
                  ((e = Oc(19, n, t, r)).elementType = P), (e.lanes = s), e
                );
              case _:
                return Lc(n, r, s, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case N:
                      o = 10;
                      break e;
                    case z:
                      o = 9;
                      break e;
                    case C:
                      o = 11;
                      break e;
                    case O:
                      o = 14;
                      break e;
                    case M:
                      (o = 16), (a = null);
                      break e;
                  }
                throw Error(i(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Oc(o, n, t, r)).elementType = e),
            (t.type = a),
            (t.lanes = s),
            t
          );
        }
        function Dc(e, t, n, a) {
          return ((e = Oc(7, e, a, t)).lanes = n), e;
        }
        function Lc(e, t, n, a) {
          return (
            ((e = Oc(22, e, a, t)).elementType = _),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Fc(e, t, n) {
          return ((e = Oc(6, e, null, t)).lanes = n), e;
        }
        function Rc(e, t, n) {
          return (
            ((t = Oc(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Ic(e, t, n, a, r) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = gt(0)),
            (this.expirationTimes = gt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = gt(0)),
            (this.identifierPrefix = a),
            (this.onRecoverableError = r),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Bc(e, t, n, a, r, i, s, o, l) {
          return (
            (e = new Ic(e, t, n, o, l)),
            1 === t ? ((t = 1), !0 === i && (t |= 8)) : (t = 0),
            (i = Oc(3, null, null, t)),
            (e.current = i),
            (i.stateNode = e),
            (i.memoizedState = {
              element: a,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Oi(i),
            e
          );
        }
        function Vc(e, t, n) {
          var a =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: A,
            key: null == a ? null : "" + a,
            children: e,
            containerInfo: t,
            implementation: n,
          };
        }
        function Uc(e) {
          if (!e) return zr;
          e: {
            if (Ue((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(i(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Mr(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(i(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Mr(n)) return Dr(e, n, t);
          }
          return t;
        }
        function Hc(e, t, n, a, r, i, s, o, l) {
          return (
            ((e = Bc(n, a, !0, e, 0, i, 0, o, l)).context = Uc(null)),
            (n = e.current),
            ((i = _i((a = ec()), (r = tc(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Ti(n, i, r),
            (e.current.lanes = r),
            vt(e, r, a),
            ac(e, a),
            e
          );
        }
        function qc(e, t, n, a) {
          var r = t.current,
            i = ec(),
            s = tc(r);
          return (
            (n = Uc(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = _i(i, s)).payload = { element: e }),
            null !== (a = void 0 === a ? null : a) && (t.callback = a),
            null !== (e = Ti(r, t, s)) && (nc(e, r, s, i), Di(e, r, s)),
            s
          );
        }
        function Wc(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Yc(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Qc(e, t) {
          Yc(e, t), (e = e.alternate) && Yc(e, t);
        }
        wl = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Er.current) jo = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (jo = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Po(t), mi();
                        break;
                      case 5:
                        is(t);
                        break;
                      case 1:
                        Mr(t.type) && Lr(t);
                        break;
                      case 4:
                        as(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var a = t.type._context,
                          r = t.memoizedProps.value;
                        Nr(vi, a._currentValue), (a._currentValue = r);
                        break;
                      case 13:
                        if (null !== (a = t.memoizedState))
                          return null !== a.dehydrated
                            ? (Nr(os, 1 & os.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Fo(e, t, n)
                            : (Nr(os, 1 & os.current),
                              null !== (e = qo(e, t, n)) ? e.sibling : null);
                        Nr(os, 1 & os.current);
                        break;
                      case 19:
                        if (
                          ((a = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (a) return Uo(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (r = t.memoizedState) &&
                            ((r.rendering = null),
                            (r.tail = null),
                            (r.lastEffect = null)),
                          Nr(os, os.current),
                          a)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), So(e, t, n);
                    }
                    return qo(e, t, n);
                  })(e, t, n)
                );
              jo = 0 !== (131072 & e.flags);
            }
          else (jo = !1), ri && 0 !== (1048576 & t.flags) && Jr(t, Yr, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var a = t.type;
              Ho(e, t), (e = t.pendingProps);
              var r = Or(t, Cr.current);
              ki(t, n), (r = ws(null, t, a, e, r, n));
              var s = ks();
              return (
                (t.flags |= 1),
                "object" === typeof r &&
                null !== r &&
                "function" === typeof r.render &&
                void 0 === r.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Mr(a) ? ((s = !0), Lr(t)) : (s = !1),
                    (t.memoizedState =
                      null !== r.state && void 0 !== r.state ? r.state : null),
                    Oi(t),
                    (r.updater = Vi),
                    (t.stateNode = r),
                    (r._reactInternals = t),
                    Wi(t, a, e, n),
                    (t = Eo(null, t, a, !0, s, n)))
                  : ((t.tag = 0),
                    ri && s && ei(t),
                    yo(null, t, r, n),
                    (t = t.child)),
                t
              );
            case 16:
              a = t.elementType;
              e: {
                switch (
                  (Ho(e, t),
                  (e = t.pendingProps),
                  (a = (r = a._init)(a._payload)),
                  (t.type = a),
                  (r = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Mc(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === C) return 11;
                        if (e === O) return 14;
                      }
                      return 2;
                    })(a)),
                  (e = gi(a, e)),
                  r)
                ) {
                  case 0:
                    t = zo(null, t, a, e, n);
                    break e;
                  case 1:
                    t = Co(null, t, a, e, n);
                    break e;
                  case 11:
                    t = Ao(null, t, a, e, n);
                    break e;
                  case 14:
                    t = wo(null, t, a, gi(a.type, e), n);
                    break e;
                }
                throw Error(i(306, a, ""));
              }
              return t;
            case 0:
              return (
                (a = t.type),
                (r = t.pendingProps),
                zo(e, t, a, (r = t.elementType === a ? r : gi(a, r)), n)
              );
            case 1:
              return (
                (a = t.type),
                (r = t.pendingProps),
                Co(e, t, a, (r = t.elementType === a ? r : gi(a, r)), n)
              );
            case 3:
              e: {
                if ((Po(t), null === e)) throw Error(i(387));
                (a = t.pendingProps),
                  (r = (s = t.memoizedState).element),
                  Mi(e, t),
                  Fi(t, a, null, n);
                var o = t.memoizedState;
                if (((a = o.element), s.isDehydrated)) {
                  if (
                    ((s = {
                      element: a,
                      isDehydrated: !1,
                      cache: o.cache,
                      pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                      transitions: o.transitions,
                    }),
                    (t.updateQueue.baseState = s),
                    (t.memoizedState = s),
                    256 & t.flags)
                  ) {
                    t = Oo(e, t, a, n, (r = co(Error(i(423)), t)));
                    break e;
                  }
                  if (a !== r) {
                    t = Oo(e, t, a, n, (r = co(Error(i(424)), t)));
                    break e;
                  }
                  for (
                    ai = cr(t.stateNode.containerInfo.firstChild),
                      ni = t,
                      ri = !0,
                      ii = null,
                      n = Ki(t, null, a, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((mi(), a === r)) {
                    t = qo(e, t, n);
                    break e;
                  }
                  yo(e, t, a, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                is(t),
                null === e && ci(t),
                (a = t.type),
                (r = t.pendingProps),
                (s = null !== e ? e.memoizedProps : null),
                (o = r.children),
                nr(a, r)
                  ? (o = null)
                  : null !== s && nr(a, s) && (t.flags |= 32),
                No(e, t),
                yo(e, t, o, n),
                t.child
              );
            case 6:
              return null === e && ci(t), null;
            case 13:
              return Fo(e, t, n);
            case 4:
              return (
                as(t, t.stateNode.containerInfo),
                (a = t.pendingProps),
                null === e ? (t.child = $i(t, null, a, n)) : yo(e, t, a, n),
                t.child
              );
            case 11:
              return (
                (a = t.type),
                (r = t.pendingProps),
                Ao(e, t, a, (r = t.elementType === a ? r : gi(a, r)), n)
              );
            case 7:
              return yo(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return yo(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((a = t.type._context),
                  (r = t.pendingProps),
                  (s = t.memoizedProps),
                  (o = r.value),
                  Nr(vi, a._currentValue),
                  (a._currentValue = o),
                  null !== s)
                )
                  if (oa(s.value, o)) {
                    if (s.children === r.children && !Er.current) {
                      t = qo(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (s = t.child) && (s.return = t);
                      null !== s;

                    ) {
                      var l = s.dependencies;
                      if (null !== l) {
                        o = s.child;
                        for (var c = l.firstContext; null !== c; ) {
                          if (c.context === a) {
                            if (1 === s.tag) {
                              (c = _i(-1, n & -n)).tag = 2;
                              var u = s.updateQueue;
                              if (null !== u) {
                                var d = (u = u.shared).pending;
                                null === d
                                  ? (c.next = c)
                                  : ((c.next = d.next), (d.next = c)),
                                  (u.pending = c);
                              }
                            }
                            (s.lanes |= n),
                              null !== (c = s.alternate) && (c.lanes |= n),
                              wi(s.return, n, t),
                              (l.lanes |= n);
                            break;
                          }
                          c = c.next;
                        }
                      } else if (10 === s.tag)
                        o = s.type === t.type ? null : s.child;
                      else if (18 === s.tag) {
                        if (null === (o = s.return)) throw Error(i(341));
                        (o.lanes |= n),
                          null !== (l = o.alternate) && (l.lanes |= n),
                          wi(o, n, t),
                          (o = s.sibling);
                      } else o = s.child;
                      if (null !== o) o.return = s;
                      else
                        for (o = s; null !== o; ) {
                          if (o === t) {
                            o = null;
                            break;
                          }
                          if (null !== (s = o.sibling)) {
                            (s.return = o.return), (o = s);
                            break;
                          }
                          o = o.return;
                        }
                      s = o;
                    }
                yo(e, t, r.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (r = t.type),
                (a = t.pendingProps.children),
                ki(t, n),
                (a = a((r = Si(r)))),
                (t.flags |= 1),
                yo(e, t, a, n),
                t.child
              );
            case 14:
              return (
                (r = gi((a = t.type), t.pendingProps)),
                wo(e, t, a, (r = gi(a.type, r)), n)
              );
            case 15:
              return ko(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (a = t.type),
                (r = t.pendingProps),
                (r = t.elementType === a ? r : gi(a, r)),
                Ho(e, t),
                (t.tag = 1),
                Mr(a) ? ((e = !0), Lr(t)) : (e = !1),
                ki(t, n),
                Hi(t, a, r),
                Wi(t, a, r, n),
                Eo(null, t, a, !0, e, n)
              );
            case 19:
              return Uo(e, t, n);
            case 22:
              return So(e, t, n);
          }
          throw Error(i(156, t.tag));
        };
        var Gc =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Xc(e) {
          this._internalRoot = e;
        }
        function $c(e) {
          this._internalRoot = e;
        }
        function Kc(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Zc(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Jc() {}
        function eu(e, t, n, a, r) {
          var i = n._reactRootContainer;
          if (i) {
            var s = i;
            if ("function" === typeof r) {
              var o = r;
              r = function () {
                var e = Wc(s);
                o.call(e);
              };
            }
            qc(t, s, e, r);
          } else
            s = (function (e, t, n, a, r) {
              if (r) {
                if ("function" === typeof a) {
                  var i = a;
                  a = function () {
                    var e = Wc(s);
                    i.call(e);
                  };
                }
                var s = Hc(t, a, e, 0, null, !1, 0, "", Jc);
                return (
                  (e._reactRootContainer = s),
                  (e[pr] = s.current),
                  Ua(8 === e.nodeType ? e.parentNode : e),
                  uc(),
                  s
                );
              }
              for (; (r = e.lastChild); ) e.removeChild(r);
              if ("function" === typeof a) {
                var o = a;
                a = function () {
                  var e = Wc(l);
                  o.call(e);
                };
              }
              var l = Bc(e, 0, !1, null, 0, !1, 0, "", Jc);
              return (
                (e._reactRootContainer = l),
                (e[pr] = l.current),
                Ua(8 === e.nodeType ? e.parentNode : e),
                uc(function () {
                  qc(t, l, n, a);
                }),
                l
              );
            })(n, t, e, r, a);
          return Wc(s);
        }
        ($c.prototype.render = Xc.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(i(409));
            qc(e, t, null, null);
          }),
          ($c.prototype.unmount = Xc.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                uc(function () {
                  qc(null, e, null, null);
                }),
                  (t[pr] = null);
              }
            }),
          ($c.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = kt();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < _t.length && 0 !== t && t < _t[n].priority;
                n++
              );
              _t.splice(n, 0, e), 0 === n && Ft(e);
            }
          }),
          (yt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes);
                  0 !== n &&
                    (bt(t, 1 | n),
                    ac(t, Ke()),
                    0 === (6 & Cl) && ((Ul = Ke() + 500), Ur()));
                }
                break;
              case 13:
                uc(function () {
                  var t = Ei(e, 1);
                  if (null !== t) {
                    var n = ec();
                    nc(t, e, 1, n);
                  }
                }),
                  Qc(e, 1);
            }
          }),
          (At = function (e) {
            if (13 === e.tag) {
              var t = Ei(e, 134217728);
              if (null !== t) nc(t, e, 134217728, ec());
              Qc(e, 134217728);
            }
          }),
          (wt = function (e) {
            if (13 === e.tag) {
              var t = tc(e),
                n = Ei(e, t);
              if (null !== n) nc(n, e, t, ec());
              Qc(e, t);
            }
          }),
          (kt = function () {
            return xt;
          }),
          (St = function (e, t) {
            var n = xt;
            try {
              return (xt = e), t();
            } finally {
              xt = n;
            }
          }),
          (Ae = function (e, t, n) {
            switch (t) {
              case "input":
                if ((Z(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var a = n[t];
                    if (a !== e && a.form === e.form) {
                      var r = yr(a);
                      if (!r) throw Error(i(90));
                      Q(a), Z(a, r);
                    }
                  }
                }
                break;
              case "textarea":
                ie(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Ce = cc),
          (Ee = uc);
        var tu = {
            usingClientEntryPoint: !1,
            Events: [xr, jr, yr, Ne, ze, cc],
          },
          nu = {
            findFiberByHostInstance: br,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          au = {
            bundleType: nu.bundleType,
            version: nu.version,
            rendererPackageName: nu.rendererPackageName,
            rendererConfig: nu.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: j.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = We(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nu.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ru = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ru.isDisabled && ru.supportsFiber)
            try {
              (rt = ru.inject(au)), (it = ru);
            } catch (ue) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tu),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Kc(t)) throw Error(i(200));
            return Vc(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Kc(e)) throw Error(i(299));
            var n = !1,
              a = "",
              r = Gc;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (a = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (r = t.onRecoverableError)),
              (t = Bc(e, 1, !1, null, 0, n, 0, a, r)),
              (e[pr] = t.current),
              Ua(8 === e.nodeType ? e.parentNode : e),
              new Xc(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(i(188));
              throw ((e = Object.keys(e).join(",")), Error(i(268, e)));
            }
            return (e = null === (e = We(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return uc(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Zc(t)) throw Error(i(200));
            return eu(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Kc(e)) throw Error(i(405));
            var a = (null != n && n.hydratedSources) || null,
              r = !1,
              s = "",
              o = Gc;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (r = !0),
                void 0 !== n.identifierPrefix && (s = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (o = n.onRecoverableError)),
              (t = Hc(t, null, e, 1, null != n ? n : null, r, 0, s, o)),
              (e[pr] = t.current),
              Ua(e),
              a)
            )
              for (e = 0; e < a.length; e++)
                (r = (r = (n = a[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, r])
                    : t.mutableSourceEagerHydrationData.push(n, r);
            return new $c(t);
          }),
          (t.render = function (e, t, n) {
            if (!Zc(t)) throw Error(i(200));
            return eu(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Zc(e)) throw Error(i(40));
            return (
              !!e._reactRootContainer &&
              (uc(function () {
                eu(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[pr] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = cc),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, a) {
            if (!Zc(n)) throw Error(i(200));
            if (null == e || void 0 === e._reactInternals) throw Error(i(38));
            return eu(e, t, n, !1, a);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      1250: function (e, t, n) {
        "use strict";
        var a = n(4164);
        (t.createRoot = a.createRoot), (t.hydrateRoot = a.hydrateRoot);
      },
      4164: function (e, t, n) {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(4463));
      },
      6374: function (e, t, n) {
        "use strict";
        var a = n(2791),
          r = Symbol.for("react.element"),
          i = Symbol.for("react.fragment"),
          s = Object.prototype.hasOwnProperty,
          o =
            a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          l = { key: !0, ref: !0, __self: !0, __source: !0 };
        function c(e, t, n) {
          var a,
            i = {},
            c = null,
            u = null;
          for (a in (void 0 !== n && (c = "" + n),
          void 0 !== t.key && (c = "" + t.key),
          void 0 !== t.ref && (u = t.ref),
          t))
            s.call(t, a) && !l.hasOwnProperty(a) && (i[a] = t[a]);
          if (e && e.defaultProps)
            for (a in (t = e.defaultProps)) void 0 === i[a] && (i[a] = t[a]);
          return {
            $$typeof: r,
            type: e,
            key: c,
            ref: u,
            props: i,
            _owner: o.current,
          };
        }
        (t.Fragment = i), (t.jsx = c), (t.jsxs = c);
      },
      9117: function (e, t) {
        "use strict";
        var n = Symbol.for("react.element"),
          a = Symbol.for("react.portal"),
          r = Symbol.for("react.fragment"),
          i = Symbol.for("react.strict_mode"),
          s = Symbol.for("react.profiler"),
          o = Symbol.for("react.provider"),
          l = Symbol.for("react.context"),
          c = Symbol.for("react.forward_ref"),
          u = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          m = Symbol.iterator;
        var p = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          h = Object.assign,
          g = {};
        function v(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || p);
        }
        function b() {}
        function x(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || p);
        }
        (v.prototype.isReactComponent = {}),
          (v.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (v.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (b.prototype = v.prototype);
        var j = (x.prototype = new b());
        (j.constructor = x), h(j, v.prototype), (j.isPureReactComponent = !0);
        var y = Array.isArray,
          A = Object.prototype.hasOwnProperty,
          w = { current: null },
          k = { key: !0, ref: !0, __self: !0, __source: !0 };
        function S(e, t, a) {
          var r,
            i = {},
            s = null,
            o = null;
          if (null != t)
            for (r in (void 0 !== t.ref && (o = t.ref),
            void 0 !== t.key && (s = "" + t.key),
            t))
              A.call(t, r) && !k.hasOwnProperty(r) && (i[r] = t[r]);
          var l = arguments.length - 2;
          if (1 === l) i.children = a;
          else if (1 < l) {
            for (var c = Array(l), u = 0; u < l; u++) c[u] = arguments[u + 2];
            i.children = c;
          }
          if (e && e.defaultProps)
            for (r in (l = e.defaultProps)) void 0 === i[r] && (i[r] = l[r]);
          return {
            $$typeof: n,
            type: e,
            key: s,
            ref: o,
            props: i,
            _owner: w.current,
          };
        }
        function N(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var z = /\/+/g;
        function C(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function E(e, t, r, i, s) {
          var o = typeof e;
          ("undefined" !== o && "boolean" !== o) || (e = null);
          var l = !1;
          if (null === e) l = !0;
          else
            switch (o) {
              case "string":
              case "number":
                l = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case a:
                    l = !0;
                }
            }
          if (l)
            return (
              (s = s((l = e))),
              (e = "" === i ? "." + C(l, 0) : i),
              y(s)
                ? ((r = ""),
                  null != e && (r = e.replace(z, "$&/") + "/"),
                  E(s, t, r, "", function (e) {
                    return e;
                  }))
                : null != s &&
                  (N(s) &&
                    (s = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      s,
                      r +
                        (!s.key || (l && l.key === s.key)
                          ? ""
                          : ("" + s.key).replace(z, "$&/") + "/") +
                        e
                    )),
                  t.push(s)),
              1
            );
          if (((l = 0), (i = "" === i ? "." : i + ":"), y(e)))
            for (var c = 0; c < e.length; c++) {
              var u = i + C((o = e[c]), c);
              l += E(o, t, r, u, s);
            }
          else if (
            ((u = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (m && e[m]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof u)
          )
            for (e = u.call(e), c = 0; !(o = e.next()).done; )
              l += E((o = o.value), t, r, (u = i + C(o, c++)), s);
          else if ("object" === o)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return l;
        }
        function P(e, t, n) {
          if (null == e) return e;
          var a = [],
            r = 0;
          return (
            E(e, a, "", "", function (e) {
              return t.call(n, e, r++);
            }),
            a
          );
        }
        function O(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var M = { current: null },
          _ = { transition: null },
          T = {
            ReactCurrentDispatcher: M,
            ReactCurrentBatchConfig: _,
            ReactCurrentOwner: w,
          };
        (t.Children = {
          map: P,
          forEach: function (e, t, n) {
            P(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              P(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              P(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!N(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = v),
          (t.Fragment = r),
          (t.Profiler = s),
          (t.PureComponent = x),
          (t.StrictMode = i),
          (t.Suspense = u),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T),
          (t.cloneElement = function (e, t, a) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var r = h({}, e.props),
              i = e.key,
              s = e.ref,
              o = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((s = t.ref), (o = w.current)),
                void 0 !== t.key && (i = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var l = e.type.defaultProps;
              for (c in t)
                A.call(t, c) &&
                  !k.hasOwnProperty(c) &&
                  (r[c] = void 0 === t[c] && void 0 !== l ? l[c] : t[c]);
            }
            var c = arguments.length - 2;
            if (1 === c) r.children = a;
            else if (1 < c) {
              l = Array(c);
              for (var u = 0; u < c; u++) l[u] = arguments[u + 2];
              r.children = l;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: i,
              ref: s,
              props: r,
              _owner: o,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: l,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: o, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = S),
          (t.createFactory = function (e) {
            var t = S.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: c, render: e };
          }),
          (t.isValidElement = N),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: O,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = _.transition;
            _.transition = {};
            try {
              e();
            } finally {
              _.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return M.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return M.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return M.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return M.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return M.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return M.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return M.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return M.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return M.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return M.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return M.current.useRef(e);
          }),
          (t.useState = function (e) {
            return M.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return M.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return M.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      2791: function (e, t, n) {
        "use strict";
        e.exports = n(9117);
      },
      184: function (e, t, n) {
        "use strict";
        e.exports = n(6374);
      },
      6813: function (e, t) {
        "use strict";
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var a = (n - 1) >>> 1,
              r = e[a];
            if (!(0 < i(r, t))) break e;
            (e[a] = t), (e[n] = r), (n = a);
          }
        }
        function a(e) {
          return 0 === e.length ? null : e[0];
        }
        function r(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var a = 0, r = e.length, s = r >>> 1; a < s; ) {
              var o = 2 * (a + 1) - 1,
                l = e[o],
                c = o + 1,
                u = e[c];
              if (0 > i(l, n))
                c < r && 0 > i(u, l)
                  ? ((e[a] = u), (e[c] = n), (a = c))
                  : ((e[a] = l), (e[o] = n), (a = o));
              else {
                if (!(c < r && 0 > i(u, n))) break e;
                (e[a] = u), (e[c] = n), (a = c);
              }
            }
          }
          return t;
        }
        function i(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var s = performance;
          t.unstable_now = function () {
            return s.now();
          };
        } else {
          var o = Date,
            l = o.now();
          t.unstable_now = function () {
            return o.now() - l;
          };
        }
        var c = [],
          u = [],
          d = 1,
          f = null,
          m = 3,
          p = !1,
          h = !1,
          g = !1,
          v = "function" === typeof setTimeout ? setTimeout : null,
          b = "function" === typeof clearTimeout ? clearTimeout : null,
          x = "undefined" !== typeof setImmediate ? setImmediate : null;
        function j(e) {
          for (var t = a(u); null !== t; ) {
            if (null === t.callback) r(u);
            else {
              if (!(t.startTime <= e)) break;
              r(u), (t.sortIndex = t.expirationTime), n(c, t);
            }
            t = a(u);
          }
        }
        function y(e) {
          if (((g = !1), j(e), !h))
            if (null !== a(c)) (h = !0), _(A);
            else {
              var t = a(u);
              null !== t && T(y, t.startTime - e);
            }
        }
        function A(e, n) {
          (h = !1), g && ((g = !1), b(N), (N = -1)), (p = !0);
          var i = m;
          try {
            for (
              j(n), f = a(c);
              null !== f && (!(f.expirationTime > n) || (e && !E()));

            ) {
              var s = f.callback;
              if ("function" === typeof s) {
                (f.callback = null), (m = f.priorityLevel);
                var o = s(f.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof o
                    ? (f.callback = o)
                    : f === a(c) && r(c),
                  j(n);
              } else r(c);
              f = a(c);
            }
            if (null !== f) var l = !0;
            else {
              var d = a(u);
              null !== d && T(y, d.startTime - n), (l = !1);
            }
            return l;
          } finally {
            (f = null), (m = i), (p = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var w,
          k = !1,
          S = null,
          N = -1,
          z = 5,
          C = -1;
        function E() {
          return !(t.unstable_now() - C < z);
        }
        function P() {
          if (null !== S) {
            var e = t.unstable_now();
            C = e;
            var n = !0;
            try {
              n = S(!0, e);
            } finally {
              n ? w() : ((k = !1), (S = null));
            }
          } else k = !1;
        }
        if ("function" === typeof x)
          w = function () {
            x(P);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var O = new MessageChannel(),
            M = O.port2;
          (O.port1.onmessage = P),
            (w = function () {
              M.postMessage(null);
            });
        } else
          w = function () {
            v(P, 0);
          };
        function _(e) {
          (S = e), k || ((k = !0), w());
        }
        function T(e, n) {
          N = v(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            h || p || ((h = !0), _(A));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (z = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return m;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return a(c);
          }),
          (t.unstable_next = function (e) {
            switch (m) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = m;
            }
            var n = m;
            m = t;
            try {
              return e();
            } finally {
              m = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = m;
            m = e;
            try {
              return t();
            } finally {
              m = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, r, i) {
            var s = t.unstable_now();
            switch (
              ("object" === typeof i && null !== i
                ? (i = "number" === typeof (i = i.delay) && 0 < i ? s + i : s)
                : (i = s),
              e)
            ) {
              case 1:
                var o = -1;
                break;
              case 2:
                o = 250;
                break;
              case 5:
                o = 1073741823;
                break;
              case 4:
                o = 1e4;
                break;
              default:
                o = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: r,
                priorityLevel: e,
                startTime: i,
                expirationTime: (o = i + o),
                sortIndex: -1,
              }),
              i > s
                ? ((e.sortIndex = i),
                  n(u, e),
                  null === a(c) &&
                    e === a(u) &&
                    (g ? (b(N), (N = -1)) : (g = !0), T(y, i - s)))
                : ((e.sortIndex = o), n(c, e), h || p || ((h = !0), _(A))),
              e
            );
          }),
          (t.unstable_shouldYield = E),
          (t.unstable_wrapCallback = function (e) {
            var t = m;
            return function () {
              var n = m;
              m = t;
              try {
                return e.apply(this, arguments);
              } finally {
                m = n;
              }
            };
          });
      },
      5296: function (e, t, n) {
        "use strict";
        e.exports = n(6813);
      },
    },
    t = {};
  function n(a) {
    var r = t[a];
    if (void 0 !== r) return r.exports;
    var i = (t[a] = { exports: {} });
    return e[a](i, i.exports, n), i.exports;
  }
  (n.m = e),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, { a: t }), t;
    }),
    (function () {
      var e,
        t = Object.getPrototypeOf
          ? function (e) {
              return Object.getPrototypeOf(e);
            }
          : function (e) {
              return e.__proto__;
            };
      n.t = function (a, r) {
        if ((1 & r && (a = this(a)), 8 & r)) return a;
        if ("object" === typeof a && a) {
          if (4 & r && a.__esModule) return a;
          if (16 & r && "function" === typeof a.then) return a;
        }
        var i = Object.create(null);
        n.r(i);
        var s = {};
        e = e || [null, t({}), t([]), t(t)];
        for (
          var o = 2 & r && a;
          "object" == typeof o && !~e.indexOf(o);
          o = t(o)
        )
          Object.getOwnPropertyNames(o).forEach(function (e) {
            s[e] = function () {
              return a[e];
            };
          });
        return (
          (s.default = function () {
            return a;
          }),
          n.d(i, s),
          i
        );
      };
    })(),
    (n.d = function (e, t) {
      for (var a in t)
        n.o(t, a) &&
          !n.o(e, a) &&
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
    }),
    (n.f = {}),
    (n.e = function (e) {
      return Promise.all(
        Object.keys(n.f).reduce(function (t, a) {
          return n.f[a](e, t), t;
        }, [])
      );
    }),
    (n.u = function (e) {
      return "static/js/" + e + ".4546fbdd.chunk.js";
    }),
    (n.miniCssF = function (e) {}),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (function () {
      var e = {},
        t = "osm-web-client:";
      n.l = function (a, r, i, s) {
        if (e[a]) e[a].push(r);
        else {
          var o, l;
          if (void 0 !== i)
            for (
              var c = document.getElementsByTagName("script"), u = 0;
              u < c.length;
              u++
            ) {
              var d = c[u];
              if (
                d.getAttribute("src") == a ||
                d.getAttribute("data-webpack") == t + i
              ) {
                o = d;
                break;
              }
            }
          o ||
            ((l = !0),
            ((o = document.createElement("script")).charset = "utf-8"),
            (o.timeout = 120),
            n.nc && o.setAttribute("nonce", n.nc),
            o.setAttribute("data-webpack", t + i),
            (o.src = a)),
            (e[a] = [r]);
          var f = function (t, n) {
              (o.onerror = o.onload = null), clearTimeout(m);
              var r = e[a];
              if (
                (delete e[a],
                o.parentNode && o.parentNode.removeChild(o),
                r &&
                  r.forEach(function (e) {
                    return e(n);
                  }),
                t)
              )
                return t(n);
            },
            m = setTimeout(
              f.bind(null, void 0, { type: "timeout", target: o }),
              12e4
            );
          (o.onerror = f.bind(null, o.onerror)),
            (o.onload = f.bind(null, o.onload)),
            l && document.head.appendChild(o);
        }
      };
    })(),
    (n.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/"),
    (function () {
      var e = { 179: 0 };
      n.f.j = function (t, a) {
        var r = n.o(e, t) ? e[t] : void 0;
        if (0 !== r)
          if (r) a.push(r[2]);
          else {
            var i = new Promise(function (n, a) {
              r = e[t] = [n, a];
            });
            a.push((r[2] = i));
            var s = n.p + n.u(t),
              o = new Error();
            n.l(
              s,
              function (a) {
                if (n.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                  var i = a && ("load" === a.type ? "missing" : a.type),
                    s = a && a.target && a.target.src;
                  (o.message =
                    "Loading chunk " + t + " failed.\n(" + i + ": " + s + ")"),
                    (o.name = "ChunkLoadError"),
                    (o.type = i),
                    (o.request = s),
                    r[1](o);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = function (t, a) {
          var r,
            i,
            s = a[0],
            o = a[1],
            l = a[2],
            c = 0;
          if (
            s.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (r in o) n.o(o, r) && (n.m[r] = o[r]);
            if (l) l(n);
          }
          for (t && t(a); c < s.length; c++)
            (i = s[c]), n.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
        },
        a = (self.webpackChunkosm_web_client =
          self.webpackChunkosm_web_client || []);
      a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)));
    })(),
    (function () {
      "use strict";
      var e,
        t = n(2791),
        a = n.t(t, 2),
        r = n(1250);
      function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
        return a;
      }
      function s(e, t) {
        if (e) {
          if ("string" === typeof e) return i(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? i(e, t)
              : void 0
          );
        }
      }
      function o(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var a,
                r,
                i = [],
                s = !0,
                o = !1;
              try {
                for (
                  n = n.call(e);
                  !(s = (a = n.next()).done) &&
                  (i.push(a.value), !t || i.length !== t);
                  s = !0
                );
              } catch (l) {
                (o = !0), (r = l);
              } finally {
                try {
                  s || null == n.return || n.return();
                } finally {
                  if (o) throw r;
                }
              }
              return i;
            }
          })(e, t) ||
          s(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function l(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return i(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          s(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function c(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            "value" in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a);
        }
      }
      function d(e, t, n) {
        return (
          t && u(e.prototype, t),
          n && u(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function f(e, t) {
        return (
          (f = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          f(e, t)
        );
      }
      function m(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && f(e, t);
      }
      function p(e) {
        return (
          (p = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          p(e)
        );
      }
      function h() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function g(e) {
        return (
          (g =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          g(e)
        );
      }
      function v(e, t) {
        if (t && ("object" === g(t) || "function" === typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        })(e);
      }
      function b(e) {
        var t = h();
        return function () {
          var n,
            a = p(e);
          if (t) {
            var r = p(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return v(this, n);
        };
      }
      function x(e, t, n) {
        return (
          (x = h()
            ? Reflect.construct.bind()
            : function (e, t, n) {
                var a = [null];
                a.push.apply(a, t);
                var r = new (Function.bind.apply(e, a))();
                return n && f(r, n.prototype), r;
              }),
          x.apply(null, arguments)
        );
      }
      function j(e) {
        var t = "function" === typeof Map ? new Map() : void 0;
        return (
          (j = function (e) {
            if (
              null === e ||
              ((n = e),
              -1 === Function.toString.call(n).indexOf("[native code]"))
            )
              return e;
            var n;
            if ("function" !== typeof e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            if ("undefined" !== typeof t) {
              if (t.has(e)) return t.get(e);
              t.set(e, a);
            }
            function a() {
              return x(e, arguments, p(this).constructor);
            }
            return (
              (a.prototype = Object.create(e.prototype, {
                constructor: {
                  value: a,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              f(a, e)
            );
          }),
          j(e)
        );
      }
      function y() {
        return (
          (y = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var a in n)
                    Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                }
                return e;
              }),
          y.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(e || (e = {}));
      var A,
        w = "popstate";
      function k(e) {
        return { usr: e.state, key: e.key };
      }
      function S(e, t, n, a) {
        return (
          void 0 === n && (n = null),
          y(
            {
              pathname: "string" === typeof e ? e : e.pathname,
              search: "",
              hash: "",
            },
            "string" === typeof t ? z(t) : t,
            {
              state: n,
              key:
                (null == t ? void 0 : t.key) ||
                a ||
                Math.random().toString(36).substr(2, 8),
            }
          )
        );
      }
      function N(e) {
        var t = e.pathname,
          n = void 0 === t ? "/" : t,
          a = e.search,
          r = void 0 === a ? "" : a,
          i = e.hash,
          s = void 0 === i ? "" : i;
        return (
          r && "?" !== r && (n += "?" === r.charAt(0) ? r : "?" + r),
          s && "#" !== s && (n += "#" === s.charAt(0) ? s : "#" + s),
          n
        );
      }
      function z(e) {
        var t = {};
        if (e) {
          var n = e.indexOf("#");
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          var a = e.indexOf("?");
          a >= 0 && ((t.search = e.substr(a)), (e = e.substr(0, a))),
            e && (t.pathname = e);
        }
        return t;
      }
      function C(t, n, a, r) {
        void 0 === r && (r = {});
        var i = r,
          s = i.window,
          o = void 0 === s ? document.defaultView : s,
          l = i.v5Compat,
          c = void 0 !== l && l,
          u = o.history,
          d = e.Pop,
          f = null;
        function m() {
          (d = e.Pop), f && f({ action: d, location: p.location });
        }
        var p = {
          get action() {
            return d;
          },
          get location() {
            return t(o, u);
          },
          listen: function (e) {
            if (f)
              throw new Error("A history only accepts one active listener");
            return (
              o.addEventListener(w, m),
              (f = e),
              function () {
                o.removeEventListener(w, m), (f = null);
              }
            );
          },
          createHref: function (e) {
            return n(o, e);
          },
          push: function (t, n) {
            d = e.Push;
            var r = S(p.location, t, n);
            null == a || a(r, t);
            var i = k(r),
              s = p.createHref(r);
            try {
              u.pushState(i, "", s);
            } catch (l) {
              o.location.assign(s);
            }
            c && f && f({ action: d, location: r });
          },
          replace: function (t, n) {
            d = e.Replace;
            var r = S(p.location, t, n);
            null == a || a(r, t);
            var i = k(r),
              s = p.createHref(r);
            u.replaceState(i, "", s), c && f && f({ action: d, location: r });
          },
          go: function (e) {
            return u.go(e);
          },
        };
        return p;
      }
      function E(e, t, n) {
        void 0 === n && (n = "/");
        var a = L(("string" === typeof t ? z(t) : t).pathname || "/", n);
        if (null == a) return null;
        var r = P(e);
        !(function (e) {
          e.sort(function (e, t) {
            return e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  var n =
                    e.length === t.length &&
                    e.slice(0, -1).every(function (e, n) {
                      return e === t[n];
                    });
                  return n ? e[e.length - 1] - t[t.length - 1] : 0;
                })(
                  e.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  }),
                  t.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  })
                );
          });
        })(r);
        for (var i = null, s = 0; null == i && s < r.length; ++s)
          i = T(r[s], a);
        return i;
      }
      function P(e, t, n, a) {
        return (
          void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === a && (a = ""),
          e.forEach(function (e, r) {
            var i = {
              relativePath: e.path || "",
              caseSensitive: !0 === e.caseSensitive,
              childrenIndex: r,
              route: e,
            };
            i.relativePath.startsWith("/") &&
              (F(
                i.relativePath.startsWith(a),
                'Absolute route path "' +
                  i.relativePath +
                  '" nested under path "' +
                  a +
                  '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
              ),
              (i.relativePath = i.relativePath.slice(a.length)));
            var s = B([a, i.relativePath]),
              o = n.concat(i);
            e.children &&
              e.children.length > 0 &&
              (F(
                !0 !== e.index,
                'Index routes must not have child routes. Please remove all child routes from route path "' +
                  s +
                  '".'
              ),
              P(e.children, t, o, s)),
              (null != e.path || e.index) &&
                t.push({ path: s, score: _(s, e.index), routesMeta: o });
          }),
          t
        );
      }
      !(function (e) {
        (e.data = "data"),
          (e.deferred = "deferred"),
          (e.redirect = "redirect"),
          (e.error = "error");
      })(A || (A = {}));
      var O = /^:\w+$/,
        M = function (e) {
          return "*" === e;
        };
      function _(e, t) {
        var n = e.split("/"),
          a = n.length;
        return (
          n.some(M) && (a += -2),
          t && (a += 2),
          n
            .filter(function (e) {
              return !M(e);
            })
            .reduce(function (e, t) {
              return e + (O.test(t) ? 3 : "" === t ? 1 : 10);
            }, a)
        );
      }
      function T(e, t) {
        for (
          var n = e.routesMeta, a = {}, r = "/", i = [], s = 0;
          s < n.length;
          ++s
        ) {
          var o = n[s],
            l = s === n.length - 1,
            c = "/" === r ? t : t.slice(r.length) || "/",
            u = D(
              { path: o.relativePath, caseSensitive: o.caseSensitive, end: l },
              c
            );
          if (!u) return null;
          Object.assign(a, u.params);
          var d = o.route;
          i.push({
            params: a,
            pathname: B([r, u.pathname]),
            pathnameBase: V(B([r, u.pathnameBase])),
            route: d,
          }),
            "/" !== u.pathnameBase && (r = B([r, u.pathnameBase]));
        }
        return i;
      }
      function D(e, t) {
        "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        var n = (function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            R(
              "*" === e || !e.endsWith("*") || e.endsWith("/*"),
              'Route path "' +
                e +
                '" will be treated as if it were "' +
                e.replace(/\*$/, "/*") +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                e.replace(/\*$/, "/*") +
                '".'
            );
            var a = [],
              r =
                "^" +
                e
                  .replace(/\/*\*?$/, "")
                  .replace(/^\/*/, "/")
                  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
                  .replace(/:(\w+)/g, function (e, t) {
                    return a.push(t), "([^\\/]+)";
                  });
            e.endsWith("*")
              ? (a.push("*"),
                (r += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
              : (r += n ? "\\/*$" : "(?:(?=[@.~-]|%[0-9A-F]{2})|\\b|\\/|$)");
            return [new RegExp(r, t ? void 0 : "i"), a];
          })(e.path, e.caseSensitive, e.end),
          a = o(n, 2),
          r = a[0],
          i = a[1],
          s = t.match(r);
        if (!s) return null;
        var l = s[0],
          c = l.replace(/(.)\/+$/, "$1"),
          u = s.slice(1),
          d = i.reduce(function (e, t, n) {
            if ("*" === t) {
              var a = u[n] || "";
              c = l.slice(0, l.length - a.length).replace(/(.)\/+$/, "$1");
            }
            return (
              (e[t] = (function (e, t) {
                try {
                  return decodeURIComponent(e);
                } catch (n) {
                  return (
                    R(
                      !1,
                      'The value for the URL param "' +
                        t +
                        '" will not be decoded because the string "' +
                        e +
                        '" is a malformed URL segment. This is probably due to a bad percent encoding (' +
                        n +
                        ")."
                    ),
                    e
                  );
                }
              })(u[n] || "", t)),
              e
            );
          }, {});
        return { params: d, pathname: l, pathnameBase: c, pattern: e };
      }
      function L(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        var n = t.endsWith("/") ? t.length - 1 : t.length,
          a = e.charAt(n);
        return a && "/" !== a ? null : e.slice(n) || "/";
      }
      function F(e, t) {
        if (!1 === e || null === e || "undefined" === typeof e)
          throw new Error(t);
      }
      function R(e, t) {
        if (!e) {
          "undefined" !== typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (n) {}
        }
      }
      function I(e, t, n, a) {
        void 0 === a && (a = !1);
        var r,
          i = "string" === typeof e ? z(e) : y({}, e),
          s = "" === e || "" === i.pathname,
          o = s ? "/" : i.pathname;
        if (a || null == o) r = n;
        else {
          var l = t.length - 1;
          if (o.startsWith("..")) {
            for (var c = o.split("/"); ".." === c[0]; ) c.shift(), (l -= 1);
            i.pathname = c.join("/");
          }
          r = l >= 0 ? t[l] : "/";
        }
        var u = (function (e, t) {
            void 0 === t && (t = "/");
            var n = "string" === typeof e ? z(e) : e,
              a = n.pathname,
              r = n.search,
              i = void 0 === r ? "" : r,
              s = n.hash,
              o = void 0 === s ? "" : s,
              l = a
                ? a.startsWith("/")
                  ? a
                  : (function (e, t) {
                      var n = t.replace(/\/+$/, "").split("/");
                      return (
                        e.split("/").forEach(function (e) {
                          ".." === e
                            ? n.length > 1 && n.pop()
                            : "." !== e && n.push(e);
                        }),
                        n.length > 1 ? n.join("/") : "/"
                      );
                    })(a, t)
                : t;
            return { pathname: l, search: U(i), hash: H(o) };
          })(i, r),
          d = o && "/" !== o && o.endsWith("/"),
          f = (s || "." === o) && n.endsWith("/");
        return u.pathname.endsWith("/") || (!d && !f) || (u.pathname += "/"), u;
      }
      var B = function (e) {
          return e.join("/").replace(/\/\/+/g, "/");
        },
        V = function (e) {
          return e.replace(/\/+$/, "").replace(/^\/*/, "/");
        },
        U = function (e) {
          return e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : "";
        },
        H = function (e) {
          return e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "";
        },
        q = (function (e) {
          m(n, e);
          var t = b(n);
          function n() {
            return c(this, n), t.apply(this, arguments);
          }
          return d(n);
        })(j(Error));
      var W = d(function e(t, n, a) {
        c(this, e),
          (this.status = t),
          (this.statusText = n || ""),
          (this.data = a);
      });
      function Y(e) {
        return e instanceof W;
      }
      function Q() {
        return (
          (Q = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var a in n)
                    Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                }
                return e;
              }),
          Q.apply(this, arguments)
        );
      }
      var G =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              },
        X = t.useState,
        $ = t.useEffect,
        K = t.useLayoutEffect,
        Z = t.useDebugValue;
      function J(e) {
        var t = e.getSnapshot,
          n = e.value;
        try {
          var a = t();
          return !G(n, a);
        } catch (r) {
          return !0;
        }
      }
      "undefined" === typeof window ||
        "undefined" === typeof window.document ||
        window.document.createElement,
        a.useSyncExternalStore;
      var ee = t.createContext(null);
      var te = t.createContext(null);
      var ne = t.createContext(null);
      var ae = t.createContext(null);
      var re = t.createContext(null);
      var ie = t.createContext(null);
      var se = t.createContext({ outlet: null, matches: [] });
      var oe = t.createContext(null);
      function le() {
        return null != t.useContext(ie);
      }
      function ce() {
        return le() || F(!1), t.useContext(ie).location;
      }
      function ue(e) {
        return e.filter(function (t, n) {
          return (
            0 === n ||
            (!t.route.index && t.pathnameBase !== e[n - 1].pathnameBase)
          );
        });
      }
      function de() {
        le() || F(!1);
        var e = t.useContext(re),
          n = e.basename,
          a = e.navigator,
          r = t.useContext(se).matches,
          i = ce().pathname,
          s = JSON.stringify(
            ue(r).map(function (e) {
              return e.pathnameBase;
            })
          ),
          o = t.useRef(!1);
        return (
          t.useEffect(function () {
            o.current = !0;
          }),
          t.useCallback(
            function (e, t) {
              if ((void 0 === t && (t = {}), o.current))
                if ("number" !== typeof e) {
                  var r = I(e, JSON.parse(s), i, "path" === t.relative);
                  "/" !== n &&
                    (r.pathname = "/" === r.pathname ? n : B([n, r.pathname])),
                    (t.replace ? a.replace : a.push)(r, t.state, t);
                } else a.go(e);
            },
            [n, a, s, i]
          )
        );
      }
      var fe = t.createContext(null);
      function me(e, n) {
        var a = (void 0 === n ? {} : n).relative,
          r = t.useContext(se).matches,
          i = ce().pathname,
          s = JSON.stringify(
            ue(r).map(function (e) {
              return e.pathnameBase;
            })
          );
        return t.useMemo(
          function () {
            return I(e, JSON.parse(s), i, "path" === a);
          },
          [e, s, i, a]
        );
      }
      function pe() {
        var e = (function () {
            var e,
              n = t.useContext(oe),
              a = xe(he.UseRouteError),
              r = t.useContext(se),
              i = r.matches[r.matches.length - 1];
            if (n) return n;
            return (
              r || F(!1),
              !i.route.id && F(!1),
              null == (e = a.errors) ? void 0 : e[i.route.id]
            );
          })(),
          n = Y(e)
            ? e.status + " " + e.statusText
            : e instanceof Error
            ? e.message
            : JSON.stringify(e),
          a = e instanceof Error ? e.stack : null,
          r = "rgba(200,200,200, 0.5)",
          i = { padding: "0.5rem", backgroundColor: r },
          s = { padding: "2px 4px", backgroundColor: r };
        return t.createElement(
          t.Fragment,
          null,
          t.createElement("h2", null, "Unhandled Thrown Error!"),
          t.createElement("h3", { style: { fontStyle: "italic" } }, n),
          a ? t.createElement("pre", { style: i }, a) : null,
          t.createElement("p", null, "\ud83d\udcbf Hey developer \ud83d\udc4b"),
          t.createElement(
            "p",
            null,
            "You can provide a way better UX than this when your app throws errors by providing your own\xa0",
            t.createElement("code", { style: s }, "errorElement"),
            " props on\xa0",
            t.createElement("code", { style: s }, "<Route>")
          )
        );
      }
      var he,
        ge = (function (e) {
          m(a, e);
          var n = b(a);
          function a(e) {
            var t;
            return (
              c(this, a),
              ((t = n.call(this, e)).state = {
                location: e.location,
                error: e.error,
              }),
              t
            );
          }
          return (
            d(
              a,
              [
                {
                  key: "componentDidCatch",
                  value: function (e, t) {
                    console.error(
                      "React Router caught the following error during render",
                      e,
                      t
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return this.state.error
                      ? t.createElement(oe.Provider, {
                          value: this.state.error,
                          children: this.props.component,
                        })
                      : this.props.children;
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromError",
                  value: function (e) {
                    return { error: e };
                  },
                },
                {
                  key: "getDerivedStateFromProps",
                  value: function (e, t) {
                    return t.location !== e.location
                      ? { error: e.error, location: e.location }
                      : { error: e.error || t.error, location: t.location };
                  },
                },
              ]
            ),
            a
          );
        })(t.Component);
      function ve(e) {
        var n = e.routeContext,
          a = e.match,
          r = e.children,
          i = t.useContext(ee);
        return (
          i &&
            a.route.errorElement &&
            (i._deepestRenderedBoundaryId = a.route.id),
          t.createElement(se.Provider, { value: n }, r)
        );
      }
      function be(e, n, a) {
        if ((void 0 === n && (n = []), null == e)) {
          if (null == a || !a.errors) return null;
          e = a.matches;
        }
        var r = e,
          i = null == a ? void 0 : a.errors;
        if (null != i) {
          var s = r.findIndex(function (e) {
            return e.route.id && (null == i ? void 0 : i[e.route.id]);
          });
          s >= 0 || F(!1), (r = r.slice(0, Math.min(r.length, s + 1)));
        }
        return r.reduceRight(function (e, s, o) {
          var l = s.route.id ? (null == i ? void 0 : i[s.route.id]) : null,
            c = a ? s.route.errorElement || t.createElement(pe, null) : null,
            u = function () {
              return t.createElement(
                ve,
                {
                  match: s,
                  routeContext: {
                    outlet: e,
                    matches: n.concat(r.slice(0, o + 1)),
                  },
                },
                l ? c : void 0 !== s.route.element ? s.route.element : e
              );
            };
          return a && (s.route.errorElement || 0 === o)
            ? t.createElement(ge, {
                location: a.location,
                component: c,
                error: l,
                children: u(),
              })
            : u();
        }, null);
      }
      function xe(e) {
        var n = t.useContext(ne);
        return n || F(!1), n;
      }
      !(function (e) {
        (e.UseLoaderData = "useLoaderData"),
          (e.UseActionData = "useActionData"),
          (e.UseRouteError = "useRouteError"),
          (e.UseNavigation = "useNavigation"),
          (e.UseRouteLoaderData = "useRouteLoaderData"),
          (e.UseMatches = "useMatches"),
          (e.UseRevalidator = "useRevalidator");
      })(he || (he = {}));
      var je;
      function ye(e) {
        return (function (e) {
          var n = t.useContext(se).outlet;
          return n ? t.createElement(fe.Provider, { value: e }, n) : n;
        })(e.context);
      }
      function Ae(e) {
        F(!1);
      }
      function we(n) {
        var a = n.basename,
          r = void 0 === a ? "/" : a,
          i = n.children,
          s = void 0 === i ? null : i,
          o = n.location,
          l = n.navigationType,
          c = void 0 === l ? e.Pop : l,
          u = n.navigator,
          d = n.static,
          f = void 0 !== d && d;
        le() && F(!1);
        var m = r.replace(/^\/*/, "/"),
          p = t.useMemo(
            function () {
              return { basename: m, navigator: u, static: f };
            },
            [m, u, f]
          );
        "string" === typeof o && (o = z(o));
        var h = o,
          g = h.pathname,
          v = void 0 === g ? "/" : g,
          b = h.search,
          x = void 0 === b ? "" : b,
          j = h.hash,
          y = void 0 === j ? "" : j,
          A = h.state,
          w = void 0 === A ? null : A,
          k = h.key,
          S = void 0 === k ? "default" : k,
          N = t.useMemo(
            function () {
              var e = L(v, m);
              return null == e
                ? null
                : { pathname: e, search: x, hash: y, state: w, key: S };
            },
            [m, v, x, y, w, S]
          );
        return null == N
          ? null
          : t.createElement(
              re.Provider,
              { value: p },
              t.createElement(ie.Provider, {
                children: s,
                value: { location: N, navigationType: c },
              })
            );
      }
      function ke(n) {
        var a = n.children,
          r = n.location,
          i = t.useContext(te);
        return (function (n, a) {
          le() || F(!1);
          var r,
            i = t.useContext(ne),
            s = t.useContext(se).matches,
            o = s[s.length - 1],
            l = o ? o.params : {},
            c = (o && o.pathname, o ? o.pathnameBase : "/"),
            u = (o && o.route, ce());
          if (a) {
            var d,
              f = "string" === typeof a ? z(a) : a;
            "/" === c ||
              (null == (d = f.pathname) ? void 0 : d.startsWith(c)) ||
              F(!1),
              (r = f);
          } else r = u;
          var m = r.pathname || "/",
            p = E(n, { pathname: "/" === c ? m : m.slice(c.length) || "/" }),
            h = be(
              p &&
                p.map(function (e) {
                  return Object.assign({}, e, {
                    params: Object.assign({}, l, e.params),
                    pathname: B([c, e.pathname]),
                    pathnameBase:
                      "/" === e.pathnameBase ? c : B([c, e.pathnameBase]),
                  });
                }),
              s,
              i || void 0
            );
          return a
            ? t.createElement(
                ie.Provider,
                {
                  value: {
                    location: Q(
                      {
                        pathname: "/",
                        search: "",
                        hash: "",
                        state: null,
                        key: "default",
                      },
                      r
                    ),
                    navigationType: e.Pop,
                  },
                },
                h
              )
            : h;
        })(i && !a ? i.router.routes : Ne(a), r);
      }
      !(function (e) {
        (e[(e.pending = 0)] = "pending"),
          (e[(e.success = 1)] = "success"),
          (e[(e.error = 2)] = "error");
      })(je || (je = {}));
      var Se = new Promise(function () {});
      t.Component;
      function Ne(e, n) {
        void 0 === n && (n = []);
        var a = [];
        return (
          t.Children.forEach(e, function (e, r) {
            if (t.isValidElement(e))
              if (e.type !== t.Fragment) {
                e.type !== Ae && F(!1);
                var i = [].concat(l(n), [r]),
                  s = {
                    id: e.props.id || i.join("-"),
                    caseSensitive: e.props.caseSensitive,
                    element: e.props.element,
                    index: e.props.index,
                    path: e.props.path,
                    loader: e.props.loader,
                    action: e.props.action,
                    errorElement: e.props.errorElement,
                    hasErrorBoundary: null != e.props.errorElement,
                    shouldRevalidate: e.props.shouldRevalidate,
                    handle: e.props.handle,
                  };
                e.props.children && (s.children = Ne(e.props.children, i)),
                  a.push(s);
              } else a.push.apply(a, Ne(e.props.children, n));
          }),
          a
        );
      }
      function ze() {
        return (
          (ze = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var a in n)
                    Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                }
                return e;
              }),
          ze.apply(this, arguments)
        );
      }
      function Ce(e, t) {
        if (null == e) return {};
        var n,
          a,
          r = {},
          i = Object.keys(e);
        for (a = 0; a < i.length; a++)
          (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
        return r;
      }
      var Ee = [
          "onClick",
          "relative",
          "reloadDocument",
          "replace",
          "state",
          "target",
          "to",
          "preventScrollReset",
        ],
        Pe = [
          "aria-current",
          "caseSensitive",
          "className",
          "end",
          "style",
          "to",
          "children",
        ];
      function Oe(e) {
        var n,
          a = e.basename,
          r = e.children,
          i = e.window,
          s = t.useRef();
        null == s.current &&
          (s.current =
            (void 0 === (n = { window: i, v5Compat: !0 }) && (n = {}),
            C(
              function (e, t) {
                var n,
                  a,
                  r = e.location;
                return S(
                  "",
                  { pathname: r.pathname, search: r.search, hash: r.hash },
                  (null == (n = t.state) ? void 0 : n.usr) || null,
                  (null == (a = t.state) ? void 0 : a.key) || "default"
                );
              },
              function (e, t) {
                return "string" === typeof t ? t : N(t);
              },
              null,
              n
            )));
        var l = s.current,
          c = o(t.useState({ action: l.action, location: l.location }), 2),
          u = c[0],
          d = c[1];
        return (
          t.useLayoutEffect(
            function () {
              return l.listen(d);
            },
            [l]
          ),
          t.createElement(we, {
            basename: a,
            children: r,
            location: u.location,
            navigationType: u.action,
            navigator: l,
          })
        );
      }
      var Me = t.forwardRef(function (e, n) {
        var a = e.onClick,
          r = e.relative,
          i = e.reloadDocument,
          s = e.replace,
          o = e.state,
          l = e.target,
          c = e.to,
          u = e.preventScrollReset,
          d = Ce(e, Ee),
          f = (function (e, n) {
            var a = (void 0 === n ? {} : n).relative;
            le() || F(!1);
            var r = t.useContext(re),
              i = r.basename,
              s = r.navigator,
              o = me(e, { relative: a }),
              l = o.hash,
              c = o.pathname,
              u = o.search,
              d = c;
            return (
              "/" !== i && (d = "/" === c ? i : B([i, c])),
              s.createHref({ pathname: d, search: u, hash: l })
            );
          })(c, { relative: r }),
          m = (function (e, n) {
            var a = void 0 === n ? {} : n,
              r = a.target,
              i = a.replace,
              s = a.state,
              o = a.preventScrollReset,
              l = a.relative,
              c = de(),
              u = ce(),
              d = me(e, { relative: l });
            return t.useCallback(
              function (t) {
                if (
                  (function (e, t) {
                    return (
                      0 === e.button &&
                      (!t || "_self" === t) &&
                      !(function (e) {
                        return !!(
                          e.metaKey ||
                          e.altKey ||
                          e.ctrlKey ||
                          e.shiftKey
                        );
                      })(e)
                    );
                  })(t, r)
                ) {
                  t.preventDefault();
                  var n = void 0 !== i ? i : N(u) === N(d);
                  c(e, {
                    replace: n,
                    state: s,
                    preventScrollReset: o,
                    relative: l,
                  });
                }
              },
              [u, c, d, i, s, r, e, o, l]
            );
          })(c, {
            replace: s,
            state: o,
            target: l,
            preventScrollReset: u,
            relative: r,
          });
        return t.createElement(
          "a",
          ze({}, d, {
            href: f,
            onClick: i
              ? a
              : function (e) {
                  a && a(e), e.defaultPrevented || m(e);
                },
            ref: n,
            target: l,
          })
        );
      });
      var _e = t.forwardRef(function (e, n) {
        var a,
          r = e["aria-current"],
          i = void 0 === r ? "page" : r,
          s = e.caseSensitive,
          o = void 0 !== s && s,
          l = e.className,
          c = void 0 === l ? "" : l,
          u = e.end,
          d = void 0 !== u && u,
          f = e.style,
          m = e.to,
          p = e.children,
          h = Ce(e, Pe),
          g = me(m),
          v = (function (e) {
            le() || F(!1);
            var n = ce().pathname;
            return t.useMemo(
              function () {
                return D(e, n);
              },
              [n, e]
            );
          })({ path: g.pathname, end: d, caseSensitive: o }),
          b = t.useContext(ne),
          x = null == b ? void 0 : b.navigation.location,
          j = me(x || ""),
          y =
            null !=
            t.useMemo(
              function () {
                return x
                  ? D(
                      { path: g.pathname, end: d, caseSensitive: o },
                      j.pathname
                    )
                  : null;
              },
              [x, g.pathname, o, d, j.pathname]
            ),
          A = null != v,
          w = A ? i : void 0;
        a =
          "function" === typeof c
            ? c({ isActive: A, isPending: y })
            : [c, A ? "active" : null, y ? "pending" : null]
                .filter(Boolean)
                .join(" ");
        var k = "function" === typeof f ? f({ isActive: A, isPending: y }) : f;
        return t.createElement(
          Me,
          ze({}, h, {
            "aria-current": w,
            className: a,
            ref: n,
            style: k,
            to: m,
          }),
          "function" === typeof p ? p({ isActive: A, isPending: y }) : p
        );
      });
      var Te = n(184);
      var De = function (e) {
        var t = e.href,
          n = void 0 === t ? "/" : t,
          a = e.children,
          r = void 0 === a ? "Link" : a,
          i = e.padding,
          s = void 0 === i ? "10px" : i,
          o = e.highlight,
          l = void 0 !== o && o;
        return (0, Te.jsx)(_e, {
          to: n,
          style: { paddingLeft: s, paddingRight: s },
          className: l
            ? "navigation-link flex highlight"
            : "navigation-link flex",
          children: r,
        });
      };
      var Le = function (e) {
        var t = e.title,
          n = void 0 === t ? "" : t,
          a = e.icon,
          r = e.href,
          i = void 0 === r ? "/" : r,
          s = e.top,
          o = void 0 === s ? 0 : s,
          l = e.children;
        return (0, Te.jsx)("li", {
          className: n,
          children: (0, Te.jsxs)(Me, {
            to: i,
            className: "flex row",
            children: [
              (0, Te.jsxs)("div", {
                className: "title",
                children: [
                  (0, Te.jsx)("span", {
                    className: "icon-container",
                    children: a,
                  }),
                  n,
                ],
              }),
              "undefined" != typeof l
                ? (0, Te.jsx)("div", {
                    className: "guillets",
                    children: "\xbb",
                  })
                : (0, Te.jsx)(Te.Fragment, {}),
              "undefined" != typeof l
                ? (0, Te.jsx)("div", {
                    className: "list",
                    style: { top: "".concat(o, "px") },
                    children: (0, Te.jsxs)("ul", {
                      className: "list-container",
                      children: [
                        (0, Te.jsx)("br", {}),
                        l,
                        (0, Te.jsx)("br", {}),
                      ],
                    }),
                  })
                : (0, Te.jsx)(Te.Fragment, {}),
            ],
          }),
        });
      };
      function Fe(e) {
        var t = e.title,
          n = void 0 === t ? "" : t,
          a = e.icon,
          r = e.href,
          i = void 0 === r ? "/" : r,
          s = e.top,
          o = void 0 === s ? 0 : s,
          l = e.children;
        return (0, Te.jsx)("li", {
          className: n,
          children: (0, Te.jsxs)("a", {
            href: i,
            className: "flex row",
            children: [
              (0, Te.jsxs)("div", {
                className: "title",
                children: [
                  (0, Te.jsx)("span", {
                    className: "icon-container",
                    children: a,
                  }),
                  n,
                ],
              }),
              "undefined" != typeof l
                ? (0, Te.jsx)("div", {
                    className: "guillets",
                    children: "\xbb",
                  })
                : (0, Te.jsx)(Te.Fragment, {}),
              "undefined" != typeof l
                ? (0, Te.jsx)("div", {
                    className: "list",
                    style: { top: "".concat(o, "px") },
                    children: (0, Te.jsxs)("ul", {
                      className: "list-container",
                      children: [
                        (0, Te.jsx)("br", {}),
                        l,
                        (0, Te.jsx)("br", {}),
                      ],
                    }),
                  })
                : (0, Te.jsx)(Te.Fragment, {}),
            ],
          }),
        });
      }
      function Re(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function Ie(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Re(Object(n), !0).forEach(function (t) {
                Ue(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Re(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function Be(e) {
        return (
          (Be =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          Be(e)
        );
      }
      function Ve(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            "value" in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a);
        }
      }
      function Ue(e, t, n) {
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
      function He(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null == n) return;
            var a,
              r,
              i = [],
              s = !0,
              o = !1;
            try {
              for (
                n = n.call(e);
                !(s = (a = n.next()).done) &&
                (i.push(a.value), !t || i.length !== t);
                s = !0
              );
            } catch (l) {
              (o = !0), (r = l);
            } finally {
              try {
                s || null == n.return || n.return();
              } finally {
                if (o) throw r;
              }
            }
            return i;
          })(e, t) ||
          We(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function qe(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return Ye(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          We(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function We(e, t) {
        if (e) {
          if ("string" === typeof e) return Ye(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? Ye(e, t)
              : void 0
          );
        }
      }
      function Ye(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
        return a;
      }
      var Qe = function () {},
        Ge = {},
        Xe = {},
        $e = null,
        Ke = { mark: Qe, measure: Qe };
      try {
        "undefined" !== typeof window && (Ge = window),
          "undefined" !== typeof document && (Xe = document),
          "undefined" !== typeof MutationObserver && ($e = MutationObserver),
          "undefined" !== typeof performance && (Ke = performance);
      } catch (Wd) {}
      var Ze,
        Je,
        et,
        tt,
        nt,
        at = (Ge.navigator || {}).userAgent,
        rt = void 0 === at ? "" : at,
        it = Ge,
        st = Xe,
        ot = $e,
        lt = Ke,
        ct =
          (it.document,
          !!st.documentElement &&
            !!st.head &&
            "function" === typeof st.addEventListener &&
            "function" === typeof st.createElement),
        ut = ~rt.indexOf("MSIE") || ~rt.indexOf("Trident/"),
        dt = "svg-inline--fa",
        ft = "data-fa-i2svg",
        mt = "data-fa-pseudo-element",
        pt = "data-prefix",
        ht = "data-icon",
        gt = "fontawesome-i2svg",
        vt = ["HTML", "HEAD", "STYLE", "SCRIPT"],
        bt = (function () {
          try {
            return !0;
          } catch (Wd) {
            return !1;
          }
        })(),
        xt = "classic",
        jt = "sharp",
        yt = [xt, jt];
      function At(e) {
        return new Proxy(e, {
          get: function (e, t) {
            return t in e ? e[t] : e.classic;
          },
        });
      }
      var wt = At(
          (Ue((Ze = {}), xt, {
            fa: "solid",
            fas: "solid",
            "fa-solid": "solid",
            far: "regular",
            "fa-regular": "regular",
            fal: "light",
            "fa-light": "light",
            fat: "thin",
            "fa-thin": "thin",
            fad: "duotone",
            "fa-duotone": "duotone",
            fab: "brands",
            "fa-brands": "brands",
            fak: "kit",
            "fa-kit": "kit",
          }),
          Ue(Ze, jt, { fa: "solid", fass: "solid", "fa-solid": "solid" }),
          Ze)
        ),
        kt = At(
          (Ue((Je = {}), xt, {
            solid: "fas",
            regular: "far",
            light: "fal",
            thin: "fat",
            duotone: "fad",
            brands: "fab",
            kit: "fak",
          }),
          Ue(Je, jt, { solid: "fass" }),
          Je)
        ),
        St = At(
          (Ue((et = {}), xt, {
            fab: "fa-brands",
            fad: "fa-duotone",
            fak: "fa-kit",
            fal: "fa-light",
            far: "fa-regular",
            fas: "fa-solid",
            fat: "fa-thin",
          }),
          Ue(et, jt, { fass: "fa-solid" }),
          et)
        ),
        Nt = At(
          (Ue((tt = {}), xt, {
            "fa-brands": "fab",
            "fa-duotone": "fad",
            "fa-kit": "fak",
            "fa-light": "fal",
            "fa-regular": "far",
            "fa-solid": "fas",
            "fa-thin": "fat",
          }),
          Ue(tt, jt, { "fa-solid": "fass" }),
          tt)
        ),
        zt = /fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,
        Ct = "fa-layers-text",
        Et =
          /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,
        Pt = At(
          (Ue((nt = {}), xt, {
            900: "fas",
            400: "far",
            normal: "far",
            300: "fal",
            100: "fat",
          }),
          Ue(nt, jt, { 900: "fass" }),
          nt)
        ),
        Ot = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        Mt = Ot.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
        _t = [
          "class",
          "data-prefix",
          "data-icon",
          "data-fa-transform",
          "data-fa-mask",
        ],
        Tt = "duotone-group",
        Dt = "swap-opacity",
        Lt = "primary",
        Ft = "secondary",
        Rt = new Set();
      Object.keys(kt.classic).map(Rt.add.bind(Rt)),
        Object.keys(kt.sharp).map(Rt.add.bind(Rt));
      var It = []
          .concat(yt, qe(Rt), [
            "2xs",
            "xs",
            "sm",
            "lg",
            "xl",
            "2xl",
            "beat",
            "border",
            "fade",
            "beat-fade",
            "bounce",
            "flip-both",
            "flip-horizontal",
            "flip-vertical",
            "flip",
            "fw",
            "inverse",
            "layers-counter",
            "layers-text",
            "layers",
            "li",
            "pull-left",
            "pull-right",
            "pulse",
            "rotate-180",
            "rotate-270",
            "rotate-90",
            "rotate-by",
            "shake",
            "spin-pulse",
            "spin-reverse",
            "spin",
            "stack-1x",
            "stack-2x",
            "stack",
            "ul",
            Tt,
            Dt,
            Lt,
            Ft,
          ])
          .concat(
            Ot.map(function (e) {
              return "".concat(e, "x");
            })
          )
          .concat(
            Mt.map(function (e) {
              return "w-".concat(e);
            })
          ),
        Bt = it.FontAwesomeConfig || {};
      if (st && "function" === typeof st.querySelector) {
        [
          ["data-family-prefix", "familyPrefix"],
          ["data-css-prefix", "cssPrefix"],
          ["data-family-default", "familyDefault"],
          ["data-style-default", "styleDefault"],
          ["data-replacement-class", "replacementClass"],
          ["data-auto-replace-svg", "autoReplaceSvg"],
          ["data-auto-add-css", "autoAddCss"],
          ["data-auto-a11y", "autoA11y"],
          ["data-search-pseudo-elements", "searchPseudoElements"],
          ["data-observe-mutations", "observeMutations"],
          ["data-mutate-approach", "mutateApproach"],
          ["data-keep-original-source", "keepOriginalSource"],
          ["data-measure-performance", "measurePerformance"],
          ["data-show-missing-icons", "showMissingIcons"],
        ].forEach(function (e) {
          var t = He(e, 2),
            n = t[0],
            a = t[1],
            r = (function (e) {
              return "" === e || ("false" !== e && ("true" === e || e));
            })(
              (function (e) {
                var t = st.querySelector("script[" + e + "]");
                if (t) return t.getAttribute(e);
              })(n)
            );
          void 0 !== r && null !== r && (Bt[a] = r);
        });
      }
      var Vt = {
        styleDefault: "solid",
        familyDefault: "classic",
        cssPrefix: "fa",
        replacementClass: dt,
        autoReplaceSvg: !0,
        autoAddCss: !0,
        autoA11y: !0,
        searchPseudoElements: !1,
        observeMutations: !0,
        mutateApproach: "async",
        keepOriginalSource: !0,
        measurePerformance: !1,
        showMissingIcons: !0,
      };
      Bt.familyPrefix && (Bt.cssPrefix = Bt.familyPrefix);
      var Ut = Ie(Ie({}, Vt), Bt);
      Ut.autoReplaceSvg || (Ut.observeMutations = !1);
      var Ht = {};
      Object.keys(Vt).forEach(function (e) {
        Object.defineProperty(Ht, e, {
          enumerable: !0,
          set: function (t) {
            (Ut[e] = t),
              qt.forEach(function (e) {
                return e(Ht);
              });
          },
          get: function () {
            return Ut[e];
          },
        });
      }),
        Object.defineProperty(Ht, "familyPrefix", {
          enumerable: !0,
          set: function (e) {
            (Ut.cssPrefix = e),
              qt.forEach(function (e) {
                return e(Ht);
              });
          },
          get: function () {
            return Ut.cssPrefix;
          },
        }),
        (it.FontAwesomeConfig = Ht);
      var qt = [];
      var Wt = 16,
        Yt = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
      function Qt() {
        for (var e = 12, t = ""; e-- > 0; )
          t += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[
            (62 * Math.random()) | 0
          ];
        return t;
      }
      function Gt(e) {
        for (var t = [], n = (e || []).length >>> 0; n--; ) t[n] = e[n];
        return t;
      }
      function Xt(e) {
        return e.classList
          ? Gt(e.classList)
          : (e.getAttribute("class") || "").split(" ").filter(function (e) {
              return e;
            });
      }
      function $t(e) {
        return ""
          .concat(e)
          .replace(/&/g, "&amp;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#39;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
      }
      function Kt(e) {
        return Object.keys(e || {}).reduce(function (t, n) {
          return t + "".concat(n, ": ").concat(e[n].trim(), ";");
        }, "");
      }
      function Zt(e) {
        return (
          e.size !== Yt.size ||
          e.x !== Yt.x ||
          e.y !== Yt.y ||
          e.rotate !== Yt.rotate ||
          e.flipX ||
          e.flipY
        );
      }
      function Jt() {
        var e = "fa",
          t = dt,
          n = Ht.cssPrefix,
          a = Ht.replacementClass,
          r =
            ':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    transition-delay: 0s;\n    transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\n          transform: rotate(var(--fa-rotate-angle, none));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}';
        if (n !== e || a !== t) {
          var i = new RegExp("\\.".concat(e, "\\-"), "g"),
            s = new RegExp("\\--".concat(e, "\\-"), "g"),
            o = new RegExp("\\.".concat(t), "g");
          r = r
            .replace(i, ".".concat(n, "-"))
            .replace(s, "--".concat(n, "-"))
            .replace(o, ".".concat(a));
        }
        return r;
      }
      var en = !1;
      function tn() {
        Ht.autoAddCss &&
          !en &&
          (!(function (e) {
            if (e && ct) {
              var t = st.createElement("style");
              t.setAttribute("type", "text/css"), (t.innerHTML = e);
              for (
                var n = st.head.childNodes, a = null, r = n.length - 1;
                r > -1;
                r--
              ) {
                var i = n[r],
                  s = (i.tagName || "").toUpperCase();
                ["STYLE", "LINK"].indexOf(s) > -1 && (a = i);
              }
              st.head.insertBefore(t, a);
            }
          })(Jt()),
          (en = !0));
      }
      var nn = {
          mixout: function () {
            return { dom: { css: Jt, insertCss: tn } };
          },
          hooks: function () {
            return {
              beforeDOMElementCreation: function () {
                tn();
              },
              beforeI2svg: function () {
                tn();
              },
            };
          },
        },
        an = it || {};
      an.___FONT_AWESOME___ || (an.___FONT_AWESOME___ = {}),
        an.___FONT_AWESOME___.styles || (an.___FONT_AWESOME___.styles = {}),
        an.___FONT_AWESOME___.hooks || (an.___FONT_AWESOME___.hooks = {}),
        an.___FONT_AWESOME___.shims || (an.___FONT_AWESOME___.shims = []);
      var rn = an.___FONT_AWESOME___,
        sn = [],
        on = !1;
      function ln(e) {
        ct && (on ? setTimeout(e, 0) : sn.push(e));
      }
      function cn(e) {
        var t = e.tag,
          n = e.attributes,
          a = void 0 === n ? {} : n,
          r = e.children,
          i = void 0 === r ? [] : r;
        return "string" === typeof e
          ? $t(e)
          : "<"
              .concat(t, " ")
              .concat(
                (function (e) {
                  return Object.keys(e || {})
                    .reduce(function (t, n) {
                      return t + "".concat(n, '="').concat($t(e[n]), '" ');
                    }, "")
                    .trim();
                })(a),
                ">"
              )
              .concat(i.map(cn).join(""), "</")
              .concat(t, ">");
      }
      function un(e, t, n) {
        if (e && e[t] && e[t][n])
          return { prefix: t, iconName: n, icon: e[t][n] };
      }
      ct &&
        ((on = (
          st.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/
        ).test(st.readyState)) ||
          st.addEventListener("DOMContentLoaded", function e() {
            st.removeEventListener("DOMContentLoaded", e),
              (on = 1),
              sn.map(function (e) {
                return e();
              });
          }));
      var dn = function (e, t, n, a) {
        var r,
          i,
          s,
          o = Object.keys(e),
          l = o.length,
          c =
            void 0 !== a
              ? (function (e, t) {
                  return function (n, a, r, i) {
                    return e.call(t, n, a, r, i);
                  };
                })(t, a)
              : t;
        for (
          void 0 === n ? ((r = 1), (s = e[o[0]])) : ((r = 0), (s = n));
          r < l;
          r++
        )
          s = c(s, e[(i = o[r])], i, e);
        return s;
      };
      function fn(e) {
        var t = (function (e) {
          for (var t = [], n = 0, a = e.length; n < a; ) {
            var r = e.charCodeAt(n++);
            if (r >= 55296 && r <= 56319 && n < a) {
              var i = e.charCodeAt(n++);
              56320 == (64512 & i)
                ? t.push(((1023 & r) << 10) + (1023 & i) + 65536)
                : (t.push(r), n--);
            } else t.push(r);
          }
          return t;
        })(e);
        return 1 === t.length ? t[0].toString(16) : null;
      }
      function mn(e) {
        return Object.keys(e).reduce(function (t, n) {
          var a = e[n];
          return !!a.icon ? (t[a.iconName] = a.icon) : (t[n] = a), t;
        }, {});
      }
      function pn(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          a = n.skipHooks,
          r = void 0 !== a && a,
          i = mn(t);
        "function" !== typeof rn.hooks.addPack || r
          ? (rn.styles[e] = Ie(Ie({}, rn.styles[e] || {}), i))
          : rn.hooks.addPack(e, mn(t)),
          "fas" === e && pn("fa", t);
      }
      var hn,
        gn,
        vn,
        bn = rn.styles,
        xn = rn.shims,
        jn =
          (Ue((hn = {}), xt, Object.values(St.classic)),
          Ue(hn, jt, Object.values(St.sharp)),
          hn),
        yn = null,
        An = {},
        wn = {},
        kn = {},
        Sn = {},
        Nn = {},
        zn =
          (Ue((gn = {}), xt, Object.keys(wt.classic)),
          Ue(gn, jt, Object.keys(wt.sharp)),
          gn);
      function Cn(e, t) {
        var n,
          a = t.split("-"),
          r = a[0],
          i = a.slice(1).join("-");
        return r !== e || "" === i || ((n = i), ~It.indexOf(n)) ? null : i;
      }
      var En,
        Pn = function () {
          var e = function (e) {
            return dn(
              bn,
              function (t, n, a) {
                return (t[a] = dn(n, e, {})), t;
              },
              {}
            );
          };
          (An = e(function (e, t, n) {
            (t[3] && (e[t[3]] = n), t[2]) &&
              t[2]
                .filter(function (e) {
                  return "number" === typeof e;
                })
                .forEach(function (t) {
                  e[t.toString(16)] = n;
                });
            return e;
          })),
            (wn = e(function (e, t, n) {
              ((e[n] = n), t[2]) &&
                t[2]
                  .filter(function (e) {
                    return "string" === typeof e;
                  })
                  .forEach(function (t) {
                    e[t] = n;
                  });
              return e;
            })),
            (Nn = e(function (e, t, n) {
              var a = t[2];
              return (
                (e[n] = n),
                a.forEach(function (t) {
                  e[t] = n;
                }),
                e
              );
            }));
          var t = "far" in bn || Ht.autoFetchSvg,
            n = dn(
              xn,
              function (e, n) {
                var a = n[0],
                  r = n[1],
                  i = n[2];
                return (
                  "far" !== r || t || (r = "fas"),
                  "string" === typeof a &&
                    (e.names[a] = { prefix: r, iconName: i }),
                  "number" === typeof a &&
                    (e.unicodes[a.toString(16)] = { prefix: r, iconName: i }),
                  e
                );
              },
              { names: {}, unicodes: {} }
            );
          (kn = n.names),
            (Sn = n.unicodes),
            (yn = Dn(Ht.styleDefault, { family: Ht.familyDefault }));
        };
      function On(e, t) {
        return (An[e] || {})[t];
      }
      function Mn(e, t) {
        return (Nn[e] || {})[t];
      }
      function _n(e) {
        return kn[e] || { prefix: null, iconName: null };
      }
      function Tn() {
        return yn;
      }
      (En = function (e) {
        yn = Dn(e.styleDefault, { family: Ht.familyDefault });
      }),
        qt.push(En),
        Pn();
      function Dn(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = t.family,
          a = void 0 === n ? xt : n,
          r = wt[a][e],
          i = kt[a][e] || kt[a][r],
          s = e in rn.styles ? e : null;
        return i || s || null;
      }
      var Ln =
        (Ue((vn = {}), xt, Object.keys(St.classic)),
        Ue(vn, jt, Object.keys(St.sharp)),
        vn);
      function Fn(e) {
        var t,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          a = n.skipLookups,
          r = void 0 !== a && a,
          i =
            (Ue((t = {}), xt, "".concat(Ht.cssPrefix, "-").concat(xt)),
            Ue(t, jt, "".concat(Ht.cssPrefix, "-").concat(jt)),
            t),
          s = null,
          o = xt;
        (e.includes(i.classic) ||
          e.some(function (e) {
            return Ln.classic.includes(e);
          })) &&
          (o = xt),
          (e.includes(i.sharp) ||
            e.some(function (e) {
              return Ln.sharp.includes(e);
            })) &&
            (o = jt);
        var l = e.reduce(
          function (e, t) {
            var n = Cn(Ht.cssPrefix, t);
            if (
              (bn[t]
                ? ((t = jn[o].includes(t) ? Nt[o][t] : t),
                  (s = t),
                  (e.prefix = t))
                : zn[o].indexOf(t) > -1
                ? ((s = t), (e.prefix = Dn(t, { family: o })))
                : n
                ? (e.iconName = n)
                : t !== Ht.replacementClass &&
                  t !== i.classic &&
                  t !== i.sharp &&
                  e.rest.push(t),
              !r && e.prefix && e.iconName)
            ) {
              var a = "fa" === s ? _n(e.iconName) : {},
                l = Mn(e.prefix, e.iconName);
              a.prefix && (s = null),
                (e.iconName = a.iconName || l || e.iconName),
                (e.prefix = a.prefix || e.prefix),
                "far" !== e.prefix ||
                  bn.far ||
                  !bn.fas ||
                  Ht.autoFetchSvg ||
                  (e.prefix = "fas");
            }
            return e;
          },
          { prefix: null, iconName: null, rest: [] }
        );
        return (
          (e.includes("fa-brands") || e.includes("fab")) && (l.prefix = "fab"),
          (e.includes("fa-duotone") || e.includes("fad")) && (l.prefix = "fad"),
          l.prefix ||
            o !== jt ||
            (!bn.fass && !Ht.autoFetchSvg) ||
            ((l.prefix = "fass"),
            (l.iconName = Mn(l.prefix, l.iconName) || l.iconName)),
          ("fa" !== l.prefix && "fa" !== s) || (l.prefix = Tn() || "fas"),
          l
        );
      }
      var Rn = (function () {
          function e() {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.definitions = {});
          }
          var t, n, a;
          return (
            (t = e),
            (n = [
              {
                key: "add",
                value: function () {
                  for (
                    var e = this, t = arguments.length, n = new Array(t), a = 0;
                    a < t;
                    a++
                  )
                    n[a] = arguments[a];
                  var r = n.reduce(this._pullDefinitions, {});
                  Object.keys(r).forEach(function (t) {
                    (e.definitions[t] = Ie(
                      Ie({}, e.definitions[t] || {}),
                      r[t]
                    )),
                      pn(t, r[t]);
                    var n = St.classic[t];
                    n && pn(n, r[t]), Pn();
                  });
                },
              },
              {
                key: "reset",
                value: function () {
                  this.definitions = {};
                },
              },
              {
                key: "_pullDefinitions",
                value: function (e, t) {
                  var n = t.prefix && t.iconName && t.icon ? { 0: t } : t;
                  return (
                    Object.keys(n).map(function (t) {
                      var a = n[t],
                        r = a.prefix,
                        i = a.iconName,
                        s = a.icon,
                        o = s[2];
                      e[r] || (e[r] = {}),
                        o.length > 0 &&
                          o.forEach(function (t) {
                            "string" === typeof t && (e[r][t] = s);
                          }),
                        (e[r][i] = s);
                    }),
                    e
                  );
                },
              },
            ]),
            n && Ve(t.prototype, n),
            a && Ve(t, a),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e
          );
        })(),
        In = [],
        Bn = {},
        Vn = {},
        Un = Object.keys(Vn);
      function Hn(e, t) {
        for (
          var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), r = 2;
          r < n;
          r++
        )
          a[r - 2] = arguments[r];
        var i = Bn[e] || [];
        return (
          i.forEach(function (e) {
            t = e.apply(null, [t].concat(a));
          }),
          t
        );
      }
      function qn(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1;
          a < t;
          a++
        )
          n[a - 1] = arguments[a];
        var r = Bn[e] || [];
        r.forEach(function (e) {
          e.apply(null, n);
        });
      }
      function Wn() {
        var e = arguments[0],
          t = Array.prototype.slice.call(arguments, 1);
        return Vn[e] ? Vn[e].apply(null, t) : void 0;
      }
      function Yn(e) {
        "fa" === e.prefix && (e.prefix = "fas");
        var t = e.iconName,
          n = e.prefix || Tn();
        if (t)
          return (
            (t = Mn(n, t) || t), un(Qn.definitions, n, t) || un(rn.styles, n, t)
          );
      }
      var Qn = new Rn(),
        Gn = {
          i2svg: function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            return ct
              ? (qn("beforeI2svg", e),
                Wn("pseudoElements2svg", e),
                Wn("i2svg", e))
              : Promise.reject("Operation requires a DOM of some kind.");
          },
          watch: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = e.autoReplaceSvgRoot;
            !1 === Ht.autoReplaceSvg && (Ht.autoReplaceSvg = !0),
              (Ht.observeMutations = !0),
              ln(function () {
                Kn({ autoReplaceSvgRoot: t }), qn("watch", e);
              });
          },
        },
        Xn = {
          icon: function (e) {
            if (null === e) return null;
            if ("object" === Be(e) && e.prefix && e.iconName)
              return {
                prefix: e.prefix,
                iconName: Mn(e.prefix, e.iconName) || e.iconName,
              };
            if (Array.isArray(e) && 2 === e.length) {
              var t = 0 === e[1].indexOf("fa-") ? e[1].slice(3) : e[1],
                n = Dn(e[0]);
              return { prefix: n, iconName: Mn(n, t) || t };
            }
            if (
              "string" === typeof e &&
              (e.indexOf("".concat(Ht.cssPrefix, "-")) > -1 || e.match(zt))
            ) {
              var a = Fn(e.split(" "), { skipLookups: !0 });
              return {
                prefix: a.prefix || Tn(),
                iconName: Mn(a.prefix, a.iconName) || a.iconName,
              };
            }
            if ("string" === typeof e) {
              var r = Tn();
              return { prefix: r, iconName: Mn(r, e) || e };
            }
          },
        },
        $n = {
          noAuto: function () {
            (Ht.autoReplaceSvg = !1), (Ht.observeMutations = !1), qn("noAuto");
          },
          config: Ht,
          dom: Gn,
          parse: Xn,
          library: Qn,
          findIconDefinition: Yn,
          toHtml: cn,
        },
        Kn = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.autoReplaceSvgRoot,
            n = void 0 === t ? st : t;
          (Object.keys(rn.styles).length > 0 || Ht.autoFetchSvg) &&
            ct &&
            Ht.autoReplaceSvg &&
            $n.dom.i2svg({ node: n });
        };
      function Zn(e, t) {
        return (
          Object.defineProperty(e, "abstract", { get: t }),
          Object.defineProperty(e, "html", {
            get: function () {
              return e.abstract.map(function (e) {
                return cn(e);
              });
            },
          }),
          Object.defineProperty(e, "node", {
            get: function () {
              if (ct) {
                var t = st.createElement("div");
                return (t.innerHTML = e.html), t.children;
              }
            },
          }),
          e
        );
      }
      function Jn(e) {
        var t = e.icons,
          n = t.main,
          a = t.mask,
          r = e.prefix,
          i = e.iconName,
          s = e.transform,
          o = e.symbol,
          l = e.title,
          c = e.maskId,
          u = e.titleId,
          d = e.extra,
          f = e.watchable,
          m = void 0 !== f && f,
          p = a.found ? a : n,
          h = p.width,
          g = p.height,
          v = "fak" === r,
          b = [
            Ht.replacementClass,
            i ? "".concat(Ht.cssPrefix, "-").concat(i) : "",
          ]
            .filter(function (e) {
              return -1 === d.classes.indexOf(e);
            })
            .filter(function (e) {
              return "" !== e || !!e;
            })
            .concat(d.classes)
            .join(" "),
          x = {
            children: [],
            attributes: Ie(
              Ie({}, d.attributes),
              {},
              {
                "data-prefix": r,
                "data-icon": i,
                class: b,
                role: d.attributes.role || "img",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 ".concat(h, " ").concat(g),
              }
            ),
          },
          j =
            v && !~d.classes.indexOf("fa-fw")
              ? { width: "".concat((h / g) * 16 * 0.0625, "em") }
              : {};
        m && (x.attributes[ft] = ""),
          l &&
            (x.children.push({
              tag: "title",
              attributes: {
                id:
                  x.attributes["aria-labelledby"] || "title-".concat(u || Qt()),
              },
              children: [l],
            }),
            delete x.attributes.title);
        var y = Ie(
            Ie({}, x),
            {},
            {
              prefix: r,
              iconName: i,
              main: n,
              mask: a,
              maskId: c,
              transform: s,
              symbol: o,
              styles: Ie(Ie({}, j), d.styles),
            }
          ),
          A =
            a.found && n.found
              ? Wn("generateAbstractMask", y) || {
                  children: [],
                  attributes: {},
                }
              : Wn("generateAbstractIcon", y) || {
                  children: [],
                  attributes: {},
                },
          w = A.children,
          k = A.attributes;
        return (
          (y.children = w),
          (y.attributes = k),
          o
            ? (function (e) {
                var t = e.prefix,
                  n = e.iconName,
                  a = e.children,
                  r = e.attributes,
                  i = e.symbol,
                  s =
                    !0 === i
                      ? "".concat(t, "-").concat(Ht.cssPrefix, "-").concat(n)
                      : i;
                return [
                  {
                    tag: "svg",
                    attributes: { style: "display: none;" },
                    children: [
                      {
                        tag: "symbol",
                        attributes: Ie(Ie({}, r), {}, { id: s }),
                        children: a,
                      },
                    ],
                  },
                ];
              })(y)
            : (function (e) {
                var t = e.children,
                  n = e.main,
                  a = e.mask,
                  r = e.attributes,
                  i = e.styles,
                  s = e.transform;
                if (Zt(s) && n.found && !a.found) {
                  var o = { x: n.width / n.height / 2, y: 0.5 };
                  r.style = Kt(
                    Ie(
                      Ie({}, i),
                      {},
                      {
                        "transform-origin": ""
                          .concat(o.x + s.x / 16, "em ")
                          .concat(o.y + s.y / 16, "em"),
                      }
                    )
                  );
                }
                return [{ tag: "svg", attributes: r, children: t }];
              })(y)
        );
      }
      function ea(e) {
        var t = e.content,
          n = e.width,
          a = e.height,
          r = e.transform,
          i = e.title,
          s = e.extra,
          o = e.watchable,
          l = void 0 !== o && o,
          c = Ie(
            Ie(Ie({}, s.attributes), i ? { title: i } : {}),
            {},
            { class: s.classes.join(" ") }
          );
        l && (c[ft] = "");
        var u = Ie({}, s.styles);
        Zt(r) &&
          ((u.transform = (function (e) {
            var t = e.transform,
              n = e.width,
              a = void 0 === n ? 16 : n,
              r = e.height,
              i = void 0 === r ? 16 : r,
              s = e.startCentered,
              o = void 0 !== s && s,
              l = "";
            return (
              (l +=
                o && ut
                  ? "translate("
                      .concat(t.x / Wt - a / 2, "em, ")
                      .concat(t.y / Wt - i / 2, "em) ")
                  : o
                  ? "translate(calc(-50% + "
                      .concat(t.x / Wt, "em), calc(-50% + ")
                      .concat(t.y / Wt, "em)) ")
                  : "translate("
                      .concat(t.x / Wt, "em, ")
                      .concat(t.y / Wt, "em) ")),
              (l += "scale("
                .concat((t.size / Wt) * (t.flipX ? -1 : 1), ", ")
                .concat((t.size / Wt) * (t.flipY ? -1 : 1), ") ")),
              l + "rotate(".concat(t.rotate, "deg) ")
            );
          })({ transform: r, startCentered: !0, width: n, height: a })),
          (u["-webkit-transform"] = u.transform));
        var d = Kt(u);
        d.length > 0 && (c.style = d);
        var f = [];
        return (
          f.push({ tag: "span", attributes: c, children: [t] }),
          i &&
            f.push({
              tag: "span",
              attributes: { class: "sr-only" },
              children: [i],
            }),
          f
        );
      }
      function ta(e) {
        var t = e.content,
          n = e.title,
          a = e.extra,
          r = Ie(
            Ie(Ie({}, a.attributes), n ? { title: n } : {}),
            {},
            { class: a.classes.join(" ") }
          ),
          i = Kt(a.styles);
        i.length > 0 && (r.style = i);
        var s = [];
        return (
          s.push({ tag: "span", attributes: r, children: [t] }),
          n &&
            s.push({
              tag: "span",
              attributes: { class: "sr-only" },
              children: [n],
            }),
          s
        );
      }
      var na = rn.styles;
      function aa(e) {
        var t = e[0],
          n = e[1],
          a = He(e.slice(4), 1)[0];
        return {
          found: !0,
          width: t,
          height: n,
          icon: Array.isArray(a)
            ? {
                tag: "g",
                attributes: { class: "".concat(Ht.cssPrefix, "-").concat(Tt) },
                children: [
                  {
                    tag: "path",
                    attributes: {
                      class: "".concat(Ht.cssPrefix, "-").concat(Ft),
                      fill: "currentColor",
                      d: a[0],
                    },
                  },
                  {
                    tag: "path",
                    attributes: {
                      class: "".concat(Ht.cssPrefix, "-").concat(Lt),
                      fill: "currentColor",
                      d: a[1],
                    },
                  },
                ],
              }
            : { tag: "path", attributes: { fill: "currentColor", d: a } },
        };
      }
      var ra = { found: !1, width: 512, height: 512 };
      function ia(e, t) {
        var n = t;
        return (
          "fa" === t && null !== Ht.styleDefault && (t = Tn()),
          new Promise(function (a, r) {
            Wn("missingIconAbstract");
            if ("fa" === n) {
              var i = _n(e) || {};
              (e = i.iconName || e), (t = i.prefix || t);
            }
            if (e && t && na[t] && na[t][e]) return a(aa(na[t][e]));
            !(function (e, t) {
              bt ||
                Ht.showMissingIcons ||
                !e ||
                console.error(
                  'Icon with name "'
                    .concat(e, '" and prefix "')
                    .concat(t, '" is missing.')
                );
            })(e, t),
              a(
                Ie(
                  Ie({}, ra),
                  {},
                  {
                    icon:
                      (Ht.showMissingIcons && e && Wn("missingIconAbstract")) ||
                      {},
                  }
                )
              );
          })
        );
      }
      var sa = function () {},
        oa =
          Ht.measurePerformance && lt && lt.mark && lt.measure
            ? lt
            : { mark: sa, measure: sa },
        la = 'FA "6.2.0"',
        ca = function (e) {
          oa.mark("".concat(la, " ").concat(e, " ends")),
            oa.measure(
              "".concat(la, " ").concat(e),
              "".concat(la, " ").concat(e, " begins"),
              "".concat(la, " ").concat(e, " ends")
            );
        },
        ua = function (e) {
          return (
            oa.mark("".concat(la, " ").concat(e, " begins")),
            function () {
              return ca(e);
            }
          );
        },
        da = function () {};
      function fa(e) {
        return "string" === typeof (e.getAttribute ? e.getAttribute(ft) : null);
      }
      function ma(e) {
        return st.createElementNS("http://www.w3.org/2000/svg", e);
      }
      function pa(e) {
        return st.createElement(e);
      }
      function ha(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = t.ceFn,
          a = void 0 === n ? ("svg" === e.tag ? ma : pa) : n;
        if ("string" === typeof e) return st.createTextNode(e);
        var r = a(e.tag);
        Object.keys(e.attributes || []).forEach(function (t) {
          r.setAttribute(t, e.attributes[t]);
        });
        var i = e.children || [];
        return (
          i.forEach(function (e) {
            r.appendChild(ha(e, { ceFn: a }));
          }),
          r
        );
      }
      var ga = {
        replace: function (e) {
          var t = e[0];
          if (t.parentNode)
            if (
              (e[1].forEach(function (e) {
                t.parentNode.insertBefore(ha(e), t);
              }),
              null === t.getAttribute(ft) && Ht.keepOriginalSource)
            ) {
              var n = st.createComment(
                (function (e) {
                  var t = " ".concat(e.outerHTML, " ");
                  return "".concat(t, "Font Awesome fontawesome.com ");
                })(t)
              );
              t.parentNode.replaceChild(n, t);
            } else t.remove();
        },
        nest: function (e) {
          var t = e[0],
            n = e[1];
          if (~Xt(t).indexOf(Ht.replacementClass)) return ga.replace(e);
          var a = new RegExp("".concat(Ht.cssPrefix, "-.*"));
          if ((delete n[0].attributes.id, n[0].attributes.class)) {
            var r = n[0].attributes.class.split(" ").reduce(
              function (e, t) {
                return (
                  t === Ht.replacementClass || t.match(a)
                    ? e.toSvg.push(t)
                    : e.toNode.push(t),
                  e
                );
              },
              { toNode: [], toSvg: [] }
            );
            (n[0].attributes.class = r.toSvg.join(" ")),
              0 === r.toNode.length
                ? t.removeAttribute("class")
                : t.setAttribute("class", r.toNode.join(" "));
          }
          var i = n
            .map(function (e) {
              return cn(e);
            })
            .join("\n");
          t.setAttribute(ft, ""), (t.innerHTML = i);
        },
      };
      function va(e) {
        e();
      }
      function ba(e, t) {
        var n = "function" === typeof t ? t : da;
        if (0 === e.length) n();
        else {
          var a = va;
          "async" === Ht.mutateApproach && (a = it.requestAnimationFrame || va),
            a(function () {
              var t =
                  !0 === Ht.autoReplaceSvg
                    ? ga.replace
                    : ga[Ht.autoReplaceSvg] || ga.replace,
                a = ua("mutate");
              e.map(t), a(), n();
            });
        }
      }
      var xa = !1;
      function ja() {
        xa = !0;
      }
      function ya() {
        xa = !1;
      }
      var Aa = null;
      function wa(e) {
        if (ot && Ht.observeMutations) {
          var t = e.treeCallback,
            n = void 0 === t ? da : t,
            a = e.nodeCallback,
            r = void 0 === a ? da : a,
            i = e.pseudoElementsCallback,
            s = void 0 === i ? da : i,
            o = e.observeMutationsRoot,
            l = void 0 === o ? st : o;
          (Aa = new ot(function (e) {
            if (!xa) {
              var t = Tn();
              Gt(e).forEach(function (e) {
                if (
                  ("childList" === e.type &&
                    e.addedNodes.length > 0 &&
                    !fa(e.addedNodes[0]) &&
                    (Ht.searchPseudoElements && s(e.target), n(e.target)),
                  "attributes" === e.type &&
                    e.target.parentNode &&
                    Ht.searchPseudoElements &&
                    s(e.target.parentNode),
                  "attributes" === e.type &&
                    fa(e.target) &&
                    ~_t.indexOf(e.attributeName))
                )
                  if (
                    "class" === e.attributeName &&
                    (function (e) {
                      var t = e.getAttribute ? e.getAttribute(pt) : null,
                        n = e.getAttribute ? e.getAttribute(ht) : null;
                      return t && n;
                    })(e.target)
                  ) {
                    var a = Fn(Xt(e.target)),
                      i = a.prefix,
                      o = a.iconName;
                    e.target.setAttribute(pt, i || t),
                      o && e.target.setAttribute(ht, o);
                  } else
                    (l = e.target) &&
                      l.classList &&
                      l.classList.contains &&
                      l.classList.contains(Ht.replacementClass) &&
                      r(e.target);
                var l;
              });
            }
          })),
            ct &&
              Aa.observe(l, {
                childList: !0,
                attributes: !0,
                characterData: !0,
                subtree: !0,
              });
        }
      }
      function ka(e) {
        var t = e.getAttribute("style"),
          n = [];
        return (
          t &&
            (n = t.split(";").reduce(function (e, t) {
              var n = t.split(":"),
                a = n[0],
                r = n.slice(1);
              return a && r.length > 0 && (e[a] = r.join(":").trim()), e;
            }, {})),
          n
        );
      }
      function Sa(e) {
        var t = e.getAttribute("data-prefix"),
          n = e.getAttribute("data-icon"),
          a = void 0 !== e.innerText ? e.innerText.trim() : "",
          r = Fn(Xt(e));
        return (
          r.prefix || (r.prefix = Tn()),
          t && n && ((r.prefix = t), (r.iconName = n)),
          (r.iconName && r.prefix) ||
            (r.prefix &&
              a.length > 0 &&
              (r.iconName =
                (function (e, t) {
                  return (wn[e] || {})[t];
                })(r.prefix, e.innerText) || On(r.prefix, fn(e.innerText))),
            !r.iconName &&
              Ht.autoFetchSvg &&
              e.firstChild &&
              e.firstChild.nodeType === Node.TEXT_NODE &&
              (r.iconName = e.firstChild.data)),
          r
        );
      }
      function Na(e) {
        var t = Gt(e.attributes).reduce(function (e, t) {
            return (
              "class" !== e.name && "style" !== e.name && (e[t.name] = t.value),
              e
            );
          }, {}),
          n = e.getAttribute("title"),
          a = e.getAttribute("data-fa-title-id");
        return (
          Ht.autoA11y &&
            (n
              ? (t["aria-labelledby"] = ""
                  .concat(Ht.replacementClass, "-title-")
                  .concat(a || Qt()))
              : ((t["aria-hidden"] = "true"), (t.focusable = "false"))),
          t
        );
      }
      function za(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { styleParser: !0 },
          n = Sa(e),
          a = n.iconName,
          r = n.prefix,
          i = n.rest,
          s = Na(e),
          o = Hn("parseNodeAttributes", {}, e),
          l = t.styleParser ? ka(e) : [];
        return Ie(
          {
            iconName: a,
            title: e.getAttribute("title"),
            titleId: e.getAttribute("data-fa-title-id"),
            prefix: r,
            transform: Yt,
            mask: { iconName: null, prefix: null, rest: [] },
            maskId: null,
            symbol: !1,
            extra: { classes: i, styles: l, attributes: s },
          },
          o
        );
      }
      var Ca = rn.styles;
      function Ea(e) {
        var t =
          "nest" === Ht.autoReplaceSvg ? za(e, { styleParser: !1 }) : za(e);
        return ~t.extra.classes.indexOf(Ct)
          ? Wn("generateLayersText", e, t)
          : Wn("generateSvgReplacementMutation", e, t);
      }
      var Pa = new Set();
      function Oa(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!ct) return Promise.resolve();
        var n = st.documentElement.classList,
          a = function (e) {
            return n.add("".concat(gt, "-").concat(e));
          },
          r = function (e) {
            return n.remove("".concat(gt, "-").concat(e));
          },
          i = Ht.autoFetchSvg
            ? Pa
            : yt
                .map(function (e) {
                  return "fa-".concat(e);
                })
                .concat(Object.keys(Ca));
        i.includes("fa") || i.push("fa");
        var s = [".".concat(Ct, ":not([").concat(ft, "])")]
          .concat(
            i.map(function (e) {
              return ".".concat(e, ":not([").concat(ft, "])");
            })
          )
          .join(", ");
        if (0 === s.length) return Promise.resolve();
        var o = [];
        try {
          o = Gt(e.querySelectorAll(s));
        } catch (Wd) {}
        if (!(o.length > 0)) return Promise.resolve();
        a("pending"), r("complete");
        var l = ua("onTree"),
          c = o.reduce(function (e, t) {
            try {
              var n = Ea(t);
              n && e.push(n);
            } catch (Wd) {
              bt || ("MissingIcon" === Wd.name && console.error(Wd));
            }
            return e;
          }, []);
        return new Promise(function (e, n) {
          Promise.all(c)
            .then(function (n) {
              ba(n, function () {
                a("active"),
                  a("complete"),
                  r("pending"),
                  "function" === typeof t && t(),
                  l(),
                  e();
              });
            })
            .catch(function (e) {
              l(), n(e);
            });
        });
      }
      function Ma(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        Ea(e).then(function (e) {
          e && ba([e], t);
        });
      }
      yt.map(function (e) {
        Pa.add("fa-".concat(e));
      }),
        Object.keys(wt.classic).map(Pa.add.bind(Pa)),
        Object.keys(wt.sharp).map(Pa.add.bind(Pa)),
        (Pa = qe(Pa));
      var _a = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = t.transform,
            a = void 0 === n ? Yt : n,
            r = t.symbol,
            i = void 0 !== r && r,
            s = t.mask,
            o = void 0 === s ? null : s,
            l = t.maskId,
            c = void 0 === l ? null : l,
            u = t.title,
            d = void 0 === u ? null : u,
            f = t.titleId,
            m = void 0 === f ? null : f,
            p = t.classes,
            h = void 0 === p ? [] : p,
            g = t.attributes,
            v = void 0 === g ? {} : g,
            b = t.styles,
            x = void 0 === b ? {} : b;
          if (e) {
            var j = e.prefix,
              y = e.iconName,
              A = e.icon;
            return Zn(Ie({ type: "icon" }, e), function () {
              return (
                qn("beforeDOMElementCreation", {
                  iconDefinition: e,
                  params: t,
                }),
                Ht.autoA11y &&
                  (d
                    ? (v["aria-labelledby"] = ""
                        .concat(Ht.replacementClass, "-title-")
                        .concat(m || Qt()))
                    : ((v["aria-hidden"] = "true"), (v.focusable = "false"))),
                Jn({
                  icons: {
                    main: aa(A),
                    mask: o
                      ? aa(o.icon)
                      : { found: !1, width: null, height: null, icon: {} },
                  },
                  prefix: j,
                  iconName: y,
                  transform: Ie(Ie({}, Yt), a),
                  symbol: i,
                  title: d,
                  maskId: c,
                  titleId: m,
                  extra: { attributes: v, styles: x, classes: h },
                })
              );
            });
          }
        },
        Ta = {
          mixout: function () {
            return {
              icon:
                ((e = _a),
                function (t) {
                  var n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    a = (t || {}).icon ? t : Yn(t || {}),
                    r = n.mask;
                  return (
                    r && (r = (r || {}).icon ? r : Yn(r || {})),
                    e(a, Ie(Ie({}, n), {}, { mask: r }))
                  );
                }),
            };
            var e;
          },
          hooks: function () {
            return {
              mutationObserverCallbacks: function (e) {
                return (e.treeCallback = Oa), (e.nodeCallback = Ma), e;
              },
            };
          },
          provides: function (e) {
            (e.i2svg = function (e) {
              var t = e.node,
                n = void 0 === t ? st : t,
                a = e.callback;
              return Oa(n, void 0 === a ? function () {} : a);
            }),
              (e.generateSvgReplacementMutation = function (e, t) {
                var n = t.iconName,
                  a = t.title,
                  r = t.titleId,
                  i = t.prefix,
                  s = t.transform,
                  o = t.symbol,
                  l = t.mask,
                  c = t.maskId,
                  u = t.extra;
                return new Promise(function (t, d) {
                  Promise.all([
                    ia(n, i),
                    l.iconName
                      ? ia(l.iconName, l.prefix)
                      : Promise.resolve({
                          found: !1,
                          width: 512,
                          height: 512,
                          icon: {},
                        }),
                  ])
                    .then(function (l) {
                      var d = He(l, 2),
                        f = d[0],
                        m = d[1];
                      t([
                        e,
                        Jn({
                          icons: { main: f, mask: m },
                          prefix: i,
                          iconName: n,
                          transform: s,
                          symbol: o,
                          maskId: c,
                          title: a,
                          titleId: r,
                          extra: u,
                          watchable: !0,
                        }),
                      ]);
                    })
                    .catch(d);
                });
              }),
              (e.generateAbstractIcon = function (e) {
                var t,
                  n = e.children,
                  a = e.attributes,
                  r = e.main,
                  i = e.transform,
                  s = Kt(e.styles);
                return (
                  s.length > 0 && (a.style = s),
                  Zt(i) &&
                    (t = Wn("generateAbstractTransformGrouping", {
                      main: r,
                      transform: i,
                      containerWidth: r.width,
                      iconWidth: r.width,
                    })),
                  n.push(t || r.icon),
                  { children: n, attributes: a }
                );
              });
          },
        },
        Da = {
          mixout: function () {
            return {
              layer: function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n = t.classes,
                  a = void 0 === n ? [] : n;
                return Zn({ type: "layer" }, function () {
                  qn("beforeDOMElementCreation", { assembler: e, params: t });
                  var n = [];
                  return (
                    e(function (e) {
                      Array.isArray(e)
                        ? e.map(function (e) {
                            n = n.concat(e.abstract);
                          })
                        : (n = n.concat(e.abstract));
                    }),
                    [
                      {
                        tag: "span",
                        attributes: {
                          class: ["".concat(Ht.cssPrefix, "-layers")]
                            .concat(qe(a))
                            .join(" "),
                        },
                        children: n,
                      },
                    ]
                  );
                });
              },
            };
          },
        },
        La = {
          mixout: function () {
            return {
              counter: function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n = t.title,
                  a = void 0 === n ? null : n,
                  r = t.classes,
                  i = void 0 === r ? [] : r,
                  s = t.attributes,
                  o = void 0 === s ? {} : s,
                  l = t.styles,
                  c = void 0 === l ? {} : l;
                return Zn({ type: "counter", content: e }, function () {
                  return (
                    qn("beforeDOMElementCreation", { content: e, params: t }),
                    ta({
                      content: e.toString(),
                      title: a,
                      extra: {
                        attributes: o,
                        styles: c,
                        classes: [
                          "".concat(Ht.cssPrefix, "-layers-counter"),
                        ].concat(qe(i)),
                      },
                    })
                  );
                });
              },
            };
          },
        },
        Fa = {
          mixout: function () {
            return {
              text: function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n = t.transform,
                  a = void 0 === n ? Yt : n,
                  r = t.title,
                  i = void 0 === r ? null : r,
                  s = t.classes,
                  o = void 0 === s ? [] : s,
                  l = t.attributes,
                  c = void 0 === l ? {} : l,
                  u = t.styles,
                  d = void 0 === u ? {} : u;
                return Zn({ type: "text", content: e }, function () {
                  return (
                    qn("beforeDOMElementCreation", { content: e, params: t }),
                    ea({
                      content: e,
                      transform: Ie(Ie({}, Yt), a),
                      title: i,
                      extra: {
                        attributes: c,
                        styles: d,
                        classes: [
                          "".concat(Ht.cssPrefix, "-layers-text"),
                        ].concat(qe(o)),
                      },
                    })
                  );
                });
              },
            };
          },
          provides: function (e) {
            e.generateLayersText = function (e, t) {
              var n = t.title,
                a = t.transform,
                r = t.extra,
                i = null,
                s = null;
              if (ut) {
                var o = parseInt(getComputedStyle(e).fontSize, 10),
                  l = e.getBoundingClientRect();
                (i = l.width / o), (s = l.height / o);
              }
              return (
                Ht.autoA11y && !n && (r.attributes["aria-hidden"] = "true"),
                Promise.resolve([
                  e,
                  ea({
                    content: e.innerHTML,
                    width: i,
                    height: s,
                    transform: a,
                    title: n,
                    extra: r,
                    watchable: !0,
                  }),
                ])
              );
            };
          },
        },
        Ra = new RegExp('"', "ug"),
        Ia = [1105920, 1112319];
      function Ba(e, t) {
        var n = ""
          .concat("data-fa-pseudo-element-pending")
          .concat(t.replace(":", "-"));
        return new Promise(function (a, r) {
          if (null !== e.getAttribute(n)) return a();
          var i = Gt(e.children).filter(function (e) {
              return e.getAttribute(mt) === t;
            })[0],
            s = it.getComputedStyle(e, t),
            o = s.getPropertyValue("font-family").match(Et),
            l = s.getPropertyValue("font-weight"),
            c = s.getPropertyValue("content");
          if (i && !o) return e.removeChild(i), a();
          if (o && "none" !== c && "" !== c) {
            var u = s.getPropertyValue("content"),
              d = ~["Sharp"].indexOf(o[2]) ? jt : xt,
              f = ~[
                "Solid",
                "Regular",
                "Light",
                "Thin",
                "Duotone",
                "Brands",
                "Kit",
              ].indexOf(o[2])
                ? kt[d][o[2].toLowerCase()]
                : Pt[d][l],
              m = (function (e) {
                var t = e.replace(Ra, ""),
                  n = (function (e, t) {
                    var n,
                      a = e.length,
                      r = e.charCodeAt(t);
                    return r >= 55296 &&
                      r <= 56319 &&
                      a > t + 1 &&
                      (n = e.charCodeAt(t + 1)) >= 56320 &&
                      n <= 57343
                      ? 1024 * (r - 55296) + n - 56320 + 65536
                      : r;
                  })(t, 0),
                  a = n >= Ia[0] && n <= Ia[1],
                  r = 2 === t.length && t[0] === t[1];
                return { value: fn(r ? t[0] : t), isSecondary: a || r };
              })(u),
              p = m.value,
              h = m.isSecondary,
              g = o[0].startsWith("FontAwesome"),
              v = On(f, p),
              b = v;
            if (g) {
              var x = (function (e) {
                var t = Sn[e],
                  n = On("fas", e);
                return (
                  t ||
                  (n ? { prefix: "fas", iconName: n } : null) || {
                    prefix: null,
                    iconName: null,
                  }
                );
              })(p);
              x.iconName && x.prefix && ((v = x.iconName), (f = x.prefix));
            }
            if (
              !v ||
              h ||
              (i && i.getAttribute(pt) === f && i.getAttribute(ht) === b)
            )
              a();
            else {
              e.setAttribute(n, b), i && e.removeChild(i);
              var j = {
                  iconName: null,
                  title: null,
                  titleId: null,
                  prefix: null,
                  transform: Yt,
                  symbol: !1,
                  mask: { iconName: null, prefix: null, rest: [] },
                  maskId: null,
                  extra: { classes: [], styles: {}, attributes: {} },
                },
                y = j.extra;
              (y.attributes[mt] = t),
                ia(v, f)
                  .then(function (r) {
                    var i = Jn(
                        Ie(
                          Ie({}, j),
                          {},
                          {
                            icons: {
                              main: r,
                              mask: { prefix: null, iconName: null, rest: [] },
                            },
                            prefix: f,
                            iconName: b,
                            extra: y,
                            watchable: !0,
                          }
                        )
                      ),
                      s = st.createElement("svg");
                    "::before" === t
                      ? e.insertBefore(s, e.firstChild)
                      : e.appendChild(s),
                      (s.outerHTML = i
                        .map(function (e) {
                          return cn(e);
                        })
                        .join("\n")),
                      e.removeAttribute(n),
                      a();
                  })
                  .catch(r);
            }
          } else a();
        });
      }
      function Va(e) {
        return Promise.all([Ba(e, "::before"), Ba(e, "::after")]);
      }
      function Ua(e) {
        return (
          e.parentNode !== document.head &&
          !~vt.indexOf(e.tagName.toUpperCase()) &&
          !e.getAttribute(mt) &&
          (!e.parentNode || "svg" !== e.parentNode.tagName)
        );
      }
      function Ha(e) {
        if (ct)
          return new Promise(function (t, n) {
            var a = Gt(e.querySelectorAll("*")).filter(Ua).map(Va),
              r = ua("searchPseudoElements");
            ja(),
              Promise.all(a)
                .then(function () {
                  r(), ya(), t();
                })
                .catch(function () {
                  r(), ya(), n();
                });
          });
      }
      var qa = !1,
        Wa = function (e) {
          return e
            .toLowerCase()
            .split(" ")
            .reduce(
              function (e, t) {
                var n = t.toLowerCase().split("-"),
                  a = n[0],
                  r = n.slice(1).join("-");
                if (a && "h" === r) return (e.flipX = !0), e;
                if (a && "v" === r) return (e.flipY = !0), e;
                if (((r = parseFloat(r)), isNaN(r))) return e;
                switch (a) {
                  case "grow":
                    e.size = e.size + r;
                    break;
                  case "shrink":
                    e.size = e.size - r;
                    break;
                  case "left":
                    e.x = e.x - r;
                    break;
                  case "right":
                    e.x = e.x + r;
                    break;
                  case "up":
                    e.y = e.y - r;
                    break;
                  case "down":
                    e.y = e.y + r;
                    break;
                  case "rotate":
                    e.rotate = e.rotate + r;
                }
                return e;
              },
              { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 }
            );
        },
        Ya = {
          mixout: function () {
            return {
              parse: {
                transform: function (e) {
                  return Wa(e);
                },
              },
            };
          },
          hooks: function () {
            return {
              parseNodeAttributes: function (e, t) {
                var n = t.getAttribute("data-fa-transform");
                return n && (e.transform = Wa(n)), e;
              },
            };
          },
          provides: function (e) {
            e.generateAbstractTransformGrouping = function (e) {
              var t = e.main,
                n = e.transform,
                a = e.containerWidth,
                r = e.iconWidth,
                i = { transform: "translate(".concat(a / 2, " 256)") },
                s = "translate(".concat(32 * n.x, ", ").concat(32 * n.y, ") "),
                o = "scale("
                  .concat((n.size / 16) * (n.flipX ? -1 : 1), ", ")
                  .concat((n.size / 16) * (n.flipY ? -1 : 1), ") "),
                l = "rotate(".concat(n.rotate, " 0 0)"),
                c = {
                  outer: i,
                  inner: {
                    transform: "".concat(s, " ").concat(o, " ").concat(l),
                  },
                  path: {
                    transform: "translate(".concat((r / 2) * -1, " -256)"),
                  },
                };
              return {
                tag: "g",
                attributes: Ie({}, c.outer),
                children: [
                  {
                    tag: "g",
                    attributes: Ie({}, c.inner),
                    children: [
                      {
                        tag: t.icon.tag,
                        children: t.icon.children,
                        attributes: Ie(Ie({}, t.icon.attributes), c.path),
                      },
                    ],
                  },
                ],
              };
            };
          },
        },
        Qa = { x: 0, y: 0, width: "100%", height: "100%" };
      function Ga(e) {
        var t =
          !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return (
          e.attributes &&
            (e.attributes.fill || t) &&
            (e.attributes.fill = "black"),
          e
        );
      }
      var Xa = {
          hooks: function () {
            return {
              parseNodeAttributes: function (e, t) {
                var n = t.getAttribute("data-fa-mask"),
                  a = n
                    ? Fn(
                        n.split(" ").map(function (e) {
                          return e.trim();
                        })
                      )
                    : { prefix: null, iconName: null, rest: [] };
                return (
                  a.prefix || (a.prefix = Tn()),
                  (e.mask = a),
                  (e.maskId = t.getAttribute("data-fa-mask-id")),
                  e
                );
              },
            };
          },
          provides: function (e) {
            e.generateAbstractMask = function (e) {
              var t,
                n = e.children,
                a = e.attributes,
                r = e.main,
                i = e.mask,
                s = e.maskId,
                o = e.transform,
                l = r.width,
                c = r.icon,
                u = i.width,
                d = i.icon,
                f = (function (e) {
                  var t = e.transform,
                    n = e.containerWidth,
                    a = e.iconWidth,
                    r = { transform: "translate(".concat(n / 2, " 256)") },
                    i = "translate("
                      .concat(32 * t.x, ", ")
                      .concat(32 * t.y, ") "),
                    s = "scale("
                      .concat((t.size / 16) * (t.flipX ? -1 : 1), ", ")
                      .concat((t.size / 16) * (t.flipY ? -1 : 1), ") "),
                    o = "rotate(".concat(t.rotate, " 0 0)");
                  return {
                    outer: r,
                    inner: {
                      transform: "".concat(i, " ").concat(s, " ").concat(o),
                    },
                    path: {
                      transform: "translate(".concat((a / 2) * -1, " -256)"),
                    },
                  };
                })({ transform: o, containerWidth: u, iconWidth: l }),
                m = {
                  tag: "rect",
                  attributes: Ie(Ie({}, Qa), {}, { fill: "white" }),
                },
                p = c.children ? { children: c.children.map(Ga) } : {},
                h = {
                  tag: "g",
                  attributes: Ie({}, f.inner),
                  children: [
                    Ga(
                      Ie(
                        {
                          tag: c.tag,
                          attributes: Ie(Ie({}, c.attributes), f.path),
                        },
                        p
                      )
                    ),
                  ],
                },
                g = { tag: "g", attributes: Ie({}, f.outer), children: [h] },
                v = "mask-".concat(s || Qt()),
                b = "clip-".concat(s || Qt()),
                x = {
                  tag: "mask",
                  attributes: Ie(
                    Ie({}, Qa),
                    {},
                    {
                      id: v,
                      maskUnits: "userSpaceOnUse",
                      maskContentUnits: "userSpaceOnUse",
                    }
                  ),
                  children: [m, g],
                },
                j = {
                  tag: "defs",
                  children: [
                    {
                      tag: "clipPath",
                      attributes: { id: b },
                      children: ((t = d), "g" === t.tag ? t.children : [t]),
                    },
                    x,
                  ],
                };
              return (
                n.push(j, {
                  tag: "rect",
                  attributes: Ie(
                    {
                      fill: "currentColor",
                      "clip-path": "url(#".concat(b, ")"),
                      mask: "url(#".concat(v, ")"),
                    },
                    Qa
                  ),
                }),
                { children: n, attributes: a }
              );
            };
          },
        },
        $a = {
          provides: function (e) {
            var t = !1;
            it.matchMedia &&
              (t = it.matchMedia("(prefers-reduced-motion: reduce)").matches),
              (e.missingIconAbstract = function () {
                var e = [],
                  n = { fill: "currentColor" },
                  a = {
                    attributeType: "XML",
                    repeatCount: "indefinite",
                    dur: "2s",
                  };
                e.push({
                  tag: "path",
                  attributes: Ie(
                    Ie({}, n),
                    {},
                    {
                      d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z",
                    }
                  ),
                });
                var r = Ie(Ie({}, a), {}, { attributeName: "opacity" }),
                  i = {
                    tag: "circle",
                    attributes: Ie(
                      Ie({}, n),
                      {},
                      { cx: "256", cy: "364", r: "28" }
                    ),
                    children: [],
                  };
                return (
                  t ||
                    i.children.push(
                      {
                        tag: "animate",
                        attributes: Ie(
                          Ie({}, a),
                          {},
                          { attributeName: "r", values: "28;14;28;28;14;28;" }
                        ),
                      },
                      {
                        tag: "animate",
                        attributes: Ie(
                          Ie({}, r),
                          {},
                          { values: "1;0;1;1;0;1;" }
                        ),
                      }
                    ),
                  e.push(i),
                  e.push({
                    tag: "path",
                    attributes: Ie(
                      Ie({}, n),
                      {},
                      {
                        opacity: "1",
                        d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z",
                      }
                    ),
                    children: t
                      ? []
                      : [
                          {
                            tag: "animate",
                            attributes: Ie(
                              Ie({}, r),
                              {},
                              { values: "1;0;0;0;0;1;" }
                            ),
                          },
                        ],
                  }),
                  t ||
                    e.push({
                      tag: "path",
                      attributes: Ie(
                        Ie({}, n),
                        {},
                        {
                          opacity: "0",
                          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z",
                        }
                      ),
                      children: [
                        {
                          tag: "animate",
                          attributes: Ie(
                            Ie({}, r),
                            {},
                            { values: "0;0;1;1;0;0;" }
                          ),
                        },
                      ],
                    }),
                  { tag: "g", attributes: { class: "missing" }, children: e }
                );
              });
          },
        };
      !(function (e, t) {
        var n = t.mixoutsTo;
        (In = e),
          (Bn = {}),
          Object.keys(Vn).forEach(function (e) {
            -1 === Un.indexOf(e) && delete Vn[e];
          }),
          In.forEach(function (e) {
            var t = e.mixout ? e.mixout() : {};
            if (
              (Object.keys(t).forEach(function (e) {
                "function" === typeof t[e] && (n[e] = t[e]),
                  "object" === Be(t[e]) &&
                    Object.keys(t[e]).forEach(function (a) {
                      n[e] || (n[e] = {}), (n[e][a] = t[e][a]);
                    });
              }),
              e.hooks)
            ) {
              var a = e.hooks();
              Object.keys(a).forEach(function (e) {
                Bn[e] || (Bn[e] = []), Bn[e].push(a[e]);
              });
            }
            e.provides && e.provides(Vn);
          });
      })(
        [
          nn,
          Ta,
          Da,
          La,
          Fa,
          {
            hooks: function () {
              return {
                mutationObserverCallbacks: function (e) {
                  return (e.pseudoElementsCallback = Ha), e;
                },
              };
            },
            provides: function (e) {
              e.pseudoElements2svg = function (e) {
                var t = e.node,
                  n = void 0 === t ? st : t;
                Ht.searchPseudoElements && Ha(n);
              };
            },
          },
          {
            mixout: function () {
              return {
                dom: {
                  unwatch: function () {
                    ja(), (qa = !0);
                  },
                },
              };
            },
            hooks: function () {
              return {
                bootstrap: function () {
                  wa(Hn("mutationObserverCallbacks", {}));
                },
                noAuto: function () {
                  Aa && Aa.disconnect();
                },
                watch: function (e) {
                  var t = e.observeMutationsRoot;
                  qa
                    ? ya()
                    : wa(
                        Hn("mutationObserverCallbacks", {
                          observeMutationsRoot: t,
                        })
                      );
                },
              };
            },
          },
          Ya,
          Xa,
          $a,
          {
            hooks: function () {
              return {
                parseNodeAttributes: function (e, t) {
                  var n = t.getAttribute("data-fa-symbol"),
                    a = null !== n && ("" === n || n);
                  return (e.symbol = a), e;
                },
              };
            },
          },
        ],
        { mixoutsTo: $n }
      );
      var Ka = $n.parse,
        Za = $n.icon,
        Ja = n(2007),
        er = n.n(Ja);
      function tr(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function nr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? tr(Object(n), !0).forEach(function (t) {
                rr(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : tr(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function ar(e) {
        return (
          (ar =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          ar(e)
        );
      }
      function rr(e, t, n) {
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
      function ir(e, t) {
        if (null == e) return {};
        var n,
          a,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              r = {},
              i = Object.keys(e);
            for (a = 0; a < i.length; a++)
              (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (a = 0; a < i.length; a++)
            (n = i[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      function sr(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return or(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return or(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return or(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function or(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
        return a;
      }
      function lr(e) {
        return (
          (t = e),
          (t -= 0) === t
            ? e
            : (e = e.replace(/[\-_\s]+(.)?/g, function (e, t) {
                return t ? t.toUpperCase() : "";
              }))
                .substr(0, 1)
                .toLowerCase() + e.substr(1)
        );
        var t;
      }
      var cr = ["style"];
      function ur(e) {
        return e
          .split(";")
          .map(function (e) {
            return e.trim();
          })
          .filter(function (e) {
            return e;
          })
          .reduce(function (e, t) {
            var n,
              a = t.indexOf(":"),
              r = lr(t.slice(0, a)),
              i = t.slice(a + 1).trim();
            return (
              r.startsWith("webkit")
                ? (e[((n = r), n.charAt(0).toUpperCase() + n.slice(1))] = i)
                : (e[r] = i),
              e
            );
          }, {});
      }
      var dr = !1;
      try {
        dr = !0;
      } catch (Wd) {}
      function fr(e) {
        return e && "object" === ar(e) && e.prefix && e.iconName && e.icon
          ? e
          : Ka.icon
          ? Ka.icon(e)
          : null === e
          ? null
          : e && "object" === ar(e) && e.prefix && e.iconName
          ? e
          : Array.isArray(e) && 2 === e.length
          ? { prefix: e[0], iconName: e[1] }
          : "string" === typeof e
          ? { prefix: "fas", iconName: e }
          : void 0;
      }
      function mr(e, t) {
        return (Array.isArray(t) && t.length > 0) || (!Array.isArray(t) && t)
          ? rr({}, e, t)
          : {};
      }
      var pr = t.forwardRef(function (e, t) {
        var n = e.icon,
          a = e.mask,
          r = e.symbol,
          i = e.className,
          s = e.title,
          o = e.titleId,
          l = e.maskId,
          c = fr(n),
          u = mr(
            "classes",
            [].concat(
              sr(
                (function (e) {
                  var t,
                    n = e.beat,
                    a = e.fade,
                    r = e.beatFade,
                    i = e.bounce,
                    s = e.shake,
                    o = e.flash,
                    l = e.spin,
                    c = e.spinPulse,
                    u = e.spinReverse,
                    d = e.pulse,
                    f = e.fixedWidth,
                    m = e.inverse,
                    p = e.border,
                    h = e.listItem,
                    g = e.flip,
                    v = e.size,
                    b = e.rotation,
                    x = e.pull,
                    j =
                      (rr(
                        (t = {
                          "fa-beat": n,
                          "fa-fade": a,
                          "fa-beat-fade": r,
                          "fa-bounce": i,
                          "fa-shake": s,
                          "fa-flash": o,
                          "fa-spin": l,
                          "fa-spin-reverse": u,
                          "fa-spin-pulse": c,
                          "fa-pulse": d,
                          "fa-fw": f,
                          "fa-inverse": m,
                          "fa-border": p,
                          "fa-li": h,
                          "fa-flip": !0 === g,
                          "fa-flip-horizontal":
                            "horizontal" === g || "both" === g,
                          "fa-flip-vertical": "vertical" === g || "both" === g,
                        }),
                        "fa-".concat(v),
                        "undefined" !== typeof v && null !== v
                      ),
                      rr(
                        t,
                        "fa-rotate-".concat(b),
                        "undefined" !== typeof b && null !== b && 0 !== b
                      ),
                      rr(
                        t,
                        "fa-pull-".concat(x),
                        "undefined" !== typeof x && null !== x
                      ),
                      rr(t, "fa-swap-opacity", e.swapOpacity),
                      t);
                  return Object.keys(j)
                    .map(function (e) {
                      return j[e] ? e : null;
                    })
                    .filter(function (e) {
                      return e;
                    });
                })(e)
              ),
              sr(i.split(" "))
            )
          ),
          d = mr(
            "transform",
            "string" === typeof e.transform
              ? Ka.transform(e.transform)
              : e.transform
          ),
          f = mr("mask", fr(a)),
          m = Za(
            c,
            nr(
              nr(nr(nr({}, u), d), f),
              {},
              { symbol: r, title: s, titleId: o, maskId: l }
            )
          );
        if (!m)
          return (
            (function () {
              var e;
              !dr &&
                console &&
                "function" === typeof console.error &&
                (e = console).error.apply(e, arguments);
            })("Could not find icon", c),
            null
          );
        var p = m.abstract,
          h = { ref: t };
        return (
          Object.keys(e).forEach(function (t) {
            pr.defaultProps.hasOwnProperty(t) || (h[t] = e[t]);
          }),
          hr(p[0], h)
        );
      });
      (pr.displayName = "FontAwesomeIcon"),
        (pr.propTypes = {
          beat: er().bool,
          border: er().bool,
          beatFade: er().bool,
          bounce: er().bool,
          className: er().string,
          fade: er().bool,
          flash: er().bool,
          mask: er().oneOfType([er().object, er().array, er().string]),
          maskId: er().string,
          fixedWidth: er().bool,
          inverse: er().bool,
          flip: er().oneOf([!0, !1, "horizontal", "vertical", "both"]),
          icon: er().oneOfType([er().object, er().array, er().string]),
          listItem: er().bool,
          pull: er().oneOf(["right", "left"]),
          pulse: er().bool,
          rotation: er().oneOf([0, 90, 180, 270]),
          shake: er().bool,
          size: er().oneOf([
            "2xs",
            "xs",
            "sm",
            "lg",
            "xl",
            "2xl",
            "1x",
            "2x",
            "3x",
            "4x",
            "5x",
            "6x",
            "7x",
            "8x",
            "9x",
            "10x",
          ]),
          spin: er().bool,
          spinPulse: er().bool,
          spinReverse: er().bool,
          symbol: er().oneOfType([er().bool, er().string]),
          title: er().string,
          titleId: er().string,
          transform: er().oneOfType([er().string, er().object]),
          swapOpacity: er().bool,
        }),
        (pr.defaultProps = {
          border: !1,
          className: "",
          mask: null,
          maskId: null,
          fixedWidth: !1,
          inverse: !1,
          flip: !1,
          icon: null,
          listItem: !1,
          pull: null,
          pulse: !1,
          rotation: null,
          size: null,
          spin: !1,
          spinPulse: !1,
          spinReverse: !1,
          beat: !1,
          fade: !1,
          beatFade: !1,
          bounce: !1,
          shake: !1,
          symbol: !1,
          title: "",
          titleId: null,
          transform: null,
          swapOpacity: !1,
        });
      var hr = function e(t, n) {
          var a =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          if ("string" === typeof n) return n;
          var r = (n.children || []).map(function (n) {
              return e(t, n);
            }),
            i = Object.keys(n.attributes || {}).reduce(
              function (e, t) {
                var a = n.attributes[t];
                switch (t) {
                  case "class":
                    (e.attrs.className = a), delete n.attributes.class;
                    break;
                  case "style":
                    e.attrs.style = ur(a);
                    break;
                  default:
                    0 === t.indexOf("aria-") || 0 === t.indexOf("data-")
                      ? (e.attrs[t.toLowerCase()] = a)
                      : (e.attrs[lr(t)] = a);
                }
                return e;
              },
              { attrs: {} }
            ),
            s = a.style,
            o = void 0 === s ? {} : s,
            l = ir(a, cr);
          return (
            (i.attrs.style = nr(nr({}, i.attrs.style), o)),
            t.apply(void 0, [n.tag, nr(nr({}, i.attrs), l)].concat(sr(r)))
          );
        }.bind(null, t.createElement),
        gr = {
          prefix: "fas",
          iconName: "file-lines",
          icon: [
            384,
            512,
            [128441, 128462, 61686, "file-alt", "file-text"],
            "f15c",
            "M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z",
          ],
        },
        vr = {
          prefix: "fas",
          iconName: "calendar-days",
          icon: [
            448,
            512,
            ["calendar-alt"],
            "f073",
            "M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z",
          ],
        },
        br = {
          prefix: "fas",
          iconName: "people-group",
          icon: [
            640,
            512,
            [],
            "e533",
            "M184 88c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zM568 88c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm8 157.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 160c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z",
          ],
        },
        xr = {
          prefix: "fas",
          iconName: "map-location-dot",
          icon: [
            576,
            512,
            ["map-marked-alt"],
            "f5a0",
            "M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z",
          ],
        },
        jr = {
          prefix: "fas",
          iconName: "handshake",
          icon: [
            640,
            512,
            [],
            "f2b5",
            "M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L512 316.8V128h-.7l-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48V352h28.2l91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123zM96 128H0V352c0 17.7 14.3 32 32 32H64c17.7 0 32-14.3 32-32V128zM48 352c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16zM544 128V352c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V128H544zm64 208c0 8.8-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16z",
          ],
        },
        yr = {
          prefix: "fas",
          iconName: "scroll",
          icon: [
            576,
            512,
            [128220],
            "f70e",
            "M0 80v48c0 17.7 14.3 32 32 32H48 96V80c0-26.5-21.5-48-48-48S0 53.5 0 80zM112 32c10 13.4 16 30 16 48V384c0 35.3 28.7 64 64 64s64-28.7 64-64v-5.3c0-32.4 26.3-58.7 58.7-58.7H480V128c0-53-43-96-96-96H112zM464 480c61.9 0 112-50.1 112-112c0-8.8-7.2-16-16-16H314.7c-14.7 0-26.7 11.9-26.7 26.7V384c0 53-43 96-96 96H368h96z",
          ],
        },
        Ar = {
          prefix: "fas",
          iconName: "address-card",
          icon: [
            576,
            512,
            [62140, "contact-card", "vcard"],
            "f2bb",
            "M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm96-96c0 35.3-28.7 64-64 64s-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64zm128-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z",
          ],
        },
        wr = {
          prefix: "fas",
          iconName: "cube",
          icon: [
            512,
            512,
            [],
            "f1b2",
            "M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6V377.4c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4V134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1v-188L288 246.6v188z",
          ],
        },
        kr = {
          prefix: "fas",
          iconName: "circle-question",
          icon: [
            512,
            512,
            [62108, "question-circle"],
            "f059",
            "M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z",
          ],
        },
        Sr = {
          prefix: "fas",
          iconName: "basket-shopping",
          icon: [
            576,
            512,
            ["shopping-basket"],
            "f291",
            "M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512H430c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.4L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192H171.7L253.3 35.1zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16z",
          ],
        },
        Nr = {
          prefix: "fas",
          iconName: "user-doctor",
          icon: [
            448,
            512,
            ["user-md"],
            "f0f0",
            "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-96 55.2C54 332.9 0 401.3 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-81-54-149.4-128-171.1V362c27.6 7.1 48 32.2 48 62v40c0 8.8-7.2 16-16 16H336c-8.8 0-16-7.2-16-16s7.2-16 16-16V424c0-17.7-14.3-32-32-32s-32 14.3-32 32v24c8.8 0 16 7.2 16 16s-7.2 16-16 16H256c-8.8 0-16-7.2-16-16V424c0-29.8 20.4-54.9 48-62V304.9c-6-.6-12.1-.9-18.3-.9H178.3c-6.2 0-12.3 .3-18.3 .9v65.4c23.1 6.9 40 28.3 40 53.7c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.4 16.9-46.8 40-53.7V311.2zM144 448c13.3 0 24-10.7 24-24s-10.7-24-24-24s-24 10.7-24 24s10.7 24 24 24z",
          ],
        },
        zr = {
          prefix: "fas",
          iconName: "flask",
          icon: [
            448,
            512,
            [],
            "f0c3",
            "M288 0H160 128C110.3 0 96 14.3 96 32s14.3 32 32 32V196.8c0 11.8-3.3 23.5-9.5 33.5L10.3 406.2C3.6 417.2 0 429.7 0 442.6C0 480.9 31.1 512 69.4 512H378.6c38.3 0 69.4-31.1 69.4-69.4c0-12.8-3.6-25.4-10.3-36.4L329.5 230.4c-6.2-10.1-9.5-21.7-9.5-33.5V64c17.7 0 32-14.3 32-32s-14.3-32-32-32H288zM192 196.8V64h64V196.8c0 23.7 6.6 46.9 19 67.1L309.5 320h-171L173 263.9c12.4-20.2 19-43.4 19-67.1z",
          ],
        },
        Cr = {
          prefix: "fas",
          iconName: "calculator",
          icon: [
            384,
            512,
            [128425],
            "f1ec",
            "M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM96 64H288c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zM64 224c0-17.7 14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32zm32 64c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32zM64 416c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32zM160 320c0-17.7 14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32zM288 192c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32zM256 320c0-17.7 14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32zm32 64c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32z",
          ],
        },
        Er = {
          prefix: "fas",
          iconName: "link",
          icon: [
            640,
            512,
            [128279, "chain"],
            "f0c1",
            "M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z",
          ],
        },
        Pr = {
          prefix: "fas",
          iconName: "magnifying-glass",
          icon: [
            512,
            512,
            [128269, "search"],
            "f002",
            "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z",
          ],
        },
        Or = {
          prefix: "fas",
          iconName: "building-columns",
          icon: [
            512,
            512,
            ["bank", "institution", "museum", "university"],
            "f19c",
            "M243.4 2.6l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160v8c0 13.3 10.7 24 24 24H456c13.3 0 24-10.7 24-24v-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8.1-3.4-17.2-3.4-25.2 0zM128 224H64V420.3c-.6 .3-1.2 .7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512H480c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1V224H384V416H344V224H280V416H232V224H168V416H128V224zm128-96c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z",
          ],
        },
        Mr = {
          prefix: "fas",
          iconName: "graduation-cap",
          icon: [
            640,
            512,
            [127891, "mortar-board"],
            "f19d",
            "M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z",
          ],
        },
        _r = (0, Te.jsx)(pr, { icon: vr }),
        Tr = (0, Te.jsx)(pr, { icon: zr }),
        Dr = (0, Te.jsx)(pr, { icon: Sr }),
        Lr = (0, Te.jsx)(pr, { icon: kr }),
        Fr = (0, Te.jsx)(pr, { icon: gr }),
        Rr = (0, Te.jsx)(pr, { icon: yr }),
        Ir = (0, Te.jsx)(pr, { icon: Cr }),
        Br = (0, Te.jsx)(pr, { icon: Or }),
        Vr = (0, Te.jsx)(pr, { icon: Er }),
        Ur = (0, Te.jsx)(pr, { icon: jr }),
        Hr = (0, Te.jsx)(pr, { icon: br }),
        qr = (0, Te.jsx)(pr, { icon: Ar }),
        Wr = {
          index: "/",
          proiecte: {
            index: "proiecte/",
            artisticAnatomy: { index: "artistic-anatomy/" },
            cord: { index: "cord/" },
            dmp: { index: "disaster-medicine-preparedness/" },
            doneazaSange: { index: "doneaza-sange-fii-erou/" },
            foculViu: { index: "focul-viu/" },
            heart: { index: "heart/" },
            impreunaPentruSanatate: { index: "impreuna-pentru-sanatate/" },
            medfolk: { index: "medfolk/" },
            medicalis: { index: "medicalis/" },
            mre: { index: "medical-research-education/" },
            mediciPentruTine: { index: "medici-pentru-tine/" },
            medstic: { index: "medstic/" },
            medstrings: { index: "medstrings-orchestra/" },
            miciiSanitari: { index: "micii-sanitari/" },
            dans: { index: "sanatate-in-pasi-de-dans/" },
            roadSafety: { index: "road-safety/" },
            schimburiInternationale: { index: "schimburi-internationale/" },
            scora: { index: "scora/" },
            sport: { index: "sport-pentru-sanatate/" },
            teddyBearHospital: { index: "teddy-bear-hospital/" },
            transmed: { index: "transmed/" },
            tpng: { index: "tutori-pentru-noua-generatie/" },
            twinning: { index: "twinning/" },
            vadVoci: { index: "vad-voci/" },
            zem: { index: "zilele-educatiei-medicale/" },
          },
          evenimente: { index: "evenimente/" },
          shop: { index: "shop/" },
          resurse: {
            index: "resurse/",
            regulamente: {
              index: "regulamente/",
              osm: { index: "osm/" },
              deplasariExterne: { index: "deplasari-externe/" },
              carta: { index: "carta/" },
            },
            ghiduri: {
              index: "ghiduri/",
              erasmus: { index: "erasmus/" },
              licenta: { index: "licenta/" },
              boboc: { index: "boboc/" },
            },
            legaturiExterne: { index: "links/" },
            calculatorMedie: { index: "calculator-medie/" },
            amfiteatreSali: {
              index: "amfiteatre-sali/",
              aleman: {
                index: "aleman/",
                maps: "https://goo.gl/maps/Y83tYfYBAGFtM4Jz5",
                model3d:
                  "https://panocube.ro/umf/#ut-portfolio-details-wrap-6185",
              },
              anatomie: {
                index: "anatomie/",
                maps: "https://goo.gl/maps/eHV4HqC2q1cu6ccUA",
                model3d: "",
              },
              anatomiePatologica: {
                index: "anatomie-patologica/",
                maps: "https://goo.gl/maps/eHV4HqC2q1cu6ccUA",
                model3d: "",
              },
              bilascu: {
                index: "bilascu/",
                maps: "https://goo.gl/maps/ACb2dVRYnUrVYs3P8",
                model3d: "",
              },
              opris: {
                index: "opris/",
                maps: "https://goo.gl/maps/Y83tYfYBAGFtM4Jz5",
                model3d:
                  "https://panocube.ro/umf/#ut-portfolio-details-wrap-6185",
              },
              cucuianuMantaPreda: {
                index: "cucuianu-manta-preda/",
                maps: "https://goo.gl/maps/a6MwbdAxxsqfmX599",
                model3d:
                  "https://panocube.ro/umf/#ut-portfolio-details-wrap-6185",
              },
              dermatologie: {
                index: "dermatologie/",
                maps: "https://goo.gl/maps/ygscj9HTapJ3TkNS9",
                model3d:
                  "https://panocube.ro/umf/#ut-portfolio-details-wrap-6185",
              },
              dorofteiu: {
                index: "dorofteiu/",
                maps: "https://goo.gl/maps/yqtBmKpGGbrk4Dnt7",
                model3d: "",
              },
              fiziologie: {
                index: "fiziologie/",
                maps: "https://goo.gl/maps/ctkiWT7VSDDCyHY79",
                model3d: "",
              },
              chirurgie1: {
                index: "chirurgie-1/",
                maps: "https://goo.gl/maps/Qf5GZBFGAkRnWheL9",
                model3d: "",
              },
              infectioase: {
                index: "infectioase/",
                maps: "https://goo.gl/maps/pEpEuqVRisVEiw8r6",
                model3d: "",
              },
              medicala1: {
                index: "medicala-1/",
                maps: "https://goo.gl/maps/xj7bnZgf9EUeDN2L9",
                model3d: "",
              },
              minea: {
                index: "minea/",
                maps: "https://goo.gl/maps/McMAHQkwpiqxKiV4A",
                model3d: "",
              },
              popper: {
                index: "popper/",
                maps: "https://goo.gl/maps/GYJDgrP95RcXMfgdA",
                model3d:
                  "https://panocube.ro/umf/#ut-portfolio-details-wrap-6185",
              },
              radiologie: {
                index: "radiologie/",
                maps: "https://goo.gl/maps/741Wj4PVDjuYJxYx8",
                model3d: "",
              },
              recuperare: {
                index: "recuperare/",
                maps: "https://goo.gl/maps/zuhUyZAxngBnRsrV7",
                model3d: "",
              },
              simiti: {
                index: "simiti/",
                maps: "https://goo.gl/maps/B4bEobbZJbnoRdYK7",
                model3d: "",
              },
              cabinetBabes: {
                index: "cabinet-babes/",
                maps: "https://goo.gl/maps/mpN4r9DPtzej88iy6",
                model3d: "",
              },
              cabinetHasdeu: {
                index: "cabinet-hasdeu/",
                maps: "https://goo.gl/maps/4dKjV4nfaNjbu2EVA",
                model3d: "",
              },
              casierie: {
                index: "casierie/",
                maps: "https://goo.gl/maps/D8hoosHknTnUFcC68",
                model3d: "",
              },
              labBiofizica: {
                index: "laborator-biofizica/",
                maps: "https://goo.gl/maps/42ZMsQ9Ke7eX9wtYA",
                model3d: "",
              },
              labBiocel: {
                index: "laborator-biologie-celulara/",
                maps: "https://goo.gl/maps/epEFgWUfzGq8PKhx8",
                model3d: "",
              },
              labBiostat: {
                index: "laborator-biostatistica/",
                maps: "https://goo.gl/maps/V8RQ2ahWVwwxDKD18",
                model3d: "",
              },
              registratura: {
                index: "registratura/",
                maps: "https://goo.gl/maps/D8hoosHknTnUFcC68",
                model3d:
                  "https://panocube.ro/umf/#ut-portfolio-details-wrap-6185",
              },
              multimedia: {
                index: "multimedia/",
                maps: "https://goo.gl/maps/CghiRY74VPXdzEst8",
                model3d:
                  "https://panocube.ro/umf/#ut-portfolio-details-wrap-6185",
              },
              genetica: {
                index: "genetica/",
                maps: "https://goo.gl/maps/42ZMsQ9Ke7eX9wtYA",
                model3d: "",
              },
              medicala2: {
                index: "medicala2/",
                maps: "https://goo.gl/maps/KdM13nc45VmfEnYcA",
                model3d: "",
              },
              moldovan: {
                index: "moldovan/",
                maps: "https://goo.gl/maps/3hpTGbcH1BAC4AEC7",
                model3d:
                  "https://panocube.ro/umf/#ut-portfolio-details-wrap-6185",
              },
              ofta: {
                index: "oftalmologie/",
                maps: "https://goo.gl/maps/DUxGDXwYFJhrQ7y99",
                model3d: "",
              },
              gine1: {
                index: "ginecologie1/",
                maps: "https://goo.gl/maps/5jt9UPPr4HdCFYFRA",
                model3d: "",
              },
            },
            faq: { index: "faq/" },
          },
          echipa: { index: "echipa/" },
          parteneri: { index: "parteneri-sponsori/" },
          contact: { index: "contact/" },
        },
        Yr = "http://www.umfcluj.ro/",
        Qr = "https://infostud.umfcluj.ro/INFOSTUD/faces/Login.xhtml",
        Gr =
          "https://digital.umfcluj.ro/jobrouter/index.php?cmd=PublicStart&ps=78fce30258b09d55905bdaace01fe779&username=webuser&fbclid=IwAR3jx8vROfTJp7EdYSkT6iTQU4q_4Xh1J1p0MXEOerkYB1Va0M-4b-wX_xE",
        Xr = {
          facebook: "https://www.facebook.com/OSMCluj",
          instagram: "https://www.instagram.com/osm_cluj",
          youtube: "https://www.youtube.com/c/OSMClujNapoca",
        },
        $r = {
          proiecte: {
            sumarry:
              "https://api.osmcluj.ro/src/crud_s/osm_projects/index.php?q=all",
            detail:
              "https://api.osmcluj.ro/src/crud_s/osm_projects/index.php?q=one&id=",
            random:
              "https://api.osmcluj.ro/src/crud_s/osm_projects/index.php?q=six",
          },
          evenimente:
            "https://api.osmcluj.ro/src/crud_s/osm_events/index.php?q=all",
        };
      var Kr = function (e) {
          var n = e.isVisible,
            a = e.setVisibility,
            r = ce();
          return (
            (0, t.useEffect)(
              function () {
                a(!1);
              },
              [r, a]
            ),
            (0, Te.jsx)("div", {
              className: n ? "nav-menu expanded" : "nav-menu colapsed",
              onMouseEnter: function (e) {
                a(!0);
              },
              onMouseLeave: function (e) {
                a(!1);
              },
              children: (0, Te.jsxs)("ul", {
                className: "nav-menu-dropdown list-container flex column",
                onClick: function () {
                  return a(!1);
                },
                children: [
                  (0, Te.jsx)(Le, {
                    title: "Evenimente",
                    icon: _r,
                    href: Wr.evenimente.index,
                  }),
                  (0, Te.jsx)(Le, {
                    title: "Proiecte",
                    icon: Tr,
                    href: Wr.proiecte.index,
                    top: 77,
                  }),
                  (0, Te.jsx)(Le, {
                    title: "Shop",
                    icon: Dr,
                    href: Wr.shop.index,
                  }),
                  (0, Te.jsx)("hr", {}),
                  (0, Te.jsx)(Le, {
                    title: "FAQ",
                    icon: Lr,
                    href: Wr.resurse.faq.index,
                  }),
                  (0, Te.jsx)(Le, {
                    title: "Ghiduri",
                    icon: Fr,
                    href: Wr.resurse.ghiduri.index,
                    top: 180,
                  }),
                  (0, Te.jsx)(Le, {
                    title: "Regulamente",
                    icon: Rr,
                    href: Wr.resurse.regulamente.index,
                    top: 208,
                  }),
                  (0, Te.jsx)(Le, {
                    title: "Calculator medie",
                    icon: Ir,
                    href: Wr.resurse.calculatorMedie.index,
                  }),
                  (0, Te.jsx)(Le, {
                    title: "Amfiteatre \u0219i s\u0103li",
                    icon: Br,
                    href: Wr.resurse.amfiteatreSali.index,
                  }),
                  (0, Te.jsx)(Fe, {
                    title: "Catalog Emsys",
                    icon: Vr,
                    href: Qr,
                  }),
                  (0, Te.jsx)(Le, {
                    title: "Leg\u0103turi externe",
                    icon: Vr,
                    href: Wr.resurse.legaturiExterne.index,
                    top: 320,
                  }),
                  (0, Te.jsx)("hr", {}),
                  (0, Te.jsx)(Le, {
                    title: "Parteneri \u0219i Sponsori",
                    icon: Ur,
                    href: Wr.parteneri.index,
                  }),
                  (0, Te.jsx)(Le, {
                    title: "Echipa",
                    icon: Hr,
                    href: Wr.echipa.index,
                  }),
                  (0, Te.jsx)(Le, {
                    title: "Contact",
                    icon: qr,
                    href: Wr.contact.index,
                  }),
                ],
              }),
            })
          );
        },
        Zr = n.p + "static/media/banner-edited.26a7f286d4cfe16227fd.png";
      var Jr = function (e) {
          var n = o((0, t.useState)(!1), 2),
            a = n[0],
            r = n[1],
            i = !1;
          return (
            window.innerWidth < 600 && (i = !0),
            window.innerHeight < 800 && (i = !0),
            (0, Te.jsxs)(Te.Fragment, {
              children: [
                (0, Te.jsxs)("div", {
                  id: "navigation",
                  children: [
                    (0, Te.jsxs)("div", {
                      className: "container flex row",
                      children: [
                        (0, Te.jsx)(Me, {
                          to: "/",
                          children: (0, Te.jsx)("div", {
                            className: "logo-container flex",
                            children: (0, Te.jsx)("img", {
                              src: Zr,
                              alt: "logo",
                            }),
                          }),
                        }),
                        (0, Te.jsx)("div", {
                          className: "links-container small flex row",
                          children: (0, Te.jsx)(De, {
                            padding: "50px",
                            href: Wr.evenimente.index,
                            highlight: !0,
                            children: "Evenimente",
                          }),
                        }),
                        (0, Te.jsx)("div", {
                          className: "menu-icon-container flex",
                          onMouseEnter: function (e) {
                            i || r(!0);
                          },
                          onMouseLeave: function (e) {
                            r(!1);
                          },
                          onClick: function (e) {
                            i && (r(!a), window.scrollTo(0, 0));
                          },
                          children: (0, Te.jsx)("img", {
                            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABmJLR0QA/wD/AP+gvaeTAAAQ8UlEQVR4nO3daexlZ13A8e/MtIXSFYXa0lZkbcuiKLuiBcoeo9gaRbAsBlHRmBgT8IVoTBCJiUtcMCxGIy1LLIu4l5ayCIW6YBHoFFER2rJUhG4s0pn64phApLRM53/uc++5n8+b9uU3mX/O87vPOec5BQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADASu0aHcBtdvvquOqI6g6DW4Dtc0P1uepT1RcGt3AbGAA2w+2rh1ePqh5S3bu6a7V7ZBRAtb/6z+ry6pLqouri6osjo7h1BoD1tad6XHV29eTq8LE5AF+3z1VvqM6p3lztG5vDzTEArJ/DqqdUL6juObgF4GD9Z/Vb1cuqzw9u4SsYANbHrqZf+y+uThjcArDTrqyeV71qdAgTA8B6uFf18ur00SEAM7uoek714dEh284AMN6Z1R9Wx44OAViR66qfqF49OmSb7RkdsMV2N90X+82mp/wBtsXtqrOqo5seEmQAA8AYh1V/Uj17dAjAQA9vugX6502vE7JCbgGs3p7qvKZX+wCo11c/lNcFV8oOwGrtql5aPXV0CMAaOa06vvqL0SHbxACwWs+rnj86AmANPbDp4cCLR4dsC7cAVueh1TuqQ0eHAKypL1WPrN41OmQbGABW48jq/U3n9wPwtf1Hdb+m44SZkVsAq/HC6kmjIwA2wB2bfpy+ZXTI0tkBmN9p1aXZ+gf4ev1Pdf/qQ6NDlswOwPx+p/q20REAG2RPdUz1xtEhS2YHYF73qPZWh4wOAdgw+5p2UP91dMhS7R4dsHA/m8Uf4LbYU/3U6IglswMwn0OqK6pvGh0CsKE+VZ1Y3Tg6ZInsAMznCVn8AQ7GcdVjR0cslQFgPk8cHQCwAK6lMzEAzOfRowMAFsC1dCaeAZjHcdUnR0cALMBNTdfU/xodsjR2AOZxn9EBAAuxq+l1QHaYAWAep4wOAFgQ19QZGADmcbfRAQALcvfRAUtkAJjHUaMDABbk6NEBS2QAmIcBAGDnuKbOwAAwD8f/AuwcX1OdgQFgHjeMDgBYkOtGByyRAWAe/lgBdo5r6gwMAPP41OgAgAVxTZ2BAWAel48OAFiQvaMDlsgAMA8DAMDO+dDogCXyLYB57Gk6t/rY0SEAG+6z1Z2qfaNDlsYOwDz2Ve8YHQGwABdl8Z+FAWA+F4wOAFiAt4wOWCq3AOZzl+qjTbcDADhw+6qTqk+MDlkiOwDzuSqTK8DBOD+L/2wMAPN62egAgA32itEBS+YWwLx2V++r7js6BGDDXFbdr9o/OmSp7ADMa3/166MjADbQC7P4z8oOwPx2V++sHjY6BGBD/H3TNdMAMCMDwGo8sHpP3ggAuDX7qgdX7x0dsnQWpNX4eHV49YjRIQBr7kXVq0ZHbAM7AKtzSNOJVoYAgJv39uqM6sbRIdvAALBaJ1UX/99/Afiyj1YPbzpDhRXwFsBqXVE9vvrv0SEAa+TT1ROy+K+UAWD1Plg9KUMAQE2L/xOb3vtnhdwCGOe06m+rk0eHAAxyVdMv/38ZHbKN7ACMc1nT/a6/Gx0CMMDbml73s/gP4jXAsa6rXlkdWn1nBjJg+fY1ver3Y9W1g1u2mlsA6+MB1UuadgUAlugfq+dWl4wOwS/OdfLPTWcEPL3aO7gFYCd9sHpa05a/xX9N2AFYT7urM6tnV4/JrRpg8+yrzm/6pO8bc67/2jEArL8TqrOaBoHTq2PH5gB8TZ9perjvgup11SfG5nBLDACbZU91z6ZXCO9dHVcdVR2T2znA6uyvrml6iO/q6vKmW5cfbvrlDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALPbNTqA2+T46tTqztXR1RHV4UOLgG3y+eqG6trq6uqy6pNDizhgBoD1t6t6SHVG9ajqwdUxQ4sAvto11SXVRdWF1d9XNw0t4hYZANbX3apnVmf/3/8DbJJ/r15Z/XH1kcEt3AwDwPq5b/X86keqQwa3ABys/dXrql9uulXAmjAArI9jq1+pfrraM7gFYKftr86tfq769OAWMgCsizOrP6iOGx0CMLNPVD9Z/dnokG23e3TAlju0enF1XhZ/YDscX72xeml12OCWrWYHYJxjqzdV3z06BGCQt1Xf3/QGAStmABjjhOpvqm8dHQIw2KXVE5puDbBCBoDVO6Zp6v220SEAa+ID1fdU/z06ZJt4BmC17lD9dRZ/gK9036aHAp1oukJeN1utl1ffOzoCYA19c9MDgm8aHbItDACr88ymgzAAuHnf0XSC4PtGh2wDzwCsxsnVB6sjR4cArLlrq9Oqq0aHLJ1nAFbjt7L4A3w9jq5+Y3TENrADML8zqgtGRwBsmEdVbx0dsWR2AOb3S6MDADbQC0YHLJ0dgHk9onrH6AiADfVd1btGRyyVHYB5PXd0AMAG+6nRAUtmB2A+R1cfbzr8B4ADd0PT0enXjQ5ZIjsA83lyFn+Ag3FE9X2jI5bKADCfx40OAFiAx44OWCq3AOZzRXXi6AiADXdlddLoiCWyAzCPb8niD7ATTmz6TgA7zAAwj9NGBwAsyKmjA5bIADCPU0YHACyIa+oMDADzsP0PsHNOHh2wRAaAeRw1OgBgQXxMbQYGgHn4YwXYOX5UzcAAAABbyAAwj+tHBwAsiKOAZ2AAmIc/VoCd40fVDAwA87hydADAgnxsdMASGQDmsXd0AMCCuKbOwAAwD3+sADvn8tEBS+RjQPPxMSCAg/exfAtgFnYA5nPR6ACABbhwdMBSGQDmc/7oAIAFePPogKVyC2A+R1Yfz6mAALfVDdXxeQ1wFnYA5nN99abREQAb7PVZ/GdjAJjX748OANhgLxkdsGQGgHm9q3rr6AiADXRB9e7REUvmGYD5PTJvBAAcqO+p3jE6YsnsAMzvrdWfjo4A2CCvyuI/OzsAq3FidVm+aQ1wa66pTmt6i4oZ2QFYjSur54yOANgAP5PFfyX2jA7YIu+v7lp9++gQgDX1supFoyO2hVsAq3V406lW3zU6BGDNvL16fPWF0SHbwgCwesc0PRj4gNEhAGvi/U1P/X9mdMg28QzA6l1TPbG6dHQIwBp4b/WYLP4rZwAY4xPV6TkkCNhub2k6K+WTo0O2kYcAx/lidW51U9PWl9sxwLa4qfrd6hnV5wa3bC2Lznr4vuqlTV+9Aliyq5pei/7L0SHbzg7Aeri8ekV1h+pBuTUDLM+N1e9VZzU99MdgdgDWz92r51fPqg4d3AJwsL5Uvab61aYfO6wJA8D6umv1zOrs6h6DWwAO1L9W51R/XH10cAs3wwCw/nZVD6zOqB5dPbi649AigK/2meqSpif7L6z+cWwOt8YAsJmOq05pemjwqOrIplMGAVbh89X11XVNrzXvra4eWgQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMDW2TU6gAOypzqlOrW6d3Xn6sjq2PxbAqtzU/XZ6vrq6uryam/1oWrfwC4OgEVj/Z1Y/WB1RnV6dfTYHICv6Zrq7dUF1XnVVWNzuCUGgPW0pzqrenbTwr97bA7AAdtXXVi9onpdtX9sDv+fAWC97KmeXv1C0xY/wBLsrX6tOieDwNowAKyP76heUj10dAjATP6pem71ntEhTL84GevQ6sXVH1UnD24BmNMJ1bOqw6u3ZTdgKDsAY51cvbZ6+OgQgBV7Z/WU6orRIdvKADDOfaq/rU4aHQIwyMerJ1TvGx2yjTxdPsbDqr/L4g9stxOqi/Ls0xB2AFbvvk3vyX7D6BCANXFN0zknl44O2SYGgNU6ubq46XAfAL7siqbd0StHh2wLtwBW55Dq1Vn8AW7OSU2nBx46OmRbeA1wdV7c9MQrADfvpKYfSxeODtkGbgGsxoOqd2fgArg1+5tejb5kdMjSGQDmt7vpvv9DRocAbIh/aHozwEFBM/IMwPyekcUf4EA8qHra6IilswMwrz3VB/NhH4ADtbfptWm7ADOxAzCvs7L4A9wWp1Znjo5YMgPAvH58dADABnv26IAlcwtgPnepPpon/wFuq/3VN+dwoFnYAZjPD2XxBzgYu3MbYDYGgPmcMToAYAEePTpgqdwCmMee6r+qY0eHAGy4z1Z3qvaNDlkaOwDzOCWLP8BOOLa61+iIJTIAzOPU0QEAC3LK6IAlMgDMw7v/ADvHADADA8A8vml0AMCCHDc6YIkMAPM4cnQAwIIcNTpgiQwA8zhidADAghgAZmAAmMeNowMAFuR/RgcskQFgHteNDgBYENfUGRgA5nHt6ACABXFNnYEBYB4fGR0AsCD/MTpgiQwA87h8dADAgrimzsAAMI8PVDeNjgBYgJuqy0ZHLJEBYB5XV3tHRwAswAeaPq7GDjMAzOctowMAFsC1dCYGgPn81egAgAX469EBS7VrdMCCHVJ9rDp+dAjAhvpkdVIOV5uFHYD53Fi9ZnQEwAY7N4v/bOwAzOvuTa+vHDI6BGDDfKnpM8DOAJiJHYB5/Xt2AQBui3Oz+M/KDsD8TqneVx02OgRgQ3yxul/14dEhS7ZndMAW+HTT54EfMToEYEP8WvW60RFLZwdgNe5Qvb+62+gQgDX3b9X9q8+PDlk6zwCsxueqp+Sb1gC35EvV2Vn8V8ItgNW5sumP+nGjQwDW1M9X542O2BYGgNW6uPrG6qGjQwDWzEurF4yO2CYGgNU7v+np1tNGhwCsifOqH8tXVFfKALB6N1Wvbzre8tsHtwCMdk719Jz4t3IGgDH2V39eHVl95+AWgFF+vfrpat/okG3kNcDxfqD6w+qOo0MAVuTa6jnVa0eHbDOvAY73hurB+eY1sB3eXD0gi/9wBoD18G/VGdVTm14XBFiaj1U/3PQqtDP+14BbAOvnsKZDg36xutfgFoCD9ZHqt5te8/vC4Ba+ggFgfe2pHlP9aNNzAkeMzQH4ul3fdHvzlU23Nz3kt4YMAJvhsOph1aOrhzR9YfCueYsDGG9f06/8y6tLmhb89+To87VnANhct6vu3LQzcOTgFmD7XF/dUF3d9PleAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADglvwvlS3On/D4vcIAAAAASUVORK5CYII=",
                            alt: "logo",
                          }),
                        }),
                        (0, Te.jsxs)("div", {
                          className: "links-container flex row",
                          children: [
                            (0, Te.jsx)(De, {
                              padding: "50px",
                              href: Wr.evenimente.index,
                              highlight: !0,
                              children: "Evenimente",
                            }),
                            (0, Te.jsx)(De, {
                              padding: "50px",
                              href: Wr.resurse.index,
                              children: "Resurse",
                            }),
                            (0, Te.jsx)(De, {
                              padding: "50px",
                              href: Wr.proiecte.index,
                              children: "Proiecte",
                            }),
                            (0, Te.jsx)(De, {
                              padding: "50px",
                              href: Wr.shop.index,
                              children: "Shop",
                            }),
                            (0, Te.jsx)(De, {
                              padding: "50px",
                              href: Wr.contact.index,
                              children: "Contact",
                            }),
                          ],
                        }),
                      ],
                    }),
                    i
                      ? (0, Te.jsx)(Te.Fragment, {})
                      : (0, Te.jsx)(Kr, { isVisible: a, setVisibility: r }),
                  ],
                }),
                i
                  ? (0, Te.jsx)(Kr, { isVisible: a, setVisibility: r })
                  : (0, Te.jsx)(Te.Fragment, {}),
              ],
            })
          );
        },
        ei = {
          prefix: "fab",
          iconName: "linkedin-in",
          icon: [
            448,
            512,
            [],
            "f0e1",
            "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z",
          ],
        },
        ti = {
          prefix: "fab",
          iconName: "facebook-f",
          icon: [
            320,
            512,
            [],
            "f39e",
            "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z",
          ],
        },
        ni = {
          prefix: "fab",
          iconName: "instagram",
          icon: [
            448,
            512,
            [],
            "f16d",
            "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
          ],
        },
        ai = {
          prefix: "fab",
          iconName: "youtube",
          icon: [
            576,
            512,
            [61802],
            "f167",
            "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z",
          ],
        };
      var ri = function () {
          return (0, Te.jsxs)("div", {
            className: "media-wrapper",
            children: [
              (0, Te.jsxs)("a", {
                href: Xr.facebook,
                className: "icon facebook",
                children: [
                  (0, Te.jsx)("span", {
                    className: "tooltip",
                    children: "Facebook",
                  }),
                  (0, Te.jsx)("span", {
                    children: (0, Te.jsx)(pr, { icon: ti }),
                  }),
                ],
              }),
              (0, Te.jsxs)("a", {
                href: Xr.instagram,
                className: "icon instagram",
                children: [
                  (0, Te.jsx)("span", {
                    className: "tooltip",
                    children: "Instagram",
                  }),
                  (0, Te.jsx)("span", {
                    children: (0, Te.jsx)(pr, { icon: ni }),
                  }),
                ],
              }),
              (0, Te.jsxs)("a", {
                href: "/",
                className: "icon linkedin",
                children: [
                  (0, Te.jsx)("span", {
                    className: "tooltip",
                    children: "LinkedIn",
                  }),
                  (0, Te.jsx)("span", {
                    children: (0, Te.jsx)(pr, { icon: ei }),
                  }),
                ],
              }),
              (0, Te.jsxs)("a", {
                href: Xr.youtube,
                className: "icon youtube",
                children: [
                  (0, Te.jsx)("span", {
                    className: "tooltip",
                    children: "YouTube",
                  }),
                  (0, Te.jsx)("span", {
                    children: (0, Te.jsx)(pr, { icon: ai }),
                  }),
                ],
              }),
            ],
          });
        },
        ii = n.p + "static/media/banner-new.643b99573dc8c5133aaa.png";
      var si = function () {
        return (0, Te.jsx)("footer", {
          id: "footer",
          children: (0, Te.jsx)("div", {
            className: "main",
            children: (0, Te.jsxs)("div", {
              className: "content flex",
              children: [
                (0, Te.jsxs)("div", {
                  className: "left flex column",
                  children: [
                    (0, Te.jsx)("a", {
                      href: "./",
                      className: "logo-container flex column",
                      children: (0, Te.jsx)("img", { src: ii, alt: "logo" }),
                    }),
                    (0, Te.jsx)("div", {
                      className: "media",
                      children: (0, Te.jsx)(ri, {}),
                    }),
                  ],
                }),
                (0, Te.jsxs)("div", {
                  className: "right flex column",
                  children: [
                    (0, Te.jsxs)("div", {
                      className: "menu",
                      children: [
                        (0, Te.jsx)("div", {
                          className: "menu-section flex column",
                          children: (0, Te.jsxs)("ul", {
                            className: "flex",
                            children: [
                              (0, Te.jsx)("li", {
                                children: (0, Te.jsx)(Me, {
                                  to: Wr.parteneri.index,
                                  children: "Parteneri \u0219i sponsori",
                                }),
                              }),
                              (0, Te.jsx)("li", {
                                children: (0, Te.jsx)(Me, {
                                  to: Wr.echipa.index,
                                  children: "Consiliu director",
                                }),
                              }),
                              (0, Te.jsx)("li", {
                                children: (0, Te.jsx)(Me, {
                                  to: Wr.echipa.index,
                                  children: "Reprezentan\u021bi de an",
                                }),
                              }),
                              (0, Te.jsx)("li", {
                                children: (0, Te.jsx)(Me, {
                                  to: Wr.echipa.index,
                                  children: "Coordonatori proiecte",
                                }),
                              }),
                              (0, Te.jsx)("li", {
                                children: (0, Te.jsx)(Me, {
                                  to: "/",
                                  children:
                                    "Politica de confiden\u021bialitate",
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, Te.jsx)("div", {
                          className: "menu-section flex column right",
                          children: (0, Te.jsxs)("ul", {
                            className: "flex",
                            children: [
                              (0, Te.jsx)("li", {
                                children: (0, Te.jsx)(Me, {
                                  to: Wr.resurse.faq.index,
                                  children: "\xcentreb\u0103ri frecvente",
                                }),
                              }),
                              (0, Te.jsx)("li", {
                                children: (0, Te.jsx)(Me, {
                                  to: Wr.resurse.calculatorMedie.index,
                                  children: "Calculator medie",
                                }),
                              }),
                              (0, Te.jsx)("li", {
                                children: (0, Te.jsx)(Me, {
                                  to: Wr.resurse.amfiteatreSali.index,
                                  children: "Amfiteatre \u0219i s\u0103li",
                                }),
                              }),
                              (0, Te.jsx)("li", {
                                children: (0, Te.jsx)(Me, {
                                  to: Wr.resurse.ghiduri.index,
                                  children: "Ghiduri",
                                }),
                              }),
                              (0, Te.jsx)("li", {
                                children: (0, Te.jsx)(Me, {
                                  to: Wr.resurse.legaturiExterne.index,
                                  children: "Leg\u0103turi externe",
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, Te.jsxs)("div", {
                      className: "copyright flex column",
                      children: [
                        (0, Te.jsxs)("div", {
                          children: [
                            "\xa9 Copyright 1990 - 2022 |",
                            " ",
                            (0, Te.jsx)("i", {
                              children:
                                "Organiza\u0163ia Studen\u0163ilor Medicini\u015fti din Cluj",
                            }),
                            " | Toate drepturile rezervate",
                          ],
                        }),
                        (0, Te.jsx)("hr", {}),
                        (0, Te.jsxs)("div", {
                          children: [
                            "Dezvoltatori: ",
                            (0, Te.jsx)("i", {
                              children: "Serenus Drago\u0219",
                            }),
                            " \u0219i ",
                            (0, Te.jsx)("i", { children: "Radu Vaida" }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      };
      var oi = function () {
          return (0, Te.jsxs)(Te.Fragment, {
            children: [
              (0, Te.jsx)(Jr, {}),
              (0, Te.jsx)(ye, {}),
              (0, Te.jsx)(si, {}),
            ],
          });
        },
        li = n.p + "static/media/copertafrontpage.5b40aaa815da069ee763.jpg";
      var ci = function (e) {
        return (0, Te.jsx)("header", {
          id: "header",
          className: "flex column",
          children: (0, Te.jsx)("div", {
            className: "banner-container flex column",
            children: (0, Te.jsx)("img", { src: li, alt: "banner" }),
          }),
        });
      };
      var ui = function () {
        return (0, Te.jsx)("section", {
          id: "about",
          children: (0, Te.jsx)("div", {
            className: "main",
            children: (0, Te.jsxs)("div", {
              className: "content",
              children: [
                (0, Te.jsxs)("div", {
                  className: "container",
                  children: [
                    (0, Te.jsx)("h4", { children: "Despre noi" }),
                    (0, Te.jsx)("p", {
                      className: "left",
                      children:
                        "Fondat\u0103 \xeen anul 1990, Organiza\u021bia Studen\u021bilor Medicini\u0219ti din Cluj \u2013 OSM ap\u0103r\u0103 \u0219i reprezint\u0103 drepturile \u0219i interesele studen\u021bilor Facult\u0103\u021bii de Medicin\u0103 Cluj-Napoca de 30 de ani, fiind prima organiza\u021bie a studen\u021bilor medicini\u0219ti din Rom\xe2nia.",
                    }),
                  ],
                }),
                (0, Te.jsx)("div", {
                  className: "container",
                  children: (0, Te.jsx)("div", {
                    className: "img-container flex column",
                    children: (0, Te.jsx)("img", {
                      src: ii,
                      alt: "placeholder",
                    }),
                  }),
                }),
                (0, Te.jsxs)("div", {
                  className: "container span",
                  children: [
                    (0, Te.jsx)("p", {
                      children:
                        "Creat\u0103 cu scopul de a mijloci \xeen mod legal dialogul dintre studen\u021bi \u0219i forul academic universitar, aceasta a contribuit semnificativ la \xeembun\u0103t\u0103\u021birea vie\u021bii studen\u021be\u0219ti at\xe2t din punct de vedere al actului didactic (prin implementarea platformei de feedback didactic), c\xe2t \u0219i pe plan social (superviz\xe2nd \xeendeaproape distribuirea locurilor \xeen c\u0103mine, a taberelor de var\u0103 \u0219i multe altele pe care v\u0103 invit\u0103m s\u0103 le descoperi\u021bi pe acest site).",
                    }),
                    (0, Te.jsx)("p", {
                      children:
                        "Pe l\xe2ng\u0103 toate acestea, OSM reprezint\u0103 nevoile studentului medicinist clujean at\xe2t la nivel na\u021bional din anul 1994, prin prisma Federa\u021biei Asocia\u021biilor Studen\u021bilor Medicini\u0219ti din Rom\xe2nia \u2013 FASMR fiind, de altfel, unui dintre membrii fondatori ai acesteia. Prin intermediul FASMR pozi\u021bia studen\u021bilor medicini\u0219ti rom\xe2ni este reprezentat\u0103 \u0219i la nivelul International Federation of Medical Students\u2019 Associations \u2013 IFMSA.",
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      };
      function di() {
        di = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          a = "function" == typeof Symbol ? Symbol : {},
          r = a.iterator || "@@iterator",
          i = a.asyncIterator || "@@asyncIterator",
          s = a.toStringTag || "@@toStringTag";
        function o(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          o({}, "");
        } catch (z) {
          o = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function l(e, t, n, a) {
          var r = t && t.prototype instanceof d ? t : d,
            i = Object.create(r.prototype),
            s = new k(a || []);
          return (
            (i._invoke = (function (e, t, n) {
              var a = "suspendedStart";
              return function (r, i) {
                if ("executing" === a)
                  throw new Error("Generator is already running");
                if ("completed" === a) {
                  if ("throw" === r) throw i;
                  return N();
                }
                for (n.method = r, n.arg = i; ; ) {
                  var s = n.delegate;
                  if (s) {
                    var o = y(s, n);
                    if (o) {
                      if (o === u) continue;
                      return o;
                    }
                  }
                  if ("next" === n.method) n.sent = n._sent = n.arg;
                  else if ("throw" === n.method) {
                    if ("suspendedStart" === a)
                      throw ((a = "completed"), n.arg);
                    n.dispatchException(n.arg);
                  } else "return" === n.method && n.abrupt("return", n.arg);
                  a = "executing";
                  var l = c(e, t, n);
                  if ("normal" === l.type) {
                    if (
                      ((a = n.done ? "completed" : "suspendedYield"),
                      l.arg === u)
                    )
                      continue;
                    return { value: l.arg, done: n.done };
                  }
                  "throw" === l.type &&
                    ((a = "completed"), (n.method = "throw"), (n.arg = l.arg));
                }
              };
            })(e, n, s)),
            i
          );
        }
        function c(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (z) {
            return { type: "throw", arg: z };
          }
        }
        e.wrap = l;
        var u = {};
        function d() {}
        function f() {}
        function m() {}
        var p = {};
        o(p, r, function () {
          return this;
        });
        var h = Object.getPrototypeOf,
          v = h && h(h(S([])));
        v && v !== t && n.call(v, r) && (p = v);
        var b = (m.prototype = d.prototype = Object.create(p));
        function x(e) {
          ["next", "throw", "return"].forEach(function (t) {
            o(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function j(e, t) {
          function a(r, i, s, o) {
            var l = c(e[r], e, i);
            if ("throw" !== l.type) {
              var u = l.arg,
                d = u.value;
              return d && "object" == g(d) && n.call(d, "__await")
                ? t.resolve(d.__await).then(
                    function (e) {
                      a("next", e, s, o);
                    },
                    function (e) {
                      a("throw", e, s, o);
                    }
                  )
                : t.resolve(d).then(
                    function (e) {
                      (u.value = e), s(u);
                    },
                    function (e) {
                      return a("throw", e, s, o);
                    }
                  );
            }
            o(l.arg);
          }
          var r;
          this._invoke = function (e, n) {
            function i() {
              return new t(function (t, r) {
                a(e, n, t, r);
              });
            }
            return (r = r ? r.then(i, i) : i());
          };
        }
        function y(e, t) {
          var n = e.iterator[t.method];
          if (void 0 === n) {
            if (((t.delegate = null), "throw" === t.method)) {
              if (
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                y(e, t),
                "throw" === t.method)
              )
                return u;
              (t.method = "throw"),
                (t.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return u;
          }
          var a = c(n, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), u
            );
          var r = a.arg;
          return r
            ? r.done
              ? ((t[e.resultName] = r.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                u)
              : r
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              u);
        }
        function A(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function w(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function k(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(A, this),
            this.reset(!0);
        }
        function S(e) {
          if (e) {
            var t = e[r];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var a = -1,
                i = function t() {
                  for (; ++a < e.length; )
                    if (n.call(e, a)) return (t.value = e[a]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (i.next = i);
            }
          }
          return { next: N };
        }
        function N() {
          return { value: void 0, done: !0 };
        }
        return (
          (f.prototype = m),
          o(b, "constructor", m),
          o(m, "constructor", f),
          (f.displayName = o(m, s, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === f || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, m)
                : ((e.__proto__ = m), o(e, s, "GeneratorFunction")),
              (e.prototype = Object.create(b)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          x(j.prototype),
          o(j.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = j),
          (e.async = function (t, n, a, r, i) {
            void 0 === i && (i = Promise);
            var s = new j(l(t, n, a, r), i);
            return e.isGeneratorFunction(n)
              ? s
              : s.next().then(function (e) {
                  return e.done ? e.value : s.next();
                });
          }),
          x(b),
          o(b, s, "Generator"),
          o(b, r, function () {
            return this;
          }),
          o(b, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = [];
            for (var n in e) t.push(n);
            return (
              t.reverse(),
              function n() {
                for (; t.length; ) {
                  var a = t.pop();
                  if (a in e) return (n.value = a), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (e.values = S),
          (k.prototype = {
            constructor: k,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(w),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function a(n, a) {
                return (
                  (s.type = "throw"),
                  (s.arg = e),
                  (t.next = n),
                  a && ((t.method = "next"), (t.arg = void 0)),
                  !!a
                );
              }
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var i = this.tryEntries[r],
                  s = i.completion;
                if ("root" === i.tryLoc) return a("end");
                if (i.tryLoc <= this.prev) {
                  var o = n.call(i, "catchLoc"),
                    l = n.call(i, "finallyLoc");
                  if (o && l) {
                    if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                  } else if (o) {
                    if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var r = this.tryEntries[a];
                if (
                  r.tryLoc <= this.prev &&
                  n.call(r, "finallyLoc") &&
                  this.prev < r.finallyLoc
                ) {
                  var i = r;
                  break;
                }
              }
              i &&
                ("break" === e || "continue" === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var s = i ? i.completion : {};
              return (
                (s.type = e),
                (s.arg = t),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), u)
                  : this.complete(s)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                u
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), w(n), u;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var a = n.completion;
                  if ("throw" === a.type) {
                    var r = a.arg;
                    w(n);
                  }
                  return r;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: S(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                u
              );
            },
          }),
          e
        );
      }
      function fi(e, t, n, a, r, i, s) {
        try {
          var o = e[i](s),
            l = o.value;
        } catch (c) {
          return void n(c);
        }
        o.done ? t(l) : Promise.resolve(l).then(a, r);
      }
      function mi(e, t) {
        return function () {
          return e.apply(t, arguments);
        };
      }
      var pi,
        hi = Object.prototype.toString,
        gi = Object.getPrototypeOf,
        vi =
          ((pi = Object.create(null)),
          function (e) {
            var t = hi.call(e);
            return pi[t] || (pi[t] = t.slice(8, -1).toLowerCase());
          }),
        bi = function (e) {
          return (
            (e = e.toLowerCase()),
            function (t) {
              return vi(t) === e;
            }
          );
        },
        xi = function (e) {
          return function (t) {
            return typeof t === e;
          };
        },
        ji = Array.isArray,
        yi = xi("undefined");
      var Ai = bi("ArrayBuffer");
      var wi = xi("string"),
        ki = xi("function"),
        Si = xi("number"),
        Ni = function (e) {
          return null !== e && "object" === typeof e;
        },
        zi = function (e) {
          if ("object" !== vi(e)) return !1;
          var t = gi(e);
          return (
            (null === t ||
              t === Object.prototype ||
              null === Object.getPrototypeOf(t)) &&
            !(Symbol.toStringTag in e) &&
            !(Symbol.iterator in e)
          );
        },
        Ci = bi("Date"),
        Ei = bi("File"),
        Pi = bi("Blob"),
        Oi = bi("FileList"),
        Mi = bi("URLSearchParams");
      function _i(e, t) {
        var n,
          a,
          r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          i = r.allOwnKeys,
          s = void 0 !== i && i;
        if (null !== e && "undefined" !== typeof e)
          if (("object" !== typeof e && (e = [e]), ji(e)))
            for (n = 0, a = e.length; n < a; n++) t.call(null, e[n], n, e);
          else {
            var o,
              l = s ? Object.getOwnPropertyNames(e) : Object.keys(e),
              c = l.length;
            for (n = 0; n < c; n++) (o = l[n]), t.call(null, e[o], o, e);
          }
      }
      var Ti,
        Di =
          ((Ti = "undefined" !== typeof Uint8Array && gi(Uint8Array)),
          function (e) {
            return Ti && e instanceof Ti;
          }),
        Li = bi("HTMLFormElement"),
        Fi = (function (e) {
          var t = Object.prototype.hasOwnProperty;
          return function (e, n) {
            return t.call(e, n);
          };
        })(),
        Ri = bi("RegExp"),
        Ii = function (e, t) {
          var n = Object.getOwnPropertyDescriptors(e),
            a = {};
          _i(n, function (n, r) {
            !1 !== t(n, r, e) && (a[r] = n);
          }),
            Object.defineProperties(e, a);
        },
        Bi = {
          isArray: ji,
          isArrayBuffer: Ai,
          isBuffer: function (e) {
            return (
              null !== e &&
              !yi(e) &&
              null !== e.constructor &&
              !yi(e.constructor) &&
              ki(e.constructor.isBuffer) &&
              e.constructor.isBuffer(e)
            );
          },
          isFormData: function (e) {
            var t = "[object FormData]";
            return (
              e &&
              (("function" === typeof FormData && e instanceof FormData) ||
                hi.call(e) === t ||
                (ki(e.toString) && e.toString() === t))
            );
          },
          isArrayBufferView: function (e) {
            return "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : e && e.buffer && Ai(e.buffer);
          },
          isString: wi,
          isNumber: Si,
          isBoolean: function (e) {
            return !0 === e || !1 === e;
          },
          isObject: Ni,
          isPlainObject: zi,
          isUndefined: yi,
          isDate: Ci,
          isFile: Ei,
          isBlob: Pi,
          isRegExp: Ri,
          isFunction: ki,
          isStream: function (e) {
            return Ni(e) && ki(e.pipe);
          },
          isURLSearchParams: Mi,
          isTypedArray: Di,
          isFileList: Oi,
          forEach: _i,
          merge: function e() {
            for (
              var t = {},
                n = function (n, a) {
                  zi(t[a]) && zi(n)
                    ? (t[a] = e(t[a], n))
                    : zi(n)
                    ? (t[a] = e({}, n))
                    : ji(n)
                    ? (t[a] = n.slice())
                    : (t[a] = n);
                },
                a = 0,
                r = arguments.length;
              a < r;
              a++
            )
              arguments[a] && _i(arguments[a], n);
            return t;
          },
          extend: function (e, t, n) {
            var a =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : {},
              r = a.allOwnKeys;
            return (
              _i(
                t,
                function (t, a) {
                  n && ki(t) ? (e[a] = mi(t, n)) : (e[a] = t);
                },
                { allOwnKeys: r }
              ),
              e
            );
          },
          trim: function (e) {
            return e.trim
              ? e.trim()
              : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
          },
          stripBOM: function (e) {
            return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
          },
          inherits: function (e, t, n, a) {
            (e.prototype = Object.create(t.prototype, a)),
              (e.prototype.constructor = e),
              Object.defineProperty(e, "super", { value: t.prototype }),
              n && Object.assign(e.prototype, n);
          },
          toFlatObject: function (e, t, n, a) {
            var r,
              i,
              s,
              o = {};
            if (((t = t || {}), null == e)) return t;
            do {
              for (i = (r = Object.getOwnPropertyNames(e)).length; i-- > 0; )
                (s = r[i]),
                  (a && !a(s, e, t)) || o[s] || ((t[s] = e[s]), (o[s] = !0));
              e = !1 !== n && gi(e);
            } while (e && (!n || n(e, t)) && e !== Object.prototype);
            return t;
          },
          kindOf: vi,
          kindOfTest: bi,
          endsWith: function (e, t, n) {
            (e = String(e)),
              (void 0 === n || n > e.length) && (n = e.length),
              (n -= t.length);
            var a = e.indexOf(t, n);
            return -1 !== a && a === n;
          },
          toArray: function (e) {
            if (!e) return null;
            if (ji(e)) return e;
            var t = e.length;
            if (!Si(t)) return null;
            for (var n = new Array(t); t-- > 0; ) n[t] = e[t];
            return n;
          },
          forEachEntry: function (e, t) {
            for (
              var n, a = (e && e[Symbol.iterator]).call(e);
              (n = a.next()) && !n.done;

            ) {
              var r = n.value;
              t.call(e, r[0], r[1]);
            }
          },
          matchAll: function (e, t) {
            for (var n, a = []; null !== (n = e.exec(t)); ) a.push(n);
            return a;
          },
          isHTMLForm: Li,
          hasOwnProperty: Fi,
          hasOwnProp: Fi,
          reduceDescriptors: Ii,
          freezeMethods: function (e) {
            Ii(e, function (t, n) {
              var a = e[n];
              ki(a) &&
                ((t.enumerable = !1),
                "writable" in t
                  ? (t.writable = !1)
                  : t.set ||
                    (t.set = function () {
                      throw Error("Can not read-only method '" + n + "'");
                    }));
            });
          },
          toObjectSet: function (e, t) {
            var n = {},
              a = function (e) {
                e.forEach(function (e) {
                  n[e] = !0;
                });
              };
            return ji(e) ? a(e) : a(String(e).split(t)), n;
          },
          toCamelCase: function (e) {
            return e
              .toLowerCase()
              .replace(/[_-\s]([a-z\d])(\w*)/g, function (e, t, n) {
                return t.toUpperCase() + n;
              });
          },
          noop: function () {},
          toFiniteNumber: function (e, t) {
            return (e = +e), Number.isFinite(e) ? e : t;
          },
        };
      function Vi(e, t, n, a, r) {
        Error.call(this),
          Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = new Error().stack),
          (this.message = e),
          (this.name = "AxiosError"),
          t && (this.code = t),
          n && (this.config = n),
          a && (this.request = a),
          r && (this.response = r);
      }
      Bi.inherits(Vi, Error, {
        toJSON: function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: this.config,
            code: this.code,
            status:
              this.response && this.response.status
                ? this.response.status
                : null,
          };
        },
      });
      var Ui = Vi.prototype,
        Hi = {};
      [
        "ERR_BAD_OPTION_VALUE",
        "ERR_BAD_OPTION",
        "ECONNABORTED",
        "ETIMEDOUT",
        "ERR_NETWORK",
        "ERR_FR_TOO_MANY_REDIRECTS",
        "ERR_DEPRECATED",
        "ERR_BAD_RESPONSE",
        "ERR_BAD_REQUEST",
        "ERR_CANCELED",
        "ERR_NOT_SUPPORT",
        "ERR_INVALID_URL",
      ].forEach(function (e) {
        Hi[e] = { value: e };
      }),
        Object.defineProperties(Vi, Hi),
        Object.defineProperty(Ui, "isAxiosError", { value: !0 }),
        (Vi.from = function (e, t, n, a, r, i) {
          var s = Object.create(Ui);
          return (
            Bi.toFlatObject(
              e,
              s,
              function (e) {
                return e !== Error.prototype;
              },
              function (e) {
                return "isAxiosError" !== e;
              }
            ),
            Vi.call(s, e.message, t, n, a, r),
            (s.cause = e),
            (s.name = e.name),
            i && Object.assign(s, i),
            s
          );
        });
      var qi = Vi,
        Wi = n(7472);
      function Yi(e) {
        return Bi.isPlainObject(e) || Bi.isArray(e);
      }
      function Qi(e) {
        return Bi.endsWith(e, "[]") ? e.slice(0, -2) : e;
      }
      function Gi(e, t, n) {
        return e
          ? e
              .concat(t)
              .map(function (e, t) {
                return (e = Qi(e)), !n && t ? "[" + e + "]" : e;
              })
              .join(n ? "." : "")
          : t;
      }
      var Xi = Bi.toFlatObject(Bi, {}, null, function (e) {
        return /^is[A-Z]/.test(e);
      });
      var $i = function (e, t, n) {
        if (!Bi.isObject(e)) throw new TypeError("target must be an object");
        t = t || new (Wi || FormData)();
        var a,
          r = (n = Bi.toFlatObject(
            n,
            { metaTokens: !0, dots: !1, indexes: !1 },
            !1,
            function (e, t) {
              return !Bi.isUndefined(t[e]);
            }
          )).metaTokens,
          i = n.visitor || u,
          s = n.dots,
          o = n.indexes,
          l =
            (n.Blob || ("undefined" !== typeof Blob && Blob)) &&
            (a = t) &&
            Bi.isFunction(a.append) &&
            "FormData" === a[Symbol.toStringTag] &&
            a[Symbol.iterator];
        if (!Bi.isFunction(i))
          throw new TypeError("visitor must be a function");
        function c(e) {
          if (null === e) return "";
          if (Bi.isDate(e)) return e.toISOString();
          if (!l && Bi.isBlob(e))
            throw new qi("Blob is not supported. Use a Buffer instead.");
          return Bi.isArrayBuffer(e) || Bi.isTypedArray(e)
            ? l && "function" === typeof Blob
              ? new Blob([e])
              : Buffer.from(e)
            : e;
        }
        function u(e, n, a) {
          var i = e;
          if (e && !a && "object" === typeof e)
            if (Bi.endsWith(n, "{}"))
              (n = r ? n : n.slice(0, -2)), (e = JSON.stringify(e));
            else if (
              (Bi.isArray(e) &&
                (function (e) {
                  return Bi.isArray(e) && !e.some(Yi);
                })(e)) ||
              Bi.isFileList(e) ||
              (Bi.endsWith(n, "[]") && (i = Bi.toArray(e)))
            )
              return (
                (n = Qi(n)),
                i.forEach(function (e, a) {
                  !Bi.isUndefined(e) &&
                    t.append(
                      !0 === o ? Gi([n], a, s) : null === o ? n : n + "[]",
                      c(e)
                    );
                }),
                !1
              );
          return !!Yi(e) || (t.append(Gi(a, n, s), c(e)), !1);
        }
        var d = [],
          f = Object.assign(Xi, {
            defaultVisitor: u,
            convertValue: c,
            isVisitable: Yi,
          });
        if (!Bi.isObject(e)) throw new TypeError("data must be an object");
        return (
          (function e(n, a) {
            if (!Bi.isUndefined(n)) {
              if (-1 !== d.indexOf(n))
                throw Error("Circular reference detected in " + a.join("."));
              d.push(n),
                Bi.forEach(n, function (n, r) {
                  !0 ===
                    (!Bi.isUndefined(n) &&
                      i.call(t, n, Bi.isString(r) ? r.trim() : r, a, f)) &&
                    e(n, a ? a.concat(r) : [r]);
                }),
                d.pop();
            }
          })(e),
          t
        );
      };
      function Ki(e) {
        var t = {
          "!": "%21",
          "'": "%27",
          "(": "%28",
          ")": "%29",
          "~": "%7E",
          "%20": "+",
          "%00": "\0",
        };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
          return t[e];
        });
      }
      function Zi(e, t) {
        (this._pairs = []), e && $i(e, this, t);
      }
      var Ji = Zi.prototype;
      (Ji.append = function (e, t) {
        this._pairs.push([e, t]);
      }),
        (Ji.toString = function (e) {
          var t = e
            ? function (t) {
                return e.call(this, t, Ki);
              }
            : Ki;
          return this._pairs
            .map(function (e) {
              return t(e[0]) + "=" + t(e[1]);
            }, "")
            .join("&");
        });
      var es = Zi;
      function ts(e) {
        return encodeURIComponent(e)
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",")
          .replace(/%20/g, "+")
          .replace(/%5B/gi, "[")
          .replace(/%5D/gi, "]");
      }
      function ns(e, t, n) {
        if (!t) return e;
        var a = e.indexOf("#");
        -1 !== a && (e = e.slice(0, a));
        var r = (n && n.encode) || ts,
          i = Bi.isURLSearchParams(t) ? t.toString() : new es(t, n).toString(r);
        return i && (e += (-1 === e.indexOf("?") ? "?" : "&") + i), e;
      }
      var as = (function () {
          function e() {
            c(this, e), (this.handlers = []);
          }
          return (
            d(e, [
              {
                key: "use",
                value: function (e, t, n) {
                  return (
                    this.handlers.push({
                      fulfilled: e,
                      rejected: t,
                      synchronous: !!n && n.synchronous,
                      runWhen: n ? n.runWhen : null,
                    }),
                    this.handlers.length - 1
                  );
                },
              },
              {
                key: "eject",
                value: function (e) {
                  this.handlers[e] && (this.handlers[e] = null);
                },
              },
              {
                key: "clear",
                value: function () {
                  this.handlers && (this.handlers = []);
                },
              },
              {
                key: "forEach",
                value: function (e) {
                  Bi.forEach(this.handlers, function (t) {
                    null !== t && e(t);
                  });
                },
              },
            ]),
            e
          );
        })(),
        rs = {
          silentJSONParsing: !0,
          forcedJSONParsing: !0,
          clarifyTimeoutError: !1,
        },
        is = "undefined" !== typeof URLSearchParams ? URLSearchParams : es,
        ss = FormData,
        os = (function () {
          var e;
          return (
            ("undefined" === typeof navigator ||
              ("ReactNative" !== (e = navigator.product) &&
                "NativeScript" !== e &&
                "NS" !== e)) &&
            "undefined" !== typeof window &&
            "undefined" !== typeof document
          );
        })(),
        ls = {
          isBrowser: !0,
          classes: { URLSearchParams: is, FormData: ss, Blob: Blob },
          isStandardBrowserEnv: os,
          protocols: ["http", "https", "file", "blob", "url", "data"],
        };
      var cs = function (e) {
        function t(e, n, a, r) {
          var i = e[r++],
            s = Number.isFinite(+i),
            o = r >= e.length;
          return (
            (i = !i && Bi.isArray(a) ? a.length : i),
            o
              ? (Bi.hasOwnProp(a, i) ? (a[i] = [a[i], n]) : (a[i] = n), !s)
              : ((a[i] && Bi.isObject(a[i])) || (a[i] = []),
                t(e, n, a[i], r) &&
                  Bi.isArray(a[i]) &&
                  (a[i] = (function (e) {
                    var t,
                      n,
                      a = {},
                      r = Object.keys(e),
                      i = r.length;
                    for (t = 0; t < i; t++) a[(n = r[t])] = e[n];
                    return a;
                  })(a[i])),
                !s)
          );
        }
        if (Bi.isFormData(e) && Bi.isFunction(e.entries)) {
          var n = {};
          return (
            Bi.forEachEntry(e, function (e, a) {
              t(
                (function (e) {
                  return Bi.matchAll(/\w+|\[(\w*)]/g, e).map(function (e) {
                    return "[]" === e[0] ? "" : e[1] || e[0];
                  });
                })(e),
                a,
                n,
                0
              );
            }),
            n
          );
        }
        return null;
      };
      var us = ls.isStandardBrowserEnv
        ? {
            write: function (e, t, n, a, r, i) {
              var s = [];
              s.push(e + "=" + encodeURIComponent(t)),
                Bi.isNumber(n) &&
                  s.push("expires=" + new Date(n).toGMTString()),
                Bi.isString(a) && s.push("path=" + a),
                Bi.isString(r) && s.push("domain=" + r),
                !0 === i && s.push("secure"),
                (document.cookie = s.join("; "));
            },
            read: function (e) {
              var t = document.cookie.match(
                new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
              );
              return t ? decodeURIComponent(t[3]) : null;
            },
            remove: function (e) {
              this.write(e, "", Date.now() - 864e5);
            },
          }
        : {
            write: function () {},
            read: function () {
              return null;
            },
            remove: function () {},
          };
      function ds(e, t) {
        return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
          ? (function (e, t) {
              return t
                ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "")
                : e;
            })(e, t)
          : t;
      }
      var fs = ls.isStandardBrowserEnv
        ? (function () {
            var e,
              t = /(msie|trident)/i.test(navigator.userAgent),
              n = document.createElement("a");
            function a(e) {
              var a = e;
              return (
                t && (n.setAttribute("href", a), (a = n.href)),
                n.setAttribute("href", a),
                {
                  href: n.href,
                  protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                  host: n.host,
                  search: n.search ? n.search.replace(/^\?/, "") : "",
                  hash: n.hash ? n.hash.replace(/^#/, "") : "",
                  hostname: n.hostname,
                  port: n.port,
                  pathname:
                    "/" === n.pathname.charAt(0)
                      ? n.pathname
                      : "/" + n.pathname,
                }
              );
            }
            return (
              (e = a(window.location.href)),
              function (t) {
                var n = Bi.isString(t) ? a(t) : t;
                return n.protocol === e.protocol && n.host === e.host;
              }
            );
          })()
        : function () {
            return !0;
          };
      function ms(e, t, n) {
        qi.call(this, null == e ? "canceled" : e, qi.ERR_CANCELED, t, n),
          (this.name = "CanceledError");
      }
      Bi.inherits(ms, qi, { __CANCEL__: !0 });
      var ps = ms;
      var hs = Bi.toObjectSet([
          "age",
          "authorization",
          "content-length",
          "content-type",
          "etag",
          "expires",
          "from",
          "host",
          "if-modified-since",
          "if-unmodified-since",
          "last-modified",
          "location",
          "max-forwards",
          "proxy-authorization",
          "referer",
          "retry-after",
          "user-agent",
        ]),
        gs = Symbol("internals"),
        vs = Symbol("defaults");
      function bs(e) {
        return e && String(e).trim().toLowerCase();
      }
      function xs(e) {
        return !1 === e || null == e ? e : String(e);
      }
      function js(e, t, n, a) {
        return Bi.isFunction(a)
          ? a.call(this, t, n)
          : Bi.isString(t)
          ? Bi.isString(a)
            ? -1 !== t.indexOf(a)
            : Bi.isRegExp(a)
            ? a.test(t)
            : void 0
          : void 0;
      }
      function ys(e, t) {
        t = t.toLowerCase();
        for (var n, a = Object.keys(e), r = a.length; r-- > 0; )
          if (t === (n = a[r]).toLowerCase()) return n;
        return null;
      }
      function As(e, t) {
        e && this.set(e), (this[vs] = t || null);
      }
      Object.assign(As.prototype, {
        set: function (e, t, n) {
          var a = this;
          function r(e, t, n) {
            var r = bs(t);
            if (!r) throw new Error("header name must be a non-empty string");
            var i = ys(a, r);
            (!i || !0 === n || (!1 !== a[i] && !1 !== n)) &&
              ((e = Bi.isArray(e) ? e.map(xs) : xs(e)), (a[i || t] = e));
          }
          return (
            Bi.isPlainObject(e)
              ? Bi.forEach(e, function (e, n) {
                  r(e, n, t);
                })
              : r(t, e, n),
            this
          );
        },
        get: function (e, t) {
          if ((e = bs(e))) {
            var n = ys(this, e);
            if (n) {
              var a = this[n];
              if (!t) return a;
              if (!0 === t)
                return (function (e) {
                  for (
                    var t,
                      n = Object.create(null),
                      a = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                    (t = a.exec(e));

                  )
                    n[t[1]] = t[2];
                  return n;
                })(a);
              if (Bi.isFunction(t)) return t.call(this, a, n);
              if (Bi.isRegExp(t)) return t.exec(a);
              throw new TypeError("parser must be boolean|regexp|function");
            }
          }
        },
        has: function (e, t) {
          if ((e = bs(e))) {
            var n = ys(this, e);
            return !(!n || (t && !js(0, this[n], n, t)));
          }
          return !1;
        },
        delete: function (e, t) {
          var n = this,
            a = !1;
          function r(e) {
            if ((e = bs(e))) {
              var r = ys(n, e);
              !r || (t && !js(0, n[r], r, t)) || (delete n[r], (a = !0));
            }
          }
          return Bi.isArray(e) ? e.forEach(r) : r(e), a;
        },
        clear: function () {
          return Object.keys(this).forEach(this.delete.bind(this));
        },
        normalize: function (e) {
          var t = this,
            n = {};
          return (
            Bi.forEach(this, function (a, r) {
              var i = ys(n, r);
              if (i) return (t[i] = xs(a)), void delete t[r];
              var s = e
                ? (function (e) {
                    return e
                      .trim()
                      .toLowerCase()
                      .replace(/([a-z\d])(\w*)/g, function (e, t, n) {
                        return t.toUpperCase() + n;
                      });
                  })(r)
                : String(r).trim();
              s !== r && delete t[r], (t[s] = xs(a)), (n[s] = !0);
            }),
            this
          );
        },
        toJSON: function () {
          var e = Object.create(null);
          return (
            Bi.forEach(
              Object.assign({}, this[vs] || null, this),
              function (t, n) {
                null != t &&
                  !1 !== t &&
                  (e[n] = Bi.isArray(t) ? t.join(", ") : t);
              }
            ),
            e
          );
        },
      }),
        Object.assign(As, {
          from: function (e) {
            return Bi.isString(e)
              ? new this(
                  (function (e) {
                    var t,
                      n,
                      a,
                      r = {};
                    return (
                      e &&
                        e.split("\n").forEach(function (e) {
                          (a = e.indexOf(":")),
                            (t = e.substring(0, a).trim().toLowerCase()),
                            (n = e.substring(a + 1).trim()),
                            !t ||
                              (r[t] && hs[t]) ||
                              ("set-cookie" === t
                                ? r[t]
                                  ? r[t].push(n)
                                  : (r[t] = [n])
                                : (r[t] = r[t] ? r[t] + ", " + n : n));
                        }),
                      r
                    );
                  })(e)
                )
              : e instanceof this
              ? e
              : new this(e);
          },
          accessor: function (e) {
            var t = (this[gs] = this[gs] = { accessors: {} }).accessors,
              n = this.prototype;
            function a(e) {
              var a = bs(e);
              t[a] ||
                (!(function (e, t) {
                  var n = Bi.toCamelCase(" " + t);
                  ["get", "set", "has"].forEach(function (a) {
                    Object.defineProperty(e, a + n, {
                      value: function (e, n, r) {
                        return this[a].call(this, t, e, n, r);
                      },
                      configurable: !0,
                    });
                  });
                })(n, e),
                (t[a] = !0));
            }
            return Bi.isArray(e) ? e.forEach(a) : a(e), this;
          },
        }),
        As.accessor([
          "Content-Type",
          "Content-Length",
          "Accept",
          "Accept-Encoding",
          "User-Agent",
        ]),
        Bi.freezeMethods(As.prototype),
        Bi.freezeMethods(As);
      var ws = As;
      var ks = function (e, t) {
        e = e || 10;
        var n,
          a = new Array(e),
          r = new Array(e),
          i = 0,
          s = 0;
        return (
          (t = void 0 !== t ? t : 1e3),
          function (o) {
            var l = Date.now(),
              c = r[s];
            n || (n = l), (a[i] = o), (r[i] = l);
            for (var u = s, d = 0; u !== i; ) (d += a[u++]), (u %= e);
            if (((i = (i + 1) % e) === s && (s = (s + 1) % e), !(l - n < t))) {
              var f = c && l - c;
              return f ? Math.round((1e3 * d) / f) : void 0;
            }
          }
        );
      };
      function Ss(e, t) {
        var n = 0,
          a = ks(50, 250);
        return function (r) {
          var i = r.loaded,
            s = r.lengthComputable ? r.total : void 0,
            o = i - n,
            l = a(o);
          n = i;
          var c = {
            loaded: i,
            total: s,
            progress: s ? i / s : void 0,
            bytes: o,
            rate: l || void 0,
            estimated: l && s && i <= s ? (s - i) / l : void 0,
          };
          (c[t ? "download" : "upload"] = !0), e(c);
        };
      }
      function Ns(e) {
        return new Promise(function (t, n) {
          var a,
            r = e.data,
            i = ws.from(e.headers).normalize(),
            s = e.responseType;
          function o() {
            e.cancelToken && e.cancelToken.unsubscribe(a),
              e.signal && e.signal.removeEventListener("abort", a);
          }
          Bi.isFormData(r) && ls.isStandardBrowserEnv && i.setContentType(!1);
          var l = new XMLHttpRequest();
          if (e.auth) {
            var c = e.auth.username || "",
              u = e.auth.password
                ? unescape(encodeURIComponent(e.auth.password))
                : "";
            i.set("Authorization", "Basic " + btoa(c + ":" + u));
          }
          var d = ds(e.baseURL, e.url);
          function f() {
            if (l) {
              var a = ws.from(
                "getAllResponseHeaders" in l && l.getAllResponseHeaders()
              );
              !(function (e, t, n) {
                var a = n.config.validateStatus;
                n.status && a && !a(n.status)
                  ? t(
                      new qi(
                        "Request failed with status code " + n.status,
                        [qi.ERR_BAD_REQUEST, qi.ERR_BAD_RESPONSE][
                          Math.floor(n.status / 100) - 4
                        ],
                        n.config,
                        n.request,
                        n
                      )
                    )
                  : e(n);
              })(
                function (e) {
                  t(e), o();
                },
                function (e) {
                  n(e), o();
                },
                {
                  data:
                    s && "text" !== s && "json" !== s
                      ? l.response
                      : l.responseText,
                  status: l.status,
                  statusText: l.statusText,
                  headers: a,
                  config: e,
                  request: l,
                }
              ),
                (l = null);
            }
          }
          if (
            (l.open(
              e.method.toUpperCase(),
              ns(d, e.params, e.paramsSerializer),
              !0
            ),
            (l.timeout = e.timeout),
            "onloadend" in l
              ? (l.onloadend = f)
              : (l.onreadystatechange = function () {
                  l &&
                    4 === l.readyState &&
                    (0 !== l.status ||
                      (l.responseURL &&
                        0 === l.responseURL.indexOf("file:"))) &&
                    setTimeout(f);
                }),
            (l.onabort = function () {
              l &&
                (n(new qi("Request aborted", qi.ECONNABORTED, e, l)),
                (l = null));
            }),
            (l.onerror = function () {
              n(new qi("Network Error", qi.ERR_NETWORK, e, l)), (l = null);
            }),
            (l.ontimeout = function () {
              var t = e.timeout
                  ? "timeout of " + e.timeout + "ms exceeded"
                  : "timeout exceeded",
                a = e.transitional || rs;
              e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                n(
                  new qi(
                    t,
                    a.clarifyTimeoutError ? qi.ETIMEDOUT : qi.ECONNABORTED,
                    e,
                    l
                  )
                ),
                (l = null);
            }),
            ls.isStandardBrowserEnv)
          ) {
            var m =
              (e.withCredentials || fs(d)) &&
              e.xsrfCookieName &&
              us.read(e.xsrfCookieName);
            m && i.set(e.xsrfHeaderName, m);
          }
          void 0 === r && i.setContentType(null),
            "setRequestHeader" in l &&
              Bi.forEach(i.toJSON(), function (e, t) {
                l.setRequestHeader(t, e);
              }),
            Bi.isUndefined(e.withCredentials) ||
              (l.withCredentials = !!e.withCredentials),
            s && "json" !== s && (l.responseType = e.responseType),
            "function" === typeof e.onDownloadProgress &&
              l.addEventListener("progress", Ss(e.onDownloadProgress, !0)),
            "function" === typeof e.onUploadProgress &&
              l.upload &&
              l.upload.addEventListener("progress", Ss(e.onUploadProgress)),
            (e.cancelToken || e.signal) &&
              ((a = function (t) {
                l &&
                  (n(!t || t.type ? new ps(null, e, l) : t),
                  l.abort(),
                  (l = null));
              }),
              e.cancelToken && e.cancelToken.subscribe(a),
              e.signal &&
                (e.signal.aborted
                  ? a()
                  : e.signal.addEventListener("abort", a)));
          var p = (function (e) {
            var t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
            return (t && t[1]) || "";
          })(d);
          p && -1 === ls.protocols.indexOf(p)
            ? n(
                new qi("Unsupported protocol " + p + ":", qi.ERR_BAD_REQUEST, e)
              )
            : l.send(r || null);
        });
      }
      var zs = { http: Ns, xhr: Ns },
        Cs = function (e) {
          if (Bi.isString(e)) {
            var t = zs[e];
            if (!e)
              throw Error(
                Bi.hasOwnProp(e)
                  ? "Adapter '".concat(e, "' is not available in the build")
                  : "Can not resolve adapter '".concat(e, "'")
              );
            return t;
          }
          if (!Bi.isFunction(e))
            throw new TypeError("adapter is not a function");
          return e;
        },
        Es = { "Content-Type": "application/x-www-form-urlencoded" };
      var Ps = {
        transitional: rs,
        adapter: (function () {
          var e;
          return (
            "undefined" !== typeof XMLHttpRequest
              ? (e = Cs("xhr"))
              : "undefined" !== typeof process &&
                "process" === Bi.kindOf(process) &&
                (e = Cs("http")),
            e
          );
        })(),
        transformRequest: [
          function (e, t) {
            var n,
              a = t.getContentType() || "",
              r = a.indexOf("application/json") > -1,
              i = Bi.isObject(e);
            if (
              (i && Bi.isHTMLForm(e) && (e = new FormData(e)), Bi.isFormData(e))
            )
              return r && r ? JSON.stringify(cs(e)) : e;
            if (
              Bi.isArrayBuffer(e) ||
              Bi.isBuffer(e) ||
              Bi.isStream(e) ||
              Bi.isFile(e) ||
              Bi.isBlob(e)
            )
              return e;
            if (Bi.isArrayBufferView(e)) return e.buffer;
            if (Bi.isURLSearchParams(e))
              return (
                t.setContentType(
                  "application/x-www-form-urlencoded;charset=utf-8",
                  !1
                ),
                e.toString()
              );
            if (i) {
              if (a.indexOf("application/x-www-form-urlencoded") > -1)
                return (function (e, t) {
                  return $i(
                    e,
                    new ls.classes.URLSearchParams(),
                    Object.assign(
                      {
                        visitor: function (e, t, n, a) {
                          return ls.isNode && Bi.isBuffer(e)
                            ? (this.append(t, e.toString("base64")), !1)
                            : a.defaultVisitor.apply(this, arguments);
                        },
                      },
                      t
                    )
                  );
                })(e, this.formSerializer).toString();
              if (
                (n = Bi.isFileList(e)) ||
                a.indexOf("multipart/form-data") > -1
              ) {
                var s = this.env && this.env.FormData;
                return $i(
                  n ? { "files[]": e } : e,
                  s && new s(),
                  this.formSerializer
                );
              }
            }
            return i || r
              ? (t.setContentType("application/json", !1),
                (function (e, t, n) {
                  if (Bi.isString(e))
                    try {
                      return (t || JSON.parse)(e), Bi.trim(e);
                    } catch (Wd) {
                      if ("SyntaxError" !== Wd.name) throw Wd;
                    }
                  return (n || JSON.stringify)(e);
                })(e))
              : e;
          },
        ],
        transformResponse: [
          function (e) {
            var t = this.transitional || Ps.transitional,
              n = t && t.forcedJSONParsing,
              a = "json" === this.responseType;
            if (e && Bi.isString(e) && ((n && !this.responseType) || a)) {
              var r = !(t && t.silentJSONParsing) && a;
              try {
                return JSON.parse(e);
              } catch (Wd) {
                if (r) {
                  if ("SyntaxError" === Wd.name)
                    throw qi.from(
                      Wd,
                      qi.ERR_BAD_RESPONSE,
                      this,
                      null,
                      this.response
                    );
                  throw Wd;
                }
              }
            }
            return e;
          },
        ],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: { FormData: ls.classes.FormData, Blob: ls.classes.Blob },
        validateStatus: function (e) {
          return e >= 200 && e < 300;
        },
        headers: { common: { Accept: "application/json, text/plain, */*" } },
      };
      Bi.forEach(["delete", "get", "head"], function (e) {
        Ps.headers[e] = {};
      }),
        Bi.forEach(["post", "put", "patch"], function (e) {
          Ps.headers[e] = Bi.merge(Es);
        });
      var Os = Ps;
      function Ms(e, t) {
        var n = this || Os,
          a = t || n,
          r = ws.from(a.headers),
          i = a.data;
        return (
          Bi.forEach(e, function (e) {
            i = e.call(n, i, r.normalize(), t ? t.status : void 0);
          }),
          r.normalize(),
          i
        );
      }
      function _s(e) {
        return !(!e || !e.__CANCEL__);
      }
      function Ts(e) {
        if (
          (e.cancelToken && e.cancelToken.throwIfRequested(),
          e.signal && e.signal.aborted)
        )
          throw new ps();
      }
      function Ds(e) {
        return (
          Ts(e),
          (e.headers = ws.from(e.headers)),
          (e.data = Ms.call(e, e.transformRequest)),
          (e.adapter || Os.adapter)(e).then(
            function (t) {
              return (
                Ts(e),
                (t.data = Ms.call(e, e.transformResponse, t)),
                (t.headers = ws.from(t.headers)),
                t
              );
            },
            function (t) {
              return (
                _s(t) ||
                  (Ts(e),
                  t &&
                    t.response &&
                    ((t.response.data = Ms.call(
                      e,
                      e.transformResponse,
                      t.response
                    )),
                    (t.response.headers = ws.from(t.response.headers)))),
                Promise.reject(t)
              );
            }
          )
        );
      }
      function Ls(e, t) {
        t = t || {};
        var n = {};
        function a(e, t) {
          return Bi.isPlainObject(e) && Bi.isPlainObject(t)
            ? Bi.merge(e, t)
            : Bi.isPlainObject(t)
            ? Bi.merge({}, t)
            : Bi.isArray(t)
            ? t.slice()
            : t;
        }
        function r(n) {
          return Bi.isUndefined(t[n])
            ? Bi.isUndefined(e[n])
              ? void 0
              : a(void 0, e[n])
            : a(e[n], t[n]);
        }
        function i(e) {
          if (!Bi.isUndefined(t[e])) return a(void 0, t[e]);
        }
        function s(n) {
          return Bi.isUndefined(t[n])
            ? Bi.isUndefined(e[n])
              ? void 0
              : a(void 0, e[n])
            : a(void 0, t[n]);
        }
        function o(n) {
          return n in t ? a(e[n], t[n]) : n in e ? a(void 0, e[n]) : void 0;
        }
        var l = {
          url: i,
          method: i,
          data: i,
          baseURL: s,
          transformRequest: s,
          transformResponse: s,
          paramsSerializer: s,
          timeout: s,
          timeoutMessage: s,
          withCredentials: s,
          adapter: s,
          responseType: s,
          xsrfCookieName: s,
          xsrfHeaderName: s,
          onUploadProgress: s,
          onDownloadProgress: s,
          decompress: s,
          maxContentLength: s,
          maxBodyLength: s,
          beforeRedirect: s,
          transport: s,
          httpAgent: s,
          httpsAgent: s,
          cancelToken: s,
          socketPath: s,
          responseEncoding: s,
          validateStatus: o,
        };
        return (
          Bi.forEach(Object.keys(e).concat(Object.keys(t)), function (e) {
            var t = l[e] || r,
              a = t(e);
            (Bi.isUndefined(a) && t !== o) || (n[e] = a);
          }),
          n
        );
      }
      var Fs = "1.1.2",
        Rs = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach(
        function (e, t) {
          Rs[e] = function (n) {
            return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
          };
        }
      );
      var Is = {};
      Rs.transitional = function (e, t, n) {
        function a(e, t) {
          return (
            "[Axios v1.1.2] Transitional option '" +
            e +
            "'" +
            t +
            (n ? ". " + n : "")
          );
        }
        return function (n, r, i) {
          if (!1 === e)
            throw new qi(
              a(r, " has been removed" + (t ? " in " + t : "")),
              qi.ERR_DEPRECATED
            );
          return (
            t &&
              !Is[r] &&
              ((Is[r] = !0),
              console.warn(
                a(
                  r,
                  " has been deprecated since v" +
                    t +
                    " and will be removed in the near future"
                )
              )),
            !e || e(n, r, i)
          );
        };
      };
      var Bs = {
          assertOptions: function (e, t, n) {
            if ("object" !== typeof e)
              throw new qi(
                "options must be an object",
                qi.ERR_BAD_OPTION_VALUE
              );
            for (var a = Object.keys(e), r = a.length; r-- > 0; ) {
              var i = a[r],
                s = t[i];
              if (s) {
                var o = e[i],
                  l = void 0 === o || s(o, i, e);
                if (!0 !== l)
                  throw new qi(
                    "option " + i + " must be " + l,
                    qi.ERR_BAD_OPTION_VALUE
                  );
              } else if (!0 !== n)
                throw new qi("Unknown option " + i, qi.ERR_BAD_OPTION);
            }
          },
          validators: Rs,
        },
        Vs = Bs.validators,
        Us = (function () {
          function e(t) {
            c(this, e),
              (this.defaults = t),
              (this.interceptors = { request: new as(), response: new as() });
          }
          return (
            d(e, [
              {
                key: "request",
                value: function (e, t) {
                  "string" === typeof e
                    ? ((t = t || {}).url = e)
                    : (t = e || {});
                  var n = (t = Ls(this.defaults, t)).transitional;
                  void 0 !== n &&
                    Bs.assertOptions(
                      n,
                      {
                        silentJSONParsing: Vs.transitional(Vs.boolean),
                        forcedJSONParsing: Vs.transitional(Vs.boolean),
                        clarifyTimeoutError: Vs.transitional(Vs.boolean),
                      },
                      !1
                    ),
                    (t.method = (
                      t.method ||
                      this.defaults.method ||
                      "get"
                    ).toLowerCase());
                  var a =
                    t.headers &&
                    Bi.merge(t.headers.common, t.headers[t.method]);
                  a &&
                    Bi.forEach(
                      [
                        "delete",
                        "get",
                        "head",
                        "post",
                        "put",
                        "patch",
                        "common",
                      ],
                      function (e) {
                        delete t.headers[e];
                      }
                    ),
                    (t.headers = new ws(t.headers, a));
                  var r = [],
                    i = !0;
                  this.interceptors.request.forEach(function (e) {
                    ("function" === typeof e.runWhen && !1 === e.runWhen(t)) ||
                      ((i = i && e.synchronous),
                      r.unshift(e.fulfilled, e.rejected));
                  });
                  var s,
                    o = [];
                  this.interceptors.response.forEach(function (e) {
                    o.push(e.fulfilled, e.rejected);
                  });
                  var l,
                    c = 0;
                  if (!i) {
                    var u = [Ds.bind(this), void 0];
                    for (
                      u.unshift.apply(u, r),
                        u.push.apply(u, o),
                        l = u.length,
                        s = Promise.resolve(t);
                      c < l;

                    )
                      s = s.then(u[c++], u[c++]);
                    return s;
                  }
                  l = r.length;
                  var d = t;
                  for (c = 0; c < l; ) {
                    var f = r[c++],
                      m = r[c++];
                    try {
                      d = f(d);
                    } catch (p) {
                      m.call(this, p);
                      break;
                    }
                  }
                  try {
                    s = Ds.call(this, d);
                  } catch (p) {
                    return Promise.reject(p);
                  }
                  for (c = 0, l = o.length; c < l; ) s = s.then(o[c++], o[c++]);
                  return s;
                },
              },
              {
                key: "getUri",
                value: function (e) {
                  return ns(
                    ds((e = Ls(this.defaults, e)).baseURL, e.url),
                    e.params,
                    e.paramsSerializer
                  );
                },
              },
            ]),
            e
          );
        })();
      Bi.forEach(["delete", "get", "head", "options"], function (e) {
        Us.prototype[e] = function (t, n) {
          return this.request(
            Ls(n || {}, { method: e, url: t, data: (n || {}).data })
          );
        };
      }),
        Bi.forEach(["post", "put", "patch"], function (e) {
          function t(t) {
            return function (n, a, r) {
              return this.request(
                Ls(r || {}, {
                  method: e,
                  headers: t ? { "Content-Type": "multipart/form-data" } : {},
                  url: n,
                  data: a,
                })
              );
            };
          }
          (Us.prototype[e] = t()), (Us.prototype[e + "Form"] = t(!0));
        });
      var Hs = Us,
        qs = (function () {
          function e(t) {
            if ((c(this, e), "function" !== typeof t))
              throw new TypeError("executor must be a function.");
            var n;
            this.promise = new Promise(function (e) {
              n = e;
            });
            var a = this;
            this.promise.then(function (e) {
              if (a._listeners) {
                for (var t = a._listeners.length; t-- > 0; ) a._listeners[t](e);
                a._listeners = null;
              }
            }),
              (this.promise.then = function (e) {
                var t,
                  n = new Promise(function (e) {
                    a.subscribe(e), (t = e);
                  }).then(e);
                return (
                  (n.cancel = function () {
                    a.unsubscribe(t);
                  }),
                  n
                );
              }),
              t(function (e, t, r) {
                a.reason || ((a.reason = new ps(e, t, r)), n(a.reason));
              });
          }
          return (
            d(
              e,
              [
                {
                  key: "throwIfRequested",
                  value: function () {
                    if (this.reason) throw this.reason;
                  },
                },
                {
                  key: "subscribe",
                  value: function (e) {
                    this.reason
                      ? e(this.reason)
                      : this._listeners
                      ? this._listeners.push(e)
                      : (this._listeners = [e]);
                  },
                },
                {
                  key: "unsubscribe",
                  value: function (e) {
                    if (this._listeners) {
                      var t = this._listeners.indexOf(e);
                      -1 !== t && this._listeners.splice(t, 1);
                    }
                  },
                },
              ],
              [
                {
                  key: "source",
                  value: function () {
                    var t;
                    return {
                      token: new e(function (e) {
                        t = e;
                      }),
                      cancel: t,
                    };
                  },
                },
              ]
            ),
            e
          );
        })(),
        Ws = qs;
      var Ys = (function e(t) {
        var n = new Hs(t),
          a = mi(Hs.prototype.request, n);
        return (
          Bi.extend(a, Hs.prototype, n, { allOwnKeys: !0 }),
          Bi.extend(a, n, null, { allOwnKeys: !0 }),
          (a.create = function (n) {
            return e(Ls(t, n));
          }),
          a
        );
      })(Os);
      (Ys.Axios = Hs),
        (Ys.CanceledError = ps),
        (Ys.CancelToken = Ws),
        (Ys.isCancel = _s),
        (Ys.VERSION = Fs),
        (Ys.toFormData = $i),
        (Ys.AxiosError = qi),
        (Ys.Cancel = Ys.CanceledError),
        (Ys.all = function (e) {
          return Promise.all(e);
        }),
        (Ys.spread = function (e) {
          return function (t) {
            return e.apply(null, t);
          };
        }),
        (Ys.isAxiosError = function (e) {
          return Bi.isObject(e) && !0 === e.isAxiosError;
        }),
        (Ys.formToJSON = function (e) {
          return cs(Bi.isHTMLForm(e) ? new FormData(e) : e);
        });
      var Qs = Ys,
        Gs = (function () {
          var e,
            t =
              ((e = di().mark(function e(t) {
                var n;
                return di().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ("undefined" !== typeof t) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return", {});
                        case 2:
                          return (e.prev = 2), (e.next = 5), Qs.get(t);
                        case 5:
                          return (n = e.sent), e.abrupt("return", n.data);
                        case 9:
                          return (
                            (e.prev = 9),
                            (e.t0 = e.catch(2)),
                            console.error(e.t0.message),
                            e.abrupt("return", e.t0)
                          );
                        case 13:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[2, 9]]
                );
              })),
              function () {
                var t = this,
                  n = arguments;
                return new Promise(function (a, r) {
                  var i = e.apply(t, n);
                  function s(e) {
                    fi(i, a, r, s, o, "next", e);
                  }
                  function o(e) {
                    fi(i, a, r, s, o, "throw", e);
                  }
                  s(void 0);
                });
              });
          return function (e) {
            return t.apply(this, arguments);
          };
        })();
      function Xs(e) {
        var n = o((0, t.useState)(), 2),
          a = n[0],
          r = n[1];
        return (
          (0, t.useEffect)(
            function () {
              Gs(e).then(function (e) {
                r(e);
              });
            },
            [e]
          ),
          a
        );
      }
      function $s() {
        return Xs($r.proiecte.sumarry);
      }
      var Ks = function (e) {
        var t = e.children,
          n = e.title,
          a = e.img,
          r = e.href,
          i = e.hrefTxt,
          s = void 0 === i ? "Afl\u0103 mai multe \xbb" : i;
        return (0, Te.jsxs)("div", {
          className: "cardProiect flex column",
          children: [
            (0, Te.jsx)("div", {
              className: "img-container flex row",
              children: (0, Te.jsx)("img", { src: a, alt: "img" }),
            }),
            (0, Te.jsx)("h5", { className: "title", children: n }),
            (0, Te.jsx)("p", { children: t }),
            (0, Te.jsx)(Me, { to: r, children: s }),
          ],
        });
      };
      var Zs = function (e) {
        var t = e.children,
          n = e.type,
          a = void 0 === n ? "link" : n,
          r = e.click,
          i = void 0 === r ? "" : r;
        return "link" === a
          ? (0, Te.jsx)(Me, { to: i, className: "link-button-1", children: t })
          : "button" === a
          ? (0, Te.jsx)("button", {
              onClick: i,
              className: "link-button-1",
              children: t,
            })
          : (0, Te.jsx)(Te.Fragment, {});
      };
      var Js = function () {
        var e = Xs($r.proiecte.random);
        return (
          console.log(e),
          (0, Te.jsx)("section", {
            id: "projects",
            children: (0, Te.jsx)("div", {
              className: "main",
              children: (0, Te.jsxs)("div", {
                className: "content flex column",
                children: [
                  (0, Te.jsx)("h3", {
                    className: "title",
                    children: "Proiecte",
                  }),
                  (0, Te.jsx)("p", {
                    children:
                      "Ini\u021biative care aduc un plus ora\u0219ului \u0219i societ\u0103\u021bii",
                  }),
                  (0, Te.jsx)("div", {
                    className: "grid-container flex",
                    children:
                      null === e || void 0 === e
                        ? void 0
                        : e.map(function (e, t) {
                            return (0,
                            Te.jsx)(Ks, { img: e.img_path, title: e.name, href: Wr.proiecte.index.concat(e.id), children: e.description }, t);
                          }),
                  }),
                  (0, Te.jsx)(Zs, {
                    type: "link",
                    click: Wr.proiecte.index,
                    children: "Acceseaz\u0103 toate proiectele \xbb",
                  }),
                ],
              }),
            }),
          })
        );
      };
      var eo = function (e) {
        var t = e.title,
          n = e.icon,
          a = e.href,
          r = void 0 === a ? "/" : a;
        return (0, Te.jsx)(Me, {
          to: r,
          className: "cardResursa flex row",
          children: (0, Te.jsxs)("h5", {
            className: "title flex row",
            children: [
              (0, Te.jsx)("div", { className: "icon-container", children: n }),
              t,
            ],
          }),
        });
      };
      function to(e) {
        var t = e.title,
          n = e.icon,
          a = e.href,
          r = void 0 === a ? Wr.index : a;
        return (0, Te.jsx)("a", {
          href: r,
          className: "cardResursa flex row",
          children: (0, Te.jsxs)("h5", {
            className: "title flex row",
            children: [
              (0, Te.jsx)("div", { className: "icon-container", children: n }),
              t,
            ],
          }),
        });
      }
      var no = function () {
          return (0, Te.jsx)("section", {
            id: "resources",
            children: (0, Te.jsx)("div", {
              className: "main",
              children: (0, Te.jsxs)("div", {
                className: "content flex column",
                children: [
                  (0, Te.jsx)("h3", {
                    className: "title",
                    children: "Resurse",
                  }),
                  (0, Te.jsx)("p", {
                    children:
                      "Pentru a face studen\u021bia mai u\u0219oar\u0103",
                  }),
                  (0, Te.jsxs)("div", {
                    className: "grid-container",
                    children: [
                      (0, Te.jsx)(eo, {
                        title: "FAQ",
                        icon: (0, Te.jsx)(pr, { icon: kr }),
                        href: Wr.resurse.faq.index,
                      }),
                      (0, Te.jsx)(eo, {
                        title: "Calculator medie",
                        icon: (0, Te.jsx)(pr, { icon: Cr }),
                        href: Wr.resurse.calculatorMedie.index,
                      }),
                      (0, Te.jsx)(eo, {
                        title: "Amfiteatre",
                        icon: (0, Te.jsx)(pr, { icon: Or }),
                        href: Wr.resurse.amfiteatreSali.index,
                      }),
                      (0, Te.jsx)(eo, {
                        title: "Ghid ERASMUS",
                        icon: (0, Te.jsx)(pr, { icon: yr }),
                        href: Wr.resurse.ghiduri.index,
                      }),
                      (0, Te.jsx)(eo, {
                        title: "Ghid licen\u021b\u0103",
                        icon: (0, Te.jsx)(pr, { icon: Mr }),
                        href: Wr.resurse.ghiduri.index,
                      }),
                      (0, Te.jsx)(eo, {
                        title: "Ghidul bobocului",
                        icon: (0, Te.jsx)(pr, { icon: Nr }),
                        href: Wr.resurse.ghiduri.index,
                      }),
                    ],
                  }),
                  (0, Te.jsx)(Zs, {
                    type: "link",
                    click: Wr.resurse.index,
                    children: "Acceseaz\u0103 toate resursele \xbb",
                  }),
                ],
              }),
            }),
          });
        },
        ao = function () {
          return (
            window.scrollTo(0, 0),
            (0, Te.jsxs)("div", {
              id: "index",
              children: [
                (0, Te.jsx)(ci, {}),
                (0, Te.jsx)(ui, {}),
                (0, Te.jsx)(Js, {}),
                (0, Te.jsx)(no, {}),
              ],
            })
          );
        };
      var ro = function () {
        return (
          window.scrollTo(0, 0),
          (0, Te.jsx)("h1", {
            style: {
              height: "100vh",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
            },
            children: "404 Not found",
          })
        );
      };
      var io = function (e) {
        var t = e.children,
          n = e.className,
          a = void 0 === n ? "" : n,
          r = e.top,
          i = void 0 === r ? 0 : r;
        return (0, Te.jsx)("div", {
          className: "header-card ".concat(a),
          style: { top: "".concat(i + 150, "px") },
          children: t,
        });
      };
      var so = function (e) {
          var t = e.children,
            n = e.img,
            a = e.top,
            r = window.innerWidth > 1.5 * window.innerHeight;
          return (0, Te.jsxs)("header", {
            id: "header",
            children: [
              (0, Te.jsx)("div", {
                className: "img-container",
                children: (0, Te.jsx)("img", { src: n, alt: "banner" }),
              }),
              r
                ? (0, Te.jsx)(io, { top: a, children: t })
                : (0, Te.jsx)("div", {
                    className: "header-card-alt flex column",
                    children: t,
                  }),
            ],
          });
        },
        oo = n.p + "static/media/proiecte-banner.6c5bb878ca865f286fe5.jpg";
      var lo = function () {
        window.scrollTo(0, 0);
        var e = (0, t.useRef)(null),
          n = $s();
        return (0, Te.jsxs)("div", {
          id: "proiecte",
          children: [
            (0, Te.jsxs)(so, {
              img: oo,
              top: 150,
              children: [
                (0, Te.jsx)("h1", { className: "title", children: "Proiecte" }),
                (0, Te.jsx)("p", {
                  className: "subtitle",
                  children:
                    "Ini\u021biative care aduc un plus ora\u0219ului \u0219i societ\u0103\u021bii.",
                }),
                (0, Te.jsx)("br", {}),
                (0, Te.jsx)("br", {}),
                (0, Te.jsx)(Zs, {
                  type: "button",
                  click: function (t) {
                    e.current.scrollIntoView();
                  },
                  children: "Vezi toate proiectele \xbb",
                }),
              ],
            }),
            (0, Te.jsx)("div", {
              className: "main",
              ref: e,
              children: (0, Te.jsx)("div", {
                className: "content flex column",
                children: (0, Te.jsx)("div", {
                  className: "grid-container flex",
                  children:
                    null === n || void 0 === n
                      ? void 0
                      : n.map(function (e, t) {
                          return (0,
                          Te.jsx)(Ks, { img: e.img_path, title: e.name, href: e.id, children: e.description }, t);
                        }),
                }),
              }),
            }),
          ],
        });
      };
      var co = function (e) {
        var t,
          n,
          a,
          r,
          i,
          s = e.index;
        window.scrollTo(0, 0);
        var o = (function (e) {
          return Xs($r.proiecte.detail.concat(String(e)));
        })(s);
        return (0, Te.jsxs)("div", {
          id: s,
          className: "proiect flex column",
          children: [
            (0, Te.jsxs)("header", {
              className: "flex column",
              children: [
                (0, Te.jsxs)("div", {
                  className: "container flex column",
                  children: [
                    (0, Te.jsx)("img", {
                      src: null === o || void 0 === o ? void 0 : o.img_path,
                      alt: "logo",
                      className: "logo",
                    }),
                    (0, Te.jsx)("img", {
                      src:
                        null === o || void 0 === o
                          ? void 0
                          : o.department_img_path,
                      alt: "departamentlogo",
                      className: "departament-logo",
                    }),
                  ],
                }),
                (0, Te.jsx)("h3", {
                  children: null === o || void 0 === o ? void 0 : o.name,
                }),
              ],
            }),
            (0, Te.jsx)("div", {
              className: "descriere",
              children: null === o || void 0 === o ? void 0 : o.description,
            }),
            (0, Te.jsx)("div", {
              className: "imgs-container",
              children:
                null === o ||
                void 0 === o ||
                null === (t = o.gallery) ||
                void 0 === t
                  ? void 0
                  : t.map(function (e, t) {
                      return (0,
                      Te.jsxs)(Te.Fragment, { children: [(0, Te.jsx)("img", { src: e.path, alt: "img" }), (0, Te.jsx)("span", { className: "img-sub", children: e.descr })] });
                    }),
            }),
            (0, Te.jsxs)("div", {
              className: "contact",
              children: [
                (0, Te.jsx)("img", {
                  src:
                    null === o ||
                    void 0 === o ||
                    null === (n = o.coordinator) ||
                    void 0 === n
                      ? void 0
                      : n.img_path,
                  alt: "coord",
                  className: "profil",
                }),
                (0, Te.jsx)("h5", {
                  className: "nume",
                  children:
                    null === o ||
                    void 0 === o ||
                    null === (a = o.coordinator) ||
                    void 0 === a
                      ? void 0
                      : a.name,
                }),
                (0, Te.jsx)("p", {
                  className: "subtitle",
                  children: "COORDONATOR".concat(
                    "schimburi_internationale" === String(s) ? "I" : ""
                  ),
                }),
                (0, Te.jsx)("p", {
                  className: "field",
                  children:
                    null === o ||
                    void 0 === o ||
                    null === (r = o.coordinator) ||
                    void 0 === r
                      ? void 0
                      : r.email,
                }),
                (0, Te.jsx)("p", {
                  className: "field",
                  children:
                    null === o ||
                    void 0 === o ||
                    null === (i = o.coordinator) ||
                    void 0 === i
                      ? void 0
                      : i.phone,
                }),
              ],
            }),
          ],
        });
      };
      var uo = function () {
        var e = $s();
        return (0, Te.jsxs)(ke, {
          children: [
            (0, Te.jsx)(Ae, { path: "/", element: (0, Te.jsx)(lo, {}) }),
            (0, Te.jsx)(Ae, { path: "*", element: (0, Te.jsx)(ro, {}) }),
            null === e || void 0 === e
              ? void 0
              : e.map(function (e, t) {
                  return (0,
                  Te.jsx)(Ae, { path: e.id, element: (0, Te.jsx)(co, { index: e.id }) });
                }),
          ],
        });
      };
      function fo() {
        var e = window;
        return { width: e.innerWidth, height: e.innerHeight };
      }
      var mo = function (e) {
        var t = e.img,
          n = e.title,
          a = e.description,
          r = e.href,
          i = void 0 === r ? "/" : r;
        return (0, Te.jsxs)("a", {
          href: i,
          className: "cardEveniment",
          children: [
            (0, Te.jsx)("img", { src: t, alt: "banner" }),
            (0, Te.jsxs)("div", {
              className: "container flex column",
              children: [
                (0, Te.jsx)("h4", { className: "title", children: n }),
                (0, Te.jsx)("p", { className: "description", children: a }),
              ],
            }),
          ],
        });
      };
      var po = function () {
        var e = (function () {
          var e = o((0, t.useState)(fo()), 2),
            n = e[0],
            a = e[1];
          return (
            (0, t.useEffect)(function () {
              function e() {
                a(fo());
              }
              return (
                window.addEventListener("resize", e),
                function () {
                  return window.removeEventListener("resize", e);
                }
              );
            }, []),
            n
          );
        })().height;
        window.scrollTo(0, 0);
        var n = (0, t.useRef)(null),
          a = Xs($r.evenimente);
        return (0, Te.jsxs)("div", {
          id: "evenimente",
          children: [
            (0, Te.jsxs)("div", {
              className: "calendar-container",
              children: [
                (0, Te.jsx)("div", {
                  id: "calendar",
                  children: (0, Te.jsx)("iframe", {
                    title: "google-calendar",
                    className: "google-calendar",
                    src: "https://calendar.google.com/calendar/embed?height=".concat(
                      0.94 * e,
                      "&wkst=2&bgcolor=%232596be&ctz=Europe%2FBucharest&title=Calendar%20de%20evenimente&src=c2VjcmV0YXJAb3NtY2x1ai5ybw&src=ZW4ucm9tYW5pYW4jaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&src=cm8ucm9tYW5pYW4jaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%230B8043&color=%237986CB"
                    ),
                    style: { padding: "10px" },
                    height: "100%",
                    frameborder: "0",
                    scrolling: "yes",
                  }),
                }),
                (0, Te.jsx)(Zs, {
                  type: "button",
                  click: function (e) {
                    n.current.scrollIntoView();
                  },
                  children: "Vezi toate evenimentele \xbb",
                }),
              ],
            }),
            (0, Te.jsx)("div", {
              id: "feed",
              className: "main",
              ref: n,
              children: (0, Te.jsx)("div", {
                className: "content",
                children:
                  null === a || void 0 === a
                    ? void 0
                    : a.map(function (e, t) {
                        return (0,
                        Te.jsx)(mo, { img: null === e || void 0 === e ? void 0 : e.img_path, title: null === e || void 0 === e ? void 0 : e.name, description: null === e || void 0 === e ? void 0 : e.description, href: null === e || void 0 === e ? void 0 : e.url });
                      }),
              }),
            }),
          ],
        });
      };
      var ho = function () {
          return (
            window.scrollTo(0, 0),
            (0, Te.jsx)("h1", {
              style: {
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
              children: "\xcen construc\u021bie",
            })
          );
        },
        go = n.p + "static/media/resources-banner.028757d4ed05d85a001c.jpg";
      var vo = function () {
          window.scrollTo(0, 0);
          var e = (0, t.useRef)(null);
          return (0, Te.jsxs)("div", {
            id: "resurse",
            children: [
              (0, Te.jsxs)(so, {
                img: go,
                top: 150,
                children: [
                  (0, Te.jsx)("h1", {
                    className: "title",
                    children: "Resurse",
                  }),
                  (0, Te.jsx)("p", {
                    className: "subtitle",
                    children:
                      "Pentru a face studen\u021bia mai u\u0219oar\u0103.",
                  }),
                  (0, Te.jsx)("p", {
                    children:
                      "Regulamente, ghiduri \u0219i alte unelte indispensabile unui student la UMFIH.",
                  }),
                  (0, Te.jsx)("br", {}),
                  (0, Te.jsx)("br", {}),
                  (0, Te.jsx)(Zs, {
                    type: "button",
                    click: function (t) {
                      e.current.scrollIntoView();
                    },
                    children: "Vezi toate resursele \xbb",
                  }),
                ],
              }),
              (0, Te.jsx)("section", {
                id: "content",
                className: "main",
                ref: e,
                children: (0, Te.jsxs)("div", {
                  className: "content",
                  children: [
                    (0, Te.jsx)(eo, {
                      title: "FAQ",
                      icon: Lr,
                      href: "/".concat(Wr.resurse.faq.index),
                    }),
                    (0, Te.jsx)(eo, {
                      title: "Ghiduri",
                      icon: Fr,
                      href: "/".concat(Wr.resurse.ghiduri.index),
                    }),
                    (0, Te.jsx)(eo, {
                      title: "Regulamente",
                      icon: Rr,
                      href: "/".concat(Wr.resurse.regulamente.index),
                    }),
                    (0, Te.jsx)(eo, {
                      title: "Calculator medie",
                      icon: Ir,
                      href: "/".concat(Wr.resurse.calculatorMedie.index),
                    }),
                    (0, Te.jsx)(eo, {
                      title: "Amfiteatre \u0219i s\u0103li",
                      icon: Br,
                      href: "/".concat(Wr.resurse.amfiteatreSali.index),
                    }),
                    (0, Te.jsx)(to, {
                      title: "Catalog Emsys",
                      icon: Vr,
                      href: Qr,
                    }),
                    (0, Te.jsx)(to, {
                      title: "Platforma cereri UMF",
                      icon: Vr,
                      href: Gr,
                    }),
                    (0, Te.jsx)(eo, {
                      title: "Leg\u0103turi externe",
                      icon: Vr,
                      href: "/".concat(Wr.resurse.legaturiExterne.index),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        bo = n.p + "static/media/rules-banner.5724a6aad78077d9058f.png";
      var xo = function () {
          window.scrollTo(0, 0);
          var e = (0, t.useRef)(null);
          return (0, Te.jsxs)("div", {
            id: "regulamente",
            children: [
              (0, Te.jsxs)(so, {
                img: bo,
                top: 150,
                children: [
                  (0, Te.jsx)("h1", {
                    className: "title",
                    children: "Regulamente",
                  }),
                  (0, Te.jsx)("p", {
                    children:
                      "Regulile care se aplic\u0103 oric\u0103rui student, \xeen UMF c\xe2t \u0219i \xeen OSM.",
                  }),
                  (0, Te.jsx)("br", {}),
                  (0, Te.jsx)("br", {}),
                  (0, Te.jsx)(Zs, {
                    type: "button",
                    click: function (t) {
                      e.current.scrollIntoView();
                    },
                    children: "Vezi toate regulamentele \xbb",
                  }),
                ],
              }),
              (0, Te.jsx)("section", {
                id: "content",
                className: "main",
                ref: e,
                children: (0, Te.jsxs)("div", {
                  className: "content",
                  children: [
                    (0, Te.jsx)(eo, { title: "OSM", icon: Rr }),
                    (0, Te.jsx)(eo, {
                      title: "Deplas\u0103ri externe",
                      icon: Rr,
                    }),
                    (0, Te.jsx)(eo, {
                      title: "Carta Universit\u0103\u021bii",
                      icon: Rr,
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        jo = n.p + "static/media/guides-banner.4d5194f77584144ea42e.jpg",
        yo = n.p + "static/media/Ghid ERASMUS.d88c8b8aba93c2ccb19d.pdf";
      var Ao = function () {
          window.scrollTo(0, 0);
          var e = (0, t.useRef)(null),
            n = o(t.useState(), 1)[0];
          return (
            fetch(yo)
              .then(function (e) {
                return e.text();
              })
              .then(function (e) {
                n(e);
              }),
            (0, Te.jsxs)("div", {
              id: "ghiduri",
              children: [
                (0, Te.jsxs)(so, {
                  img: jo,
                  top: 0,
                  children: [
                    (0, Te.jsx)("h1", {
                      className: "title",
                      children: "Ghiduri",
                    }),
                    (0, Te.jsx)("p", {
                      className: "subtitle",
                      children: "Explica\u021bii pas cu pas",
                    }),
                    (0, Te.jsx)("p", {
                      children:
                        "Afl\u0103 de la cei cu experien\u021b\u0103 tot ce trebuie s\u0103 \u0219tii despre facultate.",
                    }),
                    (0, Te.jsx)("br", {}),
                    (0, Te.jsx)("br", {}),
                    (0, Te.jsx)(Zs, {
                      type: "button",
                      click: function (t) {
                        e.current.scrollIntoView();
                      },
                      children: "Vezi toate ghidurile \xbb",
                    }),
                  ],
                }),
                (0, Te.jsx)("section", {
                  id: "content",
                  className: "main",
                  ref: e,
                  children: (0, Te.jsxs)("div", {
                    className: "content",
                    children: [
                      (0, Te.jsx)(eo, { title: "Bobocul \xeen OSM", icon: Fr }),
                      (0, Te.jsx)(eo, { title: "Erasmus", icon: Fr }),
                      (0, Te.jsx)(eo, { title: "Licen\u021b\u0103", icon: Fr }),
                    ],
                  }),
                }),
              ],
            })
          );
        },
        wo = n.p + "static/media/links-banner.f48b71ad21bca5d93972.jpg";
      var ko = function () {
        window.scrollTo(0, 0);
        var e = (0, t.useRef)(null);
        return (0, Te.jsxs)("div", {
          id: "links",
          children: [
            (0, Te.jsxs)(so, {
              img: wo,
              top: 150,
              children: [
                (0, Te.jsx)("h1", {
                  className: "title",
                  children: "Leg\u0103turi externe",
                }),
                (0, Te.jsx)("br", {}),
                (0, Te.jsx)("br", {}),
                (0, Te.jsx)(Zs, {
                  type: "button",
                  click: function (t) {
                    e.current.scrollIntoView();
                  },
                  children: "Vezi toate leg\u0103turile \xbb",
                }),
              ],
            }),
            (0, Te.jsx)("section", {
              id: "content",
              className: "main",
              ref: e,
              children: (0, Te.jsxs)("div", {
                className: "content",
                children: [
                  (0, Te.jsx)(to, { title: "Site UMF", icon: Vr, href: Yr }),
                  (0, Te.jsx)(to, {
                    title: "Site Info-Stud",
                    icon: Vr,
                    href: Qr,
                  }),
                  (0, Te.jsx)(to, {
                    title: "Platforma cereri UMF",
                    icon: Vr,
                    href: Gr,
                  }),
                ],
              }),
            }),
          ],
        });
      };
      var So = function () {
          return (
            window.scrollTo(0, 0),
            (0, Te.jsx)("h1", {
              style: {
                height: "100vh",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
              },
              children: "\xcen construc\u021bie",
            })
          );
        },
        No = n.p + "static/media/aula.4d1ad0b1a858f922be1e.jpg";
      var zo = function () {
        return (
          window.scrollTo(0, 0),
          (0, Te.jsxs)(so, {
            img: No,
            top: 100,
            children: [
              (0, Te.jsxs)("h2", {
                className: "title",
                children: [
                  "Amfiteatre \u0219i ",
                  (0, Te.jsx)("br", {}),
                  "s\u0103li de curs",
                ],
              }),
              (0, Te.jsxs)("p", {
                className: "subtitle",
                children: [
                  "Afl\u0103 cum s\u0103 ajungi la toate amfiteatrele",
                  (0, Te.jsx)("br", {}),
                  " \u0219i s\u0103lile de curs din universitatea noastr\u0103.",
                ],
              }),
              (0, Te.jsxs)("p", {
                children: [
                  "Explica\u021bii detaliate cu poze \u0219i loca\u021bii geografice. ",
                  (0, Te.jsx)("br", {}),
                  "Modele 3D ale celor mai importante.",
                ],
              }),
              (0, Te.jsx)("p", {
                children: "Ctrl + F pentru a c\u0103uta amfiteatre si sali",
              }),
            ],
          })
        );
      };
      var Co = function (e) {
          var t = e.img,
            n = e.href,
            a = void 0 === n ? "/" : n,
            r = e.title,
            i = e.subtitle,
            s = void 0 === i ? "" : i,
            o = e.maps,
            l = void 0 === o ? "" : o,
            c = e.model3d,
            u = void 0 === c ? "" : c,
            d = de();
          return (0, Te.jsxs)("div", {
            to: a,
            className: "cardAmfiteatru flex",
            onClick: function (e) {
              return d(a);
            },
            children: [
              (0, Te.jsx)("div", {
                className: "img-container flex column",
                children: (0, Te.jsx)("img", { src: t, alt: "alt" }),
              }),
              (0, Te.jsxs)("div", {
                className: "container flex column",
                children: [
                  (0, Te.jsx)("h4", { className: "flex", children: r }),
                  (0, Te.jsx)("p", { className: "flex", children: s }),
                  (0, Te.jsx)("div", { className: "stretcher column" }),
                  (0, Te.jsxs)("div", {
                    className: "buttons-container flex row",
                    children: [
                      "" !== l
                        ? (0, Te.jsxs)("a", {
                            href: l,
                            children: [
                              (0, Te.jsx)(pr, { icon: xr }),
                              " ",
                              (0, Te.jsx)("div", {
                                style: { padding: "2px" },
                                children: "Maps",
                              }),
                            ],
                          })
                        : (0, Te.jsx)(Te.Fragment, {}),
                      "" !== u && "" !== l
                        ? (0, Te.jsx)("div", { className: "stretcher row" })
                        : (0, Te.jsx)(Te.Fragment, {}),
                      "" !== u
                        ? (0, Te.jsxs)("a", {
                            href: u,
                            children: [
                              (0, Te.jsx)(pr, { icon: wr }),
                              " ",
                              (0, Te.jsx)("div", {
                                style: { padding: "2px" },
                                children: "3D Model",
                              }),
                            ],
                          })
                        : (0, Te.jsx)(Te.Fragment, {}),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        Eo = n.p + "static/media/anato.4752d3f26111161a1170.png",
        Po =
          n.p +
          "static/media/aleman \u0219i opri\u0219.8f84c232112f360c5878.png",
        Oo = n.p + "static/media/anato.4752d3f26111161a1170.png",
        Mo = n.p + "static/media/bilascu.5549516752df02e9d5de.png",
        _o =
          n.p +
          "static/media/cantin\u0103 \u0219i cabinet babe\u0219.c5e5e0b0188218068783.png",
        To = n.p + "static/media/cabinet h7.93d71d25ccf7c82e58e0.png",
        Do = n.p + "static/media/casierie.f820dfdcd378166eda07.png",
        Lo =
          n.p +
          "static/media/cucuianu \u0219i manta \u0219i preda.af0b7866eae0c8a33fda.png",
        Fo = n.p + "static/media/derma.3a7e13ae4a553f07c42c.png",
        Ro = n.p + "static/media/dorofteiu.1f10bf564f2db5a8dc0c.png",
        Io = n.p + "static/media/fizio.373282ddde1a030f5ff8.png",
        Bo = n.p + "static/media/turn genetic\u0103.9c418a82f7b0ae2ae365.png",
        Vo = n.p + "static/media/infec.7122804d110c09565a0e.png",
        Uo = n.p + "static/media/pasteur 6 st\xe2nga.b1a9d1c3e312d5bb4201.png",
        Ho = n.p + "static/media/turn.9c418a82f7b0ae2ae365.png",
        qo = n.p + "static/media/biostat.91c334b3b1cb5f617c6d.png",
        Wo = n.p + "static/media/medical\u01031.04a8773b75bcfb584e3b.png",
        Yo = n.p + "static/media/minea.3bf260b2214cc667d6cc.png",
        Qo = n.p + "static/media/ofta.3fba986eda18eb79d177.png",
        Go = n.p + "static/media/gine1.a3a05849b55a4e7dc714.png",
        Xo = n.p + "static/media/moldovan.a3642a1076034b5b99c5.png",
        $o = n.p + "static/media/multimedia.2effffbddfaa49d16df3.png",
        Ko =
          n.p +
          "static/media/aleman \u0219i opri\u0219.8f84c232112f360c5878.png",
        Zo = n.p + "static/media/popper.d47a5b8147241fef0565.png",
        Jo = n.p + "static/media/radio.513062084bb80ffb8a15.png",
        el = n.p + "static/media/recup.0bcc738946bf9dbd5a7a.png",
        tl =
          n.p + "static/media/registr, contab, taxe.f820dfdcd378166eda07.png",
        nl = n.p + "static/media/Simiti.c9bd6bd0796a960dba20.png";
      var al = function () {
          return (
            window.scrollTo(0, 0),
            (0, Te.jsxs)("div", {
              id: "amfiteatre-sali",
              children: [
                (0, Te.jsx)(zo, {}),
                (0, Te.jsx)("section", {
                  className: "main",
                  children: (0, Te.jsxs)("div", {
                    className: "content",
                    children: [
                      (0, Te.jsx)(Co, {
                        img: tl,
                        href: Wr.resurse.amfiteatreSali.registratura.index,
                        title: "Registratur\u0103",
                        subtitle: "",
                        maps: Wr.resurse.amfiteatreSali.registratura.maps,
                        model3d: Wr.resurse.amfiteatreSali.registratura.model3d,
                      }),
                      (0, Te.jsx)(Co, {
                        img: Do,
                        href: Wr.resurse.amfiteatreSali.casierie.index,
                        title: "Casierie \u0219i birou taxe",
                        subtitle: "",
                        maps: Wr.resurse.amfiteatreSali.casierie.maps,
                        model3d: Wr.resurse.amfiteatreSali.casierie.model3d,
                      }),
                      (0, Te.jsx)(Co, {
                        img: _o,
                        href: Wr.resurse.amfiteatreSali.cabinetBabes.index,
                        title:
                          "Cabinet medical Babe\u0219 \u0219i cantin\u0103",
                        subtitle: "",
                        maps: Wr.resurse.amfiteatreSali.cabinetBabes.maps,
                        model3d: Wr.resurse.amfiteatreSali.cabinetBabes.model3d,
                      }),
                      (0, Te.jsx)(Co, {
                        img: To,
                        href: Wr.resurse.amfiteatreSali.cabinetHasdeu.index,
                        title: "Cabinet medical Ha\u0219deu",
                        subtitle: "",
                        maps: Wr.resurse.amfiteatreSali.cabinetHasdeu.maps,
                        model3d:
                          Wr.resurse.amfiteatreSali.cabinetHasdeu.model3d,
                      }),
                      (0, Te.jsx)(Co, {
                        img: Wo,
                        href: Wr.resurse.amfiteatreSali.medicala1.index,
                        title: "Amfiteatrul Iuliu Ha\u021bieganu",
                        subtitle: "Medical\u0103 I",
                        maps: Wr.resurse.amfiteatreSali.medicala1.maps,
                        model3d: Wr.resurse.amfiteatreSali.medicala1.model3d,
                      }),
                      (0, Te.jsx)(Co, {
                        img: Eo,
                        href: Wr.resurse.amfiteatreSali.anatomie.index,
                        title: "Amfiteatrul Papilian-Albu",
                        subtitle: "Anatomie Uman\u0103",
                        maps: Wr.resurse.amfiteatreSali.anatomie.maps,
                        model3d: Wr.resurse.amfiteatreSali.anatomie.model3d,
                      }),
                      (0, Te.jsx)(Co, {
                        img: Lo,
                        href: Wr.resurse.amfiteatreSali.cucuianuMantaPreda
                          .index,
                        title: "Amfiteatrele Cucuianu, Manta, Preda",
                        subtitle: "",
                        maps: Wr.resurse.amfiteatreSali.cucuianuMantaPreda.maps,
                        model3d:
                          Wr.resurse.amfiteatreSali.cucuianuMantaPreda.model3d,
                      }),
                      (0, Te.jsx)(Co, {
                        img: Xo,
                        href: Wr.resurse.amfiteatreSali.moldovan.index,
                        title: "Amfiteatrul Iuliu Moldovan",
                        subtitle: "",
                        maps: Wr.resurse.amfiteatreSali.moldovan.maps,
                        model3d: Wr.resurse.amfiteatreSali.moldovan.model3d,
                      }),
                      (0, Te.jsx)(Co, {
                        img: Io,
                        href: Wr.resurse.amfiteatreSali.fiziologie.index,
                        title: "Amfiteatrul Fiziologie",
                        subtitle: "",
                        maps: Wr.resurse.amfiteatreSali.fiziologie.maps,
                        model3d: Wr.resurse.amfiteatreSali.fiziologie.model3d,
                      }),
                      (0, Te.jsx)(Co, {
                        img: Ro,
                        href: Wr.resurse.amfiteatreSali.dorofteiu.index,
                        title: "Amfiteatrul Dorofteiu",
                        subtitle: "",
                        maps: Wr.resurse.amfiteatreSali.dorofteiu.maps,
                        model3d: Wr.resurse.amfiteatreSali.dorofteiu.model3d,
                      }),
                      (0, Te.jsx)(Co, {
                        img: Po,
                        href: Wr.resurse.amfiteatreSali.aleman.index,
                        title: "Amfiteatrul Aleman",
                        subtitle: "Victor Babe\u0219 2",
                        maps: Wr.resurse.amfiteatreSali.aleman.maps,
                        model3d: Wr.resurse.amfiteatreSali.aleman.model3d,
                      }),
                      (0, Te.jsx)(Co, {
                        img: Oo,
                        href: Wr.resurse.amfiteatreSali.anatomiePatologica
                          .index,
                        title: "Amfiteatrul Titu-Vasiliu",
                        subtitle: "Anatomie Patologic\u0103",
                        maps: Wr.resurse.amfiteatreSali.anatomiePatologica.maps,
                        model3d:
                          Wr.resurse.amfiteatreSali.anatomiePatologica.model3d,
                      }),
                      (0, Te.jsx)(Co, {
                        img: Mo,
                        href: Wr.resurse.amfiteatreSali.bilascu.index,
                        title: "Amfiteatrul Gheorghe Bila\u0219cu",
                        subtitle: "Stomatologie 1",
                        maps: Wr.resurse.amfiteatreSali.bilascu.maps,
                        model3d: Wr.resurse.amfiteatreSali.bilascu.model3d,
                      }),
                      (0, Te.jsx)(Co, {
                        img: Ko,
                        href: Wr.resurse.amfiteatreSali.opris.index,
                        title: "Amfiteatrul Opri\u0219",
                        subtitle: "Victor Babe\u0219 2",
                        maps: Wr.resurse.amfiteatreSali.opris.maps,
                        model3d: Wr.resurse.amfiteatreSali.opris.model3d,
                      }),
                      (0, Te.jsx)(Co, {
                        img: Fo,
                        href: Wr.resurse.amfiteatreSali.dermatologie.index,
                        title: "Amfiteatrul Dermatologie",
                        subtitle: "",
                        maps: Wr.resurse.amfiteatreSali.dermatologie.maps,
                        model3d: Wr.resurse.amfiteatreSali.dermatologie.model3d,
                      }),
                      (0, Te.jsx)(Co, {
                        img: Vo,
                        href: Wr.resurse.amfiteatreSali.infectioase.index,
                        title: "Amfiteatrul Boli Infec\u021bioase",
                        subtitle: "",
                        maps: Wr.resurse.amfiteatreSali.infectioase.maps,
                        model3d: Wr.resurse.amfiteatreSali.infectioase.model3d,
                      }),
                      (0, Te.jsx)(Co, {
                        img: Yo,
                        href: Wr.resurse.amfiteatreSali.minea.index,
                        title: "Amfiteatrul Ion Minea",
                        subtitle: "Neurologie",
                        maps: Wr.resurse.amfiteatreSali.minea.maps,
                        model3d: Wr.resurse.amfiteatreSali.minea.model3d,
                      }),
                      (0, Te.jsx)(Co, {
                        img: Qo,
                        href: Wr.resurse.amfiteatreSali.ofta.index,
                        title: "Amfiteatrul Oftalmologie",
                        subtitle: "",
                        maps: Wr.resurse.amfiteatreSali.ofta.maps,
                        model3d: Wr.resurse.amfiteatreSali.ofta.model3d,
                      }),
                      (0, Te.jsx)(Co, {
                        img: Go,
                        href: Wr.resurse.amfiteatreSali.gine1.index,
                        title: "Amfiteatrul Ginecologie I",
                        subtitle: "",
                        maps: Wr.resurse.amfiteatreSali.gine1.maps,
                        model3d: Wr.resurse.amfiteatreSali.gine1.model3d,
                      }),
                      (0, Te.jsx)(Co, {
                        img: Zo,
                        href: Wr.resurse.amfiteatreSali.popper.index,
                        title: "Amfiteatrul Erwin Popper",
                        subtitle: "Farmacie A",
                        maps: Wr.resurse.amfiteatreSali.popper.maps,
                        model3d: Wr.resurse.amfiteatreSali.popper.model3d,
                      }),
                      (0, Te.jsx)(Co, {
                        img: Jo,
                        href: Wr.resurse.amfiteatreSali.radiologie.index,
                        title: "Amfiteatrul Dimitrie Negru",
                        subtitle: "Radiologie",
                        maps: Wr.resurse.amfiteatreSali.radiologie.maps,
                        model3d: Wr.resurse.amfiteatreSali.radiologie.model3d,
                      }),
                      (0, Te.jsx)(Co, {
                        img: el,
                        href: Wr.resurse.amfiteatreSali.recuperare.index,
                        title: "Amfiteatrul Nicolae Andronescu",
                        subtitle: "Recuperare",
                        maps: Wr.resurse.amfiteatreSali.recuperare.maps,
                        model3d: Wr.resurse.amfiteatreSali.recuperare.model3d,
                      }),
                      (0, Te.jsx)(Co, {
                        img: nl,
                        href: Wr.resurse.amfiteatreSali.simiti.index,
                        title: "Amfiteatrul I. Simiti",
                        subtitle: "Farmacie",
                        maps: Wr.resurse.amfiteatreSali.simiti.maps,
                        model3d: Wr.resurse.amfiteatreSali.simiti.model3d,
                      }),
                      (0, Te.jsx)(Co, {
                        img: Ho,
                        href: Wr.resurse.amfiteatreSali.labBiofizica.index,
                        title: "Laborator biofizic\u0103",
                        subtitle: "Turn biofizic\u0103",
                        maps: Wr.resurse.amfiteatreSali.labBiofizica.maps,
                        model3d: Wr.resurse.amfiteatreSali.labBiofizica.model3d,
                      }),
                      (0, Te.jsx)(Co, {
                        img: Uo,
                        href: Wr.resurse.amfiteatreSali.labBiocel.index,
                        title: "Laborator biologie celular\u0103",
                        subtitle: "",
                        maps: Wr.resurse.amfiteatreSali.labBiocel.maps,
                        model3d: Wr.resurse.amfiteatreSali.labBiocel.model3d,
                      }),
                      (0, Te.jsx)(Co, {
                        img: qo,
                        href: Wr.resurse.amfiteatreSali.labBiostat.index,
                        title: "Laborator biostatistic\u0103 \u0219i MCS",
                        subtitle: "",
                        maps: Wr.resurse.amfiteatreSali.labBiostat.maps,
                        model3d: Wr.resurse.amfiteatreSali.labBiostat.model3d,
                      }),
                      (0, Te.jsx)(Co, {
                        img: Bo,
                        href: Wr.resurse.amfiteatreSali.genetica.index,
                        title: "Laborator genetic\u0103",
                        subtitle: "Turn genetic\u0103",
                        maps: Wr.resurse.amfiteatreSali.genetica.maps,
                        model3d: Wr.resurse.amfiteatreSali.genetica.model3d,
                      }),
                      (0, Te.jsx)(Co, {
                        img: $o,
                        href: Wr.resurse.amfiteatreSali.multimedia.index,
                        title: "Sala Multimedia",
                        subtitle: "",
                        maps: Wr.resurse.amfiteatreSali.multimedia.maps,
                        model3d: Wr.resurse.amfiteatreSali.multimedia.model3d,
                      }),
                    ],
                  }),
                }),
              ],
            })
          );
        },
        rl = n.p + "static/media/poza1.2f000f7657702156b9c6.jpg",
        il = n.p + "static/media/poza2.f88840e862db6831f8f2.jpg",
        sl = n.p + "static/media/poza3.e47c2a5d080576cf7129.jpg";
      var ol = function () {
          window.scrollTo(0, 0);
          var e = Wr.resurse.amfiteatreSali.registratura.maps,
            t = Wr.resurse.amfiteatreSali.registratura.model3d;
          return (0, Te.jsxs)("div", {
            id: "registratura",
            className: "amfiteatru",
            children: [
              (0, Te.jsxs)("header", {
                children: [
                  (0, Te.jsx)("div", {
                    className: "img-container",
                    children: (0, Te.jsx)("img", { src: tl, alt: "maps" }),
                  }),
                  (0, Te.jsxs)("div", {
                    className: "container",
                    children: [
                      (0, Te.jsx)("h3", {
                        className: "title",
                        children: "Registratur\u0103",
                      }),
                      (0, Te.jsxs)("div", {
                        className: "buttons-container",
                        children: [
                          "" !== e
                            ? (0, Te.jsxs)("a", {
                                href: e,
                                children: [
                                  (0, Te.jsx)(pr, { icon: xr }),
                                  "Maps",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t && "" !== e
                            ? (0, Te.jsx)("div", { className: "stretcher row" })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t
                            ? (0, Te.jsxs)("a", {
                                href: t,
                                children: [
                                  (0, Te.jsx)(pr, { icon: wr }),
                                  "3D Model",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, Te.jsx)("section", {
                className: "main",
                children: (0, Te.jsxs)("section", {
                  className: "content",
                  children: [
                    (0, Te.jsx)("h3", {
                      className: "title",
                      children: "Cum ajung la registratur\u0103?",
                    }),
                    (0, Te.jsx)("img", { src: rl, alt: "poza1" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Intra\u021bi prin intrarea de pe Louis Pasteur 6, unde e bariera \u0219i bustul lui Woodrow Wilson \u0219i merget\u021bi \xeen fa\u021b\u0103.",
                    }),
                    (0, Te.jsx)("img", { src: il, alt: "poza2" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Merge\u021bi tot \xeen fa\u021b\u0103 p\xe2n\u0103 ajunge\u021bi la intrarea \xeen decanat, care e pe pe partea dreapt\u0103, cu c\xe2teva trepte. Intra\u021bi pe u\u0219\u0103.",
                    }),
                    (0, Te.jsx)("img", { src: sl, alt: "poza3" }),
                    (0, Te.jsx)("p", {
                      children: "Imediat pe st\xe2nga e registratura.",
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        ll = n.p + "static/media/poza1.2f000f7657702156b9c6.jpg",
        cl = n.p + "static/media/poza2.f88840e862db6831f8f2.jpg",
        ul = n.p + "static/media/poza3.6fd7a4da7456eafe5f2f.jpg",
        dl = n.p + "static/media/poza4.eccf3186861b8911ff0e.jpg";
      var fl = function () {
          window.scrollTo(0, 0);
          var e = Wr.resurse.amfiteatreSali.casierie.maps,
            t = Wr.resurse.amfiteatreSali.casierie.model3d;
          return (0, Te.jsxs)("div", {
            id: "casierie",
            className: "amfiteatru",
            children: [
              (0, Te.jsxs)("header", {
                children: [
                  (0, Te.jsx)("div", {
                    className: "img-container",
                    children: (0, Te.jsx)("img", { src: Do, alt: "maps" }),
                  }),
                  (0, Te.jsxs)("div", {
                    className: "container",
                    children: [
                      (0, Te.jsx)("h3", {
                        className: "title",
                        children: "Casierie \u0219i birou taxe",
                      }),
                      (0, Te.jsxs)("div", {
                        className: "buttons-container",
                        children: [
                          "" !== e
                            ? (0, Te.jsxs)("a", {
                                href: e,
                                children: [
                                  (0, Te.jsx)(pr, { icon: xr }),
                                  "Maps",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t && "" !== e
                            ? (0, Te.jsx)("div", { className: "stretcher row" })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t
                            ? (0, Te.jsxs)("a", {
                                href: t,
                                children: [
                                  (0, Te.jsx)(pr, { icon: wr }),
                                  "3D Model",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, Te.jsx)("section", {
                className: "main",
                children: (0, Te.jsxs)("section", {
                  className: "content",
                  children: [
                    (0, Te.jsx)("h3", {
                      className: "title",
                      children:
                        "Cum ajung la casierie \u0219i la biroul de taxe?",
                    }),
                    (0, Te.jsx)("img", { src: ll, alt: "poza1" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Intra\u021bi prin intrarea de pe Louis Pasteur 6, unde e bariera \u0219i bustul lui Woodrow Wilson \u0219i merget\u021bi \xeen fa\u021b\u0103.",
                    }),
                    (0, Te.jsx)("img", { src: cl, alt: "poza2" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Merge\u021bi tot \xeen fa\u021b\u0103 p\xe2n\u0103 ajunge\u021bi la intrarea \xeen decanat, care e pe pe partea dreapt\u0103, cu c\xe2teva trepte. Intra\u021bi pe u\u0219\u0103.",
                    }),
                    (0, Te.jsx)("img", { src: ul, alt: "poza3" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Face\u021bi st\xe2nga ca s\u0103 ajunge\u021bi \xeen vestibulul cu registratura \u0219i apoi face\u021bi st\xe2nga din nou pe holul din fa\u021ba voastr\u0103.",
                    }),
                    (0, Te.jsx)("img", { src: dl, alt: "poza4" }),
                    (0, Te.jsx)("p", {
                      children:
                        "\xcen cap\u0103tul holului este casieria pe dreapta (s\u0103geat\u0103 albastr\u0103) \u0219i biroul de taxe pe st\xe2nga (s\u0103geat\u0103 galben\u0103). \xcen mod normal, prima oar\u0103 merge\u021bi la biroul de taxe pentru devizul de plat\u0103 \u0219i apoi la casierie ca s\u0103 pl\u0103ti\u021bi efectiv \u0219i s\u0103 v\u0103 lua\u021bi dovada pl\u0103\u021bii.",
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        ml = n.p + "static/media/poza1.e093cc1c8f9b646f9ff4.jpg";
      var pl = function () {
          window.scrollTo(0, 0);
          var e = Wr.resurse.amfiteatreSali.cabinetBabes.maps,
            t = Wr.resurse.amfiteatreSali.cabinetBabes.model3d;
          return (0, Te.jsxs)("div", {
            id: "cabinetBabes",
            className: "amfiteatru",
            children: [
              (0, Te.jsxs)("header", {
                children: [
                  (0, Te.jsx)("div", {
                    className: "img-container",
                    children: (0, Te.jsx)("img", { src: _o, alt: "maps" }),
                  }),
                  (0, Te.jsxs)("div", {
                    className: "container",
                    children: [
                      (0, Te.jsx)("h3", {
                        className: "title",
                        children:
                          "Cabinet medical Babe\u0219 \u0219i cantin\u0103",
                      }),
                      (0, Te.jsxs)("div", {
                        className: "buttons-container",
                        children: [
                          "" !== e
                            ? (0, Te.jsxs)("a", {
                                href: e,
                                children: [
                                  (0, Te.jsx)(pr, { icon: xr }),
                                  "Maps",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t && "" !== e
                            ? (0, Te.jsx)("div", { className: "stretcher row" })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t
                            ? (0, Te.jsxs)("a", {
                                href: t,
                                children: [
                                  (0, Te.jsx)(pr, { icon: wr }),
                                  "3D Model",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, Te.jsx)("section", {
                className: "main",
                children: (0, Te.jsxs)("section", {
                  className: "content",
                  children: [
                    (0, Te.jsx)("h3", {
                      className: "title",
                      children:
                        "Cum ajung la cabinetul medical de pe Babe\u0219 \u0219i la cantin\u0103?",
                    }),
                    (0, Te.jsx)("img", { src: ml, alt: "poza1" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Cantina se afl\u0103 sub intrarea unde scrie \u201eRestaurant UMF\u201d (s\u0103geata galben\u0103). Pentru cabinet, intra\u021bi prin gangul cu sticl\u0103 verde (s\u0103geata ro\u0219ie), face\u021bi dreapta \u0219i \xeen cap\u0103t urca\u021bi la etajul 2.",
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        hl = n.p + "static/media/poza1.4303073f511395eacb29.jpg";
      var gl = function () {
          window.scrollTo(0, 0);
          var e = Wr.resurse.amfiteatreSali.cabinetHasdeu.maps,
            t = Wr.resurse.amfiteatreSali.cabinetHasdeu.model3d;
          return (0, Te.jsxs)("div", {
            id: "anatomie",
            className: "amfiteatru",
            children: [
              (0, Te.jsxs)("header", {
                children: [
                  (0, Te.jsx)("div", {
                    className: "img-container",
                    children: (0, Te.jsx)("img", { src: To, alt: "maps" }),
                  }),
                  (0, Te.jsxs)("div", {
                    className: "container",
                    children: [
                      (0, Te.jsx)("h3", {
                        className: "title",
                        children: "Cabinet medical Ha\u0219deu",
                      }),
                      (0, Te.jsxs)("div", {
                        className: "buttons-container",
                        children: [
                          "" !== e
                            ? (0, Te.jsxs)("a", {
                                href: e,
                                children: [
                                  (0, Te.jsx)(pr, { icon: xr }),
                                  "Maps",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t && "" !== e
                            ? (0, Te.jsx)("div", { className: "stretcher row" })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t
                            ? (0, Te.jsxs)("a", {
                                href: t,
                                children: [
                                  (0, Te.jsx)(pr, { icon: wr }),
                                  "3D Model",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, Te.jsx)("section", {
                className: "main",
                children: (0, Te.jsxs)("section", {
                  className: "content",
                  children: [
                    (0, Te.jsx)("h3", {
                      className: "title",
                      children: "Cum ajung la cabinet medical din Ha\u0219deu?",
                    }),
                    (0, Te.jsx)("img", { src: hl, alt: "poza1" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Cabinetul medical se afl\u0103 pe laterala c\u0103minului H7 care bate \xeenspre c\u0103minul B11 (spre vest), la parter, cu intrare marcat\u0103. Sala de a\u0219teptare e prima pe st\xe2nga iar cabinetul propriu-zis e mai \xeen fa\u021b\u0103.",
                    }),
                    (0, Te.jsx)("p", {
                      children:
                        "A nu se confunda cu cabinetul medical de pe str. Victor Babe\u0219, de l\xe2ng\u0103 cantin\u0103.",
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        vl = n.p + "static/media/poza1.ea1c1ab8c5df110c90b0.jpg",
        bl = n.p + "static/media/poza2.cc30aa557430b9e9cbac.jpg",
        xl = n.p + "static/media/poza3.e9f7e1c7d9cea86d2d35.jpg",
        jl = n.p + "static/media/poza4.5b9aed8228301109142f.jpg",
        yl = n.p + "static/media/poza5.a9fc138138ee1c0c4dd9.jpg",
        Al = n.p + "static/media/poza6.9e1f00907d5fe90ad718.jpg",
        wl = n.p + "static/media/poza7.e2c5f7deba9211dbd444.jpg",
        kl = n.p + "static/media/poza8.2697db89d651a03862d6.jpg",
        Sl = n.p + "static/media/medical\u01031.7ac29980020c7cf77e44.mp4";
      var Nl = function () {
          window.scrollTo(0, 0);
          var e = Wr.resurse.amfiteatreSali.medicala1.maps,
            t = Wr.resurse.amfiteatreSali.medicala1.model3d;
          return (0, Te.jsxs)("div", {
            id: "medicala-1",
            className: "amfiteatru",
            children: [
              (0, Te.jsxs)("header", {
                children: [
                  (0, Te.jsx)("div", {
                    className: "img-container",
                    children: (0, Te.jsx)("img", { src: Wo, alt: "maps" }),
                  }),
                  (0, Te.jsxs)("div", {
                    className: "container",
                    children: [
                      (0, Te.jsx)("h3", {
                        className: "title",
                        children:
                          "Amfiteatrul Iuliu Ha\u021bieganu - Medical\u0103 I",
                      }),
                      (0, Te.jsxs)("div", {
                        className: "buttons-container",
                        children: [
                          "" !== e
                            ? (0, Te.jsxs)("a", {
                                href: e,
                                children: [
                                  (0, Te.jsx)(pr, { icon: xr }),
                                  "Maps",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t && "" !== e
                            ? (0, Te.jsx)("div", { className: "stretcher row" })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t
                            ? (0, Te.jsxs)("a", {
                                href: t,
                                children: [
                                  (0, Te.jsx)(pr, { icon: wr }),
                                  "3D Model",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, Te.jsx)("section", {
                className: "main",
                children: (0, Te.jsxs)("section", {
                  className: "content",
                  children: [
                    (0, Te.jsx)("h3", {
                      className: "title",
                      children:
                        "Cum ajung la amfiteatrul Iuliu Ha\u021bieganu - Medical\u0103 I?",
                    }),
                    (0, Te.jsxs)("video", {
                      controls: !0,
                      children: [
                        (0, Te.jsx)("source", { src: Sl, type: "video/mp4" }),
                        "Your browser does not support the video tag.",
                      ],
                    }),
                    (0, Te.jsx)("img", { src: vl, alt: "poza1" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Intra\u021bi pe aceast\u0103 strad\u0103, dinspre Babe\u0219, \xeen incinta complexului Spitalului Jude\u021bean de Urgen\u021b\u0103 Cluj.",
                    }),
                    (0, Te.jsx)("img", { src: bl, alt: "poza2" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Dup\u0103 ce a\u021bi intrat, dup\u0103 c\xe2\u021biva metri pe dreapta va fi o scar\u0103 spre partea cu spitalele de mai de jos (imediat \xeenainte de bariere).",
                    }),
                    (0, Te.jsx)("img", { src: xl, alt: "poza3" }),
                    (0, Te.jsx)("img", { src: jl, alt: "poza4" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Dup\u0103 ce a\u021bi cobor\xe2t, face\u021bi st\xe2nga \u0219i merge\u021bi tot \xeenainte.",
                    }),
                    (0, Te.jsx)("img", { src: yl, alt: "poza5" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Dup\u0103 ce a\u021bi trecut de unitatea de primiri urgen\u021be \u0219i de sc\u0103rile care duc la pavilioanele de pe strada de sus, la Anatomie (pe st\xe2nga), ve\u021bi vedea cl\u0103direa Medicalei I.",
                    }),
                    (0, Te.jsx)("img", { src: Al, alt: "poza6" }),
                    (0, Te.jsx)("p", {
                      children: "Intra\u021bi pe intrarea principal\u0103.",
                    }),
                    (0, Te.jsx)("img", { src: wl, alt: "poza7" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Odat\u0103 intra\u021bi, merge\u021bi \xeen fa\u021b\u0103 \u0219i intra\u021bi pe u\u0219a din dreapta liftului.",
                    }),
                    (0, Te.jsx)("img", { src: kl, alt: "poza8" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Amfiteatrul e tot \xeen fa\u021b\u0103 dup\u0103 \xeenc\u0103 2 seturi de u\u0219i. Grij\u0103 la urcare, e abrupt!",
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        zl = n.p + "static/media/med 2.5e366d56778419175f7d.png",
        Cl = n.p + "static/media/med2.1.e4e9342cc5d1e66df219.jpeg",
        El = n.p + "static/media/med2.2.854fb687197f1bedae39.jpeg",
        Pl = n.p + "static/media/med2.3.ad124c67a73e5b42157f.jpeg",
        Ol = n.p + "static/media/med2.4.91fbd72a0ff9ca18155a.jpeg",
        Ml = n.p + "static/media/med2.5.4340ba0df70f88b9ea83.jpeg",
        _l = n.p + "static/media/med2.6.744ffc767e4a5c8ce0bc.jpeg",
        Tl = n.p + "static/media/time-lapse med 2.e9664c4aa96f7b20ba65.mp4";
      var Dl = function () {
          window.scrollTo(0, 0);
          var e = Wr.resurse.amfiteatreSali.medicala2.maps,
            t = Wr.resurse.amfiteatreSali.medicala2.model3d;
          return (0, Te.jsxs)("div", {
            id: "medicala-2",
            className: "amfiteatru",
            children: [
              (0, Te.jsxs)("header", {
                children: [
                  (0, Te.jsx)("div", {
                    className: "img-container",
                    children: (0, Te.jsx)("img", { src: zl, alt: "maps" }),
                  }),
                  (0, Te.jsxs)("div", {
                    className: "container",
                    children: [
                      (0, Te.jsx)("h3", {
                        className: "title",
                        children: "Amfiteatrul Ioan Goia - Medical\u0103 II",
                      }),
                      (0, Te.jsxs)("div", {
                        className: "buttons-container",
                        children: [
                          "" !== e
                            ? (0, Te.jsxs)("a", {
                                href: e,
                                children: [
                                  (0, Te.jsx)(pr, { icon: xr }),
                                  "Maps",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t && "" !== e
                            ? (0, Te.jsx)("div", { className: "stretcher row" })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t
                            ? (0, Te.jsxs)("a", {
                                href: t,
                                children: [
                                  (0, Te.jsx)(pr, { icon: wr }),
                                  "3D Model",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, Te.jsx)("section", {
                className: "main",
                children: (0, Te.jsxs)("section", {
                  className: "content",
                  children: [
                    (0, Te.jsx)("h3", {
                      className: "title",
                      children:
                        "Cum ajung la amfiteatrul Ioan Goia - Medical\u0103 II?",
                    }),
                    (0, Te.jsxs)("video", {
                      controls: !0,
                      children: [
                        (0, Te.jsx)("source", { src: Tl, type: "video/mp4" }),
                        "Your browser does not support the video tag.",
                      ],
                    }),
                    (0, Te.jsx)("img", { src: Cl, alt: "poza1" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Intrarea \xeen spital se face de pe strada Clinicilor.",
                    }),
                    (0, Te.jsx)("img", { src: El, alt: "poza2" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Holul intr\u0103rii, u\u0219a se deschide cu cartela personalului medical a spitalului/ portar. Mai departe trebuie mers \xeen fa\u021b\u0103, pe u\u0219a din dreapta liftului.",
                    }),
                    (0, Te.jsx)("img", { src: Pl, alt: "poza3" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Ajung\xe2nd \xeen curtea spitalului, p\u0103stra\u021bi aleea.",
                    }),
                    (0, Te.jsx)("img", { src: Ol, alt: "poza4" }),
                    (0, Te.jsx)("p", {
                      children:
                        "La finalul aleei se observ\u0103 u\u0219a de intrare spre sc\u0103rile ce duc la amfiteatru.",
                    }),
                    (0, Te.jsx)("img", { src: Ml, alt: "poza5" }),
                    (0, Te.jsx)("p", {
                      children: "Sc\u0103rile ce duc la amfiteatru.",
                    }),
                    (0, Te.jsx)("img", { src: _l, alt: "poza6" }),
                    (0, Te.jsx)("p", {
                      children: "La etajul 1 este amfiteatrul.",
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        Ll = n.p + "static/media/poza1.ea1c1ab8c5df110c90b0.jpg",
        Fl = n.p + "static/media/poza2.a9616bcdd1e561264d55.jpg",
        Rl = n.p + "static/media/poza3.99d1fbfd3585becb2887.jpg",
        Il = n.p + "static/media/poza4.75c38ae65c65159e21a3.jpg",
        Bl = n.p + "static/media/poza5.75abb7429878ad8db684.jpg",
        Vl = n.p + "static/media/poza6.774fd71c7a931747f9a2.jpg",
        Ul = n.p + "static/media/poza7.9d9f64bf25757d77e63f.jpg",
        Hl = n.p + "static/media/anato.cf74af53423a0ce3de22.mp4";
      var ql = function () {
          window.scrollTo(0, 0);
          var e = Wr.resurse.amfiteatreSali.anatomie.maps,
            t = Wr.resurse.amfiteatreSali.anatomie.model3d;
          return (0, Te.jsxs)("div", {
            id: "anatomie",
            className: "amfiteatru",
            children: [
              (0, Te.jsxs)("header", {
                children: [
                  (0, Te.jsx)("div", {
                    className: "img-container",
                    children: (0, Te.jsx)("img", { src: Eo, alt: "maps" }),
                  }),
                  (0, Te.jsxs)("div", {
                    className: "container",
                    children: [
                      (0, Te.jsx)("h3", {
                        className: "title",
                        children:
                          "Amfiteatrul Papilian-Albu - Anatomie Uman\u0103",
                      }),
                      (0, Te.jsxs)("div", {
                        className: "buttons-container",
                        children: [
                          "" !== e
                            ? (0, Te.jsxs)("a", {
                                href: e,
                                children: [
                                  (0, Te.jsx)(pr, { icon: xr }),
                                  "Maps",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t && "" !== e
                            ? (0, Te.jsx)("div", { className: "stretcher row" })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t
                            ? (0, Te.jsxs)("a", {
                                href: t,
                                children: [
                                  (0, Te.jsx)(pr, { icon: wr }),
                                  "3D Model",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, Te.jsx)("section", {
                className: "main",
                children: (0, Te.jsxs)("section", {
                  className: "content",
                  children: [
                    (0, Te.jsx)("h3", {
                      className: "title",
                      children:
                        "Cum ajung la amfiteatrul Papilian-Albu - Anatomie Uman\u0103?",
                    }),
                    (0, Te.jsxs)("video", {
                      controls: !0,
                      children: [
                        (0, Te.jsx)("source", { src: Hl, type: "video/mp4" }),
                        "Your browser does not support the video tag.",
                      ],
                    }),
                    (0, Te.jsx)("img", { src: Ll, alt: "poza1" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Intra\u021bi pe aceast\u0103 strad\u0103, dinspre Babe\u0219, \xeen incinta complexului Spitalului Jude\u021bean de Urgen\u021b\u0103 Cluj.",
                    }),
                    (0, Te.jsx)("img", { src: Fl, alt: "poza2" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Merge\u021bi tot \xeen fa\u021b\u0103 p\xe2n\u0103 la cap\u0103tul str\u0103zii.",
                    }),
                    (0, Te.jsx)("img", { src: Rl, alt: "poza3" }),
                    (0, Te.jsx)("p", {
                      children:
                        "\xcen cap\u0103t, pe st\xe2nga este cl\u0103direa cu Anatomia Uman\u0103 (\u0219i cea Patologic\u0103 \u0219i Legal\u0103, de altfel).",
                    }),
                    (0, Te.jsx)("img", { src: Il, alt: "poza4" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Pentru LP-uri, ve\u021bi merge \xeen dreapta sau \xeen sala dintre etaje, dar pentru amfiteatru urma\u021bi s\u0103geata \u0219i urca\u021bi la etaj.",
                    }),
                    (0, Te.jsx)("img", { src: Bl, alt: "poza5" }),
                    (0, Te.jsx)("p", {
                      children:
                        "C\xe2nd ajunge\u021bi la etaj, face\u021bi st\xe2nga.",
                    }),
                    (0, Te.jsx)("img", { src: Vl, alt: "poza6" }),
                    (0, Te.jsx)("p", {
                      children:
                        "La etaj, cum am spus, face\u021bi st\xe2nga \u0219i la cap\u0103tul holului va trebui s\u0103 face\u021bi iar st\xe2nga.",
                    }),
                    (0, Te.jsx)("img", { src: Ul, alt: "poza7" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Dup\u0103 acea a doua st\xe2nga, ve\u021bi vedea amfiteatrul \xeen cap\u0103t. Nu este mare, arat\u0103 mai degrab\u0103 ca o sal\u0103 uzual\u0103 de curs.",
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        Wl = n.p + "static/media/Poza 1.093b56c39de668ef4f0b.jpg",
        Yl = n.p + "static/media/Poza 2.9c04b67a1151e970173f.jpg",
        Ql = n.p + "static/media/Poza 3.9ade3db9d81808f2a7c8.jpg",
        Gl = n.p + "static/media/Poza 4.d4fa4721ac40c7b0ac5d.jpg",
        Xl = n.p + "static/media/Poza 5-Cucuianu.62d2ffca6239bbb12681.jpg",
        $l = n.p + "static/media/Poza 6.147694be23b9b5e6dd84.jpg",
        Kl = n.p + "static/media/Poza 7.b5c26034993e84682d3d.jpg",
        Zl = n.p + "static/media/Poza 8-Manta.8966809a38f029b8bbfa.jpg",
        Jl = n.p + "static/media/Poza 9-Preda.8cac1673d8ca39870204.jpg",
        ec = n.p + "static/media/Time lapse.2027d94f1ff63c491809.mp4";
      var tc = function () {
          window.scrollTo(0, 0);
          var e = Wr.resurse.amfiteatreSali.anatomie.maps,
            t = Wr.resurse.amfiteatreSali.anatomie.model3d;
          return (0, Te.jsxs)("div", {
            id: "anatomie",
            className: "amfiteatru",
            children: [
              (0, Te.jsxs)("header", {
                children: [
                  (0, Te.jsx)("div", {
                    className: "img-container",
                    children: (0, Te.jsx)("img", { src: Lo, alt: "maps" }),
                  }),
                  (0, Te.jsxs)("div", {
                    className: "container",
                    children: [
                      (0, Te.jsx)("h3", {
                        className: "title",
                        children: "Amfiteatrele Cucuianu, Manta, Preda",
                      }),
                      (0, Te.jsxs)("div", {
                        className: "buttons-container",
                        children: [
                          "" !== e
                            ? (0, Te.jsxs)("a", {
                                href: e,
                                children: [
                                  (0, Te.jsx)(pr, { icon: xr }),
                                  "Maps",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t && "" !== e
                            ? (0, Te.jsx)("div", { className: "stretcher row" })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t
                            ? (0, Te.jsxs)("a", {
                                href: t,
                                children: [
                                  (0, Te.jsx)(pr, { icon: wr }),
                                  "3D Model",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, Te.jsx)("section", {
                className: "main",
                children: (0, Te.jsxs)("section", {
                  className: "content",
                  children: [
                    (0, Te.jsx)("h3", {
                      className: "title",
                      children:
                        "Cum ajung la amfiteatrele Cucuianu, Manta, Preda?",
                    }),
                    (0, Te.jsxs)("video", {
                      controls: !0,
                      children: [
                        (0, Te.jsx)("source", { src: ec, type: "video/mp4" }),
                        "Your browser does not support the video tag.",
                      ],
                    }),
                    (0, Te.jsx)("img", { src: Wl, alt: "poza1" }),
                    (0, Te.jsx)("p", {
                      children:
                        "De pe strada Pasteur intra\u021bi \xeen curtea principal\u0103.",
                    }),
                    (0, Te.jsx)("img", { src: Yl, alt: "poza2" }),
                    (0, Te.jsx)("img", { src: Ql, alt: "poza3" }),
                    (0, Te.jsx)("p", {
                      children:
                        "\xcenainta\u021bi prin curte pe sub arcadele din fa\u021b\u0103.",
                    }),
                    (0, Te.jsx)("img", { src: Gl, alt: "poza4" }),
                    (0, Te.jsx)("p", {
                      children:
                        "\xcen cl\u0103direa de sticl\u0103 sunt amfiteatrele Cucuianu, Manta, Preda.",
                    }),
                    (0, Te.jsx)("img", { src: Xl, alt: "poza5" }),
                    (0, Te.jsx)("p", {
                      children:
                        "La parter cum intra\u021bi \xeen fa\u021b\u0103 se afl\u0103 Amf. Cucuianu. ",
                    }),
                    (0, Te.jsx)("img", { src: $l, alt: "poza6" }),
                    (0, Te.jsx)("p", {
                      children:
                        "\xcen st\xe2nga cum intra\u021bi se afl\u0103 un set de sc\u0103ri pe care trebuie s\u0103 urca\u021bi ca s\u0103 ajunge\u021bi la Amf. Manta \u0219i Preda.",
                    }),
                    (0, Te.jsx)("img", { src: Kl, alt: "poza7" }),
                    (0, Te.jsx)("p", {
                      children:
                        "La etajul 1 se afl\u0103 Manta iar la 2 Preda.",
                    }),
                    (0, Te.jsx)("img", { src: Zl, alt: "poza8" }),
                    (0, Te.jsx)("p", {
                      children:
                        "La etajul 1 unde e pictura cu \xeengera\u0219i se afl\u0103 Amf Manta.",
                    }),
                    (0, Te.jsx)("img", { src: Jl, alt: "poza9" }),
                    (0, Te.jsx)("p", {
                      children:
                        "La etajul 2 unde este pictura albastr\u0103 se afl\u0103 Amf. Preda.",
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        nc = n.p + "static/media/1.377cddf43ae09e645bff.jpg",
        ac = n.p + "static/media/2.ddcd97a795ff5b5f7eef.jpg",
        rc = n.p + "static/media/3.4e977818c8386cbf3bde.jpg",
        ic = n.p + "static/media/amf Moldovan.6daace791927f20ac981.mp4";
      var sc = function () {
          window.scrollTo(0, 0);
          var e = Wr.resurse.amfiteatreSali.moldovan.maps,
            t = Wr.resurse.amfiteatreSali.moldovan.model3d;
          return (0, Te.jsxs)("div", {
            id: "moldovan",
            className: "amfiteatru",
            children: [
              (0, Te.jsxs)("header", {
                children: [
                  (0, Te.jsx)("div", {
                    className: "img-container",
                    children: (0, Te.jsx)("img", { src: Xo, alt: "maps" }),
                  }),
                  (0, Te.jsxs)("div", {
                    className: "container",
                    children: [
                      (0, Te.jsx)("h3", {
                        className: "title",
                        children: "Amfiteatrul Iuliu Moldovan",
                      }),
                      (0, Te.jsxs)("div", {
                        className: "buttons-container",
                        children: [
                          "" !== e
                            ? (0, Te.jsxs)("a", {
                                href: e,
                                children: [
                                  (0, Te.jsx)(pr, { icon: xr }),
                                  "Maps",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t && "" !== e
                            ? (0, Te.jsx)("div", { className: "stretcher row" })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t
                            ? (0, Te.jsxs)("a", {
                                href: t,
                                children: [
                                  (0, Te.jsx)(pr, { icon: wr }),
                                  "3D Model",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, Te.jsx)("section", {
                className: "main",
                children: (0, Te.jsxs)("section", {
                  className: "content",
                  children: [
                    (0, Te.jsx)("h3", {
                      className: "title",
                      children: "Cum ajung la amfiteatrul Iuliu Moldovan?",
                    }),
                    (0, Te.jsxs)("video", {
                      controls: !0,
                      children: [
                        (0, Te.jsx)("source", { src: ic, type: "video/mp4" }),
                        "Your browser does not support the video tag.",
                      ],
                    }),
                    (0, Te.jsx)("p", {
                      children:
                        "Amfiteatrul Molodovan se afl\u0103 pe strada Louis Pasteur nr. 6, dar Google Maps v\u0103 trimite la num\u0103rul 4.",
                    }),
                    (0, Te.jsx)("img", { src: nc, alt: "poza1" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Folosi\u021bi s\u0103ge\u021bile de pe hart\u0103 ca s\u0103 v\u0103 ghida\u021bi \u0219i intra\u021bi pe prima u\u0219\u0103 la dreapta dup\u0103 ce intra\u021bi sub gang.",
                    }),
                    (0, Te.jsx)("img", { src: ac, alt: "poza2" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Dup\u0103 ce intra\u021bi, urca\u021bi \xeen dreapta pe sc\u0103rile din poz\u0103.",
                    }),
                    (0, Te.jsx)("img", { src: rc, alt: "poza3" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Drept \xeen fa\u021b\u0103 se afl\u0103 amfiteatrul Moldovan.",
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        oc = n.p + "static/media/poza1.ea1c1ab8c5df110c90b0.jpg",
        lc = n.p + "static/media/poza2.cc30aa557430b9e9cbac.jpg",
        cc = n.p + "static/media/poza3.200d76de4bf5b8e2e637.jpg",
        uc = n.p + "static/media/poza4.4fd2e095467f9871991c.jpg";
      var dc = function () {
          window.scrollTo(0, 0);
          var e = Wr.resurse.amfiteatreSali.fiziologie.maps,
            t = Wr.resurse.amfiteatreSali.fiziologie.model3d;
          return (0, Te.jsxs)("div", {
            id: "fiziologie",
            className: "amfiteatru",
            children: [
              (0, Te.jsxs)("header", {
                children: [
                  (0, Te.jsx)("div", {
                    className: "img-container",
                    children: (0, Te.jsx)("img", { src: Io, alt: "maps" }),
                  }),
                  (0, Te.jsxs)("div", {
                    className: "container",
                    children: [
                      (0, Te.jsx)("h3", {
                        className: "title",
                        children: "Amfiteatrul Fiziologie",
                      }),
                      (0, Te.jsxs)("div", {
                        className: "buttons-container",
                        children: [
                          "" !== e
                            ? (0, Te.jsxs)("a", {
                                href: e,
                                children: [
                                  (0, Te.jsx)(pr, { icon: xr }),
                                  "Maps",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t && "" !== e
                            ? (0, Te.jsx)("div", { className: "stretcher row" })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t
                            ? (0, Te.jsxs)("a", {
                                href: t,
                                children: [
                                  (0, Te.jsx)(pr, { icon: wr }),
                                  "3D Model",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, Te.jsx)("section", {
                className: "main",
                children: (0, Te.jsxs)("section", {
                  className: "content",
                  children: [
                    (0, Te.jsx)("h3", {
                      className: "title",
                      children: "Cum ajung la amfiteatrul de fiziologie?",
                    }),
                    (0, Te.jsx)("img", { src: oc, alt: "poza1" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Intra\u021bi pe aceast\u0103 strad\u0103, dinspre Babe\u0219, \xeen incinta complexului Spitalului Jude\u021bean de Urgen\u021b\u0103 Cluj.",
                    }),
                    (0, Te.jsx)("img", { src: lc, alt: "poza2" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Dup\u0103 ce a\u021bi intrat, dup\u0103 c\xe2\u021biva metri pe dreapta va fi o scar\u0103 spre partea cu spitalele de mai de jos (imediat \xeenainte de bariere).",
                    }),
                    (0, Te.jsx)("img", { src: cc, alt: "poza3" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Dup\u0103 ce a\u021bi cobor\xe2t, \xeen dreapta \u0219i un pic \xeen fa\u021b\u0103 va fi cl\u0103direa disciplinei de fiziologie. Amfiteatrul e pe fa\u021ba care d\u0103 spre voi.",
                    }),
                    (0, Te.jsx)("img", { src: uc, alt: "poza4" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Cum intra\u021bi, st\xe2nga, \u0219i apoi pe dreapta e amfiteatrul. Se poate urca \u0219i pe sc\u0103ri pentru a intra \xeen spatele amfiteatrului. Aten\u021bie, dup\u0103 cum spune \u0219i afi\u0219ul, intrarea cu trotinete e strict interzis\u0103!",
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        fc = n.p + "static/media/1.3be1e3c32153eb1f3348.jpg",
        mc = n.p + "static/media/2.4b9ad5aaba698e30fc24.jpg",
        pc = n.p + "static/media/3.81e220683cde7d6b42e6.jpg",
        hc = n.p + "static/media/4.e88a10f7675cdeb8dde3.jpg",
        gc = n.p + "static/media/amf Dorofteiu.cb63fc6b779cc39696c2.mp4";
      var vc = function () {
          window.scrollTo(0, 0);
          var e = Wr.resurse.amfiteatreSali.dorofteiu.maps,
            t = Wr.resurse.amfiteatreSali.dorofteiu.model3d;
          return (0, Te.jsxs)("div", {
            id: "dorofteiu",
            className: "amfiteatru",
            children: [
              (0, Te.jsxs)("header", {
                children: [
                  (0, Te.jsx)("div", {
                    className: "img-container",
                    children: (0, Te.jsx)("img", { src: Ro, alt: "maps" }),
                  }),
                  (0, Te.jsxs)("div", {
                    className: "container",
                    children: [
                      (0, Te.jsx)("h3", {
                        className: "title",
                        children:
                          "Amfiteatrul Papilian-Albu - Anatomie Uman\u0103",
                      }),
                      (0, Te.jsxs)("div", {
                        className: "buttons-container",
                        children: [
                          "" !== e
                            ? (0, Te.jsxs)("a", {
                                href: e,
                                children: [
                                  (0, Te.jsx)(pr, { icon: xr }),
                                  "Maps",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t && "" !== e
                            ? (0, Te.jsx)("div", { className: "stretcher row" })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t
                            ? (0, Te.jsxs)("a", {
                                href: t,
                                children: [
                                  (0, Te.jsx)(pr, { icon: wr }),
                                  "3D Model",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, Te.jsx)("section", {
                className: "main",
                children: (0, Te.jsxs)("section", {
                  className: "content",
                  children: [
                    (0, Te.jsx)("h3", {
                      className: "title",
                      children:
                        "Cum ajung la Amfiteatrul Papilian-Albu - Anatomie Uman\u0103?",
                    }),
                    (0, Te.jsxs)("video", {
                      controls: !0,
                      children: [
                        (0, Te.jsx)("source", { src: gc, type: "video/mp4" }),
                        "Your browser does not support the video tag.",
                      ],
                    }),
                    (0, Te.jsx)("img", { src: fc, alt: "poza1" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Urca\u021bi sc\u0103rile \u0219i intra\u021bi \xeen cl\u0103dire.",
                    }),
                    (0, Te.jsx)("img", { src: mc, alt: "poza2" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Cum a\u021bi intrat, merge\u021bi prin prima u\u0219\u0103 din dreapta p\xe2n\u0103 da\u021bi de ni\u0219te sc\u0103ri.",
                    }),
                    (0, Te.jsx)("img", { src: pc, alt: "poza3" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Urca\u021bi acele sc\u0103ri p\xe2n\u0103 ajunge\u021bi la intrarea \xeen sala din poze.",
                    }),
                    (0, Te.jsx)("img", { src: hc, alt: "poza4" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Privi\u021bi c\u0103tre dreapta dup\u0103 ce intra\u021bi \xeen sal\u0103 \u0219i veti repera amfiteatrul Dorofteiu.",
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        bc = n.p + "static/media/poza1.000e744bd17c0231b53f.jpg",
        xc = n.p + "static/media/poza2.a76dae6fadad3d184af5.jpg",
        jc = n.p + "static/media/poza3.d02ff6738c223670a61a.jpg",
        yc = n.p + "static/media/poza4.59f9e4c2b510aea62417.jpg",
        Ac = n.p + "static/media/poza5.db00458b263d25ccf013.jpg",
        wc = n.p + "static/media/aleman.ce600caaef6213491e1e.mp4";
      var kc = function () {
          window.scrollTo(0, 0);
          var e = Wr.resurse.amfiteatreSali.aleman.maps,
            t = Wr.resurse.amfiteatreSali.aleman.model3d;
          return (0, Te.jsxs)("div", {
            id: "aleman",
            className: "amfiteatru",
            children: [
              (0, Te.jsxs)("header", {
                children: [
                  (0, Te.jsx)("div", {
                    className: "img-container",
                    children: (0, Te.jsx)("img", { src: Po, alt: "maps" }),
                  }),
                  (0, Te.jsxs)("div", {
                    className: "container",
                    children: [
                      (0, Te.jsx)("h3", {
                        className: "title",
                        children: "Amfiteatrul Aleman - Victor Babe\u0219 2",
                      }),
                      (0, Te.jsxs)("div", {
                        className: "buttons-container",
                        children: [
                          "" !== e
                            ? (0, Te.jsxs)("a", {
                                href: e,
                                children: [
                                  (0, Te.jsx)(pr, { icon: xr }),
                                  "Maps",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t && "" !== e
                            ? (0, Te.jsx)("div", { className: "stretcher row" })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t
                            ? (0, Te.jsxs)("a", {
                                href: t,
                                children: [
                                  (0, Te.jsx)(pr, { icon: wr }),
                                  "3D Model",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, Te.jsx)("section", {
                className: "main",
                children: (0, Te.jsxs)("section", {
                  className: "content",
                  children: [
                    (0, Te.jsx)("h3", {
                      className: "title",
                      children:
                        "Cum ajung la amfiteatrul Aleman - Victor Babe\u0219 2?",
                    }),
                    (0, Te.jsxs)("video", {
                      controls: !0,
                      children: [
                        (0, Te.jsx)("source", { src: wc, type: "video/mp4" }),
                        "Your browser does not support the video tag.",
                      ],
                    }),
                    (0, Te.jsx)("img", { src: bc, alt: "poza1" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Intra\u021bi prin spatele rectoratului, un pic mai jos de intrarea principal\u0103, acolo unde e bariera.",
                    }),
                    (0, Te.jsx)("img", { src: xc, alt: "poza2" }),
                    (0, Te.jsx)("img", { src: jc, alt: "poza3" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Merge\u021bi tot \xeen fa\u021b\u0103, printre ma\u0219ini, p\xe2n\u0103 ce da\u021bi de ni\u0219te sc\u0103ri pe care trebuie s\u0103 le urca\u021bi.",
                    }),
                    (0, Te.jsx)("img", { src: yc, alt: "poza4" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Cum intra\u021bi pe u\u0219\u0103, face\u021bi st\xe2nga \u0219i urca\u021bi pe sc\u0103ri p\xe2n\u0103 la urm\u0103torul etaj.",
                    }),
                    (0, Te.jsx)("img", { src: Ac, alt: "poza5" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Amfiteatrul e imediat pe st\xe2nga cum a\u021bi ajuns la etaj.",
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        Sc = n.p + "static/media/1_babes 8.18b6cba91b97e870918a.png",
        Nc = n.p + "static/media/2.a3cf287fd1c523e34432.jpg",
        zc = n.p + "static/media/3.f3cbdb43dae467cdaa19.jpg",
        Cc = n.p + "static/media/4.61b78b043e2a7e0cbcd8.jpg",
        Ec = n.p + "static/media/5.9cdecdf80701a813b3ff.jpg",
        Pc = n.p + "static/media/6.3b935bf9e655ded539fe.jpg",
        Oc = n.p + "static/media/amf Anato-pat.577b15b15ced5598b3b2.mp4";
      var Mc = function () {
          window.scrollTo(0, 0);
          var e = Wr.resurse.amfiteatreSali.anatomiePatologica.maps,
            t = Wr.resurse.amfiteatreSali.anatomiePatologica.model3d;
          return (0, Te.jsxs)("div", {
            id: "anatomie-patologica",
            className: "amfiteatru",
            children: [
              (0, Te.jsxs)("header", {
                children: [
                  (0, Te.jsx)("div", {
                    className: "img-container",
                    children: (0, Te.jsx)("img", { src: Oo, alt: "maps" }),
                  }),
                  (0, Te.jsxs)("div", {
                    className: "container",
                    children: [
                      (0, Te.jsx)("h3", {
                        className: "title",
                        children:
                          "Amfiteatrul Titu-Vasiliu - Anatomie Patologic\u0103",
                      }),
                      (0, Te.jsxs)("div", {
                        className: "buttons-container",
                        children: [
                          "" !== e
                            ? (0, Te.jsxs)("a", {
                                href: e,
                                children: [
                                  (0, Te.jsx)(pr, { icon: xr }),
                                  "Maps",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t && "" !== e
                            ? (0, Te.jsx)("div", { className: "stretcher row" })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t
                            ? (0, Te.jsxs)("a", {
                                href: t,
                                children: [
                                  (0, Te.jsx)(pr, { icon: wr }),
                                  "3D Model",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, Te.jsx)("section", {
                className: "main",
                children: (0, Te.jsxs)("section", {
                  className: "content",
                  children: [
                    (0, Te.jsx)("h3", {
                      className: "title",
                      children:
                        "Cum ajung la amfiteatrul Titu-Vasiliu - Anatomie Patologic\u0103?",
                    }),
                    (0, Te.jsxs)("video", {
                      controls: !0,
                      children: [
                        (0, Te.jsx)("source", { src: Oc, type: "video/mp4" }),
                        "Your browser does not support the video tag.",
                      ],
                    }),
                    (0, Te.jsx)("p", {
                      children:
                        "Amfiteatrul de anatomie patologic\u0103 se afl\u0103 \xeen aceea\u0219i cl\u0103dire cu cel de anatomie, pe strada Victor Babe\u0219, mai jos de num\u0103rul 8.",
                    }),
                    (0, Te.jsx)("img", { src: Sc, alt: "poza1" }),
                    (0, Te.jsx)("p", {
                      children: "Intra\u021bi pe poarta din imagine.",
                    }),
                    (0, Te.jsx)("img", { src: Nc, alt: "poza2" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Merge\u021bi tot \xeenainte p\xe2n\u0103 ajunge\u021bi la cl\u0103direa din imagine.",
                    }),
                    (0, Te.jsx)("img", { src: zc, alt: "poza3" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Dupa ce intra\u021bi, urca\u021bi pe sc\u0103ri.",
                    }),
                    (0, Te.jsx)("img", { src: Cc, alt: "poza4" }),
                    (0, Te.jsx)("p", { children: "Lua\u021bi-o la dreapta." }),
                    (0, Te.jsx)("img", { src: Ec, alt: "poza5" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Merge\u021bi p\xe2n\u0103 \xeen cap\u0103tul coridorului.",
                    }),
                    (0, Te.jsx)("img", { src: Pc, alt: "poza6" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Intra\u021bi pe u\u0219a din imagine \u0219i lua\u021bi-o la dreapta \u0219i ve\u021bi ajunge la amfiteatrul de anatomie patologic\u0103.",
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        _c = n.p + "static/media/Poza 1.8abb7f4b6d299717aa84.jpg",
        Tc = n.p + "static/media/Poza 2.a8f82a3eff41ea786a2a.jpg",
        Dc = n.p + "static/media/Poza 3.dc82d59a8c5dfac4193b.jpg",
        Lc = n.p + "static/media/Poza 4.fa3abfb4568336882538.jpg",
        Fc = n.p + "static/media/Time-lapse.acb7e2e185bcba24077c.mp4";
      var Rc = function () {
          window.scrollTo(0, 0);
          var e = Wr.resurse.amfiteatreSali.bilascu.maps,
            t = Wr.resurse.amfiteatreSali.bilascu.model3d;
          return (0, Te.jsxs)("div", {
            id: "bilascu",
            className: "amfiteatru",
            children: [
              (0, Te.jsxs)("header", {
                children: [
                  (0, Te.jsx)("div", {
                    className: "img-container",
                    children: (0, Te.jsx)("img", { src: Mo, alt: "maps" }),
                  }),
                  (0, Te.jsxs)("div", {
                    className: "container",
                    children: [
                      (0, Te.jsx)("h3", {
                        className: "title",
                        children:
                          "Amfiteatrul Gheorghe Bila\u0219cu - Stomatologie 1",
                      }),
                      (0, Te.jsxs)("div", {
                        className: "buttons-container",
                        children: [
                          "" !== e
                            ? (0, Te.jsxs)("a", {
                                href: e,
                                children: [
                                  (0, Te.jsx)(pr, { icon: xr }),
                                  "Maps",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t && "" !== e
                            ? (0, Te.jsx)("div", { className: "stretcher row" })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t
                            ? (0, Te.jsxs)("a", {
                                href: t,
                                children: [
                                  (0, Te.jsx)(pr, { icon: wr }),
                                  "3D Model",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, Te.jsx)("section", {
                className: "main",
                children: (0, Te.jsxs)("section", {
                  className: "content",
                  children: [
                    (0, Te.jsx)("h3", {
                      className: "title",
                      children:
                        "Cum ajung la amfiteatrul Gheorghe Bila\u0219cu - Stomatologie 1?",
                    }),
                    (0, Te.jsxs)("video", {
                      controls: !0,
                      children: [
                        (0, Te.jsx)("source", { src: Fc, type: "video/mp4" }),
                        "Your browser does not support the video tag.",
                      ],
                    }),
                    (0, Te.jsx)("img", { src: _c, alt: "poza1" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Cobor\xe2\u021bi strada Babe\u0219 pe trotuarul drept p\xe2n\u0103 la flor\u0103riile de l\xe2ng\u0103 casa de cultur\u0103 a studen\u021bilor.",
                    }),
                    (0, Te.jsx)("img", { src: Tc, alt: "poza2" }),
                    (0, Te.jsx)("p", {
                      children:
                        "\xcentre cele doua flor\u0103rii este drumul spre amfiteatru.",
                    }),
                    (0, Te.jsx)("img", { src: Dc, alt: "poza3" }),
                    (0, Te.jsx)("p", {
                      children:
                        "La poart\u0103, amfiteatrul crem din dreapta este Bila\u0219cu.",
                    }),
                    (0, Te.jsx)("img", { src: Lc, alt: "poza4" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Pe el este o pl\u0103cu\u021b\u0103 pe care scrie clar numele.",
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        Ic = n.p + "static/media/poza1.000e744bd17c0231b53f.jpg",
        Bc = n.p + "static/media/poza2.a76dae6fadad3d184af5.jpg",
        Vc = n.p + "static/media/poza3.d02ff6738c223670a61a.jpg",
        Uc = n.p + "static/media/poza4.1399c6936ea98d9e62b0.jpg",
        Hc = n.p + "static/media/opri\u0219.4128a058a2dde74ca65d.mp4";
      var qc = function () {
          window.scrollTo(0, 0);
          var e = Wr.resurse.amfiteatreSali.opris.maps,
            t = Wr.resurse.amfiteatreSali.opris.model3d;
          return (0, Te.jsxs)("div", {
            id: "opris",
            className: "amfiteatru",
            children: [
              (0, Te.jsxs)("header", {
                children: [
                  (0, Te.jsx)("div", {
                    className: "img-container",
                    children: (0, Te.jsx)("img", { src: Ko, alt: "maps" }),
                  }),
                  (0, Te.jsxs)("div", {
                    className: "container",
                    children: [
                      (0, Te.jsx)("h3", {
                        className: "title",
                        children:
                          "Amfiteatrul Opri\u0219 - Victor Babe\u0219 2",
                      }),
                      (0, Te.jsxs)("div", {
                        className: "buttons-container",
                        children: [
                          "" !== e
                            ? (0, Te.jsxs)("a", {
                                href: e,
                                children: [
                                  (0, Te.jsx)(pr, { icon: xr }),
                                  "Maps",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t && "" !== e
                            ? (0, Te.jsx)("div", { className: "stretcher row" })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t
                            ? (0, Te.jsxs)("a", {
                                href: t,
                                children: [
                                  (0, Te.jsx)(pr, { icon: wr }),
                                  "3D Model",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, Te.jsx)("section", {
                className: "main",
                children: (0, Te.jsxs)("section", {
                  className: "content",
                  children: [
                    (0, Te.jsx)("h3", {
                      className: "title",
                      children:
                        "Cum ajung la amfiteatrul Opri\u0219 - Victor Babe\u0219 2?",
                    }),
                    (0, Te.jsxs)("video", {
                      controls: !0,
                      children: [
                        (0, Te.jsx)("source", { src: Hc, type: "video/mp4" }),
                        "Your browser does not support the video tag.",
                      ],
                    }),
                    (0, Te.jsx)("img", { src: Ic, alt: "poza1" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Intra\u021bi prin spatele rectoratului, un pic mai jos de intrarea principal\u0103, acolo unde e bariera.",
                    }),
                    (0, Te.jsx)("img", { src: Bc, alt: "poza2" }),
                    (0, Te.jsx)("img", { src: Vc, alt: "poza3" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Merge\u021bi tot \xeen fa\u021b\u0103, printre ma\u0219ini, p\xe2n\u0103 ce da\u021bi de ni\u0219te sc\u0103ri pe care trebuie s\u0103 le urca\u021bi.",
                    }),
                    (0, Te.jsx)("img", { src: Uc, alt: "poza4" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Amf. Opri\u0219 imediat cum deschide\u021bi u\u0219a, la primul etaj.",
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        Wc = n.p + "static/media/Poza 1.55abfc9442ed82b7efa5.jpg",
        Yc = n.p + "static/media/Poza 2.3bd7f2bd98d7e90a6199.jpg",
        Qc = n.p + "static/media/Poza 3.b33d617c36b9f55e3397.jpg",
        Gc = n.p + "static/media/Poza 4.67ef5ec68d89c4953b42.jpg",
        Xc = n.p + "static/media/Time-lapse.06da92428e674bcee2a0.mp4";
      var $c = function () {
          window.scrollTo(0, 0);
          var e = Wr.resurse.amfiteatreSali.dermatologie.maps,
            t = Wr.resurse.amfiteatreSali.dermatologie.model3d;
          return (0, Te.jsxs)("div", {
            id: "dermatologie",
            className: "amfiteatru",
            children: [
              (0, Te.jsxs)("header", {
                children: [
                  (0, Te.jsx)("div", {
                    className: "img-container",
                    children: (0, Te.jsx)("img", { src: Fo, alt: "maps" }),
                  }),
                  (0, Te.jsxs)("div", {
                    className: "container",
                    children: [
                      (0, Te.jsx)("h3", {
                        className: "title",
                        children: "Amfiteatrul Dermatologie",
                      }),
                      (0, Te.jsxs)("div", {
                        className: "buttons-container",
                        children: [
                          "" !== e
                            ? (0, Te.jsxs)("a", {
                                href: e,
                                children: [
                                  (0, Te.jsx)(pr, { icon: xr }),
                                  "Maps",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t && "" !== e
                            ? (0, Te.jsx)("div", { className: "stretcher row" })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t
                            ? (0, Te.jsxs)("a", {
                                href: t,
                                children: [
                                  (0, Te.jsx)(pr, { icon: wr }),
                                  "3D Model",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, Te.jsx)("section", {
                className: "main",
                children: (0, Te.jsxs)("section", {
                  className: "content",
                  children: [
                    (0, Te.jsx)("h3", {
                      className: "title",
                      children: "Cum ajung la amfiteatrul de dermatologie?",
                    }),
                    (0, Te.jsxs)("video", {
                      controls: !0,
                      children: [
                        (0, Te.jsx)("source", { src: Xc, type: "video/mp4" }),
                        "Your browser does not support the video tag.",
                      ],
                    }),
                    (0, Te.jsx)("img", { src: Wc, alt: "poza1" }),
                    (0, Te.jsx)("p", {
                      children:
                        "De pe Babe\u0219 intra\u021bi pe strada care duce la Anatomie.",
                    }),
                    (0, Te.jsx)("img", { src: Yc, alt: "poza2" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Merge\u021bi tot \xeenainte p\xe2n\u0103 la a treia curte interioar\u0103 \xeentre cl\u0103diri pe st\xe2nga (singura cu spa\u021biu verde pe mijloc).",
                    }),
                    (0, Te.jsx)("img", { src: Qc, alt: "poza3" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Merge\u021bi pe trotuarul de pe partea st\xe2ng\u0103 (mai apropiat de clinica de oftalmologie).",
                    }),
                    (0, Te.jsx)("img", { src: Gc, alt: "poza4" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Amfiteatrul e la cap\u0103tul acestui trotuar.",
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        Kc = n.p + "static/media/poza 2.f0ac3df678b1da450ad5.jpg",
        Zc = n.p + "static/media/poza 3.34fb7f081937ecf51af1.jpg";
      var Jc = function () {
          window.scrollTo(0, 0);
          var e = Wr.resurse.amfiteatreSali.infectioase.maps,
            t = Wr.resurse.amfiteatreSali.infectioase.model3d;
          return (0, Te.jsxs)("div", {
            id: "infectioase",
            className: "amfiteatru",
            children: [
              (0, Te.jsxs)("header", {
                children: [
                  (0, Te.jsx)("div", {
                    className: "img-container",
                    children: (0, Te.jsx)("img", { src: Vo, alt: "maps" }),
                  }),
                  (0, Te.jsxs)("div", {
                    className: "container",
                    children: [
                      (0, Te.jsx)("h3", {
                        className: "title",
                        children: "Amfiteatrul Boli Infec\u021bioase",
                      }),
                      (0, Te.jsxs)("div", {
                        className: "buttons-container",
                        children: [
                          "" !== e
                            ? (0, Te.jsxs)("a", {
                                href: e,
                                children: [
                                  (0, Te.jsx)(pr, { icon: xr }),
                                  "Maps",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t && "" !== e
                            ? (0, Te.jsx)("div", { className: "stretcher row" })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t
                            ? (0, Te.jsxs)("a", {
                                href: t,
                                children: [
                                  (0, Te.jsx)(pr, { icon: wr }),
                                  "3D Model",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, Te.jsx)("section", {
                className: "main",
                children: (0, Te.jsxs)("section", {
                  className: "content",
                  children: [
                    (0, Te.jsx)("h3", {
                      className: "title",
                      children:
                        "Cum ajung la amfiteatrul de boli infec\u021bioase?",
                    }),
                    (0, Te.jsx)("img", { src: Kc, alt: "poza2" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Intra\u021bi pe strada Iuliu Moldovan, dinstre strada Louis Pasteur. Spitalul de Boli Infec\u021bioase Cluj-Napoca se va afla pe partea dreapt\u0103, la nr. 23.",
                    }),
                    (0, Te.jsx)("img", { src: Zc, alt: "poza3" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Intra\u021bi \xeen Spitalul de Boli Infec\u021bioase la parter, face\u021bi dreapta \u0219i continua\u021bi pe holul din partea dreapt\u0103 p\xe2n\u0103 ve\u021bi vedea intrarea \xeen Amfiteatru pe partea st\xe2ng\u0103.",
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        eu = n.p + "static/media/1.208ef83b070e471bf6f9.jpg",
        tu = n.p + "static/media/2.310e6e8541e11ae55902.jpg",
        nu = n.p + "static/media/3.0b2e1e6f18f7df425b78.jpg",
        au = n.p + "static/media/minea.0fc85d8ca8f66fe659b0.mp4";
      var ru = function () {
          window.scrollTo(0, 0);
          var e = Wr.resurse.amfiteatreSali.minea.maps,
            t = Wr.resurse.amfiteatreSali.minea.model3d;
          return (0, Te.jsxs)("div", {
            id: "minea",
            className: "amfiteatru",
            children: [
              (0, Te.jsxs)("header", {
                children: [
                  (0, Te.jsx)("div", {
                    className: "img-container",
                    children: (0, Te.jsx)("img", { src: Yo, alt: "maps" }),
                  }),
                  (0, Te.jsxs)("div", {
                    className: "container",
                    children: [
                      (0, Te.jsx)("h3", {
                        className: "title",
                        children: "Amfiteatrul Ion Minea - Neurologie",
                      }),
                      (0, Te.jsxs)("div", {
                        className: "buttons-container",
                        children: [
                          "" !== e
                            ? (0, Te.jsxs)("a", {
                                href: e,
                                children: [
                                  (0, Te.jsx)(pr, { icon: xr }),
                                  "Maps",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t && "" !== e
                            ? (0, Te.jsx)("div", { className: "stretcher row" })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t
                            ? (0, Te.jsxs)("a", {
                                href: t,
                                children: [
                                  (0, Te.jsx)(pr, { icon: wr }),
                                  "3D Model",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, Te.jsx)("section", {
                className: "main",
                children: (0, Te.jsxs)("section", {
                  className: "content",
                  children: [
                    (0, Te.jsx)("h3", {
                      className: "title",
                      children:
                        "Cum ajung la Amfiteatrul Ion Minea - Neurologie?",
                    }),
                    (0, Te.jsxs)("video", {
                      controls: !0,
                      children: [
                        (0, Te.jsx)("source", { src: au, type: "video/mp4" }),
                        "Your browser does not support the video tag.",
                      ],
                    }),
                    (0, Te.jsx)("p", {
                      children:
                        "Amfiteatrul Minea se afl\u0103 \xeen clinica de neurologie la intersec\u021bia dintre strada Louis Pasteur \u0219i Ion Creang\u0103.",
                    }),
                    (0, Te.jsx)("img", { src: eu, alt: "poza1" }),
                    (0, Te.jsx)("p", {
                      children: "Intra\u021bi pe poarta din imagine.",
                    }),
                    (0, Te.jsx)("img", { src: tu, alt: "poza2" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Intra\u021bi prin intrarea din spate a clinicii, dup\u0103 care urca\u021bi la etajul 1.",
                    }),
                    (0, Te.jsx)("img", { src: nu, alt: "poza3" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Amfiteatrul Ion Minea se afl\u0103 drept \xeen fa\u021ba voastr\u0103.",
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        iu = n.p + "static/media/Poza 1.22e11058c89a761e1b18.jpg",
        su = n.p + "static/media/Poza 2.3938eb6f7d2c0d20d537.jpg",
        ou = n.p + "static/media/Poza 3.194fcf4dc7d9bb804f31.jpg",
        lu = n.p + "static/media/Poza 4.92c2f15e97b54858a6e4.jpg",
        cu = n.p + "static/media/Poza 5.9bab5ac65247e7069add.jpg",
        uu = n.p + "static/media/Time-lapse.99048d53260a10bdfe69.mp4";
      var du = function () {
          window.scrollTo(0, 0);
          var e = Wr.resurse.amfiteatreSali.popper.maps,
            t = Wr.resurse.amfiteatreSali.popper.model3d;
          return (0, Te.jsxs)("div", {
            id: "popper",
            className: "amfiteatru",
            children: [
              (0, Te.jsxs)("header", {
                children: [
                  (0, Te.jsx)("div", {
                    className: "img-container",
                    children: (0, Te.jsx)("img", { src: Zo, alt: "maps" }),
                  }),
                  (0, Te.jsxs)("div", {
                    className: "container",
                    children: [
                      (0, Te.jsx)("h3", {
                        className: "title",
                        children: "Amfiteatrul Erwin Popper - Farmacie A",
                      }),
                      (0, Te.jsxs)("div", {
                        className: "buttons-container",
                        children: [
                          "" !== e
                            ? (0, Te.jsxs)("a", {
                                href: e,
                                children: [
                                  (0, Te.jsx)(pr, { icon: xr }),
                                  "Maps",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t && "" !== e
                            ? (0, Te.jsx)("div", { className: "stretcher row" })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t
                            ? (0, Te.jsxs)("a", {
                                href: t,
                                children: [
                                  (0, Te.jsx)(pr, { icon: wr }),
                                  "3D Model",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, Te.jsx)("section", {
                className: "main",
                children: (0, Te.jsxs)("section", {
                  className: "content",
                  children: [
                    (0, Te.jsx)("h3", {
                      className: "title",
                      children:
                        "Cum ajung la amfiteatrul Erwin Popper - Farmacie A?",
                    }),
                    (0, Te.jsxs)("video", {
                      controls: !0,
                      children: [
                        (0, Te.jsx)("source", { src: uu, type: "video/mp4" }),
                        "Your browser does not support the video tag.",
                      ],
                    }),
                    (0, Te.jsx)("img", { src: iu, alt: "poza1" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Pe strada Pasteur cobor\xe2\u021bi spre intersec\u021bia cu Babe\u0219.",
                    }),
                    (0, Te.jsx)("img", { src: su, alt: "poza2" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Fi\u021bi aten\u021bi dup\u0103 un st\xe2lp care are pe el semnul cu \u201ePasteur nr. 4\u201d.",
                    }),
                    (0, Te.jsx)("img", { src: ou, alt: "poza3" }),
                    (0, Te.jsx)("img", { src: lu, alt: "poza4" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Intra\u021bi \xeen curte \u0219i merge\u021bi tot \xeenainte.",
                    }),
                    (0, Te.jsx)("img", { src: cu, alt: "poza5" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Amf. Popper este sus \xeen capul sc\u0103rilor.",
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        fu = n.p + "static/media/poza 2.89751dc556da3f31f19f.jpg",
        mu = n.p + "static/media/poza 3.4b363d37b37af5e166d6.jpg",
        pu = n.p + "static/media/poza 4.47d921d0324cad8bb370.jpg",
        hu = n.p + "static/media/poza 5.21e2551d360be355c19f.jpg";
      var gu = function () {
          window.scrollTo(0, 0);
          var e = Wr.resurse.amfiteatreSali.radiologie.maps,
            t = Wr.resurse.amfiteatreSali.radiologie.model3d;
          return (0, Te.jsxs)("div", {
            id: "radiologie",
            className: "amfiteatru",
            children: [
              (0, Te.jsxs)("header", {
                children: [
                  (0, Te.jsx)("div", {
                    className: "img-container",
                    children: (0, Te.jsx)("img", { src: Jo, alt: "maps" }),
                  }),
                  (0, Te.jsxs)("div", {
                    className: "container",
                    children: [
                      (0, Te.jsx)("h3", {
                        className: "title",
                        children: "Amfiteatrul Dimitrie Negru - Radiologie",
                      }),
                      (0, Te.jsxs)("div", {
                        className: "buttons-container",
                        children: [
                          "" !== e
                            ? (0, Te.jsxs)("a", {
                                href: e,
                                children: [
                                  (0, Te.jsx)(pr, { icon: xr }),
                                  "Maps",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t && "" !== e
                            ? (0, Te.jsx)("div", { className: "stretcher row" })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t
                            ? (0, Te.jsxs)("a", {
                                href: t,
                                children: [
                                  (0, Te.jsx)(pr, { icon: wr }),
                                  "3D Model",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, Te.jsx)("section", {
                className: "main",
                children: (0, Te.jsxs)("section", {
                  className: "content",
                  children: [
                    (0, Te.jsx)("h3", {
                      className: "title",
                      children:
                        "Cum ajung la amfiteatrul Dimitrie Negru - Radiologie?",
                    }),
                    (0, Te.jsx)("p", {
                      children:
                        "Amfiteatrul Dimitrie Negru \xeel ve\u021bi g\u0103si sub denumirea de Amfiteatrul de Radiologie. Vedere de ansamblu, intrare dinspre strada Victor Babe\u0219, \xeen incinta complexului Spitalului Jude\u021bean de Urgen\u021b\u0103 Cluj.",
                    }),
                    (0, Te.jsx)("img", { src: fu, alt: "poza2" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Intra\u021bi pe aceasta strad\u0103, dinspre Strada Victor Babe\u0219,\xeen incinta Complexului Spitalului Jude\u021bean de Urgen\u021b\u0103 Cluj.",
                    }),
                    (0, Te.jsx)("img", { src: mu, alt: "poza3" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Merge\u021bi tot \xeen fa\u021b\u0103 p\xe2n\u0103 trece\u021bi de bariera \u0219i de Cl\u0103direa Fiziopatologie (pe partea dreapt\u0103).",
                    }),
                    (0, Te.jsx)("img", { src: pu, alt: "poza4" }),
                    (0, Te.jsx)("p", {
                      children:
                        "La cap\u0103tul Cl\u0103dirii Fiziopatologie sunt ni\u0219te sc\u0103ri pe partea dreapt\u0103. Cobor\xe2\u021bi sc\u0103rile, traversa\u021bi strada pe la trecerea de pietoni. Amfiteatrul este in cl\u0103direa de pe partea dreapt\u0103, \xeentre Clinica de Chirurgie I \u0219i Cl\u0103direa Disciplinei de Fiziologie.",
                    }),
                    (0, Te.jsx)("img", { src: hu, alt: "poza5" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Pentru accesul \xeen Amfiteatrul de Radiologie urca\u021bi sc\u0103rile \u0219i dup\u0103 ce intra\u021bi \xeen cl\u0103dire, sala este prima pe partea dreapt\u0103.",
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        vu = n.p + "static/media/1.a40934c3f325360451fa.jpg",
        bu = n.p + "static/media/2.b1f0e08149a5f3423bd4.jpg",
        xu = n.p + "static/media/3.3e72949f23c0307087fb.jpg",
        ju = n.p + "static/media/4.92c7693dc72cb7e94986.jpg",
        yu = n.p + "static/media/recuperare.3318f45c5d35224f6daf.mp4";
      var Au = function () {
          window.scrollTo(0, 0);
          var e = Wr.resurse.amfiteatreSali.recuperare.maps,
            t = Wr.resurse.amfiteatreSali.recuperare.model3d;
          return (0, Te.jsxs)("div", {
            id: "recuperare",
            className: "amfiteatru",
            children: [
              (0, Te.jsxs)("header", {
                children: [
                  (0, Te.jsx)("div", {
                    className: "img-container",
                    children: (0, Te.jsx)("img", { src: el, alt: "maps" }),
                  }),
                  (0, Te.jsxs)("div", {
                    className: "container",
                    children: [
                      (0, Te.jsx)("h3", {
                        className: "title",
                        children: "Amfiteatrul Nicolae Andronescu - Recuperare",
                      }),
                      (0, Te.jsxs)("div", {
                        className: "buttons-container",
                        children: [
                          "" !== e
                            ? (0, Te.jsxs)("a", {
                                href: e,
                                children: [
                                  (0, Te.jsx)(pr, { icon: xr }),
                                  "Maps",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t && "" !== e
                            ? (0, Te.jsx)("div", { className: "stretcher row" })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t
                            ? (0, Te.jsxs)("a", {
                                href: t,
                                children: [
                                  (0, Te.jsx)(pr, { icon: wr }),
                                  "3D Model",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, Te.jsx)("section", {
                className: "main",
                children: (0, Te.jsxs)("section", {
                  className: "content",
                  children: [
                    (0, Te.jsx)("h3", {
                      className: "title",
                      children:
                        "Cum ajung la amfiteatrul Nicolae Andronescu - Recuperare?",
                    }),
                    (0, Te.jsxs)("video", {
                      controls: !0,
                      children: [
                        (0, Te.jsx)("source", { src: yu, type: "video/mp4" }),
                        "Your browser does not support the video tag.",
                      ],
                    }),
                    (0, Te.jsx)("p", {
                      children:
                        "Amfiteatrul Nicolae Andreescu se afla l\xe2ng\u0103 Spitalul Clinic de Recuperare \u0219i nu \xeen incinta sa; intrarea se face de pe str. Observatorului \u0219i nu de pe Viilor.",
                    }),
                    (0, Te.jsx)("img", { src: vu, alt: "poza1" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Ajunge\u021bi \xeen statia Spitalul de Recuperare.",
                    }),
                    (0, Te.jsx)("img", { src: bu, alt: "poza2" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Trece\u021bi de cele 2 bariere \u0219i merge\u021bi tot \xeen fa\u021b\u0103 p\xe2n\u0103 da\u021bi de intrarea din imaginea 3.",
                    }),
                    (0, Te.jsx)("img", { src: xu, alt: "poza3" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Intra\u021bi \xeen cl\u0103dire \u0219i lua\u021bi-o \xeen dreapta.",
                    }),
                    (0, Te.jsx)("img", { src: ju, alt: "poza4" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Aici g\u0103si\u021bi u\u0219a c\u0103tre amfiteatrul Nicolae Andreescu.",
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        wu = n.p + "static/media/Poza 1.d09cf42dd6a47a5f7c9f.jpg",
        ku = n.p + "static/media/Poza 2.2217a2d96e832a5f57f1.jpg",
        Su = n.p + "static/media/Poza 3.e2582ed58443f27e1a00.jpg",
        Nu = n.p + "static/media/Poza 4.bfc16e949156f91fcaba.jpg",
        zu = n.p + "static/media/Poza 5.c912aa76581a1da38aff.jpg",
        Cu = n.p + "static/media/Poza 6.1c1ae2a593766801a685.jpg",
        Eu = n.p + "static/media/Time-lapse.dfba9edc724034f43cd2.mp4";
      var Pu = function () {
          window.scrollTo(0, 0);
          var e = Wr.resurse.amfiteatreSali.simiti.maps,
            t = Wr.resurse.amfiteatreSali.simiti.model3d;
          return (0, Te.jsxs)("div", {
            id: "simiti",
            className: "amfiteatru",
            children: [
              (0, Te.jsxs)("header", {
                children: [
                  (0, Te.jsx)("div", {
                    className: "img-container",
                    children: (0, Te.jsx)("img", { src: nl, alt: "maps" }),
                  }),
                  (0, Te.jsxs)("div", {
                    className: "container",
                    children: [
                      (0, Te.jsx)("h3", {
                        className: "title",
                        children: "Amfiteatrul I. Simiti - Farmacie",
                      }),
                      (0, Te.jsxs)("div", {
                        className: "buttons-container",
                        children: [
                          "" !== e
                            ? (0, Te.jsxs)("a", {
                                href: e,
                                children: [
                                  (0, Te.jsx)(pr, { icon: xr }),
                                  "Maps",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t && "" !== e
                            ? (0, Te.jsx)("div", { className: "stretcher row" })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t
                            ? (0, Te.jsxs)("a", {
                                href: t,
                                children: [
                                  (0, Te.jsx)(pr, { icon: wr }),
                                  "3D Model",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, Te.jsx)("section", {
                className: "main",
                children: (0, Te.jsxs)("section", {
                  className: "content",
                  children: [
                    (0, Te.jsx)("h3", {
                      className: "title",
                      children:
                        "Cum ajung la amfiteatrul I. Simiti - Farmacie?",
                    }),
                    (0, Te.jsxs)("video", {
                      controls: !0,
                      children: [
                        (0, Te.jsx)("source", { src: Eu, type: "video/mp4" }),
                        "Your browser does not support the video tag.",
                      ],
                    }),
                    (0, Te.jsx)("img", { src: wu, alt: "poza1" }),
                    (0, Te.jsx)("img", { src: ku, alt: "poza2" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Cobor\xe2\u021bi Pasteur-ul p\xe2n\u0103 la intersec\u021bie, la semafor trece\u021bi strada.",
                    }),
                    (0, Te.jsx)("img", { src: Su, alt: "poza3" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Dup\u0103 ce a\u021bi trecut strada, pe l\xe2ng\u0103 clinica de neurologie o lua\u021bi pe strada Ion Creang\u0103.",
                    }),
                    (0, Te.jsx)("img", { src: Nu, alt: "poza4" }),
                    (0, Te.jsx)("p", {
                      children:
                        "\u0218i aici trece\u021bi strada, s\u0103 fi\u021bi pe partea cu facultatea de Farmacie.",
                    }),
                    (0, Te.jsx)("img", { src: zu, alt: "poza5" }),
                    (0, Te.jsxs)("p", {
                      children: [
                        "Merge\u021bi \xeenainte p\xe2n\u0103 \xeen curtea interioar\u0103 de acolo \u0219i intra\u021bi pe u\u0219a de termopan cu plafonul de beton deasupra.",
                        " ",
                      ],
                    }),
                    (0, Te.jsx)("img", { src: Cu, alt: "poza6" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Cum intra\u021bi, pe dreapta, dup\u0103 oficiul paznicului este amfiteatrul Simiti.",
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        Ou = n.p + "static/media/Poza 1.319698626588fc6350f9.jpg",
        Mu = n.p + "static/media/Poza 2.0907093538db0ba95c67.jpg",
        _u = n.p + "static/media/Poza 3.5a941e548e800e77b9a3.jpg",
        Tu = n.p + "static/media/Poza 4.dfdb6193cc8c65344c2a.jpg",
        Du = n.p + "static/media/Poza 5.189a9821aa1d6b92ddb5.jpg",
        Lu = n.p + "static/media/Poza 6.c7e9f3de4ecc7bfa8db3.jpg",
        Fu = n.p + "static/media/Poza 7.500e3198a5c20b08fd40.jpg",
        Ru = n.p + "static/media/Poza 8.d09ec088eeb29b3b41d4.jpg",
        Iu = n.p + "static/media/Poza 9.bceab52f3a53c46d7ea7.jpg",
        Bu = n.p + "static/media/Poza 10.7e9773d54978c748d088.jpg",
        Vu = n.p + "static/media/Videoclip Biofizica.a2d373745a6a01a767d3.mp4";
      var Uu = function () {
          window.scrollTo(0, 0);
          var e = Wr.resurse.amfiteatreSali.labBiofizica.maps,
            t = Wr.resurse.amfiteatreSali.labBiofizica.model3d;
          return (0, Te.jsxs)("div", {
            id: "lab-biofizica",
            className: "amfiteatru",
            children: [
              (0, Te.jsxs)("header", {
                children: [
                  (0, Te.jsx)("div", {
                    className: "img-container",
                    children: (0, Te.jsx)("img", { src: Ho, alt: "maps" }),
                  }),
                  (0, Te.jsxs)("div", {
                    className: "container",
                    children: [
                      (0, Te.jsx)("h3", {
                        className: "title",
                        children: "Laborator biofizic\u0103",
                      }),
                      (0, Te.jsxs)("div", {
                        className: "buttons-container",
                        children: [
                          "" !== e
                            ? (0, Te.jsxs)("a", {
                                href: e,
                                children: [
                                  (0, Te.jsx)(pr, { icon: xr }),
                                  "Maps",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t && "" !== e
                            ? (0, Te.jsx)("div", { className: "stretcher row" })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t
                            ? (0, Te.jsxs)("a", {
                                href: t,
                                children: [
                                  (0, Te.jsx)(pr, { icon: wr }),
                                  "3D Model",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, Te.jsx)("section", {
                className: "main",
                children: (0, Te.jsxs)("section", {
                  className: "content",
                  children: [
                    (0, Te.jsx)("h3", {
                      className: "title",
                      children: "Cum ajung la laboratorul de biofizic\u0103?",
                    }),
                    (0, Te.jsxs)("video", {
                      controls: !0,
                      children: [
                        (0, Te.jsx)("source", { src: Vu, type: "video/mp4" }),
                        "Your browser does not support the video tag.",
                      ],
                    }),
                    (0, Te.jsx)("img", { src: Ou, alt: "poza1" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Dinspre strada Pasteur intra\u021bi \xeen curtea principal\u0103 unde se afl\u0103 statueta lui Woodrow Wilson.",
                    }),
                    (0, Te.jsx)("img", { src: Mu, alt: "poza2" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Merge\u021bi \xeennainte pe drumul din dreapta statuetei.",
                    }),
                    (0, Te.jsx)("img", { src: _u, alt: "poza3" }),
                    (0, Te.jsx)("img", { src: Tu, alt: "poza4" }),
                    (0, Te.jsx)("p", {
                      children:
                        "De pe acel trotuar o ve\u021bi lua prima la st\xe2nga.",
                    }),
                    (0, Te.jsx)("img", { src: Du, alt: "poza5" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Odat\u0103 ajun\u0219i ve\u021bi vedea u\u0219a ce coboar\u0103 la subsol.",
                    }),
                    (0, Te.jsx)("img", { src: Lu, alt: "poza6" }),
                    (0, Te.jsx)("img", { src: Fu, alt: "poza7" }),
                    (0, Te.jsx)("p", {
                      children: "Urca\u021bi pe sc\u0103ri un etaj.",
                    }),
                    (0, Te.jsx)("img", { src: Ru, alt: "poza8" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Intrarea spre laboratorul de biofizic\u0103 va fi semnalizat\u0103, merge\u021bi \xeenainte.",
                    }),
                    (0, Te.jsx)("img", { src: Iu, alt: "poza9" }),
                    (0, Te.jsx)("img", { src: Bu, alt: "poza10" }),
                    (0, Te.jsx)("p", {
                      children:
                        "La intrarea propriu zis\u0103 va fi nevoie s\u0103 ap\u0103sa\u021bi pe buton (s\u0103 suna\u021bi) pentru ca asisten\u021bii s\u0103 v\u0103 primeasc\u0103 \xeen\u0103untru.",
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        Hu = n.p + "static/media/Poza 1.49ba132062ede844bddb.jpg",
        qu = n.p + "static/media/Poza 2.93476abb27f35912f3a2.jpg",
        Wu = n.p + "static/media/Poza 3.8763dab8f4811ab9d04c.jpg",
        Yu = n.p + "static/media/Poza 4.056e91455bfe56794342.jpg",
        Qu = n.p + "static/media/Poza 5.8113d5a0ccb6e3a169b2.jpg",
        Gu = n.p + "static/media/Poza 6.cb2a21437e581aa5ce53.jpg",
        Xu = n.p + "static/media/Poza 7.e611e1e75cffcd8fbdee.jpg",
        $u = n.p + "static/media/Poza 8.dc4273c0beed13c9ac6e.jpg",
        Ku = n.p + "static/media/Poza 9.746a44959cf9ae9e5a60.jpg",
        Zu = n.p + "static/media/Poza 10.989a266afb506fe112df.jpg",
        Ju = n.p + "static/media/Poza 11.49f4a1475dfa8db99248.jpg",
        ed = n.p + "static/media/Poza 12.e9dcdf25b9db6d2f34c6.jpg",
        td = n.p + "static/media/Poza 13.e898149cdd7f47d6f3a8.jpg",
        nd = n.p + "static/media/Poza 14.0cbe3ad8b0c80d8dee8a.jpg",
        ad = n.p + "static/media/Videoclip.5fa2bb10abebb2204240.mp4";
      var rd = function () {
          window.scrollTo(0, 0);
          var e = Wr.resurse.amfiteatreSali.labBiocel.maps,
            t = Wr.resurse.amfiteatreSali.labBiocel.model3d;
          return (0, Te.jsxs)("div", {
            id: "lab-biocel",
            className: "amfiteatru",
            children: [
              (0, Te.jsxs)("header", {
                children: [
                  (0, Te.jsx)("div", {
                    className: "img-container",
                    children: (0, Te.jsx)("img", { src: Uo, alt: "maps" }),
                  }),
                  (0, Te.jsxs)("div", {
                    className: "container",
                    children: [
                      (0, Te.jsx)("h3", {
                        className: "title",
                        children: "Laborator biologie celular\u0103",
                      }),
                      (0, Te.jsxs)("div", {
                        className: "buttons-container",
                        children: [
                          "" !== e
                            ? (0, Te.jsxs)("a", {
                                href: e,
                                children: [
                                  (0, Te.jsx)(pr, { icon: xr }),
                                  "Maps",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t && "" !== e
                            ? (0, Te.jsx)("div", { className: "stretcher row" })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t
                            ? (0, Te.jsxs)("a", {
                                href: t,
                                children: [
                                  (0, Te.jsx)(pr, { icon: wr }),
                                  "3D Model",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, Te.jsx)("section", {
                className: "main",
                children: (0, Te.jsxs)("section", {
                  className: "content",
                  children: [
                    (0, Te.jsx)("h3", {
                      className: "title",
                      children:
                        "Cum ajung la laboratorul de biologie celular\u0103?",
                    }),
                    (0, Te.jsxs)("video", {
                      controls: !0,
                      children: [
                        (0, Te.jsx)("source", { src: ad, type: "video/mp4" }),
                        "Your browser does not support the video tag.",
                      ],
                    }),
                    (0, Te.jsx)("img", { src: Hu, alt: "poza1" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Intra\u021bi spre curte dinspre strada Pasteur.",
                    }),
                    (0, Te.jsx)("img", { src: qu, alt: "poza2" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Merge\u021bi \xeenainte \u0219i apoi la st\xe2nga \xeenspre cele dou\u0103 cl\u0103diri.(cea de informatic\u0103 medical\u0103 \u0219i centrul de cercet\u0103ri).",
                    }),
                    (0, Te.jsx)("img", { src: Wu, alt: "poza3" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Merge\u021bi \xeenainte spre cl\u0103direa din dreapta voastr\u0103.",
                    }),
                    (0, Te.jsx)("img", { src: Yu, alt: "poza4" }),
                    (0, Te.jsx)("img", { src: Qu, alt: "poza5" }),
                    (0, Te.jsx)("p", {
                      children:
                        '\xcenainta\u021bi spre intrarea principal\u0103 \xeen dreptul c\u0103reia apare semnul "Centrul de cercet\u0103ri privind Informarea asupra medicamentului".',
                    }),
                    (0, Te.jsx)("img", { src: Gu, alt: "poza6" }),
                    (0, Te.jsx)("img", { src: Xu, alt: "poza7" }),
                    (0, Te.jsx)("img", { src: $u, alt: "poza8" }),
                    (0, Te.jsx)("img", { src: Ku, alt: "poza9" }),
                    (0, Te.jsx)("img", { src: Zu, alt: "poza10" }),
                    (0, Te.jsx)("img", { src: Ju, alt: "poza11" }),
                    (0, Te.jsx)("img", { src: ed, alt: "poza12" }),
                    (0, Te.jsx)("img", { src: td, alt: "poza13" }),
                    (0, Te.jsx)("img", { src: nd, alt: "poza14" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Odat\u0103 ajun\u0219i \xeen cl\u0103dire urca\u021bi p\xe2n\u0103 la ultimul etaj iar acolo v\u0103 vor a\u0219tepta asisten\u021bii catedrei, urm\xe2nd s\u0103 v\u0103 primeasc\u0103 \xeen\u0103untru.",
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        id = n.p + "static/media/Poza 1.b88bef373746b707d4ab.jpg",
        sd = n.p + "static/media/Poza 2.93476abb27f35912f3a2.jpg",
        od = n.p + "static/media/Poza 3.be2090d4bd2cdc866a68.jpg",
        ld = n.p + "static/media/Poza 4.409d6c9bc9e03ecb4a8f.jpg",
        cd = n.p + "static/media/Poza 5.3f35de034057eab08d7b.jpg",
        ud = n.p + "static/media/Videoclip.d5ae0e196238b08653c5.mp4";
      var dd = function () {
          window.scrollTo(0, 0);
          var e = Wr.resurse.amfiteatreSali.labBiostat.maps,
            t = Wr.resurse.amfiteatreSali.labBiostat.model3d;
          return (0, Te.jsxs)("div", {
            id: "lab-biostat",
            className: "amfiteatru",
            children: [
              (0, Te.jsxs)("header", {
                children: [
                  (0, Te.jsx)("div", {
                    className: "img-container",
                    children: (0, Te.jsx)("img", { src: qo, alt: "maps" }),
                  }),
                  (0, Te.jsxs)("div", {
                    className: "container",
                    children: [
                      (0, Te.jsx)("h3", {
                        className: "title",
                        children: "Laborator biostatistic\u0103 \u0219i MCS",
                      }),
                      (0, Te.jsxs)("div", {
                        className: "buttons-container",
                        children: [
                          "" !== e
                            ? (0, Te.jsxs)("a", {
                                href: e,
                                children: [
                                  (0, Te.jsx)(pr, { icon: xr }),
                                  "Maps",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t && "" !== e
                            ? (0, Te.jsx)("div", { className: "stretcher row" })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t
                            ? (0, Te.jsxs)("a", {
                                href: t,
                                children: [
                                  (0, Te.jsx)(pr, { icon: wr }),
                                  "3D Model",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, Te.jsx)("section", {
                className: "main",
                children: (0, Te.jsxs)("section", {
                  className: "content",
                  children: [
                    (0, Te.jsx)("h3", {
                      className: "title",
                      children:
                        "Cum ajung la laboratorul de biostatistic\u0103 \u0219i MCS?",
                    }),
                    (0, Te.jsxs)("video", {
                      controls: !0,
                      children: [
                        (0, Te.jsx)("source", { src: ud, type: "video/mp4" }),
                        "Your browser does not support the video tag.",
                      ],
                    }),
                    (0, Te.jsx)("img", { src: id, alt: "poza1" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Intra\u021bi spre curte dinspre strada Pasteur.",
                    }),
                    (0, Te.jsx)("img", { src: sd, alt: "poza2" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Merge\u021bi \xeenainte \u0219i apoi la st\xe2nga \xeenspre cele dou\u0103 cl\u0103diri.(cea de informatic\u0103 medical\u0103 \u0219i centrul de cercet\u0103ri).",
                    }),
                    (0, Te.jsx)("img", { src: od, alt: "poza3" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Merge\u021bi \xeenainte spre cl\u0103direa din st\xe2nga voastr\u0103.",
                    }),
                    (0, Te.jsx)("img", { src: ld, alt: "poza4" }),
                    (0, Te.jsx)("p", {
                      children: "Urca\u021bi sc\u0103rile exterioare.",
                    }),
                    (0, Te.jsx)("img", { src: cd, alt: "poza5" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Asisten\u021bii catedrei v\u0103 vor chema \xeen\u0103untru la momentul potrivit.",
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        fd = n.p + "static/media/poza1.2f000f7657702156b9c6.jpg",
        md = n.p + "static/media/poza2.fadbfa1a6e0c410f5ba5.jpg",
        pd = n.p + "static/media/poza3.5944eec256ac9661bbc0.jpg";
      var hd = function () {
          window.scrollTo(0, 0);
          var e = Wr.resurse.amfiteatreSali.genetica.maps,
            t = Wr.resurse.amfiteatreSali.genetica.model3d;
          return (0, Te.jsxs)("div", {
            id: "genetica",
            className: "amfiteatru",
            children: [
              (0, Te.jsxs)("header", {
                children: [
                  (0, Te.jsx)("div", {
                    className: "img-container",
                    children: (0, Te.jsx)("img", { src: Bo, alt: "maps" }),
                  }),
                  (0, Te.jsxs)("div", {
                    className: "container",
                    children: [
                      (0, Te.jsx)("h3", {
                        className: "title",
                        children: "Laborator genetic\u0103",
                      }),
                      (0, Te.jsxs)("div", {
                        className: "buttons-container",
                        children: [
                          "" !== e
                            ? (0, Te.jsxs)("a", {
                                href: e,
                                children: [
                                  (0, Te.jsx)(pr, { icon: xr }),
                                  "Maps",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t && "" !== e
                            ? (0, Te.jsx)("div", { className: "stretcher row" })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t
                            ? (0, Te.jsxs)("a", {
                                href: t,
                                children: [
                                  (0, Te.jsx)(pr, { icon: wr }),
                                  "3D Model",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, Te.jsx)("section", {
                className: "main",
                children: (0, Te.jsxs)("section", {
                  className: "content",
                  children: [
                    (0, Te.jsx)("h3", {
                      className: "title",
                      children: "Cum ajung la laboratorul de genetic\u0103?",
                    }),
                    (0, Te.jsx)("img", { src: fd, alt: "poza1" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Intra\u021bi prin intrarea de pe Louis Pasteur 6, unde e bariera \u0219i bustul lui Woodrow Wilson.",
                    }),
                    (0, Te.jsx)("img", { src: md, alt: "poza2" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Dup\u0103 ce a\u021bi mers tot \xeen fa\u021b\u0103, face\u021bi st\xe2nga \xeenainte de intrarea la decanat, unde sunt mai multe ma\u0219ini \u0219i nu mai e asfalt. Acolo e u\u0219a de intrare \xeen turn.",
                    }),
                    (0, Te.jsx)("img", { src: pd, alt: "poza3" }),
                    (0, Te.jsx)("p", {
                      children:
                        "\xcempinge\u021bi cu putere u\u0219a \u0219i ve\u021bi da de multe sc\u0103ri. Urca\u021bi-le pe toate p\xe2n\u0103 \xeen v\xe2rf. Succes!",
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        gd = n.p + "static/media/poza1.1d95f24d1400ca2dc630.jpg",
        vd = n.p + "static/media/poza2.9364ccee0ac41dd2f7a6.jpg",
        bd = n.p + "static/media/poza3.8f2acc73046ae6d4c06f.jpg";
      var xd = function () {
          window.scrollTo(0, 0);
          var e = Wr.resurse.amfiteatreSali.multimedia.maps,
            t = Wr.resurse.amfiteatreSali.multimedia.model3d;
          return (0, Te.jsxs)("div", {
            id: "multimedia",
            className: "amfiteatru",
            children: [
              (0, Te.jsxs)("header", {
                children: [
                  (0, Te.jsx)("div", {
                    className: "img-container",
                    children: (0, Te.jsx)("img", { src: $o, alt: "maps" }),
                  }),
                  (0, Te.jsxs)("div", {
                    className: "container",
                    children: [
                      (0, Te.jsx)("h3", {
                        className: "title",
                        children: "Sala Multimedia",
                      }),
                      (0, Te.jsxs)("div", {
                        className: "buttons-container",
                        children: [
                          "" !== e
                            ? (0, Te.jsxs)("a", {
                                href: e,
                                children: [
                                  (0, Te.jsx)(pr, { icon: xr }),
                                  "Maps",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t && "" !== e
                            ? (0, Te.jsx)("div", { className: "stretcher row" })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t
                            ? (0, Te.jsxs)("a", {
                                href: t,
                                children: [
                                  (0, Te.jsx)(pr, { icon: wr }),
                                  "3D Model",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, Te.jsx)("section", {
                className: "main",
                children: (0, Te.jsxs)("section", {
                  className: "content",
                  children: [
                    (0, Te.jsx)("h3", {
                      className: "title",
                      children: "Cum ajung la sala Multimedia?",
                    }),
                    (0, Te.jsx)("img", { src: gd, alt: "poza1" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Intra\u021bi \xeen rectorat de pe intrarea principal\u0103 de pe Victor Babe\u0219 8.",
                    }),
                    (0, Te.jsx)("img", { src: vd, alt: "poza2" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Dup\u0103 ce intra\u021bi, face\u021bi dreapta.",
                    }),
                    (0, Te.jsx)("img", { src: bd, alt: "poza3" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Sala Multimedia apare imediat pe dreapta, la c\xe2\u021biva metri.",
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        jd = n.p + "static/media/poza1.ea1c1ab8c5df110c90b0.jpg",
        yd = n.p + "static/media/poza2.eda757ceb56f42df1821.jpg",
        Ad = n.p + "static/media/poza3.5ce8e3e4109c7ea3fb33.jpg",
        wd = n.p + "static/media/poza4.bc2c327b051145b5e821.jpg",
        kd = n.p + "static/media/poza5.e023541d01059b7ebc98.jpg",
        Sd = n.p + "static/media/poza6.fb0fe70bff4a6ae82838.jpg",
        Nd = n.p + "static/media/poza7.5c5eafc6a60592d29467.jpg",
        zd = n.p + "static/media/video1.7fe5d12d5250d5f05fdf.mp4";
      var Cd = function () {
          window.scrollTo(0, 0);
          var e = Wr.resurse.amfiteatreSali.gine1.maps,
            t = Wr.resurse.amfiteatreSali.gine1.model3d;
          return (0, Te.jsxs)("div", {
            id: "gine1",
            className: "amfiteatru",
            children: [
              (0, Te.jsxs)("header", {
                children: [
                  (0, Te.jsx)("div", {
                    className: "img-container",
                    children: (0, Te.jsx)("img", { src: Go, alt: "maps" }),
                  }),
                  (0, Te.jsxs)("div", {
                    className: "container",
                    children: [
                      (0, Te.jsx)("h3", {
                        className: "title",
                        children: "Amfiteatrul Ginecologie I",
                      }),
                      (0, Te.jsxs)("div", {
                        className: "buttons-container",
                        children: [
                          "" !== e
                            ? (0, Te.jsxs)("a", {
                                href: e,
                                children: [
                                  (0, Te.jsx)(pr, { icon: xr }),
                                  "Maps",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t && "" !== e
                            ? (0, Te.jsx)("div", { className: "stretcher row" })
                            : (0, Te.jsx)(Te.Fragment, {}),
                          "" !== t
                            ? (0, Te.jsxs)("a", {
                                href: t,
                                children: [
                                  (0, Te.jsx)(pr, { icon: wr }),
                                  "3D Model",
                                ],
                              })
                            : (0, Te.jsx)(Te.Fragment, {}),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, Te.jsx)("section", {
                className: "main",
                children: (0, Te.jsxs)("section", {
                  className: "content",
                  children: [
                    (0, Te.jsx)("h3", {
                      className: "title",
                      children: "Cum ajung la amfiteatrul de ginecologie I?",
                    }),
                    (0, Te.jsxs)("video", {
                      controls: !0,
                      children: [
                        (0, Te.jsx)("source", { src: zd, type: "video/mp4" }),
                        "Your browser does not support the video tag.",
                      ],
                    }),
                    (0, Te.jsx)("img", { src: jd, alt: "poza1" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Intra\u021bi pe aceast\u0103 strad\u0103, dinspre Babe\u0219, \xeen incinta complexului Spitalului Jude\u021bean de Urgen\u021b\u0103 Cluj.",
                    }),
                    (0, Te.jsx)("img", { src: yd, alt: "poza2" }),
                    (0, Te.jsx)("p", {
                      children: "O lua\u021bi la dreapta, \xeen jos.",
                    }),
                    (0, Te.jsx)("img", { src: Ad, alt: "poza3" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Dup\u0103 ce a\u021bi cobor\xe2t, merge\u021bi \xeenainte p\xe2n\u0103 la cap\u0103tul str\u0103zii.",
                    }),
                    (0, Te.jsx)("img", { src: wd, alt: "poza4" }),
                    (0, Te.jsx)("p", {
                      children: "\xcen cap\u0103t, face\u021bi dreapta.",
                    }),
                    (0, Te.jsx)("img", { src: kd, alt: "poza5" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Dupa ce a\u021bi intrat \xeen cl\u0103dire, va trebui s\u0103 merge\u021bi \xeen partea dreapta; urca\u021bi sc\u0103rile.",
                    }),
                    (0, Te.jsx)("img", { src: Sd, alt: "poza6" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Dupa ce a\u021bi urcat sc\u0103rile, o ve\u021bi lua la dreapta.",
                    }),
                    (0, Te.jsx)("img", { src: Nd, alt: "poza7" }),
                    (0, Te.jsx)("p", {
                      children:
                        "Merge\u021bi \xeenainte, iar la finalul coridorului, o ve\u021bi lua la st\xe2nga. Merge\u021bi \xeenainte \u0219i ve\u021bi vedea amfiteatrul \xeen cap\u0103t.",
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        Ed = n.p + "static/media/1.81b221259be85a5aecb7.jpg",
        Pd = n.p + "static/media/2.ffd9d8d4e3e1d80eee1e.jpg",
        Od = n.p + "static/media/3.722a6e20ec1db83a2230.jpg",
        Md = n.p + "static/media/4.484c7fcefdc924d6c661.jpg",
        _d = n.p + "static/media/5.31a8893492334e6cd88d.jpg";
      var Td = function () {
        window.scrollTo(0, 0);
        var e = Wr.resurse.amfiteatreSali.ofta.maps,
          t = Wr.resurse.amfiteatreSali.ofta.model3d;
        return (0, Te.jsxs)("div", {
          id: "ofta",
          className: "amfiteatru",
          children: [
            (0, Te.jsxs)("header", {
              children: [
                (0, Te.jsx)("div", {
                  className: "img-container",
                  children: (0, Te.jsx)("img", { src: Qo, alt: "maps" }),
                }),
                (0, Te.jsxs)("div", {
                  className: "container",
                  children: [
                    (0, Te.jsx)("h3", {
                      className: "title",
                      children: "Amfiteatrul Oftalmologie",
                    }),
                    (0, Te.jsxs)("div", {
                      className: "buttons-container",
                      children: [
                        "" !== e
                          ? (0, Te.jsxs)("a", {
                              href: e,
                              children: [(0, Te.jsx)(pr, { icon: xr }), "Maps"],
                            })
                          : (0, Te.jsx)(Te.Fragment, {}),
                        "" !== t && "" !== e
                          ? (0, Te.jsx)("div", { className: "stretcher row" })
                          : (0, Te.jsx)(Te.Fragment, {}),
                        "" !== t
                          ? (0, Te.jsxs)("a", {
                              href: t,
                              children: [
                                (0, Te.jsx)(pr, { icon: wr }),
                                "3D Model",
                              ],
                            })
                          : (0, Te.jsx)(Te.Fragment, {}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, Te.jsx)("section", {
              className: "main",
              children: (0, Te.jsxs)("section", {
                className: "content",
                children: [
                  (0, Te.jsx)("h3", {
                    className: "title",
                    children: "Cum ajung la amfiteatrul de oftalmologie?",
                  }),
                  (0, Te.jsx)("p", {
                    children:
                      "Dup\u0103 ce intri dinspre Babe\u0219 \xeen zona de clinici, vei face prima la st\xe2nga, dup\u0103 care vei avea o cl\u0103dire \xeen dreapta ta unde va trebui s\u0103 urci un r\xe2nd de sc\u0103ri \u0219i s\u0103 intri pe u\u0219\u0103, vei intra \xeen hol unde la st\xe2nga este amfiteatrul.",
                  }),
                  (0, Te.jsx)("img", { src: Ed, alt: "poza1" }),
                  (0, Te.jsx)("img", { src: Pd, alt: "poza2" }),
                  (0, Te.jsx)("img", { src: Od, alt: "poza3" }),
                  (0, Te.jsx)("img", { src: Md, alt: "poza4" }),
                  (0, Te.jsx)("img", { src: _d, alt: "poza5" }),
                ],
              }),
            }),
          ],
        });
      };
      var Dd = function () {
          return (0, Te.jsxs)(ke, {
            children: [
              (0, Te.jsx)(Ae, { path: "/", element: (0, Te.jsx)(al, {}) }),
              (0, Te.jsx)(Ae, { path: "*", element: (0, Te.jsx)(ro, {}) }),
              (0, Te.jsx)(Ae, {
                path: Wr.resurse.amfiteatreSali.registratura.index,
                element: (0, Te.jsx)(ol, {}),
              }),
              (0, Te.jsx)(Ae, {
                path: Wr.resurse.amfiteatreSali.casierie.index,
                element: (0, Te.jsx)(fl, {}),
              }),
              (0, Te.jsx)(Ae, {
                path: Wr.resurse.amfiteatreSali.cabinetBabes.index,
                element: (0, Te.jsx)(pl, {}),
              }),
              (0, Te.jsx)(Ae, {
                path: Wr.resurse.amfiteatreSali.cabinetHasdeu.index,
                element: (0, Te.jsx)(gl, {}),
              }),
              (0, Te.jsx)(Ae, {
                path: Wr.resurse.amfiteatreSali.medicala1.index,
                element: (0, Te.jsx)(Nl, {}),
              }),
              (0, Te.jsx)(Ae, {
                path: Wr.resurse.amfiteatreSali.medicala2.index,
                element: (0, Te.jsx)(Dl, {}),
              }),
              (0, Te.jsx)(Ae, {
                path: Wr.resurse.amfiteatreSali.anatomie.index,
                element: (0, Te.jsx)(ql, {}),
              }),
              (0, Te.jsx)(Ae, {
                path: Wr.resurse.amfiteatreSali.cucuianuMantaPreda.index,
                element: (0, Te.jsx)(tc, {}),
              }),
              (0, Te.jsx)(Ae, {
                path: Wr.resurse.amfiteatreSali.moldovan.index,
                element: (0, Te.jsx)(sc, {}),
              }),
              (0, Te.jsx)(Ae, {
                path: Wr.resurse.amfiteatreSali.fiziologie.index,
                element: (0, Te.jsx)(dc, {}),
              }),
              (0, Te.jsx)(Ae, {
                path: Wr.resurse.amfiteatreSali.dorofteiu.index,
                element: (0, Te.jsx)(vc, {}),
              }),
              (0, Te.jsx)(Ae, {
                path: Wr.resurse.amfiteatreSali.aleman.index,
                element: (0, Te.jsx)(kc, {}),
              }),
              (0, Te.jsx)(Ae, {
                path: Wr.resurse.amfiteatreSali.anatomiePatologica.index,
                element: (0, Te.jsx)(Mc, {}),
              }),
              (0, Te.jsx)(Ae, {
                path: Wr.resurse.amfiteatreSali.bilascu.index,
                element: (0, Te.jsx)(Rc, {}),
              }),
              (0, Te.jsx)(Ae, {
                path: Wr.resurse.amfiteatreSali.opris.index,
                element: (0, Te.jsx)(qc, {}),
              }),
              (0, Te.jsx)(Ae, {
                path: Wr.resurse.amfiteatreSali.dermatologie.index,
                element: (0, Te.jsx)($c, {}),
              }),
              (0, Te.jsx)(Ae, {
                path: Wr.resurse.amfiteatreSali.infectioase.index,
                element: (0, Te.jsx)(Jc, {}),
              }),
              (0, Te.jsx)(Ae, {
                path: Wr.resurse.amfiteatreSali.minea.index,
                element: (0, Te.jsx)(ru, {}),
              }),
              (0, Te.jsx)(Ae, {
                path: Wr.resurse.amfiteatreSali.popper.index,
                element: (0, Te.jsx)(du, {}),
              }),
              (0, Te.jsx)(Ae, {
                path: Wr.resurse.amfiteatreSali.radiologie.index,
                element: (0, Te.jsx)(gu, {}),
              }),
              (0, Te.jsx)(Ae, {
                path: Wr.resurse.amfiteatreSali.recuperare.index,
                element: (0, Te.jsx)(Au, {}),
              }),
              (0, Te.jsx)(Ae, {
                path: Wr.resurse.amfiteatreSali.simiti.index,
                element: (0, Te.jsx)(Pu, {}),
              }),
              (0, Te.jsx)(Ae, {
                path: Wr.resurse.amfiteatreSali.labBiofizica.index,
                element: (0, Te.jsx)(Uu, {}),
              }),
              (0, Te.jsx)(Ae, {
                path: Wr.resurse.amfiteatreSali.labBiocel.index,
                element: (0, Te.jsx)(rd, {}),
              }),
              (0, Te.jsx)(Ae, {
                path: Wr.resurse.amfiteatreSali.labBiostat.index,
                element: (0, Te.jsx)(dd, {}),
              }),
              (0, Te.jsx)(Ae, {
                path: Wr.resurse.amfiteatreSali.genetica.index,
                element: (0, Te.jsx)(hd, {}),
              }),
              (0, Te.jsx)(Ae, {
                path: Wr.resurse.amfiteatreSali.multimedia.index,
                element: (0, Te.jsx)(xd, {}),
              }),
              (0, Te.jsx)(Ae, {
                path: Wr.resurse.amfiteatreSali.gine1.index,
                element: (0, Te.jsx)(Cd, {}),
              }),
              (0, Te.jsx)(Ae, {
                path: Wr.resurse.amfiteatreSali.ofta.index,
                element: (0, Te.jsx)(Td, {}),
              }),
            ],
          });
        },
        Ld = n.p + "static/media/faq-banner.9c449c5fb6cd679b81fc.jpg";
      var Fd = function (e) {
        var t = e.placeholder,
          n = void 0 === t ? "Search..." : t;
        return (0, Te.jsxs)("form", {
          role: "search",
          className: "search",
          children: [
            (0, Te.jsx)("label", {
              for: "search",
              children: "Search for stuff",
            }),
            (0, Te.jsx)("input", {
              type: "search",
              placeholder: n,
              spellCheck: "true",
              "aria-label": "On this page",
              autofocus: !0,
              required: !0,
            }),
            (0, Te.jsx)("button", {
              type: "submit",
              children: (0, Te.jsx)(pr, { icon: Pr }),
            }),
          ],
        });
      };
      var Rd = function () {
        return (
          window.scrollTo(0, 0),
          (0, Te.jsxs)("div", {
            id: "faq",
            children: [
              (0, Te.jsxs)(so, {
                img: Ld,
                top: 100,
                children: [
                  (0, Te.jsx)("h2", {
                    className: "title",
                    children: "\xcentreb\u0103ri frecvente",
                  }),
                  (0, Te.jsx)("p", {
                    children:
                      "Folose\u0219te bara de mai jos pentru a c\u0103uta prin lista de \xeentreb\u0103ri \u0219i r\u0103spunsuri.",
                  }),
                  (0, Te.jsx)("br", {}),
                  (0, Te.jsx)("div", {
                    className: "search-container",
                    children: (0, Te.jsx)(Fd, {
                      placeholder: "Ctrl + F pentru a c\u0103uta...",
                    }),
                  }),
                  (0, Te.jsx)("br", {}),
                ],
              }),
              (0, Te.jsxs)("div", {
                className: "main",
                children: [
                  (0, Te.jsx)("section", {
                    id: "birocratia",
                    children: (0, Te.jsxs)("div", {
                      className: "content",
                      children: [
                        (0, Te.jsx)("h3", {
                          className: "title",
                          children: "Birocra\u021bia UMF",
                        }),
                        (0, Te.jsxs)("div", {
                          className: "grid-container",
                          children: [
                            (0, Te.jsx)("div", {
                              className: "question",
                              children:
                                "Unde g\u0103sesc carta UMF \u0219i ce este?",
                            }),
                            (0, Te.jsxs)("div", {
                              className: "answer",
                              children: [
                                "Carta UMF reprezint\u0103 \u201eConstitu\u021bia\u201d UMF \u0219i con\u021bine principalele reguli \u0219i modul de organizare \u0219i func\u021bionare a Universit\u0103\u021bii. Carta \xeen versiune actualizat\u0103 este",
                                " ",
                                (0, Te.jsx)("a", {
                                  href: "http://www.umfcluj.ro/images/fisiere/regulamente/2021/CARTA%20-%20flipbook.pdf ",
                                  children: "aici",
                                }),
                                ".",
                              ],
                            }),
                            (0, Te.jsx)("div", {
                              className: "question",
                              children:
                                "Care este programul la secretariat \u0219i unde este?",
                            }),
                            (0, Te.jsxs)("div", {
                              className: "answer",
                              children: [
                                "Luni-joi de la 11 la 15. Pute\u021bi g\u0103si adresa secretariatului anului vostru precum \u0219i datele de contact ale secretarului de an",
                                " ",
                                (0, Te.jsx)("a", {
                                  href: "http://www.umfcluj.ro/facmed-ro/decanat-mg-ro/secretariat-mg-ro",
                                  children: "aici",
                                }),
                                ".",
                              ],
                            }),
                            (0, Te.jsx)("div", {
                              className: "question",
                              children:
                                "Care este programul la registratur\u0103 \u0219i unde este?",
                            }),
                            (0, Te.jsxs)("div", {
                              className: "answer",
                              children: [
                                "Luni-vineri de la 8 la 15. Registratura e la Decanat, pe Pasteur 4. Vede\u021bi pagina",
                                " ",
                                (0, Te.jsx)(Me, {
                                  to: "/".concat(
                                    Wr.resurse.amfiteatreSali,
                                    Wr.resurse.amfiteatreSali.registratura
                                  ),
                                  children: "aceasta",
                                }),
                                " ",
                                "pentru instruc\u021biuni detaliate. ",
                                (0, Te.jsx)("br", {}),
                              ],
                            }),
                            (0, Te.jsx)("div", {
                              className: "question",
                              children:
                                "Care este programul la biroul de taxe \u0219i casierie \u0219i unde sunt?",
                            }),
                            (0, Te.jsxs)("div", {
                              className: "answer",
                              children: [
                                "Biroul de taxe are program luni-vineri de la 8 la 14:30 iar casieria asemenea dar aceasta din urm\u0103 este \xeenchis\u0103 \xeen ultima zi lucr\u0103toare a fiec\u0103rei luni. Cele dou\u0103 sunt fa\u021b\u0103 \xeen fa\u021b\u0103 la parter la Decanat. Pentru instruc\u021biuni detaliate pentru a ajunge acolo, click",
                                " ",
                                (0, Te.jsx)(Me, {
                                  to: "/".concat(
                                    Wr.resurse.amfiteatreSali.index,
                                    Wr.resurse.amfiteatreSali.registratura.index
                                  ),
                                  children: "aici",
                                }),
                                ".",
                              ],
                            }),
                            (0, Te.jsx)("div", {
                              className: "question",
                              children:
                                "Care este programul la cabinetul medical \u0219i unde este?",
                            }),
                            (0, Te.jsx)("div", {
                              className: "answer",
                              children:
                                "Cabinetul medical s-a mutat \xeen c\u0103minul 7, cabinetul de pe Babe\u015f fiind \xeen renovare. Programul este luni- vineri 8-18. Telefonul este 0374 834 954. Mailul este cabinetmedical@umfcluj.ro.",
                            }),
                            (0, Te.jsx)("div", {
                              className: "question",
                              children:
                                "Unde g\u0103sesc cererea X \u0219i unde o depun?",
                            }),
                            (0, Te.jsxs)("div", {
                              className: "answer",
                              children: [
                                "La formulare tipizate pe",
                                " ",
                                (0, Te.jsx)("a", {
                                  href: "http://www.umfcluj.ro/informatii-ro/formulare-ro/category/5-formulare-studenti-masteranzi-doctoranzi-rezidenti",
                                  children: "site",
                                }),
                                " ",
                                "sunt toate cererile, inclusiv una general\u0103 de completat orice dori\u021bi. Ele se adreseaz\u0103 \xeen scris doamnei decan \u0219i se depun la registratur\u0103. Cel pu\u021bin unele secretare (vorbi\u021bi cu colegii s\u0103 vede\u021bi dac\u0103 se aplic\u0103 \u0219i anului vostru) accept\u0103 cererile, inclusiv online, trimise pe mail sau pe Teams, chiar \u0219i cu semn\u0103tur\u0103 electronic\u0103 (pe PDF, nu neap\u0103rat oficial\u0103 cump\u0103rat\u0103). Asta include adeverin\u021ba de student.",
                              ],
                            }),
                            (0, Te.jsx)("div", {
                              className: "question",
                              children:
                                "C\xe2t cost\u0103 X? Care sunt taxele la Y? C\xe2t cost\u0103 un c\u0103min?",
                            }),
                            (0, Te.jsxs)("div", {
                              className: "answer",
                              children: [
                                "Taxele pentru anul universitar 2022-2023, taxele de c\u0103min \u0219i alte documente utile se pot g\u0103si",
                                " ",
                                (0, Te.jsx)("a", {
                                  href: "http://www.umfcluj.ro/informatii-ro/uzcurent-ro",
                                  children: "aici",
                                }),
                                " ",
                                "e documentul cu toate costurile \u0219i taxele. Pentru rapiditate men\u021bion\u0103m c\u0103 pentru recuper\u0103rile de lucr\u0103ri practice ori stagii, taxa e 30 lei/ora, iar cererea de reexaminare (m\u0103rire/restan\u021b\u0103 R2) e 100 de lei.",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, Te.jsx)("hr", {}),
                  (0, Te.jsx)("section", {
                    id: "absente-mariri-restante-recuperari",
                    children: (0, Te.jsxs)("div", {
                      className: "content",
                      children: [
                        (0, Te.jsx)("h3", {
                          className: "title",
                          children:
                            "Absen\u021be, m\u0103riri, restan\u021be, recuper\u0103ri",
                        }),
                        (0, Te.jsxs)("div", {
                          className: "grid-container",
                          children: [
                            (0, Te.jsx)("div", {
                              className: "question",
                              children: "C\xe2te absen\u021be am voie?",
                            }),
                            (0, Te.jsx)("div", {
                              className: "answer",
                              children:
                                "La cursuri prezen\u021ba trebuie s\u0103 fie de minim 70% (deci la un curs de 2 ore/s\u0103pt, timp de 14 s\u0103pt\u0103m\xe2ni \u2013 un semestru ave\u021bi voie 4 absen\u021be). La lucr\u0103ri practice ori stagii nu avem voie nicio absen\u021b\u0103 nerecuperat\u0103. De-asemenea, nu se pot recupera mai mult de 20% din lucr\u0103ri/stagii; absentarea de la mai mult de at\xe2t, chit c\u0103 se face cu recuperare, implic\u0103 reluarea materiei.",
                            }),
                            (0, Te.jsx)("div", {
                              className: "question",
                              children: "Cum pot recupera absen\u021bele?",
                            }),
                            (0, Te.jsxs)("div", {
                              className: "answer",
                              children: [
                                "Absen\u021bele la cursuri nu se pot recupera, conform regulamentului. vostruLucr\u0103rile ori stagiile se pot recupera la final de semestru \xeen sesiuni speciale de recuperare. Exist\u0103 op\u021biunea de a recupera o lucrare cu alt\u0103 grup\u0103, \xeen aceea\u0219i s\u0103pt\u0103m\xe2n\u0103, dar doar dac\u0103 catedra este de acord (nu este obligatoriu s\u0103 fie de acord). De asemenea, nu se pot recupera un num\u0103r infinit de absen\u021be - absen\u021ba de la mai mult de 20% din LP-uri/stagii, fie ele motivate sau nu, recuperate sau nu, implic\u0103 repetarea materiei. Ata\u0219\u0103m un paragraf din regulament:",
                                (0, Te.jsx)("p", {
                                  children: (0, Te.jsxs)("i", {
                                    children: [
                                      "Motivarea absen\u0163elor \xeenregistrate la discipline se face de c\u0103tre conducerea facult\u0103\u0163ii, pe baza actelor justificative \u015fi a cererii individuale \xeenregistrat\u0103 la secretariatul facult\u0103\u0163ii.",
                                      " ",
                                      (0, Te.jsx)("b", {
                                        children:
                                          "Aceste acte trebuie depuse la decanat \xeen termen de cel mult 10 (zece) zile lucr\u0103toare de la reluarea activit\u0103\u0163ii didactice de c\u0103tre student.",
                                      }),
                                      "Motiv\u0103rile nedepuse la decanat \xeen timpul sus men\u0163ionat nu sunt luate \xeen considerare, iar absen\u0163ele aferente sunt considerate nemotivate.",
                                      " ",
                                      (0, Te.jsx)("b", {
                                        children:
                                          "Pentru motivarea absen\u0163elor medicale care \xeensumeaz\u0103 mai mult de 14 zile consecutive este necesar\u0103 prezentarea unui bilet de ie\u015fire din spital sau a unei adeverin\u0163e vizat\u0103 de un \u015fef de sec\u021bie spitaliceasc\u0103. Motiv\u0103rile medicale eliberate de alte institu\u0163ii dec\xe2t Cabinetul medical al U.M.F. sunt vizate de c\u0103tre Cabinetul medical U.M.F \xeenainte de depunerea la decanat.",
                                      }),
                                      " ",
                                      "Pe baza actelor justificative, decanatul va elibera o adeverin\u021b\u0103 ce va servi la motivarea absen\u021belor la discipline. Aten\u021bie!",
                                      " ",
                                      (0, Te.jsx)("b", {
                                        children:
                                          "Un student are voie s\u0103 recupereze la o disciplin\u0103 p\xe2n\u0103 la 20% din activit\u0103\u0163ile didactice practice. Absen\u0163ele \xeentr-un cuantum mai mare de 20% din activit\u0103\u0163ile practice impun reluarea \xeen \xeentregime a studiilor la materia \xeen cauz\u0103.",
                                      }),
                                    ],
                                  }),
                                }),
                                " ",
                                "Deci pentru motivarea absen\u021bei, trebuie dus\u0103 motivarea medical\u0103 de la doctorul vostru mai \xeent\xe2i la cabinetul UMF, iar cu foaia primit\u0103 de la ei, la ",
                                (0, Te.jsx)("b", {
                                  children: "registratur\u0103",
                                }),
                                " al\u0103turi de o cerere de motivare a absen\u021belor, care se g\u0103se\u0219te pe site (vede\u021bi sec\u021biunea I). sau deja printate pe masa din fa\u021ba registraturii, \xeen hol. Odat\u0103 cu finalizarea motiv\u0103rii aceasta va trebui ridicat\u0103 de la secretarul de an.",
                              ],
                            }),
                            (0, Te.jsx)("div", {
                              className: "question",
                              children:
                                "Cum se pl\u0103te\u0219te o absen\u021b\u0103? Ce absen\u021be nu se pl\u0103tesc?",
                            }),
                            (0, Te.jsxs)("div", {
                              className: "answer",
                              children: [
                                "Dac\u0103 ave\u021bi o absen\u021b\u0103 nemotivat\u0103 la o lucrare practic\u0103 ori stagiu \u0219i nu a\u021bi putut recupera \xeen aceea\u0219i s\u0103pt\u0103m\xe2n\u0103 (sau nu permite disciplina acest lucru), va trebui s\u0103 v\u0103 interesa\u021bi \xeen leg\u0103tur\u0103 cu sesiunea de recuperare care va fi cel mai probabil la final de semestru. Va trebui s\u0103 merge\u021bi la disciplin\u0103 (cel mai sigur la secretariat)i la ei s\u0103-\u021bi dea o di pentru a primi o dispozi\u021bie de plat\u0103, care trebuie dus\u0103 la casierie \u0219i achitat\u0103. Vezi Vede\u021bi casierie \u0219i taxe la sec\u021biunea I. ",
                                (0, Te.jsx)("br", {}),
                                (0, Te.jsx)("br", {}),
                                "Sunt scutite de plat\u0103 absen\u021bele cauzate de: politraumatisme, fracturi, boli infecto-contagioase, intern\u0103ri \xeen clinicile universitare din Cluj-Napoca, situa\u021biile familiale deosebite (analizate de decan pe baza unei audien\u021be solicitate de student).",
                              ],
                            }),
                            (0, Te.jsx)("div", {
                              className: "question",
                              children: "C\xe2te restan\u021be pot avea?",
                            }),
                            (0, Te.jsx)("div", {
                              className: "answer",
                              children:
                                "\xcen teorie, nelimitate, dar dac\u0103 nu le lua\u021bi nici \xeen R2, trebuie luat \xeen calcul faptul c\u0103 promovarea anului se poate face doar dac\u0103 acumula\u021bi minim 50 din cele 60 de credite credite \xeen anii MG I \u0219i II \u0219i toate creditele \xeen to\u021bi ceilal\u021bi ani de la MG (deci nu trebuie s\u0103 fi\u021bi integrali\u0219ti pentru a trece anul). Deci, de exemplu, dac\u0103 \xeen anul 1 nu trece\u021bi o materie de 6 credite \u0219i alta de 5 credite, ve\u021bi intra \xeen an complementar.",
                            }),
                            (0, Te.jsx)("div", {
                              className: "question",
                              children: "Ce este anul complementar?",
                            }),
                            (0, Te.jsxs)("div", {
                              className: "answer",
                              children: [
                                "Este un an de repeten\u021bie ce prelunge\u0219te durata total\u0103 a studiilor, \xeen care un student poate fi \xeenmatriculat de maximum 3 ori (dac\u0103 se dep\u0103\u0219e\u0219te aceast\u0103 limit\u0103, se aplic\u0103 exmatricularea). \xcen acest an, studentul este obligat s\u0103 fac\u0103 doar materiile nepromovate, din nou. Mai multe detalii \xeen",
                                " ",
                                (0, Te.jsx)("a", {
                                  href: "http://www.umfcluj.ro/images/fisiere/documente_publice/2022/regulamente/regulamente/Regulamentul_de_activitate_didactica_in_ciclul_de_studii_de_licenta.pdf",
                                  children: "regulament, capitolul XI",
                                }),
                                ".",
                              ],
                            }),
                            (0, Te.jsx)("div", {
                              className: "question",
                              children:
                                "C\xe2te m\u0103riri pot da \u0219i cum func\u021bioneaz\u0103?",
                            }),
                            (0, Te.jsxs)("div", {
                              className: "answer",
                              children: [
                                "Se pot da maxim 2 m\u0103riri pe an, deci maxim 12 pe \xeentreaga facultate. Nota primit\u0103 la m\u0103rire r\u0103m\xe2ne final\u0103, indiferent dac\u0103 e mai mic\u0103 sau mai mare. M\u0103ririle se pot da \u0219i \xeen R1, \u0219i \xeen R2, iar pentru cost, vede\u021bi taxele din sec\u021biunea I. Studentul trebuie s\u0103 fie integralist pe sesiunea dinaintea celei \xeen care se dore\u0219te reexaminarea (m\u0103rirea); astfel dac\u0103 dori\u021bi s\u0103 da\u021bi o m\u0103rire \xeen R1, trebuie s\u0103 fi\u021bi integrali\u0219ti. Dac\u0103 ave\u021bi o restan\u021b\u0103, trebuie s\u0103 o lua\u021bi \xeen R1 ca doar apoi s\u0103 pute\u021bi da m\u0103rirea \xeen R2. Dac\u0103 nu lua\u021bi o restan\u021b\u0103 \xeen R1 \u0219i trebuie s\u0103 o da\u021bi \xeen R2, implicit nu ve\u021bi putea da nicio m\u0103rire \xeen acel an universitar. ",
                                (0, Te.jsx)("br", {}),
                                (0, Te.jsx)("br", {}),
                                "Pentru a da o m\u0103rire, va trebui s\u0103 achita\u021bi taxa de reexaminare (mai \xeent\xe2i merge\u021bi la birou taxe pentru dispozi\u021bia de plat\u0103, apoi vis-a-vis la casierie ca s\u0103 pl\u0103ti\u021bi \u0219i s\u0103 ave\u021bi chitan\u021ba). Cu chitan\u021ba original\u0103 ve\u021bi merge la examen deodat\u0103 cu cei care dau restan\u021b\u0103. O copie a chitan\u021bei se depune la secretariat al\u0103turi de o cerere de reexaminare semnat\u0103 de catedr\u0103 (cu",
                                (0, Te.jsx)("i", {
                                  children:
                                    "\u201es\u0103-mi aproba\u021bi sus\u021binerea examenului \xeen vederea \xeembun\u0103t\u0103\u021birii notei\u201d",
                                }),
                                "), \xeenainte de examen.",
                              ],
                            }),
                            (0, Te.jsx)("div", {
                              className: "question",
                              children:
                                "Cum dau o restan\u021b\u0103 \xeen R2?",
                            }),
                            (0, Te.jsx)("div", {
                              className: "answer",
                              children:
                                "P\xe2n\u0103 acum era de-ajuns s\u0103 pl\u0103ti\u021bi (vede\u021bi mai sus procedura pentru m\u0103rire, care e asem\u0103n\u0103toare aici, fiind tot o reexaminare) \u0219i s\u0103 merge\u021bi cu chitan\u021ba la examen, dar acum se cere \u0219i o cerere de sus\u021binere examen semnat\u0103 de catedr\u0103 \u0219i depus\u0103 la secretariat al\u0103turi de o copie dup\u0103 chitan\u021b\u0103.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, Te.jsx)("hr", {}),
                  (0, Te.jsx)("section", {
                    id: "materii-examene-note-buget-burs\u0103",
                    children: (0, Te.jsxs)("div", {
                      className: "content",
                      children: [
                        (0, Te.jsx)("h3", {
                          className: "title",
                          children: "Materii, examene, note, buget, burs\u0103",
                        }),
                        (0, Te.jsxs)("div", {
                          className: "grid-container",
                          children: [
                            (0, Te.jsx)("div", {
                              className: "question",
                              children:
                                "Unde g\u0103sesc planul de \xeenv\u0103\u021b\u0103m\xe2nt pe anul meu universitar?",
                            }),
                            (0, Te.jsxs)("div", {
                              className: "answer",
                              children: [
                                "Pe",
                                " ",
                                (0, Te.jsx)("a", {
                                  href: "https://docs.google.com/document/d/1DDYejbfeXTRW3YjbkDezYXyXajzXiHejNGdw62f-KXk/edit?usp=sharing",
                                  children: "aceast\u0103",
                                }),
                                " ",
                                "pagin\u0103. G\u0103si\u021bi materiile, num\u0103rul de ore de curs \u0219i LP/stagiu pe fiecare semestru \u0219i num\u0103rul de credite pentru fiecare.",
                              ],
                            }),
                            (0, Te.jsx)("div", {
                              className: "question",
                              children: "Cum \xeemi calculez media mediilor?",
                            }),
                            (0, Te.jsxs)("div", {
                              className: "answer",
                              children: [
                                "Media mediilor e cea care se ia \xeen considerare la toate clasamentele. Ave\u021bi",
                                " ",
                                (0, Te.jsx)(Me, {
                                  to: Wr.resurse.calculatorMedie.index,
                                  children: "aici",
                                }),
                                " ",
                                "calculatoarele pentru medie, individualizate pentru fiecare an.",
                              ],
                            }),
                            (0, Te.jsx)("div", {
                              className: "question",
                              children:
                                "Ce medie de burs\u0103/buget/c\u0103min a fost \xeen anul X?",
                            }),
                            (0, Te.jsx)("div", {
                              className: "answer",
                              children:
                                "Pute\u021bi vedea acest lucru tot \xeen calculatorul acesta atunci c\xe2nd accesa\u021bi calculatorul specializ\u0103rii \u0219i anului vostru.",
                            }),
                            (0, Te.jsx)("div", {
                              className: "question",
                              children: "C\xe2te locuri la buget sunt?",
                            }),
                            (0, Te.jsx)("div", {
                              className: "answer",
                              children:
                                "Fiecare an are un alt num\u0103r de locuri la buget \u0219i tax\u0103. \xcentreba\u021bi secretarul de an sau un reprezentant.",
                            }),
                            (0, Te.jsx)("div", {
                              className: "question",
                              children:
                                "Dac\u0103 nu sunt integralist, ajung la tax\u0103?",
                            }),
                            (0, Te.jsx)("div", {
                              className: "answer",
                              children:
                                "Din p\u0103cate, da. Pute\u021bi avea \u0219i media 10, dar dac\u0103 o materie nu e trecut\u0103, sunte\u021bi trecu\u021bi instant la coada clasamentului, dup\u0103 integrali\u0219ti. Deci teoretic pute\u021bi prinde locul la buget dac\u0103 ave\u021bi una din cele mai mari medii dintre ne-integrali\u0219ti, \u0219i sunt mai mul\u021bi ne-integrali\u0219ti dec\xe2t locuri la tax\u0103, dar \xeen practic\u0103 acest lucru nu are \u0219anse mari s\u0103 se \xeent\xe2mple.",
                            }),
                            (0, Te.jsx)("div", {
                              className: "question",
                              children:
                                "C\xe2te burse de merit sunt \u0219i c\xe2t valoreaz\u0103?",
                            }),
                            (0, Te.jsx)("div", {
                              className: "answer",
                              children:
                                "Depinde de la an la an \u0219i nu se poate \u0219ti \xeen avans c\xe2te vor fi deoarece asta depinde de bugetul alocat \u0219i de num\u0103rul de burse sociale acordate. Media 10 ia burs\u0103 A de 750 lei, mediile 9,50-10 iau burs\u0103 B 700 lei, medile 9-9,50 iau burs\u0103 C 650 de lei, mediile 8,50-9 iau burs\u0103 D 600 lei, iar mediile sub 8.5 iau burs\u0103 E 590 de lei. Desigur, asta dac\u0103 sunt printre acei oameni cu burs\u0103; dac\u0103 cea mai mare medie din an este, de exemplu, 8,40, toate bursele vor fi de tip E.",
                            }),
                            (0, Te.jsx)("div", {
                              className: "question",
                              children:
                                "Cum aplic pentru bursa de performan\u021b\u0103 sau bursa social\u0103?",
                            }),
                            (0, Te.jsxs)("div", {
                              className: "answer",
                              children: [
                                "Trebuie s\u0103 sta\u021bi cu ochii pe anun\u021burile UMF la \xeenceput de an universitar. Aplica\u021biile \xeen aceste 2 cazuri se pot depune doar \xeen primele 20 de zile de facultate. Bursa social\u0103 e 580 de lei iar cea de performan\u021b\u0103 de 900 de lei. Pentru mai multe detalii, vede\u021bi",
                                " ",
                                (0, Te.jsx)("a", {
                                  href: "http://www.umfcluj.ro/images/fisiere/documente_publice/2022/regulamente/regulamente/REGULAMENT_PRIVIND_ACORDAREA_BURSELOR_STUDEN%C8%9AE%C8%98TI_%C8%98I_METODOLOGIA_ACORD%C4%82RII.pdf",
                                  children: "regulamentul de burse",
                                }),
                                ".",
                              ],
                            }),
                            (0, Te.jsx)("div", {
                              className: "question",
                              children:
                                "Pot lua burs\u0103 de merit dac\u0103 nu sunt integralist?",
                            }),
                            (0, Te.jsx)("div", {
                              className: "answer",
                              children:
                                "Din p\u0103cate, nu, \u0219i trebuie nici s\u0103 nu ave\u021bi credite restante de anul trecut, chiar dac\u0103 le promova\u021bi.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, Te.jsx)("hr", {}),
                  (0, Te.jsx)("section", {
                    id: "camine-biblioteca-sala",
                    children: (0, Te.jsxs)("div", {
                      className: "content",
                      children: [
                        (0, Te.jsx)("h3", {
                          className: "title",
                          children: "C\u0103mine, bibliotec\u0103, sal\u0103",
                        }),
                        (0, Te.jsxs)("div", {
                          className: "grid-container",
                          children: [
                            (0, Te.jsx)("div", {
                              className: "question",
                              children:
                                "Stau la c\u0103min \u0219i am o problem\u0103, ce fac?",
                            }),
                            (0, Te.jsx)("div", {
                              className: "answer",
                              children:
                                "Ia leg\u0103tura cu \u0219eful de palier, \u0219eful de c\u0103min, sau doamna/domnul administrator de c\u0103min.",
                            }),
                            (0, Te.jsx)("div", {
                              className: "question",
                              children:
                                "Nu stau la c\u0103min pentru c\u0103 nu am f\u0103cut precazarea, dar a\u0219 dori s\u0103 stau acum din diverse motive, ce fac? Sau doresc s\u0103 renun\u021b la locul meu de\u0219i am completat precazarea, ce fac?",
                            }),
                            (0, Te.jsx)("div", {
                              className: "answer",
                              children:
                                "Trebuie s\u0103 merge\u021bi la biroul Serviciului Social Administrativ, \xeen cl\u0103direa rectoratului de pe Babe\u0219 8, la parter, camera 12 \u0219i s\u0103 vorbi\u021bi acolo cu dl \u0219ef de serviciu Lazea.",
                            }),
                            (0, Te.jsx)("div", {
                              className: "question",
                              children:
                                "Pot fi cazat la c\u0103min dac\u0103 nu sunt integralist?",
                            }),
                            (0, Te.jsx)("div", {
                              className: "answer",
                              children:
                                "Din p\u0103cate, trebuie s\u0103 fi\u021bi integrali\u0219ti. Singura excep\u021bie sunt cei orfani de ambii p\u0103rin\u021bi \u0219i cei proveni\u021bi din casele de copii sau centrele de plasament familial.",
                            }),
                            (0, Te.jsx)("div", {
                              className: "question",
                              children:
                                "Cum \xeemi fac permis de bibliotec\u0103?",
                            }),
                            (0, Te.jsxs)("div", {
                              className: "answer",
                              children: [
                                "Toate detaliile,",
                                " ",
                                (0, Te.jsx)("a", {
                                  href: "http://www.umfcluj.ro/component/k2/item/772-accesul-la-biblioteca",
                                  children: "aici",
                                }),
                                ". Plus diverse alte infora\u021bii",
                                " ",
                                (0, Te.jsx)("a", {
                                  href: "http://www.umfcluj.ro/educatie-ro/reurseedu-ro/biblioteca-ro",
                                  children: "aici",
                                }),
                                ".",
                              ],
                            }),
                            (0, Te.jsx)("div", {
                              className: "question",
                              children: "Unde e sala de sport OSM?",
                            }),
                            (0, Te.jsx)("div", {
                              className: "answer",
                              children:
                                "\xcen campusul Ha\u0219deu, \xeen c\u0103minul H7 l\xe2ng\u0103 intrare. Urm\u0103ri\u021bi pagina de FB a OSM pentru updateuri despre sal\u0103.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, Te.jsx)("hr", {}),
                  (0, Te.jsx)("section", {
                    id: "osm-cercuri-proiecte-voluntariate",
                    children: (0, Te.jsxs)("div", {
                      className: "content",
                      children: [
                        (0, Te.jsx)("h3", {
                          className: "title",
                          children: "OSM, cercuri, proiecte, voluntariate",
                        }),
                        (0, Te.jsxs)("div", {
                          className: "grid-container",
                          children: [
                            (0, Te.jsx)("div", {
                              className: "question",
                              children:
                                "Unde g\u0103sesc informa\u021bii despre OSM?",
                            }),
                            (0, Te.jsx)("div", {
                              className: "answer",
                              children:
                                "Pe siteul nostru, pe care v\u0103 afla\u021bi acum.",
                            }),
                            (0, Te.jsx)("div", {
                              className: "question",
                              children:
                                "Cine este pre\u0219edintele OSM \u0219i ce face? Dar ceilal\u021bi membrii?",
                            }),
                            (0, Te.jsxs)("div", {
                              className: "answer",
                              children: [
                                "Pre\u0219edintele OSM este \xeen mod curent Vlad Lazar \u0219i aparte de a conduce \u0219i reprezenta legal Organiza\u021bia, el reprezint\u0103 to\u021bi studen\u021bii Facult\u0103\u021bii de Medicin\u0103 \xeen consiliul de administra\u021bie al UMF-ului. Pentru o list\u0103 complet\u0103 a conducerii OSM \u2013 Consiliul Director \u2013 \u0219i a reprezentan\u021bilor de an \u0219i a coordonatorilor de proiecte, accesa\u021bi",
                                " ",
                                (0, Te.jsx)(Me, {
                                  to: Wr.echipa,
                                  children: "aceast\u0103",
                                }),
                                " pagin\u0103.",
                              ],
                            }),
                            (0, Te.jsx)("div", {
                              className: "question",
                              children:
                                "Ce este Consiliul Facult\u0103\u021bii? Dar Senatul Universit\u0103\u021bii?",
                            }),
                            (0, Te.jsx)("div", {
                              className: "answer",
                              children:
                                "Cele dou\u0103 sunt forumurile de conducere ale Facult\u0103\u021bii, respectiv Universit\u0103\u021bii (un fel de parlamente). \xcent\xe2lnirile lor sunt lunare \u0219i la ele particip\u0103 ambii reprezentan\u021bi de an (sau unicul reprezentant de an pentru anul II MG) \xeen Consiliu, respectiv doar reprezentantul de an care c\xe2\u0219tig\u0103 mai multe voturi \xeen Senat. Ei au drept de vot la diversele teme de pe ordinea de zi, \xeen general complet birocratice.",
                            }),
                            (0, Te.jsx)("div", {
                              className: "question",
                              children:
                                "Unde pot g\u0103si o list\u0103 cu cercurile studen\u021be\u0219ti?",
                            }),
                            (0, Te.jsxs)("div", {
                              className: "answer",
                              children: [
                                "Chiar",
                                " ",
                                (0, Te.jsx)("a", {
                                  href: "http://www.medicina.umfcluj.ro/cercetare-med-ro/cerc-stud-med-ro",
                                  children: "aici",
                                }),
                                " ",
                                "Dac\u0103 vre\u021bi s\u0103 v\u0103 \xeenscrie\u021bi, va trebui \xeen general s\u0103-\u0103 c\u0103uta\u021bi cercul pe FB ca s\u0103 lua\u021bi leg\u0103tura cu coordonatorul.",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, Te.jsx)("section", {
                    id: "erasmus-congrese-conferinte",
                    children: (0, Te.jsxs)("div", {
                      className: "content",
                      children: [
                        (0, Te.jsx)("h3", {
                          className: "title",
                          children: "ERASMUS, congrese, conferin\u021be",
                        }),
                        (0, Te.jsxs)("div", {
                          className: "grid-container",
                          children: [
                            (0, Te.jsx)("div", {
                              className: "question",
                              children:
                                "Cum func\u021bioneaz\u0103 ERASMUS? Dar cel de var\u0103?",
                            }),
                            (0, Te.jsxs)("div", {
                              className: "answer",
                              children: [
                                "Ave\u021bi ",
                                (0, Te.jsx)(Me, {
                                  to: Wr.resurse.ghiduri.index,
                                  children: "aici",
                                }),
                                " un ghid complet despre ambele.",
                              ],
                            }),
                            (0, Te.jsx)("div", {
                              className: "question",
                              children:
                                "Pot deconta cheltuielile de X ca s\u0103 merg la conferin\u021ba/congresul/stagiul Y?",
                            }),
                            (0, Te.jsx)("div", {
                              className: "answer",
                              children:
                                "Pentru decontul deplas\u0103rilor externe (din fonduri UMF special alocate) ave\u021bi aici regulamentul cu instruc\u021biuni. Pentru decontul deplas\u0103rilor interne (din fonduri OSM), trebuie s\u0103 \xeenainta\u021bi o cerere (scrie\u021bi voi detaliile \u0219i datele voastre) Pre\u0219edintelui OSM pe admin@osmcluj.ro.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, Te.jsx)("section", {
                    id: "diverse",
                    children: (0, Te.jsxs)("div", {
                      className: "content",
                      children: [
                        (0, Te.jsx)("h3", {
                          className: "title",
                          children: "Diverse",
                        }),
                        (0, Te.jsxs)("div", {
                          className: "grid-container",
                          children: [
                            (0, Te.jsx)("div", {
                              className: "question",
                              children:
                                "Cum func\u021bioneaz\u0103 practica de var\u0103?",
                            }),
                            (0, Te.jsxs)("div", {
                              className: "answer",
                              children: [
                                "Ave\u021bi ",
                                (0, Te.jsx)(Me, {
                                  to: Wr.resurse.ghiduri.index,
                                  children: "aici",
                                }),
                                " ",
                                "ghidurile de practic\u0103 de var\u0103 pentru anul vostru.",
                              ],
                            }),
                            (0, Te.jsx)("div", {
                              className: "question",
                              children:
                                "C\xe2nd, cum, cu cine trebuie s\u0103 \xeemi scriu licen\u021ba?",
                            }),
                            (0, Te.jsxs)("div", {
                              className: "answer",
                              children: [
                                "Ave\u021bi ",
                                (0, Te.jsx)(Me, {
                                  to: Wr.resurse.ghiduri.index,
                                  children: "aici",
                                }),
                                " ghidul pentru procesul administrativ \u0219i birocratic de scriere \u0219i depunere a licen\u021bei.",
                              ],
                            }),
                            (0, Te.jsx)("div", {
                              className: "question",
                              children:
                                "Se pune sportul/preg\u0103tirea tezei de licen\u021b\u0103 la medie?",
                            }),
                            (0, Te.jsx)("div", {
                              className: "answer",
                              children:
                                "Da, se pune cu nota pe care o ob\u021bine\u021bi. Creditele acestor dou\u0103 materii sunt, \xeens\u0103, credite suplimentare. Credite suplimentare ofer\u0103 \u0219i pedagogia (cunoscut ca modul pedagogic, chiar dac\u0103 nu e un modul pedagogic atestat, oficial), dar nu are not\u0103 cu care s\u0103 influen\u021beze media.",
                            }),
                            (0, Te.jsx)("div", {
                              className: "question",
                              children: "Cum se numea aplica\u021bia UMF-ului?",
                            }),
                            (0, Te.jsx)("div", {
                              className: "answer",
                              children:
                                "InfoUtil UMF Cluj. Folosi\u021bi-o, este chiar folositoare!",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      };
      var Id = function () {
        return (
          window.scrollTo(0, 0),
          (0, Te.jsx)("h1", {
            style: {
              height: "100vh",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
            },
            children: "\xcen construc\u021bie",
          })
        );
      };
      var Bd = function () {
        return (
          window.scrollTo(0, 0),
          (0, Te.jsx)("h1", {
            style: {
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            },
            children: "\xcen construc\u021bie",
          })
        );
      };
      var Vd = function () {
        return (
          window.scrollTo(0, 0),
          (0, Te.jsx)("h1", {
            style: {
              height: "100vh",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
            },
            children: "\xcen construc\u021bie",
          })
        );
      };
      var Ud = function () {
        return (0, Te.jsx)(ke, {
          children: (0, Te.jsxs)(Ae, {
            path: "/",
            element: (0, Te.jsx)(oi, {}),
            children: [
              (0, Te.jsx)(Ae, { path: Wr.index, element: (0, Te.jsx)(ao, {}) }),
              (0, Te.jsx)(Ae, { path: "*", element: (0, Te.jsx)(ro, {}) }),
              (0, Te.jsx)(Ae, {
                path: Wr.proiecte.index.concat("*"),
                element: (0, Te.jsx)(uo, {}),
              }),
              (0, Te.jsx)(Ae, {
                path: Wr.evenimente.index,
                element: (0, Te.jsx)(po, {}),
              }),
              (0, Te.jsx)(Ae, {
                path: Wr.shop.index,
                element: (0, Te.jsx)(ho, {}),
              }),
              (0, Te.jsx)(Ae, {
                path: Wr.resurse.index,
                element: (0, Te.jsx)(vo, {}),
              }),
              (0, Te.jsx)(Ae, {
                path: Wr.resurse.regulamente.index.concat("*"),
                element: (0, Te.jsx)(xo, {}),
              }),
              (0, Te.jsx)(Ae, {
                path: Wr.resurse.ghiduri.index.concat("*"),
                element: (0, Te.jsx)(Ao, {}),
              }),
              (0, Te.jsx)(Ae, {
                path: Wr.resurse.legaturiExterne.index,
                element: (0, Te.jsx)(ko, {}),
              }),
              (0, Te.jsx)(Ae, {
                path: Wr.resurse.calculatorMedie.index,
                element: (0, Te.jsx)(So, {}),
              }),
              (0, Te.jsx)(Ae, {
                path: Wr.resurse.amfiteatreSali.index.concat("*"),
                element: (0, Te.jsx)(Dd, {}),
              }),
              (0, Te.jsx)(Ae, {
                path: Wr.resurse.faq.index,
                element: (0, Te.jsx)(Rd, {}),
              }),
              (0, Te.jsx)(Ae, {
                path: Wr.echipa.index,
                element: (0, Te.jsx)(Id, {}),
              }),
              (0, Te.jsx)(Ae, {
                path: Wr.parteneri.index,
                element: (0, Te.jsx)(Bd, {}),
              }),
              (0, Te.jsx)(Ae, {
                path: Wr.contact.index,
                element: (0, Te.jsx)(Vd, {}),
              }),
            ],
          }),
        });
      };
      var Hd = function () {
          return (0, Te.jsx)(Oe, {
            children: (0, Te.jsx)(ke, {
              children: (0, Te.jsx)(Ae, {
                path: "/*",
                element: (0, Te.jsx)(Ud, {}),
              }),
            }),
          });
        },
        qd = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(787)
              .then(n.bind(n, 787))
              .then(function (t) {
                var n = t.getCLS,
                  a = t.getFID,
                  r = t.getFCP,
                  i = t.getLCP,
                  s = t.getTTFB;
                n(e), a(e), r(e), i(e), s(e);
              });
        };
      r
        .createRoot(document.getElementById("root"))
        .render((0, Te.jsx)(t.StrictMode, { children: (0, Te.jsx)(Hd, {}) })),
        qd();
    })();
})();
//# sourceMappingURL=main.c76d94f4.js.map