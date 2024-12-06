import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req } from "@nestjs/common";
import { CreateUSerDto } from "./dtos/createUser.dto";
import { UpdateUserDto } from "./dtos/update-user.dto";
import { UserEntity } from "./user.entity";




@Controller('users')
export class UserController{
    users : UserEntity[] = []


    @Get()
    getAllUsers() : UserEntity[] {
        return this.users
    }

    @Get(':id')
    getUser(@Param('id', ParseIntPipe) id: number) : UserEntity {
        return this.users.find((user) => user.id === id)
    }

    @Post()
    createUser(@Body() data: CreateUSerDto) : object {
        const user = {
            ...data,
            id: this.users.length + 1
        }
        this.users.push(user)
        return this.users
    }

    @Patch(':id')
    updateUser(@Param('id', ParseIntPipe) id: number, @Body() UpdateUserDto: UpdateUserDto) : object {
        let userIndex = this.users.findIndex((user) => user.id === id)
        if(userIndex !== -1){
            this.users[userIndex] = {...this.users[userIndex], ...UpdateUserDto}
        }
        return {"message": "updated successfully", "user": this.users}
    } 


    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number) : object {
        this.users = this.users.filter((user) => user.id !== id)
        return {"message": "user deleted successfully", "users": this.users}
    }

}