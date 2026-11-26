/* ==========================================================================
   1. BASE DE DONNÉES PÉDAGOGIQUE (16 TEMPS & STRUCTURES + VERBES + QUESTIONS)
   ========================================================================== */

const TENSES = [
  // PRÉSENT (4)
  {
    id: "present_simple",
    name: "Present Simple",
    category: "present",
    level: "A1-A2",
    frEquiv: "Présent d'habitude / vérité générale",
    usage: "Habitudes, routines, faits permanents, vérités générales.",
    markers: "always, usually, often, every day, never",
    aff: "Sujet + Base verbale (+ -s à he/she/it)",
    neg: "Sujet + do/does not + Base verbale",
    inter: "Do/Does + Sujet + Base verbale ?",
    exEn: "She works in a bank every day.",
    exFr: "Elle travaille dans une banque tous les jours."
  },
  {
    id: "present_continuous",
    name: "Present Continuous",
    category: "present",
    level: "A1-A2",
    frEquiv: "Être en train de + infinitif",
    usage: "Action en cours au moment où l'on parle ou situation temporaire.",
    markers: "now, right now, at the moment, Look!, Listen!",
    aff: "Sujet + am/is/are + Verbe-ing",
    neg: "Sujet + am/is/are not + Verbe-ing",
    inter: "Am/Is/Are + Sujet + Verbe-ing ?",
    exEn: "They are studying English right now.",
    exFr: "Ils sont en train d'étudier l'anglais en ce moment."
  },
  {
    id: "present_perfect_simple",
    name: "Present Perfect Simple",
    category: "present",
    level: "B1-B2",
    frEquiv: "Passé composé (bilan) / Présent avec depuis",
    usage: "Action passée ayant un impact sur le présent, expérience de vie ou durée jusqu'à maintenant.",
    markers: "already, yet, just, ever, never, since, for",
    aff: "Sujet + have/has + Participe passé",
    neg: "Sujet + have/has not + Participe passé",
    inter: "Have/Has + Sujet + Participe passé ?",
    exEn: "I have already finished my report.",
    exFr: "J'ai déjà terminé mon rapport."
  },
  {
    id: "present_perfect_continuous",
    name: "Present Perfect Continuous",
    category: "present",
    level: "B1-B2",
    frEquiv: "Présent / passé composé avec depuis (durée active)",
    usage: "Insiste sur la durée ou l'activité continue commencée dans le passé et qui dure encore.",
    markers: "for two hours, since morning, how long, all day",
    aff: "Sujet + have/has been + Verbe-ing",
    neg: "Sujet + have/has not been + Verbe-ing",
    inter: "Have/Has + Sujet + been + Verbe-ing ?",
    exEn: "We have been waiting for two hours.",
    exFr: "Nous attendons depuis deux heures."
  },

  // PASSÉ (5)
  {
    id: "past_simple",
    name: "Past Simple (Prétérit)",
    category: "past",
    level: "A1-A2",
    frEquiv: "Passé composé / Passé simple / Imparfait d'habitude",
    usage: "Action terminée et datée dans le passé, sans lien avec le présent.",
    markers: "yesterday, last week, in 2020, two days ago",
    aff: "Sujet + Verbe-ed ou 2e colonne irrégulière",
    neg: "Sujet + did not (didn't) + Base verbale",
    inter: "Did + Sujet + Base verbale ?",
    exEn: "He bought a new car yesterday.",
    exFr: "Il a acheté une nouvelle voiture hier."
  },
  {
    id: "past_continuous",
    name: "Past Continuous",
    category: "past",
    level: "A1-A2",
    frEquiv: "Imparfait (action en cours dans le passé)",
    usage: "Action en progression dans le passé, souvent interrompue par une action au Past Simple.",
    markers: "while, when, at 8 PM yesterday",
    aff: "Sujet + was/were + Verbe-ing",
    neg: "Sujet + was/were not + Verbe-ing",
    inter: "Was/Were + Sujet + Verbe-ing ?",
    exEn: "I was cooking when the phone rang.",
    exFr: "Je cuisinais quand le téléphone a sonné."
  },
  {
    id: "past_perfect_simple",
    name: "Past Perfect Simple",
    category: "past",
    level: "B1-B2",
    frEquiv: "Plus-que-parfait",
    usage: "Action passée survenue avant une autre action passée.",
    markers: "before, after, already, by the time",
    aff: "Sujet + had + Participe passé",
    neg: "Sujet + had not (hadn't) + Participe passé",
    inter: "Had + Sujet + Participe passé ?",
    exEn: "The train had left before we arrived.",
    exFr: "Le train était parti avant notre arrivée."
  },
  {
    id: "past_perfect_continuous",
    name: "Past Perfect Continuous",
    category: "past",
    level: "C1",
    frEquiv: "Plus-que-parfait (durée avant un fait passé)",
    usage: "Durée d'une action continue avant un moment précis du passé.",
    markers: "for hours before, since, all morning before",
    aff: "Sujet + had been + Verbe-ing",
    neg: "Sujet + had not been + Verbe-ing",
    inter: "Had + Sujet + been + Verbe-ing ?",
    exEn: "She had been running for an hour when it started to rain.",
    exFr: "Elle courait depuis une heure quand il a commencé à pleuvoir."
  },
  {
    id: "used_to",
    name: "Used to (Habitude révolue)",
    category: "past",
    level: "B1-B2",
    frEquiv: "Imparfait + autrefois / avoir l'habitude de",
    usage: "Habitude ou état passé qui n'est plus vrai aujourd'hui.",
    markers: "when I was a child, in the past, years ago",
    aff: "Sujet + used to + Base verbale",
    neg: "Sujet + didn't use to + Base verbale",
    inter: "Did + Sujet + use to + Base verbale ?",
    exEn: "I used to live in Lille.",
    exFr: "J'habitais à Lille autrefois."
  },

  // FUTUR (4)
  {
    id: "future_will",
    name: "Future Simple (Will)",
    category: "future",
    level: "A1-A2",
    frEquiv: "Futur simple (décision spontanée / prédiction)",
    usage: "Décision prise sur le moment, promesse, offre ou prédiction.",
    markers: "tomorrow, next year, I think, probably",
    aff: "Sujet + will + Base verbale",
    neg: "Sujet + will not (won't) + Base verbale",
    inter: "Will + Sujet + Base verbale ?",
    exEn: "I will help you carry those bags.",
    exFr: "Je vais t'aider à porter ces sacs."
  },
  {
    id: "future_going_to",
    name: "Future (Be going to)",
    category: "future",
    level: "A1-A2",
    frEquiv: "Futur proche (aller + infinitif)",
    usage: "Intention déjà planifiée ou prédiction basée sur un indice visible.",
    markers: "next weekend, tonight, Look at those clouds!",
    aff: "Sujet + am/is/are going to + Base verbale",
    neg: "Sujet + am/is/are not going to + Base verbale",
    inter: "Am/Is/Are + Sujet + going to + Base verbale ?",
    exEn: "We are going to visit London next month.",
    exFr: "Nous allons visiter Londres le mois prochain."
  },
  {
    id: "future_continuous",
    name: "Future Continuous",
    category: "future",
    level: "B1-B2",
    frEquiv: "Futur simple (action en cours à un moment futur)",
    usage: "Action qui sera en train de se dérouler à un instant précis du futur.",
    markers: "this time tomorrow, at 8 PM tonight",
    aff: "Sujet + will be + Verbe-ing",
    neg: "Sujet + won't be + Verbe-ing",
    inter: "Will + Sujet + be + Verbe-ing ?",
    exEn: "This time tomorrow, I will be flying to Madrid.",
    exFr: "Demain à la même heure, je serai en train de voler vers Madrid."
  },
  {
    id: "future_perfect",
    name: "Future Perfect",
    category: "future",
    level: "C1",
    frEquiv: "Futur antérieur",
    usage: "Action qui sera déjà achevée avant une échéance future.",
    markers: "by Friday, by 2030, by the time you arrive",
    aff: "Sujet + will have + Participe passé",
    neg: "Sujet + won't have + Participe passé",
    inter: "Will + Sujet + have + Participe passé ?",
    exEn: "By Friday, they will have completed the project.",
    exFr: "D'ici vendredi, ils auront terminé le projet."
  },

  // AVANCÉ (3)
  {
    id: "conditionals",
    name: "Conditionals (Type 1, 2 & 3)",
    category: "advanced",
    level: "B1-B2",
    frEquiv: "Hypothèses (Présent/Futur, Imparfait/Cond., Plus-que-parfait/Cond. passé)",
    usage: "1: Réel (If + Present, will) | 2: Irréel présent (If + Past, would) | 3: Irréel passé (If + Past Perfect, would have).",
    markers: "if, unless, provided that",
    aff: "If + Past Simple, Sujet + would + Base verbale",
    neg: "If + didn't + BV, Sujet + wouldn't + BV",
    inter: "What would you do if + Past Simple ?",
    exEn: "If I had known, I would have called you.",
    exFr: "Si j'avais su, je t'aurais appelé."
  },
  {
    id: "modals",
    name: "Modaux (Présent & Passé)",
    category: "advanced",
    level: "B1-B2",
    frEquiv: "Pouvoir, devoir, il se peut que, n'aurait pas dû",
    usage: "Invariables, sans -s ni 'to'. Au passé : modal + have + participe passé.",
    markers: "can, could, must, should, might, must have",
    aff: "Sujet + Modal + Base verbale (ou have + PP)",
    neg: "Sujet + Modal + not + Base verbale",
    inter: "Modal + Sujet + Base verbale ?",
    exEn: "You should have told me earlier.",
    exFr: "Tu aurais dû me le dire plus tôt."
  },
  {
    id: "passive_voice",
    name: "Voix Passive (Passive Voice)",
    category: "advanced",
    level: "C1",
    frEquiv: "Voix passive (être + participe passé)",
    usage: "Met l'accent sur l'action subie plutôt que sur celui qui la fait : BE (conjugué) + Participe passé.",
    markers: "by + agent, is made, was built, has been sent",
    aff: "Sujet + BE conjugué + Participe passé",
    neg: "Sujet + BE + not + Participe passé",
    inter: "BE + Sujet + Participe passé ?",
    exEn: "The contract was signed yesterday.",
    exFr: "Le contrat a été signé hier."
  }
];

