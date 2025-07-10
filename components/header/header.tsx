import HeaderInfo from "./header-info";
import Navbar from "./navbar";

export default function Header(){
    return (
        <div className="fixed top-0">
            <HeaderInfo />
            <Navbar />
        </div>
    )
}