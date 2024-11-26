import  PropTypes from 'prop-types';

const Service = ({ img, buttonText, firstText, lastText }) => {
    return (
        <div className="bg-service-color rounded-2xl border-btn-color border-2 flex flex-col items-center justify-center w-[90%]  self-center py-10 lg:py-20 gap-5">
            <img  src={img} alt="Service Image" />
            <p  className=" font-extrabold text-2xl lg:text-3xl text-black font-sans">{firstText}</p>
            <p className=" font-bold text-xl lg:text-2xl text-white font-sans text-center">{lastText}</p>
            <button className="font-bold bg-btn-color rounded-2xl hover:bg-background px-10 py-4 hover:px-14 hover:py-5 hover:shadow-lg transition-all duration-250">{buttonText}</button>
        </div>
    );
};
Service.propTypes = {
    img: PropTypes.any,
    buttonText: PropTypes.string.isRequired,
    firstText: PropTypes.string.isRequired,
    lastText: PropTypes.string.isRequired,
    altText: PropTypes.string,
};

export default Service;