const IRREGULAR_VERBS = [
  { base: "be", past: "was / were", pp: "been", fr: "être" },
  { base: "become", past: "became", pp: "become", fr: "devenir" },
  { base: "begin", past: "began", pp: "begun", fr: "commencer" },
  { base: "break", past: "broke", pp: "broken", fr: "casser" },
  { base: "bring", past: "brought", pp: "brought", fr: "apporter" },
  { base: "build", past: "built", pp: "built", fr: "construire" },
  { base: "buy", past: "bought", pp: "bought", fr: "acheter" },
  { base: "catch", past: "caught", pp: "caught", fr: "attraper" },
  { base: "choose", past: "chose", pp: "chosen", fr: "choisir" },
  { base: "come", past: "came", pp: "come", fr: "venir" },
  { base: "do", past: "did", pp: "done", fr: "faire" },
  { base: "drink", past: "drank", pp: "drunk", fr: "boire" },
  { base: "drive", past: "drove", pp: "driven", fr: "conduire" },
  { base: "eat", past: "ate", pp: "eaten", fr: "manger" },
  { base: "fall", past: "fell", pp: "fallen", fr: "tomber" },
  { base: "feel", past: "felt", pp: "felt", fr: "ressentir" },
  { base: "find", past: "found", pp: "found", fr: "trouver" },
  { base: "fly", past: "flew", pp: "flown", fr: "voler (airs)" },
  { base: "forget", past: "forgot", pp: "forgotten", fr: "oublier" },
  { base: "get", past: "got", pp: "got / gotten", fr: "obtenir / recevoir" },
  { base: "give", past: "gave", pp: "given", fr: "donner" },
  { base: "go", past: "went", pp: "gone", fr: "aller" },
  { base: "have", past: "had", pp: "had", fr: "avoir" },
  { base: "know", past: "knew", pp: "known", fr: "savoir / connaître" },
  { base: "leave", past: "left", pp: "left", fr: "partir / quitter" },
  { base: "lose", past: "lost", pp: "lost", fr: "perdre" },
  { base: "make", past: "made", pp: "made", fr: "fabriquer / faire" },
  { base: "meet", past: "met", pp: "met", fr: "rencontrer" },
  { base: "pay", past: "paid", pp: "paid", fr: "payer" },
  { base: "read", past: "read", pp: "read", fr: "lire" },
  { base: "run", past: "ran", pp: "run", fr: "courir" },
  { base: "say", past: "said", pp: "said", fr: "dire" },
  { base: "see", past: "saw", pp: "seen", fr: "voir" },
  { base: "send", past: "sent", pp: "sent", fr: "envoyer" },
  { base: "speak", past: "spoke", pp: "spoken", fr: "parler" },
  { base: "take", past: "took", pp: "taken", fr: "prendre" },
  { base: "teach", past: "taught", pp: "taught", fr: "enseigner" },
  { base: "tell", past: "told", pp: "told", fr: "raconter / dire" },
  { base: "think", past: "thought", pp: "thought", fr: "penser" },
  { base: "write", past: "wrote", pp: "written", fr: "écrire" }
];

