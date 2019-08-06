/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/components/app.tsx":
/*!***********************************!*\
  !*** ./client/components/app.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ \"react\");\r\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\n// @ts-ignore\r\nconst react_transition_group_1 = __webpack_require__(/*! react-transition-group */ \"react-transition-group\");\r\n// Templates\r\nconst navabar_1 = __webpack_require__(/*! ./navabar */ \"./client/components/navabar.tsx\");\r\nconst footer_1 = __webpack_require__(/*! ./footer */ \"./client/components/footer.tsx\");\r\n// Pages and Components\r\nconst home_1 = __webpack_require__(/*! ../pages/home */ \"./client/pages/home.tsx\");\r\nconst about_1 = __webpack_require__(/*! ../pages/about */ \"./client/pages/about.tsx\");\r\nconst projects_1 = __webpack_require__(/*! ../pages/projects */ \"./client/pages/projects.tsx\");\r\nconst background_1 = __webpack_require__(/*! ./background */ \"./client/components/background.tsx\");\r\n// Redux\r\nconst store_1 = __webpack_require__(/*! ../redux/store */ \"./client/redux/store.ts\");\r\nconst initialLoadAction_1 = __webpack_require__(/*! ../redux/actions/initialLoadAction */ \"./client/redux/actions/initialLoadAction.ts\");\r\nclass App extends React.Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = {\r\n            theme: store_1.store.getState().theme.activeTheme,\r\n            exitAnimation: false\r\n        };\r\n    }\r\n    componentDidMount() {\r\n        store_1.store.subscribe(() => {\r\n            this.setState({\r\n                theme: store_1.store.getState().theme.activeTheme,\r\n                initialLoad: store_1.store.getState().initialLoad.activeInitialLoad\r\n            }, () => {\r\n                if (this.state.initialLoad) {\r\n                    store_1.store.dispatch(initialLoadAction_1.updateInitialLoad(false));\r\n                }\r\n            });\r\n        });\r\n    }\r\n    render() {\r\n        const { theme, exitAnimation } = this.state;\r\n        return (React.createElement(\"div\", { className: `theme-${theme}` },\r\n            React.createElement(background_1.default, { theme: theme }),\r\n            React.createElement(\"div\", { id: \"app\" },\r\n                React.createElement(navabar_1.default, null),\r\n                React.createElement(react_router_dom_1.Route, { render: ({ location }) => (React.createElement(react_transition_group_1.TransitionGroup, null,\r\n                        React.createElement(react_transition_group_1.CSSTransition, { key: location.key, classNames: \"slide\", timeout: 800 },\r\n                            React.createElement(\"div\", { className: `jumbo` },\r\n                                React.createElement(react_router_dom_1.Switch, { location: location },\r\n                                    React.createElement(react_router_dom_1.Route, { exact: true, path: \"/\", component: home_1.default }),\r\n                                    React.createElement(react_router_dom_1.Route, { path: \"/about\", component: about_1.default }),\r\n                                    React.createElement(react_router_dom_1.Route, { path: \"/projects\", component: projects_1.default })))))) }),\r\n                React.createElement(footer_1.default, null))));\r\n    }\r\n}\r\nexports.default = App;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvY29tcG9uZW50cy9hcHAudHN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvYXBwLnRzeD80NThjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBSb3V0ZSwgTGluaywgU3dpdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG4gICAgLy8gQHRzLWlnbm9yZVxuaW1wb3J0IHsgVHJhbnNpdGlvbkdyb3VwLCBDU1NUcmFuc2l0aW9uIH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCc7XG5cbi8vIFRlbXBsYXRlc1xuaW1wb3J0IE5hdmJhciBmcm9tICcuL25hdmFiYXInXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vZm9vdGVyJztcblxuLy8gUGFnZXMgYW5kIENvbXBvbmVudHNcbmltcG9ydCBIb21lIGZyb20gJy4uL3BhZ2VzL2hvbWUnO1xuaW1wb3J0IEFib3V0IGZyb20gJy4uL3BhZ2VzL2Fib3V0JztcbmltcG9ydCBQcm9qZWN0cyBmcm9tICcuLi9wYWdlcy9wcm9qZWN0cyc7XG5pbXBvcnQgQmFja2dyb3VuZCBmcm9tICcuL2JhY2tncm91bmQnO1xuXG4vLyBSZWR1eFxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICcuLi9yZWR1eC9zdG9yZSc7XG5pbXBvcnQgeyB0aGVtZVBheWxvYWQgfSBmcm9tICcuLi9yZWR1eC90eXBlcy90aGVtZVR5cGVzJztcbmltcG9ydCB7IHVwZGF0ZUluaXRpYWxMb2FkIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucy9pbml0aWFsTG9hZEFjdGlvbic7XG5cbmludGVyZmFjZSBJQXBwUHJvcHMge1xuICBjb21waWxlcjogc3RyaW5nO1xuICBmcmFtZXdvcms6IHN0cmluZztcbiAgc3RhdGljQ29udGV4dD86IGFueTtcbn1cblxuaW50ZXJmYWNlIElBcHBTdGF0ZSB7XG4gIHRoZW1lPzogdGhlbWVQYXlsb2FkO1xuICBpbml0aWFsTG9hZD86IGJvb2xlYW47XG4gIGV4aXRBbmltYXRpb246IGJvb2xlYW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCA8SUFwcFByb3BzLCBJQXBwU3RhdGU+IHtcbiAgXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBJQXBwUHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGhlbWU6IHN0b3JlLmdldFN0YXRlKCkudGhlbWUuYWN0aXZlVGhlbWUsXG4gICAgICBleGl0QW5pbWF0aW9uOiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdGhlbWU6IHN0b3JlLmdldFN0YXRlKCkudGhlbWUuYWN0aXZlVGhlbWUsXG4gICAgICAgIGluaXRpYWxMb2FkOiBzdG9yZS5nZXRTdGF0ZSgpLmluaXRpYWxMb2FkLmFjdGl2ZUluaXRpYWxMb2FkXG4gICAgICB9LCAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmluaXRpYWxMb2FkKSB7XG4gICAgICAgICAgc3RvcmUuZGlzcGF0Y2godXBkYXRlSW5pdGlhbExvYWQoZmFsc2UpKVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xuICAgIGNvbnN0IHsgdGhlbWUsIGV4aXRBbmltYXRpb24gfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdGhlbWUtJHt0aGVtZX1gfT5cbiAgICAgICAgPEJhY2tncm91bmQgdGhlbWU9e3RoZW1lfSAvPlxuICAgICAgICA8ZGl2IGlkPVwiYXBwXCI+XG4gICAgICAgICAgPE5hdmJhciAvPlxuICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgcmVuZGVyPXsoeyBsb2NhdGlvbiB9KSA9PiAoXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxUcmFuc2l0aW9uR3JvdXA+XG4gICAgICAgICAgICAgIDxDU1NUcmFuc2l0aW9uXG4gICAgICAgICAgICAgICAga2V5PXtsb2NhdGlvbi5rZXl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lcz1cInNsaWRlXCJcbiAgICAgICAgICAgICAgICB0aW1lb3V0PXs4MDB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGp1bWJvYH0+XG4gICAgICAgICAgICAgICAgICA8U3dpdGNoIGxvY2F0aW9uPXtsb2NhdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL1wiIGNvbXBvbmVudD17SG9tZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYWJvdXRcIiBjb21wb25lbnQ9e0Fib3V0fSAvPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wcm9qZWN0c1wiIGNvbXBvbmVudD17UHJvamVjdHN9IC8+XG4gICAgICAgICAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9DU1NUcmFuc2l0aW9uPlxuICAgICAgICAgICAgPC9UcmFuc2l0aW9uR3JvdXA+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQWNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBSUE7QUFDQTtBQXZEQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/components/app.tsx\n");

/***/ }),

/***/ "./client/components/background.tsx":
/*!******************************************!*\
  !*** ./client/components/background.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_particles_js_1 = __webpack_require__(/*! react-particles-js */ \"react-particles-js\");\r\nconst React = __webpack_require__(/*! react */ \"react\");\r\nconst Background = ({ theme }) => {\r\n    const themes = {\r\n        dark: {\r\n            primary: '#001011',\r\n            secondary: '#F2F2E6'\r\n        },\r\n        light: {\r\n            primary: '#f9f3ed',\r\n            secondary: '#342e37'\r\n        },\r\n        blue: {\r\n            primary: '#323846',\r\n            secondary: '#fbf9f3'\r\n        }\r\n    };\r\n    const { primary, secondary } = themes[theme];\r\n    return (React.createElement(React.Fragment, null,\r\n        React.createElement(react_particles_js_1.default, { className: \"particle-background\", width: \"100vw\", height: \"100vh\", params: {\r\n                particles: {\r\n                    number: {\r\n                        value: 204,\r\n                        density: {\r\n                            enable: true,\r\n                            value_area: 800\r\n                        }\r\n                    },\r\n                    color: {\r\n                        value: secondary\r\n                    },\r\n                    shape: {\r\n                        type: 'circle',\r\n                        stroke: {\r\n                            width: 0,\r\n                            color: '#000000'\r\n                        },\r\n                        polygon: {\r\n                            nb_sides: 5\r\n                        },\r\n                        image: {\r\n                            src: 'img/github.svg',\r\n                            width: 100,\r\n                            height: 100\r\n                        }\r\n                    },\r\n                    opacity: {\r\n                        value: 0.5,\r\n                        random: true,\r\n                        anim: {\r\n                            enable: true,\r\n                            speed: 1,\r\n                            opacity_min: 0.1,\r\n                            sync: false\r\n                        }\r\n                    },\r\n                    size: {\r\n                        value: 7,\r\n                        random: true,\r\n                        anim: {\r\n                            enable: false,\r\n                            speed: 40,\r\n                            size_min: 0.1,\r\n                            sync: false\r\n                        }\r\n                    },\r\n                    line_linked: {\r\n                        enable: false,\r\n                        distance: 500,\r\n                        color: '#ffffff',\r\n                        opacity: 0.4,\r\n                        width: 2\r\n                    },\r\n                    move: {\r\n                        enable: true,\r\n                        speed: 2,\r\n                        direction: 'bottom',\r\n                        random: false,\r\n                        straight: false,\r\n                        out_mode: 'out',\r\n                        bounce: false,\r\n                        attract: {\r\n                            enable: false,\r\n                            rotateX: 600,\r\n                            rotateY: 1200\r\n                        }\r\n                    }\r\n                },\r\n                interactivity: {\r\n                    detect_on: 'window',\r\n                    events: {\r\n                        onhover: {\r\n                            enable: true,\r\n                            mode: 'bubble'\r\n                        },\r\n                        onclick: {\r\n                            enable: true,\r\n                            mode: 'repulse'\r\n                        },\r\n                        resize: true\r\n                    },\r\n                    modes: {\r\n                        grab: {\r\n                            distance: 400,\r\n                            line_linked: {\r\n                                opacity: 0.5\r\n                            }\r\n                        },\r\n                        bubble: {\r\n                            distance: 400,\r\n                            size: 4,\r\n                            duration: 0.3,\r\n                            opacity: 1,\r\n                        },\r\n                        repulse: {\r\n                            distance: 200,\r\n                            duration: 0.4\r\n                        },\r\n                        push: {\r\n                            particles_nb: 4\r\n                        },\r\n                        remove: {\r\n                            particles_nb: 2\r\n                        }\r\n                    }\r\n                },\r\n                retina_detect: true\r\n            }, style: {\r\n                background: primary,\r\n                width: '100%',\r\n            } })));\r\n};\r\nexports.default = Background;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvY29tcG9uZW50cy9iYWNrZ3JvdW5kLnRzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL2JhY2tncm91bmQudHN4P2M5MmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhcnRpY2xlcyBmcm9tICdyZWFjdC1wYXJ0aWNsZXMtanMnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdGhlbWVQYXlsb2FkIH0gZnJvbSAnLi4vcmVkdXgvdHlwZXMvdGhlbWVUeXBlcyc7XG5cbmludGVyZmFjZSBJQmFja2dyb3VuZFByb3BzIHtcbiAgdGhlbWU6IHRoZW1lUGF5bG9hZFxufVxuXG5cbmNvbnN0IEJhY2tncm91bmQ6UmVhY3QuRkM8SUJhY2tncm91bmRQcm9wcz4gPSAoe3RoZW1lfSkgPT4ge1xuICBjb25zdCB0aGVtZXMgPSB7XG4gICAgZGFyazoge1xuICAgICAgcHJpbWFyeTogJyMwMDEwMTEnLCBcbiAgICAgIHNlY29uZGFyeTogJyNGMkYyRTYnXG4gICAgfSxcbiAgICBsaWdodDoge1xuICAgICAgcHJpbWFyeTogJyNmOWYzZWQnLCBcbiAgICAgIHNlY29uZGFyeTogJyMzNDJlMzcnXG4gICAgfSxcbiAgICBibHVlOntcbiAgICAgIHByaW1hcnk6ICcjMzIzODQ2JywgXG4gICAgICBzZWNvbmRhcnk6ICcjZmJmOWYzJ1xuICAgIH1cbiAgfVxuICBjb25zdCB7IHByaW1hcnksIHNlY29uZGFyeSB9ID0gdGhlbWVzW3RoZW1lXTtcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8UGFydGljbGVzXG4gICAgICAgIGNsYXNzTmFtZT1cInBhcnRpY2xlLWJhY2tncm91bmRcIlxuICAgICAgICB3aWR0aD1cIjEwMHZ3XCJcbiAgICAgICAgaGVpZ2h0PVwiMTAwdmhcIlxuICAgICAgICBwYXJhbXM9e3tcbiAgICAgICAgICBwYXJ0aWNsZXM6IHtcbiAgICAgICAgICAgIG51bWJlcjoge1xuICAgICAgICAgICAgICB2YWx1ZTogMjA0LFxuICAgICAgICAgICAgICBkZW5zaXR5OiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHZhbHVlX2FyZWE6IDgwMFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IHNlY29uZGFyeVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNoYXBlOiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdjaXJjbGUnLFxuICAgICAgICAgICAgICBzdHJva2U6IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICAgICAgICBjb2xvcjogJyMwMDAwMDAnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHBvbHlnb246IHtcbiAgICAgICAgICAgICAgICBuYl9zaWRlczogNVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgICAgIHNyYzogJ2ltZy9naXRodWIuc3ZnJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcGFjaXR5OiB7XG4gICAgICAgICAgICAgIHZhbHVlOiAwLjUsXG4gICAgICAgICAgICAgIHJhbmRvbTogdHJ1ZSxcbiAgICAgICAgICAgICAgYW5pbToge1xuICAgICAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzcGVlZDogMSxcbiAgICAgICAgICAgICAgICBvcGFjaXR5X21pbjogMC4xLFxuICAgICAgICAgICAgICAgIHN5bmM6IGZhbHNlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiA3LFxuICAgICAgICAgICAgICByYW5kb206IHRydWUsXG4gICAgICAgICAgICAgIGFuaW06IHtcbiAgICAgICAgICAgICAgICBlbmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNwZWVkOiA0MCxcbiAgICAgICAgICAgICAgICBzaXplX21pbjogMC4xLFxuICAgICAgICAgICAgICAgIHN5bmM6IGZhbHNlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsaW5lX2xpbmtlZDoge1xuICAgICAgICAgICAgICBlbmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICBkaXN0YW5jZTogNTAwLFxuICAgICAgICAgICAgICBjb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjQsXG4gICAgICAgICAgICAgIHdpZHRoOiAyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW92ZToge1xuICAgICAgICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgICAgICAgIHNwZWVkOiAyLFxuICAgICAgICAgICAgICBkaXJlY3Rpb246ICdib3R0b20nLFxuICAgICAgICAgICAgICByYW5kb206IGZhbHNlLFxuICAgICAgICAgICAgICBzdHJhaWdodDogZmFsc2UsXG4gICAgICAgICAgICAgIG91dF9tb2RlOiAnb3V0JyxcbiAgICAgICAgICAgICAgYm91bmNlOiBmYWxzZSxcbiAgICAgICAgICAgICAgYXR0cmFjdDoge1xuICAgICAgICAgICAgICAgIGVuYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgcm90YXRlWDogNjAwLFxuICAgICAgICAgICAgICAgIHJvdGF0ZVk6IDEyMDBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaW50ZXJhY3Rpdml0eToge1xuICAgICAgICAgICAgZGV0ZWN0X29uOiAnd2luZG93JyxcbiAgICAgICAgICAgIGV2ZW50czoge1xuICAgICAgICAgICAgICBvbmhvdmVyOiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1vZGU6ICdidWJibGUnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uY2xpY2s6IHtcbiAgICAgICAgICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbW9kZTogJ3JlcHVsc2UnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHJlc2l6ZTogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVzOiB7XG4gICAgICAgICAgICAgIGdyYWI6IHtcbiAgICAgICAgICAgICAgICBkaXN0YW5jZTogNDAwLFxuICAgICAgICAgICAgICAgIGxpbmVfbGlua2VkOiB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGJ1YmJsZToge1xuICAgICAgICAgICAgICAgIGRpc3RhbmNlOiA0MDAsXG4gICAgICAgICAgICAgICAgc2l6ZTogNCxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMC4zLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHJlcHVsc2U6IHtcbiAgICAgICAgICAgICAgICBkaXN0YW5jZTogMjAwLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwLjRcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcHVzaDoge1xuICAgICAgICAgICAgICAgIHBhcnRpY2xlc19uYjogNFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICByZW1vdmU6IHtcbiAgICAgICAgICAgICAgICBwYXJ0aWNsZXNfbmI6IDJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmV0aW5hX2RldGVjdDogdHJ1ZVxuICAgICAgICB9fVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGJhY2tncm91bmQ6IHByaW1hcnksXG4gICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgfX1cbiAgICAgIC8+ICBcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgQmFja2dyb3VuZDsiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/components/background.tsx\n");

