import React from "react";

function Card(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emogi}
        </span>
        <span>{props.emoginame}</span>
      </dt>
      <dd>{props.emogidis}</dd>
    </div>
    // <div>
    //   <div className="top_1">
    //     <h2 className="emo_1">{props.emogi}</h2>
    //   </div>
    //   <div className="top_2">
    //     <p className="emo_2">{props.emoginame}</p>
    //   </div>
    //   <div className="top_3">
    //   <p className="emo_3">{props.emogidis}</p>
    //   </div>
    // </div>
  );
}

export default Card;
