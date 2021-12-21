const BASE_URI = process.env.REACT_APP_BASE_URI;

const DEFAULT_HEADERS = {
	headers: {
		'Content-Type': 'application/json',
	},
};

const interceptor = <T>(response: any): Promise<T> => {
	if (response.ok) {
		return response.json().then((data: T) => Promise.resolve(data));
	}
	return response.json().then((error: any) => Promise.reject(error));
};

const intercept = <T>(promise: Promise<any>) =>
	promise.then(data => interceptor<T>(data));

export const post = <T>(url: string, body: any, headers = DEFAULT_HEADERS) =>
	intercept<T>(
		fetch(url, {
			method: 'POST',
			body: JSON.stringify(body),
			...headers,
		})
	);

export const get = <T>(url: string, headers = DEFAULT_HEADERS) =>
	intercept<T>(
		fetch(url, {
			...headers,
		})
	);

export const login = (body: {
	email: string;
	password: string;
	keepMeLoggedIn: boolean;
}) => post<{ token: string }>(`${BASE_URI}/auth`, body);
