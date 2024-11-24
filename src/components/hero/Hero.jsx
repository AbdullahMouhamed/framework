
import img from "../../assets/imgs/avataaars.svg"
export default function Hero() {
    return (
        <>

            <div className='hero bg-[#1abc9c] text-center gap-6 h-[97vh] flex flex-col text-white justify-center items-center'>
                <div className='w-[250px]'>
                    <img src={img} alt="" className='w[100%]' />
                </div>
                <div className='heroContent flex flex-col items-center gap-6'>
                    <h2 className='uppercase text-[40px] font-bold'>start Framework</h2>
                    <div className='star flex justify-around w-[70%] mx-auto items-center'>
                        <div className='w-[100px] h-1 bg-white'></div>
                        <i className="fa-solid fa-star"></i>
                        <div className='w-[100px] h-1 bg-white'></div>
                    </div>
                    <div className=''>
                        Graphic Artist - Web Designer - Illustrator
                    </div>
                </div>
            </div>

        </>
    )
}
