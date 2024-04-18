import {
  ApolloCache,
  ApolloClient,
  ApolloError,
  ApolloLink,
  AutoCleanedWeakCache,
  Cache,
  DocumentTransform,
  HttpLink,
  InMemoryCache,
  MissingFieldError,
  NetworkStatus,
  Observable,
  ObservableQuery,
  Trie,
  cacheSizes,
  canUseLayoutEffect,
  canUseSymbol,
  canUseWeakMap,
  canonicalStringify,
  checkFetcher,
  compact,
  concat,
  createFulfilledPromise,
  createHttpLink,
  createRejectedPromise,
  createSignalIfSupported,
  defaultDataIdFromObject,
  defaultPrinter,
  disableExperimentalFragmentVariables,
  disableFragmentWarnings,
  empty,
  enableExperimentalFragmentVariables,
  equal,
  execute,
  fallbackHttpConfig,
  from,
  fromError,
  fromPromise,
  gql,
  invariant,
  isApolloError,
  isNetworkRequestSettled,
  isNonEmptyArray,
  isReference,
  makeReference,
  makeVar,
  maybeDeepFreeze,
  mergeDeepArray,
  mergeOptions,
  parseAndCheckHttpResponse,
  registerGlobalCache,
  resetCaches,
  rewriteURIForGET,
  selectHttpOptionsAndBody,
  selectHttpOptionsAndBodyInternal,
  selectURI,
  serializeFetchParameter,
  setVerbosity,
  split,
  throwServerError,
  toPromise,
  wrapPromiseWithState
} from "./chunk-LLEINMBB.js";
import {
  __assign,
  __commonJS,
  __rest,
  __spreadArray,
  __toESM
} from "./chunk-TOUOA7WI.js";

