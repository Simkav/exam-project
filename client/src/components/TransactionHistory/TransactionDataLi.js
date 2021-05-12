import React from 'react'
import styles from "./TransactionHistory.module.sass";
import cx from 'classnames'

const TransactionDataLi = (props) => {
    const { data, liStyle = 'table-row' } = props
    return (
        <li className={cx(styles[liStyle])}>
            <div className={cx(styles.col, styles['col-1'])}>{data[0]}</div>
            <div className={cx(styles.col, styles['col-2'])}>{data[2]}</div>
            <div className={cx(styles.col, styles['col-3'])}>{data[1]}</div>
        </li>
    )
}

export default TransactionDataLi