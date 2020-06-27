import { Bowerman } from './Bowerman';
import { Daemon } from './Daemon';
import { Undead } from './Undead';
import { Magician } from './Magician';

// eslint-disable-next-line import/prefer-default-export
export class Team {
  constructor() {
    this.members = [new Bowerman('Robin'), new Daemon('Hellboy'), new Undead('Baba Yaga'), new Magician('Merlin')];
  }

  [Symbol.iterator]() {
    let current = 0;
    const end = this.members.length;
    const characters = Object.values(this.members);
    return {
      next() {
        if (current <= end) {
          // eslint-disable-next-line no-plusplus
          current++;
          return {
            value: characters[current - 1],
            done: false,
          };
        }
        return {
          value: undefined,
          done: true,
        };
      },
    };
  }
}
