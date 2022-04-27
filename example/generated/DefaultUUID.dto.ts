/////////////////////////////////////
// DO NOT EDIT THIS FILE DIRECTLY,
// THIS FILE WAS AUTO GENERATED.
/////////////////////////////////////

import { Field, InputType, ID } from "@nestjs/graphql";

import { DefaultUUIDConstructor } from "./DefaultUUID.model";
import { PaginatorInputs } from "./paginator";

@InputType()
export class DefaultUUIDCreateInput implements DefaultUUIDConstructor {
  @Field(() => ID, { nullable: true })
  id?: string;
}

@InputType()
export class DefaultUUIDUpdateInput {
  @Field(() => ID!, { nullable: false })
  id!: string;
}

@InputType()
export class DefaultUUIDPaginatorInput extends PaginatorInputs {}