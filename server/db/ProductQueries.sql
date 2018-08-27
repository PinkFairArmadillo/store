CREATE TABLE "Products" (
	"ProductID" serial NOT NULL,
	"Quantity" int NOT NULL,
	CONSTRAINT Products_pk PRIMARY KEY ("ProductID")
) WITH (
  OIDS=FALSE
);