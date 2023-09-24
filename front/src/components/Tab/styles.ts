import styled from 'styled-components'

export const ContainerTab = styled.div`
	display: flex;
	justify-content: center;
	cursor: pointer;
	margin: 0px 10px 0px 0px;
`

export const TabLink = styled.div`
	color: #757575;
	background-color: #343434;
	text-align: center;
	border-radius: 5px;
	padding: 5px 0px;
	width: 124px;

	&.active {
		color: #ec8f4d;
	}
`