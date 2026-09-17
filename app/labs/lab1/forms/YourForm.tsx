"use client";

export default function YourForm() {
  return (
    <div>
      <h4>Your Form</h4>
      <form
        id="wd-your-form"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <h5>Student Profile</h5>

        <label htmlFor="wd-your-form-first-name">First name: </label>
        <input
          type="text"
          placeholder="Jane"
          defaultValue="Shayna"
          title="Your first name"
          id="wd-your-form-first-name"
        />
        <label htmlFor="wd-your-form-last-name">Last name: </label>
        <input
          type="text"
          placeholder="Doe"
          defaultValue="Ahteck"
          title="Your last name"
          id="wd-your-form-last-name"
        />
        <br />
        <label htmlFor="wd-your-form-nuid">Student ID: </label>
        <input
          type="text"
          placeholder="sample-nuid"
          defaultValue="001234567"
          id="wd-your-form-nuid"
        />
        <br />
        <label htmlFor="wd-your-form-password">Portal password: </label>
        <input
          type="password"
          placeholder="sample-pwd"
          defaultValue="sample-password"
          id="wd-your-form-password"
        />
        <br />

        <h5>Bio</h5>
        <label htmlFor="wd-your-form-bio">Tell us about yourself: </label>
        <br />
        <textarea
          id="wd-your-form-bio"
          rows={4}
          cols={40}
          placeholder="SAMPLE - I am a CS student who likes hiking and board games."
          defaultValue="I am a CS PhD student taking Web Dev."
        />
        <br />

        <h5>Class standing</h5>
        <label>What year are you?</label>
        <br />
        <input
          type="radio"
          name="your-form-standing"
          id="wd-your-form-standing-freshman"
        />
        <label htmlFor="wd-your-form-standing-freshman">Freshman</label>
        <br />
        <input
          type="radio"
          name="your-form-standing"
          id="wd-your-form-standing-sophomore"
        />
        <label htmlFor="wd-your-form-standing-sophomore">Sophomore</label>
        <br />
        <input
          type="radio"
          name="your-form-standing"
          id="wd-your-form-standing-junior"
        />
        <label htmlFor="wd-your-form-standing-junior">Junior</label>
        <br />
        <input
          type="radio"
          name="your-form-standing"
          id="wd-your-form-standing-senior"
        />
        <label htmlFor="wd-your-form-standing-senior">Senior</label>
        <br />
        <input
          type="radio"
          name="your-form-standing"
          id="wd-your-form-standing-graduate"
          defaultChecked
        />
        <label htmlFor="wd-your-form-standing-graduate">Graduate</label>
        <br />

        <label>Enrollment status:</label>
        <br />
        <input
          type="radio"
          name="your-form-enrollment"
          id="wd-your-form-enrollment-full-time"
          defaultChecked
        />
        <label htmlFor="wd-your-form-enrollment-full-time">Full-time</label>
        <br />
        <input
          type="radio"
          name="your-form-enrollment"
          id="wd-your-form-enrollment-part-time"
        />
        <label htmlFor="wd-your-form-enrollment-part-time">Part-time</label>
        <br />
        <input
          type="radio"
          name="your-form-enrollment"
          id="wd-your-form-enrollment-co-op"
        />
        <label htmlFor="wd-your-form-enrollment-co-op">On co-op</label>
        <br />

        <h5>Interests</h5>
        <label>Which topics interest you?</label>
        <br />
        <input
          type="checkbox"
          name="your-form-interests"
          id="wd-your-form-interest-web"
          defaultChecked
        />
        <label htmlFor="wd-your-form-interest-web">Web Development</label>
        <br />
        <input
          type="checkbox"
          name="your-form-interests"
          id="wd-your-form-interest-ai"
        />
        <label htmlFor="wd-your-form-interest-ai">Artificial Intelligence</label>
        <br />
        <input
          type="checkbox"
          name="your-form-interests"
          id="wd-your-form-interest-security"
        />
        <label htmlFor="wd-your-form-interest-security">Cybersecurity</label>
        <br />
        <input
          type="checkbox"
          name="your-form-interests"
          id="wd-your-form-interest-design"
        />
        <label htmlFor="wd-your-form-interest-design">UI/UX Design</label>
        <br />

        <h5>Program</h5>
        <label htmlFor="wd-your-form-major">Major: </label>
        <br />
        <select id="wd-your-form-major" defaultValue="CS">
          <option value="CS">Computer Science</option>
          <option value="DS">Data Science</option>
          <option value="IS">Information Systems</option>
          <option value="CE">Computer Engineering</option>
          <option value="OTHER">Other</option>
        </select>
        <br />

        <label htmlFor="wd-your-form-courses">
          Courses you plan to take:{" "}
        </label>
        <br />
        <select
          multiple
          id="wd-your-form-courses"
          defaultValue={["CS5610", "CS5800"]}
        >
          <option value="CS5610">CS5610 Web Development</option>
          <option value="CS5800">CS5800 Algorithms</option>
          <option value="CS5200">CS5200 Database Management</option>
          <option value="CS5100">CS5100 Foundations of AI</option>
          <option value="CS6510">CS6510 Advanced Software Development</option>
        </select>
        <br />

        <h5>Contact and dates</h5>
        <label htmlFor="wd-your-form-email">Email: </label>
        <input
          type="email"
          placeholder="SAMPLE - doe.j@northeastern.edu"
          defaultValue="ahteck.a@northeastern.edu"
          id="wd-your-form-email"
        />
        <br />
        <label htmlFor="wd-your-form-graduation-year">Graduation year: </label>
        <input
          type="number"
          placeholder="SAMPLE - 2027"
          defaultValue="2029"
          min={2024}
          max={2035}
          id="wd-your-form-graduation-year"
        />
        <br />
        <label htmlFor="wd-your-form-start-date">Program start date: </label>
        <input
          type="date"
          defaultValue="2024-09-01"
          min="2000-01-01"
          max="2035-12-31"
          id="wd-your-form-start-date"
        />
        <br />
        <label htmlFor="wd-your-form-experience">
          Web development experience (0-10):{" "}
        </label>
        <input
          type="range"
          defaultValue="7"
          min="0"
          max="10"
          id="wd-your-form-experience"
        />
        <br />

        <button id="wd-your-form-save" type="submit">
          Save
        </button>
        <button id="wd-your-form-cancel" type="button">
          Cancel
        </button>
      </form>
    </div>
  );
}
