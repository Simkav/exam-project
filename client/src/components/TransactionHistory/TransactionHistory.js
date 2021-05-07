import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import cx from 'classnames'
import styles from './TransactionHistory.module.sass'
import TableLi from './TransactionDataLi'
import * as ActionCreators from "../../actions/actionCreator";
const TransactionHistory = () => {
    useEffect(() => {
        getTransactionsHistory()
    }, [])
    const dispatch = useDispatch()
    const { data, error, isFetcing } = useSelector(({ transactions }) => transactions)
    const { getTransactionsHistory } = bindActionCreators(ActionCreators, dispatch)
    return (
        <div className={cx(styles.container)}>
            <ul className={cx(styles['responsive-table'])}>
                <li className={cx(styles['table-header'])}>
                    <div className={cx(styles.col, styles['col-1'])}>Id</div>
                    <div className={cx(styles.col, styles['col-2'])}>Type</div>
                    <div className={cx(styles.col, styles['col-3'])}>Amount</div>
                </li>
                {
                    data.length ?
                    data.map((el) => {
                        return <TableLi key={el.id} data={el}/>
                    }) : <div style={{ textAlign: "center"   }}>No history</div>
                }
            </ul>
        </div>
    )
}
export default TransactionHistory