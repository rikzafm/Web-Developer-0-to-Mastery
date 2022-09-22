import React from "react";

const Card = ({name, email, id}) => {
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw3 shadow-5"
        style={{
            width : 'auto',
            maxWidth : '230px',
            // height : 'auto',
            height: '350px',
            overflow: 'hidden'
        }}>
            <img alt="robot" src={`https://robohash.org/${id}?size=200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;