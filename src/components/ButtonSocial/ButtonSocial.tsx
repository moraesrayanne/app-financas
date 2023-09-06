import React from "react";
import { Button, Title, IcIcon } from "./styles";
import { Fontisto } from "@expo/vector-icons";
import { RectButtonProps } from "react-native-gesture-handler";
import {
    GestureHandlerRootView,
    NativeViewGestureHandler,
} from "react-native-gesture-handler";

interface Props extends RectButtonProps {
    title: string;
    iconName: React.ComponentProps<typeof Fontisto>["name"];
}

const ButtonSocial: React.FC<Props> = ({ title, iconName, ...rest }) => {
    return (
        <GestureHandlerRootView>
            <NativeViewGestureHandler>
                <Button { ...rest }>
                    <IcIcon name={iconName} />
                    <Title>{title}</Title>
                </Button>
            </NativeViewGestureHandler>
        </GestureHandlerRootView>
    );
};

export default ButtonSocial;
