
const Gallery = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="w-full mb-20">
                        <h1 className="sm:text-3xl font-semibold text-center mx-auto text-4xl title-font text-gray-800 lg:w-1/3 lg:mb-0 mb-4">Gallery of Prime Care Diagnostic Center</h1>
                    </div>
                    <div className="flex flex-wrap md:-m-2 -m-1">
                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://i.ibb.co/FHn2JTv/pap.jpg" />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://i.ibb.co/gPSq7vb/pexels-anna-shvets-3845806.jpg" />
                            </div>
                            <div className="md:p-2 p-1 w-full">
                                <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://i.ibb.co/KhzXgG6/cancer.jpg" />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-full">
                                <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://i.ibb.co/p4fwKnS/healthcare.jpg" />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://i.ibb.co/56c0qdR/pexels-andrea-piacquadio-3881147.jpg" />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://i.ibb.co/2YHy0LY/pexels-los-muertos-crew-8460228.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;