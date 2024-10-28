import { Player } from "../widgets";
import { Header } from "../widgets";

const App: React.FC = () => {

    document.title = "Home | VideoPlayer"

    return (
        <main className="main">
            <Header />
            <Player />
        </main>
    )
}

export default App;