import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDragons, reserveDragon, cancelReservation } from '../redux/dragons/dragonsSlice';

function Dragons() {
  const dispatch = useDispatch();
  const { dragons, status, error } = useSelector((state) => state.dragons);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchDragons());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">SpaceX Dragons</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dragons.map((dragon) => (
          <div key={dragon.id} className="border p-4 rounded shadow">
            <h1 className="text-xl font-semibold">{dragon.name}</h1>
            <img src={dragon.flickr_images[0]} alt={dragon.name} className="w-full h-64 object-cover" />
            <p className="italic text-gray-600">{dragon.type}</p>
            <div className="mt-4">
              {dragon.reserved ? (
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => dispatch(cancelReservation(dragon.id))}
                >
                  Cancel Reservation
                </button>
              ) : (
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={() => dispatch(reserveDragon(dragon.id))}
                >
                  Reserve Dragon
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Dragons;
