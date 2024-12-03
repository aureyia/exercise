import { Controller, Get, Post, Put, Body, HttpException, HttpStatus } from '@nestjs/common';
import { AppService, type BMIEntry } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/bmi-log')
  getBMIEntries(): BMIEntry[] {
    return this.appService.getBMIEntries();
  }

  @Post('/bmi-log')
  saveBMIEntry(@Body() body): string {
    this.appService.saveBMIEntry(body)
    return 'BMI entry created';
  }

  @Put('/bmi-log')
  updateBMIEntry(@Body() body): string {
    this.appService.updateBMIEntry(body)
    return `BMI entry ${body.id} updated`;
  }
}
