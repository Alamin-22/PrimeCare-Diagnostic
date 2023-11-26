import PropTypes from 'prop-types';

const TestCard = ({ test }) => {
    const { image, shortDescription, title, slot, availableDates } = test;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure>
                    <img src={image} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-lg text-gray-500 font-medium'>{shortDescription}</p>
                    <h2 className=" text-lg font-medium"> Available Slot: <span className='text-xl text-[rgb(55,113,122)]'>{slot.available}</span></h2>
                    <h2 className=" text-lg font-medium"> Date:   <span className='text-xl text-[rgb(55,113,122)]'>{availableDates}</span></h2>
                    <div className="card-actions w-full">
                        <button className="btn w-full bg-[#219ebc] hover:bg-[#3c738f] text-white">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
TestCard.propTypes = {
    test: PropTypes.object.isRequired,
};

export default TestCard;