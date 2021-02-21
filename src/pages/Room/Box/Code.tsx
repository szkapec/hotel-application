import React from 'react'

const Code = ({ codeInfo, generateCode, code, setCodeInfo }) => {


    return (
        <>
            <div style={{height:'60px'}}>
                <label htmlFor="name">Twój kod:</label>
                <span className="generate">
                    {codeInfo && <button  className="btn" onClick={(e) => generateCode(e)}> Generuj</button>}
                    {!codeInfo && <span className="generate-code">{codeInfo ? "" : code}</span>}
                </span>
            </div>
            <div className="code-info">
                <span>{codeInfo ? "" : `Dziękujemy za rezerwacje pokoju w naszym Hotelu. Twój kod to: ${code} przekaż go na recepcji a otrzymasz karte do pokoju`}</span>
            </div>
            <div  className="code-info">
                <span>{codeInfo ? "" : `W razie gdybyś zapomniał kodu, nie przejmuj się! Na podanego maila właśnie wysłaliśmy wszystkie informacje i kod dostępu`}</span>
            </div>
        </>
    )
}

export default Code
