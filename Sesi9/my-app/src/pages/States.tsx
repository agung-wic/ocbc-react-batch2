import { useState } from "react";
import { BrowserRouter, Route, Switch, useHistory, useParams, useRouteMatch } from "react-router-dom";
import NameChange from "./state/NameChange";

function States() {
    interface IParams {
        names: string
    }

    const history = useHistory()

    const { url, path } = useRouteMatch()

    const params: IParams = useParams()

    function showNameChange() {
        history.push(`${path}/${name}`)
    }

    const [name, setName] = useState(params.names || 'Budi')
    const [anotherName, setAnotherName] = useState('Wicaksono')

    function ChangeName() {
        const oldName = name
        setName(anotherName)
        setAnotherName(oldName)

    }

    return (

        <>
            <h2>Enter Name:</h2>
            <input type="text" name="personName" onChange={(e) => setName(e.target.value)} />
            <button onClick={showNameChange}>Show me</button>
            <BrowserRouter>
                <Switch>
                    <Route path={`${path}/:name`} exact>
                        <NameChange />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>

    )
}

export default States