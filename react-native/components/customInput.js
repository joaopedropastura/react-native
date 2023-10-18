import { TextInput, StyleSheet } from "react-native"
import style from '../styles/login';

const CustomInput = (props) => {
	return (
		<TextInput
			style = { style.inputWrapper }
			placeholder = { props.placeholder }
			value = { props.value }
			onChangeText = { props.funcao }
			placeholderTextColor = {'#0BD8FD'}
			secureTextEntry = { props.isPassword ? true : false }
		>
		</TextInput>
	)
}



export default CustomInput