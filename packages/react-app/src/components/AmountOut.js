import React, { useState, useEffect, useRef } from 'react'

import { chevronDown } from '../assets';
import styles from '../styles';
import { useOnClickOutside } from '../utils';

function AmountOut() {
    const [showList, setShowList] = useState(false);
    return (
        <div className={styles.amountContainer}>
            <input 
                placeholder='0.0'
                type="number"
                value=""
                disabled
                className={styles.amountInput}
            />

            <div className="relative" onClick={() => setShowList((prevState) => !prevState)}>
                <button className={styles.currencyButton}>
                    {"ETH"}
                    <img 
                        src={chevronDown}
                        alt="chevron down"
                        className={`w-4 h4 object-contain ml-2 ${showList ? 'rotate-180': 'rotate-0'}`}
                    />
                </button>

                {showList && (
                    <ul className={styles.currencyList}>
                        {[
                            { token: 'ETH', tokenName: 'ETH' },
                            { token: 'DAN Gold', tokenName: 'DGOLD' },
                            { token: 'DAN Silver', tokenName: 'DSLV' }
                        ].map(({token, tokenName}, index) => (
                            <li key={index}
                                className={`${styles.currencyListItem} ${true ? 'bg-site-dim2' : ''} cursor-pointer`}    
                            >
                                {tokenName}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default AmountOut