/***/ }),

/***/ "./client/components/footer.tsx":
/*!**************************************!*\
  !*** ./client/components/footer.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ \"react\");\r\n/**\r\n * This file may look a little messy at first but let me explain\r\n * Originially, I had used the FontAwesomeIcon npm package but it was 700kb at it's slimmest!\r\n * So, for production, I just switched out the library for the SVG that they were serving.\r\n *\r\n */\r\nconst Footer = () => (React.createElement(\"footer\", { className: \"footer\" },\r\n    React.createElement(\"a\", { href: \"https://www.linkedin.com/in/morgangalvin\" },\r\n        React.createElement(\"svg\", { \"aria-hidden\": \"true\", focusable: \"false\", \"data-prefix\": \"fab\", \"data-icon\": \"linkedin\", className: \"fa svg-inline--fa fa-linkedin fa-w-14 fa\", role: \"img\", xmlns: \"http://www.w3.org/2000/svg\", viewBox: \"0 0 448 512\" },\r\n            React.createElement(\"path\", { fill: \"currentColor\", d: \"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z\" }))),\r\n    React.createElement(\"a\", { href: \"https://github.com/LudwigThePig\" },\r\n        React.createElement(\"svg\", { \"aria-hidden\": \"true\", focusable: \"false\", \"data-prefix\": \"fab\", \"data-icon\": \"github\", className: \"fa svg-inline--fa fa-github fa-w-16 fa\", role: \"img\", xmlns: \"http://www.w3.org/2000/svg\", viewBox: \"0 0 496 512\" },\r\n            React.createElement(\"path\", { fill: \"currentColor\", d: \"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z\" }))),\r\n    React.createElement(\"a\", { href: \"https://www.instagram.com/morgandolibre/\" },\r\n        React.createElement(\"svg\", { \"aria-hidden\": \"true\", focusable: \"false\", \"data-prefix\": \"fab\", \"data-icon\": \"instagram\", className: \"fa svg-inline--fa fa-instagram fa-w-14 fa\", role: \"img\", xmlns: \"http://www.w3.org/2000/svg\", viewBox: \"0 0 448 512\" },\r\n            React.createElement(\"path\", { fill: \"currentColor\", d: \"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\" }))),\r\n    React.createElement(\"a\", { href: \"https://www.strava.com/athletes/5897641\" },\r\n        React.createElement(\"svg\", { \"aria-hidden\": \"true\", focusable: \"false\", \"data-prefix\": \"fab\", \"data-icon\": \"strava\", className: \"fa svg-inline--fa fa-strava fa-w-12 fa\", role: \"img\", xmlns: \"http://www.w3.org/2000/svg\", viewBox: \"0 0 384 512\" },\r\n            React.createElement(\"path\", { fill: \"currentColor\", d: \"M158.4 0L7 292h89.2l62.2-116.1L220.1 292h88.5zm150.2 292l-43.9 88.2-44.6-88.2h-67.6l112.2 220 111.5-220z\" })))));\r\nexports.default = Footer;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvY29tcG9uZW50cy9mb290ZXIudHN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvZm9vdGVyLnRzeD9jYzI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLyoqXG4gKiBUaGlzIGZpbGUgbWF5IGxvb2sgYSBsaXR0bGUgbWVzc3kgYXQgZmlyc3QgYnV0IGxldCBtZSBleHBsYWluXG4gKiBPcmlnaW5pYWxseSwgSSBoYWQgdXNlZCB0aGUgRm9udEF3ZXNvbWVJY29uIG5wbSBwYWNrYWdlIGJ1dCBpdCB3YXMgNzAwa2IgYXQgaXQncyBzbGltbWVzdCFcbiAqIFNvLCBmb3IgcHJvZHVjdGlvbiwgSSBqdXN0IHN3aXRjaGVkIG91dCB0aGUgbGlicmFyeSBmb3IgdGhlIFNWRyB0aGF0IHRoZXkgd2VyZSBzZXJ2aW5nLlxuICogXG4gKi9cblxuY29uc3QgRm9vdGVyID0gKCkgPT4gKFxuICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vbW9yZ2FuZ2FsdmluXCI+XG4gICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYWJcIiBkYXRhLWljb249XCJsaW5rZWRpblwiIGNsYXNzTmFtZT1cImZhIHN2Zy1pbmxpbmUtLWZhIGZhLWxpbmtlZGluIGZhLXctMTQgZmFcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiPlxuICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk00MTYgMzJIMzEuOUMxNC4zIDMyIDAgNDYuNSAwIDY0LjN2MzgzLjRDMCA0NjUuNSAxNC4zIDQ4MCAzMS45IDQ4MEg0MTZjMTcuNiAwIDMyLTE0LjUgMzItMzIuM1Y2NC4zYzAtMTcuOC0xNC40LTMyLjMtMzItMzIuM3pNMTM1LjQgNDE2SDY5VjIwMi4yaDY2LjVWNDE2em0tMzMuMi0yNDNjLTIxLjMgMC0zOC41LTE3LjMtMzguNS0zOC41UzgwLjkgOTYgMTAyLjIgOTZjMjEuMiAwIDM4LjUgMTcuMyAzOC41IDM4LjUgMCAyMS4zLTE3LjIgMzguNS0zOC41IDM4LjV6bTI4Mi4xIDI0M2gtNjYuNFYzMTJjMC0yNC44LS41LTU2LjctMzQuNS01Ni43LTM0LjYgMC0zOS45IDI3LTM5LjkgNTQuOVY0MTZoLTY2LjRWMjAyLjJoNjMuN3YyOS4yaC45YzguOS0xNi44IDMwLjYtMzQuNSA2Mi45LTM0LjUgNjcuMiAwIDc5LjcgNDQuMyA3OS43IDEwMS45VjQxNnpcIiAvPlxuICAgICAgPC9zdmc+XG4gICAgPC9hPlxuXG4gICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9MdWR3aWdUaGVQaWdcIj5cbiAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhYlwiIGRhdGEtaWNvbj1cImdpdGh1YlwiIGNsYXNzTmFtZT1cImZhIHN2Zy1pbmxpbmUtLWZhIGZhLWdpdGh1YiBmYS13LTE2IGZhXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ5NiA1MTJcIj5cbiAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTY1LjkgMzk3LjRjMCAyLTIuMyAzLjYtNS4yIDMuNi0zLjMuMy01LjYtMS4zLTUuNi0zLjYgMC0yIDIuMy0zLjYgNS4yLTMuNiAzLS4zIDUuNiAxLjMgNS42IDMuNnptLTMxLjEtNC41Yy0uNyAyIDEuMyA0LjMgNC4zIDQuOSAyLjYgMSA1LjYgMCA2LjItMnMtMS4zLTQuMy00LjMtNS4yYy0yLjYtLjctNS41LjMtNi4yIDIuM3ptNDQuMi0xLjdjLTIuOS43LTQuOSAyLjYtNC42IDQuOS4zIDIgMi45IDMuMyA1LjkgMi42IDIuOS0uNyA0LjktMi42IDQuNi00LjYtLjMtMS45LTMtMy4yLTUuOS0yLjl6TTI0NC44IDhDMTA2LjEgOCAwIDExMy4zIDAgMjUyYzAgMTEwLjkgNjkuOCAyMDUuOCAxNjkuNSAyMzkuMiAxMi44IDIuMyAxNy4zLTUuNiAxNy4zLTEyLjEgMC02LjItLjMtNDAuNC0uMy02MS40IDAgMC03MCAxNS04NC43LTI5LjggMCAwLTExLjQtMjkuMS0yNy44LTM2LjYgMCAwLTIyLjktMTUuNyAxLjYtMTUuNCAwIDAgMjQuOSAyIDM4LjYgMjUuOCAyMS45IDM4LjYgNTguNiAyNy41IDcyLjkgMjAuOSAyLjMtMTYgOC44LTI3LjEgMTYtMzMuNy01NS45LTYuMi0xMTIuMy0xNC4zLTExMi4zLTExMC41IDAtMjcuNSA3LjYtNDEuMyAyMy42LTU4LjktMi42LTYuNS0xMS4xLTMzLjMgMi42LTY3LjkgMjAuOS02LjUgNjkgMjcgNjkgMjcgMjAtNS42IDQxLjUtOC41IDYyLjgtOC41czQyLjggMi45IDYyLjggOC41YzAgMCA0OC4xLTMzLjYgNjktMjcgMTMuNyAzNC43IDUuMiA2MS40IDIuNiA2Ny45IDE2IDE3LjcgMjUuOCAzMS41IDI1LjggNTguOSAwIDk2LjUtNTguOSAxMDQuMi0xMTQuOCAxMTAuNSA5LjIgNy45IDE3IDIyLjkgMTcgNDYuNCAwIDMzLjctLjMgNzUuNC0uMyA4My42IDAgNi41IDQuNiAxNC40IDE3LjMgMTIuMUM0MjguMiA0NTcuOCA0OTYgMzYyLjkgNDk2IDI1MiA0OTYgMTEzLjMgMzgzLjUgOCAyNDQuOCA4ek05Ny4yIDM1Mi45Yy0xLjMgMS0xIDMuMy43IDUuMiAxLjYgMS42IDMuOSAyLjMgNS4yIDEgMS4zLTEgMS0zLjMtLjctNS4yLTEuNi0xLjYtMy45LTIuMy01LjItMXptLTEwLjgtOC4xYy0uNyAxLjMuMyAyLjkgMi4zIDMuOSAxLjYgMSAzLjYuNyA0LjMtLjcuNy0xLjMtLjMtMi45LTIuMy0zLjktMi0uNi0zLjYtLjMtNC4zLjd6bTMyLjQgMzUuNmMtMS42IDEuMy0xIDQuMyAxLjMgNi4yIDIuMyAyLjMgNS4yIDIuNiA2LjUgMSAxLjMtMS4zLjctNC4zLTEuMy02LjItMi4yLTIuMy01LjItMi42LTYuNS0xem0tMTEuNC0xNC43Yy0xLjYgMS0xLjYgMy42IDAgNS45IDEuNiAyLjMgNC4zIDMuMyA1LjYgMi4zIDEuNi0xLjMgMS42LTMuOSAwLTYuMi0xLjQtMi4zLTQtMy4zLTUuNi0yelwiIC8+XG4gICAgICA8L3N2Zz5cbiAgICA8L2E+XG5cbiAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9tb3JnYW5kb2xpYnJlL1wiPlxuICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFiXCIgZGF0YS1pY29uPVwiaW5zdGFncmFtXCIgY2xhc3NOYW1lPVwiZmEgc3ZnLWlubGluZS0tZmEgZmEtaW5zdGFncmFtIGZhLXctMTQgZmFcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiPlxuICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMSAxNDFjLTYzLjYgMC0xMTQuOSA1MS4zLTExNC45IDExNC45czUxLjMgMTE0LjkgMTE0LjkgMTE0LjlTMzM5IDMxOS41IDMzOSAyNTUuOSAyODcuNyAxNDEgMjI0LjEgMTQxem0wIDE4OS42Yy00MS4xIDAtNzQuNy0zMy41LTc0LjctNzQuN3MzMy41LTc0LjcgNzQuNy03NC43IDc0LjcgMzMuNSA3NC43IDc0LjctMzMuNiA3NC43LTc0LjcgNzQuN3ptMTQ2LjQtMTk0LjNjMCAxNC45LTEyIDI2LjgtMjYuOCAyNi44LTE0LjkgMC0yNi44LTEyLTI2LjgtMjYuOHMxMi0yNi44IDI2LjgtMjYuOCAyNi44IDEyIDI2LjggMjYuOHptNzYuMSAyNy4yYy0xLjctMzUuOS05LjktNjcuNy0zNi4yLTkzLjktMjYuMi0yNi4yLTU4LTM0LjQtOTMuOS0zNi4yLTM3LTIuMS0xNDcuOS0yLjEtMTg0LjkgMC0zNS44IDEuNy02Ny42IDkuOS05My45IDM2LjFzLTM0LjQgNTgtMzYuMiA5My45Yy0yLjEgMzctMi4xIDE0Ny45IDAgMTg0LjkgMS43IDM1LjkgOS45IDY3LjcgMzYuMiA5My45czU4IDM0LjQgOTMuOSAzNi4yYzM3IDIuMSAxNDcuOSAyLjEgMTg0LjkgMCAzNS45LTEuNyA2Ny43LTkuOSA5My45LTM2LjIgMjYuMi0yNi4yIDM0LjQtNTggMzYuMi05My45IDIuMS0zNyAyLjEtMTQ3LjggMC0xODQuOHpNMzk4LjggMzg4Yy03LjggMTkuNi0yMi45IDM0LjctNDIuNiA0Mi42LTI5LjUgMTEuNy05OS41IDktMTMyLjEgOXMtMTAyLjcgMi42LTEzMi4xLTljLTE5LjYtNy44LTM0LjctMjIuOS00Mi42LTQyLjYtMTEuNy0yOS41LTktOTkuNS05LTEzMi4xcy0yLjYtMTAyLjcgOS0xMzIuMWM3LjgtMTkuNiAyMi45LTM0LjcgNDIuNi00Mi42IDI5LjUtMTEuNyA5OS41LTkgMTMyLjEtOXMxMDIuNy0yLjYgMTMyLjEgOWMxOS42IDcuOCAzNC43IDIyLjkgNDIuNiA0Mi42IDExLjcgMjkuNSA5IDk5LjUgOSAxMzIuMXMyLjcgMTAyLjctOSAxMzIuMXpcIiAvPlxuICAgICAgPC9zdmc+XG4gICAgPC9hPlxuXG5cbiAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuc3RyYXZhLmNvbS9hdGhsZXRlcy81ODk3NjQxXCI+XG4gICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYWJcIiBkYXRhLWljb249XCJzdHJhdmFcIiBjbGFzc05hbWU9XCJmYSBzdmctaW5saW5lLS1mYSBmYS1zdHJhdmEgZmEtdy0xMiBmYVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzODQgNTEyXCI+XG4gICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTE1OC40IDBMNyAyOTJoODkuMmw2Mi4yLTExNi4xTDIyMC4xIDI5Mmg4OC41em0xNTAuMiAyOTJsLTQzLjkgODguMi00NC42LTg4LjJoLTY3LjZsMTEyLjIgMjIwIDExMS41LTIyMHpcIiAvPlxuICAgIDwvc3ZnPlxuICAgIDwvYT5cbiAgPC9mb290ZXI+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcblxuIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBRUE7Ozs7O0FBS0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQU1BOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/components/footer.tsx\n");

/***/ }),

