import React from "react";

function Message({ h1text, ptext }) {
  return (
    <div class="py-10">
      <div class="text-center">
        <h1 class="mt-2 text-3xl font-bold tracking-tight text-green-800 sm:text-5xl">
          {h1text}
        </h1>
        <p class="mt-4 text-xl leading-7 text-pink-800">{ptext}</p>
      </div>
    </div>
  );
}

export default Message;
