/////////////////////////////////////
// DO NOT EDIT THIS FILE DIRECTLY,
// THIS FILE WAS AUTO GENERATED.
/////////////////////////////////////

import { Field, InputType } from "@nestjs/graphql";

import { Provider } from "../client";

import { UserProviderConstructor } from "./UserProvider.model";
import { PaginatorInputs } from "./paginator";

@InputType()
export class UserProviderCreateInput implements UserProviderConstructor {
  @Field(() => Provider!, { nullable: false })
  provider!: keyof typeof Provider;

  @Field(() => String!, { nullable: false })
  userId!: string;
}

@InputType()
export class UserProviderUpdateInput {}

@InputType()
export class UserProviderPaginatorInput extends PaginatorInputs {}