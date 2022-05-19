import React, {useState} from 'react'
import Form from '../components/Form'
import Dashboard from '../components/Dashboard'

const Main = () => {

    // STATE TO KEEP TRACK OF REFRESH
    const [refreshState, setRefresh] = useState(false)

    const refresh = () => {
        setRefresh(!refreshState)
    }

    return (
        <fieldset>
            <legend>Main.jsx</legend>
            <Form refresh={refresh} />
            <Dashboard refresh={refresh} refreshState={refreshState} />
        </fieldset>
    )
}

export default Main