import React from 'react'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import styles from './TransactionHistory.module.sass'
import TableLi from './TransactionDataLi'
//Template
const data = [{ id: 1, type: "Receive", amount: 200 },
    { id: 4, type: "Receive", amount: 2040 },
    { id: 5, type: "Receive", amount: 20550 },
    { id: 6, type: "Minus", amount: 2040 },
    { id: 7, type: "Receive", amount: 26300 },
    { id: 8, type: "Receive", amount: 2020 },
    { id: 19, type: "Receive", amount: 2070 },
    { id: 10, type: "Receive", amount: 2100 },]
const TransactionHistory = () => {
    // const { data } = useSelector(({ auth }) => auth)
    // console.log(data)
    return (
        <div className={cx(styles.container)}>
            <ul className={cx(styles['responsive-table'])}>
                <li className={cx(styles['table-header'])}>
                    <div className={cx(styles.col, styles['col-1'])}>Id</div>
                    <div className={cx(styles.col, styles['col-2'])}>Type</div>
                    <div className={cx(styles.col, styles['col-3'])}>Amount</div>
                </li>
                {data.map((el) => {
                    return <TableLi key={el.id} data={el}/>
                })
                }
            </ul>
        </div>
    )
}
export default TransactionHistory