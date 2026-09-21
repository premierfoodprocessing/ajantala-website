const shots = [
  { id: "A01-S01", file: "A01-S01_Grandpa_Opens_the_Tale.png" },
  { id: "A01-S02", file: "A01-S02_Grandpa_Opens_the_Tale.png" },
  { id: "A01-S03", file: "A01-S03_Grandpa_Opens_the_Tale.png" },
  { id: "A02-S01", file: "A02-S01_Ajantala_Is_Born.png" },
  { id: "A02-S02", file: "A02-S02_Ajantala_Is_Born.png" },
  { id: "A02-S03", file: "A02-S03_Ajantala_Is_Born.png" },
  { id: "A02-S04", file: "A02-S04_Ajantala_Is_Born.png" },
  { id: "A03-S01", file: "A03-S01_Ajantala_Sees_Everything.png" },
  { id: "A03-S02", file: "A03-S02_Ajantala_Sees_Everything.png" },
  { id: "A03-S03", file: "A03-S03_Ajantala_Sees_Everything.png" },
  { id: "A03-S04", file: "A03-S04_Ajantala_Sees_Everything.png" },
  { id: "A04-S01", file: "A04-S01_The_Family_Decides.png" },
  { id: "A04-S02", file: "A04-S02_The_Family_Decides.png" },
  { id: "A04-S03", file: "A04-S03_The_Family_Decides.png" },
  { id: "A04-S04", file: "A04-S04_The_Family_Decides.png" },
  { id: "A05-S01", file: "A05-S01_Journey_into_the_Forest.png" },
  { id: "A05-S02", file: "A05-S02_Journey_into_the_Forest.png" },
  { id: "A05-S03", file: "A05-S03_Journey_into_the_Forest.png" },
  { id: "A05-S04", file: "A05-S04_Journey_into_the_Forest.png" },
  { id: "A05-S05", file: "A05-S05_Journey_into_the_Forest.png" },
  { id: "A06-S01", file: "A06-S01_The_Animals_Find_Ajantala.png" },
  { id: "A06-S02", file: "A06-S02_The_Animals_Find_Ajantala.png" },
  { id: "A06-S03", file: "A06-S03_The_Animals_Find_Ajantala.png" },
  { id: "A06-S04", file: "A06-S04_The_Animals_Find_Ajantala.png" },
  { id: "A06-S05", file: "A06-S05_The_Animals_Find_Ajantala.png" },
  { id: "A07-S01", file: "A07-S01_Ajantala_Takes_Charge.png" },
  { id: "A07-S02", file: "A07-S02_Ajantala_Takes_Charge.png" },
  { id: "A07-S03", file: "A07-S03_Ajantala_Takes_Charge.png" },
  { id: "A07-S04", file: "A07-S04_Ajantala_Takes_Charge.png" },
  { id: "A08-S01", file: "A08-S01_The_Forest_Cleanup.png" },
  { id: "A08-S02", file: "A08-S02_The_Forest_Cleanup.png" },
  { id: "A08-S03", file: "A08-S03_The_Forest_Cleanup.png" },
  { id: "A08-S04", file: "A08-S04_The_Forest_Cleanup.png" },
  { id: "A09-S01", file: "A09-S01_The_Secret_Escape_Plan.png" },
  { id: "A09-S02", file: "A09-S02_The_Secret_Escape_Plan.png" },
  { id: "A09-S03", file: "A09-S03_The_Secret_Escape_Plan.png" },
  { id: "A09-S04", file: "A09-S04_The_Secret_Escape_Plan.png" },
  { id: "A10-S01", file: "A10-S01_Ajantala_Hides_in_the_Food.png" },
  { id: "A10-S02", file: "A10-S02_Ajantala_Hides_in_the_Food.png" },
  { id: "A10-S03", file: "A10-S03_Ajantala_Hides_in_the_Food.png" },
  { id: "A10-S04", file: "A10-S04_Ajantala_Hides_in_the_Food.png" },
  { id: "A10-S05", file: "A10-S05_Ajantala_Hides_in_the_Food.png" },
  { id: "A11-S01", file: "A11-S01_Monkey_and_the_Bag.png" },
  { id: "A11-S02", file: "A11-S02_Monkey_and_the_Bag.png" },
  { id: "A11-S03", file: "A11-S03_Monkey_and_the_Bag.png" },
  { id: "A11-S04", file: "A11-S04_Monkey_and_the_Bag.png" },
  { id: "A11-S05", file: "A11-S05_Monkey_and_the_Bag.png" },
  { id: "A12-S01", file: "A12-S01_Hare_and_the_Bag.png" },
  { id: "A12-S02", file: "A12-S02_Hare_and_the_Bag.png" },
  { id: "A12-S03", file: "A12-S03_Hare_and_the_Bag.png" },
  { id: "A12-S04", file: "A12-S04_Hare_and_the_Bag.png" },
  { id: "A12-S05", file: "A12-S05_Hare_and_the_Bag.png" },
  { id: "A13-S01", file: "A13-S01_Zebra_and_the_Bag.png" },
  { id: "A13-S02", file: "A13-S02_Zebra_and_the_Bag.png" },
  { id: "A13-S03", file: "A13-S03_Zebra_and_the_Bag.png" },
  { id: "A13-S04", file: "A13-S04_Zebra_and_the_Bag.png" },
  { id: "A13-S05", file: "A13-S05_Zebra_and_the_Bag.png" },
  { id: "A14-S01", file: "A14-S01_Lion_and_the_Bag.png" },
  { id: "A14-S02", file: "A14-S02_Lion_and_the_Bag.png" },
  { id: "A14-S03", file: "A14-S03_Lion_and_the_Bag.png" },
  { id: "A14-S04", file: "A14-S04_Lion_and_the_Bag.png" },
  { id: "A14-S05", file: "A14-S05_Lion_and_the_Bag.png" },
  { id: "A15-S01", file: "A15-S01_Cheetah_Horse_and_Tortoise.png" },
  { id: "A15-S02", file: "A15-S02_Cheetah_Horse_and_Tortoise.png" },
  { id: "A15-S03", file: "A15-S03_Cheetah_Horse_and_Tortoise.png" },
  { id: "A15-S04", file: "A15-S04_Cheetah_Horse_and_Tortoise.png" },
  { id: "A15-S05", file: "A15-S05_Cheetah_Horse_and_Tortoise.png" },
  { id: "A16-S01", file: "A16-S01_Tortoise_Raises_the_Alarm.png" },
  { id: "A16-S02", file: "A16-S02_Tortoise_Raises_the_Alarm.png" },
  { id: "A16-S03", file: "A16-S03_Tortoise_Raises_the_Alarm.png" },
  { id: "A16-S04", file: "A16-S04_Tortoise_Raises_the_Alarm.png" },
  { id: "A16-S05", file: "A16-S05_Tortoise_Raises_the_Alarm.png" },
  { id: "A16-S06", file: "A16-S06_Tortoise_Raises_the_Alarm.png" },
  { id: "A16-S07", file: "A16-S07_Tortoise_Raises_the_Alarm.png" },
  { id: "A16-S08", file: "A16-S08_Tortoise_Raises_the_Alarm.png" },
  { id: "A16-S09", file: "A16-S09_Tortoise_Raises_the_Alarm.png" },
  { id: "A16-S10", file: "A16-S10_Tortoise_Raises_the_Alarm.png" },
  { id: "A17-S01", file: "A17-S01_The_Moral_and_The_End.png" },
  { id: "A17-S02", file: "A17-S02_The_Moral_and_The_End.png" },
  { id: "A17-S03", file: "A17-S03_The_Moral_and_The_End.png" },
  { id: "A17-S04", file: "A17-S04_The_Moral_and_The_End.png" },
  { id: "A17-S05", file: "A17-S05_The_Moral_and_The_End.png" },
  { id: "A17-S06", file: "A17-S06_The_Moral_and_The_End.png" }
];

