import {Injectable, Req} from "@nestjs/common";
import {User} from "@prisma/client";
import {PrismaService} from "../prisma/prisma.service";
import {Request} from "express";
import {AuthDto} from "./dto";

@Injectable({})
export class AuthService{
    constructor(private prismaService:PrismaService) {
        this.prismaService = prismaService;
    }
    signup(userData:AuthDto){
        console.log(userData);
        return userData;
    }

    signin(){

    }
}