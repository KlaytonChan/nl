/******************* 
 * Numberline *
 *******************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2026.1.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'numberline';  // from the Builder filename that created this script
let expInfo = {
    '班別學號 (e.g., 1a01)': '',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color('white'),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instructRoutineBegin());
flowScheduler.add(instructRoutineEachFrame());
flowScheduler.add(instructRoutineEnd());
flowScheduler.add(blank1000RoutineBegin());
flowScheduler.add(blank1000RoutineEachFrame());
flowScheduler.add(blank1000RoutineEnd());
const learningLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(learningLoopBegin(learningLoopScheduler));
flowScheduler.add(learningLoopScheduler);
flowScheduler.add(learningLoopEnd);



flowScheduler.add(instruct2RoutineBegin());
flowScheduler.add(instruct2RoutineEachFrame());
flowScheduler.add(instruct2RoutineEnd());
flowScheduler.add(blank1000RoutineBegin());
flowScheduler.add(blank1000RoutineEachFrame());
flowScheduler.add(blank1000RoutineEnd());
const testloopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(testloopLoopBegin(testloopLoopScheduler));
flowScheduler.add(testloopLoopScheduler);
flowScheduler.add(testloopLoopEnd);



flowScheduler.add(thankRoutineBegin());
flowScheduler.add(thankRoutineEachFrame());
flowScheduler.add(thankRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'nl/nlprac.csv', 'path': 'nl/nlprac.csv'},
    {'name': 'nl/nltest.csv', 'path': 'nl/nltest.csv'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2026.1.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["\u73ed\u5225\u5b78\u865f (e.g., 1a01)"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var instructClock;
var instruction;
var ok_button;
var blank1000Clock;
var blank1000text;
var preClock;
var numberline;
var zero;
var thousand;
var textbox;
var ok_button_4;
var blank500Clock;
var blank500text;
var instruct2Clock;
var instruction_2;
var ok_button_2;
var testClock;
var numberline_2;
var zero_2;
var thousand_2;
var textbox_2;
var ok_button_5;
var thankClock;
var instruction_3;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instruct"
  instructClock = new util.Clock();
  instruction = new visual.TextBox({
    win: psychoJS.window,
    name: 'instruction',
    text: '接下來，你會看見螢幕上有一條橫線。\n橫線的最左邊是0，最右邊是1000。\n此外，螢幕中間也會出現一個在0和1000之間的數字。\n請用最快速度將手指點在你認為數字在橫線上的位置。\n\n現在有三題練習題讓你熟悉測試內容。\n準備好後按 “OK” 按鈕即可開始。\n',
    placeholder: 'Type here...',
    font: 'Noto Sans TC',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [1, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  ok_button = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'ok_button',
    text: 'OK',
    font: 'Noto Sans TC',
    pos: [0.45, (- 0.35)],
    size: [0.2, 0.1],
    padding: 0.0,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'aliceblue',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.04,
    bold: false,
    italic: false,
  });
  ok_button.clock = new util.Clock();
  
  // Initialize components for Routine "blank1000"
  blank1000Clock = new util.Clock();
  blank1000text = new visual.TextBox({
    win: psychoJS.window,
    name: 'blank1000text',
    text: '…',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  // Initialize components for Routine "pre"
  preClock = new util.Clock();
  numberline = new visual.Slider({
    win: psychoJS.window, name: 'numberline',
    startValue: undefined,
    size: [0.85, 0.01], pos: [0, (- 0.21)], ori: 0.0, units: psychoJS.window.units,
    labels: undefined, fontSize: 0.05, ticks: [0, 1000],
    granularity: 0.0, style: ["SLIDER"],
    color: new util.Color('silver'), markerColor: new util.Color('Red'), lineColor: new util.Color('silver'), 
    opacity: 1.0, fontFamily: 'Noto Sans', bold: true, italic: false, depth: 0, 
    flip: false,
  });
  
  zero = new visual.TextBox({
    win: psychoJS.window,
    name: 'zero',
    text: '0    ',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.45), (- 0.2)], 
    draggable: false,
    letterHeight: 0.07,
    lineSpacing: 1.0,
    size: [1, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  thousand = new visual.TextBox({
    win: psychoJS.window,
    name: 'thousand',
    text: '1000',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0.51, (- 0.2)], 
    draggable: false,
    letterHeight: 0.07,
    lineSpacing: 1.0,
    size: [1, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  textbox = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0.2], 
    draggable: false,
    letterHeight: 0.1,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  ok_button_4 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'ok_button_4',
    text: 'OK',
    font: 'Noto Sans TC',
    pos: [0.45, (- 0.35)],
    size: [0.2, 0.1],
    padding: 0.0,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'aliceblue',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -4,
    letterHeight: 0.04,
    bold: false,
    italic: false,
  });
  ok_button_4.clock = new util.Clock();
  
  // Initialize components for Routine "blank500"
  blank500Clock = new util.Clock();
  blank500text = new visual.TextBox({
    win: psychoJS.window,
    name: 'blank500text',
    text: '…',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  // Initialize components for Routine "instruct2"
  instruct2Clock = new util.Clock();
  instruction_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'instruction_2',
    text: '接下來，你會看見螢幕上有一條橫線。\n橫線的最左邊是0，最右邊是1000。\n此外，螢幕中間也會出現一個在0和1000之間的數字。\n請用最快速度將手指點在你認為數字在橫線上的位置。\n\n測試共有二十題，\n準備好後按 “OK” 按鈕即可開始。\n',
    placeholder: 'Type here...',
    font: 'Noto Sans TC',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [1, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  ok_button_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'ok_button_2',
    text: 'OK',
    font: 'Noto Sans TC',
    pos: [0.45, (- 0.35)],
    size: [0.2, 0.1],
    padding: 0.0,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'aliceblue',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.04,
    bold: false,
    italic: false,
  });
  ok_button_2.clock = new util.Clock();
  
  // Initialize components for Routine "test"
  testClock = new util.Clock();
  numberline_2 = new visual.Slider({
    win: psychoJS.window, name: 'numberline_2',
    startValue: undefined,
    size: [0.85, 0.01], pos: [0, (- 0.2)], ori: 0.0, units: psychoJS.window.units,
    labels: undefined, fontSize: 0.05, ticks: [0, 1000],
    granularity: 0.0, style: ["SLIDER"],
    color: new util.Color('silver'), markerColor: new util.Color('Red'), lineColor: new util.Color('silver'), 
    opacity: 1.0, fontFamily: 'Noto Sans', bold: true, italic: false, depth: 0, 
    flip: false,
  });
  
  zero_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'zero_2',
    text: '0    ',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.45), (- 0.2)], 
    draggable: false,
    letterHeight: 0.07,
    lineSpacing: 1.0,
    size: [1, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  thousand_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'thousand_2',
    text: '1000',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0.51, (- 0.2)], 
    draggable: false,
    letterHeight: 0.07,
    lineSpacing: 1.0,
    size: [1, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  textbox_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_2',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0.2], 
    draggable: false,
    letterHeight: 0.1,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  ok_button_5 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'ok_button_5',
    text: 'OK',
    font: 'Noto Sans TC',
    pos: [0.45, (- 0.35)],
    size: [0.2, 0.1],
    padding: 0.0,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'aliceblue',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -4,
    letterHeight: 0.04,
    bold: false,
    italic: false,
  });
  ok_button_5.clock = new util.Clock();
  
  // Initialize components for Routine "thank"
  thankClock = new util.Clock();
  instruction_3 = new visual.TextBox({
    win: psychoJS.window,
    name: 'instruction_3',
    text: '恭喜你！你已完成數線測量部分之測試。\n請不要離開頁面，等待下一步指示。\n',
    placeholder: 'Type here...',
    font: 'Noto Sans TC',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [1, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var instructMaxDurationReached;
var instructMaxDuration;
var instructComponents;
function instructRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruct' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instructClock.reset();
    routineTimer.reset();
    instructMaxDurationReached = false;
    // update component parameters for each repeat
    // reset ok_button to account for continued clicks & clear times on/off
    ok_button.reset()
    psychoJS.experiment.addData('instruct.started', globalClock.getTime());
    instructMaxDuration = null
    // keep track of which components have finished
    instructComponents = [];
    instructComponents.push(instruction);
    instructComponents.push(ok_button);
    
    for (const thisComponent of instructComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruct' ---
    // get current time
    t = instructClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction* updates
    if (t >= 0.0 && instruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction.tStart = t;  // (not accounting for frame time here)
      instruction.frameNStart = frameN;  // exact frame index
      
      instruction.setAutoDraw(true);
    }
    
    
    // if instruction is active this frame...
    if (instruction.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *ok_button* updates
    if (t >= 0 && ok_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ok_button.tStart = t;  // (not accounting for frame time here)
      ok_button.frameNStart = frameN;  // exact frame index
      
      ok_button.setAutoDraw(true);
    }
    
    
    // if ok_button is active this frame...
    if (ok_button.status === PsychoJS.Status.STARTED) {
    }
    
    if (ok_button.status === PsychoJS.Status.STARTED) {
      // check whether ok_button has been pressed
      if (ok_button.isClicked) {
        if (!ok_button.wasClicked) {
          // store time of first click
          ok_button.timesOn.push(ok_button.clock.getTime());
          // store time clicked until
          ok_button.timesOff.push(ok_button.clock.getTime());
        } else {
          // update time clicked until;
          ok_button.timesOff[ok_button.timesOff.length - 1] = ok_button.clock.getTime();
        }
        if (!ok_button.wasClicked) {
          // end routine when ok_button is clicked
          continueRoutine = false;
          
        }
        // if ok_button is still clicked next frame, it is not a new click
        ok_button.wasClicked = true;
      } else {
        // if ok_button is clicked next frame, it is a new click
        ok_button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if ok_button hasn't started / has finished
      ok_button.clock.reset();
      // if ok_button is clicked next frame, it is a new click
      ok_button.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruct' ---
    for (const thisComponent of instructComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instruct.stopped', globalClock.getTime());
    psychoJS.experiment.addData('ok_button.numClicks', ok_button.numClicks);
    psychoJS.experiment.addData('ok_button.timesOn', ok_button.timesOn);
    psychoJS.experiment.addData('ok_button.timesOff', ok_button.timesOff);
    // the Routine "instruct" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var blank1000MaxDurationReached;
var blank1000MaxDuration;
var blank1000Components;
function blank1000RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'blank1000' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    blank1000Clock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    blank1000MaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('blank1000.started', globalClock.getTime());
    blank1000MaxDuration = null
    // keep track of which components have finished
    blank1000Components = [];
    blank1000Components.push(blank1000text);
    
    for (const thisComponent of blank1000Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function blank1000RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'blank1000' ---
    // get current time
    t = blank1000Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *blank1000text* updates
    if (t >= 0.0 && blank1000text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blank1000text.tStart = t;  // (not accounting for frame time here)
      blank1000text.frameNStart = frameN;  // exact frame index
      
      blank1000text.setAutoDraw(true);
    }
    
    
    // if blank1000text is active this frame...
    if (blank1000text.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (blank1000text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      blank1000text.tStop = t;  // not accounting for scr refresh
      blank1000text.frameNStop = frameN;  // exact frame index
      // update status
      blank1000text.status = PsychoJS.Status.FINISHED;
      blank1000text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of blank1000Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function blank1000RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'blank1000' ---
    for (const thisComponent of blank1000Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('blank1000.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (blank1000MaxDurationReached) {
        blank1000Clock.add(blank1000MaxDuration);
    } else {
        blank1000Clock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var learning;
function learningLoopBegin(learningLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    learning = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'nl/nlprac.csv',
      seed: undefined, name: 'learning'
    });
    psychoJS.experiment.addLoop(learning); // add the loop to the experiment
    currentLoop = learning;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisLearning of learning) {
      snapshot = learning.getSnapshot();
      learningLoopScheduler.add(importConditions(snapshot));
      learningLoopScheduler.add(preRoutineBegin(snapshot));
      learningLoopScheduler.add(preRoutineEachFrame());
      learningLoopScheduler.add(preRoutineEnd(snapshot));
      learningLoopScheduler.add(blank500RoutineBegin(snapshot));
      learningLoopScheduler.add(blank500RoutineEachFrame());
      learningLoopScheduler.add(blank500RoutineEnd(snapshot));
      learningLoopScheduler.add(learningLoopEndIteration(learningLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function learningLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(learning);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function learningLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var testloop;
function testloopLoopBegin(testloopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    testloop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'nl/nltest.csv',
      seed: undefined, name: 'testloop'
    });
    psychoJS.experiment.addLoop(testloop); // add the loop to the experiment
    currentLoop = testloop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTestloop of testloop) {
      snapshot = testloop.getSnapshot();
      testloopLoopScheduler.add(importConditions(snapshot));
      testloopLoopScheduler.add(testRoutineBegin(snapshot));
      testloopLoopScheduler.add(testRoutineEachFrame());
      testloopLoopScheduler.add(testRoutineEnd(snapshot));
      testloopLoopScheduler.add(blank500RoutineBegin(snapshot));
      testloopLoopScheduler.add(blank500RoutineEachFrame());
      testloopLoopScheduler.add(blank500RoutineEnd(snapshot));
      testloopLoopScheduler.add(testloopLoopEndIteration(testloopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function testloopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(testloop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function testloopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var preMaxDurationReached;
var preMaxDuration;
var preComponents;
function preRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'pre' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    preClock.reset();
    routineTimer.reset();
    preMaxDurationReached = false;
    // update component parameters for each repeat
    numberline.reset()
    textbox.setText(number);
    // reset ok_button_4 to account for continued clicks & clear times on/off
    ok_button_4.reset()
    psychoJS.experiment.addData('pre.started', globalClock.getTime());
    preMaxDuration = null
    // keep track of which components have finished
    preComponents = [];
    preComponents.push(numberline);
    preComponents.push(zero);
    preComponents.push(thousand);
    preComponents.push(textbox);
    preComponents.push(ok_button_4);
    
    for (const thisComponent of preComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function preRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'pre' ---
    // get current time
    t = preClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *numberline* updates
    if (t >= 0.0 && numberline.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      numberline.tStart = t;  // (not accounting for frame time here)
      numberline.frameNStart = frameN;  // exact frame index
      
      numberline.setAutoDraw(true);
    }
    
    
    // if numberline is active this frame...
    if (numberline.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *zero* updates
    if (t >= 0.0 && zero.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      zero.tStart = t;  // (not accounting for frame time here)
      zero.frameNStart = frameN;  // exact frame index
      
      zero.setAutoDraw(true);
    }
    
    
    // if zero is active this frame...
    if (zero.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *thousand* updates
    if (t >= 0.0 && thousand.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thousand.tStart = t;  // (not accounting for frame time here)
      thousand.frameNStart = frameN;  // exact frame index
      
      thousand.setAutoDraw(true);
    }
    
    
    // if thousand is active this frame...
    if (thousand.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *textbox* updates
    if (t >= 0.0 && textbox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox.tStart = t;  // (not accounting for frame time here)
      textbox.frameNStart = frameN;  // exact frame index
      
      textbox.setAutoDraw(true);
    }
    
    
    // if textbox is active this frame...
    if (textbox.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *ok_button_4* updates
    if (t >= 0 && ok_button_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ok_button_4.tStart = t;  // (not accounting for frame time here)
      ok_button_4.frameNStart = frameN;  // exact frame index
      
      ok_button_4.setAutoDraw(true);
    }
    
    
    // if ok_button_4 is active this frame...
    if (ok_button_4.status === PsychoJS.Status.STARTED) {
    }
    
    if (ok_button_4.status === PsychoJS.Status.STARTED) {
      // check whether ok_button_4 has been pressed
      if (ok_button_4.isClicked) {
        if (!ok_button_4.wasClicked) {
          // store time of first click
          ok_button_4.timesOn.push(ok_button_4.clock.getTime());
          // store time clicked until
          ok_button_4.timesOff.push(ok_button_4.clock.getTime());
        } else {
          // update time clicked until;
          ok_button_4.timesOff[ok_button_4.timesOff.length - 1] = ok_button_4.clock.getTime();
        }
        if (!ok_button_4.wasClicked) {
          // end routine when ok_button_4 is clicked
          continueRoutine = false;
          
        }
        // if ok_button_4 is still clicked next frame, it is not a new click
        ok_button_4.wasClicked = true;
      } else {
        // if ok_button_4 is clicked next frame, it is a new click
        ok_button_4.wasClicked = false;
      }
    } else {
      // keep clock at 0 if ok_button_4 hasn't started / has finished
      ok_button_4.clock.reset();
      // if ok_button_4 is clicked next frame, it is a new click
      ok_button_4.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of preComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function preRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'pre' ---
    for (const thisComponent of preComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('pre.stopped', globalClock.getTime());
    psychoJS.experiment.addData('numberline.response', numberline.getRating());
    psychoJS.experiment.addData('ok_button_4.numClicks', ok_button_4.numClicks);
    psychoJS.experiment.addData('ok_button_4.timesOn', ok_button_4.timesOn);
    psychoJS.experiment.addData('ok_button_4.timesOff', ok_button_4.timesOff);
    // the Routine "pre" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var blank500MaxDurationReached;
var blank500MaxDuration;
var blank500Components;
function blank500RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'blank500' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    blank500Clock.reset(routineTimer.getTime());
    routineTimer.add(0.500000);
    blank500MaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('blank500.started', globalClock.getTime());
    blank500MaxDuration = null
    // keep track of which components have finished
    blank500Components = [];
    blank500Components.push(blank500text);
    
    for (const thisComponent of blank500Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function blank500RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'blank500' ---
    // get current time
    t = blank500Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *blank500text* updates
    if (t >= 0.0 && blank500text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blank500text.tStart = t;  // (not accounting for frame time here)
      blank500text.frameNStart = frameN;  // exact frame index
      
      blank500text.setAutoDraw(true);
    }
    
    
    // if blank500text is active this frame...
    if (blank500text.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (blank500text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      blank500text.tStop = t;  // not accounting for scr refresh
      blank500text.frameNStop = frameN;  // exact frame index
      // update status
      blank500text.status = PsychoJS.Status.FINISHED;
      blank500text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of blank500Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function blank500RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'blank500' ---
    for (const thisComponent of blank500Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('blank500.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (blank500MaxDurationReached) {
        blank500Clock.add(blank500MaxDuration);
    } else {
        blank500Clock.add(0.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instruct2MaxDurationReached;
var instruct2MaxDuration;
var instruct2Components;
function instruct2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruct2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instruct2Clock.reset();
    routineTimer.reset();
    instruct2MaxDurationReached = false;
    // update component parameters for each repeat
    // reset ok_button_2 to account for continued clicks & clear times on/off
    ok_button_2.reset()
    psychoJS.experiment.addData('instruct2.started', globalClock.getTime());
    instruct2MaxDuration = null
    // keep track of which components have finished
    instruct2Components = [];
    instruct2Components.push(instruction_2);
    instruct2Components.push(ok_button_2);
    
    for (const thisComponent of instruct2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instruct2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruct2' ---
    // get current time
    t = instruct2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction_2* updates
    if (t >= 0.0 && instruction_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_2.tStart = t;  // (not accounting for frame time here)
      instruction_2.frameNStart = frameN;  // exact frame index
      
      instruction_2.setAutoDraw(true);
    }
    
    
    // if instruction_2 is active this frame...
    if (instruction_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *ok_button_2* updates
    if (t >= 0 && ok_button_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ok_button_2.tStart = t;  // (not accounting for frame time here)
      ok_button_2.frameNStart = frameN;  // exact frame index
      
      ok_button_2.setAutoDraw(true);
    }
    
    
    // if ok_button_2 is active this frame...
    if (ok_button_2.status === PsychoJS.Status.STARTED) {
    }
    
    if (ok_button_2.status === PsychoJS.Status.STARTED) {
      // check whether ok_button_2 has been pressed
      if (ok_button_2.isClicked) {
        if (!ok_button_2.wasClicked) {
          // store time of first click
          ok_button_2.timesOn.push(ok_button_2.clock.getTime());
          // store time clicked until
          ok_button_2.timesOff.push(ok_button_2.clock.getTime());
        } else {
          // update time clicked until;
          ok_button_2.timesOff[ok_button_2.timesOff.length - 1] = ok_button_2.clock.getTime();
        }
        if (!ok_button_2.wasClicked) {
          // end routine when ok_button_2 is clicked
          continueRoutine = false;
          
        }
        // if ok_button_2 is still clicked next frame, it is not a new click
        ok_button_2.wasClicked = true;
      } else {
        // if ok_button_2 is clicked next frame, it is a new click
        ok_button_2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if ok_button_2 hasn't started / has finished
      ok_button_2.clock.reset();
      // if ok_button_2 is clicked next frame, it is a new click
      ok_button_2.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instruct2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruct2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruct2' ---
    for (const thisComponent of instruct2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instruct2.stopped', globalClock.getTime());
    psychoJS.experiment.addData('ok_button_2.numClicks', ok_button_2.numClicks);
    psychoJS.experiment.addData('ok_button_2.timesOn', ok_button_2.timesOn);
    psychoJS.experiment.addData('ok_button_2.timesOff', ok_button_2.timesOff);
    // the Routine "instruct2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var testMaxDurationReached;
var testMaxDuration;
var testComponents;
function testRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'test' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    testClock.reset();
    routineTimer.reset();
    testMaxDurationReached = false;
    // update component parameters for each repeat
    numberline_2.reset()
    textbox_2.setText(number);
    // reset ok_button_5 to account for continued clicks & clear times on/off
    ok_button_5.reset()
    psychoJS.experiment.addData('test.started', globalClock.getTime());
    testMaxDuration = null
    // keep track of which components have finished
    testComponents = [];
    testComponents.push(numberline_2);
    testComponents.push(zero_2);
    testComponents.push(thousand_2);
    testComponents.push(textbox_2);
    testComponents.push(ok_button_5);
    
    for (const thisComponent of testComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function testRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'test' ---
    // get current time
    t = testClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *numberline_2* updates
    if (t >= 0.0 && numberline_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      numberline_2.tStart = t;  // (not accounting for frame time here)
      numberline_2.frameNStart = frameN;  // exact frame index
      
      numberline_2.setAutoDraw(true);
    }
    
    
    // if numberline_2 is active this frame...
    if (numberline_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *zero_2* updates
    if (t >= 0.0 && zero_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      zero_2.tStart = t;  // (not accounting for frame time here)
      zero_2.frameNStart = frameN;  // exact frame index
      
      zero_2.setAutoDraw(true);
    }
    
    
    // if zero_2 is active this frame...
    if (zero_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *thousand_2* updates
    if (t >= 0.0 && thousand_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thousand_2.tStart = t;  // (not accounting for frame time here)
      thousand_2.frameNStart = frameN;  // exact frame index
      
      thousand_2.setAutoDraw(true);
    }
    
    
    // if thousand_2 is active this frame...
    if (thousand_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *textbox_2* updates
    if (t >= 0.0 && textbox_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_2.tStart = t;  // (not accounting for frame time here)
      textbox_2.frameNStart = frameN;  // exact frame index
      
      textbox_2.setAutoDraw(true);
    }
    
    
    // if textbox_2 is active this frame...
    if (textbox_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *ok_button_5* updates
    if (t >= 0 && ok_button_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ok_button_5.tStart = t;  // (not accounting for frame time here)
      ok_button_5.frameNStart = frameN;  // exact frame index
      
      ok_button_5.setAutoDraw(true);
    }
    
    
    // if ok_button_5 is active this frame...
    if (ok_button_5.status === PsychoJS.Status.STARTED) {
    }
    
    if (ok_button_5.status === PsychoJS.Status.STARTED) {
      // check whether ok_button_5 has been pressed
      if (ok_button_5.isClicked) {
        if (!ok_button_5.wasClicked) {
          // store time of first click
          ok_button_5.timesOn.push(ok_button_5.clock.getTime());
          // store time clicked until
          ok_button_5.timesOff.push(ok_button_5.clock.getTime());
        } else {
          // update time clicked until;
          ok_button_5.timesOff[ok_button_5.timesOff.length - 1] = ok_button_5.clock.getTime();
        }
        if (!ok_button_5.wasClicked) {
          // end routine when ok_button_5 is clicked
          continueRoutine = false;
          
        }
        // if ok_button_5 is still clicked next frame, it is not a new click
        ok_button_5.wasClicked = true;
      } else {
        // if ok_button_5 is clicked next frame, it is a new click
        ok_button_5.wasClicked = false;
      }
    } else {
      // keep clock at 0 if ok_button_5 hasn't started / has finished
      ok_button_5.clock.reset();
      // if ok_button_5 is clicked next frame, it is a new click
      ok_button_5.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of testComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function testRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'test' ---
    for (const thisComponent of testComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('test.stopped', globalClock.getTime());
    psychoJS.experiment.addData('numberline_2.response', numberline_2.getRating());
    psychoJS.experiment.addData('ok_button_5.numClicks', ok_button_5.numClicks);
    psychoJS.experiment.addData('ok_button_5.timesOn', ok_button_5.timesOn);
    psychoJS.experiment.addData('ok_button_5.timesOff', ok_button_5.timesOff);
    // the Routine "test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var thankMaxDurationReached;
var thankMaxDuration;
var thankComponents;
function thankRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'thank' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    thankClock.reset(routineTimer.getTime());
    routineTimer.add(10.000000);
    thankMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('thank.started', globalClock.getTime());
    thankMaxDuration = null
    // keep track of which components have finished
    thankComponents = [];
    thankComponents.push(instruction_3);
    
    for (const thisComponent of thankComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function thankRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'thank' ---
    // get current time
    t = thankClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction_3* updates
    if (t >= 0.0 && instruction_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_3.tStart = t;  // (not accounting for frame time here)
      instruction_3.frameNStart = frameN;  // exact frame index
      
      instruction_3.setAutoDraw(true);
    }
    
    
    // if instruction_3 is active this frame...
    if (instruction_3.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (instruction_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      instruction_3.tStop = t;  // not accounting for scr refresh
      instruction_3.frameNStop = frameN;  // exact frame index
      // update status
      instruction_3.status = PsychoJS.Status.FINISHED;
      instruction_3.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of thankComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function thankRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'thank' ---
    for (const thisComponent of thankComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('thank.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (thankMaxDurationReached) {
        thankClock.add(thankMaxDuration);
    } else {
        thankClock.add(10.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
