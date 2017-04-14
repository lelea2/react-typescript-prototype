import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export namespace Transact {

  export interface Props extends RouteComponentProps<void> {
  }

  export interface State {
    /* empty */
  }
}


// Nice tsx guide: https://github.com/Microsoft/TypeScript/wiki/JSX
export class Transact extends React.Component<Transact.Props, Transact.State> {
  public render() {
    return (
      <div className="container-fluid">
        Hi, this is Khanh
        {this.props.children}
      </div>

    );
  }
}
