import { ObjectType, Field, ID, InputType } from '@nestjs/graphql';
export enum Kyn {
  KK = "KK",
  Kvk = "Kvk",
  HK = "HK"
}
export enum PostNumber {
  Rvk101 = 101,
  Rvk105 = 105,
  Rvk104 = 104,
  Rvk107 = 107,
  Rvk111 = 111,
  Rvk102 = 102,
  Kop201 = 201,
  Kop212 = 212
}

@ObjectType()
export class Addresses{
  @Field(_1 => ID)
  Address: string;

  @Field()
  PostNumber: PostNumber;
}

@ObjectType()
export class UserModel {
  @Field()
  kennitala: string;

  @Field()
  name: string;

  @Field()
  address: Addresses;

  @Field()
  kyn: Kyn;
}

@InputType()
export class AddressesInput{
  @Field(_1 => ID)
  Address: string;

  @Field()
  PostNumber: PostNumber;
}

@InputType()
export class UserModelInput {
  @Field()
  kennitala: string;

  @Field()
  name: string;

  @Field()
  address: AddressesInput;

  @Field()
  kyn: Kyn;
}
