function App() {

    return (
        <>
            <Card 
                name="Dennis"
                description="Low Level Enginner"
                interests={[
                    "Binary Exploitation",
                    "Reverse Engineering",
                    "C Programmer"
                ]}
            />
            <Card 
                name="Steve Wozniak"
                description="Low Level Enginner"
                interests={[
                    "Binary Exploitation",
                    "Reverse Engineering",
                    "Rust Programmer"
                ]}
            />

        </>
    )
}

const Card = ({ name, description, interests }) => {
    return <div>
        <section style={{
            border: "solid 1px",
            borderRadius: "10px",
            padding: "5px",
            width: "500px"
        }}>

            <h1>{name}</h1>
            <p>{description}</p>
            
            <h3>Interests</h3>
            <p>{interests[0]}</p>
            <p>{interests[1]}</p>
            <p>{interests[2]}</p>

            <button style={{
                margin: "10px",
                padding: "5px"
            }}>LinkedIn</button>
            <button style={{
                margin: "10px",
                padding: "5px"
            }}>Twiiter</button>
        </section>
    </div>
}

export default App
