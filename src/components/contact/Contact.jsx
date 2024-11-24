
export default function Contact() {
    return (
        <>
            <div className=" bg-[#2c3e50]">
                <div className="contact  p-28 grid xl:grid-cols-3 gap-12 md:grid-cols-3 grid-cols-1 text-[18px] text-white">

                    <div className="flex flex-col gap-3 text-center">
                        <h3 className="text-[30px] font-semibold">LOCATION</h3>
                        <p>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>
                    <div className="flex flex-col gap-3 text-center">
                        <h3 className="text-[30px] font-semibold">AROUND THE WEB</h3>
                        <div className="flex gap-4 justify-center items-center">
                            <i className="fa-brands fa-facebook w-[40px] h-[40px] border border-white flex justify-center items-center rounded-full"></i>
                            <i className="fa-brands fa-twitter w-[40px] h-[40px] border border-white flex justify-center items-center rounded-full"></i>
                            <i className="fa-brands fa-linkedin-in w-[40px] h-[40px] border border-white flex justify-center items-center rounded-full"></i>
                            <i className="fa-solid fa-globe w-[40px] h-[40px] border border-white flex justify-center items-center rounded-full"></i>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 text-center">
                        <h3 className="text-[30px] font-semibold">ABOUT FREELANCER</h3>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>

                    </div>
                </div>
            </div>

        </>
    )
}
