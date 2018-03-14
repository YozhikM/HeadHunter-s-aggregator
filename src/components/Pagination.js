/* @flow */

import * as React from 'react';
import LinkButton from './LinkButton';

type Props = {|
  pagesArray: Array<number>,
  city: number | string,
  query: string,
|};

type State = {};

export default class Pagination extends React.Component<Props, State> {
  render() {
    const { pagesArray, city, query } = this.props;
    return pagesArray.map(page => <LinkButton data={{ city, page, query }} key={page} />);
  }
}
