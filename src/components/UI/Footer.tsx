function Footer() {
  return (
    <footer className="h-[5rem] relative bottom-0 flex flex-col flex-nowrap justify-center items-center py-5 border-t-2 bg-foreground/10 gap-1">
      <p className="text-sm">
        <i>
          &copy; {new Date().getFullYear()} Asmaa Bahy.
        </i>
      </p>
    </footer>
  );
}

export default Footer;
