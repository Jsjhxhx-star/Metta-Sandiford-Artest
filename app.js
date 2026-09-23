const branches = [
  {
    id: "unyielding-defense",
    name: "Unyielding Defense",
    icon: "assets/branch-unyielding-defense.png",
    max: 10,
    summary: "Resilience talents that reduce Fighting Spirit costs and sharpen Metta's pressure defense after his signature defensive skills.",
    skills: [
      {
        name: "Second Wind",
        icon: "assets/second-wind.png",
        level: 3,
        bonus: "Fighting Spirit cost −100",
        description: "Unyielding Defense and Shadowing consume 50 less Fighting Spirit.",
      },
      {
        name: "Pressure Defense",
        icon: "assets/pressure-defense.png",
        level: 3,
        bonus: "Base movement speed +0.5 m/s",
        description: "For 3 seconds after using Unyielding Defense or Shadowing, base movement speed increases by 0.25 m/s.",
      },
      {
        name: "Stand Your Ground",
        icon: "assets/stand-your-ground.png",
        type: "Insight",
        level: 1,
        bonus: "Defensive resistance greatly increased",
        description: "For 10 seconds after using Shadowing or Unyielding Defense, Metta greatly increases screen resistance, post-up resistance, box-out resistance, block success rate, and the chance of stopping an opponent's drive on contact.",
      },
      {
        name: "Precision Steal",
        icon: "assets/precision-steal.png",
        level: 3,
        bonus: "Base steal chance +6%",
        description: "For 3 seconds after using Unyielding Defense or Shadowing, base steal chance increases by 3%.",
      },
    ],
  },
  {
    id: "born-to-compete",
    name: "Born to Compete",
    icon: "assets/branch-born-to-compete.png",
    max: 14,
    summary: "A two-way branch that converts Fighting Spirit into tighter defense, resistance to contact, and reliable spot-up scoring.",
    skills: [
      {
        name: "Tight Defense",
        icon: "assets/tight-defense.png",
        level: 3,
        bonus: "Shot interference +5%",
        description: "For each stack of Fighting Spirit, Metta's shot interference increases by 2.5%.",
      },
      {
        name: "Fearless Contact",
        icon: "assets/fearless-contact.png",
        level: 3,
        bonus: "Post-up resistance +5%",
        description: "For each stack of Fighting Spirit, Metta's post-up resistance increases by 2.5%.",
      },
      {
        name: "Offensive Support",
        icon: "assets/offensive-support.png",
        type: "Insight",
        level: 1,
        bonus: "Expanded scoring and passing options",
        description: "Each made basket grants 2 stacks of Fighting Spirit and each assist grants 1. After a normal drive, Metta can use a pull-up jumper or an inward spin, and he may pass before releasing the pull-up jumper.",
      },
      {
        name: "Clutch Time",
        icon: "assets/clutch-time.png",
        level: 3,
        bonus: "Interference radius −3%",
        description: "For each stack of Fighting Spirit, Metta's interference radius is reduced by 1.5%.",
      },
      {
        name: "Spot-Up Shooting",
        icon: "assets/spot-up-shooting.png",
        type: "Insight",
        level: 1,
        bonus: "Unlocks quick catch-and-shoot options",
        description: "Metta rises quickly and shoots the instant he receives a pass. Each stack of Fighting Spirit slightly increases shot speed. He may pass before releasing a quick catch-and-shoot three or mid-range jumper. When receiving the ball 1–3 meters from the rim, he can quickly release a floater.",
      },
      {
        name: "Catch and Shoot",
        icon: "assets/catch-and-shoot.png",
        level: 3,
        bonus: "Open mid-range accuracy +2% · Open 3PT accuracy +1%",
        description: "For each stack of Fighting Spirit, open mid-range accuracy increases by 0.8% and open three-point accuracy increases by 0.5%.",
      },
    ],
  },
  {
    id: "ironclad",
    name: "Ironclad",
    icon: "assets/branch-ironclad.png",
    max: 7,
    summary: "Physical-defense upgrades that make Metta harder to shake and better at closing space after steals and rebounds.",
    skills: [
      {
        name: "Agile Footwork",
        icon: "assets/agile-footwork.png",
        level: 3,
        bonus: "Ankle-break chance −10%",
        description: "While Ironclad is active, the chance of being shaken is reduced by 5%.",
      },
      {
        name: "Help-and-Recover Defense",
        icon: "assets/help-recover-defense.png",
        type: "Insight",
        level: 1,
        bonus: "Unlocks a defensive recovery dash",
        description: "For 2 seconds after Metta uses Steal or after an opponent secures a rebound, he can dash a short distance toward the ball handler.",
      },
      {
        name: "Seek Contact",
        icon: "assets/seek-contact.png",
        level: 3,
        bonus: "Collision size +6%",
        description: "While Ironclad is active, collision size increases by 3%.",
      },
    ],
  },
  {
    id: "lockdown-core",
    name: "Lockdown Core",
    icon: "assets/branch-lockdown-core.png",
    max: 10,
    summary: "Mobility and rim-protection talents that extend Metta's defensive reach and let him recover to the basket.",
    skills: [
      {
        name: "Shadowing",
        icon: "assets/shadowing.png",
        level: 3,
        bonus: "Off-ball movement speed +0.3 m/s",
        description: "While Lockdown Core is active, off-ball movement speed increases by 0.15 m/s.",
      },
      {
        name: "Charged Leap",
        icon: "assets/charged-leap.png",
        level: 3,
        bonus: "Block range +0.2 m",
        description: "While Lockdown Core is active, block range increases by 0.08 m.",
      },
      {
        name: "Rim Protection",
        icon: "assets/rim-protection.png",
        type: "Insight",
        level: 1,
        bonus: "Unlocks an emergency rim-recovery dash",
        description: "When an opponent uses a layup or dunk skill, Metta quickly dashes back to the rim. If he is already accelerated, his block angle becomes 360° for 2 seconds after the recovery dash.",
      },
      {
        name: "Aerial Defense",
        icon: "assets/aerial-defense.png",
        level: 3,
        bonus: "Block success rate +10%",
        description: "While Lockdown Core is active, or for 2 seconds after using Rim Protection, block success rate increases by 5%.",
      },
    ],
  },
  {
    id: "close-quarters-combat",
    name: "Close-Quarters Combat",
    icon: "assets/branch-close-quarters.png",
    max: 10,
    summary: "Steal-focused talents that punish close contact, slow the ball handler, and widen Metta's reach.",
    skills: [
      {
        name: "Strike True",
        icon: "assets/strike-true.png",
        level: 3,
        bonus: "Steal success rate +5%",
        description: "During basic steals and Close-Quarters Combat steals, steal success rate increases by 2.5%.",
      },
      {
        name: "Slow Recovery",
        icon: "assets/slow-recovery.png",
        level: 3,
        bonus: "Opponent dribble and drive speed −6%",
        description: "When Close-Quarters Combat causes the opponent to stagger, their dribble movement speed and drive speed are reduced by 3% for 1.5 seconds.",
      },
      {
        name: "Relentless Pressure",
        icon: "assets/relentless-pressure.png",
        type: "Insight",
        level: 1,
        bonus: "Grants a temporary defensive boost",
        description: "When Close-Quarters Combat triggers or Metta stops an opponent's drive on contact, he gains a small boost to off-ball movement speed, screen resistance, ankle-break resistance, and steal success rate for 5 seconds.",
      },
      {
        name: "Wider Reach",
        icon: "assets/wider-reach.png",
        level: 3,
        bonus: "Steal range +0.2 m",
        description: "The range of basic steals and Close-Quarters Combat steals increases by 0.1 m.",
      },
    ],
  },
  {
    id: "head-on-duel",
    name: "Head-On Duel",
    icon: "assets/branch-head-on-duel.png",
    max: 6,
    summary: "Finishing talents that improve the accuracy and block resistance of Metta's power dunk.",
    skills: [
      {
        name: "Ferocious Dunk",
        icon: "assets/ferocious-dunk.png",
        level: 3,
        bonus: "Dunk accuracy +10%",
        description: "During a Head-On Duel dunk, dunk accuracy increases by 5%.",
      },
      {
        name: "Head-On Contact",
        icon: "assets/head-on-contact.png",
        level: 3,
        bonus: "Block resistance +6%",
        description: "During a Head-On Duel dunk, block resistance increases by 3%.",
      },
    ],
  },
  {
    id: "opportunist",
    name: "Opportunist",
    icon: "assets/branch-opportunist.png",
    max: 12,
    summary: "Timing-based recovery talents that expand ball-recovery range and reward Mechanical Finish scoring.",
    skills: [
      {
        name: "Extended Range",
        icon: "assets/extended-range.png",
        level: 3,
        bonus: "Ball-recovery distance +0.15 m",
        description: "During Opportunist and Opportunist Box-Out ball recoveries, recovery distance increases by 0.07 m.",
      },
      {
        name: "Greater Height",
        icon: "assets/greater-height.png",
        level: 3,
        bonus: "Ball-recovery height +0.15 m",
        description: "During Opportunist ball recoveries, recovery height increases by 0.07 m.",
      },
      {
        name: "Quick Hands",
        icon: "assets/quick-hands.png",
        level: 3,
        bonus: "Blockable area −0.15 m",
        description: "When shooting with Mechanical Finish, the blockable area is reduced by 0.07 m.",
      },
      {
        name: "Clutch Moment",
        icon: "assets/clutch-moment.png",
        level: 3,
        bonus: "Team Fighting Spirit +60",
        description: "When Mechanical Finish scores, the entire team gains 30 Fighting Spirit.",
      },
    ],
  },
];

