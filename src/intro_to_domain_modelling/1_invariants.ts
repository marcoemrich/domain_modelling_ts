// Invariant enforcement

// 1st Try

{
  type points = number;

  type score = {
    playerOne: points;
    playerTwo: points;
  };

  let s: score = {
    playerOne: 1000,
    playerTwo: -15,
  };
}

// 2nd Try

{
  type points = "Love" | "Fifteen" | "Thirty" | "Forty";

  type score = {
    playerOne: points;
    playerTwo: points;
  };

  let s2: score = { playerOne: "Fifteen", playerTwo: "Love" };
  let even: score = { playerOne: "Forty", playerTwo: "Forty" };
}

// Better Solution

{
  type Player = "PlayerOne" | "PlayerTwo";

  type Points = "Love" | "Fifteen" | "Thirty";

  type Score =
    | { kind: "Points"; points: [Points, Points] }
    | { kind: "Forty"; fortyPlayer: Player; pointsOtherPlayer: Points }
    | { kind: "Deuce" }
    | { kind: "Advantage"; player: Player }
    | { kind: "Game"; player: Player };

  const startScore: Score = { kind: "Points", points: ["Love", "Fifteen"] };
  const score1 = { kind: "Forty", fortyPlayer: "PlayerOne", pointsOtherPlayer: "Thirty" };
  const score2: Score = { kind: "Deuce" };
  const score3: Score = { kind: "Advantage", player: "PlayerTwo" };

  // const impossibleScore1: Score = { kind: "Points", points: ["Seven", "Fifteen"] };
  // const impossibleScore2: Score = { kind: "Points", points: ["Forty", "Forty"] };
  // const impossibleScore3: Score = {
  //   kind: "Forty",
  //   fortyPlayer: "PlayerTwo",
  //   pointsOtherPlayer: "Forty",
  // }
}
