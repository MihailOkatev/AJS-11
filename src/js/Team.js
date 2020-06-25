import { Bowerman } from './Bowerman';
import { Daemon } from './Daemon';
import { Undead } from './Undead';
import { Magician } from './Magician';

// eslint-disable-next-line import/prefer-default-export
export class Team {
  constructor() {
    this.members = [new Bowerman('Robin'), new Daemon('Hellboy'), new Undead('Baba Yaga'), new Magician('Merlin')];
    this[Symbol.iterator] = () => {
      let current = 0;
      const end = this.members.length;
      return {
        next() {
          if (current <= end) {
            return {
              // eslint-disable-next-line no-plusplus
              value: this.members[current++],
              done: false,
            };
          }
          return {
            done: true,
          };
        },
      };
    };
  }
}
