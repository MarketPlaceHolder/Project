import "./product-card.css"
import React, { useState } from "react";

export default ({src}) => {
    const [className,setClassName] =  useState();
    const image = new Image();
    image.onload = () => {
        if (image.height < image.width ) {
            setClassName("landscape")
        } else {
            setClassName("portrait")
        } 
    }
    image.src = src;
    if (!className) {
        return <div>Loading...</div>
    }
    return <div className={className}>
    <img
      src={image.src}
      alt = ""
    />
    </div> 
}