// node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
  "node_modules/react/cjs/react.development.js"(exports, module) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var ReactVersion = "18.2.0";
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactCurrentDispatcher = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        var ReactCurrentBatchConfig = {
          transition: null
        };
        var ReactCurrentActQueue = {
          current: null,
          // Used to reproduce behavior of `batchedUpdates` in legacy mode.
          isBatchingLegacy: false,
          didScheduleLegacyUpdate: false
        };
        var ReactCurrentOwner = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        var ReactDebugCurrentFrame = {};
        var currentExtraStackFrame = null;
        function setExtraStackFrame(stack) {
          {
            currentExtraStackFrame = stack;
          }
        }
        {
          ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
            {
              currentExtraStackFrame = stack;
            }
          };
          ReactDebugCurrentFrame.getCurrentStack = null;
          ReactDebugCurrentFrame.getStackAddendum = function() {
            var stack = "";
            if (currentExtraStackFrame) {
              stack += currentExtraStackFrame;
            }
            var impl = ReactDebugCurrentFrame.getCurrentStack;
            if (impl) {
              stack += impl() || "";
            }
            return stack;
          };
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var ReactSharedInternals = {
          ReactCurrentDispatcher,
          ReactCurrentBatchConfig,
          ReactCurrentOwner
        };
        {
          ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
          ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
        }
        function warn(format) {
          {
            {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              printWarning("warn", format, args);
            }
          }
        }
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var didWarnStateUpdateForUnmountedComponent = {};
        function warnNoop(publicInstance, callerName) {
          {
            var _constructor = publicInstance.constructor;
            var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
            var warningKey = componentName + "." + callerName;
            if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
              return;
            }
            error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
            didWarnStateUpdateForUnmountedComponent[warningKey] = true;
          }
        }
        var ReactNoopUpdateQueue = {
          /**
           * Checks whether or not this composite component is mounted.
           * @param {ReactClass} publicInstance The instance we want to test.
           * @return {boolean} True if mounted, false otherwise.
           * @protected
           * @final
           */
          isMounted: function(publicInstance) {
            return false;
          },
          /**
           * Forces an update. This should only be invoked when it is known with
           * certainty that we are **not** in a DOM transaction.
           *
           * You may want to call this when you know that some deeper aspect of the
           * component's state has changed but `setState` was not called.
           *
           * This will not invoke `shouldComponentUpdate`, but it will invoke
           * `componentWillUpdate` and `componentDidUpdate`.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueForceUpdate: function(publicInstance, callback, callerName) {
            warnNoop(publicInstance, "forceUpdate");
          },
          /**
           * Replaces all of the state. Always use this or `setState` to mutate state.
           * You should treat `this.state` as immutable.
           *
           * There is no guarantee that `this.state` will be immediately updated, so
           * accessing `this.state` after calling this method may return the old value.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} completeState Next state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
            warnNoop(publicInstance, "replaceState");
          },
          /**
           * Sets a subset of the state. This only exists because _pendingState is
           * internal. This provides a merging strategy that is not available to deep
           * properties which is confusing. TODO: Expose pendingState or don't use it
           * during the merge.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} partialState Next partial state to be merged with state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} Name of the calling function in the public API.
           * @internal
           */
          enqueueSetState: function(publicInstance, partialState, callback, callerName) {
            warnNoop(publicInstance, "setState");
          }
        };
        var assign = Object.assign;
        var emptyObject = {};
        {
          Object.freeze(emptyObject);
        }
        function Component(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        Component.prototype.isReactComponent = {};
        Component.prototype.setState = function(partialState, callback) {
          if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null) {
            throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
          }
          this.updater.enqueueSetState(this, partialState, callback, "setState");
        };
        Component.prototype.forceUpdate = function(callback) {
          this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
        };
        {
          var deprecatedAPIs = {
            isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
            replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
          };
          var defineDeprecationWarning = function(methodName, info) {
            Object.defineProperty(Component.prototype, methodName, {
              get: function() {
                warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                return void 0;
              }
            });
          };
          for (var fnName in deprecatedAPIs) {
            if (deprecatedAPIs.hasOwnProperty(fnName)) {
              defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
            }
          }
        }
        function ComponentDummy() {
        }
        ComponentDummy.prototype = Component.prototype;
        function PureComponent(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
        pureComponentPrototype.constructor = PureComponent;
        assign(pureComponentPrototype, Component.prototype);
        pureComponentPrototype.isPureReactComponent = true;
        function createRef() {
          var refObject = {
            current: null
          };
          {
            Object.seal(refObject);
          }
          return refObject;
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var hasOwnProperty2 = Object.prototype.hasOwnProperty;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty2.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty2.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function defineKeyPropWarningGetter(props, displayName) {
          var warnAboutAccessingKey = function() {
            {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
        function defineRefPropWarningGetter(props, displayName) {
          var warnAboutAccessingRef = function() {
            {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: true
          });
        }
        function warnIfStringRefCannotBeAutoConverted(config) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        var ReactElement = function(type, key, ref, self, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function createElement3(type, config, children) {
          var propName;
          var props = {};
          var key = null;
          var ref = null;
          var self = null;
          var source = null;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              {
                warnIfStringRefCannotBeAutoConverted(config);
              }
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            self = config.__self === void 0 ? null : config.__self;
            source = config.__source === void 0 ? null : config.__source;
            for (propName in config) {
              if (hasOwnProperty2.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            {
              if (Object.freeze) {
                Object.freeze(childArray);
              }
            }
            props.children = childArray;
          }
          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for (propName in defaultProps) {
              if (props[propName] === void 0) {
                props[propName] = defaultProps[propName];
              }
            }
          }
          {
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
          }
          return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
        }
        function cloneAndReplaceKey(oldElement, newKey) {
          var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
          return newElement;
        }
        function cloneElement(element, config, children) {
          if (element === null || element === void 0) {
            throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
          }
          var propName;
          var props = assign({}, element.props);
          var key = element.key;
          var ref = element.ref;
          var self = element._self;
          var source = element._source;
          var owner = element._owner;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              owner = ReactCurrentOwner.current;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            var defaultProps;
            if (element.type && element.type.defaultProps) {
              defaultProps = element.type.defaultProps;
            }
            for (propName in config) {
              if (hasOwnProperty2.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                if (config[propName] === void 0 && defaultProps !== void 0) {
                  props[propName] = defaultProps[propName];
                } else {
                  props[propName] = config[propName];
                }
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            props.children = childArray;
          }
          return ReactElement(element.type, key, ref, self, source, owner, props);
        }
        function isValidElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        var SEPARATOR = ".";
        var SUBSEPARATOR = ":";
        function escape(key) {
          var escapeRegex = /[=:]/g;
          var escaperLookup = {
            "=": "=0",
            ":": "=2"
          };
          var escapedString = key.replace(escapeRegex, function(match) {
            return escaperLookup[match];
          });
          return "$" + escapedString;
        }
        var didWarnAboutMaps = false;
        var userProvidedKeyEscapeRegex = /\/+/g;
        function escapeUserProvidedKey(text) {
          return text.replace(userProvidedKeyEscapeRegex, "$&/");
        }
        function getElementKey(element, index) {
          if (typeof element === "object" && element !== null && element.key != null) {
            {
              checkKeyStringCoercion(element.key);
            }
            return escape("" + element.key);
          }
          return index.toString(36);
        }
        function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
          var type = typeof children;
          if (type === "undefined" || type === "boolean") {
            children = null;
          }
          var invokeCallback = false;
          if (children === null) {
            invokeCallback = true;
          } else {
            switch (type) {
              case "string":
              case "number":
                invokeCallback = true;
                break;
              case "object":
                switch (children.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                  case REACT_PORTAL_TYPE:
                    invokeCallback = true;
                }
            }
          }
          if (invokeCallback) {
            var _child = children;
            var mappedChild = callback(_child);
            var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
            if (isArray(mappedChild)) {
              var escapedChildKey = "";
              if (childKey != null) {
                escapedChildKey = escapeUserProvidedKey(childKey) + "/";
              }
              mapIntoArray(mappedChild, array, escapedChildKey, "", function(c) {
                return c;
              });
            } else if (mappedChild != null) {
              if (isValidElement(mappedChild)) {
                {
                  if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
                    checkKeyStringCoercion(mappedChild.key);
                  }
                }
                mappedChild = cloneAndReplaceKey(
                  mappedChild,
                  // Keep both the (mapped) and old keys if they differ, just as
                  // traverseAllChildren used to do for objects as children
                  escapedPrefix + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                  (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? (
                    // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                    // eslint-disable-next-line react-internal/safe-string-coercion
                    escapeUserProvidedKey("" + mappedChild.key) + "/"
                  ) : "") + childKey
                );
              }
              array.push(mappedChild);
            }
            return 1;
          }
          var child;
          var nextName;
          var subtreeCount = 0;
          var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
          if (isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              child = children[i];
              nextName = nextNamePrefix + getElementKey(child, i);
              subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
            }
          } else {
            var iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === "function") {
              var iterableChildren = children;
              {
                if (iteratorFn === iterableChildren.entries) {
                  if (!didWarnAboutMaps) {
                    warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                  }
                  didWarnAboutMaps = true;
                }
              }
              var iterator = iteratorFn.call(iterableChildren);
              var step;
              var ii = 0;
              while (!(step = iterator.next()).done) {
                child = step.value;
                nextName = nextNamePrefix + getElementKey(child, ii++);
                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
              }
            } else if (type === "object") {
              var childrenString = String(children);
              throw new Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
            }
          }
          return subtreeCount;
        }
        function mapChildren(children, func, context) {
          if (children == null) {
            return children;
          }
          var result = [];
          var count = 0;
          mapIntoArray(children, result, "", "", function(child) {
            return func.call(context, child, count++);
          });
          return result;
        }
        function countChildren(children) {
          var n = 0;
          mapChildren(children, function() {
            n++;
          });
          return n;
        }
        function forEachChildren(children, forEachFunc, forEachContext) {
          mapChildren(children, function() {
            forEachFunc.apply(this, arguments);
          }, forEachContext);
        }
        function toArray(children) {
          return mapChildren(children, function(child) {
            return child;
          }) || [];
        }
        function onlyChild(children) {
          if (!isValidElement(children)) {
            throw new Error("React.Children.only expected to receive a single React element child.");
          }
          return children;
        }
        function createContext2(defaultValue) {
          var context = {
            $$typeof: REACT_CONTEXT_TYPE,
            // As a workaround to support multiple concurrent renderers, we categorize
            // some renderers as primary and others as secondary. We only expect
            // there to be two concurrent renderers at most: React Native (primary) and
            // Fabric (secondary); React DOM (primary) and React ART (secondary).
            // Secondary renderers store their context values on separate fields.
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            // Used to track how many concurrent renderers this context currently
            // supports within in a single renderer. Such as parallel server rendering.
            _threadCount: 0,
            // These are circular
            Provider: null,
            Consumer: null,
            // Add these to use same hidden class in VM as ServerContext
            _defaultValue: null,
            _globalName: null
          };
          context.Provider = {
            $$typeof: REACT_PROVIDER_TYPE,
            _context: context
          };
          var hasWarnedAboutUsingNestedContextConsumers = false;
          var hasWarnedAboutUsingConsumerProvider = false;
          var hasWarnedAboutDisplayNameOnConsumer = false;
          {
            var Consumer = {
              $$typeof: REACT_CONTEXT_TYPE,
              _context: context
            };
            Object.defineProperties(Consumer, {
              Provider: {
                get: function() {
                  if (!hasWarnedAboutUsingConsumerProvider) {
                    hasWarnedAboutUsingConsumerProvider = true;
                    error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                  }
                  return context.Provider;
                },
                set: function(_Provider) {
                  context.Provider = _Provider;
                }
              },
              _currentValue: {
                get: function() {
                  return context._currentValue;
                },
                set: function(_currentValue) {
                  context._currentValue = _currentValue;
                }
              },
              _currentValue2: {
                get: function() {
                  return context._currentValue2;
                },
                set: function(_currentValue2) {
                  context._currentValue2 = _currentValue2;
                }
              },
              _threadCount: {
                get: function() {
                  return context._threadCount;
                },
                set: function(_threadCount) {
                  context._threadCount = _threadCount;
                }
              },
              Consumer: {
                get: function() {
                  if (!hasWarnedAboutUsingNestedContextConsumers) {
                    hasWarnedAboutUsingNestedContextConsumers = true;
                    error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                  }
                  return context.Consumer;
                }
              },
              displayName: {
                get: function() {
                  return context.displayName;
                },
                set: function(displayName) {
                  if (!hasWarnedAboutDisplayNameOnConsumer) {
                    warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                    hasWarnedAboutDisplayNameOnConsumer = true;
                  }
                }
              }
            });
            context.Consumer = Consumer;
          }
          {
            context._currentRenderer = null;
            context._currentRenderer2 = null;
          }
          return context;
        }
        var Uninitialized = -1;
        var Pending = 0;
        var Resolved = 1;
        var Rejected = 2;
        function lazyInitializer(payload) {
          if (payload._status === Uninitialized) {
            var ctor = payload._result;
            var thenable = ctor();
            thenable.then(function(moduleObject2) {
              if (payload._status === Pending || payload._status === Uninitialized) {
                var resolved = payload;
                resolved._status = Resolved;
                resolved._result = moduleObject2;
              }
            }, function(error2) {
              if (payload._status === Pending || payload._status === Uninitialized) {
                var rejected = payload;
                rejected._status = Rejected;
                rejected._result = error2;
              }
            });
            if (payload._status === Uninitialized) {
              var pending = payload;
              pending._status = Pending;
              pending._result = thenable;
            }
          }
          if (payload._status === Resolved) {
            var moduleObject = payload._result;
            {
              if (moduleObject === void 0) {
                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", moduleObject);
              }
            }
            {
              if (!("default" in moduleObject)) {
                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
              }
            }
            return moduleObject.default;
          } else {
            throw payload._result;
          }
        }
        function lazy(ctor) {
          var payload = {
            // We use these fields to store the result.
            _status: Uninitialized,
            _result: ctor
          };
          var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: payload,
            _init: lazyInitializer
          };
          {
            var defaultProps;
            var propTypes;
            Object.defineProperties(lazyType, {
              defaultProps: {
                configurable: true,
                get: function() {
                  return defaultProps;
                },
                set: function(newDefaultProps) {
                  error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  defaultProps = newDefaultProps;
                  Object.defineProperty(lazyType, "defaultProps", {
                    enumerable: true
                  });
                }
              },
              propTypes: {
                configurable: true,
                get: function() {
                  return propTypes;
                },
                set: function(newPropTypes) {
                  error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  propTypes = newPropTypes;
                  Object.defineProperty(lazyType, "propTypes", {
                    enumerable: true
                  });
                }
              }
            });
          }
          return lazyType;
        }
        function forwardRef(render) {
          {
            if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
              error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
            } else if (typeof render !== "function") {
              error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
            } else {
              if (render.length !== 0 && render.length !== 2) {
                error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
              }
            }
            if (render != null) {
              if (render.defaultProps != null || render.propTypes != null) {
                error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
              }
            }
          }
          var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (!render.name && !render.displayName) {
                  render.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function memo(type, compare) {
          {
            if (!isValidElementType(type)) {
              error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
            }
          }
          var elementType = {
            $$typeof: REACT_MEMO_TYPE,
            type,
            compare: compare === void 0 ? null : compare
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (!type.name && !type.displayName) {
                  type.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        function resolveDispatcher() {
          var dispatcher = ReactCurrentDispatcher.current;
          {
            if (dispatcher === null) {
              error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
            }
          }
          return dispatcher;
        }
        function useContext4(Context) {
          var dispatcher = resolveDispatcher();
          {
            if (Context._context !== void 0) {
              var realContext = Context._context;
              if (realContext.Consumer === Context) {
                error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
              } else if (realContext.Provider === Context) {
                error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
              }
            }
          }
          return dispatcher.useContext(Context);
        }
        function useState8(initialState) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useState(initialState);
        }
        function useReducer2(reducer, initialArg, init) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useReducer(reducer, initialArg, init);
        }
        function useRef8(initialValue) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useRef(initialValue);
        }
        function useEffect7(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useEffect(create, deps);
        }
        function useInsertionEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useInsertionEffect(create, deps);
        }
        function useLayoutEffect3(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useLayoutEffect(create, deps);
        }
        function useCallback12(callback, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useCallback(callback, deps);
        }
        function useMemo6(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useMemo(create, deps);
        }
        function useImperativeHandle(ref, create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useImperativeHandle(ref, create, deps);
        }
        function useDebugValue(value, formatterFn) {
          {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDebugValue(value, formatterFn);
          }
        }
        function useTransition() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useTransition();
        }
        function useDeferredValue(value) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useDeferredValue(value);
        }
        function useId() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useId();
        }
        function useSyncExternalStore2(subscribe, getSnapshot, getServerSnapshot) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
        }
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher$1.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component2) {
          var prototype = Component2.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty2);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              setExtraStackFrame(stack);
            } else {
              setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function getDeclarationErrorAddendum() {
          if (ReactCurrentOwner.current) {
            var name = getComponentNameFromType(ReactCurrentOwner.current.type);
            if (name) {
              return "\n\nCheck the render method of `" + name + "`.";
            }
          }
          return "";
        }
        function getSourceInfoErrorAddendum(source) {
          if (source !== void 0) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
            var lineNumber = source.lineNumber;
            return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
          }
          return "";
        }
        function getSourceInfoErrorAddendumForProps(elementProps) {
          if (elementProps !== null && elementProps !== void 0) {
            return getSourceInfoErrorAddendum(elementProps.__source);
          }
          return "";
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          var info = getDeclarationErrorAddendum();
          if (!info) {
            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
            if (parentName) {
              info = "\n\nCheck the top-level render call using <" + parentName + ">.";
            }
          }
          return info;
        }
        function validateExplicitKey(element, parentType) {
          if (!element._store || element._store.validated || element.key != null) {
            return;
          }
          element._store.validated = true;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }
          ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
          var childOwner = "";
          if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
            childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
          }
          {
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          if (typeof node !== "object") {
            return;
          }
          if (isArray(node)) {
            for (var i = 0; i < node.length; i++) {
              var child = node[i];
              if (isValidElement(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement(node)) {
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === "function") {
              if (iteratorFn !== node.entries) {
                var iterator = iteratorFn.call(node);
                var step;
                while (!(step = iterator.next()).done) {
                  if (isValidElement(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function createElementWithValidation(type, props, children) {
          var validType = isValidElementType(type);
          if (!validType) {
            var info = "";
            if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
              info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            }
            var sourceInfo = getSourceInfoErrorAddendumForProps(props);
            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }
            var typeString;
            if (type === null) {
              typeString = "null";
            } else if (isArray(type)) {
              typeString = "array";
            } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
              typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
              info = " Did you accidentally export a JSX literal instead of a component?";
            } else {
              typeString = typeof type;
            }
            {
              error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
          }
          var element = createElement3.apply(this, arguments);
          if (element == null) {
            return element;
          }
          if (validType) {
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], type);
            }
          }
          if (type === REACT_FRAGMENT_TYPE) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }
          return element;
        }
        var didWarnAboutDeprecatedCreateFactory = false;
        function createFactoryWithValidation(type) {
          var validatedFactory = createElementWithValidation.bind(null, type);
          validatedFactory.type = type;
          {
            if (!didWarnAboutDeprecatedCreateFactory) {
              didWarnAboutDeprecatedCreateFactory = true;
              warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
            }
            Object.defineProperty(validatedFactory, "type", {
              enumerable: false,
              get: function() {
                warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                Object.defineProperty(this, "type", {
                  value: type
                });
                return type;
              }
            });
          }
          return validatedFactory;
        }
        function cloneElementWithValidation(element, props, children) {
          var newElement = cloneElement.apply(this, arguments);
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], newElement.type);
          }
          validatePropTypes(newElement);
          return newElement;
        }
        function startTransition(scope, options) {
          var prevTransition = ReactCurrentBatchConfig.transition;
          ReactCurrentBatchConfig.transition = {};
          var currentTransition = ReactCurrentBatchConfig.transition;
          {
            ReactCurrentBatchConfig.transition._updatedFibers = /* @__PURE__ */ new Set();
          }
          try {
            scope();
          } finally {
            ReactCurrentBatchConfig.transition = prevTransition;
            {
              if (prevTransition === null && currentTransition._updatedFibers) {
                var updatedFibersCount = currentTransition._updatedFibers.size;
                if (updatedFibersCount > 10) {
                  warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
                }
                currentTransition._updatedFibers.clear();
              }
            }
          }
        }
        var didWarnAboutMessageChannel = false;
        var enqueueTaskImpl = null;
        function enqueueTask(task) {
          if (enqueueTaskImpl === null) {
            try {
              var requireString = ("require" + Math.random()).slice(0, 7);
              var nodeRequire = module && module[requireString];
              enqueueTaskImpl = nodeRequire.call(module, "timers").setImmediate;
            } catch (_err) {
              enqueueTaskImpl = function(callback) {
                {
                  if (didWarnAboutMessageChannel === false) {
                    didWarnAboutMessageChannel = true;
                    if (typeof MessageChannel === "undefined") {
                      error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.");
                    }
                  }
                }
                var channel = new MessageChannel();
                channel.port1.onmessage = callback;
                channel.port2.postMessage(void 0);
              };
            }
          }
          return enqueueTaskImpl(task);
        }
        var actScopeDepth = 0;
        var didWarnNoAwaitAct = false;
        function act(callback) {
          {
            var prevActScopeDepth = actScopeDepth;
            actScopeDepth++;
            if (ReactCurrentActQueue.current === null) {
              ReactCurrentActQueue.current = [];
            }
            var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
            var result;
            try {
              ReactCurrentActQueue.isBatchingLegacy = true;
              result = callback();
              if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
                var queue = ReactCurrentActQueue.current;
                if (queue !== null) {
                  ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                  flushActQueue(queue);
                }
              }
            } catch (error2) {
              popActScope(prevActScopeDepth);
              throw error2;
            } finally {
              ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
            }
            if (result !== null && typeof result === "object" && typeof result.then === "function") {
              var thenableResult = result;
              var wasAwaited = false;
              var thenable = {
                then: function(resolve, reject) {
                  wasAwaited = true;
                  thenableResult.then(function(returnValue2) {
                    popActScope(prevActScopeDepth);
                    if (actScopeDepth === 0) {
                      recursivelyFlushAsyncActWork(returnValue2, resolve, reject);
                    } else {
                      resolve(returnValue2);
                    }
                  }, function(error2) {
                    popActScope(prevActScopeDepth);
                    reject(error2);
                  });
                }
              };
              {
                if (!didWarnNoAwaitAct && typeof Promise !== "undefined") {
                  Promise.resolve().then(function() {
                  }).then(function() {
                    if (!wasAwaited) {
                      didWarnNoAwaitAct = true;
                      error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);");
                    }
                  });
                }
              }
              return thenable;
            } else {
              var returnValue = result;
              popActScope(prevActScopeDepth);
              if (actScopeDepth === 0) {
                var _queue = ReactCurrentActQueue.current;
                if (_queue !== null) {
                  flushActQueue(_queue);
                  ReactCurrentActQueue.current = null;
                }
                var _thenable = {
                  then: function(resolve, reject) {
                    if (ReactCurrentActQueue.current === null) {
                      ReactCurrentActQueue.current = [];
                      recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                    } else {
                      resolve(returnValue);
                    }
                  }
                };
                return _thenable;
              } else {
                var _thenable2 = {
                  then: function(resolve, reject) {
                    resolve(returnValue);
                  }
                };
                return _thenable2;
              }
            }
          }
        }
        function popActScope(prevActScopeDepth) {
          {
            if (prevActScopeDepth !== actScopeDepth - 1) {
              error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
            }
            actScopeDepth = prevActScopeDepth;
          }
        }
        function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
          {
            var queue = ReactCurrentActQueue.current;
            if (queue !== null) {
              try {
                flushActQueue(queue);
                enqueueTask(function() {
                  if (queue.length === 0) {
                    ReactCurrentActQueue.current = null;
                    resolve(returnValue);
                  } else {
                    recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                  }
                });
              } catch (error2) {
                reject(error2);
              }
            } else {
              resolve(returnValue);
            }
          }
        }
        var isFlushing = false;
        function flushActQueue(queue) {
          {
            if (!isFlushing) {
              isFlushing = true;
              var i = 0;
              try {
                for (; i < queue.length; i++) {
                  var callback = queue[i];
                  do {
                    callback = callback(true);
                  } while (callback !== null);
                }
                queue.length = 0;
              } catch (error2) {
                queue = queue.slice(i + 1);
                throw error2;
              } finally {
                isFlushing = false;
              }
            }
          }
        }
        var createElement$1 = createElementWithValidation;
        var cloneElement$1 = cloneElementWithValidation;
        var createFactory = createFactoryWithValidation;
        var Children = {
          map: mapChildren,
          forEach: forEachChildren,
          count: countChildren,
          toArray,
          only: onlyChild
        };
        exports.Children = Children;
        exports.Component = Component;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.Profiler = REACT_PROFILER_TYPE;
        exports.PureComponent = PureComponent;
        exports.StrictMode = REACT_STRICT_MODE_TYPE;
        exports.Suspense = REACT_SUSPENSE_TYPE;
        exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
        exports.cloneElement = cloneElement$1;
        exports.createContext = createContext2;
        exports.createElement = createElement$1;
        exports.createFactory = createFactory;
        exports.createRef = createRef;
        exports.forwardRef = forwardRef;
        exports.isValidElement = isValidElement;
        exports.lazy = lazy;
        exports.memo = memo;
        exports.startTransition = startTransition;
        exports.unstable_act = act;
        exports.useCallback = useCallback12;
        exports.useContext = useContext4;
        exports.useDebugValue = useDebugValue;
        exports.useDeferredValue = useDeferredValue;
        exports.useEffect = useEffect7;
        exports.useId = useId;
        exports.useImperativeHandle = useImperativeHandle;
        exports.useInsertionEffect = useInsertionEffect;
        exports.useLayoutEffect = useLayoutEffect3;
        exports.useMemo = useMemo6;
        exports.useReducer = useReducer2;
        exports.useRef = useRef8;
        exports.useState = useState8;
        exports.useSyncExternalStore = useSyncExternalStore2;
        exports.useTransition = useTransition;
        exports.version = ReactVersion;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// node_modules/react/index.js
