export interface User {
  email: string;
  password: string;
  newsletter: boolean;
  wizard?: Wizard;
  sidekick?: Sidekick;

  terms: boolean;
  confirmPassword: string;
}

export interface Wizard {
  name: string;
  level: number;
  school: string;
  alignment: Alignment;
}
interface Sidekick {
  name: string;
  skill: string;
}

enum Alignment {
  GOOD = "Good",
  EVIL = "Evil",
}
