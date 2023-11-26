import { useQuery } from "@tanstack/react-query";
import AxiosPublic from "../../Hooks/AxiosPublic";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const Recommendation = () => {


    const axiosPublic = AxiosPublic();

    const { data: recommendations = [] } = useQuery({
        queryKey: ["recommendations"],
        queryFn: async () => {
            const res = await axiosPublic.get("/recommendations");
            return res.data;
        }
    });
    console.log(recommendations);



    return (
        <div>
            <div>
                <h1 className="text-4xl text-center mt-5 font-serif font-medium">Personalized recommendation</h1>
                <p className="max-w-3xl text-2xl mb-8 mx-auto text-center font-medium text-gray-500">by healthcare
                    professionals.
                </p>
            </div>
            <div>
                <Swiper slidesPerView={'auto'}
                    spaceBetween={30} pagination={{ clickable: true, }} modules={[Pagination]} className="mySwiper">

                    <div>
                        {
                            recommendations.map(card => <SwiperSlide key={card._id}>
                                <div className="hero h-[60vh] rounded-lg" style={{ backgroundImage: `url(${card?.image})` }}>

                                    <div className="inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                                    <div className="hero-content text-center text-neutral-content">
                                        <div className="max-w-md">
                                            <h1 className="mb-5 text-5xl font-bold">{card?.title}</h1>
                                            <p className="mb-5">{card?.content}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>)
                        }
                    </div>

                </Swiper>
            </div>
        </div>
    );
};

export default Recommendation;

