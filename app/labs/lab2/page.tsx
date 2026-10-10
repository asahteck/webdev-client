import "./index.css";
import ForegroundColors from "./ForegroundColors";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import Padding from "./Padding";
import Margins from "./Margins";
import BoxModel from "./BoxModel";
import Corners from "./Corners";
import Dimensions from "./Dimensions"
import Display from "./Display";
import Positions from "./Positions";
import Zindex from "./Zindex";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import MediaQueriesDemo from "./MediaQueriesDemo";
import ReactIconsSampler from "./tailwind/ReactIconsSampler";

export default function Lab2() {
  return (
    <>
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <h3>Styling with the STYLE attribute</h3>
      <p>
        Style attribute allows configuring look and feel right on the
        element. Although it's very convenient it is considered bad
        practice and you should avoid using the style attribute
      </p>
      <p id="wd-ai-style-attr" style={{ backgroundColor: "purple", color: "white" }}>
        The style attribute can set several properties at once, such as
        a purple background with white text, but the values only apply
        to this one element and can't be reused anywhere else.
      </p>
      <p style={{ backgroundColor: "green", color: "yellow" }}>
        Another paragraph for the "On Your Own" section.
      </p>
    </div>
    <div id="wd-css-id-selectors">
      <h3>ID selectors</h3>
      <p id="wd-id-selector-1">
        Instead of changing the look and feel of all the
        elements of the same name, e.g., P, we can refer to a
        specific element by its ID
      </p>
      <p id="wd-id-selector-2">
        Here's another paragraph using a different ID and a
        different look and feel
      </p>
      <p id="wd-ai-id-selector">
        This paragraph is styled by an ID selector too, so its teal
        background and white text come from the stylesheet rather than
        a style attribute on the element itself
      </p>
      <p id="wd-id-selector-3">
        Here's another paragraph for the "On Your Own" section
      </p>
    </div>
    <div id="wd-css-class-selectors">
      <h3>Class selectors</h3>
      <p className="wd-class-selector">
        Instead of using IDs to refer to elements, you can use an
        element's CLASS attribute
      </p>
      <h4 className="wd-class-selector">
        This heading has same style as paragraph above
      </h4>
      <p className="wd-ai-class-selector">
        Class selectors can be reused across any number of elements, so
        this paragraph and the heading below share the same dark slate
        blue background and gold text
      </p>
      <h4 className="wd-ai-class-selector">
        This heading has same style as paragraph above
      </h4>
      <p className="wd-your-class">
        This paragraph is for the "On Your Own" section
      </p>
      <h4 className="wd-your-class">
        This heading has same style as paragraph above
      </h4>
    </div>
    <div id="wd-css-document-structure">
      <div className="wd-selector-1">
        <h3>Document structure selectors</h3>
        <div className="wd-selector-2">
          Selectors can be combined to refer elements in particular
          places in the document
          <p className="wd-selector-3">
            This paragraph's red background is referenced as
            <br />
            .selector-2 .selector3
            <br />
            meaning the descendant of some ancestor.
            <br />
            <span className="wd-selector-4">
              Whereas this span is a direct child of its parent
            </span>
            <br />
            You can combine these relationships to create specific
            styles depending on the document structure
            <br />
            <span className="wd-ai-selector-5">
              This span is a descendant of .wd-selector-1, so it picks up
              its own background and text color from the
              .wd-selector-1 .wd-ai-selector-5 rule
            </span>
            <br />
            <span className="wd-selector-5">One more element.</span>
          </p>
        </div>
      </div>
    </div>
    <div id="wd-css-conflicting-rules">
      <h3>Conflicting rules and specificity</h3>
      <h5 id="wd-add-conflict" className="wd-add-conflict">
        2.1.6 On your own example of conflicting rules.
      </h5>
      <p id="wd-ai-cascade" className="wd-ai-cascade">
        This paragraph matches three rules that each set background-color:
        the p tag rule (green), the .wd-ai-cascade class rule (yellow), and
        the #wd-ai-cascade ID rule (red). It renders red because the ID
        selector is the most specific of the three.
      </p>
    </div>

    <ForegroundColors />
    <BackgroundColors />
    <Borders />
    <Padding />
    <Margins />
    <BoxModel />
    <Corners />
    <Dimensions />
    <Display />
    <Positions />
    <Zindex />
    <Float />
    <GridLayout />
    <Flex />
    <MediaQueriesDemo />
    <ReactIconsSampler />
    <p>
      <a href="/labs/lab2/tailwind">Open Tailwind CSS lab →</a>
    </p>
    </>
  );
}