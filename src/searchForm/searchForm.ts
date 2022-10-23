import { SearchFormData } from "./searchFormTypes";

export const searchForm = (): SearchFormData => {
  const arrival = (document.getElementById("check-in-date") as HTMLInputElement)
    .value;
  const departure = (
    document.getElementById("check-out-date") as HTMLInputElement
  ).value;
  const maxPrice = (document.getElementById("max-price") as HTMLInputElement)
    .value;
  return { arrival, departure, maxPrice };
};
