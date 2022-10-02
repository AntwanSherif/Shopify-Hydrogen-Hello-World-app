import { Suspense } from 'react';
import { gql, useShopQuery, useRouteParams, Seo } from '@shopify/hydrogen';
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
      <Suspense>
        <Seo type='collection' data={collection} />
      </Suspense>

      <header className='grid w-full gap-8 p-4 py-8 md:p-8 lg:p-12 justify-items-start'>
        <h1 className='text-4xl whitespace-pre-wrap font-bold inline-block'>{collection.title}</h1>

        {collection.description && (
          <div className='flex items-baseline justify-between w-full'>
            <div>
              <p className='max-w-md whitespace-pre-wrap inherit text-copy inline-block'>{collection.description}</p>
            </div>
          </div>
        )}
      </header>
    </Layout>
  );
}

const QUERY = gql`
  query CollectionDetails($handle: String!) {
    collection(handle: $handle) {
      id
      title
      description
      seo {
        description
        title
      }
    }
  }
`;

