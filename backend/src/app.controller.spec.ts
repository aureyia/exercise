import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('/bmi-log', () => {
    it('should return empty by default', () => {
      expect(appController.getBMIEntries()).toEqual([]);
    });

    it('should update an existing entry', () => {
      appController.saveBMIEntry({height: 170, weight: 70})
      const entries = appController.getBMIEntries()[0]
      expect(appController.getBMIEntries()).toEqual(`BMI entry ${entries.id} updated`);
    })
  });
});
