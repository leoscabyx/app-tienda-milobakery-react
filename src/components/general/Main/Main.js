import './Main.css'

function Main({children}) {
    return (
        <main className="main">
            <section className="main__container">
                <h2>En Construccion</h2>
                {children}
            </section>
        </main>
    );
  }
  
export default Main;