/***/ "./client/components/navabar.tsx":
/*!***************************************!*\
  !*** ./client/components/navabar.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ \"react\");\r\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nconst themeSelector_1 = __webpack_require__(/*! ./themeSelector */ \"./client/components/themeSelector.tsx\");\r\nconst NavBar = () => (React.createElement(\"div\", { className: \"navbar\" },\r\n    React.createElement(themeSelector_1.default, null),\r\n    React.createElement(\"nav\", null,\r\n        React.createElement(react_router_dom_1.NavLink, { activeClassName: \"active\", exact: true, to: '/' }, \"LtP\"),\r\n        React.createElement(react_router_dom_1.NavLink, { activeClassName: \"active\", to: '/projects' }, \"projects\"),\r\n        React.createElement(react_router_dom_1.NavLink, { activeClassName: \"active\", to: '/about' }, \"about\"))));\r\nexports.default = NavBar;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvY29tcG9uZW50cy9uYXZhYmFyLnRzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL25hdmFiYXIudHN4P2U4NjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFJvdXRlLCBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBUaGVtZVNlbGVjdG9yIGZyb20gJy4vdGhlbWVTZWxlY3Rvcic7XG5cbmNvbnN0IE5hdkJhciA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgICA8VGhlbWVTZWxlY3RvciAvPlxuICAgIDxuYXY+XG4gICAgICA8TmF2TGluayBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIiBleGFjdD17dHJ1ZX0gdG89Jy8nPkx0UDwvTmF2TGluaz5cbiAgICAgIDxOYXZMaW5rIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiIHRvPScvcHJvamVjdHMnPnByb2plY3RzPC9OYXZMaW5rPlxuICAgICAgPE5hdkxpbmsgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCIgdG89Jy9hYm91dCc+YWJvdXQ8L05hdkxpbms+XG4gICAgPC9uYXY+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/components/navabar.tsx\n");

/***/ }),

/***/ "./client/components/themeSelector.tsx":
/*!*********************************************!*\
  !*** ./client/components/themeSelector.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ \"react\");\r\nconst store_1 = __webpack_require__(/*! ../redux/store */ \"./client/redux/store.ts\");\r\nconst themeAction_1 = __webpack_require__(/*! ../redux/actions/themeAction */ \"./client/redux/actions/themeAction.ts\");\r\nclass ThemeSelector extends React.Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = {\r\n            theme: store_1.store.getState().theme.activeTheme\r\n        };\r\n        this.updateTheme = this.updateTheme.bind(this);\r\n        this.handleRadioChange = this.handleRadioChange.bind(this);\r\n        this.handleButtonPress = this.handleButtonPress.bind(this);\r\n    }\r\n    updateTheme(theme) {\r\n        this.setState({\r\n            theme: theme\r\n        });\r\n        store_1.store.dispatch(themeAction_1.updateNav(theme));\r\n    }\r\n    handleRadioChange(e) {\r\n        const theme = e.target.value;\r\n        this.updateTheme(theme);\r\n    }\r\n    handleButtonPress(e) {\r\n        const { theme } = this.state;\r\n        let newTheme = theme === 'dark' ? 'light' : theme === 'light' ? 'blue' : 'dark';\r\n        this.updateTheme(newTheme);\r\n    }\r\n    render() {\r\n        const { theme } = this.state;\r\n        const getThemeIcon = () => {\r\n            switch (theme) {\r\n                case 'light':\r\n                    return React.createElement(\"span\", { role: \"img\", \"aria-label\": \"light-theme\" }, \"\\uD83C\\uDF1E\");\r\n                case 'blue':\r\n                    return React.createElement(\"span\", { role: \"img\", \"aria-label\": \"blue-theme\" }, \"\\uD83C\\uDF0A\");\r\n                default:\r\n                    return React.createElement(\"span\", { role: \"img\", \"aria-label\": \"dark-theme\" }, \"\\uD83C\\uDF1A\");\r\n            }\r\n        };\r\n        return (React.createElement(\"ul\", null,\r\n            React.createElement(\"li\", null,\r\n                React.createElement(\"input\", { type: \"radio\", checked: theme === 'dark', name: \"theme-opt\", onChange: this.handleRadioChange, onClick: this.handleRadioChange, value: \"dark\" }),\r\n                React.createElement(\"label\", null,\r\n                    React.createElement(\"span\", { role: \"img\", \"aria-label\": \"dark-theme\" }, \"\\uD83C\\uDF1A\"))),\r\n            React.createElement(\"li\", null,\r\n                React.createElement(\"input\", { type: \"radio\", checked: theme === 'light', name: \"theme-opt\", onChange: this.handleRadioChange, onClick: this.handleRadioChange, value: \"light\" }),\r\n                React.createElement(\"label\", null,\r\n                    React.createElement(\"span\", { role: \"img\", \"aria-label\": \"light-theme\" }, \"\\uD83C\\uDF1E\"))),\r\n            React.createElement(\"li\", null,\r\n                React.createElement(\"input\", { type: \"radio\", checked: theme === 'blue', name: \"theme-opt\", onChange: this.handleRadioChange, onClick: this.handleRadioChange, value: \"blue\" }),\r\n                React.createElement(\"label\", null,\r\n                    React.createElement(\"span\", { role: \"img\", \"aria-label\": \"blue-theme\" }, \"\\uD83C\\uDF0A\"))),\r\n            React.createElement(\"button\", { onClick: this.handleButtonPress }, getThemeIcon())));\r\n    }\r\n}\r\nexports.default = ThemeSelector;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvY29tcG9uZW50cy90aGVtZVNlbGVjdG9yLnRzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL3RoZW1lU2VsZWN0b3IudHN4P2UwODciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gJy4uL3JlZHV4L3N0b3JlJztcbmltcG9ydCB7IHVwZGF0ZU5hdiB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMvdGhlbWVBY3Rpb24nO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IHRoZW1lUGF5bG9hZCB9IGZyb20gJy4uL3JlZHV4L3R5cGVzL3RoZW1lVHlwZXMnO1xuXG5pbnRlcmZhY2UgSVRoZW1lU2VsZWN0b3JTdGF0ZSB7XG4gIHRoZW1lOiB0aGVtZVBheWxvYWRcbn1cblxuY2xhc3MgVGhlbWVTZWxlY3RvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCA8e30sIElUaGVtZVNlbGVjdG9yU3RhdGU+e1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzOnt9KSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRoZW1lOiBzdG9yZS5nZXRTdGF0ZSgpLnRoZW1lLmFjdGl2ZVRoZW1lXG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVUaGVtZSA9IHRoaXMudXBkYXRlVGhlbWUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVJhZGlvQ2hhbmdlID0gdGhpcy5oYW5kbGVSYWRpb0NoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQnV0dG9uUHJlc3MgPSB0aGlzLmhhbmRsZUJ1dHRvblByZXNzLmJpbmQodGhpcyk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVRoZW1lKHRoZW1lOiB0aGVtZVBheWxvYWQpOiB2b2lkIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRoZW1lOiB0aGVtZVxuICAgIH0pXG4gICAgc3RvcmUuZGlzcGF0Y2godXBkYXRlTmF2KHRoZW1lKSk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVJhZGlvQ2hhbmdlKGU6IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IHRoZW1lID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy51cGRhdGVUaGVtZSh0aGVtZSk7XG4gIH0gXG5cbiAgcHJpdmF0ZSBoYW5kbGVCdXR0b25QcmVzcyhlOiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCB7IHRoZW1lIH0gPSB0aGlzLnN0YXRlO1xuICAgIGxldCBuZXdUaGVtZTp0aGVtZVBheWxvYWQgPSB0aGVtZSA9PT0gJ2RhcmsnID8gJ2xpZ2h0JyA6IHRoZW1lID09PSAnbGlnaHQnID8gJ2JsdWUnIDogJ2RhcmsnO1xuICAgIHRoaXMudXBkYXRlVGhlbWUobmV3VGhlbWUpO1xuICB9XG4gIFxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0aGVtZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBnZXRUaGVtZUljb24gPSAoKSA9PiB7XG4gICAgICBzd2l0Y2ggKHRoZW1lKSB7XG4gICAgICAgIGNhc2UgJ2xpZ2h0JzpcbiAgICAgICAgICByZXR1cm4gPHNwYW4gcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9XCJsaWdodC10aGVtZVwiPvCfjJ48L3NwYW4+O1xuICAgICAgICBjYXNlICdibHVlJzpcbiAgICAgICAgICByZXR1cm4gPHNwYW4gcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9XCJibHVlLXRoZW1lXCI+8J+Mijwvc3Bhbj5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICByZXR1cm4gPHNwYW4gcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9XCJkYXJrLXRoZW1lXCI+8J+Mmjwvc3Bhbj47ICAgXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDx1bD5cbiAgICAgICAgIHsvKiBSQURJTyBCVVRUT05TIEZPUiBERVNLVE9QICovfVxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCIgXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e3RoZW1lID09PSAnZGFyayd9XG4gICAgICAgICAgICAgIG5hbWU9XCJ0aGVtZS1vcHRcIiBcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUmFkaW9DaGFuZ2V9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUmFkaW9DaGFuZ2V9IFxuICAgICAgICAgICAgICB2YWx1ZT1cImRhcmtcIiBcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbD48c3BhbiByb2xlPVwiaW1nXCIgYXJpYS1sYWJlbD1cImRhcmstdGhlbWVcIj7wn4yaPC9zcGFuPjwvbGFiZWw+XG4gICAgICAgICAgPC9saT5cblxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCIgXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e3RoZW1lID09PSAnbGlnaHQnfVxuICAgICAgICAgICAgICBuYW1lPVwidGhlbWUtb3B0XCIgXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVJhZGlvQ2hhbmdlfVxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVJhZGlvQ2hhbmdlfSBcbiAgICAgICAgICAgICAgdmFsdWU9XCJsaWdodFwiIFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbD48c3BhbiByb2xlPVwiaW1nXCIgYXJpYS1sYWJlbD1cImxpZ2h0LXRoZW1lXCI+8J+Mnjwvc3Bhbj48L2xhYmVsPlxuICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiIFxuICAgICAgICAgICAgICBjaGVja2VkPXt0aGVtZSA9PT0gJ2JsdWUnfVxuICAgICAgICAgICAgICBuYW1lPVwidGhlbWUtb3B0XCIgXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVJhZGlvQ2hhbmdlfVxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVJhZGlvQ2hhbmdlfSBcbiAgICAgICAgICAgICAgdmFsdWU9XCJibHVlXCIgXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWw+PHNwYW4gcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9XCJibHVlLXRoZW1lXCI+8J+Mijwvc3Bhbj48L2xhYmVsPlxuICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICB7LyogQlVUVE9OIEZPUiBNT0JJTEUgKi99XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUJ1dHRvblByZXNzfT57IGdldFRoZW1lSWNvbigpIH08L2J1dHRvbj5cblxuICAgICAgICA8L3VsPlxuICAgICk7XG4gIH0gXG59XG4gIFxuICBleHBvcnQgZGVmYXVsdCBUaGVtZVNlbGVjdG9yOyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBO0FBQ0E7QUFRQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQVFBO0FBQUE7QUFHQTtBQUNBO0FBUUE7QUFBQTtBQUdBO0FBQ0E7QUFRQTtBQUFBO0FBSUE7QUFJQTtBQUNBO0FBRUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/components/themeSelector.tsx\n");

