import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import styles from './TransactionHistory.module.sass'
import TableLi from './TransactionDataLi'
import * as ActionCreators from "../../actions/actionCreator";
import Spinner from "../Spinner/Spinner";

const TransactionTable = ({ values }) =>
    values.map((transactionData) => <TableLi key={transactionData.id} values={transactionData}/>)
const TransactionFlow = ({ values }) =>
    values.map((flowValue) => <TableLi key={flowValue[0]} values={{
        id: "TOTAL", operationType: flowValue[0], sum: flowValue[1]
    }}/>)


const TransactionHistory = () => {
    useEffect(() => {
        getTransactionsInfo()
    }, [])
    const dispatch = useDispatch()
    const { data, error, isFetching, totalFlow } = useSelector(({ transactions }) => transactions)
    const { getTransactionsInfo } = bindActionCreators(ActionCreators, dispatch)
    return (
        <div className={styles.container}>
            {
                isFetching ? <Spinner/> :
                    <ul className={styles.responsiveTable}>
                        <TableLi liStyle={styles.tableHeader} values={{ id: 'Id', operationType: "Type", sum: "Sum" }}/>
                        <TransactionFlow values={totalFlow}/>
                        <TransactionTable values={data}/>
                        {!data.length && <div className={styles.noHistoryDiv}>No history</div>}
                    </ul>
            }
        </div>
    )
}


export default TransactionHistory