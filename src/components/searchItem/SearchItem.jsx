import React from 'react'
import "./searchItem.css"

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img src="https://t-cf.bstatic.com/xdata/images/city/540x270/957800.webp?k=6e50f4c36265ab07bf1c6498c298d8a9de40400f606365b83266a3e7ffe67877&o=" alt="" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">Tower Street Appt</h1>
            <span className="siDistance">500 meter from center</span>
            <span className="siTaxiOp">Free airport Taxi</span>
            <span className="siSubtitle">Studio Appt with air conditioning</span>
            <span className="siFeatures">Entire studio - 1 bathroom - 21 full bed </span>
            <span className="siCancelOp">Free cancellation</span>
            <span className="siCancelOpSubtitle">You can cancel later, so lock this  great price today</span>

        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">$112</span>
                <span className="siTaxOp">Include taxes and fees</span>
                <button className='siCheckButton'>See availibility</button>

            </div>
        </div>
    </div>
  )
}

export default SearchItem