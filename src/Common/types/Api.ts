export type Character = {
  id: number;
  name: String;
  status: String;
  species: String;
  type: String;
  gender: String;
  origin: String;
  location: Object;
  image: String;
  episode: String;
  url: String;
  created: String;
};

export type CharacterList = {
  results: Array<Character>;
};
