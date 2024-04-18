var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
import { r as reactExports, R as React, j as jsxRuntimeExports, a as ReactDOM, b as React$1, c as createRoot } from "../../../assets/js/client.js";
import { g as getAugmentedNamespace, c as commonjsGlobal, a as getDefaultExportFromCjs } from "../../../assets/js/_commonjsHelpers.js";
import { c as createStyled, b as createTheme, _ as _extends$2, h as handleBreakpoints, r as resolveBreakpointValues, d as createUnarySpacing, e as deepmerge, m as mergeBreakpointsInOrder, f as extendSxProp, g as _objectWithoutPropertiesLoose, i as clsx, u as useThemeProps, j as composeClasses, k as generateUtilityClass, l as getValue, n as useTheme$3, o as defaultTheme$1, p as THEME_ID, q as generateUtilityClasses, s as styled$1, t as capitalize, v as useThemeProps$1, C as ClassNameGenerator, w as setRef, x as useEnhancedEffect, y as useEventCallback, z as useForkRef, A as useIsFocusVisible, D as _inheritsLoose, E as TransitionGroupContext, F as duration, G as alpha, H as ButtonBase, I as rootShouldForwardProp, J as keyframes, K as css$1, T as Typography, L as lighten, M as darken, B as Box, a as Button, N as _assertThisInitialized } from "../../../assets/js/Button.js";
import { u as useStorage } from "../../../assets/js/useStorage.js";
import { e as extensionStateStorage, d as domainStore, t as tagConfigStore, a as entityStore } from "../../../assets/js/extensionStateStorage.js";
import { t as tagActivityStore } from "../../../assets/js/tagActivityStorage.js";
import "../../../assets/js/base.js";
var require_sidepanel = __commonJS({
  "src/pages/sidepanel/index.js"(exports, module) {
    var reactIs_production_min = {};
    /**
     * @license React
     * react-is.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var b = Symbol.for("react.element"), c = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), e = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), h = Symbol.for("react.context"), k = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), n = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), t = Symbol.for("react.offscreen"), u;
    u = Symbol.for("react.module.reference");
    function v(a) {
      if ("object" === typeof a && null !== a) {
        var r = a.$$typeof;
        switch (r) {
          case b:
            switch (a = a.type, a) {
              case d:
              case f:
              case e:
              case m:
              case n:
                return a;
              default:
                switch (a = a && a.$$typeof, a) {
                  case k:
                  case h:
                  case l:
                  case q:
                  case p:
                  case g:
                    return a;
                  default:
                    return r;
                }
            }
          case c:
            return r;
        }
      }
    }
    reactIs_production_min.ContextConsumer = h;
    reactIs_production_min.ContextProvider = g;
    reactIs_production_min.Element = b;
    reactIs_production_min.ForwardRef = l;
    reactIs_production_min.Fragment = d;
    reactIs_production_min.Lazy = q;
    reactIs_production_min.Memo = p;
    reactIs_production_min.Portal = c;
    reactIs_production_min.Profiler = f;
    reactIs_production_min.StrictMode = e;
    reactIs_production_min.Suspense = m;
    reactIs_production_min.SuspenseList = n;
    reactIs_production_min.isAsyncMode = function() {
      return false;
    };
    reactIs_production_min.isConcurrentMode = function() {
      return false;
    };
    reactIs_production_min.isContextConsumer = function(a) {
      return v(a) === h;
    };
    reactIs_production_min.isContextProvider = function(a) {
      return v(a) === g;
    };
    reactIs_production_min.isElement = function(a) {
      return "object" === typeof a && null !== a && a.$$typeof === b;
    };
    reactIs_production_min.isForwardRef = function(a) {
      return v(a) === l;
    };
    reactIs_production_min.isFragment = function(a) {
      return v(a) === d;
    };
    reactIs_production_min.isLazy = function(a) {
      return v(a) === q;
    };
    reactIs_production_min.isMemo = function(a) {
      return v(a) === p;
    };
    reactIs_production_min.isPortal = function(a) {
      return v(a) === c;
    };
    reactIs_production_min.isProfiler = function(a) {
      return v(a) === f;
    };
    reactIs_production_min.isStrictMode = function(a) {
      return v(a) === e;
    };
    reactIs_production_min.isSuspense = function(a) {
      return v(a) === m;
    };
    reactIs_production_min.isSuspenseList = function(a) {
      return v(a) === n;
    };
    reactIs_production_min.isValidElementType = function(a) {
      return "string" === typeof a || "function" === typeof a || a === d || a === f || a === e || a === m || a === n || a === t || "object" === typeof a && null !== a && (a.$$typeof === q || a.$$typeof === p || a.$$typeof === g || a.$$typeof === h || a.$$typeof === l || a.$$typeof === u || void 0 !== a.getModuleId) ? true : false;
    };
    reactIs_production_min.typeOf = v;
    function createChainedFunction(...funcs) {
      return funcs.reduce((acc, func) => {
        if (func == null) {
          return acc;
        }
        return function chainedFunction(...args) {
          acc.apply(this, args);
          func.apply(this, args);
        };
      }, () => {
      });
    }
    function debounce(func, wait = 166) {
      let timeout;
      function debounced(...args) {
        const later = () => {
          func.apply(this, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      }
      debounced.clear = () => {
        clearTimeout(timeout);
      };
      return debounced;
    }
    function deprecatedPropType(validator, reason) {
      {
        return () => null;
      }
    }
    function isMuiElement(element, muiNames) {
      var _muiName, _element$type;
      return /* @__PURE__ */ reactExports.isValidElement(element) && muiNames.indexOf(
        // For server components `muiName` is avaialble in element.type._payload.value.muiName
        // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
        // eslint-disable-next-line no-underscore-dangle
        (_muiName = element.type.muiName) != null ? _muiName : (_element$type = element.type) == null || (_element$type = _element$type._payload) == null || (_element$type = _element$type.value) == null ? void 0 : _element$type.muiName
      ) !== -1;
    }
    function ownerDocument(node) {
      return node && node.ownerDocument || document;
    }
    function ownerWindow(node) {
      const doc = ownerDocument(node);
      return doc.defaultView || window;
    }
    function requirePropFactory(componentNameInError, Component) {
      {
        return () => null;
      }
    }
    let globalId = 0;
    function useGlobalId(idOverride) {
      const [defaultId, setDefaultId] = reactExports.useState(idOverride);
      const id = idOverride || defaultId;
      reactExports.useEffect(() => {
        if (defaultId == null) {
          globalId += 1;
          setDefaultId(`mui-${globalId}`);
        }
      }, [defaultId]);
      return id;
    }
    const maybeReactUseId = React["useId".toString()];
    function useId(idOverride) {
      if (maybeReactUseId !== void 0) {
        const reactId = maybeReactUseId();
        return idOverride != null ? idOverride : reactId;
      }
      return useGlobalId(idOverride);
    }
    function unsupportedProp(props, propName, componentName, location, propFullName) {
      {
        return null;
      }
    }
    function useControlled({
      controlled,
      default: defaultProp,
      name,
      state = "value"
    }) {
      const {
        current: isControlled
      } = reactExports.useRef(controlled !== void 0);
      const [valueState, setValue] = reactExports.useState(defaultProp);
      const value = isControlled ? controlled : valueState;
      const setValueIfUncontrolled = reactExports.useCallback((newValue) => {
        if (!isControlled) {
          setValue(newValue);
        }
      }, []);
      return [value, setValueIfUncontrolled];
    }
    let cachedType;
    function detectScrollType() {
      if (cachedType) {
        return cachedType;
      }
      const dummy = document.createElement("div");
      const container = document.createElement("div");
      container.style.width = "10px";
      container.style.height = "1px";
      dummy.appendChild(container);
      dummy.dir = "rtl";
      dummy.style.fontSize = "14px";
      dummy.style.width = "4px";
      dummy.style.height = "1px";
      dummy.style.position = "absolute";
      dummy.style.top = "-1000px";
      dummy.style.overflow = "scroll";
      document.body.appendChild(dummy);
      cachedType = "reverse";
      if (dummy.scrollLeft > 0) {
        cachedType = "default";
      } else {
        dummy.scrollLeft = 1;
        if (dummy.scrollLeft === 0) {
          cachedType = "negative";
        }
      }
      document.body.removeChild(dummy);
      return cachedType;
    }
    function getNormalizedScrollLeft(element, direction) {
      const scrollLeft = element.scrollLeft;
      if (direction !== "rtl") {
        return scrollLeft;
      }
      const type = detectScrollType();
      switch (type) {
        case "negative":
          return element.scrollWidth - element.clientWidth + scrollLeft;
        case "reverse":
          return element.scrollWidth - element.clientWidth - scrollLeft;
        default:
          return scrollLeft;
      }
    }
    const styled = createStyled();
    const ThemeContext = /* @__PURE__ */ reactExports.createContext(null);
    const ThemeContext$1 = ThemeContext;
    function useTheme$2() {
      const theme = reactExports.useContext(ThemeContext$1);
      return theme;
    }
    const hasSymbol = typeof Symbol === "function" && Symbol.for;
    const nested = hasSymbol ? Symbol.for("mui.nested") : "__THEME_NESTED__";
    const _excluded$q = ["component", "direction", "spacing", "divider", "children", "className", "useFlexGap"];
    const defaultTheme = createTheme();
    const defaultCreateStyledComponent = styled("div", {
      name: "MuiStack",
      slot: "Root",
      overridesResolver: (props, styles2) => styles2.root
    });
    function useThemePropsDefault(props) {
      return useThemeProps({
        props,
        name: "MuiStack",
        defaultTheme
      });
    }
    function joinChildren(children, separator) {
      const childrenArray = reactExports.Children.toArray(children).filter(Boolean);
      return childrenArray.reduce((output, child, index) => {
        output.push(child);
        if (index < childrenArray.length - 1) {
          output.push(/* @__PURE__ */ reactExports.cloneElement(separator, {
            key: `separator-${index}`
          }));
        }
        return output;
      }, []);
    }
    const getSideFromDirection = (direction) => {
      return {
        row: "Left",
        "row-reverse": "Right",
        column: "Top",
        "column-reverse": "Bottom"
      }[direction];
    };
    const style$1 = ({
      ownerState,
      theme
    }) => {
      let styles2 = _extends$2({
        display: "flex",
        flexDirection: "column"
      }, handleBreakpoints({
        theme
      }, resolveBreakpointValues({
        values: ownerState.direction,
        breakpoints: theme.breakpoints.values
      }), (propValue) => ({
        flexDirection: propValue
      })));
      if (ownerState.spacing) {
        const transformer = createUnarySpacing(theme);
        const base = Object.keys(theme.breakpoints.values).reduce((acc, breakpoint) => {
          if (typeof ownerState.spacing === "object" && ownerState.spacing[breakpoint] != null || typeof ownerState.direction === "object" && ownerState.direction[breakpoint] != null) {
            acc[breakpoint] = true;
          }
          return acc;
        }, {});
        const directionValues = resolveBreakpointValues({
          values: ownerState.direction,
          base
        });
        const spacingValues = resolveBreakpointValues({
          values: ownerState.spacing,
          base
        });
        if (typeof directionValues === "object") {
          Object.keys(directionValues).forEach((breakpoint, index, breakpoints) => {
            const directionValue = directionValues[breakpoint];
            if (!directionValue) {
              const previousDirectionValue = index > 0 ? directionValues[breakpoints[index - 1]] : "column";
              directionValues[breakpoint] = previousDirectionValue;
            }
          });
        }
        const styleFromPropValue = (propValue, breakpoint) => {
          if (ownerState.useFlexGap) {
            return {
              gap: getValue(transformer, propValue)
            };
          }
          return {
            // The useFlexGap={false} implement relies on each child to give up control of the margin.
            // We need to reset the margin to avoid double spacing.
            "& > :not(style):not(style)": {
              margin: 0
            },
            "& > :not(style) ~ :not(style)": {
              [`margin${getSideFromDirection(breakpoint ? directionValues[breakpoint] : ownerState.direction)}`]: getValue(transformer, propValue)
            }
          };
        };
        styles2 = deepmerge(styles2, handleBreakpoints({
          theme
        }, spacingValues, styleFromPropValue));
      }
      styles2 = mergeBreakpointsInOrder(theme.breakpoints, styles2);
      return styles2;
    };
    function createStack(options = {}) {
      const {
        // This will allow adding custom styled fn (for example for custom sx style function)
        createStyledComponent = defaultCreateStyledComponent,
        useThemeProps: useThemeProps2 = useThemePropsDefault,
        componentName = "MuiStack"
      } = options;
      const useUtilityClasses2 = () => {
        const slots = {
          root: ["root"]
        };
        return composeClasses(slots, (slot) => generateUtilityClass(componentName, slot), {});
      };
      const StackRoot = createStyledComponent(style$1);
      const Stack2 = /* @__PURE__ */ reactExports.forwardRef(function Grid2(inProps, ref) {
        const themeProps = useThemeProps2(inProps);
        const props = extendSxProp(themeProps);
        const {
          component = "div",
          direction = "column",
          spacing = 0,
          divider,
          children,
          className,
          useFlexGap = false
        } = props, other = _objectWithoutPropertiesLoose(props, _excluded$q);
        const ownerState = {
          direction,
          spacing,
          useFlexGap
        };
        const classes = useUtilityClasses2();
        return /* @__PURE__ */ jsxRuntimeExports.jsx(StackRoot, _extends$2({
          as: component,
          ownerState,
          ref,
          className: clsx(classes.root, className)
        }, other, {
          children: divider ? joinChildren(children, divider) : children
        }));
      });
      return Stack2;
    }
    function useTheme$1() {
      const theme = useTheme$3(defaultTheme$1);
      return theme[THEME_ID] || theme;
    }
    const getOverlayAlpha = (elevation) => {
      let alphaValue;
      if (elevation < 1) {
        alphaValue = 5.11916 * elevation ** 2;
      } else {
        alphaValue = 4.5 * Math.log(elevation + 1) + 2;
      }
      return (alphaValue / 100).toFixed(2);
    };
    function getSvgIconUtilityClass(slot) {
      return generateUtilityClass("MuiSvgIcon", slot);
    }
    generateUtilityClasses("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
    const _excluded$p = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"];
    const useUtilityClasses$l = (ownerState) => {
      const {
        color,
        fontSize,
        classes
      } = ownerState;
      const slots = {
        root: ["root", color !== "inherit" && `color${capitalize(color)}`, `fontSize${capitalize(fontSize)}`]
      };
      return composeClasses(slots, getSvgIconUtilityClass, classes);
    };
    const SvgIconRoot = styled$1("svg", {
      name: "MuiSvgIcon",
      slot: "Root",
      overridesResolver: (props, styles2) => {
        const {
          ownerState
        } = props;
        return [styles2.root, ownerState.color !== "inherit" && styles2[`color${capitalize(ownerState.color)}`], styles2[`fontSize${capitalize(ownerState.fontSize)}`]];
      }
    })(({
      theme,
      ownerState
    }) => {
      var _theme$transitions, _theme$transitions$cr, _theme$transitions2, _theme$typography, _theme$typography$pxT, _theme$typography2, _theme$typography2$px, _theme$typography3, _theme$typography3$px, _palette$ownerState$c, _palette, _palette2, _palette3;
      return {
        userSelect: "none",
        width: "1em",
        height: "1em",
        display: "inline-block",
        // the <svg> will define the property that has `currentColor`
        // e.g. heroicons uses fill="none" and stroke="currentColor"
        fill: ownerState.hasSvgAsChild ? void 0 : "currentColor",
        flexShrink: 0,
        transition: (_theme$transitions = theme.transitions) == null || (_theme$transitions$cr = _theme$transitions.create) == null ? void 0 : _theme$transitions$cr.call(_theme$transitions, "fill", {
          duration: (_theme$transitions2 = theme.transitions) == null || (_theme$transitions2 = _theme$transitions2.duration) == null ? void 0 : _theme$transitions2.shorter
        }),
        fontSize: {
          inherit: "inherit",
          small: ((_theme$typography = theme.typography) == null || (_theme$typography$pxT = _theme$typography.pxToRem) == null ? void 0 : _theme$typography$pxT.call(_theme$typography, 20)) || "1.25rem",
          medium: ((_theme$typography2 = theme.typography) == null || (_theme$typography2$px = _theme$typography2.pxToRem) == null ? void 0 : _theme$typography2$px.call(_theme$typography2, 24)) || "1.5rem",
          large: ((_theme$typography3 = theme.typography) == null || (_theme$typography3$px = _theme$typography3.pxToRem) == null ? void 0 : _theme$typography3$px.call(_theme$typography3, 35)) || "2.1875rem"
        }[ownerState.fontSize],
        // TODO v5 deprecate, v6 remove for sx
        color: (_palette$ownerState$c = (_palette = (theme.vars || theme).palette) == null || (_palette = _palette[ownerState.color]) == null ? void 0 : _palette.main) != null ? _palette$ownerState$c : {
          action: (_palette2 = (theme.vars || theme).palette) == null || (_palette2 = _palette2.action) == null ? void 0 : _palette2.active,
          disabled: (_palette3 = (theme.vars || theme).palette) == null || (_palette3 = _palette3.action) == null ? void 0 : _palette3.disabled,
          inherit: void 0
        }[ownerState.color]
      };
    });
    const SvgIcon = /* @__PURE__ */ reactExports.forwardRef(function SvgIcon2(inProps, ref) {
      const props = useThemeProps$1({
        props: inProps,
        name: "MuiSvgIcon"
      });
      const {
        children,
        className,
        color = "inherit",
        component = "svg",
        fontSize = "medium",
        htmlColor,
        inheritViewBox = false,
        titleAccess,
        viewBox = "0 0 24 24"
      } = props, other = _objectWithoutPropertiesLoose(props, _excluded$p);
      const hasSvgAsChild = /* @__PURE__ */ reactExports.isValidElement(children) && children.type === "svg";
      const ownerState = _extends$2({}, props, {
        color,
        component,
        fontSize,
        instanceFontSize: inProps.fontSize,
        inheritViewBox,
        viewBox,
        hasSvgAsChild
      });
      const more = {};
      if (!inheritViewBox) {
        more.viewBox = viewBox;
      }
      const classes = useUtilityClasses$l(ownerState);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(SvgIconRoot, _extends$2({
        as: component,
        className: clsx(classes.root, className),
        focusable: "false",
        color: htmlColor,
        "aria-hidden": titleAccess ? void 0 : true,
        role: titleAccess ? "img" : void 0,
        ref
      }, more, other, hasSvgAsChild && children.props, {
        ownerState,
        children: [hasSvgAsChild ? children.props.children : children, titleAccess ? /* @__PURE__ */ jsxRuntimeExports.jsx("title", {
          children: titleAccess
        }) : null]
      }));
    });
    SvgIcon.muiName = "SvgIcon";
    function createSvgIcon$1(path, displayName) {
      function Component(props, ref) {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(SvgIcon, _extends$2({
          "data-testid": `${displayName}Icon`,
          ref
        }, props, {
          children: path
        }));
      }
      Component.muiName = SvgIcon.muiName;
      return /* @__PURE__ */ reactExports.memo(/* @__PURE__ */ reactExports.forwardRef(Component));
    }
    const unstable_ClassNameGenerator = {
      configure: (generator) => {
        ClassNameGenerator.configure(generator);
      }
    };
    const utils = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      capitalize,
      createChainedFunction,
      createSvgIcon: createSvgIcon$1,
      debounce,
      deprecatedPropType,
      isMuiElement,
      ownerDocument,
      ownerWindow,
      requirePropFactory,
      setRef,
      unstable_ClassNameGenerator,
      unstable_useEnhancedEffect: useEnhancedEffect,
      unstable_useId: useId,
      unsupportedProp,
      useControlled,
      useEventCallback,
      useForkRef,
      useIsFocusVisible
    }, Symbol.toStringTag, { value: "Module" }));
    const config = {
      disabled: false
    };
    var forceReflow = function forceReflow2(node) {
      return node.scrollTop;
    };
    var UNMOUNTED = "unmounted";
    var EXITED = "exited";
    var ENTERING = "entering";
    var ENTERED = "entered";
    var EXITING = "exiting";
    var Transition = /* @__PURE__ */ function(_React$Component) {
      _inheritsLoose(Transition2, _React$Component);
      function Transition2(props, context) {
        var _this;
        _this = _React$Component.call(this, props, context) || this;
        var parentGroup = context;
        var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
        var initialStatus;
        _this.appearStatus = null;
        if (props.in) {
          if (appear) {
            initialStatus = EXITED;
            _this.appearStatus = ENTERING;
          } else {
            initialStatus = ENTERED;
          }
        } else {
          if (props.unmountOnExit || props.mountOnEnter) {
            initialStatus = UNMOUNTED;
          } else {
            initialStatus = EXITED;
          }
        }
        _this.state = {
          status: initialStatus
        };
        _this.nextCallback = null;
        return _this;
      }
      Transition2.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
        var nextIn = _ref.in;
        if (nextIn && prevState.status === UNMOUNTED) {
          return {
            status: EXITED
          };
        }
        return null;
      };
      var _proto = Transition2.prototype;
      _proto.componentDidMount = function componentDidMount() {
        this.updateStatus(true, this.appearStatus);
      };
      _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
        var nextStatus = null;
        if (prevProps !== this.props) {
          var status = this.state.status;
          if (this.props.in) {
            if (status !== ENTERING && status !== ENTERED) {
              nextStatus = ENTERING;
            }
          } else {
            if (status === ENTERING || status === ENTERED) {
              nextStatus = EXITING;
            }
          }
        }
        this.updateStatus(false, nextStatus);
      };
      _proto.componentWillUnmount = function componentWillUnmount() {
        this.cancelNextCallback();
      };
      _proto.getTimeouts = function getTimeouts() {
        var timeout2 = this.props.timeout;
        var exit, enter, appear;
        exit = enter = appear = timeout2;
        if (timeout2 != null && typeof timeout2 !== "number") {
          exit = timeout2.exit;
          enter = timeout2.enter;
          appear = timeout2.appear !== void 0 ? timeout2.appear : enter;
        }
        return {
          exit,
          enter,
          appear
        };
      };
      _proto.updateStatus = function updateStatus(mounting, nextStatus) {
        if (mounting === void 0) {
          mounting = false;
        }
        if (nextStatus !== null) {
          this.cancelNextCallback();
          if (nextStatus === ENTERING) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this);
              if (node)
                forceReflow(node);
            }
            this.performEnter(mounting);
          } else {
            this.performExit();
          }
        } else if (this.props.unmountOnExit && this.state.status === EXITED) {
          this.setState({
            status: UNMOUNTED
          });
        }
      };
      _proto.performEnter = function performEnter(mounting) {
        var _this2 = this;
        var enter = this.props.enter;
        var appearing = this.context ? this.context.isMounting : mounting;
        var _ref2 = this.props.nodeRef ? [appearing] : [ReactDOM.findDOMNode(this), appearing], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
        var timeouts = this.getTimeouts();
        var enterTimeout = appearing ? timeouts.appear : timeouts.enter;
        if (!mounting && !enter || config.disabled) {
          this.safeSetState({
            status: ENTERED
          }, function() {
            _this2.props.onEntered(maybeNode);
          });
          return;
        }
        this.props.onEnter(maybeNode, maybeAppearing);
        this.safeSetState({
          status: ENTERING
        }, function() {
          _this2.props.onEntering(maybeNode, maybeAppearing);
          _this2.onTransitionEnd(enterTimeout, function() {
            _this2.safeSetState({
              status: ENTERED
            }, function() {
              _this2.props.onEntered(maybeNode, maybeAppearing);
            });
          });
        });
      };
      _proto.performExit = function performExit() {
        var _this3 = this;
        var exit = this.props.exit;
        var timeouts = this.getTimeouts();
        var maybeNode = this.props.nodeRef ? void 0 : ReactDOM.findDOMNode(this);
        if (!exit || config.disabled) {
          this.safeSetState({
            status: EXITED
          }, function() {
            _this3.props.onExited(maybeNode);
          });
          return;
        }
        this.props.onExit(maybeNode);
        this.safeSetState({
          status: EXITING
        }, function() {
          _this3.props.onExiting(maybeNode);
          _this3.onTransitionEnd(timeouts.exit, function() {
            _this3.safeSetState({
              status: EXITED
            }, function() {
              _this3.props.onExited(maybeNode);
            });
          });
        });
      };
      _proto.cancelNextCallback = function cancelNextCallback() {
        if (this.nextCallback !== null) {
          this.nextCallback.cancel();
          this.nextCallback = null;
        }
      };
      _proto.safeSetState = function safeSetState(nextState, callback) {
        callback = this.setNextCallback(callback);
        this.setState(nextState, callback);
      };
      _proto.setNextCallback = function setNextCallback(callback) {
        var _this4 = this;
        var active = true;
        this.nextCallback = function(event) {
          if (active) {
            active = false;
            _this4.nextCallback = null;
            callback(event);
          }
        };
        this.nextCallback.cancel = function() {
          active = false;
        };
        return this.nextCallback;
      };
      _proto.onTransitionEnd = function onTransitionEnd(timeout2, handler) {
        this.setNextCallback(handler);
        var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this);
        var doesNotHaveTimeoutOrListener = timeout2 == null && !this.props.addEndListener;
        if (!node || doesNotHaveTimeoutOrListener) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
          this.props.addEndListener(maybeNode, maybeNextCallback);
        }
        if (timeout2 != null) {
          setTimeout(this.nextCallback, timeout2);
        }
      };
      _proto.render = function render() {
        var status = this.state.status;
        if (status === UNMOUNTED) {
          return null;
        }
        var _this$props = this.props, children = _this$props.children;
        _this$props.in;
        _this$props.mountOnEnter;
        _this$props.unmountOnExit;
        _this$props.appear;
        _this$props.enter;
        _this$props.exit;
        _this$props.timeout;
        _this$props.addEndListener;
        _this$props.onEnter;
        _this$props.onEntering;
        _this$props.onEntered;
        _this$props.onExit;
        _this$props.onExiting;
        _this$props.onExited;
        _this$props.nodeRef;
        var childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
        return (
          // allows for nested Transitions
          /* @__PURE__ */ React$1.createElement(TransitionGroupContext.Provider, {
            value: null
          }, typeof children === "function" ? children(status, childProps) : React$1.cloneElement(React$1.Children.only(children), childProps))
        );
      };
      return Transition2;
    }(React$1.Component);
    Transition.contextType = TransitionGroupContext;
    Transition.propTypes = {};
    function noop() {
    }
    Transition.defaultProps = {
      in: false,
      mountOnEnter: false,
      unmountOnExit: false,
      appear: false,
      enter: true,
      exit: true,
      onEnter: noop,
      onEntering: noop,
      onEntered: noop,
      onExit: noop,
      onExiting: noop,
      onExited: noop
    };
    Transition.UNMOUNTED = UNMOUNTED;
    Transition.EXITED = EXITED;
    Transition.ENTERING = ENTERING;
    Transition.ENTERED = ENTERED;
    Transition.EXITING = EXITING;
    const Transition$1 = Transition;
    function getTransitionProps(props, options) {
      var _style$transitionDura, _style$transitionTimi;
      const {
        timeout,
        easing,
        style: style2 = {}
      } = props;
      return {
        duration: (_style$transitionDura = style2.transitionDuration) != null ? _style$transitionDura : typeof timeout === "number" ? timeout : timeout[options.mode] || 0,
        easing: (_style$transitionTimi = style2.transitionTimingFunction) != null ? _style$transitionTimi : typeof easing === "object" ? easing[options.mode] : easing,
        delay: style2.transitionDelay
      };
    }
    function getCollapseUtilityClass(slot) {
      return generateUtilityClass("MuiCollapse", slot);
    }
    generateUtilityClasses("MuiCollapse", ["root", "horizontal", "vertical", "entered", "hidden", "wrapper", "wrapperInner"]);
    const _excluded$o = ["addEndListener", "children", "className", "collapsedSize", "component", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "orientation", "style", "timeout", "TransitionComponent"];
    const useUtilityClasses$k = (ownerState) => {
      const {
        orientation,
        classes
      } = ownerState;
      const slots = {
        root: ["root", `${orientation}`],
        entered: ["entered"],
        hidden: ["hidden"],
        wrapper: ["wrapper", `${orientation}`],
        wrapperInner: ["wrapperInner", `${orientation}`]
      };
      return composeClasses(slots, getCollapseUtilityClass, classes);
    };
    const CollapseRoot = styled$1("div", {
      name: "MuiCollapse",
      slot: "Root",
      overridesResolver: (props, styles2) => {
        const {
          ownerState
        } = props;
        return [styles2.root, styles2[ownerState.orientation], ownerState.state === "entered" && styles2.entered, ownerState.state === "exited" && !ownerState.in && ownerState.collapsedSize === "0px" && styles2.hidden];
      }
    })(({
      theme,
      ownerState
    }) => _extends$2({
      height: 0,
      overflow: "hidden",
      transition: theme.transitions.create("height")
    }, ownerState.orientation === "horizontal" && {
      height: "auto",
      width: 0,
      transition: theme.transitions.create("width")
    }, ownerState.state === "entered" && _extends$2({
      height: "auto",
      overflow: "visible"
    }, ownerState.orientation === "horizontal" && {
      width: "auto"
    }), ownerState.state === "exited" && !ownerState.in && ownerState.collapsedSize === "0px" && {
      visibility: "hidden"
    }));
    const CollapseWrapper = styled$1("div", {
      name: "MuiCollapse",
      slot: "Wrapper",
      overridesResolver: (props, styles2) => styles2.wrapper
    })(({
      ownerState
    }) => _extends$2({
      // Hack to get children with a negative margin to not falsify the height computation.
      display: "flex",
      width: "100%"
    }, ownerState.orientation === "horizontal" && {
      width: "auto",
      height: "100%"
    }));
    const CollapseWrapperInner = styled$1("div", {
      name: "MuiCollapse",
      slot: "WrapperInner",
      overridesResolver: (props, styles2) => styles2.wrapperInner
    })(({
      ownerState
    }) => _extends$2({
      width: "100%"
    }, ownerState.orientation === "horizontal" && {
      width: "auto",
      height: "100%"
    }));
    const Collapse = /* @__PURE__ */ reactExports.forwardRef(function Collapse2(inProps, ref) {
      const props = useThemeProps$1({
        props: inProps,
        name: "MuiCollapse"
      });
      const {
        addEndListener,
        children,
        className,
        collapsedSize: collapsedSizeProp = "0px",
        component,
        easing,
        in: inProp,
        onEnter,
        onEntered,
        onEntering,
        onExit,
        onExited,
        onExiting,
        orientation = "vertical",
        style: style2,
        timeout = duration.standard,
        // eslint-disable-next-line react/prop-types
        TransitionComponent = Transition$1
      } = props, other = _objectWithoutPropertiesLoose(props, _excluded$o);
      const ownerState = _extends$2({}, props, {
        orientation,
        collapsedSize: collapsedSizeProp
      });
      const classes = useUtilityClasses$k(ownerState);
      const theme = useTheme$1();
      const timer = reactExports.useRef();
      const wrapperRef = reactExports.useRef(null);
      const autoTransitionDuration = reactExports.useRef();
      const collapsedSize = typeof collapsedSizeProp === "number" ? `${collapsedSizeProp}px` : collapsedSizeProp;
      const isHorizontal = orientation === "horizontal";
      const size = isHorizontal ? "width" : "height";
      reactExports.useEffect(() => {
        return () => {
          clearTimeout(timer.current);
        };
      }, []);
      const nodeRef = reactExports.useRef(null);
      const handleRef = useForkRef(ref, nodeRef);
      const normalizedTransitionCallback = (callback) => (maybeIsAppearing) => {
        if (callback) {
          const node = nodeRef.current;
          if (maybeIsAppearing === void 0) {
            callback(node);
          } else {
            callback(node, maybeIsAppearing);
          }
        }
      };
      const getWrapperSize = () => wrapperRef.current ? wrapperRef.current[isHorizontal ? "clientWidth" : "clientHeight"] : 0;
      const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
        if (wrapperRef.current && isHorizontal) {
          wrapperRef.current.style.position = "absolute";
        }
        node.style[size] = collapsedSize;
        if (onEnter) {
          onEnter(node, isAppearing);
        }
      });
      const handleEntering = normalizedTransitionCallback((node, isAppearing) => {
        const wrapperSize = getWrapperSize();
        if (wrapperRef.current && isHorizontal) {
          wrapperRef.current.style.position = "";
        }
        const {
          duration: transitionDuration,
          easing: transitionTimingFunction
        } = getTransitionProps({
          style: style2,
          timeout,
          easing
        }, {
          mode: "enter"
        });
        if (timeout === "auto") {
          const duration2 = theme.transitions.getAutoHeightDuration(wrapperSize);
          node.style.transitionDuration = `${duration2}ms`;
          autoTransitionDuration.current = duration2;
        } else {
          node.style.transitionDuration = typeof transitionDuration === "string" ? transitionDuration : `${transitionDuration}ms`;
        }
        node.style[size] = `${wrapperSize}px`;
        node.style.transitionTimingFunction = transitionTimingFunction;
        if (onEntering) {
          onEntering(node, isAppearing);
        }
      });
      const handleEntered = normalizedTransitionCallback((node, isAppearing) => {
        node.style[size] = "auto";
        if (onEntered) {
          onEntered(node, isAppearing);
        }
      });
      const handleExit = normalizedTransitionCallback((node) => {
        node.style[size] = `${getWrapperSize()}px`;
        if (onExit) {
          onExit(node);
        }
      });
      const handleExited = normalizedTransitionCallback(onExited);
      const handleExiting = normalizedTransitionCallback((node) => {
        const wrapperSize = getWrapperSize();
        const {
          duration: transitionDuration,
          easing: transitionTimingFunction
        } = getTransitionProps({
          style: style2,
          timeout,
          easing
        }, {
          mode: "exit"
        });
        if (timeout === "auto") {
          const duration2 = theme.transitions.getAutoHeightDuration(wrapperSize);
          node.style.transitionDuration = `${duration2}ms`;
          autoTransitionDuration.current = duration2;
        } else {
          node.style.transitionDuration = typeof transitionDuration === "string" ? transitionDuration : `${transitionDuration}ms`;
        }
        node.style[size] = collapsedSize;
        node.style.transitionTimingFunction = transitionTimingFunction;
        if (onExiting) {
          onExiting(node);
        }
      });
      const handleAddEndListener = (next) => {
        if (timeout === "auto") {
          timer.current = setTimeout(next, autoTransitionDuration.current || 0);
        }
        if (addEndListener) {
          addEndListener(nodeRef.current, next);
        }
      };
      return /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionComponent, _extends$2({
        in: inProp,
        onEnter: handleEnter,
        onEntered: handleEntered,
        onEntering: handleEntering,
        onExit: handleExit,
        onExited: handleExited,
        onExiting: handleExiting,
        addEndListener: handleAddEndListener,
        nodeRef,
        timeout: timeout === "auto" ? null : timeout
      }, other, {
        children: (state, childProps) => /* @__PURE__ */ jsxRuntimeExports.jsx(CollapseRoot, _extends$2({
          as: component,
          className: clsx(classes.root, className, {
            "entered": classes.entered,
            "exited": !inProp && collapsedSize === "0px" && classes.hidden
          }[state]),
          style: _extends$2({
            [isHorizontal ? "minWidth" : "minHeight"]: collapsedSize
          }, style2),
          ownerState: _extends$2({}, ownerState, {
            state
          }),
          ref: handleRef
        }, childProps, {
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(CollapseWrapper, {
            ownerState: _extends$2({}, ownerState, {
              state
            }),
            className: classes.wrapper,
            ref: wrapperRef,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(CollapseWrapperInner, {
              ownerState: _extends$2({}, ownerState, {
                state
              }),
              className: classes.wrapperInner,
              children
            })
          })
        }))
      }));
    });
    Collapse.muiSupportAuto = true;
    const Collapse$1 = Collapse;
    function getPaperUtilityClass(slot) {
      return generateUtilityClass("MuiPaper", slot);
    }
    generateUtilityClasses("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
    const _excluded$n = ["className", "component", "elevation", "square", "variant"];
    const useUtilityClasses$j = (ownerState) => {
      const {
        square,
        elevation,
        variant,
        classes
      } = ownerState;
      const slots = {
        root: ["root", variant, !square && "rounded", variant === "elevation" && `elevation${elevation}`]
      };
      return composeClasses(slots, getPaperUtilityClass, classes);
    };
    const PaperRoot = styled$1("div", {
      name: "MuiPaper",
      slot: "Root",
      overridesResolver: (props, styles2) => {
        const {
          ownerState
        } = props;
        return [styles2.root, styles2[ownerState.variant], !ownerState.square && styles2.rounded, ownerState.variant === "elevation" && styles2[`elevation${ownerState.elevation}`]];
      }
    })(({
      theme,
      ownerState
    }) => {
      var _theme$vars$overlays;
      return _extends$2({
        backgroundColor: (theme.vars || theme).palette.background.paper,
        color: (theme.vars || theme).palette.text.primary,
        transition: theme.transitions.create("box-shadow")
      }, !ownerState.square && {
        borderRadius: theme.shape.borderRadius
      }, ownerState.variant === "outlined" && {
        border: `1px solid ${(theme.vars || theme).palette.divider}`
      }, ownerState.variant === "elevation" && _extends$2({
        boxShadow: (theme.vars || theme).shadows[ownerState.elevation]
      }, !theme.vars && theme.palette.mode === "dark" && {
        backgroundImage: `linear-gradient(${alpha("#fff", getOverlayAlpha(ownerState.elevation))}, ${alpha("#fff", getOverlayAlpha(ownerState.elevation))})`
      }, theme.vars && {
        backgroundImage: (_theme$vars$overlays = theme.vars.overlays) == null ? void 0 : _theme$vars$overlays[ownerState.elevation]
      }));
    });
    const Paper = /* @__PURE__ */ reactExports.forwardRef(function Paper2(inProps, ref) {
      const props = useThemeProps$1({
        props: inProps,
        name: "MuiPaper"
      });
      const {
        className,
        component = "div",
        elevation = 1,
        square = false,
        variant = "elevation"
      } = props, other = _objectWithoutPropertiesLoose(props, _excluded$n);
      const ownerState = _extends$2({}, props, {
        component,
        elevation,
        square,
        variant
      });
      const classes = useUtilityClasses$j(ownerState);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(PaperRoot, _extends$2({
        as: component,
        ownerState,
        className: clsx(classes.root, className),
        ref
      }, other));
    });
    const Paper$1 = Paper;
    const AccordionContext = /* @__PURE__ */ reactExports.createContext({});
    function getAccordionUtilityClass(slot) {
      return generateUtilityClass("MuiAccordion", slot);
    }
    const accordionClasses = generateUtilityClasses("MuiAccordion", ["root", "rounded", "expanded", "disabled", "gutters", "region"]);
    const accordionClasses$1 = accordionClasses;
    const _excluded$m = ["children", "className", "defaultExpanded", "disabled", "disableGutters", "expanded", "onChange", "square", "TransitionComponent", "TransitionProps"];
    const useUtilityClasses$i = (ownerState) => {
      const {
        classes,
        square,
        expanded,
        disabled,
        disableGutters
      } = ownerState;
      const slots = {
        root: ["root", !square && "rounded", expanded && "expanded", disabled && "disabled", !disableGutters && "gutters"],
        region: ["region"]
      };
      return composeClasses(slots, getAccordionUtilityClass, classes);
    };
    const AccordionRoot = styled$1(Paper$1, {
      name: "MuiAccordion",
      slot: "Root",
      overridesResolver: (props, styles2) => {
        const {
          ownerState
        } = props;
        return [{
          [`& .${accordionClasses$1.region}`]: styles2.region
        }, styles2.root, !ownerState.square && styles2.rounded, !ownerState.disableGutters && styles2.gutters];
      }
    })(({
      theme
    }) => {
      const transition2 = {
        duration: theme.transitions.duration.shortest
      };
      return {
        position: "relative",
        transition: theme.transitions.create(["margin"], transition2),
        overflowAnchor: "none",
        // Keep the same scrolling position
        "&::before": {
          position: "absolute",
          left: 0,
          top: -1,
          right: 0,
          height: 1,
          content: '""',
          opacity: 1,
          backgroundColor: (theme.vars || theme).palette.divider,
          transition: theme.transitions.create(["opacity", "background-color"], transition2)
        },
        "&:first-of-type": {
          "&::before": {
            display: "none"
          }
        },
        [`&.${accordionClasses$1.expanded}`]: {
          "&::before": {
            opacity: 0
          },
          "&:first-of-type": {
            marginTop: 0
          },
          "&:last-of-type": {
            marginBottom: 0
          },
          "& + &": {
            "&::before": {
              display: "none"
            }
          }
        },
        [`&.${accordionClasses$1.disabled}`]: {
          backgroundColor: (theme.vars || theme).palette.action.disabledBackground
        }
      };
    }, ({
      theme,
      ownerState
    }) => _extends$2({}, !ownerState.square && {
      borderRadius: 0,
      "&:first-of-type": {
        borderTopLeftRadius: (theme.vars || theme).shape.borderRadius,
        borderTopRightRadius: (theme.vars || theme).shape.borderRadius
      },
      "&:last-of-type": {
        borderBottomLeftRadius: (theme.vars || theme).shape.borderRadius,
        borderBottomRightRadius: (theme.vars || theme).shape.borderRadius,
        // Fix a rendering issue on Edge
        "@supports (-ms-ime-align: auto)": {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0
        }
      }
    }, !ownerState.disableGutters && {
      [`&.${accordionClasses$1.expanded}`]: {
        margin: "16px 0"
      }
    }));
    const Accordion = /* @__PURE__ */ reactExports.forwardRef(function Accordion2(inProps, ref) {
      const props = useThemeProps$1({
        props: inProps,
        name: "MuiAccordion"
      });
      const {
        children: childrenProp,
        className,
        defaultExpanded = false,
        disabled = false,
        disableGutters = false,
        expanded: expandedProp,
        onChange,
        square = false,
        TransitionComponent = Collapse$1,
        TransitionProps
      } = props, other = _objectWithoutPropertiesLoose(props, _excluded$m);
      const [expanded, setExpandedState] = useControlled({
        controlled: expandedProp,
        default: defaultExpanded,
        name: "Accordion",
        state: "expanded"
      });
      const handleChange = reactExports.useCallback((event) => {
        setExpandedState(!expanded);
        if (onChange) {
          onChange(event, !expanded);
        }
      }, [expanded, onChange, setExpandedState]);
      const [summary, ...children] = reactExports.Children.toArray(childrenProp);
      const contextValue = reactExports.useMemo(() => ({
        expanded,
        disabled,
        disableGutters,
        toggle: handleChange
      }), [expanded, disabled, disableGutters, handleChange]);
      const ownerState = _extends$2({}, props, {
        square,
        disabled,
        disableGutters,
        expanded
      });
      const classes = useUtilityClasses$i(ownerState);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionRoot, _extends$2({
        className: clsx(classes.root, className),
        ref,
        ownerState,
        square
      }, other, {
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContext.Provider, {
          value: contextValue,
          children: summary
        }), /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionComponent, _extends$2({
          in: expanded,
          timeout: "auto"
        }, TransitionProps, {
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
            "aria-labelledby": summary.props.id,
            id: summary.props["aria-controls"],
            role: "region",
            className: classes.region,
            children
          })
        }))]
      }));
    });
    const Accordion$1 = Accordion;
    function getAccordionDetailsUtilityClass(slot) {
      return generateUtilityClass("MuiAccordionDetails", slot);
    }
    generateUtilityClasses("MuiAccordionDetails", ["root"]);
    const _excluded$l = ["className"];
    const useUtilityClasses$h = (ownerState) => {
      const {
        classes
      } = ownerState;
      const slots = {
        root: ["root"]
      };
      return composeClasses(slots, getAccordionDetailsUtilityClass, classes);
    };
    const AccordionDetailsRoot = styled$1("div", {
      name: "MuiAccordionDetails",
      slot: "Root",
      overridesResolver: (props, styles2) => styles2.root
    })(({
      theme
    }) => ({
      padding: theme.spacing(1, 2, 2)
    }));
    const AccordionDetails = /* @__PURE__ */ reactExports.forwardRef(function AccordionDetails2(inProps, ref) {
      const props = useThemeProps$1({
        props: inProps,
        name: "MuiAccordionDetails"
      });
      const {
        className
      } = props, other = _objectWithoutPropertiesLoose(props, _excluded$l);
      const ownerState = props;
      const classes = useUtilityClasses$h(ownerState);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionDetailsRoot, _extends$2({
        className: clsx(classes.root, className),
        ref,
        ownerState
      }, other));
    });
    const AccordionDetails$1 = AccordionDetails;
    function getAccordionSummaryUtilityClass(slot) {
      return generateUtilityClass("MuiAccordionSummary", slot);
    }
    const accordionSummaryClasses = generateUtilityClasses("MuiAccordionSummary", ["root", "expanded", "focusVisible", "disabled", "gutters", "contentGutters", "content", "expandIconWrapper"]);
    const accordionSummaryClasses$1 = accordionSummaryClasses;
    const _excluded$k = ["children", "className", "expandIcon", "focusVisibleClassName", "onClick"];
    const useUtilityClasses$g = (ownerState) => {
      const {
        classes,
        expanded,
        disabled,
        disableGutters
      } = ownerState;
      const slots = {
        root: ["root", expanded && "expanded", disabled && "disabled", !disableGutters && "gutters"],
        focusVisible: ["focusVisible"],
        content: ["content", expanded && "expanded", !disableGutters && "contentGutters"],
        expandIconWrapper: ["expandIconWrapper", expanded && "expanded"]
      };
      return composeClasses(slots, getAccordionSummaryUtilityClass, classes);
    };
    const AccordionSummaryRoot = styled$1(ButtonBase, {
      name: "MuiAccordionSummary",
      slot: "Root",
      overridesResolver: (props, styles2) => styles2.root
    })(({
      theme,
      ownerState
    }) => {
      const transition2 = {
        duration: theme.transitions.duration.shortest
      };
      return _extends$2({
        display: "flex",
        minHeight: 48,
        padding: theme.spacing(0, 2),
        transition: theme.transitions.create(["min-height", "background-color"], transition2),
        [`&.${accordionSummaryClasses$1.focusVisible}`]: {
          backgroundColor: (theme.vars || theme).palette.action.focus
        },
        [`&.${accordionSummaryClasses$1.disabled}`]: {
          opacity: (theme.vars || theme).palette.action.disabledOpacity
        },
        [`&:hover:not(.${accordionSummaryClasses$1.disabled})`]: {
          cursor: "pointer"
        }
      }, !ownerState.disableGutters && {
        [`&.${accordionSummaryClasses$1.expanded}`]: {
          minHeight: 64
        }
      });
    });
    const AccordionSummaryContent = styled$1("div", {
      name: "MuiAccordionSummary",
      slot: "Content",
      overridesResolver: (props, styles2) => styles2.content
    })(({
      theme,
      ownerState
    }) => _extends$2({
      display: "flex",
      flexGrow: 1,
      margin: "12px 0"
    }, !ownerState.disableGutters && {
      transition: theme.transitions.create(["margin"], {
        duration: theme.transitions.duration.shortest
      }),
      [`&.${accordionSummaryClasses$1.expanded}`]: {
        margin: "20px 0"
      }
    }));
    const AccordionSummaryExpandIconWrapper = styled$1("div", {
      name: "MuiAccordionSummary",
      slot: "ExpandIconWrapper",
      overridesResolver: (props, styles2) => styles2.expandIconWrapper
    })(({
      theme
    }) => ({
      display: "flex",
      color: (theme.vars || theme).palette.action.active,
      transform: "rotate(0deg)",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest
      }),
      [`&.${accordionSummaryClasses$1.expanded}`]: {
        transform: "rotate(180deg)"
      }
    }));
    const AccordionSummary = /* @__PURE__ */ reactExports.forwardRef(function AccordionSummary2(inProps, ref) {
      const props = useThemeProps$1({
        props: inProps,
        name: "MuiAccordionSummary"
      });
      const {
        children,
        className,
        expandIcon,
        focusVisibleClassName,
        onClick
      } = props, other = _objectWithoutPropertiesLoose(props, _excluded$k);
      const {
        disabled = false,
        disableGutters,
        expanded,
        toggle
      } = reactExports.useContext(AccordionContext);
      const handleChange = (event) => {
        if (toggle) {
          toggle(event);
        }
        if (onClick) {
          onClick(event);
        }
      };
      const ownerState = _extends$2({}, props, {
        expanded,
        disabled,
        disableGutters
      });
      const classes = useUtilityClasses$g(ownerState);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionSummaryRoot, _extends$2({
        focusRipple: false,
        disableRipple: true,
        disabled,
        component: "div",
        "aria-expanded": expanded,
        className: clsx(classes.root, className),
        focusVisibleClassName: clsx(classes.focusVisible, focusVisibleClassName),
        onClick: handleChange,
        ref,
        ownerState
      }, other, {
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx(AccordionSummaryContent, {
          className: classes.content,
          ownerState,
          children
        }), expandIcon && /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionSummaryExpandIconWrapper, {
          className: classes.expandIconWrapper,
          ownerState,
          children: expandIcon
        })]
      }));
    });
    const AccordionSummary$1 = AccordionSummary;
    function getAppBarUtilityClass(slot) {
      return generateUtilityClass("MuiAppBar", slot);
    }
    generateUtilityClasses("MuiAppBar", ["root", "positionFixed", "positionAbsolute", "positionSticky", "positionStatic", "positionRelative", "colorDefault", "colorPrimary", "colorSecondary", "colorInherit", "colorTransparent", "colorError", "colorInfo", "colorSuccess", "colorWarning"]);
    const _excluded$j = ["className", "color", "enableColorOnDark", "position"];
    const useUtilityClasses$f = (ownerState) => {
      const {
        color,
        position,
        classes
      } = ownerState;
      const slots = {
        root: ["root", `color${capitalize(color)}`, `position${capitalize(position)}`]
      };
      return composeClasses(slots, getAppBarUtilityClass, classes);
    };
    const joinVars = (var1, var2) => var1 ? `${var1 == null ? void 0 : var1.replace(")", "")}, ${var2})` : var2;
    const AppBarRoot = styled$1(Paper$1, {
      name: "MuiAppBar",
      slot: "Root",
      overridesResolver: (props, styles2) => {
        const {
          ownerState
        } = props;
        return [styles2.root, styles2[`position${capitalize(ownerState.position)}`], styles2[`color${capitalize(ownerState.color)}`]];
      }
    })(({
      theme,
      ownerState
    }) => {
      const backgroundColorDefault = theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[900];
      return _extends$2({
        display: "flex",
        flexDirection: "column",
        width: "100%",
        boxSizing: "border-box",
        // Prevent padding issue with the Modal and fixed positioned AppBar.
        flexShrink: 0
      }, ownerState.position === "fixed" && {
        position: "fixed",
        zIndex: (theme.vars || theme).zIndex.appBar,
        top: 0,
        left: "auto",
        right: 0,
        "@media print": {
          // Prevent the app bar to be visible on each printed page.
          position: "absolute"
        }
      }, ownerState.position === "absolute" && {
        position: "absolute",
        zIndex: (theme.vars || theme).zIndex.appBar,
        top: 0,
        left: "auto",
        right: 0
      }, ownerState.position === "sticky" && {
        // ⚠️ sticky is not supported by IE11.
        position: "sticky",
        zIndex: (theme.vars || theme).zIndex.appBar,
        top: 0,
        left: "auto",
        right: 0
      }, ownerState.position === "static" && {
        position: "static"
      }, ownerState.position === "relative" && {
        position: "relative"
      }, !theme.vars && _extends$2({}, ownerState.color === "default" && {
        backgroundColor: backgroundColorDefault,
        color: theme.palette.getContrastText(backgroundColorDefault)
      }, ownerState.color && ownerState.color !== "default" && ownerState.color !== "inherit" && ownerState.color !== "transparent" && {
        backgroundColor: theme.palette[ownerState.color].main,
        color: theme.palette[ownerState.color].contrastText
      }, ownerState.color === "inherit" && {
        color: "inherit"
      }, theme.palette.mode === "dark" && !ownerState.enableColorOnDark && {
        backgroundColor: null,
        color: null
      }, ownerState.color === "transparent" && _extends$2({
        backgroundColor: "transparent",
        color: "inherit"
      }, theme.palette.mode === "dark" && {
        backgroundImage: "none"
      })), theme.vars && _extends$2({}, ownerState.color === "default" && {
        "--AppBar-background": ownerState.enableColorOnDark ? theme.vars.palette.AppBar.defaultBg : joinVars(theme.vars.palette.AppBar.darkBg, theme.vars.palette.AppBar.defaultBg),
        "--AppBar-color": ownerState.enableColorOnDark ? theme.vars.palette.text.primary : joinVars(theme.vars.palette.AppBar.darkColor, theme.vars.palette.text.primary)
      }, ownerState.color && !ownerState.color.match(/^(default|inherit|transparent)$/) && {
        "--AppBar-background": ownerState.enableColorOnDark ? theme.vars.palette[ownerState.color].main : joinVars(theme.vars.palette.AppBar.darkBg, theme.vars.palette[ownerState.color].main),
        "--AppBar-color": ownerState.enableColorOnDark ? theme.vars.palette[ownerState.color].contrastText : joinVars(theme.vars.palette.AppBar.darkColor, theme.vars.palette[ownerState.color].contrastText)
      }, {
        backgroundColor: "var(--AppBar-background)",
        color: ownerState.color === "inherit" ? "inherit" : "var(--AppBar-color)"
      }, ownerState.color === "transparent" && {
        backgroundImage: "none",
        backgroundColor: "transparent",
        color: "inherit"
      }));
    });
    const AppBar = /* @__PURE__ */ reactExports.forwardRef(function AppBar2(inProps, ref) {
      const props = useThemeProps$1({
        props: inProps,
        name: "MuiAppBar"
      });
      const {
        className,
        color = "primary",
        enableColorOnDark = false,
        position = "fixed"
      } = props, other = _objectWithoutPropertiesLoose(props, _excluded$j);
      const ownerState = _extends$2({}, props, {
        color,
        position,
        enableColorOnDark
      });
      const classes = useUtilityClasses$f(ownerState);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(AppBarRoot, _extends$2({
        square: true,
        component: "header",
        ownerState,
        elevation: 4,
        className: clsx(classes.root, className, position === "fixed" && "mui-fixed"),
        ref
      }, other));
    });
    const AppBar$1 = AppBar;
    function isHostComponent(element) {
      return typeof element === "string";
    }
    function appendOwnerState(elementType, otherProps, ownerState) {
      if (elementType === void 0 || isHostComponent(elementType)) {
        return otherProps;
      }
      return _extends$2({}, otherProps, {
        ownerState: _extends$2({}, otherProps.ownerState, ownerState)
      });
    }
    function extractEventHandlers(object, excludeKeys = []) {
      if (object === void 0) {
        return {};
      }
      const result = {};
      Object.keys(object).filter((prop) => prop.match(/^on[A-Z]/) && typeof object[prop] === "function" && !excludeKeys.includes(prop)).forEach((prop) => {
        result[prop] = object[prop];
      });
      return result;
    }
    function resolveComponentProps(componentProps, ownerState, slotState) {
      if (typeof componentProps === "function") {
        return componentProps(ownerState, slotState);
      }
      return componentProps;
    }
    function omitEventHandlers(object) {
      if (object === void 0) {
        return {};
      }
      const result = {};
      Object.keys(object).filter((prop) => !(prop.match(/^on[A-Z]/) && typeof object[prop] === "function")).forEach((prop) => {
        result[prop] = object[prop];
      });
      return result;
    }
    function mergeSlotProps(parameters) {
      const {
        getSlotProps,
        additionalProps,
        externalSlotProps,
        externalForwardedProps,
        className
      } = parameters;
      if (!getSlotProps) {
        const joinedClasses2 = clsx(additionalProps == null ? void 0 : additionalProps.className, className, externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className);
        const mergedStyle2 = _extends$2({}, additionalProps == null ? void 0 : additionalProps.style, externalForwardedProps == null ? void 0 : externalForwardedProps.style, externalSlotProps == null ? void 0 : externalSlotProps.style);
        const props2 = _extends$2({}, additionalProps, externalForwardedProps, externalSlotProps);
        if (joinedClasses2.length > 0) {
          props2.className = joinedClasses2;
        }
        if (Object.keys(mergedStyle2).length > 0) {
          props2.style = mergedStyle2;
        }
        return {
          props: props2,
          internalRef: void 0
        };
      }
      const eventHandlers = extractEventHandlers(_extends$2({}, externalForwardedProps, externalSlotProps));
      const componentsPropsWithoutEventHandlers = omitEventHandlers(externalSlotProps);
      const otherPropsWithoutEventHandlers = omitEventHandlers(externalForwardedProps);
      const internalSlotProps = getSlotProps(eventHandlers);
      const joinedClasses = clsx(internalSlotProps == null ? void 0 : internalSlotProps.className, additionalProps == null ? void 0 : additionalProps.className, className, externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className);
      const mergedStyle = _extends$2({}, internalSlotProps == null ? void 0 : internalSlotProps.style, additionalProps == null ? void 0 : additionalProps.style, externalForwardedProps == null ? void 0 : externalForwardedProps.style, externalSlotProps == null ? void 0 : externalSlotProps.style);
      const props = _extends$2({}, internalSlotProps, additionalProps, otherPropsWithoutEventHandlers, componentsPropsWithoutEventHandlers);
      if (joinedClasses.length > 0) {
        props.className = joinedClasses;
      }
      if (Object.keys(mergedStyle).length > 0) {
        props.style = mergedStyle;
      }
      return {
        props,
        internalRef: internalSlotProps.ref
      };
    }
    const _excluded$i = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
    function useSlotProps(parameters) {
      var _parameters$additiona;
      const {
        elementType,
        externalSlotProps,
        ownerState,
        skipResolvingSlotProps = false
      } = parameters, rest = _objectWithoutPropertiesLoose(parameters, _excluded$i);
      const resolvedComponentsProps = skipResolvingSlotProps ? {} : resolveComponentProps(externalSlotProps, ownerState);
      const {
        props: mergedProps,
        internalRef
      } = mergeSlotProps(_extends$2({}, rest, {
        externalSlotProps: resolvedComponentsProps
      }));
      const ref = useForkRef(internalRef, resolvedComponentsProps == null ? void 0 : resolvedComponentsProps.ref, (_parameters$additiona = parameters.additionalProps) == null ? void 0 : _parameters$additiona.ref);
      const props = appendOwnerState(elementType, _extends$2({}, mergedProps, {
        ref
      }), ownerState);
      return props;
    }
    const CancelIcon = createSvgIcon$1(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
      d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
    }), "Cancel");
    function getChipUtilityClass(slot) {
      return generateUtilityClass("MuiChip", slot);
    }
    const chipClasses = generateUtilityClasses("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]);
    const chipClasses$1 = chipClasses;
    const _excluded$h = ["avatar", "className", "clickable", "color", "component", "deleteIcon", "disabled", "icon", "label", "onClick", "onDelete", "onKeyDown", "onKeyUp", "size", "variant", "tabIndex", "skipFocusWhenDisabled"];
    const useUtilityClasses$e = (ownerState) => {
      const {
        classes,
        disabled,
        size,
        color,
        iconColor,
        onDelete,
        clickable,
        variant
      } = ownerState;
      const slots = {
        root: ["root", variant, disabled && "disabled", `size${capitalize(size)}`, `color${capitalize(color)}`, clickable && "clickable", clickable && `clickableColor${capitalize(color)}`, onDelete && "deletable", onDelete && `deletableColor${capitalize(color)}`, `${variant}${capitalize(color)}`],
        label: ["label", `label${capitalize(size)}`],
        avatar: ["avatar", `avatar${capitalize(size)}`, `avatarColor${capitalize(color)}`],
        icon: ["icon", `icon${capitalize(size)}`, `iconColor${capitalize(iconColor)}`],
        deleteIcon: ["deleteIcon", `deleteIcon${capitalize(size)}`, `deleteIconColor${capitalize(color)}`, `deleteIcon${capitalize(variant)}Color${capitalize(color)}`]
      };
      return composeClasses(slots, getChipUtilityClass, classes);
    };
    const ChipRoot = styled$1("div", {
      name: "MuiChip",
      slot: "Root",
      overridesResolver: (props, styles2) => {
        const {
          ownerState
        } = props;
        const {
          color,
          iconColor,
          clickable,
          onDelete,
          size,
          variant
        } = ownerState;
        return [{
          [`& .${chipClasses$1.avatar}`]: styles2.avatar
        }, {
          [`& .${chipClasses$1.avatar}`]: styles2[`avatar${capitalize(size)}`]
        }, {
          [`& .${chipClasses$1.avatar}`]: styles2[`avatarColor${capitalize(color)}`]
        }, {
          [`& .${chipClasses$1.icon}`]: styles2.icon
        }, {
          [`& .${chipClasses$1.icon}`]: styles2[`icon${capitalize(size)}`]
        }, {
          [`& .${chipClasses$1.icon}`]: styles2[`iconColor${capitalize(iconColor)}`]
        }, {
          [`& .${chipClasses$1.deleteIcon}`]: styles2.deleteIcon
        }, {
          [`& .${chipClasses$1.deleteIcon}`]: styles2[`deleteIcon${capitalize(size)}`]
        }, {
          [`& .${chipClasses$1.deleteIcon}`]: styles2[`deleteIconColor${capitalize(color)}`]
        }, {
          [`& .${chipClasses$1.deleteIcon}`]: styles2[`deleteIcon${capitalize(variant)}Color${capitalize(color)}`]
        }, styles2.root, styles2[`size${capitalize(size)}`], styles2[`color${capitalize(color)}`], clickable && styles2.clickable, clickable && color !== "default" && styles2[`clickableColor${capitalize(color)})`], onDelete && styles2.deletable, onDelete && color !== "default" && styles2[`deletableColor${capitalize(color)}`], styles2[variant], styles2[`${variant}${capitalize(color)}`]];
      }
    })(({
      theme,
      ownerState
    }) => {
      const textColor = theme.palette.mode === "light" ? theme.palette.grey[700] : theme.palette.grey[300];
      return _extends$2({
        maxWidth: "100%",
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.typography.pxToRem(13),
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        height: 32,
        color: (theme.vars || theme).palette.text.primary,
        backgroundColor: (theme.vars || theme).palette.action.selected,
        borderRadius: 32 / 2,
        whiteSpace: "nowrap",
        transition: theme.transitions.create(["background-color", "box-shadow"]),
        // reset cursor explicitly in case ButtonBase is used
        cursor: "unset",
        // We disable the focus ring for mouse, touch and keyboard users.
        outline: 0,
        textDecoration: "none",
        border: 0,
        // Remove `button` border
        padding: 0,
        // Remove `button` padding
        verticalAlign: "middle",
        boxSizing: "border-box",
        [`&.${chipClasses$1.disabled}`]: {
          opacity: (theme.vars || theme).palette.action.disabledOpacity,
          pointerEvents: "none"
        },
        [`& .${chipClasses$1.avatar}`]: {
          marginLeft: 5,
          marginRight: -6,
          width: 24,
          height: 24,
          color: theme.vars ? theme.vars.palette.Chip.defaultAvatarColor : textColor,
          fontSize: theme.typography.pxToRem(12)
        },
        [`& .${chipClasses$1.avatarColorPrimary}`]: {
          color: (theme.vars || theme).palette.primary.contrastText,
          backgroundColor: (theme.vars || theme).palette.primary.dark
        },
        [`& .${chipClasses$1.avatarColorSecondary}`]: {
          color: (theme.vars || theme).palette.secondary.contrastText,
          backgroundColor: (theme.vars || theme).palette.secondary.dark
        },
        [`& .${chipClasses$1.avatarSmall}`]: {
          marginLeft: 4,
          marginRight: -4,
          width: 18,
          height: 18,
          fontSize: theme.typography.pxToRem(10)
        },
        [`& .${chipClasses$1.icon}`]: _extends$2({
          marginLeft: 5,
          marginRight: -6
        }, ownerState.size === "small" && {
          fontSize: 18,
          marginLeft: 4,
          marginRight: -4
        }, ownerState.iconColor === ownerState.color && _extends$2({
          color: theme.vars ? theme.vars.palette.Chip.defaultIconColor : textColor
        }, ownerState.color !== "default" && {
          color: "inherit"
        })),
        [`& .${chipClasses$1.deleteIcon}`]: _extends$2({
          WebkitTapHighlightColor: "transparent",
          color: theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / 0.26)` : alpha(theme.palette.text.primary, 0.26),
          fontSize: 22,
          cursor: "pointer",
          margin: "0 5px 0 -6px",
          "&:hover": {
            color: theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / 0.4)` : alpha(theme.palette.text.primary, 0.4)
          }
        }, ownerState.size === "small" && {
          fontSize: 16,
          marginRight: 4,
          marginLeft: -4
        }, ownerState.color !== "default" && {
          color: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].contrastTextChannel} / 0.7)` : alpha(theme.palette[ownerState.color].contrastText, 0.7),
          "&:hover, &:active": {
            color: (theme.vars || theme).palette[ownerState.color].contrastText
          }
        })
      }, ownerState.size === "small" && {
        height: 24
      }, ownerState.color !== "default" && {
        backgroundColor: (theme.vars || theme).palette[ownerState.color].main,
        color: (theme.vars || theme).palette[ownerState.color].contrastText
      }, ownerState.onDelete && {
        [`&.${chipClasses$1.focusVisible}`]: {
          backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.selectedChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : alpha(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
        }
      }, ownerState.onDelete && ownerState.color !== "default" && {
        [`&.${chipClasses$1.focusVisible}`]: {
          backgroundColor: (theme.vars || theme).palette[ownerState.color].dark
        }
      });
    }, ({
      theme,
      ownerState
    }) => _extends$2({}, ownerState.clickable && {
      userSelect: "none",
      WebkitTapHighlightColor: "transparent",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.selectedChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : alpha(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity)
      },
      [`&.${chipClasses$1.focusVisible}`]: {
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.selectedChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : alpha(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
      },
      "&:active": {
        boxShadow: (theme.vars || theme).shadows[1]
      }
    }, ownerState.clickable && ownerState.color !== "default" && {
      [`&:hover, &.${chipClasses$1.focusVisible}`]: {
        backgroundColor: (theme.vars || theme).palette[ownerState.color].dark
      }
    }), ({
      theme,
      ownerState
    }) => _extends$2({}, ownerState.variant === "outlined" && {
      backgroundColor: "transparent",
      border: theme.vars ? `1px solid ${theme.vars.palette.Chip.defaultBorder}` : `1px solid ${theme.palette.mode === "light" ? theme.palette.grey[400] : theme.palette.grey[700]}`,
      [`&.${chipClasses$1.clickable}:hover`]: {
        backgroundColor: (theme.vars || theme).palette.action.hover
      },
      [`&.${chipClasses$1.focusVisible}`]: {
        backgroundColor: (theme.vars || theme).palette.action.focus
      },
      [`& .${chipClasses$1.avatar}`]: {
        marginLeft: 4
      },
      [`& .${chipClasses$1.avatarSmall}`]: {
        marginLeft: 2
      },
      [`& .${chipClasses$1.icon}`]: {
        marginLeft: 4
      },
      [`& .${chipClasses$1.iconSmall}`]: {
        marginLeft: 2
      },
      [`& .${chipClasses$1.deleteIcon}`]: {
        marginRight: 5
      },
      [`& .${chipClasses$1.deleteIconSmall}`]: {
        marginRight: 3
      }
    }, ownerState.variant === "outlined" && ownerState.color !== "default" && {
      color: (theme.vars || theme).palette[ownerState.color].main,
      border: `1px solid ${theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / 0.7)` : alpha(theme.palette[ownerState.color].main, 0.7)}`,
      [`&.${chipClasses$1.clickable}:hover`]: {
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity)
      },
      [`&.${chipClasses$1.focusVisible}`]: {
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.focusOpacity})` : alpha(theme.palette[ownerState.color].main, theme.palette.action.focusOpacity)
      },
      [`& .${chipClasses$1.deleteIcon}`]: {
        color: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / 0.7)` : alpha(theme.palette[ownerState.color].main, 0.7),
        "&:hover, &:active": {
          color: (theme.vars || theme).palette[ownerState.color].main
        }
      }
    }));
    const ChipLabel = styled$1("span", {
      name: "MuiChip",
      slot: "Label",
      overridesResolver: (props, styles2) => {
        const {
          ownerState
        } = props;
        const {
          size
        } = ownerState;
        return [styles2.label, styles2[`label${capitalize(size)}`]];
      }
    })(({
      ownerState
    }) => _extends$2({
      overflow: "hidden",
      textOverflow: "ellipsis",
      paddingLeft: 12,
      paddingRight: 12,
      whiteSpace: "nowrap"
    }, ownerState.variant === "outlined" && {
      paddingLeft: 11,
      paddingRight: 11
    }, ownerState.size === "small" && {
      paddingLeft: 8,
      paddingRight: 8
    }, ownerState.size === "small" && ownerState.variant === "outlined" && {
      paddingLeft: 7,
      paddingRight: 7
    }));
    function isDeleteKeyboardEvent(keyboardEvent) {
      return keyboardEvent.key === "Backspace" || keyboardEvent.key === "Delete";
    }
    const Chip = /* @__PURE__ */ reactExports.forwardRef(function Chip2(inProps, ref) {
      const props = useThemeProps$1({
        props: inProps,
        name: "MuiChip"
      });
      const {
        avatar: avatarProp,
        className,
        clickable: clickableProp,
        color = "default",
        component: ComponentProp,
        deleteIcon: deleteIconProp,
        disabled = false,
        icon: iconProp,
        label,
        onClick,
        onDelete,
        onKeyDown,
        onKeyUp,
        size = "medium",
        variant = "filled",
        tabIndex,
        skipFocusWhenDisabled = false
        // TODO v6: Rename to `focusableWhenDisabled`.
      } = props, other = _objectWithoutPropertiesLoose(props, _excluded$h);
      const chipRef = reactExports.useRef(null);
      const handleRef = useForkRef(chipRef, ref);
      const handleDeleteIconClick = (event) => {
        event.stopPropagation();
        if (onDelete) {
          onDelete(event);
        }
      };
      const handleKeyDown = (event) => {
        if (event.currentTarget === event.target && isDeleteKeyboardEvent(event)) {
          event.preventDefault();
        }
        if (onKeyDown) {
          onKeyDown(event);
        }
      };
      const handleKeyUp = (event) => {
        if (event.currentTarget === event.target) {
          if (onDelete && isDeleteKeyboardEvent(event)) {
            onDelete(event);
          } else if (event.key === "Escape" && chipRef.current) {
            chipRef.current.blur();
          }
        }
        if (onKeyUp) {
          onKeyUp(event);
        }
      };
      const clickable = clickableProp !== false && onClick ? true : clickableProp;
      const component = clickable || onDelete ? ButtonBase : ComponentProp || "div";
      const ownerState = _extends$2({}, props, {
        component,
        disabled,
        size,
        color,
        iconColor: /* @__PURE__ */ reactExports.isValidElement(iconProp) ? iconProp.props.color || color : color,
        onDelete: !!onDelete,
        clickable,
        variant
      });
      const classes = useUtilityClasses$e(ownerState);
      const moreProps = component === ButtonBase ? _extends$2({
        component: ComponentProp || "div",
        focusVisibleClassName: classes.focusVisible
      }, onDelete && {
        disableRipple: true
      }) : {};
      let deleteIcon = null;
      if (onDelete) {
        deleteIcon = deleteIconProp && /* @__PURE__ */ reactExports.isValidElement(deleteIconProp) ? /* @__PURE__ */ reactExports.cloneElement(deleteIconProp, {
          className: clsx(deleteIconProp.props.className, classes.deleteIcon),
          onClick: handleDeleteIconClick
        }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CancelIcon, {
          className: clsx(classes.deleteIcon),
          onClick: handleDeleteIconClick
        });
      }
      let avatar = null;
      if (avatarProp && /* @__PURE__ */ reactExports.isValidElement(avatarProp)) {
        avatar = /* @__PURE__ */ reactExports.cloneElement(avatarProp, {
          className: clsx(classes.avatar, avatarProp.props.className)
        });
      }
      let icon = null;
      if (iconProp && /* @__PURE__ */ reactExports.isValidElement(iconProp)) {
        icon = /* @__PURE__ */ reactExports.cloneElement(iconProp, {
          className: clsx(classes.icon, iconProp.props.className)
        });
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(ChipRoot, _extends$2({
        as: component,
        className: clsx(classes.root, className),
        disabled: clickable && disabled ? true : void 0,
        onClick,
        onKeyDown: handleKeyDown,
        onKeyUp: handleKeyUp,
        ref: handleRef,
        tabIndex: skipFocusWhenDisabled && disabled ? -1 : tabIndex,
        ownerState
      }, moreProps, other, {
        children: [avatar || icon, /* @__PURE__ */ jsxRuntimeExports.jsx(ChipLabel, {
          className: clsx(classes.label),
          ownerState,
          children: label
        }), deleteIcon]
      }));
    });
    const Chip$1 = Chip;
    function formControlState({
      props,
      states,
      muiFormControl
    }) {
      return states.reduce((acc, state) => {
        acc[state] = props[state];
        if (muiFormControl) {
          if (typeof props[state] === "undefined") {
            acc[state] = muiFormControl[state];
          }
        }
        return acc;
      }, {});
    }
    const FormControlContext = /* @__PURE__ */ reactExports.createContext(void 0);
    const FormControlContext$1 = FormControlContext;
    function useFormControl() {
      return reactExports.useContext(FormControlContext$1);
    }
    function getBottomNavigationUtilityClass(slot) {
      return generateUtilityClass("MuiBottomNavigation", slot);
    }
    generateUtilityClasses("MuiBottomNavigation", ["root"]);
    const _excluded$g = ["children", "className", "component", "onChange", "showLabels", "value"];
    const useUtilityClasses$d = (ownerState) => {
      const {
        classes
      } = ownerState;
      const slots = {
        root: ["root"]
      };
      return composeClasses(slots, getBottomNavigationUtilityClass, classes);
    };
    const BottomNavigationRoot = styled$1("div", {
      name: "MuiBottomNavigation",
      slot: "Root",
      overridesResolver: (props, styles2) => styles2.root
    })(({
      theme
    }) => ({
      display: "flex",
      justifyContent: "center",
      height: 56,
      backgroundColor: (theme.vars || theme).palette.background.paper
    }));
    const BottomNavigation = /* @__PURE__ */ reactExports.forwardRef(function BottomNavigation2(inProps, ref) {
      const props = useThemeProps$1({
        props: inProps,
        name: "MuiBottomNavigation"
      });
      const {
        children,
        className,
        component = "div",
        onChange,
        showLabels = false,
        value
      } = props, other = _objectWithoutPropertiesLoose(props, _excluded$g);
      const ownerState = _extends$2({}, props, {
        component,
        showLabels
      });
      const classes = useUtilityClasses$d(ownerState);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(BottomNavigationRoot, _extends$2({
        as: component,
        className: clsx(classes.root, className),
        ref,
        ownerState
      }, other, {
        children: reactExports.Children.map(children, (child, childIndex) => {
          if (!/* @__PURE__ */ reactExports.isValidElement(child)) {
            return null;
          }
          const childValue = child.props.value === void 0 ? childIndex : child.props.value;
          return /* @__PURE__ */ reactExports.cloneElement(child, {
            selected: childValue === value,
            showLabel: child.props.showLabel !== void 0 ? child.props.showLabel : showLabels,
            value: childValue,
            onChange
          });
        })
      }));
    });
    const BottomNavigation$1 = BottomNavigation;
    function getBottomNavigationActionUtilityClass(slot) {
      return generateUtilityClass("MuiBottomNavigationAction", slot);
    }
    const bottomNavigationActionClasses = generateUtilityClasses("MuiBottomNavigationAction", ["root", "iconOnly", "selected", "label"]);
    const _excluded$f = ["className", "icon", "label", "onChange", "onClick", "selected", "showLabel", "value"];
    const useUtilityClasses$c = (ownerState) => {
      const {
        classes,
        showLabel,
        selected
      } = ownerState;
      const slots = {
        root: ["root", !showLabel && !selected && "iconOnly", selected && "selected"],
        label: ["label", !showLabel && !selected && "iconOnly", selected && "selected"]
      };
      return composeClasses(slots, getBottomNavigationActionUtilityClass, classes);
    };
    const BottomNavigationActionRoot = styled$1(ButtonBase, {
      name: "MuiBottomNavigationAction",
      slot: "Root",
      overridesResolver: (props, styles2) => {
        const {
          ownerState
        } = props;
        return [styles2.root, !ownerState.showLabel && !ownerState.selected && styles2.iconOnly];
      }
    })(({
      theme,
      ownerState
    }) => _extends$2({
      transition: theme.transitions.create(["color", "padding-top"], {
        duration: theme.transitions.duration.short
      }),
      padding: "0px 12px",
      minWidth: 80,
      maxWidth: 168,
      color: (theme.vars || theme).palette.text.secondary,
      flexDirection: "column",
      flex: "1"
    }, !ownerState.showLabel && !ownerState.selected && {
      paddingTop: 14
    }, !ownerState.showLabel && !ownerState.selected && !ownerState.label && {
      paddingTop: 0
    }, {
      [`&.${bottomNavigationActionClasses.selected}`]: {
        color: (theme.vars || theme).palette.primary.main
      }
    }));
    const BottomNavigationActionLabel = styled$1("span", {
      name: "MuiBottomNavigationAction",
      slot: "Label",
      overridesResolver: (props, styles2) => styles2.label
    })(({
      theme,
      ownerState
    }) => _extends$2({
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(12),
      opacity: 1,
      transition: "font-size 0.2s, opacity 0.2s",
      transitionDelay: "0.1s"
    }, !ownerState.showLabel && !ownerState.selected && {
      opacity: 0,
      transitionDelay: "0s"
    }, {
      [`&.${bottomNavigationActionClasses.selected}`]: {
        fontSize: theme.typography.pxToRem(14)
      }
    }));
    const BottomNavigationAction = /* @__PURE__ */ reactExports.forwardRef(function BottomNavigationAction2(inProps, ref) {
      const props = useThemeProps$1({
        props: inProps,
        name: "MuiBottomNavigationAction"
      });
      const {
        className,
        icon,
        label,
        onChange,
        onClick,
        value
      } = props, other = _objectWithoutPropertiesLoose(props, _excluded$f);
      const ownerState = props;
      const classes = useUtilityClasses$c(ownerState);
      const handleChange = (event) => {
        if (onChange) {
          onChange(event, value);
        }
        if (onClick) {
          onClick(event);
        }
      };
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(BottomNavigationActionRoot, _extends$2({
        ref,
        className: clsx(classes.root, className),
        focusRipple: true,
        onClick: handleChange,
        ownerState
      }, other, {
        children: [icon, /* @__PURE__ */ jsxRuntimeExports.jsx(BottomNavigationActionLabel, {
          className: classes.label,
          ownerState,
          children: label
        })]
      }));
    });
    const BottomNavigationAction$1 = BottomNavigationAction;
    function getSwitchBaseUtilityClass(slot) {
      return generateUtilityClass("PrivateSwitchBase", slot);
    }
    generateUtilityClasses("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
    const _excluded$e = ["autoFocus", "checked", "checkedIcon", "className", "defaultChecked", "disabled", "disableFocusRipple", "edge", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "tabIndex", "type", "value"];
    const useUtilityClasses$b = (ownerState) => {
      const {
        classes,
        checked,
        disabled,
        edge
      } = ownerState;
      const slots = {
        root: ["root", checked && "checked", disabled && "disabled", edge && `edge${capitalize(edge)}`],
        input: ["input"]
      };
      return composeClasses(slots, getSwitchBaseUtilityClass, classes);
    };
    const SwitchBaseRoot = styled$1(ButtonBase)(({
      ownerState
    }) => _extends$2({
      padding: 9,
      borderRadius: "50%"
    }, ownerState.edge === "start" && {
      marginLeft: ownerState.size === "small" ? -3 : -12
    }, ownerState.edge === "end" && {
      marginRight: ownerState.size === "small" ? -3 : -12
    }));
    const SwitchBaseInput = styled$1("input", {
      shouldForwardProp: rootShouldForwardProp
    })({
      cursor: "inherit",
      position: "absolute",
      opacity: 0,
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      margin: 0,
      padding: 0,
      zIndex: 1
    });
    const SwitchBase = /* @__PURE__ */ reactExports.forwardRef(function SwitchBase2(props, ref) {
      const {
        autoFocus,
        checked: checkedProp,
        checkedIcon,
        className,
        defaultChecked,
        disabled: disabledProp,
        disableFocusRipple = false,
        edge = false,
        icon,
        id,
        inputProps,
        inputRef,
        name,
        onBlur,
        onChange,
        onFocus,
        readOnly,
        required = false,
        tabIndex,
        type,
        value
      } = props, other = _objectWithoutPropertiesLoose(props, _excluded$e);
      const [checked, setCheckedState] = useControlled({
        controlled: checkedProp,
        default: Boolean(defaultChecked),
        name: "SwitchBase",
        state: "checked"
      });
      const muiFormControl = useFormControl();
      const handleFocus = (event) => {
        if (onFocus) {
          onFocus(event);
        }
        if (muiFormControl && muiFormControl.onFocus) {
          muiFormControl.onFocus(event);
        }
      };
      const handleBlur = (event) => {
        if (onBlur) {
          onBlur(event);
        }
        if (muiFormControl && muiFormControl.onBlur) {
          muiFormControl.onBlur(event);
        }
      };
      const handleInputChange = (event) => {
        if (event.nativeEvent.defaultPrevented) {
          return;
        }
        const newChecked = event.target.checked;
        setCheckedState(newChecked);
        if (onChange) {
          onChange(event, newChecked);
        }
      };
      let disabled = disabledProp;
      if (muiFormControl) {
        if (typeof disabled === "undefined") {
          disabled = muiFormControl.disabled;
        }
      }
      const hasLabelFor = type === "checkbox" || type === "radio";
      const ownerState = _extends$2({}, props, {
        checked,
        disabled,
        disableFocusRipple,
        edge
      });
      const classes = useUtilityClasses$b(ownerState);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(SwitchBaseRoot, _extends$2({
        component: "span",
        className: clsx(classes.root, className),
        centerRipple: true,
        focusRipple: !disableFocusRipple,
        disabled,
        tabIndex: null,
        role: void 0,
        onFocus: handleFocus,
        onBlur: handleBlur,
        ownerState,
        ref
      }, other, {
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx(SwitchBaseInput, _extends$2({
          autoFocus,
          checked: checkedProp,
          defaultChecked,
          className: classes.input,
          disabled,
          id: hasLabelFor ? id : void 0,
          name,
          onChange: handleInputChange,
          readOnly,
          ref: inputRef,
          required,
          ownerState,
          tabIndex,
          type
        }, type === "checkbox" && value === void 0 ? {} : {
          value
        }, inputProps)), checked ? checkedIcon : icon]
      }));
    });
    const SwitchBase$1 = SwitchBase;
    function getCircularProgressUtilityClass(slot) {
      return generateUtilityClass("MuiCircularProgress", slot);
    }
    generateUtilityClasses("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
    const _excluded$d = ["className", "color", "disableShrink", "size", "style", "thickness", "value", "variant"];
    let _$1 = (t2) => t2, _t$1, _t2$1, _t3$1, _t4$1;
    const SIZE = 44;
    const circularRotateKeyframe = keyframes(_t$1 || (_t$1 = _$1`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`));
    const circularDashKeyframe = keyframes(_t2$1 || (_t2$1 = _$1`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`));
    const useUtilityClasses$a = (ownerState) => {
      const {
        classes,
        variant,
        color,
        disableShrink
      } = ownerState;
      const slots = {
        root: ["root", variant, `color${capitalize(color)}`],
        svg: ["svg"],
        circle: ["circle", `circle${capitalize(variant)}`, disableShrink && "circleDisableShrink"]
      };
      return composeClasses(slots, getCircularProgressUtilityClass, classes);
    };
    const CircularProgressRoot = styled$1("span", {
      name: "MuiCircularProgress",
      slot: "Root",
      overridesResolver: (props, styles2) => {
        const {
          ownerState
        } = props;
        return [styles2.root, styles2[ownerState.variant], styles2[`color${capitalize(ownerState.color)}`]];
      }
    })(({
      ownerState,
      theme
    }) => _extends$2({
      display: "inline-block"
    }, ownerState.variant === "determinate" && {
      transition: theme.transitions.create("transform")
    }, ownerState.color !== "inherit" && {
      color: (theme.vars || theme).palette[ownerState.color].main
    }), ({
      ownerState
    }) => ownerState.variant === "indeterminate" && css$1(_t3$1 || (_t3$1 = _$1`
      animation: ${0} 1.4s linear infinite;
    `), circularRotateKeyframe));
    const CircularProgressSVG = styled$1("svg", {
      name: "MuiCircularProgress",
      slot: "Svg",
      overridesResolver: (props, styles2) => styles2.svg
    })({
      display: "block"
      // Keeps the progress centered
    });
    const CircularProgressCircle = styled$1("circle", {
      name: "MuiCircularProgress",
      slot: "Circle",
      overridesResolver: (props, styles2) => {
        const {
          ownerState
        } = props;
        return [styles2.circle, styles2[`circle${capitalize(ownerState.variant)}`], ownerState.disableShrink && styles2.circleDisableShrink];
      }
    })(({
      ownerState,
      theme
    }) => _extends$2({
      stroke: "currentColor"
    }, ownerState.variant === "determinate" && {
      transition: theme.transitions.create("stroke-dashoffset")
    }, ownerState.variant === "indeterminate" && {
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: "80px, 200px",
      strokeDashoffset: 0
      // Add the unit to fix a Edge 16 and below bug.
    }), ({
      ownerState
    }) => ownerState.variant === "indeterminate" && !ownerState.disableShrink && css$1(_t4$1 || (_t4$1 = _$1`
      animation: ${0} 1.4s ease-in-out infinite;
    `), circularDashKeyframe));
    const CircularProgress = /* @__PURE__ */ reactExports.forwardRef(function CircularProgress2(inProps, ref) {
      const props = useThemeProps$1({
        props: inProps,
        name: "MuiCircularProgress"
      });
      const {
        className,
        color = "primary",
        disableShrink = false,
        size = 40,
        style: style2,
        thickness = 3.6,
        value = 0,
        variant = "indeterminate"
      } = props, other = _objectWithoutPropertiesLoose(props, _excluded$d);
      const ownerState = _extends$2({}, props, {
        color,
        disableShrink,
        size,
        thickness,
        value,
        variant
      });
      const classes = useUtilityClasses$a(ownerState);
      const circleStyle = {};
      const rootStyle = {};
      const rootProps = {};
      if (variant === "determinate") {
        const circumference = 2 * Math.PI * ((SIZE - thickness) / 2);
        circleStyle.strokeDasharray = circumference.toFixed(3);
        rootProps["aria-valuenow"] = Math.round(value);
        circleStyle.strokeDashoffset = `${((100 - value) / 100 * circumference).toFixed(3)}px`;
        rootStyle.transform = "rotate(-90deg)";
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgressRoot, _extends$2({
        className: clsx(classes.root, className),
        style: _extends$2({
          width: size,
          height: size
        }, rootStyle, style2),
        ownerState,
        ref,
        role: "progressbar"
      }, rootProps, other, {
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgressSVG, {
          className: classes.svg,
          ownerState,
          viewBox: `${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgressCircle, {
            className: classes.circle,
            style: circleStyle,
            ownerState,
            cx: SIZE,
            cy: SIZE,
            r: (SIZE - thickness) / 2,
            fill: "none",
            strokeWidth: thickness
          })
        })
      }));
    });
    const CircularProgress$1 = CircularProgress;
    function getDividerUtilityClass(slot) {
      return generateUtilityClass("MuiDivider", slot);
    }
    generateUtilityClasses("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]);
    const _excluded$c = ["absolute", "children", "className", "component", "flexItem", "light", "orientation", "role", "textAlign", "variant"];
    const useUtilityClasses$9 = (ownerState) => {
      const {
        absolute,
        children,
        classes,
        flexItem,
        light,
        orientation,
        textAlign,
        variant
      } = ownerState;
      const slots = {
        root: ["root", absolute && "absolute", variant, light && "light", orientation === "vertical" && "vertical", flexItem && "flexItem", children && "withChildren", children && orientation === "vertical" && "withChildrenVertical", textAlign === "right" && orientation !== "vertical" && "textAlignRight", textAlign === "left" && orientation !== "vertical" && "textAlignLeft"],
        wrapper: ["wrapper", orientation === "vertical" && "wrapperVertical"]
      };
      return composeClasses(slots, getDividerUtilityClass, classes);
    };
    const DividerRoot = styled$1("div", {
      name: "MuiDivider",
      slot: "Root",
      overridesResolver: (props, styles2) => {
        const {
          ownerState
        } = props;
        return [styles2.root, ownerState.absolute && styles2.absolute, styles2[ownerState.variant], ownerState.light && styles2.light, ownerState.orientation === "vertical" && styles2.vertical, ownerState.flexItem && styles2.flexItem, ownerState.children && styles2.withChildren, ownerState.children && ownerState.orientation === "vertical" && styles2.withChildrenVertical, ownerState.textAlign === "right" && ownerState.orientation !== "vertical" && styles2.textAlignRight, ownerState.textAlign === "left" && ownerState.orientation !== "vertical" && styles2.textAlignLeft];
      }
    })(({
      theme,
      ownerState
    }) => _extends$2({
      margin: 0,
      // Reset browser default style.
      flexShrink: 0,
      borderWidth: 0,
      borderStyle: "solid",
      borderColor: (theme.vars || theme).palette.divider,
      borderBottomWidth: "thin"
    }, ownerState.absolute && {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%"
    }, ownerState.light && {
      borderColor: theme.vars ? `rgba(${theme.vars.palette.dividerChannel} / 0.08)` : alpha(theme.palette.divider, 0.08)
    }, ownerState.variant === "inset" && {
      marginLeft: 72
    }, ownerState.variant === "middle" && ownerState.orientation === "horizontal" && {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2)
    }, ownerState.variant === "middle" && ownerState.orientation === "vertical" && {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    }, ownerState.orientation === "vertical" && {
      height: "100%",
      borderBottomWidth: 0,
      borderRightWidth: "thin"
    }, ownerState.flexItem && {
      alignSelf: "stretch",
      height: "auto"
    }), ({
      ownerState
    }) => _extends$2({}, ownerState.children && {
      display: "flex",
      whiteSpace: "nowrap",
      textAlign: "center",
      border: 0,
      "&::before, &::after": {
        content: '""',
        alignSelf: "center"
      }
    }), ({
      theme,
      ownerState
    }) => _extends$2({}, ownerState.children && ownerState.orientation !== "vertical" && {
      "&::before, &::after": {
        width: "100%",
        borderTop: `thin solid ${(theme.vars || theme).palette.divider}`
      }
    }), ({
      theme,
      ownerState
    }) => _extends$2({}, ownerState.children && ownerState.orientation === "vertical" && {
      flexDirection: "column",
      "&::before, &::after": {
        height: "100%",
        borderLeft: `thin solid ${(theme.vars || theme).palette.divider}`
      }
    }), ({
      ownerState
    }) => _extends$2({}, ownerState.textAlign === "right" && ownerState.orientation !== "vertical" && {
      "&::before": {
        width: "90%"
      },
      "&::after": {
        width: "10%"
      }
    }, ownerState.textAlign === "left" && ownerState.orientation !== "vertical" && {
      "&::before": {
        width: "10%"
      },
      "&::after": {
        width: "90%"
      }
    }));
    const DividerWrapper = styled$1("span", {
      name: "MuiDivider",
      slot: "Wrapper",
      overridesResolver: (props, styles2) => {
        const {
          ownerState
        } = props;
        return [styles2.wrapper, ownerState.orientation === "vertical" && styles2.wrapperVertical];
      }
    })(({
      theme,
      ownerState
    }) => _extends$2({
      display: "inline-block",
      paddingLeft: `calc(${theme.spacing(1)} * 1.2)`,
      paddingRight: `calc(${theme.spacing(1)} * 1.2)`
    }, ownerState.orientation === "vertical" && {
      paddingTop: `calc(${theme.spacing(1)} * 1.2)`,
      paddingBottom: `calc(${theme.spacing(1)} * 1.2)`
    }));
    const Divider = /* @__PURE__ */ reactExports.forwardRef(function Divider2(inProps, ref) {
      const props = useThemeProps$1({
        props: inProps,
        name: "MuiDivider"
      });
      const {
        absolute = false,
        children,
        className,
        component = children ? "div" : "hr",
        flexItem = false,
        light = false,
        orientation = "horizontal",
        role = component !== "hr" ? "separator" : void 0,
        textAlign = "center",
        variant = "fullWidth"
      } = props, other = _objectWithoutPropertiesLoose(props, _excluded$c);
      const ownerState = _extends$2({}, props, {
        absolute,
        component,
        flexItem,
        light,
        orientation,
        role,
        textAlign,
        variant
      });
      const classes = useUtilityClasses$9(ownerState);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(DividerRoot, _extends$2({
        as: component,
        className: clsx(classes.root, className),
        role,
        ref,
        ownerState
      }, other, {
        children: children ? /* @__PURE__ */ jsxRuntimeExports.jsx(DividerWrapper, {
          className: classes.wrapper,
          ownerState,
          children
        }) : null
      }));
    });
    Divider.muiSkipListHighlight = true;
    const Divider$1 = Divider;
    const Stack = createStack({
      createStyledComponent: styled$1("div", {
        name: "MuiStack",
        slot: "Root",
        overridesResolver: (props, styles2) => styles2.root
      }),
      useThemeProps: (inProps) => useThemeProps$1({
        props: inProps,
        name: "MuiStack"
      })
    });
    const Stack$1 = Stack;
    function getFormControlLabelUtilityClasses(slot) {
      return generateUtilityClass("MuiFormControlLabel", slot);
    }
    const formControlLabelClasses = generateUtilityClasses("MuiFormControlLabel", ["root", "labelPlacementStart", "labelPlacementTop", "labelPlacementBottom", "disabled", "label", "error", "required", "asterisk"]);
    const formControlLabelClasses$1 = formControlLabelClasses;
    const _excluded$b = ["checked", "className", "componentsProps", "control", "disabled", "disableTypography", "inputRef", "label", "labelPlacement", "name", "onChange", "required", "slotProps", "value"];
    const useUtilityClasses$8 = (ownerState) => {
      const {
        classes,
        disabled,
        labelPlacement,
        error,
        required
      } = ownerState;
      const slots = {
        root: ["root", disabled && "disabled", `labelPlacement${capitalize(labelPlacement)}`, error && "error", required && "required"],
        label: ["label", disabled && "disabled"],
        asterisk: ["asterisk", error && "error"]
      };
      return composeClasses(slots, getFormControlLabelUtilityClasses, classes);
    };
    const FormControlLabelRoot = styled$1("label", {
      name: "MuiFormControlLabel",
      slot: "Root",
      overridesResolver: (props, styles2) => {
        const {
          ownerState
        } = props;
        return [{
          [`& .${formControlLabelClasses$1.label}`]: styles2.label
        }, styles2.root, styles2[`labelPlacement${capitalize(ownerState.labelPlacement)}`]];
      }
    })(({
      theme,
      ownerState
    }) => _extends$2({
      display: "inline-flex",
      alignItems: "center",
      cursor: "pointer",
      // For correct alignment with the text.
      verticalAlign: "middle",
      WebkitTapHighlightColor: "transparent",
      marginLeft: -11,
      marginRight: 16,
      // used for row presentation of radio/checkbox
      [`&.${formControlLabelClasses$1.disabled}`]: {
        cursor: "default"
      }
    }, ownerState.labelPlacement === "start" && {
      flexDirection: "row-reverse",
      marginLeft: 16,
      // used for row presentation of radio/checkbox
      marginRight: -11
    }, ownerState.labelPlacement === "top" && {
      flexDirection: "column-reverse",
      marginLeft: 16
    }, ownerState.labelPlacement === "bottom" && {
      flexDirection: "column",
      marginLeft: 16
    }, {
      [`& .${formControlLabelClasses$1.label}`]: {
        [`&.${formControlLabelClasses$1.disabled}`]: {
          color: (theme.vars || theme).palette.text.disabled
        }
      }
    }));
    const AsteriskComponent = styled$1("span", {
      name: "MuiFormControlLabel",
      slot: "Asterisk",
      overridesResolver: (props, styles2) => styles2.asterisk
    })(({
      theme
    }) => ({
      [`&.${formControlLabelClasses$1.error}`]: {
        color: (theme.vars || theme).palette.error.main
      }
    }));
    const FormControlLabel = /* @__PURE__ */ reactExports.forwardRef(function FormControlLabel2(inProps, ref) {
      var _ref, _slotProps$typography;
      const props = useThemeProps$1({
        props: inProps,
        name: "MuiFormControlLabel"
      });
      const {
        className,
        componentsProps = {},
        control,
        disabled: disabledProp,
        disableTypography,
        label: labelProp,
        labelPlacement = "end",
        required: requiredProp,
        slotProps = {}
      } = props, other = _objectWithoutPropertiesLoose(props, _excluded$b);
      const muiFormControl = useFormControl();
      const disabled = (_ref = disabledProp != null ? disabledProp : control.props.disabled) != null ? _ref : muiFormControl == null ? void 0 : muiFormControl.disabled;
      const required = requiredProp != null ? requiredProp : control.props.required;
      const controlProps = {
        disabled,
        required
      };
      ["checked", "name", "onChange", "value", "inputRef"].forEach((key2) => {
        if (typeof control.props[key2] === "undefined" && typeof props[key2] !== "undefined") {
          controlProps[key2] = props[key2];
        }
      });
      const fcs = formControlState({
        props,
        muiFormControl,
        states: ["error"]
      });
      const ownerState = _extends$2({}, props, {
        disabled,
        labelPlacement,
        required,
        error: fcs.error
      });
      const classes = useUtilityClasses$8(ownerState);
      const typographySlotProps = (_slotProps$typography = slotProps.typography) != null ? _slotProps$typography : componentsProps.typography;
      let label = labelProp;
      if (label != null && label.type !== Typography && !disableTypography) {
        label = /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, _extends$2({
          component: "span"
        }, typographySlotProps, {
          className: clsx(classes.label, typographySlotProps == null ? void 0 : typographySlotProps.className),
          children: label
        }));
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControlLabelRoot, _extends$2({
        className: clsx(classes.root, className),
        ownerState,
        ref
      }, other, {
        children: [/* @__PURE__ */ reactExports.cloneElement(control, controlProps), required ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack$1, {
          display: "block",
          children: [label, /* @__PURE__ */ jsxRuntimeExports.jsxs(AsteriskComponent, {
            ownerState,
            "aria-hidden": true,
            className: classes.asterisk,
            children: [" ", "*"]
          })]
        }) : label]
      }));
    });
    const FormControlLabel$1 = FormControlLabel;
    function getFormGroupUtilityClass(slot) {
      return generateUtilityClass("MuiFormGroup", slot);
    }
    generateUtilityClasses("MuiFormGroup", ["root", "row", "error"]);
    const _excluded$a = ["className", "row"];
    const useUtilityClasses$7 = (ownerState) => {
      const {
        classes,
        row,
        error
      } = ownerState;
      const slots = {
        root: ["root", row && "row", error && "error"]
      };
      return composeClasses(slots, getFormGroupUtilityClass, classes);
    };
    const FormGroupRoot = styled$1("div", {
      name: "MuiFormGroup",
      slot: "Root",
      overridesResolver: (props, styles2) => {
        const {
          ownerState
        } = props;
        return [styles2.root, ownerState.row && styles2.row];
      }
    })(({
      ownerState
    }) => _extends$2({
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap"
    }, ownerState.row && {
      flexDirection: "row"
    }));
    const FormGroup = /* @__PURE__ */ reactExports.forwardRef(function FormGroup2(inProps, ref) {
      const props = useThemeProps$1({
        props: inProps,
        name: "MuiFormGroup"
      });
      const {
        className,
        row = false
      } = props, other = _objectWithoutPropertiesLoose(props, _excluded$a);
      const muiFormControl = useFormControl();
      const fcs = formControlState({
        props,
        muiFormControl,
        states: ["error"]
      });
      const ownerState = _extends$2({}, props, {
        row,
        error: fcs.error
      });
      const classes = useUtilityClasses$7(ownerState);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(FormGroupRoot, _extends$2({
        className: clsx(classes.root, className),
        ownerState,
        ref
      }, other));
    });
    const FormGroup$1 = FormGroup;
    const GridContext = /* @__PURE__ */ reactExports.createContext();
    const GridContext$1 = GridContext;
    function getGridUtilityClass(slot) {
      return generateUtilityClass("MuiGrid", slot);
    }
    const SPACINGS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const DIRECTIONS = ["column-reverse", "column", "row-reverse", "row"];
    const WRAPS = ["nowrap", "wrap-reverse", "wrap"];
    const GRID_SIZES = ["auto", true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const gridClasses = generateUtilityClasses("MuiGrid", [
      "root",
      "container",
      "item",
      "zeroMinWidth",
      // spacings
      ...SPACINGS.map((spacing) => `spacing-xs-${spacing}`),
      // direction values
      ...DIRECTIONS.map((direction) => `direction-xs-${direction}`),
      // wrap values
      ...WRAPS.map((wrap) => `wrap-xs-${wrap}`),
      // grid sizes for all breakpoints
      ...GRID_SIZES.map((size) => `grid-xs-${size}`),
      ...GRID_SIZES.map((size) => `grid-sm-${size}`),
      ...GRID_SIZES.map((size) => `grid-md-${size}`),
      ...GRID_SIZES.map((size) => `grid-lg-${size}`),
      ...GRID_SIZES.map((size) => `grid-xl-${size}`)
    ]);
    const _excluded$9 = ["className", "columns", "columnSpacing", "component", "container", "direction", "item", "rowSpacing", "spacing", "wrap", "zeroMinWidth"];
    function getOffset(val) {
      const parse = parseFloat(val);
      return `${parse}${String(val).replace(String(parse), "") || "px"}`;
    }
    function generateGrid({
      theme,
      ownerState
    }) {
      let size;
      return theme.breakpoints.keys.reduce((globalStyles, breakpoint) => {
        let styles2 = {};
        if (ownerState[breakpoint]) {
          size = ownerState[breakpoint];
        }
        if (!size) {
          return globalStyles;
        }
        if (size === true) {
          styles2 = {
            flexBasis: 0,
            flexGrow: 1,
            maxWidth: "100%"
          };
        } else if (size === "auto") {
          styles2 = {
            flexBasis: "auto",
            flexGrow: 0,
            flexShrink: 0,
            maxWidth: "none",
            width: "auto"
          };
        } else {
          const columnsBreakpointValues = resolveBreakpointValues({
            values: ownerState.columns,
            breakpoints: theme.breakpoints.values
          });
          const columnValue = typeof columnsBreakpointValues === "object" ? columnsBreakpointValues[breakpoint] : columnsBreakpointValues;
          if (columnValue === void 0 || columnValue === null) {
            return globalStyles;
          }
          const width = `${Math.round(size / columnValue * 1e8) / 1e6}%`;
          let more = {};
          if (ownerState.container && ownerState.item && ownerState.columnSpacing !== 0) {
            const themeSpacing = theme.spacing(ownerState.columnSpacing);
            if (themeSpacing !== "0px") {
              const fullWidth = `calc(${width} + ${getOffset(themeSpacing)})`;
              more = {
                flexBasis: fullWidth,
                maxWidth: fullWidth
              };
            }
          }
          styles2 = _extends$2({
            flexBasis: width,
            flexGrow: 0,
            maxWidth: width
          }, more);
        }
        if (theme.breakpoints.values[breakpoint] === 0) {
          Object.assign(globalStyles, styles2);
        } else {
          globalStyles[theme.breakpoints.up(breakpoint)] = styles2;
        }
        return globalStyles;
      }, {});
    }
    function generateDirection({
      theme,
      ownerState
    }) {
      const directionValues = resolveBreakpointValues({
        values: ownerState.direction,
        breakpoints: theme.breakpoints.values
      });
      return handleBreakpoints({
        theme
      }, directionValues, (propValue) => {
        const output = {
          flexDirection: propValue
        };
        if (propValue.indexOf("column") === 0) {
          output[`& > .${gridClasses.item}`] = {
            maxWidth: "none"
          };
        }
        return output;
      });
    }
    function extractZeroValueBreakpointKeys({
      breakpoints,
      values
    }) {
      let nonZeroKey = "";
      Object.keys(values).forEach((key2) => {
        if (nonZeroKey !== "") {
          return;
        }
        if (values[key2] !== 0) {
          nonZeroKey = key2;
        }
      });
      const sortedBreakpointKeysByValue = Object.keys(breakpoints).sort((a, b2) => {
        return breakpoints[a] - breakpoints[b2];
      });
      return sortedBreakpointKeysByValue.slice(0, sortedBreakpointKeysByValue.indexOf(nonZeroKey));
    }
    function generateRowGap({
      theme,
      ownerState
    }) {
      const {
        container,
        rowSpacing
      } = ownerState;
      let styles2 = {};
      if (container && rowSpacing !== 0) {
        const rowSpacingValues = resolveBreakpointValues({
          values: rowSpacing,
          breakpoints: theme.breakpoints.values
        });
        let zeroValueBreakpointKeys;
        if (typeof rowSpacingValues === "object") {
          zeroValueBreakpointKeys = extractZeroValueBreakpointKeys({
            breakpoints: theme.breakpoints.values,
            values: rowSpacingValues
          });
        }
        styles2 = handleBreakpoints({
          theme
        }, rowSpacingValues, (propValue, breakpoint) => {
          var _zeroValueBreakpointK;
          const themeSpacing = theme.spacing(propValue);
          if (themeSpacing !== "0px") {
            return {
              marginTop: `-${getOffset(themeSpacing)}`,
              [`& > .${gridClasses.item}`]: {
                paddingTop: getOffset(themeSpacing)
              }
            };
          }
          if ((_zeroValueBreakpointK = zeroValueBreakpointKeys) != null && _zeroValueBreakpointK.includes(breakpoint)) {
            return {};
          }
          return {
            marginTop: 0,
            [`& > .${gridClasses.item}`]: {
              paddingTop: 0
            }
          };
        });
      }
      return styles2;
    }
    function generateColumnGap({
      theme,
      ownerState
    }) {
      const {
        container,
        columnSpacing
      } = ownerState;
      let styles2 = {};
      if (container && columnSpacing !== 0) {
        const columnSpacingValues = resolveBreakpointValues({
          values: columnSpacing,
          breakpoints: theme.breakpoints.values
        });
        let zeroValueBreakpointKeys;
        if (typeof columnSpacingValues === "object") {
          zeroValueBreakpointKeys = extractZeroValueBreakpointKeys({
            breakpoints: theme.breakpoints.values,
            values: columnSpacingValues
          });
        }
        styles2 = handleBreakpoints({
          theme
        }, columnSpacingValues, (propValue, breakpoint) => {
          var _zeroValueBreakpointK2;
          const themeSpacing = theme.spacing(propValue);
          if (themeSpacing !== "0px") {
            return {
              width: `calc(100% + ${getOffset(themeSpacing)})`,
              marginLeft: `-${getOffset(themeSpacing)}`,
              [`& > .${gridClasses.item}`]: {
                paddingLeft: getOffset(themeSpacing)
              }
            };
          }
          if ((_zeroValueBreakpointK2 = zeroValueBreakpointKeys) != null && _zeroValueBreakpointK2.includes(breakpoint)) {
            return {};
          }
          return {
            width: "100%",
            marginLeft: 0,
            [`& > .${gridClasses.item}`]: {
              paddingLeft: 0
            }
          };
        });
      }
      return styles2;
    }
    function resolveSpacingStyles(spacing, breakpoints, styles2 = {}) {
      if (!spacing || spacing <= 0) {
        return [];
      }
      if (typeof spacing === "string" && !Number.isNaN(Number(spacing)) || typeof spacing === "number") {
        return [styles2[`spacing-xs-${String(spacing)}`]];
      }
      const spacingStyles = [];
      breakpoints.forEach((breakpoint) => {
        const value = spacing[breakpoint];
        if (Number(value) > 0) {
          spacingStyles.push(styles2[`spacing-${breakpoint}-${String(value)}`]);
        }
      });
      return spacingStyles;
    }
    const GridRoot = styled$1("div", {
      name: "MuiGrid",
      slot: "Root",
      overridesResolver: (props, styles2) => {
        const {
          ownerState
        } = props;
        const {
          container,
          direction,
          item,
          spacing,
          wrap,
          zeroMinWidth,
          breakpoints
        } = ownerState;
        let spacingStyles = [];
        if (container) {
          spacingStyles = resolveSpacingStyles(spacing, breakpoints, styles2);
        }
        const breakpointsStyles = [];
        breakpoints.forEach((breakpoint) => {
          const value = ownerState[breakpoint];
          if (value) {
            breakpointsStyles.push(styles2[`grid-${breakpoint}-${String(value)}`]);
          }
        });
        return [styles2.root, container && styles2.container, item && styles2.item, zeroMinWidth && styles2.zeroMinWidth, ...spacingStyles, direction !== "row" && styles2[`direction-xs-${String(direction)}`], wrap !== "wrap" && styles2[`wrap-xs-${String(wrap)}`], ...breakpointsStyles];
      }
    })(({
      ownerState
    }) => _extends$2({
      boxSizing: "border-box"
    }, ownerState.container && {
      display: "flex",
      flexWrap: "wrap",
      width: "100%"
    }, ownerState.item && {
      margin: 0
      // For instance, it's useful when used with a `figure` element.
    }, ownerState.zeroMinWidth && {
      minWidth: 0
    }, ownerState.wrap !== "wrap" && {
      flexWrap: ownerState.wrap
    }), generateDirection, generateRowGap, generateColumnGap, generateGrid);
    function resolveSpacingClasses(spacing, breakpoints) {
      if (!spacing || spacing <= 0) {
        return [];
      }
      if (typeof spacing === "string" && !Number.isNaN(Number(spacing)) || typeof spacing === "number") {
        return [`spacing-xs-${String(spacing)}`];
      }
      const classes = [];
      breakpoints.forEach((breakpoint) => {
        const value = spacing[breakpoint];
        if (Number(value) > 0) {
          const className = `spacing-${breakpoint}-${String(value)}`;
          classes.push(className);
        }
      });
      return classes;
    }
    const useUtilityClasses$6 = (ownerState) => {
      const {
        classes,
        container,
        direction,
        item,
        spacing,
        wrap,
        zeroMinWidth,
        breakpoints
      } = ownerState;
      let spacingClasses = [];
      if (container) {
        spacingClasses = resolveSpacingClasses(spacing, breakpoints);
      }
      const breakpointsClasses = [];
      breakpoints.forEach((breakpoint) => {
        const value = ownerState[breakpoint];
        if (value) {
          breakpointsClasses.push(`grid-${breakpoint}-${String(value)}`);
        }
      });
      const slots = {
        root: ["root", container && "container", item && "item", zeroMinWidth && "zeroMinWidth", ...spacingClasses, direction !== "row" && `direction-xs-${String(direction)}`, wrap !== "wrap" && `wrap-xs-${String(wrap)}`, ...breakpointsClasses]
      };
      return composeClasses(slots, getGridUtilityClass, classes);
    };
    const Grid = /* @__PURE__ */ reactExports.forwardRef(function Grid2(inProps, ref) {
      const themeProps = useThemeProps$1({
        props: inProps,
        name: "MuiGrid"
      });
      const {
        breakpoints
      } = useTheme$1();
      const props = extendSxProp(themeProps);
      const {
        className,
        columns: columnsProp,
        columnSpacing: columnSpacingProp,
        component = "div",
        container = false,
        direction = "row",
        item = false,
        rowSpacing: rowSpacingProp,
        spacing = 0,
        wrap = "wrap",
        zeroMinWidth = false
      } = props, other = _objectWithoutPropertiesLoose(props, _excluded$9);
      const rowSpacing = rowSpacingProp || spacing;
      const columnSpacing = columnSpacingProp || spacing;
      const columnsContext = reactExports.useContext(GridContext$1);
      const columns = container ? columnsProp || 12 : columnsContext;
      const breakpointsValues = {};
      const otherFiltered = _extends$2({}, other);
      breakpoints.keys.forEach((breakpoint) => {
        if (other[breakpoint] != null) {
          breakpointsValues[breakpoint] = other[breakpoint];
          delete otherFiltered[breakpoint];
        }
      });
      const ownerState = _extends$2({}, props, {
        columns,
        container,
        direction,
        item,
        rowSpacing,
        columnSpacing,
        wrap,
        zeroMinWidth,
        spacing
      }, breakpointsValues, {
        breakpoints: breakpoints.keys
      });
      const classes = useUtilityClasses$6(ownerState);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(GridContext$1.Provider, {
        value: columns,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(GridRoot, _extends$2({
          ownerState,
          className: clsx(classes.root, className),
          as: component,
          ref
        }, otherFiltered))
      });
    });
    const Grid$1 = Grid;
    function getLinearProgressUtilityClass(slot) {
      return generateUtilityClass("MuiLinearProgress", slot);
    }
    generateUtilityClasses("MuiLinearProgress", ["root", "colorPrimary", "colorSecondary", "determinate", "indeterminate", "buffer", "query", "dashed", "dashedColorPrimary", "dashedColorSecondary", "bar", "barColorPrimary", "barColorSecondary", "bar1Indeterminate", "bar1Determinate", "bar1Buffer", "bar2Indeterminate", "bar2Buffer"]);
    const _excluded$8 = ["className", "color", "value", "valueBuffer", "variant"];
    let _ = (t2) => t2, _t, _t2, _t3, _t4, _t5, _t6;
    const TRANSITION_DURATION = 4;
    const indeterminate1Keyframe = keyframes(_t || (_t = _`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`));
    const indeterminate2Keyframe = keyframes(_t2 || (_t2 = _`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`));
    const bufferKeyframe = keyframes(_t3 || (_t3 = _`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`));
    const useUtilityClasses$5 = (ownerState) => {
      const {
        classes,
        variant,
        color
      } = ownerState;
      const slots = {
        root: ["root", `color${capitalize(color)}`, variant],
        dashed: ["dashed", `dashedColor${capitalize(color)}`],
        bar1: ["bar", `barColor${capitalize(color)}`, (variant === "indeterminate" || variant === "query") && "bar1Indeterminate", variant === "determinate" && "bar1Determinate", variant === "buffer" && "bar1Buffer"],
        bar2: ["bar", variant !== "buffer" && `barColor${capitalize(color)}`, variant === "buffer" && `color${capitalize(color)}`, (variant === "indeterminate" || variant === "query") && "bar2Indeterminate", variant === "buffer" && "bar2Buffer"]
      };
      return composeClasses(slots, getLinearProgressUtilityClass, classes);
    };
    const getColorShade = (theme, color) => {
      if (color === "inherit") {
        return "currentColor";
      }
      if (theme.vars) {
        return theme.vars.palette.LinearProgress[`${color}Bg`];
      }
      return theme.palette.mode === "light" ? lighten(theme.palette[color].main, 0.62) : darken(theme.palette[color].main, 0.5);
    };
    const LinearProgressRoot = styled$1("span", {
      name: "MuiLinearProgress",
      slot: "Root",
      overridesResolver: (props, styles2) => {
        const {
          ownerState
        } = props;
        return [styles2.root, styles2[`color${capitalize(ownerState.color)}`], styles2[ownerState.variant]];
      }
    })(({
      ownerState,
      theme
    }) => _extends$2({
      position: "relative",
      overflow: "hidden",
      display: "block",
      height: 4,
      zIndex: 0,
      // Fix Safari's bug during composition of different paint.
      "@media print": {
        colorAdjust: "exact"
      },
      backgroundColor: getColorShade(theme, ownerState.color)
    }, ownerState.color === "inherit" && ownerState.variant !== "buffer" && {
      backgroundColor: "none",
      "&::before": {
        content: '""',
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "currentColor",
        opacity: 0.3
      }
    }, ownerState.variant === "buffer" && {
      backgroundColor: "transparent"
    }, ownerState.variant === "query" && {
      transform: "rotate(180deg)"
    }));
    const LinearProgressDashed = styled$1("span", {
      name: "MuiLinearProgress",
      slot: "Dashed",
      overridesResolver: (props, styles2) => {
        const {
          ownerState
        } = props;
        return [styles2.dashed, styles2[`dashedColor${capitalize(ownerState.color)}`]];
      }
    })(({
      ownerState,
      theme
    }) => {
      const backgroundColor = getColorShade(theme, ownerState.color);
      return _extends$2({
        position: "absolute",
        marginTop: 0,
        height: "100%",
        width: "100%"
      }, ownerState.color === "inherit" && {
        opacity: 0.3
      }, {
        backgroundImage: `radial-gradient(${backgroundColor} 0%, ${backgroundColor} 16%, transparent 42%)`,
        backgroundSize: "10px 10px",
        backgroundPosition: "0 -23px"
      });
    }, css$1(_t4 || (_t4 = _`
    animation: ${0} 3s infinite linear;
  `), bufferKeyframe));
    const LinearProgressBar1 = styled$1("span", {
      name: "MuiLinearProgress",
      slot: "Bar1",
      overridesResolver: (props, styles2) => {
        const {
          ownerState
        } = props;
        return [styles2.bar, styles2[`barColor${capitalize(ownerState.color)}`], (ownerState.variant === "indeterminate" || ownerState.variant === "query") && styles2.bar1Indeterminate, ownerState.variant === "determinate" && styles2.bar1Determinate, ownerState.variant === "buffer" && styles2.bar1Buffer];
      }
    })(({
      ownerState,
      theme
    }) => _extends$2({
      width: "100%",
      position: "absolute",
      left: 0,
      bottom: 0,
      top: 0,
      transition: "transform 0.2s linear",
      transformOrigin: "left",
      backgroundColor: ownerState.color === "inherit" ? "currentColor" : (theme.vars || theme).palette[ownerState.color].main
    }, ownerState.variant === "determinate" && {
      transition: `transform .${TRANSITION_DURATION}s linear`
    }, ownerState.variant === "buffer" && {
      zIndex: 1,
      transition: `transform .${TRANSITION_DURATION}s linear`
    }), ({
      ownerState
    }) => (ownerState.variant === "indeterminate" || ownerState.variant === "query") && css$1(_t5 || (_t5 = _`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `), indeterminate1Keyframe));
    const LinearProgressBar2 = styled$1("span", {
      name: "MuiLinearProgress",
      slot: "Bar2",
      overridesResolver: (props, styles2) => {
        const {
          ownerState
        } = props;
        return [styles2.bar, styles2[`barColor${capitalize(ownerState.color)}`], (ownerState.variant === "indeterminate" || ownerState.variant === "query") && styles2.bar2Indeterminate, ownerState.variant === "buffer" && styles2.bar2Buffer];
      }
    })(({
      ownerState,
      theme
    }) => _extends$2({
      width: "100%",
      position: "absolute",
      left: 0,
      bottom: 0,
      top: 0,
      transition: "transform 0.2s linear",
      transformOrigin: "left"
    }, ownerState.variant !== "buffer" && {
      backgroundColor: ownerState.color === "inherit" ? "currentColor" : (theme.vars || theme).palette[ownerState.color].main
    }, ownerState.color === "inherit" && {
      opacity: 0.3
    }, ownerState.variant === "buffer" && {
      backgroundColor: getColorShade(theme, ownerState.color),
      transition: `transform .${TRANSITION_DURATION}s linear`
    }), ({
      ownerState
    }) => (ownerState.variant === "indeterminate" || ownerState.variant === "query") && css$1(_t6 || (_t6 = _`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `), indeterminate2Keyframe));
    const LinearProgress = /* @__PURE__ */ reactExports.forwardRef(function LinearProgress2(inProps, ref) {
      const props = useThemeProps$1({
        props: inProps,
        name: "MuiLinearProgress"
      });
      const {
        className,
        color = "primary",
        value,
        valueBuffer,
        variant = "indeterminate"
      } = props, other = _objectWithoutPropertiesLoose(props, _excluded$8);
      const ownerState = _extends$2({}, props, {
        color,
        variant
      });
      const classes = useUtilityClasses$5(ownerState);
      const theme = useTheme$1();
      const rootProps = {};
      const inlineStyles = {
        bar1: {},
        bar2: {}
      };
      if (variant === "determinate" || variant === "buffer") {
        if (value !== void 0) {
          rootProps["aria-valuenow"] = Math.round(value);
          rootProps["aria-valuemin"] = 0;
          rootProps["aria-valuemax"] = 100;
          let transform2 = value - 100;
          if (theme.direction === "rtl") {
            transform2 = -transform2;
          }
          inlineStyles.bar1.transform = `translateX(${transform2}%)`;
        }
      }
      if (variant === "buffer") {
        if (valueBuffer !== void 0) {
          let transform2 = (valueBuffer || 0) - 100;
          if (theme.direction === "rtl") {
            transform2 = -transform2;
          }
          inlineStyles.bar2.transform = `translateX(${transform2}%)`;
        }
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(LinearProgressRoot, _extends$2({
        className: clsx(classes.root, className),
        ownerState,
        role: "progressbar"
      }, rootProps, {
        ref
      }, other, {
        children: [variant === "buffer" ? /* @__PURE__ */ jsxRuntimeExports.jsx(LinearProgressDashed, {
          className: classes.dashed,
          ownerState
        }) : null, /* @__PURE__ */ jsxRuntimeExports.jsx(LinearProgressBar1, {
          className: classes.bar1,
          ownerState,
          style: inlineStyles.bar1
        }), variant === "determinate" ? null : /* @__PURE__ */ jsxRuntimeExports.jsx(LinearProgressBar2, {
          className: classes.bar2,
          ownerState,
          style: inlineStyles.bar2
        })]
      }));
    });
    const LinearProgress$1 = LinearProgress;
    function getSwitchUtilityClass(slot) {
      return generateUtilityClass("MuiSwitch", slot);
    }
    const switchClasses = generateUtilityClasses("MuiSwitch", ["root", "edgeStart", "edgeEnd", "switchBase", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium", "checked", "disabled", "input", "thumb", "track"]);
    const switchClasses$1 = switchClasses;
    const _excluded$7 = ["className", "color", "edge", "size", "sx"];
    const useUtilityClasses$4 = (ownerState) => {
      const {
        classes,
        edge,
        size,
        color,
        checked,
        disabled
      } = ownerState;
      const slots = {
        root: ["root", edge && `edge${capitalize(edge)}`, `size${capitalize(size)}`],
        switchBase: ["switchBase", `color${capitalize(color)}`, checked && "checked", disabled && "disabled"],
        thumb: ["thumb"],
        track: ["track"],
        input: ["input"]
      };
      const composedClasses = composeClasses(slots, getSwitchUtilityClass, classes);
      return _extends$2({}, classes, composedClasses);
    };
    const SwitchRoot = styled$1("span", {
      name: "MuiSwitch",
      slot: "Root",
      overridesResolver: (props, styles2) => {
        const {
          ownerState
        } = props;
        return [styles2.root, ownerState.edge && styles2[`edge${capitalize(ownerState.edge)}`], styles2[`size${capitalize(ownerState.size)}`]];
      }
    })(({
      ownerState
    }) => _extends$2({
      display: "inline-flex",
      width: 34 + 12 * 2,
      height: 14 + 12 * 2,
      overflow: "hidden",
      padding: 12,
      boxSizing: "border-box",
      position: "relative",
      flexShrink: 0,
      zIndex: 0,
      // Reset the stacking context.
      verticalAlign: "middle",
      // For correct alignment with the text.
      "@media print": {
        colorAdjust: "exact"
      }
    }, ownerState.edge === "start" && {
      marginLeft: -8
    }, ownerState.edge === "end" && {
      marginRight: -8
    }, ownerState.size === "small" && {
      width: 40,
      height: 24,
      padding: 7,
      [`& .${switchClasses$1.thumb}`]: {
        width: 16,
        height: 16
      },
      [`& .${switchClasses$1.switchBase}`]: {
        padding: 4,
        [`&.${switchClasses$1.checked}`]: {
          transform: "translateX(16px)"
        }
      }
    }));
    const SwitchSwitchBase = styled$1(SwitchBase$1, {
      name: "MuiSwitch",
      slot: "SwitchBase",
      overridesResolver: (props, styles2) => {
        const {
          ownerState
        } = props;
        return [styles2.switchBase, {
          [`& .${switchClasses$1.input}`]: styles2.input
        }, ownerState.color !== "default" && styles2[`color${capitalize(ownerState.color)}`]];
      }
    })(({
      theme
    }) => ({
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 1,
      // Render above the focus ripple.
      color: theme.vars ? theme.vars.palette.Switch.defaultColor : `${theme.palette.mode === "light" ? theme.palette.common.white : theme.palette.grey[300]}`,
      transition: theme.transitions.create(["left", "transform"], {
        duration: theme.transitions.duration.shortest
      }),
      [`&.${switchClasses$1.checked}`]: {
        transform: "translateX(20px)"
      },
      [`&.${switchClasses$1.disabled}`]: {
        color: theme.vars ? theme.vars.palette.Switch.defaultDisabledColor : `${theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[600]}`
      },
      [`&.${switchClasses$1.checked} + .${switchClasses$1.track}`]: {
        opacity: 0.5
      },
      [`&.${switchClasses$1.disabled} + .${switchClasses$1.track}`]: {
        opacity: theme.vars ? theme.vars.opacity.switchTrackDisabled : `${theme.palette.mode === "light" ? 0.12 : 0.2}`
      },
      [`& .${switchClasses$1.input}`]: {
        left: "-100%",
        width: "300%"
      }
    }), ({
      theme,
      ownerState
    }) => _extends$2({
      "&:hover": {
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }, ownerState.color !== "default" && {
      [`&.${switchClasses$1.checked}`]: {
        color: (theme.vars || theme).palette[ownerState.color].main,
        "&:hover": {
          backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
          "@media (hover: none)": {
            backgroundColor: "transparent"
          }
        },
        [`&.${switchClasses$1.disabled}`]: {
          color: theme.vars ? theme.vars.palette.Switch[`${ownerState.color}DisabledColor`] : `${theme.palette.mode === "light" ? lighten(theme.palette[ownerState.color].main, 0.62) : darken(theme.palette[ownerState.color].main, 0.55)}`
        }
      },
      [`&.${switchClasses$1.checked} + .${switchClasses$1.track}`]: {
        backgroundColor: (theme.vars || theme).palette[ownerState.color].main
      }
    }));
    const SwitchTrack = styled$1("span", {
      name: "MuiSwitch",
      slot: "Track",
      overridesResolver: (props, styles2) => styles2.track
    })(({
      theme
    }) => ({
      height: "100%",
      width: "100%",
      borderRadius: 14 / 2,
      zIndex: -1,
      transition: theme.transitions.create(["opacity", "background-color"], {
        duration: theme.transitions.duration.shortest
      }),
      backgroundColor: theme.vars ? theme.vars.palette.common.onBackground : `${theme.palette.mode === "light" ? theme.palette.common.black : theme.palette.common.white}`,
      opacity: theme.vars ? theme.vars.opacity.switchTrack : `${theme.palette.mode === "light" ? 0.38 : 0.3}`
    }));
    const SwitchThumb = styled$1("span", {
      name: "MuiSwitch",
      slot: "Thumb",
      overridesResolver: (props, styles2) => styles2.thumb
    })(({
      theme
    }) => ({
      boxShadow: (theme.vars || theme).shadows[1],
      backgroundColor: "currentColor",
      width: 20,
      height: 20,
      borderRadius: "50%"
    }));
    const Switch = /* @__PURE__ */ reactExports.forwardRef(function Switch2(inProps, ref) {
      const props = useThemeProps$1({
        props: inProps,
        name: "MuiSwitch"
      });
      const {
        className,
        color = "primary",
        edge = false,
        size = "medium",
        sx
      } = props, other = _objectWithoutPropertiesLoose(props, _excluded$7);
      const ownerState = _extends$2({}, props, {
        color,
        edge,
        size
      });
      const classes = useUtilityClasses$4(ownerState);
      const icon = /* @__PURE__ */ jsxRuntimeExports.jsx(SwitchThumb, {
        className: classes.thumb,
        ownerState
      });
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(SwitchRoot, {
        className: clsx(classes.root, className),
        sx,
        ownerState,
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx(SwitchSwitchBase, _extends$2({
          type: "checkbox",
          icon,
          checkedIcon: icon,
          ref,
          ownerState
        }, other, {
          classes: _extends$2({}, classes, {
            root: classes.switchBase
          })
        })), /* @__PURE__ */ jsxRuntimeExports.jsx(SwitchTrack, {
          className: classes.track,
          ownerState
        })]
      });
    });
    const Switch$1 = Switch;
    function getTabUtilityClass(slot) {
      return generateUtilityClass("MuiTab", slot);
    }
    const tabClasses = generateUtilityClasses("MuiTab", ["root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "iconWrapper"]);
    const tabClasses$1 = tabClasses;
    const _excluded$6 = ["className", "disabled", "disableFocusRipple", "fullWidth", "icon", "iconPosition", "indicator", "label", "onChange", "onClick", "onFocus", "selected", "selectionFollowsFocus", "textColor", "value", "wrapped"];
    const useUtilityClasses$3 = (ownerState) => {
      const {
        classes,
        textColor,
        fullWidth,
        wrapped,
        icon,
        label,
        selected,
        disabled
      } = ownerState;
      const slots = {
        root: ["root", icon && label && "labelIcon", `textColor${capitalize(textColor)}`, fullWidth && "fullWidth", wrapped && "wrapped", selected && "selected", disabled && "disabled"],
        iconWrapper: ["iconWrapper"]
      };
      return composeClasses(slots, getTabUtilityClass, classes);
    };
    const TabRoot = styled$1(ButtonBase, {
      name: "MuiTab",
      slot: "Root",
      overridesResolver: (props, styles2) => {
        const {
          ownerState
        } = props;
        return [styles2.root, ownerState.label && ownerState.icon && styles2.labelIcon, styles2[`textColor${capitalize(ownerState.textColor)}`], ownerState.fullWidth && styles2.fullWidth, ownerState.wrapped && styles2.wrapped];
      }
    })(({
      theme,
      ownerState
    }) => _extends$2({}, theme.typography.button, {
      maxWidth: 360,
      minWidth: 90,
      position: "relative",
      minHeight: 48,
      flexShrink: 0,
      padding: "12px 16px",
      overflow: "hidden",
      whiteSpace: "normal",
      textAlign: "center"
    }, ownerState.label && {
      flexDirection: ownerState.iconPosition === "top" || ownerState.iconPosition === "bottom" ? "column" : "row"
    }, {
      lineHeight: 1.25
    }, ownerState.icon && ownerState.label && {
      minHeight: 72,
      paddingTop: 9,
      paddingBottom: 9,
      [`& > .${tabClasses$1.iconWrapper}`]: _extends$2({}, ownerState.iconPosition === "top" && {
        marginBottom: 6
      }, ownerState.iconPosition === "bottom" && {
        marginTop: 6
      }, ownerState.iconPosition === "start" && {
        marginRight: theme.spacing(1)
      }, ownerState.iconPosition === "end" && {
        marginLeft: theme.spacing(1)
      })
    }, ownerState.textColor === "inherit" && {
      color: "inherit",
      opacity: 0.6,
      // same opacity as theme.palette.text.secondary
      [`&.${tabClasses$1.selected}`]: {
        opacity: 1
      },
      [`&.${tabClasses$1.disabled}`]: {
        opacity: (theme.vars || theme).palette.action.disabledOpacity
      }
    }, ownerState.textColor === "primary" && {
      color: (theme.vars || theme).palette.text.secondary,
      [`&.${tabClasses$1.selected}`]: {
        color: (theme.vars || theme).palette.primary.main
      },
      [`&.${tabClasses$1.disabled}`]: {
        color: (theme.vars || theme).palette.text.disabled
      }
    }, ownerState.textColor === "secondary" && {
      color: (theme.vars || theme).palette.text.secondary,
      [`&.${tabClasses$1.selected}`]: {
        color: (theme.vars || theme).palette.secondary.main
      },
      [`&.${tabClasses$1.disabled}`]: {
        color: (theme.vars || theme).palette.text.disabled
      }
    }, ownerState.fullWidth && {
      flexShrink: 1,
      flexGrow: 1,
      flexBasis: 0,
      maxWidth: "none"
    }, ownerState.wrapped && {
      fontSize: theme.typography.pxToRem(12)
    }));
    const Tab = /* @__PURE__ */ reactExports.forwardRef(function Tab2(inProps, ref) {
      const props = useThemeProps$1({
        props: inProps,
        name: "MuiTab"
      });
      const {
        className,
        disabled = false,
        disableFocusRipple = false,
        // eslint-disable-next-line react/prop-types
        fullWidth,
        icon: iconProp,
        iconPosition = "top",
        // eslint-disable-next-line react/prop-types
        indicator,
        label,
        onChange,
        onClick,
        onFocus,
        // eslint-disable-next-line react/prop-types
        selected,
        // eslint-disable-next-line react/prop-types
        selectionFollowsFocus,
        // eslint-disable-next-line react/prop-types
        textColor = "inherit",
        value,
        wrapped = false
      } = props, other = _objectWithoutPropertiesLoose(props, _excluded$6);
      const ownerState = _extends$2({}, props, {
        disabled,
        disableFocusRipple,
        selected,
        icon: !!iconProp,
        iconPosition,
        label: !!label,
        fullWidth,
        textColor,
        wrapped
      });
      const classes = useUtilityClasses$3(ownerState);
      const icon = iconProp && label && /* @__PURE__ */ reactExports.isValidElement(iconProp) ? /* @__PURE__ */ reactExports.cloneElement(iconProp, {
        className: clsx(classes.iconWrapper, iconProp.props.className)
      }) : iconProp;
      const handleClick = (event) => {
        if (!selected && onChange) {
          onChange(event, value);
        }
        if (onClick) {
          onClick(event);
        }
      };
      const handleFocus = (event) => {
        if (selectionFollowsFocus && !selected && onChange) {
          onChange(event, value);
        }
        if (onFocus) {
          onFocus(event);
        }
      };
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(TabRoot, _extends$2({
        focusRipple: !disableFocusRipple,
        className: clsx(classes.root, className),
        ref,
        role: "tab",
        "aria-selected": selected,
        disabled,
        onClick: handleClick,
        onFocus: handleFocus,
        ownerState,
        tabIndex: selected ? 0 : -1
      }, other, {
        children: [iconPosition === "top" || iconPosition === "start" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, {
          children: [icon, label]
        }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, {
          children: [label, icon]
        }), indicator]
      }));
    });
    const Tab$1 = Tab;
    function getToolbarUtilityClass(slot) {
      return generateUtilityClass("MuiToolbar", slot);
    }
    generateUtilityClasses("MuiToolbar", ["root", "gutters", "regular", "dense"]);
    const _excluded$5 = ["className", "component", "disableGutters", "variant"];
    const useUtilityClasses$2 = (ownerState) => {
      const {
        classes,
        disableGutters,
        variant
      } = ownerState;
      const slots = {
        root: ["root", !disableGutters && "gutters", variant]
      };
      return composeClasses(slots, getToolbarUtilityClass, classes);
    };
    const ToolbarRoot = styled$1("div", {
      name: "MuiToolbar",
      slot: "Root",
      overridesResolver: (props, styles2) => {
        const {
          ownerState
        } = props;
        return [styles2.root, !ownerState.disableGutters && styles2.gutters, styles2[ownerState.variant]];
      }
    })(({
      theme,
      ownerState
    }) => _extends$2({
      position: "relative",
      display: "flex",
      alignItems: "center"
    }, !ownerState.disableGutters && {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3)
      }
    }, ownerState.variant === "dense" && {
      minHeight: 48
    }), ({
      theme,
      ownerState
    }) => ownerState.variant === "regular" && theme.mixins.toolbar);
    const Toolbar = /* @__PURE__ */ reactExports.forwardRef(function Toolbar2(inProps, ref) {
      const props = useThemeProps$1({
        props: inProps,
        name: "MuiToolbar"
      });
      const {
        className,
        component = "div",
        disableGutters = false,
        variant = "regular"
      } = props, other = _objectWithoutPropertiesLoose(props, _excluded$5);
      const ownerState = _extends$2({}, props, {
        component,
        disableGutters,
        variant
      });
      const classes = useUtilityClasses$2(ownerState);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarRoot, _extends$2({
        as: component,
        className: clsx(classes.root, className),
        ref,
        ownerState
      }, other));
    });
    const Toolbar$1 = Toolbar;
    const KeyboardArrowLeft = createSvgIcon$1(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
      d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
    }), "KeyboardArrowLeft");
    const KeyboardArrowRight = createSvgIcon$1(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
      d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
    }), "KeyboardArrowRight");
    function easeInOutSin(time) {
      return (1 + Math.sin(Math.PI * time - Math.PI / 2)) / 2;
    }
    function animate(property, element, to2, options = {}, cb = () => {
    }) {
      const {
        ease = easeInOutSin,
        duration: duration2 = 300
        // standard
      } = options;
      let start = null;
      const from2 = element[property];
      let cancelled = false;
      const cancel = () => {
        cancelled = true;
      };
      const step = (timestamp) => {
        if (cancelled) {
          cb(new Error("Animation cancelled"));
          return;
        }
        if (start === null) {
          start = timestamp;
        }
        const time = Math.min(1, (timestamp - start) / duration2);
        element[property] = ease(time) * (to2 - from2) + from2;
        if (time >= 1) {
          requestAnimationFrame(() => {
            cb(null);
          });
          return;
        }
        requestAnimationFrame(step);
      };
      if (from2 === to2) {
        cb(new Error("Element already at target position"));
        return cancel;
      }
      requestAnimationFrame(step);
      return cancel;
    }
    const _excluded$4 = ["onChange"];
    const styles = {
      width: 99,
      height: 99,
      position: "absolute",
      top: -9999,
      overflow: "scroll"
    };
    function ScrollbarSize(props) {
      const {
        onChange
      } = props, other = _objectWithoutPropertiesLoose(props, _excluded$4);
      const scrollbarHeight = reactExports.useRef();
      const nodeRef = reactExports.useRef(null);
      const setMeasurements = () => {
        scrollbarHeight.current = nodeRef.current.offsetHeight - nodeRef.current.clientHeight;
      };
      useEnhancedEffect(() => {
        const handleResize = debounce(() => {
          const prevHeight = scrollbarHeight.current;
          setMeasurements();
          if (prevHeight !== scrollbarHeight.current) {
            onChange(scrollbarHeight.current);
          }
        });
        const containerWindow = ownerWindow(nodeRef.current);
        containerWindow.addEventListener("resize", handleResize);
        return () => {
          handleResize.clear();
          containerWindow.removeEventListener("resize", handleResize);
        };
      }, [onChange]);
      reactExports.useEffect(() => {
        setMeasurements();
        onChange(scrollbarHeight.current);
      }, [onChange]);
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", _extends$2({
        style: styles,
        ref: nodeRef
      }, other));
    }
    function getTabScrollButtonUtilityClass(slot) {
      return generateUtilityClass("MuiTabScrollButton", slot);
    }
    const tabScrollButtonClasses = generateUtilityClasses("MuiTabScrollButton", ["root", "vertical", "horizontal", "disabled"]);
    const tabScrollButtonClasses$1 = tabScrollButtonClasses;
    const _excluded$3 = ["className", "slots", "slotProps", "direction", "orientation", "disabled"];
    const useUtilityClasses$1 = (ownerState) => {
      const {
        classes,
        orientation,
        disabled
      } = ownerState;
      const slots = {
        root: ["root", orientation, disabled && "disabled"]
      };
      return composeClasses(slots, getTabScrollButtonUtilityClass, classes);
    };
    const TabScrollButtonRoot = styled$1(ButtonBase, {
      name: "MuiTabScrollButton",
      slot: "Root",
      overridesResolver: (props, styles2) => {
        const {
          ownerState
        } = props;
        return [styles2.root, ownerState.orientation && styles2[ownerState.orientation]];
      }
    })(({
      ownerState
    }) => _extends$2({
      width: 40,
      flexShrink: 0,
      opacity: 0.8,
      [`&.${tabScrollButtonClasses$1.disabled}`]: {
        opacity: 0
      }
    }, ownerState.orientation === "vertical" && {
      width: "100%",
      height: 40,
      "& svg": {
        transform: `rotate(${ownerState.isRtl ? -90 : 90}deg)`
      }
    }));
    const TabScrollButton = /* @__PURE__ */ reactExports.forwardRef(function TabScrollButton2(inProps, ref) {
      var _slots$StartScrollBut, _slots$EndScrollButto;
      const props = useThemeProps$1({
        props: inProps,
        name: "MuiTabScrollButton"
      });
      const {
        className,
        slots = {},
        slotProps = {},
        direction
      } = props, other = _objectWithoutPropertiesLoose(props, _excluded$3);
      const theme = useTheme$1();
      const isRtl = theme.direction === "rtl";
      const ownerState = _extends$2({
        isRtl
      }, props);
      const classes = useUtilityClasses$1(ownerState);
      const StartButtonIcon = (_slots$StartScrollBut = slots.StartScrollButtonIcon) != null ? _slots$StartScrollBut : KeyboardArrowLeft;
      const EndButtonIcon = (_slots$EndScrollButto = slots.EndScrollButtonIcon) != null ? _slots$EndScrollButto : KeyboardArrowRight;
      const startButtonIconProps = useSlotProps({
        elementType: StartButtonIcon,
        externalSlotProps: slotProps.startScrollButtonIcon,
        additionalProps: {
          fontSize: "small"
        },
        ownerState
      });
      const endButtonIconProps = useSlotProps({
        elementType: EndButtonIcon,
        externalSlotProps: slotProps.endScrollButtonIcon,
        additionalProps: {
          fontSize: "small"
        },
        ownerState
      });
      return /* @__PURE__ */ jsxRuntimeExports.jsx(TabScrollButtonRoot, _extends$2({
        component: "div",
        className: clsx(classes.root, className),
        ref,
        role: null,
        ownerState,
        tabIndex: null
      }, other, {
        children: direction === "left" ? /* @__PURE__ */ jsxRuntimeExports.jsx(StartButtonIcon, _extends$2({}, startButtonIconProps)) : /* @__PURE__ */ jsxRuntimeExports.jsx(EndButtonIcon, _extends$2({}, endButtonIconProps))
      }));
    });
    const TabScrollButton$1 = TabScrollButton;
    function getTabsUtilityClass(slot) {
      return generateUtilityClass("MuiTabs", slot);
    }
    const tabsClasses = generateUtilityClasses("MuiTabs", ["root", "vertical", "flexContainer", "flexContainerVertical", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator"]);
    const tabsClasses$1 = tabsClasses;
    const _excluded$2 = ["aria-label", "aria-labelledby", "action", "centered", "children", "className", "component", "allowScrollButtonsMobile", "indicatorColor", "onChange", "orientation", "ScrollButtonComponent", "scrollButtons", "selectionFollowsFocus", "slots", "slotProps", "TabIndicatorProps", "TabScrollButtonProps", "textColor", "value", "variant", "visibleScrollbar"];
    const nextItem = (list, item) => {
      if (list === item) {
        return list.firstChild;
      }
      if (item && item.nextElementSibling) {
        return item.nextElementSibling;
      }
      return list.firstChild;
    };
    const previousItem = (list, item) => {
      if (list === item) {
        return list.lastChild;
      }
      if (item && item.previousElementSibling) {
        return item.previousElementSibling;
      }
      return list.lastChild;
    };
    const moveFocus = (list, currentFocus, traversalFunction) => {
      let wrappedOnce = false;
      let nextFocus = traversalFunction(list, currentFocus);
      while (nextFocus) {
        if (nextFocus === list.firstChild) {
          if (wrappedOnce) {
            return;
          }
          wrappedOnce = true;
        }
        const nextFocusDisabled = nextFocus.disabled || nextFocus.getAttribute("aria-disabled") === "true";
        if (!nextFocus.hasAttribute("tabindex") || nextFocusDisabled) {
          nextFocus = traversalFunction(list, nextFocus);
        } else {
          nextFocus.focus();
          return;
        }
      }
    };
    const useUtilityClasses = (ownerState) => {
      const {
        vertical,
        fixed,
        hideScrollbar,
        scrollableX,
        scrollableY,
        centered,
        scrollButtonsHideMobile,
        classes
      } = ownerState;
      const slots = {
        root: ["root", vertical && "vertical"],
        scroller: ["scroller", fixed && "fixed", hideScrollbar && "hideScrollbar", scrollableX && "scrollableX", scrollableY && "scrollableY"],
        flexContainer: ["flexContainer", vertical && "flexContainerVertical", centered && "centered"],
        indicator: ["indicator"],
        scrollButtons: ["scrollButtons", scrollButtonsHideMobile && "scrollButtonsHideMobile"],
        scrollableX: [scrollableX && "scrollableX"],
        hideScrollbar: [hideScrollbar && "hideScrollbar"]
      };
      return composeClasses(slots, getTabsUtilityClass, classes);
    };
    const TabsRoot = styled$1("div", {
      name: "MuiTabs",
      slot: "Root",
      overridesResolver: (props, styles2) => {
        const {
          ownerState
        } = props;
        return [{
          [`& .${tabsClasses$1.scrollButtons}`]: styles2.scrollButtons
        }, {
          [`& .${tabsClasses$1.scrollButtons}`]: ownerState.scrollButtonsHideMobile && styles2.scrollButtonsHideMobile
        }, styles2.root, ownerState.vertical && styles2.vertical];
      }
    })(({
      ownerState,
      theme
    }) => _extends$2({
      overflow: "hidden",
      minHeight: 48,
      // Add iOS momentum scrolling for iOS < 13.0
      WebkitOverflowScrolling: "touch",
      display: "flex"
    }, ownerState.vertical && {
      flexDirection: "column"
    }, ownerState.scrollButtonsHideMobile && {
      [`& .${tabsClasses$1.scrollButtons}`]: {
        [theme.breakpoints.down("sm")]: {
          display: "none"
        }
      }
    }));
    const TabsScroller = styled$1("div", {
      name: "MuiTabs",
      slot: "Scroller",
      overridesResolver: (props, styles2) => {
        const {
          ownerState
        } = props;
        return [styles2.scroller, ownerState.fixed && styles2.fixed, ownerState.hideScrollbar && styles2.hideScrollbar, ownerState.scrollableX && styles2.scrollableX, ownerState.scrollableY && styles2.scrollableY];
      }
    })(({
      ownerState
    }) => _extends$2({
      position: "relative",
      display: "inline-block",
      flex: "1 1 auto",
      whiteSpace: "nowrap"
    }, ownerState.fixed && {
      overflowX: "hidden",
      width: "100%"
    }, ownerState.hideScrollbar && {
      // Hide dimensionless scrollbar on macOS
      scrollbarWidth: "none",
      // Firefox
      "&::-webkit-scrollbar": {
        display: "none"
        // Safari + Chrome
      }
    }, ownerState.scrollableX && {
      overflowX: "auto",
      overflowY: "hidden"
    }, ownerState.scrollableY && {
      overflowY: "auto",
      overflowX: "hidden"
    }));
    const FlexContainer = styled$1("div", {
      name: "MuiTabs",
      slot: "FlexContainer",
      overridesResolver: (props, styles2) => {
        const {
          ownerState
        } = props;
        return [styles2.flexContainer, ownerState.vertical && styles2.flexContainerVertical, ownerState.centered && styles2.centered];
      }
    })(({
      ownerState
    }) => _extends$2({
      display: "flex"
    }, ownerState.vertical && {
      flexDirection: "column"
    }, ownerState.centered && {
      justifyContent: "center"
    }));
    const TabsIndicator = styled$1("span", {
      name: "MuiTabs",
      slot: "Indicator",
      overridesResolver: (props, styles2) => styles2.indicator
    })(({
      ownerState,
      theme
    }) => _extends$2({
      position: "absolute",
      height: 2,
      bottom: 0,
      width: "100%",
      transition: theme.transitions.create()
    }, ownerState.indicatorColor === "primary" && {
      backgroundColor: (theme.vars || theme).palette.primary.main
    }, ownerState.indicatorColor === "secondary" && {
      backgroundColor: (theme.vars || theme).palette.secondary.main
    }, ownerState.vertical && {
      height: "100%",
      width: 2,
      right: 0
    }));
    const TabsScrollbarSize = styled$1(ScrollbarSize)({
      overflowX: "auto",
      overflowY: "hidden",
      // Hide dimensionless scrollbar on macOS
      scrollbarWidth: "none",
      // Firefox
      "&::-webkit-scrollbar": {
        display: "none"
        // Safari + Chrome
      }
    });
    const defaultIndicatorStyle = {};
    const Tabs = /* @__PURE__ */ reactExports.forwardRef(function Tabs2(inProps, ref) {
      const props = useThemeProps$1({
        props: inProps,
        name: "MuiTabs"
      });
      const theme = useTheme$1();
      const isRtl = theme.direction === "rtl";
      const {
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        action,
        centered = false,
        children: childrenProp,
        className,
        component = "div",
        allowScrollButtonsMobile = false,
        indicatorColor = "primary",
        onChange,
        orientation = "horizontal",
        ScrollButtonComponent = TabScrollButton$1,
        scrollButtons = "auto",
        selectionFollowsFocus,
        slots = {},
        slotProps = {},
        TabIndicatorProps = {},
        TabScrollButtonProps = {},
        textColor = "primary",
        value,
        variant = "standard",
        visibleScrollbar = false
      } = props, other = _objectWithoutPropertiesLoose(props, _excluded$2);
      const scrollable = variant === "scrollable";
      const vertical = orientation === "vertical";
      const scrollStart = vertical ? "scrollTop" : "scrollLeft";
      const start = vertical ? "top" : "left";
      const end = vertical ? "bottom" : "right";
      const clientSize = vertical ? "clientHeight" : "clientWidth";
      const size = vertical ? "height" : "width";
      const ownerState = _extends$2({}, props, {
        component,
        allowScrollButtonsMobile,
        indicatorColor,
        orientation,
        vertical,
        scrollButtons,
        textColor,
        variant,
        visibleScrollbar,
        fixed: !scrollable,
        hideScrollbar: scrollable && !visibleScrollbar,
        scrollableX: scrollable && !vertical,
        scrollableY: scrollable && vertical,
        centered: centered && !scrollable,
        scrollButtonsHideMobile: !allowScrollButtonsMobile
      });
      const classes = useUtilityClasses(ownerState);
      const startScrollButtonIconProps = useSlotProps({
        elementType: slots.StartScrollButtonIcon,
        externalSlotProps: slotProps.startScrollButtonIcon,
        ownerState
      });
      const endScrollButtonIconProps = useSlotProps({
        elementType: slots.EndScrollButtonIcon,
        externalSlotProps: slotProps.endScrollButtonIcon,
        ownerState
      });
      const [mounted, setMounted] = reactExports.useState(false);
      const [indicatorStyle, setIndicatorStyle] = reactExports.useState(defaultIndicatorStyle);
      const [displayStartScroll, setDisplayStartScroll] = reactExports.useState(false);
      const [displayEndScroll, setDisplayEndScroll] = reactExports.useState(false);
      const [updateScrollObserver, setUpdateScrollObserver] = reactExports.useState(false);
      const [scrollerStyle, setScrollerStyle] = reactExports.useState({
        overflow: "hidden",
        scrollbarWidth: 0
      });
      const valueToIndex = /* @__PURE__ */ new Map();
      const tabsRef = reactExports.useRef(null);
      const tabListRef = reactExports.useRef(null);
      const getTabsMeta = () => {
        const tabsNode = tabsRef.current;
        let tabsMeta;
        if (tabsNode) {
          const rect = tabsNode.getBoundingClientRect();
          tabsMeta = {
            clientWidth: tabsNode.clientWidth,
            scrollLeft: tabsNode.scrollLeft,
            scrollTop: tabsNode.scrollTop,
            scrollLeftNormalized: getNormalizedScrollLeft(tabsNode, theme.direction),
            scrollWidth: tabsNode.scrollWidth,
            top: rect.top,
            bottom: rect.bottom,
            left: rect.left,
            right: rect.right
          };
        }
        let tabMeta;
        if (tabsNode && value !== false) {
          const children2 = tabListRef.current.children;
          if (children2.length > 0) {
            const tab = children2[valueToIndex.get(value)];
            tabMeta = tab ? tab.getBoundingClientRect() : null;
          }
        }
        return {
          tabsMeta,
          tabMeta
        };
      };
      const updateIndicatorState = useEventCallback(() => {
        const {
          tabsMeta,
          tabMeta
        } = getTabsMeta();
        let startValue = 0;
        let startIndicator;
        if (vertical) {
          startIndicator = "top";
          if (tabMeta && tabsMeta) {
            startValue = tabMeta.top - tabsMeta.top + tabsMeta.scrollTop;
          }
        } else {
          startIndicator = isRtl ? "right" : "left";
          if (tabMeta && tabsMeta) {
            const correction = isRtl ? tabsMeta.scrollLeftNormalized + tabsMeta.clientWidth - tabsMeta.scrollWidth : tabsMeta.scrollLeft;
            startValue = (isRtl ? -1 : 1) * (tabMeta[startIndicator] - tabsMeta[startIndicator] + correction);
          }
        }
        const newIndicatorStyle = {
          [startIndicator]: startValue,
          // May be wrong until the font is loaded.
          [size]: tabMeta ? tabMeta[size] : 0
        };
        if (isNaN(indicatorStyle[startIndicator]) || isNaN(indicatorStyle[size])) {
          setIndicatorStyle(newIndicatorStyle);
        } else {
          const dStart = Math.abs(indicatorStyle[startIndicator] - newIndicatorStyle[startIndicator]);
          const dSize = Math.abs(indicatorStyle[size] - newIndicatorStyle[size]);
          if (dStart >= 1 || dSize >= 1) {
            setIndicatorStyle(newIndicatorStyle);
          }
        }
      });
      const scroll = (scrollValue, {
        animation = true
      } = {}) => {
        if (animation) {
          animate(scrollStart, tabsRef.current, scrollValue, {
            duration: theme.transitions.duration.standard
          });
        } else {
          tabsRef.current[scrollStart] = scrollValue;
        }
      };
      const moveTabsScroll = (delta) => {
        let scrollValue = tabsRef.current[scrollStart];
        if (vertical) {
          scrollValue += delta;
        } else {
          scrollValue += delta * (isRtl ? -1 : 1);
          scrollValue *= isRtl && detectScrollType() === "reverse" ? -1 : 1;
        }
        scroll(scrollValue);
      };
      const getScrollSize = () => {
        const containerSize = tabsRef.current[clientSize];
        let totalSize = 0;
        const children2 = Array.from(tabListRef.current.children);
        for (let i = 0; i < children2.length; i += 1) {
          const tab = children2[i];
          if (totalSize + tab[clientSize] > containerSize) {
            if (i === 0) {
              totalSize = containerSize;
            }
            break;
          }
          totalSize += tab[clientSize];
        }
        return totalSize;
      };
      const handleStartScrollClick = () => {
        moveTabsScroll(-1 * getScrollSize());
      };
      const handleEndScrollClick = () => {
        moveTabsScroll(getScrollSize());
      };
      const handleScrollbarSizeChange = reactExports.useCallback((scrollbarWidth) => {
        setScrollerStyle({
          overflow: null,
          scrollbarWidth
        });
      }, []);
      const getConditionalElements = () => {
        const conditionalElements2 = {};
        conditionalElements2.scrollbarSizeListener = scrollable ? /* @__PURE__ */ jsxRuntimeExports.jsx(TabsScrollbarSize, {
          onChange: handleScrollbarSizeChange,
          className: clsx(classes.scrollableX, classes.hideScrollbar)
        }) : null;
        const scrollButtonsActive = displayStartScroll || displayEndScroll;
        const showScrollButtons = scrollable && (scrollButtons === "auto" && scrollButtonsActive || scrollButtons === true);
        conditionalElements2.scrollButtonStart = showScrollButtons ? /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollButtonComponent, _extends$2({
          slots: {
            StartScrollButtonIcon: slots.StartScrollButtonIcon
          },
          slotProps: {
            startScrollButtonIcon: startScrollButtonIconProps
          },
          orientation,
          direction: isRtl ? "right" : "left",
          onClick: handleStartScrollClick,
          disabled: !displayStartScroll
        }, TabScrollButtonProps, {
          className: clsx(classes.scrollButtons, TabScrollButtonProps.className)
        })) : null;
        conditionalElements2.scrollButtonEnd = showScrollButtons ? /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollButtonComponent, _extends$2({
          slots: {
            EndScrollButtonIcon: slots.EndScrollButtonIcon
          },
          slotProps: {
            endScrollButtonIcon: endScrollButtonIconProps
          },
          orientation,
          direction: isRtl ? "left" : "right",
          onClick: handleEndScrollClick,
          disabled: !displayEndScroll
        }, TabScrollButtonProps, {
          className: clsx(classes.scrollButtons, TabScrollButtonProps.className)
        })) : null;
        return conditionalElements2;
      };
      const scrollSelectedIntoView = useEventCallback((animation) => {
        const {
          tabsMeta,
          tabMeta
        } = getTabsMeta();
        if (!tabMeta || !tabsMeta) {
          return;
        }
        if (tabMeta[start] < tabsMeta[start]) {
          const nextScrollStart = tabsMeta[scrollStart] + (tabMeta[start] - tabsMeta[start]);
          scroll(nextScrollStart, {
            animation
          });
        } else if (tabMeta[end] > tabsMeta[end]) {
          const nextScrollStart = tabsMeta[scrollStart] + (tabMeta[end] - tabsMeta[end]);
          scroll(nextScrollStart, {
            animation
          });
        }
      });
      const updateScrollButtonState = useEventCallback(() => {
        if (scrollable && scrollButtons !== false) {
          setUpdateScrollObserver(!updateScrollObserver);
        }
      });
      reactExports.useEffect(() => {
        const handleResize = debounce(() => {
          if (tabsRef.current) {
            updateIndicatorState();
          }
        });
        let resizeObserver;
        const handleMutation = (records) => {
          records.forEach((record) => {
            record.removedNodes.forEach((item) => {
              var _resizeObserver;
              (_resizeObserver = resizeObserver) == null || _resizeObserver.unobserve(item);
            });
            record.addedNodes.forEach((item) => {
              var _resizeObserver2;
              (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.observe(item);
            });
          });
          handleResize();
          updateScrollButtonState();
        };
        const win = ownerWindow(tabsRef.current);
        win.addEventListener("resize", handleResize);
        let mutationObserver;
        if (typeof ResizeObserver !== "undefined") {
          resizeObserver = new ResizeObserver(handleResize);
          Array.from(tabListRef.current.children).forEach((child) => {
            resizeObserver.observe(child);
          });
        }
        if (typeof MutationObserver !== "undefined") {
          mutationObserver = new MutationObserver(handleMutation);
          mutationObserver.observe(tabListRef.current, {
            childList: true
          });
        }
        return () => {
          var _mutationObserver, _resizeObserver3;
          handleResize.clear();
          win.removeEventListener("resize", handleResize);
          (_mutationObserver = mutationObserver) == null || _mutationObserver.disconnect();
          (_resizeObserver3 = resizeObserver) == null || _resizeObserver3.disconnect();
        };
      }, [updateIndicatorState, updateScrollButtonState]);
      reactExports.useEffect(() => {
        const tabListChildren = Array.from(tabListRef.current.children);
        const length = tabListChildren.length;
        if (typeof IntersectionObserver !== "undefined" && length > 0 && scrollable && scrollButtons !== false) {
          const firstTab = tabListChildren[0];
          const lastTab = tabListChildren[length - 1];
          const observerOptions = {
            root: tabsRef.current,
            threshold: 0.99
          };
          const handleScrollButtonStart = (entries) => {
            setDisplayStartScroll(!entries[0].isIntersecting);
          };
          const firstObserver = new IntersectionObserver(handleScrollButtonStart, observerOptions);
          firstObserver.observe(firstTab);
          const handleScrollButtonEnd = (entries) => {
            setDisplayEndScroll(!entries[0].isIntersecting);
          };
          const lastObserver = new IntersectionObserver(handleScrollButtonEnd, observerOptions);
          lastObserver.observe(lastTab);
          return () => {
            firstObserver.disconnect();
            lastObserver.disconnect();
          };
        }
        return void 0;
      }, [scrollable, scrollButtons, updateScrollObserver, childrenProp == null ? void 0 : childrenProp.length]);
      reactExports.useEffect(() => {
        setMounted(true);
      }, []);
      reactExports.useEffect(() => {
        updateIndicatorState();
      });
      reactExports.useEffect(() => {
        scrollSelectedIntoView(defaultIndicatorStyle !== indicatorStyle);
      }, [scrollSelectedIntoView, indicatorStyle]);
      reactExports.useImperativeHandle(action, () => ({
        updateIndicator: updateIndicatorState,
        updateScrollButtons: updateScrollButtonState
      }), [updateIndicatorState, updateScrollButtonState]);
      const indicator = /* @__PURE__ */ jsxRuntimeExports.jsx(TabsIndicator, _extends$2({}, TabIndicatorProps, {
        className: clsx(classes.indicator, TabIndicatorProps.className),
        ownerState,
        style: _extends$2({}, indicatorStyle, TabIndicatorProps.style)
      }));
      let childIndex = 0;
      const children = reactExports.Children.map(childrenProp, (child) => {
        if (!/* @__PURE__ */ reactExports.isValidElement(child)) {
          return null;
        }
        const childValue = child.props.value === void 0 ? childIndex : child.props.value;
        valueToIndex.set(childValue, childIndex);
        const selected = childValue === value;
        childIndex += 1;
        return /* @__PURE__ */ reactExports.cloneElement(child, _extends$2({
          fullWidth: variant === "fullWidth",
          indicator: selected && !mounted && indicator,
          selected,
          selectionFollowsFocus,
          onChange,
          textColor,
          value: childValue
        }, childIndex === 1 && value === false && !child.props.tabIndex ? {
          tabIndex: 0
        } : {}));
      });
      const handleKeyDown = (event) => {
        const list = tabListRef.current;
        const currentFocus = ownerDocument(list).activeElement;
        const role = currentFocus.getAttribute("role");
        if (role !== "tab") {
          return;
        }
        let previousItemKey = orientation === "horizontal" ? "ArrowLeft" : "ArrowUp";
        let nextItemKey = orientation === "horizontal" ? "ArrowRight" : "ArrowDown";
        if (orientation === "horizontal" && isRtl) {
          previousItemKey = "ArrowRight";
          nextItemKey = "ArrowLeft";
        }
        switch (event.key) {
          case previousItemKey:
            event.preventDefault();
            moveFocus(list, currentFocus, previousItem);
            break;
          case nextItemKey:
            event.preventDefault();
            moveFocus(list, currentFocus, nextItem);
            break;
          case "Home":
            event.preventDefault();
            moveFocus(list, null, nextItem);
            break;
          case "End":
            event.preventDefault();
            moveFocus(list, null, previousItem);
            break;
        }
      };
      const conditionalElements = getConditionalElements();
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsRoot, _extends$2({
        className: clsx(classes.root, className),
        ownerState,
        ref,
        as: component
      }, other, {
        children: [conditionalElements.scrollButtonStart, conditionalElements.scrollbarSizeListener, /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsScroller, {
          className: classes.scroller,
          ownerState,
          style: {
            overflow: scrollerStyle.overflow,
            [vertical ? `margin${isRtl ? "Left" : "Right"}` : "marginBottom"]: visibleScrollbar ? void 0 : -scrollerStyle.scrollbarWidth
          },
          ref: tabsRef,
          children: [/* @__PURE__ */ jsxRuntimeExports.jsx(FlexContainer, {
            "aria-label": ariaLabel,
            "aria-labelledby": ariaLabelledBy,
            "aria-orientation": orientation === "vertical" ? "vertical" : null,
            className: classes.flexContainer,
            ownerState,
            onKeyDown: handleKeyDown,
            ref: tabListRef,
            role: "tablist",
            children
          }), mounted && indicator]
        }), conditionalElements.scrollButtonEnd]
      }));
    });
    const Tabs$1 = Tabs;
    const EmitLog = ({ name, payload }) => {
      return;
    };
    /**
     * @remix-run/router v1.15.3
     *
     * Copyright (c) Remix Software Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.md file in the root directory of this source tree.
     *
     * @license MIT
     */
    function _extends$1() {
      _extends$1 = Object.assign ? Object.assign.bind() : function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key2 in source) {
            if (Object.prototype.hasOwnProperty.call(source, key2)) {
              target[key2] = source[key2];
            }
          }
        }
        return target;
      };
      return _extends$1.apply(this, arguments);
    }
    var Action;
    (function(Action2) {
      Action2["Pop"] = "POP";
      Action2["Push"] = "PUSH";
      Action2["Replace"] = "REPLACE";
    })(Action || (Action = {}));
    const PopStateEventType = "popstate";
    function createBrowserHistory(options) {
      if (options === void 0) {
        options = {};
      }
      function createBrowserLocation(window2, globalHistory) {
        let {
          pathname,
          search,
          hash
        } = window2.location;
        return createLocation(
          "",
          {
            pathname,
            search,
            hash
          },
          // state defaults to `null` because `window.history.state` does
          globalHistory.state && globalHistory.state.usr || null,
          globalHistory.state && globalHistory.state.key || "default"
        );
      }
      function createBrowserHref(window2, to2) {
        return typeof to2 === "string" ? to2 : createPath(to2);
      }
      return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
    }
    function invariant(value, message) {
      if (value === false || value === null || typeof value === "undefined") {
        throw new Error(message);
      }
    }
    function warning(cond, message) {
      if (!cond) {
        if (typeof console !== "undefined")
          console.warn(message);
        try {
          throw new Error(message);
        } catch (e2) {
        }
      }
    }
    function createKey() {
      return Math.random().toString(36).substr(2, 8);
    }
    function getHistoryState(location, index) {
      return {
        usr: location.state,
        key: location.key,
        idx: index
      };
    }
    function createLocation(current, to2, state, key2) {
      if (state === void 0) {
        state = null;
      }
      let location = _extends$1({
        pathname: typeof current === "string" ? current : current.pathname,
        search: "",
        hash: ""
      }, typeof to2 === "string" ? parsePath(to2) : to2, {
        state,
        // TODO: This could be cleaned up.  push/replace should probably just take
        // full Locations now and avoid the need to run through this flow at all
        // But that's a pretty big refactor to the current test suite so going to
        // keep as is for the time being and just let any incoming keys take precedence
        key: to2 && to2.key || key2 || createKey()
      });
      return location;
    }
    function createPath(_ref) {
      let {
        pathname = "/",
        search = "",
        hash = ""
      } = _ref;
      if (search && search !== "?")
        pathname += search.charAt(0) === "?" ? search : "?" + search;
      if (hash && hash !== "#")
        pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
      return pathname;
    }
    function parsePath(path) {
      let parsedPath = {};
      if (path) {
        let hashIndex = path.indexOf("#");
        if (hashIndex >= 0) {
          parsedPath.hash = path.substr(hashIndex);
          path = path.substr(0, hashIndex);
        }
        let searchIndex = path.indexOf("?");
        if (searchIndex >= 0) {
          parsedPath.search = path.substr(searchIndex);
          path = path.substr(0, searchIndex);
        }
        if (path) {
          parsedPath.pathname = path;
        }
      }
      return parsedPath;
    }
    function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
      if (options === void 0) {
        options = {};
      }
      let {
        window: window2 = document.defaultView,
        v5Compat = false
      } = options;
      let globalHistory = window2.history;
      let action = Action.Pop;
      let listener = null;
      let index = getIndex();
      if (index == null) {
        index = 0;
        globalHistory.replaceState(_extends$1({}, globalHistory.state, {
          idx: index
        }), "");
      }
      function getIndex() {
        let state = globalHistory.state || {
          idx: null
        };
        return state.idx;
      }
      function handlePop() {
        action = Action.Pop;
        let nextIndex = getIndex();
        let delta = nextIndex == null ? null : nextIndex - index;
        index = nextIndex;
        if (listener) {
          listener({
            action,
            location: history.location,
            delta
          });
        }
      }
      function push(to2, state) {
        action = Action.Push;
        let location = createLocation(history.location, to2, state);
        if (validateLocation)
          validateLocation(location, to2);
        index = getIndex() + 1;
        let historyState = getHistoryState(location, index);
        let url = history.createHref(location);
        try {
          globalHistory.pushState(historyState, "", url);
        } catch (error) {
          if (error instanceof DOMException && error.name === "DataCloneError") {
            throw error;
          }
          window2.location.assign(url);
        }
        if (v5Compat && listener) {
          listener({
            action,
            location: history.location,
            delta: 1
          });
        }
      }
      function replace(to2, state) {
        action = Action.Replace;
        let location = createLocation(history.location, to2, state);
        if (validateLocation)
          validateLocation(location, to2);
        index = getIndex();
        let historyState = getHistoryState(location, index);
        let url = history.createHref(location);
        globalHistory.replaceState(historyState, "", url);
        if (v5Compat && listener) {
          listener({
            action,
            location: history.location,
            delta: 0
          });
        }
      }
      function createURL(to2) {
        let base = window2.location.origin !== "null" ? window2.location.origin : window2.location.href;
        let href = typeof to2 === "string" ? to2 : createPath(to2);
        href = href.replace(/ $/, "%20");
        invariant(base, "No window.location.(origin|href) available to create URL for href: " + href);
        return new URL(href, base);
      }
      let history = {
        get action() {
          return action;
        },
        get location() {
          return getLocation(window2, globalHistory);
        },
        listen(fn) {
          if (listener) {
            throw new Error("A history only accepts one active listener");
          }
          window2.addEventListener(PopStateEventType, handlePop);
          listener = fn;
          return () => {
            window2.removeEventListener(PopStateEventType, handlePop);
            listener = null;
          };
        },
        createHref(to2) {
          return createHref(window2, to2);
        },
        createURL,
        encodeLocation(to2) {
          let url = createURL(to2);
          return {
            pathname: url.pathname,
            search: url.search,
            hash: url.hash
          };
        },
        push,
        replace,
        go(n2) {
          return globalHistory.go(n2);
        }
      };
      return history;
    }
    var ResultType;
    (function(ResultType2) {
      ResultType2["data"] = "data";
      ResultType2["deferred"] = "deferred";
      ResultType2["redirect"] = "redirect";
      ResultType2["error"] = "error";
    })(ResultType || (ResultType = {}));
    function matchRoutes(routes, locationArg, basename) {
      if (basename === void 0) {
        basename = "/";
      }
      let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
      let pathname = stripBasename(location.pathname || "/", basename);
      if (pathname == null) {
        return null;
      }
      let branches = flattenRoutes(routes);
      rankRouteBranches(branches);
      let matches = null;
      for (let i = 0; matches == null && i < branches.length; ++i) {
        let decoded = decodePath(pathname);
        matches = matchRouteBranch(branches[i], decoded);
      }
      return matches;
    }
    function flattenRoutes(routes, branches, parentsMeta, parentPath) {
      if (branches === void 0) {
        branches = [];
      }
      if (parentsMeta === void 0) {
        parentsMeta = [];
      }
      if (parentPath === void 0) {
        parentPath = "";
      }
      let flattenRoute = (route, index, relativePath) => {
        let meta = {
          relativePath: relativePath === void 0 ? route.path || "" : relativePath,
          caseSensitive: route.caseSensitive === true,
          childrenIndex: index,
          route
        };
        if (meta.relativePath.startsWith("/")) {
          invariant(meta.relativePath.startsWith(parentPath), 'Absolute route path "' + meta.relativePath + '" nested under path ' + ('"' + parentPath + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.");
          meta.relativePath = meta.relativePath.slice(parentPath.length);
        }
        let path = joinPaths([parentPath, meta.relativePath]);
        let routesMeta = parentsMeta.concat(meta);
        if (route.children && route.children.length > 0) {
          invariant(
            // Our types know better, but runtime JS may not!
            // @ts-expect-error
            route.index !== true,
            "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + path + '".')
          );
          flattenRoutes(route.children, branches, routesMeta, path);
        }
        if (route.path == null && !route.index) {
          return;
        }
        branches.push({
          path,
          score: computeScore(path, route.index),
          routesMeta
        });
      };
      routes.forEach((route, index) => {
        var _route$path;
        if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) {
          flattenRoute(route, index);
        } else {
          for (let exploded of explodeOptionalSegments(route.path)) {
            flattenRoute(route, index, exploded);
          }
        }
      });
      return branches;
    }
    function explodeOptionalSegments(path) {
      let segments = path.split("/");
      if (segments.length === 0)
        return [];
      let [first, ...rest] = segments;
      let isOptional = first.endsWith("?");
      let required = first.replace(/\?$/, "");
      if (rest.length === 0) {
        return isOptional ? [required, ""] : [required];
      }
      let restExploded = explodeOptionalSegments(rest.join("/"));
      let result = [];
      result.push(...restExploded.map((subpath) => subpath === "" ? required : [required, subpath].join("/")));
      if (isOptional) {
        result.push(...restExploded);
      }
      return result.map((exploded) => path.startsWith("/") && exploded === "" ? "/" : exploded);
    }
    function rankRouteBranches(branches) {
      branches.sort((a, b2) => a.score !== b2.score ? b2.score - a.score : compareIndexes(a.routesMeta.map((meta) => meta.childrenIndex), b2.routesMeta.map((meta) => meta.childrenIndex)));
    }
    const paramRe = /^:[\w-]+$/;
    const dynamicSegmentValue = 3;
    const indexRouteValue = 2;
    const emptySegmentValue = 1;
    const staticSegmentValue = 10;
    const splatPenalty = -2;
    const isSplat = (s) => s === "*";
    function computeScore(path, index) {
      let segments = path.split("/");
      let initialScore = segments.length;
      if (segments.some(isSplat)) {
        initialScore += splatPenalty;
      }
      if (index) {
        initialScore += indexRouteValue;
      }
      return segments.filter((s) => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
    }
    function compareIndexes(a, b2) {
      let siblings = a.length === b2.length && a.slice(0, -1).every((n2, i) => n2 === b2[i]);
      return siblings ? (
        // If two routes are siblings, we should try to match the earlier sibling
        // first. This allows people to have fine-grained control over the matching
        // behavior by simply putting routes with identical paths in the order they
        // want them tried.
        a[a.length - 1] - b2[b2.length - 1]
      ) : (
        // Otherwise, it doesn't really make sense to rank non-siblings by index,
        // so they sort equally.
        0
      );
    }
    function matchRouteBranch(branch, pathname) {
      let {
        routesMeta
      } = branch;
      let matchedParams = {};
      let matchedPathname = "/";
      let matches = [];
      for (let i = 0; i < routesMeta.length; ++i) {
        let meta = routesMeta[i];
        let end = i === routesMeta.length - 1;
        let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
        let match = matchPath({
          path: meta.relativePath,
          caseSensitive: meta.caseSensitive,
          end
        }, remainingPathname);
        if (!match)
          return null;
        Object.assign(matchedParams, match.params);
        let route = meta.route;
        matches.push({
          // TODO: Can this as be avoided?
          params: matchedParams,
          pathname: joinPaths([matchedPathname, match.pathname]),
          pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
          route
        });
        if (match.pathnameBase !== "/") {
          matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
        }
      }
      return matches;
    }
    function matchPath(pattern, pathname) {
      if (typeof pattern === "string") {
        pattern = {
          path: pattern,
          caseSensitive: false,
          end: true
        };
      }
      let [matcher, compiledParams] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
      let match = pathname.match(matcher);
      if (!match)
        return null;
      let matchedPathname = match[0];
      let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
      let captureGroups = match.slice(1);
      let params = compiledParams.reduce((memo, _ref, index) => {
        let {
          paramName,
          isOptional
        } = _ref;
        if (paramName === "*") {
          let splatValue = captureGroups[index] || "";
          pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
        }
        const value = captureGroups[index];
        if (isOptional && !value) {
          memo[paramName] = void 0;
        } else {
          memo[paramName] = (value || "").replace(/%2F/g, "/");
        }
        return memo;
      }, {});
      return {
        params,
        pathname: matchedPathname,
        pathnameBase,
        pattern
      };
    }
    function compilePath(path, caseSensitive, end) {
      if (caseSensitive === void 0) {
        caseSensitive = false;
      }
      if (end === void 0) {
        end = true;
      }
      warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
      let params = [];
      let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (_2, paramName, isOptional) => {
        params.push({
          paramName,
          isOptional: isOptional != null
        });
        return isOptional ? "/?([^\\/]+)?" : "/([^\\/]+)";
      });
      if (path.endsWith("*")) {
        params.push({
          paramName: "*"
        });
        regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
      } else if (end) {
        regexpSource += "\\/*$";
      } else if (path !== "" && path !== "/") {
        regexpSource += "(?:(?=\\/|$))";
      } else
        ;
      let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
      return [matcher, params];
    }
    function decodePath(value) {
      try {
        return value.split("/").map((v2) => decodeURIComponent(v2).replace(/\//g, "%2F")).join("/");
      } catch (error) {
        warning(false, 'The URL path "' + value + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + error + ")."));
        return value;
      }
    }
    function stripBasename(pathname, basename) {
      if (basename === "/")
        return pathname;
      if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
        return null;
      }
      let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
      let nextChar = pathname.charAt(startIndex);
      if (nextChar && nextChar !== "/") {
        return null;
      }
      return pathname.slice(startIndex) || "/";
    }
    function resolvePath(to2, fromPathname) {
      if (fromPathname === void 0) {
        fromPathname = "/";
      }
      let {
        pathname: toPathname,
        search = "",
        hash = ""
      } = typeof to2 === "string" ? parsePath(to2) : to2;
      let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
      return {
        pathname,
        search: normalizeSearch(search),
        hash: normalizeHash(hash)
      };
    }
    function resolvePathname(relativePath, fromPathname) {
      let segments = fromPathname.replace(/\/+$/, "").split("/");
      let relativeSegments = relativePath.split("/");
      relativeSegments.forEach((segment) => {
        if (segment === "..") {
          if (segments.length > 1)
            segments.pop();
        } else if (segment !== ".") {
          segments.push(segment);
        }
      });
      return segments.length > 1 ? segments.join("/") : "/";
    }
    function getInvalidPathError(char, field, dest, path) {
      return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
    }
    function getPathContributingMatches(matches) {
      return matches.filter((match, index) => index === 0 || match.route.path && match.route.path.length > 0);
    }
    function getResolveToMatches(matches, v7_relativeSplatPath) {
      let pathMatches = getPathContributingMatches(matches);
      if (v7_relativeSplatPath) {
        return pathMatches.map((match, idx) => idx === matches.length - 1 ? match.pathname : match.pathnameBase);
      }
      return pathMatches.map((match) => match.pathnameBase);
    }
    function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
      if (isPathRelative === void 0) {
        isPathRelative = false;
      }
      let to2;
      if (typeof toArg === "string") {
        to2 = parsePath(toArg);
      } else {
        to2 = _extends$1({}, toArg);
        invariant(!to2.pathname || !to2.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to2));
        invariant(!to2.pathname || !to2.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to2));
        invariant(!to2.search || !to2.search.includes("#"), getInvalidPathError("#", "search", "hash", to2));
      }
      let isEmptyPath = toArg === "" || to2.pathname === "";
      let toPathname = isEmptyPath ? "/" : to2.pathname;
      let from2;
      if (toPathname == null) {
        from2 = locationPathname;
      } else {
        let routePathnameIndex = routePathnames.length - 1;
        if (!isPathRelative && toPathname.startsWith("..")) {
          let toSegments = toPathname.split("/");
          while (toSegments[0] === "..") {
            toSegments.shift();
            routePathnameIndex -= 1;
          }
          to2.pathname = toSegments.join("/");
        }
        from2 = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
      }
      let path = resolvePath(to2, from2);
      let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
      let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
      if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
        path.pathname += "/";
      }
      return path;
    }
    const joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
    const normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
    const normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
    const normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
    function isRouteErrorResponse(error) {
      return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
    }
    const validMutationMethodsArr = ["post", "put", "patch", "delete"];
    new Set(validMutationMethodsArr);
    const validRequestMethodsArr = ["get", ...validMutationMethodsArr];
    new Set(validRequestMethodsArr);
    /**
     * React Router v6.22.3
     *
     * Copyright (c) Remix Software Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.md file in the root directory of this source tree.
     *
     * @license MIT
     */
    function _extends() {
      _extends = Object.assign ? Object.assign.bind() : function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key2 in source) {
            if (Object.prototype.hasOwnProperty.call(source, key2)) {
              target[key2] = source[key2];
            }
          }
        }
        return target;
      };
      return _extends.apply(this, arguments);
    }
    const DataRouterContext = /* @__PURE__ */ reactExports.createContext(null);
    const DataRouterStateContext = /* @__PURE__ */ reactExports.createContext(null);
    const NavigationContext = /* @__PURE__ */ reactExports.createContext(null);
    const LocationContext = /* @__PURE__ */ reactExports.createContext(null);
    const RouteContext = /* @__PURE__ */ reactExports.createContext({
      outlet: null,
      matches: [],
      isDataRoute: false
    });
    const RouteErrorContext = /* @__PURE__ */ reactExports.createContext(null);
    function useInRouterContext() {
      return reactExports.useContext(LocationContext) != null;
    }
    function useLocation() {
      !useInRouterContext() ? invariant(false) : void 0;
      return reactExports.useContext(LocationContext).location;
    }
    function useIsomorphicLayoutEffect(cb) {
      let isStatic = reactExports.useContext(NavigationContext).static;
      if (!isStatic) {
        reactExports.useLayoutEffect(cb);
      }
    }
    function useNavigate() {
      let {
        isDataRoute
      } = reactExports.useContext(RouteContext);
      return isDataRoute ? useNavigateStable() : useNavigateUnstable();
    }
    function useNavigateUnstable() {
      !useInRouterContext() ? invariant(false) : void 0;
      let dataRouterContext = reactExports.useContext(DataRouterContext);
      let {
        basename,
        future,
        navigator
      } = reactExports.useContext(NavigationContext);
      let {
        matches
      } = reactExports.useContext(RouteContext);
      let {
        pathname: locationPathname
      } = useLocation();
      let routePathnamesJson = JSON.stringify(getResolveToMatches(matches, future.v7_relativeSplatPath));
      let activeRef = reactExports.useRef(false);
      useIsomorphicLayoutEffect(() => {
        activeRef.current = true;
      });
      let navigate = reactExports.useCallback(function(to2, options) {
        if (options === void 0) {
          options = {};
        }
        if (!activeRef.current)
          return;
        if (typeof to2 === "number") {
          navigator.go(to2);
          return;
        }
        let path = resolveTo(to2, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");
        if (dataRouterContext == null && basename !== "/") {
          path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
        }
        (!!options.replace ? navigator.replace : navigator.push)(path, options.state, options);
      }, [basename, navigator, routePathnamesJson, locationPathname, dataRouterContext]);
      return navigate;
    }
    function useRoutes(routes, locationArg) {
      return useRoutesImpl(routes, locationArg);
    }
    function useRoutesImpl(routes, locationArg, dataRouterState, future) {
      !useInRouterContext() ? invariant(false) : void 0;
      let {
        navigator
      } = reactExports.useContext(NavigationContext);
      let {
        matches: parentMatches
      } = reactExports.useContext(RouteContext);
      let routeMatch = parentMatches[parentMatches.length - 1];
      let parentParams = routeMatch ? routeMatch.params : {};
      routeMatch ? routeMatch.pathname : "/";
      let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
      routeMatch && routeMatch.route;
      let locationFromContext = useLocation();
      let location;
      if (locationArg) {
        var _parsedLocationArg$pa;
        let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
        !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? invariant(false) : void 0;
        location = parsedLocationArg;
      } else {
        location = locationFromContext;
      }
      let pathname = location.pathname || "/";
      let remainingPathname = pathname;
      if (parentPathnameBase !== "/") {
        let parentSegments = parentPathnameBase.replace(/^\//, "").split("/");
        let segments = pathname.replace(/^\//, "").split("/");
        remainingPathname = "/" + segments.slice(parentSegments.length).join("/");
      }
      let matches = matchRoutes(routes, {
        pathname: remainingPathname
      });
      let renderedMatches = _renderMatches(matches && matches.map((match) => Object.assign({}, match, {
        params: Object.assign({}, parentParams, match.params),
        pathname: joinPaths([
          parentPathnameBase,
          // Re-encode pathnames that were decoded inside matchRoutes
          navigator.encodeLocation ? navigator.encodeLocation(match.pathname).pathname : match.pathname
        ]),
        pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([
          parentPathnameBase,
          // Re-encode pathnames that were decoded inside matchRoutes
          navigator.encodeLocation ? navigator.encodeLocation(match.pathnameBase).pathname : match.pathnameBase
        ])
      })), parentMatches, dataRouterState, future);
      if (locationArg && renderedMatches) {
        return /* @__PURE__ */ reactExports.createElement(LocationContext.Provider, {
          value: {
            location: _extends({
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default"
            }, location),
            navigationType: Action.Pop
          }
        }, renderedMatches);
      }
      return renderedMatches;
    }
    function DefaultErrorComponent() {
      let error = useRouteError();
      let message = isRouteErrorResponse(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
      let stack = error instanceof Error ? error.stack : null;
      let lightgrey = "rgba(200,200,200, 0.5)";
      let preStyles = {
        padding: "0.5rem",
        backgroundColor: lightgrey
      };
      let devInfo = null;
      return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ reactExports.createElement("h3", {
        style: {
          fontStyle: "italic"
        }
      }, message), stack ? /* @__PURE__ */ reactExports.createElement("pre", {
        style: preStyles
      }, stack) : null, devInfo);
    }
    const defaultErrorElement = /* @__PURE__ */ reactExports.createElement(DefaultErrorComponent, null);
    class RenderErrorBoundary extends reactExports.Component {
      constructor(props) {
        super(props);
        this.state = {
          location: props.location,
          revalidation: props.revalidation,
          error: props.error
        };
      }
      static getDerivedStateFromError(error) {
        return {
          error
        };
      }
      static getDerivedStateFromProps(props, state) {
        if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") {
          return {
            error: props.error,
            location: props.location,
            revalidation: props.revalidation
          };
        }
        return {
          error: props.error !== void 0 ? props.error : state.error,
          location: state.location,
          revalidation: props.revalidation || state.revalidation
        };
      }
      componentDidCatch(error, errorInfo) {
        console.error("React Router caught the following error during render", error, errorInfo);
      }
      render() {
        return this.state.error !== void 0 ? /* @__PURE__ */ reactExports.createElement(RouteContext.Provider, {
          value: this.props.routeContext
        }, /* @__PURE__ */ reactExports.createElement(RouteErrorContext.Provider, {
          value: this.state.error,
          children: this.props.component
        })) : this.props.children;
      }
    }
    function RenderedRoute(_ref) {
      let {
        routeContext,
        match,
        children
      } = _ref;
      let dataRouterContext = reactExports.useContext(DataRouterContext);
      if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
        dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
      }
      return /* @__PURE__ */ reactExports.createElement(RouteContext.Provider, {
        value: routeContext
      }, children);
    }
    function _renderMatches(matches, parentMatches, dataRouterState, future) {
      var _dataRouterState2;
      if (parentMatches === void 0) {
        parentMatches = [];
      }
      if (dataRouterState === void 0) {
        dataRouterState = null;
      }
      if (future === void 0) {
        future = null;
      }
      if (matches == null) {
        var _dataRouterState;
        if ((_dataRouterState = dataRouterState) != null && _dataRouterState.errors) {
          matches = dataRouterState.matches;
        } else {
          return null;
        }
      }
      let renderedMatches = matches;
      let errors = (_dataRouterState2 = dataRouterState) == null ? void 0 : _dataRouterState2.errors;
      if (errors != null) {
        let errorIndex = renderedMatches.findIndex((m2) => m2.route.id && (errors == null ? void 0 : errors[m2.route.id]));
        !(errorIndex >= 0) ? invariant(false) : void 0;
        renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
      }
      let renderFallback = false;
      let fallbackIndex = -1;
      if (dataRouterState && future && future.v7_partialHydration) {
        for (let i = 0; i < renderedMatches.length; i++) {
          let match = renderedMatches[i];
          if (match.route.HydrateFallback || match.route.hydrateFallbackElement) {
            fallbackIndex = i;
          }
          if (match.route.id) {
            let {
              loaderData,
              errors: errors2
            } = dataRouterState;
            let needsToRunLoader = match.route.loader && loaderData[match.route.id] === void 0 && (!errors2 || errors2[match.route.id] === void 0);
            if (match.route.lazy || needsToRunLoader) {
              renderFallback = true;
              if (fallbackIndex >= 0) {
                renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
              } else {
                renderedMatches = [renderedMatches[0]];
              }
              break;
            }
          }
        }
      }
      return renderedMatches.reduceRight((outlet, match, index) => {
        let error;
        let shouldRenderHydrateFallback = false;
        let errorElement = null;
        let hydrateFallbackElement = null;
        if (dataRouterState) {
          error = errors && match.route.id ? errors[match.route.id] : void 0;
          errorElement = match.route.errorElement || defaultErrorElement;
          if (renderFallback) {
            if (fallbackIndex < 0 && index === 0) {
              warningOnce("route-fallback", false);
              shouldRenderHydrateFallback = true;
              hydrateFallbackElement = null;
            } else if (fallbackIndex === index) {
              shouldRenderHydrateFallback = true;
              hydrateFallbackElement = match.route.hydrateFallbackElement || null;
            }
          }
        }
        let matches2 = parentMatches.concat(renderedMatches.slice(0, index + 1));
        let getChildren = () => {
          let children;
          if (error) {
            children = errorElement;
          } else if (shouldRenderHydrateFallback) {
            children = hydrateFallbackElement;
          } else if (match.route.Component) {
            children = /* @__PURE__ */ reactExports.createElement(match.route.Component, null);
          } else if (match.route.element) {
            children = match.route.element;
          } else {
            children = outlet;
          }
          return /* @__PURE__ */ reactExports.createElement(RenderedRoute, {
            match,
            routeContext: {
              outlet,
              matches: matches2,
              isDataRoute: dataRouterState != null
            },
            children
          });
        };
        return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /* @__PURE__ */ reactExports.createElement(RenderErrorBoundary, {
          location: dataRouterState.location,
          revalidation: dataRouterState.revalidation,
          component: errorElement,
          error,
          children: getChildren(),
          routeContext: {
            outlet: null,
            matches: matches2,
            isDataRoute: true
          }
        }) : getChildren();
      }, null);
    }
    var DataRouterHook$1 = /* @__PURE__ */ function(DataRouterHook2) {
      DataRouterHook2["UseBlocker"] = "useBlocker";
      DataRouterHook2["UseRevalidator"] = "useRevalidator";
      DataRouterHook2["UseNavigateStable"] = "useNavigate";
      return DataRouterHook2;
    }(DataRouterHook$1 || {});
    var DataRouterStateHook$1 = /* @__PURE__ */ function(DataRouterStateHook2) {
      DataRouterStateHook2["UseBlocker"] = "useBlocker";
      DataRouterStateHook2["UseLoaderData"] = "useLoaderData";
      DataRouterStateHook2["UseActionData"] = "useActionData";
      DataRouterStateHook2["UseRouteError"] = "useRouteError";
      DataRouterStateHook2["UseNavigation"] = "useNavigation";
      DataRouterStateHook2["UseRouteLoaderData"] = "useRouteLoaderData";
      DataRouterStateHook2["UseMatches"] = "useMatches";
      DataRouterStateHook2["UseRevalidator"] = "useRevalidator";
      DataRouterStateHook2["UseNavigateStable"] = "useNavigate";
      DataRouterStateHook2["UseRouteId"] = "useRouteId";
      return DataRouterStateHook2;
    }(DataRouterStateHook$1 || {});
    function useDataRouterContext(hookName) {
      let ctx = reactExports.useContext(DataRouterContext);
      !ctx ? invariant(false) : void 0;
      return ctx;
    }
    function useDataRouterState(hookName) {
      let state = reactExports.useContext(DataRouterStateContext);
      !state ? invariant(false) : void 0;
      return state;
    }
    function useRouteContext(hookName) {
      let route = reactExports.useContext(RouteContext);
      !route ? invariant(false) : void 0;
      return route;
    }
    function useCurrentRouteId(hookName) {
      let route = useRouteContext();
      let thisRoute = route.matches[route.matches.length - 1];
      !thisRoute.route.id ? invariant(false) : void 0;
      return thisRoute.route.id;
    }
    function useRouteError() {
      var _state$errors;
      let error = reactExports.useContext(RouteErrorContext);
      let state = useDataRouterState(DataRouterStateHook$1.UseRouteError);
      let routeId = useCurrentRouteId(DataRouterStateHook$1.UseRouteError);
      if (error !== void 0) {
        return error;
      }
      return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
    }
    function useNavigateStable() {
      let {
        router
      } = useDataRouterContext(DataRouterHook$1.UseNavigateStable);
      let id = useCurrentRouteId(DataRouterStateHook$1.UseNavigateStable);
      let activeRef = reactExports.useRef(false);
      useIsomorphicLayoutEffect(() => {
        activeRef.current = true;
      });
      let navigate = reactExports.useCallback(function(to2, options) {
        if (options === void 0) {
          options = {};
        }
        if (!activeRef.current)
          return;
        if (typeof to2 === "number") {
          router.navigate(to2);
        } else {
          router.navigate(to2, _extends({
            fromRouteId: id
          }, options));
        }
      }, [router, id]);
      return navigate;
    }
    const alreadyWarned = {};
    function warningOnce(key2, cond, message) {
      if (!cond && !alreadyWarned[key2]) {
        alreadyWarned[key2] = true;
      }
    }
    function Route(_props) {
      invariant(false);
    }
    function Router(_ref5) {
      let {
        basename: basenameProp = "/",
        children = null,
        location: locationProp,
        navigationType = Action.Pop,
        navigator,
        static: staticProp = false,
        future
      } = _ref5;
      !!useInRouterContext() ? invariant(false) : void 0;
      let basename = basenameProp.replace(/^\/*/, "/");
      let navigationContext = reactExports.useMemo(() => ({
        basename,
        navigator,
        static: staticProp,
        future: _extends({
          v7_relativeSplatPath: false
        }, future)
      }), [basename, future, navigator, staticProp]);
      if (typeof locationProp === "string") {
        locationProp = parsePath(locationProp);
      }
      let {
        pathname = "/",
        search = "",
        hash = "",
        state = null,
        key: key2 = "default"
      } = locationProp;
      let locationContext = reactExports.useMemo(() => {
        let trailingPathname = stripBasename(pathname, basename);
        if (trailingPathname == null) {
          return null;
        }
        return {
          location: {
            pathname: trailingPathname,
            search,
            hash,
            state,
            key: key2
          },
          navigationType
        };
      }, [basename, pathname, search, hash, state, key2, navigationType]);
      if (locationContext == null) {
        return null;
      }
      return /* @__PURE__ */ reactExports.createElement(NavigationContext.Provider, {
        value: navigationContext
      }, /* @__PURE__ */ reactExports.createElement(LocationContext.Provider, {
        children,
        value: locationContext
      }));
    }
    function Routes(_ref6) {
      let {
        children,
        location
      } = _ref6;
      return useRoutes(createRoutesFromChildren(children), location);
    }
    new Promise(() => {
    });
    function createRoutesFromChildren(children, parentPath) {
      if (parentPath === void 0) {
        parentPath = [];
      }
      let routes = [];
      reactExports.Children.forEach(children, (element, index) => {
        if (!/* @__PURE__ */ reactExports.isValidElement(element)) {
          return;
        }
        let treePath = [...parentPath, index];
        if (element.type === reactExports.Fragment) {
          routes.push.apply(routes, createRoutesFromChildren(element.props.children, treePath));
          return;
        }
        !(element.type === Route) ? invariant(false) : void 0;
        !(!element.props.index || !element.props.children) ? invariant(false) : void 0;
        let route = {
          id: element.props.id || treePath.join("-"),
          caseSensitive: element.props.caseSensitive,
          element: element.props.element,
          Component: element.props.Component,
          index: element.props.index,
          path: element.props.path,
          loader: element.props.loader,
          action: element.props.action,
          errorElement: element.props.errorElement,
          ErrorBoundary: element.props.ErrorBoundary,
          hasErrorBoundary: element.props.ErrorBoundary != null || element.props.errorElement != null,
          shouldRevalidate: element.props.shouldRevalidate,
          handle: element.props.handle,
          lazy: element.props.lazy
        };
        if (element.props.children) {
          route.children = createRoutesFromChildren(element.props.children, treePath);
        }
        routes.push(route);
      });
      return routes;
    }
    /**
     * React Router DOM v6.22.3
     *
     * Copyright (c) Remix Software Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.md file in the root directory of this source tree.
     *
     * @license MIT
     */
    const REACT_ROUTER_VERSION = "6";
    try {
      window.__reactRouterVersion = REACT_ROUTER_VERSION;
    } catch (e2) {
    }
    const START_TRANSITION = "startTransition";
    const startTransitionImpl = React[START_TRANSITION];
    function BrowserRouter(_ref4) {
      let {
        basename,
        children,
        future,
        window: window2
      } = _ref4;
      let historyRef = reactExports.useRef();
      if (historyRef.current == null) {
        historyRef.current = createBrowserHistory({
          window: window2,
          v5Compat: true
        });
      }
      let history = historyRef.current;
      let [state, setStateImpl] = reactExports.useState({
        action: history.action,
        location: history.location
      });
      let {
        v7_startTransition
      } = future || {};
      let setState = reactExports.useCallback((newState) => {
        v7_startTransition && startTransitionImpl ? startTransitionImpl(() => setStateImpl(newState)) : setStateImpl(newState);
      }, [setStateImpl, v7_startTransition]);
      reactExports.useLayoutEffect(() => history.listen(setState), [history, setState]);
      return /* @__PURE__ */ reactExports.createElement(Router, {
        basename,
        children,
        location: state.location,
        navigationType: state.action,
        navigator: history,
        future
      });
    }
    var DataRouterHook;
    (function(DataRouterHook2) {
      DataRouterHook2["UseScrollRestoration"] = "useScrollRestoration";
      DataRouterHook2["UseSubmit"] = "useSubmit";
      DataRouterHook2["UseSubmitFetcher"] = "useSubmitFetcher";
      DataRouterHook2["UseFetcher"] = "useFetcher";
      DataRouterHook2["useViewTransitionState"] = "useViewTransitionState";
    })(DataRouterHook || (DataRouterHook = {}));
    var DataRouterStateHook;
    (function(DataRouterStateHook2) {
      DataRouterStateHook2["UseFetcher"] = "useFetcher";
      DataRouterStateHook2["UseFetchers"] = "useFetchers";
      DataRouterStateHook2["UseScrollRestoration"] = "useScrollRestoration";
    })(DataRouterStateHook || (DataRouterStateHook = {}));
    var Plumbing = {};
    var interopRequireDefault = { exports: {} };
    (function(module2) {
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }
      module2.exports = _interopRequireDefault2, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
    })(interopRequireDefault);
    var interopRequireDefaultExports = interopRequireDefault.exports;
    var createSvgIcon = {};
    const require$$0 = /* @__PURE__ */ getAugmentedNamespace(utils);
    var hasRequiredCreateSvgIcon;
    function requireCreateSvgIcon() {
      if (hasRequiredCreateSvgIcon)
        return createSvgIcon;
      hasRequiredCreateSvgIcon = 1;
      (function(exports2) {
        "use client";
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        Object.defineProperty(exports2, "default", {
          enumerable: true,
          get: function() {
            return _utils.createSvgIcon;
          }
        });
        var _utils = require$$0;
      })(createSvgIcon);
      return createSvgIcon;
    }
    var _interopRequireDefault$2 = interopRequireDefaultExports;
    Object.defineProperty(Plumbing, "__esModule", {
      value: true
    });
    var default_1$2 = Plumbing.default = void 0;
    var _createSvgIcon$2 = _interopRequireDefault$2(requireCreateSvgIcon());
    var _jsxRuntime$2 = jsxRuntimeExports;
    var _default$2 = (0, _createSvgIcon$2.default)([/* @__PURE__ */ (0, _jsxRuntime$2.jsx)("path", {
      d: "m19.28 4.93-2.12-2.12c-.78-.78-2.05-.78-2.83 0L11.5 5.64l2.12 2.12 2.12-2.12 3.54 3.54c1.17-1.18 1.17-3.08 0-4.25zM5.49 13.77c.59.59 1.54.59 2.12 0l2.47-2.47-2.12-2.13-2.47 2.47c-.59.59-.59 1.54 0 2.13z"
    }, "0"), /* @__PURE__ */ (0, _jsxRuntime$2.jsx)("path", {
      d: "m15.04 7.76-.71.71-.71.71L10.44 6c-.59-.6-1.54-.6-2.12-.01-.59.59-.59 1.54 0 2.12l3.18 3.18-.71.71-6.36 6.36c-.78.78-.78 2.05 0 2.83.78.78 2.05.78 2.83 0L16.45 12c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-2.82-2.83z"
    }, "1")], "Plumbing");
    default_1$2 = Plumbing.default = _default$2;
    var Person = {};
    var _interopRequireDefault$1 = interopRequireDefaultExports;
    Object.defineProperty(Person, "__esModule", {
      value: true
    });
    var default_1$1 = Person.default = void 0;
    var _createSvgIcon$1 = _interopRequireDefault$1(requireCreateSvgIcon());
    var _jsxRuntime$1 = jsxRuntimeExports;
    var _default$1 = (0, _createSvgIcon$1.default)(/* @__PURE__ */ (0, _jsxRuntime$1.jsx)("path", {
      d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
    }), "Person");
    default_1$1 = Person.default = _default$1;
    var Brush = {};
    var _interopRequireDefault = interopRequireDefaultExports;
    Object.defineProperty(Brush, "__esModule", {
      value: true
    });
    var default_1 = Brush.default = void 0;
    var _createSvgIcon = _interopRequireDefault(requireCreateSvgIcon());
    var _jsxRuntime = jsxRuntimeExports;
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
      d: "M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37-1.34-1.34a.9959.9959 0 0 0-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z"
    }), "Brush");
    default_1 = Brush.default = _default;
    const BottomNav = ({ value, tagIsInstalled, onChange }) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        BottomNavigation$1,
        {
          showLabels: true,
          value,
          onChange: (_2, newValue) => onChange(newValue),
          sx: {
            position: "fixed",
            bottom: 0,
            width: "100%"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              BottomNavigationAction$1,
              {
                label: "Debugger",
                value: "/",
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1$2, {}),
                sx: {
                  "&.Mui-selected": {
                    color: "secondary.main"
                  }
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              BottomNavigationAction$1,
              {
                label: "Profile",
                value: "/profile",
                disabled: !tagIsInstalled,
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1$1, {}),
                sx: {
                  "&.Mui-selected": {
                    color: "secondary.main"
                  }
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              BottomNavigationAction$1,
              {
                label: "Personalization",
                value: "/personalization",
                disabled: !tagIsInstalled,
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1, {}),
                sx: {
                  "&.Mui-selected": {
                    color: "secondary.main"
                  }
                }
              }
            )
          ]
        }
      );
    };
    const DeveloperCenterIcon = () => {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "100", height: "76", viewBox: "0 0 100 76", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            opacity: "0.2",
            d: "M72.8911 74.2636C63.7619 77.1241 49.2929 76.4778 44.9726 68.2954C42.8063 64.1923 43.0377 57.9023 46.1898 53.9207C51.4712 47.2493 62.5002 50.154 64.5084 44.917C65.4785 42.3873 64.0594 39.1885 62.3783 37.4162C57.9922 32.7938 51.2013 37.3609 44.8978 33.4959C40.019 30.5045 37.3211 23.6197 38.4583 18.8856C40.6429 9.79074 58.2423 7.34217 69.4964 8.77543C72.8291 9.19972 90.4258 11.4408 97.3117 24.9771C106.312 42.6707 91.326 68.4872 72.8915 74.2636H72.8911Z",
            fill: "#A277E9"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            opacity: "0.09",
            d: "M1.35475 18.245C-3.86612 33.0332 6.95244 50.7485 17.6125 52.8812C27.6292 54.8853 34.0867 42.4465 44.0492 45.5299C52.7268 48.2158 53.1231 59.2923 58.8935 59.3843C65.2556 59.4856 73.3232 46.1549 72.4653 33.9371C71.1965 15.8682 50.3179 -1.03178 29.9122 0.290444C28.0154 0.413433 7.05674 2.09341 1.35475 18.2446V18.245Z",
            fill: "#9359D9"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M77.4056 64.0293C77.4033 64.0298 77.3982 64.0293 77.3936 64.0293H23.5934C21.4553 64.0293 19.7158 62.2887 19.7158 60.1481V24.6633H81.4609V37.7803C81.4609 38.0937 81.2881 38.383 81.0119 38.5315C80.7483 38.6733 80.4301 38.6668 80.1724 38.5135L77.4991 38.513C77.4968 38.5204 77.4957 38.5286 77.4939 38.5384L77.13 41.7089C77.0907 42.0508 76.8492 42.3357 76.5186 42.4307C75.9233 42.6018 75.3461 42.842 74.8017 43.1433C74.5011 43.3098 74.1284 43.2787 73.8586 43.0647L71.3422 41.0625L69.4738 42.9321C69.4784 42.9396 69.4836 42.9465 69.4895 42.9553L71.472 45.4542C71.6853 45.7242 71.7172 46.0962 71.5501 46.398C71.2485 46.9429 71.0087 47.5206 70.837 48.1169C70.7418 48.4488 70.4569 48.69 70.1147 48.7282L66.9219 49.0925V51.7384C66.9294 51.7402 66.9381 51.7418 66.9479 51.743L70.115 52.1068C70.4572 52.1461 70.7413 52.3878 70.8368 52.7182C71.009 53.3162 71.2487 53.8945 71.5493 54.4375C71.7164 54.7388 71.6846 55.1118 71.4708 55.3818L69.4697 57.8998L71.3381 59.7697C71.3455 59.7656 71.3524 59.7604 71.3612 59.7548L73.8581 57.7706C74.1279 57.5571 74.499 57.5247 74.8011 57.6925C75.3456 57.9943 75.9233 58.2343 76.518 58.4056C76.8497 58.5004 77.0902 58.7861 77.1295 59.1285L77.4942 62.329C77.9241 62.3735 78.2581 62.7362 78.2581 63.1775C78.2581 63.6476 77.8766 64.0298 77.4056 64.0298V64.0293Z",
            fill: "#CDB3FF"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M19.7158 24.6632V14.7395C19.7158 12.5996 21.4556 10.8589 23.5934 10.8589H77.5827C79.7209 10.8589 81.4609 12.5996 81.4609 14.7395V24.6629H19.7158V24.6632Z",
            fill: "#A079E9"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M72.1522 29.8296H36.5461C36.0761 29.8296 35.6944 29.4473 35.6944 28.9767C35.6944 28.5061 36.0761 28.1238 36.5461 28.1238H72.152C72.6225 28.1238 73.0036 28.5058 73.0036 28.9767C73.0036 29.4476 72.6217 29.8296 72.152 29.8296H72.1522ZM31.5771 29.8296H24.7975C24.327 29.8296 23.9453 29.4473 23.9453 28.9767C23.9453 28.5061 24.327 28.1238 24.7975 28.1238H31.5766C32.0465 28.1238 32.4282 28.5058 32.4282 28.9767C32.4282 29.4476 32.047 29.8296 31.5771 29.8296Z",
            fill: "#F1EAFF"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M72.1507 34.7145H65.3714C64.9017 34.7145 64.5197 34.3326 64.5197 33.8617C64.5197 33.3908 64.9017 33.0093 65.3714 33.0093H72.1507C72.6212 33.0093 73.0024 33.3913 73.0024 33.8617C73.0024 34.332 72.621 34.7145 72.1507 34.7145ZM60.4021 34.7145H24.7965C24.326 34.7145 23.9443 34.3326 23.9443 33.8617C23.9443 33.3908 24.326 33.0093 24.7965 33.0093H60.4021C60.8719 33.0093 61.2538 33.3913 61.2538 33.8617C61.2538 34.332 60.8724 34.7145 60.4021 34.7145Z",
            fill: "#F1EAFF"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M63.409 39.5994H34.3774C33.9069 39.5994 33.5252 39.2172 33.5252 38.7471C33.5252 38.277 33.9069 37.894 34.3774 37.894H63.409C63.8795 37.894 64.2614 38.2767 64.2614 38.7471C64.2614 39.2175 63.8795 39.5994 63.409 39.5994ZM30.5896 39.5994H24.7985C24.328 39.5994 23.9463 39.2172 23.9463 38.7471C23.9463 38.277 24.328 37.894 24.7985 37.894H30.5896C31.0596 37.894 31.4418 38.2767 31.4418 38.7471C31.4418 39.2175 31.0601 39.5994 30.5896 39.5994Z",
            fill: "#F1EAFF"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M60.2678 44.4843H54.832C54.3615 44.4843 53.9798 44.102 53.9798 43.6319C53.9798 43.1618 54.3615 42.7788 54.832 42.7788H60.2678C60.7383 42.7788 61.1203 43.1616 61.1203 43.6319C61.1203 44.1023 60.7383 44.4843 60.2678 44.4843ZM51.4677 44.4843H24.797C24.3265 44.4843 23.9453 44.102 23.9453 43.6319C23.9453 43.1618 24.3267 42.7788 24.797 42.7788H51.4677C51.9382 42.7788 52.3199 43.1616 52.3199 43.6319C52.3199 44.1023 51.9384 44.4843 51.4677 44.4843Z",
            fill: "#F1EAFF"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M50.8617 58.863C50.7426 58.863 50.622 58.8381 50.5067 58.7849C50.0788 58.5889 49.8912 58.0823 50.0878 57.6549L54.1233 48.8532C54.3191 48.4252 54.8245 48.2357 55.2527 48.434C55.6805 48.63 55.8684 49.1365 55.6716 49.564L51.6361 58.3662C51.4936 58.6785 51.1849 58.863 50.8617 58.863Z",
            fill: "#F1EAFF"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M57.9475 58.863C57.8127 58.863 57.6769 58.8312 57.5504 58.7641C57.1343 58.5445 56.9749 58.0292 57.1939 57.6127L59.3035 53.6095L57.1939 49.6062C56.9741 49.1903 57.1338 48.6744 57.5504 48.4548C57.9652 48.2344 58.4813 48.3934 58.7008 48.8111L61.0204 53.2123C61.1521 53.461 61.1521 53.7587 61.0204 54.0081L58.7008 58.4093C58.5483 58.6986 58.2524 58.8633 57.9472 58.8633L57.9475 58.863Z",
            fill: "#F1EAFF"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M47.8125 58.863C47.5068 58.863 47.2108 58.6981 47.0583 58.4078L44.7385 54.0066C44.6073 53.7574 44.6073 53.4594 44.7385 53.2107L47.0583 48.8095C47.2778 48.3931 47.7937 48.2336 48.209 48.4532C48.6256 48.6729 48.7845 49.1882 48.5653 49.6046L46.4546 53.6071L48.5653 57.6109C48.7848 58.0268 48.6256 58.5426 48.209 58.7623C48.0825 58.8306 47.9464 58.8622 47.8122 58.8622L47.8125 58.863Z",
            fill: "#F1EAFF"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M41.6953 50.065H30.775C30.3045 50.065 29.9228 49.6827 29.9228 49.2126C29.9228 48.7425 30.3045 48.3595 30.775 48.3595H41.696C42.1665 48.3595 42.5482 48.7417 42.5482 49.2126C42.5482 49.6835 42.1665 50.065 41.6955 50.065H41.6953ZM26.7069 50.065H24.797C24.3265 50.065 23.9453 49.6827 23.9453 49.2126C23.9453 48.7425 24.3267 48.3595 24.797 48.3595H26.7069C27.1774 48.3595 27.5591 48.7417 27.5591 49.2126C27.5591 49.6835 27.1779 50.065 26.7069 50.065Z",
            fill: "#F1EAFF"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M41.695 54.9497H39.7856C39.3151 54.9497 38.9332 54.5669 38.9332 54.0965C38.9332 53.6262 39.3151 53.2442 39.7856 53.2442H41.695C42.165 53.2442 42.5472 53.6264 42.5472 54.0965C42.5472 54.5666 42.166 54.9497 41.695 54.9497ZM35.7188 54.9497H24.797C24.3265 54.9497 23.9453 54.5669 23.9453 54.0965C23.9453 53.6262 24.3267 53.2442 24.797 53.2442H35.7183C36.1888 53.2442 36.5699 53.6264 36.5699 54.0965C36.5699 54.5666 36.189 54.9497 35.7188 54.9497Z",
            fill: "#F1EAFF"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M31.6087 20.4977C33.1191 18.9861 33.1191 16.5353 31.6087 15.0237C30.0983 13.512 27.6495 13.512 26.1391 15.0237C24.6287 16.5353 24.6287 18.9861 26.1391 20.4977C27.6495 22.0093 30.0983 22.0093 31.6087 20.4977Z",
            fill: "#C9B5FE"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M39.4355 21.6315C41.5715 21.6315 43.3031 19.8985 43.3031 17.7608C43.3031 15.623 41.5715 13.89 39.4355 13.89C37.2995 13.89 35.5679 15.623 35.5679 17.7608C35.5679 19.8985 37.2995 21.6315 39.4355 21.6315Z",
            fill: "#C9B5FE"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M49.9999 21.6315C47.8677 21.6315 46.1323 19.8955 46.1323 17.7608C46.1323 15.626 47.8675 13.89 49.9999 13.89C52.1324 13.89 53.8678 15.626 53.8678 17.7608C53.8678 19.8955 52.1321 21.6315 49.9999 21.6315Z",
            fill: "#C9B5FE"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M75.3196 20.5993H60.0099C59.5394 20.5993 59.1582 20.2173 59.1582 19.747V15.7755C59.1582 15.3047 59.5401 14.9227 60.0099 14.9227H75.3196C75.7893 14.9227 76.1712 15.3047 76.1712 15.7755V19.747C76.1712 20.2173 75.7893 20.5993 75.3196 20.5993Z",
            fill: "#C9B5FE"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M80.2423 64.0286H77.3945C76.5705 64.0286 75.9014 63.3964 75.8025 62.525L75.4992 59.8681C75.1547 59.7471 74.8167 59.6066 74.4868 59.4476L72.4211 61.0888C71.745 61.6239 70.7591 61.6 70.1831 61.0246L68.1952 59.0345C67.6143 58.4527 67.5861 57.532 68.131 56.8456L69.7953 54.7502C69.6374 54.4211 69.497 54.0823 69.3759 53.7375L66.7552 53.4357C65.8648 53.3332 65.2188 52.6486 65.2188 51.8065V48.9924C65.2188 48.1688 65.8504 47.4986 66.7206 47.3984L69.3759 47.0953C69.4973 46.7505 69.6377 46.4117 69.7966 46.0821L68.1567 44.0147C67.5997 43.3108 67.6269 42.3693 68.2219 41.7741L70.2085 39.7853C70.7748 39.2215 71.7399 39.1978 72.398 39.7224L74.4894 41.3868C74.8192 41.2278 75.1573 41.0877 75.5022 40.9662L75.8033 38.3442C75.9044 37.4536 76.5893 36.8068 77.4312 36.8068L80.2066 36.8073C81.0475 36.8073 81.732 37.4539 81.8344 38.3447L82.1355 40.9662C82.4805 41.0877 82.8185 41.2283 83.1486 41.3873L85.2411 39.7216C85.8976 39.1981 86.8648 39.2215 87.429 39.7859L89.4169 41.7754C90.0116 42.3711 90.0386 43.3131 89.4816 44.0152L87.8412 46.0826C88.0006 46.4127 88.141 46.7513 88.2619 47.0958L90.9172 47.3989C91.7881 47.4991 92.4195 48.1698 92.4195 48.9934V51.807C92.4195 52.6491 91.7724 53.3345 90.8823 53.4362L88.2624 53.738C88.141 54.0833 88.0006 54.4211 87.8422 54.7517L89.506 56.8448C90.0514 57.532 90.0242 58.4532 89.4413 59.036L87.4546 61.0248C86.8761 61.6015 85.891 61.6252 85.2167 61.0891L83.1509 59.4478C82.8211 59.6068 82.4836 59.7473 82.1391 59.8683L81.8357 62.5258C81.7359 63.3961 81.0654 64.0283 80.243 64.0283L80.2423 64.0286ZM78.8185 56.5278C82.1845 56.5278 84.923 53.7866 84.923 50.4178C84.923 47.049 82.184 44.3083 78.8185 44.3083C75.453 44.3083 72.7134 47.049 72.7134 50.4178C72.7134 53.7866 75.4524 56.5278 78.8185 56.5278Z",
            fill: "#A079E9"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M11.007 36.0283C9.03656 36.0283 7.43359 34.4253 7.43359 32.4549C7.43359 30.4844 9.03656 28.8815 11.007 28.8815C12.9774 28.8815 14.5804 30.4844 14.5804 32.4549C14.5804 34.4253 12.9774 36.0283 11.007 36.0283ZM11.007 29.7618C9.52217 29.7618 8.31396 30.97 8.31396 32.4549C8.31396 33.9397 9.52217 35.1479 11.007 35.1479C12.4918 35.1479 13.7001 33.9401 13.7001 32.4549C13.7001 30.9697 12.4922 29.7618 11.007 29.7618Z",
            fill: "#CAB9FF"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M12.8073 32.8784C13.042 31.8837 12.426 30.8871 11.4314 30.6524C10.4367 30.4176 9.4401 31.0336 9.20534 32.0283C8.97058 33.0229 9.58659 34.0195 10.5812 34.2543C11.5759 34.489 12.5725 33.873 12.8073 32.8784Z",
            fill: "#CAB9FF"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M20.344 7.80023C20.9355 7.80023 21.415 7.32072 21.415 6.72922C21.415 6.13771 20.9355 5.6582 20.344 5.6582C19.7525 5.6582 19.2729 6.13771 19.2729 6.72922C19.2729 7.32072 19.7525 7.80023 20.344 7.80023Z",
            fill: "#CAB9FF"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M95.9001 57.514C96.4916 57.514 96.9711 57.0345 96.9711 56.443C96.9711 55.8515 96.4916 55.3719 95.9001 55.3719C95.3086 55.3719 94.8291 55.8515 94.8291 56.443C94.8291 57.0345 95.3086 57.514 95.9001 57.514Z",
            fill: "#CAB9FF"
          }
        )
      ] });
    };
    const WrongDomain = () => {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "100", height: "102", viewBox: "0 0 432 441", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            opacity: "0.09",
            d: "M382.5 343.622C410.321 268.125 356.025 176.5 301.461 164.82C250.19 153.844 216.184 217.203 165.266 200.695C120.915 186.315 119.65 129.468 90.0401 128.596C57.3941 127.634 15.0629 195.457 18.6184 258.19C23.8769 350.966 129.862 439.107 234.685 433.741C244.429 433.242 352.114 426.077 382.5 343.622Z",
            fill: "#9359D9"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M332.474 282.473C342.587 282.61 350.703 290.944 350.566 301.052C350.43 311.16 342.091 319.271 331.978 319.134C321.865 318.997 313.749 310.664 313.886 300.556C314.022 290.448 322.361 282.336 332.474 282.473ZM332.039 314.618C339.66 314.721 345.945 308.608 346.048 300.991C346.151 293.374 340.034 287.092 332.413 286.989C324.792 286.886 318.507 292.998 318.404 300.617C318.301 308.235 324.416 314.515 332.039 314.618Z",
            fill: "#CAB9FF"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M323.016 298.506C321.742 303.592 324.834 308.747 329.923 310.02C335.012 311.294 340.169 308.203 341.443 303.117C342.717 298.031 339.625 292.876 334.536 291.603C329.447 290.33 324.29 293.42 323.016 298.506Z",
            fill: "#CAB9FF"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M101.91 29.4781C100.637 34.5643 103.729 39.7194 108.817 40.9923C113.906 42.2658 119.064 39.1751 120.338 34.0889C121.612 29.0032 118.519 23.8482 113.431 22.5747C108.342 21.3017 103.184 24.3924 101.91 29.4781Z",
            fill: "#CAB9FF"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M282.595 426.627C279.559 426.585 277.065 429.012 277.023 432.046C276.982 435.08 279.41 437.573 282.446 437.614C285.482 437.656 287.977 435.229 288.018 432.195C288.059 429.161 285.63 426.668 282.595 426.627Z",
            fill: "#CAB9FF"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M5.64592 319.633C2.61009 319.592 0.115828 322.018 0.0747934 325.053C0.0337585 328.087 2.46148 330.58 5.49731 330.621C8.53315 330.663 11.0274 328.236 11.0684 325.201C11.1095 322.167 8.68175 319.674 5.64592 319.633Z",
            fill: "#CAB9FF"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M209.198 31.9116H399.338L431.471 64.2663L399.338 96.6211H209.198V31.9116Z", fill: "#A079E9" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M209.198 163.547H385.598L417.731 195.902L385.598 228.256H209.198V163.547Z", fill: "#A079E9" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M176.179 163.547L37.8953 163.547L5.76213 131.192L37.8953 98.8372L176.179 98.8372L176.179 163.547Z",
            fill: "#7448C6"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "176.4", width: "32.798", height: "421.942", fill: "#CDB3FF" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "111.247", y: "441", width: "19.0583", height: "163.547", transform: "rotate(-90 111.247 441)", fill: "#CDB3FF" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "192.799", cy: "64.2663", r: "7.97789", fill: "#ECE4FB" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "192.799", cy: "131.192", r: "7.97789", fill: "#ECE4FB" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "192.799", cy: "198.118", r: "7.97789", fill: "#ECE4FB" })
      ] });
    };
    const GetActiveTabURL = (details, isURLChange) => {
      if (isURLChange && details.frameId !== 0) {
        return Promise.resolve();
      }
      return new Promise((resolve, reject) => {
        chrome.tabs.get(details.tabId, (tab) => {
          if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError);
            reject(chrome.runtime.lastError);
          } else {
            resolve(tab.url);
          }
        });
      });
    };
    const Cancel = createSvgIcon$1(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
      d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
    }), "Cancel");
    const CheckCircle = createSvgIcon$1(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
      d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
    }), "CheckCircle");
    const Delete = createSvgIcon$1(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
      d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
    }), "Delete");
    const Error$1 = createSvgIcon$1(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
      d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
    }), "Error");
    const ExpandMore = createSvgIcon$1(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
      d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
    }), "ExpandMore");
    const SimpleTable = ({ rows }) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Grid$1, { container: true, spacing: 1, pl: 1, pr: 1, children: rows.map((row, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(React$1.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid$1, { item: true, xs: row.position === "top" ? 12 : 3.5, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", pr: 1, align: "left", sx: { fontWeight: 600 }, children: row.label }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid$1, { item: true, xs: row.position === "top" ? 12 : 8.5, children: row.fancyValue ? row.fancyValue : /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", align: "left", children: row.value }) }),
        index !== rows.length - 1 && // Add a divider unless it's the last row
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid$1, { item: true, xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Divider$1, {}) })
      ] }, index)) });
    };
    const TagStatus = ({ tagIsInstalled, tagConfig }) => {
      var _a, _b;
      const [legacyTag, setLegacyTag] = reactExports.useState(false);
      reactExports.useEffect(() => {
        if (tagConfig == null ? void 0 : tagConfig.version) {
          const version = tagConfig.version.split(".");
          if (version[0] < "3") {
            setLegacyTag(true);
          }
        }
      }, [tagConfig]);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { children: tagIsInstalled ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack$1, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Stack$1,
          {
            direction: "row",
            spacing: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 3,
            p: 1,
            mt: 1,
            mb: 1,
            sx: {
              background: "linear-gradient(white, white) padding-box, linear-gradient(90deg, #8610D3 39%, #D532CA 72%, #FF9A01 100%) border-box",
              borderRadius: 2,
              border: "4px solid transparent"
            },
            children: legacyTag ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Cancel, { style: { fontSize: 30, color: "#F00" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body1", children: [
                "You are using a deprecated version of the Lytics SDK",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(Chip$1, { label: `v${tagConfig == null ? void 0 : tagConfig.version}`, size: "small", sx: { ml: 0.5 } })
              ] })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { style: { fontSize: 30, color: "#00D27C" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body1", children: [
                "Lytics JavaScript SDK Installed",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(Chip$1, { label: `v${tagConfig == null ? void 0 : tagConfig.version}`, size: "small", sx: { ml: 0.5 } })
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { mt: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          SimpleTable,
          {
            rows: [
              { label: "Account ID", value: (_a = tagConfig == null ? void 0 : tagConfig.cid) == null ? void 0 : _a[0] },
              { label: "Stream", value: (tagConfig == null ? void 0 : tagConfig.stream) || "default" },
              { label: "Cookie Name", value: tagConfig == null ? void 0 : tagConfig.cookie },
              { label: "Profile Key", value: (_b = tagConfig == null ? void 0 : tagConfig.entity) == null ? void 0 : _b.byFieldKey },
              { label: "3rd Party Cookies", value: (tagConfig == null ? void 0 : tagConfig.loadid) ? "Enabled" : "Disabled" }
            ]
          }
        ) })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack$1, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { mt: 2, mb: 0, textAlign: "center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress$1, { color: "secondary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Stack$1,
          {
            direction: "row",
            spacing: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 3,
            mt: 1,
            mb: 1,
            p: 1,
            sx: {
              background: "linear-gradient(white, white) padding-box, linear-gradient(to right, #FCC504, #E80339) border-box",
              borderRadius: 2,
              border: "4px solid transparent"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Error$1, { style: { fontSize: 26, color: "#FF9A01" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: "Searching for Lytics JavaScript SDK" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", align: "center", p: 1, children: [
          "We have not been able to find the Lytics JavaScript SDK on this page. We'll continue checking but if you haven't yet installed the tag please refer to our",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "https://docs.lytics.com/docs/lytics-javascript-tag#installation",
              target: "_blank",
              rel: "noreferrer",
              children: "Lytics JavaScript SDK documentation"
            }
          ),
          "."
        ] }) })
      ] }) });
    };
    var main = { exports: {} };
    (function(module2, exports2) {
      !function(e2, t2) {
        module2.exports = t2(reactExports);
      }(commonjsGlobal, function(e2) {
        return function(e3) {
          var t2 = {};
          function n2(a) {
            if (t2[a])
              return t2[a].exports;
            var r = t2[a] = { i: a, l: false, exports: {} };
            return e3[a].call(r.exports, r, r.exports, n2), r.l = true, r.exports;
          }
          return n2.m = e3, n2.c = t2, n2.d = function(e4, t3, a) {
            n2.o(e4, t3) || Object.defineProperty(e4, t3, { enumerable: true, get: a });
          }, n2.r = function(e4) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e4, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e4, "__esModule", { value: true });
          }, n2.t = function(e4, t3) {
            if (1 & t3 && (e4 = n2(e4)), 8 & t3)
              return e4;
            if (4 & t3 && "object" == typeof e4 && e4 && e4.__esModule)
              return e4;
            var a = /* @__PURE__ */ Object.create(null);
            if (n2.r(a), Object.defineProperty(a, "default", { enumerable: true, value: e4 }), 2 & t3 && "string" != typeof e4)
              for (var r in e4)
                n2.d(a, r, (function(t4) {
                  return e4[t4];
                }).bind(null, r));
            return a;
          }, n2.n = function(e4) {
            var t3 = e4 && e4.__esModule ? function() {
              return e4.default;
            } : function() {
              return e4;
            };
            return n2.d(t3, "a", t3), t3;
          }, n2.o = function(e4, t3) {
            return Object.prototype.hasOwnProperty.call(e4, t3);
          }, n2.p = "", n2(n2.s = 48);
        }([function(t2, n2) {
          t2.exports = e2;
        }, function(e3, t2) {
          var n2 = e3.exports = { version: "2.6.12" };
          "number" == typeof __e && (__e = n2);
        }, function(e3, t2, n2) {
          var a = n2(26)("wks"), r = n2(17), o = n2(3).Symbol, i = "function" == typeof o;
          (e3.exports = function(e4) {
            return a[e4] || (a[e4] = i && o[e4] || (i ? o : r)("Symbol." + e4));
          }).store = a;
        }, function(e3, t2) {
          var n2 = e3.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
          "number" == typeof __g && (__g = n2);
        }, function(e3, t2, n2) {
          e3.exports = !n2(8)(function() {
            return 7 != Object.defineProperty({}, "a", { get: function() {
              return 7;
            } }).a;
          });
        }, function(e3, t2) {
          var n2 = {}.hasOwnProperty;
          e3.exports = function(e4, t3) {
            return n2.call(e4, t3);
          };
        }, function(e3, t2, n2) {
          var a = n2(7), r = n2(16);
          e3.exports = n2(4) ? function(e4, t3, n3) {
            return a.f(e4, t3, r(1, n3));
          } : function(e4, t3, n3) {
            return e4[t3] = n3, e4;
          };
        }, function(e3, t2, n2) {
          var a = n2(10), r = n2(35), o = n2(23), i = Object.defineProperty;
          t2.f = n2(4) ? Object.defineProperty : function(e4, t3, n3) {
            if (a(e4), t3 = o(t3, true), a(n3), r)
              try {
                return i(e4, t3, n3);
              } catch (e5) {
              }
            if ("get" in n3 || "set" in n3)
              throw TypeError("Accessors not supported!");
            return "value" in n3 && (e4[t3] = n3.value), e4;
          };
        }, function(e3, t2) {
          e3.exports = function(e4) {
            try {
              return !!e4();
            } catch (e5) {
              return true;
            }
          };
        }, function(e3, t2, n2) {
          var a = n2(40), r = n2(22);
          e3.exports = function(e4) {
            return a(r(e4));
          };
        }, function(e3, t2, n2) {
          var a = n2(11);
          e3.exports = function(e4) {
            if (!a(e4))
              throw TypeError(e4 + " is not an object!");
            return e4;
          };
        }, function(e3, t2) {
          e3.exports = function(e4) {
            return "object" == typeof e4 ? null !== e4 : "function" == typeof e4;
          };
        }, function(e3, t2) {
          e3.exports = {};
        }, function(e3, t2, n2) {
          var a = n2(39), r = n2(27);
          e3.exports = Object.keys || function(e4) {
            return a(e4, r);
          };
        }, function(e3, t2) {
          e3.exports = true;
        }, function(e3, t2, n2) {
          var a = n2(3), r = n2(1), o = n2(53), i = n2(6), s = n2(5), c2 = function(e4, t3, n3) {
            var l2, u2, f2, p2 = e4 & c2.F, d2 = e4 & c2.G, b2 = e4 & c2.S, h2 = e4 & c2.P, v2 = e4 & c2.B, m2 = e4 & c2.W, y = d2 ? r : r[t3] || (r[t3] = {}), g2 = y.prototype, E = d2 ? a : b2 ? a[t3] : (a[t3] || {}).prototype;
            for (l2 in d2 && (n3 = t3), n3)
              (u2 = !p2 && E && void 0 !== E[l2]) && s(y, l2) || (f2 = u2 ? E[l2] : n3[l2], y[l2] = d2 && "function" != typeof E[l2] ? n3[l2] : v2 && u2 ? o(f2, a) : m2 && E[l2] == f2 ? function(e5) {
                var t4 = function(t5, n4, a2) {
                  if (this instanceof e5) {
                    switch (arguments.length) {
                      case 0:
                        return new e5();
                      case 1:
                        return new e5(t5);
                      case 2:
                        return new e5(t5, n4);
                    }
                    return new e5(t5, n4, a2);
                  }
                  return e5.apply(this, arguments);
                };
                return t4.prototype = e5.prototype, t4;
              }(f2) : h2 && "function" == typeof f2 ? o(Function.call, f2) : f2, h2 && ((y.virtual || (y.virtual = {}))[l2] = f2, e4 & c2.R && g2 && !g2[l2] && i(g2, l2, f2)));
          };
          c2.F = 1, c2.G = 2, c2.S = 4, c2.P = 8, c2.B = 16, c2.W = 32, c2.U = 64, c2.R = 128, e3.exports = c2;
        }, function(e3, t2) {
          e3.exports = function(e4, t3) {
            return { enumerable: !(1 & e4), configurable: !(2 & e4), writable: !(4 & e4), value: t3 };
          };
        }, function(e3, t2) {
          var n2 = 0, a = Math.random();
          e3.exports = function(e4) {
            return "Symbol(".concat(void 0 === e4 ? "" : e4, ")_", (++n2 + a).toString(36));
          };
        }, function(e3, t2, n2) {
          var a = n2(22);
          e3.exports = function(e4) {
            return Object(a(e4));
          };
        }, function(e3, t2) {
          t2.f = {}.propertyIsEnumerable;
        }, function(e3, t2, n2) {
          var a = n2(52)(true);
          n2(34)(String, "String", function(e4) {
            this._t = String(e4), this._i = 0;
          }, function() {
            var e4, t3 = this._t, n3 = this._i;
            return n3 >= t3.length ? { value: void 0, done: true } : (e4 = a(t3, n3), this._i += e4.length, { value: e4, done: false });
          });
        }, function(e3, t2) {
          var n2 = Math.ceil, a = Math.floor;
          e3.exports = function(e4) {
            return isNaN(e4 = +e4) ? 0 : (e4 > 0 ? a : n2)(e4);
          };
        }, function(e3, t2) {
          e3.exports = function(e4) {
            if (null == e4)
              throw TypeError("Can't call method on  " + e4);
            return e4;
          };
        }, function(e3, t2, n2) {
          var a = n2(11);
          e3.exports = function(e4, t3) {
            if (!a(e4))
              return e4;
            var n3, r;
            if (t3 && "function" == typeof (n3 = e4.toString) && !a(r = n3.call(e4)))
              return r;
            if ("function" == typeof (n3 = e4.valueOf) && !a(r = n3.call(e4)))
              return r;
            if (!t3 && "function" == typeof (n3 = e4.toString) && !a(r = n3.call(e4)))
              return r;
            throw TypeError("Can't convert object to primitive value");
          };
        }, function(e3, t2) {
          var n2 = {}.toString;
          e3.exports = function(e4) {
            return n2.call(e4).slice(8, -1);
          };
        }, function(e3, t2, n2) {
          var a = n2(26)("keys"), r = n2(17);
          e3.exports = function(e4) {
            return a[e4] || (a[e4] = r(e4));
          };
        }, function(e3, t2, n2) {
          var a = n2(1), r = n2(3), o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
          (e3.exports = function(e4, t3) {
            return o[e4] || (o[e4] = void 0 !== t3 ? t3 : {});
          })("versions", []).push({ version: a.version, mode: n2(14) ? "pure" : "global", copyright: "© 2020 Denis Pushkarev (zloirock.ru)" });
        }, function(e3, t2) {
          e3.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
        }, function(e3, t2, n2) {
          var a = n2(7).f, r = n2(5), o = n2(2)("toStringTag");
          e3.exports = function(e4, t3, n3) {
            e4 && !r(e4 = n3 ? e4 : e4.prototype, o) && a(e4, o, { configurable: true, value: t3 });
          };
        }, function(e3, t2, n2) {
          n2(62);
          for (var a = n2(3), r = n2(6), o = n2(12), i = n2(2)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), c2 = 0; c2 < s.length; c2++) {
            var l2 = s[c2], u2 = a[l2], f2 = u2 && u2.prototype;
            f2 && !f2[i] && r(f2, i, l2), o[l2] = o.Array;
          }
        }, function(e3, t2, n2) {
          t2.f = n2(2);
        }, function(e3, t2, n2) {
          var a = n2(3), r = n2(1), o = n2(14), i = n2(30), s = n2(7).f;
          e3.exports = function(e4) {
            var t3 = r.Symbol || (r.Symbol = o ? {} : a.Symbol || {});
            "_" == e4.charAt(0) || e4 in t3 || s(t3, e4, { value: i.f(e4) });
          };
        }, function(e3, t2) {
          t2.f = Object.getOwnPropertySymbols;
        }, function(e3, t2) {
          e3.exports = function(e4, t3, n2) {
            return Math.min(Math.max(e4, t3), n2);
          };
        }, function(e3, t2, n2) {
          var a = n2(14), r = n2(15), o = n2(37), i = n2(6), s = n2(12), c2 = n2(55), l2 = n2(28), u2 = n2(61), f2 = n2(2)("iterator"), p2 = !([].keys && "next" in [].keys()), d2 = function() {
            return this;
          };
          e3.exports = function(e4, t3, n3, b2, h2, v2, m2) {
            c2(n3, t3, b2);
            var y, g2, E, j = function(e5) {
              if (!p2 && e5 in O)
                return O[e5];
              switch (e5) {
                case "keys":
                case "values":
                  return function() {
                    return new n3(this, e5);
                  };
              }
              return function() {
                return new n3(this, e5);
              };
            }, x = t3 + " Iterator", _2 = "values" == h2, k2 = false, O = e4.prototype, C = O[f2] || O["@@iterator"] || h2 && O[h2], S = C || j(h2), w = h2 ? _2 ? j("entries") : S : void 0, A = "Array" == t3 && O.entries || C;
            if (A && (E = u2(A.call(new e4()))) !== Object.prototype && E.next && (l2(E, x, true), a || "function" == typeof E[f2] || i(E, f2, d2)), _2 && C && "values" !== C.name && (k2 = true, S = function() {
              return C.call(this);
            }), a && !m2 || !p2 && !k2 && O[f2] || i(O, f2, S), s[t3] = S, s[x] = d2, h2)
              if (y = { values: _2 ? S : j("values"), keys: v2 ? S : j("keys"), entries: w }, m2)
                for (g2 in y)
                  g2 in O || o(O, g2, y[g2]);
              else
                r(r.P + r.F * (p2 || k2), t3, y);
            return y;
          };
        }, function(e3, t2, n2) {
          e3.exports = !n2(4) && !n2(8)(function() {
            return 7 != Object.defineProperty(n2(36)("div"), "a", { get: function() {
              return 7;
            } }).a;
          });
        }, function(e3, t2, n2) {
          var a = n2(11), r = n2(3).document, o = a(r) && a(r.createElement);
          e3.exports = function(e4) {
            return o ? r.createElement(e4) : {};
          };
        }, function(e3, t2, n2) {
          e3.exports = n2(6);
        }, function(e3, t2, n2) {
          var a = n2(10), r = n2(56), o = n2(27), i = n2(25)("IE_PROTO"), s = function() {
          }, c2 = function() {
            var e4, t3 = n2(36)("iframe"), a2 = o.length;
            for (t3.style.display = "none", n2(60).appendChild(t3), t3.src = "javascript:", (e4 = t3.contentWindow.document).open(), e4.write("<script>document.F=Object<\/script>"), e4.close(), c2 = e4.F; a2--; )
              delete c2.prototype[o[a2]];
            return c2();
          };
          e3.exports = Object.create || function(e4, t3) {
            var n3;
            return null !== e4 ? (s.prototype = a(e4), n3 = new s(), s.prototype = null, n3[i] = e4) : n3 = c2(), void 0 === t3 ? n3 : r(n3, t3);
          };
        }, function(e3, t2, n2) {
          var a = n2(5), r = n2(9), o = n2(57)(false), i = n2(25)("IE_PROTO");
          e3.exports = function(e4, t3) {
            var n3, s = r(e4), c2 = 0, l2 = [];
            for (n3 in s)
              n3 != i && a(s, n3) && l2.push(n3);
            for (; t3.length > c2; )
              a(s, n3 = t3[c2++]) && (~o(l2, n3) || l2.push(n3));
            return l2;
          };
        }, function(e3, t2, n2) {
          var a = n2(24);
          e3.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e4) {
            return "String" == a(e4) ? e4.split("") : Object(e4);
          };
        }, function(e3, t2, n2) {
          var a = n2(39), r = n2(27).concat("length", "prototype");
          t2.f = Object.getOwnPropertyNames || function(e4) {
            return a(e4, r);
          };
        }, function(e3, t2, n2) {
          var a = n2(24), r = n2(2)("toStringTag"), o = "Arguments" == a(/* @__PURE__ */ function() {
            return arguments;
          }());
          e3.exports = function(e4) {
            var t3, n3, i;
            return void 0 === e4 ? "Undefined" : null === e4 ? "Null" : "string" == typeof (n3 = function(e5, t4) {
              try {
                return e5[t4];
              } catch (e6) {
              }
            }(t3 = Object(e4), r)) ? n3 : o ? a(t3) : "Object" == (i = a(t3)) && "function" == typeof t3.callee ? "Arguments" : i;
          };
        }, function(e3, t2) {
          var n2;
          n2 = /* @__PURE__ */ function() {
            return this;
          }();
          try {
            n2 = n2 || new Function("return this")();
          } catch (e4) {
            "object" == typeof window && (n2 = window);
          }
          e3.exports = n2;
        }, function(e3, t2) {
          var n2 = /-?\d+(\.\d+)?%?/g;
          e3.exports = function(e4) {
            return e4.match(n2);
          };
        }, function(e3, t2, n2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.getBase16Theme = t2.createStyling = t2.invertTheme = void 0;
          var a = d2(n2(49)), r = d2(n2(76)), o = d2(n2(81)), i = d2(n2(89)), s = d2(n2(93)), c2 = function(e4) {
            if (e4 && e4.__esModule)
              return e4;
            var t3 = {};
            if (null != e4)
              for (var n3 in e4)
                Object.prototype.hasOwnProperty.call(e4, n3) && (t3[n3] = e4[n3]);
            return t3.default = e4, t3;
          }(n2(94)), l2 = d2(n2(132)), u2 = d2(n2(133)), f2 = d2(n2(138)), p2 = n2(139);
          function d2(e4) {
            return e4 && e4.__esModule ? e4 : { default: e4 };
          }
          var b2 = c2.default, h2 = (0, i.default)(b2), v2 = (0, f2.default)(u2.default, p2.rgb2yuv, function(e4) {
            var t3, n3 = (0, o.default)(e4, 3), a2 = n3[0], r2 = n3[1], i2 = n3[2];
            return [(t3 = a2, t3 < 0.25 ? 1 : t3 < 0.5 ? 0.9 - t3 : 1.1 - t3), r2, i2];
          }, p2.yuv2rgb, l2.default), m2 = function(e4) {
            return function(t3) {
              return { className: [t3.className, e4.className].filter(Boolean).join(" "), style: (0, r.default)({}, t3.style || {}, e4.style || {}) };
            };
          }, y = function(e4, t3) {
            var n3 = (0, i.default)(t3);
            for (var o2 in e4)
              -1 === n3.indexOf(o2) && n3.push(o2);
            return n3.reduce(function(n4, o3) {
              return n4[o3] = function(e5, t4) {
                if (void 0 === e5)
                  return t4;
                if (void 0 === t4)
                  return e5;
                var n5 = void 0 === e5 ? "undefined" : (0, a.default)(e5), o4 = void 0 === t4 ? "undefined" : (0, a.default)(t4);
                switch (n5) {
                  case "string":
                    switch (o4) {
                      case "string":
                        return [t4, e5].filter(Boolean).join(" ");
                      case "object":
                        return m2({ className: e5, style: t4 });
                      case "function":
                        return function(n6) {
                          for (var a2 = arguments.length, r2 = Array(a2 > 1 ? a2 - 1 : 0), o5 = 1; o5 < a2; o5++)
                            r2[o5 - 1] = arguments[o5];
                          return m2({ className: e5 })(t4.apply(void 0, [n6].concat(r2)));
                        };
                    }
                  case "object":
                    switch (o4) {
                      case "string":
                        return m2({ className: t4, style: e5 });
                      case "object":
                        return (0, r.default)({}, t4, e5);
                      case "function":
                        return function(n6) {
                          for (var a2 = arguments.length, r2 = Array(a2 > 1 ? a2 - 1 : 0), o5 = 1; o5 < a2; o5++)
                            r2[o5 - 1] = arguments[o5];
                          return m2({ style: e5 })(t4.apply(void 0, [n6].concat(r2)));
                        };
                    }
                  case "function":
                    switch (o4) {
                      case "string":
                        return function(n6) {
                          for (var a2 = arguments.length, r2 = Array(a2 > 1 ? a2 - 1 : 0), o5 = 1; o5 < a2; o5++)
                            r2[o5 - 1] = arguments[o5];
                          return e5.apply(void 0, [m2(n6)({ className: t4 })].concat(r2));
                        };
                      case "object":
                        return function(n6) {
                          for (var a2 = arguments.length, r2 = Array(a2 > 1 ? a2 - 1 : 0), o5 = 1; o5 < a2; o5++)
                            r2[o5 - 1] = arguments[o5];
                          return e5.apply(void 0, [m2(n6)({ style: t4 })].concat(r2));
                        };
                      case "function":
                        return function(n6) {
                          for (var a2 = arguments.length, r2 = Array(a2 > 1 ? a2 - 1 : 0), o5 = 1; o5 < a2; o5++)
                            r2[o5 - 1] = arguments[o5];
                          return e5.apply(void 0, [t4.apply(void 0, [n6].concat(r2))].concat(r2));
                        };
                    }
                }
              }(e4[o3], t3[o3]), n4;
            }, {});
          }, g2 = function(e4, t3) {
            for (var n3 = arguments.length, o2 = Array(n3 > 2 ? n3 - 2 : 0), s2 = 2; s2 < n3; s2++)
              o2[s2 - 2] = arguments[s2];
            if (null === t3)
              return e4;
            Array.isArray(t3) || (t3 = [t3]);
            var c3 = t3.map(function(t4) {
              return e4[t4];
            }).filter(Boolean), l3 = c3.reduce(function(e5, t4) {
              return "string" == typeof t4 ? e5.className = [e5.className, t4].filter(Boolean).join(" ") : "object" === (void 0 === t4 ? "undefined" : (0, a.default)(t4)) ? e5.style = (0, r.default)({}, e5.style, t4) : "function" == typeof t4 && (e5 = (0, r.default)({}, e5, t4.apply(void 0, [e5].concat(o2)))), e5;
            }, { className: "", style: {} });
            return l3.className || delete l3.className, 0 === (0, i.default)(l3.style).length && delete l3.style, l3;
          }, E = t2.invertTheme = function(e4) {
            return (0, i.default)(e4).reduce(function(t3, n3) {
              return t3[n3] = /^base/.test(n3) ? v2(e4[n3]) : "scheme" === n3 ? e4[n3] + ":inverted" : e4[n3], t3;
            }, {});
          }, j = (t2.createStyling = (0, s.default)(function(e4) {
            for (var t3 = arguments.length, n3 = Array(t3 > 3 ? t3 - 3 : 0), a2 = 3; a2 < t3; a2++)
              n3[a2 - 3] = arguments[a2];
            var o2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, c3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, l3 = o2.defaultBase16, u3 = void 0 === l3 ? b2 : l3, f3 = o2.base16Themes, p3 = void 0 === f3 ? null : f3, d3 = j(c3, p3);
            d3 && (c3 = (0, r.default)({}, d3, c3));
            var v3 = h2.reduce(function(e5, t4) {
              return e5[t4] = c3[t4] || u3[t4], e5;
            }, {}), m3 = (0, i.default)(c3).reduce(function(e5, t4) {
              return -1 === h2.indexOf(t4) ? (e5[t4] = c3[t4], e5) : e5;
            }, {}), E2 = e4(v3), x = y(m3, E2);
            return (0, s.default)(g2, 2).apply(void 0, [x].concat(n3));
          }, 3), t2.getBase16Theme = function(e4, t3) {
            if (e4 && e4.extend && (e4 = e4.extend), "string" == typeof e4) {
              var n3 = e4.split(":"), a2 = (0, o.default)(n3, 2), r2 = a2[0], i2 = a2[1];
              e4 = (t3 || {})[r2] || c2[r2], "inverted" === i2 && (e4 = E(e4));
            }
            return e4 && e4.hasOwnProperty("base00") ? e4 : void 0;
          });
        }, function(e3, t2, n2) {
          var a, r = "object" == typeof Reflect ? Reflect : null, o = r && "function" == typeof r.apply ? r.apply : function(e4, t3, n3) {
            return Function.prototype.apply.call(e4, t3, n3);
          };
          a = r && "function" == typeof r.ownKeys ? r.ownKeys : Object.getOwnPropertySymbols ? function(e4) {
            return Object.getOwnPropertyNames(e4).concat(Object.getOwnPropertySymbols(e4));
          } : function(e4) {
            return Object.getOwnPropertyNames(e4);
          };
          var i = Number.isNaN || function(e4) {
            return e4 != e4;
          };
          function s() {
            s.init.call(this);
          }
          e3.exports = s, e3.exports.once = function(e4, t3) {
            return new Promise(function(n3, a2) {
              function r2() {
                void 0 !== o2 && e4.removeListener("error", o2), n3([].slice.call(arguments));
              }
              var o2;
              "error" !== t3 && (o2 = function(n4) {
                e4.removeListener(t3, r2), a2(n4);
              }, e4.once("error", o2)), e4.once(t3, r2);
            });
          }, s.EventEmitter = s, s.prototype._events = void 0, s.prototype._eventsCount = 0, s.prototype._maxListeners = void 0;
          var c2 = 10;
          function l2(e4) {
            if ("function" != typeof e4)
              throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e4);
          }
          function u2(e4) {
            return void 0 === e4._maxListeners ? s.defaultMaxListeners : e4._maxListeners;
          }
          function f2(e4, t3, n3, a2) {
            var r2, o2, i2, s2;
            if (l2(n3), void 0 === (o2 = e4._events) ? (o2 = e4._events = /* @__PURE__ */ Object.create(null), e4._eventsCount = 0) : (void 0 !== o2.newListener && (e4.emit("newListener", t3, n3.listener ? n3.listener : n3), o2 = e4._events), i2 = o2[t3]), void 0 === i2)
              i2 = o2[t3] = n3, ++e4._eventsCount;
            else if ("function" == typeof i2 ? i2 = o2[t3] = a2 ? [n3, i2] : [i2, n3] : a2 ? i2.unshift(n3) : i2.push(n3), (r2 = u2(e4)) > 0 && i2.length > r2 && !i2.warned) {
              i2.warned = true;
              var c3 = new Error("Possible EventEmitter memory leak detected. " + i2.length + " " + String(t3) + " listeners added. Use emitter.setMaxListeners() to increase limit");
              c3.name = "MaxListenersExceededWarning", c3.emitter = e4, c3.type = t3, c3.count = i2.length, s2 = c3, console && console.warn && console.warn(s2);
            }
            return e4;
          }
          function p2() {
            if (!this.fired)
              return this.target.removeListener(this.type, this.wrapFn), this.fired = true, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
          }
          function d2(e4, t3, n3) {
            var a2 = { fired: false, wrapFn: void 0, target: e4, type: t3, listener: n3 }, r2 = p2.bind(a2);
            return r2.listener = n3, a2.wrapFn = r2, r2;
          }
          function b2(e4, t3, n3) {
            var a2 = e4._events;
            if (void 0 === a2)
              return [];
            var r2 = a2[t3];
            return void 0 === r2 ? [] : "function" == typeof r2 ? n3 ? [r2.listener || r2] : [r2] : n3 ? function(e5) {
              for (var t4 = new Array(e5.length), n4 = 0; n4 < t4.length; ++n4)
                t4[n4] = e5[n4].listener || e5[n4];
              return t4;
            }(r2) : v2(r2, r2.length);
          }
          function h2(e4) {
            var t3 = this._events;
            if (void 0 !== t3) {
              var n3 = t3[e4];
              if ("function" == typeof n3)
                return 1;
              if (void 0 !== n3)
                return n3.length;
            }
            return 0;
          }
          function v2(e4, t3) {
            for (var n3 = new Array(t3), a2 = 0; a2 < t3; ++a2)
              n3[a2] = e4[a2];
            return n3;
          }
          Object.defineProperty(s, "defaultMaxListeners", { enumerable: true, get: function() {
            return c2;
          }, set: function(e4) {
            if ("number" != typeof e4 || e4 < 0 || i(e4))
              throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e4 + ".");
            c2 = e4;
          } }), s.init = function() {
            void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
          }, s.prototype.setMaxListeners = function(e4) {
            if ("number" != typeof e4 || e4 < 0 || i(e4))
              throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e4 + ".");
            return this._maxListeners = e4, this;
          }, s.prototype.getMaxListeners = function() {
            return u2(this);
          }, s.prototype.emit = function(e4) {
            for (var t3 = [], n3 = 1; n3 < arguments.length; n3++)
              t3.push(arguments[n3]);
            var a2 = "error" === e4, r2 = this._events;
            if (void 0 !== r2)
              a2 = a2 && void 0 === r2.error;
            else if (!a2)
              return false;
            if (a2) {
              var i2;
              if (t3.length > 0 && (i2 = t3[0]), i2 instanceof Error)
                throw i2;
              var s2 = new Error("Unhandled error." + (i2 ? " (" + i2.message + ")" : ""));
              throw s2.context = i2, s2;
            }
            var c3 = r2[e4];
            if (void 0 === c3)
              return false;
            if ("function" == typeof c3)
              o(c3, this, t3);
            else {
              var l3 = c3.length, u3 = v2(c3, l3);
              for (n3 = 0; n3 < l3; ++n3)
                o(u3[n3], this, t3);
            }
            return true;
          }, s.prototype.addListener = function(e4, t3) {
            return f2(this, e4, t3, false);
          }, s.prototype.on = s.prototype.addListener, s.prototype.prependListener = function(e4, t3) {
            return f2(this, e4, t3, true);
          }, s.prototype.once = function(e4, t3) {
            return l2(t3), this.on(e4, d2(this, e4, t3)), this;
          }, s.prototype.prependOnceListener = function(e4, t3) {
            return l2(t3), this.prependListener(e4, d2(this, e4, t3)), this;
          }, s.prototype.removeListener = function(e4, t3) {
            var n3, a2, r2, o2, i2;
            if (l2(t3), void 0 === (a2 = this._events))
              return this;
            if (void 0 === (n3 = a2[e4]))
              return this;
            if (n3 === t3 || n3.listener === t3)
              0 == --this._eventsCount ? this._events = /* @__PURE__ */ Object.create(null) : (delete a2[e4], a2.removeListener && this.emit("removeListener", e4, n3.listener || t3));
            else if ("function" != typeof n3) {
              for (r2 = -1, o2 = n3.length - 1; o2 >= 0; o2--)
                if (n3[o2] === t3 || n3[o2].listener === t3) {
                  i2 = n3[o2].listener, r2 = o2;
                  break;
                }
              if (r2 < 0)
                return this;
              0 === r2 ? n3.shift() : function(e5, t4) {
                for (; t4 + 1 < e5.length; t4++)
                  e5[t4] = e5[t4 + 1];
                e5.pop();
              }(n3, r2), 1 === n3.length && (a2[e4] = n3[0]), void 0 !== a2.removeListener && this.emit("removeListener", e4, i2 || t3);
            }
            return this;
          }, s.prototype.off = s.prototype.removeListener, s.prototype.removeAllListeners = function(e4) {
            var t3, n3, a2;
            if (void 0 === (n3 = this._events))
              return this;
            if (void 0 === n3.removeListener)
              return 0 === arguments.length ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : void 0 !== n3[e4] && (0 == --this._eventsCount ? this._events = /* @__PURE__ */ Object.create(null) : delete n3[e4]), this;
            if (0 === arguments.length) {
              var r2, o2 = Object.keys(n3);
              for (a2 = 0; a2 < o2.length; ++a2)
                "removeListener" !== (r2 = o2[a2]) && this.removeAllListeners(r2);
              return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
            }
            if ("function" == typeof (t3 = n3[e4]))
              this.removeListener(e4, t3);
            else if (void 0 !== t3)
              for (a2 = t3.length - 1; a2 >= 0; a2--)
                this.removeListener(e4, t3[a2]);
            return this;
          }, s.prototype.listeners = function(e4) {
            return b2(this, e4, true);
          }, s.prototype.rawListeners = function(e4) {
            return b2(this, e4, false);
          }, s.listenerCount = function(e4, t3) {
            return "function" == typeof e4.listenerCount ? e4.listenerCount(t3) : h2.call(e4, t3);
          }, s.prototype.listenerCount = h2, s.prototype.eventNames = function() {
            return this._eventsCount > 0 ? a(this._events) : [];
          };
        }, function(e3, t2, n2) {
          e3.exports.Dispatcher = n2(140);
        }, function(e3, t2, n2) {
          e3.exports = n2(142);
        }, function(e3, t2, n2) {
          t2.__esModule = true;
          var a = i(n2(50)), r = i(n2(65)), o = "function" == typeof r.default && "symbol" == typeof a.default ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && "function" == typeof r.default && e4.constructor === r.default && e4 !== r.default.prototype ? "symbol" : typeof e4;
          };
          function i(e4) {
            return e4 && e4.__esModule ? e4 : { default: e4 };
          }
          t2.default = "function" == typeof r.default && "symbol" === o(a.default) ? function(e4) {
            return void 0 === e4 ? "undefined" : o(e4);
          } : function(e4) {
            return e4 && "function" == typeof r.default && e4.constructor === r.default && e4 !== r.default.prototype ? "symbol" : void 0 === e4 ? "undefined" : o(e4);
          };
        }, function(e3, t2, n2) {
          e3.exports = { default: n2(51), __esModule: true };
        }, function(e3, t2, n2) {
          n2(20), n2(29), e3.exports = n2(30).f("iterator");
        }, function(e3, t2, n2) {
          var a = n2(21), r = n2(22);
          e3.exports = function(e4) {
            return function(t3, n3) {
              var o, i, s = String(r(t3)), c2 = a(n3), l2 = s.length;
              return c2 < 0 || c2 >= l2 ? e4 ? "" : void 0 : (o = s.charCodeAt(c2)) < 55296 || o > 56319 || c2 + 1 === l2 || (i = s.charCodeAt(c2 + 1)) < 56320 || i > 57343 ? e4 ? s.charAt(c2) : o : e4 ? s.slice(c2, c2 + 2) : i - 56320 + (o - 55296 << 10) + 65536;
            };
          };
        }, function(e3, t2, n2) {
          var a = n2(54);
          e3.exports = function(e4, t3, n3) {
            if (a(e4), void 0 === t3)
              return e4;
            switch (n3) {
              case 1:
                return function(n4) {
                  return e4.call(t3, n4);
                };
              case 2:
                return function(n4, a2) {
                  return e4.call(t3, n4, a2);
                };
              case 3:
                return function(n4, a2, r) {
                  return e4.call(t3, n4, a2, r);
                };
            }
            return function() {
              return e4.apply(t3, arguments);
            };
          };
        }, function(e3, t2) {
          e3.exports = function(e4) {
            if ("function" != typeof e4)
              throw TypeError(e4 + " is not a function!");
            return e4;
          };
        }, function(e3, t2, n2) {
          var a = n2(38), r = n2(16), o = n2(28), i = {};
          n2(6)(i, n2(2)("iterator"), function() {
            return this;
          }), e3.exports = function(e4, t3, n3) {
            e4.prototype = a(i, { next: r(1, n3) }), o(e4, t3 + " Iterator");
          };
        }, function(e3, t2, n2) {
          var a = n2(7), r = n2(10), o = n2(13);
          e3.exports = n2(4) ? Object.defineProperties : function(e4, t3) {
            r(e4);
            for (var n3, i = o(t3), s = i.length, c2 = 0; s > c2; )
              a.f(e4, n3 = i[c2++], t3[n3]);
            return e4;
          };
        }, function(e3, t2, n2) {
          var a = n2(9), r = n2(58), o = n2(59);
          e3.exports = function(e4) {
            return function(t3, n3, i) {
              var s, c2 = a(t3), l2 = r(c2.length), u2 = o(i, l2);
              if (e4 && n3 != n3) {
                for (; l2 > u2; )
                  if ((s = c2[u2++]) != s)
                    return true;
              } else
                for (; l2 > u2; u2++)
                  if ((e4 || u2 in c2) && c2[u2] === n3)
                    return e4 || u2 || 0;
              return !e4 && -1;
            };
          };
        }, function(e3, t2, n2) {
          var a = n2(21), r = Math.min;
          e3.exports = function(e4) {
            return e4 > 0 ? r(a(e4), 9007199254740991) : 0;
          };
        }, function(e3, t2, n2) {
          var a = n2(21), r = Math.max, o = Math.min;
          e3.exports = function(e4, t3) {
            return (e4 = a(e4)) < 0 ? r(e4 + t3, 0) : o(e4, t3);
          };
        }, function(e3, t2, n2) {
          var a = n2(3).document;
          e3.exports = a && a.documentElement;
        }, function(e3, t2, n2) {
          var a = n2(5), r = n2(18), o = n2(25)("IE_PROTO"), i = Object.prototype;
          e3.exports = Object.getPrototypeOf || function(e4) {
            return e4 = r(e4), a(e4, o) ? e4[o] : "function" == typeof e4.constructor && e4 instanceof e4.constructor ? e4.constructor.prototype : e4 instanceof Object ? i : null;
          };
        }, function(e3, t2, n2) {
          var a = n2(63), r = n2(64), o = n2(12), i = n2(9);
          e3.exports = n2(34)(Array, "Array", function(e4, t3) {
            this._t = i(e4), this._i = 0, this._k = t3;
          }, function() {
            var e4 = this._t, t3 = this._k, n3 = this._i++;
            return !e4 || n3 >= e4.length ? (this._t = void 0, r(1)) : r(0, "keys" == t3 ? n3 : "values" == t3 ? e4[n3] : [n3, e4[n3]]);
          }, "values"), o.Arguments = o.Array, a("keys"), a("values"), a("entries");
        }, function(e3, t2) {
          e3.exports = function() {
          };
        }, function(e3, t2) {
          e3.exports = function(e4, t3) {
            return { value: t3, done: !!e4 };
          };
        }, function(e3, t2, n2) {
          e3.exports = { default: n2(66), __esModule: true };
        }, function(e3, t2, n2) {
          n2(67), n2(73), n2(74), n2(75), e3.exports = n2(1).Symbol;
        }, function(e3, t2, n2) {
          var a = n2(3), r = n2(5), o = n2(4), i = n2(15), s = n2(37), c2 = n2(68).KEY, l2 = n2(8), u2 = n2(26), f2 = n2(28), p2 = n2(17), d2 = n2(2), b2 = n2(30), h2 = n2(31), v2 = n2(69), m2 = n2(70), y = n2(10), g2 = n2(11), E = n2(18), j = n2(9), x = n2(23), _2 = n2(16), k2 = n2(38), O = n2(71), C = n2(72), S = n2(32), w = n2(7), A = n2(13), M = C.f, P = w.f, F = O.f, D = a.Symbol, I = a.JSON, R = I && I.stringify, L = d2("_hidden"), B = d2("toPrimitive"), N = {}.propertyIsEnumerable, z = u2("symbol-registry"), T = u2("symbols"), q2 = u2("op-symbols"), V = Object.prototype, K = "function" == typeof D && !!S.f, W = a.QObject, H = !W || !W.prototype || !W.prototype.findChild, U = o && l2(function() {
            return 7 != k2(P({}, "a", { get: function() {
              return P(this, "a", { value: 7 }).a;
            } })).a;
          }) ? function(e4, t3, n3) {
            var a2 = M(V, t3);
            a2 && delete V[t3], P(e4, t3, n3), a2 && e4 !== V && P(V, t3, a2);
          } : P, G = function(e4) {
            var t3 = T[e4] = k2(D.prototype);
            return t3._k = e4, t3;
          }, J = K && "symbol" == typeof D.iterator ? function(e4) {
            return "symbol" == typeof e4;
          } : function(e4) {
            return e4 instanceof D;
          }, Y = function(e4, t3, n3) {
            return e4 === V && Y(q2, t3, n3), y(e4), t3 = x(t3, true), y(n3), r(T, t3) ? (n3.enumerable ? (r(e4, L) && e4[L][t3] && (e4[L][t3] = false), n3 = k2(n3, { enumerable: _2(0, false) })) : (r(e4, L) || P(e4, L, _2(1, {})), e4[L][t3] = true), U(e4, t3, n3)) : P(e4, t3, n3);
          }, $ = function(e4, t3) {
            y(e4);
            for (var n3, a2 = v2(t3 = j(t3)), r2 = 0, o2 = a2.length; o2 > r2; )
              Y(e4, n3 = a2[r2++], t3[n3]);
            return e4;
          }, Q = function(e4) {
            var t3 = N.call(this, e4 = x(e4, true));
            return !(this === V && r(T, e4) && !r(q2, e4)) && (!(t3 || !r(this, e4) || !r(T, e4) || r(this, L) && this[L][e4]) || t3);
          }, Z = function(e4, t3) {
            if (e4 = j(e4), t3 = x(t3, true), e4 !== V || !r(T, t3) || r(q2, t3)) {
              var n3 = M(e4, t3);
              return !n3 || !r(T, t3) || r(e4, L) && e4[L][t3] || (n3.enumerable = true), n3;
            }
          }, X = function(e4) {
            for (var t3, n3 = F(j(e4)), a2 = [], o2 = 0; n3.length > o2; )
              r(T, t3 = n3[o2++]) || t3 == L || t3 == c2 || a2.push(t3);
            return a2;
          }, ee = function(e4) {
            for (var t3, n3 = e4 === V, a2 = F(n3 ? q2 : j(e4)), o2 = [], i2 = 0; a2.length > i2; )
              !r(T, t3 = a2[i2++]) || n3 && !r(V, t3) || o2.push(T[t3]);
            return o2;
          };
          K || (s((D = function() {
            if (this instanceof D)
              throw TypeError("Symbol is not a constructor!");
            var e4 = p2(arguments.length > 0 ? arguments[0] : void 0), t3 = function(n3) {
              this === V && t3.call(q2, n3), r(this, L) && r(this[L], e4) && (this[L][e4] = false), U(this, e4, _2(1, n3));
            };
            return o && H && U(V, e4, { configurable: true, set: t3 }), G(e4);
          }).prototype, "toString", function() {
            return this._k;
          }), C.f = Z, w.f = Y, n2(41).f = O.f = X, n2(19).f = Q, S.f = ee, o && !n2(14) && s(V, "propertyIsEnumerable", Q, true), b2.f = function(e4) {
            return G(d2(e4));
          }), i(i.G + i.W + i.F * !K, { Symbol: D });
          for (var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ne = 0; te.length > ne; )
            d2(te[ne++]);
          for (var ae = A(d2.store), re = 0; ae.length > re; )
            h2(ae[re++]);
          i(i.S + i.F * !K, "Symbol", { for: function(e4) {
            return r(z, e4 += "") ? z[e4] : z[e4] = D(e4);
          }, keyFor: function(e4) {
            if (!J(e4))
              throw TypeError(e4 + " is not a symbol!");
            for (var t3 in z)
              if (z[t3] === e4)
                return t3;
          }, useSetter: function() {
            H = true;
          }, useSimple: function() {
            H = false;
          } }), i(i.S + i.F * !K, "Object", { create: function(e4, t3) {
            return void 0 === t3 ? k2(e4) : $(k2(e4), t3);
          }, defineProperty: Y, defineProperties: $, getOwnPropertyDescriptor: Z, getOwnPropertyNames: X, getOwnPropertySymbols: ee });
          var oe = l2(function() {
            S.f(1);
          });
          i(i.S + i.F * oe, "Object", { getOwnPropertySymbols: function(e4) {
            return S.f(E(e4));
          } }), I && i(i.S + i.F * (!K || l2(function() {
            var e4 = D();
            return "[null]" != R([e4]) || "{}" != R({ a: e4 }) || "{}" != R(Object(e4));
          })), "JSON", { stringify: function(e4) {
            for (var t3, n3, a2 = [e4], r2 = 1; arguments.length > r2; )
              a2.push(arguments[r2++]);
            if (n3 = t3 = a2[1], (g2(t3) || void 0 !== e4) && !J(e4))
              return m2(t3) || (t3 = function(e5, t4) {
                if ("function" == typeof n3 && (t4 = n3.call(this, e5, t4)), !J(t4))
                  return t4;
              }), a2[1] = t3, R.apply(I, a2);
          } }), D.prototype[B] || n2(6)(D.prototype, B, D.prototype.valueOf), f2(D, "Symbol"), f2(Math, "Math", true), f2(a.JSON, "JSON", true);
        }, function(e3, t2, n2) {
          var a = n2(17)("meta"), r = n2(11), o = n2(5), i = n2(7).f, s = 0, c2 = Object.isExtensible || function() {
            return true;
          }, l2 = !n2(8)(function() {
            return c2(Object.preventExtensions({}));
          }), u2 = function(e4) {
            i(e4, a, { value: { i: "O" + ++s, w: {} } });
          }, f2 = e3.exports = { KEY: a, NEED: false, fastKey: function(e4, t3) {
            if (!r(e4))
              return "symbol" == typeof e4 ? e4 : ("string" == typeof e4 ? "S" : "P") + e4;
            if (!o(e4, a)) {
              if (!c2(e4))
                return "F";
              if (!t3)
                return "E";
              u2(e4);
            }
            return e4[a].i;
          }, getWeak: function(e4, t3) {
            if (!o(e4, a)) {
              if (!c2(e4))
                return true;
              if (!t3)
                return false;
              u2(e4);
            }
            return e4[a].w;
          }, onFreeze: function(e4) {
            return l2 && f2.NEED && c2(e4) && !o(e4, a) && u2(e4), e4;
          } };
        }, function(e3, t2, n2) {
          var a = n2(13), r = n2(32), o = n2(19);
          e3.exports = function(e4) {
            var t3 = a(e4), n3 = r.f;
            if (n3)
              for (var i, s = n3(e4), c2 = o.f, l2 = 0; s.length > l2; )
                c2.call(e4, i = s[l2++]) && t3.push(i);
            return t3;
          };
        }, function(e3, t2, n2) {
          var a = n2(24);
          e3.exports = Array.isArray || function(e4) {
            return "Array" == a(e4);
          };
        }, function(e3, t2, n2) {
          var a = n2(9), r = n2(41).f, o = {}.toString, i = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
          e3.exports.f = function(e4) {
            return i && "[object Window]" == o.call(e4) ? function(e5) {
              try {
                return r(e5);
              } catch (e6) {
                return i.slice();
              }
            }(e4) : r(a(e4));
          };
        }, function(e3, t2, n2) {
          var a = n2(19), r = n2(16), o = n2(9), i = n2(23), s = n2(5), c2 = n2(35), l2 = Object.getOwnPropertyDescriptor;
          t2.f = n2(4) ? l2 : function(e4, t3) {
            if (e4 = o(e4), t3 = i(t3, true), c2)
              try {
                return l2(e4, t3);
              } catch (e5) {
              }
            if (s(e4, t3))
              return r(!a.f.call(e4, t3), e4[t3]);
          };
        }, function(e3, t2) {
        }, function(e3, t2, n2) {
          n2(31)("asyncIterator");
        }, function(e3, t2, n2) {
          n2(31)("observable");
        }, function(e3, t2, n2) {
          t2.__esModule = true;
          var a, r = n2(77), o = (a = r) && a.__esModule ? a : { default: a };
          t2.default = o.default || function(e4) {
            for (var t3 = 1; t3 < arguments.length; t3++) {
              var n3 = arguments[t3];
              for (var a2 in n3)
                Object.prototype.hasOwnProperty.call(n3, a2) && (e4[a2] = n3[a2]);
            }
            return e4;
          };
        }, function(e3, t2, n2) {
          e3.exports = { default: n2(78), __esModule: true };
        }, function(e3, t2, n2) {
          n2(79), e3.exports = n2(1).Object.assign;
        }, function(e3, t2, n2) {
          var a = n2(15);
          a(a.S + a.F, "Object", { assign: n2(80) });
        }, function(e3, t2, n2) {
          var a = n2(4), r = n2(13), o = n2(32), i = n2(19), s = n2(18), c2 = n2(40), l2 = Object.assign;
          e3.exports = !l2 || n2(8)(function() {
            var e4 = {}, t3 = {}, n3 = Symbol(), a2 = "abcdefghijklmnopqrst";
            return e4[n3] = 7, a2.split("").forEach(function(e5) {
              t3[e5] = e5;
            }), 7 != l2({}, e4)[n3] || Object.keys(l2({}, t3)).join("") != a2;
          }) ? function(e4, t3) {
            for (var n3 = s(e4), l3 = arguments.length, u2 = 1, f2 = o.f, p2 = i.f; l3 > u2; )
              for (var d2, b2 = c2(arguments[u2++]), h2 = f2 ? r(b2).concat(f2(b2)) : r(b2), v2 = h2.length, m2 = 0; v2 > m2; )
                d2 = h2[m2++], a && !p2.call(b2, d2) || (n3[d2] = b2[d2]);
            return n3;
          } : l2;
        }, function(e3, t2, n2) {
          t2.__esModule = true;
          var a = o(n2(82)), r = o(n2(85));
          function o(e4) {
            return e4 && e4.__esModule ? e4 : { default: e4 };
          }
          t2.default = function(e4, t3) {
            if (Array.isArray(e4))
              return e4;
            if ((0, a.default)(Object(e4)))
              return function(e5, t4) {
                var n3 = [], a2 = true, o2 = false, i = void 0;
                try {
                  for (var s, c2 = (0, r.default)(e5); !(a2 = (s = c2.next()).done) && (n3.push(s.value), !t4 || n3.length !== t4); a2 = true)
                    ;
                } catch (e6) {
                  o2 = true, i = e6;
                } finally {
                  try {
                    !a2 && c2.return && c2.return();
                  } finally {
                    if (o2)
                      throw i;
                  }
                }
                return n3;
              }(e4, t3);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          };
        }, function(e3, t2, n2) {
          e3.exports = { default: n2(83), __esModule: true };
        }, function(e3, t2, n2) {
          n2(29), n2(20), e3.exports = n2(84);
        }, function(e3, t2, n2) {
          var a = n2(42), r = n2(2)("iterator"), o = n2(12);
          e3.exports = n2(1).isIterable = function(e4) {
            var t3 = Object(e4);
            return void 0 !== t3[r] || "@@iterator" in t3 || o.hasOwnProperty(a(t3));
          };
        }, function(e3, t2, n2) {
          e3.exports = { default: n2(86), __esModule: true };
        }, function(e3, t2, n2) {
          n2(29), n2(20), e3.exports = n2(87);
        }, function(e3, t2, n2) {
          var a = n2(10), r = n2(88);
          e3.exports = n2(1).getIterator = function(e4) {
            var t3 = r(e4);
            if ("function" != typeof t3)
              throw TypeError(e4 + " is not iterable!");
            return a(t3.call(e4));
          };
        }, function(e3, t2, n2) {
          var a = n2(42), r = n2(2)("iterator"), o = n2(12);
          e3.exports = n2(1).getIteratorMethod = function(e4) {
            if (null != e4)
              return e4[r] || e4["@@iterator"] || o[a(e4)];
          };
        }, function(e3, t2, n2) {
          e3.exports = { default: n2(90), __esModule: true };
        }, function(e3, t2, n2) {
          n2(91), e3.exports = n2(1).Object.keys;
        }, function(e3, t2, n2) {
          var a = n2(18), r = n2(13);
          n2(92)("keys", function() {
            return function(e4) {
              return r(a(e4));
            };
          });
        }, function(e3, t2, n2) {
          var a = n2(15), r = n2(1), o = n2(8);
          e3.exports = function(e4, t3) {
            var n3 = (r.Object || {})[e4] || Object[e4], i = {};
            i[e4] = t3(n3), a(a.S + a.F * o(function() {
              n3(1);
            }), "Object", i);
          };
        }, function(e3, t2, n2) {
          (function(t3) {
            var n3 = [["ary", 128], ["bind", 1], ["bindKey", 2], ["curry", 8], ["curryRight", 16], ["flip", 512], ["partial", 32], ["partialRight", 64], ["rearg", 256]], a = /^\s+|\s+$/g, r = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, o = /\{\n\/\* \[wrapped with (.+)\] \*/, i = /,? & /, s = /^[-+]0x[0-9a-f]+$/i, c2 = /^0b[01]+$/i, l2 = /^\[object .+?Constructor\]$/, u2 = /^0o[0-7]+$/i, f2 = /^(?:0|[1-9]\d*)$/, p2 = parseInt, d2 = "object" == typeof t3 && t3 && t3.Object === Object && t3, b2 = "object" == typeof self && self && self.Object === Object && self, h2 = d2 || b2 || Function("return this")();
            function v2(e4, t4, n4) {
              switch (n4.length) {
                case 0:
                  return e4.call(t4);
                case 1:
                  return e4.call(t4, n4[0]);
                case 2:
                  return e4.call(t4, n4[0], n4[1]);
                case 3:
                  return e4.call(t4, n4[0], n4[1], n4[2]);
              }
              return e4.apply(t4, n4);
            }
            function m2(e4, t4) {
              return !!(e4 ? e4.length : 0) && function(e5, t5, n4) {
                if (t5 != t5)
                  return function(e6, t6, n5, a3) {
                    var r3 = e6.length, o2 = n5 + (a3 ? 1 : -1);
                    for (; a3 ? o2-- : ++o2 < r3; )
                      if (t6(e6[o2], o2, e6))
                        return o2;
                    return -1;
                  }(e5, y, n4);
                var a2 = n4 - 1, r2 = e5.length;
                for (; ++a2 < r2; )
                  if (e5[a2] === t5)
                    return a2;
                return -1;
              }(e4, t4, 0) > -1;
            }
            function y(e4) {
              return e4 != e4;
            }
            function g2(e4, t4) {
              for (var n4 = e4.length, a2 = 0; n4--; )
                e4[n4] === t4 && a2++;
              return a2;
            }
            function E(e4, t4) {
              for (var n4 = -1, a2 = e4.length, r2 = 0, o2 = []; ++n4 < a2; ) {
                var i2 = e4[n4];
                i2 !== t4 && "__lodash_placeholder__" !== i2 || (e4[n4] = "__lodash_placeholder__", o2[r2++] = n4);
              }
              return o2;
            }
            var j, x, _2, k2 = Function.prototype, O = Object.prototype, C = h2["__core-js_shared__"], S = (j = /[^.]+$/.exec(C && C.keys && C.keys.IE_PROTO || "")) ? "Symbol(src)_1." + j : "", w = k2.toString, A = O.hasOwnProperty, M = O.toString, P = RegExp("^" + w.call(A).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), F = Object.create, D = Math.max, I = Math.min, R = (x = H(Object, "defineProperty"), (_2 = H.name) && _2.length > 2 ? x : void 0);
            function L(e4) {
              return X(e4) ? F(e4) : {};
            }
            function B(e4) {
              return !(!X(e4) || function(e5) {
                return !!S && S in e5;
              }(e4)) && (function(e5) {
                var t4 = X(e5) ? M.call(e5) : "";
                return "[object Function]" == t4 || "[object GeneratorFunction]" == t4;
              }(e4) || function(e5) {
                var t4 = false;
                if (null != e5 && "function" != typeof e5.toString)
                  try {
                    t4 = !!(e5 + "");
                  } catch (e6) {
                  }
                return t4;
              }(e4) ? P : l2).test(function(e5) {
                if (null != e5) {
                  try {
                    return w.call(e5);
                  } catch (e6) {
                  }
                  try {
                    return e5 + "";
                  } catch (e6) {
                  }
                }
                return "";
              }(e4));
            }
            function N(e4, t4, n4, a2) {
              for (var r2 = -1, o2 = e4.length, i2 = n4.length, s2 = -1, c3 = t4.length, l3 = D(o2 - i2, 0), u3 = Array(c3 + l3), f3 = !a2; ++s2 < c3; )
                u3[s2] = t4[s2];
              for (; ++r2 < i2; )
                (f3 || r2 < o2) && (u3[n4[r2]] = e4[r2]);
              for (; l3--; )
                u3[s2++] = e4[r2++];
              return u3;
            }
            function z(e4, t4, n4, a2) {
              for (var r2 = -1, o2 = e4.length, i2 = -1, s2 = n4.length, c3 = -1, l3 = t4.length, u3 = D(o2 - s2, 0), f3 = Array(u3 + l3), p3 = !a2; ++r2 < u3; )
                f3[r2] = e4[r2];
              for (var d3 = r2; ++c3 < l3; )
                f3[d3 + c3] = t4[c3];
              for (; ++i2 < s2; )
                (p3 || r2 < o2) && (f3[d3 + n4[i2]] = e4[r2++]);
              return f3;
            }
            function T(e4) {
              return function() {
                var t4 = arguments;
                switch (t4.length) {
                  case 0:
                    return new e4();
                  case 1:
                    return new e4(t4[0]);
                  case 2:
                    return new e4(t4[0], t4[1]);
                  case 3:
                    return new e4(t4[0], t4[1], t4[2]);
                  case 4:
                    return new e4(t4[0], t4[1], t4[2], t4[3]);
                  case 5:
                    return new e4(t4[0], t4[1], t4[2], t4[3], t4[4]);
                  case 6:
                    return new e4(t4[0], t4[1], t4[2], t4[3], t4[4], t4[5]);
                  case 7:
                    return new e4(t4[0], t4[1], t4[2], t4[3], t4[4], t4[5], t4[6]);
                }
                var n4 = L(e4.prototype), a2 = e4.apply(n4, t4);
                return X(a2) ? a2 : n4;
              };
            }
            function q2(e4, t4, n4, a2, r2, o2, i2, s2, c3, l3) {
              var u3 = 128 & t4, f3 = 1 & t4, p3 = 2 & t4, d3 = 24 & t4, b3 = 512 & t4, v3 = p3 ? void 0 : T(e4);
              return function m3() {
                for (var y2 = arguments.length, j2 = Array(y2), x2 = y2; x2--; )
                  j2[x2] = arguments[x2];
                if (d3)
                  var _3 = W(m3), k3 = g2(j2, _3);
                if (a2 && (j2 = N(j2, a2, r2, d3)), o2 && (j2 = z(j2, o2, i2, d3)), y2 -= k3, d3 && y2 < l3) {
                  var O2 = E(j2, _3);
                  return V(e4, t4, q2, m3.placeholder, n4, j2, O2, s2, c3, l3 - y2);
                }
                var C2 = f3 ? n4 : this, S2 = p3 ? C2[e4] : e4;
                return y2 = j2.length, s2 ? j2 = Y(j2, s2) : b3 && y2 > 1 && j2.reverse(), u3 && c3 < y2 && (j2.length = c3), this && this !== h2 && this instanceof m3 && (S2 = v3 || T(S2)), S2.apply(C2, j2);
              };
            }
            function V(e4, t4, n4, a2, r2, o2, i2, s2, c3, l3) {
              var u3 = 8 & t4;
              t4 |= u3 ? 32 : 64, 4 & (t4 &= ~(u3 ? 64 : 32)) || (t4 &= -4);
              var f3 = n4(e4, t4, r2, u3 ? o2 : void 0, u3 ? i2 : void 0, u3 ? void 0 : o2, u3 ? void 0 : i2, s2, c3, l3);
              return f3.placeholder = a2, $(f3, e4, t4);
            }
            function K(e4, t4, n4, a2, r2, o2, i2, s2) {
              var c3 = 2 & t4;
              if (!c3 && "function" != typeof e4)
                throw new TypeError("Expected a function");
              var l3 = a2 ? a2.length : 0;
              if (l3 || (t4 &= -97, a2 = r2 = void 0), i2 = void 0 === i2 ? i2 : D(te(i2), 0), s2 = void 0 === s2 ? s2 : te(s2), l3 -= r2 ? r2.length : 0, 64 & t4) {
                var u3 = a2, f3 = r2;
                a2 = r2 = void 0;
              }
              var p3 = [e4, t4, n4, a2, r2, u3, f3, o2, i2, s2];
              if (e4 = p3[0], t4 = p3[1], n4 = p3[2], a2 = p3[3], r2 = p3[4], !(s2 = p3[9] = null == p3[9] ? c3 ? 0 : e4.length : D(p3[9] - l3, 0)) && 24 & t4 && (t4 &= -25), t4 && 1 != t4)
                d3 = 8 == t4 || 16 == t4 ? function(e5, t5, n5) {
                  var a3 = T(e5);
                  return function r3() {
                    for (var o3 = arguments.length, i3 = Array(o3), s3 = o3, c4 = W(r3); s3--; )
                      i3[s3] = arguments[s3];
                    var l4 = o3 < 3 && i3[0] !== c4 && i3[o3 - 1] !== c4 ? [] : E(i3, c4);
                    if ((o3 -= l4.length) < n5)
                      return V(e5, t5, q2, r3.placeholder, void 0, i3, l4, void 0, void 0, n5 - o3);
                    var u4 = this && this !== h2 && this instanceof r3 ? a3 : e5;
                    return v2(u4, this, i3);
                  };
                }(e4, t4, s2) : 32 != t4 && 33 != t4 || r2.length ? q2.apply(void 0, p3) : function(e5, t5, n5, a3) {
                  var r3 = 1 & t5, o3 = T(e5);
                  return function t6() {
                    for (var i3 = -1, s3 = arguments.length, c4 = -1, l4 = a3.length, u4 = Array(l4 + s3), f4 = this && this !== h2 && this instanceof t6 ? o3 : e5; ++c4 < l4; )
                      u4[c4] = a3[c4];
                    for (; s3--; )
                      u4[c4++] = arguments[++i3];
                    return v2(f4, r3 ? n5 : this, u4);
                  };
                }(e4, t4, n4, a2);
              else
                var d3 = function(e5, t5, n5) {
                  var a3 = 1 & t5, r3 = T(e5);
                  return function t6() {
                    var o3 = this && this !== h2 && this instanceof t6 ? r3 : e5;
                    return o3.apply(a3 ? n5 : this, arguments);
                  };
                }(e4, t4, n4);
              return $(d3, e4, t4);
            }
            function W(e4) {
              return e4.placeholder;
            }
            function H(e4, t4) {
              var n4 = function(e5, t5) {
                return null == e5 ? void 0 : e5[t5];
              }(e4, t4);
              return B(n4) ? n4 : void 0;
            }
            function U(e4) {
              var t4 = e4.match(o);
              return t4 ? t4[1].split(i) : [];
            }
            function G(e4, t4) {
              var n4 = t4.length, a2 = n4 - 1;
              return t4[a2] = (n4 > 1 ? "& " : "") + t4[a2], t4 = t4.join(n4 > 2 ? ", " : " "), e4.replace(r, "{\n/* [wrapped with " + t4 + "] */\n");
            }
            function J(e4, t4) {
              return !!(t4 = null == t4 ? 9007199254740991 : t4) && ("number" == typeof e4 || f2.test(e4)) && e4 > -1 && e4 % 1 == 0 && e4 < t4;
            }
            function Y(e4, t4) {
              for (var n4 = e4.length, a2 = I(t4.length, n4), r2 = function(e5, t5) {
                var n5 = -1, a3 = e5.length;
                for (t5 || (t5 = Array(a3)); ++n5 < a3; )
                  t5[n5] = e5[n5];
                return t5;
              }(e4); a2--; ) {
                var o2 = t4[a2];
                e4[a2] = J(o2, n4) ? r2[o2] : void 0;
              }
              return e4;
            }
            var $ = R ? function(e4, t4, n4) {
              var a2, r2 = t4 + "";
              return R(e4, "toString", { configurable: true, enumerable: false, value: (a2 = G(r2, Q(U(r2), n4)), function() {
                return a2;
              }) });
            } : function(e4) {
              return e4;
            };
            function Q(e4, t4) {
              return function(e5, t5) {
                for (var n4 = -1, a2 = e5 ? e5.length : 0; ++n4 < a2 && false !== t5(e5[n4], n4, e5); )
                  ;
              }(n3, function(n4) {
                var a2 = "_." + n4[0];
                t4 & n4[1] && !m2(e4, a2) && e4.push(a2);
              }), e4.sort();
            }
            function Z(e4, t4, n4) {
              var a2 = K(e4, 8, void 0, void 0, void 0, void 0, void 0, t4 = n4 ? void 0 : t4);
              return a2.placeholder = Z.placeholder, a2;
            }
            function X(e4) {
              var t4 = typeof e4;
              return !!e4 && ("object" == t4 || "function" == t4);
            }
            function ee(e4) {
              return e4 ? (e4 = function(e5) {
                if ("number" == typeof e5)
                  return e5;
                if (function(e6) {
                  return "symbol" == typeof e6 || /* @__PURE__ */ function(e7) {
                    return !!e7 && "object" == typeof e7;
                  }(e6) && "[object Symbol]" == M.call(e6);
                }(e5))
                  return NaN;
                if (X(e5)) {
                  var t4 = "function" == typeof e5.valueOf ? e5.valueOf() : e5;
                  e5 = X(t4) ? t4 + "" : t4;
                }
                if ("string" != typeof e5)
                  return 0 === e5 ? e5 : +e5;
                e5 = e5.replace(a, "");
                var n4 = c2.test(e5);
                return n4 || u2.test(e5) ? p2(e5.slice(2), n4 ? 2 : 8) : s.test(e5) ? NaN : +e5;
              }(e4)) === 1 / 0 || e4 === -1 / 0 ? 17976931348623157e292 * (e4 < 0 ? -1 : 1) : e4 == e4 ? e4 : 0 : 0 === e4 ? e4 : 0;
            }
            function te(e4) {
              var t4 = ee(e4), n4 = t4 % 1;
              return t4 == t4 ? n4 ? t4 - n4 : t4 : 0;
            }
            Z.placeholder = {}, e3.exports = Z;
          }).call(this, n2(43));
        }, function(e3, t2, n2) {
          function a(e4) {
            return e4 && e4.__esModule ? e4.default : e4;
          }
          t2.__esModule = true;
          var r = n2(95);
          t2.threezerotwofour = a(r);
          var o = n2(96);
          t2.apathy = a(o);
          var i = n2(97);
          t2.ashes = a(i);
          var s = n2(98);
          t2.atelierDune = a(s);
          var c2 = n2(99);
          t2.atelierForest = a(c2);
          var l2 = n2(100);
          t2.atelierHeath = a(l2);
          var u2 = n2(101);
          t2.atelierLakeside = a(u2);
          var f2 = n2(102);
          t2.atelierSeaside = a(f2);
          var p2 = n2(103);
          t2.bespin = a(p2);
          var d2 = n2(104);
          t2.brewer = a(d2);
          var b2 = n2(105);
          t2.bright = a(b2);
          var h2 = n2(106);
          t2.chalk = a(h2);
          var v2 = n2(107);
          t2.codeschool = a(v2);
          var m2 = n2(108);
          t2.colors = a(m2);
          var y = n2(109);
          t2.default = a(y);
          var g2 = n2(110);
          t2.eighties = a(g2);
          var E = n2(111);
          t2.embers = a(E);
          var j = n2(112);
          t2.flat = a(j);
          var x = n2(113);
          t2.google = a(x);
          var _2 = n2(114);
          t2.grayscale = a(_2);
          var k2 = n2(115);
          t2.greenscreen = a(k2);
          var O = n2(116);
          t2.harmonic = a(O);
          var C = n2(117);
          t2.hopscotch = a(C);
          var S = n2(118);
          t2.isotope = a(S);
          var w = n2(119);
          t2.marrakesh = a(w);
          var A = n2(120);
          t2.mocha = a(A);
          var M = n2(121);
          t2.monokai = a(M);
          var P = n2(122);
          t2.ocean = a(P);
          var F = n2(123);
          t2.paraiso = a(F);
          var D = n2(124);
          t2.pop = a(D);
          var I = n2(125);
          t2.railscasts = a(I);
          var R = n2(126);
          t2.shapeshifter = a(R);
          var L = n2(127);
          t2.solarized = a(L);
          var B = n2(128);
          t2.summerfruit = a(B);
          var N = n2(129);
          t2.tomorrow = a(N);
          var z = n2(130);
          t2.tube = a(z);
          var T = n2(131);
          t2.twilight = a(T);
        }, function(e3, t2, n2) {
          t2.__esModule = true, t2.default = { scheme: "threezerotwofour", author: "jan t. sott (http://github.com/idleberg)", base00: "#090300", base01: "#3a3432", base02: "#4a4543", base03: "#5c5855", base04: "#807d7c", base05: "#a5a2a2", base06: "#d6d5d4", base07: "#f7f7f7", base08: "#db2d20", base09: "#e8bbd0", base0A: "#fded02", base0B: "#01a252", base0C: "#b5e4f4", base0D: "#01a0e4", base0E: "#a16a94", base0F: "#cdab53" }, e3.exports = t2.default;
        }, function(e3, t2, n2) {
          t2.__esModule = true, t2.default = { scheme: "apathy", author: "jannik siebert (https://github.com/janniks)", base00: "#031A16", base01: "#0B342D", base02: "#184E45", base03: "#2B685E", base04: "#5F9C92", base05: "#81B5AC", base06: "#A7CEC8", base07: "#D2E7E4", base08: "#3E9688", base09: "#3E7996", base0A: "#3E4C96", base0B: "#883E96", base0C: "#963E4C", base0D: "#96883E", base0E: "#4C963E", base0F: "#3E965B" }, e3.exports = t2.default;
        }, function(e3, t2, n2) {
          t2.__esModule = true, t2.default = { scheme: "ashes", author: "jannik siebert (https://github.com/janniks)", base00: "#1C2023", base01: "#393F45", base02: "#565E65", base03: "#747C84", base04: "#ADB3BA", base05: "#C7CCD1", base06: "#DFE2E5", base07: "#F3F4F5", base08: "#C7AE95", base09: "#C7C795", base0A: "#AEC795", base0B: "#95C7AE", base0C: "#95AEC7", base0D: "#AE95C7", base0E: "#C795AE", base0F: "#C79595" }, e3.exports = t2.default;
        }, function(e3, t2, n2) {
          t2.__esModule = true, t2.default = { scheme: "atelier dune", author: "bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/dune)", base00: "#20201d", base01: "#292824", base02: "#6e6b5e", base03: "#7d7a68", base04: "#999580", base05: "#a6a28c", base06: "#e8e4cf", base07: "#fefbec", base08: "#d73737", base09: "#b65611", base0A: "#cfb017", base0B: "#60ac39", base0C: "#1fad83", base0D: "#6684e1", base0E: "#b854d4", base0F: "#d43552" }, e3.exports = t2.default;
        }, function(e3, t2, n2) {
          t2.__esModule = true, t2.default = { scheme: "atelier forest", author: "bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/forest)", base00: "#1b1918", base01: "#2c2421", base02: "#68615e", base03: "#766e6b", base04: "#9c9491", base05: "#a8a19f", base06: "#e6e2e0", base07: "#f1efee", base08: "#f22c40", base09: "#df5320", base0A: "#d5911a", base0B: "#5ab738", base0C: "#00ad9c", base0D: "#407ee7", base0E: "#6666ea", base0F: "#c33ff3" }, e3.exports = t2.default;
        }, function(e3, t2, n2) {
          t2.__esModule = true, t2.default = { scheme: "atelier heath", author: "bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/heath)", base00: "#1b181b", base01: "#292329", base02: "#695d69", base03: "#776977", base04: "#9e8f9e", base05: "#ab9bab", base06: "#d8cad8", base07: "#f7f3f7", base08: "#ca402b", base09: "#a65926", base0A: "#bb8a35", base0B: "#379a37", base0C: "#159393", base0D: "#516aec", base0E: "#7b59c0", base0F: "#cc33cc" }, e3.exports = t2.default;
        }, function(e3, t2, n2) {
          t2.__esModule = true, t2.default = { scheme: "atelier lakeside", author: "bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/lakeside/)", base00: "#161b1d", base01: "#1f292e", base02: "#516d7b", base03: "#5a7b8c", base04: "#7195a8", base05: "#7ea2b4", base06: "#c1e4f6", base07: "#ebf8ff", base08: "#d22d72", base09: "#935c25", base0A: "#8a8a0f", base0B: "#568c3b", base0C: "#2d8f6f", base0D: "#257fad", base0E: "#5d5db1", base0F: "#b72dd2" }, e3.exports = t2.default;
        }, function(e3, t2, n2) {
          t2.__esModule = true, t2.default = { scheme: "atelier seaside", author: "bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/seaside/)", base00: "#131513", base01: "#242924", base02: "#5e6e5e", base03: "#687d68", base04: "#809980", base05: "#8ca68c", base06: "#cfe8cf", base07: "#f0fff0", base08: "#e6193c", base09: "#87711d", base0A: "#c3c322", base0B: "#29a329", base0C: "#1999b3", base0D: "#3d62f5", base0E: "#ad2bee", base0F: "#e619c3" }, e3.exports = t2.default;
        }, function(e3, t2, n2) {
          t2.__esModule = true, t2.default = { scheme: "bespin", author: "jan t. sott", base00: "#28211c", base01: "#36312e", base02: "#5e5d5c", base03: "#666666", base04: "#797977", base05: "#8a8986", base06: "#9d9b97", base07: "#baae9e", base08: "#cf6a4c", base09: "#cf7d34", base0A: "#f9ee98", base0B: "#54be0d", base0C: "#afc4db", base0D: "#5ea6ea", base0E: "#9b859d", base0F: "#937121" }, e3.exports = t2.default;
        }, function(e3, t2, n2) {
          t2.__esModule = true, t2.default = { scheme: "brewer", author: "timothée poisot (http://github.com/tpoisot)", base00: "#0c0d0e", base01: "#2e2f30", base02: "#515253", base03: "#737475", base04: "#959697", base05: "#b7b8b9", base06: "#dadbdc", base07: "#fcfdfe", base08: "#e31a1c", base09: "#e6550d", base0A: "#dca060", base0B: "#31a354", base0C: "#80b1d3", base0D: "#3182bd", base0E: "#756bb1", base0F: "#b15928" }, e3.exports = t2.default;
        }, function(e3, t2, n2) {
          t2.__esModule = true, t2.default = { scheme: "bright", author: "chris kempson (http://chriskempson.com)", base00: "#000000", base01: "#303030", base02: "#505050", base03: "#b0b0b0", base04: "#d0d0d0", base05: "#e0e0e0", base06: "#f5f5f5", base07: "#ffffff", base08: "#fb0120", base09: "#fc6d24", base0A: "#fda331", base0B: "#a1c659", base0C: "#76c7b7", base0D: "#6fb3d2", base0E: "#d381c3", base0F: "#be643c" }, e3.exports = t2.default;
        }, function(e3, t2, n2) {
          t2.__esModule = true, t2.default = { scheme: "chalk", author: "chris kempson (http://chriskempson.com)", base00: "#151515", base01: "#202020", base02: "#303030", base03: "#505050", base04: "#b0b0b0", base05: "#d0d0d0", base06: "#e0e0e0", base07: "#f5f5f5", base08: "#fb9fb1", base09: "#eda987", base0A: "#ddb26f", base0B: "#acc267", base0C: "#12cfc0", base0D: "#6fc2ef", base0E: "#e1a3ee", base0F: "#deaf8f" }, e3.exports = t2.default;
        }, function(e3, t2, n2) {
          t2.__esModule = true, t2.default = { scheme: "codeschool", author: "brettof86", base00: "#232c31", base01: "#1c3657", base02: "#2a343a", base03: "#3f4944", base04: "#84898c", base05: "#9ea7a6", base06: "#a7cfa3", base07: "#b5d8f6", base08: "#2a5491", base09: "#43820d", base0A: "#a03b1e", base0B: "#237986", base0C: "#b02f30", base0D: "#484d79", base0E: "#c59820", base0F: "#c98344" }, e3.exports = t2.default;
        }, function(e3, t2, n2) {
          t2.__esModule = true, t2.default = { scheme: "colors", author: "mrmrs (http://clrs.cc)", base00: "#111111", base01: "#333333", base02: "#555555", base03: "#777777", base04: "#999999", base05: "#bbbbbb", base06: "#dddddd", base07: "#ffffff", base08: "#ff4136", base09: "#ff851b", base0A: "#ffdc00", base0B: "#2ecc40", base0C: "#7fdbff", base0D: "#0074d9", base0E: "#b10dc9", base0F: "#85144b" }, e3.exports = t2.default;
        }, function(e3, t2, n2) {
          t2.__esModule = true, t2.default = { scheme: "default", author: "chris kempson (http://chriskempson.com)", base00: "#181818", base01: "#282828", base02: "#383838", base03: "#585858", base04: "#b8b8b8", base05: "#d8d8d8", base06: "#e8e8e8", base07: "#f8f8f8", base08: "#ab4642", base09: "#dc9656", base0A: "#f7ca88", base0B: "#a1b56c", base0C: "#86c1b9", base0D: "#7cafc2", base0E: "#ba8baf", base0F: "#a16946" }, e3.exports = t2.default;
        }, function(e3, t2, n2) {
          t2.__esModule = true, t2.default = { scheme: "eighties", author: "chris kempson (http://chriskempson.com)", base00: "#2d2d2d", base01: "#393939", base02: "#515151", base03: "#747369", base04: "#a09f93", base05: "#d3d0c8", base06: "#e8e6df", base07: "#f2f0ec", base08: "#f2777a", base09: "#f99157", base0A: "#ffcc66", base0B: "#99cc99", base0C: "#66cccc", base0D: "#6699cc", base0E: "#cc99cc", base0F: "#d27b53" }, e3.exports = t2.default;
        }, function(e3, t2, n2) {
          t2.__esModule = true, t2.default = { scheme: "embers", author: "jannik siebert (https://github.com/janniks)", base00: "#16130F", base01: "#2C2620", base02: "#433B32", base03: "#5A5047", base04: "#8A8075", base05: "#A39A90", base06: "#BEB6AE", base07: "#DBD6D1", base08: "#826D57", base09: "#828257", base0A: "#6D8257", base0B: "#57826D", base0C: "#576D82", base0D: "#6D5782", base0E: "#82576D", base0F: "#825757" }, e3.exports = t2.default;
        }, function(e3, t2, n2) {
          t2.__esModule = true, t2.default = { scheme: "flat", author: "chris kempson (http://chriskempson.com)", base00: "#2C3E50", base01: "#34495E", base02: "#7F8C8D", base03: "#95A5A6", base04: "#BDC3C7", base05: "#e0e0e0", base06: "#f5f5f5", base07: "#ECF0F1", base08: "#E74C3C", base09: "#E67E22", base0A: "#F1C40F", base0B: "#2ECC71", base0C: "#1ABC9C", base0D: "#3498DB", base0E: "#9B59B6", base0F: "#be643c" }, e3.exports = t2.default;
        }, function(e3, t2, n2) {
          t2.__esModule = true, t2.default = { scheme: "google", author: "seth wright (http://sethawright.com)", base00: "#1d1f21", base01: "#282a2e", base02: "#373b41", base03: "#969896", base04: "#b4b7b4", base05: "#c5c8c6", base06: "#e0e0e0", base07: "#ffffff", base08: "#CC342B", base09: "#F96A38", base0A: "#FBA922", base0B: "#198844", base0C: "#3971ED", base0D: "#3971ED", base0E: "#A36AC7", base0F: "#3971ED" }, e3.exports = t2.default;
        }, function(e3, t2, n2) {
          t2.__esModule = true, t2.default = { scheme: "grayscale", author: "alexandre gavioli (https://github.com/alexx2/)", base00: "#101010", base01: "#252525", base02: "#464646", base03: "#525252", base04: "#ababab", base05: "#b9b9b9", base06: "#e3e3e3", base07: "#f7f7f7", base08: "#7c7c7c", base09: "#999999", base0A: "#a0a0a0", base0B: "#8e8e8e", base0C: "#868686", base0D: "#686868", base0E: "#747474", base0F: "#5e5e5e" }, e3.exports = t2.default;
        }, function(e3, t2, n2) {
          t2.__esModule = true, t2.default = { scheme: "green screen", author: "chris kempson (http://chriskempson.com)", base00: "#001100", base01: "#003300", base02: "#005500", base03: "#007700", base04: "#009900", base05: "#00bb00", base06: "#00dd00", base07: "#00ff00", base08: "#007700", base09: "#009900", base0A: "#007700", base0B: "#00bb00", base0C: "#005500", base0D: "#009900", base0E: "#00bb00", base0F: "#005500" }, e3.exports = t2.default;
        }, function(e3, t2, n2) {
          t2.__esModule = true, t2.default = { scheme: "harmonic16", author: "jannik siebert (https://github.com/janniks)", base00: "#0b1c2c", base01: "#223b54", base02: "#405c79", base03: "#627e99", base04: "#aabcce", base05: "#cbd6e2", base06: "#e5ebf1", base07: "#f7f9fb", base08: "#bf8b56", base09: "#bfbf56", base0A: "#8bbf56", base0B: "#56bf8b", base0C: "#568bbf", base0D: "#8b56bf", base0E: "#bf568b", base0F: "#bf5656" }, e3.exports = t2.default;
        }, function(e3, t2, n2) {
          t2.__esModule = true, t2.default = { scheme: "hopscotch", author: "jan t. sott", base00: "#322931", base01: "#433b42", base02: "#5c545b", base03: "#797379", base04: "#989498", base05: "#b9b5b8", base06: "#d5d3d5", base07: "#ffffff", base08: "#dd464c", base09: "#fd8b19", base0A: "#fdcc59", base0B: "#8fc13e", base0C: "#149b93", base0D: "#1290bf", base0E: "#c85e7c", base0F: "#b33508" }, e3.exports = t2.default;
        }, function(e3, t2, n2) {
          t2.__esModule = true, t2.default = { scheme: "isotope", author: "jan t. sott", base00: "#000000", base01: "#404040", base02: "#606060", base03: "#808080", base04: "#c0c0c0", base05: "#d0d0d0", base06: "#e0e0e0", base07: "#ffffff", base08: "#ff0000", base09: "#ff9900", base0A: "#ff0099", base0B: "#33ff00", base0C: "#00ffff", base0D: "#0066ff", base0E: "#cc00ff", base0F: "#3300ff" }, e3.exports = t2.default;
        }, function(e3, t2, n2) {
          t2.__esModule = true, t2.default = { scheme: "marrakesh", author: "alexandre gavioli (http://github.com/alexx2/)", base00: "#201602", base01: "#302e00", base02: "#5f5b17", base03: "#6c6823", base04: "#86813b", base05: "#948e48", base06: "#ccc37a", base07: "#faf0a5", base08: "#c35359", base09: "#b36144", base0A: "#a88339", base0B: "#18974e", base0C: "#75a738", base0D: "#477ca1", base0E: "#8868b3", base0F: "#b3588e" }, e3.exports = t2.default;
        }, function(e3, t2, n2) {
          t2.__esModule = true, t2.default = { scheme: "mocha", author: "chris kempson (http://chriskempson.com)", base00: "#3B3228", base01: "#534636", base02: "#645240", base03: "#7e705a", base04: "#b8afad", base05: "#d0c8c6", base06: "#e9e1dd", base07: "#f5eeeb", base08: "#cb6077", base09: "#d28b71", base0A: "#f4bc87", base0B: "#beb55b", base0C: "#7bbda4", base0D: "#8ab3b5", base0E: "#a89bb9", base0F: "#bb9584" }, e3.exports = t2.default;
        }, function(e3, t2, n2) {
          t2.__esModule = true, t2.default = { scheme: "monokai", author: "wimer hazenberg (http://www.monokai.nl)", base00: "#272822", base01: "#383830", base02: "#49483e", base03: "#75715e", base04: "#a59f85", base05: "#f8f8f2", base06: "#f5f4f1", base07: "#f9f8f5", base08: "#f92672", base09: "#fd971f", base0A: "#f4bf75", base0B: "#a6e22e", base0C: "#a1efe4", base0D: "#66d9ef", base0E: "#ae81ff", base0F: "#cc6633" }, e3.exports = t2.default;
        }, function(e3, t2, n2) {
          t2.__esModule = true, t2.default = { scheme: "ocean", author: "chris kempson (http://chriskempson.com)", base00: "#2b303b", base01: "#343d46", base02: "#4f5b66", base03: "#65737e", base04: "#a7adba", base05: "#c0c5ce", base06: "#dfe1e8", base07: "#eff1f5", base08: "#bf616a", base09: "#d08770", base0A: "#ebcb8b", base0B: "#a3be8c", base0C: "#96b5b4", base0D: "#8fa1b3", base0E: "#b48ead", base0F: "#ab7967" }, e3.exports = t2.default;
        }, function(e3, t2, n2) {
          t2.__esModule = true, t2.default = { scheme: "paraiso", author: "jan t. sott", base00: "#2f1e2e", base01: "#41323f", base02: "#4f424c", base03: "#776e71", base04: "#8d8687", base05: "#a39e9b", base06: "#b9b6b0", base07: "#e7e9db", base08: "#ef6155", base09: "#f99b15", base0A: "#fec418", base0B: "#48b685", base0C: "#5bc4bf", base0D: "#06b6ef", base0E: "#815ba4", base0F: "#e96ba8" }, e3.exports = t2.default;
        }, function(e3, t2, n2) {
          t2.__esModule = true, t2.default = { scheme: "pop", author: "chris kempson (http://chriskempson.com)", base00: "#000000", base01: "#202020", base02: "#303030", base03: "#505050", base04: "#b0b0b0", base05: "#d0d0d0", base06: "#e0e0e0", base07: "#ffffff", base08: "#eb008a", base09: "#f29333", base0A: "#f8ca12", base0B: "#37b349", base0C: "#00aabb", base0D: "#0e5a94", base0E: "#b31e8d", base0F: "#7a2d00" }, e3.exports = t2.default;
        }, function(e3, t2, n2) {
          t2.__esModule = true, t2.default = { scheme: "railscasts", author: "ryan bates (http://railscasts.com)", base00: "#2b2b2b", base01: "#272935", base02: "#3a4055", base03: "#5a647e", base04: "#d4cfc9", base05: "#e6e1dc", base06: "#f4f1ed", base07: "#f9f7f3", base08: "#da4939", base09: "#cc7833", base0A: "#ffc66d", base0B: "#a5c261", base0C: "#519f50", base0D: "#6d9cbe", base0E: "#b6b3eb", base0F: "#bc9458" }, e3.exports = t2.default;
        }, function(e3, t2, n2) {
          t2.__esModule = true, t2.default = { scheme: "shapeshifter", author: "tyler benziger (http://tybenz.com)", base00: "#000000", base01: "#040404", base02: "#102015", base03: "#343434", base04: "#555555", base05: "#ababab", base06: "#e0e0e0", base07: "#f9f9f9", base08: "#e92f2f", base09: "#e09448", base0A: "#dddd13", base0B: "#0ed839", base0C: "#23edda", base0D: "#3b48e3", base0E: "#f996e2", base0F: "#69542d" }, e3.exports = t2.default;
        }, function(e3, t2, n2) {
          t2.__esModule = true, t2.default = { scheme: "solarized", author: "ethan schoonover (http://ethanschoonover.com/solarized)", base00: "#002b36", base01: "#073642", base02: "#586e75", base03: "#657b83", base04: "#839496", base05: "#93a1a1", base06: "#eee8d5", base07: "#fdf6e3", base08: "#dc322f", base09: "#cb4b16", base0A: "#b58900", base0B: "#859900", base0C: "#2aa198", base0D: "#268bd2", base0E: "#6c71c4", base0F: "#d33682" }, e3.exports = t2.default;
        }, function(e3, t2, n2) {
          t2.__esModule = true, t2.default = { scheme: "summerfruit", author: "christopher corley (http://cscorley.github.io/)", base00: "#151515", base01: "#202020", base02: "#303030", base03: "#505050", base04: "#B0B0B0", base05: "#D0D0D0", base06: "#E0E0E0", base07: "#FFFFFF", base08: "#FF0086", base09: "#FD8900", base0A: "#ABA800", base0B: "#00C918", base0C: "#1faaaa", base0D: "#3777E6", base0E: "#AD00A1", base0F: "#cc6633" }, e3.exports = t2.default;
        }, function(e3, t2, n2) {
          t2.__esModule = true, t2.default = { scheme: "tomorrow", author: "chris kempson (http://chriskempson.com)", base00: "#1d1f21", base01: "#282a2e", base02: "#373b41", base03: "#969896", base04: "#b4b7b4", base05: "#c5c8c6", base06: "#e0e0e0", base07: "#ffffff", base08: "#cc6666", base09: "#de935f", base0A: "#f0c674", base0B: "#b5bd68", base0C: "#8abeb7", base0D: "#81a2be", base0E: "#b294bb", base0F: "#a3685a" }, e3.exports = t2.default;
        }, function(e3, t2, n2) {
          t2.__esModule = true, t2.default = { scheme: "london tube", author: "jan t. sott", base00: "#231f20", base01: "#1c3f95", base02: "#5a5758", base03: "#737171", base04: "#959ca1", base05: "#d9d8d8", base06: "#e7e7e8", base07: "#ffffff", base08: "#ee2e24", base09: "#f386a1", base0A: "#ffd204", base0B: "#00853e", base0C: "#85cebc", base0D: "#009ddc", base0E: "#98005d", base0F: "#b06110" }, e3.exports = t2.default;
        }, function(e3, t2, n2) {
          t2.__esModule = true, t2.default = { scheme: "twilight", author: "david hart (http://hart-dev.com)", base00: "#1e1e1e", base01: "#323537", base02: "#464b50", base03: "#5f5a60", base04: "#838184", base05: "#a7a7a7", base06: "#c3c3c3", base07: "#ffffff", base08: "#cf6a4c", base09: "#cda869", base0A: "#f9ee98", base0B: "#8f9d6a", base0C: "#afc4db", base0D: "#7587a6", base0E: "#9b859d", base0F: "#9b703f" }, e3.exports = t2.default;
        }, function(e3, t2, n2) {
          var a = n2(33);
          function r(e4) {
            var t3 = Math.round(a(e4, 0, 255)).toString(16);
            return 1 == t3.length ? "0" + t3 : t3;
          }
          e3.exports = function(e4) {
            var t3 = 4 === e4.length ? r(255 * e4[3]) : "";
            return "#" + r(e4[0]) + r(e4[1]) + r(e4[2]) + t3;
          };
        }, function(e3, t2, n2) {
          var a = n2(134), r = n2(135), o = n2(136), i = n2(137);
          var s = { "#": r, hsl: function(e4) {
            var t3 = a(e4), n3 = i(t3);
            return 4 === t3.length && n3.push(t3[3]), n3;
          }, rgb: o };
          function c2(e4) {
            for (var t3 in s)
              if (0 === e4.indexOf(t3))
                return s[t3](e4);
          }
          c2.rgb = o, c2.hsl = a, c2.hex = r, e3.exports = c2;
        }, function(e3, t2, n2) {
          var a = n2(44), r = n2(33);
          function o(e4, t3) {
            switch (e4 = parseFloat(e4), t3) {
              case 0:
                return r(e4, 0, 360);
              case 1:
              case 2:
                return r(e4, 0, 100);
              case 3:
                return r(e4, 0, 1);
            }
          }
          e3.exports = function(e4) {
            return a(e4).map(o);
          };
        }, function(e3, t2) {
          e3.exports = function(e4) {
            4 !== e4.length && 5 !== e4.length || (e4 = function(e5) {
              for (var t4 = "#", n3 = 1; n3 < e5.length; n3++) {
                var a = e5.charAt(n3);
                t4 += a + a;
              }
              return t4;
            }(e4));
            var t3 = [parseInt(e4.substring(1, 3), 16), parseInt(e4.substring(3, 5), 16), parseInt(e4.substring(5, 7), 16)];
            if (9 === e4.length) {
              var n2 = parseFloat((parseInt(e4.substring(7, 9), 16) / 255).toFixed(2));
              t3.push(n2);
            }
            return t3;
          };
        }, function(e3, t2, n2) {
          var a = n2(44), r = n2(33);
          function o(e4, t3) {
            return t3 < 3 ? -1 != e4.indexOf("%") ? Math.round(255 * r(parseInt(e4, 10), 0, 100) / 100) : r(parseInt(e4, 10), 0, 255) : r(parseFloat(e4), 0, 1);
          }
          e3.exports = function(e4) {
            return a(e4).map(o);
          };
        }, function(e3, t2) {
          e3.exports = function(e4) {
            var t3, n2, a, r, o, i = e4[0] / 360, s = e4[1] / 100, c2 = e4[2] / 100;
            if (0 == s)
              return [o = 255 * c2, o, o];
            t3 = 2 * c2 - (n2 = c2 < 0.5 ? c2 * (1 + s) : c2 + s - c2 * s), r = [0, 0, 0];
            for (var l2 = 0; l2 < 3; l2++)
              (a = i + 1 / 3 * -(l2 - 1)) < 0 && a++, a > 1 && a--, o = 6 * a < 1 ? t3 + 6 * (n2 - t3) * a : 2 * a < 1 ? n2 : 3 * a < 2 ? t3 + (n2 - t3) * (2 / 3 - a) * 6 : t3, r[l2] = 255 * o;
            return r;
          };
        }, function(e3, t2, n2) {
          (function(t3) {
            var n3 = "object" == typeof t3 && t3 && t3.Object === Object && t3, a = "object" == typeof self && self && self.Object === Object && self, r = n3 || a || Function("return this")();
            function o(e4, t4, n4) {
              switch (n4.length) {
                case 0:
                  return e4.call(t4);
                case 1:
                  return e4.call(t4, n4[0]);
                case 2:
                  return e4.call(t4, n4[0], n4[1]);
                case 3:
                  return e4.call(t4, n4[0], n4[1], n4[2]);
              }
              return e4.apply(t4, n4);
            }
            function i(e4, t4) {
              for (var n4 = -1, a2 = t4.length, r2 = e4.length; ++n4 < a2; )
                e4[r2 + n4] = t4[n4];
              return e4;
            }
            var s = Object.prototype, c2 = s.hasOwnProperty, l2 = s.toString, u2 = r.Symbol, f2 = s.propertyIsEnumerable, p2 = u2 ? u2.isConcatSpreadable : void 0, d2 = Math.max;
            function b2(e4) {
              return h2(e4) || function(e5) {
                return function(e6) {
                  return /* @__PURE__ */ function(e7) {
                    return !!e7 && "object" == typeof e7;
                  }(e6) && function(e7) {
                    return null != e7 && function(e8) {
                      return "number" == typeof e8 && e8 > -1 && e8 % 1 == 0 && e8 <= 9007199254740991;
                    }(e7.length) && !function(e8) {
                      var t4 = function(e9) {
                        var t5 = typeof e9;
                        return !!e9 && ("object" == t5 || "function" == t5);
                      }(e8) ? l2.call(e8) : "";
                      return "[object Function]" == t4 || "[object GeneratorFunction]" == t4;
                    }(e7);
                  }(e6);
                }(e5) && c2.call(e5, "callee") && (!f2.call(e5, "callee") || "[object Arguments]" == l2.call(e5));
              }(e4) || !!(p2 && e4 && e4[p2]);
            }
            var h2 = Array.isArray;
            var v2, m2, y, g2 = (m2 = function(e4) {
              var t4 = (e4 = function e5(t5, n5, a2, r2, o2) {
                var s2 = -1, c3 = t5.length;
                for (a2 || (a2 = b2), o2 || (o2 = []); ++s2 < c3; ) {
                  var l3 = t5[s2];
                  n5 > 0 && a2(l3) ? n5 > 1 ? e5(l3, n5 - 1, a2, r2, o2) : i(o2, l3) : r2 || (o2[o2.length] = l3);
                }
                return o2;
              }(e4, 1)).length, n4 = t4;
              for (v2; n4--; )
                if ("function" != typeof e4[n4])
                  throw new TypeError("Expected a function");
              return function() {
                for (var n5 = 0, a2 = t4 ? e4[n5].apply(this, arguments) : arguments[0]; ++n5 < t4; )
                  a2 = e4[n5].call(this, a2);
                return a2;
              };
            }, y = d2(void 0 === y ? m2.length - 1 : y, 0), function() {
              for (var e4 = arguments, t4 = -1, n4 = d2(e4.length - y, 0), a2 = Array(n4); ++t4 < n4; )
                a2[t4] = e4[y + t4];
              t4 = -1;
              for (var r2 = Array(y + 1); ++t4 < y; )
                r2[t4] = e4[t4];
              return r2[y] = a2, o(m2, this, r2);
            });
            e3.exports = g2;
          }).call(this, n2(43));
        }, function(e3, t2, n2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.yuv2rgb = function(e4) {
            var t3, n3, a, r = e4[0], o = e4[1], i = e4[2];
            return t3 = 1 * r + 0 * o + 1.13983 * i, n3 = 1 * r + -0.39465 * o + -0.5806 * i, a = 1 * r + 2.02311 * o + 0 * i, t3 = Math.min(Math.max(0, t3), 1), n3 = Math.min(Math.max(0, n3), 1), a = Math.min(Math.max(0, a), 1), [255 * t3, 255 * n3, 255 * a];
          }, t2.rgb2yuv = function(e4) {
            var t3 = e4[0] / 255, n3 = e4[1] / 255, a = e4[2] / 255;
            return [0.299 * t3 + 0.587 * n3 + 0.114 * a, -0.14713 * t3 + -0.28886 * n3 + 0.436 * a, 0.615 * t3 + -0.51499 * n3 + -0.10001 * a];
          };
        }, function(e3, t2, n2) {
          function a(e4, t3, n3) {
            return t3 in e4 ? Object.defineProperty(e4, t3, { value: n3, enumerable: true, configurable: true, writable: true }) : e4[t3] = n3, e4;
          }
          var r = n2(141), o = function() {
            function e4() {
              a(this, "_callbacks", void 0), a(this, "_isDispatching", void 0), a(this, "_isHandled", void 0), a(this, "_isPending", void 0), a(this, "_lastID", void 0), a(this, "_pendingPayload", void 0), this._callbacks = {}, this._isDispatching = false, this._isHandled = {}, this._isPending = {}, this._lastID = 1;
            }
            var t3 = e4.prototype;
            return t3.register = function(e5) {
              var t4 = "ID_" + this._lastID++;
              return this._callbacks[t4] = e5, t4;
            }, t3.unregister = function(e5) {
              this._callbacks[e5] || r(false), delete this._callbacks[e5];
            }, t3.waitFor = function(e5) {
              this._isDispatching || r(false);
              for (var t4 = 0; t4 < e5.length; t4++) {
                var n3 = e5[t4];
                this._isPending[n3] ? this._isHandled[n3] || r(false) : (this._callbacks[n3] || r(false), this._invokeCallback(n3));
              }
            }, t3.dispatch = function(e5) {
              this._isDispatching && r(false), this._startDispatching(e5);
              try {
                for (var t4 in this._callbacks)
                  this._isPending[t4] || this._invokeCallback(t4);
              } finally {
                this._stopDispatching();
              }
            }, t3.isDispatching = function() {
              return this._isDispatching;
            }, t3._invokeCallback = function(e5) {
              this._isPending[e5] = true, this._callbacks[e5](this._pendingPayload), this._isHandled[e5] = true;
            }, t3._startDispatching = function(e5) {
              for (var t4 in this._callbacks)
                this._isPending[t4] = false, this._isHandled[t4] = false;
              this._pendingPayload = e5, this._isDispatching = true;
            }, t3._stopDispatching = function() {
              delete this._pendingPayload, this._isDispatching = false;
            }, e4;
          }();
          e3.exports = o;
        }, function(e3, t2, n2) {
          e3.exports = function(e4, t3) {
            for (var n3 = arguments.length, r = new Array(n3 > 2 ? n3 - 2 : 0), o = 2; o < n3; o++)
              r[o - 2] = arguments[o];
            if (!e4) {
              var i;
              if (void 0 === t3)
                i = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
              else {
                var s = 0;
                (i = new Error(t3.replace(/%s/g, function() {
                  return String(r[s++]);
                }))).name = "Invariant Violation";
              }
              throw i.framesToPop = 1, i;
            }
          };
        }, function(e3, t2, n2) {
          function a(e4, t3, n3) {
            return t3 in e4 ? Object.defineProperty(e4, t3, { value: n3, enumerable: true, configurable: true, writable: true }) : e4[t3] = n3, e4;
          }
          function r(e4, t3) {
            var n3 = Object.keys(e4);
            if (Object.getOwnPropertySymbols) {
              var a2 = Object.getOwnPropertySymbols(e4);
              t3 && (a2 = a2.filter(function(t4) {
                return Object.getOwnPropertyDescriptor(e4, t4).enumerable;
              })), n3.push.apply(n3, a2);
            }
            return n3;
          }
          function o(e4) {
            for (var t3 = 1; t3 < arguments.length; t3++) {
              var n3 = null != arguments[t3] ? arguments[t3] : {};
              t3 % 2 ? r(Object(n3), true).forEach(function(t4) {
                a(e4, t4, n3[t4]);
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e4, Object.getOwnPropertyDescriptors(n3)) : r(Object(n3)).forEach(function(t4) {
                Object.defineProperty(e4, t4, Object.getOwnPropertyDescriptor(n3, t4));
              });
            }
            return e4;
          }
          function i(e4, t3) {
            if (!(e4 instanceof t3))
              throw new TypeError("Cannot call a class as a function");
          }
          function s(e4, t3) {
            for (var n3 = 0; n3 < t3.length; n3++) {
              var a2 = t3[n3];
              a2.enumerable = a2.enumerable || false, a2.configurable = true, "value" in a2 && (a2.writable = true), Object.defineProperty(e4, a2.key, a2);
            }
          }
          function c2(e4, t3, n3) {
            return t3 && s(e4.prototype, t3), n3 && s(e4, n3), e4;
          }
          function l2(e4, t3) {
            return (l2 = Object.setPrototypeOf || function(e5, t4) {
              return e5.__proto__ = t4, e5;
            })(e4, t3);
          }
          function u2(e4, t3) {
            if ("function" != typeof t3 && null !== t3)
              throw new TypeError("Super expression must either be null or a function");
            e4.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e4, writable: true, configurable: true } }), t3 && l2(e4, t3);
          }
          function f2(e4) {
            return (f2 = Object.setPrototypeOf ? Object.getPrototypeOf : function(e5) {
              return e5.__proto__ || Object.getPrototypeOf(e5);
            })(e4);
          }
          function p2(e4) {
            return (p2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e5) {
              return typeof e5;
            } : function(e5) {
              return e5 && "function" == typeof Symbol && e5.constructor === Symbol && e5 !== Symbol.prototype ? "symbol" : typeof e5;
            })(e4);
          }
          function d2(e4) {
            if (void 0 === e4)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e4;
          }
          function b2(e4, t3) {
            return !t3 || "object" !== p2(t3) && "function" != typeof t3 ? d2(e4) : t3;
          }
          function h2(e4) {
            var t3 = function() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if ("function" == typeof Proxy)
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (e5) {
                return false;
              }
            }();
            return function() {
              var n3, a2 = f2(e4);
              if (t3) {
                var r2 = f2(this).constructor;
                n3 = Reflect.construct(a2, arguments, r2);
              } else
                n3 = a2.apply(this, arguments);
              return b2(this, n3);
            };
          }
          n2.r(t2);
          var v2 = n2(0), m2 = n2.n(v2);
          function y() {
            var e4 = this.constructor.getDerivedStateFromProps(this.props, this.state);
            null != e4 && this.setState(e4);
          }
          function g2(e4) {
            this.setState((function(t3) {
              var n3 = this.constructor.getDerivedStateFromProps(e4, t3);
              return null != n3 ? n3 : null;
            }).bind(this));
          }
          function E(e4, t3) {
            try {
              var n3 = this.props, a2 = this.state;
              this.props = e4, this.state = t3, this.__reactInternalSnapshotFlag = true, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n3, a2);
            } finally {
              this.props = n3, this.state = a2;
            }
          }
          function j(e4) {
            var t3 = e4.prototype;
            if (!t3 || !t3.isReactComponent)
              throw new Error("Can only polyfill class components");
            if ("function" != typeof e4.getDerivedStateFromProps && "function" != typeof t3.getSnapshotBeforeUpdate)
              return e4;
            var n3 = null, a2 = null, r2 = null;
            if ("function" == typeof t3.componentWillMount ? n3 = "componentWillMount" : "function" == typeof t3.UNSAFE_componentWillMount && (n3 = "UNSAFE_componentWillMount"), "function" == typeof t3.componentWillReceiveProps ? a2 = "componentWillReceiveProps" : "function" == typeof t3.UNSAFE_componentWillReceiveProps && (a2 = "UNSAFE_componentWillReceiveProps"), "function" == typeof t3.componentWillUpdate ? r2 = "componentWillUpdate" : "function" == typeof t3.UNSAFE_componentWillUpdate && (r2 = "UNSAFE_componentWillUpdate"), null !== n3 || null !== a2 || null !== r2) {
              var o2 = e4.displayName || e4.name, i2 = "function" == typeof e4.getDerivedStateFromProps ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
              throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" + o2 + " uses " + i2 + " but also contains the following legacy lifecycles:" + (null !== n3 ? "\n  " + n3 : "") + (null !== a2 ? "\n  " + a2 : "") + (null !== r2 ? "\n  " + r2 : "") + "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks");
            }
            if ("function" == typeof e4.getDerivedStateFromProps && (t3.componentWillMount = y, t3.componentWillReceiveProps = g2), "function" == typeof t3.getSnapshotBeforeUpdate) {
              if ("function" != typeof t3.componentDidUpdate)
                throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");
              t3.componentWillUpdate = E;
              var s2 = t3.componentDidUpdate;
              t3.componentDidUpdate = function(e5, t4, n4) {
                var a3 = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : n4;
                s2.call(this, e5, t4, a3);
              };
            }
            return e4;
          }
          function x(e4, t3) {
            if (null == e4)
              return {};
            var n3, a2, r2 = function(e5, t4) {
              if (null == e5)
                return {};
              var n4, a3, r3 = {}, o3 = Object.keys(e5);
              for (a3 = 0; a3 < o3.length; a3++)
                n4 = o3[a3], t4.indexOf(n4) >= 0 || (r3[n4] = e5[n4]);
              return r3;
            }(e4, t3);
            if (Object.getOwnPropertySymbols) {
              var o2 = Object.getOwnPropertySymbols(e4);
              for (a2 = 0; a2 < o2.length; a2++)
                n3 = o2[a2], t3.indexOf(n3) >= 0 || Object.prototype.propertyIsEnumerable.call(e4, n3) && (r2[n3] = e4[n3]);
            }
            return r2;
          }
          function _2(e4) {
            var t3 = function(e5) {
              return {}.toString.call(e5).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
            }(e4);
            return "number" === t3 && (t3 = isNaN(e4) ? "nan" : (0 | e4) != e4 ? "float" : "integer"), t3;
          }
          y.__suppressDeprecationWarning = true, g2.__suppressDeprecationWarning = true, E.__suppressDeprecationWarning = true;
          var k2 = { scheme: "rjv-default", author: "mac gainor", base00: "rgba(0, 0, 0, 0)", base01: "rgb(245, 245, 245)", base02: "rgb(235, 235, 235)", base03: "#93a1a1", base04: "rgba(0, 0, 0, 0.3)", base05: "#586e75", base06: "#073642", base07: "#002b36", base08: "#d33682", base09: "#cb4b16", base0A: "#dc322f", base0B: "#859900", base0C: "#6c71c4", base0D: "#586e75", base0E: "#2aa198", base0F: "#268bd2" }, O = { scheme: "rjv-grey", author: "mac gainor", base00: "rgba(1, 1, 1, 0)", base01: "rgba(1, 1, 1, 0.1)", base02: "rgba(0, 0, 0, 0.2)", base03: "rgba(1, 1, 1, 0.3)", base04: "rgba(0, 0, 0, 0.4)", base05: "rgba(1, 1, 1, 0.5)", base06: "rgba(1, 1, 1, 0.6)", base07: "rgba(1, 1, 1, 0.7)", base08: "rgba(1, 1, 1, 0.8)", base09: "rgba(1, 1, 1, 0.8)", base0A: "rgba(1, 1, 1, 0.8)", base0B: "rgba(1, 1, 1, 0.8)", base0C: "rgba(1, 1, 1, 0.8)", base0D: "rgba(1, 1, 1, 0.8)", base0E: "rgba(1, 1, 1, 0.8)", base0F: "rgba(1, 1, 1, 0.8)" }, C = { white: "#fff", black: "#000", transparent: "rgba(1, 1, 1, 0)", globalFontFamily: "monospace", globalCursor: "default", indentBlockWidth: "5px", braceFontWeight: "bold", braceCursor: "pointer", ellipsisFontSize: "18px", ellipsisLineHeight: "10px", ellipsisCursor: "pointer", keyMargin: "0px 5px", keyLetterSpacing: "0.5px", keyFontStyle: "none", keyBorderRadius: "3px", keyColonWeight: "bold", keyVerticalAlign: "top", keyOpacity: "0.85", keyOpacityHover: "1", keyValPaddingTop: "3px", keyValPaddingBottom: "3px", keyValPaddingRight: "5px", keyValBorderLeft: "1px solid", keyValBorderHover: "2px solid", keyValPaddingHover: "3px 5px 3px 4px", pushedContentMarginLeft: "6px", variableValuePaddingRight: "6px", nullFontSize: "11px", nullFontWeight: "bold", nullPadding: "1px 2px", nullBorderRadius: "3px", nanFontSize: "11px", nanFontWeight: "bold", nanPadding: "1px 2px", nanBorderRadius: "3px", undefinedFontSize: "11px", undefinedFontWeight: "bold", undefinedPadding: "1px 2px", undefinedBorderRadius: "3px", dataTypeFontSize: "11px", dataTypeMarginRight: "4px", datatypeOpacity: "0.8", objectSizeBorderRadius: "3px", objectSizeFontStyle: "italic", objectSizeMargin: "0px 6px 0px 0px", clipboardCursor: "pointer", clipboardCheckMarginLeft: "-12px", metaDataPadding: "0px 0px 0px 10px", arrayGroupMetaPadding: "0px 0px 0px 4px", iconContainerWidth: "17px", tooltipPadding: "4px", editInputMinWidth: "130px", editInputBorderRadius: "2px", editInputPadding: "5px", editInputMarginRight: "4px", editInputFontFamily: "monospace", iconCursor: "pointer", iconFontSize: "15px", iconPaddingRight: "1px", dateValueMarginLeft: "2px", iconMarginRight: "3px", detectedRowPaddingTop: "3px", addKeyCoverBackground: "rgba(255, 255, 255, 0.3)", addKeyCoverPosition: "absolute", addKeyCoverPositionPx: "0px", addKeyModalWidth: "200px", addKeyModalMargin: "auto", addKeyModalPadding: "10px", addKeyModalRadius: "3px" }, S = n2(45), w = function(e4) {
            var t3 = function(e5) {
              return { backgroundColor: e5.base00, ellipsisColor: e5.base09, braceColor: e5.base07, expandedIcon: e5.base0D, collapsedIcon: e5.base0E, keyColor: e5.base07, arrayKeyColor: e5.base0C, objectSize: e5.base04, copyToClipboard: e5.base0F, copyToClipboardCheck: e5.base0D, objectBorder: e5.base02, dataTypes: { boolean: e5.base0E, date: e5.base0D, float: e5.base0B, function: e5.base0D, integer: e5.base0F, string: e5.base09, nan: e5.base08, null: e5.base0A, undefined: e5.base05, regexp: e5.base0A, background: e5.base02 }, editVariable: { editIcon: e5.base0E, cancelIcon: e5.base09, removeIcon: e5.base09, addIcon: e5.base0E, checkIcon: e5.base0E, background: e5.base01, color: e5.base0A, border: e5.base07 }, addKeyModal: { background: e5.base05, border: e5.base04, color: e5.base0A, labelColor: e5.base01 }, validationFailure: { background: e5.base09, iconColor: e5.base01, fontColor: e5.base01 } };
            }(e4);
            return { "app-container": { fontFamily: C.globalFontFamily, cursor: C.globalCursor, backgroundColor: t3.backgroundColor, position: "relative" }, ellipsis: { display: "inline-block", color: t3.ellipsisColor, fontSize: C.ellipsisFontSize, lineHeight: C.ellipsisLineHeight, cursor: C.ellipsisCursor }, "brace-row": { display: "inline-block", cursor: "pointer" }, brace: { display: "inline-block", cursor: C.braceCursor, fontWeight: C.braceFontWeight, color: t3.braceColor }, "expanded-icon": { color: t3.expandedIcon }, "collapsed-icon": { color: t3.collapsedIcon }, colon: { display: "inline-block", margin: C.keyMargin, color: t3.keyColor, verticalAlign: "top" }, objectKeyVal: function(e5, n3) {
              return { style: o({ paddingTop: C.keyValPaddingTop, paddingRight: C.keyValPaddingRight, paddingBottom: C.keyValPaddingBottom, borderLeft: C.keyValBorderLeft + " " + t3.objectBorder, ":hover": { paddingLeft: n3.paddingLeft - 1 + "px", borderLeft: C.keyValBorderHover + " " + t3.objectBorder } }, n3) };
            }, "object-key-val-no-border": { padding: C.keyValPadding }, "pushed-content": { marginLeft: C.pushedContentMarginLeft }, variableValue: function(e5, t4) {
              return { style: o({ display: "inline-block", paddingRight: C.variableValuePaddingRight, position: "relative" }, t4) };
            }, "object-name": { display: "inline-block", color: t3.keyColor, letterSpacing: C.keyLetterSpacing, fontStyle: C.keyFontStyle, verticalAlign: C.keyVerticalAlign, opacity: C.keyOpacity, ":hover": { opacity: C.keyOpacityHover } }, "array-key": { display: "inline-block", color: t3.arrayKeyColor, letterSpacing: C.keyLetterSpacing, fontStyle: C.keyFontStyle, verticalAlign: C.keyVerticalAlign, opacity: C.keyOpacity, ":hover": { opacity: C.keyOpacityHover } }, "object-size": { color: t3.objectSize, borderRadius: C.objectSizeBorderRadius, fontStyle: C.objectSizeFontStyle, margin: C.objectSizeMargin, cursor: "default" }, "data-type-label": { fontSize: C.dataTypeFontSize, marginRight: C.dataTypeMarginRight, opacity: C.datatypeOpacity }, boolean: { display: "inline-block", color: t3.dataTypes.boolean }, date: { display: "inline-block", color: t3.dataTypes.date }, "date-value": { marginLeft: C.dateValueMarginLeft }, float: { display: "inline-block", color: t3.dataTypes.float }, function: { display: "inline-block", color: t3.dataTypes.function, cursor: "pointer", whiteSpace: "pre-line" }, "function-value": { fontStyle: "italic" }, integer: { display: "inline-block", color: t3.dataTypes.integer }, string: { display: "inline-block", color: t3.dataTypes.string }, nan: { display: "inline-block", color: t3.dataTypes.nan, fontSize: C.nanFontSize, fontWeight: C.nanFontWeight, backgroundColor: t3.dataTypes.background, padding: C.nanPadding, borderRadius: C.nanBorderRadius }, null: { display: "inline-block", color: t3.dataTypes.null, fontSize: C.nullFontSize, fontWeight: C.nullFontWeight, backgroundColor: t3.dataTypes.background, padding: C.nullPadding, borderRadius: C.nullBorderRadius }, undefined: { display: "inline-block", color: t3.dataTypes.undefined, fontSize: C.undefinedFontSize, padding: C.undefinedPadding, borderRadius: C.undefinedBorderRadius, backgroundColor: t3.dataTypes.background }, regexp: { display: "inline-block", color: t3.dataTypes.regexp }, "copy-to-clipboard": { cursor: C.clipboardCursor }, "copy-icon": { color: t3.copyToClipboard, fontSize: C.iconFontSize, marginRight: C.iconMarginRight, verticalAlign: "top" }, "copy-icon-copied": { color: t3.copyToClipboardCheck, marginLeft: C.clipboardCheckMarginLeft }, "array-group-meta-data": { display: "inline-block", padding: C.arrayGroupMetaPadding }, "object-meta-data": { display: "inline-block", padding: C.metaDataPadding }, "icon-container": { display: "inline-block", width: C.iconContainerWidth }, tooltip: { padding: C.tooltipPadding }, removeVarIcon: { verticalAlign: "top", display: "inline-block", color: t3.editVariable.removeIcon, cursor: C.iconCursor, fontSize: C.iconFontSize, marginRight: C.iconMarginRight }, addVarIcon: { verticalAlign: "top", display: "inline-block", color: t3.editVariable.addIcon, cursor: C.iconCursor, fontSize: C.iconFontSize, marginRight: C.iconMarginRight }, editVarIcon: { verticalAlign: "top", display: "inline-block", color: t3.editVariable.editIcon, cursor: C.iconCursor, fontSize: C.iconFontSize, marginRight: C.iconMarginRight }, "edit-icon-container": { display: "inline-block", verticalAlign: "top" }, "check-icon": { display: "inline-block", cursor: C.iconCursor, color: t3.editVariable.checkIcon, fontSize: C.iconFontSize, paddingRight: C.iconPaddingRight }, "cancel-icon": { display: "inline-block", cursor: C.iconCursor, color: t3.editVariable.cancelIcon, fontSize: C.iconFontSize, paddingRight: C.iconPaddingRight }, "edit-input": { display: "inline-block", minWidth: C.editInputMinWidth, borderRadius: C.editInputBorderRadius, backgroundColor: t3.editVariable.background, color: t3.editVariable.color, padding: C.editInputPadding, marginRight: C.editInputMarginRight, fontFamily: C.editInputFontFamily }, "detected-row": { paddingTop: C.detectedRowPaddingTop }, "key-modal-request": { position: C.addKeyCoverPosition, top: C.addKeyCoverPositionPx, left: C.addKeyCoverPositionPx, right: C.addKeyCoverPositionPx, bottom: C.addKeyCoverPositionPx, backgroundColor: C.addKeyCoverBackground }, "key-modal": { width: C.addKeyModalWidth, backgroundColor: t3.addKeyModal.background, marginLeft: C.addKeyModalMargin, marginRight: C.addKeyModalMargin, padding: C.addKeyModalPadding, borderRadius: C.addKeyModalRadius, marginTop: "15px", position: "relative" }, "key-modal-label": { color: t3.addKeyModal.labelColor, marginLeft: "2px", marginBottom: "5px", fontSize: "11px" }, "key-modal-input-container": { overflow: "hidden" }, "key-modal-input": { width: "100%", padding: "3px 6px", fontFamily: "monospace", color: t3.addKeyModal.color, border: "none", boxSizing: "border-box", borderRadius: "2px" }, "key-modal-cancel": { backgroundColor: t3.editVariable.removeIcon, position: "absolute", top: "0px", right: "0px", borderRadius: "0px 3px 0px 3px", cursor: "pointer" }, "key-modal-cancel-icon": { color: t3.addKeyModal.labelColor, fontSize: C.iconFontSize, transform: "rotate(45deg)" }, "key-modal-submit": { color: t3.editVariable.addIcon, fontSize: C.iconFontSize, position: "absolute", right: "2px", top: "3px", cursor: "pointer" }, "function-ellipsis": { display: "inline-block", color: t3.ellipsisColor, fontSize: C.ellipsisFontSize, lineHeight: C.ellipsisLineHeight, cursor: C.ellipsisCursor }, "validation-failure": { float: "right", padding: "3px 6px", borderRadius: "2px", cursor: "pointer", color: t3.validationFailure.fontColor, backgroundColor: t3.validationFailure.background }, "validation-failure-label": { marginRight: "6px" }, "validation-failure-clear": { position: "relative", verticalAlign: "top", cursor: "pointer", color: t3.validationFailure.iconColor, fontSize: C.iconFontSize, transform: "rotate(45deg)" } };
          };
          function A(e4, t3, n3) {
            return e4 || console.error("theme has not been set"), function(e5) {
              var t4 = k2;
              return false !== e5 && "none" !== e5 || (t4 = O), Object(S.createStyling)(w, { defaultBase16: t4 })(e5);
            }(e4)(t3, n3);
          }
          var M = function(e4) {
            u2(n3, e4);
            var t3 = h2(n3);
            function n3() {
              return i(this, n3), t3.apply(this, arguments);
            }
            return c2(n3, [{ key: "render", value: function() {
              var e5 = this.props, t4 = (e5.rjvId, e5.type_name), n4 = e5.displayDataTypes, a2 = e5.theme;
              return n4 ? m2.a.createElement("span", Object.assign({ className: "data-type-label" }, A(a2, "data-type-label")), t4) : null;
            } }]), n3;
          }(m2.a.PureComponent), P = function(e4) {
            u2(n3, e4);
            var t3 = h2(n3);
            function n3() {
              return i(this, n3), t3.apply(this, arguments);
            }
            return c2(n3, [{ key: "render", value: function() {
              var e5 = this.props;
              return m2.a.createElement("div", A(e5.theme, "boolean"), m2.a.createElement(M, Object.assign({ type_name: "bool" }, e5)), e5.value ? "true" : "false");
            } }]), n3;
          }(m2.a.PureComponent), F = function(e4) {
            u2(n3, e4);
            var t3 = h2(n3);
            function n3() {
              return i(this, n3), t3.apply(this, arguments);
            }
            return c2(n3, [{ key: "render", value: function() {
              var e5 = this.props;
              return m2.a.createElement("div", A(e5.theme, "date"), m2.a.createElement(M, Object.assign({ type_name: "date" }, e5)), m2.a.createElement("span", Object.assign({ className: "date-value" }, A(e5.theme, "date-value")), e5.value.toLocaleTimeString("en-us", { weekday: "short", year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })));
            } }]), n3;
          }(m2.a.PureComponent), D = function(e4) {
            u2(n3, e4);
            var t3 = h2(n3);
            function n3() {
              return i(this, n3), t3.apply(this, arguments);
            }
            return c2(n3, [{ key: "render", value: function() {
              var e5 = this.props;
              return m2.a.createElement("div", A(e5.theme, "float"), m2.a.createElement(M, Object.assign({ type_name: "float" }, e5)), this.props.value);
            } }]), n3;
          }(m2.a.PureComponent);
          function I(e4, t3) {
            (null == t3 || t3 > e4.length) && (t3 = e4.length);
            for (var n3 = 0, a2 = new Array(t3); n3 < t3; n3++)
              a2[n3] = e4[n3];
            return a2;
          }
          function R(e4, t3) {
            if (e4) {
              if ("string" == typeof e4)
                return I(e4, t3);
              var n3 = Object.prototype.toString.call(e4).slice(8, -1);
              return "Object" === n3 && e4.constructor && (n3 = e4.constructor.name), "Map" === n3 || "Set" === n3 ? Array.from(e4) : "Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? I(e4, t3) : void 0;
            }
          }
          function L(e4, t3) {
            var n3;
            if ("undefined" == typeof Symbol || null == e4[Symbol.iterator]) {
              if (Array.isArray(e4) || (n3 = R(e4)) || t3 && e4 && "number" == typeof e4.length) {
                n3 && (e4 = n3);
                var a2 = 0, r2 = function() {
                };
                return { s: r2, n: function() {
                  return a2 >= e4.length ? { done: true } : { done: false, value: e4[a2++] };
                }, e: function(e5) {
                  throw e5;
                }, f: r2 };
              }
              throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var o2, i2 = true, s2 = false;
            return { s: function() {
              n3 = e4[Symbol.iterator]();
            }, n: function() {
              var e5 = n3.next();
              return i2 = e5.done, e5;
            }, e: function(e5) {
              s2 = true, o2 = e5;
            }, f: function() {
              try {
                i2 || null == n3.return || n3.return();
              } finally {
                if (s2)
                  throw o2;
              }
            } };
          }
          function B(e4) {
            return function(e5) {
              if (Array.isArray(e5))
                return I(e5);
            }(e4) || function(e5) {
              if ("undefined" != typeof Symbol && Symbol.iterator in Object(e5))
                return Array.from(e5);
            }(e4) || R(e4) || function() {
              throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
          }
          var N = n2(46), z = new (n2(47)).Dispatcher(), T = new (function(e4) {
            u2(n3, e4);
            var t3 = h2(n3);
            function n3() {
              var e5;
              i(this, n3);
              for (var a2 = arguments.length, r2 = new Array(a2), s2 = 0; s2 < a2; s2++)
                r2[s2] = arguments[s2];
              return (e5 = t3.call.apply(t3, [this].concat(r2))).objects = {}, e5.set = function(t4, n4, a3, r3) {
                void 0 === e5.objects[t4] && (e5.objects[t4] = {}), void 0 === e5.objects[t4][n4] && (e5.objects[t4][n4] = {}), e5.objects[t4][n4][a3] = r3;
              }, e5.get = function(t4, n4, a3, r3) {
                return void 0 === e5.objects[t4] || void 0 === e5.objects[t4][n4] || null == e5.objects[t4][n4][a3] ? r3 : e5.objects[t4][n4][a3];
              }, e5.handleAction = function(t4) {
                var n4 = t4.rjvId, a3 = t4.data;
                switch (t4.name) {
                  case "RESET":
                    e5.emit("reset-" + n4);
                    break;
                  case "VARIABLE_UPDATED":
                    t4.data.updated_src = e5.updateSrc(n4, a3), e5.set(n4, "action", "variable-update", o(o({}, a3), {}, { type: "variable-edited" })), e5.emit("variable-update-" + n4);
                    break;
                  case "VARIABLE_REMOVED":
                    t4.data.updated_src = e5.updateSrc(n4, a3), e5.set(n4, "action", "variable-update", o(o({}, a3), {}, { type: "variable-removed" })), e5.emit("variable-update-" + n4);
                    break;
                  case "VARIABLE_ADDED":
                    t4.data.updated_src = e5.updateSrc(n4, a3), e5.set(n4, "action", "variable-update", o(o({}, a3), {}, { type: "variable-added" })), e5.emit("variable-update-" + n4);
                    break;
                  case "ADD_VARIABLE_KEY_REQUEST":
                    e5.set(n4, "action", "new-key-request", a3), e5.emit("add-key-request-" + n4);
                }
              }, e5.updateSrc = function(t4, n4) {
                var a3 = n4.name, r3 = n4.namespace, o2 = n4.new_value, i2 = (n4.existing_value, n4.variable_removed);
                r3.shift();
                var s3, c3 = e5.get(t4, "global", "src"), l3 = e5.deepCopy(c3, B(r3)), u3 = l3, f3 = L(r3);
                try {
                  for (f3.s(); !(s3 = f3.n()).done; ) {
                    u3 = u3[s3.value];
                  }
                } catch (e6) {
                  f3.e(e6);
                } finally {
                  f3.f();
                }
                return i2 ? "array" == _2(u3) ? u3.splice(a3, 1) : delete u3[a3] : null !== a3 ? u3[a3] = o2 : l3 = o2, e5.set(t4, "global", "src", l3), l3;
              }, e5.deepCopy = function(t4, n4) {
                var a3, r3 = _2(t4), i2 = n4.shift();
                return "array" == r3 ? a3 = B(t4) : "object" == r3 && (a3 = o({}, t4)), void 0 !== i2 && (a3[i2] = e5.deepCopy(t4[i2], n4)), a3;
              }, e5;
            }
            return n3;
          }(N.EventEmitter))();
          z.register(T.handleAction.bind(T));
          var q2 = T, V = function(e4) {
            u2(n3, e4);
            var t3 = h2(n3);
            function n3(e5) {
              var a2;
              return i(this, n3), (a2 = t3.call(this, e5)).toggleCollapsed = function() {
                a2.setState({ collapsed: !a2.state.collapsed }, function() {
                  q2.set(a2.props.rjvId, a2.props.namespace, "collapsed", a2.state.collapsed);
                });
              }, a2.getFunctionDisplay = function(e6) {
                var t4 = d2(a2).props;
                return e6 ? m2.a.createElement("span", null, a2.props.value.toString().slice(9, -1).replace(/\{[\s\S]+/, ""), m2.a.createElement("span", { className: "function-collapsed", style: { fontWeight: "bold" } }, m2.a.createElement("span", null, "{"), m2.a.createElement("span", A(t4.theme, "ellipsis"), "..."), m2.a.createElement("span", null, "}"))) : a2.props.value.toString().slice(9, -1);
              }, a2.state = { collapsed: q2.get(e5.rjvId, e5.namespace, "collapsed", true) }, a2;
            }
            return c2(n3, [{ key: "render", value: function() {
              var e5 = this.props, t4 = this.state.collapsed;
              return m2.a.createElement("div", A(e5.theme, "function"), m2.a.createElement(M, Object.assign({ type_name: "function" }, e5)), m2.a.createElement("span", Object.assign({}, A(e5.theme, "function-value"), { className: "rjv-function-container", onClick: this.toggleCollapsed }), this.getFunctionDisplay(t4)));
            } }]), n3;
          }(m2.a.PureComponent), K = function(e4) {
            u2(n3, e4);
            var t3 = h2(n3);
            function n3() {
              return i(this, n3), t3.apply(this, arguments);
            }
            return c2(n3, [{ key: "render", value: function() {
              return m2.a.createElement("div", A(this.props.theme, "nan"), "NaN");
            } }]), n3;
          }(m2.a.PureComponent), W = function(e4) {
            u2(n3, e4);
            var t3 = h2(n3);
            function n3() {
              return i(this, n3), t3.apply(this, arguments);
            }
            return c2(n3, [{ key: "render", value: function() {
              return m2.a.createElement("div", A(this.props.theme, "null"), "NULL");
            } }]), n3;
          }(m2.a.PureComponent), H = function(e4) {
            u2(n3, e4);
            var t3 = h2(n3);
            function n3() {
              return i(this, n3), t3.apply(this, arguments);
            }
            return c2(n3, [{ key: "render", value: function() {
              var e5 = this.props;
              return m2.a.createElement("div", A(e5.theme, "integer"), m2.a.createElement(M, Object.assign({ type_name: "int" }, e5)), this.props.value);
            } }]), n3;
          }(m2.a.PureComponent), U = function(e4) {
            u2(n3, e4);
            var t3 = h2(n3);
            function n3() {
              return i(this, n3), t3.apply(this, arguments);
            }
            return c2(n3, [{ key: "render", value: function() {
              var e5 = this.props;
              return m2.a.createElement("div", A(e5.theme, "regexp"), m2.a.createElement(M, Object.assign({ type_name: "regexp" }, e5)), this.props.value.toString());
            } }]), n3;
          }(m2.a.PureComponent), G = function(e4) {
            u2(n3, e4);
            var t3 = h2(n3);
            function n3(e5) {
              var a2;
              return i(this, n3), (a2 = t3.call(this, e5)).toggleCollapsed = function() {
                a2.setState({ collapsed: !a2.state.collapsed }, function() {
                  q2.set(a2.props.rjvId, a2.props.namespace, "collapsed", a2.state.collapsed);
                });
              }, a2.state = { collapsed: q2.get(e5.rjvId, e5.namespace, "collapsed", true) }, a2;
            }
            return c2(n3, [{ key: "render", value: function() {
              this.state.collapsed;
              var e5 = this.props, t4 = e5.collapseStringsAfterLength, n4 = e5.theme, a2 = e5.value, r2 = { style: { cursor: "default" } };
              return "integer" === _2(t4) && a2.length > t4 && (r2.style.cursor = "pointer", this.state.collapsed && (a2 = m2.a.createElement("span", null, a2.substring(0, t4), m2.a.createElement("span", A(n4, "ellipsis"), " ...")))), m2.a.createElement("div", A(n4, "string"), m2.a.createElement(M, Object.assign({ type_name: "string" }, e5)), m2.a.createElement("span", Object.assign({ className: "string-value" }, r2, { onClick: this.toggleCollapsed }), '"', a2, '"'));
            } }]), n3;
          }(m2.a.PureComponent), J = function(e4) {
            u2(n3, e4);
            var t3 = h2(n3);
            function n3() {
              return i(this, n3), t3.apply(this, arguments);
            }
            return c2(n3, [{ key: "render", value: function() {
              return m2.a.createElement("div", A(this.props.theme, "undefined"), "undefined");
            } }]), n3;
          }(m2.a.PureComponent);
          function Y() {
            return (Y = Object.assign || function(e4) {
              for (var t3 = 1; t3 < arguments.length; t3++) {
                var n3 = arguments[t3];
                for (var a2 in n3)
                  Object.prototype.hasOwnProperty.call(n3, a2) && (e4[a2] = n3[a2]);
              }
              return e4;
            }).apply(this, arguments);
          }
          var $ = v2.useLayoutEffect, Q = function(e4) {
            var t3 = Object(v2.useRef)(e4);
            return $(function() {
              t3.current = e4;
            }), t3;
          }, Z = function(e4, t3) {
            "function" != typeof e4 ? e4.current = t3 : e4(t3);
          }, X = function(e4, t3) {
            var n3 = Object(v2.useRef)();
            return Object(v2.useCallback)(function(a2) {
              e4.current = a2, n3.current && Z(n3.current, null), n3.current = t3, t3 && Z(t3, a2);
            }, [t3]);
          }, ee = { "min-height": "0", "max-height": "none", height: "0", visibility: "hidden", overflow: "hidden", position: "absolute", "z-index": "-1000", top: "0", right: "0" }, te = function(e4) {
            Object.keys(ee).forEach(function(t3) {
              e4.style.setProperty(t3, ee[t3], "important");
            });
          }, ne = null;
          var ae = function() {
          }, re = ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "boxSizing", "fontFamily", "fontSize", "fontStyle", "fontWeight", "letterSpacing", "lineHeight", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "tabSize", "textIndent", "textRendering", "textTransform", "width"], oe = !!document.documentElement.currentStyle, ie = function(e4, t3) {
            var n3 = e4.cacheMeasurements, a2 = e4.maxRows, r2 = e4.minRows, o2 = e4.onChange, i2 = void 0 === o2 ? ae : o2, s2 = e4.onHeightChange, c3 = void 0 === s2 ? ae : s2, l3 = function(e5, t4) {
              if (null == e5)
                return {};
              var n4, a3, r3 = {}, o3 = Object.keys(e5);
              for (a3 = 0; a3 < o3.length; a3++)
                n4 = o3[a3], t4.indexOf(n4) >= 0 || (r3[n4] = e5[n4]);
              return r3;
            }(e4, ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"]);
            var u3, f3 = void 0 !== l3.value, p3 = Object(v2.useRef)(null), d3 = X(p3, t3), b3 = Object(v2.useRef)(0), h3 = Object(v2.useRef)(), m3 = function() {
              var e5 = p3.current, t4 = n3 && h3.current ? h3.current : function(e6) {
                var t5 = window.getComputedStyle(e6);
                if (null === t5)
                  return null;
                var n4, a3 = (n4 = t5, re.reduce(function(e7, t6) {
                  return e7[t6] = n4[t6], e7;
                }, {})), r3 = a3.boxSizing;
                return "" === r3 ? null : (oe && "border-box" === r3 && (a3.width = parseFloat(a3.width) + parseFloat(a3.borderRightWidth) + parseFloat(a3.borderLeftWidth) + parseFloat(a3.paddingRight) + parseFloat(a3.paddingLeft) + "px"), { sizingStyle: a3, paddingSize: parseFloat(a3.paddingBottom) + parseFloat(a3.paddingTop), borderSize: parseFloat(a3.borderBottomWidth) + parseFloat(a3.borderTopWidth) });
              }(e5);
              if (t4) {
                h3.current = t4;
                var o3 = function(e6, t5, n4, a3) {
                  void 0 === n4 && (n4 = 1), void 0 === a3 && (a3 = 1 / 0), ne || ((ne = document.createElement("textarea")).setAttribute("tab-index", "-1"), ne.setAttribute("aria-hidden", "true"), te(ne)), null === ne.parentNode && document.body.appendChild(ne);
                  var r3 = e6.paddingSize, o4 = e6.borderSize, i4 = e6.sizingStyle, s4 = i4.boxSizing;
                  Object.keys(i4).forEach(function(e7) {
                    var t6 = e7;
                    ne.style[t6] = i4[t6];
                  }), te(ne), ne.value = t5;
                  var c4 = function(e7, t6) {
                    var n5 = e7.scrollHeight;
                    return "border-box" === t6.sizingStyle.boxSizing ? n5 + t6.borderSize : n5 - t6.paddingSize;
                  }(ne, e6);
                  ne.value = "x";
                  var l4 = ne.scrollHeight - r3, u4 = l4 * n4;
                  "border-box" === s4 && (u4 = u4 + r3 + o4), c4 = Math.max(u4, c4);
                  var f4 = l4 * a3;
                  return "border-box" === s4 && (f4 = f4 + r3 + o4), [c4 = Math.min(f4, c4), l4];
                }(t4, e5.value || e5.placeholder || "x", r2, a2), i3 = o3[0], s3 = o3[1];
                b3.current !== i3 && (b3.current = i3, e5.style.setProperty("height", i3 + "px", "important"), c3(i3, { rowHeight: s3 }));
              }
            };
            return Object(v2.useLayoutEffect)(m3), u3 = Q(m3), Object(v2.useLayoutEffect)(function() {
              var e5 = function(e6) {
                u3.current(e6);
              };
              return window.addEventListener("resize", e5), function() {
                window.removeEventListener("resize", e5);
              };
            }, []), Object(v2.createElement)("textarea", Y({}, l3, { onChange: function(e5) {
              f3 || m3(), i2(e5);
            }, ref: d3 }));
          }, se = Object(v2.forwardRef)(ie);
          function ce(e4) {
            e4 = e4.trim();
            try {
              if ("[" === (e4 = JSON.stringify(JSON.parse(e4)))[0])
                return le("array", JSON.parse(e4));
              if ("{" === e4[0])
                return le("object", JSON.parse(e4));
              if (e4.match(/\-?\d+\.\d+/) && e4.match(/\-?\d+\.\d+/)[0] === e4)
                return le("float", parseFloat(e4));
              if (e4.match(/\-?\d+e-\d+/) && e4.match(/\-?\d+e-\d+/)[0] === e4)
                return le("float", Number(e4));
              if (e4.match(/\-?\d+/) && e4.match(/\-?\d+/)[0] === e4)
                return le("integer", parseInt(e4));
              if (e4.match(/\-?\d+e\+\d+/) && e4.match(/\-?\d+e\+\d+/)[0] === e4)
                return le("integer", Number(e4));
            } catch (e5) {
            }
            switch (e4 = e4.toLowerCase()) {
              case "undefined":
                return le("undefined", void 0);
              case "nan":
                return le("nan", NaN);
              case "null":
                return le("null", null);
              case "true":
                return le("boolean", true);
              case "false":
                return le("boolean", false);
              default:
                if (e4 = Date.parse(e4))
                  return le("date", new Date(e4));
            }
            return le(false, null);
          }
          function le(e4, t3) {
            return { type: e4, value: t3 };
          }
          var ue = function(e4) {
            u2(n3, e4);
            var t3 = h2(n3);
            function n3() {
              return i(this, n3), t3.apply(this, arguments);
            }
            return c2(n3, [{ key: "render", value: function() {
              var e5 = this.props, t4 = e5.style, n4 = x(e5, ["style"]);
              return m2.a.createElement("span", n4, m2.a.createElement("svg", Object.assign({}, xe(t4), { viewBox: "0 0 24 24", fill: "currentColor", preserveAspectRatio: "xMidYMid meet" }), m2.a.createElement("path", { d: "M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7,13H17V11H7" })));
            } }]), n3;
          }(m2.a.PureComponent), fe = function(e4) {
            u2(n3, e4);
            var t3 = h2(n3);
            function n3() {
              return i(this, n3), t3.apply(this, arguments);
            }
            return c2(n3, [{ key: "render", value: function() {
              var e5 = this.props, t4 = e5.style, n4 = x(e5, ["style"]);
              return m2.a.createElement("span", n4, m2.a.createElement("svg", Object.assign({}, xe(t4), { viewBox: "0 0 24 24", fill: "currentColor", preserveAspectRatio: "xMidYMid meet" }), m2.a.createElement("path", { d: "M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z" })));
            } }]), n3;
          }(m2.a.PureComponent), pe = function(e4) {
            u2(n3, e4);
            var t3 = h2(n3);
            function n3() {
              return i(this, n3), t3.apply(this, arguments);
            }
            return c2(n3, [{ key: "render", value: function() {
              var e5 = this.props, t4 = e5.style, n4 = x(e5, ["style"]), a2 = xe(t4).style;
              return m2.a.createElement("span", n4, m2.a.createElement("svg", { fill: a2.color, width: a2.height, height: a2.width, style: a2, viewBox: "0 0 1792 1792" }, m2.a.createElement("path", { d: "M1344 800v64q0 14-9 23t-23 9h-832q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h832q14 0 23 9t9 23zm128 448v-832q0-66-47-113t-113-47h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113zm128-832v832q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q119 0 203.5 84.5t84.5 203.5z" })));
            } }]), n3;
          }(m2.a.PureComponent), de = function(e4) {
            u2(n3, e4);
            var t3 = h2(n3);
            function n3() {
              return i(this, n3), t3.apply(this, arguments);
            }
            return c2(n3, [{ key: "render", value: function() {
              var e5 = this.props, t4 = e5.style, n4 = x(e5, ["style"]), a2 = xe(t4).style;
              return m2.a.createElement("span", n4, m2.a.createElement("svg", { fill: a2.color, width: a2.height, height: a2.width, style: a2, viewBox: "0 0 1792 1792" }, m2.a.createElement("path", { d: "M1344 800v64q0 14-9 23t-23 9h-352v352q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-352h-352q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h352v-352q0-14 9-23t23-9h64q14 0 23 9t9 23v352h352q14 0 23 9t9 23zm128 448v-832q0-66-47-113t-113-47h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113zm128-832v832q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q119 0 203.5 84.5t84.5 203.5z" })));
            } }]), n3;
          }(m2.a.PureComponent), be = function(e4) {
            u2(n3, e4);
            var t3 = h2(n3);
            function n3() {
              return i(this, n3), t3.apply(this, arguments);
            }
            return c2(n3, [{ key: "render", value: function() {
              var e5 = this.props, t4 = e5.style, n4 = x(e5, ["style"]);
              return m2.a.createElement("span", n4, m2.a.createElement("svg", { style: o(o({}, xe(t4).style), {}, { paddingLeft: "2px", verticalAlign: "top" }), viewBox: "0 0 15 15", fill: "currentColor" }, m2.a.createElement("path", { d: "M0 14l6-6-6-6z" })));
            } }]), n3;
          }(m2.a.PureComponent), he = function(e4) {
            u2(n3, e4);
            var t3 = h2(n3);
            function n3() {
              return i(this, n3), t3.apply(this, arguments);
            }
            return c2(n3, [{ key: "render", value: function() {
              var e5 = this.props, t4 = e5.style, n4 = x(e5, ["style"]);
              return m2.a.createElement("span", n4, m2.a.createElement("svg", { style: o(o({}, xe(t4).style), {}, { paddingLeft: "2px", verticalAlign: "top" }), viewBox: "0 0 15 15", fill: "currentColor" }, m2.a.createElement("path", { d: "M0 5l6 6 6-6z" })));
            } }]), n3;
          }(m2.a.PureComponent), ve = function(e4) {
            u2(n3, e4);
            var t3 = h2(n3);
            function n3() {
              return i(this, n3), t3.apply(this, arguments);
            }
            return c2(n3, [{ key: "render", value: function() {
              var e5 = this.props, t4 = e5.style, n4 = x(e5, ["style"]);
              return m2.a.createElement("span", n4, m2.a.createElement("svg", Object.assign({}, xe(t4), { viewBox: "0 0 40 40", fill: "currentColor", preserveAspectRatio: "xMidYMid meet" }), m2.a.createElement("g", null, m2.a.createElement("path", { d: "m30 35h-25v-22.5h25v7.5h2.5v-12.5c0-1.4-1.1-2.5-2.5-2.5h-7.5c0-2.8-2.2-5-5-5s-5 2.2-5 5h-7.5c-1.4 0-2.5 1.1-2.5 2.5v27.5c0 1.4 1.1 2.5 2.5 2.5h25c1.4 0 2.5-1.1 2.5-2.5v-5h-2.5v5z m-20-27.5h2.5s2.5-1.1 2.5-2.5 1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5 1.3 2.5 2.5 2.5h2.5s2.5 1.1 2.5 2.5h-20c0-1.5 1.1-2.5 2.5-2.5z m-2.5 20h5v-2.5h-5v2.5z m17.5-5v-5l-10 7.5 10 7.5v-5h12.5v-5h-12.5z m-17.5 10h7.5v-2.5h-7.5v2.5z m12.5-17.5h-12.5v2.5h12.5v-2.5z m-7.5 5h-5v2.5h5v-2.5z" }))));
            } }]), n3;
          }(m2.a.PureComponent), me = function(e4) {
            u2(n3, e4);
            var t3 = h2(n3);
            function n3() {
              return i(this, n3), t3.apply(this, arguments);
            }
            return c2(n3, [{ key: "render", value: function() {
              var e5 = this.props, t4 = e5.style, n4 = x(e5, ["style"]);
              return m2.a.createElement("span", n4, m2.a.createElement("svg", Object.assign({}, xe(t4), { viewBox: "0 0 40 40", fill: "currentColor", preserveAspectRatio: "xMidYMid meet" }), m2.a.createElement("g", null, m2.a.createElement("path", { d: "m28.6 25q0-0.5-0.4-1l-4-4 4-4q0.4-0.5 0.4-1 0-0.6-0.4-1.1l-2-2q-0.4-0.4-1-0.4-0.6 0-1 0.4l-4.1 4.1-4-4.1q-0.4-0.4-1-0.4-0.6 0-1 0.4l-2 2q-0.5 0.5-0.5 1.1 0 0.5 0.5 1l4 4-4 4q-0.5 0.5-0.5 1 0 0.7 0.5 1.1l2 2q0.4 0.4 1 0.4 0.6 0 1-0.4l4-4.1 4.1 4.1q0.4 0.4 1 0.4 0.6 0 1-0.4l2-2q0.4-0.4 0.4-1z m8.7-5q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" }))));
            } }]), n3;
          }(m2.a.PureComponent), ye = function(e4) {
            u2(n3, e4);
            var t3 = h2(n3);
            function n3() {
              return i(this, n3), t3.apply(this, arguments);
            }
            return c2(n3, [{ key: "render", value: function() {
              var e5 = this.props, t4 = e5.style, n4 = x(e5, ["style"]);
              return m2.a.createElement("span", n4, m2.a.createElement("svg", Object.assign({}, xe(t4), { viewBox: "0 0 40 40", fill: "currentColor", preserveAspectRatio: "xMidYMid meet" }), m2.a.createElement("g", null, m2.a.createElement("path", { d: "m30.1 21.4v-2.8q0-0.6-0.4-1t-1-0.5h-5.7v-5.7q0-0.6-0.4-1t-1-0.4h-2.9q-0.6 0-1 0.4t-0.4 1v5.7h-5.7q-0.6 0-1 0.5t-0.5 1v2.8q0 0.6 0.5 1t1 0.5h5.7v5.7q0 0.5 0.4 1t1 0.4h2.9q0.6 0 1-0.4t0.4-1v-5.7h5.7q0.6 0 1-0.5t0.4-1z m7.2-1.4q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" }))));
            } }]), n3;
          }(m2.a.PureComponent), ge = function(e4) {
            u2(n3, e4);
            var t3 = h2(n3);
            function n3() {
              return i(this, n3), t3.apply(this, arguments);
            }
            return c2(n3, [{ key: "render", value: function() {
              var e5 = this.props, t4 = e5.style, n4 = x(e5, ["style"]);
              return m2.a.createElement("span", n4, m2.a.createElement("svg", Object.assign({}, xe(t4), { viewBox: "0 0 40 40", fill: "currentColor", preserveAspectRatio: "xMidYMid meet" }), m2.a.createElement("g", null, m2.a.createElement("path", { d: "m31.6 21.6h-10v10h-3.2v-10h-10v-3.2h10v-10h3.2v10h10v3.2z" }))));
            } }]), n3;
          }(m2.a.PureComponent), Ee = function(e4) {
            u2(n3, e4);
            var t3 = h2(n3);
            function n3() {
              return i(this, n3), t3.apply(this, arguments);
            }
            return c2(n3, [{ key: "render", value: function() {
              var e5 = this.props, t4 = e5.style, n4 = x(e5, ["style"]);
              return m2.a.createElement("span", n4, m2.a.createElement("svg", Object.assign({}, xe(t4), { viewBox: "0 0 40 40", fill: "currentColor", preserveAspectRatio: "xMidYMid meet" }), m2.a.createElement("g", null, m2.a.createElement("path", { d: "m19.8 26.4l2.6-2.6-3.4-3.4-2.6 2.6v1.3h2.2v2.1h1.2z m9.8-16q-0.3-0.4-0.7 0l-7.8 7.8q-0.4 0.4 0 0.7t0.7 0l7.8-7.8q0.4-0.4 0-0.7z m1.8 13.2v4.3q0 2.6-1.9 4.5t-4.5 1.9h-18.6q-2.6 0-4.5-1.9t-1.9-4.5v-18.6q0-2.7 1.9-4.6t4.5-1.8h18.6q1.4 0 2.6 0.5 0.3 0.2 0.4 0.5 0.1 0.4-0.2 0.7l-1.1 1.1q-0.3 0.3-0.7 0.1-0.5-0.1-1-0.1h-18.6q-1.4 0-2.5 1.1t-1 2.5v18.6q0 1.4 1 2.5t2.5 1h18.6q1.5 0 2.5-1t1.1-2.5v-2.9q0-0.2 0.2-0.4l1.4-1.5q0.3-0.3 0.8-0.1t0.4 0.6z m-2.1-16.5l6.4 6.5-15 15h-6.4v-6.5z m9.9 3l-2.1 2-6.4-6.4 2.1-2q0.6-0.7 1.5-0.7t1.5 0.7l3.4 3.4q0.6 0.6 0.6 1.5t-0.6 1.5z" }))));
            } }]), n3;
          }(m2.a.PureComponent), je = function(e4) {
            u2(n3, e4);
            var t3 = h2(n3);
            function n3() {
              return i(this, n3), t3.apply(this, arguments);
            }
            return c2(n3, [{ key: "render", value: function() {
              var e5 = this.props, t4 = e5.style, n4 = x(e5, ["style"]);
              return m2.a.createElement("span", n4, m2.a.createElement("svg", Object.assign({}, xe(t4), { viewBox: "0 0 40 40", fill: "currentColor", preserveAspectRatio: "xMidYMid meet" }), m2.a.createElement("g", null, m2.a.createElement("path", { d: "m31.7 16.4q0-0.6-0.4-1l-2.1-2.1q-0.4-0.4-1-0.4t-1 0.4l-9.1 9.1-5-5q-0.5-0.4-1-0.4t-1 0.4l-2.1 2q-0.4 0.4-0.4 1 0 0.6 0.4 1l8.1 8.1q0.4 0.4 1 0.4 0.6 0 1-0.4l12.2-12.1q0.4-0.4 0.4-1z m5.6 3.6q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" }))));
            } }]), n3;
          }(m2.a.PureComponent);
          function xe(e4) {
            return e4 || (e4 = {}), { style: o(o({ verticalAlign: "middle" }, e4), {}, { color: e4.color ? e4.color : "#000000", height: "1em", width: "1em" }) };
          }
          var _e = function(e4) {
            u2(n3, e4);
            var t3 = h2(n3);
            function n3(e5) {
              var a2;
              return i(this, n3), (a2 = t3.call(this, e5)).copiedTimer = null, a2.handleCopy = function() {
                var e6 = document.createElement("textarea"), t4 = a2.props, n4 = t4.clickCallback, r2 = t4.src, o2 = t4.namespace;
                e6.innerHTML = JSON.stringify(a2.clipboardValue(r2), null, "  "), document.body.appendChild(e6), e6.select(), document.execCommand("copy"), document.body.removeChild(e6), a2.copiedTimer = setTimeout(function() {
                  a2.setState({ copied: false });
                }, 5500), a2.setState({ copied: true }, function() {
                  "function" == typeof n4 && n4({ src: r2, namespace: o2, name: o2[o2.length - 1] });
                });
              }, a2.getClippyIcon = function() {
                var e6 = a2.props.theme;
                return a2.state.copied ? m2.a.createElement("span", null, m2.a.createElement(ve, Object.assign({ className: "copy-icon" }, A(e6, "copy-icon"))), m2.a.createElement("span", A(e6, "copy-icon-copied"), "✔")) : m2.a.createElement(ve, Object.assign({ className: "copy-icon" }, A(e6, "copy-icon")));
              }, a2.clipboardValue = function(e6) {
                switch (_2(e6)) {
                  case "function":
                  case "regexp":
                    return e6.toString();
                  default:
                    return e6;
                }
              }, a2.state = { copied: false }, a2;
            }
            return c2(n3, [{ key: "componentWillUnmount", value: function() {
              this.copiedTimer && (clearTimeout(this.copiedTimer), this.copiedTimer = null);
            } }, { key: "render", value: function() {
              var e5 = this.props, t4 = (e5.src, e5.theme), n4 = e5.hidden, a2 = e5.rowHovered, r2 = A(t4, "copy-to-clipboard").style, i2 = "inline";
              return n4 && (i2 = "none"), m2.a.createElement("span", { className: "copy-to-clipboard-container", title: "Copy to clipboard", style: { verticalAlign: "top", display: a2 ? "inline-block" : "none" } }, m2.a.createElement("span", { style: o(o({}, r2), {}, { display: i2 }), onClick: this.handleCopy }, this.getClippyIcon()));
            } }]), n3;
          }(m2.a.PureComponent), ke = function(e4) {
            u2(n3, e4);
            var t3 = h2(n3);
            function n3(e5) {
              var a2;
              return i(this, n3), (a2 = t3.call(this, e5)).getEditIcon = function() {
                var e6 = a2.props, t4 = e6.variable, n4 = e6.theme;
                return m2.a.createElement("div", { className: "click-to-edit", style: { verticalAlign: "top", display: a2.state.hovered ? "inline-block" : "none" } }, m2.a.createElement(Ee, Object.assign({ className: "click-to-edit-icon" }, A(n4, "editVarIcon"), { onClick: function() {
                  a2.prepopInput(t4);
                } })));
              }, a2.prepopInput = function(e6) {
                if (false !== a2.props.onEdit) {
                  var t4 = function(e7) {
                    var t5;
                    switch (_2(e7)) {
                      case "undefined":
                        t5 = "undefined";
                        break;
                      case "nan":
                        t5 = "NaN";
                        break;
                      case "string":
                        t5 = e7;
                        break;
                      case "date":
                      case "function":
                      case "regexp":
                        t5 = e7.toString();
                        break;
                      default:
                        try {
                          t5 = JSON.stringify(e7, null, "  ");
                        } catch (e8) {
                          t5 = "";
                        }
                    }
                    return t5;
                  }(e6.value), n4 = ce(t4);
                  a2.setState({ editMode: true, editValue: t4, parsedInput: { type: n4.type, value: n4.value } });
                }
              }, a2.getRemoveIcon = function() {
                var e6 = a2.props, t4 = e6.variable, n4 = e6.namespace, r2 = e6.theme, o2 = e6.rjvId;
                return m2.a.createElement("div", { className: "click-to-remove", style: { verticalAlign: "top", display: a2.state.hovered ? "inline-block" : "none" } }, m2.a.createElement(me, Object.assign({ className: "click-to-remove-icon" }, A(r2, "removeVarIcon"), { onClick: function() {
                  z.dispatch({ name: "VARIABLE_REMOVED", rjvId: o2, data: { name: t4.name, namespace: n4, existing_value: t4.value, variable_removed: true } });
                } })));
              }, a2.getValue = function(e6, t4) {
                var n4 = !t4 && e6.type, r2 = d2(a2).props;
                switch (n4) {
                  case false:
                    return a2.getEditInput();
                  case "string":
                    return m2.a.createElement(G, Object.assign({ value: e6.value }, r2));
                  case "integer":
                    return m2.a.createElement(H, Object.assign({ value: e6.value }, r2));
                  case "float":
                    return m2.a.createElement(D, Object.assign({ value: e6.value }, r2));
                  case "boolean":
                    return m2.a.createElement(P, Object.assign({ value: e6.value }, r2));
                  case "function":
                    return m2.a.createElement(V, Object.assign({ value: e6.value }, r2));
                  case "null":
                    return m2.a.createElement(W, r2);
                  case "nan":
                    return m2.a.createElement(K, r2);
                  case "undefined":
                    return m2.a.createElement(J, r2);
                  case "date":
                    return m2.a.createElement(F, Object.assign({ value: e6.value }, r2));
                  case "regexp":
                    return m2.a.createElement(U, Object.assign({ value: e6.value }, r2));
                  default:
                    return m2.a.createElement("div", { className: "object-value" }, JSON.stringify(e6.value));
                }
              }, a2.getEditInput = function() {
                var e6 = a2.props.theme, t4 = a2.state.editValue;
                return m2.a.createElement("div", null, m2.a.createElement(se, Object.assign({ type: "text", inputRef: function(e7) {
                  return e7 && e7.focus();
                }, value: t4, className: "variable-editor", onChange: function(e7) {
                  var t5 = e7.target.value, n4 = ce(t5);
                  a2.setState({ editValue: t5, parsedInput: { type: n4.type, value: n4.value } });
                }, onKeyDown: function(e7) {
                  switch (e7.key) {
                    case "Escape":
                      a2.setState({ editMode: false, editValue: "" });
                      break;
                    case "Enter":
                      (e7.ctrlKey || e7.metaKey) && a2.submitEdit(true);
                  }
                  e7.stopPropagation();
                }, placeholder: "update this value", minRows: 2 }, A(e6, "edit-input"))), m2.a.createElement("div", A(e6, "edit-icon-container"), m2.a.createElement(me, Object.assign({ className: "edit-cancel" }, A(e6, "cancel-icon"), { onClick: function() {
                  a2.setState({ editMode: false, editValue: "" });
                } })), m2.a.createElement(je, Object.assign({ className: "edit-check string-value" }, A(e6, "check-icon"), { onClick: function() {
                  a2.submitEdit();
                } })), m2.a.createElement("div", null, a2.showDetected())));
              }, a2.submitEdit = function(e6) {
                var t4 = a2.props, n4 = t4.variable, r2 = t4.namespace, o2 = t4.rjvId, i2 = a2.state, s2 = i2.editValue, c3 = i2.parsedInput, l3 = s2;
                e6 && c3.type && (l3 = c3.value), a2.setState({ editMode: false }), z.dispatch({ name: "VARIABLE_UPDATED", rjvId: o2, data: { name: n4.name, namespace: r2, existing_value: n4.value, new_value: l3, variable_removed: false } });
              }, a2.showDetected = function() {
                var e6 = a2.props, t4 = e6.theme, n4 = (e6.variable, e6.namespace, e6.rjvId, a2.state.parsedInput), r2 = (n4.type, n4.value, a2.getDetectedInput());
                if (r2)
                  return m2.a.createElement("div", null, m2.a.createElement("div", A(t4, "detected-row"), r2, m2.a.createElement(je, { className: "edit-check detected", style: o({ verticalAlign: "top", paddingLeft: "3px" }, A(t4, "check-icon").style), onClick: function() {
                    a2.submitEdit(true);
                  } })));
              }, a2.getDetectedInput = function() {
                var e6 = a2.state.parsedInput, t4 = e6.type, n4 = e6.value, r2 = d2(a2).props, i2 = r2.theme;
                if (false !== t4)
                  switch (t4.toLowerCase()) {
                    case "object":
                      return m2.a.createElement("span", null, m2.a.createElement("span", { style: o(o({}, A(i2, "brace").style), {}, { cursor: "default" }) }, "{"), m2.a.createElement("span", { style: o(o({}, A(i2, "ellipsis").style), {}, { cursor: "default" }) }, "..."), m2.a.createElement("span", { style: o(o({}, A(i2, "brace").style), {}, { cursor: "default" }) }, "}"));
                    case "array":
                      return m2.a.createElement("span", null, m2.a.createElement("span", { style: o(o({}, A(i2, "brace").style), {}, { cursor: "default" }) }, "["), m2.a.createElement("span", { style: o(o({}, A(i2, "ellipsis").style), {}, { cursor: "default" }) }, "..."), m2.a.createElement("span", { style: o(o({}, A(i2, "brace").style), {}, { cursor: "default" }) }, "]"));
                    case "string":
                      return m2.a.createElement(G, Object.assign({ value: n4 }, r2));
                    case "integer":
                      return m2.a.createElement(H, Object.assign({ value: n4 }, r2));
                    case "float":
                      return m2.a.createElement(D, Object.assign({ value: n4 }, r2));
                    case "boolean":
                      return m2.a.createElement(P, Object.assign({ value: n4 }, r2));
                    case "function":
                      return m2.a.createElement(V, Object.assign({ value: n4 }, r2));
                    case "null":
                      return m2.a.createElement(W, r2);
                    case "nan":
                      return m2.a.createElement(K, r2);
                    case "undefined":
                      return m2.a.createElement(J, r2);
                    case "date":
                      return m2.a.createElement(F, Object.assign({ value: new Date(n4) }, r2));
                  }
              }, a2.state = { editMode: false, editValue: "", hovered: false, renameKey: false, parsedInput: { type: false, value: null } }, a2;
            }
            return c2(n3, [{ key: "render", value: function() {
              var e5 = this, t4 = this.props, n4 = t4.variable, a2 = t4.singleIndent, r2 = t4.type, i2 = t4.theme, s2 = t4.namespace, c3 = t4.indentWidth, l3 = t4.enableClipboard, u3 = t4.onEdit, f3 = t4.onDelete, p3 = t4.onSelect, d3 = t4.displayArrayKey, b3 = t4.quotesOnKeys, h3 = this.state.editMode;
              return m2.a.createElement("div", Object.assign({}, A(i2, "objectKeyVal", { paddingLeft: c3 * a2 }), { onMouseEnter: function() {
                return e5.setState(o(o({}, e5.state), {}, { hovered: true }));
              }, onMouseLeave: function() {
                return e5.setState(o(o({}, e5.state), {}, { hovered: false }));
              }, className: "variable-row", key: n4.name }), "array" == r2 ? d3 ? m2.a.createElement("span", Object.assign({}, A(i2, "array-key"), { key: n4.name + "_" + s2 }), n4.name, m2.a.createElement("div", A(i2, "colon"), ":")) : null : m2.a.createElement("span", null, m2.a.createElement("span", Object.assign({}, A(i2, "object-name"), { className: "object-key", key: n4.name + "_" + s2 }), !!b3 && m2.a.createElement("span", { style: { verticalAlign: "top" } }, '"'), m2.a.createElement("span", { style: { display: "inline-block" } }, n4.name), !!b3 && m2.a.createElement("span", { style: { verticalAlign: "top" } }, '"')), m2.a.createElement("span", A(i2, "colon"), ":")), m2.a.createElement("div", Object.assign({ className: "variable-value", onClick: false === p3 && false === u3 ? null : function(t5) {
                var a3 = B(s2);
                (t5.ctrlKey || t5.metaKey) && false !== u3 ? e5.prepopInput(n4) : false !== p3 && (a3.shift(), p3(o(o({}, n4), {}, { namespace: a3 })));
              } }, A(i2, "variableValue", { cursor: false === p3 ? "default" : "pointer" })), this.getValue(n4, h3)), l3 ? m2.a.createElement(_e, { rowHovered: this.state.hovered, hidden: h3, src: n4.value, clickCallback: l3, theme: i2, namespace: [].concat(B(s2), [n4.name]) }) : null, false !== u3 && 0 == h3 ? this.getEditIcon() : null, false !== f3 && 0 == h3 ? this.getRemoveIcon() : null);
            } }]), n3;
          }(m2.a.PureComponent), Oe = function(e4) {
            u2(n3, e4);
            var t3 = h2(n3);
            function n3() {
              var e5;
              i(this, n3);
              for (var a2 = arguments.length, r2 = new Array(a2), s2 = 0; s2 < a2; s2++)
                r2[s2] = arguments[s2];
              return (e5 = t3.call.apply(t3, [this].concat(r2))).getObjectSize = function() {
                var t4 = e5.props, n4 = t4.size, a3 = t4.theme;
                if (t4.displayObjectSize)
                  return m2.a.createElement("span", Object.assign({ className: "object-size" }, A(a3, "object-size")), n4, " item", 1 === n4 ? "" : "s");
              }, e5.getAddAttribute = function(t4) {
                var n4 = e5.props, a3 = n4.theme, r3 = n4.namespace, i2 = n4.name, s3 = n4.src, c3 = n4.rjvId, l3 = n4.depth;
                return m2.a.createElement("span", { className: "click-to-add", style: { verticalAlign: "top", display: t4 ? "inline-block" : "none" } }, m2.a.createElement(ye, Object.assign({ className: "click-to-add-icon" }, A(a3, "addVarIcon"), { onClick: function() {
                  var e6 = { name: l3 > 0 ? i2 : null, namespace: r3.splice(0, r3.length - 1), existing_value: s3, variable_removed: false, key_name: null };
                  "object" === _2(s3) ? z.dispatch({ name: "ADD_VARIABLE_KEY_REQUEST", rjvId: c3, data: e6 }) : z.dispatch({ name: "VARIABLE_ADDED", rjvId: c3, data: o(o({}, e6), {}, { new_value: [].concat(B(s3), [null]) }) });
                } })));
              }, e5.getRemoveObject = function(t4) {
                var n4 = e5.props, a3 = n4.theme, r3 = (n4.hover, n4.namespace), o2 = n4.name, i2 = n4.src, s3 = n4.rjvId;
                if (1 !== r3.length)
                  return m2.a.createElement("span", { className: "click-to-remove", style: { display: t4 ? "inline-block" : "none" } }, m2.a.createElement(me, Object.assign({ className: "click-to-remove-icon" }, A(a3, "removeVarIcon"), { onClick: function() {
                    z.dispatch({ name: "VARIABLE_REMOVED", rjvId: s3, data: { name: o2, namespace: r3.splice(0, r3.length - 1), existing_value: i2, variable_removed: true } });
                  } })));
              }, e5.render = function() {
                var t4 = e5.props, n4 = t4.theme, a3 = t4.onDelete, r3 = t4.onAdd, o2 = t4.enableClipboard, i2 = t4.src, s3 = t4.namespace, c3 = t4.rowHovered;
                return m2.a.createElement("div", Object.assign({}, A(n4, "object-meta-data"), { className: "object-meta-data", onClick: function(e6) {
                  e6.stopPropagation();
                } }), e5.getObjectSize(), o2 ? m2.a.createElement(_e, { rowHovered: c3, clickCallback: o2, src: i2, theme: n4, namespace: s3 }) : null, false !== r3 ? e5.getAddAttribute(c3) : null, false !== a3 ? e5.getRemoveObject(c3) : null);
              }, e5;
            }
            return n3;
          }(m2.a.PureComponent);
          function Ce(e4) {
            var t3 = e4.parent_type, n3 = e4.namespace, a2 = e4.quotesOnKeys, r2 = e4.theme, o2 = e4.jsvRoot, i2 = e4.name, s2 = e4.displayArrayKey, c3 = e4.name ? e4.name : "";
            return !o2 || false !== i2 && null !== i2 ? "array" == t3 ? s2 ? m2.a.createElement("span", Object.assign({}, A(r2, "array-key"), { key: n3 }), m2.a.createElement("span", { className: "array-key" }, c3), m2.a.createElement("span", A(r2, "colon"), ":")) : m2.a.createElement("span", null) : m2.a.createElement("span", Object.assign({}, A(r2, "object-name"), { key: n3 }), m2.a.createElement("span", { className: "object-key" }, a2 && m2.a.createElement("span", { style: { verticalAlign: "top" } }, '"'), m2.a.createElement("span", null, c3), a2 && m2.a.createElement("span", { style: { verticalAlign: "top" } }, '"')), m2.a.createElement("span", A(r2, "colon"), ":")) : m2.a.createElement("span", null);
          }
          function Se(e4) {
            var t3 = e4.theme;
            switch (e4.iconStyle) {
              case "triangle":
                return m2.a.createElement(he, Object.assign({}, A(t3, "expanded-icon"), { className: "expanded-icon" }));
              case "square":
                return m2.a.createElement(pe, Object.assign({}, A(t3, "expanded-icon"), { className: "expanded-icon" }));
              default:
                return m2.a.createElement(ue, Object.assign({}, A(t3, "expanded-icon"), { className: "expanded-icon" }));
            }
          }
          function we(e4) {
            var t3 = e4.theme;
            switch (e4.iconStyle) {
              case "triangle":
                return m2.a.createElement(be, Object.assign({}, A(t3, "collapsed-icon"), { className: "collapsed-icon" }));
              case "square":
                return m2.a.createElement(de, Object.assign({}, A(t3, "collapsed-icon"), { className: "collapsed-icon" }));
              default:
                return m2.a.createElement(fe, Object.assign({}, A(t3, "collapsed-icon"), { className: "collapsed-icon" }));
            }
          }
          var Ae = function(e4) {
            u2(n3, e4);
            var t3 = h2(n3);
            function n3(e5) {
              var a2;
              return i(this, n3), (a2 = t3.call(this, e5)).toggleCollapsed = function(e6) {
                var t4 = [];
                for (var n4 in a2.state.expanded)
                  t4.push(a2.state.expanded[n4]);
                t4[e6] = !t4[e6], a2.setState({ expanded: t4 });
              }, a2.state = { expanded: [] }, a2;
            }
            return c2(n3, [{ key: "getExpandedIcon", value: function(e5) {
              var t4 = this.props, n4 = t4.theme, a2 = t4.iconStyle;
              return this.state.expanded[e5] ? m2.a.createElement(Se, { theme: n4, iconStyle: a2 }) : m2.a.createElement(we, { theme: n4, iconStyle: a2 });
            } }, { key: "render", value: function() {
              var e5 = this, t4 = this.props, n4 = t4.src, a2 = t4.groupArraysAfterLength, r2 = (t4.depth, t4.name), o2 = t4.theme, i2 = t4.jsvRoot, s2 = t4.namespace, c3 = (t4.parent_type, x(t4, ["src", "groupArraysAfterLength", "depth", "name", "theme", "jsvRoot", "namespace", "parent_type"])), l3 = 0, u3 = 5 * this.props.indentWidth;
              i2 || (l3 = 5 * this.props.indentWidth);
              var f3 = a2, p3 = Math.ceil(n4.length / f3);
              return m2.a.createElement("div", Object.assign({ className: "object-key-val" }, A(o2, i2 ? "jsv-root" : "objectKeyVal", { paddingLeft: l3 })), m2.a.createElement(Ce, this.props), m2.a.createElement("span", null, m2.a.createElement(Oe, Object.assign({ size: n4.length }, this.props))), B(Array(p3)).map(function(t5, a3) {
                return m2.a.createElement("div", Object.assign({ key: a3, className: "object-key-val array-group" }, A(o2, "objectKeyVal", { marginLeft: 6, paddingLeft: u3 })), m2.a.createElement("span", A(o2, "brace-row"), m2.a.createElement("div", Object.assign({ className: "icon-container" }, A(o2, "icon-container"), { onClick: function(t6) {
                  e5.toggleCollapsed(a3);
                } }), e5.getExpandedIcon(a3)), e5.state.expanded[a3] ? m2.a.createElement(Fe, Object.assign({ key: r2 + a3, depth: 0, name: false, collapsed: false, groupArraysAfterLength: f3, index_offset: a3 * f3, src: n4.slice(a3 * f3, a3 * f3 + f3), namespace: s2, type: "array", parent_type: "array_group", theme: o2 }, c3)) : m2.a.createElement("span", Object.assign({}, A(o2, "brace"), { onClick: function(t6) {
                  e5.toggleCollapsed(a3);
                }, className: "array-group-brace" }), "[", m2.a.createElement("div", Object.assign({}, A(o2, "array-group-meta-data"), { className: "array-group-meta-data" }), m2.a.createElement("span", Object.assign({ className: "object-size" }, A(o2, "object-size")), a3 * f3, " - ", a3 * f3 + f3 > n4.length ? n4.length : a3 * f3 + f3)), "]")));
              }));
            } }]), n3;
          }(m2.a.PureComponent), Me = function(e4) {
            u2(n3, e4);
            var t3 = h2(n3);
            function n3(e5) {
              var a2;
              i(this, n3), (a2 = t3.call(this, e5)).toggleCollapsed = function() {
                a2.setState({ expanded: !a2.state.expanded }, function() {
                  q2.set(a2.props.rjvId, a2.props.namespace, "expanded", a2.state.expanded);
                });
              }, a2.getObjectContent = function(e6, t4, n4) {
                return m2.a.createElement("div", { className: "pushed-content object-container" }, m2.a.createElement("div", Object.assign({ className: "object-content" }, A(a2.props.theme, "pushed-content")), a2.renderObjectContents(t4, n4)));
              }, a2.getEllipsis = function() {
                return 0 === a2.state.size ? null : m2.a.createElement("div", Object.assign({}, A(a2.props.theme, "ellipsis"), { className: "node-ellipsis", onClick: a2.toggleCollapsed }), "...");
              }, a2.getObjectMetaData = function(e6) {
                var t4 = a2.props, n4 = (t4.rjvId, t4.theme, a2.state), r3 = n4.size, o2 = n4.hovered;
                return m2.a.createElement(Oe, Object.assign({ rowHovered: o2, size: r3 }, a2.props));
              }, a2.renderObjectContents = function(e6, t4) {
                var n4, r3 = a2.props, o2 = r3.depth, i2 = r3.parent_type, s2 = r3.index_offset, c3 = r3.groupArraysAfterLength, l3 = r3.namespace, u3 = a2.state.object_type, f3 = [], p3 = Object.keys(e6 || {});
                return a2.props.sortKeys && "array" !== u3 && (p3 = p3.sort()), p3.forEach(function(r4) {
                  if (n4 = new Pe(r4, e6[r4]), "array_group" === i2 && s2 && (n4.name = parseInt(n4.name) + s2), e6.hasOwnProperty(r4))
                    if ("object" === n4.type)
                      f3.push(m2.a.createElement(Fe, Object.assign({ key: n4.name, depth: o2 + 1, name: n4.name, src: n4.value, namespace: l3.concat(n4.name), parent_type: u3 }, t4)));
                    else if ("array" === n4.type) {
                      var p4 = Fe;
                      c3 && n4.value.length > c3 && (p4 = Ae), f3.push(m2.a.createElement(p4, Object.assign({ key: n4.name, depth: o2 + 1, name: n4.name, src: n4.value, namespace: l3.concat(n4.name), type: "array", parent_type: u3 }, t4)));
                    } else
                      f3.push(m2.a.createElement(ke, Object.assign({ key: n4.name + "_" + l3, variable: n4, singleIndent: 5, namespace: l3, type: a2.props.type }, t4)));
                }), f3;
              };
              var r2 = n3.getState(e5);
              return a2.state = o(o({}, r2), {}, { prevProps: {} }), a2;
            }
            return c2(n3, [{ key: "getBraceStart", value: function(e5, t4) {
              var n4 = this, a2 = this.props, r2 = a2.src, o2 = a2.theme, i2 = a2.iconStyle;
              if ("array_group" === a2.parent_type)
                return m2.a.createElement("span", null, m2.a.createElement("span", A(o2, "brace"), "array" === e5 ? "[" : "{"), t4 ? this.getObjectMetaData(r2) : null);
              var s2 = t4 ? Se : we;
              return m2.a.createElement("span", null, m2.a.createElement("span", Object.assign({ onClick: function(e6) {
                n4.toggleCollapsed();
              } }, A(o2, "brace-row")), m2.a.createElement("div", Object.assign({ className: "icon-container" }, A(o2, "icon-container")), m2.a.createElement(s2, { theme: o2, iconStyle: i2 })), m2.a.createElement(Ce, this.props), m2.a.createElement("span", A(o2, "brace"), "array" === e5 ? "[" : "{")), t4 ? this.getObjectMetaData(r2) : null);
            } }, { key: "render", value: function() {
              var e5 = this, t4 = this.props, n4 = t4.depth, a2 = t4.src, r2 = (t4.namespace, t4.name, t4.type, t4.parent_type), i2 = t4.theme, s2 = t4.jsvRoot, c3 = t4.iconStyle, l3 = x(t4, ["depth", "src", "namespace", "name", "type", "parent_type", "theme", "jsvRoot", "iconStyle"]), u3 = this.state, f3 = u3.object_type, p3 = u3.expanded, d3 = {};
              return s2 || "array_group" === r2 ? "array_group" === r2 && (d3.borderLeft = 0, d3.display = "inline") : d3.paddingLeft = 5 * this.props.indentWidth, m2.a.createElement("div", Object.assign({ className: "object-key-val", onMouseEnter: function() {
                return e5.setState(o(o({}, e5.state), {}, { hovered: true }));
              }, onMouseLeave: function() {
                return e5.setState(o(o({}, e5.state), {}, { hovered: false }));
              } }, A(i2, s2 ? "jsv-root" : "objectKeyVal", d3)), this.getBraceStart(f3, p3), p3 ? this.getObjectContent(n4, a2, o({ theme: i2, iconStyle: c3 }, l3)) : this.getEllipsis(), m2.a.createElement("span", { className: "brace-row" }, m2.a.createElement("span", { style: o(o({}, A(i2, "brace").style), {}, { paddingLeft: p3 ? "3px" : "0px" }) }, "array" === f3 ? "]" : "}"), p3 ? null : this.getObjectMetaData(a2)));
            } }], [{ key: "getDerivedStateFromProps", value: function(e5, t4) {
              var a2 = t4.prevProps;
              return e5.src !== a2.src || e5.collapsed !== a2.collapsed || e5.name !== a2.name || e5.namespace !== a2.namespace || e5.rjvId !== a2.rjvId ? o(o({}, n3.getState(e5)), {}, { prevProps: e5 }) : null;
            } }]), n3;
          }(m2.a.PureComponent);
          Me.getState = function(e4) {
            var t3 = Object.keys(e4.src).length, n3 = (false === e4.collapsed || true !== e4.collapsed && e4.collapsed > e4.depth) && (!e4.shouldCollapse || false === e4.shouldCollapse({ name: e4.name, src: e4.src, type: _2(e4.src), namespace: e4.namespace })) && 0 !== t3;
            return { expanded: q2.get(e4.rjvId, e4.namespace, "expanded", n3), object_type: "array" === e4.type ? "array" : "object", parent_type: "array" === e4.type ? "array" : "object", size: t3, hovered: false };
          };
          var Pe = function e4(t3, n3) {
            i(this, e4), this.name = t3, this.value = n3, this.type = _2(n3);
          };
          j(Me);
          var Fe = Me, De = function(e4) {
            u2(n3, e4);
            var t3 = h2(n3);
            function n3() {
              var e5;
              i(this, n3);
              for (var a2 = arguments.length, r2 = new Array(a2), o2 = 0; o2 < a2; o2++)
                r2[o2] = arguments[o2];
              return (e5 = t3.call.apply(t3, [this].concat(r2))).render = function() {
                var t4 = d2(e5).props, n4 = [t4.name], a3 = Fe;
                return Array.isArray(t4.src) && t4.groupArraysAfterLength && t4.src.length > t4.groupArraysAfterLength && (a3 = Ae), m2.a.createElement("div", { className: "pretty-json-container object-container" }, m2.a.createElement("div", { className: "object-content" }, m2.a.createElement(a3, Object.assign({ namespace: n4, depth: 0, jsvRoot: true }, t4))));
              }, e5;
            }
            return n3;
          }(m2.a.PureComponent), Ie = function(e4) {
            u2(n3, e4);
            var t3 = h2(n3);
            function n3(e5) {
              var a2;
              return i(this, n3), (a2 = t3.call(this, e5)).closeModal = function() {
                z.dispatch({ rjvId: a2.props.rjvId, name: "RESET" });
              }, a2.submit = function() {
                a2.props.submit(a2.state.input);
              }, a2.state = { input: e5.input ? e5.input : "" }, a2;
            }
            return c2(n3, [{ key: "render", value: function() {
              var e5 = this, t4 = this.props, n4 = t4.theme, a2 = t4.rjvId, r2 = t4.isValid, o2 = this.state.input, i2 = r2(o2);
              return m2.a.createElement("div", Object.assign({ className: "key-modal-request" }, A(n4, "key-modal-request"), { onClick: this.closeModal }), m2.a.createElement("div", Object.assign({}, A(n4, "key-modal"), { onClick: function(e6) {
                e6.stopPropagation();
              } }), m2.a.createElement("div", A(n4, "key-modal-label"), "Key Name:"), m2.a.createElement("div", { style: { position: "relative" } }, m2.a.createElement("input", Object.assign({}, A(n4, "key-modal-input"), { className: "key-modal-input", ref: function(e6) {
                return e6 && e6.focus();
              }, spellCheck: false, value: o2, placeholder: "...", onChange: function(t5) {
                e5.setState({ input: t5.target.value });
              }, onKeyPress: function(t5) {
                i2 && "Enter" === t5.key ? e5.submit() : "Escape" === t5.key && e5.closeModal();
              } })), i2 ? m2.a.createElement(je, Object.assign({}, A(n4, "key-modal-submit"), { className: "key-modal-submit", onClick: function(t5) {
                return e5.submit();
              } })) : null), m2.a.createElement("span", A(n4, "key-modal-cancel"), m2.a.createElement(ge, Object.assign({}, A(n4, "key-modal-cancel-icon"), { className: "key-modal-cancel", onClick: function() {
                z.dispatch({ rjvId: a2, name: "RESET" });
              } })))));
            } }]), n3;
          }(m2.a.PureComponent), Re = function(e4) {
            u2(n3, e4);
            var t3 = h2(n3);
            function n3() {
              var e5;
              i(this, n3);
              for (var a2 = arguments.length, r2 = new Array(a2), s2 = 0; s2 < a2; s2++)
                r2[s2] = arguments[s2];
              return (e5 = t3.call.apply(t3, [this].concat(r2))).isValid = function(t4) {
                var n4 = e5.props.rjvId, a3 = q2.get(n4, "action", "new-key-request");
                return "" != t4 && -1 === Object.keys(a3.existing_value).indexOf(t4);
              }, e5.submit = function(t4) {
                var n4 = e5.props.rjvId, a3 = q2.get(n4, "action", "new-key-request");
                a3.new_value = o({}, a3.existing_value), a3.new_value[t4] = e5.props.defaultValue, z.dispatch({ name: "VARIABLE_ADDED", rjvId: n4, data: a3 });
              }, e5;
            }
            return c2(n3, [{ key: "render", value: function() {
              var e5 = this.props, t4 = e5.active, n4 = e5.theme, a2 = e5.rjvId;
              return t4 ? m2.a.createElement(Ie, { rjvId: a2, theme: n4, isValid: this.isValid, submit: this.submit }) : null;
            } }]), n3;
          }(m2.a.PureComponent), Le = function(e4) {
            u2(n3, e4);
            var t3 = h2(n3);
            function n3() {
              return i(this, n3), t3.apply(this, arguments);
            }
            return c2(n3, [{ key: "render", value: function() {
              var e5 = this.props, t4 = e5.message, n4 = e5.active, a2 = e5.theme, r2 = e5.rjvId;
              return n4 ? m2.a.createElement("div", Object.assign({ className: "validation-failure" }, A(a2, "validation-failure"), { onClick: function() {
                z.dispatch({ rjvId: r2, name: "RESET" });
              } }), m2.a.createElement("span", A(a2, "validation-failure-label"), t4), m2.a.createElement(ge, A(a2, "validation-failure-clear"))) : null;
            } }]), n3;
          }(m2.a.PureComponent), Be = function(e4) {
            u2(n3, e4);
            var t3 = h2(n3);
            function n3(e5) {
              var a2;
              return i(this, n3), (a2 = t3.call(this, e5)).rjvId = Date.now().toString(), a2.getListeners = function() {
                return { reset: a2.resetState, "variable-update": a2.updateSrc, "add-key-request": a2.addKeyRequest };
              }, a2.updateSrc = function() {
                var e6, t4 = q2.get(a2.rjvId, "action", "variable-update"), n4 = t4.name, r2 = t4.namespace, o2 = t4.new_value, i2 = t4.existing_value, s2 = (t4.variable_removed, t4.updated_src), c3 = t4.type, l3 = a2.props, u3 = l3.onEdit, f3 = l3.onDelete, p3 = l3.onAdd, d3 = { existing_src: a2.state.src, new_value: o2, updated_src: s2, name: n4, namespace: r2, existing_value: i2 };
                switch (c3) {
                  case "variable-added":
                    e6 = p3(d3);
                    break;
                  case "variable-edited":
                    e6 = u3(d3);
                    break;
                  case "variable-removed":
                    e6 = f3(d3);
                }
                false !== e6 ? (q2.set(a2.rjvId, "global", "src", s2), a2.setState({ src: s2 })) : a2.setState({ validationFailure: true });
              }, a2.addKeyRequest = function() {
                a2.setState({ addKeyRequest: true });
              }, a2.resetState = function() {
                a2.setState({ validationFailure: false, addKeyRequest: false });
              }, a2.state = { addKeyRequest: false, editKeyRequest: false, validationFailure: false, src: n3.defaultProps.src, name: n3.defaultProps.name, theme: n3.defaultProps.theme, validationMessage: n3.defaultProps.validationMessage, prevSrc: n3.defaultProps.src, prevName: n3.defaultProps.name, prevTheme: n3.defaultProps.theme }, a2;
            }
            return c2(n3, [{ key: "componentDidMount", value: function() {
              q2.set(this.rjvId, "global", "src", this.state.src);
              var e5 = this.getListeners();
              for (var t4 in e5)
                q2.on(t4 + "-" + this.rjvId, e5[t4]);
              this.setState({ addKeyRequest: false, editKeyRequest: false });
            } }, { key: "componentDidUpdate", value: function(e5, t4) {
              false !== t4.addKeyRequest && this.setState({ addKeyRequest: false }), false !== t4.editKeyRequest && this.setState({ editKeyRequest: false }), e5.src !== this.state.src && q2.set(this.rjvId, "global", "src", this.state.src);
            } }, { key: "componentWillUnmount", value: function() {
              var e5 = this.getListeners();
              for (var t4 in e5)
                q2.removeListener(t4 + "-" + this.rjvId, e5[t4]);
            } }, { key: "render", value: function() {
              var e5 = this.state, t4 = e5.validationFailure, n4 = e5.validationMessage, a2 = e5.addKeyRequest, r2 = e5.theme, i2 = e5.src, s2 = e5.name, c3 = this.props, l3 = c3.style, u3 = c3.defaultValue;
              return m2.a.createElement("div", { className: "react-json-view", style: o(o({}, A(r2, "app-container").style), l3) }, m2.a.createElement(Le, { message: n4, active: t4, theme: r2, rjvId: this.rjvId }), m2.a.createElement(De, Object.assign({}, this.props, { src: i2, name: s2, theme: r2, type: _2(i2), rjvId: this.rjvId })), m2.a.createElement(Re, { active: a2, theme: r2, rjvId: this.rjvId, defaultValue: u3 }));
            } }], [{ key: "getDerivedStateFromProps", value: function(e5, t4) {
              if (e5.src !== t4.prevSrc || e5.name !== t4.prevName || e5.theme !== t4.prevTheme) {
                var a2 = { src: e5.src, name: e5.name, theme: e5.theme, validationMessage: e5.validationMessage, prevSrc: e5.src, prevName: e5.name, prevTheme: e5.theme };
                return n3.validateState(a2);
              }
              return null;
            } }]), n3;
          }(m2.a.PureComponent);
          Be.defaultProps = { src: {}, name: "root", theme: "rjv-default", collapsed: false, collapseStringsAfterLength: false, shouldCollapse: false, sortKeys: false, quotesOnKeys: true, groupArraysAfterLength: 100, indentWidth: 4, enableClipboard: true, displayObjectSize: true, displayDataTypes: true, onEdit: false, onDelete: false, onAdd: false, onSelect: false, iconStyle: "triangle", style: {}, validationMessage: "Validation Error", defaultValue: null, displayArrayKey: true }, Be.validateState = function(e4) {
            var t3 = {};
            return "object" !== _2(e4.theme) || function(e5) {
              var t4 = ["base00", "base01", "base02", "base03", "base04", "base05", "base06", "base07", "base08", "base09", "base0A", "base0B", "base0C", "base0D", "base0E", "base0F"];
              if ("object" === _2(e5)) {
                for (var n3 = 0; n3 < t4.length; n3++)
                  if (!(t4[n3] in e5))
                    return false;
                return true;
              }
              return false;
            }(e4.theme) || (console.error("react-json-view error:", "theme prop must be a theme name or valid base-16 theme object.", 'defaulting to "rjv-default" theme'), t3.theme = "rjv-default"), "object" !== _2(e4.src) && "array" !== _2(e4.src) && (console.error("react-json-view error:", "src property must be a valid json object"), t3.name = "ERROR", t3.src = { message: "src property must be a valid json object" }), o(o({}, e4), t3);
          }, j(Be);
          t2.default = Be;
        }]);
      });
    })(main);
    var mainExports = main.exports;
    const ReactJson = /* @__PURE__ */ getDefaultExportFromCjs(mainExports);
    const TreeDisplay = ({ data, collapsed }) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { fontSize: "12px", height: "100%", overflow: "auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        ReactJson,
        {
          src: data,
          name: false,
          theme: "codeschool",
          iconStyle: "triangle",
          enableClipboard: false,
          displayDataTypes: false,
          displayObjectSize: true,
          indentWidth: 4,
          collapsed: collapsed || 1,
          collapseStringsAfterLength: 20
        }
      ) });
    };
    const TagConfig = ({ tagConfig }) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(TreeDisplay, { data: tagConfig });
    };
    const EventType = {
      "load-js-tag": "Load JS Tag",
      "load-profile": "Load Profile",
      "collect-data": "Collect Data",
      "load-pathfora-tag": "Load Pathfora Tag",
      "load-pathfora-css": "Load Pathfora CSS",
      "load-campaign-config": "Load Campaign Config",
      "load-experience-config": "Load Experience Config"
    };
    const GeneralEmpty = () => {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "100%", height: "100%", viewBox: "0 0 151 115", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "24.9751", y: "23.5886", width: "100.972", height: "81.6684", rx: "3.5121", fill: "#DDD9EF" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M126.186 40.6021H25.2148V27.1003C25.2148 25.1606 26.7873 23.5882 28.7269 23.5882H122.674C124.614 23.5882 126.186 25.1606 126.186 27.1003V40.6021Z",
            fill: "#B9A2FF",
            fillOpacity: "0.62"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "34.1233", cy: "32.4975", r: "2.96976", fill: "white" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "41.5496", cy: "32.4975", r: "2.96976", fill: "white" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "48.971", cy: "32.4975", r: "2.96976", fill: "white" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "140.999", cy: "76.107", r: "2.9757", fill: "#B9A2FF", fillOpacity: "0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "16.0519", cy: "76.107", r: "2.9757", fill: "#B9A2FF", fillOpacity: "0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "101.542", cy: "12.9757", r: "2.9757", fill: "#B9A2FF", fillOpacity: "0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "9.4757", cy: "51.1175", r: "2.9757", fill: "#B9A2FF", fillOpacity: "0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { opacity: "0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M54.7311 60L52.5 62.2268L66.3814 76.0811L68.6125 73.8543L54.7311 60Z", fill: "#BCA6FF" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M66.3814 60L52.5 73.8543L54.7311 76.0811L68.6125 62.2268L66.3814 60Z", fill: "#BCA6FF" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M84.2067 60.0004L81.9756 62.2272L95.857 76.0815L98.0881 73.8547L84.2067 60.0004Z", fill: "#BCA6FF" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M95.857 60.0005L81.9756 73.8547L84.2067 76.0815L98.0881 62.2272L95.857 60.0005Z", fill: "#BCA6FF" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M60.4195 92.6681L58.5879 90.0133C62.2482 87.4979 68.4944 85.9964 75.2944 85.9964C82.0944 85.9964 88.3405 87.4979 92.0009 90.0133L90.1692 92.6681C87.0735 90.5407 81.3735 89.2197 75.2944 89.2197C69.2153 89.2197 63.5152 90.5407 60.4195 92.6681Z",
              fill: "#BCA6FF"
            }
          )
        ] })
      ] });
    };
    const ListeningEmpty = () => {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "100%", height: "100%", viewBox: "0 0 138 96", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "18.7144", y: "13.5886", width: "100.972", height: "81.6684", rx: "3.5121", fill: "#DDD9EF" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M119.686 30.602H18.7148V17.1002C18.7148 15.1606 20.2873 13.5881 22.2269 13.5881H116.174C118.114 13.5881 119.686 15.1606 119.686 17.1002V30.602Z",
            fill: "#B9A2FF",
            fillOpacity: "0.62"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "27.6233", cy: "22.4975", r: "2.96976", fill: "white" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "35.0496", cy: "22.4975", r: "2.96976", fill: "white" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "42.471", cy: "22.4975", r: "2.96976", fill: "white" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "134.499", cy: "66.107", r: "2.9757", fill: "#B9A2FF", fillOpacity: "0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "9.55188", cy: "66.107", r: "2.9757", fill: "#B9A2FF", fillOpacity: "0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "95.0421", cy: "2.9757", r: "2.9757", fill: "#B9A2FF", fillOpacity: "0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "2.9757", cy: "41.1175", r: "2.9757", fill: "#B9A2FF", fillOpacity: "0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M62.3592 46.7335C66.1908 44.9585 70.5195 44.567 74.6075 45.6256C78.6955 46.6843 82.2899 49.1277 84.7784 52.5395C87.2668 55.9512 88.4953 60.1203 88.2545 64.3363C88.0137 68.5523 86.3185 72.5543 83.4577 75.6606C80.597 78.7668 76.7477 80.785 72.5658 81.3713C68.3838 81.9577 64.1279 81.0758 60.5233 78.876C56.9186 76.6763 54.1882 73.2947 52.7973 69.3075C52.4666 68.3595 52.967 67.3229 53.915 66.9922C54.863 66.6615 55.8995 67.1619 56.2302 68.1099C57.3441 71.3029 59.5306 74.0109 62.4172 75.7725C65.3039 77.5341 68.712 78.2403 72.0609 77.7708C75.4099 77.3012 78.4924 75.685 80.7833 73.1975C83.0742 70.71 84.4317 67.5051 84.6246 64.129C84.8174 60.7528 83.8336 57.4142 81.8409 54.682C79.8481 51.9498 76.9697 49.9931 73.696 49.1453C70.4223 48.2975 66.9559 48.6111 63.8874 50.0325C61.507 51.1353 59.4803 52.8519 58.0047 54.9882L59.5982 56.3223C60.7678 57.3014 60.2842 59.1987 58.7887 59.4986L53.5718 60.5447C52.4312 60.7734 51.3723 59.8869 51.3969 58.7238L51.5093 53.4043C51.5416 51.8794 53.3243 51.0697 54.4938 52.0489L55.2073 52.6462C57.0318 50.1064 59.4897 48.0628 62.3592 46.7335ZM68.4962 54.685C69.5002 54.685 70.3141 55.4989 70.3141 56.5029V63.7063L75.8831 66.4908C76.7811 66.9398 77.1451 68.0318 76.6961 68.9298C76.2471 69.8278 75.1551 70.1918 74.2571 69.7428L67.6832 66.4558L66.6783 65.9533V64.8298V56.5029C66.6783 55.4989 67.4922 54.685 68.4962 54.685Z",
            fill: "#CDBFF7"
          }
        )
      ] });
    };
    const DeprecatedEmpty = () => {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "100%", height: "100%", viewBox: "0 0 138 96", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "18.7144", y: "13.5886", width: "100.972", height: "81.6684", rx: "3.5121", fill: "#DDD9EF" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M119.686 30.602H18.7148V17.1002C18.7148 15.1606 20.2873 13.5881 22.2269 13.5881H116.174C118.114 13.5881 119.686 15.1606 119.686 17.1002V30.602Z",
            fill: "#B9A2FF",
            fillOpacity: "0.62"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "27.6233", cy: "22.4975", r: "2.96976", fill: "white" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "35.0496", cy: "22.4975", r: "2.96976", fill: "white" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "42.471", cy: "22.4975", r: "2.96976", fill: "white" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "134.499", cy: "66.107", r: "2.9757", fill: "#B9A2FF", fillOpacity: "0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "9.55188", cy: "66.107", r: "2.9757", fill: "#B9A2FF", fillOpacity: "0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "95.0421", cy: "2.9757", r: "2.9757", fill: "#B9A2FF", fillOpacity: "0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "2.9757", cy: "41.1175", r: "2.9757", fill: "#B9A2FF", fillOpacity: "0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M71.9563 45L62.9782 54.234C62.4682 54.759 62.1818 55.4689 62.1818 56.2109V70.2C62.1818 71.747 63.4023 73 64.9091 73H77.1712C78.2607 73 79.2465 72.3337 79.6774 71.3047L83.7789 61.502C83.9249 61.1534 84 60.7767 84 60.3973V57.6C84 56.053 82.7795 54.8 81.2727 54.8H72.6115L73.8899 48.7844C74.089 47.8464 73.803 46.867 73.1362 46.1922L71.9563 45ZM54 56.2V73H59.4545V56.2H54Z",
            fill: "#CDBFF7"
          }
        )
      ] });
    };
    const EmptyState = ({ body, type }) => {
      const translateType = (type2) => {
        switch (type2) {
          case "listening":
            return /* @__PURE__ */ jsxRuntimeExports.jsx(ListeningEmpty, {});
          case "deprecated":
            return /* @__PURE__ */ jsxRuntimeExports.jsx(DeprecatedEmpty, {});
          default:
            return /* @__PURE__ */ jsxRuntimeExports.jsx(GeneralEmpty, {});
        }
      };
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack$1, { width: "100%", height: "100%", justifyContent: "center", alignItems: "center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { width: "125px", children: translateType(type) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { pt: 1, pb: 5, fontSize: "14px", textAlign: "center", color: "#B0A5D4", children: body })
      ] });
    };
    //! moment.js
    //! version : 2.29.4
    //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
    //! license : MIT
    //! momentjs.com
    var hookCallback;
    function hooks() {
      return hookCallback.apply(null, arguments);
    }
    function setHookCallback(callback) {
      hookCallback = callback;
    }
    function isArray(input) {
      return input instanceof Array || Object.prototype.toString.call(input) === "[object Array]";
    }
    function isObject(input) {
      return input != null && Object.prototype.toString.call(input) === "[object Object]";
    }
    function hasOwnProp(a, b2) {
      return Object.prototype.hasOwnProperty.call(a, b2);
    }
    function isObjectEmpty(obj) {
      if (Object.getOwnPropertyNames) {
        return Object.getOwnPropertyNames(obj).length === 0;
      } else {
        var k2;
        for (k2 in obj) {
          if (hasOwnProp(obj, k2)) {
            return false;
          }
        }
        return true;
      }
    }
    function isUndefined(input) {
      return input === void 0;
    }
    function isNumber(input) {
      return typeof input === "number" || Object.prototype.toString.call(input) === "[object Number]";
    }
    function isDate(input) {
      return input instanceof Date || Object.prototype.toString.call(input) === "[object Date]";
    }
    function map(arr, fn) {
      var res = [], i, arrLen = arr.length;
      for (i = 0; i < arrLen; ++i) {
        res.push(fn(arr[i], i));
      }
      return res;
    }
    function extend(a, b2) {
      for (var i in b2) {
        if (hasOwnProp(b2, i)) {
          a[i] = b2[i];
        }
      }
      if (hasOwnProp(b2, "toString")) {
        a.toString = b2.toString;
      }
      if (hasOwnProp(b2, "valueOf")) {
        a.valueOf = b2.valueOf;
      }
      return a;
    }
    function createUTC(input, format2, locale2, strict) {
      return createLocalOrUTC(input, format2, locale2, strict, true).utc();
    }
    function defaultParsingFlags() {
      return {
        empty: false,
        unusedTokens: [],
        unusedInput: [],
        overflow: -2,
        charsLeftOver: 0,
        nullInput: false,
        invalidEra: null,
        invalidMonth: null,
        invalidFormat: false,
        userInvalidated: false,
        iso: false,
        parsedDateParts: [],
        era: null,
        meridiem: null,
        rfc2822: false,
        weekdayMismatch: false
      };
    }
    function getParsingFlags(m2) {
      if (m2._pf == null) {
        m2._pf = defaultParsingFlags();
      }
      return m2._pf;
    }
    var some;
    if (Array.prototype.some) {
      some = Array.prototype.some;
    } else {
      some = function(fun) {
        var t2 = Object(this), len = t2.length >>> 0, i;
        for (i = 0; i < len; i++) {
          if (i in t2 && fun.call(this, t2[i], i, t2)) {
            return true;
          }
        }
        return false;
      };
    }
    function isValid(m2) {
      if (m2._isValid == null) {
        var flags = getParsingFlags(m2), parsedParts = some.call(flags.parsedDateParts, function(i) {
          return i != null;
        }), isNowValid = !isNaN(m2._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidEra && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);
        if (m2._strict) {
          isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === void 0;
        }
        if (Object.isFrozen == null || !Object.isFrozen(m2)) {
          m2._isValid = isNowValid;
        } else {
          return isNowValid;
        }
      }
      return m2._isValid;
    }
    function createInvalid(flags) {
      var m2 = createUTC(NaN);
      if (flags != null) {
        extend(getParsingFlags(m2), flags);
      } else {
        getParsingFlags(m2).userInvalidated = true;
      }
      return m2;
    }
    var momentProperties = hooks.momentProperties = [], updateInProgress = false;
    function copyConfig(to2, from2) {
      var i, prop, val, momentPropertiesLen = momentProperties.length;
      if (!isUndefined(from2._isAMomentObject)) {
        to2._isAMomentObject = from2._isAMomentObject;
      }
      if (!isUndefined(from2._i)) {
        to2._i = from2._i;
      }
      if (!isUndefined(from2._f)) {
        to2._f = from2._f;
      }
      if (!isUndefined(from2._l)) {
        to2._l = from2._l;
      }
      if (!isUndefined(from2._strict)) {
        to2._strict = from2._strict;
      }
      if (!isUndefined(from2._tzm)) {
        to2._tzm = from2._tzm;
      }
      if (!isUndefined(from2._isUTC)) {
        to2._isUTC = from2._isUTC;
      }
      if (!isUndefined(from2._offset)) {
        to2._offset = from2._offset;
      }
      if (!isUndefined(from2._pf)) {
        to2._pf = getParsingFlags(from2);
      }
      if (!isUndefined(from2._locale)) {
        to2._locale = from2._locale;
      }
      if (momentPropertiesLen > 0) {
        for (i = 0; i < momentPropertiesLen; i++) {
          prop = momentProperties[i];
          val = from2[prop];
          if (!isUndefined(val)) {
            to2[prop] = val;
          }
        }
      }
      return to2;
    }
    function Moment(config2) {
      copyConfig(this, config2);
      this._d = new Date(config2._d != null ? config2._d.getTime() : NaN);
      if (!this.isValid()) {
        this._d = /* @__PURE__ */ new Date(NaN);
      }
      if (updateInProgress === false) {
        updateInProgress = true;
        hooks.updateOffset(this);
        updateInProgress = false;
      }
    }
    function isMoment(obj) {
      return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
    }
    function warn(msg) {
      if (hooks.suppressDeprecationWarnings === false && typeof console !== "undefined" && console.warn) {
        console.warn("Deprecation warning: " + msg);
      }
    }
    function deprecate(msg, fn) {
      var firstTime = true;
      return extend(function() {
        if (hooks.deprecationHandler != null) {
          hooks.deprecationHandler(null, msg);
        }
        if (firstTime) {
          var args = [], arg, i, key2, argLen = arguments.length;
          for (i = 0; i < argLen; i++) {
            arg = "";
            if (typeof arguments[i] === "object") {
              arg += "\n[" + i + "] ";
              for (key2 in arguments[0]) {
                if (hasOwnProp(arguments[0], key2)) {
                  arg += key2 + ": " + arguments[0][key2] + ", ";
                }
              }
              arg = arg.slice(0, -2);
            } else {
              arg = arguments[i];
            }
            args.push(arg);
          }
          warn(
            msg + "\nArguments: " + Array.prototype.slice.call(args).join("") + "\n" + new Error().stack
          );
          firstTime = false;
        }
        return fn.apply(this, arguments);
      }, fn);
    }
    var deprecations = {};
    function deprecateSimple(name, msg) {
      if (hooks.deprecationHandler != null) {
        hooks.deprecationHandler(name, msg);
      }
      if (!deprecations[name]) {
        warn(msg);
        deprecations[name] = true;
      }
    }
    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;
    function isFunction(input) {
      return typeof Function !== "undefined" && input instanceof Function || Object.prototype.toString.call(input) === "[object Function]";
    }
    function set(config2) {
      var prop, i;
      for (i in config2) {
        if (hasOwnProp(config2, i)) {
          prop = config2[i];
          if (isFunction(prop)) {
            this[i] = prop;
          } else {
            this["_" + i] = prop;
          }
        }
      }
      this._config = config2;
      this._dayOfMonthOrdinalParseLenient = new RegExp(
        (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
      );
    }
    function mergeConfigs(parentConfig, childConfig) {
      var res = extend({}, parentConfig), prop;
      for (prop in childConfig) {
        if (hasOwnProp(childConfig, prop)) {
          if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
            res[prop] = {};
            extend(res[prop], parentConfig[prop]);
            extend(res[prop], childConfig[prop]);
          } else if (childConfig[prop] != null) {
            res[prop] = childConfig[prop];
          } else {
            delete res[prop];
          }
        }
      }
      for (prop in parentConfig) {
        if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) {
          res[prop] = extend({}, res[prop]);
        }
      }
      return res;
    }
    function Locale(config2) {
      if (config2 != null) {
        this.set(config2);
      }
    }
    var keys;
    if (Object.keys) {
      keys = Object.keys;
    } else {
      keys = function(obj) {
        var i, res = [];
        for (i in obj) {
          if (hasOwnProp(obj, i)) {
            res.push(i);
          }
        }
        return res;
      };
    }
    var defaultCalendar = {
      sameDay: "[Today at] LT",
      nextDay: "[Tomorrow at] LT",
      nextWeek: "dddd [at] LT",
      lastDay: "[Yesterday at] LT",
      lastWeek: "[Last] dddd [at] LT",
      sameElse: "L"
    };
    function calendar(key2, mom, now2) {
      var output = this._calendar[key2] || this._calendar["sameElse"];
      return isFunction(output) ? output.call(mom, now2) : output;
    }
    function zeroFill(number, targetLength, forceSign) {
      var absNumber = "" + Math.abs(number), zerosToFill = targetLength - absNumber.length, sign2 = number >= 0;
      return (sign2 ? forceSign ? "+" : "" : "-") + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }
    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, formatFunctions = {}, formatTokenFunctions = {};
    function addFormatToken(token2, padded, ordinal2, callback) {
      var func = callback;
      if (typeof callback === "string") {
        func = function() {
          return this[callback]();
        };
      }
      if (token2) {
        formatTokenFunctions[token2] = func;
      }
      if (padded) {
        formatTokenFunctions[padded[0]] = function() {
          return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
        };
      }
      if (ordinal2) {
        formatTokenFunctions[ordinal2] = function() {
          return this.localeData().ordinal(
            func.apply(this, arguments),
            token2
          );
        };
      }
    }
    function removeFormattingTokens(input) {
      if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, "");
      }
      return input.replace(/\\/g, "");
    }
    function makeFormatFunction(format2) {
      var array = format2.match(formattingTokens), i, length;
      for (i = 0, length = array.length; i < length; i++) {
        if (formatTokenFunctions[array[i]]) {
          array[i] = formatTokenFunctions[array[i]];
        } else {
          array[i] = removeFormattingTokens(array[i]);
        }
      }
      return function(mom) {
        var output = "", i2;
        for (i2 = 0; i2 < length; i2++) {
          output += isFunction(array[i2]) ? array[i2].call(mom, format2) : array[i2];
        }
        return output;
      };
    }
    function formatMoment(m2, format2) {
      if (!m2.isValid()) {
        return m2.localeData().invalidDate();
      }
      format2 = expandFormat(format2, m2.localeData());
      formatFunctions[format2] = formatFunctions[format2] || makeFormatFunction(format2);
      return formatFunctions[format2](m2);
    }
    function expandFormat(format2, locale2) {
      var i = 5;
      function replaceLongDateFormatTokens(input) {
        return locale2.longDateFormat(input) || input;
      }
      localFormattingTokens.lastIndex = 0;
      while (i >= 0 && localFormattingTokens.test(format2)) {
        format2 = format2.replace(
          localFormattingTokens,
          replaceLongDateFormatTokens
        );
        localFormattingTokens.lastIndex = 0;
        i -= 1;
      }
      return format2;
    }
    var defaultLongDateFormat = {
      LTS: "h:mm:ss A",
      LT: "h:mm A",
      L: "MM/DD/YYYY",
      LL: "MMMM D, YYYY",
      LLL: "MMMM D, YYYY h:mm A",
      LLLL: "dddd, MMMM D, YYYY h:mm A"
    };
    function longDateFormat(key2) {
      var format2 = this._longDateFormat[key2], formatUpper = this._longDateFormat[key2.toUpperCase()];
      if (format2 || !formatUpper) {
        return format2;
      }
      this._longDateFormat[key2] = formatUpper.match(formattingTokens).map(function(tok) {
        if (tok === "MMMM" || tok === "MM" || tok === "DD" || tok === "dddd") {
          return tok.slice(1);
        }
        return tok;
      }).join("");
      return this._longDateFormat[key2];
    }
    var defaultInvalidDate = "Invalid date";
    function invalidDate() {
      return this._invalidDate;
    }
    var defaultOrdinal = "%d", defaultDayOfMonthOrdinalParse = /\d{1,2}/;
    function ordinal(number) {
      return this._ordinal.replace("%d", number);
    }
    var defaultRelativeTime = {
      future: "in %s",
      past: "%s ago",
      s: "a few seconds",
      ss: "%d seconds",
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      w: "a week",
      ww: "%d weeks",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years"
    };
    function relativeTime(number, withoutSuffix, string, isFuture) {
      var output = this._relativeTime[string];
      return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
    }
    function pastFuture(diff2, output) {
      var format2 = this._relativeTime[diff2 > 0 ? "future" : "past"];
      return isFunction(format2) ? format2(output) : format2.replace(/%s/i, output);
    }
    var aliases = {};
    function addUnitAlias(unit, shorthand) {
      var lowerCase = unit.toLowerCase();
      aliases[lowerCase] = aliases[lowerCase + "s"] = aliases[shorthand] = unit;
    }
    function normalizeUnits(units2) {
      return typeof units2 === "string" ? aliases[units2] || aliases[units2.toLowerCase()] : void 0;
    }
    function normalizeObjectUnits(inputObject) {
      var normalizedInput = {}, normalizedProp, prop;
      for (prop in inputObject) {
        if (hasOwnProp(inputObject, prop)) {
          normalizedProp = normalizeUnits(prop);
          if (normalizedProp) {
            normalizedInput[normalizedProp] = inputObject[prop];
          }
        }
      }
      return normalizedInput;
    }
    var priorities = {};
    function addUnitPriority(unit, priority) {
      priorities[unit] = priority;
    }
    function getPrioritizedUnits(unitsObj) {
      var units2 = [], u2;
      for (u2 in unitsObj) {
        if (hasOwnProp(unitsObj, u2)) {
          units2.push({ unit: u2, priority: priorities[u2] });
        }
      }
      units2.sort(function(a, b2) {
        return a.priority - b2.priority;
      });
      return units2;
    }
    function isLeapYear(year) {
      return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    }
    function absFloor(number) {
      if (number < 0) {
        return Math.ceil(number) || 0;
      } else {
        return Math.floor(number);
      }
    }
    function toInt(argumentForCoercion) {
      var coercedNumber = +argumentForCoercion, value = 0;
      if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = absFloor(coercedNumber);
      }
      return value;
    }
    function makeGetSet(unit, keepTime) {
      return function(value) {
        if (value != null) {
          set$1(this, unit, value);
          hooks.updateOffset(this, keepTime);
          return this;
        } else {
          return get(this, unit);
        }
      };
    }
    function get(mom, unit) {
      return mom.isValid() ? mom._d["get" + (mom._isUTC ? "UTC" : "") + unit]() : NaN;
    }
    function set$1(mom, unit, value) {
      if (mom.isValid() && !isNaN(value)) {
        if (unit === "FullYear" && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
          value = toInt(value);
          mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](
            value,
            mom.month(),
            daysInMonth(value, mom.month())
          );
        } else {
          mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](value);
        }
      }
    }
    function stringGet(units2) {
      units2 = normalizeUnits(units2);
      if (isFunction(this[units2])) {
        return this[units2]();
      }
      return this;
    }
    function stringSet(units2, value) {
      if (typeof units2 === "object") {
        units2 = normalizeObjectUnits(units2);
        var prioritized = getPrioritizedUnits(units2), i, prioritizedLen = prioritized.length;
        for (i = 0; i < prioritizedLen; i++) {
          this[prioritized[i].unit](units2[prioritized[i].unit]);
        }
      } else {
        units2 = normalizeUnits(units2);
        if (isFunction(this[units2])) {
          return this[units2](value);
        }
      }
      return this;
    }
    var match1 = /\d/, match2 = /\d\d/, match3 = /\d{3}/, match4 = /\d{4}/, match6 = /[+-]?\d{6}/, match1to2 = /\d\d?/, match3to4 = /\d\d\d\d?/, match5to6 = /\d\d\d\d\d\d?/, match1to3 = /\d{1,3}/, match1to4 = /\d{1,4}/, match1to6 = /[+-]?\d{1,6}/, matchUnsigned = /\d+/, matchSigned = /[+-]?\d+/, matchOffset = /Z|[+-]\d\d:?\d\d/gi, matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, regexes;
    regexes = {};
    function addRegexToken(token2, regex, strictRegex) {
      regexes[token2] = isFunction(regex) ? regex : function(isStrict, localeData2) {
        return isStrict && strictRegex ? strictRegex : regex;
      };
    }
    function getParseRegexForToken(token2, config2) {
      if (!hasOwnProp(regexes, token2)) {
        return new RegExp(unescapeFormat(token2));
      }
      return regexes[token2](config2._strict, config2._locale);
    }
    function unescapeFormat(s) {
      return regexEscape(
        s.replace("\\", "").replace(
          /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
          function(matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
          }
        )
      );
    }
    function regexEscape(s) {
      return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    }
    var tokens = {};
    function addParseToken(token2, callback) {
      var i, func = callback, tokenLen;
      if (typeof token2 === "string") {
        token2 = [token2];
      }
      if (isNumber(callback)) {
        func = function(input, array) {
          array[callback] = toInt(input);
        };
      }
      tokenLen = token2.length;
      for (i = 0; i < tokenLen; i++) {
        tokens[token2[i]] = func;
      }
    }
    function addWeekParseToken(token2, callback) {
      addParseToken(token2, function(input, array, config2, token3) {
        config2._w = config2._w || {};
        callback(input, config2._w, config2, token3);
      });
    }
    function addTimeToArrayFromToken(token2, input, config2) {
      if (input != null && hasOwnProp(tokens, token2)) {
        tokens[token2](input, config2._a, config2, token2);
      }
    }
    var YEAR = 0, MONTH = 1, DATE = 2, HOUR = 3, MINUTE = 4, SECOND = 5, MILLISECOND = 6, WEEK = 7, WEEKDAY = 8;
    function mod(n2, x) {
      return (n2 % x + x) % x;
    }
    var indexOf;
    if (Array.prototype.indexOf) {
      indexOf = Array.prototype.indexOf;
    } else {
      indexOf = function(o) {
        var i;
        for (i = 0; i < this.length; ++i) {
          if (this[i] === o) {
            return i;
          }
        }
        return -1;
      };
    }
    function daysInMonth(year, month) {
      if (isNaN(year) || isNaN(month)) {
        return NaN;
      }
      var modMonth = mod(month, 12);
      year += (month - modMonth) / 12;
      return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
    }
    addFormatToken("M", ["MM", 2], "Mo", function() {
      return this.month() + 1;
    });
    addFormatToken("MMM", 0, 0, function(format2) {
      return this.localeData().monthsShort(this, format2);
    });
    addFormatToken("MMMM", 0, 0, function(format2) {
      return this.localeData().months(this, format2);
    });
    addUnitAlias("month", "M");
    addUnitPriority("month", 8);
    addRegexToken("M", match1to2);
    addRegexToken("MM", match1to2, match2);
    addRegexToken("MMM", function(isStrict, locale2) {
      return locale2.monthsShortRegex(isStrict);
    });
    addRegexToken("MMMM", function(isStrict, locale2) {
      return locale2.monthsRegex(isStrict);
    });
    addParseToken(["M", "MM"], function(input, array) {
      array[MONTH] = toInt(input) - 1;
    });
    addParseToken(["MMM", "MMMM"], function(input, array, config2, token2) {
      var month = config2._locale.monthsParse(input, token2, config2._strict);
      if (month != null) {
        array[MONTH] = month;
      } else {
        getParsingFlags(config2).invalidMonth = input;
      }
    });
    var defaultLocaleMonths = "January_February_March_April_May_June_July_August_September_October_November_December".split(
      "_"
    ), defaultLocaleMonthsShort = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, defaultMonthsShortRegex = matchWord, defaultMonthsRegex = matchWord;
    function localeMonths(m2, format2) {
      if (!m2) {
        return isArray(this._months) ? this._months : this._months["standalone"];
      }
      return isArray(this._months) ? this._months[m2.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format2) ? "format" : "standalone"][m2.month()];
    }
    function localeMonthsShort(m2, format2) {
      if (!m2) {
        return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort["standalone"];
      }
      return isArray(this._monthsShort) ? this._monthsShort[m2.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format2) ? "format" : "standalone"][m2.month()];
    }
    function handleStrictParse(monthName, format2, strict) {
      var i, ii, mom, llc = monthName.toLocaleLowerCase();
      if (!this._monthsParse) {
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
        for (i = 0; i < 12; ++i) {
          mom = createUTC([2e3, i]);
          this._shortMonthsParse[i] = this.monthsShort(
            mom,
            ""
          ).toLocaleLowerCase();
          this._longMonthsParse[i] = this.months(mom, "").toLocaleLowerCase();
        }
      }
      if (strict) {
        if (format2 === "MMM") {
          ii = indexOf.call(this._shortMonthsParse, llc);
          return ii !== -1 ? ii : null;
        } else {
          ii = indexOf.call(this._longMonthsParse, llc);
          return ii !== -1 ? ii : null;
        }
      } else {
        if (format2 === "MMM") {
          ii = indexOf.call(this._shortMonthsParse, llc);
          if (ii !== -1) {
            return ii;
          }
          ii = indexOf.call(this._longMonthsParse, llc);
          return ii !== -1 ? ii : null;
        } else {
          ii = indexOf.call(this._longMonthsParse, llc);
          if (ii !== -1) {
            return ii;
          }
          ii = indexOf.call(this._shortMonthsParse, llc);
          return ii !== -1 ? ii : null;
        }
      }
    }
    function localeMonthsParse(monthName, format2, strict) {
      var i, mom, regex;
      if (this._monthsParseExact) {
        return handleStrictParse.call(this, monthName, format2, strict);
      }
      if (!this._monthsParse) {
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
      }
      for (i = 0; i < 12; i++) {
        mom = createUTC([2e3, i]);
        if (strict && !this._longMonthsParse[i]) {
          this._longMonthsParse[i] = new RegExp(
            "^" + this.months(mom, "").replace(".", "") + "$",
            "i"
          );
          this._shortMonthsParse[i] = new RegExp(
            "^" + this.monthsShort(mom, "").replace(".", "") + "$",
            "i"
          );
        }
        if (!strict && !this._monthsParse[i]) {
          regex = "^" + this.months(mom, "") + "|^" + this.monthsShort(mom, "");
          this._monthsParse[i] = new RegExp(regex.replace(".", ""), "i");
        }
        if (strict && format2 === "MMMM" && this._longMonthsParse[i].test(monthName)) {
          return i;
        } else if (strict && format2 === "MMM" && this._shortMonthsParse[i].test(monthName)) {
          return i;
        } else if (!strict && this._monthsParse[i].test(monthName)) {
          return i;
        }
      }
    }
    function setMonth(mom, value) {
      var dayOfMonth;
      if (!mom.isValid()) {
        return mom;
      }
      if (typeof value === "string") {
        if (/^\d+$/.test(value)) {
          value = toInt(value);
        } else {
          value = mom.localeData().monthsParse(value);
          if (!isNumber(value)) {
            return mom;
          }
        }
      }
      dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
      mom._d["set" + (mom._isUTC ? "UTC" : "") + "Month"](value, dayOfMonth);
      return mom;
    }
    function getSetMonth(value) {
      if (value != null) {
        setMonth(this, value);
        hooks.updateOffset(this, true);
        return this;
      } else {
        return get(this, "Month");
      }
    }
    function getDaysInMonth() {
      return daysInMonth(this.year(), this.month());
    }
    function monthsShortRegex(isStrict) {
      if (this._monthsParseExact) {
        if (!hasOwnProp(this, "_monthsRegex")) {
          computeMonthsParse.call(this);
        }
        if (isStrict) {
          return this._monthsShortStrictRegex;
        } else {
          return this._monthsShortRegex;
        }
      } else {
        if (!hasOwnProp(this, "_monthsShortRegex")) {
          this._monthsShortRegex = defaultMonthsShortRegex;
        }
        return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
      }
    }
    function monthsRegex(isStrict) {
      if (this._monthsParseExact) {
        if (!hasOwnProp(this, "_monthsRegex")) {
          computeMonthsParse.call(this);
        }
        if (isStrict) {
          return this._monthsStrictRegex;
        } else {
          return this._monthsRegex;
        }
      } else {
        if (!hasOwnProp(this, "_monthsRegex")) {
          this._monthsRegex = defaultMonthsRegex;
        }
        return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
      }
    }
    function computeMonthsParse() {
      function cmpLenRev(a, b2) {
        return b2.length - a.length;
      }
      var shortPieces = [], longPieces = [], mixedPieces = [], i, mom;
      for (i = 0; i < 12; i++) {
        mom = createUTC([2e3, i]);
        shortPieces.push(this.monthsShort(mom, ""));
        longPieces.push(this.months(mom, ""));
        mixedPieces.push(this.months(mom, ""));
        mixedPieces.push(this.monthsShort(mom, ""));
      }
      shortPieces.sort(cmpLenRev);
      longPieces.sort(cmpLenRev);
      mixedPieces.sort(cmpLenRev);
      for (i = 0; i < 12; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
      }
      for (i = 0; i < 24; i++) {
        mixedPieces[i] = regexEscape(mixedPieces[i]);
      }
      this._monthsRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
      this._monthsShortRegex = this._monthsRegex;
      this._monthsStrictRegex = new RegExp(
        "^(" + longPieces.join("|") + ")",
        "i"
      );
      this._monthsShortStrictRegex = new RegExp(
        "^(" + shortPieces.join("|") + ")",
        "i"
      );
    }
    addFormatToken("Y", 0, 0, function() {
      var y = this.year();
      return y <= 9999 ? zeroFill(y, 4) : "+" + y;
    });
    addFormatToken(0, ["YY", 2], 0, function() {
      return this.year() % 100;
    });
    addFormatToken(0, ["YYYY", 4], 0, "year");
    addFormatToken(0, ["YYYYY", 5], 0, "year");
    addFormatToken(0, ["YYYYYY", 6, true], 0, "year");
    addUnitAlias("year", "y");
    addUnitPriority("year", 1);
    addRegexToken("Y", matchSigned);
    addRegexToken("YY", match1to2, match2);
    addRegexToken("YYYY", match1to4, match4);
    addRegexToken("YYYYY", match1to6, match6);
    addRegexToken("YYYYYY", match1to6, match6);
    addParseToken(["YYYYY", "YYYYYY"], YEAR);
    addParseToken("YYYY", function(input, array) {
      array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken("YY", function(input, array) {
      array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken("Y", function(input, array) {
      array[YEAR] = parseInt(input, 10);
    });
    function daysInYear(year) {
      return isLeapYear(year) ? 366 : 365;
    }
    hooks.parseTwoDigitYear = function(input) {
      return toInt(input) + (toInt(input) > 68 ? 1900 : 2e3);
    };
    var getSetYear = makeGetSet("FullYear", true);
    function getIsLeapYear() {
      return isLeapYear(this.year());
    }
    function createDate(y, m2, d2, h2, M, s, ms2) {
      var date;
      if (y < 100 && y >= 0) {
        date = new Date(y + 400, m2, d2, h2, M, s, ms2);
        if (isFinite(date.getFullYear())) {
          date.setFullYear(y);
        }
      } else {
        date = new Date(y, m2, d2, h2, M, s, ms2);
      }
      return date;
    }
    function createUTCDate(y) {
      var date, args;
      if (y < 100 && y >= 0) {
        args = Array.prototype.slice.call(arguments);
        args[0] = y + 400;
        date = new Date(Date.UTC.apply(null, args));
        if (isFinite(date.getUTCFullYear())) {
          date.setUTCFullYear(y);
        }
      } else {
        date = new Date(Date.UTC.apply(null, arguments));
      }
      return date;
    }
    function firstWeekOffset(year, dow, doy) {
      var fwd = 7 + dow - doy, fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
      return -fwdlw + fwd - 1;
    }
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
      var localWeekday = (7 + weekday - dow) % 7, weekOffset = firstWeekOffset(year, dow, doy), dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset, resYear, resDayOfYear;
      if (dayOfYear <= 0) {
        resYear = year - 1;
        resDayOfYear = daysInYear(resYear) + dayOfYear;
      } else if (dayOfYear > daysInYear(year)) {
        resYear = year + 1;
        resDayOfYear = dayOfYear - daysInYear(year);
      } else {
        resYear = year;
        resDayOfYear = dayOfYear;
      }
      return {
        year: resYear,
        dayOfYear: resDayOfYear
      };
    }
    function weekOfYear(mom, dow, doy) {
      var weekOffset = firstWeekOffset(mom.year(), dow, doy), week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1, resWeek, resYear;
      if (week < 1) {
        resYear = mom.year() - 1;
        resWeek = week + weeksInYear(resYear, dow, doy);
      } else if (week > weeksInYear(mom.year(), dow, doy)) {
        resWeek = week - weeksInYear(mom.year(), dow, doy);
        resYear = mom.year() + 1;
      } else {
        resYear = mom.year();
        resWeek = week;
      }
      return {
        week: resWeek,
        year: resYear
      };
    }
    function weeksInYear(year, dow, doy) {
      var weekOffset = firstWeekOffset(year, dow, doy), weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
      return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }
    addFormatToken("w", ["ww", 2], "wo", "week");
    addFormatToken("W", ["WW", 2], "Wo", "isoWeek");
    addUnitAlias("week", "w");
    addUnitAlias("isoWeek", "W");
    addUnitPriority("week", 5);
    addUnitPriority("isoWeek", 5);
    addRegexToken("w", match1to2);
    addRegexToken("ww", match1to2, match2);
    addRegexToken("W", match1to2);
    addRegexToken("WW", match1to2, match2);
    addWeekParseToken(
      ["w", "ww", "W", "WW"],
      function(input, week, config2, token2) {
        week[token2.substr(0, 1)] = toInt(input);
      }
    );
    function localeWeek(mom) {
      return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }
    var defaultLocaleWeek = {
      dow: 0,
      // Sunday is the first day of the week.
      doy: 6
      // The week that contains Jan 6th is the first week of the year.
    };
    function localeFirstDayOfWeek() {
      return this._week.dow;
    }
    function localeFirstDayOfYear() {
      return this._week.doy;
    }
    function getSetWeek(input) {
      var week = this.localeData().week(this);
      return input == null ? week : this.add((input - week) * 7, "d");
    }
    function getSetISOWeek(input) {
      var week = weekOfYear(this, 1, 4).week;
      return input == null ? week : this.add((input - week) * 7, "d");
    }
    addFormatToken("d", 0, "do", "day");
    addFormatToken("dd", 0, 0, function(format2) {
      return this.localeData().weekdaysMin(this, format2);
    });
    addFormatToken("ddd", 0, 0, function(format2) {
      return this.localeData().weekdaysShort(this, format2);
    });
    addFormatToken("dddd", 0, 0, function(format2) {
      return this.localeData().weekdays(this, format2);
    });
    addFormatToken("e", 0, 0, "weekday");
    addFormatToken("E", 0, 0, "isoWeekday");
    addUnitAlias("day", "d");
    addUnitAlias("weekday", "e");
    addUnitAlias("isoWeekday", "E");
    addUnitPriority("day", 11);
    addUnitPriority("weekday", 11);
    addUnitPriority("isoWeekday", 11);
    addRegexToken("d", match1to2);
    addRegexToken("e", match1to2);
    addRegexToken("E", match1to2);
    addRegexToken("dd", function(isStrict, locale2) {
      return locale2.weekdaysMinRegex(isStrict);
    });
    addRegexToken("ddd", function(isStrict, locale2) {
      return locale2.weekdaysShortRegex(isStrict);
    });
    addRegexToken("dddd", function(isStrict, locale2) {
      return locale2.weekdaysRegex(isStrict);
    });
    addWeekParseToken(["dd", "ddd", "dddd"], function(input, week, config2, token2) {
      var weekday = config2._locale.weekdaysParse(input, token2, config2._strict);
      if (weekday != null) {
        week.d = weekday;
      } else {
        getParsingFlags(config2).invalidWeekday = input;
      }
    });
    addWeekParseToken(["d", "e", "E"], function(input, week, config2, token2) {
      week[token2] = toInt(input);
    });
    function parseWeekday(input, locale2) {
      if (typeof input !== "string") {
        return input;
      }
      if (!isNaN(input)) {
        return parseInt(input, 10);
      }
      input = locale2.weekdaysParse(input);
      if (typeof input === "number") {
        return input;
      }
      return null;
    }
    function parseIsoWeekday(input, locale2) {
      if (typeof input === "string") {
        return locale2.weekdaysParse(input) % 7 || 7;
      }
      return isNaN(input) ? null : input;
    }
    function shiftWeekdays(ws, n2) {
      return ws.slice(n2, 7).concat(ws.slice(0, n2));
    }
    var defaultLocaleWeekdays = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), defaultLocaleWeekdaysShort = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), defaultLocaleWeekdaysMin = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), defaultWeekdaysRegex = matchWord, defaultWeekdaysShortRegex = matchWord, defaultWeekdaysMinRegex = matchWord;
    function localeWeekdays(m2, format2) {
      var weekdays = isArray(this._weekdays) ? this._weekdays : this._weekdays[m2 && m2 !== true && this._weekdays.isFormat.test(format2) ? "format" : "standalone"];
      return m2 === true ? shiftWeekdays(weekdays, this._week.dow) : m2 ? weekdays[m2.day()] : weekdays;
    }
    function localeWeekdaysShort(m2) {
      return m2 === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m2 ? this._weekdaysShort[m2.day()] : this._weekdaysShort;
    }
    function localeWeekdaysMin(m2) {
      return m2 === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m2 ? this._weekdaysMin[m2.day()] : this._weekdaysMin;
    }
    function handleStrictParse$1(weekdayName, format2, strict) {
      var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
      if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._minWeekdaysParse = [];
        for (i = 0; i < 7; ++i) {
          mom = createUTC([2e3, 1]).day(i);
          this._minWeekdaysParse[i] = this.weekdaysMin(
            mom,
            ""
          ).toLocaleLowerCase();
          this._shortWeekdaysParse[i] = this.weekdaysShort(
            mom,
            ""
          ).toLocaleLowerCase();
          this._weekdaysParse[i] = this.weekdays(mom, "").toLocaleLowerCase();
        }
      }
      if (strict) {
        if (format2 === "dddd") {
          ii = indexOf.call(this._weekdaysParse, llc);
          return ii !== -1 ? ii : null;
        } else if (format2 === "ddd") {
          ii = indexOf.call(this._shortWeekdaysParse, llc);
          return ii !== -1 ? ii : null;
        } else {
          ii = indexOf.call(this._minWeekdaysParse, llc);
          return ii !== -1 ? ii : null;
        }
      } else {
        if (format2 === "dddd") {
          ii = indexOf.call(this._weekdaysParse, llc);
          if (ii !== -1) {
            return ii;
          }
          ii = indexOf.call(this._shortWeekdaysParse, llc);
          if (ii !== -1) {
            return ii;
          }
          ii = indexOf.call(this._minWeekdaysParse, llc);
          return ii !== -1 ? ii : null;
        } else if (format2 === "ddd") {
          ii = indexOf.call(this._shortWeekdaysParse, llc);
          if (ii !== -1) {
            return ii;
          }
          ii = indexOf.call(this._weekdaysParse, llc);
          if (ii !== -1) {
            return ii;
          }
          ii = indexOf.call(this._minWeekdaysParse, llc);
          return ii !== -1 ? ii : null;
        } else {
          ii = indexOf.call(this._minWeekdaysParse, llc);
          if (ii !== -1) {
            return ii;
          }
          ii = indexOf.call(this._weekdaysParse, llc);
          if (ii !== -1) {
            return ii;
          }
          ii = indexOf.call(this._shortWeekdaysParse, llc);
          return ii !== -1 ? ii : null;
        }
      }
    }
    function localeWeekdaysParse(weekdayName, format2, strict) {
      var i, mom, regex;
      if (this._weekdaysParseExact) {
        return handleStrictParse$1.call(this, weekdayName, format2, strict);
      }
      if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._minWeekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._fullWeekdaysParse = [];
      }
      for (i = 0; i < 7; i++) {
        mom = createUTC([2e3, 1]).day(i);
        if (strict && !this._fullWeekdaysParse[i]) {
          this._fullWeekdaysParse[i] = new RegExp(
            "^" + this.weekdays(mom, "").replace(".", "\\.?") + "$",
            "i"
          );
          this._shortWeekdaysParse[i] = new RegExp(
            "^" + this.weekdaysShort(mom, "").replace(".", "\\.?") + "$",
            "i"
          );
          this._minWeekdaysParse[i] = new RegExp(
            "^" + this.weekdaysMin(mom, "").replace(".", "\\.?") + "$",
            "i"
          );
        }
        if (!this._weekdaysParse[i]) {
          regex = "^" + this.weekdays(mom, "") + "|^" + this.weekdaysShort(mom, "") + "|^" + this.weekdaysMin(mom, "");
          this._weekdaysParse[i] = new RegExp(regex.replace(".", ""), "i");
        }
        if (strict && format2 === "dddd" && this._fullWeekdaysParse[i].test(weekdayName)) {
          return i;
        } else if (strict && format2 === "ddd" && this._shortWeekdaysParse[i].test(weekdayName)) {
          return i;
        } else if (strict && format2 === "dd" && this._minWeekdaysParse[i].test(weekdayName)) {
          return i;
        } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
          return i;
        }
      }
    }
    function getSetDayOfWeek(input) {
      if (!this.isValid()) {
        return input != null ? this : NaN;
      }
      var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
      if (input != null) {
        input = parseWeekday(input, this.localeData());
        return this.add(input - day, "d");
      } else {
        return day;
      }
    }
    function getSetLocaleDayOfWeek(input) {
      if (!this.isValid()) {
        return input != null ? this : NaN;
      }
      var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
      return input == null ? weekday : this.add(input - weekday, "d");
    }
    function getSetISODayOfWeek(input) {
      if (!this.isValid()) {
        return input != null ? this : NaN;
      }
      if (input != null) {
        var weekday = parseIsoWeekday(input, this.localeData());
        return this.day(this.day() % 7 ? weekday : weekday - 7);
      } else {
        return this.day() || 7;
      }
    }
    function weekdaysRegex(isStrict) {
      if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, "_weekdaysRegex")) {
          computeWeekdaysParse.call(this);
        }
        if (isStrict) {
          return this._weekdaysStrictRegex;
        } else {
          return this._weekdaysRegex;
        }
      } else {
        if (!hasOwnProp(this, "_weekdaysRegex")) {
          this._weekdaysRegex = defaultWeekdaysRegex;
        }
        return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
      }
    }
    function weekdaysShortRegex(isStrict) {
      if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, "_weekdaysRegex")) {
          computeWeekdaysParse.call(this);
        }
        if (isStrict) {
          return this._weekdaysShortStrictRegex;
        } else {
          return this._weekdaysShortRegex;
        }
      } else {
        if (!hasOwnProp(this, "_weekdaysShortRegex")) {
          this._weekdaysShortRegex = defaultWeekdaysShortRegex;
        }
        return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
      }
    }
    function weekdaysMinRegex(isStrict) {
      if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, "_weekdaysRegex")) {
          computeWeekdaysParse.call(this);
        }
        if (isStrict) {
          return this._weekdaysMinStrictRegex;
        } else {
          return this._weekdaysMinRegex;
        }
      } else {
        if (!hasOwnProp(this, "_weekdaysMinRegex")) {
          this._weekdaysMinRegex = defaultWeekdaysMinRegex;
        }
        return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
      }
    }
    function computeWeekdaysParse() {
      function cmpLenRev(a, b2) {
        return b2.length - a.length;
      }
      var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [], i, mom, minp, shortp, longp;
      for (i = 0; i < 7; i++) {
        mom = createUTC([2e3, 1]).day(i);
        minp = regexEscape(this.weekdaysMin(mom, ""));
        shortp = regexEscape(this.weekdaysShort(mom, ""));
        longp = regexEscape(this.weekdays(mom, ""));
        minPieces.push(minp);
        shortPieces.push(shortp);
        longPieces.push(longp);
        mixedPieces.push(minp);
        mixedPieces.push(shortp);
        mixedPieces.push(longp);
      }
      minPieces.sort(cmpLenRev);
      shortPieces.sort(cmpLenRev);
      longPieces.sort(cmpLenRev);
      mixedPieces.sort(cmpLenRev);
      this._weekdaysRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
      this._weekdaysShortRegex = this._weekdaysRegex;
      this._weekdaysMinRegex = this._weekdaysRegex;
      this._weekdaysStrictRegex = new RegExp(
        "^(" + longPieces.join("|") + ")",
        "i"
      );
      this._weekdaysShortStrictRegex = new RegExp(
        "^(" + shortPieces.join("|") + ")",
        "i"
      );
      this._weekdaysMinStrictRegex = new RegExp(
        "^(" + minPieces.join("|") + ")",
        "i"
      );
    }
    function hFormat() {
      return this.hours() % 12 || 12;
    }
    function kFormat() {
      return this.hours() || 24;
    }
    addFormatToken("H", ["HH", 2], 0, "hour");
    addFormatToken("h", ["hh", 2], 0, hFormat);
    addFormatToken("k", ["kk", 2], 0, kFormat);
    addFormatToken("hmm", 0, 0, function() {
      return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });
    addFormatToken("hmmss", 0, 0, function() {
      return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
    });
    addFormatToken("Hmm", 0, 0, function() {
      return "" + this.hours() + zeroFill(this.minutes(), 2);
    });
    addFormatToken("Hmmss", 0, 0, function() {
      return "" + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
    });
    function meridiem(token2, lowercase) {
      addFormatToken(token2, 0, 0, function() {
        return this.localeData().meridiem(
          this.hours(),
          this.minutes(),
          lowercase
        );
      });
    }
    meridiem("a", true);
    meridiem("A", false);
    addUnitAlias("hour", "h");
    addUnitPriority("hour", 13);
    function matchMeridiem(isStrict, locale2) {
      return locale2._meridiemParse;
    }
    addRegexToken("a", matchMeridiem);
    addRegexToken("A", matchMeridiem);
    addRegexToken("H", match1to2);
    addRegexToken("h", match1to2);
    addRegexToken("k", match1to2);
    addRegexToken("HH", match1to2, match2);
    addRegexToken("hh", match1to2, match2);
    addRegexToken("kk", match1to2, match2);
    addRegexToken("hmm", match3to4);
    addRegexToken("hmmss", match5to6);
    addRegexToken("Hmm", match3to4);
    addRegexToken("Hmmss", match5to6);
    addParseToken(["H", "HH"], HOUR);
    addParseToken(["k", "kk"], function(input, array, config2) {
      var kInput = toInt(input);
      array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken(["a", "A"], function(input, array, config2) {
      config2._isPm = config2._locale.isPM(input);
      config2._meridiem = input;
    });
    addParseToken(["h", "hh"], function(input, array, config2) {
      array[HOUR] = toInt(input);
      getParsingFlags(config2).bigHour = true;
    });
    addParseToken("hmm", function(input, array, config2) {
      var pos = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos));
      array[MINUTE] = toInt(input.substr(pos));
      getParsingFlags(config2).bigHour = true;
    });
    addParseToken("hmmss", function(input, array, config2) {
      var pos1 = input.length - 4, pos2 = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos1));
      array[MINUTE] = toInt(input.substr(pos1, 2));
      array[SECOND] = toInt(input.substr(pos2));
      getParsingFlags(config2).bigHour = true;
    });
    addParseToken("Hmm", function(input, array, config2) {
      var pos = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos));
      array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken("Hmmss", function(input, array, config2) {
      var pos1 = input.length - 4, pos2 = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos1));
      array[MINUTE] = toInt(input.substr(pos1, 2));
      array[SECOND] = toInt(input.substr(pos2));
    });
    function localeIsPM(input) {
      return (input + "").toLowerCase().charAt(0) === "p";
    }
    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i, getSetHour = makeGetSet("Hours", true);
    function localeMeridiem(hours2, minutes2, isLower) {
      if (hours2 > 11) {
        return isLower ? "pm" : "PM";
      } else {
        return isLower ? "am" : "AM";
      }
    }
    var baseConfig = {
      calendar: defaultCalendar,
      longDateFormat: defaultLongDateFormat,
      invalidDate: defaultInvalidDate,
      ordinal: defaultOrdinal,
      dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
      relativeTime: defaultRelativeTime,
      months: defaultLocaleMonths,
      monthsShort: defaultLocaleMonthsShort,
      week: defaultLocaleWeek,
      weekdays: defaultLocaleWeekdays,
      weekdaysMin: defaultLocaleWeekdaysMin,
      weekdaysShort: defaultLocaleWeekdaysShort,
      meridiemParse: defaultLocaleMeridiemParse
    };
    var locales = {}, localeFamilies = {}, globalLocale;
    function commonPrefix(arr1, arr2) {
      var i, minl = Math.min(arr1.length, arr2.length);
      for (i = 0; i < minl; i += 1) {
        if (arr1[i] !== arr2[i]) {
          return i;
        }
      }
      return minl;
    }
    function normalizeLocale(key2) {
      return key2 ? key2.toLowerCase().replace("_", "-") : key2;
    }
    function chooseLocale(names) {
      var i = 0, j, next, locale2, split;
      while (i < names.length) {
        split = normalizeLocale(names[i]).split("-");
        j = split.length;
        next = normalizeLocale(names[i + 1]);
        next = next ? next.split("-") : null;
        while (j > 0) {
          locale2 = loadLocale(split.slice(0, j).join("-"));
          if (locale2) {
            return locale2;
          }
          if (next && next.length >= j && commonPrefix(split, next) >= j - 1) {
            break;
          }
          j--;
        }
        i++;
      }
      return globalLocale;
    }
    function isLocaleNameSane(name) {
      return name.match("^[^/\\\\]*$") != null;
    }
    function loadLocale(name) {
      var oldLocale = null, aliasedRequire;
      if (locales[name] === void 0 && typeof module !== "undefined" && module && module.exports && isLocaleNameSane(name)) {
        try {
          oldLocale = globalLocale._abbr;
          aliasedRequire = require;
          aliasedRequire("./locale/" + name);
          getSetGlobalLocale(oldLocale);
        } catch (e2) {
          locales[name] = null;
        }
      }
      return locales[name];
    }
    function getSetGlobalLocale(key2, values) {
      var data;
      if (key2) {
        if (isUndefined(values)) {
          data = getLocale(key2);
        } else {
          data = defineLocale(key2, values);
        }
        if (data) {
          globalLocale = data;
        } else {
          if (typeof console !== "undefined" && console.warn) {
            console.warn(
              "Locale " + key2 + " not found. Did you forget to load it?"
            );
          }
        }
      }
      return globalLocale._abbr;
    }
    function defineLocale(name, config2) {
      if (config2 !== null) {
        var locale2, parentConfig = baseConfig;
        config2.abbr = name;
        if (locales[name] != null) {
          deprecateSimple(
            "defineLocaleOverride",
            "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
          );
          parentConfig = locales[name]._config;
        } else if (config2.parentLocale != null) {
          if (locales[config2.parentLocale] != null) {
            parentConfig = locales[config2.parentLocale]._config;
          } else {
            locale2 = loadLocale(config2.parentLocale);
            if (locale2 != null) {
              parentConfig = locale2._config;
            } else {
              if (!localeFamilies[config2.parentLocale]) {
                localeFamilies[config2.parentLocale] = [];
              }
              localeFamilies[config2.parentLocale].push({
                name,
                config: config2
              });
              return null;
            }
          }
        }
        locales[name] = new Locale(mergeConfigs(parentConfig, config2));
        if (localeFamilies[name]) {
          localeFamilies[name].forEach(function(x) {
            defineLocale(x.name, x.config);
          });
        }
        getSetGlobalLocale(name);
        return locales[name];
      } else {
        delete locales[name];
        return null;
      }
    }
    function updateLocale(name, config2) {
      if (config2 != null) {
        var locale2, tmpLocale, parentConfig = baseConfig;
        if (locales[name] != null && locales[name].parentLocale != null) {
          locales[name].set(mergeConfigs(locales[name]._config, config2));
        } else {
          tmpLocale = loadLocale(name);
          if (tmpLocale != null) {
            parentConfig = tmpLocale._config;
          }
          config2 = mergeConfigs(parentConfig, config2);
          if (tmpLocale == null) {
            config2.abbr = name;
          }
          locale2 = new Locale(config2);
          locale2.parentLocale = locales[name];
          locales[name] = locale2;
        }
        getSetGlobalLocale(name);
      } else {
        if (locales[name] != null) {
          if (locales[name].parentLocale != null) {
            locales[name] = locales[name].parentLocale;
            if (name === getSetGlobalLocale()) {
              getSetGlobalLocale(name);
            }
          } else if (locales[name] != null) {
            delete locales[name];
          }
        }
      }
      return locales[name];
    }
    function getLocale(key2) {
      var locale2;
      if (key2 && key2._locale && key2._locale._abbr) {
        key2 = key2._locale._abbr;
      }
      if (!key2) {
        return globalLocale;
      }
      if (!isArray(key2)) {
        locale2 = loadLocale(key2);
        if (locale2) {
          return locale2;
        }
        key2 = [key2];
      }
      return chooseLocale(key2);
    }
    function listLocales() {
      return keys(locales);
    }
    function checkOverflow(m2) {
      var overflow, a = m2._a;
      if (a && getParsingFlags(m2).overflow === -2) {
        overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;
        if (getParsingFlags(m2)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
          overflow = DATE;
        }
        if (getParsingFlags(m2)._overflowWeeks && overflow === -1) {
          overflow = WEEK;
        }
        if (getParsingFlags(m2)._overflowWeekday && overflow === -1) {
          overflow = WEEKDAY;
        }
        getParsingFlags(m2).overflow = overflow;
      }
      return m2;
    }
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, tzRegex = /Z|[+-]\d\d(?::?\d\d)?/, isoDates = [
      ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
      ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
      ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
      ["GGGG-[W]WW", /\d{4}-W\d\d/, false],
      ["YYYY-DDD", /\d{4}-\d{3}/],
      ["YYYY-MM", /\d{4}-\d\d/, false],
      ["YYYYYYMMDD", /[+-]\d{10}/],
      ["YYYYMMDD", /\d{8}/],
      ["GGGG[W]WWE", /\d{4}W\d{3}/],
      ["GGGG[W]WW", /\d{4}W\d{2}/, false],
      ["YYYYDDD", /\d{7}/],
      ["YYYYMM", /\d{6}/, false],
      ["YYYY", /\d{4}/, false]
    ], isoTimes = [
      ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
      ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
      ["HH:mm:ss", /\d\d:\d\d:\d\d/],
      ["HH:mm", /\d\d:\d\d/],
      ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
      ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
      ["HHmmss", /\d\d\d\d\d\d/],
      ["HHmm", /\d\d\d\d/],
      ["HH", /\d\d/]
    ], aspNetJsonRegex = /^\/?Date\((-?\d+)/i, rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, obsOffsets = {
      UT: 0,
      GMT: 0,
      EDT: -4 * 60,
      EST: -5 * 60,
      CDT: -5 * 60,
      CST: -6 * 60,
      MDT: -6 * 60,
      MST: -7 * 60,
      PDT: -7 * 60,
      PST: -8 * 60
    };
    function configFromISO(config2) {
      var i, l2, string = config2._i, match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string), allowTime, dateFormat, timeFormat, tzFormat, isoDatesLen = isoDates.length, isoTimesLen = isoTimes.length;
      if (match) {
        getParsingFlags(config2).iso = true;
        for (i = 0, l2 = isoDatesLen; i < l2; i++) {
          if (isoDates[i][1].exec(match[1])) {
            dateFormat = isoDates[i][0];
            allowTime = isoDates[i][2] !== false;
            break;
          }
        }
        if (dateFormat == null) {
          config2._isValid = false;
          return;
        }
        if (match[3]) {
          for (i = 0, l2 = isoTimesLen; i < l2; i++) {
            if (isoTimes[i][1].exec(match[3])) {
              timeFormat = (match[2] || " ") + isoTimes[i][0];
              break;
            }
          }
          if (timeFormat == null) {
            config2._isValid = false;
            return;
          }
        }
        if (!allowTime && timeFormat != null) {
          config2._isValid = false;
          return;
        }
        if (match[4]) {
          if (tzRegex.exec(match[4])) {
            tzFormat = "Z";
          } else {
            config2._isValid = false;
            return;
          }
        }
        config2._f = dateFormat + (timeFormat || "") + (tzFormat || "");
        configFromStringAndFormat(config2);
      } else {
        config2._isValid = false;
      }
    }
    function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
      var result = [
        untruncateYear(yearStr),
        defaultLocaleMonthsShort.indexOf(monthStr),
        parseInt(dayStr, 10),
        parseInt(hourStr, 10),
        parseInt(minuteStr, 10)
      ];
      if (secondStr) {
        result.push(parseInt(secondStr, 10));
      }
      return result;
    }
    function untruncateYear(yearStr) {
      var year = parseInt(yearStr, 10);
      if (year <= 49) {
        return 2e3 + year;
      } else if (year <= 999) {
        return 1900 + year;
      }
      return year;
    }
    function preprocessRFC2822(s) {
      return s.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
    }
    function checkWeekday(weekdayStr, parsedInput, config2) {
      if (weekdayStr) {
        var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr), weekdayActual = new Date(
          parsedInput[0],
          parsedInput[1],
          parsedInput[2]
        ).getDay();
        if (weekdayProvided !== weekdayActual) {
          getParsingFlags(config2).weekdayMismatch = true;
          config2._isValid = false;
          return false;
        }
      }
      return true;
    }
    function calculateOffset(obsOffset, militaryOffset, numOffset) {
      if (obsOffset) {
        return obsOffsets[obsOffset];
      } else if (militaryOffset) {
        return 0;
      } else {
        var hm = parseInt(numOffset, 10), m2 = hm % 100, h2 = (hm - m2) / 100;
        return h2 * 60 + m2;
      }
    }
    function configFromRFC2822(config2) {
      var match = rfc2822.exec(preprocessRFC2822(config2._i)), parsedArray;
      if (match) {
        parsedArray = extractFromRFC2822Strings(
          match[4],
          match[3],
          match[2],
          match[5],
          match[6],
          match[7]
        );
        if (!checkWeekday(match[1], parsedArray, config2)) {
          return;
        }
        config2._a = parsedArray;
        config2._tzm = calculateOffset(match[8], match[9], match[10]);
        config2._d = createUTCDate.apply(null, config2._a);
        config2._d.setUTCMinutes(config2._d.getUTCMinutes() - config2._tzm);
        getParsingFlags(config2).rfc2822 = true;
      } else {
        config2._isValid = false;
      }
    }
    function configFromString(config2) {
      var matched = aspNetJsonRegex.exec(config2._i);
      if (matched !== null) {
        config2._d = /* @__PURE__ */ new Date(+matched[1]);
        return;
      }
      configFromISO(config2);
      if (config2._isValid === false) {
        delete config2._isValid;
      } else {
        return;
      }
      configFromRFC2822(config2);
      if (config2._isValid === false) {
        delete config2._isValid;
      } else {
        return;
      }
      if (config2._strict) {
        config2._isValid = false;
      } else {
        hooks.createFromInputFallback(config2);
      }
    }
    hooks.createFromInputFallback = deprecate(
      "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
      function(config2) {
        config2._d = /* @__PURE__ */ new Date(config2._i + (config2._useUTC ? " UTC" : ""));
      }
    );
    function defaults(a, b2, c2) {
      if (a != null) {
        return a;
      }
      if (b2 != null) {
        return b2;
      }
      return c2;
    }
    function currentDateArray(config2) {
      var nowValue = new Date(hooks.now());
      if (config2._useUTC) {
        return [
          nowValue.getUTCFullYear(),
          nowValue.getUTCMonth(),
          nowValue.getUTCDate()
        ];
      }
      return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }
    function configFromArray(config2) {
      var i, date, input = [], currentDate, expectedWeekday, yearToUse;
      if (config2._d) {
        return;
      }
      currentDate = currentDateArray(config2);
      if (config2._w && config2._a[DATE] == null && config2._a[MONTH] == null) {
        dayOfYearFromWeekInfo(config2);
      }
      if (config2._dayOfYear != null) {
        yearToUse = defaults(config2._a[YEAR], currentDate[YEAR]);
        if (config2._dayOfYear > daysInYear(yearToUse) || config2._dayOfYear === 0) {
          getParsingFlags(config2)._overflowDayOfYear = true;
        }
        date = createUTCDate(yearToUse, 0, config2._dayOfYear);
        config2._a[MONTH] = date.getUTCMonth();
        config2._a[DATE] = date.getUTCDate();
      }
      for (i = 0; i < 3 && config2._a[i] == null; ++i) {
        config2._a[i] = input[i] = currentDate[i];
      }
      for (; i < 7; i++) {
        config2._a[i] = input[i] = config2._a[i] == null ? i === 2 ? 1 : 0 : config2._a[i];
      }
      if (config2._a[HOUR] === 24 && config2._a[MINUTE] === 0 && config2._a[SECOND] === 0 && config2._a[MILLISECOND] === 0) {
        config2._nextDay = true;
        config2._a[HOUR] = 0;
      }
      config2._d = (config2._useUTC ? createUTCDate : createDate).apply(
        null,
        input
      );
      expectedWeekday = config2._useUTC ? config2._d.getUTCDay() : config2._d.getDay();
      if (config2._tzm != null) {
        config2._d.setUTCMinutes(config2._d.getUTCMinutes() - config2._tzm);
      }
      if (config2._nextDay) {
        config2._a[HOUR] = 24;
      }
      if (config2._w && typeof config2._w.d !== "undefined" && config2._w.d !== expectedWeekday) {
        getParsingFlags(config2).weekdayMismatch = true;
      }
    }
    function dayOfYearFromWeekInfo(config2) {
      var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;
      w = config2._w;
      if (w.GG != null || w.W != null || w.E != null) {
        dow = 1;
        doy = 4;
        weekYear = defaults(
          w.GG,
          config2._a[YEAR],
          weekOfYear(createLocal(), 1, 4).year
        );
        week = defaults(w.W, 1);
        weekday = defaults(w.E, 1);
        if (weekday < 1 || weekday > 7) {
          weekdayOverflow = true;
        }
      } else {
        dow = config2._locale._week.dow;
        doy = config2._locale._week.doy;
        curWeek = weekOfYear(createLocal(), dow, doy);
        weekYear = defaults(w.gg, config2._a[YEAR], curWeek.year);
        week = defaults(w.w, curWeek.week);
        if (w.d != null) {
          weekday = w.d;
          if (weekday < 0 || weekday > 6) {
            weekdayOverflow = true;
          }
        } else if (w.e != null) {
          weekday = w.e + dow;
          if (w.e < 0 || w.e > 6) {
            weekdayOverflow = true;
          }
        } else {
          weekday = dow;
        }
      }
      if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
        getParsingFlags(config2)._overflowWeeks = true;
      } else if (weekdayOverflow != null) {
        getParsingFlags(config2)._overflowWeekday = true;
      } else {
        temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
        config2._a[YEAR] = temp.year;
        config2._dayOfYear = temp.dayOfYear;
      }
    }
    hooks.ISO_8601 = function() {
    };
    hooks.RFC_2822 = function() {
    };
    function configFromStringAndFormat(config2) {
      if (config2._f === hooks.ISO_8601) {
        configFromISO(config2);
        return;
      }
      if (config2._f === hooks.RFC_2822) {
        configFromRFC2822(config2);
        return;
      }
      config2._a = [];
      getParsingFlags(config2).empty = true;
      var string = "" + config2._i, i, parsedInput, tokens2, token2, skipped, stringLength = string.length, totalParsedInputLength = 0, era, tokenLen;
      tokens2 = expandFormat(config2._f, config2._locale).match(formattingTokens) || [];
      tokenLen = tokens2.length;
      for (i = 0; i < tokenLen; i++) {
        token2 = tokens2[i];
        parsedInput = (string.match(getParseRegexForToken(token2, config2)) || [])[0];
        if (parsedInput) {
          skipped = string.substr(0, string.indexOf(parsedInput));
          if (skipped.length > 0) {
            getParsingFlags(config2).unusedInput.push(skipped);
          }
          string = string.slice(
            string.indexOf(parsedInput) + parsedInput.length
          );
          totalParsedInputLength += parsedInput.length;
        }
        if (formatTokenFunctions[token2]) {
          if (parsedInput) {
            getParsingFlags(config2).empty = false;
          } else {
            getParsingFlags(config2).unusedTokens.push(token2);
          }
          addTimeToArrayFromToken(token2, parsedInput, config2);
        } else if (config2._strict && !parsedInput) {
          getParsingFlags(config2).unusedTokens.push(token2);
        }
      }
      getParsingFlags(config2).charsLeftOver = stringLength - totalParsedInputLength;
      if (string.length > 0) {
        getParsingFlags(config2).unusedInput.push(string);
      }
      if (config2._a[HOUR] <= 12 && getParsingFlags(config2).bigHour === true && config2._a[HOUR] > 0) {
        getParsingFlags(config2).bigHour = void 0;
      }
      getParsingFlags(config2).parsedDateParts = config2._a.slice(0);
      getParsingFlags(config2).meridiem = config2._meridiem;
      config2._a[HOUR] = meridiemFixWrap(
        config2._locale,
        config2._a[HOUR],
        config2._meridiem
      );
      era = getParsingFlags(config2).era;
      if (era !== null) {
        config2._a[YEAR] = config2._locale.erasConvertYear(era, config2._a[YEAR]);
      }
      configFromArray(config2);
      checkOverflow(config2);
    }
    function meridiemFixWrap(locale2, hour, meridiem2) {
      var isPm;
      if (meridiem2 == null) {
        return hour;
      }
      if (locale2.meridiemHour != null) {
        return locale2.meridiemHour(hour, meridiem2);
      } else if (locale2.isPM != null) {
        isPm = locale2.isPM(meridiem2);
        if (isPm && hour < 12) {
          hour += 12;
        }
        if (!isPm && hour === 12) {
          hour = 0;
        }
        return hour;
      } else {
        return hour;
      }
    }
    function configFromStringAndArray(config2) {
      var tempConfig, bestMoment, scoreToBeat, i, currentScore, validFormatFound, bestFormatIsValid = false, configfLen = config2._f.length;
      if (configfLen === 0) {
        getParsingFlags(config2).invalidFormat = true;
        config2._d = /* @__PURE__ */ new Date(NaN);
        return;
      }
      for (i = 0; i < configfLen; i++) {
        currentScore = 0;
        validFormatFound = false;
        tempConfig = copyConfig({}, config2);
        if (config2._useUTC != null) {
          tempConfig._useUTC = config2._useUTC;
        }
        tempConfig._f = config2._f[i];
        configFromStringAndFormat(tempConfig);
        if (isValid(tempConfig)) {
          validFormatFound = true;
        }
        currentScore += getParsingFlags(tempConfig).charsLeftOver;
        currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
        getParsingFlags(tempConfig).score = currentScore;
        if (!bestFormatIsValid) {
          if (scoreToBeat == null || currentScore < scoreToBeat || validFormatFound) {
            scoreToBeat = currentScore;
            bestMoment = tempConfig;
            if (validFormatFound) {
              bestFormatIsValid = true;
            }
          }
        } else {
          if (currentScore < scoreToBeat) {
            scoreToBeat = currentScore;
            bestMoment = tempConfig;
          }
        }
      }
      extend(config2, bestMoment || tempConfig);
    }
    function configFromObject(config2) {
      if (config2._d) {
        return;
      }
      var i = normalizeObjectUnits(config2._i), dayOrDate = i.day === void 0 ? i.date : i.day;
      config2._a = map(
        [i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond],
        function(obj) {
          return obj && parseInt(obj, 10);
        }
      );
      configFromArray(config2);
    }
    function createFromConfig(config2) {
      var res = new Moment(checkOverflow(prepareConfig(config2)));
      if (res._nextDay) {
        res.add(1, "d");
        res._nextDay = void 0;
      }
      return res;
    }
    function prepareConfig(config2) {
      var input = config2._i, format2 = config2._f;
      config2._locale = config2._locale || getLocale(config2._l);
      if (input === null || format2 === void 0 && input === "") {
        return createInvalid({ nullInput: true });
      }
      if (typeof input === "string") {
        config2._i = input = config2._locale.preparse(input);
      }
      if (isMoment(input)) {
        return new Moment(checkOverflow(input));
      } else if (isDate(input)) {
        config2._d = input;
      } else if (isArray(format2)) {
        configFromStringAndArray(config2);
      } else if (format2) {
        configFromStringAndFormat(config2);
      } else {
        configFromInput(config2);
      }
      if (!isValid(config2)) {
        config2._d = null;
      }
      return config2;
    }
    function configFromInput(config2) {
      var input = config2._i;
      if (isUndefined(input)) {
        config2._d = new Date(hooks.now());
      } else if (isDate(input)) {
        config2._d = new Date(input.valueOf());
      } else if (typeof input === "string") {
        configFromString(config2);
      } else if (isArray(input)) {
        config2._a = map(input.slice(0), function(obj) {
          return parseInt(obj, 10);
        });
        configFromArray(config2);
      } else if (isObject(input)) {
        configFromObject(config2);
      } else if (isNumber(input)) {
        config2._d = new Date(input);
      } else {
        hooks.createFromInputFallback(config2);
      }
    }
    function createLocalOrUTC(input, format2, locale2, strict, isUTC) {
      var c2 = {};
      if (format2 === true || format2 === false) {
        strict = format2;
        format2 = void 0;
      }
      if (locale2 === true || locale2 === false) {
        strict = locale2;
        locale2 = void 0;
      }
      if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) {
        input = void 0;
      }
      c2._isAMomentObject = true;
      c2._useUTC = c2._isUTC = isUTC;
      c2._l = locale2;
      c2._i = input;
      c2._f = format2;
      c2._strict = strict;
      return createFromConfig(c2);
    }
    function createLocal(input, format2, locale2, strict) {
      return createLocalOrUTC(input, format2, locale2, strict, false);
    }
    var prototypeMin = deprecate(
      "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
      function() {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
          return other < this ? this : other;
        } else {
          return createInvalid();
        }
      }
    ), prototypeMax = deprecate(
      "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
      function() {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
          return other > this ? this : other;
        } else {
          return createInvalid();
        }
      }
    );
    function pickBy(fn, moments) {
      var res, i;
      if (moments.length === 1 && isArray(moments[0])) {
        moments = moments[0];
      }
      if (!moments.length) {
        return createLocal();
      }
      res = moments[0];
      for (i = 1; i < moments.length; ++i) {
        if (!moments[i].isValid() || moments[i][fn](res)) {
          res = moments[i];
        }
      }
      return res;
    }
    function min() {
      var args = [].slice.call(arguments, 0);
      return pickBy("isBefore", args);
    }
    function max() {
      var args = [].slice.call(arguments, 0);
      return pickBy("isAfter", args);
    }
    var now$1 = function() {
      return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
    };
    var ordering = [
      "year",
      "quarter",
      "month",
      "week",
      "day",
      "hour",
      "minute",
      "second",
      "millisecond"
    ];
    function isDurationValid(m2) {
      var key2, unitHasDecimal = false, i, orderLen = ordering.length;
      for (key2 in m2) {
        if (hasOwnProp(m2, key2) && !(indexOf.call(ordering, key2) !== -1 && (m2[key2] == null || !isNaN(m2[key2])))) {
          return false;
        }
      }
      for (i = 0; i < orderLen; ++i) {
        if (m2[ordering[i]]) {
          if (unitHasDecimal) {
            return false;
          }
          if (parseFloat(m2[ordering[i]]) !== toInt(m2[ordering[i]])) {
            unitHasDecimal = true;
          }
        }
      }
      return true;
    }
    function isValid$1() {
      return this._isValid;
    }
    function createInvalid$1() {
      return createDuration(NaN);
    }
    function Duration(duration2) {
      var normalizedInput = normalizeObjectUnits(duration2), years2 = normalizedInput.year || 0, quarters = normalizedInput.quarter || 0, months2 = normalizedInput.month || 0, weeks2 = normalizedInput.week || normalizedInput.isoWeek || 0, days2 = normalizedInput.day || 0, hours2 = normalizedInput.hour || 0, minutes2 = normalizedInput.minute || 0, seconds2 = normalizedInput.second || 0, milliseconds2 = normalizedInput.millisecond || 0;
      this._isValid = isDurationValid(normalizedInput);
      this._milliseconds = +milliseconds2 + seconds2 * 1e3 + // 1000
      minutes2 * 6e4 + // 1000 * 60
      hours2 * 1e3 * 60 * 60;
      this._days = +days2 + weeks2 * 7;
      this._months = +months2 + quarters * 3 + years2 * 12;
      this._data = {};
      this._locale = getLocale();
      this._bubble();
    }
    function isDuration(obj) {
      return obj instanceof Duration;
    }
    function absRound(number) {
      if (number < 0) {
        return Math.round(-1 * number) * -1;
      } else {
        return Math.round(number);
      }
    }
    function compareArrays(array1, array2, dontConvert) {
      var len = Math.min(array1.length, array2.length), lengthDiff = Math.abs(array1.length - array2.length), diffs = 0, i;
      for (i = 0; i < len; i++) {
        if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
          diffs++;
        }
      }
      return diffs + lengthDiff;
    }
    function offset(token2, separator) {
      addFormatToken(token2, 0, 0, function() {
        var offset2 = this.utcOffset(), sign2 = "+";
        if (offset2 < 0) {
          offset2 = -offset2;
          sign2 = "-";
        }
        return sign2 + zeroFill(~~(offset2 / 60), 2) + separator + zeroFill(~~offset2 % 60, 2);
      });
    }
    offset("Z", ":");
    offset("ZZ", "");
    addRegexToken("Z", matchShortOffset);
    addRegexToken("ZZ", matchShortOffset);
    addParseToken(["Z", "ZZ"], function(input, array, config2) {
      config2._useUTC = true;
      config2._tzm = offsetFromString(matchShortOffset, input);
    });
    var chunkOffset = /([\+\-]|\d\d)/gi;
    function offsetFromString(matcher, string) {
      var matches = (string || "").match(matcher), chunk, parts, minutes2;
      if (matches === null) {
        return null;
      }
      chunk = matches[matches.length - 1] || [];
      parts = (chunk + "").match(chunkOffset) || ["-", 0, 0];
      minutes2 = +(parts[1] * 60) + toInt(parts[2]);
      return minutes2 === 0 ? 0 : parts[0] === "+" ? minutes2 : -minutes2;
    }
    function cloneWithOffset(input, model) {
      var res, diff2;
      if (model._isUTC) {
        res = model.clone();
        diff2 = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
        res._d.setTime(res._d.valueOf() + diff2);
        hooks.updateOffset(res, false);
        return res;
      } else {
        return createLocal(input).local();
      }
    }
    function getDateOffset(m2) {
      return -Math.round(m2._d.getTimezoneOffset());
    }
    hooks.updateOffset = function() {
    };
    function getSetOffset(input, keepLocalTime, keepMinutes) {
      var offset2 = this._offset || 0, localAdjust;
      if (!this.isValid()) {
        return input != null ? this : NaN;
      }
      if (input != null) {
        if (typeof input === "string") {
          input = offsetFromString(matchShortOffset, input);
          if (input === null) {
            return this;
          }
        } else if (Math.abs(input) < 16 && !keepMinutes) {
          input = input * 60;
        }
        if (!this._isUTC && keepLocalTime) {
          localAdjust = getDateOffset(this);
        }
        this._offset = input;
        this._isUTC = true;
        if (localAdjust != null) {
          this.add(localAdjust, "m");
        }
        if (offset2 !== input) {
          if (!keepLocalTime || this._changeInProgress) {
            addSubtract(
              this,
              createDuration(input - offset2, "m"),
              1,
              false
            );
          } else if (!this._changeInProgress) {
            this._changeInProgress = true;
            hooks.updateOffset(this, true);
            this._changeInProgress = null;
          }
        }
        return this;
      } else {
        return this._isUTC ? offset2 : getDateOffset(this);
      }
    }
    function getSetZone(input, keepLocalTime) {
      if (input != null) {
        if (typeof input !== "string") {
          input = -input;
        }
        this.utcOffset(input, keepLocalTime);
        return this;
      } else {
        return -this.utcOffset();
      }
    }
    function setOffsetToUTC(keepLocalTime) {
      return this.utcOffset(0, keepLocalTime);
    }
    function setOffsetToLocal(keepLocalTime) {
      if (this._isUTC) {
        this.utcOffset(0, keepLocalTime);
        this._isUTC = false;
        if (keepLocalTime) {
          this.subtract(getDateOffset(this), "m");
        }
      }
      return this;
    }
    function setOffsetToParsedOffset() {
      if (this._tzm != null) {
        this.utcOffset(this._tzm, false, true);
      } else if (typeof this._i === "string") {
        var tZone = offsetFromString(matchOffset, this._i);
        if (tZone != null) {
          this.utcOffset(tZone);
        } else {
          this.utcOffset(0, true);
        }
      }
      return this;
    }
    function hasAlignedHourOffset(input) {
      if (!this.isValid()) {
        return false;
      }
      input = input ? createLocal(input).utcOffset() : 0;
      return (this.utcOffset() - input) % 60 === 0;
    }
    function isDaylightSavingTime() {
      return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
    }
    function isDaylightSavingTimeShifted() {
      if (!isUndefined(this._isDSTShifted)) {
        return this._isDSTShifted;
      }
      var c2 = {}, other;
      copyConfig(c2, this);
      c2 = prepareConfig(c2);
      if (c2._a) {
        other = c2._isUTC ? createUTC(c2._a) : createLocal(c2._a);
        this._isDSTShifted = this.isValid() && compareArrays(c2._a, other.toArray()) > 0;
      } else {
        this._isDSTShifted = false;
      }
      return this._isDSTShifted;
    }
    function isLocal() {
      return this.isValid() ? !this._isUTC : false;
    }
    function isUtcOffset() {
      return this.isValid() ? this._isUTC : false;
    }
    function isUtc() {
      return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }
    var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    function createDuration(input, key2) {
      var duration2 = input, match = null, sign2, ret, diffRes;
      if (isDuration(input)) {
        duration2 = {
          ms: input._milliseconds,
          d: input._days,
          M: input._months
        };
      } else if (isNumber(input) || !isNaN(+input)) {
        duration2 = {};
        if (key2) {
          duration2[key2] = +input;
        } else {
          duration2.milliseconds = +input;
        }
      } else if (match = aspNetRegex.exec(input)) {
        sign2 = match[1] === "-" ? -1 : 1;
        duration2 = {
          y: 0,
          d: toInt(match[DATE]) * sign2,
          h: toInt(match[HOUR]) * sign2,
          m: toInt(match[MINUTE]) * sign2,
          s: toInt(match[SECOND]) * sign2,
          ms: toInt(absRound(match[MILLISECOND] * 1e3)) * sign2
          // the millisecond decimal point is included in the match
        };
      } else if (match = isoRegex.exec(input)) {
        sign2 = match[1] === "-" ? -1 : 1;
        duration2 = {
          y: parseIso(match[2], sign2),
          M: parseIso(match[3], sign2),
          w: parseIso(match[4], sign2),
          d: parseIso(match[5], sign2),
          h: parseIso(match[6], sign2),
          m: parseIso(match[7], sign2),
          s: parseIso(match[8], sign2)
        };
      } else if (duration2 == null) {
        duration2 = {};
      } else if (typeof duration2 === "object" && ("from" in duration2 || "to" in duration2)) {
        diffRes = momentsDifference(
          createLocal(duration2.from),
          createLocal(duration2.to)
        );
        duration2 = {};
        duration2.ms = diffRes.milliseconds;
        duration2.M = diffRes.months;
      }
      ret = new Duration(duration2);
      if (isDuration(input) && hasOwnProp(input, "_locale")) {
        ret._locale = input._locale;
      }
      if (isDuration(input) && hasOwnProp(input, "_isValid")) {
        ret._isValid = input._isValid;
      }
      return ret;
    }
    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;
    function parseIso(inp, sign2) {
      var res = inp && parseFloat(inp.replace(",", "."));
      return (isNaN(res) ? 0 : res) * sign2;
    }
    function positiveMomentsDifference(base, other) {
      var res = {};
      res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
      if (base.clone().add(res.months, "M").isAfter(other)) {
        --res.months;
      }
      res.milliseconds = +other - +base.clone().add(res.months, "M");
      return res;
    }
    function momentsDifference(base, other) {
      var res;
      if (!(base.isValid() && other.isValid())) {
        return { milliseconds: 0, months: 0 };
      }
      other = cloneWithOffset(other, base);
      if (base.isBefore(other)) {
        res = positiveMomentsDifference(base, other);
      } else {
        res = positiveMomentsDifference(other, base);
        res.milliseconds = -res.milliseconds;
        res.months = -res.months;
      }
      return res;
    }
    function createAdder(direction, name) {
      return function(val, period) {
        var dur, tmp;
        if (period !== null && !isNaN(+period)) {
          deprecateSimple(
            name,
            "moment()." + name + "(period, number) is deprecated. Please use moment()." + name + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
          );
          tmp = val;
          val = period;
          period = tmp;
        }
        dur = createDuration(val, period);
        addSubtract(this, dur, direction);
        return this;
      };
    }
    function addSubtract(mom, duration2, isAdding, updateOffset) {
      var milliseconds2 = duration2._milliseconds, days2 = absRound(duration2._days), months2 = absRound(duration2._months);
      if (!mom.isValid()) {
        return;
      }
      updateOffset = updateOffset == null ? true : updateOffset;
      if (months2) {
        setMonth(mom, get(mom, "Month") + months2 * isAdding);
      }
      if (days2) {
        set$1(mom, "Date", get(mom, "Date") + days2 * isAdding);
      }
      if (milliseconds2) {
        mom._d.setTime(mom._d.valueOf() + milliseconds2 * isAdding);
      }
      if (updateOffset) {
        hooks.updateOffset(mom, days2 || months2);
      }
    }
    var add = createAdder(1, "add"), subtract = createAdder(-1, "subtract");
    function isString(input) {
      return typeof input === "string" || input instanceof String;
    }
    function isMomentInput(input) {
      return isMoment(input) || isDate(input) || isString(input) || isNumber(input) || isNumberOrStringArray(input) || isMomentInputObject(input) || input === null || input === void 0;
    }
    function isMomentInputObject(input) {
      var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [
        "years",
        "year",
        "y",
        "months",
        "month",
        "M",
        "days",
        "day",
        "d",
        "dates",
        "date",
        "D",
        "hours",
        "hour",
        "h",
        "minutes",
        "minute",
        "m",
        "seconds",
        "second",
        "s",
        "milliseconds",
        "millisecond",
        "ms"
      ], i, property, propertyLen = properties.length;
      for (i = 0; i < propertyLen; i += 1) {
        property = properties[i];
        propertyTest = propertyTest || hasOwnProp(input, property);
      }
      return objectTest && propertyTest;
    }
    function isNumberOrStringArray(input) {
      var arrayTest = isArray(input), dataTypeTest = false;
      if (arrayTest) {
        dataTypeTest = input.filter(function(item) {
          return !isNumber(item) && isString(input);
        }).length === 0;
      }
      return arrayTest && dataTypeTest;
    }
    function isCalendarSpec(input) {
      var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [
        "sameDay",
        "nextDay",
        "lastDay",
        "nextWeek",
        "lastWeek",
        "sameElse"
      ], i, property;
      for (i = 0; i < properties.length; i += 1) {
        property = properties[i];
        propertyTest = propertyTest || hasOwnProp(input, property);
      }
      return objectTest && propertyTest;
    }
    function getCalendarFormat(myMoment, now2) {
      var diff2 = myMoment.diff(now2, "days", true);
      return diff2 < -6 ? "sameElse" : diff2 < -1 ? "lastWeek" : diff2 < 0 ? "lastDay" : diff2 < 1 ? "sameDay" : diff2 < 2 ? "nextDay" : diff2 < 7 ? "nextWeek" : "sameElse";
    }
    function calendar$1(time, formats) {
      if (arguments.length === 1) {
        if (!arguments[0]) {
          time = void 0;
          formats = void 0;
        } else if (isMomentInput(arguments[0])) {
          time = arguments[0];
          formats = void 0;
        } else if (isCalendarSpec(arguments[0])) {
          formats = arguments[0];
          time = void 0;
        }
      }
      var now2 = time || createLocal(), sod = cloneWithOffset(now2, this).startOf("day"), format2 = hooks.calendarFormat(this, sod) || "sameElse", output = formats && (isFunction(formats[format2]) ? formats[format2].call(this, now2) : formats[format2]);
      return this.format(
        output || this.localeData().calendar(format2, this, createLocal(now2))
      );
    }
    function clone() {
      return new Moment(this);
    }
    function isAfter(input, units2) {
      var localInput = isMoment(input) ? input : createLocal(input);
      if (!(this.isValid() && localInput.isValid())) {
        return false;
      }
      units2 = normalizeUnits(units2) || "millisecond";
      if (units2 === "millisecond") {
        return this.valueOf() > localInput.valueOf();
      } else {
        return localInput.valueOf() < this.clone().startOf(units2).valueOf();
      }
    }
    function isBefore(input, units2) {
      var localInput = isMoment(input) ? input : createLocal(input);
      if (!(this.isValid() && localInput.isValid())) {
        return false;
      }
      units2 = normalizeUnits(units2) || "millisecond";
      if (units2 === "millisecond") {
        return this.valueOf() < localInput.valueOf();
      } else {
        return this.clone().endOf(units2).valueOf() < localInput.valueOf();
      }
    }
    function isBetween(from2, to2, units2, inclusivity) {
      var localFrom = isMoment(from2) ? from2 : createLocal(from2), localTo = isMoment(to2) ? to2 : createLocal(to2);
      if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
        return false;
      }
      inclusivity = inclusivity || "()";
      return (inclusivity[0] === "(" ? this.isAfter(localFrom, units2) : !this.isBefore(localFrom, units2)) && (inclusivity[1] === ")" ? this.isBefore(localTo, units2) : !this.isAfter(localTo, units2));
    }
    function isSame(input, units2) {
      var localInput = isMoment(input) ? input : createLocal(input), inputMs;
      if (!(this.isValid() && localInput.isValid())) {
        return false;
      }
      units2 = normalizeUnits(units2) || "millisecond";
      if (units2 === "millisecond") {
        return this.valueOf() === localInput.valueOf();
      } else {
        inputMs = localInput.valueOf();
        return this.clone().startOf(units2).valueOf() <= inputMs && inputMs <= this.clone().endOf(units2).valueOf();
      }
    }
    function isSameOrAfter(input, units2) {
      return this.isSame(input, units2) || this.isAfter(input, units2);
    }
    function isSameOrBefore(input, units2) {
      return this.isSame(input, units2) || this.isBefore(input, units2);
    }
    function diff(input, units2, asFloat) {
      var that, zoneDelta, output;
      if (!this.isValid()) {
        return NaN;
      }
      that = cloneWithOffset(input, this);
      if (!that.isValid()) {
        return NaN;
      }
      zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
      units2 = normalizeUnits(units2);
      switch (units2) {
        case "year":
          output = monthDiff(this, that) / 12;
          break;
        case "month":
          output = monthDiff(this, that);
          break;
        case "quarter":
          output = monthDiff(this, that) / 3;
          break;
        case "second":
          output = (this - that) / 1e3;
          break;
        case "minute":
          output = (this - that) / 6e4;
          break;
        case "hour":
          output = (this - that) / 36e5;
          break;
        case "day":
          output = (this - that - zoneDelta) / 864e5;
          break;
        case "week":
          output = (this - that - zoneDelta) / 6048e5;
          break;
        default:
          output = this - that;
      }
      return asFloat ? output : absFloor(output);
    }
    function monthDiff(a, b2) {
      if (a.date() < b2.date()) {
        return -monthDiff(b2, a);
      }
      var wholeMonthDiff = (b2.year() - a.year()) * 12 + (b2.month() - a.month()), anchor = a.clone().add(wholeMonthDiff, "months"), anchor2, adjust;
      if (b2 - anchor < 0) {
        anchor2 = a.clone().add(wholeMonthDiff - 1, "months");
        adjust = (b2 - anchor) / (anchor - anchor2);
      } else {
        anchor2 = a.clone().add(wholeMonthDiff + 1, "months");
        adjust = (b2 - anchor) / (anchor2 - anchor);
      }
      return -(wholeMonthDiff + adjust) || 0;
    }
    hooks.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
    hooks.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    function toString() {
      return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
    }
    function toISOString(keepOffset) {
      if (!this.isValid()) {
        return null;
      }
      var utc = keepOffset !== true, m2 = utc ? this.clone().utc() : this;
      if (m2.year() < 0 || m2.year() > 9999) {
        return formatMoment(
          m2,
          utc ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
        );
      }
      if (isFunction(Date.prototype.toISOString)) {
        if (utc) {
          return this.toDate().toISOString();
        } else {
          return new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", formatMoment(m2, "Z"));
        }
      }
      return formatMoment(
        m2,
        utc ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
      );
    }
    function inspect() {
      if (!this.isValid()) {
        return "moment.invalid(/* " + this._i + " */)";
      }
      var func = "moment", zone = "", prefix2, year, datetime, suffix;
      if (!this.isLocal()) {
        func = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone";
        zone = "Z";
      }
      prefix2 = "[" + func + '("]';
      year = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY";
      datetime = "-MM-DD[T]HH:mm:ss.SSS";
      suffix = zone + '[")]';
      return this.format(prefix2 + year + datetime + suffix);
    }
    function format(inputString) {
      if (!inputString) {
        inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
      }
      var output = formatMoment(this, inputString);
      return this.localeData().postformat(output);
    }
    function from(time, withoutSuffix) {
      if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
        return createDuration({ to: this, from: time }).locale(this.locale()).humanize(!withoutSuffix);
      } else {
        return this.localeData().invalidDate();
      }
    }
    function fromNow(withoutSuffix) {
      return this.from(createLocal(), withoutSuffix);
    }
    function to(time, withoutSuffix) {
      if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
        return createDuration({ from: this, to: time }).locale(this.locale()).humanize(!withoutSuffix);
      } else {
        return this.localeData().invalidDate();
      }
    }
    function toNow(withoutSuffix) {
      return this.to(createLocal(), withoutSuffix);
    }
    function locale(key2) {
      var newLocaleData;
      if (key2 === void 0) {
        return this._locale._abbr;
      } else {
        newLocaleData = getLocale(key2);
        if (newLocaleData != null) {
          this._locale = newLocaleData;
        }
        return this;
      }
    }
    var lang = deprecate(
      "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
      function(key2) {
        if (key2 === void 0) {
          return this.localeData();
        } else {
          return this.locale(key2);
        }
      }
    );
    function localeData() {
      return this._locale;
    }
    var MS_PER_SECOND = 1e3, MS_PER_MINUTE = 60 * MS_PER_SECOND, MS_PER_HOUR = 60 * MS_PER_MINUTE, MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;
    function mod$1(dividend, divisor) {
      return (dividend % divisor + divisor) % divisor;
    }
    function localStartOfDate(y, m2, d2) {
      if (y < 100 && y >= 0) {
        return new Date(y + 400, m2, d2) - MS_PER_400_YEARS;
      } else {
        return new Date(y, m2, d2).valueOf();
      }
    }
    function utcStartOfDate(y, m2, d2) {
      if (y < 100 && y >= 0) {
        return Date.UTC(y + 400, m2, d2) - MS_PER_400_YEARS;
      } else {
        return Date.UTC(y, m2, d2);
      }
    }
    function startOf(units2) {
      var time, startOfDate;
      units2 = normalizeUnits(units2);
      if (units2 === void 0 || units2 === "millisecond" || !this.isValid()) {
        return this;
      }
      startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
      switch (units2) {
        case "year":
          time = startOfDate(this.year(), 0, 1);
          break;
        case "quarter":
          time = startOfDate(
            this.year(),
            this.month() - this.month() % 3,
            1
          );
          break;
        case "month":
          time = startOfDate(this.year(), this.month(), 1);
          break;
        case "week":
          time = startOfDate(
            this.year(),
            this.month(),
            this.date() - this.weekday()
          );
          break;
        case "isoWeek":
          time = startOfDate(
            this.year(),
            this.month(),
            this.date() - (this.isoWeekday() - 1)
          );
          break;
        case "day":
        case "date":
          time = startOfDate(this.year(), this.month(), this.date());
          break;
        case "hour":
          time = this._d.valueOf();
          time -= mod$1(
            time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
            MS_PER_HOUR
          );
          break;
        case "minute":
          time = this._d.valueOf();
          time -= mod$1(time, MS_PER_MINUTE);
          break;
        case "second":
          time = this._d.valueOf();
          time -= mod$1(time, MS_PER_SECOND);
          break;
      }
      this._d.setTime(time);
      hooks.updateOffset(this, true);
      return this;
    }
    function endOf(units2) {
      var time, startOfDate;
      units2 = normalizeUnits(units2);
      if (units2 === void 0 || units2 === "millisecond" || !this.isValid()) {
        return this;
      }
      startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
      switch (units2) {
        case "year":
          time = startOfDate(this.year() + 1, 0, 1) - 1;
          break;
        case "quarter":
          time = startOfDate(
            this.year(),
            this.month() - this.month() % 3 + 3,
            1
          ) - 1;
          break;
        case "month":
          time = startOfDate(this.year(), this.month() + 1, 1) - 1;
          break;
        case "week":
          time = startOfDate(
            this.year(),
            this.month(),
            this.date() - this.weekday() + 7
          ) - 1;
          break;
        case "isoWeek":
          time = startOfDate(
            this.year(),
            this.month(),
            this.date() - (this.isoWeekday() - 1) + 7
          ) - 1;
          break;
        case "day":
        case "date":
          time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
          break;
        case "hour":
          time = this._d.valueOf();
          time += MS_PER_HOUR - mod$1(
            time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
            MS_PER_HOUR
          ) - 1;
          break;
        case "minute":
          time = this._d.valueOf();
          time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
          break;
        case "second":
          time = this._d.valueOf();
          time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
          break;
      }
      this._d.setTime(time);
      hooks.updateOffset(this, true);
      return this;
    }
    function valueOf() {
      return this._d.valueOf() - (this._offset || 0) * 6e4;
    }
    function unix() {
      return Math.floor(this.valueOf() / 1e3);
    }
    function toDate() {
      return new Date(this.valueOf());
    }
    function toArray() {
      var m2 = this;
      return [
        m2.year(),
        m2.month(),
        m2.date(),
        m2.hour(),
        m2.minute(),
        m2.second(),
        m2.millisecond()
      ];
    }
    function toObject() {
      var m2 = this;
      return {
        years: m2.year(),
        months: m2.month(),
        date: m2.date(),
        hours: m2.hours(),
        minutes: m2.minutes(),
        seconds: m2.seconds(),
        milliseconds: m2.milliseconds()
      };
    }
    function toJSON() {
      return this.isValid() ? this.toISOString() : null;
    }
    function isValid$2() {
      return isValid(this);
    }
    function parsingFlags() {
      return extend({}, getParsingFlags(this));
    }
    function invalidAt() {
      return getParsingFlags(this).overflow;
    }
    function creationData() {
      return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict
      };
    }
    addFormatToken("N", 0, 0, "eraAbbr");
    addFormatToken("NN", 0, 0, "eraAbbr");
    addFormatToken("NNN", 0, 0, "eraAbbr");
    addFormatToken("NNNN", 0, 0, "eraName");
    addFormatToken("NNNNN", 0, 0, "eraNarrow");
    addFormatToken("y", ["y", 1], "yo", "eraYear");
    addFormatToken("y", ["yy", 2], 0, "eraYear");
    addFormatToken("y", ["yyy", 3], 0, "eraYear");
    addFormatToken("y", ["yyyy", 4], 0, "eraYear");
    addRegexToken("N", matchEraAbbr);
    addRegexToken("NN", matchEraAbbr);
    addRegexToken("NNN", matchEraAbbr);
    addRegexToken("NNNN", matchEraName);
    addRegexToken("NNNNN", matchEraNarrow);
    addParseToken(
      ["N", "NN", "NNN", "NNNN", "NNNNN"],
      function(input, array, config2, token2) {
        var era = config2._locale.erasParse(input, token2, config2._strict);
        if (era) {
          getParsingFlags(config2).era = era;
        } else {
          getParsingFlags(config2).invalidEra = input;
        }
      }
    );
    addRegexToken("y", matchUnsigned);
    addRegexToken("yy", matchUnsigned);
    addRegexToken("yyy", matchUnsigned);
    addRegexToken("yyyy", matchUnsigned);
    addRegexToken("yo", matchEraYearOrdinal);
    addParseToken(["y", "yy", "yyy", "yyyy"], YEAR);
    addParseToken(["yo"], function(input, array, config2, token2) {
      var match;
      if (config2._locale._eraYearOrdinalRegex) {
        match = input.match(config2._locale._eraYearOrdinalRegex);
      }
      if (config2._locale.eraYearOrdinalParse) {
        array[YEAR] = config2._locale.eraYearOrdinalParse(input, match);
      } else {
        array[YEAR] = parseInt(input, 10);
      }
    });
    function localeEras(m2, format2) {
      var i, l2, date, eras = this._eras || getLocale("en")._eras;
      for (i = 0, l2 = eras.length; i < l2; ++i) {
        switch (typeof eras[i].since) {
          case "string":
            date = hooks(eras[i].since).startOf("day");
            eras[i].since = date.valueOf();
            break;
        }
        switch (typeof eras[i].until) {
          case "undefined":
            eras[i].until = Infinity;
            break;
          case "string":
            date = hooks(eras[i].until).startOf("day").valueOf();
            eras[i].until = date.valueOf();
            break;
        }
      }
      return eras;
    }
    function localeErasParse(eraName, format2, strict) {
      var i, l2, eras = this.eras(), name, abbr, narrow;
      eraName = eraName.toUpperCase();
      for (i = 0, l2 = eras.length; i < l2; ++i) {
        name = eras[i].name.toUpperCase();
        abbr = eras[i].abbr.toUpperCase();
        narrow = eras[i].narrow.toUpperCase();
        if (strict) {
          switch (format2) {
            case "N":
            case "NN":
            case "NNN":
              if (abbr === eraName) {
                return eras[i];
              }
              break;
            case "NNNN":
              if (name === eraName) {
                return eras[i];
              }
              break;
            case "NNNNN":
              if (narrow === eraName) {
                return eras[i];
              }
              break;
          }
        } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
          return eras[i];
        }
      }
    }
    function localeErasConvertYear(era, year) {
      var dir = era.since <= era.until ? 1 : -1;
      if (year === void 0) {
        return hooks(era.since).year();
      } else {
        return hooks(era.since).year() + (year - era.offset) * dir;
      }
    }
    function getEraName() {
      var i, l2, val, eras = this.localeData().eras();
      for (i = 0, l2 = eras.length; i < l2; ++i) {
        val = this.clone().startOf("day").valueOf();
        if (eras[i].since <= val && val <= eras[i].until) {
          return eras[i].name;
        }
        if (eras[i].until <= val && val <= eras[i].since) {
          return eras[i].name;
        }
      }
      return "";
    }
    function getEraNarrow() {
      var i, l2, val, eras = this.localeData().eras();
      for (i = 0, l2 = eras.length; i < l2; ++i) {
        val = this.clone().startOf("day").valueOf();
        if (eras[i].since <= val && val <= eras[i].until) {
          return eras[i].narrow;
        }
        if (eras[i].until <= val && val <= eras[i].since) {
          return eras[i].narrow;
        }
      }
      return "";
    }
    function getEraAbbr() {
      var i, l2, val, eras = this.localeData().eras();
      for (i = 0, l2 = eras.length; i < l2; ++i) {
        val = this.clone().startOf("day").valueOf();
        if (eras[i].since <= val && val <= eras[i].until) {
          return eras[i].abbr;
        }
        if (eras[i].until <= val && val <= eras[i].since) {
          return eras[i].abbr;
        }
      }
      return "";
    }
    function getEraYear() {
      var i, l2, dir, val, eras = this.localeData().eras();
      for (i = 0, l2 = eras.length; i < l2; ++i) {
        dir = eras[i].since <= eras[i].until ? 1 : -1;
        val = this.clone().startOf("day").valueOf();
        if (eras[i].since <= val && val <= eras[i].until || eras[i].until <= val && val <= eras[i].since) {
          return (this.year() - hooks(eras[i].since).year()) * dir + eras[i].offset;
        }
      }
      return this.year();
    }
    function erasNameRegex(isStrict) {
      if (!hasOwnProp(this, "_erasNameRegex")) {
        computeErasParse.call(this);
      }
      return isStrict ? this._erasNameRegex : this._erasRegex;
    }
    function erasAbbrRegex(isStrict) {
      if (!hasOwnProp(this, "_erasAbbrRegex")) {
        computeErasParse.call(this);
      }
      return isStrict ? this._erasAbbrRegex : this._erasRegex;
    }
    function erasNarrowRegex(isStrict) {
      if (!hasOwnProp(this, "_erasNarrowRegex")) {
        computeErasParse.call(this);
      }
      return isStrict ? this._erasNarrowRegex : this._erasRegex;
    }
    function matchEraAbbr(isStrict, locale2) {
      return locale2.erasAbbrRegex(isStrict);
    }
    function matchEraName(isStrict, locale2) {
      return locale2.erasNameRegex(isStrict);
    }
    function matchEraNarrow(isStrict, locale2) {
      return locale2.erasNarrowRegex(isStrict);
    }
    function matchEraYearOrdinal(isStrict, locale2) {
      return locale2._eraYearOrdinalRegex || matchUnsigned;
    }
    function computeErasParse() {
      var abbrPieces = [], namePieces = [], narrowPieces = [], mixedPieces = [], i, l2, eras = this.eras();
      for (i = 0, l2 = eras.length; i < l2; ++i) {
        namePieces.push(regexEscape(eras[i].name));
        abbrPieces.push(regexEscape(eras[i].abbr));
        narrowPieces.push(regexEscape(eras[i].narrow));
        mixedPieces.push(regexEscape(eras[i].name));
        mixedPieces.push(regexEscape(eras[i].abbr));
        mixedPieces.push(regexEscape(eras[i].narrow));
      }
      this._erasRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
      this._erasNameRegex = new RegExp("^(" + namePieces.join("|") + ")", "i");
      this._erasAbbrRegex = new RegExp("^(" + abbrPieces.join("|") + ")", "i");
      this._erasNarrowRegex = new RegExp(
        "^(" + narrowPieces.join("|") + ")",
        "i"
      );
    }
    addFormatToken(0, ["gg", 2], 0, function() {
      return this.weekYear() % 100;
    });
    addFormatToken(0, ["GG", 2], 0, function() {
      return this.isoWeekYear() % 100;
    });
    function addWeekYearFormatToken(token2, getter) {
      addFormatToken(0, [token2, token2.length], 0, getter);
    }
    addWeekYearFormatToken("gggg", "weekYear");
    addWeekYearFormatToken("ggggg", "weekYear");
    addWeekYearFormatToken("GGGG", "isoWeekYear");
    addWeekYearFormatToken("GGGGG", "isoWeekYear");
    addUnitAlias("weekYear", "gg");
    addUnitAlias("isoWeekYear", "GG");
    addUnitPriority("weekYear", 1);
    addUnitPriority("isoWeekYear", 1);
    addRegexToken("G", matchSigned);
    addRegexToken("g", matchSigned);
    addRegexToken("GG", match1to2, match2);
    addRegexToken("gg", match1to2, match2);
    addRegexToken("GGGG", match1to4, match4);
    addRegexToken("gggg", match1to4, match4);
    addRegexToken("GGGGG", match1to6, match6);
    addRegexToken("ggggg", match1to6, match6);
    addWeekParseToken(
      ["gggg", "ggggg", "GGGG", "GGGGG"],
      function(input, week, config2, token2) {
        week[token2.substr(0, 2)] = toInt(input);
      }
    );
    addWeekParseToken(["gg", "GG"], function(input, week, config2, token2) {
      week[token2] = hooks.parseTwoDigitYear(input);
    });
    function getSetWeekYear(input) {
      return getSetWeekYearHelper.call(
        this,
        input,
        this.week(),
        this.weekday(),
        this.localeData()._week.dow,
        this.localeData()._week.doy
      );
    }
    function getSetISOWeekYear(input) {
      return getSetWeekYearHelper.call(
        this,
        input,
        this.isoWeek(),
        this.isoWeekday(),
        1,
        4
      );
    }
    function getISOWeeksInYear() {
      return weeksInYear(this.year(), 1, 4);
    }
    function getISOWeeksInISOWeekYear() {
      return weeksInYear(this.isoWeekYear(), 1, 4);
    }
    function getWeeksInYear() {
      var weekInfo = this.localeData()._week;
      return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }
    function getWeeksInWeekYear() {
      var weekInfo = this.localeData()._week;
      return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
    }
    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
      var weeksTarget;
      if (input == null) {
        return weekOfYear(this, dow, doy).year;
      } else {
        weeksTarget = weeksInYear(input, dow, doy);
        if (week > weeksTarget) {
          week = weeksTarget;
        }
        return setWeekAll.call(this, input, week, weekday, dow, doy);
      }
    }
    function setWeekAll(weekYear, week, weekday, dow, doy) {
      var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy), date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
      this.year(date.getUTCFullYear());
      this.month(date.getUTCMonth());
      this.date(date.getUTCDate());
      return this;
    }
    addFormatToken("Q", 0, "Qo", "quarter");
    addUnitAlias("quarter", "Q");
    addUnitPriority("quarter", 7);
    addRegexToken("Q", match1);
    addParseToken("Q", function(input, array) {
      array[MONTH] = (toInt(input) - 1) * 3;
    });
    function getSetQuarter(input) {
      return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    }
    addFormatToken("D", ["DD", 2], "Do", "date");
    addUnitAlias("date", "D");
    addUnitPriority("date", 9);
    addRegexToken("D", match1to2);
    addRegexToken("DD", match1to2, match2);
    addRegexToken("Do", function(isStrict, locale2) {
      return isStrict ? locale2._dayOfMonthOrdinalParse || locale2._ordinalParse : locale2._dayOfMonthOrdinalParseLenient;
    });
    addParseToken(["D", "DD"], DATE);
    addParseToken("Do", function(input, array) {
      array[DATE] = toInt(input.match(match1to2)[0]);
    });
    var getSetDayOfMonth = makeGetSet("Date", true);
    addFormatToken("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
    addUnitAlias("dayOfYear", "DDD");
    addUnitPriority("dayOfYear", 4);
    addRegexToken("DDD", match1to3);
    addRegexToken("DDDD", match3);
    addParseToken(["DDD", "DDDD"], function(input, array, config2) {
      config2._dayOfYear = toInt(input);
    });
    function getSetDayOfYear(input) {
      var dayOfYear = Math.round(
        (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
      ) + 1;
      return input == null ? dayOfYear : this.add(input - dayOfYear, "d");
    }
    addFormatToken("m", ["mm", 2], 0, "minute");
    addUnitAlias("minute", "m");
    addUnitPriority("minute", 14);
    addRegexToken("m", match1to2);
    addRegexToken("mm", match1to2, match2);
    addParseToken(["m", "mm"], MINUTE);
    var getSetMinute = makeGetSet("Minutes", false);
    addFormatToken("s", ["ss", 2], 0, "second");
    addUnitAlias("second", "s");
    addUnitPriority("second", 15);
    addRegexToken("s", match1to2);
    addRegexToken("ss", match1to2, match2);
    addParseToken(["s", "ss"], SECOND);
    var getSetSecond = makeGetSet("Seconds", false);
    addFormatToken("S", 0, 0, function() {
      return ~~(this.millisecond() / 100);
    });
    addFormatToken(0, ["SS", 2], 0, function() {
      return ~~(this.millisecond() / 10);
    });
    addFormatToken(0, ["SSS", 3], 0, "millisecond");
    addFormatToken(0, ["SSSS", 4], 0, function() {
      return this.millisecond() * 10;
    });
    addFormatToken(0, ["SSSSS", 5], 0, function() {
      return this.millisecond() * 100;
    });
    addFormatToken(0, ["SSSSSS", 6], 0, function() {
      return this.millisecond() * 1e3;
    });
    addFormatToken(0, ["SSSSSSS", 7], 0, function() {
      return this.millisecond() * 1e4;
    });
    addFormatToken(0, ["SSSSSSSS", 8], 0, function() {
      return this.millisecond() * 1e5;
    });
    addFormatToken(0, ["SSSSSSSSS", 9], 0, function() {
      return this.millisecond() * 1e6;
    });
    addUnitAlias("millisecond", "ms");
    addUnitPriority("millisecond", 16);
    addRegexToken("S", match1to3, match1);
    addRegexToken("SS", match1to3, match2);
    addRegexToken("SSS", match1to3, match3);
    var token, getSetMillisecond;
    for (token = "SSSS"; token.length <= 9; token += "S") {
      addRegexToken(token, matchUnsigned);
    }
    function parseMs(input, array) {
      array[MILLISECOND] = toInt(("0." + input) * 1e3);
    }
    for (token = "S"; token.length <= 9; token += "S") {
      addParseToken(token, parseMs);
    }
    getSetMillisecond = makeGetSet("Milliseconds", false);
    addFormatToken("z", 0, 0, "zoneAbbr");
    addFormatToken("zz", 0, 0, "zoneName");
    function getZoneAbbr() {
      return this._isUTC ? "UTC" : "";
    }
    function getZoneName() {
      return this._isUTC ? "Coordinated Universal Time" : "";
    }
    var proto = Moment.prototype;
    proto.add = add;
    proto.calendar = calendar$1;
    proto.clone = clone;
    proto.diff = diff;
    proto.endOf = endOf;
    proto.format = format;
    proto.from = from;
    proto.fromNow = fromNow;
    proto.to = to;
    proto.toNow = toNow;
    proto.get = stringGet;
    proto.invalidAt = invalidAt;
    proto.isAfter = isAfter;
    proto.isBefore = isBefore;
    proto.isBetween = isBetween;
    proto.isSame = isSame;
    proto.isSameOrAfter = isSameOrAfter;
    proto.isSameOrBefore = isSameOrBefore;
    proto.isValid = isValid$2;
    proto.lang = lang;
    proto.locale = locale;
    proto.localeData = localeData;
    proto.max = prototypeMax;
    proto.min = prototypeMin;
    proto.parsingFlags = parsingFlags;
    proto.set = stringSet;
    proto.startOf = startOf;
    proto.subtract = subtract;
    proto.toArray = toArray;
    proto.toObject = toObject;
    proto.toDate = toDate;
    proto.toISOString = toISOString;
    proto.inspect = inspect;
    if (typeof Symbol !== "undefined" && Symbol.for != null) {
      proto[Symbol.for("nodejs.util.inspect.custom")] = function() {
        return "Moment<" + this.format() + ">";
      };
    }
    proto.toJSON = toJSON;
    proto.toString = toString;
    proto.unix = unix;
    proto.valueOf = valueOf;
    proto.creationData = creationData;
    proto.eraName = getEraName;
    proto.eraNarrow = getEraNarrow;
    proto.eraAbbr = getEraAbbr;
    proto.eraYear = getEraYear;
    proto.year = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week = proto.weeks = getSetWeek;
    proto.isoWeek = proto.isoWeeks = getSetISOWeek;
    proto.weeksInYear = getWeeksInYear;
    proto.weeksInWeekYear = getWeeksInWeekYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
    proto.date = getSetDayOfMonth;
    proto.day = proto.days = getSetDayOfWeek;
    proto.weekday = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset = getSetOffset;
    proto.utc = setOffsetToUTC;
    proto.local = setOffsetToLocal;
    proto.parseZone = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST = isDaylightSavingTime;
    proto.isLocal = isLocal;
    proto.isUtcOffset = isUtcOffset;
    proto.isUtc = isUtc;
    proto.isUTC = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates = deprecate(
      "dates accessor is deprecated. Use date instead.",
      getSetDayOfMonth
    );
    proto.months = deprecate(
      "months accessor is deprecated. Use month instead",
      getSetMonth
    );
    proto.years = deprecate(
      "years accessor is deprecated. Use year instead",
      getSetYear
    );
    proto.zone = deprecate(
      "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
      getSetZone
    );
    proto.isDSTShifted = deprecate(
      "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
      isDaylightSavingTimeShifted
    );
    function createUnix(input) {
      return createLocal(input * 1e3);
    }
    function createInZone() {
      return createLocal.apply(null, arguments).parseZone();
    }
    function preParsePostFormat(string) {
      return string;
    }
    var proto$1 = Locale.prototype;
    proto$1.calendar = calendar;
    proto$1.longDateFormat = longDateFormat;
    proto$1.invalidDate = invalidDate;
    proto$1.ordinal = ordinal;
    proto$1.preparse = preParsePostFormat;
    proto$1.postformat = preParsePostFormat;
    proto$1.relativeTime = relativeTime;
    proto$1.pastFuture = pastFuture;
    proto$1.set = set;
    proto$1.eras = localeEras;
    proto$1.erasParse = localeErasParse;
    proto$1.erasConvertYear = localeErasConvertYear;
    proto$1.erasAbbrRegex = erasAbbrRegex;
    proto$1.erasNameRegex = erasNameRegex;
    proto$1.erasNarrowRegex = erasNarrowRegex;
    proto$1.months = localeMonths;
    proto$1.monthsShort = localeMonthsShort;
    proto$1.monthsParse = localeMonthsParse;
    proto$1.monthsRegex = monthsRegex;
    proto$1.monthsShortRegex = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;
    proto$1.weekdays = localeWeekdays;
    proto$1.weekdaysMin = localeWeekdaysMin;
    proto$1.weekdaysShort = localeWeekdaysShort;
    proto$1.weekdaysParse = localeWeekdaysParse;
    proto$1.weekdaysRegex = weekdaysRegex;
    proto$1.weekdaysShortRegex = weekdaysShortRegex;
    proto$1.weekdaysMinRegex = weekdaysMinRegex;
    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;
    function get$1(format2, index, field, setter) {
      var locale2 = getLocale(), utc = createUTC().set(setter, index);
      return locale2[field](utc, format2);
    }
    function listMonthsImpl(format2, index, field) {
      if (isNumber(format2)) {
        index = format2;
        format2 = void 0;
      }
      format2 = format2 || "";
      if (index != null) {
        return get$1(format2, index, field, "month");
      }
      var i, out = [];
      for (i = 0; i < 12; i++) {
        out[i] = get$1(format2, i, field, "month");
      }
      return out;
    }
    function listWeekdaysImpl(localeSorted, format2, index, field) {
      if (typeof localeSorted === "boolean") {
        if (isNumber(format2)) {
          index = format2;
          format2 = void 0;
        }
        format2 = format2 || "";
      } else {
        format2 = localeSorted;
        index = format2;
        localeSorted = false;
        if (isNumber(format2)) {
          index = format2;
          format2 = void 0;
        }
        format2 = format2 || "";
      }
      var locale2 = getLocale(), shift = localeSorted ? locale2._week.dow : 0, i, out = [];
      if (index != null) {
        return get$1(format2, (index + shift) % 7, field, "day");
      }
      for (i = 0; i < 7; i++) {
        out[i] = get$1(format2, (i + shift) % 7, field, "day");
      }
      return out;
    }
    function listMonths(format2, index) {
      return listMonthsImpl(format2, index, "months");
    }
    function listMonthsShort(format2, index) {
      return listMonthsImpl(format2, index, "monthsShort");
    }
    function listWeekdays(localeSorted, format2, index) {
      return listWeekdaysImpl(localeSorted, format2, index, "weekdays");
    }
    function listWeekdaysShort(localeSorted, format2, index) {
      return listWeekdaysImpl(localeSorted, format2, index, "weekdaysShort");
    }
    function listWeekdaysMin(localeSorted, format2, index) {
      return listWeekdaysImpl(localeSorted, format2, index, "weekdaysMin");
    }
    getSetGlobalLocale("en", {
      eras: [
        {
          since: "0001-01-01",
          until: Infinity,
          offset: 1,
          name: "Anno Domini",
          narrow: "AD",
          abbr: "AD"
        },
        {
          since: "0000-12-31",
          until: -Infinity,
          offset: 1,
          name: "Before Christ",
          narrow: "BC",
          abbr: "BC"
        }
      ],
      dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
      ordinal: function(number) {
        var b2 = number % 10, output = toInt(number % 100 / 10) === 1 ? "th" : b2 === 1 ? "st" : b2 === 2 ? "nd" : b2 === 3 ? "rd" : "th";
        return number + output;
      }
    });
    hooks.lang = deprecate(
      "moment.lang is deprecated. Use moment.locale instead.",
      getSetGlobalLocale
    );
    hooks.langData = deprecate(
      "moment.langData is deprecated. Use moment.localeData instead.",
      getLocale
    );
    var mathAbs = Math.abs;
    function abs() {
      var data = this._data;
      this._milliseconds = mathAbs(this._milliseconds);
      this._days = mathAbs(this._days);
      this._months = mathAbs(this._months);
      data.milliseconds = mathAbs(data.milliseconds);
      data.seconds = mathAbs(data.seconds);
      data.minutes = mathAbs(data.minutes);
      data.hours = mathAbs(data.hours);
      data.months = mathAbs(data.months);
      data.years = mathAbs(data.years);
      return this;
    }
    function addSubtract$1(duration2, input, value, direction) {
      var other = createDuration(input, value);
      duration2._milliseconds += direction * other._milliseconds;
      duration2._days += direction * other._days;
      duration2._months += direction * other._months;
      return duration2._bubble();
    }
    function add$1(input, value) {
      return addSubtract$1(this, input, value, 1);
    }
    function subtract$1(input, value) {
      return addSubtract$1(this, input, value, -1);
    }
    function absCeil(number) {
      if (number < 0) {
        return Math.floor(number);
      } else {
        return Math.ceil(number);
      }
    }
    function bubble() {
      var milliseconds2 = this._milliseconds, days2 = this._days, months2 = this._months, data = this._data, seconds2, minutes2, hours2, years2, monthsFromDays;
      if (!(milliseconds2 >= 0 && days2 >= 0 && months2 >= 0 || milliseconds2 <= 0 && days2 <= 0 && months2 <= 0)) {
        milliseconds2 += absCeil(monthsToDays(months2) + days2) * 864e5;
        days2 = 0;
        months2 = 0;
      }
      data.milliseconds = milliseconds2 % 1e3;
      seconds2 = absFloor(milliseconds2 / 1e3);
      data.seconds = seconds2 % 60;
      minutes2 = absFloor(seconds2 / 60);
      data.minutes = minutes2 % 60;
      hours2 = absFloor(minutes2 / 60);
      data.hours = hours2 % 24;
      days2 += absFloor(hours2 / 24);
      monthsFromDays = absFloor(daysToMonths(days2));
      months2 += monthsFromDays;
      days2 -= absCeil(monthsToDays(monthsFromDays));
      years2 = absFloor(months2 / 12);
      months2 %= 12;
      data.days = days2;
      data.months = months2;
      data.years = years2;
      return this;
    }
    function daysToMonths(days2) {
      return days2 * 4800 / 146097;
    }
    function monthsToDays(months2) {
      return months2 * 146097 / 4800;
    }
    function as(units2) {
      if (!this.isValid()) {
        return NaN;
      }
      var days2, months2, milliseconds2 = this._milliseconds;
      units2 = normalizeUnits(units2);
      if (units2 === "month" || units2 === "quarter" || units2 === "year") {
        days2 = this._days + milliseconds2 / 864e5;
        months2 = this._months + daysToMonths(days2);
        switch (units2) {
          case "month":
            return months2;
          case "quarter":
            return months2 / 3;
          case "year":
            return months2 / 12;
        }
      } else {
        days2 = this._days + Math.round(monthsToDays(this._months));
        switch (units2) {
          case "week":
            return days2 / 7 + milliseconds2 / 6048e5;
          case "day":
            return days2 + milliseconds2 / 864e5;
          case "hour":
            return days2 * 24 + milliseconds2 / 36e5;
          case "minute":
            return days2 * 1440 + milliseconds2 / 6e4;
          case "second":
            return days2 * 86400 + milliseconds2 / 1e3;
          case "millisecond":
            return Math.floor(days2 * 864e5) + milliseconds2;
          default:
            throw new Error("Unknown unit " + units2);
        }
      }
    }
    function valueOf$1() {
      if (!this.isValid()) {
        return NaN;
      }
      return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;
    }
    function makeAs(alias) {
      return function() {
        return this.as(alias);
      };
    }
    var asMilliseconds = makeAs("ms"), asSeconds = makeAs("s"), asMinutes = makeAs("m"), asHours = makeAs("h"), asDays = makeAs("d"), asWeeks = makeAs("w"), asMonths = makeAs("M"), asQuarters = makeAs("Q"), asYears = makeAs("y");
    function clone$1() {
      return createDuration(this);
    }
    function get$2(units2) {
      units2 = normalizeUnits(units2);
      return this.isValid() ? this[units2 + "s"]() : NaN;
    }
    function makeGetter(name) {
      return function() {
        return this.isValid() ? this._data[name] : NaN;
      };
    }
    var milliseconds = makeGetter("milliseconds"), seconds = makeGetter("seconds"), minutes = makeGetter("minutes"), hours = makeGetter("hours"), days = makeGetter("days"), months = makeGetter("months"), years = makeGetter("years");
    function weeks() {
      return absFloor(this.days() / 7);
    }
    var round = Math.round, thresholds = {
      ss: 44,
      // a few seconds to seconds
      s: 45,
      // seconds to minute
      m: 45,
      // minutes to hour
      h: 22,
      // hours to day
      d: 26,
      // days to month/week
      w: null,
      // weeks to month
      M: 11
      // months to year
    };
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale2) {
      return locale2.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }
    function relativeTime$1(posNegDuration, withoutSuffix, thresholds2, locale2) {
      var duration2 = createDuration(posNegDuration).abs(), seconds2 = round(duration2.as("s")), minutes2 = round(duration2.as("m")), hours2 = round(duration2.as("h")), days2 = round(duration2.as("d")), months2 = round(duration2.as("M")), weeks2 = round(duration2.as("w")), years2 = round(duration2.as("y")), a = seconds2 <= thresholds2.ss && ["s", seconds2] || seconds2 < thresholds2.s && ["ss", seconds2] || minutes2 <= 1 && ["m"] || minutes2 < thresholds2.m && ["mm", minutes2] || hours2 <= 1 && ["h"] || hours2 < thresholds2.h && ["hh", hours2] || days2 <= 1 && ["d"] || days2 < thresholds2.d && ["dd", days2];
      if (thresholds2.w != null) {
        a = a || weeks2 <= 1 && ["w"] || weeks2 < thresholds2.w && ["ww", weeks2];
      }
      a = a || months2 <= 1 && ["M"] || months2 < thresholds2.M && ["MM", months2] || years2 <= 1 && ["y"] || ["yy", years2];
      a[2] = withoutSuffix;
      a[3] = +posNegDuration > 0;
      a[4] = locale2;
      return substituteTimeAgo.apply(null, a);
    }
    function getSetRelativeTimeRounding(roundingFunction) {
      if (roundingFunction === void 0) {
        return round;
      }
      if (typeof roundingFunction === "function") {
        round = roundingFunction;
        return true;
      }
      return false;
    }
    function getSetRelativeTimeThreshold(threshold, limit) {
      if (thresholds[threshold] === void 0) {
        return false;
      }
      if (limit === void 0) {
        return thresholds[threshold];
      }
      thresholds[threshold] = limit;
      if (threshold === "s") {
        thresholds.ss = limit - 1;
      }
      return true;
    }
    function humanize(argWithSuffix, argThresholds) {
      if (!this.isValid()) {
        return this.localeData().invalidDate();
      }
      var withSuffix = false, th = thresholds, locale2, output;
      if (typeof argWithSuffix === "object") {
        argThresholds = argWithSuffix;
        argWithSuffix = false;
      }
      if (typeof argWithSuffix === "boolean") {
        withSuffix = argWithSuffix;
      }
      if (typeof argThresholds === "object") {
        th = Object.assign({}, thresholds, argThresholds);
        if (argThresholds.s != null && argThresholds.ss == null) {
          th.ss = argThresholds.s - 1;
        }
      }
      locale2 = this.localeData();
      output = relativeTime$1(this, !withSuffix, th, locale2);
      if (withSuffix) {
        output = locale2.pastFuture(+this, output);
      }
      return locale2.postformat(output);
    }
    var abs$1 = Math.abs;
    function sign(x) {
      return (x > 0) - (x < 0) || +x;
    }
    function toISOString$1() {
      if (!this.isValid()) {
        return this.localeData().invalidDate();
      }
      var seconds2 = abs$1(this._milliseconds) / 1e3, days2 = abs$1(this._days), months2 = abs$1(this._months), minutes2, hours2, years2, s, total = this.asSeconds(), totalSign, ymSign, daysSign, hmsSign;
      if (!total) {
        return "P0D";
      }
      minutes2 = absFloor(seconds2 / 60);
      hours2 = absFloor(minutes2 / 60);
      seconds2 %= 60;
      minutes2 %= 60;
      years2 = absFloor(months2 / 12);
      months2 %= 12;
      s = seconds2 ? seconds2.toFixed(3).replace(/\.?0+$/, "") : "";
      totalSign = total < 0 ? "-" : "";
      ymSign = sign(this._months) !== sign(total) ? "-" : "";
      daysSign = sign(this._days) !== sign(total) ? "-" : "";
      hmsSign = sign(this._milliseconds) !== sign(total) ? "-" : "";
      return totalSign + "P" + (years2 ? ymSign + years2 + "Y" : "") + (months2 ? ymSign + months2 + "M" : "") + (days2 ? daysSign + days2 + "D" : "") + (hours2 || minutes2 || seconds2 ? "T" : "") + (hours2 ? hmsSign + hours2 + "H" : "") + (minutes2 ? hmsSign + minutes2 + "M" : "") + (seconds2 ? hmsSign + s + "S" : "");
    }
    var proto$2 = Duration.prototype;
    proto$2.isValid = isValid$1;
    proto$2.abs = abs;
    proto$2.add = add$1;
    proto$2.subtract = subtract$1;
    proto$2.as = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds = asSeconds;
    proto$2.asMinutes = asMinutes;
    proto$2.asHours = asHours;
    proto$2.asDays = asDays;
    proto$2.asWeeks = asWeeks;
    proto$2.asMonths = asMonths;
    proto$2.asQuarters = asQuarters;
    proto$2.asYears = asYears;
    proto$2.valueOf = valueOf$1;
    proto$2._bubble = bubble;
    proto$2.clone = clone$1;
    proto$2.get = get$2;
    proto$2.milliseconds = milliseconds;
    proto$2.seconds = seconds;
    proto$2.minutes = minutes;
    proto$2.hours = hours;
    proto$2.days = days;
    proto$2.weeks = weeks;
    proto$2.months = months;
    proto$2.years = years;
    proto$2.humanize = humanize;
    proto$2.toISOString = toISOString$1;
    proto$2.toString = toISOString$1;
    proto$2.toJSON = toISOString$1;
    proto$2.locale = locale;
    proto$2.localeData = localeData;
    proto$2.toIsoString = deprecate(
      "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
      toISOString$1
    );
    proto$2.lang = lang;
    addFormatToken("X", 0, 0, "unix");
    addFormatToken("x", 0, 0, "valueOf");
    addRegexToken("x", matchSigned);
    addRegexToken("X", matchTimestamp);
    addParseToken("X", function(input, array, config2) {
      config2._d = new Date(parseFloat(input) * 1e3);
    });
    addParseToken("x", function(input, array, config2) {
      config2._d = new Date(toInt(input));
    });
    //! moment.js
    hooks.version = "2.29.4";
    setHookCallback(createLocal);
    hooks.fn = proto;
    hooks.min = min;
    hooks.max = max;
    hooks.now = now$1;
    hooks.utc = createUTC;
    hooks.unix = createUnix;
    hooks.months = listMonths;
    hooks.isDate = isDate;
    hooks.locale = getSetGlobalLocale;
    hooks.invalid = createInvalid;
    hooks.duration = createDuration;
    hooks.isMoment = isMoment;
    hooks.weekdays = listWeekdays;
    hooks.parseZone = createInZone;
    hooks.localeData = getLocale;
    hooks.isDuration = isDuration;
    hooks.monthsShort = listMonthsShort;
    hooks.weekdaysMin = listWeekdaysMin;
    hooks.defineLocale = defineLocale;
    hooks.updateLocale = updateLocale;
    hooks.locales = listLocales;
    hooks.weekdaysShort = listWeekdaysShort;
    hooks.normalizeUnits = normalizeUnits;
    hooks.relativeTimeRounding = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat = getCalendarFormat;
    hooks.prototype = proto;
    hooks.HTML5_FMT = {
      DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
      // <input type="datetime-local" />
      DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
      // <input type="datetime-local" step="1" />
      DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
      // <input type="datetime-local" step="0.001" />
      DATE: "YYYY-MM-DD",
      // <input type="date" />
      TIME: "HH:mm",
      // <input type="time" />
      TIME_SECONDS: "HH:mm:ss",
      // <input type="time" step="1" />
      TIME_MS: "HH:mm:ss.SSS",
      // <input type="time" step="0.001" />
      WEEK: "GGGG-[W]WW",
      // <input type="week" />
      MONTH: "YYYY-MM"
      // <input type="month" />
    };
    const TagActivity = () => {
      const [tagActivity, setTagActivity] = reactExports.useState([]);
      const translateEventType = (type) => {
        return EventType[type];
      };
      function calculateTimeAgo(timestamp) {
        const currentTime = hooks();
        const timeAgo = hooks(timestamp).from(currentTime);
        return timeAgo;
      }
      reactExports.useEffect(() => {
        const fetchData = async () => {
          const result = await tagActivityStore.get();
          const parsedResults = result.map((item) => {
            return JSON.parse(item);
          });
          const reversedResults = parsedResults.reverse();
          setTagActivity(reversedResults);
        };
        tagActivityStore.subscribe(fetchData);
        fetchData();
      }, []);
      const clearActivity = () => {
        tagActivityStore.clear();
        setTagActivity([]);
      };
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { fontSize: 12, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { textAlign: "right", m: 1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "small", variant: "text", color: "secondary", onClick: clearActivity, startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Delete, {}), children: "Clear Logs" }) }),
        tagActivity.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { mt: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          EmptyState,
          {
            type: "empty",
            body: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { maxWidth: 375, children: "No activity has been seen since extension activated. Please emit an event using jstag.send or refresh the page." })
          }
        ) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Stack$1, { children: tagActivity.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: item && /* @__PURE__ */ jsxRuntimeExports.jsxs(Accordion$1, { disableGutters: true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionSummary$1, { expandIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(ExpandMore, {}), "aria-controls": "panel1a-content", id: index.toString(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Stack$1,
            {
              direction: "row",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
              spacing: 2,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Chip$1, { size: "small", variant: "outlined", label: translateEventType(item.type) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: calculateTimeAgo(item.ts) })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionDetails$1, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack$1, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { p: 1, textAlign: "left", border: 0, borderRadius: 1, bgcolor: "#F3F3F3", fontSize: 10, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: item.description }) }),
            item.type === "collect-data" && /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { fontSize: 12, children: item.queryParamObj ? /* @__PURE__ */ jsxRuntimeExports.jsx(TreeDisplay, { data: item.queryParamObj, collapsed: 2 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(TreeDisplay, { data: item.parsedBodyDataObj, collapsed: 2 }) })
          ] }) })
        ] }, index) })) })
      ] });
    };
    const CustomTabPanel = (props) => {
      const { children, value, index, ...other } = props;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        Box,
        {
          p: 1,
          role: "tabpanel",
          hidden: value !== index,
          id: `simple-tabpanel-${index}`,
          "aria-labelledby": `simple-tab-${index}`,
          ...other,
          sx: { height: "calc(100vh - 185px)", overflow: "auto" },
          children: value === index && /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { children })
        }
      );
    };
    const Debugger = ({ tagIsInstalled, tagConfig, getter, setter }) => {
      const handleSetTab = (event, newValue) => {
        setter(newValue);
      };
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack$1, { alignItems: "flex-start", justifyContent: "center", height: "100%", width: "100%", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { borderBottom: 1, borderColor: "divider", width: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs$1, { value: getter, onChange: handleSetTab, textColor: "secondary", indicatorColor: "secondary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tab$1, { id: "status", label: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tab$1, { id: "configuration", disabled: !tagIsInstalled, label: "Configuration" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tab$1, { id: "activity", disabled: !tagIsInstalled, label: "Activity" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { flexGrow: 1, width: "100%", overflow: "auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CustomTabPanel, { value: getter, index: 0, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TagStatus, { tagIsInstalled, tagConfig }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CustomTabPanel, { value: getter, index: 1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TagConfig, { tagConfig }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CustomTabPanel, { value: getter, index: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TagActivity, {}) })
        ] })
      ] });
    };
    const ProfileDetail = ({ profile }) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(TreeDisplay, { data: profile == null ? void 0 : profile.data, collapsed: 2 });
    };
    const stateClasses = ["checked", "disabled", "error", "focused", "focusVisible", "required", "expanded", "selected"];
    function createGenerateClassName(options = {}) {
      const {
        disableGlobal = false,
        productionPrefix = "jss",
        seed = ""
      } = options;
      const seedPrefix = seed === "" ? "" : `${seed}-`;
      let ruleCounter = 0;
      const getNextCounterId = () => {
        ruleCounter += 1;
        return ruleCounter;
      };
      return (rule, styleSheet) => {
        const name = styleSheet.options.name;
        if (name && name.indexOf("Mui") === 0 && !styleSheet.options.link && !disableGlobal) {
          if (stateClasses.indexOf(rule.key) !== -1) {
            return `Mui-${rule.key}`;
          }
          const prefix2 = `${seedPrefix}${name}-${rule.key}`;
          if (!styleSheet.options.theme[nested] || seed !== "") {
            return prefix2;
          }
          return `${prefix2}-${getNextCounterId()}`;
        }
        {
          return `${seedPrefix}${productionPrefix}${getNextCounterId()}`;
        }
      };
    }
    var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    var isBrowser = (typeof window === "undefined" ? "undefined" : _typeof$1(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof$1(document)) === "object" && document.nodeType === 9;
    function _typeof(o) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      }, _typeof(o);
    }
    function toPrimitive(t2, r) {
      if ("object" != _typeof(t2) || !t2)
        return t2;
      var e2 = t2[Symbol.toPrimitive];
      if (void 0 !== e2) {
        var i = e2.call(t2, r || "default");
        if ("object" != _typeof(i))
          return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === r ? String : Number)(t2);
    }
    function toPropertyKey(t2) {
      var i = toPrimitive(t2, "string");
      return "symbol" == _typeof(i) ? i : String(i);
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", {
        writable: false
      });
      return Constructor;
    }
    var plainObjectConstrurctor = {}.constructor;
    function cloneStyle(style2) {
      if (style2 == null || typeof style2 !== "object")
        return style2;
      if (Array.isArray(style2))
        return style2.map(cloneStyle);
      if (style2.constructor !== plainObjectConstrurctor)
        return style2;
      var newStyle = {};
      for (var name in style2) {
        newStyle[name] = cloneStyle(style2[name]);
      }
      return newStyle;
    }
    function createRule(name, decl, options) {
      if (name === void 0) {
        name = "unnamed";
      }
      var jss = options.jss;
      var declCopy = cloneStyle(decl);
      var rule = jss.plugins.onCreateRule(name, declCopy, options);
      if (rule)
        return rule;
      if (name[0] === "@")
        ;
      return null;
    }
    var join = function join2(value, by) {
      var result = "";
      for (var i = 0; i < value.length; i++) {
        if (value[i] === "!important")
          break;
        if (result)
          result += by;
        result += value[i];
      }
      return result;
    };
    var toCssValue = function toCssValue2(value) {
      if (!Array.isArray(value))
        return value;
      var cssValue = "";
      if (Array.isArray(value[0])) {
        for (var i = 0; i < value.length; i++) {
          if (value[i] === "!important")
            break;
          if (cssValue)
            cssValue += ", ";
          cssValue += join(value[i], " ");
        }
      } else
        cssValue = join(value, ", ");
      if (value[value.length - 1] === "!important") {
        cssValue += " !important";
      }
      return cssValue;
    };
    function getWhitespaceSymbols(options) {
      if (options && options.format === false) {
        return {
          linebreak: "",
          space: ""
        };
      }
      return {
        linebreak: "\n",
        space: " "
      };
    }
    function indentStr(str, indent) {
      var result = "";
      for (var index2 = 0; index2 < indent; index2++) {
        result += "  ";
      }
      return result + str;
    }
    function toCss(selector, style2, options) {
      if (options === void 0) {
        options = {};
      }
      var result = "";
      if (!style2)
        return result;
      var _options = options, _options$indent = _options.indent, indent = _options$indent === void 0 ? 0 : _options$indent;
      var fallbacks = style2.fallbacks;
      if (options.format === false) {
        indent = -Infinity;
      }
      var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak, space = _getWhitespaceSymbols.space;
      if (selector)
        indent++;
      if (fallbacks) {
        if (Array.isArray(fallbacks)) {
          for (var index2 = 0; index2 < fallbacks.length; index2++) {
            var fallback = fallbacks[index2];
            for (var prop in fallback) {
              var value = fallback[prop];
              if (value != null) {
                if (result)
                  result += linebreak;
                result += indentStr(prop + ":" + space + toCssValue(value) + ";", indent);
              }
            }
          }
        } else {
          for (var _prop in fallbacks) {
            var _value = fallbacks[_prop];
            if (_value != null) {
              if (result)
                result += linebreak;
              result += indentStr(_prop + ":" + space + toCssValue(_value) + ";", indent);
            }
          }
        }
      }
      for (var _prop2 in style2) {
        var _value2 = style2[_prop2];
        if (_value2 != null && _prop2 !== "fallbacks") {
          if (result)
            result += linebreak;
          result += indentStr(_prop2 + ":" + space + toCssValue(_value2) + ";", indent);
        }
      }
      if (!result && !options.allowEmpty)
        return result;
      if (!selector)
        return result;
      indent--;
      if (result)
        result = "" + linebreak + result + linebreak;
      return indentStr("" + selector + space + "{" + result, indent) + indentStr("}", indent);
    }
    var escapeRegex = /([[\].#*$><+~=|^:(),"'`\s])/g;
    var nativeEscape = typeof CSS !== "undefined" && CSS.escape;
    var escape = function(str) {
      return nativeEscape ? nativeEscape(str) : str.replace(escapeRegex, "\\$1");
    };
    var BaseStyleRule = /* @__PURE__ */ function() {
      function BaseStyleRule2(key2, style2, options) {
        this.type = "style";
        this.isProcessed = false;
        var sheet = options.sheet, Renderer = options.Renderer;
        this.key = key2;
        this.options = options;
        this.style = style2;
        if (sheet)
          this.renderer = sheet.renderer;
        else if (Renderer)
          this.renderer = new Renderer();
      }
      var _proto = BaseStyleRule2.prototype;
      _proto.prop = function prop(name, value, options) {
        if (value === void 0)
          return this.style[name];
        var force = options ? options.force : false;
        if (!force && this.style[name] === value)
          return this;
        var newValue = value;
        if (!options || options.process !== false) {
          newValue = this.options.jss.plugins.onChangeValue(value, name, this);
        }
        var isEmpty2 = newValue == null || newValue === false;
        var isDefined = name in this.style;
        if (isEmpty2 && !isDefined && !force)
          return this;
        var remove = isEmpty2 && isDefined;
        if (remove)
          delete this.style[name];
        else
          this.style[name] = newValue;
        if (this.renderable && this.renderer) {
          if (remove)
            this.renderer.removeProperty(this.renderable, name);
          else
            this.renderer.setProperty(this.renderable, name, newValue);
          return this;
        }
        var sheet = this.options.sheet;
        if (sheet && sheet.attached)
          ;
        return this;
      };
      return BaseStyleRule2;
    }();
    var StyleRule = /* @__PURE__ */ function(_BaseStyleRule) {
      _inheritsLoose(StyleRule2, _BaseStyleRule);
      function StyleRule2(key2, style2, options) {
        var _this;
        _this = _BaseStyleRule.call(this, key2, style2, options) || this;
        var selector = options.selector, scoped = options.scoped, sheet = options.sheet, generateId = options.generateId;
        if (selector) {
          _this.selectorText = selector;
        } else if (scoped !== false) {
          _this.id = generateId(_assertThisInitialized(_assertThisInitialized(_this)), sheet);
          _this.selectorText = "." + escape(_this.id);
        }
        return _this;
      }
      var _proto2 = StyleRule2.prototype;
      _proto2.applyTo = function applyTo(renderable) {
        var renderer = this.renderer;
        if (renderer) {
          var json = this.toJSON();
          for (var prop in json) {
            renderer.setProperty(renderable, prop, json[prop]);
          }
        }
        return this;
      };
      _proto2.toJSON = function toJSON2() {
        var json = {};
        for (var prop in this.style) {
          var value = this.style[prop];
          if (typeof value !== "object")
            json[prop] = value;
          else if (Array.isArray(value))
            json[prop] = toCssValue(value);
        }
        return json;
      };
      _proto2.toString = function toString2(options) {
        var sheet = this.options.sheet;
        var link = sheet ? sheet.options.link : false;
        var opts = link ? _extends$2({}, options, {
          allowEmpty: true
        }) : options;
        return toCss(this.selectorText, this.style, opts);
      };
      _createClass(StyleRule2, [{
        key: "selector",
        set: function set2(selector) {
          if (selector === this.selectorText)
            return;
          this.selectorText = selector;
          var renderer = this.renderer, renderable = this.renderable;
          if (!renderable || !renderer)
            return;
          var hasChanged = renderer.setSelector(renderable, selector);
          if (!hasChanged) {
            renderer.replaceRule(renderable, this);
          }
        },
        get: function get2() {
          return this.selectorText;
        }
      }]);
      return StyleRule2;
    }(BaseStyleRule);
    var pluginStyleRule = {
      onCreateRule: function onCreateRule(key2, style2, options) {
        if (key2[0] === "@" || options.parent && options.parent.type === "keyframes") {
          return null;
        }
        return new StyleRule(key2, style2, options);
      }
    };
    var defaultToStringOptions = {
      indent: 1,
      children: true
    };
    var atRegExp = /@([\w-]+)/;
    var ConditionalRule = /* @__PURE__ */ function() {
      function ConditionalRule2(key2, styles2, options) {
        this.type = "conditional";
        this.isProcessed = false;
        this.key = key2;
        var atMatch = key2.match(atRegExp);
        this.at = atMatch ? atMatch[1] : "unknown";
        this.query = options.name || "@" + this.at;
        this.options = options;
        this.rules = new RuleList(_extends$2({}, options, {
          parent: this
        }));
        for (var name in styles2) {
          this.rules.add(name, styles2[name]);
        }
        this.rules.process();
      }
      var _proto = ConditionalRule2.prototype;
      _proto.getRule = function getRule(name) {
        return this.rules.get(name);
      };
      _proto.indexOf = function indexOf2(rule) {
        return this.rules.indexOf(rule);
      };
      _proto.addRule = function addRule(name, style2, options) {
        var rule = this.rules.add(name, style2, options);
        if (!rule)
          return null;
        this.options.jss.plugins.onProcessRule(rule);
        return rule;
      };
      _proto.replaceRule = function replaceRule(name, style2, options) {
        var newRule = this.rules.replace(name, style2, options);
        if (newRule)
          this.options.jss.plugins.onProcessRule(newRule);
        return newRule;
      };
      _proto.toString = function toString2(options) {
        if (options === void 0) {
          options = defaultToStringOptions;
        }
        var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak;
        if (options.indent == null)
          options.indent = defaultToStringOptions.indent;
        if (options.children == null)
          options.children = defaultToStringOptions.children;
        if (options.children === false) {
          return this.query + " {}";
        }
        var children = this.rules.toString(options);
        return children ? this.query + " {" + linebreak + children + linebreak + "}" : "";
      };
      return ConditionalRule2;
    }();
    var keyRegExp = /@container|@media|@supports\s+/;
    var pluginConditionalRule = {
      onCreateRule: function onCreateRule2(key2, styles2, options) {
        return keyRegExp.test(key2) ? new ConditionalRule(key2, styles2, options) : null;
      }
    };
    var defaultToStringOptions$1 = {
      indent: 1,
      children: true
    };
    var nameRegExp = /@keyframes\s+([\w-]+)/;
    var KeyframesRule = /* @__PURE__ */ function() {
      function KeyframesRule2(key2, frames, options) {
        this.type = "keyframes";
        this.at = "@keyframes";
        this.isProcessed = false;
        var nameMatch = key2.match(nameRegExp);
        if (nameMatch && nameMatch[1]) {
          this.name = nameMatch[1];
        } else {
          this.name = "noname";
        }
        this.key = this.type + "-" + this.name;
        this.options = options;
        var scoped = options.scoped, sheet = options.sheet, generateId = options.generateId;
        this.id = scoped === false ? this.name : escape(generateId(this, sheet));
        this.rules = new RuleList(_extends$2({}, options, {
          parent: this
        }));
        for (var name in frames) {
          this.rules.add(name, frames[name], _extends$2({}, options, {
            parent: this
          }));
        }
        this.rules.process();
      }
      var _proto = KeyframesRule2.prototype;
      _proto.toString = function toString2(options) {
        if (options === void 0) {
          options = defaultToStringOptions$1;
        }
        var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak;
        if (options.indent == null)
          options.indent = defaultToStringOptions$1.indent;
        if (options.children == null)
          options.children = defaultToStringOptions$1.children;
        if (options.children === false) {
          return this.at + " " + this.id + " {}";
        }
        var children = this.rules.toString(options);
        if (children)
          children = "" + linebreak + children + linebreak;
        return this.at + " " + this.id + " {" + children + "}";
      };
      return KeyframesRule2;
    }();
    var keyRegExp$1 = /@keyframes\s+/;
    var refRegExp$1 = /\$([\w-]+)/g;
    var findReferencedKeyframe = function findReferencedKeyframe2(val, keyframes2) {
      if (typeof val === "string") {
        return val.replace(refRegExp$1, function(match, name) {
          if (name in keyframes2) {
            return keyframes2[name];
          }
          return match;
        });
      }
      return val;
    };
    var replaceRef = function replaceRef2(style2, prop, keyframes2) {
      var value = style2[prop];
      var refKeyframe = findReferencedKeyframe(value, keyframes2);
      if (refKeyframe !== value) {
        style2[prop] = refKeyframe;
      }
    };
    var pluginKeyframesRule = {
      onCreateRule: function onCreateRule3(key2, frames, options) {
        return typeof key2 === "string" && keyRegExp$1.test(key2) ? new KeyframesRule(key2, frames, options) : null;
      },
      // Animation name ref replacer.
      onProcessStyle: function onProcessStyle(style2, rule, sheet) {
        if (rule.type !== "style" || !sheet)
          return style2;
        if ("animation-name" in style2)
          replaceRef(style2, "animation-name", sheet.keyframes);
        if ("animation" in style2)
          replaceRef(style2, "animation", sheet.keyframes);
        return style2;
      },
      onChangeValue: function onChangeValue(val, prop, rule) {
        var sheet = rule.options.sheet;
        if (!sheet) {
          return val;
        }
        switch (prop) {
          case "animation":
            return findReferencedKeyframe(val, sheet.keyframes);
          case "animation-name":
            return findReferencedKeyframe(val, sheet.keyframes);
          default:
            return val;
        }
      }
    };
    var KeyframeRule = /* @__PURE__ */ function(_BaseStyleRule) {
      _inheritsLoose(KeyframeRule2, _BaseStyleRule);
      function KeyframeRule2() {
        return _BaseStyleRule.apply(this, arguments) || this;
      }
      var _proto = KeyframeRule2.prototype;
      _proto.toString = function toString2(options) {
        var sheet = this.options.sheet;
        var link = sheet ? sheet.options.link : false;
        var opts = link ? _extends$2({}, options, {
          allowEmpty: true
        }) : options;
        return toCss(this.key, this.style, opts);
      };
      return KeyframeRule2;
    }(BaseStyleRule);
    var pluginKeyframeRule = {
      onCreateRule: function onCreateRule4(key2, style2, options) {
        if (options.parent && options.parent.type === "keyframes") {
          return new KeyframeRule(key2, style2, options);
        }
        return null;
      }
    };
    var FontFaceRule = /* @__PURE__ */ function() {
      function FontFaceRule2(key2, style2, options) {
        this.type = "font-face";
        this.at = "@font-face";
        this.isProcessed = false;
        this.key = key2;
        this.style = style2;
        this.options = options;
      }
      var _proto = FontFaceRule2.prototype;
      _proto.toString = function toString2(options) {
        var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak;
        if (Array.isArray(this.style)) {
          var str = "";
          for (var index2 = 0; index2 < this.style.length; index2++) {
            str += toCss(this.at, this.style[index2]);
            if (this.style[index2 + 1])
              str += linebreak;
          }
          return str;
        }
        return toCss(this.at, this.style, options);
      };
      return FontFaceRule2;
    }();
    var keyRegExp$2 = /@font-face/;
    var pluginFontFaceRule = {
      onCreateRule: function onCreateRule5(key2, style2, options) {
        return keyRegExp$2.test(key2) ? new FontFaceRule(key2, style2, options) : null;
      }
    };
    var ViewportRule = /* @__PURE__ */ function() {
      function ViewportRule2(key2, style2, options) {
        this.type = "viewport";
        this.at = "@viewport";
        this.isProcessed = false;
        this.key = key2;
        this.style = style2;
        this.options = options;
      }
      var _proto = ViewportRule2.prototype;
      _proto.toString = function toString2(options) {
        return toCss(this.key, this.style, options);
      };
      return ViewportRule2;
    }();
    var pluginViewportRule = {
      onCreateRule: function onCreateRule6(key2, style2, options) {
        return key2 === "@viewport" || key2 === "@-ms-viewport" ? new ViewportRule(key2, style2, options) : null;
      }
    };
    var SimpleRule = /* @__PURE__ */ function() {
      function SimpleRule2(key2, value, options) {
        this.type = "simple";
        this.isProcessed = false;
        this.key = key2;
        this.value = value;
        this.options = options;
      }
      var _proto = SimpleRule2.prototype;
      _proto.toString = function toString2(options) {
        if (Array.isArray(this.value)) {
          var str = "";
          for (var index2 = 0; index2 < this.value.length; index2++) {
            str += this.key + " " + this.value[index2] + ";";
            if (this.value[index2 + 1])
              str += "\n";
          }
          return str;
        }
        return this.key + " " + this.value + ";";
      };
      return SimpleRule2;
    }();
    var keysMap = {
      "@charset": true,
      "@import": true,
      "@namespace": true
    };
    var pluginSimpleRule = {
      onCreateRule: function onCreateRule7(key2, value, options) {
        return key2 in keysMap ? new SimpleRule(key2, value, options) : null;
      }
    };
    var plugins$1 = [pluginStyleRule, pluginConditionalRule, pluginKeyframesRule, pluginKeyframeRule, pluginFontFaceRule, pluginViewportRule, pluginSimpleRule];
    var defaultUpdateOptions = {
      process: true
    };
    var forceUpdateOptions = {
      force: true,
      process: true
      /**
       * Contains rules objects and allows adding/removing etc.
       * Is used for e.g. by `StyleSheet` or `ConditionalRule`.
       */
    };
    var RuleList = /* @__PURE__ */ function() {
      function RuleList2(options) {
        this.map = {};
        this.raw = {};
        this.index = [];
        this.counter = 0;
        this.options = options;
        this.classes = options.classes;
        this.keyframes = options.keyframes;
      }
      var _proto = RuleList2.prototype;
      _proto.add = function add2(name, decl, ruleOptions) {
        var _this$options = this.options, parent = _this$options.parent, sheet = _this$options.sheet, jss = _this$options.jss, Renderer = _this$options.Renderer, generateId = _this$options.generateId, scoped = _this$options.scoped;
        var options = _extends$2({
          classes: this.classes,
          parent,
          sheet,
          jss,
          Renderer,
          generateId,
          scoped,
          name,
          keyframes: this.keyframes,
          selector: void 0
        }, ruleOptions);
        var key2 = name;
        if (name in this.raw) {
          key2 = name + "-d" + this.counter++;
        }
        this.raw[key2] = decl;
        if (key2 in this.classes) {
          options.selector = "." + escape(this.classes[key2]);
        }
        var rule = createRule(key2, decl, options);
        if (!rule)
          return null;
        this.register(rule);
        var index2 = options.index === void 0 ? this.index.length : options.index;
        this.index.splice(index2, 0, rule);
        return rule;
      };
      _proto.replace = function replace(name, decl, ruleOptions) {
        var oldRule = this.get(name);
        var oldIndex = this.index.indexOf(oldRule);
        if (oldRule) {
          this.remove(oldRule);
        }
        var options = ruleOptions;
        if (oldIndex !== -1)
          options = _extends$2({}, ruleOptions, {
            index: oldIndex
          });
        return this.add(name, decl, options);
      };
      _proto.get = function get2(nameOrSelector) {
        return this.map[nameOrSelector];
      };
      _proto.remove = function remove(rule) {
        this.unregister(rule);
        delete this.raw[rule.key];
        this.index.splice(this.index.indexOf(rule), 1);
      };
      _proto.indexOf = function indexOf2(rule) {
        return this.index.indexOf(rule);
      };
      _proto.process = function process2() {
        var plugins2 = this.options.jss.plugins;
        this.index.slice(0).forEach(plugins2.onProcessRule, plugins2);
      };
      _proto.register = function register(rule) {
        this.map[rule.key] = rule;
        if (rule instanceof StyleRule) {
          this.map[rule.selector] = rule;
          if (rule.id)
            this.classes[rule.key] = rule.id;
        } else if (rule instanceof KeyframesRule && this.keyframes) {
          this.keyframes[rule.name] = rule.id;
        }
      };
      _proto.unregister = function unregister(rule) {
        delete this.map[rule.key];
        if (rule instanceof StyleRule) {
          delete this.map[rule.selector];
          delete this.classes[rule.key];
        } else if (rule instanceof KeyframesRule) {
          delete this.keyframes[rule.name];
        }
      };
      _proto.update = function update2() {
        var name;
        var data;
        var options;
        if (typeof (arguments.length <= 0 ? void 0 : arguments[0]) === "string") {
          name = arguments.length <= 0 ? void 0 : arguments[0];
          data = arguments.length <= 1 ? void 0 : arguments[1];
          options = arguments.length <= 2 ? void 0 : arguments[2];
        } else {
          data = arguments.length <= 0 ? void 0 : arguments[0];
          options = arguments.length <= 1 ? void 0 : arguments[1];
          name = null;
        }
        if (name) {
          this.updateOne(this.get(name), data, options);
        } else {
          for (var index2 = 0; index2 < this.index.length; index2++) {
            this.updateOne(this.index[index2], data, options);
          }
        }
      };
      _proto.updateOne = function updateOne(rule, data, options) {
        if (options === void 0) {
          options = defaultUpdateOptions;
        }
        var _this$options2 = this.options, plugins2 = _this$options2.jss.plugins, sheet = _this$options2.sheet;
        if (rule.rules instanceof RuleList2) {
          rule.rules.update(data, options);
          return;
        }
        var style2 = rule.style;
        plugins2.onUpdate(data, rule, sheet, options);
        if (options.process && style2 && style2 !== rule.style) {
          plugins2.onProcessStyle(rule.style, rule, sheet);
          for (var prop in rule.style) {
            var nextValue = rule.style[prop];
            var prevValue = style2[prop];
            if (nextValue !== prevValue) {
              rule.prop(prop, nextValue, forceUpdateOptions);
            }
          }
          for (var _prop in style2) {
            var _nextValue = rule.style[_prop];
            var _prevValue = style2[_prop];
            if (_nextValue == null && _nextValue !== _prevValue) {
              rule.prop(_prop, null, forceUpdateOptions);
            }
          }
        }
      };
      _proto.toString = function toString2(options) {
        var str = "";
        var sheet = this.options.sheet;
        var link = sheet ? sheet.options.link : false;
        var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak;
        for (var index2 = 0; index2 < this.index.length; index2++) {
          var rule = this.index[index2];
          var css2 = rule.toString(options);
          if (!css2 && !link)
            continue;
          if (str)
            str += linebreak;
          str += css2;
        }
        return str;
      };
      return RuleList2;
    }();
    var StyleSheet = /* @__PURE__ */ function() {
      function StyleSheet2(styles2, options) {
        this.attached = false;
        this.deployed = false;
        this.classes = {};
        this.keyframes = {};
        this.options = _extends$2({}, options, {
          sheet: this,
          parent: this,
          classes: this.classes,
          keyframes: this.keyframes
        });
        if (options.Renderer) {
          this.renderer = new options.Renderer(this);
        }
        this.rules = new RuleList(this.options);
        for (var name in styles2) {
          this.rules.add(name, styles2[name]);
        }
        this.rules.process();
      }
      var _proto = StyleSheet2.prototype;
      _proto.attach = function attach2() {
        if (this.attached)
          return this;
        if (this.renderer)
          this.renderer.attach();
        this.attached = true;
        if (!this.deployed)
          this.deploy();
        return this;
      };
      _proto.detach = function detach2() {
        if (!this.attached)
          return this;
        if (this.renderer)
          this.renderer.detach();
        this.attached = false;
        return this;
      };
      _proto.addRule = function addRule(name, decl, options) {
        var queue = this.queue;
        if (this.attached && !queue)
          this.queue = [];
        var rule = this.rules.add(name, decl, options);
        if (!rule)
          return null;
        this.options.jss.plugins.onProcessRule(rule);
        if (this.attached) {
          if (!this.deployed)
            return rule;
          if (queue)
            queue.push(rule);
          else {
            this.insertRule(rule);
            if (this.queue) {
              this.queue.forEach(this.insertRule, this);
              this.queue = void 0;
            }
          }
          return rule;
        }
        this.deployed = false;
        return rule;
      };
      _proto.replaceRule = function replaceRule(nameOrSelector, decl, options) {
        var oldRule = this.rules.get(nameOrSelector);
        if (!oldRule)
          return this.addRule(nameOrSelector, decl, options);
        var newRule = this.rules.replace(nameOrSelector, decl, options);
        if (newRule) {
          this.options.jss.plugins.onProcessRule(newRule);
        }
        if (this.attached) {
          if (!this.deployed)
            return newRule;
          if (this.renderer) {
            if (!newRule) {
              this.renderer.deleteRule(oldRule);
            } else if (oldRule.renderable) {
              this.renderer.replaceRule(oldRule.renderable, newRule);
            }
          }
          return newRule;
        }
        this.deployed = false;
        return newRule;
      };
      _proto.insertRule = function insertRule2(rule) {
        if (this.renderer) {
          this.renderer.insertRule(rule);
        }
      };
      _proto.addRules = function addRules(styles2, options) {
        var added = [];
        for (var name in styles2) {
          var rule = this.addRule(name, styles2[name], options);
          if (rule)
            added.push(rule);
        }
        return added;
      };
      _proto.getRule = function getRule(nameOrSelector) {
        return this.rules.get(nameOrSelector);
      };
      _proto.deleteRule = function deleteRule(name) {
        var rule = typeof name === "object" ? name : this.rules.get(name);
        if (!rule || // Style sheet was created without link: true and attached, in this case we
        // won't be able to remove the CSS rule from the DOM.
        this.attached && !rule.renderable) {
          return false;
        }
        this.rules.remove(rule);
        if (this.attached && rule.renderable && this.renderer) {
          return this.renderer.deleteRule(rule.renderable);
        }
        return true;
      };
      _proto.indexOf = function indexOf2(rule) {
        return this.rules.indexOf(rule);
      };
      _proto.deploy = function deploy() {
        if (this.renderer)
          this.renderer.deploy();
        this.deployed = true;
        return this;
      };
      _proto.update = function update2() {
        var _this$rules;
        (_this$rules = this.rules).update.apply(_this$rules, arguments);
        return this;
      };
      _proto.updateOne = function updateOne(rule, data, options) {
        this.rules.updateOne(rule, data, options);
        return this;
      };
      _proto.toString = function toString2(options) {
        return this.rules.toString(options);
      };
      return StyleSheet2;
    }();
    var PluginsRegistry = /* @__PURE__ */ function() {
      function PluginsRegistry2() {
        this.plugins = {
          internal: [],
          external: []
        };
        this.registry = {};
      }
      var _proto = PluginsRegistry2.prototype;
      _proto.onCreateRule = function onCreateRule8(name, decl, options) {
        for (var i = 0; i < this.registry.onCreateRule.length; i++) {
          var rule = this.registry.onCreateRule[i](name, decl, options);
          if (rule)
            return rule;
        }
        return null;
      };
      _proto.onProcessRule = function onProcessRule(rule) {
        if (rule.isProcessed)
          return;
        var sheet = rule.options.sheet;
        for (var i = 0; i < this.registry.onProcessRule.length; i++) {
          this.registry.onProcessRule[i](rule, sheet);
        }
        if (rule.style)
          this.onProcessStyle(rule.style, rule, sheet);
        rule.isProcessed = true;
      };
      _proto.onProcessStyle = function onProcessStyle2(style2, rule, sheet) {
        for (var i = 0; i < this.registry.onProcessStyle.length; i++) {
          rule.style = this.registry.onProcessStyle[i](rule.style, rule, sheet);
        }
      };
      _proto.onProcessSheet = function onProcessSheet(sheet) {
        for (var i = 0; i < this.registry.onProcessSheet.length; i++) {
          this.registry.onProcessSheet[i](sheet);
        }
      };
      _proto.onUpdate = function onUpdate(data, rule, sheet, options) {
        for (var i = 0; i < this.registry.onUpdate.length; i++) {
          this.registry.onUpdate[i](data, rule, sheet, options);
        }
      };
      _proto.onChangeValue = function onChangeValue2(value, prop, rule) {
        var processedValue = value;
        for (var i = 0; i < this.registry.onChangeValue.length; i++) {
          processedValue = this.registry.onChangeValue[i](processedValue, prop, rule);
        }
        return processedValue;
      };
      _proto.use = function use(newPlugin, options) {
        if (options === void 0) {
          options = {
            queue: "external"
          };
        }
        var plugins2 = this.plugins[options.queue];
        if (plugins2.indexOf(newPlugin) !== -1) {
          return;
        }
        plugins2.push(newPlugin);
        this.registry = [].concat(this.plugins.external, this.plugins.internal).reduce(function(registry, plugin) {
          for (var name in plugin) {
            if (name in registry) {
              registry[name].push(plugin[name]);
            }
          }
          return registry;
        }, {
          onCreateRule: [],
          onProcessRule: [],
          onProcessStyle: [],
          onProcessSheet: [],
          onChangeValue: [],
          onUpdate: []
        });
      };
      return PluginsRegistry2;
    }();
    var SheetsRegistry = /* @__PURE__ */ function() {
      function SheetsRegistry2() {
        this.registry = [];
      }
      var _proto = SheetsRegistry2.prototype;
      _proto.add = function add2(sheet) {
        var registry = this.registry;
        var index2 = sheet.options.index;
        if (registry.indexOf(sheet) !== -1)
          return;
        if (registry.length === 0 || index2 >= this.index) {
          registry.push(sheet);
          return;
        }
        for (var i = 0; i < registry.length; i++) {
          if (registry[i].options.index > index2) {
            registry.splice(i, 0, sheet);
            return;
          }
        }
      };
      _proto.reset = function reset() {
        this.registry = [];
      };
      _proto.remove = function remove(sheet) {
        var index2 = this.registry.indexOf(sheet);
        this.registry.splice(index2, 1);
      };
      _proto.toString = function toString2(_temp) {
        var _ref = _temp === void 0 ? {} : _temp, attached = _ref.attached, options = _objectWithoutPropertiesLoose(_ref, ["attached"]);
        var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak;
        var css2 = "";
        for (var i = 0; i < this.registry.length; i++) {
          var sheet = this.registry[i];
          if (attached != null && sheet.attached !== attached) {
            continue;
          }
          if (css2)
            css2 += linebreak;
          css2 += sheet.toString(options);
        }
        return css2;
      };
      _createClass(SheetsRegistry2, [{
        key: "index",
        /**
         * Current highest index number.
         */
        get: function get2() {
          return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
        }
      }]);
      return SheetsRegistry2;
    }();
    var sheets = new SheetsRegistry();
    var globalThis$1 = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" && window.Math === Math ? window : typeof self !== "undefined" && self.Math === Math ? self : Function("return this")();
    var ns = "2f1acc6c3a606b082e5eef5e54414ffb";
    if (globalThis$1[ns] == null)
      globalThis$1[ns] = 0;
    var moduleId = globalThis$1[ns]++;
    var createGenerateId = function createGenerateId2(options) {
      if (options === void 0) {
        options = {};
      }
      var ruleCounter = 0;
      var generateId = function generateId2(rule, sheet) {
        ruleCounter += 1;
        var jssId = "";
        var prefix2 = "";
        if (sheet) {
          if (sheet.options.classNamePrefix) {
            prefix2 = sheet.options.classNamePrefix;
          }
          if (sheet.options.jss.id != null) {
            jssId = String(sheet.options.jss.id);
          }
        }
        if (options.minify) {
          return "" + (prefix2 || "c") + moduleId + jssId + ruleCounter;
        }
        return prefix2 + rule.key + "-" + moduleId + (jssId ? "-" + jssId : "") + "-" + ruleCounter;
      };
      return generateId;
    };
    var memoize = function memoize2(fn) {
      var value;
      return function() {
        if (!value)
          value = fn();
        return value;
      };
    };
    var getPropertyValue = function getPropertyValue2(cssRule, prop) {
      try {
        if (cssRule.attributeStyleMap) {
          return cssRule.attributeStyleMap.get(prop);
        }
        return cssRule.style.getPropertyValue(prop);
      } catch (err) {
        return "";
      }
    };
    var setProperty = function setProperty2(cssRule, prop, value) {
      try {
        var cssValue = value;
        if (Array.isArray(value)) {
          cssValue = toCssValue(value);
        }
        if (cssRule.attributeStyleMap) {
          cssRule.attributeStyleMap.set(prop, cssValue);
        } else {
          var indexOfImportantFlag = cssValue ? cssValue.indexOf("!important") : -1;
          var cssValueWithoutImportantFlag = indexOfImportantFlag > -1 ? cssValue.substr(0, indexOfImportantFlag - 1) : cssValue;
          cssRule.style.setProperty(prop, cssValueWithoutImportantFlag, indexOfImportantFlag > -1 ? "important" : "");
        }
      } catch (err) {
        return false;
      }
      return true;
    };
    var removeProperty = function removeProperty2(cssRule, prop) {
      try {
        if (cssRule.attributeStyleMap) {
          cssRule.attributeStyleMap.delete(prop);
        } else {
          cssRule.style.removeProperty(prop);
        }
      } catch (err) {
      }
    };
    var setSelector = function setSelector2(cssRule, selectorText) {
      cssRule.selectorText = selectorText;
      return cssRule.selectorText === selectorText;
    };
    var getHead = memoize(function() {
      return document.querySelector("head");
    });
    function findHigherSheet(registry, options) {
      for (var i = 0; i < registry.length; i++) {
        var sheet = registry[i];
        if (sheet.attached && sheet.options.index > options.index && sheet.options.insertionPoint === options.insertionPoint) {
          return sheet;
        }
      }
      return null;
    }
    function findHighestSheet(registry, options) {
      for (var i = registry.length - 1; i >= 0; i--) {
        var sheet = registry[i];
        if (sheet.attached && sheet.options.insertionPoint === options.insertionPoint) {
          return sheet;
        }
      }
      return null;
    }
    function findCommentNode(text) {
      var head = getHead();
      for (var i = 0; i < head.childNodes.length; i++) {
        var node = head.childNodes[i];
        if (node.nodeType === 8 && node.nodeValue.trim() === text) {
          return node;
        }
      }
      return null;
    }
    function findPrevNode(options) {
      var registry = sheets.registry;
      if (registry.length > 0) {
        var sheet = findHigherSheet(registry, options);
        if (sheet && sheet.renderer) {
          return {
            parent: sheet.renderer.element.parentNode,
            node: sheet.renderer.element
          };
        }
        sheet = findHighestSheet(registry, options);
        if (sheet && sheet.renderer) {
          return {
            parent: sheet.renderer.element.parentNode,
            node: sheet.renderer.element.nextSibling
          };
        }
      }
      var insertionPoint = options.insertionPoint;
      if (insertionPoint && typeof insertionPoint === "string") {
        var comment = findCommentNode(insertionPoint);
        if (comment) {
          return {
            parent: comment.parentNode,
            node: comment.nextSibling
          };
        }
      }
      return false;
    }
    function insertStyle(style2, options) {
      var insertionPoint = options.insertionPoint;
      var nextNode = findPrevNode(options);
      if (nextNode !== false && nextNode.parent) {
        nextNode.parent.insertBefore(style2, nextNode.node);
        return;
      }
      if (insertionPoint && typeof insertionPoint.nodeType === "number") {
        var insertionPointElement = insertionPoint;
        var parentNode = insertionPointElement.parentNode;
        if (parentNode)
          parentNode.insertBefore(style2, insertionPointElement.nextSibling);
        return;
      }
      getHead().appendChild(style2);
    }
    var getNonce = memoize(function() {
      var node = document.querySelector('meta[property="csp-nonce"]');
      return node ? node.getAttribute("content") : null;
    });
    var _insertRule = function insertRule(container, rule, index2) {
      try {
        if ("insertRule" in container) {
          container.insertRule(rule, index2);
        } else if ("appendRule" in container) {
          container.appendRule(rule);
        }
      } catch (err) {
        return false;
      }
      return container.cssRules[index2];
    };
    var getValidRuleInsertionIndex = function getValidRuleInsertionIndex2(container, index2) {
      var maxIndex = container.cssRules.length;
      if (index2 === void 0 || index2 > maxIndex) {
        return maxIndex;
      }
      return index2;
    };
    var createStyle = function createStyle2() {
      var el2 = document.createElement("style");
      el2.textContent = "\n";
      return el2;
    };
    var DomRenderer = /* @__PURE__ */ function() {
      function DomRenderer2(sheet) {
        this.getPropertyValue = getPropertyValue;
        this.setProperty = setProperty;
        this.removeProperty = removeProperty;
        this.setSelector = setSelector;
        this.hasInsertedRules = false;
        this.cssRules = [];
        if (sheet)
          sheets.add(sheet);
        this.sheet = sheet;
        var _ref = this.sheet ? this.sheet.options : {}, media = _ref.media, meta = _ref.meta, element = _ref.element;
        this.element = element || createStyle();
        this.element.setAttribute("data-jss", "");
        if (media)
          this.element.setAttribute("media", media);
        if (meta)
          this.element.setAttribute("data-meta", meta);
        var nonce = getNonce();
        if (nonce)
          this.element.setAttribute("nonce", nonce);
      }
      var _proto = DomRenderer2.prototype;
      _proto.attach = function attach2() {
        if (this.element.parentNode || !this.sheet)
          return;
        insertStyle(this.element, this.sheet.options);
        var deployed = Boolean(this.sheet && this.sheet.deployed);
        if (this.hasInsertedRules && deployed) {
          this.hasInsertedRules = false;
          this.deploy();
        }
      };
      _proto.detach = function detach2() {
        if (!this.sheet)
          return;
        var parentNode = this.element.parentNode;
        if (parentNode)
          parentNode.removeChild(this.element);
        if (this.sheet.options.link) {
          this.cssRules = [];
          this.element.textContent = "\n";
        }
      };
      _proto.deploy = function deploy() {
        var sheet = this.sheet;
        if (!sheet)
          return;
        if (sheet.options.link) {
          this.insertRules(sheet.rules);
          return;
        }
        this.element.textContent = "\n" + sheet.toString() + "\n";
      };
      _proto.insertRules = function insertRules(rules, nativeParent) {
        for (var i = 0; i < rules.index.length; i++) {
          this.insertRule(rules.index[i], i, nativeParent);
        }
      };
      _proto.insertRule = function insertRule2(rule, index2, nativeParent) {
        if (nativeParent === void 0) {
          nativeParent = this.element.sheet;
        }
        if (rule.rules) {
          var parent = rule;
          var latestNativeParent = nativeParent;
          if (rule.type === "conditional" || rule.type === "keyframes") {
            var _insertionIndex = getValidRuleInsertionIndex(nativeParent, index2);
            latestNativeParent = _insertRule(nativeParent, parent.toString({
              children: false
            }), _insertionIndex);
            if (latestNativeParent === false) {
              return false;
            }
            this.refCssRule(rule, _insertionIndex, latestNativeParent);
          }
          this.insertRules(parent.rules, latestNativeParent);
          return latestNativeParent;
        }
        var ruleStr = rule.toString();
        if (!ruleStr)
          return false;
        var insertionIndex = getValidRuleInsertionIndex(nativeParent, index2);
        var nativeRule = _insertRule(nativeParent, ruleStr, insertionIndex);
        if (nativeRule === false) {
          return false;
        }
        this.hasInsertedRules = true;
        this.refCssRule(rule, insertionIndex, nativeRule);
        return nativeRule;
      };
      _proto.refCssRule = function refCssRule(rule, index2, cssRule) {
        rule.renderable = cssRule;
        if (rule.options.parent instanceof StyleSheet) {
          this.cssRules.splice(index2, 0, cssRule);
        }
      };
      _proto.deleteRule = function deleteRule(cssRule) {
        var sheet = this.element.sheet;
        var index2 = this.indexOf(cssRule);
        if (index2 === -1)
          return false;
        sheet.deleteRule(index2);
        this.cssRules.splice(index2, 1);
        return true;
      };
      _proto.indexOf = function indexOf2(cssRule) {
        return this.cssRules.indexOf(cssRule);
      };
      _proto.replaceRule = function replaceRule(cssRule, rule) {
        var index2 = this.indexOf(cssRule);
        if (index2 === -1)
          return false;
        this.element.sheet.deleteRule(index2);
        this.cssRules.splice(index2, 1);
        return this.insertRule(rule, index2);
      };
      _proto.getRules = function getRules() {
        return this.element.sheet.cssRules;
      };
      return DomRenderer2;
    }();
    var instanceCounter = 0;
    var Jss = /* @__PURE__ */ function() {
      function Jss2(options) {
        this.id = instanceCounter++;
        this.version = "10.10.0";
        this.plugins = new PluginsRegistry();
        this.options = {
          id: {
            minify: false
          },
          createGenerateId,
          Renderer: isBrowser ? DomRenderer : null,
          plugins: []
        };
        this.generateId = createGenerateId({
          minify: false
        });
        for (var i = 0; i < plugins$1.length; i++) {
          this.plugins.use(plugins$1[i], {
            queue: "internal"
          });
        }
        this.setup(options);
      }
      var _proto = Jss2.prototype;
      _proto.setup = function setup(options) {
        if (options === void 0) {
          options = {};
        }
        if (options.createGenerateId) {
          this.options.createGenerateId = options.createGenerateId;
        }
        if (options.id) {
          this.options.id = _extends$2({}, this.options.id, options.id);
        }
        if (options.createGenerateId || options.id) {
          this.generateId = this.options.createGenerateId(this.options.id);
        }
        if (options.insertionPoint != null)
          this.options.insertionPoint = options.insertionPoint;
        if ("Renderer" in options) {
          this.options.Renderer = options.Renderer;
        }
        if (options.plugins)
          this.use.apply(this, options.plugins);
        return this;
      };
      _proto.createStyleSheet = function createStyleSheet(styles2, options) {
        if (options === void 0) {
          options = {};
        }
        var _options = options, index2 = _options.index;
        if (typeof index2 !== "number") {
          index2 = sheets.index === 0 ? 0 : sheets.index + 1;
        }
        var sheet = new StyleSheet(styles2, _extends$2({}, options, {
          jss: this,
          generateId: options.generateId || this.generateId,
          insertionPoint: this.options.insertionPoint,
          Renderer: this.options.Renderer,
          index: index2
        }));
        this.plugins.onProcessSheet(sheet);
        return sheet;
      };
      _proto.removeStyleSheet = function removeStyleSheet(sheet) {
        sheet.detach();
        sheets.remove(sheet);
        return this;
      };
      _proto.createRule = function createRule$1(name, style2, options) {
        if (style2 === void 0) {
          style2 = {};
        }
        if (options === void 0) {
          options = {};
        }
        if (typeof name === "object") {
          return this.createRule(void 0, name, style2);
        }
        var ruleOptions = _extends$2({}, options, {
          name,
          jss: this,
          Renderer: this.options.Renderer
        });
        if (!ruleOptions.generateId)
          ruleOptions.generateId = this.generateId;
        if (!ruleOptions.classes)
          ruleOptions.classes = {};
        if (!ruleOptions.keyframes)
          ruleOptions.keyframes = {};
        var rule = createRule(name, style2, ruleOptions);
        if (rule)
          this.plugins.onProcessRule(rule);
        return rule;
      };
      _proto.use = function use() {
        var _this = this;
        for (var _len = arguments.length, plugins2 = new Array(_len), _key = 0; _key < _len; _key++) {
          plugins2[_key] = arguments[_key];
        }
        plugins2.forEach(function(plugin) {
          _this.plugins.use(plugin);
        });
        return this;
      };
      return Jss2;
    }();
    var createJss = function createJss2(options) {
      return new Jss(options);
    };
    var hasCSSTOMSupport = typeof CSS === "object" && CSS != null && "number" in CSS;
    function getDynamicStyles(styles2) {
      var to2 = null;
      for (var key2 in styles2) {
        var value = styles2[key2];
        var type = typeof value;
        if (type === "function") {
          if (!to2)
            to2 = {};
          to2[key2] = value;
        } else if (type === "object" && value !== null && !Array.isArray(value)) {
          var extracted = getDynamicStyles(value);
          if (extracted) {
            if (!to2)
              to2 = {};
            to2[key2] = extracted;
          }
        }
      }
      return to2;
    }
    /**
     * A better abstraction over CSS.
     *
     * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
     * @website https://github.com/cssinjs/jss
     * @license MIT
     */
    createJss();
    var now = Date.now();
    var fnValuesNs = "fnValues" + now;
    var fnRuleNs = "fnStyle" + ++now;
    var functionPlugin = function functionPlugin2() {
      return {
        onCreateRule: function onCreateRule(name, decl, options) {
          if (typeof decl !== "function")
            return null;
          var rule = createRule(name, {}, options);
          rule[fnRuleNs] = decl;
          return rule;
        },
        onProcessStyle: function onProcessStyle(style2, rule) {
          if (fnValuesNs in rule || fnRuleNs in rule)
            return style2;
          var fnValues = {};
          for (var prop in style2) {
            var value = style2[prop];
            if (typeof value !== "function")
              continue;
            delete style2[prop];
            fnValues[prop] = value;
          }
          rule[fnValuesNs] = fnValues;
          return style2;
        },
        onUpdate: function onUpdate(data, rule, sheet, options) {
          var styleRule = rule;
          var fnRule = styleRule[fnRuleNs];
          if (fnRule) {
            styleRule.style = fnRule(data) || {};
          }
          var fnValues = styleRule[fnValuesNs];
          if (fnValues) {
            for (var _prop in fnValues) {
              styleRule.prop(_prop, fnValues[_prop](data), options);
            }
          }
        }
      };
    };
    var at = "@global";
    var atPrefix = "@global ";
    var GlobalContainerRule = /* @__PURE__ */ function() {
      function GlobalContainerRule2(key2, styles2, options) {
        this.type = "global";
        this.at = at;
        this.isProcessed = false;
        this.key = key2;
        this.options = options;
        this.rules = new RuleList(_extends$2({}, options, {
          parent: this
        }));
        for (var selector in styles2) {
          this.rules.add(selector, styles2[selector]);
        }
        this.rules.process();
      }
      var _proto = GlobalContainerRule2.prototype;
      _proto.getRule = function getRule(name) {
        return this.rules.get(name);
      };
      _proto.addRule = function addRule(name, style2, options) {
        var rule = this.rules.add(name, style2, options);
        if (rule)
          this.options.jss.plugins.onProcessRule(rule);
        return rule;
      };
      _proto.replaceRule = function replaceRule(name, style2, options) {
        var newRule = this.rules.replace(name, style2, options);
        if (newRule)
          this.options.jss.plugins.onProcessRule(newRule);
        return newRule;
      };
      _proto.indexOf = function indexOf2(rule) {
        return this.rules.indexOf(rule);
      };
      _proto.toString = function toString2(options) {
        return this.rules.toString(options);
      };
      return GlobalContainerRule2;
    }();
    var GlobalPrefixedRule = /* @__PURE__ */ function() {
      function GlobalPrefixedRule2(key2, style2, options) {
        this.type = "global";
        this.at = at;
        this.isProcessed = false;
        this.key = key2;
        this.options = options;
        var selector = key2.substr(atPrefix.length);
        this.rule = options.jss.createRule(selector, style2, _extends$2({}, options, {
          parent: this
        }));
      }
      var _proto2 = GlobalPrefixedRule2.prototype;
      _proto2.toString = function toString2(options) {
        return this.rule ? this.rule.toString(options) : "";
      };
      return GlobalPrefixedRule2;
    }();
    var separatorRegExp$1 = /\s*,\s*/g;
    function addScope(selector, scope) {
      var parts = selector.split(separatorRegExp$1);
      var scoped = "";
      for (var i = 0; i < parts.length; i++) {
        scoped += scope + " " + parts[i].trim();
        if (parts[i + 1])
          scoped += ", ";
      }
      return scoped;
    }
    function handleNestedGlobalContainerRule(rule, sheet) {
      var options = rule.options, style2 = rule.style;
      var rules = style2 ? style2[at] : null;
      if (!rules)
        return;
      for (var name in rules) {
        sheet.addRule(name, rules[name], _extends$2({}, options, {
          selector: addScope(name, rule.selector)
        }));
      }
      delete style2[at];
    }
    function handlePrefixedGlobalRule(rule, sheet) {
      var options = rule.options, style2 = rule.style;
      for (var prop in style2) {
        if (prop[0] !== "@" || prop.substr(0, at.length) !== at)
          continue;
        var selector = addScope(prop.substr(at.length), rule.selector);
        sheet.addRule(selector, style2[prop], _extends$2({}, options, {
          selector
        }));
        delete style2[prop];
      }
    }
    function jssGlobal() {
      function onCreateRule(name, styles2, options) {
        if (!name)
          return null;
        if (name === at) {
          return new GlobalContainerRule(name, styles2, options);
        }
        if (name[0] === "@" && name.substr(0, atPrefix.length) === atPrefix) {
          return new GlobalPrefixedRule(name, styles2, options);
        }
        var parent = options.parent;
        if (parent) {
          if (parent.type === "global" || parent.options.parent && parent.options.parent.type === "global") {
            options.scoped = false;
          }
        }
        if (!options.selector && options.scoped === false) {
          options.selector = name;
        }
        return null;
      }
      function onProcessRule(rule, sheet) {
        if (rule.type !== "style" || !sheet)
          return;
        handleNestedGlobalContainerRule(rule, sheet);
        handlePrefixedGlobalRule(rule, sheet);
      }
      return {
        onCreateRule,
        onProcessRule
      };
    }
    var separatorRegExp = /\s*,\s*/g;
    var parentRegExp = /&/g;
    var refRegExp = /\$([\w-]+)/g;
    function jssNested() {
      function getReplaceRef(container, sheet) {
        return function(match, key2) {
          var rule = container.getRule(key2) || sheet && sheet.getRule(key2);
          if (rule) {
            return rule.selector;
          }
          return key2;
        };
      }
      function replaceParentRefs(nestedProp, parentProp) {
        var parentSelectors = parentProp.split(separatorRegExp);
        var nestedSelectors = nestedProp.split(separatorRegExp);
        var result = "";
        for (var i = 0; i < parentSelectors.length; i++) {
          var parent = parentSelectors[i];
          for (var j = 0; j < nestedSelectors.length; j++) {
            var nested2 = nestedSelectors[j];
            if (result)
              result += ", ";
            result += nested2.indexOf("&") !== -1 ? nested2.replace(parentRegExp, parent) : parent + " " + nested2;
          }
        }
        return result;
      }
      function getOptions(rule, container, prevOptions) {
        if (prevOptions)
          return _extends$2({}, prevOptions, {
            index: prevOptions.index + 1
          });
        var nestingLevel = rule.options.nestingLevel;
        nestingLevel = nestingLevel === void 0 ? 1 : nestingLevel + 1;
        var options = _extends$2({}, rule.options, {
          nestingLevel,
          index: container.indexOf(rule) + 1
          // We don't need the parent name to be set options for chlid.
        });
        delete options.name;
        return options;
      }
      function onProcessStyle(style2, rule, sheet) {
        if (rule.type !== "style")
          return style2;
        var styleRule = rule;
        var container = styleRule.options.parent;
        var options;
        var replaceRef2;
        for (var prop in style2) {
          var isNested = prop.indexOf("&") !== -1;
          var isNestedConditional = prop[0] === "@";
          if (!isNested && !isNestedConditional)
            continue;
          options = getOptions(styleRule, container, options);
          if (isNested) {
            var selector = replaceParentRefs(prop, styleRule.selector);
            if (!replaceRef2)
              replaceRef2 = getReplaceRef(container, sheet);
            selector = selector.replace(refRegExp, replaceRef2);
            var name = styleRule.key + "-" + prop;
            if ("replaceRule" in container) {
              container.replaceRule(name, style2[prop], _extends$2({}, options, {
                selector
              }));
            } else {
              container.addRule(name, style2[prop], _extends$2({}, options, {
                selector
              }));
            }
          } else if (isNestedConditional) {
            container.addRule(prop, {}, options).addRule(styleRule.key, style2[prop], {
              selector: styleRule.selector
            });
          }
          delete style2[prop];
        }
        return style2;
      }
      return {
        onProcessStyle
      };
    }
    var uppercasePattern = /[A-Z]/g;
    var msPattern = /^ms-/;
    var cache$2 = {};
    function toHyphenLower(match) {
      return "-" + match.toLowerCase();
    }
    function hyphenateStyleName(name) {
      if (cache$2.hasOwnProperty(name)) {
        return cache$2[name];
      }
      var hName = name.replace(uppercasePattern, toHyphenLower);
      return cache$2[name] = msPattern.test(hName) ? "-" + hName : hName;
    }
    function convertCase(style2) {
      var converted = {};
      for (var prop in style2) {
        var key2 = prop.indexOf("--") === 0 ? prop : hyphenateStyleName(prop);
        converted[key2] = style2[prop];
      }
      if (style2.fallbacks) {
        if (Array.isArray(style2.fallbacks))
          converted.fallbacks = style2.fallbacks.map(convertCase);
        else
          converted.fallbacks = convertCase(style2.fallbacks);
      }
      return converted;
    }
    function camelCase() {
      function onProcessStyle(style2) {
        if (Array.isArray(style2)) {
          for (var index = 0; index < style2.length; index++) {
            style2[index] = convertCase(style2[index]);
          }
          return style2;
        }
        return convertCase(style2);
      }
      function onChangeValue(value, prop, rule) {
        if (prop.indexOf("--") === 0) {
          return value;
        }
        var hyphenatedProp = hyphenateStyleName(prop);
        if (prop === hyphenatedProp)
          return value;
        rule.prop(hyphenatedProp, value);
        return null;
      }
      return {
        onProcessStyle,
        onChangeValue
      };
    }
    var px = hasCSSTOMSupport && CSS ? CSS.px : "px";
    var ms = hasCSSTOMSupport && CSS ? CSS.ms : "ms";
    var percent = hasCSSTOMSupport && CSS ? CSS.percent : "%";
    var defaultUnits = {
      // Animation properties
      "animation-delay": ms,
      "animation-duration": ms,
      // Background properties
      "background-position": px,
      "background-position-x": px,
      "background-position-y": px,
      "background-size": px,
      // Border Properties
      border: px,
      "border-bottom": px,
      "border-bottom-left-radius": px,
      "border-bottom-right-radius": px,
      "border-bottom-width": px,
      "border-left": px,
      "border-left-width": px,
      "border-radius": px,
      "border-right": px,
      "border-right-width": px,
      "border-top": px,
      "border-top-left-radius": px,
      "border-top-right-radius": px,
      "border-top-width": px,
      "border-width": px,
      "border-block": px,
      "border-block-end": px,
      "border-block-end-width": px,
      "border-block-start": px,
      "border-block-start-width": px,
      "border-block-width": px,
      "border-inline": px,
      "border-inline-end": px,
      "border-inline-end-width": px,
      "border-inline-start": px,
      "border-inline-start-width": px,
      "border-inline-width": px,
      "border-start-start-radius": px,
      "border-start-end-radius": px,
      "border-end-start-radius": px,
      "border-end-end-radius": px,
      // Margin properties
      margin: px,
      "margin-bottom": px,
      "margin-left": px,
      "margin-right": px,
      "margin-top": px,
      "margin-block": px,
      "margin-block-end": px,
      "margin-block-start": px,
      "margin-inline": px,
      "margin-inline-end": px,
      "margin-inline-start": px,
      // Padding properties
      padding: px,
      "padding-bottom": px,
      "padding-left": px,
      "padding-right": px,
      "padding-top": px,
      "padding-block": px,
      "padding-block-end": px,
      "padding-block-start": px,
      "padding-inline": px,
      "padding-inline-end": px,
      "padding-inline-start": px,
      // Mask properties
      "mask-position-x": px,
      "mask-position-y": px,
      "mask-size": px,
      // Width and height properties
      height: px,
      width: px,
      "min-height": px,
      "max-height": px,
      "min-width": px,
      "max-width": px,
      // Position properties
      bottom: px,
      left: px,
      top: px,
      right: px,
      inset: px,
      "inset-block": px,
      "inset-block-end": px,
      "inset-block-start": px,
      "inset-inline": px,
      "inset-inline-end": px,
      "inset-inline-start": px,
      // Shadow properties
      "box-shadow": px,
      "text-shadow": px,
      // Column properties
      "column-gap": px,
      "column-rule": px,
      "column-rule-width": px,
      "column-width": px,
      // Font and text properties
      "font-size": px,
      "font-size-delta": px,
      "letter-spacing": px,
      "text-decoration-thickness": px,
      "text-indent": px,
      "text-stroke": px,
      "text-stroke-width": px,
      "word-spacing": px,
      // Motion properties
      motion: px,
      "motion-offset": px,
      // Outline properties
      outline: px,
      "outline-offset": px,
      "outline-width": px,
      // Perspective properties
      perspective: px,
      "perspective-origin-x": percent,
      "perspective-origin-y": percent,
      // Transform properties
      "transform-origin": percent,
      "transform-origin-x": percent,
      "transform-origin-y": percent,
      "transform-origin-z": percent,
      // Transition properties
      "transition-delay": ms,
      "transition-duration": ms,
      // Alignment properties
      "vertical-align": px,
      "flex-basis": px,
      // Some random properties
      "shape-margin": px,
      size: px,
      gap: px,
      // Grid properties
      grid: px,
      "grid-gap": px,
      "row-gap": px,
      "grid-row-gap": px,
      "grid-column-gap": px,
      "grid-template-rows": px,
      "grid-template-columns": px,
      "grid-auto-rows": px,
      "grid-auto-columns": px,
      // Not existing properties.
      // Used to avoid issues with jss-plugin-expand integration.
      "box-shadow-x": px,
      "box-shadow-y": px,
      "box-shadow-blur": px,
      "box-shadow-spread": px,
      "font-line-height": px,
      "text-shadow-x": px,
      "text-shadow-y": px,
      "text-shadow-blur": px
    };
    function addCamelCasedVersion(obj) {
      var regExp2 = /(-[a-z])/g;
      var replace = function replace2(str) {
        return str[1].toUpperCase();
      };
      var newObj = {};
      for (var key2 in obj) {
        newObj[key2] = obj[key2];
        newObj[key2.replace(regExp2, replace)] = obj[key2];
      }
      return newObj;
    }
    var units = addCamelCasedVersion(defaultUnits);
    function iterate(prop, value, options) {
      if (value == null)
        return value;
      if (Array.isArray(value)) {
        for (var i = 0; i < value.length; i++) {
          value[i] = iterate(prop, value[i], options);
        }
      } else if (typeof value === "object") {
        if (prop === "fallbacks") {
          for (var innerProp in value) {
            value[innerProp] = iterate(innerProp, value[innerProp], options);
          }
        } else {
          for (var _innerProp in value) {
            value[_innerProp] = iterate(prop + "-" + _innerProp, value[_innerProp], options);
          }
        }
      } else if (typeof value === "number" && isNaN(value) === false) {
        var unit = options[prop] || units[prop];
        if (unit && !(value === 0 && unit === px)) {
          return typeof unit === "function" ? unit(value).toString() : "" + value + unit;
        }
        return value.toString();
      }
      return value;
    }
    function defaultUnit(options) {
      if (options === void 0) {
        options = {};
      }
      var camelCasedOptions = addCamelCasedVersion(options);
      function onProcessStyle(style2, rule) {
        if (rule.type !== "style")
          return style2;
        for (var prop in style2) {
          style2[prop] = iterate(prop, style2[prop], camelCasedOptions);
        }
        return style2;
      }
      function onChangeValue(value, prop) {
        return iterate(prop, value, camelCasedOptions);
      }
      return {
        onProcessStyle,
        onChangeValue
      };
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray(arr);
    }
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n2 = Object.prototype.toString.call(o).slice(8, -1);
      if (n2 === "Object" && o.constructor)
        n2 = o.constructor.name;
      if (n2 === "Map" || n2 === "Set")
        return Array.from(o);
      if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return _arrayLikeToArray(o, minLen);
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    var js = "";
    var css = "";
    var vendor = "";
    var browser = "";
    var isTouch = isBrowser && "ontouchstart" in document.documentElement;
    if (isBrowser) {
      var jsCssMap = {
        Moz: "-moz-",
        ms: "-ms-",
        O: "-o-",
        Webkit: "-webkit-"
      };
      var _document$createEleme = document.createElement("p"), style = _document$createEleme.style;
      var testProp = "Transform";
      for (var key in jsCssMap) {
        if (key + testProp in style) {
          js = key;
          css = jsCssMap[key];
          break;
        }
      }
      if (js === "Webkit" && "msHyphens" in style) {
        js = "ms";
        css = jsCssMap.ms;
        browser = "edge";
      }
      if (js === "Webkit" && "-apple-trailing-word" in style) {
        vendor = "apple";
      }
    }
    var prefix = {
      js,
      css,
      vendor,
      browser,
      isTouch
    };
    function supportedKeyframes(key2) {
      if (key2[1] === "-")
        return key2;
      if (prefix.js === "ms")
        return key2;
      return "@" + prefix.css + "keyframes" + key2.substr(10);
    }
    var appearence = {
      noPrefill: ["appearance"],
      supportedProperty: function supportedProperty(prop) {
        if (prop !== "appearance")
          return false;
        if (prefix.js === "ms")
          return "-webkit-" + prop;
        return prefix.css + prop;
      }
    };
    var colorAdjust = {
      noPrefill: ["color-adjust"],
      supportedProperty: function supportedProperty2(prop) {
        if (prop !== "color-adjust")
          return false;
        if (prefix.js === "Webkit")
          return prefix.css + "print-" + prop;
        return prop;
      }
    };
    var regExp = /[-\s]+(.)?/g;
    function toUpper(match, c2) {
      return c2 ? c2.toUpperCase() : "";
    }
    function camelize(str) {
      return str.replace(regExp, toUpper);
    }
    function pascalize(str) {
      return camelize("-" + str);
    }
    var mask = {
      noPrefill: ["mask"],
      supportedProperty: function supportedProperty3(prop, style2) {
        if (!/^mask/.test(prop))
          return false;
        if (prefix.js === "Webkit") {
          var longhand = "mask-image";
          if (camelize(longhand) in style2) {
            return prop;
          }
          if (prefix.js + pascalize(longhand) in style2) {
            return prefix.css + prop;
          }
        }
        return prop;
      }
    };
    var textOrientation = {
      noPrefill: ["text-orientation"],
      supportedProperty: function supportedProperty4(prop) {
        if (prop !== "text-orientation")
          return false;
        if (prefix.vendor === "apple" && !prefix.isTouch) {
          return prefix.css + prop;
        }
        return prop;
      }
    };
    var transform = {
      noPrefill: ["transform"],
      supportedProperty: function supportedProperty5(prop, style2, options) {
        if (prop !== "transform")
          return false;
        if (options.transform) {
          return prop;
        }
        return prefix.css + prop;
      }
    };
    var transition = {
      noPrefill: ["transition"],
      supportedProperty: function supportedProperty6(prop, style2, options) {
        if (prop !== "transition")
          return false;
        if (options.transition) {
          return prop;
        }
        return prefix.css + prop;
      }
    };
    var writingMode = {
      noPrefill: ["writing-mode"],
      supportedProperty: function supportedProperty7(prop) {
        if (prop !== "writing-mode")
          return false;
        if (prefix.js === "Webkit" || prefix.js === "ms" && prefix.browser !== "edge") {
          return prefix.css + prop;
        }
        return prop;
      }
    };
    var userSelect = {
      noPrefill: ["user-select"],
      supportedProperty: function supportedProperty8(prop) {
        if (prop !== "user-select")
          return false;
        if (prefix.js === "Moz" || prefix.js === "ms" || prefix.vendor === "apple") {
          return prefix.css + prop;
        }
        return prop;
      }
    };
    var breakPropsOld = {
      supportedProperty: function supportedProperty9(prop, style2) {
        if (!/^break-/.test(prop))
          return false;
        if (prefix.js === "Webkit") {
          var jsProp = "WebkitColumn" + pascalize(prop);
          return jsProp in style2 ? prefix.css + "column-" + prop : false;
        }
        if (prefix.js === "Moz") {
          var _jsProp = "page" + pascalize(prop);
          return _jsProp in style2 ? "page-" + prop : false;
        }
        return false;
      }
    };
    var inlineLogicalOld = {
      supportedProperty: function supportedProperty10(prop, style2) {
        if (!/^(border|margin|padding)-inline/.test(prop))
          return false;
        if (prefix.js === "Moz")
          return prop;
        var newProp = prop.replace("-inline", "");
        return prefix.js + pascalize(newProp) in style2 ? prefix.css + newProp : false;
      }
    };
    var unprefixed = {
      supportedProperty: function supportedProperty11(prop, style2) {
        return camelize(prop) in style2 ? prop : false;
      }
    };
    var prefixed = {
      supportedProperty: function supportedProperty12(prop, style2) {
        var pascalized = pascalize(prop);
        if (prop[0] === "-")
          return prop;
        if (prop[0] === "-" && prop[1] === "-")
          return prop;
        if (prefix.js + pascalized in style2)
          return prefix.css + prop;
        if (prefix.js !== "Webkit" && "Webkit" + pascalized in style2)
          return "-webkit-" + prop;
        return false;
      }
    };
    var scrollSnap = {
      supportedProperty: function supportedProperty13(prop) {
        if (prop.substring(0, 11) !== "scroll-snap")
          return false;
        if (prefix.js === "ms") {
          return "" + prefix.css + prop;
        }
        return prop;
      }
    };
    var overscrollBehavior = {
      supportedProperty: function supportedProperty14(prop) {
        if (prop !== "overscroll-behavior")
          return false;
        if (prefix.js === "ms") {
          return prefix.css + "scroll-chaining";
        }
        return prop;
      }
    };
    var propMap = {
      "flex-grow": "flex-positive",
      "flex-shrink": "flex-negative",
      "flex-basis": "flex-preferred-size",
      "justify-content": "flex-pack",
      order: "flex-order",
      "align-items": "flex-align",
      "align-content": "flex-line-pack"
      // 'align-self' is handled by 'align-self' plugin.
    };
    var flex2012 = {
      supportedProperty: function supportedProperty15(prop, style2) {
        var newProp = propMap[prop];
        if (!newProp)
          return false;
        return prefix.js + pascalize(newProp) in style2 ? prefix.css + newProp : false;
      }
    };
    var propMap$1 = {
      flex: "box-flex",
      "flex-grow": "box-flex",
      "flex-direction": ["box-orient", "box-direction"],
      order: "box-ordinal-group",
      "align-items": "box-align",
      "flex-flow": ["box-orient", "box-direction"],
      "justify-content": "box-pack"
    };
    var propKeys = Object.keys(propMap$1);
    var prefixCss = function prefixCss2(p2) {
      return prefix.css + p2;
    };
    var flex2009 = {
      supportedProperty: function supportedProperty16(prop, style2, _ref) {
        var multiple = _ref.multiple;
        if (propKeys.indexOf(prop) > -1) {
          var newProp = propMap$1[prop];
          if (!Array.isArray(newProp)) {
            return prefix.js + pascalize(newProp) in style2 ? prefix.css + newProp : false;
          }
          if (!multiple)
            return false;
          for (var i = 0; i < newProp.length; i++) {
            if (!(prefix.js + pascalize(newProp[0]) in style2)) {
              return false;
            }
          }
          return newProp.map(prefixCss);
        }
        return false;
      }
    };
    var plugins = [appearence, colorAdjust, mask, textOrientation, transform, transition, writingMode, userSelect, breakPropsOld, inlineLogicalOld, unprefixed, prefixed, scrollSnap, overscrollBehavior, flex2012, flex2009];
    var propertyDetectors = plugins.filter(function(p2) {
      return p2.supportedProperty;
    }).map(function(p2) {
      return p2.supportedProperty;
    });
    var noPrefill = plugins.filter(function(p2) {
      return p2.noPrefill;
    }).reduce(function(a, p2) {
      a.push.apply(a, _toConsumableArray(p2.noPrefill));
      return a;
    }, []);
    var el;
    var cache = {};
    if (isBrowser) {
      el = document.createElement("p");
      var computed = window.getComputedStyle(document.documentElement, "");
      for (var key$1 in computed) {
        if (!isNaN(key$1))
          cache[computed[key$1]] = computed[key$1];
      }
      noPrefill.forEach(function(x) {
        return delete cache[x];
      });
    }
    function supportedProperty17(prop, options) {
      if (options === void 0) {
        options = {};
      }
      if (!el)
        return prop;
      if (cache[prop] != null) {
        return cache[prop];
      }
      if (prop === "transition" || prop === "transform") {
        options[prop] = prop in el.style;
      }
      for (var i = 0; i < propertyDetectors.length; i++) {
        cache[prop] = propertyDetectors[i](prop, el.style, options);
        if (cache[prop])
          break;
      }
      try {
        el.style[prop] = "";
      } catch (err) {
        return false;
      }
      return cache[prop];
    }
    var cache$1 = {};
    var transitionProperties = {
      transition: 1,
      "transition-property": 1,
      "-webkit-transition": 1,
      "-webkit-transition-property": 1
    };
    var transPropsRegExp = /(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g;
    var el$1;
    function prefixTransitionCallback(match, p1, p2) {
      if (p1 === "var")
        return "var";
      if (p1 === "all")
        return "all";
      if (p2 === "all")
        return ", all";
      var prefixedValue = p1 ? supportedProperty17(p1) : ", " + supportedProperty17(p2);
      if (!prefixedValue)
        return p1 || p2;
      return prefixedValue;
    }
    if (isBrowser)
      el$1 = document.createElement("p");
    function supportedValue(property, value) {
      var prefixedValue = value;
      if (!el$1 || property === "content")
        return value;
      if (typeof prefixedValue !== "string" || !isNaN(parseInt(prefixedValue, 10))) {
        return prefixedValue;
      }
      var cacheKey = property + prefixedValue;
      if (cache$1[cacheKey] != null) {
        return cache$1[cacheKey];
      }
      try {
        el$1.style[property] = prefixedValue;
      } catch (err) {
        cache$1[cacheKey] = false;
        return false;
      }
      if (transitionProperties[property]) {
        prefixedValue = prefixedValue.replace(transPropsRegExp, prefixTransitionCallback);
      } else if (el$1.style[property] === "") {
        prefixedValue = prefix.css + prefixedValue;
        if (prefixedValue === "-ms-flex")
          el$1.style[property] = "-ms-flexbox";
        el$1.style[property] = prefixedValue;
        if (el$1.style[property] === "") {
          cache$1[cacheKey] = false;
          return false;
        }
      }
      el$1.style[property] = "";
      cache$1[cacheKey] = prefixedValue;
      return cache$1[cacheKey];
    }
    function jssVendorPrefixer() {
      function onProcessRule(rule) {
        if (rule.type === "keyframes") {
          var atRule = rule;
          atRule.at = supportedKeyframes(atRule.at);
        }
      }
      function prefixStyle(style2) {
        for (var prop in style2) {
          var value = style2[prop];
          if (prop === "fallbacks" && Array.isArray(value)) {
            style2[prop] = value.map(prefixStyle);
            continue;
          }
          var changeProp = false;
          var supportedProp = supportedProperty17(prop);
          if (supportedProp && supportedProp !== prop)
            changeProp = true;
          var changeValue = false;
          var supportedValue$1 = supportedValue(supportedProp, toCssValue(value));
          if (supportedValue$1 && supportedValue$1 !== value)
            changeValue = true;
          if (changeProp || changeValue) {
            if (changeProp)
              delete style2[prop];
            style2[supportedProp || prop] = supportedValue$1 || value;
          }
        }
        return style2;
      }
      function onProcessStyle(style2, rule) {
        if (rule.type !== "style")
          return style2;
        return prefixStyle(style2);
      }
      function onChangeValue(value, prop) {
        return supportedValue(prop, toCssValue(value)) || value;
      }
      return {
        onProcessRule,
        onProcessStyle,
        onChangeValue
      };
    }
    function jssPropsSort() {
      var sort = function sort2(prop0, prop1) {
        if (prop0.length === prop1.length) {
          return prop0 > prop1 ? 1 : -1;
        }
        return prop0.length - prop1.length;
      };
      return {
        onProcessStyle: function onProcessStyle(style2, rule) {
          if (rule.type !== "style")
            return style2;
          var newStyle = {};
          var props = Object.keys(style2).sort(sort);
          for (var i = 0; i < props.length; i++) {
            newStyle[props[i]] = style2[props[i]];
          }
          return newStyle;
        }
      };
    }
    function jssPreset() {
      return {
        plugins: [
          functionPlugin(),
          jssGlobal(),
          jssNested(),
          camelCase(),
          defaultUnit(),
          // Disable the vendor prefixer server-side, it does nothing.
          // This way, we can get a performance boost.
          // In the documentation, we are using `autoprefixer` to solve this problem.
          typeof window === "undefined" ? null : jssVendorPrefixer(),
          jssPropsSort()
        ]
      };
    }
    function mergeClasses(options = {}) {
      const {
        baseClasses,
        newClasses,
        Component
      } = options;
      if (!newClasses) {
        return baseClasses;
      }
      const nextClasses = _extends$2({}, baseClasses);
      Object.keys(newClasses).forEach((key2) => {
        if (newClasses[key2]) {
          nextClasses[key2] = `${baseClasses[key2]} ${newClasses[key2]}`;
        }
      });
      return nextClasses;
    }
    const multiKeyStore = {
      set: (cache2, key1, key2, value) => {
        let subCache = cache2.get(key1);
        if (!subCache) {
          subCache = /* @__PURE__ */ new Map();
          cache2.set(key1, subCache);
        }
        subCache.set(key2, value);
      },
      get: (cache2, key1, key2) => {
        const subCache = cache2.get(key1);
        return subCache ? subCache.get(key2) : void 0;
      },
      delete: (cache2, key1, key2) => {
        const subCache = cache2.get(key1);
        subCache.delete(key2);
      }
    };
    const multiKeyStore$1 = multiKeyStore;
    function useTheme() {
      var _privateTheme$$$mater;
      const privateTheme = useTheme$2();
      return (_privateTheme$$$mater = privateTheme == null ? void 0 : privateTheme.$$material) != null ? _privateTheme$$$mater : privateTheme;
    }
    const defaultJSS = createJss(jssPreset());
    const defaultGenerateClassName = createGenerateClassName();
    const defaultSheetsManager = /* @__PURE__ */ new Map();
    const defaultOptions = {
      disableGeneration: false,
      generateClassName: defaultGenerateClassName,
      jss: defaultJSS,
      sheetsCache: null,
      sheetsManager: defaultSheetsManager,
      sheetsRegistry: null
    };
    const StylesContext = /* @__PURE__ */ reactExports.createContext(defaultOptions);
    let indexCounter = -1e9;
    function increment() {
      indexCounter += 1;
      return indexCounter;
    }
    const _excluded$1 = ["variant"];
    function isEmpty(string) {
      return string.length === 0;
    }
    function propsToClassKey(props) {
      const {
        variant
      } = props, other = _objectWithoutPropertiesLoose(props, _excluded$1);
      let classKey = variant || "";
      Object.keys(other).sort().forEach((key2) => {
        if (key2 === "color") {
          classKey += isEmpty(classKey) ? props[key2] : capitalize(props[key2]);
        } else {
          classKey += `${isEmpty(classKey) ? key2 : capitalize(key2)}${capitalize(props[key2].toString())}`;
        }
      });
      return classKey;
    }
    const noopTheme = {};
    const noopTheme$1 = noopTheme;
    function getStylesCreator(stylesOrCreator) {
      const themingEnabled = typeof stylesOrCreator === "function";
      return {
        create: (theme, name) => {
          let styles2;
          try {
            styles2 = themingEnabled ? stylesOrCreator(theme) : stylesOrCreator;
          } catch (err) {
            throw err;
          }
          if (!name || !theme.components || !theme.components[name] || !theme.components[name].styleOverrides && !theme.components[name].variants) {
            return styles2;
          }
          const overrides = theme.components[name].styleOverrides || {};
          const variants = theme.components[name].variants || [];
          const stylesWithOverrides = _extends$2({}, styles2);
          Object.keys(overrides).forEach((key2) => {
            stylesWithOverrides[key2] = deepmerge(stylesWithOverrides[key2] || {}, overrides[key2]);
          });
          variants.forEach((definition) => {
            const classKey = propsToClassKey(definition.props);
            stylesWithOverrides[classKey] = deepmerge(stylesWithOverrides[classKey] || {}, definition.style);
          });
          return stylesWithOverrides;
        },
        options: {}
      };
    }
    const _excluded = ["name", "classNamePrefix", "Component", "defaultTheme"];
    function getClasses({
      state,
      stylesOptions
    }, classes, Component) {
      if (stylesOptions.disableGeneration) {
        return classes || {};
      }
      if (!state.cacheClasses) {
        state.cacheClasses = {
          // Cache for the finalized classes value.
          value: null,
          // Cache for the last used classes prop pointer.
          lastProp: null,
          // Cache for the last used rendered classes pointer.
          lastJSS: {}
        };
      }
      let generate = false;
      if (state.classes !== state.cacheClasses.lastJSS) {
        state.cacheClasses.lastJSS = state.classes;
        generate = true;
      }
      if (classes !== state.cacheClasses.lastProp) {
        state.cacheClasses.lastProp = classes;
        generate = true;
      }
      if (generate) {
        state.cacheClasses.value = mergeClasses({
          baseClasses: state.cacheClasses.lastJSS,
          newClasses: classes,
          Component
        });
      }
      return state.cacheClasses.value;
    }
    function attach({
      state,
      theme,
      stylesOptions,
      stylesCreator,
      name
    }, props) {
      if (stylesOptions.disableGeneration) {
        return;
      }
      let sheetManager = multiKeyStore$1.get(stylesOptions.sheetsManager, stylesCreator, theme);
      if (!sheetManager) {
        sheetManager = {
          refs: 0,
          staticSheet: null,
          dynamicStyles: null
        };
        multiKeyStore$1.set(stylesOptions.sheetsManager, stylesCreator, theme, sheetManager);
      }
      const options = _extends$2({}, stylesCreator.options, stylesOptions, {
        theme,
        flip: typeof stylesOptions.flip === "boolean" ? stylesOptions.flip : theme.direction === "rtl"
      });
      options.generateId = options.serverGenerateClassName || options.generateClassName;
      const sheetsRegistry = stylesOptions.sheetsRegistry;
      if (sheetManager.refs === 0) {
        let staticSheet;
        if (stylesOptions.sheetsCache) {
          staticSheet = multiKeyStore$1.get(stylesOptions.sheetsCache, stylesCreator, theme);
        }
        const styles2 = stylesCreator.create(theme, name);
        if (!staticSheet) {
          staticSheet = stylesOptions.jss.createStyleSheet(styles2, _extends$2({
            link: false
          }, options));
          staticSheet.attach();
          if (stylesOptions.sheetsCache) {
            multiKeyStore$1.set(stylesOptions.sheetsCache, stylesCreator, theme, staticSheet);
          }
        }
        if (sheetsRegistry) {
          sheetsRegistry.add(staticSheet);
        }
        sheetManager.staticSheet = staticSheet;
        sheetManager.dynamicStyles = getDynamicStyles(styles2);
      }
      if (sheetManager.dynamicStyles) {
        const dynamicSheet = stylesOptions.jss.createStyleSheet(sheetManager.dynamicStyles, _extends$2({
          link: true
        }, options));
        dynamicSheet.update(props);
        dynamicSheet.attach();
        state.dynamicSheet = dynamicSheet;
        state.classes = mergeClasses({
          baseClasses: sheetManager.staticSheet.classes,
          newClasses: dynamicSheet.classes
        });
        if (sheetsRegistry) {
          sheetsRegistry.add(dynamicSheet);
        }
      } else {
        state.classes = sheetManager.staticSheet.classes;
      }
      sheetManager.refs += 1;
    }
    function update({
      state
    }, props) {
      if (state.dynamicSheet) {
        state.dynamicSheet.update(props);
      }
    }
    function detach({
      state,
      theme,
      stylesOptions,
      stylesCreator
    }) {
      if (stylesOptions.disableGeneration) {
        return;
      }
      const sheetManager = multiKeyStore$1.get(stylesOptions.sheetsManager, stylesCreator, theme);
      sheetManager.refs -= 1;
      const sheetsRegistry = stylesOptions.sheetsRegistry;
      if (sheetManager.refs === 0) {
        multiKeyStore$1.delete(stylesOptions.sheetsManager, stylesCreator, theme);
        stylesOptions.jss.removeStyleSheet(sheetManager.staticSheet);
        if (sheetsRegistry) {
          sheetsRegistry.remove(sheetManager.staticSheet);
        }
      }
      if (state.dynamicSheet) {
        stylesOptions.jss.removeStyleSheet(state.dynamicSheet);
        if (sheetsRegistry) {
          sheetsRegistry.remove(state.dynamicSheet);
        }
      }
    }
    function useSynchronousEffect(func, values) {
      const key2 = reactExports.useRef([]);
      let output;
      const currentKey = reactExports.useMemo(() => ({}), values);
      if (key2.current !== currentKey) {
        key2.current = currentKey;
        output = func();
      }
      reactExports.useEffect(
        () => () => {
          if (output) {
            output();
          }
        },
        [currentKey]
        // eslint-disable-line react-hooks/exhaustive-deps
      );
    }
    function makeStyles(stylesOrCreator, options = {}) {
      const {
        // alias for classNamePrefix, if provided will listen to theme (required for theme.components[name].styleOverrides)
        name,
        // Help with debuggability.
        classNamePrefix: classNamePrefixOption,
        Component,
        defaultTheme: defaultTheme2 = noopTheme$1
      } = options, stylesOptions2 = _objectWithoutPropertiesLoose(options, _excluded);
      const stylesCreator = getStylesCreator(stylesOrCreator);
      const classNamePrefix = name || classNamePrefixOption || "makeStyles";
      stylesCreator.options = {
        index: increment(),
        name,
        meta: classNamePrefix,
        classNamePrefix
      };
      const useStyles = (props = {}) => {
        const theme = useTheme() || defaultTheme2;
        const stylesOptions = _extends$2({}, reactExports.useContext(StylesContext), stylesOptions2);
        const instance = reactExports.useRef();
        const shouldUpdate = reactExports.useRef();
        useSynchronousEffect(() => {
          const current = {
            name,
            state: {},
            stylesCreator,
            stylesOptions,
            theme
          };
          attach(current, props);
          shouldUpdate.current = false;
          instance.current = current;
          return () => {
            detach(current);
          };
        }, [theme, stylesCreator]);
        reactExports.useEffect(() => {
          if (shouldUpdate.current) {
            update(instance.current, props);
          }
          shouldUpdate.current = true;
        });
        const classes = getClasses(instance.current, props.classes, Component);
        return classes;
      };
      return useStyles;
    }
    const barStyles = makeStyles(() => ({
      linearProgress: ({ backgroundGradient }) => ({
        background: "#DCDCEA",
        borderRadius: "2px",
        "& .MuiLinearProgress-bar": {
          background: backgroundGradient
        }
      })
    }));
    const HighlightBox = ({
      headline,
      value,
      cta
    }) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Box,
        {
          p: 2,
          sx: {
            borderRadius: "5px",
            backgroundColor: "#D9D9E1",
            width: "100%"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", align: "center", children: headline }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h5", align: "center", sx: { fontWeight: 600 }, children: value }),
            cta && /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { children: cta })
          ]
        }
      );
    };
    const CustomBarChart = ({ data, color1, color2 }) => {
      const classes = barStyles({
        backgroundGradient: `linear-gradient(75deg, ${color1 || "#6C31B8"} 60%, ${color2 || "#AB32DE"} 100%)`
      });
      const truncateString = (str, maxLength) => {
        if (str.length > maxLength) {
          return str.substring(0, maxLength) + "...";
        }
        return str;
      };
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Stack$1, { spacing: 0.5, children: data.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack$1, { spacing: 1, direction: "row", ml: 1, mr: 1, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Box,
          {
            sx: {
              width: "200px",
              borderRadius: "2px"
              // background: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 80%, #D8D8E5 100%)',
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", sx: { fontSize: 12, textAlign: "right" }, children: truncateString(item.label, 20) })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          LinearProgress$1,
          {
            variant: "determinate",
            value: Math.round(item.value * 100),
            sx: {
              width: "100%",
              height: "1rem"
            },
            className: classes.linearProgress
          }
        )
      ] }, index)) });
    };
    const ProfileSummary = ({ profile }) => {
      var _a, _b, _c, _d, _e;
      const [hasContent, setHasContent] = reactExports.useState(false);
      const [hasScores, setHasScores] = reactExports.useState(false);
      const [totalAttributes, setTotalAttributes] = reactExports.useState(0);
      const [scores, setScores] = reactExports.useState([]);
      const [affinities, setAffinities] = reactExports.useState({});
      const [computedAttributes, setComputedAttributes] = reactExports.useState({});
      const appendScore = (scoresArray, profileData, propertyName, label) => {
        var _a2;
        const propertyValue = (_a2 = profileData == null ? void 0 : profileData.user) == null ? void 0 : _a2[propertyName];
        if (propertyValue) {
          return [
            ...scoresArray,
            {
              label,
              value: propertyValue / 100
            }
          ];
        }
        return scoresArray;
      };
      reactExports.useEffect(() => {
        var _a2, _b2, _c2, _d2, _e2;
        if ((_a2 = profile == null ? void 0 : profile.data) == null ? void 0 : _a2.user) {
          setTotalAttributes(Object.keys(profile.data.user).length);
        }
        if ((_c2 = (_b2 = profile == null ? void 0 : profile.data) == null ? void 0 : _b2.user) == null ? void 0 : _c2.lytics_content) {
          const affinityEntries = Object.entries(profile.data.user.lytics_content);
          const filteredEntries = affinityEntries.filter(([key2]) => key2.length > 1);
          const slicedEntries = filteredEntries.slice(0, 20);
          const affinityObject = Object.fromEntries(slicedEntries);
          setAffinities(affinityObject);
          setHasContent(true);
        }
        if ((_e2 = (_d2 = profile == null ? void 0 : profile.data) == null ? void 0 : _d2.user) == null ? void 0 : _e2.segments) {
          const segmentsArray = profile.data.user.segments;
          const computedAttributesObject = segmentsArray.reduce((result, segment) => {
            result[segment] = segment;
            return result;
          }, {});
          setComputedAttributes(computedAttributesObject);
        }
        let updatedScores = [];
        updatedScores = appendScore(updatedScores, profile.data, "score_consistency", "Consistency");
        updatedScores = appendScore(updatedScores, profile.data, "score_frequency", "Frequency");
        updatedScores = appendScore(updatedScores, profile.data, "score_intensity", "Intensity");
        updatedScores = appendScore(updatedScores, profile.data, "score_maturity", "Maturity");
        updatedScores = appendScore(updatedScores, profile.data, "score_momentum", "Momentum");
        updatedScores = appendScore(updatedScores, profile.data, "score_propensity", "Propensity");
        updatedScores = appendScore(updatedScores, profile.data, "score_quantity", "Quantity");
        updatedScores = appendScore(updatedScores, profile.data, "score_recency", "Recency");
        updatedScores = appendScore(updatedScores, profile.data, "score_volatility", "Volatility");
        if (updatedScores.length > 0) {
          setHasScores(true);
        } else {
          setHasScores(false);
        }
        setScores(updatedScores);
      }, [profile]);
      const computedAttributesValue = Object.values(computedAttributes).join(", ");
      const sortedData = Object.entries(affinities).map(([label, value]) => ({ label, value })).sort((a, b2) => b2.value - a.value);
      const openNewTab = (url) => {
        window.open(url, "_blank");
      };
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Box,
        {
          sx: {
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            fontSize: "12px"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Stack$1, { direction: "row", spacing: 2, justifyContent: "center", alignItems: "center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              HighlightBox,
              {
                headline: "Available Attributes",
                value: totalAttributes,
                cta: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Box,
                  {
                    borderRadius: 2,
                    textAlign: "center",
                    mt: 1,
                    pt: 2,
                    sx: {
                      backgroundColor: "#E9E9EA"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          variant: "outlined",
                          size: "small",
                          color: "secondary",
                          onClick: () => openNewTab("https://docs.lytics.com/docs/account-settings#lytics-api"),
                          children: "Surface Additional Attributes"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Typography,
                        {
                          p: 2,
                          sx: {
                            fontSize: "12px"
                          },
                          children: "You may have more attributes available for personalization. Review documentation on how to configure which attributes are surfaced to the web."
                        }
                      )
                    ]
                  }
                )
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { mt: 1, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SimpleTable,
                {
                  rows: [
                    { label: "Lytics ID", value: ((_b = (_a = profile == null ? void 0 : profile.data) == null ? void 0 : _a.user) == null ? void 0 : _b._id) || "Unknown" },
                    { label: "Last _UID (Cookie)", value: ((_d = (_c = profile == null ? void 0 : profile.data) == null ? void 0 : _c.user) == null ? void 0 : _d._uid) || ((_e = profile == null ? void 0 : profile.data) == null ? void 0 : _e._uid) || "Unknown" },
                    {
                      label: "Audiences",
                      position: "top",
                      fancyValue: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { pl: 1, pr: 1, display: "flex", justifyContent: "center", flexDirection: "row", flexWrap: "wrap", children: computedAttributesValue.split(",").map((attribute, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Chip$1,
                        {
                          size: "small",
                          variant: "outlined",
                          label: attribute,
                          sx: { borderRadius: 1, mr: 1, mb: 1 }
                        },
                        index
                      )) })
                    },
                    {
                      label: "Behavior",
                      position: "top",
                      fancyValue: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { children: hasScores ? /* @__PURE__ */ jsxRuntimeExports.jsx(CustomBarChart, { data: scores, color1: "#00BAE3", color2: "#85DB83" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", align: "left", children: "No scores available (ensure they are turned on)" }) })
                    },
                    {
                      label: "Interests",
                      position: "top",
                      fancyValue: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { children: hasContent ? /* @__PURE__ */ jsxRuntimeExports.jsx(CustomBarChart, { data: sortedData, color1: "#9D70FD", color2: "#D36FDE" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", align: "left", children: "No interests available (ensure they are turned on)" }) })
                    }
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Divider$1, { sx: { mt: 0.5 } })
            ] })
          ]
        }
      );
    };
    const Profile = ({ profileIsLoading, profile, getter, setter }) => {
      const handleSetTab = (event, newValue) => {
        setter(newValue);
      };
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack$1, { alignItems: "flex-start", justifyContent: "center", height: "100vh", width: "100%", overflow: "hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { borderBottom: 1, borderColor: "divider", width: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs$1, { value: getter, onChange: handleSetTab, textColor: "secondary", indicatorColor: "secondary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tab$1, { id: "summary", label: "Summary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tab$1, { id: "raw", disabled: profileIsLoading, label: "Details" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { flexGrow: 1, width: "100%", overflow: "auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CustomTabPanel, { value: getter, index: 0, children: profileIsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { m: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress$1, { color: "secondary" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ProfileSummary, { profile }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CustomTabPanel, { value: getter, index: 1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProfileDetail, { profile }) })
        ] })
      ] });
    };
    const TabDetails = ({ items }) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Stack$1, { children: items.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: item && /* @__PURE__ */ jsxRuntimeExports.jsxs(Accordion$1, { disableGutters: true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionSummary$1, { expandIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(ExpandMore, {}), "aria-controls": "panel1a-content", id: index.toString(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack$1, { direction: "row", justifyContent: "space-between", width: "100%", alignItems: "center", spacing: 2, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Chip$1, { size: "small", variant: "outlined", label: item.type }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: item.id })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionDetails$1, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Stack$1, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { fontSize: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TreeDisplay, { data: item, collapsed: 2 }) }) }) })
      ] }, index) })) });
    };
    const Personalization = ({ candidates, getter, setter }) => {
      var _a, _b, _c, _d;
      const handleSetTab = (event, newValue) => {
        setter(newValue);
      };
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack$1, { alignItems: "flex-start", justifyContent: "center", height: "100%", width: "100%", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { borderBottom: 1, borderColor: "divider", width: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs$1, { value: getter, onChange: handleSetTab, textColor: "secondary", indicatorColor: "secondary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tab$1, { id: "experiences", label: "Experiences" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tab$1, { id: "legacy", disabled: false, label: "Legacy Campaigns" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { flexGrow: 1, width: "100%", overflow: "auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CustomTabPanel, { value: getter, index: 0, children: (candidates == null ? void 0 : candidates.experiences.length) > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TabDetails, { items: candidates == null ? void 0 : candidates.experiences }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { mt: 8, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            EmptyState,
            {
              type: "listening",
              body: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { maxWidth: 375, children: "No active Lytics managed experiences were found." })
            }
          ) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CustomTabPanel, { value: getter, index: 1, children: ((_a = candidates.variations) == null ? void 0 : _a.length) > 0 || ((_b = candidates.legacyABTests) == null ? void 0 : _b.length) > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            ((_c = candidates.variations) == null ? void 0 : _c.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(TabDetails, { items: candidates.variations }),
            ((_d = candidates.legacyABTests) == null ? void 0 : _d.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(TabDetails, { items: candidates.legacyABTests })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { mt: 8, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            EmptyState,
            {
              type: "deprecated",
              body: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { maxWidth: 375, children: "Great news! No legacy campaigns are currently active on this page and you are not at risk of using a sunset feature." })
            }
          ) }) })
        ] })
      ] });
    };
    const Configuration = () => {
      reactExports.useEffect(() => {
      }, []);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { textAlign: "center", children: "Configuration" });
    };
    const Toggle = styled$1((props) => /* @__PURE__ */ jsxRuntimeExports.jsx(Switch$1, { focusVisibleClassName: ".Mui-focusVisible", disableRipple: true, ...props }))(({ theme }) => ({
      width: 42,
      height: 26,
      padding: 0,
      "& .MuiSwitch-switchBase": {
        padding: 0,
        margin: 2,
        transitionDuration: "300ms",
        "&.Mui-checked": {
          transform: "translateX(16px)",
          color: "#fff",
          "& + .MuiSwitch-track": {
            backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
            opacity: 1,
            border: 0
          },
          "&.Mui-disabled + .MuiSwitch-track": {
            opacity: 0.5
          }
        },
        "&.Mui-focusVisible .MuiSwitch-thumb": {
          color: "#33cf4d",
          border: "6px solid #fff"
        },
        "&.Mui-disabled .MuiSwitch-thumb": {
          color: theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[600]
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: theme.palette.mode === "light" ? 0.7 : 0.3
        }
      },
      "& .MuiSwitch-thumb": {
        boxSizing: "border-box",
        width: 22,
        height: 22
      },
      "& .MuiSwitch-track": {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
        opacity: 1,
        transition: theme.transitions.create(["background-color"], {
          duration: 500
        })
      }
    }));
    const LyticsLogo = () => {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "86", height: "27", viewBox: "0 0 86 27", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M26.3779 21.472V3.08337C26.3782 3.0114 26.4028 2.94162 26.4478 2.88537C26.4928 2.82913 26.5556 2.78974 26.6259 2.77359L29.2091 2.00413C29.256 1.99333 29.3047 1.99321 29.3516 2.00379C29.3985 2.01436 29.4424 2.03536 29.4801 2.06522C29.5177 2.09508 29.5481 2.13302 29.569 2.17623C29.5899 2.21943 29.6008 2.26679 29.6008 2.31477V21.472C29.6009 21.5139 29.5926 21.5554 29.5766 21.5941C29.5605 21.6329 29.537 21.6681 29.5073 21.6977C29.4776 21.7273 29.4423 21.7509 29.4035 21.7669C29.3647 21.783 29.3231 21.7912 29.2811 21.7912H26.6976C26.6556 21.7912 26.614 21.783 26.5752 21.7669C26.5364 21.7509 26.5012 21.7273 26.4715 21.6977C26.4418 21.6681 26.4182 21.6329 26.4022 21.5941C26.3861 21.5554 26.3779 21.5139 26.3779 21.472V21.472Z",
            fill: "white"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M39.4918 20.5051C38.042 23.9075 37.048 25.3273 34.9262 25.3809C34.1003 25.3809 32.9706 25.1244 32.1033 24.5259C32.0487 24.4886 32.0069 24.4355 31.9835 24.3737C31.9602 24.3119 31.9564 24.2445 31.9727 24.1805L32.383 22.6026C32.395 22.557 32.417 22.5147 32.4474 22.4787C32.4777 22.4426 32.5157 22.4137 32.5585 22.394C32.6014 22.3743 32.6481 22.3642 32.6953 22.3646C32.7425 22.365 32.789 22.3758 32.8315 22.3962C33.3646 22.6467 33.8997 22.8092 34.3625 22.8092C35.3827 22.8092 36.2155 21.5769 36.0007 19.7818L31.4799 8.70128C31.4601 8.65284 31.4526 8.6003 31.458 8.54828C31.4634 8.49626 31.4815 8.44636 31.5108 8.40297C31.54 8.35959 31.5795 8.32405 31.6258 8.29948C31.6721 8.27492 31.7237 8.26209 31.7762 8.26212H34.3305C34.3952 8.26216 34.4584 8.28176 34.5117 8.31834C34.565 8.35493 34.6059 8.40676 34.6291 8.46702L37.8537 16.8618L41.0249 8.46873C41.0478 8.40804 41.0886 8.35575 41.1421 8.31884C41.1955 8.28192 41.259 8.26214 41.324 8.26212H43.8818C43.934 8.26209 43.9853 8.27479 44.0314 8.29912C44.0776 8.32346 44.117 8.35867 44.1463 8.4017C44.1757 8.44473 44.194 8.49427 44.1997 8.54599C44.2054 8.59771 44.1984 8.65005 44.1792 8.69843L39.4918 20.5051Z",
            fill: "white"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M53.1778 21.2377C53.178 21.2997 53.16 21.3603 53.1261 21.4122C53.0922 21.4641 53.0438 21.5049 52.987 21.5298C52.4693 21.7558 51.8677 21.9245 50.8409 21.9245C48.3971 21.9245 47.4837 20.3437 47.4837 16.6469V10.8332H46.2461C46.1616 10.8331 46.0805 10.7995 46.0207 10.7399C45.9609 10.6803 45.9272 10.5995 45.927 10.5152V8.58098C45.927 8.4964 45.9607 8.41529 46.0206 8.35549C46.0806 8.29568 46.1619 8.26208 46.2467 8.26208H47.4843V5.55473C47.4845 5.47963 47.5113 5.40702 47.5599 5.34967C47.6085 5.29232 47.6758 5.25393 47.75 5.24124L50.3604 4.53049C50.4062 4.52266 50.4531 4.52489 50.498 4.53702C50.5429 4.54915 50.5845 4.5709 50.6201 4.60074C50.6557 4.63059 50.6843 4.66781 50.704 4.70982C50.7237 4.75183 50.7339 4.79761 50.734 4.84397V8.26379H52.8584C52.9004 8.26379 52.942 8.27204 52.9808 8.28807C53.0196 8.30409 53.0548 8.32758 53.0845 8.3572C53.1142 8.38681 53.1377 8.42196 53.1538 8.46065C53.1698 8.49935 53.1781 8.54081 53.1781 8.58269V10.5169C53.1781 10.5588 53.1698 10.6002 53.1538 10.6389C53.1377 10.6776 53.1142 10.7128 53.0845 10.7424C53.0548 10.772 53.0196 10.7955 52.9808 10.8115C52.942 10.8275 52.9004 10.8358 52.8584 10.8358H50.734V16.1935C50.734 18.5364 50.948 19.5278 52.8053 19.2143C52.8509 19.2069 52.8977 19.2094 52.9422 19.2217C52.9868 19.234 53.0282 19.2558 53.0635 19.2856C53.0988 19.3154 53.1272 19.3525 53.1468 19.3943C53.1663 19.4361 53.1765 19.4817 53.1767 19.5278L53.1778 21.2377Z",
            fill: "white"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M57.053 5.82947C56.1387 5.82947 55.3611 5.07967 55.3611 4.14179C55.3611 3.25834 56.1399 2.4809 57.053 2.4809C58.0197 2.4809 58.7451 3.25777 58.7451 4.14179C58.7451 5.07967 58.0197 5.82947 57.053 5.82947ZM55.4405 21.472V8.581C55.4405 8.53912 55.4488 8.49765 55.4648 8.45896C55.4809 8.42027 55.5045 8.38512 55.5341 8.3555C55.5638 8.32589 55.5991 8.3024 55.6379 8.28638C55.6766 8.27035 55.7182 8.2621 55.7602 8.2621H58.3437C58.4285 8.2621 58.5098 8.2957 58.5698 8.3555C58.6297 8.41531 58.6634 8.49642 58.6634 8.581V21.472C58.6634 21.5139 58.6552 21.5554 58.6392 21.5941C58.6231 21.6329 58.5996 21.668 58.5699 21.6977C58.5402 21.7273 58.5049 21.7508 58.4661 21.7669C58.4273 21.7829 58.3857 21.7912 58.3437 21.7912H55.7602C55.7182 21.7912 55.6766 21.7829 55.6378 21.7669C55.599 21.7508 55.5637 21.7273 55.534 21.6977C55.5044 21.668 55.4808 21.6329 55.4648 21.5941C55.4487 21.5554 55.4405 21.5139 55.4405 21.472V21.472Z",
            fill: "white"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M67.9824 21.9246C64.1421 21.9246 61.0535 18.9775 61.0535 15.0396C61.0535 11.1017 64.1429 8.12817 67.9824 8.12817C70.061 8.12817 71.7566 8.96346 73.0017 10.2958C73.0307 10.3268 73.0533 10.3634 73.068 10.4032C73.0828 10.4431 73.0895 10.4854 73.0876 10.5279C73.0858 10.5703 73.0755 10.612 73.0574 10.6504C73.0392 10.6888 73.0136 10.7233 72.982 10.7517L71.3572 12.2083C71.3247 12.2372 71.2866 12.2592 71.2453 12.273C71.2039 12.2867 71.1602 12.2918 71.1168 12.2881C71.0734 12.2843 71.0312 12.2718 70.9928 12.2512C70.9544 12.2306 70.9206 12.2025 70.8936 12.1684C70.111 11.196 69.0983 10.6996 68.0632 10.6996C65.9148 10.6996 64.2764 12.5212 64.2764 15.0396C64.2764 17.531 65.9148 19.3258 68.0632 19.3258C69.0983 19.3258 70.111 18.8983 70.8933 17.8946C70.9201 17.8595 70.9539 17.8302 70.9925 17.8087C71.0312 17.7872 71.0739 17.7738 71.1179 17.7695C71.162 17.7652 71.2065 17.77 71.2486 17.7836C71.2907 17.7973 71.3295 17.8194 71.3627 17.8487L72.982 19.301C73.0136 19.3295 73.0392 19.3639 73.0574 19.4023C73.0755 19.4408 73.0858 19.4824 73.0876 19.5249C73.0895 19.5673 73.0828 19.6097 73.068 19.6495C73.0533 19.6894 73.0307 19.7259 73.0017 19.757C71.7575 21.0899 70.0619 21.9246 67.9824 21.9246Z",
            fill: "white"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M81.8165 14.3155C83.5624 15.039 85.4162 16.0567 85.4162 18.2537C85.4162 20.4506 83.4549 21.9246 80.608 21.9246C78.485 21.9246 76.4334 21.2121 75.0798 19.9901C75.0474 19.9607 75.0213 19.9251 75.0032 19.8853C74.9851 19.8455 74.9754 19.8024 74.9747 19.7587C74.9739 19.715 74.9821 19.6716 74.9989 19.6312C75.0156 19.5908 75.0404 19.5543 75.0718 19.5239L76.6117 18.0291C76.6679 17.9744 76.7423 17.9423 76.8207 17.939C76.8992 17.9358 76.976 17.9616 77.0365 18.0114C77.9128 18.7339 79.1221 19.3258 80.2857 19.3258C81.5214 19.3258 82.1925 18.924 82.1925 18.0935C82.1925 17.0488 81.0648 16.6201 79.1578 15.7897C76.5797 14.6911 75.3978 13.6195 75.3978 11.8247C75.3978 9.35987 77.8419 8.12759 80.3403 8.12759C82.1085 8.12759 83.9006 8.72008 85.1577 9.92756C85.1885 9.95742 85.2131 9.99316 85.2299 10.0327C85.2466 10.0722 85.2553 10.1146 85.2553 10.1575C85.2553 10.2004 85.2466 10.2429 85.2299 10.2824C85.2131 10.3219 85.1885 10.3577 85.1577 10.3875L83.6721 11.8267C83.614 11.8828 83.5367 11.9149 83.4559 11.9165C83.3751 11.9181 83.2966 11.889 83.2364 11.8352C82.481 11.1655 81.4988 10.6996 80.472 10.6996C79.5052 10.6996 78.619 11.1271 78.619 11.9319C78.6207 12.8432 79.3995 13.2719 81.8165 14.3155Z",
            fill: "white"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M13.2636 2.58637C14.1587 4.14789 13.6153 6.13756 12.0499 7.03044L5.21784 10.9273C3.65245 11.8202 1.65783 11.2782 0.762744 9.71664C-0.132345 8.15512 0.411042 6.16545 1.97643 5.27257L8.80848 1.37569C10.3739 0.482817 12.3685 1.02486 13.2636 2.58637Z",
            fill: "white"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M13.2636 11.9028C14.1587 13.4643 13.6153 15.454 12.0499 16.3469L5.21784 20.2438C3.65245 21.1366 1.65783 20.5946 0.762744 19.0331C-0.132345 17.4716 0.411042 15.4819 1.97643 14.589L8.80848 10.6921C10.3739 9.79925 12.3685 10.3413 13.2636 11.9028Z",
            fill: "white"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M18.8781 18.1745C19.7732 19.736 19.2298 21.7257 17.6644 22.6185L10.8323 26.5154C9.26695 27.4083 7.27233 26.8663 6.37725 25.3047C5.48216 23.7432 6.02554 21.7536 7.59093 20.8607L14.423 16.9638C15.9884 16.0709 17.983 16.613 18.8781 18.1745Z",
            fill: "white"
          }
        )
      ] });
    };
    const TopNavigation = ({ isEnabled, onChange }) => {
      const [toggleLabel, setToggleLabel] = reactExports.useState("Disabled");
      const handleToggleChange = (event) => {
        onChange(event.target.checked);
        setToggleLabel(event.target.checked ? "Enabled" : "Disabled");
      };
      return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        AppBar$1,
        {
          position: "static",
          elevation: 0,
          sx: {
            background: "linear-gradient(to right, #6C31B8, #AB32DE)"
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Toolbar$1, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { pl: 1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LyticsLogo, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { flexGrow: 1 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FormGroup$1, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              FormControlLabel$1,
              {
                control: /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { checked: isEnabled }),
                onChange: handleToggleChange,
                label: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { pl: 1 }, children: toggleLabel })
              }
            ) })
          ] })
        }
      ) });
    };
    const evaluateDomain = (url, allowDomainURL) => {
      if (allowDomainURL && url.includes(allowDomainURL)) {
        return true;
      }
      return false;
    };
    const SidePanel = () => {
      const navigate = useNavigate();
      const [activePath, setActivePath] = reactExports.useState("/");
      const [tagIsInstalled, setTagIsInstalled] = reactExports.useState(false);
      const location = useLocation();
      const extensionState = useStorage(extensionStateStorage);
      const [isEnabled, setIsEnabled] = reactExports.useState(extensionState);
      const [isLoading, setIsLoading] = reactExports.useState(true);
      const [profileIsLoading, setProfileIsLoading] = reactExports.useState(true);
      const [tagConfig, setTagConfig] = reactExports.useState({});
      const [currentProfile, setCurrentProfile] = reactExports.useState({});
      const [candidates, setCandidates] = reactExports.useState({});
      const [allowDomain, setAllowDomain] = reactExports.useState(false);
      const [allowDomainURL, setAllowDomainURL] = reactExports.useState("");
      const [refreshTimestamp, setRefreshTimestamp] = reactExports.useState(Date.now());
      const [debugTab, setDebugTab] = reactExports.useState(0);
      const [profileTab, setProfileTab] = reactExports.useState(0);
      const [personalizationTab, setPersonalizationTab] = reactExports.useState(0);
      const safeJSON = (jsonString, details) => {
        try {
          const parsedJSON = JSON.parse(jsonString);
          return parsedJSON;
        } catch (error) {
          console.error("Error parsing JSON:", details, error);
          return null;
        }
      };
      const handleChromeNavEvents = (details, isURLChange) => {
        if (details.frameId !== 0) {
          return;
        }
        GetActiveTabURL(details, isURLChange).then((url) => {
          if (url) {
            setAllowDomain(evaluateDomain(url, allowDomainURL));
          }
        }).catch((error) => {
          console.error("Error getting active tab URL", error);
        });
      };
      chrome.webNavigation.onCompleted.addListener((details) => {
        handleChromeNavEvents(details, true);
      });
      chrome.tabs.onActivated.addListener((details) => {
        handleChromeNavEvents(details, false);
      });
      reactExports.useEffect(() => {
        if (allowDomainURL) {
          getCurrentTabURL().then((url) => {
            setAllowDomain(evaluateDomain(url, allowDomainURL));
          }).catch((error) => {
            console.error("Error getting active tab URL", error);
          });
        }
      }, [allowDomainURL]);
      const getCurrentTabURL = () => {
        return new Promise((resolve, reject) => {
          chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs && tabs[0] && tabs[0].url) {
              resolve(tabs[0].url);
            } else {
              reject(new Error("Unable to get the current tab's URL"));
            }
          });
        });
      };
      reactExports.useEffect(() => {
        domainStore.get().then((domain) => {
          if (typeof domain === "string" && domain.trim() !== "") {
            setAllowDomainURL(domain);
          }
        });
      }, []);
      const handleDomainStore = () => {
        domainStore.get().then((domain) => {
          if (domain !== "") {
            setAllowDomainURL(domain);
          }
        });
      };
      domainStore.subscribe(handleDomainStore);
      const handleStickyDomainSet = () => {
        setTagIsInstalled(false);
        setProfileIsLoading(true);
        setTagConfig({});
        setCurrentProfile({});
        setCandidates({});
        setRefreshTimestamp(Date.now());
        navigate("/");
        setDebugTab(0);
        setProfileTab(0);
        setPersonalizationTab(0);
        chrome.runtime.sendMessage({ action: "setStickyDomain" }, () => {
          if (chrome.runtime.lastError)
            ;
          chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs.length > 0) {
              const tab = tabs[0];
              chrome.tabs.reload(tab.id);
            }
          });
        });
      };
      function handleStorageChange(changes, areaName) {
        if (areaName === "local") {
          for (const key2 in changes) {
            if (key2 === "tagConfigStorage") {
              if (changes[key2].newValue === void 0 || changes[key2].newValue === null) {
                return;
              }
              const safeConfig = safeJSON(changes[key2].newValue, "tag config storage change");
              if (!safeConfig) {
                return;
              }
              setTagConfig(safeConfig);
              setTagIsInstalled(Object.keys(safeConfig).length > 0);
            }
            if (key2 === "entityStorage") {
              if (changes[key2].newValue === void 0 || changes[key2].newValue === null) {
                return;
              }
              const safeProfile = safeJSON(changes[key2].newValue, "entity storage change");
              if (!safeProfile) {
                return;
              }
              setCurrentProfile(safeProfile);
            }
          }
        }
      }
      chrome.storage.onChanged.addListener(handleStorageChange);
      reactExports.useEffect(() => {
        const fetchData = async () => {
          setCurrentProfile({ test: "test" });
        };
        fetchData();
      }, []);
      reactExports.useEffect(() => {
        var _a, _b;
        setCandidates((_b = (_a = tagConfig == null ? void 0 : tagConfig.pathfora) == null ? void 0 : _a.publish) == null ? void 0 : _b.candidates);
      }, [tagConfig]);
      reactExports.useEffect(() => {
        if (!isEnabled) {
          return;
        }
        const fetchData = async () => {
          try {
            const data = await tagConfigStore.get();
            setIsLoading(false);
            if (Object.keys(data).length === 0) {
              chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id, { action: "getConfig" }, (response) => {
                  if (chrome.runtime.lastError) {
                  } else if (response) {
                    EmitLog({ name: "sidepanel", payload: { msg: "Config response.", data: response } });
                  }
                });
              });
              setTimeout(fetchData, 1e3);
            } else {
              const pendingConfig = safeJSON(data, "tag config fetch");
              if (!pendingConfig) {
                EmitLog({
                  name: "sidepanel",
                  payload: { msg: "Error parsing pending tag config.", error: "Invalid JSON" }
                });
                return;
              }
              setTagConfig(pendingConfig);
              setTagIsInstalled(Object.keys(pendingConfig).length > 0);
            }
          } catch (error) {
          }
        };
        fetchData();
      }, [isEnabled, refreshTimestamp]);
      reactExports.useEffect(() => {
        if (!isEnabled) {
          return;
        }
        const fetchData = async () => {
          setProfileIsLoading(true);
          try {
            const data = await entityStore.get();
            if (!data) {
              chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id, { action: "getEntity" }, (response) => {
                  if (chrome.runtime.lastError) {
                  } else if (response) {
                    EmitLog({ name: "sidepanel", payload: { msg: "Entity response.", data: response } });
                  }
                });
              });
              setTimeout(fetchData, 1e3);
            } else {
              const safeData = safeJSON(data, "profile fetch");
              if (!safeData) {
                EmitLog({
                  name: "sidepanel",
                  payload: { msg: "Error parsing pending entity.", error: "Invalid JSON" }
                });
                return;
              }
              setCurrentProfile(safeData);
              setProfileIsLoading(false);
            }
          } catch (error) {
          }
        };
        fetchData();
      }, [isEnabled, refreshTimestamp]);
      reactExports.useEffect(() => {
        if (location.pathname === "/src/pages/sidepanel/index.html") {
          setActivePath("/");
          return;
        }
        setActivePath(location.pathname);
      }, [location.pathname]);
      const handleStateToggle = (isActive) => {
        setIsEnabled(isActive);
        extensionStateStorage.set(isActive);
      };
      const handleNavigation = (path) => {
        setActivePath(path);
        navigate(path);
      };
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Box,
        {
          width: "100%",
          height: "100vh",
          display: "flex",
          overflow: "hidden",
          flexDirection: "column",
          sx: {
            background: "#E9E8EE"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TopNavigation, { isEnabled, onChange: handleStateToggle }),
            isEnabled ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: allowDomain ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { width: "100%", justifyContent: "center", alignItems: "center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress$1, { color: "secondary" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Box,
                {
                  minHeight: `calc(100vh - 56px)`,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  display: "flex",
                  flexDirection: "column",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Routes, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/settings", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Configuration, {}) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Route,
                      {
                        path: "/profile",
                        element: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Profile,
                          {
                            profileIsLoading,
                            profile: currentProfile,
                            getter: profileTab,
                            setter: setProfileTab
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Route,
                      {
                        path: "/personalization",
                        element: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Personalization,
                          {
                            candidates,
                            getter: personalizationTab,
                            setter: setPersonalizationTab
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Route,
                      {
                        path: "*",
                        element: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Debugger,
                          {
                            tagIsInstalled,
                            tagConfig,
                            getter: debugTab,
                            setter: setDebugTab
                          }
                        )
                      }
                    )
                  ] })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                BottomNav,
                {
                  value: activePath,
                  tagIsInstalled,
                  onChange: (newValue) => handleNavigation(newValue)
                }
              )
            ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack$1, { display: "flex", justifyContent: "center", alignItems: "center", height: "100%", p: 5, spacing: 1, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(WrongDomain, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body1", align: "center", pb: 2, maxWidth: "450px", children: allowDomainURL ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                "Wait a minute! You are currently analyzing ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: allowDomainURL }),
                ". If you'd like to analyze this domain instead simple pin it below."
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: "You are not currently analyzing a domain. To get started, navigate to your preferred domain and pin it below." }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "small", color: "secondary", variant: "outlined", onClick: handleStickyDomainSet, children: "Pin Domain" })
            ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack$1, { display: "flex", justifyContent: "center", alignItems: "center", height: "100%", p: 5, spacing: 1, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DeveloperCenterIcon, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body1", align: "center", children: [
                "To get started ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "activate the Lytics Developer Center extension" }),
                " using the toggle at the top right. Upon doing so the current page will reload and you'll instantly gain access to the full developer toolkit."
              ] })
            ] })
          ]
        }
      );
    };
    function init() {
      const appContainer = document.querySelector("#app-container");
      if (!appContainer) {
        throw new Error("Can not find #app-container");
      }
      const root = createRoot(appContainer);
      root.render(
        /* @__PURE__ */ jsxRuntimeExports.jsx(React$1.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrowserRouter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SidePanel, {}) }) })
      );
    }
    init();
  }
});
export default require_sidepanel();
