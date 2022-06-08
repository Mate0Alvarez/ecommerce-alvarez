import React from "react";
import ItemListContainer from "./../Items/ItemListContainer";
import OpenBannerDesktop from "./OpenBannerDesktop";

const MainLanding = ({onAdd, onRemove}) =>{
  return (
    <>  
        <OpenBannerDesktop />
        <ItemListContainer onAdd={onAdd} onRemove={onRemove}/>
    </>
  )
}

export default MainLanding