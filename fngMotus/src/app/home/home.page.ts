import { Component, OnChanges, OnInit } from '@angular/core';
import db from '../../data/db.json';
import { LocalStorageService } from '../service/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})

export class HomePage implements OnInit {
  buttons = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  
  grid = [];
  try: number = 0;
  case = 0;
  goodPlace: number = 0;
  letter: string;
  wordRandom:any;
  wordToGuess: any[];
  wordsToPlay = [];
  allWordsList = [];
  tryUser: number;
  isWon: boolean = false;
  isLose: boolean = false;
  color: string;
  countLetter: Object;
  wonGame: number = 0;
  parties: number = 1;
  playedWords = [];
  message: string;
  isModalOpen = false;
  letterInGoodPlace: boolean;

  constructor(private localStorage: LocalStorageService) {
    this.generateMatrice();
  }

  ngOnChanges() {
  }

  ngOnInit() {
    this.wordsToPlay = db.wordsToPlay;
    this.allWordsList = db.allWordList;
    this.wordRandom = this.wordsToPlay[Math.floor(Math.random() * this.wordsToPlay.length)];
    this.wordToGuess = this.wordRandom.split('');
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
  }

  countLetterInWord(str: any) {
    var obj = {};

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
    this.goodPlace = 0;
    
    if (this.try < 6) {
      //Si le mot existe dans la liste des mots francais 
      if (this.valueIsExisted(word, this.allWordsList)) {
        let countLetter = this.countLetterInWord(this.wordRandom);
        for (let i = 0; i < 5; i++) {
          // toutes les bonnes lettres sont-elles ? goodPlace == letterInGoodPlace
          // si la lettre existe dans le mot 
          if (this.letterIsExisted(word, i)) {
            let letter = this.getLetterWorld(this.wordRandom, i)
            if (row[i].letter == this.wordToGuess[i]) {
              this.letterAtTheGoodPlace(row, i, countLetter);
            }
            if (row[i].letter != this.wordToGuess[i]) {
              this.letterNotAtTheGoodPlace(countLetter, row, i);
            }
          } else {
            console.log("lettre n'existe pas dans le mot ")
            row[i].state = "notPresent"
          }
        }
      } else {
        console.log("le mot n'existe pas");
      }
    }
    this.playedWords.push(word);
    
    if (this.goodPlace == 5) {
      this.setOpen(true)
      this.isWon = true;
      this.wonGame++;
      this.parties++;
      this.message = "Gagné 😀";
    } else if((this.goodPlace < 5 && this.try == 5) || this.try > 5){
      this.parties++;
      this.message = "Perdu 😓"
      this.resetAllCounter();
      this.isLose = true;
      this.setOpen(true)
    } 
    this.try++;
    this.case = 0; 
  }

  private letterNotAtTheGoodPlace(countLetter: {}, row: any, i: number) {
    if (countLetter[row[i].letter] > 0) {
      row[i].state = "present";
      countLetter[row[i].letter] = countLetter[this.wordToGuess[i]] - 1;
    } else if (countLetter[row[i].letter] == 0) {
      row[i].state = "notPresent";
    }
  }

  private letterAtTheGoodPlace(row: any, i: number, countLetter: {}) {
    row[i].state = "match";
    countLetter[this.wordToGuess[i]] = countLetter[this.wordToGuess[i]] - 1;
    this.goodPlace++;
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

// ----------------------------------------------------------------------
// --- METHODE MODAL
  
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

// ----------------------------------------------------------------------
// --- METHODES KEYBOARD

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
  
  //-----------------------------------------------------------------------------------
  // --- LOCALSTORAGE ---
  
  async init() {
    this.setListWords();
  }
 
  async setListWords() {    
    return await this.localStorage.setWords('words', this.playedWords);
  }

  async setParties() {    
    return await this.localStorage.setParties('parties', this.parties);
  }

}
