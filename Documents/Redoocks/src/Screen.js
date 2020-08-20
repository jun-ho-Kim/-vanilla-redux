import React from "react";
import {useFns, useT, useSetLang} from "./context";
import Header from "./Header";

const Screen = () => {
    const {logUserIn} = useFns();
    const setLang = useSetLang();
    const t = useT();
    return (
        <div>
            <Header />
            <h1>First Screen</h1>
            <h1>{t("Hello")}</h1>
            <button onClick={logUserIn}>Log User In</button>
            <button onClick={() => setLang("es")}>{t("Translate")}</button>
        </div>
    )
};

export default Screen;