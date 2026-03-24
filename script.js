const dayOrder = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const mealOrder = ["Breakfast", "Lunch", "Dinner", "Snack"];

    const dayLabel = {
      Monday: "Montag",
      Tuesday: "Dienstag",
      Wednesday: "Mittwoch",
      Thursday: "Donnerstag",
      Friday: "Freitag",
      Saturday: "Samstag",
      Sunday: "Sonntag"
    };

    const mealLabel = {
      Breakfast: "Frühstück",
      Lunch: "Lunch",
      Dinner: "Dinner",
      Snack: "Snack"
    };

    const unitByFood = {
      "Eier": "Stk",
      "Ei": "Stk",
      "Omelette Eier": "Stk",
      "Apfel": "Stk",
      "Banane": "Stk",
      "Proteinshake": "Portion",
      "Vollkornbrot": "Scheibe"
    };

    const baseRows = [
      { day: "Monday", meal: "Breakfast", food: "Skyr", mikeAmount: 250, anaAmount: 180.0 },
      { day: "Monday", meal: "Breakfast", food: "Beeren", mikeAmount: 50, anaAmount: 40.0 },
      { day: "Monday", meal: "Breakfast", food: "Nüsse", mikeAmount: 15, anaAmount: 10.0 },
      { day: "Monday", meal: "Lunch", food: "Hähnchen", mikeAmount: 200, anaAmount: 140.0 },
      { day: "Monday", meal: "Lunch", food: "Reis", mikeAmount: 180, anaAmount: 120.0 },
      { day: "Monday", meal: "Lunch", food: "Brokkoli", mikeAmount: 150, anaAmount: 120.0 },
      { day: "Monday", meal: "Dinner", food: "Eier", mikeAmount: 3, anaAmount: 2.0 },
      { day: "Monday", meal: "Dinner", food: "Spinat", mikeAmount: 100, anaAmount: 80.0 },
      { day: "Monday", meal: "Snack", food: "Apfel", mikeAmount: 1, anaAmount: 1.0 },
      { day: "Monday", meal: "Snack", food: "Proteinshake", mikeAmount: 1, anaAmount: 1.0 },
      { day: "Tuesday", meal: "Breakfast", food: "Proteinshake", mikeAmount: 1, anaAmount: 1.0 },
      { day: "Tuesday", meal: "Breakfast", food: "Banane", mikeAmount: 1, anaAmount: 0.5 },
      { day: "Tuesday", meal: "Lunch", food: "Lachs", mikeAmount: 180, anaAmount: 130.0 },
      { day: "Tuesday", meal: "Lunch", food: "Kartoffeln", mikeAmount: 250, anaAmount: 180.0 },
      { day: "Tuesday", meal: "Lunch", food: "Spargel", mikeAmount: 150, anaAmount: 120.0 },
      { day: "Tuesday", meal: "Dinner", food: "Hüttenkäse", mikeAmount: 200, anaAmount: 150.0 },
      { day: "Tuesday", meal: "Dinner", food: "Avocado", mikeAmount: 100, anaAmount: 70.0 },
      { day: "Tuesday", meal: "Snack", food: "Mandeln", mikeAmount: 20, anaAmount: 15.0 },
      { day: "Wednesday", meal: "Breakfast", food: "Skyr", mikeAmount: 250, anaAmount: 180.0 },
      { day: "Wednesday", meal: "Breakfast", food: "Beeren", mikeAmount: 50, anaAmount: 40.0 },
      { day: "Wednesday", meal: "Lunch", food: "Rind", mikeAmount: 180, anaAmount: 130.0 },
      { day: "Wednesday", meal: "Lunch", food: "Quinoa", mikeAmount: 150, anaAmount: 100.0 },
      { day: "Wednesday", meal: "Lunch", food: "Gemüse", mikeAmount: 150, anaAmount: 120.0 },
      { day: "Wednesday", meal: "Dinner", food: "Thunfisch", mikeAmount: 150, anaAmount: 120.0 },
      { day: "Wednesday", meal: "Dinner", food: "Ei", mikeAmount: 1, anaAmount: 1.0 },
      { day: "Wednesday", meal: "Snack", food: "Proteinshake", mikeAmount: 1, anaAmount: 1.0 },
      { day: "Thursday", meal: "Breakfast", food: "Omelette Eier", mikeAmount: 3, anaAmount: 2.0 },
      { day: "Thursday", meal: "Breakfast", food: "Vollkornbrot", mikeAmount: 1, anaAmount: 0.5 },
      { day: "Thursday", meal: "Lunch", food: "Hähnchen", mikeAmount: 200, anaAmount: 140.0 },
      { day: "Thursday", meal: "Lunch", food: "Reis", mikeAmount: 180, anaAmount: 120.0 },
      { day: "Thursday", meal: "Lunch", food: "Gemüse", mikeAmount: 150, anaAmount: 120.0 },
      { day: "Thursday", meal: "Dinner", food: "Skyr", mikeAmount: 250, anaAmount: 180.0 },
      { day: "Thursday", meal: "Dinner", food: "Beeren", mikeAmount: 50, anaAmount: 40.0 },
      { day: "Thursday", meal: "Snack", food: "Apfel", mikeAmount: 1, anaAmount: 1.0 },
      { day: "Friday", meal: "Breakfast", food: "Skyr", mikeAmount: 250, anaAmount: 180.0 },
      { day: "Friday", meal: "Breakfast", food: "Beeren", mikeAmount: 50, anaAmount: 40.0 },
      { day: "Friday", meal: "Breakfast", food: "Nüsse", mikeAmount: 15, anaAmount: 10.0 },
      { day: "Friday", meal: "Lunch", food: "Lachs", mikeAmount: 180, anaAmount: 130.0 },
      { day: "Friday", meal: "Lunch", food: "Reis", mikeAmount: 180, anaAmount: 120.0 },
      { day: "Friday", meal: "Lunch", food: "Avocado", mikeAmount: 80, anaAmount: 60.0 },
      { day: "Friday", meal: "Dinner", food: "Omelette Eier", mikeAmount: 3, anaAmount: 2.0 },
      { day: "Friday", meal: "Snack", food: "Proteinshake", mikeAmount: 1, anaAmount: 1.0 },
      { day: "Saturday", meal: "Breakfast", food: "Proteinshake", mikeAmount: 1, anaAmount: 1.0 },
      { day: "Saturday", meal: "Breakfast", food: "Banane", mikeAmount: 1, anaAmount: 0.5 },
      { day: "Saturday", meal: "Lunch", food: "Steak", mikeAmount: 200, anaAmount: 140.0 },
      { day: "Saturday", meal: "Lunch", food: "Kartoffeln", mikeAmount: 250, anaAmount: 180.0 },
      { day: "Saturday", meal: "Lunch", food: "Salat", mikeAmount: 150, anaAmount: 120.0 },
      { day: "Saturday", meal: "Dinner", food: "Hüttenkäse", mikeAmount: 200, anaAmount: 150.0 },
      { day: "Saturday", meal: "Dinner", food: "Tomaten", mikeAmount: 100, anaAmount: 80.0 },
      { day: "Saturday", meal: "Snack", food: "Dunkle Schokolade", mikeAmount: 20, anaAmount: 15.0 },
      { day: "Sunday", meal: "Breakfast", food: "Skyr", mikeAmount: 250, anaAmount: 180.0 },
      { day: "Sunday", meal: "Breakfast", food: "Beeren", mikeAmount: 50, anaAmount: 40.0 },
      { day: "Sunday", meal: "Breakfast", food: "Nüsse", mikeAmount: 15, anaAmount: 10.0 },
      { day: "Sunday", meal: "Lunch", food: "Hähnchen", mikeAmount: 200, anaAmount: 140.0 },
      { day: "Sunday", meal: "Lunch", food: "Quinoa", mikeAmount: 150, anaAmount: 100.0 },
      { day: "Sunday", meal: "Lunch", food: "Ofengemüse", mikeAmount: 150, anaAmount: 120.0 },
      { day: "Sunday", meal: "Dinner", food: "Thunfisch", mikeAmount: 150, anaAmount: 120.0 },
      { day: "Sunday", meal: "Snack", food: "Proteinshake", mikeAmount: 1, anaAmount: 1.0 }
    ];

    const toNumber = (value) => {
      const n = Number(value);
      if (Number.isNaN(n)) return value;
      return Number.isInteger(n) ? n.toString() : n.toFixed(1);
    };

    const getUnit = (food) => unitByFood[food] || "g";

    let idCounter = 1;
    let activeShoppingMode = "both";
    let entries = createEntriesFromCombined(baseRows);
    const openDayState = { Mike: new Set(), Ana: new Set() };

    function nextId() {
      const id = `e-${idCounter}`;
      idCounter += 1;
      return id;
    }

    function createEntriesFromCombined(rows) {
      const out = [];
      rows.forEach((row) => {
        out.push({ id: nextId(), person: "Mike", day: row.day, meal: row.meal, food: row.food, amount: Number(row.mikeAmount) || 0 });
        out.push({ id: nextId(), person: "Ana", day: row.day, meal: row.meal, food: row.food, amount: Number(row.anaAmount) || 0 });
      });
      return out;
    }

    function escapeHtml(value) {
      return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;")
        .replace(/'/g, "&#39;");
    }

    function optionList(items, selected, labelMap = {}) {
      return items
        .map((item) => `<option value="${item}" ${item === selected ? "selected" : ""}>${labelMap[item] || item}</option>`)
        .join("");
    }

    function captureOpenState() {
      [
        { person: "Mike", id: "mike-plan" },
        { person: "Ana", id: "ana-plan" }
      ].forEach(({ person, id }) => {
        const host = document.getElementById(id);
        if (!host) return;
        openDayState[person].clear();
        host.querySelectorAll(".day-details").forEach((details) => {
          const day = details.getAttribute("data-day");
          if (details.open && day) openDayState[person].add(day);
        });
      });
    }

    function renderAll() {
      captureOpenState();
      renderPersonPlan("Mike", "mike-plan");
      renderPersonPlan("Ana", "ana-plan");
      renderShoppingTable(activeShoppingMode);
    }

    function renderPersonPlan(person, targetId) {
      const container = document.getElementById(targetId);
      const personRows = entries.filter((row) => row.person === person);
      const dayBlocks = dayOrder
        .map((day) => {
          const mealBlocks = mealOrder
            .map((meal) => {
              const items = personRows.filter((row) => row.day === day && row.meal === meal);
              if (items.length === 0) return "";
              const body = items
                .map((item) => {
                  return `<tr>
                    <td class="meal-cell meal-cell-food" data-label="Food"><input class="cell-input" data-id="${item.id}" data-field="food" value="${escapeHtml(item.food)}"></td>
                    <td class="meal-cell meal-cell-amount" data-label="Menge"><input class="cell-input cell-num" data-id="${item.id}" data-field="amount" type="number" step="0.1" min="0" value="${toNumber(item.amount)}"></td>
                    <td class="meal-cell meal-cell-unit" data-label="Einheit">${getUnit(item.food)}</td>
                    <td class="meal-cell meal-cell-day" data-label="Tag"><select class="cell-select" data-id="${item.id}" data-field="day">${optionList(dayOrder, item.day, dayLabel)}</select></td>
                    <td class="meal-cell meal-cell-meal" data-label="Meal"><select class="cell-select" data-id="${item.id}" data-field="meal">${optionList(mealOrder, item.meal, mealLabel)}</select></td>
                    <td class="meal-cell meal-cell-action" data-label="Aktion"><button class="mini-btn" type="button" data-delete-id="${item.id}">Löschen</button></td>
                  </tr>`;
                })
                .join("");

              return `<div class="meal">
                <span class="meal-name">${mealLabel[meal] || meal}</span>
                <table class="meal-table">
                  <thead><tr><th>Food</th><th>Menge</th><th>Einheit</th><th>Tag</th><th>Meal</th><th>Aktion</th></tr></thead>
                  <tbody>${body}</tbody>
                </table>
              </div>`;
            })
            .join("");

          return `<details class="day-details" data-day="${day}" ${openDayState[person].has(day) ? "open" : ""}>
            <summary class="day-summary">${dayLabel[day] || day}</summary>
            <div class="day-content">${mealBlocks || `<p class="muted">Keine Einträge.</p>`}</div>
          </details>`;
        })
        .join("");

      container.innerHTML = dayBlocks;
    }

    function renderShoppingTable(mode) {
      const target = document.getElementById("shopping-list");
      const selectedPeople = mode === "both" ? ["Mike", "Ana"] : [mode === "mike" ? "Mike" : "Ana"];
      const bucket = {};

      entries
        .filter((row) => selectedPeople.includes(row.person))
        .forEach((row) => {
          const unit = getUnit(row.food);
          const key = `${row.food}__${unit}`;
          if (!bucket[key]) {
            bucket[key] = { food: row.food, unit, mike: 0, ana: 0 };
          }
          if (row.person === "Mike") bucket[key].mike += Number(row.amount) || 0;
          if (row.person === "Ana") bucket[key].ana += Number(row.amount) || 0;
        });

      const list = Object.values(bucket).sort((a, b) => a.food.localeCompare(b.food, "de"));
      const showMike = mode === "both" || mode === "mike";
      const showAna = mode === "both" || mode === "ana";
      const showTotal = mode === "both";

      const head = [
        "<th>Lebensmittel</th>",
        showMike ? "<th>Mike</th>" : "",
        showAna ? "<th>Ana</th>" : "",
        showTotal ? "<th>Gesamt</th>" : "",
        "<th>Einheit</th>"
      ].join("");

      const body = list
        .map((item) => {
          const total = item.mike + item.ana;
          return `<tr>
            <td>${escapeHtml(item.food)}</td>
            ${showMike ? `<td>${toNumber(item.mike)}</td>` : ""}
            ${showAna ? `<td>${toNumber(item.ana)}</td>` : ""}
            ${showTotal ? `<td>${toNumber(total)}</td>` : ""}
            <td>${item.unit}</td>
          </tr>`;
        })
        .join("");

      target.innerHTML = `<div class="shopping-table-wrap"><table class="shopping-table"><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table></div>`;
    }

    function parseCsv(text) {
      const rows = [];
      let row = [];
      let cell = "";
      let inQuotes = false;

      for (let i = 0; i < text.length; i += 1) {
        const ch = text[i];
        const next = text[i + 1];

        if (ch === '"') {
          if (inQuotes && next === '"') {
            cell += '"';
            i += 1;
          } else {
            inQuotes = !inQuotes;
          }
        } else if (ch === "," && !inQuotes) {
          row.push(cell);
          cell = "";
        } else if ((ch === "\n" || ch === "\r") && !inQuotes) {
          if (ch === "\r" && next === "\n") i += 1;
          row.push(cell);
          if (row.some((c) => c !== "")) rows.push(row);
          row = [];
          cell = "";
        } else {
          cell += ch;
        }
      }

      if (cell.length > 0 || row.length > 0) {
        row.push(cell);
        if (row.some((c) => c !== "")) rows.push(row);
      }

      return rows;
    }

    function fromImportedCsv(text) {
      const parsed = parseCsv(text.trim());
      if (parsed.length < 2) throw new Error("CSV ist leer oder unvollständig.");

      const headers = parsed[0].map((h) => h.trim().toLowerCase());
      const dataRows = parsed.slice(1);
      const index = (key) => headers.indexOf(key);

      const isPersonFormat = ["person", "day", "meal", "food", "amount"].every((k) => index(k) >= 0);
      const isCombinedFormat = ["day", "meal", "food"].every((k) => index(k) >= 0)
        && index("mike_amount") >= 0
        && (index("ana_amount") >= 0 || index("girlfriend_amount") >= 0);

      const imported = [];

      if (isPersonFormat) {
        dataRows.forEach((r) => {
          const personRaw = (r[index("person")] || "").trim();
          const person = personRaw.toLowerCase() === "ana" ? "Ana" : "Mike";
          const day = normalizeDay((r[index("day")] || "").trim());
          const meal = normalizeMeal((r[index("meal")] || "").trim());
          const food = (r[index("food")] || "").trim();
          const amount = Number((r[index("amount")] || "0").replace(",", "."));
          if (!food) return;
          imported.push({ id: nextId(), person, day, meal, food, amount: Number.isFinite(amount) ? amount : 0 });
        });
      } else if (isCombinedFormat) {
        const anaIx = index("ana_amount") >= 0 ? index("ana_amount") : index("girlfriend_amount");
        dataRows.forEach((r) => {
          const day = normalizeDay((r[index("day")] || "").trim());
          const meal = normalizeMeal((r[index("meal")] || "").trim());
          const food = (r[index("food")] || "").trim();
          const mikeAmount = Number((r[index("mike_amount")] || "0").replace(",", "."));
          const anaAmount = Number((r[anaIx] || "0").replace(",", "."));
          if (!food) return;
          imported.push({ id: nextId(), person: "Mike", day, meal, food, amount: Number.isFinite(mikeAmount) ? mikeAmount : 0 });
          imported.push({ id: nextId(), person: "Ana", day, meal, food, amount: Number.isFinite(anaAmount) ? anaAmount : 0 });
        });
      } else {
        throw new Error("CSV-Format nicht erkannt. Nutze Person/Day/Meal/Food/Amount oder Day/Meal/Food/Mike_amount/Ana_amount.");
      }

      if (imported.length === 0) throw new Error("Keine gültigen Datensätze in CSV gefunden.");
      return imported;
    }

    function normalizeDay(day) {
      if (dayOrder.includes(day)) return day;
      const map = {
        montag: "Monday",
        dienstag: "Tuesday",
        mittwoch: "Wednesday",
        donnerstag: "Thursday",
        freitag: "Friday",
        samstag: "Saturday",
        sonntag: "Sunday"
      };
      return map[day.toLowerCase()] || "Monday";
    }

    function normalizeMeal(meal) {
      if (mealOrder.includes(meal)) return meal;
      const map = {
        fruehstueck: "Breakfast",
        frühstück: "Breakfast",
        lunch: "Lunch",
        dinner: "Dinner",
        snack: "Snack"
      };
      return map[meal.toLowerCase()] || "Breakfast";
    }

    function csvEscape(value) {
      const s = String(value ?? "");
      if (s.includes('"') || s.includes(",") || s.includes("\n")) {
        return '"' + s.replace(/"/g, '""') + '"';
      }
      return s;
    }

    function exportCurrentPlanCsv() {
      const lines = ["Person,Day,Meal,Food,Amount"];
      entries.forEach((row) => {
        lines.push([
          csvEscape(row.person),
          csvEscape(row.day),
          csvEscape(row.meal),
          csvEscape(row.food),
          csvEscape(toNumber(row.amount))
        ].join(","));
      });

      const blob = new Blob(["\ufeff" + lines.join("\n")], { type: "text/csv;charset=utf-8" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "meal_plan_interactive.csv";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    }

    function bindEvents() {
      const mikePlan = document.getElementById("mike-plan");
      const anaPlan = document.getElementById("ana-plan");

      [mikePlan, anaPlan].forEach((container) => {
        container.addEventListener("input", handlePlanFieldUpdate);
        container.addEventListener("change", handlePlanFieldUpdate);
        container.addEventListener("click", (event) => {
          const deleteId = event.target.getAttribute("data-delete-id");
          if (!deleteId) return;
          entries = entries.filter((row) => row.id !== deleteId);
          renderAll();
        });
      });

      document.querySelectorAll("[data-add-person]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const person = btn.getAttribute("data-add-person");
          entries.push({ id: nextId(), person, day: "Monday", meal: "Breakfast", food: "", amount: 0 });
          renderAll();
        });
      });

      const csvInput = document.getElementById("csv-input");
      document.getElementById("load-csv-btn").addEventListener("click", () => csvInput.click());

      csvInput.addEventListener("change", (event) => {
        const file = event.target.files && event.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
          try {
            entries = fromImportedCsv(String(reader.result || ""));
            renderAll();
          } catch (err) {
            alert(err.message || "CSV konnte nicht geladen werden.");
          }
        };
        reader.readAsText(file, "utf-8");
        csvInput.value = "";
      });

      document.getElementById("export-csv-btn").addEventListener("click", exportCurrentPlanCsv);

      const filterButtons = document.querySelectorAll(".filter-btn");
      filterButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
          filterButtons.forEach((el) => el.classList.remove("active"));
          btn.classList.add("active");
          activeShoppingMode = btn.getAttribute("data-mode") || "both";
          renderShoppingTable(activeShoppingMode);
        });
      });
    }

    function handlePlanFieldUpdate(event) {
      const id = event.target.getAttribute("data-id");
      const field = event.target.getAttribute("data-field");
      if (!id || !field) return;

      const idx = entries.findIndex((row) => row.id === id);
      if (idx < 0) return;

      if (field === "amount") {
        const n = Number(String(event.target.value).replace(",", "."));
        entries[idx].amount = Number.isFinite(n) ? n : 0;
      } else {
        entries[idx][field] = event.target.value;
      }

      if (field === "day" || field === "meal") {
        renderAll();
      } else if (field === "food" || field === "amount") {
        renderShoppingTable(activeShoppingMode);
      }
    }

    bindEvents();
    renderAll();

