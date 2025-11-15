// catching the buttons

const boxes = document.querySelectorAll(".box");

const resetBtn = document.querySelector(".reset-btn");

const winnercnt = document.querySelector(".hide");

const winnerHng = document.querySelector("h2");

const newGameBtn = document.querySelector(".newGameBtn");

let turnO = true; // playerO turn

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.textContent = "O";
      turnO = false;
    } else {
      box.textContent = "X";
      turnO = true;
    }
    box.disabled = true;
    Checkwinner();
  });
});

const resetGame = () => {
  turnO = true;
  ensbleBoxes();
  winnercnt.classList.add("hide");
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const ensbleBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.textContent = "";
  }
};
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

const Checkwinner = () => {
  for (let patterns of winPatterns) {
    let pos1val = boxes[patterns[0]].textContent;
    let pos2Val = boxes[patterns[1]].textContent;
    let pos3val = boxes[patterns[2]].textContent;

    if (pos1val != "" && pos2Val != "" && pos3val != "") {
      if (pos1val === pos2Val && pos2Val === pos3val) {
        console.log("winner", pos1val);
        winnercnt.classList.remove("hide");
        winnerHng.textContent = `congratulations , winner ${pos1val}`;
        disableBoxes();
      }
    }
  }
};

resetBtn.addEventListener("click", () => {
  boxes.textContent = " ";
});
