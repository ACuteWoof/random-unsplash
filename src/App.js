import { useState } from "react";

function App() {
  const [search, setSearch] = useState();
  const [res, setRes] = useState("1920x1080");
  const [url, setUrl] = useState("https://source.unsplash.com/random/1366x768");

  const handleSearch = (e) => {
    setUrl(`https://source.unsplash.com/random/${res}/?${search}`);
  };

  return (
    <div
      style={{
        backgroundImage:
          "url(https://source.unsplash.com/random/1920x1080/?dark%20water)",
        backgroundSize: "cover",
      }}
    >
      <div
        class='p-10 backdrop-blur-sm

'
      >
        <div class='mb-4'>
          <input
            type='text'
            placeholder='Search'
            class='input input-bordered w-full border-base-300 m-1'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <input
            type='text'
            placeholder='Resolution (example: 1920x1080)'
            class='input input-bordered w-full max-w-xs min-w-xs border-base-300 m-1'
            value={res}
            onChange={(e) => setRes(e.target.value)}
          />
          <button class='btn m-1' onClick={handleSearch}>
            Get image
          </button>
        </div>
        <div class='divider my-6' />
        <div class='flex gap-2 mb-4 justify-center content-center'>
          <div class='mockup-window border bg-base-300'>
            <img src={url} alt={search} />
          </div>
        </div>
        <div class='mockup-code'>
          <pre data-prefix='$'>
            <code>GET {url}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

export default App;
