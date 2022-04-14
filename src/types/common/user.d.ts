import { string } from "yup";

export declare interface LM_User {
    /**
     * The encrypted password of the user
     */
    password: string;
    email: string;
}