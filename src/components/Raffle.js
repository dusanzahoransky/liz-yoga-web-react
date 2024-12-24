import DetailsHeading from "./classDetails/DetailsHeading";
import useWindowSize from 'react-use/lib/useWindowSize'
import { useState } from 'react';
import Confetti from 'react-confetti'

function Raffle() {
    const { width, height } = useWindowSize()
    const names = [

    ]

    const [winner, setWinner] = useState("")
    const [raffleCount, setRaffleCount] = useState(1)
    const [confettiOn, setConfettiOn] = useState(false)

    const handleRaffle = async (event) => {
        let winnerPosition = getRandomInt(names.length);

        if(winnerPosition != null) {
            setWinner(names[winnerPosition])
            setConfettiOn(true)
            setTimeout(() => setConfettiOn(false), 5000)
        } else{
            setWinner("")
        }
        setRaffleCount(raffleCount+1)
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const list = names.map(name => <li>{name}</li>)
    // const list1Half = list.slice(0, list.length/2 +1)
    // const list2Half = list.slice(list.length/2 +1, list.length)

    return (<>
        <main role="main" className="container">

            <div className="container details center">

                <div className="row">
                    <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <DetailsHeading text='Christmas yoga giveaways'/>
                            <p className="details-subheading">TERAPIA DE RELAJACIÓN CON CUENCOS TIBETANOS Y DE CRISTAL
                                CLASE GRUPAL EN LA PLAYA Y/O ONLINE + CALENDARIO Y PLANEADOR 2025</p>
                        </div>
                    </div>

                <div className="row space-before">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <ul id="names" className="no-bullets">
                            {list}
                        </ul>
                    </div>
                    {/*<div className="col-md-3">*/}
                    {/*    <ul id="names" className="no-bullets">*/}
                    {/*        {list2Half}*/}
                    {/*    </ul>*/}
                    {/*</div>*/}
                </div>

                <div className="row space-before">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="form-group" hidden={winner === ""}>
                            <Confetti hidden={!confettiOn}
                                      tweenDuration={5000}
                                      width={width}
                                      height={height}
                            />
                            <label className="required" htmlFor="winner">The winner is:</label>
                            <input type="text" className="winner-input" name="winner" id="winner" value={winner}/>
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
