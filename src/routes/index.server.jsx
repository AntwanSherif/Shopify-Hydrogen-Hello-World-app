import { Layout } from '../components/Layout.server';
import FeaturedCollections from '../components/FeaturedCollections.server';

export default function Home() {
  return (
    <Layout>
      <FeaturedCollections />
    </Layout>
  );
}

