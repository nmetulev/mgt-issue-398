import * as React from 'react';
import styles from './HelloWorld.module.scss';
import { IHelloWorldProps } from './IHelloWorldProps';
import { escape } from '@microsoft/sp-lodash-subset';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mgt-person': any;
      'mgt-people': any;
      'mgt-people-picker': any;
      'mgt-agenda': any;
      'mgt-tasks': any;
      template: any;
    }
  }
}

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
  public render(): React.ReactElement<IHelloWorldProps> {
    return (
      <mgt-person person-query="AlexW@M365x710359.OnMicrosoft.com"></mgt-person>
    );
  }
}
