import useWindowSize from 'react-use/lib/useWindowSize'
import {useState} from 'react';
// import Confetti from 'react-confetti'
import gif from '../images/raffle/christmas.gif';

function Raffle() {
    const { width, height } = useWindowSize()
    const names = [


    ]

    const [winner, setWinner] = useState(null)
    const [raffleCount, setRaffleCount] = useState(1)
    const [confettiOn, setConfettiOn] = useState(false)

    function chooseWinner() {
        let winnerPosition= getRandomInt(names.length);

        if (winnerPosition != null) {
            setWinner(names[winnerPosition])
            setConfettiOn(true)
            setTimeout(() => setConfettiOn(false), 5000)
        } else {
            setWinner(null)
        }
        setRaffleCount(raffleCount + 1)
    }

    const handleRaffle = async (event) => {
        setWinner(null)
        setTimeout(() => chooseWinner(), 2000);
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const list = names.map(name => <li>{name}</li>)

    return (<>
        <main role="main" className="container">

            <div className="container details center">

                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <h1 className="details-heading"><img src={gif} className="christmas-giveaways-gif"/> <span className="christmas-giveaways-heading">Liz Neira
                            Christmas Giveaways </span> <img src={gif} className="christmas-giveaways-gif"/></h1>
                        <p className="raffle-price">PRIMERA GANADORA 888 AUD Y SEGUNDA GANADORA 555 AUD PARA NUESTRO
                            RETIRO DE YOGA Y BIENESTAR EN BALI INDONESIA MAYO 2025</p>

                    </div>
                    <div className="col-md-1">

                    </div>
                </div>

                <div className="row space-before">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <ul id="names" className="no-bullets raffle-names">
                            {list}
                        </ul>
                    </div>
                </div>

                <div className="row space-before">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">

                        <div className="form-group" hidden={winner === null}>
                            {/*<Confetti hidden={!confettiOn}*/}
                            {/*          tweenDuration={5000}*/}
                            {/*          width={width}*/}
                            {/*          height={height}*/}
                            {/*/>*/}
                            <label className="winner-label">Congratulations, the winner:</label>
                            <label className="winner-name">{winner}</label>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btn btn-primary" value="Raffle" onClick={handleRaffle}/>
                        </div>

                    </div>
                </div>
            </div>
        </main>

            <br/>

            {/*<Footer/>*/}
        </>
    );
}

export default Raffle;
