import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export namespace TransactSummary {

  export interface Props extends RouteComponentProps<void> {
  }

  export interface State {
    /* empty */
  }
}

// Nice tsx guide: https://github.com/Microsoft/TypeScript/wiki/JSX
export class TransactSummary extends React.Component<TransactSummary.Props, TransactSummary.State> {
  public render() {
    return (
      <div className="container-fluid">
        Hi, this is transact hub
        {this.props.children}
      </div>
    );
  }
}
