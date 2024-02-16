import { BLockItemLine, ContactUsFormBlock, ContactUsFormBlockBackground, ContactUsFormBlockWrapper, ContactUsFormComponent, ContactUsFormEmailWrapper, ContactUsFormImage, ContactUsFormSubTitle, ContactUsFormTitle, MessageBox, MessageTextarea, SendMessageButton, SendMessageButtonSubmit, TelephoneInput } from "./contactUsFormStyles";
import Man from "../../assets/mann.png"
import MapComponent from "../mapComponent/mapComponent";
const ContactUsForm = () => {
    return (
        <ContactUsFormComponent>
            <ContactUsFormImage src={Man} alt="man" />
            <ContactUsFormBlock>
                <ContactUsFormBlockWrapper>
                    <ContactUsFormTitle>
                        Have any question?
                    </ContactUsFormTitle>
                </ContactUsFormBlockWrapper>
                <ContactUsFormBlockWrapper>
                    <ContactUsFormSubTitle>
                        Our telephone:
                    </ContactUsFormSubTitle>
                    <ContactUsFormSubTitle>
                        +375297411122
                    </ContactUsFormSubTitle>
                </ContactUsFormBlockWrapper>
                <ContactUsFormBlockWrapper>
                    <MessageBox>
                        <ContactUsFormSubTitle>
                            Send message to us
                        </ContactUsFormSubTitle>
                        <MessageTextarea required />
                    </MessageBox>
                </ContactUsFormBlockWrapper>
                <ContactUsFormBlockWrapper>
                    <SendMessageButtonSubmit
                        type="submit"
                    >
                        Send messagee!
                    </SendMessageButtonSubmit>
                </ContactUsFormBlockWrapper>
                <ContactUsFormBlockBackground />
            </ContactUsFormBlock>

        </ContactUsFormComponent>
    );
}

export default ContactUsForm;

/*
  <form>
   <p>Ваше имя: <input name="login"></p>
   <p>Телефон в формате 2xxx-xxx:  <input type="tel" name="tel" 
   pattern="2[0-9]{3}-[0-9]{3}"></p>
   <p><input type="submit" value="Отправить"></p>
  </form>
*/
/*    <ContactUsFormBlockWrapper>

        <ContactUsFormTitle>
            Contact us
        </ContactUsFormTitle>
        <TelephoneInput  type="tel" value="+375297411113" disabled/>
    </ContactUsFormBlockWrapper>
    <ContactUsFormBlockWrapper>

        <ContactUsFormSubTitle>
            Our telephone
        </ContactUsFormSubTitle>
    </ContactUsFormBlockWrapper>
    <ContactUsFormTitle>
        Or have ane question?
    </ContactUsFormTitle>
  
<ContactUsFormBlockWrapper>

<ContactUsFormSubTitle>
         Type your message
        </ContactUsFormSubTitle>
        <MessageTextarea>

        </MessageTextarea>
        <SendMessageButton>
            Send
        </SendMessageButton>
</ContactUsFormBlockWrapper>
 
*/