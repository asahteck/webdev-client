export default function BackgroundColors() {
  return (
    <div id="wd-css-background-colors">
      <h3 className="wd-bg-color-blue wd-fg-color-white">Background color</h3>
      <p className="wd-bg-color-red wd-fg-color-black">
        This background of this paragraph is red but{" "}
        <span className="wd-bg-color-green wd-fg-color-white">
          the background of this text is green and the foreground white
        </span>
      </p>
      <p id="wd-ai-bg" className="wd-bg-color-yellow wd-fg-color-black">
        The background of this paragraph is yellow and the foreground is black
      </p>
      <p className="wd-bg-color-yellow wd-fg-color-black">
        The background of this paragraph is yellow with black text so it stays
        readable, but{" "}
        <span className="wd-bg-color-gray wd-fg-color-blue">
          this text sits on a light gray background in blue
        </span>
      </p>
    </div>
  );
}