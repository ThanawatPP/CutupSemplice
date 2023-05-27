import Image from "next/image"
import logo from "../public/img/logoSemplice.svg"
import iconFoot from "../public/icon/icon-foot.svg"

export default function Navigation() {
    return (
        <div className="fixed top-6 w-full right-0">
            <div className="bg-white h-[70px] rounded-lg mx-14">
                <div className="h-full grid items-center">
                    <div className="flex justify-between px-5 place-items-center">
                        <Image src={logo} width={150} height={35} />
                        <div className="flex justify-center gap-10 place-items-center text-xs text-black">
                            <div>
                                SIMPLICE V6
                                <span className="bg-yellow-400 p-0.5 relative bottom-3 rounded-lg text-xs">NEW</span>
                            </div>
                            <div>
                                SHOWCASE
                            </div>
                            <div>
                                FEATURES
                            </div>
                            <div>
                                RESOURCES
                                <link
                                    rel="icon"
                                    href={iconFoot}
                                    type="image/<generated>"
                                    sizes="<generated>"
                                    className="text-black"
                                />
                            </div>
                        </div>
                        <div className="bg-red-400 w-[160px] h-[40px] grid items-center rounded-lg text-center">
                            GET SIMPLICE
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}