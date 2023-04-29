import React from 'react';

import { GetStore } from '../components/Store/GetStoreInf';

class Store extends React.Component {
  render() {
    return (
      <div>

        <div>
          {/* <Filter></Filter> */}
        </div>

        <div>
          <GetStore />
        </div>

      </div>

    )
  }
}

export default Store;
