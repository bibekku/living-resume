import React from 'react';

const BulletListItem = ({ boldLeft, regularRight, italicLeft, italicRight }) => {
  return (
    <div className="bullet-list-item">
        <div className="bullet"></div>
        <div className="text-container">
        <div className="line">
            <span className="bold-left">{boldLeft}</span>
            <span className="regular-right">{regularRight}</span>
        </div>
        <div className="line">
            <span className="italic-left">{italicLeft}</span>
            <span className="italic-right">{italicRight}</span>
        </div>
      </div>
    </div>
  );
};

export default BulletListItem;