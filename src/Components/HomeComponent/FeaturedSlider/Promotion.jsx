import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "../CSS/Promotion.css";

const Promotion = () => {
    return (
        <div>
            <Swiper centeredSlides={true} autoplay={{ delay: 4500, disableOnInteraction: false, }}
                pagination={{ clickable: true, }} modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className='cursor-grab'>

                    <div className="card relative w-96 bg-base-100 shadow-xl rounded-lg">
                        <div>
                            <figure className='relative'>
                                <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                                <div className="absolute right-0 top-0 px-5 py-0  rounded-full text-xl bg-[#f53f3f]  text-white">Limited Time Offer</div>
                                <img className='h-[80vh] rounded-lg' src="https://i.ibb.co/kx1pQ1H/chweckup.jpg" alt="Shoes" />
                            </figure>
                        </div>
                        <div className="card-body absolute bottom-0">
                            <h2 className="card-title text-white" style={{
                                backgroundImage: "linear-gradient(42deg, rgba(8,110,126,0.9556197478991597) 0%, rgba(0,212,255,1) 1%)",
                                WebkitBackgroundClip: "text",
                                color: "transparent"
                            }}> <span className='font-bold'>Wellness Checkup Packages</span></h2>
                            <p className='text-justify text-slate-300'>Prioritize your health with our comprehensive wellness checkup packages. Take a proactive approach to your well-being and enjoy discounted rates on bundled services.</p>
                            <p className='text-left text-white'>Dates: <span className='text-fuchsia-400 font-medium'>2023-12-01 to  2023-12-05</span></p>

                            <p className='text-left text-white'>Discount Price : <span className='font-semibold text-red-500'> <s className='text-lg text-[#4ad8fc]'>$150</s>  <span className='text-xl'>$130</span></span></p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' cursor-grab'>

                    <div className="card relative w-96 bg-base-100 shadow-xl rounded-lg">
                        <div>
                            <figure className='relative'>
                                <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                                <div className="absolute right-0 top-0 px-5 py-0  rounded-full text-xl bg-[#f53f3f]  text-white">Limited Appointments</div>
                                <img className='h-[80vh] rounded-lg' src="https://i.ibb.co/wr3q8Ny/cardiovuscular.jpg" alt="Shoes" />
                            </figure>
                        </div>
                        <div className="card-body absolute bottom-0">
                            <h2 className="card-title text-white" style={{
                                backgroundImage: "linear-gradient(42deg, rgba(8,110,126,0.9556197478991597) 0%, rgba(0,212,255,1) 1%)",
                                WebkitBackgroundClip: "text",
                                color: "transparent"
                            }}> <span className='font-bold'>Cardiovascular Health Check</span></h2>
                            <p className='text-justify text-slate-300'>Prioritize your heart health with our comprehensive Cardiovascular Health Check. Includes tests for cholesterol, blood pressure, and personalized consultations.</p>
                            <p className='text-left text-white'>Dates: <span className='text-fuchsia-400 font-medium'>2023-12-14 to  2023-12-17</span></p>

                            <p className='text-left text-white'>Discount Price : <span className='font-semibold text-red-500'> <s className='text-lg text-[#4ad8fc]'>$180</s>  <span className='text-xl'>$140</span></span></p>
                        </div>
                    </div>
                </SwiperSlide>



            </Swiper>
        </div>
    );
};

export default Promotion;