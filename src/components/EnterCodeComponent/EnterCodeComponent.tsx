import useTypeCode from "../../hooks/useTypeCode";
import { TypeCodeBaccground, TypeCodeForm, TypeCodeInput, TypeCodeInputLine, TypeCodeSubmit, TypeCodeThatWasSendedOnYourEmail } from "./EnterCodeComponentStyles";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { finalRegisterMessageSelector } from "../../store/selectors/finalRegisterMessage.selector";
const EnterCodeComponent = () => {
    const { selectInput, handleChange, } = useTypeCode()
    return (
        <TypeCodeForm>
            <TypeCodeThatWasSendedOnYourEmail>
                Please type code that was sended on your email adress
            </TypeCodeThatWasSendedOnYourEmail>

            <TypeCodeInputLine
                ref={selectInput}
            >
                <TypeCodeInput
                    name="firstForm" onChange={(event) => handleChange(event)} placeholder="0" />
                <TypeCodeInput name="secondForm" onChange={(event) => handleChange(event)} placeholder="0" />
                <TypeCodeInput name="thirdForm" onChange={(event) => handleChange(event)} placeholder="0" />
                <TypeCodeInput name="fourthForm" onChange={(event) => handleChange(event)} placeholder="0" />
                <TypeCodeInput name="fifthForm" onChange={(event) => handleChange(event)} placeholder="0" />
                <TypeCodeInput name="sixthForm" onChange={(event) => handleChange(event)} placeholder="0" />
            </TypeCodeInputLine>
            <TypeCodeBaccground />
        </TypeCodeForm>
    );
}

export default EnterCodeComponent;