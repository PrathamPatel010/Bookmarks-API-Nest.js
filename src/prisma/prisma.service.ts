import { Injectable } from '@nestjs/common';
import {PrismaClient} from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient{
    constructor() {
        super({
            datasources:{
                db:{
                    url:"mongodb+srv://ppratham812:nHKVNppDA95FKd4Q@cluster0.rvryw9a.mongodb.net/Bookmark-API?retryWrites=true&w=majority"
                }
            }
        });
    }
}