const QUESTIONS = [
  {
    tenseId: "present_simple",
    category: "present",
    level: "A1-A2",
    hint: "Indice : 'every morning' (habitude régulière)",
    prompt: "Usually, Claire _____ (take) the bus to work.",
    fullSentence: "Usually, Claire takes the bus to work.",
    fr: "D'habitude, Claire prend le bus pour aller travailler.",
    answer: "takes",
    accepted: ["takes"],
    options: ["takes", "is taking", "took", "has taken"],
    explanation: "'Usually' exprime une habitude : on utilise le Present Simple avec -s à la 3e personne du singulier (Claire = she)."
  },
  {
    tenseId: "present_continuous",
    category: "present",
    level: "A1-A2",
    hint: "Indice : 'Look!' (action en cours sous nos yeux)",
    prompt: "Look! It _____ (snow) outside.",
    fullSentence: "Look! It is snowing outside.",
    fr: "Regarde ! Il neige dehors.",
    answer: "is snowing",
    accepted: ["is snowing", "'s snowing"],
    options: ["snows", "is snowing", "snowed", "has snowed"],
    explanation: "'Look!' attire l'attention sur une action en train de se dérouler maintenant : Present Continuous (is + -ing)."
  },
  {
    tenseId: "present_perfect_simple",
    category: "present",
    level: "B1-B2",
    hint: "Indice : 'since 2019' (lien passé → présent)",
    prompt: "They _____ (live) in Lyon since 2019.",
    fullSentence: "They have lived in Lyon since 2019.",
    fr: "Ils habitent à Lyon depuis 2019.",
    answer: "have lived",
    accepted: ["have lived", "'ve lived", "have been living"],
    options: ["lived", "are living", "have lived", "had lived"],
    explanation: "Avec 'since' + point de départ et une situation toujours vraie aujourd'hui, l'anglais impose le Present Perfect."
  },
  {
    tenseId: "present_perfect_continuous",
    category: "present",
    level: "B1-B2",
    hint: "Indice : 'for three hours' (insistance sur la durée continue)",
    prompt: "He is tired because he _____ (work) all morning.",
    fullSentence: "He is tired because he has been working all morning.",
    fr: "Il est fatigué parce qu'il travaille depuis ce matin.",
    answer: "has been working",
    accepted: ["has been working", "'s been working"],
    options: ["worked", "has been working", "is working", "had worked"],
    explanation: "Le résultat visible maintenant ('He is tired') découle d'une activité continue : Present Perfect Continuous."
  },
  {
    tenseId: "past_simple",
    category: "past",
    level: "A1-A2",
    hint: "Indice : 'yesterday' (moment révolu et daté)",
    prompt: "Where _____ (you / go) yesterday evening?",
    fullSentence: "Where did you go yesterday evening?",
    fr: "Où es-tu allé hier soir ?",
    answer: "did you go",
    accepted: ["did you go"],
    options: ["did you went", "did you go", "have you gone", "were you going"],
    explanation: "Au Past Simple interrogatif, on utilise l'auxiliaire 'did' suivi de la base verbale 'go' (jamais 'went')."
  },
  {
    tenseId: "past_continuous",
    category: "past",
    level: "A1-A2",
    hint: "Indice : action en cours interrompue par 'arrived'",
    prompt: "We _____ (have) dinner when Paul arrived.",
    fullSentence: "We were having dinner when Paul arrived.",
    fr: "Nous étions en train de dîner quand Paul est arrivé.",
    answer: "were having",
    accepted: ["were having"],
    options: ["had", "were having", "have had", "are having"],
    explanation: "L'action longue en arrière-plan se met au Past Continuous (were having), interrompue par l'action courte au Past Simple."
  },
  {
    tenseId: "past_perfect_simple",
    category: "past",
    level: "B1-B2",
    hint: "Indice : 'before I got to the station' (antériorité dans le passé)",
    prompt: "The train _____ (already / leave) when I arrived.",
    fullSentence: "The train had already left when I arrived.",
    fr: "Le train était déjà parti quand je suis arrivé.",
    answer: "had already left",
    accepted: ["had already left", "'d already left"],
    options: ["already left", "has already left", "had already left", "was leaving"],
    explanation: "Le départ du train a eu lieu avant l'arrivée : passé dans le passé = Past Perfect (had + participe passé)."
  },
  {
    tenseId: "past_perfect_continuous",
    category: "past",
    level: "C1",
    hint: "Indice : durée avant un événement passé",
    prompt: "They _____ (drive) for six hours before they found a hotel.",
    fullSentence: "They had been driving for six hours before they found a hotel.",
    fr: "Ils conduisaient depuis six heures avant de trouver un hôtel.",
    answer: "had been driving",
    accepted: ["had been driving", "'d been driving"],
    options: ["drove", "have been driving", "had been driving", "were driving"],
    explanation: "Durée d'une action continue avant un repère passé ('before they found') : Past Perfect Continuous."
  },
  {
    tenseId: "used_to",
    category: "past",
    level: "B1-B2",
    hint: "Indice : habitude passée aujourd'hui révolue",
    prompt: "She _____ (play) tennis every Sunday when she was younger.",
    fullSentence: "She used to play tennis every Sunday when she was younger.",
    fr: "Elle jouait au tennis tous les dimanches quand elle était plus jeune.",
    answer: "used to play",
    accepted: ["used to play"],
    options: ["use to play", "used to play", "is used to play", "has played"],
    explanation: "'Used to + base verbale' exprime une habitude passée qui n'existe plus aujourd'hui."
  },
  {
    tenseId: "future_will",
    category: "future",
    level: "A1-A2",
    hint: "Indice : décision spontanée au moment où l'on parle",
    prompt: "'The phone is ringing.' — 'I _____ (answer) it!'",
    fullSentence: "I will answer it!",
    fr: "« Le téléphone sonne. » — « Je vais répondre ! »",
    answer: "will answer",
    accepted: ["will answer", "'ll answer"],
    options: ["am going to answer", "will answer", "answer", "will have answered"],
    explanation: "Pour une réaction spontanée, on utilise 'will' (ou 'll) + base verbale."
  },
  {
    tenseId: "future_going_to",
    category: "future",
    level: "A1-A2",
    hint: "Indice : indice visuel évident ('Look at those black clouds')",
    prompt: "Look at those black clouds! It _____ (rain).",
    fullSentence: "Look at those black clouds! It is going to rain.",
    fr: "Regarde ces nuages noirs ! Il va pleuvoir.",
    answer: "is going to rain",
    accepted: ["is going to rain", "'s going to rain"],
    options: ["will rain", "rains", "is going to rain", "rained"],
    explanation: "Quand un événement futur est annoncé par un signe visible présent, on emploie 'be going to'."
  },
  {
    tenseId: "future_continuous",
    category: "future",
    level: "B1-B2",
    hint: "Indice : 'This time next week' (en cours à un moment futur)",
    prompt: "This time next week, we _____ (relax) on the beach.",
    fullSentence: "This time next week, we will be relaxing on the beach.",
    fr: "La semaine prochaine à la même heure, nous serons en train de nous détendre sur la plage.",
    answer: "will be relaxing",
    accepted: ["will be relaxing", "'ll be relaxing"],
    options: ["will relax", "will be relaxing", "are relaxing", "will have relaxed"],
    explanation: "'This time next week' projette dans une action en cours au futur : Future Continuous (will be + -ing)."
  },
  {
    tenseId: "future_perfect",
    category: "future",
    level: "C1",
    hint: "Indice : 'By 2028' (bilan achevé avant une date future)",
    prompt: "By next month, I _____ (finish) my Master's degree.",
    fullSentence: "By next month, I will have finished my Master's degree.",
    fr: "D'ici le mois prochain, j'aurai terminé mon Master.",
    answer: "will have finished",
    accepted: ["will have finished", "'ll have finished"],
    options: ["will finish", "will be finishing", "will have finished", "have finished"],
    explanation: "'By + repère futur' annonce une action déjà accomplie à cette échéance : Future Perfect."
  },
  {
    tenseId: "conditionals",
    category: "advanced",
    level: "B1-B2",
    hint: "Indice : hypothèse irréelle dans le passé (3rd Conditional)",
    prompt: "If you had studied harder, you _____ (pass) the exam.",
    fullSentence: "If you had studied harder, you would have passed the exam.",
    fr: "Si tu avais étudié davantage, tu aurais réussi l'examen.",
    answer: "would have passed",
    accepted: ["would have passed", "'d have passed"],
    options: ["will pass", "would pass", "would have passed", "had passed"],
    explanation: "Structure du 3e conditionnel (regret passé) : If + Past Perfect, would have + participe passé."
  },
  {
    tenseId: "modals",
    category: "advanced",
    level: "B1-B2",
    hint: "Indice : reproche ou regret sur le passé ('aurait dû')",
    prompt: "You _____ (call) me! I was so worried.",
    fullSentence: "You should have called me! I was so worried.",
    fr: "Tu aurais dû m'appeler ! J'étais tellement inquiet.",
    answer: "should have called",
    accepted: ["should have called"],
    options: ["should call", "should have called", "must call", "can have called"],
    explanation: "Pour exprimer 'aurait dû' au passé, on utilise 'should have + participe passé'."
  },
  {
    tenseId: "passive_voice",
    category: "advanced",
    level: "C1",
    hint: "Indice : voix passive au passé ('a été écrit par...')",
    prompt: "This novel _____ (write) by Victor Hugo in 1862.",
    fullSentence: "This novel was written by Victor Hugo in 1862.",
    fr: "Ce roman a été écrit par Victor Hugo en 1862.",
    answer: "was written",
    accepted: ["was written"],
    options: ["wrote", "was wrote", "was written", "has written"],
    explanation: "Voix passive au Past Simple : auxiliaire BE au prétérit (was) + participe passé irrégulier (written)."
  }
];

