export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
        <div id="wd-ai-dimension" className="wd-ai-dimension-sample">
          This sentence is far too long to fit in a 120 by 60 pixel box, so
          it spills out instead of stretching the box to fit.
        </div>
        <div id="wd-oyo-dimension" className="wd-dimension-oyo wd-bg-color-green wd-fg-color-white">
          Fixed size even when the text is short or longer just like this.
        </div>
      </div>
    </div>
  );
}