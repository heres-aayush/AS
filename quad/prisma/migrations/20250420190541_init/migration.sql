/*
  Warnings:

  - You are about to alter the column `userType` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `agencyName` VARCHAR(191) NULL,
    ADD COLUMN `availability` VARCHAR(191) NULL,
    ADD COLUMN `carModel` VARCHAR(191) NULL,
    ADD COLUMN `carRegistration` VARCHAR(191) NULL,
    ADD COLUMN `childAge` INTEGER NULL,
    ADD COLUMN `childName` VARCHAR(191) NULL,
    ADD COLUMN `driverDetails` VARCHAR(191) NULL,
    ADD COLUMN `dropoffAddress` VARCHAR(191) NULL,
    ADD COLUMN `emergencyContact` VARCHAR(191) NULL,
    ADD COLUMN `homeAddress` VARCHAR(191) NULL,
    ADD COLUMN `licenseNumber` VARCHAR(191) NULL,
    ADD COLUMN `licenseUploadUrl` VARCHAR(191) NULL,
    ADD COLUMN `officeAddress` VARCHAR(191) NULL,
    ADD COLUMN `pickupAddress` VARCHAR(191) NULL,
    ADD COLUMN `preferredRole` ENUM('PASSENGER', 'DRIVER', 'BOTH') NULL,
    ADD COLUMN `routePreferences` VARCHAR(191) NULL,
    ADD COLUMN `schoolName` VARCHAR(191) NULL,
    ADD COLUMN `seatingCapacity` VARCHAR(191) NULL,
    ADD COLUMN `serviceAreas` VARCHAR(191) NULL,
    ADD COLUMN `travelTime` ENUM('MORNING', 'MIDDAY', 'EVENING', 'NIGHT') NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD COLUMN `vehicleCount` INTEGER NULL,
    ADD COLUMN `workAddress` VARCHAR(191) NULL,
    MODIFY `userType` ENUM('COMMUTER_SELF', 'COMMUTER_PARENT', 'DRIVER', 'AGENCY') NOT NULL;
