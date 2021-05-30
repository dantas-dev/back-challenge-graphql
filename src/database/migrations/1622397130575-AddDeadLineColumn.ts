import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddDeadLineColumn1622397130575 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "projects",
      new TableColumn({
        name: "deadline",
        type: "timestamp",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("projects", "deadline");
  }
}
