import { useState, useRef, useEffect } from "react"
const useTypeCode = () => {
    const selectInput = useRef(null)
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
        } 
        else {
            event.target.value=inputValue[0]
            if(index!=6){
                selectInput.current.children[index].focus()
            }
        }
    }
return {selectInput, codeState, setCodeState, handleChange}

}
 export default useTypeCode