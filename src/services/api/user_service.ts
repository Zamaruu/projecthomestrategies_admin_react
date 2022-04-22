import { ClientConfig } from "../../utils/ClientConfig";
import {Buffer} from 'buffer';
import { UserModel } from "../models/user";

interface ILoginProps {
    title: string;
    children: React.ReactNode;
} 

export const getAllUsers = async (token: string) : Promise<any> => {
    const response = await fetch(
        ClientConfig.serverURL + "/User/All",
        {
            method: "get",
            headers: {
                "authentication": token,
            }
        }
    );

    var users = await response.json();
    console.log(users as UserModel[]);
    return users;
}
