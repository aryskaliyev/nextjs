"use client";

import { logout } from "@/actions/logout";

const LogoutButton = () => {
    const onClick = async () => {
        await logout();
    }
    return (
            <button onClick={onClick} type="submit">Signout</button>
     );
}
 
export default LogoutButton;