import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";

export default function SharedLayout() {
    return (
        <div>
            <AppBar />
            <Outlet/>
        </div>
    )
}