/* ==========================================================================
   2. ÉTAT DE L'APPLICATION & PERSISTANCE (LOCALSTORAGE)
   ========================================================================== */

const STORAGE_KEY = "tensemaster_progress_v1";

let state = loadState();
let session = {
  mode: "qcm",
  questions: [],
  index: 0,
  score: 0,
  correctCount: 0,
  xpEarned: 0,
  timer: null,
  timeLeft: 60,
  answered: false
};

function loadState() {
  const defaultState = {
    xp: 0,
    streak: 0,
    mastery: {} // ex: { present_simple: 2 } (0 à 3 étoiles)
  };
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved ? { ...defaultState, ...saved } : defaultState;
  } catch {
    return defaultState;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  updateHeaderStats();
  renderMasteryGrid();
}

function resetProgress() {
  if (confirm("Voulez-vous vraiment remettre à zéro vos XP et étoiles de maîtrise ?")) {
    state = { xp: 0, streak: 0, mastery: {} };
    saveState();
  }
}

/* ==========================================================================
   3. SYNTHÈSE VOCALE (WEB SPEECH API)
   ========================================================================== */

function speakEnglish(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-GB";
  utterance.rate = 0.95;
  window.speechSynthesis.speak(utterance);
}

/* ==========================================================================
   4. NAVIGATION & RENDU DES VUES STATIQUES
   ========================================================================== */

