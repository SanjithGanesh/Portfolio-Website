/* =========================================================
   SANJITH GANESH — PORTFOLIO INTRO CONTROLLER
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  const intro = document.getElementById("portfolioIntro");

  if (!intro) return;

  document.body.classList.add("intro-active");

  let introFinished = false;

  function finishIntro() {

    if (introFinished) return;

    introFinished = true;

    intro.classList.add("intro-exit");

    document.body.classList.remove("intro-active");

    setTimeout(() => {
      intro.remove();
    }, 750);
  }


  /*
   * MAIN TIMELINE
   *
   * 0.0s  frame starts
   * 0.8s  name appears
   * 1.2s  portrait rises
   * 1.6s  roles appear
   * 3.2s  exit begins
   * 3.9s  portfolio fully visible
   */

  setTimeout(finishIntro, 3200);


  /*
   * Don't trap recruiters in the intro.
   * Clicking, scrolling or pressing a key
   * after the initial reveal skips ahead.
   */

  setTimeout(() => {

    intro.addEventListener("click", finishIntro);

    window.addEventListener(
      "wheel",
      finishIntro,
      { once: true }
    );

    window.addEventListener(
      "touchstart",
      finishIntro,
      { once: true }
    );

    window.addEventListener(
      "keydown",
      finishIntro,
      { once: true }
    );

  }, 1300);

});