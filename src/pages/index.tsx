import Head from "next/head";
import Image from "next/image";

type StatProps = {
  label: string;
  value: string;
};

const Stats: StatProps[] = [
  {
    label: "Followers",
    value: "80K",
  },
  {
    label: "Likes",
    value: "803K",
  },
  {
    label: "Photos",
    value: "1.4K",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Profile Card</title>
        <meta name="description" content="profile-card" />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <main className="font-kumbh relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-dark-cyan">
        <Image
          className="absolute left-0 top-0 w-[100vw] -translate-x-1/2 -translate-y-1/2"
          src="/images/bg-pattern-top.svg"
          width={100}
          height={100}
          alt="Background-Pattern"
        />
        <Image
          className="absolute bottom-0 right-0 w-[100vw] translate-x-1/2 translate-y-1/2"
          src="/images/bg-pattern-bottom.svg"
          width={100}
          height={100}
          alt="Background-Pattern"
        />
        {/* Profile Card */}
        <div className="relative flex w-[480px] flex-col overflow-hidden rounded-3xl bg-white">
          <div className="relative">
            <Image
              className="w-full"
              src="/images/bg-pattern-card.svg"
              width={100}
              height={100}
              alt="Card-Background"
            />
            <div className="absolute bottom-0 left-1/2 w-32 -translate-x-1/2 translate-y-1/2 rounded-full bg-white p-1">
              <Image
                className="w-full rounded-full"
                src="/images/image-victor.jpg"
                width={100}
                height={100}
                alt="Profile-Image"
              />
            </div>
          </div>
          <div className="mt-14 flex flex-col items-center border-b-2 p-6">
            <div className="flex flex-row items-center justify-center gap-4 align-middle">
              <h1 className="text-2xl font-bold text-very-dark-desaturated-blue">
                Victor Crest
              </h1>
              <p className="text-2xl font-medium text-dark-grayish-blue">26</p>
            </div>
            <p className="mb-2 mt-2 text-xl font-medium text-dark-grayish-blue">
              London
            </p>
          </div>
          <div className="flex flex-row justify-evenly">
            {Stats.map(({ label, value }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center gap-1 p-6"
              >
                <p className="mt-2 text-2xl font-bold">{value}</p>
                <p className="text-sm font-medium tracking-widest text-dark-gray">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
