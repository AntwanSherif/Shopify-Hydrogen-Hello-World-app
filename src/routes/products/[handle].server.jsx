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

      <section className='p-6 md:p-8 lg:p-12'>
        This will be the product page for <strong>{product.title}</strong>
      </section>
    </Layout>
  );
}

const PRODUCT_QUERY = gql`
  query Product($language: LanguageCode, $handle: String!) @inContext(language: $language) {
    product(handle: $handle) {
      id
      title
      seo {
        title
        description
      }
    }
  }
`;

