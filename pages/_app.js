import LogRocket from 'logrocket';
import Layout from '../components/Layout';
import '../styles/globals.css';

LogRocket.init('o9ryvf/testing');
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
