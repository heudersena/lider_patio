/*
  Warnings:

  - Made the column `userId` on table `controls` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `controls` DROP FOREIGN KEY `controls_userId_fkey`;

-- AlterTable
ALTER TABLE `controls` MODIFY `userId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `controls` ADD CONSTRAINT `controls_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
