import React from "react";

function Entry(prop) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label={prop.name}>
          {prop.symbol}
        </span>
        <span>{prop.name}</span>
      </dt>
      <dd>{prop.meaning}</dd>
    </div>
  );
}

export default Entry;
