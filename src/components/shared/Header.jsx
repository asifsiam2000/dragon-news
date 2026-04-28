
import { format } from "date-fns";
import logo from "@/assets/logo.png"
import Image from "next/image";

const Header = () => {
    return (
        <div className="text-center py-8 space-y-3">
            <Image src={logo} width={300} height={200} alt="logo" className="mx-auto"></Image>
            <p className="text-[#706F6F]">Journalism Without Fear or Favour</p>
            <p className="font-bold"> {format(new Date(), "EEEE, MMM dd , yyyy")}</p>
        </div>
    );
};

export default Header;