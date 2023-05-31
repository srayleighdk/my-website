-- DropForeignKey
ALTER TABLE `Order` DROP FOREIGN KEY `Order_userId_fkey`;

-- AlterTable
ALTER TABLE `Order` MODIFY `userId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `orderId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
