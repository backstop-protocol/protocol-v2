/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {Contract, ContractTransaction, EventFilter, Signer} from 'ethers';
import {Listener, Provider} from 'ethers/providers';
import {Arrayish, BigNumber, BigNumberish, Interface} from 'ethers/utils';
import {TransactionOverrides, TypedEventDescription, TypedFunctionDescription} from '.';

interface MockAggregatorZrxInterface extends Interface {
  functions: {
    latestAnswer: TypedFunctionDescription<{encode([]: []): string}>;
  };

  events: {
    AnswerUpdated: TypedEventDescription<{
      encodeTopics([current, roundId, timestamp]: [
        BigNumberish | null,
        BigNumberish | null,
        null
      ]): string[];
    }>;
  };
}

export class MockAggregatorZrx extends Contract {
  connect(signerOrProvider: Signer | Provider | string): MockAggregatorZrx;
  attach(addressOrName: string): MockAggregatorZrx;
  deployed(): Promise<MockAggregatorZrx>;

  on(event: EventFilter | string, listener: Listener): MockAggregatorZrx;
  once(event: EventFilter | string, listener: Listener): MockAggregatorZrx;
  addListener(eventName: EventFilter | string, listener: Listener): MockAggregatorZrx;
  removeAllListeners(eventName: EventFilter | string): MockAggregatorZrx;
  removeListener(eventName: any, listener: Listener): MockAggregatorZrx;

  interface: MockAggregatorZrxInterface;

  functions: {
    latestAnswer(): Promise<BigNumber>;
  };

  latestAnswer(): Promise<BigNumber>;

  filters: {
    AnswerUpdated(
      current: BigNumberish | null,
      roundId: BigNumberish | null,
      timestamp: null
    ): EventFilter;
  };

  estimate: {
    latestAnswer(): Promise<BigNumber>;
  };
}