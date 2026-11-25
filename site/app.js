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

function play(game) {
  // id는 영문 소문자, 숫자, 하이픈만 허용 (경로 조작 방지)
  if (!/^[a-z0-9-]+$/.test(game.id)) return;
  document.getElementById("player-title").textContent = game.title;
  document.getElementById("frame").src = `${GAMES_ORIGIN}/${game.id}/`;
  document.getElementById("player").style.display = "block";
}

main();
