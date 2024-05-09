import Image from "next/image";

import Main from "@/components/Main";
import Filter from "@/components/Filter";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      {/* Top section (background-image section) */}
      <section className="h-1/3">
        <Image
          src={"/bg-mobile-light.jpg"}
          width={500}
          height={500}
          alt="bg-image"
          className="bg-red-400 h-full  bg-[url('/bg-mobile-light.jpg')] w-full"
        />
      </section>

      {/* Bottom section */}
      <section className="flex bg-sky-400/80 h-2/3">
        <div className="mx-auto w-[21rem] sm:w-[30rem] md:w-[60rem] flex flex-col gap-y-10 -mt-48">
          <header className="flex justify-between items-center text-white">
            <h1 className="font-bold">TODO</h1>
            <button type="button">
              <Image
                src={"./icon-moon.svg"}
                width={30}
                height={30}
                alt="theme icon"
              />
            </button>
          </header>

          <Main />

          <Filter className={"lg:hidden bg-white rounded p-3"} />
        </div>
      </section>
    </div>
  );
}
