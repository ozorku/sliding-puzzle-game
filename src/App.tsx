import React, { useState, useEffect } from "react";

function App() {
  const [shuffledNumbers, setShuffledNumbers] = useState([]);

  useEffect(() => {
    shuffleNumbers();
  }, []);

  const handlePlay = (cellClicked: number, value: number) => {
    // cells
    let cell1 = document.querySelector(".cell-1")?.innerHTML;
    let cell2 = document.querySelector(".cell-2")?.innerHTML;
    let cell3 = document.querySelector(".cell-3")?.innerHTML;
    let cell4 = document.querySelector(".cell-4")?.innerHTML;
    let cell5 = document.querySelector(".cell-5")?.innerHTML;
    let cell6 = document.querySelector(".cell-6")?.innerHTML;
    let cell7 = document.querySelector(".cell-7")?.innerHTML;
    let cell8 = document.querySelector(".cell-8")?.innerHTML;
    let cell9 = document.querySelector(".cell-9")?.innerHTML;
    let cell10 = document.querySelector(".cell-10")?.innerHTML;
    let cell11 = document.querySelector(".cell-11")?.innerHTML;
    let cell12 = document.querySelector(".cell-12")?.innerHTML;
    let cell13 = document.querySelector(".cell-13")?.innerHTML;
    let cell14 = document.querySelector(".cell-14")?.innerHTML;
    let cell15 = document.querySelector(".cell-15")?.innerHTML;
    let cell16 = document.querySelector(".cell-16")?.innerHTML;

    // let emptyCell: string = "";
    const getEmptyCell = () => {
      if (cell1 === "") {
        return "1";
      } else if (cell2 === "") {
        return "2";
      } else if (cell3 === "") {
        return "3";
      } else if (cell4 === "") {
        return "4";
      } else if (cell5 === "") {
        return "5";
      } else if (cell6 === "") {
        return "6";
      } else if (cell7 === "") {
        return "7";
      } else if (cell8 === "") {
        return "8";
      } else if (cell9 === "") {
        return "9";
      } else if (cell10 === "") {
        return "10";
      } else if (cell11 === "") {
        return "11";
      } else if (cell12 === "") {
        return "12";
      } else if (cell13 === "") {
        return "13";
      } else if (cell14 === "") {
        return "14";
      } else if (cell15 === "") {
        return "15";
      } else if (cell16 === "") {
        return "16";
      }
    };

    const replaceAndClear = (getEmptyCell: any, cellClicked: any) => {
      let getCellClicked: any = document.querySelector(`.cell-${cellClicked}`); // CELL CLIDKED
      let currentEmptyCell: any = document.querySelector(
        `.cell-${getEmptyCell}`
      ); // GET CURRENT EMPTY CELL
      currentEmptyCell.innerHTML = getCellClicked.innerHTML;
      getCellClicked.innerHTML = "";
    };

    // the play gangan
    let emptyCell = getEmptyCell();
    if (cellClicked === 1 && (emptyCell === "2" || emptyCell === "5")) {
      replaceAndClear(emptyCell, cellClicked);
    } else if (
      cellClicked === 2 &&
      (emptyCell === "1" || emptyCell === "3" || emptyCell === "6")
    ) {
      replaceAndClear(emptyCell, cellClicked);
    }
  };

  const shuffleNumbers = () => {
    const arrangedNumbers: any = [""];
    for (let x: number = 1; x <= 15; x++) {
      arrangedNumbers.push(x);
    }
    let currentIndex = arrangedNumbers.length,
      temporaryValue,
      randomIndex;
    // While there remain elements to shuffleNumbers...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = arrangedNumbers[currentIndex];
      arrangedNumbers[currentIndex] = arrangedNumbers[randomIndex];
      arrangedNumbers[randomIndex] = temporaryValue;
    }
    setShuffledNumbers(arrangedNumbers);
  };

  return (
    <div className="App">
      <div className="board">
        {shuffledNumbers.map((number, index) => {
          return (
            <div
              onClick={(e) => {
                e.preventDefault();
                handlePlay(index + 1, number);
              }}
              key={index + 1}
              className={`cell cell-${index + 1}`}
            >
              {number}
            </div>
          );
        })}
      </div>
      <button onClick={shuffleNumbers}>RESET</button>
    </div>
  );
}

export default App;
