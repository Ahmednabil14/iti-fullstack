import { PartialType } from "@nestjs/mapped-types";
import { CreateUSerDto } from "./createUser.dto";

export class UpdateUserDto extends PartialType(CreateUSerDto) {}