import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_RoeR0LvE.mjs';
import 'es-module-lexer';
import { f as decodeKey } from './chunks/astro/server_Ds78it2i.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/castr/OneDrive/Desktop/CarlosBuilds/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/category","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/category\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"category","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/category.ts","pathname":"/api/category","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/posts","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/posts\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"posts","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/posts.ts","pathname":"/api/posts","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/search","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/search\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"search","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/search.ts","pathname":"/api/search","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/stats","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/stats\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"stats","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/stats.ts","pathname":"/api/stats","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.C7Ar8dEP.css"},{"type":"inline","content":"body{background-color:#050810;background-image:radial-gradient(circle at 50% 0%,rgba(0,242,254,.08) 0%,transparent 60%),linear-gradient(to right,rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,.02) 1px,transparent 1px);background-size:100% 100%,32px 32px,32px 32px}.blink-cursor[data-astro-cid-5tznm7mj]{animation:blink 1s step-start infinite}@keyframes blink{50%{opacity:0}}\n"}],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.Dei1oRzG.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/castr/OneDrive/Desktop/CarlosBuilds/src/pages/blog/[slug].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/castr/OneDrive/Desktop/CarlosBuilds/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/castr/OneDrive/Desktop/CarlosBuilds/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/castr/OneDrive/Desktop/CarlosBuilds/src/pages/api/category.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/api/category@_@ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/castr/OneDrive/Desktop/CarlosBuilds/src/pages/api/posts.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/api/posts@_@ts",{"propagation":"in-tree","containsHead":false}],["C:/Users/castr/OneDrive/Desktop/CarlosBuilds/src/pages/api/search.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/api/search@_@ts",{"propagation":"in-tree","containsHead":false}],["C:/Users/castr/OneDrive/Desktop/CarlosBuilds/src/pages/api/stats.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/api/stats@_@ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/api/category@_@ts":"pages/api/category.astro.mjs","\u0000@astro-page:src/pages/api/posts@_@ts":"pages/api/posts.astro.mjs","\u0000@astro-page:src/pages/api/search@_@ts":"pages/api/search.astro.mjs","\u0000@astro-page:src/pages/api/stats@_@ts":"pages/api/stats.astro.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"pages/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/castr/OneDrive/Desktop/CarlosBuilds/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","C:/Users/castr/OneDrive/Desktop/CarlosBuilds/src/content/blog/como-subir-tu-proyecto-a-github.md?astroContentCollectionEntry=true":"chunks/como-subir-tu-proyecto-a-github_PwTo8KmH.mjs","C:/Users/castr/OneDrive/Desktop/CarlosBuilds/src/content/blog/solución-al-error-de-cors-y-tipos-en-astro-con-decap-cms.md?astroContentCollectionEntry=true":"chunks/solución-al-error-de-cors-y-tipos-en-astro-con-decap-cms_DEL3WqEA.mjs","C:/Users/castr/OneDrive/Desktop/CarlosBuilds/src/content/landing/index.json?astroDataCollectionEntry=true":"chunks/index_KzVcyfct.mjs","C:/Users/castr/OneDrive/Desktop/CarlosBuilds/src/content/blog/como-subir-tu-proyecto-a-github.md?astroPropagatedAssets":"chunks/como-subir-tu-proyecto-a-github_CzatMRSA.mjs","C:/Users/castr/OneDrive/Desktop/CarlosBuilds/src/content/blog/solución-al-error-de-cors-y-tipos-en-astro-con-decap-cms.md?astroPropagatedAssets":"chunks/solución-al-error-de-cors-y-tipos-en-astro-con-decap-cms_CCey3Lt5.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","C:/Users/castr/OneDrive/Desktop/CarlosBuilds/src/content/blog/como-subir-tu-proyecto-a-github.md":"chunks/como-subir-tu-proyecto-a-github_CfFj3182.mjs","C:/Users/castr/OneDrive/Desktop/CarlosBuilds/src/content/blog/solución-al-error-de-cors-y-tipos-en-astro-con-decap-cms.md":"chunks/solución-al-error-de-cors-y-tipos-en-astro-con-decap-cms_Dg19eFW2.mjs","\u0000@astrojs-manifest":"manifest_P7WAfDZL.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/_slug_.C7Ar8dEP.css","/_astro/index.Dei1oRzG.css","/admin/config.yml","/admin/index.html","/imagenes/bash.png","/imagenes/c.jpg","/imagenes/css.png","/imagenes/html5.png","/imagenes/java.jpg","/imagenes/logo.png","/imagenes/python.png","/imagenes/yo.jpg"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"oGLuk9qPKLfA4qOgulMRGe21MQ5iEML9x/KxZiect1M=","experimentalEnvGetSecretEnabled":false});

export { manifest };
