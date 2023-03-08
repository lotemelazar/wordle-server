import express from "express";
import { Request, Response } from "express";
import cors from "cors";

import {
  generateWordSet,
  checkGuess,
  letterExists,
  letterIsCorrect,
  getCorrectWord,
} from "./gameLogic";

const app = express();
app.use(cors());

app.get("/word", (req: Request, res: Response) => {
  // res.send(String(generateWordSet().wordToGuessIndex));
  res.send(String(generateWordSet().wordToGuess));
});

app.get("/wordInd", (req: Request, res: Response) => {
  res.send(String(generateWordSet().wordToGuessIndex));
});

app.get("/correctWord/:index", (req: Request, res: Response) => {
  res.send(getCorrectWord(Number(req.params.index)));
});

app.get("/check/:wordToGuessIndex/:guess", (req: Request, res: Response) => {
  res.send(checkGuess(Number(req.params.wordToGuessIndex), req.params.guess));
});

app.get(
  "/lic/:wordToGuessIndex/:letterPos/:letter",
  (req: Request, res: Response) => {
    res.send(
      letterIsCorrect(
        Number(req.params.wordToGuessIndex),
        Number(req.params.letterPos),
        req.params.letter
      )
    );
  }
);

app.get(
  "/isExists/:wordToGuessIndex/:letter",
  (req: Request, res: Response) => {
    res.send(
      letterExists(Number(req.params.wordToGuessIndex), req.params.letter)
    );
  }
);

// app.get("/", (req: Request, res: Response) => {
//   res.send("??");
// });

const port = 3333;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
