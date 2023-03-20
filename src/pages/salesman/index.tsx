import Head from "next/head";
import Link from "next/link";
import ListPage from "./list";
import SalesmanForm from "./SalesmanForm";
import DeleteSalesman from "./DeleteSalesman";
import GetSoldCars from "./GetSoldCars";
import AddSoldCars from "./AddSoldCars";
import RemoveSoldCars from "./RemoveSoldCars";
import style from "../../components/css/layout.module.css";
export default function SalesmanPage() {
    return (

        <div>
            <style jsx>{`
              div {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100vh;
              }
            `}</style>

            <Head>
                <title> Salesman page</title>
            </Head>
            <h1>Salesman Page</h1>
            <Link href={"/"} className={style.link}>
                Go to Home Page
            </Link>
            <br/>
            <SalesmanForm></SalesmanForm>
            <ListPage></ListPage>
            <DeleteSalesman></DeleteSalesman>
            <AddSoldCars></AddSoldCars>
            <RemoveSoldCars></RemoveSoldCars>
            <GetSoldCars></GetSoldCars>
        </div>)
}