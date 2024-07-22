import { createContext, useState } from "react";
export const MyReactRouterContext = createContext();

export const MyRouterProvider = ({ children }) => {
  const [type, _setRouterType] = useState("");
  const [route, _setRoute] = useState("/");
  const [routes, _setRoutes] = useState({});
  return (
    <MyReactRouterContext.Provider
      value={{
        type,
        _setRouterType: (t)=>{
          console.log(t)
          _setRouterType(t)
        },
        route,
        _setRoute,
        routes,
        _setRoutes,
      }}
    >
      {children}
    </MyReactRouterContext.Provider>
  );
};
