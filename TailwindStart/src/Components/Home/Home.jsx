import { Link } from "react-router-dom";
import React, { Children } from "react";
import Button from "../Button";
import Services from "../Services/Services";
import Container from "../Container/Container";

function Home() {
  return (
    <>
      <div>
        <div className="w-full h-full flex justify-start items-start  border border-gray-400">
          <div className="flex justify-center items-center mt-24  ml-8 flex-col h-1/2  w-1/2">
            <h1 className="text-3xl  text-center font-mono mt-8 mb-2  text-pink-800">
              Get Your Business Online?
            </h1>
            <p className="mt-4 text-green-600">
              Design Your Digital World With Business!!!
            </p>
            <div className="mt-8 ml-8">
              <Link to="/contact">
                <Button
                  type="button"
                  bText="Get In Touch"
                  bgColor="bg-pink-800"
                  hoverBgColor="hover:bg-green-800"
                />
              </Link>
            </div>
          </div>
          <div className="h-1/2 w-1/2 border border-gray-400">
            <img
              src="https://cdn.pixabay.com/photo/2020/09/17/18/05/people-5579977_1280.png"
              alt="homePic"
              className="h-full w-full"
            />
          </div>
        </div>
        <Container>
          <Services />
        </Container>
      </div>
    </>
  );
}

export default Home;
