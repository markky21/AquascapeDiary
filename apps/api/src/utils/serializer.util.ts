export abstract class WithSerializer {
  public serialize() {
    return JSON.parse(JSON.stringify(this));
  }
}
