declare module 'vue-highlight-words' {
  import Vue from 'vue';

  class HighlightWords extends Vue {
    public searchWords: string[];
    public highlightTag: any;
    public autoEscape: boolean;
    public textToHighlight: string;
  }

  export default HighlightWords;
}
