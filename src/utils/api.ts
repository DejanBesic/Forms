const BASE_URI = process.env.REACT_APP_BASE_URI;

// export const handleTimeout = timeout =>
// 	new Promise((resolve, reject) =>
// 		setTimeout(reject, timeout, {
// 			message: 'The server took too long to respond, please try again',
// 			status: 0,
// 			type: fetchFailureModes.timeout,
// 		})
// 	);

// export const withTimeout = (promise, timeout = 20000) =>
// 	Promise.race([promise, handleTimeout(timeout)]);

// export const fetchTimeout = (
// 	resourceUrl: string,
// 	request: HeadersInit,
// 	timeout
// ) =>
// 	withTimeout(
// 		Promise.resolve(fetch(...[resourceUrl, request]))
// 			.catch(err => handleNetworkFailure(err))
// 			.then(res => handleStatusCodes(res)),
// 		timeout
// 	);

export const getPrice = () => fetch(`${BASE_URI}/price`);