/***/ }),

/***/ "./client/pages/about.tsx":
/*!********************************!*\
  !*** ./client/pages/about.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ \"react\");\r\nconst About = () => (React.createElement(\"div\", { id: \"about\" },\r\n    React.createElement(\"h1\", null, \"About\"),\r\n    React.createElement(\"h3\", null,\r\n        React.createElement(\"a\", { target: \"_blank\", href: \"https://books.google.com/books?id=XMLwzHXNywcC&lpg=PP1&dq=ceci%20n'est%20pas%20une%20pipe%20foucault&pg=PP1#v=onepage&q=ceci%20n'est%20pas%20une%20pipe%20foucault&f=false\" }, \"This is not a website\"),\r\n        React.createElement(\"br\", null),\r\n        \"This a playpen, portal, and everything pig related.\"),\r\n    React.createElement(\"h3\", null,\r\n        \"This is not my website.\",\r\n        React.createElement(\"br\", null),\r\n        \"This is \",\r\n        React.createElement(\"a\", { href: \"https://imgur.com/dTjfhQ0.jpg\" }, \"Ludwig's\"),\r\n        \" website.\"),\r\n    React.createElement(\"p\", null,\r\n        \"If you would like to learn more about Ludwig's creator, checkout the social links below.\",\r\n        React.createElement(\"br\", null),\r\n        \"If you would like to see how the sausage was made, checkout the \",\r\n        React.createElement(\"a\", { href: \"https://github.com/LudwigThePig/LudwigThePig.com-2.0\" }, \"GitHub repo\"),\r\n        \".\")));\r\nexports.default = About;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvcGFnZXMvYWJvdXQudHN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L3BhZ2VzL2Fib3V0LnRzeD9mMDAzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQWJvdXQgPSAoKSA9PiAoXG4gIDxkaXYgaWQ9XCJhYm91dFwiPlxuICAgIDxoMT5BYm91dDwvaDE+XG4gICAgPGgzPjxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2Jvb2tzLmdvb2dsZS5jb20vYm9va3M/aWQ9WE1Md3pIWE55d2NDJmxwZz1QUDEmZHE9Y2VjaSUyMG4nZXN0JTIwcGFzJTIwdW5lJTIwcGlwZSUyMGZvdWNhdWx0JnBnPVBQMSN2PW9uZXBhZ2UmcT1jZWNpJTIwbidlc3QlMjBwYXMlMjB1bmUlMjBwaXBlJTIwZm91Y2F1bHQmZj1mYWxzZVwiPlRoaXMgaXMgbm90IGEgd2Vic2l0ZTwvYT5cbiAgICA8YnIgLz5UaGlzIGEgcGxheXBlbiwgcG9ydGFsLCBhbmQgZXZlcnl0aGluZyBwaWcgcmVsYXRlZC5cbiAgICA8L2gzPlxuICAgIDxoMz5cbiAgICAgIFRoaXMgaXMgbm90IG15IHdlYnNpdGUuIFxuICAgICAgPGJyIC8+VGhpcyBpcyA8YSBocmVmPVwiaHR0cHM6Ly9pbWd1ci5jb20vZFRqZmhRMC5qcGdcIj5MdWR3aWcnczwvYT4gd2Vic2l0ZS4gXG4gICAgPC9oMz5cbiAgICA8cD5JZiB5b3Ugd291bGQgbGlrZSB0byBsZWFybiBtb3JlIGFib3V0IEx1ZHdpZydzIGNyZWF0b3IsIGNoZWNrb3V0IHRoZSBzb2NpYWwgbGlua3MgYmVsb3cuIFxuICAgIDxiciAvPklmIHlvdSB3b3VsZCBsaWtlIHRvIHNlZSBob3cgdGhlIHNhdXNhZ2Ugd2FzIG1hZGUsIGNoZWNrb3V0IHRoZSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0x1ZHdpZ1RoZVBpZy9MdWR3aWdUaGVQaWcuY29tLTIuMFwiPkdpdEh1YiByZXBvPC9hPi48L3A+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBBYm91dDsiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFBQTtBQUNBO0FBQ0E7O0FBQ0E7O0FBQUE7QUFBQTtBQUlBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/pages/about.tsx\n");

/***/ }),

/***/ "./client/pages/home.tsx":
/*!*******************************!*\
  !*** ./client/pages/home.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ \"react\");\r\nconst store_1 = __webpack_require__(/*! ../redux/store */ \"./client/redux/store.ts\");\r\nconst initialLoadAction_1 = __webpack_require__(/*! ../redux/actions/initialLoadAction */ \"./client/redux/actions/initialLoadAction.ts\");\r\nclass Home extends React.Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = {\r\n            initialLoad: store_1.store.getState().initialLoad.activeInitialLoad\r\n        };\r\n    }\r\n    componentWillMount() {\r\n        store_1.store.subscribe(() => {\r\n            this.setState({\r\n                initialLoad: store_1.store.getState().initialLoad.activeInitialLoad\r\n            });\r\n        });\r\n    }\r\n    componentDidMount() {\r\n        if (this.state.initialLoad) {\r\n            setTimeout(() => store_1.store.dispatch(initialLoadAction_1.updateInitialLoad(false)), 2000);\r\n        }\r\n    }\r\n    render() {\r\n        const { initialLoad } = this.state;\r\n        const animated = initialLoad ? 'animated' : null;\r\n        return (React.createElement(\"div\", { id: \"home\" },\r\n            React.createElement(\"h1\", { className: `${animated}Txt` },\r\n                \"Welcome to\",\r\n                React.createElement(\"br\", null),\r\n                \"LudwigThePig\"),\r\n            React.createElement(\"img\", { className: `${animated}Img jumbo-img`, src: \"static/assets/pig-jumbo.png\", alt: \"jumbo ludwig the pig\" })));\r\n    }\r\n}\r\nexports.default = Home;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvcGFnZXMvaG9tZS50c3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvcGFnZXMvaG9tZS50c3g/ODBmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gJy4uL3JlZHV4L3N0b3JlJztcbmltcG9ydCB7IHVwZGF0ZUluaXRpYWxMb2FkIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucy9pbml0aWFsTG9hZEFjdGlvbic7XG5cblxuaW50ZXJmYWNlIElBcHBTdGF0ZSB7XG4gIGluaXRpYWxMb2FkOiBib29sZWFuXG59XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQgPHt9LCBJQXBwU3RhdGU+e1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiB7fSkge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpbml0aWFsTG9hZDogc3RvcmUuZ2V0U3RhdGUoKS5pbml0aWFsTG9hZC5hY3RpdmVJbml0aWFsTG9hZFxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBzdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGluaXRpYWxMb2FkOiBzdG9yZS5nZXRTdGF0ZSgpLmluaXRpYWxMb2FkLmFjdGl2ZUluaXRpYWxMb2FkXG4gICAgICB9KVxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuaW5pdGlhbExvYWQpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gc3RvcmUuZGlzcGF0Y2godXBkYXRlSW5pdGlhbExvYWQoZmFsc2UpKSwgMjAwMCApO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGluaXRpYWxMb2FkIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGFuaW1hdGVkID0gaW5pdGlhbExvYWQgPyAnYW5pbWF0ZWQnIDogbnVsbDtcbiAgICByZXR1cm4gIChcbiAgICAgIDxkaXYgaWQ9XCJob21lXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e2Ake2FuaW1hdGVkfVR4dGB9PldlbGNvbWUgdG88YnIvPkx1ZHdpZ1RoZVBpZzwvaDE+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPXtgJHthbmltYXRlZH1JbWcganVtYm8taW1nYH0gc3JjPVwic3RhdGljL2Fzc2V0cy9waWctanVtYm8ucG5nXCIgYWx0PVwianVtYm8gbHVkd2lnIHRoZSBwaWdcIj48L2ltZz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSBcbiAgICBcbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/pages/home.tsx\n");

/***/ }),

/***/ "./client/pages/project.tsx":
/*!**********************************!*\
  !*** ./client/pages/project.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ \"react\");\r\nconst Project = ({ id, name, description, url, image_url, created }) => {\r\n    let image = image_url.split('/');\r\n    image[image.length - 2] = 'c_scale,w_300';\r\n    image = image.join('/');\r\n    return (React.createElement(\"div\", { className: \"project\", onClick: () => window.open(url, '_blank') },\r\n        React.createElement(\"img\", { src: `${image}`, alt: name }),\r\n        React.createElement(\"h3\", null,\r\n            name,\r\n            React.createElement(\"span\", null, created)),\r\n        React.createElement(\"p\", null, description)));\r\n};\r\nexports.default = Project;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvcGFnZXMvcHJvamVjdC50c3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvcGFnZXMvcHJvamVjdC50c3g/MjQ2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBwcm9qZWN0IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5jb25zdCBQcm9qZWN0ID0gKHtpZCwgbmFtZSwgZGVzY3JpcHRpb24sIHVybCwgaW1hZ2VfdXJsLCBjcmVhdGVkIH06IHByb2plY3QpID0+IHtcbiAgbGV0IGltYWdlOiBBcnJheTxzdHJpbmc+IHwgc3RyaW5nID0gaW1hZ2VfdXJsLnNwbGl0KCcvJyk7XG4gIGltYWdlW2ltYWdlLmxlbmd0aCAtIDJdID0gJ2Nfc2NhbGUsd18zMDAnXG4gIGltYWdlID0gaW1hZ2Uuam9pbignLycpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdFwiIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5vcGVuKHVybCwgJ19ibGFuaycpfT5cbiAgICAgIDxpbWcgc3JjPXtgJHtpbWFnZX1gfSBhbHQ9e25hbWV9IC8+XG4gICAgICA8aDM+XG4gICAgICAgIHsgbmFtZSB9XG4gICAgICAgIDxzcGFuPnsgY3JlYXRlZCB9PC9zcGFuPlxuICAgICAgPC9oMz5cbiAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XG4gICAgPC9kaXY+XG4gIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUVBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/pages/project.tsx\n");

/***/ }),

