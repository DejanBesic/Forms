import { InputProps } from '../../../../utils/types';
import CheckBox from '../checkBox/CheckBox';
import { CheckBoxType } from '../checkBox/types';
import styles from './TickCheckBox.module.scss';

const TickCheckBox = (
	props: Omit<InputProps<boolean> & CheckBoxType, 'classNames'>
) => <CheckBox classNames={[styles.ticked]} {...props} />;

export default TickCheckBox;