var require_react = __commonJS({
  "node_modules/react/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_development();
    }
  }
});

// node_modules/rehackt/index.js
var require_rehackt = __commonJS({
  "node_modules/rehackt/index.js"(exports, module) {
    "use strict";
    module.exports = require_react();
  }
});

// node_modules/@apollo/client/react/context/ApolloConsumer.js
var React2 = __toESM(require_rehackt(), 1);

// node_modules/@apollo/client/react/context/ApolloContext.js
var React = __toESM(require_rehackt(), 1);
var contextKey = canUseSymbol ? Symbol.for("__APOLLO_CONTEXT__") : "__APOLLO_CONTEXT__";
function getApolloContext() {
  invariant("createContext" in React, 45);
  var context = React.createContext[contextKey];
  if (!context) {
    Object.defineProperty(React.createContext, contextKey, {
      value: context = React.createContext({}),
      enumerable: false,
      writable: false,
      configurable: true
    });
    context.displayName = "ApolloContext";
  }
  return context;
}
var resetApolloContext = getApolloContext;

// node_modules/@apollo/client/react/context/ApolloConsumer.js
var ApolloConsumer = function(props) {
  var ApolloContext = getApolloContext();
  return React2.createElement(ApolloContext.Consumer, null, function(context) {
    invariant(context && context.client, 44);
    return props.children(context.client);
  });
};

// node_modules/@apollo/client/react/context/ApolloProvider.js
var React3 = __toESM(require_rehackt(), 1);
var ApolloProvider = function(_a) {
  var client = _a.client, children = _a.children;
  var ApolloContext = getApolloContext();
  var parentContext = React3.useContext(ApolloContext);
  var context = React3.useMemo(function() {
    return __assign(__assign({}, parentContext), { client: client || parentContext.client });
  }, [parentContext, client]);
  invariant(context.client, 46);
  return React3.createElement(ApolloContext.Provider, { value: context }, children);
};

// node_modules/@apollo/client/react/hooks/useApolloClient.js
var React4 = __toESM(require_rehackt(), 1);
function useApolloClient(override) {
  var context = React4.useContext(getApolloContext());
  var client = override || context.client;
  invariant(!!client, 49);
  return client;
}

// node_modules/@apollo/client/react/hooks/useLazyQuery.js
var React12 = __toESM(require_rehackt(), 1);

// node_modules/@apollo/client/react/hooks/useQuery.js
var React11 = __toESM(require_rehackt(), 1);

// node_modules/@apollo/client/react/hooks/useSyncExternalStore.js
var React5 = __toESM(require_rehackt(), 1);
var didWarnUncachedGetSnapshot = false;
var uSESKey = "useSyncExternalStore";
var realHook = React5[uSESKey];
var useSyncExternalStore = realHook || function(subscribe, getSnapshot, getServerSnapshot) {
  var value = getSnapshot();
  if (
    // DEVIATION: Using __DEV__
    globalThis.__DEV__ !== false && !didWarnUncachedGetSnapshot && // DEVIATION: Not using Object.is because we know our snapshots will never
    // be exotic primitive values like NaN, which is !== itself.
    value !== getSnapshot()
  ) {
    didWarnUncachedGetSnapshot = true;
    globalThis.__DEV__ !== false && invariant.error(58);
  }
  var _a = React5.useState({
    inst: { value, getSnapshot }
  }), inst = _a[0].inst, forceUpdate = _a[1];
  if (canUseLayoutEffect) {
    React5.useLayoutEffect(function() {
      Object.assign(inst, { value, getSnapshot });
      if (checkIfSnapshotChanged(inst)) {
        forceUpdate({ inst });
      }
    }, [subscribe, value, getSnapshot]);
  } else {
    Object.assign(inst, { value, getSnapshot });
  }
  React5.useEffect(function() {
    if (checkIfSnapshotChanged(inst)) {
      forceUpdate({ inst });
    }
    return subscribe(function handleStoreChange() {
      if (checkIfSnapshotChanged(inst)) {
        forceUpdate({ inst });
      }
    });
  }, [subscribe]);
  return value;
};
function checkIfSnapshotChanged(_a) {
  var value = _a.value, getSnapshot = _a.getSnapshot;
  try {
    return value !== getSnapshot();
  } catch (_b) {
    return true;
  }
}

