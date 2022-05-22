import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppSelector } from "../store/configureStore";

export default function RequireAuth({ children, roles }: { children: JSX.Element; roles?: string[] }) {
    let location = useLocation();
    const {user} = useAppSelector(state => state.account);
  
    if (localStorage.getItem("user") === null) {   
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      return <Navigate to="/login" state={{ from: location }} replace />;  
    }

    if (roles && !roles?.some(r => user?.roles?.includes(r))) {
      toast.error('Not authorised to access this area');
      return <Navigate to="/catalog" />; 
    }

    return children;
}