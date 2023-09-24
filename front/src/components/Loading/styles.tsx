import styled from 'styled-components';

export const Container = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-top: 40px;
	margin-bottom: 40px;
	text-align: center;
	width: 100%;
`

export const Spin = styled.div`
	animation: spin 2s linear infinite;
	border: 10px solid #f7f7f7;
	border-radius: 50%;
	border-top: 10px solid #ec8f4d;
	height: 60px;
	width: 60px;
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`