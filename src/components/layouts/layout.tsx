import {LayoutData} from "../../types";
// @ts-ignore
import style from "../css/layout.module.css";
export default function Layout({children}: LayoutData) {
    return <div className={style.container}>{children}</div>;
}