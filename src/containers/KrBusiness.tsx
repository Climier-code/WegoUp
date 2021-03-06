import React from 'react';
import NewsList from '../components/News/NewsList';
import KRAdvice from '../components/Advice/KRAdvice';
import { BusinessBlock, StockAdviceBlock } from './UsBusiness';
import KRStockLoader from '../components/Stocks/KRStockLoader';

function KrBusiness() {


    return (
        <BusinessBlock>
            <StockAdviceBlock>
                <KRAdvice />
                <KRStockLoader />
            </StockAdviceBlock>     
            <NewsList national="kr" />
        </BusinessBlock>
    );
}

export default KrBusiness;