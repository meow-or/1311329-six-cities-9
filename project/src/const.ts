import { Ratingstar } from './types/ratingstar';

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

export const ratingstars: Ratingstar[] = [
  {
    count: 5,
    labelTitle: 'perfect',
  },
  {
    count: 4,
    labelTitle: 'good',
  },
  {
    count: 3,
    labelTitle: 'not bad',
  },
  {
    count: 2,
    labelTitle: 'badly',
  },
  {
    count: 1,
    labelTitle: 'terribly',
  },
];

