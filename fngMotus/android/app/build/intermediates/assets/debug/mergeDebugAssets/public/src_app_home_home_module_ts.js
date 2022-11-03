"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 5261:
/*!********************************************************!*\
  !*** ./src/app/btn-keyboard/btn-keyboard.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BtnKeyboardComponent": () => (/* binding */ BtnKeyboardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _btn_keyboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./btn-keyboard.component.html?ngResource */ 765);
/* harmony import */ var _btn_keyboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./btn-keyboard.component.scss?ngResource */ 3357);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




let BtnKeyboardComponent = class BtnKeyboardComponent {
    constructor() {
        this.letter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() { }
    getLetterInput(letter) {
        this.letter.emit(letter);
    }
};
BtnKeyboardComponent.ctorParameters = () => [];
BtnKeyboardComponent.propDecorators = {
    btn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    letter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
BtnKeyboardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-btn-keyboard',
        template: _btn_keyboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_btn_keyboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BtnKeyboardComponent);



/***/ }),

/***/ 8574:
/*!***********************************************!*\
  !*** ./src/app/directives/color.directive.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorDirective": () => (/* binding */ ColorDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


let ColorDirective = class ColorDirective {
    constructor(el) {
        this.el = el;
        this.colors = ["#888289", "#28ba62", "#fc7adf"];
    }
    ngOnChanges() {
        if (this.state == "match") {
            this.el.nativeElement.style.backgroundColor = this.colors[1].toString();
        }
        if (this.state == "present") {
            this.el.nativeElement.style.backgroundColor = this.colors[2].toString();
        }
        if (this.state == "notPresent") {
            this.el.nativeElement.style.backgroundColor = this.colors[0].toString();
        }
    }
};
ColorDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }
];
ColorDirective.propDecorators = {
    state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
ColorDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        selector: '[appColor]'
    })
], ColorDirective);



/***/ }),

/***/ 8411:
/*!***********************************************!*\
  !*** ./src/app/directives/modal.directive.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalDirective": () => (/* binding */ ModalDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


let ModalDirective = class ModalDirective {
    constructor(el) {
        this.el = el;
    }
    ngOnChanges() {
    }
};
ModalDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }
];
ModalDirective.propDecorators = {
    isLose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    isWon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
ModalDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        selector: '[appModal]'
    })
], ModalDirective);



/***/ }),

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);
/* harmony import */ var _btn_keyboard_btn_keyboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../btn-keyboard/btn-keyboard.component */ 5261);
/* harmony import */ var _letters_grid_letters_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../letters-grid/letters-grid.component */ 9749);
/* harmony import */ var _directives_color_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../directives/color.directive */ 8574);
/* harmony import */ var _directives_modal_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../directives/modal.directive */ 8411);











let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule,
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage, _btn_keyboard_btn_keyboard_component__WEBPACK_IMPORTED_MODULE_2__.BtnKeyboardComponent, _letters_grid_letters_grid_component__WEBPACK_IMPORTED_MODULE_3__.LettersGridComponent, _directives_color_directive__WEBPACK_IMPORTED_MODULE_4__.ColorDirective, _directives_modal_directive__WEBPACK_IMPORTED_MODULE_5__.ModalDirective],
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var C_Users_gaell_OneDrive_Bureau_Simplon_CDA_dev_briefs_F_G_Motus_fngMotus_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.html?ngResource */ 3853);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _data_db_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/db.json */ 8587);
/* harmony import */ var _service_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/local-storage.service */ 2518);







let HomePage = class HomePage {
  constructor(localStorage) {
    this.localStorage = localStorage;
    this.buttons = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    this.grid = [];
    this.try = 0;
    this.case = 0;
    this.goodPlace = 0;
    this.wordsToPlay = [];
    this.allWordsList = [];
    this.isWon = false;
    this.isLose = false;
    this.wonGame = 0;
    this.parties = 1;
    this.playedWords = [];
    this.isModalOpen = false;
    this.generateMatrice();
  }

  ngOnChanges() {}

  ngOnInit() {
    this.wordsToPlay = _data_db_json__WEBPACK_IMPORTED_MODULE_3__.wordsToPlay;
    this.allWordsList = _data_db_json__WEBPACK_IMPORTED_MODULE_3__.allWordList;
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
          state: ""
        });
      }

      this.grid.push(cols);
    }
  }

  countLetterInWord(str) {
    var obj = {};

    for (let x = 0, length = str.length; x < length; x++) {
      var l = str.charAt(x);
      obj[l] = isNaN(obj[l]) ? 1 : obj[l] + 1;
    }

    return obj;
  }

  valueIsExisted(str, arr) {
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
            let letter = this.getLetterWorld(this.wordRandom, i);

            if (row[i].letter == this.wordToGuess[i]) {
              this.letterAtTheGoodPlace(row, i, countLetter);
            }

            if (row[i].letter != this.wordToGuess[i]) {
              this.letterNotAtTheGoodPlace(countLetter, row, i);
            }
          } else {
            console.log("lettre n'existe pas dans le mot ");
            row[i].state = "notPresent";
          }
        }
      } else {
        console.log("le mot n'existe pas");
      }
    }

    this.playedWords.push(word);

    if (this.goodPlace == 5) {
      this.setOpen(true);
      this.isWon = true;
      this.wonGame++;
      this.parties++;
      this.message = "Gagné 😀";
      this.setWonParties();
      this.setTry();
    } else if (this.goodPlace < 5 && this.try == 5 || this.try > 5) {
      this.parties++;
      this.message = "Perdu 😓";
      this.resetAllCounter();
      this.isLose = true;
      this.setOpen(true);
    }

    this.try++;
    this.case = 0;
    this.setListWords();
    this.setParties();
  }

  letterNotAtTheGoodPlace(countLetter, row, i) {
    if (countLetter[row[i].letter] > 0) {
      row[i].state = "present";
      countLetter[row[i].letter] = countLetter[this.wordToGuess[i]] - 1;
    } else if (countLetter[row[i].letter] == 0) {
      row[i].state = "notPresent";
    }
  }

  letterAtTheGoodPlace(row, i, countLetter) {
    row[i].state = "match";
    countLetter[this.wordToGuess[i]] = countLetter[this.wordToGuess[i]] - 1;
    this.goodPlace++;
  }

  letterIsExisted(word, index) {
    let letter = word[index];

    if (this.valueIsExisted(letter, this.wordRandom)) {
      return true;
    }
  }

  getLetterWorld(word, index) {
    let letter = word[index];

    if (this.valueIsExisted(letter, this.wordRandom)) {
      return letter;
    }
  }

  getUserWord(grid) {
    let arrLetter = [];

    for (let i = 0; i < 5; i++) {
      arrLetter.push(grid[i].letter);
    }

    let word = arrLetter.join('');
    return word;
  } // ----------------------------------------------------------------------
  // --- METHODE MODAL


  setOpen(isOpen) {
    this.isModalOpen = isOpen;
  } // ----------------------------------------------------------------------
  // --- METHODES KEYBOARD


  putLetter(letter) {
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

  getLetter(letter) {
    if (this.case <= 4) {
      this.putLetter(letter);
    } else if (this.case == 4) {
      this.case = 0;
    }
  } //-----------------------------------------------------------------------------------
  // --- LOCALSTORAGE ---


  init() {
    var _this = this;

    return (0,C_Users_gaell_OneDrive_Bureau_Simplon_CDA_dev_briefs_F_G_Motus_fngMotus_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.setListWords();

      _this.setParties();

      _this.setWonParties();

      _this.setTry();
    })();
  }

  setListWords() {
    var _this2 = this;

    return (0,C_Users_gaell_OneDrive_Bureau_Simplon_CDA_dev_briefs_F_G_Motus_fngMotus_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this2.localStorage.setWords('words', _this2.playedWords);
    })();
  }

  setParties() {
    var _this3 = this;

    return (0,C_Users_gaell_OneDrive_Bureau_Simplon_CDA_dev_briefs_F_G_Motus_fngMotus_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this3.localStorage.setParties('parties', _this3.parties);
    })();
  }

  setWonParties() {
    var _this4 = this;

    return (0,C_Users_gaell_OneDrive_Bureau_Simplon_CDA_dev_briefs_F_G_Motus_fngMotus_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this4.localStorage.setWonParties('wonGame', _this4.wonGame);
    })();
  }

  setTry() {
    var _this5 = this;

    return (0,C_Users_gaell_OneDrive_Bureau_Simplon_CDA_dev_briefs_F_G_Motus_fngMotus_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this5.localStorage.setTry('try', _this5.try);
    })();
  }

};

HomePage.ctorParameters = () => [{
  type: _service_local_storage_service__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService
}];

HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-home',
  template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], HomePage);


/***/ }),

/***/ 9749:
/*!********************************************************!*\
  !*** ./src/app/letters-grid/letters-grid.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LettersGridComponent": () => (/* binding */ LettersGridComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _letters_grid_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./letters-grid.component.html?ngResource */ 2446);
/* harmony import */ var _letters_grid_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./letters-grid.component.scss?ngResource */ 9753);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




let LettersGridComponent = class LettersGridComponent {
    constructor() {
    }
    ngOnInit() { }
};
LettersGridComponent.ctorParameters = () => [];
LettersGridComponent.propDecorators = {
    word: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
LettersGridComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-letters-grid',
        template: _letters_grid_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_letters_grid_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LettersGridComponent);



/***/ }),

/***/ 3357:
/*!*********************************************************************!*\
  !*** ./src/app/btn-keyboard/btn-keyboard.component.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = ".keyboard {\n  width: 33px;\n  height: 28px;\n  background-color: var(--ion-color-dark);\n  border-radius: 5px;\n  box-shadow: var(--custom-dark-shadow);\n  margin: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ0bi1rZXlib2FyZC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcdGhlbWVcXF9taXhpbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VDREksV0FBQTtFQUNBLFlBQUE7RUFDQSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7RUFDQSxXQUFBO0FEQ0oiLCJmaWxlIjoiYnRuLWtleWJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSBcIi4uLy4uL3RoZW1lL21peGluLnNjc3NcIiBhcyBtO1xyXG5cclxuLmtleWJvYXJkIHtcclxuICAgIEBpbmNsdWRlIG0ua2V5Ym9hcmRCdG4oKTtcclxufVxyXG5cclxuIiwiQG1peGluIGtleWJvYXJkQnRuKCkge1xyXG4gICAgd2lkdGg6IDMzcHg7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1jdXN0b20tZGFyay1zaGFkb3cpO1xyXG4gICAgbWFyZ2luOiAzcHg7XHJcbn1cclxuXHJcbkBtaXhpbiBtb2RhbEJ0bigpIHtcclxuICAgIHdpZHRoOiA0LjNyZW07XHJcbiAgICBoZWlnaHQ6IDIuNXJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy10aW50KTtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogdmFyKC0tY3VzdG9tLWRhcmstc2hhZG93KTtcclxuICAgIG1hcmdpbjogM3B4O1xyXG59Il19 */";

/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".keyboard {\n  width: 33px;\n  height: 28px;\n  background-color: var(--ion-color-dark);\n  border-radius: 5px;\n  box-shadow: var(--custom-dark-shadow);\n  margin: 3px;\n  color: var(--ion-color-success-tint);\n}\n\n.grid {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1rem;\n}\n\napp-letters-grid {\n  display: flex;\n  justify-content: center;\n}\n\nion-modal#modal {\n  --width: fit-content;\n  --min-width: 250px;\n  --height: fit-content;\n  --border-radius: 6px;\n  --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);\n}\n\nion-modal#modal ion-icon {\n  margin-right: 6px;\n  width: 48px;\n  height: 48px;\n  padding: 4px 0;\n  color: #aaaaaa;\n}\n\nion-modal#modal {\n  margin-bottom: 10px;\n}\n\n.wrapper {\n  background: var(--ion-color-dark-shade);\n  border: solid 1px var(--ion-color-dark-shade);\n}\n\n.modal-btn {\n  width: 4.3rem;\n  height: 2.5rem;\n  color: var(--ion-color-success-tint);\n  --background: var(--ion-color-dark);\n  border-radius: 5px;\n  box-shadow: var(--custom-dark-shadow);\n  margin: 3px;\n}\n\nion-button.modal-btn:hover {\n  --background-hover: var(--ion-color-dark-tint, var(--ion-color-success-tint));\n}\n\n.block-btn {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIiwiLi5cXC4uXFx0aGVtZVxcX21peGluLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUNESSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLFdBQUE7RURGQSxvQ0FBQTtBQUlKOztBQUZBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFLSjs7QUFIQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQU1KOztBQUhBO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0Q0FBQTtBQU1KOztBQUhBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBTUo7O0FBRkE7RUFDSSxtQkFBQTtBQUtKOztBQUZBO0VBQ0ksdUNBQUE7RUFDQSw2Q0FBQTtBQUtKOztBQUZBO0VDaENJLGFBQUE7RUFDQSxjQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7RUFDQSxXQUFBO0FEc0NKOztBQVJBO0VBQ0ksNkVBQUE7QUFXSjs7QUFSQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQVdKIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSBcIi4uLy4uL3RoZW1lL21peGluLnNjc3NcIiBhcyBtO1xyXG5cclxuLmtleWJvYXJkIHtcclxuICAgIEBpbmNsdWRlIG0ua2V5Ym9hcmRCdG4oKTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy10aW50KTtcclxufVxyXG4uZ3JpZHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5hcHAtbGV0dGVycy1ncmlkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLW1vZGFsI21vZGFsIHtcclxuICAgIC0td2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgLS1taW4td2lkdGg6IDI1MHB4O1xyXG4gICAgLS1oZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAtLWJveC1zaGFkb3c6IDAgMjhweCA0OHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcclxufVxyXG5cclxuaW9uLW1vZGFsI21vZGFsIGlvbi1pY29uIHtcclxuICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gICAgd2lkdGg6IDQ4cHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBwYWRkaW5nOiA0cHggMDtcclxuICAgIGNvbG9yOiAjYWFhYWFhO1xyXG59XHJcblxyXG5cclxuaW9uLW1vZGFsI21vZGFsIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi53cmFwcGVyIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrLXNoYWRlKTtcclxuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWlvbi1jb2xvci1kYXJrLXNoYWRlKTtcclxufVxyXG5cclxuLm1vZGFsLWJ0biB7XHJcbiAgICBAaW5jbHVkZSBtLm1vZGFsQnRuKCk7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ubW9kYWwtYnRuOmhvdmVye1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50LCB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy10aW50KSk7XHJcbn1cclxuXHJcbi5ibG9jay1idG4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbiIsIkBtaXhpbiBrZXlib2FyZEJ0bigpIHtcclxuICAgIHdpZHRoOiAzM3B4O1xyXG4gICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogdmFyKC0tY3VzdG9tLWRhcmstc2hhZG93KTtcclxuICAgIG1hcmdpbjogM3B4O1xyXG59XHJcblxyXG5AbWl4aW4gbW9kYWxCdG4oKSB7XHJcbiAgICB3aWR0aDogNC4zcmVtO1xyXG4gICAgaGVpZ2h0OiAyLjVyZW07XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludCk7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJveC1zaGFkb3c6IHZhcigtLWN1c3RvbS1kYXJrLXNoYWRvdyk7XHJcbiAgICBtYXJnaW46IDNweDtcclxufSJdfQ== */";

/***/ }),

