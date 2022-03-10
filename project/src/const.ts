export enum AppRoute {
  Main = '/',
  SignIn = '/sign-in',
  Favorites = '/favorites',
  Room = '/offer',
  RoomId = '/offer/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
