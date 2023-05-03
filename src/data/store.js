import {reactive} from "vue";

export const store = reactive({
  apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
  arrayCards: [],
  arrayTypes: [],
  numberCards: 30,
  offsetCards: 0,
  //! NON SEMPRE è POSSIBILE INSERIRE UNA STRINGA VUOTA "" COME VALORE
  //* IN QUESTO CASO BISOGNA UTILIZZARE null
  selectedType: null


})