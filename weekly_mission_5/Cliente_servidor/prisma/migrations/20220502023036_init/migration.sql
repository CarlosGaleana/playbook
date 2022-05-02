-- CreateTable
CREATE TABLE "Explorer"
    "id" SERIAL NOT NULL,
    "name" TEXT  NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "mission" VARCHAR(255) NOT NULL,
    "azureCertification" BOOLEAN NOT NULL DEFAULT false,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastUpdated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Explorer_pkey" PRIMARY KEY ("id")
 ;

 -- Create Index
 CREATE UNIQUE INDEX "Explorer_name" ON "Explorer"("name")
