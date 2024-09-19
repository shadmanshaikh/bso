import type { Schema, Attribute } from '@strapi/strapi';

export interface ECommerceCartItem extends Schema.Component {
  collectionName: 'components_e_commerce_cart_items';
  info: {
    displayName: 'CartItem';
    icon: 'gift';
    description: '';
  };
  attributes: {
    products: Attribute.Relation<
      'e-commerce.cart-item',
      'oneToMany',
      'api::product.product'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'e-commerce.cart-item': ECommerceCartItem;
    }
  }
}
