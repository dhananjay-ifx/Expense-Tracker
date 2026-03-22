import React from 'react'
import {UserContext} from "../../context/UserContext";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";

const DashboardLayout = ({ children, activeMenu }) => {
    const { user } = React.useContext(UserContext);

    return (
        <div className="">
            <Navbar activeMenu={activeMenu} />

            <div className="flex">
                <div className="max-[1080px]:hidden">
                    <SideMenu activeMenu={activeMenu} />
                </div>

                <div className="grow mx-5">
                    {!user && (
                        <div className="mb-4 p-4 rounded border border-slate-200 bg-slate-50 text-slate-600">
                            You are not logged in. Dashboard is in read-only mode.
                        </div>
                    )}
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DashboardLayout;