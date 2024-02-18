import { useState, useCallback } from "react";

function App() {
  const images = [
    "https://images.pexels.com/photos/20187061/pexels-photo-20187061/free-photo-of-women-in-the-village-grow-rice-together-for-the-family.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    "https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/2252618/pexels-photo-2252618.jpeg?auto=compress&cs=tinysrgb&w=1200",
  ];
  const [curImg, setCurImg] = useState(0);
  const nextImage = useCallback(() => {
    setCurImg((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [curImg, setCurImg, images]);
  const prevImg = useCallback(() => {
    setCurImg((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [curImg, setCurImg, images]);

  return (
    <>
      <div className="w-full flex justify-center items-center flex-col mt-8">
        <h1 className="text-gray-400">Image Slider</h1>
        <div className="flex justify-center items-center w-1/2 mt-8">
          <button
            onClick={prevImg}
            className="mr-8 text-white  border-2 border-green-500  p-2 bg-green-500  rounded-sm cursor-pointer"
          >
            Prev
          </button>
          {images.map(
            (image, index) =>
              curImg === index && (
                <div key={image}>
                  <img className="text-black" src={image} alt="images" />
                </div>
              )
          )}
          <button
            onClick={nextImage}
            className="ml-8 text-white  border-2 border-green-500  p-2 bg-green-500  rounded-sm cursor-pointer"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
