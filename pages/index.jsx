import Head from "next/head";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Muhammad Irfan Bakhtiar</title>
        <meta
          name="description"
          content="Muhammad Irfan Bakhtiar Portfolio v2"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className="bg-slate-900 px-2 md:px-10 font-body text-primary">
        <Intro />
        <div className="w-full mx-auto p-4">
          <Experience />
          <Projects />
          <Footer />
        </div>
      </main>
    </div>
  );
}
