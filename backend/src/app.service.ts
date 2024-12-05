import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { createId } from '@paralleldrive/cuid2'

export type BMIEntry = {
  id: string,
  height: number;
  weight: number;
  bmi: number;
  createdAt: string;
  updatedAt? :string;
};

let BMIEntries = []

@Injectable()
export class AppService {
  getBMIEntries(): BMIEntry[] {
    return BMIEntries;
  };

  saveBMIEntry(data): string {
    if (!data.height) {
      throw new HttpException('height was not provided', HttpStatus.BAD_REQUEST)
    };

    if (!data.weight) {
      throw new HttpException('height was not provided', HttpStatus.BAD_REQUEST)
    };

    BMIEntries.push({
      id: createId(),
      height: data.height,
      weight: data.weight,
      bmi: this.calculateBMI(data.weight, data.height),
      createdAt: new Date().toISOString()
    });
    return 'BMI entry created';
  };

  updateBMIEntry(data): string {
    if (!data.id) {
      throw new HttpException('id was not provided', HttpStatus.BAD_REQUEST)
    };

    if (!data.height) {
      throw new HttpException('height was not provided', HttpStatus.BAD_REQUEST)
    };

    if (!data.weight) {
      throw new HttpException('height was not provided', HttpStatus.BAD_REQUEST)
    };

    if (!BMIEntries.find((entry) => entry.id === data.id)) {
      throw new HttpException(`No entry found for id: ${data.id}`, HttpStatus.NOT_FOUND)
    }

    BMIEntries = BMIEntries.map((entry) =>
      entry.id === data.id
      ? {
          id: entry.id,
          height: data.height,
          weight: data.weight,
          bmi: this.calculateBMI(data.height, data.weight),
          createdAt: entry.createdAt,
          updatedAt: new Date().toISOString()
        }
      : entry
    );
    return `BMI entry ${data.id} updated`;
  }

  calculateBMI(weight, height): number {
    console.log('weight', weight)
    console.log('height', height)
    return weight / (height ** 2)
  }
}
