import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../service/local-storage.service';
import db from '../../data/db.json';

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
  isWin: boolean = false;
  color: string;
  countLetter: Object;
  wonGame: number = 0;
  parties: number = 0;
  playedWords = [];

  playedWords = {
    key: "words",
    value: ["WORD", "ABORD", "MOTUS", "ACIDE"]
  };

  constructor(private localStorage: LocalStorageService) {
    this.generateMatrice();
  }

  ngOnInit() {
    this.wordsToPlay = db.wordsToPlay;
    this.allWordsList = db.allWordList;
    this.wordRandom = this.wordsToPlay[Math.floor(Math.random() * this.wordsToPlay.length)]
    this.wordToGuess = this.wordRandom.split('');
    this.countLetter = this.countLetterInWOrd(this.wordRandom.toString());
    console.log(this.wordToGuess);
  }

  generateMatrice() {
    for (let grid = 0; grid < 6; grid++) {
      let cols = [];
      for (let col = 0; col < 5; col++) {
        cols.push({
          letter: "",
          state: "", // "notPresent", "match",   "present" 
        })
      }
      this.grid.push(cols)
    }
    console.log(this.grid);
  }

  countLetterInWOrd(str: any) {
    console.log(str);
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
    let word = this.getUserWord(this.grid[this.try]);
    let row = this.grid[this.try];

    if (this.try < 7) {
      //Si le mot existe dans la liste des mots francais 
      if (this.valueIsExisted(word, this.allWordsList)) {   
        //Si un mot précédent existe 
        if (this.try > 0) { 
          let precWord = this.getUserWord(this.grid[this.try - 1]);
          let precRow = this.grid[this.try-1];

          for (let i = 0; i < 5; i++) {
            //Si countLetter négatif, on le remet à zéro
            this.resetNegativeCountLetter(row, i);
            // si la lettre existe dans le mot 
            if (this.letterIsExisted(word, i)) {
                if (this.letterIsExisted(precWord, i)) { 
                  
                  //Si countLetter négatif, on le remet à zéro
                  this.resetNegativeCountLetter(row, i);
                  
                  this.countLetter[row[i].letter] = this.countLetter[precRow[i].letter]
                  
                  if (row[i].letter == this.wordToGuess[i] && this.countLetter[row[i].letter] > 0) {
                    row[i].state = "match";
                    this.countLetter[row[i].letter]--;
                    this.goodPlace++;
                  } else if (row[i].letter == this.wordToGuess[i] && this.countLetter[row[i].letter] == 0) {
                    row[i].state = "match";
                    this.countLetter[row[i].letter] = 0;
                    this.goodPlace++;
                  } else if ((row[i].letter != this.wordToGuess[i] && this.countLetter[row[i].letter] > 0)) {
                    row[i].state = "present";
                    this.countLetter[row[i].letter]--;
                  } else if (row[i].letter != this.wordToGuess[i] && this.countLetter[row[i].letter] == 0) {
                    row[i].state = "present"
                  } else {
                    row[i].state = "notPresent"
                  }
                  
                } else {
                    //Si countLetter négatif, on le remet à zéro
                    this.resetNegativeCountLetter(row, i);
                    // si la lettre existe dans le mot 
                    if (this.letterIsExisted(word, i)) {
                      if (row[i].letter == this.wordToGuess[i] && this.countLetter[row[i].letter] > 0) {
                        row[i].state = "match";
                        this.countLetter[row[i].letter]--;
                        this.goodPlace++;
                      } else if (row[i].letter == this.wordToGuess[i] && this.countLetter[row[i].letter] == 0) {
                        row[i].state = "match";
                        this.countLetter[row[i].letter] = 0;
                        this.goodPlace++;
                      } else if ((row[i].letter != this.wordToGuess[i] && this.countLetter[row[i].letter] > 0)) {
                        row[i].state = "present";
                        this.countLetter[row[i].letter]--;
                      } else if (row[i].letter != this.wordToGuess[i] && this.countLetter[row[i].letter] == 0) {
                        row[i].state = "notPresent"
                      } else {
                        row[i].state = "notPresent"
                      }
                    } else {
                      console.log("lettre n'existe pas dans le mot ")
                      row[i].state = "notPresent"
                    }
                }
            } else {
              console.log("lettre n'existe pas dans le mot ")
              row[i].state = "notPresent"
            }
          }
        } else {
            for (let i = 0; i < 5; i++) {
              //Si countLetter négatif, on le remet à zéro
              this.resetNegativeCountLetter(row, i);

              // si la lettre existe dans le mot 
              if (this.letterIsExisted(word, i)) {
                if (row[i].letter == this.wordToGuess[i] && this.countLetter[row[i].letter] > 0) {
                  row[i].state = "match";
                  this.countLetter[row[i].letter]--;
                  this.goodPlace++;
                } else if (row[i].letter == this.wordToGuess[i] && this.countLetter[row[i].letter] == 0) {
                  row[i].state = "match";
                  this.countLetter[row[i].letter] = 0;
                  this.goodPlace++;
                } else if ((row[i].letter != this.wordToGuess[i] && this.countLetter[row[i].letter] > 0)) {
                  row[i].state = "present";
                  this.countLetter[row[i].letter]--;
                } else if (row[i].letter != this.wordToGuess[i] && this.countLetter[row[i].letter] == 0) {
                  row[i].state = "notPresent"
                } else {
                  row[i].state = "notPresent"
                }
              } else {
                console.log("lettre n'existe pas dans le mot ")
                  row[i].state = "notPresent"
                }
            }
          }
        } else {
          console.log("le mot n'existe pas");
          
        }
      if (this.goodPlace == 5) {
          console.log("GAGNE");
        this.wonGame++;
        this.parties++;
      }
      this.playedWords.push(word);
    } else {
      console.log("PERDU")
      this.resetAllCounter();
      this.parties++;
      // Affichage modale "PERDU"
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
      } else {
        console.log("lettre not in word");
        return false;
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
  
  // --- LOCALSTORAGE ---
  
  async ionViewWillEnter() {
    this.setListWords();
  }
 
  async setListWords() {
    let newTab=[];

    for (let i = 0; i < this.playedWords.value.length; i++){
      newTab.push(this.playedWords.value[i]);
    }
    await this.localStorage.setWords('words', newTab);
}
