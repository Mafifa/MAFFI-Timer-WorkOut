import { Component, ReactNode } from "react";

type Props = { children: ReactNode };

export class Container extends Component<Props> {
  render() {
    return (
      <div className="max-w-screen-lg mr-auto ml-auto">
        {this.props.children}
      </div>
    );
  }
}
