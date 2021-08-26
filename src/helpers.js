export function uiStatus(uiStatesObj) {
  const arrOfUIStates = Object.entries(uiStatesObj);
  return !arrOfUIStates.map((el) => el[1]).includes(true);
}

export function formatTimer(time) {
  if (time < 10) return `00:0${time}`;
  if (time < 60) return `00:${time}`;
  const module = time % 60;
  const minutes = (time - module) / 60;
  const seconds = module < 10 ? `0${module}` : `${module}`;
  return `0${minutes}:${seconds}`;
}
