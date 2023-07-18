CREATE TABLE "people" (
  "id" SERIAL NOT NULL,
  "firstName" TEXT NOT NULL,
  "lastName" TEXT NOT NULL,

  CONSTRAINT "people_pkey" PRIMARY KEY ("id")
);

INSERT INTO people ("firstName", "lastName") VALUES ('Maria', 'Eduarda');
INSERT INTO people ("firstName", "lastName") VALUES ('Letícia', 'Montenegro');
INSERT INTO people ("firstName", "lastName") VALUES ('Thiago', 'Rosa');
INSERT INTO people ("firstName", "lastName") VALUES ('Maria', 'Fernanda');
INSERT INTO people ("firstName", "lastName") VALUES ('Diego', 'Pinho');
INSERT INTO people ("firstName", "lastName") VALUES ('Letícia', 'Chijo');