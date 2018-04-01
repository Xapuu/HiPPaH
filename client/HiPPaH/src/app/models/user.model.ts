export interface User {
	username: string;
	password: string;
}

export interface RegisteringUser extends User {
	confirmPassword: string;
}
