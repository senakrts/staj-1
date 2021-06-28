function Home() {
  const state = {
    user: ''
  };

  state.user = localStorage.getItem('username');

  return (
    <div className='home'>
      <h2>Hi {state.user} </h2>
    </div>
  );
}

export default Home;
