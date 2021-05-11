import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import cx from 'classnames'
import styles from './TransactionHistory.module.sass'
import TableLi from './TransactionDataLi'
import * as ActionCreators from "../../actions/actionCreator";

const TransactionHistory = () => {
    useEffect(() => {
        getTransactionsInfo()
    }, [])
    const dispatch = useDispatch()
    const { data, error, isFetcing, totalFlow } = useSelector(({ transactions }) => transactions)
    const { getTransactionsInfo } = bindActionCreators(ActionCreators, dispatch)
    return (
        <div className={cx(styles.container)}>
            <ul className={cx(styles['responsive-table'])}>
                <li className={cx(styles['table-header'])}>
                    <div className={cx(styles.col, styles['col-1'])}>Id</div>
                    <div className={cx(styles.col, styles['col-2'])}>Type</div>
                    <div className={cx(styles.col, styles['col-3'])}>Amount</div>
                </li>
                {
                    totalFlow.map((el) => <TableLi key={el[0]} data={["TOTAL",el[0],el[1]]}/>)
                }
                {
                    data.length ?
                        data.map((el) => <TableLi key={el.id} data={Object.values(el)}/>)
                        : <div style={{ textAlign: "center", marginBottom: "20px" }}>No history</div>
                }
            </ul>
        </div>
    )
}
export default TransactionHistory