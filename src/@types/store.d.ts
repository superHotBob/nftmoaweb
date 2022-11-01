interface ISystem {
  count: number;
  routing: string;
  isLoggedIn: boolean;
}

interface IStore {
  System: ISystem;
}
