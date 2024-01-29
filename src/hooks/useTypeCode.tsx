import { count } from "console"
import { useState, useRef, useEffect } from "react"
const useTypeCode = () => {
    const selectInput = useRef(null)
    const [amountOfNonEmpty, setAmountOfNonEmpty] =useState<number>(0)
    const [codeState, setCodeState] =useState({
        firstForm: "",
        secondForm: "", 
        thirdForm: "", 
        fourthForm: "",
        fifthForm: "",
        sixthForm: ""
    })
    useEffect(()=> {
selectInput.current.children[0].focus()
    }, [selectInput])
   // let amountOfNonEmpty=0
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputName = event.target.name; 
        const inputValue = event.target.value;
        let index=0;
        for (const [fieldName, fieldValue] of Object.entries(codeState)) {
            index++
            if(fieldName==inputName) {
                console.log("Name" +inputName)
                break;
            }
          }

        if(event.target.value.length<1){
            setCodeState(prevState => ({
                ...prevState,
                [inputName]: inputValue
            }));
            setAmountOfNonEmpty(prev=>prev-1)
         //   amountOfNonEmpty--;
        } 
        else {
            setAmountOfNonEmpty(prev=>prev+1)
            event.target.value=inputValue[0]
            if(index!=6){
                selectInput.current.children[index].focus()
            }
           // amountOfNonEmpty++;
        }
        console.log("count" +amountOfNonEmpty)
    }
return {selectInput, codeState, setCodeState, handleChange}

}
 export default useTypeCode