document.querySelectorAll(".nav-btn").forEach(btn => {
  btn.addEventListener("click", () => switchView(btn.dataset.view));
});

function switchView(viewName) {
  if (session.timer && viewName !== "arena") {
    clearInterval(session.timer);
  }
  document.querySelectorAll(".nav-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.view === viewName);
  });
  document.querySelectorAll(".view").forEach(v => {
    v.classList.toggle("active", v.id === `view-${viewName}`);
  });
}

function updateHeaderStats() {
  const level = Math.floor(state.xp / 100) + 1;
  document.getElementById("stat-level").textContent = level;
  document.getElementById("stat-xp").textContent = state.xp;
  document.getElementById("stat-streak").textContent = state.streak;

  const totalStars = TENSES.length * 3;
  const earnedStars = TENSES.reduce((acc, t) => acc + (state.mastery[t.id] || 0), 0);
  const percent = Math.round((earnedStars / totalStars) * 100);
  document.getElementById("mastery-percent").textContent = `${percent}%`;
}

function renderMasteryGrid() {
  const grid = document.getElementById("mastery-grid");
  grid.innerHTML = TENSES.map(t => {
    const starsCount = state.mastery[t.id] || 0;
    const starsStr = "★".repeat(starsCount) + "☆".repeat(3 - starsCount);
    return `
      <div class="mastery-card">
        <div class="mastery-top">
          <div>
            <h4>${t.name}</h4>
            <small>${t.frEquiv}</small>
          </div>
          <span class="badge badge-outline">${t.level}</span>
        </div>
        <div class="mastery-top">
          <span class="stars" title="Maîtrise : ${starsCount}/3">${starsStr}</span>
          <button class="btn-link" onclick="practiceSpecificTense('${t.id}')">S'entraîner →</button>
        </div>
      </div>
    `;
  }).join("");
}

