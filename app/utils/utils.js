const handleScroll = (elementID) => {
  const elem = document.getElementById(elementID);
  if (elem) {
    window.scrollTo({
      behavior: "smooth",
      top: elem.getBoundingClientRect().top - document.body.getBoundingClientRect().top - 80, //offset 80
    });
  }
};
export { handleScroll };
