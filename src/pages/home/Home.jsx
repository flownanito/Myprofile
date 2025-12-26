import React, { useState, useEffect, useRef } from 'react';
import './Home.css';

const Home = () => {
    // Game Constants
    const CANVAS_WIDTH = 240; // approx from css
    const CANVAS_HEIGHT = 400; // approx
    const CELL_SIZE = 10;
    const COLS = 24; // 240 / 10
    const ROWS = 40; // 400 / 10

    // Game State
    const [snake, setSnake] = useState([{ x: 10, y: 15 }, { x: 10, y: 16 }, { x: 10, y: 17 }]); // Start in middleish
    const [food, setFood] = useState({ x: 10, y: 5 });
    const [direction, setDirection] = useState({ x: 0, y: -1 }); // Moving up
    const [gameStarted, setGameStarted] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [foodLeft, setFoodLeft] = useState(10);

    const gameLoopRef = useRef();

    // Init/Reset Game
    const startGame = () => {
        setSnake([{ x: 10, y: 18 }, { x: 10, y: 19 }, { x: 10, y: 20 }]);
        setFood(generateFood());
        setDirection({ x: 0, y: -1 });
        setGameStarted(true);
        setGameOver(false);
        setScore(0);
        setFoodLeft(10);
    };

    const generateFood = () => {
        return {
            x: Math.floor(Math.random() * COLS),
            y: Math.floor(Math.random() * ROWS)
        };
    };

    // Keyboard Controls
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!gameStarted) return;

            switch (e.key) {
                case 'ArrowUp':
                    if (direction.y === 0) setDirection({ x: 0, y: -1 });
                    break;
                case 'ArrowDown':
                    if (direction.y === 0) setDirection({ x: 0, y: 1 });
                    break;
                case 'ArrowLeft':
                    if (direction.x === 0) setDirection({ x: -1, y: 0 });
                    break;
                case 'ArrowRight':
                    if (direction.x === 0) setDirection({ x: 1, y: 0 });
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [gameStarted, direction]);

    // Game Loop
    useEffect(() => {
        if (!gameStarted || gameOver) return;

        const moveSnake = () => {
            setSnake((prevSnake) => {
                const newHead = {
                    x: prevSnake[0].x + direction.x,
                    y: prevSnake[0].y + direction.y
                };

                // Check Collisions with Walls
                if (newHead.x < 0 || newHead.x >= COLS || newHead.y < 0 || newHead.y >= ROWS) {
                    setGameOver(true);
                    return prevSnake;
                }

                // Check Collisions with Self
                for (let part of prevSnake) {
                    if (part.x === newHead.x && part.y === newHead.y) {
                        setGameOver(true);
                        return prevSnake;
                    }
                }

                const newSnake = [newHead, ...prevSnake];

                // Check Food
                if (newHead.x === food.x && newHead.y === food.y) {
                    setScore(s => s + 1);
                    setFoodLeft(f => Math.max(0, f - 1));
                    setFood(generateFood());
                    if (score + 1 >= 10) {
                        // Max Score / Win Condition? Just keep playing for now
                    }
                } else {
                    newSnake.pop(); // Remove tail
                }

                return newSnake;
            });
        };

        gameLoopRef.current = setInterval(moveSnake, 100); // Game Speed
        return () => clearInterval(gameLoopRef.current);
    }, [gameStarted, gameOver, direction, food, score]);


    return (
        <div className="home-container">
            <div className="home-left">
                <div className="content-wrapper">
                    <p className="subtitle">Hola a Todos. Yo soy</p>
                    <h1 className="name-title">Nauzet Sánchez</h1>
                    <h2 className="job-title">&gt; Back-end developer</h2>

                    <div className="comment-section">
                        <p className="comment-line">// complete the game to continue</p>
                        <p className="comment-line">// you can also see it on my Github page</p>
                        <p className="code-line">
                            <span className="const-keyword">const</span> <span className="var-name">githubLink</span> = <a href="https://github.com/flownanito" className="string-link">"https://github.com/flownanito"</a>
                        </p>
                    </div>
                </div>
            </div>

            <div className="home-right">
                <div className="game-visual-container">
                    {/* Circular gradient background blobs */}
                    <div className="gradient-blob green-blob"></div>
                    <div className="gradient-blob blue-blob"></div>

                    <div className="game-card">
                        <div className="game-panel">
                            {/* Bolts */}
                            <div className="bolt top-left"></div>
                            <div className="bolt top-right"></div>
                            <div className="bolt bottom-left"></div>
                            <div className="bolt bottom-right"></div>

                            <div className="game-screen-wrapper">
                                <div className="game-screen">
                                    {gameStarted && !gameOver && (
                                        <>
                                            {/* Render Snake */}
                                            {snake.map((part, index) => (
                                                <div
                                                    key={index}
                                                    className="snake-body"
                                                    style={{
                                                        left: `${part.x * CELL_SIZE}px`,
                                                        top: `${part.y * CELL_SIZE}px`,
                                                        opacity: (index / snake.length) * 0.5 + 0.5 // Fade tail slightly
                                                    }}
                                                ></div>
                                            ))}

                                            {/* Render Food */}
                                            <div
                                                className="food"
                                                style={{
                                                    left: `${food.x * CELL_SIZE}px`,
                                                    top: `${food.y * CELL_SIZE}px`
                                                }}
                                            ></div>
                                        </>
                                    )}

                                    {/* Game Over / Start Screen */}
                                    {(!gameStarted || gameOver) && (
                                        <div className="game-over-overlay" style={{ display: 'flex' }}> {/* Override css display:none if needed */}
                                            {gameOver && <span className="game-over-text">GAME OVER!</span>}
                                            {!gameStarted && !gameOver && <span className="game-over-text">PRESS START</span>}
                                            <button className="start-again-btn" onClick={startGame}>
                                                {gameOver ? 'start-again' : 'start-game'}
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="game-controls-info">
                                <div className="keys-instruction">
                                    <p className="comment-line">// use keyboard</p>
                                    <p className="comment-line">// arrows to play</p>

                                    <div className="keys-visual">
                                        <div className="key-row">
                                            <div className="key-cap icon" onClick={() => setDirection({ x: 0, y: -1 })}>▲</div>
                                        </div>
                                        <div className="key-row">
                                            <div className="key-cap icon" onClick={() => setDirection({ x: -1, y: 0 })}>◀</div>
                                            <div className="key-cap icon" onClick={() => setDirection({ x: 0, y: 1 })}>▼</div>
                                            <div className="key-cap icon" onClick={() => setDirection({ x: 1, y: 0 })}>▶</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="food-left-section">
                                    <p className="comment-line">// food left</p>
                                    <div className="food-grid">
                                        {[...Array(10)].map((_, i) => (
                                            <div key={i} className={`food-dot ${i < foodLeft ? 'eaten' : ''}`}></div> // Logic reverse: 'eaten' class meant lit up. If foodLeft is 10, all 10 should be normal? Or should they disappear?
                                            // Design: "food left" implies countdown. 5 dots are lit ("left"?), others dim.
                                            // Let's say we start with 10 dots. As we eat, they dim/disappear? 
                                            // Or maybe 'eaten' means collected?
                                            // Let's make lit dots = food collected? Or food NEEDED?
                                            // Label is "food left". So if 10 left, 10 lit?
                                            // If I eat one, 9 left.
                                            // So i < foodLeft ? 'active' : 'dim'.
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <button className="skip-btn">skip</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
