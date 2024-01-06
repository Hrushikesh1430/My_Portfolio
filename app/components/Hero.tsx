import Image from "next/image";

export const Hero = () => {
  return (
    <section className="mx-auto mb-52 max-w-screen-lg  flex gap-16 items-center border-8 border-red-600">
      <div>
        <span className="font-Poppins text-customWhite text-6xl font-bold">
          Hi 👋,
          <br /> My name is <br />
          <span className="text-customBlue">Hrushikesh Tawde</span>
          <br /> I build things for web
        </span>
      </div>
      <div>
        <Image src="/profile_1.jpeg" alt="profile_1" width={300} height={300} className="rounded-full" />
      </div>
    </section>
  );
};