// node_modules/@apollo/client/react/parser/index.js
var DocumentType;
(function(DocumentType2) {
  DocumentType2[DocumentType2["Query"] = 0] = "Query";
  DocumentType2[DocumentType2["Mutation"] = 1] = "Mutation";
  DocumentType2[DocumentType2["Subscription"] = 2] = "Subscription";
})(DocumentType || (DocumentType = {}));
var cache;
function operationName(type) {
  var name;
  switch (type) {
    case DocumentType.Query:
      name = "Query";
      break;
    case DocumentType.Mutation:
      name = "Mutation";
      break;
    case DocumentType.Subscription:
      name = "Subscription";
      break;
  }
  return name;
}
function parser(document) {
  if (!cache) {
    cache = new AutoCleanedWeakCache(
      cacheSizes.parser || 1e3
      /* defaultCacheSizes.parser */
    );
  }
  var cached = cache.get(document);
  if (cached)
    return cached;
  var variables, type, name;
  invariant(!!document && !!document.kind, 59, document);
  var fragments = [];
  var queries = [];
  var mutations = [];
  var subscriptions = [];
  for (var _i = 0, _a = document.definitions; _i < _a.length; _i++) {
    var x = _a[_i];
    if (x.kind === "FragmentDefinition") {
      fragments.push(x);
      continue;
    }
    if (x.kind === "OperationDefinition") {
      switch (x.operation) {
        case "query":
          queries.push(x);
          break;
        case "mutation":
          mutations.push(x);
          break;
        case "subscription":
          subscriptions.push(x);
          break;
      }
    }
  }
  invariant(!fragments.length || queries.length || mutations.length || subscriptions.length, 60);
  invariant(
    queries.length + mutations.length + subscriptions.length <= 1,
    61,
    document,
    queries.length,
    subscriptions.length,
    mutations.length
  );
  type = queries.length ? DocumentType.Query : DocumentType.Mutation;
  if (!queries.length && !mutations.length)
    type = DocumentType.Subscription;
  var definitions = queries.length ? queries : mutations.length ? mutations : subscriptions;
  invariant(definitions.length === 1, 62, document, definitions.length);
  var definition = definitions[0];
  variables = definition.variableDefinitions || [];
  if (definition.name && definition.name.kind === "Name") {
    name = definition.name.value;
  } else {
    name = "data";
  }
  var payload = { name, type, variables };
  cache.set(document, payload);
  return payload;
}
parser.resetCache = function() {
  cache = void 0;
};
if (globalThis.__DEV__ !== false) {
  registerGlobalCache("parser", function() {
    return cache ? cache.size : 0;
  });
}
function verifyDocumentType(document, type) {
  var operation = parser(document);
  var requiredOperationName = operationName(type);
  var usedOperationName = operationName(operation.type);
  invariant(
    operation.type === type,
    63,
    requiredOperationName,
    requiredOperationName,
    usedOperationName
  );
}

// node_modules/@apollo/client/react/hooks/internal/useDeepMemo.js
var React6 = __toESM(require_rehackt(), 1);
function useDeepMemo(memoFn, deps) {
  var ref = React6.useRef();
  if (!ref.current || !equal(ref.current.deps, deps)) {
    ref.current = { value: memoFn(), deps };
  }
  return ref.current.value;
}

// node_modules/@apollo/client/react/hooks/internal/useIsomorphicLayoutEffect.js
var React7 = __toESM(require_rehackt(), 1);

