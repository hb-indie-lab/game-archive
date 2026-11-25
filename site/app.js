// 게임 샌드박스 주소. 사이트와 다른 출처(origin)여야 한다.
const GAMES_ORIGIN = "https://hb-indie-lab-play.pages.dev";

async function main() {
  const res = await fetch("games.json");
  const games = await res.json();
  const list = document.getElementById("list");

  for (const game of games) {
    const li = document.createElement("li");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    // textContent 사용: games.json 내용이 HTML로 해석되지 않게
    h3.textContent = game.title;
    p.textContent = `${game.author} · ${game.description}`;
    li.append(h3, p);
    li.addEventListener("click", () => play(game));
    list.append(li);
  }
}

// 화면 폭이 이 이하이면 게임을 열 때 바로 전체 화면으로
const MOBILE = window.matchMedia("(max-width: 600px)");
const player = document.getElementById("player");
const frame = document.getElementById("frame");

function play(game) {
  // id는 영문 소문자, 숫자, 하이픈만 허용 (경로 조작 방지)
  if (!/^[a-z0-9-]+$/.test(game.id)) return;
  document.getElementById("player-title").textContent = game.title;
  frame.src = `${GAMES_ORIGIN}/${game.id}/`;
  player.classList.add("open");
  if (MOBILE.matches) enterFull();
  else player.scrollIntoView({ behavior: "smooth", block: "start" });
}

function enterFull() {
  if (player.classList.contains("full")) return;
  player.classList.add("full");
  document.body.classList.add("no-scroll");
  // 휴대폰 뒤로 가기 버튼으로 전체 화면만 닫히게 기록을 하나 쌓는다
  history.pushState({ full: true }, "");
  frame.focus();
}

function exitFull(fromPopState) {
  if (!player.classList.contains("full")) return;
  player.classList.remove("full");
  document.body.classList.remove("no-scroll");
  if (!fromPopState) history.back();
}

document.getElementById("btn-full").addEventListener("click", enterFull);
document.getElementById("btn-close").addEventListener("click", () => exitFull(false));
window.addEventListener("popstate", () => exitFull(true));
document.addEventListener("keydown", (e) => { if (e.key === "Escape") exitFull(false); });

main();
