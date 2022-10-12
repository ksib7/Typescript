import { renderSearchFormBlock } from "./searchForm/search-form";
import { renderSearchStubBlock } from "./searchForm/search-results";
import { renderUserBlock } from "./user";
import { renderToast } from "./lib";

window.addEventListener("DOMContentLoaded", () => {
  renderUserBlock("Vladimir", "www.google.com", 0);
  renderSearchFormBlock(new Date(), new Date());
  renderSearchStubBlock();
  renderToast(
    {
      text: "Это пример уведомления. Используйте его при необходимости",
      type: "success",
    },
    {
      name: "Понял",
      handler: () => {
        console.log("Уведомление закрыто");
      },
    }
  );
});
