
import { useState } from 'react'

import { useFormik } from 'formik'
export default function Form() {

    let [upp1, setUp1] = useState(false)
    let [upp2, setUp2] = useState(false)
    let [upp3, setUp3] = useState(false)
    let [upp4, setUp4] = useState(false)


    function up1() {
        if (!upp1) {
            document.querySelector(".username").classList.add("up")
            setUp1(true)
        } else if (formik.values.userName == "") {
            document.querySelector(".username").classList.remove("up")
            setUp1(false)
        }
    }
    function up2() {
        if (!upp2) {
            document.querySelector(".userage").classList.add("up")
            setUp2(true)
        } else if (formik.values.userAge == "") {
            document.querySelector(".userage").classList.remove("up")
            setUp2(false)
        }
    }
    function up3() {
        if (!upp3) {
            document.querySelector(".useremail").classList.add("up")
            setUp3(true)
        } else if (formik.values.userEmail == "") {
            document.querySelector(".useremail").classList.remove("up")
            setUp3(false)
        }
    }
    function up4() {
        if (!upp4) {
            document.querySelector(".userpassword").classList.add("up")
            setUp4(true)
        } else if (formik.values.userPassword == "") {
            document.querySelector(".userpassword").classList.remove("up")
            setUp4(false)
        }
    }





    function handleSubmit(e) {
        e.preventDefault()
    }


    const formik = useFormik({
        initialValues: {
            'userName': "",
            'userAge': "",
            'userEmail': "",
            'userPassword': "",
        },
        onSubmit: handleSubmit

    })






    return (
        <>

            <div className="formSection text-[#2c3e50] pt-[160px] pb-10">
                <div className=' flex flex-col items-center  gap-4'>
                    <h2 className='uppercase text-[35px] xl:text-[45px] font-bold'>contact section</h2>
                    <div className='star flex justify-center gap-10 w-[80%] mx-auto items-center'>
                        <div className='w-[130px] h-1 bg-[#2c3e50]'></div>
                        <i className="fa-solid fa-star text-[20px]"></i>
                        <div className=' w-[130px] h-1 bg-[#2c3e50]'></div>
                    </div>
                </div>

                <div className="form flex p-7 xl:w-[60%] mx-auto justify-center pt-10 items-center">
                    <form onSubmit={formik.handleSubmit} className="w-[80%] flex flex-col gap-14">
                        <div className='relative'> <span className='text-green-600 text-[18px] relative z-[-1] top-[25px] username transition-[top] duration-500 '>UserName:</span>
                            <input
                                value={formik.values.userName}
                                onChange={formik.handleChange}
                                name='userName'
                                onKeyUp={up1}
                                type="text" className=" w-full p-3 border-b-[1px] border-b-slate-200" placeholder="userName" />
                        </div>
                        <div className='relative'> <span className='text-green-600 text-[18px] relative z-[-1] top-[25px] userage transition-[top] duration-500 '>UserAge:</span>
                            <input
                                value={formik.values.userAge}
                                onChange={formik.handleChange}
                                name='userAge'
                                onKeyUp={up2}
                                type="text" className="w-full p-3 border-b-[1px] border-b-slate-200" placeholder="userAge" />
                        </div>
                        <div className='relative'> <span className='text-green-600 text-[18px] relative z-[-1] top-[25px] useremail transition-[top] duration-500 '>UserEmail:</span> <input
                            value={formik.values.userEmail}
                            onChange={formik.handleChange}
                            name='userEmail'
                            onKeyUp={up3}
                            type="text" className="w-full p-3 border-b-[1px] border-b-slate-200" placeholder="userEmail" />
                        </div>
                        <div className='relative'> <span className='text-green-600 text-[18px] relative z-[-1] top-[25px] userpassword transition-[top] duration-500 '>UserPassword:</span>
                            <input
                                value={formik.values.userPassword}
                                onChange={formik.handleChange}
                                name='userPassword'
                                onKeyUp={up4}
                                type="text" className="w-full p-3 border-b-[1px] border-b-slate-200" placeholder="userPassword" /></div>

                        <button type='button' className='self-start btn'> Send Message</button>
                    </form>
                </div>



            </div>

        </>
    )
}
