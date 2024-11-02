import "../../../public/hall.css";

export default async function Residence({ params }) {
  const props = await params;
  return (
    <>
      <div id="main">
        <h1 className="flex font-larg bg-red-200 text-2xl px-4 py-3">
          SBUFind
        </h1>
        <h2 className="text-center text-2xl">{props.hall} Hall</h2>
        <h3 className="text-center">Rating: 3.5/5</h3>
        <div className="room-container">
          <div className="room-item bg-slate-300 flex flex-col items-center justify-center rounded-md">
            <h3>K-215</h3>
            <p>Limit: 1/2</p>
            <button>View Detail</button>
          </div>
          <div className="room-item bg-slate-300 flex flex-col items-center justify-center rounded-md">
            <h3>K-215</h3>
            <p>Limit: 1/2</p>
            <button>View Detail</button>
          </div>
          <div className="room-item bg-slate-300 flex flex-col items-center justify-center rounded-md">
            <h3>K-215</h3>
            <p>Limit: 1/2</p>
            <button>View Detail</button>
          </div>
          <div className="room-item bg-slate-300 flex flex-col items-center justify-center rounded-md">
            <h3>K-215</h3>
            <p>Limit: 1/2</p>
            <button>View Detail</button>
          </div>
        </div>

        <h2 className="text-2xl">Reviews (15)</h2>
        <div className="review-container">
          <div className="review-addComment flex justify-between bg-slate-300 p-4 gap-3">
            <img
              src="https://c.disquscdn.com/next/current/marketing/assets/img/brand/favicon-192x192.png"
              alt=""
              className="size-16"
            />
            <input
              type="text"
              placeholder="Add a review"
              className="border-black grow	"
            />
            <button>Send</button>
          </div>
          <div className="review p-4">
            <h3>Tommy Wiseau 4.1/5 9/23/2022</h3>
            <p>Can't say I'm the biggest fan</p>
          </div>
          <div className="review p-4">
            <h3>Joener 4.1/5 9/23/2022</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
              ipsam accusantium eius aspernatur quae voluptatem ab asperiores
              iusto rem animi nobis, sapiente id tempore necessitatibus
              pariatur, optio dicta natus corrupti?
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