function renderEncyclopedia(category = "all") {
  const list = document.getElementById("encyclopedia-list");
  const filtered = category === "all" ? TENSES : TENSES.filter(t => t.category === category);

  list.innerHTML = filtered.map(t => `
    <article class="tense-card">
      <div class="tense-card-header">
        <div>
          <h3>${t.name}</h3>
          <small style="color: var(--primary); font-weight: 600;">Équivalent français : ${t.frEquiv}</small>
        </div>
        <span class="badge">${t.level}</span>
      </div>
      <p>${t.usage}</p>
      <p style="font-size: 0.88rem; color: var(--text-muted); margin-top: 0.3rem;">
        <strong>Marqueurs fréquents :</strong> ${t.markers}
      </p>
      <div class="tense-forms">
        <div><strong>(+) Affirmatif :</strong><br>${t.aff}</div>
        <div><strong>(-) Négatif :</strong><br>${t.neg}</div>
        <div><strong>(?) Interrogatif :</strong><br>${t.inter}</div>
      </div>
      <div class="tense-example">
        <div>
          <strong>${t.exEn}</strong> — <em>${t.exFr}</em>
        </div>
        <button class="icon-btn" onclick="speakEnglish('${t.exEn.replace(/'/g, "\\'")}')" title="Écouter">🔊</button>
      </div>
    </article>
  `).join("");
}

document.querySelectorAll("#encyclo-filters .pill").forEach(pill => {
  pill.addEventListener("click", () => {
    document.querySelectorAll("#encyclo-filters .pill").forEach(p => p.classList.remove("active"));
    pill.classList.add("active");
    renderEncyclopedia(pill.dataset.cat);
  });
});

function renderIrregulars(query = "") {
  const q = query.trim().toLowerCase();
  const tbody = document.getElementById("irregulars-tbody");
  const filtered = IRREGULAR_VERBS.filter(v =>
    v.base.includes(q) || v.past.includes(q) || v.pp.includes(q) || v.fr.includes(q)
  );

  tbody.innerHTML = filtered.map(v => `
    <tr>
      <td><strong>${v.base}</strong></td>
      <td>${v.past}</td>
      <td>${v.pp}</td>
      <td>${v.fr}</td>
      <td>
        <button class="icon-btn" onclick="speakEnglish('${v.base}, ${v.past.split('/')[0]}, ${v.pp.split('/')[0]}')">🔊</button>
      </td>
    </tr>
  `).join("");
}

document.getElementById("irregular-search").addEventListener("input", e => {
  renderIrregulars(e.target.value);
});