/***/ "./client/pages/projects.tsx":
/*!***********************************!*\
  !*** ./client/pages/projects.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ \"react\");\r\nconst store_1 = __webpack_require__(/*! ../redux/store */ \"./client/redux/store.ts\");\r\nconst project_1 = __webpack_require__(/*! ./project */ \"./client/pages/project.tsx\");\r\nconst projectsAction_1 = __webpack_require__(/*! ../redux/actions/projectsAction */ \"./client/redux/actions/projectsAction.ts\");\r\nconst axios_1 = __webpack_require__(/*! axios */ \"axios\");\r\nclass Projects extends React.Component {\r\n    static getProjects() {\r\n        return axios_1.default(`/api/v1/projects/`)\r\n            .then(data => data)\r\n            .catch(console.error);\r\n    }\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = {\r\n            projects: store_1.store.getState().projects.projects\r\n        };\r\n    }\r\n    componentWillMount() {\r\n        store_1.store.subscribe(() => {\r\n            const newProjects = store_1.store.getState().projects.projects;\r\n            this.setState({\r\n                projects: newProjects\r\n            });\r\n        });\r\n    }\r\n    componentDidMount() {\r\n        Projects.getProjects()\r\n            // @ts-ignore\r\n            .then(data => store_1.store.dispatch(projectsAction_1.updateProjects(data.data)));\r\n    }\r\n    render() {\r\n        const { projects } = this.state;\r\n        return (React.createElement(\"div\", { id: \"projects\" },\r\n            React.createElement(\"h1\", null, \"Projects\"),\r\n            React.createElement(\"div\", { className: \"projects-container\" }, projects.map(proj => React.createElement(project_1.default, Object.assign({ key: proj.id }, proj))))));\r\n    }\r\n}\r\nexports.default = Projects;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvcGFnZXMvcHJvamVjdHMudHN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L3BhZ2VzL3Byb2plY3RzLnRzeD8wM2JkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSAnLi4vcmVkdXgvc3RvcmUnO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCB7IHByb2plY3QgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyB1cGRhdGVQcm9qZWN0cyB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMvcHJvamVjdHNBY3Rpb24nO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuXG5pbnRlcmZhY2UgSVByb2plY3RzU3RhdGUge1xuICBwcm9qZWN0czogQXJyYXk8cHJvamVjdD5cbn1cblxuaW50ZXJmYWNlIElQcm9qZWN0c1Byb3BzIHtcbiAgcHJvamVjdHM/OiBBcnJheTxwcm9qZWN0PlxufVxuXG5cbmNsYXNzIFByb2plY3RzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IDxJUHJvamVjdHNQcm9wcywgSVByb2plY3RzU3RhdGU+ICB7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgZ2V0UHJvamVjdHMoKSB7XG4gICAgcmV0dXJuIGF4aW9zKGAvYXBpL3YxL3Byb2plY3RzL2ApXG4gICAgICAudGhlbihkYXRhID0+IGRhdGEpXG4gICAgICAuY2F0Y2goY29uc29sZS5lcnJvcik7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb2plY3RzUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHByb2plY3RzOiBzdG9yZS5nZXRTdGF0ZSgpLnByb2plY3RzLnByb2plY3RzXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBjb25zdCBuZXdQcm9qZWN0cyA9IHN0b3JlLmdldFN0YXRlKCkucHJvamVjdHMucHJvamVjdHM7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcHJvamVjdHM6IG5ld1Byb2plY3RzXG4gICAgICB9KTtcbiAgICB9KVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgUHJvamVjdHMuZ2V0UHJvamVjdHMoKVxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIC50aGVuKGRhdGEgPT4gc3RvcmUuZGlzcGF0Y2godXBkYXRlUHJvamVjdHMoZGF0YS5kYXRhKSkpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcHJvamVjdHMgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJwcm9qZWN0c1wiPlxuICAgICAgICBcbiAgICAgIDxoMT5Qcm9qZWN0czwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdHMtY29udGFpbmVyXCI+XG4gICAgICAgIHsgcHJvamVjdHMubWFwKHByb2ogPT4gPFByb2plY3Qga2V5PXtwcm9qLmlkfSB7Li4ucHJvan0gLz4pIH1cbiAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSBcbiAgICBcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzOyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBWUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBS0E7QUFDQTtBQUVBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/pages/projects.tsx\n");

/***/ }),

/***/ "./client/redux/actions/initialLoadAction.ts":
/*!***************************************************!*\
  !*** ./client/redux/actions/initialLoadAction.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst initialLoadTypes_1 = __webpack_require__(/*! ../types/initialLoadTypes */ \"./client/redux/types/initialLoadTypes.ts\");\r\nfunction updateInitialLoad(newInitialState) {\r\n    return {\r\n        type: initialLoadTypes_1.ACTIVE_INITIAL_LOAD,\r\n        payload: newInitialState\r\n    };\r\n}\r\nexports.updateInitialLoad = updateInitialLoad;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvcmVkdXgvYWN0aW9ucy9pbml0aWFsTG9hZEFjdGlvbi50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9yZWR1eC9hY3Rpb25zL2luaXRpYWxMb2FkQWN0aW9uLnRzPzM1NDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5pdGFsTG9hZEFjdGlvbiwgQUNUSVZFX0lOSVRJQUxfTE9BRCB9IGZyb20gXCIuLi90eXBlcy9pbml0aWFsTG9hZFR5cGVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVJbml0aWFsTG9hZChuZXdJbml0aWFsU3RhdGU6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBQ1RJVkVfSU5JVElBTF9MT0FELFxuICAgIHBheWxvYWQ6IG5ld0luaXRpYWxTdGF0ZVxuICB9XG59Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/redux/actions/initialLoadAction.ts\n");

/***/ }),

/***/ "./client/redux/actions/projectsAction.ts":
/*!************************************************!*\
  !*** ./client/redux/actions/projectsAction.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst projectTypes_1 = __webpack_require__(/*! ../types/projectTypes */ \"./client/redux/types/projectTypes.ts\");\r\nfunction updateProjects(newMessage) {\r\n    return {\r\n        type: projectTypes_1.ACTIVE_PROJECT,\r\n        payload: newMessage\r\n    };\r\n}\r\nexports.updateProjects = updateProjects;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvcmVkdXgvYWN0aW9ucy9wcm9qZWN0c0FjdGlvbi50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9yZWR1eC9hY3Rpb25zL3Byb2plY3RzQWN0aW9uLnRzPzI4ZGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQUNUSVZFX1BST0pFQ1QsIFByb2plY3RBY3Rpb24sIHByb2plY3RQYXlsb2FkIH0gZnJvbSAnLi4vdHlwZXMvcHJvamVjdFR5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVByb2plY3RzKG5ld01lc3NhZ2U6IHByb2plY3RQYXlsb2FkKTogUHJvamVjdEFjdGlvbiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQUNUSVZFX1BST0pFQ1QsXG4gICAgcGF5bG9hZDogbmV3TWVzc2FnZVxuICB9XG59Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/redux/actions/projectsAction.ts\n");

/***/ }),

/***/ "./client/redux/actions/themeAction.ts":
/*!*********************************************!*\
  !*** ./client/redux/actions/themeAction.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst themeTypes_1 = __webpack_require__(/*! ../types/themeTypes */ \"./client/redux/types/themeTypes.ts\");\r\nfunction updateNav(newMessage) {\r\n    return {\r\n        type: themeTypes_1.ACTIVE_THEME,\r\n        payload: newMessage\r\n    };\r\n}\r\nexports.updateNav = updateNav;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvcmVkdXgvYWN0aW9ucy90aGVtZUFjdGlvbi50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9yZWR1eC9hY3Rpb25zL3RoZW1lQWN0aW9uLnRzP2I2MmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVRoZW1lQWN0aW9uLCB0aGVtZVBheWxvYWQsIEFDVElWRV9USEVNRSB9IGZyb20gJy4uL3R5cGVzL3RoZW1lVHlwZXMnXG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVOYXYobmV3TWVzc2FnZTogdGhlbWVQYXlsb2FkKTogSVRoZW1lQWN0aW9uIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBQ1RJVkVfVEhFTUUsXG4gICAgcGF5bG9hZDogbmV3TWVzc2FnZVxuICB9XG59Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/redux/actions/themeAction.ts\n");

/***/ }),

/***/ "./client/redux/reducers/exitAnimationReducer.ts":
/*!*******************************************************!*\
  !*** ./client/redux/reducers/exitAnimationReducer.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst exitAnimationTypes_1 = __webpack_require__(/*! ../types/exitAnimationTypes */ \"./client/redux/types/exitAnimationTypes.ts\");\r\nconst initialState = {\r\n    activeExitAnimation: false\r\n};\r\nconst exitAnimationReducer = (state = initialState, action) => {\r\n    switch (action.type) {\r\n        case exitAnimationTypes_1.ACTIVE_EXIT_ANIMATION:\r\n            return { activeInitialLoad: action.payload };\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.default = exitAnimationReducer;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvcmVkdXgvcmVkdWNlcnMvZXhpdEFuaW1hdGlvblJlZHVjZXIudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvcmVkdXgvcmVkdWNlcnMvZXhpdEFuaW1hdGlvblJlZHVjZXIudHM/MmFkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFeGl0QW5pbWF0aW9uQWN0aW9uLCBBQ1RJVkVfRVhJVF9BTklNQVRJT04gfSBmcm9tICcuLi90eXBlcy9leGl0QW5pbWF0aW9uVHlwZXMnO1xuXG5cbmludGVyZmFjZSBJbnRpYWxMb2FkU3RhdGUge1xuICBhY3RpdmVFeGl0QW5pbWF0aW9uOiBib29sZWFuXG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogSW50aWFsTG9hZFN0YXRlID0ge1xuICBhY3RpdmVFeGl0QW5pbWF0aW9uOiBmYWxzZVxufVxuXG5jb25zdCBleGl0QW5pbWF0aW9uUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBFeGl0QW5pbWF0aW9uQWN0aW9uKSA9PiB7XG4gIHN3aXRjaChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQUNUSVZFX0VYSVRfQU5JTUFUSU9OOiBcbiAgICAgIHJldHVybiB7IGFjdGl2ZUluaXRpYWxMb2FkOiBhY3Rpb24ucGF5bG9hZCB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZXhpdEFuaW1hdGlvblJlZHVjZXIiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/redux/reducers/exitAnimationReducer.ts\n");

/***/ }),

/***/ "./client/redux/reducers/initialLoadReducer.ts":
/*!*****************************************************!*\
  !*** ./client/redux/reducers/initialLoadReducer.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst initialLoadTypes_1 = __webpack_require__(/*! ../types/initialLoadTypes */ \"./client/redux/types/initialLoadTypes.ts\");\r\nconst initialState = {\r\n    activeInitialLoad: true\r\n};\r\nconst initialLoadReducer = (state = initialState, action) => {\r\n    switch (action.type) {\r\n        case initialLoadTypes_1.ACTIVE_INITIAL_LOAD:\r\n            return { activeInitialLoad: action.payload };\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.default = initialLoadReducer;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvcmVkdXgvcmVkdWNlcnMvaW5pdGlhbExvYWRSZWR1Y2VyLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L3JlZHV4L3JlZHVjZXJzL2luaXRpYWxMb2FkUmVkdWNlci50cz84NDZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluaXRhbExvYWRBY3Rpb24sIEFDVElWRV9JTklUSUFMX0xPQUQgfSBmcm9tICcuLi90eXBlcy9pbml0aWFsTG9hZFR5cGVzJztcblxuXG5pbnRlcmZhY2UgSW50aWFsTG9hZFN0YXRlIHtcbiAgYWN0aXZlSW5pdGlhbExvYWQ6IGJvb2xlYW5cbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlOiBJbnRpYWxMb2FkU3RhdGUgPSB7XG4gIGFjdGl2ZUluaXRpYWxMb2FkOiB0cnVlXG59XG5cbmNvbnN0IGluaXRpYWxMb2FkUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBJbml0YWxMb2FkQWN0aW9uKSA9PiB7XG4gIHN3aXRjaChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQUNUSVZFX0lOSVRJQUxfTE9BRDogXG4gICAgICByZXR1cm4geyBhY3RpdmVJbml0aWFsTG9hZDogYWN0aW9uLnBheWxvYWQgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxMb2FkUmVkdWNlciJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/redux/reducers/initialLoadReducer.ts\n");

/***/ }),

/***/ "./client/redux/reducers/navReducer.ts":
/*!*********************************************!*\
  !*** ./client/redux/reducers/navReducer.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst navTypes_1 = __webpack_require__(/*! ../types/navTypes */ \"./client/redux/types/navTypes.ts\");\r\nconst initialState = {\r\n    activeNav: 'home',\r\n};\r\nconst navReducer = (state = initialState, action) => {\r\n    switch (action.type) {\r\n        case navTypes_1.ACTIVE_NAV:\r\n            return { activeNav: action.payload };\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.default = navReducer;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvcmVkdXgvcmVkdWNlcnMvbmF2UmVkdWNlci50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9yZWR1eC9yZWR1Y2Vycy9uYXZSZWR1Y2VyLnRzPzA3NTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF2QWN0aW9uLCBBQ1RJVkVfTkFWLCBuYXZQYXlsb2FkIH0gZnJvbSAnLi4vdHlwZXMvbmF2VHlwZXMnO1xuXG5pbnRlcmZhY2UgTmF2U3RhdGUge1xuICBhY3RpdmVOYXY6IG5hdlBheWxvYWQ7XG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTpOYXZTdGF0ZSA9IHtcbiAgYWN0aXZlTmF2IDogJ2hvbWUnLFxufVxuXG5jb25zdCBuYXZSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246TmF2QWN0aW9uKTogTmF2U3RhdGUgPT4ge1xuICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEFDVElWRV9OQVY6XG4gICAgICByZXR1cm4geyBhY3RpdmVOYXY6IGFjdGlvbi5wYXlsb2FkIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuYXZSZWR1Y2VyOyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/redux/reducers/navReducer.ts\n");

