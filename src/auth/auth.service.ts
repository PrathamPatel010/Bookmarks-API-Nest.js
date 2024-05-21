import {Injectable, Req} from "@nestjs/common";
import {User} from "@prisma/client";
import {PrismaService} from "../prisma/prisma.service";
import {Request} from "express";

@Injectable({})
export class AuthService{
    constructor(private prismaService:PrismaService) {
        this.prismaService = prismaService;
    }
    signup(data:any){
        console.log(data);
        return data;
    }

    signin(){

    }
}