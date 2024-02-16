import { YourOffers, YourOffersElement, YourOffersElementInformation, YourOffersElementTrash, YourOffersElementTrashWrapper, YourOffersList, YourOffersTitle } from "./yourOffersListComponentStyles";
import Trash from "../../assets/delete.png"
import ModalWindow from "../modal/modal";
import { useState } from "react";
const YourOffersListComponent = () => {
    const elems = ["dvkdv", "kcd", "l,ld,cs"]
    const [isOpen, setIsOpen] =useState(false)
    return (  <>
      <YourOffers>
        <YourOffersTitle>
            Your offers
        </YourOffersTitle>
        <ModalWindow  open={isOpen} 
        onClose={() => setIsOpen(false)}>
      You have successfully removed the offer!
                    </ModalWindow>
        <YourOffersList>
            {elems.map((item, index)=> (
                <YourOffersElement>
               <YourOffersElementInformation>
                 {index+1}.   {item} 
            </YourOffersElementInformation>
                <YourOffersElementTrashWrapper  onClick={()=>console.log(1)}>
                <YourOffersElementTrash src={Trash}  alt="trash" onClick={()=> setIsOpen(true)} />
                </YourOffersElementTrashWrapper>
                </YourOffersElement>
            ))}
        </YourOffersList>
      </YourOffers>
    </>
    );
}
 
export default YourOffersListComponent;