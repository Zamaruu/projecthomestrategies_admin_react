export interface UserModel {
    userId: number;
    firstname: string;
    surname: string;
    email: string;
    // password: string;
    userColor: number;
    image?: string;
    type: number;
    createdAt: Date;
    household?: any;
    adminOfHousehold?: any;
    notifications?: any;
}