/***/ }),

/***/ "./client/redux/reducers/projectReducer.ts":
/*!*************************************************!*\
  !*** ./client/redux/reducers/projectReducer.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst projectTypes_1 = __webpack_require__(/*! ../types/projectTypes */ \"./client/redux/types/projectTypes.ts\");\r\nconst initialState = {\r\n    projects: []\r\n};\r\nconst projectReducer = (state = initialState, action) => {\r\n    switch (action.type) {\r\n        case projectTypes_1.ACTIVE_PROJECT:\r\n            return { projects: action.payload };\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.default = projectReducer;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvcmVkdXgvcmVkdWNlcnMvcHJvamVjdFJlZHVjZXIudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvcmVkdXgvcmVkdWNlcnMvcHJvamVjdFJlZHVjZXIudHM/ZGU1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9qZWN0QWN0aW9uLCBBQ1RJVkVfUFJPSkVDVCwgcHJvamVjdFBheWxvYWQgfSBmcm9tICcuLi90eXBlcy9wcm9qZWN0VHlwZXMnXG5cbmludGVyZmFjZSBQcm9qZWN0U3RhdGUge1xuICBwcm9qZWN0czogcHJvamVjdFBheWxvYWQ7XG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTpQcm9qZWN0U3RhdGUgPSB7XG4gIHByb2plY3RzOiBbXVxufVxuXG5jb25zdCBwcm9qZWN0UmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOlByb2plY3RBY3Rpb24pOlByb2plY3RTdGF0ZSA9PiB7XG4gIHN3aXRjaChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQUNUSVZFX1BST0pFQ1Q6XG4gICAgICByZXR1cm4geyBwcm9qZWN0czogYWN0aW9uLnBheWxvYWQgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RSZWR1Y2VyOyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/redux/reducers/projectReducer.ts\n");

/***/ }),

/***/ "./client/redux/reducers/root.ts":
/*!***************************************!*\
  !*** ./client/redux/reducers/root.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst redux_1 = __webpack_require__(/*! redux */ \"redux\");\r\nconst navReducer_1 = __webpack_require__(/*! ./navReducer */ \"./client/redux/reducers/navReducer.ts\");\r\nconst themeReducer_1 = __webpack_require__(/*! ./themeReducer */ \"./client/redux/reducers/themeReducer.ts\");\r\nconst initialLoadReducer_1 = __webpack_require__(/*! ./initialLoadReducer */ \"./client/redux/reducers/initialLoadReducer.ts\");\r\nconst projectReducer_1 = __webpack_require__(/*! ./projectReducer */ \"./client/redux/reducers/projectReducer.ts\");\r\nconst exitAnimationReducer_1 = __webpack_require__(/*! ./exitAnimationReducer */ \"./client/redux/reducers/exitAnimationReducer.ts\");\r\nconst rootReducer = redux_1.combineReducers({\r\n    nav: navReducer_1.default,\r\n    theme: themeReducer_1.default,\r\n    initialLoad: initialLoadReducer_1.default,\r\n    projects: projectReducer_1.default,\r\n    exitAnimation: exitAnimationReducer_1.default\r\n});\r\nexports.default = rootReducer;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvcmVkdXgvcmVkdWNlcnMvcm9vdC50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9yZWR1eC9yZWR1Y2Vycy9yb290LnRzPzg2ZjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IG5hdiBmcm9tICcuL25hdlJlZHVjZXInO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4vdGhlbWVSZWR1Y2VyJztcbmltcG9ydCBpbml0aWFsTG9hZCBmcm9tICcuL2luaXRpYWxMb2FkUmVkdWNlcic7XG5pbXBvcnQgcHJvamVjdHMgZnJvbSAnLi9wcm9qZWN0UmVkdWNlcic7XG5pbXBvcnQgZXhpdEFuaW1hdGlvbiBmcm9tICcuL2V4aXRBbmltYXRpb25SZWR1Y2VyJ1xuXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIG5hdixcbiAgdGhlbWUsXG4gIGluaXRpYWxMb2FkLFxuICBwcm9qZWN0cyxcbiAgZXhpdEFuaW1hdGlvblxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuXG5leHBvcnQgdHlwZSBBcHBTdGF0ZSA9IFJldHVyblR5cGU8dHlwZW9mIHJvb3RSZWR1Y2VyPlxuIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/redux/reducers/root.ts\n");

/***/ }),

/***/ "./client/redux/reducers/themeReducer.ts":
/*!***********************************************!*\
  !*** ./client/redux/reducers/themeReducer.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst themeTypes_1 = __webpack_require__(/*! ../types/themeTypes */ \"./client/redux/types/themeTypes.ts\");\r\nconst initialState = {\r\n    activeTheme: 'light',\r\n};\r\nconst themeReducer = (state = initialState, action) => {\r\n    switch (action.type) {\r\n        case themeTypes_1.ACTIVE_THEME:\r\n            return { activeTheme: action.payload };\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.default = themeReducer;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvcmVkdXgvcmVkdWNlcnMvdGhlbWVSZWR1Y2VyLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L3JlZHV4L3JlZHVjZXJzL3RoZW1lUmVkdWNlci50cz9iOWNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElUaGVtZUFjdGlvbiwgdGhlbWVQYXlsb2FkLCBBQ1RJVkVfVEhFTUUgfSBmcm9tICcuLi90eXBlcy90aGVtZVR5cGVzJ1xuXG5pbnRlcmZhY2UgVGhlbWVTdGF0ZSB7XG4gIGFjdGl2ZVRoZW1lOiB0aGVtZVBheWxvYWQ7XG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTpUaGVtZVN0YXRlID0ge1xuICBhY3RpdmVUaGVtZSA6ICdsaWdodCcsXG59XG5cbmNvbnN0IHRoZW1lUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOklUaGVtZUFjdGlvbik6IFRoZW1lU3RhdGUgPT4ge1xuICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEFDVElWRV9USEVNRTpcbiAgICAgIHJldHVybiB7IGFjdGl2ZVRoZW1lOiBhY3Rpb24ucGF5bG9hZCB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdGhlbWVSZWR1Y2VyOyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/redux/reducers/themeReducer.ts\n");

/***/ }),

/***/ "./client/redux/store.ts":
/*!*******************************!*\
  !*** ./client/redux/store.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst redux_1 = __webpack_require__(/*! redux */ \"redux\");\r\nconst redux_thunk_1 = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\r\nconst root_1 = __webpack_require__(/*! ./reducers/root */ \"./client/redux/reducers/root.ts\");\r\nexports.initialState = {\r\n    nav: {\r\n        activeNav: 'home',\r\n    },\r\n    theme: {\r\n        activeTheme: 'dark'\r\n    },\r\n    initialLoad: {\r\n        activeInitialLoad: true\r\n    },\r\n    exitAnimation: {\r\n        activeExitAnimation: false\r\n    },\r\n    projects: {\r\n        projects: []\r\n    }\r\n};\r\nexports.store = redux_1.createStore(root_1.default, exports.initialState, redux_1.applyMiddleware(redux_thunk_1.default));\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvcmVkdXgvc3RvcmUudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvcmVkdXgvc3RvcmUudHM/ZmY2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcbmltcG9ydCByb290UmVkdWNlciwgeyBBcHBTdGF0ZSB9IGZyb20gJy4vcmVkdWNlcnMvcm9vdCc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6QXBwU3RhdGUgPSB7XG4gIG5hdjoge1xuICAgIGFjdGl2ZU5hdiA6ICdob21lJyxcbiAgfSxcbiAgdGhlbWU6IHtcbiAgICBhY3RpdmVUaGVtZTogJ2RhcmsnXG4gIH0sXG4gIGluaXRpYWxMb2FkOiB7XG4gICAgYWN0aXZlSW5pdGlhbExvYWQ6IHRydWVcbiAgfSxcbiAgZXhpdEFuaW1hdGlvbjoge1xuICAgIGFjdGl2ZUV4aXRBbmltYXRpb246IGZhbHNlXG4gIH0sXG4gIHByb2plY3RzOiB7XG4gICAgcHJvamVjdHM6IFtdXG4gIH1cbiAgXG59XG5cbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGFwcGx5TWlkZGxld2FyZSh0aHVuaykpO1xuIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/redux/store.ts\n");

/***/ }),

/***/ "./client/redux/types/exitAnimationTypes.ts":
/*!**************************************************!*\
  !*** ./client/redux/types/exitAnimationTypes.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ACTIVE_EXIT_ANIMATION = 'ACTIVE_EXIT_ANIMATION';\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvcmVkdXgvdHlwZXMvZXhpdEFuaW1hdGlvblR5cGVzLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L3JlZHV4L3R5cGVzL2V4aXRBbmltYXRpb25UeXBlcy50cz8zMTA0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBBQ1RJVkVfRVhJVF9BTklNQVRJT04gPSAnQUNUSVZFX0VYSVRfQU5JTUFUSU9OJztcblxuZXhwb3J0IGludGVyZmFjZSBFeGl0QW5pbWF0aW9uQWN0aW9uIHtcbiAgdHlwZTogdHlwZW9mIEFDVElWRV9FWElUX0FOSU1BVElPTixcbiAgcGF5bG9hZDogYm9vbGVhblxufVxuIl0sIm1hcHBpbmdzIjoiOztBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/redux/types/exitAnimationTypes.ts\n");

/***/ }),

/***/ "./client/redux/types/initialLoadTypes.ts":
/*!************************************************!*\
  !*** ./client/redux/types/initialLoadTypes.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ACTIVE_INITIAL_LOAD = 'ACTIVE_INITIAL_LOAD';\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvcmVkdXgvdHlwZXMvaW5pdGlhbExvYWRUeXBlcy50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9yZWR1eC90eXBlcy9pbml0aWFsTG9hZFR5cGVzLnRzPzQ4NzYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFDVElWRV9JTklUSUFMX0xPQUQgPSAnQUNUSVZFX0lOSVRJQUxfTE9BRCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5pdGFsTG9hZEFjdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBBQ1RJVkVfSU5JVElBTF9MT0FELFxuICBwYXlsb2FkOiBib29sZWFuXG59XG4iXSwibWFwcGluZ3MiOiI7O0FBQUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/redux/types/initialLoadTypes.ts\n");

/***/ }),

/***/ "./client/redux/types/navTypes.ts":
/*!****************************************!*\
  !*** ./client/redux/types/navTypes.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ACTIVE_NAV = 'ACTIVE_NAV';\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvcmVkdXgvdHlwZXMvbmF2VHlwZXMudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvcmVkdXgvdHlwZXMvbmF2VHlwZXMudHM/ZWY0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQUNUSVZFX05BViA9ICdBQ1RJVkVfTkFWJ1xuXG5leHBvcnQgdHlwZSBuYXZQYXlsb2FkID0gJ2hvbWUnIHwgJ2Fib3V0JyB8ICdwcm9qZWN0cyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2QWN0aW9uIHtcbiAgdHlwZTogdHlwZW9mIEFDVElWRV9OQVZcbiAgcGF5bG9hZDogbmF2UGF5bG9hZFxuXG59Il0sIm1hcHBpbmdzIjoiOztBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/redux/types/navTypes.ts\n");

/***/ }),

/***/ "./client/redux/types/projectTypes.ts":
/*!********************************************!*\
  !*** ./client/redux/types/projectTypes.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ACTIVE_PROJECT = 'ACTIVE_PROJECT';\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvcmVkdXgvdHlwZXMvcHJvamVjdFR5cGVzLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L3JlZHV4L3R5cGVzL3Byb2plY3RUeXBlcy50cz9jMTdiIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBBQ1RJVkVfUFJPSkVDVCA9ICdBQ1RJVkVfUFJPSkVDVCc7XG5cbmltcG9ydCB7IHByb2plY3QgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmV4cG9ydCB0eXBlIHByb2plY3RQYXlsb2FkID0gQXJyYXk8cHJvamVjdD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvamVjdEFjdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBBQ1RJVkVfUFJPSkVDVFxuICBwYXlsb2FkOiBwcm9qZWN0UGF5bG9hZFxufSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/redux/types/projectTypes.ts\n");

/***/ }),

/***/ "./client/redux/types/themeTypes.ts":
/*!******************************************!*\
  !*** ./client/redux/types/themeTypes.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ACTIVE_THEME = 'ACTIVE_THEME';\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvcmVkdXgvdHlwZXMvdGhlbWVUeXBlcy50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9yZWR1eC90eXBlcy90aGVtZVR5cGVzLnRzP2QwNTciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFDVElWRV9USEVNRSA9ICdBQ1RJVkVfVEhFTUUnO1xuXG5leHBvcnQgdHlwZSB0aGVtZVBheWxvYWQgPSAnZGFyaycgfCAnbGlnaHQnIHwgJ2JsdWUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUaGVtZUFjdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBBQ1RJVkVfVEhFTUVcbiAgcGF5bG9hZDogdGhlbWVQYXlsb2FkXG59XG4iXSwibWFwcGluZ3MiOiI7O0FBQUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/redux/types/themeTypes.ts\n");

/***/ }),

