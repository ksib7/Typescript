import { renderBlock } from "../lib";
import { renderToast } from "../toast/index";
import {
  renderEmptyOrErrorSearchBlock,
  renderSearchResultsBlock,
} from "./search-results";
import { searchForm } from "./searchForm";
import { showResult } from "./showResult";
import { getInfoFromSources } from "./getInfoFromSources";

export function renderSearchFormBlock(dateOut: Date, dateIn: Date) {
  const dateNow = new Date();
  const dateOutMax = dateOut.setMonth(dateNow.getMonth() + 1);
  const dateInMax = dateIn.setMonth(dateIn.getMonth() + 1);

  renderBlock(
    "search-form-block",
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="2021-05-11" min="${dateOut}" max="${dateOutMax}" name="arrival />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="2021-05-13" min="${dateIn}" max=${dateInMax} name="departure" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  );

  (document.querySelector(".search-form") as HTMLFormElement).onsubmit = async (
    event
  ) => {
    event.preventDefault();
    try {
      const { arrival, departure, maxPrice } = showResult(searchForm());

      let coords = {
        latitude: 0,
        longitude: 0,
      } as GeolocationCoordinates;

      navigator.geolocation.getCurrentPosition((data) => {
        coords = data.coords;
      });

      const results = await getInfoFromSources(
        arrival,
        departure,
        maxPrice,
        coords
      );

      if (results.length) {
        renderSearchResultsBlock(results);
      } else {
        renderEmptyOrErrorSearchBlock("Нет подходящих предложений");
      }
    } catch (error) {
      if (error instanceof Error) {
        renderToast({ text: error.message, type: "error" });
      }
    }
  };
}
