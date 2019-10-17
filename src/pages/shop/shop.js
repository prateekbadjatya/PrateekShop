import React from 'react';
import ShopData from './shop.data';
import PreviewCollection from '../../components/preview-collection/preview-collection';
class ShopPage extends React.Component {
  state = {
    collections: ShopData
  };
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <PreviewCollection key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
