import React from 'react'
import styles from "./TransactionHistory.module.sass";
import cx from 'classnames'

const TransactionDataLi = (props) => {
    const { values, liStyle = styles.tableRow } = props
    return (
        <li className={liStyle}>
            <div className={cx(styles.col, styles.col1)}>{values.id}</div>
            <div className={cx(styles.col, styles.col2)}>{values.operationType}</div>
            <div className={cx(styles.col, styles.col3)}>{values.sum}</div>
        </li>
    )
}

export default TransactionDataLi