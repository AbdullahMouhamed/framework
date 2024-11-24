export default function About() {
    return (
        <>

            <div className='about bg-[#1abc9c] gap-6 h-[97vh] flex flex-col text-white justify-center items-center'>

                <div className='aboutContent flex flex-col items-center gap-4'>
                    <h2 className='uppercase text-[35px] xl:text-[45px] font-bold'>about component</h2>
                    <div className='star flex justify-center gap-10 w-[80%] mx-auto items-center'>
                        <div className='w-[150px] h-1 bg-white'></div>
                        <i className="fa-solid fa-star text-[20px]"></i>
                        <div className=' w-[150px] h-1 bg-white'></div>
                    </div>
                    <div className=" w-[65%] gap-7 text-[17px] flex xl:flex-row flex-col md:flex-row">
                        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>

                    </div>
                </div>
            </div>

        </>
    )
}