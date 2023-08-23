-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "price" DECIMAL NOT NULL,
    "img" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "link" TEXT NOT NULL DEFAULT 'https://wa.link/s8scxe'
);
INSERT INTO "new_Products" ("category", "id", "img", "price", "title") SELECT "category", "id", "img", "price", "title" FROM "Products";
DROP TABLE "Products";
ALTER TABLE "new_Products" RENAME TO "Products";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
