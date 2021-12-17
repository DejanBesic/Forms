import { useState } from 'react';
import { useCompositeForm } from '../../utils/formHooks';
import FormGroup from '../shared/form/FormGroup';
import initialState from './initialState';
import { ReactComponent as Logo } from '../../assets/svgs/logo.svg';
import styles from './Login.module.scss';

const Login = () => {
	const [forms, setForms, isValid, validate] = useCompositeForm(initialState);
	const [isLoading, setIsLoading] = useState(false);

	const submit = () => {
		validate();
		if (isValid()) {
			alert('YAAAAAS');
		} else {
			alert('NAAAAAH');
		}
	};

	return (
		<div className={styles.mask}>
			<div className={styles.header} />

			<div className={styles.logoWrapper}>
				<Logo />
			</div>
			<form className={styles.container}>
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

			<div className={styles.footer} />
		</div>
	);
};

export default Login;
