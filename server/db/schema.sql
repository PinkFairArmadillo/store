CREATE TABLE "USER" (
	"UserID" serial NOT NULL,
	"FName" varchar(50) NOT NULL,
	"LName" varchar(50) NOT NULL,
	"Username" varchar(50) NOT NULL,
	"Password" varchar(50) NOT NULL,
	"Email" varchar(300) NOT NULL,
	"created_At" timestamp NOT NULL,
	"last_Login" timestamp NOT NULL,
	CONSTRAINT USER_pk PRIMARY KEY ("UserID")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "CART" (
	"CartID" serial NOT NULL,
	CONSTRAINT CART_pk PRIMARY KEY ("CartID")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "UserCart" (
	"UserConnect" varchar NOT NULL,
	"CartConnect" varchar NOT NULL
) WITH (
  OIDS=FALSE
);





ALTER TABLE "UserCart" ADD CONSTRAINT "UserCart_fk0" FOREIGN KEY ("UserConnect") REFERENCES "USER"("UserID");
ALTER TABLE "UserCart" ADD CONSTRAINT "UserCart_fk1" FOREIGN KEY ("CartConnect") REFERENCES "CART"("CartID");
