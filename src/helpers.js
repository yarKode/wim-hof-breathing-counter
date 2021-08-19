export function uiStatus(uiStatesObj) {
  const arrOfUIStates = Object.entries(uiStatesObj);
  return !arrOfUIStates.map((el) => el[1]).includes(true);
}
