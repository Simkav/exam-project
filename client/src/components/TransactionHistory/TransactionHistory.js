import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import cx from 'classnames'
import styles from './TransactionHistory.module.sass'
import TableLi from './TransactionDataLi'
import * as ActionCreators from "../../actions/actionCreator";
import Spinner from "../Spinner/Spinner";

const TransactionHistory = () => {
    useEffect(() => {
        getTransactionsInfo()
    }, [])
    const dispatch = useDispatch()
    const { data, error, isFetching, totalFlow } = useSelector(({ transactions }) => transactions)
    const { getTransactionsInfo } = bindActionCreators(ActionCreators, dispatch)
    return (

        <div className={cx(styles.container)}>
            {isFetching ? <Spinner/> :
                <ul className={cx(styles['responsive-table'])}>
                    <TableLi liStyle='table-header' data={["id", 'Amount', 'Type']}/>
                    {
                        totalFlow.map((el) => <TableLi key={el[0]} data={["TOTAL", el[1], el[0]]}/>)
                    }
                    {
                        data.length ?
                            data.map((el) => <TableLi key={el.id} data={Object.values(el)}/>)
                            : <div style={{ textAlign: "center", marginBottom: "20px" }}>No history</div>
                    }
                </ul>
            }
        </div>

    )
}
export default TransactionHistory