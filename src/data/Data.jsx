import { faker } from '@faker-js/faker/locale/en'

export const createRandomMovie = () => {
  return `${faker.word.adjective()} ${faker.word.noun()}`
}

export const createRandomSongs = () => {
  return faker.music.songName()
}
