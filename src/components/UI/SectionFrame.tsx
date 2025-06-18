function SectionFrame({ children, title } : {children: React.ReactNode, title?: string}) {
  return (
    <section className="min-h-[50vh] flex flex-col gap-3 justify-start items-center mb-20">
      {title && (
        <h1
          className="text-3xl xs:text-4xl xl:text-6xl mb-10 font-extrabold tracking-tighter 
        bg-gradient-to-r from-fuchsia-500 to-fuchsia-300 bg-clip-text text-transparent"
        >
          {title}
        </h1>
      )}

      {children}
    </section>
  );
}

export default SectionFrame;
