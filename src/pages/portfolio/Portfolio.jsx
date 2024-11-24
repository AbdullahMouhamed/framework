import { useState } from "react"
import img1 from "../../assets/imgs/poert1.png"
import img2 from "../../assets/imgs/port2.png"
import img3 from "../../assets/imgs/port3.png"
import "./portfolio.css"



export default function Portfolio() {
    let [display, setDesplay] = useState(true)


    function show1() {
        document.querySelector('.layer1').classList.remove("photoOff")
        setDesplay(false)
    }

    function show2() {
        document.querySelector('.layer2').classList.remove("photoOff")
        setDesplay(false)
    }
    function show3() {
        document.querySelector('.layer3').classList.remove("photoOff")
        setDesplay(false)
    }
    function show4() {
        document.querySelector('.layer4').classList.remove("photoOff")
        setDesplay(false)
    }
    function show5() {
        document.querySelector('.layer5').classList.remove("photoOff")
        setDesplay(false)
    }
    function show6() {
        document.querySelector('.layer6').classList.remove("photoOff")
        setDesplay(false)
    }


    const stopChild = (e) => {
        e.stopPropagation()

    }



    return (
        <>

            <div className="display layer1 flex justify-center items-center photoOff" onClick={() => {
                document.querySelector('.layer1').classList.add("photoOff")
                setDesplay(true)

            }} >
                <div className="w-[650px]"><img className="displayPic w-[100%] z-50" src={img1} alt="" onClick={(e) => stopChild(e)} /></div>
            </div>
            <div className="display layer2 flex justify-center items-center photoOff " onClick={() => {
                document.querySelector('.layer2').classList.add("photoOff")
                setDesplay(true)

            }}  >
                <div className="w-[650px]"><img className="displayPic w-[100%]" src={img2} alt="" onClick={(e) => stopChild(e)} /></div>
            </div>
            <div className="display layer3 flex justify-center items-center photoOff" onClick={() => {
                document.querySelector('.layer3').classList.add("photoOff")
                setDesplay(true)

            }} >
                <div className="w-[650px]"><img className="displayPic w-[100%] z-50" src={img3} alt="" onClick={(e) => stopChild(e)} /></div>
            </div>
            <div className="display layer4 flex justify-center items-center photoOff " onClick={() => {
                document.querySelector('.layer4').classList.add("photoOff")
                setDesplay(true)

            }}  >
                <div className="w-[650px]"><img className="displayPic w-[100%]" src={img1} alt="" onClick={(e) => stopChild(e)} /></div>
            </div>
            <div className="display layer5 flex justify-center items-center photoOff" onClick={() => {
                document.querySelector('.layer5').classList.add("photoOff")
                setDesplay(true)

            }} >
                <div className="w-[650px]"><img className="displayPic w-[100%] z-50" src={img2} alt="" onClick={(e) => stopChild(e)} /></div>
            </div>
            <div className="display layer6 flex justify-center items-center photoOff " onClick={() => {
                document.querySelector('.layer6').classList.add("photoOff")
                setDesplay(true)

            }}  >
                <div className="w-[650px]"><img className="displayPic w-[100%]" src={img3} alt="" onClick={(e) => stopChild(e)} /></div>
            </div>
            <div className="portfolio text-[#2c3e50] pt-[160px] pb-10">

                <div className=' flex flex-col items-center  gap-4'>
                    <h2 className='uppercase text-[35px] xl:text-[45px] font-bold'>portfolio component</h2>
                    <div className='star flex justify-center gap-10 w-[80%] mx-auto items-center'>
                        <div className='w-[130px] h-1 bg-[#2c3e50]'></div>
                        <i className="fa-solid fa-star text-[20px]"></i>
                        <div className=' w-[130px] h-1 bg-[#2c3e50]'></div>
                    </div>
                </div>


                <div className="portfolioCards gap-14 w-[90%] md:w-[75%] xl:w-[75%] mx-auto pt-7 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">

                    <div className="overflow-hidden img1  flex justify-center items-center rounded-md relative " onClick={show1}>
                        <div className="layer flex justify-center items-center"></div>
                        <i className="fa-solid text-white  fa-plus font-bold text-[100px] absolute opacity-0 transition-opacity duration-500 " ></i>
                        <img src={img1} alt="" className="w-[100%]" />
                    </div>
                    <div className="overflow-hidden img2 flex justify-center items-center rounded-md relative " onClick={show2}>
                        <div className="layer flex justify-center items-center"></div>
                        <i className="fa-solid text-white  fa-plus font-bold text-[100px] absolute opacity-0 transition-opacity duration-500 "></i>
                        <img src={img2} alt="" className="w-[100%]" />
                    </div>
                    <div className="overflow-hidden img3  flex justify-center items-center rounded-md relative " onClick={show3}>
                        <div className="layer flex justify-center items-center"></div>
                        <i className="fa-solid text-white  fa-plus font-bold text-[100px] absolute opacity-0 transition-opacity duration-500 "></i>
                        <img src={img3} alt="" className="w-[100%]" />
                    </div>
                    <div className="overflow-hidden img4  flex justify-center items-center rounded-md relative " onClick={show4}>
                        <div className="layer flex justify-center items-center"></div>
                        <i className="fa-solid text-white  fa-plus font-bold text-[100px] absolute opacity-0 transition-opacity duration-500 "></i>
                        <img src={img1} alt="" className="w-[100%]" />
                    </div>
                    <div className="overflow-hidden  img5 flex justify-center items-center rounded-md relative " onClick={show5}>
                        <div className="layer flex justify-center items-center"></div>
                        <i className="fa-solid text-white  fa-plus font-bold text-[100px] absolute opacity-0 transition-opacity duration-500 "></i>
                        <img src={img2} alt="" className="w-[100%]" />
                    </div>
                    <div className="overflow-hidden img6 flex justify-center items-center rounded-md relative " onClick={show6}>
                        <div className="layer flex justify-center items-center"></div>
                        <i className="fa-solid text-white  fa-plus font-bold text-[100px] absolute opacity-0 transition-opacity duration-500 "></i>
                        <img src={img3} alt="" className="w-[100%]" />
                    </div>


                </div>
            </div>


        </>
    )
}
