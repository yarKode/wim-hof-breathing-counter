export const MIN_COUNT = 5;
export const MIN_1ST_PHASE_BREATHE = 4;
export const MIN_2ND_PHASE_BREATHE = 3;

export const PROMPTS = [
  `๐ง Breathe In and Breathe Out. Tap on '+' each cycle. When ready to finish - make last one deep Breathe In, Stop on Exhale and tap Next`,
  `โณ Hold for 1 minute at least and until you feel the urge to breathe. When you are ready - Fully In, Hold and tap Next`,
  `โฑ Hold 10-15 seconds. No more needed. When finish - Exhale and tap Next`,
  `๐Well Done! Round finished ๐. To start new one - tap on Start Round below ๐ช`,
];

export const TITLES = {
  title: "Wim Hof's Guided Breathing Assistant",
  subtitle:
    "Count Your Breathing Cycles, Time between Steps and Rounds at one place.",
};

export const INIT_STATE = {
  count: 0,
  timer1: 0,
  timer2: 0,
  enabledUI: {
    counter: true,
    counterNext: true,
    timer1Display: false,
    timer1NextBtn: false,
    timer2Display: false,
    timer2NextBtn: false,
  },
  resetBtn: "Reset", //'StartNew',
  hideButtons: false,
  phase: 0,
  prompt: "",
  round: 1,
};

export const CTA = [
  {
    title: "Try Free Breathing Assistant",
    btnText: "Use Assistant",
    linkTo: "/assistant",
  },
  { title: "Watch a Quick Guide", btnText: "Watch Video", linkTo: "/video" },
];
/*`Breathe in, into the belly, into the chest and Breathe out. Like a wave. Tap on + Button each cycle` ,
  `When ready to finish - make last one deep Breathe In and on Exhale - stop and Tap on Next`,
  `Hold for 1 minute at least. Button Next will become available after 1 minute`,
  `Continue to hold until you feel the urge to breathe. When you are ready - Fully In, Hold and tap Next`,
  `Hold 10-15 seconds. No more needed. When finish - Exhale and tap Next`,
  `Well Done! Round finished. To start new one - tap on Start Round below`,*/
