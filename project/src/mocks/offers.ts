type Example = {
  src: string;
  genre: string;
};

type QuestionGenre = {
  answers: Example[];
  genre: string;
  type: string;
};


export const questions: QuestionGenre[] = [
  {
    type: 'genre',
    genre: 'rock',
    answers: [{
      src: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg',
      genre: 'rock',
    }, {
      src: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg',
      genre: 'blues',
    }, {
      src: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg',
      genre: 'jazz',
    }, {
      src: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg',
      genre: 'rock',
    }],
  },
];
