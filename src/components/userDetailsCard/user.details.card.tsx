import React from 'react';
import './user.details.card.scss'; // Import your CSS file for styling

const UserCard = () => {
    return (
        <div className="game">
            <div className="rank">2</div>
            <div className="front">
                <img src="https://thumbs.dreamstime.com/z/dj-dog-listening-to-music-behind-empty-blank-wood-wall-victory-peace-fingers-43357579.jpg" alt="game" />
                <h3 className="name">Just Chatting</h3>
                <div className="status">
                    <p className="viewers">132.5k</p>
                    <div className="streamers">
                        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="" />
                        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="" />
                        <img src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt="" />
                    </div>
                </div>
            </div>
            <div className="back">
                <div className="streaming-info">
                    <p className="game-stat">174.4k <span>Watching</span></p>
                    <p className="game-stat">3,172<span>Streams</span></p>
                </div>
                <button className="btn">See more streams</button>
                <div className="streamers">
                    <div className="streamer">
                        <div className="icon">
                            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="" />
                        </div>
                        <p className="name">gamer 1</p>
                        <p className="number">18k</p>
                    </div>
                    <div className="streamer">
                        <div className="icon">
                            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="" />
                        </div>
                        <p className="name">gamer 2</p>
                        <p className="number">9,600</p>
                    </div>
                    <div className="streamer">
                        <div className="icon">
                            <img src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt="" />
                        </div>
                        <p className="name">gamer 3</p>
                        <p className="number">7,407</p>
                    </div>
                </div>
            </div>
            <div className="backgroundWrapper"></div>
        </div>
    );
};

export default UserCard;
