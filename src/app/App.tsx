import { useState } from "react";
import { Player } from "../widgets";
import { Header } from "../widgets";
import { UploadModal } from "../features";

const App: React.FC = () => {

    document.title = "Home | VideoPlayer"

    const [modal, setModal] = useState<boolean>(false)

    return (
        <main className="main">
            <Header setModal={setModal}/>
            <Player />
            {modal && <UploadModal setModal={setModal}/>}
        </main>
    )
}

export default App;