/***/ "./server/controllers/projects.ts":
/*!****************************************!*\
  !*** ./server/controllers/projects.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst server_1 = __webpack_require__(/*! ../server */ \"./server/server.ts\");\r\nconst API_KEY = process.env.API_KEY;\r\nclass ProjectController {\r\n    handleError(res, err) {\r\n        console.log(err);\r\n        return res.send(err);\r\n    }\r\n    getProjects(req, res) {\r\n        const query = req.query;\r\n        console.log(req.url);\r\n        // If no query\r\n        if (Object.keys(query).length === 0) {\r\n            server_1.db.any('SELECT * FROM projects')\r\n                .then(data => res.send(data))\r\n                .catch(err => {\r\n                console.log(err);\r\n                return res.send(err);\r\n            });\r\n        }\r\n        else {\r\n            // TODO: implement filters for GET request \r\n            server_1.db.any('SELECT * FROM projects')\r\n                .then(data => res.send(data))\r\n                .catch(err => {\r\n                console.log(err);\r\n                return res.send(err);\r\n            });\r\n        }\r\n    }\r\n    postProject(req, res) {\r\n        const body = req.body;\r\n        if (body.key !== API_KEY) {\r\n            res.send(`Hey, you don't have the authority to do that!`);\r\n        }\r\n        else {\r\n            const postKeys = Object.keys(body).filter(key => key !== 'categories' && key !== 'key');\r\n            const postVals = postKeys.map((key) => body[key]);\r\n            const FIELDS = postKeys.join(', ');\r\n            const $VALS = postKeys.map((val, i) => `$${i + 1}`)\r\n                .join(', ');\r\n            const query = `\n        WITH new_proj AS (INSERT INTO projects \n        (${FIELDS}) VALUES (${$VALS}) RETURNING id)\n\n        INSERT INTO cat_proj (proj_id, cat_id)\n        ${body.categories.map(cat => `SELECT p.id, c.id FROM new_proj p, categories c\n          WHERE c.name='${cat}'`).join('\\r\\nUNION ALL\\r\\n')};\n      `;\r\n            server_1.db.any(query, postVals)\r\n                .then(() => res.send(`Project succesfully posted\\n${JSON.stringify(body)}`))\r\n                .catch(err => {\r\n                console.log(err);\r\n                return res.send(err);\r\n            });\r\n        }\r\n    }\r\n    putProject(req, res) {\r\n        const body = req.body;\r\n        if (body.key !== API_KEY) {\r\n            res.send(`Hey, you don't have the authority to do that!`);\r\n        }\r\n        else {\r\n            const colsAndVals = Object.keys(body)\r\n                .filter(key => key !== 'id' && key !== 'key')\r\n                .map(key => `${key}='${body[key]}'`)\r\n                .join(',\\r\\n');\r\n            const query = `\n        UPDATE projects\n        SET ${colsAndVals}\n        WHERE id=${body.id};\n      `;\r\n            server_1.db.any(query)\r\n                .then(() => res.send(`Project no. ${body.id} has been updated.`))\r\n                .catch(err => {\r\n                console.log(err);\r\n                return res.send(err);\r\n            });\r\n        }\r\n    }\r\n    deleteProject(req, res) {\r\n        const { id, key } = req.body;\r\n        if (key !== API_KEY) {\r\n            res.send(`Hey, you don't have the authority to do that!`);\r\n        }\r\n        else {\r\n            const query = `\n        DELETE FROM projects p\n        USING cat_proj j\n        WHERE p.id=${id}\n        AND j.proj_id=${id};\n      `;\r\n            server_1.db.any(query)\r\n                .then(data => res.send(`Project no${id} has been deleted.`))\r\n                .catch(err => {\r\n                console.log(err);\r\n                return res.send(err);\r\n            });\r\n        }\r\n    }\r\n}\r\nexports.default = ProjectController;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2ZXIvY29udHJvbGxlcnMvcHJvamVjdHMudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvY29udHJvbGxlcnMvcHJvamVjdHMudHM/NjlmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi9zZXJ2ZXInO1xuaW1wb3J0IHsgSVBvc3RCb2R5LCBJUHV0Qm9keSwgSURlbGV0ZUJvZHksIElHZXRQYXJhbXMgfSBmcm9tICcuL3Byb2plY3RUeXBlcyc7XG5cbmNvbnN0IEFQSV9LRVkgPSBwcm9jZXNzLmVudi5BUElfS0VZO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0Q29udHJvbGxlciB7XG5cbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcihyZXM6UmVzcG9uc2UsIGVycjogRXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIHJldHVybiByZXMuc2VuZChlcnIpO1xuICB9XG4gIFxuICBwdWJsaWMgZ2V0UHJvamVjdHMocmVxOlJlcXVlc3QsIHJlczpSZXNwb25zZSk6IHZvaWQge1xuICAgIGNvbnN0IHF1ZXJ5OklHZXRQYXJhbXMgPSByZXEucXVlcnk7XG4gICAgY29uc29sZS5sb2cocmVxLnVybClcbiAgICAvLyBJZiBubyBxdWVyeVxuICAgIGlmIChPYmplY3Qua2V5cyhxdWVyeSkubGVuZ3RoID09PSAwKSB7XG4gICAgICBkYi5hbnkoJ1NFTEVDVCAqIEZST00gcHJvamVjdHMnKVxuICAgICAgICAudGhlbihkYXRhID0+IHJlcy5zZW5kKGRhdGEpKVxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgIHJldHVybiByZXMuc2VuZChlcnIpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVE9ETzogaW1wbGVtZW50IGZpbHRlcnMgZm9yIEdFVCByZXF1ZXN0IFxuICAgICAgZGIuYW55KCdTRUxFQ1QgKiBGUk9NIHByb2plY3RzJylcbiAgICAgICAgLnRoZW4oZGF0YSA9PiByZXMuc2VuZChkYXRhKSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICByZXR1cm4gcmVzLnNlbmQoZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cblxuICBwdWJsaWMgcG9zdFByb2plY3QocmVxOlJlcXVlc3QsIHJlczpSZXNwb25zZSk6IHZvaWR7XG4gICAgY29uc3QgYm9keTpJUG9zdEJvZHkgPSByZXEuYm9keTtcbiAgICBpZiAoYm9keS5rZXkgIT09IEFQSV9LRVkpIHtcbiAgICAgIHJlcy5zZW5kKGBIZXksIHlvdSBkb24ndCBoYXZlIHRoZSBhdXRob3JpdHkgdG8gZG8gdGhhdCFgKTtcbiAgICB9IGVsc2UgeyAgXG5cbiAgICAgIGNvbnN0IHBvc3RLZXlzOmFueSA9IE9iamVjdC5rZXlzKGJvZHkpLmZpbHRlcihrZXkgPT4ga2V5ICE9PSAnY2F0ZWdvcmllcycgJiYga2V5ICE9PSAna2V5Jyk7XG4gICAgICBjb25zdCBwb3N0VmFscyA9IHBvc3RLZXlzLm1hcCgoa2V5OnN0cmluZyk6YW55ID0+IGJvZHlba2V5XSk7XG5cbiAgICAgIGNvbnN0IEZJRUxEUyA9IHBvc3RLZXlzLmpvaW4oJywgJyk7XG4gICAgICBjb25zdCAkVkFMUyA9IHBvc3RLZXlzLm1hcCgodmFsOnN0cmluZywgaTogbnVtYmVyKTogYW55ID0+IGAkJHtpICsgMX1gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5qb2luKCcsICcpO1xuXG4gICAgICBjb25zdCBxdWVyeSA9IGBcbiAgICAgICAgV0lUSCBuZXdfcHJvaiBBUyAoSU5TRVJUIElOVE8gcHJvamVjdHMgXG4gICAgICAgICgke0ZJRUxEU30pIFZBTFVFUyAoJHskVkFMU30pIFJFVFVSTklORyBpZClcblxuICAgICAgICBJTlNFUlQgSU5UTyBjYXRfcHJvaiAocHJval9pZCwgY2F0X2lkKVxuICAgICAgICAke2JvZHkuY2F0ZWdvcmllcy5tYXAoY2F0ID0+IFxuICAgICAgICAgIGBTRUxFQ1QgcC5pZCwgYy5pZCBGUk9NIG5ld19wcm9qIHAsIGNhdGVnb3JpZXMgY1xuICAgICAgICAgIFdIRVJFIGMubmFtZT0nJHtjYXR9J2BcbiAgICAgICAgKS5qb2luKCdcXHJcXG5VTklPTiBBTExcXHJcXG4nKX07XG4gICAgICBgXG5cbiAgICAgIGRiLmFueShxdWVyeSwgcG9zdFZhbHMpXG4gICAgICAgIC50aGVuKCgpID0+IHJlcy5zZW5kKGBQcm9qZWN0IHN1Y2Nlc2Z1bGx5IHBvc3RlZFxcbiR7SlNPTi5zdHJpbmdpZnkoYm9keSl9YCkpXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zZW5kKGVycik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG5cbiAgcHVibGljIHB1dFByb2plY3QocmVxOlJlcXVlc3QsIHJlczpSZXNwb25zZSk6IHZvaWQge1xuICAgIGNvbnN0IGJvZHk6SVB1dEJvZHkgPSByZXEuYm9keTtcblxuICAgIGlmIChib2R5LmtleSAhPT0gQVBJX0tFWSkge1xuICAgICAgcmVzLnNlbmQoYEhleSwgeW91IGRvbid0IGhhdmUgdGhlIGF1dGhvcml0eSB0byBkbyB0aGF0IWApXG4gICAgfSBlbHNlIHsgIFxuXG4gICAgICBjb25zdCBjb2xzQW5kVmFscyA9IE9iamVjdC5rZXlzKGJvZHkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoa2V5ID0+IGtleSAhPT0gJ2lkJyAmJiBrZXkgIT09ICdrZXknKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGtleSA9PiBgJHtrZXl9PScke2JvZHlba2V5XX0nYClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmpvaW4oJyxcXHJcXG4nKTtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gYFxuICAgICAgICBVUERBVEUgcHJvamVjdHNcbiAgICAgICAgU0VUICR7Y29sc0FuZFZhbHN9XG4gICAgICAgIFdIRVJFIGlkPSR7Ym9keS5pZH07XG4gICAgICBgOyBcblxuICAgICAgZGIuYW55KHF1ZXJ5KVxuICAgICAgICAudGhlbigoKSA9PiByZXMuc2VuZChgUHJvamVjdCBuby4gJHtib2R5LmlkfSBoYXMgYmVlbiB1cGRhdGVkLmApKVxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgIHJldHVybiByZXMuc2VuZChlcnIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuXG4gIHB1YmxpYyBkZWxldGVQcm9qZWN0KHJlcTpSZXF1ZXN0LCByZXM6UmVzcG9uc2UpOiB2b2lkIHtcbiAgICBjb25zdCB7IGlkLCBrZXkgfTpJRGVsZXRlQm9keSA9IHJlcS5ib2R5O1xuICAgIGlmIChrZXkgIT09IEFQSV9LRVkpIHtcbiAgICAgIHJlcy5zZW5kKGBIZXksIHlvdSBkb24ndCBoYXZlIHRoZSBhdXRob3JpdHkgdG8gZG8gdGhhdCFgKVxuICAgIH0gZWxzZSB7ICBcblxuICAgICAgY29uc3QgcXVlcnkgPSBgXG4gICAgICAgIERFTEVURSBGUk9NIHByb2plY3RzIHBcbiAgICAgICAgVVNJTkcgY2F0X3Byb2ogalxuICAgICAgICBXSEVSRSBwLmlkPSR7aWR9XG4gICAgICAgIEFORCBqLnByb2pfaWQ9JHtpZH07XG4gICAgICBgXG4gICAgICBkYi5hbnkocXVlcnkpXG4gICAgICAgIC50aGVuKGRhdGEgPT4gcmVzLnNlbmQoYFByb2plY3Qgbm8ke2lkfSBoYXMgYmVlbiBkZWxldGVkLmApKVxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgIHJldHVybiByZXMuc2VuZChlcnIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cbn0iXSwibWFwcGluZ3MiOiI7O0FBQ0E7QUFHQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBL0dBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./server/controllers/projects.ts\n");

/***/ }),

