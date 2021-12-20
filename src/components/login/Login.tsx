import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getFormByName, useCompositeForm } from '../../utils/formHooks';
import FormGroup from '../shared/form/FormGroup';
import initialState from './initialState';
import { ReactComponent as Logo } from '../../assets/svgs/logo.svg';
import styles from './Login.module.scss';
import WithLayout from '../shared/layout/WithLayout';
import { login } from '../../utils/api';
import { setToken, selectToken } from '../../store/reducers/authReducer';
import { useAppDispatch, useAppSelector } from '../../store';

const Login = () => {
	const [forms, setForms, isValid, validate] = useCompositeForm(initialState);
	const [isLoading, setIsLoading] = useState(false);

	const authToken = useAppSelector(selectToken);
	const dispatch = useAppDispatch();

	if (authToken) {
		return <Navigate to="/price" />;
	}

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
				console.log('asd');
			})
			.catch(err => {
				console.log(err);
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
				<button type="submit" onClick={submit} className={styles.submit}>
					Sign in to your account
				</button>
			</form>
			<button type="button" onClick={submit} className={styles.missingAccount}>
				Don&apos;t have an account?{' '}
				<span className={styles.underline}>Ask access</span>
			</button>
		</div>
	);
};

export default WithLayout(Login);
