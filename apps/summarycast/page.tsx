import { Metadata } from "next";
import { createFrames } from "frames.js/next";

export const metadata: Metadata = {
  title: "AI SummaryCast",
  description: "Get instant AI summaries of any cast or thread!",
};

const { frames } = createFrames({
  basePath: "/apps/summarycast",
});

export default frames(async (ctx) => {
  const content = ctx.message?.inputText || "";

  if (!content) {
    return {
      image: (
        <div tw="flex flex-col justify-center items-center w-full h-full bg-white text-black">
          <p>Paste any cast/thread text below 👇</p>
        </div>
      ),
      textInput: "Paste a cast or thread to summarize",
      buttons: [{ label: "Summarize" }],
    };
  }

  const summary = `Summary: ${content.length > 100 ? content.slice(0, 97) + "..." : content}`; // Temporary logic

  return {
    image: (
      <div tw="flex flex-col justify-center items-center w-full h-full bg-white text-black p-4">
        <p>{summary}</p>
      </div>
    ),
    textInput: "Paste another cast to summarize",
    buttons: [{ label: "Summarize Again" }],
  };
});
