import { IsEmail, IsEmpty, IsString, Length } from "class-validator"


export class CreateUSerDto {
    @IsString()
    name: string
    @IsEmail()
    email: string
    @IsString()
    @Length(4)
    password: string
    role: string
}