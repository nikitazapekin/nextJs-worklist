import { ContactUsFormBlock, ContactUsFormBlockBackground, ContactUsFormBlockWrapper, ContactUsFormComponent, ContactUsFormEmailWrapper, ContactUsFormImage, ContactUsFormSubTitle, ContactUsFormTitle, MessageTextarea, SendMessageButton, TelephoneInput } from "./contactUsFormStyles";
import Man from "../../assets/mann.png"
import MapComponent from "../mapComponent/mapComponent";
const ContactUsForm = () => {
    return (
        <ContactUsFormComponent>
            <ContactUsFormImage src={Man} alt="man" />
            <ContactUsFormBlock>
                <ContactUsFormBlockWrapper>

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
                {/*
<ContactUsFormEmailWrapper> */}
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
{/*
</ContactUsFormEmailWrapper>
*/}
                <ContactUsFormBlockBackground />
            </ContactUsFormBlock>

            <MapComponent />
        </ContactUsFormComponent>
    );
}

export default ContactUsForm;