import { NavLink, Navigate, useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Welcome from "./pages/Welcome";
import Recommend from "./pages/Recommend";
import routes from "./router";
import { Link, Routes,Route, push } from "./components/MyReactRouter";

// function App() {
//   return (
//     <>
//       <header
//         style={{
//           backgroundColor: "lightgray",
//           height: "30px",
//           color: " white",
//         }}
//       >
//         DEMO Router
//         <Link to="/home">首页</Link>
//         <Link to="/about">关于</Link>
//         <NavLink
//           to="/home"
//           style={({ isActive }) => ({
//             color: isActive ? "lightgoldenrodyellow" : "black",
//           })}
//         >
//           首页
//         </NavLink>
//         <NavLink to="/about">关于</NavLink>
//       </header>
//       {useRoutes(routes)}
//     </>
//   );
// }

function App() {
  return (
    <>
      <header
        style={{
          backgroundColor: "lightgray",
          height: "30px",
          color: " white",
        }}
      >
        DEMO Router
        <Link to="/home">首页</Link>
        <Link to="/about">关于</Link>
        <button onClick={()=>{
          push('/about')
        }}>关于</button>
      </header>
      <Routes>
        {/* <Navigate to='/home'/> */}
        <Route element={<Home />} path="/home" />
        <Route element={<About />} path="/about" />
      </Routes>
    </>
  );
}

export default App;