/* ==========================================================================
   5. MOTEUR DE JEU (4 MODES)
   ========================================================================== */

document.querySelectorAll(".mode-card").forEach(card => {
  card.addEventListener("click", () => {
    document.querySelectorAll(".mode-card").forEach(c => c.classList.remove("active"));
    card.classList.add("active");
    session.mode = card.dataset.mode;
  });
});

function startQuickGame(mode) {
  switchView("arena");
  session.mode = mode;
  document.querySelectorAll(".mode-card").forEach(c => {
    c.classList.toggle("active", c.dataset.mode === mode);
  });
  startGame();
}

function practiceSpecificTense(tenseId) {
  switchView("arena");
  const pool = QUESTIONS.filter(q => q.tenseId === tenseId);
  launchSession(pool.length ? pool : QUESTIONS);
}

function startGame() {
  const cat = document.getElementById("filter-category").value;
  const lvl = document.getElementById("filter-level").value;

  if (session.mode === "irregular") {
    const irrPool = shuffleArray([...IRREGULAR_VERBS]).slice(0, 10).map(v => ({
      isIrregularMode: true,
      tenseId: "past_simple",
      level: "A1-B2",
      hint: `Verbe irrégulier : "${v.fr}"`,
      prompt: `Infinitif : to ${v.base}`,
      fullSentence: `${v.base}, ${v.past.split(" / ")[0]}, ${v.pp.split(" / ")[0]}`,
      fr: "Complétez le Prétérit (2e colonne) et le Participe passé (3e colonne).",
      pastAccepted: v.past.split("/").map(s => s.trim().toLowerCase()),
      ppAccepted: v.pp.split("/").map(s => s.trim().toLowerCase()),
      answer: `${v.past} / ${v.pp}`,
      explanation: `Base : ${v.base} → Prétérit : ${v.past} → Participe passé : ${v.pp} (${v.fr}).`
    }));
    launchSession(irrPool);
    return;
  }

  let pool = QUESTIONS.filter(q => {
    const catOk = cat === "all" || q.category === cat;
    const lvlOk = lvl === "all" || q.level === lvl;
    return catOk && lvlOk;
  });

  if (pool.length === 0) {
    alert("Aucune question ne correspond exactement à cette combinaison de filtres. Affichage de toutes les questions.");
    pool = [...QUESTIONS];
  }

  launchSession(shuffleArray(pool).slice(0, session.mode === "blitz" ? 20 : 8));
}

function launchSession(questionList) {
  clearInterval(session.timer);
  session.questions = questionList;
  session.index = 0;
  session.score = 0;
  session.correctCount = 0;
  session.xpEarned = 0;
  session.timeLeft = 60;

  document.getElementById("arena-setup").classList.add("hidden");
  document.getElementById("arena-summary").classList.add("hidden");
  document.getElementById("arena-play").classList.remove("hidden");
  document.getElementById("session-score").textContent = "0";

  const modeNames = {
    qcm: "Maître des Temps",
    forge: "Forge de Phrases",
    irregular: "Duel d'Irréguliers",
    blitz: "Contre-la-Montre"
  };
  document.getElementById("game-mode-badge").textContent = modeNames[session.mode];

  const timerBadge = document.getElementById("game-timer-badge");
  if (session.mode === "blitz") {
    timerBadge.classList.remove("hidden");
    timerBadge.textContent = "60s";
    session.timer = setInterval(() => {
      session.timeLeft--;
      timerBadge.textContent = `${session.timeLeft}s`;
      if (session.timeLeft <= 0) {
        clearInterval(session.timer);
        finishSession();
      }
    }, 1000);
  } else {
    timerBadge.classList.add("hidden");
  }

  renderCurrentQuestion();
}

function renderCurrentQuestion() {
  session.answered = false;
  const q = session.questions[session.index];
  const progress = (session.index / session.questions.length) * 100;
  document.getElementById("session-progress-bar").style.width = `${progress}%`;

  document.getElementById("game-level-badge").textContent = q.level;
  document.getElementById("question-hint").textContent = q.hint;
  document.getElementById("question-prompt").textContent = q.prompt;
  document.getElementById("question-fr").textContent = q.fr;

  const speakBtn = document.getElementById("speak-prompt-btn");
  speakBtn.onclick = () => speakEnglish(q.fullSentence);

  const feedbackBox = document.getElementById("feedback-box");
  feedbackBox.classList.add("hidden");
  feedbackBox.classList.remove("ok", "ko");

  const qcmContainer = document.getElementById("qcm-options");
  const inputForm = document.getElementById("input-form");
  const forgeInputs = document.getElementById("forge-inputs");

  if (session.mode === "qcm" || session.mode === "blitz") {
    qcmContainer.classList.remove("hidden");
    inputForm.classList.add("hidden");
    const opts = shuffleArray([...q.options]);
    qcmContainer.innerHTML = opts.map(opt => `
      <button class="option-btn" onclick="handleQcmChoice(this, '${opt.replace(/'/g, "\\'")}')">${opt}</button>
    `).join("");
  } else if (session.mode === "forge") {
    qcmContainer.classList.add("hidden");
    inputForm.classList.remove("hidden");
    forgeInputs.innerHTML = `
      <input type="text" id="ans-single" class="text-answer" placeholder="Tapez le verbe conjugué..." autocomplete="off" required>
    `;
    document.getElementById("ans-single").focus();
  } else if (session.mode === "irregular") {
    qcmContainer.classList.add("hidden");
    inputForm.classList.remove("hidden");
    forgeInputs.innerHTML = `
      <input type="text" id="ans-past" class="text-answer" placeholder="Prétérit (ex: went)" autocomplete="off" required>
      <input type="text" id="ans-pp" class="text-answer" placeholder="Participe passé (ex: gone)" autocomplete="off" required>
    `;
    document.getElementById("ans-past").focus();
  }
}

