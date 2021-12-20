const BASE_URI = process.env.REACT_APP_BASE_URI;

const DEFAULT_HEADERS = {
	headers: {
		'Content-Type': 'application/json',
	},
};

const interceptor = (response: any) => {
	if (response.ok) {
		return response.json();
	}
	return response.json().then((data: any) => Promise.reject(data));
};

const fetchWithInterceptor = (url: string, params: RequestInit) =>
	fetch(url, params);

export const post = (url: string, body: any, headers = DEFAULT_HEADERS) =>
	fetch(url, {
		method: 'POST',
		body: JSON.stringify(body),
		...headers,
	}).then(interceptor);

export const get = (url: string, headers = DEFAULT_HEADERS) =>
	fetch(url, {
		...headers,
	}).then(interceptor);

export const login = (body: {
	email: string;
	password: string;
	keepMeLoggedIn: boolean;
}) => post(`${BASE_URI}/auth`, body);
