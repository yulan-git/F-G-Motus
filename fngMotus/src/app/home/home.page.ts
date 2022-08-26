import { Component, OnChanges, OnInit } from '@angular/core';
import   db   from '../../data/db.json';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})

export class HomePage implements OnInit, OnChanges {
  buttons = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  
  grid = [];
  try: number = 0;
  case = 0;
  goodPlace: number = 0;
  letter: string;
  wordRandom:any;
  wordToGuess: any[];
  wordsToPlay = [];
  allWordsList = []
  tryUser: number;
  isWon: boolean = false;
  isLose: boolean = false;
  color: string;
  countLetter: Object;
  wonGame: number = 0;
  parties: number = 0;
  playedWords = [];
  message: string;

  constructor() {
    this.generateMatrice();
  }

  ngOnChanges() {
  }

  ngOnInit() {
    this.wordsToPlay = db.wordsToPlay;
    this.allWordsList = db.allWordList;
    this.wordRandom = this.wordsToPlay[Math.floor(Math.random() * this.wordsToPlay.length)]
    this.wordToGuess = this.wordRandom.split('');
    //this.countLetter = this.countLetterInWOrd(this.wordRandom.toString());
    console.log(this.wordToGuess);
  }

  generateMatrice() {
    for (let grid = 0; grid < 6; grid++) {
      let cols = [];
      for (let col = 0; col < 5; col++) {
        cols.push({
          letter: "",
          state: "",
        })
      }
      this.grid.push(cols)
    }
    console.log(this.grid);
  }

  countLetterInWord(str: any) {
    var obj = {}
    for (let x = 0, length = str.length; x < length; x++) {
      var l = str.charAt(x)
      obj[l] = (isNaN(obj[l]) ? 1 : obj[l] + 1);
    }
    return obj;
  }

  valueIsExisted(str: string, arr: Array<string>) {
    if (arr.includes(str)) {
      return true;
    } else {
      return false;
    }
  }

  resetAllCounter() {
    this.try = 0;
    this.case = 0;
    this.goodPlace = 0;
  }

  
  validWord() {
    console.log(this.goodPlace);
    console.log(this.try);
    console.log(this.isWon);
    console.log(this.isLose);
    
    let word = this.getUserWord(this.grid[this.try]);
    let row = this.grid[this.try];    
    
    
    if (this.try < 5) {
      //Si le mot existe dans la liste des mots francais 
      if (this.valueIsExisted(word, this.allWordsList)) {   
        let countLetter = this.countLetterInWord(this.wordRandom);
        for (let i = 0; i < 5; i++) {
          
          // si la lettre existe dans le mot 
          if (this.letterIsExisted(word, i)) {
            let letter = this.getLetterWorld(this.wordRandom, i)
            if (row[i].letter == this.wordToGuess[i]) {
                  row[i].state = "match";
                  countLetter[this.wordToGuess[i]] = countLetter[this.wordToGuess[i]]-1;
                  this.goodPlace++;
            }
            if (row[i].letter != this.wordToGuess[i]) {
              if (countLetter[row[i].letter] > 0) {
                row[i].state = "present"
                countLetter[row[i].letter] = countLetter[this.wordToGuess[i]] - 1;
              } else if (countLetter[row[i].letter] == 0) {
                row[i].state = "notPresent";
              }
            }
              } else {
                console.log("lettre n'existe pas dans le mot ")
                row[i].state = "notPresent"
                }
            }
        } else {
          console.log("le mot n'existe pas");
        }
      if (this.goodPlace == 5) {
        console.log("GAGNE");
        this.isWon = true;
        this.wonGame++;
        this.parties++;
        this.message = "Gagné 😀"
      }
      this.playedWords.push(word);
    } else {
      console.log(this.try);
      this.parties++;
      this.message = "Perdu 😓"
      console.log(this.message);
      this.resetAllCounter();
      this.isLose = true;
    }
    this.try++;
    this.case = 0;
  }
  



  private resetNegativeCountLetter(row: any, i: number) {
    if (this.countLetter[row[i].letter] < 0) {
      this.countLetter[row[i].letter] = 0;
    }
  }

  private letterAtGoodPlace(row: any, index: number) {
    if (row[index].letter == this.wordToGuess[index]) {
      row[index].state = "match";
      this.countLetter[row[index].letter]--;
      this.goodPlace++;
    }
  }

  private letterIsExisted(word: string, index:number) {
      let letter = word[index];
      if (this.valueIsExisted(letter, this.wordRandom)) {
        return true;
      }
  }

  private getLetterWorld(word: string, index: number) {
    let letter = word[index];
    if (this.valueIsExisted(letter, this.wordRandom)) {
      return letter;
    }
  }

  private getUserWord(grid:any) {
    let arrLetter = [];
    for (let i = 0; i < 5; i++) {
      arrLetter.push(grid[i].letter);
    }
    let word = arrLetter.join('');
    return word;
  }

  putLetter(letter: string) {
    for (let i = 0; i < this.grid[this.try].length; i++) {
      this.grid[this.try][this.case].letter = letter;
    }
    this.case++;
  }

  deleteLetter() {
      this.grid[this.try][this.case - 1].letter = "";
      this.case--;
    if (this.case == -1) {
      this.case = 0;
    }
  }
  
  getLetter(letter: string) {
    if (this.case <= 4) {
      this.putLetter(letter);
    }
    else if (this.case == 4) {
      this.case = 0;
    }

  }
}
