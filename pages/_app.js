import '../styles/globals.css';
import { useRouter } from 'next/router';
import Navbar from '../components/navbar';
import Layout from '../components/Layout';


function MyApp ({Component, pageProps}) {
    const router = useRouter();
    const noNav = ['/login'];
        if (noNav.includes(router.pathname)) {
            return (<Component {...pageProps} />)
        }
        else {
            return(
                <div>
                    <Navbar/>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </div>
            )
        }
    
}

export default MyApp;