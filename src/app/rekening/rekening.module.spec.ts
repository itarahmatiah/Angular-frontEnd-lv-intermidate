import { RekeningModule } from './rekening.module';

describe('RekeningModule', () => {
  let rekeningModule: RekeningModule;

  beforeEach(() => {
    rekeningModule = new RekeningModule();
  });

  it('should create an instance', () => {
    expect(rekeningModule).toBeTruthy();
  });
});
