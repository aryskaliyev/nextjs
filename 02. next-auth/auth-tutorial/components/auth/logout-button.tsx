"use client";

import { logout } from "@/actions/logout";

const LogoutButton = async () => {
    return ( 
        <form action={logout}>
            <button type="submit">Signout</button>
        </form>
     );
}
 
export default LogoutButton;