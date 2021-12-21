import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getFormByName, useCompositeForm } from '../../utils/formHooks';
import FormGroup from '../shared/form/FormGroup';
import initialState from './initialState';
import { ReactComponent as Logo } from '../../assets/svgs/logo.svg';
import styles from './LoginForm.module.scss';
import {
	setToken,
	setError,
	selectErrorMessage,
	selectToken,
} from '../../store/reducers/authReducer';
import { useAppDispatch, useAppSelector } from '../../store';
import { login } from '../../api';

const Login = () => {
	const [forms, setForms, isValid, validate] = useCompositeForm(initialState);
	const [isLoading, setIsLoading] = useState(false);

	const errorMessage = useAppSelector(selectErrorMessage);
	const authToken = useAppSelector(selectToken);

	if (authToken) {
		return <Navigate to="/price" />;
	}

	const dispatch = useAppDispatch();

	const submit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		validate();
		if (!isValid()) return;

		const email = getFormByName(forms, 'email')?.value;
		const password = getFormByName(forms, 'password')?.value;
		const keepMeLoggedIn = getFormByName(forms, 'keepMeLoggedIn')?.value;
		setIsLoading(true);
		login({ email, password, keepMeLoggedIn })
			.then(({ token }) => {
				dispatch(setToken(token));
			})
			.catch((error: { message: string[] }) => {
				dispatch(setError(error.message[0]));
			})
			.finally(() => setIsLoading(false));
	};

	return (
		<div className={styles.mask}>
			<div className={styles.logoWrapper}>
				<Logo />
			</div>
			<form className={styles.form}>
				<span className={styles.title}>Welcome at Qover</span>
				<FormGroup forms={forms} />
				<button
					type="submit"
					onClick={submit}
					className={styles.submit}
					disabled={isLoading}
				>
					Sign in to your account
				</button>
				{errorMessage && <span className={styles.error}>{errorMessage}</span>}
			</form>
			<button type="button" onClick={submit} className={styles.missingAccount}>
				Don&apos;t have an account?{' '}
				<span className={styles.underline}>Ask access</span>
			</button>
		</div>
	);
};

export default Login;
