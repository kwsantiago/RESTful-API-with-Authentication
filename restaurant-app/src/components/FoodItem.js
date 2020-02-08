import React from 'react';

const FoodItem = (props) => {
    return (
        <div className="item">
         <img className="ui small rounded image" src={props.picture} alt="lasagna"/>
         <div className="content">
         <h1><a className="header">{props.name}</a></h1>
         <div className="description"> <h3> $ {props.price} </h3> .           </div>
         </div>
         </div>
   );
};

export default FoodItem;

