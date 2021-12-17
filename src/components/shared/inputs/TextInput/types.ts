export interface TextInputType {
	type?: string;
	classNames?: string[];
	customStyles?: { 
		container: string[];
		input: string[];
		label: string[];
		error: string[];
	}
}