const branchTabs = document.getElementById("branchTabs");
const skillTrack = document.getElementById("skillTrack");
const branchTitle = document.getElementById("branchTitle");
const branchProgress = document.getElementById("branchProgress");
const branchSummary = document.getElementById("branchSummary");
const progressFill = document.getElementById("progressFill");
const panel = document.getElementById("detailPanel");
const backdrop = document.getElementById("panelBackdrop");
const closePanelButton = document.getElementById("closePanel");
const detailIcon = document.getElementById("detailIcon");
const detailBranch = document.getElementById("detailBranch");
const detailTitle = document.getElementById("detailTitle");
const detailLevel = document.getElementById("detailLevel");
const detailBonus = document.getElementById("detailBonus");
const detailDescription = document.getElementById("detailDescription");
const detailType = document.getElementById("detailType");

let activeBranchIndex = 0;
let lastTrigger = null;

const importantTerms = [
  "Close-Quarters Combat",
  "Help-and-Recover Defense",
  "Opportunist Box-Out",
  "open three-point accuracy",
  "open mid-range accuracy",
  "off-ball movement speed",
  "dribble movement speed",
  "ankle-break resistance",
  "base movement speed",
  "steal success rate",
  "block success rate",
  "post-up resistance",
  "screen resistance",
  "box-out resistance",
  "shot interference",
  "interference radius",
  "stopping an opponent's drive on contact",
  "quick catch-and-shoot three",
  "mid-range jumper",
  "pull-up jumper",
  "Mechanical Finish",
  "Unyielding Defense",
  "Fighting Spirit",
  "Lockdown Core",
  "Rim Protection",
  "recovery distance",
  "recovery height",
  "block resistance",
  "blockable area",
  "collision size",
  "dunk accuracy",
  "inward spin",
  "Head-On Duel",
  "movement speed",
  "steal range",
  "block range",
  "drive speed",
  "Opportunist",
  "Shadowing",
  "Ironclad",
  "floater",
  "layup",
  "dunk",
  "Steal",
];

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\u0022": "&quot;",
    "'": "&#039;",
  })[character]);
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const importantTermPattern = new RegExp(
  importantTerms
    .sort((left, right) => right.length - left.length)
    .map(escapeRegExp)
    .join("|"),
  "gi",
);

