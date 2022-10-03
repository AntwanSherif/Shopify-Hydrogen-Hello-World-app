import { Suspense } from 'react';
import {
  useRouteParams,
  gql,
  useShopQuery,
  useServerAnalytics,
  ShopifyAnalyticsConstants,
  Seo
} from '@shopify/hydrogen';
import { Layout } from '../../components/Layout.server';
import { ProductDetails } from '../../components/ProductDetails.client';

export default function Product() {
  const { handle } = useRouteParams();

  const {
    data: { product }
  } = useShopQuery({
    query: PRODUCT_QUERY,
    variables: {
      handle
    }
  });

  useServerAnalytics({
    shopify: {
      pageType: ShopifyAnalyticsConstants.pageType.product,
      resourceId: product.id
    }
  });

  return (
    <Layout>
      <Suspense>
        <Seo type='product' data={product} />
      </Suspense>

      <ProductDetails product={product} />
    </Layout>
  );
}

const PRODUCT_QUERY = gql`
  query Product($language: LanguageCode, $handle: String!) @inContext(language: $language) {
    product(handle: $handle) {
      id
      title
      vendor
      descriptionHtml
      seo {
        title
        description
      }
    }
  }
`;

