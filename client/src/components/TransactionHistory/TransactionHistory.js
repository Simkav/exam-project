import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import styles from './TransactionHistory.module.sass'
import TableLi from './TransactionDataLi'
import * as ActionCreators from "../../actions/actionCreator";
import Spinner from "../Spinner/Spinner";
import constants from "../../constants";

const TransactionHistory = () => {
    useEffect(() => {
        getTransactionsInfo()
    }, [])
    const dispatch = useDispatch()
    const { data, error, isFetching, totalFlow } = useSelector(({ transactions }) => transactions)
    const { getTransactionsInfo } = bindActionCreators(ActionCreators, dispatch)
    return (

        <div className={styles.container}>
            {isFetching ? <Spinner/> :
                <ul className={styles.responsiveTable}>
                    <TableLi liStyle={styles.tableHeader} data={["id", 'Amount', 'Type']}/>
                    {
                        totalFlow.map((el) => <TableLi key={el[0]} data={["TOTAL", el[0], el[1]]}/>)
                    }
                    {
                        data.length ?
                            data.map((el) => <TableLi key={el.id} data={[el.id,el.operationType,el.sum]}/>)
                            : <div className={styles.noHistoryDiv}>No history</div>
                    }
                </ul>
            }
        </div>

    )
}
export default TransactionHistory