/***/ 9753:
/*!*********************************************************************!*\
  !*** ./src/app/letters-grid/letters-grid.component.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZXR0ZXJzLWdyaWQuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 765:
/*!*********************************************************************!*\
  !*** ./src/app/btn-keyboard/btn-keyboard.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "<button (click)=\"getLetterInput(btn)\" class=\"keyboard\" [style.color]=\"btn.length>1 ? '#42d77d' : '#FC7ADF'\">\r\n  {{ btn }}\r\n</button>\r\n";

/***/ }),

/***/ 3853:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"bg\" [fullscreen]=\"true\">\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <ion-title class=\"logo\" size=\"large\">\r\n        <img src=\"../../assets/F&G Motus.svg\" alt=\"Logo\">\r\n      </ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <div class=\"grid\">\r\n    <app-letters-grid *ngFor=\"let word of grid\" [word]=\"word\"></app-letters-grid>\r\n  </div>\r\n  \r\n  <div>\r\n    <button class=\"keyboard\" (click)=\"deleteLetter()\">\r\n      <ion-icon name=\"backspace-outline\"></ion-icon>\r\n    </button>\r\n    <app-btn-keyboard style=\"width: 45px;\" *ngFor=\"let btn of buttons\" [btn]=\"btn\" (letter)=\"getLetter($event)\"></app-btn-keyboard>\r\n    <button id=\"open-modal\" class=\"keyboard\" (click)=\"validWord()\">\r\n      Ent\r\n    </button>\r\n  </div>\r\n\r\n  <ion-modal [isOpen]=\"isModalOpen\" id=\"modal\" *ngIf=\"isLose || isWon\" >\r\n    <ng-template>\r\n      <div class=\"wrapper\">\r\n        <h6>{{message}}</h6>\r\n        <div class=\"block-btn\">\r\n          <ion-button class=\"modal-btn\" (click)=\"setOpen(false)\" href=\"menu/home\">Rejouer</ion-button>\r\n          <ion-button class=\"modal-btn\" (click)=\"setOpen(false)\" href=\"menu/home\">Quitter</ion-button>\r\n          <ion-button class=\"modal-btn\" (click)=\"setOpen(false)\" href=\"menu/stats\">Stats</ion-button>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n  </ion-modal>\r\n</ion-content>\r\n";

/***/ }),

/***/ 2446:
/*!*********************************************************************!*\
  !*** ./src/app/letters-grid/letters-grid.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "<div appColor [state]=\"letter.state\" *ngFor=\"let letter of word\"class=\"circle\">{{letter.letter}}</div>\r\n<!-- \r\n[style.background-color]=\"color =='green' ? '#42d77d' : ''\" -->";

/***/ }),

/***/ 8587:
/*!**************************!*\
  !*** ./src/data/db.json ***!
  \**************************/
