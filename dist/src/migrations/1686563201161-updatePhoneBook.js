"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePhoneBook1686563201161 = void 0;
class UpdatePhoneBook1686563201161 {
    constructor() {
        this.name = 'UpdatePhoneBook1686563201161';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`phone_book\` ADD \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`phone_book\` ADD \`updated_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`phone_book\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`phone_book\` DROP COLUMN \`created_at\``);
    }
}
exports.UpdatePhoneBook1686563201161 = UpdatePhoneBook1686563201161;
//# sourceMappingURL=1686563201161-updatePhoneBook.js.map