const scenes = [
  { id: "A01", title: "Grandpa Opens the Tale", tag: "The beginning", kind: "ajantala", copy: "Every journey begins with a voice by the fire.", color: "#c4d2bd" },
  { id: "A02", title: "Ajantala Is Born", tag: "A new arrival", kind: "ajantala", copy: "A child arrives with a world of wonder in his eyes.", color: "#e5bd8c" },
  { id: "A03", title: "Ajantala Sees Everything", tag: "The gift", kind: "ajantala", copy: "Nothing escapes the little one who notices all.", color: "#becbd3" },
  { id: "A04", title: "The Family Decides", tag: "A hard choice", kind: "ajantala", copy: "The family makes a decision that changes the path.", color: "#d8b68e" },
  { id: "A05", title: "Journey into the Forest", tag: "Into the green", kind: "ajantala", copy: "Beyond the village, the forest opens its arms.", color: "#a9c5a3" },
  { id: "A06", title: "The Animals Find Ajantala", tag: "New friends", kind: "animals", copy: "Curious eyes gather around an unexpected guest.", color: "#d6bd9d" },
  { id: "A07", title: "Ajantala Takes Charge", tag: "A small leader", kind: "ajantala", copy: "Courage sounds different when you are very small.", color: "#d5ae8c" },
  { id: "A08", title: "The Forest Cleanup", tag: "Together", kind: "animals", copy: "Many hands—and paws—make a home worth keeping.", color: "#a8c6a5" },
  { id: "A09", title: "The Secret Escape Plan", tag: "A clever idea", kind: "animals", copy: "The animals whisper a plan beneath the leaves.", color: "#b8c4a1" },
  { id: "A10", title: "Ajantala Hides in the Food", tag: "A daring trick", kind: "ajantala", copy: "Sometimes the best hiding place is the last one you expect.", color: "#deb47c" },
  { id: "A11", title: "Monkey and the Bag", tag: "A first attempt", kind: "animals", copy: "The monkey brings speed, mischief, and a very useful bag.", color: "#bdab8e" },
  { id: "A12", title: "Hare and the Bag", tag: "Quick thinking", kind: "animals", copy: "Hare proves that a sharp mind can outrun trouble.", color: "#ced1b4" },
  { id: "A13", title: "Zebra and the Bag", tag: "Stand together", kind: "animals", copy: "Zebra steps forward, stripes bright against the dark.", color: "#c2c4b2" },
  { id: "A14", title: "Lion and the Bag", tag: "The brave heart", kind: "animals", copy: "Even the strongest friend needs a little help.", color: "#d0a56d" },
  { id: "A15", title: "Cheetah, Horse & Tortoise", tag: "A race of trust", kind: "animals", copy: "Different speeds, one shared direction.", color: "#dcb580" },
  { id: "A16", title: "Tortoise Raises the Alarm", tag: "The turning point", kind: "animals", copy: "A quiet voice rings out when it matters most.", color: "#a7c0a0" },
  { id: "A17", title: "The Moral and the End", tag: "The lesson", kind: "ajantala", copy: "The tale closes, but its wisdom keeps walking.", color: "#e2aa75" }
];

