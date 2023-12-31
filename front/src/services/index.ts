import axios, { AxiosRequestConfig } from 'axios'
import { AddClickModel } from '../models/add-click';

export const config: AxiosRequestConfig = {
	//baseURL: 'http://18.231.116.149:443/api/',
	//baseURL: process.env.REACT_APP_API_URL,
  	baseURL: 'http://localhost:8080/',
	responseType: 'json',
	headers: {
		accept: 'application/json',
		'content-type': 'application/json',
	},
	timeout: 40000,
	withCredentials: false,
	maxRedirects: 5,
	validateStatus: (status: number) => status >= 200 && status < 300,
	transformResponse: (response) => {
		if (response !== null && response.error) {
			console.log(response.error);
		}
		const resp = JSON.parse(response)
		return resp;
	},
};

export const login = async (userInfo: any) => {
	config.url = 'users/login'
	config.method = 'put'
	config.data = userInfo
	return axios.request<any>(config);
};

export const addClick = async (newClick: AddClickModel, clickAuter: String | null) => {
	config.url = 'click'
	config.method = 'post'
	config.data = newClick

  	if (config.headers) {
		Object.assign(config.headers, { 'x-access-token': clickAuter })
	}

  	return axios.request<any>(config)
}

export const loadUserCampaings = async (idUser: number, tokenAccess: string) => {
	config.url = `campaing/${idUser}`
	config.method = 'get'
	if (config.headers) {
		Object.assign(config.headers, { 'x-access-token': tokenAccess })
	}
	return axios.request<any>(config)
}

export const loadCampaings = async (tokenAccess: string) => {
	config.url = `campaing`
	config.method = 'get'
	if (config.headers) {
		Object.assign(config.headers, { 'x-access-token': tokenAccess })
	}
	return axios.request<any>(config)
}

export const loadCampaingSummary = async (idCampaing: number, tokenAccess: string) => {
	config.url = `click/campaing-summary/${idCampaing}`
	config.method = 'get'
	if (config.headers) {
		Object.assign(config.headers, { 'x-access-token': tokenAccess })
	}
	return axios.request<any>(config)
}

export const createCampaing = async (campaingData: any, tokenAccess: String) => {
	config.url = 'campaing'
	config.method = 'post'
	config.data = campaingData
	if (config.headers) {
		Object.assign(config.headers, { 'x-access-token': tokenAccess })
	}
	return axios.request<any>(config)
}

export const createEmployee = async (userInfo: any, tokenAccess: String) => {
	config.url = 'users'
	config.method = 'post'
	config.data = userInfo
	if (config.headers) {
		Object.assign(config.headers, { 'x-access-token': tokenAccess })
	}
	return axios.request<any>(config)
}

export const getUsers = async (tokenAccess: String) => {
	config.url = 'users'
	config.method = 'get'
	if (config.headers) {
		Object.assign(config.headers, { 'x-access-token': tokenAccess })
	}
	return axios.request<any>(config)
}
