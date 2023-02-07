import SendEmailWhenProductIsCreatedHandler from '../../product/event/handler/send-email-when-product-is-created.handler';
import EventDispatcher from './event-dispatcher';

describe('Domain events tests', () => {
  it('should be able register an event handler', () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendEmailWhenProductIsCreatedHandler();

    eventDispatcher.register('ProductCreatedEvent', eventHandler);

    expect(
      eventDispatcher.getEventHandlers['ProductCreatedEvent']
    ).toBeDefined();

    expect(eventDispatcher.getEventHandlers['ProductCreatedEvent'].length).toBe(
      1
    );
  });
});
