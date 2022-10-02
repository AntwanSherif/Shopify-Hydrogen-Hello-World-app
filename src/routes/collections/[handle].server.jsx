import { gql, useShopQuery, useRouteParams } from '@shopify/hydrogen';
import { Layout } from '../../components/Layout.server';

export default function Collection() {
  const { handle } = useRouteParams();

  const {
    data: { collection }
  } = useShopQuery({
    query: QUERY,
    variables: {
      handle
    }
  });

  return (
    <Layout>
      <section className='p-6 md:p-8 lg:p-12'>
        This will be the collection page for <strong>{collection.title}</strong>
      </section>
    </Layout>
  );
}

const QUERY = gql`
  query CollectionDetails($handle: String!) {
    collection(handle: $handle) {
      title
    }
  }
`;

