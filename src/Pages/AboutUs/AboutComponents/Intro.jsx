
const Intro = () => {
    return (
        <div>

            <section>

                <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">

                    <div className="grid gap-12 sm:gap-20 lg:grid-cols-2">

                        <div className="flex flex-col items-start gap-2">

                            <p className="text-sm text-[#808080] sm:text-xl">Uncover the</p>

                            <h1 className="mb-6 text-4xl font-bold md:text-6xl lg:mb-8">PrimeCare Diagnostics Center</h1>
                            <p className="text-sm text-[#808080] sm:text-xl">
                            At PrimeCare Diagnostics Center, we lead the way in healthcare diagnostics, combining precision with compassion. Our advanced facilities and experienced team are dedicated to providing swift and accurate results. Discover the PrimeCare Diagnostics Center experience, where expertise meets empathy for your journey to better health.
                            </p>

                            <div className="mb-8 mt-8 h-px w-full bg-black"></div>
                            <div className="mb-6 flex flex-col gap-2 text-sm text-[#808080] sm:text-base lg:mb-8">
                                <p>
                                    <strong>2022: </strong>Site of the year in Awards.com
                                </p>
                                <p>
                                    <strong>2023: </strong>Site of the year in Awards.com
                                </p>
                            </div>

                            <a href="#" className="mb-6 flex items-center gap-2.5 text-center text-sm font-bold uppercase md:mb-10 lg:mb-12">
                                <p>All Achievements</p>
                                <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b1465d46adaf3f26099edf_arrow.svg" alt="" className="inline-block" />
                            </a>

                            <div className="flex flex-col gap-4 font-semibold sm:flex-row">
                                <a href="mailto:web@primecaredia.com" className="flex items-center gap-4 rounded-md bg-[#219ebc] hover:bg-[#2a616e] px-6 py-3 text-white">
                                    <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b147043fe6ab404e65635e_Envelope.svg" alt="" className="inline-block" />
                                    <p>Email Me</p>
                                </a>
                                <a href="#" className="flex gap-4 rounded-md border border-solid border-black px-6 py-3">
                                    <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b14704c8616ad7ba080fe0_Note.svg" alt="" className="inline-block" />
                                    <p>Resume</p>
                                </a>
                            </div>
                        </div>

                        <div className="min-h-[530px] overflow-hidden rounded-md">
                            <img src="https://i.ibb.co/c2C3jGq/pexels-rfstudio-3825586.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Intro;