import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

const StyledInput = styled(TouchableOpacity)`
	height: 38px;
	width: 100%;
	padding: 8px 0px;
	margin: 4px 0px;
`;

const StyledButton = styled(TouchableOpacity)`
	border-width: 1;
	width: 100%;
	height: 38;
	padding: 8px 0px;
	flex-direction: 'row';
	justify-content: 'center';
	align-items: 'center';
`;


export default {StyledInput, StyledButton}