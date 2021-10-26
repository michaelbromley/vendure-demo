import { runMigrations } from "@vendure/core";
import { config } from "./vendure-config";

console.log("Starting migrations...");
runMigrations(config).catch((err) => {
  // tslint:disable-next-line:no-console
  console.log(err);
});
