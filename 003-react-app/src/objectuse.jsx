function Student() {
    function updateAge() {
        SetUser({...user, age: user.age +1});
    }
    return (
        <>
            <h3>{user.name}</h3>
            <h3>{user.age}</h3>
            <button onClick={updateAge}>Increase Age</button>
        </>
    );
}

export default Student;