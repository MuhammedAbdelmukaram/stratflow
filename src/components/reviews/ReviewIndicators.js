import react from 'react';

const ReviewIndicators = ({ current, total }) => {
    return (
        <div className="review-indicators">
            {Array.from({ length: total }).map((_, index) => (
                <div
                    key={index}
                    className={`indicator ${index === current ? "active" : ""}`}
                ></div>
            ))}
        </div>
    );
};

export default ReviewIndicators;
