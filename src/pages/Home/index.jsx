import { NavLink, Outlet, useLocation, useNavigate, useSearchParams } from "react-router-dom";

export default function Home(){
  // const navigate = useNavigate()
  // const [searchparams] = useSearchParams()
  // console.log(useLocation(),searchparams.get('name'))
    return <>
    <h2>Home</h2>
    {/* <NavLink to='/home/welcome'>欢迎页</NavLink>
    <button onClick={()=>navigate('/home/recommend')}>推荐</button>
    <div style={{borderTop:'1px solid black'}}></div>
    <Outlet/> */}
    </>
}