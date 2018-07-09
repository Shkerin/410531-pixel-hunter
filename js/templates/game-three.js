// Экран третьей игры

import {drawBlock, getElementFromTemplate} from '../utilites-DOM';
import stats from './stats.js';
import gameTwo from './game-two';
import getHeaderTemplate from './header';
import getFooterTemplate from './footer';
import {initialState, questions} from '../data';

const gameThreeElem = getElementFromTemplate(`
  ${getHeaderTemplate(initialState)}
  <div class="game">
    <p class="game__task">${questions[`question-` + initialState.question].text}</p>
    <form class="game__content  game__content--triple">
      <div class="game__option">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option  game__option--selected">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
      </div>
    </form>
    <div class="stats">
      <ul class="stats">
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--correct"></li>
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--unknown"></li>
      </ul>
    </div>
  </div>
  ${getFooterTemplate()}`);

gameThreeElem.querySelectorAll(`.game__option`).forEach((el) => {
  el.addEventListener(`click`, () => {
    drawBlock(stats);
  });
});

const backElem = gameThreeElem.querySelector(`.back`);
backElem.addEventListener(`click`, () => drawBlock(gameTwo));

export default gameThreeElem;
