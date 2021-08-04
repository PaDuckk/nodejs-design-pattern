import { Readable, ReadableOptions } from "stream";
import Chance from "chance";

const chance = new Chance();

export class RandomStream extends Readable {
  emittedBytes: number;

  constructor(options: ReadableOptions) {
    super(options);

    this.emittedBytes = 0;
  }

  _read(size: number) {
    const chunk = chance.string({ length: size });
    this.push(chunk, "utf-8");
    this.emittedBytes += chunk.length;
    if (chance.bool({ likelihood: 5 })) {
      this.push(null);
    }
  }
}
