import Head from "next/head";

export const SeoMetadata = ({ title, desc }) => {
  return (
      <Head>
        <title>{ title || "Adarsh Tiwari - Software Developer"}</title>
        <meta
          name="description"
          content={desc || ""}
        />
      </Head>
  )
}
