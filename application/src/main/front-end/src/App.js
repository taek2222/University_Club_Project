/* eslint-disable jsx-a11y/img-redundant-alt */
import mainImage from "./image/main.png";

function App() {
  return (
    <div className="max-w-400 container mx-auto p-5 bg-white">
      <header className="flex flex-col items-center mb-10">
        <div className="flex justify-center items-center space-x-10 mb-3">
          <a href="/main" className="flex flex-col items-center">
            <div className="rounded-full p-[2px] bg-gradient-to-r from-story-start via-story-middle to-story-end">
              <div className="rounded-full bg-white w-12 h-12 overflow-hidden">
                <img
                  src={mainImage}
                  alt="메인"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <span className="text-sm font-medium">메인</span>
          </a>
          <a href="/main" className="flex flex-col items-center">
            <div className="rounded-full p-[2px] bg-gradient-to-r from-story-start via-story-middle to-story-end">
              <div className="rounded-full bg-white w-12 h-12 overflow-hidden">
                <img
                  src={mainImage}
                  alt="핵심 동아리"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <span className="text-sm font-medium">핵심동아리</span>
          </a>
          <a href="/booth-location" className="flex flex-col items-center">
            <div className="rounded-full bg-gray-300 w-12 h-12"></div>
            <span className="text-sm font-medium">부스 위치</span>
          </a>
          <a href="/events" className="flex flex-col items-center">
            <div className="rounded-full bg-gray-300 w-12 h-12"></div>
            <span className="text-sm font-medium">이벤트</span>
          </a>
        </div>
      </header>

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