/***/ "./server/router.ts":
/*!**************************!*\
  !*** ./server/router.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst projects_1 = __webpack_require__(/*! ./controllers/projects */ \"./server/controllers/projects.ts\");\r\nconst project = new projects_1.default;\r\nexports.default = (app) => {\r\n    app.route('/api/v1/projects*')\r\n        .get(project.getProjects)\r\n        .put(project.putProject)\r\n        .post(project.postProject)\r\n        .delete(project.deleteProject);\r\n};\r\n/**\r\n *\r\n * shape of api v1\r\n *\r\n * things users can get\r\n  * list of categories\r\n  * items\r\n  *    by category\r\n  *    by limit\r\n  *    by order\r\n  *      date created\r\n  *      date updated\r\n  *    alphabetically\r\n  *  a single project\r\n *\r\n *\r\n *  tables\r\n *\r\n *\r\n */ \r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2ZXIvcm91dGVyLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc2VydmVyL3JvdXRlci50cz9jYzU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcGxpY2F0aW9uIH0gZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20nLi9jb250cm9sbGVycy9wcm9qZWN0cyc7XG5cbmNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdDtcblxuZXhwb3J0IGRlZmF1bHQgKGFwcDogQXBwbGljYXRpb24pID0+IHtcbiAgYXBwLnJvdXRlKCcvYXBpL3YxL3Byb2plY3RzKicpXG4gICAgLmdldChwcm9qZWN0LmdldFByb2plY3RzKVxuICAgIC5wdXQocHJvamVjdC5wdXRQcm9qZWN0KVxuICAgIC5wb3N0KHByb2plY3QucG9zdFByb2plY3QpXG4gICAgLmRlbGV0ZShwcm9qZWN0LmRlbGV0ZVByb2plY3QpOyAgIFxufVxuXG4vKipcbiAqIFxuICogc2hhcGUgb2YgYXBpIHYxXG4gKiBcbiAqIHRoaW5ncyB1c2VycyBjYW4gZ2V0XG4gICogbGlzdCBvZiBjYXRlZ29yaWVzXG4gICogaXRlbXNcbiAgKiAgICBieSBjYXRlZ29yeVxuICAqICAgIGJ5IGxpbWl0XG4gICogICAgYnkgb3JkZXJcbiAgKiAgICAgIGRhdGUgY3JlYXRlZFxuICAqICAgICAgZGF0ZSB1cGRhdGVkXG4gICogICAgYWxwaGFiZXRpY2FsbHlcbiAgKiAgYSBzaW5nbGUgcHJvamVjdFxuICogXG4gKiBcbiAqICB0YWJsZXNcbiAqIFxuICogXG4gKi8iXSwibWFwcGluZ3MiOiI7O0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./server/router.ts\n");

/***/ }),

/***/ "./server/server.ts":
/*!**************************!*\
  !*** ./server/server.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\r\nconst express = __webpack_require__(/*! express */ \"express\");\r\nconst fs = __webpack_require__(/*! fs */ \"fs\");\r\nconst renderer_1 = __webpack_require__(/*! ./views/renderer */ \"./server/views/renderer.tsx\");\r\nconst router_1 = __webpack_require__(/*! ./router */ \"./server/router.ts\");\r\nconst pgPromise = __webpack_require__(/*! pg-promise */ \"pg-promise\");\r\nconst bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\r\nconst cors = __webpack_require__(/*! cors */ \"cors\");\r\n// Environmental Variables\r\nconst port = process.env.PORT;\r\nconst connectionSting = process.env.CONN_STR;\r\n//* ESTABLISH DATABASE TCP CONNECTION *//\r\nconst pgp = pgPromise({ error(error, e) {\r\n        if (e.cn) {\r\n            console.log('CN:', e.cn);\r\n            console.log('EVENT:', error.message || error);\r\n        }\r\n    } });\r\nexports.db = pgp(connectionSting);\r\nexports.db.connect()\r\n    .then(data => console.log('connected to the database'))\r\n    .catch(console.log);\r\n//* APP SETUP AND MIDDLEWARE *//\r\nconst app = express();\r\napp.use(bodyParser.json());\r\napp.use(cors());\r\napp.use('/static', express.static('bin'));\r\n//* ROUTES *//\r\nrouter_1.default(app);\r\napp.get('/*', (req, res) => {\r\n    fs.readFile('./bin/main.css', 'utf-8', (cssErr, css) => {\r\n        fs.readFile('./bin/index.html', 'utf-8', (htmlErr, html) => {\r\n            if (cssErr || htmlErr) { // aggrigate errors, wrangle them, and send them off\r\n                const errRes = [cssErr, htmlErr]\r\n                    .filter(err => err !== undefined)\r\n                    .join('\\n');\r\n                res.send(errRes);\r\n            }\r\n            res.send(renderer_1.default(html, css, req.url));\r\n        });\r\n    });\r\n});\r\n//* SERVER CONNECTION *//\r\napp.listen(port, (err) => err\r\n    ? console.error(err)\r\n    : console.log(`Server listening on port ${port}`));\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2ZXIvc2VydmVyLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NlcnZlci50cz82NTcyIl0sInNvdXJjZXNDb250ZW50IjpbIlxucmVxdWlyZSgnZG90ZW52JykuY29uZmlnKCk7XG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHJlbmRlcmVyIGZyb20gJy4vdmlld3MvcmVuZGVyZXInO1xuaW1wb3J0IGFwaVJvdXRlciBmcm9tICcuL3JvdXRlcic7XG5pbXBvcnQgeyBSZXNwb25zZSwgUmVxdWVzdCwgTmV4dEZ1bmN0aW9uIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQge0lNYWluLCBJRGF0YWJhc2V9IGZyb20gJ3BnLXByb21pc2UnO1xuaW1wb3J0ICogYXMgcGdQcm9taXNlIGZyb20gJ3BnLXByb21pc2UnO1xuaW1wb3J0ICogYXMgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XG5pbXBvcnQgKiBhcyBjb3JzIGZyb20gJ2NvcnMnO1xuXG5cbi8vIEVudmlyb25tZW50YWwgVmFyaWFibGVzXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVDtcbmNvbnN0IGNvbm5lY3Rpb25TdGluZyA9IHByb2Nlc3MuZW52LkNPTk5fU1RSXG5cbi8vKiBFU1RBQkxJU0ggREFUQUJBU0UgVENQIENPTk5FQ1RJT04gKi8vXG5jb25zdCBwZ3A6IElNYWluID0gcGdQcm9taXNlKHtlcnJvcihlcnJvciwgZSkge1xuICBpZiAoZS5jbikge1xuICAgICAgY29uc29sZS5sb2coJ0NOOicsIGUuY24pO1xuICAgICAgY29uc29sZS5sb2coJ0VWRU5UOicsIGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpO1xuICB9XG59fSk7XG5leHBvcnQgY29uc3QgZGI6SURhdGFiYXNlPGFueT4gPSBwZ3AoY29ubmVjdGlvblN0aW5nKTtcblxuZGIuY29ubmVjdCgpXG4gIC50aGVuKGRhdGEgPT4gY29uc29sZS5sb2coJ2Nvbm5lY3RlZCB0byB0aGUgZGF0YWJhc2UnKSlcbiAgLmNhdGNoKGNvbnNvbGUubG9nKTtcblxuICBcbi8vKiBBUFAgU0VUVVAgQU5EIE1JRERMRVdBUkUgKi8vXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG4gIFxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG5hcHAudXNlKGNvcnMoKSk7XG5hcHAudXNlKCcvc3RhdGljJywgZXhwcmVzcy5zdGF0aWMoJ2JpbicpKVxuXG5cbi8vKiBST1VURVMgKi8vXG5hcGlSb3V0ZXIoYXBwKTtcblxuYXBwLmdldCgnLyonLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKTogdm9pZCA9PiB7XG4gIGZzLnJlYWRGaWxlKCcuL2Jpbi9tYWluLmNzcycsICd1dGYtOCcsIChjc3NFcnI6YW55LCBjc3M6YW55KT0+IHtcbiAgICBmcy5yZWFkRmlsZSgnLi9iaW4vaW5kZXguaHRtbCcsICd1dGYtOCcsIChodG1sRXJyOmFueSwgaHRtbDphbnkpPT4ge1xuICAgICAgXG4gICAgICBpZiAoY3NzRXJyIHx8IGh0bWxFcnIpIHsgLy8gYWdncmlnYXRlIGVycm9ycywgd3JhbmdsZSB0aGVtLCBhbmQgc2VuZCB0aGVtIG9mZlxuICAgICAgICBjb25zdCBlcnJSZXMgPSBbY3NzRXJyLCBodG1sRXJyXVxuICAgICAgICAgIC5maWx0ZXIoZXJyID0+IGVyciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIC5qb2luKCdcXG4nKTtcbiAgICAgICAgcmVzLnNlbmQoZXJyUmVzKTtcbiAgICAgIH1cbiAgICAgIHJlcy5zZW5kKCByZW5kZXJlcihodG1sLCBjc3MsIHJlcS51cmwpICk7XG4gICAgfSlcbiAgfSk7XG59KTtcblxuLy8qIFNFUlZFUiBDT05ORUNUSU9OICovL1xuYXBwLmxpc3Rlbihwb3J0LCAoZXJyOiBFcnJvcikgPT4gZXJyIFxuICA/IGNvbnNvbGUuZXJyb3IoZXJyKVxuICA6IGNvbnNvbGUubG9nKGBTZXJ2ZXIgbGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fWApXG4pOyJdLCJtYXBwaW5ncyI6Ijs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./server/server.ts\n");

/***/ }),

/***/ "./server/views/renderer.tsx":
/*!***********************************!*\
  !*** ./server/views/renderer.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ \"react\");\r\nconst ReactDOMServer = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\r\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nconst app_1 = __webpack_require__(/*! ../../client/components/app */ \"./client/components/app.tsx\");\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nconst store_1 = __webpack_require__(/*! ../../client/redux/store */ \"./client/redux/store.ts\");\r\nfunction renderer(html, css, url) {\r\n    const context = {};\r\n    const app = ReactDOMServer.renderToString(React.createElement(react_redux_1.Provider, { store: store_1.store },\r\n        React.createElement(react_router_dom_1.StaticRouter, { location: url, context: context },\r\n            React.createElement(app_1.default, { compiler: \"TypeScript\", framework: \"React\" }))));\r\n    const divRegex = /(<div id=\"root\">)(<\\/div>)/;\r\n    const styleRegex = /(<style>)(<\\/style>)/;\r\n    html = html.replace(divRegex, (original, div1, div2) => {\r\n        return div1 + app + div2;\r\n    });\r\n    html = html.replace(styleRegex, (original, div1, div2) => {\r\n        return div1 + css + div2;\r\n    });\r\n    return html;\r\n}\r\nexports.default = renderer;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2ZXIvdmlld3MvcmVuZGVyZXIudHN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc2VydmVyL3ZpZXdzL3JlbmRlcmVyLnRzeD80MDBmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0RE9NU2VydmVyIGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuaW1wb3J0IHsgU3RhdGljUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgQXBwIGZyb20gJy4uLy4uL2NsaWVudC9jb21wb25lbnRzL2FwcCc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHN0b3JlICB9IGZyb20gJy4uLy4uL2NsaWVudC9yZWR1eC9zdG9yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcmVyKGh0bWw6IHN0cmluZywgY3NzOnN0cmluZywgdXJsOnN0cmluZyk6IHN0cmluZyB7ICBcblxuICBjb25zdCBjb250ZXh0ID0ge307XG4gIGNvbnN0IGFwcCA9IFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RyaW5nKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPFN0YXRpY1JvdXRlciBsb2NhdGlvbj17dXJsfSBjb250ZXh0PXtjb250ZXh0fSA+XG4gICAgICAgIDxBcHAgY29tcGlsZXI9XCJUeXBlU2NyaXB0XCIgZnJhbWV3b3JrPVwiUmVhY3RcIiAvPlxuICAgICAgPC9TdGF0aWNSb3V0ZXI+XG4gICAgPC9Qcm92aWRlcj5cbiAgICAgICk7XG5cbiAgY29uc3QgZGl2UmVnZXggPSAvKDxkaXYgaWQ9XCJyb290XCI+KSg8XFwvZGl2PikvO1xuICBjb25zdCBzdHlsZVJlZ2V4ID0gLyg8c3R5bGU+KSg8XFwvc3R5bGU+KS87XG5cbiAgaHRtbCA9IGh0bWwucmVwbGFjZShkaXZSZWdleCwgKG9yaWdpbmFsLCBkaXYxOnN0cmluZywgZGl2MjpzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgcmV0dXJuIGRpdjEgKyBhcHAgKyBkaXYyO1xuICB9KTtcbiAgXG4gIGh0bWwgPSBodG1sLnJlcGxhY2Uoc3R5bGVSZWdleCwgKG9yaWdpbmFsLCBkaXYxOnN0cmluZywgZGl2MjpzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgIHJldHVybiBkaXYxICsgY3NzICsgZGl2MjtcbiAgfSk7XG5cbiAgcmV0dXJuIGh0bWw7XG59XG4iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBdkJBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./server/views/renderer.tsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9keS1wYXJzZXIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiPzgxODgiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///body-parser\n");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ycy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImNvcnNcIj83ZTllIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///cors\n");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG90ZW52LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZG90ZW52XCI/ZTcwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnZcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///dotenv\n");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIj8yMmZlIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///express\n");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiP2E0MGQiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///fs\n");

/***/ }),

/***/ "pg-promise":
/*!*****************************!*\
  !*** external "pg-promise" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"pg-promise\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGctcHJvbWlzZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInBnLXByb21pc2VcIj8zMjA1Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBnLXByb21pc2VcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///pg-promise\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QtZG9tL3NlcnZlci5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIj85NDM5Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///react-dom/server\n");

/***/ }),

/***/ "react-particles-js":
/*!*************************************!*\
  !*** external "react-particles-js" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-particles-js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QtcGFydGljbGVzLWpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcGFydGljbGVzLWpzXCI/MmRiZCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1wYXJ0aWNsZXMtanNcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///react-particles-js\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3Qtcm91dGVyLWRvbS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIj81M2I5Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///react-router-dom\n");

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-transition-group\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QtdHJhbnNpdGlvbi1ncm91cC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIj9kZGUwIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///react-transition-group\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdXgtdGh1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiPzg4MDgiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///redux-thunk\n");

/***/ })

/******/ });