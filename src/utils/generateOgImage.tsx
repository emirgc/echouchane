import satori, { SatoriOptions } from "satori";
import { SITE } from "@config";
import { writeFile } from "node:fs/promises";
import { Resvg } from "@resvg/resvg-js";

const fetchFonts = async () => {
  // Regular Font
  const fontFileRegular = await fetch(
    "https://www.1001fonts.com/download/font/ibm-plex-mono.regular.ttf"
  );
  const fontRegular: ArrayBuffer = await fontFileRegular.arrayBuffer();

  // Bold Font
  const fontFileBold = await fetch(
    "https://www.1001fonts.com/download/font/ibm-plex-mono.bold.ttf"
  );
  const fontBold: ArrayBuffer = await fontFileBold.arrayBuffer();

  return { fontRegular, fontBold };
};

const { fontRegular, fontBold } = await fetchFonts();

const ogImage = (text: string) => {
  return (
<div
  style={{
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fbfefb',
    fontSize: 32,
    fontWeight: 600,
  }}
>
    <svg width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="m50 12.5c0-3.4531 2.7969-6.25 6.25-6.25h37.5c3.4531 0 6.25 2.7969 6.25 6.25s-2.7969 6.25-6.25 6.25h-37.5c-3.4531 0-6.25-2.7969-6.25-6.25zm43.75 18.75h-37.5c-3.4531 0-6.25 2.7969-6.25 6.25s2.7969 6.25 6.25 6.25h37.5c3.4531 0 6.25-2.7969 6.25-6.25s-2.7969-6.25-6.25-6.25zm-87.5 12.5h25c3.4531 0 6.25-2.8008 6.25-6.25v-25c0-3.4492-2.7969-6.25-6.25-6.25h-25c-3.4531 0-6.25 2.8008-6.25 6.25v25c0 3.4492 2.7969 6.25 6.25 6.25zm37.5 37.5h-37.5c-3.4531 0-6.25 2.7969-6.25 6.25s2.7969 6.25 6.25 6.25h37.5c3.4531 0 6.25-2.7969 6.25-6.25s-2.7969-6.25-6.25-6.25zm0-25h-37.5c-3.4531 0-6.25 2.7969-6.25 6.25s2.7969 6.25 6.25 6.25h37.5c3.4531 0 6.25-2.7969 6.25-6.25s-2.7969-6.25-6.25-6.25zm50 0h-25c-3.4531 0-6.25 2.8008-6.25 6.25v25c0 3.4531 2.7969 6.25 6.25 6.25h25c3.4531 0 6.25-2.7969 6.25-6.25v-25c0-3.4492-2.7969-6.25-6.25-6.25z"/>
    </svg>
    <div style={{ marginTop: 40 }}>{text}</div>
</div>
  );
};

const options: SatoriOptions = {
  width: 1200,
  height: 630,
  embedFont: true,
  fonts: [
    {
      name: "IBM Plex Mono",
      data: fontRegular,
      weight: 400,
      style: "normal",
    },
    {
      name: "IBM Plex Mono",
      data: fontBold,
      weight: 600,
      style: "normal",
    },
  ],
};

const generateOgImage = async (mytext = SITE.title) => {
  const svg = await satori(ogImage(mytext), options);

  // render png in production mode
  if (import.meta.env.MODE === "production") {
    const resvg = new Resvg(svg);
    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();

    console.info("Output PNG Image  :", `${mytext}.png`);

    await writeFile(`./dist/${mytext}.png`, pngBuffer);
  }

  return svg;
};

export default generateOgImage;