import React from 'react'

const AddExpenseForm = props => {
    const { 
        handleChange, handleSubmit, fullName,
        username, mortgageOrRent, mortgageOrRentAmount,
        mortgageOrRentDate, electricity, electricityAmount,
        electricityDate, transportationAmount, transportationDate,
        insuranceAmount, insuranceDate, loansAmount,
        loansDate, membershipsAmount, membershipsDate,
        groceriesAmount, groceriesDate, clothingAmount,
        clothingDate, educationAmount, educationDate,
        personalCareAmount, personalCareDate, entertainmentAmount,
        entertainmentDate, charitiesAmount, charitiesDate,
        income1, income1Amount, income1Date,
        income2, income2Amount, income2Date,
        income3, income3Amount, income3Date,
        oilAmount, oil, heatingOilOrGas,
        heatingOilOrGasAmount, internet, internetAmount,
        cable, cableAmount, water, waterAmount,
        phone, phoneAmount, transportation,
        insurance, loans, memberships, groceries,
        clothing, education, personalCare, entertainment,
        charities
         } = props
    return (
        <form onSubmit={handleSubmit}>
            <h1>Income</h1>

            <input type="checkbox" name="income1" checked={income1} onChange={handleChange}/>Income 1
            <input type="number" name="income1Amount" value={income1Amount} placeholder= "Amount" onChange={handleChange}/>
            Due: <input type="date" name="income1Date" value={income1Date} placeholder= "Amount" onChange={handleChange}/><br></br>

            <input type="checkbox" name="income2" checked={income2} onChange={handleChange}/>Income 2
            <input type="number" name="income2Amount" value={income2Amount} placeholder= "Amount" onChange={handleChange}/>
            Due: <input type="date" name="income2Date" value={income2Date} placeholder= "Amount" onChange={handleChange}/><br></br>

            <input type="checkbox" name="income3" checked={income3} onChange={handleChange}/>Income 3
            <input type="number" name="income3Amount" value={income3Amount} placeholder= "Amount" onChange={handleChange}/>
            Due: <input type="date" name="income3Date" value={income3Date} placeholder= "Amount" onChange={handleChange}/><br></br><br></br>

            <h1>Expenses</h1>

            <input type="checkbox" name="mortgageOrRent" checked={mortgageOrRent} onChange={handleChange}/>Mortgage/Rent
            <input type="number" name="mortgageOrRentAmount" value={mortgageOrRentAmount} placeholder= "Amount" onChange={handleChange}/>
            Due: <input type="date" name="mortgageOrRentDate" value={mortgageOrRentDate} placeholder= "Amount" onChange={handleChange}/><br></br>

            <input type="checkbox" name="electricity" checked={electricity} onChange={handleChange}/>Electricity
            <input type="number" name="electricityAmount" value={electricityAmount} placeholder= "Amount" onChange={handleChange}/>
            Due: <input type="date" name="electricityDate" value={electricityDate} placeholder= "Amount" onChange={handleChange}/><br></br>

            <input type="checkbox" name="heatingOilOrGas" checked={heatingOilOrGas} onChange={handleChange}/>Heating Oil or Natural Gas
            <input type="number" name="heatingOilOrGasAmount" value={heatingOilOrGasAmount} placeholder= "Amount" onChange={handleChange}/>
            Due: <input type="date" name="electricityDate" value={electricityDate} placeholder= "Amount" onChange={handleChange}/><br></br>

            <input type="checkbox" name="internet" checked={internet} onChange={handleChange}/>Internet
            <input type="number" name="internetAmount" value={internetAmount} placeholder= "Amount" onChange={handleChange}/>
            Due: <input type="date" name="electricityDate" value={electricityDate} placeholder= "Amount" onChange={handleChange}/><br></br>

            <input type="checkbox" name="cable" checked={cable} onChange={handleChange}/>Cable, satellite, etc.
            <input type="number" name="cableAmount" value={cableAmount} placeholder= "Amount" onChange={handleChange}/>
            Due: <input type="date" name="electricityDate" value={electricityDate} placeholder= "Amount" onChange={handleChange}/><br></br>

            <input type="checkbox" name="water" checked={water} onChange={handleChange}/>Water
            <input type="number" name="waterAmount" value={waterAmount} placeholder= "Amount" onChange={handleChange}/>
            Due: <input type="date" name="electricityDate" value={electricityDate} placeholder= "Amount" onChange={handleChange}/><br></br>

            <input type="checkbox" name="phone" checked={phone} onChange={handleChange}/>Phone
            <input type="number" name="phoneAmount" value={phoneAmount} placeholder= "Amount" onChange={handleChange}/>
            Due: <input type="date" name="electricityDate" value={electricityDate} placeholder= "Amount" onChange={handleChange}/><br></br>

            <input type="checkbox" name="transportation" checked={transportation} onChange={handleChange}/>Transportation 
            {/* (car maintenance, fuel, registration, parking fees, etc.) */}
            <input type="number" name="transportationAmount" value={transportationAmount} placeholder= "Amount" onChange={handleChange}/>
            Due: <input type="date" name="transportationDate" value={transportationDate} placeholder= "Amount" onChange={handleChange}/><br></br>

            <input type="checkbox" name="insurance" checked={insurance} onChange={handleChange}/>Insurance 
            {/* (home, car, health) */}
            <input type="number" name="insuranceAmount" value={insuranceAmount} placeholder= "Amount" onChange={handleChange}/>
            Due: <input type="date" name="insuranceDate" value={insuranceDate} placeholder= "Amount" onChange={handleChange}/><br></br>

            <input type="checkbox" name="loans" checked={loans} onChange={handleChange}/>Loan Payments
            <input type="number" name="loansAmount" value={loansAmount} placeholder= "Amount" onChange={handleChange}/>
            Due: <input type="date" name="loansDate" value={loansDate} placeholder= "Amount" onChange={handleChange}/><br></br>

            <input type="checkbox" name="memberships" checked={memberships} onChange={handleChange}/>Memberships
            <input type="number" name="membershipsAmount" value={membershipsAmount} placeholder= "Amount" onChange={handleChange}/>
            Due: <input type="date" name="membershipsDate" value={membershipsDate} placeholder= "Amount" onChange={handleChange}/><br></br>

            <input type="checkbox" name="groceries" checked={groceries} onChange={handleChange}/>Groceries
            <input type="number" name="groceriesAmount" value={groceriesAmount} placeholder= "Amount" onChange={handleChange}/>
            Due: <input type="date" name="groceriesDate" value={groceriesDate} placeholder= "Amount" onChange={handleChange}/><br></br>

            <input type="checkbox" name="clothing" checked={clothing} onChange={handleChange}/>Clothing/shoes
            <input type="number" name="clothingAmount" value={clothingAmount} placeholder= "Amount" onChange={handleChange}/>
            Due: <input type="date" name="clothingDate" value={clothingDate} placeholder= "Amount" onChange={handleChange}/><br></br>

            <input type="checkbox" name="education" checked={education} onChange={handleChange}/>Education
            <input type="number" name="educationAmount" value={educationAmount} placeholder= "Amount" onChange={handleChange}/>
            Due: <input type="date" name="educationDate" value={educationDate} placeholder= "Amount" onChange={handleChange}/><br></br>

            <input type="checkbox" name="personalCare" checked={personalCare} onChange={handleChange}/>Personal Care
            <input type="number" name="personalCareAmount" value={personalCareAmount} placeholder= "Amount" onChange={handleChange}/>
            Due: <input type="date" name="personalCareDate" value={personalCareDate} placeholder= "Amount" onChange={handleChange}/><br></br>

            <input type="checkbox" name="entertainment" checked={entertainment} onChange={handleChange}/>Entertainment
            <input type="number" name="entertainmentAmount" value={entertainmentAmount} placeholder= "Amount" onChange={handleChange}/>
            Due: <input type="date" name="entertainmentDate" value={entertainmentDate} placeholder= "Amount" onChange={handleChange}/><br></br>

            <input type="checkbox" name="charities" checked={charities} onChange={handleChange}/>Charitable Contributions
            <input type="number" name="charitiesAmount" value={charitiesAmount} placeholder= "Amount" onChange={handleChange}/>
            Due: <input type="date" name="charitiesDate" value={charitiesDate} placeholder= "Amount" onChange={handleChange}/><br></br>

            <button>Add Expenses</button>
        </form>
    )
}

export default AddExpenseForm
/*
            <input type="checkbox" name="xxx" value="xxx"/>xxx
            <input type="number" name="xxxAmount" value={xxxAmount} placeholder= "Amount" onChange={handleChange}/>
            Due: <input type="date" name="xxxDate" value={xxxDate} placeholder= "Amount" onChange={handleChange}/><br></br>
*/