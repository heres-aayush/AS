/*
  Warnings:

  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `agencyName` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `availability` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `carModel` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `carRegistration` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `childAge` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `childName` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `driverDetails` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `dropoffAddress` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `emergencyContact` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `fullName` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `homeAddress` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `licenseNumber` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `licenseUploadUrl` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `officeAddress` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `pickupAddress` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `preferredRole` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `routePreferences` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `schoolName` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `seatingCapacity` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `serviceAreas` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `travelTime` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `vehicleCount` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `workAddress` on the `user` table. All the data in the column will be lost.
  - Added the required column `address` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `phone` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `user` DROP PRIMARY KEY,
    DROP COLUMN `agencyName`,
    DROP COLUMN `availability`,
    DROP COLUMN `carModel`,
    DROP COLUMN `carRegistration`,
    DROP COLUMN `childAge`,
    DROP COLUMN `childName`,
    DROP COLUMN `driverDetails`,
    DROP COLUMN `dropoffAddress`,
    DROP COLUMN `emergencyContact`,
    DROP COLUMN `fullName`,
    DROP COLUMN `homeAddress`,
    DROP COLUMN `licenseNumber`,
    DROP COLUMN `licenseUploadUrl`,
    DROP COLUMN `officeAddress`,
    DROP COLUMN `pickupAddress`,
    DROP COLUMN `preferredRole`,
    DROP COLUMN `routePreferences`,
    DROP COLUMN `schoolName`,
    DROP COLUMN `seatingCapacity`,
    DROP COLUMN `serviceAreas`,
    DROP COLUMN `travelTime`,
    DROP COLUMN `vehicleCount`,
    DROP COLUMN `workAddress`,
    ADD COLUMN `address` VARCHAR(191) NOT NULL,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `password` VARCHAR(191) NULL,
    MODIFY `phone` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);
