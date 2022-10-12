import { SearchFormData } from "./searchFormTypes";

export const searchForm = (): SearchFormData => {
  const arrival = (document.querySelector("#check-in-date") as HTMLInputElement)
    .value;
  const departure = (
    document.querySelector("#check-out-date") as HTMLInputElement
  ).value;
  const maxPrice = (document.querySelector("#max-price") as HTMLInputElement)
    .value;
  return { arrival, departure, maxPrice };
};
