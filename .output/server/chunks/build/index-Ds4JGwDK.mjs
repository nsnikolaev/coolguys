import { defineComponent, provide, shallowReactive, h, ref, inject, watch, Suspense, nextTick, Fragment, Transition, useSSRContext, mergeProps, unref, useAttrs } from 'vue';
import { RouterView } from 'vue-router';
import { v as defu } from '../runtime.mjs';
import { P as PageRouteSymbol, b as useNuxtApp, L as LayoutMetaSymbol, g as generateRouteKey$1, e as appPageTransition, f as appKeepalive, _ as _wrapIf, w as wrapInKeepAlive, t as toArray, h as useState } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';

const RouteProvider = defineComponent({
  props: {
    vnode: {
      type: Object,
      required: true
    },
    route: {
      type: Object,
      required: true
    },
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key]
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const __nuxt_component_0 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, slots, expose }) {
    const nuxtApp = useNuxtApp();
    const pageRef = ref();
    const forkRoute = inject(PageRouteSymbol, null);
    let previousPageKey;
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    let vnode;
    const done = nuxtApp.deferHydration();
    if (props.pageKey) {
      watch(() => props.pageKey, (next, prev) => {
        if (next !== prev) {
          nuxtApp.callHook("page:loading:start");
        }
      });
    }
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          var _a, _b, _c, _d;
          if (!routeProps.Component) {
            done();
            return;
          }
          const key = generateRouteKey$1(routeProps, props.pageKey);
          if (!nuxtApp.isHydrating && !hasChildrenRoutes(forkRoute, routeProps.route, routeProps.Component) && previousPageKey === key) {
            nuxtApp.callHook("page:loading:end");
          }
          previousPageKey = key;
          const hasTransition = !!((_b = (_a = props.transition) != null ? _a : routeProps.route.meta.pageTransition) != null ? _b : appPageTransition);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props.transition,
            routeProps.route.meta.pageTransition,
            appPageTransition,
            { onAfterLeave: () => {
              nuxtApp.callHook("page:transition:finish", routeProps.Component);
            } }
          ].filter(Boolean));
          const keepaliveConfig = (_d = (_c = props.keepalive) != null ? _c : routeProps.route.meta.keepalive) != null ? _d : appKeepalive;
          vnode = _wrapIf(
            Transition,
            hasTransition && transitionProps,
            wrapInKeepAlive(
              keepaliveConfig,
              h(Suspense, {
                suspensible: true,
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => {
                  nextTick(() => nuxtApp.callHook("page:finish", routeProps.Component).then(() => nuxtApp.callHook("page:loading:end")).finally(done));
                }
              }, {
                default: () => {
                  const providerVNode = h(RouteProvider, {
                    key: key || void 0,
                    vnode: slots.default ? h(Fragment, void 0, slots.default(routeProps)) : routeProps.Component,
                    route: routeProps.route,
                    renderKey: key || void 0,
                    trackRootNodes: hasTransition,
                    vnodeRef: pageRef
                  });
                  return providerVNode;
                }
              })
            )
          ).default();
          return vnode;
        }
      });
    };
  }
});
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: prop.onAfterLeave ? toArray(prop.onAfterLeave) : void 0
  }));
  return defu(..._props);
}
function hasChildrenRoutes(fork, newRoute, Component) {
  if (!fork) {
    return false;
  }
  const index = newRoute.matched.findIndex((m) => {
    var _a;
    return ((_a = m.components) == null ? void 0 : _a.default) === (Component == null ? void 0 : Component.type);
  });
  return index < newRoute.matched.length - 1;
}
const _imports_0$1 = "data:image/svg+xml,%3csvg%20width='385'%20height='54'%20viewBox='0%200%20385%2054'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M24.1045%2053.12C8.21445%2053.12%200.164453%2042.06%200.164453%2027.15C0.164453%2011.82%208.63445%200.83%2024.4545%200.83C38.1045%200.83%2045.3845%208.95%2046.5745%2020.57H33.6945C32.7845%2015.11%2030.5445%2011.12%2023.8945%2011.12C15.5645%2011.12%2013.0445%2017.56%2013.0445%2026.94C13.0445%2036.39%2015.5645%2042.83%2023.8945%2042.83C30.6145%2042.83%2032.8545%2038.84%2033.6945%2033.24H46.5745C45.4545%2044.72%2037.8945%2053.12%2024.1045%2053.12ZM74.9835%2053.12C59.0935%2053.12%2050.2035%2042.06%2050.2035%2026.94C50.2035%2011.89%2059.0935%200.83%2074.9835%200.83C90.7335%200.83%2099.7635%2011.89%2099.7635%2026.94C99.7635%2042.06%2090.7335%2053.12%2074.9835%2053.12ZM74.9835%2042.83C84.0835%2042.83%2086.8835%2035.69%2086.8835%2026.94C86.8835%2018.26%2084.0835%2011.12%2074.9835%2011.12C65.8135%2011.12%2063.0835%2018.26%2063.0835%2026.94C63.0835%2035.69%2065.8135%2042.83%2074.9835%2042.83ZM128.714%2053.12C112.824%2053.12%20103.934%2042.06%20103.934%2026.94C103.934%2011.89%20112.824%200.83%20128.714%200.83C144.464%200.83%20153.494%2011.89%20153.494%2026.94C153.494%2042.06%20144.464%2053.12%20128.714%2053.12ZM128.714%2042.83C137.814%2042.83%20140.614%2035.69%20140.614%2026.94C140.614%2018.26%20137.814%2011.12%20128.714%2011.12C119.544%2011.12%20116.814%2018.26%20116.814%2026.94C116.814%2035.69%20119.544%2042.83%20128.714%2042.83ZM194.624%2052H159.764V1.95H172.364V41.71H194.624V52Z'%20fill='%2385FF00'/%3e%3cpath%20d='M218.079%2053.12C203.869%2053.12%20195.399%2042.06%20195.399%2026.94C195.399%2011.89%20203.869%200.83%20219.619%200.83C233.339%200.83%20240.969%208.95%20242.159%2018.54H229.279C228.369%2015.11%20226.339%2011.12%20219.409%2011.12C211.149%2011.12%20208.279%2017.56%20208.279%2026.94C208.279%2036.39%20211.149%2042.83%20219.899%2042.83C225.709%2042.83%20229.769%2039.33%20229.909%2034.5H220.389V25.4H242.929V52H233.899L232.639%2045.63H232.499C230.119%2050.18%20225.429%2053.12%20218.079%2053.12ZM270.577%2053.12C255.457%2053.12%20249.647%2046.4%20249.647%2033.94V1.95H262.247V33.94C262.247%2040.45%20265.047%2042.83%20270.577%2042.83C276.107%2042.83%20278.907%2040.45%20278.907%2033.94V1.95H291.507V33.94C291.507%2046.4%20285.697%2053.12%20270.577%2053.12ZM324.971%2052H312.371V33.52L295.291%201.95H308.871L318.601%2023.23H318.741L328.541%201.95H341.841L324.971%2033.52V52ZM364.29%2053.12C351.2%2053.12%20341.33%2046.47%20341.33%2034.99H354.07C354.07%2040.8%20358.48%2042.97%20364.15%2042.97C368.84%2042.97%20371.22%2041.08%20371.22%2038.49C371.22%2034.22%20366.25%2033.1%20359.32%2031C350.64%2028.34%20342.87%2024.98%20342.87%2016.02C342.87%205.1%20351.41%200.83%20362.19%200.83C373.88%200.83%20383.05%206.99%20383.4%2017.14H370.66C370.1%2013.29%20367.02%2010.98%20362.19%2010.98C358.41%2010.98%20355.75%2012.24%20355.75%2015.11C355.75%2018.47%20358.55%2019.59%20364.92%2021.48C374.37%2024.28%20384.1%2026.94%20384.1%2037.3C384.1%2046.89%20376.82%2053.12%20364.29%2053.12Z'%20fill='black'/%3e%3c/svg%3e";
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "IndexBrand",
  __ssrInlineRender: true,
  setup(__props) {
    const appViewport = useState("appViewport");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "IndexBrand fullheight" }, _attrs))}><img class="${ssrRenderClass([`logo-${unref(appViewport)}`, "py-40"])}" width="100%"${ssrRenderAttr("src", _imports_0$1)}><h3 class="${ssrRenderClass(`wellcome-${unref(appViewport)}`)}"> \u041C\u044B \u043A\u0440\u0435\u0430\u0442\u0438\u0432\u043D\u043E\u0435 \u0430\u0433\u0435\u043D\u0442\u0441\u0442\u0432\u043E,<br>\u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u0443\u0435\u043C\u0441\u044F<br>\u043D\u0430 \u0432\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u043E\u0439 \u0438\u0434\u0435\u043D\u0442\u0438\u0447\u043D\u043E\u0441\u0442\u0438<br>\u0438 \u0431\u0440\u0435\u043D\u0434\u0438\u043D\u0433\u0435 </h3></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/IndexBrand.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _imports_0 = "data:image/svg+xml,%3csvg%20width='1'%20height='1'%20viewBox='0%200%201%201'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3c/svg%3e";
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "IndexProjects fullheight wrap-x wrap-full" }, _attrs))}><h2 class="pb-40">\u041F\u0440\u043E\u0435\u043A\u0442\u044B</h2><div class="project"><img width="100%"${ssrRenderAttr("src", _imports_0)}><p class="title">\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u2013 2024</p><p class="description">\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u2013 2024</p></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/IndexProjects.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "IndexWePerson",
  __ssrInlineRender: true,
  setup(__props) {
    const name = useAttrs().name;
    const position = useAttrs().position;
    const text = useAttrs().text;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "IndexWePerson" }, _attrs))}><div class="wrap"><div class="img"><img width="100%"${ssrRenderAttr("src", _imports_0)}></div><div class="info-wrap pl-32 mb-102"><div class="info mb-44"><p class="name">${ssrInterpolate(unref(name))}</p><p class="position">${ssrInterpolate(unref(position))}</p></div><p>${ssrInterpolate(unref(text))}</p></div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/IndexWePerson.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_IndexWePerson = _sfc_main$3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "IndexWe fullheight" }, _attrs))}><h2>\u041C\u044B</h2><h3>\u041D\u0430\u0445\u043E\u0434\u0438\u043C \u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u043C \u043E\u0440\u0438\u0433\u0438\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0432\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0431\u0440\u0435\u043D\u0434\u043E\u0432, \u043F\u043E\u043C\u043E\u0433\u0430\u044F \u0438\u043C \u0432\u044B\u0440\u0430\u0436\u0430\u0442\u044C \u0441\u0435\u0431\u044F \u0432 \u0446\u0438\u0444\u0440\u043E\u0432\u043E\u0439 \u0441\u0440\u0435\u0434\u0435</h3><div class="description"><p class="mt-102 pb-40">\u041C\u044B \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0438 \u0433\u0438\u0431\u043A\u0438\u0435 \u0432 \u0440\u0430\u0431\u043E\u0442\u0435, \u043F\u043E\u0434\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043C\u0441\u044F \u043F\u043E\u0434 \u0441\u0440\u043E\u043A\u0438 \u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u0434\u0430\u0447\u0438. \u041D\u0430\u0448 \u043E\u043F\u044B\u0442 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043D\u0430\u043C \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0441 \u043D\u0435\u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u043C\u0438 \u0437\u0430\u0434\u0430\u0447\u0430\u043C\u0438, \u0431\u0430\u043B\u0430\u043D\u0441\u0438\u0440\u0443\u044F \u043C\u0435\u0436\u0434\u0443 \u0441\u0440\u043E\u043A\u0430\u043C\u0438 \u0431\u0435\u0437 \u043F\u043E\u0442\u0435\u0440\u0438 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430.</p><p class="mt-102 pb-40">\u041C\u044B \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u043D\u0430 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442, \u0430 \u043E\u043D \u0432\u043E\u0437\u043C\u043E\u0436\u0435\u043D \u0442\u043E\u043B\u044C\u043A\u043E \u0432 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u043C \u043F\u043E\u0434\u0445\u043E\u0434\u0435 \u043A \u043F\u0440\u043E\u0435\u043A\u0442\u0443 \u0438 \u0440\u0430\u0431\u043E\u0447\u0435\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u0435.\u041D\u0430\u0448\u0430 \u043E\u0442\u043A\u0440\u044B\u0442\u043E\u0441\u0442\u044C \u043A \u0434\u0438\u0430\u043B\u043E\u0433\u0443 \u043D\u0435\u0440\u0435\u0434\u043A\u043E \u043F\u0440\u0435\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u0432 \u0434\u0440\u0443\u0437\u0435\u0439 \u0430\u0433\u0435\u043D\u0442\u0441\u0442\u0432\u0430 \u0438 \u0432\u044B\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442 \u0434\u043E\u043B\u0433\u043E\u0441\u0440\u043E\u0447\u043D\u044B\u0435 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F.</p></div><h2 class="pt-102 pb-44">\u041A\u043E\u043C\u0430\u043D\u0434\u0430</h2><div class="team">`);
  _push(ssrRenderComponent(_component_IndexWePerson, {
    class: "person",
    name: "\u0421\u0435\u0440\u0433\u0435\u0439 \u041F\u0435\u0442\u0440\u043E\u0432",
    position: "\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0449\u0438\u0439 \u043F\u0430\u0440\u0442\u043D\u0435\u0440",
    text: "\u041C\u044B \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0438 \u0433\u0438\u0431\u043A\u0438\u0435 \u0432 \u0440\u0430\u0431\u043E\u0442\u0435, \u043F\u043E\u0434\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043C\u0441\u044F \u043F\u043E\u0434 \u0441\u0440\u043E\u043A\u0438 \u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u0434\u0430\u0447\u0438"
  }, null, _parent));
  _push(ssrRenderComponent(_component_IndexWePerson, {
    class: "person",
    name: "\u0421\u0435\u0440\u0433\u0435\u0439 \u041F\u0435\u0442\u0440\u043E\u0432",
    position: "\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0449\u0438\u0439 \u043F\u0430\u0440\u0442\u043D\u0435\u0440",
    text: "\u041C\u044B \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0438 \u0433\u0438\u0431\u043A\u0438\u0435 \u0432 \u0440\u0430\u0431\u043E\u0442\u0435, \u043F\u043E\u0434\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043C\u0441\u044F \u043F\u043E\u0434 \u0441\u0440\u043E\u043A\u0438 \u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u0434\u0430\u0447\u0438"
  }, null, _parent));
  _push(ssrRenderComponent(_component_IndexWePerson, {
    class: "person",
    name: "\u0421\u0435\u0440\u0433\u0435\u0439 \u041F\u0435\u0442\u0440\u043E\u0432",
    position: "\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0449\u0438\u0439 \u043F\u0430\u0440\u0442\u043D\u0435\u0440",
    text: "\u041C\u044B \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0438 \u0433\u0438\u0431\u043A\u0438\u0435 \u0432 \u0440\u0430\u0431\u043E\u0442\u0435, \u043F\u043E\u0434\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043C\u0441\u044F \u043F\u043E\u0434 \u0441\u0440\u043E\u043A\u0438 \u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u0434\u0430\u0447\u0438"
  }, null, _parent));
  _push(ssrRenderComponent(_component_IndexWePerson, {
    class: "person",
    name: "\u0421\u0435\u0440\u0433\u0435\u0439 \u041F\u0435\u0442\u0440\u043E\u0432",
    position: "\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0449\u0438\u0439 \u043F\u0430\u0440\u0442\u043D\u0435\u0440",
    text: "\u041C\u044B \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0438 \u0433\u0438\u0431\u043A\u0438\u0435 \u0432 \u0440\u0430\u0431\u043E\u0442\u0435, \u043F\u043E\u0434\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043C\u0441\u044F \u043F\u043E\u0434 \u0441\u0440\u043E\u043A\u0438 \u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u0434\u0430\u0447\u0438"
  }, null, _parent));
  _push(ssrRenderComponent(_component_IndexWePerson, {
    class: "person",
    name: "\u0421\u0435\u0440\u0433\u0435\u0439 \u041F\u0435\u0442\u0440\u043E\u0432",
    position: "\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0449\u0438\u0439 \u043F\u0430\u0440\u0442\u043D\u0435\u0440",
    text: "\u041C\u044B \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0438 \u0433\u0438\u0431\u043A\u0438\u0435 \u0432 \u0440\u0430\u0431\u043E\u0442\u0435, \u043F\u043E\u0434\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043C\u0441\u044F \u043F\u043E\u0434 \u0441\u0440\u043E\u043A\u0438 \u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u0434\u0430\u0447\u0438"
  }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/IndexWe.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "IndexServices" }, _attrs))}><h2 class="pb-44">\u0423\u0441\u043B\u0443\u0433\u0438</h2><div class="items pb-44"><div class="button">\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0438 1</div> / <div class="button">\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0438 2</div> / <div class="button">\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0438 3</div> / <div class="button">\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0438 4</div> / <div class="button">\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0438 5</div> / <div class="button">\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0438 6</div> / <div class="button">\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0438 7</div> / <div class="button">\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0438 8</div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/IndexServices.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useState("appViewport");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPage = __nuxt_component_0;
      const _component_IndexBrand = _sfc_main$5;
      const _component_IndexProjects = __nuxt_component_2;
      const _component_IndexWe = __nuxt_component_3;
      const _component_IndexServices = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "page-index" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`<a class="anchor-brand" name="brand"></a>`);
      _push(ssrRenderComponent(_component_IndexBrand, { class: "mb-102 top-margin" }, null, _parent));
      _push(`<a class="anchor anchor-projects" name="projects"></a>`);
      _push(ssrRenderComponent(_component_IndexProjects, { class: "mb-102 top-margin" }, null, _parent));
      _push(`<a class="anchor anchor-we" name="we"></a>`);
      _push(ssrRenderComponent(_component_IndexWe, { class: "top-margin" }, null, _parent));
      _push(`<a class="anchor anchor-services" name="services"></a>`);
      _push(ssrRenderComponent(_component_IndexServices, { class: "mb-102 top-margin" }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Ds4JGwDK.mjs.map
