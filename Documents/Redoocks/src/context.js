import React, {useState, useContext, useReducer} from "react";
import { reducer, initialState } from "./reducer";

export const UserContext = React.createContext();

const UserContextProvider = ({children, defaultLang, translation}) => {
    const [user, setUser] = useState({
        name: "junho-Kim",
        loggedIn: false
    });
    const [lang, setLang] = useState(defaultLang);
    const hyperTranslate = text => {
        if(lang===defaultLang) {
            return text;
        } else {
            return translation[lang][text];
        }
    }
    const logUserIn = () => setUser({...user, loggedIn:true});
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <UserContext.Provider value={{user, fn:{logUserIn}, setLang, t: hyperTranslate, state, dispatch}}>
            {children}
        </UserContext.Provider>
    )
};

export const useUser = () => {
    const {user} = useContext(UserContext);
    return user;
};
export const useFns = () => {
    const {fn} = useContext(UserContext);
    return fn;
};
export const useSetLang = () => {
    const {setLang} = useContext(UserContext);
    return setLang;
};

export const useT = () => {
    const {t} = useContext(UserContext);
    return t;
};

export const useToDo = () => {
    const {state} = useContext(UserContext);
    return state;
}

export const useDispatch = () => {
    const {dispatch} = useContext(UserContext);
    return dispatch;
}

export default UserContextProvider;