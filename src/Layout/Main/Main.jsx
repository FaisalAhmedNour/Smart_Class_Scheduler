import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Main = () => {
    return (
        <div className="h-[100vh] flex flex-col w-full justify-start">
            <Navbar />
            <div className="flex-grow w-full flex flex-col justify-start border">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Main;