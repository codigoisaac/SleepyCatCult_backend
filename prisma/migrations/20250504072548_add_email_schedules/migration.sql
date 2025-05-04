-- CreateTable
CREATE TABLE "EmailSchedule" (
    "id" SERIAL NOT NULL,
    "movieId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "scheduledFor" TIMESTAMP(3) NOT NULL,
    "sent" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EmailSchedule_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "EmailSchedule_movieId_idx" ON "EmailSchedule"("movieId");

-- CreateIndex
CREATE INDEX "EmailSchedule_userId_idx" ON "EmailSchedule"("userId");

-- CreateIndex
CREATE INDEX "EmailSchedule_scheduledFor_idx" ON "EmailSchedule"("scheduledFor");

-- CreateIndex
CREATE INDEX "EmailSchedule_sent_idx" ON "EmailSchedule"("sent");

-- AddForeignKey
ALTER TABLE "EmailSchedule" ADD CONSTRAINT "EmailSchedule_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmailSchedule" ADD CONSTRAINT "EmailSchedule_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
