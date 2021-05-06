import React from 'react'
import styles from "./TransactionHistory.module.sass";
import cx from 'classnames'

const TransactionDataLi = (props) => {
    const { data } = props
    return (
        <li className={cx(styles['table-row'])}>
            <div className={cx(styles.col, styles['col-1'])}>{data.id}</div>
            <div className={cx(styles.col, styles['col-2'])}>{data.type}</div>
            <div className={cx(styles.col, styles['col-3'])}>{data.amount}</div>
        </li>
    )
}

export default TransactionDataLi