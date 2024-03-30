
import './App.css';
import CreateButton from './components/Home/Button/CreateButton.tsx';
import HomeComponent from "./components/Home/HomeComponent.tsx";

function App() {
  return (
    <>
      <section className='mx-auto w-[90%] mt-10 mb-10'>
        <CreateButton/>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-auto w-[90%] mt-10 mb-10 gap-5">
          <HomeComponent/>
      </section>
    </>
  );
}
export default App;
