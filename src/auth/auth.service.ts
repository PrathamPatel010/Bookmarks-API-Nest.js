import {Injectable} from "@nestjs/common";

@Injectable({})
export class AuthService{
    signup(){
        return {status:200,message:"User Signed up"};
    }

    signin(){
        return {status:200,message:"User Signed in"};
    }
}