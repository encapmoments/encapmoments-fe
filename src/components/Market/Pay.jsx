import { TouchableOpacity, Text, useWindowDimensions } from "react-native";
import PayStyles from "./PayStyles";

const Pay = ( {navigation }) => {
    const { width, height } = useWindowDimensions();
    const payStyles = PayStyles(width, height);

    const handlePay = () => {
        navigation.navigate("Market");
    };

    return (
        <TouchableOpacity onPress={handlePay} style={payStyles.payWrapper}>
            <Text style={payStyles.payText}>결제하기</Text>
        </TouchableOpacity>
    );
};

export default Pay;
