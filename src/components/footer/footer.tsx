import { FooterWrapper, OurNetworkItem, OurNetworkItemImage, OurNetworksBlock, OurNetworksSubtitle, TemplateFooter } from "./FooterStyleds";
import Facebook from "../../assets/Facebook.jpg"
import Instagram from "../../assets/Instagram.png"
import LinkiId from "../../assets/LinkeId.png"
const Footer = () => {
    return (
        <FooterWrapper>
            <TemplateFooter>
                Template by 2024
            </TemplateFooter>
            <OurNetworksSubtitle>
                Our Networks
            </OurNetworksSubtitle>
            <OurNetworksBlock>
                <OurNetworkItem>
                    <OurNetworkItemImage src={Facebook} />
                </OurNetworkItem>
                <OurNetworkItem>
                    <OurNetworkItemImage src={LinkiId} />
                </OurNetworkItem>
                <OurNetworkItem>
                    <OurNetworkItemImage src={Instagram} />
                </OurNetworkItem>
            </OurNetworksBlock>
        </FooterWrapper>
    );
}
export default Footer;