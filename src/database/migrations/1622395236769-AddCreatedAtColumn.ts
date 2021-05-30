import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddCreatedAtColumn1622395236769 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "projects",
      new TableColumn({
        name: "created_at",
        type: "timestamp",
        default: "now()",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("projects", "created_at");
  }
}