function emphasizeImportantText(value) {
  const ranges = [];
  const patterns = [
    /^(?:For|While|When|During)\b[^,]+/gi,
    /\b(?:or\s+)?for\s+\d+(?:\.\d+)?\s+seconds?\s+after\s+using\s+[^,]+/gi,
    importantTermPattern,
    /\b\d+(?:\.\d+)?%|\b\d+(?:\.\d+)?(?:\s*–\s*\d+(?:\.\d+)?)?(?:\s*(?:m\/s|meters?|m|seconds?|stacks?))?\b|360°/gi,
  ];

  patterns.forEach((pattern) => {
    pattern.lastIndex = 0;
    for (const match of value.matchAll(pattern)) {
      ranges.push([match.index, match.index + match[0].length]);
    }
  });

  ranges.sort((left, right) => left[0] - right[0] || right[1] - left[1]);
  const mergedRanges = ranges.reduce((merged, range) => {
    const previous = merged.at(-1);
    if (previous && range[0] <= previous[1]) {
      previous[1] = Math.max(previous[1], range[1]);
    } else {
      merged.push([...range]);
    }
    return merged;
  }, []);

  let cursor = 0;
  return mergedRanges.map(([start, end]) => {
    const plainText = escapeHtml(value.slice(cursor, start));
    const highlightedText = escapeHtml(value.slice(start, end));
    cursor = end;
    return `${plainText}<strong class="important-text">${highlightedText}</strong>`;
  }).join("") + escapeHtml(value.slice(cursor));
}

