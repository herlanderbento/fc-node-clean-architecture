import Notification from '../notification/notification';

export default abstract class Entity {
  protected _id: string;
  protected notification: Notification;

  constructor() {
    this.notification = new Notification();
  }

  public get id(): string {
    return this._id;
  }
}
