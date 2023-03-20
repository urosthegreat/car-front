import Link from "next/link"
import Head from "next/head";
import style from "../components/css/layout.module.css";

export default function HomePage() {
    return (
        <div>
            <Head>
                <title> Home page</title>
            </Head>
            <h1>Home Page</h1>
            <Link href={"/cars"} className={style.link}>
                Go to Cars Page
            </Link>
            <br/>
            <Link href={"/salesman"} className={style.link}>
                Go to Salesman Page
            </Link>

        </div>
    )
}