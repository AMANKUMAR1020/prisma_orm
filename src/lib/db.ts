import { PrismaClient } from "@prisma/client";

const PrismaClientSingleton = ()=>{
    return new PrismaClient();
}

declare const globalThis:{
    prismaGlobal: ReturnType<typeof PrismaClientSingleton>;
} & typeof global

const Prisma = globalThis.prismaGlobal ?? PrismaClientSingleton();

export default Prisma;

if(process.env.NODE_ENV !== "production") globalThis.prismaGlobal = Prisma;