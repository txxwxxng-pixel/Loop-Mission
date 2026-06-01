/* =========================================================
   Loop Mission — Mission 001 Landing Page
   Loop selector, workflow stepper, scroll reveal, nav state.
   Vanilla JS, no dependencies.
   ========================================================= */

(function () {
  "use strict";

  /* ---------- Data ---------- */
  const loops = {
    web: {
      kicker: "Loop 01",
      title: "Interactive Web",
      desc: "Interactive websites, landing pages, brand homepages, animated web prototypes, and deployment-ready experiments.",
      items: ["HTML/CSS/JS MVPs", "Responsive layouts & interaction scripts", "README run guide & QA report"],
      media: "Landing page hero system →"
    },
    ads: {
      kicker: "Loop 02",
      title: "Premium Ads",
      desc: "Premium campaign concepts, image prompt packs, social captions, hashtag sets, and upload-ready creative plans.",
      items: ["Campaign brief & concept", "Instagram caption + hashtag packs", "Image prompt handoff manifest"],
      media: "Premium carousel asset →"
    },
    unreal: {
      kicker: "Loop 03",
      title: "Unreal Spaces",
      desc: "Escape rooms, audio studios, concert halls, immersive environments, blockout plans, and render directions.",
      items: ["Space brief & blockout plan", "Asset & automation notes", "Render plan + QA checklist"],
      media: "Studio operations room →"
    },
    photoreal: {
      kicker: "Loop 04",
      title: "Photoreal Prompts",
      desc: "Photoreal image prompts, compact prompts, negative prompts, variation sets, QC notes, and retry prompts.",
      items: ["Full + compact prompts", "Negative prompts & variations", "QC notes & retry prompts"],
      media: "Mission 001 prompt pack →"
    },
    unity: {
      kicker: "Loop 05",
      title: "Unity 2D Games",
      desc: "Mobile 2D game concepts, market references, core loops, Unity MVP plans, monetization plans, and store asset plans.",
      items: ["Core loop & MVP plan", "Monetization plan", "Store asset plan"],
      media: "Mission progression concept →"
    }
  };

  const steps = [
    {
      phase: "Phase 01 / Plan",
      title: "Define the mission and its done state",
      text: "Read the loop rules and the brief, lock scope, target user, sections, and QA criteria. The mission starts only when \"done\" is unambiguous.",
      output: "Mission brief + definition of done"
    },
    {
      phase: "Phase 02 / Reference",
      title: "Gather direction before producing",
      text: "Collect project seeds, brand notes, screenshots, and reviewed outputs from other loops. References guide taste; they don't expand scope.",
      output: "Reference set + visual direction"
    },
    {
      phase: "Phase 03 / Produce",
      title: "Create a file the next step can use",
      text: "Build the concrete artifact inside one loop folder only — a prototype, prompt pack, plan, or manifest. Keep each iteration small enough to validate.",
      output: "Working prototype or deliverable"
    },
    {
      phase: "Phase 04 / QA",
      title: "Check scope, paths, and responsiveness",
      text: "Validate against the definition of done. The QA report names what was checked, what's still risky, and what is ready for review.",
      output: "QA report with named issues"
    },
    {
      phase: "Phase 05 / Archive",
      title: "Package the mission so it compounds",
      text: "Store the brief, final output, QA report, and production manifest under the archive — enough to reproduce or continue the work later.",
      output: "Dated archive + manifest"
    },
    {
      phase: "Phase 06 / Handoff",
      title: "Send reviewed output to the next lane",
      text: "Each mission prepares the next: ads feed prompts, prompts feed pages, pages feed spaces and games. Every handoff stays explicit.",
      output: "Cross-loop handoff manifest"
    }
  ];

  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  /* ---------- Loop selector ---------- */
  const loopTabs = $$(".loop-tab");
  const loopPanel = $("#loop-panel");

  if (loopPanel && loopTabs.length) {
    const out = {
      kicker: $("[data-loop-kicker]"),
      title: $("[data-loop-title]"),
      desc: $("[data-loop-desc]"),
      list: $("[data-loop-list]"),
      media: $("[data-loop-media]")
    };

    const renderLoop = (key) => {
      const data = loops[key];
      if (!data) return;
      out.kicker.textContent = data.kicker;
      out.title.textContent = data.title;
      out.desc.textContent = data.desc;
      out.media.textContent = data.media;
      out.list.innerHTML = data.items.map((i) => `<li>${i}</li>`).join("");
    };

    const selectLoop = (tab) => {
      loopTabs.forEach((t) => {
        const active = t === tab;
        t.classList.toggle("is-active", active);
        t.setAttribute("aria-selected", active ? "true" : "false");
      });
      loopPanel.setAttribute("aria-labelledby", tab.id);
      // brief swap animation
      loopPanel.classList.add("is-swapping");
      window.setTimeout(() => {
        renderLoop(tab.dataset.loop);
        loopPanel.classList.remove("is-swapping");
      }, 160);
    };

    loopTabs.forEach((tab, i) => {
      tab.addEventListener("click", () => selectLoop(tab));
      // roving keyboard nav across the tablist
      tab.addEventListener("keydown", (e) => {
        let next = null;
        if (e.key === "ArrowDown" || e.key === "ArrowRight") next = loopTabs[(i + 1) % loopTabs.length];
        if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = loopTabs[(i - 1 + loopTabs.length) % loopTabs.length];
        if (next) {
          e.preventDefault();
          next.focus();
          selectLoop(next);
        }
      });
    });
  }

  /* ---------- Workflow stepper ---------- */
  const stepButtons = $$(".step");
  const wf = {
    phase: $("[data-wf-phase]"),
    title: $("[data-wf-title]"),
    text: $("[data-wf-text]"),
    output: $("[data-wf-output]"),
    detail: $(".workflow__detail")
  };

  if (stepButtons.length && wf.detail) {
    const renderStep = (index) => {
      const data = steps[index];
      if (!data) return;
      wf.phase.textContent = data.phase;
      wf.title.textContent = data.title;
      wf.text.textContent = data.text;
      wf.output.textContent = data.output;
    };

    stepButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        stepButtons.forEach((b) => b.classList.toggle("is-active", b === btn));
        wf.detail.classList.add("is-swapping");
        window.setTimeout(() => {
          renderStep(Number(btn.dataset.step));
          wf.detail.classList.remove("is-swapping");
        }, 160);
      });
    });
  }

  /* ---------- Scroll reveal ---------- */
  const revealEls = $$(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- Nav scrolled state ---------- */
  const nav = $("#nav");
  if (nav) {
    const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }
})();
