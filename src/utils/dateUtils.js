import { DateTime } from "luxon";

export const getDateWithDay = (date) =>
  DateTime.fromISO(date).setLocale("es").toFormat("cccc dd");
