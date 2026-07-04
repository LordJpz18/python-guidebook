(function () {
  const app = document.querySelector("#app");
  const page = document.body.dataset.page;
  const modules = window.COURSE.modules;

  const escapeHtml = (value) =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const list = (items) => `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
  const code = (value) => `<pre><code>${escapeHtml(value)}</code></pre>`;
  const slug = (value) =>
    value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  function moduleUrl(id) {
    return `modules.html?id=${id}`;
  }

  function getProgress() {
    try {
      return JSON.parse(localStorage.getItem("pythonExplorateursProgress")) || {};
    } catch {
      return {};
    }
  }

  function setProgress(id, value) {
    const progress = getProgress();
    progress[id] = value;
    localStorage.setItem("pythonExplorateursProgress", JSON.stringify(progress));
    updateProgressUi();
  }

  function progressCount() {
    const progress = getProgress();
    return modules.filter((module) => progress[module.id]).length;
  }

  function progressBlock() {
    const count = progressCount();
    const percent = Math.round((count / modules.length) * 100);
    return `
      <section class="progress-wrap" aria-label="Progression">
        <p><strong>Progression :</strong> <span data-progress-text>${count}/${modules.length} modules terminés</span></p>
        <div class="progress-bar"><span data-progress-bar style="width:${percent}%"></span></div>
      </section>
    `;
  }

  function updateProgressUi() {
    const count = progressCount();
    const percent = Math.round((count / modules.length) * 100);
    document.querySelectorAll("[data-progress-text]").forEach((node) => {
      node.textContent = `${count}/${modules.length} modules terminés`;
    });
    document.querySelectorAll("[data-progress-bar]").forEach((node) => {
      node.style.width = `${percent}%`;
    });
    document.querySelectorAll("[data-done-button]").forEach((button) => {
      const id = button.dataset.doneButton;
      const done = Boolean(getProgress()[id]);
      button.textContent = done ? "Marquer comme à revoir" : "Marquer comme terminé";
      button.classList.toggle("secondary", done);
    });
  }

  function moduleCards() {
    const progress = getProgress();
    return `
      <section class="module-grid">
        ${modules
          .map(
            (module) => `
              <article class="card module-card">
                <span class="tag ${progress[module.id] ? "green" : ""}">Module ${module.id}</span>
                <h3>${escapeHtml(module.title)}</h3>
                <p>${escapeHtml(module.subtitle)}</p>
                <div class="button-row">
                  <a class="button small" href="${moduleUrl(module.id)}">Ouvrir</a>
                </div>
              </article>
            `
          )
          .join("")}
      </section>
    `;
  }

  function aiCoachSection() {
    return `
      <div class="callout ai">
        <h3>Utiliser l'IA comme un coach, pas comme une machine à copier</h3>
        <p>L'IA générative peut aider à comprendre, expliquer, corriger ou donner des indices. Elle peut aussi se tromper. Tu dois lire sa réponse, tester le code, demander des explications, comparer avec ce que tu sais déjà et être capable de réexpliquer la solution avec tes propres mots.</p>
        <div class="grid">
          <div>
            <h4>Bons prompts</h4>
            ${list(window.COURSE.goodPrompts)}
          </div>
          <div>
            <h4>Prompts à éviter</h4>
            ${list(window.COURSE.badPrompts)}
          </div>
        </div>
      </div>
    `;
  }

  function exerciseHtml(exercise, index, moduleId) {
    return `
      <article class="exercise">
        <span class="tag yellow">${escapeHtml(exercise.level)}</span>
        <h4>${escapeHtml(exercise.title)}</h4>
        <p>${escapeHtml(exercise.prompt)}</p>
        <details>
          <summary>Indices</summary>
          ${list(exercise.hints)}
        </details>
        <details class="solution">
          <summary>Afficher la correction expliquée</summary>
          <p><strong>Idée et étapes :</strong> ${escapeHtml(exercise.solution)}</p>
          <p><strong>Variante :</strong> ${escapeHtml(exercise.variant)}</p>
        </details>
        <p><a href="${moduleUrl(moduleId)}#exercice-${moduleId}-${index}">Voir dans le module</a></p>
      </article>
    `;
  }

  function renderHome() {
    app.innerHTML = `
      <section class="hero">
        <div>
          <span class="kicker">Formation Python 9-12 ans</span>
          <h1>Apprendre Python, raisonner et utiliser l'IA avec esprit critique</h1>
          <p class="lead">Un ebook en ligne pour découvrir la programmation pas à pas : activités sans ordinateur, exemples Python, exercices, corrigés masqués, mini-projets et projets finaux.</p>
          <div class="callout tip">
            <p><strong>Idée importante :</strong> programmer, ce n'est pas seulement écrire du code. C'est apprendre à résoudre des problèmes étape par étape. Python est accessible pour débuter, et l'IA peut aider à comprendre ou corriger, mais elle ne remplace pas tes tests, tes questions et ton raisonnement.</p>
          </div>
          <div class="hero-actions">
            <a class="button" href="modules.html">Commencer les modules</a>
            <a class="button secondary" href="ia.html">Bien utiliser l'IA</a>
          </div>
        </div>
        <div class="hero-visual" aria-hidden="true">
          <div class="code-window">
            <div class="window-bar"><span></span><span></span><span></span></div>
            ${code("idee = 'Je découpe le problème'\nprint(idee)\n\nfor etape in range(1, 4):\n    print('Je teste étape', etape)")}
          </div>
        </div>
      </section>
      ${progressBlock()}
      <section>
        <h2>Parcours</h2>
        ${moduleCards()}
      </section>
    `;
  }

  function renderModules() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    if (id === null) {
      app.innerHTML = `
        <h1 class="page-title">Modules</h1>
        <p class="lead">Une progression complète des bases jusqu'à une première approche des objets.</p>
        ${progressBlock()}
        ${moduleCards()}
      `;
      return;
    }

    const module = modules.find((item) => String(item.id) === String(id));
    if (!module) {
      app.innerHTML = `<h1>Module introuvable</h1><p><a href="modules.html">Retour aux modules</a></p>`;
      return;
    }

    const prev = modules.find((item) => item.id === module.id - 1);
    const next = modules.find((item) => item.id === module.id + 1);
    const sections = [
      ["Objectif", "objectifs"],
      ["Petite histoire ou analogie", "analogie"],
      ["Explication simple", "explication"],
      ["Exemple Python", "exemple"],
      ["À toi de jouer", "activite"],
      ["Exercices progressifs", "exercices"],
      ["Erreurs fréquentes", "erreurs"],
      ["IA coach", "ia"],
      ["Résumé de la leçon", "resume"],
      ["Mini-défi", "mini-defi"]
    ];

    app.innerHTML = `
      <div class="lesson-layout">
        <aside class="toc">
          <strong>Module ${module.id}</strong>
          ${sections.map(([label, id]) => `<a href="#${id}">${label}</a>`).join("")}
        </aside>
        <article class="lesson">
          <span class="tag">Module ${module.id}</span>
          <h1>${escapeHtml(module.title)}</h1>
          <p class="lead">${escapeHtml(module.subtitle)}</p>
          <button class="button small" type="button" data-done-button="${module.id}">Marquer comme terminé</button>

          <section id="objectifs" class="lesson-section">
            <h2>Objectif</h2>
            ${list(module.objectives)}
          </section>
          <section id="analogie" class="lesson-section">
            <h2>Petite histoire ou analogie</h2>
            <p>${escapeHtml(module.analogy)}</p>
          </section>
          <section id="explication" class="lesson-section">
            <h2>Explication simple</h2>
            <p>${escapeHtml(module.explanation)}</p>
            <div class="callout tip"><strong>Astuce :</strong> lis d'abord l'idée, puis seulement ensuite le code.</div>
          </section>
          <section id="exemple" class="lesson-section">
            <h2>Exemple Python</h2>
            ${code(module.code)}
          </section>
          <section id="activite" class="lesson-section">
            <h2>À toi de jouer</h2>
            <div class="callout challenge">${escapeHtml(module.activity)}</div>
            ${module.hasSortLab ? sortLabHtml() : ""}
          </section>
          <section id="exercices" class="lesson-section">
            <h2>Exercices progressifs</h2>
            ${module.exercises
              .map((exercise, index) => `<div id="exercice-${module.id}-${index}">${exerciseHtml(exercise, index, module.id)}</div>`)
              .join("")}
          </section>
          <section id="erreurs" class="lesson-section">
            <h2>Erreurs fréquentes</h2>
            <div class="callout warn">${list(module.mistakes)}</div>
          </section>
          <section id="ia" class="lesson-section">${aiCoachSection()}</section>
          <section id="resume" class="lesson-section">
            <h2>Résumé de la leçon</h2>
            <p>${escapeHtml(module.summary)}</p>
          </section>
          <section id="mini-defi" class="lesson-section">
            <h2>Mini-défi</h2>
            <div class="callout challenge">${escapeHtml(module.miniChallenge)}</div>
          </section>
          <nav class="prev-next" aria-label="Navigation entre modules">
            ${prev ? `<a class="button secondary" href="${moduleUrl(prev.id)}">Module précédent</a>` : "<span></span>"}
            ${next ? `<a class="button" href="${moduleUrl(next.id)}">Module suivant</a>` : `<a class="button" href="projets.html">Voir les projets</a>`}
          </nav>
        </article>
      </div>
    `;
    updateProgressUi();
    setupSortLab();
  }

  function renderExercises() {
    app.innerHTML = `
      <h1 class="page-title">Index des exercices</h1>
      <p class="lead">Tous les exercices sont regroupés ici. Les corrections restent masquées pour encourager la recherche.</p>
      ${modules
        .map(
          (module) => `
            <section class="panel">
              <h2>Module ${module.id} - ${escapeHtml(module.title)}</h2>
              ${module.exercises.map((exercise, index) => exerciseHtml(exercise, index, module.id)).join("")}
            </section>
          `
        )
        .join("")}
    `;
  }

  function renderProjects() {
    app.innerHTML = `
      <h1 class="page-title">Projets finaux</h1>
      <p class="lead">Choisis un projet, construis une version simple, teste-la, puis ajoute des extensions.</p>
      <section class="project-grid">
        ${window.COURSE.projects
          .map(
            (project) => `
              <article class="project-card">
                <span class="tag ${project.difficulty === "Facile" ? "green" : project.difficulty === "Difficile" ? "red" : "yellow"}">${escapeHtml(project.difficulty)}</span>
                <h3>${escapeHtml(project.title)}</h3>
                <p>${escapeHtml(project.description)}</p>
                <p><strong>Notions :</strong> ${escapeHtml(project.notions)}</p>
                <h4>Fonctionnalités attendues</h4>
                ${list(project.features)}
                <h4>Extensions possibles</h4>
                ${list(project.extensions)}
                <div class="callout ai"><strong>IA correcte :</strong> ${escapeHtml(project.ai)}</div>
              </article>
            `
          )
          .join("")}
      </section>
    `;
  }

  function renderAi() {
    app.innerHTML = `
      <h1 class="page-title">Bien utiliser l'IA pour apprendre</h1>
      <p class="lead">Une IA peut être un coach utile, mais elle ne doit pas penser à ta place.</p>
      ${aiCoachSection()}
      <section class="grid">
        <article class="card">
          <h2>Méthode en 5 étapes</h2>
          ${list(["Explique d'abord ce que tu as déjà essayé.", "Demande un indice plutôt que le code complet.", "Teste la réponse dans Python.", "Demande pourquoi le code marche.", "Réécris l'idée avec tes propres mots."])}
        </article>
        <article class="card">
          <h2>Quand vérifier davantage</h2>
          ${list(["Quand l'IA donne un code que tu ne comprends pas.", "Quand le résultat change selon les exemples.", "Quand une erreur disparaît sans explication.", "Quand l'IA invente une commande inconnue."])}
        </article>
        <article class="card">
          <h2>Phrase utile</h2>
          <p>Avant d'utiliser une solution, demande-toi : suis-je capable d'expliquer chaque ligne à un camarade ?</p>
        </article>
      </section>
    `;
  }

  function renderResources() {
    app.innerHTML = `
      <h1 class="page-title">Ressources et inspirations</h1>
      <p class="lead">Ce cours est un contenu original, reformulé pour des élèves de 9 à 12 ans. Les ressources ci-dessous ont inspiré la progression, les outils et les activités, sans copie de longs passages.</p>
      <section class="grid">
        ${window.COURSE.resources
          .map(
            (resource) => `
              <article class="card">
                <h3><a href="${escapeHtml(resource.url)}">${escapeHtml(resource.title)}</a></h3>
                <p>${escapeHtml(resource.note)}</p>
              </article>
            `
          )
          .join("")}
      </section>
      <section class="panel">
        <h2>Pour l'enseignant</h2>
        <p>Les activités débranchées peuvent être faites avant le code. Les exercices de niveau 3 peuvent servir de différenciation. Les corrigés sont volontairement masqués dans le site et visibles à l'impression.</p>
      </section>
    `;
  }

  function sortLabHtml() {
    return `
      <div class="sort-lab">
        <h3>Labo visuel : tri à bulles</h3>
        <div class="bars" data-bars></div>
        <div class="button-row">
          <button class="button small" type="button" data-sort-step>Étape suivante</button>
          <button class="button small secondary" type="button" data-sort-reset>Recommencer</button>
        </div>
        <p data-sort-message>Compare les deux premières barres.</p>
      </div>
    `;
  }

  function setupSortLab() {
    const container = document.querySelector("[data-bars]");
    if (!container) return;
    let values = [5, 2, 8, 3, 6];
    let i = 0;
    let pass = 0;
    const message = document.querySelector("[data-sort-message]");

    function draw(focus = []) {
      container.innerHTML = values
        .map(
          (value, index) =>
            `<div class="bar ${focus.includes(index) ? "focus" : ""}" style="height:${value * 16}px">${value}</div>`
        )
        .join("");
    }

    function step() {
      if (pass >= values.length - 1) {
        message.textContent = "La liste est triée.";
        draw();
        return;
      }
      if (values[i] > values[i + 1]) {
        [values[i], values[i + 1]] = [values[i + 1], values[i]];
        message.textContent = `On échange ${values[i + 1]} et ${values[i]}.`;
      } else {
        message.textContent = `On garde ${values[i]} avant ${values[i + 1]}.`;
      }
      draw([i, i + 1]);
      i += 1;
      if (i >= values.length - 1 - pass) {
        i = 0;
        pass += 1;
      }
    }

    document.querySelector("[data-sort-step]").addEventListener("click", step);
    document.querySelector("[data-sort-reset]").addEventListener("click", () => {
      values = [5, 2, 8, 3, 6];
      i = 0;
      pass = 0;
      message.textContent = "Compare les deux premières barres.";
      draw([0, 1]);
    });
    draw([0, 1]);
  }

  function setupNav() {
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector("#site-nav");
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    document.querySelectorAll(".site-nav a").forEach((link) => {
      const href = link.getAttribute("href");
      if ((page === "home" && href === "index.html") || href.startsWith(`${location.pathname.split("/").pop()}`)) {
        link.classList.add("active");
      }
    });
  }

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-done-button]");
    if (!button) return;
    const id = button.dataset.doneButton;
    setProgress(id, !getProgress()[id]);
  });

  setupNav();
  if (page === "home") renderHome();
  if (page === "modules") renderModules();
  if (page === "exercises") renderExercises();
  if (page === "projects") renderProjects();
  if (page === "ai") renderAi();
  if (page === "resources") renderResources();
})();
