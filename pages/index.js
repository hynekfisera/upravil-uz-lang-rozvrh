import Head from "next/head";

export default function Home() {
  const getText = () => {
    const date = new Date();
    const hours = date.getHours();
    if (hours >= 16 && hours <= 20) {
      return "Asi ne";
    } else if (hours >= 21 && hours <= 23) {
      return "Už by mohl";
    } else if (hours >= 0 && hours <= 6) {
      return "Měl by";
    } else {
      return "Ne.";
    }
  };

  return (
    <>
      <Head>
        <title>Upravil už Lang rozvrh?</title>
      </Head>
      <h1>{getText()}</h1>
    </>
  );
}
