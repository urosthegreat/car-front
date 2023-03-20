import Head from "next/head";
import Link from "next/link";
import ListPage from "./list";
import CarForm from "./CarForm";
import style from "../../components/css/layout.module.css"
export default function CarsPage() {
    return (
        <div>
            <Head>
                <title> Cars page</title>
            </Head>
            <h1>Cars Page</h1>
            <Link href={"/"} className={style.link}>
                Go to Home Page
            </Link>
            <br/>
            <CarForm></CarForm>
            <ListPage></ListPage>
        </div>)
}