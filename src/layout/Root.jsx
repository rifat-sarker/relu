import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="bg-[#F5F5F5] p-4">
            <Outlet/>
        </div>
    );
};

export default Root;