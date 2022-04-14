import { ClientConfig } from "../utils/ClientConfig";
import {Buffer} from 'buffer';

interface ILoginProps {
    title: string;
    children: React.ReactNode;
} 

export const Login = async (name: string, password: string) : Promise<any> => {
    const encodedString = Buffer.from(name + ':' + password).toString('base64');

    return await fetch(
        ClientConfig.serverURL + "/Auth/signin/" + encodedString,
        {
            method: "post",
        }
    );
}