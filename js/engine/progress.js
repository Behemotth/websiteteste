let player = JSON.parse(localStorage.getItem("player")) || {
  xp: 0,
  completed: []
};

function completeLesson(id, xp) {
  if (!player.completed.includes(id)) {
    player.completed.push(id);
    player.xp += xp;
    saveProgress();
  }
}

function saveProgress() {
  localStorage.setItem("player", JSON.stringify(player));
}
