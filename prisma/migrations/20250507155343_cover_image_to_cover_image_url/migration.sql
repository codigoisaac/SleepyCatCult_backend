/*
  Warnings:

  - You are about to drop the column `coverImage` on the `Movie` table. All the data in the column will be lost.
  - Added the required column `coverImageUrl` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- RenameColumn
ALTER TABLE "Movie" RENAME COLUMN "coverImage" TO "coverImageUrl";
