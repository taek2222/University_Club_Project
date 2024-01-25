/* eslint-disable jsx-a11y/img-redundant-alt */
import Header from "./component/header.js";

function App() {
  return (
    <div className="max-w-400 container mx-auto p-5 bg-white">
      <Header/>
      {/* Main content section */}
      <main>
        <div className="flex justify-center space-x-3 mb-10">
          <button className="px-5 py-2 border border-black rounded">ALL</button>
          <button className="px-5 py-2">공연</button>
          <button className="px-5 py-2">체육</button>
          <button className="px-5 py-2">취미</button>
          <button className="px-5 py-2">학술</button>
        </div>

        <section className="grid grid-cols-3 gap-5">
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={i}
              className="event-card rounded p-6 text-center shadow-md"
            >
              <div className="mb-4">
                <img
                  src={`https://placehold.co/150`}
                  alt={`Placeholder image for Event ${i + 1}`}
                  className="mx-auto"
                />
              </div>
              <h3 className="font-bold">Event {i + 1}</h3>
              <p>Description of Event {i + 1}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