function renderTabs() {
  branchTabs.innerHTML = branches.map((branch, index) => `
    <button
      class="branch-tab"
      id="tab-${branch.id}"
      type="button"
      role="tab"
      aria-selected="${index === activeBranchIndex}"
      aria-controls="skillTrack"
      data-branch-index="${index}"
    >
      <img src="${branch.icon}" alt="" aria-hidden="true">
      <span>${branch.name}</span>
    </button>
  `).join("");
}

function renderBranch(index) {
  activeBranchIndex = index;
  const branch = branches[index];

  branchTitle.textContent = branch.name;
  branchProgress.textContent = `${branch.max} / ${branch.max}`;
  branchSummary.textContent = branch.summary;
  progressFill.style.width = "100%";

  document.querySelectorAll(".branch-tab").forEach((tab, tabIndex) => {
    tab.setAttribute("aria-selected", String(tabIndex === index));
  });

  skillTrack.innerHTML = branch.skills.map((skill, skillIndex) => {
    const isInsight = skill.type === "Insight";
    return `
      <article class="skill-node">
        <button class="skill-card" type="button" data-skill-index="${skillIndex}" aria-label="Open ${skill.name} details">
          <div class="skill-card-top">
            <img class="skill-icon" src="${skill.icon}" alt="">
            <span class="skill-name">${skill.name}</span>
            <span class="skill-level">${isInsight ? "Insight skill" : `Max level ${skill.level}/3`}</span>
            <span class="skill-preview"><strong class="important-text">${escapeHtml(skill.bonus)}</strong></span>
          </div>
          ${isInsight ? `
            <div class="insight-tile"><span>Insight<br>Skill</span></div>
          ` : `
            <div class="tier-stack" aria-hidden="true">
              <div class="tier">Basic training</div>
              <div class="tier">Intermediate</div>
              <div class="tier">Advanced</div>
            </div>
          `}
        </button>
      </article>
    `;
  }).join("");

  skillTrack.scrollTo({ left: 0, behavior: "smooth" });
}

function openPanel(skillIndex, trigger) {
  const branch = branches[activeBranchIndex];
  const skill = branch.skills[skillIndex];
  lastTrigger = trigger;

  detailIcon.src = skill.icon;
  detailIcon.alt = `${skill.name} icon`;
  detailBranch.textContent = branch.name;
  detailTitle.textContent = skill.name;
  detailLevel.textContent = skill.type === "Insight" ? "Insight Skill · 1/1" : `Max Level · ${skill.level}/3`;
  detailBonus.textContent = skill.bonus;
  detailDescription.innerHTML = emphasizeImportantText(skill.description);
  detailType.textContent = skill.type === "Insight" ? "Single-unlock insight talent" : "Three-tier upgrade talent";

  backdrop.hidden = false;
  panel.setAttribute("aria-hidden", "false");
  document.body.classList.add("panel-open");
  requestAnimationFrame(() => panel.classList.add("is-open"));
  closePanelButton.focus();
}

function closePanel() {
  panel.classList.remove("is-open");
  panel.setAttribute("aria-hidden", "true");
  document.body.classList.remove("panel-open");
  window.setTimeout(() => {
    backdrop.hidden = true;
    if (lastTrigger) lastTrigger.focus();
  }, 260);
}

branchTabs.addEventListener("click", (event) => {
  const tab = event.target.closest(".branch-tab");
  if (!tab) return;
  renderBranch(Number(tab.dataset.branchIndex));
});

skillTrack.addEventListener("click", (event) => {
  const card = event.target.closest(".skill-card");
  if (!card) return;
  openPanel(Number(card.dataset.skillIndex), card);
});

closePanelButton.addEventListener("click", closePanel);
backdrop.addEventListener("click", closePanel);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && panel.classList.contains("is-open")) closePanel();
});

renderTabs();
renderBranch(0);
