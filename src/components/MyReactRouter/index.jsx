import { useContext, useEffect } from "react";
import { MyReactRouterContext, MyRouterProvider } from "./Context";
import { MY_REACT_ROUTER_TYPE } from "./typings";

let routerType = ''

function pushFunc(type, to, state = {}) {
  if (type === MY_REACT_ROUTER_TYPE.HASH_ROUTER) {
    const searchStr = document.location.hash?.split("?")[1];
    // eslint-disable-next-line no-restricted-globals
    location.hash = `${to}${searchStr ? `?${searchStr}` : ""}`;
  } else if (type === MY_REACT_ROUTER_TYPE.BROWSER_ROUTER) {
    const searchStr = document.location.href?.split("?")[1];
    // eslint-disable-next-line no-restricted-globals
    history.pushState(state, "", `${to}${searchStr ? `?${searchStr}` : ""}`);
    window.dispatchEvent(new PopStateEvent("popstate"));
  }
}

function HashRouterInner({ children }) {
  const { _setRouterType, _setRoute } = useContext(MyReactRouterContext);
  useEffect(() => {
    _setRouterType(MY_REACT_ROUTER_TYPE.HASH_ROUTER);
    routerType = MY_REACT_ROUTER_TYPE.HASH_ROUTER
    // 注册事件
    window.addEventListener("hashchange", (hash) => {
      // matchRoute
      const [destpath, search] = document.location?.href
        ?.replace(document.location?.origin, "")
        ?.replace("/#/", "/")
        ?.split("?");
      _setRoute(destpath);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <>{children}</>;
}

function BrowserRouterInner({ children }) {
  const { _setRouterType, _setRoute,} = useContext(MyReactRouterContext);
  useEffect(() => {
    _setRouterType(MY_REACT_ROUTER_TYPE.BROWSER_ROUTER);
    routerType = MY_REACT_ROUTER_TYPE.BROWSER_ROUTER
    window.addEventListener("popstate", (state) => {
      const [destpath, search] = document.location?.href
      ?.replace(document.location?.origin, "")
      ?.replace("/#/", "/")
      ?.split("?");
    _setRoute(destpath);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
}

export function Link({ to = "", children }) {
  const infos = useContext(MyReactRouterContext);
  return (
    <span
      style={{ cursor: "pointer" }}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        if (to) {
          pushFunc(infos.type, to);
        }
      }}
    >
      {children}
    </span>
  );
}

export function Route({ path, element }) {
  return element;
}

export function Routes({ children }) {
  const { _setRoutes, routes, route } = useContext(MyReactRouterContext);
  useEffect(() => {
    _setRoutes(
      children.reduce(
        (prev, route) => ({
          ...prev,
          [route.props.path]: route.props.element,
        }),
        {}
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return routes[route] || <></>;
}

export function BrowserRouter({ children }) {
  return (
    <MyRouterProvider>
      <BrowserRouterInner>{children}</BrowserRouterInner>
    </MyRouterProvider>
  );
}

export function HashRouter({ children }) {
  return (
    <MyRouterProvider>
      <HashRouterInner>{children}</HashRouterInner>
    </MyRouterProvider>
  );
}

export function push(url,state){
  pushFunc(routerType,url,state)
}