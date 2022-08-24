import React from 'react';

const Home = () => {
  return (
    <main>
      <div className='intro' color='background'>
        <p>Hey there!</p>
        <h1>
          I'm <span>Albert</span>
        </h1>
        <h2>
          It’s great having you here. Come take a look around! If you have any questions or just
          want to chat, don’t be shy and shoot me a message.
        </h2>
        <div className='call-to-action'>
          <a>say hi!</a>
          <a>resume</a>
        </div>
      </div>
    </main>
  );
};

export default Home;
