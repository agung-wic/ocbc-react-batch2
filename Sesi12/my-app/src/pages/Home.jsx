function Home({ history }) {
    return (
        <>
            <button onClick={() => history.push('/users')}>User List</button>
        </>
    )

}

export default Home