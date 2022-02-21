import {useEffect, useState} from "react";
import Square from "./square";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight} from '@fortawesome/free-solid-svg-icons';

const TicTacToe = () => {
    const [board, setBoard] = useState(['','','','','','','','',''])
    const [player, setPlayer] = useState('O')
    const [result, setResult] = useState({winner: 'none', state: 'none'})

    useEffect(() => {
        checkTie()
        checkWin()
        if (player === 'X') {
            setPlayer('O')
        } else setPlayer('X')
    }, [board])

    const Patterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    const chooseSquare = (square) => {

        setBoard(board.map((value, index) => {
            if (index === square && value === '') return player
            return value
        }))
    }

    const checkWin = () => {
        Patterns.forEach(pattern => {
            const firstPlayer = board[pattern[0]]
            let foundWinner = true

            if (firstPlayer === '') return

            pattern.forEach(index => {
                if (board[index] !== firstPlayer) foundWinner = false
            })

            if (foundWinner) {
                setResult({winner: player, state: 'Won'})
            }
        })
    }

    const checkTie = () => {
        let tie = true

        board.forEach(square => {
            if (square === '') tie = false
        })

        if (tie) {
            setResult({winner: 'No one won', state: 'Tie'})
        }
    }

    const restart = () => {
        setBoard(['','','','','','','','',''])
        setPlayer('O')
        setResult({winner: 'none', state: 'none'})
    }

    return <div className={'grow bg-zinc-800 w-full flex justify-around items-center'}>
        {
        result.state !== 'none' ?
            <div className={'relative w-1/3 h-1/2 bg-zinc-300 border-zinc-600 flex flex-col'}>
                <div className={'absolute w-full h-full'}/>
                <div className={'flex basis-1/3 border-2 border-zinc-900'}>
                    <Square value={board[0]} chooseSquare={() => chooseSquare(0)}/>
                    <Square value={board[1]} chooseSquare={() => chooseSquare(1)}/>
                    <Square value={board[2]} chooseSquare={() => chooseSquare(2)}/>
                </div>
                <div className={'flex basis-1/3 border-2 border-zinc-900'}>
                    <Square value={board[3]} chooseSquare={() => chooseSquare(3)}/>
                    <Square value={board[4]} chooseSquare={() => chooseSquare(4)}/>
                    <Square value={board[5]} chooseSquare={() => chooseSquare(5)}/>
                </div>
                <div className={'flex basis-1/3 border-2 border-zinc-900'}>
                    <Square value={board[6]} chooseSquare={() => chooseSquare(6)}/>
                    <Square value={board[7]} chooseSquare={() => chooseSquare(7)}/>
                    <Square value={board[8]} chooseSquare={() => chooseSquare(8)}/>
                </div>
            </div>
            :
            <div className={'relative w-1/3 h-1/2 bg-zinc-300 border-zinc-600 flex flex-col'}>
                <div className={'flex basis-1/3 border-2 border-zinc-900'}>
                    <Square value={board[0]} chooseSquare={() => chooseSquare(0)}/>
                    <Square value={board[1]} chooseSquare={() => chooseSquare(1)}/>
                    <Square value={board[2]} chooseSquare={() => chooseSquare(2)}/>
                </div>
                <div className={'flex basis-1/3 border-2 border-zinc-900'}>
                    <Square value={board[3]} chooseSquare={() => chooseSquare(3)}/>
                    <Square value={board[4]} chooseSquare={() => chooseSquare(4)}/>
                    <Square value={board[5]} chooseSquare={() => chooseSquare(5)}/>
                </div>
                <div className={'flex basis-1/3 border-2 border-zinc-900'}>
                    <Square value={board[6]} chooseSquare={() => chooseSquare(6)}/>
                    <Square value={board[7]} chooseSquare={() => chooseSquare(7)}/>
                    <Square value={board[8]} chooseSquare={() => chooseSquare(8)}/>
                </div>
            </div>
        }
        <div className={'flex flex-col'}>
            <div className={'text-8xl pb-20'}>
                {
                    result.state === 'Won' ?
                        result.winner + ' won':
                        ''
                }
                {
                    result.state === 'Tie' ?
                        'No one won':
                        ''
                }
            </div>
            <button className={'hover:animate-spin text-5xl'} onClick={restart}><FontAwesomeIcon icon={faRotateRight}/></button>
        </div>
    </div>

}

export default TicTacToe