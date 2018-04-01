export interface Profile {
	balance: number;
	username: string;
	expenditure: any[];
	income: any[];
	organizations: {
		memberOf: any[];
		ownerOf: any[];
	};
}
