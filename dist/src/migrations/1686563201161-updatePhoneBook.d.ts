import { MigrationInterface, QueryRunner } from "typeorm";
export declare class UpdatePhoneBook1686563201161 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
