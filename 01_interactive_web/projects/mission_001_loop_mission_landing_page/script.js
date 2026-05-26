const loops = {
  web: {
    kicker: "Interactive Web",
    title: "Landing pages and deployable prototypes",
    body: "Create brand homepages, interactive landing pages, responsive prototypes, run guides, and QA reports.",
    items: ["Website brief", "Responsive layout", "Prototype QA"],
    visual: "Landing page hero and section system"
  },
  ads: {
    kicker: "Premium Ads",
    title: "Campaigns, captions, prompts, and upload plans",
    body: "Turn the studio offer into campaign briefs, SNS-ready copy, image prompt packs, hashtags, and ad handoffs.",
    items: ["Campaign brief", "Caption pack", "Image prompt handoff"],
    visual: "Premium Instagram carousel asset"
  },
  unreal: {
    kicker: "Unreal Spaces",
    title: "Immersive studio environments and render plans",
    body: "Plan blockouts, asset manifests, automation notes, and render directions for cinematic 3D spaces.",
    items: ["Space brief", "Blockout plan", "Render plan"],
    visual: "AI studio operations room concept"
  },
  prompts: {
    kicker: "Photoreal Prompts",
    title: "Copy-ready visual prompt systems",
    body: "Prepare full prompts, compact prompts, negative prompts, variations, QC rules, and retry directions.",
    items: ["Full prompt", "Negative prompt", "Failure correction"],
    visual: "Mission 001 photoreal prompt pack"
  },
  unity: {
    kicker: "Unity 2D Games",
    title: "Game and commerce expansion planning",
    body: "Shape core loops, monetization logic, store assets, and productized mission systems for game-like experiences.",
    items: ["Core loop", "Monetization plan", "Store asset plan"],
    visual: "Mission progression commerce concept"
  }
};

const steps = {
  brief: {
    tag: "Mission Brief",
    title: "Turn one idea into a scoped production mission.",
    copy: "Define the target loop, required outputs, folder boundaries, blockers, and the practical artifact that must exist when the task is done."
  },
  build: {
    tag: "Production Output",
    title: "Create a file the next step can actually use.",
    copy: "The output can be a campaign brief, prompt pack, prototype, manifest, QA report, or production plan. It must be concrete."
  },
  qa: {
    tag: "Validation",
    title: "Check scope, paths, responsiveness, and blockers.",
    copy: "Validation keeps each loop clean. The task reports what was checked, what remains risky, and what is ready for review."
  },
  archive: {
    tag: "Production Memory",
    title: "Package the mission so it can compound.",
    copy: "A useful archive includes the brief, output, QA report, manifest, source references, and next-step direction."
  },
  handoff: {
    tag: "Next Loop",
    title: "Send reviewed outputs into the next production lane.",
    copy: "Ads can feed photoreal prompts. Prompts can feed web visuals. Web can feed product packaging. Each handoff stays explicit."
  }
};

const loopTabs = document.querySelectorAll(".loop-tab");
const loopKicker = document.querySelector("#loop-kicker");
const loopTitle = document.querySelector("#loop-title");
const loopBody = document.querySelector("#loop-body");
const loopList = document.querySelector("#loop-list");
const loopVisualTitle = document.querySelector("#loop-visual-title");

loopTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const selected = loops[tab.dataset.loop];
    loopTabs.forEach((item) => {
      item.classList.toggle("active", item === tab);
      item.setAttribute("aria-selected", item === tab ? "true" : "false");
    });
    loopKicker.textContent = selected.kicker;
    loopTitle.textContent = selected.title;
    loopBody.textContent = selected.body;
    loopVisualTitle.textContent = selected.visual;
    loopList.innerHTML = selected.items.map((item) => `<li>${item}</li>`).join("");
  });
});

const stepButtons = document.querySelectorAll(".step");
const workflowTag = document.querySelector("#workflow-tag");
const workflowTitle = document.querySelector("#workflow-title");
const workflowCopy = document.querySelector("#workflow-copy");

stepButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = steps[button.dataset.step];
    stepButtons.forEach((item) => item.classList.toggle("active", item === button));
    workflowTag.textContent = selected.tag;
    workflowTitle.textContent = selected.title;
    workflowCopy.textContent = selected.copy;
  });
});

const revealTargets = document.querySelectorAll(".section, .studio-board");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.12 }
);

revealTargets.forEach((target) => {
  target.classList.add("reveal");
  observer.observe(target);
});

