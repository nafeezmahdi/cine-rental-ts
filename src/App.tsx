import Header from "./components/Header";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <SideBar />
        </div>
      </main>
    </>
  );
}

export default App;