const grid = document.querySelector("#chapter-grid");
const dialog = document.querySelector("#chapter-dialog");
const readerImage = document.querySelector("#reader-image");
const readerCaption = document.querySelector("#reader-caption");
const readerTitle = document.querySelector("#dialog-title");
const readerKicker = document.querySelector("#dialog-kicker");
const readerCount = document.querySelector("#reader-count");
const progressFill = document.querySelector("#reader-progress-fill");
const search = document.querySelector("#chapter-search");
let activeFilter = "all";
let activeScene = null;
let activeShot = 0;

function sceneShots(scene) {
  return shots.filter((shot) => shot.id.startsWith(scene.id + "-"));
}

function renderChapters() {
  const query = search.value.trim().toLowerCase();
  const visible = scenes.filter((scene) => {
    const matchesFilter = activeFilter === "all" || scene.kind === activeFilter;
    const matchesSearch = !query || (scene.title + " " + scene.tag).toLowerCase().includes(query);
    return matchesFilter && matchesSearch;
  });
  grid.innerHTML = visible.length ? visible.map((scene) => {
    const first = sceneShots(scene)[0];
    return '<button class="chapter-card" data-scene="' + scene.id + '" aria-label="Open chapter ' + scene.id + ': ' + scene.title + '">' +
      '<span class="card-image" style="background:' + scene.color + '"><img src="public/assets/' + first.file + '" alt="" loading="lazy"><span class="card-number">' + scene.id + '</span></span>' +
      '<span class="card-copy"><h3>' + scene.title + '</h3><p>' + scene.tag + ' · ' + sceneShots(scene).length + ' moments</p></span></button>';
  }).join("") : '<p class="empty-state">No chapters match that search.</p>';
  grid.querySelectorAll("[data-scene]").forEach((card) => card.addEventListener("click", () => openReader(card.dataset.scene)));
}

function updateReader() {
  const current = sceneShots(activeScene)[activeShot];
  const total = sceneShots(activeScene).length;
  readerImage.src = "public/assets/" + current.file;
  readerImage.alt = activeScene.title + ", story moment " + (activeShot + 1);
  readerCaption.textContent = "Story moment " + (activeShot + 1) + " of " + total;
  readerCount.textContent = activeScene.id + " / " + String(activeShot + 1).padStart(2, "0");
  progressFill.style.width = ((activeShot + 1) / total) * 100 + "%";
}

function openReader(id) {
  activeScene = scenes.find((scene) => scene.id === id);
  activeShot = 0;
  readerTitle.textContent = activeScene.title;
  readerKicker.textContent = activeScene.id + " / " + activeScene.tag;
  updateReader();
  dialog.showModal();
}

function moveShot(direction) {
  if (!activeScene) return;
  const total = sceneShots(activeScene).length;
  activeShot = (activeShot + direction + total) % total;
  updateReader();
}

document.querySelectorAll(".filter").forEach((button) => button.addEventListener("click", () => {
  document.querySelector(".filter.is-active").classList.remove("is-active");
  button.classList.add("is-active");
  activeFilter = button.dataset.filter;
  renderChapters();
}));
search.addEventListener("input", renderChapters);
document.querySelector("#close-reader").addEventListener("click", () => dialog.close());
document.querySelector("#prev-shot").addEventListener("click", () => moveShot(-1));
document.querySelector("#next-shot").addEventListener("click", () => moveShot(1));
dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
document.addEventListener("keydown", (event) => {
  if (!dialog.open) return;
  if (event.key === "ArrowLeft") moveShot(-1);
  if (event.key === "ArrowRight") moveShot(1);
});
renderChapters();

