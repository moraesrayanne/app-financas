import React from "react";
import {
    Container,
    ContentHeader,
    Title,
    Description,
    ViewButton,
    ContentBody,
    ContentFooter,
} from "./styles";
import { SafeAreaView } from "react-native";
import ButtonSocial from "../../components/ButtonSocial/ButtonSocial";

const Login: React.FC = () => {
    return (
        <SafeAreaView>
            <Container>
                <ContentHeader>
                    <Title>Seja bem vinde ao {"\n"}Mabank Wallet</Title>
                    <Description>
                        Entrar com redes sociais
                    </Description>

                    <ViewButton>
                        <ButtonSocial title="Google" iconName="google" />
                        <ButtonSocial title="Facebook" iconName="facebook" />
                    </ViewButton>
                </ContentHeader>

                <ContentBody></ContentBody>

                <ContentFooter></ContentFooter>
            </Container>
        </SafeAreaView>
    );
};

export default Login;
