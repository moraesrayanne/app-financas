import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    padding: ${RFValue(10)}px;
`;

export const ContentHeader = styled.View`
    padding: ${RFValue(20)}px;
    align-items: center;
    justify-content: center;
`;
export const Title = styled.Text`
    font-size: ${RFValue(25)}px;
    text-align: center;
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
    margin-top: ${RFValue(40)}px;
`;

export const Description = styled.Text`
    margin-top: ${RFValue(60)}px;
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
`;

export const ViewButton = styled.View`
    flex-direction: row;
    gap: ${RFValue(20)}px;
    margin-top: ${RFValue(15)}px;
`;

export const ContentBody = styled.Text``;

export const ContentFooter = styled.Text``;
