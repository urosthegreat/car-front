import {AppData} from "../types";
import Layout from "../components/layouts/layout";

export default function App({Component, pageProps}: AppData) {
    return (<Layout><Component {...pageProps}></Component></Layout>);
}