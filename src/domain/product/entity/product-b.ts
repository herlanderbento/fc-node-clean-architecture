import Entity from '../../_shared/entity/entity.abstract';
import NotificationError from '../../_shared/notification/notification.error';

export default class ProductB extends Entity {
  private _name: string;
  private _price: number;

  constructor(id: string, name: string, price: number) {
    super();
    this._id = id;
    this._name = name;
    this._price = price;
    this.validate();

    if (this.notification.hasErrors())
      throw new NotificationError(this.notification.getErrors());
  }

  public get name(): string {
    return this._name;
  }

  public get price(): number {
    return this._price * 2;
  }

  public changeName(name: string) {
    this._name = name;
    this.validate();
  }

  public changePrice(price: number) {
    this._price = price;
    this.validate();
  }

  public validate(): boolean {
    if (this._id.length === 0) {
      this.notification.addError({
        context: 'product',
        message: 'Id is required',
      });
    }
    if (this._name.length === 0) {
      this.notification.addError({
        context: 'product',
        message: 'Name is required',
      });
    }

    if (this._price < 0) {
      this.notification.addError({
        context: 'product',
        message: 'Price must be greeter than zero',
      });
    }

    return true;
  }
}
