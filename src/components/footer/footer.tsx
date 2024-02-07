import { FooterWrapper, OurNetworkItem, OurNetworkItemImage, OurNetworksBlock, OurNetworksSubtitle, TemplateFooter } from "./FooterStyleds";
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
                    <OurNetworkItemImage src="https://st2.depositphotos.com/1144386/7770/v/450/depositphotos_77705008-stock-illustration-original-round-blue-facebook-web.jpg" />
                </OurNetworkItem>
                <OurNetworkItem>
                    <OurNetworkItemImage src="https://st2.depositphotos.com/1144386/7770/v/450/depositphotos_77705008-stock-illustration-original-round-blue-facebook-web.jpg" />
                </OurNetworkItem>
                <OurNetworkItem>
                    <OurNetworkItemImage src="https://st2.depositphotos.com/1144386/7770/v/450/depositphotos_77705008-stock-illustration-original-round-blue-facebook-web.jpg" />
                </OurNetworkItem>
            </OurNetworksBlock>
        </FooterWrapper>
    );
}
export default Footer;