function handleQcmChoice(btn, chosen) {
  if (session.answered) return;
  const q = session.questions[session.index];
  const isCorrect = normalizeStr(chosen) === normalizeStr(q.answer);

  document.querySelectorAll(".option-btn").forEach(b => {
    b.disabled = true;
    if (normalizeStr(b.textContent) === normalizeStr(q.answer)) {
      b.classList.add("correct");
    } else if (b === btn && !isCorrect) {
      b.classList.add("wrong");
    }
  });

  resolveAnswer(isCorrect);
}

function submitTextAnswer(e) {
  e.preventDefault();
  if (session.answered) return;
  const q = session.questions[session.index];
  let isCorrect = false;

  if (q.isIrregularMode) {
    const pastVal = normalizeStr(document.getElementById("ans-past").value);
    const ppVal = normalizeStr(document.getElementById("ans-pp").value);
    isCorrect = q.pastAccepted.includes(pastVal) && q.ppAccepted.includes(ppVal);
  } else {
    const val = normalizeStr(document.getElementById("ans-single").value);
    isCorrect = q.accepted.some(acc => normalizeStr(acc) === val);
  }

  resolveAnswer(isCorrect);
}

function resolveAnswer(isCorrect) {
  session.answered = true;
  const q = session.questions[session.index];

  if (isCorrect) {
    session.correctCount++;
    state.streak++;
    const bonus = Math.min(state.streak * 2, 10);
    const gained = 15 + bonus;
    session.score += gained;
    session.xpEarned += gained;
    state.xp += gained;

    const currentStars = state.mastery[q.tenseId] || 0;
    if (currentStars < 3) {
      state.mastery[q.tenseId] = currentStars + 1;
    }
  } else {
    state.streak = 0;
  }

  saveState();
  document.getElementById("session-score").textContent = session.score;

  // En mode Blitz, enchaînement rapide
  if (session.mode === "blitz") {
    setTimeout(() => nextQuestion(), 450);
    return;
  }

  const tenseObj = TENSES.find(t => t.id === q.tenseId);
  const feedbackBox = document.getElementById("feedback-box");
  feedbackBox.classList.remove("hidden");
  feedbackBox.classList.add(isCorrect ? "ok" : "ko");

  document.getElementById("feedback-title").textContent = isCorrect
    ? "Exact ! Excellente maîtrise."
    : `Réponse attendue : ${q.answer}`;
  document.getElementById("feedback-tense-tag").textContent = tenseObj ? tenseObj.name : "";
  document.getElementById("feedback-explanation").textContent = q.explanation;

  speakEnglish(q.fullSentence);
}

function nextQuestion() {
  session.index++;
  if (session.index >= session.questions.length) {
    finishSession();
  } else {
    renderCurrentQuestion();
  }
}

function finishSession() {
  clearInterval(session.timer);
  document.getElementById("arena-play").classList.add("hidden");
  document.getElementById("arena-summary").classList.remove("hidden");

  const answeredTotal = Math.max(session.index, 1);
  const accuracy = Math.round((session.correctCount / answeredTotal) * 100);

  document.getElementById("sum-correct").textContent = `${session.correctCount}/${answeredTotal}`;
  document.getElementById("sum-xp").textContent = `+${session.xpEarned}`;
  document.getElementById("sum-accuracy").textContent = `${accuracy}%`;
}

function quitGame() {
  clearInterval(session.timer);
  document.getElementById("arena-play").classList.add("hidden");
  document.getElementById("arena-summary").classList.add("hidden");
  document.getElementById("arena-setup").classList.remove("hidden");
}

/* ==========================================================================
   6. UTILITAIRES & INITIALISATION
   ========================================================================== */

function normalizeStr(str) {
  return str.trim().toLowerCase().replace(/\s+/g, " ");
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Initialisation au chargement
updateHeaderStats();
renderMasteryGrid();
renderEncyclopedia();
renderIrregulars();