import { SearchFormData } from "./searchFormTypes";

export const showResult = (values: SearchFormData) => ({
  arrival: new Date(values.arrival),
  departure: new Date(values.departure),
  maxPrice: Number(values.maxPrice),
});
