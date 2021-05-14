import React from 'react'
import styles from "./TransactionHistory.module.sass";
import cx from 'classnames'

const TransactionDataLi = (props) => {
    const { data, liStyle = styles.tableRow } = props
    return (
        <li className={liStyle}>
            <div className={cx(styles.col, styles.col1)}>{data[0]}</div>
            <div className={cx(styles.col, styles.col2)}>{data[1]}</div>
            <div className={cx(styles.col, styles.col3)}>{data[2]}</div>
        </li>
    )
}

export default TransactionDataLi