/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Category from "../../Recycle/category";

function Club() {
    return(
      <>
        <Category />
        <section className="grid grid-cols-3 gap-5 p-5">
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
      </>
    )
}

export default Club;