/***/ ((module) => {

module.exports = JSON.parse('{"wordsToPlay":["ABORD","ABUSE","ACCES","ACIDE","ALIEN","ANGES","BAGUE","BAFFE","BANAL","BARBU","BEAUX","BEBES","BIDON","CAGES","CAKES","COUPE","CANAL","CHIEN","CELLE","CHOCS","CHOIX","CIMES","CIRER","DRAFT","DOUTE","DURCI","DUREE","ECRAN","ECUME","ELOGE","FIGER","FIGUE","FAUVE","FORCE","GALOP","GALET","GENRE","GERME","GILET"],"allWordList":["ABACA","ABALE","ABATS","ABBES","ABCES","ABDOS","ABEES","ABERS","ABETI","ABIES","ABIMA","ABIME","ABLES","ABOIE","ABOIS","ABOLI","ABORD","ABOTS","ABOUT","ABOYA","ABOYE","ABRAS","ABRIA","ABRIE","ABRIS","ABUSA","ABUSE","ABUTA","ABUTE","ABYME","ACAIS","ACARE","ACCES","ACCON","ACCOT","ACCRO","ACCRU","ACCUL","ACCUS","ACERA","ACERE","ACHAR","ACHAT","ACHEB","ACHES","ACIDE","ACIER","ACINI","ACMES","ACNES","ACONS","ACORE","ACRAS","ACRES","ACTAI","ACTAS","ACTAT","ACTEE","ACTER","ACTES","ACTEZ","ACTIF","ACTUS","ACULS","ACYLE","ADACS","ADAGE","ADAVS","ADDAX","ADENT","ADIEU","ADIRE","ADJAR","ADMET","ADMIS","ADMIT","ADNEE","ADNES","ADOBE","ADONC","ADONS","ADORA","ADORE","ADRAR","ADRET","ADULA","ADULE","AEDES","AERAI","AERAS","AERAT","AEREE","AERER","AERES","AEREZ","AFARE","AFARS","AFATS","AFFIN","AFFUT","AFROS","AFTER","AGACA","AGACE","AGADA","AGAME","AGAMI","AGAPE","AGATE","AGAVE","AGEES","AGENT","AGGLO","AGHAS","AGIES","AGILE","AGIOS","AGIRA","AGITA","AGITE","AGNAT","AGNEL","AGNIE","AGNIS","AGONI","AGORA","AGREA","AGREE","AGREG","AGRES","AGUIS","AHANA","AHANE","AHANS","AHURI","AICHA","AICHE","AIDAI","AIDAS","AIDAT","AIDEE","AIDER","AIDES","AIDEZ","AIENT","AIEUL","AIEUX","AIGLE","AIGRE","AIGRI","AIGUE","AIGUS","AILEE","AILES","AILLA","AILLE","AIMAI","AIMAS","AIMAT","AIMEE","AIMER","AIMES","AIMEZ","AINEE","AINES","AINOU","AINSI","AIOLI","AIRAI","AIRAS","AIRAT","AIRCO","AIREE","AIRER","AIRES","AIREZ","AISEE","AISES","AISYS","AJONC","AJOUR","AJOUT","AJUTS","AKANS","AKENE","AKITA","ALBUM","ALDIN","ALDOL","ALEAS","ALEMS","ALENE","ALEPH","ALESA","ALESE","ALEVI","ALEZE","ALFAS","ALGAL","ALGIE","ALGOL","ALGUE","ALIAS","ALIBI","ALIEN","ALIOS","ALISE","ALITA","ALITE","ALIZE","ALLAI","ALLAS","ALLAT","ALLEE","ALLER","ALLES","ALLEU","ALLEZ","ALLIA","ALLIE","ALLOC","ALMEE","ALOES","ALOIS","ALORS","ALOSE","ALPAI","ALPAS","ALPAT","ALPAX","ALPEE","ALPER","ALPES","ALPEZ","ALPHA","ALPIN","ALTEA","ALTER","ALTOS","ALULE","ALUNA","ALUNE","ALUNI","ALUNS","ALVIN","ALYAS","ALYTE","AMANS","AMANT","AMATI","AMBLA","AMBLE","AMBON","AMBRA","AMBRE","AMENA","AMENE","AMERE","AMERS","AMIBE","AMICT","AMIDE","AMIES","AMIGO","AMINE","AMISH","AMMAN","AMMIS","AMOKS","AMOME","AMONT","AMOUR","AMPHI","AMPLE","AMPLI","AMUIE","AMUIR","AMUIS","AMUIT","AMURA","AMURE","AMUSA","AMUSE","AMYLE","ANALE","ANARS","ANAUX","ANCHE","ANCRA","ANCRE","ANDIN","ANEES","ANELS","ANETH","ANGES","ANGLE","ANGON","ANGOR","ANGUS","ANIER","ANILS","ANIMA","ANIME","ANION","ANISA","ANISE","ANITE","ANJOU","ANKHS","ANNAL","ANNEE","ANNIV","ANODE","ANOLI","ANONA","ANONE","ANONS","ANSEE","ANSES","ANTAN","ANTES","ANTRE","AORTE","AOUTA","AOUTE","AOUTS","APERO","APHTE","APIDE","APIOL","APION","APLAT","APNEE","APODE","APPAS","APPAT","APPEL","APPLI","APPUI","APREM","APRES","APTES","APURA","APURE","APYRE","ARABE","ARACK","ARACS","ARAKS","ARASA","ARASE","ARBRE","ARCHE","ARCHI","ARCHS","ARCON","ARDUE","ARDUS","ARECS","ARENA","ARENE","ARETE","ARGAN","ARGAS","ARGOL","ARGON","ARGOT","ARGUA","ARGUE","ARGUS","ARHAT","ARIAS","ARIDE","ARIEN","ARISA","ARISE","ARMAI","ARMAS","ARMAT","ARMEE","ARMER","ARMES","ARMET","ARMEZ","ARMON","AROBE","AROLE","AROLS","AROME","ARQUA","ARQUE","ARRET","ARROI","ARSIN","ARSIS","ARTEL","ARTYS","ARUMS","ARYEN","ARYLE","ARZEL","ASADO","ASANA","ASDIC","ASICS","ASILE","ASINE","ASINS","ASPES","ASPIC","ASPIS","ASPLE","ASPRE","ASQUE","ASRAM","ASSAI","ASSEC","ASSES","ASSEZ","ASSIS","ASSIT","ASSOS","ASTER","ASTES","ASTIC","ASTIS","ASTRE","ATACA","ATELE","ATEMI","ATHEE","ATHLE","ATIPA","ATLAS","ATMAN","ATOCA","ATOLL","ATOME","ATONE","ATOUR","ATOUT","ATRES","AUBES","AUBIN","AUCUN","AUDIO","AUDIT","AUGEE","AUGES","AUGET","AULAS","AULNE","AUNAI","AUNAS","AUNAT","AUNEE","AUNER","AUNES","AUNEZ","AURAI","AURAS","AUREZ","AUSSI","AUTAN","AUTEL","AUTOS","AUTRE","AVAHI","AVAIS","AVAIT","AVALA","AVALE","AVALS","AVANT","AVARE","AVENS","AVENT","AVENU","AVERA","AVERE","AVERS","AVEUX","AVIDE","AVIEN","AVIEZ","AVILI","AVINA","AVINE","AVION","AVISA","AVISE","AVISO","AVIVA","AVIVE","AVOIE","AVOIR","AVONS","AVOUA","AVOUE","AVOYA","AVOYE","AVRIL","AWACS","AWALE","AWELE","AXAIS","AXAIT","AXANT","AXEES","AXELS","AXENE","AXENT","AXERA","AXIAL","AXIEZ","AXILE","AXOAS","AXONE","AXONS","AYANT","AYONS","AZERI","AZOBE","AZORA","AZORE","AZOTA","AZOTE","AZURA","AZURE","AZURS","AZYME","BABAS","BABEL","BABIL","BABYS","BACHA","BACHE","BACHI","BACLA","BACLE","BACON","BACUL","BADAI","BADAS","BADAT","BADEE","BADER","BADES","BADEZ","BADGE","BADIN","BAFFA","BAFFE","BAFRA","BAFRE","BAGAD","BAGEL","BAGGY","BAGNE","BAGOU","BAGUA","BAGUE","BAHAI","BAHTS","BAHUT","BAIES","BAILE","BAINE","BAINS","BAISA","BAISE","BALAI","BALAN","BALES","BALLA","BALLE","BALSA","BALTE","BAMBA","BANAL","BANAT","BANCO","BANCS","BANDA","BANDE","BANGS","BANJO","BANNE","BANNI","BANON","BANTU","BAOUS","BAQUA","BAQUE","BARBA","BARBE","BARBU","BARDA","BARDE","BARDS","BARGE","BARIL","BARJO","BARNS","BARON","BARRA","BARRE","BARRI","BARYE","BARZA","BASAI","BASAL","BASAS","BASAT","BASEE","BASER","BASES","BASEZ","BASIC","BASIE","BASIN","BASIR","BASIS","BASIT","BASSA","BASSE","BASTA","BASTE","BATAI","BATAS","BATAT","BATCH","BATEE","BATER","BATES","BATEZ","BATHS","BATIE","BATIK","BATIR","BATIS","BATIT","BATON","BATTE","BATTU","BAUDS","BAUGE","BAUME","BAVAI","BAVAS","BAVAT","BAVEE","BAVER","BAVES","BAVEZ","BAYAI","BAYAS","BAYAT","BAYER","BAYES","BAYEZ","BAYLE","BAYOU","BAZAR","BAZIN","BAZOU","BEAIS","BEAIT","BEANT","BEATE","BEATS","BEAUF","BEAUX","BEBES","BEBOP","BECHA","BECHE","BECOT","BECTA","BECTE","BEDES","BEDON","BEENT","BEERA","BEGUE","BEGUM","BEGUS","BEHAI","BEIEZ","BEIGE","BEKEE","BEKES","BELAI","BELAS","BELAT","BELEE","BELER","BELES","BELEZ","BELGA","BELGE","BELLE","BELON","BEMBA","BEMOL","BENEF","BENET","BENIE","BENIN","BENIR","BENIS","BENIT","BENJI","BENNA","BENNE","BENTO","BEONS","BERCA","BERCE","BERET","BERGE","BERME","BERNA","BERNE","BEROT","BERYL","BERYX","BESAS","BESEF","BESET","BETAS","BETEE","BETEL","BETES","BETIE","BETIS","BETON","BETTE","BEUHS","BEURE","BEURK","BEURS","BEUSE","BEVUE","BEZEF","BIAIS","BIAXE","BIBIS","BIBLE","BIBLI","BIBUS","BICHA","BICHE","BICOL","BICOT","BIDES","BIDET","BIDON","BIDOU","BIEFS","BIENS","BIERE","BIFFA","BIFFE","BIGES","BIGLA","BIGLE","BIGOR","BIGOS","BIGOT","BIGRE","BIGUE","BIJOU","BIKER","BILAI","BILAN","BILAS","BILAT","BILEE","BILER","BILES","BILEZ","BILIE","BILLA","BILLE","BILLS","BIMBO","BINAI","BINAS","BINAT","BINDI","BINEE","BINER","BINES","BINEZ","BINGO","BINON","BIOME","BIOTE","BIPAI","BIPAS","BIPAT","BIPEE","BIPER","BIPES","BIPEZ","BIQUA","BIQUE","BIRBE","BIRRS","BISAI","BISAS","BISAT","BISEE","BISER","BISES","BISET","BISEZ","BISOC","BISON","BISOU","BISSA","BISSE","BITAI","BITAS","BITAT","BITEE","BITER","BITES","BITEZ","BITIS","BITOS","BITTA","BITTE","BITTU","BITUE","BITUS","BIWAS","BIZET","BIZOU","BIZUT","BLACK","BLAFF","BLAIR","BLAMA","BLAME","BLANC","BLAPS","BLASA","BLASE","BLAST","BLAZE","BLEDS","BLEME","BLEMI","BLESA","BLESE","BLETS","BLETZ","BLEUE","BLEUI","BLEUS","BLIND","BLINI","BLITZ","BLOCK","BLOCS","BLOGS","BLOND","BLOOM","BLOTS","BLUES","BLUET","BLUFF","BLUSH","BLUTA","BLUTE","BOBBY","BOBET","BOBOS","BOBUN","BOCAL","BOCHE","BOCKS","BODHI","BODYS","BOERS","BOETE","BOEUF","BOGES","BOGEY","BOGIE","BOGUA","BOGUE","BOIAR","BOIDE","BOIRA","BOIRE","BOISA","BOISE","BOITA","BOITE","BOIVE","BOKIT","BOLAS","BOLDO","BOLEE","BOLET","BOLOS","BOLUS","BOMBA","BOMBE","BOMEE","BOMES","BOMME","BONDA","BONDE","BONDI","BONDS","BONGO","BONIF","BONIS","BONNE","BONTE","BONUS","BONZE","BOOKS","BOOMS","BOOST","BOOTS","BORAS","BORAX","BORDA","BORDE","BORDJ","BORDS","BOREE","BORES","BORIE","BORIN","BORNA","BORNE","BORTS","BOSCO","BOSON","BOSSA","BOSSE","BOSSU","BOTES","BOTOS","BOTOX","BOTTA","BOTTE","BOUCS","BOUDA","BOUDE","BOUDI","BOUDU","BOUEE","BOUES","BOUGE","BOUIF","BOULA","BOULE","BOUMA","BOUME","BOUMS","BOURE","BOURG","BOURS","BOUSA","BOUSE","BOUTA","BOUTE","BOUTS","BOUZY","BOVIN","BOWAL","BOXAI","BOXAS","BOXAT","BOXEE","BOXER","BOXES","BOXEZ","BOXON","BOYAU","BRADA","BRADE","BRAIE","BRAIS","BRAIT","BRAMA","BRAME","BRAND","BRANS","BRASA","BRASE","BRAVA","BRAVE","BRAVI","BRAVO","BRAYA","BRAYE","BREAK","BREDE","BREFS","BRELA","BRELE","BREME","BRENS","BRENT","BREVE","BRIBE","BRICK","BRIDA","BRIDE","BRIEE","BRIEF","BRIES","BRIKS","BRIMA","BRIME","BRINS","BRION","BRIOS","BRISA","BRISE","BRIZE","BROCS","BRODA","BRODE","BROIE","BROLS","BROME","BROOK","BROUE","BROUM","BROUS","BROUT","BROYA","BROYE","BRUIE","BRUIR","BRUIS","BRUIT","BRULA","BRULE","BRUMA","BRUME","BRUNE","BRUNI","BRUNS","BRUTE","BRUTS","BUBON","BUCHA","BUCHE","BUEES","BUGGA","BUGGE","BUGGY","BUGLE","BUGNA","BUGNE","BUIRE","BULBE","BULBS","BULGE","BULLA","BULLE","BULLS","BULOT","BUMES","BUNAS","BUQUA","BUQUE","BURAT","BURES","BURGS","BURIN","BURKA","BURLE","BURNE","BURON","BURQA","BUSAI","BUSAS","BUSAT","BUSCS","BUSEE","BUSER","BUSES","BUSEZ","BUSHS","BUSSE","BUSTE","BUTAI","BUTAS","BUTAT","BUTEE","BUTER","BUTES","BUTEZ","BUTIN","BUTOR","BUTOS","BUTTA","BUTTE","BUVEE","BUVEZ","BUZET","BUZZA","BUZZE","BYERI","BYTES","CABAN","CABAS","CABLA","CABLE","CABOT","CABRA","CABRE","CABRI","CABUS","CACAO","CACAS","CACHA","CACHE","CACOU","CADDY","CADES","CADET","CADIS","CADOR","CADRA","CADRE","CADUC","CAFES","CAFRE","CAFTA","CAFTE","CAGEE","CAGES","CAGET","CAGNA","CAGNE","CAGOT","CAGOU","CAGUA","CAGUE","CAHOT","CAIDS","CAIEU","CAION","CAIRN","CAJAN","CAJET","CAJOU","CAJUN","CAKES","CAKTA","CAKTI","CALAI","CALAO","CALAS","CALAT","CALEE","CALER","CALES","CALEZ","CALFS","CALIN","CALLA","CALLE","CALLS","CALMA","CALME","CALMI","CALOS","CALOT","CALTA","CALTE","CALUS","CALVA","CAMAI","CAMAS","CAMAT","CAMBA","CAMBE","CAMEE","CAMEO","CAMER","CAMES","CAMEZ","CAMPA","CAMPE","CAMPO","CAMPS","CAMUS","CANAI","CANAL","CANAR","CANAS","CANAT","CANDI","CANEE","CANER","CANES","CANEZ","CANGE","CANIF","CANIN","CANNA","CANNE","CANOE","CANON","CANOT","CANTA","CANTE","CANTS","CANUS","CANUT","CAOUA","CAPAI","CAPAS","CAPAT","CAPEA","CAPEE","CAPER","CAPES","CAPET","CAPEZ","CAPON","CAPOS","CAPOT","CAPPA","CAPRE","CAPTA","CAPTE","CAQUA","CAQUE","CARAT","CARBO","CARDA","CARDE","CARET","CAREX","CARGO","CARIA","CARIE","CARIS","CARME","CARNE","CARPE","CARRA","CARRE","CARRY","CARTA","CARTE","CARVA","CARVI","CARYS","CASAI","CASAS","CASAT","CASCO","CASEE","CASER","CASES","CASEZ","CASHS","CASSA","CASSE","CASTA","CASTE","CATAS","CATCH","CATES","CATHO","CATIE","CATIN","CATIR","CATIS","CATIT","CAUDE","CAURI","CAUSA","CAUSE","CAVAI","CAVAS","CAVAT","CAVEA","CAVEE","CAVER","CAVES","CAVET","CAVEZ","CAVUM","CAYES","CAYEU","CAYON","CEANS","CEBES","CEDAI","CEDAS","CEDAT","CEDEE","CEDER","CEDES","CEDEX","CEDEZ","CEDIS","CEDRE","CEGEP","CEINS","CEINT","CELAI","CELAS","CELAT","CELEE","CELER","CELES","CELEZ","CELLA","CELLE","CELTE","CELUI","CENES","CENNE","CENSE","CENTS","CEPEE","CEPES","CERAT","CERCE","CERFS","CERNA","CERNE","CESAR","CESSA","CESSE","CESTE","CETOL","CETTE","CEZIG","CHAHS","CHAIR","CHAIS","CHALE","CHAMP","CHANS","CHANT","CHAOS","CHAPE","CHAPO","CHARS","CHATS","CHAUD","CHAUT","CHAUX","CHEAP","CHEBA","CHEBS","CHECK","CHEFS","CHEIK","CHENE","CHENI","CHENU","CHERA","CHERE","CHERI","CHERS","CHEVA","CHEVE","CHIAC","CHIAI","CHIAS","CHIAT","CHICS","CHIEE","CHIEN","CHIER","CHIES","CHIEZ","CHILE","CHILI","CHINA","CHINE","CHINO","CHIOT","CHIPA","CHIPE","CHIPO","CHIPS","CHIRO","CHOCO","CHOCS","CHOIE","CHOIR","CHOIS","CHOIT","CHOIX","CHOKE","CHOMA","CHOME","CHOPA","CHOPE","CHOPS","CHORE","CHOSE","CHOTT","CHOUX","CHOYA","CHOYE","CHTIS","CHUES","CHUMS","CHUTA","CHUTE","CHUTS","CHVAS","CHYLE","CHYME","CIBLA","CIBLE","CICLA","CICLE","CIDRE","CIELS","CIEUX","CIGUE","CILIE","CILLA","CILLE","CIMES","CINES","CIPAL","CIPPE","CIPRE","CIRAI","CIRAS","CIRAT","CIRCA","CIREE","CIRER","CIRES","CIREZ","CIRON","CIRRE","CIRSE","CISTE","CITAI","CITAS","CITAT","CITEE","CITER","CITES","CITEZ","CIVES","CIVET","CIVIL","CLADE","CLAIE","CLAIM","CLAIR","CLAMA","CLAME","CLAMP","CLAMS","CLANS","CLAPA","CLAPE","CLAPI","CLAPS","CLARK","CLASH","CLAVA","CLAVE","CLAYS","CLEAN","CLEBS","CLEFS","CLERC","CLICK","CLICS","CLIMS","CLINS","CLIPS","CLITO","CLIVA","CLIVE","CLODO","CLONA","CLONE","CLOPA","CLOPE","CLORA","CLORE","CLOSE","CLOUA","CLOUD","CLOUE","CLOUP","CLOUS","CLOWN","CLUBS","CLUES","CLUSE","COACH","COATI","COBEA","COBEE","COBES","COBOL","COBRA","COBZA","COCAS","COCCI","COCHA","COCHE","COCON","COCOS","COCUE","COCUS","CODAI","CODAS","CODAT","CODEC","CODEE","CODER","CODES","CODEX","CODEZ","CODON","COEFS","COEUR","COGNA","COGNE","COHUE","COING","COINS","COIRS","COITA","COITE","COITS","COKES","COLAS","COLEE","COLIN","COLIS","COLLA","COLLE","COLOC","COLON","COLOS","COLTS","COLZA","COMAS","COMBE","COMBI","COMBO","COMMA","COMME","COMPO","COMTE","CONCU","CONDE","CONDO","CONES","CONGA","CONGE","CONNE","CONNU","CONSO","CONTA","CONTE","COOLS","COPAL","COPIA","COPIE","COPLA","COPPA","COPRA","COPTE","COQUE","CORAN","CORBS","CORDA","CORDE","CORES","CORGI","CORME","CORNA","CORNE","CORNU","CORON","CORPO","CORPS","CORSA","CORSE","CORSO","COSSA","COSSE","COSSU","COSYS","COTAI","COTAS","COTAT","COTEE","COTER","COTES","COTEZ","COTIE","COTIR","COTIS","COTIT","COTON","COTRE","COTTA","COTTE","COUAC","COUDA","COUDE","COUDS","COUIC","COULA","COULE","COUPA","COUPE","COUPS","COURE","COURS","COURT","COURU","COUSE","COUSU","COUTA","COUTE","COUTS","COUVA","COUVE","COUVI","COUVS","COXAI","COXAL","COXAS","COXAT","COXEE","COXER","COXES","COXEZ","COYAU","COYER","CRABE","CRACK","CRACS","CRADE","CRADO","CRAIE","CRAMA","CRAME","CRANA","CRANE","CRANS","CRAPS","CRASE","CRASH","CRAUS","CRAUX","CRAVE","CRAWL","CREAI","CREAS","CREAT","CREDO","CREEE","CREEK","CREER","CREES","CREEZ","CREMA","CREME","CRENA","CRENE","CREPA","CREPE","CREPI","CREPU","CRETA","CRETE","CRETS","CREUX","CREVA","CREVE","CRIAI","CRIAS","CRIAT","CRIBS","CRICS","CRIEE","CRIER","CRIES","CRIEZ","CRIME","CRINS","CRISA","CRISE","CRISS","CROCO","CROCS","CROIE","CROIS","CROIT","CROIX","CROLA","CROLE","CROSS","CROUP","CROWN","CROWS","CRUEL","CRUES","CRUOR","CUBAI","CUBAS","CUBAT","CUBEE","CUBER","CUBES","CUBEZ","CUBIS","CUCUL","CUCUS","CUEVA","CUFAT","CUIRA","CUIRE","CUIRS","CUISE","CUITA","CUITE","CUITS","CULAI","CULAS","CULAT","CULEE","CULER","CULES","CULEX","CULEZ","CULOT","CULTE","CUMIN","CUMUL","CUPRO","CURAI","CURAS","CURAT","CUREE","CURER","CURES","CUREZ","CURIE","CURRY","CUTIS","CUVAI","CUVAS","CUVAT","CUVEE","CUVER","CUVES","CUVEZ","CYANS","CYCAS","CYCLE","CYCLO","CYGNE","CYMES","CYONS","CZARS","DABAS","DABES","DACES","DACHE","DADAS","DAGUA","DAGUE","DAHIR","DAHLS","DAHUS","DAILS","DAIMS","DAINE","DAIRA","DAKIN","DALIT","DALLA","DALLE","DALOT","DAMAI","DAMAN","DAMAS","DAMAT","DAMEE","DAMER","DAMES","DAMEZ","DAMNA","DAMNE","DANCE","DANDY","DANIO","DANSA","DANSE","DARCE","DARDA","DARDE","DARDS","DARIS","DARNE","DARON","DARSE","DASHI","DATAI","DATAS","DATAT","DATEE","DATER","DATES","DATEZ","DATIF","DATTE","DAUBA","DAUBE","DAUWS","DAYAK","DEALA","DEALE","DEALS","DEBAT","DEBET","DEBIT","DEBUT","DEBYE","DECAN","DECAS","DECCA","DECES","DECHE","DECHU","DECIS","DECKS","DECOR","DECOS","DECRI","DECRU","DECUE","DECUS","DECUT","DEDIA","DEDIE","DEDIS","DEDIT","DEFET","DEFIA","DEFIE","DEFIS","DEFIT","DEGAT","DEGEL","DEGRE","DEGUE","DEGUN","DEITE","DELAI","DELCO","DELIA","DELIE","DELIT","DELOT","DELTA","DEMES","DEMET","DEMIE","DEMIS","DEMIT","DEMON","DEMOS","DENAR","DENDI","DENIA","DENIE","DENIM","DENIS","DENSE","DENTA","DENTE","DENTI","DENTS","DENTU","DENUA","DENUE","DEPIT","DEPLU","DEPOT","DERBY","DERME","DERNY","DESIR","DESKS","DETOX","DETTE","DEUGS","DEUIL","DEUST","DEVET","DEVEZ","DEVIA","DEVIE","DEVIN","DEVIS","DEVON","DEVOT","DEVRA","DEWAR","DHALS","DHIKR","DHOLE","DHOTI","DIALS","DIAMS","DIANE","DIAPO","DIBIS","DICOS","DICTA","DICTE","DIDOT","DIENE","DIESA","DIESE","DIETE","DIEUX","DIFFA","DIGIT","DIGNE","DIGON","DIGUE","DILUA","DILUE","DIMES","DINAI","DINAR","DINAS","DINAT","DINDE","DINER","DINES","DINEZ","DINGO","DINKA","DIODE","DIOLA","DIOLS","DIOTS","DIRAI","DIRAS","DIRES","DIREZ","DIRLO","DISCO","DISES","DISPO","DISSE","DITES","DIVAN","DIVAS","DIVES","DIVIN","DIVIS","DIVOT","DIWAN","DIXIE","DIXIT","DJAIN","DJEUN","DJINN","DOBOK","DOBRA","DOCKS","DOCTE","DOCUS","DODOS","DODUE","DODUS","DOGAT","DOGES","DOGME","DOGON","DOGUE","DOIGT","DOINA","DOITS","DOIVE","DOJOS","DOLAI","DOLAS","DOLAT","DOLBY","DOLCE","DOLEE","DOLER","DOLES","DOLEZ","DOLIC","DOLLY","DOLMA","DOLOS","DOMES","DOMUS","DONAS","DONAU","DONAX","DONER","DONGS","DONNA","DONNE","DONUT","DOPAI","DOPAS","DOPAT","DOPEE","DOPER","DOPES","DOPEZ","DORAI","DORAS","DORAT","DOREE","DORER","DORES","DOREZ","DORIN","DORIS","DORME","DORMI","DOSAI","DOSAS","DOSAT","DOSEE","DOSER","DOSES","DOSEZ","DOSHA","DOSSE","DOTAI","DOTAL","DOTAS","DOTAT","DOTEE","DOTER","DOTES","DOTEZ","DOUAI","DOUAR","DOUAS","DOUAT","DOUCE","DOUCI","DOUCS","DOUEE","DOUER","DOUES","DOUEZ","DOUFE","DOULA","DOUMA","DOUMS","DOURO","DOUTA","DOUTE","DOUVE","DOUZE","DOXAS","DOYEN","DRAFT","DRAGS","DRAIE","DRAIN","DRAME","DRAMS","DRAPA","DRAPE","DRAPS","DRAVA","DRAVE","DRAYA","DRAYE","DREGE","DREVE","DRIFT","DRILL","DRING","DRINK","DRIVA","DRIVE","DROIT","DROLE","DROME","DRONE","DROPA","DROPE","DROPS","DRUES","DRUMS","DRUPE","DRUSE","DRUZE","DUALE","DUALS","DUAUX","DUCAL","DUCAT","DUCES","DUCHE","DUDIT","DUELS","DUGON","DUITA","DUITE","DUITS","DULIE","DUMES","DUNES","DUNKS","DUODI","DUPAI","DUPAS","DUPAT","DUPEE","DUPER","DUPES","DUPEZ","DUQUA","DUQUE","DURAI","DURAL","DURAS","DURAT","DURCI","DUREE","DURER","DURES","DUREZ","DURIT","DURUM","DUSES","DUSSE","DUTES","DUVET","DYADE","DYKES","DYNES","DZETA","EAGLE","EBAHI","EBATS","EBENE","EBOUA","EBOUE","ECALA","ECALE","ECANG","ECART","ECHAI","ECHAS","ECHAT","ECHEC","ECHEE","ECHER","ECHES","ECHET","ECHEZ","ECHOS","ECHUE","ECHUS","ECHUT","ECIMA","ECIME","ECLAT","ECLOS","ECLOT","ECOIN","ECOLA","ECOLE","ECOLO","ECOPA","ECOPE","ECOTA","ECOTE","ECOTS","ECRAN","ECRIA","ECRIE","ECRIN","ECRIS","ECRIT","ECROU","ECRUE","ECRUS","ECSTA","ECULA","ECULE","ECUMA","ECUME","ECURA","ECURE","EDAMS","EDENS","EDILE","EDITA","EDITE","EDITO","EDITS","EDUEN","EFFET","EFRIT","EGAIE","EGALA","EGALE","EGARA","EGARD","EGARE","EGAUX","EGAYA","EGAYE","EGEEN","EGIDE","EGOUT","EIDER","EJECT","EJETS","ELAND","ELANS","ELAVE","ELBOT","ELEGI","ELEIS","ELEMI","ELEVA","ELEVE","ELFES","ELIAI","ELIAS","ELIAT","ELIDA","ELIDE","ELIEE","ELIER","ELIES","ELIEZ","ELIMA","ELIME","ELIRA","ELIRE","ELISE","ELITE","ELLES","ELOGE","ELOXE","ELUAI","ELUAS","ELUAT","ELUDA","ELUDE","ELUEE","ELUER","ELUES","ELUEZ","ELYME","EMAIL","EMANA","EMANE","EMAUX","EMBAT","EMBUA","EMBUE","EMBUS","EMBUT","EMERI","EMETS","EMEUS","EMEUT","EMIAI","EMIAS","EMIAT","EMIEE","EMIER","EMIES","EMIEZ","EMIRS","EMISE","EMOIS","EMOJI","EMOUD","EMOUS","EMPAN","EMPLI","EMUES","EMULA","EMULE","EMYDE","ENCAN","ENCAS","ENCOR","ENCRA","ENCRE","ENDOS","ENEMA","ENFER","ENFEU","ENFIN","ENFLA","ENFLE","ENFUI","ENGIN","ENJEU","ENLIA","ENLIE","ENNUI","ENOLS","ENOUA","ENOUE","ENTAI","ENTAS","ENTAT","ENTEE","ENTER","ENTES","ENTEZ","ENTRA","ENTRE","ENVIA","ENVIE","ENVOI","ENVOL","EPAIR","EPAIS","EPAND","EPARS","EPART","EPATA","EPATE","EPAVE","EPEES","EPELA","EPELE","EPHOD","EPIAI","EPIAS","EPIAT","EPICA","EPICE","EPIEE","EPIER","EPIES","EPIEU","EPIEZ","EPIGE","EPILA","EPILE","EPINA","EPINE","EPITE","EPODE","EPOIS","EPOUX","EPOXY","EPRIS","EPRIT","EPROM","EPUCA","EPUCE","EPURA","EPURE","EQUIN","ERBUE","ERGOL","ERGOT","ERIGE","ERINE","ERODA","ERODE","ERRAI","ERRAS","ERRAT","ERRER","ERRES","ERREZ","ERSES","ESCHA","ESCHE","ESCOT","ESKER","ESPAR","ESSAI","ESSES","ESSOR","ESTER","ESTES","ESTOC","ETAGE","ETAIE","ETAIN","ETAIS","ETAIT","ETALA","ETALE","ETALS","ETAMA","ETAME","ETANG","ETANT","ETAPE","ETATS","ETAUX","ETAYA","ETAYE","ETEND","ETETA","ETETE","ETEUF","ETHER","ETHOS","ETIER","ETIEZ","ETIGE","ETIRA","ETIRE","ETOCS","ETOLE","ETRES","ETRON","ETUDE","ETUIS","ETUVA","ETUVE","EUMES","EUROS","EUSSE","EUTES","EVADA","EVADE","EVASA","EVASE","EVEIL","EVENT","EVIDA","EVIDE","EVIER","EVITA","EVITE","EVOHE","EWEES","EXACT","EXAMS","EXCES","EXCLU","EXEAT","EXEMA","EXIGE","EXIGU","EXILA","EXILE","EXILS","EXINE","EXITS","EXODE","EXONS","EXPAT","EXPIA","EXPIE","EXPOS","EXTRA","EYRAS","FABLE","FACES","FACHA","FACHE","FACHO","FACON","FADAI","FADAS","FADAT","FADEE","FADER","FADES","FADET","FADEZ","FADOS","FAENA","FAGNE","FAGOT","FAIMS","FAINE","FAIRE","FAITE","FAITS","FAKES","FAKIR","FALLE","FALLU","FALOT","FALUN","FAMAS","FAMEE","FAMES","FANAI","FANAL","FANAS","FANAT","FANCY","FANEE","FANER","FANES","FANEZ","FANGE","FANGS","FANNY","FANON","FANUM","FAONS","FARAD","FARCA","FARCE","FARCI","FARDA","FARDE","FARDS","FARES","FARIO","FAROS","FARSI","FARTA","FARTE","FARTS","FASCE","FASSE","FASSI","FASTE","FATAL","FATES","FATMA","FATUM","FATWA","FAUNE","FAUTA","FAUTE","FAUVE","FAVUS","FAXAI","FAXAS","FAXAT","FAXEE","FAXER","FAXES","FAXEZ","FAYOT","FEALE","FEAUX","FECAL","FECES","FEDES","FEINS","FEINT","FELAI","FELAS","FELAT","FELEE","FELER","FELES","FELEZ","FELIN","FELLE","FELON","FEMME","FEMUR","FENDE","FENDS","FENDU","FENIL","FENTE","FERAI","FERAL","FERAS","FEREZ","FERIA","FERIE","FERIR","FERLA","FERLE","FERMA","FERME","FERMI","FERRA","FERRE","FERRY","FERTE","FERUE","FERUS","FESSA","FESSE","FESSU","FETAI","FETAS","FETAT","FETEE","FETER","FETES","FETEZ","FETUS","FEUES","FEUIL","FEUJS","FEULA","FEULE","FEVES","FIAIS","FIAIT","FIANT","FIBRA","FIBRE","FIBRO","FICHA","FICHE","FICHU","FICUS","FIEES","FIEFS","FIELD","FIELS","FIENT","FIERA","FIERE","FIERS","FIEUX","FIFIS","FIFRE","FIGEA","FIGEE","FIGER","FIGES","FIGEZ","FIGUE","FIIEZ","FILAI","FILAO","FILAS","FILAT","FILEE","FILER","FILES","FILET","FILEZ","FILIN","FILLE","FILMA","FILME","FILMO","FILMS","FILON","FILOS","FILOU","FIMES","FINAL","FINES","FINIE","FINIR","FINIS","FINIT","FINNS","FIOLE","FIONS","FIORD","FIOTE","FIOUL","FIQHS","FIRME","FIRTH","FISCS","FISSA","FISSE","FITES","FITOU","FITTA","FITTE","FIXAI","FIXAS","FIXAT","FIXEE","FIXER","FIXES","FIXEZ","FIXIE","FIXIN","FJELD","FJELL","FJORD","FLAGS","FLAIR","FLANA","FLANC","FLANE","FLANS","FLAPI","FLASH","FLATS","FLEAU","FLEIN","FLENU","FLETS","FLEUR","FLICS","FLINT","FLIPS","FLIRT","FLOCS","FLOES","FLOOD","FLOPS","FLORE","FLOTS","FLOUA","FLOUE","FLOUS","FLOWS","FLUAI","FLUAS","FLUAT","FLUER","FLUES","FLUET","FLUEZ","FLUOR","FLUOS","FLUSH","FLUTA","FLUTE","FLUXA","FLUXE","FLYER","FOCAL","FOCUS","FOEHN","FOENE","FOHNA","FOHNE","FOHNS","FOIES","FOILS","FOINS","FOIRA","FOIRE","FOLIE","FOLIO","FOLKS","FOLLE","FONCA","FONCE","FONDA","FONDE","FONDS","FONDU","FONGE","FONIO","FONTE","FONTS","FOOTS","FORAI","FORAS","FORAT","FORCA","FORCE","FORCI","FOREE","FORER","FORES","FORET","FOREZ","FORGE","FORMA","FORME","FORTE","FORTS","FORUM","FOSSA","FOSSE","FOUEE","FOUET","FOUGE","FOUIE","FOUIR","FOUIS","FOUIT","FOULA","FOULE","FOURS","FOUTA","FOUTE","FOUTU","FOVEA","FOXEE","FOXES","FOYER","FRACS","FRAIE","FRAIS","FRAKE","FRANC","FRAPE","FRASA","FRASE","FRAYA","FRAYE","FREAK","FREIN","FRELE","FREMI","FRENE","FREON","FRERE","FRETA","FRETE","FRETS","FREUX","FRICS","FRIGO","FRIMA","FRIME","FRIPA","FRIPE","FRIRA","FRIRE","FRISA","FRISE","FRITA","FRITE","FRITS","FRITZ","FROCS","FROID","FROLA","FROLE","FRONT","FROUA","FROUE","FRUIT","FUCUS","FUDGE","FUELS","FUERO","FUGUA","FUGUE","FUGUS","FUIES","FUIRA","FUITA","FUITE","FULLS","FUMAI","FUMAS","FUMAT","FUMEE","FUMER","FUMES","FUMET","FUMEZ","FUNES","FUNIN","FUNKS","FUNKY","FURAX","FURET","FURIA","FURIE","FUSAI","FUSAS","FUSAT","FUSEE","FUSEL","FUSER","FUSES","FUSEZ","FUSIL","FUSSE","FUSTE","FUTAL","FUTEE","FUTES","FUTON","FUTUR","FUYEZ","GABAS","GABIE","GABLE","GACHA","GACHE","GADES","GADIN","GADJE","GADJI","GADJO","GAFFA","GAFFE","GAGAS","GAGEA","GAGEE","GAGER","GAGES","GAGEZ","GAGNA","GAGNE","GAIAC","GAIES","GAINA","GAINE","GAINS","GAITA","GAITE","GAIZE","GALAS","GALBA","GALBE","GALES","GALET","GALLA","GALLE","GALLO","GALON","GALOP","GAMAY","GAMBA","GAMBE","GAMER","GAMET","GAMIN","GAMMA","GAMME","GAMOU","GANGA","GANGS","GANJA","GANSA","GANSE","GANTA","GANTE","GANTS","GARAI","GARAS","GARAT","GARCE","GARDA","GARDE","GAREE","GARER","GARES","GAREZ","GARIS","GARNI","GAROU","GARUM","GASBA","GASPI","GASPS","GATAI","GATAS","GATAT","GATEE","GATER","GATES","GATEZ","GATTA","GATTE","GAUDE","GAUDI","GAULA","GAULE","GAUPE","GAURA","GAURS","GAUSS","GAVAI","GAVAS","GAVAT","GAVEE","GAVER","GAVES","GAVEZ","GAVOT","GAYAL","GAZAI","GAZAS","GAZAT","GAZEE","GAZER","GAZES","GAZEZ","GAZON","GAZOU","GEAIS","GEANT","GECKO","GEEKA","GEEKE","GEEKS","GEINS","GEINT","GELAI","GELAS","GELAT","GELEE","GELER","GELES","GELEZ","GELIF","GEMIE","GEMIR","GEMIS","GEMIT","GEMMA","GEMME","GENAI","GENAL","GENAS","GENAT","GENEE","GENER","GENES","GENET","GENEZ","GENIE","GENOU","GENRE","GENTE","GENTS","GEODE","GEOLE","GERAI","GERAS","GERAT","GERBA","GERBE","GERCA","GERCE","GEREE","GERER","GERES","GEREZ","GERLE","GERMA","GERME","GESIR","GESSE","GESTE","GHEES","GIBET","GIBUS","GICLA","GICLE","GIFLA","GIFLE","GIFTS","GIGAS","GIGOT","GIGUA","GIGUE","GILDE","GILET","GILLE","GIRIE","GIRLS","GIRLY","GIRON","GISEZ","GITAI","GITAN","GITAS","GITAT","GITEE","GITER","GITES","GITEZ","GITON","GIVRA","GIVRE","GIVRY","GLACA","GLACE","GLAMS","GLANA","GLAND","GLANE","GLAPI","GLASS","GLATI","GLEBE","GLENA","GLENE","GLEYS","GLIAL","GLIDE","GLIES","GLOBE","GLOME","GLOSA","GLOSE","GLOSS","GLOUP","GLUAI","GLUAS","GLUAT","GLUAU","GLUEE","GLUER","GLUES","GLUEZ","GLUIS","GLUME","GLUON","GNAWA","GNETE","GNOLE","GNOME","GNONS","GNOSE","GNOUF","GNOUS","GOALS","GOBAI","GOBAS","GOBAT","GOBEE","GOBER","GOBES","GOBEZ","GOBIE","GODAI","GODAS","GODAT","GODEE","GODER","GODES","GODET","GODEZ","GOGEA","GOGEE","GOGER","GOGES","GOGEZ","GOGLU","GOGOL","GOGOS","GOJIS","GOLEE","GOLEM","GOLFA","GOLFE","GOLFS","GOLGI","GOMBO","GOMMA","GOMME","GONDA","GONDE","GONDS","GONES","GONGS","GONIO","GONZE","GOPAK","GORAL","GORDS","GORES","GORET","GORGE","GORON","GOSSA","GOSSE","GOTHA","GOTHE","GOTHS","GOTON","GOUDA","GOUET","GOUGE","GOULE","GOULU","GOUMS","GOURA","GOURD","GOURE","GOURO","GOURS","GOUTA","GOUTE","GOUTS","GOUTU","GOYAS","GOYIM","GRAAL","GRACE","GRADA","GRADE","GRAFF","GRAFS","GRAIN","GRALA","GRALE","GRANA","GRAND","GRAUS","GRAUX","GRAVA","GRAVE","GRAVI","GRAYS","GREAI","GREAS","GREAT","GREBE","GRECS","GREEE","GREEN","GREER","GREES","GREEZ","GREGE","GRELA","GRELE","GRENA","GRENE","GRENU","GRESA","GRESE","GREVA","GREVE","GRIEF","GRILL","GRILS","GRIMA","GRIME","GRIOT","GRIPS","GRISA","GRISE","GRIVE","GROGS","GROIE","GROIN","GROLE","GROMA","GROOM","GROUP","GRUAU","GRUES","GRUGE","GRUME","GRUON","GRUTA","GRUTE","GUAIS","GUANO","GUARS","GUEAI","GUEAS","GUEAT","GUEDE","GUEEE","GUEER","GUEES","GUEEZ","GUEPE","GUERE","GUERI","GUETE","GUETS","GUEUX","GUEZE","GUGUS","GUIBS","GUIDA","GUIDE","GUILI","GUIPA","GUIPE","GUISE","GUPPY","GURUS","GUSSE","GUYOT","GUZLA","GWERZ","GWOKA","GYOZA","GYPSE","GYRES","GYRIN","GYROS","GYRUS","HABIT","HABLA","HABLE","HACHA","HACHE","HACKA","HACKE","HADAL","HADJI","HADJS","HAIDA","HAIES","HAIKS","HAIKU","HAINE","HAIRA","HAIRE","HAJES","HAKAS","HAKKA","HALAI","HALAL","HALAS","HALAT","HALBI","HALDE","HALEE","HALER","HALES","HALEZ","HALLE","HALLS","HALON","HALOS","HALTE","HALVA","HAMAC","HAMPE","HANAP","HANDS","HANSE","HANTA","HANTE","HAPAX","HAPPA","HAPPE","HARAM","HARAS","HARDA","HARDE","HARDI","HARDS","HAREM","HARET","HARKA","HARKI","HARLE","HARPA","HARPE","HARTS","HASCH","HASES","HASTE","HASTS","HATAI","HATAS","HATAT","HATEE","HATER","HATES","HATEZ","HATIF","HAUTE","HAUTS","HAVAI","HAVAS","HAVAT","HAVEE","HAVER","HAVES","HAVEZ","HAVIE","HAVIR","HAVIS","HAVIT","HAVRE","HAYON","HAZAN","HEBDO","HECTO","HELAI","HELAS","HELAT","HELEE","HELER","HELES","HELEZ","HELIO","HELIX","HELLO","HEMES","HENNE","HENNI","HENRY","HERBA","HERBE","HERBU","HERES","HERON","HEROS","HERPE","HERSA","HERSE","HERTZ","HERVE","HETRE","HEURE","HEURS","HEURT","HEVEA","HIAIS","HIAIT","HIANT","HIBOU","HIEES","HIENT","HIERA","HIFIS","HIHAN","HIIEZ","HIJAB","HILES","HINDI","HIONS","HIPPO","HIPPY","HISSA","HISSE","HIVER","HOBBY","HOCAS","HOCCO","HOCHA","HOCHE","HOGAN","HOIRS","HOKIS","HOMES","HOMME","HOMOS","HONNI","HONTE","HOPAK","HOPIE","HOPIS","HORAS","HORDE","HORST","HOSTA","HOSTO","HOSTS","HOTEL","HOTES","HOTTA","HOTTE","HOTUS","HOUAI","HOUAS","HOUAT","HOUEE","HOUER","HOUES","HOUEZ","HOUKA","HOULA","HOULE","HOURD","HOURI","HOUSE","HOVAS","HOYAU","HUAIS","HUAIT","HUANT","HUARD","HUART","HUCHA","HUCHE","HUEES","HUENT","HUERA","HUHAU","HUIEZ","HUILA","HUILE","HUMAI","HUMAS","HUMAT","HUMEE","HUMER","HUMES","HUMEZ","HUMUS","HUNES","HUONS","HUPPE","HURES","HURLA","HURLE","HURON","HUSKY","HUTIA","HUTIN","HUTTE","HUTUE","HUTUS","HYDNE","HYDRE","HYENE","HYMEN","HYMNE","HYPER","HYPES","HYPHE","HYPNE","IAMBE","IBERE","IBOGA","ICEUX","ICHOR","ICONE","ICTUS","IDEAL","IDEEL","IDEES","IDIOT","IDOLE","IFTAR","IGAME","IGBOS","IGLOO","IGLOU","IGNEE","IGNES","IGUES","IKATS","ILEAL","ILEON","ILETS","ILEUS","ILIEN","ILION","ILOTE","ILOTS","IMAGE","IMAGO","IMAMS","IMANS","IMBUE","IMBUS","IMIDE","IMINE","IMITA","IMITE","IMMUN","IMPEC","IMPER","IMPIE","IMPOT","IMPRO","IMPUR","INCAS","INCHS","INCUS","INDES","INDEX","INDIC","INDOL","INDOU","INDRI","INDUE","INDUS","INEAT","INFOS","INFOX","INFRA","INFUS","INIES","INLAY","INNEE","INNES","INNUE","INNUS","INOUI","INPUT","INSTI","INTER","INTIS","INTOX","INTRO","INUIT","INUKS","INULE","INVAR","INVIT","IODAI","IODAS","IODAT","IODEE","IODER","IODES","IODEZ","IODLA","IODLE","IOULA","IOULE","IPECA","IPPON","IRAIS","IRAIT","IRIEN","IRIEZ","IRISA","IRISE","IROKO","IRONE","IRONS","IRONT","ISARD","ISBAS","ISLAM","ISMES","ISOLA","ISOLE","ISSAS","ISSUE","ISSUS","ITEMS","ITERA","ITERE","ITHOS","IULES","IVRES","IWANS","IXAGE","IXAIS","IXAIT","IXANT","IXEES","IXENT","IXERA","IXIAS","IXIEZ","IXODE","IXONS","JABLA","JABLE","JABOT","JACEE","JACKS","JACOS","JACOT","JACTA","JACTE","JADES","JADIS","JAINA","JAINE","JAINS","JAJAS","JALAP","JALES","JALON","JAMBE","JANTE","JAPON","JAPPA","JAPPE","JAQUE","JARDE","JARDS","JARRE","JARTA","JARTE","JASAI","JASAS","JASAT","JASEE","JASER","JASES","JASEZ","JASPA","JASPE","JASSA","JASSE","JATIS","JATTE","JAUGE","JAUNE","JAUNI","JAVAS","JAVEL","JAYET","JAZZA","JAZZE","JAZZY","JEANS","JEEPS","JELLO","JENNY","JEREZ","JERKA","JERKE","JERKS","JESES","JESUS","JETAI","JETAS","JETAT","JETEE","JETER","JETES","JETEZ","JETON","JETTE","JEUDI","JEUNA","JEUNE","JEZES","JIHAD","JIVES","JOCKO","JODEL","JODLA","JODLE","JOGGA","JOGGE","JOICE","JOIES","JOINS","JOINT","JOJOS","JOKER","JOLIE","JOLIS","JOMON","JONCA","JONCE","JONCS","JORAN","JOTAS","JOUAI","JOUAL","JOUAS","JOUAT","JOUEE","JOUER","JOUES","JOUET","JOUEZ","JOUGS","JOUIR","JOUIS","JOUIT","JOULE","JOURS","JOUTA","JOUTE","JOYAU","JUBES","JUCHA","JUCHE","JUDAS","JUDDS","JUDOS","JUDRU","JUGAL","JUGEA","JUGEE","JUGER","JUGES","JUGEZ","JUIFS","JUINS","JUIVE","JULEP","JULES","JULIE","JULOT","JUMAR","JUMBO","JUMEL","JUMPA","JUMPE","JUMPS","JUNCO","JUNKS","JUNKY","JUNTE","JUPES","JUPON","JURAI","JURAS","JURAT","JUREE","JURER","JURES","JUREZ","JURON","JURYS","JUSEE","JUSTE","JUTAI","JUTAS","JUTAT","JUTER","JUTES","JUTEZ","KABIC","KABIG","KABYE","KACHA","KACHE","KADIS","KAFIR","KAGOU","KAKIS","KALES","KALIS","KAMIS","KANAK","KANAS","KANAT","KANJI","KAONS","KAPOK","KAPOS","KAPPA","KAREN","KARMA","KARST","KARTS","KATAS","KAVAS","KAWAI","KAWAS","KAWIS","KAYAC","KAYAK","KEBAB","KEFIE","KEFIR","KEFTA","KEKES","KELPS","KEMIA","KENAF","KENAS","KENDO","KEPIS","KERMA","KERNS","KETCH","KETJE","KEUFS","KEUMS","KHANS","KHATS","KHMER","KHOBZ","KHOIN","KHOLS","KICKS","KIEFS","KIFAI","KIFAS","KIFAT","KIFEE","KIFER","KIFES","KIFEZ","KIFFA","KIFFE","KIKIS","KILIM","KILOS","KILTS","KINAS","KINES","KIPPA","KITCH","KITES","KIVAS","KIWIS","KLAFT","KNACK","KNOUT","KOALA","KOANS","KODAK","KOHOL","KOINE","KOKAS","KOLAS","KOMBU","KONDO","KONGO","KOPPA","KORAS","KORES","KOTAI","KOTAS","KOTAT","KOTER","KOTES","KOTEZ","KOTOS","KOUBA","KRAAL","KRACH","KRAFT","KRAKS","KREML","KRIEK","KRILL","KRISS","KSARS","KSOUR","KUNAS","KURDE","KURUS","KYATS","KYLIX","KYRIE","KYSTE","KYUDO","LABBE","LABEL","LABIE","LABOS","LABRE","LABRI","LACAI","LACAS","LACAT","LACEE","LACER","LACES","LACET","LACEZ","LACHA","LACHE","LACIS","LACKS","LACTE","LADIN","LADRE","LADYS","LAGAN","LAGER","LAGON","LAHAR","LAICS","LAIDE","LAIDS","LAIES","LAINA","LAINE","LAIRD","LAITE","LAITS","LAIUS","LAIZE","LAKHS","LAMAI","LAMAS","LAMAT","LAMBA","LAMBI","LAMBS","LAMEE","LAMER","LAMES","LAMEZ","LAMIE","LAMPA","LAMPE","LANCA","LANCE","LANDE","LANDS","LANGE","LAOBE","LAPAI","LAPAS","LAPAT","LAPEE","LAPER","LAPES","LAPEZ","LAPIE","LAPIN","LAPIS","LAPON","LAPSE","LAPSI","LAQUA","LAQUE","LARDA","LARDE","LARDS","LARES","LARGE","LARGO","LARIS","LARIX","LARME","LARVE","LASER","LASSA","LASSE","LASSI","LASSO","LATEX","LATIF","LATIN","LATTA","LATTE","LAURE","LAUSE","LAUZE","LAVAI","LAVAS","LAVAT","LAVEE","LAVER","LAVES","LAVEZ","LAVIS","LAVRA","LAYAI","LAYAS","LAYAT","LAYEE","LAYER","LAYES","LAYEZ","LAYON","LAZES","LAZZI","LEBEL","LECHA","LECHE","LECON","LEDIT","LEGAL","LEGAT","LEGER","LEGES","LEGOS","LEGUA","LEGUE","LEHMS","LEMME","LEMUR","LENTE","LENTO","LENTS","LEONE","LEPRE","LEPTA","LEPTE","LERCH","LEROT","LESAI","LESAS","LESAT","LESEE","LESER","LESES","LESEZ","LESTA","LESTE","LESTS","LETAL","LETTE","LEUDE","LEURS","LEVAI","LEVAS","LEVAT","LEVEE","LEVER","LEVES","LEVEZ","LEVIS","LEVRE","LEXIE","LEXIS","LIAGE","LIAIS","LIAIT","LIANE","LIANT","LIARD","LIBER","LIBRE","LICES","LICHA","LICHE","LICOL","LICOU","LIDAR","LIDOS","LIEDS","LIEES","LIEGE","LIENS","LIENT","LIERA","LIEUE","LIEUR","LIEUS","LIEUX","LIFTA","LIFTE","LIFTS","LIGES","LIGHT","LIGIE","LIGNA","LIGNE","LIGOT","LIGUA","LIGUE","LIIEZ","LIKAI","LIKAS","LIKAT","LIKEE","LIKER","LIKES","LIKEZ","LILAS","LIMAI","LIMAN","LIMAS","LIMAT","LIMBA","LIMBE","LIMBO","LIMEE","LIMER","LIMES","LIMEZ","LIMON","LINER","LINGA","LINGE","LINKS","LINON","LINOS","LIONS","LIPPE","LIPPU","LIRAC","LIRAI","LIRAS","LIRES","LIREZ","LIRON","LISES","LISEZ","LISPS","LISSA","LISSE","LISTA","LISTE","LITAI","LITAS","LITAT","LITEE","LITER","LITES","LITEZ","LITHO","LITRA","LITRE","LIURE","LIVES","LIVET","LIVRA","LIVRE","LLOYD","LOASE","LOBAI","LOBAS","LOBAT","LOBBY","LOBEE","LOBER","LOBES","LOBEZ","LOBIE","LOBIS","LOCAL","LOCHA","LOCHE","LOCHS","LOCOS","LOCUS","LODEN","LODGE","LOESS","LOFAI","LOFAS","LOFAT","LOFER","LOFES","LOFEZ","LOFTS","LOGEA","LOGEE","LOGER","LOGES","LOGEZ","LOGIN","LOGIS","LOGOS","LOGUA","LOGUE","LOIRS","LOLOS","LOMOS","LOMPE","LONES","LONGE","LONGS","LONZO","LONZU","LOOCH","LOOFA","LOOKE","LOOKS","LOPES","LOPIN","LOQUE","LORAN","LORDS","LORIS","LORRY","LOSER","LOSES","LOTES","LOTIE","LOTIR","LOTIS","LOTIT","LOTOS","LOTTA","LOTTE","LOTUS","LOUAI","LOUAS","LOUAT","LOUEE","LOUER","LOUES","LOUEZ","LOUFS","LOUIS","LOUMA","LOUPA","LOUPE","LOUPS","LOURA","LOURD","LOURE","LOUVA","LOUVE","LOVAI","LOVAS","LOVAT","LOVEE","LOVER","LOVES","LOVEZ","LOYAL","LOYER","LUBIE","LUCRE","LUEUR","LUFFA","LUGEA","LUGEE","LUGER","LUGES","LUGEZ","LUIRA","LUIRE","LUISE","LULUS","LUMAS","LUMEN","LUMES","LUMPS","LUNCH","LUNDI","LUNEE","LUNES","LUPIN","LUPUS","LUREX","LURON","LUSIN","LUSSE","LUTAI","LUTAS","LUTAT","LUTEE","LUTER","LUTES","LUTEZ","LUTHS","LUTIN","LUTTA","LUTTE","LUXAI","LUXAS","LUXAT","LUXEE","LUXER","LUXES","LUXEZ","LUZIN","LYCEE","LYCRA","LYOBA","LYRAI","LYRAS","LYRAT","LYRER","LYRES","LYREZ","LYRIC","LYSAI","LYSAS","LYSAT","LYSEE","LYSER","LYSES","LYSEZ","MAARS","MACHA","MACHE","MACHO","MACIS","MACLA","MACLE","MACON","MACRE","MACRO","MADRE","MAERL","MAFES","MAFFE","MAFIA","MAGES","MAGIE","MAGMA","MAGNA","MAGNE","MAGOT","MAHDI","MAIAS","MAIES","MAILS","MAINS","MAINT","MAIRE","MAJES","MAJOR","MAKIS","MAKOS","MALES","MALIN","MALIS","MALLE","MALMS","MALON","MALTA","MALTE","MALTS","MALUS","MAMAN","MAMAS","MAMBA","MAMBO","MAMEE","MAMES","MAMET","MAMIE","MAMMA","MAMMO","MAMMY","MAMYS","MANAS","MANAT","MANDA","MANDE","MANES","MANGA","MANGE","MANGO","MANIA","MANIE","MANIF","MANIP","MANNE","MANON","MANOU","MANSA","MANSE","MANTA","MANTE","MANUL","MAOHI","MAORI","MAOUS","MAPPA","MAPPE","MAQAM","MAQUA","MAQUE","MARAE","MARAS","MARCS","MARDI","MAREE","MARES","MARGE","MARIA","MARIE","MARIN","MARIS","MARKS","MARLE","MARLI","MARNA","MARNE","MARRA","MARRE","MARRI","MARTE","MASAI","MASER","MASET","MASOS","MASSA","MASSE","MATAF","MATAI","MATAS","MATAT","MATCH","MATEE","MATER","MATES","MATEZ","MATHS","MATIE","MATIF","MATIN","MATIR","MATIS","MATIT","MATON","MATOS","MATOU","MATTE","MATUS","MAULS","MAURE","MAURY","MAUVE","MAXIS","MAYAS","MAYEN","MAYES","MAYOS","MAZAI","MAZAS","MAZAT","MAZEE","MAZER","MAZES","MAZET","MAZEZ","MAZOT","MEATS","MECHA","MECHE","MEDES","MEDIA","MEDIS","MEDIT","MEDOC","MEFIA","MEFIE","MEGAS","MEGIE","MEGIR","MEGIS","MEGIT","MEGOT","MEIJI","MELAI","MELAS","MELAT","MELBA","MELEE","MELER","MELES","MELEZ","MELIA","MELOE","MELON","MELOS","MEMEE","MEMES","MEMOS","MENAI","MENAS","MENAT","MENEE","MENER","MENES","MENEZ","MENIN","MENON","MENSE","MENTE","MENTI","MENUE","MENUS","MERCI","MERDA","MERDE","MERES","MERLE","MERLS","MERLU","MEROU","MESAS","MESON","MESSE","METAL","METAS","METEO","METIS","METRA","METRE","METRO","METTE","MEUFS","MEULA","MEULE","MEURE","MEURS","MEURT","MEUTE","MEUVE","MEZES","MEZIG","MEZZE","MEZZO","MIAOU","MICAS","MICHE","MICRO","MIDIS","MIELS","MIENS","MIEUX","MIGRA","MIGRE","MIKVE","MILAN","MILER","MILES","MILLE","MIMAI","MIMAS","MIMAT","MIMEE","MIMER","MIMES","MIMEZ","MIMIS","MINAI","MINAS","MINAT","MINCE","MINCI","MINEE","MINER","MINES","MINET","MINEZ","MINGS","MINIS","MINON","MINOT","MINOU","MINUS","MIQUE","MIRAI","MIRAS","MIRAT","MIREE","MIRER","MIRES","MIREZ","MIROS","MISAI","MISAS","MISAT","MISEE","MISER","MISES","MISEZ","MISOS","MISSE","MITAI","MITAN","MITAS","MITAT","MITEE","MITER","MITES","MITEZ","MITON","MITRE","MIXAI","MIXAS","MIXAT","MIXEE","MIXER","MIXES","MIXEZ","MIXTE","MNEME","MOAIS","MOCHE","MOCOS","MODAL","MODEM","MODES","MODIF","MOERE","MOFLA","MOFLE","MOGOL","MOHOS","MOIES","MOINE","MOINS","MOIRA","MOIRE","MOISA","MOISE","MOISI","MOITE","MOITI","MOJOS","MOKAS","MOKOS","MOLES","MOLLE","MOLLI","MOLLO","MOLTO","MOLYS","MOMES","MOMIE","MONDA","MONDE","MONEL","MONEP","MONOI","MONOS","MONTA","MONTE","MONTS","MOOCS","MOOKS","MOORE","MOQUA","MOQUE","MORAL","MORCE","MORDE","MORDS","MORDU","MORES","MORGE","MORIO","MORNA","MORNE","MORSE","MORTE","MORTS","MORUE","MORVE","MOSAN","MOSSI","MOTEL","MOTET","MOTIF","MOTOS","MOTTA","MOTTE","MOTUS","MOUDS","MOUES","MOULA","MOULE","MOULT","MOULU","MOUND","MOUTS","MOXAS","MOYAI","MOYAS","MOYAT","MOYEE","MOYEN","MOYER","MOYES","MOYEU","MOYEZ","MUAIS","MUAIT","MUANT","MUCHA","MUCHE","MUCOR","MUCUS","MUDRA","MUEES","MUENT","MUERA","MUETS","MUFLE","MUFTI","MUGES","MUGIE","MUGIR","MUGIS","MUGIT","MUIDS","MUIEZ","MULCH","MULES","MULET","MULLA","MULLS","MULON","MULOT","MULUD","MUMES","MUNDA","MUNGO","MUNIE","MUNIR","MUNIS","MUNIT","MUONS","MURAI","MURAL","MURAS","MURAT","MUREE","MURER","MURES","MURET","MUREX","MUREZ","MURGE","MURIE","MURIN","MURIR","MURIS","MURIT","MUROL","MURON","MUSAI","MUSAS","MUSAT","MUSCS","MUSCU","MUSEE","MUSER","MUSES","MUSEZ","MUSLI","MUSSA","MUSSE","MUSTS","MUTAI","MUTAS","MUTAT","MUTEE","MUTER","MUTES","MUTEZ","MUTIN","MYASE","MYLAR","MYOME","MYOPE","MYRTE","MYTHE","MYTHO","NAANS","NABAB","NABIS","NABLA","NABLE","NABOT","NACHO","NACRA","NACRE","NADIR","NAEVI","NAFES","NAGAS","NAGEA","NAGEE","NAGER","NAGES","NAGEZ","NAGIS","NAHUA","NAIAS","NAIFS","NAINE","NAINS","NAIRA","NAIVE","NAJAS","NAKFA","NANAN","NANAR","NANAS","NANTI","NAPEE","NAPEL","NAPPA","NAPPE","NARCO","NARDS","NARRA","NARRE","NARSE","NASAL","NASES","NASHI","NASSE","NATAL","NATEL","NATIF","NATTA","NATTE","NAVAL","NAVEL","NAVES","NAVET","NAVRA","NAVRE","NAZCA","NAZES","NAZIE","NAZIS","NDAMA","NDOLE","NEANT","NEBKA","NECKS","NECRO","NEEMS","NEFLE","NEGRE","NEGUS","NEIGE","NELLS","NEMES","NEMIS","NENES","NENNI","NEONS","NEPER","NEPES","NERDS","NERES","NERFS","NERVI","NETTE","NEUFS","NEUME","NEUVE","NEVES","NEVEU","NIAIS","NIAIT","NIANT","NIBAR","NICAM","NICHA","NICHE","NICOL","NIDAS","NIEBE","NIECE","NIEES","NIEME","NIENT","NIERA","NIETS","NIFES","NIIEZ","NILLE","NIMBA","NIMBE","NINAS","NINJA","NIOLE","NIOLO","NIOLU","NIONS","NIPPA","NIPPE","NIQAB","NIQUA","NIQUE","NITRA","NITRE","NITRO","NIVAL","NIVES","NIXES","NIZAM","NOBEL","NOBLE","NOCAI","NOCAS","NOCAT","NOCER","NOCES","NOCEZ","NOCIF","NODAL","NOELS","NOEME","NOESE","NOEUD","NOIES","NOIRE","NOIRS","NOISE","NOLIS","NOMAS","NOMES","NOMMA","NOMME","NONCE","NONES","NONNE","NONOS","NOPAL","NORDE","NORDI","NORIA","NORIS","NORMA","NORME","NOTAI","NOTAS","NOTAT","NOTEE","NOTER","NOTES","NOTEZ","NOTRE","NOUAI","NOUAS","NOUAT","NOUBA","NOUCS","NOUEE","NOUER","NOUES","NOUET","NOUEZ","NOVAE","NOVAI","NOVAS","NOVAT","NOVEE","NOVER","NOVES","NOVEZ","NOVIS","NOYAI","NOYAS","NOYAT","NOYAU","NOYEE","NOYER","NOYES","NOYEZ","NUAGE","NUAIS","NUAIT","NUANT","NUBAS","NUCAL","NUEES","NUENT","NUERA","NUERS","NUIEZ","NUIRA","NUIRE","NUISE","NUITS","NULLE","NUONS","NUQUE","NURSE","NUTON","NYALA","NYLON","OASIS","OBEIE","OBEIR","OBEIS","OBEIT","OBELE","OBELS","OBERA","OBERE","OBESE","OBIER","OBITS","OBJET","OBLAT","OBOLE","OBTUS","OBVIA","OBVIE","OCCIS","OCEAN","OCRAI","OCRAS","OCRAT","OCREE","OCRER","OCRES","OCREZ","OCTAL","OCTAS","OCTET","OCULE","OCULI","ODEON","ODEUR","OEILS","OEUFS","OEUVE","OFFRE","OFLAG","OGAMS","OGHAM","OGIVE","OGNON","OGRES","OIDIE","OIENT","OIGNE","OILLE","OINGS","OINTE","OINTS","OISIF","OISON","OKAPI","OKRAS","OLEUM","OLIVE","OMBLE","OMBRA","OMBRE","OMEGA","OMETS","OMISE","OMRAS","ONCES","ONCLE","ONDEE","ONDES","ONDIN","ONGLE","ONLAY","ONSEN","OPALE","OPENS","OPERA","OPERE","OPIAT","OPINA","OPINE","OPIUM","OPTAI","OPTAS","OPTAT","OPTER","OPTES","OPTEZ","ORAGE","ORALE","ORANT","ORAUX","ORBES","ORDIS","ORDOS","ORDRE","OREES","ORGES","ORGIE","ORGUE","ORIEL","ORINS","ORIYA","ORLES","ORLON","ORMES","ORMET","ORNAI","ORNAS","ORNAT","ORNEE","ORNER","ORNES","ORNEZ","OROBE","OROMO","ORPIN","ORQUE","ORTIE","ORVAL","ORVET","OSAIS","OSAIT","OSANT","OSCAR","OSEES","OSENT","OSERA","OSIDE","OSIER","OSIEZ","OSMIE","OSONS","OSQUE","OSSUE","OSSUS","OSTEO","OSTOS","OTAGE","OTAIS","OTAIT","OTANT","OTEES","OTENT","OTERA","OTIEZ","OTITE","OTOMI","OTONS","OUAIS","OUATA","OUATE","OUBLI","OUCHE","OUEDS","OUEST","OUFTI","OUIES","OUIRA","OUMMA","OUNCE","OURDI","OURLA","OURLE","OURSE","OUSTE","OUTIL","OUTRA","OUTRE","OUVRA","OUVRE","OUZOS","OVALE","OVATE","OVEES","OVIDE","OVINE","OVINS","OVNIS","OVULA","OVULE","OXERS","OXIME","OXYDA","OXYDE","OYAIS","OYAIT","OYANT","OYATS","OYIEZ","OYONS","OZENE","OZONA","OZONE","PACAS","PACHA","PACKS","PACSA","PACSE","PACTE","PADAN","PADDY","PADEL","PADOU","PADRE","PAEAN","PAGEA","PAGEE","PAGEL","PAGER","PAGES","PAGEZ","PAGNE","PAGRE","PAGUS","PAIEN","PAIES","PAINS","PAIRE","PAIRS","PAJOT","PAKOL","PALAN","PALAS","PALEE","PALES","PALET","PALIE","PALIR","PALIS","PALIT","PALLE","PALMA","PALME","PALOT","PALOX","PALPA","PALPE","PALUD","PALUS","PAMAI","PAMAS","PAMAT","PAMEE","PAMER","PAMES","PAMEZ","PAMPA","PANAI","PANAS","PANAT","PANAX","PANCA","PANDA","PANEE","PANEL","PANER","PANES","PANEZ","PANGA","PANIC","PANKA","PANNE","PANSA","PANSE","PANSU","PANTE","PANTY","PAONS","PAPAL","PAPAS","PAPES","PAPET","PAPIS","PAPOU","PAPYS","PAQUA","PAQUE","PARAI","PARAS","PARAT","PARCE","PARCS","PARDI","PAREE","PAREO","PARER","PARES","PAREZ","PARIA","PARIE","PARIS","PARKA","PARLA","PARLE","PARME","PARMI","PAROI","PAROS","PARSE","PARSI","PARTE","PARTI","PARTS","PARTY","PARUE","PARUS","PARUT","PASEO","PASSA","PASSE","PATAS","PATCH","PATEE","PATER","PATES","PATIN","PATIO","PATIR","PATIS","PATIT","PATON","PATOU","PATRE","PATRO","PATTE","PATTU","PAUMA","PAUME","PAUSA","PAUSE","PAVAI","PAVAS","PAVAT","PAVEE","PAVER","PAVES","PAVEZ","PAVIE","PAVOT","PAXON","PAYAI","PAYAS","PAYAT","PAYEE","PAYER","PAYES","PAYEZ","PAYSE","PEAGE","PEANS","PEAUX","PECAN","PECHA","PECHE","PECHU","PEDES","PEDUM","PEDZA","PEDZE","PEGOT","PEGRE","PEGUA","PEGUE","PEINA","PEINE","PEINS","PEINT","PEKAN","PEKET","PEKIN","PEKOE","PELAI","PELAS","PELAT","PELEE","PELER","PELES","PELEZ","PELLA","PELLE","PELTA","PELTE","PENAL","PENCE","PENDE","PENDS","PENDU","PENES","PENIL","PENIS","PENNE","PENNY","PENON","PENOS","PENSA","PENSE","PENTE","PENTU","PENTY","PEONS","PEPEE","PEPES","PEPIA","PEPIE","PEPIN","PEPON","PERCA","PERCE","PERCO","PERCU","PERDE","PERDS","PERDU","PERES","PERFO","PERFS","PERIE","PERIF","PERIL","PERIR","PERIS","PERIT","PERLA","PERLE","PERME","PERMS","PEROT","PERRE","PERSE","PERSO","PERTE","PESAI","PESAS","PESAT","PESEE","PESER","PESES","PESEZ","PESON","PESOS","PESSE","PESTA","PESTE","PESTO","PETAI","PETAS","PETAT","PETEE","PETER","PETES","PETEZ","PETIT","PETON","PETRE","PETRI","PETTE","PETUN","PEUFS","PEUHL","PEULE","PEULS","PEURS","PEVES","PEZES","PHACO","PHAGE","PHARE","PHASA","PHASE","PHILO","PHLOX","PHONE","PHONO","PHOTO","PHOTS","PHYLA","PHYSE","PIAFS","PIANO","PIANS","PIBLE","PICAS","PICON","PICOT","PICTE","PIECE","PIEDS","PIEGE","PIERS","PIETA","PIETE","PIEUX","PIEZE","PIFAI","PIFAS","PIFAT","PIFEE","PIFER","PIFES","PIFEZ","PIFFA","PIFFE","PIGEA","PIGEE","PIGER","PIGES","PIGEZ","PIGNA","PIGNE","PIKAS","PILAF","PILAI","PILAS","PILAT","PILAU","PILAW","PILEE","PILER","PILES","PILET","PILEZ","PILLA","PILLE","PILON","PILOT","PILOU","PILUM","PINCA","PINCE","PINES","PINNE","PINOT","PINTA","PINTE","PINUP","PIONS","PIPAI","PIPAS","PIPAT","PIPEE","PIPER","PIPES","PIPEZ","PIPIS","PIPIT","PIPOS","PIQUA","PIQUE","PIRES","PISAN","PISCO","PISES","PISSA","PISSE","PISTA","PISTE","PITAS","PITCH","PITES","PITIE","PITON","PITOU","PITRE","PITTA","PIVES","PIVOT","PIXEL","PIZZA","PLACA","PLACE","PLAGE","PLAID","PLAIE","PLAIN","PLAIS","PLAIT","PLANA","PLANE","PLANS","PLANT","PLATE","PLATS","PLEBE","PLEIN","PLEUR","PLEUT","PLEXI","PLIAI","PLIAS","PLIAT","PLIEE","PLIER","PLIES","PLIEZ","PLINT","PLION","PLOCS","PLOIE","PLOMB","PLOTS","PLOUC","PLOUF","PLOUK","PLOYA","PLOYE","PLUGS","PLUIE","PLUMA","PLUME","PNEUS","POCHA","POCHE","PODAL","PODIA","PODIE","POELA","POELE","POEME","POETE","POGNA","POGNE","POGOS","POIDS","POILA","POILE","POILS","POILU","POING","POINS","POINT","POIRE","POISE","POKER","POLAR","POLES","POLIE","POLIO","POLIR","POLIS","POLIT","POLJE","POLKA","POLOS","POLYS","POMBE","POMMA","POMME","POMPA","POMPE","PONCA","PONCE","PONCH","PONDE","PONDS","PONDU","PONEY","PONGE","PONOR","PONOT","PONTA","PONTE","PONTS","POOLS","POPAA","POPAH","POPES","POPUP","POQUA","POQUE","PORCS","PORES","PORNO","PORTA","PORTE","PORTO","PORTS","POSAI","POSAS","POSAT","POSCA","POSEE","POSER","POSES","POSEZ","POSTA","POSTE","POSTS","POTAI","POTAS","POTAT","POTEE","POTER","POTES","POTET","POTEZ","POTIN","POTTO","POTUE","POTUS","POUAH","POUCA","POUCE","POUET","POUFS","POUIC","POULE","POULS","POUND","POUPE","POYAS","PRAME","PRAOS","PRASE","PREAU","PRELE","PREND","PREPA","PRETA","PRETE","PRETS","PREUX","PREVU","PRIAI","PRIAS","PRIAT","PRIEE","PRIER","PRIES","PRIEZ","PRIMA","PRIME","PRIMO","PRION","PRISA","PRISE","PRIVA","PRIVE","PROBA","PROBE","PROCS","PRODS","PROFS","PROIE","PROJO","PROLO","PROMO","PROMU","PRONA","PRONE","PROSE","PROTE","PROTO","PROUE","PROUT","PROVO","PROXO","PROXY","PRUDE","PRUNE","PSITT","PSOAS","PSORE","PTOSE","PUAIS","PUAIT","PUANT","PUBIS","PUCAI","PUCAS","PUCAT","PUCEE","PUCER","PUCES","PUCEZ","PUCHE","PUCKS","PUDUS","PUEES","PUENT","PUERA","PUIEZ","PUINE","PUISA","PUISE","PUITS","PUJAS","PULAS","PULLS","PULPE","PULSA","PULSE","PUMAS","PUMES","PUNAS","PUNCH","PUNIE","PUNIR","PUNIS","PUNIT","PUNKS","PUNTS","PUNUS","PUONS","PUPES","PUREE","PURES","PURGE","PURIN","PUROS","PUROT","PUSSE","PUTES","PUTTA","PUTTE","PUTTI","PUTTO","PUTTS","PYREX","QANUN","QIBLA","QINGS","QUADO","QUADS","QUAIS","QUAND","QUANT","QUARK","QUART","QUASI","QUBIT","QUEER","QUELS","QUENA","QUETA","QUETE","QUEUE","QUEUX","QUICK","QUIET","QUILT","QUINE","QUINT","QUIPO","QUIPU","QUOTA","RAAGS","RABAB","RABAN","RABAT","RABBI","RABES","RABLA","RABLE","RABOT","RACEE","RACER","RACES","RACHI","RACHO","RACKS","RACLA","RACLE","RADAI","RADAR","RADAS","RADAT","RADEE","RADER","RADES","RADEZ","RADIA","RADIE","RADIN","RADIO","RADIS","RADJA","RADON","RAFLA","RAFLE","RAFTS","RAGAS","RAGEA","RAGER","RAGES","RAGEZ","RAGGA","RAGOT","RAGUA","RAGUE","RAIAS","RAIDE","RAIDI","RAIDS","RAIES","RAILS","RAINA","RAINE","RAIRA","RAIRE","RAITA","RAJAH","RAJAS","RAKIS","RAKUS","RALAI","RALAS","RALAT","RALER","RALES","RALEZ","RALLA","RALLE","RAMAI","RAMAS","RAMAT","RAMEE","RAMEN","RAMER","RAMES","RAMEZ","RAMIE","RAMIN","RAMIS","RAMPA","RAMPE","RANCE","RANCH","RANCI","RANDO","RANDS","RANGE","RANGS","RANIS","RAOUT","RAPAI","RAPAS","RAPAT","RAPEE","RAPER","RAPES","RAPEZ","RAPHE","RAPIA","RAPIN","RAPPA","RAPPE","RAPTS","RAQUA","RAQUE","RARES","RASAI","RASAS","RASAT","RASEE","RASER","RASES","RASEZ","RASHS","RASSI","RASTA","RATAI","RATAS","RATAT","RATEE","RATEL","RATER","RATES","RATEZ","RATIO","RATON","RATTE","RAVAL","RAVER","RAVES","RAVIE","RAVIN","RAVIR","RAVIS","RAVIT","RAYAI","RAYAS","RAYAT","RAYEE","RAYER","RAYES","RAYEZ","RAYIA","RAYON","RBATI","REACS","REAGI","REAIS","REAIT","REALE","REALS","REANT","REAUX","REBAB","REBAT","REBEC","REBEU","REBOT","REBUE","REBUS","REBUT","RECAP","RECEL","RECES","RECEZ","RECHE","RECIF","RECIT","RECKS","RECRE","RECRU","RECTA","RECTO","RECUE","RECUL","RECUP","RECUS","RECUT","REDAC","REDAN","REDIE","REDIF","REDIS","REDIT","REDON","REDOX","REDUC","REDUE","REDUS","REDUT","REELS","REELU","REENT","REERA","REFIS","REFIT","REFUS","REGAL","REGEL","REGIE","REGIR","REGIS","REGIT","REGLA","REGLE","REGLO","REGNA","REGNE","REGUR","REIEZ","REIKI","REINE","REINS","REJET","RELAI","RELAX","RELIA","RELIE","RELIS","RELIT","RELOU","RELUE","RELUI","RELUS","RELUT","REMET","REMIS","REMIT","REMIX","REMIZ","REMUA","REMUE","RENAL","RENDE","RENDS","RENDU","RENEE","RENES","RENIA","RENIE","RENNE","RENOM","RENON","RENTA","RENTE","REONS","REPAS","REPIC","REPIT","REPLI","REPLU","REPOS","REPRO","REPUE","REPUS","REPUT","RESAS","RESTA","RESTE","RESTO","RETIF","RETRO","REUNI","REVAI","REVAS","REVAT","REVEE","REVER","REVES","REVET","REVEZ","REVIF","REVIS","REVIT","REVUE","REVUS","RHEME","RHETO","RHINO","RHODO","RHUMA","RHUMB","RHUME","RHUMS","RIADS","RIAIS","RIAIT","RIALS","RIANT","RIBAT","RIBLA","RIBLE","RIBOT","RICHE","RICHI","RICIN","RIDAI","RIDAS","RIDAT","RIDEE","RIDER","RIDES","RIDEZ","RIELS","RIENS","RIENT","RIEUR","RIFFE","RIFFS","RIFLA","RIFLE","RIFTS","RIIEZ","RIKIO","RIMAI","RIMAS","RIMAT","RIMEE","RIMER","RIMES","RIMEZ","RINCA","RINCE","RINGS","RIOJA","RIONS","RIOTA","RIOTE","RIPAI","RIPAS","RIPAT","RIPEE","RIPER","RIPES","RIPEZ","RIPOU","RIRAI","RIRAS","RIRES","RIREZ","RISEE","RISER","RISHI","RISSE","RISTE","RITAL","RITES","RIVAI","RIVAL","RIVAS","RIVAT","RIVEE","RIVER","RIVES","RIVET","RIVEZ","RIXES","RIYAL","ROBAI","ROBAS","ROBAT","ROBEE","ROBER","ROBES","ROBEZ","ROBIN","ROBOT","ROBRE","ROCHA","ROCHE","ROCKS","ROCOU","RODAI","RODAS","RODAT","RODEE","RODEO","RODER","RODES","RODEZ","ROGNA","ROGNE","ROGUE","ROIDE","ROIDI","ROKHS","ROLES","ROLLE","ROLLS","ROMAN","ROMPE","ROMPS","ROMPT","ROMPU","RONCE","RONDE","RONDI","RONDO","RONDS","RONEO","RONGE","RONIN","ROOFS","ROQUA","ROQUE","ROSAI","ROSAS","ROSAT","ROSEE","ROSER","ROSES","ROSEZ","ROSIE","ROSIR","ROSIS","ROSIT","ROSSA","ROSSE","ROSTI","ROTAI","ROTAS","ROTAT","ROTEE","ROTER","ROTES","ROTEZ","ROTIE","ROTIN","ROTIR","ROTIS","ROTIT","ROTOR","ROTOS","ROUAI","ROUAN","ROUAS","ROUAT","ROUEE","ROUER","ROUES","ROUET","ROUEZ","ROUFS","ROUGE","ROUGH","ROUGI","ROUIE","ROUIR","ROUIS","ROUIT","ROULA","ROULE","ROUMI","ROUND","ROUTA","ROUTE","ROVER","ROYAL","RUADE","RUAIS","RUAIT","RUANT","RUBAN","RUBIS","RUCHA","RUCHE","RUCKS","RUDES","RUEES","RUENT","RUERA","RUGBY","RUGIE","RUGIR","RUGIS","RUGIT","RUIEZ","RUILA","RUILE","RUINA","RUINE","RULLY","RUMBA","RUMBS","RUMEN","RUMEX","RUNES","RUOLZ","RUONS","RUPAI","RUPAS","RUPAT","RUPEE","RUPER","RUPES","RUPEZ","RUPIN","RURAL","RUSAI","RUSAS","RUSAT","RUSEE","RUSER","RUSES","RUSEZ","RUSHS","RUSSE","RYADS","RYALS","SAAMI","SABAR","SABIN","SABIR","SABLA","SABLE","SABOT","SABRA","SABRE","SACHE","SACRA","SACRE","SACYS","SADHU","SADOS","SAFOU","SAFRE","SAGAS","SAGES","SAGOU","SAGUM","SAHEL","SAHIB","SAIES","SAIGA","SAINE","SAINS","SAINT","SAISI","SAITE","SAJOU","SAKES","SAKIS","SAKTI","SALAI","SALAM","SALAR","SALAS","SALAT","SALEE","SALEP","SALER","SALES","SALEZ","SALIE","SALIN","SALIR","SALIS","SALIT","SALLE","SALOL","SALON","SALOP","SALPE","SALSA","SALSE","SALTO","SALUA","SALUE","SALUT","SALVE","SAMBA","SAMBO","SAMES","SAMIE","SAMIS","SAMIT","SAMMY","SAMOS","SAMPI","SAMUS","SANAS","SANGO","SANGS","SANIE","SANTE","SANVE","SANZA","SAOLA","SAOUL","SAPAI","SAPAS","SAPAT","SAPEE","SAPER","SAPES","SAPEZ","SAPIN","SAQUA","SAQUE","SARAS","SARDE","SARIN","SARIS","SAROD","SARON","SAROS","SARTS","SASSA","SASSE","SATAN","SATAY","SATES","SATIN","SATIS","SAUCA","SAUCE","SAUFS","SAUGE","SAULE","SAUNA","SAUNE","SAUPE","SAURA","SAURE","SAURI","SAURS","SAUTA","SAUTE","SAUTS","SAUVA","SAUVE","SAVEZ","SAVON","SAXES","SAXON","SAXOS","SAYON","SBIRE","SCALP","SCANS","SCARE","SCATO","SCATS","SCEAU","SCENE","SCHAH","SCHWA","SCIAI","SCIAS","SCIAT","SCIEE","SCIER","SCIES","SCIEZ","SCION","SCONE","SCOOP","SCOOT","SCOPA","SCOPE","SCORA","SCORE","SCOUT","SCRUB","SCUDS","SCULL","SCUTA","SEANT","SEAUX","SEBKA","SEBUM","SECAM","SECCO","SECHA","SECHE","SECTE","SECUS","SEDAN","SEDON","SEDUM","SEGAS","SEIDE","SEIME","SEINE","SEING","SEINS","SEIZE","SELFS","SELLA","SELLE","SELON","SELTZ","SELVA","SELVE","SEMAI","SEMAS","SEMAT","SEMEE","SEMER","SEMES","SEMEZ","SEMIS","SENAT","SENAU","SENES","SENNE","SENSA","SENSE","SENTE","SENTI","SEOIR","SEPIA","SERAC","SERAI","SERAN","SERAS","SERBE","SERES","SEREZ","SERFS","SERGE","SERIA","SERIE","SERIN","SERPE","SERRA","SERRE","SERTE","SERTI","SERUM","SERVE","SERVI","SETAR","SETON","SEUIL","SEULE","SEULS","SEUMS","SEVES","SEVIR","SEVIS","SEVIT","SEVRA","SEVRE","SEXAI","SEXAS","SEXAT","SEXEE","SEXER","SEXES","SEXEZ","SEXTE","SEXTO","SEXUE","SEXYS","SEZIG","SHAHS","SHAKO","SHAMA","SHANA","SHANS","SHEDS","SHELF","SHEOL","SHIBA","SHIDO","SHIFT","SHIRE","SHITS","SHOGI","SHONA","SHOOT","SHORT","SHOTS","SHOWS","SHOYU","SHUNT","SIALS","SICAV","SICLA","SICLE","SIDAS","SIDIS","SIEGE","SIENS","SIERA","SIEUR","SIGLE","SIGMA","SIGNA","SIGNE","SIKHE","SIKHS","SILAI","SILAS","SILAT","SILER","SILES","SILEX","SILEZ","SILOS","SILTS","SIMAS","SINGE","SINOC","SINON","SINUA","SINUE","SINUS","SIOUX","SIPOS","SIRES","SIREX","SIRLI","SIROP","SISAL","SISES","SITAR","SITES","SITOT","SITUA","SITUE","SIUMS","SIXTE","SKAIS","SKATE","SKATS","SKEET","SKIAI","SKIAS","SKIAT","SKIEE","SKIER","SKIES","SKIEZ","SKIFF","SKIFS","SKINS","SKIPS","SKONS","SKUAS","SKUNS","SLAMA","SLAME","SLAMS","SLANG","SLASH","SLAVE","SLICA","SLICE","SLIDE","SLIMS","SLIPS","SLOOP","SLOWS","SLUMS","SLURP","SLUSH","SMACK","SMALA","SMALT","SMART","SMASH","SMICS","SMOGS","SMOKS","SMOLT","SMURF","SNACK","SNIFA","SNIFE","SNIFF","SNIFS","SNOBA","SNOBE","SNOBS","SOAPS","SOBRE","SOCCA","SOCIO","SOCLE","SODAS","SODEE","SODES","SOEUR","SOFAS","SOFTS","SOIES","SOIFS","SOINS","SOIRS","SOJAS","SOLDA","SOLDE","SOLEA","SOLEN","SOLES","SOLEX","SOLIN","SOLOS","SOMAN","SOMAS","SOMBE","SOMMA","SOMME","SONAL","SONAR","SONDA","SONDE","SONES","SONGE","SONGS","SONIE","SONNA","SONNE","SONOS","SOPOR","SORBE","SORES","SORGO","SORTE","SORTI","SORTS","SOSIE","SOSOT","SOTCH","SOTHO","SOTIE","SOTTE","SOUCI","SOUDA","SOUDE","SOUES","SOUFI","SOUKS","SOULA","SOULE","SOULS","SOUMS","SOUNA","SOUPA","SOUPE","SOURD","SOURI","SOUTE","SOYAS","SOYER","SOYEZ","SPACE","SPAHI","SPAMS","SPARE","SPART","SPATH","SPATS","SPECK","SPEED","SPEOS","SPETS","SPHEX","SPICA","SPICS","SPINS","SPIRE","SPITA","SPITE","SPITZ","SPORE","SPORT","SPOTS","SPRAT","SPRAY","SPRUE","SPUME","SQUAT","SQUAW","STADE","STAFF","STAGE","STAMM","STAND","STARS","STASE","STATS","STEAK","STELE","STEMM","STEMS","STENO","STENT","STEPS","STERA","STERE","STICK","STILB","STIPE","STOCK","STONE","STOPS","STORE","STOTS","STOUT","STRAS","STRIA","STRIE","STRIP","STRIX","STUCS","STUDS","STUKA","STUPA","STUPS","STUUT","STYLA","STYLE","STYLO","SUAGE","SUAIS","SUAIT","SUANT","SUAVE","SUBER","SUBIE","SUBIR","SUBIS","SUBIT","SUBLA","SUBLE","SUCAI","SUCAS","SUCAT","SUCEE","SUCER","SUCES","SUCEZ","SUCON","SUCRA","SUCRE","SUDRA","SUEDE","SUEES","SUENT","SUERA","SUEUR","SUEVE","SUFFI","SUFIS","SUIDE","SUIES","SUIEZ","SUIFA","SUIFE","SUIFS","SUINT","SUITE","SUIVE","SUIVI","SUJET","SULKY","SUMAC","SUMES","SUMOS","SUNNA","SUONS","SUPAI","SUPAS","SUPAT","SUPEE","SUPER","SUPES","SUPEZ","SUPIN","SUPPO","SUPRA","SURAH","SURAL","SURES","SURET","SURFA","SURFE","SURFS","SURGE","SURGI","SURIE","SURIN","SURIR","SURIS","SURIT","SUROS","SUSHI","SUSSE","SUTES","SUTRA","SWAGS","SWAPS","SWAZI","SWEAT","SWING","SWINS","SYLIS","SYLVE","SYMPA","SYRAH","SYRTE","TAALS","TABAC","TABAR","TABES","TABLA","TABLE","TABOR","TABOU","TABUN","TACCA","TACET","TACHA","TACHE","TACKS","TACLA","TACLE","TACON","TACOS","TACOT","TACTS","TAELS","TAFFA","TAFFE","TAFIA","TAGAL","TAGGA","TAGGE","TAGME","TAGUA","TAGUE","TAHRS","TAIES","TAIGA","TAIJI","TAINO","TAINS","TAIRA","TAIRE","TAISE","TAKAS","TAKIN","TALAI","TALAS","TALAT","TALCS","TALEB","TALED","TALEE","TALER","TALES","TALET","TALEZ","TALLA","TALLE","TALON","TALUS","TAMAS","TAMIA","TAMIL","TAMIS","TANCA","TANCE","TANGA","TANGO","TANGS","TANIN","TANKA","TANKS","TANNA","TANNE","TANNS","TANTE","TAONS","TAPAI","TAPAS","TAPAT","TAPEE","TAPER","TAPES","TAPEZ","TAPIE","TAPIN","TAPIR","TAPIS","TAPIT","TAPON","TAQUA","TAQUE","TARAF","TARAI","TARAS","TARAT","TARDA","TARDE","TAREE","TARER","TARES","TARET","TAREZ","TARGE","TARIE","TARIF","TARIN","TARIR","TARIS","TARIT","TAROS","TAROT","TARSE","TARTE","TARTI","TASER","TASSA","TASSE","TATAI","TATAR","TATAS","TATAT","TATEE","TATER","TATES","TATEZ","TATIE","TATIN","TATIS","TATOU","TAUDA","TAUDE","TAUDS","TAULE","TAUON","TAUPA","TAUPE","TAURE","TAVEL","TAXAI","TAXAS","TAXAT","TAXEE","TAXER","TAXES","TAXEZ","TAXIE","TAXIS","TAXOL","TAXON","TAXUM","TAXUS","TAYRA","TCHAN","TCHAO","TCHAT","TCHIN","TEAMS","TECKS","TEDDY","TEFAL","TEFFS","TEINS","TEINT","TEJUS","TEKEE","TEKES","TELES","TELEX","TELLE","TELLS","TEMPE","TEMPI","TEMPO","TEMPS","TENDE","TENDS","TENDU","TENEZ","TENGE","TENIA","TENIR","TENNO","TENON","TENOR","TENTA","TENTE","TENUE","TENUS","TEPUI","TERCA","TERCE","TERME","TERNE","TERNI","TERRA","TERRE","TERRI","TERSA","TERSE","TESLA","TESTA","TESTE","TESTS","TETAI","TETAS","TETAT","TETEE","TETER","TETES","TETEZ","TETIN","TETON","TETRA","TETTE","TETUE","TETUS","TEUFS","TEVES","TEXAN","TEXTA","TEXTE","TEXTO","TEZIG","THAIE","THAIS","THALI","THANE","THEME","THESE","THETA","THETE","THIOF","THIOL","THONS","THORA","THUGS","THUNE","THUYA","THYMS","TIANS","TIARE","TIBIA","TICAL","TIEDE","TIEDI","TIENS","TIENT","TIERS","TIFFE","TIFOS","TIGEA","TIGER","TIGES","TIGEZ","TIGRA","TIGRE","TIKIS","TILDE","TILLA","TILLE","TILTA","TILTE","TILTS","TIMON","TINES","TINTA","TINTE","TIPAI","TIPAS","TIPAT","TIPEE","TIPER","TIPES","TIPEZ","TIPIS","TIPPA","TIPPE","TIQUA","TIQUE","TIRAI","TIRAS","TIRAT","TIREE","TIRER","TIRES","TIRET","TIREZ","TISAI","TISAS","TISAT","TISER","TISES","TISEZ","TISON","TISSA","TISSE","TISSU","TITAN","TITIS","TITRA","TITRE","TITUS","TJALE","TMESE","TOAST","TOBYS","TOFUS","TOGES","TOILA","TOILE","TOISA","TOISE","TOITS","TOKAI","TOKAJ","TOKAY","TOLAI","TOLAR","TOLAS","TOLAT","TOLBA","TOLEE","TOLER","TOLES","TOLET","TOLEZ","TOLLE","TOLUS","TOMAI","TOMAN","TOMAS","TOMAT","TOMBA","TOMBE","TOMEE","TOMER","TOMES","TOMEZ","TOMME","TOMMY","TONAL","TONCA","TONDE","TONDO","TONDS","TONDU","TONER","TONFA","TONGS","TONIC","TONIE","TONKA","TONNA","TONNE","TONTE","TONUS","TOPAI","TOPAS","TOPAT","TOPEE","TOPER","TOPES","TOPEZ","TOPIC","TOPOS","TOQUA","TOQUE","TORAH","TORDE","TORDS","TORDU","TOREA","TOREE","TORES","TORII","TORIL","TORON","TORRS","TORSE","TORTE","TORTS","TORTU","TORVE","TORYS","TOSAS","TOSSA","TOSSE","TOTAL","TOTEM","TOTON","TOTOS","TOUAI","TOUAS","TOUAT","TOUEE","TOUER","TOUES","TOUEZ","TOURA","TOURD","TOURE","TOURS","TOUTE","TOUTS","TRABE","TRACA","TRACE","TRACS","TRACT","TRAHI","TRAIE","TRAIL","TRAIN","TRAIS","TRAIT","TRAMA","TRAME","TRAMP","TRAMS","TRANS","TRAPP","TRAPU","TRASH","TREKS","TREMA","TREND","TREVE","TRIAI","TRIAL","TRIAS","TRIAT","TRIBU","TRICK","TRICS","TRIDI","TRIEE","TRIER","TRIES","TRIEZ","TRIGO","TRIKE","TRIMA","TRIME","TRINE","TRINS","TRIOL","TRIOS","TRIPA","TRIPE","TRIPS","TROCS","TROIS","TROLE","TROLL","TRONA","TRONC","TRONE","TROPE","TROTS","TROUA","TROUE","TROUS","TRUCK","TRUCS","TRUIE","TRUST","TSARS","TSUBA","TSUGA","TTORO","TUAGE","TUAIS","TUAIT","TUANT","TUBAI","TUBAS","TUBAT","TUBEE","TUBER","TUBES","TUBEZ","TUEES","TUENT","TUERA","TUEUR","TUFTE","TUIEZ","TUILA","TUILE","TULLE","TUMBA","TUMES","TUNAI","TUNAS","TUNAT","TUNEE","TUNER","TUNES","TUNEZ","TUONS","TUPIE","TUPIS","TUQUE","TURBE","TURBO","TURCO","TURCS","TURFS","TURNE","TUSSE","TUTES","TUTIE","TUTOS","TUTSI","TUTTI","TUTUS","TUYAU","TWEED","TWEEN","TWEET","TWILL","TWINS","TWIST","TYPAI","TYPAS","TYPAT","TYPEE","TYPER","TYPES","TYPEZ","TYPHA","TYPON","TYPOS","TYRAN","TZARS","UBACS","UBRIS","UGNIS","UHLAN","UKASE","ULEMA","ULNAS","ULTRA","ULULA","ULULE","ULVES","UMAMI","UMBOS","UMMAS","UNAUS","UNAUX","UNIES","UNIFS","UNION","UNIRA","UNITE","UNIVS","UNTEL","URANE","URATE","URDUS","UREES","URGEA","URGER","URINA","URINE","URNES","URSIN","URUBU","USAGE","USAIS","USAIT","USANT","USEES","USENT","USERA","USIEZ","USINA","USINE","USITE","USNEE","USONS","USUEL","USURE","UTILE","UVALE","UVAUX","UVEES","UVULA","UVULE","UZBEK","VACHA","VACHE","VACOA","VAGAL","VAGIN","VAGIR","VAGIS","VAGIT","VAGUA","VAGUE","VAINC","VAINE","VAINS","VAIRE","VAIRS","VALET","VALEZ","VALGA","VALSA","VALSE","VALUE","VALUS","VALUT","VALVE","VAMPA","VAMPE","VAMPS","VANDA","VANNA","VANNE","VANTA","VANTE","VAPES","VAPOS","VAQUA","VAQUE","VARAN","VARIA","VARIE","VARNA","VARON","VARUS","VARVE","VASAI","VASAS","VASAT","VASEE","VASER","VASES","VASEZ","VASTE","VATUS","VEAUX","VECES","VECUE","VECUS","VECUT","VEDAS","VEGAN","VEINA","VEINE","VELAI","VELAR","VELAS","VELAT","VELDS","VELDT","VELER","VELES","VELET","VELEZ","VELIE","VELIN","VELLE","VELOS","VELOT","VELTE","VELUE","VELUM","VELUS","VELUX","VENAL","VENDA","VENDE","VENDS","VENDU","VENES","VENET","VENEZ","VENGE","VENIN","VENIR","VENTA","VENTE","VENTS","VENUE","VENUS","VERBE","VERDI","VERGE","VERIF","VERIN","VERNE","VERNI","VERRA","VERRE","VERSA","VERSE","VERSO","VERTE","VERTS","VERTU","VERVE","VESCE","VESOU","VESPA","VESSA","VESSE","VESTE","VETES","VETEZ","VETIR","VETIS","VETIT","VETOS","VETUE","VETUS","VEUFS","VEULE","VEUVE","VEXAI","VEXAS","VEXAT","VEXEE","VEXER","VEXES","VEXEZ","VIBOR","VIBRA","VIBRE","VIBRO","VICES","VICHY","VICIA","VICIE","VIDAI","VIDAS","VIDAT","VIDEE","VIDEO","VIDER","VIDES","VIDEZ","VIEIL","VIELE","VIENS","VIENT","VIETS","VIEUX","VIGIE","VIGIL","VIGNE","VILES","VILLA","VILLE","VIMES","VINAI","VINAS","VINAT","VINEE","VINER","VINES","VINEZ","VINGT","VINYL","VIOCS","VIOLA","VIOLE","VIOLS","VIRAI","VIRAL","VIRAS","VIRAT","VIREE","VIREO","VIRER","VIRES","VIREZ","VIRIL","VIRUS","VISAI","VISAS","VISAT","VISEE","VISER","VISES","VISEZ","VISON","VISOU","VISSA","VISSE","VISTA","VITAL","VITES","VITRA","VITRE","VIVAT","VIVES","VIVEZ","VIVRA","VIVRE","VIZIR","VLOGS","VOCAL","VODKA","VOEUX","VOGUA","VOGUE","VOICI","VOIES","VOILA","VOILE","VOIRE","VOISE","VOLAI","VOLAS","VOLAT","VOLEE","VOLER","VOLES","VOLET","VOLEZ","VOLIS","VOLTA","VOLTE","VOLTS","VOLVE","VOMER","VOMIE","VOMIR","VOMIS","VOMIT","VOTAI","VOTAS","VOTAT","VOTEE","VOTER","VOTES","VOTEZ","VOTIF","VOTRE","VOUAI","VOUAS","VOUAT","VOUEE","VOUER","VOUES","VOUEZ","VOUGE","VOULU","VOUTA","VOUTE","VOYER","VOYEZ","VOYOU","VRACS","VRAIE","VRAIS","VROOM","VROUM","VULGO","VULVE","WAGON","WALES","WALIS","WAOUH","WAQFS","WASPS","WATTE","WATTS","WEBER","WEDGE","WELSH","WENGE","WENZE","WHARF","WHIGS","WHIPS","WHIST","WIDIA","WIFIS","WIKIS","WIMAX","WINCH","WISKI","WOLOF","WRAPS","WURMS","WUSHU","XALAM","XENON","XERES","XERUS","XHOSA","XIANG","XIEME","XIPHO","XYLOL","XYSTE","YACHT","YACKS","YAKAS","YAMBA","YANGS","YAPOK","YARDS","YASSA","YASSE","YAWLS","YEBLE","YETIS","YEUSE","YEYES","YODEL","YODLA","YODLE","YOGAS","YOGIS","YOLES","YORKS","YOUPI","YOYOS","YUANS","YUCCA","YUKOS","YUZUS","ZABRE","ZAINS","ZAIRE","ZAKAT","ZAMAK","ZAMIA","ZAMUS","ZANIS","ZANNI","ZANZI","ZAPPA","ZAPPE","ZARBI","ZARBS","ZARMA","ZAZEN","ZAZOU","ZEBRA","ZEBRE","ZEBUS","ZEINE","ZELEE","ZELES","ZENDE","ZENDS","ZEROS","ZESTA","ZESTE","ZIGUE","ZIKRS","ZINCS","ZIPPA","ZIPPE","ZIZIS","ZLOTY","ZOIDE","ZOILE","ZOMBI","ZONAI","ZONAL","ZONAS","ZONAT","ZONEE","ZONER","ZONES","ZONEZ","ZOOMA","ZOOME","ZOOMS","ZORSE","ZOUKA","ZOUKE","ZOUKS","ZOZOS","ZUMBA"]}');

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map