// node_modules/@apollo/client/react/hooks/internal/useRenderGuard.js
var React8 = __toESM(require_rehackt(), 1);
function getRenderDispatcher() {
  var _a, _b;
  return (_b = (_a = React8.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || _a === void 0 ? void 0 : _a.ReactCurrentDispatcher) === null || _b === void 0 ? void 0 : _b.current;
}
var RenderDispatcher = null;
function useRenderGuard() {
  RenderDispatcher = getRenderDispatcher();
  return React8.useCallback(function() {
    return RenderDispatcher !== null && RenderDispatcher === getRenderDispatcher();
  }, []);
}

// node_modules/@apollo/client/react/hooks/internal/useLazyRef.js
var React9 = __toESM(require_rehackt(), 1);
var INIT = {};
function useLazyRef(getInitialValue) {
  var ref = React9.useRef(INIT);
  if (ref.current === INIT) {
    ref.current = getInitialValue();
  }
  return ref;
}

// node_modules/@apollo/client/react/hooks/internal/__use.js
var React10 = __toESM(require_rehackt(), 1);
var useKey = "use";
var realHook2 = React10[useKey];
var __use = realHook2 || function __use2(promise) {
  var statefulPromise = wrapPromiseWithState(promise);
  switch (statefulPromise.status) {
    case "pending":
      throw statefulPromise;
    case "rejected":
      throw statefulPromise.reason;
    case "fulfilled":
      return statefulPromise.value;
  }
};

// node_modules/@apollo/client/react/hooks/internal/wrapHook.js
var wrapperSymbol = Symbol.for("apollo.hook.wrappers");
function wrapHook(hookName, useHook, clientOrObsQuery) {
  var queryManager = clientOrObsQuery["queryManager"];
  var wrappers = queryManager && queryManager[wrapperSymbol];
  var wrapper = wrappers && wrappers[hookName];
  return wrapper ? wrapper(useHook) : useHook;
}

// node_modules/@apollo/client/react/hooks/useQuery.js
var hasOwnProperty = Object.prototype.hasOwnProperty;
function useQuery(query, options) {
  if (options === void 0) {
    options = /* @__PURE__ */ Object.create(null);
  }
  return wrapHook("useQuery", _useQuery, useApolloClient(options && options.client))(query, options);
}
function _useQuery(query, options) {
  return useInternalState(useApolloClient(options.client), query).useQuery(options);
}
function useInternalState(client, query) {
  var stateRef = React11.useRef();
  if (!stateRef.current || client !== stateRef.current.client || query !== stateRef.current.query) {
    stateRef.current = new InternalState(client, query, stateRef.current);
  }
  var state = stateRef.current;
  state.forceUpdateState = React11.useReducer(function(tick) {
    return tick + 1;
  }, 0)[1];
  return state;
}
var InternalState = (
  /** @class */
  function() {
    function InternalState2(client, query, previous) {
      var _this = this;
      this.client = client;
      this.query = query;
      this.forceUpdate = function() {
        return _this.forceUpdateState();
      };
      this.ssrDisabledResult = maybeDeepFreeze({
        loading: true,
        data: void 0,
        error: void 0,
        networkStatus: NetworkStatus.loading
      });
      this.skipStandbyResult = maybeDeepFreeze({
        loading: false,
        data: void 0,
        error: void 0,
        networkStatus: NetworkStatus.ready
      });
      this.toQueryResultCache = new (canUseWeakMap ? WeakMap : Map)();
      verifyDocumentType(query, DocumentType.Query);
      var previousResult = previous && previous.result;
      var previousData = previousResult && previousResult.data;
      if (previousData) {
        this.previousData = previousData;
      }
    }
    InternalState2.prototype.forceUpdateState = function() {
      globalThis.__DEV__ !== false && invariant.warn(51);
    };
    InternalState2.prototype.executeQuery = function(options) {
      var _this = this;
      var _a;
      if (options.query) {
        Object.assign(this, { query: options.query });
      }
      this.watchQueryOptions = this.createWatchQueryOptions(this.queryHookOptions = options);
      var concast = this.observable.reobserveAsConcast(this.getObsQueryOptions());
      this.previousData = ((_a = this.result) === null || _a === void 0 ? void 0 : _a.data) || this.previousData;
      this.result = void 0;
      this.forceUpdate();
      return new Promise(function(resolve) {
        var result;
        concast.subscribe({
          next: function(value) {
            result = value;
          },
          error: function() {
            resolve(_this.toQueryResult(_this.observable.getCurrentResult()));
          },
          complete: function() {
            resolve(_this.toQueryResult(result));
          }
        });
      });
    };
    InternalState2.prototype.useQuery = function(options) {
      var _this = this;
      this.renderPromises = React11.useContext(getApolloContext()).renderPromises;
      this.useOptions(options);
      var obsQuery = this.useObservableQuery();
      var result = useSyncExternalStore(React11.useCallback(function(handleStoreChange) {
        if (_this.renderPromises) {
          return function() {
          };
        }
        _this.forceUpdate = handleStoreChange;
        var onNext = function() {
          var previousResult = _this.result;
          var result2 = obsQuery.getCurrentResult();
          if (previousResult && previousResult.loading === result2.loading && previousResult.networkStatus === result2.networkStatus && equal(previousResult.data, result2.data)) {
            return;
          }
          _this.setResult(result2);
        };
        var onError = function(error) {
          subscription.unsubscribe();
          subscription = obsQuery.resubscribeAfterError(onNext, onError);
          if (!hasOwnProperty.call(error, "graphQLErrors")) {
            throw error;
          }
          var previousResult = _this.result;
          if (!previousResult || previousResult && previousResult.loading || !equal(error, previousResult.error)) {
            _this.setResult({
              data: previousResult && previousResult.data,
              error,
              loading: false,
              networkStatus: NetworkStatus.error
            });
          }
        };
        var subscription = obsQuery.subscribe(onNext, onError);
        return function() {
          setTimeout(function() {
            return subscription.unsubscribe();
          });
          _this.forceUpdate = function() {
            return _this.forceUpdateState();
          };
        };
      }, [
        // We memoize the subscribe function using useCallback and the following
        // dependency keys, because the subscribe function reference is all that
        // useSyncExternalStore uses internally as a dependency key for the
        // useEffect ultimately responsible for the subscription, so we are
        // effectively passing this dependency array to that useEffect buried
        // inside useSyncExternalStore, as desired.
        obsQuery,
        this.renderPromises,
        this.client.disableNetworkFetches
      ]), function() {
        return _this.getCurrentResult();
      }, function() {
        return _this.getCurrentResult();
      });
      this.unsafeHandlePartialRefetch(result);
      return this.toQueryResult(result);
    };
    InternalState2.prototype.useOptions = function(options) {
      var _a;
      var watchQueryOptions = this.createWatchQueryOptions(this.queryHookOptions = options);
      var currentWatchQueryOptions = this.watchQueryOptions;
      if (!equal(watchQueryOptions, currentWatchQueryOptions)) {
        this.watchQueryOptions = watchQueryOptions;
        if (currentWatchQueryOptions && this.observable) {
          this.observable.reobserve(this.getObsQueryOptions());
          this.previousData = ((_a = this.result) === null || _a === void 0 ? void 0 : _a.data) || this.previousData;
          this.result = void 0;
        }
      }
      this.onCompleted = options.onCompleted || InternalState2.prototype.onCompleted;
      this.onError = options.onError || InternalState2.prototype.onError;
      if ((this.renderPromises || this.client.disableNetworkFetches) && this.queryHookOptions.ssr === false && !this.queryHookOptions.skip) {
        this.result = this.ssrDisabledResult;
      } else if (this.queryHookOptions.skip || this.watchQueryOptions.fetchPolicy === "standby") {
        this.result = this.skipStandbyResult;
      } else if (this.result === this.ssrDisabledResult || this.result === this.skipStandbyResult) {
        this.result = void 0;
      }
    };
    InternalState2.prototype.getObsQueryOptions = function() {
      var toMerge = [];
      var globalDefaults = this.client.defaultOptions.watchQuery;
      if (globalDefaults)
        toMerge.push(globalDefaults);
      if (this.queryHookOptions.defaultOptions) {
        toMerge.push(this.queryHookOptions.defaultOptions);
      }
      toMerge.push(compact(this.observable && this.observable.options, this.watchQueryOptions));
      return toMerge.reduce(mergeOptions);
    };
    InternalState2.prototype.createWatchQueryOptions = function(_a) {
      var _b;
      if (_a === void 0) {
        _a = {};
      }
      var skip = _a.skip, ssr = _a.ssr, onCompleted = _a.onCompleted, onError = _a.onError, defaultOptions = _a.defaultOptions, otherOptions = __rest(_a, ["skip", "ssr", "onCompleted", "onError", "defaultOptions"]);
      var watchQueryOptions = Object.assign(otherOptions, { query: this.query });
      if (this.renderPromises && (watchQueryOptions.fetchPolicy === "network-only" || watchQueryOptions.fetchPolicy === "cache-and-network")) {
        watchQueryOptions.fetchPolicy = "cache-first";
      }
      if (!watchQueryOptions.variables) {
        watchQueryOptions.variables = {};
      }
      if (skip) {
        var _c = watchQueryOptions.fetchPolicy, fetchPolicy = _c === void 0 ? this.getDefaultFetchPolicy() : _c, _d = watchQueryOptions.initialFetchPolicy, initialFetchPolicy = _d === void 0 ? fetchPolicy : _d;
        Object.assign(watchQueryOptions, {
          initialFetchPolicy,
          fetchPolicy: "standby"
        });
      } else if (!watchQueryOptions.fetchPolicy) {
        watchQueryOptions.fetchPolicy = ((_b = this.observable) === null || _b === void 0 ? void 0 : _b.options.initialFetchPolicy) || this.getDefaultFetchPolicy();
      }
      return watchQueryOptions;
    };
    InternalState2.prototype.getDefaultFetchPolicy = function() {
      var _a, _b;
      return ((_a = this.queryHookOptions.defaultOptions) === null || _a === void 0 ? void 0 : _a.fetchPolicy) || ((_b = this.client.defaultOptions.watchQuery) === null || _b === void 0 ? void 0 : _b.fetchPolicy) || "cache-first";
    };
    InternalState2.prototype.onCompleted = function(data) {
    };
    InternalState2.prototype.onError = function(error) {
    };
    InternalState2.prototype.useObservableQuery = function() {
      var obsQuery = this.observable = this.renderPromises && this.renderPromises.getSSRObservable(this.watchQueryOptions) || this.observable || // Reuse this.observable if possible (and not SSR)
      this.client.watchQuery(this.getObsQueryOptions());
      this.obsQueryFields = React11.useMemo(function() {
        return {
          refetch: obsQuery.refetch.bind(obsQuery),
          reobserve: obsQuery.reobserve.bind(obsQuery),
          fetchMore: obsQuery.fetchMore.bind(obsQuery),
          updateQuery: obsQuery.updateQuery.bind(obsQuery),
          startPolling: obsQuery.startPolling.bind(obsQuery),
          stopPolling: obsQuery.stopPolling.bind(obsQuery),
          subscribeToMore: obsQuery.subscribeToMore.bind(obsQuery)
        };
      }, [obsQuery]);
      var ssrAllowed = !(this.queryHookOptions.ssr === false || this.queryHookOptions.skip);
      if (this.renderPromises && ssrAllowed) {
        this.renderPromises.registerSSRObservable(obsQuery);
        if (obsQuery.getCurrentResult().loading) {
          this.renderPromises.addObservableQueryPromise(obsQuery);
        }
      }
      return obsQuery;
    };
    InternalState2.prototype.setResult = function(nextResult) {
      var previousResult = this.result;
      if (previousResult && previousResult.data) {
        this.previousData = previousResult.data;
      }
      this.result = nextResult;
      this.forceUpdate();
      this.handleErrorOrCompleted(nextResult, previousResult);
    };
    InternalState2.prototype.handleErrorOrCompleted = function(result, previousResult) {
      var _this = this;
      if (!result.loading) {
        var error_1 = this.toApolloError(result);
        Promise.resolve().then(function() {
          if (error_1) {
            _this.onError(error_1);
          } else if (result.data && (previousResult === null || previousResult === void 0 ? void 0 : previousResult.networkStatus) !== result.networkStatus && result.networkStatus === NetworkStatus.ready) {
            _this.onCompleted(result.data);
          }
        }).catch(function(error) {
          globalThis.__DEV__ !== false && invariant.warn(error);
        });
      }
    };
    InternalState2.prototype.toApolloError = function(result) {
      return isNonEmptyArray(result.errors) ? new ApolloError({ graphQLErrors: result.errors }) : result.error;
    };
    InternalState2.prototype.getCurrentResult = function() {
      if (!this.result) {
        this.handleErrorOrCompleted(this.result = this.observable.getCurrentResult());
      }
      return this.result;
    };
    InternalState2.prototype.toQueryResult = function(result) {
      var queryResult = this.toQueryResultCache.get(result);
      if (queryResult)
        return queryResult;
      var data = result.data, partial = result.partial, resultWithoutPartial = __rest(result, ["data", "partial"]);
      this.toQueryResultCache.set(result, queryResult = __assign(__assign(__assign({ data }, resultWithoutPartial), this.obsQueryFields), { client: this.client, observable: this.observable, variables: this.observable.variables, called: !this.queryHookOptions.skip, previousData: this.previousData }));
      if (!queryResult.error && isNonEmptyArray(result.errors)) {
        queryResult.error = new ApolloError({ graphQLErrors: result.errors });
      }
      return queryResult;
    };
    InternalState2.prototype.unsafeHandlePartialRefetch = function(result) {
      if (result.partial && this.queryHookOptions.partialRefetch && !result.loading && (!result.data || Object.keys(result.data).length === 0) && this.observable.options.fetchPolicy !== "cache-only") {
        Object.assign(result, {
          loading: true,
          networkStatus: NetworkStatus.refetch
        });
        this.observable.refetch();
      }
    };
    return InternalState2;
  }()
);

// node_modules/@apollo/client/react/hooks/useLazyQuery.js
var EAGER_METHODS = [
  "refetch",
  "reobserve",
  "fetchMore",
  "updateQuery",
  "startPolling",
  "subscribeToMore"
];
function useLazyQuery(query, options) {
  var _a;
  var execOptionsRef = React12.useRef();
  var optionsRef = React12.useRef();
  var queryRef = React12.useRef();
  var merged = mergeOptions(options, execOptionsRef.current || {});
  var document = (_a = merged === null || merged === void 0 ? void 0 : merged.query) !== null && _a !== void 0 ? _a : query;
  optionsRef.current = options;
  queryRef.current = document;
  var internalState = useInternalState(useApolloClient(options && options.client), document);
  var useQueryResult = internalState.useQuery(__assign(__assign({}, merged), { skip: !execOptionsRef.current }));
  var initialFetchPolicy = useQueryResult.observable.options.initialFetchPolicy || internalState.getDefaultFetchPolicy();
  var result = Object.assign(useQueryResult, {
    called: !!execOptionsRef.current
  });
  var eagerMethods = React12.useMemo(function() {
    var eagerMethods2 = {};
    var _loop_1 = function(key2) {
      var method = result[key2];
      eagerMethods2[key2] = function() {
        if (!execOptionsRef.current) {
          execOptionsRef.current = /* @__PURE__ */ Object.create(null);
          internalState.forceUpdateState();
        }
        return method.apply(this, arguments);
      };
    };
    for (var _i = 0, EAGER_METHODS_1 = EAGER_METHODS; _i < EAGER_METHODS_1.length; _i++) {
      var key = EAGER_METHODS_1[_i];
      _loop_1(key);
    }
    return eagerMethods2;
  }, []);
  Object.assign(result, eagerMethods);
  var execute2 = React12.useCallback(function(executeOptions) {
    execOptionsRef.current = executeOptions ? __assign(__assign({}, executeOptions), { fetchPolicy: executeOptions.fetchPolicy || initialFetchPolicy }) : {
      fetchPolicy: initialFetchPolicy
    };
    var options2 = mergeOptions(optionsRef.current, __assign({ query: queryRef.current }, execOptionsRef.current));
    var promise = internalState.executeQuery(__assign(__assign({}, options2), { skip: false })).then(function(queryResult) {
      return Object.assign(queryResult, eagerMethods);
    });
    promise.catch(function() {
    });
    return promise;
  }, []);
  return [execute2, result];
}

// node_modules/@apollo/client/react/hooks/useMutation.js
var React13 = __toESM(require_rehackt(), 1);
function useMutation(mutation, options) {
  var client = useApolloClient(options === null || options === void 0 ? void 0 : options.client);
  verifyDocumentType(mutation, DocumentType.Mutation);
  var _a = React13.useState({
    called: false,
    loading: false,
    client
  }), result = _a[0], setResult = _a[1];
  var ref = React13.useRef({
    result,
    mutationId: 0,
    isMounted: true,
    client,
    mutation,
    options
  });
  {
    Object.assign(ref.current, { client, options, mutation });
  }
  var execute2 = React13.useCallback(function(executeOptions) {
    if (executeOptions === void 0) {
      executeOptions = {};
    }
    var _a2 = ref.current, options2 = _a2.options, mutation2 = _a2.mutation;
    var baseOptions = __assign(__assign({}, options2), { mutation: mutation2 });
    var client2 = executeOptions.client || ref.current.client;
    if (!ref.current.result.loading && !baseOptions.ignoreResults && ref.current.isMounted) {
      setResult(ref.current.result = {
        loading: true,
        error: void 0,
        data: void 0,
        called: true,
        client: client2
      });
    }
    var mutationId = ++ref.current.mutationId;
    var clientOptions = mergeOptions(baseOptions, executeOptions);
    return client2.mutate(clientOptions).then(function(response) {
      var _a3, _b;
      var data = response.data, errors = response.errors;
      var error = errors && errors.length > 0 ? new ApolloError({ graphQLErrors: errors }) : void 0;
      var onError = executeOptions.onError || ((_a3 = ref.current.options) === null || _a3 === void 0 ? void 0 : _a3.onError);
      if (error && onError) {
        onError(error, clientOptions);
      }
      if (mutationId === ref.current.mutationId && !clientOptions.ignoreResults) {
        var result_1 = {
          called: true,
          loading: false,
          data,
          error,
          client: client2
        };
        if (ref.current.isMounted && !equal(ref.current.result, result_1)) {
          setResult(ref.current.result = result_1);
        }
      }
      var onCompleted = executeOptions.onCompleted || ((_b = ref.current.options) === null || _b === void 0 ? void 0 : _b.onCompleted);
      if (!error) {
        onCompleted === null || onCompleted === void 0 ? void 0 : onCompleted(response.data, clientOptions);
      }
      return response;
    }).catch(function(error) {
      var _a3;
      if (mutationId === ref.current.mutationId && ref.current.isMounted) {
        var result_2 = {
          loading: false,
          error,
          data: void 0,
          called: true,
          client: client2
        };
        if (!equal(ref.current.result, result_2)) {
          setResult(ref.current.result = result_2);
        }
      }
      var onError = executeOptions.onError || ((_a3 = ref.current.options) === null || _a3 === void 0 ? void 0 : _a3.onError);
      if (onError) {
        onError(error, clientOptions);
        return { data: void 0, errors: error };
      }
      throw error;
    });
  }, []);
  var reset = React13.useCallback(function() {
    if (ref.current.isMounted) {
      var result_3 = { called: false, loading: false, client };
      Object.assign(ref.current, { mutationId: 0, result: result_3 });
      setResult(result_3);
    }
  }, []);
  React13.useEffect(function() {
    ref.current.isMounted = true;
    return function() {
      ref.current.isMounted = false;
    };
  }, []);
  return [execute2, __assign({ reset }, result)];
}

// node_modules/@apollo/client/react/hooks/useSubscription.js
var React14 = __toESM(require_rehackt(), 1);
function useSubscription(subscription, options) {
  var hasIssuedDeprecationWarningRef = React14.useRef(false);
  var client = useApolloClient(options === null || options === void 0 ? void 0 : options.client);
  verifyDocumentType(subscription, DocumentType.Subscription);
  var _a = React14.useState({
    loading: !(options === null || options === void 0 ? void 0 : options.skip),
    error: void 0,
    data: void 0,
    variables: options === null || options === void 0 ? void 0 : options.variables
  }), result = _a[0], setResult = _a[1];
  if (!hasIssuedDeprecationWarningRef.current) {
    hasIssuedDeprecationWarningRef.current = true;
    if (options === null || options === void 0 ? void 0 : options.onSubscriptionData) {
      globalThis.__DEV__ !== false && invariant.warn(options.onData ? 52 : 53);
    }
    if (options === null || options === void 0 ? void 0 : options.onSubscriptionComplete) {
      globalThis.__DEV__ !== false && invariant.warn(options.onComplete ? 54 : 55);
    }
  }
  var _b = React14.useState(function() {
    if (options === null || options === void 0 ? void 0 : options.skip) {
      return null;
    }
    return client.subscribe({
      query: subscription,
      variables: options === null || options === void 0 ? void 0 : options.variables,
      fetchPolicy: options === null || options === void 0 ? void 0 : options.fetchPolicy,
      context: options === null || options === void 0 ? void 0 : options.context
    });
  }), observable = _b[0], setObservable = _b[1];
  var canResetObservableRef = React14.useRef(false);
  React14.useEffect(function() {
    return function() {
      canResetObservableRef.current = true;
    };
  }, []);
  var ref = React14.useRef({ client, subscription, options });
  React14.useEffect(function() {
    var _a2, _b2, _c, _d;
    var shouldResubscribe = options === null || options === void 0 ? void 0 : options.shouldResubscribe;
    if (typeof shouldResubscribe === "function") {
      shouldResubscribe = !!shouldResubscribe(options);
    }
    if (options === null || options === void 0 ? void 0 : options.skip) {
      if (!(options === null || options === void 0 ? void 0 : options.skip) !== !((_a2 = ref.current.options) === null || _a2 === void 0 ? void 0 : _a2.skip) || canResetObservableRef.current) {
        setResult({
          loading: false,
          data: void 0,
          error: void 0,
          variables: options === null || options === void 0 ? void 0 : options.variables
        });
        setObservable(null);
        canResetObservableRef.current = false;
      }
    } else if (shouldResubscribe !== false && (client !== ref.current.client || subscription !== ref.current.subscription || (options === null || options === void 0 ? void 0 : options.fetchPolicy) !== ((_b2 = ref.current.options) === null || _b2 === void 0 ? void 0 : _b2.fetchPolicy) || !(options === null || options === void 0 ? void 0 : options.skip) !== !((_c = ref.current.options) === null || _c === void 0 ? void 0 : _c.skip) || !equal(options === null || options === void 0 ? void 0 : options.variables, (_d = ref.current.options) === null || _d === void 0 ? void 0 : _d.variables)) || canResetObservableRef.current) {
      setResult({
        loading: true,
        data: void 0,
        error: void 0,
        variables: options === null || options === void 0 ? void 0 : options.variables
      });
      setObservable(client.subscribe({
        query: subscription,
        variables: options === null || options === void 0 ? void 0 : options.variables,
        fetchPolicy: options === null || options === void 0 ? void 0 : options.fetchPolicy,
        context: options === null || options === void 0 ? void 0 : options.context
      }));
      canResetObservableRef.current = false;
    }
    Object.assign(ref.current, { client, subscription, options });
  }, [client, subscription, options, canResetObservableRef.current]);
  React14.useEffect(function() {
    if (!observable) {
      return;
    }
    var subscriptionStopped = false;
    var subscription2 = observable.subscribe({
      next: function(fetchResult) {
        var _a2, _b2;
        if (subscriptionStopped) {
          return;
        }
        var result2 = {
          loading: false,
          // TODO: fetchResult.data can be null but SubscriptionResult.data
          // expects TData | undefined only
          data: fetchResult.data,
          error: void 0,
          variables: options === null || options === void 0 ? void 0 : options.variables
        };
        setResult(result2);
        if ((_a2 = ref.current.options) === null || _a2 === void 0 ? void 0 : _a2.onData) {
          ref.current.options.onData({
            client,
            data: result2
          });
        } else if ((_b2 = ref.current.options) === null || _b2 === void 0 ? void 0 : _b2.onSubscriptionData) {
          ref.current.options.onSubscriptionData({
            client,
            subscriptionData: result2
          });
        }
      },
      error: function(error) {
        var _a2, _b2;
        if (!subscriptionStopped) {
          setResult({
            loading: false,
            data: void 0,
            error,
            variables: options === null || options === void 0 ? void 0 : options.variables
          });
          (_b2 = (_a2 = ref.current.options) === null || _a2 === void 0 ? void 0 : _a2.onError) === null || _b2 === void 0 ? void 0 : _b2.call(_a2, error);
        }
      },
      complete: function() {
        var _a2, _b2;
        if (!subscriptionStopped) {
          if ((_a2 = ref.current.options) === null || _a2 === void 0 ? void 0 : _a2.onComplete) {
            ref.current.options.onComplete();
          } else if ((_b2 = ref.current.options) === null || _b2 === void 0 ? void 0 : _b2.onSubscriptionComplete) {
            ref.current.options.onSubscriptionComplete();
          }
        }
      }
    });
    return function() {
      subscriptionStopped = true;
      setTimeout(function() {
        subscription2.unsubscribe();
      });
    };
  }, [observable]);
  return result;
}

// node_modules/@apollo/client/react/hooks/useReactiveVar.js
var React15 = __toESM(require_rehackt(), 1);
function useReactiveVar(rv) {
  return useSyncExternalStore(React15.useCallback(function(update) {
    return rv.onNextChange(function onNext() {
      update();
      rv.onNextChange(onNext);
    });
  }, [rv]), rv, rv);
}

// node_modules/@apollo/client/react/hooks/useFragment.js
var React16 = __toESM(require_rehackt(), 1);
function useFragment(options) {
  return wrapHook("useFragment", _useFragment, useApolloClient(options.client))(options);
}
function _useFragment(options) {
  var cache2 = useApolloClient(options.client).cache;
  var diffOptions = useDeepMemo(function() {
    var fragment = options.fragment, fragmentName = options.fragmentName, from2 = options.from, _a = options.optimistic, optimistic = _a === void 0 ? true : _a, rest = __rest(options, ["fragment", "fragmentName", "from", "optimistic"]);
    return __assign(__assign({}, rest), { returnPartialData: true, id: typeof from2 === "string" ? from2 : cache2.identify(from2), query: cache2["getFragmentDoc"](fragment, fragmentName), optimistic });
  }, [options]);
  var resultRef = useLazyRef(function() {
    return diffToResult(cache2.diff(diffOptions));
  });
  var getSnapshot = React16.useCallback(function() {
    return resultRef.current;
  }, []);
  return useSyncExternalStore(React16.useCallback(function(forceUpdate) {
    var lastTimeout = 0;
    var unsubscribe = cache2.watch(__assign(__assign({}, diffOptions), { immediate: true, callback: function(diff) {
      if (!equal(diff.result, resultRef.current.data)) {
        resultRef.current = diffToResult(diff);
        clearTimeout(lastTimeout);
        lastTimeout = setTimeout(forceUpdate);
      }
    } }));
    return function() {
      unsubscribe();
      clearTimeout(lastTimeout);
    };
  }, [cache2, diffOptions]), getSnapshot, getSnapshot);
}
function diffToResult(diff) {
  var result = {
    data: diff.result,
    complete: !!diff.complete
  };
  if (diff.missing) {
    result.missing = mergeDeepArray(diff.missing.map(function(error) {
      return error.missing;
    }));
  }
  return result;
}

// node_modules/@apollo/client/react/hooks/useSuspenseQuery.js
var React17 = __toESM(require_rehackt(), 1);

// node_modules/@apollo/client/react/internal/cache/QueryReference.js
var QUERY_REFERENCE_SYMBOL = Symbol();
var PROMISE_SYMBOL = Symbol();
function wrapQueryRef(internalQueryRef) {
  var _a;
  var ref = (_a = {
    toPromise: function() {
      return getWrappedPromise(ref).then(function() {
        return ref;
      });
    }
  }, _a[QUERY_REFERENCE_SYMBOL] = internalQueryRef, _a[PROMISE_SYMBOL] = internalQueryRef.promise, _a);
  return ref;
}
function getWrappedPromise(queryRef) {
  var internalQueryRef = unwrapQueryRef(queryRef);
  return internalQueryRef.promise.status === "fulfilled" ? internalQueryRef.promise : queryRef[PROMISE_SYMBOL];
}
function unwrapQueryRef(queryRef) {
  return queryRef[QUERY_REFERENCE_SYMBOL];
}
function updateWrappedQueryRef(queryRef, promise) {
  queryRef[PROMISE_SYMBOL] = promise;
}
var OBSERVED_CHANGED_OPTIONS = [
  "canonizeResults",
  "context",
  "errorPolicy",
  "fetchPolicy",
  "refetchWritePolicy",
  "returnPartialData"
];
var InternalQueryReference = (
  /** @class */
  function() {
    function InternalQueryReference2(observable, options) {
      var _this = this;
      this.key = {};
      this.listeners = /* @__PURE__ */ new Set();
      this.references = 0;
      this.handleNext = this.handleNext.bind(this);
      this.handleError = this.handleError.bind(this);
      this.dispose = this.dispose.bind(this);
      this.observable = observable;
      if (options.onDispose) {
        this.onDispose = options.onDispose;
      }
      this.setResult();
      this.subscribeToQuery();
      var startDisposeTimer = function() {
        var _a;
        if (!_this.references) {
          _this.autoDisposeTimeoutId = setTimeout(_this.dispose, (_a = options.autoDisposeTimeoutMs) !== null && _a !== void 0 ? _a : 3e4);
        }
      };
      this.promise.then(startDisposeTimer, startDisposeTimer);
    }
    Object.defineProperty(InternalQueryReference2.prototype, "disposed", {
      get: function() {
        return this.subscription.closed;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(InternalQueryReference2.prototype, "watchQueryOptions", {
      get: function() {
        return this.observable.options;
      },
      enumerable: false,
      configurable: true
    });
    InternalQueryReference2.prototype.reinitialize = function() {
      var observable = this.observable;
      var originalFetchPolicy = this.watchQueryOptions.fetchPolicy;
      try {
        if (originalFetchPolicy !== "no-cache") {
          observable.resetLastResults();
          observable.silentSetOptions({ fetchPolicy: "cache-first" });
        } else {
          observable.silentSetOptions({ fetchPolicy: "standby" });
        }
        this.subscribeToQuery();
        if (originalFetchPolicy === "no-cache") {
          return;
        }
        observable.resetDiff();
        this.setResult();
      } finally {
        observable.silentSetOptions({ fetchPolicy: originalFetchPolicy });
      }
    };
    InternalQueryReference2.prototype.retain = function() {
      var _this = this;
      this.references++;
      clearTimeout(this.autoDisposeTimeoutId);
      var disposed = false;
      return function() {
        if (disposed) {
          return;
        }
        disposed = true;
        _this.references--;
        setTimeout(function() {
          if (!_this.references) {
            _this.dispose();
          }
        });
      };
    };
    InternalQueryReference2.prototype.didChangeOptions = function(watchQueryOptions) {
      var _this = this;
      return OBSERVED_CHANGED_OPTIONS.some(function(option) {
        return !equal(_this.watchQueryOptions[option], watchQueryOptions[option]);
      });
    };
    InternalQueryReference2.prototype.applyOptions = function(watchQueryOptions) {
      var _a = this.watchQueryOptions, currentFetchPolicy = _a.fetchPolicy, currentCanonizeResults = _a.canonizeResults;
      if (currentFetchPolicy === "standby" && currentFetchPolicy !== watchQueryOptions.fetchPolicy) {
        this.initiateFetch(this.observable.reobserve(watchQueryOptions));
      } else {
        this.observable.silentSetOptions(watchQueryOptions);
        if (currentCanonizeResults !== watchQueryOptions.canonizeResults) {
          this.result = __assign(__assign({}, this.result), this.observable.getCurrentResult());
          this.promise = createFulfilledPromise(this.result);
        }
      }
      return this.promise;
    };
    InternalQueryReference2.prototype.listen = function(listener) {
      var _this = this;
      this.listeners.add(listener);
      return function() {
        _this.listeners.delete(listener);
      };
    };
    InternalQueryReference2.prototype.refetch = function(variables) {
      return this.initiateFetch(this.observable.refetch(variables));
    };
    InternalQueryReference2.prototype.fetchMore = function(options) {
      return this.initiateFetch(this.observable.fetchMore(options));
    };
    InternalQueryReference2.prototype.dispose = function() {
      this.subscription.unsubscribe();
      this.onDispose();
    };
    InternalQueryReference2.prototype.onDispose = function() {
    };
    InternalQueryReference2.prototype.handleNext = function(result) {
      var _a;
      switch (this.promise.status) {
        case "pending": {
          if (result.data === void 0) {
            result.data = this.result.data;
          }
          this.result = result;
          (_a = this.resolve) === null || _a === void 0 ? void 0 : _a.call(this, result);
          break;
        }
        default: {
          if (result.data === this.result.data && result.networkStatus === this.result.networkStatus) {
            return;
          }
          if (result.data === void 0) {
            result.data = this.result.data;
          }
          this.result = result;
          this.promise = createFulfilledPromise(result);
          this.deliver(this.promise);
          break;
        }
      }
    };
    InternalQueryReference2.prototype.handleError = function(error) {
      var _a;
      this.subscription.unsubscribe();
      this.subscription = this.observable.resubscribeAfterError(this.handleNext, this.handleError);
      switch (this.promise.status) {
        case "pending": {
          (_a = this.reject) === null || _a === void 0 ? void 0 : _a.call(this, error);
          break;
        }
        default: {
          this.promise = createRejectedPromise(error);
          this.deliver(this.promise);
        }
      }
    };
    InternalQueryReference2.prototype.deliver = function(promise) {
      this.listeners.forEach(function(listener) {
        return listener(promise);
      });
    };
    InternalQueryReference2.prototype.initiateFetch = function(returnedPromise) {
      var _this = this;
      this.promise = this.createPendingPromise();
      this.promise.catch(function() {
      });
      returnedPromise.then(function(result) {
        setTimeout(function() {
          var _a;
          if (_this.promise.status === "pending") {
            _this.result = result;
            (_a = _this.resolve) === null || _a === void 0 ? void 0 : _a.call(_this, result);
          }
        });
      }).catch(function() {
      });
      return returnedPromise;
    };
    InternalQueryReference2.prototype.subscribeToQuery = function() {
      var _this = this;
      this.subscription = this.observable.filter(function(result) {
        return !equal(result.data, {}) && !equal(result, _this.result);
      }).subscribe(this.handleNext, this.handleError);
    };
    InternalQueryReference2.prototype.setResult = function() {
      var result = this.observable.getCurrentResult(false);
      if (equal(result, this.result)) {
        return;
      }
      this.result = result;
      this.promise = result.data && (!result.partial || this.watchQueryOptions.returnPartialData) ? createFulfilledPromise(result) : this.createPendingPromise();
    };
    InternalQueryReference2.prototype.createPendingPromise = function() {
      var _this = this;
      return wrapPromiseWithState(new Promise(function(resolve, reject) {
        _this.resolve = resolve;
        _this.reject = reject;
      }));
    };
    return InternalQueryReference2;
  }()
);

// node_modules/@apollo/client/react/internal/cache/SuspenseCache.js
var SuspenseCache = (
  /** @class */
  function() {
    function SuspenseCache2(options) {
      if (options === void 0) {
        options = /* @__PURE__ */ Object.create(null);
      }
      this.queryRefs = new Trie(canUseWeakMap);
      this.options = options;
    }
    SuspenseCache2.prototype.getQueryRef = function(cacheKey, createObservable) {
      var ref = this.queryRefs.lookupArray(cacheKey);
      if (!ref.current) {
        ref.current = new InternalQueryReference(createObservable(), {
          autoDisposeTimeoutMs: this.options.autoDisposeTimeoutMs,
          onDispose: function() {
            delete ref.current;
          }
        });
      }
      return ref.current;
    };
    return SuspenseCache2;
  }()
);

// node_modules/@apollo/client/react/internal/cache/getSuspenseCache.js
var suspenseCacheSymbol = Symbol.for("apollo.suspenseCache");
function getSuspenseCache(client) {
  var _a;
  if (!client[suspenseCacheSymbol]) {
    client[suspenseCacheSymbol] = new SuspenseCache((_a = client.defaultOptions.react) === null || _a === void 0 ? void 0 : _a.suspense);
  }
  return client[suspenseCacheSymbol];
}

// node_modules/@apollo/client/react/hooks/constants.js
var skipToken = Symbol.for("apollo.skipToken");

// node_modules/@apollo/client/react/hooks/useSuspenseQuery.js
function useSuspenseQuery(query, options) {
  if (options === void 0) {
    options = /* @__PURE__ */ Object.create(null);
  }
  return wrapHook("useSuspenseQuery", _useSuspenseQuery, useApolloClient(typeof options === "object" ? options.client : void 0))(query, options);
}
function _useSuspenseQuery(query, options) {
  var client = useApolloClient(options.client);
  var suspenseCache = getSuspenseCache(client);
  var watchQueryOptions = useWatchQueryOptions({
    client,
    query,
    options
  });
  var fetchPolicy = watchQueryOptions.fetchPolicy, variables = watchQueryOptions.variables;
  var _a = options.queryKey, queryKey = _a === void 0 ? [] : _a;
  var cacheKey = __spreadArray([
    query,
    canonicalStringify(variables)
  ], [].concat(queryKey), true);
  var queryRef = suspenseCache.getQueryRef(cacheKey, function() {
    return client.watchQuery(watchQueryOptions);
  });
  var _b = React17.useState([queryRef.key, queryRef.promise]), current = _b[0], setPromise = _b[1];
  if (current[0] !== queryRef.key) {
    current[0] = queryRef.key;
    current[1] = queryRef.promise;
  }
  var promise = current[1];
  if (queryRef.didChangeOptions(watchQueryOptions)) {
    current[1] = promise = queryRef.applyOptions(watchQueryOptions);
  }
  React17.useEffect(function() {
    var dispose = queryRef.retain();
    var removeListener = queryRef.listen(function(promise2) {
      setPromise([queryRef.key, promise2]);
    });
    return function() {
      removeListener();
      dispose();
    };
  }, [queryRef]);
  var skipResult = React17.useMemo(function() {
    var error = toApolloError(queryRef.result);
    return {
      loading: false,
      data: queryRef.result.data,
      networkStatus: error ? NetworkStatus.error : NetworkStatus.ready,
      error
    };
  }, [queryRef.result]);
  var result = fetchPolicy === "standby" ? skipResult : __use(promise);
  var fetchMore = React17.useCallback(function(options2) {
    var promise2 = queryRef.fetchMore(options2);
    setPromise([queryRef.key, queryRef.promise]);
    return promise2;
  }, [queryRef]);
  var refetch = React17.useCallback(function(variables2) {
    var promise2 = queryRef.refetch(variables2);
    setPromise([queryRef.key, queryRef.promise]);
    return promise2;
  }, [queryRef]);
  var subscribeToMore = React17.useCallback(function(options2) {
    return queryRef.observable.subscribeToMore(options2);
  }, [queryRef]);
  return React17.useMemo(function() {
    return {
      client,
      data: result.data,
      error: toApolloError(result),
      networkStatus: result.networkStatus,
      fetchMore,
      refetch,
      subscribeToMore
    };
  }, [client, fetchMore, refetch, result, subscribeToMore]);
}
function validateOptions(options) {
  var query = options.query, fetchPolicy = options.fetchPolicy, returnPartialData = options.returnPartialData;
  verifyDocumentType(query, DocumentType.Query);
  validateFetchPolicy(fetchPolicy);
  validatePartialDataReturn(fetchPolicy, returnPartialData);
}
function validateFetchPolicy(fetchPolicy) {
  if (fetchPolicy === void 0) {
    fetchPolicy = "cache-first";
  }
  var supportedFetchPolicies = [
    "cache-first",
    "network-only",
    "no-cache",
    "cache-and-network"
  ];
  invariant(supportedFetchPolicies.includes(fetchPolicy), 56, fetchPolicy);
}
function validatePartialDataReturn(fetchPolicy, returnPartialData) {
  if (fetchPolicy === "no-cache" && returnPartialData) {
    globalThis.__DEV__ !== false && invariant.warn(57);
  }
}
function toApolloError(result) {
  return isNonEmptyArray(result.errors) ? new ApolloError({ graphQLErrors: result.errors }) : result.error;
}
function useWatchQueryOptions(_a) {
  var client = _a.client, query = _a.query, options = _a.options;
  return useDeepMemo(function() {
    var _a2;
    if (options === skipToken) {
      return { query, fetchPolicy: "standby" };
    }
    var fetchPolicy = options.fetchPolicy || ((_a2 = client.defaultOptions.watchQuery) === null || _a2 === void 0 ? void 0 : _a2.fetchPolicy) || "cache-first";
    var watchQueryOptions = __assign(__assign({}, options), { fetchPolicy, query, notifyOnNetworkStatusChange: false, nextFetchPolicy: void 0 });
    if (globalThis.__DEV__ !== false) {
      validateOptions(watchQueryOptions);
    }
    if (options.skip) {
      watchQueryOptions.fetchPolicy = "standby";
    }
    return watchQueryOptions;
  }, [client, options, query]);
}

// node_modules/@apollo/client/react/hooks/useBackgroundQuery.js
var React18 = __toESM(require_rehackt(), 1);
function useBackgroundQuery(query, options) {
  if (options === void 0) {
    options = /* @__PURE__ */ Object.create(null);
  }
  return wrapHook("useBackgroundQuery", _useBackgroundQuery, useApolloClient(typeof options === "object" ? options.client : void 0))(query, options);
}
function _useBackgroundQuery(query, options) {
  var client = useApolloClient(options.client);
  var suspenseCache = getSuspenseCache(client);
  var watchQueryOptions = useWatchQueryOptions({ client, query, options });
  var fetchPolicy = watchQueryOptions.fetchPolicy, variables = watchQueryOptions.variables;
  var _a = options.queryKey, queryKey = _a === void 0 ? [] : _a;
  var didFetchResult = React18.useRef(fetchPolicy !== "standby");
  didFetchResult.current || (didFetchResult.current = fetchPolicy !== "standby");
  var cacheKey = __spreadArray([
    query,
    canonicalStringify(variables)
  ], [].concat(queryKey), true);
  var queryRef = suspenseCache.getQueryRef(cacheKey, function() {
    return client.watchQuery(watchQueryOptions);
  });
  var _b = React18.useState(wrapQueryRef(queryRef)), wrappedQueryRef = _b[0], setWrappedQueryRef = _b[1];
  if (unwrapQueryRef(wrappedQueryRef) !== queryRef) {
    setWrappedQueryRef(wrapQueryRef(queryRef));
  }
  if (queryRef.didChangeOptions(watchQueryOptions)) {
    var promise = queryRef.applyOptions(watchQueryOptions);
    updateWrappedQueryRef(wrappedQueryRef, promise);
  }
  var fetchMore = React18.useCallback(function(options2) {
    var promise2 = queryRef.fetchMore(options2);
    setWrappedQueryRef(wrapQueryRef(queryRef));
    return promise2;
  }, [queryRef]);
  var refetch = React18.useCallback(function(variables2) {
    var promise2 = queryRef.refetch(variables2);
    setWrappedQueryRef(wrapQueryRef(queryRef));
    return promise2;
  }, [queryRef]);
  return [
    didFetchResult.current ? wrappedQueryRef : void 0,
    { fetchMore, refetch }
  ];
}

// node_modules/@apollo/client/react/hooks/useLoadableQuery.js
var React19 = __toESM(require_rehackt(), 1);
function useLoadableQuery(query, options) {
  if (options === void 0) {
    options = /* @__PURE__ */ Object.create(null);
  }
  var client = useApolloClient(options.client);
  var suspenseCache = getSuspenseCache(client);
  var watchQueryOptions = useWatchQueryOptions({ client, query, options });
  var _a = options.queryKey, queryKey = _a === void 0 ? [] : _a;
  var _b = React19.useState(null), queryRef = _b[0], setQueryRef = _b[1];
  var internalQueryRef = queryRef && unwrapQueryRef(queryRef);
  if (queryRef && (internalQueryRef === null || internalQueryRef === void 0 ? void 0 : internalQueryRef.didChangeOptions(watchQueryOptions))) {
    var promise = internalQueryRef.applyOptions(watchQueryOptions);
    updateWrappedQueryRef(queryRef, promise);
  }
  var calledDuringRender = useRenderGuard();
  var fetchMore = React19.useCallback(function(options2) {
    if (!internalQueryRef) {
      throw new Error("The query has not been loaded. Please load the query.");
    }
    var promise2 = internalQueryRef.fetchMore(options2);
    setQueryRef(wrapQueryRef(internalQueryRef));
    return promise2;
  }, [internalQueryRef]);
  var refetch = React19.useCallback(function(options2) {
    if (!internalQueryRef) {
      throw new Error("The query has not been loaded. Please load the query.");
    }
    var promise2 = internalQueryRef.refetch(options2);
    setQueryRef(wrapQueryRef(internalQueryRef));
    return promise2;
  }, [internalQueryRef]);
  var loadQuery = React19.useCallback(function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    invariant(!calledDuringRender(), 50);
    var variables = args[0];
    var cacheKey = __spreadArray([
      query,
      canonicalStringify(variables)
    ], [].concat(queryKey), true);
    var queryRef2 = suspenseCache.getQueryRef(cacheKey, function() {
      return client.watchQuery(__assign(__assign({}, watchQueryOptions), { variables }));
    });
    setQueryRef(wrapQueryRef(queryRef2));
  }, [query, queryKey, suspenseCache, watchQueryOptions, calledDuringRender]);
  var reset = React19.useCallback(function() {
    setQueryRef(null);
  }, [queryRef]);
  return [loadQuery, queryRef, { fetchMore, refetch, reset }];
}

// node_modules/@apollo/client/react/hooks/useQueryRefHandlers.js
var React20 = __toESM(require_rehackt(), 1);
function useQueryRefHandlers(queryRef) {
  var _a = React20.useState(queryRef), previousQueryRef = _a[0], setPreviousQueryRef = _a[1];
  var _b = React20.useState(queryRef), wrappedQueryRef = _b[0], setWrappedQueryRef = _b[1];
  var internalQueryRef = unwrapQueryRef(queryRef);
  if (previousQueryRef !== queryRef) {
    setPreviousQueryRef(queryRef);
    setWrappedQueryRef(queryRef);
  } else {
    updateWrappedQueryRef(queryRef, getWrappedPromise(wrappedQueryRef));
  }
  var refetch = React20.useCallback(function(variables) {
    var promise = internalQueryRef.refetch(variables);
    setWrappedQueryRef(wrapQueryRef(internalQueryRef));
    return promise;
  }, [internalQueryRef]);
  var fetchMore = React20.useCallback(function(options) {
    var promise = internalQueryRef.fetchMore(options);
    setWrappedQueryRef(wrapQueryRef(internalQueryRef));
    return promise;
  }, [internalQueryRef]);
  return { refetch, fetchMore };
}

// node_modules/@apollo/client/react/hooks/useReadQuery.js
var React21 = __toESM(require_rehackt(), 1);
function useReadQuery(queryRef) {
  return wrapHook("useReadQuery", _useReadQuery, unwrapQueryRef(queryRef)["observable"])(queryRef);
}
function _useReadQuery(queryRef) {
  var internalQueryRef = React21.useMemo(function() {
    return unwrapQueryRef(queryRef);
  }, [queryRef]);
  var getPromise = React21.useCallback(function() {
    return getWrappedPromise(queryRef);
  }, [queryRef]);
  if (internalQueryRef.disposed) {
    internalQueryRef.reinitialize();
    updateWrappedQueryRef(queryRef, internalQueryRef.promise);
  }
  React21.useEffect(function() {
    return internalQueryRef.retain();
  }, [internalQueryRef]);
  var promise = useSyncExternalStore(React21.useCallback(function(forceUpdate) {
    return internalQueryRef.listen(function(promise2) {
      updateWrappedQueryRef(queryRef, promise2);
      forceUpdate();
    });
  }, [internalQueryRef]), getPromise, getPromise);
  var result = __use(promise);
  return React21.useMemo(function() {
    return {
      data: result.data,
      networkStatus: result.networkStatus,
      error: toApolloError(result)
    };
  }, [result]);
}

// node_modules/@apollo/client/react/query-preloader/createQueryPreloader.js
function createQueryPreloader(client) {
  return function preloadQuery(query, options) {
    var _a, _b;
    if (options === void 0) {
      options = /* @__PURE__ */ Object.create(null);
    }
    var queryRef = new InternalQueryReference(client.watchQuery(__assign(__assign({}, options), { query })), {
      autoDisposeTimeoutMs: (_b = (_a = client.defaultOptions.react) === null || _a === void 0 ? void 0 : _a.suspense) === null || _b === void 0 ? void 0 : _b.autoDisposeTimeoutMs
    });
    return wrapQueryRef(queryRef);
  };
}
export {
  ApolloCache,
  ApolloClient,
  ApolloConsumer,
  ApolloError,
  ApolloLink,
  ApolloProvider,
  Cache,
  DocumentTransform,
  DocumentType,
  HttpLink,
  InMemoryCache,
  MissingFieldError,
  NetworkStatus,
  Observable,
  ObservableQuery,
  checkFetcher,
  concat,
  createHttpLink,
  createQueryPreloader,
  createSignalIfSupported,
  defaultDataIdFromObject,
  defaultPrinter,
  disableExperimentalFragmentVariables,
  disableFragmentWarnings,
  empty,
  enableExperimentalFragmentVariables,
  execute,
  fallbackHttpConfig,
  from,
  fromError,
  fromPromise,
  getApolloContext,
  gql,
  isApolloError,
  isNetworkRequestSettled,
  isReference,
  makeReference,
  makeVar,
  mergeOptions,
  operationName,
  parseAndCheckHttpResponse,
  parser,
  resetApolloContext,
  resetCaches,
  rewriteURIForGET,
  selectHttpOptionsAndBody,
  selectHttpOptionsAndBodyInternal,
  selectURI,
  serializeFetchParameter,
  setVerbosity as setLogVerbosity,
  skipToken,
  split,
  throwServerError,
  toPromise,
  useApolloClient,
  useBackgroundQuery,
  useFragment,
  useLazyQuery,
  useLoadableQuery,
  useMutation,
  useQuery,
  useQueryRefHandlers,
  useReactiveVar,
  useReadQuery,
  useSubscription,
  useSuspenseQuery
};
/*! Bundled license information:

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=@apollo_client.js.map
