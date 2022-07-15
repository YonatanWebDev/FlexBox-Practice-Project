import React from 'react';
// import './Home.css';
import HomeSingleItem from '../../components/HomeSingleItem/HomeSingleItem';
import Footer from '../../components/Footer/Footer'
import { mockData } from '../../mockData/mockData';

const HomeContainer = () => {


    return (
        <>
            <div className='vertFlex'>
                <div className='upperContent'>
                    <div className='HomeContainer'>
                        <div className='titleFlex'>
                            <div className='titleInnerFlex'>
                                My Collection
                            </div>
                            <div
                                className={'HomeInnerContainer'}>
                                {mockData.map((v, i) => (
                                    <div
                                        className='singleItem'>
                                        <HomeSingleItem key={`Project${i}_`} data={v} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default HomeContainer;
