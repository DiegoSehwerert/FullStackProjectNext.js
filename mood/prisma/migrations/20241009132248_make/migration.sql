/*
  Warnings:

  - A unique constraint covering the columns `[userId,id]` on the table `JournalEntry` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "JournalEntry_userId_idx";

-- CreateIndex
CREATE UNIQUE INDEX "JournalEntry_userId_id_key" ON "JournalEntry"("userId", "id");
